<template>
<div class="center">
  <audio :src="Data.voice" preload="preload" ref="audio"></audio>
  <div class="green">
    <p>你收到的是一段语音</p>
    <p>马上点击播放吧</p>
    <button @click="control" class="voice-button" :class="{'pause-button':isPlaying, 'play-button':!isPlaying}"></button>
  </div>
</div>
</template>

<script>
import Data from './Data'
export default {
  name: 'Letter',
  data () {
    return {
      Data: Data,
      isPlaying: false
    }
  },
  mounted: function () {
    if (Data.status !== 1) {
      this.$router.push({ name: 'welcome' })
    }
    this.$refs.audio.onended = this.onEnded
  },
  methods: {
    control: function () {
      this.isPlaying = !this.isPlaying
      this.isPlaying ? this.$refs.audio.play() : this.$refs.audio.pause()
    },
    onEnded: function () {
      this.isPlaying = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  font-size: 1em;
  text-align: center;
  margin: 2em 0 0 0;
}
.center {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  text-align: center;
}
.green {
  color: #248f2e;
  opacity: 0.87;
}
.voice-button {
  -webkit-appearance:none;
  background:none;
  outline:none;
  border:0px;
  width: 7.71875em;
  height: 7.71875em;
  margin-top:4em;
  padding: 0;
  background-size: cover;
}
.play-button {
  background-image: url(../assets/play.png);
}
.pause-button {
  background-image: url(../assets/pause.png);
}
</style>
