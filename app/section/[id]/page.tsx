"use client";

import { RamoEscoteiro } from "@/app/components/sections/escoteiros";
import { LinkForOtherRamos } from "@/app/components/sections/linkothers";
import { RamoLobinho } from "@/app/components/sections/lobinho";
import { RamoPioneiro } from "@/app/components/sections/pioneiros";
import { SectionImagesRamo } from "@/app/components/sections/scrollimages";
import { RamoSenior } from "@/app/components/sections/seniors";
import { sections } from "@/app/data/data";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const [data, setData] = useState<(typeof sections)[0] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const resolvedParams = await params;

      const section = sections.find(
        (section) => section.id === resolvedParams.id,
      );
      if (section) {
        setData(section);
      } else {
        router.push("/");
      }
    };

    fetchData();
  }, [params, router]);

  return (
    <article className="p-6 max-w-[1024px] w-full flex flex-col scroll-smooth gap-12">
      {data ? (
        <>
          <h1
            className={`text-3xl font-bold ${
              data?.name == "Lobinho"
                ? "text-yellow-600"
                : data?.name == "Pioneiro"
                  ? "text-red-900"
                  : data?.name == "Escoteiro"
                    ? "text-green-950"
                    : data?.name == "Sênior" && "text-rose-950"
            } `}
          >
            {data?.name}
          </h1>
          {data?.name == "Lobinho" ? (
            <RamoLobinho />
          ) : data?.name == "Pioneiro" ? (
            <RamoPioneiro />
          ) : data?.name == "Escoteiro" ? (
            <RamoEscoteiro />
          ) : data?.name == "Sênior" ? (
            <RamoSenior />
          ) : null}
          {data && <SectionImagesRamo data={data} />}
        </>
      ) : (
        <div className="w-full flex flex-col gap-8 pt-2">
          <div className="flex w-[200xp] h-[40px] rounded-3xl bg-gray-200 animate-pulse"></div>
          <div className="flex w-[200xp] h-[300px] rounded-3xl bg-gray-200 animate-pulse "></div>
          <div className="flex w-[200xp] h-[300px] rounded-3xl bg-gray-200 animate-pulse "></div>
          <div className="flex w-[200xp] h-[300px] rounded-3xl bg-gray-200 animate-pulse "></div>
        </div>
      )}
      <LinkForOtherRamos />
    </article>
  );
}
