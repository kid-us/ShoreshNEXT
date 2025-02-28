import {
  Bath,
  BedDouble,
  CarFront,
  Crop,
  MountainSnow,
  Tag,
} from "lucide-react";
import { CurrentAssets } from "../services/assets";

interface Props {
  asset: CurrentAssets;
}

const CurrentDescription = ({ asset }: Props) => {
  return (
    <>
      {asset && (
        <div>
          <p className="mb-2">{asset.desc}</p>
          <p className="mb-2">{asset.desc2}</p>
          <p className="mb-2">{asset.desc3}</p>
          <p className="mb-2">{asset.desc4}</p>
          <p className="mb-2">{asset.desc5}</p>
          <p className="uppercase mt-5 text-gray-700">More Details</p>

          <div
            className={`grid ${
              asset.lot ? "lg:grid-cols-6" : "lg:grid-cols-5"
            } grid-cols-2 gap-2 mt-5`}
          >
            <div className="flex gap-x-2 items-center justify-center border rounded p-3">
              <Tag size={18} />
              <p>${asset.price.toLocaleString()}</p>
            </div>

            <div className="flex gap-x-3 items-center justify-center border rounded p-3">
              <BedDouble color="black" size={18} />
              <p>{asset.bed} Bedrooms</p>
            </div>

            <div className="flex gap-x-3 items-center justify-center border rounded p-3">
              <Bath color="black" size={20} />
              {asset.bath} Bathrooms
            </div>
            <div className="flex gap-x-3 items-center justify-center border rounded p-3">
              <CarFront size={18} />
              <p>{asset.parking} Parking Spots</p>
            </div>
            <div className="flex gap-x-3 items-center justify-center border rounded p-3">
              <Crop size={18} />
              <p>{asset.volume}</p>
            </div>

            {asset.lot && (
              <div className="flex gap-x-3 items-center justify-center border rounded p-3">
                <MountainSnow size={18} />
                <p>{asset.lot}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default CurrentDescription;
