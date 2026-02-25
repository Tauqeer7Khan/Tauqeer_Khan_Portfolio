// Minimal React type stub so TypeScript can resolve `react` imports
// before you've run `npm install` to get the real types.
declare module "react" {
  // Generic JSX type used in `import type { JSX } from "react";`
  export type JSX = any;

  // Common React types/hooks used in this project
  export type ReactNode = any;
  export type FC<P = any> = (props: P) => JSX.Element;

  export function useState<T = any>(initial: T): any;
  export function useEffect(effect: () => any, deps?: any[]): void;
}

