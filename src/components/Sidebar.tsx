"use client";
import { navLinks } from "@/constants";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className=" sidebar">
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
        <Separator />

        <nav className="sidebar-nav">
          <SignedIn>
            <ul className="sidebar-nav_elements">
              {navLinks.slice(0, 6).map((link) => {
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
            <Separator />

            <ul className="sidebar-nav_elements">
              {navLinks.slice(6).map((link) => {
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
          </SignedIn>

          <SignedOut>
            <Button asChild>
              <Link href={"/sign-in"}>Login</Link>
            </Button>
          </SignedOut>

          <SignedIn>
            <Separator />
          </SignedIn>

          <span className="flex justify-between  ">
            <span className="self-start">
              <ModeToggle />
            </span>
            <span>
              <UserButton afterSignOutUrl="/" />
            </span>
          </span>
        </nav>
      </div>
    </aside>
  );
};
export default Sidebar;
