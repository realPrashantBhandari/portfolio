<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div class="container">

        <div class="todo">
            <div class="header">
                <h1>Create A Todo</h1>
                
                <form
                    class="todo-form"
                    @submit.prevent="addTodo"
                >
                    <input 
                    type="text" 
                    v-model = "newTodo"
                    placeholder="Add New Todo">
                    <button
                    :disabled="!newTodo"
                    >ADD TODO</button>
                </form>
                <h3>* Created todos are stored in firebase</h3>
                
            </div>

            <div class="todo-List">

                <div 
                class="todo-item"
                v-for="todo in todos">
                    <div 
                    class="content-todo"
                    :class="{todoDoneText : todo.done}"
                    >
                        <p>{{todo.content}} </p>
                    </div>

                    <div class="action-todo">
                        <button
                        @click="completeTodo(todo.id, todo.done)"
                        :class="{todoDonebtn : todo.done}"
                        > 
                            <i class="fa fa-check"></i>
                        </button>
                        <button
                        @click="deleteTodo(todo.id)"
                        >
                            <i class="fa fa-close"></i>
                        </button>
                    </div>
                    
                    
                </div>

            </div>

        </div>
        
        
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { collection, onSnapshot, addDoc, deleteDoc, doc, updateDoc, orderBy, query } from "firebase/firestore";
import { db } from '../firebase/index.js'

const todosCollectionFB = collection(db, "todos")
const todosCollectionFBQuery = query(todosCollectionFB, orderBy("date", 'desc'));

onMounted(async () => {
    onSnapshot(todosCollectionFBQuery, (querySnapshot) => {
    let storedTodos = []
    querySnapshot.forEach((doc) => {
    const todo = {
        id:doc.id,
        content: doc.data().content,
        done: doc.data().done,
    }
    storedTodos.push(todo)
    })

    todos.value = storedTodos
});


})

const todos = ref([])

// add todo
const newTodo = ref('')
const addTodo = () => {
    addDoc(todosCollectionFB, {
    content: newTodo.value,
    done: false,
    date: Date.now()
    });
    newTodo.value = ""
}

// finish todo
const completeTodo = (id, curr) => {

    updateDoc(doc(todosCollectionFB, id), {
    done: !curr
    });
}

// delete todo

const deleteTodo = (id) =>{
    console.log (id)
    deleteDoc(doc(todosCollectionFB, id));
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');

*{
    font-family: "Montserrat";
    font-size: 2rem;
}
.container{
    display: flex;
    flex-direction: column;
    align-content: center;
    padding: 0.5rem;
    color:black;
    
}

.todo{
    max-width: fit-content;
    text-align: center;
    padding: 1rem 0.5rem;
    align-self: center;
    background: linear-gradient(to bottom, #8457ff89, #eb0230bb);
    box-shadow: 0px 5px 20px 1px;
    border-radius: .4em;
}

.todo .todo-form{
    display: flex;
    gap: 0.4rem;
}

.todo .todo-form input{
    padding: 0.5rem;
    border-radius: 8px;
}

.todo .todo-form button{
    padding: 0.5rem;
    border-radius: 8px;
    font-weight: bold;
}

.todo h1{
    margin: 0.5rem;
    padding: 0.5rem;
    font-size: 4rem;
}

.todo h3{
    margin: 0.2rem;
    padding: 0.2rem;
    font-size: 1rem;
    text-align: end;
}

.todo .todo-item{
    display: flex;
    gap: 1rem;
    background-color: beige;
    margin: 2rem 0.5rem;
    padding: 1rem;
    box-shadow: 0px 5px 20px 1px;
    border-radius: .4em;
}

.content-todo{
    margin: 0.1rem;
    padding: 0.3rem;
}

.action-todo{
    margin-left: auto;
}
.action-todo button{
    margin: 0.1rem;
    padding: 0.3rem;
    border: none;
    border-radius: 10px;
    cursor: pointer;
}

.action-todo button:first-child:hover{
    filter: drop-shadow(0 0 15px rgb(144, 147, 144));
}

.action-todo button:last-child:hover{
    filter: drop-shadow(0 0 15px red);
}


.action-todo button:last-child{
    background-color: red;
}

.todoDoneText{
    text-decoration: line-through;
    
}

.todoDonebtn{
    background-color: rgb(0, 199, 0);
}


</style>
