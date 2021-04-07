<template>
  <div id="app">
    <h3>Contato:</h3>
    <form action="" v-on:submit.prevent="checkForm">
      <fieldset>
        <input type="name" v-model="name" placeholder="Seu nome" />

        <input type="email" v-model="email" placeholder="Seu e-mail" />

        <input type="number" v-model="telefone" placeholder="Seu telefone" />
        <textarea
          type="mensagem"
          v-model="mensagem"
          placeholder="Sua mensagem"
        ></textarea>

        <button>Enviar</button>
      </fieldset>
    </form>
    <ul>
      <li v-for="error in errors" :key="error">{{ error }}</li>
      <li v-for="sucess in sucessfull" :key="sucess">{{ sucess }}</li>
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
      telefone: null,
      mensagem: null,
      errors: [],
      sucessfull: [],
    };
  },
  methods: {
    checkForm: function () {
      this.errors = [];
      this.sucessfull = [];
      if (!this.name) {
        this.errors.push("O nome deve ser preenchido!");
      }
      if (!this.email) {
        this.errors.push("O e-mail deve ser preenchido!");
      }
      if (!this.telefone) {
        this.errors.push("O telefone deve ser preenchido!");
      }
      if (!this.mensagem) {
        this.errors.push("Insira sua mensagem!");
      }
      if (this.name && this.email && this.telefone && this.mensagem) {
        this.sucessfull.push(
          "Obrigado(a) pelo contato! Retornaremos em breve."
        );
        this.name = this.email = this.telefone = this.mensagem = "";
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
li {
  list-style-type: none;
  display: inline-block;
  color: blue;
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
textarea:focus, input:focus, select:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
}
</style>
