import { AnimatePresence, motion } from "framer-motion";
import { FormEventHandler, MutableRefObject, useCallback, useRef, useState } from "react";
import { CgSpinnerTwoAlt } from "react-icons/cg";
import { FiCheck, FiEdit, FiMinus, FiPlus, FiUserCheck } from "react-icons/fi";

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

export const isSlotValid = (slot: Slot): boolean =>
  slot.address !== null && slot.address !== "" && slot.name !== "";

export const isSlotHidden = (slot: Slot): boolean => slot.address === null;

export const isSlotEmpty = (slot: Slot): boolean => slot.address === "" && slot.name === "";

const ITEM_RADIUS = 60;
const CIRCLE_RADIUS = 180;

const AddressesCircle = ({
  quorum,
  slots,
  onChange,
}: {
  quorum: number;
  slots: Slot[];
  onChange: (v: Slot[]) => void;
}) => {
  const submitRef = useRef<(() => void) | null>(null);
  const [fakeAddLoading, setFakeAddLoading] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const filledSlots = slots.filter((s) => s.address !== null);
  const calcCoords = useCallback(
    (i: number): { x: number; y: number } => {
      const ratio = i / filledSlots.length;
      const angle = 360 * ratio;
      const x = CIRCLE_RADIUS * Math.cos((Math.PI * 2 * angle) / 360 - Math.PI) - ITEM_RADIUS;
      const y = CIRCLE_RADIUS * Math.sin((Math.PI * 2 * angle) / 360) - ITEM_RADIUS;
      return { x, y };
    },
    [filledSlots.length],
  );

  const clearSlot = (i: number) => {
    let slotsCopy = [...slots];
    const slotCopy: Slot = genSlot();
    slotsCopy[i] = slotCopy;
    onChange(slotsCopy);
  };

  const canDelete = filledSlots.length > 2;
  const canAdd = filledSlots.length < slots.length;
  const activeSlot = activeIndex !== null ? slots[activeIndex] : null;

  return (
    <motion.div
      initial={false}
      animate={{ scale: 1, opacity: 1 }}
      className="py-12 flex items-center justify-center select-none"
    >
      <div className="w-[380px] h-[380px] border-4 border-opacity-10 border-dashed border-blue-2 rounded-full flex items-center justify-center">
        <div className="w-[360px] h-[360px] bg-blue-2 bg-opacity-5 border border-opacity-20 border-blue-2 rounded-full flex items-center justify-center relative">
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center flex-col">
            <AnimatePresence>
              {activeIndex === null ? (
                <motion.div
                  initial={{ opacity: 0, scale: 1.2 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{
                    opacity: 0,
                    scale: 1.2,
                    transition: { opacity: { duration: 0.2 }, scale: { duration: 0.3 } },
                  }}
                  key="quorum"
                  className="flex flex-col items-center justify-center"
                >
                  <div className="-mt-4 opacity-50 text-sm">{"Quorum"}</div>
                  <div className="relative">
                    <div className="items-center justify-center inline-flex space-x-2">
                      <span className="text-4xl font-semibold text-orange-1">{quorum}</span>
                      <span>{"out of"}</span>
                      <span className="text-4xl font-semibold">{filledSlots.length}</span>
                    </div>
                    <div className="absolute top-full left-0 right-0 text-center pt-2 pb-2 overflow-hidden">
                      <AnimatePresence>
                        {canAdd && (
                          <motion.button
                            initial={{ y: -40, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -40, opacity: 0 }}
                            className={`
                              bg-blue-2 text-sm bg-opacity-20 inline-flex items-center py-1 px-2 rounded
                              ${fakeAddLoading ? "" : "hover:bg-opacity-30"}
                            `}
                            disabled={fakeAddLoading}
                            onClick={() => {
                              setFakeAddLoading(true);
                              const slotsCopy = [...slots];
                              const firstNullindex = slotsCopy.findIndex(
                                (slot) => slot.address === null,
                              );
                              if (firstNullindex === -1) return;
                              const slot = slotsCopy[firstNullindex]!;
                              const slotCopy: Slot = { ...slot, address: "" };
                              slotsCopy[firstNullindex] = slotCopy;
                              onChange(slotsCopy);
                              setTimeout(() => {
                                setActiveIndex(firstNullindex);
                                setFakeAddLoading(false);
                              }, 300);
                            }}
                          >
                            <div className="relative inline-flex items-center">
                              {fakeAddLoading ? (
                                <CgSpinnerTwoAlt
                                  size={16}
                                  className="opacity-50 animate-spin-fast"
                                />
                              ) : (
                                <>
                                  <FiPlus className="mr-2" />
                                  {"Add key"}
                                </>
                              )}
                            </div>
                          </motion.button>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="edit"
                  className="rounded-full absolute z-10 top-0 left-0 right-0 bottom-0 flex items-center justify-center flex-col"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    transition: { ease: "anticipate", delay: 0.2 },
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.8,
                    transition: {
                      opacity: { duration: 0.2 },
                      scale: { duration: 0.3 },
                    },
                  }}
                >
                  <div className="p-8 w-[350px] h-[300px] bg-blue-7 border-2 border-info-500 border-opacity-30 shadow-md rounded">
                    <SlotForm
                      slot={activeSlot!}
                      onChange={(newSlot) => {
                        const newSlots = [...slots];
                        newSlots[activeIndex] = newSlot;
                        onChange(newSlots);
                        setActiveIndex(null);
                      }}
                      submitRef={submitRef}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className="relative">
            <AnimatePresence>
              {slots.map((slot, i) => {
                if (slot.address === null) return null;
                const { x, y } = calcCoords(filledSlots.indexOf(slot));
                const isValid = slot.name !== "";
                const isStandBy = activeIndex !== null && activeIndex !== i;
                const isActive = activeIndex === i;
                const isEmpty = isSlotEmpty(slot);
                const canDeleteItem = canDelete && i !== 0 && !isActive;
                const canEditItem = !isEmpty && !isActive;
                return (
                  <motion.div
                    key={slot.id}
                    initial={{ x, y, scale: 0 }}
                    animate={{
                      x: isActive ? ITEM_RADIUS + 40 : x,
                      y: isActive ? CIRCLE_RADIUS / 2 - ITEM_RADIUS + 40 : y,
                      scale: 1,
                      opacity: isStandBy ? 0 : 1,
                    }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{
                      x: { ease: "backInOut", duration: 0.5 },
                      y: { ease: "backInOut", duration: 0.5 },
                    }}
                    className={`
                      group absolute rounded-full p-2 bg-blue-7 h-[120px] w-[120px] shadow-md shadow-[rgba(0,0,0,0.1)] flex items-center justify-center
                      border-2 border-opacity-20 border-blue-2
                      ${isActive ? "z-20" : ""}
                    `}
                  >
                    {!isValid && (
                      <div className="absolute top-0 left-0 right-0 bottom-0 shadow-glow-info rounded-full pointer-events-none animate-glow-info"></div>
                    )}
                    <div className="absolute -top-1 -right-1 -left-1">
                      <AnimatePresence>
                        {canDeleteItem && (
                          <motion.div
                            key="delete"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            whileTap={{ scale: 0.9 }}
                            style={{ originX: 1, originY: 1 }}
                          >
                            <button
                              className="absolute right-0 group-hover:visible invisible rounded-full p-2 bg-danger-800 border border-blue-2 border-opacity-30 shadow-md text-danger-200"
                              onClick={() => clearSlot(i)}
                            >
                              <FiMinus />
                            </button>
                          </motion.div>
                        )}
                        {canEditItem && (
                          <motion.div
                            key="edit"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            whileTap={{ scale: 0.9 }}
                            style={{ originX: 0, originY: 0 }}
                          >
                            <button
                              className="absolute left-0 group-hover:visible invisible rounded-full p-2 bg-info-800 border border-blue-2 border-opacity-30 shadow-md text-info-200"
                              onClick={() => setActiveIndex(i)}
                            >
                              <FiEdit />
                            </button>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    <div className="w-full h-full p-1 flex flex-col">
                      {!isEmpty && !isActive ? (
                        <div className="leading-none text-sm text-center">
                          <div className="text-center text-info-700 pt-2">
                            <FiUserCheck className="inline mb-2" size={16} />
                          </div>
                          <div
                            className="truncate font-semibold text-info-400 mb-1"
                            title={slot.name}
                          >
                            {slot.name || "[no name]"}
                          </div>
                          <div
                            className="break-all text-info-600 line-clamp-2 text-xs leading-none"
                            title={slot.address}
                          >
                            {slot.address || "[no address]"}
                          </div>
                        </div>
                      ) : (
                        <button
                          className="group bg-info-600 bg-opacity-10 border border-info-300 border-opacity-10 h-full w-full flex items-center justify-center rounded-full text-info-500 hover:bg-info-600 hover:bg-opacity-20 active:bg-opacity-30"
                          onClick={() => {
                            if (!isActive) {
                              setActiveIndex(i);
                              return;
                            }
                            if (submitRef.current) {
                              submitRef.current();
                            }
                            setActiveIndex(null);
                          }}
                        >
                          {isActive ? (
                            <>
                              <FiCheck size={24} className="opacity-50 group-hover:opacity-100" />
                            </>
                          ) : (
                            <FiEdit size={24} className="opacity-50 group-hover:opacity-100" />
                          )}
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

const SlotForm = ({
  slot,
  onChange,
  submitRef,
}: {
  slot: Slot;
  onChange: (s: Slot) => void;
  submitRef: MutableRefObject<(() => void) | null>;
}) => {
  const [copy, setCopy] = useState<Slot>(slot);
  submitRef.current = () => onChange(copy);
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.stopPropagation();
    e.preventDefault();
    onChange(copy);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="submit" className="hidden" />
      <div className="space-y-4 text-info-300">
        <div className="space-y-2">
          <label htmlFor="name" className="opacity-50">
            {"Key name"}
          </label>
          <input
            type="text"
            value={copy.name}
            placeholder="e.g: mario"
            onChange={(e) => {
              const v = e.target.value;
              const newSlot = { ...copy, name: v };
              setCopy(newSlot);
            }}
            className="text-input-simple"
            autoFocus
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="name" className="opacity-50">
            {"Address"}
          </label>
          <input
            type="text"
            placeholder="e.g: osmo1m0vk7kp..."
            value={copy.address || ""}
            onChange={(e) => {
              const v = e.target.value;
              const newSlot: Slot = { ...copy, address: v };
              setCopy(newSlot);
            }}
            className="text-input-simple"
          />
        </div>
      </div>
    </form>
  );
};

export default AddressesCircle;
