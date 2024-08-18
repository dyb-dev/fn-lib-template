import { resolve } from "path"

import { defineConfig } from "vite"

import pkg from "./package.json"
import { getMultipleEntryConfig } from "./vite/utils"

/** STATIC: 项目根目录 */
const projectRootDir = process.cwd()

/** STATIC: 是否支持多入口文件 */
const supportMultipleEntries: boolean = true

export default defineConfig({
    resolve: {
        // 路径别名
        alias: {
            "@": resolve(projectRootDir, "./src")
        },
        // 导入时想要省略的扩展名集合
        extensions: [".js", ".ts", ".jsx", ".tsx", ".json", ".mjs", ".mts", ".cjs", ".cts"],
        // package.json 中，默认允许的 exports 情景
        conditions: ["import", "module", "browser", "default", "production", "development"],
        // package.json 中，在解析包的入口点时尝试的字段列表。注意：比从 exports 字段解析的情景导出优先级低：如果一个入口起点从 exports 成功解析，resolve.mainFields 将被忽略。
        mainFields: ["browser", "module", "jsnext:main", "jsnext"]
    },

    json: {
        // 是否支持从 .json 文件中进行按名导入，示例：import { name } from './package.json';
        namedExports: false,
        // 开启则会禁用按名导入,导入的 JSON 会被转换为 export default JSON.parse("...") 会比转译成对象字面量性能更好，
        stringify: true
    },

    build: {
        outDir: resolve(projectRootDir, "./dist"),

        lib: {
            name: pkg.name,
            // 指定入口文件配置
            entry: supportMultipleEntries
                ? getMultipleEntryConfig(projectRootDir, "src")
                : resolve(projectRootDir, "./src/index.ts"),
            formats: supportMultipleEntries ? ["es", "cjs"] : ["es", "cjs", "umd"],
            // 注意：entryName指的是entry对应的key
            fileName: (format, entryName) => `${format}/${entryName}.${format}.js`
        }

        // TODO: 如果有不想打包进库的依赖，可以在这里配置
        // rollupOptions: {
        //     // 确保外部化处理那些你不想打包进库的依赖
        //     external: ["dayjs"],
        //     output: {
        //         // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        //         globals: {
        //             dayjs: "Dayjs"
        //         }
        //     }
        // }
    }
})
