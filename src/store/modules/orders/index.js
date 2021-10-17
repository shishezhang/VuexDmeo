
import orderItemModule from './orderItem/index'

const orderModule={
    // 使用命名空间
    namespaced:true,
    state:()=>({
        orderCount:"99",
    }),
    getters:{
        orderCountHandle(state,getters,rootstate,rootgetters){
            console.log("orders中的rootgetters：",rootgetters);
            console.log("orders中的rootstate：",rootstate);
            return rootgetters.getTitle;
        }
    },
    modules: {
        orderItemModule
    }
}
export default{
    ...orderModule
}