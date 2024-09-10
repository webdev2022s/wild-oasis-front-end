import Image from "next/image";
import Link from "next/link";
import logo from "@/public/light.png";

export default function Logo() {
  return (
    <div className="z-10">
      <Link href={"/"} className="flex items-center gap-4 z-10 ">
        <Image
          height={70}
          width={70}
          src={logo}
          alt="logo brand"
          quality={100}
        />
        <span className="text-xl font-semibold text-primary-50 ">
          {" "}
          The Wild Oasis in Nextjs
        </span>
      </Link>
    </div>
  );
}
