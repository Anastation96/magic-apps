<template>
    <div class="morning-pages"></div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({
    name: "morning-pages",
})
export default class MorningPagesComponent extends Vue {
    
}
</script>

<style lang="less">
.morning-pages {
    background-color: pink;
}
</style>