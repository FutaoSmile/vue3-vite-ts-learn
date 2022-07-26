<template>
  <h1>父子组件传值：我是父组件</h1>
  <hr/>
  <C :user-id="userId" sex="男" address="浙江省" @sleep="sleep" @wakeup="wakeup"></C>
</template>

<script lang="ts">
import {defineComponent, reactive, ref} from "vue";
import C from "./C.vue";

export default defineComponent({
  components: {C},
  setup() {
    const userId = ref(911)
    const sleep = function () {
      alert('sleep')
    }
    const wakeup = function () {
      alert('wakeup')
    }
    return {
      userId,
      sleep,
      wakeup
    }
  }
})

</script>
