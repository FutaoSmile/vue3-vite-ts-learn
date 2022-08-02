import {customRef} from "vue";

/**
 * 防抖
 * @param value
 * @param delay
 */
export function useDebouncedRef(value: any, delay: number = 200) {
    return customRef((track, trigger) => {
        var timeout: number;
        return {
            get() {
                track()
                return value
            },
            set(newValue) {
                clearTimeout(timeout)
                timeout = setTimeout(() => {
                    value = newValue
                    // 触发数数据渲染
                    trigger()
                }, delay);
            }
        }
    })
}
