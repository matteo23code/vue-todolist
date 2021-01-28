new Vue({
  el: '#app',
   data: {
    testo: 'inserire testo',
      lista:[

      ],
   },
   methods: {
      submit: function(){
      this.lista.push(this.testo)
      console.log(this.testo);
      },
      delete: function(i){
        this.testo.slice(i,1)
        console.log(this.testo);
      }
    }
});
Vue.config.devtools = true
