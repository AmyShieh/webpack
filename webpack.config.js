/**
 * Created by Amy on 2017/10/10.
 */
const path = require("path");
const glob = require("glob");
const uglify = require("uglifyjs-webpack-plugin");
const htmlPlugin = require("html-webpack-plugin");
const extractTextPlugin = require("extract-text-webpack-plugin");
const purifyCssPlugin = require("purifycss-webpack");
var website = {
    publicPath:"http://localhost:7190/"
};
module.exports = {
    entry:{
        entry:'./src/entry.js'
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename: "[name].js",
        publicPath: website.publicPath
    },
    module: {
        rules:[
            {
                test: /\.css$/,
                // use: ['style-loader','css-loader']
                use: extractTextPlugin.extract({
                    fallback:"style-loader",
                    use:[{
                        loader:"css-loader",options:{importloaders: 1},
                    },'postcss-loader']
                })
            },
            {
                test: /\.(jpg|png|gif)/,
                use:[
                    // {"loader":"file-loader"},
                    {
                        "loader":"url-loader",
                        options:{
                            limit:50,
                            outputPath:'images/'
                        }
                    }
                ]
            },
            {
                test:/\.(htm|html)$/i,
                use:['html-withimg-loader']
            },
            {
                test:/\.less$/,
                use:extractTextPlugin.extract({
                    use:[{
                        loader:"css-loader"
                    },{loader:"less-loader"}],
                    fallback:"style-loader"
                })
            },{
                test:/\.scss/,
                use:extractTextPlugin.extract({
                    fallback:"style-loader",
                    use:[
                        {loader:"css-loader"},
                        {loader:"sass-loader"}
                    ]
                })
            }
        ]
    },
    plugins: [
        // new uglify()
        new htmlPlugin({
            minify:{
                removeAttributeQuotes:true
            },
            hash:true,
            template:'./src/index.html'
        }),
        new extractTextPlugin("css/index.css"),
        new purifyCssPlugin({
            paths:glob.sync(path.join(__dirname,"src/*.html"))
        })
    ],
    devServer: {
        contentBase:path.resolve(__dirname,"dist"),
        compress:true,
        port:7190,
        host:"localhost"
    }
}