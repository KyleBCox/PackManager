<template>
  <div>
    <el-menu
      mode="horizontal"
      @select="onSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
    
    <template  v-for="(item, i) in menuItems">
      <el-menu-item :index="i" :key="i" v-if="item.children == null || item.children.length <= 0">{{item.name}}</el-menu-item>
      <el-submenu :index="i" :key="i" v-if="item.children != null || item.children.length >= 0">
           <template slot="title">{{item.name}}</template>
           <template  v-for="(child, j) in item.children">
            <el-menu-item :key="i + '-' + j" :index="i + '-' + j">{{child.name}}</el-menu-item>
           </template>
      </el-submenu>
    </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import {MenuItem} from '@/types/model'
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class TopMenu extends Vue {

    @Prop()
    menuItems!: MenuItem[];

    private onSelect() {
        this.$emit('selected', {})
    }
}
</script>

<style lang="scss" scoped></style>
