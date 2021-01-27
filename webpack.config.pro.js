const path = require('path')

const HtmlWebPlugin = require('html-webpack-plugin') //自动生成 HTML末班
const {CleanWebpackPlugin} = require('clean-webpack-plugin')// 每次清空dist文件夹
const MiniCssExtract = require('mini-css-extract-plugin') //提取成单独的css文件
module.exports ={
    entry:"./src/main.ts",
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:"main.js"
    },
    mode:"production",
    devServer:{
        contentBase:"/dist",
    },
    resolve:{
        "extensions":['.ts','.js','.json']
    },
    module:{
        rules:[
            {
                test:/\.scss$/,
                use:[MiniCssExtract.loader,'css-loader','sass-loader'],
                exclude:[
                    path.resolve(__dirname,'src/components')
                ]
            },
            {
                test:/\.scss$/,
                use:[MiniCssExtract.loader,{
                    loader:'css-loader',
                    options:{
                        modules:{
                            localIdentName: '[path][name]__[local]--[hash:base64:5]'
                        },
                       
                    }
                },'sass-loader'],
                include:[
                    path.resolve(__dirname,'src/components')
                ]
            },
            {
                test:/\.(eot|svg|woff2|woff|ttf)$/,
                // use:['file-loader']
                use:[
                    {
                        loader:'file-loader',
                        options:{
                            outputPath:'iconfont'
                        }
                    }
                ]
            },
            {
                test:/\.ts$/,
                use:[//配置babel
                    {       
                        loader:'babel-loader',//配置加载器
                        options:{
                            //设置预定义的环境 
                            presets:[
                                [
                                    //指定环境的插件
                                    "@babel/preset-env",
                                    //配置信息 
                                    {
                                        //我们要兼容的目标浏览器 
                                        targets:{
                                            'chrome':"86"
                                        },
                                        //指定corejs 的版本
                                        'corejs':'3',
                                        //使用corejs的方式
                                        // 'useBuiltIns':"useage"
                                    }
                                ]
                            ]
                        }

                    },'ts-loader'],
                exclude:/node_modules/

            }
        ]
    },
    plugins:[
        new HtmlWebPlugin({
            template:'./src/index.html'
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtract()
    ]

}