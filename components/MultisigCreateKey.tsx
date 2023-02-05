import { useWallet } from "@cosmos-kit/react";
import { AnimatePresence, motion } from "framer-motion";
import invariant from "invariant";
import { useMemo, useState } from "react";
import { FiArrowLeft, FiCheck } from "react-icons/fi";

import AddressesCircle, { genSlot, Slot } from "./AddressesCircle";
import Button from "./Button";
import Card from "./Card";

type CreateKeyPayload = {
  quorum: number;
  multisig_address: string;
  operators: Array<string | null>;
};

const MultisigCreateKey = ({ onClose }: { onClose(): void }) => {
  const wallet = useWallet();
  const { data: account } = wallet;
  invariant(account, "No account");

  const [payload, setPayload] = useState<CreateKeyPayload>({
    quorum: 2,
    multisig_address: "0x123456",
    operators: [account.address!, null],
  });
  const [slots, setSlots] = useState<Slot[]>([
    genSlot(account?.address!, account?.username),
    genSlot(""),
    genSlot(),
    genSlot(),
    genSlot(),
    genSlot(),
  ]);

  const handleSubmit = () => {
    console.log(slots);
  };

  const isValid = useMemo(() => {
    return slots.every((s) => s.address === null || s.address !== "");
  }, [slots]);

  return (
    <div className="space-y-4">
      <div className="bg-violet-700 bg-opacity-20 rounded p-4 text-violet-300 border border-violet-400 border-opacity-10 shadow-md">
        <h2 className="font-semibold text-lg text-violet-400 mb-2 space-x-2">
          <span className="text-sm bg-violet-400 text-violet-900 px-1 rounded uppercase tracking-widest">
            {"Multisig"}
          </span>
          <span>{"Public keys & quorum configuration"}</span>
        </h2>
        <p>
          {
            "Register each account public key to craft the final multisig address, and chose the minimum approvals required to sign a transaction."
          }
        </p>
      </div>
      <Card>
        <div className="relative">
          <div className="absolute z-10 top-4 left-4">
            <button className="btn py-2 px-4 flex items-center" onClick={onClose}>
              <FiArrowLeft className="inline mr-2" />
              <span>{"Back"}</span>
            </button>
          </div>
          <div className="p-8 space-y-8">
            <div className="relative">
              <AddressesCircle quorum={payload.quorum} slots={slots} onChange={setSlots} />
              <div className="absolute bottom-4 right-4 overflow-hidden pt-4">
                <AnimatePresence>
                  {isValid && (
                    <motion.div
                      initial={{ opacity: 0, y: 60 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 60 }}
                    >
                      <Button Icon={FiCheck} disabled={!isValid}>
                        {"Review & create"}
                      </Button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default MultisigCreateKey;
