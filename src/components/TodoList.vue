<template>
    <div>
        <h1>Todo list</h1>

        <form v-on:submit="addTodoToList">
            <input type="text" placeholder="I have to..." v-model="newTodo.title" />
            <button type="submit">Add</button>
        </form>

        <ul>
            <li v-for="todo in todoList" v-bind:class="{todoDone : todo.done}">
                <input type="checkbox" v-model="todo.done" />
                {{todo.title}}
            </li>
        </ul>

    </div>
</template>

<script>
    export default {
        name: 'todolist',
        data () {  //  Fields availeble in component
            return {
                todoList : [],
                newTodo : {}
            }
        },
        methods : {  //  Methods available to component
            addTodoToList : function(event){

                event.preventDefault();

                this.todoList.push({ title : this.newTodo.title, done : false });

                console.log(this.newTodo);

                this.newTodo = {};

            }
        }
    }
</script>

<style scoped>
    li.todoDone {
        text-decoration: line-through;
    }
</style>