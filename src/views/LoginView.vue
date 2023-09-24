<template>
  <div class="login my-5">
    <div class="container">
      <form @submit.prevent="handleSubmit">
        <div class="container-form" id="login">
          <h1 className="text-center">Login</h1>

          <div class="mb-3">
            <label for="email">Email:</label>
            <input
              type="email"
              name="email"
              class="form-control"
              v-model="this.data.email"
            />
          </div>
          <div class="mb-3">
            <label for="name">Password:</label>
            <input
              type="password"
              name="password"
              class="form-control"
              v-model="this.data.password"
            />
          </div>
          <br />
          <p>
            Don't have an account?
            <RouterLink to="/register">Register</RouterLink>
          </p>
          <br />

          <button type="submit" class="btn btn-primary">Sign In</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { useToast } from "vue-toastification";
import axios from "axios";
import { mapMutations } from "vuex";

import { isTokenDecode } from "../helper/Token";

export default {
  data() {
    return {
      data: {
        email: "",
        password: "",
      },
    };
  },

  methods: {
    ...mapMutations(["SET_LOADING_STATUS"]),
    async handleSubmit() {
      if (this.data.email === "") {
        useToast().error("Email is required");
      } else if (this.data.password === "" || this.data.password.length < 6) {
        useToast().error("Password is required and must be 6 charcter");
      } else {
        this.SET_LOADING_STATUS(true);
        let res = await axios.post(
          "http://127.0.0.1:8000/api/sign-in",
          this.data
        );
        this.SET_LOADING_STATUS(false);

        if (res.status === 200) {
          useToast().success("Login Successfull");
          localStorage.setItem("token", res.data["token"]);
          let tokenDecode = isTokenDecode(res.data["token"]);

          this.$store.dispatch("settoken", {
            token: res.data["token"],
            user: tokenDecode,
          });
          this.$router.push({ name: "/" });
        } else {
          useToast().error("Can't Login");
        }
      }
    },
  },
};
</script>

<style scoped>
#login {
  width: 50%;
  height: 80%;
  margin: auto;
  box-shadow: rgba(0, 0, 0, 24) 0px 3px 8px;
  padding: 20px;
  margin-bottom: 50px;
}
</style>
