const webpack=require('webpack')
module.exports={
    // plugins:[
    //     new webpack.ProvidePlugin({
    //         $: "jquery",
    //         jQuery: "jquery"
    //     })
        
    // ]
    configureWebpack:{
        plugins:[
            new webpack.ProvidePlugin({
                $: "jquery",
             jQuery: "jquery"
            })
        ]
        
    }
}