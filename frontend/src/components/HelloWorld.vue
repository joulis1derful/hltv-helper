<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <img src="../assets/logos/Astralis.svg"/>
        <input type="checkbox"/>
        <label>Astralis</label>
      </li>
      <li>
        <img src="../assets/logos/Navi.svg"/>
        <input type="checkbox"/>
        <label>Na'Vi</label>
      </li>
      <li>
        <img src="../assets/logos/Faze.svg"/>
        <input type="checkbox"/>
        <label>Faze clan</label>
      </li>
      <li>
        <img src="../assets/logos/Liquid.svg"/>
        <input type="checkbox"/>
        <label>Team Liquid</label>
      </li>

      <li>
        <img src="../assets/logos/MIBR.svg"/>
        <input type="checkbox"/>
        <label>MIBR</label>
      </li>
    </ul>

    <ul>
      <li>
        <img src="../assets/logos/Mousesports.svg"/>
        <input type="checkbox"/>
        <label>Mousesports</label>
      </li>
      <li>
        <img src="../assets/logos/North.svg"/>
        <input type="checkbox"/>
        <label>North</label>
      </li>
      <li>
        <img src="../assets/logos/Heroic.svg"/>
        <input type="checkbox"/>
        <label>Heroic</label>
      </li>
      <li>
        <img src="../assets/logos/G2.svg"/>
        <input type="checkbox"/>
        <label>G2</label>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Choose teams you want to follow on',
    };
  },
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
</style>
