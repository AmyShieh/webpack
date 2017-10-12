# webpack
webpack学习过程

webpack.config.js需要自己建立

其中包含五项比较重要的点：

    1. 入口文件 entry:{}
    2. 出口文件 output:{}
    3. 插件数组 plugins:[]
    4.启动服务 devServer
    5.配置项 module：{}
    
    其中注意下出口文件和启动服务
```
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"[name].js"
    }
    
    devServer:{
        contentBase:path.resolve(__dirname,"dist"),
        port:7190,
        host:"localhost",
        compress:true
    }
```

webpack: 打包，优化，封装

```$xslt
style-loader:把css终端url进行处理，挂载到js里。
css-loader:处理css中的标签，寻找元素
```

开发环境：
devServer
在开发环境中，js是100%不能压缩的，不然无法调试，如果压缩以后，运行server会报错。

生产环境：
要求必须js压缩


