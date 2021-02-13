<template>
   <div class="card border border-dark bodycard" >
    <div class="card-body text-black-50 font-weight-bold text-sm-left p-2 col " id="first" >
     
        <div class="card-title text-black font-weight-bold" ><h5>{{ dataTask.name }}</h5></div>
          <p class="card-text desc">
           "{{ dataTask.description }}"    
          </p>
         
        </div>
        <div class="menu card-text text-black text-sm-right action">
          <a type="button" class="btn-floating " @click.prevent="editCategory"><i class="bi bi-arrow-right-square"></i></a>
          <a href="#" type="button" class="btn-floating " data-bs-toggle="modal" data-bs-target="#editModal" @click.prevent="editTask"><i class="fas fa-user-edit"></i></a>
          <a type="button" class="btn-floating" @click.prevent="deleteTask"><i class="far fa-trash-alt"></i></a>
        </div>

    <modalEdit :taskData="taskData" @taskEdit="taskEdit"></modalEdit>
  </div>
  
</template>

<script>
import modalEdit from './editForm'
export default {
  components: {
            modalEdit
        },
          data() {
            return {
                CategoryId: 0
            }
        },
        name: "TaskBody",
        props: ['dataTask', 'categories','taskData'],

        methods: {
             
             deleteTask() {
                let obj = {
                    id: this.dataTask.id
                }
                console.log(obj)
                return this.$emit('deleteTask', obj)
            },
            editCategory(){
              let updateCategory
              switch (this.dataTask.CategoryId) {
                case 1:
                  updateCategory = 2;
                  break;
                case 2:
                  updateCategory = 3;
                  break;
                 case 3:
                  updateCategory = 4;
                  break;                 
              }
              let obj ={
                 id: this.dataTask.id,
                 CategoryId: updateCategory
              }
              return this.$emit("editCategory",obj )

            },
            taskEdit(obj) {
                return this.$emit('taskEdit', obj)
            },
            editTask() {
                return this.$emit('editTask', this.dataTask)
            }

        }
}
</script>

<style>

.bodycard{
    
    height: 2%;
}
.card {
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 15px;
  border-left: 15px solid #99c5e2;
  border-top-right-radius: 13px;
}

#first {
  background: rgb(255,255,255);
  background: linear-gradient(135deg, rgba(255,255,255,.4) 0%,    rgba(200,200,200,.5) 100%);
  backdrop-filter: blur(10pxpx);
}

.desc{
    font-weight: 900;
    font-size: large;
}

</style>