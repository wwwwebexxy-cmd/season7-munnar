import { NavLink } from "@/types";

export const site = {
  name: "SEASON7",
  legalName: "Season7 The Nature Resort",
  shortName: "Season7 Resort",
  tagline: "A quiet stay among Munnar's green hills",
  description:
    "Season7 The Nature Resort is a comfortable nature retreat in Munnar, Kerala, with cozy cottages, thoughtful hospitality, local dining and outdoor experiences.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  address: "Eatty City Road, Chithirapuram, PO, Anachal, Munnar, Kerala 685565, India",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=Eatty+City+Road,+Chithirapuram,+Anachal,+Munnar,+Kerala+685565,+India",
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Stay", href: "#stay" },
  { label: "Experiences", href: "#experiences" },
  { label: "Contact", href: "#contact" },
];
