const homeModule={
    state:()=>({
        username:"小王",
        userId:"wdnmd_123456"
    }),
    getters:{
        usernameHandle(state){
            return "账号名称："+state.username;
        }
    },
}
export default{
    ...homeModule
}