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

  computed: {
    fullname() {
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Nielsen';
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

