import { type SchemaTypeDefinition } from 'sanity'

// import blockContent from './schemas/blockContent'
// import category from './schemas/category'
// import post from './schemas/post'
// import author from './schemas/author'
import project from './schemas/project'
import homepage from './schemas/homepage'
import experience from './schemas/experience'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, homepage, experience],
}
