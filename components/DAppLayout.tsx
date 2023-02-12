import { WalletData } from "@cosmos-kit/core";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import { IconType } from "react-icons";
import { FiAperture, FiKey } from "react-icons/fi";

import ConnectKeplr from "./ConnectKeplr";
import Logo from "./Logo";

const DAppLayout = ({ children, account }: { children: ReactNode; account: WalletData }) => {
  return (
    <div className="min-h-screen pb-8 flex flex-col">
      <div className="p-8 sm:mb-2">
        <div className="relative">
          <div className="flex justify-between">
            <Logo responsive />
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <div>
                  <strong>{account.username}</strong>
                </div>
                <code className="px-1 text-xs rounded bg-blue-2 bg-opacity-10">
                  {`${account.address!.slice(0, 12)}...${account.address!.slice(-7)}`}
                </code>
              </div>
              <ConnectKeplr />
            </div>
          </div>
          <div className="md:absolute pointer-events-none top-0 md:ml-16 mt-8 md:mt-0 left-0 xl:ml-0 xl:right-0 flex justify-center">
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 pointer-events-auto">
              <NavLink href="/app" Icon={FiAperture}>
                {"Astroquirks"}
              </NavLink>
              <NavLink href="/app/multisig" Icon={FiKey}>
                {"Multisig"}
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-grow">
        <div className="px-8 max-w-[870px] mx-auto">
          <div className="bg-warning-700 bg-opacity-10 p-4 rounded text-warning-300 border border-warning-400 border-opacity-20 shadow-md mb-4">
            <h2 className="font-semibold text-lg text-warning-200 mb-2 space-x-2">
              {"🚧"}
              <span className="ml-2">{"This is a work in progress"}</span>
            </h2>
            <p>{"Expect instabilities & bugs. Use at your own risks."}</p>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

const NavLink = ({
  href,
  children,
  Icon,
}: {
  href: string;
  children: ReactNode;
  Icon: IconType;
}) => {
  const router = useRouter();
  const isActive = router.asPath === href;
  return (
    <Link href={href}>
      <div
        className={`
        py-4 px-8 rounded hover:bg-blue-2 hover:bg-opacity-5 font-semibold
        flex items-center space-x-3
        ${isActive ? "bg-blue-2 bg-opacity-5" : ""}
        ${isActive ? "text-orange-1" : "opacity-50 hover:opacity-100 hover:underline-offset-2"}
      `}
      >
        <Icon className="opacity-50" />
        <span>{children}</span>
      </div>
    </Link>
  );
};

export default DAppLayout;
