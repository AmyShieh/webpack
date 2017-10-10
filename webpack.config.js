/**
 * Created by Amy on 2017/10/10.
 */
const path = require("path");
module.exports = {
    entry:{
        entry:'./src/entry.js',
        entry2:'./src/entry2.js'
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename: "[name].js"
    },
    module: {

    },
    plugins: [],
    devServer: {
        contentBase:path.resolve(__dirname,"dist"),
        compress:true,
        port:7190,
        host:"localhost"
    }
}