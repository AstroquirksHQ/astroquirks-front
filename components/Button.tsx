import { motion } from "framer-motion";
import Link from "next/link";
import { ButtonHTMLAttributes, DetailedHTMLProps, useState } from "react";
import { CgSpinnerTwoAlt } from "react-icons/cg";
import { FiChevronRight } from "react-icons/fi";

export type Props = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  isLoading?: boolean;
  href?: string;
};

const Button = (props: Props) => {
  const { children, disabled, isLoading: isPropLoading, href, ...p } = props;
  const [isHovered, setHovered] = useState(false);
  const [isLocalLoading, setLocalLoading] = useState(false);

  const isLoading = isPropLoading || isLocalLoading;

  const inner = (
    <div className="px-8 py-4 overflow-hidden">
      <motion.div
        initial={false}
        animate={{ y: isLoading ? -10 : 0, opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.1, delay: isLoading ? 0 : 0.25 }}
      >
        <motion.div
          initial={false}
          animate={{ x: isHovered ? -10 : 0 }}
          transition={{ delay: 0.1 }}
        >
          {children}
        </motion.div>
      </motion.div>
      <div className="absolute top-0 right-0 pr-3 bottom-0 overflow-hidden flex items-center justify-center">
        <motion.div
          initial={false}
          animate={{
            x: isHovered || isLoading ? 0 : -30,
            opacity: isHovered && !isLoading ? 1 : 0,
          }}
        >
          <FiChevronRight size={24} className="opacity-50 text-blue-2" />
        </motion.div>
      </div>
      <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden flex items-center justify-center">
        <motion.div
          transition={{ delay: isLoading ? 0.1 : 0, duration: 0.1 }}
          initial={false}
          animate={{
            y: isLoading ? 0 : 10,
            opacity: isLoading ? 1 : 0,
          }}
        >
          <CgSpinnerTwoAlt size={36} className="opacity-50 animate-spin-fast" />
        </motion.div>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={`btn relative ${isLoading ? "disabled" : ""}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => setLocalLoading(true)}
      >
        {inner}
      </Link>
    );
  }

  return (
    <button
      className="btn relative"
      type="button"
      disabled={isLoading || disabled}
      {...p}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {inner}
    </button>
  );
};

export default Button;
