import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useState } from "react";
import { FiEdit3, FiMinus, FiPlus, FiUserCheck } from "react-icons/fi";

import { genID } from "@/utils/id";

export type Slot = {
  id: string;
  name: string;
  address: string | null;
};

export const genSlot = (address: string | null = null, name: string = ""): Slot => ({
  id: genID(),
  name,
  address,
});

const AddressesCircle = ({
  quorum,
  slots,
  onChange,
}: {
  quorum: number;
  slots: Slot[];
  onChange: (v: Slot[]) => void;
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const filledSlots = slots.filter((s) => s.address !== null);
  const calcCoords = useCallback(
    (i: number): { x: number; y: number } => {
      const itemRadius = 60;
      const circleRadius = 180;
      const ratio = i / filledSlots.length;
      const angle = 360 * ratio;
      const x = circleRadius * Math.cos((Math.PI * 2 * angle) / 360 - Math.PI) - itemRadius;
      const y = circleRadius * Math.sin((Math.PI * 2 * angle) / 360) - itemRadius;
      return { x, y };
    },
    [filledSlots.length],
  );

  const clearSlot = (i: number) => {
    const slotsCopy = [...slots];
    const slotCopy: Slot = genSlot();
    slotsCopy[i] = slotCopy;
    onChange(slotsCopy);
  };

  const canDelete = filledSlots.length > 2;
  const canAdd = filledSlots.length < slots.length;

  return (
    <motion.div
      initial={false}
      animate={{ scale: 1, opacity: 1 }}
      className="py-12 flex items-center justify-center select-none"
    >
      <div className="w-[380px] h-[380px] border-4 border-opacity-10 border-dashed border-blue-2 rounded-full flex items-center justify-center">
        <div className="w-[360px] h-[360px] bg-blue-2 bg-opacity-5 border border-opacity-20 border-blue-2 rounded-full flex items-center justify-center relative">
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center flex-col">
            <div className="-mt-4 opacity-50 text-sm">{"Quorum"}</div>
            <div className="relative">
              <div className="items-center justify-center inline-flex space-x-2">
                <span className="text-4xl font-semibold text-orange-1">{quorum}</span>
                <span>{"out of"}</span>
                <span className="text-4xl font-semibold">{filledSlots.length}</span>
              </div>
              <div className="absolute top-full left-0 right-0 text-center mt-2 pb-2 overflow-hidden">
                <AnimatePresence>
                  {canAdd && (
                    <motion.button
                      initial={{ y: -40, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -40, opacity: 0 }}
                      className="bg-blue-2 text-sm bg-opacity-20 hover:bg-opacity-30 inline-flex items-center py-1 px-2 rounded"
                      onClick={() => {
                        const slotsCopy = [...slots];
                        const firstNullindex = slotsCopy.findIndex((slot) => slot.address === null);
                        if (firstNullindex === -1) return;
                        const slot = slotsCopy[firstNullindex]!;
                        const slotCopy: Slot = { ...slot, address: "" };
                        slotsCopy[firstNullindex] = slotCopy;
                        onChange(slotsCopy);
                      }}
                    >
                      <FiPlus className="mr-2" />
                      {"Add key"}
                    </motion.button>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
          <div className="relative">
            <AnimatePresence>
              {slots.map((slot, i) => {
                if (slot.address === null) return null;
                const { x, y } = calcCoords(filledSlots.indexOf(slot));
                const isValid = slot.name !== "";
                const isHidden = activeIndex !== null && activeIndex !== i;
                return (
                  <motion.div
                    key={i}
                    initial={{ x, y, scale: 0 }}
                    animate={{
                      x,
                      y,
                      scale: 1,
                      opacity: isHidden ? 0 : 1,
                    }}
                    exit={{ scale: 0, opacity: 0 }}
                    className={`
                      group absolute rounded-full p-2 bg-blue-7 h-[120px] w-[120px] shadow-md shadow-[rgba(0,0,0,0.1)] flex items-center justify-center
                      border-2 border-opacity-20 border-blue-2
                    `}
                  >
                    {!isValid && (
                      <div className="absolute top-0 left-0 right-0 bottom-0 shadow-glow-info rounded-full pointer-events-none animate-glow-info"></div>
                    )}
                    <div className="absolute top-0 right-0">
                      <AnimatePresence>
                        {canDelete && i !== 0 && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            whileTap={{ scale: 0.8 }}
                            style={{ originX: 0.5, originY: 0.5 }}
                          >
                            <button
                              className="group-hover:visible invisible rounded-full p-2 bg-danger-800 border border-blue-2 border-opacity-30 shadow-md text-danger-200"
                              onClick={() => clearSlot(i)}
                            >
                              <FiMinus />
                            </button>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    <div className="w-full h-full p-1 flex flex-col">
                      {isValid ? (
                        <div className="leading-none text-sm text-center">
                          <div className="text-center text-info-700 pt-2">
                            <FiUserCheck className="inline mb-2" size={16} />
                          </div>
                          <div className="truncate font-semibold text-info-400 mb-1">
                            {slot.name}
                          </div>
                          <div className="break-all text-info-600 line-clamp-2 text-xs leading-none">
                            {slot.address}
                          </div>
                        </div>
                      ) : (
                        <button
                          className="group bg-info-600 bg-opacity-10 border border-info-300 border-opacity-10 h-full w-full flex items-center justify-center rounded-full text-info-500 hover:bg-info-600 hover:bg-opacity-20 active:bg-opacity-30"
                          onClick={() => setActiveIndex(i)}
                        >
                          <FiEdit3 size={24} className="opacity-50 group-hover:opacity-100 mr-2" />
                          <span>{"Fill"}</span>
                        </button>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AddressesCircle;
