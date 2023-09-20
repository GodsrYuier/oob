<template>
  <div>
    <div class="common-layout">
      <el-container>
        <el-header>
          <span>公司logo</span>
          <span>电商后台管理系统</span>
          <el-button>退出</el-button>
        </el-header>
        <el-container>
          <el-aside width="200px">

            <el-menu active-text-color="#ffd04b" background-color="#292d3b" class="el-menu-vertical-demo"
              default-active="2" text-color="#fff" router>
              <el-sub-menu :index="item.path" v-for="item, index in goods">
                <template #title>
                  <el-icon>
                    <location />
                  </el-icon>
                  <span>{{ item.authName }}</span>
                </template>

                <el-menu-item :index="it.path" v-for="it, index in item.children">{{ it.authName }}</el-menu-item>



              </el-sub-menu>


            </el-menu>

          </el-aside>
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
import { useRouter, useRoute } from "vue-router";
import { getLeftiApi } from '@/utils/api'
const route = useRoute();
const router = useRouter();
const goods = <any>ref([])
getLeftiApi({}).then((res: any) => {
  console.log(res);
  goods.value = res.data.data
})
</script>

<style lang="scss" scoped>
.el-header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #2e333a;
  color: #fff;
}

.el-aside {
  height: calc(100vh - 60px);
  background-color: #292d3b;
}
</style>