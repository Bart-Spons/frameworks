import"./modulepreload-polyfill-B5Qt9EMX.js";import{b as y}from"./browser-tBeoAdho.js";const s=ace.edit("vue-editor");s.setTheme("ace/theme/chrome");s.session.setMode("ace/mode/html");s.setOptions({enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,showPrintMargin:!1});const d=localStorage.getItem("loggedInUser"),O=localStorage.getItem(`vueEditorCode_${d}`);s.setValue(O||`<!-- TODO: Toon een tekst waarin het woord "like" voorkomt -->
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

    // TODO: Voeg hier eventueel methods of computed properties toe
  };

  // TODO: Mount de app op #app
  Vue.createApp(VueApp).mount("#app");
<\/script>

<style>
  /* Optioneel: voeg styling toe */
</style>


`,-1);s.session.on("change",()=>{localStorage.setItem(`vueEditorCode_${d}`,s.getValue())});const T=()=>s.getValue(),v=document.getElementById("vue-preview");let h=!1;const A=async t=>{let e=t;const o=/<script>/,n=/<\/script>/,l=o.exec(e),c=n.exec(e),r=e.substring(l.index+l[0].length,c.index);e=e.slice(0,l.index)+e.slice(c.index+c[0].length);const i=(await L(r)).code,u=/<style>/,B=/<\/style>/,m=u.exec(e),p=B.exec(e),$=e.substring(m.index+m[0].length,p.index);return e=e.slice(0,m.index)+e.slice(p.index+p[0].length),{template:e.trim(),script:i,style:$}};async function L(t){return h||(await y.initialize({wasmURL:"https://unpkg.com/esbuild-wasm@0.14.54/esbuild.wasm",worker:!0}),h=!0),await y.transform(t,{loader:"tsx",target:"es2015"})}const M=(t,e,o)=>`
  <html>
    <head>
      <script src="https://unpkg.com/vue@3.2.0/dist/vue.global.js"><\/script>
    </head>
    <body>
      <style>${o}</style>
      ${t}
      <script>
        try {
          ${e}
        } catch (e) {
          document.body.innerHTML = '<pre style="color:red">' + e + '</pre>';
        }
      <\/script>
    </body>
  </html>`,g=async()=>{const t=T(),e=document.getElementById("vue-error-message");try{const{template:o,script:n,style:l}=await A(t);v.srcdoc=M(o,n,l),e.textContent="",w(t)}catch(o){e.textContent=o.message,v.srcdoc="",b.textContent="test 0/3",S.textContent="❌ Compile error — tests skipped",localStorage.setItem(`${d}_vue`,"0")}};document.getElementById("vue-run").onclick=function(){g(),w(s.getValue())};g();const _=t=>/createApp/.test(t),D=t=>/Vue/.test(t),b=document.getElementById("vue-test-count"),S=document.getElementById("vue-test-check"),f=document.getElementById("next-button"),w=t=>{let e=0,o=5;const n=D(t),l=_(t),c=/message|title/i.test(t),r=/<(ul|ol)[\s\S]*?>[\s\S]*?<li[\s\S]*?>[\s\S]*?<\/li>/.test(t),i=/v-for=/.test(t);n&&e++,l&&e++,c&&e++,r&&e++,i&&e++,b.textContent=`test ${e}/${o}`,S.innerHTML=`
  ${n?"✅":"❌"} Vue detected<br />
  ${l?"✅":"❌"} Component present<br />
  ${c?"✅":"❌"} Contains message<br />
  ${r?"✅":"❌"} Uses &lt;ul&gt; + &lt;li&gt;<br />

  ${i?"✅":"❌"} Uses v-for
`,e===o?f.classList.add("checked"):f.classList.remove("checked");const u=localStorage.getItem("loggedInUser");localStorage.setItem(`${u}_vue`,(e/o*100).toString())};document.getElementById("vue-solution").onclick=function(){const t=`<div id="app">
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
        // ✅ String waarin het woord "like" voorkomt
        message: "like",

        // ✅ Array van todo's met boolean 'liked'
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
</style>

`;s.setValue(t,-1),localStorage.setItem(`vueEditorCode_${d}`,t),g()};const U=localStorage.getItem("loggedInUser")||"guest",C=`${U}_vue_intro_seen`,a=document.getElementById("intro-overlay"),j=document.getElementById("overlay-close");localStorage.getItem(C)?a.style.display="none":a.style.display="flex";const k=document.getElementById("info");k&&k.addEventListener("click",()=>{a.style.display="flex"});j.addEventListener("click",()=>{a.style.display="none",localStorage.setItem(C,"true")});const I=document.querySelectorAll("#information a"),x=document.getElementById("info-indicator"),E=document.getElementById("a-content"),V=document.getElementById("preview-wrapper");I.forEach((t,e)=>{t.addEventListener("click",o=>{o.preventDefault(),I.forEach(n=>n.classList.remove("active")),t.classList.add("active"),e===0?(E.style.display="block",V.style.display="none",x.style.left="0%"):(E.style.display="none",V.style.display="block",x.style.left="50%")})});
