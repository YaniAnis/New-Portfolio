import React from "react";

const roadmapData = [
  {
    year: "2018",
    title: "Flowers & Saints Founded",
    desc: "Our journey began with a passion for minimal design and floral artistry.",
    side: "left",
  },
  {
    year: "2019",
    title: "First Major Exhibition",
    desc: "Showcased our unique blend of digital art and floral arrangements at the Sydney Design Festival.",
    side: "right",
  },
  {
    year: "2020",
    title: "Launch of Online Store",
    desc: "Expanded our reach by bringing our creations to the digital world.",
    side: "left",
  },
  {
    year: "2021",
    title: "Collaboration with Top Brands",
    desc: "Partnered with leading lifestyle brands to create exclusive collections.",
    side: "right",
  },
  {
    year: "2022",
    title: "International Recognition",
    desc: "Received the prestigious International Floral Design Award.",
    side: "left",
  },
  {
    year: "2023",
    title: "Expansion to Physical Stores",
    desc: "Opened our first brick-and-mortar store in the heart of Sydney.",
    side: "right",
  },
];

export default function Roadmap() {
  return (
    <section className="w-full flex flex-col items-center py-16 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold mb-2">Our Journey</h2>
      <p className="mb-10 text-gray-300 text-lg">
        The evolution of Flowers & Saints through the years
      </p>
      <div className="relative w-full max-w-3xl">
        {/* Vertical timeline line */}
        <div className="absolute left-1/2 top-0 h-full w-1 bg-gray-700 -translate-x-1/2"></div>
        <ul className="space-y-12">
          {roadmapData.map((item, idx) => (
            <li key={item.year} className="relative flex items-center">
              {/* Left side */}
              <div className={`w-1/2 pr-8 ${item.side === "left" ? "" : "opacity-0 pointer-events-none"}`}>
                {item.side === "left" && (
                  <div className="bg-gray-800 rounded p-4 shadow">
                    <span className="text-blue-400 font-semibold">{item.year}</span>
                    <h3 className="font-bold mt-1">{item.title}</h3>
                    <p className="text-gray-300 mt-1">{item.desc}</p>
                  </div>
                )}
              </div>
              {/* Timeline dot */}
              <div className="z-10 w-6 h-6 bg-gray-900 border-4 border-blue-500 rounded-full flex items-center justify-center absolute left-1/2 -translate-x-1/2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              </div>
              {/* Right side */}
              <div className={`w-1/2 pl-8 ${item.side === "right" ? "" : "opacity-0 pointer-events-none"}`}>
                {item.side === "right" && (
                  <div className="bg-gray-800 rounded p-4 shadow">
                    <span className="text-blue-400 font-semibold">{item.year}</span>
                    <h3 className="font-bold mt-1">{item.title}</h3>
                    <p className="text-gray-300 mt-1">{item.desc}</p>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
