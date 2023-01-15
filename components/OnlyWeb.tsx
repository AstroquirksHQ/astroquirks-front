import { ReactNode, useEffect, useState } from "react";

const OnlyWeb = ({ children }: { children: ReactNode }) => {
  const [isMounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, [setMounted]);
  if (!isMounted) return null;
  return <>{children}</>;
};

export default OnlyWeb;
