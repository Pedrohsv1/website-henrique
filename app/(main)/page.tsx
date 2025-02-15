"use client";
import { FourthCard } from "../components/fourth-card";
import { MainCard } from "../components/main-card";
import { Method } from "../components/method";
import { Projects } from "../components/projects";
import { SecondCard } from "../components/second-card";
import { Sections } from "../components/sections";
import { ThirdCard } from "../components/third-card";

export default function Home() {
  return (
    <main className=" p-6 max-w-[1024px] w-full flex flex-col scroll-smooth gap-12">
      <section className="grid gap-4 grid-cols-4 grid-rows-[350px_350px]">
        <MainCard />
        <SecondCard />
        <ThirdCard />
        <FourthCard />
      </section>
      <div className="w-full h-[1px] bg-gray-200"></div>
      <Method />
      <div className="w-full h-[1px] bg-gray-200"></div>
      <Sections />
      <div className="w-full h-[1px] bg-gray-200"></div>
      <Projects />
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </main>
  );
}
