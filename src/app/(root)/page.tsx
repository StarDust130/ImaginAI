import { UserButton } from "@clerk/nextjs";


export default function RootPage() {
  return (
   <main>
    <p>Home</p>
    <UserButton afterSignOutUrl="/" />
   </main>
  );
}

