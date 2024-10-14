# 基础常用相关函数

## Promise延时器

### `delay`

### 说明

`delay` 函数返回一个延迟指定毫秒数的 `Promise` 对象。在指定的时间间隔后，`Promise` 将被解析。该函数常用于异步流程中，需要等待一段时间后再继续执行代码。

### 参数

| 参数 | 说明                                             | 类型     | 默认值 |
| ---- | ------------------------------------------------ | -------- | ------ |
| `ms` | 延时的毫秒数，函数会在这段时间后解析 `Promise`。 | `number` | -      |

### 返回

`Promise<void>`：返回一个在指定毫秒数后解析的 `Promise` 对象。

### 示例

```ts
import { delay } from "fn-lib-template"

async function executeWithDelay() {
    console.log("开始执行")
    await delay(2000) // 等待 2 秒 // [!code highlight]
    console.log("2 秒后执行")
}

executeWithDelay()
```

## 防抖函数

### `preventRepeatExec`

### 说明

`preventRepeatExec` 函数用于防止某个函数在短时间内被多次调用。通过设置一个等待时间，只有在等待时间过去后，函数才会被执行。如果在等待时间内函数再次被调用，则会重置计时器，从而延迟函数的执行。此功能在处理频繁触发的事件（如输入框的输入事件、窗口的滚动事件等）时非常有用。

### 参数

| 参数        | 说明                             | 类型        | 默认值  |
| ----------- | -------------------------------- | ----------- | ------- |
| `fn`        | 需要防抖处理的函数。             | `TFuncType` | -       |
| `wait`      | 防抖的等待时间（毫秒）。         | `number`    | -       |
| `immediate` | 是否在等待时间开始时立即执行函数 | `boolean`   | `false` |

### 返回

`TFuncType`：返回一个防抖处理后的函数。

### 示例

```ts
import { preventRepeatExec } from "fn-lib-template"

function logMessage(message: string) {
    console.log(message)
}

// 创建一个防抖函数，每次调用时会等待 300 毫秒
const debouncedLog = preventRepeatExec(logMessage, 300) // [!code highlight]

document.addEventListener("scroll", () => {
    debouncedLog("用户正在滚动页面...")
})

// 使用 immediate 参数，立即执行一次，然后等待
const immediateLog = preventRepeatExec(logMessage, 300, true) // [!code highlight]

document.addEventListener("click", () => {
    immediateLog("用户点击了页面...")
})
```
