const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); 
const BuildRunWebpackPlugin = require("build-run-webpack-plugin");
const MF = require('webpack').container.ModuleFederationPlugin;

module.exports = {
  mode: 'development',
  entry: "./src/index.js",
  output: {
    filename: "js/built.js",
    path: path.resolve(__dirname, "build"),
  },
  stats: "errors-only",
  plugins: [
    new MF({
      name:"module_federation_a",//调用使用的名称
      filename:"module_federation_a.js",
      //remote:{},//其他组件
      exposes:{
        //模块名称，模块对应的路径
        './modules1':'./src/module1.js'
      },
      //sharad:{}
    }),
    new BuildRunWebpackPlugin(), 
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  module: {
    rules: [],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "build"),
    },
    compress: true,
    port: 3001,
    open: true, 
  },
};
