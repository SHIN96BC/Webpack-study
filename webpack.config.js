const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/app.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve('./dist'),
    assetModuleFilename: '[hash][ext][query]',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      // url-loader 사용시
      { 
        test: /\.(jpg|png)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024 // 8kb
          }
        }
      }
      // file-loader 사용시
      // {
      //   test: /\.(jpg|png)$/,
      //   type: 'asset/resource'
      // }
    ]
  }
}
