import"./modulepreload-polyfill-B5Qt9EMX.js";import"./login-OCkAGr7d.js";const o=document.getElementById("progress-table");Object.keys(localStorage).forEach(s=>{if(s.startsWith("user_")){const t=s.replace("user_",""),a=parseInt(localStorage.getItem(`${t}_react`)||0),l=parseInt(localStorage.getItem(`${t}_vue`)||0),d=parseInt(localStorage.getItem(`${t}_angular`)||0),e=i=>`${i}%`,c=a===100&&l===100&&d===100,r=document.createElement("tr");r.innerHTML=`
  <td>${t}</td>
  <td><div class="bar"><div class="fill" style="width:${e(a)}"></div></div></td>
  <td><div class="bar"><div class="fill" style="width:${e(l)}"></div></div></td>
  <td><div class="bar"><div class="fill" style="width:${e(d)}"></div></div></td>
  <td class="center">${c?"✓":"✗"}</td>
`,o.appendChild(r)}});
