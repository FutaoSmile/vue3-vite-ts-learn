<template>
  <h1>深入setup函数</h1>
  <div>VUE3中兼容vue2的语法：{{ vue2data }}
    <button @click="vue2Method">vue2Method</button>
  </div>
  <div>VUE3语法：{{ vue3data }}
    <button @click="v3m">vue3method</button>
  </div>

  <div>在子组件中触发事件：
    <button @click="$emit('sleep')">sleep</button>
    <button @click="wakeup">wakeup</button>
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive} from "vue";

export default defineComponent({
  // 可以通过父组件传递过来的值
  props: ['userId'],
  // 事件
  emits: ['sleep', 'wakeup'],
  /**
   *
   * @param props 用于获取在props中定义的，父组件传递过来的值
   * @param attrs 获取当前组件标签上的属性，且未在props中声明的
   * @param slots
   * @param emit  用于发布事件
   * @param expose
   */
  setup(props, {attrs, slots, emit, expose}) {
    console.log("setup执行")
    console.log('cur props.userId is: ', props.userId);
    console.log('cur attrs is: ', attrs);
    /*
        1.  setup()比beforeCreate()先执行
            说明setup()在执行的时候，组件还没有初始化，所以无法使用this来访问组件相关的api
        2.  setup()只会执行一次
        3.  setup()返回一个对象，对象的属性和方法可以在template模板中使用
        4.  setup()和data()、methods()(VUE2)中的属性都可以在template中使用
     */
    const vue3data = reactive({
      name: 'vu3',
      age: 28
    })
    const vue3method = function () {
      vue3data.age += 1
    }

    function wakeup() {
      // 发布事件
      emit('wakeup');
    }

    return {vue3data, v3m: vue3method, wakeup}
  },
  data() {
    return {
      vue2data: {
        name: 'vue2',
        age: 18
      }
    }
  },
  methods: {
    vue2Method: function () {
      this.vue2data.age += 1;
    }
  },
  beforeCreate() {
    console.log('beforeCreate执行')
  }
})

</script>
