const s=["/_app/start-72e257a5.js","/_app/assets/start-a8cd1609.css","/_app/pages/__layout.svelte-3b324ee5.js","/_app/assets/pages/__layout.svelte-11ff02fa.css","/_app/error.svelte-4ce37206.js","/_app/pages/index.svelte-d22e92bf.js","/_app/assets/pages/index.svelte-c1c67b7a.css","/_app/pages/register.svelte-168cac7f.js","/_app/pages/privacy.svelte-de282a58.js","/_app/assets/pages/privacy.svelte-71a9a186.css","/_app/pages/profile/[username].svelte-87115541.js","/_app/assets/pages/profile/[username].svelte-d9ede129.css","/_app/pages/support.svelte-ca00d579.js","/_app/pages/forgot.svelte-4629b703.js","/_app/pages/admin/index.svelte-fb44ce37.js","/_app/pages/admin/settings.svelte-677b9ca6.js","/_app/assets/pages/admin/settings.svelte-5f924158.css","/_app/pages/admin/users/[p].svelte-4fba910b.js","/_app/assets/pages/admin/users/[p].svelte-51559c84.css","/_app/pages/admin/user/[id].svelte-e7bb595b.js","/_app/assets/pages/admin/user/[id].svelte-3fe69489.css","/_app/pages/login.svelte-504a3222.js","/_app/assets/pages/login.svelte-0012f5a5.css","/_app/pages/user/activation/[token].svelte-bcc4d3f0.js","/_app/pages/user/reset/[token].svelte-2c705b03.js","/_app/chunks/vendor-444b70c0.js","/_app/chunks/singletons-bb9012b7.js","/_app/chunks/preload-helper-9f12a5fd.js","/_app/chunks/variables-f5c9ea4e.js","/_app/chunks/stores-4f414b9c.js","/_app/chunks/notificationStore-a26190da.js","/_app/chunks/validation-e64388c3.js","/_app/assets/validation-37230205.css","/_app/chunks/timeAgo-7121ff2d.js","/_app/chunks/LoadingSpinner-c96195f5.js","/_app/assets/LoadingSpinner-4fd162aa.css","/_app/chunks/navigation-20968cc5.js","/_app/chunks/Tabs-8fc662cb.js","/_app/assets/Tabs-6a048a2a.css","/_app/chunks/dropdown-0386fed4.js","/_app/chunks/base-component-b014be7b.js","/_app/chunks/collapse-38a01c9c.js"].concat(["/css/app.css","/favicon.ico","/img/1.webp","/img/github.svg","/img/hosting-services.gif","/img/modern-website.gif","/img/website-hosting.gif","/robots.txt"]);self.addEventListener("install",(e=>{e.waitUntil(caches.open("cache-1622834910965").then((e=>e.addAll(s))))})),self.addEventListener("activate",(s=>{s.waitUntil(caches.keys().then((async s=>{for(const e of s)e.includes(1622834910965)||caches.delete(e);self.clients.claim()})))})),self.addEventListener("fetch",(e=>{const{request:a}=e;if(0!==a.url.indexOf("http"))return;if("GET"!==a.method||a.headers.has("range")||"only-if-cached"===a.cache&&"same-origin"!==a.mode)return;const p=new URL(a.url),t=caches.match(a);if(p.origin===location.origin&&s.includes(p.pathname))e.respondWith(t);else if("https:"===p.protocol||"localhost"===location.hostname){const s=fetch(a);s.then((s=>{if(s.ok&&"basic"===s.type){const e=s.clone();caches.open("cache-1622834910965").then((s=>{s.put(a,e)}))}})),e.respondWith(s.catch((()=>t||s)))}}));
