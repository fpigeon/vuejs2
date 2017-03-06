<template>
  <div id="app">
    <message>Hello There</message>
    <message>Another One</message>
    <message>Yet One More Baby</message>

  </div>
</template>

<script>
import Message from './components/Message.vue'
export default {
  name: 'app',

  components: {
    Message
  },

  data() {

    return {

    }
  }

}
</script>

<style lang="scss">

</style>
