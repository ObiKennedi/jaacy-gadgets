"use client"

import Image from "next/image"
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import "@/style/LandingNav.scss"

const LandingNavLinks = [
    { id: 1, name: "Home", href: "/" },
    { id: 2, name: "About", href: "/about" },
    { id: 3, name: "shop", href: "/shop" },
    { id: 4, name: "Contact", href: "/contact" },
    { id: 5, name: "Blog", href: "/blog" }
]

export const LandingNav = () => {

    const [open, setOpen] = useState(false);
    const pathname = usePathname()
    const router = useRouter()

    return (
        <header className="landing-nav">
            <div onClick={() => router.push("/")}>
                <Image
                    src="/logo/jaacys-logo.png"
                    width={300}
                    height={300}
                    alt="logo"
                />
            </div>

            <button onClick={() => setOpen((s) => !s)} className="menu">
                {open ? <X size={22} strokeWidth={2} /> : <Menu size={22} strokeWidth={2} />}
            </button>

            <nav className={open ? "close" : "open"}>
                <ul>
                    {LandingNavLinks.map((item) => {
                        const isActive = pathname === item.href; 
                        return (
                            <li key={item.id}>
                                <Link
                                    href={item.href}
                                    className={`nav-link ${isActive ? "active" : ""}`} 
                                >
                                    {item.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                <button onClick={() => (window.location.href = "/register")}>Get started</button>
            </nav>
        </header>
    )
}