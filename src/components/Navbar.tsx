"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";
import LiveBanner from "@/components/LiveBanner";
import VBSBanner from "@/components/VBSBanner";

const navLinks = [
  { href: "/#services", label: "Times" },
  { href: "/#welcome", label: "Welcome" },
  { href: "/ministries", label: "Ministries" },
  { href: "/sermons", label: "Sermons" },
  { href: "/beliefs", label: "Beliefs" },
  { href: "/mission", label: "Mission" },
  { href: "/#events", label: "Events" },
  { href: "/devotionals", label: "Devotionals" },
  { href: "/prayer", label: "Prayer" },
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
  const showsLiveBanner = site.live.isLive && !isSubPage;
  const showsVbsBanner = site.vbs.isActive;
  const bannerCount = (showsVbsBanner ? 1 : 0) + (showsLiveBanner ? 1 : 0);
  const navTop = bannerCount === 2 ? "top-20" : bannerCount === 1 ? "top-10" : "top-0";

  return (
    <>
      {showsVbsBanner && <VBSBanner top="top-0" />}
      {showsLiveBanner && (
        <LiveBanner top={showsVbsBanner ? "top-10" : "top-0"} />
      )}
      <nav
        className={`fixed inset-x-0 z-50 transition-all duration-500 ${
          navTop
        } ${
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
          <span className="flex flex-col leading-none -ml-1 md:-ml-1.5">
            <span className="font-serif text-lg md:text-xl font-semibold tracking-tight">
              Knotty Oak
            </span>
            <span className="text-[0.58rem] font-semibold tracking-[0.28em] uppercase text-brass-light/90 mt-1">
              Baptist Church · Est. 1840
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
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18L18 6" />
            </svg>
          </button>

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

          </ul>
        </div>
      </div>
    </nav>
  );
}
