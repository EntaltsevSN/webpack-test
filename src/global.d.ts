declare module '*.scss' {
  interface IClassNames {
    [className: string]: string
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module '*.jpg';
declare module '*.png';

declare module '*.svg' {
  import React from "react";
  const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

declare const _ANALYZER_: true | false
declare const _MODE_: 'production' | 'development'
declare const _PORT_: 4000
declare const _PLATFORM_: 'desktop' | 'mobile'