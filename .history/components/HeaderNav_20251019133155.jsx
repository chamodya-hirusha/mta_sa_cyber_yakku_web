"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

const links = [
    {
        name: "home",
        path: "/"
    },
    {
        name: "about",
        path: "/about"
    },
    {
        name: "services",
        path: "/services"
    },
    {
        name: "contact",
        path: "/contact"
    },
    {
        name: "membership",
        path: "/membership"
    }
];

const Nav = () => {
    const pathname = usePathname();
    console.log(pathname);

    return (
        <nav className="flex gap-3">
            {links.map((link, index) => {
                const isActive = link.path === pathname;
                const isHomeActive = isActive && link.path === "/";

                return (
                    <Button
                        key={index}
                        asChild
                        variant={isActive ? "default" : "ghost"}
                        className={
                            isHomeActive
                                ? "bg-gradient-to-r from-purple-400  to-amber-600 text-black hover:from-amber-500 hover:to-amber-700"
                                : isActive
                                ? "bg-gradient-to-r from-purple-600to-red-600 text-white"
                                : "text-white hover:text-purple300 hover:bg-purple-900/30"
                        }
                        aria-current={isActive ? "page" : undefined}
                    >
                        <Link href={link.path} className="capitalize">
                            {link.name}
                        </Link>
                    </Button>
                );
            })}
        </nav>
    );
};

export default Nav;