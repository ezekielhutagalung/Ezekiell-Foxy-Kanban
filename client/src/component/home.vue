
<template>

  <section class="align-content-center ">
    

   
  <div class="container" id="login-form">

    <div class="row d-flex p-5">
       <div class="col-lg-6">
        <div>
          <div class=" my-2 ">
              <h1 class="text-left judul display-1" >Helsinki </h1>
              <h1 class="text-right judul display-4"> Kanban Board</h1>
              <div class="my-3">
        <div class="d-flex justify-content-center ">   
         <div class>
              <p class="text-center font-italic quotes">
               "A Kanban board is a tool for workflow visualization and one of the Kanban method's key components.
                Visualizing your workflow and tasks on a  Kanban board helps you better understand your processes and gain 
                an overview of your workload. With this new level of transparency, you will quickly identify problematic work stages, 
                and by improving those, your team will soon work more efficiently. By:EzekielHutagalung"
              </p>
          </div>
         </div> 
        </div>  
            </div>
          
        </div>
     </div>
     <div class="col-lg-6">
        <div class="d-flex justify-content-center">
        <div class="container h-100 my-5">
		<div class="d-flex justify-content-center h-50">
			<div class="user_card">
				<div class="d-flex justify-content-center">
					<div class="brand_logo_container">
						<img src="https://www.clipartkey.com/mpngs/m/164-1640320_hacktiv8-logo.png" class="brand_logo" alt="Logo">
					</div>
				</div>
				<div class="d-flex justify-content-center form_container">
					<form id="loginForm" @submit.prevent="loginSubmit" >
						<div class="input-group mb-3">
							<div class="input-group-append">
								<span class="input-group-text"><i class="fas fa-user"></i></span>
							</div>
							<input type="text" v-model="emailLogin" class="form-control input_user" value="" placeholder="email">
						</div>
						<div class="input-group mb-2">
							<div class="input-group-append">
								<span class="input-group-text"><i class="fas fa-key"></i></span>
							</div>
							<input type="password"  v-model="passwordLogin" class="form-control input_pass" value="" placeholder="password">
						</div>
						<div class="form-group">
							<div class="custom-control custom-checkbox">
								<input type="checkbox" class="custom-control-input" id="customControlInline">
								<label class="custom-control-label" for="customControlInline">Remember me</label>
							</div>
						</div>
							<div class="d-flex justify-content-center mt-3 login_container">
				 	<button type="submit" name="button" class="btn login_btn">Login</button>
					 
				   </div>
				   <button v-google-signin-button="clientId" class="google-signin-button btn btn-success"> Continue with Google</button>
					</form>
				</div>
		
				<div class="mt-3">
					<div class="d-flex justify-content-center links">
						<a>Dont have an account? klik button below</a>		
					</div>
					<div class="d-flex justify-content-center links">
						<button class="btn btn-success" type="button" @click="registerButton">Register</button>
					</div>
				</div>
			</div>
		</div>
	</div>
    </div>

       </div>
     
    </div>
     

   
    </div>

    <div class="justify-content-xl-center p-5 my-5  ">
       <br>   
      <h4 class="d-flex justify-content-center quotesdibawah"> "Sometimes life is going to hit you in the head with a brick. Don't lose faith". -Steve Job- </h4>
    </div>
     
 
    
        
</section>
</template>

<script>
import axios from 'axios'
import GoogleSignInButton from 'vue-google-signin-button-directive'
import Swal from "sweetalert2"
export default {

   name: "loginForm",
   directives:{
	   GoogleSignInButton
   },

   props:['UrlServer','loggedIn'],
  data(){
     return{
       emailLogin:"",
       passwordLogin:"",
	   clientId:'27286094653-tlddvm226obl74qmi7u2h5fpajivomg2.apps.googleusercontent.com',
	   url:'https://helsinkikanbanezekiel.herokuapp.com/'
     }
  },
  methods:{
    loginSubmit(){
		console.log(this.emailLogin)
		console.log(this.passwordLogin)
          const obj = {
            email: this.emailLogin, 
            password: this.passwordLogin
          }
          return this.$emit('loginSubmit', obj)
        
      },
	  OnGoogleAuthSuccess (idToken) {
            
            const id_token = idToken
           console.log(id_token ,"acc token GOOGLE")
            axios({
                method: "POST",
                url: this.url + "googleLogin",
                data: {
                    id_token
                }
            })
            .then(result => {
                 console.log(result)
                localStorage.setItem('access_token', result.data.access_token)
               this.loggedIn()
                // console.log(result)
            })
            .catch(err => {
                 if (err.response) {
            console.log(err.response.data);
          }
            })
        },
        OnGoogleAuthFail (error) {
             if (error.response) {
            console.log(error.response.data);
          }
        },
        registerButton() {
        return this.$emit('registerButton')
      }
  }

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800,900&display=swap%27');
@import url('https://fonts.googleapis.com/css2?family=Concert+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Concert+One&family=Cookie&family=DM+Serif+Display:ital@1&display=swap');


.quotesdibawah{
font-family: 'DM Serif Display', serif;
   color: aliceblue;
}
 
.footerLogin{
  background-color: #ff4d00;
}

.quotes{
   color: aliceblue;

}

.judul{
  font-family: 'Concert One', cursive;
  color: aliceblue;
}

.user_card {
			height: 400px;
			width: 350px;
			margin-top: auto;
			margin-bottom: auto;
			background: #ff9f05;
			position: relative;
			display: flex;
			justify-content: center;
			flex-direction: column;
			padding: 10px;
			box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
			-webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
			-moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
			border-radius: 5px;

		}
		.brand_logo_container {
			position: absolute;
			height: 170px;
			width: 170px;
			top: -75px;
			border-radius: 50%;
			background: #d41c1c;
			padding: 10px;
			text-align: center;
		}
		.brand_logo {
			height: 150px;
			width: 150px;
			border-radius: 50%;
			border: 2px solid white;
		}
		.form_container {
			margin-top: 100px;
		}
		.login_btn {
			width: 100%;
			background: #c0392b !important;
			color: white !important;
		}
		.login_btn:focus {
			box-shadow: none !important;
			outline: 0px !important;
		}
		.login_container {
			padding: 0 2rem;
		}
		.input-group-text {
			background: #c0392b !important;
			color: white !important;
			border: 0 !important;
			border-radius: 0.25rem 0 0 0.25rem !important;
		}
		.input_user,
		.input_pass:focus {
			box-shadow: none !important;
			outline: 0px !important;
		}
		.custom-checkbox .custom-control-input:checked~.custom-control-label::before {
			background-color: #c0392b !important;
		}

</style>