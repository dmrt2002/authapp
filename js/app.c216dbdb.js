(function(t){function e(e){for(var a,i,s=e[0],u=e[1],c=e[2],l=0,f=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);d&&d(e);while(f.length)f.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,i=1;i<n.length;i++){var u=n[i];0!==r[u]&&(a=!1)}a&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},o=[];function i(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-76fcf572":"ddc634b4","chunk-2d0d799a":"d366ae4b","chunk-2d229481":"f929863b"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise((function(e,a){n=r[t]=[e,a]}));e.push(n[2]=a);var o,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=i(t);var c=new Error;o=function(e){u.onerror=u.onload=null,clearTimeout(l);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",c.name="ChunkLoadError",c.type=a,c.request=o,n[1](c)}r[t]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:u})}),12e4);u.onerror=u.onload=o,document.head.appendChild(u)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/authapp/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var d=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],i=n("2877"),s={},u=Object(i["a"])(s,r,o,!1,null,null,null),c=u.exports,l=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark"},[n("div",{staticClass:"container"},[n("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("Navbar")]),t._m(0),n("div",{staticClass:"collapse navbar-collapse justify-content-end",attrs:{id:"navbarNav"}},[n("ul",{staticClass:"navbar-nav"},[n("li",{staticClass:"nav-item active"},[n("a",{staticClass:"nav-link",on:{click:t.logUserOut}},[t._v(" Logout")])])])])])]),n("section",[n("div",{staticClass:"container mt-5"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12"},[n("ul",{staticClass:"list-group"},[n("li",{staticClass:"list-group-item"},[t._v("Name : "+t._s(t.user.name))]),n("li",{staticClass:"list-group-item"},[t._v("Email : "+t._s(t.user.email))])])])])])])])},f=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[n("span",{staticClass:"navbar-toggler-icon"})])}],p=n("48ac"),v=n.n(p),h={data:function(){return{user:{}}},methods:{getUserDetails:function(){var t=localStorage.getItem("jwt"),e=v.a.decode(t);this.user=e},logUserOut:function(){localStorage.removeItem("jwt"),this.$router.push("/")}},created:function(){this.getUserDetails()}},m=h,b=Object(i["a"])(m,d,f,!1,null,"0613725a",null),g=b.exports;a["a"].use(l["a"]);var y=[{path:"/home",name:"home",component:g,meta:{requiresAuth:!0}},{path:"/",name:"login",component:function(){return Promise.all([n.e("chunk-76fcf572"),n.e("chunk-2d229481")]).then(n.bind(null,"dd7b"))}},{path:"/register",name:"register",component:function(){return Promise.all([n.e("chunk-76fcf572"),n.e("chunk-2d0d799a")]).then(n.bind(null,"7803"))}}],w=new l["a"]({mode:"history",base:"/authapp/",routes:y});w.beforeEach((function(t,e,n){t.matched.some((function(t){return t.meta.requiresAuth}))&&null==localStorage.getItem("jwt")?n({path:"/"}):n()}));var _=w;n("f9e3");a["a"].config.productionTip=!1,new a["a"]({router:_,render:function(t){return t(c)}}).$mount("#app")}});
//# sourceMappingURL=app.c216dbdb.js.map