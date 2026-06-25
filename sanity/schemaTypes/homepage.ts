import { defineField, defineType } from 'sanity'

export const homepageType = defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'string',
      description: 'The small text above the main headline (e.g. A Global Wellness Movement...)',
    }),
    defineField({
      name: 'heroHeadline',
      title: 'Hero Headline',
      type: 'text',
      description: 'The main big text (e.g. You don\'t have to hold everything inside.)',
    }),
    defineField({
      name: 'heroScriptWord',
      title: 'Hero Script Word',
      type: 'string',
      description: 'The cursive word at the end of the headline (e.g. inside.)',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'heroHeadline',
      media: 'heroImage',
    },
    prepare({ title, media }) {
      return {
        title: 'Homepage Content',
        subtitle: title,
        media,
      }
    },
  },
})
