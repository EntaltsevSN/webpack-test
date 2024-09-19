import webpack from 'webpack'
import { EnvVariables } from './config/webpack/_interfaces'
import { modes } from './config/webpack/_variables'
import getPlugins from './config/webpack/plugins'
import getDevServer from './config/webpack/devServer'
import getResolves from './config/webpack/resolves'
import getEntry from './config/webpack/entry'
import getOutput from './config/webpack/output'
import getLoaders from './config/webpack/loaders'


export default (env?: EnvVariables) => {
  const isDev = env.mode === modes.development

  const config: webpack.Configuration = {
    mode: modes[env.mode],
    entry: getEntry(),
    output: getOutput(),
    module: {
      rules: getLoaders(env, isDev)
    },
    plugins: getPlugins(env, isDev),
    resolve: getResolves(),
    ...isDev ? getDevServer(env) : {}
  }

  return config;
}