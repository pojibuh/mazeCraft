module.exports = {
  entry: "./js/practice.js",
  output: {
  	filename: "./js/bundle.js"
  },
  module: {
  loaders: [
    {
      test: [/\.js?$/],
      exclude: /(node_modules)/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      }
    }
  ]
},
  devtool: 'source-map',
};
