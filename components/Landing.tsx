import { motion } from "framer-motion";
import Image from "next/image";
import { ReactNode } from "react";
import { FiExternalLink } from "react-icons/fi";

import Button from "./Button";
import DropsTimeline from "./DropsTimeline";
import Footer from "./Footer";
import InteractiveHeart from "./InteractiveHeart";
import Logo from "./Logo";
import NextAirdropCounter from "./NextAirdropCounter";

const tileData: HeroTileProps[] = [
  {
    title: "Monthly airdrop",
    desc: "Bite into the 5% commission with monthly airdrops and taste the difference.",
    Illustration: () => (
      <Image
        src="/img/1-rocket.webp"
        alt="rocket"
        width={200}
        height={200}
        className="rounded-full border-2 border-opacity-20 border-blue-2 shadow-lg"
      />
    ),
  },
  {
    title: "Quirky staking rewards",
    desc: "$OSMO rewards for staking $OSMO? BOR-ING. Take a bite out of profits in a juicy blue chip token instead!",
    Illustration: () => (
      <Image
        src="/img/2-rewards.webp"
        alt="rewards"
        width={200}
        height={200}
        className="rounded-full border-2 border-opacity-20 border-blue-2 shadow-lg"
      />
    ),
  },
  {
    title: "Vote for your airdrop token",
    isComingSoon: true,
    desc: "Blue chip token airdrop not to your taste? Vote for your preferred option with our $QUIRK token-powered DAO, it's like choosing your own toppings on a pizza.",
    Illustration: () => (
      <Image
        src="/img/3-gifts.webp"
        alt="gifts"
        width={200}
        height={200}
        className="rounded-full border-2 border-opacity-20 border-blue-2 shadow-lg"
      />
    ),
  },
  {
    title: "Strong & Resilient Architecture",
    desc: (
      <>
        <div className="mb-4">
          {
            "We're the mad scientists of validator node security with geographic and third-party redundancy for maximum uptime and purr-fect peace of mind."
          }
        </div>
        <div className="text-sm flex space-x-2 items-center">
          <FiExternalLink className="opacity-50" />
          <a
            href="https://medium.com/@astroquirks/astroquirks-a-technical-overview-on-building-a-resilient-validator-setup-4313a3c00be7"
            target="_blank"
            rel="noopener noreferrer"
            className="border-b border-blue-2 border-opacity-30 hover:border-opacity-100 border-dashed"
          >
            {"A technical overview on building a resilient validator setup"}
          </a>
        </div>
      </>
    ),
    Illustration: () => (
      <Image
        src="/img/4-server.webp"
        alt="gifts"
        width={200}
        height={200}
        className="rounded-full border-2 border-opacity-20 border-blue-2 shadow-lg"
      />
    ),
  },
];

const Landing = () => {
  return (
    <motion.div>
      <div className="px-8 pt-8 mb-4 flex-col items-center md:flex-row space-y-6 md:space-y-0 flex justify-between">
        <Logo />
        <Button href="/app">{"Launch app"}</Button>
      </div>
      <div className="flex flex-col space-y-4 items-center justify-center px-4 pt-8">
        <div className="bg-[#111] border border-blue-2 border-opacity-50 rounded-lg shadow-lg border-dashed bg-opacity-70 text-[#fff] text-xl p-4 text-center sm:text-left">
          <Image
            className="inline mr-2 -mt-[4px]"
            src="/img/bell.svg"
            alt="bell"
            width={24}
            height={24}
          />
          <span>{"Next airdrop: "}</span>
          <span className="font-alt text-2xl whitespace-nowrap">
            <NextAirdropCounter />
          </span>
        </div>
        <div className="flex justify-between flex-col items-center justify-center">
          <div className="mb-2">{"Wanna be eligible? "}</div>
          <div className="mb-4">
            <Image
              className="inline mr-2 -mt-[4px]"
              src="/img/osmo.svg"
              alt="bell"
              width={24}
              height={24}
            />
            <strong>
              <a href="http://stake.osmo.astroquirks.com" target="_blank" rel="noreferrer">
                {"Stake your osmo with us!"}{" "}
              </a>
            </strong>
          </div>
          <div>
            <Image
              className="inline mr-2 -mt-[4px]"
              src="/img/stars.webp"
              alt="bell"
              width={24}
              height={24}
            />
            <strong>
              <a href="http://stake.stars.astroquirks.com" target="_blank" rel="noreferrer">
                {"Stake your stars with us!"}{" "}
              </a>
            </strong>
          </div>
        </div>
      </div>
      <div>
        <div
          className={`
            pt-[100px] pl-[40px]
            lg:pt-[100px] lg:pl-[100px]
            xl:pt-[100px] xl:pl-[160px]
        `}
        >
          <div
            className={`
              font-alt leading-none whitespace-nowrap text-orange-3
              select-none
              text-[50px]
              md:text-[70px]
              xl:text-[100px]
              relative z-10
          `}
          >
            <span className="text-orange-1">{"Profit"}</span>
            <span className="text-blue-2">{"-"}</span>
            <span className="text-orange-1">{"sharing"}</span>
            <br />
            <span className="text-blue-2">{"is "}</span>
            <span className="text-orange-1 z-10 relative">
              {"CARING"}
              <div className="absolute -top-[15px] -right-[25px]">
                <InteractiveHeart />
              </div>
            </span>
            <span className="text-blue-2">{"."}</span>
          </div>
          <div
            className={`
            mt-4 text-xl
            sm:w-[340px]
            md:w-[400px]
            lg:w-[500px]
          `}
          >
            <p className="leading-loose">
              <strong className="bg-blue-2 text-blue-1 px-1 rounded">
                {"Strong & resilient validator"}
              </strong>
            </p>
            <p>{"Securing Osmosis network & sharing the rewards with our delegators."}</p>
          </div>
        </div>
        <div
          className={`
          relative bg-blue-4 bg-opacity-20 min-h-[50px]
          sm:mt-[50px]
        `}
        >
          {/* eslint-disable-next-line */}
          <img
            alt="wave-top"
            className="absolute bottom-full w-full opacity-20 pointer-events-none"
            src="/img/wave.svg"
          />
          {/* eslint-disable-next-line */}
          <img
            alt="wave-bot"
            className="absolute top-full w-full opacity-20"
            src="/img/wave-2.svg"
          />
        </div>
        <Image
          className={`
            absolute right-0
            top-[230px]
            md:top-[200px]
            w-[200px]
            sm:w-[300px]
            md:w-[400px]
            lg:w-[550px]
            xl:w-[600px]
            h-auto
            sm:visible
            invisible
            pointer-events-none
          `}
          src="/img/landing.webp"
          alt="landing"
          width={600}
          height={794}
        />
      </div>
      <div className="grid grid-cols-1 max-w-[600px] lg:grid-cols-2 lg:max-w-[1200px] gap-8 mx-auto px-4 sm:px-8">
        {tileData.map((p) => (
          <HeroTile key={p.title} {...p} />
        ))}
      </div>
      <div className="mt-20 px-10 text-center">
        <h2 className="font-alt text-6xl mb-16">{"Timeline"}</h2>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <DropsTimeline />
        </motion.div>
      </div>
      <Footer />
    </motion.div>
  );
};

type HeroTileProps = {
  title: string;
  desc: string | ReactNode;
  Illustration: React.FC<{}>;
  isComingSoon?: boolean;
};

const HeroTile = (props: HeroTileProps) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    className="relative text-xl border border-blue-2 border-opacity-20 rounded-lg bg-blue-2 bg-opacity-5 p-8 glass shadow-md"
  >
    {props.isComingSoon && (
      <div className="absolute right-0 px-4 py-2 top-4 rounded-l-lg leading-none font-alt uppercase tracking-widest bg-blue-2 bg-opacity-20 text-orange-1">
        {"🚧 Coming soon"}
      </div>
    )}
    <div className="flex items-center justify-center mb-16 mt-10 h-[150px]">
      <props.Illustration />
    </div>
    <div className="text-4xl font-alt text-orange-1">{props.title}</div>
    <div>{props.desc}</div>
  </motion.div>
);

export default Landing;
