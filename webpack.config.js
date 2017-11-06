const path = require('path')

module.exports = {
  entry: './src/js/app.js',
  output: {
    path: path.resolve(__dirname, 'src/static'),
    filename: 'bundle.js',
  },
  externals: {
    'react': 'React'
  },
  resolve: {
    extensions: ['.js']
  },
  plugins: [
  ]
}
