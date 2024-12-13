import * as ScrollArea from "@radix-ui/react-scroll-area";
import { sections } from "../data/data";
import { Card } from "./card";

export const Sections = () => {
  return (
    <section id="section">
      <h1 className="text-3xl font-bold mb-4">Seções</h1>
      {/* Cards */}
      <ScrollArea.Root className="ScrollAreaRoot">
        <ScrollArea.Viewport className="ScrollAreaViewport">
          <div className="flex overflow-x-scroll gap-4">
            {sections.map((section) => (
              <Card
                id={section.id}
                name={section.name}
                subtitle={section.idade}
                url={section.url}
                color={section.color}
                key={section.name}
                isSection
              />
            ))}
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
    </section>
  );
};
