<template>
    <div>
        <h2>{{$store.state.count}}</h2>
        <button @click="btnClick1">combinationA</button>
        <button @click="btnClick2">combinationB</button>
        <button @click="btnClick3">combinationC</button>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    methods:{
        ...mapActions(['combinationA','combinationB','combinationC']),
        btnClick1(){
             this.combinationA({
                 value:'action参数传递'
             }).then(res =>{
                console.log("dispatch 执行成功",res)
             }).catch(err => {
                console.log("dispatch 执行失败",err)
             })
        },
        btnClick2(){
             this.combinationB({
                 value:'action参数传递'
             }).then(res =>{
                console.log("dispatch 执行成功",res)
             }).catch(err => {
                console.log("dispatch 执行失败",err)
             })
        },
        btnClick3(){
             this.combinationC({
                 value:'action参数传递'
             }).then(res =>{
                console.log("dispatch 执行成功",res)
             }).catch(err => {
                console.log("dispatch 执行失败",err)
             })
        }
    }
}
</script>