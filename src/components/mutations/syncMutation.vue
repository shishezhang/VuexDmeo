<template>
  <div>
      <h2>{{$store.state.count}}</h2>
      <button @click="addcount">提交同步方法</button>
      <button @click="syncAddcount">提交异步方法</button>
  </div>
</template>

<script>
export default {
    methods:{
        addcount(){
            this.$store.commit("addcount")
        },
        syncAddcount(){
            this.$store.commit("syncAddcount")
        }
    }
}
</script>
