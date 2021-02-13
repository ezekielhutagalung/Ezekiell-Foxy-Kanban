<template>
  
  <div>

<!-- Modal -->
  <div class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modalBody">
      <div class="modal-content ">
        <div class="modal-header modalheader">
          <h5 class="modal-title" id="exampleModalLabel">Add New Task</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body ">
          <form @submit.prevent="addTask">
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Title:</label>
            <input type="text" class="form-control"  v-model="name">
          </div>
          <div class="mb-3">
            <label for="message-text" class="col-form-label" >Description:</label>
            <textarea class="form-control" v-model="description"></textarea>
          </div>
          <div class="mb-3">
            <label for="message-text" class="col-form-label" >Type these number of category to insert it to the right one(1:backlog,2:Todo,3:Doing,4:Done):</label>
            <textarea class="form-control" v-model="CategoryId"></textarea>
          </div>
          <button type="submit" class="btn btn-primary" >put the task to kanban Board</button>
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </form>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'

export default {
    name: "ModalAdd",
    data() {
      return {
        name: '',
        description: '',
        CategoryId:''
      }
    },
    methods: {
      addTask() {
        
        let obj = { 
          name: this.name,
          description: this.description,
          CategoryId: this.CategoryId
        }
        if(!obj.name || !obj.description) {
          Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Form must be filled'
          })
        } else {
          return this.$emit('addTask', obj)
        }
      }
    }

}
</script>

<style>

.modalBody{
border-radius: 22px;
background: linear-gradient(145deg, #cacaca, #f0f0f0);


}

.modalheader{
  border-radius: 22px;
background: linear-gradient(100deg, #ff8c00, #e6932e);
}




</style>