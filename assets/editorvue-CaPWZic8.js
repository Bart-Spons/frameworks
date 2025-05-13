import{b as d}from"./browser-DgiB8jYR.js";const o=ace.edit("vue-editor");o.setTheme("ace/theme/github");o.session.setMode("ace/mode/html");o.setOptions({enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,showPrintMargin:!1});const u=localStorage.getItem("loggedInUser"),b=localStorage.getItem(`vueEditorCode_${u}`);o.setValue(b||`<!-- Vue here -->
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
<\/script>`,-1);o.session.on("change",()=>{localStorage.setItem(`vueEditorCode_${u}`,o.getValue())});const w=()=>o.getValue(),m=document.getElementById("vue-preview");let p=!1;const E=async t=>{let e=t;const s=/<script>/,c=/<\/script>/,n=s.exec(e),r=c.exec(e),a=e.substring(n.index+n[0].length,r.index);e=e.slice(0,n.index)+e.slice(r.index+r[0].length);const C=(await S(a)).code,x=/<style>/,V=/<\/style>/,i=x.exec(e),l=V.exec(e),I=e.substring(i.index+i[0].length,l.index);return e=e.slice(0,i.index)+e.slice(l.index+l[0].length),{template:e.trim(),script:C,style:I}};async function S(t){return p||(await d.initialize({wasmURL:"https://unpkg.com/esbuild-wasm@0.14.54/esbuild.wasm",worker:!0}),p=!0),await d.transform(t,{loader:"tsx",target:"es2015"})}const f=(t,e,s)=>`
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
  </html>`,g=async()=>{const t=w(),e=document.getElementById("vue-error-message");try{const{template:s,script:c,style:n}=await E(t);m.srcdoc=f(s,c,n),e.textContent="",v(t)}catch(s){e.textContent=s.message,m.srcdoc="",h.textContent="test 0/3",y.textContent="❌ Compile error — tests skipped",localStorage.setItem(`${u}_vue`,"0")}};document.getElementById("vue-run").onclick=function(){g(),v(o.getValue())};g();const $=t=>/createApp/.test(t),k=t=>/Vue/.test(t),h=document.getElementById("vue-test-count"),y=document.getElementById("vue-test-check"),v=t=>{let e=0,s=3;const c=k(t),n=$(t),r=t.includes("message");c&&e++,n&&e++,r&&e++,h.textContent=`test ${e}/${s}`,y.innerHTML=`
    ${c?"✅":"❌"} Vue detected<br />
    ${n?"✅":"❌"} Component present<br />
    ${r?"✅":"❌"} Contains 'message'
  `;const a=localStorage.getItem("loggedInUser");localStorage.setItem(`${a}_vue`,(e/s*100).toString())};
