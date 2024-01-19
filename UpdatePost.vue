<template>
    <HeaderTop/>
        <h2> Hello User Welcome to UpdatePost page </h2>
        <form class="add">
            <input type="text" name="name" placeholder="Enter Name" v-model="tasks.name">
            <input type="text" name="address" placeholder="Enter address" v-model="tasks.address">
            <input type="text" name="contact" placeholder="Enter contact" v-model="tasks.contact">
            <button type="button" v-on:click="addtasks">Update Task </button>
           

        </form> 
    </template>
    
    
    <script >
    import HeaderTop from './HeaderTop.vue';
    
    export default {
         
         name: 'UpdatePost',
         components:{
                HeaderTop      
         },
         data(){
            return{
                tasks:{
                    name:'',
                    address:'',
                    contact:'',
                }
            }
         },
         mounted(){
                let user = localStorage.getItem('user-info');
                if(!user){
                     this.$router.push({name:'SignUp'})
                }
            }
    }
    </script>