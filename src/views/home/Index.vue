<template>
  <router-view></router-view>
  <Jumbotron> </Jumbotron>
  <Main></Main>
</template>

<script>
import Main from "../../components/Main.vue";
import Jumbotron from "../../components/Jumbotron.vue";
export default {
  components: { Main, Jumbotron },
};
</script>
