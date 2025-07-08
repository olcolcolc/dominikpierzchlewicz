import type { CollectionConfig } from 'payload'

const SliderImage: CollectionConfig = {
  slug: 'slider-images', // Name used to reference this collection in the API (e.g., /api/slider-images)
  admin: {
    useAsTitle: 'title', // In the admin panel, the 'title' field will be used as the main identifier for each slider image.
    description: 'Images for the main slider on the homepage.', // A short description visible in the admin panel.
  },
  access: {
    read: () => true, // Allows anyone (even unauthenticated users) to read data from this collection via the API.
  },
  fields: [
    {
      name: 'title', // The name of the field in the database and in the admin panel.
      type: 'text', // The data type for this field is plain text.
      required: true, // This field must always be filled.
      label: 'Image Title', // The label visible in the admin panel. The client enters the image description here.
    },
    {
      name: 'image', // The name of the field.
      type: 'upload', // This field is used for uploading files.
      relationTo: 'media', // Automatically linked to Payload CMS's built-in 'media' collection, where files are actually stored.
      required: true, // This field must be filled (an image must be uploaded).
      label: 'Slider Image File', // The label in the admin panel.
    },
    {
      name: 'order', // The name of the field.
      type: 'number', // The data type: number.
      label: 'Display Order', // The label in the admin panel.
      min: 1, // The minimum value for this field is 1.
      unique: true, // Each slider image must have a unique value in this field to ensure clear ordering.
      admin: {
        position: 'sidebar', // This field will be displayed in the sidebar of the edit view in the admin panel.
      },
    },
  ],
}

export default SliderImage
