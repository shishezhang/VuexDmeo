<template>
    <div>
        <!-- 使用 homeModule 模块中的 state 需要通过 $store.state.homeModule.*** -->
        <h2>{{$store.state.homeModule.username}}</h2>
        <!-- 使用 homeModule 模块中的 getters 通过 $store.getters.*** 不需要带上homeModule模块名-->
        <h2>{{$store.getters.usernameHandle}}</h2>

        <h1>orderModule使用了命名空间</h1>
        <h2>{{$store.state.orderModule.orderCount}}</h2>
        <h2>{{$store.getters['orderModule/orderCountHandle']}}</h2>


        <h1>多层嵌套</h1>
        <h2>{{$store.getters['orderModule/orderItemModule/orderItem']}}</h2>
    </div>
</template>

<script>
export default{
    methods:{
  
    }
}

</script>