function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-white fixed w-full z-10">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src="/images/logo.png" alt="Logo" className="h-8" />
        <span className="font-bold text-pink-600">Sweet Escape</span>
      </div>

      {/* Menu */}
      <ul className="hidden md:flex gap-6 text-gray-700">
        <li className="hover:text-pink-600 cursor-pointer">Home</li>
        <li className="hover:text-pink-600 cursor-pointer">About Us</li>
        <li className="hover:text-pink-600 cursor-pointer">Package</li>
        <li className="hover:text-pink-600 cursor-pointer">Travel Guides</li>
        <li className="hover:text-pink-600 cursor-pointer">Portfolio & Gallery</li>
      </ul>

      {/* Button */}
      <button className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600">
        Cek Poin Membership
      </button>
    </nav>
  );
}

export default Navbar;
