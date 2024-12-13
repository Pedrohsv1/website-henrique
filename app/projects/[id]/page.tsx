"use client";
import { AlguemPuxa } from "@/app/components/projetos/alguempuxa";
import { ClickScout } from "@/app/components/projetos/clickscout";
import { projects } from "@/app/data/data";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const [data, setData] = useState<(typeof projects)[0] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const resolvedParams = await params;

      const project = projects.find(
        (project) => project.id === resolvedParams.id,
      );
      if (project) {
        setData(project);
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
          <div className="relative w-full h-[100px] border border-gray-200 rounded-3xl overflow-hidden">
            <Image
              src={data?.url}
              alt={""}
              fill
              style={{ objectFit: "cover" }}
              quality={100}
              priority
              sizes=" (max-width: 1200px) 100vw, 70vw, 20vw"
            />
          </div>

          <div className="flex flex-col gap-2">
            <h1 className={`text-3xl font-bold text-red-900`}>{data?.name}</h1>
            <p className="">{data?.creator}</p>
          </div>
          {data.name == "Alguém puxa!" ? (
            <AlguemPuxa />
          ) : data.name == "ClickScout" ? (
            <ClickScout />
          ) : null}
        </>
      ) : null}
    </article>
  );
}
