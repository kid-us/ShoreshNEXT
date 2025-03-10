import { Nav } from "./nav";

export const footer: Nav[] = [
  { id: 1, name: "About US", path: "/about-us" },

  { id: 2, name: "Investor Portal", path: "/investor-portal" },

  { id: 3, name: "Contact us", path: "/contact" },

  {
    id: 4,
    name: "Our Assets",
    path: "/assets?asset=our-assets",
  },
  {
    id: 5,
    name: "Recently Sold",
    path: "/assets?asset=sold",
  },
  {
    id: 6,
    name: "In Progress",
    path: "/assets?asset=in-progress",
  },

  {
    id: 7,
    name: "Privacy Policy",
    path: "/",
  },

  {
    id: 8,
    name: "Terms of Service",
    path: "/",
  },
];
