"use strict";(self.webpackChunk_patternslib_patternslib=self.webpackChunk_patternslib_patternslib||[]).push([[2177],{62177:function(t,e,r){r.r(e),r.d(e,{factory:function(){return k}});var n=r(19958),o=r(2376),i=r(84348);const a=new o.H$("suggestion");function c({pluginKey:t=a,editor:e,char:r="@",allowSpaces:c=!1,allowedPrefixes:u=[" "],startOfLine:l=!1,decorationTag:s="span",decorationClass:d="suggestion",command:f=(()=>null),items:p=(()=>[]),render:v=(()=>({})),allow:h=(()=>!0)}){let y;const m=null==v?void 0:v(),g=new o.Sy({key:t,view(){return{update:async(t,r)=>{var n,o,i,a,c,u,l;const s=null===(n=this.key)||void 0===n?void 0:n.getState(r),d=null===(o=this.key)||void 0===o?void 0:o.getState(t.state),v=s.active&&d.active&&s.range.from!==d.range.from,h=!s.active&&d.active,g=s.active&&!d.active,w=h||v,b=!h&&!g&&s.query!==d.query&&!v,x=g||v;if(!w&&!b&&!x)return;const E=x&&!w?s:d,S=document.querySelector(`[data-decoration-id="${E.decorationId}"]`);y={editor:e,range:E.range,query:E.query,text:E.text,items:[],command:t=>{f({editor:e,range:E.range,props:t})},decorationNode:S,clientRect:S?()=>{var t;const{decorationId:r}=null===(t=this.key)||void 0===t?void 0:t.getState(e.state),n=document.querySelector(`[data-decoration-id="${r}"]`);return(null==n?void 0:n.getBoundingClientRect())||null}:null},w&&(null===(i=null==m?void 0:m.onBeforeStart)||void 0===i||i.call(m,y)),b&&(null===(a=null==m?void 0:m.onBeforeUpdate)||void 0===a||a.call(m,y)),(b||w)&&(y.items=await p({editor:e,query:E.query})),x&&(null===(c=null==m?void 0:m.onExit)||void 0===c||c.call(m,y)),b&&(null===(u=null==m?void 0:m.onUpdate)||void 0===u||u.call(m,y)),w&&(null===(l=null==m?void 0:m.onStart)||void 0===l||l.call(m,y))},destroy:()=>{var t;y&&(null===(t=null==m?void 0:m.onExit)||void 0===t||t.call(m,y))}}},state:{init:()=>({active:!1,range:{from:0,to:0},query:null,text:null,composing:!1}),apply(t,o,i,a){const{isEditable:s}=e,{composing:d}=e.view,{selection:f}=t,{empty:p,from:v}=f,y={...o};if(y.composing=d,s&&(p||e.view.composing)){!(v<o.range.from||v>o.range.to)||d||o.composing||(y.active=!1);const t=function(t){var e;const{char:r,allowSpaces:o,allowedPrefixes:i,startOfLine:a,$position:c}=t,u=(0,n.escapeForRegEx)(r),l=new RegExp(`\\s${u}$`),s=a?"^":"",d=o?new RegExp(`${s}${u}.*?(?=\\s${u}|$)`,"gm"):new RegExp(`${s}(?:^)?${u}[^\\s${u}]*`,"gm"),f=(null===(e=c.nodeBefore)||void 0===e?void 0:e.isText)&&c.nodeBefore.text;if(!f)return null;const p=c.pos-f.length,v=Array.from(f.matchAll(d)).pop();if(!v||void 0===v.input||void 0===v.index)return null;const h=v.input.slice(Math.max(0,v.index-1),v.index),y=new RegExp(`^[${null==i?void 0:i.join("")}\0]?$`).test(h);if(null!==i&&!y)return null;const m=p+v.index;let g=m+v[0].length;return o&&l.test(f.slice(g-1,g+1))&&(v[0]+=" ",g+=1),m<c.pos&&g>=c.pos?{range:{from:m,to:g},query:v[0].slice(r.length),text:v[0]}:null}({char:r,allowSpaces:c,allowedPrefixes:u,startOfLine:l,$position:f.$from}),i=`id_${Math.floor(4294967295*Math.random())}`;t&&h({editor:e,state:a,range:t.range})?(y.active=!0,y.decorationId=o.decorationId?o.decorationId:i,y.range=t.range,y.query=t.query,y.text=t.text):y.active=!1}else y.active=!1;return y.active||(y.decorationId=null,y.range={from:0,to:0},y.query=null,y.text=null),y}},props:{handleKeyDown(t,e){var r;const{active:n,range:o}=g.getState(t.state);return n&&(null===(r=null==m?void 0:m.onKeyDown)||void 0===r?void 0:r.call(m,{view:t,event:e,range:o}))||!1},decorations(t){const{active:e,range:r,decorationId:n}=g.getState(t);return e?i.EH.create(t.doc,[i.p.inline(r.from,r.to,{nodeName:s,class:d,"data-decoration-id":n})]):null}}});return g}var u=r(22383),l=r(84193),s=r(56938),d=r(57467),f=r(92452);var p,v=["aria-activedescendant","aria-atomic","aria-autocomplete","aria-busy","aria-checked","aria-controls","aria-describedby","aria-disabled","aria-dropeffect","aria-expanded","aria-flowto","aria-grabbed","aria-haspopup","aria-hidden","aria-invalid","aria-label","aria-labelledby","aria-level","aria-live","aria-multiline","aria-multiselectable","aria-orientation","aria-owns","aria-posinset","aria-pressed","aria-readonly","aria-relevant","aria-required","aria-selected","aria-setsize","aria-sort","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext","role"];function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function y(){y=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,i=Object.create(o.prototype),a=new O(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return j()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=E(a,r);if(c){if(c===s)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===s)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var s={};function d(){}function f(){}function p(){}var v={};c(v,o,(function(){return this}));var m=Object.getPrototypeOf,g=m&&m(m(k([])));g&&g!==e&&r.call(g,o)&&(v=g);var w=p.prototype=d.prototype=Object.create(v);function b(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function n(o,i,a,c){var u=l(t[o],t,i);if("throw"!==u.type){var s=u.arg,d=s.value;return d&&"object"==h(d)&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(d).then((function(t){s.value=t,a(s)}),(function(t){return n("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}}function E(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=l(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,s;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function k(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:j}}function j(){return{value:void 0,done:!0}}return f.prototype=p,c(w,"constructor",p),c(p,"constructor",f),f.displayName=c(p,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,a,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},b(x.prototype),c(x.prototype,i,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new x(u(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(w),c(w,a,"Generator"),c(w,o,(function(){return this})),c(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=k,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,s):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:k(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},t}function m(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function g(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){m(i,n,o,a,c,"next",t)}function c(t){m(i,n,o,a,c,"throw",t)}a(void 0)}))}}function w(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function b(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?w(Object(r),!0).forEach((function(e){x(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function x(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function E(t){return function(t){if(Array.isArray(t))return L(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||S(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(t,e){if(t){if("string"==typeof t)return L(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?L(t,e):void 0}}function L(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function O(t,e){return{name:"tiptap-suggestion",trigger:".tiptap-items",init:function(t){var e=this;this.el=t[0],s.Z.get_data(this.el,this.name)||(s.Z.set_data(this.el,this.name,this),(0,l.focus_handler)(this.el),this.active=this.items[0],d.Z.add_event_listener(this.el,"keydown","tiptap-suggestion-keydown",(function(t){if(t.preventDefault(),t.stopPropagation(),"ArrowDown"===t.code)if(e.active){var r=e.active?e.items.indexOf(e.active)+1:0;r>=e.items.length&&(r=0),e.active=e.items[r]}else e.active=e.items[0];else if("ArrowUp"===t.code)if(e.active){var n=e.active?e.items.indexOf(e.active)-1:0;n<0&&(n=e.items.length-1),e.active=e.items[n]}else e.active=e.items[0];else if("Enter"===t.code){var o,i,a=null===(o=e.active)||void 0===o||null===(i=o.dataset)||void 0===i?void 0:i.tiptapValue;if(!a)return;var c=e.active.querySelector("a");e.command(c,a)}})),d.Z.add_event_listener(this.el,"click","tiptap-suggestion-click",(function(t){var r=t.target.closest("a"),n=s.Z.acquire_attribute(r,"data-tiptap-value");n&&(t.preventDefault(),e.command(r,n))})))},command:function(t,r){var n=Object.fromEntries(E(t.attributes).map((function(t){return[t.name,t.value]})));e.command(b({"data-title":r},n))},get active(){return this.el.querySelector(".tiptap-item.active")},set active(t){var e;t&&(null===(e=this.active)||void 0===e||e.classList.remove("active"),t.classList.add("active"))},get items(){return E(this.el.querySelectorAll(".tiptap-item"))}}}var k=function(t){t.app;var e=t.name,r=t.char,i=t.plural;return n.Node.create({name:e,group:"inline",inline:!0,selectable:!1,atom:!0,addOptions:function(){return{HTMLAttributes:{},url:null,renderLabel:function(t){var e=t.options,r=t.node;return"".concat(e.suggestion.char).concat(r.attrs["data-title"])},suggestion:{char:r,pluginKey:new o.H$(e)}}},addAttributes:function(){var t={class:{},href:{},target:{},title:{},"data-id":{},"data-title":{},"data-pat-inject":{},"data-pat-forward":{},"data-pat-modal":{},"data-pat-switch":{},"data-pat-toggle":{},"data-pat-tooltip":{}};t["data-".concat(this.name)]={default:""};var e,r=function(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=S(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return a=t.done,t},e:function(t){c=!0,i=t},f:function(){try{a||null==r.return||r.return()}finally{if(c)throw i}}}}(v);try{for(r.s();!(e=r.n()).done;){t[e.value]={}}}catch(t){r.e(t)}finally{r.f()}return t},parseHTML:function(){return[{tag:"a[data-".concat(this.name,"]")}]},renderHTML:function(t){var e=t.node,r=t.HTMLAttributes;return["a",(0,n.mergeAttributes)(this.options.HTMLAttributes,r),this.options.renderLabel({options:this.options,node:e})]},renderText:function(t){var e=t.node;return this.options.renderLabel({options:this.options,node:e})},addKeyboardShortcuts:function(){var t=this;return{Enter:function(){var t,e,r;return!!p&&(null===(t=p.tippy)||void 0===t||null===(e=t.popper)||void 0===e||null===(r=e.querySelector(".tiptap-items"))||void 0===r||r.dispatchEvent(new KeyboardEvent("keydown",{code:"Enter"})),!0)},Backspace:function(e){return e.editor.commands.command((function(e){var r=e.tr,n=e.state,o=!1,i=n.selection,a=i.empty,c=i.anchor;return!!a&&(n.doc.nodesBetween(c-1,c,(function(e,n){if(e.type.name===t.name)return o=!0,r.insertText(t.options.suggestion.char||"",n,n+e.nodeSize),!1})),o)}))}}},addProseMirrorPlugins:function(){var t=this;return this.options.suggestion.command=function(e){var r=e.editor,n=e.range,o=e.props;n.to=r.state.selection.$head.pos,r.chain().focus().insertContentAt(n,[{type:t.name,attrs:o},{type:"text",text:" "}]).run()},this.options.suggestion.render=function(){var e,r;return{onStart:(r=g(y().mark((function r(n){var o;return y().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=function(){var e=g(y().mark((function e(){var r,o,a,c,l,s,d,f=arguments;return y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=f.length>0&&void 0!==f[0]?f[0]:{transaction:null},o=r.transaction,a=t.options.url,c=n.range.from+1,l=o?o.curSelection.$head.pos:n.range.to,s=t.editor.state.doc.textBetween(c,l,""),a=s?a+s:a,e.next=8,(0,u.y)({url:a,editor:t.editor,instance:p,pattern:O(0,n),extra_class:"tiptap-".concat(i||t.name)});case 8:return d=e.sent,e.abrupt("return",d);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),e=f.Z.debounce(function(){var t=g(y().mark((function t(e){return y().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o(e);case 2:p=t.sent;case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),200),r.next=4,o();case 4:p=r.sent,t.editor.on("selectionUpdate",e);case 6:case"end":return r.stop()}}),r)}))),function(t){return r.apply(this,arguments)}),onKeyDown:function(t){if(p&&("ArrowDown"===t.event.key||"ArrowUp"===t.event.key||"Enter"===t.event.key)){t.event.preventDefault(),t.event.stopPropagation();var e=document.querySelector(".tiptap-items");if(!e)return;e.dispatchEvent(new KeyboardEvent("keydown",{code:t.event.key}))}},onExit:function(){(0,u.z)({instance:p,pattern_name:"tiptap-suggestion"}),p=null,t.editor.off("selectionUpdate",e)}}},this.options.suggestion.allow=function(e){var r=e.state,n=e.range,o=r.doc.resolve(n.from),i=r.schema.nodes[t.name];return!!o.parent.type.contentMatch.matchType(i)},[c(b({editor:this.editor},this.options.suggestion))]}})}}}]);
//# sourceMappingURL=2177.667f131baf58ff913792.min.js.map