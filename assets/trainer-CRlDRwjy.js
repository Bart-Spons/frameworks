import"./modulepreload-polyfill-B5Qt9EMX.js";import"./login-BzapBBEM.js";import{i as g,g as m,c as f,b as v}from"./index.esm2017-CZEr50KX.js";const b={apiKey:"AIzaSyDjtnXhx7SZYi0w_i9iwbszlnwDwH05dvo",authDomain:"framework-training.firebaseapp.com",projectId:"framework-training",storageBucket:"framework-training.firebasestorage.app",messagingSenderId:"813422293720",appId:"1:813422293720:web:d6427d1a59fba939189dad"},w=g(b),u=m(w);async function h(){const r=document.getElementById("progress-table"),o=f(u,"users");(await v(o)).forEach(s=>{const t=s.data(),c=s.id,e=t.react||0,i=t.vue||0,n=t.angular||0,l=e===100&&i===100&&n===100,a=p=>`${p}%`,d=document.createElement("tr");d.innerHTML=`
      <td>${c}</td>
      <td><div class="bar"><div class="fill" style="width:${a(e)}"></div></div></td>
      <td><div class="bar"><div class="fill" style="width:${a(i)}"></div></div></td>
      <td><div class="bar"><div class="fill" style="width:${a(n)}"></div></div></td>
      <td class="center">${l?"✓":"✗"}</td>
    `,r.appendChild(d)})}h();
