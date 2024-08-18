/*
 * @Author: dyb
 * @Date: 2024-07-31 21:29:17
 * @LastEditors: dyb
 * @LastEditTime: 2024-08-17 23:49:11
 * @FilePath: /jet-lib-test/vite/utils.ts
 * @Description: vite配置工具函数
 */

import { readdirSync, statSync } from "fs"
import { join, resolve, parse } from "path"

/**
 * FUN: 获取src/和xxx.xxx中间的内容
 *
 * @author jet
 * @date 11/03/2024/  15:05:41
 * @param {string} text - 文本
 * @returns {string} 中间内容
 */
const extractMiddlePart = (text: string): string => {

    const regex = /src\/(.*?)[\w-]+\.[^.]+/
    const match = text.match(regex)
    if (match) {

        return match[1]

    }
    return ""

}

/**
 * FUN: 获取多入口文件配置
 * key值规则：
 * 如果是 `src/index.ts` 或者 `src/log.ts`,那么key应该为 `index` 或者 `log`
 * 如果是 `src/func/index.ts` 或者 `src/func/log.ts` ,那么key应该为 `func/index` 或者 `func/log`
 *
 * @author jet
 * @date 31/07/2024/  21:32:00
 * @export
 * @param {string} projectRootDir - 项目根目录
 * @param {string} sourceDir - 源代码目录
 * @param {Record<string, string>} [entryConfig={}] - 配置对象
 * @returns {*}  {Record<string, string>}
 */
const getMultipleEntryConfig = (
    projectRootDir: string,
    sourceDir: string,
    entryConfig: Record<string, string> = {}
): Record<string, string> => {

    const _dirChildList = readdirSync(sourceDir)

    _dirChildList.forEach(item => {

        const _path = join(sourceDir, item)
        const _stats = statSync(_path)

        /** 文件，不包含md文件和.DS_Store(隐藏文件) */
        if (_stats.isFile() && !item.includes(".md") && item !== ".DS_Store") {

            const _key = `${extractMiddlePart(_path)}${parse(_path).name}`
            entryConfig[_key] = resolve(projectRootDir, _path)

        }
        else if (_stats.isDirectory()) {

            getMultipleEntryConfig(projectRootDir, _path, entryConfig)

        }

    })

    return entryConfig

}

export { getMultipleEntryConfig }
