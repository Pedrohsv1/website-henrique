import * as ScrollArea from "@radix-ui/react-scroll-area";
import { projects } from "../data/data";
import { Card } from "./card";

export const Projects = () => {
  return (
    <section id="projects">
      <h1 className="text-3xl font-bold mb-4">Projetos</h1>
      {/* Cards */}
      <ScrollArea.Root className="ScrollAreaRoot">
        <ScrollArea.Viewport className="ScrollAreaViewport">
          <div className="flex overflow-x-scroll gap-4">
            {projects.map((project) => (
              <Card
                id={project.id}
                name={project.name}
                subtitle={project.creator}
                url={project.url}
                key={project.name}
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
