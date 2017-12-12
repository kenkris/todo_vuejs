<template>
    <div>
        <h1>{{header}}</h1>
        <p>By {{author.title}} {{author.name}}</p>

        <button v-on:click="fire">F I R E</button>

    </div>
</template>

<script>
    export default {
        name: 'test',
        data () {
            return {
                header : 'Sometinh component',
                author : {name : 'kenkris', title : 'dev.'}
            }
        },
        methods : {
            fire : function(){
                console.log('fire!!');
            }
        }
    }
</script>