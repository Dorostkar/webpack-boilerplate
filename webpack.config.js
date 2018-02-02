const path = require('path'); // node library
// console.log(path.join(__dirname, 'public'));

module.exports = {
  // hameye webpack configuration ha ra inja minevisim
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js' //name kheily common i hast
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$/, //for all js files
        exclude: /node_modules/ //not those in node_modules folder
      }
    ]
    // loaders: [
    //   { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
    //   { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    // ]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public')
  }
};
