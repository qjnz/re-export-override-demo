# ES6 Re-export override demo

Check the `src/re-export` folder and unit tests are in `re-export.test.tsx`.

The solution is from [stackoverflow](https://stackoverflow.com/questions/41293108/how-to-do-re-export-with-overrides)

```js
import { theFunction } from './myOverrides'

export * from 'some-library'
export { theFunction }
```
