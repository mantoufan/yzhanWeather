const { resolve } = require('path')
module.exports = {
  mode: 'development',
  entry: './src/yzhanweather.js',
  output: {
    filename: 'yzhanweather.min.js',
    path: resolve('docs'),
    library: 'YZhanWeather',
    libraryTarget: 'umd',
    libraryExport: 'default',
    globalObject: 'this',
    environment: {
      arrowFunction: false,
      bigIntLiteral: false,
      const: false,
      destructuring: false,
      dynamicImport: false,
      forOf: false,
      module: false,
      optionalChaining: false,
      templateLiteral: false
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: resolve('src'),
        use: ['swc-loader']
      }
    ]
  },
  devServer: {
    hot: true,
    open: true,
    port: 3000,
    static: resolve('docs'),
  }
}