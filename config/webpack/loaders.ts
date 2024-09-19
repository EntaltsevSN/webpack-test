import MiniCssExtractPlugin from "mini-css-extract-plugin"
import { EnvVariables } from "./_interfaces"

const cssWithModules = {
  loader: 'css-loader',
  options: {
    modules: {
      localIdentName: '[hash:base64:8]'
    }
  }
}

const svgIcon = [
  {
    loader: '@svgr/webpack', 
    options: { icon: true }
  }
]

const loaders = {
  ts: 'ts-loader',
  style: 'style-loader',
  css: 'css-loader',
  sass: 'sass-loader',
  cssWithModules,
  miniCSS: MiniCssExtractPlugin.loader,
  images: 'asset/resource',
  svg: ['@svgr/webpack'],
  svgIcon
}

const getLoaders = (env?: EnvVariables, isDev?: Boolean) => ([
  { test: /\.tsx?$/, use: loaders.ts },
  { test: /\.(png|jpg|jpeg|gif)$/i, type: loaders.images },
  { test: /\.svg$/, use: loaders.svgIcon },
  { test: /\.s?css$/, use: [
    isDev ? loaders.style : loaders.miniCSS, 
    isDev ? loaders.css : loaders.cssWithModules, 
    loaders.sass
  ] }
])

export default getLoaders;