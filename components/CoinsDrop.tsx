import { motion } from "framer-motion";
import { useMemo } from "react";
import { FaHeart } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { useMeasure } from "react-use";

type CoinPos = {
  index: number;
  x: number;
  y: number;
};

const Coin = (props: { pos: CoinPos; isPlain: boolean }) => {
  const { pos, isPlain } = props;
  return (
    <motion.div
      animate={{
        x: [pos.x, pos.x, pos.x],
        opacity: [0, 1, 0],
        y: [pos.y, pos.y - 20, pos.y - 100],
        scale: [0.9, 1, 0.9],
      }}
      transition={{
        delay: pos.index * 0.1,
        repeat: Infinity,
        duration: 0.7 + Math.random(),
      }}
    >
      {isPlain ? (
        <FaHeart className="text-[10px] text-[red] absolute top-0 left-0" />
      ) : (
        <FiHeart className="text-[10px] text-[red] absolute top-0 left-0" />
      )}
    </motion.div>
  );
};

const CoinsDrop = () => {
  const nbCoins = 5;
  const [ref, { width, height }] = useMeasure<HTMLDivElement>();
  const coinsPos = useMemo<CoinPos[]>(() => {
    const colWidth = width / nbCoins;
    return Array(nbCoins)
      .fill(undefined)
      .map((_, i) => {
        return {
          index: i,
          x: i * colWidth,
          y: height,
        };
      });
  }, [nbCoins, width, height]);
  return (
    <div
      ref={ref}
      className="absolute -top-[10px] -left-[10px] -right-[10px] -bottom-[10px] overflow-hidden"
    >
      {coinsPos.map((pos, i) => (
        <Coin key={i} pos={pos} isPlain={i % 2 === 0} />
      ))}
    </div>
  );
};

export default CoinsDrop;
