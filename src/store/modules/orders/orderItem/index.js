const orderItemModule={
    // 使用命名空间，如果子嵌套模块不使用命名空间则会继承父模块命名空间
    namespaced:true,
    state:()=>({
        name:"子订单",
    }),
    getters:{
        //调用 ：$store.getters['orderModule/orderItemModule/orderItem']
        orderItem(state,getters,rootstate,rootgetters){
            console.log("orderItem中的rootgetters：",rootgetters);
            console.log("orderItem中的rootstate：",rootstate);
            return state.name;
        }
    },
}

export default{
    ...orderItemModule
}