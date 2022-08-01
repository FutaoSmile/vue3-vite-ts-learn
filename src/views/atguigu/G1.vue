<template>
  实时计算平方:{{ cal }}
</template>

<script lang="ts">
import {computed, defineComponent, reactive, ref, Ref, toRef} from "vue";

export default defineComponent({
  // 可以通过父组件传递过来的值
  props: {
    age: {
      type: Number,
      required: true
    }
  },
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
    const squareMethod = function (age: Ref) {
      return computed(() => {
        return age.value * age.value
      })
    }
    // 因为squareMethod接收的参数类型要求是Ref的，所以这里需要将age转为ref对象
    const cal = squareMethod(toRef(props, 'age'))
    return {cal}
  }
})

</script>

<style scoped>

</style>
