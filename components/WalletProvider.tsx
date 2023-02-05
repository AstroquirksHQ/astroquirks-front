import { wallets } from "@cosmos-kit/keplr";
import { WalletProvider as CosmoWalletProvider } from "@cosmos-kit/react";
import { chains, assets } from "chain-registry";
import { ReactNode } from "react";

const WalletProvider = ({ children }: { children: ReactNode }) => {
  return (
    <CosmoWalletProvider
      chains={chains} // supported chains
      assetLists={assets} // supported asset lists
      // @ts-expect-error
      wallets={wallets} // supported wallets
    >
      {children}
    </CosmoWalletProvider>
  );
};

export default WalletProvider;
