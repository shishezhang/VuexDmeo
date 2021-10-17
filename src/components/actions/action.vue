<template>
    <div>
        <h2>{{$store.state.count}}</h2>
        <button @click="addcountAction">执行同步 Action </button>
        <button @click="syncAddcountAction">执行异步 Action </button>

        <h2>{{$store.state.title2}}</h2>
        <button @click="updateTitle2Action">携带参数的 Action </button>
    </div>
</template>

<script>
export default {
    methods:{
        addcountAction(){
            this.$store.dispatch("addcountAction")
        },
        syncAddcountAction(){
            this.$store.dispatch("syncAddcountAction")
        },
        updateTitle2Action(){
             this.$store.dispatch({
                 type:'updateTitle2Action',
                 value:'action参数传递'
             })
        }
    }
}
</script>