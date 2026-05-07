"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/#services", label: "Times" },
  { href: "/#welcome", label: "Welcome" },
  { href: "/ministries", label: "Ministries" },
  { href: "/mission", label: "Mission" },
  { href: "/#events", label: "Events" },
  { href: "/give", label: "Give" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isSubPage = pathname !== "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const dark = scrolled || isSubPage;

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        dark
          ? "bg-forest-950/95 backdrop-blur-md shadow-[0_2px_24px_-8px_rgba(0,0,0,0.4)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="group flex items-center text-white">
          <Image
            src="/knotty-oak-hero.png"
            alt="Knotty Oak Baptist Church"
            width={1024}
            height={1024}
            priority
            className="w-16 h-16 md:w-20 md:h-20 object-contain transition-transform group-hover:-rotate-[6deg]"
          />
          <span className="flex flex-col leading-none -ml-3 md:-ml-4">
            <span className="font-serif text-lg md:text-xl font-semibold tracking-tight">
              Knotty Oak
            </span>
            <span className="text-[0.58rem] font-semibold tracking-[0.28em] uppercase text-brass-light/90 mt-1">
              Baptist Church · Est. 1828
            </span>
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-white/80 text-sm font-medium px-3.5 py-2 rounded-md hover:text-white hover:bg-white/[0.07] transition-all"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="ml-2">
            <Link
              href="/#services"
              className="inline-flex items-center gap-1.5 bg-brass text-forest-950 text-[0.78rem] font-semibold tracking-wide uppercase px-5 py-2.5 rounded-full hover:bg-brass-light hover:-translate-y-0.5 transition-all shadow-sm"
            >
              Plan a Visit
            </Link>
          </li>
        </ul>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span className={`w-6 h-0.5 bg-white rounded transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-6 h-0.5 bg-white rounded transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`w-6 h-0.5 bg-white rounded transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>

        <div
          className={`fixed lg:hidden top-0 right-0 w-80 h-screen bg-forest-950 pt-24 px-8 shadow-2xl transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block text-white/85 text-base font-medium px-4 py-3 rounded-md hover:text-white hover:bg-white/10 transition-all"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-4">
              <Link
                href="/#services"
                className="block text-center bg-brass text-forest-950 font-semibold px-6 py-3 rounded-full hover:bg-brass-light transition-all"
              >
                Plan a Visit
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
