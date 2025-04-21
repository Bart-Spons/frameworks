(function(){const fe=document.createElement("link").relList;if(fe&&fe.supports&&fe.supports("modulepreload"))return;for(const te of document.querySelectorAll('link[rel="modulepreload"]'))Ee(te);new MutationObserver(te=>{for(const de of te)if(de.type==="childList")for(const Re of de.addedNodes)Re.tagName==="LINK"&&Re.rel==="modulepreload"&&Ee(Re)}).observe(document,{childList:!0,subtree:!0});function we(te){const de={};return te.integrity&&(de.integrity=te.integrity),te.referrerPolicy&&(de.referrerPolicy=te.referrerPolicy),te.crossOrigin==="use-credentials"?de.credentials="include":te.crossOrigin==="anonymous"?de.credentials="omit":de.credentials="same-origin",de}function Ee(te){if(te.ep)return;te.ep=!0;const de=we(te);fetch(te.href,de)}})();var dt={exports:{}};(function(ue){(fe=>{var we=Object.defineProperty,Ee=Object.defineProperties,te=Object.getOwnPropertyDescriptor,de=Object.getOwnPropertyDescriptors,Re=Object.getOwnPropertyNames,Je=Object.getOwnPropertySymbols,Ge=Object.prototype.hasOwnProperty,pt=Object.prototype.propertyIsEnumerable,He=(e,t,r)=>t in e?we(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Ye=(e,t)=>{for(var r in t||(t={}))Ge.call(t,r)&&He(e,r,t[r]);if(Je)for(var r of Je(t))pt.call(t,r)&&He(e,r,t[r]);return e},Xe=(e,t)=>Ee(e,de(t)),yt=(e,t)=>{for(var r in t)we(e,r,{get:t[r],enumerable:!0})},wt=(e,t,r,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let p of Re(t))!Ge.call(e,p)&&p!==r&&we(e,p,{get:()=>t[p],enumerable:!(o=te(t,p))||o.enumerable});return e},bt=e=>wt(we({},"__esModule",{value:!0}),e),Oe=(e,t,r)=>new Promise((o,p)=>{var y=i=>{try{w(r.next(i))}catch(T){p(T)}},s=i=>{try{w(r.throw(i))}catch(T){p(T)}},w=i=>i.done?o(i.value):Promise.resolve(i.value).then(y,s);w((r=r.apply(e,t)).next())}),De={};yt(De,{analyzeMetafile:()=>Ut,analyzeMetafileSync:()=>Ft,build:()=>Rt,buildSync:()=>Nt,default:()=>Wt,formatMessages:()=>At,formatMessagesSync:()=>Vt,initialize:()=>Bt,serve:()=>Dt,transform:()=>It,transformSync:()=>Mt,version:()=>Ct}),fe.exports=bt(De);function Ke(e){let t=o=>{if(o===null)r.write8(0);else if(typeof o=="boolean")r.write8(1),r.write8(+o);else if(typeof o=="number")r.write8(2),r.write32(o|0);else if(typeof o=="string")r.write8(3),r.write(ve(o));else if(o instanceof Uint8Array)r.write8(4),r.write(o);else if(o instanceof Array){r.write8(5),r.write32(o.length);for(let p of o)t(p)}else{let p=Object.keys(o);r.write8(6),r.write32(p.length);for(let y of p)r.write(ve(y)),t(o[y])}},r=new Ze;return r.write32(0),r.write32(e.id<<1|+!e.isRequest),t(e.value),Fe(r.buf,r.len-4,0),r.buf.subarray(0,r.len)}function vt(e){let t=()=>{switch(r.read8()){case 0:return null;case 1:return!!r.read8();case 2:return r.read32();case 3:return je(r.read());case 4:return r.read();case 5:{let s=r.read32(),w=[];for(let i=0;i<s;i++)w.push(t());return w}case 6:{let s=r.read32(),w={};for(let i=0;i<s;i++)w[je(r.read())]=t();return w}default:throw new Error("Invalid packet")}},r=new Ze(e),o=r.read32(),p=(o&1)===0;o>>>=1;let y=t();if(r.ptr!==e.length)throw new Error("Invalid packet");return{id:o,isRequest:p,value:y}}var Ze=class{constructor(e=new Uint8Array(1024)){this.buf=e,this.len=0,this.ptr=0}_write(e){if(this.len+e>this.buf.length){let t=new Uint8Array((this.len+e)*2);t.set(this.buf),this.buf=t}return this.len+=e,this.len-e}write8(e){let t=this._write(1);this.buf[t]=e}write32(e){let t=this._write(4);Fe(this.buf,e,t)}write(e){let t=this._write(4+e.length);Fe(this.buf,e.length,t),this.buf.set(e,t+4)}_read(e){if(this.ptr+e>this.buf.length)throw new Error("Invalid packet");return this.ptr+=e,this.ptr-e}read8(){return this.buf[this._read(1)]}read32(){return qe(this.buf,this._read(4))}read(){let e=this.read32(),t=new Uint8Array(e),r=this._read(t.length);return t.set(this.buf.subarray(r,r+e)),t}},ve,je;if(typeof TextEncoder<"u"&&typeof TextDecoder<"u"){let e=new TextEncoder,t=new TextDecoder;ve=r=>e.encode(r),je=r=>t.decode(r)}else if(typeof Buffer<"u")ve=e=>{let t=Buffer.from(e);return t instanceof Uint8Array||(t=new Uint8Array(t)),t},je=e=>{let{buffer:t,byteOffset:r,byteLength:o}=e;return Buffer.from(t,r,o).toString()};else throw new Error("No UTF-8 codec found");function qe(e,t){return e[t++]|e[t++]<<8|e[t++]<<16|e[t++]<<24}function Fe(e,t,r){e[r++]=t,e[r++]=t>>8,e[r++]=t>>16,e[r++]=t>>24}function Qe(e){if(e+="",e.indexOf(",")>=0)throw new Error(`Invalid target: ${e}`);return e}var Ie=()=>null,K=e=>typeof e=="boolean"?null:"a boolean",xt=e=>typeof e=="boolean"||typeof e=="object"&&!Array.isArray(e)?null:"a boolean or an object",x=e=>typeof e=="string"?null:"a string",Ae=e=>e instanceof RegExp?null:"a RegExp object",Te=e=>typeof e=="number"&&e===(e|0)?null:"an integer",Be=e=>typeof e=="function"?null:"a function",le=e=>Array.isArray(e)?null:"an array",xe=e=>typeof e=="object"&&e!==null&&!Array.isArray(e)?null:"an object",_t=e=>e instanceof WebAssembly.Module?null:"a WebAssembly.Module",kt=e=>typeof e=="object"&&e!==null?null:"an array or an object",et=e=>typeof e=="object"&&!Array.isArray(e)?null:"an object or null",tt=e=>typeof e=="string"||typeof e=="boolean"?null:"a string or a boolean",Et=e=>typeof e=="string"||typeof e=="object"&&e!==null&&!Array.isArray(e)?null:"a string or an object",St=e=>typeof e=="string"||Array.isArray(e)?null:"a string or an array",nt=e=>typeof e=="string"||e instanceof Uint8Array?null:"a string or a Uint8Array";function l(e,t,r,o){let p=e[r];if(t[r+""]=!0,p===void 0)return;let y=o(p);if(y!==null)throw new Error(`"${r}" must be ${y}`);return p}function ie(e,t,r){for(let o in e)if(!(o in t))throw new Error(`Invalid option ${r}: "${o}"`)}function Ot(e){let t=Object.create(null),r=l(e,t,"wasmURL",x),o=l(e,t,"wasmModule",_t),p=l(e,t,"worker",K);return ie(e,t,"in initialize() call"),{wasmURL:r,wasmModule:o,worker:p}}function rt(e){let t;if(e!==void 0){t=Object.create(null);for(let r of Object.keys(e)){let o=e[r];if(typeof o=="string"||o===!1)t[r]=o;else throw new Error(`Expected ${JSON.stringify(r)} in mangle cache to map to either a string or false`)}}return t}function Ue(e,t,r,o,p){let y=l(t,r,"color",K),s=l(t,r,"logLevel",x),w=l(t,r,"logLimit",Te);y!==void 0?e.push(`--color=${y}`):o&&e.push("--color=true"),e.push(`--log-level=${s||p}`),e.push(`--log-limit=${w||0}`)}function lt(e,t,r){let o=l(t,r,"legalComments",x),p=l(t,r,"sourceRoot",x),y=l(t,r,"sourcesContent",K),s=l(t,r,"target",St),w=l(t,r,"format",x),i=l(t,r,"globalName",x),T=l(t,r,"mangleProps",Ae),B=l(t,r,"reserveProps",Ae),O=l(t,r,"mangleQuoted",K),m=l(t,r,"minify",K),W=l(t,r,"minifySyntax",K),Y=l(t,r,"minifyWhitespace",K),D=l(t,r,"minifyIdentifiers",K),g=l(t,r,"drop",le),h=l(t,r,"charset",x),v=l(t,r,"treeShaking",K),$=l(t,r,"ignoreAnnotations",K),R=l(t,r,"jsx",x),I=l(t,r,"jsxFactory",x),Q=l(t,r,"jsxFragment",x),n=l(t,r,"jsxImportSource",x),d=l(t,r,"jsxDev",K),C=l(t,r,"define",xe),c=l(t,r,"logOverride",xe),u=l(t,r,"supported",xe),f=l(t,r,"pure",le),b=l(t,r,"keepNames",K),L=l(t,r,"platform",x);if(o&&e.push(`--legal-comments=${o}`),p!==void 0&&e.push(`--source-root=${p}`),y!==void 0&&e.push(`--sources-content=${y}`),s&&(Array.isArray(s)?e.push(`--target=${Array.from(s).map(Qe).join(",")}`):e.push(`--target=${Qe(s)}`)),w&&e.push(`--format=${w}`),i&&e.push(`--global-name=${i}`),L&&e.push(`--platform=${L}`),m&&e.push("--minify"),W&&e.push("--minify-syntax"),Y&&e.push("--minify-whitespace"),D&&e.push("--minify-identifiers"),h&&e.push(`--charset=${h}`),v!==void 0&&e.push(`--tree-shaking=${v}`),$&&e.push("--ignore-annotations"),g)for(let j of g)e.push(`--drop:${j}`);if(T&&e.push(`--mangle-props=${T.source}`),B&&e.push(`--reserve-props=${B.source}`),O!==void 0&&e.push(`--mangle-quoted=${O}`),R&&e.push(`--jsx=${R}`),I&&e.push(`--jsx-factory=${I}`),Q&&e.push(`--jsx-fragment=${Q}`),n&&e.push(`--jsx-import-source=${n}`),d&&e.push("--jsx-dev"),C)for(let j in C){if(j.indexOf("=")>=0)throw new Error(`Invalid define: ${j}`);e.push(`--define:${j}=${C[j]}`)}if(c)for(let j in c){if(j.indexOf("=")>=0)throw new Error(`Invalid log override: ${j}`);e.push(`--log-override:${j}=${c[j]}`)}if(u)for(let j in u){if(j.indexOf("=")>=0)throw new Error(`Invalid supported: ${j}`);e.push(`--supported:${j}=${u[j]}`)}if(f)for(let j of f)e.push(`--pure:${j}`);b&&e.push("--keep-names")}function jt(e,t,r,o,p){var y;let s=[],w=[],i=Object.create(null),T=null,B=null,O=null;Ue(s,t,i,r,o),lt(s,t,i);let m=l(t,i,"sourcemap",tt),W=l(t,i,"bundle",K),Y=l(t,i,"watch",xt),D=l(t,i,"splitting",K),g=l(t,i,"preserveSymlinks",K),h=l(t,i,"metafile",K),v=l(t,i,"outfile",x),$=l(t,i,"outdir",x),R=l(t,i,"outbase",x),I=l(t,i,"tsconfig",x),Q=l(t,i,"resolveExtensions",le),n=l(t,i,"nodePaths",le),d=l(t,i,"mainFields",le),C=l(t,i,"conditions",le),c=l(t,i,"external",le),u=l(t,i,"loader",xe),f=l(t,i,"outExtension",xe),b=l(t,i,"publicPath",x),L=l(t,i,"entryNames",x),j=l(t,i,"chunkNames",x),V=l(t,i,"assetNames",x),U=l(t,i,"inject",le),z=l(t,i,"banner",xe),F=l(t,i,"footer",xe),P=l(t,i,"entryPoints",kt),X=l(t,i,"absWorkingDir",x),A=l(t,i,"stdin",xe),J=(y=l(t,i,"write",K))!=null?y:p,q=l(t,i,"allowOverwrite",K),pe=l(t,i,"incremental",K)===!0,N=l(t,i,"mangleCache",xe);if(i.plugins=!0,ie(t,i,`in ${e}() call`),m&&s.push(`--sourcemap${m===!0?"":`=${m}`}`),W&&s.push("--bundle"),q&&s.push("--allow-overwrite"),Y)if(s.push("--watch"),typeof Y=="boolean")O={};else{let a=Object.create(null),_=l(Y,a,"onRebuild",Be);ie(Y,a,`on "watch" in ${e}() call`),O={onRebuild:_}}if(D&&s.push("--splitting"),g&&s.push("--preserve-symlinks"),h&&s.push("--metafile"),v&&s.push(`--outfile=${v}`),$&&s.push(`--outdir=${$}`),R&&s.push(`--outbase=${R}`),I&&s.push(`--tsconfig=${I}`),Q){let a=[];for(let _ of Q){if(_+="",_.indexOf(",")>=0)throw new Error(`Invalid resolve extension: ${_}`);a.push(_)}s.push(`--resolve-extensions=${a.join(",")}`)}if(b&&s.push(`--public-path=${b}`),L&&s.push(`--entry-names=${L}`),j&&s.push(`--chunk-names=${j}`),V&&s.push(`--asset-names=${V}`),d){let a=[];for(let _ of d){if(_+="",_.indexOf(",")>=0)throw new Error(`Invalid main field: ${_}`);a.push(_)}s.push(`--main-fields=${a.join(",")}`)}if(C){let a=[];for(let _ of C){if(_+="",_.indexOf(",")>=0)throw new Error(`Invalid condition: ${_}`);a.push(_)}s.push(`--conditions=${a.join(",")}`)}if(c)for(let a of c)s.push(`--external:${a}`);if(z)for(let a in z){if(a.indexOf("=")>=0)throw new Error(`Invalid banner file type: ${a}`);s.push(`--banner:${a}=${z[a]}`)}if(F)for(let a in F){if(a.indexOf("=")>=0)throw new Error(`Invalid footer file type: ${a}`);s.push(`--footer:${a}=${F[a]}`)}if(U)for(let a of U)s.push(`--inject:${a}`);if(u)for(let a in u){if(a.indexOf("=")>=0)throw new Error(`Invalid loader extension: ${a}`);s.push(`--loader:${a}=${u[a]}`)}if(f)for(let a in f){if(a.indexOf("=")>=0)throw new Error(`Invalid out extension: ${a}`);s.push(`--out-extension:${a}=${f[a]}`)}if(P)if(Array.isArray(P))for(let a of P)w.push(["",a+""]);else for(let[a,_]of Object.entries(P))w.push([a+"",_+""]);if(A){let a=Object.create(null),_=l(A,a,"contents",nt),Z=l(A,a,"resolveDir",x),ne=l(A,a,"sourcefile",x),E=l(A,a,"loader",x);ie(A,a,'in "stdin" object'),ne&&s.push(`--sourcefile=${ne}`),E&&s.push(`--loader=${E}`),Z&&(B=Z+""),typeof _=="string"?T=ve(_):_ instanceof Uint8Array&&(T=_)}let S=[];if(n)for(let a of n)a+="",S.push(a);return{entries:w,flags:s,write:J,stdinContents:T,stdinResolveDir:B,absWorkingDir:X,incremental:pe,nodePaths:S,watch:O,mangleCache:rt(N)}}function Tt(e,t,r,o){let p=[],y=Object.create(null);Ue(p,t,y,r,o),lt(p,t,y);let s=l(t,y,"sourcemap",tt),w=l(t,y,"tsconfigRaw",Et),i=l(t,y,"sourcefile",x),T=l(t,y,"loader",x),B=l(t,y,"banner",x),O=l(t,y,"footer",x),m=l(t,y,"mangleCache",xe);return ie(t,y,`in ${e}() call`),s&&p.push(`--sourcemap=${s===!0?"external":s}`),w&&p.push(`--tsconfig-raw=${typeof w=="string"?w:JSON.stringify(w)}`),i&&p.push(`--sourcefile=${i}`),T&&p.push(`--loader=${T}`),B&&p.push(`--banner=${B}`),O&&p.push(`--footer=${O}`),{flags:p,mangleCache:rt(m)}}function $t(e){let t=new Map,r=new Map,o=new Map,p=new Map,y=null,s=0,w=0,i=new Uint8Array(16*1024),T=0,B=c=>{let u=T+c.length;if(u>i.length){let b=new Uint8Array(u*2);b.set(i),i=b}i.set(c,T),T+=c.length;let f=0;for(;f+4<=T;){let b=qe(i,f);if(f+4+b>T)break;f+=4,g(i.subarray(f,f+b)),f+=b}f>0&&(i.copyWithin(0,f,T),T-=f)},O=c=>{y={reason:c?": "+(c.message||c):""};const u="The service was stopped"+y.reason;for(let f of t.values())f(u,null);t.clear();for(let f of p.values())f.onWait(u);p.clear();for(let f of o.values())try{f(new Error(u),null)}catch(b){console.error(b)}o.clear()},m=(c,u,f)=>{if(y)return f("The service is no longer running"+y.reason,null);let b=s++;t.set(b,(L,j)=>{try{f(L,j)}finally{c&&c.unref()}}),c&&c.ref(),e.writeToStdin(Ke({id:b,isRequest:!0,value:u}))},W=(c,u)=>{if(y)throw new Error("The service is no longer running"+y.reason);e.writeToStdin(Ke({id:c,isRequest:!1,value:u}))},Y=(c,u)=>Oe(this,null,function*(){try{switch(u.command){case"ping":{W(c,{});break}case"on-start":{let f=r.get(u.key);f?W(c,yield f(u)):W(c,{});break}case"on-resolve":{let f=r.get(u.key);f?W(c,yield f(u)):W(c,{});break}case"on-load":{let f=r.get(u.key);f?W(c,yield f(u)):W(c,{});break}case"serve-request":{let f=p.get(u.key);f&&f.onRequest&&f.onRequest(u.args),W(c,{});break}case"serve-wait":{let f=p.get(u.key);f&&f.onWait(u.error),W(c,{});break}case"watch-rebuild":{let f=o.get(u.key);try{f&&f(null,u.args)}catch(b){console.error(b)}W(c,{});break}default:throw new Error("Invalid command: "+u.command)}}catch(f){W(c,{errors:[$e(f,e,null,void 0,"")]})}}),D=!0,g=c=>{if(D){D=!1;let f=String.fromCharCode(...c);if(f!=="0.14.54")throw new Error(`Cannot start service: Host version "0.14.54" does not match binary version ${JSON.stringify(f)}`);return}let u=vt(c);if(u.isRequest)Y(u.id,u.value);else{let f=t.get(u.id);t.delete(u.id),u.value.error?f(u.value.error,{}):f(null,u.value)}},h=(c,u,f,b,L)=>Oe(this,null,function*(){let j=[],V=[],U={},z={},F=0,P=0,X=[],A=!1;u=[...u];for(let N of u){let S={};if(typeof N!="object")throw new Error(`Plugin at index ${P} must be an object`);const a=l(N,S,"name",x);if(typeof a!="string"||a==="")throw new Error(`Plugin at index ${P} is missing a name`);try{let _=l(N,S,"setup",Be);if(typeof _!="function")throw new Error("Plugin is missing a setup function");ie(N,S,`on plugin ${JSON.stringify(a)}`);let Z={name:a,onResolve:[],onLoad:[]};P++;let E=_({initialOptions:c,resolve:(k,G={})=>{if(!A)throw new Error('Cannot call "resolve" before plugin setup has completed');if(typeof k!="string")throw new Error("The path to resolve must be a string");let M=Object.create(null),oe=l(G,M,"pluginName",x),ee=l(G,M,"importer",x),se=l(G,M,"namespace",x),me=l(G,M,"resolveDir",x),ce=l(G,M,"kind",x),H=l(G,M,"pluginData",Ie);return ie(G,M,"in resolve() call"),new Promise((ae,he)=>{const re={command:"resolve",path:k,key:f,pluginName:a};oe!=null&&(re.pluginName=oe),ee!=null&&(re.importer=ee),se!=null&&(re.namespace=se),me!=null&&(re.resolveDir=me),ce!=null&&(re.kind=ce),H!=null&&(re.pluginData=b.store(H)),m(L,re,(_e,ge)=>{_e!==null?he(new Error(_e)):ae({errors:ke(ge.errors,b),warnings:ke(ge.warnings,b),path:ge.path,external:ge.external,sideEffects:ge.sideEffects,namespace:ge.namespace,suffix:ge.suffix,pluginData:b.load(ge.pluginData)})})})},onStart(k){let G='This error came from the "onStart" callback registered here:',M=Ne(new Error(G),e,"onStart");j.push({name:a,callback:k,note:M})},onEnd(k){let G='This error came from the "onEnd" callback registered here:',M=Ne(new Error(G),e,"onEnd");V.push({name:a,callback:k,note:M})},onResolve(k,G){let M='This error came from the "onResolve" callback registered here:',oe=Ne(new Error(M),e,"onResolve"),ee={},se=l(k,ee,"filter",Ae),me=l(k,ee,"namespace",x);if(ie(k,ee,`in onResolve() call for plugin ${JSON.stringify(a)}`),se==null)throw new Error("onResolve() call is missing a filter");let ce=F++;U[ce]={name:a,callback:G,note:oe},Z.onResolve.push({id:ce,filter:se.source,namespace:me||""})},onLoad(k,G){let M='This error came from the "onLoad" callback registered here:',oe=Ne(new Error(M),e,"onLoad"),ee={},se=l(k,ee,"filter",Ae),me=l(k,ee,"namespace",x);if(ie(k,ee,`in onLoad() call for plugin ${JSON.stringify(a)}`),se==null)throw new Error("onLoad() call is missing a filter");let ce=F++;z[ce]={name:a,callback:G,note:oe},Z.onLoad.push({id:ce,filter:se.source,namespace:me||""})},esbuild:e.esbuild});E&&(yield E),X.push(Z)}catch(_){return{ok:!1,error:_,pluginName:a}}}const J=N=>Oe(this,null,function*(){switch(N.command){case"on-start":{let S={errors:[],warnings:[]};return yield Promise.all(j.map(a=>Oe(this,[a],function*({name:_,callback:Z,note:ne}){try{let E=yield Z();if(E!=null){if(typeof E!="object")throw new Error(`Expected onStart() callback in plugin ${JSON.stringify(_)} to return an object`);let k={},G=l(E,k,"errors",le),M=l(E,k,"warnings",le);ie(E,k,`from onStart() callback in plugin ${JSON.stringify(_)}`),G!=null&&S.errors.push(...Se(G,"errors",b,_)),M!=null&&S.warnings.push(...Se(M,"warnings",b,_))}}catch(E){S.errors.push($e(E,e,b,ne&&ne(),_))}}))),S}case"on-resolve":{let S={},a="",_,Z;for(let ne of N.ids)try{({name:a,callback:_,note:Z}=U[ne]);let E=yield _({path:N.path,importer:N.importer,namespace:N.namespace,resolveDir:N.resolveDir,kind:N.kind,pluginData:b.load(N.pluginData)});if(E!=null){if(typeof E!="object")throw new Error(`Expected onResolve() callback in plugin ${JSON.stringify(a)} to return an object`);let k={},G=l(E,k,"pluginName",x),M=l(E,k,"path",x),oe=l(E,k,"namespace",x),ee=l(E,k,"suffix",x),se=l(E,k,"external",K),me=l(E,k,"sideEffects",K),ce=l(E,k,"pluginData",Ie),H=l(E,k,"errors",le),ae=l(E,k,"warnings",le),he=l(E,k,"watchFiles",le),re=l(E,k,"watchDirs",le);ie(E,k,`from onResolve() callback in plugin ${JSON.stringify(a)}`),S.id=ne,G!=null&&(S.pluginName=G),M!=null&&(S.path=M),oe!=null&&(S.namespace=oe),ee!=null&&(S.suffix=ee),se!=null&&(S.external=se),me!=null&&(S.sideEffects=me),ce!=null&&(S.pluginData=b.store(ce)),H!=null&&(S.errors=Se(H,"errors",b,a)),ae!=null&&(S.warnings=Se(ae,"warnings",b,a)),he!=null&&(S.watchFiles=Me(he,"watchFiles")),re!=null&&(S.watchDirs=Me(re,"watchDirs"));break}}catch(E){return{id:ne,errors:[$e(E,e,b,Z&&Z(),a)]}}return S}case"on-load":{let S={},a="",_,Z;for(let ne of N.ids)try{({name:a,callback:_,note:Z}=z[ne]);let E=yield _({path:N.path,namespace:N.namespace,suffix:N.suffix,pluginData:b.load(N.pluginData)});if(E!=null){if(typeof E!="object")throw new Error(`Expected onLoad() callback in plugin ${JSON.stringify(a)} to return an object`);let k={},G=l(E,k,"pluginName",x),M=l(E,k,"contents",nt),oe=l(E,k,"resolveDir",x),ee=l(E,k,"pluginData",Ie),se=l(E,k,"loader",x),me=l(E,k,"errors",le),ce=l(E,k,"warnings",le),H=l(E,k,"watchFiles",le),ae=l(E,k,"watchDirs",le);ie(E,k,`from onLoad() callback in plugin ${JSON.stringify(a)}`),S.id=ne,G!=null&&(S.pluginName=G),M instanceof Uint8Array?S.contents=M:M!=null&&(S.contents=ve(M)),oe!=null&&(S.resolveDir=oe),ee!=null&&(S.pluginData=b.store(ee)),se!=null&&(S.loader=se),me!=null&&(S.errors=Se(me,"errors",b,a)),ce!=null&&(S.warnings=Se(ce,"warnings",b,a)),H!=null&&(S.watchFiles=Me(H,"watchFiles")),ae!=null&&(S.watchDirs=Me(ae,"watchDirs"));break}}catch(E){return{id:ne,errors:[$e(E,e,b,Z&&Z(),a)]}}return S}default:throw new Error("Invalid command: "+N.command)}});let q=(N,S,a)=>a();V.length>0&&(q=(N,S,a)=>{Oe(this,null,function*(){for(const{name:_,callback:Z,note:ne}of V)try{yield Z(N)}catch(E){N.errors.push(yield new Promise(k=>S(E,_,ne&&ne(),k)))}}).then(a)}),A=!0;let pe=0;return{ok:!0,requestPlugins:X,runOnEndCallbacks:q,pluginRefs:{ref(){++pe===1&&r.set(f,J)},unref(){--pe===0&&r.delete(f)}}}}),v=(c,u,f,b)=>{let L={},j=l(u,L,"port",Te),V=l(u,L,"host",x),U=l(u,L,"servedir",x),z=l(u,L,"onRequest",Be),F,P=new Promise((X,A)=>{F=J=>{p.delete(b),J!==null?A(new Error(J)):X()}});return f.serve={},ie(u,L,"in serve() call"),j!==void 0&&(f.serve.port=j),V!==void 0&&(f.serve.host=V),U!==void 0&&(f.serve.servedir=U),p.set(b,{onRequest:z,onWait:F}),{wait:P,stop(){m(c,{command:"serve-stop",key:b},()=>{})}}};const $="warning",R="silent";let I=c=>{let u=w++;const f=st();let b,{refs:L,options:j,isTTY:V,callback:U}=c;if(typeof j=="object"){let P=j.plugins;if(P!==void 0){if(!Array.isArray(P))throw new Error('"plugins" must be an array');b=P}}let z=(P,X,A,J)=>{let q=[];try{Ue(q,j,{},V,$)}catch{}const pe=$e(P,e,f,A,X);m(L,{command:"error",flags:q,error:pe},()=>{pe.detail=f.load(pe.detail),J(pe)})},F=(P,X)=>{z(P,X,void 0,A=>{U(Pe("Build failed",[A],[]),null)})};if(b&&b.length>0){if(e.isSync)return F(new Error("Cannot use plugins in synchronous API calls"),"");h(j,b,u,f,L).then(P=>{if(!P.ok)F(P.error,P.pluginName);else try{Q(Xe(Ye({},c),{key:u,details:f,logPluginError:z,requestPlugins:P.requestPlugins,runOnEndCallbacks:P.runOnEndCallbacks,pluginRefs:P.pluginRefs}))}catch(X){F(X,"")}},P=>F(P,""))}else try{Q(Xe(Ye({},c),{key:u,details:f,logPluginError:z,requestPlugins:null,runOnEndCallbacks:(P,X,A)=>A(),pluginRefs:null}))}catch(P){F(P,"")}},Q=({callName:c,refs:u,serveOptions:f,options:b,isTTY:L,defaultWD:j,callback:V,key:U,details:z,logPluginError:F,requestPlugins:P,runOnEndCallbacks:X,pluginRefs:A})=>{const J={ref(){A&&A.ref(),u&&u.ref()},unref(){A&&A.unref(),u&&u.unref()}};let q=!e.isWriteUnavailable,{entries:pe,flags:N,write:S,stdinContents:a,stdinResolveDir:_,absWorkingDir:Z,incremental:ne,nodePaths:E,watch:k,mangleCache:G}=jt(c,b,L,$,q),M={command:"build",key:U,entries:pe,flags:N,write:S,stdinContents:a,stdinResolveDir:_,absWorkingDir:Z||j,incremental:ne,nodePaths:E};P&&(M.plugins=P),G&&(M.mangleCache=G);let oe=f&&v(J,f,M,U),ee,se,me=(H,ae)=>{H.outputFiles&&(ae.outputFiles=H.outputFiles.map(Pt)),H.metafile&&(ae.metafile=JSON.parse(H.metafile)),H.mangleCache&&(ae.mangleCache=H.mangleCache),H.writeToStdout!==void 0&&console.log(je(H.writeToStdout).replace(/\n$/,""))},ce=(H,ae)=>{let he={errors:ke(H.errors,z),warnings:ke(H.warnings,z)};me(H,he),X(he,F,()=>{if(he.errors.length>0)return ae(Pe("Build failed",he.errors,he.warnings),null);if(H.rebuild){if(!ee){let re=!1;ee=()=>new Promise((_e,ge)=>{if(re||y)throw new Error("Cannot rebuild");m(J,{command:"rebuild",key:U},(be,zt)=>{if(be)return ae(Pe("Build failed",[{id:"",pluginName:"",text:be,location:null,notes:[],detail:void 0}],[]),null);ce(zt,(We,Jt)=>{We?ge(We):_e(Jt)})})}),J.ref(),ee.dispose=()=>{re||(re=!0,m(J,{command:"rebuild-dispose",key:U},()=>{}),J.unref())}}he.rebuild=ee}if(H.watch){if(!se){let re=!1;J.ref(),se=()=>{re||(re=!0,o.delete(U),m(J,{command:"watch-stop",key:U},()=>{}),J.unref())},k&&o.set(U,(_e,ge)=>{if(_e){k.onRebuild&&k.onRebuild(_e,null);return}let be={errors:ke(ge.errors,z),warnings:ke(ge.warnings,z)};me(ge,be),X(be,F,()=>{if(be.errors.length>0){k.onRebuild&&k.onRebuild(Pe("Build failed",be.errors,be.warnings),null);return}ge.rebuildID!==void 0&&(be.rebuild=ee),be.stop=se,k.onRebuild&&k.onRebuild(null,be)})})}he.stop=se}ae(null,he)})};if(S&&e.isWriteUnavailable)throw new Error('The "write" option is unavailable in this environment');if(ne&&e.isSync)throw new Error('Cannot use "incremental" with a synchronous build');if(k&&e.isSync)throw new Error('Cannot use "watch" with a synchronous build');m(J,M,(H,ae)=>{if(H)return V(new Error(H),null);if(oe){let he=ae,re=!1;J.ref();let _e={port:he.port,host:he.host,wait:oe.wait,stop(){re||(re=!0,oe.stop(),J.unref())}};return J.ref(),oe.wait.then(J.unref,J.unref),V(null,_e)}return ce(ae,V)})};return{readFromStdout:B,afterClose:O,service:{buildOrServe:I,transform:({callName:c,refs:u,input:f,options:b,isTTY:L,fs:j,callback:V})=>{const U=st();let z=F=>{try{if(typeof f!="string"&&!(f instanceof Uint8Array))throw new Error('The input to "transform" must be a string or a Uint8Array');let{flags:P,mangleCache:X}=Tt(c,b,L,R),A={command:"transform",flags:P,inputFS:F!==null,input:F!==null?ve(F):typeof f=="string"?ve(f):f};X&&(A.mangleCache=X),m(u,A,(J,q)=>{if(J)return V(new Error(J),null);let pe=ke(q.errors,U),N=ke(q.warnings,U),S=1,a=()=>{if(--S===0){let _={warnings:N,code:q.code,map:q.map};q.mangleCache&&(_.mangleCache=q==null?void 0:q.mangleCache),V(null,_)}};if(pe.length>0)return V(Pe("Transform failed",pe,N),null);q.codeFS&&(S++,j.readFile(q.code,(_,Z)=>{_!==null?V(_,null):(q.code=Z,a())})),q.mapFS&&(S++,j.readFile(q.map,(_,Z)=>{_!==null?V(_,null):(q.map=Z,a())})),a()})}catch(P){let X=[];try{Ue(X,b,{},L,R)}catch{}const A=$e(P,e,U,void 0,"");m(u,{command:"error",flags:X,error:A},()=>{A.detail=U.load(A.detail),V(Pe("Transform failed",[A],[]),null)})}};if((typeof f=="string"||f instanceof Uint8Array)&&f.length>1024*1024){let F=z;z=()=>j.writeFile(f,F)}z(null)},formatMessages:({callName:c,refs:u,messages:f,options:b,callback:L})=>{let j=Se(f,"messages",null,"");if(!b)throw new Error(`Missing second argument in ${c}() call`);let V={},U=l(b,V,"kind",x),z=l(b,V,"color",K),F=l(b,V,"terminalWidth",Te);if(ie(b,V,`in ${c}() call`),U===void 0)throw new Error(`Missing "kind" in ${c}() call`);if(U!=="error"&&U!=="warning")throw new Error(`Expected "kind" to be "error" or "warning" in ${c}() call`);let P={command:"format-msgs",messages:j,isWarning:U==="warning"};z!==void 0&&(P.color=z),F!==void 0&&(P.terminalWidth=F),m(u,P,(X,A)=>{if(X)return L(new Error(X),null);L(null,A.messages)})},analyzeMetafile:({callName:c,refs:u,metafile:f,options:b,callback:L})=>{b===void 0&&(b={});let j={},V=l(b,j,"color",K),U=l(b,j,"verbose",K);ie(b,j,`in ${c}() call`);let z={command:"analyze-metafile",metafile:f};V!==void 0&&(z.color=V),U!==void 0&&(z.verbose=U),m(u,z,(F,P)=>{if(F)return L(new Error(F),null);L(null,P.result)})}}}}function st(){const e=new Map;let t=0;return{load(r){return e.get(r)},store(r){if(r===void 0)return-1;const o=t++;return e.set(o,r),o}}}function Ne(e,t,r){let o,p=!1;return()=>{if(p)return o;p=!0;try{let y=(e.stack+"").split(`
`);y.splice(1,1);let s=it(t,y,r);if(s)return o={text:e.message,location:s},o}catch{}}}function $e(e,t,r,o,p){let y="Internal error",s=null;try{y=(e&&e.message||e)+""}catch{}try{s=it(t,(e.stack+"").split(`
`),"")}catch{}return{id:"",pluginName:p,text:y,location:s,notes:o?[o]:[],detail:r?r.store(e):-1}}function it(e,t,r){let o="    at ";if(e.readFileSync&&!t[0].startsWith(o)&&t[1].startsWith(o))for(let p=1;p<t.length;p++){let y=t[p];if(y.startsWith(o))for(y=y.slice(o.length);;){let s=/^(?:new |async )?\S+ \((.*)\)$/.exec(y);if(s){y=s[1];continue}if(s=/^eval at \S+ \((.*)\)(?:, \S+:\d+:\d+)?$/.exec(y),s){y=s[1];continue}if(s=/^(\S+):(\d+):(\d+)$/.exec(y),s){let w;try{w=e.readFileSync(s[1],"utf8")}catch{break}let i=w.split(/\r\n|\r|\n|\u2028|\u2029/)[+s[2]-1]||"",T=+s[3]-1,B=i.slice(T,T+r.length)===r?r.length:0;return{file:s[1],namespace:"file",line:+s[2],column:ve(i.slice(0,T)).length,length:ve(i.slice(T,T+B)).length,lineText:i+`
`+t.slice(1).join(`
`),suggestion:""}}break}}return null}function Pe(e,t,r){let o=5,p=t.length<1?"":` with ${t.length} error${t.length<2?"":"s"}:`+t.slice(0,o+1).map((s,w)=>{if(w===o)return`
...`;if(!s.location)return`
error: ${s.text}`;let{file:i,line:T,column:B}=s.location,O=s.pluginName?`[plugin: ${s.pluginName}] `:"";return`
${i}:${T}:${B}: ERROR: ${O}${s.text}`}).join(""),y=new Error(`${e}${p}`);return y.errors=t,y.warnings=r,y}function ke(e,t){for(const r of e)r.detail=t.load(r.detail);return e}function at(e,t){if(e==null)return null;let r={},o=l(e,r,"file",x),p=l(e,r,"namespace",x),y=l(e,r,"line",Te),s=l(e,r,"column",Te),w=l(e,r,"length",Te),i=l(e,r,"lineText",x),T=l(e,r,"suggestion",x);return ie(e,r,t),{file:o||"",namespace:p||"",line:y||0,column:s||0,length:w||0,lineText:i||"",suggestion:T||""}}function Se(e,t,r,o){let p=[],y=0;for(const s of e){let w={},i=l(s,w,"id",x),T=l(s,w,"pluginName",x),B=l(s,w,"text",x),O=l(s,w,"location",et),m=l(s,w,"notes",le),W=l(s,w,"detail",Ie),Y=`in element ${y} of "${t}"`;ie(s,w,Y);let D=[];if(m)for(const g of m){let h={},v=l(g,h,"text",x),$=l(g,h,"location",et);ie(g,h,Y),D.push({text:v||"",location:at($,Y)})}p.push({id:i||"",pluginName:T||o,text:B||"",location:at(O,Y),notes:D,detail:r?r.store(W):-1}),y++}return p}function Me(e,t){const r=[];for(const o of e){if(typeof o!="string")throw new Error(`${JSON.stringify(t)} must be an array of strings`);r.push(o)}return r}function Pt({path:e,contents:t}){let r=null;return{path:e,contents:t,get text(){const o=this.contents;return(r===null||o!==t)&&(t=o,r=je(o)),r}}}var Ct="0.14.54",Rt=e=>Ve().build(e),Dt=()=>{throw new Error('The "serve" API only works in node')},It=(e,t)=>Ve().transform(e,t),At=(e,t)=>Ve().formatMessages(e,t),Ut=(e,t)=>Ve().analyzeMetafile(e,t),Nt=()=>{throw new Error('The "buildSync" API only works in node')},Mt=()=>{throw new Error('The "transformSync" API only works in node')},Vt=()=>{throw new Error('The "formatMessagesSync" API only works in node')},Ft=()=>{throw new Error('The "analyzeMetafileSync" API only works in node')},Ce,Le,Ve=()=>{if(Le)return Le;throw Ce?new Error('You need to wait for the promise returned from "initialize" to be resolved before calling this'):new Error('You need to call "initialize" before calling this')},Bt=e=>{e=Ot(e||{});let t=e.wasmURL,r=e.wasmModule,o=e.worker!==!1;if(!t&&!r)throw new Error('Must provide either the "wasmURL" option or the "wasmModule" option');if(Ce)throw new Error('Cannot call "initialize" more than once');return Ce=Lt(t||"",r,o),Ce.catch(()=>{Ce=void 0}),Ce},Lt=(e,t,r)=>Oe(void 0,null,function*(){let o;if(t)o=t;else{let w=yield fetch(e);if(!w.ok)throw new Error(`Failed to download ${JSON.stringify(e)}`);o=yield w.arrayBuffer()}let p;if(r){let w=new Blob([`onmessage=((postMessage) => {
      // Copyright 2018 The Go Authors. All rights reserved.
      // Use of this source code is governed by a BSD-style
      // license that can be found in the LICENSE file.
      var __async = (__this, __arguments, generator) => {
        return new Promise((resolve, reject) => {
          var fulfilled = (value) => {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          };
          var rejected = (value) => {
            try {
              step(generator.throw(value));
            } catch (e) {
              reject(e);
            }
          };
          var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
          step((generator = generator.apply(__this, __arguments)).next());
        });
      };
      let onmessage;
      let globalThis = {};
      for (let o = self; o; o = Object.getPrototypeOf(o))
        for (let k of Object.getOwnPropertyNames(o))
          if (!(k in globalThis))
            Object.defineProperty(globalThis, k, { get: () => self[k] });
      "use strict";
      (() => {
        const enosys = () => {
          const err = new Error("not implemented");
          err.code = "ENOSYS";
          return err;
        };
        if (!globalThis.fs) {
          let outputBuf = "";
          globalThis.fs = {
            constants: { O_WRONLY: -1, O_RDWR: -1, O_CREAT: -1, O_TRUNC: -1, O_APPEND: -1, O_EXCL: -1 },
            writeSync(fd, buf) {
              outputBuf += decoder.decode(buf);
              const nl = outputBuf.lastIndexOf("\\n");
              if (nl != -1) {
                console.log(outputBuf.substr(0, nl));
                outputBuf = outputBuf.substr(nl + 1);
              }
              return buf.length;
            },
            write(fd, buf, offset, length, position, callback) {
              if (offset !== 0 || length !== buf.length || position !== null) {
                callback(enosys());
                return;
              }
              const n = this.writeSync(fd, buf);
              callback(null, n);
            },
            chmod(path, mode, callback) {
              callback(enosys());
            },
            chown(path, uid, gid, callback) {
              callback(enosys());
            },
            close(fd, callback) {
              callback(enosys());
            },
            fchmod(fd, mode, callback) {
              callback(enosys());
            },
            fchown(fd, uid, gid, callback) {
              callback(enosys());
            },
            fstat(fd, callback) {
              callback(enosys());
            },
            fsync(fd, callback) {
              callback(null);
            },
            ftruncate(fd, length, callback) {
              callback(enosys());
            },
            lchown(path, uid, gid, callback) {
              callback(enosys());
            },
            link(path, link, callback) {
              callback(enosys());
            },
            lstat(path, callback) {
              callback(enosys());
            },
            mkdir(path, perm, callback) {
              callback(enosys());
            },
            open(path, flags, mode, callback) {
              callback(enosys());
            },
            read(fd, buffer, offset, length, position, callback) {
              callback(enosys());
            },
            readdir(path, callback) {
              callback(enosys());
            },
            readlink(path, callback) {
              callback(enosys());
            },
            rename(from, to, callback) {
              callback(enosys());
            },
            rmdir(path, callback) {
              callback(enosys());
            },
            stat(path, callback) {
              callback(enosys());
            },
            symlink(path, link, callback) {
              callback(enosys());
            },
            truncate(path, length, callback) {
              callback(enosys());
            },
            unlink(path, callback) {
              callback(enosys());
            },
            utimes(path, atime, mtime, callback) {
              callback(enosys());
            }
          };
        }
        if (!globalThis.process) {
          globalThis.process = {
            getuid() {
              return -1;
            },
            getgid() {
              return -1;
            },
            geteuid() {
              return -1;
            },
            getegid() {
              return -1;
            },
            getgroups() {
              throw enosys();
            },
            pid: -1,
            ppid: -1,
            umask() {
              throw enosys();
            },
            cwd() {
              throw enosys();
            },
            chdir() {
              throw enosys();
            }
          };
        }
        if (!globalThis.crypto) {
          throw new Error("globalThis.crypto is not available, polyfill required (crypto.getRandomValues only)");
        }
        if (!globalThis.performance) {
          throw new Error("globalThis.performance is not available, polyfill required (performance.now only)");
        }
        if (!globalThis.TextEncoder) {
          throw new Error("globalThis.TextEncoder is not available, polyfill required");
        }
        if (!globalThis.TextDecoder) {
          throw new Error("globalThis.TextDecoder is not available, polyfill required");
        }
        const encoder = new TextEncoder("utf-8");
        const decoder = new TextDecoder("utf-8");
        globalThis.Go = class {
          constructor() {
            this.argv = ["js"];
            this.env = {};
            this.exit = (code) => {
              if (code !== 0) {
                console.warn("exit code:", code);
              }
            };
            this._exitPromise = new Promise((resolve) => {
              this._resolveExitPromise = resolve;
            });
            this._pendingEvent = null;
            this._scheduledTimeouts = /* @__PURE__ */ new Map();
            this._nextCallbackTimeoutID = 1;
            const setInt64 = (addr, v) => {
              this.mem.setUint32(addr + 0, v, true);
              this.mem.setUint32(addr + 4, Math.floor(v / 4294967296), true);
            };
            const getInt64 = (addr) => {
              const low = this.mem.getUint32(addr + 0, true);
              const high = this.mem.getInt32(addr + 4, true);
              return low + high * 4294967296;
            };
            const loadValue = (addr) => {
              const f = this.mem.getFloat64(addr, true);
              if (f === 0) {
                return void 0;
              }
              if (!isNaN(f)) {
                return f;
              }
              const id = this.mem.getUint32(addr, true);
              return this._values[id];
            };
            const storeValue = (addr, v) => {
              const nanHead = 2146959360;
              if (typeof v === "number" && v !== 0) {
                if (isNaN(v)) {
                  this.mem.setUint32(addr + 4, nanHead, true);
                  this.mem.setUint32(addr, 0, true);
                  return;
                }
                this.mem.setFloat64(addr, v, true);
                return;
              }
              if (v === void 0) {
                this.mem.setFloat64(addr, 0, true);
                return;
              }
              let id = this._ids.get(v);
              if (id === void 0) {
                id = this._idPool.pop();
                if (id === void 0) {
                  id = this._values.length;
                }
                this._values[id] = v;
                this._goRefCounts[id] = 0;
                this._ids.set(v, id);
              }
              this._goRefCounts[id]++;
              let typeFlag = 0;
              switch (typeof v) {
                case "object":
                  if (v !== null) {
                    typeFlag = 1;
                  }
                  break;
                case "string":
                  typeFlag = 2;
                  break;
                case "symbol":
                  typeFlag = 3;
                  break;
                case "function":
                  typeFlag = 4;
                  break;
              }
              this.mem.setUint32(addr + 4, nanHead | typeFlag, true);
              this.mem.setUint32(addr, id, true);
            };
            const loadSlice = (addr) => {
              const array = getInt64(addr + 0);
              const len = getInt64(addr + 8);
              return new Uint8Array(this._inst.exports.mem.buffer, array, len);
            };
            const loadSliceOfValues = (addr) => {
              const array = getInt64(addr + 0);
              const len = getInt64(addr + 8);
              const a = new Array(len);
              for (let i = 0; i < len; i++) {
                a[i] = loadValue(array + i * 8);
              }
              return a;
            };
            const loadString = (addr) => {
              const saddr = getInt64(addr + 0);
              const len = getInt64(addr + 8);
              return decoder.decode(new DataView(this._inst.exports.mem.buffer, saddr, len));
            };
            const timeOrigin = Date.now() - performance.now();
            this.importObject = {
              go: {
                "runtime.wasmExit": (sp) => {
                  sp >>>= 0;
                  const code = this.mem.getInt32(sp + 8, true);
                  this.exited = true;
                  delete this._inst;
                  delete this._values;
                  delete this._goRefCounts;
                  delete this._ids;
                  delete this._idPool;
                  this.exit(code);
                },
                "runtime.wasmWrite": (sp) => {
                  sp >>>= 0;
                  const fd = getInt64(sp + 8);
                  const p = getInt64(sp + 16);
                  const n = this.mem.getInt32(sp + 24, true);
                  globalThis.fs.writeSync(fd, new Uint8Array(this._inst.exports.mem.buffer, p, n));
                },
                "runtime.resetMemoryDataView": (sp) => {
                  sp >>>= 0;
                  this.mem = new DataView(this._inst.exports.mem.buffer);
                },
                "runtime.nanotime1": (sp) => {
                  sp >>>= 0;
                  setInt64(sp + 8, (timeOrigin + performance.now()) * 1e6);
                },
                "runtime.walltime": (sp) => {
                  sp >>>= 0;
                  const msec = new Date().getTime();
                  setInt64(sp + 8, msec / 1e3);
                  this.mem.setInt32(sp + 16, msec % 1e3 * 1e6, true);
                },
                "runtime.scheduleTimeoutEvent": (sp) => {
                  sp >>>= 0;
                  const id = this._nextCallbackTimeoutID;
                  this._nextCallbackTimeoutID++;
                  this._scheduledTimeouts.set(id, setTimeout(
                    () => {
                      this._resume();
                      while (this._scheduledTimeouts.has(id)) {
                        console.warn("scheduleTimeoutEvent: missed timeout event");
                        this._resume();
                      }
                    },
                    getInt64(sp + 8) + 1
                  ));
                  this.mem.setInt32(sp + 16, id, true);
                },
                "runtime.clearTimeoutEvent": (sp) => {
                  sp >>>= 0;
                  const id = this.mem.getInt32(sp + 8, true);
                  clearTimeout(this._scheduledTimeouts.get(id));
                  this._scheduledTimeouts.delete(id);
                },
                "runtime.getRandomData": (sp) => {
                  sp >>>= 0;
                  crypto.getRandomValues(loadSlice(sp + 8));
                },
                "syscall/js.finalizeRef": (sp) => {
                  sp >>>= 0;
                  const id = this.mem.getUint32(sp + 8, true);
                  this._goRefCounts[id]--;
                  if (this._goRefCounts[id] === 0) {
                    const v = this._values[id];
                    this._values[id] = null;
                    this._ids.delete(v);
                    this._idPool.push(id);
                  }
                },
                "syscall/js.stringVal": (sp) => {
                  sp >>>= 0;
                  storeValue(sp + 24, loadString(sp + 8));
                },
                "syscall/js.valueGet": (sp) => {
                  sp >>>= 0;
                  const result = Reflect.get(loadValue(sp + 8), loadString(sp + 16));
                  sp = this._inst.exports.getsp() >>> 0;
                  storeValue(sp + 32, result);
                },
                "syscall/js.valueSet": (sp) => {
                  sp >>>= 0;
                  Reflect.set(loadValue(sp + 8), loadString(sp + 16), loadValue(sp + 32));
                },
                "syscall/js.valueDelete": (sp) => {
                  sp >>>= 0;
                  Reflect.deleteProperty(loadValue(sp + 8), loadString(sp + 16));
                },
                "syscall/js.valueIndex": (sp) => {
                  sp >>>= 0;
                  storeValue(sp + 24, Reflect.get(loadValue(sp + 8), getInt64(sp + 16)));
                },
                "syscall/js.valueSetIndex": (sp) => {
                  sp >>>= 0;
                  Reflect.set(loadValue(sp + 8), getInt64(sp + 16), loadValue(sp + 24));
                },
                "syscall/js.valueCall": (sp) => {
                  sp >>>= 0;
                  try {
                    const v = loadValue(sp + 8);
                    const m = Reflect.get(v, loadString(sp + 16));
                    const args = loadSliceOfValues(sp + 32);
                    const result = Reflect.apply(m, v, args);
                    sp = this._inst.exports.getsp() >>> 0;
                    storeValue(sp + 56, result);
                    this.mem.setUint8(sp + 64, 1);
                  } catch (err) {
                    sp = this._inst.exports.getsp() >>> 0;
                    storeValue(sp + 56, err);
                    this.mem.setUint8(sp + 64, 0);
                  }
                },
                "syscall/js.valueInvoke": (sp) => {
                  sp >>>= 0;
                  try {
                    const v = loadValue(sp + 8);
                    const args = loadSliceOfValues(sp + 16);
                    const result = Reflect.apply(v, void 0, args);
                    sp = this._inst.exports.getsp() >>> 0;
                    storeValue(sp + 40, result);
                    this.mem.setUint8(sp + 48, 1);
                  } catch (err) {
                    sp = this._inst.exports.getsp() >>> 0;
                    storeValue(sp + 40, err);
                    this.mem.setUint8(sp + 48, 0);
                  }
                },
                "syscall/js.valueNew": (sp) => {
                  sp >>>= 0;
                  try {
                    const v = loadValue(sp + 8);
                    const args = loadSliceOfValues(sp + 16);
                    const result = Reflect.construct(v, args);
                    sp = this._inst.exports.getsp() >>> 0;
                    storeValue(sp + 40, result);
                    this.mem.setUint8(sp + 48, 1);
                  } catch (err) {
                    sp = this._inst.exports.getsp() >>> 0;
                    storeValue(sp + 40, err);
                    this.mem.setUint8(sp + 48, 0);
                  }
                },
                "syscall/js.valueLength": (sp) => {
                  sp >>>= 0;
                  setInt64(sp + 16, parseInt(loadValue(sp + 8).length));
                },
                "syscall/js.valuePrepareString": (sp) => {
                  sp >>>= 0;
                  const str = encoder.encode(String(loadValue(sp + 8)));
                  storeValue(sp + 16, str);
                  setInt64(sp + 24, str.length);
                },
                "syscall/js.valueLoadString": (sp) => {
                  sp >>>= 0;
                  const str = loadValue(sp + 8);
                  loadSlice(sp + 16).set(str);
                },
                "syscall/js.valueInstanceOf": (sp) => {
                  sp >>>= 0;
                  this.mem.setUint8(sp + 24, loadValue(sp + 8) instanceof loadValue(sp + 16) ? 1 : 0);
                },
                "syscall/js.copyBytesToGo": (sp) => {
                  sp >>>= 0;
                  const dst = loadSlice(sp + 8);
                  const src = loadValue(sp + 32);
                  if (!(src instanceof Uint8Array || src instanceof Uint8ClampedArray)) {
                    this.mem.setUint8(sp + 48, 0);
                    return;
                  }
                  const toCopy = src.subarray(0, dst.length);
                  dst.set(toCopy);
                  setInt64(sp + 40, toCopy.length);
                  this.mem.setUint8(sp + 48, 1);
                },
                "syscall/js.copyBytesToJS": (sp) => {
                  sp >>>= 0;
                  const dst = loadValue(sp + 8);
                  const src = loadSlice(sp + 16);
                  if (!(dst instanceof Uint8Array || dst instanceof Uint8ClampedArray)) {
                    this.mem.setUint8(sp + 48, 0);
                    return;
                  }
                  const toCopy = src.subarray(0, dst.length);
                  dst.set(toCopy);
                  setInt64(sp + 40, toCopy.length);
                  this.mem.setUint8(sp + 48, 1);
                },
                "debug": (value) => {
                  console.log(value);
                }
              }
            };
          }
          run(instance) {
            return __async(this, null, function* () {
              if (!(instance instanceof WebAssembly.Instance)) {
                throw new Error("Go.run: WebAssembly.Instance expected");
              }
              this._inst = instance;
              this.mem = new DataView(this._inst.exports.mem.buffer);
              this._values = [
                NaN,
                0,
                null,
                true,
                false,
                globalThis,
                this
              ];
              this._goRefCounts = new Array(this._values.length).fill(Infinity);
              this._ids = /* @__PURE__ */ new Map([
                [0, 1],
                [null, 2],
                [true, 3],
                [false, 4],
                [globalThis, 5],
                [this, 6]
              ]);
              this._idPool = [];
              this.exited = false;
              let offset = 4096;
              const strPtr = (str) => {
                const ptr = offset;
                const bytes = encoder.encode(str + "\\0");
                new Uint8Array(this.mem.buffer, offset, bytes.length).set(bytes);
                offset += bytes.length;
                if (offset % 8 !== 0) {
                  offset += 8 - offset % 8;
                }
                return ptr;
              };
              const argc = this.argv.length;
              const argvPtrs = [];
              this.argv.forEach((arg) => {
                argvPtrs.push(strPtr(arg));
              });
              argvPtrs.push(0);
              const keys = Object.keys(this.env).sort();
              keys.forEach((key) => {
                argvPtrs.push(strPtr(\`\${key}=\${this.env[key]}\`));
              });
              argvPtrs.push(0);
              const argv = offset;
              argvPtrs.forEach((ptr) => {
                this.mem.setUint32(offset, ptr, true);
                this.mem.setUint32(offset + 4, 0, true);
                offset += 8;
              });
              const wasmMinDataAddr = 4096 + 8192;
              if (offset >= wasmMinDataAddr) {
                throw new Error("total length of command line and environment variables exceeds limit");
              }
              this._inst.exports.run(argc, argv);
              if (this.exited) {
                this._resolveExitPromise();
              }
              yield this._exitPromise;
            });
          }
          _resume() {
            if (this.exited) {
              throw new Error("Go program has already exited");
            }
            this._inst.exports.resume();
            if (this.exited) {
              this._resolveExitPromise();
            }
          }
          _makeFuncWrapper(id) {
            const go = this;
            return function() {
              const event = { id, this: this, args: arguments };
              go._pendingEvent = event;
              go._resume();
              return event.result;
            };
          }
        };
      })();
      onmessage = ({ data: wasm }) => {
        let decoder = new TextDecoder();
        let fs = globalThis.fs;
        let stderr = "";
        fs.writeSync = (fd, buffer) => {
          if (fd === 1) {
            postMessage(buffer);
          } else if (fd === 2) {
            stderr += decoder.decode(buffer);
            let parts = stderr.split("\\n");
            if (parts.length > 1)
              console.log(parts.slice(0, -1).join("\\n"));
            stderr = parts[parts.length - 1];
          } else {
            throw new Error("Bad write");
          }
          return buffer.length;
        };
        let stdin = [];
        let resumeStdin;
        let stdinPos = 0;
        onmessage = ({ data }) => {
          if (data.length > 0) {
            stdin.push(data);
            if (resumeStdin)
              resumeStdin();
          }
        };
        fs.read = (fd, buffer, offset, length, position, callback) => {
          if (fd !== 0 || offset !== 0 || length !== buffer.length || position !== null) {
            throw new Error("Bad read");
          }
          if (stdin.length === 0) {
            resumeStdin = () => fs.read(fd, buffer, offset, length, position, callback);
            return;
          }
          let first = stdin[0];
          let count = Math.max(0, Math.min(length, first.length - stdinPos));
          buffer.set(first.subarray(stdinPos, stdinPos + count), offset);
          stdinPos += count;
          if (stdinPos === first.length) {
            stdin.shift();
            stdinPos = 0;
          }
          callback(null, count);
        };
        let go = new globalThis.Go();
        go.argv = ["", \`--service=\${"0.14.54"}\`];
        if (wasm instanceof WebAssembly.Module) {
          WebAssembly.instantiate(wasm, go.importObject).then((instance) => go.run(instance));
        } else {
          WebAssembly.instantiate(wasm, go.importObject).then(({ instance }) => go.run(instance));
        }
      };
      return (m) => onmessage(m);
    })(postMessage)`],{type:"text/javascript"});p=new Worker(URL.createObjectURL(w))}else{let w=(i=>{var T=(m,W,Y)=>new Promise((D,g)=>{var h=R=>{try{$(Y.next(R))}catch(I){g(I)}},v=R=>{try{$(Y.throw(R))}catch(I){g(I)}},$=R=>R.done?D(R.value):Promise.resolve(R.value).then(h,v);$((Y=Y.apply(m,W)).next())});let B,O={};for(let m=self;m;m=Object.getPrototypeOf(m))for(let W of Object.getOwnPropertyNames(m))W in O||Object.defineProperty(O,W,{get:()=>self[W]});return(()=>{const m=()=>{const D=new Error("not implemented");return D.code="ENOSYS",D};if(!O.fs){let D="";O.fs={constants:{O_WRONLY:-1,O_RDWR:-1,O_CREAT:-1,O_TRUNC:-1,O_APPEND:-1,O_EXCL:-1},writeSync(g,h){D+=Y.decode(h);const v=D.lastIndexOf(`
`);return v!=-1&&(console.log(D.substr(0,v)),D=D.substr(v+1)),h.length},write(g,h,v,$,R,I){if(v!==0||$!==h.length||R!==null){I(m());return}const Q=this.writeSync(g,h);I(null,Q)},chmod(g,h,v){v(m())},chown(g,h,v,$){$(m())},close(g,h){h(m())},fchmod(g,h,v){v(m())},fchown(g,h,v,$){$(m())},fstat(g,h){h(m())},fsync(g,h){h(null)},ftruncate(g,h,v){v(m())},lchown(g,h,v,$){$(m())},link(g,h,v){v(m())},lstat(g,h){h(m())},mkdir(g,h,v){v(m())},open(g,h,v,$){$(m())},read(g,h,v,$,R,I){I(m())},readdir(g,h){h(m())},readlink(g,h){h(m())},rename(g,h,v){v(m())},rmdir(g,h){h(m())},stat(g,h){h(m())},symlink(g,h,v){v(m())},truncate(g,h,v){v(m())},unlink(g,h){h(m())},utimes(g,h,v,$){$(m())}}}if(O.process||(O.process={getuid(){return-1},getgid(){return-1},geteuid(){return-1},getegid(){return-1},getgroups(){throw m()},pid:-1,ppid:-1,umask(){throw m()},cwd(){throw m()},chdir(){throw m()}}),!O.crypto)throw new Error("globalThis.crypto is not available, polyfill required (crypto.getRandomValues only)");if(!O.performance)throw new Error("globalThis.performance is not available, polyfill required (performance.now only)");if(!O.TextEncoder)throw new Error("globalThis.TextEncoder is not available, polyfill required");if(!O.TextDecoder)throw new Error("globalThis.TextDecoder is not available, polyfill required");const W=new TextEncoder("utf-8"),Y=new TextDecoder("utf-8");O.Go=class{constructor(){this.argv=["js"],this.env={},this.exit=n=>{n!==0&&console.warn("exit code:",n)},this._exitPromise=new Promise(n=>{this._resolveExitPromise=n}),this._pendingEvent=null,this._scheduledTimeouts=new Map,this._nextCallbackTimeoutID=1;const D=(n,d)=>{this.mem.setUint32(n+0,d,!0),this.mem.setUint32(n+4,Math.floor(d/4294967296),!0)},g=n=>{const d=this.mem.getUint32(n+0,!0),C=this.mem.getInt32(n+4,!0);return d+C*4294967296},h=n=>{const d=this.mem.getFloat64(n,!0);if(d===0)return;if(!isNaN(d))return d;const C=this.mem.getUint32(n,!0);return this._values[C]},v=(n,d)=>{if(typeof d=="number"&&d!==0){if(isNaN(d)){this.mem.setUint32(n+4,2146959360,!0),this.mem.setUint32(n,0,!0);return}this.mem.setFloat64(n,d,!0);return}if(d===void 0){this.mem.setFloat64(n,0,!0);return}let c=this._ids.get(d);c===void 0&&(c=this._idPool.pop(),c===void 0&&(c=this._values.length),this._values[c]=d,this._goRefCounts[c]=0,this._ids.set(d,c)),this._goRefCounts[c]++;let u=0;switch(typeof d){case"object":d!==null&&(u=1);break;case"string":u=2;break;case"symbol":u=3;break;case"function":u=4;break}this.mem.setUint32(n+4,2146959360|u,!0),this.mem.setUint32(n,c,!0)},$=n=>{const d=g(n+0),C=g(n+8);return new Uint8Array(this._inst.exports.mem.buffer,d,C)},R=n=>{const d=g(n+0),C=g(n+8),c=new Array(C);for(let u=0;u<C;u++)c[u]=h(d+u*8);return c},I=n=>{const d=g(n+0),C=g(n+8);return Y.decode(new DataView(this._inst.exports.mem.buffer,d,C))},Q=Date.now()-performance.now();this.importObject={go:{"runtime.wasmExit":n=>{n>>>=0;const d=this.mem.getInt32(n+8,!0);this.exited=!0,delete this._inst,delete this._values,delete this._goRefCounts,delete this._ids,delete this._idPool,this.exit(d)},"runtime.wasmWrite":n=>{n>>>=0;const d=g(n+8),C=g(n+16),c=this.mem.getInt32(n+24,!0);O.fs.writeSync(d,new Uint8Array(this._inst.exports.mem.buffer,C,c))},"runtime.resetMemoryDataView":n=>{this.mem=new DataView(this._inst.exports.mem.buffer)},"runtime.nanotime1":n=>{n>>>=0,D(n+8,(Q+performance.now())*1e6)},"runtime.walltime":n=>{n>>>=0;const d=new Date().getTime();D(n+8,d/1e3),this.mem.setInt32(n+16,d%1e3*1e6,!0)},"runtime.scheduleTimeoutEvent":n=>{n>>>=0;const d=this._nextCallbackTimeoutID;this._nextCallbackTimeoutID++,this._scheduledTimeouts.set(d,setTimeout(()=>{for(this._resume();this._scheduledTimeouts.has(d);)console.warn("scheduleTimeoutEvent: missed timeout event"),this._resume()},g(n+8)+1)),this.mem.setInt32(n+16,d,!0)},"runtime.clearTimeoutEvent":n=>{n>>>=0;const d=this.mem.getInt32(n+8,!0);clearTimeout(this._scheduledTimeouts.get(d)),this._scheduledTimeouts.delete(d)},"runtime.getRandomData":n=>{n>>>=0,crypto.getRandomValues($(n+8))},"syscall/js.finalizeRef":n=>{n>>>=0;const d=this.mem.getUint32(n+8,!0);if(this._goRefCounts[d]--,this._goRefCounts[d]===0){const C=this._values[d];this._values[d]=null,this._ids.delete(C),this._idPool.push(d)}},"syscall/js.stringVal":n=>{n>>>=0,v(n+24,I(n+8))},"syscall/js.valueGet":n=>{n>>>=0;const d=Reflect.get(h(n+8),I(n+16));n=this._inst.exports.getsp()>>>0,v(n+32,d)},"syscall/js.valueSet":n=>{n>>>=0,Reflect.set(h(n+8),I(n+16),h(n+32))},"syscall/js.valueDelete":n=>{n>>>=0,Reflect.deleteProperty(h(n+8),I(n+16))},"syscall/js.valueIndex":n=>{n>>>=0,v(n+24,Reflect.get(h(n+8),g(n+16)))},"syscall/js.valueSetIndex":n=>{n>>>=0,Reflect.set(h(n+8),g(n+16),h(n+24))},"syscall/js.valueCall":n=>{n>>>=0;try{const d=h(n+8),C=Reflect.get(d,I(n+16)),c=R(n+32),u=Reflect.apply(C,d,c);n=this._inst.exports.getsp()>>>0,v(n+56,u),this.mem.setUint8(n+64,1)}catch(d){n=this._inst.exports.getsp()>>>0,v(n+56,d),this.mem.setUint8(n+64,0)}},"syscall/js.valueInvoke":n=>{n>>>=0;try{const d=h(n+8),C=R(n+16),c=Reflect.apply(d,void 0,C);n=this._inst.exports.getsp()>>>0,v(n+40,c),this.mem.setUint8(n+48,1)}catch(d){n=this._inst.exports.getsp()>>>0,v(n+40,d),this.mem.setUint8(n+48,0)}},"syscall/js.valueNew":n=>{n>>>=0;try{const d=h(n+8),C=R(n+16),c=Reflect.construct(d,C);n=this._inst.exports.getsp()>>>0,v(n+40,c),this.mem.setUint8(n+48,1)}catch(d){n=this._inst.exports.getsp()>>>0,v(n+40,d),this.mem.setUint8(n+48,0)}},"syscall/js.valueLength":n=>{n>>>=0,D(n+16,parseInt(h(n+8).length))},"syscall/js.valuePrepareString":n=>{n>>>=0;const d=W.encode(String(h(n+8)));v(n+16,d),D(n+24,d.length)},"syscall/js.valueLoadString":n=>{n>>>=0;const d=h(n+8);$(n+16).set(d)},"syscall/js.valueInstanceOf":n=>{n>>>=0,this.mem.setUint8(n+24,h(n+8)instanceof h(n+16)?1:0)},"syscall/js.copyBytesToGo":n=>{n>>>=0;const d=$(n+8),C=h(n+32);if(!(C instanceof Uint8Array||C instanceof Uint8ClampedArray)){this.mem.setUint8(n+48,0);return}const c=C.subarray(0,d.length);d.set(c),D(n+40,c.length),this.mem.setUint8(n+48,1)},"syscall/js.copyBytesToJS":n=>{n>>>=0;const d=h(n+8),C=$(n+16);if(!(d instanceof Uint8Array||d instanceof Uint8ClampedArray)){this.mem.setUint8(n+48,0);return}const c=C.subarray(0,d.length);d.set(c),D(n+40,c.length),this.mem.setUint8(n+48,1)},debug:n=>{console.log(n)}}}}run(D){return T(this,null,function*(){if(!(D instanceof WebAssembly.Instance))throw new Error("Go.run: WebAssembly.Instance expected");this._inst=D,this.mem=new DataView(this._inst.exports.mem.buffer),this._values=[NaN,0,null,!0,!1,O,this],this._goRefCounts=new Array(this._values.length).fill(1/0),this._ids=new Map([[0,1],[null,2],[!0,3],[!1,4],[O,5],[this,6]]),this._idPool=[],this.exited=!1;let g=4096;const h=n=>{const d=g,C=W.encode(n+"\0");return new Uint8Array(this.mem.buffer,g,C.length).set(C),g+=C.length,g%8!==0&&(g+=8-g%8),d},v=this.argv.length,$=[];this.argv.forEach(n=>{$.push(h(n))}),$.push(0),Object.keys(this.env).sort().forEach(n=>{$.push(h(`${n}=${this.env[n]}`))}),$.push(0);const I=g;if($.forEach(n=>{this.mem.setUint32(g,n,!0),this.mem.setUint32(g+4,0,!0),g+=8}),g>=12288)throw new Error("total length of command line and environment variables exceeds limit");this._inst.exports.run(v,I),this.exited&&this._resolveExitPromise(),yield this._exitPromise})}_resume(){if(this.exited)throw new Error("Go program has already exited");this._inst.exports.resume(),this.exited&&this._resolveExitPromise()}_makeFuncWrapper(D){const g=this;return function(){const h={id:D,this:this,args:arguments};return g._pendingEvent=h,g._resume(),h.result}}}})(),B=({data:m})=>{let W=new TextDecoder,Y=O.fs,D="";Y.writeSync=(R,I)=>{if(R===1)i(I);else if(R===2){D+=W.decode(I);let Q=D.split(`
`);Q.length>1&&console.log(Q.slice(0,-1).join(`
`)),D=Q[Q.length-1]}else throw new Error("Bad write");return I.length};let g=[],h,v=0;B=({data:R})=>{R.length>0&&(g.push(R),h&&h())},Y.read=(R,I,Q,n,d,C)=>{if(R!==0||Q!==0||n!==I.length||d!==null)throw new Error("Bad read");if(g.length===0){h=()=>Y.read(R,I,Q,n,d,C);return}let c=g[0],u=Math.max(0,Math.min(n,c.length-v));I.set(c.subarray(v,v+u),Q),v+=u,v===c.length&&(g.shift(),v=0),C(null,u)};let $=new O.Go;$.argv=["","--service=0.14.54"],m instanceof WebAssembly.Module?WebAssembly.instantiate(m,$.importObject).then(R=>$.run(R)):WebAssembly.instantiate(m,$.importObject).then(({instance:R})=>$.run(R))},m=>B(m)})(i=>p.onmessage({data:i}));p={onmessage:null,postMessage:i=>setTimeout(()=>w({data:i})),terminate(){}}}p.postMessage(o),p.onmessage=({data:w})=>y(w);let{readFromStdout:y,service:s}=$t({writeToStdin(w){p.postMessage(w)},isSync:!1,isWriteUnavailable:!0,esbuild:De});Le={build:w=>new Promise((i,T)=>s.buildOrServe({callName:"build",refs:null,serveOptions:null,options:w,isTTY:!1,defaultWD:"/",callback:(B,O)=>B?T(B):i(O)})),transform:(w,i)=>new Promise((T,B)=>s.transform({callName:"transform",refs:null,input:w,options:i||{},isTTY:!1,fs:{readFile(O,m){m(new Error("Internal error"),null)},writeFile(O,m){m(null)}},callback:(O,m)=>O?B(O):T(m)})),formatMessages:(w,i)=>new Promise((T,B)=>s.formatMessages({callName:"formatMessages",refs:null,messages:w,options:i,callback:(O,m)=>O?B(O):T(m)})),analyzeMetafile:(w,i)=>new Promise((T,B)=>s.analyzeMetafile({callName:"analyzeMetafile",refs:null,metafile:typeof w=="string"?w:JSON.stringify(w),options:i,callback:(O,m)=>O?B(O):T(m)}))}}),Wt=De})(ue)})(dt);var ot=dt.exports;const ye=ace.edit("editor");ye.setTheme("ace/theme/github");ye.session.setMode("ace/mode/jsx");ye.setOptions({enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,showPrintMargin:!1});ye.setValue(localStorage.getItem("editorCode")||`// JSX here
const App = () => <h1>Hello from JSX</h1>;
ReactDOM.render(<App />, document.getElementById('root'));`,-1);ye.session.on("change",()=>{localStorage.setItem("editorCode",ye.getValue())});const Gt=()=>ye.getValue(),ct=localStorage.getItem("editorCode");ct&&(ye.value=ct);const ut=document.getElementById("preview");let ft=!1;const Ht=async ue=>(ft||(await ot.initialize({wasmURL:"https://unpkg.com/esbuild-wasm@0.14.54/esbuild.wasm",worker:!0}),ft=!0),(await ot.transform(ue,{loader:"jsx",target:"es2015"})).code),Yt=ue=>`
  <html>
    <head>
      <script src="https://unpkg.com/react@18/umd/react.development.js"><\/script>
      <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"><\/script>
    </head>
    <body>
      <div id="root"></div>
      <script>
        try {
          ${ue}
        } catch (e) {
          document.body.innerHTML = '<pre style="color:red">' + e + '</pre>';
        }
      <\/script>
    </body>
  </html>
`,ht=async()=>{const ue=Gt(),fe=document.getElementById("error-message");try{const we=await Ht(ue);ut.srcdoc=Yt(we),fe.textContent="",ze(ue)}catch(we){fe.textContent=we.message,ut.srcdoc="",mt.textContent="test 0/3",gt.textContent="❌ Compile error — tests skipped",localStorage.setItem("passed","0")}};document.getElementById("run").onclick=function(){ht(),ze(ye.getValue())};ht();const Xt=ue=>/<\s*[A-Z][a-zA-Z0-9]*\s*.*?>/.test(ue),mt=document.getElementById("test-count"),gt=document.getElementById("test-check"),ze=ue=>{let fe=0,we=3;const Ee=Xt(ue),te=/const\s+[A-Z][a-zA-Z]*\s*=\s*\(/.test(ue),de=ue.includes("like")&&ue.includes("liked");Ee&&fe++,te&&fe++,de&&fe++,localStorage.setItem("passed",fe.toString()),mt.textContent=`test ${fe}/${we}`,gt.innerHTML=`
    ${Ee?"✅":"❌"} JSX detected<br />
    ${te?"✅":"❌"} Component present<br />
    ${de?"✅":"❌"} Contains 'like' & 'liked'
  `};ye.getValue();ze(ye.getValue());ye.addEventListener("input",()=>{localStorage.setItem("editorCode",ye.getValue())});
