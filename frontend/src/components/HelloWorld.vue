<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
      <img src="../assets/team_logo/Astralis.svg"/>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Astralis
        </a>
      </li>
      <li>
      <img src="../assets/team_logo/Navi.svg"/>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Na'Vi
        </a>
      </li>
      <li>
      <img src="../assets/team_logo/Faze.svg"/>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Faze clan
        </a>
      </li>
      <li>
      <img src="../assets/team_logo/Liquid.svg"/>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Team Liquid
        </a>
      </li>
      <br>
      <li>
      <img src="../assets/team_logo/MIBR.svg"/>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          MIBR
        </a>
      </li>
    </ul>

    <ul>
      <li>
      <img src="../assets/team_logo/Mousesports.svg"/>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          Mousesports
        </a>
      </li>
      <li>
      <img src="../assets/team_logo/North.svg"/>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          North
        </a>
      </li>
      <li>
      <img src="../assets/team_logo/Heroic.svg"/>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          Heroic
        </a>
      </li>
      <li>
      <img src="../assets/team_logo/G2.svg"/>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          G2
        </a>
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
