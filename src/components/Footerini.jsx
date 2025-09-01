import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaPlane, FaHotel, FaStar,FaChevronLeft, FaChevronRight,  FaWhatsapp, FaTwitter, FaYoutube, FaInstagram  } from "react-icons/fa";

function Footerini() {
      return (
    <>
    <footer className="py-16 px-6 bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-normal mt-2">
            Find Your Happy Place{" "}
            <span className="text-pink-600 font-serif">With Us</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* === Div 1: Gambar + Sosmed === */}
          <div className="flex flex-col items-center">
            {/* Gambar sejajar */}
            <div className="flex space-x-4 mb-4">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=200&q=80"
                  alt="Rundown Acara"
                className="w-32 h-32 object-cover rounded-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=200&q=80"
                  alt="Rundown Acara"
                  className="w-32 h-32 object-cover rounded-lg"
                />

            </div>
            {/* Sosial Media */}
            <div className="flex gap-4">
              <a href="#">
                <FaWhatsapp className="w-8 h-8 bg-pink-500 text-white p-2 rounded-full" />
              </a>
              <a href="#">
                <FaTwitter className="w-8 h-8 bg-pink-500 text-white p-2 rounded-full" />
              </a>
              <a href="#">
                <FaYoutube className="w-8 h-8 bg-pink-500 text-white p-2 rounded-full" />
              </a>
              <a href="#">
                <FaInstagram className="w-8 h-8 bg-pink-500 text-white p-2 rounded-full" />
              </a>
            </div>


          </div>

          {/* === Div 2: Navigasi === */}
          <div className="flex flex-col items-start text-left space-y-4">
            <a href="#" className="text-gray-700 hover:text-pink-600">About Us</a>
            <a href="#" className="text-gray-700 hover:text-pink-600">Package</a>
            <a href="#" className="text-gray-700 hover:text-pink-600">Portfolio</a>
            <a href="#" className="text-gray-700 hover:text-pink-600">Galeri</a>
            
            <button className="mt-6 px-6 py-2 bg-white text-pink-600 rounded-full border border-pink-600 
          hover:bg-white hover:text-pink-600 hover:border-white transition-colors duration-300 flex items-center gap-2">
              Cek Poin Membership <FaStar className="text-pink-600" />
            </button>

          </div>



          {/* === Div 3: Google Maps === */}
          <div className="flex flex-col items-start text-left">
            <h3 className="font-medium text-sm mb-2">Alamat Kami</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.1427590339603!2d110.36948941538182!3d-7.821560594362675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a57858f8a9c0f%3A0x9f59ad4b62a1c1e!2sMalioboro%20Yogyakarta!5e0!3m2!1sid!2sid!4v1688456789012!5m2!1sid!2sid"
              width="100%"
              height="220"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-md shadow-sm"
            ></iframe>
          </div>

        </div>
    </footer>
    </>
    );
}     

export default Footerini;