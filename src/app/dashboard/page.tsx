import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { FilePlus2 } from "lucide-react";
import Link from "next/link";
  
import db from "@/db";
import { Invoices } from "@/db/schema";
import { cn } from "@/lib/utils";

async function getInvoicesPaginated(offset: number = 0, limit: number=10){
  "use server"
  const invoices = await db.select().from(Invoices).offset(offset).limit(limit);
  
  return invoices;
}

export default async function Dashboard() {
  const invoices = await getInvoicesPaginated();
  console.log(invoices)
  return (
    <main className="flex flex-col   text-center h-screen gap-6 max-w-5xl mx-auto my-12">
        <div className="flex flex-row justify-between">
        <h1 className="text-3xl font-semibold text-left">Dashboard</h1>
        <Button className="inline-flex gap-2" variant="ghost" asChild>
            <Link href='/invoices/new'>
                <FilePlus2 className="w-5 h-5" />Create Invoice
            </Link>
            </Button>
        </div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
            <TableRow>
            <TableHead className="w-[100px] p-4">Date</TableHead>
            <TableHead className="p-4">Customer</TableHead>
            <TableHead className="p-4">Email</TableHead>
            <TableHead className="p-4">Status</TableHead>
            <TableHead className="text-right p-4">Value</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {invoices && invoices.map((invoice)=>{
              return (
              <TableRow key={invoice.id}>
                <TableCell className="font-medium text-left font-semibold"><Link className="block p-7" href={`invoices/${invoice.id}`}>{new Date(invoice.createTs).toLocaleDateString()}</Link></TableCell>
                <TableCell className="text-left font-semibold "><Link className="block p-7" href={`invoices/${invoice.id}`}>Philip J. Fry</Link></TableCell>
                <TableCell className="text-left font-semibold "><Link className="block p-7" href={`invoices/${invoice.id}`}>fry@planetexpress.com</Link></TableCell>
                <TableCell className="text-left font-semibold ">
                  <Link className="block p-7" href={`invoices/${invoice.id}`}>
                  <Badge className={cn(
                      "rounded-full px-6 py-2",
                      invoice.status === 'open' && 'bg-blue-500',
                      invoice.status === 'paid' && 'bg-green-600',
                      invoice.status === 'void' && 'bg-zinc-700',
                      invoice.status === 'uncollectible' && 'bg-red-600',
                    )}>
                    {invoice.status}
                    </Badge>
                  </Link>
                </TableCell>
                <TableCell className="text-right font-semibold"><Link className="block p-7" href={`invoices/${invoice.id}`}>${(invoice.value / 100).toFixed(2)}</Link></TableCell>
            </TableRow>)}
              )
            }
        </TableBody>
        </Table>
    </main>
  );
}
