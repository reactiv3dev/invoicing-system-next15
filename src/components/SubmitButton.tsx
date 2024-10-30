"use client"
import { Loader } from "lucide-react";
import { Button } from "./ui/button";
import { useFormStatus } from "react-dom";

export default function SubmitButton(){
    const { pending } = useFormStatus();
    console.log("pending",pending)
    return (
        <Button className="relative w-full font-semibold p-5">
                {pending && <span className="absolute flex w-full h-full justify-center items-center"><Loader className="animate-spin"/></span>}<span className={pending ? "text-transparent":""}>Submit Invoice</span>
        </Button>
    )
}