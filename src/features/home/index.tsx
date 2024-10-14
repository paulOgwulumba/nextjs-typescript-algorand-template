import { AlgorandIcon } from '@/assets';
import Image from 'next/image';

export const Home = () => {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <AlgorandIcon className="self-center" />
        <ul className="list-inside text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">Welcome to the Next.JS Template for Algorand.</li>
          <li className="mb-2">Get started by connecting your wallet.</li>
        </ul>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <button className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5">
            <Image
              className="dark:invert"
              src="https://nextjs.org/icons/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Connect Wallet
          </button>
        </div>
      </main>
    </div>
  );
};
