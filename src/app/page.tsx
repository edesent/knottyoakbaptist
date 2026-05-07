import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Welcome from "@/components/Welcome";
import ServiceTimes from "@/components/ServiceTimes";
import Ministries from "@/components/Ministries";
import MissionQuote from "@/components/MissionQuote";
import ScriptureBanner from "@/components/ScriptureBanner";
import Events from "@/components/Events";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

export const revalidate = 300;

const churchSchema = {
  "@context": "https://schema.org",
  "@type": "Church",
  name: site.name,
  alternateName: "Knotty Oak Baptist",
  url: site.url,
  logo: `${site.url}/favicon.svg`,
  image: `${site.url}/og-image.svg`,
  description:
    "Independent Baptist church in Coventry, Rhode Island. Speaking the truth in love since 1840.",
  telephone: `+1-${site.phones.church.replace(/\D/g, "")}`,
  email: site.email,
  foundingDate: site.foundingDate,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.line1,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    postalCode: site.address.postal,
    addressCountry: "US",
  },
  sameAs: [site.social.facebook],
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday",   opens: "09:00", closes: "12:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday",   opens: "18:00", closes: "19:30" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Thursday", opens: "18:00", closes: "19:30" },
  ],
  event: site.services.map((s) => ({
    "@type": "Event",
    name: s.label,
    eventSchedule: {
      "@type": "Schedule",
      repeatFrequency: "P1W",
      byDay: s.day,
    },
    location: {
      "@type": "Place",
      name: site.name,
      address: site.address.full,
    },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(churchSchema) }}
      />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Welcome />
        <ServiceTimes />
        <Ministries />
        <MissionQuote />
        <ScriptureBanner />
        <Events />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
