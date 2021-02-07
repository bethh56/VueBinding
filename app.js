var app = new Vue({
  el: "#events",
  data() {
    return {
      counter: 0,
      counterOfFive: 0,
      name: '',
      confirmedName: '',
      lastName: '',
      // fullname: '',
    };
  },

   watch: {
    counterOfFive(value) {
       if (value > 50) {
         const that = this;
         setTimeout(function () {
           that.counterOfFive = 0;
         }, 2000);
       }
     },
  //   // whenever name property changes, will update
  //   name(value) {
  //     if(value === '') {
  //       this.fullname = '';
  //     } else {
  //       this.fullname = value + ' ' + this.lastName;
  //     }
  //   },
  //   lastName(value) {
  //     if(value === '') {
  //       this.fullname = '';
  //     } else {
  //       this.fullname = this.name + ' ' + value;
  //     }
  //   }
   },

  computed: {
    fullname() {
      if (this.name === '' || this.lastName === '') {
        return '';
      }
      return this.name + ' ' + this.lastName;
    }
  },

  methods: {
    add() {
      this.counter++
    },
    subtract() {
      this.counter--
    },
    add5(num) {
      this.counterOfFive = this.counterOfFive + num;
    },
    subtract5(num) {
      this.counterOfFive = this.counterOfFive - num;
    },
    // here //
    setName(e) {
      this.name = e.target.value;
    },
    submitForm() {
      alert('Submitted!')
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
    resetInput() {
      this.name = '';
    }
  }
});

