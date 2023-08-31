import {BuildOptions} from "./types/config";
import buildLoaders from "./buildLoaders";
import buildResolvers from "./buildResolvers";
import buildPlugins from "./buildPlugins";
import webpack from "webpack";
import buildDevServer from "./buildDevServer";


export default function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {mode, paths, isDev} = options;
    return {
        mode: mode,
        entry: paths.entry,
        module: {
            rules: buildLoaders(options),
        },
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
        plugins: buildPlugins(options),
        resolve: buildResolvers(options),
        output: {
            path: paths.build,
            filename: '[name].[contenthash].js',
            clean: true,
            assetModuleFilename: 'assets/[hash][ext][query]'
        },
    }
}