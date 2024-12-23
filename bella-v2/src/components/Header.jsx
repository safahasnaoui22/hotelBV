import React, { useEffect, useState } from "react";

function Header({ whiteText }) {
  const [header, setHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        header ? "bg-gradient-to-r from-black via-gray-800 to-black py-3 shadow-lg" : "bg-transparent py-8"
      } fixed top-0 left-0 right-0 z-50 transition-all duration-500`}
    >
      <div className="container flex flex-col items-center gap-y-6 lg:flex-row lg:justify-between ">
        <a href="/">
          {header ? (
            <img className="w-[100px]" src="./logo.png" alt="Logo" />
          ) : (
            <img className="w-[100px]" src="./logo.png" alt="Logo" />
          )}
        </a>
        <nav
          className={`flex gap-x-4 font-tertiary tracking-[5px] ${
            whiteText ? "text-white" : "text-white"
          } items-center uppercase lg:gap-x-40`}
        >
          <a href="/" className="hover:text-accent transition">
            Home
          </a>
          <a
            href="/flight"
            className="hover:text-accent transition"
          >
            Rooms & Suites
          </a>
          <a
            href="/restaurent"
            className="hover:text-accent transition"
          >
            Restaurant
          </a>
          <a href="/gallery" className="hover:text-accent transition">
            Gallery
          </a>
          <a href="/contact" className="hover:text-accent transition">
            Contact
          </a>
          <a href="/login" className="hover:text-accent transition">
            Login
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
