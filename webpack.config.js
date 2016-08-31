module.exports = {
  noInfo: true,
  entry: "./src/index.js",
  target: 'web',
  output: {
    path: __dirname,
    filename: "bundle.js",
    publicPath: "/static/"
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: "babel",
      include: __dirname,
      query: {
        presets: [ "es2015", "react", "react-hmre" ]
      }
    }]
  },
  devServer: {
    stats: {
      colors: true,
      hash: false,
      chunks: false
    }
  }
}