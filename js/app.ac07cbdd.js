(function(e){function t(t){for(var r,u,a=t[0],i=t[1],p=t[2],f=0,l=[];f<a.length;f++)u=a[f],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&l.push(o[u][0]),o[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);s&&s(t);while(l.length)l.shift()();return c.push.apply(c,p||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},c=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],i=a.push.bind(a);a.push=t,a=a.slice();for(var p=0;p<a.length;p++)t(a[p]);var s=i;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o={id:"app"};function c(e,t,n,c,u,a){var i=Object(r["q"])("Menu"),p=Object(r["q"])("router-view");return Object(r["m"])(),Object(r["c"])("div",o,[Object(r["d"])(i),Object(r["d"])(p)])}const u={};var a=u,i={name:"App",components:{Menu:a}};i.render=c;var p=i,s=n("6c02"),f={id:"scene",ref:"scene",class:"h-screen flex justify-center items-center"},l=Object(r["d"])("div",{"data-depth":"0.4",class:"m-auto",style:{"font-size":"8vw"}},[Object(r["d"])("p",null,"suralo.design")],-1);function d(e,t,n,o,c,u){return Object(r["m"])(),Object(r["c"])("div",f,[l],512)}var b=n("a5ab"),v=n.n(b),O={name:"Home",props:[],data:function(){return{}},computed:{},mounted:function(){new v.a(this.$refs.scene)},methods:{}};O.render=d;var h=O;const j={};var m=j,y=[{path:"/",name:"Home",component:h},{path:"/info",name:"Info",component:m}],w=Object(s["a"])({history:Object(s["b"])(),routes:y}),g=w;n("a766");Object(r["b"])(p).use(g).mount("#app")},a766:function(e,t,n){}});
//# sourceMappingURL=app.ac07cbdd.js.map