import Link from "next/link";
import { twMerge } from "tailwind-merge";

type ButtonProps = {
    href: string;
    children: React.ReactNode;
    variant?: "primary" | "secondary";
    className?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export default function Button({
    href,
    children,
    variant = "primary",
    className,
    ...props
}: ButtonProps) {
    const base =
        "flex items-center justify-center gap-2 p-4 tracking-tight font-medium uppercase text-sm transition-colors";
    const variants = {
        primary:
            "bg-white text-zinc-900 hover:bg-zinc-900 hover:text-white",
        secondary:
            "bg-zinc-900 text-white hover:bg-zinc-800",
    };

    return (
        <Link
            href={href}
            className={twMerge(base, variants[variant], className)}
            {...props}
        >
            {children}
        </Link>
    );
}
