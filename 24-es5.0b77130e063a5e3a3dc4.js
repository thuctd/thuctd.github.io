!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function r(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}function n(t,e,r){return(n="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=u(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(r):o.value}})(t,e,r||t)}function o(t,e){return(o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function i(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var r,n=u(t);if(e){var o=u(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return a(this,r)}}function a(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?c(t):e}function c(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return f(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return a=t.done,t},e:function(t){c=!0,i=t},f:function(){try{a||null==r.return||r.return()}finally{if(c)throw i}}}}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}(self.webpackChunk_4la=self.webpackChunk_4la||[]).push([[24],{91024:function(e,a,f){"use strict";f.d(a,{u:function(){return We},d:function(){return Fe}});var l=f(64762),h=f(35366),d=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},p="object"==typeof global&&global&&global.Object===Object&&global,y="object"==typeof self&&self&&self.Object===Object&&self,v=p||y||Function("return this")(),b=function(){return v.Date.now()},g=v.Symbol,_=Object.prototype,m=_.hasOwnProperty,j=_.toString,w=g?g.toStringTag:void 0,O=Object.prototype.toString,E=g?g.toStringTag:void 0,x=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":E&&E in Object(t)?function(t){var e=m.call(t,w),r=t[w];try{t[w]=void 0;var n=!0}catch(i){}var o=j.call(t);return n&&(e?t[w]=r:delete t[w]),o}(t):function(t){return O.call(t)}(t)},A=function(t){return null!=t&&"object"==typeof t},k=/^\s+|\s+$/g,S=/^[-+]0x[0-9a-f]+$/i,D=/^0b[01]+$/i,P=/^0o[0-7]+$/i,T=parseInt,R=function(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||A(t)&&"[object Symbol]"==x(t)}(t))return NaN;if(d(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=d(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(k,"");var r=D.test(t);return r||P.test(t)?T(t.slice(2),r?2:8):S.test(t)?NaN:+t},I=Math.max,C=Math.min,N=function(t,e){return t===e||t!=t&&e!=e},z=function(t,e){for(var r=t.length;r--;)if(N(t[r][0],e))return r;return-1},M=Array.prototype.splice;function W(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}W.prototype.clear=function(){this.__data__=[],this.size=0},W.prototype.delete=function(t){var e=this.__data__,r=z(e,t);return!(r<0||(r==e.length-1?e.pop():M.call(e,r,1),--this.size,0))},W.prototype.get=function(t){var e=this.__data__,r=z(e,t);return r<0?void 0:e[r][1]},W.prototype.has=function(t){return z(this.__data__,t)>-1},W.prototype.set=function(t,e){var r=this.__data__,n=z(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this};var F,U=W,B=function(t){if(!d(t))return!1;var e=x(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},L=v["__core-js_shared__"],$=(F=/[^.]+$/.exec(L&&L.keys&&L.keys.IE_PROTO||""))?"Symbol(src)_1."+F:"",V=Function.prototype.toString,H=function(t){if(null!=t){try{return V.call(t)}catch(e){}try{return t+""}catch(e){}}return""},G=/^\[object .+?Constructor\]$/,Z=RegExp("^"+Function.prototype.toString.call(Object.prototype.hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),q=function(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return function(t){return!(!d(t)||(e=t,$&&$ in e))&&(B(t)?Z:G).test(H(t));var e}(r)?r:void 0},Y=q(v,"Map"),J=q(Object,"create"),K=Object.prototype.hasOwnProperty,X=Object.prototype.hasOwnProperty;function Q(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}Q.prototype.clear=function(){this.__data__=J?J(null):{},this.size=0},Q.prototype.delete=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},Q.prototype.get=function(t){var e=this.__data__;if(J){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return K.call(e,t)?e[t]:void 0},Q.prototype.has=function(t){var e=this.__data__;return J?void 0!==e[t]:X.call(e,t)},Q.prototype.set=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=J&&void 0===e?"__lodash_hash_undefined__":e,this};var tt=Q,et=function(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map};function rt(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}rt.prototype.clear=function(){this.size=0,this.__data__={hash:new tt,map:new(Y||U),string:new tt}},rt.prototype.delete=function(t){var e=et(this,t).delete(t);return this.size-=e?1:0,e},rt.prototype.get=function(t){return et(this,t).get(t)},rt.prototype.has=function(t){return et(this,t).has(t)},rt.prototype.set=function(t,e){var r=et(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this};var nt=rt;function ot(t){var e=this.__data__=new U(t);this.size=e.size}ot.prototype.clear=function(){this.__data__=new U,this.size=0},ot.prototype.delete=function(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r},ot.prototype.get=function(t){return this.__data__.get(t)},ot.prototype.has=function(t){return this.__data__.has(t)},ot.prototype.set=function(t,e){var r=this.__data__;if(r instanceof U){var n=r.__data__;if(!Y||n.length<199)return n.push([t,e]),this.size=++r.size,this;r=this.__data__=new nt(n)}return r.set(t,e),this.size=r.size,this};var it=ot,at=function(){try{var t=q(Object,"defineProperty");return t({},"",{}),t}catch(e){}}(),ct=function(t,e,r){"__proto__"==e&&at?at(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r},ut=Object.prototype.hasOwnProperty,st=function(t,e,r){var n=t[e];ut.call(t,e)&&N(n,r)&&(void 0!==r||e in t)||ct(t,e,r)},ft=function(t,e,r,n){var o=!r;r||(r={});for(var i=-1,a=e.length;++i<a;){var c=e[i],u=n?n(r[c],t[c],c,r,t):void 0;void 0===u&&(u=t[c]),o?ct(r,c,u):st(r,c,u)}return r},lt=function(t){return A(t)&&"[object Arguments]"==x(t)},ht=Object.prototype,dt=ht.hasOwnProperty,pt=ht.propertyIsEnumerable,yt=lt(function(){return arguments}())?lt:function(t){return A(t)&&dt.call(t,"callee")&&!pt.call(t,"callee")},vt=Array.isArray,bt="object"==typeof exports&&exports&&!exports.nodeType&&exports,gt=bt&&"object"==typeof module&&module&&!module.nodeType&&module,_t=gt&&gt.exports===bt?v.Buffer:void 0,mt=(_t?_t.isBuffer:void 0)||function(){return!1},jt=/^(?:0|[1-9]\d*)$/,wt=function(t,e){var r=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==r||"symbol"!=r&&jt.test(t))&&t>-1&&t%1==0&&t<e},Ot=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991},Et={};Et["[object Float32Array]"]=Et["[object Float64Array]"]=Et["[object Int8Array]"]=Et["[object Int16Array]"]=Et["[object Int32Array]"]=Et["[object Uint8Array]"]=Et["[object Uint8ClampedArray]"]=Et["[object Uint16Array]"]=Et["[object Uint32Array]"]=!0,Et["[object Arguments]"]=Et["[object Array]"]=Et["[object ArrayBuffer]"]=Et["[object Boolean]"]=Et["[object DataView]"]=Et["[object Date]"]=Et["[object Error]"]=Et["[object Function]"]=Et["[object Map]"]=Et["[object Number]"]=Et["[object Object]"]=Et["[object RegExp]"]=Et["[object Set]"]=Et["[object String]"]=Et["[object WeakMap]"]=!1;var xt=function(t){return function(e){return t(e)}},At="object"==typeof exports&&exports&&!exports.nodeType&&exports,kt=At&&"object"==typeof module&&module&&!module.nodeType&&module,St=kt&&kt.exports===At&&p.process,Dt=function(){try{return kt&&kt.require&&kt.require("util").types||St&&St.binding&&St.binding("util")}catch(t){}}(),Pt=Dt&&Dt.isTypedArray,Tt=Pt?xt(Pt):function(t){return A(t)&&Ot(t.length)&&!!Et[x(t)]},Rt=Object.prototype.hasOwnProperty,It=function(t,e){var r=vt(t),n=!r&&yt(t),o=!r&&!n&&mt(t),i=!r&&!n&&!o&&Tt(t),a=r||n||o||i,c=a?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],u=c.length;for(var s in t)!e&&!Rt.call(t,s)||a&&("length"==s||o&&("offset"==s||"parent"==s)||i&&("buffer"==s||"byteLength"==s||"byteOffset"==s)||wt(s,u))||c.push(s);return c},Ct=Object.prototype,Nt=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||Ct)},zt=function(t,e){return function(r){return t(e(r))}},Mt=zt(Object.keys,Object),Wt=Object.prototype.hasOwnProperty,Ft=function(t){return null!=t&&Ot(t.length)&&!B(t)},Ut=function(t){return Ft(t)?It(t):function(t){if(!Nt(t))return Mt(t);var e=[];for(var r in Object(t))Wt.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)},Bt=Object.prototype.hasOwnProperty,Lt=function(t){return Ft(t)?It(t,!0):function(t){if(!d(t))return function(t){var e=[];if(null!=t)for(var r in Object(t))e.push(r);return e}(t);var e=Nt(t),r=[];for(var n in t)("constructor"!=n||!e&&Bt.call(t,n))&&r.push(n);return r}(t)},$t="object"==typeof exports&&exports&&!exports.nodeType&&exports,Vt=$t&&"object"==typeof module&&module&&!module.nodeType&&module,Ht=Vt&&Vt.exports===$t?v.Buffer:void 0,Gt=Ht?Ht.allocUnsafe:void 0,Zt=function(){return[]},qt=Object.prototype.propertyIsEnumerable,Yt=Object.getOwnPropertySymbols,Jt=Yt?function(t){return null==t?[]:(t=Object(t),function(e,r){for(var n=-1,o=null==e?0:e.length,i=0,a=[];++n<o;){var c=e[n];qt.call(t,c)&&(a[i++]=c)}return a}(Yt(t)))}:Zt,Kt=function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t},Xt=zt(Object.getPrototypeOf,Object),Qt=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)Kt(e,Jt(t)),t=Xt(t);return e}:Zt,te=function(t,e,r){var n=e(t);return vt(t)?n:Kt(n,r(t))},ee=function(t){return te(t,Ut,Jt)},re=function(t){return te(t,Lt,Qt)},ne=q(v,"DataView"),oe=q(v,"Promise"),ie=q(v,"Set"),ae=q(v,"WeakMap"),ce=H(ne),ue=H(Y),se=H(oe),fe=H(ie),le=H(ae),he=x;(ne&&"[object DataView]"!=he(new ne(new ArrayBuffer(1)))||Y&&"[object Map]"!=he(new Y)||oe&&"[object Promise]"!=he(oe.resolve())||ie&&"[object Set]"!=he(new ie)||ae&&"[object WeakMap]"!=he(new ae))&&(he=function(t){var e=x(t),r="[object Object]"==e?t.constructor:void 0,n=r?H(r):"";if(n)switch(n){case ce:return"[object DataView]";case ue:return"[object Map]";case se:return"[object Promise]";case fe:return"[object Set]";case le:return"[object WeakMap]"}return e});var de=he,pe=Object.prototype.hasOwnProperty,ye=v.Uint8Array,ve=function(t){var e=new t.constructor(t.byteLength);return new ye(e).set(new ye(t)),e},be=/\w*$/,ge=g?g.prototype:void 0,_e=ge?ge.valueOf:void 0,me=Object.create,je=function(){function t(){}return function(e){if(!d(e))return{};if(me)return me(e);t.prototype=e;var r=new t;return t.prototype=void 0,r}}(),we=Dt&&Dt.isMap,Oe=we?xt(we):function(t){return A(t)&&"[object Map]"==de(t)},Ee=Dt&&Dt.isSet,xe=Ee?xt(Ee):function(t){return A(t)&&"[object Set]"==de(t)},Ae={};Ae["[object Arguments]"]=Ae["[object Array]"]=Ae["[object ArrayBuffer]"]=Ae["[object DataView]"]=Ae["[object Boolean]"]=Ae["[object Date]"]=Ae["[object Float32Array]"]=Ae["[object Float64Array]"]=Ae["[object Int8Array]"]=Ae["[object Int16Array]"]=Ae["[object Int32Array]"]=Ae["[object Map]"]=Ae["[object Number]"]=Ae["[object Object]"]=Ae["[object RegExp]"]=Ae["[object Set]"]=Ae["[object String]"]=Ae["[object Symbol]"]=Ae["[object Uint8Array]"]=Ae["[object Uint8ClampedArray]"]=Ae["[object Uint16Array]"]=Ae["[object Uint32Array]"]=!0,Ae["[object Error]"]=Ae["[object Function]"]=Ae["[object WeakMap]"]=!1;var ke=function t(e,r,n,o,i,a){var c,u=1&r,s=2&r,f=4&r;if(n&&(c=i?n(e,o,i,a):n(e)),void 0!==c)return c;if(!d(e))return e;var l=vt(e);if(l){if(c=function(t){var e=t.length,r=new t.constructor(e);return e&&"string"==typeof t[0]&&pe.call(t,"index")&&(r.index=t.index,r.input=t.input),r}(e),!u)return function(t,e){var r=-1,n=t.length;for(e||(e=Array(n));++r<n;)e[r]=t[r];return e}(e,c)}else{var h=de(e),p="[object Function]"==h||"[object GeneratorFunction]"==h;if(mt(e))return function(t,e){if(e)return t.slice();var r=t.length,n=Gt?Gt(r):new t.constructor(r);return t.copy(n),n}(e,u);if("[object Object]"==h||"[object Arguments]"==h||p&&!i){if(c=s||p?{}:function(t){return"function"!=typeof t.constructor||Nt(t)?{}:je(Xt(t))}(e),!u)return s?function(t,e){return ft(t,Qt(t),e)}(e,function(t,e){return t&&ft(e,Lt(e),t)}(c,e)):function(t,e){return ft(t,Jt(t),e)}(e,function(t,e){return t&&ft(e,Ut(e),t)}(c,e))}else{if(!Ae[h])return i?e:{};c=function(t,e,r){var n,o,i=t.constructor;switch(e){case"[object ArrayBuffer]":return ve(t);case"[object Boolean]":case"[object Date]":return new i(+t);case"[object DataView]":return function(t,e){var r=e?ve(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,r);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return function(t,e){var r=e?ve(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,r);case"[object Map]":return new i;case"[object Number]":case"[object String]":return new i(t);case"[object RegExp]":return(o=new(n=t).constructor(n.source,be.exec(n))).lastIndex=n.lastIndex,o;case"[object Set]":return new i;case"[object Symbol]":return _e?Object(_e.call(t)):{}}}(e,h,u)}}a||(a=new it);var y=a.get(e);if(y)return y;a.set(e,c),xe(e)?e.forEach(function(o){c.add(t(o,r,n,o,e,a))}):Oe(e)&&e.forEach(function(o,i){c.set(i,t(o,r,n,i,e,a))});var v=l?void 0:(f?s?re:ee:s?Lt:Ut)(e);return function(t,e){for(var r=-1,n=null==t?0:t.length;++r<n&&!1!==e(t[r],r););}(v||e,function(o,i){v&&(o=e[i=o]),st(c,i,t(o,r,n,i,e,a))}),c},Se=Function.prototype.toString,De=Object.prototype.hasOwnProperty,Pe=Se.call(Object);function Te(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Set,r=[t],n=new Set;r.length>0;){var o=r.shift();if(!(n.has(o)||Re(o)||e.has(o)))if(n.add(o),o[Symbol.iterator])try{var i,a=s(o);try{for(a.s();!(i=a.n()).done;){var c=i.value;r.push(c)}}catch(f){a.e(f)}finally{a.f()}}catch(f){}else for(var u in o)"defaultValue"!==u&&r.push(o[u])}return n}function Re(t){var e=Object.prototype.toString.call(t),r=typeof t;return"number"===r||"boolean"===r||"string"===r||"symbol"===r||"function"===r||"[object Date]"===e||"[object RegExp]"===e||"[object Module]"===e||null==t||t instanceof EventTarget||t instanceof Event}var Ie=function(e){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}(f,e);var a=i(f);function f(e){var r,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t(this,f),(r=a.call(this,n))._editor=null,r._throttledSave=function(t,e,r){var n=!0,o=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return d(r)&&(n="leading"in r?!!r.leading:n,o="trailing"in r?!!r.trailing:o),function(t,e,r){var n,o,i,a,c,u,s=0,f=!1,l=!1,h=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function p(e){var r=n,i=o;return n=o=void 0,s=e,a=t.apply(i,r)}function y(t){return s=t,c=setTimeout(g,e),f?p(t):a}function v(t){var r=t-u;return void 0===u||r>=e||r<0||l&&t-s>=i}function g(){var t=b();if(v(t))return _(t);c=setTimeout(g,function(t){var r=e-(t-u);return l?C(r,i-(t-s)):r}(t))}function _(t){return c=void 0,h&&n?p(t):(n=o=void 0,a)}function m(){var t=b(),r=v(t);if(n=arguments,o=this,u=t,r){if(void 0===c)return y(u);if(l)return clearTimeout(c),c=setTimeout(g,e),p(u)}return void 0===c&&(c=setTimeout(g,e)),a}return e=R(e)||0,d(r)&&(f=!!r.leading,i=(l="maxWait"in r)?I(R(r.maxWait)||0,e):i,h="trailing"in r?!!r.trailing:h),m.cancel=function(){void 0!==c&&clearTimeout(c),s=0,n=u=o=c=void 0},m.flush=function(){return void 0===c?a:_(b())},m}(t,e,{leading:n,maxWait:e,trailing:o})}(r._save.bind(c(r)),"number"==typeof n.saveInterval?n.saveInterval:5e3),r._creator=function(t,r){return e.create(t,r)},r._destructor=function(t){return t.destroy()},r}return r(f,[{key:"editor",get:function(){return this._editor}},{key:"_item",get:function(){return this._editor}},{key:"_restart",value:function(){var t=this;return Promise.resolve().then(function(){return t.state="initializing",t._fire("stateChange"),t._destroy()}).catch(function(t){console.error("An error happened during the editor destroying.",t)}).then(function(){if("string"==typeof t._elementOrData)return t.create(t._data,t._config,t._config.context);var e=Object.assign({},t._config,{initialData:t._data});return t.create(t._elementOrData,e,e.context)}).then(function(){t._fire("restart")})}},{key:"create",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._elementOrData,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this._config,o=arguments.length>2?arguments[2]:void 0;return Promise.resolve().then(function(){return n(u(f.prototype),"_startErrorHandling",t).call(t),t._elementOrData=e,t._config=t._cloneEditorConfiguration(r)||{},t._config.context=o,t._creator(e,t._config)}).then(function(e){t._editor=e,e.model.document.on("change:data",t._throttledSave),t._lastDocumentVersion=e.model.document.version,t._data=t._getData(),t.state="ready",t._fire("stateChange")})}},{key:"destroy",value:function(){var t=this;return Promise.resolve().then(function(){return t.state="destroyed",t._fire("stateChange"),n(u(f.prototype),"destroy",t).call(t),t._destroy()})}},{key:"_destroy",value:function(){var t=this;return Promise.resolve().then(function(){t._stopErrorHandling(),t._throttledSave.flush();var e=t._editor;return t._editor=null,t._destructor(e)})}},{key:"_save",value:function(){var t=this._editor.model.document.version;if(t!==this._lastDocumentVersion)try{this._data=this._getData(),this._lastDocumentVersion=t}catch(e){console.error(e,"An error happened during restoring editor data. Editor will be restored from the previously saved data.")}}},{key:"_setExcludedProperties",value:function(t){this._excludedProps=t}},{key:"_getData",value:function(){var t,e={},r=s(this._editor.model.document.getRootNames());try{for(r.s();!(t=r.n()).done;){var n=t.value;e[n]=this._editor.data.get({rootName:n})}}catch(o){r.e(o)}finally{r.f()}return e}},{key:"_isErrorComingFromThisItem",value:function(t){return function(t,e){var r,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:new Set;if(t===e&&"object"==typeof(r=t)&&null!==r)return!0;var o,i=Te(t,n),a=Te(e,n),c=s(i);try{for(c.s();!(o=c.n()).done;){var u=o.value;if(a.has(u))return!0}}catch(f){c.e(f)}finally{c.f()}return!1}(this._editor,t.context,this._excludedProps)}},{key:"_cloneEditorConfiguration",value:function(t){return ke(t,5,e="function"==typeof(e=function(t,e){return function(t){return A(t)&&1===t.nodeType&&!function(t){if(!A(t)||"[object Object]"!=x(t))return!1;var e=Xt(t);if(null===e)return!0;var r=De.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&Se.call(r)==Pe}(t)}(t)||"context"===e?t:void 0})?e:void 0);var e}}]),f}(function(){function e(r){var n=this;if(t(this,e),this.crashes=[],this.state="initializing",this._crashNumberLimit="number"==typeof r.crashNumberLimit?r.crashNumberLimit:3,this._now=Date.now,this._minimumNonErrorTimePeriod="number"==typeof r.minimumNonErrorTimePeriod?r.minimumNonErrorTimePeriod:5e3,this._boundErrorHandler=function(t){var e=t.error||t.reason;e instanceof Error&&n._handleError(e,t)},this._listeners={},!this._restart)throw new Error("The Watchdog class was split into the abstract `Watchdog` class and the `EditorWatchdog` class. Please, use `EditorWatchdog` if you have used the `Watchdog` class previously.")}return r(e,[{key:"setCreator",value:function(t){this._creator=t}},{key:"setDestructor",value:function(t){this._destructor=t}},{key:"destroy",value:function(){this._stopErrorHandling(),this._listeners={}}},{key:"on",value:function(t,e){this._listeners[t]||(this._listeners[t]=[]),this._listeners[t].push(e)}},{key:"off",value:function(t,e){this._listeners[t]=this._listeners[t].filter(function(t){return t!==e})}},{key:"_fire",value:function(t){for(var e=this._listeners[t]||[],r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];var i,a=s(e);try{for(a.s();!(i=a.n()).done;){var c=i.value;c.apply(this,[null].concat(n))}}catch(u){a.e(u)}finally{a.f()}}},{key:"_startErrorHandling",value:function(){window.addEventListener("error",this._boundErrorHandler),window.addEventListener("unhandledrejection",this._boundErrorHandler)}},{key:"_stopErrorHandling",value:function(){window.removeEventListener("error",this._boundErrorHandler),window.removeEventListener("unhandledrejection",this._boundErrorHandler)}},{key:"_handleError",value:function(t,e){if(this._shouldReactToError(t)){this.crashes.push({message:t.message,stack:t.stack,filename:e.filename,lineno:e.lineno,colno:e.colno,date:this._now()});var r=this._shouldRestart();this.state="crashed",this._fire("stateChange"),this._fire("error",{error:t,causesRestart:r}),r?this._restart():(this.state="crashedPermanently",this._fire("stateChange"))}}},{key:"_shouldReactToError",value:function(t){return t.is&&t.is("CKEditorError")&&null!=t.context&&"ready"===this.state&&this._isErrorComingFromThisItem(t)}},{key:"_shouldRestart",value:function(){return this.crashes.length<=this._crashNumberLimit||(this.crashes[this.crashes.length-1].date-this.crashes[this.crashes.length-1-this._crashNumberLimit].date)/this._crashNumberLimit>this._minimumNonErrorTimePeriod}}]),e}()),Ce=f(16073),Ne=f(61511);function ze(t,e){}var Me=new Array(256).fill(0).map(function(t,e){return("0"+e.toString(16)).slice(-2)}),We=function(){var e=function(){function e(r,n){var o,i,a,c;t(this,e),this.config={},this.data="",this.tagName="div",this.ready=new h.vpe,this.change=new h.vpe,this.blur=new h.vpe,this.focus=new h.vpe,this.error=new h.vpe,this.initiallyDisabled=!1,this.isEditorSettingData=!1,this.id=(o=4294967296*Math.random()>>>0,i=4294967296*Math.random()>>>0,a=4294967296*Math.random()>>>0,c=4294967296*Math.random()>>>0,"e"+Me[o>>0&255]+Me[o>>8&255]+Me[o>>16&255]+Me[o>>24&255]+Me[i>>0&255]+Me[i>>8&255]+Me[i>>16&255]+Me[i>>24&255]+Me[a>>0&255]+Me[a>>8&255]+Me[a>>16&255]+Me[a>>24&255]+Me[c>>0&255]+Me[c>>8&255]+Me[c>>16&255]+Me[c>>24&255]),this.ngZone=n,this.elementRef=r}return r(e,[{key:"disabled",get:function(){return this.editorInstance?this.editorInstance.isReadOnly:this.initiallyDisabled},set:function(t){this.setDisabledState(t)}},{key:"editorInstance",get:function(){var t=this.editorWatchdog;return this.watchdog&&(t=this.watchdog._watchdogs.get(this.id)),t?t.editor:null}},{key:"ngAfterViewInit",value:function(){this.attachToWatchdog()}},{key:"ngOnDestroy",value:function(){return(0,l.mG)(this,void 0,void 0,regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.watchdog){t.next=5;break}return t.next=3,this.watchdog.remove(this.id);case 3:t.next=10;break;case 5:if(t.t0=this.editorWatchdog&&this.editorWatchdog.editor,!t.t0){t.next=10;break}return t.next=9,this.editorWatchdog.destroy();case 9:this.editorWatchdog=void 0;case 10:case"end":return t.stop()}},t,this)}))}},{key:"writeValue",value:function(t){null===t&&(t=""),this.editorInstance?(this.isEditorSettingData=!0,this.editorInstance.setData(t),this.isEditorSettingData=!1):(this.data=t,this.editorElement&&(this.editorElement.innerHTML=this.data))}},{key:"registerOnChange",value:function(t){this.cvaOnChange=t}},{key:"registerOnTouched",value:function(t){this.cvaOnTouched=t}},{key:"setDisabledState",value:function(t){this.editorInstance&&(this.editorInstance.isReadOnly=t),this.initiallyDisabled=t}},{key:"attachToWatchdog",value:function(){var t=this,e=function(e,r){return(0,l.mG)(t,void 0,void 0,regeneratorRuntime.mark(function t(){var n=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.ngZone.runOutsideAngular(function(){return(0,l.mG)(n,void 0,void 0,regeneratorRuntime.mark(function t(){var n,o=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.elementRef.nativeElement.appendChild(e),t.next=3,this.editor.create(e,r);case 3:return n=t.sent,t.abrupt("return",(this.initiallyDisabled&&(n.isReadOnly=this.initiallyDisabled),this.ngZone.run(function(){o.ready.emit(n)}),this.setUpEditorEvents(n),n));case 5:case"end":return t.stop()}},t,this)}))}));case 1:case"end":return t.stop()}},t,this)}))},r=function(e){return(0,l.mG)(t,void 0,void 0,regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.destroy();case 2:this.elementRef.nativeElement.removeChild(this.editorElement);case 3:case"end":return t.stop()}},t,this)}))},n=function(){t.ngZone.run(function(){t.error.emit()})},o=document.createElement(this.tagName),i=this.getConfig();if(this.editorElement=o,this.watchdog)this.watchdog.add({id:this.id,type:"editor",creator:e,destructor:r,sourceElementOrData:o,config:i}),this.watchdog.on("itemError",function(e,r){r.itemId===t.id&&n()});else{var a=new Ie(this.editor);a.setCreator(e),a.setDestructor(r),a.on("error",n),this.editorWatchdog=a,this.editorWatchdog.create(o,i)}}},{key:"getConfig",value:function(){if(this.data&&this.config.initialData)throw new Error("Editor data should be provided either using `config.initialData` or `data` properties.");return Object.assign(Object.assign({},this.config),{initialData:this.config.initialData||this.data||""})}},{key:"setUpEditorEvents",value:function(t){var e=this,r=t.editing.view.document;t.model.document.on("change:data",function(r){e.ngZone.run(function(){if(e.cvaOnChange&&!e.isEditorSettingData){var n=t.getData();e.cvaOnChange(n)}e.change.emit({event:r,editor:t})})}),r.on("focus",function(r){e.ngZone.run(function(){e.focus.emit({event:r,editor:t})})}),r.on("blur",function(r){e.ngZone.run(function(){e.cvaOnTouched&&e.cvaOnTouched(),e.blur.emit({event:r,editor:t})})})}}]),e}();return e.\u0275fac=function(t){return new(t||e)(h.Y36(h.SBq),h.Y36(h.R0b))},e.\u0275cmp=h.Xpm({type:e,selectors:[["ckeditor"]],inputs:{config:"config",data:"data",tagName:"tagName",disabled:"disabled",editor:"editor",watchdog:"watchdog"},outputs:{ready:"ready",change:"change",blur:"blur",focus:"focus",error:"error"},features:[h._Bn([{provide:Ce.JU,useExisting:(0,h.Gpc)(function(){return e}),multi:!0}])],decls:1,vars:0,template:function(t,e){1&t&&h.YNc(0,ze,0,0,"ng-template")},encapsulation:2}),e}(),Fe=function(){var e=function e(){t(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=h.oAB({type:e}),e.\u0275inj=h.cJS({imports:[[Ce.u5,Ne.ez]]}),e}()},64762:function(t,e,r){"use strict";function n(t,e,r,n){return new(r||(r=Promise))(function(o,i){function a(t){try{u(n.next(t))}catch(e){i(e)}}function c(t){try{u(n.throw(t))}catch(e){i(e)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r(function(t){t(e)})).then(a,c)}u((n=n.apply(t,e||[])).next())})}r.d(e,{mG:function(){return n}})}}])}();