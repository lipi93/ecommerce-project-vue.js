<template>
  <Navbar/>
  <div id="layoutSidenav">
    <Sidebar/>
    <div id="layoutSidenav_content">
      <main>
        <div v-if="isSpinner()">
          <Loading />
        </div>
        <RouterView />
      </main>
      <footer class="py-4 bg-light mt-auto">
        <div class="container-fluid px-4">
          <div class="d-flex align-items-center justify-content-between small">
            <div class="text-muted">Copyright &copy; Your Website 2023</div>
            <div>
              <a href="#">Privacy Policy</a>
              &middot;
              <a href="#">Terms &amp; Conditions</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import { RouterView } from "vue-router";
import Sidebar from "@/components/admin/Sidebar.vue"
import Navbar from "@/components/admin/Navbar.vue"
import "@/assets/css/styles.css"
import "@/assets/js/scripts.js"
import Loading from "../components/Common/Loading.vue";

export default{
  components: {
    Sidebar,
    Navbar,
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
}
</script>
