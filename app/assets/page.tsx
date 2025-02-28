import { Metadata } from "next";
import AllAssets from "./AllAssets";

export const metadata: Metadata = {
  title: { absolute: "Our Assets" },
};

const AssetsPage = () => {
  return <AllAssets />;
};

export default AssetsPage;
