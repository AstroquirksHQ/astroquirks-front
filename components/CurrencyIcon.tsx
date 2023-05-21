import { DetailedHTMLProps, ImgHTMLAttributes } from "react";

const iconsByTicker: Record<string, string> = {
  UMEE: "https://cdn.jsdelivr.net/gh/cosmos/chain-registry/umee/images/umee.png",
  STARS: "https://cdn.jsdelivr.net/gh/cosmos/chain-registry/stargaze/images/stars.png",
  MARS: "https://cdn.jsdelivr.net/gh/cosmos/chain-registry/mars/images/mars-token.png",
  JUNO: "https://cdn.jsdelivr.net/gh/cosmos/chain-registry/juno/images/juno.png",
  HUAHUA: "https://cdn.jsdelivr.net/gh/cosmos/chain-registry/chihuahua/images/huahua.png",
};

type Props = DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> & {
  ticker: string;
};

const CurrencyIcon = (props: Props) => {
  const { ticker, ...p } = props;
  const src = iconsByTicker[ticker];
  if (!src) return null;
  return <img src={src} alt={ticker} {...p} />;
};

export default CurrencyIcon;
