<template>
  <v-app>
    <menuComponent></menuComponent>
    <v-container fluid>
      <v-row class="mt-5">
        <router-view></router-view>
      </v-row>
    </v-container>

  </v-app>
</template>

<script>

import menuComponent from "./components/utils/menuComponent";
export default {
  name: "App",
  data: () => ({
  }),
  components: {
    menuComponent,

  },
};
</script>
<style >
* {
  margin: 0;
  padding: 0;
}
#app {
  background-color: rgb(141, 117, 153);
  background-image: url(http://www.photobackgroundhd.com/wp-content/uploads/2019/08/4k-wallpaper-fantasy.jpg);
  background-size: cover;
}
</style>