import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { EnvVariables } from "./_interfaces";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import { Configuration, ProgressPlugin, DefinePlugin } from "webpack";
import { paths } from "./_paths";
import { filenames } from "./_filenames";

const plugins = {
  html: new HtmlWebpackPlugin({
    title: 'Webpack App',
    template: paths.template,
    favicon: paths.favicon
  }),
  progress: new ProgressPlugin(),
  miniCSS: new MiniCssExtractPlugin({
    filename: filenames.css
  }),
  analyzer: new BundleAnalyzerPlugin(),
  variables: {
    call: (env?: EnvVariables) => new DefinePlugin({
      _MODE_: JSON.stringify(env.mode),
      _ANALYZER_: JSON.stringify(env.analyzer),
      _PLATFORM_: JSON.stringify(env.platform),
      _PORT_: JSON.stringify(env.port)
    })
  },
  hmr: new ReactRefreshWebpackPlugin(),
  copy: new CopyWebpackPlugin({
    patterns: [
      { from: paths.static, to: paths.output }
    ]
  })
}

const getPlugins = (env?: EnvVariables, isDev?: Boolean): Configuration['plugins'] => ([
  plugins.html,
  plugins.variables.call(env),
  plugins.copy,
  ...isDev 
    ? [ 
      plugins.progress,
      plugins.hmr 
    ] 
    : [ 
      plugins.miniCSS, 
      env.analyzer ? plugins.analyzer : null 
    ]
].filter(_ => _ !== null));

export default getPlugins;