import { defineField, defineType } from "sanity";

export default defineType({
  name: "experiences",
  title: "Experiences",
  type: "document",
  fields: [
    defineField({
      name: "order",
      title: "Order",
      type: "number",
    }),
    defineField({
      name: "organization",
      title: "Organization",
      type: "string",
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "start",
      title: "Start",
      type: "date",
    }),
    defineField({
      name: "end",
      title: "End",
      type: "date",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({ name: "technologies", title: "Technologies",
      type: "array",
      of: [{ type: 'reference', to: { type: 'technology'} }],
    }),
    defineField({
      name: "url",
      title: "URL",
      type: "url",
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
    }),
  ],

  // preview: {
  //   select: {
  //     title: 'title',
  //     author: 'author.name',
  //     media: 'mainImage',
  //   },
  //   prepare(selection) {
  //     const { author } = selection
  //     return { ...selection, subtitle: author && `by ${author}` }
  //   },
  // },
});
