<template>
  <div id="app">
    <top-menu :menuItems="items"></top-menu>
    <router-view/>
  </div>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import TopMenu from '@/components/TopMenu.vue';
import { MenuItem } from './types/model';
@Component({
  components: {
    'top-menu': TopMenu
  }
})
export default class App extends Vue {
  private items: MenuItem[] = [
    {
      name: "File",
      children: [
        {
          name: "Open Folder"
        },
        {
          name: "Save"
        },
        {
          name: "Save As"
        }
      ]
    }
  ];
}
</script>
<style lang="scss">
$--font-path: '~element-ui/lib/theme-chalk/fonts';
@import "~element-ui/packages/theme-chalk/src/index";


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html, body {
  padding: 0;
  margin: 0;
}
</style>
