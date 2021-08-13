<template>
    <div class="page-diary"></div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({
    name: "page-diary",
})
export default class PageDiaryComponent extends Vue {
    
}
</script>

<style lang="less">
.page-diary {
    background-color: green;
}
</style>