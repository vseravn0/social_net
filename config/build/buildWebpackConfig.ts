import {BuildOptions} from "./types/config";
import webpack from "webpack";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import {buildDevServer} from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions):webpack.Configuration{
    const {paths,mode,isDev} = options
    return {
        // дев или прод мод
        mode,
        // точка входа
        entry: paths.entry,
        // точка выхода бандла
        output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true
        },
        plugins:buildPlugins(options),
        module: {
            // конфиг лоудера
            rules: buildLoaders(options),
        },
        // файлы где не указываем расширение при импорте
        resolve: buildResolvers(),
        // показывает где в коде ошибка
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
    }
}
