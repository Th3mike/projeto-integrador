<template>
  <article
    id="app"
    class="w-2/4 flex flex-col items-center justify-start text-bg-marrom-100 px-5 pt-6 rounded"
  >
    <h2
      class="title w-40 text-center text-2xl font-thin mx-auto mb-5 relative text-color-title"
    >
      {{ $t('contact') }}
    </h2>

    <form action="" v-on:submit.prevent="checkForm" class="w-full">
      <fieldset class="flex flex-col">
        <input type="name" v-model="name" placeholder="Seu nome" />

        <input type="email" v-model="email" placeholder="Seu e-mail" />

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
          class="w-9/12"
        ></textarea>

        <button class="btn-form">Enviar</button>
      </fieldset>
    </form>
    <!--- Error --->
    <notificationGroup group="error">
      <div
        class="fixed inset-0 flex px-4 py-6 pointer-events-none p-6 items-start justify-end"
      >
        <div class="max-w-sm w-full">
          <notification v-slot="{ notifications }">
            <div
              class="flex max-w-sm w-full mx-auto bg-white shadow-md rounded-lg overflow-hidden mt-4"
              v-for="notification in notifications"
              :key="notification.id"
            >
              <div class="flex justify-center items-center w-12 bg-red-500">
                <svg
                  class="h-6 w-6 fill-current text-white"
                  viewBox="0 0 40 40"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z"
                  />
                </svg>
              </div>

              <div class="-mx-3 py-2 px-4">
                <div class="mx-3">
                  <span class="text-red-500 font-semibold">{{
                    notification.title
                  }}</span>
                  <p class="text-gray-600 text-sm">{{ notification.text }}</p>
                </div>
              </div>
            </div>
          </notification>
        </div>
      </div>
    </notificationGroup>
    <!--- End error --->

    <!--- Success --->
    <notificationGroup group="success">
      <div
        class="fixed inset-0 flex px-4 py-6 pointer-events-none p-6 items-start justify-end"
      >
        <div class="max-w-sm w-full">
          <notification v-slot="{ notifications }">
            <div
              class="flex max-w-sm w-full mx-auto bg-white shadow-md rounded-lg overflow-hidden mt-4"
              v-for="notification in notifications"
              :key="notification.id"
            >
              <div class="flex justify-center items-center w-12 bg-green-500">
                <svg
                  class="h-6 w-6 fill-current text-white"
                  viewBox="0 0 40 40"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z"
                  />
                </svg>
              </div>

              <div class="-mx-3 py-2 px-4">
                <div class="mx-3">
                  <span class="text-green-500 font-semibold">{{
                    notification.title
                  }}</span>
                  <p class="text-gray-600 text-sm">{{ notification.text }}</p>
                </div>
              </div>
            </div>
          </notification>
        </div>
      </div>
    </notificationGroup>
    <!--- End Success --->
  </article>
</template>

<script>
import Vue from "vue";
import Notifications from "vt-notifications";

Vue.use(Notifications);

export default {
  name: "App",
  data() {
    return {
      name: null,
      email: null,
      telefone: null,
      mensagem: null,
    };
  },
  methods: {
    checkForm: function () {
      if (!this.name) {
        this.$notify(
          {
            group: "error",
            title: "Erro",
            text: "Insira seu nome corretamente!",
          },
          4000
        );
      }
      if (!this.email) {
        this.$notify(
          {
            group: "error",
            title: "Erro",
            text: "Insira seu e-mail correto!",
          },
          4000
        );
      }
      if (!this.telefone) {
        this.$notify(
          {
            group: "error",
            title: "Erro",
            text: "Coloque o seu número de contato!",
          },
          4000
        );
      }
      if (!this.mensagem) {
        this.$notify(
          {
            group: "error",
            title: "Erro",
            text: "Insira sua mensagem!",
          },
          4000
        );
      }
      if (this.name && this.email && this.telefone && this.mensagem) {
        this.$notify(
          {
            group: "success",
            title: "Sucesso",
            text: "Obrigado(a) pelo contato! Retornaremos em breve!",
          },
          4000
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
input,
textarea {
  width: 100%;
  height: 40px;
  padding: 5px 15px;
  margin-bottom: 15px;
  resize: none;
  overflow: hidden;
  color: #433633;
  border-radius: 4px;
}
textarea {
  padding: 10px 15px;
}
textarea:focus,
input:focus,
select:focus {
  box-shadow: 0 0 0 0;
  border: 0 none;
  outline: 0;
}
.btn-form {
  width: 100%;
  height: 50px;
  margin-bottom: 5px;
  background-color: #8f857d;
  color: #fff;
  border-radius: 4px;
}
/* --- */
.title::before {
  content: "";
  display: block;
  height: 1px;
  width: 35px;
  margin-left: 14px;
  background-color: #433633;
}
.title::after {
  position: absolute;
  content: "";
  display: block;
  height: 1px;
  width: 35px;
  right: 14px;
  background-color: #433633;
}
@media only screen and (max-width: 699px) {
  article {
    width: 100%;
  }
}
</style>
