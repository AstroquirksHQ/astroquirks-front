import Image from "next/image";
import Link from "next/link";

const prefix = process.env["NODE_ENV"] === "production" ? "/astroquirks-front" : "";

const DApp = () => {
  return (
    <div className="h-screen flex items-center justify-center flex-col px-8">
      <div
        className={`
        border border-blue-2 border-opacity-20 rounded-lg bg-blue-2 bg-opacity-5 p-8 glass shadow-md min-w-full sm:min-w-[600px]
        flex
        relative overflow-hidden
      `}
      >
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-orange-1 opacity-5 -rotate-45"></div>
        <Image
          src={`${prefix}/img/construction.png`}
          width={200}
          height={193}
          alt="construction"
          className="opacity-70"
        />
        <div className="flex flex-col ml-8">
          <div className="flex-grow">
            <div className="font-alt text-4xl">{"DApp under construction"}</div>
            <div>{"Please come back later."}</div>
          </div>
          <div className="text-right">
            <Link
              href="/"
              className="group bg-blue-2 bg-opacity-10 rounded px-8 py-4 font-bold hover:text-orange-1 outline-none active:bg-blue-5"
            >
              <span className="group-hover:border-b-2">{"Go back"}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DApp;
