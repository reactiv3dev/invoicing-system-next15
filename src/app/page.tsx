import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col justify-center text-center h-screen gap-6 bg-inherit">
      <h1 className="text-7xl font-bold">InvoicIn</h1>
      <div className="flex justify-center items-center gap-6">
        <Button className="bg-yellow-500 p-6 " variant="ghost" asChild>
          <Link href="/dashboard">
           Sign In
          </Link>
        </Button>
        <Button className="bg-blue-500 p-6  " variant="ghost" asChild>
          <Link href="/docs">
          Documentation
          </Link>
        </Button>
      </div>
    </main>
  );
}
