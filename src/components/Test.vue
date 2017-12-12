<template>
    <div>
        <h1>{{header}}</h1>
        <p>By {{authorLabel}}</p>

        <button v-on:click="fire">F I R E</button>

    </div>
</template>

<script>
    export default {
        name: 'test',
        data () {  //  Fields availeble in component
            return {
                header : 'Sometinh component',
                author : {name : 'kenkris', title : 'dev.'}
            }
        },
        computed : {  //  Avoid as much logic as possible in template. So composite strings etc are done here.
            authorLabel : function(){
                return this.author.title + ' ' + this.author.name;
            }
        },
        methods : {  //  Methods available to component
            fire : function(){
                console.log('fire!!');
            }
        }
    }
</script>