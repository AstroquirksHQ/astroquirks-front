import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="text-4xl font-bold p-8">profit-sharing is caring.</div>
      <Image src="/img/chest.png" draggable="false" width={256} height={256} alt="chest" />
    </div>
  );
}
