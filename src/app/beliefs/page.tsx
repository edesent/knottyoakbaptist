import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { OakLeaf } from "@/components/Mark";

export const metadata: Metadata = {
  title: "Statement of Faith",
  description:
    "The doctrinal convictions of Knotty Oak Baptist Church — an Independent Baptist church in Coventry, Rhode Island.",
  alternates: { canonical: "/beliefs" },
};

type Article = {
  num: string;
  title: string;
  points: { body: string; refs: string }[];
};

const articles: Article[] = [
  {
    num: "I",
    title: "The Holy Scriptures",
    points: [
      {
        body: "We believe the Holy Scriptures of the Old and New Testaments to be the verbally inspired Word of God. The Scriptures are infallible and God-breathed, and therefore the final authority for faith and life. The 66 books of the Bible are the complete and divine revelation of God to man. The Scriptures shall be interpreted according to their normal grammatical-historical meaning. We believe that the words of divine inspiration have been preserved in the King James Version which shall be the official and only translation used by the church.",
        refs: "2 Tim. 3:16-17; 2 Peter 1:20-21; Psalm 12:6-7",
      },
    ],
  },
  {
    num: "II",
    title: "The Godhead",
    points: [
      {
        body: "We believe in one Triune God, eternally existing in three persons; Father, Son, and Holy Spirit; each co-eternal in nature, co-equal in power and glory, and having the same attributes and perfections.",
        refs: "Deut. 6:4; Matt. 28:19; 2 Cor. 13:14; John 14:10, 26",
      },
    ],
  },
  {
    num: "III",
    title: "The Person and Work of Christ",
    points: [
      {
        body: "We believe that the Lord Jesus Christ, the eternal Son of God, became man without ceasing to be God, having been conceived by the Holy Spirit and born of Mary, in order that He might reveal God, and redeem sinful man.",
        refs: "Isaiah 7:14; Luke 1:35; John 1:1-2; 2 Cor. 5:19-21; Gal. 4:4-5; Phil. 2:5-8",
      },
      {
        body: "We believe that the Lord Jesus Christ accomplished our redemption through His death on the cross as a representative, vicarious, substitutionary sacrifice; and that our justification is made sure by His literal, physical resurrection from the dead.",
        refs: "Acts 2:18-36; Rom. 3:24-25; 1 Peter 2:24; Eph. 1:7; 1 Peter 1:3-5",
      },
      {
        body: "We believe that the Lord Jesus Christ ascended to Heaven, and is now exalted at the right hand of God, where, as our High Priest, He fulfills the ministry of Representative, Intercessor, and Advocate.",
        refs: "Acts 1:9-10; Heb. 9:24; Rom. 8:34; 1 John 2:1-2",
      },
    ],
  },
  {
    num: "IV",
    title: "The Person and Work of the Holy Spirit",
    points: [
      {
        body: "We believe that the Holy Spirit is a Person who convicts the world of sin, of righteousness, and of judgment; and that He is the Supernatural Agent in regeneration, baptizing all believers into the body of Christ, indwelling, and sealing them unto the day of redemption.",
        refs: "John 16:8-11; Rom. 8:9; 1 Cor. 12:12-14; 2 Cor. 3:6; Eph. 1:13-14",
      },
      {
        body: "We believe that He is the Divine Teacher who assists believers to understand and appropriate the Scriptures and that it is the privilege and duty of all the saved to be filled with the Spirit.",
        refs: "Eph. 1:17-18, 5:18; 1 John 2:20, 27",
      },
      {
        body: "We believe that God is sovereign in the bestowal of spiritual gifts to every believer. God uniquely uses evangelists, pastors, and teachers to equip believers in the assembly in order that they can do the work of the ministry.",
        refs: "Rom. 12:3-8; 1 Cor. 12:4-11, 28; Eph. 4:7-12",
      },

    ],
  },
  {
    num: "V",
    title: "Salvation",
    points: [
      {
        body: "We believe that salvation is the gift of God brought to man by grace and received by personal faith in the Lord Jesus Christ, whose precious blood was shed on Calvary for the forgiveness of our sins.",
        refs: "John 1:12; Eph. 1:7, 2:8-10; 1 Peter 1:18-19",
      },
    ],
  },
  {
    num: "VI",
    title: "The Eternal Security of the Believer",
    points: [
      {
        body: "We believe that all the redeemed, once saved, are kept by God's power and are thus secure in Christ forever.",
        refs: "John 6:37-40, 10:27-30; Rom. 8:1, 38-39; 1 Cor. 1:4-8; 1 Peter 1:4-5",
      },
      {
        body: "We believe that it is the privilege of believers to rejoice in the assurance of their salvation through the testimony of God's Word, which, however, clearly forbids the use of Christian liberty as an occasion to the flesh.",
        refs: "Rom. 13:13-14; Gal. 5:13; Titus 2:11-15",
      },
    ],
  },
  {
    num: "VII",
    title: "The Church",
    points: [
      {
        body: "We believe that the local church, which is the body and the bride of Christ, is solely made up of born-again persons.",
        refs: "1 Cor. 12:12-14; 2 Cor. 11:2; Eph. 1:22-23, 5:25-27",
      },
      {
        body: "We believe that the establishment and continuance of local churches is clearly taught and defined in the New Testament Scriptures.",
        refs: "Acts 14:27; 20:17, 28-32; 1 Tim. 3:1-3; Titus 1:5-11",
      },
      {
        body: "We believe in the autonomy of the local church free of any external authority or control.",
        refs: "Acts 13:1-4, 15:19-31, 20:28; Rom. 16:1, 4; 1 Cor. 3:9, 5:4-7, 13; 1 Peter 5:1-4",
      },
      {
        body: "We recognize water baptism and the Lord's Supper as the Scriptural ordinance of obedience for the church.",
        refs: "Matt. 28:19-20; Acts 2:41-44, 18:18; 1 Cor. 11:23-26",
      },
    ],
  },
  {
    num: "VIII",
    title: "Separation",
    points: [
      {
        body: "We believe that God calls every believer to a life of personal separation from worldliness and sin. The Christian is to be in the world but not of it, abstaining from conduct and associations that compromise devotion to Christ or bring reproach upon His name.",
        refs: "John 17:15-17; Rom. 12:1-2; 2 Cor. 6:14-17; 1 John 2:15-17",
      },
      {
        body: "We believe that the Scripture commands ecclesiastical separation from those who teach false doctrine or who deny the fundamentals of the faith. We are to mark and avoid those who cause division contrary to sound doctrine, and we are to have no fellowship with the unfruitful works of darkness.",
        refs: "Rom. 16:17; Eph. 5:11; 2 John 9-11",
      },
      {
        body: "We believe that this biblical principle of separation extends to the refusal to affiliate or cooperate in ministry with those who maintain open fellowship with apostasy, compromise sound doctrine for the sake of unity, or participate in ecumenical movements that subordinate biblical truth to organizational fellowship. We recognize that biblical love and biblical separation are not in conflict. The faithful warning and withdrawal from error is itself an act of love toward the body of Christ.",
        refs: "Amos 3:3; 2 Thess. 3:6, 14-15; 2 Tim. 3:5; Titus 3:10",
      },
    ],
  },
  {
    num: "IX",
    title: "The Second Coming of Christ",
    points: [
      {
        body: "We believe in the personal, imminent return of Christ, Who will rapture His church prior to the seven-year tribulation period. At the end of the Tribulation, Christ will personally and visibly return, with His saints, to establish His earthly Messianic Kingdom which was promised to the nation of Israel.",
        refs: "Psalm 89:3-4; Dan. 2:31-45; Zech. 14:4-11; 1 Thess. 1:10, 4:13-18; Titus 2:13; Rev. 3:10, 19:11-16, 20:16",
      },
    ],
  },
  {
    num: "X",
    title: "Creation",
    points: [
      {
        body: "We believe that God created the universe in six literal, twenty-four-hour periods. We reject evolution, the Gap Theory, the Day-Age Theory, and Theistic Evolution as unscriptural.",
        refs: "Gen. 1-2; Exodus 20:11",
      },
    ],
  },
  {
    num: "XI",
    title: "Marriage and Human Sexuality",
    points: [
      {
        body: "We believe that marriage is a sacred institution ordained by God, consisting exclusively of the union of one man and one woman. Marriage was established before the fall of man, reflects the relationship between Christ and His Church, and is the only lawful institution for sexual union.",
        refs: "Gen. 2:24; Matt. 19:4-6; Eph. 5:25-32; Heb. 13:4",
      },
      {
        body: "We believe that God creates every person distinctly male or female, that this biological distinction is determined by God at conception, and that it is not subject to change by human will or intervention. We reject as contrary to Scripture all claims that a person's sex is self-determined or fluid.",
        refs: "Gen. 1:27; Psalm 139:13-14; Matt. 19:4",
      },
      {
        body: "We believe that all sexual relations outside of biblical marriage, including fornication, adultery, and homosexuality, are sinful and contrary to the will of God. We hold these convictions with compassion toward all people, affirming that the grace of God in Christ is sufficient for the forgiveness and transformation of any sin.",
        refs: "Rom. 1:26-27; 1 Cor. 6:9-11, 18-20; 1 Thess. 4:3-5",
      },
    ],
  },
  {
    num: "XII",
    title: "Civil Government",
    points: [
      {
        body: "We believe that God has ordained and created all authority consisting of three basic institutions; the home, the church, and the government. Every person is subject to these authorities, but all (including the authorities themselves) are answerable to God and governed by His Word. God has given each institution specific Biblical responsibilities and balanced those responsibilities with the understanding that no institution has the right to infringe upon the other. The home, the church, and the government are equal and sovereign in their respective Biblically assigned spheres of responsibility under God.",
        refs: "Rom. 13:1-7; Eph. 5:22-24; Heb. 13:17; 1 Peter 2:13-14",
      },
    ],
  },
  {
    num: "XIII",
    title: "Missions",
    points: [
      {
        body: "We believe that God has given the Church a great commission to proclaim the Gospel to all nations so that there might be a great multitude from every nation, tribe, ethnic group, and language group who believe on the Lord Jesus Christ. As ambassadors of Christ, we must use all available means to go to the foreign nations and not wait for them to come to us.",
        refs: "Matt. 28:19-20; Mark 16:15; Luke 24:46-48; John 20:21; Acts 1:8; 2 Cor. 5:20",
      },
    ],
  },
  {
    num: "XIV",
    title: "Giving",
    points: [
      {
        body: "We believe that every Christian, as a steward of that portion of God's wealth entrusted to him, is obligated to support his local church financially. We believe that God has established the tithe as a basis for giving but that every Christian should also give other offerings sacrificially and cheerfully to the support of the Church, the relief of those in need, and the spread of the Gospel. We believe that a Christian relinquishes all rights to direct the use of the tithe or offering once the gift has been made.",
        refs: "Gen. 14:20; Prov. 3:9-10; Acts 4:34-37; 1 Cor. 16:2; 2 Cor. 9:6-7; Gal. 6:6; Eph. 4:28; 1 Tim. 5:17-18; 1 John 3:17",
      },
    ],
  },
];

export default function BeliefsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-0 bg-paper">
        <header className="max-w-4xl mx-auto px-6 md:px-10 text-center pb-16 md:pb-20">
          <div className="flex justify-center mb-6 text-brass">
            <OakLeaf className="w-10 h-10" />
          </div>
          <p className="eyebrow">Statement of Faith</p>
          <h1 className="mt-4 font-serif text-5xl md:text-6xl lg:text-7xl text-ink font-medium leading-[1.05] tracking-tight">
            Speaking the truth
            <span className="block italic text-forest-800">in love.</span>
          </h1>
          <p className="mt-8 text-lg text-ink-body leading-relaxed max-w-2xl mx-auto">
            The following articles represent the doctrinal convictions of Knotty
            Oak Baptist Church. All Scripture references are from the King James
            Bible.
          </p>
        </header>

        <section className="bg-paper-warm py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-6 md:px-10">
            <ol className="space-y-14 md:space-y-16">
              {articles.map((article) => (
                <li
                  key={article.num}
                  id={`article-${article.num.toLowerCase()}`}
                  className="grid md:grid-cols-12 gap-6 md:gap-10 items-start pb-14 border-b border-ink-faint/20 last:border-0 last:pb-0 scroll-mt-32"
                >
                  <div className="md:col-span-2 flex md:justify-end">
                    <span className="font-serif text-4xl md:text-5xl text-brass/70 leading-none tabular-nums">
                      {article.num}
                    </span>
                  </div>
                  <div className="md:col-span-10">
                    <h2 className="font-serif text-2xl md:text-3xl text-ink font-medium leading-snug tracking-tight">
                      {article.title}
                    </h2>
                    <ol className="mt-5 space-y-5">
                      {article.points.map((p, i) => (
                        <li key={i} className="text-lg text-ink-body leading-relaxed">
                          {article.points.length > 1 && (
                            <span className="font-semibold text-forest-800 mr-2">
                              {i + 1}.
                            </span>
                          )}
                          {p.body}
                          <p className="mt-2 text-xs font-semibold tracking-[0.18em] uppercase text-brass-dark">
                            {p.refs}
                          </p>
                        </li>
                      ))}
                    </ol>
                  </div>
                </li>
              ))}
            </ol>

            <p className="mt-16 text-center text-sm italic text-ink-body/70">
              Adopted by Knotty Oak Baptist Church · Coventry, Rhode Island
            </p>
          </div>
        </section>

        <section className="py-24 md:py-32 bg-forest-950 text-white text-center">
          <div className="max-w-2xl mx-auto px-6">
            <p className="eyebrow text-brass-light">A People, Not Just a Page</p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl font-medium leading-tight tracking-tight">
              Doctrine lived together.
            </h2>
            <p className="mt-6 text-forest-100/80 text-lg leading-relaxed">
              Our Statement of Faith describes what we believe. Our Church
              Covenant describes how we walk it out together.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/covenant"
                className="inline-flex items-center gap-2 bg-brass text-forest-950 font-semibold text-sm tracking-wide uppercase px-8 py-4 rounded-full hover:bg-brass-light hover:-translate-y-0.5 transition-all shadow-lg"
              >
                Read the Church Covenant
                <span aria-hidden>→</span>
              </Link>
              <Link
                href="/mission"
                className="inline-flex items-center gap-2 text-white font-medium text-sm tracking-wide uppercase px-8 py-4 rounded-full border-2 border-white/30 hover:bg-white/10 hover:border-white/60 transition-all"
              >
                Our Mission
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
