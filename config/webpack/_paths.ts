import path from "path";

export const getPath: Function = (dir: string, ...props: any) => path.resolve(dir, ...props);

export const paths = {
  entry: getPath('src', 'index.tsx'),
  template: getPath('src', 'index.html'),
  src: getPath('src'),
  output: getPath('dist'),
  favicon: getPath('src', 'favicon.ico'),
  static: getPath('src', 'static')
}