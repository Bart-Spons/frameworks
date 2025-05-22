import"./modulepreload-polyfill-B5Qt9EMX.js";import{b as y}from"./browser-8IyP0l0z.js";const s=ace.edit("vue-editor");s.setTheme("ace/theme/chrome");s.session.setMode("ace/mode/html");s.setOptions({enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,showPrintMargin:!1});const d=localStorage.getItem("loggedInUser"),C=localStorage.getItem(`vueEditorCode_${d}`);s.setValue(C||`<!-- TODO: Maak een functionele Vue component -->
<!-- TODO: Toon een lijst van todo-items (bijv. met <ul> en <li>) -->
<!-- TODO: Gebruik een boolean of string die 'liked' bevat -->
<!-- TODO: Voeg ook ergens het woord 'like' toe in een tekst -->
  
<div id="app">{{ message }}

<!-- Write vue code here -->

<!-- Use 'v-for' or 'v-if' -->

</div>
<script>
  const VueApp = {
    data() {
      return {
        message: 'Hello'

        // Use an array with text and a boolean

      }
    }
  }
  Vue.createApp(VueApp).mount('#app');
<\/script>
<style>
    
</style>
`,-1);s.session.on("change",()=>{localStorage.setItem(`vueEditorCode_${d}`,s.getValue())});const E=()=>s.getValue(),v=document.getElementById("vue-preview");let h=!1;const w=async t=>{let e=t;const o=/<script>/,l=/<\/script>/,n=o.exec(e),i=l.exec(e),r=e.substring(n.index+n[0].length,i.index);e=e.slice(0,n.index)+e.slice(i.index+i[0].length);const c=(await $(r)).code,u=/<style>/,S=/<\/style>/,m=u.exec(e),p=S.exec(e),b=e.substring(m.index+m[0].length,p.index);return e=e.slice(0,m.index)+e.slice(p.index+p[0].length),{template:e.trim(),script:c,style:b}};async function $(t){return h||(await y.initialize({wasmURL:"https://unpkg.com/esbuild-wasm@0.14.54/esbuild.wasm",worker:!0}),h=!0),await y.transform(t,{loader:"tsx",target:"es2015"})}const B=(t,e,o)=>`
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
  </html>`,g=async()=>{const t=E(),e=document.getElementById("vue-error-message");try{const{template:o,script:l,style:n}=await w(t);v.srcdoc=B(o,l,n),e.textContent="",V(t)}catch(o){e.textContent=o.message,v.srcdoc="",x.textContent="test 0/3",I.textContent="❌ Compile error — tests skipped",localStorage.setItem(`${d}_vue`,"0")}};document.getElementById("vue-run").onclick=function(){g(),V(s.getValue())};g();const T=t=>/createApp/.test(t),A=t=>/Vue/.test(t),x=document.getElementById("vue-test-count"),I=document.getElementById("vue-test-check"),V=t=>{let e=0,o=5;const l=A(t),n=T(t),i=/message|title/i.test(t),r=/<(ul|ol)[\s\S]*?>[\s\S]*?<li[\s\S]*?>[\s\S]*?<\/li>/.test(t),c=/v-for=/.test(t);l&&e++,n&&e++,i&&e++,r&&e++,c&&e++,x.textContent=`test ${e}/${o}`,I.innerHTML=`
  ${l?"✅":"❌"} Vue detected<br />
  ${n?"✅":"❌"} Component present<br />
  ${i?"✅":"❌"} Contains message<br />
  ${r?"✅":"❌"} Uses &lt;ul&gt; + &lt;li&gt;<br />

  ${c?"✅":"❌"} Uses v-for
`;const u=localStorage.getItem("loggedInUser");localStorage.setItem(`${u}_vue`,(e/o*100).toString())};document.getElementById("vue-solution").onclick=function(){const t=`<!-- Vue Solution -->
<div id="app">
  <h1>{{ title }}</h1>
  <ul>
    <li v-for="(todo, index) in todos" :key="index">
      {{ todo.text }} <span v-if="todo.liked">💻</span>
    </li>
  </ul>
</div>

<script>
  const VueApp = {
    data() {
      return {
        title: 'I really like Vue!',
        todos: [
          { text: 'Learn Vue', liked: true },
          { text: 'Build something', liked: false },
          { text: 'Share it', liked: true }
        ]
      }
    }
  }

  Vue.createApp(VueApp).mount('#app');
<\/script>

<style>
  h1 {
    color: #42b983;
  }
</style>
`;s.setValue(t,-1),localStorage.setItem(`vueEditorCode_${d}`,t),g()};const M=localStorage.getItem("loggedInUser")||"guest",k=`${M}_vue_intro_seen`,a=document.getElementById("intro-overlay"),O=document.getElementById("overlay-close");localStorage.getItem(k)?a.style.display="none":a.style.display="flex";const f=document.getElementById("info");f&&f.addEventListener("click",()=>{a.style.display="flex"});O.addEventListener("click",()=>{a.style.display="none",localStorage.setItem(k,"true")});
