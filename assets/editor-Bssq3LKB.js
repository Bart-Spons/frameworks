import"./modulepreload-polyfill-B5Qt9EMX.js";import{b as u}from"./browser-w0s3kXIP.js";const r=localStorage.getItem("loggedInUser"),o=ace.edit("editor");o.setTheme("ace/theme/chrome");o.session.setMode("ace/mode/tsx");o.setOptions({enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,showPrintMargin:!1});const w=localStorage.getItem(`editorCode_${r}`);o.setValue(w||`// TODO: Maak een functionele React component
// TODO: Toon een lijst van todo-items (bijv. met <ul> en <li>)
// TODO: Gebruik een boolean of string die 'liked' bevat
// TODO: Voeg ook ergens het woord 'like' toe in een tekst
  
const App = () => {
    return <h1>I really like React!</h1>;
};
  
const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(<App />);
  
  `,-1);o.session.on("change",()=>{localStorage.setItem(`editorCode_${r}`,o.getValue())});const y=()=>o.getValue(),p=document.getElementById("preview");let g=!1;const b=async t=>(g||(await u.initialize({wasmURL:"https://unpkg.com/esbuild-wasm@0.14.54/esbuild.wasm",worker:!0}),g=!0),(await u.transform(t,{loader:"tsx",target:"es2015"})).code),f=t=>`
  <html>
    <head>
      <script src="https://unpkg.com/react@18/umd/react.development.js"><\/script>
      <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"><\/script>
      <script src="https://unpkg.com/react-dom@18/umd/react-dom-client.development.js"><\/script>
      <script>
        window.ReactDOMClient = window.ReactDOM; // als je createRoot wilt gebruiken
      <\/script>
    </head>
    <body>
      <div id="root"></div>
      <script>
        try {
          ${t}
        } catch (e) {
          document.body.innerHTML = '<pre style="color:red">' + e + '</pre>';
          console.error(e);
        }
      <\/script>
    </body>
  </html>
`,c=async()=>{const t=y(),e=document.getElementById("error-message");try{const s=await b(t);p.srcdoc=f(s),e.textContent="",I(t)}catch(s){e.textContent=s.message,p.srcdoc="",h.textContent="test 0/5",C.textContent="❌ Compile error — tests skipped",localStorage.setItem(`${r}_reactPassed`,"0")}};document.getElementById("run").onclick=function(){c(),I(o.getValue())};c();const h=document.getElementById("test-count"),C=document.getElementById("test-check"),k=document.getElementById("next-button"),I=t=>{let e=0;const s=5,n=t.replace(/\/\/.*|\/\*[\s\S]*?\*\//g,""),i=/<\s*[A-Z][a-zA-Z0-9]*\s*.*?>/.test(n),a=/const\s+[A-Z][a-zA-Z]*\s*=\s*\(/.test(n),l=/<(ul|ol)[\s\S]*?>[\s\S]*?<li[\s\S]*?>[\s\S]*?<\/li>/.test(n),d=/liked/.test(n),m=/['\`"][^'"\`]*like[^'"\`]*['\`"]/.test(n);i&&e++,a&&e++,l&&e++,d&&e++,m&&e++,localStorage.setItem("passed",e.toString()),localStorage.setItem(`${r}_react`,(e/s*100).toString()),h.textContent=`test ${e}/${s}`,C.innerHTML=`
    ${i?"✅":"❌"} JSX detected<br />
    ${a?"✅":"❌"} Component present<br />
    ${l?"✅":"❌"} List with &lt;ul&gt;/&lt;li&gt;<br />
    ${d?"✅":"❌"} Uses 'liked'<br />
    ${m?"✅":"❌"} Contains 'like' in text
  `,e===s?k.classList.add("checked"):k.classList.remove("checked")};document.getElementById("solution").onclick=function(){const t=String.raw`
const App = () => {
  const todos = [
    { text: 'Learn React', liked: true },
    { text: 'Build a project', liked: false },
    { text: 'Review code', liked: true }
  ];

  return (
    <div>
      <p>I really like React!</p>
      <ul>
        {todos.map((todo, index) => {
          return <li key={index}>{todo.text} {todo.liked ? '💻' : ''}</li>;
        })}
      </ul>
    </div>
  );
};

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(<App />);

`;o.setValue(t,-1),localStorage.setItem(`editorCode_${r}`,t),c()};
