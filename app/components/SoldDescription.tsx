import { SoldAssets } from "../../services/assets";

interface Props {
  asset: SoldAssets;
}

const SoldDescription = ({ asset }: Props) => {
  return (
    <>
      <p className="mt-3 font-semibold">{asset?.desc}</p>

      <p className="mt-5 font-semibold text-gray-600 uppercase">
        Deal Overview
      </p>

      <p className="mt-3 text-sm text-gray-700">
        Property Address : <span className="font-bold">{asset?.location}</span>
      </p>
      <p className="mt-3 text-sm">Purchased Date : {asset?.purchased}</p>
      <p className="mt-3 text-sm">Sale Date : {asset?.sale}</p>
      <p className="mt-3 text-sm">Holding Period : {asset?.holding}</p>
      <p className="mt-3 text-sm">Purchased Price : {asset?.purchasePrice}</p>
      <p className="mt-3 text-sm">Sale Price : {asset?.salePrice}</p>
      <p className="mt-3 text-sm">Project Cost : {asset?.cost}</p>
      <p className="mt-3 text-sm">Profit : {asset?.profit}</p>
      <p className="mt-3 text-sm">ROI : {asset?.roi}</p>
      <p className="mt-3 text-sm">COC Return : {asset?.coc}</p>
    </>
  );
};

export default SoldDescription;
