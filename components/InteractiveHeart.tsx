import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const InteractiveHeart = () => {
  const [refOffset, setRefOffset] = useState<{ x: number; y: number } | null>(null);
  const [offset, setOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const measure = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const refOffset = { x: Math.round(rect.left), y: Math.round(rect.top) };
      setRefOffset(refOffset);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("resize", measure);
    };
  }, [setRefOffset]);

  useEffect(() => {
    if (!refOffset) return;
    const adjustPosition = (e: MouseEvent) => {
      if (e.pageY > 250 && e.pageY < 750) {
        setOffset({ x: -(refOffset.x - e.pageX) - 30, y: -(refOffset.y - e.pageY) - 30 });
      } else {
        setOffset({ x: 0, y: 0 });
      }
    };
    const resetPosition = () => {
      setOffset({ x: 0, y: 0 });
    };
    document.addEventListener("mousemove", adjustPosition);
    document.addEventListener("mouseleave", resetPosition);
    return () => {
      document.removeEventListener("mousemove", adjustPosition);
      document.removeEventListener("mouseleave", resetPosition);
    };
  }, [refOffset, setOffset]);

  return (
    <div ref={ref} className="select-none pointer-events-none">
      <motion.div animate={offset}>
        <div className="animate-orbit w-[40px] h-[40px] lg:w-[60px] lg:h-[60px]">
          <Image
            src="/img/heart.svg"
            className="animate-orbit-reverse w-[30px] h-[30px] lg:w-[40px] lg:h-[40px]"
            alt="heart"
            width={40}
            height={40}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default InteractiveHeart;
