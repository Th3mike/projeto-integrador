(window.webpackJsonp=window.webpackJsonp||[]).push([[0],Array(78).concat([function(t,e,n){"use strict";n.r(e);var l={methods:{menuOnClick:function(){document.getElementById("menu-bar").classList.toggle("change"),document.getElementById("nav").classList.toggle("change"),document.getElementById("menu-bg").classList.toggle("change-bg")}}},o=(n(220),n(3)),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",[n("header",[n("div",{staticClass:"mobile flex h-20 justify-end items-center"},[n("nuxt-link",{staticClass:"logo",attrs:{to:"/"}},[t._v("STACY")]),t._v(" "),n("div",{attrs:{id:"menu"}},[n("div",{attrs:{id:"menu-bar"},on:{click:t.menuOnClick}},[n("div",{staticClass:"bar",attrs:{id:"bar1"}}),t._v(" "),n("div",{staticClass:"bar",attrs:{id:"bar2"}}),t._v(" "),n("div",{staticClass:"bar",attrs:{id:"bar3"}})]),t._v(" "),n("nav",{staticClass:"nav",attrs:{id:"nav"}},[n("ul",[n("li",[n("nuxt-link",{attrs:{to:"/produtos"}},[t._v("PRODUTOS")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/dicas"}},[t._v("DICAS")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/contato"}},[t._v("CONTATO")])],1),t._v(" "),n("li",[n("nuxt-link",{staticClass:"lenguage",attrs:{to:""}},[t._v("\n            LENGUAGE\n            "),n("ul",{staticClass:"hidden"},[n("li",[t._v("INGLES")]),t._v(" "),n("li",[t._v("ESPANHOL")])])])],1)])])])],1),t._v(" "),n("div",{staticClass:"desktop w-full h-20 shadow px-5"},[n("div",{staticClass:"container flex justify-between items-center "},[n("a",{staticClass:"logo",attrs:{href:""}},[t._v("STACY")]),t._v(" "),n("nav",[n("ul",{staticClass:"flex text-sm  uppercase tracking-wide"},[n("li",[n("nuxt-link",{staticClass:"py-6 pl-4 text-lg",attrs:{to:""}},[t._v("PRODUTOS")])],1),t._v(" "),n("li",[n("nuxt-link",{staticClass:"py-6 pl-4 text-lg",attrs:{to:"/dicas"}},[t._v("DICAS")])],1),t._v(" "),n("li",[n("nuxt-link",{staticClass:"py-6 pl-4 text-lg",attrs:{to:"/contato"}},[t._v("CONTATO")])],1),t._v(" "),n("li",[n("nuxt-link",{staticClass:"py-6 pl-4 text-lg lenguage",attrs:{to:""}},[t._v("\n            LENGUAGE\n            "),n("ul",{staticClass:"hidden"},[n("li",[t._v("INGLES")]),t._v(" "),n("li",[t._v("ESPANHOL")])])])],1)])])])])]),t._v(" "),n("div",{staticClass:"menu-bg",attrs:{id:"menu-bg"}})])}),[],!1,null,"00a55c85",null);e.default=component.exports;installComponents(component,{Header:n(78).default})},function(t,e,n){"use strict";n.r(e);n(222);var l=n(3),component=Object(l.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("footer",{staticClass:"w-full flex items-center justify-center px-6"},[n("div",{staticClass:"container"},[n("ul",{staticClass:"w-full flex justify-between items-start flex-wrap"},[n("li",{staticClass:"flex flex-col justify-center"},[n("nuxt-link",{staticClass:"logo",attrs:{to:""}},[t._v("STACY")])],1),t._v(" "),n("li",{staticClass:"flex flex-col"},[n("h2",{staticClass:"text-lg"},[t._v("MAPA DO SITE")]),t._v(" "),n("nuxt-link",{attrs:{to:""}},[t._v("PRODUTOS")]),t._v(" "),n("nuxt-link",{attrs:{to:""}},[t._v("DICAS")]),t._v(" "),n("nuxt-link",{attrs:{to:""}},[t._v("CONTATO")])],1),t._v(" "),n("li",{staticClass:"flex flex-col"},[n("h2",{staticClass:"text-lg"},[t._v("REDES SOCIAIS")]),t._v(" "),n("nuxt-link",{attrs:{to:""}},[t._v("FACEBOOK")]),t._v(" "),n("nuxt-link",{attrs:{to:""}},[t._v("INSTAGRAM")]),t._v(" "),n("nuxt-link",{attrs:{to:""}},[t._v("TWITTER")])],1),t._v(" "),n("li",{staticClass:"flex flex-col"},[n("h2",{staticClass:"text-lg"},[t._v("FORMAS DE PAGAMENTO")]),t._v(" "),n("nuxt-link",{attrs:{to:""}},[t._v("BOLETO")]),t._v(" "),n("nuxt-link",{attrs:{to:""}},[t._v("CARTÃO DE CRÉDITO")])],1)])])]),t._v(" "),t._m(0)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"after-footer flex items-center justify-center"},[n("p",{staticClass:"text-base"},[n("span",{staticClass:"text-lg"},[t._v("STACY STORE")]),t._v(" - Todos os direitos reservados!")])])}],!1,null,"023bbe30",null);e.default=component.exports;installComponents(component,{Footer:n(79).default})},,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";n.r(e);n(25);var l={name:"App",data:function(){return{name:null,email:null,telefone:null,mensagem:null,errors:[],sucessfull:[]}},methods:{checkForm:function(){this.errors=[],this.sucessfull=[],this.name||this.errors.push("O nome deve ser preenchido!"),this.email||this.errors.push("O e-mail deve ser preenchido!"),this.telefone||this.errors.push("O telefone deve ser preenchido!"),this.mensagem||this.errors.push("Insira sua mensagem!"),this.name&&this.email&&this.telefone&&this.mensagem&&(this.sucessfull.push("Obrigado(a) pelo contato! Retornaremos em breve."),this.name=this.email=this.telefone=this.mensagem="")}}},o=(n(233),n(3)),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("h3",[t._v("Contato:")]),t._v(" "),n("form",{attrs:{action:""},on:{submit:function(e){return e.preventDefault(),t.checkForm(e)}}},[n("fieldset",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"name",placeholder:"Seu nome"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email",placeholder:"Seu e-mail"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.telefone,expression:"telefone"}],attrs:{type:"number",placeholder:"Seu telefone"},domProps:{value:t.telefone},on:{input:function(e){e.target.composing||(t.telefone=e.target.value)}}}),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.mensagem,expression:"mensagem"}],attrs:{type:"mensagem",placeholder:"Sua mensagem"},domProps:{value:t.mensagem},on:{input:function(e){e.target.composing||(t.mensagem=e.target.value)}}}),t._v(" "),n("button",[t._v("Enviar")])])]),t._v(" "),n("ul",[t._l(t.errors,(function(e){return n("li",{key:e},[t._v(t._s(e))])})),t._v(" "),t._l(t.sucessfull,(function(e){return n("li",{key:e},[t._v(t._s(e))])}))],2)])}),[],!1,null,"0ddc286e",null);e.default=component.exports},,,,function(t,e,n){"use strict";n.r(e);n(226);var l=n(3),component=Object(l.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"banner px-6"})}),[],!1,null,"031a6b4e",null);e.default=component.exports},function(t,e,n){"use strict";n.r(e);var l=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"banner px-6"},[e("div",{staticClass:"fotobanner"},[e("img",{attrs:{src:n(228)}})])])}],o=(n(229),n(3)),component=Object(o.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),l,!1,null,"5b3aff48",null);e.default=component.exports},function(t,e,n){"use strict";n.r(e);n(237);var l=n(3),component=Object(l.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"newsletter flex h-screen m-auto items-center space-x-48"},[n("div",{staticClass:"w-1/5 text-center ml-56"},[n("h1",{staticClass:"text-lg"},[t._v("NEWSLETTER")]),t._v(" "),n("p",{staticClass:"text-sm"},[t._v("\n      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi\n      laudantium dignissimos quae sunt doloremque. Explicabo, eius ullam\n      quidem ratione est quia quaerat aspernatur ex suscipit corrupti ipsa\n      esse laborum et?\n    ")])]),t._v(" "),n("div",[n("input",{attrs:{type:"email",placeholder:"Seu e-mail"}}),t._v(" "),n("button",{staticClass:"bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded ml-4"},[t._v("ENVIAR")])])])}],!1,null,"48b15dfa",null);e.default=component.exports},function(t,e,n){"use strict";n.r(e);var l=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-full h-40"},[e("img",{staticClass:"rounded",attrs:{src:n(239),alt:"Produtos Stacy"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col text-color-card"},[n("h3",{staticClass:"text-base"},[t._v("Lençol Casal")]),t._v(" "),n("span",{staticClass:"text-sm"},[n("s",[t._v("R$ 73,98")])]),t._v(" "),n("p",[t._v("R$ 36,99")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-full h-40"},[e("img",{staticClass:"rounded",attrs:{src:n(240),alt:"Produtos Stacy"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col text-color-card"},[n("h3",{staticClass:"text-base"},[t._v("Lençol Casal")]),t._v(" "),n("span",{staticClass:"text-sm"},[n("s",[t._v("R$ 73,98")])]),t._v(" "),n("p",[t._v("R$ 36,99")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-full h-40"},[e("img",{staticClass:"rounded",attrs:{src:n(241),alt:"Produtos Stacy"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col text-color-card"},[n("h3",{staticClass:"text-base"},[t._v("Lençol Casal")]),t._v(" "),n("span",{staticClass:"text-sm"},[n("s",[t._v("R$ 73,98")])]),t._v(" "),n("p",[t._v("R$ 36,99")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-full h-40"},[e("img",{staticClass:"rounded",attrs:{src:n(242),alt:"Produtos Stacy"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col text-color-card"},[n("h3",{staticClass:"text-base"},[t._v("Lençol Casal")]),t._v(" "),n("span",{staticClass:"text-sm"},[n("s",[t._v("R$ 73,98")])]),t._v(" "),n("p",[t._v("R$ 36,99")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-full h-40"},[e("img",{staticClass:"rounded",attrs:{src:n(243),alt:"Produtos Stacy"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col text-color-card"},[n("h3",{staticClass:"text-base"},[t._v("Lençol Casal")]),t._v(" "),n("span",{staticClass:"text-sm"},[n("s",[t._v("R$ 73,98")])]),t._v(" "),n("p",[t._v("R$ 36,99")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-full h-40"},[e("img",{staticClass:"rounded",attrs:{src:n(244),alt:"Produtos Stacy"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col text-color-card"},[n("h3",{staticClass:"text-base"},[t._v("Lençol Casal")]),t._v(" "),n("span",{staticClass:"text-sm"},[n("s",[t._v("R$ 73,98")])]),t._v(" "),n("p",[t._v("R$ 36,99")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-full h-40"},[e("img",{staticClass:"rounded",attrs:{src:n(245),alt:"Produtos Stacy"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col text-color-card"},[n("h3",{staticClass:"text-base"},[t._v("Lençol Casal")]),t._v(" "),n("span",{staticClass:"text-sm"},[n("s",[t._v("R$ 73,98")])]),t._v(" "),n("p",[t._v("R$ 36,99")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-full h-40"},[e("img",{staticClass:"rounded",attrs:{src:n(246),alt:"Produtos Stacy"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col text-color-card"},[n("h3",{staticClass:"text-base"},[t._v("Lençol Casal")]),t._v(" "),n("span",{staticClass:"text-sm"},[n("s",[t._v("R$ 73,98")])]),t._v(" "),n("p",[t._v("R$ 36,99")])])}],o=(n(247),n(3)),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"mt-5 px-6"},[n("div",{staticClass:"container"},[n("ul",{staticClass:"flex justify-between flex-wrap"},[n("li",{staticClass:"w-56 h-64 mb-5 rounded"},[t._m(0),t._v(" "),n("section",{staticClass:"h-20 flex flex-row items-center justify-around mt-2"},[t._m(1),t._v(" "),n("nuxt-link",{staticClass:"btn-buy",attrs:{to:""}},[t._v("COMPRAR")])],1)]),t._v(" "),n("li",{staticClass:"w-56 h-64 mb-5 rounded"},[t._m(2),t._v(" "),n("section",{staticClass:"h-20 flex flex-row items-center justify-around mt-2"},[t._m(3),t._v(" "),n("nuxt-link",{staticClass:"btn-buy",attrs:{to:""}},[t._v("COMPRAR")])],1)]),t._v(" "),n("li",{staticClass:"w-56 h-64 mb-5 rounded"},[t._m(4),t._v(" "),n("section",{staticClass:"h-20 flex flex-row items-center justify-around mt-2"},[t._m(5),t._v(" "),n("nuxt-link",{staticClass:"btn-buy",attrs:{to:""}},[t._v("COMPRAR")])],1)]),t._v(" "),n("li",{staticClass:"w-56 h-64 mb-5 rounded"},[t._m(6),t._v(" "),n("section",{staticClass:"h-20 flex flex-row items-center justify-around mt-2"},[t._m(7),t._v(" "),n("nuxt-link",{staticClass:"btn-buy",attrs:{to:""}},[t._v("COMPRAR")])],1)]),t._v(" "),n("li",{staticClass:"w-56 h-64 mb-5 rounded"},[t._m(8),t._v(" "),n("section",{staticClass:"h-20 flex flex-row items-center justify-around mt-2"},[t._m(9),t._v(" "),n("nuxt-link",{staticClass:"btn-buy",attrs:{to:""}},[t._v("COMPRAR")])],1)]),t._v(" "),n("li",{staticClass:"w-56 h-64 mb-5 rounded"},[t._m(10),t._v(" "),n("section",{staticClass:"h-20 flex flex-row items-center justify-around mt-2"},[t._m(11),t._v(" "),n("nuxt-link",{staticClass:"btn-buy",attrs:{to:""}},[t._v("COMPRAR")])],1)]),t._v(" "),n("li",{staticClass:"w-56 h-64 mb-5 rounded"},[t._m(12),t._v(" "),n("section",{staticClass:"h-20 flex flex-row items-center justify-around mt-2"},[t._m(13),t._v(" "),n("nuxt-link",{staticClass:"btn-buy",attrs:{to:""}},[t._v("COMPRAR")])],1)]),t._v(" "),n("li",{staticClass:"w-56 h-64 mb-5 rounded"},[t._m(14),t._v(" "),n("section",{staticClass:"h-20 flex flex-row items-center justify-around mt-2"},[t._m(15),t._v(" "),n("nuxt-link",{staticClass:"btn-buy",attrs:{to:""}},[t._v("COMPRAR")])],1)])])])])}),l,!1,null,"b3ec1d6a",null);e.default=component.exports},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){var content=n(219);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("56b15182",content,!0,{sourceMap:!1})},function(t,e,n){var content=n(221);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("8fbfdee0",content,!0,{sourceMap:!1})},function(t,e,n){var content=n(223);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("918927fc",content,!0,{sourceMap:!1})},function(t,e,n){var content=n(225);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("a3383f08",content,!0,{sourceMap:!1})},function(t,e,n){var content=n(227);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("5030c3be",content,!0,{sourceMap:!1})},function(t,e,n){var content=n(230);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("13f0fe2c",content,!0,{sourceMap:!1})},function(t,e,n){var content=n(232);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("2b3c80bc",content,!0,{sourceMap:!1})},function(t,e,n){var content=n(234);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("048451ce",content,!0,{sourceMap:!1})},function(t,e,n){var content=n(236);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("52032e36",content,!0,{sourceMap:!1})},function(t,e,n){var content=n(238);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("650f972e",content,!0,{sourceMap:!1})},function(t,e,n){var content=n(248);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("e63aa9c4",content,!0,{sourceMap:!1})},function(t,e,n){"use strict";n.r(e);n(224);var l=n(3),component=Object(l.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"banner px-6"})}),[],!1,null,"54f4ef30",null);e.default=component.exports},function(t,e,n){"use strict";n.r(e);n(231);var l=n(3),component=Object(l.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("div",{staticClass:"box"},[e("Formulario")],1)])}),[],!1,null,"25cf016d",null);e.default=component.exports;installComponents(component,{Formulario:n(107).default})},function(t,e,n){"use strict";n.r(e);n(235);var l=n(3),component=Object(l.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"mapa"})}),[],!1,null,"61e9075d",null);e.default=component.exports},,,,,,,,function(t,e,n){"use strict";n(218);var l=n(3),component=Object(l.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Header"),t._v(" "),n("Nuxt"),t._v(" "),n("Footer")],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{Header:n(78).default,Footer:n(79).default})},function(t,e,n){n(176),t.exports=n(177)},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";n(153)},function(t,e,n){var l=n(12)(!1);l.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap);"]),l.push([t.i,'html{height:100vh;font-family:"Poppins",sans-serif;font-size:1rem}*,:after,:before{box-sizing:border-box;margin:0;padding:0;border-style:none!important}.container{width:960px;margin:0 auto;box-sizing:border-box}img{display:block;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.text-color-card{color:#5c5552}.text-color-title{color:#433633}.text-bg-marrom-100{background-color:#decbb7}.btn-buy{width:100px;padding:5px;display:flex;justify-content:center;align-items:center;font-size:14px;border-radius:4px;color:#fff;background-color:#8f857d}@media only screen and (max-width:699px){.container{width:100%}}',""]),t.exports=l},function(t,e,n){"use strict";n(154)},function(t,e,n){var l=n(12)(!1);l.push([t.i,".logo[data-v-00a55c85]{font-weight:500;font-size:20px;color:#433633;margin-right:20px;text-decoration:none}#menu[data-v-00a55c85]{z-index:2}#menu-bar[data-v-00a55c85]{width:45px;height:40px;margin:30px 0 20px 20px;cursor:pointer}.bar[data-v-00a55c85]{height:5px;width:100%;background-color:#433633;display:block;border-radius:5px;transition:.3s ease}#bar1[data-v-00a55c85]{transform:translateY(-4px)}#bar3[data-v-00a55c85]{transform:translateY(4px)}.nav[data-v-00a55c85]{transition:.3s ease;display:none}.nav ul[data-v-00a55c85]{padding:0 22px}.nav li[data-v-00a55c85]{list-style:none;padding:5px 0}.nav li a[data-v-00a55c85]{color:#fff;font-size:20px;text-decoration:none}.nav li a[data-v-00a55c85]:hover{font-weight:700}#menu[data-v-00a55c85],.menu-bg[data-v-00a55c85]{top:0;left:0;position:absolute}.menu-bg[data-v-00a55c85]{z-index:1;width:0;height:0;margin:30px 0 20px 20px;background:#433633;box-shadow:0 0 5px hsla(0,0%,100%,.5);border-radius:50%;transition:.3s ease}.change[data-v-00a55c85]{display:block}.change .bar[data-v-00a55c85]{background-color:#fff}.change #bar1[data-v-00a55c85]{transform:translateY(4px) rotate(-45deg)}.change #bar2[data-v-00a55c85]{opacity:0}.change #bar3[data-v-00a55c85]{transform:translateY(-6px) rotate(45deg)}.change-bg[data-v-00a55c85]{width:520px;height:460px;transform:translate(-60%,-30%)}.desktop nav ul li a[data-v-00a55c85]{color:#5c5552}.desktop nav ul li a[data-v-00a55c85]:hover{transition:color .2s linear;color:#433633}.lenguage:hover ul[data-v-00a55c85]{display:block;position:absolute;width:150px;padding:10px;background-color:#decbb7}.lenguage:hover ul li[data-v-00a55c85]{font-size:16px;transition:all .2s linear}.lenguage:hover ul li[data-v-00a55c85]:hover{transition:all .2s linear;margin-left:5px;color:#5c5552}@media only screen and (max-width:699px){.mobile[data-v-00a55c85]{display:flex}.desktop[data-v-00a55c85]{display:none}}@media only screen and (min-width:700px){.mobile[data-v-00a55c85]{display:none}.desktop[data-v-00a55c85]{display:flex}}",""]),t.exports=l},function(t,e,n){"use strict";n(155)},function(t,e,n){var l=n(12)(!1);l.push([t.i,"footer[data-v-023bbe30]{height:240px;margin-top:40px;background-color:#decbb7}footer ul li h2[data-v-023bbe30]{color:#433633}footer ul li a[data-v-023bbe30]{font-weight:300;color:#8f857d;padding:2px 0;transition:color .2s linear}footer ul li a[data-v-023bbe30]:hover{color:#433633;transition:color .2s linear}.after-footer[data-v-023bbe30]{width:100%;height:50px;background:#decbb7;border-top:1px solid #8f857d!important}.after-footer p[data-v-023bbe30],div span[data-v-023bbe30]{font-size:14px;font-weight:300;color:#433633}@media only screen and (max-width:699px){.container[data-v-023bbe30]{width:100%}footer[data-v-023bbe30]{height:auto;padding:20px}footer ul[data-v-023bbe30],footer ul li[data-v-023bbe30]{flex-direction:column;align-items:center}footer ul li[data-v-023bbe30]{margin-bottom:20px}}",""]),t.exports=l},function(t,e,n){"use strict";n(156)},function(t,e,n){var l=n(12)(!1);l.push([t.i,".banner[data-v-54f4ef30]{width:100%;height:400px;background-size:cover;background-position:50%;background-repeat:no-repeat}",""]),t.exports=l},function(t,e,n){"use strict";n(157)},function(t,e,n){var l=n(12)(!1);l.push([t.i,".banner[data-v-031a6b4e]{width:100%;height:400px;background-size:cover;background-position:50%;background-repeat:no-repeat}",""]),t.exports=l},function(t,e,n){t.exports=n.p+"img/bannerdicas.17174da.png"},function(t,e,n){"use strict";n(158)},function(t,e,n){var l=n(12)(!1);l.push([t.i,".banner[data-v-5b3aff48]{width:100%;height:400px;background-color:#decbb7;background-size:cover;background-position:50%;background-repeat:no-repeat}.fotobanner[data-v-5b3aff48]{width:469px;height:336px}",""]),t.exports=l},function(t,e,n){"use strict";n(159)},function(t,e,n){var l=n(12)(!1);l.push([t.i,".container[data-v-25cf016d]{display:flex}.box[data-v-25cf016d]{width:450px;height:450px;position:relative;top:-370px;background-color:#decbb7}@media only screen and (max-width:600px){.container[data-v-25cf016d]{display:flex;justify-content:center;align-items:center}.box[data-v-25cf016d]{background:red;width:300px;height:400px;top:80%;position:absolute}}",""]),t.exports=l},function(t,e,n){"use strict";n(160)},function(t,e,n){var l=n(12)(!1);l.push([t.i,"*[data-v-0ddc286e]{text-align:center;display:inline-block}h3[data-v-0ddc286e]{color:red}li[data-v-0ddc286e]{list-style-type:none;display:inline-block;color:#00f}input[data-v-0ddc286e]{width:50%;height:25%}input[data-v-0ddc286e],textarea[data-v-0ddc286e]{margin-top:15px}textarea[data-v-0ddc286e]{width:70%;height:100px}button[data-v-0ddc286e]{width:80%;height:50%;margin-top:15px;background-color:#fff}input[data-v-0ddc286e]:focus,select[data-v-0ddc286e]:focus,textarea[data-v-0ddc286e]:focus{box-shadow:0 0 0 0;border:0;outline:0}",""]),t.exports=l},function(t,e,n){"use strict";n(161)},function(t,e,n){var l=n(12)(!1);l.push([t.i,".mapa[data-v-61e9075d]{width:100%;height:300px;margin-top:200px;position:relative;background-color:#decbb7}@media only screen and (max-width:600px){.mapa[data-v-61e9075d]{width:100%;height:150px;margin-top:400px;position:relative;background-color:#decbb7}}",""]),t.exports=l},function(t,e,n){"use strict";n(162)},function(t,e,n){var l=n(12)(!1);l.push([t.i,"input[data-v-48b15dfa]{width:450px;height:50px}input[data-v-48b15dfa],input[data-v-48b15dfa]:focus,select[data-v-48b15dfa]:focus,textarea[data-v-48b15dfa]:focus{border:1px solid;padding:10px;box-shadow:5px 10px}input[data-v-48b15dfa]:focus,select[data-v-48b15dfa]:focus,textarea[data-v-48b15dfa]:focus{outline:0}.newsletter[data-v-48b15dfa]{width:100%;height:300px;margin-top:200px;position:relative;background-color:#decbb7}",""]),t.exports=l},function(t,e,n){t.exports=n.p+"img/imgOne.800c5b5.png"},function(t,e,n){t.exports=n.p+"img/imgTwo.d308b4b.png"},function(t,e,n){t.exports=n.p+"img/imgThree.3356967.png"},function(t,e,n){t.exports=n.p+"img/imgTen.426a6c3.png"},function(t,e,n){t.exports=n.p+"img/imgFour.e092878.png"},function(t,e,n){t.exports=n.p+"img/imgFive.6df3d20.png"},function(t,e,n){t.exports=n.p+"img/imgSix.f143dcc.png"},function(t,e,n){t.exports=n.p+"img/imgSeven.b670659.png"},function(t,e,n){"use strict";n(163)},function(t,e,n){var l=n(12)(!1);l.push([t.i,"ul li[data-v-b3ec1d6a]{background-color:#decbb7}@media only screen and (max-width:699px){.container[data-v-b3ec1d6a]{width:100%}ul li[data-v-b3ec1d6a]{width:150px;height:210px}ul li div[data-v-b3ec1d6a]:first-child{height:100px}ul li section[data-v-b3ec1d6a]{flex-direction:column;padding:5px}}",""]),t.exports=l}]),[[175,5,1,6]]]);