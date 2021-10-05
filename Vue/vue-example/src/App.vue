<template>
  <div id="app">
    <p
        v-for="product in products"
        v-bind:key="product.id"
        v-bind:title="product.title"
    >
      {{product.title}}
    </p>
    <button v-on:click="addNewProduct">add</button>    
  </div>
</template>

<script>
  export default {
    name: 'App',
    data: function(){
      return {
        products: [],
        nextProductId: 0
      }
    },
    methods: {
      addNewProduct: function () {
        this.products.push({
          id: this.nextProductId++,
          title: "VUE TEST ITEM"
        })
      }
    }
  }
</script>


