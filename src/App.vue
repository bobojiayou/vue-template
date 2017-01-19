<template>
  <div id="wrapper">
    <nav class="navbar navbar-default">
      <v-pheader title="严选采购系统">
        <v-header>
    </nav>
    <div class="row">
      <div class="col-sm-2">
        <v-sidebar></v-sidebar>
      </div>

      <div class="col-sm-8">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import { Sidebar, Pheader } from './components/index'
export default {
  name: 'app',
  components: {
    Sidebar,
    Pheader
  }
}
</script>