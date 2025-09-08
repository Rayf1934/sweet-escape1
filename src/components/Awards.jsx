import React from "react";

function Awards() {
  const awards = [
    {
      title: "The Most Travel Agency Branches",
      year: "2023",
      desc: "Lorem ipsum dolor sit amet consectetur. Nulla orci porta turpis velit enim ullamcorper nam mauris viverra.",
    },
    {
      title: "Top Agents Award",
      year: "2024",
      desc: "Lorem ipsum dolor sit amet consectetur. Nulla orci porta turpis velit enim ullamcorper nam mauris viverra.",
    },
    {
      title:
        "The Best Selling Agent Tour & Travel Garuda Indonesia Travel Fair",
      year: "2025",
      desc: "Lorem ipsum dolor sit amet consectetur. Nulla orci porta turpis velit enim ullamcorper nam mauris viverra.",
    },
  ];

  return (
    <section className="py-16 bg-gray-900 text-white">
      {/* Judul */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-pink-500">
        Awards
      </h2>
      <p className="text-center text-gray-300 max-w-2xl mx-auto mb-12">
        We are a leading company that operates in the field of tour and travel
        agency industry.
      </p>

      {/* Grid Awards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6 md:px-20">
        {awards.map((award, index) => (
          <div key={index} className="text-center">
            <h3 className="italic font-semibold text-lg md:text-xl">
              {award.title} <br />
              {award.year}
            </h3>
            <p className="text-gray-400 mt-3 text-sm md:text-base">
              {award.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Awards;
