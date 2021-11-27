const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BuildRunWebpackPlugin = require("build-run-webpack-plugin");
const MF = require("webpack").container.ModuleFederationPlugin;

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "js/built.js",
    path: path.resolve(__dirname, "build"),
  },
  stats: "errors-only",
  plugins: [
    new MF({
      name:"module_federation_c",//调用使用的名称
      filename:"module_federation_c.js",
      //导入模块
      remotes: {
        //导入别名，远程应用名称@远程应用地址
        apponeKey2:"module_federation_a@http://localhost:3001/module_federation_a.js",
        apponeKey3:"module_federation_b@http://localhost:3002/module_federation_b.js"
      }, 
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
    port: 3003,
    open: true,
  },
};
