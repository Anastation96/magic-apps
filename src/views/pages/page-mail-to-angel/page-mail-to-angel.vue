<template>
    <div class="page-mail-to-angel">
        <div>Письмо ангелу</div>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component({
  name: 'page-mail-to-angel',
})
export default class PageMailToAngelComponent extends Vue {
  created() {
    console.log('page mail to angel created');
  }  
}
</script>

<style>
.page-mail-to-angel {
    height: 100px;
    background-color: blue;
}
</style>