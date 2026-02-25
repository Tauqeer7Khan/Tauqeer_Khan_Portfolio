// Temporary shim so the editor stops complaining about `react/jsx-runtime`
// before you've installed React and Next.js types with `npm install`.
declare module "react/jsx-runtime" {
  export const jsx: any;
  export const jsxs: any;
  export const Fragment: any;
}

