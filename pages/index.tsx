import Image from "next/image";

const prefix = process.env["NODE_ENV"] === "production" ? "/astroquirks-front" : "";

export default function Home() {
  return (
    <div>
      <div className="p-8 flex justify-between items-start">
        <div className="flex items-center space-x-4">
          <Image src={`${prefix}/img/logo.png`} alt="logo" width={30} height={30} />
          <div className="uppercase text-blue-2 tracking-widest select-none">
            {"Astro"}
            <span className="font-semibold">{"quirks"}</span>
          </div>
        </div>
        <button
          className="group bg-blue-2 bg-opacity-10 rounded px-8 py-4 font-bold hover:text-orange-1 outline-none"
          onClick={() => alert("u mad?")}
        >
          <span className="group-hover:border-b-2">{"Launch App"}</span>
        </button>
      </div>
      <div className="flex items-center justify-center">
        <div className="bg-[#111] border border-blue-2 border-opacity-50 rounded-lg shadow-lg border-dashed bg-opacity-70 text-[#fff] text-xl p-4">
          <Image
            className="inline mr-2"
            src={`${prefix}/img/bell.svg`}
            alt="bell"
            width={24}
            height={24}
          />
          <span>{"Next airdrop: "}</span>
          <span className="font-alt text-2xl">{"4 days 3 hours 2 minutes 37 seconds"}</span>
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
                  src={`${prefix}/img/heart.svg`}
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
            mt-16 text-2xl
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
          md:mt-[100px]
          lg:mt-[200px]
        `}
        >
          {/* eslint-disable-next-line */}
          <img
            className="absolute bottom-full w-full opacity-20"
            src={`${prefix}/img/wave.svg`}
            alt="landing"
          />
          {/* eslint-disable-next-line */}
          <img
            className="absolute top-full w-full opacity-20"
            src={`${prefix}/img/wave-2.svg`}
            alt="landing"
          />
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
            xl:w-auto
          `}
          src={`${prefix}/img/landing.png`}
          alt="landing"
          width={778}
          height={794}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 max-w-[1200px] gap-8 mx-auto px-8">
        <HeroTile
          title="Quirky Rewards"
          desc="As a validator we receive 5% of the staking rewards. As we already have lambos, it will be fairer to give some back to you"
          Illustration={() => (
            <Image src={`${prefix}/img/chemical.png`} alt="chemical" width={120} height={120} />
          )}
        />
        <HeroTile
          title="Interchain-Security style rewards"
          desc="Getting OSMOS rewards while staking OSMO is boring. Why not getting your profit sharing slice in an other blue chip token?"
          Illustration={() => (
            <Image src={`${prefix}/img/padlock.png`} alt="three-coins" width={100} height={100} />
          )}
        />
        <HeroTile
          title="Pick your blue chip"
          isComingSoon
          desc="You are already an ATOM Billionaire? You can vote to receive STARS instead."
          Illustration={() => (
            <Image
              src={`${prefix}/img/three-coins.png`}
              alt="three-coins"
              width={150}
              height={150}
            />
          )}
        />
        <HeroTile
          title="Wen?"
          desc="You will get the profit sharing rewards monthly."
          Illustration={() => (
            <Image src={`${prefix}/img/hourglass.png`} alt="hourglass" width={80} height={80} />
          )}
        />
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
