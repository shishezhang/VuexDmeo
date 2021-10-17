<template>
  <div>
    <!-- 方式一：直接在双括号中使用 -->
    <h1>{{$store.state.title1}}</h1>
    <h2>{{title2}}</h2>
    <h3>{{title3}}</h3>
  </div>
</template>

<script>
export default {
  data(){
    return{
      title2: ""
    }
  },
  created(){
    // 方式二：在生命周期钩子函数中给data赋值
    this.title2 = this.$store.state.title2
  },
  computed: {
    // 方式三：在计算属性中引入
    title3 () {
      return this.$store.state.title3
    }
  }
}
</script>
