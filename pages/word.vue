<template> 

  <div class="container">
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
    <div>
      <input v-model="word">
      <button @click="addData">Click</button>
    </div>
  </div>
</template>
<script>
const axios = require('axios');
let url = "https://kusoyarouchan-default-rtdb.firebaseio.com/records";

export default{
  data() {
    return{
      title: 'Axios',
      message: 'axios sample.',
      word: ''
    };
  },

  methods: {
    addData: function() {
      let date = new Date();
      let Y =date.getFullYear();
      let M = ("00" + (date.getMonth()+1)).slice(-2);
      let D = ("00" + date.getDate()).slice(-2);
      let h = ("00" + date.getHours()).slice(-2);
      let m = ("00" + date.getMinutes()).slice(-2);
      let s = ("00" + date.getSeconds()).slice(-2);
      let timestamp = Y + M + D + h + m + s;
      let add_url = url + '/' + timestamp + '.json';
      let data = {
        'word': this.word
      };
      axios.put(add_url, data).then((re)=>{
        this.word = '';
      });
    }    
  }
}
</script>

<style>
  ul {
    margin: 0px 10px;
    background-color: aliceblue;
  }
  li {
    padding :10px;
    font-size: 16pt;
  }
</style>
