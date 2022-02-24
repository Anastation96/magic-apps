<template>
    <div class="page-wealth">
        <div>Канцелярия богатства</div>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component({
  name: 'page-wealth',
})
export default class PageWealthComponent extends Vue {
  created() {
    console.log('page wealth created');
  }  
}
</script>

<style>
.page-wealth {
    height: 100px;
    background-color: pink;
}
</style>