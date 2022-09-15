const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const commonConfig = {
  entry: "index.js",
  plugins: [
    new HtmlWebpackPlugin({
      title: "Development"
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/i,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      },
      {
        test: /\.s[a,c]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource"
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource"
      },
      {
        test: /\.(csv|tsv)$/i,
        use: ["csv-loader"]
      },
      {
        test: /\.xml$/i,
        use: ["xml-loader"]
      }
    ]
  }
};

const devConfig = {
  devtool: "inline-source-map",
  devServer: {
    historyApiFallback: true,
    hot: true,
    open: true,
    port: 3000
  }
};

const productionConfig = {
  output: {
    filename: "[name].[contenthash].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true
  }
};

module.exports = (env) => {
  return !env.production
    ? { ...commonConfig, ...productionConfig }
    : { ...commonConfig, ...devConfig };
};
