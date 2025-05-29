import { CollectionConfig } from 'payload'

export const SliderImages: CollectionConfig = {
  slug: 'slider-images',
  access: {
    read: () => true,
  },
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
      label: 'Description',
    },
    {
      name: 'isDark',
      type: 'checkbox',
      label: 'Dark mode',
      defaultValue: false,
    },
  ],
}
