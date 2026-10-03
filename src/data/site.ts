import { NavLink } from "@/types";

export const site = {
  name: "SEASON7",
  legalName: "Season7 The Nature Resort",
  shortName: "Season7 Resort",
  tagline: "A quiet stay among Munnar's green hills",
  description:
    "Season7 The Nature Resort is a comfortable nature retreat in Munnar, Kerala, with cozy cottages, thoughtful hospitality, local dining and outdoor experiences.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://season7-the-nature-resort.www-webexxy.chatgpt.site",
  address: "Eatty City Road, Chithirapuram, PO, Anachal, Munnar, Kerala 685565, India",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=Eatty+City+Road,+Chithirapuram,+Anachal,+Munnar,+Kerala+685565,+India",
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Accommodation", href: "#accommodation" },
  { label: "Dining", href: "#dining" },
  { label: "Facilities", href: "#facilities" },
  { label: "Activities", href: "#activities" },
  { label: "Contact", href: "#contact" },
];
