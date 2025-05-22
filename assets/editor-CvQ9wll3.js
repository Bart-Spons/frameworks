import"./modulepreload-polyfill-B5Qt9EMX.js";import{b as u}from"./browser-tBeoAdho.js";const r=localStorage.getItem("loggedInUser"),n=ace.edit("editor");n.setTheme("ace/theme/chrome");n.session.setMode("ace/mode/tsx");n.setOptions({enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,showPrintMargin:!1});const x=localStorage.getItem(`editorCode_${r}`);n.setValue(x||`// TODO: Maak een functionele React component
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

// TODO: Render de App component naar het element met id 'root'
const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(<App />);

  
  `,-1);n.session.on("change",()=>{localStorage.setItem(`editorCode_${r}`,n.getValue())});const S=()=>n.getValue(),g=document.getElementById("preview");let y=!1;const B=async t=>(y||(await u.initialize({wasmURL:"https://unpkg.com/esbuild-wasm@0.14.54/esbuild.wasm",worker:!0}),y=!0),(await u.transform(t,{loader:"tsx",target:"es2015"})).code),L=t=>`
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
`,a=async()=>{const t=S(),e=document.getElementById("error-message");try{const o=await B(t);g.srcdoc=L(o),e.textContent="",b(t)}catch(o){e.textContent=o.message,g.srcdoc="",I.textContent="test 0/5",E.textContent="❌ Compile error — tests skipped",localStorage.setItem(`${r}_reactPassed`,"0")}};document.getElementById("run").onclick=function(){a(),b(n.getValue())};a();const I=document.getElementById("test-count"),E=document.getElementById("test-check"),k=document.getElementById("next-button"),b=t=>{let e=0;const o=5,s=t.replace(/\/\/.*|\/\*[\s\S]*?\*\//g,""),l=/<\s*[A-Z][a-zA-Z0-9]*\s*.*?>/.test(s),i=/const\s+[A-Z][a-zA-Z]*\s*=\s*\(/.test(s),d=/<(ul|ol)[\s\S]*?>[\s\S]*?<li[\s\S]*?>[\s\S]*?<\/li>/.test(s),m=/liked\s*:\s*(true|false)/.test(s),p=/['\`"][^'"\`]*like[^'"\`]*['\`"]/.test(s);l&&e++,i&&e++,d&&e++,m&&e++,p&&e++,localStorage.setItem("passed",e.toString()),localStorage.setItem(`${r}_react`,(e/o*100).toString()),I.textContent=`test ${e}/${o}`,E.innerHTML=`
    ${l?"✅":"❌"} JSX detected<br />
    ${i?"✅":"❌"} Component present<br />
    ${d?"✅":"❌"} List with &lt;ul&gt;/&lt;li&gt;<br />
    ${m?"✅":"❌"} Uses 'liked' in a boolean<br />
    ${p?"✅":"❌"} Contains 'like' in an (string) object
  `,e===o?k.classList.add("checked"):k.classList.remove("checked")};document.getElementById("solution").onclick=function(){const t=String.raw`const App = () => {
  // Een string waarin het woord 'like' voorkomt
  const text = "like";

  // Een array van todo-objecten, elk met een boolean 'liked'
  const todos = [
    { text: "Learn React", liked: true },
    { text: "Build a project", liked: false }
  ];

  return (
    <div>
      {/* Toon een tekst waarin 'like' voorkomt */}
      <p>I really {text} React!</p>

      {/* Lijst van todo's */}
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

// Render de App-component naar het element met id 'root'
const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(<App />);


`;n.setValue(t,-1),localStorage.setItem(`editorCode_${r}`,t),a()};const c=document.getElementById("intro-overlay"),O=document.getElementById("overlay-close"),C=`${r}_react_intro_seen`;localStorage.getItem(C)?c.style.display="none":c.style.display="flex";document.getElementById("info").addEventListener("click",()=>{c.style.display="flex"});O.addEventListener("click",()=>{c.style.display="none",localStorage.setItem(C,"true")});const v=document.querySelectorAll("#information a"),h=document.getElementById("info-indicator"),f=document.getElementById("a-content"),w=document.getElementById("preview-wrapper");v.forEach((t,e)=>{t.addEventListener("click",o=>{o.preventDefault(),v.forEach(s=>s.classList.remove("active")),t.classList.add("active"),e===0?(f.style.display="block",w.style.display="none",h.style.left="0%"):(f.style.display="none",w.style.display="block",h.style.left="50%")})});
