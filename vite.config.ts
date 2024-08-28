import { resolve } from "path"

import { defineConfig } from "vite"
import ViteDts from "vite-plugin-dts"

import pkg from "./package.json"

/** STATIC: 项目根目录 */
const projectRootDir = process.cwd()

export default defineConfig({
    plugins: [
        ViteDts({
            // 指定要生成.d.ts的源文件 默认: tsconfig.app.json 的 `include` 选项
            include: ["src/**/*.ts", "src/**/*.d.ts"],
            // 是否生成.d.ts入口文件
            insertTypesEntry: true,
            // .d.ts文件输出目录
            outDir: "./dist/types",
            // tsconfig文件路径
            tsconfigPath: "./tsconfig.app.json"
        })
    ],

    build: {
        outDir: resolve(projectRootDir, "./dist"),

        lib: {
            name: pkg.name,
            // 指定入口文件配置
            entry: resolve(projectRootDir, "./src/index.ts"),
            formats: ["es", "cjs", "umd"],
            fileName: (format, entryName) => {

                /** 路径前缀 */
                const _prefix = `${format}/${entryName}.`

                /** 文件扩展名 */
                let _ext: "js" | "mjs" | "cjs" = "js"
                switch (format) {

                case "es":
                    _ext = "mjs"
                    break

                case "cjs":
                    _ext = "cjs"
                    break

                default:
                    break

                }

                return `${_prefix}${_ext}`

            }
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
    },

    resolve: {
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
    }
})
