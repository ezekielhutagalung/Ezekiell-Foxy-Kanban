

const app = new Vue({
el: "#app",
  data: {
    title: "Hello World",
    page: "home",
    subtitle: "hai",
    html: "<h3>Ini adalah dari v-html</h3>",
    arr: [1, 2, 3, 4, 5],
    obj: {
      "name": "John"
    },

    dataLogin:{
        email:"",
        password:""
    },

    dataRegister:{
        name:"",
        email:"",
        password:""
    }
   
 }, methods:{
     changePage(page){
         this.page = page
     },

     login(){
      
        axios({
            method: 'POST',
            url: 'http://localhost:3000/login',
            data:{email: this.dataLogin.email,
            password: this.dataLogin.password
            }
        }).then(data=>{
            console.log(data)
            localStorage.setItem("access_token", data.data.access_token)
            this.auth()
        }).catch(err=>{
            console.log(err)
        })
       
     },

     register(){
        axios({
            method: 'POST',
            url: 'http://localhost:3000/register',
            data:{
            name: this.dataRegister.name,    
            email: this.dataRegister.email,
            password: this.dataRegister.password

            }
        }).then(data=>{            
            this.auth()
        }).catch(err=>{
            console.log(err)
        })
        
     },


     logout() {
        localStorage.removeItem("access_token")
        this.auth()
      },
     
     auth(){
        if(localStorage.getItem("access_token")){
            this.changePage('main-page')
        }else{
            this.changePage('home')
        }
     }

 },
 
 beforeCreate: function () { },
  
 created: function () {
    this.auth()
  },
beforeMount: function () { },
mounted: function () { }

})



