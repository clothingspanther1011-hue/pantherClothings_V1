"use client";

import { ShieldCheck, Truck, RotateCcw, MessageSquare, CreditCard } from "lucide-react";

export default function TermsPage() {
  const lastUpdated = "January 2026";

  const sections = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "1. Ordering via WhatsApp",
      content: "By initiating an order through our WhatsApp link, you agree that communication regarding availability, sizing, and final pricing will be conducted via chat. A 'confirmed order' is only established once we acknowledge your payment and shipping details in the conversation.",
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "2. Payment Terms",
      content: "Since we do not process payments directly on this website, all transactions are handled via UPI, Bank Transfer, or secure payment links shared during our WhatsApp chat. Please do not share sensitive banking passwords; we will never ask for them.",
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "3. Shipping & Delivery",
      content: "Orders are typically processed within 24-48 hours. Shipping timelines vary by location but generally range from 5-7 business days. Tracking numbers will be shared via WhatsApp once the package is dispatched.",
    },
    {
      icon: <RotateCcw className="w-6 h-6" />,
      title: "4. Returns & Exchanges",
      content: "Due to the exclusive nature of our drops, we offer exchanges for size issues only if notified within 48 hours of delivery. Items must be unworn and in original packaging. Refunds are processed only in the event of a manufacturing defect proved by an unboxing video.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "5. Intellectual Property",
      content: "All designs, logos, and creative content on this site are the property of Panther Clothing. Unauthorized use or reproduction for commercial purposes is strictly prohibited.",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-32 md:pt-48 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* HEADER */}
        <div className="mb-16 border-b border-white/10 pb-10">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4">
            Terms & <span className="italic text-gray-500">Conditions</span>
          </h1>
          <p className="text-gray-400 font-medium">Last Updated: {lastUpdated}</p>
        </div>

        {/* INTRO */}
        <div className="prose prose-invert max-w-none mb-16">
          <p className="text-xl text-gray-300 leading-relaxed">
            Welcome to Panther Clothing. By accessing this website and purchasing our products, 
            you agree to the following terms. We operate as a direct-to-consumer brand, 
            utilizing WhatsApp to provide a personalized shopping experience.
          </p>
        </div>

        {/* SECTIONS */}
        <div className="space-y-12">
          {sections.map((section, idx) => (
            <div key={idx} className="group border border-white/5 bg-white/5 p-8 rounded-3xl transition-all hover:bg-white/10">
              <div className="flex items-center gap-4 mb-4 text-gray-400 group-hover:text-white transition-colors">
                {section.icon}
                <h2 className="text-2xl font-black uppercase tracking-tight">{section.title}</h2>
              </div>
              <p className="text-gray-400 leading-relaxed font-medium pl-10">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        {/* FOOTER NOTE */}
        <div className="mt-20 p-10 bg-white text-black rounded-3xl text-center">
          <h3 className="text-2xl font-black uppercase mb-2">Questions?</h3>
          <p className="font-medium mb-6 text-gray-700">
            If you need clarification on any of our terms, feel free to reach out.
          </p>
          <a 
            href="https://wa.me/7084721011" 
            className="inline-block bg-black text-white px-8 py-4 rounded-full font-black uppercase tracking-widest hover:scale-105 transition-transform"
          >
            Ask on WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}