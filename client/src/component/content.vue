<template>

<div>
   <div>
   <Navbar 
    @signOut="signOut" 
    @addTask="addTask"
    ></Navbar>
    </div>
  
<div>
  <Task
  :categories="categories"
  :dataTask="dataTask"
  @editTask="editTask"
  @taskEdit="taskEdit"
  @deleteTask="deleteTask"
  @editCategory="editCategory"
  >

  </Task>

</div> 

</div>


</template>

<script>
import Navbar from "./navbar"
import Task from "./Task"
export default {
   name: 'Home',
   components:{
       Navbar,
       Task
   },
   props: [ 'categories', 'dataTask' ],
    methods:{
      signOut() {
            return this.$emit('signOut')
        },
      deleteTask(obj){
           return this.$emit('deleteTask',obj)
      },
      addTask(obj) {
            return this.$emit('addTask',obj)
      },
      editCategory(obj){
            return this.$emit('editCategory',obj)
      },
      editTask(dataTask) {
            return this.$emit('editTask', dataTask)
      },
      taskEdit(obj) {
            return this.$emit('taskEdit', obj)
      }

    }

}
</script>

<style>



</style>