import type { DefaultTheme } from "vitepress"

/** STATIC: `左侧边栏` 对应根目录 */
const rootDir = "/docs"

/** STATIC: `左侧边栏` 对应根文件路径 */
const rootFilePath = `${rootDir}/base/`

/** STATIC: `左侧边栏` 链接映射配置 */
const config: DefaultTheme.Sidebar = {
    [rootDir]: [
        {
            text: "基础",
            link: rootFilePath
        }
    ]
}

/** STATIC: `左侧边栏` 配置 */
const sidebar = {
    rootDir,
    rootFilePath,
    config
}

export { sidebar as docsSidebar }
