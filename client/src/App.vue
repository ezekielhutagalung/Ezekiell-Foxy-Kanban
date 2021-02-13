<template>
 <div>

<Home  v-if="currentPage === 'home'"  
:UrlServer="urlServer"
:loggedIn="loggedIn"
@loginSubmit="login" 
@registerButton="registerButton"
></Home>
<Content  v-else-if="currentPage === 'content'"
 :categories="categories"
 
@signOut="signOutButton"
@deleteTask="deleteTask"
@addTask="addTask" 
:dataTask="dataTask"
@editTask="editTask"
@taskEdit="taskEdit"
@editCategory="editCategory"
></Content>
<Register  v-else-if="currentPage === 'register'"
@registerSubmit="register"
@cancel ="cancelButton"
></Register>
 </div>

</template>

<script>
import axios from "axios"
import Swal from "sweetalert2"
import Home from './component/home'
import Content from './component/content.vue';
import Register from './component/register.vue';
export default {
data() {
    return {
      message: 'Hello world',
      urlServer:"https://helsinkikanbanezekiel.herokuapp.com",
      currentPage : 'home',
      categories: [],
      dataTask: {},
    };
  },

  components : {
      Home,
      Content,
      Register
      },

  methods: {
      login(payload){
        console.log(payload)
      if(!payload.email || !payload.password) {
           Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Email and Password is required'
                })
       }else{
         axios({
           method: 'POST',
             url:  "https://helsinkikanbanezekiel.herokuapp.com/login",
               data: {
                  email: payload.email,
                  password: payload.password
              }
             }).then(({data: {
                    access_token
                }}) => {
                   localStorage.setItem('access_token', access_token)
                   console.log(access_token)
                  this.currentPage = "content"
                }).catch(err => {
           Swal.fire({
           icon: 'error',
          title: 'Oops...',
           text: 'Invalid Email or Password'
         })
         if (err.response) {
            console.log(err.response.data);
          }
        }).then(()=>{
         payload.email = "",
         payload.password = ""
       })

    }
      
    },
     register(payload) {
            console.log(payload)
            axios({
                method: 'POST',
                url: this.urlServer + '/register',
                data: {
                    name: payload.name,
                    email: payload.email,
                    password: payload.password
                }
            })
                .then(data => {
                    this.currentPage = 'home'
                })
                .catch(err => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Email is already used'
                    })
                    if (err.response) {
                   console.log(err.response.data);
                   }
                })
        },

        editCategory(payload){
             console.log(payload)
            axios({
                method:'PATCH',
                url: this.urlServer + '/tasks/' + payload.id,
                headers: {
                    
                    access_token: localStorage.access_token
                },
                data:{
                    CategoryId:payload.CategoryId
                }
            })
                .then(data => {
                    this.fetchTask()
                })
                .catch(err => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'error !!'
                    })
                    if (err.response) {
                   console.log(err.response.data);
                   }
                })
        },

         fetchTask() {
            axios({
                method: "GET",
                url: this.urlServer + "/categories",
                headers: {
                    access_token: localStorage.access_token
                }
            })
            .then(res => {
                 console.log(res)
                this.categories = res.data
                this.currentPage = "content"
            })
            .catch(err => {
                console.log(err, "dari fetch")
            })
        },

        deleteTask(payload) {
          console.log(payload, "<<di delete")
      axios({
        method: "DELETE",
        url: this.urlServer + "/tasks/" + payload.id,
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      })
        .then((data) => {
          console.log("Data has been deleted");
          this.fetchTask()
          this.currentPage= "content"
        })
        .catch((err) => {
          if (err.response) {
            console.log(err.response.data);
          }
        });

        },
        addTask(payload) {
            console.log(payload)
            axios({
                method: 'POST',
                url: this.urlServer + '/tasks',
                data: {
                    name: payload.name,
                    description: payload.description,
                    CategoryId: payload.CategoryId
                },
                headers: {
                    access_token: localStorage.access_token
                }
            })
                .then(data => {
                    this.fetchTask()
                    this.currentPage = "content"
                })
                .catch(err => {
                    
                    console.log(err, "error di add")
                })
        },

        editTask(payload){
          console.log(payload)
          this.dataTask = payload
        },

        taskEdit(payload){
           axios({
             method: 'PUT',
             url: this.urlServer + '/tasks/' + this.dataTask.id,
             headers: {
               access_token: localStorage.access_token
             },
             data:{
               name:payload.name,
               description:payload.description
             }
           }) .then(data=>{
             this.fetchTask()
             this.currentPage = 'content'
           }) .catch(err=>{
             console.log(err.response)
           })


        },

        loggedIn() {
            this.fetchTask()
            this.currentPage = 'content'
        },

        cancelButton(){
            this.currentPage = "home"
        },
        
        registerButton() {
            this.currentPage = "register"
        },
        signOutButton() {
            localStorage.clear()
            this.currentPage = "home"
        },
        signOut() {
            const auth2 = gapi.auth2.getAuthInstance();
            auth2.signOut().then(function () {
                console.log('User signed out');
        });

        }


  },
  created(){
    if(localStorage.access_token){
      this.fetchTask()
      this.currentPage = "content"
    }else{
      this.currentPage = "home"
    }
  }     
}
</script>

<style>

</style>