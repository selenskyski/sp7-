/* Gaming-style landing hero similar to Interstellar */

import React from "react";

export default function ObscuraGamingHero() {
  const handleSearch = (e) => {
    e.preventDefault();
    const url = e.target.url.value.trim();
    if (!url) return;
    // Placeholder: send URL to backend
    // Example:
    // fetch(`/api/proxy?url=${encodeURIComponent(url)}`)
    //   .then((res) => res.json())
    //   .then((data) => console.log(data))
    //   .catch((err) => console.error(err));
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 select-none relative">
      {/* Navbar */}
      <nav className="w-full flex items-center justify-between py-6 max-w-6xl mx-auto">
        <div className="text-2xl font-extrabold tracking-wide">OBSCURA</div>
        <div className="flex gap-6 text-gray-300 text-sm">
          <a href="#" className="hover:text-white">Home</a>
          <a href="#" className="hover:text-white">Games</a>
          <a href="#" className="hover:text-white">Apps</a>
          <a href="#" className="hover:text-white">Docs</a>
        </div>
      </nav>

      <div className="flex flex-col items-center justify-center min-h-[70vh]">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide text-center">OBSCURA</h1>
        <p className="mt-3 text-gray-400 text-center text-lg">Fast gaming proxy. Clean UI. Zero clutter.</p>

        <form onSubmit={handleSearch} className="mt-8 w-full max-w-3xl">
          <input
            type="text"
            name="url"
            placeholder="Search or enter a URL"
            className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl py-4 px-6 text-gray-300 text-lg outline-none focus:border-white/20"
          />
        </form>

        <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-black to-transparent pointer-events-none" />
      </div>
    </div>
  );
}
