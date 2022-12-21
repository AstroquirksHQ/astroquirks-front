import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="p-8 flex justify-between items-start">
        <div className="flex items-center space-x-4">
          <Image src="/img/logo.png" alt="logo" width={30} height={30} />
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
          <Image className="inline mr-2" src="/img/bell.svg" alt="bell" width={24} height={24} />
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
              <div className="absolute -top-[10px] -left-[10px] h-[50px] w-[50px] animate-orbit">
                <Image
                  src="/img/heart.svg"
                  className="animate-orbit-reverse xl:w-[40px] xl:h-[40px] lg:w-[30px] lg:h-[30px] w-[20px] h-[20px]"
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
            mt-16 text-lg
            sm:w-[340px]
            md:w-[400px]
            lg:w-[500px]
          `}
          >
            {"Little tagline that explain what we mean by profit-sharing and caring."}
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
            src="/img/wave.svg"
            alt="landing"
          />
          {/* eslint-disable-next-line */}
          <img
            className="absolute top-full w-full opacity-20"
            src="/img/wave-2.svg"
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
          src="/img/landing.png"
          alt="landing"
          width={778}
          height={794}
        />
      </div>
    </div>
  );
}
