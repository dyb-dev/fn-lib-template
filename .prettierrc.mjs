/*
 * @Author: 丁雁兵
 * @Date: 2024-02-27 21:21:41
 * @LastEditors: 丁雁兵
 * @LastEditTime: 2024-07-30 23:24:23
 * @FilePath: /vue_pinia_vite2.0/.prettierrc.mjs
 * @Description: prettier配置文件 注意：每次配置文件的更改，建议重启一下vscode，否则可能不会生效
 */

export default {
    // 指定换行的行长
    printWidth: 130,
    // 指定每个缩进级别的空格数
    tabWidth: 4,
    // 用空格而不是制表符缩进
    useTabs: false,
    // 在语句末尾打印分号
    semi: false,
    // Vue 文件中 <script> 和 <style> 标签内的代码是否缩进
    vueIndentScriptAndStyle: false,
    // 使用双引号而不是单引号
    singleQuote: false,
    // 引用对象中的属性时更改
    quoteProps: "as-needed",
    // 打印对象字面量中括号之间的空格
    bracketSpacing: true,
    // 将多行 HTML（HTML、JSX、Vue、Angular）元素的 > 放在最后一行的末尾，而不是单独放在下一行（不适用于自关闭元素）。
    bracketSameLine: false,
    // 格式化开始位置：从文件顶部开始
    rangeStart: 0,
    // 格式化结束位置：无穷大
    rangeEnd: Infinity,
    // 尾随逗号
    trailingComma: "none",
    // 在 JSX 中使用单引号而不是双引号
    jsxSingleQuote: false,
    // 在唯一的箭头函数参数周围包含括号
    arrowParens: "avoid",
    // Prettier 可以在文件顶部插入一个特殊的 @format 标记，指定该文件已使用 Prettier 格式化
    insertPragma: false,
    // Prettier 可以限制自己只格式化在文件顶部包含特殊注释（称为 pragma）的文件
    requirePragma: false,
    // Prettier 不会更改 Markdown 文本 例如：README.md
    proseWrap: "preserve",
    // 指定 HTML、Vue、Angular 和 Handlebars 的全局空白敏感度，如果行标签可能会改变间距，保留空格，如果是块标签无法影响布局，则去除空格
    htmlWhitespaceSensitivity: "css",
    // 维护现有的行结尾（一个文件中的混合值通过查看第一行之后使用的内容来规范化）
    endOfLine: "auto",
    // 控制 Prettier 是否格式化嵌入在文件中的引用代码
    embeddedLanguageFormatting: "auto",
    // 不要强制每行使用一个属性
    singleAttributePerLine: false
}
