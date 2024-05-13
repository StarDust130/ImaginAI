"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navLinks } from "@/constants";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./ModeToggle";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <header className="header cursor-pointer">
      <Link href={"/"} className="flex item-center gap-2 md:py-2">
        <Image
          src="https://img.icons8.com/fluency/100/artstation.png"
          alt="Imagin AI Logo"
          width={32}
          height={32}
        />
        <span className="font-extrabold  text-3xl text-[#007ACC]">
          Imagin AI
        </span>
      </Link>

      <nav className="flex gap-5">
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
          <Sheet>
            <SheetTrigger className="cursor-pointer">
              <Image
                src="/assets/icons/menu.svg"
                alt="Menu Icon"
                width={32}
                height={32}
                className="dark:brightness-200 cursor-pointer"
              />
            </SheetTrigger>
            <SheetContent className="sheet-content sm:w-64">
              <>
                <Link
                  href={"/"}
                  className="flex item-center mb-2 gap-2 md:py-2"
                >
                  <Image
                    src="https://img.icons8.com/fluency/100/artstation.png"
                    alt="Imagin AI Logo"
                    width={32}
                    height={32}
                  />
                  <span className="font-extrabold  text-3xl text-[#007ACC]">
                    Imagin AI
                  </span>
                </Link>
                <Separator />

                <ul className="header-nav_elements cursor-pointer">
                  {navLinks.map((link) => {
                    const isActive = link.route === pathname;

                    return (
                      <li
                        key={link.route}
                        className={`${
                          isActive && "gradient-text   "
                        }  p-18 whitespace-nowrap  `}
                      >
                        <Link
                          href={link.route}
                          className="sidebar-link cursor-pointer"
                        >
                          <Image
                            src={link.icon}
                            alt={link.label}
                            width={24}
                            height={24}
                            className={`dark:brightness-200`}
                          />

                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
                <Separator />
              </>
              <div className="absolute bottom-5">
                <ModeToggle />
              </div>
            </SheetContent>
          </Sheet>
        </SignedIn>

        <SignedOut>
          <Button asChild>
            <Link href={"/sign-in"}>Login</Link>
          </Button>
        </SignedOut>
      </nav>
    </header>
  );
};
export default MobileNav;
