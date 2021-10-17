<template>
  <div>
      <h2>{{$store.state.title1}}</h2>
      <button @click="updateTitle">修改状态(不传递额外参数)</button>

      <h2>{{$store.state.title2}}</h2>
      <button @click="updateTitle2">修改状态(传递额外参数)</button>
      <button @click="updateTitle3">修改状态(以对象形式传递额外参数)</button>
  </div>
</template>

<script>
export default {
    methods:{
        updateTitle(){
            //直接提交不携带参数
            this.$store.commit("updateTitle")
        },
        updateTitle2(){
            // 提交并携带一个对象作为额外参数
            this.$store.commit("updateTitle2",{value:"额外参数"})
        },
        updateTitle3(){
            // 以对象的形式提交，并携带参数
            this.$store.commit({
                type:"updateTitle2",
                value:"以对象形式提交额外参数"
            })
        }
    }
}
</script>
