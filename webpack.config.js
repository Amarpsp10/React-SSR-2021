const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");

module.exports = () => ({
  mode: "development",
  entry: {
    app: "./src/client/index",
  },
  output: {
    path: path.resolve(__dirname, "public"),
    publicPath: "",
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, "src"),
        use: {
          loader: "babel-loader",
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use : ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".css"],
  },
  plugins: [new CleanWebpackPlugin(),]
});