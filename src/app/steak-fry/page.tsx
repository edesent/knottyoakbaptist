import { redirect } from "next/navigation";

// The Men's Steak Fry (Oct 30, 2026) is over. Old links send folks to the homepage.
export default function SteakFryRedirect() {
  redirect("/");
}
