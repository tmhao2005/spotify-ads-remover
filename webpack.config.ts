import * as path from "path";
import * as CopyWebpackPlugin from "copy-webpack-plugin";
import * as webpack from "webpack";

const config: webpack.Configuration = {
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    background: path.join(__dirname, "./src/background.ts"),
    contentScript: path.join(__dirname, "./src/content-script.ts"),
    // popup: path.join(__dirname, "./src/popup.ts"),
    main: path.join(__dirname, "./src/main.ts"),
  },
  output: {
    path: path.join(__dirname, "./dist/js"),
    filename: "[name].js",
  },
  optimization: {
    splitChunks: {
      name: "vendor",
      chunks: "initial",
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".css"],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: "manifest.json" }, { from: "images/*" }],
    }),
  ],
};

export default config;
