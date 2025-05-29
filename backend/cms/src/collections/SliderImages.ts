import { CollectionConfig } from 'payload'

export const SliderImages: CollectionConfig = {
  slug: 'slider-images',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Opis zdjęcia - co się na nim znajduje?',
    },
    {
      name: 'isDark',
      type: 'checkbox',
      label: 'Czy obrazek jest ciemny?',
      defaultValue: false,
    },
  ],
}
