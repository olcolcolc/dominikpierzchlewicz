export type CommonItem = {
  title: string;
  description?: string;
  collaboration?: string;
  ariaLabel?: string;
};

export type ImageItem = {
  title: string;
  imageUrl?: string;
  collaboration?: string;
  ariaLabel?: string;
};

export type GalleryItem = CommonItem & {
  gallery: string[];
};
