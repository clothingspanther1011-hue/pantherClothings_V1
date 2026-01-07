"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, AlertCircle } from "lucide-react";
import { Product } from "@/types";
import OrderForm from "./OrderForm";

interface ProductModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
  whatsappNumber?: string;
}

export default function ProductModal({
  product,
  isOpen,
  onClose,
  whatsappNumber = "7084721011",
}: ProductModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const images = product.imageUrls?.length ? product.imageUrls : ["/placeholder.jpg"];
  const sizes = product.sizes ?? [];
  const colors = product.colors ?? [];

  // ✅ Validation Check: Only returns true if user has selected existing options
  const isOptionsSelected = 
    (sizes.length > 0 ? selectedSize !== "" : true) && 
    (colors.length > 0 ? selectedColor !== "" : true);

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
      <div className="relative bg-white w-full max-w-6xl rounded-3xl shadow-2xl max-h-[90vh] overflow-y-auto p-5 md:p-8">
        
        {/* CLOSE */}
        <button
          onClick={() => {
            setShowForm(false);
            onClose();
          }}
          className="absolute top-4 right-4 bg-white border rounded-full p-2 shadow hover:scale-105 transition z-10"
        >
          <X />
        </button>

        {showForm ? (
          <OrderForm
            product={product}
            selectedSize={selectedSize}
            selectedColor={selectedColor}
            whatsappNumber={whatsappNumber}
            onBack={() => setShowForm(false)}
          />
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {/* IMAGES */}
            <div>
              <div className="relative aspect-square bg-gray-100 rounded-2xl overflow-hidden">
                <Image
                  src={images[currentImageIndex]}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
                {images.length > 1 && (
                  <>
                    <button
                      onClick={() => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)}
                      className="absolute left-3 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow"
                    >
                      <ChevronLeft />
                    </button>
                    <button
                      onClick={() => setCurrentImageIndex((prev) => (prev + 1) % images.length)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow"
                    >
                      <ChevronRight />
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* INFO */}
            <div className="space-y-5 text-black">
              <div>
                <h2 className="text-3xl font-black">{product.title}</h2>
                <p className="text-3xl font-extrabold mt-1">
                  ₹{product.price.toLocaleString()}
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed">{product.description}</p>

              {/* SIZES */}
              {sizes.length > 0 && (
                <div>
                  <p className="font-bold mb-2">Select Size</p>
                  <div className="flex gap-2 flex-wrap">
                    {sizes.map((s) => (
                      <button
                        key={s}
                        onClick={() => setSelectedSize(s)}
                        className={`px-4 py-2 rounded-full border font-bold transition ${
                          selectedSize === s ? "bg-black text-white border-black" : "bg-white hover:bg-gray-100"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* COLORS */}
              {colors.length > 0 && (
                <div>
                  <p className="font-bold mb-2">Select Color</p>
                  <div className="flex gap-2 flex-wrap">
                    {colors.map((c) => (
                      <button
                        key={c}
                        onClick={() => setSelectedColor(c)}
                        className={`px-4 py-2 rounded-full border font-bold transition ${
                          selectedColor === c ? "bg-black text-white border-black" : "bg-white hover:bg-gray-100"
                        }`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* BUY NOW BUTTON */}
              <div className="space-y-3">
                <button
                  disabled={!isOptionsSelected}
                  onClick={() => setShowForm(true)}
                  className={`w-full py-4 rounded-full font-bold text-lg transition duration-300 ${
                    isOptionsSelected 
                      ? "bg-black text-white hover:scale-[1.02] active:scale-95 shadow-lg" 
                      : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  {isOptionsSelected ? "Buy Now" : "Please Select Options"}
                </button>

                {/* Helper text if not selected */}
                {!isOptionsSelected && (
                  <p className="text-xs text-red-500 font-medium flex items-center justify-center gap-1">
                    <AlertCircle size={14} /> Please select size and color to proceed
                  </p>
                )}
              </div>

              {/* COD HIGHLIGHT */}
              <div className="bg-yellow-50 border border-yellow-300 text-yellow-800 text-center p-3 rounded-xl font-semibold">
                💵 Cash on Delivery Available • Order via WhatsApp
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}