import { type SVGProps } from "react";

// Stylized acorn silhouette. Works on any background color via currentColor.
export function OakLeaf(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      {/* Stem */}
      <path d="M19 1 Q20 0 21 1 L21.5 8 L18.5 8 Z" />
      {/* Cap — wider than body to create the acorn shoulder */}
      <path d="M18.5 8 C10 8 6 11 6 16 L8 22 C12 24 28 24 32 22 L34 16 C34 11 30 8 21.5 8 Z" />
      {/* Body — rounded oval below the cap */}
      <path d="M8 22 C6 32 12 40 20 40 C28 40 34 32 32 22 C28 24 12 24 8 22 Z" />
    </svg>
  );
}

export function WordMark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <OakLeaf className="w-5 h-5 text-brass shrink-0" />
      <span className="flex flex-col leading-none">
        <span className="font-serif text-lg font-semibold tracking-tight">Knotty Oak</span>
        <span className="text-[0.6rem] font-medium tracking-[0.25em] uppercase text-ink-muted mt-0.5">
          Baptist Church
        </span>
      </span>
    </span>
  );
}
