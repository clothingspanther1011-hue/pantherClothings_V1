import { defineType, defineField } from "sanity";

export default defineType({
  name: "banner",
  title: "Banner",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Banner Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "string",
      description: "Optional subtitle text",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      description: "Optional description text",
    }),
    defineField({
      name: "image",
      title: "Banner Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "ctaText",
      title: "CTA Button Text",
      type: "string",
      description: "Leave empty to hide button",
    }),
    defineField({
      name: "ctaLink",
      title: "CTA Button Link",
      type: "string",
      description: "Link for the CTA button",
    }),
    defineField({
      name: "layout",
      title: "Layout Style",
      type: "string",
      options: {
        list: [
          { title: "Full Width", value: "full" },
          { title: "Split (Image Left)", value: "split-left" },
          { title: "Split (Image Right)", value: "split-right" },
          { title: "Centered Overlay", value: "centered" },
        ],
        layout: "radio",
      },
      initialValue: "full",
    }),
    defineField({
      name: "backgroundColor",
      title: "Background Color",
      type: "string",
      options: {
        list: [
          { title: "White", value: "white" },
          { title: "Black", value: "black" },
          { title: "Gray", value: "gray" },
          { title: "Custom", value: "custom" },
        ],
      },
      initialValue: "gray",
      description: "Background color for text section in split layouts",
    }),
    defineField({
      name: "textColor",
      title: "Text Color",
      type: "string",
      options: {
        list: [
          { title: "Black", value: "black" },
          { title: "White", value: "white" },
        ],
      },
      initialValue: "black",
    }),
    defineField({
      name: "position",
      title: "Display Position",
      type: "number",
      initialValue: 0,
      description: "Lower numbers appear first on the page",
    }),
    defineField({
      name: "isActive",
      title: "Active",
      type: "boolean",
      initialValue: true,
      description: "Toggle to show/hide this banner",
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "subtitle",
      media: "image",
      position: "position",
      isActive: "isActive",
    },
    prepare({ title, subtitle, media, position, isActive }) {
      return {
        title: `${position}. ${title} ${!isActive ? "(Hidden)" : ""}`,
        subtitle: subtitle,
        media: media,
      };
    },
  },
  orderings: [
    {
      title: "Position",
      name: "positionAsc",
      by: [{ field: "position", direction: "asc" }],
    },
  ],
});