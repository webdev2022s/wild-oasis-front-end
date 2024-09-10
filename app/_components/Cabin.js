import Image from "next/image";
import TextExpanders from "./TextExpander";
import { EyeSlashIcon, MapPinIcon, UserIcon } from "@heroicons/react/24/solid";

export default function Cabin({ cabin }) {
  const { id, name, maxCapacity, regularPrice, discount, description, image } =
    cabin;
  return (
    <div className="grid grid-cols-[3fr_4fr] gap-20 border border-primary-800 py-3 px-10 mb-24">
      <div className="relative scale-[1.15] -translate-x-3">
        <Image
          src={image}
          fill
          className="object-cover"
          quality={100}
          alt={`cabin ${name}`}
        />
      </div>

      <div className="">
        <h3 className="text-accent-100 font-black text-7xl mb5 translate-x-[-254px] bg-primary-950 p-6 pb-1 w-[150%]">
          Cabin {name}
        </h3>
        <p className="text-lg text-primary-300 mb-10 ">
          <TextExpanders>{description}</TextExpanders>
        </p>

        <ul className="flex flex-col gap-4 mb-7">
          <li className="flex gap-3 items-center">
            <UserIcon className="h-5 w-5 text-primary-600" />
            <span className="text-xl">
              {" "}
              For up to <span className="font-semibold">
                {" "}
                {maxCapacity}
              </span>{" "}
              guests
            </span>
          </li>
          <li className="flex gap-3 items-center">
            <MapPinIcon className="h-5 w-5 text-primary-600" />
            <span className="text-xl">
              {" "}
              Located in the heart of the{" "}
              <span className="font-semibold">Dolomites</span> (Philippines)
            </span>
          </li>
          <li className="flex gap-3 items-center">
            <EyeSlashIcon className="h-5 w-5 text-primary-600" />
            <span className="text-xl">
              Privacy <span className="font-semibold">100%</span> guaranteed
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
