'use client'
import Header from "@/components/Header";
import Pay from "@/components/Pay";
import Head from "@/components/Head";
import PreviousWork from "@/components/previousWork";
import ExperienceWork from "@/components/Experience";
import ContactInfo from "@/components/Contact";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white gap-20">
      <Header/>
      <Head/>
      <Pay/>
      <PreviousWork/>
      <ExperienceWork/>
      <ContactInfo/>
      <Footer/>
    </main>
  );
}
