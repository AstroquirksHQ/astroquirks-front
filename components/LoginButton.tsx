import Image from "next/image";

import Button, { Props as ButtonProps } from "./Button";

const LoginButton = (props: ButtonProps & { isLoggedIn: boolean }) => {
  const { isLoggedIn, ...p } = props;
  return (
    <Button {...p}>
      <div className="flex items-center space-x-2">
        {isLoggedIn ? (
          <span>{"Logout"}</span>
        ) : (
          <>
            <Image className="-ml-1" alt="keplr" src="/img/keplr-logo.png" width={16} height={16} />
            <span>{"Log-in with Keplr"}</span>
          </>
        )}
      </div>
    </Button>
  );
};

export default LoginButton;
