import { motion } from "framer-motion";
import Image from "next/image";
import { ReactNode, useRef, useState } from "react";
import { FaHeart } from "react-icons/fa";

const InteractiveHeart = () => {
  const constraintsRef = useRef(null);
  const [isDragging, setDragging] = useState(false);
  const onDragStart = () => setDragging(true);
  const onDragEnd = () => setDragging(false);
  return (
    <motion.div ref={constraintsRef}>
      <motion.div
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragTransition={{ bounceStiffness: 300, bounceDamping: 15 }}
        whileDrag={{ scale: 1.5 }}
        className="cursor-grab"
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
      >
        {isDragging && (
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
            <BouncingSymbols>
              <FaHeart className="text-[10px] text-[red] absolute top-0 left-0" />
            </BouncingSymbols>
          </div>
        )}
        <div className="animate-orbit w-[40px] h-[40px] lg:w-[60px] lg:h-[60px]">
          <Image
            src="/img/heart.svg"
            className="animate-orbit-reverse w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] pointer-events-none"
            alt="heart"
            width={40}
            height={40}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

const BouncingSymbols = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative">
      {Array(8)
        .fill(undefined)
        .map((_, i) => {
          const col = 20;
          const row = 20;
          const x = (i % 4) * col - 20;
          const y = Math.ceil(i / 4) * row + 20;
          return (
            <motion.div
              key={i}
              animate={{
                x,
                y: -y,
                opacity: [0, 0.5, 0],
                scale: [0, 1, 0.2],
                rotate: `${Math.round(Math.random() * 40 - 40)}deg`,
              }}
              style={{ originX: 0.5, originY: 0.5 }}
              transition={{
                repeat: Infinity,
                duration: 0.5 + Math.random(),
              }}
            >
              {children}
            </motion.div>
          );
        })}
    </div>
  );
};

export default InteractiveHeart;
