<template>
  <div>La
    <router-view></router-view>
  </div>
</template>
<script>
import Vue from "vue";

export default class AppComponent extends Vue{
  created() {
    console.log('app created');
  }
}
</script>