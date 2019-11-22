// ----
// NOTE: only used for preview with webpack-dev-server
// ----

const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    preview: './preview/preview.js',
  },
  output: {
    filename: '[name].js',
    path:     path.resolve(__dirname, 'tmp'),
  },
  mode: 'development',
  module: {
		rules: [
			{
				test: /.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				}
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: false }
          }
        ]
      }
		]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './preview/index.html',
      filename: './index.html',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    contentBase: './tmp',
    open:        true,
  }
};
