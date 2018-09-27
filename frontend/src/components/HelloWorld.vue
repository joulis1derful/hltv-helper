<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <img src="../assets/logos/Astralis.svg"/>
        <input type="checkbox" class="chosen-team" value="astralis/6665"/>
        <label>Astralis</label>
      </li>
      <li>
        <img src="../assets/logos/Navi.svg"/>
        <input type="checkbox" class="chosen-team" value="natus-vincere/4608"/>
        <label>Natus Vincere</label>
      </li>
      <li>
        <img src="../assets/logos/Faze.svg"/>
        <input type="checkbox" class="chosen-team" value="faze/6667"/>
        <label>Faze clan</label>
      </li>
      <li>
        <img src="../assets/logos/Liquid.svg"/>
        <input type="checkbox" class="chosen-team" value="liquid/5973"/>
        <label>Team Liquid</label>
      </li>

      <li>
        <img src="../assets/logos/MIBR.svg"/>
        <input type="checkbox" class="chosen-team" value="mibr/9215"/>
        <label>MIBR</label>
      </li>
    </ul>

    <ul>
      <li>
        <img src="../assets/logos/Mousesports.svg"/>
        <input type="checkbox" class="chosen-team" value="mousesports/4494"/>
        <label>Mousesports</label>
      </li>
      <li>
        <img src="../assets/logos/North.svg"/>
        <input type="checkbox" class="chosen-team" value="north/7533"/>
        <label>North</label>
      </li>
      <li>
        <img src="../assets/logos/Heroic.svg"/>
        <input type="checkbox" class="chosen-team" value="heroic/7115"/>
        <label>Heroic</label>
      </li>
      <li>
        <img src="../assets/logos/G2.svg"/>
        <input type="checkbox" class="chosen-team" value="g2/5995"/>
        <label>G2</label>
      </li>
      <li>
        <img src="../assets/logos/Nip.svg"/>
        <input type="checkbox" class="chosen-team" value="nip/4411"/>
        <label>NIP</label>
      </li>
    </ul>
    <button v-on:click="selectChecked()" class="send">Continue</button>
  </div>
</template>

<script>
const axios = require('axios')
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Choose teams you want to follow on',
    };
  },
  methods: {
    selectChecked: function() {
      const inputElements = document.getElementsByClassName('chosen-team')
      const teamsToContinueWith = []
      for (let i = 0; i < inputElements.length; i++) {
        if (inputElements[i].checked) {
          teamsToContinueWith.push(inputElements[i].value)
        }
      }
      this.fireMe(teamsToContinueWith)
    },
    fireMe: function(teams) {
      // TODO send teams as body in POST request to backend
      const options = {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        }
      }
      axios
        .get('http://localhost:30003/')
        .then(response => {
          console.log(response)
        })
        .catch(error => console.log(error));
    }
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.send {
  color: white;
  background-color: #0074D9;
  border-radius: 10px;
  margin-top: 1.05em;
  padding: 10px 150px;
  font-size: 1.5em;
}
</style>
