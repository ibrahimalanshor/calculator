(function(t){function e(e){for(var r,s,i=e[0],c=e[1],a=e[2],d=0,f=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&f.push(o[s][0]),o[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(f.length)f.shift()();return u.push.apply(u,a||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(u.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},o={app:0},u=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/calculator/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var a=0;a<i.length;a++)e(i[a]);var l=c;u.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"bg"},[n("div",{staticClass:"calculator"},[n("form",{staticClass:"result",on:{submit:function(e){return e.preventDefault(),t.count(e)}}},[n("span",[t._v(t._s(t.result||t.placeholder))]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.number,expression:"number"}],ref:"number",attrs:{type:"text",placeholder:t.placeholder,autofocus:""},domProps:{value:t.number},on:{input:function(e){e.target.composing||(t.number=e.target.value)}}})]),n("div",{staticClass:"buttons"},[n("div",{staticClass:"left"},[t._l(t.buttons.top,(function(e,r){return n("button",{key:"top-"+r,staticClass:"button top",on:{click:function(t){return e.method(e.text)}}},[t._v(t._s(e.text))])})),t._l(t.buttons.number,(function(e,r){return n("button",{key:"left-"+r,staticClass:"button",class:{"bottom-left":e.corner},on:{click:function(n){return t.add(e.text)}}},[t._v(t._s(e.text))])}))],2),n("div",{staticClass:"right"},t._l(t.buttons.right,(function(e,r){return n("button",{key:"bottom-"+r,staticClass:"button right",class:{"bottom-right":e.corner},on:{click:function(t){return e.method(e.text)}}},[t._v(t._s(e.text))])})),0)])])])])},u=[],s=(n("fb6a"),n("d3b7"),n("ac1f"),n("25f0"),n("5319"),{data:function(){return{number:"",result:0,placeholder:(new Date).getFullYear(),buttons:{top:[{text:"C",method:this.clear},{text:"%",method:this.add},{text:"del",method:this.del}],number:[{text:"7"},{text:"8"},{text:"9"},{text:"4"},{text:"5"},{text:"6"},{text:"1"},{text:"2"},{text:"3"},{text:"0",corner:!0},{text:"00",corner:!0},{text:"."}],right:[{text:"/",method:this.add},{text:"*",method:this.add},{text:"-",method:this.add},{text:"+",method:this.add},{text:"=",corner:!0,method:this.count}]}}},watch:{number:function(t,e){this.number=this.number.replace(/[^*+-/%\d.]/g,""),/^[*+-/%]|[*+-/%]{2}/.test(t)&&(this.number=e),/[*+-/%]$/.test(this.number)||(this.result=Function("return ".concat(this.number))()),this.$refs.number.focus()}},methods:{clear:function(){this.result=0,this.number=""},del:function(){this.number=this.number.slice(0,-1)},add:function(t){this.number+=t},modulus:function(){this.add("%")},count:function(){/[*+-/%]\d/g.test(this.number)&&(this.number=this.result.toString(),this.result=0)}}}),i=s,c=n("2877"),a=Object(c["a"])(i,o,u,!1,null,null,null),l=a.exports;n("7d05");r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(l)}}).$mount("#app")},"7d05":function(t,e,n){}});
//# sourceMappingURL=app.f171bc5b.js.map