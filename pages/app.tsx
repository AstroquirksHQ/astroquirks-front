import { useWallet } from "@cosmos-kit/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { FiArrowLeft } from "react-icons/fi";

import ConnectKeplr from "../components/ConnectKeplr";
import DApp from "../components/DApp";
import Logo from "../components/Logo";
import WalletProvider from "../components/WalletProvider";

const DAppLanding = () => {
  return (
    <div className="flex items-center justify-start pt-[100px] h-screen flex-col">
      <Image
        alt="cosmonaut"
        width={250}
        height={250}
        src="/img/cosmonaut.webp"
        className="mb-[10px]"
      />
      <Logo />
      <div className="relative mt-8 p-8 bg-blue-2 bg-opacity-5 rounded shadow-md border border-blue-2 border-opacity-10 shadow-[rgba(0,0,0,0.1)] text-center">
        <div className="absolute top-full mt-8 left-0 right-0 flex items-center justify-center">
          <Link href="/" className="inline-flex space-x-2 items-center opacity-40 hover:opacity-70">
            <FiArrowLeft />
            <span>{"Back to Home"}</span>
          </Link>
        </div>
        <ConnectKeplr />
      </div>
    </div>
  );
};

const DAppWrapper = () => {
  const wallet = useWallet();
  const { setCurrentChain } = wallet;
  const { data: account } = wallet;

  useEffect(() => {
    setCurrentChain("osmosis");
  }, [setCurrentChain]);

  return account ? <DApp /> : <DAppLanding />;
};

export default () => (
  <WalletProvider>
    <DAppWrapper />
  </WalletProvider>
);
