const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

/**
 * @type {import('webpack').Configuration}
 */
const config = {
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
      // {
      //   test: /\.css$/,
      //   use: extractCSS.extract([ 'css-loader' ]),
      // },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".css"],
  },
  plugins: [
    new CopyWebpackPlugin([{ from: "manifest.json" }, { from: "images/*" }]),
  ],
};

module.exports = config;
