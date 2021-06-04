import{S as a,i as e,s,e as t,k as r,t as n,j as l,a0 as o,c as i,d as c,n as d,a as m,g as u,m as v,b as f,L as $,E as h,f as p,o as g,F as w,G as y,v as E,r as b,w as P,a1 as R}from"../chunks/vendor-d0121766.js";import{T as k,i as x,a as I}from"../chunks/validation-b785224a.js";import{a as T,n as j}from"../chunks/notificationStore-a4963416.js";import"../chunks/variables-adc57dbe.js";function D(a){let e,s,x,I,T,j,D,M,N,V,O,S,A,F,C,G,H,W,B,L,U,q,z,J,K,Q,X,Y,Z,_,aa,ea,sa,ta,ra,na,la,oa;return W=new k({props:{id:"name",label:"Name",valid:a[6],validityMessage:"Please enter a valid email.",value:a[6],className:"is-large"}}),W.$on("input",a[10]),L=new k({props:{id:"email",label:"Email",valid:a[3],validityMessage:"Please enter a valid email.",value:a[0],className:"is-large"}}),L.$on("input",a[11]),q=new k({props:{id:"password",label:"Password",type:"password",valid:a[4],validityMessage:"Please enter a valid password.",value:a[1],className:"is-large"}}),q.$on("input",a[12]),J=new k({props:{id:"passwordConfirmation",label:"Password Confirmation",type:"password",valid:a[5],validityMessage:"Passwords did not match",value:a[2],className:"is-large"}}),J.$on("input",a[13]),{c(){e=t("meta"),s=r(),x=t("div"),I=t("div"),T=t("div"),j=t("div"),D=t("div"),M=t("div"),N=t("h2"),V=n("REGISTER"),O=r(),S=t("p"),A=n("We're happy you're here!"),F=r(),C=t("hr"),G=r(),H=t("form"),l(W.$$.fragment),B=r(),l(L.$$.fragment),U=r(),l(q.$$.fragment),z=r(),l(J.$$.fragment),K=r(),Q=t("p"),X=n("Password minimum length 8, must have 1 capital letter, 1 number and 1 special\n\t\t\t\t\t\t\t\tcharacter."),Y=r(),Z=t("button"),_=n("Register"),ea=r(),sa=t("footer"),ta=t("a"),ra=n("Already have an account?"),this.h()},l(a){const t=o('[data-svelte="svelte-1ma6lh2"]',document.head);e=i(t,"META",{name:!0,content:!0}),t.forEach(c),s=d(a),x=i(a,"DIV",{class:!0});var r=m(x);I=i(r,"DIV",{class:!0});var n=m(I);T=i(n,"DIV",{class:!0});var l=m(T);j=i(l,"DIV",{class:!0,style:!0});var f=m(j);D=i(f,"DIV",{class:!0});var $=m(D);M=i($,"DIV",{});var h=m(M);N=i(h,"H2",{class:!0});var p=m(N);V=u(p,"REGISTER"),p.forEach(c),O=d(h),S=i(h,"P",{});var g=m(S);A=u(g,"We're happy you're here!"),g.forEach(c),h.forEach(c),F=d($),C=i($,"HR",{}),G=d($),H=i($,"FORM",{});var w=m(H);v(W.$$.fragment,w),B=d(w),v(L.$$.fragment,w),U=d(w),v(q.$$.fragment,w),z=d(w),v(J.$$.fragment,w),K=d(w),Q=i(w,"P",{});var y=m(Q);X=u(y,"Password minimum length 8, must have 1 capital letter, 1 number and 1 special\n\t\t\t\t\t\t\t\tcharacter."),y.forEach(c),Y=d(w),Z=i(w,"BUTTON",{class:!0,disabled:!0});var E=m(Z);_=u(E,"Register"),E.forEach(c),w.forEach(c),$.forEach(c),ea=d(f),sa=i(f,"FOOTER",{class:!0});var b=m(sa);ta=i(b,"A",{href:!0});var P=m(ta);ra=u(P,"Already have an account?"),P.forEach(c),b.forEach(c),f.forEach(c),l.forEach(c),n.forEach(c),r.forEach(c),this.h()},h(){document.title="Register Form",f(e,"name","robots"),f(e,"content","noindex, nofollow"),f(N,"class","text-primary"),f(Z,"class","btn btn-success float-end"),Z.disabled=aa=!a[7],f(D,"class","card-body"),f(ta,"href","/login"),f(sa,"class","card-footer text-center pt-3 pb-3"),f(j,"class","card mt-5"),$(j,"max-width","50em"),f(T,"class","d-flex justify-content-center d-block"),f(I,"class","col"),f(x,"class","container")},m(t,r){h(document.head,e),p(t,s,r),p(t,x,r),h(x,I),h(I,T),h(T,j),h(j,D),h(D,M),h(M,N),h(N,V),h(M,O),h(M,S),h(S,A),h(D,F),h(D,C),h(D,G),h(D,H),g(W,H,null),h(H,B),g(L,H,null),h(H,U),g(q,H,null),h(H,z),g(J,H,null),h(H,K),h(H,Q),h(Q,X),h(H,Y),h(H,Z),h(Z,_),h(j,ea),h(j,sa),h(sa,ta),h(ta,ra),na=!0,la||(oa=[w(window,"keydown",a[9]),w(Z,"click",y(a[8]))],la=!0)},p(a,[e]){const s={};64&e&&(s.valid=a[6]),64&e&&(s.value=a[6]),W.$set(s);const t={};8&e&&(t.valid=a[3]),1&e&&(t.value=a[0]),L.$set(t);const r={};16&e&&(r.valid=a[4]),2&e&&(r.value=a[1]),q.$set(r);const n={};32&e&&(n.valid=a[5]),4&e&&(n.value=a[2]),J.$set(n),(!na||128&e&&aa!==(aa=!a[7]))&&(Z.disabled=aa)},i(a){na||(E(W.$$.fragment,a),E(L.$$.fragment,a),E(q.$$.fragment,a),E(J.$$.fragment,a),na=!0)},o(a){b(W.$$.fragment,a),b(L.$$.fragment,a),b(q.$$.fragment,a),b(J.$$.fragment,a),na=!1},d(a){c(e),a&&c(s),a&&c(x),P(W),P(L),P(q),P(J),la=!1,R(oa)}}}async function M({session:a}){return a.authenticated?{status:302,redirect:"/"}:{}}function N(a,e,s){let t,r,n,l,o="",i="",c="",d="";async function m(){try{const a=await T("POST","user/account-activation",{name:o,email:i,password:c});if(a&&a.status>=400)throw new Error(a.message);return s(0,i=""),s(1,c=""),s(6,o=""),j.success(a.message)}catch(a){return j.warning(a.message)}}return a.$$.update=()=>{1&a.$$.dirty&&s(3,t=x(i)),2&a.$$.dirty&&s(4,r=I(c)),6&a.$$.dirty&&s(5,n=c===d),56&a.$$.dirty&&s(7,l=t&&r&&n)},[i,c,d,t,r,n,o,l,m,function(a){l&&13===a.keyCode&&m()},a=>s(6,o=a.target.value),a=>s(0,i=a.target.value),a=>s(1,c=a.target.value),a=>s(2,d=a.target.value)]}export default class extends a{constructor(a){super(),e(this,a,N,D,s,{})}}export{M as load};