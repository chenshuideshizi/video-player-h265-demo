<template>
    <div id="box">
        <h1>h265测试视频</h1>
        <div id="Player"></div>
        <p>测试中...</p>
    </div>
</template>

<script>
import WasmPlayer from  '@easydarwin/easywasmplayer'
console.log('WasmPlayer', WasmPlayer)
export default {
    name: 'EasyWasmPlayerBox',
    data() {
        return {
            player: '',
            url: ''
            // url: 'http://127.0.0.1:10080/fvod/PnCsnxdMg/video.m3u8'
            // url: 'http://192.168.232.31:8000/stream_camera.flv'
            // url: 'https://mister-ben.github.io/videojs-flvjs/bbb.flv'
        }
    },
    mounted() {
        // 实例化播放器
        this.player = new WasmPlayer(null, 'Player', this.callbackfun)
        // 调用播放
        this.player.play(this.url, 1)

        this.initWs()
    },
    methods: {
        callbackfun(e) {
            console.log('callbackfun', e);
        },
        initWs() {
            // Create WebSocket connection.
            const socket = new WebSocket(this.url);
            

            // Connection opened
            socket.addEventListener('open', function (event) {
                socket.send('Hello Server!');
            });

            // Listen for messages
            socket.addEventListener('message', function (event) {
                // console.log('Message from server ', event.data);
            });

            socket.addEventListener('error', function(event) {
                console.error("WebSocket error observed:", event);
            })
        }
    } 
}
</script>

<style lang="scss" scoped>
    
</style>