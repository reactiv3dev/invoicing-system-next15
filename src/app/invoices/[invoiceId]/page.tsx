import { Badge } from "@/components/ui/badge";
import db from "@/db";
import { Invoices } from "@/db/schema";
import { cn } from "@/lib/utils";
import { eq } from "drizzle-orm";
 
async function getInvoiceById(invoiceId:number){
  "use server"
  const result = await db.select().from(Invoices).where(eq(Invoices.id, invoiceId)).limit(1);
  return result[0] || null;
}

export default async function InvoicePage({ params }: { params: Promise<{ invoiceId: string }>}) {
 
    const invoiceId = parseInt((await params).invoiceId);
    if(isNaN(invoiceId)) throw new Error(`Invalid value for invoice id!`);
    const invoice = await getInvoiceById(invoiceId);
     
    if(!invoice) throw new Error(`Invoice with id:${invoiceId} not found`);
    return (
      <main className="flex flex-col h-screen gap-6 max-w-5xl mx-auto my-12">
          <div className="w-[900px] flex flex-row justify-between mb-8">
          <h1 className="flex text-5xl font-semibold text-left ites-center">Invoice #{invoiceId}  <Badge className={cn(
            "rounded-full px-6 py-2",
            invoice.status === 'open' && 'bg-blue-500',
            invoice.status === 'paid' && 'bg-green-600',
            invoice.status === 'void' && 'bg-zinc-700',
            invoice.status === 'uncollectible' && 'bg-red-600',
          )}>{invoice.status}</Badge> </h1>
          </div>

          <p className="text-3xl mb-3">
          ${(invoice.value /100).toFixed(2)}
          </p>

          <p className="text-lg mb-8">
            {invoice.description}
          </p>

          <h2 className="text-3xl font-semibold" >Billing Details</h2>
          
          <ul className="flex flex-col gap-2">
            <li className="flex gap-4">
              <strong className="block w-28 flex-shrink-0 font-medium text-sm">Invoice ID</strong>
              <span>{invoice.id}</span>
            </li>
            <li className="flex gap-4">
              <strong className="block w-28 flex-shrink-0 font-medium text-sm">Invoice Date</strong>
              <span>{(new Date(invoice.createTs)).toLocaleDateString()}</span>
            </li>
            <li className="flex gap-4">
              <strong className="block w-28 flex-shrink-0 font-medium text-sm">Billing Name</strong>
              <span></span>
            </li>
            <li className="flex gap-4">
              <strong className="block w-28 flex-shrink-0 font-medium text-sm">Billing Email</strong>
              <span></span>
            </li>
          </ul>

      </main>
    );
  }