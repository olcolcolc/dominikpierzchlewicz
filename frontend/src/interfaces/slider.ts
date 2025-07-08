export interface PayloadSliderImage {
  id: string;
  title: string;
  order: number;
  image: {
    id: string;
    filename: string;
    mimeType: string;
    filesize: number;
    width: number;
    height: number;
    url: string;
    alt: string;
  };
}
