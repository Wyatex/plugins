declare module 'virtual:icons/*' {
  import type { FunctionComponent, QwikIntrinsicElements } from '@builder.io/qwik'

  const Component: FunctionComponent<QwikIntrinsicElements['svg']>
  export default Component
}
declare module '~icons/*' {
  import type { FunctionComponent, QwikIntrinsicElements } from '@builder.io/qwik'

  const Component: FunctionComponent<QwikIntrinsicElements['svg']>
  export default Component
}
declare module '*.svg?component' {
  import type { FunctionComponent, QwikIntrinsicElements } from '@builder.io/qwik'

  const Component: FunctionComponent<QwikIntrinsicElements['svg']>
  export default Component
}
declare module '*.svg?raw' {
  const svg: string
  export default svg
}