declare module 'virtual:icons/*' {
  const component: HTMLElement
  export default component
}
declare module '~icons/*' {
  const component: HTMLElement
  export default component
}
declare module '*.svg?component' {
  const component: HTMLElement
  export default component
}
declare module '*.svg?raw' {
  const svg: string
  export default svg
}