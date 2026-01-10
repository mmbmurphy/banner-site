import { defineField, defineType } from "sanity";

export default defineType({
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "color",
      title: "Color",
      type: "string",
      description: "Color for the category badge (e.g., #FF6B35)",
      initialValue: "#FF6B35",
    }),
    defineField({
      name: "isInfoCategory",
      title: "Info Category",
      type: "boolean",
      initialValue: false,
      description: "Category for info/SEO posts (contractor directories, etc.)",
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
  },
});
