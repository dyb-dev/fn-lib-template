<!--
 * @Author: dyb-dev
 * @Date: 2024-07-01 22:28:05
 * @LastEditors: dyb-dev
 * @LastEditTime: 2024-08-15 20:26:52
 * @FilePath: /vitepress练习/.vitepress/theme/Layout.vue
 * @Description: 自定义vitepress主题组件
-->

<script setup lang="ts">
import { theme } from "ant-design-vue"
// 由于Ant组件默认: 英文版本，所以需要导入Ant组件中文版本
import zhCN from "ant-design-vue/lib/locale/zh_CN"
import { useData } from "vitepress"
import DefaultTheme from "vitepress/theme"
import { reactive } from "vue"

// 由于Ant日期类组件内部用到了dayjs，而dayjs默认: 英文版本，所以需要导入dayjs中文版本
import "dayjs/locale/zh-cn"
import { spliceAssetsPath } from "@/utils"

// 可使用自定义插槽 示例:(https://vitepress.dev/zh/guide/extending-default-theme#layout-slots)
const { Layout } = DefaultTheme

/** HOOKS: 获取`vitepress`当前站点配置 */
const siteConfig = useData()

/** REACTIVE: 预览结果 */
const data = reactive({
    /** `vitepress`当前站点配置 */
    siteConfig
})

/** STATIC: 首页logo大图路径 */
const homeHeroImagePath = spliceAssetsPath("/image/logo-large.webp")
</script>

<template>
    <a-config-provider
        :locale="zhCN"
        :theme="{
            algorithm: data.siteConfig.isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
            token: {
                colorPrimary: '#1677ff'
            }
        }"
    >
        <Layout>
            <template #home-hero-image>
                <img class="VPImage image-src" :src="homeHeroImagePath" alt="图片加载错误" />
            </template>
        </Layout>
    </a-config-provider>
</template>

<!-- <style lang="scss" scoped></style> -->
