export default function Home() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-start">
        <div className="uppercase text-blue-2 tracking-widest select-none">{"Astroquirks"}</div>
        <button className="border-2 border-orange-1 rounded-full px-8 py-4 font-bold hover:bg-orange-1 hover:text-blue-1">
          {"Launch App"}
        </button>
      </div>
      <div>
        <div className="uppercase text-[100px] font-bold leading-none text-orange-3 pt-[100px] pl-[100px] select-none">
          {"Profit-sharing"}
          <br />
          <span className="text-orange-4">{"is caring"}</span>
        </div>
      </div>
    </div>
  );
}
