// https://stackoverflow.com/questions/41293108/how-to-do-re-export-with-overrides

import { Person } from './Person2'
import { PersonComp } from './PersonComp2'

export * from './Person'
export * from './PersonComp'

export { Person, PersonComp }
