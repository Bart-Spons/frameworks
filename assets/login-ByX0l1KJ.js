const c=["bart","kyle","capgemini","laura"],i=document.getElementById("overzicht-body");c.forEach(t=>{const e=parseInt(localStorage.getItem(`${t}_react`)||"0"),a=parseInt(localStorage.getItem(`${t}_vue`)||"0"),d=parseInt(localStorage.getItem(`${t}_angular`)||"0"),l=[e,a,d].filter(s=>s>=100).length===3?"✓":"✗",o=document.createElement("tr");o.innerHTML=`
    <td>${t}</td>
    <td><div class="balk"><div class="voortgang" style="width:${e}%"></div></div></td>
    <td><div class="balk"><div class="voortgang" style="width:${a}%"></div></div></td>
    <td><div class="balk"><div class="voortgang" style="width:${d}%"></div></div></td>
    <td>${l}</td>
  `,i.appendChild(o)});
