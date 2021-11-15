<template>
  <div id="video-wrapper" style="width: 500px; height: 500px;">
    <canvas
      id="video-canvas"
    />
  </div>
</template>

<script>
import JSMpeg from '@cycjimmy/jsmpeg-player';
export default {
  name: 'VideoPlayer',
  props: {
    socketUrl: {
      type: String,
      default: ''
    }
  },
  watch: {
    socketUrl: {
      handler(newVal) {
        this.doConnectSocket()
      }
    }
  },
  data() {
    return {
      canvas: null,
      player: null
    }
  },
  mounted() {
    this.canvas = this.$refs.rtspCanvas
    this.$nextTick(() => {
      this.doConnectSocket()
    })
  },
  beforeDestroy() {
    if (this.player) {
      this.player.destroy()
      this.player = null
    }
  },
  methods: {
    onPlay(e) {
      this.$emit('startPlay')
    },
    doConnectSocket() {
      if (!this.socketUrl) {
        return
      }
      this.player = new JSMpeg.VideoElement(
        '#video-wrapper',
        this.socketUrl, 
        {
          canvas: '#video-canvas',
          autoplay: false, // 是否自动播放
          loop: false,
          autoSetWrapperSize: true, // 当视频加载完成，自动设置 wrapper 元素的宽高
          control: true,
          decodeFirstFrame: false,
        }
      )
    }
  }
}
</script>

<style type="text/css" lang="scss">
  #video-wrapper {
    width: 500px;
    height: 500px;
  }
</style>
