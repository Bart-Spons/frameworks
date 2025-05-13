import{b as d}from"./browser-DPNBd-r_.js";const C=localStorage.getItem("loggedInUser"),o=ace.edit("editor");o.setTheme("ace/theme/github");o.session.setMode("ace/mode/tsx");o.setOptions({enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,showPrintMargin:!1});const n=localStorage.getItem("loggedInUser"),I=localStorage.getItem(`editorCode_${n}`);o.setValue(I||`// TSX here
const App = () => <h1>Hello from JSX or TSX</h1>;
ReactDOM.render(<App />, document.getElementById('root'));`,-1);o.session.on("change",()=>{localStorage.setItem(`editorCode_${n}`,o.getValue())});const y=()=>o.getValue(),i=document.getElementById("preview");let l=!1;const k=async e=>(l||(await d.initialize({wasmURL:"https://unpkg.com/esbuild-wasm@0.14.54/esbuild.wasm",worker:!0}),l=!0),(await d.transform(e,{loader:"tsx",target:"es2015"})).code),S=e=>`
  <html>
    <head>
      <script src="https://unpkg.com/react@18/umd/react.development.js"><\/script>
      <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"><\/script>
    </head>
    <body>
      <div id="root"></div>
      <script>
        try {
          ${e}
        } catch (e) {
          document.body.innerHTML = '<pre style="color:red">' + e + '</pre>';
        }
      <\/script>
    </body>
  </html>`,u=async()=>{const e=y(),t=document.getElementById("error-message");try{const s=await k(e);i.srcdoc=S(s),t.textContent="",h(e)}catch(s){t.textContent=s.message,i.srcdoc="",p.textContent="test 0/3",g.textContent="❌ Compile error — tests skipped",localStorage.setItem(`${n}_reactPassed`,"0")}};document.getElementById("run").onclick=function(){u(),h(o.getValue())};u();const b=e=>/<\s*[A-Z][a-zA-Z0-9]*\s*.*?>/.test(e),p=document.getElementById("test-count"),g=document.getElementById("test-check"),m=document.getElementById("next-button"),h=e=>{let t=0;const s=3,r=b(e),c=/const\s+[A-Z][a-zA-Z]*\s*=\s*\(/.test(e),a=e.includes("like")&&e.includes("liked");r&&t++,c&&t++,a&&t++,localStorage.setItem("passed",t.toString()),localStorage.setItem(`${C}_react`,(t/s*100).toString()),p.textContent=`test ${t}/${s}`,g.innerHTML=`
    ${r?"✅":"❌"} JSX detected<br />
    ${c?"✅":"❌"} Component present<br />
    ${a?"✅":"❌"} Contains 'like' & 'liked'
  `,t===s?m.classList.add("checked"):m.classList.remove("checked")};
