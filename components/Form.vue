<template>
  <article id="app" class="w-2/4 flex flex-col items-center justify-start text-bg-marrom-100 px-5 pt-6 rounded">
   <h2 class="title w-40 text-center text-2xl font-thin mx-auto mb-5 relative text-color-title">CONTATO</h2>

    <form action="" v-on:submit.prevent="checkForm" class="w-full">
      <fieldset class="flex flex-col">
        <input
          type="name"
          v-model="name"
          placeholder="Seu nome"
          class=""
        />

        <input
          type="email"
          v-model="email"
          placeholder="Seu e-mail"
          class=""
        />

        <input
          type="number"
          v-model="telefone"
          placeholder="Seu telefone"
          class=""
        />
        <textarea
          type="mensagem"
          v-model="mensagem"
          placeholder="Sua mensagem"
          class="w-9/12 "
        ></textarea>

        <button class="btn-form">Enviar</button>
      </fieldset>
    </form>

    <ul>
      <li v-for="error in errors" :key="error">{{ error }}</li>
      <li v-for="sucess in sucessfull" :key="sucess">{{ sucess }}</li>
    </ul>
  </article>
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

article {
  height: 400px;
  border: 2px solid #f3f3f3;
}

input, textarea{
width: 100%;
height: 40px;

padding: 5px 15px;
margin-bottom: 15px;
resize: none;
overflow: hidden;

color: #433633;
border-radius: 4px;
}
textarea{
  padding: 10px 15px;
}

textarea:focus,
input:focus,
select:focus {
  box-shadow: 0 0 0 0;
  border: 0 none;
  outline: 0;
}

.btn-form{
width: 100%;
height: 50px;

margin-bottom: 5px;

background-color: #8F857D;
color: #fff;
border-radius: 4px;
}

/* --- */
.title::before{
content: "";
display: block;
height: 1px;
width: 35px;
margin-left: 14px;
background-color: #433633;
}
.title::after{
position: absolute;
content: "";
display: block;
height: 1px;
width: 35px;
right: 14px;
background-color: #433633;
}


@media only screen and (max-width: 699px) {
article{
  width: 100%;
}
}
</style>
