import Link from "next/link";
import { site } from "@/lib/site";

export default function VBSBanner({ top = "top-0" }: { top?: string }) {
  if (!site.vbs.isActive) return null;

  return (
    <Link
      href={site.vbs.url}
      className={`fixed ${top} inset-x-0 z-[60] min-h-14 bg-green-700/60 backdrop-blur-md text-white flex items-center justify-center gap-2 text-sm sm:text-base font-semibold tracking-wide hover:bg-green-800/70 transition-colors px-4 py-2 text-center leading-snug`}
    >
      <span className="hidden sm:inline">🧰</span>
      <span>{site.vbs.message}</span>
    </Link>
  );
}
