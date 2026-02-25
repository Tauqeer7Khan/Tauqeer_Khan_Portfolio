// Minimal JSX typings so the editor doesn't error before dependencies install.
// When you run `npm install`, TypeScript will also pick up full React typings.
declare namespace JSX {
  interface Element {} // used by JSX.Element
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

