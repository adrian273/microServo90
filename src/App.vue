<template>
  <div id="app">
    {{ degress }}
    <br>
    <input type="range" name="" v-model="degress" @change="sendData" id="" max="180">
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      idList: [],
      degress: 90
    };
  },
  mounted() {
     this.$socket.$subscribe('user-connected', (data) => {
      
     });
  },
  methods: {
    sendData() {
      this.$socket.client.emit('move', this.degress)
    },
    ServoStop() {
      this.$socket.client.emit('app', 'stop')
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
