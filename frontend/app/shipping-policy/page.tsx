"use client";

import { Truck, MapPin, Package, Clock, ShieldCheck, AlertCircle } from "lucide-react";

export default function ShippingPolicy() {
  const lastUpdated = "January 2026";

  const shippingDetails = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Processing Time",
      content: "All orders are processed within 24 to 48 hours (excluding Sundays and holidays) after receiving your WhatsApp payment confirmation. You will receive a notification via WhatsApp once your order has shifted from 'Processing' to 'Dispatched'.",
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Domestic Shipping Rates",
      content: "We offer flat-rate shipping across India. Standard shipping is ₹99, but we offer FREE shipping on all orders above ₹2,499. The final shipping cost will be confirmed during your WhatsApp checkout.",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Local Pickup",
      content: "If you are located near Narnaund, Haryana, you can opt for local pickup to save on shipping costs. Simply mention 'Local Pickup' during our chat to coordinate a time.",
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "Order Tracking",
      content: "Once your order is shipped, we will send a tracking link and AWB number directly to your WhatsApp. You can track your 'Panther' package via our delivery partner's website.",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-32 md:pt-48 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* HEADER */}
        <div className="mb-16 border-b border-white/10 pb-10 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4">
            Shipping <span className="italic text-gray-500">Policy</span>
          </h1>
          <p className="text-gray-400 font-medium">Last Updated: {lastUpdated}</p>
        </div>

        {/* SHIPPING INFO GRID */}
        <div className="grid grid-cols-1 gap-8 mb-16">
          {shippingDetails.map((item, idx) => (
            <div key={idx} className="flex gap-6 p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-all group">
              <div className="text-gray-400 group-hover:text-white transition-colors shrink-0">
                {item.icon}
              </div>
              <div>
                <h2 className="text-2xl font-black uppercase tracking-tight mb-3">{item.title}</h2>
                <p className="text-gray-400 leading-relaxed font-medium">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* IMPORTANT NOTE SECTION */}
        <div className="bg-white text-black p-8 md:p-12 rounded-3xl mb-16">
          <div className="flex items-center gap-3 mb-6">
            <AlertCircle className="w-8 h-8" />
            <h2 className="text-3xl font-black uppercase tracking-tight">Damages & Issues</h2>
          </div>
          <p className="text-lg font-bold leading-relaxed mb-6">
            Panther Clothing is not liable for any products damaged or lost during shipping. However, if you receive your order damaged, please contact us immediately.
          </p>
          <div className="bg-black/5 p-6 border-l-4 border-black mb-8 italic font-medium">
            &quot;To claim a replacement for damaged goods, a continuous unboxing video (from seal opening to product inspection) is MANDATORY.&quot;
          </div>
        </div>

        {/* CTA SECTION */}
        <div className="text-center py-12 border-t border-white/10">
          <h3 className="text-2xl font-black uppercase mb-6 italic text-gray-400">Where is my order?</h3>
          <a 
            href="https://wa.me/7084721011?text=Hi! I would like to check the status of my order." 
            className="inline-flex items-center gap-3 bg-white text-black px-10 py-5 rounded-full font-black uppercase tracking-widest hover:scale-105 transition-transform"
          >
            Track on WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}