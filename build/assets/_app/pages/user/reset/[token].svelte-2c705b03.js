import{S as a,i as s,s as t,e,k as r,t as o,j as n,a1 as c,c as i,d,n as l,a as m,g as u,m as p,b as f,M as h,E as v,f as w,o as $,F as g,G as b,v as E,r as y,w as P,K as k,a5 as j}from"../../../chunks/vendor-444b70c0.js";import{a as S,n as M}from"../../../chunks/notificationStore-a26190da.js";import{T as x,a as R}from"../../../chunks/validation-e64388c3.js";import{p as T}from"../../../chunks/stores-4f414b9c.js";import{g as A}from"../../../chunks/navigation-20968cc5.js";import"../../../chunks/variables-f5c9ea4e.js";import"../../../chunks/singletons-bb9012b7.js";const{document:D}=j;function I(a){let s,t,k,j,S,M,R,T,A,I,O,N,W,U,V,B,C,F,H,L,G,K,q,z,J,Q,X,Y,Z;return B=new x({props:{id:"password",label:"Password",type:"password",valid:a[2],validityMessage:"Please enter a valid password.",value:a[0]}}),B.$on("input",a[6]),F=new x({props:{id:"passwordConfirmation",label:"Password Confirmation",type:"password",valid:a[3],validityMessage:"Passwords did not match",value:a[1]}}),F.$on("input",a[7]),{c(){s=e("meta"),t=r(),k=e("main"),j=e("div"),S=e("div"),M=e("div"),R=e("form"),T=e("h2"),A=o("NEW PASSWORD"),I=r(),O=e("p"),N=o("Enter your new password below"),W=r(),U=e("hr"),V=r(),n(B.$$.fragment),C=r(),n(F.$$.fragment),H=r(),L=e("p"),G=e("small"),K=o("Password minimum length 8, must have 1 capital letter, 1 number and 1 special\n\t\t\t\t\t\t\t\tcharacter"),q=r(),z=e("button"),J=o("Update Password"),this.h()},l(a){const e=c('[data-svelte="svelte-1vtjl5"]',D.head);s=i(e,"META",{name:!0,content:!0}),e.forEach(d),t=l(a),k=i(a,"MAIN",{class:!0});var r=m(k);j=i(r,"DIV",{class:!0});var o=m(j);S=i(o,"DIV",{class:!0,style:!0});var n=m(S);M=i(n,"DIV",{class:!0});var f=m(M);R=i(f,"FORM",{id:!0});var h=m(R);T=i(h,"H2",{class:!0});var v=m(T);A=u(v,"NEW PASSWORD"),v.forEach(d),I=l(h),O=i(h,"P",{});var w=m(O);N=u(w,"Enter your new password below"),w.forEach(d),W=l(h),U=i(h,"HR",{}),V=l(h),p(B.$$.fragment,h),C=l(h),p(F.$$.fragment,h),H=l(h),L=i(h,"P",{});var $=m(L);G=i($,"SMALL",{});var g=m(G);K=u(g,"Password minimum length 8, must have 1 capital letter, 1 number and 1 special\n\t\t\t\t\t\t\t\tcharacter"),g.forEach(d),$.forEach(d),q=l(h),z=i(h,"BUTTON",{class:!0,disabled:!0});var b=m(z);J=u(b,"Update Password"),b.forEach(d),h.forEach(d),f.forEach(d),n.forEach(d),o.forEach(d),r.forEach(d),this.h()},h(){D.title="Password Reset",f(s,"name","robots"),f(s,"content","noindex, nofollow"),f(T,"class","text-primary"),f(z,"class","btn btn-primary float-end"),z.disabled=Q=!a[4],f(R,"id","password-reset-form"),f(M,"class","card-body"),f(S,"class","card"),h(S,"max-width","50em"),f(j,"class","d-flex justify-content-center mt-5"),f(k,"class","container")},m(e,r){v(D.head,s),w(e,t,r),w(e,k,r),v(k,j),v(j,S),v(S,M),v(M,R),v(R,T),v(T,A),v(R,I),v(R,O),v(O,N),v(R,W),v(R,U),v(R,V),$(B,R,null),v(R,C),$(F,R,null),v(R,H),v(R,L),v(L,G),v(G,K),v(R,q),v(R,z),v(z,J),X=!0,Y||(Z=g(z,"click",b(a[5])),Y=!0)},p(a,[s]){const t={};4&s&&(t.valid=a[2]),1&s&&(t.value=a[0]),B.$set(t);const e={};8&s&&(e.valid=a[3]),2&s&&(e.value=a[1]),F.$set(e),(!X||16&s&&Q!==(Q=!a[4]))&&(z.disabled=Q)},i(a){X||(E(B.$$.fragment,a),E(F.$$.fragment,a),X=!0)},o(a){y(B.$$.fragment,a),y(F.$$.fragment,a),X=!1},d(a){d(s),a&&d(t),a&&d(k),P(B),P(F),Y=!1,Z()}}}function O(a,s,t){let e,r,o,n;k(a,T,(a=>t(9,n=a)));let c="",i="";return a.$$.update=()=>{1&a.$$.dirty&&t(2,e=R(c)),3&a.$$.dirty&&t(3,r=c===i),12&a.$$.dirty&&t(4,o=e&&r)},[c,i,e,r,o,async function(){const a=document.getElementById("password-reset-form"),s={password:c,passwordResetToken:n.params.token};try{const t=await S("POST","user/reset-password",s);if(t.status>=400)throw new Error(t.message);return M.success("Password updated successfully"),a.reset(),A("/login")}catch(t){M.warning(t.message)}},a=>t(0,c=a.target.value),a=>t(1,i=a.target.value)]}export default class extends a{constructor(a){super(),s(this,a,O,I,t,{})}}