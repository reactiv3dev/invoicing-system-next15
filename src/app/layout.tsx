import type { Metadata } from "next";
 
import "./globals.css";
import {
  ClerkProvider,
 
} from '@clerk/nextjs'
import HeaderComponent from "@/components/Header";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="text-blue-50 bg-slate-900"
        >
          <HeaderComponent/>
        <Container>
          {children}
        </Container>   
        </body>
      </html>
    </ClerkProvider>
    
  );
}