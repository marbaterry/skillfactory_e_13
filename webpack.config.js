const path = require('path');
var config = {
};

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    config.entry= path.resolve(__dirname, '') + '/my_app_dev/script1.js'
    // config.output = '',
    config.devServer = {
      static: './dist',
      port: 3001,
      hot: true,
    },
    config.devtool = 'source-map',
    // config.plugins = [
    //   new MiniCssExtractPlugin({
    //       filename: isDevelopment ? '[name].css' : '[name].[hash].css',
    //       chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css'
    //   })
    // ],
    config.module = {
      rules: [
        {
          // test: /\.s[ac]ss$/i,
          // use: [
          //   // Creates `style` nodes from JS strings
          //   "style-loader",
          //   // Translates CSS into CommonJS
          //   "css-loader",
          //   // Compiles Sass to CSS
          //   "sass-loader",
          // ],
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
      ],
    }
  }

  if (argv.mode === 'production') {
    config.entry= path.resolve(__dirname, '') + '/my_app_dev/script1.js'
    config.devServer = {
      static: './',
      port: 8080,
      hot: false,
    };
    config.module = {
      rules: [
        {
          // test: /\.s[ac]ss$/i,
          // use: [
          //   // Creates `style` nodes from JS strings
          //   "style-loader",
          //   // Translates CSS into CommonJS
          //   "css-loader",
          //   // Compiles Sass to CSS
          //   "sass-loader",
          // ],
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
      ],
    }
  }

  return config;
};
 