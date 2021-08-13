<template>
    <div class="page-wealth"></div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({
    name: "page-wealth",
})
export default class PageWealthComponent extends Vue {
    
}
</script>

<style lang="less">
.page-wealth {
    background-color: pink;
}
</style>