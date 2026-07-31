import React from "react";
import office from "../public/office_workspace.avif";


const HeroSection2 = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${office_workspace.jpg})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Navbar */}
      <nav className="relative z-10 max-w-7xl mx-auto flex items-center justify-between px-8 py-6">
        {/* Logo */}
        <div className="text-indigo-500 text-3xl font-bold">~</div>

        {/* Links */}
        <ul className="hidden md:flex gap-10 text-white text-sm font-medium">
          <li className="hover:text-indigo-400 cursor-pointer">Product</li>
          <li className="hover:text-indigo-400 cursor-pointer">Features</li>
          <li className="hover:text-indigo-400 cursor-pointer">Marketplace</li>
          <li className="hover:text-indigo-400 cursor-pointer">Company</li>
        </ul>

        {/* Login */}
        <button className="text-white hover:text-indigo-400 text-sm">
          Log in →
        </button>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center h-[80vh] px-6">
        {/* Announcement */}
        <div className="inline-flex items-center gap-2 text-sm text-gray-300 border border-gray-600 rounded-full px-4 py-2 mb-8">
          <span>Announcing our next round of funding.</span>
          <a href="#" className="text-indigo-400 font-semibold">
            Read more →
          </a>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
          Data to enrich your
          <br />
          online business
        </h1>

        {/* Paragraph */}
        <p className="mt-6 text-lg text-gray-300 max-w-2xl">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
          lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex gap-4">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md font-semibold transition">
            Get started
          </button>

          <button className="text-white font-semibold hover:text-indigo-400">
            Learn more →
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection2;