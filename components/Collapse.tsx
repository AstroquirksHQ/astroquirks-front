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
    <>
      {isOpen && <div className="bg-blue-6 bg-opacity-10 p-4">{children}</div>}
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
    </>
  );
};

export default Collapse;
