/*
 * @FileDesc: 用于基础常用相关函数
 */

/**
 * Promise 延时定时器
 *
 * @author dyb-dev
 * @date 10/03/2024/  16:38:12
 * @export
 * @param {number} ms - 延时时间
 * @returns {*}  {Promise<void>}
 */
export const delay = (ms: number): Promise<void> => {

    return new Promise<void>(resolve => setTimeout(resolve, ms))

}

/** 任意函数类型声明 */
type TFuncType = (...args: any[]) => void

/**
 * 防抖函数
 *
 * @author dyb-dev
 * @date 18/08/2024/  17:04:51
 * @param {TFuncType} fn - 需要防抖的函数
 * @param {number} wait - 防抖时间
 * @param {boolean} [immediate=false] - 是否立即执行
 * @returns {*}  {TFuncType} - 防抖函数
 */
export const preventRepeatExec = (fn: TFuncType, wait: number, immediate = false): TFuncType => {

    let _timeout: ReturnType<typeof setTimeout> | undefined

    return (...args: any[]) => {

        const _this = <any>this

        // 延迟执行函数
        const later = function() {

            _timeout = undefined
            if (!immediate) {

                fn.apply(_this, args)

            }

        }

        if (immediate) {

            fn.apply(_this, args)

        }
        else {

            clearTimeout(_timeout)
            _timeout = setTimeout(later, wait)

        }

    }

}
