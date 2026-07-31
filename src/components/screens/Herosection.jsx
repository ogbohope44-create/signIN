import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-indigo-600 text-3xl font-bold">~</div>

        {/* Nav Links */}
        <ul className="hidden md:flex gap-10 text-sm font-medium text-gray-700">
          <li className="hover:text-indigo-600 cursor-pointer">Product</li>
          <li className="hover:text-indigo-600 cursor-pointer">Features</li>
          <li className="hover:text-indigo-600 cursor-pointer">Marketplace</li>
          <li className="hover:text-indigo-600 cursor-pointer">Company</li>
        </ul>

        {/* Login */}
        <button className="text-sm font-medium text-gray-700 hover:text-indigo-600">
          Log in →
        </button>
      </nav>

      {/* Hero */}
      <div className="max-w-4xl mx-auto text-center py-28 px-6">
        {/* Small Badge */}
        <div className="inline-flex items-center gap-2 border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-600 mb-8">
          <span>Announcing our next round of funding.</span>
          <a
            href="#"
            className="text-indigo-600 font-semibold hover:underline"
          >
            Read more →
          </a>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900">
          Data to enrich your
          <br />
          online business
        </h1>

        {/* Paragraph */}
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
          lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex justify-center gap-4">
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 transition">
            Get started
          </button>

          <button className="text-gray-900 font-medium hover:text-indigo-600">
            Learn more →
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
