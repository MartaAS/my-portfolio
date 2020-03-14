!function(t){var e={};function i(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=41)}([function(t,e,i){"use strict";
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const n=new WeakMap,o=t=>"function"==typeof t&&n.has(t),s=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,a=(t,e,i=null)=>{for(;e!==i;){const i=e.nextSibling;t.removeChild(e),e=i}},r={},l={},d=`{{lit-${String(Math.random()).slice(2)}}}`,c=`\x3c!--${d}--\x3e`,h=new RegExp(`${d}|${c}`),p="$lit$";class u{constructor(t,e){this.parts=[],this.element=e;const i=[],n=[],o=document.createTreeWalker(e.content,133,null,!1);let s=0,a=-1,r=0;const{strings:l,values:{length:c}}=t;for(;r<c;){const t=o.nextNode();if(null!==t){if(a++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:i}=e;let n=0;for(let t=0;t<i;t++)m(e[t].name,p)&&n++;for(;n-- >0;){const e=l[r],i=b.exec(e)[2],n=i.toLowerCase()+p,o=t.getAttribute(n);t.removeAttribute(n);const s=o.split(h);this.parts.push({type:"attribute",index:a,name:i,strings:s}),r+=s.length-1}}"TEMPLATE"===t.tagName&&(n.push(t),o.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(d)>=0){const n=t.parentNode,o=e.split(h),s=o.length-1;for(let e=0;e<s;e++){let i,s=o[e];if(""===s)i=f();else{const t=b.exec(s);null!==t&&m(t[2],p)&&(s=s.slice(0,t.index)+t[1]+t[2].slice(0,-p.length)+t[3]),i=document.createTextNode(s)}n.insertBefore(i,t),this.parts.push({type:"node",index:++a})}""===o[s]?(n.insertBefore(f(),t),i.push(t)):t.data=o[s],r+=s}}else if(8===t.nodeType)if(t.data===d){const e=t.parentNode;null!==t.previousSibling&&a!==s||(a++,e.insertBefore(f(),t)),s=a,this.parts.push({type:"node",index:a}),null===t.nextSibling?t.data="":(i.push(t),a--),r++}else{let e=-1;for(;-1!==(e=t.data.indexOf(d,e+1));)this.parts.push({type:"node",index:-1}),r++}}else o.currentNode=n.pop()}for(const t of i)t.parentNode.removeChild(t)}}const m=(t,e)=>{const i=t.length-e.length;return i>=0&&t.slice(i)===e},g=t=>-1!==t.index,f=()=>document.createComment(""),b=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class x{constructor(t,e,i){this.__parts=[],this.template=t,this.processor=e,this.options=i}update(t){let e=0;for(const i of this.__parts)void 0!==i&&i.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=s?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],i=this.template.parts,n=document.createTreeWalker(t,133,null,!1);let o,a=0,r=0,l=n.nextNode();for(;a<i.length;)if(o=i[a],g(o)){for(;r<o.index;)r++,"TEMPLATE"===l.nodeName&&(e.push(l),n.currentNode=l.content),null===(l=n.nextNode())&&(n.currentNode=e.pop(),l=n.nextNode());if("node"===o.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(l.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,o.name,o.strings,this.options));a++}else this.__parts.push(void 0),a++;return s&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const y=` ${d} `;class w{constructor(t,e,i,n){this.strings=t,this.values=e,this.type=i,this.processor=n}getHTML(){const t=this.strings.length-1;let e="",i=!1;for(let n=0;n<t;n++){const t=this.strings[n],o=t.lastIndexOf("\x3c!--");i=(o>-1||i)&&-1===t.indexOf("--\x3e",o+1);const s=b.exec(t);e+=null===s?t+(i?y:c):t.substr(0,s.index)+s[1]+s[2]+p+s[3]+d}return e+=this.strings[t]}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const _=t=>null===t||!("object"==typeof t||"function"==typeof t),v=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class k{constructor(t,e,i){this.dirty=!0,this.element=t,this.name=e,this.strings=i,this.parts=[];for(let t=0;t<i.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new S(this)}_getValue(){const t=this.strings,e=t.length-1;let i="";for(let n=0;n<e;n++){i+=t[n];const e=this.parts[n];if(void 0!==e){const t=e.value;if(_(t)||!v(t))i+="string"==typeof t?t:String(t);else for(const e of t)i+="string"==typeof e?e:String(e)}}return i+=t[e]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class S{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===r||_(t)&&t===this.value||(this.value=t,o(t)||(this.committer.dirty=!0))}commit(){for(;o(this.value);){const t=this.value;this.value=r,t(this)}this.value!==r&&this.committer.commit()}}class ${constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(f()),this.endNode=t.appendChild(f())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=f()),t.__insert(this.endNode=f())}insertAfterPart(t){t.__insert(this.startNode=f()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){for(;o(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=r,t(this)}const t=this.__pendingValue;t!==r&&(_(t)?t!==this.value&&this.__commitText(t):t instanceof w?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):v(t)?this.__commitIterable(t):t===l?(this.value=l,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,i="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=i:this.__commitNode(document.createTextNode(i)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof x&&this.value.template===e)this.value.update(t.values);else{const i=new x(e,t.processor,this.options),n=i._clone();i.update(t.values),this.__commitNode(n),this.value=i}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let i,n=0;for(const o of t)void 0===(i=e[n])&&(i=new $(this.options),e.push(i),0===n?i.appendIntoPart(this):i.insertAfterPart(e[n-1])),i.setValue(o),i.commit(),n++;n<e.length&&(e.length=n,this.clear(i&&i.endNode))}clear(t=this.startNode){a(this.startNode.parentNode,t.nextSibling,this.endNode)}}class C{constructor(t,e,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=i}setValue(t){this.__pendingValue=t}commit(){for(;o(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=r,t(this)}if(this.__pendingValue===r)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=r}}class E extends k{constructor(t,e,i){super(t,e,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new I(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class I extends S{}let M=!1;try{const t={get capture(){return M=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}class N{constructor(t,e,i){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=i,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;o(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=r,t(this)}if(this.__pendingValue===r)return;const t=this.__pendingValue,e=this.value,i=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),n=null!=t&&(null==e||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=P(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=r}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const P=t=>t&&(M?{capture:t.capture,passive:t.passive,once:t.once}:t.capture);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const z=new class{handleAttributeExpressions(t,e,i,n){const o=e[0];if("."===o){return new E(t,e.slice(1),i).parts}return"@"===o?[new N(t,e.slice(1),n.eventContext)]:"?"===o?[new C(t,e.slice(1),i)]:new k(t,e,i).parts}handleTextExpression(t){return new $(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function T(t){let e=D.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},D.set(t.type,e));let i=e.stringsArray.get(t.strings);if(void 0!==i)return i;const n=t.strings.join(d);return void 0===(i=e.keyString.get(n))&&(i=new u(t,t.getTemplateElement()),e.keyString.set(n,i)),e.stringsArray.set(t.strings,i),i}const D=new Map,j=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const A=(t,...e)=>new w(t,e,"html",z),R=133;function L(t,e){const{element:{content:i},parts:n}=t,o=document.createTreeWalker(i,R,null,!1);let s=q(n),a=n[s],r=-1,l=0;const d=[];let c=null;for(;o.nextNode();){r++;const t=o.currentNode;for(t.previousSibling===c&&(c=null),e.has(t)&&(d.push(t),null===c&&(c=t)),null!==c&&l++;void 0!==a&&a.index===r;)a.index=null!==c?-1:a.index-l,a=n[s=q(n,s)]}d.forEach(t=>t.parentNode.removeChild(t))}const O=t=>{let e=11===t.nodeType?0:1;const i=document.createTreeWalker(t,R,null,!1);for(;i.nextNode();)e++;return e},q=(t,e=-1)=>{for(let i=e+1;i<t.length;i++){const e=t[i];if(g(e))return i}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const W=(t,e)=>`${t}--${e}`;let B=!0;void 0===window.ShadyCSS?B=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),B=!1);const U=t=>e=>{const i=W(e.type,t);let n=D.get(i);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},D.set(i,n));let o=n.stringsArray.get(e.strings);if(void 0!==o)return o;const s=e.strings.join(d);if(void 0===(o=n.keyString.get(s))){const i=e.getTemplateElement();B&&window.ShadyCSS.prepareTemplateDom(i,t),o=new u(e,i),n.keyString.set(s,o)}return n.stringsArray.set(e.strings,o),o},V=["html","svg"],H=new Set,F=(t,e,i)=>{H.add(t);const n=i?i.element:document.createElement("template"),o=e.querySelectorAll("style"),{length:s}=o;if(0===s)return void window.ShadyCSS.prepareTemplateStyles(n,t);const a=document.createElement("style");for(let t=0;t<s;t++){const e=o[t];e.parentNode.removeChild(e),a.textContent+=e.textContent}(t=>{V.forEach(e=>{const i=D.get(W(e,t));void 0!==i&&i.keyString.forEach(t=>{const{element:{content:e}}=t,i=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{i.add(t)}),L(t,i)})})})(t);const r=n.content;i?function(t,e,i=null){const{element:{content:n},parts:o}=t;if(null==i)return void n.appendChild(e);const s=document.createTreeWalker(n,R,null,!1);let a=q(o),r=0,l=-1;for(;s.nextNode();){for(l++,s.currentNode===i&&(r=O(e),i.parentNode.insertBefore(e,i));-1!==a&&o[a].index===l;){if(r>0){for(;-1!==a;)o[a].index+=r,a=q(o,a);return}a=q(o,a)}}}(i,a,r.firstChild):r.insertBefore(a,r.firstChild),window.ShadyCSS.prepareTemplateStyles(n,t);const l=r.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)e.insertBefore(l.cloneNode(!0),e.firstChild);else if(i){r.insertBefore(a,r.firstChild);const t=new Set;t.add(a),L(i,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const Y={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},J=(t,e)=>e!==t&&(e==e||t==t),K={attribute:!0,type:String,converter:Y,reflect:!1,hasChanged:J},X=Promise.resolve(!0),Q=1,G=4,Z=8,tt=16,et=32,it="finalized";class nt extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=X,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,i)=>{const n=this._attributeNameForProperty(i,e);void 0!==n&&(this._attributeToPropertyMap.set(n,i),t.push(n))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=K){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const i="symbol"==typeof t?Symbol():`__${t}`;Object.defineProperty(this.prototype,t,{get(){return this[i]},set(e){const n=this[t];this[i]=e,this._requestUpdate(t,n)},configurable:!0,enumerable:!0})}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty(it)||t.finalize(),this[it]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const i of e)this.createProperty(i,t[i])}}static _attributeNameForProperty(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,i=J){return i(t,e)}static _propertyValueFromAttribute(t,e){const i=e.type,n=e.converter||Y,o="function"==typeof n?n:n.fromAttribute;return o?o(t,i):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const i=e.type,n=e.converter;return(n&&n.toAttribute||Y.toAttribute)(t,i)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|et,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,i){e!==i&&this._attributeToProperty(t,i)}_propertyToAttribute(t,e,i=K){const n=this.constructor,o=n._attributeNameForProperty(t,i);if(void 0!==o){const t=n._propertyValueToAttribute(e,i);if(void 0===t)return;this._updateState=this._updateState|Z,null==t?this.removeAttribute(o):this.setAttribute(o,t),this._updateState=this._updateState&~Z}}_attributeToProperty(t,e){if(this._updateState&Z)return;const i=this.constructor,n=i._attributeToPropertyMap.get(t);if(void 0!==n){const t=i._classProperties.get(n)||K;this._updateState=this._updateState|tt,this[n]=i._propertyValueFromAttribute(e,t),this._updateState=this._updateState&~tt}}_requestUpdate(t,e){let i=!0;if(void 0!==t){const n=this.constructor,o=n._classProperties.get(t)||K;n._valueHasChanged(this[t],e,o.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==o.reflect||this._updateState&tt||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,o))):i=!1}!this._hasRequestedUpdate&&i&&this._enqueueUpdate()}requestUpdate(t,e){return this._requestUpdate(t,e),this.updateComplete}async _enqueueUpdate(){let t,e;this._updateState=this._updateState|G;const i=this._updatePromise;this._updatePromise=new Promise((i,n)=>{t=i,e=n});try{await i}catch(t){}this._hasConnected||await new Promise(t=>this._hasConnectedResolver=t);try{const t=this.performUpdate();null!=t&&await t}catch(t){e(t)}t(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&et}get _hasRequestedUpdate(){return this._updateState&G}get hasUpdated(){return this._updateState&Q}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{(t=this.shouldUpdate(e))&&this.update(e)}catch(e){throw t=!1,e}finally{this._markUpdated()}t&&(this._updateState&Q||(this._updateState=this._updateState|Q,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~G}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0)}updated(t){}firstUpdated(t){}}nt[it]=!0;const ot="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,st=Symbol();class at{constructor(t,e){if(e!==st)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(ot?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const rt=(t,...e)=>{const i=e.reduce((e,i,n)=>e+(t=>{if(t instanceof at)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+t[n+1],t[0]);return new at(i,st)};i.d(e,"a",(function(){return dt})),i.d(e,"c",(function(){return A})),i.d(e,"b",(function(){return rt})),
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.2.1");const lt=t=>t.flat?t.flat(1/0):function t(e,i=[]){for(let n=0,o=e.length;n<o;n++){const o=e[n];Array.isArray(o)?t(o,i):i.push(o)}return i}(t);class dt extends nt{static finalize(){super.finalize.call(this),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const t=this.styles,e=[];if(Array.isArray(t)){lt(t).reduceRight((t,e)=>(t.add(e),t),new Set).forEach(t=>e.unshift(t))}else t&&e.push(t);return e}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?ot?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){super.update(t);const e=this.render();e instanceof w&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){}}dt.finalized=!0,dt.render=(t,e,i)=>{if(!i||"object"!=typeof i||!i.scopeName)throw new Error("The `scopeName` option is required.");const n=i.scopeName,o=j.has(e),s=B&&11===e.nodeType&&!!e.host,r=s&&!H.has(n),l=r?document.createDocumentFragment():e;if(((t,e,i)=>{let n=j.get(e);void 0===n&&(a(e,e.firstChild),j.set(e,n=new $(Object.assign({templateFactory:T},i))),n.appendInto(e)),n.setValue(t),n.commit()})(t,l,Object.assign({templateFactory:U(n)},i)),r){const t=j.get(l);j.delete(l);const i=t.value instanceof x?t.value.template:void 0;F(n,l,i),a(e,e.firstChild),e.appendChild(l),j.set(e,t)}!o&&s&&window.ShadyCSS.styleElement(e.host)}},function(t,e,i){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var i=function(t,e){var i=t[1]||"",n=t[3];if(!n)return i;if(e&&"function"==typeof btoa){var o=(a=n,r=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),"/*# ".concat(l," */")),s=n.sources.map((function(t){return"/*# sourceURL=".concat(n.sourceRoot).concat(t," */")}));return[i].concat(s).concat([o]).join("\n")}var a,r,l;return[i].join("\n")}(e,t);return e[2]?"@media ".concat(e[2],"{").concat(i,"}"):i})).join("")},e.i=function(t,i){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},o=0;o<this.length;o++){var s=this[o][0];null!=s&&(n[s]=!0)}for(var a=0;a<t.length;a++){var r=t[a];null!=r[0]&&n[r[0]]||(i&&!r[2]?r[2]=i:i&&(r[2]="(".concat(r[2],") and (").concat(i,")")),e.push(r))}},e}},function(t,e,i){"use strict";var n,o={},s=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},a=function(){var t={};return function(e){if(void 0===t[e]){var i=document.querySelector(e);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(t){i=null}t[e]=i}return t[e]}}();function r(t,e){for(var i=[],n={},o=0;o<t.length;o++){var s=t[o],a=e.base?s[0]+e.base:s[0],r={css:s[1],media:s[2],sourceMap:s[3]};n[a]?n[a].parts.push(r):i.push(n[a]={id:a,parts:[r]})}return i}function l(t,e){for(var i=0;i<t.length;i++){var n=t[i],s=o[n.id],a=0;if(s){for(s.refs++;a<s.parts.length;a++)s.parts[a](n.parts[a]);for(;a<n.parts.length;a++)s.parts.push(f(n.parts[a],e))}else{for(var r=[];a<n.parts.length;a++)r.push(f(n.parts[a],e));o[n.id]={id:n.id,refs:1,parts:r}}}}function d(t){var e=document.createElement("style");if(void 0===t.attributes.nonce){var n=i.nc;n&&(t.attributes.nonce=n)}if(Object.keys(t.attributes).forEach((function(i){e.setAttribute(i,t.attributes[i])})),"function"==typeof t.insert)t.insert(e);else{var o=a(t.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}return e}var c,h=(c=[],function(t,e){return c[t]=e,c.filter(Boolean).join("\n")});function p(t,e,i,n){var o=i?"":n.css;if(t.styleSheet)t.styleSheet.cssText=h(e,o);else{var s=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(s,a[e]):t.appendChild(s)}}function u(t,e,i){var n=i.css,o=i.media,s=i.sourceMap;if(o&&t.setAttribute("media",o),s&&btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var m=null,g=0;function f(t,e){var i,n,o;if(e.singleton){var s=g++;i=m||(m=d(e)),n=p.bind(null,i,s,!1),o=p.bind(null,i,s,!0)}else i=d(e),n=u.bind(null,i,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(i)};return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).attributes="object"==typeof e.attributes?e.attributes:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=s());var i=r(t,e);return l(i,e),function(t){for(var n=[],s=0;s<i.length;s++){var a=i[s],d=o[a.id];d&&(d.refs--,n.push(d))}t&&l(r(t,e),e);for(var c=0;c<n.length;c++){var h=n[c];if(0===h.refs){for(var p=0;p<h.parts.length;p++)h.parts[p]();delete o[h.id]}}}}},function(t,e,i){"use strict";var n=i(0);class o extends n.a{static get is(){return"navigation-menu"}static get properties(){return{data:{type:Object},selected:{type:String,attribute:"selected"},clicked:{type:Boolean},maxViewportWidth:{type:Number},navbarListItem:{type:Array},isMobile:{type:Boolean}}}constructor(){super(),this.data=null,this.selected="",this.clicked=!1,this.maxViewportWidth=768,this.navbarListItem=[]}async firstUpdated(){const t=await this.fetchData("assets/json/home/navigation-menu.json");this.data=t,this.getSelected(),this.navbarListItem=this.shadowRoot.querySelectorAll(".navbar-list__item"),this.isMobile=this.isMobileSize(),this.iconDropDown=this.shadowRoot.querySelectorAll(".icon-how__we")[0],this.dropdownContent=this.shadowRoot.getElementById("dropdown-content")}getSelected(){this.shadowRoot.querySelectorAll("li").forEach((function(t){var e=t.getElementsByTagName("a")[0];t.id===this.selected&&e&&e.classList.add("selected")}),this)}async fetchData(t){const e=await fetch(t);return await e.json()}isMobileSize(){return screen.width<=this.maxViewportWidth}showDropDownContent(){this.isMobile?this.showContentMobile():this.showContentDesktop()}showContentMobile(){this.clicked?(this.clicked=!1,this.removeHiddenClass()):(this.clicked=!0,this.navbarListItem.forEach((function(t){t.classList.add("hidden")})))}showContentDesktop(){this.clicked?(this.clicked=!1,this.dropdownContent.classList.remove("dropdown"),this.removeHiddenClass()):(this.clicked=!0,this.iconDropDown&&this.iconDropDown.classList.add("icon-dropdown__rotate"),this.navbarListItem.forEach((function(t){t.classList.add("dropdown")})),this.dropdownContent.classList.add("dropdown"))}hideDropDownContent(){this.isMobile&&(this.clicked=!1,this.removeHiddenClass())}removeHiddenClass(){this.navbarListItem.forEach((function(t){t.classList.remove("hidden")})),this.iconDropDown&&this.iconDropDown.classList.remove("icon-dropdown__rotate")}static get styles(){return[n.b`
        :host {
          display: block;
        }

        .navbar-container {
          width: 100%;
          height: 60px;
          background-color: rgba(77, 77, 78, 0.8);
          z-index: 10;
          position: fixed;
          display: flex;
          align-items: center;
        }

        .is-hidden {
          display: none;
        }

        .navbar {
          width: 80vw;
          height: 100vh;
          cursor: hand;
          position: fixed;
          top: 0%;
          right: -120%;
          background-color: rgb(14, 53, 64);
          transition: all 0.75s ease;
          z-index: 9;
        }

        .navbar-logo {
          display: inline-block;
        }

        .navbar-menu {
          width: 20px;
          height: 14px;
          position: absolute;
          top: 18pt;
          right: 15pt;
          background: url(../assets/images/menu_xs.svg) no-repeat center;
          background-size: 100%;
          cursor: pointer;
          transition: all 0.3s;
          z-index: 10;
        }

        .navbar-input {
          display: none;
        }

        .navbar-input:checked ~ .navbar-menu {
          transform: rotate(90deg);
          background-image: url(../assets/images/menu_close_xs.svg);
        }

        .navbar-input:checked ~ .navbar {
          right: 0;
        }

        .navbar-input:checked ~ .navbar-logo .logo-kairos {
          display: none;
        }

        .navbar-input:checked ~ .navbar-logo .logo-kairos-sm {
          margin-left: 60%;
          top: 0px;
          opacity: 1;
          transition: top 0s linear 0s, opacity 0.3s ease 0.1s;
        }

        .logo-kairos {
          width: 150px;
          padding-left: 30px;
        }

        .logo-kairos-sm {
          width: 35px;
          top: -2000px;
          opacity: 0;
          transition: opacity 0.3s ease 0s, top 0s linear 0.9s;
        }

        .navbar-list {
          flex-direction: column;
          justify-content: space-evenly;
          display: flex;
          width: 70%;
          height: 50vh;
          align-items: flex-start;
          padding: 0;
        }

        ul {
          list-style: none;
        }

        ul li a {
          text-decoration: none;
        }

        ul li a.selected {
          color: #f5a623;
        }

        .navbar-item__blog {
          color: white;
        }

        .language-container {
          position: relative;
        }

        .container-languages {
          display: flex;
          flex-direction: row;
          padding: 0;
          color: white;
          position: fixed;
          bottom: 5%;
        }

        ul li {
          margin-right: 10px;
        }

        a:visited {
          color: white;
        }

        a:active {
          color: #f5a623;
        }

        a:link {
          color: white;
        }

        .icon-how__we {
          width: 12px;
          padding-right: 8px;
          transform: rotate(90deg);
        }

        .dropbtn {
          color: white;
        }

        .dropdown-content {
          display: none;
          padding-left: 50px;
        }

        .dropdown-container {
          padding-left: 50px;
          display: flex;
        }

        .dropdown-container img {
          padding: 0;
        }

        .dropdown-container span {
          padding-right: 5px;
        }

        .hidden {
          display: none;
        }

        .show {
          display: block;
        }

        .dropdown-container__mobile {
          display: flex;
          flex-direction: row-reverse;
          justify-content: flex-end;
        }

        .dropdown-container__mobile img {
          transform: rotate(270deg);
          padding: 0;
        }

        .dropdown-container__mobile span {
          padding-left: 5px;
        }

        .dropdown-container__mobile .dropdown-content li {
          display: none;
        }

        .dropdown-space__line {
          line-height: 55px;
        }

        .separation-line {
          width: 100vw;
        }

        .navbar-list__item {
          padding-left: 50px;
        }

        .navbar-logo__link {
          text-decoration: none;
        }

        .navbar-logo {
          padding-left: 1%;
        }

        /* DESKTOP STYLES  */

        @media all and (min-width: 768px) {
          .navbar {
            width: 70%;
            height: 100%;
            background-color: transparent;
            position: static;
            transition: none;
            z-index: 9;
          }

          .navbar-list {
            height: 100%;
            margin: 0;
            padding: 0;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
          }

          .navbar-logo {
            width: 30%;
            display: flex;
            justify-content: center;
          }

          .navbar-list li {
            padding: 0;
          }

          .navbar-menu {
            display: none;
          }

          .container-languages {
            position: static;
          }

          .dropdown {
            padding: 0;
          }

          .dropdown-content li {
            height: 61px;
            background-color: rgba(77, 77, 78, 0.8);
            display: flex;
            align-items: center;
            padding-left: 15px;
          }

          .dropdown-content {
            padding: 0;
            position: absolute;
            display: flex;
            flex-direction: column;
            padding-top: 17px;
            width: 185px;
            margin-left: -18px;
            display: none;
          }

          .icon-how__we {
            width: 12px;
            padding-right: 8px;
            margin-bottom: 2px;
            transform: rotate(180deg);
          }

          .dropdown-content li a {
            color: white;
          }

          .dropdown-content li a:hover {
            color: #f5a623;
          }

          .dropdown-container {
            padding-left: 0;
            display: flex;
            align-items: center;
          }

          .language-container {
            width: 20%;
            display: flex;
            justify-content: center;
            margin: 0;
          }

          .logo-kairos {
            width: 180px;
            padding-left: 0;
          }

          .logo-kairos-sm {
            display: none;
          }

          .dropbtn {
            color: white;
          }

          .dropdown {
            display: block;
          }

          .icon-dropdown__rotate {
            transform: rotate(0deg);
          }

          .location__link:focus {
            outline: none;
            border-bottom: 2px solid orange;
          }
        }

        @media all and (min-width: 1024px) {
          .navbar-logo {
            padding-left: 3%;
          }
        }

        @media all and (min-width: 1280px) {
          .navbar-logo {
            justify-content: left;
            padding-left: 6.3%;
          }
        }

        @media all and (min-width: 1500px) {
          .logo-kairos {
            width: 160px;
          }
          .navbar-logo {
            padding-left: 4%;
            padding-right: 4%;
          }
        }

        @media all and (min-width: 1920px) {
          .navbar-logo {
            padding-left: 5%;
            padding-right: 4.1%;
          }
        }
      `]}render(){return n.c`
      <div class="navbar-container">
        <input type="checkbox" class="navbar-input" id="toggleMenu" />
        <label
          tabindex="0"
          class="navbar-menu  location__link"
          for="toggleMenu"
          @click="${this.hideDropDownContent}"
        >
          <a
            href="#"
            class="navbar-menu__open"
            title="enlace a menú desplegable"
            aria-expanded="false"
          ></a>
        </label>
        <div id="home" class="navbar-logo">
          <a class="navbar-logo__link location__link" href="index.html">
            <img
              class="logo-kairos"
              src="assets/images/logo-k.png"
              alt="kairos logo"
            />
            <img
              class="logo-kairos-sm"
              src="assets/images/kairos_logosm.svg"
              alt="kairos logo small"
            />
          </a>
        </div>
        <nav role="navigation" class="navbar">
          <ul class="navbar-list">
            <!-- <li id="we" class="navbar-list__item">
              <a class="location__link" href="">${this.data&&this.data.we}</a>
            </li>
            <li
              class="${this.clicked&&this.isMobile?"dropdown-space__line dropdown":"dropdown"}"
            >
              <div
                class="${this.clicked&&this.isMobile?"dropdown-container__mobile dropdown-container":"dropdown-container"}"
                @click="${this.showDropDownContent}"
                @keypress="${this.showDropDownContent}"
              >
                <span href="#" tabindex="0" class="dropbtn location__link">
                  ${this.data&&this.data.howWeDo}
                </span>
                <img
                  class="icon-how__we"
                  src="assets/images/flecha.svg"
                  alt="icon to bottom"
                />
              </div>
              <hr
                class="${this.clicked&&this.isMobile?"show separation-line":"hidden separation-line"}"
              />
              <ul
                id="dropdown-content"
                class="${this.clicked&&this.isMobile?"show dropdown-content":"hidden dropdown-content"}"
              >
                <li>
                  <a class="location__link dropdown-content__item" href="#">
                    ${this.data&&this.data.agileTransformation}
                  </a>
                </li>
                <li>
                  <a class="location__link dropdown-content__item" href="#">
                    ${this.data&&this.data.softwareDevelopment}
                  </a>
                </li>
                <li>
                  <a class="location__link dropdown-content__item" href="#">
                    ${this.data&&this.data.ux}
                  </a>
                </li>
                <li>
                  <a class="location__link dropdown-content__item" href="#">
                    ${this.data&&this.data.devops}
                  </a>
                </li>
              </ul>
            </li>
            <li id="innovation" class="navbar-list__item">
              <a class="location__link" href="">
                ${this.data&&this.data.innovation}
              </a>
            </li> -->
            <li id="joinUp" class="navbar-list__item">
              <a class="location__link" href="../join-up.html">
                ${this.data&&this.data.joinUp}
              </a>
            </li>
            <li id="contact" class="navbar-list__item">
              <a class="location__link" href="../contact.html">
                ${this.data&&this.data.contact}
              </a>
            </li>
            <li id="agile" class="navbar-list__item">
              <a
                class="location__link"
                href="https://leadthechange.es/"
                target="_blank"
              >
                ${this.data&&this.data.agile}
              </a>
            </li>
            <li id="ventures" class="navbar-list__item">
              <a
                class="location__link"
                href="http://ventures.kairosds.com"
                target="_blank"
              >
                ${this.data&&this.data.ventures}
              </a>
            </li>
            <!-- <li class="language-container navbar-list__item">
              <ul class="container-languages">
                <li class="language-item">
                  ${this.data&&this.data.es}
                </li>
                <li class="anguage-item">
                  ${this.data&&this.data.en}
                </li>
              </ul>
            </li> -->
          </ul>
        </nav>
      </div>
    `}}customElements.define(o.is,o)},function(t,e,i){"use strict";var n=i(0);class o extends n.a{static get is(){return"footer-component"}static get properties(){return{data:{type:Object},year:Number}}constructor(){super(),this.data=null,this.year=(new Date).getFullYear()}async firstUpdated(){const t=await this.fetchData("assets/json/home/footer-component.json");this.data=t}async fetchData(t){const e=await fetch(t);return await e.json()}static get styles(){return[n.b`
        :host {
          display: block;
        }

        .footer-container {
          width: 100%;
          min-height: 210px;
          background-color: #575756;
          cursor: hand;
        }

        .footer-top,
        .footer-bottom {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          padding: 20px 10px;
          justify-content: space-around;
        }
        
        .footer-bottom {
          height: 56px;
          padding: 0 15px;
          justify-content: center;
          border-top: 1px solid rgb(211, 211, 211, 0.1);
        }

        .footer-list {
          display: flex;
          justify-content: space-evenly;
          margin: 0;
          padding: 20px 20px 0 20px;
        }

        ul {
          list-style: none;
          margin-right: 114px;
        }

        ul li a {
          text-decoration: none;
        }

        ul li {
          margin-right: 10px;
        }

        .kairos-logo img {
          width: 165px;
          padding: 20px;
        }
        .item-blog {
          display: flex;
        }

        .footer-list img {
          width: 30px;
        }

        .footer-awards img {
          width: 84px;
        }

        .footer-copyright,
        .footer-copyright a {
          font-size: 11px;
          color: #d3d3d3;
        }

        .footer-text {
          color: #fff;
          margin: 8px 10px auto 0;
        }

        .footer-awards {
          display: flex;
          border-left: 1px solid rgba(211, 211, 211, 0.1);
          border-right: 1px solid rgba(211, 211, 211, 0.1);
          height: 80px;
          margin: 0px;
          padding-left: 40px;
        }

        .footer-awards li {
          width: 200px;
          margin-right: 0px;
        }

        .footer-awards li span {
          display: block;
          color: #999;
          font-size: 9px;
          letter-spacing: 1px;
          margin-bottom: 5px;
        }

        .footer-awards li img {
          padding-right: 10px;
        }

        @media all and (max-width: 1093px) {
          .footer-awards {
            border-right: 1px solid rgba(211, 211, 211, 0);
          }
        }

        @media all and (max-width: 400px) {
          .footer-list img {
            width: 20px;
          }
          .footer-text {
            font-size: 12px;
            margin: 2px 10px 0 0;
          }
          .footer-awards {
            height: 150px;
          }
          .footer-awards li {
            margin: 0px;
            width: 125px;
          }
        }

        @media all and (max-width: 681px) {
          .footer-awards {
            border-left: 1px solid rgba(211, 211, 211, 0);
          }
        }

        @media all and (min-width: 768px) {
          .footer-bottom {
            height: 97px;
          }
          .footer-item {
            margin-right: 24px;
          }
          .footer-copyright,
          .footer-copyright a {
            font-size: 14px;
          }
        }
      `]}render(){return n.c`
      ${this.data?n.c`
            <div class="footer-container">
              <div class="footer-top">
                <a class="kairos-logo" href="${this.data.kairosds.link}">
                  <img
                    src="${this.data.kairosds.src}"
                    alt="${this.data.kairosds.alt}"
                  />
                </a>
                <ul class="footer-awards">
                  <li>
                    <span>Reconocimientos</span>
                    <a href="${this.data.awardEtsit.link}" target="_blank">
                      <img src="${this.data.awardEtsit.src}" alt="${this.data.awardEtsit.alt}" />
                    </a>
                    <a href="${this.data.awardLaRazon.link}" target="_blank">
                      <img src="${this.data.awardLaRazon.src}" alt="${this.data.awardLaRazon.alt}" />
                    </a>
                  </li>
                  <li>
                    <span>Partners</span>
                    <a href="${this.data.partnertDasa1.link}" target="_blank">
                      <img src="${this.data.partnertDasa1.src}" alt="${this.data.partnertDasa1.alt}" />
                    </a>
                    <a href="${this.data.partnertDasa2.link}" target="_blank">
                      <img src="${this.data.partnertDasa2.src}" alt="${this.data.partnertDasa2.alt}" />
                    </a>     
                  </li>
                </ul>
                <ul class="footer-list">
                  <li class="footer-item item-blog">
                    <p class="footer-text">BLOG</p>
                    <a
                      class="footer-link blog-link"
                      href="${this.data.blog.link}"
                      target="_blank"
                     
                    >
                      <img
                        src="${this.data.blog.src}"
                        alt="${this.data.blog.alt}"
                      />
                    </a>
                  </li>
                  <li class="footer-item">
                    <a
                      class="footer-link"
                      href="${this.data.facebook.link}"
                      target="_blank"
                     
                    >
                      <img
                        src="${this.data.facebook.src}"
                        alt="${this.data.facebook.alt}"
                      />
                    </a>
                  </li>
                  <li class="footer-item">
                    <a
                      class="footer-link"
                      href="${this.data.youtube.link}"
                      target="_blank"
                     
                    >
                      <img
                        src="${this.data.youtube.src}"
                        alt="${this.data.youtube.alt}"
                      />
                    </a>
                  </li>
                  <li class="footer-item">
                    <a
                      class="footer-link"
                      href="${this.data.linkedin.link}"
                      target="_blank"
                     
                    >
                      <img
                        src="${this.data.linkedin.src}"
                        alt="${this.data.linkedin.alt}"
                      />
                    </a>
                  </li>
                  <li class="footer-item">
                    <a
                      class="footer-link"
                      href="${this.data.twitter.link}"
                      target="_blank"
                     
                    >
                      <img
                        src="${this.data.twitter.src}"
                        alt="${this.data.twitter.alt}"
                      />
                    </a>
                  </li>
                  <li class="footer-item">
                    <a
                      class="footer-link"
                      href="${this.data.instagram.link}"
                      target="_blank"
                     
                    >
                      <img
                        src="${this.data.instagram.src}"
                        alt="${this.data.instagram.alt}"
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <div class="footer-bottom">
                <p class="footer-copyright">
                  Copyright Kairos Digital Solutions ${this.year} -
                  <a href="../cookies.html">Política de cookies</a> -
                  <a href="../legal.html">Aviso legal</a>
                </p>
              </div>
            </div>
          `:null}
    `}}customElements.define(o.is,o)},function(t,e,i){(e=t.exports=i(1)(!1)).i(i(6),""),e.i(i(7),""),e.i(i(8),""),e.i(i(9),""),e.i(i(10),""),e.push([t.i,"/* The project's structure follows the 7-1 convention: */\n/* https://itnext.io/structuring-your-sass-projects-c8d41fa55ed4 */",""])},function(t,e,i){(e=t.exports=i(1)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css?family=Titillium+Web&display=swap);",""]),e.push([t.i,"@import url(https://fonts.googleapis.com/css?family=Quicksand&display=swap);",""]),e.push([t.i,'html,\nbody {\n  font-family: "Titillium Web", sans-serif;\n}\n\nh2 {\n  font-family: "Quicksand", sans-serif;\n}\n\n',""])},function(t,e,i){(t.exports=i(1)(!1)).push([t.i,"/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15;\n  /* 1 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers.\n */\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n  /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10.\n */\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  line-height: 1.15;\n  /* 1 */\n  margin: 0;\n  /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type=button],\n[type=reset],\n[type=submit] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=button]::-moz-focus-inner,\n[type=reset]::-moz-focus-inner,\n[type=submit]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=button]:-moz-focusring,\n[type=reset]:-moz-focusring,\n[type=submit]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n[type=checkbox],\n[type=radio] {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=number]::-webkit-inner-spin-button,\n[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=search] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n/**\n * Add the correct display in IE 10+.\n */\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n[hidden] {\n  display: none;\n}\n",""])},function(t,e,i){(t.exports=i(1)(!1)).push([t.i,"\n",""])},function(t,e,i){(t.exports=i(1)(!1)).push([t.i,".responsive {\n  height: auto;\n  width: 100%;\n  padding-bottom: 56px;\n}\n.responsive.w25 {\n  width: 25%;\n}\n.responsive.w50 {\n  width: 50%;\n}\n.responsive.w75 {\n  width: 75%;\n}\n\n.placeholder {\n  border: 2px dashed black;\n}\n\n",""])},function(t,e,i){(t.exports=i(1)(!1)).push([t.i,".text-center {\n  text-align: center;\n}\n\n.text-left {\n  text-align: left;\n}\n\n.text-right {\n  text-align: right;\n}\n\n.text-justify {\n  text-align: justify;\n}\n\n",""])},function(t,e,i){"use strict";var n=i(0);const o="cookies_notice_close",s="cookies_notice_accepted";class a extends n.a{static get styles(){return[n.b`
        .cookies {
          box-sizing: border-box;
          display: flex;
          flex-direction:column;
          padding:0 15px;
          background-color:#0E3540;
          color:#ffffff;
          position: fixed;
          bottom: 0;
          width: 100%;
          z-index: 2;
        }

        .cookies-content {
            margin-top: 54px;
        }  

        .cookies-text {
            font-size: 13px;
            font-family:"Titillium Web", sans-serif;
            font-weight: 400;
            line-height: 20px;
            margin: 0;
            padding-bottom: 10px;
        }

        .cookies-btn {
            background-color:#ffffff;
            border: 0;
            color:#0E3540;
            text-transform:uppercase;
            min-height:35px;
            border-radius:5px;
            font-weight:600;
            font-size:14px;
            margin: 20px 0;
            text-decoration: none
        }

        .cookies-link {
            color:#FF7900;
            text-decoration: underline;
            font-size: 13px;
            font-weight: 600;
        }

        .cookies-close {
            position: absolute;
            top: 20px;
            right: 13px;
        }

        .cookies-close:after {
          content:url('assets/images/ico_close_w.svg');
        } 

        @media all and (min-width: 768px) {
          .cookies {
            display:flex;
            flex-direction: row;
            height: 156px;
            justify-content: space-around;
            line-height: 0;
            align-items: center;
            padding: 15px;
          }

          .cookies-text {
            font-size: 16px;
            line-height: 20px;
            padding: 0;
          }

          .cookies-content {
            margin: 0 12px 0 0;
            text-align: left;
          }

          .cookies-link {
            font-size: 16px;
          }
          
          .cookies-btn {
            padding-top: 2px 0;
            margin: 0;
            height: 50px;
          }
        }

        @media all and (min-width: 1200px) {
            .cookies {
              display:flex;
              flex-direction: row;
              height: 106px;
              justify-content: center;
              line-height: 0;
              width: 100%;
            }

            .cookies-text {
              font-size: 18px;
              padding-top: 0;
              margin: 8px 0;
            }

            .cookies-content {
              margin-top: 0px;
              max-width: 100%;
            }
            
            .cookies-btn {
              cursor: pointer;
              margin: 35px 56px 35px 100px;
              padding-top: 2px 0;
              width: 195px;
            }
            .cookies-close {
              align-self:center;
              cursor: pointer;
              position: relative;
              top: 0;
              right: 0;
            }
          }
      `]}static get properties(){return{button:{type:String,attribute:"button-text"},data:{type:Object},sectionName:{type:String,attribute:"section-name"},showPopup:{type:Boolean,default:!0}}}static get is(){return"cookies-notice"}constructor(){super(),this.data=null;const t=sessionStorage.getItem(o),e=-1!==document.cookie.indexOf(s);this.showPopup=t?!t:!e}async firstUpdated(){const t=await this.fetchData("assets/json/home/cookies.json");this.data=t}async fetchData(t){const e=await fetch(t);return await e.json()}createCookie(){let t=new Date;t.setMonth(t.getMonth()+12);let e=window.location.hostname;document.cookie=`${s}=true; expires=${t}; domain=${e}; path=/`}handleSetCookie(){this.createCookie(),this.showPopup=!1}handleCloseCookie(){sessionStorage.setItem(o,"true"),this.showPopup=!1}render(){return n.c`
      ${this.showPopup?n.c`
          <div class="cookies">  
            <div class="cookies-content">
              <p class="cookies-text">${this.data&&this.data.firstParagraph}</p>
              <p class="cookies-text">
                ${this.data&&this.data.secondParagraph}
                <a href="../cookies.html" class="cookies-link">${this.data&&this.data.policy}</a>
              </p>
            </div>

            <button aria-label="Accept cookies" name="button" class="cookies-btn" @click="${this.handleSetCookie}">${this.data&&this.data.button}</button>
            <span class="cookies-close" @click="${this.handleCloseCookie}"></span> 
          </div>    
        `:null}
    `}}customElements.define(a.is,a)},function(t,e,i){"use strict";const n=[0,0];window.addEventListener("scroll",()=>{let t=document.querySelector("navigation-menu"),e=window.innerWidth;o()&&e<=768?t.style.display="block":e<=768?t.style.display="none":e>768&&(t.style.position="static")});const o=()=>{const t=n[0];return n[1]=window.pageYOffset,n[0]=n[1],t>n[1]||!(t<n[1])&&void 0}},,function(t,e,i){"use strict";var n=i(0);class o extends n.a{static get is(){return"media-slideshow"}static get styles(){return n.b`
      :host {
        display: block;
        line-height: 0;
        --primary-color: #ff8300;
        --secondary-color: #b8b8b8;
        --text-color: #f2f2f2;
        --border-bottom-color: transparent;
        --height: auto;
      }

      /* Slideshow container */
      .slideshow-container {
        position: relative;
        border-bottom: 4px solid var(--border-bottom-color);
      }

      /* Hide the images/videos by default */
      .slide {
        display: none;
        height: var(--height);
      }

      .image {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .video {
        width: 100%;
        height: auto;
      }

      /* Caption text */
      .text {
        color: var(--text-color);
        font-size: 15px;
        padding: 8px 12px;
        position: absolute;
        bottom: 8px;
        width: 100%;
        text-align: center;
      }

      .dots:not([hidden]) {
        text-align: center;
        position: absolute;
        bottom: 0;
        width: 100%;
        margin: 1em;
      }

      /* The dots/bullets/indicators */
      .dot {
        cursor: pointer;
        height: 13px;
        width: 13px;
        margin: 0 2px;
        background-color: var(--secondary-color);
        border-color: transparent;
        border-radius: 50%;
        display: inline-block;
        transition: all 0.6s ease;
        border: 0;
        transform: scale(0.7);
      }

      .dot.active,
      .dot:hover {
        background-color: var(--primary-color);
        transform: scale(1);
      }

      .controls {
        position: absolute;
        width: 100%;
        display: flex;
        justify-content: space-between;
        top: 43%;
      }

      .prev,
      .next {
        font-size: 37px;
        border: none;
        background-color: transparent;
        color: #4d4d4e;
      }

      .prev:hover,
      .next:hover {
        color: var(--primary-color);
      }

      .d-none {
        display: none;
      }
      .d-block {
        display: block;
      }

      /* Fading animation */
      .fade {
        -webkit-animation-name: fade;
        -webkit-animation-duration: 1.5s;
        animation-name: fade;
        animation-duration: 1.5s;
      }

      @keyframes fade {
        from {
          opacity: 0.2;
        }
        to {
          opacity: 1;
        }
      }
    `}static get properties(){return{media:Object,step:Number,autorun:{type:Boolean,attribute:"autorun"},showControls:{type:Boolean,attribute:"show-controls"},hideDots:{type:Boolean,attribute:"hide-dots"},time:Number,mediaPath:{type:String,attribute:"media-path"},mediaId:{type:String,attribute:"media-id"}}}constructor(){super(),this.step=1,this.currentSlide=1,this.autorun=!1,this.showControls=!1,this.time=5e3,this.media=[],this.mediaId="",this.hideDots=!1,this.maxWidthMobile=768}async firstUpdated(){this.mediaPath&&this.mediaId?await this.fetchData(this.mediaPath,this.mediaId):console.error("need to provide a media-path to start")}async fetchData(t,e){try{const i=await fetch(t),n=await i.json();this.media=n[e]||[]}catch(t){console.error(`cannot fetch data from media data from [${this.mediaId}]`)}}start(){this.showSlide(this.currentSlide),this.autorun&&(this._intervalId=setInterval(this.goNext.bind(this),this.time))}updated(t){t.get("media")&&this.start()}stop(){this.autorun&&(clearInterval(this._intervalId),this.autorun=!1)}getUrl(t,e){return e?screen.width>this.maxWidthMobile?t:e:t}render(){return n.c`
      <div class="slideshow-container">
        <!-- Full-width images with number and caption text -->
        ${this.media.map(t=>n.c`
            <div class="slide fade">
              ${"image"===t.type?n.c`
                    <img
                      src="${this.getUrl(t.url,t.urlMobile)}"
                      class="image"
                      alt="${t.alt}"
                    />
                    ${t.text&&n.c`
                        <div class="text">${t.text}</div>
                      `}
                  `:n.c`
                    <video class="video" preload controls>
                      <source
                        src="${this.getUrl(t.url,t.urlMobile)}"
                        type="${t.codec||"video/mp4"}"
                      />
                      Your browser does not support the video tag.
                    </video>
                  `}
            </div>
          `)}
        <!-- The dots/circles -->
        <div class="dots" ?hidden="${this.autorun||this.hideDots}">
          ${this.media.map((t,e)=>n.c`
                <button
                  aria-label="Name"
                  name="images hero"
                  class="dot"
                  @click="${t=>this.showSlide(e+1)}"
                ></button>
              `)}
        </div>

        <!-- Next and previous buttons -->
        ${this.showControls?n.c`
              <div class="controls">
                <button name="back button" class="prev" @click="${this.goBack}">
                  &#10094;
                </button>
                <button name="next button" class="next" @click="${this.goNext}">
                  &#10095;
                </button>
              </div>
            `:n.c``}
      </div>
    `}goBack(){this.showSlide(this.currentSlide-this.step)}goNext(){this.showSlide(this.currentSlide+this.step)}_hideSlides(t){if(t&&t.length)for(let e=0;e<t.length;e++)t[e].classList.add("d-none"),t[e].classList.remove("d-block")}_unselectDots(t){if(t&&t.length){for(let e=0;e<t.length;e++)t[e].classList.remove("active");t[this.currentSlide-1].classList.add("active")}}showSlide(t){const e=this.shadowRoot.querySelectorAll(".slide"),i=this.shadowRoot.querySelectorAll(".dot");t>e.length?this.currentSlide=1:this.currentSlide=t<1?e.length:t,this._hideSlides(e);const n=e[this.currentSlide-1];n&&n.classList.toggle("d-block"),this._unselectDots(i);const o=i[this.currentSlide-1];o&&o.classList.add("active")}}customElements.define(o.is,o)},function(t,e,i){"use strict";var n=i(0);class o extends n.a{static get is(){return"collapsible-item"}static get properties(){return{item:{type:Object},open:{type:Boolean,reflect:!0},noBorder:{type:Boolean},id:{type:String},darktheme:{type:Boolean}}}constructor(){super(),this.item=null,this.open=!1,this.noBorder=!1,this.id="",this.darktheme=!1}static get styles(){return n.b`
      :host {
        display: block;
      }
      button {
        outline: none;
        cursor: pointer;
      }
      .list__item {
        border-top: 1px solid #d3d3d3;
      }
      .list__item--no-border {
        border-top: 0;
      }
      .list__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.5em 0;
      }
      .list__title {
        text-transform: uppercase;
        font-weight: bold;
        font-size: 20px;
        color: var(--title-color);
      }
      .list__toggle {
        border: transparent;
        background-color: transparent;
        width: 30px;
        height: 30px;
        margin: 1em;
        color: var(--primary-color);
        background-color: transparent;
        background-image: url("assets/images/ico_close.svg");
        background-position: 3px center;
        transition: background 0.5s ease-in-out;
      }

      .list__toggle--dark {
        border: transparent;
        width: 30px;
        height: 30px;
        margin: 1em;
        color: var(--primary-color);
        background-color: transparent;
        background-image: url("assets/images/ico_close_w.svg");
        background-position: 3px center;
        transition: background 0.5s ease-in-out;
      }
      .list__toggle.list__toggle--plus {
        background-image: url("assets/images/ico_plus.svg");
      }
      .list__toggle--dark.list__toggle--plus--dark {
        background-image: url("assets/images/ico_plus_w.svg");
      }
      .list__body[hidden] {
        display: none;
      }
      .list__body {
        display: block;
      }
      .list__subtitle {
        color: var(--subtitle-color);
        font-weight: 600;
      }
      .list__description {
        text-align: left;
        font-size: 18px;
        line-height: 29px;
        width: var(--list-description);
        color: var(--description-color);
      }

      @media all and (min-width: 1024px) {
        .list__toggle:focus {
          outline: none;
          border-bottom: 2px solid orange;
        }
      }
    `}render(){return n.c`
      <div
        class="${this.noBorder?"list__item list__item--no-border":"list__item"}"
      >
        <div class="list__header">
          <h2 class="list__title">${this.item.title}</h2>
          <button
            aria-label="Name"
            name="collipsable list button"
            class="${this.open?`list__toggle${this.darktheme?"--dark":""}`:`list__toggle${this.darktheme?"--dark":""} list__toggle--plus${this.darktheme?"--dark":""}`}"
            @click="${this.toggleItem}"
          ></button>
        </div>
        <div class="list__body" ?hidden="${!this.open}">
          <h3 class="list__subtitle">${this.item.subtitle}</h3>

          ${this.item.description.map((t,e)=>n.c`
              <p class="list__description list__description--${e}">
                ${t}
              </p>
            `)}
        </div>
      </div>
    `}toggleItem(t){this.open=!this.open,this.dispatchOpen({id:this.id,open:this.open})}dispatchOpen(t){const e=new CustomEvent("item:open",{detail:t,bubbles:!0,composed:!0});this.dispatchEvent(e)}}class s extends n.a{static get is(){return"collapsible-list"}static get properties(){return{items:{type:Array},open:{type:Number,reflect:!0},darktheme:{type:Boolean}}}static get styles(){return n.b`
      :host {
        display: block;
        --primary-color: #ff8300;
        --description-color: #999999;
        --title-color: #4d4d4e;
        --subtitle-color: #4d4d4e;
        --list-description: 100%;
      }
      .list {
        padding: 0;
        list-style: none;
        border-top: 1px solid #d3d3d3;
        border-bottom: 1px solid #d3d3d3;
      }
      /* DESKTOP STYLES  */
      @media all and (min-width: 1440px) {
        .list {
          margin: 5.5em 0;
        }
      }
    `}constructor(){super(),this.items=[],this.open=0,this.darktheme=!1}render(){return n.c`
      <ul class="list">
        ${this.items.map((t,e)=>n.c`
            <li>
              <collapsible-item ?darktheme=${this.darktheme} .item=${t} ?open=${this.open===e} ?noborder=${0===e} id="item-${e}">
            </li>
          `)}
      </ul>
    `}attributeChangedCallback(t,e,i){super.attributeChangedCallback(t,e,i),"open"===t&&this._handleOpenItem({detail:{id:`item-${i}`,open:!0}},!1)}connectedCallback(){super.connectedCallback(),this.addEventListener("item:open",this._handleOpenItem.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("item:open",this._handleOpenItem)}_handleOpenItem(t,e=!0){const{id:i,open:n}=t.detail;if(this.shadowRoot.getElementById(i)&&n){const t=i.split("item-")[1];Array.from(this.shadowRoot.querySelectorAll("[open]")).filter(t=>t.id!==i).map(t=>t.open=!1),e&&(this.open=t)}}async firstUpdated(){const t=await this.fetchData("assets/json/home/collapsible-list.json");this.items=t[this.id]}async fetchData(t){try{const e=await fetch(t);return await e.json()}catch(e){console.error(`Could not fetch data for collapsible-list in ${t}`)}}}customElements.define(o.is,o),customElements.define(s.is,s)},function(t,e,i){"use strict";var n=i(0);class o extends n.a{static get styles(){return[n.b`
        :host {
          --image-url: url("../assets/images/prefooter/prefooter_espana.png");
          --background-image-size: cover;
          --font-color: #fff;
          --font-size: 16px;
          --info-box-color: rgba(14, 53, 64, 0.75);
          --font-list-size: 40px;
        }
        
        .wrapper {
          background-image: var(--image-url);
          background-size: var(--background-image-size);
          color: var(--font-color);
          font-size: var(--font-size);
          line-height: 29px;
          display: flex;
          justify-content: space-between;
          justify-items: stretch;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .country-list__item {
          width: 33.33%;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }
        
        .country-list__title {
          background-color: var(--info-box-color);
          height: 75px;
          padding-top: 20px;
          box-sizing: border-box;
          cursor: pointer;
          text-transform: uppercase;
          font-size: var(--font-list-size);
          text-align: center;
        }

        .country-list__title:focus {
          outline: none;
        }

        .country-info {
          box-sizing: border-box;
          text-align: left;
          padding: 16px 0 16px 16px;
          margin: 0;
          background-color: var(--info-box-color);
          flex-grow:1;
          min-height: 250px;
        }

        .country-info__title {
          color: rgb(255, 131, 0);
          font-size: 14px;
          line-height: 21px;
          font-weight: 600;
          letter-spacing: 5px;
          text-transform: uppercase;
          margin: 0px 0px 20px;
        }

        .location__link {
          text-decoration: none;
          display:block;
          color: var(--font-color);
          cursor: pointer;
        }

        .location__link span {
          display: none;
        }

        .location__address {
          padding-left: 28px;
          position: relative;
        }

        .address__icon {
          position: absolute;
          top: 5px;
          left: 2px;
        }

        .address__element {
          margin: 0;
        }

       .country-info__mail {
          margin-bottom: 0;
          width: 155px;
        }
        
        .default-info {
          display: none;
        }

        li:first-child .default-info {
          display: block;
        }

        .locations__active {
          display: block;
        }
        
        .location__inactive {
          display: none;
        }

        .default_hidden {
          display: none;
        }

        li:first-child .default_hidden {
          display: block;
        }

        .title_display {
          margin: 0;
          opacity: 50%;
        }

        .default_title {
          opacity:50%;
        }

        li:first-child .default_title {
          opacity: 100%;
        }

        .noDisplay {
          display: none;
        }

        .opacityDisplay {
          opacity: 100%;
        }

        @media all and (min-width: 768px) {
          .wrapper {
            background-position-x: 50%;
          }
        }

        @media all and (min-width: 1024px) {
          .location__link:focus {
            outline: none;
            border-bottom: 2px solid orange;
          }

          .country-list__title:focus {
            border-bottom: 2px solid orange;
          }
        }
        @media all and (min-width: 1280px) {
          .wrapper {
            background-position-x: 0;
          }

          .country-info {
            padding-left: 5%;
          }

          .location__address {
            padding-left: 38px;
          }

          .address__icon {
            left: 7px;
          }
        }

        @media all and (min-width: 1920px) {
          .country-info {
            padding-left: 8%;
          }
        }
      `]}static get properties(){return{data:{type:Object},clickedElement:{type:Number}}}static get is(){return"prefooter-desktop"}constructor(){super(),this.data=[],this.clickedElement=0}async fetchData(t){const e=await fetch(t);return await e.json()}async firstUpdated(){const t=await this.fetchData("assets/json/home/prefooter-desktop.json");this.data=t}handleClick(t){const e=t.currentTarget.id;this.clickedElement=e.slice(-1),this.shadowRoot.querySelector(".wrapper").style.backgroundImage="url("+this.data.countries[this.clickedElement].url+")",this.removeTitleDefault(),this.removeInfoDefault(),this.changeInfoPosition(),this.changeTitlePosition()}removeTitleDefault(){this.shadowRoot.querySelectorAll(".default_title").forEach(t=>this.removeClass(t,"default_title"))}removeInfoDefault(){this.shadowRoot.querySelectorAll(".default-info").forEach(t=>this.removeClass(t,"default-info"))}changeInfoPosition(){const t=this.shadowRoot.querySelectorAll(".country-info");t.forEach(t=>t.classList.add("noDisplay")),this.removeClass(t[this.clickedElement],"noDisplay")}changeTitlePosition(){const t=this.shadowRoot.querySelectorAll(".title_display");t.forEach(t=>t.classList.remove("opacityDisplay")),t[this.clickedElement].classList.add("opacityDisplay")}removeClass(t,e){t.classList.contains(e)&&t.classList.remove(e)}render(){return 0===this.data.length?n.c``:n.c`
        <ul class="wrapper">
          ${this.data.countries.map((t,e)=>n.c`
              <li class="country-list__item" id="country-list__item--${e}">
                <aside class= "country-info default-info">
                  <h3 class="country-info__title">¿Dónde estamos?</h3>
                  <div>
                    ${t.address.map(t=>n.c`
                        <a
                          class="location__link"
                          href=${t[0]}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span>Abre en una ventana a parte</span>

                          <div class="location__address">
                            <image
                              class="address__icon"
                              src="../assets/images/prefooter/prefooter_ubicacion.svg"
                              alt="ubication icon"
                              title="Icono de ubicación"
                            />

                            <p class="address__element">
                              ${t[1]}
                            </p>

                            <p class="address__element">
                              ${t[2]}
                            </p>
                          </div>
                        </a>
                      `)}
                  </div>
                  <p class="country-info__mail">
                    ${t.mail}
                    ${t.phone}
                  </p>
                </aside>
                <div class="country-list__title"  id="country-list__title--${e}"  @click="${this.handleClick}" @keypress="${this.handleClick}" tabindex="0"> 
                  <p class="default_title title_display">${t.item}</p>
                </div>
              </li>
            `)}
        </ul>
    `}}customElements.define(o.is,o)},function(t,e,i){"use strict";var n=i(0);class o extends n.a{static get styles(){return[n.b`
        :host {
          display: block;
          margin: var(--section-margin, 4.5em 0 1.5em 0);
          --title-color: #ff8300;
          --text-color: #999999;
          --subtitle-color: #4d4d4e;
        }

        :host(.dondeEstamos) {
          --title-color: rgba(255, 255, 255, 0.9);
          --text-color: rgba(255, 255, 255, 0.9);
          --subtitle-color: #ff8300;
          --section-header-text: justify;
        }

        .section-header__title {
          font-family: "Quicksand", sans-serif;
          font-weight: bold;
          color: var(--title-color);
          font-size: 36px;
          line-height: 52px;
          margin: 0 0 20px 0;
          text-transform: uppercase;
        }
        .section-header__subtitle {
          color: var(--subtitle-color);
          font-family: "Titillium Web";
          font-size: 14px;
          line-height: 21px;
          font-weight: 600;
          letter-spacing: 5px;
          margin: 0 0 20px 0;
          text-transform: uppercase;
        }
        .section-header__text {
          color: var(--text-color);
          text-align: var(--section-header-text, inherit);
          font-family: "Titillium Web";
          font-size: 18px;
          line-height: 29px;
          margin: 0 0 18px 0px;
        }
        .section-header__buttonLink {
          display: inline-block;
          margin-bottom: 20px;
          text-decoration: none;
          color: #ffffff;
          font-family: "Titillium Web";
          font-size: 16px;
          font-weight: 600;
          line-height: 24px;
          padding: 5px 10px;
          text-align: center;
          border-radius: 5px;
          background-color: #0e3540;
          text-transform: uppercase;
          min-width: 99px;
        }

        .section-header__picture {
          display: block;
          width: 100px;
          margin: 0px 0px 20px 0px;
          float: none;
        }

        /* ESTILOS PARA MÓVIL  */

        @media (max-width: 768px) {
          :host {
            margin: 2em 0;
          }
          .section-header__title {
            font-size: 32px;
            line-height: 42px;
          }
          .section-header__title,
          .section-header__subtitle,
          .section-header__text {
            text-align: center;
            margin: auto;
          }
          .section-header__buttonLink {
            display: block;
            width: 50%;
            margin: auto;
          }
          .section-header__picture {
            margin: 20px auto;
          }
        }
        @media all and (min-width: 1024px) {
          .section-header__buttonLink:focus {
            outline: none;
            border-bottom: 2px solid orange;
          }
        }
      `]}static get properties(){return{title:String,subtitle:String,description:String,link:String,alignment:String,urlImage:{type:String,attribute:"url-image"},data:Object,buttonText:{type:String,attribute:"button-text"},sectionName:{type:String,attribute:"section-name"}}}static get is(){return"section-header"}constructor(){super(),this.data=null}async firstUpdated(){const t=await this.fetchData("assets/json/home/section-header.json");this.data=t[this.sectionName]}async fetchData(t){const e=await fetch(t);return await e.json()}_computeAlignment(t){let e="text-align: center;";switch(t){case"left":e="text-align: left;";break;case"right":e="text-align: right;";break;default:e="text-align: center;"}return e}render(){return this.data?n.c`
      <div style="${this._computeAlignment(this.alignment)}">
        <h2 class="section-header__subtitle">
          ${this.data.subtitulo}
        </h2>
        <h1 class="section-header__title">
          ${this.data.titulo}
        </h1>
        ${this.data.descripcion&&n.c`
            <p class="section-header__text">
              ${this.data&&this.data.descripcion}
            </p>
          `}
        ${this.urlImage&&n.c`
            <img
              class="section-header__picture"
              src="${this.urlImage}"
              align="left"
              alt="image title headers"
            />
          `}
        ${this.buttonText&&n.c`
            <a
              href="../contact.html"
              target="_blank"
              class="section-header__buttonLink"
              role="button"
              >${this.data.enlace}</a
            >
          `}
     
      </div>
    `:n.c``}}customElements.define(o.is,o)},,function(t,e,i){var n=i(20);"string"==typeof n&&(n=[[t.i,n,""]]);var o={insert:"head",singleton:!1};i(2)(n,o);n.locals&&(t.exports=n.locals)},function(t,e,i){(e=t.exports=i(1)(!1)).i(i(5),""),e.i(i(21),""),e.push([t.i,"\n",""])},function(t,e,i){(t.exports=i(1)(!1)).push([t.i,'html {\n  --lazy-image-width: 100%;\n  --lazy-image-height: 20vh;\n  --lazy-image-fit: contain;\n  --lazy-image-fade-duration: 0.5s;\n  --lazy-image-fade-easing: ease-in-out;\n}\n  @media all and (min-width: 1280px) {html {\n    --lazy-image-height: 40vh\n}\n  }\n\nlazy-image {\n  width: var(--lazy-image-width);\n  height: var(--lazy-image-height);\n  -o-object-fit: var(--lazy-image-fit);\n     object-fit: var(--lazy-image-fit);\n  -webkit-transition-duration: var(--lazy-image-fade-duration);\n          transition-duration: var(--lazy-image-fade-duration);\n  -webkit-transition-timing-function: var(--lazy-image-fade-easing);\n          transition-timing-function: var(--lazy-image-fade-easing);\n}\n\n.dummy {\n  text-align: center;\n  height: 300px;\n  border: 2px dashed black;\n}\n\n.hero {\n  --border-bottom-color: #ff8300;\n  --height: 60vh;\n}\n\n.porque-trabajamos {\n  margin: 2em 0;\n  --height: 260px;\n}\n\n\n.carousel-trabajamos {\n  margin: 0 auto 2em;\n}\n\n.container-navbar {\n  padding: 0;\n}\n\n.grey-stripe {\n  background-color: #f0f0f0;\n}\n\n.container-section {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n}\n\n.container-capacities {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  overflow: hidden;\n}\n@media all and (min-width: 1024px) {\n  .container-capacities {\n    padding-bottom: 73px;\n  }\n  .container-capacities capacity-component:nth-child(even) {\n    -webkit-transform: translateX(126px);\n            transform: translateX(126px);\n  }\n  .container-capacities capacity-component:nth-child(odd) {\n    -webkit-transform: translateX(-126px);\n            transform: translateX(-126px);\n  }\n}\n\n#imgHowWeDo {\n  height: 100%;\n}\n@media all and (min-width: 768px) {\n  #imgHowWeDo {\n    width: 518px;\n    height: auto;\n  }\n}\n\n@media all and (min-width: 768px) {\n  #imgValue {\n    width: 703px;\n    height: auto;\n    margin-bottom: 38px;\n  }\n\n  #quienesSomos {\n    width: 100%;\n  }\n}\n\n\n\n.container-valor {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.container-we-talk {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.container-where {\n  position: relative;\n}\n.container-where__img {\n  background-size: contain;\n  background-repeat: no-repeat;\n  width: 100%;\n  background-image: url("/assets/images/donde_estamos_completa_xs.svg");\n  padding-top: 290.67%;\n  /* 1090px/375px = 2.9067 */\n  /* MOBILE STYLES  */\n  /* DESKTOP STYLES  */\n}\n\n@media all and (min-width: 768px) {\n  .container-where__img {\n    background-image: url("/assets/images/mapa-mundi-confondo.svg");\n    padding-top: 90.67%;\n  }\n}\n@media all and (min-width: 1200px) {\n  .container-where__img {\n    background-image: url("/assets/images/donde_estamos_completa.svg");\n    padding-top: 86.11%;\n    /* 1240px/1440px = 0.8611 */\n  }\n}\n\n.container-where__section-header {\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n/* DESKTOP STYLES  */\n\n@media all and (min-width: 768px) {\n  .container-where__section-header {\n    padding: 0 25px;\n  }\n}\n@media all and (min-width: 768px) {\n  .porque-trabajamos {\n    --height: 425px;\n  }\n}\n@media all and (min-width: 1200px) {\n  .container-where__section-header {\n    padding: 0 60px 0 120px;\n  }\n}\n\n.flex-center {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n/* PREFOOTER MOBILE */\n.section-prefooter {\n  background-color: #0e3540;\n  opacity: 0.65;\n}\n\n.section-prefooter section-header {\n  --subtitle-color: #fff;\n}\n\n.collapsible-list__prefooter {\n  --title-color: #ffffff;\n  --description-color: #ffffff;\n  --list-description: 50%;\n  text-align: initial;\n}\n\n@media all and (min-width: 673px) {\n  .collapsible-list__prefooter {\n    --list-description: 27%;\n  }\n}\n',""])},,,,,,,,,,,,,,,,,,,,function(t,e,i){"use strict";i.r(e);i(19);var n=i(0);class o extends n.a{static get styles(){return[n.b`
        :host {
          --relation-mobile: 2;
          --square-color: #e4af43;
          --square-width: 262px;
          --square-height: 252px;
          --table-border-color: #e4af43;
          --table-item-bg: #fff;
          --ability-color: rgba(77, 77, 78, 0.9);
          --ability-square-color: rgba(77, 77, 78, 0.9);
          display: block;
        }
        :host(.reverse) {
          flex-direction: row-reverse;
        }
        :host(.user-experience) {
          --square-color: #086203;
          --table-border-color: #086203;
          --ability-square-color: rgba(255, 255, 255, 0.9);
        }
        :host(.devops) {
          --square-color: #b92e52;
          --table-border-color: #b92e52;
          --ability-square-color: rgba(255, 255, 255, 0.9);
        }
        .ability-wrapper {
          color: var(--ability-color);
          display: flex;
          height: 252px;
          margin-bottom: 10px;
        }
        .ability-wrapper--reverse {
          flex-direction: row-reverse;
        }
        .ability-wrapper--reverse .ability-wrapper__table {
          flex-direction: row-reverse;
        }
        :host(.software) {
          --square-color: #035762;
          --table-border-color: #035762;
          --ability-square-color: rgba(255, 255, 255, 0.9);
        }
        .ability-wrapper__square {
          color: var(--ability-square-color);
          background-color: var(--square-color);
          height: var(--square-height);
          width: var(--square-width);
        }
        .ability-wrapper__title {
          font-size: 27px;
          text-transform: uppercase;
          padding: 16px 16px 0 16px;
          margin: 0;
        }

        @media not all and (min-resolution: 0.001dpcm) {
          @supports (-webkit-appearance: none) {
            .safari-only {
              font-size: 1.6rem;
            }
          }
        }

        .ability-wrapper__description {
          font-size: 12px;
          padding: 0 14px 0 14px;
        }

        .ability-wrapper__table {
          display: flex;
          flex-wrap: wrap;
          width: 600px;
        }

        .table__item {
          border: 1px solid var(--table-border-color);
          text-align: center;
          background: var(--table-item-bg);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-evenly;
        }
        .table__item-description {
          padding: 0px 5px;
          text-transform: uppercase;
          font-size: 12px;
          line-height: 16px;
          margin: 0;
        }
        // DO NOT DELETE
        // .table__item__knowmore-description {
        //   color: #4d4d4e;
        //   text-transform: uppercase;
        //   font-size: 12px;
        //   font-weight: 600;
        //   line-height: 16px;
        //   margin: 0;
        // }

        img {
          width: 55%;
          height: auto;
        }
        a {
          color: #000;
          text-decoration: none;
        }
        /* MOBILE STYLES  */
        @media all and (max-width: 767px) {
          .table__item:not(:nth-last-of-type(-n + 1)),
          .table__item:not(:nth-last-of-type(-n + 1))
            + .table__item:not(:nth-last-of-type(-n + 1)) {
            border-right: none;
          }
        }

        /* DESKTOP STYLES  */
        @media all and (min-width: 768px) {
          .table__item:nth-child(odd):not(:last-child):not(.even-reverse) {
            border-bottom: none;
          }
          .table__item.even-reverse:nth-child(even):not(:first-child) {
            border-bottom: none;
          }
          .table__item:not(:nth-last-of-type(-n + 2)) {
            border-right: none;
          }
        }
      `]}_computeWrapperClass(){let t=this.shadowRoot.getElementById("capacities__container").classList,e=this.reverse?"ability-wrapper--reverse":"";e&&t.add(`${e}`)}_removeWrapperClass(){let t=this.shadowRoot.getElementById("capacities__container").classList;t.remove("ability-wrapper"),t.remove("ability-wrapper--reverse")}static get is(){return"capacity-component"}static get properties(){return{blockWidth:{type:Number,attribute:"block-width"},numIcons:{type:Number},numMaxIcons:{type:Number},bloqueCSS:{type:String},ability:String,data:Object,reverse:{type:Boolean,attribute:"reverse"}}}constructor(){super(),this.numIcons=0,this.numMaxIcons=11,this.bloqueCSS="",this.blockWidth=248,this.screenWidth=document.documentElement.clientWidth,this.hostWidth=0,this.numIconsToShow=0,this.data=null,this.reverse=!1}connectedCallback(){super.connectedCallback(),this.iconWidth=this.blockWidth/2,this.maxScreenWidth=3*this.blockWidth}async firstUpdated(){const t=await this.fetchData("assets/json/home/capacity-component.json");this.data=t[this.ability],window.addEventListener("resize",this.styleCalc.bind(this)),this.blockContent=`<div class="ability-wrapper__square">\n        <h2 class="ability-wrapper__title safari-only">\n        ${this.data&&this.data.title}\n        </h2>\n        <p class="ability-wrapper__description">\n        ${this.data&&this.data.description}\n        </p>\n    </div>`,this.numIcons=this.data.items.length,this.iconsContent=this.data.items.map(t=>`<img alt="${t.alt}" src="${t.icon}" /><p class="table__item-description">\n    ${t.description}\n  </p>`),this.styleCalc()}async fetchData(t){const e=await fetch(t);return await e.json()}drawIcons(t){let e,i="";const n=this.reverse&&this.numIconsToShow%2==0?"even-reverse":"";for(e=1;e<=t;e++)i+=`<div id="icon_${e}" class="block-icon__icon-internal table__item ${n}">${this.iconsContent[e-1]}</div>`;if(this.screenWidth>=this.maxScreenWidth){const t=`<div id="icon_extra" class="block-icon__icon-internal table__item table__item__knowmore ${n}">\n      <img class="${this.data.title}" alt="${this.data.title}" src="${this.getExtraIcon(this.data.title,2)}" />\n      <p class="table__item-description">${this.getExtraIcon(this.data.title,1)}</p>\n      </div>`;i=this.reverse?t+i:i+t}return`${i}`}getExtraIcon(t,e){return{"Devops & Architecture":()=>1===e?"CD (Continuous Deployment)":"../assets/images/iconos_capacidades/extra/svg/cd.svg","Lean Product Design":()=>1===e?"storytelling":"../assets/images/iconos_capacidades/extra/svg/map.svg","Software development":()=>1===e?"pensamiento sistemático":"../assets/images/iconos_capacidades/extra/svg/systemThinking.svg","Agile transformation":()=>1===e?"Propiedad colectiva":"../assets/images/iconos_capacidades/extra/svg/unity.svg"}[t]()}getNumIconsToDraw(t,e,i){let n=null;return this.hostWidth>=t&&this.hostWidth<e&&(n=this.numIcons<i?this.numIcons%2==0?this.numIcons:this.numIcons+1:i),i===this.numMaxIcons-2&&null===n&&(n=this.numIcons),n}showIconsByWidth(){let t=1;for(let e=1;e<this.numMaxIcons;e+=2){let i=this.blockWidth+this.iconWidth*t,n=i+this.iconWidth;if(this.numIconsToShow=this.getNumIconsToDraw(i,n,e),this.numIconsToShow)break;t++}}styleIcon(){let t="",e=1;for(let i=1;i<=Math.ceil(this.numMaxIcons/2);i++)for(let n=1;n<=2;n++)this.reverse&&1===i&&2===n&&this.numIconsToShow%2==0||(t+=`\n            .block-icon__icon-internal:nth-child(${e}) {\n              grid-row-start: ${n};\n              grid-row-end: ${n+1};\n              grid-column-start: ${i};\n              grid-column-end: ${i+1};\n            }\n          `,e++);return t}styleCalc(){this.hostWidth=this.shadowRoot.getElementById("capacities__container").clientWidth,this.screenWidth=document.documentElement.clientWidth,this.shadowRoot.getElementById("block").innerHTML=this.blockContent;let t=`\n        :host {\n          --block-size: ${this.blockWidth}px;\n        }\n        .block-icon__block-internal {\n          max-width: var(--block-size);\n          min-width: var(--block-size);  \n          height: var(--block-size);\n        }\n        .block-icon__icons-internal {\n          display: grid;\n        }\n        .block-icon__icon-internal {\n          margin:0 auto;\n          text-align:center;\n          vertical-align:middle;\n        }\n      `;this.screenWidth>=this.maxScreenWidth?(this._computeWrapperClass(),this.showIconsByWidth(),this.bloqueCSS=n.c`
        ${t} .block-icon__container-internal { display: flex; flex-flow:
        row; height: calc(var(--block-size)*1.02); margin: 0 auto;
        overflow:hidden; max-width: 1200px; } .block-icon__icon-internal {
        height: calc(var(--block-size)/2); width: calc(var(--block-size)/2); }
        ${this.styleIcon()}
      `,this.shadowRoot.getElementById("icons").innerHTML=this.drawIcons(this.numIconsToShow)):(this._removeWrapperClass(),this.bloqueCSS=n.c`
        ${t} .block-icon__container-internal { width:
        calc(var(--block-size)*1.1); height: calc(var(--block-size)*1.65);
        flex-flow: column; } .block-icon__icons-internal { grid-gap: 0;
        grid-template-columns: repeat(12,
        calc(var(--block-size)/var(--relation-mobile))); grid-template-rows:
        minmax(var(--block-size), 1fr); overflow-x: scroll; overflow-y: hidden;
        scroll-snap-type: x proximity; padding: 0; margin: 0; }
        .block-icon__icon-internal { width:
        calc(var(--block-size)/var(--relation-mobile));
        height:calc(var(--block-size)/var(--relation-mobile));margin:0; }
      `,this.shadowRoot.getElementById("icons").innerHTML=this.drawIcons(this.numIcons))}render(){return n.c`
      <style>
        ${this.bloqueCSS}
      </style>
      <div
        id="capacities__container"
        class="block-icon__container-internal ability-wrapper"
      >
        <div id="block" class="block-icon__block-internal"></div>
        <div id="icons" class="block-icon__icons-internal"></div>
      </div>
    `}}window.customElements.define(o.is,o);i(17),i(14);class s extends n.a{static get is(){return"media-carousel-clients"}static get styles(){return n.b`
      :host {
        display: block;
        --logo-width: 180px;
        --logo-height: 100%;
        --carousel-margin-right: 8px;
        --carousel-step: 5;
        --carousel-total-margin: 8px;
        --carousel-width: calc(
          var(--carousel-item-width) * var(--carousel-step) +
            var(--carousel-total-margin)
        );
      }

      .carousel-wrapper {
        padding: 0 1em 1em 1em;
        width: var(--carousel-width);
        overflow: hidden;
        padding-top: 0;
      }

      .carousel-wrapper-scroll {
        overflow-x: scroll;
      }

      .carousel {
        display: flex;
        list-style: none;
        padding: 0px;
        margin:0px 0px 25px 50px;
        transition: transform 0.6s ease-out;
      }

      .logo {
        margin-right: var(--carousel-margin-right);
        height: 78px;
      }

      .logo-img {
        width: var(--logo-width);
        height: var(--logo-height);
        object-fit: cover;
      }

      /* DESKTOP STYLES  */
      @media all and (min-width: 400px) {
        .carousel {
          margin: 0px opx 25px;
        }
      }

      @media all and (min-width: 768px) {
        :host {
          display: none;
        }
      }
    `}static get properties(){return{media:Object,slide:{type:Number,reflect:!0},step:Number,direction:{type:String,reflect:!0},mediaPath:{type:String,attribute:"media-path"},mediaId:{type:String,attribute:"media-id"},touched:Boolean,autorun:Boolean}}constructor(){super(),this.media=[],this.slide=1,this.step=2,this.mediaPath="",this.mediaId="",this.time=5e3,this.autorun=!0,this.touched=!1}async fetchData(t,e){try{const e=await fetch(t),i=await e.json();this.media=i.quienesConfian,this.media.splice(this.media.length-2)}catch(t){console.error(`cannot fetch data from media data from [${this.mediaId}]`)}}async firstUpdated(){this.mediaPath&&this.mediaId?(await this.fetchData(this.mediaPath,this.mediaId),this.start(),this.maxSlides=Math.ceil(this.media.length/this.step),this.carousel=this.shadowRoot.querySelector(".carousel"),this.marginRight=parseInt(getComputedStyle(this).getPropertyValue("--carousel-margin-right"))):console.error("need to provide a media-path and media-id to start")}start(){this.slideTo(),this.autorun&&(this._intervalId=setInterval(this.goNext.bind(this),this.time))}stop(){this.autorun&&(clearInterval(this._intervalId),this.autorun=!1)}goNext(){this.slide>=this.maxSlides?(this.slide=1,this.slideTo()):(this.slide++,this.slideTo())}goBack(){this.slide>1?(this.slide--,this.slideTo()):(this.slide=this.maxSlides,this.slideTo())}slideTo(){this.carousel&&(this.offsetX=(this.slide-1)*this.carousel.offsetWidth+(this.slide-1)*this.marginRight,this.carousel.style.transform=`translateX(-${this.offsetX}px)`)}clickHandler(){this.stop(),this.touched=!0}clickEnd(){this.autorun=!0,this.start(),this.slide=1}render(){return n.c`
      <div
        class="${this.touched?"carousel-wrapper-scroll":"carousel-wrapper"}"
        @touchstart=${this.clickHandler}
        @touchend=${this.clickEnd}
      >
        <ul class="carousel">
          ${this.media.map((t,e)=>n.c`
                <li class="logo">
                  <img 
                    class="logo-img" 
                    src="${t.url}" 
                    alt="${t.alt}"/>
                </li>
              `)}
        </ul>
      </div>
    `}}customElements.define(s.is,s);class a extends n.a{static get is(){return"media-carousel"}static get styles(){return n.b`
      :host {
        display: flex;
        align-items: center;
        justify-content: center;
        --carousel-item-width: 100px;
        --carousel-item-height: 100px;
      }

      button {
        outline: none;
        cursor: pointer;
      }

      .container {
        align-items: center;
        display: flex;
        justify-content: space-between;
        height: 130px;
        overflow-x: hidden;
      }
      .carousel-wrapper {
        position: relative;
        transition: left ease 0.8s;
      }
      .carousel {
        display: flex;
        list-style: none;
        padding: 0;
        margin: 0;
      }

      .carousel__item {
        padding: 0 10px;
      }

      .img {
        width: var(--carousel-item-width);
        height: var(--carousel-item-height);
        object-fit: cover;
      }

      .img:hover {
        cursor: pointer;
      }

      .img.active {
        border: 1px solid #ff7900;
        transform: scale(1.2);
      }

      .carousel__controls {
        display: flex;
        justify-content: space-between;
      }

      .prev,
      .next {
        border: 0;
        padding: 0;
        margin: 0;
        background-color: transparent;
        opacity: 1;
        filter: alpha(opacity=100);
      }

      .prev:hover,
      .next:hover {
        cursor: pointer;
      }

      .prev:disabled,
      .next:disabled {
        opacity: 0.5;
        filter: alpha(opacity= 50);
      }

      .prev img,
      .next img {
        width: 28px;
        height: 28px;
      }

      @media all and (min-width: 1024px) {
        .location__link:focus {
          outline: none;
          border-bottom: 2px solid orange;
        }
      }
    `}static get properties(){return{media:Object,mediaPath:{type:String,attribute:"media-path"},mediaId:{type:String,attribute:"media-id"},disabledBack:{type:Boolean,attribute:"disabled"},left:{type:Number},maxSlides:{type:Number}}}constructor(){super(),this.media=[],this.mediaPath="",this.mediaId="",this.disabledBack=!0,this.left=0}async fetchData(t,e){try{const i=await fetch(t),n=await i.json();this.media=n[e]||[]}catch(t){console.error(`cannot fetch data from media data from [${this.mediaId}]`)}}render(){return n.c`
      <button
        name="back button"
        class="prev"
        @keypress="${this.goBack}"
        @click="${this.goBack}"
        .disabled="${this.disabledBack}"
      >
        <img
          tabindex="1"
          class="location__link"
          src="assets/images/left_arrow.png"
          alt="go previous slide"
        />
      </button>
      <div class="container">
        <div class="carousel-wrapper" style="left:-${this.left}px">
          <ul class="carousel">
            ${this.media.map((t,e)=>n.c`
                  <li
                    class="carousel__item location__link"
                    @keypress="${t=>this.onClick(t,e+1)}"
                    @click="${t=>this.onClick(t,e+1)}"
                  >
                    <img
                      tabindex="0"
                      alt="${t.alt}"
                      class="img location__link"
                      src="${t.url}"
                    />
                  </li>
                `)}
          </ul>
        </div>
      </div>
      <button
        class="next location__link"
        name="next button"
        @click="${this.goNext}"
        .disabled="${this.disabledNext}"
      >
        <img
          tabindex="0"
          class="location__link"
          src="assets/images/right_arrow.png"
          alt="go to next slide"
        />
      </button>
    `}onClick(t,e){const i=this.shadowRoot.querySelector(".active");i&&i.classList.remove("active"),t.target.classList.add("active");const n=new CustomEvent("media-slideshow:show",{detail:{mediaSlideId:"porque-trabajamos",mediaSlideIndex:e},composed:!0,bubbles:!0});this.dispatchEvent(n)}async firstUpdated(){this.mediaPath&&this.mediaId?(await this.fetchData(this.mediaPath,this.mediaId),this.container=this.shadowRoot.querySelector(".container"),this.carousel=this.shadowRoot.querySelector(".carousel")):console.error("need to provide a media-path and media-id to start")}goNext(){this.itemsWidth=this.shadowRoot.querySelector(".carousel__item").offsetWidth,this.maxSlides=this.container.offsetWidth/this.itemsWidth*this.itemsWidth,this.left+this.container.offsetWidth>this.carousel.offsetWidth?(this.left=0,this.disabledBack=!0):(this.left+=this.maxSlides,this.disabledBack=!1)}goBack(){this.itemsWidth=this.shadowRoot.querySelector(".carousel__item").offsetWidth,this.maxSlides=this.container.offsetWidth/this.itemsWidth*this.itemsWidth,this.left<=0?this.left=0:this.left-=this.maxSlides,0===this.left&&(this.disabledBack=!0)}}customElements.define(a.is,a);class r extends n.a{static get is(){return"media-logos-carousel"}static get styles(){return n.b`
      :host {
        display: none;
        --logo-width: 100%;
        --logo-height: auto;
        --carousel-logos-wrapper-top: 0;
      }

      button {
        outline: none;
        cursor: pointer;
      }

      .container {
        height: 250px;
        overflow: hidden;
        width: 628px;
      }

      .carousel-logos-wrapper {
        position: relative;
        transition: top ease 0.8s;
        overflow: hidden;
      }

      .container-buttons {
        display: flex;
        flex-direction: column;
        height: 250px;
        justify-content: space-around;
        margin-left: 16px;
      }

      .up,
      .down {
        border: 0;
        padding: 0;
        margin: 0;
        background-color: transparent;
        display: inline-block;
        width: 40px;
        height: 40px;
        background-size: cover;
      }

      .arrow-up {
        background-image: url("assets/images/arrow_up.svg");
      }

      .arrow-up:hover {
        background-image: url("assets/images/arrow_up_hover.svg");
        cursor: pointer;
      }

      .arrow-up:disabled {
        background-image: url("assets/images/arrow_up_disabled.svg");
        cursor: pointer;
      }

      .arrow-down {
        background-image: url("assets/images/arrow_down.svg");
      }

      .arrow-down:hover {
        background-image: url("assets/images/arrow_down_hover.svg");
        cursor: pointer;
      }

      .arrow-down:disabled {
        background-image: url("assets/images/arrow_down_disabled.svg");
        cursor: pointer;
      }

      .carousel-logos {
        list-style: none;
        padding: 0;
        margin: 0;
        display: grid;
        grid-template-columns: repeat(4, auto);
      }

      .logo-img {
        width: var(--logo-width);
        height: var(--logo-height);
        object-fit: cover;
      }

      .pointer {
        cursor: pointer;
      }

      .logo {
        border: 1px solid #d3d3d3;
      }

      .border-top {
        border-top: none;
      }
      .border-right {
        border-right: none;
      }
      .border-left {
        border-left: none;
      }

      .container-dots {
        align-items: center;
        display: flex;
        flex-direction: column;
        height: 70px;
        justify-content: space-around;
      }

      .dot {
        background-color: #b8b8b8;
        border-radius: 50%;
        border: none;
        display: inline-block;
        padding: 0;
        margin: 0;
        height: 8px;
        width: 8px;
      }

      .dot:hover,
      .selected {
        background-color: #ff7c00;
        cursor: pointer;
        outline: none;
        height: 12px;
        width: 12px;
      }
      /* DESKTOP STYLES  */

      @media all and (min-width: 768px) {
        :host {
          display: flex;
          margin: 24px 90px 74px 90px;
        }
      }

      @media all and (min-width: 1280px) {
        .container {
          height: 400px;
          width: 100%;
        }
        .container-buttons {
          height: 400px;
        }
        .up:focus,
        .down:focus,
        .dot:focus {
          outline-style: solid;
          outline-color: orange;
        }
      }
      @media all and (min-width: 1440px) {
        .container {
          height: 460px;
          width: 100%;
        }
        .container-buttons {
          height: 460px;
        }
      }
    `}static get properties(){return{media:Object,mediaPath:{type:String,attribute:"media-path"},mediaId:{type:String,attribute:"media-id"},disabledDown:{type:Boolean,attribute:"disabledDown"},disabledUp:{type:Boolean,attribute:"disabledUp"},top:{type:Number},selected:{type:Number}}}constructor(){super(),this.media=[],this.mediaPath="",this.mediaId="",this.top=0,this.disabledDown=!1,this.disabledUp=!0,this.selected=1,this.totalDots=0}async fetchData(t,e){try{const i=await fetch(t),n=await i.json();this.media=n[e]||[];const o=await this.media.length,s=o?o%4:0;s&&this.media.splice(-s,s)}catch(t){console.error(`cannot fetch data from media data from [${this.mediaId}]`)}}render(){return n.c`
      <div class="container">
        <div class="carousel-logos-wrapper" style="top:${this.top}px">
          <ul class="carousel-logos" id="logosID">
              ${this.media.map((t,e)=>n.c`
                <li 
                  class="logo ${e<4?"border-top":""} ${(e+1)%4==0?"border-right":""} ${e%4==0?"border-left":""}"
                >
                  ${t.href?n.c`
                        <a href="${t.href}" tabindex="-1">
                          <img
                            class="logo-img pointer"
                            src="${t.url}"
                            alt="${t.alt}"
                          />
                        </a>
                    `:n.c`
                      <img class="logo-img" src="${t.url}" alt="${t.alt}" />
                    `}
                  </li>
                  `)}
          </ul>
        </div>
      </div>
      <div class="container-buttons">
        <button
          class="up arrow-up"
          @click="${this.goUp}"
          .disabled="${this.disabledUp}"
        ></button>
        <div class="container-dots">
          <button id="1" class="dot selected"></button>
          <button id="2" class="dot"></button>
          <button id="3" class="dot"></button>
          <button id="4" class="dot"></button>
        </div>
        <button
          class="down arrow-down"
          @click="${this.goDown}"
          .disabled="${this.disabledDown}"
        ></button>
      </div>
    `}async firstUpdated(){this.carousel=this.shadowRoot.querySelector(".carousel-logos"),this.container=this.shadowRoot.querySelector(".container"),this.wrapper=this.shadowRoot.querySelector(".carousel-logos-wrapper"),this.mediaPath&&this.mediaId?(await this.fetchData(this.mediaPath,this.mediaId),this.top=parseInt(getComputedStyle(this).getPropertyValue("--carousel-logos-wrapper-top"))):console.error("need to provide a media-path and media-id to start")}updated(){let t=this.shadowRoot.querySelector(".container-dots");const e=this.shadowRoot.querySelectorAll(".dot");this.totalDots=e.length,t.addEventListener("click",t=>{if(e&&e.length){this.selected<this.totalDots?this.selected=this.selected+1:this.selected=this.selected-1,""===t.target.id&&(t.target.id="1");for(let i=0;i<this.totalDots;i++)i===parseInt(t.target.id)-1?e[i].classList.add("selected"):e[i].classList.remove("selected");1===parseInt(t.target.id)?(this.disabledUp=!0,this.disabledDown=!1):parseInt(t.target.id)===this.totalDots?(this.disabledUp=!1,this.disabledDown=!0):(this.disabledUp=!1,this.disabledDown=!1)}this._setLogosRowByDotPressed(t.target.id)})}_setLogosRowByDotPressed(t){this.logo=this.shadowRoot.querySelector(".logo").offsetHeight,this.top=-1*this.logo*(parseInt(t)-1),this.selected=parseInt(t)}_selectedDot(t){if(t&&t.length)for(let e=0;e<t.length;e++)e===this.selected-1?t[e].classList.add("selected"):t[e].classList.remove("selected")}_disabledArrows(){1===this.selected?(this.disabledUp=!0,this.disabledDown=!1):this.selected===this.totalDots?(this.disabledUp=!1,this.disabledDown=!0):(this.disabledUp=!1,this.disabledDown=!1)}goUp(){this.carouselHeight=this.carousel.offsetHeight,this.containerHeight=this.container.offsetHeight,this.logo=this.shadowRoot.querySelector(".logo").offsetHeight;const t=this.shadowRoot.querySelectorAll(".dot");this.top<0?(this.top+=this.logo,this.selected=this.selected-1):(this.top=0,this.selected=1),this._disabledArrows(),this._selectedDot(t)}goDown(){this.carouselHeight=this.carousel.offsetHeight,this.containerHeight=this.container.offsetHeight,this.logo=this.shadowRoot.querySelector(".logo").offsetHeight;const t=this.shadowRoot.querySelectorAll(".dot");-1*this.top<this.containerHeight?(this.top-=this.logo,this.selected=this.selected+1):(this.top=0,this.selected=1),this._disabledArrows(),this._selectedDot(t)}}customElements.define(r.is,r);i(3);class l extends n.a{static get is(){return"media-data-manager"}connectedCallback(){super.connectedCallback(),this.addEventListener("media-slideshow:show",this._handleMediaCarousel)}disconnectedCallback(){super.connectedCallback(),this.removeEventListener(this._handleMediaCarousel)}_handleMediaCarousel(t){const{mediaSlideId:e,mediaSlideIndex:i}=t.detail,n=this.shadowRoot.querySelector("slot"),o=(n&&n.assignedElements()).filter(t=>t.id===e)[0];o?o.showSlide(i):console.error(`Could not find a media-slide children with id [${e}]`)}render(){return n.c`
      <slot></slot>
    `}}customElements.define(l.is,l);i(15),i(16),i(4),i(11),i(12);console.info("Ya puedes cerrar la consola :), estamos contratando:\n    \nhttps://www.kairosds.com/contacto/\n\n     MMMMMMMMMMmmmo+++/yhdMMMM\n     MMMMMMNhyo+++++ohh++/odNM\n     MMNNmy++++/++++smNmo+++oN\n     My++++++ohhNNy++++++++smM\n     m/+oo+++ymMMMMmdsoy++++yM\n     m++NNmo+sNMMMMMMMMMh++++m\n     m++mmh++sNMMMMMMMmms++++m\n     m/+o++++syyNMMmdo++/+++ym\n     Ny+s++++++/oss++++yhy+++o\n     MMNMmo+++hddddddmNNhs++om\n     MMMMh+++ohhNNNNmhh++/odNM\n     MMMMMNmyo/++++++++yhmMMMM\n"),window.onload=function(){let t=document.getElementById("imgHowWeDo"),e=document.getElementById("imgValue");t.src="./assets/images/g_capacidades.svg",screen.width>=768?e.src="./assets/images/grafico_valores.svg":e.src="./assets/images/valores_xs.svg"}}]);