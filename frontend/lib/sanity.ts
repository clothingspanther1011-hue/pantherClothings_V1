import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: false, // keep false for client projects
});

const builder = imageUrlBuilder(sanityClient);

export function urlForImage(source: SanityImageSource) {
  return builder.image(source).url();
}

/* -------------------------------- HERO -------------------------------- */

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

  return sanityClient.fetch(query, {}, {
    next: { tags: ["hero"] }
  });
}

/* -------------------------------- BANNERS -------------------------------- */

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

  return sanityClient.fetch(query, {}, {
    next: { tags: ["banners"] }
  });
}

/* -------------------------------- PRODUCTS -------------------------------- */

export async function getProducts() {
  const query = `*[_type == "product"] | order(_createdAt desc) {
    _id,
    title,
    price,
    "imageUrls": images[].asset->url,
    sizes,
    colors,
    description,
    "sizeChartUrl": sizeChart.asset->url,
    isActive
  }`;

  return sanityClient.fetch(query, {}, {
    next: { tags: ["products"] }
  });
}

/* -------------------------------- SINGLE PRODUCT -------------------------------- */

export async function getProductById(id: string) {
  const query = `*[_type == "product" && _id == $id][0] {
    _id,
    title,
    price,
    "imageUrls": images[].asset->url,
    sizes,
    colors,
    description,
    "sizeChartUrl": sizeChart.asset->url,
    isActive
  }`;

  return sanityClient.fetch(query, { id }, {
    next: { tags: ["products"] }
  });
}
