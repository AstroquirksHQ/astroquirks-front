import { motion } from "framer-motion";
import Link from "next/link";
import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  FC,
  MouseEvent,
  MouseEventHandler,
  useState,
} from "react";
import { CgSpinnerTwoAlt } from "react-icons/cg";
import { FiChevronRight } from "react-icons/fi";

type ButtonVariant = "discret" | "neutral";

export type Props = Omit<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  "onClick"
> & {
  isLoading?: boolean;
  Icon?: FC<{}>;
  href?: string;
  variant?: ButtonVariant;
  noLayout?: boolean;
  noAnim?: boolean;
  onClick?: (e: MouseEvent) => void | Promise<void>;
};

const Button = (props: Props) => {
  const {
    children,
    disabled,
    Icon,
    isLoading: isPropLoading,
    href,
    variant = "neutral",
    noLayout,
    noAnim,
    onClick,
    ...p
  } = props;
  const [isHovered, setHovered] = useState(false);
  const [isLocalLoading, setLocalLoading] = useState(false);

  const isLoading = isPropLoading || isLocalLoading;

  const inner = (
    <div className={`${noLayout ? "" : "px-8 py-4"} overflow-hidden`}>
      <motion.div
        initial={false}
        animate={{ y: isLoading ? -10 : 0, opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.1, delay: isLoading ? 0 : 0.25 }}
      >
        <motion.div
          initial={false}
          animate={{ x: isHovered ? -13 : 0 }}
          transition={{ delay: 0.1 }}
          className="flex items-center"
        >
          {Icon && (
            <div className="-ml-2 mr-2">
              <Icon />
            </div>
          )}
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

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    if (onClick) {
      const res = onClick(e);
      const isPromise = !!res && "then" in res;
      if (isPromise) {
        setLocalLoading(true);
        res.finally(() => setLocalLoading(false));
      }
    }
  };

  const className = `
    btn relative
    ${variant === "neutral" ? "btn-neutral" : variant === "discret" ? "btn-discret" : ""}
  `;

  if (href) {
    return (
      <Link
        href={href}
        className={className}
        onMouseEnter={noAnim ? () => {} : () => setHovered(true)}
        onMouseLeave={noAnim ? () => {} : () => setHovered(false)}
        onClick={() => setLocalLoading(true)}
      >
        {inner}
      </Link>
    );
  }

  return (
    <button
      className={className}
      type="button"
      disabled={isLoading || disabled}
      {...p}
      onMouseEnter={noAnim ? () => {} : () => setHovered(true)}
      onMouseLeave={noAnim ? () => {} : () => setHovered(false)}
      onClick={handleClick}
    >
      {inner}
    </button>
  );
};

export default Button;
