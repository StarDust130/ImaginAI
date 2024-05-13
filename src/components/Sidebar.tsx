"use client";
import { navLinks } from "@/constants";
import { SignedIn } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./ModeToggle";

const Sidebar = () => {
  const pathname = usePathname();
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

        <nav className="sidebar-nav">
          <SignedIn>
            <ul className="sidebar-nav_elements">
              {navLinks.map((link) => {
                const isActive = link.route === pathname;

                return (
                  <li
                    key={link.route}
                    className={`sidebar-nav_element group ${
                      isActive
                        ? "bg-primary text-white  "
                        : "text-gray-500 hover:bg-blue-100 dark:hover:bg-blue-700 dark:text-white dark:brightness-200"
                    }`}
                  >
                    <Link href={link.route} className="sidebar-link">
                      <Image
                        src={link.icon}
                        alt={link.label}
                        width={24}
                        height={24}
                        className={`${isActive && "brightness-200"}`}
                      />

                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <ModeToggle />
          </SignedIn>
        </nav>
      </div>
    </aside>
  );
};
export default Sidebar;
