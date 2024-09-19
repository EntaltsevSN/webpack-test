import webpack from 'webpack';
import webpackServer from 'webpack-dev-server';
import config from './webpack.config';

const { devServer } = config();

const compiler = webpack(config());
const options = { ...devServer, open: true };
const server = new webpackServer(options, compiler);

const startServer: Function = async () => {
  console.log('Starting server...');

  await server.start();
}

startServer();