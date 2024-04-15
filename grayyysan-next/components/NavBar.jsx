import Link from "next/link";
import { NAV_LINKS } from "@/constants";
import Button from "./smallComponents/Button";

const NavBar = () => {
  return (
    <nav className="px-4 py-3 bg-white text-black flex justify-between">
      <Link href="/" className="text-2xl">GrayyySannn</Link>
      <ul className="hidden h-full gap-12 md:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="cursor-pointer regular-16 items-center transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
        <Button title="Login"/>
      </ul>
    </nav>
  );
};

export default NavBar;
