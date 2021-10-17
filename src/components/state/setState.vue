<template>
  <div>
      <button @click="setObj">添加元素</button>

  </div>
</template>

<script>
export default {
  data(){
      return{}
  },
  computed: {

  },
  methods:{
      setObj(){
        //   通过set设置新参数
        this.$set(this.$store.state,"obj",{name:'姓名',name2:'姓名2'})
        console.log("通过set设置新参数:",this.$store.state.obj)

        //   使用展开运算符设置新参数
        this.$store.state.obj = {
          ...this.$store.state.obj,
          name2:"修改后的姓名2",
          name3:"姓名3"
        }
        console.log("使用展开运算符设置新参数:",this.$store.state.obj)
      }
  }
}
</script>
