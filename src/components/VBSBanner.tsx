import Link from "next/link";
import { site } from "@/lib/site";

export default function VBSBanner({ top = "top-0" }: { top?: string }) {
  if (!site.vbs.isActive) return null;

  return (
    <Link
      href={site.vbs.url}
      className={`fixed ${top} inset-x-0 z-[60] h-10 bg-green-600 text-white flex items-center justify-center gap-2 text-xs md:text-sm font-semibold tracking-wide hover:bg-green-700 transition-colors px-4 text-center`}
    >
      <span className="hidden sm:inline">🧰</span>
      <span className="truncate">{site.vbs.message}</span>
    </Link>
  );
}
