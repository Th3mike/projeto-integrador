<template>
  <div id="app">
    <h3>Contato:</h3>
    <form action="" v-on:submit.prevent="checkForm">
      <fieldset>
        <input type="name" v-model="name" placeholder="Seu nome" />

        <input type="email" v-model="email" placeholder="Seu e-mail" />

        <textarea name="mensagem" placeholder="Sua mensagem"></textarea>

        <button>Enviar</button>
      </fieldset>
    </form>
    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      name: null,
      email: null,
      errors: [],
    };
  },
  methods: {
    checkForm: function () {
      this.errors = [];
      if (!this.name) {
        this.errors.push('O nome deve ser preenchido!');
      }
      if(!this.email) {
        this.errors.push('O e-mail deve ser preenchido!');
      }
      if (this.name && this.email) {
        //enviar
      }
    },
  },
};
</script>

<style scoped>
* {
  text-align: center;
  display: inline-block;
}
h3 {
  color: red;
}
input {
  width: 50%;
  height: 25%;
  margin-top: 15px;
}
textarea {
  width: 70%;
  height: 100px;
  margin-top: 15px;
}
button {
  width: 80%;
  height: 50%;
  margin-top: 15px;
  background-color: white;
}
</style>
