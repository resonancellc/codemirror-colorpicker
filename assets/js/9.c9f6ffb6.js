(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{11:function(t,n){var r=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},12:function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},13:function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},14:function(t,n,r){t.exports=!r(13)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},15:function(t,n,r){var o=r(11),e=r(19),i=r(20),c=r(26),u=r(27),a=function(t,n,r){var f,s,l,p,v=t&a.F,y=t&a.G,h=t&a.S,d=t&a.P,x=t&a.B,g=y?o:h?o[n]||(o[n]={}):(o[n]||{}).prototype,m=y?e:e[n]||(e[n]={}),b=m.prototype||(m.prototype={});for(f in y&&(r=n),r)l=((s=!v&&g&&void 0!==g[f])?g:r)[f],p=x&&s?u(l,o):d&&"function"==typeof l?u(Function.call,l):l,g&&c(g,f,l,t&a.U),m[f]!=l&&i(m,f,p),d&&b[f]!=l&&(b[f]=l)};o.core=e,a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},16:function(t,n,r){var o=r(12);t.exports=function(t){if(!o(t))throw TypeError(t+" is not an object!");return t}},17:function(t,n,r){var o=r(30)("wks"),e=r(31),i=r(11).Symbol,c="function"==typeof i;(t.exports=function(t){return o[t]||(o[t]=c&&i[t]||(c?i:e)("Symbol."+t))}).store=o},19:function(t,n){var r=t.exports={version:"2.6.11"};"number"==typeof __e&&(__e=r)},20:function(t,n,r){var o=r(24),e=r(35);t.exports=r(14)?function(t,n,r){return o.f(t,n,e(1,r))}:function(t,n,r){return t[n]=r,t}},209:function(t,n,r){"use strict";var o=r(15),e=r(40),i=r(38),c=r(13),u=[].sort,a=[1,2,3];o(o.P+o.F*(c((function(){a.sort(void 0)}))||!c((function(){a.sort(null)}))||!r(32)(u)),"Array",{sort:function(t){return void 0===t?u.call(i(this)):u.call(i(this),e(t))}})},21:function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},210:function(t,n,r){},22:function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},23:function(t,n){var r={}.hasOwnProperty;t.exports=function(t,n){return r.call(t,n)}},24:function(t,n,r){var o=r(16),e=r(37),i=r(34),c=Object.defineProperty;n.f=r(14)?Object.defineProperty:function(t,n,r){if(o(t),n=i(n,!0),o(r),e)try{return c(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[n]=r.value),t}},26:function(t,n,r){var o=r(11),e=r(20),i=r(23),c=r(31)("src"),u=r(51),a=(""+u).split("toString");r(19).inspectSource=function(t){return u.call(t)},(t.exports=function(t,n,r,u){var f="function"==typeof r;f&&(i(r,"name")||e(r,"name",n)),t[n]!==r&&(f&&(i(r,c)||e(r,c,t[n]?""+t[n]:a.join(String(n)))),t===o?t[n]=r:u?t[n]?t[n]=r:e(t,n,r):(delete t[n],e(t,n,r)))})(Function.prototype,"toString",(function(){return"function"==typeof this&&this[c]||u.call(this)}))},27:function(t,n,r){var o=r(40);t.exports=function(t,n,r){if(o(t),void 0===n)return t;switch(r){case 1:return function(r){return t.call(n,r)};case 2:return function(r,o){return t.call(n,r,o)};case 3:return function(r,o,e){return t.call(n,r,o,e)}}return function(){return t.apply(n,arguments)}}},28:function(t,n){var r=Math.ceil,o=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?o:r)(t)}},294:function(t,n,r){"use strict";var o=r(210);r.n(o).a},30:function(t,n,r){var o=r(19),e=r(11),i=e["__core-js_shared__"]||(e["__core-js_shared__"]={});(t.exports=function(t,n){return i[t]||(i[t]=void 0!==n?n:{})})("versions",[]).push({version:o.version,mode:r(46)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},31:function(t,n){var r=0,o=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++r+o).toString(36))}},32:function(t,n,r){"use strict";var o=r(13);t.exports=function(t,n){return!!t&&o((function(){n?t.call(null,(function(){}),1):t.call(null)}))}},33:function(t,n,r){var o=r(28),e=Math.min;t.exports=function(t){return t>0?e(o(t),9007199254740991):0}},34:function(t,n,r){var o=r(12);t.exports=function(t,n){if(!o(t))return t;var r,e;if(n&&"function"==typeof(r=t.toString)&&!o(e=r.call(t)))return e;if("function"==typeof(r=t.valueOf)&&!o(e=r.call(t)))return e;if(!n&&"function"==typeof(r=t.toString)&&!o(e=r.call(t)))return e;throw TypeError("Can't convert object to primitive value")}},35:function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},36:function(t,n,r){var o=r(27),e=r(47),i=r(38),c=r(33),u=r(65);t.exports=function(t,n){var r=1==t,a=2==t,f=3==t,s=4==t,l=6==t,p=5==t||l,v=n||u;return function(n,u,y){for(var h,d,x=i(n),g=e(x),m=o(u,y,3),b=c(g.length),w=0,_=r?v(n,b):a?v(n,0):void 0;b>w;w++)if((p||w in g)&&(d=m(h=g[w],w,x),t))if(r)_[w]=d;else if(d)switch(t){case 3:return!0;case 5:return h;case 6:return w;case 2:_.push(h)}else if(s)return!1;return l?-1:f||s?s:_}}},360:function(t,n,r){"use strict";r.r(n);r(57),r(209);var o=r(45),e={props:["src","title","description","count"],data:function(){return{paletteColors:[],textColors:[],colorCount:this.count||10,imageSrc:this.src||"/resources/image/grapes.jpg"}},methods:{generate:function(){var t=this;o.Color.ImageToRGB(this.imageSrc,{maxWidth:100},(function(n){t.paletteColors=o.Color.palette(n,t.colorCount).map((function(t){var n=o.Color.contrast(t);return{color:t,contrast:n,textColor:n>=128?"black":"white"}})).sort((function(t,n){return t.contrast===n.contrast?0:t.contrast>n.contrast?1:-1}))}))}},mounted:function(){this.generate()}},i=(r(294),r(1)),c=Object(i.a)(e,(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"image-palette-item"},[r("table",[r("tr",[r("td",[r("img",{ref:"img",attrs:{src:t.imageSrc,width:"210px",height:"160px"}})]),t._v(" "),r("td",{attrs:{valign:"top"}},[r("div",{staticClass:"colors"},t._l(t.paletteColors,(function(n,o){return r("div",{key:o,staticClass:"color-item",style:{"background-color":n.color,color:n.textColor}},[t._v(t._s(n.color))])})),0)])])])])}),[],!1,null,"9e6fc71c",null);n.default=c.exports},37:function(t,n,r){t.exports=!r(14)&&!r(13)((function(){return 7!=Object.defineProperty(r(39)("div"),"a",{get:function(){return 7}}).a}))},38:function(t,n,r){var o=r(22);t.exports=function(t){return Object(o(t))}},39:function(t,n,r){var o=r(12),e=r(11).document,i=o(e)&&o(e.createElement);t.exports=function(t){return i?e.createElement(t):{}}},40:function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},46:function(t,n){t.exports=!1},47:function(t,n,r){var o=r(21);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==o(t)?t.split(""):Object(t)}},51:function(t,n,r){t.exports=r(30)("native-function-to-string",Function.toString)},57:function(t,n,r){"use strict";var o=r(15),e=r(36)(1);o(o.P+o.F*!r(32)([].map,!0),"Array",{map:function(t){return e(this,t,arguments[1])}})},60:function(t,n,r){var o=r(21);t.exports=Array.isArray||function(t){return"Array"==o(t)}},65:function(t,n,r){var o=r(66);t.exports=function(t,n){return new(o(t))(n)}},66:function(t,n,r){var o=r(12),e=r(60),i=r(17)("species");t.exports=function(t){var n;return e(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!e(n.prototype)||(n=void 0),o(n)&&null===(n=n[i])&&(n=void 0)),void 0===n?Array:n}}}]);