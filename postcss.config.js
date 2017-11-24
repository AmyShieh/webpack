module.exports = {
    plugins:[
        require('autoprefixer')({
            browsers: ['last 4 Chrome versions', 'last 2 Firefox versions', 'Safari >= 1', 'ie > 6']
        })
    ]
}