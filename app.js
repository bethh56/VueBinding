var app = new Vue({
  el: "#events",
  data() {
    return {
      counter: 0,
      counterOfFive: 0,
      name: '',
      confirmedName: '',
    };
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
    setName(e, lastName) {
      this.name = e.target.value + ' ' + lastName;
    },
    // submitForm(e) {
    //   e.preventDefault();
    //   alert('Submitted!')
    // }
    submitForm() {
      alert('Submitted!')
    },
    confirmInput() {
      this.confirmedName = this.name;
    }
  }
});

