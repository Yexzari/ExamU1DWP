<template>
    <div>
        <b-nav>
    <b-nav-item active>Active</b-nav-item>
    <b-nav-item>Link</b-nav-item>
    <b-nav-item>Another Link</b-nav-item>
    <b-nav-item disabled>Disabled</b-nav-item>
  </b-nav>
    <div>
      <p>
        <b-link :to="{ name: 'Formulario' }"> Formulario</b-link>
      </p>
      <p>
        <b-link :to="{ name: 'Paginacion' }"> Paginacion</b-link>
      </p>
    </div>
  </div>
  </template>
  
  <script>
    export default {
        
    }
  </script>

<style>

</style>