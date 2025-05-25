import"./modulepreload-polyfill-B5Qt9EMX.js";import{b as u}from"./browser-tBeoAdho.js";import{g as B,s as E}from"./firebase-hupVllJr.js";const s=localStorage.getItem("loggedInUser");s||(alert("Je bent niet ingelogd. Je wordt doorgestuurd naar de loginpagina."),window.location.href="login.html");const c=ace.edit("editor");c.setTheme("ace/theme/chrome");c.session.setMode("ace/mode/tsx");c.setOptions({enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,showPrintMargin:!1});const g=document.getElementById("preview"),S=document.getElementById("test-count"),b=document.getElementById("test-check"),y=document.getElementById("next-button");let f=!1;const L=async e=>(f||(await u.initialize({wasmURL:"https://unpkg.com/esbuild-wasm@0.14.54/esbuild.wasm",worker:!0}),f=!0),(await u.transform(e,{loader:"tsx",target:"es2015"})).code),$=e=>`
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
`,A=()=>c.getValue(),l=async()=>{const e=A(),t=document.getElementById("error-message");try{const o=await L(e);g.srcdoc=$(o),t.textContent="",x(e)}catch(o){t.textContent=o.message,g.srcdoc="",S.textContent="test 0/5",b.textContent="❌ Compile error — tests skipped",localStorage.setItem(`${s}_reactPassed`,"0")}},x=e=>{let t=0;const o=5,n=e.replace(/\/\/.*|\/\*[\s\S]*?\*\//g,""),a=/<\s*[A-Z][a-zA-Z0-9]*\s*.*?>/.test(n),i=/const\s+[A-Z][a-zA-Z]*\s*=\s*\(/.test(n),d=/<(ul|ol)[\s\S]*?>[\s\S]*?<li[\s\S]*?>[\s\S]*?<\/li>/.test(n),m=/liked\s*:\s*(true|false)/.test(n),p=/['\\`"][^'\\`"]*like[^'\\`"]*['\\`"]/.test(n);a&&t++,i&&t++,d&&t++,m&&t++,p&&t++,localStorage.setItem("passed",t.toString()),localStorage.setItem(`${s}_react`,(t/o*100).toString()),S.textContent=`test ${t}/${o}`,b.innerHTML=`
    ${a?"✅":"❌"} JSX detected<br />
    ${i?"✅":"❌"} Component present<br />
    ${d?"✅":"❌"} List with &lt;ul&gt;/&lt;li&gt;<br />
    ${m?"✅":"❌"} Uses 'liked' boolean<br />
    ${p?"✅":"❌"} Contains 'like' in string
  `,t===o?y.classList.add("checked"):y.classList.remove("checked")};B(s).then(e=>{const o=(e==null?void 0:e.codeReact)||localStorage.getItem(`editorCode_${s}`)||`// TODO: Maak een functionele React component
const App = () => {
  const text = "";
  const todos = [];

  return (
    <div>
      <p></p>
      <ul>
        {/* Gebruik .map() om de todo's weer te geven */}
      </ul>
    </div>
  );
};

const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(<App />);`;c.setValue(o,-1),l()});document.getElementById("run").onclick=async function(){const e=c.getValue();l(),x(e);const t=parseInt(localStorage.getItem(`${s}_react`)||"0",10);await E(s,"react",t,e)};document.getElementById("solution").onclick=async function(){const e=String.raw`const App = () => {
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
root.render(<App />);`;c.setValue(e,-1),localStorage.setItem(`editorCode_${s}`,e),l();const t=parseInt(localStorage.getItem(`${s}_react`)||"0",10);await E(s,"react",t,e)};const r=document.getElementById("intro-overlay"),R=document.getElementById("overlay-close"),C=`${s}_react_intro_seen`;localStorage.getItem(C)?r.style.display="none":r.style.display="flex";const k=document.getElementById("info");k&&k.addEventListener("click",()=>{r.style.display="flex"});R.addEventListener("click",()=>{r.style.display="none",localStorage.setItem(C,"true")});const I=document.querySelectorAll("#information a"),h=document.getElementById("info-indicator"),v=document.getElementById("a-content"),w=document.getElementById("preview-wrapper");I.forEach((e,t)=>{e.addEventListener("click",o=>{o.preventDefault(),I.forEach(n=>n.classList.remove("active")),e.classList.add("active"),t===0?(v.style.display="block",w.style.display="none",h.style.left="0%"):(v.style.display="none",w.style.display="block",h.style.left="50%")})});
