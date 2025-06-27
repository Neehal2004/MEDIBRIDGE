import React from "react";

const features = [
  {
    title: "QR-Based Emergency Access",
    summary:
      "QR linked to encrypted health record. Doctors scan to instantly access history, meds, allergies.",
    icon: (
      <svg className="w-8 h-8 text-medired-coral mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/><rect x="3" y="14" width="7" height="7" rx="2"/></svg>
    ),
  },
  {
    title: "Multi-Disease AI Prediction",
    summary:
      "AI-based early prediction for Diabetes, Heart, Kidney, Liver, and Skin conditions.",
    icon: (
      <svg className="w-8 h-8 text-medicyan-bright mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 20l9-5-9-5-9 5 9 5z"/><path d="M12 12V4"/><path d="M12 12l9-5-9-5-9 5 9 5z"/></svg>
    ),
  },
  {
    title: "Face + Aadhaar Login System",
    summary:
      "Seamless and secure verification using government-backed Aadhaar and facial recognition.",
    icon: (
      <svg className="w-8 h-8 text-mediteal-deep mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M2 20c0-4 8-6 10-6s10 2 10 6"/></svg>
    ),
  },
  {
    title: "LLM-Based Prescription Support",
    summary:
      "Simplifies complex medical jargon. Auto-generates medicine schedule and reminders.",
    icon: (
      <svg className="w-8 h-8 text-medired-dark mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6v6H9z"/></svg>
    ),
  },
  {
    title: "Mental Health Chatbot + Voice AI",
    summary:
      "Anonymous 24/7 support with text and real-time voice conversation powered by AI.",
    icon: (
      <svg className="w-8 h-8 text-medired-coral mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
    ),
  },
  {
    title: "Appointment Booking System",
    summary:
      "View available slots, book appointments, and get timely reminders.",
    icon: (
      <svg className="w-8 h-8 text-medicyan-bright mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
    ),
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-medicyan-light py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-medired-dark">Smarter Health Management, One Scan Away</h2>
        <p className="text-lg text-center text-mediteal-deep mb-12">Explore the AI-powered tools that power MediBridge</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-xl transition border border-medicyan-light"
            >
              {feature.icon}
              <h3 className="text-xl font-semibold mb-2 text-mediteal-deep">{feature.title}</h3>
              <p className="text-gray-600 text-base">{feature.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
