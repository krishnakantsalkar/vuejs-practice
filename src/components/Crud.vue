<template>
    
    <div class="container">

        <div class="main">
            <div class="title">
                <h2>Notes CRUD operations</h2> 
                
                <template v-if="!isCreate">
                
                <button class="btn btn-primary" @click="switchCreate()">Create</button>
                        
                    
                </template>
                <template v-else-if="isCreate">
                
                <button class="btn btn-warning" @click="switchCreate()">Cancel</button>
                        
                    
                </template>
            </div>

    <template v-if="isCreate">
            <div class="create_notes">
                <form v-on:submit.prevent>
                    <div  class="form-item">
                        <label :for="formItem.title.id">{{ formItem.title.label }}: </label>
                        <input
                        class="form-control"
                        :type="formItem.title.type"
                        :id="formItem.title.id"
                        :name="formItem.title.id"
                        v-model="formItem.title.value"
                        />
                        <br>

                        <label :for="formItem.content.id">{{ formItem.content.label }}: </label>

                        <textarea class="form-control" name="" id="" cols="30" rows="10" v-model="formItem.content.value"></textarea>
                    

                    </div>
                    <br>
                    <button class="btn btn-success" type="submit" @click="postNote()" v-bind:disabled="!formItem.title.value || !formItem.content.value">Submit</button>
                </form>
            </div>
    </template>

            <div class="view_notes" v-if="allNotes">
                <div class="col-sm-6 col-lg-4 card_div" v-for="(notes, index) in allNotes" v-bind:key="notes">
                    <div class="card">
                        <div class="card-header">
                            <span><input type="text" v-model="notes.title" :readonly="notes.readonly" /> </span>  <span><button class="btn" @click="editNote(index)">edit</button> <button class="btn" @click="deleteNote(index)">delete</button></span>
                        </div>

                        <div class="card-body">
                        <textarea class="form-control" name="" id="" cols="30" rows="10" v-model="notes.content"  :readonly="notes.readonly"></textarea>
                        </div>

                        <div class="card-footer">
                            <span>created:{{notes.date}}</span> <span v-if="notes.updatedAt">updated: {{notes.updatedAt}}</span>
                        </div>
                        <br>
                        <button v-if="!notes.readonly" class="btn btn-primary" @click="updateNote(index)">Update</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import restService from "../gateways/api"

export default {
    name:"Crud",
    mixins:[restService],
    data(){
        return{

        allNotes:[],

        isCreate:false,

        baseUrl:"http://localhost:3000/api/notes_crud",

        formItem:{ 
        title:{
          label: 'title',
          id: 'note-title',
          type: 'text',
          value: ''
        },
        content:
        {
          label: 'content',
          id: 'note-content',
          type: 'text',
          value: ''
        },
        
        }
    }
},
    mounted(){
        this.fetchNotes()
    },
    methods: {
        switchCreate(){
            this.isCreate= !this.isCreate
        },

        async fetchNotes(){
            let item = await this.getApi(`${this.baseUrl}/allNotes`)

            this.allNotes = item.data.result
            console.log(item)


        },
        async postNote(){
            let data = {title:this.formItem.title.value, content:this.formItem.content.value}
            let item = await this.postApi(`${this.baseUrl}/postNote`, data)
            this.allNotes = item.result

            this.switchCreate()
            this.fetchNotes()
        },
        async updateNote(index){
            let item = await this.putApi(`${this.baseUrl}/updateNote/${this.allNotes[index].id}`,this.allNotes[index] )
            this.fetchNotes()

        },
        async deleteNote(index){
            let item = await this.deleteApi(`${this.baseUrl}/deleteNote/${this.allNotes[index].id}`,this.allNotes[index] )
            this.fetchNotes()

        },

        editNote(index){
            this.allNotes[index].readonly =  !this.allNotes[index].readonly
        }
    
    }
    
}
</script>

<style scoped>

.create_notes,.view_notes{
    margin: 15px auto;
}

.view_notes .card-footer, .view_notes .card-header{
    display: flex;
    justify-content:space-between
}
</style>