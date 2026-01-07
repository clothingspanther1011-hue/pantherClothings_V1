import ProductsGrid from "@/components/ProductGrid";
import { getProducts } from "@/lib/sanity";

// Remove export const revalidate = 0; if you have it

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    /* Change pt-24 to pt-32 and add md:pt-40 */
    <main className="min-h-screen bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 pt-32 md:pt-40 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Our Products
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our latest collection. Click any product to view details
            and purchase via WhatsApp.
          </p>
        </div>

        <ProductsGrid products={products} />
      </div>
    </main>
  );
}