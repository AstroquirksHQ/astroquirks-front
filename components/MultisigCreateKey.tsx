import { useWallet } from "@cosmos-kit/react";
import { AnimatePresence, motion } from "framer-motion";
import invariant from "invariant";
import { useMemo, useState } from "react";
import { FiArrowLeft, FiCheck, FiChevronRight } from "react-icons/fi";

import AddressesCircle, {
  genSlot,
  isSlotEmpty,
  isSlotHidden,
  isSlotValid,
  Slot,
} from "./AddressesCircle";
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

  const filledSlots = useMemo(() => {
    return slots.filter((s) => !isSlotHidden(s));
  }, [slots]);

  const isValid = useMemo(() => {
    return filledSlots.every(isSlotValid) && filledSlots.length > 1;
  }, [filledSlots]);

  return (
    <div className="space-y-4">
      <Card>
        <div className="p-4">
          <StepDesc />
        </div>
        <div className="relative">
          <div className="absolute z-10 top-0 left-4">
            <button className="btn py-2 px-4 flex items-center" onClick={onClose}>
              <FiArrowLeft className="inline mr-2" />
              <span>{"Back"}</span>
            </button>
          </div>
          <div className="p-8">
            <AddressesCircle quorum={payload.quorum} slots={slots} onChange={setSlots} />
            <AnimatePresence>
              {isValid && (
                <motion.div
                  key="continue"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto", transition: { opacity: { delay: 0.3 } } }}
                  exit={{ opacity: 0, height: 0, transition: { height: { delay: 0.3 } } }}
                >
                  <div className="flex justify-end">
                    <Button disabled={!isValid}>{"Continue"}</Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </Card>
    </div>
  );
};

const StepDesc = () => (
  <div className="bg-violet-700 bg-opacity-20 rounded p-4 text-violet-500 border border-violet-500 border-opacity-20 shadow-md">
    <h2 className="font-semibold text-lg text-violet-300 mb-2 space-x-2">
      <span className="text-sm bg-violet-300 text-violet-900 px-1 rounded uppercase tracking-widest">
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
);

export default MultisigCreateKey;
