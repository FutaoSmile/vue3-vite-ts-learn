<template>
  <h1>defineComponent、setup、ref</h1>
  cur count is: {{ count }}
  <button @click="addOne">add one</button>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";

export default defineComponent({
  setup() {
    // 通过ref函数定义一个基本类型的响应式对象
    const count = ref<number>(0)
    // 定义一个方法,ref定义的响应式数据需要通过ref访问
    const addOne = function () {
      count.value++
    }
    //setup方法返回一个对象，可以包含属性和方法
    return {
      addOne,
      count
    }
  }
})
</script>
