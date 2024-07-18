declare module 'virtual:icons/*' {
  import type { JSX } from 'preact'

  const component: (props: JSX.SVGAttributes<SVGSVGElement>) => JSX.Element
  export default component
}
declare module '~icons/*' {
  import type { JSX } from 'preact'

  const component: (props: JSX.SVGAttributes<SVGSVGElement>) => JSX.Element
  export default component
}
declare module '*.svg?component' {
  import type { JSX } from 'preact'

  const component: (props: JSX.SVGAttributes<SVGSVGElement>) => JSX.Element
  export default component
}
declare module '*.svg?raw' {
  const svg: string
  export default svg
}