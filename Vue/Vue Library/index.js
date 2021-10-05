Vue.component('product-item', {
    template: '{{ title }}',
    props: ['title']
  })
  
  new Vue({
    el: '#root',
    data: {
      products: [],
      nextProductId: 0
    },
    methods: {
      addNewProduct: function () {
        this.products.push({
          id: this.nextProductId++,
          title: "VUE TEST ITEM"
        })
      }
    }
  })