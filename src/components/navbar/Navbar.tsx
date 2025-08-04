'use client'

import Image from "next/image";
import Link from "next/link";
import NavbarLink from "./NavbarLink";
import { Menu } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const menuButtonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (!open) return;
        function handleClick(e: MouseEvent) {
            // Pokud kliknu na menu button, neřeším zavření
            if (
                (menuRef.current && menuRef.current.contains(e.target as Node)) ||
                (menuButtonRef.current && menuButtonRef.current.contains(e.target as Node))
            ) {
                return;
            }
            setOpen(false);
        }
        function handleResize() {
            setOpen(false);
        }
        document.addEventListener("mousedown", handleClick);
        window.addEventListener("resize", handleResize);
        return () => {
            document.removeEventListener("mousedown", handleClick);
            window.removeEventListener("resize", handleResize);
        };
    }, [open]);

    return (
        <>
            <nav className="border-zinc-800/75 border-b">
                <div className="border-x border-zinc-800/75 max-w-[420px] sm:max-w-[600px] lg:max-w-[900px] xl:max-w-[1200px] mx-auto flex justify-between items-center p-4 bg-background relative">
                    <Link href="/" className="flex items-center gap-2 text-zinc-50 tracking-tighter font-bold text-xl">
                        <Image src="/logo.svg" alt="BitAspire Logo" width={20} height={20} />
                        BitAspire
                    </Link>
                    {/* Desktop menu */}
                    <div className="space-x-6 hidden md:flex">
                        <NavbarLink text="Marketplace" href="/marketplace" />
                        <NavbarLink text="Documentation" href="/documentation" />
                        <NavbarLink text="Discord" href="/discord" />
                    </div>
                    {/* Mobile menu button */}
                    <button
                        ref={menuButtonRef}
                        className="md:hidden p-2 rounded hover:bg-zinc-800/40 transition text-zinc-400"
                        onClick={() => setOpen((v) => !v)}
                        aria-label="Open menu"
                    >
                        <Menu size={20} />
                    </button>
                </div>
                {/* Mobile slide-down menu */}
                <div
                    ref={menuRef}
                    className={`
                        fixed top-16 left-0 w-full z-[9999] bg-background border-b border-zinc-800/75
                        transition-all duration-300 ease-in-out md:hidden
                        ${open ? "max-h-60 opacity-100" : "max-h-0 opacity-0 pointer-events-none"}
                        overflow-hidden flex flex-col gap-2
                    `}
                    style={{ boxShadow: open ? "0 4px 24px 0 rgba(0,0,0,0.15)" : undefined }}
                >
                    <div className="p-4 flex flex-col gap-3">
                        <NavbarLink text="Marketplace" href="/marketplace" />
                        <NavbarLink text="Documentation" href="/documentation" />
                        <NavbarLink text="Discord" href="/discord" />
                    </div>
                </div>
            </nav>
            <div className="striped w-full h-10 border-b border-zinc-800/75"></div>
        </>
    );
}