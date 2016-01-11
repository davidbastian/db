var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');


module.exports = {
    entry: "./src/components/main.js",
    output: {
        path: './dist',
        filename: "bundle.js",
        publicPath: ''
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new CopyWebpackPlugin([

            // Directory examples 
            {
                from: 'src/components/projects/media',
                to: './media'
            }
        ]),


        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
   
    


    ],
    devServer: {
        inline: true,
        contentBase: './dist',
    },
    module: {
        /* preLoaders: [
           {test: /\.js$/, loader: "eslint-loader", exclude: /node_modules/}
         ],*/

        loaders: [{
                test: /\.scss$/,
                include: /src/,
                loaders: [
                    'style',
                    'css',
                    'autoprefixer?browsers=last 3 versions',
                    'sass?outputStyle=expanded',
                ]
            }, {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',

                query: {
                    presets: ['es2015', 'react']
                }
            }, {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: ['img?minimize']
            }, {
                test: /\.css$/,
                loader: "style-loader!css-loader?importLoaders=1"
            }, {
                test: /\.(png|woff|woff2|eot|ttf)$/,
                loader: 'url-loader?limit=100000'
            }

        ]
    }
};
