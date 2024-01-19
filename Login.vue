<template>
    <img class="logo" src="../assets/vueimg.png" />
    <h1>Sign-Up</h1>
    <div class="login">
        <input type="text" v-model="name" placeholder="Enter Your Name" />
        <input type="text" v-model="email" placeholder="Enter Email" />
        <input type="password" v-model="password" placeholder="Enter Password" />
        <button v-on:click="login">Sign-Up</button>
        <p>
            <router-link to="/sign-up">Login</router-link>
        </p>
    </div>
</template>
<script>
// import axios from "axios";
export default {

    name: "LoginPage",
    data() {
        return {

            email:"",
            password: "",
            name:"",
        };
    },
    
    methods:{
        login(){
            alert("SignUp"); 
        }
    }
    
    // methods:{
    //      async login() {
    //           let result = await axios.get(`http://localhost:3000/users?email=
    //          ${this.email}&password=${this.password}&name=${this.name}`
           
    //       );
         
    //           if (result.status==200 && result.data.length>0) {
    //              localStorage.setItem("user-info", JSON.stringify(result.data[0]));
    //               this.$router.push({ name: 'Home'});
    //              
    //          }

    //      },
    //  },
    //  mounted(){
    //           let user = localStorage.getItem('user-info');
    //         if(user){
    //                this.$router.push({name:'Home'})
    //            }
    //        }
    

    };

</script>
<!-- <style scoped>
    input {
        margin: 10px;
        width: 300px;
    }
</style> -->
