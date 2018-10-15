const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin')
const PORT = 6001;

function resolve(relatedPath) {
    return path.join(__dirname, relatedPath)
}

module.exports = {
    mode: 'development',
	devtool: 'source-map',
	entry: {
		app: './src/index.js'
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, '../dist')
	},
    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            "@babel/preset-env", 
                            "@babel/preset-react"
                        ],
                        plugins: [
                        [
                            "import", {
                                "libraryName": "antd",
                                "libraryDirectory": "es",
                                "style": "scss" 
                            }
                        ] 
                        ]
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve('../src/index.html'),
            // mapConfig:'http://41.196.99.30/tgram-pgisbase/config/qdkjdsj_map_config.js'
        }),
        new OpenBrowserPlugin({
        url: `http://localhost:${PORT}/`,
        })
    ],
    devServer: {
        contentBase: resolve('../src'),
        historyApiFallback: false,
        hot: false,
        host: '0.0.0.0',
        port: PORT,
    }
}