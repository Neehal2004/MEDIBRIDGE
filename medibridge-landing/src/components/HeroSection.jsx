import React from "react";

export default function HeroSection() {
  return (
    <section className="w-full bg-gradient-to-br from-medicyan-light via-white to-medicyan-bright py-20 px-4 flex flex-col md:flex-row items-center justify-between gap-8 min-h-[70vh]">
      {/* Left Content */}
      <div className="flex-1 max-w-xl">
        <span className="inline-block bg-medired-coral text-medired-dark font-semibold rounded-full px-4 py-1 mb-4 text-xs md:text-sm shadow-sm">
          QR & Aadhaar Enabled | Trusted by Doctors
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-medired-dark mb-4 leading-tight">
          Secure. Fast. Smart Healthcare Access.
        </h1>
        <p className="text-lg md:text-xl text-mediteal-deep mb-8 font-light">
          MediBridge ensures life-saving data access when seconds matter.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <button className="bg-medired-coral text-white px-8 py-3 rounded-full font-semibold shadow hover:bg-medired-dark transition text-lg">
            Scan to Access Records
          </button>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="flex items-center gap-2 bg-white border border-medicyan-bright text-mediteal-deep px-5 py-2 rounded-full font-medium shadow hover:bg-medicyan-light transition">
            <span className="inline-block">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-medired-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </span>
            24/7 Emergency Access
          </button>
          <button className="flex items-center gap-2 bg-white border border-medicyan-bright text-mediteal-deep px-5 py-2 rounded-full font-medium shadow hover:bg-medicyan-light transition">
            <span className="inline-block">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-mediteal-deep" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0-1.657 1.343-3 3-3s3 1.343 3 3-1.343 3-3 3-3-1.343-3-3zm0 0V7m0 4v4m0 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </span>
            Aadhaar Verified Security
          </button>
        </div>
      </div>
      {/* Right Illustration */}
      <div className="flex-1 flex items-center justify-center">
        <img
          src="/Untitled design.png"
          alt="Doctor scanning QR code"
          className="w-full max-w-md object-contain drop-shadow-xl rounded-xl border border-medicyan-light bg-white"
        />
      </div>
    </section>
  );
}
