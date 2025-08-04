/**
 * NavbarLink.tsx
 * This component renders a link in the navigation bar that directs users to the marketplace.
 * It is styled with Tailwind CSS for a consistent look and feel.
 * It is used within the Navbar component to provide navigation options.
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.text - The text or label for the link.
 * @param {string} props.href - The URL to navigate to when the link is clicked.
 * @param {string} props.className - Additional CSS classes for styling the link.
 * @returns {JSX.Element} A styled link to the marketplace.
 */

import Link from "next/link";

export default function NavbarLink(props: { text: string; href: string; className?: string }) {
  return (
    <Link href={props.href} className={`w-full md:w-auto text-zinc-400 tracking-tight text-sm uppercase font-medium hover:text-white transition-colors ${props.className}`}>
      {props.text}
    </Link>
    );
}