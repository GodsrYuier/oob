<template>
    <div class="box">
        <div class="login">
            <h2>电商后台管理系统</h2>

            <div class="god">
                <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="0" class="demo-ruleForm"
                    status-icon>
                    <el-form-item label="" prop="name">
                        <el-input v-model="ruleForm.name" :prefix-icon="User" />
                    </el-form-item>
                    <el-form-item label="" prop="password">
                        <el-input v-model="ruleForm.password" :prefix-icon="Lock" />
                    </el-form-item>
                </el-form>
                <p>
                    <el-button type="primary" style="margin-left: 300px;" @click="toHome">登录</el-button>
                    <el-button type="info">重置</el-button>
                </p>
            </div>
        </div>

    </div>
</template>
    
<script lang="ts" setup>
import { ref, reactive } from "vue";
import { useRouter, useRoute } from "vue-router";
import {
    User,
    Lock
} from '@element-plus/icons-vue'
import { getLoginApi } from '@/utils/api'
const ruleForm = reactive({
    name: '',
    password: ''
})
const route = useRoute();
const router = useRouter();

const rules = reactive({
    name: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
    ],
})

const toHome = () => {
    getLoginApi({ username: ruleForm.name, password: ruleForm.password }).then((res: any) => {
        console.log(res);
        if (res.data.meta.status == 200) {
            localStorage.setItem('token', res.data.data.token)
            router.push('/')
        } else {
            return false

        }
    })
}
</script>
<style lang="scss" scoped>
.box {
    width: 100%;
    height: 100vh;
    background-color: #214164;

    .login {
        width: 600px;
        height: 300px;
        background-color: #fff;
        text-align: center;
        padding: 10px;
        border-radius: 15px;
        box-shadow: 2px 2px 3px 3px #fff;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        .el-form-item {
            margin: 35px;
        }
    }
}
</style>