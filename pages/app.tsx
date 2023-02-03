import { useWallet } from "@cosmos-kit/react";
import { useEffect } from "react";

import ConnectedDApp from "../components/ConnectedDApp";
import DappContainer from "../components/DAppContainer";
import DAppWrapper from "../components/DAppWrapper";

const DApp = () => {
  const wallet = useWallet();
  const { setCurrentChain } = wallet;

  useEffect(() => {
    setCurrentChain("osmosis");
  }, [setCurrentChain]);

  return (
    <DappContainer>
      {wallet.data ? (
        <ConnectedDApp wallet={wallet} />
      ) : (
        <div className="text-center flex-grow items-center justify-center flex">
          <button className="btn" onClick={wallet.openView}>
            {"Connect"}
          </button>
        </div>
      )}
    </DappContainer>
  );
};

const WrappedDApp = () => (
  <DAppWrapper>
    <DApp />
  </DAppWrapper>
);

export default WrappedDApp;
