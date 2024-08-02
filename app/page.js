'use client'
import Header from "@/components/Header";
import Pay from "@/components/Pay";
import Head from "@/components/Head";
import previousWork from "@/components/previousWork";
import experienceWork from "@/components/Experience";
import contactInfo from "@/components/Contact";
import Image from "next/image";

export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white gap-20">
      <Header/>
      <Head/>
      <Pay/>
      <previousWork/>
      <experienceWork/>
      <contactInfo/>
    </main>
  );
}
