<template>
  <div>
    <!-- 返回为字符串则以数据形式使用 -->
    <h1>{{ getTitle }}</h1>
    <h1>{{ allTitle }}</h1>
    <!--返回为函数则以函数形式调用 -->
    <h1>{{ splicingTitle("参数A") }}</h1>
    <h1>{{ splicingTitle2({value}) }}</h1>
  </div>
</template>

<script>
//先引入 mapGetters
import { mapGetters } from 'vuex'

export default {
  data(){
    return{
      value:"参数B"
    }
  },
  computed: {
    //使用对象展开运算符将 getter 混入 computed 对象中
    // 数组映射形式
    ...mapGetters(['getTitle','splicingTitle']),

    // 对象映射
    ...mapGetters({
      // 另取别名映射
      allTitle:'getTitleAll',
      splicingTitle2:'splicingTitle2',
    })
  }
}
</script>
