// https://stackoverflow.com/questions/41293108/how-to-do-re-export-with-overrides

import { Person } from './Person2'
import { PersonComp } from './PersonComp2'
import { Text } from './Text'

export * from './Person'
export * from './PersonComp'
export * from '@chakra-ui/react'

export { Person, PersonComp, Text }
