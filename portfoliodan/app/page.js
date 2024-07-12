'use client'
import Header from "@/components/Header";
import Pay from "@/components/Pay";
import Head from "@/components/Head";
import Image from "next/image";

export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white">
      <Header/>
      <Head/>
      <Pay/>
    </main>
  );
}
