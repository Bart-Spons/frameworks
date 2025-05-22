import"./modulepreload-polyfill-B5Qt9EMX.js";import{b as y}from"./browser-8IyP0l0z.js";const o=ace.edit("vue-editor");o.setTheme("ace/theme/github");o.session.setMode("ace/mode/html");o.setOptions({enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,showPrintMargin:!1});const u=localStorage.getItem("loggedInUser"),b=localStorage.getItem(`vueEditorCode_${u}`);o.setValue(b||`<!-- Vue here -->
<div id="app">{{ message }}</div>
<script>
  const VueApp = {
    data() {
      return {
        message: 'Hello'
      }
    }
  }
  Vue.createApp(VueApp).mount('#app');
<\/script>
<style>
    
</style>
`,-1);o.session.on("change",()=>{localStorage.setItem(`vueEditorCode_${u}`,o.getValue())});const k=()=>o.getValue(),v=document.getElementById("vue-preview");let h=!1;const $=async t=>{let e=t;const s=/<script>/,l=/<\/script>/,n=s.exec(e),c=l.exec(e),r=e.substring(n.index+n[0].length,c.index);e=e.slice(0,n.index)+e.slice(c.index+c[0].length);const i=(await w(r)).code,d=/<style>/,C=/<\/style>/,p=d.exec(e),m=C.exec(e),E=e.substring(p.index+p[0].length,m.index);return e=e.slice(0,p.index)+e.slice(m.index+m[0].length),{template:e.trim(),script:i,style:E}};async function w(t){return h||(await y.initialize({wasmURL:"https://unpkg.com/esbuild-wasm@0.14.54/esbuild.wasm",worker:!0}),h=!0),await y.transform(t,{loader:"tsx",target:"es2015"})}const B=(t,e,s)=>`
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
  </html>`,g=async()=>{const t=k(),e=document.getElementById("vue-error-message");try{const{template:s,script:l,style:n}=await $(t);v.srcdoc=B(s,l,n),e.textContent="",V(t)}catch(s){e.textContent=s.message,v.srcdoc="",I.textContent="test 0/3",f.textContent="❌ Compile error — tests skipped",localStorage.setItem(`${u}_vue`,"0")}};document.getElementById("vue-run").onclick=function(){g(),V(o.getValue())};g();const A=t=>/createApp/.test(t),M=t=>/Vue/.test(t),I=document.getElementById("vue-test-count"),f=document.getElementById("vue-test-check"),V=t=>{let e=0,s=5;const l=M(t),n=A(t),c=/message|title/i.test(t),r=/<(ul|ol)[\s\S]*?>[\s\S]*?<li[\s\S]*?>[\s\S]*?<\/li>/.test(t),i=/v-for=/.test(t);l&&e++,n&&e++,c&&e++,r&&e++,i&&e++,I.textContent=`test ${e}/${s}`,f.innerHTML=`
  ${l?"✅":"❌"} Vue detected<br />
  ${n?"✅":"❌"} Component present<br />
  ${c?"✅":"❌"} Contains message<br />
  ${r?"✅":"❌"} Uses &lt;ul&gt; + &lt;li&gt;<br />

  ${i?"✅":"❌"} Uses v-for
`;const d=localStorage.getItem("loggedInUser");localStorage.setItem(`${d}_vue`,(e/s*100).toString())};document.getElementById("vue-solution").onclick=function(){const t=`<!-- Vue Solution -->
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
`;o.setValue(t,-1),localStorage.setItem(`vueEditorCode_${u}`,t),g()};const _=localStorage.getItem("loggedInUser")||"guest",S=`${_}_vue_intro_seen`,a=document.getElementById("intro-overlay"),L=document.getElementById("overlay-close");localStorage.getItem(S)?a.style.display="none":a.style.display="flex";const x=document.getElementById("info");x&&x.addEventListener("click",()=>{a.style.display="flex"});L.addEventListener("click",()=>{a.style.display="none",localStorage.setItem(S,"true")});
