/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
// Figma asset declarations
declare module "figma:asset/*" {
  const value: string;
  export default value;
}