import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  FaPlane,
  FaHotel,
  FaStar,
  FaChevronLeft,
  FaChevronRight,
  FaWhatsapp,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

import React from "react";
import Awards from "./Awards";
import Faq from "./Faq";

function About() {
  return (
    <>
      {/* Bagian About (Vision & Mission) */}
      <section className="py-12 px-6 md:px-20 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Bagian Kiri */}
          <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left h-full">
            <h1 className="text-4xl md:text-5xl font-bold leading-snug mb-4">
              Find Your <br /> Happy Place
            </h1>
            <h2 className="text-4xl md:text-5xl italic font-semibold text-pink-600">
              With Us
            </h2>
          </div>

          {/* Bagian Kanan */}
          <div className="space-y-10">
            {/* Vision */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-pink-600 text-2xl">🎯</span>
                <h3 className="text-xl font-semibold text-pink-600">Vision</h3>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm md:text-base">
                <li>
                  Become the leading and trusted travel company in providing
                  quality and memorable travel services for customers.
                </li>
                <li>
                  Become a leader in the travel industry with a wide network and
                  a brilliant reputation (Domestic & International Destinations).
                </li>
                <li>
                  Make a positive contribution to society and the environment
                  through the development of sustainable tourism.
                </li>
              </ul>
            </div>

            {/* Mission */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-pink-600 text-2xl">🎯</span>
                <h3 className="text-xl font-semibold text-pink-600">Mission</h3>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm md:text-base">
                <li>
                  Providing comprehensive and integrated travel services,
                  including airline tickets, hotels, tour packages, and other
                  services.
                </li>
                <li>
                  Providing a safe, comfortable, and enjoyable travel experience
                  for customers.
                </li>
                <li>
                  Offering competitive prices and attractive tour packages for
                  various customer segments.
                </li>
                <li>
                  Building strong relationships with business partners and
                  customers.
                </li>
                <li>
                  Improving the quality of human resources and implementing the
                  latest technology.
                </li>
                <li>
                  Running business with ethical principles and social
                  responsibility.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Bagian Our Team */}
      <section className="py-16 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="text-pink-600 italic">Our</span> Team
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6 md:px-20">
          {[
            {
              name: "Alice Johnson",
              role: "CEO",
              image: "https://randomuser.me/api/portraits/women/44.jpg",
            },
            {
              name: "Michael Smith",
              role: "CTO",
              image: "https://randomuser.me/api/portraits/men/32.jpg",
            },
            {
              name: "Sophia Lee",
              role: "Designer",
              image: "https://randomuser.me/api/portraits/women/65.jpg",
            },
            {
              name: "David Brown",
              role: "Developer",
              image: "https://randomuser.me/api/portraits/men/14.jpg",
            },
          ].map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-40 h-40 object-cover rounded-full shadow-lg mb-4"
              />
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bagian Awards */}
      <Awards />

      {/* Bagian FAQ */}
      <Faq />
    </>
  );
}

export default About;
