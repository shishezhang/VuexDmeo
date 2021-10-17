<template>
  <div id="app">
    <h1 class="title">State基本用法</h1>
    <state />

    <hr/>
    
    <h1 class="title">State（mapState辅助函数）</h1>
    <mapState />

    <hr/>
    
    <h1 class="title">State（setState添加属性）</h1>
    <setState />
    
    <hr/>
    
    <h1 class="title">Getters</h1>
    <getters />

    <hr/>
    
    <h1 class="title">Getters(mapGetters辅助函数)</h1>
    <mapGetters />

    <hr/>
    
    <h1 class="title">Mutations</h1>
    <mutation />
    
    <hr/>
    
    <h1 class="title">Mutations(mapMutations辅助函数)</h1>
    <mapMutations />
    
    <hr/>

    <h1 class="title">Mutations 同步异步</h1>
    <syncMutation />

    <hr/>

    <h1 class="title">Actions</h1>
    <action />

    <hr/>

    <h1 class="title">Actions(mapActions辅助函数)</h1>
    <mapActions />

    <hr/>

    <h1 class="title">组合 Actions</h1>
    <combinationAction />

   <hr/>

    <h1 class="title">Modules</h1>
    <modules />

    
  </div>
</template>

<script>
import state from './components/state/State.vue'
import mapState from './components/state/mapState.vue'
import setState from './components/state/setState.vue'
import getters from './components/getters/Getters.vue'
import mapGetters from './components/getters/mapGetters.vue'
import mutation from './components/mutations/mutation.vue'
import mapMutations from './components/mutations/mapMutations.vue'
import syncMutation from './components/mutations/syncMutation.vue'
import action from './components/actions/action.vue'
import mapActions from './components/actions/mapActions.vue'
import combinationAction from './components/actions/combinationAction.vue'
import modules from './components/modules/index.vue'


export default {
  name: 'App',
  components: {
    state,
    mapState,
    getters,
    mapGetters,
    setState,
    mutation,
    mapMutations,
    syncMutation,
    action,
    mapActions,
    combinationAction,
    modules
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.title{
  color:red;
}
</style>
