(function(e){function t(t){for(var r,a,u=t[0],i=t[1],p=t[2],f=0,l=[];f<u.length;f++)a=u[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&l.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);s&&s(t);while(l.length)l.shift()();return c.push.apply(c,p||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,u=1;u<n.length;u++){var i=n[u];0!==o[i]&&(r=!1)}r&&(c.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={app:0},c=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var p=0;p<u.length;p++)t(u[p]);var s=i;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o={id:"app"};function c(e,t,n,c,a,u){var i=Object(r["q"])("Menu"),p=Object(r["q"])("router-view");return Object(r["m"])(),Object(r["c"])("div",o,[Object(r["d"])(i),Object(r["d"])(p)])}const a={};var u=a,i={name:"App",components:{Menu:u}};i.render=c;var p=i,s=n("6c02"),f={id:"scene",ref:"scene",class:"h-screen flex justify-center items-center"},l=Object(r["d"])("div",{"data-depth":"0.4",class:"m-auto",style:{"font-size":"8vw"}},[Object(r["d"])("p",null,"suralo.design")],-1);function d(e,t,n,o,c,a){return Object(r["m"])(),Object(r["c"])("div",f,[l],512)}var b=n("a5ab"),v=n.n(b),O={name:"Home",props:[],data:function(){return{}},computed:{},mounted:function(){new v.a(this.$refs.scene,{precision:3,calibrateX:!0,calibrateY:!0})},methods:{}};O.render=d;var h=O;const j={};var m=j,y=[{path:"/",name:"Home",component:h},{path:"/info",name:"Info",component:m}],w=Object(s["a"])({history:Object(s["b"])(),routes:y}),g=w;n("a766");Object(r["b"])(p).use(g).mount("#app")},a766:function(e,t,n){}});
//# sourceMappingURL=app.3e1d8d08.js.map