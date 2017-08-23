//https://www.jonathan-petitcolas.com/2015/05/15/howto-setup-webpack-on-es6-react-application-with-sass.html
//https://github.com/qianxueseng-com/guides/wiki/using-webpack-with-react-jsx-babel-es6-and-sass
//Konfiguracja Webpack
/*
object resolve
required for easier import of out custom .jsx files
instead of importing file using precise path we can show
a directory that will be searched to find the filename
https://stackoverflow.com/questions/27502608/resolving-require-paths-with-webpack
*/
var path = require('path');
module.exports = {
    entry: {
      app: ["babel-polyfill", './js/app.jsx'],
      //style: './sass/main.scss'
      },
    output:    {
      filename:    "./js/out.js"
    },
    resolve: {
      modules: [path.resolve(__dirname, 'js'), 'node_modules'],
      extensions: ['.js', '.jsx']
    },
    watch: true,
    devServer: {
      historyApiFallback: true,
      inline:  true,
      contentBase: './',
      port:    3001
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,  exclude: /node_modules/,
                loader: 'babel-loader',
                query: { presets: ['es2015', 'stage-2' , 'react'] }
            },
             { test: /\.svg$/, loader: 'svg-loader?pngScale=2' }
        ]
    }
}

/*
{
   test: /\.scss$/,
   loaders: ['style-loader', 'css-loader','sass-loader']
},
{
test: /\.svg/,
loaders: ['svg-url-loader']
}
*/