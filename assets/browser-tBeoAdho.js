var et={exports:{}};(function(tt){(nt=>{var Se=Object.defineProperty,rt=Object.defineProperties,lt=Object.getOwnPropertyDescriptor,st=Object.getOwnPropertyDescriptors,it=Object.getOwnPropertyNames,Ne=Object.getOwnPropertySymbols,Me=Object.prototype.hasOwnProperty,at=Object.prototype.propertyIsEnumerable,Fe=(e,t,r)=>t in e?Se(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Ve=(e,t)=>{for(var r in t||(t={}))Me.call(t,r)&&Fe(e,r,t[r]);if(Ne)for(var r of Ne(t))at.call(t,r)&&Fe(e,r,t[r]);return e},Be=(e,t)=>rt(e,st(t)),ot=(e,t)=>{for(var r in t)Se(e,r,{get:t[r],enumerable:!0})},ct=(e,t,r,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let p of it(t))!Me.call(e,p)&&p!==r&&Se(e,p,{get:()=>t[p],enumerable:!(o=lt(t,p))||o.enumerable});return e},ut=e=>ct(Se({},"__esModule",{value:!0}),e),be=(e,t,r)=>new Promise((o,p)=>{var w=i=>{try{y(r.next(i))}catch(T){p(T)}},s=i=>{try{y(r.throw(i))}catch(T){p(T)}},y=i=>i.done?o(i.value):Promise.resolve(i.value).then(w,s);y((r=r.apply(e,t)).next())}),Oe={};ot(Oe,{analyzeMetafile:()=>jt,analyzeMetafileSync:()=>Rt,build:()=>kt,buildSync:()=>Tt,default:()=>Ct,formatMessages:()=>Ot,formatMessagesSync:()=>Pt,initialize:()=>Dt,serve:()=>Et,transform:()=>St,transformSync:()=>$t,version:()=>_t}),nt.exports=ut(Oe);function We(e){let t=o=>{if(o===null)r.write8(0);else if(typeof o=="boolean")r.write8(1),r.write8(+o);else if(typeof o=="number")r.write8(2),r.write32(o|0);else if(typeof o=="string")r.write8(3),r.write(me(o));else if(o instanceof Uint8Array)r.write8(4),r.write(o);else if(o instanceof Array){r.write8(5),r.write32(o.length);for(let p of o)t(p)}else{let p=Object.keys(o);r.write8(6),r.write32(p.length);for(let w of p)r.write(me(w)),t(o[w])}},r=new Le;return r.write32(0),r.write32(e.id<<1|+!e.isRequest),t(e.value),Ue(r.buf,r.len-4,0),r.buf.subarray(0,r.len)}function ft(e){let t=()=>{switch(r.read8()){case 0:return null;case 1:return!!r.read8();case 2:return r.read32();case 3:return ve(r.read());case 4:return r.read();case 5:{let s=r.read32(),y=[];for(let i=0;i<s;i++)y.push(t());return y}case 6:{let s=r.read32(),y={};for(let i=0;i<s;i++)y[ve(r.read())]=t();return y}default:throw new Error("Invalid packet")}},r=new Le(e),o=r.read32(),p=(o&1)===0;o>>>=1;let w=t();if(r.ptr!==e.length)throw new Error("Invalid packet");return{id:o,isRequest:p,value:w}}var Le=class{constructor(e=new Uint8Array(1024)){this.buf=e,this.len=0,this.ptr=0}_write(e){if(this.len+e>this.buf.length){let t=new Uint8Array((this.len+e)*2);t.set(this.buf),this.buf=t}return this.len+=e,this.len-e}write8(e){let t=this._write(1);this.buf[t]=e}write32(e){let t=this._write(4);Ue(this.buf,e,t)}write(e){let t=this._write(4+e.length);Ue(this.buf,e.length,t),this.buf.set(e,t+4)}_read(e){if(this.ptr+e>this.buf.length)throw new Error("Invalid packet");return this.ptr+=e,this.ptr-e}read8(){return this.buf[this._read(1)]}read32(){return ze(this.buf,this._read(4))}read(){let e=this.read32(),t=new Uint8Array(e),r=this._read(t.length);return t.set(this.buf.subarray(r,r+e)),t}},me,ve;if(typeof TextEncoder<"u"&&typeof TextDecoder<"u"){let e=new TextEncoder,t=new TextDecoder;me=r=>e.encode(r),ve=r=>t.decode(r)}else if(typeof Buffer<"u")me=e=>{let t=Buffer.from(e);return t instanceof Uint8Array||(t=new Uint8Array(t)),t},ve=e=>{let{buffer:t,byteOffset:r,byteLength:o}=e;return Buffer.from(t,r,o).toString()};else throw new Error("No UTF-8 codec found");function ze(e,t){return e[t++]|e[t++]<<8|e[t++]<<16|e[t++]<<24}function Ue(e,t,r){e[r++]=t,e[r++]=t>>8,e[r++]=t>>16,e[r++]=t>>24}function Je(e){if(e+="",e.indexOf(",")>=0)throw new Error(`Invalid target: ${e}`);return e}var je=()=>null,Q=e=>typeof e=="boolean"?null:"a boolean",dt=e=>typeof e=="boolean"||typeof e=="object"&&!Array.isArray(e)?null:"a boolean or an object",x=e=>typeof e=="string"?null:"a string",Te=e=>e instanceof RegExp?null:"a RegExp object",xe=e=>typeof e=="number"&&e===(e|0)?null:"an integer",Ce=e=>typeof e=="function"?null:"a function",re=e=>Array.isArray(e)?null:"an array",ge=e=>typeof e=="object"&&e!==null&&!Array.isArray(e)?null:"an object",ht=e=>e instanceof WebAssembly.Module?null:"a WebAssembly.Module",mt=e=>typeof e=="object"&&e!==null?null:"an array or an object",Ge=e=>typeof e=="object"&&!Array.isArray(e)?null:"an object or null",Ye=e=>typeof e=="string"||typeof e=="boolean"?null:"a string or a boolean",gt=e=>typeof e=="string"||typeof e=="object"&&e!==null&&!Array.isArray(e)?null:"a string or an object",pt=e=>typeof e=="string"||Array.isArray(e)?null:"a string or an array",He=e=>typeof e=="string"||e instanceof Uint8Array?null:"a string or a Uint8Array";function l(e,t,r,o){let p=e[r];if(t[r+""]=!0,p===void 0)return;let w=o(p);if(w!==null)throw new Error(`"${r}" must be ${w}`);return p}function se(e,t,r){for(let o in e)if(!(o in t))throw new Error(`Invalid option ${r}: "${o}"`)}function wt(e){let t=Object.create(null),r=l(e,t,"wasmURL",x),o=l(e,t,"wasmModule",ht),p=l(e,t,"worker",Q);return se(e,t,"in initialize() call"),{wasmURL:r,wasmModule:o,worker:p}}function Ke(e){let t;if(e!==void 0){t=Object.create(null);for(let r of Object.keys(e)){let o=e[r];if(typeof o=="string"||o===!1)t[r]=o;else throw new Error(`Expected ${JSON.stringify(r)} in mangle cache to map to either a string or false`)}}return t}function $e(e,t,r,o,p){let w=l(t,r,"color",Q),s=l(t,r,"logLevel",x),y=l(t,r,"logLimit",xe);w!==void 0?e.push(`--color=${w}`):o&&e.push("--color=true"),e.push(`--log-level=${s||p}`),e.push(`--log-limit=${y||0}`)}function Qe(e,t,r){let o=l(t,r,"legalComments",x),p=l(t,r,"sourceRoot",x),w=l(t,r,"sourcesContent",Q),s=l(t,r,"target",pt),y=l(t,r,"format",x),i=l(t,r,"globalName",x),T=l(t,r,"mangleProps",Te),B=l(t,r,"reserveProps",Te),O=l(t,r,"mangleQuoted",Q),m=l(t,r,"minify",Q),L=l(t,r,"minifySyntax",Q),H=l(t,r,"minifyWhitespace",Q),U=l(t,r,"minifyIdentifiers",Q),g=l(t,r,"drop",re),h=l(t,r,"charset",x),v=l(t,r,"treeShaking",Q),$=l(t,r,"ignoreAnnotations",Q),D=l(t,r,"jsx",x),C=l(t,r,"jsxFactory",x),Z=l(t,r,"jsxFragment",x),n=l(t,r,"jsxImportSource",x),d=l(t,r,"jsxDev",Q),R=l(t,r,"define",ge),c=l(t,r,"logOverride",ge),u=l(t,r,"supported",ge),f=l(t,r,"pure",re),b=l(t,r,"keepNames",Q),W=l(t,r,"platform",x);if(o&&e.push(`--legal-comments=${o}`),p!==void 0&&e.push(`--source-root=${p}`),w!==void 0&&e.push(`--sources-content=${w}`),s&&(Array.isArray(s)?e.push(`--target=${Array.from(s).map(Je).join(",")}`):e.push(`--target=${Je(s)}`)),y&&e.push(`--format=${y}`),i&&e.push(`--global-name=${i}`),W&&e.push(`--platform=${W}`),m&&e.push("--minify"),L&&e.push("--minify-syntax"),H&&e.push("--minify-whitespace"),U&&e.push("--minify-identifiers"),h&&e.push(`--charset=${h}`),v!==void 0&&e.push(`--tree-shaking=${v}`),$&&e.push("--ignore-annotations"),g)for(let j of g)e.push(`--drop:${j}`);if(T&&e.push(`--mangle-props=${T.source}`),B&&e.push(`--reserve-props=${B.source}`),O!==void 0&&e.push(`--mangle-quoted=${O}`),D&&e.push(`--jsx=${D}`),C&&e.push(`--jsx-factory=${C}`),Z&&e.push(`--jsx-fragment=${Z}`),n&&e.push(`--jsx-import-source=${n}`),d&&e.push("--jsx-dev"),R)for(let j in R){if(j.indexOf("=")>=0)throw new Error(`Invalid define: ${j}`);e.push(`--define:${j}=${R[j]}`)}if(c)for(let j in c){if(j.indexOf("=")>=0)throw new Error(`Invalid log override: ${j}`);e.push(`--log-override:${j}=${c[j]}`)}if(u)for(let j in u){if(j.indexOf("=")>=0)throw new Error(`Invalid supported: ${j}`);e.push(`--supported:${j}=${u[j]}`)}if(f)for(let j of f)e.push(`--pure:${j}`);b&&e.push("--keep-names")}function yt(e,t,r,o,p){var w;let s=[],y=[],i=Object.create(null),T=null,B=null,O=null;$e(s,t,i,r,o),Qe(s,t,i);let m=l(t,i,"sourcemap",Ye),L=l(t,i,"bundle",Q),H=l(t,i,"watch",dt),U=l(t,i,"splitting",Q),g=l(t,i,"preserveSymlinks",Q),h=l(t,i,"metafile",Q),v=l(t,i,"outfile",x),$=l(t,i,"outdir",x),D=l(t,i,"outbase",x),C=l(t,i,"tsconfig",x),Z=l(t,i,"resolveExtensions",re),n=l(t,i,"nodePaths",re),d=l(t,i,"mainFields",re),R=l(t,i,"conditions",re),c=l(t,i,"external",re),u=l(t,i,"loader",ge),f=l(t,i,"outExtension",ge),b=l(t,i,"publicPath",x),W=l(t,i,"entryNames",x),j=l(t,i,"chunkNames",x),F=l(t,i,"assetNames",x),I=l(t,i,"inject",re),z=l(t,i,"banner",ge),V=l(t,i,"footer",ge),P=l(t,i,"entryPoints",mt),K=l(t,i,"absWorkingDir",x),A=l(t,i,"stdin",ge),J=(w=l(t,i,"write",Q))!=null?w:p,q=l(t,i,"allowOverwrite",Q),de=l(t,i,"incremental",Q)===!0,N=l(t,i,"mangleCache",ge);if(i.plugins=!0,se(t,i,`in ${e}() call`),m&&s.push(`--sourcemap${m===!0?"":`=${m}`}`),L&&s.push("--bundle"),q&&s.push("--allow-overwrite"),H)if(s.push("--watch"),typeof H=="boolean")O={};else{let a=Object.create(null),_=l(H,a,"onRebuild",Ce);se(H,a,`on "watch" in ${e}() call`),O={onRebuild:_}}if(U&&s.push("--splitting"),g&&s.push("--preserve-symlinks"),h&&s.push("--metafile"),v&&s.push(`--outfile=${v}`),$&&s.push(`--outdir=${$}`),D&&s.push(`--outbase=${D}`),C&&s.push(`--tsconfig=${C}`),Z){let a=[];for(let _ of Z){if(_+="",_.indexOf(",")>=0)throw new Error(`Invalid resolve extension: ${_}`);a.push(_)}s.push(`--resolve-extensions=${a.join(",")}`)}if(b&&s.push(`--public-path=${b}`),W&&s.push(`--entry-names=${W}`),j&&s.push(`--chunk-names=${j}`),F&&s.push(`--asset-names=${F}`),d){let a=[];for(let _ of d){if(_+="",_.indexOf(",")>=0)throw new Error(`Invalid main field: ${_}`);a.push(_)}s.push(`--main-fields=${a.join(",")}`)}if(R){let a=[];for(let _ of R){if(_+="",_.indexOf(",")>=0)throw new Error(`Invalid condition: ${_}`);a.push(_)}s.push(`--conditions=${a.join(",")}`)}if(c)for(let a of c)s.push(`--external:${a}`);if(z)for(let a in z){if(a.indexOf("=")>=0)throw new Error(`Invalid banner file type: ${a}`);s.push(`--banner:${a}=${z[a]}`)}if(V)for(let a in V){if(a.indexOf("=")>=0)throw new Error(`Invalid footer file type: ${a}`);s.push(`--footer:${a}=${V[a]}`)}if(I)for(let a of I)s.push(`--inject:${a}`);if(u)for(let a in u){if(a.indexOf("=")>=0)throw new Error(`Invalid loader extension: ${a}`);s.push(`--loader:${a}=${u[a]}`)}if(f)for(let a in f){if(a.indexOf("=")>=0)throw new Error(`Invalid out extension: ${a}`);s.push(`--out-extension:${a}=${f[a]}`)}if(P)if(Array.isArray(P))for(let a of P)y.push(["",a+""]);else for(let[a,_]of Object.entries(P))y.push([a+"",_+""]);if(A){let a=Object.create(null),_=l(A,a,"contents",He),X=l(A,a,"resolveDir",x),te=l(A,a,"sourcefile",x),E=l(A,a,"loader",x);se(A,a,'in "stdin" object'),te&&s.push(`--sourcefile=${te}`),E&&s.push(`--loader=${E}`),X&&(B=X+""),typeof _=="string"?T=me(_):_ instanceof Uint8Array&&(T=_)}let S=[];if(n)for(let a of n)a+="",S.push(a);return{entries:y,flags:s,write:J,stdinContents:T,stdinResolveDir:B,absWorkingDir:K,incremental:de,nodePaths:S,watch:O,mangleCache:Ke(N)}}function bt(e,t,r,o){let p=[],w=Object.create(null);$e(p,t,w,r,o),Qe(p,t,w);let s=l(t,w,"sourcemap",Ye),y=l(t,w,"tsconfigRaw",gt),i=l(t,w,"sourcefile",x),T=l(t,w,"loader",x),B=l(t,w,"banner",x),O=l(t,w,"footer",x),m=l(t,w,"mangleCache",ge);return se(t,w,`in ${e}() call`),s&&p.push(`--sourcemap=${s===!0?"external":s}`),y&&p.push(`--tsconfig-raw=${typeof y=="string"?y:JSON.stringify(y)}`),i&&p.push(`--sourcefile=${i}`),T&&p.push(`--loader=${T}`),B&&p.push(`--banner=${B}`),O&&p.push(`--footer=${O}`),{flags:p,mangleCache:Ke(m)}}function vt(e){let t=new Map,r=new Map,o=new Map,p=new Map,w=null,s=0,y=0,i=new Uint8Array(16*1024),T=0,B=c=>{let u=T+c.length;if(u>i.length){let b=new Uint8Array(u*2);b.set(i),i=b}i.set(c,T),T+=c.length;let f=0;for(;f+4<=T;){let b=ze(i,f);if(f+4+b>T)break;f+=4,g(i.subarray(f,f+b)),f+=b}f>0&&(i.copyWithin(0,f,T),T-=f)},O=c=>{w={reason:c?": "+(c.message||c):""};const u="The service was stopped"+w.reason;for(let f of t.values())f(u,null);t.clear();for(let f of p.values())f.onWait(u);p.clear();for(let f of o.values())try{f(new Error(u),null)}catch(b){console.error(b)}o.clear()},m=(c,u,f)=>{if(w)return f("The service is no longer running"+w.reason,null);let b=s++;t.set(b,(W,j)=>{try{f(W,j)}finally{c&&c.unref()}}),c&&c.ref(),e.writeToStdin(We({id:b,isRequest:!0,value:u}))},L=(c,u)=>{if(w)throw new Error("The service is no longer running"+w.reason);e.writeToStdin(We({id:c,isRequest:!1,value:u}))},H=(c,u)=>be(this,null,function*(){try{switch(u.command){case"ping":{L(c,{});break}case"on-start":{let f=r.get(u.key);f?L(c,yield f(u)):L(c,{});break}case"on-resolve":{let f=r.get(u.key);f?L(c,yield f(u)):L(c,{});break}case"on-load":{let f=r.get(u.key);f?L(c,yield f(u)):L(c,{});break}case"serve-request":{let f=p.get(u.key);f&&f.onRequest&&f.onRequest(u.args),L(c,{});break}case"serve-wait":{let f=p.get(u.key);f&&f.onWait(u.error),L(c,{});break}case"watch-rebuild":{let f=o.get(u.key);try{f&&f(null,u.args)}catch(b){console.error(b)}L(c,{});break}default:throw new Error("Invalid command: "+u.command)}}catch(f){L(c,{errors:[_e(f,e,null,void 0,"")]})}}),U=!0,g=c=>{if(U){U=!1;let f=String.fromCharCode(...c);if(f!=="0.14.54")throw new Error(`Cannot start service: Host version "0.14.54" does not match binary version ${JSON.stringify(f)}`);return}let u=ft(c);if(u.isRequest)H(u.id,u.value);else{let f=t.get(u.id);t.delete(u.id),u.value.error?f(u.value.error,{}):f(null,u.value)}},h=(c,u,f,b,W)=>be(this,null,function*(){let j=[],F=[],I={},z={},V=0,P=0,K=[],A=!1;u=[...u];for(let N of u){let S={};if(typeof N!="object")throw new Error(`Plugin at index ${P} must be an object`);const a=l(N,S,"name",x);if(typeof a!="string"||a==="")throw new Error(`Plugin at index ${P} is missing a name`);try{let _=l(N,S,"setup",Ce);if(typeof _!="function")throw new Error("Plugin is missing a setup function");se(N,S,`on plugin ${JSON.stringify(a)}`);let X={name:a,onResolve:[],onLoad:[]};P++;let E=_({initialOptions:c,resolve:(k,G={})=>{if(!A)throw new Error('Cannot call "resolve" before plugin setup has completed');if(typeof k!="string")throw new Error("The path to resolve must be a string");let M=Object.create(null),ae=l(G,M,"pluginName",x),ee=l(G,M,"importer",x),le=l(G,M,"namespace",x),ue=l(G,M,"resolveDir",x),oe=l(G,M,"kind",x),Y=l(G,M,"pluginData",je);return se(G,M,"in resolve() call"),new Promise((ie,ce)=>{const ne={command:"resolve",path:k,key:f,pluginName:a};ae!=null&&(ne.pluginName=ae),ee!=null&&(ne.importer=ee),le!=null&&(ne.namespace=le),ue!=null&&(ne.resolveDir=ue),oe!=null&&(ne.kind=oe),Y!=null&&(ne.pluginData=b.store(Y)),m(W,ne,(pe,fe)=>{pe!==null?ce(new Error(pe)):ie({errors:we(fe.errors,b),warnings:we(fe.warnings,b),path:fe.path,external:fe.external,sideEffects:fe.sideEffects,namespace:fe.namespace,suffix:fe.suffix,pluginData:b.load(fe.pluginData)})})})},onStart(k){let G='This error came from the "onStart" callback registered here:',M=Pe(new Error(G),e,"onStart");j.push({name:a,callback:k,note:M})},onEnd(k){let G='This error came from the "onEnd" callback registered here:',M=Pe(new Error(G),e,"onEnd");F.push({name:a,callback:k,note:M})},onResolve(k,G){let M='This error came from the "onResolve" callback registered here:',ae=Pe(new Error(M),e,"onResolve"),ee={},le=l(k,ee,"filter",Te),ue=l(k,ee,"namespace",x);if(se(k,ee,`in onResolve() call for plugin ${JSON.stringify(a)}`),le==null)throw new Error("onResolve() call is missing a filter");let oe=V++;I[oe]={name:a,callback:G,note:ae},X.onResolve.push({id:oe,filter:le.source,namespace:ue||""})},onLoad(k,G){let M='This error came from the "onLoad" callback registered here:',ae=Pe(new Error(M),e,"onLoad"),ee={},le=l(k,ee,"filter",Te),ue=l(k,ee,"namespace",x);if(se(k,ee,`in onLoad() call for plugin ${JSON.stringify(a)}`),le==null)throw new Error("onLoad() call is missing a filter");let oe=V++;z[oe]={name:a,callback:G,note:ae},X.onLoad.push({id:oe,filter:le.source,namespace:ue||""})},esbuild:e.esbuild});E&&(yield E),K.push(X)}catch(_){return{ok:!1,error:_,pluginName:a}}}const J=N=>be(this,null,function*(){switch(N.command){case"on-start":{let S={errors:[],warnings:[]};return yield Promise.all(j.map(a=>be(this,[a],function*({name:_,callback:X,note:te}){try{let E=yield X();if(E!=null){if(typeof E!="object")throw new Error(`Expected onStart() callback in plugin ${JSON.stringify(_)} to return an object`);let k={},G=l(E,k,"errors",re),M=l(E,k,"warnings",re);se(E,k,`from onStart() callback in plugin ${JSON.stringify(_)}`),G!=null&&S.errors.push(...ye(G,"errors",b,_)),M!=null&&S.warnings.push(...ye(M,"warnings",b,_))}}catch(E){S.errors.push(_e(E,e,b,te&&te(),_))}}))),S}case"on-resolve":{let S={},a="",_,X;for(let te of N.ids)try{({name:a,callback:_,note:X}=I[te]);let E=yield _({path:N.path,importer:N.importer,namespace:N.namespace,resolveDir:N.resolveDir,kind:N.kind,pluginData:b.load(N.pluginData)});if(E!=null){if(typeof E!="object")throw new Error(`Expected onResolve() callback in plugin ${JSON.stringify(a)} to return an object`);let k={},G=l(E,k,"pluginName",x),M=l(E,k,"path",x),ae=l(E,k,"namespace",x),ee=l(E,k,"suffix",x),le=l(E,k,"external",Q),ue=l(E,k,"sideEffects",Q),oe=l(E,k,"pluginData",je),Y=l(E,k,"errors",re),ie=l(E,k,"warnings",re),ce=l(E,k,"watchFiles",re),ne=l(E,k,"watchDirs",re);se(E,k,`from onResolve() callback in plugin ${JSON.stringify(a)}`),S.id=te,G!=null&&(S.pluginName=G),M!=null&&(S.path=M),ae!=null&&(S.namespace=ae),ee!=null&&(S.suffix=ee),le!=null&&(S.external=le),ue!=null&&(S.sideEffects=ue),oe!=null&&(S.pluginData=b.store(oe)),Y!=null&&(S.errors=ye(Y,"errors",b,a)),ie!=null&&(S.warnings=ye(ie,"warnings",b,a)),ce!=null&&(S.watchFiles=Re(ce,"watchFiles")),ne!=null&&(S.watchDirs=Re(ne,"watchDirs"));break}}catch(E){return{id:te,errors:[_e(E,e,b,X&&X(),a)]}}return S}case"on-load":{let S={},a="",_,X;for(let te of N.ids)try{({name:a,callback:_,note:X}=z[te]);let E=yield _({path:N.path,namespace:N.namespace,suffix:N.suffix,pluginData:b.load(N.pluginData)});if(E!=null){if(typeof E!="object")throw new Error(`Expected onLoad() callback in plugin ${JSON.stringify(a)} to return an object`);let k={},G=l(E,k,"pluginName",x),M=l(E,k,"contents",He),ae=l(E,k,"resolveDir",x),ee=l(E,k,"pluginData",je),le=l(E,k,"loader",x),ue=l(E,k,"errors",re),oe=l(E,k,"warnings",re),Y=l(E,k,"watchFiles",re),ie=l(E,k,"watchDirs",re);se(E,k,`from onLoad() callback in plugin ${JSON.stringify(a)}`),S.id=te,G!=null&&(S.pluginName=G),M instanceof Uint8Array?S.contents=M:M!=null&&(S.contents=me(M)),ae!=null&&(S.resolveDir=ae),ee!=null&&(S.pluginData=b.store(ee)),le!=null&&(S.loader=le),ue!=null&&(S.errors=ye(ue,"errors",b,a)),oe!=null&&(S.warnings=ye(oe,"warnings",b,a)),Y!=null&&(S.watchFiles=Re(Y,"watchFiles")),ie!=null&&(S.watchDirs=Re(ie,"watchDirs"));break}}catch(E){return{id:te,errors:[_e(E,e,b,X&&X(),a)]}}return S}default:throw new Error("Invalid command: "+N.command)}});let q=(N,S,a)=>a();F.length>0&&(q=(N,S,a)=>{be(this,null,function*(){for(const{name:_,callback:X,note:te}of F)try{yield X(N)}catch(E){N.errors.push(yield new Promise(k=>S(E,_,te&&te(),k)))}}).then(a)}),A=!0;let de=0;return{ok:!0,requestPlugins:K,runOnEndCallbacks:q,pluginRefs:{ref(){++de===1&&r.set(f,J)},unref(){--de===0&&r.delete(f)}}}}),v=(c,u,f,b)=>{let W={},j=l(u,W,"port",xe),F=l(u,W,"host",x),I=l(u,W,"servedir",x),z=l(u,W,"onRequest",Ce),V,P=new Promise((K,A)=>{V=J=>{p.delete(b),J!==null?A(new Error(J)):K()}});return f.serve={},se(u,W,"in serve() call"),j!==void 0&&(f.serve.port=j),F!==void 0&&(f.serve.host=F),I!==void 0&&(f.serve.servedir=I),p.set(b,{onRequest:z,onWait:V}),{wait:P,stop(){m(c,{command:"serve-stop",key:b},()=>{})}}};const $="warning",D="silent";let C=c=>{let u=y++;const f=Xe();let b,{refs:W,options:j,isTTY:F,callback:I}=c;if(typeof j=="object"){let P=j.plugins;if(P!==void 0){if(!Array.isArray(P))throw new Error('"plugins" must be an array');b=P}}let z=(P,K,A,J)=>{let q=[];try{$e(q,j,{},F,$)}catch{}const de=_e(P,e,f,A,K);m(W,{command:"error",flags:q,error:de},()=>{de.detail=f.load(de.detail),J(de)})},V=(P,K)=>{z(P,K,void 0,A=>{I(ke("Build failed",[A],[]),null)})};if(b&&b.length>0){if(e.isSync)return V(new Error("Cannot use plugins in synchronous API calls"),"");h(j,b,u,f,W).then(P=>{if(!P.ok)V(P.error,P.pluginName);else try{Z(Be(Ve({},c),{key:u,details:f,logPluginError:z,requestPlugins:P.requestPlugins,runOnEndCallbacks:P.runOnEndCallbacks,pluginRefs:P.pluginRefs}))}catch(K){V(K,"")}},P=>V(P,""))}else try{Z(Be(Ve({},c),{key:u,details:f,logPluginError:z,requestPlugins:null,runOnEndCallbacks:(P,K,A)=>A(),pluginRefs:null}))}catch(P){V(P,"")}},Z=({callName:c,refs:u,serveOptions:f,options:b,isTTY:W,defaultWD:j,callback:F,key:I,details:z,logPluginError:V,requestPlugins:P,runOnEndCallbacks:K,pluginRefs:A})=>{const J={ref(){A&&A.ref(),u&&u.ref()},unref(){A&&A.unref(),u&&u.unref()}};let q=!e.isWriteUnavailable,{entries:de,flags:N,write:S,stdinContents:a,stdinResolveDir:_,absWorkingDir:X,incremental:te,nodePaths:E,watch:k,mangleCache:G}=yt(c,b,W,$,q),M={command:"build",key:I,entries:de,flags:N,write:S,stdinContents:a,stdinResolveDir:_,absWorkingDir:X||j,incremental:te,nodePaths:E};P&&(M.plugins=P),G&&(M.mangleCache=G);let ae=f&&v(J,f,M,I),ee,le,ue=(Y,ie)=>{Y.outputFiles&&(ie.outputFiles=Y.outputFiles.map(xt)),Y.metafile&&(ie.metafile=JSON.parse(Y.metafile)),Y.mangleCache&&(ie.mangleCache=Y.mangleCache),Y.writeToStdout!==void 0&&console.log(ve(Y.writeToStdout).replace(/\n$/,""))},oe=(Y,ie)=>{let ce={errors:we(Y.errors,z),warnings:we(Y.warnings,z)};ue(Y,ce),K(ce,V,()=>{if(ce.errors.length>0)return ie(ke("Build failed",ce.errors,ce.warnings),null);if(Y.rebuild){if(!ee){let ne=!1;ee=()=>new Promise((pe,fe)=>{if(ne||w)throw new Error("Cannot rebuild");m(J,{command:"rebuild",key:I},(he,At)=>{if(he)return ie(ke("Build failed",[{id:"",pluginName:"",text:he,location:null,notes:[],detail:void 0}],[]),null);oe(At,(Ie,It)=>{Ie?fe(Ie):pe(It)})})}),J.ref(),ee.dispose=()=>{ne||(ne=!0,m(J,{command:"rebuild-dispose",key:I},()=>{}),J.unref())}}ce.rebuild=ee}if(Y.watch){if(!le){let ne=!1;J.ref(),le=()=>{ne||(ne=!0,o.delete(I),m(J,{command:"watch-stop",key:I},()=>{}),J.unref())},k&&o.set(I,(pe,fe)=>{if(pe){k.onRebuild&&k.onRebuild(pe,null);return}let he={errors:we(fe.errors,z),warnings:we(fe.warnings,z)};ue(fe,he),K(he,V,()=>{if(he.errors.length>0){k.onRebuild&&k.onRebuild(ke("Build failed",he.errors,he.warnings),null);return}fe.rebuildID!==void 0&&(he.rebuild=ee),he.stop=le,k.onRebuild&&k.onRebuild(null,he)})})}ce.stop=le}ie(null,ce)})};if(S&&e.isWriteUnavailable)throw new Error('The "write" option is unavailable in this environment');if(te&&e.isSync)throw new Error('Cannot use "incremental" with a synchronous build');if(k&&e.isSync)throw new Error('Cannot use "watch" with a synchronous build');m(J,M,(Y,ie)=>{if(Y)return F(new Error(Y),null);if(ae){let ce=ie,ne=!1;J.ref();let pe={port:ce.port,host:ce.host,wait:ae.wait,stop(){ne||(ne=!0,ae.stop(),J.unref())}};return J.ref(),ae.wait.then(J.unref,J.unref),F(null,pe)}return oe(ie,F)})};return{readFromStdout:B,afterClose:O,service:{buildOrServe:C,transform:({callName:c,refs:u,input:f,options:b,isTTY:W,fs:j,callback:F})=>{const I=Xe();let z=V=>{try{if(typeof f!="string"&&!(f instanceof Uint8Array))throw new Error('The input to "transform" must be a string or a Uint8Array');let{flags:P,mangleCache:K}=bt(c,b,W,D),A={command:"transform",flags:P,inputFS:V!==null,input:V!==null?me(V):typeof f=="string"?me(f):f};K&&(A.mangleCache=K),m(u,A,(J,q)=>{if(J)return F(new Error(J),null);let de=we(q.errors,I),N=we(q.warnings,I),S=1,a=()=>{if(--S===0){let _={warnings:N,code:q.code,map:q.map};q.mangleCache&&(_.mangleCache=q==null?void 0:q.mangleCache),F(null,_)}};if(de.length>0)return F(ke("Transform failed",de,N),null);q.codeFS&&(S++,j.readFile(q.code,(_,X)=>{_!==null?F(_,null):(q.code=X,a())})),q.mapFS&&(S++,j.readFile(q.map,(_,X)=>{_!==null?F(_,null):(q.map=X,a())})),a()})}catch(P){let K=[];try{$e(K,b,{},W,D)}catch{}const A=_e(P,e,I,void 0,"");m(u,{command:"error",flags:K,error:A},()=>{A.detail=I.load(A.detail),F(ke("Transform failed",[A],[]),null)})}};if((typeof f=="string"||f instanceof Uint8Array)&&f.length>1024*1024){let V=z;z=()=>j.writeFile(f,V)}z(null)},formatMessages:({callName:c,refs:u,messages:f,options:b,callback:W})=>{let j=ye(f,"messages",null,"");if(!b)throw new Error(`Missing second argument in ${c}() call`);let F={},I=l(b,F,"kind",x),z=l(b,F,"color",Q),V=l(b,F,"terminalWidth",xe);if(se(b,F,`in ${c}() call`),I===void 0)throw new Error(`Missing "kind" in ${c}() call`);if(I!=="error"&&I!=="warning")throw new Error(`Expected "kind" to be "error" or "warning" in ${c}() call`);let P={command:"format-msgs",messages:j,isWarning:I==="warning"};z!==void 0&&(P.color=z),V!==void 0&&(P.terminalWidth=V),m(u,P,(K,A)=>{if(K)return W(new Error(K),null);W(null,A.messages)})},analyzeMetafile:({callName:c,refs:u,metafile:f,options:b,callback:W})=>{b===void 0&&(b={});let j={},F=l(b,j,"color",Q),I=l(b,j,"verbose",Q);se(b,j,`in ${c}() call`);let z={command:"analyze-metafile",metafile:f};F!==void 0&&(z.color=F),I!==void 0&&(z.verbose=I),m(u,z,(V,P)=>{if(V)return W(new Error(V),null);W(null,P.result)})}}}}function Xe(){const e=new Map;let t=0;return{load(r){return e.get(r)},store(r){if(r===void 0)return-1;const o=t++;return e.set(o,r),o}}}function Pe(e,t,r){let o,p=!1;return()=>{if(p)return o;p=!0;try{let w=(e.stack+"").split(`
`);w.splice(1,1);let s=qe(t,w,r);if(s)return o={text:e.message,location:s},o}catch{}}}function _e(e,t,r,o,p){let w="Internal error",s=null;try{w=(e&&e.message||e)+""}catch{}try{s=qe(t,(e.stack+"").split(`
`),"")}catch{}return{id:"",pluginName:p,text:w,location:s,notes:o?[o]:[],detail:r?r.store(e):-1}}function qe(e,t,r){let o="    at ";if(e.readFileSync&&!t[0].startsWith(o)&&t[1].startsWith(o))for(let p=1;p<t.length;p++){let w=t[p];if(w.startsWith(o))for(w=w.slice(o.length);;){let s=/^(?:new |async )?\S+ \((.*)\)$/.exec(w);if(s){w=s[1];continue}if(s=/^eval at \S+ \((.*)\)(?:, \S+:\d+:\d+)?$/.exec(w),s){w=s[1];continue}if(s=/^(\S+):(\d+):(\d+)$/.exec(w),s){let y;try{y=e.readFileSync(s[1],"utf8")}catch{break}let i=y.split(/\r\n|\r|\n|\u2028|\u2029/)[+s[2]-1]||"",T=+s[3]-1,B=i.slice(T,T+r.length)===r?r.length:0;return{file:s[1],namespace:"file",line:+s[2],column:me(i.slice(0,T)).length,length:me(i.slice(T,T+B)).length,lineText:i+`
`+t.slice(1).join(`
`),suggestion:""}}break}}return null}function ke(e,t,r){let o=5,p=t.length<1?"":` with ${t.length} error${t.length<2?"":"s"}:`+t.slice(0,o+1).map((s,y)=>{if(y===o)return`
...`;if(!s.location)return`
error: ${s.text}`;let{file:i,line:T,column:B}=s.location,O=s.pluginName?`[plugin: ${s.pluginName}] `:"";return`
${i}:${T}:${B}: ERROR: ${O}${s.text}`}).join(""),w=new Error(`${e}${p}`);return w.errors=t,w.warnings=r,w}function we(e,t){for(const r of e)r.detail=t.load(r.detail);return e}function Ze(e,t){if(e==null)return null;let r={},o=l(e,r,"file",x),p=l(e,r,"namespace",x),w=l(e,r,"line",xe),s=l(e,r,"column",xe),y=l(e,r,"length",xe),i=l(e,r,"lineText",x),T=l(e,r,"suggestion",x);return se(e,r,t),{file:o||"",namespace:p||"",line:w||0,column:s||0,length:y||0,lineText:i||"",suggestion:T||""}}function ye(e,t,r,o){let p=[],w=0;for(const s of e){let y={},i=l(s,y,"id",x),T=l(s,y,"pluginName",x),B=l(s,y,"text",x),O=l(s,y,"location",Ge),m=l(s,y,"notes",re),L=l(s,y,"detail",je),H=`in element ${w} of "${t}"`;se(s,y,H);let U=[];if(m)for(const g of m){let h={},v=l(g,h,"text",x),$=l(g,h,"location",Ge);se(g,h,H),U.push({text:v||"",location:Ze($,H)})}p.push({id:i||"",pluginName:T||o,text:B||"",location:Ze(O,H),notes:U,detail:r?r.store(L):-1}),w++}return p}function Re(e,t){const r=[];for(const o of e){if(typeof o!="string")throw new Error(`${JSON.stringify(t)} must be an array of strings`);r.push(o)}return r}function xt({path:e,contents:t}){let r=null;return{path:e,contents:t,get text(){const o=this.contents;return(r===null||o!==t)&&(t=o,r=ve(o)),r}}}var _t="0.14.54",kt=e=>De().build(e),Et=()=>{throw new Error('The "serve" API only works in node')},St=(e,t)=>De().transform(e,t),Ot=(e,t)=>De().formatMessages(e,t),jt=(e,t)=>De().analyzeMetafile(e,t),Tt=()=>{throw new Error('The "buildSync" API only works in node')},$t=()=>{throw new Error('The "transformSync" API only works in node')},Pt=()=>{throw new Error('The "formatMessagesSync" API only works in node')},Rt=()=>{throw new Error('The "analyzeMetafileSync" API only works in node')},Ee,Ae,De=()=>{if(Ae)return Ae;throw Ee?new Error('You need to wait for the promise returned from "initialize" to be resolved before calling this'):new Error('You need to call "initialize" before calling this')},Dt=e=>{e=wt(e||{});let t=e.wasmURL,r=e.wasmModule,o=e.worker!==!1;if(!t&&!r)throw new Error('Must provide either the "wasmURL" option or the "wasmModule" option');if(Ee)throw new Error('Cannot call "initialize" more than once');return Ee=Ut(t||"",r,o),Ee.catch(()=>{Ee=void 0}),Ee},Ut=(e,t,r)=>be(void 0,null,function*(){let o;if(t)o=t;else{let y=yield fetch(e);if(!y.ok)throw new Error(`Failed to download ${JSON.stringify(e)}`);o=yield y.arrayBuffer()}let p;if(r){let y=new Blob([`onmessage=((postMessage) => {
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
    })(postMessage)`],{type:"text/javascript"});p=new Worker(URL.createObjectURL(y))}else{let y=(i=>{var T=(m,L,H)=>new Promise((U,g)=>{var h=D=>{try{$(H.next(D))}catch(C){g(C)}},v=D=>{try{$(H.throw(D))}catch(C){g(C)}},$=D=>D.done?U(D.value):Promise.resolve(D.value).then(h,v);$((H=H.apply(m,L)).next())});let B,O={};for(let m=self;m;m=Object.getPrototypeOf(m))for(let L of Object.getOwnPropertyNames(m))L in O||Object.defineProperty(O,L,{get:()=>self[L]});return(()=>{const m=()=>{const U=new Error("not implemented");return U.code="ENOSYS",U};if(!O.fs){let U="";O.fs={constants:{O_WRONLY:-1,O_RDWR:-1,O_CREAT:-1,O_TRUNC:-1,O_APPEND:-1,O_EXCL:-1},writeSync(g,h){U+=H.decode(h);const v=U.lastIndexOf(`
`);return v!=-1&&(console.log(U.substr(0,v)),U=U.substr(v+1)),h.length},write(g,h,v,$,D,C){if(v!==0||$!==h.length||D!==null){C(m());return}const Z=this.writeSync(g,h);C(null,Z)},chmod(g,h,v){v(m())},chown(g,h,v,$){$(m())},close(g,h){h(m())},fchmod(g,h,v){v(m())},fchown(g,h,v,$){$(m())},fstat(g,h){h(m())},fsync(g,h){h(null)},ftruncate(g,h,v){v(m())},lchown(g,h,v,$){$(m())},link(g,h,v){v(m())},lstat(g,h){h(m())},mkdir(g,h,v){v(m())},open(g,h,v,$){$(m())},read(g,h,v,$,D,C){C(m())},readdir(g,h){h(m())},readlink(g,h){h(m())},rename(g,h,v){v(m())},rmdir(g,h){h(m())},stat(g,h){h(m())},symlink(g,h,v){v(m())},truncate(g,h,v){v(m())},unlink(g,h){h(m())},utimes(g,h,v,$){$(m())}}}if(O.process||(O.process={getuid(){return-1},getgid(){return-1},geteuid(){return-1},getegid(){return-1},getgroups(){throw m()},pid:-1,ppid:-1,umask(){throw m()},cwd(){throw m()},chdir(){throw m()}}),!O.crypto)throw new Error("globalThis.crypto is not available, polyfill required (crypto.getRandomValues only)");if(!O.performance)throw new Error("globalThis.performance is not available, polyfill required (performance.now only)");if(!O.TextEncoder)throw new Error("globalThis.TextEncoder is not available, polyfill required");if(!O.TextDecoder)throw new Error("globalThis.TextDecoder is not available, polyfill required");const L=new TextEncoder("utf-8"),H=new TextDecoder("utf-8");O.Go=class{constructor(){this.argv=["js"],this.env={},this.exit=n=>{n!==0&&console.warn("exit code:",n)},this._exitPromise=new Promise(n=>{this._resolveExitPromise=n}),this._pendingEvent=null,this._scheduledTimeouts=new Map,this._nextCallbackTimeoutID=1;const U=(n,d)=>{this.mem.setUint32(n+0,d,!0),this.mem.setUint32(n+4,Math.floor(d/4294967296),!0)},g=n=>{const d=this.mem.getUint32(n+0,!0),R=this.mem.getInt32(n+4,!0);return d+R*4294967296},h=n=>{const d=this.mem.getFloat64(n,!0);if(d===0)return;if(!isNaN(d))return d;const R=this.mem.getUint32(n,!0);return this._values[R]},v=(n,d)=>{if(typeof d=="number"&&d!==0){if(isNaN(d)){this.mem.setUint32(n+4,2146959360,!0),this.mem.setUint32(n,0,!0);return}this.mem.setFloat64(n,d,!0);return}if(d===void 0){this.mem.setFloat64(n,0,!0);return}let c=this._ids.get(d);c===void 0&&(c=this._idPool.pop(),c===void 0&&(c=this._values.length),this._values[c]=d,this._goRefCounts[c]=0,this._ids.set(d,c)),this._goRefCounts[c]++;let u=0;switch(typeof d){case"object":d!==null&&(u=1);break;case"string":u=2;break;case"symbol":u=3;break;case"function":u=4;break}this.mem.setUint32(n+4,2146959360|u,!0),this.mem.setUint32(n,c,!0)},$=n=>{const d=g(n+0),R=g(n+8);return new Uint8Array(this._inst.exports.mem.buffer,d,R)},D=n=>{const d=g(n+0),R=g(n+8),c=new Array(R);for(let u=0;u<R;u++)c[u]=h(d+u*8);return c},C=n=>{const d=g(n+0),R=g(n+8);return H.decode(new DataView(this._inst.exports.mem.buffer,d,R))},Z=Date.now()-performance.now();this.importObject={go:{"runtime.wasmExit":n=>{n>>>=0;const d=this.mem.getInt32(n+8,!0);this.exited=!0,delete this._inst,delete this._values,delete this._goRefCounts,delete this._ids,delete this._idPool,this.exit(d)},"runtime.wasmWrite":n=>{n>>>=0;const d=g(n+8),R=g(n+16),c=this.mem.getInt32(n+24,!0);O.fs.writeSync(d,new Uint8Array(this._inst.exports.mem.buffer,R,c))},"runtime.resetMemoryDataView":n=>{this.mem=new DataView(this._inst.exports.mem.buffer)},"runtime.nanotime1":n=>{n>>>=0,U(n+8,(Z+performance.now())*1e6)},"runtime.walltime":n=>{n>>>=0;const d=new Date().getTime();U(n+8,d/1e3),this.mem.setInt32(n+16,d%1e3*1e6,!0)},"runtime.scheduleTimeoutEvent":n=>{n>>>=0;const d=this._nextCallbackTimeoutID;this._nextCallbackTimeoutID++,this._scheduledTimeouts.set(d,setTimeout(()=>{for(this._resume();this._scheduledTimeouts.has(d);)console.warn("scheduleTimeoutEvent: missed timeout event"),this._resume()},g(n+8)+1)),this.mem.setInt32(n+16,d,!0)},"runtime.clearTimeoutEvent":n=>{n>>>=0;const d=this.mem.getInt32(n+8,!0);clearTimeout(this._scheduledTimeouts.get(d)),this._scheduledTimeouts.delete(d)},"runtime.getRandomData":n=>{n>>>=0,crypto.getRandomValues($(n+8))},"syscall/js.finalizeRef":n=>{n>>>=0;const d=this.mem.getUint32(n+8,!0);if(this._goRefCounts[d]--,this._goRefCounts[d]===0){const R=this._values[d];this._values[d]=null,this._ids.delete(R),this._idPool.push(d)}},"syscall/js.stringVal":n=>{n>>>=0,v(n+24,C(n+8))},"syscall/js.valueGet":n=>{n>>>=0;const d=Reflect.get(h(n+8),C(n+16));n=this._inst.exports.getsp()>>>0,v(n+32,d)},"syscall/js.valueSet":n=>{n>>>=0,Reflect.set(h(n+8),C(n+16),h(n+32))},"syscall/js.valueDelete":n=>{n>>>=0,Reflect.deleteProperty(h(n+8),C(n+16))},"syscall/js.valueIndex":n=>{n>>>=0,v(n+24,Reflect.get(h(n+8),g(n+16)))},"syscall/js.valueSetIndex":n=>{n>>>=0,Reflect.set(h(n+8),g(n+16),h(n+24))},"syscall/js.valueCall":n=>{n>>>=0;try{const d=h(n+8),R=Reflect.get(d,C(n+16)),c=D(n+32),u=Reflect.apply(R,d,c);n=this._inst.exports.getsp()>>>0,v(n+56,u),this.mem.setUint8(n+64,1)}catch(d){n=this._inst.exports.getsp()>>>0,v(n+56,d),this.mem.setUint8(n+64,0)}},"syscall/js.valueInvoke":n=>{n>>>=0;try{const d=h(n+8),R=D(n+16),c=Reflect.apply(d,void 0,R);n=this._inst.exports.getsp()>>>0,v(n+40,c),this.mem.setUint8(n+48,1)}catch(d){n=this._inst.exports.getsp()>>>0,v(n+40,d),this.mem.setUint8(n+48,0)}},"syscall/js.valueNew":n=>{n>>>=0;try{const d=h(n+8),R=D(n+16),c=Reflect.construct(d,R);n=this._inst.exports.getsp()>>>0,v(n+40,c),this.mem.setUint8(n+48,1)}catch(d){n=this._inst.exports.getsp()>>>0,v(n+40,d),this.mem.setUint8(n+48,0)}},"syscall/js.valueLength":n=>{n>>>=0,U(n+16,parseInt(h(n+8).length))},"syscall/js.valuePrepareString":n=>{n>>>=0;const d=L.encode(String(h(n+8)));v(n+16,d),U(n+24,d.length)},"syscall/js.valueLoadString":n=>{n>>>=0;const d=h(n+8);$(n+16).set(d)},"syscall/js.valueInstanceOf":n=>{n>>>=0,this.mem.setUint8(n+24,h(n+8)instanceof h(n+16)?1:0)},"syscall/js.copyBytesToGo":n=>{n>>>=0;const d=$(n+8),R=h(n+32);if(!(R instanceof Uint8Array||R instanceof Uint8ClampedArray)){this.mem.setUint8(n+48,0);return}const c=R.subarray(0,d.length);d.set(c),U(n+40,c.length),this.mem.setUint8(n+48,1)},"syscall/js.copyBytesToJS":n=>{n>>>=0;const d=h(n+8),R=$(n+16);if(!(d instanceof Uint8Array||d instanceof Uint8ClampedArray)){this.mem.setUint8(n+48,0);return}const c=R.subarray(0,d.length);d.set(c),U(n+40,c.length),this.mem.setUint8(n+48,1)},debug:n=>{console.log(n)}}}}run(U){return T(this,null,function*(){if(!(U instanceof WebAssembly.Instance))throw new Error("Go.run: WebAssembly.Instance expected");this._inst=U,this.mem=new DataView(this._inst.exports.mem.buffer),this._values=[NaN,0,null,!0,!1,O,this],this._goRefCounts=new Array(this._values.length).fill(1/0),this._ids=new Map([[0,1],[null,2],[!0,3],[!1,4],[O,5],[this,6]]),this._idPool=[],this.exited=!1;let g=4096;const h=n=>{const d=g,R=L.encode(n+"\0");return new Uint8Array(this.mem.buffer,g,R.length).set(R),g+=R.length,g%8!==0&&(g+=8-g%8),d},v=this.argv.length,$=[];this.argv.forEach(n=>{$.push(h(n))}),$.push(0),Object.keys(this.env).sort().forEach(n=>{$.push(h(`${n}=${this.env[n]}`))}),$.push(0);const C=g;if($.forEach(n=>{this.mem.setUint32(g,n,!0),this.mem.setUint32(g+4,0,!0),g+=8}),g>=12288)throw new Error("total length of command line and environment variables exceeds limit");this._inst.exports.run(v,C),this.exited&&this._resolveExitPromise(),yield this._exitPromise})}_resume(){if(this.exited)throw new Error("Go program has already exited");this._inst.exports.resume(),this.exited&&this._resolveExitPromise()}_makeFuncWrapper(U){const g=this;return function(){const h={id:U,this:this,args:arguments};return g._pendingEvent=h,g._resume(),h.result}}}})(),B=({data:m})=>{let L=new TextDecoder,H=O.fs,U="";H.writeSync=(D,C)=>{if(D===1)i(C);else if(D===2){U+=L.decode(C);let Z=U.split(`
`);Z.length>1&&console.log(Z.slice(0,-1).join(`
`)),U=Z[Z.length-1]}else throw new Error("Bad write");return C.length};let g=[],h,v=0;B=({data:D})=>{D.length>0&&(g.push(D),h&&h())},H.read=(D,C,Z,n,d,R)=>{if(D!==0||Z!==0||n!==C.length||d!==null)throw new Error("Bad read");if(g.length===0){h=()=>H.read(D,C,Z,n,d,R);return}let c=g[0],u=Math.max(0,Math.min(n,c.length-v));C.set(c.subarray(v,v+u),Z),v+=u,v===c.length&&(g.shift(),v=0),R(null,u)};let $=new O.Go;$.argv=["","--service=0.14.54"],m instanceof WebAssembly.Module?WebAssembly.instantiate(m,$.importObject).then(D=>$.run(D)):WebAssembly.instantiate(m,$.importObject).then(({instance:D})=>$.run(D))},m=>B(m)})(i=>p.onmessage({data:i}));p={onmessage:null,postMessage:i=>setTimeout(()=>y({data:i})),terminate(){}}}p.postMessage(o),p.onmessage=({data:y})=>w(y);let{readFromStdout:w,service:s}=vt({writeToStdin(y){p.postMessage(y)},isSync:!1,isWriteUnavailable:!0,esbuild:Oe});Ae={build:y=>new Promise((i,T)=>s.buildOrServe({callName:"build",refs:null,serveOptions:null,options:y,isTTY:!1,defaultWD:"/",callback:(B,O)=>B?T(B):i(O)})),transform:(y,i)=>new Promise((T,B)=>s.transform({callName:"transform",refs:null,input:y,options:i||{},isTTY:!1,fs:{readFile(O,m){m(new Error("Internal error"),null)},writeFile(O,m){m(null)}},callback:(O,m)=>O?B(O):T(m)})),formatMessages:(y,i)=>new Promise((T,B)=>s.formatMessages({callName:"formatMessages",refs:null,messages:y,options:i,callback:(O,m)=>O?B(O):T(m)})),analyzeMetafile:(y,i)=>new Promise((T,B)=>s.analyzeMetafile({callName:"analyzeMetafile",refs:null,metafile:typeof y=="string"?y:JSON.stringify(y),options:i,callback:(O,m)=>O?B(O):T(m)}))}}),Ct=Oe})(tt)})(et);var Nt=et.exports;export{Nt as b};
