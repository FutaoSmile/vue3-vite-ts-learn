<template>
  <h1>toRef的作用</h1>
  当前岁数:{{ age }}
  <button @click="addAge">加一岁</button>
  <G1 :age="age"></G1>
</template>

<script lang="ts">
import {defineComponent, reactive, ref} from "vue";
import G1 from './G1.vue'

export default defineComponent({
  // 可以通过父组件传递过来的值
  props: [],
  // 事件
  emits: [],
  // 依赖的组件
  components: {G1},
  /**
   * @param props 用于获取在props中定义的，父组件传递过来的值
   * @param attrs 获取当前组件标签上的属性，且未在props中声明的
   * @param slots
   * @param emit  用于发布事件
   * @param expose
   */
  setup(props, {attrs, slots, emit, expose}) {
    const age = ref<number>(18);
    return {
      age,
      addAge: () => {
        age.value += 1
      }
    }
  }
})

</script>

<style scoped>

</style>
