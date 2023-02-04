import { ReactNode } from "react";

const DappContainer = ({ children }: { children: ReactNode }) => (
  <div className="h-screen flex flex-col items-center justify-center p-2 sm:p-8">
    <div className="border border-blue-2 border-opacity-20 rounded-lg bg-blue-2 bg-opacity-5 p-3 glass shadow-md flex flex-col max-w-[730px] max-h-[400px]">
      {children}
    </div>
  </div>
);

export default DappContainer;
