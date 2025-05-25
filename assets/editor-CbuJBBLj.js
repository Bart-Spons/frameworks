import"./modulepreload-polyfill-B5Qt9EMX.js";import{b as u}from"./browser-tBeoAdho.js";import{g as v,s as f}from"./firebase-Db5sXO2H.js";const s=localStorage.getItem("loggedInUser");s||(alert("Je bent niet ingelogd. Je wordt doorgestuurd naar de loginpagina."),window.location.href="login.html");const o=ace.edit("editor");o.setTheme("ace/theme/chrome");o.session.setMode("ace/mode/tsx");o.setOptions({enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,showPrintMargin:!1});const g=localStorage.getItem(`editorCode_${s}`);g?(o.setValue(g,-1),r(),a(o.getValue())):v(s).then(e=>{e!=null&&e.codeReact?(o.setValue(e.codeReact,-1),r(),a(o.getValue())):(o.setValue(`// TODO: Maak een functionele React component
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
root.render(<App />);`,-1),r(),a(o.getValue()))});const y=()=>o.getValue(),k=document.getElementById("preview");let w=!1;const C=async e=>(w||(await u.initialize({wasmURL:"https://unpkg.com/esbuild-wasm@0.14.54/esbuild.wasm",worker:!0}),w=!0),(await u.transform(e,{loader:"tsx",target:"es2015"})).code),x=e=>`
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
`,r=async()=>{const e=y(),t=document.getElementById("error-message");try{const n=await C(e);k.srcdoc=x(n),t.textContent="",a(e)}catch(n){t.textContent=n.message,k.srcdoc="",I.textContent="test 0/5",b.textContent="❌ Compile error — tests skipped",localStorage.setItem(`${s}_reactPassed`,"0")}};document.getElementById("run").onclick=async function(){r(),a(o.getValue());const e=o.getValue(),t=parseInt(localStorage.getItem(`${s}_react`)||"0",10);console.log("✅ Opslaan in Firebase:",{username:s,framework:"react",score:t,code:e}),await f(s,"react",t,e)};r();const I=document.getElementById("test-count"),b=document.getElementById("test-check"),h=document.getElementById("next-button"),a=e=>{let t=0;const n=5,c=e.replace(/\/\/.*|\/\*[\s\S]*?\*\//g,""),i=/<\s*[A-Z][a-zA-Z0-9]*\s*.*?>/.test(c),l=/const\s+[A-Z][a-zA-Z]*\s*=\s*\(/.test(c),d=/<(ul|ol)[\s\S]*?>[\s\S]*?<li[\s\S]*?>[\s\S]*?<\/li>/.test(c),m=/liked\s*:\s*(true|false)/.test(c),p=/['\\`"][^'\\`"]*like[^'\\`"]*['\\`"]/.test(c);i&&t++,l&&t++,d&&t++,m&&t++,p&&t++,localStorage.setItem("passed",t.toString()),localStorage.setItem(`${s}_react`,(t/n*100).toString()),I.textContent=`test ${t}/${n}`,b.innerHTML=`
    ${i?"✅":"❌"} JSX detected<br />
    ${l?"✅":"❌"} Component present<br />
    ${d?"✅":"❌"} List with &lt;ul&gt;/&lt;li&gt;<br />
    ${m?"✅":"❌"} Uses 'liked' in a boolean<br />
    ${p?"✅":"❌"} Contains 'like' in an (string) object
  `,t===n?h.classList.add("checked"):h.classList.remove("checked")};document.getElementById("solution").onclick=async function(){const e=String.raw`const App = () => {
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
root.render(<App />);`;o.setValue(e,-1),localStorage.setItem(`editorCode_${s}`,e),r();const t=parseInt(localStorage.getItem(`${s}_react`)||"0",10);await f(s,"react",t,e),console.log("✅ Oplossing opgeslagen voor:",s)};
