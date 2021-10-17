<template>
  <div>
    <!-- 方式一：直接使用 -->
    <h1>{{ $store.getters.getTitle }}</h1>
    <h2>{{ titleAll }}</h2>
    <h3>{{ splicingTitle }}</h3>
    <h3>{{ splicingTitle2 }}</h3>

  </div>
</template>

<script>
export default {
  computed: {
    titleAll(){
      // 方式二：通过 this.$store.getters.** 进行获取
      return this.$store.getters.getTitleAll;
    },
    // 方式三：传递参数
    splicingTitle(){
      // 传递字符串参数
      return this.$store.getters.splicingTitle("这是传递的参数");
    },
    splicingTitle2(){
      // 传递对象参数
      return this.$store.getters.splicingTitle2({value:"对象传参"});
    }
  }
}
</script>
