import { ModuleFederationPlugin } from '@module-federation/enhanced/webpack';

export default {
  mode: "development",
  output: {
    publicPath: 'auto'
  },
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    }
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "host",
      remotes: {
        'mfe': 'mfe@http://localhost:3002/mf-manifest.json',
      }
    }),
  ]
};
