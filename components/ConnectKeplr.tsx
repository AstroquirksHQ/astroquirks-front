import { useWallet } from "@cosmos-kit/react";
import Image from "next/image";

import Button, { Props as ButtonProps } from "./Button";

const ConnectKeplr = () => {
  const wallet = useWallet();
  const isLoggedIn = !!wallet.data;
  return (
    <>
      {isLoggedIn ? (
        <Button onClick={wallet.disconnect}>{"Log-out"}</Button>
      ) : (
        <LoginButton onClick={wallet.connect} />
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
