"use client"
import SubmitButton from "@/components/SubmitButton";
//import Form from 'next/form';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
 
import { createNewInvoiceAction } from "@/server/actions";
 


export default function NewInvoice() {
     
 
     
    return (
      <main className="flex flex-col h-screen gap-6 max-w-5xl mx-auto my-12">
          <div className="flex flex-row justify-between">
          <h1 className="text-3xl font-semibold text-left">Create Invoice</h1>
      
          </div>
          <form action={createNewInvoiceAction} className="grid gap-4 max-w-md" >
            <div>
                <Label htmlFor="name" className="block font-semibold text-sm mb-2">Billing Name</Label>
                <Input id="name" name="name" type="text"/>
            </div>
            <div>
                <Label htmlFor="email" className="block  font-semibold text-sm mb-2">Billing Email</Label>
                <Input id="email" name="email" type="email"/>
            </div>
            <div>
                <Label htmlFor="value" className="block  font-semibold text-sm mb-2">Billing Value (in dollars 1$, 1.5$, 1.99$)</Label>
                <Input id="value" name="value" type="string"/>
            </div>
            <div>
                <Label htmlFor="description" className="block font-semibold text-sm mb-2">Description</Label>
                <Textarea id="description" name="description" />
            </div>
            <div>
                <SubmitButton/>
            </div>
          </form>
      </main>
    );
  }