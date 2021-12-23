<template>
<div class="container">

    <div class="main">
        <div class="title">

            <h2>Harry Potter Info App</h2>
            <h4>Built in VueJS</h4>
        </div>

<div class="buttons">
     <router-link class="nav-link" to="/harrypotter/characters"> <button class="btn ">All Characters</button></router-link>
     <router-link class="nav-link" to="/harrypotter/students"> <button class="btn ">Students</button></router-link>
     <router-link class="nav-link" to="/harrypotter/staff"> <button class="btn ">Staff</button></router-link>
  
    <router-view />
</div>

    </div>
</div>

</template>

<style scoped>
.main .title{
text-align: center;
}

.main .buttons a{
    display: inline-block;
}


a.router-link-exact-active {
  border-bottom: 2px solid red;
}
</style>