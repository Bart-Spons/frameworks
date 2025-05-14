const l=[{username:"bart",password:"1234"},{username:"capgemini",password:"academy2024"},{username:"kyle",password:"1234"},{username:"laura",password:"coach"}];document.getElementById("loginButton").addEventListener("click",c);function c(){const e=document.getElementById("username").value.trim(),a=document.getElementById("password").value.trim(),o=document.getElementById("error-msg"),t=l.find(s=>s.username===e&&s.password===a);t?(localStorage.setItem("loggedInUser",t.username),localStorage.setItem(`user_${t.username}`,"true"),window.location.href="./language.html"):o.textContent="Ongeldige gebruikersnaam of wachtwoord."}const i=["bart","kyle","capgemini","laura"],g=document.getElementById("overzicht-body");i.forEach(e=>{const a=parseInt(localStorage.getItem(`${e}_react`)||"0"),o=parseInt(localStorage.getItem(`${e}_vue`)||"0"),t=parseInt(localStorage.getItem(`${e}_angular`)||"0"),r=[a,o,t].filter(d=>d>=100).length===3?"✓":"✗",n=document.createElement("tr");n.innerHTML=`
    <td>${e}</td>
    <td><div class="balk"><div class="voortgang" style="width:${a}%"></div></div></td>
    <td><div class="balk"><div class="voortgang" style="width:${o}%"></div></div></td>
    <td><div class="balk"><div class="voortgang" style="width:${t}%"></div></div></td>
    <td>${r}</td>
  `,g.appendChild(n)});
