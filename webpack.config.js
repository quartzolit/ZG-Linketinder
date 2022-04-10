const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index:'./client/js/script.ts',
        viewPage: './client/js/view-page.ts' 
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'client')},
        port: 9000,
        hot: true

    },
    output: {
        path: path.join(__dirname,'client/js'),
        filename: '[name].js',
    },
    resolve: {
        extensions: [ '.ts', '.js' ]

    },
    module:{
        rules: [{
            test: /\.ts$/,
            use: 'ts-loader',
            exclude: /node_modules/
        },
        {
            test: /\.html$/,
            use:[{
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',

                }
            }],
            exclude: [path.resolve(__dirname, 'client/index.html'),
                    path.resolve(__dirname,'client/view-page.html')
        ]           
        }
    ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'client/index.html',
            excludeChunks: ['viewPage']
        }),
        new HtmlWebpackPlugin({
            chunks: ['viewPage'],
            filename: 'view-page.html',
            template: 'client/view-page.html',
            excludeChunks: ['index']
        })     
    ]
}