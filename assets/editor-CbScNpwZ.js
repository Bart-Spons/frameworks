import"./modulepreload-polyfill-B5Qt9EMX.js";import{b as p}from"./browser-8IyP0l0z.js";const n=localStorage.getItem("loggedInUser"),o=ace.edit("editor");o.setTheme("ace/theme/chrome");o.session.setMode("ace/mode/tsx");o.setOptions({enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,showPrintMargin:!1});const v=localStorage.getItem(`editorCode_${n}`);o.setValue(v||`// TODO: Maak een functionele React component
// TODO: Toon een lijst van todo-items (bijv. met <ul> en <li>)
// TODO: Gebruik een boolean of string die 'liked' bevat
// TODO: Voeg ook ergens het woord 'like' toe in een tekst
  
const App = () => {
    return <h1>I really like React!</h1>;
};
  
const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(<App />);
  
  `,-1);o.session.on("change",()=>{localStorage.setItem(`editorCode_${n}`,o.getValue())});const w=()=>o.getValue(),g=document.getElementById("preview");let k=!1;const x=async t=>(k||(await p.initialize({wasmURL:"https://unpkg.com/esbuild-wasm@0.14.54/esbuild.wasm",worker:!0}),k=!0),(await p.transform(t,{loader:"tsx",target:"es2015"})).code),b=t=>`
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
`,l=async()=>{const t=w(),e=document.getElementById("error-message");try{const s=await x(t);g.srcdoc=b(s),e.textContent="",C(t)}catch(s){e.textContent=s.message,g.srcdoc="",h.textContent="test 0/5",I.textContent="❌ Compile error — tests skipped",localStorage.setItem(`${n}_reactPassed`,"0")}};document.getElementById("run").onclick=function(){l(),C(o.getValue())};l();const h=document.getElementById("test-count"),I=document.getElementById("test-check"),y=document.getElementById("next-button"),C=t=>{let e=0;const s=5,c=t.replace(/\/\/.*|\/\*[\s\S]*?\*\//g,""),i=/<\s*[A-Z][a-zA-Z0-9]*\s*.*?>/.test(c),a=/const\s+[A-Z][a-zA-Z]*\s*=\s*\(/.test(c),d=/<(ul|ol)[\s\S]*?>[\s\S]*?<li[\s\S]*?>[\s\S]*?<\/li>/.test(c),m=/liked/.test(c),u=/['\`"][^'"\`]*like[^'"\`]*['\`"]/.test(c);i&&e++,a&&e++,d&&e++,m&&e++,u&&e++,localStorage.setItem("passed",e.toString()),localStorage.setItem(`${n}_react`,(e/s*100).toString()),h.textContent=`test ${e}/${s}`,I.innerHTML=`
    ${i?"✅":"❌"} JSX detected<br />
    ${a?"✅":"❌"} Component present<br />
    ${d?"✅":"❌"} List with &lt;ul&gt;/&lt;li&gt;<br />
    ${m?"✅":"❌"} Uses 'liked'<br />
    ${u?"✅":"❌"} Contains 'like' in text
  `,e===s?y.classList.add("checked"):y.classList.remove("checked")};document.getElementById("solution").onclick=function(){const t=String.raw`
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

`;o.setValue(t,-1),localStorage.setItem(`editorCode_${n}`,t),l()};const r=document.getElementById("intro-overlay"),E=document.getElementById("overlay-close"),f=`${n}_react_intro_seen`;localStorage.getItem(f)?r.style.display="none":r.style.display="flex";document.getElementById("info").addEventListener("click",()=>{r.style.display="flex"});E.addEventListener("click",()=>{r.style.display="none",localStorage.setItem(f,"true")});
