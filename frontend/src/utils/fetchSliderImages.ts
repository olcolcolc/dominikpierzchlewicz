import type { RawSliderImage, SliderImage } from "../types/slider";

export const fetchSliderImages = async (): Promise<SliderImage[]> => {
  const res = await fetch("http://localhost:3000/api/slider-images?depth=1");
  const data: { docs: RawSliderImage[] } = await res.json();

  return data.docs.map((doc) => ({
    url: doc.image.url,
    title: doc.title,
    alt: doc.title,
    isDark: doc.isDark,
  }));
};
