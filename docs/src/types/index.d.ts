import type VConsole from "vconsole"

declare global {
    /** 扩展 Window 接口 */
    interface Window {
        /** vconsole 实例 */
        vConsole: VConsole
        /** 项目信息(window全局) */
        __PROJECT_INFO__: IProjectInfo
    }

    /** 项目信息(window全局) */
    declare interface IProjectInfo {
        /** 包信息 */
        pkg: {
            /** 包名称 */
            name: string
            /** 包版本 */
            version: string
            /** 生产依赖 */
            dependencies: Record<string>
            /** 开发依赖 */
            devDependencies: Record<string>
        }
        /** 项目版本 */
        version: string
        /** 项目最后构建时间 */
        lastBuildTime: string
        /** 环境变量 */
        env: ImportMetaEnv
    }

    /** 项目信息(window全局) */
    declare const __PROJECT_INFO__: IProjectInfo
}
