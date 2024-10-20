import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
  output: {
    publicPath: "/",
  },
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.cmp.svg$/,
        use: ["@svgr/webpack"],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /(.png|((?<!.cmp).svg)|.jpg|.gif|.woff|.woff2|.eot|.ttf|.otf)$/,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".jsx", ".js"],
    alias: {
      "@icons": path.resolve(__dirname, "src/assets/icons"),
      "@ui-kit": path.resolve(__dirname, "src/components/ui-kit"),
      "@components": path.resolve(__dirname, "src/components"),
      "@mocks": path.resolve(__dirname, "src/mocks"),
      "@style-fragments": path.resolve(__dirname, "src/style-fragments"),
      "@styled-tags": path.resolve(__dirname, "src/styled-tags"),
      "@utils": path.resolve(__dirname, "src/utils"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
  ],
  devtool: "inline-source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    historyApiFallback: true,
    open: true,
    hot: true,
  },
};
