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
              <div className="relative w-full h-full rounded-sm overflow-hidden shadow-xl">
                <img
                  src="/776.png"
                  alt="Pastor Justin Martin"
                  className="w-full h-full object-cover object-center"
                />
              </div>
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
                Our church is a family. The kind that takes in a lost teenager with
                no church background and loves him like he belongs.
              </p>
              <p>
                That teenager was me. I felt empty, lost, had no direction and no
                idea what I was missing.
              </p>
              <p>
                Then a childhood friend invited me to a teen game night at Knotty
                Oak Baptist Church. I met some awesome people and made some friends.
                Eventually I went to a Sunday morning service and found the people
                there to be very friendly. Very sincere. Something was different
                about them, different than anything I had ever experienced. There was
                warmth. There was real happiness. And I walked away with a sense of
                belonging, even though these people barely knew me.
              </p>
              <p>
                I started coming sporadically. But each time I walked through the
                door I saw that same warmth and sincerity, and because of that there
                was trust. I began to really listen to what was being preached from
                the pulpit. The way these people lived brought credibility to the
                message. Eventually I came to know Christ.
              </p>
              <p>
                The Lord took me, a lost teenager, and completely redirected my
                life. I grew in my faith, felt God calling me into ministry, and
                went to Bible college. When I graduated I came back home to serve
                in the very place where God had transformed my life. Started as a
                volunteer, joined the staff, and in 2023 became the pastor. That
                still humbles me. God brought me full circle, back to the town
                where I was born and raised.
              </p>
              <p>
                So wherever you&rsquo;re coming from, you are welcome here. You
                have a place to call home.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <p className="font-serif italic text-xl text-ink">
                {site.pastor.name}
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
