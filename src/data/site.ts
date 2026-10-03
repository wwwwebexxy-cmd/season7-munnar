import { NavLink } from "@/types";

export const site = {
  name: "SEASON7",
  legalName: "Season7 Natural Resort Munnar (Amrutha Resort)",
  shortName: "Season7 Natural Resort",
  tagline: "A quiet stay among Munnar's green hills",
  description:
    "Season7 Natural Resort Munnar is a premium nature retreat with comfortable rooms, warm hospitality, local dining and restorative experiences in Kerala's highlands.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://season7-the-nature-resort.www-webexxy.chatgpt.site",
  address: "Eatty City Road, Chithirapuram, PO, Anachal, Munnar, Kerala 685565, India",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=Eatty+City+Road,+Chithirapuram,+Anachal,+Munnar,+Kerala+685565,+India",
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];
