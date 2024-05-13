import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className=" sidebar hidden md:block">
      <div className="flex size-full flex-col gap-4">
        <Link href={"/"} className="sidebar-logo">
          <Image
            src="https://img.icons8.com/fluency/100/artstation.png"
            alt="Imagin AI Logo"
            width={30}
            height={30}
          />
          <span className="font-extrabold  text-3xl text-[#007ACC]">
            Imagin AI
          </span>
        </Link>

        {navLinks.map((link) => (
          <Link key={link.route} href={link.route} className="flex justify-start items-center gap-4">
            <Image src={link.icon} alt={link.label} width={25} height={25} />

            <span>{link.label}</span>
          </Link>
        ))}
      </div>
    </aside>
  );
};
export default Sidebar;
