import Vue from 'vue'
import Vuex from 'vuex'
// 导入home 模块
import homeModule from './modules/home/index'
// 导入order 模块
import orderModule from './modules/orders/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title1:"这是标题1",
    title2:"这是标题2",
    title3:"这是标题3",
    count:0
  },

  getters: {
    // 使用 state 参数，拼接 title1 和 title2 属性
    getTitle(state){
      return  state.title1 + state.title2;
    },
    // 使用 getters参数, 拼接 getTitle 和 title3
    getTitleAll(state,getters){
      return getters.getTitle + state.title3;
    },
    //返回一个函数，并接收一个传递参数
    splicingTitle(state){
      return function(value){
        return state.title1 + value;
      }
    },
    //使用箭头函数和接受传递的对象参数
    splicingTitle2: (state) => (obj) => state.title1 + obj.value,
  },

  mutations: {
    // updateTitle 作为type  ，箭头函数作为 mutation 的回调函数
    "updateTitle":(state)=>{
      state.title1 = "mutation修改后的标题1"
    },

    // 简写形式，并传入额外参数
    updateTitle2(state,obj){
      state.title2 = "mutation修改后的标题2" + obj.value;
    },

    // 同步函数
    addcount(state){
      state.count++;
    },
    // 异步函数
    syncAddcount(state){
      setTimeout(() => {
        state.count++;
      }, 1000);
    }
  },

  actions: {
    // 当 addcountAction 被执行时，会提交一个 mutation
    addcountAction(context){
      context.commit("addcount");
    },
    // 异步Actions
    syncAddcountAction(context){
      setTimeout(() => {
        context.commit("addcount");
      }, 1000);
    },
    //携带参数
    updateTitle2Action(context,obj){
      context.commit({
        type:"updateTitle2",
        value:obj.value
      });
    },


    // 异步 action 不返回 Promise
    combinationA(context){
      setTimeout(() => {
        context.commit("addcount");
        console.log("combinationA执行完成");
      }, 2000);
    },
    // 异步 action 返回 Promise
    combinationB(context){
      return new Promise((resolve) =>{
        setTimeout(() => {
          context.commit("addcount");
          console.log("combinationB执行完成");
          resolve();
        }, 2000);
      })
    },
    // 组合 action ,  combinationB 执行完成之后再执行 combinationC
    combinationC(context){
      return new Promise( resolve =>{
        context.dispatch("combinationB").then(()=>{
          context.commit("addcount");
          resolve();
          console.log("combinationC执行完成");
        })
      })
    }

  },

  modules: {
    homeModule,
    orderModule
  }
})
