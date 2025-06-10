import"./modulepreload-polyfill-B5Qt9EMX.js";import{b as m}from"./browser-ByHSB046.js";/* empty css                      */import{g as $,s as x}from"./firebase-c-vm1Hnq.js";const l=localStorage.getItem("loggedInUser")||"guest",o=ace.edit("vue-editor");o.setTheme("ace/theme/chrome");o.session.setMode("ace/mode/html");o.setOptions({enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,showPrintMargin:!1});const A=`<!-- TODO: Toon een tekst waarin het woord "like" voorkomt -->
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
</style>`;$(l).then(e=>{e&&e.codeVue?(o.setValue(e.codeVue,-1),u(e.codeVue)):o.setValue(A,-1)});o.session.on("change",()=>{localStorage.setItem(`vueEditorCode_${l}`,o.getValue())});const L=()=>o.getValue(),p=document.getElementById("vue-preview");let g=!1;const O=async e=>{let t=e;const s=/<script>/,n=/<\/script>/,c=s.exec(t),i=n.exec(t),V=t.substring(c.index+c[0].length,i.index);t=t.slice(0,c.index)+t.slice(i.index+i[0].length);const w=(await T(V)).code,S=/<style>/,B=/<\/style>/,a=S.exec(t),d=B.exec(t),C=t.substring(a.index+a[0].length,d.index);return t=t.slice(0,a.index)+t.slice(d.index+d[0].length),{template:t.trim(),script:w,style:C}};async function T(e){return g||(await m.initialize({wasmURL:"https://unpkg.com/esbuild-wasm@0.14.54/esbuild.wasm",worker:!0}),g=!0),await m.transform(e,{loader:"tsx",target:"es2015"})}const M=(e,t,s)=>`
  <html>
    <head>
      <script src="https://unpkg.com/vue@3.2.0/dist/vue.global.js"><\/script>
    </head>
    <body>
      <style>${s}</style>
      ${e}
      <script>
        try {
          ${t}
        } catch (e) {
          document.body.innerHTML = '<pre style="color:red">' + e + '</pre>';
        }
      <\/script>
    </body>
  </html>`,E=async()=>{const e=L(),t=document.getElementById("vue-error-message");try{const{template:s,script:n,style:c}=await O(e);p.srcdoc=M(s,n,c),t.textContent="",u(e)}catch(s){t.textContent=s.message,p.srcdoc=""}};document.getElementById("vue-run").onclick=async function(){const e=o.getValue(),t=u(e);await E(),await x(l,"vue",t,e)};const _=document.getElementById("vue-test-count"),D=document.getElementById("vue-test-check"),y=document.getElementById("next-button"),u=e=>{let t=0,s=5;/Vue/.test(e)&&t++,/createApp/.test(e)&&t++,/message|title/i.test(e)&&t++,/<ul[^>]*>\s*<li[^>]*v-for=["'][^"']+["'][^>]*>[\s\S]*?<\/li>\s*<\/ul>/.test(e)&&t++,/v-for=/.test(e)&&t++;const n=Math.round(t/s*100);return localStorage.setItem(`${l}_vue`,n.toString()),_.textContent=`test ${t}/${s}`,D.innerHTML=`
    ${/Vue/.test(e)?"✅":"❌"} Vue detected<br />
    ${/createApp/.test(e)?"✅":"❌"} Component present<br />
    ${/message|title/i.test(e)?"✅":"❌"} Contains message<br />
    ${/<ul[^>]*>[\s\S]*?<li[^>]*v-for=/.test(e)?"✅":"❌"} Uses &lt;ul&gt;/&lt;li&gt;<br />
    ${/v-for=/.test(e)?"✅":"❌"} Uses v-for`,t===s?y.classList.add("checked"):y.classList.remove("checked"),n};document.getElementById("vue-solution").onclick=async function(){const e=`<div id="app">
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
</style>`;o.setValue(e,-1),localStorage.setItem(`vueEditorCode_${l}`,e),E();const t=parseInt(localStorage.getItem(`${l}_vue`)||"0",10);await x(l,"vue",t,e)};const U=localStorage.getItem("loggedInUser")||"guest",b=`${U}_vue_intro_seen`,r=document.getElementById("intro-overlay"),j=document.getElementById("overlay-close");localStorage.getItem(b)?r.style.display="none":r.style.display="flex";const v=document.getElementById("info");v&&v.addEventListener("click",()=>{r.style.display="flex"});j.addEventListener("click",()=>{r.style.display="none",localStorage.setItem(b,"true")});const f=document.querySelectorAll("#information a"),h=document.getElementById("info-indicator"),I=document.getElementById("a-content"),k=document.getElementById("preview-wrapper");f.forEach((e,t)=>{e.addEventListener("click",s=>{s.preventDefault(),f.forEach(n=>n.classList.remove("active")),e.classList.add("active"),t===0?(I.style.display="block",k.style.display="none",h.style.left="0%"):(I.style.display="none",k.style.display="block",h.style.left="50%")})});
