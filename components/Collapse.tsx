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
    <div className={isOpen ? "overflow-visible" : "overflow-hidden"}>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="exit"
            variants={{
              open: { opacity: 1, height: "auto", x: 0, transition: { duration: 0.3 } },
              collapsed: { opacity: 0, height: 0, transition: { duration: 0.2 } },
              exit: { opacity: 0, height: 0, y: -400, transition: { duration: 0.3 } },
            }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.section>
        )}
        <button
          className="block w-full bg-blue-6 rounded-b bg-opacity-40 p-4 text-center hover:bg-opacity-50 active:bg-opacity-60 transition-colors"
          onClick={toggle}
        >
          <span className="relative">
            {isOpen ? labelOpened : labelClosed}
            <span
              className={`absolute left-0 right-0 ${
                isOpen ? "bottom-full" : "top-full"
              } text-center flex items-center justify-center`}
            >
              {isOpen ? (
                <FiChevronUp className="opacity-30" />
              ) : (
                <FiChevronDown className="opacity-30" />
              )}
            </span>
          </span>
        </button>
      </AnimatePresence>
    </div>
  );
};

export default Collapse;
