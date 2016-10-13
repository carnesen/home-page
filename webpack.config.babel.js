import path from 'path'
import webpack from 'webpack'

const { NODE_ENV } = process.env
const production = NODE_ENV === 'production'

const plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
  })
]

if (production) {
  plugins.push(new webpack.optimize.UglifyJsPlugin())
}

module.exports = [
  {
    entry: [
      'babel-polyfill',
      path.join(__dirname, 'src', 'index.js')
    ],
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'bundle.js'
    },
    plugins,
    module: {
      loaders: [
        { test: /.js$/, loader: 'babel-loader', exclude: /node_modules/ }
      ]
    }
  }
]
