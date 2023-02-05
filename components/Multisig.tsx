import { WalletData } from "@cosmos-kit/core";
import { useWallet } from "@cosmos-kit/react";
import axios from "axios";
import { motion } from "framer-motion";
import invariant from "invariant";
import { useState } from "react";
import { FiKey } from "react-icons/fi";
import { useQuery } from "react-query";

import Button from "./Button";
import Card from "./Card";
import ConnectKeplr from "./ConnectKeplr";
import DAppLayout from "./DAppLayout";
import Logo from "./Logo";
import MultisigCreateKey from "./MultisigCreateKey";
import MultisigCreateTx from "./MultisigCreateTx";

type State = {
  status: "idle" | "create-multisig" | "create-tx";
};

const network = axios.create({
  baseURL: "http://135.181.118.58:5001",
});

const Multisig = () => {
  const [state, setState] = useState<State>({
    status: "idle",
  });
  const { status } = state;
  const wallet = useWallet();

  const { data: account } = wallet;
  invariant(account, "No account");

  const multisigsQuery = useQuery("multisigs", async () => {
    const res = await network.get(`/multisigs?operator_address=${account.address}`);
  });

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
              onClick={() => setState({ ...state, status: "create-multisig" })}
              Icon={FiKey}
            >
              {"Create multisig"}
            </Button>
          </motion.div>
          <hr className="opacity-10" />
          <div className="p-8">
            <h2 className="font-semibold text-info-300 text-2xl leading-10">{"Multisigs"}</h2>
            <p className="text-info-200">{"List of multisigs you are registered on."}</p>
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

export default Multisig;
