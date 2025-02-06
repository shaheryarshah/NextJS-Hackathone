import { type SchemaTypeDefinition } from 'sanity'
import product from '@/sanity/product'
import order from '@/sanity/order'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, order],
}
