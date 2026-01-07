"use client";

import { useState } from "react";
import Image from "next/image";
import { Product } from "@/types";
import ProductModal from "./ProductModal";

interface ProductsGridProps {
  products: Product[];
}

export default function ProductsGrid({ products }: ProductsGridProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  if (!products || products.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-500 text-lg">
          No products available at the moment.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => {
          const imageUrl = product.imageUrls?.[0] || "/placeholder.jpg";

          return (
            <div
              key={product._id}
              onClick={() => setSelectedProduct(product)}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              {/* Product Image */}
              <div className="relative aspect-square overflow-hidden bg-gray-100">
                <Image
                  src={imageUrl}
                  alt={product.title}
                  fill
                  className="object-cover group-hover:scale-105 group-hover:brightness-95 transition-all duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h3 className="font-semibold text-[17px] leading-snug text-gray-900 mb-1 line-clamp-2 group-hover:text-black transition-colors">
                  {product.title}
                </h3>

                <p className="text-xl font-bold text-black mb-2">
                  ₹{product.price.toLocaleString()}
                </p>

                {/* Available Sizes */}
                {product.sizes && product.sizes.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.slice(0, 4).map((size) => (
                      <span
                        key={size}
                        className="text-xs font-medium px-2.5 py-1 rounded-md bg-gray-100 text-gray-800 border border-gray-200"
                      >
                        {size}
                      </span>
                    ))}

                    {product.sizes.length > 4 && (
                      <span className="text-xs font-medium px-2.5 py-1 rounded-md bg-black text-white">
                        +{product.sizes.length - 4}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
}
