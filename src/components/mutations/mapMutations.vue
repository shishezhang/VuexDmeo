<template>
  <div>
      <h2>{{$store.state.title1}}</h2>
      <button @click="updateTitle">修改状态(不传递额外参数)</button>

      <h2>{{$store.state.title2}}</h2>
      <button @click="updateTitle2({value:'mapMutations'})">修改状态(传递额外参数)</button>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
    methods:{
        ...mapMutations(['updateTitle','updateTitle2']),
        ...mapMutations({
            //改变映射名称
            updatename:'updateTitle2'
        }),
    }
}
</script>
