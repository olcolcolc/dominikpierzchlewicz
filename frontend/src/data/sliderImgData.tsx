const imageModules = import.meta.glob(
  "/src/assets/images/*.{jpg,jpeg,png,webp}",
  {
    eager: true,
    as: "url",
  }
);

type SliderImage = {
  url: string;
  title: string;
  alt: string;
  isDark: boolean;
};

const sliderImgData: SliderImage[] = Object.entries(imageModules).map(
  ([path, url]) => {
    const fileName = path.split("/").pop() || "";
    const title = fileName.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " ");
    const isDark = fileName.toLowerCase().includes("dark");

    return {
      url: url as string,
      title,
      alt: title,
      isDark,
    };
  }
);

export default sliderImgData;
