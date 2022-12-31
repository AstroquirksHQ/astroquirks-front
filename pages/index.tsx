import Image from "next/image";
import Link from "next/link";

import NextAirdropCounter from "../components/NextAirdropCounter";

const tileData: HeroTileProps[] = [
  {
    title: "Quirky Rewards",
    desc: "As a validator, we receive a portion of the staking rewards. In the spirit of fairness, we would like to share some of these rewards with you, as we already have the resources (e.g. lambos) that these rewards provide.",
    Illustration: () => <Image src="/img/chemical.webp" alt="chemical" width={120} height={120} />,
  },
  {
    title: "Interchain-Security style rewards",
    desc: "Getting OSMOS rewards while staking OSMO is boring. Why not getting your profit sharing slice in an other blue chip token?",
    Illustration: () => (
      <Image src="/img/padlock.webp" alt="three-coins" width={100} height={100} />
    ),
  },
  {
    title: "Pick your blue chip",
    desc: "You are already an ATOM Billionaire? You can vote to receive STARS instead.",
    Illustration: () => (
      <Image src="/img/three-coins.webp" alt="three-coins" width={150} height={150} />
    ),
  },
  {
    title: "Wen?",
    desc: "You will get the profit sharing rewards monthly.",
    Illustration: () => <Image src="/img/hourglass.webp" alt="hourglass" width={80} height={80} />,
  },
];

export default function Home() {
  return (
    <div>
      <div className="p-8 mb-4 flex-col items-center sm:flex-row space-y-6 sm:space-y-0 flex justify-between sm:items-start">
        <div className="flex items-center space-x-4">
          <Image src="/img/logo.webp" alt="logo" width={30} height={30} />
          <div className="uppercase text-blue-2 tracking-widest select-none">
            {"Astro"}
            <span className="font-semibold">{"quirks"}</span>
          </div>
        </div>
        <Link
          href="/app"
          className="group bg-blue-2 bg-opacity-10 rounded px-8 py-4 font-bold hover:text-orange-1 outline-none active:bg-blue-5"
        >
          <span className="group-hover:border-b-2">{"Launch App"}</span>
        </Link>
      </div>
      <div className="flex items-center justify-center px-4">
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
              font-alt leading-none whitespace-nowrap text-orange-3 select-none
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
              <div className="absolute -top-[5px] -right-[25px] h-[25px] w-[25px] lg:h-[30px] lg:w-[30px] xl:h-[50px] xl:w-[50px] animate-orbit">
                <Image
                  src="/img/heart.svg"
                  className="animate-orbit-reverse              h-[20px] w-[20px] lg:w-[25px] lg:h-[25px] xl:w-[40px] xl:h-[40px] absolute"
                  alt="heart"
                  width={40}
                  height={40}
                />
              </div>
            </span>
            <span className="text-blue-2">{"."}</span>
          </div>
          <div
            className={`
            mt-4 text-2xl
            sm:w-[340px]
            md:w-[400px]
            lg:w-[500px]
          `}
          >
            {"Join the ranks of savvy users earning extra cash with our profit-sharing org."}
          </div>
        </div>
        <div
          className={`
          relative bg-blue-4 bg-opacity-20 min-h-[50px]
          sm:mt-[50px]
        `}
        >
          {/* eslint-disable-next-line */}
          <img className="absolute bottom-full w-full opacity-20" src="/img/wave.svg" />
          {/* eslint-disable-next-line */}
          <img className="absolute top-full w-full opacity-20" src="/img/wave-2.svg" />
        </div>
        <Image
          className={`
            absolute right-0
            top-[200px]
            md:top-[140px]
            w-[200px]
            sm:w-[300px]
            md:w-[400px]
            lg:w-[550px]
            xl:w-[600px]
            sm:visible
            invisible
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
      <div className="py-20 mt-40 relative bg-blue-1 bg-opacity-10 border-t-2 shadow-inner border-blue-5 text-center text-blue-4">
        <div className="absolute top-0 left-0 right-0 bottom-0 square-pattern pointer-events-none opacity-30"></div>
        <a
          className="link"
          href="https://github.com/AstroquirksHQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          {"GitHub organization"}
        </a>
      </div>
    </div>
  );
}

type HeroTileProps = {
  title: string;
  desc: string;
  Illustration: React.FC<{}>;
  isComingSoon?: boolean;
};

const HeroTile = (props: HeroTileProps) => (
  <div className="relative text-xl border border-blue-2 border-opacity-20 rounded-lg bg-blue-2 bg-opacity-5 p-8 glass shadow-md">
    {props.isComingSoon && (
      <div className="absolute right-0 px-4 py-2 top-4 rounded-l-lg leading-none font-alt uppercase tracking-widest opacity-50 bg-blue-2 text-blue-1">
        {"Coming soon"}
      </div>
    )}
    <div className="flex items-center justify-center mb-16 mt-10 h-[150px]">
      <props.Illustration />
    </div>
    <div className="text-4xl font-alt text-orange-1">{props.title}</div>
    <div>{props.desc}</div>
  </div>
);
