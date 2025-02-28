import current1 from "@/public/images/assets/current_1.jpg";
import current_11 from "@/public/images/assets/current_11.jpg";
import current_12 from "@/public/images/assets/current_12.jpg";
import current_13 from "@/public/images/assets/current_13.jpg";
import current_14 from "@/public/images/assets/current_14.jpg";
import current_15 from "@/public/images/assets/current_15.jpg";
import current_16 from "@/public/images/assets/current_16.jpg";

import current2 from "@/public/images/assets/current_2.jpg";
import current_21 from "@/public/images/assets/current_21.jpg";
import current_22 from "@/public/images/assets/current_22.jpg";
import current_23 from "@/public/images/assets/current_23.jpg";
import current_24 from "@/public/images/assets/current_24.jpg";
import current_25 from "@/public/images/assets/current_25.jpg";
import current_26 from "@/public/images/assets/current_26.jpg";

import sold1 from "@/public/images/assets/asset_sold_1.jpg";
import sold_11 from "@/public/images/assets/asset_sold_1_1.jpg";
import sold_12 from "@/public/images/assets/asset_sold_1_2.jpg";
import sold_13 from "@/public/images/assets/asset_sold_1_3.jpg";

import sold2 from "@/public/images/assets/asset_sold_2.jpg";
import sold_21 from "@/public/images/assets/assets_sold_2_1.jpg";
import sold_22 from "@/public/images/assets/assets_sold_2_2.jpg";
import sold_23 from "@/public/images/assets/assets_sold_2_3.jpg";
import sold_24 from "@/public/images/assets/assets_sold_2_4.jpg";
import sold_25 from "@/public/images/assets/assets_sold_2_5.jpg";
import sold_26 from "@/public/images/assets/assets_sold_2_5.jpg";

import sold3 from "@/public/images/assets/asset_sold_3.jpg";
import { StaticImageData } from "next/image";

export interface SoldAssets {
  id: number;
  img: StaticImageData | string;
  name: string;
  location?: string;
  category: string;
  desc: string;
  purchased: string;
  sale: string;
  holding: string;
  purchasePrice: string;
  cost: string;
  salePrice: string;
  profit: string;
  roi: string;
  coc: string;
  imgs: StaticImageData[];
}

export interface CurrentAssets {
  id: number;
  img: StaticImageData | string;
  name: string;
  location?: string;
  category: string;
  desc: string;
  desc2: string;
  desc3: string;
  desc4: string;
  desc5: string;
  bed: number;
  bath: number;
  purchased: number;
  parking: number;
  volume: string;
  built: number;
  price: number;
  lot?: string;
  imgs: StaticImageData[];
}

// Current Assets
export const currentAssets: CurrentAssets[] = [
  {
    id: 1,
    img: current1,
    desc: "Welcome to your dream home in the heart of Greenbriar! This beautifully renovated 3 bedroom, 2 bathroom ranch-style home offers a total of 1,737 square feet between the main level and the full basement. Step inside and be greeted by a recently updated and renovated interior with stylish finishes throughout. The spacious living room is perfect for relaxing or gathering with friends and family. The adjacent dining area is ideal for enjoying meals together, and the updated kitchen boasts sleek countertops, stainless steel appliances and garden window.",
    desc2:
      "Down the hall, you'll find two bedrooms including a master suite with attached bathroom. The full basement provides plenty of room for storage, a home gym, or a recreation room – the possibilities are endless! Also in the basement you’ll find the 3rd bedroom, a three quarter bath and the utility / laundry room.",
    desc3:
      "Step outside and enjoy your private backyard, perfect for barbecues, outdoor gatherings and space for the dog to roam. This home is situated across the street from the expansive Cottonwood Creek Park, offering walking and running trails, sports complexes, a disc golf course, and the Cottonwood Creek Family Center YMCA.",
    desc4:
      "Located in the desirable Greenbriar neighborhood, this home offers the perfect blend of convenience and tranquility. You'll be just minutes from Woodmen Road, with easy access to shopping, entertainment, and amenities, yet tucked away in a quiet and family-friendly community.",
    desc5:
      "Don't miss out on this incredible opportunity to own a move-in ready home in a fantastic location. Schedule your showing today!",
    category: "Current",
    location: "Colorado springs",
    name: "6765 Montarbor dr",
    purchased: 2020,
    bed: 3,
    bath: 2,
    parking: 1,
    volume: "1737 sq/ft",
    built: 1985,
    price: 450_000,
    imgs: [
      current_11,
      current_12,
      current_13,
      current_14,
      current_15,
      current_16,
    ],
  },
  {
    id: 2,
    img: current2,
    desc: "Welcome to carefree living in this beautifully updated condo! This 3 bedroom, 2.5 bathroom condo offers 1,544 square feet of move-in ready living space in the highly sought-after District 20 school district.",
    desc2:
      "Step inside and be impressed by the fresh paint and brand new LVP flooring that flows throughout. The updated kitchen is a chef's dream, featuring sleek granite countertops and a brand new stainless steel appliance package.",
    desc3:
      "Upstairs, you'll find two generously sized bedrooms, a full bathroom and a laundry area. The finished basement offers a third bedroom and a full bathroom. With a half bathroom on the main level, there's plenty of space for everyone to get ready in the morning.",
    desc4:
      "This condo also features an attached 1-car garage for your convenience. This condo is ideally situated near the intersection of Austin Bluffs and Woodmen, offering easy access to a variety of shopping and dining options. Nature enthusiasts will love that the Briargate Trail runs behind the community, connecting to Cottonwood Creek Park with its expansive green spaces and recreational opportunities.",
    desc5:
      "Don't wait! This turn-key condo is ready for its new owner and won't last long. Schedule your showing today!",
    category: "Current",
    location: "Colorado springs",
    name: "7872 Antelope valley point",
    purchased: 2000,
    bed: 3,
    bath: 2.5,
    parking: 2,
    volume: "1544 sq/ft",
    built: 2000,
    price: 300_000,
    lot: "Lot 0.13 acres",
    imgs: [
      current_21,
      current_22,
      current_23,
      current_24,
      current_25,
      current_26,
    ],
  },
];

//Sold Assets
export const soldAssets: SoldAssets[] = [
  {
    id: 1,
    img: sold1,
    desc: "This property, purchased on July 18, 2024, and sold after a 4.5-month holding period, achieved a profit of $15,970 from an out-of-pocket investment of $31,110, resulting in an impressive ROl of 51.3%. The project demonstrates efficient execution and strategic management, delivering strong returns within a short timeframe",
    category: "Sold",
    location: "Maryland",
    name: "110 Long Ave Salisbury",
    purchased: "July 18, 2024",
    sale: "December 6, 2024",
    holding: "4 1/2 Months",
    purchasePrice: "$135,000.00",
    cost: "$117,906.12",
    salePrice: "$290,000.00",
    profit: "$37,093.88",
    roi: "14.7%",
    coc: "",
    imgs: [sold_11, sold_12, sold_13],
  },
  {
    id: 2,
    img: sold2,
    desc: "This property was purchased on October 2, 2024, and sold after holding for 2 months and 25 days. It achieved a profit of $22,282.35 from an out-of-pocket investment of $32,130.07, resulting in an impressive ROl of 69.35%. The project showcases efficient execution and strategic management, delivering strong returns within a short timeframe.",
    category: "Sold",
    location: "Maryland",
    name: "603 Sherwood Cir",
    purchased: "Oct 2,2024",
    sale: "December 27, 2024",
    holding: "2 Months 25 days",
    purchasePrice: "$147,000",
    cost: "$100,717.65",
    salePrice: "$270,000",
    profit: "$22,282.35",
    roi: "9%",
    coc: "",
    imgs: [sold_21, sold_22, sold_23, sold_24, sold_25, sold_26],
  },
  {
    id: 3,
    img: sold3,
    desc: "This property was purchased on January 24, 2025, and sold on February 19, 2025, with a holding period of 26 days. Originally intended as a full flip, we identified an eager buyer who wanted the property as-is, allowing us to pivot and secure a strong return with minimal renovation.",
    category: "Sold",
    location: "Maryland",
    name: "2910 Jesterville Rd",
    purchased: "January 24, 2025",
    sale: "February 19, 2025",
    holding: "26 days",
    purchasePrice: "$189,000",
    cost: "$14,736.49",
    salePrice: "$250,000",
    profit: "$46,263.51",
    roi: "22.7%",
    coc: "",
    imgs: [sold3],
  },

  // For Sale Properties
  // {
  //   id: 1,
  //   img: hero2,
  //   desc: "Contemporary townhouses with private patios.",
  //   category: "For Sale",
  //   location: "Seattle, WA",
  //   name: "Emerald Bay Townhomes",
  //   purchased: "2022",
  // },
];
