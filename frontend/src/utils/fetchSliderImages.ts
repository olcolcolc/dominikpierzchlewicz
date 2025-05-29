import { BASE_URL } from "../config/api";
import type { RawSliderImage, SliderImage } from "../types/slider";

export const fetchSliderImages = async (): Promise<SliderImage[]> => {
  const res = await fetch(`${BASE_URL}/api/slider-images?depth=1`);

  if (!res.ok) {
    throw new Error(
      `Failed to fetch slider images: ${res.status} ${res.statusText}`
    );
  }

  const data: { docs: RawSliderImage[] } = await res.json();

  return data.docs.map((doc) => ({
    url: `${BASE_URL}${doc.image.url}`,
    title: doc.title,
    alt: doc.title,
    isDark: doc.isDark,
  }));
};
