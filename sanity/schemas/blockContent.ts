import { defineType, defineArrayMember } from "sanity";

export default defineType({
  title: "Block Content",
  name: "blockContent",
  type: "array",
  of: [
    defineArrayMember({
      title: "Block",
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "Quote", value: "blockquote" },
      ],
      lists: [
        { title: "Bullet", value: "bullet" },
        { title: "Numbered", value: "number" },
      ],
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          { title: "Code", value: "code" },
          { title: "Underline", value: "underline" },
          { title: "Strike", value: "strike-through" },
        ],
        annotations: [
          {
            title: "URL",
            name: "link",
            type: "object",
            fields: [
              {
                title: "URL",
                name: "href",
                type: "url",
                validation: (Rule) =>
                  Rule.uri({
                    allowRelative: true,
                    scheme: ["http", "https", "mailto", "tel"],
                  }),
              },
              {
                title: "Open in new tab",
                name: "blank",
                type: "boolean",
                initialValue: false,
              },
            ],
          },
        ],
      },
    }),
    defineArrayMember({
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
        {
          name: "caption",
          type: "string",
          title: "Caption",
        },
      ],
    }),
    defineArrayMember({
      type: "object",
      name: "callout",
      title: "Callout",
      fields: [
        {
          name: "type",
          type: "string",
          title: "Type",
          options: {
            list: [
              { title: "Info", value: "info" },
              { title: "Warning", value: "warning" },
              { title: "Tip", value: "tip" },
            ],
          },
          initialValue: "info",
        },
        {
          name: "content",
          type: "text",
          title: "Content",
        },
      ],
      preview: {
        select: {
          title: "content",
          subtitle: "type",
        },
        prepare({ title, subtitle }) {
          return {
            title: title || "Callout",
            subtitle: subtitle?.toUpperCase(),
          };
        },
      },
    }),
    defineArrayMember({
      type: "object",
      name: "codeBlock",
      title: "Code Block",
      fields: [
        {
          name: "language",
          type: "string",
          title: "Language",
          options: {
            list: [
              { title: "JavaScript", value: "javascript" },
              { title: "TypeScript", value: "typescript" },
              { title: "Python", value: "python" },
              { title: "JSON", value: "json" },
              { title: "Bash", value: "bash" },
              { title: "SQL", value: "sql" },
              { title: "CSS", value: "css" },
              { title: "HTML", value: "html" },
            ],
          },
        },
        {
          name: "code",
          type: "text",
          title: "Code",
        },
      ],
      preview: {
        select: {
          language: "language",
        },
        prepare({ language }) {
          return {
            title: "Code Block",
            subtitle: language,
          };
        },
      },
    }),
  ],
});
