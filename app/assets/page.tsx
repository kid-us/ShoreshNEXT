import { Metadata } from "next";
import AllAssets from "./AllAssets";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: { absolute: "Our Assets" },
};

const AssetsPage = () => {
  return (
    <Suspense>
      <AllAssets />
    </Suspense>
  );
};

export default AssetsPage;
