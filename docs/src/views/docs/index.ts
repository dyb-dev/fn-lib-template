import type { DefaultTheme } from "vitepress"

/** CONST: `左侧边栏` 对应根目录 */
const rootDir = "/docs"

/** CONST: `左侧边栏` 对应根文件路径 */
const rootFilePath = `${rootDir}/base/`

/** CONST: `左侧边栏` 链接映射配置 */
const config: DefaultTheme.Sidebar = {
    [rootDir]: [
        {
            text: "基础",
            link: rootFilePath
        }
    ]
}

/** CONST: `左侧边栏` 配置 */
const sidebar = {
    rootDir,
    rootFilePath,
    config
}

export { sidebar as docsSidebar }
