<template>
<div class="content">
  <div v-html="Data.content" style="overflow: auto"></div>
</div>
</template>

<script>
import Data from './Data'
export default {
  name: 'Letter',
  data () {
    return {
      Data: Data
    }
  },
  mounted: function () {
    if (Data.status !== 2) {
      this.$router.push({ name: 'welcome' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  font-size: 1em;
  line-height: 2em;
  padding: 0.5em;
}
</style>
