import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaPlane, FaHotel, FaStar,FaChevronLeft, FaChevronRight,  FaWhatsapp, FaTwitter, FaYoutube, FaInstagram  } from "react-icons/fa";

function Home() {
  // Data hero slides
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

  // Data destinasi
  const destinations = [
    {
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
      title: "Bali",
      date: "10 - 15 September 2025",
      desc: "Nikmati pantai indah, budaya unik, dan suasana tropis di Bali.",
    },
    {
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800",
      title: "Tokyo",
      date: "20 - 25 September 2025",
      desc: "Kota modern dengan teknologi tinggi dan budaya tradisional.",
    },
    {
      image: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=800",
      title: "Paris",
      date: "01 - 07 Oktober 2025",
      desc: "Romantisnya Menara Eiffel dan suasana klasik Eropa.",
    },
    {
      image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800",
      title: "New York",
      date: "15 - 20 Oktober 2025",
      desc: "Kota yang tak pernah tidur dengan gedung pencakar langitnya.",
    },
  ];

  // Data tawaran
  const offers = [
    {
      image: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=800",
      title: "Romantic Paris",
      date: "01 - 07 September 2025",
      normalPrice: "Rp 20.000.000",
      discountPrice: "Rp 14.500.000",
      desc: "Nikmati keindahan Paris dengan paket eksklusif Sweet Escape.",
    },
    {
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800",
      title: "Tokyo Adventure",
      date: "10 - 15 September 2025",
      normalPrice: "Rp 18.000.000",
      discountPrice: "Rp 12.750.000",
      desc: "Jelajahi kota Tokyo modern dan tradisional dengan pengalaman unik.",
    },
    {
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
      title: "Exotic Bali",
      date: "20 - 25 September 2025",
      normalPrice: "Rp 12.000.000",
      discountPrice: "Rp 8.900.000",
      desc: "Temukan pesona tropis Bali dengan budaya yang memikat.",
    },
    {
      image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800",
      title: "New York Lights",
      date: "25 - 30 September 2025",
      normalPrice: "Rp 22.000.000",
      discountPrice: "Rp 16.500.000",
      desc: "Rasakan gemerlap kota New York yang tak pernah tidur.",
    },
  ];

  const [activeTab, setActiveTab] = useState("pesawat");

  const flights = [
    { 
      time: "pulang pergi",
      route: "Jakarta (CGK) - Malaysia", 
      price: "Rp2.900.000",
      type: "Kelas Ekonomi",
      expayer: "28 Februairi 2026" 
    },
    { 
      time: "pulang pergi",
      route: "Jakarta (CGK) - Bangkok", 
      price: "Rp3.800.000",
      type: "Kelas Ekonomi",
      expayer: "28 Februairi 2026" 
    },
    { 
      time: "pulang pergi",
      route: "Jakarta (CGK) - Hongkong", 
      price: "Rp4.000.000",
      type: "Kelas Ekonomi",
      expayer: "28 Februairi 2026" 
    },
    { 
      time: "pulang pergi",
      route: "Jakarta (CGK) - Japan", 
      price: "Rp6.200.000",
      type: "Kelas Ekonomi",
      expayer: "28 Februairi 2026" 
    },
  ];

  const hotels = [
    { name: "Hotel Bali Paradise", price: "Rp1.200.000" },
    { name: "Tokyo Grand Hotel", price: "Rp1.800.000" },
    { name: "Paris Luxe Hotel", price: "Rp2.500.000" },
    { name: "New York Central Hotel", price: "Rp3.000.000" },
  ];

  const features = [
    {
      icon: <FaPlane className="w-8 h-8 text-white" />,
      title: "Flight Booking",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      icon: <FaHotel className="w-8 h-8 text-white" />,
      title: "Hotel Booking",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."  },
    {
      icon: <FaStar className="w-8 h-8 text-white" />,
      title: "Premium Experience",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      icon: <FaStar className="w-8 h-8 text-white" />,
      title: "Premium Experience",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }, // card kosong
      {
      icon: <FaStar className="w-8 h-8 text-white" />,
      title: "Premium Experience",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }  // card kosong
  ];

  const memoryImages = [
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
    "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800",
    "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=800",
    "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800",
    "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=800",
    "https://images.unsplash.com/photo-1549693578-d683be217e58?w=800",
    "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=800",
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800"
  ];

  const comments = [
    {
      name: "Farel",
      city: "Bandung",
      photo: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
      text: "Perjalanan yang luar biasa! Semua sangat teratur dan menyenangkan. Dari proses booking hingga perjalanan selesai, semuanya terasa lancar dan profesional. Saya merasa benar-benar dimanjakan dengan pelayanan yang ramah dan penuh perhatian.",
    },
    {
      name: "Sinta",
      city: "Jakarta",
      photo: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 4,
      text: "Sweet Escape benar-benar membuat liburan jadi unforgettable ✨. Semua destinasi yang dikunjungi sesuai ekspektasi, ditambah lagi dengan itinerary yang fleksibel dan nyaman. Cocok banget untuk melepas penat dan mengumpulkan kenangan indah bersama keluarga maupun teman.",
    },
    {
      name: "Budi",
      city: "Surabaya",
      photo: "https://randomuser.me/api/portraits/men/65.jpg",
      rating: 5,
      text: "Pelayanan terbaik dan pengalaman yang tak terlupakan! Dari awal pemesanan hingga akhir perjalanan, semuanya diatur dengan sangat rapi. Tim Sweet Escape selalu responsif, ramah, dan siap membantu. Perjalanan saya jadi lebih nyaman, menyenangkan, dan pastinya berkesan. Sangat direkomendasikan untuk siapa pun yang ingin liburan tanpa ribet!",
    },
    {
      name: "Dadan",
      city: "Cianjur",
      photo: "https://randomuser.me/api/portraits/men/80.jpg",
      rating: 5,
      text: "Mantap sekali! Liburan jadi lebih terencana tanpa harus pusing mikirin detail kecil. Timnya ramah, komunikatif, dan selalu siap membantu. Saya sangat puas dan pasti akan menggunakan Sweet Escape lagi untuk perjalanan berikutnya.",
    },
  ];

  const [fade, setFade] = useState(false);

  const dataToShow = activeTab === "pesawat" ? flights : hotels;
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 2000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () =>
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  const [currentSlide, setCurrentSlide] = useState(0);
  const [slider, setSlider] = useState(null);

  // Setting slider
  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 800,
    slidesToShow: 3,   // tampil 3 gambar
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  const handleTabClick = (tab) => {
  setFade(true);            // mulai animasi fade out
  setTimeout(() => {
    setActiveTab(tab);      // ganti data
    setFade(false);         // fade in
  }, 200); // durasi fade 200ms
};

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

        {/* Indicators */}
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
        <h2 className="text-3xl md:text-4xl font-medium text-center mb-8 max-w-lg mx-auto">
          Temukan destinasi trip sesuai dengan mimpi Anda.
        </h2>



        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {destinations.map((dest, index) => (
            <div
              key={index}
              className="relative group rounded-xl overflow-hidden shadow-lg aspect-[4/5] hover:shadow-xl transition-shadow duration-500"
            >
              {/* Gambar utama */}
              <img
                src={dest.image}
                alt={`${dest.title} - ${dest.desc}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Label Populer */}
              {index === 0 && (
                <span className="absolute top-3 right-3 bg-pink-600 text-white text-xs font-semibold px-2 py-1 rounded-lg shadow">
                  Populer
                </span>
              )}

              {/* Info overlay */}
             <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white p-4 
                transition-transform duration-700 transform translate-y-[50%] group-hover:translate-y-0">
                <h3 className="font-semibold text-lg mb-1">{dest.title}</h3>

                <p className="mb-2">
                  <span className="bg-pink-600 text-white text-sm md:text-xs px-2 py-1 rounded">
                    {dest.date}
                  </span>
                </p>

                <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-150">
                  {dest.desc}
                </p>

                <div className="flex mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-150">
                  <a
                    href="/package"
                    className="bg-pink-600 text-white px-4 py-1 rounded-lg text-sm hover:bg-pink-700 transition-colors"
                  >
                    Lihat Detail
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <a
            href="/package"
            className="bg-pink-600 text-white px-6 py-3 rounded-lg shadow-md flex items-center gap-2 hover:bg-pink-700 transition duration-300"
          >
            Temukan Paket Menarik
            <span className="text-xl">&#8594;</span>
          </a>
        </div>
      </section>

      {/* Section Tawaran Minggu Ini */}
      <section className="py-16 px-6 bg-white">
        <div className="text-center mb-12">
          <p className="text-sm uppercase text-pink-500">Tawaran Minggu Ini</p>
         <h2 className="text-3xl md:text-4xl font-normal mt-2">
            Kini anda bisa jelajahi dunia lebih <br />
            menarik dengan <span className="text-pink-600 font-serif">Sweet Escape</span>
          </h2>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-square overflow-hidden relative">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-pink-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                  Lebih Murah
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-1">{offer.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{offer.date}</p>

                <div className="flex items-center gap-3 mb-3">
                  <span className="text-lg font-bold text-pink-600">
                    {offer.discountPrice}
                  </span>
                  <span className="text-gray-400 line-through">
                    {offer.normalPrice}
                  </span>
                </div>

                <p className="text-sm text-gray-600 mb-4">{offer.desc}</p>

                <a
                  href="/package"
                  className="inline-block bg-white text-pink-600 px-4 py-2 rounded-lg border border-pink-600 hover:border-white transition-colors"
                >
                  Lihat Tawaran
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <a
            href="/package"
            className="bg-white text-pink-600 px-8 py-3 rounded-lg border border-pink-600 hover:border-white transition-colors duration-300"
          >
            Lihat Semua Tawaran
          </a>
        </div>
      </section>

      {/* Section Booking */}
      <section className="py-16 px-6 bg-gray-50">
         <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-normal mt-2">
            Ada Banyak Cara Agar Tidak Bosan, Temukan Promo <br />
            yang Menarik dengan <span className="text-pink-600 font-serif">Sweet Escape</span>
          </h2>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={() => handleTabClick("pesawat")}
          className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
            activeTab === "pesawat"
              ? "bg-pink-600 text-white"
              : "bg-gray-300 text-black"
          }`}
        >
          Pesawat
        </button>

        <button
          onClick={() => handleTabClick("hotel")}
          className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
            activeTab === "hotel"
              ? "bg-pink-600 text-white"
              : "bg-gray-300 text-black"
          }`}
        >
          Hotel
        </button>
        </div>

        {/* Booking Items */}
       <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 transition-opacity duration-300 ${fade ? "opacity-0" : "opacity-100"}`}>
        {dataToShow.map((item, index) => (
          <div key={index} className="bg-white p-5 rounded-xl flex flex-col justify-between group">
              <div className=" flex justify-between items-center group ">
                {/* Kiri: teks */}
                <div>
                  <p className="font-medium text-sm mb-1 text-blue-500">{item.time}</p>
                  <h3 className="font-semibold text-base mb-1">
                    {activeTab === "pesawat" ? item.route : item.name}
                  </h3>
                  <p className="text-pink-600">Mulai dari {item.price}</p>
                </div>

                {/* Kanan: tombol */}

                  <a
                    href="/booking"
                    className="inline-flex items-center gap-2 bg-white text-pink-600 px-4 py-2 rounded-lg border border-pink-600 hover:border-white transition-colors"
                  >
                    Book Now
                      {activeTab === "pesawat" ? <FaPlane className="text-xl" /> : <FaHotel className="text-xl" />}
                  </a>
                </div>

                <hr className="border-t-2 border-gray-300 mt-2" />
                <p className="font-normal text-sm mb-2 text-gray-500 mt-3">
                  {item.type} • Periode Perjalanan Hingga {item.expayer}
                </p>

              </div>
            ))}
        </div>
        <div className="flex justify-center mt-12">
          <a
            href="/package"
            className="bg-white text-pink-600 px-8 py-3 rounded-lg border border-pink-600 hover:border-white transition-colors duration-300"
          >
            Lihat Semua Tawaran
          </a>
        </div>
      </section>

      {/* Section Pilih */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-normal mt-2">
            Kenapa Pilih <span className="text-pink-600 font-serif">Sweet Escape?</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We are leading company that operates in the field of tour and travel agency industry. 
            It's established in Jakarta since 2021.
          </p>
        </div>

        {/* Baris 3 card */}
        <div className="flex justify-center gap-8 mb-8 flex-wrap">
          {features.slice(0, 3).map((feature, index) => (
            <div
              key={index}
              className="w-80 bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105"
            >
              {feature.icon &&
                <div className="relative mb-4 w-full flex justify-center">
                  {/* Kotak bawah */}
                  <div className="absolute bottom-2 right-24 bg-pink-900 text-white p-3 rounded w-12 h-12"></div>

                  {/* Kotak atas */}
                  <div className="relative bg-pink-600 text-white p-3 rounded w-12 h-12 flex items-center justify-center">
                    {feature.icon}
                  </div>
                </div>
              }
              {feature.title && <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>}
              {feature.desc && <p className="text-gray-500 text-sm">{feature.desc}</p>}
            </div>
          ))}
        </div>

        {/* Baris 2 card */}
        <div className="flex justify-center gap-8 flex-wrap">
          {features.slice(3).map((feature, index) => (
            <div
              key={index}
              className="w-80 bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105"
            >
              {feature.icon &&
                <div className="relative mb-4 w-full flex justify-center">
                  {/* Kotak bawah */}
                  <div className="absolute bottom-2 right-24 bg-pink-900 text-white p-3 rounded w-12 h-12"></div>

                  {/* Kotak atas */}
                  <div className="relative bg-pink-600 text-white p-3 rounded w-12 h-12 flex items-center justify-center">
                    {feature.icon}
                  </div>
                </div>}
              {feature.title && <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>}
              {feature.desc && <p className="text-gray-500 text-sm">{feature.desc}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* Section Memori */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-normal mt-2">
            Memori Perjalanan Bersama{" "}
            <span className="text-pink-600 font-serif">Sweet Escape?</span>
          </h2>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Tombol kiri */}
          {currentSlide > 0 && (
            <button
              onClick={() => slider.slickPrev()}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-pink-600 text-white p-3 rounded-full shadow hover:bg-pink-700"
            >
              <FaChevronLeft />
            </button>
          )}

          {/* Tombol kanan */}
          {currentSlide < memoryImages.length - 3 && (
            <button
              onClick={() => slider.slickNext()}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-pink-600 text-white p-3 rounded-full shadow hover:bg-pink-700"
            >
              <FaChevronRight />
            </button>
          )}

          <Slider ref={(s) => setSlider(s)} {...sliderSettings}>
            {memoryImages.map((img, i) => (
              <div key={i} className="px-3">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={img}
                    alt={`Memori ${i + 1}`}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Section Coment */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-normal mt-2">
            Apa Kata Mereka Tentang{" "}
            <span className="text-pink-600 font-serif">Sweet Escape</span>
          </h2>
        </div>

        {/* Comment List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {comments.map((c, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              {/* Header: foto + nama + asal + bintang */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <img
                    src={c.photo}
                    alt={c.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">{c.name}</h4>
                    <p className="text-sm text-gray-500">{c.city}</p>
                  </div>
                </div>

                {/* Stars di samping kanan */}
                <div className="flex text-yellow-400">
                  {Array.from({ length: c.rating }).map((_, i) => (
                    <FaStar key={i} className="w-5 h-5" />
                  ))}
                </div>
              </div>

              {/* Comment */}
              <p className="text-gray-600">{c.text}</p>
            </div>
          ))}
        </div>
      </section>
      
    </>
  );
}

export default Home;
