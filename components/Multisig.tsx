import { WalletData } from "@cosmos-kit/core";
import { useWallet } from "@cosmos-kit/react";
import axios from "axios";
import { motion } from "framer-motion";
import invariant from "invariant";
import { useState } from "react";
import { FiKey } from "react-icons/fi";
import { useQuery } from "react-query";

import multisigClient from "@/api/multisigClient";

import Button from "./Button";
import Card from "./Card";
import DAppLayout from "./DAppLayout";
import MultisigCreateKey from "./MultisigCreateKey";
import MultisigCreateTx from "./MultisigCreateTx";

type State = {
  status: "idle" | "create-multisig" | "create-tx";
};

type Operator = {
  id: number;
  address: string;
  created_on: string;
};

type Multisig = {
  id: number;
  created_on: string;
  updated_on: string;
  multisig_address: string;
  operators: Operator[];
  quorum: number;
};

const MultisigComponent = () => {
  const [state, setState] = useState<State>({
    status: "idle",
  });
  const { status } = state;
  const wallet = useWallet();

  const { data: account } = wallet;
  invariant(account, "No account");

  const multisigsQuery = useQuery("multisigs", () =>
    multisigClient
      .get<{ multisigs: Multisig[] }>(`/multisigs?operator_address=${account.address}`)
      .then((d) => d.data),
  );

  return (
    <DAppLayout account={account}>
      {status === "idle" ? (
        <Card>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-8 text-center"
          >
            <Button
              key="create-multi"
              onClick={async () => {
                await new Promise((r) => setTimeout(r, 300));
                setState({ ...state, status: "create-multisig" });
              }}
              Icon={FiKey}
            >
              {"Create multisig"}
            </Button>
          </motion.div>
          <hr className="opacity-10" />
          <div className="p-8">
            <h2 className="font-semibold text-info-300 text-2xl leading-10">{"Multisigs"}</h2>
            <p className="text-info-200">{"List of multisigs you are registered on."}</p>
            {!!multisigsQuery.data && (
              <div className="mt-8">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="text-left">{"address"}</th>
                      <th className="text-right">{"quorum"}</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {multisigsQuery.data.multisigs.map((multisig) => (
                      <tr key={multisig.id} className="bg-blue-2 bg-opacity-5">
                        <td className="text-left p-4">{multisig.multisig_address}</td>
                        <td className="text-right p-4">{`${multisig.quorum}/${multisig.operators.length}`}</td>
                        <td className="text-center p-4 min">
                          <Button>{"View"}</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </Card>
      ) : status === "create-multisig" ? (
        <MultisigCreateKey onClose={() => setState({ ...state, status: "idle" })} />
      ) : status === "create-tx" ? (
        <MultisigCreateTx onClose={() => setState({ ...state, status: "idle" })} />
      ) : null}
    </DAppLayout>
  );
};

export default MultisigComponent;
