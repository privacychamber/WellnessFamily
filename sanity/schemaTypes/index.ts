import { type SchemaTypeDefinition } from 'sanity'
import { homepageType } from './homepage'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [homepageType],
}
