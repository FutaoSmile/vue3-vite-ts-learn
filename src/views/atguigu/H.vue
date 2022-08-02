<template>
  <h1>customRef实现input输入防抖</h1>
  <input v-model="inputValue">
  <input v-model="inputValue">
  <ul>
    <li v-for="watch in watchValues">
      {{ watch }}
    </li>
  </ul>
</template>

<script lang="ts">
import {defineComponent, customRef, reactive, ref, watch} from "vue";
import {useDebouncedRef} from "./useDebouncedRef";

export default defineComponent({
  // 可以通过父组件传递过来的值
  props: {},
  // 事件
  emits: [],
  // 依赖的组件
  components: {},
  /**
   * @param props 用于获取在props中定义的，父组件传递过来的值
   * @param attrs 获取当前组件标签上的属性，且未在props中声明的
   * @param slots
   * @param emit  用于发布事件
   * @param expose
   */
  setup(props, {attrs, slots, emit, expose}) {
    const inputValue = useDebouncedRef(null, 1000);
    const watchValues = ref<Array<string>>([])
    // 防抖之后监听，可以再调接口啥的
    watch(inputValue, (newValue) => {
      watchValues.value.push(newValue)
    })
    return {
      inputValue,
      watchValues
    }
  }
})

</script>

<style scoped>

</style>
