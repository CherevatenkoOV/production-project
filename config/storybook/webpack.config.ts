import webpack from "webpack";
import path from "path";
import {BuildPaths} from "../build/types/config";
import {buildCssLoader} from "../build/loaders/buildCssLoader";

module.exports = async ({config}: {
    config: webpack.Configuration
}) => {
    const paths: BuildPaths = {
        entry: '',
        build: '',
        html: '',
        src: path.resolve(__dirname, '..', '..', 'src')
    }

    config.resolve.modules.push(paths.src)
    config.module.rules.push(buildCssLoader(true))
    // ? test without next line
    config.resolve.extensions.push('.ts', '.tsx')
    // config.module.rules.unshift({
    //     test: /\.svg$/,
    //     use: ["@svgr/webpack"]
    // });
    config.module.rules = config.module.rules.map((rule: webpack.RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return {...rule, exclude: /\.svg$/i}
        }
        return rule
    })

    config.module.rules.push({
        test: /\.svg$/i,
        use: ['@svgr/webpack']
    })

    return config
};

