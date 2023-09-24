<template>
  <Header />
  <div v-if="isSpinner()">
    <Loading />
  </div>
  <RouterView />
  <Footer />
</template>

<script>
import { RouterView } from "vue-router";
import Header from "@/components/Common/Header.vue";
import Footer from "@/components/Common/Footer.vue";
import Loading from "../components/Common/Loading.vue";

export default {
  name: "Client",
  components: {
    Header,
    Footer,
    Loading,
  },
  created() {
    this.isSpinner();
  },
  methods: {
    isSpinner() {
      return this.$store.getters.isLoading;
    },
  },
};
</script>
