"use client";

import { Phone, Mail, MapPin, Clock, MessageSquare, ArrowUpRight } from "lucide-react";

export default function ContactPage() {
  const whatsappNumber = "7084721011";

  const contactMethods = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Direct Chat",
      description: "Fastest response for orders and availability.",
      actionText: "Chat on WhatsApp",
      link: `https://wa.me/${whatsappNumber}`,
      color: "bg-green-500",
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Us",
      description: "For bulk orders and brand collaborations.",
      actionText: "Send an Email",
      link: "mailto:clothingspanther1011@gmail.com",
      color: "bg-blue-500",
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Visit Us",
      description: "Narnaund, Haryana, India - 125039",
      actionText: "Get Directions",
      link: "https://maps.google.com",
      color: "bg-red-500",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-32 md:pt-48 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* HEADER SECTION */}
        <div className="mb-20">
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-6">
            Get In <span className="italic text-gray-500">Touch</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed font-medium">
            Have a question about a fit? Need a custom order? Or just want to join the tribe? 
            Our team is ready to assist you.
          </p>
        </div>

        {/* INTERACTIVE CONTACT CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {contactMethods.map((method, idx) => (
            <a
              key={idx}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white/5 border border-white/10 p-8 rounded-3xl transition-all duration-500 hover:bg-white hover:text-black overflow-hidden"
            >
              <div className="mb-12 transition-transform duration-500 group-hover:-translate-y-2">
                {method.icon}
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight mb-2">{method.title}</h3>
              <p className="text-gray-400 group-hover:text-gray-600 mb-8 font-medium">
                {method.description}
              </p>
              <div className="flex items-center gap-2 font-bold uppercase tracking-widest text-xs">
                {method.actionText} <ArrowUpRight size={16} />
              </div>
            </a>
          ))}
        </div>

        {/* BOTTOM SECTION: FAQ/INFO */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 border-t border-white/10 pt-20">
          <div>
            <h2 className="text-3xl font-black uppercase tracking-tight mb-8">Business Hours</h2>
            <div className="space-y-4">
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-gray-400">Monday - Saturday</span>
                <span className="font-bold">10:00 AM - 08:00 PM</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-gray-400">Sunday</span>
                <span className="font-bold text-red-500">Closed</span>
              </div>
              <p className="text-sm text-gray-500 mt-4 italic">
                *Online support via WhatsApp is often available outside these hours.
              </p>
            </div>
          </div>

          <div className="bg-white text-black p-10 rounded-3xl flex flex-col justify-center items-center text-center">
            <MessageSquare size={48} className="mb-6" />
            <h2 className="text-3xl font-black uppercase tracking-tight mb-4">Live Support</h2>
            <p className="font-medium mb-8">
              Skip the wait. Chat with us directly for instant support regarding your order.
            </p>
            <a 
              href={`https://wa.me/${whatsappNumber}`}
              className="bg-black text-white px-8 py-4 rounded-full font-black uppercase tracking-widest hover:scale-105 transition-transform"
            >
              Launch WhatsApp
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}