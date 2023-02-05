import copy from "copy-to-clipboard";
import { FiCopy } from "react-icons/fi";

const CopyValue = ({ value }: { value: string }) => {
  return (
    <div className="inline-flex pl-1 rounded-md bg-blue-2 bg-opacity-10 border border-blue-2 border-opacity-10">
      <code className="pr-1">{value}</code>
      <button
        className="px-2 opacity-50 rounded-r-md hover:opacity-100 hover:bg-blue-5 hover:bg-opacity-10 active:bg-opacity-30"
        onClick={() => copy(value)}
      >
        <FiCopy />
      </button>
    </div>
  );
};

export default CopyValue;
