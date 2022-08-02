<template>
  <h1>provider与inject可以实现在组件之间随意传值，很方便</h1>
  <select v-model="color">
    <option value="color:red">红</option>
    <option value="color:yellow">黄</option>
    <option value="color:blue">蓝</option>
    <option value="color:green">绿</option>
  </select>
  <hr>
  <I1></I1>
  <I2></I2>
</template>

<script lang="ts">
import {defineComponent, reactive, ref, provide} from "vue";
import I1 from "./I1.vue";
import I2 from "./I2.vue";

export default defineComponent({
  // 可以通过父组件传递过来的值
  props: {},
  // 事件
  emits: [],
  // 依赖的组件
  components: {I1, I2},
  /**
   * @param props 用于获取在props中定义的，父组件传递过来的值
   * @param attrs 获取当前组件标签上的属性，且未在props中声明的
   * @param slots
   * @param emit  用于发布事件
   * @param expose
   */
  setup(props, {attrs, slots, emit, expose}) {
    const color = ref(null)
    provide('color', color)
    return {color}
  }
})

</script>

<style scoped>

</style>
