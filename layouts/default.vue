<template>
  <div>
    <navbar />
    <div>
      <Nuxt />
    </div>
  </div>
</template>

<script>
import navbar from "../components/generals/navbar";
export default {
  components: {
    navbar
  }
};
</script>

<style scoped>
* {
  font-family: "Roboto", sans-serif;
}
</style>
