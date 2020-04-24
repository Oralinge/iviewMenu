<template>
  <!-- 二级菜单 -->
  <div class='con'>
    <Menu :theme="theme2" style='width:240px;float:left'>
      <div v-for="(item,index) in menuList" :key="'menu'+index">
        <!-- 无子菜单 -->
        <MenuItem :name="item.name" :to="item.to" v-if="typeof(item.children)!=='undefined' && item.children.length===0">
        <Icon type="ios-navigate"></Icon>
        <span>{{item.title}}</span>
        </MenuItem>
        <!-- 有子菜单 -->
        <Submenu :name="item.name" v-else>
          <template slot="title">
            <Icon type="ios-paper" />
            <span>{{item.title}}</span>
          </template>
          <MenuItem :name="subItem.name" :to="subItem.to" v-for="(subItem,index) in item.children" :key="index">{{subItem.title}}</MenuItem>
        </Submenu>
      </div>
    </Menu>
    <div class='pad'>
      <router-view />
    </div>
  </div>

</template>
<script>
export default {
  data () {
    return {
      theme2: 'light',
      menuList: [
        {
          title: "内容管理",
          name: "1",
          children: [
            {
              title: "文章管理",
              name: "1-1",
              to: "/article"
            },
            {
              title: "评论管理",
              name: "1-2",
              to: "/comments"
            },
            {
              title: "举报信息",
              name: "1-3",
              to: "/report"
            },
            {
              title: "test1信息",
              name: "1-4",
              to: "/test1"
            }
          ]
        },
        {
          title: "用户管理",
          name: "2",
          children: [
            {
              title: "新增用户",
              name: "2-1",
              to: "/addUser"
            },
            {
              title: "活跃用户",
              name: "2-2",
              to: "/active"
            }
          ]
        },
        {
          title: "统计分析",
          name: "3",
          children: [
            {
              title: "新增和启动",
              name: "3-1",
              to: "/addAndStart"
            },
            {
              title: "活跃分析",
              name: "3-2",
              to: "activeAnalyze"
            },
            {
              title: "时段分析",
              name: "3-3",
              to: "/activeAnalyze"
            }
          ]
        },
        {
          title: "报表中心",
          name: "4",
          children: [
            {
              title: "数据报表",
              name: "4-1",
              to: "/activeAnalyze"
            },
            {
              title: "运营报表",
              name: "4-2",
              to: "/activeAnalyze"
            },
            {
              title: "操作报表",
              name: "4-3",
              to: "/activeAnalyze"
            },
            {
              title: "异步通知",
              name: "4-6",
              to: "/activeAnalyze"
            }
          ]
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
.con {
  width: 100%;
  display: flex;
  .pad {
    margin: 5px;
    float: left;
    background: red;
    flex: 1;
  }
}
</style>
