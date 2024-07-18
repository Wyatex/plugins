declare module 'virtual:icons/*' {
  const component: string
  export default string
}
declare module '~icons/*' {
  const component: string
  export default component
}
declare module '*.svg?component' {
  const component: string
  export default component
}
declare module '*.svg?raw' {
  const svg: string
  export default svg
}