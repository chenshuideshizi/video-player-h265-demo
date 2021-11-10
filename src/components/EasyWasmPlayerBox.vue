<template>
    <div id="box">
        <div id="Player"></div>
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
            // url: 'http://127.0.0.1:10080/fvod/PnCsnxdMg/video.m3u8'
            url: 'ws://192.168.237.189:28000'
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
            const socket = new WebSocket('ws://192.168.237.189:28000');
            

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