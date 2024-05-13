"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

const error = () => {
  return (
    <>
      <div className="grid h-screen place-content-center px-4">
        <div className="text-center">
          <h1 className="text-9xl font-black ">Error 😿</h1>

          <p className="text-2xl font-bold tracking-tight  sm:text-4xl">
            Uh-oh!
          </p>

          <p className="mt-10 ">Some thing went wrong 🙀</p>
          <Link href={"/"}>
            <Button variant={"link"}>Back to Home</Button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default error;
