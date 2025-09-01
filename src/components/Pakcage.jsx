import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlane, FaHotel, FaStar,FaChevronLeft, FaChevronRight,  FaMountain, FaPhone, FaEnvelope, FaUser, FaMapMarkerAlt} from "react-icons/fa";

function Package() {

    // Data destinasi
    const destinations = [
    { 
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&w=800&q=80", 
        title: "Bali", 
        date: "10 - 15 Sept 2025", 
        desc: "Nikmati pantai indah, budaya unik, dan suasana tropis di Bali.", 
        type: "Dalam Negeri" 
    },
    { 
        image: "https://images.unsplash.com/photo-1598550441086-2d53dc2e93b8?auto=format&w=800&q=80", 
        title: "Yogyakarta", 
        date: "16 - 20 Sept 2025", 
        desc: "Budaya Jawa yang kental dan alam memukau.", 
        type: "Dalam Negeri" 
    },
    { 
        image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&w=800&q=80", 
        title: "Jakarta", 
        date: "21 - 25 Sept 2025", 
        desc: "Ibukota penuh semangat dan hiburan modern.", 
        type: "Dalam Negeri" 
    },
    { 
        image: "https://images.unsplash.com/photo-1601758123927-53aaf68b7f3b?auto=format&w=800&q=80", 
        title: "Lombok", 
        date: "26 - 30 Sept 2025", 
        desc: "Pulau tropis dengan pantai eksotis.", 
        type: "Dalam Negeri" 
    },
    { 
        image: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&w=800&q=80", 
        title: "Tokyo", 
        date: "01 - 05 Okt 2025", 
        desc: "Kota modern dengan budaya tradisional.", 
        type: "Luar Negeri" 
    },
    { 
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&w=800&q=80", 
        title: "Paris", 
        date: "06 - 10 Okt 2025", 
        desc: "Romantisnya Menara Eiffel dan suasana klasik Eropa.", 
        type: "Luar Negeri" 
    },
    { 
        image: "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&w=800&q=80", 
        title: "New York", 
        date: "11 - 15 Okt 2025", 
        desc: "Kota yang tak pernah tidur dengan gedung pencakar langit.", 
        type: "Luar Negeri" 
    },
    { 
        image: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&w=800&q=80", 
        title: "London", 
        date: "16 - 20 Okt 2025", 
        desc: "Sejarah klasik dan landmark ikonik.", 
        type: "Luar Negeri" 
    },
    ];

    const [filter, setFilter] = useState("Semua");
    const [isTransitioning, setIsTransitioning] = useState(false);

    // Filtered destinations
    const filteredDest = filter === "Semua" ? destinations : destinations.filter(d => d.type === filter);

    // Button list
    const buttons = ["Semua", "Dalam Negeri", "Luar Negeri"];
    
    // Handle filter change with smooth transition
    const handleFilterChange = (newFilter) => {
        if (filter === newFilter || isTransitioning) return;
        
        setIsTransitioning(true);
        setFilter(newFilter);
        
        // Reset transitioning state after animation completes
        setTimeout(() => setIsTransitioning(false), 700);
    };

    // Animation variants for smoother transitions
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.06,
            delayChildren: 0.1
        }
        },
        exit: {
        opacity: 0,
        transition: {
            staggerChildren: 0.03,
            staggerDirection: -1
        }
        }
    };

    const itemVariants = {
        hidden: { 
        opacity: 0, 
        y: 20,
        scale: 0.95
        },
        visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring",
            damping: 15,
            stiffness: 300
        }
        },
        exit: {
        opacity: 0,
        y: -10,
        scale: 0.98,
        transition: {
            duration: 0.3,
            ease: "easeInOut"
        }
        }
    };

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
        {
        image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800",
        title: "New York Lights",
        date: "25 - 30 September 2025",
        normalPrice: "Rp 22.000.000",
        discountPrice: "Rp 16.500.000",
        desc: "Rasakan gemerlap kota New York yang tak pernah tidur.",
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

    // State untuk form kontak
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        phone: "",
        destination: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logika untuk mengirim form
        console.log("Form data submitted:", formData);
        alert("Terima kasih! Pesan Anda telah terkirim.");
        // Reset form
        setFormData({
            name: "",
            email: "",
            message: "",
            phone: "",
            destination: ""
        });
    };

  return (
    <>
    {/* Section Destinations */}
    <section className="py-16 px-6 bg-gray-50">
    <h2 className="text-2xl md:text-2xl font-medium text-center mb-8 flex items-center justify-center gap-2">
        <FaMountain className="text-pink-600 w-7 h-7" />
        Destinasi
    </h2>

    {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-8">
          {buttons.map((btn) => (
            <motion.button
              key={btn}
              onClick={() => handleFilterChange(btn)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full font-medium transition-colors duration-300 ${
                filter === btn ? "bg-pink-600 text-white" : "bg-gray-200 text-gray-700"
              }`}
            >
              {btn}
            </motion.button>
          ))}
        </div>

    {/* Destinations Grid */}
    <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            key={filter} // Key change triggers animation
            >
          <AnimatePresence mode="wait">
            {filteredDest.map((dest, index) => (
              <motion.div
                key={`${filter}-${dest.title}`}
                variants={itemVariants}
                layout // Enables layout animation for smoother repositioning
                className="relative group rounded-xl overflow-hidden shadow-lg aspect-[4/5] hover:shadow-xl"
              >

            <img
            src={dest.image}
            alt={`${dest.title} - ${dest.desc}`}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {index === 0 && filter === "Semua" && (
            <span className="absolute top-3 right-3 bg-pink-600 text-white text-xs font-semibold px-2 py-1 rounded-lg shadow">
                Populer
            </span>
            )}
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
        </motion.div>
        ))}
    </AnimatePresence>
     </motion.div>   
    </section>

    {/* Section Tawaran Minggu Ini */}
    <section className="py-16 px-6 bg-white">
        <div className="text-center mb-12">
          <p className="text-sm uppercase text-pink-500">Tawaran Minggu Ini</p>
         <h2 className="text-3xl md:text-4xl font-normal mt-2">
           Liburan dengan Tawaran yang Menarik dari  <span className="text-pink-600 font-serif">Sweet Escape</span>
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
    </section>
    
    {/* Section Hubungi Kami */}
    <section className="py-16 px-6 bg-white">
        <div className="text-center mb-12">
         <h2 className="text-3xl md:text-4xl font-normal mt-2">
           Tidak Menemukan Destinasi atau Jadwal yang Sesuai? <br />
           <span className="text-pink-600 font-serif">Hubungi Kami</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-xl p-8 border-2 border-pink-500 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Baris 1: Nama & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Nama Field */}
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                    Nama <span className="text-red-500">*</span>
                    </label>
                    <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Masukkan nama anda"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
                    />

                </div>

                {/* Email Field */}
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                    Email <span className="text-red-500">*</span>
                    </label>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Masukkan alamat email anda"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
                    required
                    />
                </div>
                </div>

                {/* Baris 2: Phone & Destinasi */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Phone Field */}
                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                    Nomor Handphone <span className="text-red-500">*</span>
                    </label>
                    <div className="flex">
                    <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-gray-300 bg-gray-100 text-gray-600">
                        +62
                    </span>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Masukkan nomor handphone anda"
                        className="w-full px-4 py-3 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
                        required
                    />
                    </div>
                </div>

                {/* Destination Field */}
                <div>
                    <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                    Destinasi <span className="text-red-500">*</span>
                    </label>
                    <select
                    id="destination"
                    name="destination"
                    value={formData.destination}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
                    required
                    >
                    <option value="">Pilih destinasi yang diinginkan</option>
                    {destinations.map((dest, index) => (
                        <option key={index} value={dest.title}>{dest.title}</option>
                    ))}
                    </select>
                </div>
                </div>

                {/* Pesan Field */}
                <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Pesan <span className="text-red-500">*</span>
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Masukkan Pesan anda"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
                    required
                />
                </div>

                {/* Submit Button */}
                <div className="pt-4 flex justify-center">
                <motion.button
                    type="submit"
                    className="w-48 bg-pink-600 text-white py-3 px-6 rounded-lg font-medium border border-pink-600 hover:bg-white hover:text-pink-600 transition-colors"
                >
                    Kirim Pertanyaan
                </motion.button>
                </div>


            </form>
        </div>

    </section>      
    </>
  );
}

export default Package;