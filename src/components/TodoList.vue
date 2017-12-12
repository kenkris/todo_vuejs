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
                <button type="button" v-on:click="deleteTodoFromList(todo)">Delete</button>
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

            /**
             * Add todo list item to the list
             * Data is set into newTodo object through model binding
             */
            addTodoToList : function(event){

                event.preventDefault();

                this.todoList.push({ title : this.newTodo.title, done : false });

                //  Reset object for next entry
                this.newTodo = {};
            },

            /**
             * Delete todoList item
             * @param  object todo . Item to delete
             */
            deleteTodoFromList : function(todo){

                /**
                 * TODO: This should be replaced with a loop and an id on the todoItem.
                 */

                this.todoList.splice(this.todoList.indexOf(todo), 1);
            }
        }
    }

</script>

<style scoped>
    li.todoDone {
        text-decoration: line-through;
    }
</style>