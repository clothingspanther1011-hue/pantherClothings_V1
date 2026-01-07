"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, MessageCircle, Info, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Product } from "@/types";

interface Props {
  product: Product;
  selectedSize: string;
  selectedColor: string;
  whatsappNumber: string;
  onBack: () => void;
}

const COUNTRY_CODES = [
  { code: "+91", label: "🇮🇳 +91" },
  { code: "+1", label: "🇺🇸 +1" },
  { code: "+44", label: "🇬🇧 +44" },
  { code: "+971", label: "🇦🇪 +971" },
];

export default function OrderForm({
  product,
  selectedSize,
  selectedColor,
  whatsappNumber,
  onBack,
}: Props) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "+91",
    phone: "",
    street: "",
    landmark: "",
    city: "",
    state: "",
    pincode: "",
  });

  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [agreedToPolicy, setAgreedToPolicy] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    setTouched({ ...touched, [e.target.name]: true });
  };

  const validations = {
    firstName: form.firstName.trim().length > 0,
    lastName: form.lastName.trim().length > 0,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email),
    phone: form.phone.replace(/\D/g, "").length >= 10,
    street: form.street.trim().length > 5,
    city: form.city.trim().length > 0,
    state: form.state.trim().length > 0,
    pincode: /^[0-9]{6}$/.test(form.pincode), 
  };

  const isFormValid = Object.values(validations).every(Boolean) && agreedToPolicy;

  const getError = (field: keyof typeof validations) => {
    if (touched[field] && !validations[field]) {
      if (field === "email") return "Please enter a valid email";
      if (field === "phone") return "Enter 10 digit number";
      if (field === "pincode") return "Enter 6 digit pincode";
      if (field === "street") return "Address too short";
      return "This field is required";
    }
    return null;
  };

  const sendToWhatsApp = () => {
    if (!isFormValid) return;
    
    const imageUrl = product.imageUrls?.[0] || "";
    
    let msg = `🔥 *NEW ORDER REQUEST*\n\n`;
    msg += `━━━━━━━━━━━━━━━━━━━━━\n`;
    msg += `📦 *PRODUCT DETAILS*\n`;
    msg += `━━━━━━━━━━━━━━━━━━━━━\n\n`;
    msg += `*Product Name:* ${product.title}\n`;
    msg += `*Price:* ₹${product.price.toLocaleString()}\n`;
    if (selectedSize) msg += `*Selected Size:* ${selectedSize}\n`;
    if (selectedColor) msg += `*Selected Color:* ${selectedColor}\n`;
    if (imageUrl) {
      msg += `\n🖼 *Product Image:*\n${imageUrl}\n`;
    }
    
    msg += `\n━━━━━━━━━━━━━━━━━━━━━\n`;
    msg += ` *CUSTOMER DETAILS*\n`;
    msg += `━━━━━━━━━━━━━━━━━━━━━\n\n`;
    msg += `*Full Name:* ${form.firstName} ${form.lastName}\n`;
    msg += `*Email:* ${form.email}\n`;
    msg += `*Phone Number:* ${form.countryCode} ${form.phone}\n`;
    
    msg += `\n━━━━━━━━━━━━━━━━━━━━━\n`;
    msg += ` *DELIVERY ADDRESS*\n`;
    msg += `━━━━━━━━━━━━━━━━━━━━━\n\n`;
    msg += `*Street Address:* ${form.street}\n`;
    if (form.landmark) msg += `*Landmark:* ${form.landmark}\n`;
    msg += `*City:* ${form.city}\n`;
    msg += `*State:* ${form.state}\n`;
    msg += `*Pincode:* ${form.pincode}\n`;
    
    msg += `\n━━━━━━━━━━━━━━━━━━━━━\n\n`;
    msg += ` *Cash on Delivery Available*\n`;
    msg += ` Customer agreed to unboxing video policy\n\n`;
    msg += `_Order placed on ${new Date().toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' })}_`;

    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="px-4 py-4 max-w-5xl mx-auto">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide hover:opacity-70 transition-all active:scale-95"
          >
            <ArrowLeft size={18} strokeWidth={2.5} /> 
            <span>Back</span>
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-6 pb-32 md:pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Product Preview - Sticky on Desktop */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 lg:self-start">
            <div className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden">
              <div className="relative aspect-[4/5] w-full">
                <Image 
                  src={product.imageUrls?.[0] || "/placeholder.jpg"} 
                  alt={product.title} 
                  fill 
                  className="object-cover"
                  priority
                />
                <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full shadow-lg border border-gray-200">
                  <p className="text-lg font-black text-green-600">₹{product.price.toLocaleString()}</p>
                </div>
              </div>
              <div className="p-6">
                <h1 className="text-2xl font-black uppercase tracking-tight text-black">{product.title}</h1>
                <div className="flex gap-2 mt-3">
                  <span className="bg-black text-white text-xs px-4 py-2 rounded-full font-bold">{selectedSize}</span>
                  <span className="bg-gray-200 text-black text-xs px-4 py-2 rounded-full font-bold">{selectedColor}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-6 md:p-8">
              <div className="mb-8">
                <h2 className="text-2xl font-black uppercase tracking-tight text-black">Shipping Details</h2>
                <div className="h-1.5 w-16 bg-black mt-3 rounded-full"></div>
              </div>

              <div className="space-y-5">
                {/* Name Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <div className="relative">
                      <input 
                        name="firstName" 
                        placeholder="First Name" 
                        value={form.firstName}
                        onChange={handleChange} 
                        onBlur={handleBlur}
                        className={`w-full px-5 py-4 bg-white border-2 rounded-2xl font-semibold text-base text-black outline-none transition-all ${
                          getError("firstName") 
                            ? "border-red-300 bg-red-50" 
                            : validations.firstName && touched.firstName
                            ? "border-green-500 bg-green-50"
                            : "border-gray-300 focus:border-black"
                        }`}
                      />
                      {validations.firstName && touched.firstName && (
                        <CheckCircle2 size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-green-600" />
                      )}
                    </div>
                    {getError("firstName") && (
                      <p className="text-xs text-red-600 font-bold mt-2 ml-1">{getError("firstName")}</p>
                    )}
                  </div>
                  <div>
                    <div className="relative">
                      <input 
                        name="lastName" 
                        placeholder="Last Name" 
                        value={form.lastName}
                        onChange={handleChange} 
                        onBlur={handleBlur}
                        className={`w-full px-5 py-4 bg-white border-2 rounded-2xl font-semibold text-base text-black outline-none transition-all ${
                          getError("lastName") 
                            ? "border-red-300 bg-red-50" 
                            : validations.lastName && touched.lastName
                            ? "border-green-500 bg-green-50"
                            : "border-gray-300 focus:border-black"
                        }`}
                      />
                      {validations.lastName && touched.lastName && (
                        <CheckCircle2 size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-green-600" />
                      )}
                    </div>
                    {getError("lastName") && (
                      <p className="text-xs text-red-600 font-bold mt-2 ml-1">{getError("lastName")}</p>
                    )}
                  </div>
                </div>

                {/* Phone Row */}
                <div>
                  <div className="flex gap-3">
                    <select 
                      name="countryCode" 
                      value={form.countryCode} 
                      onChange={handleChange}
                      className="px-4 py-4 bg-white border-2 border-gray-300 rounded-2xl font-bold text-sm text-black outline-none focus:border-black transition-all"
                    >
                      {COUNTRY_CODES.map(c => <option key={c.code} value={c.code}>{c.label}</option>)}
                    </select>
                    <div className="flex-1 relative">
                      <input 
                        type="tel" 
                        name="phone" 
                        placeholder="Phone Number" 
                        value={form.phone}
                        onChange={handleChange} 
                        onBlur={handleBlur}
                        className={`w-full px-5 py-4 bg-white border-2 rounded-2xl font-semibold text-base text-black outline-none transition-all ${
                          getError("phone") 
                            ? "border-red-300 bg-red-50" 
                            : validations.phone && touched.phone
                            ? "border-green-500 bg-green-50"
                            : "border-gray-300 focus:border-black"
                        }`}
                      />
                      {validations.phone && touched.phone && (
                        <CheckCircle2 size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-green-600" />
                      )}
                    </div>
                  </div>
                  {getError("phone") && (
                    <p className="text-xs text-red-600 font-bold mt-2 ml-1">{getError("phone")}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <div className="relative">
                    <input 
                      type="email" 
                      name="email" 
                      placeholder="Email Address" 
                      value={form.email}
                      onChange={handleChange} 
                      onBlur={handleBlur}
                      className={`w-full px-5 py-4 bg-white border-2 rounded-2xl font-semibold text-base text-black outline-none transition-all ${
                        getError("email") 
                          ? "border-red-300 bg-red-50" 
                          : validations.email && touched.email
                          ? "border-green-500 bg-green-50"
                          : "border-gray-300 focus:border-black"
                      }`}
                    />
                    {validations.email && touched.email && (
                      <CheckCircle2 size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-green-600" />
                    )}
                  </div>
                  {getError("email") && (
                    <p className="text-xs text-red-600 font-bold mt-2 ml-1">{getError("email")}</p>
                  )}
                </div>

                {/* Address Section Header */}
                <div className="pt-4 pb-2">
                  <h3 className="text-sm font-black uppercase tracking-wide text-black">Delivery Address</h3>
                </div>

                {/* Street Address */}
                <div>
                  <div className="relative">
                    <input 
                      name="street" 
                      placeholder="House No., Building, Street, Area" 
                      value={form.street}
                      onChange={handleChange} 
                      onBlur={handleBlur}
                      className={`w-full px-5 py-4 bg-white border-2 rounded-2xl font-semibold text-base text-black outline-none transition-all ${
                        getError("street") 
                          ? "border-red-300 bg-red-50" 
                          : validations.street && touched.street
                          ? "border-green-500 bg-green-50"
                          : "border-gray-300 focus:border-black"
                      }`}
                    />
                    {validations.street && touched.street && (
                      <CheckCircle2 size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-green-600" />
                    )}
                  </div>
                  {getError("street") && (
                    <p className="text-xs text-red-600 font-bold mt-2 ml-1">{getError("street")}</p>
                  )}
                </div>

                {/* Landmark */}
                <div className="relative">
                  <input 
                    name="landmark" 
                    placeholder="Landmark (Optional)" 
                    value={form.landmark}
                    onChange={handleChange}
                    className="w-full px-5 py-4 pr-12 bg-white border-2 border-gray-300 rounded-2xl font-semibold text-base text-black outline-none focus:border-black transition-all"
                  />
                  <Info size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>

                {/* City & State */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <div className="relative">
                      <input 
                        name="city" 
                        placeholder="City" 
                        value={form.city}
                        onChange={handleChange} 
                        onBlur={handleBlur}
                        className={`w-full px-5 py-4 bg-white border-2 rounded-2xl font-semibold text-base text-black outline-none transition-all ${
                          getError("city") 
                            ? "border-red-300 bg-red-50" 
                            : validations.city && touched.city
                            ? "border-green-500 bg-green-50"
                            : "border-gray-300 focus:border-black"
                        }`}
                      />
                      {validations.city && touched.city && (
                        <CheckCircle2 size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-green-600" />
                      )}
                    </div>
                    {getError("city") && (
                      <p className="text-xs text-red-600 font-bold mt-2 ml-1">{getError("city")}</p>
                    )}
                  </div>
                  <div>
                    <div className="relative">
                      <input 
                        name="state" 
                        placeholder="State" 
                        value={form.state}
                        onChange={handleChange} 
                        onBlur={handleBlur}
                        className={`w-full px-5 py-4 bg-white border-2 rounded-2xl font-semibold text-base text-black outline-none transition-all ${
                          getError("state") 
                            ? "border-red-300 bg-red-50" 
                            : validations.state && touched.state
                            ? "border-green-500 bg-green-50"
                            : "border-gray-300 focus:border-black"
                        }`}
                      />
                      {validations.state && touched.state && (
                        <CheckCircle2 size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-green-600" />
                      )}
                    </div>
                    {getError("state") && (
                      <p className="text-xs text-red-600 font-bold mt-2 ml-1">{getError("state")}</p>
                    )}
                  </div>
                </div>

                {/* Pincode */}
                <div>
                  <div className="relative">
                    <input 
                      type="text" 
                      name="pincode" 
                      placeholder="Pincode (6 digits)" 
                      value={form.pincode}
                      onChange={handleChange} 
                      onBlur={handleBlur} 
                      maxLength={6}
                      className={`w-full px-5 py-4 bg-white border-2 rounded-2xl font-semibold text-base text-black outline-none transition-all ${
                        getError("pincode") 
                          ? "border-red-300 bg-red-50" 
                          : validations.pincode && touched.pincode
                          ? "border-green-500 bg-green-50"
                          : "border-gray-300 focus:border-black"
                      }`}
                    />
                    {validations.pincode && touched.pincode && (
                      <CheckCircle2 size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-green-600" />
                    )}
                  </div>
                  {getError("pincode") && (
                    <p className="text-xs text-red-600 font-bold mt-2 ml-1">{getError("pincode")}</p>
                  )}
                </div>

                {/* Policy Checkbox */}
                <div className={`p-5 rounded-2xl border-2 transition-all ${
                  agreedToPolicy 
                    ? "bg-green-50/50 border-green-300" 
                    : "bg-yellow-50/50 border-yellow-200"
                }`}>
                  <label className="flex items-start gap-4 cursor-pointer">
                    <div className="flex items-center h-6 flex-shrink-0">
                      <input 
                        type="checkbox" 
                        checked={agreedToPolicy} 
                        onChange={(e) => setAgreedToPolicy(e.target.checked)}
                        className="h-6 w-6 rounded-lg border-2 border-gray-300 text-black focus:ring-2 focus:ring-black cursor-pointer" 
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-black uppercase tracking-tight text-gray-900">
                        📹 Unboxing Video Required
                      </span>
                      <span className="text-xs text-gray-600 font-semibold leading-relaxed mt-1">
                        Mandatory for damage claims or returns. Record unboxing from start to finish.
                      </span>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Bottom Button (Mobile Only) */}
      <div className="fixed bottom-0 left-0 right-0 lg:hidden bg-white border-t border-gray-200 shadow-lg p-4 z-40">
        <button
          disabled={!isFormValid}
          onClick={sendToWhatsApp}
          className={`w-full py-4 rounded-2xl font-black text-sm text-center flex items-center justify-center gap-2 transition-all ${
            isFormValid 
              ? "bg-black text-white active:scale-[0.98]" 
              : "bg-gray-300 text-gray-600 cursor-not-allowed"
          }`}
        >
          <MessageCircle size={20} fill={isFormValid ? "white" : "transparent"} />
          <span className="truncate">{isFormValid ? "CONFIRM ORDER" : "COMPLETE DETAILS"}</span>
        </button>
        <div className="flex items-center justify-center gap-2 text-xs text-gray-600 font-bold mt-3">
          <ShieldCheck size={14} /> Secure Checkout via WhatsApp
        </div>
      </div>

      {/* Desktop Button */}
      <div className="hidden lg:block max-w-5xl mx-auto px-4 pb-8">
        <div className="lg:ml-[calc(41.666667%+2rem)]">
          <button
            disabled={!isFormValid}
            onClick={sendToWhatsApp}
            className={`w-full py-5 rounded-2xl font-black text-base text-center flex items-center justify-center gap-3 transition-all shadow-lg ${
              isFormValid 
                ? "bg-black text-white active:scale-[0.98]" 
                : "bg-gray-300 text-gray-600 cursor-not-allowed"
            }`}
          >
            <MessageCircle size={22} fill={isFormValid ? "white" : "transparent"} />
            {isFormValid ? "CONFIRM ORDER VIA WHATSAPP" : "COMPLETE ALL FIELDS"}
          </button>
          <div className="flex items-center justify-center gap-2 text-xs text-gray-600 font-bold mt-3">
            <ShieldCheck size={14} /> Secure & Instant Checkout
          </div>
        </div>
      </div>
    </div>
  );
}