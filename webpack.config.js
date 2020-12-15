const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: '/node_modules/',
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ],
            },
            // {
            //     test: /\.(png|jpe?g|gif)$/i,
            //     loader: 'file-loader',
            //     options: {
            //         publicPath: 'images',
            //     },
            // },

        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html'
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    //Note:- No wildcard is specified hence will copy all files and folders
                    from: 'src/images', //Will resolve to RepoDir/src/assets 
                    to: 'images' //Copies all files from above dest to dist/assets
                },
                {
                    //Wildcard is specified hence will copy only css files
                    from: 'src/stylesheets', //Will resolve to RepoDir/src/css and all *.css files from this directory
                    to: 'stylesheets'//Copies all matched css files from above dest to dist/css
                },

            ]
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 9000
    },
}