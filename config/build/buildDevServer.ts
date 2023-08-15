import {Configuration as devConfiguration} from "webpack-dev-server"
import {BuildOptions} from "./types/config";

export default function buildDevServer(options: BuildOptions): devConfiguration {
    const {port} = options;
    return {
        port,
        open: true,
        historyApiFallback: true,
    }
}