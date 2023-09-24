
import { RouterLink } from 'vue-router';
<template>
     <div class="login my-5">
      <div class="container">
        <form @submit.prevent="handleSubmit">
          <div class="container-form" id="register">
                  <h1 className="text-center">Register</h1>

                  <div class="mb-3">
                      <label for="name">Nane:</label>
                      <input type="name" name="name" class="form-control" v-model="this.data.name">
                  </div>
  
                  <div class="mb-3">
                      <label for="email">Email:</label>
                      <input type="email" name="email" class="form-control" v-model="this.data.email" >
                  </div>
                  <div class="mb-3">
                      <label for="password">Password:</label>
                      <input type="password" name="password" class="form-control" v-model="this.data.password">
                  </div>
                  <div class="mb-3">
                      <label for="cpassword">Confirm Password:</label>
                      <input type="password" name="cpassword" class="form-control" v-model="this.data.cpassword">
                  </div>
                  <br>
                  <p>Do you have account? <RouterLink to="/login">Login</RouterLink></p>
                  <br>
  
                  <button type="submit" class="btn btn-primary">Sign Up</button>
              </div>
        </form>
      </div>
    </div>
</template>

<script>
import { useToast } from "vue-toastification";
import axios from "axios";
import { mapMutations } from 'vuex';
 export default{
  data(){
    return {
      data:{
        name: "",
        email: "",
        password: "",
        cpassword: ""
      }
    }
  },
  methods: {
    ...mapMutations(['SET_LOADING_STATUS']),
  async handleSubmit(){
      if(this.data.name === ""){
        useToast().error("Name is required")
      }else if(this.data.email === ""){
        useToast().error("Email is required")
      }else if(this.data.password === "" || this.data.password.length < 6){
        useToast().error("Password is required and must be 6 charcter")
      }else if(this.data.cpassword === "" || this.data.cpassword.length < 6){
        useToast().error("Confrim Password is required and must be 6 charcter")
      }else if(this.data.password !==  this.data.cpassword){
        useToast().error("Password and Confrim Password doesn't match")
      }else{
        this.SET_LOADING_STATUS(true)
        let res = await axios.post("http://127.0.0.1:8000/api/sign-up",this.data)
        this.SET_LOADING_STATUS(false)
        if(res.status === 200){
          useToast().success("Register Successfull")
          this.$router.push({ name: 'login'});
        }else{
          useToast().error("Can't Register")
        }

      }
    }
  }
 }
</script>
  
  
  <style>

#register {
      width: 50%;
      height: 80%;
      margin: auto;
      box-shadow: rgba(0, 0, 0, 24) 0px 3px 8px;
      padding: 20px;
      margin-bottom: 50px;
  }

</style>
  