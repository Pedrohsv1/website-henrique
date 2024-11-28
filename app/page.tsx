"use client";
import { FourthCard } from "./components/fourth-card";
import { MainCard } from "./components/main-card";
import { SecondCard } from "./components/second-card";
import { ThirdCard } from "./components/third-card";

export default function Home() {
  return (
    <div className=" w-full flex justify-center items-center ">
      <main className=" p-6 max-w-[1024px] w-full justify-between ">
        <section className="grid gap-4 grid-cols-4 grid-rows-[350px_350px]">
          <MainCard />
          <SecondCard />
          <ThirdCard />
          <FourthCard />
        </section>
        <section id="method"></section>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
