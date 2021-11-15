<template>
    <div>
        <el-row>
            <el-col :span="24">
                <el-input v-model="inputUrl" />
                <el-button @click="handlePlay" type="primary">播放</el-button>
            </el-col>
        </el-row>
        <VideoPlayer :socketUrl="socketUrl" />
    </div>
</template>

<script>
import VideoPlayer from './components/VideoPlayer.vue'
export default {
    name: 'VideoPlyer',
    components: {
        VideoPlayer
    },
    data() {
        return {
            inputUrl: '',
            socketUrl: ''
        }
    },
    methods: {
        handlePlay() {
            this.socketUrl = this.inputUrl
        }
    }
}
</script>

<style lang="scss" scoped>
    
</style>