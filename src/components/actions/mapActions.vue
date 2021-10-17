<template>
    <div>
        <h2>{{$store.state.count}}</h2>
        <button @click="addcountAction">执行同步 Action </button>
        <button @click="syncAddcountAction">执行异步 Action </button>

        <h2>{{$store.state.title2}}</h2>
        <button @click="btnClick">携带参数的 Action </button>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    methods:{
        ...mapActions(['addcountAction','syncAddcountAction','updateTitle2Action']),
        // 需要携带参数可以这样写
        btnClick(){
             this.updateTitle2Action({
                 value:'action参数传递'
             })
        }
    }
}
</script>