import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import path from "path";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

 export default function buildPlugins(htmlPath: string): webpack.WebpackPluginInstance[]  {
    return [
            new HtmlWebpackPlugin({
                template: htmlPath
                // template: "./src/public/index.html"
            }),
            new webpack.ProgressPlugin(),
            new MiniCssExtractPlugin({
                filename: "css/[name].[contenthash:8].css",
                chunkFilename: "css/[id].[contenthash:8].css"
            })
    ]
}
