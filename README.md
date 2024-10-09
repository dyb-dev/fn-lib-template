# fn-lib-template

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://zh.wikipedia.org/wiki/MIT%E8%A8%B1%E5%8F%AF%E8%AD%89)

## 项目简介

`fn-lib-template` 提供了一个函数库的开发模板，该项目基于 [Vite](https://cn.vitejs.dev/) 构建，支持 TypeScript 开发和多种模块格式的打包，并提供了文档站点的集成功能，包括 PWA 支持、Ant Design Vue 组件、JSON 数据预览等功能。除此之外，模板在构建时支持自动生成 TypeScript 声明文件，确保代码具有良好的类型支持。

## 功能特点

-   **Vite**: 使用 Vite 进行快速打包和构建，支持多模块格式输出。
-   **模块格式支持**: 支持 `es`、`cjs`、`umd` 三种模块格式的打包输出。
-   **多入口文件支持**: 配置项支持多入口文件，便于模块化开发。
-   **自动生成 TypeScript 声明文件**: 在构建过程中，自动生成 `.d.ts` 类型声明文件，提供更好的开发体验和类型安全性。
-   **VitePress 文档集成**: 内置 VitePress 文档站点，支持 Markdown 格式的文档编写。
-   **HTTPS 支持**: 默认启用 HTTPS 服务，确保本地开发时的安全性。
-   **PWA 功能**: 内置 PWA 支持，提供离线访问和缓存功能。
-   **Ant Design Vue**: 集成了 Ant Design Vue 组件库，用于构建丰富的文档页面。
-   **TypeScript 支持**: 内置 TypeScript 支持，帮助你在编写组件和文档时获得更好的类型检查和开发体验。
-   **ESLint 和 Stylelint**: 预配置了 ESLint 和 Stylelint，确保代码风格的一致性和代码质量。
-   **Prettier**: 集成 Prettier，用于自动格式化代码，保持代码整洁和一致。
-   **JSON 预览**: 集成了 `vue3-json-viewer` 插件，支持 JSON 数据的可视化预览。
-   **Vue 自动类型检查**: 使用 `vue-tsc` 插件，自动进行 Vue 组件的类型检查。
-   **源代码复制预览**: 支持源代码的预览和复制功能，通过 `@vitepress-demo-preview` 组件和插件实现。

## 安装与使用

你可以使用 npm、pnpm 或 yarn 等包管理器来安装项目依赖。推荐使用 pnpm 作为首选包管理器。在下面的示例中，我们默认使用 pnpm 进行演示：

### 环境要求

-   Node.js 版本 >= 18.0.0
-   如果包管理器为 pnpm，版本需 >= 8.15.5

### 环境变量配置

该模板项目支持通过 `.env` 文件配置 HTTPS 和 PWA 功能。你可以在 `.env` 文件中设置以下环境变量来启用或禁用这些功能：

-   `VITE_PROTOCOL`: 协议，默认为 `https`。
-   `VITE_PWA`: 是否使用 PWA，默认为 `true`。

### 安装依赖

```bash
pnpm install
```

### 构建库

```bash
pnpm build
```

### 本地开发文档

```bash
pnpm docs:dev
```

### 构建文档

```bash
pnpm docs:build
```

### 预览文档构建结果

```bash
pnpm docs:preview
```

## 许可证

本项目基于 `MIT 许可证` 开源。
