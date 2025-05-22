import"./modulepreload-polyfill-B5Qt9EMX.js";import{b as y}from"./browser-tBeoAdho.js";const s=ace.edit("vue-editor");s.setTheme("ace/theme/chrome");s.session.setMode("ace/mode/html");s.setOptions({enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,showPrintMargin:!1});const d=localStorage.getItem("loggedInUser"),$=localStorage.getItem(`vueEditorCode_${d}`);s.setValue($||`<!-- TODO: Toon een tekst waarin het woord "like" voorkomt -->
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


`,-1);s.session.on("change",()=>{localStorage.setItem(`vueEditorCode_${d}`,s.getValue())});const O=()=>s.getValue(),v=document.getElementById("vue-preview");let f=!1;const T=async t=>{let e=t;const o=/<script>/,n=/<\/script>/,l=o.exec(e),r=n.exec(e),c=e.substring(l.index+l[0].length,r.index);e=e.slice(0,l.index)+e.slice(r.index+r[0].length);const i=(await A(c)).code,u=/<style>/,C=/<\/style>/,m=u.exec(e),p=C.exec(e),B=e.substring(m.index+m[0].length,p.index);return e=e.slice(0,m.index)+e.slice(p.index+p[0].length),{template:e.trim(),script:i,style:B}};async function A(t){return f||(await y.initialize({wasmURL:"https://unpkg.com/esbuild-wasm@0.14.54/esbuild.wasm",worker:!0}),f=!0),await y.transform(t,{loader:"tsx",target:"es2015"})}const L=(t,e,o)=>`
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
  </html>`,g=async()=>{const t=O(),e=document.getElementById("vue-error-message");try{const{template:o,script:n,style:l}=await T(t);v.srcdoc=L(o,n,l),e.textContent="",S(t)}catch(o){e.textContent=o.message,v.srcdoc="",V.textContent="test 0/3",b.textContent="❌ Compile error — tests skipped",localStorage.setItem(`${d}_vue`,"0")}};document.getElementById("vue-run").onclick=function(){g(),S(s.getValue())};g();const M=t=>/createApp/.test(t),_=t=>/Vue/.test(t),V=document.getElementById("vue-test-count"),b=document.getElementById("vue-test-check"),S=t=>{let e=0,o=5;const n=_(t),l=M(t),r=/message|title/i.test(t),c=/<(ul|ol)[\s\S]*?>[\s\S]*?<li[\s\S]*?>[\s\S]*?<\/li>/.test(t),i=/v-for=/.test(t);n&&e++,l&&e++,r&&e++,c&&e++,i&&e++,V.textContent=`test ${e}/${o}`,b.innerHTML=`
  ${n?"✅":"❌"} Vue detected<br />
  ${l?"✅":"❌"} Component present<br />
  ${r?"✅":"❌"} Contains message<br />
  ${c?"✅":"❌"} Uses &lt;ul&gt; + &lt;li&gt;<br />

  ${i?"✅":"❌"} Uses v-for
`;const u=localStorage.getItem("loggedInUser");localStorage.setItem(`${u}_vue`,(e/o*100).toString())};document.getElementById("vue-solution").onclick=function(){const t=`<div id="app">
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

`;s.setValue(t,-1),localStorage.setItem(`vueEditorCode_${d}`,t),g()};const D=localStorage.getItem("loggedInUser")||"guest",w=`${D}_vue_intro_seen`,a=document.getElementById("intro-overlay"),U=document.getElementById("overlay-close");localStorage.getItem(w)?a.style.display="none":a.style.display="flex";const h=document.getElementById("info");h&&h.addEventListener("click",()=>{a.style.display="flex"});U.addEventListener("click",()=>{a.style.display="none",localStorage.setItem(w,"true")});const k=document.querySelectorAll("#information a"),I=document.getElementById("info-indicator"),x=document.getElementById("a-content"),E=document.getElementById("preview-wrapper");k.forEach((t,e)=>{t.addEventListener("click",o=>{o.preventDefault(),k.forEach(n=>n.classList.remove("active")),t.classList.add("active"),e===0?(x.style.display="block",E.style.display="none",I.style.left="0%"):(x.style.display="none",E.style.display="block",I.style.left="50%")})});
