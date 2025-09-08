import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    "Apakah Sweet Escape dapat membantu pengurusan visa dan passport?",
    "Apakah Sweet Escape dapat menyesuaikan schedule client?",
    "Apakah Sweet Escape dapat melayani Private Tour?",
    "Apakah Sweet Escape dapat menyediakan paket group tour?",
  ];

  return (
    <section className="py-16 bg-white">
      {/* Judul */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Frequently Asked <span className="text-pink-600 italic">Questions</span>
      </h2>
      <p className="text-gray-500 text-center max-w-2xl mx-auto mb-12">
        We are certainly has an extensive network of associated companies across
        the globe, managed by a professional team and accommodate a large number
        of corporate clients in providing growth in the services offered.
      </p>

      {/* FAQ List */}
      <div className="max-w-4xl mx-auto space-y-4 px-6">
        {faqs.map((question, index) => (
          <div
            key={index}
            className="border rounded-xl shadow-sm p-4 cursor-pointer transition hover:shadow-md"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <p className="font-medium">
                Apakah{" "}
                <span className="italic text-pink-600">Sweet Escape</span>{" "}
                {question.split("Sweet Escape")[1]}
              </p>
              <span className="text-pink-600">
                {openIndex === index ? <FaMinus /> : <FaPlus />}
              </span>
            </div>

            {/* Jawaban */}
            {openIndex === index && (
              <p className="text-gray-600 mt-3 text-sm md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                viverra, lorem vel cursus malesuada, sapien neque ultrices quam,
                nec laoreet justo magna vel est.
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
