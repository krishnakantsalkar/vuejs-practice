<template>
<div class="container">

<div class="title">
    <h3>All Students Characters</h3>
</div>

<div class="characterData" v-if="characterData">
    <div class="row">
    <div class="col-sm-6 col-lg-3 card_div" v-for="data in characterData" v-bind:key="data">
<div class="card" >
    <template v-if="data.image">
     <img class="card-img-top" v-bind:src="data.image" alt="Card image"> 
    </template>
    <template v-else>
     <img class="card-img-top" src="https://i.pravatar.cc/300" alt="Card image"> 

    </template>
    <div class="card-body">
        {{data.name}} | potrayed by: {{data.actor}}
        <hr>
        <template v-if="data.dateOfBirth">

        DOB: {{data.dateOfBirth}}
    </template>
    <template v-else>
        DOB: UNKNOWN
    </template>
        <br>
        Gender: {{data.gender}}
        <br>
    <template v-if="data.house">

        House: {{data.house}}
    </template>
    <template v-else>
        House: UNKNOWN
    </template>
        <br>
    <template v-if="data.patronus">

    patronus: {{data.patronus}}
    </template>
    <template v-else>
    patronus: UNKNOWN
    </template>
    </div>
    </div>
    </div>    
    </div>
    </div>
    </div>

</template>

<script>
import axios from "axios";

export default {
    name:"Characters",
    data(){
        return {
            characterData: [],
        }
    },
    mounted(){
    this.fetchCharacters()
    },
    computed:{
    },
    methods:{
        async fetchCharacters(){
        let item = await axios.get('http://hp-api.herokuapp.com/api/characters/students')

        this.characterData = item.data  

        console.log(this.characterData)
        }
    }
}
</script>


<style scoped>

.card-img-top{
    height:400px;
}

.card_div{
    margin: 12px auto;
 }

.card_div .card{
    box-shadow: 0px 1px 6px 1px black;
 transition: transform .4s;
}

.card_div .card:hover{
transform: scale(1.5);
z-index: 10;
}
.title{
    text-align: center;
    margin: 20px auto;
}


</style>