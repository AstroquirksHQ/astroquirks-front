import { useWallet } from "@cosmos-kit/react";
import Image from "next/image";
import { FiPower } from "react-icons/fi";

import Button, { Props as ButtonProps } from "./Button";

const ConnectKeplr = () => {
  const wallet = useWallet();
  const isLoggedIn = !!wallet.data;
  return (
    <>
      {isLoggedIn ? (
        <Button
          noLayout
          noAnim
          onClick={async () => {
            await new Promise((r) => setTimeout(r, 300));
            wallet.disconnect();
          }}
        >
          <div className="p-4">
            <FiPower />
          </div>
        </Button>
      ) : (
        <LoginButton
          onClick={async () => {
            await new Promise((r) => setTimeout(r, 300));
            wallet.connect();
          }}
        />
      )}
    </>
  );
};

const LoginButton = (props: ButtonProps) => (
  <Button {...props}>
    <div className="flex items-center space-x-2">
      <Image className="-ml-1" alt="keplr" src="/img/keplr-logo.png" width={16} height={16} />
      <span>{"Log-in with Keplr"}</span>
    </div>
  </Button>
);

export default ConnectKeplr;
