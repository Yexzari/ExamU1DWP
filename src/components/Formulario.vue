<template>
    <div><h1>Este es mi formulario</h1> 
 <b-breadcrumb :items="items"></b-breadcrumb>
 <form
  id="app"
  @submit="checkForm"
  action="https://vuejs.org/"
  method="post"
>

  <p v-if="errors.length">
    <b>Please correct the following error(s):</b>
    <ul>
      <li  v-for="error in errors" :key="error.id">{{ item.text }}</li>
    </ul>
  </p>

  <p>
    <label for="marca">Marca</label>
    <input
      id="marca"
      v-model="marca"
      type="text"
      name="marca"
    >
  </p>

  <p>
    <label for="modelo">Modelo</label>
    <input
      id="modelo"
      v-model="modelo"
      type="text"
      name="modelo"
    >
  </p>
  <p>
    <label for="year">Año</label>
    <input
      id="year"
      v-model="year"
      type="number"
      name="year"
    >
  </p>
  <p>
    <label for="serie">Numero de Serie</label>
    <input
      id="serie"
      v-model="serie"
      type="text"
      name="serie"
    >
  </p>
  <p>
    <input type="submit" value="Submit">
  </p>
</form>
</div>
</template>

<script>
export default {

    data() {
        return {

          items: [
            {
              text: 'Atrás',
              href: '#',
              to:'index'
            },
            {
              text: 'Paginación',
              href: '#',
              to:'paginacion'
            },
            {
              text: 'Menú',
              active: true
            }
          ],
          errors: [],
          marca:null,
          modelo:null,
          year:null,
          serie:null

        }
      },
      methods:{
        checkForm: function (e) {
        regex.te
        this.errors = [];
  
        if (!this.marca) {
          this.errors.push('marca requerida.');
        }else if(/[^a-z0-9]/.test(this.marca)){
            this.errors.push('No usar caracteres especiales en marca.');
        }
        
        if (!this.modelo) {
          this.errors.push('modelo requerido.');
        }else if(/[^a-z0-9]/gi.test(this.modelo)){
            this.errors.push('No usar caracteres especiales en modelo.');
        }
        if (!this.year) {
          this.errors.push('Año requerido.');
        }else if(this.year>2024){
            this.errors.push('Modelo no coincide con el año actual.');
        }
        if(!this.serie){
            this.errors.push('Numero de serie requerido.');
        }else if(/[a-z]{4}+[0-9]{3}+\-[0-9]{2}+[a-z]{26444595496}/.test(this.serie)){
            this.errors.push('Mal Formato de numero de serie.');
        }
  
        e.preventDefault();
      }
      }
    }
  </script>

