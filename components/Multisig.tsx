import { useWallet } from "@cosmos-kit/react";
import invariant from "invariant";

import ConnectKeplr from "./ConnectKeplr";
import Logo from "./Logo";
import MultisigCreateTx from "./MultisigCreateTx";

const Multisig = () => {
  const wallet = useWallet();
  const { data: account } = wallet;
  invariant(account, "No account");
  return (
    <div className="min-h-screen">
      <div className="p-4 flex justify-between mb-8">
        <Logo />
        <ConnectKeplr />
      </div>
      <div className="p-8 max-w-[800px] mx-auto">
        <div className="bg-blue-2 bg-opacity-5 rounded shadow-md border border-blue-2 border-opacity-10 shadow-[rgba(0,0,0,0.1)]">
          <div className="p-8">
            <div className="flex items-center space-x-4">
              <strong>{"Your address"}</strong>
              <code className="px-1 rounded bg-blue-2 bg-opacity-10">{account.address}</code>
            </div>
          </div>
          <hr className="opacity-10" />
          <MultisigCreateTx />
        </div>
      </div>
    </div>
  );
};

export default Multisig;
