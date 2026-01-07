"use client";

import { Lock, Eye, Database, Share2, ShieldCheck, UserCheck } from "lucide-react";

export default function privacy() {
  const lastUpdated = "January 2026";

  const privacySections = [
    {
      icon: <Database className="w-6 h-6" />,
      title: "1. Information We Collect",
      content: "When you browse our site or connect via WhatsApp, we may collect personal details such as your name, phone number, shipping address, and payment screenshots. This data is essential for processing your orders and providing a personalized experience.",
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "2. How We Use Your Data",
      content: "Your information is used strictly for order fulfillment, customer support via WhatsApp, and occasionally sending you updates about new 'Panther' drops if you have opted into our tribe.",
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "3. Data Security",
      content: "We value your trust. While orders are handled via WhatsApp, any data stored through our Sanity CMS backend is protected with industry-standard encryption. We do not store your credit card or UPI PIN details.",
    },
    {
      icon: <Share2 className="w-6 h-6" />,
      title: "4. Third-Party Sharing",
      content: "We only share your address and contact number with our trusted delivery partners (like Delhivery or BlueDart) to ensure your streetwear reaches you. We never sell your data to third-party advertisers.",
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: "5. Your Rights",
      content: "You have the right to ask us to delete your chat history or contact details from our records at any time. Simply drop us a message on WhatsApp, and we will process your request within 48 hours.",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-32 md:pt-48 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* HEADER */}
        <div className="mb-16 border-b border-white/10 pb-10">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4">
            Privacy <span className="italic text-gray-500">Policy</span>
          </h1>
          <p className="text-gray-400 font-medium">Last Updated: {lastUpdated}</p>
        </div>

        {/* INTRODUCTION */}
        <div className="bg-white/5 border border-white/10 p-8 rounded-3xl mb-12">
          <p className="text-gray-300 leading-relaxed italic">
            At Panther Clothing, we are committed to protecting your privacy. This policy outlines how we handle your personal information when you use our website and interact with us through WhatsApp.
          </p>
        </div>

        {/* PRIVACY CONTENT */}
        <div className="space-y-10">
          {privacySections.map((section, idx) => (
            <div key={idx} className="group">
              <div className="flex items-center gap-4 mb-4 text-white">
                <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white group-hover:text-black transition-all">
                  {section.icon}
                </div>
                <h2 className="text-2xl font-black uppercase tracking-tight">{section.title}</h2>
              </div>
              <p className="text-gray-400 leading-relaxed font-medium pl-14">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        {/* DATA CONSENT BOX */}
        <div className="mt-20 p-10 bg-white text-black rounded-3xl flex flex-col items-center text-center">
          <ShieldCheck size={48} className="mb-6" />
          <h2 className="text-3xl font-black uppercase tracking-tight mb-4">Your Privacy Matters</h2>
          <p className="font-medium mb-8 max-w-md">
            By using our site and contacting us on WhatsApp, you consent to our collection and use of information as outlined in this policy.
          </p>
          <div className="text-xs font-bold uppercase tracking-widest text-gray-500">
            Panther Clothing © 2026
          </div>
        </div>
      </div>
    </main>
  );
}