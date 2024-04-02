<template>
  <el-breadcrumb class="breadcrumb" separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
    <el-breadcrumb-item
      ><a href="/">promotion management</a></el-breadcrumb-item
    >
    <el-breadcrumb-item>promotion list</el-breadcrumb-item>
    <el-breadcrumb-item>
      <span class="no-redirect">promotion detail</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

// 生成数组数据
const breadcrumbData = ref([])
const getBreadcrumData = () => {
  // 当前路由的标准化路由记录
  console.log(route.matched)
  breadcrumbData.value = route.matched.filter(
    (item) => item.meta && item.meta.title
  )
  console.log(breadcrumbData)
}

// 监听 路由变化
const route = useRoute()
watch(
  route,
  () => {
    getBreadcrumData()
  },
  {
    immediate: true
  }
)
</script>

<style lang="scss" scoped>
.breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;

  ::v-deep .no-redirect {
    color: #97a8be;
    cursor: text;
  }
}
</style>
