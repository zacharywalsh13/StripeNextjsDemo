import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-24">
      <h1 className="text-8xl font-bold text-center"> buy my nft </h1>

      <div className="grid grid-cols-1 gap-4 text-center lg:max-w-5xl lg:w-full lg:grid-cols-4">
        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/images/i1.png" width={400} height={400} />
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Image 1 </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/images/i2.png" width={400} height={400} />

          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Image 2 </p>
        </a>
      </div>
    </main>
  );
}
