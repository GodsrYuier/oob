<template>
    <div>
        <div class="mt-4" style="width: 520px;">
            <el-input v-model="input3" placeholder="Please input" class="input-with-select">
                <template #append>
                    <el-button :icon="Search" />
                </template>
            </el-input>
            <el-button type="primary" style="float: left;" @click="toadd">添加</el-button>
        </div>
        <el-table :data="tableData" style="width: 100%">
            <el-table-column type="index" label="#" width="180" />
            <el-table-column prop="goods_name" label="商品名称" width="180" />
            <el-table-column prop="goods_weight" label="商品重量" />
            <el-table-column prop="add_time" label="创建时间" />
            <el-table-column prop="address" label="操作">
                <template #default="scope">
                    <el-button type="primary" :icon="Edit" circle />
                    <el-button type="danger" :icon="Delete" circle />
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
import { useRouter, useRoute } from "vue-router";
import { getListiApi } from '@/utils/api'
import { Search, Edit, Delete } from '@element-plus/icons-vue'
const route = useRoute();
const input3 = ref('')
const tableData = ref([])
const router = useRouter();
getListiApi({ pagenum: 1, pagesize: 8 }).then((res: any) => {
    console.log(res);
    tableData.value = res.data.data.goods
})
const toadd = () => {
    router.push('/addhome')
}
</script>

<style lang="scss" scoped></style>