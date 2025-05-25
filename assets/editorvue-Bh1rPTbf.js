import"./modulepreload-polyfill-B5Qt9EMX.js";import{b as p}from"./browser-tBeoAdho.js";import{g as $,s as E}from"./firebase-Db5sXO2H.js";const c=localStorage.getItem("loggedInUser")||"guest",o=ace.edit("vue-editor");o.setTheme("ace/theme/chrome");o.session.setMode("ace/mode/html");o.setOptions({enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,showPrintMargin:!1});const L=`<!-- TODO: Toon een tekst waarin het woord "like" voorkomt -->
<div id="app">
  {{ message }}

  <!-- TODO: Maak een lijst met <ul> en <li> elementen -->
  <!-- Gebruik v-for om todo's te renderen -->
</div>

<script>
  const VueApp = {
    data() {
      return {
        // TODO: Zet een string in 'message' met het woord "like"
        message: "",

        // TODO: Voeg een array toe met todo-objecten
        // Elk object moet een 'text' en een 'liked' boolean bevatten
        todos: []
      };
    }
  };

  // TODO: Mount de app op #app
  Vue.createApp(VueApp).mount("#app");
<\/script>

<style>
  /* Optioneel: voeg styling toe */
</style>`;$(c).then(t=>{t&&t.codeVue?(o.setValue(t.codeVue,-1),b(t.codeVue)):o.setValue(L,-1)});o.session.on("change",()=>{localStorage.setItem(`vueEditorCode_${c}`,o.getValue())});const O=()=>o.getValue(),g=document.getElementById("vue-preview");let y=!1;const T=async t=>{let e=t;const s=/<script>/,n=/<\/script>/,l=s.exec(e),r=n.exec(e),i=e.substring(l.index+l[0].length,r.index);e=e.slice(0,l.index)+e.slice(r.index+r[0].length);const a=(await A(i)).code,S=/<style>/,B=/<\/style>/,u=S.exec(e),m=B.exec(e),C=e.substring(u.index+u[0].length,m.index);return e=e.slice(0,u.index)+e.slice(m.index+m[0].length),{template:e.trim(),script:a,style:C}};async function A(t){return y||(await p.initialize({wasmURL:"https://unpkg.com/esbuild-wasm@0.14.54/esbuild.wasm",worker:!0}),y=!0),await p.transform(t,{loader:"tsx",target:"es2015"})}const M=(t,e,s)=>`
  <html>
    <head>
      <script src="https://unpkg.com/vue@3.2.0/dist/vue.global.js"><\/script>
    </head>
    <body>
      <style>${s}</style>
      ${t}
      <script>
        try {
          ${e}
        } catch (e) {
          document.body.innerHTML = '<pre style="color:red">' + e + '</pre>';
        }
      <\/script>
    </body>
  </html>`,V=async()=>{const t=O(),e=document.getElementById("vue-error-message");try{const{template:s,script:n,style:l}=await T(t);g.srcdoc=M(s,n,l),e.textContent="",b(t)}catch(s){e.textContent=s.message,g.srcdoc=""}};document.getElementById("vue-run").onclick=async function(){V();const t=o.getValue(),e=parseInt(localStorage.getItem(`${c}_vue`)||"0",10);await E(c,"vue",e,t)};const _=document.getElementById("vue-test-count"),D=document.getElementById("vue-test-check"),v=document.getElementById("next-button"),b=t=>{let e=0,s=5;const n=/Vue/.test(t),l=/createApp/.test(t),r=/message|title/i.test(t),i=/<ul[^>]*>\s*<li[^>]*v-for=["'][^"']+["'][^>]*>[\s\S]*?<\/li>\s*<\/ul>/.test(t),a=/v-for=/.test(t);n&&e++,l&&e++,r&&e++,i&&e++,a&&e++,_.textContent=`test ${e}/${s}`,D.innerHTML=`
    ${n?"✅":"❌"} Vue detected<br />
    ${l?"✅":"❌"} Component present<br />
    ${r?"✅":"❌"} Contains message<br />
    ${i?"✅":"❌"} Uses &lt;ul&gt; + &lt;li&gt;<br />
    ${a?"✅":"❌"} Uses v-for`,e===s?v.classList.add("checked"):v.classList.remove("checked"),localStorage.setItem(`${c}_vue`,(e/s*100).toString())};document.getElementById("vue-solution").onclick=async function(){const t=`<div id="app">
  <p>I really {{ message }} Vue!</p>

  <ul>
    <li v-for="(todo, index) in todos" :key="index">
      {{ todo.text }}
    </li>
  </ul>
</div>

<script>
  const VueApp = {
    data() {
      return {
        message: "like",
        todos: [
          { text: "Learn Vue", liked: true },
          { text: "Build something cool", liked: false }
        ]
      };
    }
  };

  Vue.createApp(VueApp).mount("#app");
<\/script>

<style>
  /* Styling optioneel */
</style>`;o.setValue(t,-1),localStorage.setItem(`vueEditorCode_${c}`,t),V();const e=parseInt(localStorage.getItem(`${c}_vue`)||"0",10);await E(c,"vue",e,t)};const U=localStorage.getItem("loggedInUser")||"guest",w=`${U}_vue_intro_seen`,d=document.getElementById("intro-overlay"),j=document.getElementById("overlay-close");localStorage.getItem(w)?d.style.display="none":d.style.display="flex";const f=document.getElementById("info");f&&f.addEventListener("click",()=>{d.style.display="flex"});j.addEventListener("click",()=>{d.style.display="none",localStorage.setItem(w,"true")});const h=document.querySelectorAll("#information a"),I=document.getElementById("info-indicator"),k=document.getElementById("a-content"),x=document.getElementById("preview-wrapper");h.forEach((t,e)=>{t.addEventListener("click",s=>{s.preventDefault(),h.forEach(n=>n.classList.remove("active")),t.classList.add("active"),e===0?(k.style.display="block",x.style.display="none",I.style.left="0%"):(k.style.display="none",x.style.display="block",I.style.left="50%")})});
