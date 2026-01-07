import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: false, // Important: Set to false for fresh data
});

const builder = imageUrlBuilder(sanityClient);

export function urlForImage(source: SanityImageSource) {
  return builder.image(source).url();
}

// Get all active hero slides
export async function getHeroSlides() {
  const query = `*[_type == "heroSlide" && isActive == true] | order(order asc) {
    _id,
    title,
    subtitle,
    description,
    image,
    "imageUrl": image.asset->url,
    ctaText,
    ctaLink,
    order
  }`;

  return await sanityClient.fetch(query, {}, { 
    next: { revalidate: 60 } // Revalidate every 60 seconds
  });
}

// Get all active banners
export async function getBanners() {
  const query = `*[_type == "banner" && isActive == true] | order(position asc) {
    _id,
    title,
    subtitle,
    description,
    image,
    "imageUrl": image.asset->url,
    ctaText,
    ctaLink,
    layout,
    backgroundColor,
    textColor,
    position
  }`;

  return await sanityClient.fetch(query, {}, { 
    next: { revalidate: 60 } // Revalidate every 60 seconds
  });
}

// Get all active products
export async function getProducts() {
  const query = `*[_type == "product"] | order(_createdAt desc) {
    _id,
    title,
    price,
    images[] {
      asset-> {
        _id,
        url
      }
    },
    "imageUrls": images[].asset->url,
    sizes,
    colors,
    description,
    sizeChart {
      asset-> {
        _id,
        url
      }
    },
    "sizeChartUrl": sizeChart.asset->url,
    isActive
  }`;

  return await sanityClient.fetch(query, {}, { 
    next: { revalidate: 60 } // Revalidate every 60 seconds
  });
}

// Get single product by ID
export async function getProductById(id: string) {
  const query = `*[_type == "product" && _id == $id][0] {
    _id,
    title,
    price,
    images[] {
      asset-> {
        _id,
        url
      }
    },
    "imageUrls": images[].asset->url,
    sizes,
    colors,
    description,
    sizeChart {
      asset-> {
        _id,
        url
      }
    },
    "sizeChartUrl": sizeChart.asset->url,
    isActive
  }`;

  return await sanityClient.fetch(query, { id }, { 
    next: { revalidate: 60 } // Revalidate every 60 seconds
  });
}
