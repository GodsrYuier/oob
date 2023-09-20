<template>
    <div>
        <el-alert title="消息提示的文案" type="info" center show-icon style="margin-bottom: 30px;" />
        <div style="width: 85%; margin: 0 auto;">
            <el-steps :active="active" finish-status="success">
                <el-step title="基本信息" />
                <el-step title="商品参数" />
                <el-step title="商品属性" />
                <el-step title="商品图片" />
                <el-step title="商品内容" />
                <el-step title="完成" />
            </el-steps>
        </div>
        <el-tabs :tab-position="tabPosition" class="demo-tabs" @tab-change="tabre" :before-leave="toggle">
            <el-tab-pane label="基本信息">
                <el-form :model="form" label-width="120px" label-position="top">
                    <el-form-item label="商品名称">
                        <el-input v-model="form.name" />
                    </el-form-item>
                    <el-form-item label="商品价格">
                        <el-input v-model="form.price" />
                    </el-form-item>
                    <el-form-item label="商品重量">
                        <el-input v-model="form.weight" />
                    </el-form-item>
                    <el-form-item label="商品数量">
                        <el-input v-model="form.size" />
                    </el-form-item>
                </el-form>
                <div class="m-4" style="display: flex; align-items: center;">
                    <p style="margin-right: 20px;">商品分类</p>
                    <el-cascader v-model="val" :options="options" :props="props" />
                </div>
            </el-tab-pane>
            <el-tab-pane label="商品参数"></el-tab-pane>
            <el-tab-pane label="商品属性"></el-tab-pane>
            <el-tab-pane label="商品图片"></el-tab-pane>
            <el-tab-pane label="商品内容"></el-tab-pane>
        </el-tabs>

    </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
import { useRouter, useRoute } from "vue-router";
import { getclsApi } from '@/utils/api'
import { ElMessage } from 'element-plus'
const active = ref(0)
const tabPosition = ref('left')
const route = useRoute();
const router = useRouter();
const options = <any>ref([])
const val = <any>ref([])
const form = reactive({
    name: '',
    price: '',
    weight: '',
    size: ''

})
const tabre = (god: any) => {
    console.log(god);
    active.value = god

}
getclsApi({ type: [1, 2, 3], pagenum: 1, pagesize: 5 }).then((res: any) => {
    console.log(res);
    options.value = res.data.data.result
})
const props = {
    label: 'cat_name',
    value: 'cat_id',
    children: 'children'
}

const handleChange = () => {

}
const toggle = () => {
    let foo = val.value.length != 0
    console.log(foo);

    if (!foo) {
        ElMessage({
            message: '请选择分类.',
            type: 'error',
        })
    }
    return foo
}
</script>

<style lang="scss" scoped>
.el-tab-pane {
    margin: 15px;
}
</style>