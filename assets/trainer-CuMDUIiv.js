import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import"./login--IYxM1P5.js";import{c as m,a as p,d as u}from"./firebase-c-vm1Hnq.js";async function f(){const n=document.getElementById("progress-table"),o=m(u,"users");(await p(o)).forEach(a=>{const t=a.data(),l=a.id,d=t.react||0,e=t.vue||0,c=t.angular||0,r=d===100&&e===100&&c===100,s=v=>`${v}%`,i=document.createElement("tr");i.innerHTML=`
      <td>${l}</td>
      <td><div class="bar"><div class="fill" style="width:${s(d)}"></div></div></td>
      <td><div class="bar"><div class="fill" style="width:${s(e)}"></div></div></td>
      <td><div class="bar"><div class="fill" style="width:${s(c)}"></div></div></td>
      <td class="center">${r?"✓":"✗"}</td>
    `,n.appendChild(i)})}f();
