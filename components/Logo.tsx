import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center space-x-4">
      <Image className="rounded-full" src="/img/logo.webp" alt="logo" width={30} height={30} />
      <div>
        <div className="uppercase text-blue-2 tracking-widest select-none">
          {"Astro"}
          <span className="font-semibold">{"quirks"}</span>
        </div>
        <div className="uppercase text-blue-2 tracking-widest select-none opacity-60 text-[11px]">
          {"Osmosis validator"}
        </div>
      </div>
    </div>
  );
};

export default Logo;
