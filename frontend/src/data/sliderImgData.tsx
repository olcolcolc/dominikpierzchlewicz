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
};

const sliderImgData: SliderImage[] = Object.entries(imageModules).map(
  ([path, url]) => {
    const fileName = path.split("/").pop() || "";
    const title = fileName.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " ");
    return {
      url: url as string,
      title,
      alt: title,
    };
  }
);

export default sliderImgData;
