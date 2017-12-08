import Vue from 'vue'
export default new Vue({
  name: 'Data',
  data () {
    return {
      voice: '',
      receiver: '',
      content: '',
      status: 0 // 0:未读数据 1:读到语音 2:读到文本
    }
  }
})
