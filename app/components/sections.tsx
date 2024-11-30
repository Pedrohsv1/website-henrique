import React from "react";
import { sections } from "../data/data";
import { Card } from "./card";

export const Sections = () => {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-4">Seções</h1>
      {/* Cards */}
      <div className="flex overflow-x-scroll gap-4">
        {sections.map((section) => (
          <Card
            name={section.name}
            subtitle={section.idade}
            url="#"
            key={section.name}
          />
        ))}
      </div>
    </section>
  );
};
