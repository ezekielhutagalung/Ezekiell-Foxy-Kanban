<template>

 <div class="container"  >
        <div class="row catcardbody "  >
            <div class="col-md-3 cardCol" v-for="category in categories" :key="category.id">
                <div class="card-header text-white kepalakard" style="background-color: #ef4f4f;">
                    {{ category.name }}
                </div>
                <div class="container " id="please-scroll" >
                    <div class="row"  >
                        <TaskBody 
                            v-for="task in category.Tasks" :key="task.id" 
                            :dataTask="task" 
                            @deleteTask="deleteTask"
                            :taskData="dataTask"
                            @editTask="editTask"
                            @taskEdit="taskEdit"
                            @editCategory="editCategory"
                            />
                    </div>
                </div>
            </div>    
        </div>
    </div> 
     
  
</template>

<script>
import TaskBody from './TaskBody'
export default {
   name: "Task",
    components: {
       TaskBody
    },
    props: ['categories', 'dataTask'],
    methods :{

        deleteTask(obj){
            return this.$emit('deleteTask',obj)
        },
        editCategory(obj){
            return this.$emit('editCategory',obj)
        },
        editTask(dataTask){
            return this.$emit('editTask',dataTask)
        },
        taskEdit(obj){
            return this.$emit('taskEdit', obj)
        }
    }
}
</script>

<style scoped>

.container{
    height: 100%;
}
.catcardbody{
    min-width: 25vw;
}

#please-scroll{
 
  height: 50vh;
  overflow: auto;
}

.cardCol{
max-height: 80%;    
border-radius: 22px;
box-shadow:  5px 5px 10px #bebebe,
             -5px -5px 5px #ffffff;
}

.kepalakard{
    border: 1px;
    border-radius: 22px;
}
</style>