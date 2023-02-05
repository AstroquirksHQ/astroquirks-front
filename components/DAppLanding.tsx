import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

import ConnectKeplr from "../components/ConnectKeplr";
import Logo from "../components/Logo";

const DAppLanding = () => {
  return (
    <div className="min-h-screen">
      <div className="h-[660px]">
        <div className="flex items-center justify-start pt-[64px] h-screen flex-col">
          <Cosmonaut />
          <Logo />
          <div className="relative mt-8 p-8 bg-blue-2 bg-opacity-5 rounded shadow-md border border-blue-2 border-opacity-10 shadow-[rgba(0,0,0,0.1)] text-center">
            <ConnectKeplr />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

const Footer = () => (
  <div className="absolute top-full mt-8 left-0 right-0 flex items-center justify-center">
    <Link href="/" className="inline-flex space-x-2 items-center opacity-40 hover:opacity-70">
      <FiArrowLeft />
      <span>{"Back to Home"}</span>
    </Link>
  </div>
);

const Cosmonaut = () => (
  <div className="relative">
    <motion.div
      animate={{ y: [0, 20, 0] }}
      style={{ originX: 0.5, originY: 0.5 }}
      transition={{ repeat: Infinity, duration: 4 }}
      className="bg-blue-2 absolute top-0 left-0 opacity-10 h-[200px] w-[200px] rounded-full"
    />
    <motion.div
      animate={{ y: [0, 40, 0] }}
      style={{ originX: 0.5, originY: 0.5 }}
      transition={{
        repeat: Infinity,
        duration: 4,
      }}
    >
      <Image
        alt="cosmonaut"
        width={250}
        height={250}
        src="/img/cosmonaut.webp"
        className="mb-[30px]"
      />
    </motion.div>
  </div>
);

export default DAppLanding;
