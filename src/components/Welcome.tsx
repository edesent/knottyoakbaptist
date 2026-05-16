import { site } from "@/lib/site";
import { OakLeaf } from "./Mark";

export default function Welcome() {
  return (
    <section id="welcome" className="relative py-28 md:py-36 bg-paper-grain overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-14 lg:gap-20 items-center">
          {/* Pastor portrait — placeholder */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] max-w-sm mx-auto lg:max-w-none">
              <div className="absolute -inset-4 bg-forest-800/90 rounded-sm -rotate-2" />
              <div
                className="relative w-full h-full rounded-sm overflow-hidden shadow-xl"
                style={{
                  backgroundImage: "url('/pastor-justin.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="absolute -bottom-5 -right-5 bg-paper px-5 py-3 shadow-lg">
                <p className="eyebrow text-brass-dark">{site.pastor.shortName}</p>
                <p className="font-serif text-xl text-ink mt-1">Our Pastor</p>
              </div>
            </div>
          </div>

          {/* Letter from the pastor */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-5 text-brass">
              <OakLeaf className="w-5 h-5" />
              <p className="eyebrow">A Word of Welcome</p>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ink font-medium leading-[1.05] tracking-tight">
              Come, find rest
              <span className="block italic text-forest-800 mt-1">
                among friends.
              </span>
            </h2>

            <div className="mt-8 space-y-5 text-lg text-ink-body leading-relaxed max-w-2xl">
              <p>
                Our church is a family. Not a building — a family. The kind that
                takes in a lost teenager with no church background and loves him like
                he belongs.
              </p>
              <p>
                That teenager was me. I was born and raised in Coventry. One
                day I was invited to a team game night by a childhood friend that
                attended Knotty Oak Baptist Church. I showed up with nothing but curiosity. What I found was warmth,
                belonging, and people who genuinely cared. I found a family. Little
                did I know — God actually found me.
              </p>
              <p>
                He took a lost, hopeless teen and began writing a story I never could
                have imagined. I started coming to church, and as I grew I felt God
                calling me to Bible college. I came back on staff in 2008, and in
                2023 I became the pastor — privileged to lead the church I call home.
              </p>
              <p>
                That&rsquo;s what Jesus does. He meets you right where you are — and
                this church is where He met me.
              </p>
              <p>
                So wherever you&rsquo;re coming from — you are welcome here. You
                have a place to call home.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <p className="font-serif italic text-xl text-ink">
                — {site.pastor.name}
              </p>
              <div className="h-5 w-px bg-ink-faint" />
              <a
                href={`tel:${site.phones.pastorTel}`}
                className="text-sm font-medium text-forest-700 hover:text-forest-900 transition-colors"
              >
                {site.phones.pastor}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
