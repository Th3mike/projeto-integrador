<template>
  <article
    class="w-full h-40 flex items-center justify-center px-5 text-bg-marrom-100 mt-40"
  >
    <div class="container">
      <section class="flex items-center justify-between">
        <div>
          <h3 class="text-3xl font-extrabold text-color-card">NEWSLETTER</h3>
          <p class="text-color-card">{{ $t("textNewsletter") }}</p>
        </div>

        <div class="news flex items-center">
          <form
            action=""
            v-on:submit.prevent="checkNewsletter"
            class="w-full"
            novalidate
          >
            <input type="email" v-model="email" placeholder="E-mail" />
          <button class="btn-form">{{ $t("submit") }}</button>
          </form>
        </div>
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
                      <p class="text-gray-600 text-sm">
                        {{ notification.text }}
                      </p>
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
                  <div
                    class="flex justify-center items-center w-12 bg-green-500"
                  >
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
                      <p class="text-gray-600 text-sm">
                        {{ notification.text }}
                      </p>
                    </div>
                  </div>
                </div>
              </notification>
            </div>
          </div>
        </notificationGroup>
        <!--- End Success --->
      </section>
    </div>
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
      email: null,
    };
  },
  methods: {
    validEmailNews: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    checkNewsletter: function () {
      if (!this.email) {
        this.$notify(
          {
            group: "error",
            title: "Erro",
            text: "Insira seu e-mail!",
          },
          4000
        );
      } else if (!this.validEmailNews(this.email)) {
        this.$notify(
          {
            group: "error",
            title: "Erro",
            text: "Insira um e-mail válido!",
          },
          4000
        );
      } else if (this.email) {
        this.$notify(
          {
            group: "success",
            title: "Sucesso",
            text: "Agora você irar receber nossas ofertas no seu E-mail!",
          },
          4000
        );
        this.email = "";
      }
    },
  },
};
</script>
<style scoped>
.news {
  width: 80%;
}

.news input {
  width: 100%;
  height: 40px;
  text-align: center;
  padding: 5px 15px;
  color: #5c5552;

  border-radius: 4px;
}
.btn-form {
  width: 100%;
  height: 50px;
  margin-top: 5px;
  margin-bottom: 5px;
  background-color: #8f857d;
  color: #fff;
  border-radius: 4px;
}

.news a {
  width: 120px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;

  color: #fff;
  background-color: #8f857d;
  border-radius: 4px;
}
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 699px) {
  article {
    margin-top: 16rem;
    height: auto;
    padding: 10px 20px;
  }
  section {
    flex-direction: column;
    height: auto;
  }
  .news {
    width: 100%;
  }
}
</style>
