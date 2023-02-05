import Image from "next/image";

const Logo = ({ responsive }: { responsive?: boolean }) => {
  return (
    <div className="flex items-center space-x-4">
      <Image className="rounded-full" src="/img/logo.webp" alt="logo" width={30} height={30} />
      <div className={`${responsive ? "invisible xl:visible" : ""}`}>
        <div className="uppercase text-blue-2 tracking-widest select-none">
          {"Astro"}
          <span className="font-semibold">{"quirks"}</span>
        </div>
        <div className="uppercase text-blue-2 tracking-widest select-none opacity-60 text-[11px]">
          {"Cosmos ecosystem validator"}
        </div>
      </div>
    </div>
  );
};

export default Logo;
