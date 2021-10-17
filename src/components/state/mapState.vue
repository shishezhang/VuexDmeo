<template>
  <div>
    <h1>{{title}}</h1>
    <h1>{{titleA}}</h1>
    <h2>{{titleB}}</h2>
    <h3>{{titleC}}</h3>
    <h1>使用数组返回mapState：{{title1}}</h1>
    <h2>使用数组返回mapState：{{title2}}</h2>
    <h3>使用数组返回mapState：{{title3}}</h3>
  </div>
</template>

<script>
import { mapState } from 'vuex'  

export default {
  data(){
    return{
      mark:"mapState"
    }
  },
  computed: {
    // 原计算属性
    title () {
      return "原计算属性"
    },
    // 使用展开运算符
    ...mapState({
      //写法一 只有这样才能使用 this 获取相关数据 
      titleA(state){
        return this.mark + state.title1;
      },

      //写法二  使用箭头函数使代码变得简练
      titleB: state => state.title2,

      //写法三  'title3' 等同于 state => state.title3
      titleC: 'title3', 
    }),

    //使用数组返回将更加简单，不过无法进行数据操作
     ...mapState(['title1','title2','title3']),
    
  }
}
</script>
