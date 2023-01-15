import { AnimatePresence, motion } from "framer-motion";
import { ReactNode, useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

type Props = {
  labelOpened: string;
  labelClosed: string;
  children: ReactNode;
};

const Collapse = (props: Props) => {
  const { labelOpened, labelClosed, children } = props;
  const [isOpen, setOpen] = useState(false);
  const toggle = () => setOpen(!isOpen);

  return (
    <AnimatePresence initial={false}>
      <button
        className={`block w-full bg-blue-6 select-none ${
          isOpen ? "" : "rounded-b"
        } bg-opacity-40 p-4 text-center hover:bg-opacity-50 active:bg-opacity-60 transition-colors relative`}
        onClick={toggle}
      >
        <span className="relative">{isOpen ? labelOpened : labelClosed}</span>
        <span className={`absolute right-4 top-0 bottom-0 flex items-center justify-center`}>
          {isOpen ? (
            <FiChevronUp className="opacity-50" />
          ) : (
            <FiChevronDown className="opacity-50" />
          )}
        </span>
      </button>
      {isOpen && (
        <motion.section
          key="content"
          className="bg-blue-5 bg-opacity-70"
          layout
          initial="initial"
          animate="animate"
          exit="exit"
          variants={{
            initial: {
              opacity: 0,
              height: 0,
            },
            animate: {
              opacity: 1,
              height: "auto",
              transition: {
                opacity: { duration: 0.2, delay: 0.2 },
                height: { duration: 0.2 },
              },
            },
            exit: {
              opacity: 0,
              height: 0,
            },
          }}
          transition={{
            opacity: { duration: 0.2 },
            height: { duration: 0.3, delay: 0.2 },
          }}
        >
          {children}
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Collapse;
