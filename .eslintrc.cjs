module.exports = {
    root: true,

    env: {
        es2021: true,
        // 启用ES6特性
        es6: true,
        // 适用于Node.js环境
        node: true,
        // 适用于浏览器环境
        browser: true
    },

    overrides: [
        {
            // #region CODE: eslint 基础配置
            files: ["**/*.*js", "**/*.ts", "**/*.vue", "**/*.tsx", "**/*.json", "**/*.jsonc"],
            extends: [
                // 继承ESLint官方推荐的规则
                "eslint:recommended",
                // 对import的规则
                "plugin:import/recommended",
                // 对jsdoc注释的规则
                "plugin:jsdoc/recommended-typescript-error"
            ],
            // 主要用于配置一些插件或解析器需要的特定设置
            settings: {
                // eslint-plugin-import用到，需安装eslint-import-resolver-typescript依赖，否则引入模块会报错
                "import/resolver": {
                    // 使用 ts 解析器 解析 ts 文件
                    typescript: true,
                    // 使用 Node.js 解析器 解析 Node.js 模块
                    node: true
                }
            },
            rules: {
                // #region CODE: eslint基础规则

                // 条件语句不允许使用 ==
                eqeqeq: "error",
                // 控制语句的主体部分没用大括号括起来 提示错误
                curly: "error",
                // 出现n类似于 + 1这种js表达式错误时 提示错误
                "no-unused-expressions": "off",
                // 禁止出现var用let和const代替
                "no-var": "error",
                // double时,.prettierrc.cjs文件的singleQuote需设置为false,"avoidEscape": true遵循 Prettier 的字符串格式化规则,"allowTemplateLiterals": false禁止不必要的反引号
                quotes: ["error", "double", { avoidEscape: true, allowTemplateLiterals: false }],
                // 禁止使用逗号运算符（序列表达式）
                "no-restricted-syntax": ["error", "SequenceExpression"],
                // 禁止块内填充
                "padded-blocks": ["error", "always"],
                // 要求使用JS一致缩进4个空格
                indent: ["error", 4],
                // 禁用未声明的变量，除非它们在 /*global */ 注释中被提到
                "no-undef": "off",
                // 禁止出现未使用过的变量
                "no-unused-vars": "error",
                // 禁止使用异步函数作为 Promise执行器
                "no-async-promise-executor": "error",
                // 禁止在嵌套的块中出现变量声明或 function 声明
                "no-inner-declarations": "error",
                // 强制在 function的左括号之前使用一致的空格
                "space-before-function-paren": ["error", "never"],
                // 禁止尾部使用分号
                semi: ["error", "never"],
                // 强制把变量的使用限制在其定义的作用域范围内
                "block-scoped-var": "error",
                // 要求使用 const 声明那些声明后不再被修改的变量
                "prefer-const": "error",
                // 禁止出现console
                "no-console": "off",
                // 禁止出现debugger
                "no-debugger": "error",
                // 禁止出现重复case
                "no-duplicate-case": "error",
                // 禁止出现空语句块
                "no-empty": "error",
                // 禁止不必要的括号
                "no-extra-parens": "error",
                // 禁止对Function声明重新赋值
                "no-func-assign": "error",
                // 禁止出现[return|throw]之后的代码块
                "no-unreachable": "error",
                // 禁止if语句中return语句之后有else块
                "no-else-return": "error",
                // 禁止出现空的函数块
                "no-empty-function": "error",
                // 禁用不必要的嵌套块
                "no-lone-blocks": "error",
                // 禁止使用多个空格
                "no-multi-spaces": "error",
                // 禁止多次声明同一变量
                "no-redeclare": "error",
                // 禁止在return语句中使用赋值语句
                "no-return-assign": "error",
                // 禁用不必要的[return/await]
                "no-return-await": "error",
                // 禁止自身比较表达式
                "no-self-compare": "error",
                // 禁止不必要的catch子句
                "no-useless-catch": "error",
                // 禁止不必要的return语句
                "no-useless-return": "error",
                // 禁止空格和tab的混合缩进
                "no-mixed-spaces-and-tabs": "error",
                // 禁止出现多行空行
                "no-multiple-empty-lines": "error",
                // 禁止一行结束后面不要有空格
                "no-trailing-spaces": "error",
                // 禁止不必要的.call()和.apply()
                "no-useless-call": "error",
                // 允许出现delete变量的使用
                "no-delete-var": "off",
                // 允许变量声明与外层作用域的变量同名
                "no-shadow": "off",
                // 要求尽可能地使用点号
                "dot-notation": "error",
                // 要求switch语句中有default分支
                "default-case": "off",
                // 要求在块之前使用一致的空格
                "space-before-blocks": "error",
                // 要求在圆括号内使用一致的空格
                "space-in-parens": "error",
                // 要求操作符周围有空格
                "space-infix-ops": "error",
                // 要求在一元操作符前后使用一致的空格
                "space-unary-ops": "error",
                // 在大括号内强制执行一致的间距
                "object-curly-spacing": ["error", "always"],
                // 要求在switch的冒号左右有空格
                "switch-colon-spacing": "error",
                // 要求箭头函数的箭头前后使用一致的空格
                "arrow-spacing": "error",
                // 要求数组方括号中使用一致的空格
                "array-bracket-spacing": "error",
                // 要求在代码块中条件标识符处换行
                "brace-style": ["error", "stroustrup"],
                // 变量名，必须遵循驼峰命名规范，但是对象字面量中的属性命名可以使用任何风格
                camelcase: ["error", { properties: "never" }],
                // 要求可嵌套的块的最大深度4
                "max-depth": ["error", 4],
                // 要求函数块最多允许的的语句数量20
                "max-statements": ["error", 100],
                // 要求回调函数最大嵌套深度3
                "max-nested-callbacks": ["error", 3],
                // 要求每一行中所允许的最大语句数量
                "max-statements-per-line": ["error", { max: 1 }],
                // 仅在需要时才使用引号括起对象字面量的属性名
                "quote-props": ["error", "as-needed"],
                // 逗号应该放在行末
                "comma-style": ["error", "last"],
                // @fixable 对象字面量中冒号前面禁止有空格，后面必须有空格
                "key-spacing": ["error", { beforeColon: false, afterColon: true, mode: "strict" }],
                // 禁用强制使用数组和对象解构语法
                "prefer-destructuring": "off",

                // #endregion

                // #region CODE: eslint-plugin-import 插件规则

                // 忽略虚拟模块
                "import/no-unresolved": ["error", { ignore: ["^virtual:", "@"] }],
                "import/order": [
                    "error",
                    {
                        //builtin:内置模块
                        //external:外部模块
                        //internal:项目内部引用
                        //unknown:未知引用 例如: @/xxx
                        //parent:父节点引用
                        //sibling:兄弟引用
                        //type:类型文件引用
                        groups: ["builtin", "external", "internal", "unknown", "parent", "sibling", "type"],
                        // 通过路径自定义分组
                        pathGroups: [
                            {
                                pattern: "@/types",
                                group: "type",
                                position: "before"
                            }
                        ],
                        // pathGroups配置的导入的类型不做处理的定义在这里
                        pathGroupsExcludedImportTypes: [],
                        // 每个分组之间换行
                        "newlines-between": "always",
                        // 排序
                        alphabetize: {
                            // asc升序，desc降序
                            order: "asc",
                            // 是否忽略大小写
                            caseInsensitive: true
                        },
                        // 如果为 true，未命名的导入，给出警告，但是不做 fix。false 的话，不做警告。建议 false，手动把样式放在最后。
                        warnOnUnassignedImports: false
                    }
                ],

                // #endregion

                // #region CODE: eslint-plugin-jsdoc 插件规则

                // 禁用不允许类型注释
                "jsdoc/no-types": "off",
                // 允许第一个@标签上面存在空行
                "jsdoc/tag-lines": ["error", "any", { startLines: 1 }],
                // 添加自定义标签名
                "jsdoc/check-tag-names": ["error", { definedTags: ["date", "export"], typed: false }],
                // 禁用不允许存在默认值
                "jsdoc/no-defaults": "off",
                // 禁用函数强制注释
                "jsdoc/require-jsdoc": "off",
                // 不自动生成函数注释
                "jsdoc/require-param": [
                    "error",
                    {
                        // 禁用自动修复
                        enableFixer: false
                    }
                ]

                // #endregion
            }
            // #endregion
        },
        {
            // #region CODE: ts 配置
            files: ["**/*.ts", "**/*.d.ts", "**/*.vue", "**/*.tsx"],
            extends: [
                // 继承TypeScript官方推荐的规则
                "plugin:@typescript-eslint/recommended"
            ],
            parserOptions: {
                parser: "@typescript-eslint/parser", // 使用TypeScript解析器，以支持TypeScript语法
                ecmaVersion: 2019, // 使用2019版本的ECMAScript标准
                sourceType: "module", // 代码使用ES模块
                extraFileExtensions: [".vue"] // 额外处理.vue文件
            },
            rules: {
                // 禁用不允许显式使用any类型的规则
                "@typescript-eslint/no-explicit-any": "off",
                // 禁用不允许 TypeScript 注释的规则
                "@typescript-eslint/ban-ts-comment": "off",
                // 关闭强制camelCase命名的规则
                "@typescript-eslint/camelcase": "off",
                // 未使用的变量定义为错误
                "@typescript-eslint/no-unused-vars": "error",
                // 关闭禁止var-requires的规则
                "@typescript-eslint/no-var-requires": "error",
                // 关闭禁止空函数的规则
                "@typescript-eslint/no-empty-function": "error",
                // 关闭禁止非空断言的规则
                "@typescript-eslint/no-non-null-assertion": "error",
                // 关闭强制函数返回类型的规则
                "@typescript-eslint/explicit-function-return-type": "off",
                // 关闭强制导出函数返回类型的规则
                "@typescript-eslint/explicit-module-boundary-types": "off"
            }
            // #endregion
        },
        {
            // #region CODE: vue 配置
            files: ["**/*.vue"],
            extends: [
                // 继承Vue 3官方推荐的规则
                "plugin:vue/vue3-recommended"
            ],
            rules: {
                // 强制组件使用emit事件名为 camelCase 或者 kebab-case 格式
                "vue/custom-event-name-casing": ["error", "camelCase"],
                // 禁止使用组件事件时，例如驼峰形式：@componentsShowEvent，提示错误的规则
                "vue/v-on-event-hyphenation": "off",
                // 关闭禁止v-html指令的规则
                "vue/no-v-html": "off",
                // 关闭强制属性顺序的规则
                "vue/attributes-order": "off",
                // 关闭v-for指令必须使用:key的规则
                "vue/require-v-for-key": "off",
                // 关闭props默认值的强制规则
                "vue/require-default-prop": "off",
                // 关闭禁止未使用的组件的规则
                "vue/no-unused-components": "error",
                // 关闭组件名必须为多单词的规则
                "vue/multi-word-component-names": "off",
                // 关闭禁止在setup中解构props的规则
                "vue/no-setup-props-destructure": "off",
                // 关闭计算属性必须返回值的规则
                "vue/return-in-computed-property": "off",
                // 关闭单行元素必须换行符
                "vue/singleline-html-element-content-newline": 0,
                // 关闭多行元素必须换行符也是一样的
                "vue/multiline-html-element-content-newline": 0,
                // 要求每一行标签的最大属性不超五个
                "vue/max-attributes-per-line": ["error", { singleline: 5 }],
                // 要求html标签的缩进为需要4个空格
                "vue/html-indent": [
                    "error",
                    4,
                    {
                        attribute: 1,
                        baseIndent: 1,
                        closeBracket: 0,
                        alignAttributesVertically: true,
                        ignores: []
                    }
                ],
                // 取消关闭标签不能自闭合的限制设置
                "vue/html-self-closing": [
                    "error",
                    {
                        html: {
                            void: "always",
                            normal: "never",
                            component: "always"
                        },
                        svg: "always",
                        math: "always"
                    }
                ]
            }
            // #endregion
        },
        {
            // #region CODE: json、jsonc 配置
            files: ["**/*.json", "**/*.jsonc"],
            extends: [
                // 对json文件的规则
                "plugin:jsonc/recommended-with-jsonc"
            ],
            rules: {
                "jsonc/indent": ["error", 4]
            }
            // #endregion
        }
    ]
}
