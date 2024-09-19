import { EnvVariables } from "./_interfaces"

const getDevServer = (env?: EnvVariables) => ({
  devtool: 'inline-source-map',
  devServer: {
    open: true,
    port: env.port ?? 5000,
    historyApiFallback: true,
    hot: true
  }
})

export default getDevServer