import { Nav } from "./nav";

export const footer: Nav[] = [
  { id: 1, name: "About US", path: "/about-us" },

  { id: 4, name: "Investor Portal", path: "/investor-portal" },

  { id: 2, name: "Contact us", path: "/contact" },

  {
    id: 3,
    name: "Our Assets",
    path: "/assets?asset=our-assets",
  },
  {
    id: 4,
    name: "For Sale",
    path: "/assets?asset=for-sale",
  },
  {
    id: 5,
    name: "Recently Sold",
    path: "/assets?asset=sold",
  },

  {
    id: 6,
    name: "Privacy Policy",
    path: "/",
  },

  {
    id: 7,
    name: "Terms of Service",
    path: "/",
  },
];
