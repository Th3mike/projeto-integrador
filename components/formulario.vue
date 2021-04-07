<template>
  <div id="app" class="text-center">
    <p class="text-5xl">Contato</p>
    <form action="" v-on:submit.prevent="checkForm">
      <fieldset>
        <input
          type="name"
          v-model="name"
          placeholder="Seu nome"
          class="rounded-md"
        />

        <input
          type="email"
          v-model="email"
          placeholder="Seu e-mail"
          class="rounded-md"
        />

        <input
          type="number"
          v-model="telefone"
          placeholder="Seu telefone"
          class="rounded-md"
        />
        <textarea
          type="mensagem"
          v-model="mensagem"
          placeholder="Sua mensagem"
          class="w-9/12 rounded-md"
        ></textarea>

        <button class="rounded-md">Enviar</button>
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
  display: inline-block;
}
input,
textarea {
  width: 390px;
  height: 40px;
  margin-top: 15px;
}
textarea {
  height: 100px;
}
li {
  list-style-type: none;
  display: inline-block;
  color: blue;
}
button {
  width: 390px;
  height: 60px;
  margin-top: 15px;
  background-color: #8f857d;
}
textarea:focus,
input:focus,
select:focus {
  box-shadow: 0 0 0 0;
  border: 0 none;
  outline: 0;
}
</style>
