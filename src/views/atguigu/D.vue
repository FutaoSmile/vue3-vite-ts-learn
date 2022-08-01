<template>
  <h1>计算属性和监视 watch</h1>
  <div>
    姓氏：<input type="text" v-model="firstName">
    名称：<input type="text" v-model="lastName">
  </div>
  <div>
    <h2>计算属性与监听：</h2>
    <p>姓名（计算属性，只有get）：<input type="text" v-model="fullNameComputed"></p>
    <p>姓名（计算属性，有get和set，能够获取到响应式对象的值，并进行处理）：<input type="text"
                                                                            v-model="fullNameComputedUpdate"></p>
    <p>姓名（监视）：<input type="text" v-model="fullNameWatch"></p>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, reactive, ref, watch, watchEffect} from "vue";

export default defineComponent({
  setup() {

    const firstName = ref('')
    const lastName = ref('')

    /**
     * 如果只有getter的写法，即计算后的值不同步修改源数据
     */
    const fullNameComputed = computed(() => {
      return firstName.value + '_' + lastName.value;
    })


    /**
     * 具有set()方法的计算属性
     */
    const fullNameComputedUpdate = computed({
      get() {
        return firstName.value + '_' + lastName.value;
      },
      set(value: string) {
        firstName.value = value.split('_')[0]
        lastName.value = value.split('_')[1]
      }
    })

    const fullNameWatch = ref('')

    /**
     * 监视，在初始化的时候并不会执行
     * immediate 的作用是，在初始化的时候就默认执行一次
     * deep 的使用是：如果监视的对象是嵌套对象，则嵌套的对象发生了变化也进行监视
     */
    watch([firstName, lastName], (newValue, oldValue, onCleanup) => {
      fullNameWatch.value = newValue[0] + '_' + newValue[1]
    }, {immediate: true, deep: true})


    const fullNameWatchEffect = ref()
    /**
     * 1、watch是惰性执行，也就是只有监听的值发生变化的时候才会执行，
     *  但是watchEffect不同，每次代码加载watchEffect都会执行（忽略watch第三个参数的配置，如果修改配置项也可以实现立即执行）
     *
     * 2、watch需要传递监听的对象，watchEffect不需要
     *
     * 3、watch只能监听响应式数据：ref定义的属性和reactive定义的对象，如果直接监听reactive定义对象中的属性是不允许的，除非使用函数转换一下
     *
     * 4、watchEffect如果监听reactive定义的对象是不起作用的，只能监听对象中的属性。
     */
    watchEffect(() => {
      fullNameWatchEffect.value = firstName.value + '_' + lastName.value;
    })

    return {
      fullNameComputed,
      fullNameComputedUpdate,
      fullNameWatch,
      firstName,
      lastName
    }
  },
})

</script>
