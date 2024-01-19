<!-- eslint-disable no-unused-vars -->
<template>
   <img class="logo" src="../assets/vueimg.png" />
   <h1>Login</h1>
   <div class="register">
      <!-- <input type="text" v-model="name" placeholder="Enter Your Name" /> -->
      <input type="text" v-model="email" placeholder="Enter Email" />
      <input type="password" v-model="password" placeholder="Enter Password" />
      <button v-on:click="signUp">Login</button>
      <p>
         <router-link to="/login">Sign-Up</router-link>
      </p>
   </div>
</template>
<script>
import axios from 'axios';
// eslint-disable-next-line no-unused-vars
// import { onMounted } from 'vue'; 

export default {
   name: 'SignUp',
   data() {
      return {
        // name: '',
         email: '',
         password: '',
      }
   },
  
    
    
    methods: {
       async signUp() {
//         // console.warn("signUp", this.name, this.email, this.password);
//                          //console.log('Click',this.name,this.email,this.password);
        let result = await axios.post("http://localhost:3000/users", { 
           // name:this.name,
            email:this.email,
           password:this.password,

        });
          console.warn(result);
          
         if (result.status==201) {
          
            localStorage.setItem("user-info", JSON.stringify(result.data))
           
            this.$router.push({ name: 'Home' })
          }
       }
    },

   mounted() {
       let user = localStorage.getItem('user-info');
       if (user) {
          this.$router.push({ name: 'Home' })
       }
    }


}

</script>
<!-- <style scoped>
    input {
        margin: 10px;
        width: 300px;
    }
</style> -->