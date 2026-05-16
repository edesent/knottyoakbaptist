import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "i.ytimg.com" },
      { protocol: "https", hostname: "i1.ytimg.com" },
      { protocol: "https", hostname: "i2.ytimg.com" },
      { protocol: "https", hostname: "i3.ytimg.com" },
      { protocol: "https", hostname: "i4.ytimg.com" },
      { protocol: "https", hostname: "i9.ytimg.com" },
    ],
  },
  async redirects() {
    return [
      {
        source: "/home.php",
        destination: "/",
        statusCode: 301,
      },
      {
        source: "/our-mission.html",
        destination: "/mission",
        statusCode: 301,
      },
      {
        source: "/audio-sermons.html",
        destination: "/sermons",
        statusCode: 301,
      },
      {
        source: "/giving.php",
        destination: "/give",
        statusCode: 301,
      },
      {
        source: "/teens.html",
        destination: "/ministries",
        statusCode: 301,
      },
      {
        source: "/children.html",
        destination: "/ministries",
        statusCode: 301,
      },
      {
        source: "/men.html",
        destination: "/ministries",
        statusCode: 301,
      },
      {
        source: "/ricaa.html",
        destination: "/ministries",
        statusCode: 301,
      },
      {
        source: "/locations.html",
        destination: "/",
        statusCode: 301,
      },
      {
        source: "/contact.html",
        destination: "/",
        statusCode: 301,
      },
      {
        source: "/yearly-calendar.html",
        destination: "/",
        statusCode: 301,
      },
      {
        source: "/literature.html",
        destination: "/",
        statusCode: 301,
      },
      {
        source: "/acorn.php",
        destination: "/",
        statusCode: 301,
      },
      {
        source: "/ministries.php",
        destination: "/ministries",
        statusCode: 301,
      },
      {
        source: "/:slug.php",
        destination: "/",
        statusCode: 301,
      },
      {
        source: "/:slug.html",
        destination: "/",
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
