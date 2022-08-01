<template>
  <h1>toRefs</h1>
  <span>可以将对象的每个属性都变成ref对象</span>
  {{ username }}
  {{ age }}
  {{ hobby }}
</template>

<script lang="ts">
import {defineComponent, reactive, ref, onMounted, toRefs} from "vue";

export default defineComponent({
  name: 'A',
  // 可以通过父组件传递过来的值
  props: [],
  // 事件
  emits: [],
  /**
   *
   * @param props 用于获取在props中定义的，父组件传递过来的值
   * @param attrs 获取当前组件标签上的属性，且未在props中声明的
   * @param slots
   * @param emit  用于发布事件
   * @param expose000000
   */
  setup(props, {attrs, slots, emit, expose}) {
    // 将loadData()方法返回的对象的每个属性都变成ref响应式的
    const {username, age, hobby} = toRefs(loadData())
    return {username, age, hobby}
  },
})

function loadData() {
  return {
    username: '侯亮平',
    age: 188,
    hobby: ['抽香烟', '喝花酒', '烫大头']
  }
}

</script>
