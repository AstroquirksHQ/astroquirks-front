import { ReactNode } from "react";

const Card = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-blue-2 bg-opacity-5 rounded shadow-md border border-blue-2 border-opacity-10 shadow-[rgba(0,0,0,0.1)]">
      {children}
    </div>
  );
};

export default Card;
