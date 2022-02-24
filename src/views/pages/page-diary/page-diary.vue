<template>
    <div class="page-diary">
        <div>Дневник</div>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component({
  name: 'page-diary',
})
export default class PageDiaryComponent extends Vue {
  created() {
    console.log('page diary created');
  }  
}
</script>

<style>
.page-diary {
    height: 100px;
    background-color: green;
}
</style>