<template>
  <div class="home">
    <div>Йо-хо-хо!</div>
    <div v-for="(url, i) in routesMenu" :key="i">
      <router-link :to="url"></router-link>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

@Component({
  name: 'home-component',
})
export default class HomeComponent extends Vue {
  routesMenu = [];

  created() {
    this.routesMenu = this.$router.options.routes.find(x => x.name == "Home").children;
    console.log('Home created, this.routesMenu', this.routesMenu);
  }
}
</script>
<style>
.home {
  width: 100%;
  height: 100%;
  background-color: #f7c7c7;
}
</style>