<template>
  <section id="main-page" >

      <header id="nav">
        <nav class="navbar navbar-light" style="background-color:#050404;">
          <div class="container-fluid">
              
          </div>
          <button class="btn btn-primary" type="submit" id="add-task-btn"  data-bs-toggle="modal" data-bs-target="#exampleModal">Add New Task</button>  
              <div id="logout">
                <button type="button" class="btn btn-outline-danger waves-effect btn-sm " @click.prevent="signOut">Logout</button>
              </div>
        
        </nav>
         <ModalAdd @addTask="addTask">
      </header>
  <!-- carrousel -->
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
      <ol class="carousel-indicators">
        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"></li>
        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
      </ol>
      <div class="carousel-inner ">
        <div class="carousel-item active ">
          <img src="./ryangtanew.jpg" class="d-block image carouselimg1" alt="...">
        </div>
        <div class="carousel-item ">
          <img src="./nofalgenderuwonew.jpg" class="d-block image carouselimg2" alt="...">
        </div>
        <div class="carousel-item">
         <h1 class="d-flex justify-content-center" style="background-color:#ef4f4f;"> OUR UPCOMING PROJECT</h1>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </a>
    </div>

  <!-- carrousel end -->  
</template>

<script>
import ModalAdd from './addfrom.vue'
export default {
  components:{
     ModalAdd
  },
name:"navbar",
data(){
    return{
     name: '',
     description: ''
    }
},
methods: {
    signOut() {
        return this.$emit('signOut')
      },
    addTask(obj) {
        
        return this.$emit('addTask', obj)
      }

}
}
</script>

<style>

.carouselimg1{
   
    width: 90%;
    margin-left: 80px;
}

.carouselimg2{
   
    width: 90%;
    margin-left: 80px;
}

.carouselimg3{
   
    width: 90%;
    margin-left: 80px;
    
}


.navJudul{
    color: rgb(4, 135, 250);
}

</style>