<template>
    <div>
        <div>
            <router-link :to="{name: 'EasyPlayer'}">
                <el-link>EasyPlayer</el-link>
            </router-link>
            <router-link :to="{name: 'EasyWasmPlayer'}">
                <el-link>EasyWasmPlayer</el-link>
            </router-link>
        </div>
        
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'EasyPlayer'
}
</script>

<style lang="scss" scoped>
    
</style>