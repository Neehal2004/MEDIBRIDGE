import React from "react";

export default function Footer() {
  return (
    <footer className="bg-medicyan-light border-t border-medicyan-bright pt-10 pb-4 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-0">
        {/* Left: Logo and Tagline */}
        <div className="flex flex-col items-start">
          <div className="flex items-center mb-2">
            <span className="inline-block w-8 h-8 bg-medired-dark rounded-full flex items-center justify-center text-white font-bold text-xl mr-2">M</span>
            <span className="text-xl font-bold text-medired-dark">MediBridge</span>
          </div>
          <span className="text-mediteal-deep text-sm">Bridging Patients, Data & Care</span>
        </div>
        {/* Middle: Quick Links */}
        <div className="flex flex-col items-start md:items-center">
          <nav className="flex flex-col md:flex-row gap-2 md:gap-6 text-mediteal-deep font-medium">
            <a href="#" className="hover:underline">Home</a>
            <a href="#features" className="hover:underline">Features</a>
            <a href="#doctors" className="hover:underline">Doctors</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>
        {/* Right: Contact Info */}
        <div className="flex flex-col items-start md:items-end text-mediteal-deep text-sm">
          <span>support@medibridge.in</span>
          <span>+91-XXXXXXXXXX</span>
        </div>
      </div>
      <div className="mt-8 border-t border-medicyan-bright pt-4 text-center text-xs text-medired-coral">
        &copy; {new Date().getFullYear()} MediBridge. All rights reserved.
      </div>
    </footer>
  );
}
