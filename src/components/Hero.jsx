import { useState, useEffect } from "react";

function HeroCarousel() {
  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      title: "Golden Route Japan",
    },
    {
      image:
        "https://images.unsplash.com/photo-1549693578-d683be217e58?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      title: "Explore Mt. Fuji",
    },
    {
      image:
        "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      title: "Kyoto & Osaka Experience",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 2000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Dummy data untuk cards
  const destinations = [
    {
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
      title: "Bali",
      desc: "Nikmati pantai indah, budaya unik, dan suasana tropis di Bali.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800",
      title: "Tokyo",
      desc: "Kota modern dengan teknologi tinggi dan budaya tradisional.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=800",
      title: "Paris",
      desc: "Romantisnya Menara Eiffel dan suasana klasik Eropa.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800",
      title: "New York",
      desc: "Kota yang tak pernah tidur dengan gedung pencakar langitnya.",
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute inset-0 flex items-center justify-center text-center">
              <h2 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
                {slide.title}
              </h2>
            </div>
          </div>
        ))}

        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/60"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/60"
        >
          &#10095;
        </button>

        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full ${
                index === current ? "bg-white" : "bg-white/50"
              }`}
            ></button>
          ))}
        </div>
      </section>

      {/* Section Destinations */}
      <section className="py-16 px-6 bg-gray-50">
        {/* Judul */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Temukan destinasi trip sesuai dengan mimpi anda.
        </h2>

        {/* Grid destinasi */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {destinations.map((dest, index) => (
            <div
              key={index}
              className="relative group rounded-xl overflow-hidden shadow-lg aspect-[9/13]"
            >
              <img
                src={dest.image}
                alt={dest.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                className="absolute bottom-0 left-0 w-full bg-black/60 text-white p-4
                          transition-all duration-700 ease-in-out 
                          transform translate-y-[70%] group-hover:translate-y-0"
              >
                <h3 className="font-semibold text-lg mb-1 translate-y-[-15px] text-center">
                  {dest.title}
                </h3>
                <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-150 text-center">
                  {dest.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>


        {/* Tombol CTA */}
        <div className="flex justify-center mt-12">
          <a
            href="/package"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md 
                      hover:bg-blue-700 transition-colors duration-300"
          >
            Temukan Paket Menarik
          </a>
        </div>
      </section>

    </>
  );
}

export default HeroCarousel;
