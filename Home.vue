<!-- eslint-disable vue/multi-word-component-names -->
<template>
   <HeaderTop/>
   
    <h1> Hello {{ name }},Welcome On Home Page</h1>
    <table border="1">

        
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Contact</td>
            <td>Address</td>
            <td>Action</td>
          </tr>
          <tr v-for="item in tasks" :key="item.id">
          <td>{{item.id}}</td> 
          <td>{{item.name}}</td> 
          <td>{{item.contact}}</td>
          <td>{{item.address}}</td>
          <td><router-link :to="'/update-post/'+item.id">Update</router-link></td>
          
          
          
         
         
        </tr>
      
      
      
      </table> 

</template>
<script>
import HeaderTop from './HeaderTop.vue';
  import axios from 'axios';
export default{
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Home' ,
    data(){
        return{
              tasks:'',
          }
      },
     components:{
             HeaderTop      
      },
    async mounted()
    {
         let user = localStorage.getItem('user-info');
         this.name=JSON.parse(user).name;
         if(!user)
         {
            this.$router.push({name:'SignUp'}) 
         }
         let result = await axios.get("http://localhost:3000/tasks");
        
             this.tasks = result.data;

      }
}


    
</script>
<style >
/* table, th, td {
  border: 1px solid black;
  
} */
td{
  width: 260px;
  height: 60px;
}
</style>


