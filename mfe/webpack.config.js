import { ModuleFederationPlugin } from '@module-federation/enhanced/webpack';

export default {
  mode: "development",
  
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    }
  },

  output: {
    publicPath: 'auto',
  },
  
  plugins: [
    new ModuleFederationPlugin({
      name: "mfe",
      exposes: {
        './app': './src/app.js'
      }
    }),
  ]
};
