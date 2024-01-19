import Home from './components/Home.vue';
import SignUp from './components/SignUp.vue';
import LoginPage from './components/Login.vue';
 import UpdatePost from './components/UpdatePost.vue';
 import AddPost from './components/AddPost.vue';
import {createRouter,createWebHistory} from 'vue-router'

const routes=[
  {  name: "Home",
    component:Home,
    path:"/",
},
{
    name:"SignUp",
    component:SignUp,
    path:"/sign-up",
},
{
    name:"Login",
    component:LoginPage,
    path:"/login",
},
{
   name:"AddPost",
    component:AddPost,
     path:"/add-post"
},
 {
name:"UpdatePost",
     component:UpdatePost,
     path:"/update-post/:id"
 },

];

const router=createRouter({
    history:createWebHistory(),
    routes
})
export default router;