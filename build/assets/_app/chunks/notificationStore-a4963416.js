var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,n=(t,a,s)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[a]=s,r=(e,r)=>{for(var o in r||(r={}))a.call(r,o)&&n(e,o,r[o]);if(t)for(var o of t(r))s.call(r,o)&&n(e,o,r[o]);return e};import{Z as o,_ as i,$ as c,C as u}from"./vendor-d0121766.js";import{v as l}from"./variables-adc57dbe.js";const p=async()=>{await w("token"),await w("user"),window.location.replace("/")},d=async(e,t)=>{await o.set(e,t,{expires:7})},w=async e=>{await o.remove(e)},b=async e=>{await d("token",e.token),await d("user",e.user)},f=(e,t,a,s)=>{const n="GET"===e||"DELETE"===e;return i(`${l.apiPath}/${t}`,r({method:`${e}`,headers:r({Accept:"application/json","Content-Type":"application/json"},s?{Authorization:`Bearer ${s}`}:{})},n?null:{body:JSON.stringify(a)})).then((async e=>(await(async e=>{440===e.status&&(await p(),setTimeout((()=>{window.location.replace("/")}),200))})(e),await e.json()))).catch((e=>({status:502,message:"Oops! Something is wrong. Please try later."})))};const m=function(e){let t;const a=u([]);function s(e,t="default",s){a.update((a=>[...a,{id:"_"+Math.random().toString(36).substr(2,9),type:t,message:e,timeout:s}]))}const n=c(a,((e,s)=>{if(s(e),e.length>0)return t=setTimeout((()=>{a.update((e=>(e.shift(),e)))}),e[0].timeout),()=>{clearTimeout(t)}})),{subscribe:r}=n;return{subscribe:r,send:s,default:(e,t)=>s(e,"default",t||7e3),danger:(e,t)=>s(e,"danger",t||7e3),warning:(e,t)=>s(e,"warning",t||7e3),info:(e,t)=>s(e,"info",t||7e3),success:(e,t)=>s(e,"success",t||7e3)}}();export{f as a,b,p as l,m as n};