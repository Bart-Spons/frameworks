import"./modulepreload-polyfill-B5Qt9EMX.js";import{b as g}from"./browser-w0s3kXIP.js";const o=ace.edit("vue-editor");o.setTheme("ace/theme/github");o.session.setMode("ace/mode/html");o.setOptions({enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,showPrintMargin:!1});const a=localStorage.getItem("loggedInUser"),I=localStorage.getItem(`vueEditorCode_${a}`);o.setValue(I||`<!-- Vue here -->
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
`,-1);o.session.on("change",()=>{localStorage.setItem(`vueEditorCode_${a}`,o.getValue())});const S=()=>o.getValue(),h=document.getElementById("vue-preview");let v=!1;const b=async t=>{let e=t;const s=/<script>/,c=/<\/script>/,n=s.exec(e),r=c.exec(e),i=e.substring(n.index+n[0].length,r.index);e=e.slice(0,n.index)+e.slice(r.index+r[0].length);const l=(await k(i)).code,u=/<style>/,C=/<\/style>/,d=u.exec(e),p=C.exec(e),f=e.substring(d.index+d[0].length,p.index);return e=e.slice(0,d.index)+e.slice(p.index+p[0].length),{template:e.trim(),script:l,style:f}};async function k(t){return v||(await g.initialize({wasmURL:"https://unpkg.com/esbuild-wasm@0.14.54/esbuild.wasm",worker:!0}),v=!0),await g.transform(t,{loader:"tsx",target:"es2015"})}const E=(t,e,s)=>`
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
  </html>`,m=async()=>{const t=S(),e=document.getElementById("vue-error-message");try{const{template:s,script:c,style:n}=await b(t);h.srcdoc=E(s,c,n),e.textContent="",x(t)}catch(s){e.textContent=s.message,h.srcdoc="",y.textContent="test 0/3",V.textContent="❌ Compile error — tests skipped",localStorage.setItem(`${a}_vue`,"0")}};document.getElementById("vue-run").onclick=function(){m(),x(o.getValue())};m();const $=t=>/createApp/.test(t),w=t=>/Vue/.test(t),y=document.getElementById("vue-test-count"),V=document.getElementById("vue-test-check"),x=t=>{let e=0,s=5;const c=w(t),n=$(t),r=/message|title/i.test(t),i=/<(ul|ol)[\s\S]*?>[\s\S]*?<li[\s\S]*?>[\s\S]*?<\/li>/.test(t),l=/v-for=/.test(t);c&&e++,n&&e++,r&&e++,i&&e++,l&&e++,y.textContent=`test ${e}/${s}`,V.innerHTML=`
  ${c?"✅":"❌"} Vue detected<br />
  ${n?"✅":"❌"} Component present<br />
  ${r?"✅":"❌"} Contains message<br />
  ${i?"✅":"❌"} Uses &lt;ul&gt; + &lt;li&gt;<br />

  ${l?"✅":"❌"} Uses v-for
`;const u=localStorage.getItem("loggedInUser");localStorage.setItem(`${u}_vue`,(e/s*100).toString())};document.getElementById("vue-solution").onclick=function(){const t=`<!-- Vue Solution -->
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
`;o.setValue(t,-1),localStorage.setItem(`vueEditorCode_${a}`,t),m()};
