<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Harry Potter Info</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <router-link class="nav-link" to="/">Home </router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/characters">Characters</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/students">Students</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/staff">Staff</router-link>
      </li>
    
     
    </ul>
  
  </div>
</nav>
</template>

<style scoped>
nav{
 padding:10px 20px

}

.navbar-collapse{
    justify-content: flex-end;
}

.nav-item a{
    cursor: pointer;
}
</style>