declare module 'virtual:icons/*' {
  import type { ComponentProps, JSX } from 'solid-js'

  const component: (props: ComponentProps<'svg'>) => JSX.Element
  export default component
}
declare module '~icons/*' {
  import type { ComponentProps, JSX } from 'solid-js'

  const component: (props: ComponentProps<'svg'>) => JSX.Element
  export default component
}
declare module '*.svg?component' {
  import type { ComponentProps, JSX } from 'solid-js'

  const component: (props: ComponentProps<'svg'>) => JSX.Element
  export default component
}
declare module '*.svg?raw' {
  const svg: string
  export default svg
}