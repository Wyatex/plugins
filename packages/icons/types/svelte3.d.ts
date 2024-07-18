declare module 'virtual:icons/*' {
  export { SvelteComponentDev as default } from 'svelte/internal'
}
declare module '~icons/*' {
  import { SvelteComponentTyped } from 'svelte'

  export default class extends SvelteComponentTyped<svelte.JSX.IntrinsicElements['svg']> {}
}
declare module '*.svg?component' {
  import { SvelteComponentTyped } from 'svelte'

  export default class extends SvelteComponentTyped<svelte.JSX.IntrinsicElements['svg']> {}
}
declare module '*.svg?raw' {
  const svg: string
  export default svg
}