<template>
    <section>
        <div class="d-flex justify-content-center my-5 p-4 mt-4" id="register-form">
        <div class="container h-100 my-5 p-4">
		<div class="d-flex justify-content-center h-50">
			<div class="user_card">
				<div class="d-flex justify-content-center">
					<div class="brand_logo_container">
						<img src="https://www.clipartkey.com/mpngs/m/164-1640320_hacktiv8-logo.png" class="brand_logo" alt="Logo">
					</div>
				</div>
				<div class="d-flex justify-content-center form_container">
					<form class="my-5" id="RegisterForm" @submit.prevent="registerSubmit" >
                        <a>Helsinki Kanban Board Register Form</a>
                        <div class="input-group mb-3" >
							<div class="input-group-append">
								<span class="input-group-text"><i class="fas fa-user"></i></span>
							</div>
							<input type="text" v-model="name" class="form-control input_user" value="" placeholder="name">
						</div>
                        <div class="input-group mb-3">
							<div class="input-group-append">
								<span class="input-group-text"><i class="fas fa-user"></i></span>
							</div>
							<input type="text" v-model="email" class="form-control input_user" value="" placeholder="email">
						</div>
						<div class="input-group mb-2">
							<div class="input-group-append">
								<span class="input-group-text"><i class="fas fa-key"></i></span>
							</div>
							<input type="password"  v-model="password" class="form-control input_pass" value="" placeholder="password">
						</div>
						<div class="form-group">
							<div class="custom-control custom-checkbox">
								<input type="checkbox" class="custom-control-input" id="customControlInline">
								<label class="custom-control-label" for="customControlInline">Remember me</label>
							</div>
						</div>
							<div class="d-flex justify-content-center mt-3 login_container">
				 	<button type="submit" name="register" id="register-submit" class="btn login_btn">submit</button>
                    
				   </div>
                          <div class="d-flex justify-content-center mt-3 login_container">
                    <button class="btn login_btn" type="button" @click="cancel">cancel</button>
                     </div>
					</form>
				</div>
		
				<div class="mt-3">
					<div class="d-flex justify-content-center links">
						
					</div>
					
				</div>
			</div>
		</div>
	</div>
    </div>
    </section>
</template>

<script>
import Swal from "sweetalert2"
export default {
    name:"RegisterForm",
    data(){
        return{
           name:'',
           email:'',
           password:''
        }
    },
    methods: {
        registerSubmit(){
            const obj = {
                name: this.name,
                email: this.email,
                password: this.password
            }
        if(!obj.name || !obj.email || !obj.password) {
          Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Name, Email and Password is required'
          })
        } else {
          return this.$emit('registerSubmit', obj)
        }
         console.log(obj, "form")
      },
      cancel() {
        return this.$emit('cancel')
      }

 }
    

}
</script>

<style>

.user_card {
			height: 450px;
			width: 400px;
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