import"./modulepreload-polyfill-B5Qt9EMX.js";import{b as p}from"./browser-8IyP0l0z.js";const c=localStorage.getItem("loggedInUser"),n=ace.edit("editor");n.setTheme("ace/theme/chrome");n.session.setMode("ace/mode/tsx");n.setOptions({enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,showPrintMargin:!1});const x=localStorage.getItem(`editorCode_${c}`);n.setValue(x||`// TODO: Maak een functionele React component
// TODO: Toon een lijst van todo-items (bijv. met <ul> en <li>)
// TODO: Gebruik een boolean of string die 'liked' bevat
// TODO: Voeg ook ergens het woord 'like' toe in een tekst
  
const App = () => {

  // Use an array with text and a boolean
  
  return <h1>I really like React!</h1>;

  //load the boolean and use ul  

};
  
const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(<App />);
  
  `,-1);n.session.on("change",()=>{localStorage.setItem(`editorCode_${c}`,n.getValue())});const S=()=>n.getValue(),g=document.getElementById("preview");let y=!1;const B=async t=>(y||(await p.initialize({wasmURL:"https://unpkg.com/esbuild-wasm@0.14.54/esbuild.wasm",worker:!0}),y=!0),(await p.transform(t,{loader:"tsx",target:"es2015"})).code),L=t=>`
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
`,r=async()=>{const t=S(),e=document.getElementById("error-message");try{const o=await B(t);g.srcdoc=L(o),e.textContent="",b(t)}catch(o){e.textContent=o.message,g.srcdoc="",w.textContent="test 0/5",E.textContent="❌ Compile error — tests skipped",localStorage.setItem(`${c}_reactPassed`,"0")}};document.getElementById("run").onclick=function(){r(),b(n.getValue())};r();const w=document.getElementById("test-count"),E=document.getElementById("test-check"),k=document.getElementById("next-button"),b=t=>{let e=0;const o=5,s=t.replace(/\/\/.*|\/\*[\s\S]*?\*\//g,""),i=/<\s*[A-Z][a-zA-Z0-9]*\s*.*?>/.test(s),a=/const\s+[A-Z][a-zA-Z]*\s*=\s*\(/.test(s),d=/<(ul|ol)[\s\S]*?>[\s\S]*?<li[\s\S]*?>[\s\S]*?<\/li>/.test(s),m=/liked/.test(s),u=/['\`"][^'"\`]*like[^'"\`]*['\`"]/.test(s);i&&e++,a&&e++,d&&e++,m&&e++,u&&e++,localStorage.setItem("passed",e.toString()),localStorage.setItem(`${c}_react`,(e/o*100).toString()),w.textContent=`test ${e}/${o}`,E.innerHTML=`
    ${i?"✅":"❌"} JSX detected<br />
    ${a?"✅":"❌"} Component present<br />
    ${d?"✅":"❌"} List with &lt;ul&gt;/&lt;li&gt;<br />
    ${m?"✅":"❌"} Uses 'liked'<br />
    ${u?"✅":"❌"} Contains 'like' in text
  `,e===o?k.classList.add("checked"):k.classList.remove("checked")};document.getElementById("solution").onclick=function(){const t=String.raw`
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

`;n.setValue(t,-1),localStorage.setItem(`editorCode_${c}`,t),r()};const l=document.getElementById("intro-overlay"),$=document.getElementById("overlay-close"),C=`${c}_react_intro_seen`;localStorage.getItem(C)?l.style.display="none":l.style.display="flex";document.getElementById("info").addEventListener("click",()=>{l.style.display="flex"});$.addEventListener("click",()=>{l.style.display="none",localStorage.setItem(C,"true")});const h=document.querySelectorAll("#information a"),f=document.getElementById("info-indicator"),I=document.getElementById("a-content"),v=document.getElementById("preview-wrapper");h.forEach((t,e)=>{t.addEventListener("click",o=>{o.preventDefault(),h.forEach(s=>s.classList.remove("active")),t.classList.add("active"),e===0?(I.style.display="block",v.style.display="none",f.style.left="0%"):(I.style.display="none",v.style.display="block",f.style.left="50%")})});
