<template>
    <div class="morning-pages">
        <div>Утренние страницы</div>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component({
  name: 'morning-pages',
})
export default class MorningPagesComponent extends Vue {
  created() {
    console.log('morning pages created');
  }  
}
</script>

<style lng="less">
.morning-pages {
    background-color: #67be84;
    width: 100%;
    height: 100px;
}
</style>