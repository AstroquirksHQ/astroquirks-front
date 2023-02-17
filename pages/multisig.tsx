import { useWallet } from "@cosmos-kit/react";

import ConnectKeplr from "../components/ConnectKeplr";
import MultisigComponent from "../components/Multisig";
import WalletProvider from "../components/WalletProvider";

const MultisigLanding = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="p-8 bg-blue-2 bg-opacity-5 rounded shadow-md border border-blue-2 border-opacity-10 shadow-[rgba(0,0,0,0.1)] text-center">
        <h1 className="text-3xl text-orange-1 mb-8">{"Multisig"}</h1>
        <ConnectKeplr />
      </div>
    </div>
  );
};

const MultisigWrapper = () => {
  const wallet = useWallet();
  const { data: account } = wallet;
  return account ? <MultisigComponent /> : <MultisigLanding />;
};

export default () => (
  <WalletProvider>
    <MultisigWrapper />
  </WalletProvider>
);
