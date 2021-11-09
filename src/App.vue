<template>
  <div id="app">
    <el-row>
      <el-col :span="24">
        <EasyPlayer fluent autoplay stretch
          :videoUrl="videoUrl"
          :live="videoType === 'live'"
        ></EasyPlayer>
      </el-col>
    </el-row>

    <el-form>
      <el-form-item labe="视频地址">
        <el-input v-model="input" placeholder="请输入播放地址" size="mini"></el-input>
      </el-form-item>

      <el-form-item label="视频类型">
        <el-select v-model="videoType" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      
      <el-form-item>
        <el-button class="player-button" size="mini" type="success" @click="player">播放</el-button>

        <p>
          列如：http://127.0.0.1:10800/test.flv 
          <a href="http://www.easydarwin.org/easyplayer/" target="_blank">在线演示</a>
        </p>
      </el-form-item>
    </el-form>

    <div>
      <p>VOD-MP4: http://open.tsingsee.com/9D630168E9E748DD7ED885F2A0339031.mp4</p>
      <p>VOD-FLV: http://open.tsingsee.com/EasyNTS.flv</p>
      <p>VOD-HLS: https://node.imgio.in/demo/birds.m3u8</p>
      <p>LIVE-RTSP: rtmp://live.hkstv.hk.lxdns.com/live/hks2</p>
      <p>LIVE-FLV: https://mister-ben.github.io/videojs-flvjs/bbb.flv</p>
      <p>LIVE-HLS: https://node.imgio.in/demo/birds.m3u8</p>
    </div>
  </div>
</template>

<script>
  import EasyPlayer from "@easydarwin/easyplayer"
  export default {
    data() {
      return {
        videoUrl: '',
        videoType: 'live',
        input: '',
        options: [
          {label: 'VIDEO', value: 'vod'},
          {label: 'LIVE', value: 'live'}
        ]
      }
    },
    components: {
      EasyPlayer
    },
    mounted() {},
    methods: {
      player() {
        if(!this.input){
          this.$message.error('请输入播放地址地址！');
        }else{
          this.videoUrl = this.input
        }
      }
    }
  }
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    // text-align: center;
    color: #2c3e50;
  }

  .el-row,
  .div-btn {
    max-width: 800px;
    margin: auto;
  }

  .div-btn {
    padding: 5px 0;
  }

  .el-col {
    min-height: 300px;
    // border: 1px pink solid
  }

  .el-input {
    padding: 5px;
    box-sizing: border-box;
  }

  .player-button {
    margin: 5px;
    width: 100%;
  }
  p {
    font-size: 12px;
    color: #67c23a;
  }
  .el-input__inner:focus {
    border-color: #67c23a !important;
  }
</style>