import"./modulepreload-polyfill-B5Qt9EMX.js";import{b as p}from"./browser-tBeoAdho.js";import{g as C,s as I}from"./firebase-Db5sXO2H.js";const s=localStorage.getItem("loggedInUser"),o=ace.edit("editor");o.setTheme("ace/theme/chrome");o.session.setMode("ace/mode/tsx");o.setOptions({enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,showPrintMargin:!1});const g=localStorage.getItem(`editorCode_${s}`);g?(o.setValue(g,-1),c(),a(o.getValue())):C(s).then(e=>{e!=null&&e.codeReact?(o.setValue(e.codeReact,-1),c(),a(o.getValue())):(o.setValue(`// TODO: Maak een functionele React component
const App = () => {
  // TODO: Voeg een string toe waarin het woord "like" voorkomt
  const text = "";

  // TODO: Maak een array van todo-objecten
  // Elk object moet een 'text' en een 'liked' boolean bevatten
  const todos = [];

  return (
    <div>
      {/* TODO: Toon een tekst waarin het woord "like" voorkomt */}
      <p></p>

      {/* TODO: Toon een lijst van todo's met <ul> en <li> */}
      <ul>
        {/* Gebruik .map() om de todo's weer te geven */}
      </ul>
    </div>
  );
};

const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(<App />);`,-1),c(),a(o.getValue()))});const b=()=>o.getValue(),k=document.getElementById("preview");let h=!1;const f=async e=>(h||(await p.initialize({wasmURL:"https://unpkg.com/esbuild-wasm@0.14.54/esbuild.wasm",worker:!0}),h=!0),(await p.transform(e,{loader:"tsx",target:"es2015"})).code),x=e=>`
  <html>
    <head>
      <script src="https://unpkg.com/react@18/umd/react.development.js"><\/script>
      <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"><\/script>
      <script src="https://unpkg.com/react-dom@18/umd/react-dom-client.development.js"><\/script>
      <script>
        window.ReactDOMClient = window.ReactDOM;
      <\/script>
    </head>
    <body>
      <div id="root"></div>
      <script>
        try {
          ${e}
        } catch (e) {
          document.body.innerHTML = '<pre style="color:red">' + e + '</pre>';
          console.error(e);
        }
      <\/script>
    </body>
  </html>
`,c=async()=>{const e=b(),t=document.getElementById("error-message");try{const n=await f(e);k.srcdoc=x(n),t.textContent="",a(e)}catch(n){t.textContent=n.message,k.srcdoc="",v.textContent="test 0/5",y.textContent="❌ Compile error — tests skipped",localStorage.setItem(`${s}_reactPassed`,"0")}};document.getElementById("run").onclick=async function(){c(),a(o.getValue());const e=o.getValue(),t=parseInt(localStorage.getItem(`${s}_react`)||"0",10);await I(s,"react",t,e)};c();const v=document.getElementById("test-count"),y=document.getElementById("test-check"),w=document.getElementById("next-button"),a=e=>{let t=0;const n=5,r=e.replace(/\/\/.*|\/\*[\s\S]*?\*\//g,""),i=/<\s*[A-Z][a-zA-Z0-9]*\s*.*?>/.test(r),l=/const\s+[A-Z][a-zA-Z]*\s*=\s*\(/.test(r),d=/<(ul|ol)[\s\S]*?>[\s\S]*?<li[\s\S]*?>[\s\S]*?<\/li>/.test(r),m=/liked\s*:\s*(true|false)/.test(r),u=/['\\`"][^'\\`"]*like[^'\\`"]*['\\`"]/.test(r);i&&t++,l&&t++,d&&t++,m&&t++,u&&t++,localStorage.setItem("passed",t.toString()),localStorage.setItem(`${s}_react`,(t/n*100).toString()),v.textContent=`test ${t}/${n}`,y.innerHTML=`
    ${i?"✅":"❌"} JSX detected<br />
    ${l?"✅":"❌"} Component present<br />
    ${d?"✅":"❌"} List with &lt;ul&gt;/&lt;li&gt;<br />
    ${m?"✅":"❌"} Uses 'liked' in a boolean<br />
    ${u?"✅":"❌"} Contains 'like' in an (string) object
  `,t===n?w.classList.add("checked"):w.classList.remove("checked")};document.getElementById("solution").onclick=async function(){const e=String.raw`const App = () => {
  const text = "like";
  const todos = [
    { text: "Learn React", liked: true },
    { text: "Build a project", liked: false }
  ];

  return (
    <div>
      <p>I really {text} React!</p>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(<App />);`;o.setValue(e,-1),localStorage.setItem(`editorCode_${s}`,e),c();const t=parseInt(localStorage.getItem(`${s}_react`)||"0",10);await I(s,"react",t,e)};
