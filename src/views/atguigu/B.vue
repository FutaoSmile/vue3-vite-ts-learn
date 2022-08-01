<template>
  <h1>reactive的使用</h1>
  {{ user }}
  <button @click="addWife">再来一房</button>

  <ul>
    <li v-for="school in schools">
      {{ school }}
    </li>
  </ul>
</template>


<script lang="ts">
import {defineComponent, reactive} from "vue";

export default defineComponent({
  setup() {
    // 返回的是一个响应式代理对象
    // 基于ES6 Proxy实现
    const user = reactive({
      username: '李达康',
      age: 18,
      wife: [{
        username: '小甜甜',
        age: 18,
        hobby: [
          '抽烟',
          '喝酒',
          '钢丝球'
        ]
      }]
    })

    const schoolArr = [{
      name: 'ecjtu',
      address: '江西省南昌市',
      xz: user
    }]

    const schools = reactive(schoolArr)

    const addWife = () => {
      // reactive 定义的响应式数据不需要通过.value访问
      user.wife.push(user.wife[0])
    }
    return {user, addWife, schools}
  }
})

</script>
