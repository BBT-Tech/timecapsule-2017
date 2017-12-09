<template>
  <div class="center">
    <div class="green">
      <p>你收到了一封来自半年前的信</p>
      <p>马上输入兑换码查看吧</p>
      <input type="text" class="input-text green" v-model.trim="code"/>
      <p class="error-noticer" >{{errorInfo}}</p>
      <button class="submit-button" @click="getLetter" ref="submit_button"><span ref="submit_button_text">提交</span></button>
    </div>

  </div>
</template>

<script>
import {getLetter} from '@/helpers/api'
import Data from './Data'
export default {
  name: 'Welcome',
  data () {
    return {
      code: '',
      errorInfo: ' '
    }
  },
  methods: {
    getLetter () {
      this.$refs.submit_button_text.innerHTML = '梯仔取信中'
      getLetter(this.code).then(r => {
        switch (parseInt(r.error)) {
          case 0:
            if (r.voice !== null) {
              Data.voice = String(r.voice.replace(/.amr/, '.mp3'))
            }
            Data.content = r.content
            Data.receiver = r.receiver
            if (r.voice === null || r.voice === '') {
              Data.status = 2
              this.$router.push({ name: 'letter' })
            } else {
              Data.status = 1
              this.$router.push({ name: 'voice' })
            }
            break
          case 404:
            this.errorInfo = '输入的兑换码不对哦'
            this.$refs.submit_button_text.innerHTML = '提交'
            break
          default:
            this.errorInfo = '网络出了点问题哦，请重试'
            this.$refs.submit_button_text.innerHTML = '提交'
            break
        }
      })
      .catch((r) => {
        this.$refs.submit_button_text.innerHTML = '提交'
      })
    }
  },
  watch: {
    code: function (newVal) {
      this.code = newVal.toUpperCase()
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
input{
  -webkit-appearance:none;
   background:none;
   outline:none;
   border:0px;
   border-radius: 0;
}
.input-text{
  margin-top: 1.25em;
  font-size: 1em;
  line-height: 2.5em;
  text-align: center;
  border-color: #248f2e;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  width: 6.25em;
}
.error-noticer {
  color:#eb6100;
  opacity: 0.87;
  margin: 0.5em 0 0 0;
  font-size: 0.75em;
  line-height: 0.75em;
}
.submit-button {
  background:none;
  outline:none;
  border:0px;
  border-radius: 4px;
  background-color: #409d49;
  line-height: 2.375em;
  height: 2.375em;
  font-size: 1em;
  color: #ffffff;

  margin-top: 2.75em;
  min-width: 6.25em;
}
.submit-button > span {
  opacity: 0.87;
}
</style>
