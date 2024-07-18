/// <reference types="astro/astro-jsx" />

declare module '~icons/*' {
  const component: (props: astroHTML.JSX.SVGAttributes) => astroHTML.JSX.Element
  export default component
}
declare module 'virtual:icons/*' {
  const component: (props: astroHTML.JSX.SVGAttributes) => astroHTML.JSX.Element
  export default component
}
declare module '*.svg?component' {
  const component: (props: astroHTML.JSX.SVGAttributes) => astroHTML.JSX.Element
  export default component
}
declare module '*.svg?raw' {
  const svg: string
  export default svg
}