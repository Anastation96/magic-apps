<template>
    <div class="page-self-working">
        <div>Проработка блокировок</div>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component({
  name: 'page-self-working',
})
export default class PageSelfWorkingComponent extends Vue {
  created() {
    console.log('page self working created');
  }  
}
</script>

<style>
.page-self-working {
    height: 100px;
    background-color: rgb(241, 98, 230);
}
</style>