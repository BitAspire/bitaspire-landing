import Button from "@/components/Button";
import Navbar from "@/components/navbar/Navbar";
import { ArrowUpRight, ShoppingBag } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className='z-[-1] absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#111111_1px,transparent_1px),linear-gradient(to_bottom,#111111_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>
      <Navbar />
      <header className="max-w-[420px] sm:max-w-[600px] lg:max-w-[900px] xl:max-w-[1200px] mx-auto px-4 py-12 border-x border-zinc-800/75">
        <div className="flex flex-col xl:flex-row items-center xl:items-end justify-center pt-36 md:w-2/3 xl:w-full gap-4 text-center xl:text-start mx-auto">
          <h1 className="text-5xl lg:text-7xl xl:text-9xl font-bold text-zinc-50 -tracking-[0.06em] w-full">Welcome to BitAspire</h1>
          <p className="text-zinc-400 tracking-tight md:max-w-lg xl:w-1/2 xl:text-justify mb-2 mt-6">We make high quality Minecraft plugins for your server to enhance gameplay and user experience. For developers, we made a marketplace to share and sell your creativity.</p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-start gap-4 mt-8">
          <Button href="/marketplace" variant="primary" className="w-full md:w-auto">
            Explore Marketplace <ShoppingBag size={16} />
          </Button>
          <Button target="_blank" href="/documentation" variant="secondary" className="w-full md:w-auto">
            Join our Discord <ArrowUpRight size={16} />
          </Button>
        </div>
      </header>
      {/*<main className="max-w-[420px] sm:max-w-[600px] lg:max-w-[900px] xl:max-w-[1200px] mx-auto px-4 py-8">
        {/* Main content goes here
      </main>*/}
      <div className="striped w-full h-10 border-y border-zinc-800/75"></div>
      <footer className="max-w-[420px] sm:max-w-[600px] lg:max-w-[900px] xl:max-w-[1200px] mx-auto px-4 py-8 border-x border-zinc-800/75 text-center text-zinc-400">
        <p>&copy; {new Date().getFullYear()} BitAspire. All rights reserved.</p>
        <p className="mt-2">Follow us on <a href="/discord" className="text-blue-500 hover:underline">Discord</a> for support and updates.</p>
      </footer>
    </div>
  );
}
