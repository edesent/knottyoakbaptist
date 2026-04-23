import { type SVGProps } from "react";

// Simple stylized oak-leaf silhouette. Works on any background color via currentColor.
export function OakLeaf(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path d="M20 2c-1.2 2.6-3.3 4-5.8 4.2-1.6.1-3-.3-4.3-1-.3 2 .4 3.9 1.8 5.4-2.3.3-4.3 1.7-5.4 3.8 2 .6 3.5 2 4.2 4-2 .5-3.6 2-4.4 4 2.2.5 3.8 2 4.5 4-2 .6-3.6 2.2-4.3 4.3 2.6.3 4.7 1.9 5.8 4.2.5 1 1.5 1.5 2.6 1.4.8-.1 1.5-.5 2-1.2.9-1.3 2-2 3.3-2.3v9h2v-9c1.3.3 2.4 1 3.3 2.3.5.7 1.2 1.1 2 1.2 1.1.1 2.1-.4 2.6-1.4 1.1-2.3 3.2-3.9 5.8-4.2-.7-2.1-2.3-3.7-4.3-4.3.7-2 2.3-3.5 4.5-4-.8-2-2.4-3.5-4.4-4 .7-2 2.2-3.4 4.2-4-1.1-2.1-3.1-3.5-5.4-3.8 1.4-1.5 2.1-3.4 1.8-5.4-1.3.7-2.7 1.1-4.3 1C23.3 6 21.2 4.6 20 2z" />
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
