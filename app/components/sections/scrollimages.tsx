import type { sections } from "@/app/data/data";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import Image from "next/image";
import { useEffect, useState } from "react";

export const SectionImagesRamo = ({ data }: { data: (typeof sections)[0] }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <SectionImagesRamoLoading />;
  }

  return (
    <ScrollArea.Root className="ScrollAreaRoot">
      <ScrollArea.Viewport className="ScrollAreaViewport">
        <div className="flex gap-4">
          <div className="relative w-[300px] h-96 rounded-[32px] overflow-hidden">
            <Image
              src={`/sections/${data.name.toLocaleLowerCase()}/${data.name.toLocaleLowerCase()}_1.jpg`}
              alt="Photo 1"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-[300px] h-96">
            <video
              autoPlay
              loop
              muted
              controls={false}
              playsInline
              className="w-full h-full object-cover rounded-[32px]"
            >
              <source
                src={`/sections/${data.name.toLocaleLowerCase()}/${data.name.toLocaleLowerCase()}_2.mp4`}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="relative w-[300px] h-96 rounded-[32px] overflow-hidden">
            <Image
              src={`/sections/${data.name.toLocaleLowerCase()}/${data.name.toLocaleLowerCase()}_3.jpg`}
              alt="Photo 3"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar
        className="ScrollAreaScrollbar"
        orientation="horizontal"
      >
        <ScrollArea.Thumb className="ScrollAreaThumb" />
      </ScrollArea.Scrollbar>
      <ScrollArea.Corner className="ScrollAreaCorner" />
    </ScrollArea.Root>
  );
};

export const SectionImagesRamoLoading = () => (
  <div className="flex gap-4">
    <div className="relative w-[300px] max-h-96 rounded-[32px] overflow-hidden bg-gray-300 animate-pulse"></div>
    <div className="relative w-[300px] max-h-96 rounded-[32px] overflow-hidden bg-gray-300 animate-pulse"></div>
    <div className="relative w-[300px] max-h-96 rounded-[32px] overflow-hidden bg-gray-300 animate-pulse"></div>
  </div>
);
