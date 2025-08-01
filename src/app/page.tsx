import Image from "next/image";
import Link from "next/link";

import { ArrowUpRight, LifeBuoy } from "lucide-react";

export default function Home() {
  return (
    <div className="p-4">
      <div className="w-[40vw] h-[40vw] lg:w-[20vw] lg:h-[20vw] bg-blue-700 rounded-full absolute -top-24 md:-top-72 lg:-top-48 left-[30%] lg:left-[40%] blur-[90px] lg:blur-[250px] z-[-1]"></div>
      <header className="pt-36 lg:pt-48 max-w-[900px] w-full mx-auto flex flex-col items-center justify-center gap-8">
        <Image src="/logo.png" alt="Logo" width={128} height={128} quality={100} />
        <h1 className="text-5xl lg:text-7xl font-bold -tracking-[0.06em] text-zinc-800 dark:text-white">We are BitAspire</h1>
        <p className="text-lg lg:text-xl text-zinc-600 dark:text-zinc-400 max-w-md -tracking-[0.06em] text-center">We make high quality Minecraft plugins so you can enjoy your game even more.</p>
        <div className="w-full flex flex-col md:flex-row gap-4 items-center">
          <Link href="https://wiki.bitaspire.com" className="rounded-md flex flex-col gap-2 items-start border border-zinc-200 dark:border-zinc-800 w-full p-6 text-sm tracking-tight font-medium uppercase text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-zinc-800 dark:hover:text-white transition-colors">
            <LifeBuoy size={24} />
            Read our documentation
          </Link>
          <Link href="https://discord.gg/DC4Gqj3y5V" className="rounded-md flex flex-col gap-2 items-end border border-zinc-200 dark:border-zinc-800 w-full p-6 text-sm tracking-tight font-medium uppercase text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-zinc-800 dark:hover:text-white transition-colors">
            <ArrowUpRight size={24} />
            Join our Discord
          </Link>
        </div>
      </header>
      <p className="text-center text-xs font-tracking-tight mt-24 text-zinc-200 dark:text-zinc-400">Site is WIP. See you soon!</p>
    </div>
  );
}
