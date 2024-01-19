<template>
    <HeaderTop/>
        <h2> Hello User, Welcome to AddPost page </h2>
        <form class="add">
            <input type="text" name="name" placeholder="Enter Name" v-model="tasks.name">
            <input type="text" name="address" placeholder="Enter address" v-model="tasks.address">
            <input type="text" name="contact" placeholder="Enter contact" v-model="tasks.contact">
            <button type="button" v-on:click="addtasks">Add new Task </button>
           

        </form>        
    </template>
    
    
    <script >
    import HeaderTop from './HeaderTop.vue';
    
    export default {
         name: 'AddPost',
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
         methos:{

            addtasks(){
                console.warn(this.tasks)
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
    
    
   <!-- <style scoped>
        input {
            margin: 10px;
            width: 300px;
        }
        textarea {
            margin: 10px;
            width: 300px;
        }
        button {
            margin: 10px;
            width: 300px;
        }
    </style> -->