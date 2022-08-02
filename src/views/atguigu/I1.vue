<template>
  <p :style="color">布林肯称「是否访问台湾将由佩洛西自行决定」，推特网友嘲讽布林肯逻辑，如何评价他的表态？</p>
</template>

<script lang="ts">
import {defineComponent, inject, reactive, ref, watch} from "vue";

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
    return {color: inject('color')}
  }
})

</script>

<style scoped>

</style>
