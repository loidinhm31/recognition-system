(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();var Jn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function k0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function T0(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var s=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,s.get?s:{enumerable:!0,get:function(){return e[r]}})}),n}var _p={exports:{}},al={},$p={exports:{}},Ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ma=Symbol.for("react.element"),E0=Symbol.for("react.portal"),x0=Symbol.for("react.fragment"),_0=Symbol.for("react.strict_mode"),$0=Symbol.for("react.profiler"),I0=Symbol.for("react.provider"),A0=Symbol.for("react.context"),O0=Symbol.for("react.forward_ref"),C0=Symbol.for("react.suspense"),D0=Symbol.for("react.memo"),F0=Symbol.for("react.lazy"),Af=Symbol.iterator;function P0(e){return e===null||typeof e!="object"?null:(e=Af&&e[Af]||e["@@iterator"],typeof e=="function"?e:null)}var Ip={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ap=Object.assign,Op={};function Gi(e,t,n){this.props=e,this.context=t,this.refs=Op,this.updater=n||Ip}Gi.prototype.isReactComponent={};Gi.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Gi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Cp(){}Cp.prototype=Gi.prototype;function r2(e,t,n){this.props=e,this.context=t,this.refs=Op,this.updater=n||Ip}var s2=r2.prototype=new Cp;s2.constructor=r2;Ap(s2,Gi.prototype);s2.isPureReactComponent=!0;var Of=Array.isArray,Dp=Object.prototype.hasOwnProperty,i2={current:null},Fp={key:!0,ref:!0,__self:!0,__source:!0};function Pp(e,t,n){var r,s={},i=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)Dp.call(t,r)&&!Fp.hasOwnProperty(r)&&(s[r]=t[r]);var a=arguments.length-2;if(a===1)s.children=n;else if(1<a){for(var u=Array(a),l=0;l<a;l++)u[l]=arguments[l+2];s.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)s[r]===void 0&&(s[r]=a[r]);return{$$typeof:ma,type:e,key:i,ref:o,props:s,_owner:i2.current}}function R0(e,t){return{$$typeof:ma,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function o2(e){return typeof e=="object"&&e!==null&&e.$$typeof===ma}function L0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Cf=/\/+/g;function Vl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?L0(""+e.key):t.toString(36)}function uu(e,t,n,r,s){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case ma:case E0:o=!0}}if(o)return o=e,s=s(o),e=r===""?"."+Vl(o,0):r,Of(s)?(n="",e!=null&&(n=e.replace(Cf,"$&/")+"/"),uu(s,t,n,"",function(l){return l})):s!=null&&(o2(s)&&(s=R0(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(Cf,"$&/")+"/")+e)),t.push(s)),1;if(o=0,r=r===""?".":r+":",Of(e))for(var a=0;a<e.length;a++){i=e[a];var u=r+Vl(i,a);o+=uu(i,t,n,u,s)}else if(u=P0(e),typeof u=="function")for(e=u.call(e),a=0;!(i=e.next()).done;)i=i.value,u=r+Vl(i,a++),o+=uu(i,t,n,u,s);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Ba(e,t,n){if(e==null)return e;var r=[],s=0;return uu(e,r,"","",function(i){return t.call(n,i,s++)}),r}function z0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var zt={current:null},lu={transition:null},M0={ReactCurrentDispatcher:zt,ReactCurrentBatchConfig:lu,ReactCurrentOwner:i2};function Rp(){throw Error("act(...) is not supported in production builds of React.")}Ee.Children={map:Ba,forEach:function(e,t,n){Ba(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ba(e,function(){t++}),t},toArray:function(e){return Ba(e,function(t){return t})||[]},only:function(e){if(!o2(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Ee.Component=Gi;Ee.Fragment=x0;Ee.Profiler=$0;Ee.PureComponent=r2;Ee.StrictMode=_0;Ee.Suspense=C0;Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=M0;Ee.act=Rp;Ee.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ap({},e.props),s=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=i2.current),t.key!==void 0&&(s=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)Dp.call(t,u)&&!Fp.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&a!==void 0?a[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var l=0;l<u;l++)a[l]=arguments[l+2];r.children=a}return{$$typeof:ma,type:e.type,key:s,ref:i,props:r,_owner:o}};Ee.createContext=function(e){return e={$$typeof:A0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:I0,_context:e},e.Consumer=e};Ee.createElement=Pp;Ee.createFactory=function(e){var t=Pp.bind(null,e);return t.type=e,t};Ee.createRef=function(){return{current:null}};Ee.forwardRef=function(e){return{$$typeof:O0,render:e}};Ee.isValidElement=o2;Ee.lazy=function(e){return{$$typeof:F0,_payload:{_status:-1,_result:e},_init:z0}};Ee.memo=function(e,t){return{$$typeof:D0,type:e,compare:t===void 0?null:t}};Ee.startTransition=function(e){var t=lu.transition;lu.transition={};try{e()}finally{lu.transition=t}};Ee.unstable_act=Rp;Ee.useCallback=function(e,t){return zt.current.useCallback(e,t)};Ee.useContext=function(e){return zt.current.useContext(e)};Ee.useDebugValue=function(){};Ee.useDeferredValue=function(e){return zt.current.useDeferredValue(e)};Ee.useEffect=function(e,t){return zt.current.useEffect(e,t)};Ee.useId=function(){return zt.current.useId()};Ee.useImperativeHandle=function(e,t,n){return zt.current.useImperativeHandle(e,t,n)};Ee.useInsertionEffect=function(e,t){return zt.current.useInsertionEffect(e,t)};Ee.useLayoutEffect=function(e,t){return zt.current.useLayoutEffect(e,t)};Ee.useMemo=function(e,t){return zt.current.useMemo(e,t)};Ee.useReducer=function(e,t,n){return zt.current.useReducer(e,t,n)};Ee.useRef=function(e){return zt.current.useRef(e)};Ee.useState=function(e){return zt.current.useState(e)};Ee.useSyncExternalStore=function(e,t,n){return zt.current.useSyncExternalStore(e,t,n)};Ee.useTransition=function(){return zt.current.useTransition()};Ee.version="18.3.1";$p.exports=Ee;var at=$p.exports;const j0=k0(at);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B0=at,U0=Symbol.for("react.element"),V0=Symbol.for("react.fragment"),W0=Object.prototype.hasOwnProperty,H0=B0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,K0={key:!0,ref:!0,__self:!0,__source:!0};function Lp(e,t,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)W0.call(t,r)&&!K0.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)s[r]===void 0&&(s[r]=t[r]);return{$$typeof:U0,type:e,key:i,ref:o,props:s,_owner:H0.current}}al.Fragment=V0;al.jsx=Lp;al.jsxs=Lp;_p.exports=al;var _e=_p.exports,Dc={},zp={exports:{}},ln={},Mp={exports:{}},jp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(re,fe){var he=re.length;re.push(fe);e:for(;0<he;){var Ae=he-1>>>1,Ke=re[Ae];if(0<s(Ke,fe))re[Ae]=fe,re[he]=Ke,he=Ae;else break e}}function n(re){return re.length===0?null:re[0]}function r(re){if(re.length===0)return null;var fe=re[0],he=re.pop();if(he!==fe){re[0]=he;e:for(var Ae=0,Ke=re.length,Un=Ke>>>1;Ae<Un;){var pn=2*(Ae+1)-1,Ar=re[pn],dt=pn+1,Vn=re[dt];if(0>s(Ar,he))dt<Ke&&0>s(Vn,Ar)?(re[Ae]=Vn,re[dt]=he,Ae=dt):(re[Ae]=Ar,re[pn]=he,Ae=pn);else if(dt<Ke&&0>s(Vn,he))re[Ae]=Vn,re[dt]=he,Ae=dt;else break e}}return fe}function s(re,fe){var he=re.sortIndex-fe.sortIndex;return he!==0?he:re.id-fe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var u=[],l=[],c=1,p=null,d=3,w=!1,b=!1,E=!1,_=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function $(re){for(var fe=n(l);fe!==null;){if(fe.callback===null)r(l);else if(fe.startTime<=re)r(l),fe.sortIndex=fe.expirationTime,t(u,fe);else break;fe=n(l)}}function F(re){if(E=!1,$(re),!b)if(n(u)!==null)b=!0,rt(z);else{var fe=n(l);fe!==null&&Ze(F,fe.startTime-re)}}function z(re,fe){b=!1,E&&(E=!1,N(W),W=-1),w=!0;var he=d;try{for($(fe),p=n(u);p!==null&&(!(p.expirationTime>fe)||re&&!ue());){var Ae=p.callback;if(typeof Ae=="function"){p.callback=null,d=p.priorityLevel;var Ke=Ae(p.expirationTime<=fe);fe=e.unstable_now(),typeof Ke=="function"?p.callback=Ke:p===n(u)&&r(u),$(fe)}else r(u);p=n(u)}if(p!==null)var Un=!0;else{var pn=n(l);pn!==null&&Ze(F,pn.startTime-fe),Un=!1}return Un}finally{p=null,d=he,w=!1}}var M=!1,V=null,W=-1,X=5,Q=-1;function ue(){return!(e.unstable_now()-Q<X)}function Ne(){if(V!==null){var re=e.unstable_now();Q=re;var fe=!0;try{fe=V(!0,re)}finally{fe?ce():(M=!1,V=null)}}else M=!1}var ce;if(typeof x=="function")ce=function(){x(Ne)};else if(typeof MessageChannel<"u"){var Ce=new MessageChannel,Je=Ce.port2;Ce.port1.onmessage=Ne,ce=function(){Je.postMessage(null)}}else ce=function(){_(Ne,0)};function rt(re){V=re,M||(M=!0,ce())}function Ze(re,fe){W=_(function(){re(e.unstable_now())},fe)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(re){re.callback=null},e.unstable_continueExecution=function(){b||w||(b=!0,rt(z))},e.unstable_forceFrameRate=function(re){0>re||125<re?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<re?Math.floor(1e3/re):5},e.unstable_getCurrentPriorityLevel=function(){return d},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(re){switch(d){case 1:case 2:case 3:var fe=3;break;default:fe=d}var he=d;d=fe;try{return re()}finally{d=he}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(re,fe){switch(re){case 1:case 2:case 3:case 4:case 5:break;default:re=3}var he=d;d=re;try{return fe()}finally{d=he}},e.unstable_scheduleCallback=function(re,fe,he){var Ae=e.unstable_now();switch(typeof he=="object"&&he!==null?(he=he.delay,he=typeof he=="number"&&0<he?Ae+he:Ae):he=Ae,re){case 1:var Ke=-1;break;case 2:Ke=250;break;case 5:Ke=1073741823;break;case 4:Ke=1e4;break;default:Ke=5e3}return Ke=he+Ke,re={id:c++,callback:fe,priorityLevel:re,startTime:he,expirationTime:Ke,sortIndex:-1},he>Ae?(re.sortIndex=he,t(l,re),n(u)===null&&re===n(l)&&(E?(N(W),W=-1):E=!0,Ze(F,he-Ae))):(re.sortIndex=Ke,t(u,re),b||w||(b=!0,rt(z))),re},e.unstable_shouldYield=ue,e.unstable_wrapCallback=function(re){var fe=d;return function(){var he=d;d=fe;try{return re.apply(this,arguments)}finally{d=he}}}})(jp);Mp.exports=jp;var G0=Mp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var q0=at,un=G0;function J(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Bp=new Set,Wo={};function Js(e,t){Li(e,t),Li(e+"Capture",t)}function Li(e,t){for(Wo[e]=t,e=0;e<t.length;e++)Bp.add(t[e])}var gr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fc=Object.prototype.hasOwnProperty,X0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Df={},Ff={};function Y0(e){return Fc.call(Ff,e)?!0:Fc.call(Df,e)?!1:X0.test(e)?Ff[e]=!0:(Df[e]=!0,!1)}function Q0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function J0(e,t,n,r){if(t===null||typeof t>"u"||Q0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Mt(e,t,n,r,s,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var xt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){xt[e]=new Mt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];xt[t]=new Mt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){xt[e]=new Mt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){xt[e]=new Mt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){xt[e]=new Mt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){xt[e]=new Mt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){xt[e]=new Mt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){xt[e]=new Mt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){xt[e]=new Mt(e,5,!1,e.toLowerCase(),null,!1,!1)});var a2=/[\-:]([a-z])/g;function u2(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(a2,u2);xt[t]=new Mt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(a2,u2);xt[t]=new Mt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(a2,u2);xt[t]=new Mt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){xt[e]=new Mt(e,1,!1,e.toLowerCase(),null,!1,!1)});xt.xlinkHref=new Mt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){xt[e]=new Mt(e,1,!1,e.toLowerCase(),null,!0,!0)});function l2(e,t,n,r){var s=xt.hasOwnProperty(t)?xt[t]:null;(s!==null?s.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(J0(t,n,s,r)&&(n=null),r||s===null?Y0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):s.mustUseProperty?e[s.propertyName]=n===null?s.type===3?!1:"":n:(t=s.attributeName,r=s.attributeNamespace,n===null?e.removeAttribute(t):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var $r=q0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ua=Symbol.for("react.element"),yi=Symbol.for("react.portal"),vi=Symbol.for("react.fragment"),c2=Symbol.for("react.strict_mode"),Pc=Symbol.for("react.profiler"),Up=Symbol.for("react.provider"),Vp=Symbol.for("react.context"),f2=Symbol.for("react.forward_ref"),Rc=Symbol.for("react.suspense"),Lc=Symbol.for("react.suspense_list"),p2=Symbol.for("react.memo"),Mr=Symbol.for("react.lazy"),Wp=Symbol.for("react.offscreen"),Pf=Symbol.iterator;function yo(e){return e===null||typeof e!="object"?null:(e=Pf&&e[Pf]||e["@@iterator"],typeof e=="function"?e:null)}var Ye=Object.assign,Wl;function $o(e){if(Wl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Wl=t&&t[1]||""}return`
`+Wl+e}var Hl=!1;function Kl(e,t){if(!e||Hl)return"";Hl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(l){var r=l}Reflect.construct(e,[],t)}else{try{t.call()}catch(l){r=l}e.call(t.prototype)}else{try{throw Error()}catch(l){r=l}e()}}catch(l){if(l&&r&&typeof l.stack=="string"){for(var s=l.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,a=i.length-1;1<=o&&0<=a&&s[o]!==i[a];)a--;for(;1<=o&&0<=a;o--,a--)if(s[o]!==i[a]){if(o!==1||a!==1)do if(o--,a--,0>a||s[o]!==i[a]){var u=`
`+s[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=o&&0<=a);break}}}finally{Hl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?$o(e):""}function Z0(e){switch(e.tag){case 5:return $o(e.type);case 16:return $o("Lazy");case 13:return $o("Suspense");case 19:return $o("SuspenseList");case 0:case 2:case 15:return e=Kl(e.type,!1),e;case 11:return e=Kl(e.type.render,!1),e;case 1:return e=Kl(e.type,!0),e;default:return""}}function zc(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case vi:return"Fragment";case yi:return"Portal";case Pc:return"Profiler";case c2:return"StrictMode";case Rc:return"Suspense";case Lc:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Vp:return(e.displayName||"Context")+".Consumer";case Up:return(e._context.displayName||"Context")+".Provider";case f2:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case p2:return t=e.displayName||null,t!==null?t:zc(e.type)||"Memo";case Mr:t=e._payload,e=e._init;try{return zc(e(t))}catch{}}return null}function em(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return zc(t);case 8:return t===c2?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function rs(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Hp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function tm(e){var t=Hp(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Va(e){e._valueTracker||(e._valueTracker=tm(e))}function Kp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Hp(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Eu(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Mc(e,t){var n=t.checked;return Ye({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Rf(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=rs(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Gp(e,t){t=t.checked,t!=null&&l2(e,"checked",t,!1)}function jc(e,t){Gp(e,t);var n=rs(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Bc(e,t.type,n):t.hasOwnProperty("defaultValue")&&Bc(e,t.type,rs(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Lf(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Bc(e,t,n){(t!=="number"||Eu(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Io=Array.isArray;function Ii(e,t,n,r){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&r&&(e[n].defaultSelected=!0)}else{for(n=""+rs(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,r&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function Uc(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(J(91));return Ye({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function zf(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(J(92));if(Io(n)){if(1<n.length)throw Error(J(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:rs(n)}}function qp(e,t){var n=rs(t.value),r=rs(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Mf(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Xp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Vc(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Xp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Wa,Yp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,s){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,s)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Wa=Wa||document.createElement("div"),Wa.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Wa.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ho(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Fo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},nm=["Webkit","ms","Moz","O"];Object.keys(Fo).forEach(function(e){nm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Fo[t]=Fo[e]})});function Qp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Fo.hasOwnProperty(e)&&Fo[e]?(""+t).trim():t+"px"}function Jp(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=Qp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,s):e[n]=s}}var rm=Ye({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Wc(e,t){if(t){if(rm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(J(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(J(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(J(61))}if(t.style!=null&&typeof t.style!="object")throw Error(J(62))}}function Hc(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Kc=null;function h2(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Gc=null,Ai=null,Oi=null;function jf(e){if(e=va(e)){if(typeof Gc!="function")throw Error(J(280));var t=e.stateNode;t&&(t=pl(t),Gc(e.stateNode,e.type,t))}}function Zp(e){Ai?Oi?Oi.push(e):Oi=[e]:Ai=e}function eh(){if(Ai){var e=Ai,t=Oi;if(Oi=Ai=null,jf(e),t)for(e=0;e<t.length;e++)jf(t[e])}}function th(e,t){return e(t)}function nh(){}var Gl=!1;function rh(e,t,n){if(Gl)return e(t,n);Gl=!0;try{return th(e,t,n)}finally{Gl=!1,(Ai!==null||Oi!==null)&&(nh(),eh())}}function Ko(e,t){var n=e.stateNode;if(n===null)return null;var r=pl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(J(231,t,typeof n));return n}var qc=!1;if(gr)try{var vo={};Object.defineProperty(vo,"passive",{get:function(){qc=!0}}),window.addEventListener("test",vo,vo),window.removeEventListener("test",vo,vo)}catch{qc=!1}function sm(e,t,n,r,s,i,o,a,u){var l=Array.prototype.slice.call(arguments,3);try{t.apply(n,l)}catch(c){this.onError(c)}}var Po=!1,xu=null,_u=!1,Xc=null,im={onError:function(e){Po=!0,xu=e}};function om(e,t,n,r,s,i,o,a,u){Po=!1,xu=null,sm.apply(im,arguments)}function am(e,t,n,r,s,i,o,a,u){if(om.apply(this,arguments),Po){if(Po){var l=xu;Po=!1,xu=null}else throw Error(J(198));_u||(_u=!0,Xc=l)}}function Zs(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function sh(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Bf(e){if(Zs(e)!==e)throw Error(J(188))}function um(e){var t=e.alternate;if(!t){if(t=Zs(e),t===null)throw Error(J(188));return t!==e?null:e}for(var n=e,r=t;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return Bf(s),e;if(i===r)return Bf(s),t;i=i.sibling}throw Error(J(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o){for(a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o)throw Error(J(189))}}if(n.alternate!==r)throw Error(J(190))}if(n.tag!==3)throw Error(J(188));return n.stateNode.current===n?e:t}function ih(e){return e=um(e),e!==null?oh(e):null}function oh(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=oh(e);if(t!==null)return t;e=e.sibling}return null}var ah=un.unstable_scheduleCallback,Uf=un.unstable_cancelCallback,lm=un.unstable_shouldYield,cm=un.unstable_requestPaint,it=un.unstable_now,fm=un.unstable_getCurrentPriorityLevel,d2=un.unstable_ImmediatePriority,uh=un.unstable_UserBlockingPriority,$u=un.unstable_NormalPriority,pm=un.unstable_LowPriority,lh=un.unstable_IdlePriority,ul=null,Zn=null;function hm(e){if(Zn&&typeof Zn.onCommitFiberRoot=="function")try{Zn.onCommitFiberRoot(ul,e,void 0,(e.current.flags&128)===128)}catch{}}var Pn=Math.clz32?Math.clz32:gm,dm=Math.log,mm=Math.LN2;function gm(e){return e>>>=0,e===0?32:31-(dm(e)/mm|0)|0}var Ha=64,Ka=4194304;function Ao(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Iu(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,s=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~s;a!==0?r=Ao(a):(i&=o,i!==0&&(r=Ao(i)))}else o=n&~s,o!==0?r=Ao(o):i!==0&&(r=Ao(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&s)&&(s=r&-r,i=t&-t,s>=i||s===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Pn(t),s=1<<n,r|=e[n],t&=~s;return r}function ym(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vm(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,s=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-Pn(i),a=1<<o,u=s[o];u===-1?(!(a&n)||a&r)&&(s[o]=ym(a,t)):u<=t&&(e.expiredLanes|=a),i&=~a}}function Yc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ch(){var e=Ha;return Ha<<=1,!(Ha&4194240)&&(Ha=64),e}function ql(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ga(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Pn(t),e[t]=n}function wm(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var s=31-Pn(n),i=1<<s;t[s]=0,r[s]=-1,e[s]=-1,n&=~i}}function m2(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Pn(n),s=1<<r;s&t|e[r]&t&&(e[r]|=t),n&=~s}}var Fe=0;function fh(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ph,g2,hh,dh,mh,Qc=!1,Ga=[],Kr=null,Gr=null,qr=null,Go=new Map,qo=new Map,Br=[],Sm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Vf(e,t){switch(e){case"focusin":case"focusout":Kr=null;break;case"dragenter":case"dragleave":Gr=null;break;case"mouseover":case"mouseout":qr=null;break;case"pointerover":case"pointerout":Go.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":qo.delete(t.pointerId)}}function wo(e,t,n,r,s,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},t!==null&&(t=va(t),t!==null&&g2(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function bm(e,t,n,r,s){switch(t){case"focusin":return Kr=wo(Kr,e,t,n,r,s),!0;case"dragenter":return Gr=wo(Gr,e,t,n,r,s),!0;case"mouseover":return qr=wo(qr,e,t,n,r,s),!0;case"pointerover":var i=s.pointerId;return Go.set(i,wo(Go.get(i)||null,e,t,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,qo.set(i,wo(qo.get(i)||null,e,t,n,r,s)),!0}return!1}function gh(e){var t=As(e.target);if(t!==null){var n=Zs(t);if(n!==null){if(t=n.tag,t===13){if(t=sh(n),t!==null){e.blockedOn=t,mh(e.priority,function(){hh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function cu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Jc(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Kc=r,n.target.dispatchEvent(r),Kc=null}else return t=va(n),t!==null&&g2(t),e.blockedOn=n,!1;t.shift()}return!0}function Wf(e,t,n){cu(e)&&n.delete(t)}function Nm(){Qc=!1,Kr!==null&&cu(Kr)&&(Kr=null),Gr!==null&&cu(Gr)&&(Gr=null),qr!==null&&cu(qr)&&(qr=null),Go.forEach(Wf),qo.forEach(Wf)}function So(e,t){e.blockedOn===t&&(e.blockedOn=null,Qc||(Qc=!0,un.unstable_scheduleCallback(un.unstable_NormalPriority,Nm)))}function Xo(e){function t(s){return So(s,e)}if(0<Ga.length){So(Ga[0],e);for(var n=1;n<Ga.length;n++){var r=Ga[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Kr!==null&&So(Kr,e),Gr!==null&&So(Gr,e),qr!==null&&So(qr,e),Go.forEach(t),qo.forEach(t),n=0;n<Br.length;n++)r=Br[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Br.length&&(n=Br[0],n.blockedOn===null);)gh(n),n.blockedOn===null&&Br.shift()}var Ci=$r.ReactCurrentBatchConfig,Au=!0;function km(e,t,n,r){var s=Fe,i=Ci.transition;Ci.transition=null;try{Fe=1,y2(e,t,n,r)}finally{Fe=s,Ci.transition=i}}function Tm(e,t,n,r){var s=Fe,i=Ci.transition;Ci.transition=null;try{Fe=4,y2(e,t,n,r)}finally{Fe=s,Ci.transition=i}}function y2(e,t,n,r){if(Au){var s=Jc(e,t,n,r);if(s===null)sc(e,t,r,Ou,n),Vf(e,r);else if(bm(s,e,t,n,r))r.stopPropagation();else if(Vf(e,r),t&4&&-1<Sm.indexOf(e)){for(;s!==null;){var i=va(s);if(i!==null&&ph(i),i=Jc(e,t,n,r),i===null&&sc(e,t,r,Ou,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else sc(e,t,r,null,n)}}var Ou=null;function Jc(e,t,n,r){if(Ou=null,e=h2(r),e=As(e),e!==null)if(t=Zs(e),t===null)e=null;else if(n=t.tag,n===13){if(e=sh(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ou=e,null}function yh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(fm()){case d2:return 1;case uh:return 4;case $u:case pm:return 16;case lh:return 536870912;default:return 16}default:return 16}}var Vr=null,v2=null,fu=null;function vh(){if(fu)return fu;var e,t=v2,n=t.length,r,s="value"in Vr?Vr.value:Vr.textContent,i=s.length;for(e=0;e<n&&t[e]===s[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===s[i-r];r++);return fu=s.slice(e,1<r?1-r:void 0)}function pu(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function qa(){return!0}function Hf(){return!1}function cn(e){function t(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?qa:Hf,this.isPropagationStopped=Hf,this}return Ye(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=qa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=qa)},persist:function(){},isPersistent:qa}),t}var qi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},w2=cn(qi),ya=Ye({},qi,{view:0,detail:0}),Em=cn(ya),Xl,Yl,bo,ll=Ye({},ya,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:S2,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==bo&&(bo&&e.type==="mousemove"?(Xl=e.screenX-bo.screenX,Yl=e.screenY-bo.screenY):Yl=Xl=0,bo=e),Xl)},movementY:function(e){return"movementY"in e?e.movementY:Yl}}),Kf=cn(ll),xm=Ye({},ll,{dataTransfer:0}),_m=cn(xm),$m=Ye({},ya,{relatedTarget:0}),Ql=cn($m),Im=Ye({},qi,{animationName:0,elapsedTime:0,pseudoElement:0}),Am=cn(Im),Om=Ye({},qi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Cm=cn(Om),Dm=Ye({},qi,{data:0}),Gf=cn(Dm),Fm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Pm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Rm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Lm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Rm[e])?!!t[e]:!1}function S2(){return Lm}var zm=Ye({},ya,{key:function(e){if(e.key){var t=Fm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=pu(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Pm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:S2,charCode:function(e){return e.type==="keypress"?pu(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?pu(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Mm=cn(zm),jm=Ye({},ll,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qf=cn(jm),Bm=Ye({},ya,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:S2}),Um=cn(Bm),Vm=Ye({},qi,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wm=cn(Vm),Hm=Ye({},ll,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Km=cn(Hm),Gm=[9,13,27,32],b2=gr&&"CompositionEvent"in window,Ro=null;gr&&"documentMode"in document&&(Ro=document.documentMode);var qm=gr&&"TextEvent"in window&&!Ro,wh=gr&&(!b2||Ro&&8<Ro&&11>=Ro),Xf=" ",Yf=!1;function Sh(e,t){switch(e){case"keyup":return Gm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var wi=!1;function Xm(e,t){switch(e){case"compositionend":return bh(t);case"keypress":return t.which!==32?null:(Yf=!0,Xf);case"textInput":return e=t.data,e===Xf&&Yf?null:e;default:return null}}function Ym(e,t){if(wi)return e==="compositionend"||!b2&&Sh(e,t)?(e=vh(),fu=v2=Vr=null,wi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return wh&&t.locale!=="ko"?null:t.data;default:return null}}var Qm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Qm[e.type]:t==="textarea"}function Nh(e,t,n,r){Zp(r),t=Cu(t,"onChange"),0<t.length&&(n=new w2("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Lo=null,Yo=null;function Jm(e){Dh(e,0)}function cl(e){var t=Ni(e);if(Kp(t))return e}function Zm(e,t){if(e==="change")return t}var kh=!1;if(gr){var Jl;if(gr){var Zl="oninput"in document;if(!Zl){var Jf=document.createElement("div");Jf.setAttribute("oninput","return;"),Zl=typeof Jf.oninput=="function"}Jl=Zl}else Jl=!1;kh=Jl&&(!document.documentMode||9<document.documentMode)}function Zf(){Lo&&(Lo.detachEvent("onpropertychange",Th),Yo=Lo=null)}function Th(e){if(e.propertyName==="value"&&cl(Yo)){var t=[];Nh(t,Yo,e,h2(e)),rh(Jm,t)}}function eg(e,t,n){e==="focusin"?(Zf(),Lo=t,Yo=n,Lo.attachEvent("onpropertychange",Th)):e==="focusout"&&Zf()}function tg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return cl(Yo)}function ng(e,t){if(e==="click")return cl(t)}function rg(e,t){if(e==="input"||e==="change")return cl(t)}function sg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Mn=typeof Object.is=="function"?Object.is:sg;function Qo(e,t){if(Mn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!Fc.call(t,s)||!Mn(e[s],t[s]))return!1}return!0}function e3(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function t3(e,t){var n=e3(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=e3(n)}}function Eh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Eh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function xh(){for(var e=window,t=Eu();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Eu(e.document)}return t}function N2(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function ig(e){var t=xh(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Eh(n.ownerDocument.documentElement,n)){if(r!==null&&N2(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!e.extend&&i>r&&(s=r,r=i,i=s),s=t3(n,i);var o=t3(n,r);s&&o&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var og=gr&&"documentMode"in document&&11>=document.documentMode,Si=null,Zc=null,zo=null,e1=!1;function n3(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;e1||Si==null||Si!==Eu(r)||(r=Si,"selectionStart"in r&&N2(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),zo&&Qo(zo,r)||(zo=r,r=Cu(Zc,"onSelect"),0<r.length&&(t=new w2("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Si)))}function Xa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var bi={animationend:Xa("Animation","AnimationEnd"),animationiteration:Xa("Animation","AnimationIteration"),animationstart:Xa("Animation","AnimationStart"),transitionend:Xa("Transition","TransitionEnd")},ec={},_h={};gr&&(_h=document.createElement("div").style,"AnimationEvent"in window||(delete bi.animationend.animation,delete bi.animationiteration.animation,delete bi.animationstart.animation),"TransitionEvent"in window||delete bi.transitionend.transition);function fl(e){if(ec[e])return ec[e];if(!bi[e])return e;var t=bi[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in _h)return ec[e]=t[n];return e}var $h=fl("animationend"),Ih=fl("animationiteration"),Ah=fl("animationstart"),Oh=fl("transitionend"),Ch=new Map,r3="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function us(e,t){Ch.set(e,t),Js(t,[e])}for(var tc=0;tc<r3.length;tc++){var nc=r3[tc],ag=nc.toLowerCase(),ug=nc[0].toUpperCase()+nc.slice(1);us(ag,"on"+ug)}us($h,"onAnimationEnd");us(Ih,"onAnimationIteration");us(Ah,"onAnimationStart");us("dblclick","onDoubleClick");us("focusin","onFocus");us("focusout","onBlur");us(Oh,"onTransitionEnd");Li("onMouseEnter",["mouseout","mouseover"]);Li("onMouseLeave",["mouseout","mouseover"]);Li("onPointerEnter",["pointerout","pointerover"]);Li("onPointerLeave",["pointerout","pointerover"]);Js("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Js("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Js("onBeforeInput",["compositionend","keypress","textInput","paste"]);Js("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Js("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Js("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Oo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Oo));function s3(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,am(r,t,void 0,e),e.currentTarget=null}function Dh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],s=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,l=a.currentTarget;if(a=a.listener,u!==i&&s.isPropagationStopped())break e;s3(s,a,l),i=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,l=a.currentTarget,a=a.listener,u!==i&&s.isPropagationStopped())break e;s3(s,a,l),i=u}}}if(_u)throw e=Xc,_u=!1,Xc=null,e}function Be(e,t){var n=t[i1];n===void 0&&(n=t[i1]=new Set);var r=e+"__bubble";n.has(r)||(Fh(t,e,2,!1),n.add(r))}function rc(e,t,n){var r=0;t&&(r|=4),Fh(n,e,r,t)}var Ya="_reactListening"+Math.random().toString(36).slice(2);function Jo(e){if(!e[Ya]){e[Ya]=!0,Bp.forEach(function(n){n!=="selectionchange"&&(lg.has(n)||rc(n,!1,e),rc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ya]||(t[Ya]=!0,rc("selectionchange",!1,t))}}function Fh(e,t,n,r){switch(yh(t)){case 1:var s=km;break;case 4:s=Tm;break;default:s=y2}n=s.bind(null,t,n,e),s=void 0,!qc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),r?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function sc(e,t,n,r,s){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===s||a.nodeType===8&&a.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;o=o.return}for(;a!==null;){if(o=As(a),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}a=a.parentNode}}r=r.return}rh(function(){var l=i,c=h2(n),p=[];e:{var d=Ch.get(e);if(d!==void 0){var w=w2,b=e;switch(e){case"keypress":if(pu(n)===0)break e;case"keydown":case"keyup":w=Mm;break;case"focusin":b="focus",w=Ql;break;case"focusout":b="blur",w=Ql;break;case"beforeblur":case"afterblur":w=Ql;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Kf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=_m;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Um;break;case $h:case Ih:case Ah:w=Am;break;case Oh:w=Wm;break;case"scroll":w=Em;break;case"wheel":w=Km;break;case"copy":case"cut":case"paste":w=Cm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=qf}var E=(t&4)!==0,_=!E&&e==="scroll",N=E?d!==null?d+"Capture":null:d;E=[];for(var x=l,$;x!==null;){$=x;var F=$.stateNode;if($.tag===5&&F!==null&&($=F,N!==null&&(F=Ko(x,N),F!=null&&E.push(Zo(x,F,$)))),_)break;x=x.return}0<E.length&&(d=new w(d,b,null,n,c),p.push({event:d,listeners:E}))}}if(!(t&7)){e:{if(d=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",d&&n!==Kc&&(b=n.relatedTarget||n.fromElement)&&(As(b)||b[yr]))break e;if((w||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,w?(b=n.relatedTarget||n.toElement,w=l,b=b?As(b):null,b!==null&&(_=Zs(b),b!==_||b.tag!==5&&b.tag!==6)&&(b=null)):(w=null,b=l),w!==b)){if(E=Kf,F="onMouseLeave",N="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(E=qf,F="onPointerLeave",N="onPointerEnter",x="pointer"),_=w==null?d:Ni(w),$=b==null?d:Ni(b),d=new E(F,x+"leave",w,n,c),d.target=_,d.relatedTarget=$,F=null,As(c)===l&&(E=new E(N,x+"enter",b,n,c),E.target=$,E.relatedTarget=_,F=E),_=F,w&&b)t:{for(E=w,N=b,x=0,$=E;$;$=pi($))x++;for($=0,F=N;F;F=pi(F))$++;for(;0<x-$;)E=pi(E),x--;for(;0<$-x;)N=pi(N),$--;for(;x--;){if(E===N||N!==null&&E===N.alternate)break t;E=pi(E),N=pi(N)}E=null}else E=null;w!==null&&i3(p,d,w,E,!1),b!==null&&_!==null&&i3(p,_,b,E,!0)}}e:{if(d=l?Ni(l):window,w=d.nodeName&&d.nodeName.toLowerCase(),w==="select"||w==="input"&&d.type==="file")var z=Zm;else if(Qf(d))if(kh)z=rg;else{z=tg;var M=eg}else(w=d.nodeName)&&w.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(z=ng);if(z&&(z=z(e,l))){Nh(p,z,n,c);break e}M&&M(e,d,l),e==="focusout"&&(M=d._wrapperState)&&M.controlled&&d.type==="number"&&Bc(d,"number",d.value)}switch(M=l?Ni(l):window,e){case"focusin":(Qf(M)||M.contentEditable==="true")&&(Si=M,Zc=l,zo=null);break;case"focusout":zo=Zc=Si=null;break;case"mousedown":e1=!0;break;case"contextmenu":case"mouseup":case"dragend":e1=!1,n3(p,n,c);break;case"selectionchange":if(og)break;case"keydown":case"keyup":n3(p,n,c)}var V;if(b2)e:{switch(e){case"compositionstart":var W="onCompositionStart";break e;case"compositionend":W="onCompositionEnd";break e;case"compositionupdate":W="onCompositionUpdate";break e}W=void 0}else wi?Sh(e,n)&&(W="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(W="onCompositionStart");W&&(wh&&n.locale!=="ko"&&(wi||W!=="onCompositionStart"?W==="onCompositionEnd"&&wi&&(V=vh()):(Vr=c,v2="value"in Vr?Vr.value:Vr.textContent,wi=!0)),M=Cu(l,W),0<M.length&&(W=new Gf(W,e,null,n,c),p.push({event:W,listeners:M}),V?W.data=V:(V=bh(n),V!==null&&(W.data=V)))),(V=qm?Xm(e,n):Ym(e,n))&&(l=Cu(l,"onBeforeInput"),0<l.length&&(c=new Gf("onBeforeInput","beforeinput",null,n,c),p.push({event:c,listeners:l}),c.data=V))}Dh(p,t)})}function Zo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Cu(e,t){for(var n=t+"Capture",r=[];e!==null;){var s=e,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=Ko(e,n),i!=null&&r.unshift(Zo(e,i,s)),i=Ko(e,t),i!=null&&r.push(Zo(e,i,s))),e=e.return}return r}function pi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function i3(e,t,n,r,s){for(var i=t._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,l=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&l!==null&&(a=l,s?(u=Ko(n,i),u!=null&&o.unshift(Zo(n,u,a))):s||(u=Ko(n,i),u!=null&&o.push(Zo(n,u,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var cg=/\r\n?/g,fg=/\u0000|\uFFFD/g;function o3(e){return(typeof e=="string"?e:""+e).replace(cg,`
`).replace(fg,"")}function Qa(e,t,n){if(t=o3(t),o3(e)!==t&&n)throw Error(J(425))}function Du(){}var t1=null,n1=null;function r1(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var s1=typeof setTimeout=="function"?setTimeout:void 0,pg=typeof clearTimeout=="function"?clearTimeout:void 0,a3=typeof Promise=="function"?Promise:void 0,hg=typeof queueMicrotask=="function"?queueMicrotask:typeof a3<"u"?function(e){return a3.resolve(null).then(e).catch(dg)}:s1;function dg(e){setTimeout(function(){throw e})}function ic(e,t){var n=t,r=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){e.removeChild(s),Xo(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);Xo(t)}function Xr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function u3(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Xi=Math.random().toString(36).slice(2),Yn="__reactFiber$"+Xi,ea="__reactProps$"+Xi,yr="__reactContainer$"+Xi,i1="__reactEvents$"+Xi,mg="__reactListeners$"+Xi,gg="__reactHandles$"+Xi;function As(e){var t=e[Yn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[yr]||n[Yn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=u3(e);e!==null;){if(n=e[Yn])return n;e=u3(e)}return t}e=n,n=e.parentNode}return null}function va(e){return e=e[Yn]||e[yr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ni(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(J(33))}function pl(e){return e[ea]||null}var o1=[],ki=-1;function ls(e){return{current:e}}function Ue(e){0>ki||(e.current=o1[ki],o1[ki]=null,ki--)}function Me(e,t){ki++,o1[ki]=e.current,e.current=t}var ss={},Ot=ls(ss),Xt=ls(!1),Ms=ss;function zi(e,t){var n=e.type.contextTypes;if(!n)return ss;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function Yt(e){return e=e.childContextTypes,e!=null}function Fu(){Ue(Xt),Ue(Ot)}function l3(e,t,n){if(Ot.current!==ss)throw Error(J(168));Me(Ot,t),Me(Xt,n)}function Ph(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in t))throw Error(J(108,em(e)||"Unknown",s));return Ye({},n,r)}function Pu(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ss,Ms=Ot.current,Me(Ot,e),Me(Xt,Xt.current),!0}function c3(e,t,n){var r=e.stateNode;if(!r)throw Error(J(169));n?(e=Ph(e,t,Ms),r.__reactInternalMemoizedMergedChildContext=e,Ue(Xt),Ue(Ot),Me(Ot,e)):Ue(Xt),Me(Xt,n)}var ar=null,hl=!1,oc=!1;function Rh(e){ar===null?ar=[e]:ar.push(e)}function yg(e){hl=!0,Rh(e)}function cs(){if(!oc&&ar!==null){oc=!0;var e=0,t=Fe;try{var n=ar;for(Fe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ar=null,hl=!1}catch(s){throw ar!==null&&(ar=ar.slice(e+1)),ah(d2,cs),s}finally{Fe=t,oc=!1}}return null}var Ti=[],Ei=0,Ru=null,Lu=0,wn=[],Sn=0,js=null,fr=1,pr="";function xs(e,t){Ti[Ei++]=Lu,Ti[Ei++]=Ru,Ru=e,Lu=t}function Lh(e,t,n){wn[Sn++]=fr,wn[Sn++]=pr,wn[Sn++]=js,js=e;var r=fr;e=pr;var s=32-Pn(r)-1;r&=~(1<<s),n+=1;var i=32-Pn(t)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,fr=1<<32-Pn(t)+s|n<<s|r,pr=i+e}else fr=1<<i|n<<s|r,pr=e}function k2(e){e.return!==null&&(xs(e,1),Lh(e,1,0))}function T2(e){for(;e===Ru;)Ru=Ti[--Ei],Ti[Ei]=null,Lu=Ti[--Ei],Ti[Ei]=null;for(;e===js;)js=wn[--Sn],wn[Sn]=null,pr=wn[--Sn],wn[Sn]=null,fr=wn[--Sn],wn[Sn]=null}var on=null,sn=null,We=!1,Dn=null;function zh(e,t){var n=Nn(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function f3(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,on=e,sn=Xr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,on=e,sn=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=js!==null?{id:fr,overflow:pr}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Nn(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,on=e,sn=null,!0):!1;default:return!1}}function a1(e){return(e.mode&1)!==0&&(e.flags&128)===0}function u1(e){if(We){var t=sn;if(t){var n=t;if(!f3(e,t)){if(a1(e))throw Error(J(418));t=Xr(n.nextSibling);var r=on;t&&f3(e,t)?zh(r,n):(e.flags=e.flags&-4097|2,We=!1,on=e)}}else{if(a1(e))throw Error(J(418));e.flags=e.flags&-4097|2,We=!1,on=e}}}function p3(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;on=e}function Ja(e){if(e!==on)return!1;if(!We)return p3(e),We=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!r1(e.type,e.memoizedProps)),t&&(t=sn)){if(a1(e))throw Mh(),Error(J(418));for(;t;)zh(e,t),t=Xr(t.nextSibling)}if(p3(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(J(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){sn=Xr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}sn=null}}else sn=on?Xr(e.stateNode.nextSibling):null;return!0}function Mh(){for(var e=sn;e;)e=Xr(e.nextSibling)}function Mi(){sn=on=null,We=!1}function E2(e){Dn===null?Dn=[e]:Dn.push(e)}var vg=$r.ReactCurrentBatchConfig;function No(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(J(309));var r=n.stateNode}if(!r)throw Error(J(147,e));var s=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var a=s.refs;o===null?delete a[i]:a[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(J(284));if(!n._owner)throw Error(J(290,e))}return e}function Za(e,t){throw e=Object.prototype.toString.call(t),Error(J(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function h3(e){var t=e._init;return t(e._payload)}function jh(e){function t(N,x){if(e){var $=N.deletions;$===null?(N.deletions=[x],N.flags|=16):$.push(x)}}function n(N,x){if(!e)return null;for(;x!==null;)t(N,x),x=x.sibling;return null}function r(N,x){for(N=new Map;x!==null;)x.key!==null?N.set(x.key,x):N.set(x.index,x),x=x.sibling;return N}function s(N,x){return N=Zr(N,x),N.index=0,N.sibling=null,N}function i(N,x,$){return N.index=$,e?($=N.alternate,$!==null?($=$.index,$<x?(N.flags|=2,x):$):(N.flags|=2,x)):(N.flags|=1048576,x)}function o(N){return e&&N.alternate===null&&(N.flags|=2),N}function a(N,x,$,F){return x===null||x.tag!==6?(x=hc($,N.mode,F),x.return=N,x):(x=s(x,$),x.return=N,x)}function u(N,x,$,F){var z=$.type;return z===vi?c(N,x,$.props.children,F,$.key):x!==null&&(x.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Mr&&h3(z)===x.type)?(F=s(x,$.props),F.ref=No(N,x,$),F.return=N,F):(F=wu($.type,$.key,$.props,null,N.mode,F),F.ref=No(N,x,$),F.return=N,F)}function l(N,x,$,F){return x===null||x.tag!==4||x.stateNode.containerInfo!==$.containerInfo||x.stateNode.implementation!==$.implementation?(x=dc($,N.mode,F),x.return=N,x):(x=s(x,$.children||[]),x.return=N,x)}function c(N,x,$,F,z){return x===null||x.tag!==7?(x=Ls($,N.mode,F,z),x.return=N,x):(x=s(x,$),x.return=N,x)}function p(N,x,$){if(typeof x=="string"&&x!==""||typeof x=="number")return x=hc(""+x,N.mode,$),x.return=N,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ua:return $=wu(x.type,x.key,x.props,null,N.mode,$),$.ref=No(N,null,x),$.return=N,$;case yi:return x=dc(x,N.mode,$),x.return=N,x;case Mr:var F=x._init;return p(N,F(x._payload),$)}if(Io(x)||yo(x))return x=Ls(x,N.mode,$,null),x.return=N,x;Za(N,x)}return null}function d(N,x,$,F){var z=x!==null?x.key:null;if(typeof $=="string"&&$!==""||typeof $=="number")return z!==null?null:a(N,x,""+$,F);if(typeof $=="object"&&$!==null){switch($.$$typeof){case Ua:return $.key===z?u(N,x,$,F):null;case yi:return $.key===z?l(N,x,$,F):null;case Mr:return z=$._init,d(N,x,z($._payload),F)}if(Io($)||yo($))return z!==null?null:c(N,x,$,F,null);Za(N,$)}return null}function w(N,x,$,F,z){if(typeof F=="string"&&F!==""||typeof F=="number")return N=N.get($)||null,a(x,N,""+F,z);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case Ua:return N=N.get(F.key===null?$:F.key)||null,u(x,N,F,z);case yi:return N=N.get(F.key===null?$:F.key)||null,l(x,N,F,z);case Mr:var M=F._init;return w(N,x,$,M(F._payload),z)}if(Io(F)||yo(F))return N=N.get($)||null,c(x,N,F,z,null);Za(x,F)}return null}function b(N,x,$,F){for(var z=null,M=null,V=x,W=x=0,X=null;V!==null&&W<$.length;W++){V.index>W?(X=V,V=null):X=V.sibling;var Q=d(N,V,$[W],F);if(Q===null){V===null&&(V=X);break}e&&V&&Q.alternate===null&&t(N,V),x=i(Q,x,W),M===null?z=Q:M.sibling=Q,M=Q,V=X}if(W===$.length)return n(N,V),We&&xs(N,W),z;if(V===null){for(;W<$.length;W++)V=p(N,$[W],F),V!==null&&(x=i(V,x,W),M===null?z=V:M.sibling=V,M=V);return We&&xs(N,W),z}for(V=r(N,V);W<$.length;W++)X=w(V,N,W,$[W],F),X!==null&&(e&&X.alternate!==null&&V.delete(X.key===null?W:X.key),x=i(X,x,W),M===null?z=X:M.sibling=X,M=X);return e&&V.forEach(function(ue){return t(N,ue)}),We&&xs(N,W),z}function E(N,x,$,F){var z=yo($);if(typeof z!="function")throw Error(J(150));if($=z.call($),$==null)throw Error(J(151));for(var M=z=null,V=x,W=x=0,X=null,Q=$.next();V!==null&&!Q.done;W++,Q=$.next()){V.index>W?(X=V,V=null):X=V.sibling;var ue=d(N,V,Q.value,F);if(ue===null){V===null&&(V=X);break}e&&V&&ue.alternate===null&&t(N,V),x=i(ue,x,W),M===null?z=ue:M.sibling=ue,M=ue,V=X}if(Q.done)return n(N,V),We&&xs(N,W),z;if(V===null){for(;!Q.done;W++,Q=$.next())Q=p(N,Q.value,F),Q!==null&&(x=i(Q,x,W),M===null?z=Q:M.sibling=Q,M=Q);return We&&xs(N,W),z}for(V=r(N,V);!Q.done;W++,Q=$.next())Q=w(V,N,W,Q.value,F),Q!==null&&(e&&Q.alternate!==null&&V.delete(Q.key===null?W:Q.key),x=i(Q,x,W),M===null?z=Q:M.sibling=Q,M=Q);return e&&V.forEach(function(Ne){return t(N,Ne)}),We&&xs(N,W),z}function _(N,x,$,F){if(typeof $=="object"&&$!==null&&$.type===vi&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case Ua:e:{for(var z=$.key,M=x;M!==null;){if(M.key===z){if(z=$.type,z===vi){if(M.tag===7){n(N,M.sibling),x=s(M,$.props.children),x.return=N,N=x;break e}}else if(M.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Mr&&h3(z)===M.type){n(N,M.sibling),x=s(M,$.props),x.ref=No(N,M,$),x.return=N,N=x;break e}n(N,M);break}else t(N,M);M=M.sibling}$.type===vi?(x=Ls($.props.children,N.mode,F,$.key),x.return=N,N=x):(F=wu($.type,$.key,$.props,null,N.mode,F),F.ref=No(N,x,$),F.return=N,N=F)}return o(N);case yi:e:{for(M=$.key;x!==null;){if(x.key===M)if(x.tag===4&&x.stateNode.containerInfo===$.containerInfo&&x.stateNode.implementation===$.implementation){n(N,x.sibling),x=s(x,$.children||[]),x.return=N,N=x;break e}else{n(N,x);break}else t(N,x);x=x.sibling}x=dc($,N.mode,F),x.return=N,N=x}return o(N);case Mr:return M=$._init,_(N,x,M($._payload),F)}if(Io($))return b(N,x,$,F);if(yo($))return E(N,x,$,F);Za(N,$)}return typeof $=="string"&&$!==""||typeof $=="number"?($=""+$,x!==null&&x.tag===6?(n(N,x.sibling),x=s(x,$),x.return=N,N=x):(n(N,x),x=hc($,N.mode,F),x.return=N,N=x),o(N)):n(N,x)}return _}var ji=jh(!0),Bh=jh(!1),zu=ls(null),Mu=null,xi=null,x2=null;function _2(){x2=xi=Mu=null}function $2(e){var t=zu.current;Ue(zu),e._currentValue=t}function l1(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Di(e,t){Mu=e,x2=xi=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(qt=!0),e.firstContext=null)}function Tn(e){var t=e._currentValue;if(x2!==e)if(e={context:e,memoizedValue:t,next:null},xi===null){if(Mu===null)throw Error(J(308));xi=e,Mu.dependencies={lanes:0,firstContext:e}}else xi=xi.next=e;return t}var Os=null;function I2(e){Os===null?Os=[e]:Os.push(e)}function Uh(e,t,n,r){var s=t.interleaved;return s===null?(n.next=n,I2(t)):(n.next=s.next,s.next=n),t.interleaved=n,vr(e,r)}function vr(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var jr=!1;function A2(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Vh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function mr(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Yr(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Ie&2){var s=r.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),r.pending=t,vr(e,n)}return s=r.interleaved,s===null?(t.next=t,I2(r)):(t.next=s.next,s.next=t),r.interleaved=t,vr(e,n)}function hu(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,m2(e,n)}}function d3(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=t:i=i.next=t}else s=i=t;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ju(e,t,n,r){var s=e.updateQueue;jr=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,a=s.shared.pending;if(a!==null){s.shared.pending=null;var u=a,l=u.next;u.next=null,o===null?i=l:o.next=l,o=u;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=l:a.next=l,c.lastBaseUpdate=u))}if(i!==null){var p=s.baseState;o=0,c=l=u=null,a=i;do{var d=a.lane,w=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:w,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var b=e,E=a;switch(d=t,w=n,E.tag){case 1:if(b=E.payload,typeof b=="function"){p=b.call(w,p,d);break e}p=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=E.payload,d=typeof b=="function"?b.call(w,p,d):b,d==null)break e;p=Ye({},p,d);break e;case 2:jr=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,d=s.effects,d===null?s.effects=[a]:d.push(a))}else w={eventTime:w,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(l=c=w,u=p):c=c.next=w,o|=d;if(a=a.next,a===null){if(a=s.shared.pending,a===null)break;d=a,a=d.next,d.next=null,s.lastBaseUpdate=d,s.shared.pending=null}}while(!0);if(c===null&&(u=p),s.baseState=u,s.firstBaseUpdate=l,s.lastBaseUpdate=c,t=s.shared.interleaved,t!==null){s=t;do o|=s.lane,s=s.next;while(s!==t)}else i===null&&(s.shared.lanes=0);Us|=o,e.lanes=o,e.memoizedState=p}}function m3(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(J(191,s));s.call(r)}}}var wa={},er=ls(wa),ta=ls(wa),na=ls(wa);function Cs(e){if(e===wa)throw Error(J(174));return e}function O2(e,t){switch(Me(na,t),Me(ta,e),Me(er,wa),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Vc(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Vc(t,e)}Ue(er),Me(er,t)}function Bi(){Ue(er),Ue(ta),Ue(na)}function Wh(e){Cs(na.current);var t=Cs(er.current),n=Vc(t,e.type);t!==n&&(Me(ta,e),Me(er,n))}function C2(e){ta.current===e&&(Ue(er),Ue(ta))}var Ge=ls(0);function Bu(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ac=[];function D2(){for(var e=0;e<ac.length;e++)ac[e]._workInProgressVersionPrimary=null;ac.length=0}var du=$r.ReactCurrentDispatcher,uc=$r.ReactCurrentBatchConfig,Bs=0,Xe=null,ft=null,gt=null,Uu=!1,Mo=!1,ra=0,wg=0;function _t(){throw Error(J(321))}function F2(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Mn(e[n],t[n]))return!1;return!0}function P2(e,t,n,r,s,i){if(Bs=i,Xe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,du.current=e===null||e.memoizedState===null?kg:Tg,e=n(r,s),Mo){i=0;do{if(Mo=!1,ra=0,25<=i)throw Error(J(301));i+=1,gt=ft=null,t.updateQueue=null,du.current=Eg,e=n(r,s)}while(Mo)}if(du.current=Vu,t=ft!==null&&ft.next!==null,Bs=0,gt=ft=Xe=null,Uu=!1,t)throw Error(J(300));return e}function R2(){var e=ra!==0;return ra=0,e}function Xn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gt===null?Xe.memoizedState=gt=e:gt=gt.next=e,gt}function En(){if(ft===null){var e=Xe.alternate;e=e!==null?e.memoizedState:null}else e=ft.next;var t=gt===null?Xe.memoizedState:gt.next;if(t!==null)gt=t,ft=e;else{if(e===null)throw Error(J(310));ft=e,e={memoizedState:ft.memoizedState,baseState:ft.baseState,baseQueue:ft.baseQueue,queue:ft.queue,next:null},gt===null?Xe.memoizedState=gt=e:gt=gt.next=e}return gt}function sa(e,t){return typeof t=="function"?t(e):t}function lc(e){var t=En(),n=t.queue;if(n===null)throw Error(J(311));n.lastRenderedReducer=e;var r=ft,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var a=o=null,u=null,l=i;do{var c=l.lane;if((Bs&c)===c)u!==null&&(u=u.next={lane:0,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),r=l.hasEagerState?l.eagerState:e(r,l.action);else{var p={lane:c,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null};u===null?(a=u=p,o=r):u=u.next=p,Xe.lanes|=c,Us|=c}l=l.next}while(l!==null&&l!==i);u===null?o=r:u.next=a,Mn(r,t.memoizedState)||(qt=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){s=e;do i=s.lane,Xe.lanes|=i,Us|=i,s=s.next;while(s!==e)}else s===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function cc(e){var t=En(),n=t.queue;if(n===null)throw Error(J(311));n.lastRenderedReducer=e;var r=n.dispatch,s=n.pending,i=t.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=e(i,o.action),o=o.next;while(o!==s);Mn(i,t.memoizedState)||(qt=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Hh(){}function Kh(e,t){var n=Xe,r=En(),s=t(),i=!Mn(r.memoizedState,s);if(i&&(r.memoizedState=s,qt=!0),r=r.queue,L2(Xh.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||gt!==null&&gt.memoizedState.tag&1){if(n.flags|=2048,ia(9,qh.bind(null,n,r,s,t),void 0,null),vt===null)throw Error(J(349));Bs&30||Gh(n,t,s)}return s}function Gh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Xe.updateQueue,t===null?(t={lastEffect:null,stores:null},Xe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function qh(e,t,n,r){t.value=n,t.getSnapshot=r,Yh(t)&&Qh(e)}function Xh(e,t,n){return n(function(){Yh(t)&&Qh(e)})}function Yh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Mn(e,n)}catch{return!0}}function Qh(e){var t=vr(e,1);t!==null&&Rn(t,e,1,-1)}function g3(e){var t=Xn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:e},t.queue=e,e=e.dispatch=Ng.bind(null,Xe,e),[t.memoizedState,e]}function ia(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Xe.updateQueue,t===null?(t={lastEffect:null,stores:null},Xe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Jh(){return En().memoizedState}function mu(e,t,n,r){var s=Xn();Xe.flags|=e,s.memoizedState=ia(1|t,n,void 0,r===void 0?null:r)}function dl(e,t,n,r){var s=En();r=r===void 0?null:r;var i=void 0;if(ft!==null){var o=ft.memoizedState;if(i=o.destroy,r!==null&&F2(r,o.deps)){s.memoizedState=ia(t,n,i,r);return}}Xe.flags|=e,s.memoizedState=ia(1|t,n,i,r)}function y3(e,t){return mu(8390656,8,e,t)}function L2(e,t){return dl(2048,8,e,t)}function Zh(e,t){return dl(4,2,e,t)}function ed(e,t){return dl(4,4,e,t)}function td(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function nd(e,t,n){return n=n!=null?n.concat([e]):null,dl(4,4,td.bind(null,t,e),n)}function z2(){}function rd(e,t){var n=En();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&F2(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function sd(e,t){var n=En();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&F2(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function id(e,t,n){return Bs&21?(Mn(n,t)||(n=ch(),Xe.lanes|=n,Us|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,qt=!0),e.memoizedState=n)}function Sg(e,t){var n=Fe;Fe=n!==0&&4>n?n:4,e(!0);var r=uc.transition;uc.transition={};try{e(!1),t()}finally{Fe=n,uc.transition=r}}function od(){return En().memoizedState}function bg(e,t,n){var r=Jr(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ad(e))ud(t,n);else if(n=Uh(e,t,n,r),n!==null){var s=Rt();Rn(n,e,r,s),ld(n,t,r)}}function Ng(e,t,n){var r=Jr(e),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ad(e))ud(t,s);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,a=i(o,n);if(s.hasEagerState=!0,s.eagerState=a,Mn(a,o)){var u=t.interleaved;u===null?(s.next=s,I2(t)):(s.next=u.next,u.next=s),t.interleaved=s;return}}catch{}finally{}n=Uh(e,t,s,r),n!==null&&(s=Rt(),Rn(n,e,r,s),ld(n,t,r))}}function ad(e){var t=e.alternate;return e===Xe||t!==null&&t===Xe}function ud(e,t){Mo=Uu=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ld(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,m2(e,n)}}var Vu={readContext:Tn,useCallback:_t,useContext:_t,useEffect:_t,useImperativeHandle:_t,useInsertionEffect:_t,useLayoutEffect:_t,useMemo:_t,useReducer:_t,useRef:_t,useState:_t,useDebugValue:_t,useDeferredValue:_t,useTransition:_t,useMutableSource:_t,useSyncExternalStore:_t,useId:_t,unstable_isNewReconciler:!1},kg={readContext:Tn,useCallback:function(e,t){return Xn().memoizedState=[e,t===void 0?null:t],e},useContext:Tn,useEffect:y3,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,mu(4194308,4,td.bind(null,t,e),n)},useLayoutEffect:function(e,t){return mu(4194308,4,e,t)},useInsertionEffect:function(e,t){return mu(4,2,e,t)},useMemo:function(e,t){var n=Xn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Xn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=bg.bind(null,Xe,e),[r.memoizedState,e]},useRef:function(e){var t=Xn();return e={current:e},t.memoizedState=e},useState:g3,useDebugValue:z2,useDeferredValue:function(e){return Xn().memoizedState=e},useTransition:function(){var e=g3(!1),t=e[0];return e=Sg.bind(null,e[1]),Xn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Xe,s=Xn();if(We){if(n===void 0)throw Error(J(407));n=n()}else{if(n=t(),vt===null)throw Error(J(349));Bs&30||Gh(r,t,n)}s.memoizedState=n;var i={value:n,getSnapshot:t};return s.queue=i,y3(Xh.bind(null,r,i,e),[e]),r.flags|=2048,ia(9,qh.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Xn(),t=vt.identifierPrefix;if(We){var n=pr,r=fr;n=(r&~(1<<32-Pn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ra++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=wg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Tg={readContext:Tn,useCallback:rd,useContext:Tn,useEffect:L2,useImperativeHandle:nd,useInsertionEffect:Zh,useLayoutEffect:ed,useMemo:sd,useReducer:lc,useRef:Jh,useState:function(){return lc(sa)},useDebugValue:z2,useDeferredValue:function(e){var t=En();return id(t,ft.memoizedState,e)},useTransition:function(){var e=lc(sa)[0],t=En().memoizedState;return[e,t]},useMutableSource:Hh,useSyncExternalStore:Kh,useId:od,unstable_isNewReconciler:!1},Eg={readContext:Tn,useCallback:rd,useContext:Tn,useEffect:L2,useImperativeHandle:nd,useInsertionEffect:Zh,useLayoutEffect:ed,useMemo:sd,useReducer:cc,useRef:Jh,useState:function(){return cc(sa)},useDebugValue:z2,useDeferredValue:function(e){var t=En();return ft===null?t.memoizedState=e:id(t,ft.memoizedState,e)},useTransition:function(){var e=cc(sa)[0],t=En().memoizedState;return[e,t]},useMutableSource:Hh,useSyncExternalStore:Kh,useId:od,unstable_isNewReconciler:!1};function On(e,t){if(e&&e.defaultProps){t=Ye({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function c1(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Ye({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ml={isMounted:function(e){return(e=e._reactInternals)?Zs(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Rt(),s=Jr(e),i=mr(r,s);i.payload=t,n!=null&&(i.callback=n),t=Yr(e,i,s),t!==null&&(Rn(t,e,s,r),hu(t,e,s))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Rt(),s=Jr(e),i=mr(r,s);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Yr(e,i,s),t!==null&&(Rn(t,e,s,r),hu(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Rt(),r=Jr(e),s=mr(n,r);s.tag=2,t!=null&&(s.callback=t),t=Yr(e,s,r),t!==null&&(Rn(t,e,r,n),hu(t,e,r))}};function v3(e,t,n,r,s,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!Qo(n,r)||!Qo(s,i):!0}function cd(e,t,n){var r=!1,s=ss,i=t.contextType;return typeof i=="object"&&i!==null?i=Tn(i):(s=Yt(t)?Ms:Ot.current,r=t.contextTypes,i=(r=r!=null)?zi(e,s):ss),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ml,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=i),t}function w3(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ml.enqueueReplaceState(t,t.state,null)}function f1(e,t,n,r){var s=e.stateNode;s.props=n,s.state=e.memoizedState,s.refs={},A2(e);var i=t.contextType;typeof i=="object"&&i!==null?s.context=Tn(i):(i=Yt(t)?Ms:Ot.current,s.context=zi(e,i)),s.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(c1(e,t,i,n),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&ml.enqueueReplaceState(s,s.state,null),ju(e,n,s,r),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function Ui(e,t){try{var n="",r=t;do n+=Z0(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:s,digest:null}}function fc(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function p1(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var xg=typeof WeakMap=="function"?WeakMap:Map;function fd(e,t,n){n=mr(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Hu||(Hu=!0,N1=r),p1(e,t)},n}function pd(e,t,n){n=mr(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var s=t.value;n.payload=function(){return r(s)},n.callback=function(){p1(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){p1(e,t),typeof r!="function"&&(Qr===null?Qr=new Set([this]):Qr.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function S3(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new xg;var s=new Set;r.set(t,s)}else s=r.get(t),s===void 0&&(s=new Set,r.set(t,s));s.has(n)||(s.add(n),e=jg.bind(null,e,t,n),t.then(e,e))}function b3(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function N3(e,t,n,r,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=mr(-1,1),t.tag=2,Yr(n,t,1))),n.lanes|=1),e)}var _g=$r.ReactCurrentOwner,qt=!1;function Ft(e,t,n,r){t.child=e===null?Bh(t,null,n,r):ji(t,e.child,n,r)}function k3(e,t,n,r,s){n=n.render;var i=t.ref;return Di(t,s),r=P2(e,t,n,r,i,s),n=R2(),e!==null&&!qt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,wr(e,t,s)):(We&&n&&k2(t),t.flags|=1,Ft(e,t,r,s),t.child)}function T3(e,t,n,r,s){if(e===null){var i=n.type;return typeof i=="function"&&!K2(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,hd(e,t,i,r,s)):(e=wu(n.type,null,r,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Qo,n(o,r)&&e.ref===t.ref)return wr(e,t,s)}return t.flags|=1,e=Zr(i,r),e.ref=t.ref,e.return=t,t.child=e}function hd(e,t,n,r,s){if(e!==null){var i=e.memoizedProps;if(Qo(i,r)&&e.ref===t.ref)if(qt=!1,t.pendingProps=r=i,(e.lanes&s)!==0)e.flags&131072&&(qt=!0);else return t.lanes=e.lanes,wr(e,t,s)}return h1(e,t,n,r,s)}function dd(e,t,n){var r=t.pendingProps,s=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Me($i,nn),nn|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Me($i,nn),nn|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,Me($i,nn),nn|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,Me($i,nn),nn|=r;return Ft(e,t,s,n),t.child}function md(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function h1(e,t,n,r,s){var i=Yt(n)?Ms:Ot.current;return i=zi(t,i),Di(t,s),n=P2(e,t,n,r,i,s),r=R2(),e!==null&&!qt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,wr(e,t,s)):(We&&r&&k2(t),t.flags|=1,Ft(e,t,n,s),t.child)}function E3(e,t,n,r,s){if(Yt(n)){var i=!0;Pu(t)}else i=!1;if(Di(t,s),t.stateNode===null)gu(e,t),cd(t,n,r),f1(t,n,r,s),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var u=o.context,l=n.contextType;typeof l=="object"&&l!==null?l=Tn(l):(l=Yt(n)?Ms:Ot.current,l=zi(t,l));var c=n.getDerivedStateFromProps,p=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==l)&&w3(t,o,r,l),jr=!1;var d=t.memoizedState;o.state=d,ju(t,r,o,s),u=t.memoizedState,a!==r||d!==u||Xt.current||jr?(typeof c=="function"&&(c1(t,n,c,r),u=t.memoizedState),(a=jr||v3(t,n,a,r,d,u,l))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),o.props=r,o.state=u,o.context=l,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Vh(e,t),a=t.memoizedProps,l=t.type===t.elementType?a:On(t.type,a),o.props=l,p=t.pendingProps,d=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Tn(u):(u=Yt(n)?Ms:Ot.current,u=zi(t,u));var w=n.getDerivedStateFromProps;(c=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==p||d!==u)&&w3(t,o,r,u),jr=!1,d=t.memoizedState,o.state=d,ju(t,r,o,s);var b=t.memoizedState;a!==p||d!==b||Xt.current||jr?(typeof w=="function"&&(c1(t,n,w,r),b=t.memoizedState),(l=jr||v3(t,n,l,r,d,b,u)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,b,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,b,u)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=b),o.props=r,o.state=b,o.context=u,r=l):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),r=!1)}return d1(e,t,n,r,i,s)}function d1(e,t,n,r,s,i){md(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return s&&c3(t,n,!1),wr(e,t,i);r=t.stateNode,_g.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=ji(t,e.child,null,i),t.child=ji(t,null,a,i)):Ft(e,t,a,i),t.memoizedState=r.state,s&&c3(t,n,!0),t.child}function gd(e){var t=e.stateNode;t.pendingContext?l3(e,t.pendingContext,t.pendingContext!==t.context):t.context&&l3(e,t.context,!1),O2(e,t.containerInfo)}function x3(e,t,n,r,s){return Mi(),E2(s),t.flags|=256,Ft(e,t,n,r),t.child}var m1={dehydrated:null,treeContext:null,retryLane:0};function g1(e){return{baseLanes:e,cachePool:null,transitions:null}}function yd(e,t,n){var r=t.pendingProps,s=Ge.current,i=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(s&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),Me(Ge,s&1),e===null)return u1(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=vl(o,r,0,null),e=Ls(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=g1(n),t.memoizedState=m1,e):M2(t,o));if(s=e.memoizedState,s!==null&&(a=s.dehydrated,a!==null))return $g(e,t,o,r,a,s,n);if(i){i=r.fallback,o=t.mode,s=e.child,a=s.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&t.child!==s?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Zr(s,u),r.subtreeFlags=s.subtreeFlags&14680064),a!==null?i=Zr(a,i):(i=Ls(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?g1(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=m1,r}return i=e.child,e=i.sibling,r=Zr(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function M2(e,t){return t=vl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function eu(e,t,n,r){return r!==null&&E2(r),ji(t,e.child,null,n),e=M2(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function $g(e,t,n,r,s,i,o){if(n)return t.flags&256?(t.flags&=-257,r=fc(Error(J(422))),eu(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,s=t.mode,r=vl({mode:"visible",children:r.children},s,0,null),i=Ls(i,s,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&ji(t,e.child,null,o),t.child.memoizedState=g1(o),t.memoizedState=m1,i);if(!(t.mode&1))return eu(e,t,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(J(419)),r=fc(i,r,void 0),eu(e,t,o,r)}if(a=(o&e.childLanes)!==0,qt||a){if(r=vt,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,vr(e,s),Rn(r,e,s,-1))}return H2(),r=fc(Error(J(421))),eu(e,t,o,r)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=Bg.bind(null,e),s._reactRetry=t,null):(e=i.treeContext,sn=Xr(s.nextSibling),on=t,We=!0,Dn=null,e!==null&&(wn[Sn++]=fr,wn[Sn++]=pr,wn[Sn++]=js,fr=e.id,pr=e.overflow,js=t),t=M2(t,r.children),t.flags|=4096,t)}function _3(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),l1(e.return,t,n)}function pc(e,t,n,r,s){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function vd(e,t,n){var r=t.pendingProps,s=r.revealOrder,i=r.tail;if(Ft(e,t,r.children,n),r=Ge.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&_3(e,n,t);else if(e.tag===19)_3(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Me(Ge,r),!(t.mode&1))t.memoizedState=null;else switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&Bu(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),pc(t,!1,s,n,i);break;case"backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&Bu(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}pc(t,!0,n,null,i);break;case"together":pc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function gu(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function wr(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Us|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(J(153));if(t.child!==null){for(e=t.child,n=Zr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Zr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ig(e,t,n){switch(t.tag){case 3:gd(t),Mi();break;case 5:Wh(t);break;case 1:Yt(t.type)&&Pu(t);break;case 4:O2(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,s=t.memoizedProps.value;Me(zu,r._currentValue),r._currentValue=s;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Me(Ge,Ge.current&1),t.flags|=128,null):n&t.child.childLanes?yd(e,t,n):(Me(Ge,Ge.current&1),e=wr(e,t,n),e!==null?e.sibling:null);Me(Ge,Ge.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return vd(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Me(Ge,Ge.current),r)break;return null;case 22:case 23:return t.lanes=0,dd(e,t,n)}return wr(e,t,n)}var wd,y1,Sd,bd;wd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};y1=function(){};Sd=function(e,t,n,r){var s=e.memoizedProps;if(s!==r){e=t.stateNode,Cs(er.current);var i=null;switch(n){case"input":s=Mc(e,s),r=Mc(e,r),i=[];break;case"select":s=Ye({},s,{value:void 0}),r=Ye({},r,{value:void 0}),i=[];break;case"textarea":s=Uc(e,s),r=Uc(e,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Du)}Wc(n,r);var o;n=null;for(l in s)if(!r.hasOwnProperty(l)&&s.hasOwnProperty(l)&&s[l]!=null)if(l==="style"){var a=s[l];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else l!=="dangerouslySetInnerHTML"&&l!=="children"&&l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Wo.hasOwnProperty(l)?i||(i=[]):(i=i||[]).push(l,null));for(l in r){var u=r[l];if(a=s!=null?s[l]:void 0,r.hasOwnProperty(l)&&u!==a&&(u!=null||a!=null))if(l==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(l,n)),n=u;else l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(i=i||[]).push(l,u)):l==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(l,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&(Wo.hasOwnProperty(l)?(u!=null&&l==="onScroll"&&Be("scroll",e),i||a===u||(i=[])):(i=i||[]).push(l,u))}n&&(i=i||[]).push("style",n);var l=i;(t.updateQueue=l)&&(t.flags|=4)}};bd=function(e,t,n,r){n!==r&&(t.flags|=4)};function ko(e,t){if(!We)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function $t(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ag(e,t,n){var r=t.pendingProps;switch(T2(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $t(t),null;case 1:return Yt(t.type)&&Fu(),$t(t),null;case 3:return r=t.stateNode,Bi(),Ue(Xt),Ue(Ot),D2(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ja(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Dn!==null&&(E1(Dn),Dn=null))),y1(e,t),$t(t),null;case 5:C2(t);var s=Cs(na.current);if(n=t.type,e!==null&&t.stateNode!=null)Sd(e,t,n,r,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(J(166));return $t(t),null}if(e=Cs(er.current),Ja(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Yn]=t,r[ea]=i,e=(t.mode&1)!==0,n){case"dialog":Be("cancel",r),Be("close",r);break;case"iframe":case"object":case"embed":Be("load",r);break;case"video":case"audio":for(s=0;s<Oo.length;s++)Be(Oo[s],r);break;case"source":Be("error",r);break;case"img":case"image":case"link":Be("error",r),Be("load",r);break;case"details":Be("toggle",r);break;case"input":Rf(r,i),Be("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Be("invalid",r);break;case"textarea":zf(r,i),Be("invalid",r)}Wc(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var a=i[o];o==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&Qa(r.textContent,a,e),s=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&Qa(r.textContent,a,e),s=["children",""+a]):Wo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Be("scroll",r)}switch(n){case"input":Va(r),Lf(r,i,!0);break;case"textarea":Va(r),Mf(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Du)}r=s,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Xp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Yn]=t,e[ea]=r,wd(e,t,!1,!1),t.stateNode=e;e:{switch(o=Hc(n,r),n){case"dialog":Be("cancel",e),Be("close",e),s=r;break;case"iframe":case"object":case"embed":Be("load",e),s=r;break;case"video":case"audio":for(s=0;s<Oo.length;s++)Be(Oo[s],e);s=r;break;case"source":Be("error",e),s=r;break;case"img":case"image":case"link":Be("error",e),Be("load",e),s=r;break;case"details":Be("toggle",e),s=r;break;case"input":Rf(e,r),s=Mc(e,r),Be("invalid",e);break;case"option":s=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},s=Ye({},r,{value:void 0}),Be("invalid",e);break;case"textarea":zf(e,r),s=Uc(e,r),Be("invalid",e);break;default:s=r}Wc(n,s),a=s;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];i==="style"?Jp(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Yp(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Ho(e,u):typeof u=="number"&&Ho(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Wo.hasOwnProperty(i)?u!=null&&i==="onScroll"&&Be("scroll",e):u!=null&&l2(e,i,u,o))}switch(n){case"input":Va(e),Lf(e,r,!1);break;case"textarea":Va(e),Mf(e);break;case"option":r.value!=null&&e.setAttribute("value",""+rs(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Ii(e,!!r.multiple,i,!1):r.defaultValue!=null&&Ii(e,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=Du)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return $t(t),null;case 6:if(e&&t.stateNode!=null)bd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(J(166));if(n=Cs(na.current),Cs(er.current),Ja(t)){if(r=t.stateNode,n=t.memoizedProps,r[Yn]=t,(i=r.nodeValue!==n)&&(e=on,e!==null))switch(e.tag){case 3:Qa(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Qa(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Yn]=t,t.stateNode=r}return $t(t),null;case 13:if(Ue(Ge),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(We&&sn!==null&&t.mode&1&&!(t.flags&128))Mh(),Mi(),t.flags|=98560,i=!1;else if(i=Ja(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(J(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(J(317));i[Yn]=t}else Mi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;$t(t),i=!1}else Dn!==null&&(E1(Dn),Dn=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Ge.current&1?pt===0&&(pt=3):H2())),t.updateQueue!==null&&(t.flags|=4),$t(t),null);case 4:return Bi(),y1(e,t),e===null&&Jo(t.stateNode.containerInfo),$t(t),null;case 10:return $2(t.type._context),$t(t),null;case 17:return Yt(t.type)&&Fu(),$t(t),null;case 19:if(Ue(Ge),i=t.memoizedState,i===null)return $t(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)ko(i,!1);else{if(pt!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Bu(e),o!==null){for(t.flags|=128,ko(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Me(Ge,Ge.current&1|2),t.child}e=e.sibling}i.tail!==null&&it()>Vi&&(t.flags|=128,r=!0,ko(i,!1),t.lanes=4194304)}else{if(!r)if(e=Bu(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ko(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!We)return $t(t),null}else 2*it()-i.renderingStartTime>Vi&&n!==1073741824&&(t.flags|=128,r=!0,ko(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=it(),t.sibling=null,n=Ge.current,Me(Ge,r?n&1|2:n&1),t):($t(t),null);case 22:case 23:return W2(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?nn&1073741824&&($t(t),t.subtreeFlags&6&&(t.flags|=8192)):$t(t),null;case 24:return null;case 25:return null}throw Error(J(156,t.tag))}function Og(e,t){switch(T2(t),t.tag){case 1:return Yt(t.type)&&Fu(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Bi(),Ue(Xt),Ue(Ot),D2(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return C2(t),null;case 13:if(Ue(Ge),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(J(340));Mi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ue(Ge),null;case 4:return Bi(),null;case 10:return $2(t.type._context),null;case 22:case 23:return W2(),null;case 24:return null;default:return null}}var tu=!1,At=!1,Cg=typeof WeakSet=="function"?WeakSet:Set,oe=null;function _i(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){nt(e,t,r)}else n.current=null}function v1(e,t,n){try{n()}catch(r){nt(e,t,r)}}var $3=!1;function Dg(e,t){if(t1=Au,e=xh(),N2(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,l=0,c=0,p=e,d=null;t:for(;;){for(var w;p!==n||s!==0&&p.nodeType!==3||(a=o+s),p!==i||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(w=p.firstChild)!==null;)d=p,p=w;for(;;){if(p===e)break t;if(d===n&&++l===s&&(a=o),d===i&&++c===r&&(u=o),(w=p.nextSibling)!==null)break;p=d,d=p.parentNode}p=w}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(n1={focusedElem:e,selectionRange:n},Au=!1,oe=t;oe!==null;)if(t=oe,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,oe=e;else for(;oe!==null;){t=oe;try{var b=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var E=b.memoizedProps,_=b.memoizedState,N=t.stateNode,x=N.getSnapshotBeforeUpdate(t.elementType===t.type?E:On(t.type,E),_);N.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var $=t.stateNode.containerInfo;$.nodeType===1?$.textContent="":$.nodeType===9&&$.documentElement&&$.removeChild($.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(J(163))}}catch(F){nt(t,t.return,F)}if(e=t.sibling,e!==null){e.return=t.return,oe=e;break}oe=t.return}return b=$3,$3=!1,b}function jo(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&e)===e){var i=s.destroy;s.destroy=void 0,i!==void 0&&v1(t,n,i)}s=s.next}while(s!==r)}}function gl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function w1(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Nd(e){var t=e.alternate;t!==null&&(e.alternate=null,Nd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Yn],delete t[ea],delete t[i1],delete t[mg],delete t[gg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function kd(e){return e.tag===5||e.tag===3||e.tag===4}function I3(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||kd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function S1(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Du));else if(r!==4&&(e=e.child,e!==null))for(S1(e,t,n),e=e.sibling;e!==null;)S1(e,t,n),e=e.sibling}function b1(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(b1(e,t,n),e=e.sibling;e!==null;)b1(e,t,n),e=e.sibling}var kt=null,Cn=!1;function Lr(e,t,n){for(n=n.child;n!==null;)Td(e,t,n),n=n.sibling}function Td(e,t,n){if(Zn&&typeof Zn.onCommitFiberUnmount=="function")try{Zn.onCommitFiberUnmount(ul,n)}catch{}switch(n.tag){case 5:At||_i(n,t);case 6:var r=kt,s=Cn;kt=null,Lr(e,t,n),kt=r,Cn=s,kt!==null&&(Cn?(e=kt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):kt.removeChild(n.stateNode));break;case 18:kt!==null&&(Cn?(e=kt,n=n.stateNode,e.nodeType===8?ic(e.parentNode,n):e.nodeType===1&&ic(e,n),Xo(e)):ic(kt,n.stateNode));break;case 4:r=kt,s=Cn,kt=n.stateNode.containerInfo,Cn=!0,Lr(e,t,n),kt=r,Cn=s;break;case 0:case 11:case 14:case 15:if(!At&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&v1(n,t,o),s=s.next}while(s!==r)}Lr(e,t,n);break;case 1:if(!At&&(_i(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){nt(n,t,a)}Lr(e,t,n);break;case 21:Lr(e,t,n);break;case 22:n.mode&1?(At=(r=At)||n.memoizedState!==null,Lr(e,t,n),At=r):Lr(e,t,n);break;default:Lr(e,t,n)}}function A3(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Cg),t.forEach(function(r){var s=Ug.bind(null,e,r);n.has(r)||(n.add(r),r.then(s,s))})}}function An(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:kt=a.stateNode,Cn=!1;break e;case 3:kt=a.stateNode.containerInfo,Cn=!0;break e;case 4:kt=a.stateNode.containerInfo,Cn=!0;break e}a=a.return}if(kt===null)throw Error(J(160));Td(i,o,s),kt=null,Cn=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(l){nt(s,t,l)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Ed(t,e),t=t.sibling}function Ed(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(An(t,e),qn(e),r&4){try{jo(3,e,e.return),gl(3,e)}catch(E){nt(e,e.return,E)}try{jo(5,e,e.return)}catch(E){nt(e,e.return,E)}}break;case 1:An(t,e),qn(e),r&512&&n!==null&&_i(n,n.return);break;case 5:if(An(t,e),qn(e),r&512&&n!==null&&_i(n,n.return),e.flags&32){var s=e.stateNode;try{Ho(s,"")}catch(E){nt(e,e.return,E)}}if(r&4&&(s=e.stateNode,s!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&Gp(s,i),Hc(a,o);var l=Hc(a,i);for(o=0;o<u.length;o+=2){var c=u[o],p=u[o+1];c==="style"?Jp(s,p):c==="dangerouslySetInnerHTML"?Yp(s,p):c==="children"?Ho(s,p):l2(s,c,p,l)}switch(a){case"input":jc(s,i);break;case"textarea":qp(s,i);break;case"select":var d=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var w=i.value;w!=null?Ii(s,!!i.multiple,w,!1):d!==!!i.multiple&&(i.defaultValue!=null?Ii(s,!!i.multiple,i.defaultValue,!0):Ii(s,!!i.multiple,i.multiple?[]:"",!1))}s[ea]=i}catch(E){nt(e,e.return,E)}}break;case 6:if(An(t,e),qn(e),r&4){if(e.stateNode===null)throw Error(J(162));s=e.stateNode,i=e.memoizedProps;try{s.nodeValue=i}catch(E){nt(e,e.return,E)}}break;case 3:if(An(t,e),qn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Xo(t.containerInfo)}catch(E){nt(e,e.return,E)}break;case 4:An(t,e),qn(e);break;case 13:An(t,e),qn(e),s=e.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(U2=it())),r&4&&A3(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(At=(l=At)||c,An(t,e),At=l):An(t,e),qn(e),r&8192){if(l=e.memoizedState!==null,(e.stateNode.isHidden=l)&&!c&&e.mode&1)for(oe=e,c=e.child;c!==null;){for(p=oe=c;oe!==null;){switch(d=oe,w=d.child,d.tag){case 0:case 11:case 14:case 15:jo(4,d,d.return);break;case 1:_i(d,d.return);var b=d.stateNode;if(typeof b.componentWillUnmount=="function"){r=d,n=d.return;try{t=r,b.props=t.memoizedProps,b.state=t.memoizedState,b.componentWillUnmount()}catch(E){nt(r,n,E)}}break;case 5:_i(d,d.return);break;case 22:if(d.memoizedState!==null){C3(p);continue}}w!==null?(w.return=d,oe=w):C3(p)}c=c.sibling}e:for(c=null,p=e;;){if(p.tag===5){if(c===null){c=p;try{s=p.stateNode,l?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=Qp("display",o))}catch(E){nt(e,e.return,E)}}}else if(p.tag===6){if(c===null)try{p.stateNode.nodeValue=l?"":p.memoizedProps}catch(E){nt(e,e.return,E)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;c===p&&(c=null),p=p.return}c===p&&(c=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:An(t,e),qn(e),r&4&&A3(e);break;case 21:break;default:An(t,e),qn(e)}}function qn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(kd(n)){var r=n;break e}n=n.return}throw Error(J(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(Ho(s,""),r.flags&=-33);var i=I3(e);b1(e,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,a=I3(e);S1(e,a,o);break;default:throw Error(J(161))}}catch(u){nt(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Fg(e,t,n){oe=e,xd(e)}function xd(e,t,n){for(var r=(e.mode&1)!==0;oe!==null;){var s=oe,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||tu;if(!o){var a=s.alternate,u=a!==null&&a.memoizedState!==null||At;a=tu;var l=At;if(tu=o,(At=u)&&!l)for(oe=s;oe!==null;)o=oe,u=o.child,o.tag===22&&o.memoizedState!==null?D3(s):u!==null?(u.return=o,oe=u):D3(s);for(;i!==null;)oe=i,xd(i),i=i.sibling;oe=s,tu=a,At=l}O3(e)}else s.subtreeFlags&8772&&i!==null?(i.return=s,oe=i):O3(e)}}function O3(e){for(;oe!==null;){var t=oe;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:At||gl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!At)if(n===null)r.componentDidMount();else{var s=t.elementType===t.type?n.memoizedProps:On(t.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&m3(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}m3(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var l=t.alternate;if(l!==null){var c=l.memoizedState;if(c!==null){var p=c.dehydrated;p!==null&&Xo(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(J(163))}At||t.flags&512&&w1(t)}catch(d){nt(t,t.return,d)}}if(t===e){oe=null;break}if(n=t.sibling,n!==null){n.return=t.return,oe=n;break}oe=t.return}}function C3(e){for(;oe!==null;){var t=oe;if(t===e){oe=null;break}var n=t.sibling;if(n!==null){n.return=t.return,oe=n;break}oe=t.return}}function D3(e){for(;oe!==null;){var t=oe;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{gl(4,t)}catch(u){nt(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var s=t.return;try{r.componentDidMount()}catch(u){nt(t,s,u)}}var i=t.return;try{w1(t)}catch(u){nt(t,i,u)}break;case 5:var o=t.return;try{w1(t)}catch(u){nt(t,o,u)}}}catch(u){nt(t,t.return,u)}if(t===e){oe=null;break}var a=t.sibling;if(a!==null){a.return=t.return,oe=a;break}oe=t.return}}var Pg=Math.ceil,Wu=$r.ReactCurrentDispatcher,j2=$r.ReactCurrentOwner,kn=$r.ReactCurrentBatchConfig,Ie=0,vt=null,ut=null,Et=0,nn=0,$i=ls(0),pt=0,oa=null,Us=0,yl=0,B2=0,Bo=null,Gt=null,U2=0,Vi=1/0,or=null,Hu=!1,N1=null,Qr=null,nu=!1,Wr=null,Ku=0,Uo=0,k1=null,yu=-1,vu=0;function Rt(){return Ie&6?it():yu!==-1?yu:yu=it()}function Jr(e){return e.mode&1?Ie&2&&Et!==0?Et&-Et:vg.transition!==null?(vu===0&&(vu=ch()),vu):(e=Fe,e!==0||(e=window.event,e=e===void 0?16:yh(e.type)),e):1}function Rn(e,t,n,r){if(50<Uo)throw Uo=0,k1=null,Error(J(185));ga(e,n,r),(!(Ie&2)||e!==vt)&&(e===vt&&(!(Ie&2)&&(yl|=n),pt===4&&Ur(e,Et)),Qt(e,r),n===1&&Ie===0&&!(t.mode&1)&&(Vi=it()+500,hl&&cs()))}function Qt(e,t){var n=e.callbackNode;vm(e,t);var r=Iu(e,e===vt?Et:0);if(r===0)n!==null&&Uf(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Uf(n),t===1)e.tag===0?yg(F3.bind(null,e)):Rh(F3.bind(null,e)),hg(function(){!(Ie&6)&&cs()}),n=null;else{switch(fh(r)){case 1:n=d2;break;case 4:n=uh;break;case 16:n=$u;break;case 536870912:n=lh;break;default:n=$u}n=Fd(n,_d.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function _d(e,t){if(yu=-1,vu=0,Ie&6)throw Error(J(327));var n=e.callbackNode;if(Fi()&&e.callbackNode!==n)return null;var r=Iu(e,e===vt?Et:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Gu(e,r);else{t=r;var s=Ie;Ie|=2;var i=Id();(vt!==e||Et!==t)&&(or=null,Vi=it()+500,Rs(e,t));do try{zg();break}catch(a){$d(e,a)}while(!0);_2(),Wu.current=i,Ie=s,ut!==null?t=0:(vt=null,Et=0,t=pt)}if(t!==0){if(t===2&&(s=Yc(e),s!==0&&(r=s,t=T1(e,s))),t===1)throw n=oa,Rs(e,0),Ur(e,r),Qt(e,it()),n;if(t===6)Ur(e,r);else{if(s=e.current.alternate,!(r&30)&&!Rg(s)&&(t=Gu(e,r),t===2&&(i=Yc(e),i!==0&&(r=i,t=T1(e,i))),t===1))throw n=oa,Rs(e,0),Ur(e,r),Qt(e,it()),n;switch(e.finishedWork=s,e.finishedLanes=r,t){case 0:case 1:throw Error(J(345));case 2:_s(e,Gt,or);break;case 3:if(Ur(e,r),(r&130023424)===r&&(t=U2+500-it(),10<t)){if(Iu(e,0)!==0)break;if(s=e.suspendedLanes,(s&r)!==r){Rt(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=s1(_s.bind(null,e,Gt,or),t);break}_s(e,Gt,or);break;case 4:if(Ur(e,r),(r&4194240)===r)break;for(t=e.eventTimes,s=-1;0<r;){var o=31-Pn(r);i=1<<o,o=t[o],o>s&&(s=o),r&=~i}if(r=s,r=it()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Pg(r/1960))-r,10<r){e.timeoutHandle=s1(_s.bind(null,e,Gt,or),r);break}_s(e,Gt,or);break;case 5:_s(e,Gt,or);break;default:throw Error(J(329))}}}return Qt(e,it()),e.callbackNode===n?_d.bind(null,e):null}function T1(e,t){var n=Bo;return e.current.memoizedState.isDehydrated&&(Rs(e,t).flags|=256),e=Gu(e,t),e!==2&&(t=Gt,Gt=n,t!==null&&E1(t)),e}function E1(e){Gt===null?Gt=e:Gt.push.apply(Gt,e)}function Rg(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!Mn(i(),s))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ur(e,t){for(t&=~B2,t&=~yl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Pn(t),r=1<<n;e[n]=-1,t&=~r}}function F3(e){if(Ie&6)throw Error(J(327));Fi();var t=Iu(e,0);if(!(t&1))return Qt(e,it()),null;var n=Gu(e,t);if(e.tag!==0&&n===2){var r=Yc(e);r!==0&&(t=r,n=T1(e,r))}if(n===1)throw n=oa,Rs(e,0),Ur(e,t),Qt(e,it()),n;if(n===6)throw Error(J(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,_s(e,Gt,or),Qt(e,it()),null}function V2(e,t){var n=Ie;Ie|=1;try{return e(t)}finally{Ie=n,Ie===0&&(Vi=it()+500,hl&&cs())}}function Vs(e){Wr!==null&&Wr.tag===0&&!(Ie&6)&&Fi();var t=Ie;Ie|=1;var n=kn.transition,r=Fe;try{if(kn.transition=null,Fe=1,e)return e()}finally{Fe=r,kn.transition=n,Ie=t,!(Ie&6)&&cs()}}function W2(){nn=$i.current,Ue($i)}function Rs(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,pg(n)),ut!==null)for(n=ut.return;n!==null;){var r=n;switch(T2(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Fu();break;case 3:Bi(),Ue(Xt),Ue(Ot),D2();break;case 5:C2(r);break;case 4:Bi();break;case 13:Ue(Ge);break;case 19:Ue(Ge);break;case 10:$2(r.type._context);break;case 22:case 23:W2()}n=n.return}if(vt=e,ut=e=Zr(e.current,null),Et=nn=t,pt=0,oa=null,B2=yl=Us=0,Gt=Bo=null,Os!==null){for(t=0;t<Os.length;t++)if(n=Os[t],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}Os=null}return e}function $d(e,t){do{var n=ut;try{if(_2(),du.current=Vu,Uu){for(var r=Xe.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}Uu=!1}if(Bs=0,gt=ft=Xe=null,Mo=!1,ra=0,j2.current=null,n===null||n.return===null){pt=1,oa=t,ut=null;break}e:{var i=e,o=n.return,a=n,u=t;if(t=Et,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var l=u,c=a,p=c.tag;if(!(c.mode&1)&&(p===0||p===11||p===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var w=b3(o);if(w!==null){w.flags&=-257,N3(w,o,a,i,t),w.mode&1&&S3(i,l,t),t=w,u=l;var b=t.updateQueue;if(b===null){var E=new Set;E.add(u),t.updateQueue=E}else b.add(u);break e}else{if(!(t&1)){S3(i,l,t),H2();break e}u=Error(J(426))}}else if(We&&a.mode&1){var _=b3(o);if(_!==null){!(_.flags&65536)&&(_.flags|=256),N3(_,o,a,i,t),E2(Ui(u,a));break e}}i=u=Ui(u,a),pt!==4&&(pt=2),Bo===null?Bo=[i]:Bo.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var N=fd(i,u,t);d3(i,N);break e;case 1:a=u;var x=i.type,$=i.stateNode;if(!(i.flags&128)&&(typeof x.getDerivedStateFromError=="function"||$!==null&&typeof $.componentDidCatch=="function"&&(Qr===null||!Qr.has($)))){i.flags|=65536,t&=-t,i.lanes|=t;var F=pd(i,a,t);d3(i,F);break e}}i=i.return}while(i!==null)}Od(n)}catch(z){t=z,ut===n&&n!==null&&(ut=n=n.return);continue}break}while(!0)}function Id(){var e=Wu.current;return Wu.current=Vu,e===null?Vu:e}function H2(){(pt===0||pt===3||pt===2)&&(pt=4),vt===null||!(Us&268435455)&&!(yl&268435455)||Ur(vt,Et)}function Gu(e,t){var n=Ie;Ie|=2;var r=Id();(vt!==e||Et!==t)&&(or=null,Rs(e,t));do try{Lg();break}catch(s){$d(e,s)}while(!0);if(_2(),Ie=n,Wu.current=r,ut!==null)throw Error(J(261));return vt=null,Et=0,pt}function Lg(){for(;ut!==null;)Ad(ut)}function zg(){for(;ut!==null&&!lm();)Ad(ut)}function Ad(e){var t=Dd(e.alternate,e,nn);e.memoizedProps=e.pendingProps,t===null?Od(e):ut=t,j2.current=null}function Od(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Og(n,t),n!==null){n.flags&=32767,ut=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{pt=6,ut=null;return}}else if(n=Ag(n,t,nn),n!==null){ut=n;return}if(t=t.sibling,t!==null){ut=t;return}ut=t=e}while(t!==null);pt===0&&(pt=5)}function _s(e,t,n){var r=Fe,s=kn.transition;try{kn.transition=null,Fe=1,Mg(e,t,n,r)}finally{kn.transition=s,Fe=r}return null}function Mg(e,t,n,r){do Fi();while(Wr!==null);if(Ie&6)throw Error(J(327));n=e.finishedWork;var s=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(J(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(wm(e,i),e===vt&&(ut=vt=null,Et=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||nu||(nu=!0,Fd($u,function(){return Fi(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=kn.transition,kn.transition=null;var o=Fe;Fe=1;var a=Ie;Ie|=4,j2.current=null,Dg(e,n),Ed(n,e),ig(n1),Au=!!t1,n1=t1=null,e.current=n,Fg(n),cm(),Ie=a,Fe=o,kn.transition=i}else e.current=n;if(nu&&(nu=!1,Wr=e,Ku=s),i=e.pendingLanes,i===0&&(Qr=null),hm(n.stateNode),Qt(e,it()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)s=t[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(Hu)throw Hu=!1,e=N1,N1=null,e;return Ku&1&&e.tag!==0&&Fi(),i=e.pendingLanes,i&1?e===k1?Uo++:(Uo=0,k1=e):Uo=0,cs(),null}function Fi(){if(Wr!==null){var e=fh(Ku),t=kn.transition,n=Fe;try{if(kn.transition=null,Fe=16>e?16:e,Wr===null)var r=!1;else{if(e=Wr,Wr=null,Ku=0,Ie&6)throw Error(J(331));var s=Ie;for(Ie|=4,oe=e.current;oe!==null;){var i=oe,o=i.child;if(oe.flags&16){var a=i.deletions;if(a!==null){for(var u=0;u<a.length;u++){var l=a[u];for(oe=l;oe!==null;){var c=oe;switch(c.tag){case 0:case 11:case 15:jo(8,c,i)}var p=c.child;if(p!==null)p.return=c,oe=p;else for(;oe!==null;){c=oe;var d=c.sibling,w=c.return;if(Nd(c),c===l){oe=null;break}if(d!==null){d.return=w,oe=d;break}oe=w}}}var b=i.alternate;if(b!==null){var E=b.child;if(E!==null){b.child=null;do{var _=E.sibling;E.sibling=null,E=_}while(E!==null)}}oe=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,oe=o;else e:for(;oe!==null;){if(i=oe,i.flags&2048)switch(i.tag){case 0:case 11:case 15:jo(9,i,i.return)}var N=i.sibling;if(N!==null){N.return=i.return,oe=N;break e}oe=i.return}}var x=e.current;for(oe=x;oe!==null;){o=oe;var $=o.child;if(o.subtreeFlags&2064&&$!==null)$.return=o,oe=$;else e:for(o=x;oe!==null;){if(a=oe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:gl(9,a)}}catch(z){nt(a,a.return,z)}if(a===o){oe=null;break e}var F=a.sibling;if(F!==null){F.return=a.return,oe=F;break e}oe=a.return}}if(Ie=s,cs(),Zn&&typeof Zn.onPostCommitFiberRoot=="function")try{Zn.onPostCommitFiberRoot(ul,e)}catch{}r=!0}return r}finally{Fe=n,kn.transition=t}}return!1}function P3(e,t,n){t=Ui(n,t),t=fd(e,t,1),e=Yr(e,t,1),t=Rt(),e!==null&&(ga(e,1,t),Qt(e,t))}function nt(e,t,n){if(e.tag===3)P3(e,e,n);else for(;t!==null;){if(t.tag===3){P3(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Qr===null||!Qr.has(r))){e=Ui(n,e),e=pd(t,e,1),t=Yr(t,e,1),e=Rt(),t!==null&&(ga(t,1,e),Qt(t,e));break}}t=t.return}}function jg(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Rt(),e.pingedLanes|=e.suspendedLanes&n,vt===e&&(Et&n)===n&&(pt===4||pt===3&&(Et&130023424)===Et&&500>it()-U2?Rs(e,0):B2|=n),Qt(e,t)}function Cd(e,t){t===0&&(e.mode&1?(t=Ka,Ka<<=1,!(Ka&130023424)&&(Ka=4194304)):t=1);var n=Rt();e=vr(e,t),e!==null&&(ga(e,t,n),Qt(e,n))}function Bg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Cd(e,n)}function Ug(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(J(314))}r!==null&&r.delete(t),Cd(e,n)}var Dd;Dd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Xt.current)qt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return qt=!1,Ig(e,t,n);qt=!!(e.flags&131072)}else qt=!1,We&&t.flags&1048576&&Lh(t,Lu,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;gu(e,t),e=t.pendingProps;var s=zi(t,Ot.current);Di(t,n),s=P2(null,t,r,e,s,n);var i=R2();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Yt(r)?(i=!0,Pu(t)):i=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,A2(t),s.updater=ml,t.stateNode=s,s._reactInternals=t,f1(t,r,e,n),t=d1(null,t,r,!0,i,n)):(t.tag=0,We&&i&&k2(t),Ft(null,t,s,n),t=t.child),t;case 16:r=t.elementType;e:{switch(gu(e,t),e=t.pendingProps,s=r._init,r=s(r._payload),t.type=r,s=t.tag=Wg(r),e=On(r,e),s){case 0:t=h1(null,t,r,e,n);break e;case 1:t=E3(null,t,r,e,n);break e;case 11:t=k3(null,t,r,e,n);break e;case 14:t=T3(null,t,r,On(r.type,e),n);break e}throw Error(J(306,r,""))}return t;case 0:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:On(r,s),h1(e,t,r,s,n);case 1:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:On(r,s),E3(e,t,r,s,n);case 3:e:{if(gd(t),e===null)throw Error(J(387));r=t.pendingProps,i=t.memoizedState,s=i.element,Vh(e,t),ju(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){s=Ui(Error(J(423)),t),t=x3(e,t,r,n,s);break e}else if(r!==s){s=Ui(Error(J(424)),t),t=x3(e,t,r,n,s);break e}else for(sn=Xr(t.stateNode.containerInfo.firstChild),on=t,We=!0,Dn=null,n=Bh(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Mi(),r===s){t=wr(e,t,n);break e}Ft(e,t,r,n)}t=t.child}return t;case 5:return Wh(t),e===null&&u1(t),r=t.type,s=t.pendingProps,i=e!==null?e.memoizedProps:null,o=s.children,r1(r,s)?o=null:i!==null&&r1(r,i)&&(t.flags|=32),md(e,t),Ft(e,t,o,n),t.child;case 6:return e===null&&u1(t),null;case 13:return yd(e,t,n);case 4:return O2(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ji(t,null,r,n):Ft(e,t,r,n),t.child;case 11:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:On(r,s),k3(e,t,r,s,n);case 7:return Ft(e,t,t.pendingProps,n),t.child;case 8:return Ft(e,t,t.pendingProps.children,n),t.child;case 12:return Ft(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,s=t.pendingProps,i=t.memoizedProps,o=s.value,Me(zu,r._currentValue),r._currentValue=o,i!==null)if(Mn(i.value,o)){if(i.children===s.children&&!Xt.current){t=wr(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){o=i.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=mr(-1,n&-n),u.tag=2;var l=i.updateQueue;if(l!==null){l=l.shared;var c=l.pending;c===null?u.next=u:(u.next=c.next,c.next=u),l.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),l1(i.return,n,t),a.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(J(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),l1(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}Ft(e,t,s.children,n),t=t.child}return t;case 9:return s=t.type,r=t.pendingProps.children,Di(t,n),s=Tn(s),r=r(s),t.flags|=1,Ft(e,t,r,n),t.child;case 14:return r=t.type,s=On(r,t.pendingProps),s=On(r.type,s),T3(e,t,r,s,n);case 15:return hd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:On(r,s),gu(e,t),t.tag=1,Yt(r)?(e=!0,Pu(t)):e=!1,Di(t,n),cd(t,r,s),f1(t,r,s,n),d1(null,t,r,!0,e,n);case 19:return vd(e,t,n);case 22:return dd(e,t,n)}throw Error(J(156,t.tag))};function Fd(e,t){return ah(e,t)}function Vg(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nn(e,t,n,r){return new Vg(e,t,n,r)}function K2(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Wg(e){if(typeof e=="function")return K2(e)?1:0;if(e!=null){if(e=e.$$typeof,e===f2)return 11;if(e===p2)return 14}return 2}function Zr(e,t){var n=e.alternate;return n===null?(n=Nn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function wu(e,t,n,r,s,i){var o=2;if(r=e,typeof e=="function")K2(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case vi:return Ls(n.children,s,i,t);case c2:o=8,s|=8;break;case Pc:return e=Nn(12,n,t,s|2),e.elementType=Pc,e.lanes=i,e;case Rc:return e=Nn(13,n,t,s),e.elementType=Rc,e.lanes=i,e;case Lc:return e=Nn(19,n,t,s),e.elementType=Lc,e.lanes=i,e;case Wp:return vl(n,s,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Up:o=10;break e;case Vp:o=9;break e;case f2:o=11;break e;case p2:o=14;break e;case Mr:o=16,r=null;break e}throw Error(J(130,e==null?e:typeof e,""))}return t=Nn(o,n,t,s),t.elementType=e,t.type=r,t.lanes=i,t}function Ls(e,t,n,r){return e=Nn(7,e,r,t),e.lanes=n,e}function vl(e,t,n,r){return e=Nn(22,e,r,t),e.elementType=Wp,e.lanes=n,e.stateNode={isHidden:!1},e}function hc(e,t,n){return e=Nn(6,e,null,t),e.lanes=n,e}function dc(e,t,n){return t=Nn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Hg(e,t,n,r,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ql(0),this.expirationTimes=ql(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ql(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function G2(e,t,n,r,s,i,o,a,u){return e=new Hg(e,t,n,a,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Nn(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},A2(i),e}function Kg(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:yi,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Pd(e){if(!e)return ss;e=e._reactInternals;e:{if(Zs(e)!==e||e.tag!==1)throw Error(J(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Yt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(J(171))}if(e.tag===1){var n=e.type;if(Yt(n))return Ph(e,n,t)}return t}function Rd(e,t,n,r,s,i,o,a,u){return e=G2(n,r,!0,e,s,i,o,a,u),e.context=Pd(null),n=e.current,r=Rt(),s=Jr(n),i=mr(r,s),i.callback=t??null,Yr(n,i,s),e.current.lanes=s,ga(e,s,r),Qt(e,r),e}function wl(e,t,n,r){var s=t.current,i=Rt(),o=Jr(s);return n=Pd(n),t.context===null?t.context=n:t.pendingContext=n,t=mr(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Yr(s,t,o),e!==null&&(Rn(e,s,o,i),hu(e,s,o)),o}function qu(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function R3(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function q2(e,t){R3(e,t),(e=e.alternate)&&R3(e,t)}function Gg(){return null}var Ld=typeof reportError=="function"?reportError:function(e){console.error(e)};function X2(e){this._internalRoot=e}Sl.prototype.render=X2.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(J(409));wl(e,t,null,null)};Sl.prototype.unmount=X2.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Vs(function(){wl(null,e,null,null)}),t[yr]=null}};function Sl(e){this._internalRoot=e}Sl.prototype.unstable_scheduleHydration=function(e){if(e){var t=dh();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Br.length&&t!==0&&t<Br[n].priority;n++);Br.splice(n,0,e),n===0&&gh(e)}};function Y2(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function bl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function L3(){}function qg(e,t,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var l=qu(o);i.call(l)}}var o=Rd(t,r,e,0,null,!1,!1,"",L3);return e._reactRootContainer=o,e[yr]=o.current,Jo(e.nodeType===8?e.parentNode:e),Vs(),o}for(;s=e.lastChild;)e.removeChild(s);if(typeof r=="function"){var a=r;r=function(){var l=qu(u);a.call(l)}}var u=G2(e,0,!1,null,null,!1,!1,"",L3);return e._reactRootContainer=u,e[yr]=u.current,Jo(e.nodeType===8?e.parentNode:e),Vs(function(){wl(t,u,n,r)}),u}function Nl(e,t,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var a=s;s=function(){var u=qu(o);a.call(u)}}wl(t,o,e,s)}else o=qg(n,t,e,s,r);return qu(o)}ph=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ao(t.pendingLanes);n!==0&&(m2(t,n|1),Qt(t,it()),!(Ie&6)&&(Vi=it()+500,cs()))}break;case 13:Vs(function(){var r=vr(e,1);if(r!==null){var s=Rt();Rn(r,e,1,s)}}),q2(e,1)}};g2=function(e){if(e.tag===13){var t=vr(e,134217728);if(t!==null){var n=Rt();Rn(t,e,134217728,n)}q2(e,134217728)}};hh=function(e){if(e.tag===13){var t=Jr(e),n=vr(e,t);if(n!==null){var r=Rt();Rn(n,e,t,r)}q2(e,t)}};dh=function(){return Fe};mh=function(e,t){var n=Fe;try{return Fe=e,t()}finally{Fe=n}};Gc=function(e,t,n){switch(t){case"input":if(jc(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var s=pl(r);if(!s)throw Error(J(90));Kp(r),jc(r,s)}}}break;case"textarea":qp(e,n);break;case"select":t=n.value,t!=null&&Ii(e,!!n.multiple,t,!1)}};th=V2;nh=Vs;var Xg={usingClientEntryPoint:!1,Events:[va,Ni,pl,Zp,eh,V2]},To={findFiberByHostInstance:As,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Yg={bundleType:To.bundleType,version:To.version,rendererPackageName:To.rendererPackageName,rendererConfig:To.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:$r.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ih(e),e===null?null:e.stateNode},findFiberByHostInstance:To.findFiberByHostInstance||Gg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ru=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ru.isDisabled&&ru.supportsFiber)try{ul=ru.inject(Yg),Zn=ru}catch{}}ln.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Xg;ln.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Y2(t))throw Error(J(200));return Kg(e,t,null,n)};ln.createRoot=function(e,t){if(!Y2(e))throw Error(J(299));var n=!1,r="",s=Ld;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=G2(e,1,!1,null,null,n,!1,r,s),e[yr]=t.current,Jo(e.nodeType===8?e.parentNode:e),new X2(t)};ln.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(J(188)):(e=Object.keys(e).join(","),Error(J(268,e)));return e=ih(t),e=e===null?null:e.stateNode,e};ln.flushSync=function(e){return Vs(e)};ln.hydrate=function(e,t,n){if(!bl(t))throw Error(J(200));return Nl(null,e,t,!0,n)};ln.hydrateRoot=function(e,t,n){if(!Y2(e))throw Error(J(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=Ld;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Rd(t,null,e,1,n??null,s,!1,i,o),e[yr]=t.current,Jo(e),r)for(e=0;e<r.length;e++)n=r[e],s=n._getVersion,s=s(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,s]:t.mutableSourceEagerHydrationData.push(n,s);return new Sl(t)};ln.render=function(e,t,n){if(!bl(t))throw Error(J(200));return Nl(null,e,t,!1,n)};ln.unmountComponentAtNode=function(e){if(!bl(e))throw Error(J(40));return e._reactRootContainer?(Vs(function(){Nl(null,null,e,!1,function(){e._reactRootContainer=null,e[yr]=null})}),!0):!1};ln.unstable_batchedUpdates=V2;ln.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!bl(n))throw Error(J(200));if(e==null||e._reactInternals===void 0)throw Error(J(38));return Nl(e,t,n,!1,r)};ln.version="18.3.1-next-f1338f8080-20240426";function zd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zd)}catch(e){console.error(e)}}zd(),zp.exports=ln;var Qg=zp.exports,z3=Qg;Dc.createRoot=z3.createRoot,Dc.hydrateRoot=z3.hydrateRoot;(function(){var e;function t(h){var g=0;return function(){return g<h.length?{done:!1,value:h[g++]}:{done:!0}}}var n=typeof Object.defineProperties=="function"?Object.defineProperty:function(h,g,v){return h==Array.prototype||h==Object.prototype||(h[g]=v.value),h};function r(h){h=[typeof globalThis=="object"&&globalThis,h,typeof window=="object"&&window,typeof self=="object"&&self,typeof Jn=="object"&&Jn];for(var g=0;g<h.length;++g){var v=h[g];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var s=r(this);function i(h,g){if(g)e:{var v=s;h=h.split(".");for(var C=0;C<h.length-1;C++){var j=h[C];if(!(j in v))break e;v=v[j]}h=h[h.length-1],C=v[h],g=g(C),g!=C&&g!=null&&n(v,h,{configurable:!0,writable:!0,value:g})}}i("Symbol",function(h){function g(H){if(this instanceof g)throw new TypeError("Symbol is not a constructor");return new v(C+(H||"")+"_"+j++,H)}function v(H,B){this.g=H,n(this,"description",{configurable:!0,writable:!0,value:B})}if(h)return h;v.prototype.toString=function(){return this.g};var C="jscomp_symbol_"+(1e9*Math.random()>>>0)+"_",j=0;return g}),i("Symbol.iterator",function(h){if(h)return h;h=Symbol("Symbol.iterator");for(var g="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),v=0;v<g.length;v++){var C=s[g[v]];typeof C=="function"&&typeof C.prototype[h]!="function"&&n(C.prototype,h,{configurable:!0,writable:!0,value:function(){return o(t(this))}})}return h});function o(h){return h={next:h},h[Symbol.iterator]=function(){return this},h}function a(h){var g=typeof Symbol<"u"&&Symbol.iterator&&h[Symbol.iterator];return g?g.call(h):{next:t(h)}}function u(h){if(!(h instanceof Array)){h=a(h);for(var g,v=[];!(g=h.next()).done;)v.push(g.value);h=v}return h}var l=typeof Object.create=="function"?Object.create:function(h){function g(){}return g.prototype=h,new g},c;if(typeof Object.setPrototypeOf=="function")c=Object.setPrototypeOf;else{var p;e:{var d={a:!0},w={};try{w.__proto__=d,p=w.a;break e}catch{}p=!1}c=p?function(h,g){if(h.__proto__=g,h.__proto__!==g)throw new TypeError(h+" is not extensible");return h}:null}var b=c;function E(h,g){if(h.prototype=l(g.prototype),h.prototype.constructor=h,b)b(h,g);else for(var v in g)if(v!="prototype")if(Object.defineProperties){var C=Object.getOwnPropertyDescriptor(g,v);C&&Object.defineProperty(h,v,C)}else h[v]=g[v];h.ea=g.prototype}function _(){this.l=!1,this.i=null,this.h=void 0,this.g=1,this.s=this.m=0,this.j=null}function N(h){if(h.l)throw new TypeError("Generator is already running");h.l=!0}_.prototype.o=function(h){this.h=h};function x(h,g){h.j={U:g,V:!0},h.g=h.m||h.s}_.prototype.return=function(h){this.j={return:h},this.g=this.s};function $(h,g,v){return h.g=v,{value:g}}function F(h){this.g=new _,this.h=h}function z(h,g){N(h.g);var v=h.g.i;return v?M(h,"return"in v?v.return:function(C){return{value:C,done:!0}},g,h.g.return):(h.g.return(g),V(h))}function M(h,g,v,C){try{var j=g.call(h.g.i,v);if(!(j instanceof Object))throw new TypeError("Iterator result "+j+" is not an object");if(!j.done)return h.g.l=!1,j;var H=j.value}catch(B){return h.g.i=null,x(h.g,B),V(h)}return h.g.i=null,C.call(h.g,H),V(h)}function V(h){for(;h.g.g;)try{var g=h.h(h.g);if(g)return h.g.l=!1,{value:g.value,done:!1}}catch(v){h.g.h=void 0,x(h.g,v)}if(h.g.l=!1,h.g.j){if(g=h.g.j,h.g.j=null,g.V)throw g.U;return{value:g.return,done:!0}}return{value:void 0,done:!0}}function W(h){this.next=function(g){return N(h.g),h.g.i?g=M(h,h.g.i.next,g,h.g.o):(h.g.o(g),g=V(h)),g},this.throw=function(g){return N(h.g),h.g.i?g=M(h,h.g.i.throw,g,h.g.o):(x(h.g,g),g=V(h)),g},this.return=function(g){return z(h,g)},this[Symbol.iterator]=function(){return this}}function X(h,g){return g=new W(new F(g)),b&&h.prototype&&b(g,h.prototype),g}function Q(h,g){h instanceof String&&(h+="");var v=0,C=!1,j={next:function(){if(!C&&v<h.length){var H=v++;return{value:g(H,h[H]),done:!1}}return C=!0,{done:!0,value:void 0}}};return j[Symbol.iterator]=function(){return j},j}var ue=typeof Object.assign=="function"?Object.assign:function(h,g){for(var v=1;v<arguments.length;v++){var C=arguments[v];if(C)for(var j in C)Object.prototype.hasOwnProperty.call(C,j)&&(h[j]=C[j])}return h};i("Object.assign",function(h){return h||ue}),i("Promise",function(h){function g(B){this.h=0,this.i=void 0,this.g=[],this.o=!1;var G=this.j();try{B(G.resolve,G.reject)}catch(Z){G.reject(Z)}}function v(){this.g=null}function C(B){return B instanceof g?B:new g(function(G){G(B)})}if(h)return h;v.prototype.h=function(B){if(this.g==null){this.g=[];var G=this;this.i(function(){G.l()})}this.g.push(B)};var j=s.setTimeout;v.prototype.i=function(B){j(B,0)},v.prototype.l=function(){for(;this.g&&this.g.length;){var B=this.g;this.g=[];for(var G=0;G<B.length;++G){var Z=B[G];B[G]=null;try{Z()}catch(ie){this.j(ie)}}}this.g=null},v.prototype.j=function(B){this.i(function(){throw B})},g.prototype.j=function(){function B(ie){return function(pe){Z||(Z=!0,ie.call(G,pe))}}var G=this,Z=!1;return{resolve:B(this.C),reject:B(this.l)}},g.prototype.C=function(B){if(B===this)this.l(new TypeError("A Promise cannot resolve to itself"));else if(B instanceof g)this.F(B);else{e:switch(typeof B){case"object":var G=B!=null;break e;case"function":G=!0;break e;default:G=!1}G?this.u(B):this.m(B)}},g.prototype.u=function(B){var G=void 0;try{G=B.then}catch(Z){this.l(Z);return}typeof G=="function"?this.G(G,B):this.m(B)},g.prototype.l=function(B){this.s(2,B)},g.prototype.m=function(B){this.s(1,B)},g.prototype.s=function(B,G){if(this.h!=0)throw Error("Cannot settle("+B+", "+G+"): Promise already settled in state"+this.h);this.h=B,this.i=G,this.h===2&&this.D(),this.A()},g.prototype.D=function(){var B=this;j(function(){if(B.B()){var G=s.console;typeof G<"u"&&G.error(B.i)}},1)},g.prototype.B=function(){if(this.o)return!1;var B=s.CustomEvent,G=s.Event,Z=s.dispatchEvent;return typeof Z>"u"?!0:(typeof B=="function"?B=new B("unhandledrejection",{cancelable:!0}):typeof G=="function"?B=new G("unhandledrejection",{cancelable:!0}):(B=s.document.createEvent("CustomEvent"),B.initCustomEvent("unhandledrejection",!1,!0,B)),B.promise=this,B.reason=this.i,Z(B))},g.prototype.A=function(){if(this.g!=null){for(var B=0;B<this.g.length;++B)H.h(this.g[B]);this.g=null}};var H=new v;return g.prototype.F=function(B){var G=this.j();B.J(G.resolve,G.reject)},g.prototype.G=function(B,G){var Z=this.j();try{B.call(G,Z.resolve,Z.reject)}catch(ie){Z.reject(ie)}},g.prototype.then=function(B,G){function Z(we,me){return typeof we=="function"?function(ae){try{ie(we(ae))}catch(f){pe(f)}}:me}var ie,pe,xe=new g(function(we,me){ie=we,pe=me});return this.J(Z(B,ie),Z(G,pe)),xe},g.prototype.catch=function(B){return this.then(void 0,B)},g.prototype.J=function(B,G){function Z(){switch(ie.h){case 1:B(ie.i);break;case 2:G(ie.i);break;default:throw Error("Unexpected state: "+ie.h)}}var ie=this;this.g==null?H.h(Z):this.g.push(Z),this.o=!0},g.resolve=C,g.reject=function(B){return new g(function(G,Z){Z(B)})},g.race=function(B){return new g(function(G,Z){for(var ie=a(B),pe=ie.next();!pe.done;pe=ie.next())C(pe.value).J(G,Z)})},g.all=function(B){var G=a(B),Z=G.next();return Z.done?C([]):new g(function(ie,pe){function xe(ae){return function(f){we[ae]=f,me--,me==0&&ie(we)}}var we=[],me=0;do we.push(void 0),me++,C(Z.value).J(xe(we.length-1),pe),Z=G.next();while(!Z.done)})},g}),i("Object.is",function(h){return h||function(g,v){return g===v?g!==0||1/g===1/v:g!==g&&v!==v}}),i("Array.prototype.includes",function(h){return h||function(g,v){var C=this;C instanceof String&&(C=String(C));var j=C.length;for(v=v||0,0>v&&(v=Math.max(v+j,0));v<j;v++){var H=C[v];if(H===g||Object.is(H,g))return!0}return!1}}),i("String.prototype.includes",function(h){return h||function(g,v){if(this==null)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(g instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return this.indexOf(g,v||0)!==-1}}),i("Array.prototype.keys",function(h){return h||function(){return Q(this,function(g){return g})}});var Ne=this||self;function ce(h,g){h=h.split(".");var v=Ne;h[0]in v||typeof v.execScript>"u"||v.execScript("var "+h[0]);for(var C;h.length&&(C=h.shift());)h.length||g===void 0?v[C]&&v[C]!==Object.prototype[C]?v=v[C]:v=v[C]={}:v[C]=g}function Ce(h,g){return g=String.fromCharCode.apply(null,g),h==null?g:h+g}var Je,rt=typeof TextDecoder<"u",Ze,re=typeof TextEncoder<"u";function fe(h){if(re)h=(Ze||(Ze=new TextEncoder)).encode(h);else{var g=void 0;g=g===void 0?!1:g;for(var v=0,C=new Uint8Array(3*h.length),j=0;j<h.length;j++){var H=h.charCodeAt(j);if(128>H)C[v++]=H;else{if(2048>H)C[v++]=H>>6|192;else{if(55296<=H&&57343>=H){if(56319>=H&&j<h.length){var B=h.charCodeAt(++j);if(56320<=B&&57343>=B){H=1024*(H-55296)+B-56320+65536,C[v++]=H>>18|240,C[v++]=H>>12&63|128,C[v++]=H>>6&63|128,C[v++]=H&63|128;continue}else j--}if(g)throw Error("Found an unpaired surrogate");H=65533}C[v++]=H>>12|224,C[v++]=H>>6&63|128}C[v++]=H&63|128}}h=C.subarray(0,v)}return h}var he={},Ae=null;function Ke(h,g){g===void 0&&(g=0),Ar(),g=he[g];for(var v=Array(Math.floor(h.length/3)),C=g[64]||"",j=0,H=0;j<h.length-2;j+=3){var B=h[j],G=h[j+1],Z=h[j+2],ie=g[B>>2];B=g[(B&3)<<4|G>>4],G=g[(G&15)<<2|Z>>6],Z=g[Z&63],v[H++]=ie+B+G+Z}switch(ie=0,Z=C,h.length-j){case 2:ie=h[j+1],Z=g[(ie&15)<<2]||C;case 1:h=h[j],v[H]=g[h>>2]+g[(h&3)<<4|ie>>4]+Z+C}return v.join("")}function Un(h){var g=h.length,v=3*g/4;v%3?v=Math.floor(v):"=.".indexOf(h[g-1])!=-1&&(v="=.".indexOf(h[g-2])!=-1?v-2:v-1);var C=new Uint8Array(v),j=0;return pn(h,function(H){C[j++]=H}),C.subarray(0,j)}function pn(h,g){function v(Z){for(;C<h.length;){var ie=h.charAt(C++),pe=Ae[ie];if(pe!=null)return pe;if(!/^[\s\xa0]*$/.test(ie))throw Error("Unknown base64 encoding at char: "+ie)}return Z}Ar();for(var C=0;;){var j=v(-1),H=v(0),B=v(64),G=v(64);if(G===64&&j===-1)break;g(j<<2|H>>4),B!=64&&(g(H<<4&240|B>>2),G!=64&&g(B<<6&192|G))}}function Ar(){if(!Ae){Ae={};for(var h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),g=["+/=","+/","-_=","-_.","-_"],v=0;5>v;v++){var C=h.concat(g[v].split(""));he[v]=C;for(var j=0;j<C.length;j++){var H=C[j];Ae[H]===void 0&&(Ae[H]=j)}}}}var dt=typeof Uint8Array.prototype.slice=="function",Vn;function ri(h,g,v){return g===v?Vn||(Vn=new Uint8Array(0)):dt?h.slice(g,v):new Uint8Array(h.subarray(g,v))}var hn=0,dn=0;function et(h,g){g=g===void 0?{}:g,g=g.v===void 0?!1:g.v,this.h=null,this.g=this.j=this.l=0,this.m=!1,this.v=g,h&&Or(this,h)}function Or(h,g){g=g.constructor===Uint8Array?g:g.constructor===ArrayBuffer?new Uint8Array(g):g.constructor===Array?new Uint8Array(g):g.constructor===String?Un(g):g instanceof Uint8Array?new Uint8Array(g.buffer,g.byteOffset,g.byteLength):new Uint8Array(0),h.h=g,h.l=0,h.j=h.h.length,h.g=h.l}et.prototype.reset=function(){this.g=this.l};function ds(h){for(var g=128,v=0,C=0,j=0;4>j&&128<=g;j++)g=h.h[h.g++],v|=(g&127)<<7*j;if(128<=g&&(g=h.h[h.g++],v|=(g&127)<<28,C|=(g&127)>>4),128<=g)for(j=0;5>j&&128<=g;j++)g=h.h[h.g++],C|=(g&127)<<7*j+3;if(128>g)return h=v>>>0,g=C>>>0,(C=g&2147483648)&&(h=~h+1>>>0,g=~g>>>0,h==0&&(g=g+1>>>0)),h=4294967296*g+(h>>>0),C?-h:h;h.m=!0}et.prototype.i=function(){var h=this.h,g=h[this.g],v=g&127;return 128>g?(this.g+=1,v):(g=h[this.g+1],v|=(g&127)<<7,128>g?(this.g+=2,v):(g=h[this.g+2],v|=(g&127)<<14,128>g?(this.g+=3,v):(g=h[this.g+3],v|=(g&127)<<21,128>g?(this.g+=4,v):(g=h[this.g+4],v|=(g&15)<<28,128>g?(this.g+=5,v>>>0):(this.g+=5,128<=h[this.g++]&&128<=h[this.g++]&&128<=h[this.g++]&&128<=h[this.g++]&&this.g++,v)))))},et.prototype.o=function(){var h=this.h[this.g],g=this.h[this.g+1],v=this.h[this.g+2],C=this.h[this.g+3];return this.g+=4,v=(h<<0|g<<8|v<<16|C<<24)>>>0,h=2*(v>>31)+1,g=v>>>23&255,v&=8388607,g==255?v?NaN:1/0*h:g==0?h*Math.pow(2,-149)*v:h*Math.pow(2,g-150)*(v+Math.pow(2,23))};var si=[];function mn(){this.g=new Uint8Array(64),this.h=0}mn.prototype.push=function(h){if(!(this.h+1<this.g.length)){var g=this.g;this.g=new Uint8Array(Math.ceil(1+2*this.g.length)),this.g.set(g)}this.g[this.h++]=h},mn.prototype.length=function(){return this.h},mn.prototype.end=function(){var h=this.g,g=this.h;return this.h=0,ri(h,0,g)};function $n(h,g){for(;127<g;)h.push(g&127|128),g>>>=7;h.push(g)}function Cr(h){var g={},v=g.N===void 0?!1:g.N;this.o={v:g.v===void 0?!1:g.v},this.N=v,g=this.o,si.length?(v=si.pop(),g&&(v.v=g.v),h&&Or(v,h),h=v):h=new et(h,g),this.g=h,this.m=this.g.g,this.h=this.i=this.l=-1,this.j=!1}Cr.prototype.reset=function(){this.g.reset(),this.h=this.l=-1};function jt(h){var g=h.g;if((g=g.g==g.j)||(g=h.j)||(g=h.g,g=g.m||0>g.g||g.g>g.j),g)return!1;h.m=h.g.g,g=h.g.i();var v=g&7;return v!=0&&v!=5&&v!=1&&v!=2&&v!=3&&v!=4?(h.j=!0,!1):(h.i=g,h.l=g>>>3,h.h=v,!0)}function In(h){switch(h.h){case 0:if(h.h!=0)In(h);else{for(h=h.g;h.h[h.g]&128;)h.g++;h.g++}break;case 1:h.h!=1?In(h):(h=h.g,h.g+=8);break;case 2:if(h.h!=2)In(h);else{var g=h.g.i();h=h.g,h.g+=g}break;case 5:h.h!=5?In(h):(h=h.g,h.g+=4);break;case 3:g=h.l;do{if(!jt(h)){h.j=!0;break}if(h.h==4){h.l!=g&&(h.j=!0);break}In(h)}while(!0);break;default:h.j=!0}}function ii(h,g,v){var C=h.g.j,j=h.g.i(),H=h.g.g+j;if(h.g.j=H,v(g,h),v=H-h.g.g,v!==0)throw Error("Message parsing ended unexpectedly. Expected to read "+j+" bytes, instead read "+(j-v)+" bytes, either the data ended unexpectedly or the message misreported its own length");return h.g.g=H,h.g.j=C,g}function lt(h){return h.g.o()}function ms(h){var g=h.g.i();h=h.g;var v=h.g;h.g+=g,h=h.h;var C;if(rt)(C=Je)||(C=Je=new TextDecoder("utf-8",{fatal:!1})),C=C.decode(h.subarray(v,v+g));else{g=v+g;for(var j=[],H=null,B,G,Z;v<g;)B=h[v++],128>B?j.push(B):224>B?v>=g?j.push(65533):(G=h[v++],194>B||(G&192)!==128?(v--,j.push(65533)):j.push((B&31)<<6|G&63)):240>B?v>=g-1?j.push(65533):(G=h[v++],(G&192)!==128||B===224&&160>G||B===237&&160<=G||((C=h[v++])&192)!==128?(v--,j.push(65533)):j.push((B&15)<<12|(G&63)<<6|C&63)):244>=B?v>=g-2?j.push(65533):(G=h[v++],(G&192)!==128||(B<<28)+(G-144)>>30||((C=h[v++])&192)!==128||((Z=h[v++])&192)!==128?(v--,j.push(65533)):(B=(B&7)<<18|(G&63)<<12|(C&63)<<6|Z&63,B-=65536,j.push((B>>10&1023)+55296,(B&1023)+56320))):j.push(65533),8192<=j.length&&(H=Ce(H,j),j.length=0);C=Ce(H,j)}return C}function Zi(h,g,v){var C=h.g.i();for(C=h.g.g+C;h.g.g<C;)v.push(g.call(h.g))}function eo(h,g){h.h==2?Zi(h,et.prototype.o,g):g.push(lt(h))}function rr(){this.h=[],this.i=0,this.g=new mn}function gn(h,g){g.length!==0&&(h.h.push(g),h.i+=g.length)}function gs(h){var g=h.i+h.g.length();if(g===0)return new Uint8Array(0);g=new Uint8Array(g);for(var v=h.h,C=v.length,j=0,H=0;H<C;H++){var B=v[H];B.length!==0&&(g.set(B,j),j+=B.length)}return v=h.g,C=v.h,C!==0&&(g.set(v.g.subarray(0,C),j),v.h=0),h.h=[g],g}function Bt(h,g,v){if(v!=null){$n(h.g,8*g+5),h=h.g;var C=v;C=(v=0>C?1:0)?-C:C,C===0?0<1/C?hn=dn=0:(dn=0,hn=2147483648):isNaN(C)?(dn=0,hn=2147483647):34028234663852886e22<C?(dn=0,hn=(v<<31|2139095040)>>>0):11754943508222875e-54>C?(C=Math.round(C/Math.pow(2,-149)),dn=0,hn=(v<<31|C)>>>0):(g=Math.floor(Math.log(C)/Math.LN2),C*=Math.pow(2,-g),C=Math.round(8388608*C),16777216<=C&&++g,dn=0,hn=(v<<31|g+127<<23|C&8388607)>>>0),v=hn,h.push(v>>>0&255),h.push(v>>>8&255),h.push(v>>>16&255),h.push(v>>>24&255)}}var ys=typeof Uint8Array=="function";function to(h,g,v){if(h!=null)return typeof h=="object"?ys&&h instanceof Uint8Array?v(h):no(h,g,v):g(h)}function no(h,g,v){if(Array.isArray(h)){for(var C=Array(h.length),j=0;j<h.length;j++)C[j]=to(h[j],g,v);return Array.isArray(h)&&h.W&&bt(C),C}C={};for(j in h)C[j]=to(h[j],g,v);return C}function ka(h){return typeof h=="number"?isFinite(h)?h:String(h):h}var Ta={W:{value:!0,configurable:!0}};function bt(h){return Array.isArray(h)&&!Object.isFrozen(h)&&Object.defineProperties(h,Ta),h}var tt;function st(h,g,v){var C=tt;tt=null,h||(h=C),C=this.constructor.ca,h||(h=C?[C]:[]),this.j=C?0:-1,this.m=this.g=null,this.h=h;e:{if(C=this.h.length,h=C-1,C&&(C=this.h[h],!(C===null||typeof C!="object"||Array.isArray(C)||ys&&C instanceof Uint8Array))){this.l=h-this.j,this.i=C;break e}g!==void 0&&-1<g?(this.l=Math.max(g,h+1-this.j),this.i=null):this.l=Number.MAX_VALUE}if(v)for(g=0;g<v.length;g++)h=v[g],h<this.l?(h+=this.j,(C=this.h[h])?bt(C):this.h[h]=Ct):(vs(this),(C=this.i[h])?bt(C):this.i[h]=Ct)}var Ct=Object.freeze(bt([]));function vs(h){var g=h.l+h.j;h.h[g]||(h.i=h.h[g]={})}function Re(h,g,v){return g===-1?null:v!==void 0&&v||g>=h.l?h.i?h.i[g]:void 0:h.h[g+h.j]}function ws(h,g){var v=v===void 0?!1:v,C=Re(h,g,v);return C==null&&(C=Ct),C===Ct&&(C=bt([]),be(h,g,C,v)),C}function ro(h){var g=ws(h,3);if(h.m||(h.m={}),!h.m[3]){for(var v=0;v<g.length;v++)g[v]=+g[v];h.m[3]=!0}return g}function Wn(h,g,v){return h=Re(h,g),h??v}function Jt(h,g,v){return h=Re(h,g),h=h==null?h:+h,h??(v===void 0?0:v)}function be(h,g,v,C){C!==void 0&&C||g>=h.l?(vs(h),h.i[g]=v):h.h[g+h.j]=v}function Ea(h,g,v){if(v===-1)return null;if(h.g||(h.g={}),!h.g[v]){var C=Re(h,v,!1);C&&(h.g[v]=new g(C))}return h.g[v]}function oi(h,g){h.g||(h.g={});var v=h.g[1];if(!v){var C=ws(h,1);v=[];for(var j=0;j<C.length;j++)v[j]=new g(C[j]);h.g[1]=v}return v}function Ss(h,g,v){var C=C===void 0?!1:C;h.g||(h.g={});var j=v&&Hn(v);h.g[g]=v,be(h,g,j,C)}function bs(h,g,v,C){var j=oi(h,v);g=g||new v,h=ws(h,1),C!=null?(j.splice(C,0,g),h.splice(C,0,Hn(g))):(j.push(g),h.push(Hn(g)))}st.prototype.toJSON=function(){var h=Hn(this);return no(h,ka,Ke)};function Hn(h,g){if(h.g)for(var v in h.g){var C=h.g[v];if(Array.isArray(C))for(var j=0;j<C.length;j++)C[j]&&Hn(C[j]);else C&&Hn(C)}return h.h}st.prototype.toString=function(){return Hn(this).toString()};function ai(h,g){if(h=h.o){gn(g,g.g.end());for(var v=0;v<h.length;v++)gn(g,h[v])}}function Zt(h,g){if(g.h==4)return!1;var v=g.m;return In(g),g.N||(g=ri(g.g.h,v,g.g.g),(v=h.o)?v.push(g):h.o=[g]),!0}function Kn(h){st.call(this,h,-1,Cl)}E(Kn,st),Kn.prototype.getRows=function(){return Re(this,1)},Kn.prototype.getCols=function(){return Re(this,2)},Kn.prototype.getPackedDataList=function(){return ro(this)},Kn.prototype.getLayout=function(){return Wn(this,4,0)};function xa(h,g){for(;jt(g);)switch(g.i){case 8:var v=g.g.i();be(h,1,v);break;case 16:v=g.g.i(),be(h,2,v);break;case 29:case 26:eo(g,h.getPackedDataList());break;case 32:v=ds(g.g),be(h,4,v);break;default:if(!Zt(h,g))return h}return h}var Cl=[3];function mt(h,g){var v=void 0;return new(v||(v=Promise))(function(C,j){function H(Z){try{G(g.next(Z))}catch(ie){j(ie)}}function B(Z){try{G(g.throw(Z))}catch(ie){j(ie)}}function G(Z){Z.done?C(Z.value):new v(function(ie){ie(Z.value)}).then(H,B)}G((g=g.apply(h,void 0)).next())})}function Gn(h){st.call(this,h)}E(Gn,st);function _a(h,g){for(;jt(g);)switch(g.i){case 8:var v=g.g.i();be(h,1,v);break;case 21:v=lt(g),be(h,2,v);break;case 26:v=ms(g),be(h,3,v);break;case 34:v=ms(g),be(h,4,v);break;default:if(!Zt(h,g))return h}return h}function ui(h){st.call(this,h,-1,$a)}E(ui,st),ui.prototype.addClassification=function(h,g){return bs(this,h,Gn,g),this};var $a=[1];function Dr(h){st.call(this,h)}E(Dr,st);function Dl(h,g){for(;jt(g);)switch(g.i){case 13:var v=lt(g);be(h,1,v);break;case 21:v=lt(g),be(h,2,v);break;case 29:v=lt(g),be(h,3,v);break;case 37:v=lt(g),be(h,4,v);break;case 45:v=lt(g),be(h,5,v);break;default:if(!Zt(h,g))return h}return h}function Ia(h){st.call(this,h,-1,Oa)}E(Ia,st);function Aa(h){e:{var g=new Ia;for(h=new Cr(h);jt(h);)switch(h.i){case 10:var v=ii(h,new Dr,Dl);bs(g,v,Dr,void 0);break;default:if(!Zt(g,h))break e}}return g}var Oa=[1];function li(h){st.call(this,h)}E(li,st);function sr(h){st.call(this,h,-1,Pl)}E(sr,st),sr.prototype.getVertexType=function(){return Wn(this,1,0)},sr.prototype.getPrimitiveType=function(){return Wn(this,2,0)},sr.prototype.getVertexBufferList=function(){return ro(this)},sr.prototype.getIndexBufferList=function(){return ws(this,4)};function Fl(h,g){for(;jt(g);)switch(g.i){case 8:var v=ds(g.g);be(h,1,v);break;case 16:v=ds(g.g),be(h,2,v);break;case 29:case 26:eo(g,h.getVertexBufferList());break;case 32:case 34:v=g;var C=h.getIndexBufferList();v.h==2?Zi(v,et.prototype.i,C):C.push(v.g.i());break;default:if(!Zt(h,g))return h}return h}var Pl=[3,4];function ci(h){st.call(this,h)}E(ci,st),ci.prototype.getMesh=function(){return Ea(this,sr,1)},ci.prototype.getPoseTransformMatrix=function(){return Ea(this,Kn,2)};function Ca(h){e:{var g=new ci;for(h=new Cr(h);jt(h);)switch(h.i){case 10:var v=ii(h,new sr,Fl);Ss(g,1,v);break;case 18:v=ii(h,new Kn,xa),Ss(g,2,v);break;default:if(!Zt(g,h))break e}}return g}function so(h,g,v){if(v=h.createShader(v===0?h.VERTEX_SHADER:h.FRAGMENT_SHADER),h.shaderSource(v,g),h.compileShader(v),!h.getShaderParameter(v,h.COMPILE_STATUS))throw Error(`Could not compile WebGL shader.

`+h.getShaderInfoLog(v));return v}function io(h){return oi(h,Gn).map(function(g){return{index:Wn(g,1,0),Y:Jt(g,2),label:Re(g,3)!=null?Wn(g,3,""):void 0,displayName:Re(g,4)!=null?Wn(g,4,""):void 0}})}function oo(h){return{x:Jt(h,1),y:Jt(h,2),z:Jt(h,3),visibility:Re(h,4)!=null?Jt(h,4):void 0}}function Ns(h,g){this.h=h,this.g=g,this.l=0}function Fr(h,g,v){return en(h,g),typeof h.g.canvas.transferToImageBitmap=="function"?Promise.resolve(h.g.canvas.transferToImageBitmap()):v?Promise.resolve(h.g.canvas):typeof createImageBitmap=="function"?createImageBitmap(h.g.canvas):(h.i===void 0&&(h.i=document.createElement("canvas")),new Promise(function(C){h.i.height=h.g.canvas.height,h.i.width=h.g.canvas.width,h.i.getContext("2d",{}).drawImage(h.g.canvas,0,0,h.g.canvas.width,h.g.canvas.height),C(h.i)}))}function en(h,g){var v=h.g;if(h.m===void 0){var C=so(v,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,0),j=so(v,`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D sampler0;
  void main(){
    gl_FragColor = texture2D(sampler0, vTex);
  }`,1),H=v.createProgram();if(v.attachShader(H,C),v.attachShader(H,j),v.linkProgram(H),!v.getProgramParameter(H,v.LINK_STATUS))throw Error(`Could not compile WebGL program.

`+v.getProgramInfoLog(H));C=h.m=H,v.useProgram(C),j=v.getUniformLocation(C,"sampler0"),h.j={I:v.getAttribLocation(C,"aVertex"),H:v.getAttribLocation(C,"aTex"),da:j},h.s=v.createBuffer(),v.bindBuffer(v.ARRAY_BUFFER,h.s),v.enableVertexAttribArray(h.j.I),v.vertexAttribPointer(h.j.I,2,v.FLOAT,!1,0,0),v.bufferData(v.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),v.STATIC_DRAW),v.bindBuffer(v.ARRAY_BUFFER,null),h.o=v.createBuffer(),v.bindBuffer(v.ARRAY_BUFFER,h.o),v.enableVertexAttribArray(h.j.H),v.vertexAttribPointer(h.j.H,2,v.FLOAT,!1,0,0),v.bufferData(v.ARRAY_BUFFER,new Float32Array([0,1,0,0,1,0,1,1]),v.STATIC_DRAW),v.bindBuffer(v.ARRAY_BUFFER,null),v.uniform1i(j,0)}C=h.j,v.useProgram(h.m),v.canvas.width=g.width,v.canvas.height=g.height,v.viewport(0,0,g.width,g.height),v.activeTexture(v.TEXTURE0),h.h.bindTexture2d(g.glName),v.enableVertexAttribArray(C.I),v.bindBuffer(v.ARRAY_BUFFER,h.s),v.vertexAttribPointer(C.I,2,v.FLOAT,!1,0,0),v.enableVertexAttribArray(C.H),v.bindBuffer(v.ARRAY_BUFFER,h.o),v.vertexAttribPointer(C.H,2,v.FLOAT,!1,0,0),v.bindFramebuffer(v.DRAW_FRAMEBUFFER?v.DRAW_FRAMEBUFFER:v.FRAMEBUFFER,null),v.clearColor(0,0,0,0),v.clear(v.COLOR_BUFFER_BIT),v.colorMask(!0,!0,!0,!0),v.drawArrays(v.TRIANGLE_FAN,0,4),v.disableVertexAttribArray(C.I),v.disableVertexAttribArray(C.H),v.bindBuffer(v.ARRAY_BUFFER,null),h.h.bindTexture2d(0)}function Rl(h){this.g=h}var Ll=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,9,1,7,0,65,0,253,15,26,11]);function Da(h,g){return g+h}function ao(h,g){window[h]=g}function Ut(h){var g=document.createElement("script");return g.setAttribute("src",h),g.setAttribute("crossorigin","anonymous"),new Promise(function(v){g.addEventListener("load",function(){v()},!1),g.addEventListener("error",function(){v()},!1),document.body.appendChild(g)})}function Fa(){return mt(this,function h(){return X(h,function(g){switch(g.g){case 1:return g.m=2,$(g,WebAssembly.instantiate(Ll),4);case 4:g.g=3,g.m=0;break;case 2:return g.m=0,g.j=null,g.return(!1);case 3:return g.return(!0)}})})}function ir(h){if(this.g=h,this.listeners={},this.j={},this.F={},this.m={},this.s={},this.G=this.o=this.R=!0,this.C=Promise.resolve(),this.P="",this.B={},this.locateFile=h&&h.locateFile||Da,typeof window=="object")var g=window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/";else if(typeof location<"u")g=location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/";else throw Error("solutions can only be loaded on a web page or in a web worker");if(this.S=g,h.options){g=a(Object.keys(h.options));for(var v=g.next();!v.done;v=g.next()){v=v.value;var C=h.options[v].default;C!==void 0&&(this.j[v]=typeof C=="function"?C():C)}}}e=ir.prototype,e.close=function(){return this.i&&this.i.delete(),Promise.resolve()};function Pa(h,g){return h.g.files===void 0?[]:typeof h.g.files=="function"?h.g.files(g):h.g.files}function uo(h){return mt(h,function g(){var v=this,C,j,H,B,G,Z,ie,pe,xe,we,me;return X(g,function(ae){switch(ae.g){case 1:return C=v,v.R?(j=Pa(v,v.j),$(ae,Fa(),2)):ae.return();case 2:if(H=ae.h,typeof window=="object")return ao("createMediapipeSolutionsWasm",{locateFile:v.locateFile}),ao("createMediapipeSolutionsPackedAssets",{locateFile:v.locateFile}),Z=j.filter(function(f){return f.data!==void 0}),ie=j.filter(function(f){return f.data===void 0}),pe=Promise.all(Z.map(function(f){var y=Pr(C,f.url);if(f.path!==void 0){var S=f.path;y=y.then(function(k){return C.overrideFile(S,k),Promise.resolve(k)})}return y})),xe=Promise.all(ie.map(function(f){return f.simd===void 0||f.simd&&H||!f.simd&&!H?Ut(C.locateFile(f.url,C.S)):Promise.resolve()})).then(function(){return mt(C,function f(){var y,S,k=this;return X(f,function(O){if(O.g==1)return y=window.createMediapipeSolutionsWasm,S=window.createMediapipeSolutionsPackedAssets,$(O,y(S),2);k.h=O.h,O.g=0})})}),we=function(){return mt(C,function f(){var y=this;return X(f,function(S){return y.g.graph&&y.g.graph.url?S=$(S,Pr(y,y.g.graph.url),0):(S.g=0,S=void 0),S})})}(),$(ae,Promise.all([xe,pe,we]),7);if(typeof importScripts!="function")throw Error("solutions can only be loaded on a web page or in a web worker");return B=j.filter(function(f){return f.simd===void 0||f.simd&&H||!f.simd&&!H}).map(function(f){return C.locateFile(f.url,C.S)}),importScripts.apply(null,u(B)),$(ae,createMediapipeSolutionsWasm(Module),6);case 6:v.h=ae.h,v.l=new OffscreenCanvas(1,1),v.h.canvas=v.l,G=v.h.GL.createContext(v.l,{antialias:!1,alpha:!1,ba:typeof WebGL2RenderingContext<"u"?2:1}),v.h.GL.makeContextCurrent(G),ae.g=4;break;case 7:if(v.l=document.createElement("canvas"),me=v.l.getContext("webgl2",{}),!me&&(me=v.l.getContext("webgl",{}),!me))return alert("Failed to create WebGL canvas context when passing video frame."),ae.return();v.D=me,v.h.canvas=v.l,v.h.createContext(v.l,!0,!0,{});case 4:v.i=new v.h.SolutionWasm,v.R=!1,ae.g=0}})})}function zl(h){return mt(h,function g(){var v=this,C,j,H,B,G,Z,ie,pe;return X(g,function(xe){if(xe.g==1){if(v.g.graph&&v.g.graph.url&&v.P===v.g.graph.url)return xe.return();if(v.o=!0,!v.g.graph||!v.g.graph.url){xe.g=2;return}return v.P=v.g.graph.url,$(xe,Pr(v,v.g.graph.url),3)}for(xe.g!=2&&(C=xe.h,v.i.loadGraph(C)),j=a(Object.keys(v.B)),H=j.next();!H.done;H=j.next())B=H.value,v.i.overrideFile(B,v.B[B]);if(v.B={},v.g.listeners)for(G=a(v.g.listeners),Z=G.next();!Z.done;Z=G.next())ie=Z.value,jl(v,ie);pe=v.j,v.j={},v.setOptions(pe),xe.g=0})})}e.reset=function(){return mt(this,function h(){var g=this;return X(h,function(v){g.i&&(g.i.reset(),g.m={},g.s={}),v.g=0})})},e.setOptions=function(h,g){var v=this;if(g=g||this.g.options){for(var C=[],j=[],H={},B=a(Object.keys(h)),G=B.next();!G.done;H={K:H.K,L:H.L},G=B.next()){var Z=G.value;Z in this.j&&this.j[Z]===h[Z]||(this.j[Z]=h[Z],G=g[Z],G!==void 0&&(G.onChange&&(H.K=G.onChange,H.L=h[Z],C.push(function(ie){return function(){return mt(v,function pe(){var xe,we=this;return X(pe,function(me){if(me.g==1)return $(me,ie.K(ie.L),2);xe=me.h,xe===!0&&(we.o=!0),me.g=0})})}}(H))),G.graphOptionXref&&(Z={valueNumber:G.type===1?h[Z]:0,valueBoolean:G.type===0?h[Z]:!1,valueString:G.type===2?h[Z]:""},G=Object.assign(Object.assign(Object.assign({},{calculatorName:"",calculatorIndex:0}),G.graphOptionXref),Z),j.push(G))))}(C.length!==0||j.length!==0)&&(this.o=!0,this.A=(this.A===void 0?[]:this.A).concat(j),this.u=(this.u===void 0?[]:this.u).concat(C))}};function Ml(h){return mt(h,function g(){var v=this,C,j,H,B,G,Z,ie;return X(g,function(pe){switch(pe.g){case 1:if(!v.o)return pe.return();if(!v.u){pe.g=2;break}C=a(v.u),j=C.next();case 3:if(j.done){pe.g=5;break}return H=j.value,$(pe,H(),4);case 4:j=C.next(),pe.g=3;break;case 5:v.u=void 0;case 2:if(v.A){for(B=new v.h.GraphOptionChangeRequestList,G=a(v.A),Z=G.next();!Z.done;Z=G.next())ie=Z.value,B.push_back(ie);v.i.changeOptions(B),B.delete(),v.A=void 0}v.o=!1,pe.g=0}})})}e.initialize=function(){return mt(this,function h(){var g=this;return X(h,function(v){return v.g==1?$(v,uo(g),2):v.g!=3?$(v,zl(g),3):$(v,Ml(g),0)})})};function Pr(h,g){return mt(h,function v(){var C=this,j,H;return X(v,function(B){return g in C.F?B.return(C.F[g]):(j=C.locateFile(g,""),H=fetch(j).then(function(G){return G.arrayBuffer()}),C.F[g]=H,B.return(H))})})}e.overrideFile=function(h,g){this.i?this.i.overrideFile(h,g):this.B[h]=g},e.clearOverriddenFiles=function(){this.B={},this.i&&this.i.clearOverriddenFiles()},e.send=function(h,g){return mt(this,function v(){var C=this,j,H,B,G,Z,ie,pe,xe,we;return X(v,function(me){switch(me.g){case 1:return C.g.inputs?(j=1e3*(g??performance.now()),$(me,C.C,2)):me.return();case 2:return $(me,C.initialize(),3);case 3:for(H=new C.h.PacketDataList,B=a(Object.keys(h)),G=B.next();!G.done;G=B.next())if(Z=G.value,ie=C.g.inputs[Z]){e:{var ae=C,f=h[Z];switch(ie.type){case"video":var y=ae.m[ie.stream];if(y||(y=new Ns(ae.h,ae.D),ae.m[ie.stream]=y),ae=y,ae.l===0&&(ae.l=ae.h.createTexture()),typeof HTMLVideoElement<"u"&&f instanceof HTMLVideoElement){var S=f.videoWidth;y=f.videoHeight}else typeof HTMLImageElement<"u"&&f instanceof HTMLImageElement?(S=f.naturalWidth,y=f.naturalHeight):(S=f.width,y=f.height);y={glName:ae.l,width:S,height:y},S=ae.g,S.canvas.width=y.width,S.canvas.height=y.height,S.activeTexture(S.TEXTURE0),ae.h.bindTexture2d(ae.l),S.texImage2D(S.TEXTURE_2D,0,S.RGBA,S.RGBA,S.UNSIGNED_BYTE,f),ae.h.bindTexture2d(0),ae=y;break e;case"detections":for(y=ae.m[ie.stream],y||(y=new Rl(ae.h),ae.m[ie.stream]=y),ae=y,ae.data||(ae.data=new ae.g.DetectionListData),ae.data.reset(f.length),y=0;y<f.length;++y){S=f[y];var k=ae.data,O=k.setBoundingBox,I=y,D=S.T,R=new li;be(R,1,D.Z),be(R,2,D.$),be(R,3,D.height),be(R,4,D.width),be(R,5,D.rotation),be(R,6,D.X);var U=D=new rr;Bt(U,1,Re(R,1)),Bt(U,2,Re(R,2)),Bt(U,3,Re(R,3)),Bt(U,4,Re(R,4)),Bt(U,5,Re(R,5));var K=Re(R,6);if(K!=null&&K!=null){$n(U.g,48);var Y=U.g,ee=K;K=0>ee,ee=Math.abs(ee);var ne=ee>>>0;for(ee=Math.floor((ee-ne)/4294967296),ee>>>=0,K&&(ee=~ee>>>0,ne=(~ne>>>0)+1,4294967295<ne&&(ne=0,ee++,4294967295<ee&&(ee=0))),hn=ne,dn=ee,K=hn,ne=dn;0<ne||127<K;)Y.push(K&127|128),K=(K>>>7|ne<<25)>>>0,ne>>>=7;Y.push(K)}if(ai(R,U),D=gs(D),O.call(k,I,D),S.O)for(k=0;k<S.O.length;++k)R=S.O[k],U=!!R.visibility,O=ae.data,I=O.addNormalizedLandmark,D=y,R=Object.assign(Object.assign({},R),{visibility:U?R.visibility:0}),U=new Dr,be(U,1,R.x),be(U,2,R.y),be(U,3,R.z),R.visibility&&be(U,4,R.visibility),Y=R=new rr,Bt(Y,1,Re(U,1)),Bt(Y,2,Re(U,2)),Bt(Y,3,Re(U,3)),Bt(Y,4,Re(U,4)),Bt(Y,5,Re(U,5)),ai(U,Y),R=gs(R),I.call(O,D,R);if(S.M)for(k=0;k<S.M.length;++k){if(O=ae.data,I=O.addClassification,D=y,R=S.M[k],U=new Gn,be(U,2,R.Y),R.index&&be(U,1,R.index),R.label&&be(U,3,R.label),R.displayName&&be(U,4,R.displayName),Y=R=new rr,ne=Re(U,1),ne!=null&&ne!=null)if($n(Y.g,8),K=Y.g,0<=ne)$n(K,ne);else{for(ee=0;9>ee;ee++)K.push(ne&127|128),ne>>=7;K.push(1)}Bt(Y,2,Re(U,2)),K=Re(U,3),K!=null&&(K=fe(K),$n(Y.g,26),$n(Y.g,K.length),gn(Y,Y.g.end()),gn(Y,K)),K=Re(U,4),K!=null&&(K=fe(K),$n(Y.g,34),$n(Y.g,K.length),gn(Y,Y.g.end()),gn(Y,K)),ai(U,Y),R=gs(R),I.call(O,D,R)}}ae=ae.data;break e;default:ae={}}}switch(pe=ae,xe=ie.stream,ie.type){case"video":H.pushTexture2d(Object.assign(Object.assign({},pe),{stream:xe,timestamp:j}));break;case"detections":we=pe,we.stream=xe,we.timestamp=j,H.pushDetectionList(we);break;default:throw Error("Unknown input config type: '"+ie.type+"'")}}return C.i.send(H),$(me,C.C,4);case 4:H.delete(),me.g=0}})})};function Ra(h,g,v){return mt(h,function C(){var j,H,B,G,Z,ie,pe=this,xe,we,me,ae,f,y,S,k;return X(C,function(O){switch(O.g){case 1:if(!v)return O.return(g);for(j={},H=0,B=a(Object.keys(v)),G=B.next();!G.done;G=B.next())Z=G.value,ie=v[Z],typeof ie!="string"&&ie.type==="texture"&&g[ie.stream]!==void 0&&++H;1<H&&(pe.G=!1),xe=a(Object.keys(v)),G=xe.next();case 2:if(G.done){O.g=4;break}if(we=G.value,me=v[we],typeof me=="string")return S=j,k=we,$(O,La(pe,we,g[me]),14);if(ae=g[me.stream],me.type==="detection_list"){if(ae){for(var I=ae.getRectList(),D=ae.getLandmarksList(),R=ae.getClassificationsList(),U=[],K=0;K<I.size();++K){var Y=I.get(K);e:{var ee=new li;for(Y=new Cr(Y);jt(Y);)switch(Y.i){case 13:var ne=lt(Y);be(ee,1,ne);break;case 21:ne=lt(Y),be(ee,2,ne);break;case 29:ne=lt(Y),be(ee,3,ne);break;case 37:ne=lt(Y),be(ee,4,ne);break;case 45:ne=lt(Y),be(ee,5,ne);break;case 48:ne=ds(Y.g),be(ee,6,ne);break;default:if(!Zt(ee,Y))break e}}ee={Z:Jt(ee,1),$:Jt(ee,2),height:Jt(ee,3),width:Jt(ee,4),rotation:Jt(ee,5,0),X:Wn(ee,6,0)},Y=oi(Aa(D.get(K)),Dr).map(oo);var se=R.get(K);e:for(ne=new ui,se=new Cr(se);jt(se);)switch(se.i){case 10:ne.addClassification(ii(se,new Gn,_a));break;default:if(!Zt(ne,se))break e}ee={T:ee,O:Y,M:io(ne)},U.push(ee)}I=U}else I=[];j[we]=I,O.g=7;break}if(me.type==="proto_list"){if(ae){for(I=Array(ae.size()),D=0;D<ae.size();D++)I[D]=ae.get(D);ae.delete()}else I=[];j[we]=I,O.g=7;break}if(ae===void 0){O.g=3;break}if(me.type==="float_list"){j[we]=ae,O.g=7;break}if(me.type==="proto"){j[we]=ae,O.g=7;break}if(me.type!=="texture")throw Error("Unknown output config type: '"+me.type+"'");return f=pe.s[we],f||(f=new Ns(pe.h,pe.D),pe.s[we]=f),$(O,Fr(f,ae,pe.G),13);case 13:y=O.h,j[we]=y;case 7:me.transform&&j[we]&&(j[we]=me.transform(j[we])),O.g=3;break;case 14:S[k]=O.h;case 3:G=xe.next(),O.g=2;break;case 4:return O.return(j)}})})}function La(h,g,v){return mt(h,function C(){var j=this,H;return X(C,function(B){return typeof v=="number"||v instanceof Uint8Array||v instanceof j.h.Uint8BlobList?B.return(v):v instanceof j.h.Texture2dDataOut?(H=j.s[g],H||(H=new Ns(j.h,j.D),j.s[g]=H),B.return(Fr(H,v,j.G))):B.return(void 0)})})}function jl(h,g){for(var v=g.name||"$",C=[].concat(u(g.wants)),j=new h.h.StringList,H=a(g.wants),B=H.next();!B.done;B=H.next())j.push_back(B.value);H=h.h.PacketListener.implement({onResults:function(G){for(var Z={},ie=0;ie<g.wants.length;++ie)Z[C[ie]]=G.get(ie);var pe=h.listeners[v];pe&&(h.C=Ra(h,Z,g.outs).then(function(xe){xe=pe(xe);for(var we=0;we<g.wants.length;++we){var me=Z[C[we]];typeof me=="object"&&me.hasOwnProperty&&me.hasOwnProperty("delete")&&me.delete()}xe&&(h.C=xe)}))}}),h.i.attachMultiListener(j,H),j.delete()}e.onResults=function(h,g){this.listeners[g||"$"]=h},ce("Solution",ir),ce("OptionType",{BOOL:0,NUMBER:1,aa:2,0:"BOOL",1:"NUMBER",2:"STRING"});function Bl(h){h=Ca(h);var g=h.getMesh();if(!g)return h;var v=new Float32Array(g.getVertexBufferList());g.getVertexBufferList=function(){return v};var C=new Uint32Array(g.getIndexBufferList());return g.getIndexBufferList=function(){return C},h}var lo={files:[{url:"face_mesh_solution_packed_assets_loader.js"},{simd:!0,url:"face_mesh_solution_simd_wasm_bin.js"},{simd:!1,url:"face_mesh_solution_wasm_bin.js"}],graph:{url:"face_mesh.binarypb"},listeners:[{wants:["multi_face_geometry","image_transformed","multi_face_landmarks"],outs:{image:"image_transformed",multiFaceGeometry:{type:"proto_list",stream:"multi_face_geometry",transform:function(h){return h.map(Bl)}},multiFaceLandmarks:{type:"proto_list",stream:"multi_face_landmarks",transform:function(h){return h.map(function(g){return oi(Aa(g),Dr).map(oo)})}}}}],inputs:{image:{type:"video",stream:"input_frames_gpu"}},options:{useCpuInference:{type:0,graphOptionXref:{calculatorType:"InferenceCalculator",fieldName:"use_cpu_inference"},default:"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document},enableFaceGeometry:{type:0,graphOptionXref:{calculatorName:"EnableFaceGeometryConstant",calculatorType:"ConstantSidePacketCalculator",fieldName:"bool_value"}},selfieMode:{type:0,graphOptionXref:{calculatorType:"GlScalerCalculator",calculatorIndex:1,fieldName:"flip_horizontal"}},maxNumFaces:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorNumFaces",fieldName:"int_value"}},refineLandmarks:{type:0,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorRefineLandmarks",fieldName:"bool_value"}},minDetectionConfidence:{type:1,graphOptionXref:{calculatorType:"TensorsToDetectionsCalculator",calculatorName:"facelandmarkfrontgpu__facedetectionshortrangegpu__facedetectionshortrangecommon__TensorsToDetectionsCalculator",fieldName:"min_score_thresh"}},minTrackingConfidence:{type:1,graphOptionXref:{calculatorType:"ThresholdingCalculator",calculatorName:"facelandmarkfrontgpu__facelandmarkgpu__ThresholdingCalculator",fieldName:"threshold"}},cameraNear:{type:1,graphOptionXref:{calculatorType:"FaceGeometryEnvGeneratorCalculator",fieldName:"near"}},cameraFar:{type:1,graphOptionXref:{calculatorType:"FaceGeometryEnvGeneratorCalculator",fieldName:"far"}},cameraVerticalFovDegrees:{type:1,graphOptionXref:{calculatorType:"FaceGeometryEnvGeneratorCalculator",fieldName:"vertical_fov_degrees"}}}},co=[[61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]],fo=[[263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]],po=[[276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]],ho=[[33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]],mo=[[46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]],go=[[10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]],za=[].concat(u(co),u(fo),u(po),u(ho),u(mo),u(go));function Ma(h){h=h||{},h=Object.assign(Object.assign({},lo),h),this.g=new ir(h)}e=Ma.prototype,e.close=function(){return this.g.close(),Promise.resolve()},e.onResults=function(h){this.g.onResults(h)},e.initialize=function(){return mt(this,function h(){var g=this;return X(h,function(v){return $(v,g.g.initialize(),0)})})},e.reset=function(){this.g.reset()},e.send=function(h){return mt(this,function g(){var v=this;return X(g,function(C){return $(C,v.g.send(h),0)})})},e.setOptions=function(h){this.g.setOptions(h)},ce("FACE_GEOMETRY",{Layout:{COLUMN_MAJOR:0,ROW_MAJOR:1,0:"COLUMN_MAJOR",1:"ROW_MAJOR"},PrimitiveType:{TRIANGLE:0,0:"TRIANGLE"},VertexType:{VERTEX_PT:0,0:"VERTEX_PT"},DEFAULT_CAMERA_PARAMS:{verticalFovDegrees:63,near:1,far:1e4}}),ce("FaceMesh",Ma),ce("FACEMESH_LIPS",co),ce("FACEMESH_LEFT_EYE",fo),ce("FACEMESH_LEFT_EYEBROW",po),ce("FACEMESH_LEFT_IRIS",[[474,475],[475,476],[476,477],[477,474]]),ce("FACEMESH_RIGHT_EYE",ho),ce("FACEMESH_RIGHT_EYEBROW",mo),ce("FACEMESH_RIGHT_IRIS",[[469,470],[470,471],[471,472],[472,469]]),ce("FACEMESH_FACE_OVAL",go),ce("FACEMESH_CONTOURS",za),ce("FACEMESH_TESSELATION",[[127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]]),ce("matrixDataToMatrix",function(h){for(var g=h.getCols(),v=h.getRows(),C=h.getPackedDataList(),j=[],H=0;H<v;H++)j.push(Array(g));for(H=0;H<v;H++)for(var B=0;B<g;B++){var G=h.getLayout()===1?H*g+B:B*v+H;j[H][B]=C[G]}return j}),ce("VERSION","0.4.1633559619")}).call(Jn);var Jg=FaceMesh;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Zg=1e-7,ey=1e-4;class ty{refCount(t){return Wt("refCount")}incRef(t){return Wt("incRef")}timerAvailable(){return!0}time(t){return Wt("time")}read(t){return Wt("read")}readSync(t){return Wt("readSync")}readToGPU(t,n){return Wt("readToGPU")}numDataIds(){return Wt("numDataIds")}disposeData(t,n){return Wt("disposeData")}write(t,n,r){return Wt("write")}move(t,n,r,s,i){return Wt("move")}createTensorFromGPUData(t,n,r){return Wt("createTensorFromGPUData")}memory(){return Wt("memory")}floatPrecision(){return Wt("floatPrecision")}epsilon(){return this.floatPrecision()===32?Zg:ey}dispose(){return Wt("dispose")}}function Wt(e){throw new Error(`'${e}' not yet implemented or not found in the registry. This kernel may not be supported by the tfjs backend you have chosen`)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function A(e,t){if(!e)throw new Error(typeof t=="string"?t:t())}function _n(e,t,n=""){A(Sr(e,t),()=>n+` Shapes ${e} and ${t} must match`)}function Yi(e){A(e!=null,()=>"The input to the tensor constructor must be a non-null value.")}function ot(e){if(e.length===0)return 1;let t=e[0];for(let n=1;n<e.length;n++)t*=e[n];return t}function ny(e,t){if(e===t)return!0;if(e==null||t==null||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==null&&t[n]!==null&&e[n]!==t[n])return!1;return!0}function Sr(e,t){if(e===t)return!0;if(e==null||t==null||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function aa(e){return e%1===0}function Su(e,t){return t<=e.length?e:e+" ".repeat(t-e.length)}function kl(e,t){const n=t.length;return e=e==null?t.map((r,s)=>s):[].concat(e),A(e.every(r=>r>=-n&&r<n),()=>`All values in axis param must be in range [-${n}, ${n}) but got axis ${e}`),A(e.every(r=>aa(r)),()=>`All values in axis param must be integers but got axis ${e}`),e.map(r=>r<0?n+r:r)}function ry(e,t){const n=[],r=[],s=t!=null&&Array.isArray(t)&&t.length===0,i=t==null||s?null:kl(t,e).sort();let o=0;for(let a=0;a<e.length;++a){if(i!=null){if(i[o]===a&&e[a]!==1)throw new Error(`Can't squeeze axis ${a} since its dim '${e[a]}' is not 1`);(i[o]==null||i[o]>a)&&e[a]===1&&(n.push(e[a]),r.push(a)),i[o]<=a&&o++}e[a]!==1&&(n.push(e[a]),r.push(a))}return{newShape:n,keptDims:r}}function sy(e,t){return Md(e,t)}function Md(e,t){let n=null;if(e==null||e==="float32")n=new Float32Array(t);else if(e==="int32")n=new Int32Array(t);else if(e==="bool")n=new Uint8Array(t);else if(e==="string")n=new Array(t);else throw new Error(`Unknown data type ${e}`);return n}function iy(e,t){for(let n=0;n<e.length;n++){const r=e[n];if(isNaN(r)||!isFinite(r))throw Error(`A tensor of type ${t} being uploaded contains ${r}.`)}}function oy(e){return e==="bool"||e==="complex64"||e==="float32"||e==="int32"||e==="string"}function x1(e){if(e==="float32"||e==="int32")return 4;if(e==="complex64")return 8;if(e==="bool")return 1;throw new Error(`Unknown dtype ${e}`)}function ay(e){if(e==null)return 0;let t=0;return e.forEach(n=>t+=n.length),t}function Q2(e){return typeof e=="string"||e instanceof String}function uy(e){return typeof e=="boolean"}function ly(e){return typeof e=="number"}function Tl(e){return Array.isArray(e)?Tl(e[0]):e instanceof Float32Array?"float32":e instanceof Int32Array||e instanceof Uint8Array||e instanceof Uint8ClampedArray?"int32":ly(e)?"float32":Q2(e)?"string":uy(e)?"bool":"float32"}function _1(e){return!!(e&&e.constructor&&e.call&&e.apply)}function J2(e){const t=e.length;if(t<2)return[];const n=new Array(t-1);n[t-2]=e[t-1];for(let r=t-3;r>=0;--r)n[r]=n[r+1]*e[r+1];return n}function jd(e,t,n,r=!1){const s=new Array;if(t.length===1){const i=t[0]*(r?2:1);for(let o=0;o<i;o++)s[o]=n[e+o]}else{const i=t[0],o=t.slice(1),a=o.reduce((u,l)=>u*l)*(r?2:1);for(let u=0;u<i;u++)s[u]=jd(e+u*a,o,n,r)}return s}function $1(e,t,n=!1){if(e.length===0)return t[0];const r=e.reduce((s,i)=>s*i)*(n?2:1);if(r===0)return[];if(r!==t.length)throw new Error(`[${e}] does not match the input size ${t.length}${n?" for a complex tensor":""}.`);return jd(0,e,t,n)}function Bd(e,t){const n=Z2(e,t);for(let r=0;r<n.length;r++)n[r]=1;return n}function Z2(e,t){if(t==null||t==="float32"||t==="complex64")return new Float32Array(e);if(t==="int32")return new Int32Array(e);if(t==="bool")return new Uint8Array(e);throw new Error(`Unknown data type ${t}`)}function fn(e){e.forEach(t=>{A(Number.isInteger(t)&&t>=0,()=>`Tensor must have a shape comprised of positive integers but got shape [${e}].`)})}function Ws(e){return e&&e.then&&typeof e.then=="function"}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const M3="tfjsflags";class cy{constructor(t){this.global=t,this.flags={},this.flagRegistry={},this.urlFlags={},this.getQueryParams=fy,this.populateURLFlags()}setPlatform(t,n){this.platform!=null&&(Te().getBool("IS_TEST")||Te().getBool("PROD")||console.warn(`Platform ${this.platformName} has already been set. Overwriting the platform with ${t}.`)),this.platformName=t,this.platform=n}registerFlag(t,n,r){if(this.flagRegistry[t]={evaluationFn:n,setHook:r},this.urlFlags[t]!=null){const s=this.urlFlags[t];Te().getBool("IS_TEST")||Te().getBool("PROD")||console.warn(`Setting feature override from URL ${t}: ${s}.`),this.set(t,s)}}async getAsync(t){return t in this.flags?this.flags[t]:(this.flags[t]=await this.evaluateFlag(t),this.flags[t])}get(t){if(t in this.flags)return this.flags[t];const n=this.evaluateFlag(t);if(Ws(n))throw new Error(`Flag ${t} cannot be synchronously evaluated. Please use getAsync() instead.`);return this.flags[t]=n,this.flags[t]}getNumber(t){return this.get(t)}getBool(t){return this.get(t)}getString(t){return this.get(t)}getFlags(){return this.flags}get features(){return this.flags}set(t,n){if(this.flagRegistry[t]==null)throw new Error(`Cannot set flag ${t} as it has not been registered.`);this.flags[t]=n,this.flagRegistry[t].setHook!=null&&this.flagRegistry[t].setHook(n)}evaluateFlag(t){if(this.flagRegistry[t]==null)throw new Error(`Cannot evaluate flag '${t}': no evaluation function found.`);return this.flagRegistry[t].evaluationFn()}setFlags(t){this.flags=Object.assign({},t)}reset(){this.flags={},this.urlFlags={},this.populateURLFlags()}populateURLFlags(){if(typeof this.global>"u"||typeof this.global.location>"u"||typeof this.global.location.search>"u")return;const t=this.getQueryParams(this.global.location.search);M3 in t&&t[M3].split(",").forEach(r=>{const[s,i]=r.split(":");this.urlFlags[s]=hy(s,i)})}}function fy(e){const t={};return e.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,(n,...r)=>(py(t,r[0],r[1]),r.join("="))),t}function py(e,t,n){e[decodeURIComponent(t)]=decodeURIComponent(n||"")}function hy(e,t){const n=t.toLowerCase();return n==="true"||n==="false"?n==="true":`${+n}`===n?+n:t}function Te(){return Ud}let Ud=null;function dy(e){Ud=e}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let mc;function Vd(){if(mc==null){let e;if(typeof window<"u")e=window;else if(typeof global<"u")e=global;else if(typeof process<"u")e=process;else if(typeof self<"u")e=self;else throw new Error("Could not find a global object");mc=e}return mc}function my(){const e=Vd();return e._tfGlobals==null&&(e._tfGlobals=new Map),e._tfGlobals}function ef(e,t){const n=my();if(n.has(e))return n.get(e);{const r=t();return n.set(e,r),n.get(e)}}const gy="Abs",yy="Acos",vy="Acosh",Wd="Add",wy="AddN",Sy="All",by="Any",Ny="ArgMax",ky="ArgMin",Ty="Asin",Ey="Asinh",xy="Atan",_y="Atanh",$y="Atan2",Iy="AvgPool",Ay="AvgPool3D",Oy="BatchMatMul",Cy="BatchToSpaceND",Dy="Bincount",Fy="BitwiseAnd",Py="BroadcastArgs",Hd="Cast",Ry="Ceil",Ly="ClipByValue",zy="Complex",My="ComplexAbs",jy="Concat",By="Conv2D",Uy="Conv2DBackpropFilter",Vy="Conv2DBackpropInput",Wy="Conv3D",Hy="Conv3DBackpropInputV2",Ky="Cos",Gy="Cosh",qy="Cumprod",Xy="Cumsum",Yy="CropAndResize",Qy="DenseBincount",Jy="DepthToSpace",Zy="DepthwiseConv2dNative",e6="DepthwiseConv2dNativeBackpropFilter",t6="DepthwiseConv2dNativeBackpropInput",n6="Diag",r6="Dilation2D",s6="RealDiv",i6="Einsum",o6="Elu",a6="Erf",u6="Equal",l6="Exp",c6="ExpandDims",f6="Expm1",p6="FFT",h6="Fill",d6="FlipLeftRight",m6="Floor",g6="FloorDiv",y6="FusedBatchNorm",v6="GatherV2",w6="GatherNd",S6="Greater",b6="GreaterEqual",Kd="Identity",N6="IFFT",k6="Imag",T6="IsFinite",E6="IsInf",x6="IsNan",_6="LeakyRelu",$6="Less",I6="LessEqual",A6="LinSpace",O6="Log",C6="Log1p",D6="LogicalAnd",F6="LogicalNot",P6="LogicalOr",R6="LRN",L6="Max",z6="Maximum",M6="MaxPool",j6="MaxPool3D",B6="MaxPoolWithArgmax",U6="Mean",V6="Min",W6="Minimum",H6="MirrorPad",K6="Mod",G6="Multinomial",q6="Multiply",X6="Neg",Y6="NotEqual",Q6="NonMaxSuppressionV3",J6="NonMaxSuppressionV4",Z6="NonMaxSuppressionV5",e5="OnesLike",t5="OneHot",n5="Pack",r5="PadV2",s5="Pow",i5="Prelu",o5="Prod",a5="RaggedGather",u5="RaggedRange",l5="RaggedTensorToTensor",c5="Range",f5="Real",p5="Reciprocal",h5="Relu",d5="Reshape",m5="ResizeNearestNeighbor",g5="ResizeBilinear",y5="Relu6",v5="Reverse",w5="Round",S5="Rsqrt",b5="ScatterNd",N5="TensorScatterUpdate",k5="SearchSorted",T5="Select",E5="Selu",x5="Slice",_5="Sin",$5="Sinh",I5="Sign",A5="Sigmoid",O5="Softplus",C5="Sqrt",D5="Sum",F5="SpaceToBatchND",P5="SplitV",R5="Softmax",L5="SparseFillEmptyRows",z5="SparseReshape",M5="SparseSegmentMean",j5="SparseSegmentSum",B5="SparseToDense",U5="SquaredDifference",V5="StaticRegexReplace",W5="StridedSlice",H5="StringNGrams",K5="StringSplit",G5="StringToHashBucketFast",q5="Sub",X5="Tan",Y5="Tanh",Gd="Tile",Q5="TopK",J5="Transform",gc="Transpose",Z5="Unique",e7="Unpack",t7="UnsortedSegmentSum",n7="ZerosLike",r7="Step",j3="FromPixels",s7="RotateWithOffset",B3="_FusedMatMul",U3="FusedConv2D",V3="FusedDepthwiseConv2D";/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Eo(...e){Te().getBool("IS_TEST")||Te().getBool("PROD")||console.warn(...e)}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const qd=ef("kernelRegistry",()=>new Map),i7=ef("gradRegistry",()=>new Map);function I1(e,t){const n=o7(e,t);return qd.get(n)}function W3(e){return i7.get(e)}function H3(e){const t=qd.entries(),n=[];for(;;){const{done:r,value:s}=t.next();if(r)break;const[i,o]=s,[a]=i.split("_");a===e&&n.push(o)}return n}function o7(e,t){return`${t}_${e}`}/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Xd(e){return e instanceof Float32Array||e instanceof Int32Array||e instanceof Uint8Array||e instanceof Uint8ClampedArray}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function a7(e,t){return e instanceof Float32Array&&t==="float32"||e instanceof Int32Array&&t==="int32"||e instanceof Uint8Array&&t==="bool"}function Yd(e,t){if(t==="string")throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(e)&&(e=ua(e)),Te().getBool("DEBUG")&&iy(e,t),a7(e,t))return e;if(t==null||t==="float32"||t==="complex64")return new Float32Array(e);if(t==="int32")return new Int32Array(e);if(t==="bool"){const n=new Uint8Array(e.length);for(let r=0;r<n.length;++r)Math.round(e[r])!==0&&(n[r]=1);return n}else throw new Error(`Unknown data type ${t}`)}function Xu(){return Te().platform.now()}function u7(e,t="utf-8"){return t=t||"utf-8",Te().platform.encode(e,t)}function K3(e,t="utf-8"){return t=t||"utf-8",Te().platform.decode(e,t)}function xn(e){return Te().platform.isTypedArray!=null?Te().platform.isTypedArray(e):Xd(e)}function ua(e,t=[],n=!1){if(t==null&&(t=[]),typeof e=="boolean"||typeof e=="number"||typeof e=="string"||Ws(e)||e==null||xn(e)&&n)t.push(e);else if(Array.isArray(e)||xn(e))for(let r=0;r<e.length;++r)ua(e[r],t,n);else{let r=-1;for(const s of Object.keys(e))/^([1-9]+[0-9]*|0)$/.test(s)&&(r=Math.max(r,Number(s)));for(let s=0;s<=r;s++)ua(e[s],t,n)}return t}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class l7{constructor(t,n){this.backendTimer=t,this.logger=n,n==null&&(this.logger=new f7)}profileKernel(t,n,r){let s;const i=()=>{s=r()};let o;const a=Xu();if(this.backendTimer.timerAvailable())o=this.backendTimer.time(i);else{i();for(const l of s)l.dataSync();o=Promise.resolve({kernelMs:Xu()-a})}if(Te().getBool("CHECK_COMPUTATION_FOR_ERRORS"))for(let l=0;l<s.length;l++){const c=s[l];c.data().then(p=>{c7(p,c.dtype,t)})}return{kernelName:t,outputs:s,inputs:n,timeMs:o.then(l=>l.kernelMs),extraInfo:o.then(l=>l.getExtraProfileInfo!=null?l.getExtraProfileInfo():"")}}logKernelProfile(t){const{kernelName:n,outputs:r,timeMs:s,inputs:i,extraInfo:o}=t;r.forEach(a=>{Promise.all([a.data(),s,o]).then(u=>{this.logger.logKernelProfile(n,a,u[0],u[1],i,u[2])})})}}function c7(e,t,n){if(t!=="float32")return!1;for(let r=0;r<e.length;r++){const s=e[r];if(isNaN(s)||!isFinite(s))return console.warn(`Found ${s} in the result of '${n}'`),!0}return!1}class f7{logKernelProfile(t,n,r,s,i,o){const a=typeof s=="number"?Su(`${s}ms`,9):s.error,u=Su(t,25),l=n.rank,c=n.size,p=Su(n.shape.toString(),14);let d="";for(const w in i){const b=i[w];if(b!=null){const E=b.shape||n.shape,_=E.length;d+=`${w}: ${_}D ${_>0?E:""} `}}console.log(`%c${u}	%c${a}	%c${l}D ${p}	%c${c}	%c${d}	%c${o}`,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")}}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function p7(e,t,n){const r={},s={};for(let u=0;u<t.length;u++)r[t[u].id]=!0;for(let u=0;u<e.length;u++){const l=e[u],c=l.inputs;for(const p in c){const d=c[p];let w=!1;for(let b=0;b<t.length;b++)if(r[d.id]){l.outputs.forEach(E=>r[E.id]=!0),w=!0,s[l.id]=!0;break}if(w)break}}const i={};i[n.id]=!0;const o={};for(let u=e.length-1;u>=0;u--){const l=e[u],c=l.inputs;for(let p=0;p<l.outputs.length;p++)if(i[l.outputs[p].id]){for(const d in c)i[c[d].id]=!0,o[l.id]=!0;break}}const a=[];for(let u=0;u<e.length;u++){const l=e[u];if(s[l.id]&&o[l.id]){const c={};for(const d in l.inputs){const w=l.inputs[d];r[w.id]&&(c[d]=w)}const p=Object.assign({},l);p.inputs=c,p.outputs=l.outputs,a.push(p)}}return a}function h7(e,t,n,r){for(let s=t.length-1;s>=0;s--){const i=t[s],o=[];if(i.outputs.forEach(u=>{const l=e[u.id];l!=null?o.push(l):o.push(null)}),i.gradient==null)throw new Error(`Cannot compute gradient: gradient function not found for ${i.kernelName}.`);const a=i.gradient(o);for(const u in i.inputs){if(!(u in a))throw new Error(`Cannot backprop through input ${u}. Available gradients found: ${Object.keys(a)}.`);const l=n(()=>a[u]());if(l.dtype!=="float32")throw new Error(`Error in gradient for op ${i.kernelName}. The gradient of input ${u} must have 'float32' dtype, but has '${l.dtype}'`);const c=i.inputs[u];if(!Sr(l.shape,c.shape))throw new Error(`Error in gradient for op ${i.kernelName}. The gradient of input '${u}' has shape '${l.shape}', which does not match the shape of the input '${c.shape}'`);if(e[c.id]==null)e[c.id]=l;else{const p=e[c.id];e[c.id]=r(p,l),p.dispose()}}}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const G3=20,xo=3,yc=7;function d7(e,t,n,r){const s=J2(t),i=m7(e,t,n,s),o=t.length,a=bu(e,t,n,s,i),u=["Tensor"];return r&&(u.push(`  dtype: ${n}`),u.push(`  rank: ${o}`),u.push(`  shape: [${t}]`),u.push("  values:")),u.push(a.map(l=>"    "+l).join(`
`)),u.join(`
`)}function m7(e,t,n,r){const s=ot(t),i=r[r.length-1],o=new Array(i).fill(0),a=t.length,u=n==="complex64"?Do(e):e;if(a>1)for(let l=0;l<s/i;l++){const c=l*i;for(let p=0;p<i;p++)o[p]=Math.max(o[p],Co(u[c+p],0,n).length)}return o}function Co(e,t,n){let r;return Array.isArray(e)?r=`${parseFloat(e[0].toFixed(yc))} + ${parseFloat(e[1].toFixed(yc))}j`:Q2(e)?r=`'${e}'`:n==="bool"?r=Qd(e):r=parseFloat(e.toFixed(yc)).toString(),Su(r,t)}function Qd(e){return e===0?"false":"true"}function bu(e,t,n,r,s,i=!0){const o=n==="complex64"?2:1,a=t[0],u=t.length;if(u===0){if(n==="complex64"){const E=Do(e);return[Co(E[0],0,n)]}return n==="bool"?[Qd(e[0])]:[e[0].toString()]}if(u===1){if(a>G3){const _=xo*o;let N=Array.from(e.slice(0,_)),x=Array.from(e.slice((a-xo)*o,a*o));return n==="complex64"&&(N=Do(N),x=Do(x)),["["+N.map(($,F)=>Co($,s[F],n)).join(", ")+", ..., "+x.map(($,F)=>Co($,s[a-xo+F],n)).join(", ")+"]"]}return["["+(n==="complex64"?Do(e):Array.from(e)).map((_,N)=>Co(_,s[N],n)).join(", ")+"]"]}const l=t.slice(1),c=r.slice(1),p=r[0]*o,d=[];if(a>G3){for(let E=0;E<xo;E++){const _=E*p,N=_+p;d.push(...bu(e.slice(_,N),l,n,c,s,!1))}d.push("...");for(let E=a-xo;E<a;E++){const _=E*p,N=_+p;d.push(...bu(e.slice(_,N),l,n,c,s,E===a-1))}}else for(let E=0;E<a;E++){const _=E*p,N=_+p;d.push(...bu(e.slice(_,N),l,n,c,s,E===a-1))}const w=u===2?",":"";d[0]="["+(a>0?d[0]+w:"");for(let E=1;E<d.length-1;E++)d[E]=" "+d[E]+w;let b=`,
`;for(let E=2;E<u;E++)b+=`
`;return d[d.length-1]=" "+d[d.length-1]+"]"+(i?"":b),d}function Do(e){const t=[];for(let n=0;n<e.length;n+=2)t.push([e[n],e[n+1]]);return t}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class A1{constructor(t,n,r){if(this.dtype=n,this.shape=t.slice(),this.size=ot(t),r!=null){const s=r.length;A(s===this.size,()=>`Length of values '${s}' does not match the size inferred by the shape '${this.size}'.`)}if(n==="complex64")throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=r||Md(n,this.size),this.strides=J2(t)}set(t,...n){n.length===0&&(n=[0]),A(n.length===this.rank,()=>`The number of provided coordinates (${n.length}) must match the rank (${this.rank})`);const r=this.locToIndex(n);this.values[r]=t}get(...t){t.length===0&&(t=[0]);let n=0;for(const s of t){if(s<0||s>=this.shape[n]){const i=`Requested out of range element at ${t}.   Buffer shape=${this.shape}`;throw new Error(i)}n++}let r=t[t.length-1];for(let s=0;s<t.length-1;++s)r+=this.strides[s]*t[s];return this.values[r]}locToIndex(t){if(this.rank===0)return 0;if(this.rank===1)return t[0];let n=t[t.length-1];for(let r=0;r<t.length-1;++r)n+=this.strides[r]*t[r];return n}indexToLoc(t){if(this.rank===0)return[];if(this.rank===1)return[t];const n=new Array(this.shape.length);for(let r=0;r<n.length-1;++r)n[r]=Math.floor(t/this.strides[r]),t-=n[r]*this.strides[r];return n[n.length-1]=t,n}get rank(){return this.shape.length}toTensor(){return Fn().makeTensor(this.values,this.shape,this.dtype)}}let Fn=null,di=null;function g7(e){Fn=e}function y7(e){di=e}class qe{constructor(t,n,r,s){this.kept=!1,this.isDisposedInternal=!1,this.shape=t.slice(),this.dtype=n||"float32",this.size=ot(t),this.strides=J2(t),this.dataId=r,this.id=s,this.rankType=this.rank<5?this.rank.toString():"higher"}get rank(){return this.shape.length}async buffer(){const t=await this.data();return di.buffer(this.shape,this.dtype,t)}bufferSync(){return di.buffer(this.shape,this.dtype,this.dataSync())}async array(){const t=await this.data();return $1(this.shape,t,this.dtype==="complex64")}arraySync(){return $1(this.shape,this.dataSync(),this.dtype==="complex64")}async data(){this.throwIfDisposed();const t=Fn().read(this.dataId);if(this.dtype==="string"){const n=await t;try{return n.map(r=>K3(r))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}}return t}dataToGPU(t){return this.throwIfDisposed(),Fn().readToGPU(this.dataId,t)}dataSync(){this.throwIfDisposed();const t=Fn().readSync(this.dataId);if(this.dtype==="string")try{return t.map(n=>K3(n))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return t}async bytes(){this.throwIfDisposed();const t=await Fn().read(this.dataId);return this.dtype==="string"?t:new Uint8Array(t.buffer)}dispose(){this.isDisposed||(this.kerasMask&&this.kerasMask.dispose(),Fn().disposeTensor(this),this.isDisposedInternal=!0)}get isDisposed(){return this.isDisposedInternal}throwIfDisposed(){if(this.isDisposed)throw new Error("Tensor is disposed.")}print(t=!1){return di.print(this,t)}clone(){return this.throwIfDisposed(),di.clone(this)}toString(t=!1){const n=this.dataSync();return d7(n,this.shape,this.dtype,t)}cast(t){return this.throwIfDisposed(),di.cast(this,t)}variable(t=!0,n,r){return this.throwIfDisposed(),Fn().makeVariable(this,t,n,r)}}Object.defineProperty(qe,Symbol.hasInstance,{value:e=>!!e&&e.data!=null&&e.dataSync!=null&&e.throwIfDisposed!=null});function Jd(){return ef("Tensor",()=>qe)}Jd();class Yu extends qe{constructor(t,n,r,s){super(t.shape,t.dtype,t.dataId,s),this.trainable=n,this.name=r}assign(t){if(t.dtype!==this.dtype)throw new Error(`dtype of the new value (${t.dtype}) and previous value (${this.dtype}) must match`);if(!Sr(t.shape,this.shape))throw new Error(`shape of the new value (${t.shape}) and previous value (${this.shape}) must match`);Fn().disposeTensor(this),this.dataId=t.dataId,Fn().incRef(this,null)}dispose(){Fn().disposeVariable(this),this.isDisposedInternal=!0}}Object.defineProperty(Yu,Symbol.hasInstance,{value:e=>e instanceof qe&&e.assign!=null&&e.assign instanceof Function});/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var q3;(function(e){e.R0="R0",e.R1="R1",e.R2="R2",e.R3="R3",e.R4="R4",e.R5="R5",e.R6="R6"})(q3||(q3={}));var O1;(function(e){e.float32="float32",e.int32="int32",e.bool="int32",e.complex64="complex64"})(O1||(O1={}));var C1;(function(e){e.float32="float32",e.int32="int32",e.bool="bool",e.complex64="complex64"})(C1||(C1={}));var D1;(function(e){e.float32="float32",e.int32="float32",e.bool="float32",e.complex64="complex64"})(D1||(D1={}));var F1;(function(e){e.float32="complex64",e.int32="complex64",e.bool="complex64",e.complex64="complex64"})(F1||(F1={}));const v7={float32:D1,int32:O1,bool:C1,complex64:F1};function w7(e,t){if(e==="string"||t==="string"){if(e==="string"&&t==="string")return"string";throw new Error(`Can not upcast ${e} with ${t}`)}return v7[e][t]}function Zd(e){return e!=null&&typeof e=="object"&&"texture"in e&&e.texture instanceof WebGLTexture}function e4(e){return typeof GPUBuffer<"u"&&e!=null&&typeof e=="object"&&"buffer"in e&&e.buffer instanceof GPUBuffer}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Qe(e,t){if(e.dtype===t.dtype)return[e,t];const n=w7(e.dtype,t.dtype);return[e.cast(n),t.cast(n)]}function S7(e,t){A(e.dtype===t.dtype,()=>`The dtypes of the first(${e.dtype}) and second(${t.dtype}) input must match`)}function t4(e){const t=[];return n4(e,t,new Set),t}function n4(e,t,n){if(e==null)return;if(e instanceof qe){t.push(e);return}if(!b7(e))return;const r=e;for(const s in r){const i=r[s];n.has(i)||(n.add(i),n4(i,t,n))}}function b7(e){return Array.isArray(e)||typeof e=="object"}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function vc(e){return e.kernelName!=null}class X3{constructor(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null,get kernelNames(){return Array.from(new Set(this.kernels.map(t=>t.name)))}}}dispose(){for(const t in this.registeredVariables)this.registeredVariables[t].dispose()}}class Wi{constructor(t){this.ENV=t,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new X3}async ready(){if(this.pendingBackendInit!=null)return this.pendingBackendInit.then(()=>{});if(this.backendInstance!=null)return;const t=this.getSortedBackends();for(let n=0;n<t.length;n++){const r=t[n];if(await this.initializeBackend(r).success){await this.setBackend(r);return}}throw new Error("Could not initialize any backends, all backend initializations failed.")}get backend(){if(this.pendingBackendInit!=null)throw new Error(`Backend '${this.backendName}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);if(this.backendInstance==null){const{name:t,asyncInit:n}=this.initializeBackendsAndReturnBest();if(n)throw new Error(`The highest priority backend '${t}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);this.setBackend(t)}return this.backendInstance}backendNames(){return Object.keys(this.registryFactory)}findBackend(t){if(!(t in this.registry))if(t in this.registryFactory){const{asyncInit:n}=this.initializeBackend(t);if(n)return null}else return null;return this.registry[t]}findBackendFactory(t){return t in this.registryFactory?this.registryFactory[t].factory:null}registerBackend(t,n,r=1){return t in this.registryFactory?(Eo(`${t} backend was already registered. Reusing existing backend factory.`),!1):(this.registryFactory[t]={factory:n,priority:r},!0)}async setBackend(t){if(this.registryFactory[t]==null)throw new Error(`Backend name '${t}' not found in registry`);if(this.backendName=t,this.registry[t]==null){this.backendInstance=null;const{success:n,asyncInit:r}=this.initializeBackend(t);if(!(r?await n:n))return!1}return this.backendInstance=this.registry[t],this.setupRegisteredKernels(),this.profiler=new l7(this.backendInstance),!0}setupRegisteredKernels(){H3(this.backendName).forEach(n=>{n.setupFunc!=null&&n.setupFunc(this.backendInstance)})}disposeRegisteredKernels(t){H3(t).forEach(r=>{r.disposeFunc!=null&&r.disposeFunc(this.registry[t])})}initializeBackend(t){const n=this.registryFactory[t];if(n==null)throw new Error(`Cannot initialize backend ${t}, no registration found.`);try{const r=n.factory();if(r&&!(r instanceof ty)&&typeof r.then=="function"){const s=++this.pendingBackendInitId,i=r.then(o=>s<this.pendingBackendInitId?!1:(this.registry[t]=o,this.pendingBackendInit=null,!0)).catch(o=>(s<this.pendingBackendInitId||(this.pendingBackendInit=null,Eo(`Initialization of backend ${t} failed`),Eo(o.stack||o.message)),!1));return this.pendingBackendInit=i,{success:i,asyncInit:!0}}else return this.registry[t]=r,{success:!0,asyncInit:!1}}catch(r){return Eo(`Initialization of backend ${t} failed`),Eo(r.stack||r.message),{success:!1,asyncInit:!1}}}removeBackend(t){if(!(t in this.registryFactory))throw new Error(`${t} backend not found in registry`);this.backendName===t&&this.pendingBackendInit!=null&&this.pendingBackendInitId++,t in this.registry&&(this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t]),delete this.registryFactory[t],this.backendName===t&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)}getSortedBackends(){if(Object.keys(this.registryFactory).length===0)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort((t,n)=>this.registryFactory[n].priority-this.registryFactory[t].priority)}initializeBackendsAndReturnBest(){const t=this.getSortedBackends();for(let n=0;n<t.length;n++){const r=t[n],{success:s,asyncInit:i}=this.initializeBackend(r);if(i||s)return{name:r,asyncInit:i}}throw new Error("Could not initialize any backends, all backend initializations failed.")}moveData(t,n){const r=this.state.tensorInfo.get(n),s=r.backend,i=this.readSync(n),o=s.refCount(n);s.disposeData(n,!0),r.backend=t,t.move(n,i,r.shape,r.dtype,o),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++}tidy(t,n){let r=null;if(n==null){if(typeof t!="function")throw new Error("Please provide a function to tidy()");n=t}else{if(typeof t!="string"&&!(t instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if(typeof n!="function")throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");r=t}let s;return this.scopedRun(()=>this.startScope(r),()=>this.endScope(s),()=>(s=n(),s instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),s))}scopedRun(t,n,r){t();try{const s=r();return n(),s}catch(s){throw n(),s}}nextTensorId(){return Wi.nextTensorId++}nextVariableId(){return Wi.nextVariableId++}clone(t){const n=L.runKernel(Kd,{x:t}),r={x:t},s=o=>({x:()=>{const a="float32",u={x:o},l={dtype:a};return L.runKernel(Hd,u,l)}}),i=[];return this.addTapeNode(this.state.activeScope.name,r,[n],s,i,{}),n}runKernel(t,n,r){if(this.backendName==null&&this.backend,!(I1(t,this.backendName)!=null))throw new Error(`Kernel '${t}' not registered for backend '${this.backendName}'`);return this.runKernelFunc({kernelName:t,inputs:n,attrs:r})}shouldCheckForMemLeaks(){return this.ENV.getBool("IS_TEST")}checkKernelForMemLeak(t,n,r){const s=this.backend.numDataIds();let i=0;r.forEach(u=>{i+=u.dtype==="complex64"?3:1});const o=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],a=s-n-i-o;if(a>0)throw new Error(`Backend '${this.backendName}' has an internal memory leak (${a} data ids) after running '${t}'`)}runKernelFunc(t){let n,r=[];const s=this.isTapeOn(),i=this.state.numBytes,o=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);let a;this.backendName==null&&this.backend;let u;const l=vc(t)?t.kernelName:this.state.activeScope!=null?this.state.activeScope.name:"";if(vc(t)){const{kernelName:b,inputs:E,attrs:_}=t;this.backendName==null&&this.backend;const N=I1(b,this.backendName);A(N!=null,()=>`Cannot find registered kernel '${b}' for backend '${this.backendName}'`),a=()=>{const x=this.backend.numDataIds();u=N.kernelFunc({inputs:E,attrs:_,backend:this.backend});const $=Array.isArray(u)?u:[u];this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(b,x,$);const F=$.map(z=>z.rank!=null?z:this.makeTensorFromTensorInfo(z));if(s){const z=this.getTensorsForGradient(b,E,F);r=this.saveTensorsForBackwardMode(z)}return F}}else{const{forwardFunc:b}=t,E=_=>{s&&(r=_.map(N=>this.keep(this.clone(N))))};a=()=>{const _=this.backend.numDataIds();u=this.tidy(()=>b(this.backend,E));const N=Array.isArray(u)?u:[u];return this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(l,_,N),N}}const{inputs:c,attrs:p}=t,d=vc(t)?null:t.backwardsFunc;let w;return this.scopedRun(()=>this.state.kernelDepth++,()=>this.state.kernelDepth--,()=>{!this.ENV.getBool("DEBUG")&&!this.state.profiling?n=a():(w=this.profiler.profileKernel(l,c,()=>a()),this.ENV.getBool("DEBUG")&&this.profiler.logKernelProfile(w),n=w.outputs)}),s&&this.addTapeNode(l,c,n,d,r,p),this.state.profiling&&this.state.activeProfile.kernels.push({name:l,bytesAdded:this.state.numBytes-i,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-o,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(c).map(b=>c[b]!=null?c[b].shape:null),outputShapes:n.map(b=>b.shape),kernelTimeMs:w.timeMs,extraInfo:w.extraInfo}),Array.isArray(u)?n:n[0]}saveTensorsForBackwardMode(t){return t.map(r=>this.keep(this.clone(r)))}getTensorsForGradient(t,n,r){const s=W3(t);if(s!=null){const i=s.inputsToSave||[],o=s.outputsToSave||[];let a;s.saveAllInputs?(A(Array.isArray(n),()=>"saveAllInputs is true, expected inputs to be an array."),a=Object.keys(n).map(l=>n[l])):a=i.map(l=>n[l]);const u=r.filter((l,c)=>o[c]);return a.concat(u)}return[]}makeTensor(t,n,r,s){if(t==null)throw new Error("Values passed to engine.makeTensor() are null");r=r||"float32",s=s||this.backend;let i=t;r==="string"&&Q2(t[0])&&(i=t.map(u=>u7(u)));const o=s.write(i,n,r),a=new qe(n,r,o,this.nextTensorId());if(this.trackTensor(a,s),r==="string"){const u=this.state.tensorInfo.get(o),l=ay(i);this.state.numBytes+=l-u.bytes,u.bytes=l}return a}makeTensorFromDataId(t,n,r,s){r=r||"float32";const i={dataId:t,shape:n,dtype:r};return this.makeTensorFromTensorInfo(i,s)}makeTensorFromTensorInfo(t,n){const{dataId:r,shape:s,dtype:i}=t,o=new qe(s,i,r,this.nextTensorId());return this.trackTensor(o,n),o}makeVariable(t,n=!0,r,s){r=r||this.nextVariableId().toString(),s!=null&&s!==t.dtype&&(t=t.cast(s));const i=new Yu(t,n,r,this.nextTensorId());if(this.state.registeredVariables[i.name]!=null)throw new Error(`Variable with name ${i.name} was already registered`);return this.state.registeredVariables[i.name]=i,this.incRef(i,this.backend),i}trackTensor(t,n){this.state.numTensors++,t.dtype==="string"&&this.state.numStringTensors++;let r=0;t.dtype!=="complex64"&&t.dtype!=="string"&&(r=t.size*x1(t.dtype)),this.state.numBytes+=r,this.state.tensorInfo.has(t.dataId)||(this.state.numDataBuffers++,this.state.tensorInfo.set(t.dataId,{backend:n||this.backend,dtype:t.dtype,shape:t.shape,bytes:r})),t instanceof Yu||this.track(t)}incRef(t,n){this.trackTensor(t,n),this.backend.incRef(t.dataId)}removeDataId(t,n){this.state.tensorInfo.has(t)&&this.state.tensorInfo.get(t).backend===n&&(this.state.tensorInfo.delete(t),this.state.numDataBuffers--)}disposeTensor(t){if(!this.state.tensorInfo.has(t.dataId))return;const n=this.state.tensorInfo.get(t.dataId);if(this.state.numTensors--,t.dtype==="string"&&(this.state.numStringTensors--,this.state.numBytes-=n.bytes),t.dtype!=="complex64"&&t.dtype!=="string"){const r=t.size*x1(t.dtype);this.state.numBytes-=r}n.backend.disposeData(t.dataId)&&this.removeDataId(t.dataId,n.backend)}disposeVariables(){for(const t in this.state.registeredVariables){const n=this.state.registeredVariables[t];this.disposeVariable(n)}}disposeVariable(t){this.disposeTensor(t),this.state.registeredVariables[t.name]!=null&&delete this.state.registeredVariables[t.name]}memory(){const t=this.backend.memory();return t.numTensors=this.state.numTensors,t.numDataBuffers=this.state.numDataBuffers,t.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(t.unreliable=!0,t.reasons==null&&(t.reasons=[]),t.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),t}async profile(t){this.state.profiling=!0;const n=this.state.numBytes,r=this.state.numTensors;this.state.activeProfile.kernels=[],this.state.activeProfile.result=await t(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max(...this.state.activeProfile.kernels.map(s=>s.totalBytesSnapshot)),this.state.activeProfile.newBytes=this.state.numBytes-n,this.state.activeProfile.newTensors=this.state.numTensors-r;for(const s of this.state.activeProfile.kernels)s.kernelTimeMs=await s.kernelTimeMs,s.extraInfo=await s.extraInfo;return this.state.activeProfile}isTapeOn(){return this.state.gradientDepth>0&&this.state.kernelDepth===0}addTapeNode(t,n,r,s,i,o){const a={id:this.state.nextTapeNodeId++,kernelName:t,inputs:n,outputs:r,saved:i},u=W3(t);u!=null&&(s=u.gradFunc),s!=null&&(a.gradient=l=>(l=l.map((c,p)=>{if(c==null){const d=r[p],w=Z2(d.size,d.dtype);return this.makeTensor(w,d.shape,d.dtype)}return c}),s(l.length>1?l:l[0],i,o))),this.state.activeTape.push(a)}keep(t){return t.kept=!0,t}startTape(){this.state.gradientDepth===0&&(this.state.activeTape=[]),this.state.gradientDepth++}endTape(){this.state.gradientDepth--}startScope(t){const n={track:[],name:"unnamed scope",id:this.state.nextScopeId++};t&&(n.name=t),this.state.scopeStack.push(n),this.state.activeScope=n}endScope(t){const n=t4(t),r=new Set(n.map(i=>i.id));for(let i=0;i<this.state.activeScope.track.length;i++){const o=this.state.activeScope.track[i];!o.kept&&!r.has(o.id)&&o.dispose()}const s=this.state.scopeStack.pop();this.state.activeScope=this.state.scopeStack.length===0?null:this.state.scopeStack[this.state.scopeStack.length-1],n.forEach(i=>{!i.kept&&i.scopeId===s.id&&this.track(i)})}gradients(t,n,r,s=!1){if(A(n.length>0,()=>"gradients() received an empty list of xs."),r!=null&&r.dtype!=="float32")throw new Error(`dy must have 'float32' dtype, but has '${r.dtype}'`);const i=this.scopedRun(()=>this.startTape(),()=>this.endTape(),()=>this.tidy("forward",t));A(i instanceof qe,()=>"The result y returned by f() must be a tensor.");const o=p7(this.state.activeTape,n,i);if(!s&&o.length===0&&n.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",()=>{const a={};a[i.id]=r??N7(i.shape),h7(a,o,l=>this.tidy(l),k7);const u=n.map(l=>a[l.id]);return this.state.gradientDepth===0&&(this.state.activeTape.forEach(l=>{for(const c of l.saved)c.dispose()}),this.state.activeTape=null),{value:i,grads:u}})}customGrad(t){return A(_1(t),()=>"The f passed in customGrad(f) must be a function."),(...n)=>{A(n.every(a=>a instanceof qe),()=>"The args passed in customGrad(f)(x1, x2,...) must all be tensors");let r;const s={};n.forEach((a,u)=>{s[u]=a});const i=(a,u)=>(r=t(...n,u),A(r.value instanceof qe,()=>"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"),A(_1(r.gradFunc),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."),r.value),o=(a,u)=>{const l=r.gradFunc(a,u),c=Array.isArray(l)?l:[l];A(c.length===n.length,()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."),A(c.every(d=>d instanceof qe),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors.");const p={};return c.forEach((d,w)=>{p[w]=()=>d}),p};return this.runKernelFunc({forwardFunc:i,backwardsFunc:o,inputs:s})}}readSync(t){return this.state.tensorInfo.get(t).backend.readSync(t)}read(t){return this.state.tensorInfo.get(t).backend.read(t)}readToGPU(t,n){return this.state.tensorInfo.get(t).backend.readToGPU(t,n)}async time(t){const n=Xu(),r=await this.backend.time(t);return r.wallMs=Xu()-n,r}track(t){return this.state.activeScope!=null&&(t.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(t)),t}get registeredVariables(){return this.state.registeredVariables}reset(){this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new X3;for(const t in this.registry)this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null}}Wi.nextTensorId=0;Wi.nextVariableId=0;function N7(e){const t=Bd(ot(e),"float32");return L.makeTensor(t,e,"float32")}function r4(){const e=Vd();if(e._tfengine==null){const t=new cy(e);e._tfengine=new Wi(t)}return dy(e._tfengine.ENV),g7(()=>e._tfengine),e._tfengine}const L=r4();function k7(e,t){const n={a:e,b:t};return L.runKernel(Wd,n)}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function T7(){return typeof window<"u"&&window.document!=null||typeof WorkerGlobalScope<"u"}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Lt=Te();Lt.registerFlag("DEBUG",()=>!1,e=>{e&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")});Lt.registerFlag("IS_BROWSER",()=>T7());Lt.registerFlag("IS_NODE",()=>typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u");Lt.registerFlag("IS_CHROME",()=>typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor));Lt.registerFlag("IS_SAFARI",()=>typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Safari/.test(navigator.userAgent)&&/Apple/.test(navigator.vendor));Lt.registerFlag("PROD",()=>!1);Lt.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",()=>Lt.getBool("DEBUG"));Lt.registerFlag("DEPRECATION_WARNINGS_ENABLED",()=>!0);Lt.registerFlag("IS_TEST",()=>!1);Lt.registerFlag("CHECK_COMPUTATION_FOR_ERRORS",()=>Lt.getBool("DEBUG"));Lt.registerFlag("WRAP_TO_IMAGEBITMAP",()=>!1);Lt.registerFlag("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU",()=>!1);Lt.registerFlag("USE_SETTIMEOUTCUSTOM",()=>!1);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fs(e,t){let n=e;if(xn(e))return t==="string"?[]:[e.length];if(Zd(e)){const s=e.channels||"RGBA";return[e.height,e.width*s.length]}else if(e4(e))return[e.buffer.size/(t==null?4:x1(t))];if(!Array.isArray(e))return[];const r=[];for(;Array.isArray(n)||xn(n)&&t!=="string";)r.push(n.length),n=n[0];return Array.isArray(e)&&Te().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&s4(e,r,[]),r}function s4(e,t,n){if(n=n||[],!Array.isArray(e)&&!xn(e)){A(t.length===0,()=>`Element arr[${n.join("][")}] is a primitive, but should be an array/TypedArray of ${t[0]} elements`);return}A(t.length>0,()=>`Element arr[${n.join("][")}] should be a primitive, but is an array of ${e.length} elements`),A(e.length===t[0],()=>`Element arr[${n.join("][")}] should have ${t[0]} elements, but has ${e.length} elements`);const r=t.slice(1);for(let s=0;s<e.length;++s)s4(e[s],r,n.concat(s))}function Y3(e,t,n,r){if(e!=="string_or_numeric"){if(e==null)throw new Error("Expected dtype cannot be null.");if(e!=="numeric"&&e!==t||e==="numeric"&&t==="string")throw new Error(`Argument '${n}' passed to '${r}' must be ${e} tensor, but got ${t} tensor`)}}function T(e,t,n,r="numeric"){if(e instanceof Jd())return Y3(r,e.dtype,t,n),e;let s=Tl(e);if(s!=="string"&&["bool","int32","float32"].indexOf(r)>=0&&(s=r),Y3(r,s,t,n),e==null||!xn(e)&&!Array.isArray(e)&&typeof e!="number"&&typeof e!="boolean"&&typeof e!="string"){const u=e==null?"null":e.constructor.name;throw new Error(`Argument '${t}' passed to '${n}' must be a Tensor or TensorLike, but got '${u}'`)}const i=fs(e,s);!xn(e)&&!Array.isArray(e)&&(e=[e]);const a=s!=="string"?Yd(e,s):ua(e,[],!0);return L.makeTensor(a,i,s)}function Qu(e,t,n,r="numeric"){if(!Array.isArray(e))throw new Error(`Argument ${t} passed to ${n} must be a \`Tensor[]\` or \`TensorLike[]\``);return e.map((i,o)=>T(i,`${t}[${o}]`,n,r))}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const i4="__op";function P(e){const t=Object.keys(e);if(t.length!==1)throw new Error(`Please provide an object with a single key (operation name) mapping to a function. Got an object with ${t.length} keys.`);let n=t[0];const r=e[n];n.endsWith("_")&&(n=n.substring(0,n.length-1)),n=n+i4;const s=(...i)=>{L.startScope(n);try{const o=r(...i);return Ws(o)&&console.error("Cannot return a Promise inside of tidy."),L.endScope(o),o}catch(o){throw L.endScope(null),o}};return Object.defineProperty(s,"name",{value:n,configurable:!0}),s}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function E7(e,t){const n=T(e,"real","complex"),r=T(t,"imag","complex");_n(n.shape,r.shape,`real and imag shapes, ${n.shape} and ${r.shape}, must match in call to tf.complex().`);const s={real:n,imag:r};return L.runKernel(zy,s)}const is=P({complex_:E7});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ps(e,t,n,r){if(r==null)r=Tl(e);else if(r==="complex64")throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(e4(e)||Zd(e)){if(r!=="float32"&&r!=="int32")throw new Error(`Creating tensor from GPU data only supports 'float32'|'int32' dtype, while the dtype is ${r}.`);return L.backend.createTensorFromGPUData(e,t||n,r)}if(!xn(e)&&!Array.isArray(e)&&typeof e!="number"&&typeof e!="boolean"&&typeof e!="string")throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(t!=null){fn(t);const s=ot(t),i=ot(n);A(s===i,()=>`Based on the provided shape, [${t}], the tensor should have ${s} values but has ${i}`);for(let o=0;o<n.length;++o){const a=n[o],u=o===n.length-1?a!==ot(t.slice(o)):!0;A(n[o]===t[o]||!u,()=>`Error creating a new Tensor. Inferred shape (${n}) does not match the provided shape (${t}). `)}}return!xn(e)&&!Array.isArray(e)&&(e=[e]),t=t||n,e=r!=="string"?Yd(e,r):ua(e,[],!0),L.makeTensor(e,t,r)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function tr(e,t,n){const r=fs(e,n);return ps(e,t,r,n)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Hs={float32:4,float16:2,int32:4,uint16:2,uint8:1,bool:1,complex64:8};class jn{static join(t){return new jn(t).slice()}constructor(t){if(this.shards=[],this.previousShardIndex=0,t==null||(t instanceof Array||(t=[t]),t=t.map(r=>xn(r)?r.buffer:r),t.length===0))return;this.bufferUniformSize=t[0].byteLength;let n=0;for(let r=0;r<t.length;r++){const s=t[r];r!==t.length-1&&s.byteLength!==this.bufferUniformSize&&(this.bufferUniformSize=void 0);const i=n+s.byteLength;this.shards.push({buffer:s,start:n,end:i}),n=i}this.shards.length===0&&(this.byteLength=0),this.byteLength=this.shards[this.shards.length-1].end}slice(t=0,n=this.byteLength){if(this.shards.length===0)return new ArrayBuffer(0);if(t=isNaN(Number(t))?0:t,n=isNaN(Number(n))?0:n,t=Math.max(0,t),n=Math.min(this.byteLength,n),n<=t)return new ArrayBuffer(0);const r=this.findShardForByte(t);if(r===-1)throw new Error(`Could not find start shard for byte ${t}`);const s=n-t,i=new ArrayBuffer(s),o=new Uint8Array(i);let a=0;for(let u=r;u<this.shards.length;u++){const l=this.shards[u],p=t+a-l.start,d=a,b=Math.min(n,l.end)-l.start,E=new Uint8Array(l.buffer,p,b-p);if(o.set(E,d),a+=E.length,n<l.end)break}return i}findShardForByte(t){if(this.shards.length===0||t<0||t>=this.byteLength)return-1;if(this.bufferUniformSize!=null)return this.previousShardIndex=Math.floor(t/this.bufferUniformSize),this.previousShardIndex;function n(s){return t<s.start?-1:t>=s.end?1:0}if(n(this.shards[this.previousShardIndex])===0)return this.previousShardIndex;const r=x7(this.shards,n);return r===-1?-1:(this.previousShardIndex=r,this.previousShardIndex)}}function x7(e,t){let n=0,r=e.length;for(;n<=r;){const s=Math.floor((r-n)/2)+n,i=t(e[s]);if(i===0)return s;i<0?r=s:n=s+1}return-1}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Se(e,t){return L.tidy(e,t)}function He(e){t4(e).forEach(n=>n.dispose())}function Qn(e){return L.keep(e)}function _7(){return L.backendName}function $7(){return L.backend}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const os=4;async function I7(e,t){const n=[],r=[],s=Array.isArray(e)?e.map(o=>o.name):Object.keys(e);for(let o=0;o<s.length;++o){const a=s[o],u=Array.isArray(e)?e[o].tensor:e[a];if(u.dtype!=="float32"&&u.dtype!=="int32"&&u.dtype!=="bool"&&u.dtype!=="string"&&u.dtype!=="complex64")throw new Error(`Unsupported dtype in weight '${a}': ${u.dtype}`);const l={name:a,shape:u.shape,dtype:u.dtype};if(u.dtype==="string"){const c=new Promise(async p=>{const d=await u.bytes(),w=d.reduce((_,N)=>_+N.length,0)+os*d.length,b=new Uint8Array(w);let E=0;for(let _=0;_<d.length;_++){const N=d[_],x=new Uint8Array(new Uint32Array([N.length]).buffer);b.set(x,E),E+=os,b.set(N,E),E+=N.length}p(b)});r.push(c)}else r.push(u.data());t!=null&&(l.group=t),n.push(l)}const i=await Promise.all(r);return{data:C7(i),specs:n}}function o4(e,t){const n=new jn(e),r={};let s=0;for(const i of t){const o=A7(i,(a,u)=>n.slice(s+a,s+u));r[i.name]=a4(i,n.slice(s,s+o)),s+=o}return r}function A7(e,t){const n=ot(e.shape);let r;if("quantization"in e){const s=e.quantization;r=Hs[s.dtype]}else if(e.dtype==="string"){let s=0;for(let i=0;i<n;i++)s+=os+new Uint32Array(t(s,s+os))[0];return s}else r=Hs[e.dtype];return n*r}async function O7(e,t){const n=ot(e.shape);let r;if("quantization"in e){const s=e.quantization;r=Hs[s.dtype]}else if(e.dtype==="string"){let s=0;for(let i=0;i<n;i++)s+=os+new Uint32Array(await t(s,s+os))[0];return s}else r=Hs[e.dtype];return n*r}function a4(e,t){const n=e.name,r=e.dtype,s=e.shape,i=ot(s);let o,a=0;if("quantization"in e){const u=e.quantization;if(u.dtype==="uint8"||u.dtype==="uint16"){if(!("min"in u&&"scale"in u))throw new Error(`Weight ${e.name} with quantization ${u.dtype} doesn't have corresponding metadata min and scale.`)}else if(u.dtype==="float16"){if(r!=="float32")throw new Error(`Weight ${e.name} is quantized with ${u.dtype} which only supports weights of type float32 not ${r}.`)}else throw new Error(`Weight ${e.name} has unknown quantization dtype ${u.dtype}. Supported quantization dtypes are: 'uint8', 'uint16', and 'float16'.`);const l=Hs[u.dtype],c=u.dtype==="uint8"?new Uint8Array(t):new Uint16Array(t);if(r==="float32")if(u.dtype==="uint8"||u.dtype==="uint16"){o=new Float32Array(c.length);for(let p=0;p<c.length;p++){const d=c[p];o[p]=d*u.scale+u.min}}else if(u.dtype==="float16")o=M7()(c);else throw new Error(`Unsupported quantization type ${u.dtype} for weight type float32.`);else if(r==="int32"){if(u.dtype!=="uint8"&&u.dtype!=="uint16")throw new Error(`Unsupported quantization type ${u.dtype} for weight type int32.`);o=new Int32Array(c.length);for(let p=0;p<c.length;p++){const d=c[p];o[p]=Math.round(d*u.scale+u.min)}}else throw new Error(`Unsupported dtype in weight '${n}': ${r}`);a+=i*l}else if(r==="string"){const u=ot(e.shape);o=[];for(let l=0;l<u;l++){const c=new Uint32Array(t.slice(a,a+os))[0];a+=os;const p=new Uint8Array(t.slice(a,a+c));o.push(p),a+=c}}else{const u=Hs[r];if(r==="float32")o=new Float32Array(t);else if(r==="int32")o=new Int32Array(t);else if(r==="bool")o=new Uint8Array(t);else if(r==="complex64"){o=new Float32Array(t);const l=new Float32Array(o.length/2),c=new Float32Array(o.length/2);for(let b=0;b<l.length;b++)l[b]=o[b*2],c[b]=o[b*2+1];const p=tr(l,s,"float32"),d=tr(c,s,"float32"),w=is(p,d);return p.dispose(),d.dispose(),w}else throw new Error(`Unsupported dtype in weight '${n}': ${r}`);a+=i*u}return tr(o,s,r)}async function Q3(e,t,n){let r=new Uint8Array(t);for(;r.byteLength<n;){const{done:s,value:i}=await e.read();if(s&&i==null){const a=n-r.byteLength;throw new Error(`Reader is done but ${a} bytes are still expected`)}const o=new Uint8Array(r.length+i.byteLength);o.set(r,0),o.set(new Uint8Array(i),r.length),r=o}return r.buffer}async function u4(e,t){const n={},r=e.getReader();let s=new ArrayBuffer(0);for(const i of t){const o=await O7(i,async(l,c)=>(s=await Q3(r,s,c),s.slice(l,c)));s=await Q3(r,s,o);const a=s.slice(0,o);s=s.slice(o);const u=a4(i,a);if(n[i.name]=u,_7()==="webgpu"){const l=$7();"uploadToGPU"in l&&ot(u.shape)>=Te().get("WEBGPU_CPU_HANDOFF_SIZE_THRESHOLD")&&l.uploadToGPU(u.dataId)}}return n}function C7(e){if(e===null)throw new Error(`Invalid input value: ${JSON.stringify(e)}`);let t=0;const n=[];e.forEach(i=>{if(t+=i.byteLength,n.push(i.byteLength===i.buffer.byteLength?i:new i.constructor(i)),!(i instanceof Float32Array||i instanceof Int32Array||i instanceof Uint8Array))throw new Error(`Unsupported TypedArray subtype: ${i.constructor.name}`)});const r=new Uint8Array(t);let s=0;return n.forEach(i=>{r.set(new Uint8Array(i.buffer),s),s+=i.byteLength}),r.buffer}const tf=typeof Buffer<"u"&&(typeof Blob>"u"||typeof atob>"u"||typeof btoa>"u");function J3(e){return tf?Buffer.byteLength(e,"utf8"):new Blob([e]).size}function D7(e){if(tf)return Buffer.from(e).toString("base64");const t=new Uint8Array(e);let n="";for(let r=0,s=t.length;r<s;r++)n+=String.fromCharCode(t[r]);return btoa(n)}function F7(e){if(tf){const r=Buffer.from(e,"base64");return r.buffer.slice(r.byteOffset,r.byteOffset+r.byteLength)}const t=atob(e),n=new Uint8Array(t.length);for(let r=0;r<t.length;++r)n.set([t.charCodeAt(r)],r);return n.buffer}function P7(e){return jn.join(e)}function Z3(e){const t="/";for(e=e.trim();e.endsWith(t);)e=e.slice(0,e.length-1);const n=e.split(t);return n[n.length-1]}function l4(e,t){const n={modelTopology:e.modelTopology,format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy,weightsManifest:t};return e.signature!=null&&(n.signature=e.signature),e.userDefinedMetadata!=null&&(n.userDefinedMetadata=e.userDefinedMetadata),e.modelInitializer!=null&&(n.modelInitializer=e.modelInitializer),e.initializerSignature!=null&&(n.initializerSignature=e.initializerSignature),e.trainingConfig!=null&&(n.trainingConfig=e.trainingConfig),n}function c4(e,t,n){const r={modelTopology:e.modelTopology,format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy};if(e.trainingConfig!=null&&(r.trainingConfig=e.trainingConfig),e.weightsManifest!=null){if(!t)throw new Error("modelJSON has weightsManifest but weightSpecs is null");if(!n)throw new Error("modelJSON has weightsManifest but weightData is null");r.weightSpecs=t,r.weightData=n}return e.signature!=null&&(r.signature=e.signature),e.userDefinedMetadata!=null&&(r.userDefinedMetadata=e.userDefinedMetadata),e.modelInitializer!=null&&(r.modelInitializer=e.modelInitializer),e.initializerSignature!=null&&(r.initializerSignature=e.initializerSignature),r}async function nf(e,t){let n,r;return e.weightsManifest!=null&&([n,r]=await t(e.weightsManifest)),c4(e,n,r)}function Sa(e){if(e.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:e.modelTopology==null?0:J3(JSON.stringify(e.modelTopology)),weightSpecsBytes:e.weightSpecs==null?0:J3(JSON.stringify(e.weightSpecs)),weightDataBytes:e.weightData==null?0:new jn(e.weightData).byteLength}}function P1(e){const t=[];for(const n of e)t.push(...n.weights);return t}function R7(){const e=n=>{let r=n<<13,s=0;for(;!(r&8388608);)s-=8388608,r<<=1;return r&=-8388609,s+=947912704,r|s},t=new Uint32Array(2048);t[0]=0;for(let n=1;n<1024;n++)t[n]=e(n);for(let n=1024;n<2048;n++)t[n]=939524096+(n-1024<<13);return t}function L7(){const e=new Uint32Array(64);e[0]=0,e[31]=1199570944,e[32]=2147483648,e[63]=3347054592;for(let t=1;t<31;t++)e[t]=t<<23;for(let t=33;t<63;t++)e[t]=2147483648+(t-32<<23);return e}function z7(){const e=new Uint32Array(64);for(let t=0;t<64;t++)e[t]=1024;return e[0]=e[32]=0,e}function M7(){const e=R7(),t=L7(),n=z7();return r=>{const s=new ArrayBuffer(4*r.length),i=new Uint32Array(s);for(let o=0;o<r.length;o++){const a=r[o],u=e[n[a>>10]+(a&1023)]+t[a>>10];i[o]=u}return new Float32Array(s)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Ve{constructor(){this.saveRouters=[],this.loadRouters=[]}static getInstance(){return Ve.instance==null&&(Ve.instance=new Ve),Ve.instance}static registerSaveRouter(t){Ve.getInstance().saveRouters.push(t)}static registerLoadRouter(t){Ve.getInstance().loadRouters.push(t)}static getSaveHandlers(t){return Ve.getHandlers(t,"save")}static getLoadHandlers(t,n){return Ve.getHandlers(t,"load",n)}static getHandlers(t,n,r){const s=[];return(n==="load"?Ve.getInstance().loadRouters:Ve.getInstance().saveRouters).forEach(o=>{const a=o(t,r);a!==null&&s.push(a)}),s}}const j7=e=>Ve.registerSaveRouter(e),B7=e=>Ve.registerLoadRouter(e),U7=e=>Ve.getSaveHandlers(e),V7=(e,t)=>Ve.getLoadHandlers(e,t);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const R1="tensorflowjs",L1=1,Ds="models_store",Hr="model_info_store";function f4(){if(!Te().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");const e=typeof window>"u"?self:window,t=e.indexedDB||e.mozIndexedDB||e.webkitIndexedDB||e.msIndexedDB||e.shimIndexedDB;if(t==null)throw new Error("The current browser does not appear to support IndexedDB.");return t}function z1(e){const t=e.result;t.createObjectStore(Ds,{keyPath:"modelPath"}),t.createObjectStore(Hr,{keyPath:"modelPath"})}class Ks{constructor(t){if(this.indexedDB=f4(),t==null||!t)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=t}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return this.databaseAction(this.modelPath,t)}async load(){return this.databaseAction(this.modelPath)}databaseAction(t,n){return new Promise((r,s)=>{const i=this.indexedDB.open(R1,L1);i.onupgradeneeded=()=>z1(i),i.onsuccess=()=>{const o=i.result;if(n==null){const a=o.transaction(Ds,"readonly"),l=a.objectStore(Ds).get(this.modelPath);l.onsuccess=()=>{if(l.result==null)return o.close(),s(new Error(`Cannot find model with path '${this.modelPath}' in IndexedDB.`));r(l.result.modelArtifacts)},l.onerror=c=>(o.close(),s(l.error)),a.oncomplete=()=>o.close()}else{n.weightData=jn.join(n.weightData);const a=Sa(n),u=o.transaction(Hr,"readwrite");let l=u.objectStore(Hr),c;try{c=l.put({modelPath:this.modelPath,modelArtifactsInfo:a})}catch(d){return s(d)}let p;c.onsuccess=()=>{p=o.transaction(Ds,"readwrite");const d=p.objectStore(Ds);let w;try{w=d.put({modelPath:this.modelPath,modelArtifacts:n,modelArtifactsInfo:a})}catch(b){return s(b)}w.onsuccess=()=>r({modelArtifactsInfo:a}),w.onerror=b=>{l=u.objectStore(Hr);const E=l.delete(this.modelPath);E.onsuccess=()=>(o.close(),s(w.error)),E.onerror=_=>(o.close(),s(w.error))}},c.onerror=d=>(o.close(),s(c.error)),u.oncomplete=()=>{p==null?o.close():p.oncomplete=()=>o.close()}}},i.onerror=o=>s(i.error)})}}Ks.URL_SCHEME="indexeddb://";const p4=e=>Te().getBool("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(Ks.URL_SCHEME)?W7(e.slice(Ks.URL_SCHEME.length)):null;Ve.registerSaveRouter(p4);Ve.registerLoadRouter(p4);function W7(e){return new Ks(e)}function H7(e){return e.startsWith(Ks.URL_SCHEME)?e.slice(Ks.URL_SCHEME.length):e}class K7{constructor(){this.indexedDB=f4()}async listModels(){return new Promise((t,n)=>{const r=this.indexedDB.open(R1,L1);r.onupgradeneeded=()=>z1(r),r.onsuccess=()=>{const s=r.result,i=s.transaction(Hr,"readonly"),a=i.objectStore(Hr).getAll();a.onsuccess=()=>{const u={};for(const l of a.result)u[l.modelPath]=l.modelArtifactsInfo;t(u)},a.onerror=u=>(s.close(),n(a.error)),i.oncomplete=()=>s.close()},r.onerror=s=>n(r.error)})}async removeModel(t){return t=H7(t),new Promise((n,r)=>{const s=this.indexedDB.open(R1,L1);s.onupgradeneeded=()=>z1(s),s.onsuccess=()=>{const i=s.result,o=i.transaction(Hr,"readwrite"),a=o.objectStore(Hr),u=a.get(t);let l;u.onsuccess=()=>{if(u.result==null)return i.close(),r(new Error(`Cannot find model with path '${t}' in IndexedDB.`));{const c=a.delete(t),p=()=>{l=i.transaction(Ds,"readwrite");const w=l.objectStore(Ds).delete(t);w.onsuccess=()=>n(u.result.modelArtifactsInfo),w.onerror=b=>r(u.error)};c.onsuccess=p,c.onerror=d=>(p(),i.close(),r(u.error))}},u.onerror=c=>(i.close(),r(u.error)),o.oncomplete=()=>{l==null?i.close():l.oncomplete=()=>i.close()}},s.onerror=i=>r(s.error)})}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const cr="/",mi="tensorflowjs_models",h4="info",G7="model_topology",q7="weight_specs",X7="weight_data",Y7="model_metadata";function d4(e){return{info:[mi,e,h4].join(cr),topology:[mi,e,G7].join(cr),weightSpecs:[mi,e,q7].join(cr),weightData:[mi,e,X7].join(cr),modelMetadata:[mi,e,Y7].join(cr)}}function m4(e){for(const t of Object.values(e))window.localStorage.removeItem(t)}function Q7(e){const t=e.split(cr);if(t.length<3)throw new Error(`Invalid key format: ${e}`);return t.slice(1,t.length-1).join(cr)}function J7(e){return e.startsWith(Gs.URL_SCHEME)?e.slice(Gs.URL_SCHEME.length):e}class Gs{constructor(t){if(!Te().getBool("IS_BROWSER")||typeof window>"u"||typeof window.localStorage>"u")throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,t==null||!t)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=t,this.keys=d4(this.modelPath)}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");{const n=JSON.stringify(t.modelTopology),r=JSON.stringify(t.weightSpecs),s=Sa(t),i=jn.join(t.weightData);try{this.LS.setItem(this.keys.info,JSON.stringify(s)),this.LS.setItem(this.keys.topology,n),this.LS.setItem(this.keys.weightSpecs,r),this.LS.setItem(this.keys.weightData,D7(i));const o={format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,signature:t.signature!=null?t.signature:void 0,userDefinedMetadata:t.userDefinedMetadata!=null?t.userDefinedMetadata:void 0,modelInitializer:t.modelInitializer!=null?t.modelInitializer:void 0,initializerSignature:t.initializerSignature!=null?t.initializerSignature:void 0,trainingConfig:t.trainingConfig!=null?t.trainingConfig:void 0};return this.LS.setItem(this.keys.modelMetadata,JSON.stringify(o)),{modelArtifactsInfo:s}}catch{throw m4(this.keys),new Error(`Failed to save model '${this.modelPath}' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=${s.modelTopologyBytes}, weightSpecsBytes=${s.weightSpecsBytes}, weightDataBytes=${s.weightDataBytes}.`)}}}async load(){const t=JSON.parse(this.LS.getItem(this.keys.info));if(t==null)throw new Error(`In local storage, there is no model with name '${this.modelPath}'`);if(t.modelTopologyType!=="JSON")throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");const n={},r=JSON.parse(this.LS.getItem(this.keys.topology));if(r==null)throw new Error(`In local storage, the topology of model '${this.modelPath}' is missing.`);n.modelTopology=r;const s=JSON.parse(this.LS.getItem(this.keys.weightSpecs));if(s==null)throw new Error(`In local storage, the weight specs of model '${this.modelPath}' are missing.`);n.weightSpecs=s;const i=this.LS.getItem(this.keys.modelMetadata);if(i!=null){const a=JSON.parse(i);n.format=a.format,n.generatedBy=a.generatedBy,n.convertedBy=a.convertedBy,a.signature!=null&&(n.signature=a.signature),a.userDefinedMetadata!=null&&(n.userDefinedMetadata=a.userDefinedMetadata),a.modelInitializer!=null&&(n.modelInitializer=a.modelInitializer),a.initializerSignature!=null&&(n.initializerSignature=a.initializerSignature),a.trainingConfig!=null&&(n.trainingConfig=a.trainingConfig)}const o=this.LS.getItem(this.keys.weightData);if(o==null)throw new Error(`In local storage, the binary weight values of model '${this.modelPath}' are missing.`);return n.weightData=F7(o),n}}Gs.URL_SCHEME="localstorage://";const g4=e=>Te().getBool("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(Gs.URL_SCHEME)?Z7(e.slice(Gs.URL_SCHEME.length)):null;Ve.registerSaveRouter(g4);Ve.registerLoadRouter(g4);function Z7(e){return new Gs(e)}class e8{constructor(){A(Te().getBool("IS_BROWSER"),()=>"Current environment is not a web browser"),A(typeof window>"u"||typeof window.localStorage<"u",()=>"Current browser does not appear to support localStorage"),this.LS=window.localStorage}async listModels(){const t={},n=mi+cr,r=cr+h4;for(let s=0;s<this.LS.length;++s){const i=this.LS.key(s);if(i.startsWith(n)&&i.endsWith(r)){const o=Q7(i);t[o]=JSON.parse(this.LS.getItem(i))}}return t}async removeModel(t){t=J7(t);const n=d4(t);if(this.LS.getItem(n.info)==null)throw new Error(`Cannot find model at path '${t}'`);const r=JSON.parse(this.LS.getItem(n.info));return m4(n),r}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Pi="://";class It{constructor(){this.managers={}}static getInstance(){return It.instance==null&&(It.instance=new It),It.instance}static registerManager(t,n){A(t!=null,()=>"scheme must not be undefined or null."),t.endsWith(Pi)&&(t=t.slice(0,t.indexOf(Pi))),A(t.length>0,()=>"scheme must not be an empty string.");const r=It.getInstance();A(r.managers[t]==null,()=>`A model store manager is already registered for scheme '${t}'.`),r.managers[t]=n}static getManager(t){const n=It.getInstance().managers[t];if(n==null)throw new Error(`Cannot find model manager for scheme '${t}'`);return n}static getSchemes(){return Object.keys(It.getInstance().managers)}}function Nu(e){if(e.indexOf(Pi)===-1)throw new Error(`The url string provided does not contain a scheme. Supported schemes are: ${It.getSchemes().join(",")}`);return{scheme:e.split(Pi)[0],path:e.split(Pi)[1]}}async function y4(e,t,n=!1){A(e!==t,()=>`Old path and new path are the same: '${e}'`);const r=Ve.getLoadHandlers(e);A(r.length>0,()=>`Copying failed because no load handler is found for source URL ${e}.`),A(r.length<2,()=>`Copying failed because more than one (${r.length}) load handlers for source URL ${e}.`);const s=r[0],i=Ve.getSaveHandlers(t);A(i.length>0,()=>`Copying failed because no save handler is found for destination URL ${t}.`),A(i.length<2,()=>`Copying failed because more than one (${r.length}) save handlers for destination URL ${t}.`);const o=i[0],a=Nu(e).scheme,u=Nu(e).path,l=a===Nu(e).scheme,c=await s.load();n&&l&&await It.getManager(a).removeModel(u);const p=await o.save(c);return n&&!l&&await It.getManager(a).removeModel(u),p.modelArtifactsInfo}async function t8(){const e=It.getSchemes(),t={};for(const n of e){const r=await It.getManager(n).listModels();for(const s in r){const i=n+Pi+s;t[i]=r[s]}}return t}async function n8(e){const t=Nu(e);return It.getManager(t.scheme).removeModel(t.path)}async function r8(e,t){return y4(e,t,!1)}async function s8(e,t){return y4(e,t,!0)}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class i8{constructor(){this.messageName="setTimeoutCustom",this.functionRefs=[],this.handledMessageCount=0,this.hasEventListener=!1}fetch(t,n){return fetch(t,n)}now(){return performance.now()}encode(t,n){if(n!=="utf-8"&&n!=="utf8")throw new Error(`Browser's encoder only supports utf-8, but got ${n}`);return this.textEncoder==null&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(t)}decode(t,n){return new TextDecoder(n).decode(t)}setTimeoutCustom(t,n){if(typeof window>"u"||!Te().getBool("USE_SETTIMEOUTCUSTOM")){setTimeout(t,n);return}this.functionRefs.push(t),setTimeout(()=>{window.postMessage({name:this.messageName,index:this.functionRefs.length-1},"*")},n),this.hasEventListener||(this.hasEventListener=!0,window.addEventListener("message",r=>{if(r.source===window&&r.data.name===this.messageName){r.stopPropagation();const s=this.functionRefs[r.data.index];s(),this.handledMessageCount++,this.handledMessageCount===this.functionRefs.length&&(this.functionRefs=[],this.handledMessageCount=0)}},!0))}isTypedArray(t){return Xd(t)}}if(Te().get("IS_BROWSER")){Te().setPlatform("browser",new i8);try{It.registerManager(Gs.URL_SCHEME,new e8)}catch{}try{It.registerManager(Ks.URL_SCHEME,new K7)}catch{}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const o8={importFetch:()=>require("node-fetch")};let wc;class a8{constructor(){this.util=require("util"),this.textEncoder=new this.util.TextEncoder}fetch(t,n){return Te().global.fetch!=null?Te().global.fetch(t,n):(wc==null&&(wc=o8.importFetch()),wc(t,n))}now(){const t=process.hrtime();return t[0]*1e3+t[1]/1e6}encode(t,n){if(n!=="utf-8"&&n!=="utf8")throw new Error(`Node built-in encoder only supports utf-8, but got ${n}`);return this.textEncoder.encode(t)}decode(t,n){return t.length===0?"":new this.util.TextDecoder(n).decode(t)}isTypedArray(t){return this.util.types.isFloat32Array(t)||this.util.types.isInt32Array(t)||this.util.types.isUint8Array(t)||this.util.types.isUint8ClampedArray(t)}}Te().get("IS_NODE")&&!Te().get("IS_BROWSER")&&Te().setPlatform("node",new a8);/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function br(e,t="float32",n){return t=t||"float32",fn(e),new A1(e,t,n)}/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function u8(e,t){const n=T(e,"x","cast");if(!oy(t))throw new Error(`Failed to cast to unknown dtype ${t}`);if(t==="string"&&n.dtype!=="string"||t!=="string"&&n.dtype==="string")throw new Error("Only strings can be casted to strings");const r={x:n},s={dtype:t};return L.runKernel(Hd,r,s)}const je=P({cast_:u8});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function l8(e){const n={x:T(e,"x","clone","string_or_numeric")};return L.runKernel(Kd,n)}const es=P({clone_:l8});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function v4(e,t=!1){console.log(e.toString(t))}/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */r4();const c8={buffer:br,cast:je,clone:es,print:v4};y7(c8);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function f8(e,t){let n=T(e,"a","add"),r=T(t,"b","add");[n,r]=Qe(n,r);const s={a:n,b:r};return L.runKernel(Wd,s)}const le=P({add_:f8});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function p8(e,t){let n=T(e,"a","floorDiv"),r=T(t,"b","floorDiv");[n,r]=Qe(n,r);const s={a:n,b:r};return L.runKernel(g6,s)}const w4=P({floorDiv_:p8});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function h8(e,t){let n=T(e,"a","div"),r=T(t,"b","div");if([n,r]=Qe(n,r),n.dtype==="int32"&&r.dtype==="int32")return w4(n,r);const s={a:n,b:r},i={};return L.runKernel(s6,s,i)}const ke=P({div_:h8});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function d8(e,t){let n=T(e,"a","mul"),r=T(t,"b","mul");[n,r]=Qe(n,r);const s={a:n,b:r};return L.runKernel(q6,s)}const te=P({mul_:d8});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function m8(e){const t=T(e,"x","abs");if(t.dtype==="complex64"){const n={x:t};return L.runKernel(My,n)}else{const n={x:t};return L.runKernel(gy,n)}}const rn=P({abs_:m8});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function g8(e){const n={x:T(e,"x","acos")};return L.runKernel(yy,n)}const y8=P({acos_:g8});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function v8(e){const n={x:T(e,"x","acosh")};return L.runKernel(vy,n)}const w8=P({acosh_:v8});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function S8(e){A(Array.isArray(e),()=>"The argument passed to tf.addN() must be a list of tensors"),A(e.length>=1,()=>`Must pass at least one tensor to tf.addN(), but got ${e.length}`);const t=e.map((s,i)=>T(s,`tensors${i}`,"addN")),n=t[0];t.forEach(s=>{if(s.dtype!==n.dtype)throw new Error("All tensors passed to tf.addN() must have the same dtype")}),t.forEach(s=>{if(!Sr(s.shape,n.shape))throw new Error("All tensors passed to tf.addN() must have the same shape")});const r=t;return L.runKernel(wy,r)}const b8=P({addN_:S8});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function N8(e,t=null,n=!1){const s={x:T(e,"x","all","bool")},i={axis:t,keepDims:n};return L.runKernel(Sy,s,i)}const k8=P({all_:N8});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function T8(e,t=null,n=!1){const s={x:T(e,"x","any","bool")},i={axis:t,keepDims:n};return L.runKernel(by,s,i)}const E8=P({any_:T8});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function x8(e,t=0){const r={x:T(e,"x","argMax")},s={axis:t};return L.runKernel(Ny,r,s)}const _8=P({argMax_:x8});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $8(e,t=0){const r={x:T(e,"x","argMin")},s={axis:t};return L.runKernel(ky,r,s)}const I8=P({argMin_:$8});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function A8(e){const n={x:T(e,"x","asin")};return L.runKernel(Ty,n)}const O8=P({asin_:A8});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function C8(e){const n={x:T(e,"x","asinh")};return L.runKernel(Ey,n)}const D8=P({asinh_:C8});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function F8(e){const n={x:T(e,"x","atan")};return L.runKernel(xy,n)}const P8=P({atan_:F8});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function R8(e,t){let n=T(e,"a","atan2"),r=T(t,"b","atan2");[n,r]=Qe(n,r);const s={a:n,b:r};return L.runKernel($y,s)}const L8=P({atan2_:R8});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function z8(e){const n={x:T(e,"x","atanh")};return L.runKernel(_y,n)}const M8=P({atanh_:z8});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function j8(e,t,n,r,s,i,o="channelsLast"){const[a,u]=la(t);let l;if(o==="channelsLast")l=[a,u,e[3],e[3]];else if(o==="channelsFirst")l=[a,u,e[1],e[1]];else throw new Error(`Unknown dataFormat ${o}`);return rf(e,l,n,r,s,i,!1,o)}function rf(e,t,n,r,s,i,o=!1,a="channelsLast"){let[u,l,c,p]=[-1,-1,-1,-1];if(a==="channelsLast")[u,l,c,p]=e;else if(a==="channelsFirst")[u,p,l,c]=e;else throw new Error(`Unknown dataFormat ${a}`);const[d,w,,b]=t,[E,_]=la(n),[N,x]=la(r),$=M1(d,N),F=M1(w,x),{padInfo:z,outHeight:M,outWidth:V}=V8(s,l,c,E,_,$,F,i,a),W=o?b*p:b;let X;return a==="channelsFirst"?X=[u,W,M,V]:a==="channelsLast"&&(X=[u,M,V,W]),{batchSize:u,dataFormat:a,inHeight:l,inWidth:c,inChannels:p,outHeight:M,outWidth:V,outChannels:W,padInfo:z,strideHeight:E,strideWidth:_,filterHeight:d,filterWidth:w,effectiveFilterHeight:$,effectiveFilterWidth:F,dilationHeight:N,dilationWidth:x,inShape:e,outShape:X,filterShape:t}}function B8(e,t,n,r,s){r==null&&(r=U8(e,t,n));const i=e[0],o=e[1],a=Ju((i-t+2*r)/n+1,s),u=Ju((o-t+2*r)/n+1,s);return[a,u]}function U8(e,t,n,r=1){const s=M1(t,r);return Math.floor((e[0]*(n-1)-n+s)/2)}function la(e){return typeof e=="number"?[e,e,e]:e.length===2?[e[0],e[1],1]:e}function M1(e,t){return t<=1?e:e+(e-1)*(t-1)}function V8(e,t,n,r,s,i,o,a,u){let l,c,p;if(typeof e=="number"){l={top:e,bottom:e,left:e,right:e,type:e===0?"VALID":"NUMBER"};const w=B8([t,n],i,r,e,a);c=w[0],p=w[1]}else if(e==="same"){c=Math.ceil(t/r),p=Math.ceil(n/s);const d=Math.max(0,(c-1)*r+i-t),w=Math.max(0,(p-1)*s+o-n),b=Math.floor(d/2),E=d-b,_=Math.floor(w/2),N=w-_;l={top:b,bottom:E,left:_,right:N,type:"SAME"}}else if(e==="valid")l={top:0,bottom:0,left:0,right:0,type:"VALID"},c=Math.ceil((t-i+1)/r),p=Math.ceil((n-o+1)/s);else if(typeof e=="object"){const d=u==="channelsLast"?e[1][0]:e[2][0],w=u==="channelsLast"?e[1][1]:e[2][1],b=u==="channelsLast"?e[2][0]:e[3][0],E=u==="channelsLast"?e[2][1]:e[3][1];l={top:d,bottom:w,left:b,right:E,type:d===0&&w===0&&b===0&&E===0?"VALID":"EXPLICIT"},c=Ju((t-i+d+w)/r+1,a),p=Ju((n-o+b+E)/s+1,a)}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:l,outHeight:c,outWidth:p}}function Ju(e,t){if(!t)return Math.trunc(e);switch(t){case"round":return Math.round(e);case"ceil":return Math.ceil(e);case"floor":return Math.floor(e);default:throw new Error(`Unknown roundingMode ${t}`)}}function Zu(e){const[t,n,r]=la(e);return t===1&&n===1&&r===1}function hs(e,t){return Zu(e)||Zu(t)}function Hi(e){return la(e).every(t=>t>0)}function Bn(e,t,n){if(n!=null){if(typeof t=="string")throw Error(`Error in ${e}: pad must be an integer when using dimRoundingMode ${n} but got pad ${t}.`);if(typeof t=="number")A(aa(t),()=>`Error in ${e}: pad must be an integer when using dimRoundingMode ${n} but got pad ${t}.`);else if(typeof t=="object")t.forEach(r=>{r.forEach(s=>{A(aa(s),()=>`Error in ${e}: pad must be an integer when using dimRoundingMode ${n} but got pad ${s}.`)})});else throw Error(`Error in ${e}: Unknown padding parameter: ${t}`)}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function W8(e,t){const r={x:T(e,"x","reshape","string_or_numeric")},s={shape:t};return L.runKernel(d5,r,s)}const q=P({reshape_:W8});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function H8(e,t,n,r,s){const i=T(e,"x","avgPool","float32"),o=1;A(hs(n,o),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${n} and dilations '${o}'`);let a=i,u=!1;i.rank===3&&(u=!0,a=q(i,[1,i.shape[0],i.shape[1],i.shape[2]])),A(a.rank===4,()=>`Error in avgPool: x must be rank 4 but got rank ${a.rank}.`),Bn("avgPool",r,s);const l={x:a},c={filterSize:t,strides:n,pad:r,dimRoundingMode:s};let p=L.runKernel(Iy,l,c);return p=je(p,i.dtype),u?q(p,[p.shape[1],p.shape[2],p.shape[3]]):p}const S4=P({avgPool_:H8});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function K8(e,t,n,r,s,i="NDHWC"){const o=T(e,"x","avgPool3d","float32");let a=o,u=!1;o.rank===4&&(u=!0,a=q(o,[1,o.shape[0],o.shape[1],o.shape[2],o.shape[3]])),A(a.rank===5,()=>`Error in avgPool3d: x must be rank 5 but got rank ${a.rank}.`),A(i==="NDHWC",()=>`Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of ${i}`),A(typeof n=="number"&&n>0||Array.isArray(n)&&n[0]>0&&n[1]>0&&n[2]>0,()=>`Error in avgPool3d: Stride must be > 0, but got '${n}'`),Bn("avgPool3d",r,s);const l={x:a},c={filterSize:t,strides:n,pad:r,dimRoundingMode:s,dataFormat:i};let p=L.runKernel(Ay,l,c);return p=je(p,a.dtype),u?q(p,[p.shape[1],p.shape[2],p.shape[3],p.shape[4]]):p}const G8=P({avgPool3d_:K8});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function q8(e,t=0){A(e.length>=1,()=>"Pass at least one tensor to concat");const n=Qu(e,"tensors","concat","string_or_numeric");if(n[0].dtype==="complex64"&&n.forEach(i=>{if(i.dtype!=="complex64")throw new Error(`Cannot concatenate complex64 tensors with a tensor
          with dtype ${i.dtype}. `)}),n.length===1)return es(n[0]);const r=n,s={axis:t};return L.runKernel(jy,r,s)}const wt=P({concat_:q8});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function X8(e,t,n=!1,r=!1){let s=T(e,"a","matMul"),i=T(t,"b","matMul");[s,i]=Qe(s,i);const o={a:s,b:i},a={transposeA:n,transposeB:r};return L.runKernel(Oy,o,a)}const De=P({matMul_:X8});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Y8(e){const n={x:T(e,"x","sigmoid","float32")};return L.runKernel(A5,n)}const zs=P({sigmoid_:Y8});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Q8(e,t,n){const r=T(e,"x","slice","string_or_numeric");if(r.rank===0)throw new Error("Slicing scalar is not possible");const s={x:r},i={begin:t,size:n};return L.runKernel(x5,s,i)}const ye=P({slice_:Q8});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function J8(e){const n={x:T(e,"x","tanh","float32")};return L.runKernel(Y5,n)}const j1=P({tanh_:J8});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Z8(e,t,n,r,s,i){const o=T(e,"forgetBias","basicLSTMCell"),a=T(t,"lstmKernel","basicLSTMCell"),u=T(n,"lstmBias","basicLSTMCell"),l=T(r,"data","basicLSTMCell"),c=T(s,"c","basicLSTMCell"),p=T(i,"h","basicLSTMCell"),d=wt([l,p],1),w=De(d,a),b=le(w,u),E=b.shape[0],_=b.shape[1]/4,N=[E,_],x=ye(b,[0,0],N),$=ye(b,[0,_],N),F=ye(b,[0,_*2],N),z=ye(b,[0,_*3],N),M=le(te(zs(x),j1($)),te(c,zs(le(o,F)))),V=te(j1(M),zs(z));return[M,V]}const e9=P({basicLSTMCell_:Z8});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function t9(e,t,n){const r=T(e,"x","batchToSpaceND"),s=t.reduce((a,u)=>a*u);A(r.rank>=1+t.length,()=>`input rank is ${r.rank} but should be > than blockShape.length ${t.length}`),A(n.length===t.length,()=>`crops.length is ${n.length} but should be equal to blockShape.length  ${t.length}`),A(r.shape[0]%s===0,()=>`input tensor batch is ${r.shape[0]} but is not divisible by the product of the elements of blockShape ${t.join(" * ")} === ${s}`);const i={x:r},o={blockShape:t,crops:n};return L.runKernel(Cy,i,o)}const b4=P({batchToSpaceND_:t9});function n9(e){let t;return e.rank===0||e.rank===1?t=q(e,[1,1,1,e.size]):e.rank===2?t=q(e,[1,1,e.shape[0],e.shape[1]]):e.rank===3?t=q(e,[1,e.shape[0],e.shape[1],e.shape[2]]):t=e,t}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function r9(e,t,n,r,s,i){i==null&&(i=.001);const o=T(e,"x","batchNorm"),a=T(t,"mean","batchNorm"),u=T(n,"variance","batchNorm");let l;s!=null&&(l=T(s,"scale","batchNorm"));let c;r!=null&&(c=T(r,"offset","batchNorm")),A(a.rank===u.rank,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),A(c==null||a.rank===c.rank,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),A(l==null||a.rank===l.rank,()=>"Batch normalization gradient requires mean and scale to have equal ranks.");const d={x:n9(o),scale:l,offset:c,mean:a,variance:u},w={varianceEpsilon:i},b=L.runKernel(y6,d,w);return q(b,o.shape)}const El=P({batchNorm_:r9});function s9(e,t,n,r,s,i){const o=T(e,"x","batchNorm"),a=T(t,"mean","batchNorm"),u=T(n,"variance","batchNorm");let l;s!=null&&(l=T(s,"scale","batchNorm"));let c;return r!=null&&(c=T(r,"offset","batchNorm")),A(o.rank===2,()=>`Error in batchNorm2D: x must be rank 2 but got rank ${o.rank}.`),A(a.rank===2||a.rank===1,()=>`Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank ${a.rank}.`),A(u.rank===2||u.rank===1,()=>`Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank ${u.rank}.`),l!=null&&A(l.rank===2||l.rank===1,()=>`Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank ${l.rank}.`),c!=null&&A(c.rank===2||c.rank===1,()=>`Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank ${c.rank}.`),El(o,a,u,c,l,i)}const i9=P({batchNorm2d_:s9});function o9(e,t,n,r,s,i){const o=T(e,"x","batchNorm"),a=T(t,"mean","batchNorm"),u=T(n,"variance","batchNorm");let l;s!=null&&(l=T(s,"scale","batchNorm"));let c;return r!=null&&(c=T(r,"offset","batchNorm")),A(o.rank===3,()=>`Error in batchNorm3D: x must be rank 3 but got rank ${o.rank}.`),A(a.rank===3||a.rank===1,()=>`Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank ${a.rank}.`),A(u.rank===3||u.rank===1,()=>`Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank ${u.rank}.`),l!=null&&A(l.rank===3||l.rank===1,()=>`Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank ${l.rank}.`),c!=null&&A(c.rank===3||c.rank===1,()=>`Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank ${c.rank}.`),El(o,a,u,c,l,i)}const a9=P({batchNorm3d_:o9});function u9(e,t,n,r,s,i){const o=T(e,"x","batchNorm"),a=T(t,"mean","batchNorm"),u=T(n,"variance","batchNorm");let l;s!=null&&(l=T(s,"scale","batchNorm"));let c;return r!=null&&(c=T(r,"offset","batchNorm")),A(o.rank===4,()=>`Error in batchNorm4D: x must be rank 4 but got rank ${o.rank}.`),A(a.rank===4||a.rank===1,()=>`Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank ${a.rank}.`),A(u.rank===4||u.rank===1,()=>`Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank ${u.rank}.`),l!=null&&A(l.rank===4||l.rank===1,()=>`Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank ${l.rank}.`),c!=null&&A(c.rank===4||c.rank===1,()=>`Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank ${c.rank}.`),El(o,a,u,c,l,i)}const l9=P({batchNorm4d_:u9});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function c9(e,t,n){const r=T(e,"x","bincount"),s=T(t,"weights","bincount");A(r.dtype==="int32",()=>`Error in bincount: input dtype must be int32, but got ${r.dtype}`),A(n>=0,()=>`size must be non-negative, but got ${n}.`),A(s.size===r.size||s.size===0,()=>`Error in bincount: weights must have the same size as input or0-length, but got input shape: ${r.shape}, weights shape: ${s.shape}.`);const i={x:r,weights:s},o={size:n};return L.runKernel(Dy,i,o)}const N4=P({bincount_:c9});/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function f9(e,t){const n=T(e,"x","bitwiseAnd"),r=T(t,"y","bitwiseAnd");if(!Sr(n.shape,r.shape))throw new Error(`BitwiseAnd: Tensors must have the same shape. x: ${n.shape}, y: ${r.shape}`);if(n.dtype!=="int32"||r.dtype!=="int32")throw new Error(`BitwiseAnd: Only supports 'int32' values in tensor, found type of x: ${n.dtype} and type of y: ${r.dtype}`);const s={a:n,b:r};return L.runKernel(Fy,s)}const p9=P({bitwiseAnd_:f9});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function h9(e,t){const n=T(e,"s0","broadcastArgs","int32"),r=T(t,"s1","broadcastArgs","int32");if(n.rank!==1)throw new Error(`broadcastArgs(): first input must be a vector (rank=1). Has rank ${n.rank}`);if(r.rank!==1)throw new Error(`broadcastArgs(): second input must be a vector (rank=1). Has rank ${r.rank}`);const s={s0:n,s1:r};return L.runKernel(Py,s)}const d9=P({broadcastArgs_:h9});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function m9(e,t){let n=T(e,"broadcastTo","x");const r=n.shape;if(fn(t),t.length<n.rank)throw new Error(`broadcastTo(): shape.length=${t.length} < input.rank=${n.rank}.`);if(t.length>n.rank){const l=n.shape.slice();for(;l.length<t.length;)l.unshift(1);n=q(n,l)}const s=n.shape,i=Array.from(t);for(let l=t.length-1;l>=0;l--)if(s[l]===t[l])i[l]=1;else if(n.shape[l]!==1)throw new Error(`broadcastTo(): [${r}] cannot be broadcast to [${t}].`);if(i.map((l,c)=>l>1?c:-1).filter(l=>l>=0).length===0)return es(n);const a={x:n},u={reps:i};return L.runKernel(Gd,a,u)}const ku=P({broadcastTo_:m9});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function g9(e){const n={x:T(e,"x","ceil","float32")};return L.runKernel(Ry,n)}const y9=P({ceil_:g9});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ba(e,t,n){fn(e),n=n||Tl(t);const r={shape:e,value:t,dtype:n};return L.runKernel(h6,{},r)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function v9(e,t,n){const r=T(e,"x","clipByValue");if(A(t<=n,()=>`Error in clip: min (${t}) must be less than or equal to max (${n}).`),t===n)return ba(r.shape,t,r.dtype);const s={x:r},i={clipValueMin:t,clipValueMax:n};return L.runKernel(Ly,s,i)}const k4=P({clipByValue_:v9});function w9(e){return wt(e,0)}const S9=P({concat1d_:w9});function b9(e,t){return wt(e,t)}const N9=P({concat2d_:b9});function k9(e,t){return wt(e,t)}const T9=P({concat3d_:k9});function E9(e,t){return wt(e,t)}const x9=P({concat4d_:E9});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _9(e,t,n,r,s="NHWC",i=[1,1],o){const a=T(e,"x","conv2d","float32"),u=T(t,"filter","conv2d","float32");let l=a,c=!1;a.rank===3&&(c=!0,l=q(a,[1,a.shape[0],a.shape[1],a.shape[2]])),A(l.rank===4,()=>`Error in conv2d: input must be rank 4, but got rank ${l.rank}.`),A(u.rank===4,()=>`Error in conv2d: filter must be rank 4, but got rank ${u.rank}.`),Bn("conv2d",r,o);const p=s==="NHWC"?l.shape[3]:l.shape[1];A(p===u.shape[2],()=>`Error in conv2d: depth of input (${p}) must match input depth for filter ${u.shape[2]}.`),A(hs(n,i),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${n} and dilations '${i}'`),A(Hi(i),()=>"Error in conv2D: Dilated rates should be larger than 0."),A(Hi(n),()=>"Error in conv2D: Strides should be larger than 0.");const d={x:l,filter:u},w={strides:n,pad:r,dataFormat:s,dilations:i,dimRoundingMode:o},b=L.runKernel(By,d,w);return c?q(b,[b.shape[1],b.shape[2],b.shape[3]]):b}const xl=P({conv2d_:_9});function $9(e,t,n,r,s="NWC",i=1,o){const a=T(e,"x","conv1d"),u=T(t,"filter","conv1d");let l=a,c=!1;a.rank===2&&(c=!0,l=q(a,[1,a.shape[0],a.shape[1]])),A(l.rank===3,()=>`Error in conv1d: input must be rank 3, but got rank ${l.rank}.`),A(u.rank===3,()=>`Error in conv1d: filter must be rank 3, but got rank ${u.rank}.`),Bn("conv1d",r,o),A(l.shape[2]===u.shape[1],()=>`Error in conv1d: depth of input (${l.shape[2]}) must match input depth for filter ${u.shape[1]}.`),A(hs(n,i),()=>`Error in conv1D: Either stride or dilation must be 1. Got stride ${n} and dilation '${i}'`),A(Hi(i),()=>"Error in conv1D: Dilated rates should be larger than 0."),A(Hi(n),()=>"Error in conv1D: Stride should be larger than 0."),A(s==="NWC",()=>`Error in conv1d: got dataFormat of ${s} but only NWC is currently supported.`);const p=q(u,[1,u.shape[0],u.shape[1],u.shape[2]]),d=q(l,[l.shape[0],1,l.shape[1],l.shape[2]]),_=xl(d,p,[1,n],r,"NHWC",[1,i],o);return c?q(_,[_.shape[2],_.shape[3]]):q(_,[_.shape[0],_.shape[2],_.shape[3]])}const I9=P({conv1d_:$9});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function A9(e,t,n,r,s,i="NHWC",o){A(e.length===t.rank,()=>`Length of inShape (${e.length}) and rank of dy (${t.rank}) must match`);let a=e,u=t,l=!1;t.rank===3&&(l=!0,u=q(t,[1,t.shape[0],t.shape[1],t.shape[2]]),a=[1,e[0],e[1],e[2]]),A(a.length===4,()=>`Error in conv2dDerInput: inShape must be length 4, but got length ${a.length}.`),A(u.rank===4,()=>`Error in conv2dDerInput: dy must be rank 4, but got rank ${u.rank}`),A(n.rank===4,()=>`Error in conv2dDerInput: filter must be rank 4, but got rank ${n.rank}`);const c=i==="NHWC"?a[3]:a[1],p=i==="NHWC"?u.shape[3]:u.shape[1];A(c===n.shape[2],()=>`Error in conv2dDerInput: depth of input (${c}) must match input depth for filter ${n.shape[2]}.`),A(p===n.shape[3],()=>`Error in conv2dDerInput: depth of output (${p}) must match output depth for filter ${n.shape[3]}.`),Bn("conv2dDerInput",s,o);const d={dy:u,filter:n},w={strides:r,pad:s,dataFormat:i,dimRoundingMode:o,inputShape:a},b=L.runKernel(Vy,d,w);return l?q(b,[b.shape[1],b.shape[2],b.shape[3]]):b}const T4=P({conv2DBackpropInput_:A9});function O9(e,t,n,r,s,i){const o=T(e,"x","conv2dTranspose"),a=T(t,"filter","conv2dTranspose");return T4(n,o,a,r,s,"NHWC",i)}const C9=P({conv2dTranspose_:O9});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function D9(e,t,n,r,s="NDHWC",i=[1,1,1]){const o=T(e,"x","conv3d"),a=T(t,"filter","conv3d");let u=o,l=!1;o.rank===4&&(l=!0,u=q(o,[1,o.shape[0],o.shape[1],o.shape[2],o.shape[3]])),A(u.rank===5,()=>`Error in conv3d: input must be rank 5, but got rank ${u.rank}.`),A(a.rank===5,()=>`Error in conv3d: filter must be rank 5, but got rank ${a.rank}.`),A(u.shape[4]===a.shape[3],()=>`Error in conv3d: depth of input (${u.shape[4]}) must match input depth for filter ${a.shape[3]}.`),A(hs(n,i),()=>`Error in conv3D: Either strides or dilations must be 1. Got strides ${n} and dilations '${i}'`),A(s==="NDHWC",()=>`Error in conv3d: got dataFormat of ${s} but only NDHWC is currently supported.`),A(Hi(i),()=>"Error in conv3D: Dilated rates should be larger than 0."),A(Hi(n),()=>"Error in conv3D: Strides should be larger than 0.");const c={x:u,filter:a},p={strides:n,pad:r,dataFormat:s,dilations:i},d=L.runKernel(Wy,c,p);return l?q(d,[d.shape[1],d.shape[2],d.shape[3],d.shape[4]]):d}const F9=P({conv3d_:D9});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function P9(e,t,n,r,s){A(e.length===t.rank,()=>`Length of inShape (${e.length}) and rank of dy (${t.rank}) must match`);let i=e,o=t,a=!1;t.rank===4&&(a=!0,o=q(t,[1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]]),i=[1,e[0],e[1],e[2],e[3]]);const u=i[4],l=o.shape[4];A(i.length===5,()=>`Error in conv3dDerInput: inShape must be length 5, but got length ${i.length}.`),A(o.rank===5,()=>`Error in conv3dDerInput: dy must be rank 5, but got rank ${o.rank}`),A(n.rank===5,()=>`Error in conv3dDerInput: filter must be rank 5, but got rank ${n.rank}`),A(u===n.shape[3],()=>`Error in conv3dDerInput: depth of input (${u}) must match input depth for filter ${n.shape[3]}.`),A(l===n.shape[4],()=>`Error in conv3dDerInput: depth of output (${l}) must match output depth for filter ${n.shape[4]}.`);const c={dy:o,filter:n},p={pad:s,strides:r,inputShape:i},d=L.runKernel(Hy,c,p);return a?q(d,[d.shape[1],d.shape[2],d.shape[3],d.shape[4]]):d}const R9=P({conv3DBackpropInput_:P9});function L9(e,t,n,r,s){const i=T(e,"x","conv3dTranspose"),o=T(t,"filter","conv3dTranspose");return R9(n,i,o,r,s)}const z9=P({conv3dTranspose_:L9});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function M9(e){const n={x:T(e,"x","cos","float32")};return L.runKernel(Ky,n)}const j9=P({cos_:M9});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function B9(e){const n={x:T(e,"x","cosh","float32")};return L.runKernel(Gy,n)}const U9=P({cosh_:B9});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function V9(e,t=0,n=!1,r=!1){const i={x:T(e,"x","cumprod")},o={axis:t,exclusive:n,reverse:r};return L.runKernel(qy,i,o)}const W9=P({cumprod_:V9});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function H9(e,t=0,n=!1,r=!1){const i={x:T(e,"x","cumsum")},o={axis:t,exclusive:n,reverse:r};return L.runKernel(Xy,i,o)}const K9=P({cumsum_:H9});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function G9(e,t,n,r=!1){const s=T(e,"x","denseBincount"),i=T(t,"weights","denseBincount");A(s.dtype==="int32",()=>`Error in denseBincount: input dtype must be int32, but got ${s.dtype}`),A(s.rank<=2,()=>`Error in denseBincount: input must be at most rank 2, but got rank ${s.rank}.`),A(n>=0,()=>`size must be non-negative, but got ${n}.`),A(i.size===s.size||i.size===0,()=>`Error in denseBincount: weights must have the same shape as x or 0-length, but got x shape: ${s.shape}, weights shape: ${i.shape}.`);const o={x:s,weights:i},a={size:n,binaryOutput:r};return L.runKernel(Qy,o,a)}const q9=P({denseBincount_:G9});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function X9(e,t,n="NHWC"){const r=T(e,"x","depthToSpace","float32"),s=n==="NHWC"?r.shape[1]:r.shape[2],i=n==="NHWC"?r.shape[2]:r.shape[3],o=n==="NHWC"?r.shape[3]:r.shape[1];A(t>1,()=>`blockSize should be > 1 for depthToSpace, but was: ${t}`),A(s*t>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${s} and ${t}  for depthToSpace with input shape
    ${r.shape}`),A(i*t>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${i} and ${t} for depthToSpace with input shape
        ${r.shape}`),A(o%(t*t)===0,()=>`Dimension size must be evenly divisible by ${t*t} but is ${o} for depthToSpace with input shape ${r.shape}`);const a={x:r},u={blockSize:t,dataFormat:n};return L.runKernel(Jy,a,u)}const Y9=P({depthToSpace_:X9});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Q9(e,t,n,r,s="NHWC",i=[1,1],o){const a=T(e,"x","depthwiseConv2d","float32"),u=T(t,"filter","depthwiseConv2d","float32");let l=a,c=!1;a.rank===3&&(c=!0,l=q(a,[1,a.shape[0],a.shape[1],a.shape[2]])),A(l.rank===4,()=>`Error in depthwiseConv2d: input must be rank 4, but got rank ${l.rank}.`),A(u.rank===4,()=>`Error in depthwiseConv2d: filter must be rank 4, but got rank ${u.rank}.`);const p=s==="NHWC"?l.shape[3]:l.shape[1];A(p===u.shape[2],()=>`Error in depthwiseConv2d: number of input channels (${p}) must match the inChannels dimension in filter ${u.shape[2]}.`),Bn("depthwiseConv2d",r,o);const d={x:l,filter:u},w={strides:n,pad:r,dataFormat:s,dilations:i,dimRoundingMode:o},b=L.runKernel(Zy,d,w);return c?q(b,[b.shape[1],b.shape[2],b.shape[3]]):b}const sf=P({depthwiseConv2d_:Q9});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function J9(e){const n={x:T(e,"x","diag")};return L.runKernel(n6,n)}const Z9=P({diag_:J9});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ev(e,t,n,r,s=[1,1],i="NHWC"){const o=T(e,"x","dilation2d"),a=T(t,"filter","dilation2d");A(o.rank===3||o.rank===4,()=>`Error in dilation2d: input must be rank 3 or 4, but got rank ${o.rank}.`),A(a.rank===3,()=>`Error in dilation2d: filter must be rank 3, but got rank ${a.rank}.`),A(i==="NHWC",()=>`Error in dilation2d: Only NHWC is currently supported, but got dataFormat of ${i}`);let u=o,l=!1;o.rank===3&&(u=q(o,[1,o.shape[0],o.shape[1],o.shape[2]]),l=!0),A(u.shape[3]===a.shape[2],()=>`Error in dilation2d:  input and filter must have the same depth: ${u.shape[3]} vs ${a.shape[2]}`);const c={x:u,filter:a},p={strides:n,pad:r,dilations:s},d=L.runKernel(r6,c,p);return l?q(d,[d.shape[1],d.shape[2],d.shape[3]]):d}const tv=P({dilation2d_:ev});/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function nv(e,t){const n=[];for(let r=0;r<t.length;r++){const s=e[e.length-r-1],i=t.length-r-1,o=t[i];(s==null||s===1&&o>1)&&n.unshift(i)}return n}function ht(e,t){const n=Math.max(e.length,t.length),r=new Array(n);for(let s=0;s<n;s++){let i=e[e.length-s-1];i==null&&(i=1);let o=t[t.length-s-1];if(o==null&&(o=1),i===1)r[n-s-1]=o;else if(o===1)r[n-s-1]=i;else if(i!==o){const a=`Operands could not be broadcast together with shapes ${e} and ${t}.`;throw Error(a)}else r[n-s-1]=i}return r}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function rv(e,t){let n=T(e,"a","equal","string_or_numeric"),r=T(t,"b","equal","string_or_numeric");[n,r]=Qe(n,r),ht(n.shape,r.shape);const s={a:n,b:r};return L.runKernel(u6,s)}const E4=P({equal_:rv});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function sv(e,t,n){const r=T(t,"a","where"),s=T(n,"b","where"),i=T(e,"condition","where","bool"),o=ht(ht(i.shape,r.shape),s.shape),a=ku(i,o),u=ku(r,o),l=ku(s,o),c={condition:a,t:u,e:l};return L.runKernel(T5,c)}const ts=P({where_:sv});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function iv(e){const n={x:T(e,"x","zerosLike")};return L.runKernel(n7,n)}const an=P({zerosLike_:iv});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ov(e,t){let n=T(e,"a","div"),r=T(t,"b","div");[n,r]=Qe(n,r);const s=ke(n,r),i=an(s),o=E4(r,i);return ts(o,i,s)}const av=P({divNoNan_:ov});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function uv(e,t){const n=T(e,"t1","dot"),r=T(t,"t2","dot");A((n.rank===1||n.rank===2)&&(r.rank===1||r.rank===2),()=>`Error in dot: inputs must all be rank 1 or 2, but got ranks ${n.rank} and ${r.rank}.`);const s=n.rank===1?n.size:n.shape[1],i=r.rank===1?r.size:r.shape[0];if(A(s===i,()=>`Error in dot: inner dimensions of inputs must match, but got ${s} and ${i}.`),n.rank===1&&r.rank===1){const o=q(n,[1,-1]),a=q(r,[-1,1]),u=De(o,a);return q(u,[])}else if(n.rank===1&&r.rank===2){const o=q(n,[1,-1]),a=q(r,[r.shape[0],r.shape[1]]),u=De(o,a);return q(u,[u.size])}else if(n.rank===2&&r.rank===1){const o=q(r,[-1,1]),a=De(n,o);return q(a,[a.size])}else{const o=q(r,[r.shape[0],r.shape[1]]);return De(n,o)}}const lv=P({dot_:uv});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function cv(e,...t){const n=t.map((s,i)=>T(s,`tensors${i}`,"einsum")),r={equation:e};return L.runKernel(i6,n,r)}const gi=P({einsum_:cv});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fv(e){const n={x:T(e,"x","elu","float32")};return L.runKernel(o6,n)}const x4=P({elu_:fv});/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function pv(e,t){const n=T(e,"x","ensureShape","string_or_numeric");if(!ny(n.shape,t))throw new Error(`EnsureShape: Shape of tensor ${n.shape} is not compatible with expected shape ${t}`);return e}const hv=P({ensureShape_:pv});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function dv(e){let t=T(e,"x","erf");A(t.dtype==="int32"||t.dtype==="float32",()=>"Input dtype must be `int32` or `float32`."),t.dtype==="int32"&&(t=je(t,"float32"));const n={x:t};return L.runKernel(a6,n)}const mv=P({erf_:dv});/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gv(e,t,n){const r=e.length+t.length,s=[];let i=0,o=0;for(let a=0;a<r;a++)n.indexOf(a)===-1?s.push(e[i++]):s.push(t[o++]);return s}function _l(e,t){const n=t.map(r=>1);return gv(e,n,t)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function yv(e,t=null,n=!1){const s={x:T(e,"x","max")},i={reductionIndices:t,keepDims:n};return L.runKernel(L6,s,i)}const Ri=P({max_:yv});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function vv(e,t=null,n=!1){const s={x:T(e,"x","min")},i={axis:t,keepDims:n};return L.runKernel(V6,s,i)}const B1=P({min_:vv});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function wv(e,t){let n=T(e,"base","pow"),r=T(t,"exp","pow");[n,r]=Qe(n,r);const s={a:n,b:r};return L.runKernel(s5,s)}const ca=P({pow_:wv});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $e(e,t){if((xn(e)&&t!=="string"||Array.isArray(e))&&t!=="complex64")throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if(t==="string"&&xn(e)&&!(e instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return ps(e,[],[],t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Sv(e){const n={x:T(e,"x","sqrt","float32")};return L.runKernel(C5,n)}const Nr=P({sqrt_:Sv});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function bv(e){const t=T(e,"x","square"),n={};return L.runKernel("Square",{x:t},n)}const Ln=P({square_:bv});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Nv(e,t=null,n=!1){let r=T(e,"x","sum");r.dtype==="bool"&&(r=je(r,"int32"));const s={x:r},i={axis:t,keepDims:n};return L.runKernel(D5,s,i)}const ze=P({sum_:Nv});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function kv(e,t="euclidean",n=null,r=!1){e=T(e,"x","norm");const s=_4(e,t,n);let i=s.shape;if(r){const o=kl(n,e.shape);i=_l(s.shape,o)}return q(s,i)}function _4(e,t,n=null){if(e.rank===0)return rn(e);if(e.rank!==1&&n===null)return _4(q(e,[-1]),t,n);if(e.rank===1||typeof n=="number"||Array.isArray(n)&&n.length===1){if(t===1)return ze(rn(e),n);if(t===1/0)return Ri(rn(e),n);if(t===-1/0)return B1(rn(e),n);if(t==="euclidean"||t===2)return Nr(ze(ca(rn(e),$e(2,"int32")),n));throw new Error(`Error in norm: invalid ord value: ${t}`)}if(Array.isArray(n)&&n.length===2){if(t===1)return Ri(ze(rn(e),n[0]),n[1]-1);if(t===1/0)return Ri(ze(rn(e),n[1]),n[0]);if(t===-1/0)return B1(ze(rn(e),n[1]),n[0]);if(t==="fro"||t==="euclidean")return Nr(ze(Ln(e),n));throw new Error(`Error in norm: invalid ord value: ${t}`)}throw new Error(`Error in norm: invalid axis: ${n}`)}const $l=P({norm_:kv});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Tv(e,t=null,n=!1){return $l(e,"euclidean",t,n)}const Ev=P({euclideanNorm_:Tv});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xv(e){const n={x:T(e,"x","exp")};return L.runKernel(l6,n)}const kr=P({exp_:xv});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _v(e,t=0){const n=T(e,"x","expandDims","string_or_numeric");A(t<=n.rank,()=>"Axis must be <= rank of the tensor");const r={input:n},s={dim:t};return L.runKernel(c6,r,s)}const bn=P({expandDims_:_v});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $v(e){const n={x:T(e,"x","expm1")};return L.runKernel(f6,n)}const Iv=P({expm1_:$v});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Av(e,t){const n=T(e,"x","tile","string_or_numeric");A(n.rank===t.length,()=>`Error in transpose: rank of input ${n.rank} must match length of reps ${t}.`);const r={x:n},s={reps:t};return L.runKernel(Gd,r,s)}const Vo=P({tile_:Av});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ov(e,t,n,r="float32"){t==null&&(t=e);const s=br([e,t],r),i=e<=t?e:t;for(let a=0;a<i;++a)s.set(1,a,a);const o=q(s.toTensor(),[e,t]);if(n==null)return o;if(n.length===1)return Vo(bn(o,0),[n[0],1,1]);if(n.length===2)return Vo(bn(bn(o,0),0),[n[0],n[1],1,1]);if(n.length===3)return Vo(bn(bn(bn(o,0),0),0),[n[0],n[1],n[2],1,1]);throw new Error(`eye() currently supports only 1D and 2D batchShapes, but received ${n.length}D.`)}const $4=P({eye_:Ov});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Cv(e){const n={x:T(e,"x","floor","float32")};return L.runKernel(m6,n)}const I4=P({floor_:Cv});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Dv(e,t,n=0,r=0){const s=T(e,"x","gather"),i=T(t,"indices","gather","int32"),o={x:s,indices:i},a={axis:n,batchDims:r};return L.runKernel(v6,o,a)}const A4=P({gather_:Dv});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Fv(e,t){let n=T(e,"a","greater","string_or_numeric"),r=T(t,"b","greater","string_or_numeric");[n,r]=Qe(n,r),ht(n.shape,r.shape);const s={a:n,b:r};return L.runKernel(S6,s)}const Il=P({greater_:Fv});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Pv(e,t){let n=T(e,"a","greaterEqual","string_or_numeric"),r=T(t,"b","greaterEqual","string_or_numeric");[n,r]=Qe(n,r),ht(n.shape,r.shape);const s={a:n,b:r};return L.runKernel(b6,s)}const O4=P({greaterEqual_:Pv});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Rv(e){const n={input:T(e,"input","imag")};return L.runKernel(k6,n)}const Al=P({imag_:Rv});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Lv(e){const n={x:T(e,"x","isFinite")};return L.runKernel(T6,n)}const zv=P({isFinite_:Lv});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Mv(e){const n={x:T(e,"x","isInf")};return L.runKernel(E6,n)}const jv=P({isInf_:Mv});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Bv(e){const n={x:T(e,"x","isNaN")};return L.runKernel(x6,n)}const Uv=P({isNaN_:Bv});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Vv(e,t=.2){const r={x:T(e,"x","leakyRelu")},s={alpha:t};return L.runKernel(_6,r,s)}const C4=P({leakyRelu_:Vv});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Wv(e,t){let n=T(e,"a","less","string_or_numeric"),r=T(t,"b","less","string_or_numeric");[n,r]=Qe(n,r),ht(n.shape,r.shape);const s={a:n,b:r};return L.runKernel($6,s)}const U1=P({less_:Wv});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Hv(e,t){let n=T(e,"a","lessEqual","string_or_numeric"),r=T(t,"b","lessEqual","string_or_numeric");[n,r]=Qe(n,r),ht(n.shape,r.shape);const s={a:n,b:r};return L.runKernel(I6,s)}const of=P({lessEqual_:Hv});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Kv(e,t,n){if(n<=0)throw new Error("The number of values should be positive.");const r={start:e,stop:t,num:n};return L.runKernel(A6,{},r)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Gv(e,t=5,n=1,r=1,s=.5){const i=T(e,"x","localResponseNormalization");A(i.rank===4||i.rank===3,()=>`Error in localResponseNormalization: x must be rank 3 or 4 but got
               rank ${i.rank}.`),A(aa(t),()=>`Error in localResponseNormalization: depthRadius must be an integer but got depthRadius ${t}.`);let o=i,a=!1;i.rank===3&&(a=!0,o=q(i,[1,i.shape[0],i.shape[1],i.shape[2]]));const u={x:o},l={depthRadius:t,bias:n,alpha:r,beta:s},c=L.runKernel(R6,u,l);return a?q(c,[c.shape[1],c.shape[2],c.shape[3]]):c}const qv=P({localResponseNormalization_:Gv});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Xv(e){const n={x:T(e,"x","log","float32")};return L.runKernel(O6,n)}const fa=P({log_:Xv});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Yv(e){const n={x:T(e,"x","log1p")};return L.runKernel(C6,n)}const D4=P({log1p_:Yv});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Qv(e,t){A(_1(e),()=>"The f passed in variableGrads(f) must be a function"),A(t==null||Array.isArray(t)&&t.every(l=>l instanceof Yu),()=>"The varList passed in variableGrads(f, varList) must be an array of variables");const n=t!=null;if(!n){t=[];for(const l in L.registeredVariables)t.push(L.registeredVariables[l])}const r=n?t.filter(l=>!l.trainable):null,s=t.length;t=t.filter(l=>l.trainable),A(t.length>0,()=>`variableGrads() expects at least one of the input variables to be trainable, but none of the ${s} variables is trainable.`);const i=!0,{value:o,grads:a}=L.gradients(e,t,null,i);A(a.some(l=>l!=null),()=>"Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()."),A(o.rank===0,()=>`The f passed in variableGrads(f) must return a scalar, but it returned a rank-${o.rank} tensor`);const u={};return t.forEach((l,c)=>{a[c]!=null&&(u[l.name]=a[c])}),r!=null&&r.forEach(l=>u[l.name]=null),{value:o,grads:u}}function Tr(e){return L.customGrad(e)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Jv(e){const n={x:T(e,"x","neg")};return L.runKernel(X6,n)}const nr=P({neg_:Jv});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Zv(e){const n={x:T(e,"x","softplus")};return L.runKernel(O5,n)}const F4=P({softplus_:Zv});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ew(e){const t=T(e,"x","logSigmoid");return Tr(r=>({value:nr(F4(nr(r))),gradFunc:o=>te(o,zs(nr(r)))}))(t)}const tw=P({logSigmoid_:ew});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function nw(e,t){let n=T(e,"a","sub"),r=T(t,"b","sub");[n,r]=Qe(n,r);const s={a:n,b:r};return L.runKernel(q5,s)}const ve=P({sub_:nw});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function rw(e,t=-1){const n=T(e,"logits","logSoftmax");if(t===-1&&(t=n.rank-1),t!==n.rank-1)throw Error(`Log Softmax along a non-last dimension is not yet supported. Logits was rank ${n.rank} and axis was ${t}`);return Tr((s,i)=>{const a=Ri(s,t,!0),u=ve(s,a),l=ve(je(u,"float32"),fa(ze(kr(u),t,!0)));return i([l]),{value:l,gradFunc:(p,d)=>{const[w]=d,b=!0,E=kr(w);return ve(p,te(ze(p,t,b),E))}}})(n)}const sw=P({logSoftmax_:rw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function iw(e,t=null,n=!1){const r=T(e,"x","logSumExp"),s=kl(t,r.shape),i=Ri(r,s,!0),o=ve(r,i),a=kr(o),u=ze(a,s),l=fa(u),c=le(q(i,l.shape),l);if(n){const p=_l(c.shape,s);return q(c,p)}return c}const P4=P({logSumExp_:iw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ow(e,t){const n=T(e,"a","logicalAnd","bool"),r=T(t,"b","logicalAnd","bool");ht(n.shape,r.shape);const s={a:n,b:r};return L.runKernel(D6,s)}const el=P({logicalAnd_:ow});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function aw(e){const n={x:T(e,"x","logicalNot","bool")};return L.runKernel(F6,n)}const R4=P({logicalNot_:aw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function uw(e,t){const n=T(e,"a","logicalOr","bool"),r=T(t,"b","logicalOr","bool");ht(n.shape,r.shape);const s={a:n,b:r};return L.runKernel(P6,s)}const L4=P({logicalOr_:uw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function lw(e,t){const n=T(e,"a","logicalXor","bool"),r=T(t,"b","logicalXor","bool");return ht(n.shape,r.shape),el(L4(e,t),R4(el(e,t)))}const cw=P({logicalXor_:lw});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const su=2147483648;function fw(e,t,n="left"){const r=T(e,"sortedSequence","searchSorted"),s=T(t,"values","searchSorted"),i=r.shape[r.shape.length-1],o=s.shape[s.shape.length-1],a=q(r,[-1,i]),u=q(s,[-1,o]);if(a.rank<2)throw new Error("Sorted input argument must be at least 2-dimensional");if(a.shape[0]!==u.shape[0])throw new Error("Leading dimension of 'sortedSequence' and 'values' must match.");if(ot(u.shape)>=su)throw new Error(`values tensor size must less than ${su}`);if(a.shape[1]>=su)throw new Error(`trailing dim_size must less than ${su} for int32 output type, was ${a.shape[1]}`);const l={sortedSequence:a,values:u},c={side:n};return L.runKernel(k5,l,c)}const af=P({searchSorted_:fw});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function pw(e,t){return af(e,t,"left")}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hw(e,t,n,r,s){const i=T(e,"x","maxPool"),o=1;let a=i,u=!1;i.rank===3&&(u=!0,a=q(i,[1,i.shape[0],i.shape[1],i.shape[2]])),A(a.rank===4,()=>`Error in maxPool: input must be rank 4 but got rank ${a.rank}.`),A(hs(n,o),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${n} and dilations '${o}'`),Bn("maxPool",r,s);const l={x:a},c={filterSize:t,strides:n,pad:r,dimRoundingMode:s},p=L.runKernel(M6,l,c);return u?q(p,[p.shape[1],p.shape[2],p.shape[3]]):p}const z4=P({maxPool_:hw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function dw(e,t=[1,1,1],n,r,s,i="NDHWC"){const o=T(e,"x","maxPool3d");let a=o,u=!1;o.rank===4&&(u=!0,a=q(o,[1,o.shape[0],o.shape[1],o.shape[2],o.shape[3]])),A(a.rank===5,()=>`Error in maxPool3d: x must be rank 5 but got rank ${a.rank}.`),A(i==="NDHWC",()=>`Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of ${i}`),Bn("maxPool3d",r,s);const l={x:a},c={filterSize:t,strides:n,pad:r,dimRoundingMode:s,dataFormat:i},p=L.runKernel(j6,l,c);return u?q(p,[p.shape[1],p.shape[2],p.shape[3],p.shape[4]]):p}const mw=P({maxPool3d_:dw});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gw(e,t,n,r,s=!1){const o={x:T(e,"x","maxPoolWithArgmax")},a={filterSize:t,strides:n,pad:r,includeBatchInIndex:s},u=L.runKernel(B6,o,a);return{result:u[0],indexes:u[1]}}const yw=P({maxPoolWithArgmax_:gw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function vw(e,t){let n=T(e,"a","maximum"),r=T(t,"b","maximum");[n,r]=Qe(n,r),n.dtype==="bool"&&(n=je(n,"int32"),r=je(r,"int32")),ht(n.shape,r.shape);const s={a:n,b:r};return L.runKernel(z6,s)}const M4=P({maximum_:vw});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ww(e,t=null,n=!1){const s={x:T(e,"x","mean")},i={axis:t,keepDims:n};return L.runKernel(U6,s,i)}const tl=P({mean_:ww});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ki(e,t="float32"){if(fn(e),t==="complex64"){const r=Ki(e,"float32"),s=Ki(e,"float32");return is(r,s)}const n=Z2(ot(e),t);return L.makeTensor(n,e,t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Fs(e,t="float32"){if(fn(e),t==="complex64"){const r=Fs(e,"float32"),s=Ki(e,"float32");return is(r,s)}const n=Bd(ot(e),t);return L.makeTensor(n,e,t)}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Sw(e,t,{indexing:n="xy"}={}){if(n!=="xy"&&n!=="ij")throw new TypeError(`${n} is not a valid third argument to meshgrid`);if(e===void 0)return[];let r=T(e,"x","meshgrid",e instanceof qe?e.dtype:"float32");if(t===void 0)return[r];let s=T(t,"y","meshgrid",t instanceof qe?t.dtype:"float32");const i=ot(r.shape),o=ot(s.shape);return n==="xy"?(r=q(r,[1,-1]),s=q(s,[-1,1]),[De(Fs([o,1],r.dtype),r),De(s,Fs([1,i],s.dtype))]):(r=q(r,[-1,1]),s=q(s,[1,-1]),[De(r,Fs([1,o],r.dtype)),De(Fs([i,1],s.dtype),s)])}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function bw(e,t){let n=T(e,"a","minimum"),r=T(t,"b","minimum");[n,r]=Qe(n,r),n.dtype==="bool"&&(n=je(n,"int32"),r=je(r,"int32")),ht(n.shape,r.shape);const s={a:n,b:r};return L.runKernel(W6,s)}const nl=P({minimum_:bw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Nw(e,t,n){A(n==="reflect"||n==="symmetric",()=>`Invalid mode. Mode must be either reflect or symmetric. Got ${n}.`);const r=T(e,"x","mirrorPad");if(r.rank===0)throw new Error("mirrorPad(scalar) is not defined. Pass non-scalar to mirrorPad");A(t.length===r.rank,()=>`Padding doesn't match input. Must be ${r.rank}. Got ${t.length}.`);const s=n==="reflect"?1:0;for(let a=0;a<r.rank;a++)A(t[a].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),A(t[a][0]>=0&&t[a][0]<=r.shape[a]-s&&t[a][1]>=0&&t[a][1]<=r.shape[a]-s,()=>`Padding in dimension ${a} cannot be greater than or equal to ${r.shape[a]-s} or less than 0 for input of shape ${r.shape}`);const i={paddings:t,mode:n},o={x:r};return L.runKernel(H6,o,i)}const kw=P({mirrorPad_:Nw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Tw(e,t){let n=T(e,"a","mod"),r=T(t,"b","mod");[n,r]=Qe(n,r);const s={a:n,b:r};return L.runKernel(K6,s)}const Ew=P({mod_:Tw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xw(e,t=null,n=!1){e=T(e,"x","moments");const r=kl(t,e.shape),s=tl(e,r,n);let i=s.shape;n||(i=_l(s.shape,r));const o=Ln(ve(je(e,"float32"),q(s,i))),a=tl(o,r,n);return{mean:s,variance:a}}const _w=P({moments_:xw});function $w(e,t,n,r){const s=T(t,"data","multiRNNCell"),i=Qu(n,"c","multiRNNCell"),o=Qu(r,"h","multiRNNCell");let a=s;const u=[];for(let p=0;p<e.length;p++){const d=e[p](a,i[p],o[p]);u.push(d[0]),u.push(d[1]),a=d[1]}const l=[],c=[];for(let p=0;p<u.length;p+=2)l.push(u[p]),c.push(u[p+1]);return[l,c]}const Iw=P({multiRNNCell_:$w});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Aw(e,t,n,r=!1){const s=T(e,"logits","multinomial"),i=s.size,o=s.rank;if(i<2)throw new Error(`Error in multinomial: you need at least 2 outcomes, but got ${i}.`);if(o>2)throw new Error(`Rank of probabilities must be 1 or 2, but is ${o}`);n=n||Math.random();const u={logits:o===1?q(s,[1,-1]):s},l={numSamples:t,seed:n,normalized:r},c=L.runKernel(G6,u,l);return o===1?q(c,[c.size]):c}const Ow=P({multinomial_:Aw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Cw(e,t){let n=T(e,"a","notEqual","string_or_numeric"),r=T(t,"b","notEqual","string_or_numeric");[n,r]=Qe(n,r),ht(n.shape,r.shape);const s={a:n,b:r};return L.runKernel(Y6,s)}const j4=P({notEqual_:Cw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Dw(e,t,n=1,r=0,s="int32"){if(t<2)throw new Error(`Error in oneHot: depth must be >=2, but it is ${t}`);const o={indices:T(e,"indices","oneHot","int32")},a={dtype:s,depth:t,onValue:n,offValue:r};return L.runKernel(t5,o,a)}const Fw=P({oneHot_:Dw});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Pw(e){const n={x:T(e,"x","onesLike")};return L.runKernel(e5,n)}const Rw=P({onesLike_:Pw});function Lw(e,t){const n=T(e,"v1","outerProduct"),r=T(t,"v2","outerProduct");A(n.rank===1&&r.rank===1,()=>`Error in outerProduct: inputs must be rank 1, but got ranks ${n.rank} and ${r.rank}.`);const s=q(n,[-1,1]),i=q(r,[1,-1]);return De(s,i)}const zw=P({outerProduct_:Lw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Mw(e,t,n=0){const r=T(e,"x","pad");if(r.rank===0)throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");const s={paddings:t,constantValue:n},i={x:r};return L.runKernel(r5,i,s)}const Na=P({pad_:Mw});function jw(e,t,n=0){return A(t.length===2,()=>"Invalid number of paddings. Must be length of 2."),Na(e,[t],n)}const Bw=P({pad1d_:jw});function Uw(e,t,n=0){return A(t.length===2&&t[0].length===2&&t[1].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),Na(e,t,n)}const Vw=P({pad2d_:Uw});function Ww(e,t,n=0){return A(t.length===3&&t[0].length===2&&t[1].length===2&&t[2].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),Na(e,t,n)}const Hw=P({pad3d_:Ww});function Kw(e,t,n=0){return A(t.length===4&&t[0].length===2&&t[1].length===2&&t[2].length===2&&t[3].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),Na(e,t,n)}const Gw=P({pad4d_:Kw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qw(e,t,n){const r=T(e,"x","spaceToBatchND");A(r.rank>=1+t.length,()=>`input rank ${r.rank} should be > than [blockShape] ${t.length}`),A(n.length===t.length,()=>`paddings.shape[0] ${n.length} must be equal to [blockShape] ${t.length}`),A(r.shape.reduce((o,a,u)=>u>0&&u<=t.length?o&&(a+n[u-1][0]+n[u-1][1])%t[u-1]===0:o,!0),()=>`input spatial dimensions ${r.shape.slice(1)} with paddings ${n.toString()} must be divisible by blockShapes ${t.toString()}`);const s={x:r},i={blockShape:t,paddings:n};return L.runKernel(F5,s,i)}const B4=P({spaceToBatchND_:qw});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Xw(e,t,n,r,s,i,o){s==null&&(s=[1,1]),i==null&&(i=1),r===0&&(r="valid");const a=T(e,"x","maxPool");let u=a,l=!1;a.rank===3&&(l=!0,u=q(a,[1,a.shape[0],a.shape[1],a.shape[2]])),A(hs(i,s),()=>`Error in pool: Either strides or dilations must be 1. Got strides ${i} and dilations '${s}'`);const c=j8(u.shape,t,i,s,r),p=[c.dilationHeight,c.dilationWidth];let d;r==="same"?d=Qw([c.filterHeight,c.filterWidth],p):d=[[0,0],[0,0]];const w=p[0]===1&&p[1]===1,[b,E]=Yw([c.inHeight,c.inWidth],p,d),_=w?r:"valid",N=w?u:B4(u,p,b),$=(n==="avg"?()=>S4(N,t,i,_,o):()=>z4(N,t,i,_,o))(),F=w?$:b4($,p,E);return l?q(F,[F.shape[1],F.shape[2],F.shape[3]]):F}function Yw(e,t,n){const r=n.map(c=>c[0]),s=n.map(c=>c[1]),i=e.concat(r,s),o=t.map((c,p)=>(c-i[p]%c)%c),a=s.map((c,p)=>c+o[p]),u=t.map((c,p)=>[r[p],a[p]]),l=t.map((c,p)=>[0,o[p]]);return[u,l]}function Qw(e,t){const r=e.map((o,a)=>o+(o-1)*(t[a]-1)).map(o=>o-1),s=r.map(o=>Math.floor(o/2)),i=r.map((o,a)=>o-s[a]);return r.map((o,a)=>[s[a],i[a]])}const Jw=P({pool_:Xw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Zw(e,t){const n=T(e,"x","prelu"),r=T(t,"alpha","prelu"),s={x:n,alpha:r};return L.runKernel(i5,s)}const U4=P({prelu_:Zw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function eS(e,t=null,n=!1){let r=T(e,"x","prod");r.dtype==="bool"&&(r=je(r,"int32"));const s={x:r},i={axis:t,keepDims:n};return L.runKernel(o5,s,i)}const tS=P({prod_:eS});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function nS(e,t,n,r){const s=e.map((c,p)=>T(c,`tensors${p}`,"raggedGather","int32")),i=T(t,"paramsDenseValues","raggedGather"),o=T(n,"indices","raggedGather","int32"),a={paramsNestedSplits:s,paramsDenseValues:i,indices:o},u={outputRaggedRank:r},l=L.runKernel(a5,a,u);return{outputNestedSplits:l.slice(0,l.length-1),outputDenseValues:l[l.length-1]}}const rS=P({raggedGather_:nS});/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function sS(e,t,n){const r=T(e,"starts","raggedRange"),s=T(t,"limits","raggedRange",r.dtype),i=T(n,"deltas","raggedRange",r.dtype),o={starts:r,limits:s,deltas:i},a=L.runKernel(u5,o);return{rtNestedSplits:a[0],rtDenseValues:a[1]}}const iS=P({raggedRange_:sS});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function oS(e,t,n,r,s){const i=T(e,"shape","raggedTensorToTensor","int32"),o=T(t,"values","raggedTensorToTensor"),a=T(n,"defaultValue","raggedTensorToTensor",o.dtype),u=r.map((p,d)=>T(p,`tensors${d}`,"raggedTensorToTensor","int32")),l={shape:i,values:o,defaultValue:a,rowPartitionTensors:u},c={rowPartitionTypes:s};return L.runKernel(l5,l,c)}const aS=P({raggedTensorToTensor_:oS});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function uS(e,t,n){fn(e);const r=ot(e);let s=null;if(n==null||n==="float32")s=new Float32Array(r);else if(n==="int32")s=new Int32Array(r);else if(n==="bool")s=new Uint8Array(r);else throw new Error(`Unknown data type ${n}`);for(let i=0;i<r;i++)s[i]=t();return L.makeTensor(s,e,n)}const lS=P({rand_:uS});var uf={exports:{}};uf.exports;(function(e){(function(t,n,r){function s(u){var l=this,c=a();l.next=function(){var p=2091639*l.s0+l.c*23283064365386963e-26;return l.s0=l.s1,l.s1=l.s2,l.s2=p-(l.c=p|0)},l.c=1,l.s0=c(" "),l.s1=c(" "),l.s2=c(" "),l.s0-=c(u),l.s0<0&&(l.s0+=1),l.s1-=c(u),l.s1<0&&(l.s1+=1),l.s2-=c(u),l.s2<0&&(l.s2+=1),c=null}function i(u,l){return l.c=u.c,l.s0=u.s0,l.s1=u.s1,l.s2=u.s2,l}function o(u,l){var c=new s(u),p=l&&l.state,d=c.next;return d.int32=function(){return c.next()*4294967296|0},d.double=function(){return d()+(d()*2097152|0)*11102230246251565e-32},d.quick=d,p&&(typeof p=="object"&&i(p,c),d.state=function(){return i(c,{})}),d}function a(){var u=4022871197,l=function(c){c=String(c);for(var p=0;p<c.length;p++){u+=c.charCodeAt(p);var d=.02519603282416938*u;u=d>>>0,d-=u,d*=u,u=d>>>0,d-=u,u+=d*4294967296}return(u>>>0)*23283064365386963e-26};return l}n&&n.exports?n.exports=o:this.alea=o})(Jn,e)})(uf);var cS=uf.exports,lf={exports:{}};lf.exports;(function(e){(function(t,n,r){function s(a){var u=this,l="";u.x=0,u.y=0,u.z=0,u.w=0,u.next=function(){var p=u.x^u.x<<11;return u.x=u.y,u.y=u.z,u.z=u.w,u.w^=u.w>>>19^p^p>>>8},a===(a|0)?u.x=a:l+=a;for(var c=0;c<l.length+64;c++)u.x^=l.charCodeAt(c)|0,u.next()}function i(a,u){return u.x=a.x,u.y=a.y,u.z=a.z,u.w=a.w,u}function o(a,u){var l=new s(a),c=u&&u.state,p=function(){return(l.next()>>>0)/4294967296};return p.double=function(){do var d=l.next()>>>11,w=(l.next()>>>0)/4294967296,b=(d+w)/(1<<21);while(b===0);return b},p.int32=l.next,p.quick=p,c&&(typeof c=="object"&&i(c,l),p.state=function(){return i(l,{})}),p}n&&n.exports?n.exports=o:this.xor128=o})(Jn,e)})(lf);var fS=lf.exports,cf={exports:{}};cf.exports;(function(e){(function(t,n,r){function s(a){var u=this,l="";u.next=function(){var p=u.x^u.x>>>2;return u.x=u.y,u.y=u.z,u.z=u.w,u.w=u.v,(u.d=u.d+362437|0)+(u.v=u.v^u.v<<4^(p^p<<1))|0},u.x=0,u.y=0,u.z=0,u.w=0,u.v=0,a===(a|0)?u.x=a:l+=a;for(var c=0;c<l.length+64;c++)u.x^=l.charCodeAt(c)|0,c==l.length&&(u.d=u.x<<10^u.x>>>4),u.next()}function i(a,u){return u.x=a.x,u.y=a.y,u.z=a.z,u.w=a.w,u.v=a.v,u.d=a.d,u}function o(a,u){var l=new s(a),c=u&&u.state,p=function(){return(l.next()>>>0)/4294967296};return p.double=function(){do var d=l.next()>>>11,w=(l.next()>>>0)/4294967296,b=(d+w)/(1<<21);while(b===0);return b},p.int32=l.next,p.quick=p,c&&(typeof c=="object"&&i(c,l),p.state=function(){return i(l,{})}),p}n&&n.exports?n.exports=o:this.xorwow=o})(Jn,e)})(cf);var pS=cf.exports,ff={exports:{}};ff.exports;(function(e){(function(t,n,r){function s(a){var u=this;u.next=function(){var c=u.x,p=u.i,d,w;return d=c[p],d^=d>>>7,w=d^d<<24,d=c[p+1&7],w^=d^d>>>10,d=c[p+3&7],w^=d^d>>>3,d=c[p+4&7],w^=d^d<<7,d=c[p+7&7],d=d^d<<13,w^=d^d<<9,c[p]=w,u.i=p+1&7,w};function l(c,p){var d,w=[];if(p===(p|0))w[0]=p;else for(p=""+p,d=0;d<p.length;++d)w[d&7]=w[d&7]<<15^p.charCodeAt(d)+w[d+1&7]<<13;for(;w.length<8;)w.push(0);for(d=0;d<8&&w[d]===0;++d);for(d==8?w[7]=-1:w[d],c.x=w,c.i=0,d=256;d>0;--d)c.next()}l(u,a)}function i(a,u){return u.x=a.x.slice(),u.i=a.i,u}function o(a,u){a==null&&(a=+new Date);var l=new s(a),c=u&&u.state,p=function(){return(l.next()>>>0)/4294967296};return p.double=function(){do var d=l.next()>>>11,w=(l.next()>>>0)/4294967296,b=(d+w)/(1<<21);while(b===0);return b},p.int32=l.next,p.quick=p,c&&(c.x&&i(c,l),p.state=function(){return i(l,{})}),p}n&&n.exports?n.exports=o:this.xorshift7=o})(Jn,e)})(ff);var hS=ff.exports,pf={exports:{}};pf.exports;(function(e){(function(t,n,r){function s(a){var u=this;u.next=function(){var c=u.w,p=u.X,d=u.i,w,b;return u.w=c=c+1640531527|0,b=p[d+34&127],w=p[d=d+1&127],b^=b<<13,w^=w<<17,b^=b>>>15,w^=w>>>12,b=p[d]=b^w,u.i=d,b+(c^c>>>16)|0};function l(c,p){var d,w,b,E,_,N=[],x=128;for(p===(p|0)?(w=p,p=null):(p=p+"\0",w=0,x=Math.max(x,p.length)),b=0,E=-32;E<x;++E)p&&(w^=p.charCodeAt((E+32)%p.length)),E===0&&(_=w),w^=w<<10,w^=w>>>15,w^=w<<4,w^=w>>>13,E>=0&&(_=_+1640531527|0,d=N[E&127]^=w+_,b=d==0?b+1:0);for(b>=128&&(N[(p&&p.length||0)&127]=-1),b=127,E=4*128;E>0;--E)w=N[b+34&127],d=N[b=b+1&127],w^=w<<13,d^=d<<17,w^=w>>>15,d^=d>>>12,N[b]=w^d;c.w=_,c.X=N,c.i=b}l(u,a)}function i(a,u){return u.i=a.i,u.w=a.w,u.X=a.X.slice(),u}function o(a,u){a==null&&(a=+new Date);var l=new s(a),c=u&&u.state,p=function(){return(l.next()>>>0)/4294967296};return p.double=function(){do var d=l.next()>>>11,w=(l.next()>>>0)/4294967296,b=(d+w)/(1<<21);while(b===0);return b},p.int32=l.next,p.quick=p,c&&(c.X&&i(c,l),p.state=function(){return i(l,{})}),p}n&&n.exports?n.exports=o:this.xor4096=o})(Jn,e)})(pf);var dS=pf.exports,hf={exports:{}};hf.exports;(function(e){(function(t,n,r){function s(a){var u=this,l="";u.next=function(){var p=u.b,d=u.c,w=u.d,b=u.a;return p=p<<25^p>>>7^d,d=d-w|0,w=w<<24^w>>>8^b,b=b-p|0,u.b=p=p<<20^p>>>12^d,u.c=d=d-w|0,u.d=w<<16^d>>>16^b,u.a=b-p|0},u.a=0,u.b=0,u.c=-1640531527,u.d=1367130551,a===Math.floor(a)?(u.a=a/4294967296|0,u.b=a|0):l+=a;for(var c=0;c<l.length+20;c++)u.b^=l.charCodeAt(c)|0,u.next()}function i(a,u){return u.a=a.a,u.b=a.b,u.c=a.c,u.d=a.d,u}function o(a,u){var l=new s(a),c=u&&u.state,p=function(){return(l.next()>>>0)/4294967296};return p.double=function(){do var d=l.next()>>>11,w=(l.next()>>>0)/4294967296,b=(d+w)/(1<<21);while(b===0);return b},p.int32=l.next,p.quick=p,c&&(typeof c=="object"&&i(c,l),p.state=function(){return i(l,{})}),p}n&&n.exports?n.exports=o:this.tychei=o})(Jn,e)})(hf);var mS=hf.exports,V4={exports:{}};const gS={},yS=Object.freeze(Object.defineProperty({__proto__:null,default:gS},Symbol.toStringTag,{value:"Module"})),vS=T0(yS);(function(e){(function(t,n,r){var s=256,i=6,o=52,a="random",u=r.pow(s,i),l=r.pow(2,o),c=l*2,p=s-1,d;function w(F,z,M){var V=[];z=z==!0?{entropy:!0}:z||{};var W=N(_(z.entropy?[F,$(n)]:F??x(),3),V),X=new b(V),Q=function(){for(var ue=X.g(i),Ne=u,ce=0;ue<l;)ue=(ue+ce)*s,Ne*=s,ce=X.g(1);for(;ue>=c;)ue/=2,Ne/=2,ce>>>=1;return(ue+ce)/Ne};return Q.int32=function(){return X.g(4)|0},Q.quick=function(){return X.g(4)/4294967296},Q.double=Q,N($(X.S),n),(z.pass||M||function(ue,Ne,ce,Ce){return Ce&&(Ce.S&&E(Ce,X),ue.state=function(){return E(X,{})}),ce?(r[a]=ue,Ne):ue})(Q,W,"global"in z?z.global:this==r,z.state)}function b(F){var z,M=F.length,V=this,W=0,X=V.i=V.j=0,Q=V.S=[];for(M||(F=[M++]);W<s;)Q[W]=W++;for(W=0;W<s;W++)Q[W]=Q[X=p&X+F[W%M]+(z=Q[W])],Q[X]=z;(V.g=function(ue){for(var Ne,ce=0,Ce=V.i,Je=V.j,rt=V.S;ue--;)Ne=rt[Ce=p&Ce+1],ce=ce*s+rt[p&(rt[Ce]=rt[Je=p&Je+Ne])+(rt[Je]=Ne)];return V.i=Ce,V.j=Je,ce})(s)}function E(F,z){return z.i=F.i,z.j=F.j,z.S=F.S.slice(),z}function _(F,z){var M=[],V=typeof F,W;if(z&&V=="object")for(W in F)try{M.push(_(F[W],z-1))}catch{}return M.length?M:V=="string"?F:F+"\0"}function N(F,z){for(var M=F+"",V,W=0;W<M.length;)z[p&W]=p&(V^=z[p&W]*19)+M.charCodeAt(W++);return $(z)}function x(){try{var F;return d&&(F=d.randomBytes)?F=F(s):(F=new Uint8Array(s),(t.crypto||t.msCrypto).getRandomValues(F)),$(F)}catch{var z=t.navigator,M=z&&z.plugins;return[+new Date,t,M,t.screen,$(n)]}}function $(F){return String.fromCharCode.apply(0,F)}if(N(r.random(),n),e.exports){e.exports=w;try{d=vS}catch{}}else r["seed"+a]=w})(typeof self<"u"?self:Jn,[],Math)})(V4);var wS=V4.exports,SS=cS,bS=fS,NS=pS,kS=hS,TS=dS,ES=mS,ei=wS;ei.alea=SS;ei.xor128=bS;ei.xorwow=NS;ei.xorshift7=kS;ei.xor4096=TS;ei.tychei=ES;var df=ei;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class mf{constructor(t,n,r,s,i){this.mean=t,this.stdDev=n,this.dtype=r,this.nextVal=NaN,this.truncated=s,this.truncated&&(this.upper=this.mean+this.stdDev*2,this.lower=this.mean-this.stdDev*2);const o=i||Math.random();this.random=df.alea(o.toString())}nextValue(){if(!isNaN(this.nextVal)){const s=this.nextVal;return this.nextVal=NaN,s}let t,n,r=!1;for(;!r;){let s,i,o;do s=2*this.random()-1,i=2*this.random()-1,o=s*s+i*i;while(o>=1||o===0);const a=Math.sqrt(-2*Math.log(o)/o);t=this.mean+this.stdDev*s*a,n=this.mean+this.stdDev*i*a,(!this.truncated||this.isValidTruncated(t))&&(r=!0)}return(!this.truncated||this.isValidTruncated(n))&&(this.nextVal=this.convertValue(n)),this.convertValue(t)}convertValue(t){return this.dtype==null||this.dtype==="float32"?t:Math.round(t)}isValidTruncated(t){return t<=this.upper&&t>=this.lower}}class xS{constructor(t,n,r,s){this.alpha=t,this.beta=1/n,this.dtype=r;const i=s||Math.random();this.randu=df.alea(i.toString()),this.randn=new mf(0,1,r,!1,this.randu()),t<1?this.d=t+2/3:this.d=t-1/3,this.c=1/Math.sqrt(9*this.d)}nextValue(){let t,n,r,s,i,o;for(;;){do s=this.randn.nextValue(),o=1+this.c*s;while(o<=0);if(o*=o*o,t=s*s,n=1-.331*t*t,r=.5*t+this.d*(1-o+Math.log(o)),i=this.randu(),i<n||Math.log(i)<r)break}return o=1/this.beta*this.d*o,this.alpha<1&&(o*=Math.pow(this.randu(),1/this.alpha)),this.convertValue(o)}convertValue(t){return this.dtype==="float32"?t:Math.round(t)}}class _S{constructor(t=0,n=1,r,s){if(this.canReturnFloat=()=>this.dtype==null||this.dtype==="float32",this.min=t,this.range=n-t,this.dtype=r,s==null&&(s=Math.random()),typeof s=="number"&&(s=s.toString()),!this.canReturnFloat()&&this.range<=1)throw new Error(`The difference between ${t} - ${n} <= 1 and dtype is not float`);this.random=df.alea(s)}convertValue(t){return this.canReturnFloat()?t:Math.round(t)}nextValue(){return this.convertValue(this.min+this.range*this.random())}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $S(e,t,n=1,r="float32",s){if(fn(e),n==null&&(n=1),r==null&&(r="float32"),r!=="float32"&&r!=="int32")throw new Error(`Unsupported data type ${r}`);const i=new xS(t,n,r,s),o=br(e,r);for(let a=0;a<o.values.length;a++)o.values[a]=i.nextValue();return o.toTensor()}const IS=P({randomGamma_:$S});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function AS(e,t=0,n=1,r,s){if(fn(e),r!=null&&r==="bool")throw new Error(`Unsupported data type ${r}`);const i=new mf(t,n,r,!1,s),o=br(e,r);for(let a=0;a<o.values.length;a++)o.values[a]=i.nextValue();return o.toTensor()}const W4=P({randomNormal_:AS});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function OS(e,t,n){if(t!=null&&t==="bool")throw new Error(`Unsupported data type ${t}`);return W4(e,0,1,t,n)}const CS=P({randomStandardNormal_:OS});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function DS(e,t=0,n=1,r="float32",s){fn(e);const i=br(e,r),o=new _S(t,n,null,s);for(let a=0;a<i.values.length;a++)i.values[a]=o.nextValue();return i.toTensor()}const gf=P({randomUniform_:DS});/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function FS(e,t,n,r){return gf(e,t,n,"int32",r)}const PS=P({randomUniformInt_:FS});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function pa(e,t,n=1,r="float32"){if(n===0)throw new Error("Cannot have a step of zero");const s={start:e,stop:t,step:n,dtype:r};return L.runKernel(c5,{},s)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function RS(e){const n={input:T(e,"input","real")};return L.runKernel(f5,n)}const ha=P({real_:RS});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function LS(e){const n={x:T(e,"x","reciprocal")};return L.runKernel(p5,n)}const zS=P({reciprocal_:LS});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function MS(e){const n={x:T(e,"x","relu")};return L.runKernel(h5,n)}const Ol=P({relu_:MS});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function jS(e){const n={x:T(e,"x","relu6")};return L.runKernel(y5,n)}const H4=P({relu6_:jS});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function BS(e,t){const r={x:T(e,"x","reverse")},s={dims:t};return L.runKernel(v5,r,s)}const qs=P({reverse_:BS});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function US(e){const t=T(e,"x","reverse");return A(t.rank===1,()=>`Error in reverse1D: x must be rank 1 but got rank ${t.rank}.`),qs(t,0)}const VS=P({reverse1d_:US});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function WS(e,t){const n=T(e,"x","reverse");return A(n.rank===2,()=>`Error in reverse2D: x must be rank 2 but got rank ${n.rank}.`),qs(n,t)}const HS=P({reverse2d_:WS});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function KS(e,t){const n=T(e,"x","reverse");return A(n.rank===3,()=>`Error in reverse3D: x must be rank 3 but got rank ${n.rank}.`),qs(n,t)}const GS=P({reverse3d_:KS});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qS(e,t){const n=T(e,"x","reverse");return A(n.rank===4,()=>`Error in reverse4D: x must be rank 4 but got rank ${n.rank}.`),qs(n,t)}const XS=P({reverse4d_:qS});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function YS(e){const n={x:T(e,"x","round")};return L.runKernel(w5,n)}const K4=P({round_:YS});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function QS(e){const n={x:T(e,"x","rsqrt","float32")};return L.runKernel(S5,n)}const JS=P({rsqrt_:QS});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ZS(e){const n={x:T(e,"x","selu")};return L.runKernel(E5,n)}const eb=P({selu_:ZS});function tb(e,t,n,r,s,i=[1,1],o="NHWC"){const a=T(e,"x","separableConv2d"),u=T(t,"depthwiseFilter","separableConv2d"),l=T(n,"pointwiseFilter","separableConv2d");let c=a,p=!1;if(a.rank===3&&(p=!0,c=q(a,[1,a.shape[0],a.shape[1],a.shape[2]])),o==="NCHW")throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");A(c.rank===4,()=>`Error in separableConv2d: input must be rank 4, but got rank ${c.rank}.`),A(u.rank===4,()=>`Error in separableConv2d: depthwise filter must be rank 4, but got rank ${u.rank}.`),A(l.rank===4,()=>`Error in separableConv2d: pointwise filter must be rank 4, but got rank ${u.rank}.`),A(l.shape[0]===1,()=>`Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got ${l.shape[0]}.`),A(l.shape[1]===1,()=>`Error in separableConv2d: the second dimension of pointwise filter must be 1, but got ${l.shape[1]}.`);const d=u.shape[2],w=u.shape[3];A(l.shape[2]===d*w,()=>`Error in separableConv2d: the third dimension of pointwise filter must be ${d*w}, but got ${l.shape[2]}.`);const b=sf(c,u,r,s,o,i),_=xl(b,l,1,"valid",o);return p?q(_,[_.shape[1],_.shape[2],_.shape[3]]):_}const nb=P({separableConv2d_:tb});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function rb(e,t){const n=T(e,"x","setdiff1d"),r=T(t,"y","setdiff1d");A(n.dtype===r.dtype,()=>`x and y should have the same dtype, but got x (${n.dtype}) and y (${r.dtype}).`),A(n.rank===1,()=>`x should be 1D tensor, but got x (${n.shape}).`),A(r.rank===1,()=>`y should be 1D tensor, but got y (${r.shape}).`);const s=await n.data(),i=await r.data(),o=new Set(i);let a=0;for(let c=0;c<s.length;c++)o.has(s[c])||a++;const u=new A1([a],n.dtype),l=new A1([a],"int32");for(let c=0,p=0;c<s.length;c++)o.has(s[c])||(u.values[p]=s[c],l.values[p]=c,p++);return[u.toTensor(),l.toTensor()]}const sb=rb;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ib(e){const n={x:T(e,"x","sign")};return L.runKernel(I5,n)}const ob=P({sign_:ib});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ab(e){const n={x:T(e,"x","sin","float32")};return L.runKernel(_5,n)}const ub=P({sin_:ab});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function lb(e){const n={x:T(e,"x","sinh")};return L.runKernel($5,n)}const cb=P({sinh_:lb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fb(e,t,n){const r=T(e,"x","slice1d");return A(r.rank===1,()=>`slice1d expects a rank-1 tensor, but got a rank-${r.rank} tensor`),ye(r,[t],[n])}const pb=P({slice1d_:fb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hb(e,t,n){const r=T(e,"x","slice2d");return A(r.rank===2,()=>`slice2d expects a rank-2 tensor, but got a rank-${r.rank} tensor`),ye(r,t,n)}const db=P({slice2d_:hb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function mb(e,t,n){const r=T(e,"x","slice3d");return A(r.rank===3,()=>`slice3d expects a rank-3 tensor, but got a rank-${r.rank} tensor`),ye(r,t,n)}const gb=P({slice3d_:mb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function yb(e,t,n){const r=T(e,"x","slice4d");return A(r.rank===4,()=>`slice4d expects a rank-4 tensor, but got a rank-${r.rank} tensor`),ye(r,t,n)}const vb=P({slice4d_:yb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function wb(e,t=-1){const n=T(e,"logits","softmax","float32");if(t===-1&&(t=n.rank-1),t!==n.rank-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${n.rank} and dim was ${t}`);const r={logits:n},s={dim:t};return L.runKernel(R5,r,s)}const Sb=P({softmax_:wb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function bb(e){A(e.dtype==="complex64",()=>`The dtype for tf.spectral.fft() must be complex64 but got ${e.dtype}.`);const t={input:e};return L.runKernel(p6,t)}const yf=P({fft_:bb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Nb(e){A(e.dtype==="complex64",()=>`The dtype for tf.spectral.ifft() must be complex64 but got ${e.dtype}.`);const t={input:e};return L.runKernel(N6,t)}const rl=P({ifft_:Nb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function kb(e){const t=e.shape[e.shape.length-1],n=e.size/t;let r;if(t<=2){const s=q(e,[n,t]);r=rl(s)}else{const s=[n,2*(t-1)],i=q(ha(e),[n,t]),o=q(Al(e),[n,t]),a=qs(ye(i,[0,1],[n,t-2]),1),u=te(qs(ye(o,[0,1],[n,t-2]),1),$e(-1)),l=wt([i,a],1),c=wt([o,u],1),p=q(is(l,c),[s[0],s[1]]);r=rl(p)}if(r=ha(r),e.rank===3&&e.shape[0]!==0){const s=r,i=e.shape[0];r=q(r,[i,r.shape[0]/i,r.shape[1]]),s.dispose()}return r}const G4=P({irfft_:kb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Tb(e,t,n=0){const s={x:T(e,"x","split")},i={numOrSizeSplits:t,axis:n};return L.runKernel(P5,s,i)}const da=P({split_:Tb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Eb(e,t){A(e.dtype==="float32",()=>`The dtype for rfft() must be real value but got ${e.dtype}`);let n=e.shape[e.shape.length-1];const r=e.size/n;let s;if(t!=null&&t<n){const b=e.shape.map(_=>0),E=e.shape.map(_=>_);E[e.shape.length-1]=t,s=ye(e,b,E),n=t}else if(t!=null&&t>n){const b=e.shape.map(E=>E);b[e.shape.length-1]=t-n,s=wt([e,Ki(b)],e.shape.length-1),n=t}else s=e;const i=an(s),o=q(is(s,i),[r,n]),a=yf(o),u=Math.floor(n/2)+1,l=ha(a),c=Al(a),p=da(l,[u,n-u],l.shape.length-1),d=da(c,[u,n-u],c.shape.length-1),w=s.shape.slice();return w[s.shape.length-1]=u,q(is(p[0],d[0]),w)}const vf=P({rfft_:Eb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xb(e,t){let n=T(e,"a","squaredDifference"),r=T(t,"b","squaredDifference");[n,r]=Qe(n,r),ht(n.shape,r.shape);const s={a:n,b:r},i={};return L.runKernel(U5,s,i)}const q4=P({squaredDifference_:xb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _b(e,t){const n=T(e,"x","squeeze","string_or_numeric");return q(n,ry(n.shape,t).newShape)}const ct=P({squeeze_:_b});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $b(e,t=0){const n=Qu(e,"tensors","stack","string_or_numeric");A(n.length>=1,()=>"Pass at least one tensor to tf.stack"),n.length>0&&A(t<=n[0].rank,()=>"Axis must be <= rank of the tensor");const r=n,s={axis:t};return L.runKernel(n5,r,s)}const Er=P({stack_:$b});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ib(e,t=0){const r={x:T(e,"x","step")},s={alpha:t};return L.runKernel(r7,r,s)}const X4=P({step_:Ib});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ab(e,t,n,r,s=0,i=0,o=0,a=0,u=0){const c={x:T(e,"x","stridedSlice","string_or_numeric")},p={begin:t,end:n,strides:r,beginMask:s,endMask:i,ellipsisMask:o,newAxisMask:a,shrinkAxisMask:u};return L.runKernel(W5,c,p)}const Ob=P({stridedSlice_:Ab});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Cb(e){const n={x:T(e,"x","tan","float32")};return L.runKernel(X5,n)}const Db=P({tan_:Cb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Tt(e,t){Yi(e);const n=fs(e,t);if(n.length!==1)throw new Error("tensor1d() requires values to be a flat/TypedArray");return ps(e,null,n,t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ns(e,t,n){if(Yi(e),t!=null&&t.length!==2)throw new Error("tensor2d() requires shape to have two numbers");const r=fs(e,n);if(r.length!==2&&r.length!==1)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(r.length===1&&t==null)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return ps(e,t,r,n)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Y4(e,t,n){if(Yi(e),t!=null&&t.length!==3)throw new Error("tensor3d() requires shape to have three numbers");const r=fs(e,n);if(r.length!==3&&r.length!==1)throw new Error("tensor3d() requires values to be number[][][] or flat/TypedArray");if(r.length===1&&t==null)throw new Error("tensor3d() requires shape to be provided when `values` are a flat array");return ps(e,t,r,n)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Fb(e,t,n){if(Yi(e),t!=null&&t.length!==4)throw new Error("tensor4d() requires shape to have four numbers");const r=fs(e,n);if(r.length!==4&&r.length!==1)throw new Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");if(r.length===1&&t==null)throw new Error("tensor4d() requires shape to be provided when `values` are a flat array");return ps(e,t,r,n)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Pb(e,t,n){if(Yi(e),t!=null&&t.length!==5)throw new Error("tensor5d() requires shape to have five numbers");const r=fs(e,n);if(r.length!==5&&r.length!==1)throw new Error("tensor5d() requires values to be number[][][][][] or flat/TypedArray");if(r.length===1&&t==null)throw new Error("tensor5d() requires shape to be provided when `values` are a flat array");return ps(e,t,r,n)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Rb(e,t,n){if(Yi(e),t!=null&&t.length!==6)throw new Error("tensor6d() requires shape to have six numbers");const r=fs(e,n);if(r.length!==6&&r.length!==1)throw new Error("tensor6d() requires values to be number[][][][][][] or flat/TypedArray");if(r.length===1&&t==null)throw new Error("tensor6d() requires shape to be provided when `values` are a flat array");return t=t||r,ps(e,t,r,n)}function Lb(e,t,n){const r=t.rank>1?t.shape[t.rank-1]:1,s=t.rank>1?t.rank-1:1,i=`Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: ${n.shape}, indices.shape: ${t.shape}, shape: ${e}, sliceDim: ${r}, and batchDim: ${s}.`;if(n.rank<s)throw new Error(i+` update.rank < ${s}. `);if(e.length<r+(n.rank-s))throw new Error(i+` Output shape length < ${r+(n.rank-s)}`);if(n.rank!==s+e.length-r)throw new Error(i+` update.rank != ${s+e.length-r}`);for(let o=0;o<s;++o)if(n.shape[o]!==t.shape[o])throw new Error(i+` updates.shape[${o}] (${n.shape[o]}) != indices.shape[${o}] (${t.shape[o]}).`);for(let o=0;o<n.rank-s;++o)if(n.shape[o+s]!==e[o+r])throw new Error(i+` updates.shape[${o+s}] (${n.shape[o+s]}) != shape[${o+s}] (${e[o+s]})`)}function Q4(e,t,n){if(t.rank<1)throw new Error(`tf.scatterND() expects the indices to be rank 1 or higher, but the rank was ${t.rank}.`);if(e.rank<1)throw new Error(`tf.scatterND() expects the updates to be rank 1 or higher, but the rank was ${e.rank}.`);if(t.dtype!=="int32")throw new Error(`The dtype of 'indices' should be int32, but got dtype: ${t.dtype}`);if(n.length<1)throw new Error(`Output rank must be greater or equal to 1, but got shape: ${n}`);if(n.length===0){if(t.size===0)throw new Error(`Indices specified for empty output. indices shape: ${t.shape}`);if(e.size===0)throw new Error(`Updates specified for empty output. updates shape: ${e.shape}`)}Lb(n,t,e)}/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zb(e,t,n){const r=T(e,"tensor","tensorScatterupdate"),s=T(t,"indices","tensorScatterupdate","int32"),i=T(n,"updates","tensorScatterupdate");if(Q4(i,s,r.shape),r.dtype!==i.dtype)throw new Error(`tensor and updates must have the same dtype, instead they are ${r.dtype} and ${i.dtype}.`);const o={tensor:r,indices:s,updates:i},a={};return L.runKernel(N5,o,a)}const Mb=P({tensorScatterUpdate_:zb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function jb(e,t=1,n=!0){const r=T(e,"x","topk");if(r.rank===0)throw new Error("topk() expects the input to be of rank 1 or higher");const s=r.shape[r.shape.length-1];if(t<0)throw new Error(`'k' passed to topk() must be >= 0 but got ${t}`);if(t>s)throw new Error(`'k' passed to topk() must be <= the last dimension (${s}) but got ${t}`);const i={x:r},o={k:t,sorted:n},[a,u]=L.runKernel(Q5,i,o);return{values:a,indices:u}}const Bb=P({topk_:jb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ub(e,t=0,n=1,r,s){if(fn(e),r!=null&&r==="bool")throw new Error("Unsupported data type $ { dtype }");const i=new mf(t,n,r,!0,s),o=br(e,r);for(let a=0;a<o.values.length;a++)o.values[a]=i.nextValue();return o.toTensor()}const Vb=P({truncatedNormal_:Ub});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Wb(e,t=0){const n=T(e,"x","unique","string_or_numeric");A(n.rank>0,()=>"The input tensor must be at least 1D");const r={x:n},s={axis:t},[i,o]=L.runKernel(Z5,r,s);return{values:i,indices:o}}const Hb=P({unique_:Wb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Kb(e,t,n){const r=T(e,"x","unsortedSegmentSum"),s=T(t,"segmentIds","unsortedSegmentSum","int32");A(aa(n),()=>"numSegments must be of dtype int");const i={x:r,segmentIds:s},o={numSegments:n};return L.runKernel(t7,i,o)}const Gb=P({unsortedSegmentSum_:Kb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qb(e,t=0){const n=T(e,"x","unstack","string_or_numeric");A(t>=-n.shape.length&&t<n.shape.length,()=>`Axis = ${t} is not in [-${n.shape.length}, ${n.shape.length})`);const r={value:n},s={axis:t};return L.runKernel(e7,r,s)}const ti=P({unstack_:qb});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Xb(e,t){return af(e,t,"right")}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Yb(e,t=!0,n,r){return L.makeVariable(e,t,n,r)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Qb(e,t){const n=[];for(let i=0;i<t.length;i++)t[i]&&n.push(i);const r=br(e,"int32"),s=br([n.length,e.length],"int32");for(let i=0;i<n.length;i++){const o=r.indexToLoc(n[i]),a=i*e.length;s.values.set(o,a)}return s.toTensor()}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function Jb(e){const t=T(e,"condition","whereAsync","bool"),n=await t.data(),r=Qb(t.shape,n);return e!==t&&t.dispose(),r}const J4=Jb;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function Zb(e,t,n){const r=T(e,"tensor","boolMask"),s=T(t,"mask","boolMask","bool"),i=n??0,o=s.rank,a=r.shape;A(o>0,()=>"mask cannot be scalar"),_n(a.slice(i,i+o),s.shape,"mask's shape must match the first K dimensions of tensor's shape,");let u=1;for(let E=i;E<i+o;E++)u*=a[E];const l=a.slice(0,i).concat([u],a.slice(i+o)),c=q(r,l),p=q(s,[-1]),d=await J4(p),w=ct(d,[1]),b=A4(c,w,i);return e!==r&&r.dispose(),t!==s&&s.dispose(),w.dispose(),c.dispose(),p.dispose(),d.dispose(),b}const eN=Zb;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function tN(e,t,n){const r=T(e,"x","transpose");if(t==null&&(t=r.shape.map((o,a)=>a).reverse()),A(r.rank===t.length,()=>`Error in transpose: rank of input ${r.rank} must match length of perm ${t}.`),t.forEach(o=>{A(o>=0&&o<r.rank,()=>`All entries in 'perm' must be between 0 and ${r.rank-1} but got ${t}`)}),r.rank<=1)return r.clone();const s={x:r},i={perm:t};return r.dtype==="complex64"?Se(()=>{let o=ha(r),a=Al(r);return o=L.runKernel(gc,{x:o},i),a=L.runKernel(gc,{x:a},i),n&&(a=nr(a)),is(o,a)}):L.runKernel(gc,s,i)}const V1=P({transpose_:tN});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function nN(e,t,n,r,s=!0){const i=T(e,"v","movingAverage"),o=T(t,"x","movingAverage"),a=T(n,"decay","movingAverage");S7(i,o),A(Sr(i.shape,o.shape),()=>"Shape mismatch in v and x");const u=$e(1),l=ve(u,a);let c=te(ve(o,i),l);if(s){A(r!=null,()=>"When using zeroDebias: true, step is required.");const p=T(r,"step","movingAverage");c=ke(c,ve(u,ca(a,p)))}return le(i,c)}const rN=P({movingAverage_:nN});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function sN(e,t,n){fn(n);const r=T(e,"indices","scatterND","int32"),s=T(t,"updates","scatterND");Q4(s,r,n);const i={indices:r,updates:s},o={shape:n};return L.runKernel(b5,i,o)}const iN=P({scatterND_:sN});function oN(e,t,n,r){if(e.dtype!=="int32")throw new Error(`tf.sparseToDense() expects the indices to be int32 type, but the dtype was ${e.dtype}.`);if(e.rank>2)throw new Error(`sparseIndices should be a scalar, vector, or matrix, but got shape ${e.shape}.`);const s=e.rank>0?e.shape[0]:1,i=e.rank>1?e.shape[1]:1;if(n.length!==i)throw new Error(`outputShape has incorrect number of elements:, ${n.length}, should be: ${i}.`);const o=t.size;if(!(t.rank===0||t.rank===1&&o===s))throw new Error(`sparseValues has incorrect shape ${t.shape}, should be [] or [${s}]`);if(t.dtype!==r.dtype)throw new Error("sparseValues.dtype must match defaultValues.dtype")}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function aN(e,t,n,r=0){fn(n);const s=T(e,"sparseIndices","sparseToDense","int32"),i=T(t,"sparseValues","sparseToDense","string_or_numeric"),o=T(r,"defaultValue","sparseToDense",i.dtype);oN(s,i,n,o);const a={sparseIndices:s,sparseValues:i,defaultValue:o},u={outputShape:n};return L.runKernel(B5,a,u)}const uN=P({sparseToDense_:aN});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function lN(e,t){const n=T(t,"indices","gatherND","int32"),s={params:T(e,"x","gatherND","string_or_numeric"),indices:n};return L.runKernel(w6,s)}const cN=P({gatherND_:lN});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fN(e,t){if(t==null)return e.shape.slice();if(Sr(e.shape,t))return t;if(e.shape.length===t.length){const n=[];for(let r=0;r<e.shape.length;r++)t[r]==null&&e.shape[r]!=null?n.push(e.shape[r]):n.push(t[r]);return n}return t}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function pN(e,t,n,r){const s=T(e,"x","dropout");if(A(s.dtype==="float32",()=>`x has to be a floating point tensor since it's going to be scaled, but got a ${s.dtype} tensor instead.`),A(t>=0&&t<1,()=>`rate must be a float in the range [0, 1), but got ${t}.`),t===0)return e instanceof qe?s.clone():s;const i=fN(s,n),o=1-t,a=ke(I4(le(gf(i,0,1,"float32",r),o)),o);return te(s,a)}const hN=P({dropout_:pN});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Z4(e){return Math.floor(Math.pow(2,Math.ceil(Math.log(e)/Math.log(2))))}function wf(e,t,n){const r=1-e%2,s=new Float32Array(e);for(let i=0;i<e;++i){const o=2*Math.PI*i/(e+r-1);s[i]=t-n*Math.cos(o)}return Tt(s,"float32")}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function dN(e,t,n=1){const r=T(e,"predictions","inTopK"),s=T(t,"targets","inTopK");A(r.rank>1,()=>`inTopK() expects the predictions to be of rank 2 or higher, but got ${r.rank}`),A(r.rank-1===s.rank,()=>`predictions rank should be 1 larger than targets rank, but got predictions rank ${r.rank} and targets rank ${s.rank}`),_n(r.shape.slice(0,r.shape.length-1),s.shape,"predictions's shape should be align with the targets' shape, except the last dimension.");const i=r.shape[r.shape.length-1];A(n>0&&n<=i,()=>`'k' passed to inTopK() must be > 0 && <= the predictions last dimension (${i}), but got ${n}`);const o=await r.data(),a=await s.data(),[u,l]=[o.length/i,i],c=sy("bool",u);for(let p=0;p<u;p++){const d=p*l,w=o.subarray(d,d+l),b=[];for(let E=0;E<w.length;E++)b.push({value:w[E],index:E});b.sort((E,_)=>_.value-E.value),c[p]=0;for(let E=0;E<n;E++)if(b[E].index===a[p]){c[p]=1;break}}return e!==r&&r.dispose(),t!==s&&s.dispose(),tr(c,s.shape,"bool")}const mN=dN;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gN(e,t,n,r,s,i="NHWC",o){let a=e;e.rank===3&&(a=q(e,[1,e.shape[0],e.shape[1],e.shape[2]]));let u=t;u.rank===3&&(u=q(t,[1,t.shape[0],t.shape[1],t.shape[2]])),A(a.rank===4,()=>`Error in conv2dDerFilter: input must be rank 4, but got shape ${a.shape}.`),A(u.rank===4,()=>`Error in conv2dDerFilter: dy must be rank 4, but got shape ${u.shape}.`),A(n.length===4,()=>`Error in conv2dDerFilter: filterShape must be length 4, but got ${n}.`);const l=i==="NHWC"?a.shape[3]:a.shape[1],c=i==="NHWC"?u.shape[3]:u.shape[1];A(l===n[2],()=>`Error in conv2dDerFilter: depth of input ${l}) must match input depth in filter (${n[2]}.`),A(c===n[3],()=>`Error in conv2dDerFilter: depth of dy (${c}) must match output depth for filter (${n[3]}).`),Bn("conv2dDerFilter",s,o);const p={x:a,dy:u},d={strides:r,pad:s,dataFormat:i,dimRoundingMode:o,filterShape:n};return L.runKernel(Uy,p,d)}const yN=P({conv2DBackpropFilter_:gN});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Sf(e,t,n){if(n==null||n==="linear")return e;if(n==="relu")return te(e,X4(t));throw new Error(`Cannot compute gradient for fused activation ${n}.`)}function bf(e,t){let n=t;const r=nv(e.shape,t.shape);return r.length>0&&(n=ze(n,r)),q(n,e.shape)}function Nf(e,t,n,r){if(t==="linear")return e;if(t==="relu")return Ol(e);if(t==="elu")return x4(e);if(t==="relu6")return H4(e);if(t==="prelu")return U4(e,n);if(t==="leakyrelu")return C4(e,r);if(t==="sigmoid")return zs(e);throw new Error(`Unknown fused activation ${t}.`)}const kf=(e,t)=>!(e>0)||t==="linear";/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function vN({x:e,filter:t,strides:n,pad:r,dataFormat:s="NHWC",dilations:i=[1,1],dimRoundingMode:o,bias:a,activation:u="linear",preluActivationWeights:l,leakyreluAlpha:c}){if(u=u||"linear",kf(L.state.gradientDepth,u)===!1){A(s==="NHWC",()=>`Error in fused conv2d: got dataFormat of ${s} but only NHWC is currently supported for the case of gradient depth is 0 and the activation is not linear.`);let M=xl(e,t,n,r,s,i,o);return a!=null&&(M=le(M,a)),Nf(M,u,l,c)}const p=T(e,"x","conv2d","float32"),d=T(t,"filter","conv2d","float32");let w=p,b=!1;p.rank===3&&(b=!0,w=q(p,[1,p.shape[0],p.shape[1],p.shape[2]])),A(w.rank===4,()=>`Error in fused conv2d: input must be rank 4, but got rank ${w.rank}.`),A(d.rank===4,()=>`Error in fused conv2d: filter must be rank 4, but got rank ${d.rank}.`),Bn("fused conv2d",r,o);const E=s==="NHWC"?w.shape[3]:w.shape[1];A(d.shape[2]===E,()=>`Error in conv2d: depth of input (${E}) must match input depth for filter ${d.shape[2]}.`),A(hs(n,i),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${n} and dilations '${i}'`);const _=rf(w.shape,d.shape,n,i,r,o);let N;a!=null&&(N=T(a,"bias","fused conv2d"),[N]=Qe(N,p),s==="NHWC"?ht(_.outShape,N.shape):(A(N.shape.length<=1,()=>`Error in fused conv2d: only supports scalar or 1-D Tensor bias for NCHW format but got the bias of rank-${N.shape.length}.`),A(N.shape.length===0||N.shape[0]===_.outChannels||N.shape[0]===1,()=>`Error in fused conv2d: bias shape (${N.shape}) is not compatible with the number of output channels (${_.outChannels})`)));let x;if(l!=null){const M=l.shape;if(A(M.length<=1||M.length===3,()=>`Error in fused conv2d: only supports scalar, 1-D Tensor or 3-D Tensor PReLU activation weights but got a tensor of rank-${M.length}.`),M.length===1)A(M[0]===1||M[0]===_.outChannels,()=>`Error in fused conv2d: PReLU activation weights (${M}) is not compatible with the number of output channels (${_.outChannels}).`);else if(M.length===3)try{ht(M,_.outShape)}catch{const W=`Error in fused conv2d: PReLU activation weights (${M}) is not compatible with the output shape of the conv2d (${_.outShape}).`;throw Error(W)}x=T(l,"prelu weights","fused conv2d")}const $=(M,V)=>{A(s==="NHWC",()=>`Error in gradient of fused conv2D: got dataFormat of ${s} but only NHWC is currently supported.`);const[W,X,Q,ue]=V,Ne=Sf(M,Q,u);A(Zu(i),()=>`Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${i}'`);const ce=T4(X.shape,Ne,W,n,r),Ce=yN(X,Ne,W.shape,n,r),Je=[ce,Ce];if(ue!=null){const rt=bf(ue,Ne);Je.push(rt)}return Je},F={x:w,filter:d,bias:N,preluActivationWeights:x},z={strides:n,pad:r,dataFormat:s,dilations:i,dimRoundingMode:o,activation:u,leakyreluAlpha:c};return a==null?Tr((V,W,X)=>{let Q=L.runKernel(U3,F,z);return X([W,V,Q]),b&&(Q=q(Q,[Q.shape[1],Q.shape[2],Q.shape[3]])),{value:Q,gradFunc:$}})(w,d):Tr((V,W,X,Q)=>{let ue=L.runKernel(U3,F,z);return Q([W,V,ue,X]),b&&(ue=q(ue,[ue.shape[1],ue.shape[2],ue.shape[3]])),{value:ue,gradFunc:$}})(w,d,N)}const wN=P({fusedConv2d_:vN});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function SN(e,t,n,r,s,i=[1,1],o){let a=e;e.rank===3&&(a=q(e,[1,e.shape[0],e.shape[1],e.shape[2]]));let u=t;u.rank===3&&(u=q(t,[1,t.shape[0],t.shape[1],t.shape[2]]));const l={x:a,dy:u},c={strides:r,pad:s,dimRoundingMode:o,dilations:i,filterShape:n};return L.runKernel(e6,l,c)}const bN=P({depthwiseConv2dNativeBackpropFilter_:SN});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function NN(e,t,n,r,s,i=[1,1],o){let a=t,u=!1;t.rank===3&&(u=!0,a=q(t,[1,t.shape[0],t.shape[1],t.shape[2]]));const l={dy:a,filter:n},c={strides:r,pad:s,dimRoundingMode:o,dilations:i,inputShape:e},p=L.runKernel(t6,l,c);return u?q(p,[p.shape[1],p.shape[2],p.shape[3]]):p}const kN=P({depthwiseConv2dNativeBackpropInput_:NN});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function TN({x:e,filter:t,strides:n,pad:r,dataFormat:s="NHWC",dilations:i=[1,1],dimRoundingMode:o,bias:a,activation:u="linear",preluActivationWeights:l,leakyreluAlpha:c}){if(kf(L.state.gradientDepth,u)===!1){let z=sf(e,t,n,r,s,i,o);return a!=null&&(z=le(z,a)),Nf(z,u,l,c)}const p=T(e,"x","depthwiseConv2d","float32"),d=T(t,"filter","depthwiseConv2d","float32");let w=p,b=!1;p.rank===3&&(b=!0,w=q(p,[1,p.shape[0],p.shape[1],p.shape[2]])),A(w.rank===4,()=>`Error in fused depthwiseConv2d: input must be rank 4, but got rank ${w.rank}.`),A(d.rank===4,()=>`Error in fused depthwiseConv2d: filter must be rank 4, but got rank ${d.rank}.`),A(w.shape[3]===d.shape[2],()=>`Error in fused depthwiseConv2d: number of input channels (${w.shape[3]}) must match the inChannels dimension in filter ${d.shape[2]}.`),i==null&&(i=[1,1]),A(hs(n,i),()=>`Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides ${n} and dilations '${i}'`),Bn("fused depthwiseConv2d",r,o);const E=rf(w.shape,d.shape,n,i,r,o,!0);let _;a!=null&&(_=T(a,"bias","fused conv2d"),[_]=Qe(_,p),ht(E.outShape,_.shape));let N;l!=null&&(N=T(l,"prelu weights","fused depthwiseConv2d"));const x=(z,M)=>{A(Zu(i),()=>`Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '${i}'`);const[V,W,X,Q]=M,ue=Sf(z,X,u),Ne=kN(W.shape,ue,V,n,r,i,o),ce=bN(W,ue,V.shape,n,r,i,o);if(Q!=null){const Ce=bf(_,ue);return[Ne,ce,Ce]}return[Ne,ce]},$={x:w,filter:d,bias:_,preluActivationWeights:N},F={strides:n,pad:r,dataFormat:s,dilations:i,dimRoundingMode:o,activation:u,leakyreluAlpha:c};return a==null?Tr((M,V,W)=>{let X=L.runKernel(V3,$,F);return W([V,M,X]),b&&(X=q(X,[X.shape[1],X.shape[2],X.shape[3]])),{value:X,gradFunc:x}})(w,d):Tr((M,V,W,X)=>{let Q=L.runKernel(V3,$,F);return X([V,M,Q,W]),b&&(Q=q(Q,[Q.shape[1],Q.shape[2],Q.shape[3]])),{value:Q,gradFunc:x}})(w,d,_)}const EN=P({fusedDepthwiseConv2d_:TN});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xN({a:e,b:t,transposeA:n=!1,transposeB:r=!1,bias:s,activation:i="linear",preluActivationWeights:o,leakyreluAlpha:a=.2}){if(kf(L.state.gradientDepth,i)===!1){let ue=De(e,t,n,r);return s!=null&&(ue=le(ue,s)),Nf(ue,i,o,a)}let u=T(e,"a","fused matMul"),l=T(t,"b","fused matMul");[u,l]=Qe(u,l);const c=n?u.shape[u.rank-2]:u.shape[u.rank-1],p=r?l.shape[l.rank-1]:l.shape[l.rank-2],d=n?u.shape[u.rank-1]:u.shape[u.rank-2],w=r?l.shape[l.rank-2]:l.shape[l.rank-1],b=u.shape.slice(0,-2),E=l.shape.slice(0,-2),_=ot(b),N=ot(E);A(c===p,()=>`Error in fused matMul: inner shapes (${c}) and (${p}) of Tensors with shapes ${u.shape} and ${l.shape} and transposeA=${n} and transposeB=${r} must match.`);const $=ht(u.shape.slice(0,-2),l.shape.slice(0,-2)).concat([d,w]),F=n?q(u,[_,c,d]):q(u,[_,d,c]),z=r?q(l,[N,w,p]):q(l,[N,p,w]);let M;s!=null&&(M=T(s,"bias","fused matMul"),[M]=Qe(M,u),ht($,M.shape));let V;o!=null&&(V=T(o,"prelu weights","fused matMul"));const W=(ue,Ne)=>{const[ce,Ce,Je,rt]=Ne,Ze=Sf(q(ue,Je.shape),Je,i);let re,fe;if(!n&&!r?(re=De(Ze,Ce,!1,!0),fe=De(ce,Ze,!0,!1)):!n&&r?(re=De(Ze,Ce,!1,!1),fe=De(Ze,ce,!0,!1)):n&&!r?(re=De(Ce,Ze,!1,!0),fe=De(ce,Ze,!1,!1)):(re=De(Ce,Ze,!0,!0),fe=De(Ze,ce,!0,!0)),s!=null){const he=bf(rt,Ze);return[re,fe,he]}else return[re,fe]},X={a:F,b:z,bias:M,preluActivationWeights:V},Q={transposeA:n,transposeB:r,activation:i,leakyreluAlpha:a};return s==null?Tr((Ne,ce,Ce)=>{const Je=L.runKernel(B3,X,Q);return Ce([Ne,ce,Je]),{value:q(Je,$),gradFunc:W}})(F,z):Tr((Ne,ce,Ce,Je)=>{const rt=L.runKernel(B3,X,Q);return Je([Ne,ce,rt,Ce]),{value:q(rt,$),gradFunc:W}})(F,z,M)}const _N=P({fusedMatMul_:xN});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const $N=Object.freeze(Object.defineProperty({__proto__:null,conv2d:wN,depthwiseConv2d:EN,matMul:_N},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function IN(e){return wf(e,.54,.46)}const AN=P({hammingWindow_:IN});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ON(e){return wf(e,.5,.5)}const e0=P({hannWindow_:ON});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function CN(e,t,n,r=!1,s=0){let i=0;const o=[];for(;i+t<=e.size;)o.push(ye(e,i,t)),i+=n;if(r)for(;i<e.size;){const a=i+t-e.size,u=wt([ye(e,i,t-a),ba([a],s)]);o.push(u),i+=n}return o.length===0?ns([],[0,t]):q(wt(o),[o.length,t])}const t0=P({frame_:CN});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function DN(e,t,n,r,s=e0){r==null&&(r=Z4(t));const i=t0(e,t,n),o=te(i,s(t));return vf(o,r)}const FN=P({stft_:DN});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function PN(e,t,n,r,s="bilinear",i=0){const o=T(e,"image","cropAndResize"),a=T(t,"boxes","cropAndResize","float32"),u=T(n,"boxInd","cropAndResize","int32"),l=a.shape[0];A(o.rank===4,()=>`Error in cropAndResize: image must be rank 4,but got rank ${o.rank}.`),A(a.rank===2&&a.shape[1]===4,()=>`Error in cropAndResize: boxes must be have size [${l},4] but had shape ${a.shape}.`),A(u.rank===1&&u.shape[0]===l,()=>`Error in cropAndResize: boxInd must be have size [${l}] but had shape ${a.shape}.`),A(r.length===2,()=>`Error in cropAndResize: cropSize must be of length 2, but got length ${r.length}.`),A(r[0]>=1&&r[1]>=1,()=>`cropSize must be atleast [1,1], but was ${r}`),A(s==="bilinear"||s==="nearest",()=>`method must be bilinear or nearest, but was ${s}`);const c={image:o,boxes:a,boxInd:u},p={method:s,extrapolationValue:i,cropSize:r};return L.runKernel(Yy,c,p)}const RN=P({cropAndResize_:PN});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function LN(e){const t=T(e,"image","flipLeftRight","float32");A(t.rank===4,()=>`Error in flipLeftRight: image must be rank 4,but got rank ${t.rank}.`);const n={image:t};return L.runKernel(d6,n,{})}const zN=P({flipLeftRight_:LN});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function MN(e){const t=T(e,"image","grayscaleToRGB"),n=t.rank-1,r=t.shape[n];A(t.rank>=2,()=>`Error in grayscaleToRGB: images must be at least rank 2, but got rank ${t.rank}.`),A(r===1,()=>`Error in grayscaleToRGB: last dimension of a grayscale image should be size 1, but got size ${r}.`);const s=new Array(t.rank);return s.fill(1,0,n),s[n]=3,Vo(t,s)}const jN=P({grayscaleToRGB_:MN});/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function BN(e){const t=T(e,"image","RGBToGrayscale"),n=t.rank-1,r=t.shape[n];A(t.rank>=2,()=>`Error in RGBToGrayscale: images must be at least rank 2, but got rank ${t.rank}.`),A(r===3,()=>`Error in RGBToGrayscale: last dimension of an RGB image should be size 3, but got size ${r}.`);const s=t.dtype,i=je(t,"float32"),o=Tt([.2989,.587,.114]);let a;switch(t.rank){case 2:a=gi("ij,j->i",i,o);break;case 3:a=gi("ijk,k->ij",i,o);break;case 4:a=gi("ijkl,l->ijk",i,o);break;case 5:a=gi("ijklm,m->ijkl",i,o);break;case 6:a=gi("ijklmn,n->ijklm",i,o);break;default:throw new Error("Not a valid tensor rank.")}return a=bn(a,-1),je(a,s)}const UN=P({rgbToGrayscale_:BN});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function VN(e,t,n=0,r=.5){const s=T(e,"image","rotateWithOffset","float32");A(s.rank===4,()=>`Error in rotateWithOffset: image must be rank 4,but got rank ${s.rank}.`);const i={image:s},o={radians:t,fillValue:n,center:r};return L.runKernel(s7,i,o)}const WN=P({rotateWithOffset_:VN});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Qi(e,t,n,r,s,i){r==null&&(r=.5),s==null&&(s=Number.NEGATIVE_INFINITY),i==null&&(i=0);const o=e.shape[0];return n=Math.min(n,o),A(0<=r&&r<=1,()=>`iouThreshold must be in [0, 1], but was '${r}'`),A(e.rank===2,()=>`boxes must be a 2D tensor, but was of rank '${e.rank}'`),A(e.shape[1]===4,()=>`boxes must have 4 columns, but 2nd dimension was ${e.shape[1]}`),A(t.rank===1,()=>"scores must be a 1D tensor"),A(t.shape[0]===o,()=>`scores has incompatible shape with boxes. Expected ${o}, but was ${t.shape[0]}`),A(0<=i&&i<=1,()=>`softNmsSigma must be in [0, 1], but was '${i}'`),{maxOutputSize:n,iouThreshold:r,scoreThreshold:s,softNmsSigma:i}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function HN(e,t,n,r=.5,s=Number.NEGATIVE_INFINITY){const i=T(e,"boxes","nonMaxSuppression","float32"),o=T(t,"scores","nonMaxSuppression","float32"),a=Qi(i,o,n,r,s);n=a.maxOutputSize,r=a.iouThreshold,s=a.scoreThreshold;const u={maxOutputSize:n,iouThreshold:r,scoreThreshold:s};return L.runKernel(Q6,{boxes:i,scores:o},u)}const KN=P({nonMaxSuppression_:HN});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function GN(e,t,n){const r=qN(e,t,n),s=r<0?-(r+1):r;e.splice(s,0,t)}function qN(e,t,n){return YN(e,t,n||XN)}function XN(e,t){return e>t?1:e<t?-1:0}function YN(e,t,n){let r=0,s=e.length,i=0,o=!1;for(;r<s;){i=r+(s-r>>>1);const a=n(t,e[i]);a>0?r=i+1:(s=i,o=!a)}return o?r:-r-1}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function QN(e,t,n,r,s){return Tf(e,t,n,r,s,0)}function JN(e,t,n,r,s,i){return Tf(e,t,n,r,s,0,!1,i,!0)}function ZN(e,t,n,r,s,i){return Tf(e,t,n,r,s,i,!0)}function Tf(e,t,n,r,s,i,o=!1,a=!1,u=!1){const l=[];for(let _=0;_<t.length;_++)t[_]>s&&l.push({score:t[_],boxIndex:_,suppressBeginIndex:0});l.sort(ep);const c=i>0?-.5/i:0,p=[],d=[];for(;p.length<n&&l.length>0;){const _=l.pop(),{score:N,boxIndex:x,suppressBeginIndex:$}=_;if(N<s)break;let F=!1;for(let z=p.length-1;z>=$;--z){const M=ek(e,x,p[z]);if(M>=r){F=!0;break}if(_.score=_.score*tk(r,c,M),_.score<=s)break}_.suppressBeginIndex=p.length,F||(_.score===N?(p.push(x),d.push(_.score)):_.score>s&&GN(l,_,ep))}const w=p.length,b=n-w;a&&b>0&&(p.push(...new Array(b).fill(0)),d.push(...new Array(b).fill(0)));const E={selectedIndices:p};return o&&(E.selectedScores=d),u&&(E.validOutputs=w),E}function ek(e,t,n){const r=e.subarray(t*4,t*4+4),s=e.subarray(n*4,n*4+4),i=Math.min(r[0],r[2]),o=Math.min(r[1],r[3]),a=Math.max(r[0],r[2]),u=Math.max(r[1],r[3]),l=Math.min(s[0],s[2]),c=Math.min(s[1],s[3]),p=Math.max(s[0],s[2]),d=Math.max(s[1],s[3]),w=(a-i)*(u-o),b=(p-l)*(d-c);if(w<=0||b<=0)return 0;const E=Math.max(i,l),_=Math.max(o,c),N=Math.min(a,p),x=Math.min(u,d),$=Math.max(N-E,0)*Math.max(x-_,0);return $/(w+b-$)}function tk(e,t,n){const r=Math.exp(t*n*n);return n<=e?r:0}function ep(e,t){return e.score-t.score||e.score===t.score&&t.boxIndex-e.boxIndex}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function nk(e,t,n,r=.5,s=Number.NEGATIVE_INFINITY){const i=T(e,"boxes","nonMaxSuppressionAsync"),o=T(t,"scores","nonMaxSuppressionAsync"),a=Qi(i,o,n,r,s);n=a.maxOutputSize,r=a.iouThreshold,s=a.scoreThreshold;const u=await Promise.all([i.data(),o.data()]),l=u[0],c=u[1],{selectedIndices:p}=QN(l,c,n,r,s);return i!==e&&i.dispose(),o!==t&&o.dispose(),Tt(p,"int32")}const rk=nk;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function sk(e,t,n,r=.5,s=Number.NEGATIVE_INFINITY,i=0){const o=T(e,"boxes","nonMaxSuppression"),a=T(t,"scores","nonMaxSuppression"),u=Qi(o,a,n,r,s,i);n=u.maxOutputSize,r=u.iouThreshold,s=u.scoreThreshold,i=u.softNmsSigma;const l={boxes:o,scores:a},c={maxOutputSize:n,iouThreshold:r,scoreThreshold:s,softNmsSigma:i},p=L.runKernel(Z6,l,c);return{selectedIndices:p[0],selectedScores:p[1]}}const ik=P({nonMaxSuppressionWithScore_:sk});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function ok(e,t,n,r=.5,s=Number.NEGATIVE_INFINITY,i=0){const o=T(e,"boxes","nonMaxSuppressionAsync"),a=T(t,"scores","nonMaxSuppressionAsync"),u=Qi(o,a,n,r,s,i);n=u.maxOutputSize,r=u.iouThreshold,s=u.scoreThreshold,i=u.softNmsSigma;const l=await Promise.all([o.data(),a.data()]),c=l[0],p=l[1],{selectedIndices:d,selectedScores:w}=ZN(c,p,n,r,s,i);return o!==e&&o.dispose(),a!==t&&a.dispose(),{selectedIndices:Tt(d,"int32"),selectedScores:Tt(w)}}const ak=ok;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function uk(e,t,n,r=.5,s=Number.NEGATIVE_INFINITY,i=!1){const o=T(e,"boxes","nonMaxSuppression"),a=T(t,"scores","nonMaxSuppression"),u=Qi(o,a,n,r,s,null),l=u.maxOutputSize,c=u.iouThreshold,p=u.scoreThreshold,d={boxes:o,scores:a},w={maxOutputSize:l,iouThreshold:c,scoreThreshold:p,padToMaxOutputSize:i},b=L.runKernel(J6,d,w);return{selectedIndices:b[0],validOutputs:b[1]}}const lk=P({nonMaxSuppressionPadded_:uk});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function ck(e,t,n,r=.5,s=Number.NEGATIVE_INFINITY,i=!1){const o=T(e,"boxes","nonMaxSuppressionAsync"),a=T(t,"scores","nonMaxSuppressionAsync"),u=Qi(o,a,n,r,s,null),l=u.maxOutputSize,c=u.iouThreshold,p=u.scoreThreshold,[d,w]=await Promise.all([o.data(),a.data()]),{selectedIndices:b,validOutputs:E}=JN(d,w,l,c,p,i);return o!==e&&o.dispose(),a!==t&&a.dispose(),{selectedIndices:Tt(b,"int32"),validOutputs:$e(E,"int32")}}const fk=ck;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function pk(e,t,n=!1,r=!1){const s=T(e,"images","resizeBilinear");A(s.rank===3||s.rank===4,()=>`Error in resizeBilinear: x must be rank 3 or 4, but got rank ${s.rank}.`),A(t.length===2,()=>`Error in resizeBilinear: new shape must 2D, but got shape ${t}.`),A(r===!1||n===!1,()=>"Error in resizeBilinear: If halfPixelCenters is true, alignCorners must be false.");let i=s,o=!1;s.rank===3&&(o=!0,i=q(s,[1,s.shape[0],s.shape[1],s.shape[2]]));const a={images:i},u={alignCorners:n,halfPixelCenters:r,size:t},l=L.runKernel(g5,a,u);return o?q(l,[l.shape[1],l.shape[2],l.shape[3]]):l}const hk=P({resizeBilinear_:pk});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function dk(e,t,n=!1,r=!1){const s=T(e,"images","resizeNearestNeighbor");A(s.rank===3||s.rank===4,()=>`Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank ${s.rank}.`),A(t.length===2,()=>`Error in resizeNearestNeighbor: new shape must 2D, but got shape ${t}.`),A(s.dtype==="float32"||s.dtype==="int32",()=>"`images` must have `int32` or `float32` as dtype"),A(r===!1||n===!1,()=>"Error in resizeNearestNeighbor: If halfPixelCenters is true, alignCorners must be false.");let i=s,o=!1;s.rank===3&&(o=!0,i=q(s,[1,s.shape[0],s.shape[1],s.shape[2]]));const a={images:i},u={alignCorners:n,halfPixelCenters:r,size:t},l=L.runKernel(m5,a,u);return o?q(l,[l.shape[1],l.shape[2],l.shape[3]]):l}const mk=P({resizeNearestNeighbor_:dk});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gk(e,t="binary",n=!1,r=.5){const s=T(e,"image","threshold"),i=.2989,o=.587,a=.114,u=s.shape[0]*s.shape[1];let l=te(Tt([r]),255),c,p,d,w;if(A(s.rank===3,()=>`Error in threshold: image must be rank 3,but got rank ${s.rank}.`),A(s.shape[2]===3||s.shape[2]===1,()=>`Error in threshold: image color channel must be equal to 3 or 1but got ${s.shape[2]}.`),A(s.dtype==="int32"||s.dtype==="float32",()=>`Error in dtype: image dtype must be int32 or float32,but got dtype ${s.dtype}.`),A(t==="otsu"||t==="binary",()=>`Method must be binary or otsu, but was ${t}`),s.shape[2]===3){[c,p,d]=da(s,[1,1,1],-1);const _=te(c,i),N=te(p,o),x=te(d,a);w=le(le(_,N),x)}else w=e;if(t==="otsu"){const _=N4(je(K4(w),"int32"),tr([]),256);l=yk(_,u)}const b=n?of(w,l):Il(w,l);return je(te(b,255),"int32")}function yk(e,t){let n=Tt([-1]),r=Tt([0]),s=Tt([0]),i,o,a,u,l,c;for(let p=0;p<e.size-1;p++){i=ye(e,0,p+1),o=ye(e,p+1),l=ke(ze(i),t),c=ke(ze(o),t);const d=ze(te(i,pa(0,i.size)));a=ke(d,ze(i));const w=ba(o.shape,i.size),b=le(pa(0,o.size),w),E=te(o,b);u=ke(ze(E),ze(o));const _=ve(a,u),N=ve(a,u),x=te(l,c);s=te(te(x,_),N);const $=Il(s,r);r=ts($,s,r),n=ts($,Tt([p]),n)}return n}const vk=P({threshold_:gk});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function wk(e,t,n="nearest",r="constant",s=0,i){const o=T(e,"image","transform","float32"),a=T(t,"transforms","transform","float32");A(o.rank===4,()=>`Error in transform: image must be rank 4,but got rank ${o.rank}.`),A(a.rank===2&&(a.shape[0]===o.shape[0]||a.shape[0]===1)&&a.shape[1]===8,()=>"Error in transform: Input transform should be batch x 8 or 1 x 8"),A(i==null||i.length===2,()=>`Error in transform: outputShape must be [height, width] or null, but got ${i}.`);const u={image:o,transforms:a},l={interpolation:n,fillMode:r,fillValue:s,outputShape:i};return L.runKernel(J5,u,l)}const Sk=P({transform_:wk});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function bk(e,t,n){const r=T(e,"a","bandPart");A(r.rank>=2,()=>`bandPart(): Rank must be at least 2, got ${r.rank}.`);const s=r.shape,[i,o]=r.shape.slice(-2);let a,u;typeof t=="number"?(A(t%1===0,()=>`bandPart(): numLower must be an integer, got ${t}.`),A(t<=i,()=>`bandPart(): numLower (${t}) must not be greater than the number of rows (${i}).`),a=T(t<0?i:t,"numLower","bandPart")):(A(t.dtype==="int32",()=>"bandPart(): numLower's dtype must be an int32."),a=ts(U1(t,0),i,nl(t,i))),typeof n=="number"?(A(n%1===0,()=>`bandPart(): numUpper must be an integer, got ${n}.`),A(n<=o,()=>`bandPart(): numUpper (${n}) must not be greater than the number of columns (${o}).`),u=T(n<0?o:n,"numUpper","bandPart")):(A(n.dtype==="int32",()=>"bandPart(): numUpper's dtype must be an int32."),u=ts(U1(n,0),o,nl(n,o)));const l=q(pa(0,i,1,"int32"),[-1,1]),c=pa(0,o,1,"int32"),p=ve(l,c),d=el(of(p,a),O4(p,nr(u))),w=Ki([i,o],r.dtype);return q(Er(ti(q(r,[-1,i,o])).map(b=>ts(d,b,w))),s)}const Nk=P({bandPart_:bk});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function kk(e){let t;if(Array.isArray(e)){t=!1,A(e!=null&&e.length>0,()=>"Gram-Schmidt process: input must not be null, undefined, or empty");const s=e[0].shape[0];for(let i=1;i<e.length;++i)A(e[i].shape[0]===s,()=>`Gram-Schmidt: Non-unique lengths found in the input vectors: (${e[i].shape[0]} vs. ${s})`)}else t=!0,e=da(e,e.shape[0],0).map(s=>ct(s,[0]));A(e.length<=e[0].shape[0],()=>`Gram-Schmidt: Number of vectors (${e.length}) exceeds number of dimensions (${e[0].shape[0]}).`);const n=[],r=e;for(let s=0;s<e.length;++s)n.push(L.tidy(()=>{let i=r[s];if(s>0)for(let o=0;o<s;++o){const a=te(ze(te(n[o],i)),n[o]);i=ve(i,a)}return ke(i,$l(i,"euclidean"))}));return t?Er(n,0):n}const Tk=P({gramSchmidt_:kk});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ek(e,t=!1){if(A(e.rank>=2,()=>`qr() requires input tensor to have a rank >= 2, but got rank ${e.rank}`),e.rank===2)return tp(e,t);{const n=e.shape.slice(0,e.shape.length-2).reduce((u,l)=>u*l),r=ti(q(e,[n,e.shape[e.shape.length-2],e.shape[e.shape.length-1]]),0),s=[],i=[];r.forEach(u=>{const[l,c]=tp(u,t);s.push(l),i.push(c)});const o=q(Er(s,0),e.shape),a=q(Er(i,0),e.shape);return[o,a]}}function tp(e,t=!1){return L.tidy(()=>{A(e.shape.length===2,()=>`qr2d() requires a 2D Tensor, but got a ${e.shape.length}D Tensor.`);const n=e.shape[0],r=e.shape[1];let s=$4(n),i=es(e);const o=ns([[1]],[1,1]);let a=es(o);const u=n>=r?r:n;for(let l=0;l<u;++l){const c=i,p=a,d=s;[a,i,s]=L.tidy(()=>{const w=ye(i,[l,l],[n-l,1]),b=$l(w),E=ye(i,[l,l],[1,1]),_=ts(Il(E,0),ns([[-1]]),ns([[1]])),N=ve(E,te(_,b)),x=ke(w,N);x.shape[0]===1?a=es(o):a=wt([o,ye(x,[1,0],[x.shape[0]-1,x.shape[1]])],0);const $=nr(ke(De(_,N),b)),F=ye(i,[l,0],[n-l,r]),z=te($,a),M=V1(a);if(l===0)i=ve(F,De(z,De(M,F)));else{const X=ve(F,De(z,De(M,F)));i=wt([ye(i,[0,0],[l,r]),X],0)}const V=V1(z),W=ye(s,[0,l],[n,s.shape[1]-l]);if(l===0)s=ve(W,De(De(W,a),V));else{const X=ve(W,De(De(W,a),V));s=wt([ye(s,[0,0],[n,l]),X],1)}return[a,i,s]}),He([c,p,d])}return!t&&n>r&&(s=ye(s,[0,0],[n,r]),i=ye(i,[0,0],[r,r])),[s,i]})}const xk=P({qr_:Ek});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var Pt;(function(e){e[e.NONE=0]="NONE",e[e.MEAN=1]="MEAN",e[e.SUM=2]="SUM",e[e.SUM_BY_NONZERO_WEIGHTS=3]="SUM_BY_NONZERO_WEIGHTS"})(Pt||(Pt={}));function _k(e,t,n=Pt.SUM_BY_NONZERO_WEIGHTS){const r=T(e,"losses","computeWeightedLoss");let s=null;t!=null&&(s=T(t,"weights","computeWeightedLoss"));const i=s==null?r:te(r,s);if(n===Pt.NONE)return i;if(n===Pt.SUM)return ze(i);if(n===Pt.MEAN){if(s==null)return tl(i);{const o=r.size/s.size,a=ke(ze(i),ze(s));return o>1?ke(a,$e(o)):a}}if(n===Pt.SUM_BY_NONZERO_WEIGHTS){if(s==null)return ke(ze(i),$e(r.size));{const o=te(s,Fs(r.shape)),a=je(ze(j4(o,$e(0))),"float32");return ke(ze(i),a)}}throw Error(`Unknown reduction: ${n}`)}const Ir=P({computeWeightedLoss_:_k});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $k(e,t,n,r=Pt.SUM_BY_NONZERO_WEIGHTS){const s=T(e,"labels","absoluteDifference"),i=T(t,"predictions","absoluteDifference");let o=null;n!=null&&(o=T(n,"weights","absoluteDifference")),_n(s.shape,i.shape,"Error in absoluteDifference: ");const a=rn(ve(s,i));return Ir(a,o,r)}const Ik=P({absoluteDifference_:$k});function Ak(e,t,n,r,s=Pt.SUM_BY_NONZERO_WEIGHTS){const i=T(e,"labels","cosineDistance"),o=T(t,"predictions","cosineDistance");let a=null;r!=null&&(a=T(r,"weights","cosineDistance")),_n(i.shape,o.shape,"Error in cosineDistance: ");const u=$e(1),l=ve(u,ze(te(i,o),n,!0));return Ir(l,a,s)}const Ok=P({cosineDistance_:Ak});function Ck(e,t,n,r=Pt.SUM_BY_NONZERO_WEIGHTS){let s=T(e,"labels","hingeLoss");const i=T(t,"predictions","hingeLoss");let o=null;n!=null&&(o=T(n,"weights","hingeLoss")),_n(s.shape,i.shape,"Error in hingeLoss: ");const a=$e(1);s=ve(te($e(2),s),a);const u=Ol(ve(a,te(s,i)));return Ir(u,o,r)}const Dk=P({hingeLoss_:Ck});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Fk(e,t,n,r=1,s=Pt.SUM_BY_NONZERO_WEIGHTS){const i=T(e,"labels","huberLoss"),o=T(t,"predictions","huberLoss");let a=null;n!=null&&(a=T(n,"weights","huberLoss")),_n(i.shape,o.shape,"Error in huberLoss: ");const u=$e(r),l=rn(ve(o,i)),c=nl(l,u),p=ve(l,c),d=le(te($e(.5),Ln(c)),te(u,p));return Ir(d,a,s)}const Pk=P({huberLoss_:Fk});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Rk(e,t,n,r=1e-7,s=Pt.SUM_BY_NONZERO_WEIGHTS){const i=T(e,"labels","logLoss"),o=T(t,"predictions","logLoss");let a=null;n!=null&&(a=T(n,"weights","logLoss")),_n(i.shape,o.shape,"Error in logLoss: ");const u=$e(1),l=$e(r),c=nr(te(i,fa(le(o,l)))),p=te(ve(u,i),fa(le(ve(u,o),l))),d=ve(c,p);return Ir(d,a,s)}const Lk=P({logLoss_:Rk});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zk(e,t,n,r=Pt.SUM_BY_NONZERO_WEIGHTS){const s=T(e,"labels","meanSquaredError"),i=T(t,"predictions","meanSquaredError");let o=null;n!=null&&(o=T(n,"weights","meanSquaredError")),_n(s.shape,i.shape,"Error in meanSquaredError: ");const a=q4(s,i);return Ir(a,o,r)}const Mk=P({meanSquaredError_:zk});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function jk(e,t){const n=T(e,"labels","sigmoidCrossEntropyWithLogits"),r=T(t,"logits","sigmoidCrossEntropyWithLogits");_n(n.shape,r.shape,"Error in sigmoidCrossEntropyWithLogits: ");const s=Ol(r),i=te(r,n),o=D4(kr(nr(rn(r))));return le(ve(s,i),o)}function Bk(e,t,n,r=0,s=Pt.SUM_BY_NONZERO_WEIGHTS){let i=T(e,"multiClassLabels","sigmoidCrossEntropy");const o=T(t,"logits","sigmoidCrossEntropy");let a=null;if(n!=null&&(a=T(n,"weights","sigmoidCrossEntropy")),_n(i.shape,o.shape,"Error in sigmoidCrossEntropy: "),r>0){const l=$e(r),c=$e(1),p=$e(.5);i=le(te(i,ve(c,l)),te(p,l))}const u=jk(i,o);return Ir(u,a,s)}const Uk=P({sigmoidCrossEntropy_:Bk});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Vk(e,t,n=-1){if(n===-1&&(n=t.rank-1),n!==t.rank-1)throw Error(`Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank ${t.rank} and dim was ${n}`);return Tr((s,i,o)=>{const u=P4(i,[n],!0),l=ve(je(i,"float32"),u);o([s,l]);const c=nr(te(l,s));return{value:ze(c,[n]),gradFunc:(w,b)=>{const[E,_]=b,N=_l(w.shape,[n]);return[te(q(w,N),ve(je(E,"float32"),kr(_))),te(q(w,N),ve(kr(_),je(E,"float32")))]}}})(e,t)}function Wk(e,t,n,r=0,s=Pt.SUM_BY_NONZERO_WEIGHTS){let i=T(e,"onehotLabels","softmaxCrossEntropy");const o=T(t,"logits","softmaxCrossEntropy");let a=null;if(n!=null&&(a=T(n,"weights","softmaxCrossEntropy")),_n(i.shape,o.shape,"Error in softmaxCrossEntropy: "),r>0){const l=$e(r),c=$e(1),p=$e(i.shape[1]);i=le(te(i,ve(c,l)),ke(l,p))}const u=Vk(i,o);return Ir(u,a,s)}const Hk=P({softmaxCrossEntropy_:Wk});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Kk(e,t,n,r){const s=T(e,"indices","sparseFillEmptyRows","int32"),i=T(t,"values","sparseFillEmptyRows"),o=T(n,"denseShape","sparseFillEmptyRows","int32"),a=T(r,"defaultValue","sparseFillEmptyRows",i.dtype);if(s.rank!==2)throw new Error(`Indices should be Tensor2D but received shape
        ${s.shape}`);if(i.rank!==1)throw new Error(`Values should be Tensor1D but received shape ${i.shape}`);if(o.rank!==1)throw new Error(`Dense shape should be Tensor1D but received shape ${o.shape}`);if(a.rank!==0)throw new Error(`Default value should be a scalar but received shape ${a.shape}`);const u={indices:s,values:i,denseShape:o,defaultValue:a},l=L.runKernel(L5,u);return{outputIndices:l[0],outputValues:l[1],emptyRowIndicator:l[2],reverseIndexMap:l[3]}}const Gk=P({sparseFillEmptyRows_:Kk});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qk(e,t,n){const r=T(e,"inputIndices","sparseReshape","int32"),s=T(t,"inputShape","sparseReshape","int32"),i=T(n,"newShape","sparseReshape","int32");if(r.rank!==2)throw new Error(`Input indices should be Tensor2D but received shape
        ${r.shape}`);if(s.rank!==1)throw new Error(`Input shape should be Tensor1D but received shape ${s.shape}`);if(i.rank!==1)throw new Error(`New shape should be Tensor1D but received shape ${i.shape}`);const o={inputIndices:r,inputShape:s,newShape:i},a=L.runKernel(z5,o);return{outputIndices:a[0],outputShape:a[1]}}const Xk=P({sparseReshape_:qk});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Yk(e,t,n){const r=T(e,"data","sparseSegmentMean"),s=T(t,"indices","sparseSegmentMean","int32"),i=T(n,"segmentIds","sparseSegmentMean","int32");if(r.rank<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(s.rank!==1)throw new Error(`Indices should be Tensor1D but received shape
          ${s.shape}`);if(i.rank!==1)throw new Error(`Segment ids should be Tensor1D but received shape
          ${i.shape}`);const o={data:r,indices:s,segmentIds:i};return L.runKernel(M5,o)}const Qk=P({sparseSegmentMean_:Yk});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Jk(e,t,n){const r=T(e,"data","sparseSegmentSum"),s=T(t,"indices","sparseSegmentSum","int32"),i=T(n,"segmentIds","sparseSegmentSum","int32");if(r.rank<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(s.rank!==1)throw new Error(`Indices should be Tensor1D but received shape
         ${s.shape}`);if(i.rank!==1)throw new Error(`Segment ids should be Tensor1D but received shape
         ${i.shape}`);const o={data:r,indices:s,segmentIds:i};return L.runKernel(j5,o)}const Zk=P({sparseSegmentSum_:Jk});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function eT(e,t,n,r,s,i,o,a){const u=T(e,"data","stringNGrams","string");if(u.dtype!=="string")throw new Error("Data must be of datatype string");if(u.shape.length!==1)throw new Error(`Data must be a vector, saw: ${u.shape}`);const l=T(t,"dataSplits","stringNGrams");if(l.dtype!=="int32")throw new Error("Data splits must be of datatype int32");const c={separator:n,nGramWidths:r,leftPad:s,rightPad:i,padWidth:o,preserveShortSequences:a},p={data:u,dataSplits:l},d=L.runKernel(H5,p,c);return{nGrams:d[0],nGramsSplits:d[1]}}const tT=P({stringNGrams_:eT});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function nT(e,t,n=!0){const r=T(e,"input","stringSplit","string"),s=T(t,"delimiter","stringSplit","string");if(r.rank!==1)throw new Error(`Input should be Tensor1D but received shape ${r.shape}`);if(s.rank!==0)throw new Error(`Delimiter should be a scalar but received shape ${s.shape}`);const i={skipEmpty:n},o={input:r,delimiter:s},a=L.runKernel(K5,o,i);return{indices:a[0],values:a[1],shape:a[2]}}const rT=P({stringSplit_:nT});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function sT(e,t){const n=T(e,"input","stringToHashBucketFast","string"),r={numBuckets:t};if(t<=0)throw new Error("Number of buckets must be at least 1");const s={input:n};return L.runKernel(G5,s,r)}const iT=P({stringToHashBucketFast_:sT});/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function oT(e,t,n,r=!0){const s=T(e,"input","staticRegexReplace","string"),i={pattern:t,rewrite:n,replaceGlobal:r};return L.runKernel(V5,{x:s},i)}const aT=P({staticRegexReplace_:oT});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const uT={fft:yf,ifft:rl,rfft:vf,irfft:G4},lT={hammingWindow:AN,hannWindow:e0,frame:t0,stft:FN},Ji={flipLeftRight:zN,grayscaleToRGB:jN,resizeNearestNeighbor:mk,resizeBilinear:hk,rgbToGrayscale:UN,rotateWithOffset:WN,cropAndResize:RN,nonMaxSuppression:KN,nonMaxSuppressionAsync:rk,nonMaxSuppressionWithScore:ik,nonMaxSuppressionWithScoreAsync:ak,nonMaxSuppressionPadded:lk,nonMaxSuppressionPaddedAsync:fk,threshold:vk,transform:Sk},cT={bandPart:Nk,gramSchmidt:Tk,qr:xk},fT={absoluteDifference:Ik,computeWeightedLoss:Ir,cosineDistance:Ok,hingeLoss:Dk,huberLoss:Pk,logLoss:Lk,meanSquaredError:Mk,sigmoidCrossEntropy:Uk,softmaxCrossEntropy:Hk},pT={sparseFillEmptyRows:Gk,sparseReshape:Xk,sparseSegmentMean:Qk,sparseSegmentSum:Zk},hT={stringNGrams:tT,stringSplit:rT,stringToHashBucketFast:iT,staticRegexReplace:aT};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const dT=new Map,mT=new Map;class gT{getClassName(){return this.constructor.className}static fromConfig(t,n){return new t(n)}}class $s{constructor(){this.classNameMap={}}static getMap(){return $s.instance==null&&($s.instance=new $s),$s.instance}static register(t){$s.getMap().classNameMap[t.className]=[t,t.fromConfig]}}function yT(e,t,n){A(e.className!=null,()=>"Class being registered does not have the static className property defined."),A(typeof e.className=="string",()=>"className is required to be a string, but got type "+typeof e.className),A(e.className.length>0,()=>"Class being registered has an empty-string as its className, which is disallowed."),typeof t>"u"&&(t="Custom"),typeof n>"u"&&(n=e.className);const r=n,s=t+">"+r;return $s.register(e),dT.set(s,e),mT.set(e,s),e}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class ni extends gT{minimize(t,n=!1,r){const{value:s,grads:i}=this.computeGradients(t,r);if(r!=null){const o=r.map(a=>({name:a.name,tensor:i[a.name]}));this.applyGradients(o)}else this.applyGradients(i);return He(i),n?s:(s.dispose(),null)}get iterations(){return this.iterations_==null&&(this.iterations_=0),this.iterations_}incrementIterations(){this.iterations_=this.iterations+1}computeGradients(t,n){return Qv(t,n)}dispose(){this.iterations_!=null&&He(this.iterations_)}async saveIterations(){return this.iterations_==null&&(this.iterations_=0),{name:"iter",tensor:$e(this.iterations_,"int32")}}async getWeights(){throw new Error("getWeights() is not implemented for this optimizer yet.")}async setWeights(t){throw new Error(`setWeights() is not implemented for this optimizer class ${this.getClassName()}`)}async extractIterations(t){return this.iterations_=(await t[0].tensor.data())[0],t.slice(1)}}Object.defineProperty(ni,Symbol.hasInstance,{value:e=>e.minimize!=null&&e.computeGradients!=null&&e.applyGradients!=null});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class vT extends ni{static get className(){return"Adadelta"}constructor(t,n,r=null){super(),this.learningRate=t,this.rho=n,this.epsilon=r,this.accumulatedGrads=[],this.accumulatedUpdates=[],r==null&&(this.epsilon=L.backend.epsilon())}applyGradients(t){(Array.isArray(t)?t.map(r=>r.name):Object.keys(t)).forEach((r,s)=>{const i=L.registeredVariables[r],o=!1;this.accumulatedGrads[s]==null&&(this.accumulatedGrads[s]={originalName:`${r}/accum_grad`,variable:Se(()=>an(i).variable(o))}),this.accumulatedUpdates[s]==null&&(this.accumulatedUpdates[s]={originalName:`${r}/accum_var`,variable:Se(()=>an(i).variable(o))});const a=Array.isArray(t)?t[s].tensor:t[r];if(a==null)return;const u=this.accumulatedGrads[s].variable,l=this.accumulatedUpdates[s].variable;Se(()=>{const c=le(te(u,this.rho),te(Ln(a),1-this.rho)),p=te(ke(Nr(le(l,this.epsilon)),Nr(le(u,this.epsilon))),a),d=le(te(l,this.rho),te(Ln(p),1-this.rho));u.assign(c),l.assign(d);const w=le(te(p,-this.learningRate),i);i.assign(w)})}),this.incrementIterations()}dispose(){this.accumulatedUpdates!=null&&(He(this.accumulatedGrads.map(t=>t.variable)),He(this.accumulatedUpdates.map(t=>t.variable)))}async getWeights(){const t=[...this.accumulatedGrads,...this.accumulatedUpdates];return[await this.saveIterations()].concat(t.map(n=>({name:n.originalName,tensor:n.variable})))}async setWeights(t){t=await this.extractIterations(t);const n=t.length/2,r=!1;this.accumulatedGrads=t.slice(0,n).map(s=>({originalName:s.name,variable:s.tensor.variable(r)})),this.accumulatedUpdates=t.slice(n,n*2).map(s=>({originalName:s.name,variable:s.tensor.variable(r)}))}getConfig(){return{learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}}static fromConfig(t,n){return new t(n.learningRate,n.rho,n.epsilon)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class wT extends ni{static get className(){return"Adagrad"}constructor(t,n=.1){super(),this.learningRate=t,this.initialAccumulatorValue=n,this.accumulatedGrads=[]}applyGradients(t){(Array.isArray(t)?t.map(r=>r.name):Object.keys(t)).forEach((r,s)=>{const i=L.registeredVariables[r];this.accumulatedGrads[s]==null&&(this.accumulatedGrads[s]={originalName:`${r}/accumulator`,variable:Se(()=>ba(i.shape,this.initialAccumulatorValue).variable(!1))});const o=Array.isArray(t)?t[s].tensor:t[r];if(o==null)return;const a=this.accumulatedGrads[s].variable;Se(()=>{const u=le(a,Ln(o));a.assign(u);const l=le(te(ke(o,Nr(le(u,L.backend.epsilon()))),-this.learningRate),i);i.assign(l)})}),this.incrementIterations()}dispose(){this.accumulatedGrads!=null&&He(this.accumulatedGrads.map(t=>t.variable))}async getWeights(){return[await this.saveIterations()].concat(this.accumulatedGrads.map(t=>({name:t.originalName,tensor:t.variable})))}async setWeights(t){t=await this.extractIterations(t);const n=!1;this.accumulatedGrads=t.map(r=>({originalName:r.name,variable:r.tensor.variable(n)}))}getConfig(){return{learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}}static fromConfig(t,n){return new t(n.learningRate,n.initialAccumulatorValue)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class ST extends ni{static get className(){return"Adam"}constructor(t,n,r,s=null){super(),this.learningRate=t,this.beta1=n,this.beta2=r,this.epsilon=s,this.accumulatedFirstMoment=[],this.accumulatedSecondMoment=[],Se(()=>{this.accBeta1=$e(n).variable(),this.accBeta2=$e(r).variable()}),s==null&&(this.epsilon=L.backend.epsilon())}applyGradients(t){const n=Array.isArray(t)?t.map(r=>r.name):Object.keys(t);Se(()=>{const r=ve(1,this.accBeta1),s=ve(1,this.accBeta2);n.forEach((i,o)=>{const a=L.registeredVariables[i],u=!1;this.accumulatedFirstMoment[o]==null&&(this.accumulatedFirstMoment[o]={originalName:`${i}/m`,variable:Se(()=>an(a).variable(u))}),this.accumulatedSecondMoment[o]==null&&(this.accumulatedSecondMoment[o]={originalName:`${i}/v`,variable:Se(()=>an(a).variable(u))});const l=Array.isArray(t)?t[o].tensor:t[i];if(l==null)return;const c=this.accumulatedFirstMoment[o].variable,p=this.accumulatedSecondMoment[o].variable,d=le(te(c,this.beta1),te(l,1-this.beta1)),w=le(te(p,this.beta2),te(Ln(l),1-this.beta2)),b=ke(d,r),E=ke(w,s);c.assign(d),p.assign(w);const _=le(te(ke(b,le(Nr(E),this.epsilon)),-this.learningRate),a);a.assign(_)}),this.accBeta1.assign(te(this.accBeta1,this.beta1)),this.accBeta2.assign(te(this.accBeta2,this.beta2))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.accBeta2.dispose(),this.accumulatedFirstMoment!=null&&He(this.accumulatedFirstMoment.map(t=>t.variable)),this.accumulatedSecondMoment!=null&&He(this.accumulatedSecondMoment.map(t=>t.variable))}async getWeights(){const t=[...this.accumulatedFirstMoment,...this.accumulatedSecondMoment];return[await this.saveIterations()].concat(t.map(n=>({name:n.originalName,tensor:n.variable})))}async setWeights(t){t=await this.extractIterations(t),Se(()=>{this.accBeta1.assign(ca(this.beta1,this.iterations_+1)),this.accBeta2.assign(ca(this.beta2,this.iterations_+1))});const n=t.length/2,r=!1;this.accumulatedFirstMoment=t.slice(0,n).map(s=>({originalName:s.name,variable:s.tensor.variable(r)})),this.accumulatedSecondMoment=t.slice(n,n*2).map(s=>({originalName:s.name,variable:s.tensor.variable(r)}))}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}}static fromConfig(t,n){return new t(n.learningRate,n.beta1,n.beta2,n.epsilon)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class bT extends ni{static get className(){return"Adamax"}constructor(t,n,r,s=null,i=0){super(),this.learningRate=t,this.beta1=n,this.beta2=r,this.epsilon=s,this.decay=i,this.accumulatedFirstMoment=[],this.accumulatedWeightedInfNorm=[],Se(()=>{this.iteration=$e(0).variable(),this.accBeta1=$e(n).variable()}),s==null&&(this.epsilon=L.backend.epsilon())}applyGradients(t){const n=Array.isArray(t)?t.map(r=>r.name):Object.keys(t);Se(()=>{const r=ve(1,this.accBeta1),s=ke(-this.learningRate,le(te(this.iteration,this.decay),1));n.forEach((i,o)=>{const a=L.registeredVariables[i],u=!1;this.accumulatedFirstMoment[o]==null&&(this.accumulatedFirstMoment[o]={originalName:`${i}/m`,variable:an(a).variable(u)}),this.accumulatedWeightedInfNorm[o]==null&&(this.accumulatedWeightedInfNorm[o]={originalName:`${i}/v`,variable:an(a).variable(u)});const l=Array.isArray(t)?t[o].tensor:t[i];if(l==null)return;const c=this.accumulatedFirstMoment[o].variable,p=this.accumulatedWeightedInfNorm[o].variable,d=le(te(c,this.beta1),te(l,1-this.beta1)),w=te(p,this.beta2),b=rn(l),E=M4(w,b);c.assign(d),p.assign(E);const _=le(te(ke(s,r),ke(d,le(E,this.epsilon))),a);a.assign(_)}),this.iteration.assign(le(this.iteration,1)),this.accBeta1.assign(te(this.accBeta1,this.beta1))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.iteration.dispose(),this.accumulatedFirstMoment!=null&&He(this.accumulatedFirstMoment.map(t=>t.variable)),this.accumulatedWeightedInfNorm!=null&&He(this.accumulatedWeightedInfNorm.map(t=>t.variable))}async getWeights(){throw new Error("getWeights() is not implemented for Adamax yet.")}async setWeights(t){throw new Error("setWeights() is not implemented for Adamax yet.")}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}}static fromConfig(t,n){return new t(n.learningRate,n.beta1,n.beta2,n.epsilon,n.decay)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class n0 extends ni{static get className(){return"SGD"}constructor(t){super(),this.learningRate=t,this.setLearningRate(t)}applyGradients(t){(Array.isArray(t)?t.map(r=>r.name):Object.keys(t)).forEach((r,s)=>{const i=Array.isArray(t)?t[s].tensor:t[r];if(i==null)return;const o=L.registeredVariables[r];Se(()=>{const a=le(te(this.c,i),o);o.assign(a)})}),this.incrementIterations()}setLearningRate(t){this.learningRate=t,this.c!=null&&this.c.dispose(),this.c=Qn($e(-t))}dispose(){this.c.dispose()}async getWeights(){return[await this.saveIterations()]}async setWeights(t){if(t=await this.extractIterations(t),t.length!==0)throw new Error("SGD optimizer does not have settable weights.")}getConfig(){return{learningRate:this.learningRate}}static fromConfig(t,n){return new t(n.learningRate)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class NT extends n0{static get className(){return"Momentum"}constructor(t,n,r=!1){super(t),this.learningRate=t,this.momentum=n,this.useNesterov=r,this.accumulations=[],this.m=$e(this.momentum)}applyGradients(t){(Array.isArray(t)?t.map(r=>r.name):Object.keys(t)).forEach((r,s)=>{const i=L.registeredVariables[r];this.accumulations[s]==null&&(this.accumulations[s]={originalName:`${r}/momentum`,variable:Se(()=>an(i).variable(!1))});const o=this.accumulations[s].variable,a=Array.isArray(t)?t[s].tensor:t[r];a!=null&&Se(()=>{let u;const l=le(te(this.m,o),a);this.useNesterov?u=le(te(this.c,le(a,te(l,this.m))),i):u=le(te(this.c,l),i),o.assign(l),i.assign(u)})}),this.incrementIterations()}dispose(){this.m.dispose(),this.accumulations!=null&&He(this.accumulations.map(t=>t.variable))}setMomentum(t){this.momentum=t}async getWeights(){return[await this.saveIterations()].concat(this.accumulations.map(t=>({name:t.originalName,tensor:t.variable})))}async setWeights(t){t=await this.extractIterations(t);const n=!1;this.accumulations=t.map(r=>({originalName:r.name,variable:r.tensor.variable(n)}))}getConfig(){return{learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}}static fromConfig(t,n){return new t(n.learningRate,n.momentum,n.useNesterov)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class kT extends ni{static get className(){return"RMSProp"}constructor(t,n=.9,r=0,s=null,i=!1){if(super(),this.learningRate=t,this.decay=n,this.momentum=r,this.epsilon=s,this.accumulatedMeanSquares=[],this.accumulatedMoments=[],this.accumulatedMeanGrads=[],this.centered=i,s==null&&(this.epsilon=L.backend.epsilon()),t==null)throw new Error("learningRate for RMSPropOptimizer must be defined.")}applyGradients(t){(Array.isArray(t)?t.map(r=>r.name):Object.keys(t)).forEach((r,s)=>{const i=L.registeredVariables[r],o=!1;this.accumulatedMeanSquares[s]==null&&(this.accumulatedMeanSquares[s]={originalName:`${r}/rms`,variable:Se(()=>an(i).variable(o))}),this.accumulatedMoments[s]==null&&(this.accumulatedMoments[s]={originalName:`${r}/momentum`,variable:Se(()=>an(i).variable(o))}),this.accumulatedMeanGrads[s]==null&&this.centered&&(this.accumulatedMeanGrads[s]={originalName:`${r}/mg`,variable:Se(()=>an(i).variable(o))});const a=Array.isArray(t)?t[s].tensor:t[r];if(a==null)return;const u=this.accumulatedMeanSquares[s].variable,l=this.accumulatedMoments[s].variable;Se(()=>{const c=le(te(u,this.decay),te(Ln(a),1-this.decay));if(this.centered){const p=this.accumulatedMeanGrads[s].variable,d=le(te(p,this.decay),te(a,1-this.decay)),w=ke(te(a,this.learningRate),Nr(ve(c,le(Ln(d),this.epsilon)))),b=le(te(l,this.momentum),w);u.assign(c),p.assign(d),l.assign(b);const E=ve(i,b);i.assign(E)}else{const p=le(te(u,this.decay),te(Ln(a),1-this.decay)),d=le(te(l,this.momentum),ke(te(a,this.learningRate),Nr(le(p,this.epsilon))));u.assign(p),l.assign(d);const w=ve(i,d);i.assign(w)}})}),this.incrementIterations()}dispose(){this.accumulatedMeanSquares!=null&&He(this.accumulatedMeanSquares.map(t=>t.variable)),this.accumulatedMeanGrads!=null&&this.centered&&He(this.accumulatedMeanGrads.map(t=>t.variable)),this.accumulatedMoments!=null&&He(this.accumulatedMoments.map(t=>t.variable))}async getWeights(){const t=[...this.accumulatedMeanSquares,...this.accumulatedMoments];return this.centered&&t.push(...this.accumulatedMeanGrads),[await this.saveIterations()].concat(t.map(n=>({name:n.originalName,tensor:n.variable})))}async setWeights(t){t=await this.extractIterations(t);const n=this.centered?t.length/3:t.length/2,r=!1;this.accumulatedMeanSquares=t.slice(0,n).map(s=>({originalName:s.name,variable:s.tensor.variable(r)})),this.accumulatedMoments=t.slice(n,n*2).map(s=>({originalName:s.name,variable:s.tensor.variable(r)})),this.centered&&(this.accumulatedMeanGrads=t.slice(n*2,n*3).map(s=>({originalName:s.name,variable:s.tensor.variable(r)})))}getConfig(){return{learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}}static fromConfig(t,n){return new t(n.learningRate,n.decay,n.momentum,n.epsilon,n.centered)}}/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const TT=[vT,wT,ST,bT,NT,kT,n0];function ET(){for(const e of TT)yT(e)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const xT="model",_T=".json",$T=".weights.bin";function np(e){return new Promise(t=>setTimeout(t)).then(e)}class Xs{constructor(t){if(!Te().getBool("IS_BROWSER"))throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");t.startsWith(Xs.URL_SCHEME)&&(t=t.slice(Xs.URL_SCHEME.length)),(t==null||t.length===0)&&(t=xT),this.modelJsonFileName=t+_T,this.weightDataFileName=t+$T}async save(t){if(typeof document>"u")throw new Error("Browser downloads are not supported in this environment since `document` is not present");const n=jn.join(t.weightData),r=window.URL.createObjectURL(new Blob([n],{type:"application/octet-stream"}));if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");{const s=[{paths:["./"+this.weightDataFileName],weights:t.weightSpecs}],i=l4(t,s),o=window.URL.createObjectURL(new Blob([JSON.stringify(i)],{type:"application/json"})),a=this.modelJsonAnchor==null?document.createElement("a"):this.modelJsonAnchor;if(a.download=this.modelJsonFileName,a.href=o,await np(()=>a.dispatchEvent(new MouseEvent("click"))),t.weightData!=null){const u=this.weightDataAnchor==null?document.createElement("a"):this.weightDataAnchor;u.download=this.weightDataFileName,u.href=r,await np(()=>u.dispatchEvent(new MouseEvent("click")))}return{modelArtifactsInfo:Sa(t)}}}}Xs.URL_SCHEME="downloads://";class IT{constructor(t){if(t==null||t.length<1)throw new Error(`When calling browserFiles, at least 1 file is required, but received ${t}`);this.jsonFile=t[0],this.weightsFiles=t.slice(1)}async load(){return new Promise((t,n)=>{const r=new FileReader;r.onload=s=>{const i=JSON.parse(s.target.result),o=i.modelTopology;if(o==null){n(new Error(`modelTopology field is missing from file ${this.jsonFile.name}`));return}if(i.weightsManifest==null){n(new Error(`weightManifest field is missing from file ${this.jsonFile.name}`));return}if(this.weightsFiles.length===0){t({modelTopology:o});return}const u=nf(i,l=>this.loadWeights(l));t(u)},r.onerror=s=>n(`Failed to read model topology and weights manifest JSON from file '${this.jsonFile.name}'. BrowserFiles supports loading Keras-style tf.Model artifacts only.`),r.readAsText(this.jsonFile)})}loadWeights(t){const n=[],r=[];for(const o of t)n.push(...o.weights),r.push(...o.paths);const s=this.checkManifestAndWeightFiles(t),i=r.map(o=>this.loadWeightsFile(o,s[o]));return Promise.all(i).then(o=>[n,o])}loadWeightsFile(t,n){return new Promise((r,s)=>{const i=new FileReader;i.onload=o=>{const a=o.target.result;r(a)},i.onerror=o=>s(`Failed to weights data from file of path '${t}'.`),i.readAsArrayBuffer(n)})}checkManifestAndWeightFiles(t){const n=[],r=this.weightsFiles.map(i=>Z3(i.name)),s={};for(const i of t)i.paths.forEach(o=>{const a=Z3(o);if(n.indexOf(a)!==-1)throw new Error(`Duplicate file basename found in weights manifest: '${a}'`);if(n.push(a),r.indexOf(a)===-1)throw new Error(`Weight file with basename '${a}' is not provided.`);s[o]=this.weightsFiles[r.indexOf(a)]});if(n.length!==this.weightsFiles.length)throw new Error(`Mismatch in the number of files in weights manifest (${n.length}) and the number of weight files provided (${this.weightsFiles.length}).`);return s}}const AT=e=>Te().getBool("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(Xs.URL_SCHEME)?OT(e.slice(Xs.URL_SCHEME.length)):null;Ve.registerSaveRouter(AT);function OT(e="model"){return new Xs(e)}function CT(e){return new IT(e)}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function rp(e,t,n,r){o(e),n=n??0,r=r??1,a(n,r);let s=0;const i=u=>(u.then(l=>{const c=n+ ++s/e.length*(r-n);return t(c),l}),u);function o(u){A(u!=null&&Array.isArray(u)&&u.length>0,()=>"promises must be a none empty array")}function a(u,l){A(u>=0&&u<=1,()=>`Progress fraction must be in range [0, 1], but got startFraction ${u}`),A(l>=0&&l<=1,()=>`Progress fraction must be in range [0, 1], but got endFraction ${l}`),A(l>=u,()=>`startFraction must be no more than endFraction, but got startFraction ${u} and endFraction ${l}`)}return Promise.all(e.map(i))}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function r0(e,t){t==null&&(t={});const n=t.fetchFunc==null?Te().platform.fetch:t.fetchFunc,r=e.map(p=>n(p,t.requestInit,{isBinary:!0})),a=(t.onProgress==null?await Promise.all(r):await rp(r,t.onProgress,0,.5)).map(p=>p.arrayBuffer());return t.onProgress==null?await Promise.all(a):await rp(a,t.onProgress,.5,1)}function DT(e,t){var n;const r=t.fetchFunc==null?Te().platform.fetch:t.fetchFunc;let s=0,i;return(n=t.onProgress)===null||n===void 0||n.call(t,0),new ReadableStream({pull:async o=>{for(var a;s<e.length;){i||(i=(await r(e[s],t.requestInit,{isBinary:!0})).body.getReader());const{done:u,value:l}=await i.read();if(u){s++,i=void 0,(a=t.onProgress)===null||a===void 0||a.call(t,s/e.length);continue}o.enqueue(l);return}o.close()}})}async function FT(e,t="",n,r){return s0(o=>r0(o,{requestInit:r}))(e,t,n)}function s0(e){return async(t,n="",r)=>{const s=t.map(()=>!1),i={},o=r!=null?r.map(()=>!1):[],a=[];if(t.forEach((w,b)=>{let E=0;w.weights.forEach(_=>{const N="quantization"in _?_.quantization.dtype:_.dtype,x=Hs[N]*ot(_.shape),$=()=>{s[b]=!0,i[b]==null&&(i[b]=[]),i[b].push({manifestEntry:_,groupOffset:E,sizeBytes:x})};r!=null?r.forEach((F,z)=>{F===_.name&&($(),o[z]=!0)}):$(),a.push(_.name),E+=x})}),!o.every(w=>w)){const w=r.filter((b,E)=>!o[E]);throw new Error(`Could not find weights in manifest with names: ${w.join(", ")}. 
Manifest JSON has weights with names: ${a.join(", ")}.`)}const u=s.reduce((w,b,E)=>(b&&w.push(E),w),[]),l=[];u.forEach(w=>{t[w].paths.forEach(b=>{const E=n+(n.endsWith("/")?"":"/")+b;l.push(E)})});const c=await e(l),p={};let d=0;return u.forEach(w=>{const b=t[w].paths.length,E=new jn(c.slice(d,d+b));i[w].forEach(N=>{const x=E.slice(N.groupOffset,N.groupOffset+N.sizeBytes),$=o4(x,[N.manifestEntry]);for(const F in $)p[F]=$[F]}),d+=b}),p}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const PT="application/octet-stream",RT="application/json";class Ef{constructor(t,n){if(this.DEFAULT_METHOD="POST",n==null&&(n={}),this.weightPathPrefix=n.weightPathPrefix,this.weightUrlConverter=n.weightUrlConverter,n.fetchFunc!=null?(A(typeof n.fetchFunc=="function",()=>"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"),this.fetch=n.fetchFunc):this.fetch=Te().platform.fetch,A(t!=null&&t.length>0,()=>"URL path for http must not be null, undefined or empty."),Array.isArray(t)&&A(t.length===2,()=>`URL paths for http must have a length of 2, (actual length is ${t.length}).`),this.path=t,n.requestInit!=null&&n.requestInit.body!=null)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=n.requestInit||{},this.loadOptions=n}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");const n=Object.assign({method:this.DEFAULT_METHOD},this.requestInit);n.body=new FormData;const r=[{paths:["./model.weights.bin"],weights:t.weightSpecs}],s=l4(t,r);if(n.body.append("model.json",new Blob([JSON.stringify(s)],{type:RT}),"model.json"),t.weightData!=null){const o=jn.join(t.weightData);n.body.append("model.weights.bin",new Blob([o],{type:PT}),"model.weights.bin")}const i=await this.fetch(this.path,n);if(i.ok)return{modelArtifactsInfo:Sa(t),responses:[i]};throw new Error(`BrowserHTTPRequest.save() failed due to HTTP response status ${i.status}.`)}async loadModelJSON(){const t=await this.fetch(this.path,this.requestInit);if(!t.ok)throw new Error(`Request to ${this.path} failed with status code ${t.status}. Please verify this URL points to the model JSON of the model to load.`);let n;try{n=await t.json()}catch{let o=`Failed to parse model JSON of response from ${this.path}.`;throw this.path.endsWith(".pb")?o+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":o+=" Please make sure the server is serving valid JSON for this request.",new Error(o)}const r=n.modelTopology,s=n.weightsManifest;if(r==null&&s==null)throw new Error(`The JSON from HTTP path ${this.path} contains neither model topology or manifest for weights.`);return n}async load(){if(this.loadOptions.streamWeights)return this.loadStream();const t=await this.loadModelJSON();return nf(t,n=>this.loadWeights(n))}async loadStream(){const t=await this.loadModelJSON(),n=await this.getWeightUrls(t.weightsManifest),r=P1(t.weightsManifest),s=()=>DT(n,this.loadOptions);return Object.assign(Object.assign({},t),{weightSpecs:r,getWeightStream:s})}async getWeightUrls(t){const n=Array.isArray(this.path)?this.path[1]:this.path,[r,s]=LT(n),i=this.weightPathPrefix||r,o=[],a=[];for(const u of t)for(const l of u.paths)this.weightUrlConverter!=null?a.push(this.weightUrlConverter(l)):o.push(i+l+s);return this.weightUrlConverter&&o.push(...await Promise.all(a)),o}async loadWeights(t){const n=await this.getWeightUrls(t),r=P1(t),s=await r0(n,this.loadOptions);return[r,s]}}Ef.URL_SCHEME_REGEX=/^https?:\/\//;function LT(e){const t=e.lastIndexOf("/"),n=e.lastIndexOf("?"),r=e.substring(0,t),s=n>t?e.substring(n):"";return[r+"/",s]}function W1(e){return e.match(Ef.URL_SCHEME_REGEX)!=null}const i0=(e,t)=>{if(typeof fetch>"u"&&(t==null||t.fetchFunc==null))return null;{let n=!0;if(Array.isArray(e)?n=e.every(r=>W1(r)):n=W1(e),n)return xf(e,t)}return null};Ve.registerSaveRouter(i0);Ve.registerLoadRouter(i0);function xf(e,t){return new Ef(e,t)}function zT(e,t){return xf(e,t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Sc{constructor(t){this.modelArtifacts=t}load(){return this.modelArtifacts}}class o0{constructor(t){this.saveHandler=t}save(t){return this.saveHandler(t)}}class MT{constructor(t){t.load&&(this.load=()=>Promise.resolve(t.load())),t.save&&(this.save=n=>Promise.resolve(t.save(n)))}}function jT(e,t,n,r){const s=arguments;return new MT(a0(...s))}function a0(e,t,n,r){return arguments.length===1?e.modelTopology!=null||e.weightSpecs!=null?new Sc(e):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new Sc({modelTopology:e})):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new Sc({modelTopology:e,weightSpecs:t,weightData:n,trainingConfig:r}))}function BT(e){return new o0(e)}function UT(e){return new o0(e)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const u0=Object.freeze(Object.defineProperty({__proto__:null,CompositeArrayBuffer:jn,browserFiles:CT,browserHTTPRequest:zT,concatenateArrayBuffers:P7,copyModel:r8,decodeWeights:o4,decodeWeightsStream:u4,encodeWeights:I7,fromMemory:jT,fromMemorySync:a0,getLoadHandlers:V7,getModelArtifactsForJSON:nf,getModelArtifactsForJSONSync:c4,getModelArtifactsInfoForJSON:Sa,getSaveHandlers:U7,getWeightSpecs:P1,http:xf,isHTTPScheme:W1,listModels:t8,loadWeights:FT,moveModel:s8,registerLoadRouter:B7,registerSaveRouter:j7,removeModel:n8,weightsLoaderFactory:s0,withSaveHandler:BT,withSaveHandlerSync:UT},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let Ts;function VT(e,t=3){if(t>4)throw new Error("Cannot construct Tensor with more than 4 channels from pixels.");if(e==null)throw new Error("pixels passed to tf.browser.fromPixels() can not be null");let n=!1,r=!1,s=!1,i=!1,o=!1,a=!1;if(e.data instanceof Uint8Array)n=!0;else if(typeof ImageData<"u"&&e instanceof ImageData)r=!0;else if(typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement)s=!0;else if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement)i=!0;else if(e.getContext!=null)o=!0;else if(typeof ImageBitmap<"u"&&e instanceof ImageBitmap)a=!0;else throw new Error(`pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was ${e.constructor.name}`);if(I1(j3,L.backendName)!=null){const b={pixels:e},E={numChannels:t};return L.runKernel(j3,b,E)}const[l,c]=s?[e.videoWidth,e.videoHeight]:[e.width,e.height];let p;if(o)p=e.getContext("2d").getImageData(0,0,l,c).data;else if(r||n)p=e.data;else if(i||s||a){if(Ts==null)if(typeof document>"u")if(typeof OffscreenCanvas<"u"&&typeof OffscreenCanvasRenderingContext2D<"u")Ts=new OffscreenCanvas(1,1).getContext("2d");else throw new Error("Cannot parse input in current context. Reason: OffscreenCanvas Context2D rendering is not supported.");else Ts=document.createElement("canvas").getContext("2d",{willReadFrequently:!0});Ts.canvas.width=l,Ts.canvas.height=c,Ts.drawImage(e,0,0,l,c),p=Ts.getImageData(0,0,l,c).data}let d;if(t===4)d=new Int32Array(p);else{const b=l*c;d=new Int32Array(b*t);for(let E=0;E<b;E++)for(let _=0;_<t;++_)d[E*t+_]=p[E*4+_]}return Y4(d,[c,l,t],"int32")}function WT(e){if(e.rank!==2&&e.rank!==3)throw new Error(`toPixels only supports rank 2 or 3 tensors, got rank ${e.rank}.`);const t=e.rank===2?1:e.shape[2];if(t>4||t===2)throw new Error(`toPixels only supports depth of size 1, 3 or 4 but got ${t}`);if(e.dtype!=="float32"&&e.dtype!=="int32")throw new Error(`Unsupported type for toPixels: ${e.dtype}. Please use float32 or int32 tensors.`)}async function l0(e,t){let n=T(e,"img","toPixels");if(!(e instanceof qe)){const l=n;n=je(l,"int32"),l.dispose()}WT(n);const[r,s]=n.shape.slice(0,2),i=n.rank===2?1:n.shape[2],o=await n.data(),a=n.dtype==="float32"?255:1,u=new Uint8ClampedArray(s*r*4);for(let l=0;l<r*s;++l){const c=[0,0,0,255];for(let d=0;d<i;d++){const w=o[l*i+d];if(n.dtype==="float32"){if(w<0||w>1)throw new Error(`Tensor values for a float32 Tensor must be in the range [0 - 1] but encountered ${w}.`)}else if(n.dtype==="int32"&&(w<0||w>255))throw new Error(`Tensor values for a int32 Tensor must be in the range [0 - 255] but encountered ${w}.`);i===1?(c[0]=w*a,c[1]=w*a,c[2]=w*a):c[d]=w*a}const p=l*4;u[p+0]=Math.round(c[0]),u[p+1]=Math.round(c[1]),u[p+2]=Math.round(c[2]),u[p+3]=Math.round(c[3])}return n!==e&&n.dispose(),u}const c0=P({fromPixels_:VT});/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ET();/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const HT=Te();HT.registerFlag("KEEP_INTERMEDIATE_TENSORS",()=>!1,e=>{e&&console.warn("Keep intermediate tensors is ON. This will print the values of all intermediate tensors during model inference. Not all models support this mode. For details, check e2e/benchmarks/ model_config.js. This significantly impacts performance.")});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
 */var Ht;(function(e){e[e.DT_INVALID=0]="DT_INVALID",e[e.DT_FLOAT=1]="DT_FLOAT",e[e.DT_DOUBLE=2]="DT_DOUBLE",e[e.DT_INT32=3]="DT_INT32",e[e.DT_UINT8=4]="DT_UINT8",e[e.DT_INT16=5]="DT_INT16",e[e.DT_INT8=6]="DT_INT8",e[e.DT_STRING=7]="DT_STRING",e[e.DT_COMPLEX64=8]="DT_COMPLEX64",e[e.DT_INT64=9]="DT_INT64",e[e.DT_BOOL=10]="DT_BOOL",e[e.DT_QINT8=11]="DT_QINT8",e[e.DT_QUINT8=12]="DT_QUINT8",e[e.DT_QINT32=13]="DT_QINT32",e[e.DT_BFLOAT16=14]="DT_BFLOAT16",e[e.DT_QINT16=15]="DT_QINT16",e[e.DT_QUINT16=16]="DT_QUINT16",e[e.DT_UINT16=17]="DT_UINT16",e[e.DT_COMPLEX128=18]="DT_COMPLEX128",e[e.DT_HALF=19]="DT_HALF",e[e.DT_RESOURCE=20]="DT_RESOURCE",e[e.DT_VARIANT=21]="DT_VARIANT",e[e.DT_UINT32=22]="DT_UINT32",e[e.DT_UINT64=23]="DT_UINT64",e[e.DT_FLOAT_REF=101]="DT_FLOAT_REF",e[e.DT_DOUBLE_REF=102]="DT_DOUBLE_REF",e[e.DT_INT32_REF=103]="DT_INT32_REF",e[e.DT_UINT8_REF=104]="DT_UINT8_REF",e[e.DT_INT16_REF=105]="DT_INT16_REF",e[e.DT_INT8_REF=106]="DT_INT8_REF",e[e.DT_STRING_REF=107]="DT_STRING_REF",e[e.DT_COMPLEX64_REF=108]="DT_COMPLEX64_REF",e[e.DT_INT64_REF=109]="DT_INT64_REF",e[e.DT_BOOL_REF=110]="DT_BOOL_REF",e[e.DT_QINT8_REF=111]="DT_QINT8_REF",e[e.DT_QUINT8_REF=112]="DT_QUINT8_REF",e[e.DT_QINT32_REF=113]="DT_QINT32_REF",e[e.DT_BFLOAT16_REF=114]="DT_BFLOAT16_REF",e[e.DT_QINT16_REF=115]="DT_QINT16_REF",e[e.DT_QUINT16_REF=116]="DT_QUINT16_REF",e[e.DT_UINT16_REF=117]="DT_UINT16_REF",e[e.DT_COMPLEX128_REF=118]="DT_COMPLEX128_REF",e[e.DT_HALF_REF=119]="DT_HALF_REF",e[e.DT_RESOURCE_REF=120]="DT_RESOURCE_REF",e[e.DT_VARIANT_REF=121]="DT_VARIANT_REF",e[e.DT_UINT32_REF=122]="DT_UINT32_REF",e[e.DT_UINT64_REF=123]="DT_UINT64_REF"})(Ht||(Ht={}));var sp;(function(e){(function(t){t[t.LEGACY=0]="LEGACY",t[t.V1=1]="V1",t[t.V2=2]="V2"})(e.CheckpointFormatVersion||(e.CheckpointFormatVersion={}))})(sp||(sp={}));/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const KT={};function f0(e){return KT[e]}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function m(e,t,n,r,s){const i=t.inputParams[e];if(i&&i.inputIndexStart!==void 0){const a=i.inputIndexStart,u=i.inputIndexEnd===0?void 0:i.inputIndexEnd===void 0?a+1:i.inputIndexEnd,l=a<0?t.inputNames.length+a:a;if(i.type==="tensor")return yt(t.inputNames[l],n,r,s);if(i.type==="tensors"){const d=t.inputs.slice(a,u);return t.inputNames.slice(a,u).filter((b,E)=>{var _;return((_=d[E])===null||_===void 0?void 0:_.op)!=="NoOp"}).map(b=>yt(b,n,r,s))}const c=yt(t.inputNames[l],n,r,s),p=c.dataSync();return i.type==="number"?p[0]:$1(c.shape,p)}const o=t.attrParams[e];return o&&o.value}function yt(e,t,n,r){const[s,i]=Kt(e,n);if(r!=null){const a=r.getHashTableHandleByName(s);if(a!=null)return a}const o=n.currentContextIds.find(a=>!!t[sl(s,a)]);return o!==void 0?t[sl(s,o)][i]:void 0}function ip(e,t,n){return t[sl(e,n.currentContextId)]}function ur(e,t){const[n,r,s]=Kt(e,t);return[sl(n,t&&t.currentContextId),r,s]}function sl(e,t){return t?`${e}-${t}`:e}function Kt(e,t){if(e==="")return["",0,void 0];const n=t!=null&&t.parseNodeNameCache!=null;if(n){const i=t.parseNodeNameCache.get(e);if(i!=null)return i}const r=e.split(":");let s;if(r.length===1)s=[e,0,void 0];else{const i=r[0],o=r.length===3?r[1]:void 0,a=Number(r[r.length-1]);s=[i,a,o]}return n&&t.parseNodeNameCache.set(e,s),s}function Tu(e,t,n){let r=m("pad",e,t,n);if(r==="explicit"){r=m("explicitPaddings",e,t,n);const s=[[0,0],[0,0],[0,0],[0,0]];for(let i=0;i<4;i++)s[i][0]=r[i*2],s[i][1]=r[i*2+1];return s}return r}function lr(e){return e.kept?e:es(e)}/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const GT=[{tfOpName:"Add",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AddV2",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AddN",category:"arithmetic",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}]},{tfOpName:"BiasAdd",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"Sub",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"RealDiv",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Div",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"DivNoNan",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"FloorDiv",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Mul",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Maximum",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Minimum",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Pow",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SquaredDifference",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Mod",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"FloorMod",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}],qT=Object.freeze(Object.defineProperty({__proto__:null,json:GT},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const XT=[{tfOpName:"Abs",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Acos",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Asin",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atan2",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Ceil",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ClipByValue",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"clipValueMin",type:"number"},{start:2,name:"clipValueMax",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Complex",category:"basic_math",inputs:[{start:0,name:"real",type:"tensor"},{start:1,name:"imag",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ComplexAbs",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cos",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cosh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Elu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Exp",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Floor",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Log",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Imag",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"Tout",name:"outputType",type:"dtype",notSupported:!0}]},{tfOpName:"Neg",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Real",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"Tout",name:"outputType",type:"dtype",notSupported:!0}]},{tfOpName:"Prelu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"alpha",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Relu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Relu6",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Selu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sigmoid",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sin",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sinh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sqrt",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Rsqrt",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Square",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Tan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Tanh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sign",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Round",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Expm1",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Log1p",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Reciprocal",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Softplus",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Asinh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Acosh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atanh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Erf",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LeakyRelu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"alpha",name:"alpha",type:"number",defaultValue:.2},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"IsNan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"IsFinite",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"IsInf",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}],YT=Object.freeze(Object.defineProperty({__proto__:null,json:XT},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const QT=[{tfOpName:"EmptyTensorList",category:"control",inputs:[{start:0,name:"elementShape",type:"shape"},{start:1,name:"maxNumElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"LoopCond",category:"control",inputs:[{start:0,name:"pred",type:"tensor"}]},{tfOpName:"Switch",category:"control",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"pred",type:"tensor"}]},{tfOpName:"Merge",category:"control",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}]},{tfOpName:"Enter",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"frame_name",name:"frameName",type:"string"},{tfName:"is_constant",name:"isConstant",type:"bool"}]},{tfOpName:"Exit",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"NextIteration",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayV3",category:"control",inputs:[{start:0,name:"size",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"dynamic_size",name:"dynamicSize",type:"bool"},{tfName:"clear_after_read",name:"clearAfterRead",type:"bool"},{tfName:"identical_element_shapes",name:"identicalElementShapes",type:"bool"},{tfName:"tensor_array_name",name:"name",type:"string"}]},{tfOpName:"TensorArrayWriteV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"tensor",type:"tensor"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayReadV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayGatherV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape",name:"elementShape",type:"shape"}]},{tfOpName:"TensorArrayScatterV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"tensor",type:"tensor"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"TensorArrayConcatV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape_except0",name:"elementShapeExcept0",type:"shape",notSupported:!0}]},{tfOpName:"TensorArraySplitV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"tensor",type:"tensor"},{start:2,name:"lengths",type:"number[]"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"TensorArraySizeV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"flowIn",type:"number"}]},{tfOpName:"TensorArrayCloseV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"}]},{tfOpName:"StatelessIf",category:"control",inputs:[{start:0,name:"cond",type:"tensor"},{start:1,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"then_branch",name:"thenBranch",type:"func"},{tfName:"else_branch",name:"elseBranch",type:"func"}]},{tfOpName:"If",category:"control",inputs:[{start:0,name:"cond",type:"tensor"},{start:1,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"then_branch",name:"thenBranch",type:"func"},{tfName:"else_branch",name:"elseBranch",type:"func"}]},{tfOpName:"StatelessWhile",category:"control",inputs:[{start:0,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"cond",name:"cond",type:"func"},{tfName:"body",name:"body",type:"func"}]},{tfOpName:"While",category:"control",inputs:[{start:0,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"cond",name:"cond",type:"func"},{tfName:"body",name:"body",type:"func"}]},{tfOpName:"TensorListScatter",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListScatterV2",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"},{start:3,name:"numElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListGather",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListGetItem",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListSetItem",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"tensor",type:"tensor"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListReserve",category:"control",inputs:[{start:0,name:"elementShape",type:"shape"},{start:1,name:"numElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListFromTensor",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListStack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"},{tfName:"num_elements",name:"numElements",type:"dtype"}]},{tfOpName:"TensorListSplit",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"elementShape",type:"shape"},{start:2,name:"lengths",type:"number[]"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListConcat",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}],attrs:[{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListConcatV2",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}],attrs:[{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListPopBack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListPushBack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"tensor",type:"tensor"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListLength",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}]},{tfOpName:"TensorListResize",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"size",type:"number"}]}],JT=Object.freeze(Object.defineProperty({__proto__:null,json:QT},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ZT=[{tfOpName:"AvgPool",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPool",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[],notSupported:!0},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPoolWithArgmax",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"include_batch_in_index",name:"includeBatchInIndex",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AvgPool3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPool3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Conv1D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"stride",name:"stride",type:"number"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NWC"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"dilation",name:"dilation",type:"number",defaultValue:1}]},{tfOpName:"Conv2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"useCudnnOnGpu",name:"useCudnnOnGpu",type:"bool"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"_FusedConv2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"use_cudnn_on_gpu",name:"useCudnnOnGpu",type:"bool",defaultValue:!0},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]",defaultValue:[1,1,1,1]},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:1e-4},{tfName:"leakyrelu_alpha",name:"leakyreluAlpha",type:"number",defaultValue:.2}]},{tfOpName:"Conv2DBackpropInput",category:"convolution",inputs:[{start:2,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:0,name:"outputShape",type:"number[]"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]",notSupported:!0}]},{tfOpName:"DepthwiseConv2d",category:"convolution",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"DepthwiseConv2dNative",category:"convolution",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"FusedDepthwiseConv2dNative",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]",defaultValue:[1,1,1,1]},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]}]},{tfOpName:"Conv3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"Dilation2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"rates",name:"dilations",type:"number[]"},{tfName:"padding",name:"pad",type:"string"}]}],eE=Object.freeze(Object.defineProperty({__proto__:null,json:ZT},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const tE=[{tfOpName:"Fill",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"},{start:1,name:"value",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"LinSpace",category:"creation",inputs:[{start:0,name:"start",type:"number"},{start:1,name:"stop",type:"number"},{start:2,name:"num",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"OneHot",category:"creation",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"depth",type:"number"},{start:2,name:"onValue",type:"number",defaultValue:1},{start:3,name:"offValue",type:"number",defaultValue:0}],attrs:[{tfName:"axis",name:"axis",type:"number",notSupported:!0},{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"Ones",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"OnesLike",category:"creation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"RandomStandardNormal",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"RandomUniform",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"minval",name:"minval",type:"number",defaultValue:0},{tfName:"maxval",name:"maxval",type:"number",defaultValue:1},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"RandomUniformInt",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"minval",name:"minval",type:"number"},{tfName:"maxval",name:"maxval",type:"number"},{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0}]},{tfOpName:"Range",category:"creation",inputs:[{start:0,name:"start",type:"number"},{start:1,name:"stop",type:"number"},{start:2,name:"step",type:"number",defaultValue:0}],attrs:[{tfName:"Tidx",name:"dtype",type:"dtype"}]},{tfOpName:"TruncatedNormal",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"means",name:"mean",type:"number",defaultValue:0},{tfName:"stddev",name:"stdDev",type:"number",defaultValue:1},{tfName:"seed",name:"seed",type:"number"},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"Zeros",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"ZerosLike",category:"creation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"Multinomial",category:"creation",inputs:[{start:0,name:"logits",type:"tensor"},{start:1,name:"numSamples",type:"number"}],attrs:[{tfName:"seed",name:"seed",type:"number"},{tfName:"seed2",name:"seed2",type:"number"},{tfName:"T",name:"dtype",type:"dtype"},{tfName:"output_dtype",name:"output_dtype",type:"dtype"}]}],nE=Object.freeze(Object.defineProperty({__proto__:null,json:tE},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const rE=[{tfOpName:"NonMaxSuppressionV2",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"}]},{tfOpName:"NonMaxSuppressionV3",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"}]},{tfOpName:"NonMaxSuppressionV4",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"T_threshold",name:"threshold",type:"dtype",notSupported:!0},{tfName:"pad_to_max_output_size",name:"padToMaxOutputSize",type:"bool"}]},{tfOpName:"NonMaxSuppressionV5",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"},{start:5,name:"softNmsSigma",type:"number"}]},{tfOpName:"Where",category:"dynamic",inputs:[{start:0,name:"condition",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ListDiff",category:"dynamic",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}],sE=Object.freeze(Object.defineProperty({__proto__:null,json:rE},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const iE=[{tfOpName:"LowerBound",category:"evaluation",inputs:[{start:0,name:"sortedSequence",type:"tensor"},{start:1,name:"values",type:"tensor"}]},{tfOpName:"TopKV2",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"k",type:"number"}],attrs:[{tfName:"sorted",name:"sorted",type:"bool"}]},{tfOpName:"UpperBound",category:"evaluation",inputs:[{start:0,name:"sortedSequence",type:"tensor"},{start:1,name:"values",type:"tensor"}]},{tfOpName:"Unique",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"UniqueV2",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]}],oE=Object.freeze(Object.defineProperty({__proto__:null,json:iE},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const aE=[{tfOpName:"PlaceholderWithDefault",category:"graph",inputs:[{start:0,name:"default",type:"tensor"}],attrs:[{tfName:"shape",name:"shape",type:"shape"},{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"Placeholder",category:"graph",attrs:[{tfName:"shape",name:"shape",type:"shape"},{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"Const",category:"graph"},{tfOpName:"Identity",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"IdentityN",category:"graph",inputs:[{start:0,end:0,name:"x",type:"tensors"}]},{tfOpName:"Snapshot",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Rank",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Size",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Shape",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"ShapeN",category:"graph",inputs:[{start:0,end:0,name:"x",type:"tensors"}]},{tfOpName:"Print",category:"graph",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"data",type:"tensors"}],attrs:[{tfName:"message",name:"message",type:"string"},{tfName:"first_n",name:"firstN",type:"number",notSupported:!0},{tfName:"summarize",name:"summarize",type:"number",defaultValue:3}]},{tfOpName:"NoOp",category:"graph",inputs:[]},{tfOpName:"StopGradient",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"FakeQuantWithMinMaxVars",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"min",name:"min",type:"number"},{tfName:"max",name:"max",type:"number"}]}],uE=Object.freeze(Object.defineProperty({__proto__:null,json:aE},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const lE=[{tfOpName:"HashTable",category:"hash_table",inputs:[],attrs:[{tfName:"shared_name",name:"sharedName",type:"string"},{tfName:"use_node_name_sharing",name:"useNodeNameSharing",type:"bool"},{tfName:"key_dtype",name:"keyDType",type:"dtype"},{tfName:"value_dtype",name:"valueDType",type:"dtype"}]},{tfOpName:"HashTableV2",category:"hash_table",inputs:[],attrs:[{tfName:"shared_name",name:"sharedName",type:"string"},{tfName:"use_node_name_sharing",name:"useNodeNameSharing",type:"bool"},{tfName:"key_dtype",name:"keyDType",type:"dtype"},{tfName:"value_dtype",name:"valueDType",type:"dtype"}]},{tfOpName:"LookupTableImport",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableImportV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableFind",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableFindV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableSize",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"}]},{tfOpName:"LookupTableSizeV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"}]},{tfOpName:"InitializeTable",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}]},{tfOpName:"InitializeTableV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}]}],cE=Object.freeze(Object.defineProperty({__proto__:null,json:lE},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const fE=[{tfOpName:"ResizeBilinear",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"size",type:"number[]"}],attrs:[{tfName:"align_corners",name:"alignCorners",type:"bool"},{tfName:"half_pixel_centers",name:"halfPixelCenters",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ResizeNearestNeighbor",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"size",type:"number[]"}],attrs:[{tfName:"align_corners",name:"alignCorners",type:"bool"},{tfName:"half_pixel_centers",name:"halfPixelCenters",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"CropAndResize",category:"image",inputs:[{start:0,name:"image",type:"tensor"},{start:1,name:"boxes",type:"tensor"},{start:2,name:"boxInd",type:"tensor"},{start:3,name:"cropSize",type:"number[]"}],attrs:[{tfName:"method",name:"method",type:"string"},{tfName:"extrapolation_value",name:"extrapolationValue",type:"number"}]},{tfOpName:"ImageProjectiveTransformV3",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"transforms",type:"tensor"},{start:2,name:"outputShape",type:"number[]"},{start:3,name:"fillValue",type:"number"}],attrs:[{tfName:"interpolation",name:"interpolation",type:"string"},{tfName:"fill_mode",name:"fillMode",type:"string"}]}],pE=Object.freeze(Object.defineProperty({__proto__:null,json:fE},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const hE=[{tfOpName:"Equal",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"NotEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Greater",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"GreaterEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Less",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LessEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalAnd",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalNot",category:"logical",inputs:[{start:0,name:"a",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalOr",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Select",category:"logical",inputs:[{start:0,name:"condition",type:"tensor"},{start:1,name:"a",type:"tensor"},{start:2,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SelectV2",category:"logical",inputs:[{start:0,name:"condition",type:"tensor"},{start:1,name:"a",type:"tensor"},{start:2,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BitwiseAnd",category:"logical",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}]}],dE=Object.freeze(Object.defineProperty({__proto__:null,json:hE},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const mE=[{tfOpName:"_FusedMatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:1e-4},{tfName:"transpose_a",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"transpose_b",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"leakyrelu_alpha",name:"leakyreluAlpha",type:"number",defaultValue:.2},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"transpose_a",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"transpose_b",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BatchMatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"adj_x",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"adj_y",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BatchMatMulV2",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"adj_x",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"adj_y",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Transpose",category:"matrices",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"perm",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Einsum",category:"matrices",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}],attrs:[{tfName:"equation",name:"equation",type:"string"},{tfName:"N",name:"n",type:"number",defaultValue:2},{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"MatrixBandPart",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"numLower",type:"tensor"},{start:1,name:"numUpper",type:"tensor"}]}],gE=Object.freeze(Object.defineProperty({__proto__:null,json:mE},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const yE=[{tfOpName:"EuclideanNorm",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool",defaultValue:!1}]},{tfOpName:"FusedBatchNorm",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"FusedBatchNormV2",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"FusedBatchNormV3",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"LRN",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"depth_radius",name:"radius",type:"number",defaultValue:5},{tfName:"bias",name:"bias",type:"number",defaultValue:1},{tfName:"alpha",name:"alpha",type:"number",defaultValue:1},{tfName:"beta",name:"beta",type:"number",defaultValue:.5}]},{tfOpName:"Softmax",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"LogSoftmax",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}]}],vE=Object.freeze(Object.defineProperty({__proto__:null,json:yE},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const wE=[{tfOpName:"Bincount",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"size",type:"number"},{start:2,name:"weights",type:"tensor"}]},{tfOpName:"DenseBincount",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"size",type:"number"},{start:2,name:"weights",type:"tensor"}],attrs:[{tfName:"binary_output",name:"binaryOutput",type:"bool"}]},{tfOpName:"Max",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Mean",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Min",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Sum",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"All",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Any",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"ArgMax",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"ArgMin",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"Prod",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cumprod",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}],attrs:[{tfName:"exclusive",name:"exclusive",type:"bool"},{tfName:"reverse",name:"reverse",type:"bool"}]},{tfOpName:"Cumsum",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}],attrs:[{tfName:"exclusive",name:"exclusive",type:"bool"},{tfName:"reverse",name:"reverse",type:"bool"}]}],SE=Object.freeze(Object.defineProperty({__proto__:null,json:wE},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const bE=[{tfOpName:"ConcatV2",category:"slice_join",inputs:[{start:0,end:-1,name:"tensors",type:"tensors"},{start:-1,name:"axis",type:"number"}],attrs:[{tfName:"N",name:"n",type:"number",defaultValue:2}]},{tfOpName:"Concat",category:"slice_join",inputs:[{start:1,end:0,name:"tensors",type:"tensors"},{start:0,name:"axis",type:"number"}],attrs:[{tfName:"N",name:"n",type:"number",defaultValue:2}]},{tfOpName:"GatherV2",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"axis",type:"number",defaultValue:0}],attrs:[{tfName:"batch_dims",name:"batchDims",type:"number",defaultValue:0}]},{tfOpName:"Gather",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",notSupported:!0}]},{tfOpName:"Reverse",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"dims",type:"bool[]"}]},{tfOpName:"ReverseV2",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}]},{tfOpName:"Slice",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"begin",type:"number[]"},{start:2,name:"size",type:"number[]"}]},{tfOpName:"StridedSlice",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"begin",type:"number[]"},{start:2,name:"end",type:"number[]"},{start:3,name:"strides",type:"number[]"}],attrs:[{tfName:"begin_mask",name:"beginMask",type:"number",defaultValue:0},{tfName:"end_mask",name:"endMask",type:"number",defaultValue:0},{tfName:"new_axis_mask",name:"newAxisMask",type:"number",defaultValue:0},{tfName:"ellipsis_mask",name:"ellipsisMask",type:"number",defaultValue:0},{tfName:"shrink_axis_mask",name:"shrinkAxisMask",type:"number",defaultValue:0}]},{tfOpName:"Pack",category:"slice_join",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}],attrs:[{tfName:"axis",name:"axis",type:"number",defaultValue:0}]},{tfOpName:"Unpack",category:"slice_join",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"axis",name:"axis",type:"number",defaultValue:0},{tfName:"num",name:"num",type:"number",defaultValue:0,notSupported:!0}]},{tfOpName:"Tile",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"reps",type:"number[]"}]},{tfOpName:"Split",category:"slice_join",inputs:[{start:0,name:"axis",type:"number",defaultValue:0},{start:1,name:"x",type:"tensor"}],attrs:[{tfName:"num_split",name:"numOrSizeSplits",type:"number",defaultValue:1}]},{tfOpName:"SplitV",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"numOrSizeSplits",type:"number[]"},{start:2,name:"axis",type:"number",defaultValue:0}]},{tfOpName:"ScatterNd",category:"slice_join",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"values",type:"tensor"},{start:2,name:"shape",type:"number[]"}]},{tfOpName:"GatherNd",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"}]},{tfOpName:"SparseToDense",category:"slice_join",inputs:[{start:0,name:"sparseIndices",type:"tensor"},{start:1,name:"outputShape",type:"number[]"},{start:2,name:"sparseValues",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",defaultValue:!1,notSupported:!0}]},{tfOpName:"TensorScatterUpdate",category:"slice_join",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"values",type:"tensor"}]}],NE=Object.freeze(Object.defineProperty({__proto__:null,json:bE},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const kE=[{tfOpName:"SparseFillEmptyRows",category:"sparse",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"values",type:"tensor"},{start:2,name:"denseShape",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}]},{tfOpName:"SparseReshape",category:"sparse",inputs:[{start:0,name:"inputIndices",type:"tensor"},{start:1,name:"inputShape",type:"tensor"},{start:2,name:"newShape",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SparseSegmentMean",category:"sparse",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"segmentIds",type:"tensor"}]},{tfOpName:"SparseSegmentSum",category:"sparse",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"segmentIds",type:"tensor"}]}],TE=Object.freeze(Object.defineProperty({__proto__:null,json:kE},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const EE=[{tfOpName:"FFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"IFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"RFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"fft_length",type:"number",notSupported:!0}]},{tfOpName:"IRFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"fft_length",type:"number",notSupported:!0}]}],xE=Object.freeze(Object.defineProperty({__proto__:null,json:EE},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const _E=[{tfOpName:"StaticRegexReplace",category:"string",inputs:[{start:0,name:"input",type:"tensor"}],attrs:[{tfName:"pattern",name:"pattern",type:"string"},{tfName:"rewrite",name:"rewrite",type:"string"},{tfName:"replace_global",name:"replaceGlobal",type:"bool"}]},{tfOpName:"StringNGrams",category:"string",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"dataSplits",type:"tensor"}],attrs:[{tfName:"separator",name:"separator",type:"string"},{tfName:"ngram_widths",name:"nGramWidths",type:"number[]"},{tfName:"left_pad",name:"leftPad",type:"string"},{tfName:"right_pad",name:"rightPad",type:"string"},{tfName:"pad_width",name:"padWidth",type:"number"},{tfName:"preserve_short_sequences",name:"preserveShortSequences",type:"bool"}],outputs:["ngrams","ngrams_splits"]},{tfOpName:"StringSplit",category:"string",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"delimiter",type:"tensor"}],attrs:[{tfName:"skip_empty",name:"skipEmpty",type:"bool"}],outputs:["indices","values","shape"]},{tfOpName:"StringToHashBucketFast",category:"string",inputs:[{start:0,name:"input",type:"tensor"}],attrs:[{tfName:"num_buckets",name:"numBuckets",type:"number"}]}],$E=Object.freeze(Object.defineProperty({__proto__:null,json:_E},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const IE=[{tfOpName:"Cast",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"SrcT",name:"sdtype",type:"dtype",notSupported:!0},{tfName:"DstT",name:"dtype",type:"dtype"}]},{tfOpName:"ExpandDims",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"MirrorPad",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"}],attrs:[{tfName:"mode",name:"mode",type:"string"}]},{tfOpName:"Pad",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"}],attrs:[{tfName:"constant_value",name:"constantValue",type:"number",defaultValue:0}]},{tfOpName:"PadV2",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"},{start:2,name:"constantValue",type:"number",defaultValue:0}]},{tfOpName:"Reshape",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}]},{tfOpName:"EnsureShape",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}]},{tfOpName:"Squeeze",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"axis",tfDeprecatedName:"squeeze_dims",name:"axis",type:"number[]"}]},{tfOpName:"SpaceToBatchND",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"blockShape",type:"number[]"},{start:2,name:"paddings",type:"number[]"}]},{tfOpName:"BatchToSpaceND",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"blockShape",type:"number[]"},{start:2,name:"crops",type:"number[]"}]},{tfOpName:"DepthToSpace",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"block_size",name:"blockSize",type:"number"},{tfName:"data_format",name:"dataFormat",type:"string"}]},{tfOpName:"BroadcastTo",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}],attrs:[]},{tfOpName:"BroadcastArgs",category:"transformation",inputs:[{start:0,name:"s0",type:"tensor"},{start:1,name:"s1",type:"tensor"}],attrs:[]}],AE=Object.freeze(Object.defineProperty({__proto__:null,json:IE},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class op{static get Instance(){return this._instance||(this._instance=new this)}constructor(){const t=[qT,YT,JT,eE,nE,sE,oE,uE,cE,pE,dE,gE,vE,SE,NE,TE,xE,$E,AE],n=[].concat(...t.map(r=>r.json));this.opMappers=n.reduce((r,s)=>(r[s.tfOpName]=s,r),{})}transformGraph(t,n={}){const r=t.node,s=[],i=[],o=[],a=r.reduce((E,_)=>(E[_.name]=this.mapNode(_),_.op.startsWith("Placeholder")?s.push(E[_.name]):_.op==="Const"?i.push(E[_.name]):(_.input==null||_.input.length===0)&&o.push(E[_.name]),E),{});let u=[];const l=[];let c={},p={};n!=null&&(c=this.mapSignatureEntries(n.inputs),p=this.mapSignatureEntries(n.outputs));const d=Object.keys(a);d.forEach(E=>{const _=a[E];_.inputNames.forEach((N,x)=>{const[$,,F]=ur(N),z=a[$];if(z.outputs!=null){const M=z.outputs.indexOf(F);if(M!==-1){const V=`${$}:${M}`;_.inputNames[x]=V}}_.inputs.push(z),z.children.push(_)})}),Object.keys(p).length===0?d.forEach(E=>{const _=a[E];_.children.length===0&&l.push(_)}):Object.keys(p).forEach(E=>{const[_]=ur(E),N=a[_];N!=null&&(N.signatureKey=p[E],l.push(N))}),Object.keys(c).length>0?Object.keys(c).forEach(E=>{const[_]=ur(E),N=a[_];N&&(N.signatureKey=c[E],u.push(N))}):u=s;let w={};t.library!=null&&t.library.function!=null&&(w=t.library.function.reduce((E,_)=>(E[_.signature.name]=this.mapFunction(_),E),{}));const b={nodes:a,inputs:u,outputs:l,weights:i,placeholders:s,signature:n,functions:w};return o.length>0&&(b.initNodes=o),b}mapSignatureEntries(t){return Object.keys(t||{}).reduce((n,r)=>(n[t[r].name]=r,n),{})}mapNode(t){const n=f0(t.op)||this.opMappers[t.op]||{};t.attr==null&&(t.attr={});const r={name:t.name,op:t.op,category:n.category,inputNames:(t.input||[]).map(s=>s.startsWith("^")?s.slice(1):s),inputs:[],children:[],inputParams:{},attrParams:{},rawAttrs:t.attr,outputs:n.outputs};return n.inputs!=null&&(r.inputParams=n.inputs.reduce((s,i)=>(s[i.name]={type:i.type,inputIndexStart:i.start,inputIndexEnd:i.end},s),{})),n.attrs!=null&&(r.attrParams=n.attrs.reduce((s,i)=>{const o=i.type;let a;switch(i.type){case"string":a=H1(t.attr,i.tfName,i.defaultValue),a===void 0&&i.tfDeprecatedName&&(a=H1(t.attr,i.tfDeprecatedName,i.defaultValue));break;case"string[]":a=J1(t.attr,i.tfName,i.defaultValue),a===void 0&&i.tfDeprecatedName&&(a=J1(t.attr,i.tfDeprecatedName,i.defaultValue));break;case"number":a=G1(t.attr,i.tfName,i.defaultValue||0),a===void 0&&i.tfDeprecatedName&&(a=G1(t.attr,i.tfDeprecatedName,i.defaultValue));break;case"number[]":a=Q1(t.attr,i.tfName,i.defaultValue),a===void 0&&i.tfDeprecatedName&&(a=Q1(t.attr,i.tfDeprecatedName,i.defaultValue));break;case"bool":a=K1(t.attr,i.tfName,i.defaultValue),a===void 0&&i.tfDeprecatedName&&(a=K1(t.attr,i.tfDeprecatedName,i.defaultValue));break;case"bool[]":a=e2(t.attr,i.tfName,i.defaultValue),a===void 0&&i.tfDeprecatedName&&(a=e2(t.attr,i.tfDeprecatedName,i.defaultValue));break;case"shape":a=Y1(t.attr,i.tfName,i.defaultValue),a===void 0&&i.tfDeprecatedName&&(a=Y1(t.attr,i.tfDeprecatedName,i.defaultValue));break;case"shape[]":a=Z1(t.attr,i.tfName,i.defaultValue),a===void 0&&i.tfDeprecatedName&&(a=Z1(t.attr,i.tfDeprecatedName,i.defaultValue));break;case"dtype":a=q1(t.attr,i.tfName,i.defaultValue),a===void 0&&i.tfDeprecatedName&&(a=q1(t.attr,i.tfDeprecatedName,i.defaultValue));break;case"dtype[]":a=X1(t.attr,i.tfName,i.defaultValue),a===void 0&&i.tfDeprecatedName&&(a=X1(t.attr,i.tfDeprecatedName,i.defaultValue));break;case"func":a=ap(t.attr,i.tfName,i.defaultValue),a===void 0&&i.tfDeprecatedName&&(a=ap(t.attr,i.tfDeprecatedName,i.defaultValue));break;case"tensor":case"tensors":break;default:throw new Error(`Unsupported param type: ${i.type} for op: ${t.op}`)}return s[i.name]={value:a,type:o},s},{})),r}mapFunction(t){const n=t.nodeDef,r=[],s=[];let i={};n!=null&&(i=n.reduce((p,d)=>(p[d.name]=this.mapNode(d),d.op==="Const"&&s.push(p[d.name]),p),{}));const o=[],a=[];t.signature.inputArg.forEach(p=>{const[d]=ur(p.name),w={name:d,op:"Placeholder",inputs:[],inputNames:[],category:"graph",inputParams:{},attrParams:{dtype:{value:_f(p.type),type:"dtype"}},children:[]};w.signatureKey=p.name,o.push(w),i[d]=w}),Object.keys(i).forEach(p=>{const d=i[p];d.inputNames.forEach((w,b)=>{const[E,,_]=ur(w),N=i[E];if(N.outputs!=null){const x=N.outputs.indexOf(_);if(x!==-1){const $=`${E}:${x}`;d.inputNames[b]=$}}d.inputs.push(N),N.children.push(d)})});const l=t.ret;t.signature.outputArg.forEach(p=>{const[d,w]=ur(l[p.name]),b=i[d];b!=null&&(b.defaultOutput=w,a.push(b))});const c=this.mapArgsToSignature(t);return{nodes:i,inputs:o,outputs:a,weights:s,placeholders:r,signature:c}}mapArgsToSignature(t){return{methodName:t.signature.name,inputs:t.signature.inputArg.reduce((n,r)=>(n[r.name]=this.mapArgToTensorInfo(r),n),{}),outputs:t.signature.outputArg.reduce((n,r)=>(n[r.name]=this.mapArgToTensorInfo(r,t.ret),n),{})}}mapArgToTensorInfo(t,n){let r=t.name;return n!=null&&(r=n[r]),{name:r,dtype:t.type}}}function OE(e){const t=Te().global;if(typeof t.atob<"u")return t.atob(e);if(typeof Buffer<"u")return new Buffer(e,"base64").toString();throw new Error("Unable to decode base64 in this environment. Missing built-in atob() or Buffer()")}function p0(e,t){const n=Array.isArray(e)?String.fromCharCode.apply(null,e):OE(e);return t?n:n.toLowerCase()}function H1(e,t,n,r=!1){const s=e[t];return s!=null?p0(s.s,r):n}function K1(e,t,n){const r=e[t];return r?r.b:n}function G1(e,t,n){const r=e[t]||{},s=r.i!=null?r.i:r.f!=null?r.f:n;return typeof s=="number"?s:parseInt(s,10)}function _f(e){switch(typeof e=="string"&&(e=Ht[e]),e){case Ht.DT_FLOAT:case Ht.DT_HALF:return"float32";case Ht.DT_INT32:case Ht.DT_INT64:case Ht.DT_INT8:case Ht.DT_UINT8:return"int32";case Ht.DT_BOOL:return"bool";case Ht.DT_DOUBLE:return"float32";case Ht.DT_STRING:return"string";case Ht.DT_COMPLEX64:case Ht.DT_COMPLEX128:return"complex64";default:return null}}function ap(e,t,n){const r=e[t];return r&&r.func?r.func.name:n}function q1(e,t,n){const r=e[t];return r&&r.type?_f(r.type):n}function X1(e,t,n){const r=e[t];return r&&r.list&&r.list.type?r.list.type.map(s=>_f(s)):n}function h0(e){if(!e.unknownRank)return e.dim!=null?e.dim.map(t=>typeof t.size=="number"?t.size:parseInt(t.size,10)):[]}function Y1(e,t,n){const r=e[t];return r&&r.shape?h0(r.shape):n}function Q1(e,t,n){const r=e[t];return r?((r.list.f&&r.list.f.length?r.list.f:r.list.i)||[]).map(s=>typeof s=="number"?s:parseInt(s,10)):n}function J1(e,t,n,r=!1){const s=e[t];return s&&s.list&&s.list.s?s.list.s.map(i=>p0(i,r)):n}function Z1(e,t,n){const r=e[t];return r&&r.list&&r.list.shape?r.list.shape.map(s=>h0(s)):n}function e2(e,t,n){const r=e[t];return r&&r.list&&r.list.b?r.list.b:n}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class CE{constructor(t,n,r){this.node=t,this.tensorMap=n,this.context=r,this.inputs=[],this.attrs={},this.inputs=t.inputNames.map(s=>this.getInput(s)),t.rawAttrs!=null&&(this.attrs=Object.keys(t.rawAttrs).reduce((s,i)=>(s[i]=this.getAttr(i),s),{}))}getInput(t){return yt(t,this.tensorMap,this.context)}getAttr(t,n){const r=this.node.rawAttrs[t];if(r.tensor!=null)return yt(t,this.tensorMap,this.context);if(r.i!=null||r.f!=null)return G1(this.node.rawAttrs,t,n);if(r.s!=null)return H1(this.node.rawAttrs,t,n);if(r.b!=null)return K1(this.node.rawAttrs,t,n);if(r.shape!=null)return Y1(this.node.rawAttrs,t,n);if(r.type!=null)return q1(this.node.rawAttrs,t,n);if(r.list!=null){if(r.list.i!=null||r.list.f!=null)return Q1(this.node.rawAttrs,t,n);if(r.list.s!=null)return J1(this.node.rawAttrs,t,n);if(r.list.shape!=null)return Z1(this.node.rawAttrs,t,n);if(r.list.b!=null)return e2(this.node.rawAttrs,t,n);if(r.list.type!=null)return X1(this.node.rawAttrs,t,n)}return n}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const St=Object.freeze(Object.defineProperty({__proto__:null,OP_SCOPE_SUFFIX:i4,abs:rn,acos:y8,acosh:w8,add:le,addN:b8,all:k8,any:E8,argMax:_8,argMin:I8,asin:O8,asinh:D8,atan:P8,atan2:L8,atanh:M8,avgPool:S4,avgPool3d:G8,basicLSTMCell:e9,batchNorm:El,batchNorm2d:i9,batchNorm3d:a9,batchNorm4d:l9,batchToSpaceND:b4,bincount:N4,bitwiseAnd:p9,booleanMaskAsync:eN,broadcastArgs:d9,broadcastTo:ku,buffer:br,cast:je,ceil:y9,clipByValue:k4,clone:es,complex:is,concat:wt,concat1d:S9,concat2d:N9,concat3d:T9,concat4d:x9,conv1d:I9,conv2d:xl,conv2dTranspose:C9,conv3d:F9,conv3dTranspose:z9,cos:j9,cosh:U9,cosineWindow:wf,cumprod:W9,cumsum:K9,denseBincount:q9,depthToSpace:Y9,depthwiseConv2d:sf,diag:Z9,dilation2d:tv,div:ke,divNoNan:av,dot:lv,dropout:hN,einsum:gi,elu:x4,enclosingPowerOfTwo:Z4,ensureShape:hv,equal:E4,erf:mv,euclideanNorm:Ev,exp:kr,expandDims:bn,expm1:Iv,eye:$4,fft:yf,fill:ba,floor:I4,floorDiv:w4,fused:$N,gather:A4,gatherND:cN,greater:Il,greaterEqual:O4,ifft:rl,imag:Al,image:Ji,inTopKAsync:mN,irfft:G4,isFinite:zv,isInf:jv,isNaN:Uv,leakyRelu:C4,less:U1,lessEqual:of,linalg:cT,linspace:Kv,localResponseNormalization:qv,log:fa,log1p:D4,logSigmoid:tw,logSoftmax:sw,logSumExp:P4,logicalAnd:el,logicalNot:R4,logicalOr:L4,logicalXor:cw,losses:fT,lowerBound:pw,matMul:De,max:Ri,maxPool:z4,maxPool3d:mw,maxPoolWithArgmax:yw,maximum:M4,mean:tl,meshgrid:Sw,min:B1,minimum:nl,mirrorPad:kw,mod:Ew,moments:_w,movingAverage:rN,mul:te,multiRNNCell:Iw,multinomial:Ow,neg:nr,norm:$l,notEqual:j4,oneHot:Fw,ones:Fs,onesLike:Rw,op:P,outerProduct:zw,pad:Na,pad1d:Bw,pad2d:Vw,pad3d:Hw,pad4d:Gw,pool:Jw,pow:ca,prelu:U4,print:v4,prod:tS,raggedGather:rS,raggedRange:iS,raggedTensorToTensor:aS,rand:lS,randomGamma:IS,randomNormal:W4,randomStandardNormal:CS,randomUniform:gf,randomUniformInt:PS,range:pa,real:ha,reciprocal:zS,relu:Ol,relu6:H4,reshape:q,reverse:qs,reverse1d:VS,reverse2d:HS,reverse3d:GS,reverse4d:XS,rfft:vf,round:K4,rsqrt:JS,scalar:$e,scatterND:iN,searchSorted:af,selu:eb,separableConv2d:nb,setdiff1dAsync:sb,sigmoid:zs,sign:ob,signal:lT,sin:ub,sinh:cb,slice:ye,slice1d:pb,slice2d:db,slice3d:gb,slice4d:vb,softmax:Sb,softplus:F4,spaceToBatchND:B4,sparse:pT,sparseToDense:uN,spectral:uT,split:da,sqrt:Nr,square:Ln,squaredDifference:q4,squeeze:ct,stack:Er,step:X4,stridedSlice:Ob,string:hT,sub:ve,sum:ze,tan:Db,tanh:j1,tensor:tr,tensor1d:Tt,tensor2d:ns,tensor3d:Y4,tensor4d:Fb,tensor5d:Pb,tensor6d:Rb,tensorScatterUpdate:Mb,tile:Vo,topk:Bb,transpose:V1,truncatedNormal:Vb,unique:Hb,unsortedSegmentSum:Gb,unstack:ti,upperBound:Xb,variable:Yb,where:ts,whereAsync:J4,zeros:Ki,zerosLike:an},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const DE=(e,t,n,r=St)=>{switch(e.op){case"BiasAdd":case"AddV2":case"Add":return[r.add(m("a",e,t,n),m("b",e,t,n))];case"AddN":return[r.addN(m("tensors",e,t,n))];case"FloorMod":case"Mod":return[r.mod(m("a",e,t,n),m("b",e,t,n))];case"Mul":return[r.mul(m("a",e,t,n),m("b",e,t,n))];case"RealDiv":case"Div":return[r.div(m("a",e,t,n),m("b",e,t,n))];case"DivNoNan":return[r.divNoNan(m("a",e,t,n),m("b",e,t,n))];case"FloorDiv":return[r.floorDiv(m("a",e,t,n),m("b",e,t,n))];case"Sub":return[r.sub(m("a",e,t,n),m("b",e,t,n))];case"Minimum":return[r.minimum(m("a",e,t,n),m("b",e,t,n))];case"Maximum":return[r.maximum(m("a",e,t,n),m("b",e,t,n))];case"Pow":return[r.pow(m("a",e,t,n),m("b",e,t,n))];case"SquaredDifference":return[r.squaredDifference(m("a",e,t,n),m("b",e,t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const FE=(e,t,n,r=St)=>{switch(e.op){case"Abs":case"ComplexAbs":return[r.abs(m("x",e,t,n))];case"Acos":return[r.acos(m("x",e,t,n))];case"Acosh":return[r.acosh(m("x",e,t,n))];case"Asin":return[r.asin(m("x",e,t,n))];case"Asinh":return[r.asinh(m("x",e,t,n))];case"Atan":return[r.atan(m("x",e,t,n))];case"Atan2":return[r.atan2(m("x",e,t,n),m("y",e,t,n))];case"Atanh":return[r.atanh(m("x",e,t,n))];case"Ceil":return[r.ceil(m("x",e,t,n))];case"Complex":return[r.complex(m("real",e,t,n),m("imag",e,t,n))];case"Cos":return[r.cos(m("x",e,t,n))];case"Cosh":return[r.cosh(m("x",e,t,n))];case"Elu":return[r.elu(m("x",e,t,n))];case"Erf":return[r.erf(m("x",e,t,n))];case"Exp":return[r.exp(m("x",e,t,n))];case"Expm1":return[r.expm1(m("x",e,t,n))];case"Floor":return[r.floor(m("x",e,t,n))];case"Log":return[r.log(m("x",e,t,n))];case"Log1p":return[r.log1p(m("x",e,t,n))];case"Imag":return[r.imag(m("x",e,t,n))];case"Neg":return[r.neg(m("x",e,t,n))];case"Reciprocal":return[r.reciprocal(m("x",e,t,n))];case"Real":return[r.real(m("x",e,t,n))];case"Relu":return[r.relu(m("x",e,t,n))];case"Round":return[r.round(m("x",e,t,n))];case"Selu":return[r.selu(m("x",e,t,n))];case"Sigmoid":return[r.sigmoid(m("x",e,t,n))];case"Sin":return[r.sin(m("x",e,t,n))];case"Sign":return[r.sign(m("x",e,t,n))];case"Sinh":return[r.sinh(m("x",e,t,n))];case"Softplus":return[r.softplus(m("x",e,t,n))];case"Sqrt":return[r.sqrt(m("x",e,t,n))];case"Square":return[r.square(m("x",e,t,n))];case"Tanh":return[r.tanh(m("x",e,t,n))];case"Tan":return[r.tan(m("x",e,t,n))];case"ClipByValue":return[r.clipByValue(m("x",e,t,n),m("clipValueMin",e,t,n),m("clipValueMax",e,t,n))];case"Relu6":return[r.relu6(m("x",e,t,n))];case"Rsqrt":return[r.rsqrt(yt(e.inputNames[0],t,n))];case"LeakyRelu":return[r.leakyRelu(m("x",e,t,n),m("alpha",e,t,n))];case"Prelu":return[r.prelu(m("x",e,t,n),m("alpha",e,t,n))];case"IsNan":return[r.isNaN(yt(e.inputNames[0],t,n))];case"IsInf":return[r.isInf(yt(e.inputNames[0],t,n))];case"IsFinite":return[r.isFinite(yt(e.inputNames[0],t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function vn(e,t,n=""){if(!(typeof e=="number"||typeof t=="number")){A(e.length===t.length,()=>n+` Shapes ${e} and ${t} must match`);for(let r=0;r<e.length;r++){const s=e[r],i=t[r];A(s<0||i<0||s===i,()=>n+` Shapes ${e} and ${t} must match`)}}}function up(e){return!(typeof e=="number"||e.some(t=>t<0))}function _o(e,t,n){let r=t2(e,n);const s=!up(r);if(s&&t.length===0)throw new Error(`Tried to calculate elements of an empty list with non-fully-defined elementShape: ${r}`);if(s&&t.forEach(i=>{r=t2(i.shape,r)}),!up(r))throw new Error(`Non-fully-defined elementShape: ${r}`);return r}function t2(e,t){if(typeof e=="number")return t;if(typeof t=="number")return e;if(e.length!==t.length)throw new Error(`Incompatible ranks during merge: ${e} vs. ${t}`);const n=[];for(let r=0;r<e.length;++r){const s=e[r],i=t[r];if(s>=0&&i>=0&&s!==i)throw new Error(`Incompatible shape during merge: ${e} vs. ${t}`);n[r]=s>=0?s:i}return n}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class PE{constructor(t,n,r,s,i,o,a){this.name=t,this.dtype=n,this.maxSize=r,this.elementShape=s,this.identicalElementShapes=i,this.dynamicSize=o,this.clearAfterRead=a,this.tensors=[],this.closed_=!1,this.idTensor=$e(0),Qn(this.idTensor)}get id(){return this.idTensor.id}get closed(){return this.closed_}clearAndClose(t){this.tensors.forEach(n=>{(t==null||!t.has(n.tensor.id))&&n.tensor.dispose()}),this.tensors=[],this.closed_=!0,this.idTensor.dispose()}size(){return this.tensors.length}read(t){if(this.closed_)throw new Error(`TensorArray ${this.name} has already been closed.`);if(t<0||t>=this.size())throw new Error(`Tried to read from index ${t}, but array size is: ${this.size()}`);const n=this.tensors[t];if(n.cleared)throw new Error(`TensorArray ${this.name}: Could not read index ${t} twice because it was cleared after a previous read (perhaps try setting clear_after_read = false?).`);return this.clearAfterRead&&(n.cleared=!0),n.read=!0,n.tensor}readMany(t){return t.map(n=>this.read(n))}write(t,n){if(this.closed_)throw new Error(`TensorArray ${this.name} has already been closed.`);if(t<0||!this.dynamicSize&&t>=this.maxSize)throw new Error(`Tried to write to index ${t}, but array is not resizeable and size is: ${this.maxSize}`);const r=this.tensors[t]||{};if(n.dtype!==this.dtype)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${t},
          because the value dtype is ${n.dtype}, but TensorArray dtype is ${this.dtype}.`);if(this.size()===0&&(this.elementShape==null||this.elementShape.length===0)&&(this.elementShape=n.shape),vn(this.elementShape,n.shape,`TensorArray ${this.name}: Could not write to TensorArray index ${t}.`),r.read)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${t}, because it has already been read.`);if(r.written)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${t}, because it has already been written.`);r.tensor=n,Qn(n),r.written=!0,this.tensors[t]=r}writeMany(t,n){if(t.length!==n.length)throw new Error(`TensorArray ${this.name}: could not write multiple tensors,because the index size: ${t.length} is not the same as tensors size: ${n.length}.`);t.forEach((r,s)=>this.write(r,n[s]))}gather(t,n){if(n&&n!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but gather requested dtype ${n}`);if(t)t=t.slice(0,this.size());else{t=[];for(let s=0;s<this.size();s++)t.push(s)}if(t.length===0)return tr([],[0].concat(this.elementShape));const r=this.readMany(t);return vn(this.elementShape,r[0].shape,"TensorArray shape mismatch: "),Er(r,0)}concat(t){if(t&&t!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but concat requested dtype ${t}`);if(this.size()===0)return tr([],[0].concat(this.elementShape));const n=[];for(let s=0;s<this.size();s++)n.push(s);const r=this.readMany(n);return vn(this.elementShape,r[0].shape,`TensorArray shape mismatch: tensor array shape (${this.elementShape}) vs first tensor shape (${r[0].shape})`),wt(r,0)}scatter(t,n){if(n.dtype!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${n.dtype}`);if(t.length!==n.shape[0])throw new Error(`Expected len(indices) == tensor.shape[0], but saw: ${t.length} vs. ${n.shape[0]}`);const r=Math.max(...t);if(!this.dynamicSize&&r>=this.maxSize)throw new Error(`Max index must be < array size (${r}  vs. ${this.maxSize})`);this.writeMany(t,ti(n,0))}split(t,n){if(n.dtype!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${n.dtype}`);let r=0;const s=t.map(u=>(r+=u,r));if(r!==n.shape[0])throw new Error(`Expected sum of lengths to be equal to
          tensor.shape[0], but sum of lengths is
        ${r}, and tensor's shape is: ${n.shape}`);if(!this.dynamicSize&&t.length!==this.maxSize)throw new Error(`TensorArray's size is not equal to the size of lengths (${this.maxSize} vs. ${t.length}), and the TensorArray is not marked as dynamically resizeable`);const i=r===0?0:n.size/r,o=[];Se(()=>{n=q(n,[1,r,i]);for(let u=0;u<t.length;++u){const c=[0,u===0?0:s[u-1],0],p=[1,t[u],i];o[u]=q(ye(n,c,p),this.elementShape)}return o});const a=[];for(let u=0;u<t.length;u++)a[u]=u;this.writeMany(a,o)}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Ys{get id(){return this.idTensor.id}constructor(t,n,r,s=-1){this.tensors=t,this.elementShape=n,this.elementDtype=r,t!=null&&t.forEach(i=>{if(r!==i.dtype)throw new Error(`Invalid data types; op elements ${r}, but list elements ${i.dtype}`);vn(n,i.shape,"TensorList shape mismatch: "),Qn(i)}),this.idTensor=$e(0),this.maxNumElements=s,Qn(this.idTensor)}copy(){return new Ys([...this.tensors],this.elementShape,this.elementDtype)}clearAndClose(t){this.tensors.forEach(n=>{(t==null||!t.has(n.id))&&n.dispose()}),this.tensors.length=0,this.idTensor.dispose()}size(){return this.tensors.length}stack(t,n,r=-1){if(n!==this.elementDtype)throw new Error(`Invalid data types; op elements ${n}, but list elements ${this.elementDtype}`);if(r!==-1&&this.tensors.length!==r)throw new Error(`Operation expected a list with ${r} elements but got a list with ${this.tensors.length} elements.`);vn(t,this.elementShape,"TensorList shape mismatch: ");const s=_o(this.elementShape,this.tensors,t);return Se(()=>{const i=this.tensors.map(o=>q(o,s));return Er(i,0)})}popBack(t,n){if(n!==this.elementDtype)throw new Error(`Invalid data types; op elements ${n}, but list elements ${this.elementDtype}`);if(this.size()===0)throw new Error("Trying to pop from an empty list.");const r=_o(this.elementShape,this.tensors,t),s=this.tensors.pop();return s.kept=!1,vn(s.shape,t,"TensorList shape mismatch: "),q(s,r)}pushBack(t){if(t.dtype!==this.elementDtype)throw new Error(`Invalid data types; op elements ${t.dtype}, but list elements ${this.elementDtype}`);if(vn(t.shape,this.elementShape,"TensorList shape mismatch: "),this.maxNumElements===this.size())throw new Error("Trying to push element into a full list.");Qn(t),this.tensors.push(t)}resize(t){if(t<0)throw new Error(`TensorListResize expects size to be non-negative. Got: ${t}`);if(this.maxNumElements!==-1&&t>this.maxNumElements)throw new Error(`TensorListResize input size ${t} is greater maxNumElement ${this.maxNumElements}.`);const n=new Ys([],this.elementShape,this.elementDtype,this.maxNumElements);n.tensors.length=t;for(let r=0;r<Math.min(this.tensors.length,t);++r)n.tensors[r]=this.tensors[r];return n}getItem(t,n,r){if(r!==this.elementDtype)throw new Error(`Invalid data types; op elements ${r}, but list elements ${this.elementDtype}`);if(t<0||t>this.tensors.length)throw new Error(`Trying to access element ${t} in a list with ${this.tensors.length} elements.`);if(this.tensors[t]==null)throw new Error(`element at index ${t} is null.`);vn(this.tensors[t].shape,n,"TensorList shape mismatch: ");const s=_o(this.elementShape,this.tensors,n);return q(this.tensors[t],s)}setItem(t,n){if(n.dtype!==this.elementDtype)throw new Error(`Invalid data types; op elements ${n.dtype}, but list elements ${this.elementDtype}`);if(t<0||this.maxNumElements!==-1&&t>=this.maxNumElements)throw new Error(`Trying to set element ${t} in a list with max ${this.maxNumElements} elements.`);vn(this.elementShape,n.shape,"TensorList shape mismatch: "),Qn(n),this.tensors[t]!=null&&(this.tensors[t].kept=!1),this.tensors[t]=n}gather(t,n,r){if(n!==this.elementDtype)throw new Error(`Invalid data types; op elements ${n}, but list elements ${this.elementDtype}`);vn(this.elementShape,r,"TensorList shape mismatch: "),t=t.slice(0,this.size());const s=_o(this.elementShape,this.tensors,r);return t.length===0?tr([],[0].concat(s)):Se(()=>{const i=t.map(o=>q(this.tensors[o],s));return Er(i,0)})}concat(t,n){if(t&&t!==this.elementDtype)throw new Error(`TensorList dtype is ${this.elementDtype} but concat requested dtype ${t}`);vn(this.elementShape,n,"TensorList shape mismatch: ");const r=_o(this.elementShape,this.tensors,n);return this.size()===0?tr([],[0].concat(r)):Se(()=>{const s=this.tensors.map(i=>q(i,r));return wt(s,0)})}}function RE(e,t,n){const r=e.dtype;if(e.shape.length<1)throw new Error(`Tensor must be at least a vector, but saw shape: ${e.shape}`);if(e.dtype!==n)throw new Error(`Invalid data types; op elements ${e.dtype}, but list elements ${n}`);const s=e.shape.slice(1);vn(s,t,"TensorList shape mismatch: ");const i=ti(e);return new Ys(i,t,r)}function LE(e,t,n,r){return new Ys([],e,t,r)}function zE(e,t,n,r){if(t.length!==e.shape[0])throw new Error(`Expected len(indices) == tensor.shape[0], but saw: ${t.length} vs. ${e.shape[0]}`);const s=Math.max(...t);if(r!=null&&r!==-1&&s>=r)throw new Error(`Max index must be < array size (${s}  vs. ${r})`);const i=new Ys([],n,e.dtype,r),o=ti(e,0);return t.forEach((a,u)=>{i.setItem(a,o[u])}),i}function ME(e,t,n){let r=0;const s=t.map(c=>(r+=c,r));if(r!==e.shape[0])throw new Error(`Expected sum of lengths to be equal to
          tensor.shape[0], but sum of lengths is
        ${r}, and tensor's shape is: ${e.shape}`);const i=e.shape.slice(1),o=t2(i,n),a=r===0?0:e.size/r,u=Se(()=>{const c=[];e=q(e,[1,r,a]);for(let p=0;p<t.length;++p){const w=[0,p===0?0:s[p-1],0],b=[1,t[p],a];c[p]=q(ye(e,w,b),o)}return e.dispose(),c}),l=new Ys([],n,e.dtype,t.length);for(let c=0;c<u.length;c++)l.setItem(c,u[c]);return l}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const jE=async(e,t,n)=>{switch(e.op){case"If":case"StatelessIf":{const r=m("thenBranch",e,t,n),s=m("elseBranch",e,t,n),i=m("cond",e,t,n),o=m("args",e,t,n);return(await i.data())[0]?n.functionMap[r].executeFunctionAsync(o,n.tensorArrayMap,n.tensorListMap):n.functionMap[s].executeFunctionAsync(o,n.tensorArrayMap,n.tensorListMap)}case"While":case"StatelessWhile":{const r=m("body",e,t,n),s=m("cond",e,t,n),i=m("args",e,t,n),o=await n.functionMap[s].executeFunctionAsync(i,n.tensorArrayMap,n.tensorListMap),a=i.map(c=>c.id);let u=await o[0].data();o.forEach(c=>{!c.kept&&a.indexOf(c.id)===-1&&c.dispose()});let l=i;for(;u[0];){const c=l;l=await n.functionMap[r].executeFunctionAsync(l,n.tensorArrayMap,n.tensorListMap);const p=l.map(w=>w.id);c.forEach(w=>{!w.kept&&a.indexOf(w.id)===-1&&p.indexOf(w.id)===-1&&w.dispose()});const d=await n.functionMap[s].executeFunctionAsync(l,n.tensorArrayMap,n.tensorListMap);u=await d[0].data(),d.forEach(w=>{!w.kept&&a.indexOf(w.id)===-1&&p.indexOf(w.id)===-1&&w.dispose()})}return l}case"LoopCond":{const r=m("pred",e,t,n);return[lr(r)]}case"Switch":{const r=m("pred",e,t,n);let s=m("data",e,t,n);return s.kept||(s=lr(s)),(await r.data())[0]?[void 0,s]:[s,void 0]}case"Merge":{const r=e.inputNames.find(s=>yt(s,t,n)!==void 0);if(r){const s=yt(r,t,n);return[lr(s)]}return}case"Enter":{const r=m("frameName",e,t,n),s=m("tensor",e,t,n);return n.enterFrame(r),[lr(s)]}case"Exit":{const r=m("tensor",e,t,n);return n.exitFrame(),[lr(r)]}case"NextIteration":{const r=m("tensor",e,t,n);return n.nextIteration(),[lr(r)]}case"TensorArrayV3":{const r=m("size",e,t,n),s=m("dtype",e,t,n),i=m("elementShape",e,t,n),o=m("dynamicSize",e,t,n),a=m("clearAfterRead",e,t,n),u=m("identicalElementShapes",e,t,n),l=m("name",e,t,n),c=new PE(l,s,r,i,u,o,a);return n.addTensorArray(c),[c.idTensor,$e(1)]}case"TensorArrayWriteV3":{const r=m("tensorArrayId",e,t,n),s=m("index",e,t,n),i=m("tensor",e,t,n),o=n.getTensorArray(r.id);return o.write(s,i),[o.idTensor]}case"TensorArrayReadV3":{const r=m("tensorArrayId",e,t,n),s=m("index",e,t,n);return[n.getTensorArray(r.id).read(s)]}case"TensorArrayGatherV3":{const r=m("tensorArrayId",e,t,n),s=m("indices",e,t,n),i=m("dtype",e,t,n);return[n.getTensorArray(r.id).gather(s,i)]}case"TensorArrayScatterV3":{const r=m("tensorArrayId",e,t,n),s=m("indices",e,t,n),i=m("tensor",e,t,n),o=n.getTensorArray(r.id);return o.scatter(s,i),[o.idTensor]}case"TensorArrayConcatV3":{const r=m("tensorArrayId",e,t,n),s=n.getTensorArray(r.id),i=m("dtype",e,t,n);return[s.concat(i)]}case"TensorArraySplitV3":{const r=m("tensorArrayId",e,t,n),s=m("tensor",e,t,n),i=m("lengths",e,t,n),o=n.getTensorArray(r.id);return o.split(i,s),[o.idTensor]}case"TensorArraySizeV3":{const r=m("tensorArrayId",e,t,n),s=n.getTensorArray(r.id);return[$e(s.size(),"int32")]}case"TensorArrayCloseV3":{const r=m("tensorArrayId",e,t,n),s=n.getTensorArray(r.id);return s.clearAndClose(),[s.idTensor]}case"TensorListSetItem":{const r=m("tensorListId",e,t,n),s=m("index",e,t,n),i=m("tensor",e,t,n),o=n.getTensorList(r.id);return o.setItem(s,i),[o.idTensor]}case"TensorListGetItem":{const r=m("tensorListId",e,t,n),s=m("index",e,t,n),i=m("elementShape",e,t,n),o=m("elementDType",e,t,n);return[n.getTensorList(r.id).getItem(s,i,o)]}case"TensorListScatterV2":case"TensorListScatter":{const r=m("indices",e,t,n),s=m("tensor",e,t,n),i=m("elementShape",e,t,n),o=m("numElements",e,t,n),a=zE(s,r,i,o);return n.addTensorList(a),[a.idTensor]}case"TensorListReserve":case"EmptyTensorList":{const r=m("elementShape",e,t,n),s=m("elementDType",e,t,n);let i;e.op==="TensorListReserve"?i="numElements":i="maxNumElements";const o=m(i,e,t,n),a=e.op==="TensorListReserve"?-1:o,u=LE(r,s,o,a);return n.addTensorList(u),[u.idTensor]}case"TensorListGather":{const r=m("tensorListId",e,t,n),s=m("indices",e,t,n),i=m("elementShape",e,t,n),o=m("elementDType",e,t,n);return[n.getTensorList(r.id).gather(s,o,i)]}case"TensorListStack":{const r=m("tensorListId",e,t,n),s=m("elementShape",e,t,n),i=m("elementDType",e,t,n),o=m("numElements",e,t,n);return[n.getTensorList(r.id).stack(s,i,o)]}case"TensorListFromTensor":{const r=m("tensor",e,t,n),s=m("elementShape",e,t,n),i=m("elementDType",e,t,n),o=RE(r,s,i);return n.addTensorList(o),[o.idTensor]}case"TensorListConcat":case"TensorListConcatV2":{const r=m("tensorListId",e,t,n),s=n.getTensorList(r.id),i=m("dtype",e,t,n),o=m("elementShape",e,t,n);return[s.concat(i,o)]}case"TensorListPushBack":{const r=m("tensorListId",e,t,n),s=m("tensor",e,t,n),i=n.getTensorList(r.id);return i.pushBack(s),[i.idTensor]}case"TensorListPopBack":{const r=m("tensorListId",e,t,n),s=m("elementShape",e,t,n),i=m("elementDType",e,t,n);return[n.getTensorList(r.id).popBack(s,i)]}case"TensorListSplit":{const r=m("tensor",e,t,n),s=m("elementShape",e,t,n),i=m("lengths",e,t,n),o=ME(r,i,s);return n.addTensorList(o),[o.idTensor]}case"TensorListLength":{const r=m("tensorListId",e,t,n),s=n.getTensorList(r.id);return[$e(s.size(),"int32")]}case"TensorListResize":{const r=m("tensorListId",e,t,n),s=m("size",e,t,n),o=n.getTensorList(r.id).resize(s);return n.addTensorList(o),[o.idTensor]}default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function lp(e,t,n){const[r,s]=m("fusedOps",e,t,n),i=r==="biasadd",o=!i,a=s==="prelu",u=r==="fusedbatchnorm",l=m("numArgs",e,t,n);if(i){if(a&&l!==2)throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd and Prelu must have two extra arguments: bias and alpha.");if(!a&&i&&l!==1)throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd must have one extra argument: bias.")}if(u)throw new Error("FusedConv2d and DepthwiseConv2d with FusedBatchNorm is not supported");const c=m("strides",e,t,n),p=Tu(e,t,n),d=m("dataFormat",e,t,n).toUpperCase(),w=m("dilations",e,t,n);let[b,E]=m("args",e,t,n);o&&(E=b,b=void 0);const _=m("leakyreluAlpha",e,t,n);return{stride:c,pad:p,dataFormat:d,dilations:w,biasArg:b,preluArg:E,activationFunc:s,leakyreluAlpha:_}}const BE=(e,t,n,r=St)=>{switch(e.op){case"Conv1D":{const s=m("stride",e,t,n),i=m("pad",e,t,n),o=m("dataFormat",e,t,n).toUpperCase(),a=m("dilation",e,t,n);return[r.conv1d(m("x",e,t,n),m("filter",e,t,n),s,i,o,a)]}case"Conv2D":{const s=m("strides",e,t,n),i=Tu(e,t,n),o=m("dataFormat",e,t,n).toUpperCase(),a=m("dilations",e,t,n);return[r.conv2d(m("x",e,t,n),m("filter",e,t,n),[s[1],s[2]],i,o,[a[1],a[2]])]}case"_FusedConv2D":{const{stride:s,pad:i,dataFormat:o,dilations:a,biasArg:u,preluArg:l,activationFunc:c,leakyreluAlpha:p}=lp(e,t,n);return[r.fused.conv2d({x:m("x",e,t,n),filter:m("filter",e,t,n),strides:[s[1],s[2]],pad:i,dataFormat:o,dilations:[a[1],a[2]],bias:u,activation:c,preluActivationWeights:l,leakyreluAlpha:p})]}case"FusedDepthwiseConv2dNative":{const{stride:s,pad:i,dataFormat:o,dilations:a,biasArg:u,preluArg:l,activationFunc:c,leakyreluAlpha:p}=lp(e,t,n);return[r.fused.depthwiseConv2d({x:m("x",e,t,n),filter:m("filter",e,t,n),strides:[s[1],s[2]],pad:i,dataFormat:o,dilations:[a[1],a[2]],bias:u,activation:c,preluActivationWeights:l,leakyreluAlpha:p})]}case"Conv2DBackpropInput":case"Conv2dTranspose":{const s=m("outputShape",e,t,n),i=m("strides",e,t,n),o=Tu(e,t,n);return[r.conv2dTranspose(m("x",e,t,n),m("filter",e,t,n),s,[i[1],i[2]],o)]}case"DepthwiseConv2dNative":case"DepthwiseConv2d":{const s=m("strides",e,t,n),i=Tu(e,t,n),o=m("dilations",e,t,n),a=m("dataFormat",e,t,n).toUpperCase();return[r.depthwiseConv2d(m("input",e,t,n),m("filter",e,t,n),[s[1],s[2]],i,a,[o[1],o[2]])]}case"Conv3D":{const s=m("strides",e,t,n),i=m("pad",e,t,n),o=m("dataFormat",e,t,n).toUpperCase(),a=m("dilations",e,t,n);return[r.conv3d(m("x",e,t,n),m("filter",e,t,n),[s[1],s[2],s[3]],i,o,[a[1],a[2],a[3]])]}case"AvgPool":{const s=m("strides",e,t,n),i=m("pad",e,t,n),o=m("kernelSize",e,t,n);return[r.avgPool(m("x",e,t,n),[o[1],o[2]],[s[1],s[2]],i)]}case"MaxPool":{const s=m("strides",e,t,n),i=m("pad",e,t,n),o=m("kernelSize",e,t,n);return[r.maxPool(m("x",e,t,n),[o[1],o[2]],[s[1],s[2]],i)]}case"MaxPoolWithArgmax":{const s=m("strides",e,t,n),i=m("pad",e,t,n),o=m("kernelSize",e,t,n),a=m("includeBatchInIndex",e,t,n),{result:u,indexes:l}=r.maxPoolWithArgmax(m("x",e,t,n),[o[1],o[2]],[s[1],s[2]],i,a);return[u,l]}case"AvgPool3D":{const s=m("strides",e,t,n),i=m("pad",e,t,n),o=m("kernelSize",e,t,n);return[r.avgPool3d(m("x",e,t,n),[o[1],o[2],o[3]],[s[1],s[2],s[3]],i)]}case"MaxPool3D":{const s=m("strides",e,t,n),i=m("pad",e,t,n),o=m("kernelSize",e,t,n);return[r.maxPool3d(m("x",e,t,n),[o[1],o[2],o[3]],[s[1],s[2],s[3]],i)]}case"Dilation2D":{const s=m("strides",e,t,n),i=m("pad",e,t,n),o=m("dilations",e,t,n),a=s[1],u=s[2],l=o[1],c=o[2];return[r.dilation2d(m("x",e,t,n),m("filter",e,t,n),[a,u],i,[l,c],"NHWC")]}default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const UE=(e,t,n,r=St)=>{switch(e.op){case"Fill":{const s=m("shape",e,t,n),i=m("dtype",e,t,n),o=m("value",e,t,n);return[r.fill(s,o,i)]}case"LinSpace":{const s=m("start",e,t,n),i=m("stop",e,t,n),o=m("num",e,t,n);return[r.linspace(s,i,o)]}case"Multinomial":{const s=m("logits",e,t,n),i=m("numSamples",e,t,n),o=m("seed",e,t,n);return[r.multinomial(s,i,o)]}case"OneHot":{const s=m("indices",e,t,n),i=m("depth",e,t,n),o=m("onValue",e,t,n),a=m("offValue",e,t,n),u=m("dtype",e,t,n);return[r.oneHot(s,i,o,a,u)]}case"Ones":return[r.ones(m("shape",e,t,n),m("dtype",e,t,n))];case"OnesLike":return[r.onesLike(m("x",e,t,n))];case"RandomStandardNormal":return[r.randomStandardNormal(m("shape",e,t,n),m("dtype",e,t,n),m("seed",e,t,n))];case"RandomUniform":return[r.randomUniform(m("shape",e,t,n),m("minval",e,t,n),m("maxval",e,t,n),m("dtype",e,t,n))];case"RandomUniformInt":return[r.randomUniformInt(m("shape",e,t,n),m("minval",e,t,n),m("maxval",e,t,n),m("seed",e,t,n))];case"Range":{const s=m("start",e,t,n),i=m("stop",e,t,n),o=m("step",e,t,n);return[r.range(s,i,o,m("dtype",e,t,n))]}case"TruncatedNormal":{const s=m("shape",e,t,n),i=m("mean",e,t,n),o=m("stdDev",e,t,n),a=m("seed",e,t,n);return[r.truncatedNormal(s,i,o,m("dtype",e,t,n),a)]}case"Zeros":return[r.zeros(m("shape",e,t,n),m("dtype",e,t,n))];case"ZerosLike":return[r.zerosLike(m("x",e,t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function bc(e,t,n){const r=m("boxes",e,t,n),s=m("scores",e,t,n),i=m("maxOutputSize",e,t,n),o=m("iouThreshold",e,t,n),a=m("scoreThreshold",e,t,n),u=m("softNmsSigma",e,t,n);return{boxes:r,scores:s,maxOutputSize:i,iouThreshold:o,scoreThreshold:a,softNmsSigma:u}}const VE=async(e,t,n,r,s=St)=>{switch(e.op){case"NonMaxSuppressionV5":{const{boxes:i,scores:o,maxOutputSize:a,iouThreshold:u,scoreThreshold:l,softNmsSigma:c}=bc(e,t,n),p=await s.image.nonMaxSuppressionWithScoreAsync(i,o,a,u,l,c);return[p.selectedIndices,p.selectedScores]}case"NonMaxSuppressionV4":{const{boxes:i,scores:o,maxOutputSize:a,iouThreshold:u,scoreThreshold:l}=bc(e,t,n),c=m("padToMaxOutputSize",e,t,n),p=await s.image.nonMaxSuppressionPaddedAsync(i,o,a,u,l,c);return[p.selectedIndices,p.validOutputs]}case"NonMaxSuppressionV3":case"NonMaxSuppressionV2":{const{boxes:i,scores:o,maxOutputSize:a,iouThreshold:u,scoreThreshold:l}=bc(e,t,n);return[await s.image.nonMaxSuppressionAsync(i,o,a,u,l)]}case"Where":{const i=s.cast(m("condition",e,t,n),"bool"),o=[await s.whereAsync(i)];return i.dispose(),o}case"ListDiff":return s.setdiff1dAsync(m("x",e,t,n),m("y",e,t,n));default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const WE=(e,t,n,r=St)=>{switch(e.op){case"LowerBound":{const s=m("sortedSequence",e,t,n),i=m("values",e,t,n);return[r.lowerBound(s,i)]}case"TopKV2":{const s=m("x",e,t,n),i=m("k",e,t,n),o=m("sorted",e,t,n),a=r.topk(s,i,o);return[a.values,a.indices]}case"UpperBound":{const s=m("sortedSequence",e,t,n),i=m("values",e,t,n);return[r.upperBound(s,i)]}case"Unique":{const s=m("x",e,t,n),i=r.unique(s);return[i.values,i.indices]}case"UniqueV2":{const s=m("x",e,t,n),i=m("axis",e,t,n),o=r.unique(s,i);return[o.values,o.indices]}default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const HE=(e,t,n,r=St)=>{switch(e.op){case"Const":return t[e.name];case"PlaceholderWithDefault":const s=m("default",e,t,n);return[yt(e.name,t,n)||s];case"Placeholder":return[yt(e.name,t,n)];case"Identity":case"StopGradient":case"FakeQuantWithMinMaxVars":{const c=m("x",e,t,n);return[lr(c)]}case"IdentityN":return m("x",e,t,n).map(c=>lr(c));case"Snapshot":const i=m("x",e,t,n);return[lr(i)];case"Shape":return[r.tensor1d(m("x",e,t,n).shape,"int32")];case"ShapeN":return m("x",e,t,n).map(c=>r.tensor1d(c.shape));case"Size":return[r.scalar(m("x",e,t,n).size,"int32")];case"Rank":return[r.scalar(m("x",e,t,n).rank,"int32")];case"NoOp":return[r.scalar(1)];case"Print":const o=m("x",e,t,n),a=m("data",e,t,n),u=m("message",e,t,n),l=m("summarize",e,t,n);console.warn("The graph has a tf.print() operation,usually used for debugging, which slows down performance."),console.log(u);for(let c=0;c<a.length;c++)console.log(Array.prototype.slice.call(a[c].dataSync()).slice(0,l));return[o];default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class KE{get id(){return this.handle.id}constructor(t,n){this.keyDType=t,this.valueDType=n,this.handle=$e(0),this.tensorMap=new Map,Qn(this.handle)}clearAndClose(){this.tensorMap.forEach(t=>t.dispose()),this.tensorMap.clear(),this.handle.dispose()}size(){return this.tensorMap.size}tensorSize(){return $e(this.size(),"int32")}async import(t,n){this.checkKeyAndValueTensor(t,n);const r=await t.data();return this.tensorMap.forEach(s=>s.dispose()),this.tensorMap.clear(),Se(()=>{const s=ti(n),i=r.length,o=s.length;A(i===o,()=>`The number of elements doesn't match, keys has ${i} elements, the values has ${o} elements.`);for(let a=0;a<i;a++){const u=r[a],l=s[a];Qn(l),this.tensorMap.set(u,l)}return this.handle})}async find(t,n){this.checkKeyAndValueTensor(t,n);const r=await t.data();return Se(()=>{const s=[];for(let i=0;i<r.length;i++){const o=r[i],a=this.findWithDefault(o,n);s.push(a)}return Er(s)})}findWithDefault(t,n){const r=this.tensorMap.get(t);return r??n}checkKeyAndValueTensor(t,n){if(t.dtype!==this.keyDType)throw new Error(`Expect key dtype ${this.keyDType}, but got ${t.dtype}`);if(n.dtype!==this.valueDType)throw new Error(`Expect value dtype ${this.valueDType}, but got ${n.dtype}`)}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const GE=async(e,t,n,r)=>{switch(e.op){case"HashTable":case"HashTableV2":{const s=r.getHashTableHandleByName(e.name);if(s!=null)return[s];{const i=m("keyDType",e,t,n),o=m("valueDType",e,t,n),a=new KE(i,o);return r.addHashTable(e.name,a),[a.handle]}}case"InitializeTable":case"InitializeTableV2":case"LookupTableImport":case"LookupTableImportV2":{const s=m("tableHandle",e,t,n,r),i=m("keys",e,t,n),o=m("values",e,t,n);return[await r.getHashTableById(s.id).import(i,o)]}case"LookupTableFind":case"LookupTableFindV2":{const s=m("tableHandle",e,t,n,r),i=m("keys",e,t,n),o=m("defaultValue",e,t,n);return[await r.getHashTableById(s.id).find(i,o)]}case"LookupTableSize":case"LookupTableSizeV2":{const s=m("tableHandle",e,t,n,r);return[r.getHashTableById(s.id).tensorSize()]}default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const qE=(e,t,n,r=St)=>{switch(e.op){case"ResizeBilinear":{const s=m("images",e,t,n),i=m("size",e,t,n),o=m("alignCorners",e,t,n),a=m("halfPixelCenters",e,t,n);return[r.image.resizeBilinear(s,[i[0],i[1]],o,a)]}case"ResizeNearestNeighbor":{const s=m("images",e,t,n),i=m("size",e,t,n),o=m("alignCorners",e,t,n),a=m("halfPixelCenters",e,t,n);return[r.image.resizeNearestNeighbor(s,[i[0],i[1]],o,a)]}case"CropAndResize":{const s=m("image",e,t,n),i=m("boxes",e,t,n),o=m("boxInd",e,t,n),a=m("cropSize",e,t,n),u=m("method",e,t,n),l=m("extrapolationValue",e,t,n);return[r.image.cropAndResize(s,i,o,a,u,l)]}case"ImageProjectiveTransformV3":{const s=m("images",e,t,n),i=m("transforms",e,t,n),o=m("outputShape",e,t,n),a=m("fillValue",e,t,n),u=m("interpolation",e,t,n),l=m("fillMode",e,t,n);return[r.image.transform(s,i,u.toLowerCase(),l.toLowerCase(),a,o)]}default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const XE=(e,t,n,r=St)=>{switch(e.op){case"Equal":return[r.equal(m("a",e,t,n),m("b",e,t,n))];case"NotEqual":return[r.notEqual(m("a",e,t,n),m("b",e,t,n))];case"Greater":return[r.greater(m("a",e,t,n),m("b",e,t,n))];case"GreaterEqual":return[r.greaterEqual(m("a",e,t,n),m("b",e,t,n))];case"Less":return[r.less(m("a",e,t,n),m("b",e,t,n))];case"LessEqual":return[r.lessEqual(m("a",e,t,n),m("b",e,t,n))];case"LogicalAnd":return[r.logicalAnd(m("a",e,t,n),m("b",e,t,n))];case"LogicalNot":return[r.logicalNot(m("a",e,t,n))];case"LogicalOr":return[r.logicalOr(m("a",e,t,n),m("b",e,t,n))];case"Select":case"SelectV2":return[r.where(m("condition",e,t,n),m("a",e,t,n),m("b",e,t,n))];case"BitwiseAnd":return[r.bitwiseAnd(m("a",e,t,n),m("b",e,t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const YE=(e,t,n,r=St)=>{switch(e.op){case"BatchMatMul":case"BatchMatMulV2":case"MatMul":return[r.matMul(m("a",e,t,n),m("b",e,t,n),m("transposeA",e,t,n),m("transposeB",e,t,n))];case"Einsum":return[r.einsum(m("equation",e,t,n),...m("tensors",e,t,n))];case"Transpose":return[r.transpose(m("x",e,t,n),m("perm",e,t,n))];case"_FusedMatMul":const[s,i]=m("fusedOps",e,t,n),o=s==="biasadd",a=i==="prelu",u=m("numArgs",e,t,n),l=m("leakyreluAlpha",e,t,n);if(o){if(a&&u!==2)throw new Error("Fused MatMul with BiasAdd and Prelu must have two extra arguments: bias and alpha.");if(!a&&u!==1)throw new Error("Fused MatMul with BiasAdd must have one extra argument: bias.")}const[c,p]=m("args",e,t,n);return[r.fused.matMul({a:m("a",e,t,n),b:m("b",e,t,n),transposeA:m("transposeA",e,t,n),transposeB:m("transposeB",e,t,n),bias:c,activation:i,preluActivationWeights:p,leakyreluAlpha:l})];case"MatrixBandPart":return[r.linalg.bandPart(m("a",e,t,n),m("numLower",e,t,n),m("numUpper",e,t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const QE=(e,t,n,r=St)=>{switch(e.op){case"EuclideanNorm":return[r.euclideanNorm(m("x",e,t,n),m("axis",e,t,n),m("keepDims",e,t,n))];case"FusedBatchNorm":case"FusedBatchNormV2":return[r.batchNorm(m("x",e,t,n),m("mean",e,t,n),m("variance",e,t,n),m("offset",e,t,n),m("scale",e,t,n),m("epsilon",e,t,n))];case"FusedBatchNormV3":return[r.batchNorm(m("x",e,t,n),m("mean",e,t,n),m("variance",e,t,n),m("offset",e,t,n),m("scale",e,t,n),m("epsilon",e,t,n))];case"LRN":return[r.localResponseNormalization(m("x",e,t,n),m("radius",e,t,n),m("bias",e,t,n),m("alpha",e,t,n),m("beta",e,t,n))];case"Softmax":return[r.softmax(m("x",e,t,n))];case"LogSoftmax":return[r.logSoftmax(m("x",e,t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const JE=(e,t,n,r=St)=>{switch(e.op){case"RaggedGather":{const{outputNestedSplits:s,outputDenseValues:i}=r.raggedGather(m("paramsNestedSplits",e,t,n),m("paramsDenseValues",e,t,n),m("indices",e,t,n),m("outputRaggedRank",e,t,n));return s.concat(i)}case"RaggedRange":{const{rtNestedSplits:s,rtDenseValues:i}=r.raggedRange(m("starts",e,t,n),m("limits",e,t,n),m("splits",e,t,n));return[s,i]}case"RaggedTensorToTensor":return[r.raggedTensorToTensor(m("shape",e,t,n),m("values",e,t,n),m("defaultValue",e,t,n),m("rowPartitionTensors",e,t,n),m("rowPartitionTypes",e,t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ZE=(e,t,n,r=St)=>{switch(e.op){case"Max":{const a=m("axis",e,t,n),u=m("keepDims",e,t,n);return[r.max(m("x",e,t,n),a,u)]}case"Mean":{const a=m("axis",e,t,n),u=m("keepDims",e,t,n);return[r.mean(m("x",e,t,n),a,u)]}case"Min":{const a=m("axis",e,t,n),u=m("keepDims",e,t,n);return[r.min(m("x",e,t,n),a,u)]}case"Sum":{const a=m("axis",e,t,n),u=m("keepDims",e,t,n);return[r.sum(m("x",e,t,n),a,u)]}case"All":{const a=m("axis",e,t,n),u=m("keepDims",e,t,n);return[r.all(m("x",e,t,n),a,u)]}case"Any":{const a=m("axis",e,t,n),u=m("keepDims",e,t,n);return[r.any(m("x",e,t,n),a,u)]}case"ArgMax":{const a=m("axis",e,t,n);return[r.argMax(m("x",e,t,n),a)]}case"ArgMin":{const a=m("axis",e,t,n);return[r.argMin(m("x",e,t,n),a)]}case"Prod":{const a=m("axis",e,t,n),u=m("keepDims",e,t,n);return[r.prod(m("x",e,t,n),a,u)]}case"Cumprod":{const a=m("axis",e,t,n),u=m("exclusive",e,t,n),l=m("reverse",e,t,n);return[r.cumprod(m("x",e,t,n),a,u,l)]}case"Cumsum":{const a=m("axis",e,t,n),u=m("exclusive",e,t,n),l=m("reverse",e,t,n);return[r.cumsum(m("x",e,t,n),a,u,l)]}case"Bincount":const s=m("x",e,t,n),i=m("weights",e,t,n),o=m("size",e,t,n);return[r.bincount(s,i,o)];case"DenseBincount":{const a=m("x",e,t,n),u=m("weights",e,t,n),l=m("size",e,t,n),c=m("binaryOutput",e,t,n);return[r.denseBincount(a,u,l,c)]}default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ex=(e,t,n,r=St)=>{switch(e.op){case"ConcatV2":case"Concat":{const s=m("n",e,t,n),i=m("axis",e,t,n);let o=m("tensors",e,t,n);return o=o.slice(0,s),[r.concat(o,i)]}case"Gather":{const s=m("x",e,t,n),i=m("indices",e,t,n);return[r.gather(s,r.cast(i,"int32"),0)]}case"GatherV2":{const s=m("axis",e,t,n),i=m("batchDims",e,t,n),o=m("x",e,t,n),a=m("indices",e,t,n);return[r.gather(o,r.cast(a,"int32"),s,i)]}case"Reverse":{const s=m("dims",e,t,n),i=[];for(let a=0;a<s.length;a++)s[a]&&i.push(a);const o=m("x",e,t,n);return[r.reverse(o,i)]}case"ReverseV2":{const s=m("axis",e,t,n),i=m("x",e,t,n);return[r.reverse(i,s)]}case"Slice":{const s=m("begin",e,t,n),i=m("size",e,t,n);return[r.slice(m("x",e,t,n),s,i)]}case"StridedSlice":{const s=m("begin",e,t,n),i=m("end",e,t,n),o=m("strides",e,t,n),a=m("beginMask",e,t,n),u=m("endMask",e,t,n),l=m("ellipsisMask",e,t,n),c=m("newAxisMask",e,t,n),p=m("shrinkAxisMask",e,t,n),d=m("x",e,t,n);return[r.stridedSlice(d,s,i,o,a,u,l,c,p)]}case"Pack":return Se(()=>{const s=m("axis",e,t,n),i=m("tensors",e,t,n),o=i[0].shape,a=r.squeeze(i[0]).shape,u=i.map(l=>{const c=Sr(l.shape,o);if(!c&&!Sr(r.squeeze(l).shape,a))throw new Error("the input tensors shape does not match");return c?l:r.reshape(l,o)});return[r.stack(u,s)]});case"Unpack":{const s=m("axis",e,t,n),i=m("tensor",e,t,n);return r.unstack(i,s)}case"Tile":{const s=m("reps",e,t,n);return[r.tile(m("x",e,t,n),s)]}case"Split":case"SplitV":{const s=m("axis",e,t,n),i=m("numOrSizeSplits",e,t,n),o=m("x",e,t,n);return r.split(o,i,s)}case"ScatterNd":{const s=m("indices",e,t,n),i=m("values",e,t,n),o=m("shape",e,t,n);return[r.scatterND(s,i,o)]}case"GatherNd":{const s=m("x",e,t,n),i=m("indices",e,t,n);return[r.gatherND(s,i)]}case"SparseToDense":{const s=m("sparseIndices",e,t,n),i=m("outputShape",e,t,n),o=m("sparseValues",e,t,n),a=m("defaultValue",e,t,n);return[r.sparseToDense(s,o,i,o.dtype===a.dtype?a:r.cast(a,o.dtype))]}case"TensorScatterUpdate":{const s=m("indices",e,t,n),i=m("values",e,t,n),o=m("tensor",e,t,n);return[r.tensorScatterUpdate(o,s,i)]}default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const tx=(e,t,n,r=St)=>{switch(e.op){case"SparseFillEmptyRows":{const{outputIndices:s,outputValues:i,emptyRowIndicator:o,reverseIndexMap:a}=r.sparse.sparseFillEmptyRows(m("indices",e,t,n),m("values",e,t,n),m("denseShape",e,t,n),m("defaultValue",e,t,n));return[s,i,o,a]}case"SparseReshape":{const{outputIndices:s,outputShape:i}=r.sparse.sparseReshape(m("inputIndices",e,t,n),m("inputShape",e,t,n),m("newShape",e,t,n));return[s,i]}case"SparseSegmentMean":return[r.sparse.sparseSegmentMean(m("data",e,t,n),m("indices",e,t,n),m("segmentIds",e,t,n))];case"SparseSegmentSum":return[r.sparse.sparseSegmentSum(m("data",e,t,n),m("indices",e,t,n),m("segmentIds",e,t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const nx=(e,t,n,r=St)=>{switch(e.op){case"FFT":return[r.fft(m("x",e,t,n))];case"IFFT":return[r.ifft(m("x",e,t,n))];case"RFFT":return[r.rfft(m("x",e,t,n))];case"IRFFT":return[r.irfft(m("x",e,t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const rx=(e,t,n,r=St)=>{switch(e.op){case"StaticRegexReplace":return[r.string.staticRegexReplace(m("input",e,t,n),m("pattern",e,t,n),m("rewrite",e,t,n),m("replaceGlobal",e,t,n))];case"StringNGrams":{const{nGrams:s,nGramsSplits:i}=r.string.stringNGrams(m("data",e,t,n),m("dataSplits",e,t,n),m("separator",e,t,n),m("nGramWidths",e,t,n),m("leftPad",e,t,n),m("rightPad",e,t,n),m("padWidth",e,t,n),m("preserveShortSequences",e,t,n));return[s,i]}case"StringSplit":{const{indices:s,values:i,shape:o}=r.string.stringSplit(m("input",e,t,n),m("delimiter",e,t,n),m("skipEmpty",e,t,n));return[s,i,o]}case"StringToHashBucketFast":return[r.string.stringToHashBucketFast(m("input",e,t,n),m("numBuckets",e,t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const sx=(e,t,n,r=St)=>{switch(e.op){case"Cast":return[r.cast(m("x",e,t,n),m("dtype",e,t,n))];case"ExpandDims":{const s=m("axis",e,t,n);return[r.expandDims(m("x",e,t,n),s)]}case"Squeeze":{const s=m("axis",e,t,n);return[r.squeeze(m("x",e,t,n),s)]}case"Reshape":return[r.reshape(m("x",e,t,n),m("shape",e,t,n))];case"EnsureShape":return[r.ensureShape(m("x",e,t,n),m("shape",e,t,n))];case"MirrorPad":return[r.mirrorPad(m("x",e,t,n),m("padding",e,t,n),m("mode",e,t,n))];case"PadV2":case"Pad":return[r.pad(m("x",e,t,n),m("padding",e,t,n),m("constantValue",e,t,n))];case"SpaceToBatchND":{const s=m("blockShape",e,t,n),i=m("paddings",e,t,n);return[r.spaceToBatchND(m("x",e,t,n),s,i)]}case"BatchToSpaceND":{const s=m("blockShape",e,t,n),i=m("crops",e,t,n);return[r.batchToSpaceND(m("x",e,t,n),s,i)]}case"DepthToSpace":{const s=m("blockSize",e,t,n),i=m("dataFormat",e,t,n).toUpperCase();return[r.depthToSpace(m("x",e,t,n),s,i)]}case"BroadcastTo":return[r.broadcastTo(m("x",e,t,n),m("shape",e,t,n))];case"BroadcastArgs":return[r.broadcastArgs(m("s0",e,t,n),m("s1",e,t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function cp(e,t,n,r,s=Se){const i=((o,a,u)=>{switch(o.category){case"arithmetic":return s(()=>DE(o,a,u));case"basic_math":return s(()=>FE(o,a,u));case"control":return jE(o,a,u);case"convolution":return s(()=>BE(o,a,u));case"creation":return s(()=>UE(o,a,u));case"dynamic":return VE(o,a,u);case"evaluation":return s(()=>WE(o,a,u));case"image":return s(()=>qE(o,a,u));case"graph":return s(()=>HE(o,a,u));case"logical":return s(()=>XE(o,a,u));case"matrices":return s(()=>YE(o,a,u));case"normalization":return s(()=>QE(o,a,u));case"ragged":return s(()=>JE(o,a,u));case"reduction":return s(()=>ZE(o,a,u));case"slice_join":return s(()=>ex(o,a,u));case"sparse":return s(()=>tx(o,a,u));case"spectral":return s(()=>nx(o,a,u));case"string":return s(()=>rx(o,a,u));case"transformation":return s(()=>sx(o,a,u));case"hash_table":return GE(o,a,u,r);case"custom":const l=f0(o.op);if(l&&l.customExecutor)return l.customExecutor(new CE(o,a,u));throw TypeError(`Custom op ${o.op} is not registered.`);default:throw TypeError(`Unknown op '${o.op}'. File an issue at https://github.com/tensorflow/tfjs/issues so we can add it, or register a custom execution with tf.registerOp()`)}})(e,t,n);return Ws(i)?i.then(o=>[].concat(o)):[].concat(i)}class fp{constructor(t={},n={},r={},s={},i){this.weightMap=t,this.tensorArrayMap=n,this.tensorListMap=r,this.functionMap=s,this.parseNodeNameCache=i,this.rootContext={id:0,frameName:"",iterationId:0},this.contexts=[this.rootContext],this.lastId=0,this.generateCurrentContextIds()}newFrame(t,n){return{id:t,frameName:n,iterationId:0}}set currentContext(t){this.contexts!==t&&(this.contexts=t,this.generateCurrentContextIds())}get currentContext(){return this.contexts}get currentContextId(){return this._currentContextIds[0]}get currentContextIds(){return this._currentContextIds}generateCurrentContextIds(){const t=[];for(let n=0;n<this.contexts.length-1;n++){const r=this.contexts.slice(0,this.contexts.length-n);t.push(this.contextIdforContexts(r))}t.push(""),this._currentContextIds=t}contextIdforContexts(t){return t?t.map(n=>n.id===0&&n.iterationId===0?"":`${n.frameName}-${n.iterationId}`).join("/"):""}enterFrame(t){this.contexts&&(this.lastId++,this.contexts=this.contexts.slice(),this.contexts.push(this.newFrame(this.lastId,t)),this._currentContextIds.unshift(this.contextIdforContexts(this.contexts)))}exitFrame(){if(this.contexts&&this.contexts.length>1)this.contexts=this.contexts.slice(),this.contexts.splice(-1),this.currentContextIds.shift();else throw new Error("Cannot exit frame, the context is empty")}nextIteration(){if(this.contexts&&this.contexts.length>0){this.contexts=this.contexts.slice(),this.lastId++;const t=Object.assign({},this.contexts[this.contexts.length-1]);t.iterationId+=1,t.id=this.lastId,this.contexts.splice(-1,1,t),this._currentContextIds.splice(0,1,this.contextIdforContexts(this.contexts))}else throw new Error("Cannot increase frame iteration, the context is empty")}getWeight(t){return this.weightMap[t]}addTensorArray(t){this.tensorArrayMap[t.id]=t}getTensorArray(t){return this.tensorArrayMap[t]}addTensorList(t){this.tensorListMap[t.id]=t}getTensorList(t){return this.tensorListMap[t]}dispose(t){for(const n in this.tensorArrayMap)this.tensorArrayMap[n].clearAndClose(t);for(const n in this.tensorListMap)this.tensorListMap[n].clearAndClose(t)}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function pp(e,t,n,r){const s=new Set,i=[];let o=null,a=null;const u=new Set,l=new Set(Object.keys(e).map(d=>Kt(d)[0]));r=r||[];const c=new Set(r.map(d=>Kt(d.name)[0])),p=[...t];for(;p.length>0;){const d=p.pop();if((Is(d)||px(d)||hx(d))&&o==null&&(o=d,a=o.children.map(w=>w.name).filter(w=>s.has(w))),s.add(d.name),n[d.name]==null&&!l.has(d.name)&&!c.has(d.name)){if(d.inputs.length===0){i.push(d.name);continue}d.inputs.forEach(w=>{u.has(w.name)||(u.add(w.name),p.push(w))})}}return{inputs:e,outputs:t,usedNodes:s,missingInputs:i,dynamicNode:o,syncInputs:a}}function ix(e,t){const{usedNodes:n,inputs:r}=t,s=Object.keys(r).map(_=>Kt(_)[0]).map(_=>e.nodes[_]),i=e.initNodes||[],o=_=>n.has(typeof _=="string"?_:_.name);function a(_){return[...new Map(_.map(N=>[N.name,N])).values()]}const u=a([...s,...e.weights,...i]).filter(o),l=a([...u,...Object.values(e.nodes)]).filter(o),c=new Map(l.map(_=>[_.name,_])),p={};for(const _ of l){p[_.name]=p[_.name]||0;for(const N of _.children)o(N)||(p[N.name]=Number.POSITIVE_INFINITY),p[N.name]=(p[N.name]||0)+1}const d=Object.entries(p).filter(([,_])=>_===0).map(([_])=>_),w=[...d];for(;d.length>0;){const _=d.pop(),N=c.get(_);for(const x of N.children.filter(o))--p[x.name]===0&&(w.push(x.name),d.push(x.name))}const b=w.map(_=>c.get(_)),E=ox(b,u);return ax(E,u),E}function ox(e,t){const n=new Map(e.map(o=>[o.name,o])),r=t.map(o=>o.name),s=new Set(r);for(;r.length>0;){const o=r.pop(),a=n.get(o);for(const u of a.children)!n.has(u.name)||s.has(u.name)||(s.add(u.name),r.push(u.name))}return e.filter(o=>s.has(o.name))}class iu extends Error{constructor(t){super(`NodesExecutionOrderError: ${t}`)}}function ax(e,t){const n=new Map(e.map((a,u)=>[a.name,u])),r=new Set(t.map(a=>a.name)),s=a=>r.has(typeof a=="string"?a:a.name),i=new Set(e.map(a=>a.name)),o=a=>i.has(typeof a=="string"?a:a.name);for(const a of e){for(const u of a.children.filter(o)){if(!n.has(u.name))throw new iu(`Child ${u.name} of node ${a.name} is unreachable.`);if(n.get(a.name)>n.get(u.name))throw new iu(`Node ${a.name} is scheduled to run after its child ${u.name}.`)}if(!s(a))for(const u of a.inputs){if(!n.has(u.name))throw new iu(`Input ${u.name} of node ${a.name} is unreachable.`);if(n.get(u.name)>n.get(a.name))throw new iu(`Node ${a.name} is scheduled to run before its input ${u.name}.`)}}}function ux(e){const t=new Map(e.map((a,u)=>[a.name,u])),n=Number.MAX_SAFE_INTEGER,r=e.map((a,u)=>Is(a)?n:u),s=a=>{const u=r[t.get(a.name)];return u??-1},i=e.map((a,u)=>a.children.map(s).reduce((l,c)=>Math.max(l,c),r[u])),o=new Map;for(let a=0;a<e.length;++a){const u=i[a];if(u===n)continue;const l=e[a],c=e[u];o.has(c.name)||o.set(c.name,[]),o.get(c.name).push(l)}return o}const lx=new Set(["Switch","Merge","Enter","Exit","NextIteration","StatelessIf","StatelessWhile","if","While"]),cx=new Set(["NonMaxSuppressionV2","NonMaxSuppressionV3","NonMaxSuppressionV5","Where"]),fx=new Set(["HashTable","HashTableV2","LookupTableImport","LookupTableImportV2","LookupTableFind","LookupTableFindV2","LookupTableSize","LookupTableSizeV2"]);function Is(e){return lx.has(e.op)}function px(e){return cx.has(e.op)}function hx(e){return fx.has(e.op)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class il{get weightIds(){return this.parent?this.parent.weightIds:this._weightIds}get functionExecutorMap(){return this.parent?this.parent.functionExecutorMap:this._functionExecutorMap}get weightMap(){return this.parent?this.parent.weightMap:this._weightMap}set weightMap(t){const n=Object.keys(t).map(r=>t[r].map(s=>s.id));this._weightIds=[].concat(...n),this._weightMap=t}set resourceManager(t){this._resourceManager=t}get inputs(){return this._inputs.map(t=>({name:t.name,shape:t.attrParams.shape?t.attrParams.shape.value:void 0,dtype:t.attrParams.dtype?t.attrParams.dtype.value:void 0}))}get outputs(){return this._outputs.map(t=>({name:t.name,shape:t.attrParams.shape?t.attrParams.shape.value:void 0,dtype:t.attrParams.dtype?t.attrParams.dtype.value:void 0}))}get inputNodes(){return this._inputs.map(t=>t.signatureKey||t.name)}get outputNodes(){return this._outputs.map(t=>{const n=t.signatureKey||t.name;return t.defaultOutput?`${n}:${t.defaultOutput}`:n})}get functions(){return Object.keys(this._functions).reduce((t,n)=>(t[n]=this._functions[n].signature,t),{})}constructor(t,n){this.graph=t,this.parent=n,this.compiledMap=new Map,this.parseNodeNameCache=new Map,this._weightMap={},this.SEPARATOR=",",this._functions={},this._functionExecutorMap={},this.keepIntermediateTensors=!1,this._outputs=t.outputs,this._inputs=t.inputs,this._initNodes=t.initNodes,this._signature=t.signature,this._functions=t.functions,t.functions!=null&&Object.keys(t.functions).forEach(r=>{this._functionExecutorMap[r]=new il(t.functions[r],this)})}getCompilationKey(t,n){const r=t.map(i=>i.name).sort(),s=n.map(i=>i.name).sort();return r.join(this.SEPARATOR)+"--"+s.join(this.SEPARATOR)}compile(t,n){const r=pp(t,n,this.weightMap,this._initNodes),{missingInputs:s,dynamicNode:i,syncInputs:o}=r;if(i!=null)throw new Error(`This execution contains the node '${i.name}', which has the dynamic op '${i.op}'. Please use model.executeAsync() instead. Alternatively, to avoid the dynamic ops, specify the inputs [${o}]`);if(s.length>0){const l=n.map(p=>p.name),c=Object.keys(t);throw new Error(`Cannot compute the outputs [${l}] from the provided inputs [${c}]. Missing the following inputs: [${s}]`)}const a=ix(this.graph,r),u=ux(a);return{orderedNodes:a,nodeLiveUntilMap:u}}cloneAndKeepTensor(t){if(t==null)return null;const n=t.clone();return Qn(n),n}cloneTensorList(t){return t?t.map(r=>this.cloneAndKeepTensor(r)):null}cloneTensorMap(t){return Object.fromEntries(Object.entries(t).map(([n,r])=>[n,this.cloneTensorList(r)]))}execute(t,n){this.disposeIntermediateTensors(),t=this.mapInputs(t);const r=Object.keys(t).sort();this.checkInputs(t),this.checkInputShapeAndType(t),n=this.mapOutputs(n),this.checkOutputs(n);const s=r.map(d=>this.graph.nodes[Kt(d)[0]]),i=n.map(d=>Kt(d)[0]),o=new Set(i);let a=i.map(d=>this.graph.nodes[d]);a.length===0&&(a=this._outputs);const u=this.getCompilationKey(s,a);let l=this.compiledMap.get(u);l==null&&(l=this.compile(t,a),this.compiledMap.set(u,l));try{this.keepIntermediateTensors=Te().getBool("KEEP_INTERMEDIATE_TENSORS")}catch(d){this.keepIntermediateTensors=!1,console.warn(d.message)}const c={},p={};return Se(()=>{const d=new fp(this.weightMap,c,p,this.functionExecutorMap,this.parseNodeNameCache),w=Object.assign({},this.weightMap);this.keepIntermediateTensors&&(this.clonedTensorsMap=this.cloneTensorMap(this.weightMap)),Object.keys(t).forEach(N=>{const[x,$]=Kt(N,d),F=[];F[$]=t[N],w[x]=F,this.keepIntermediateTensors&&(this.clonedTensorsMap[x]=this.cloneTensorList(F))});const b=this.getFrozenTensorIds(w),{orderedNodes:E,nodeLiveUntilMap:_}=l;for(const N of E){if(w[N.name])continue;const x=cp(N,w,d,this._resourceManager);if(Ws(x))throw new Error(`The execution of the op '${N.op}' returned a promise. Please use model.executeAsync() instead.`);w[N.name]=x,this.keepIntermediateTensors&&(this.clonedTensorsMap[N.name]=this.cloneTensorList(x)),this.checkTensorForDisposalWithNodeLiveUntilInfo(N,w,d,b,o,_.get(N.name))}return this.parent==null&&d.dispose(b),n.map(N=>yt(N,w,d))})}getFrozenTensorIds(t){const n=[].concat.apply([],Object.keys(t).map(r=>t[r]).map(r=>r.map(s=>s.id)));return new Set(n)}checkTensorForDisposal(t,n,r,s,i,o,a){if(!(Is(n)||o.has(t))){for(const u of r[t])u!=null&&(a[u.id]=(a[u.id]||0)+n.children.length);for(const u of n.inputs){if(Is(u))continue;const l=ip(u.name,r,s);if(l!=null)for(const c of l){if(!c||c.kept||i.has(c.id))continue;const p=a[c.id];p===1?(c.dispose(),delete a[c.id]):p!=null&&a[c.id]--}}}}checkTensorForDisposalWithNodeLiveUntilInfo(t,n,r,s,i,o){function a(u){return Is(u)||i.has(u.name)}if(!(Is(t)||o==null))for(const u of o){if(a(u))continue;const l=ip(u.name,n,r);for(const c of l)!c||c.kept||s.has(c.id)||c.dispose()}}async executeAsync(t,n){return this._executeAsync(t,n)}disposeIntermediateTensors(){this.clonedTensorsMap&&(Object.values(this.clonedTensorsMap).forEach(t=>{for(const n of t)n&&!n.isDisposed&&n.dispose()}),this.clonedTensorsMap=null)}getIntermediateTensors(){return this.clonedTensorsMap}async _executeAsync(t,n,r=!1,s={},i={}){this.disposeIntermediateTensors(),r||(t=this.mapInputs(t),this.checkInputs(t),this.checkInputShapeAndType(t),n=this.mapOutputs(n),this.checkOutputs(n));try{this.keepIntermediateTensors=Te().getBool("KEEP_INTERMEDIATE_TENSORS")}catch(d){this.keepIntermediateTensors=!1,console.warn(d.message)}const o=new fp(this.weightMap,s,i,this.functionExecutorMap,this.parseNodeNameCache);this.keepIntermediateTensors&&(this.clonedTensorsMap=this.cloneTensorMap(this.weightMap));const a=await this.executeWithControlFlow(t,o,n,r),u=n.map(d=>yt(d,a,o)),l=u.map(d=>d.id),c=Object.keys(t).map(d=>t[d].id),p=new Set([...l,...c,...this.weightIds]);return Object.values(a).forEach(d=>{d.forEach(w=>{w&&!w.isDisposed&&!p.has(w.id)&&w.dispose()})}),this.parent==null&&o.dispose(p),u}async executeFunctionAsync(t,n,r){const s=t.reduce((i,o,a)=>(i[this.inputs[a].name]=o,i),{});return this._executeAsync(s,this.outputNodes,!0,n,r)}async executeWithControlFlow(t,n,r,s){const i=Object.keys(t),o=i.map(F=>this.graph.nodes[Kt(F)[0]]),a=r.map(F=>Kt(F)[0]),u=new Set(a);let l=a.map(F=>this.graph.nodes[F]);l.length===0&&(l=this._outputs);const{usedNodes:c,missingInputs:p,dynamicNode:d,syncInputs:w}=pp(t,l,this.weightMap,this._initNodes),b=[...o,...this.graph.weights,...this._initNodes||[]].map(F=>({node:F,contexts:n.currentContext})),E=Object.assign({},this.weightMap);Object.keys(t).forEach(F=>{const[z,M]=Kt(F),V=[];V[M]=t[F],E[z]=V});const _={},N=this.getFrozenTensorIds(E),x={};for(;b.length>0;){const F=this.processStack(o,b,n,E,x,N,u,_,c);await Promise.all(F)}d==null&&!s&&console.warn("This model execution did not contain any nodes with control flow or dynamic output shapes. You can use model.execute() instead.");const $=l.filter(F=>!Is(F)&&!yt(F.name,E,n)).map(F=>F.name);if($.length>0){let F="";throw d!=null&&(F=`Alternatively, to avoid the dynamic ops, use model.execute() and specify the inputs [${w}]`),new Error(`Cannot compute the outputs [${$}] from the provided inputs [${i}]. Consider providing the following inputs: [${p}]. ${F}`)}return E}processStack(t,n,r,s,i,o,a,u,l){const c=[];for(;n.length>0;){const p=n.pop();r.currentContext=p.contexts;let d="";if(p.node.op==="Enter"&&m("isConstant",p.node,s,r)&&([d]=ur(p.node.name,r)),s[p.node.name]==null){const w=cp(p.node,s,r,this._resourceManager);d||([d]=ur(p.node.name,r));const b=r.currentContext;Ws(w)?c.push(w.then(E=>(s[d]=E,this.keepIntermediateTensors&&(this.clonedTensorsMap[d]=this.cloneTensorList(E)),r.currentContext=b,this.checkTensorForDisposal(d,p.node,s,r,o,a,u),this.processChildNodes(p.node,n,r,s,i,l),E))):(s[d]=w,this.keepIntermediateTensors&&(this.clonedTensorsMap[d]=this.cloneTensorList(w)),this.checkTensorForDisposal(d,p.node,s,r,o,a,u),this.processChildNodes(p.node,n,r,s,i,l))}else this.processChildNodes(p.node,n,r,s,i,l)}return c}processChildNodes(t,n,r,s,i,o){t.children.forEach(a=>{const[u]=ur(a.name,r);i[u]||!o.has(a.name)||(a.op==="Merge"?a.inputNames.some(l=>!!yt(l,s,r))&&(i[u]=!0,n.push({contexts:r.currentContext,node:a})):a.inputNames.every(l=>!!yt(l,s,r))&&(i[u]=!0,n.push({contexts:r.currentContext,node:a})))})}dispose(){Object.keys(this.weightMap).forEach(t=>this.weightMap[t].forEach(n=>n.dispose()))}checkInputShapeAndType(t){Object.keys(t).forEach(n=>{const r=t[n],[s]=Kt(n),i=this.graph.nodes[s];if(i.attrParams.shape&&i.attrParams.shape.value){const o=i.attrParams.shape.value,a=o.length===r.shape.length&&r.shape.every((u,l)=>o[l]===-1||o[l]===u);A(a,()=>`The shape of dict['${i.name}'] provided in model.execute(dict) must be [${o}], but was [${r.shape}]`)}i.attrParams.dtype&&i.attrParams.dtype.value&&A(r.dtype===i.attrParams.dtype.value,()=>`The dtype of dict['${i.name}'] provided in model.execute(dict) must be ${i.attrParams.dtype.value}, but was ${r.dtype}`)})}mapInputs(t){var n,r;const s={};for(const i in t){const o=(r=(n=this._signature)===null||n===void 0?void 0:n.inputs)===null||r===void 0?void 0:r[i];o!=null?s[o.name]=t[i]:s[i]=t[i]}return s}checkInputs(t){const n=Object.keys(t).filter(r=>{const[s]=Kt(r);return this.graph.nodes[s]==null});if(n.length>0)throw new Error(`The dict provided in model.execute(dict) has keys: [${n}] that are not part of graph`)}mapOutputs(t){return t.map(n=>{var r,s;const i=(s=(r=this._signature)===null||r===void 0?void 0:r.outputs)===null||s===void 0?void 0:s[n];return i!=null?i.name:n},{})}checkOutputs(t){t.forEach(n=>{const[r]=Kt(n);if(!this.graph.nodes[r])throw new Error(`The output '${n}' is not found in the graph`)})}}class dx{constructor(t={},n={}){this.hashTableNameToHandle=t,this.hashTableMap=n}addHashTable(t,n){this.hashTableNameToHandle[t]=n.handle,this.hashTableMap[n.id]=n}getHashTableHandleByName(t){return this.hashTableNameToHandle[t]}getHashTableById(t){return this.hashTableMap[t]}dispose(){for(const t in this.hashTableMap)this.hashTableMap[t].clearAndClose(),delete this.hashTableMap[t];for(const t in this.hashTableNameToHandle)this.hashTableNameToHandle[t].dispose(),delete this.hashTableNameToHandle[t]}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const mx="?tfjs-format=file",gx="model.json";class yx{get modelVersion(){return this.version}get inputNodes(){return this.executor.inputNodes}get outputNodes(){return this.executor.outputNodes}get inputs(){return this.executor.inputs}get outputs(){return this.executor.outputs}get weights(){return this.executor.weightMap}get metadata(){return this.artifacts.userDefinedMetadata}get modelSignature(){return this.signature}get modelStructuredOutputKeys(){return this.structuredOutputKeys}constructor(t,n={},r=u0){this.modelUrl=t,this.loadOptions=n,this.version="n/a",this.io=r,n==null&&(this.loadOptions={}),this.resourceManager=new dx}findIOHandler(){const t=this.modelUrl;if(t.load!=null)this.handler=t;else if(this.loadOptions.requestInit!=null)this.handler=this.io.browserHTTPRequest(t,this.loadOptions);else{const n=this.io.getLoadHandlers(t,this.loadOptions);if(n.length===0)n.push(this.io.browserHTTPRequest(t,this.loadOptions));else if(n.length>1)throw new Error(`Found more than one (${n.length}) load handlers for URL '${[t]}'`);this.handler=n[0]}}load(){if(this.findIOHandler(),this.handler.load==null)throw new Error("Cannot proceed with model loading because the IOHandler provided does not have the `load` method implemented.");const t=this.handler.load();return Ws(t)?t.then(n=>n.getWeightStream==null?this.loadSync(n):this.loadStreaming(n)):this.loadSync(t)}loadSync(t){const n=this.io.decodeWeights(t.weightData,t.weightSpecs);return this.loadWithWeightMap(t,n)}async loadStreaming(t){if(t.getWeightStream==null)throw new Error("Model artifacts missing streamWeights function");const n=await u4(t.getWeightStream(),t.weightSpecs);return this.loadWithWeightMap(t,n)}loadWithWeightMap(t,n){this.artifacts=t;const r=this.artifacts.modelTopology;let s=this.artifacts.signature;if(this.artifacts.userDefinedMetadata!=null){const i=this.artifacts.userDefinedMetadata;i.signature!=null&&(s=i.signature),i.structuredOutputKeys!=null&&(this.structuredOutputKeys=i.structuredOutputKeys)}if(this.signature=s,this.version=`${r.versions.producer}.${r.versions.minConsumer}`,this.executor=new il(op.Instance.transformGraph(r,this.signature)),this.executor.weightMap=this.convertTensorMapToTensorsMap(n),this.executor.resourceManager=this.resourceManager,t.modelInitializer!=null&&t.modelInitializer.node!=null){const i=op.Instance.transformGraph(t.modelInitializer);this.initializer=new il(i),this.initializer.weightMap=this.executor.weightMap,this.initializer.resourceManager=this.resourceManager,this.initializerSignature=t.initializerSignature}return!0}async save(t,n){if(typeof t=="string"){const r=this.io.getSaveHandlers(t);if(r.length===0)throw new Error(`Cannot find any save handlers for URL '${t}'`);if(r.length>1)throw new Error(`Found more than one (${r.length}) save handlers for URL '${t}'`);t=r[0]}if(t.save==null)throw new Error("GraphModel.save() cannot proceed because the IOHandler provided does not have the `save` attribute defined.");return t.save(this.artifacts)}addStructuredOutputNames(t){if(this.structuredOutputKeys){const n=t instanceof qe?[t]:t,r={};return n.forEach((s,i)=>r[this.structuredOutputKeys[i]]=s),r}return t}predict(t,n){const r=this.execute(t,this.outputNodes);return this.addStructuredOutputNames(r)}async predictAsync(t,n){const r=await this.executeAsync(t,this.outputNodes);return this.addStructuredOutputNames(r)}normalizeInputs(t){var n;if(!(t instanceof qe)&&!Array.isArray(t)){const i=(n=this.signature)===null||n===void 0?void 0:n.inputs;if(i!=null)for(const o in i){const a=i[o];a.resourceId!=null&&(t[o]=this.resourceIdToCapturedInput[a.resourceId])}return t}t=Array.isArray(t)?t:[t];const r=Object.keys(this.resourceIdToCapturedInput).length;if(t.length+r!==this.inputNodes.length)throw new Error(`Input tensor count mismatch, the graph model has ${this.inputNodes.length-r} non-resource placeholders, while there are ${t.length} input tensors provided.`);let s=0;return this.inputNodes.reduce((i,o)=>{var a,u,l;const c=(l=(u=(a=this.signature)===null||a===void 0?void 0:a.inputs)===null||u===void 0?void 0:u[o])===null||l===void 0?void 0:l.resourceId;return c!=null?i[o]=this.resourceIdToCapturedInput[c]:i[o]=t[s++],i},{})}normalizeOutputs(t){return t=t||this.outputNodes,Array.isArray(t)?t:[t]}executeInitializerGraph(){return this.initializer==null?[]:this.initializerSignature==null?this.initializer.execute({},[]):this.initializer.execute({},Object.keys(this.initializerSignature.outputs))}async executeInitializerGraphAsync(){return this.initializer==null?[]:this.initializerSignature==null?this.initializer.executeAsync({},[]):this.initializer.executeAsync({},Object.keys(this.initializerSignature.outputs))}setResourceIdToCapturedInput(t){if(this.resourceIdToCapturedInput={},this.initializerSignature){const n=this.initializerSignature.outputs,r=Object.keys(n);for(let s=0;s<r.length;s++){const i=r[s],o=n[i];this.resourceIdToCapturedInput[o.resourceId]=t[s]}}}execute(t,n){this.resourceIdToCapturedInput==null&&this.setResourceIdToCapturedInput(this.executeInitializerGraph()),t=this.normalizeInputs(t),n=this.normalizeOutputs(n);const r=this.executor.execute(t,n);return r.length>1?r:r[0]}async executeAsync(t,n){this.resourceIdToCapturedInput==null&&this.setResourceIdToCapturedInput(await this.executeInitializerGraphAsync()),t=this.normalizeInputs(t),n=this.normalizeOutputs(n);const r=await this.executor.executeAsync(t,n);return r.length>1?r:r[0]}getIntermediateTensors(){return this.executor.getIntermediateTensors()}disposeIntermediateTensors(){this.executor.disposeIntermediateTensors()}convertTensorMapToTensorsMap(t){return Object.keys(t).reduce((n,r)=>(n[r]=[t[r]],n),{})}dispose(){this.executor.dispose(),this.initializer&&(this.initializer.dispose(),this.resourceIdToCapturedInput&&He(this.resourceIdToCapturedInput)),this.resourceManager.dispose()}}async function d0(e,t={},n=u0){if(e==null)throw new Error("modelUrl in loadGraphModel() cannot be null. Please provide a url or an IOHandler that loads the model");t==null&&(t={}),t.fromTFHub&&typeof e=="string"&&(e=vx(e));const r=new yx(e,t,n);return await r.load(),r}function vx(e){return e.endsWith("/")||(e=e+"/"),`${e}${gx}${mx}`}/**
    * @license
    * Copyright 2023 Google LLC. All Rights Reserved.
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    * http://www.apache.org/licenses/LICENSE-2.0
    *
    * Unless required by applicable law or agreed to in writing, software
    * distributed under the License is distributed on an "AS IS" BASIS,
    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    * See the License for the specific language governing permissions and
    * limitations under the License.
    * =============================================================================
    */var zn=function(){return zn=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var s in t=arguments[n])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},zn.apply(this,arguments)};function hr(e,t,n,r){return new(n||(n=Promise))(function(s,i){function o(l){try{u(r.next(l))}catch(c){i(c)}}function a(l){try{u(r.throw(l))}catch(c){i(c)}}function u(l){var c;l.done?s(l.value):(c=l.value,c instanceof n?c:new n(function(p){p(c)})).then(o,a)}u((r=r.apply(e,[])).next())})}function dr(e,t){var n,r,s,i,o={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(i[Symbol.iterator]=function(){return this}),i;function a(u){return function(l){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(s=2&c[0]?r.return:c[0]?r.throw||((s=r.return)&&s.call(r),0):r.next)&&!(s=s.call(r,c[1])).done)return s;switch(r=0,s&&(c=[2&c[0],s.value]),c[0]){case 0:case 1:s=c;break;case 4:return o.label++,{value:c[1],done:!1};case 5:o.label++,r=c[1],c=[0];continue;case 7:c=o.ops.pop(),o.trys.pop();continue;default:if(s=o.trys,!((s=s.length>0&&s[s.length-1])||c[0]!==6&&c[0]!==2)){o=0;continue}if(c[0]===3&&(!s||c[1]>s[0]&&c[1]<s[3])){o.label=c[1];break}if(c[0]===6&&o.label<s[1]){o.label=s[1],s=c;break}if(s&&o.label<s[2]){o.label=s[2],o.ops.push(c);break}s[2]&&o.ops.pop(),o.trys.pop();continue}c=t.call(e,o)}catch(p){c=[6,p],r=0}finally{n=s=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([u,l])}}}function zr(e){var t=e.map(function(n){return n[0]});return t.push(e[e.length-1][1]),t}var m0={lips:zr([[61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]]),leftEye:zr([[263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]]),leftEyebrow:zr([[276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]]),leftIris:zr([[474,475],[475,476],[476,477],[477,474]]),rightEye:zr([[33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]]),rightEyebrow:zr([[46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]]),rightIris:zr([[469,470],[470,471],[471,472],[472,469]]),faceOval:zr([[10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]])},wx=[[127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]],Sx=Object.entries(m0).map(function(e){var t=e[0];return e[1].map(function(n){return[n,t]})}).flat(),g0=new Map(Sx);function n2(e){for(var t={locationData:{relativeKeypoints:[]}},n=Number.MAX_SAFE_INTEGER,r=Number.MIN_SAFE_INTEGER,s=Number.MAX_SAFE_INTEGER,i=Number.MIN_SAFE_INTEGER,o=0;o<e.length;++o){var a=e[o];n=Math.min(n,a.x),r=Math.max(r,a.x),s=Math.min(s,a.y),i=Math.max(i,a.y),t.locationData.relativeKeypoints.push({x:a.x,y:a.y})}return t.locationData.relativeBoundingBox={xMin:n,yMin:s,xMax:r,yMax:i,width:r-n,height:i-s},t}var Nc={runtime:"mediapipe",maxFaces:1,refineLandmarks:!1},bx=function(){function e(t){var n=this;this.width=0,this.height=0,this.selfieMode=!1,this.faceMeshSolution=new Jg({locateFile:function(r,s){return t.solutionPath?t.solutionPath.replace(/\/+$/,"")+"/"+r:s+"/"+r}}),this.faceMeshSolution.setOptions({refineLandmarks:t.refineLandmarks,selfieMode:this.selfieMode,maxNumFaces:t.maxFaces}),this.faceMeshSolution.onResults(function(r){if(n.height=r.image.height,n.width=r.image.width,n.faces=[],r.multiFaceLandmarks!==null)for(var s=r.multiFaceLandmarks,i=0;i<s.length;i++){var o=n.translateOutput(s[i]);n.faces.push({keypoints:o,box:n2(o).locationData.relativeBoundingBox})}})}return e.prototype.translateOutput=function(t){var n=this;return t.map(function(r,s){var i={x:r.x*n.width,y:r.y*n.height,z:r.z*n.width},o=g0.get(s);return o!=null&&(i.name=o),i})},e.prototype.estimateFaces=function(t,n){return hr(this,void 0,void 0,function(){var r,s;return dr(this,function(i){switch(i.label){case 0:return n&&n.flipHorizontal&&n.flipHorizontal!==this.selfieMode&&(this.selfieMode=n.flipHorizontal,this.faceMeshSolution.setOptions({selfieMode:this.selfieMode})),t instanceof qe?(s=ImageData.bind,[4,l0(t)]):[3,2];case 1:return r=new(s.apply(ImageData,[void 0,i.sent(),t.shape[1],t.shape[0]])),[3,3];case 2:r=t,i.label=3;case 3:return t=r,[4,this.faceMeshSolution.send({image:t})];case 4:return i.sent(),[2,this.faces]}})})},e.prototype.dispose=function(){this.faceMeshSolution.close()},e.prototype.reset=function(){this.faceMeshSolution.reset(),this.width=0,this.height=0,this.faces=null,this.selfieMode=!1},e.prototype.initialize=function(){return this.faceMeshSolution.initialize()},e}();function Nx(e){return hr(this,void 0,void 0,function(){var t,n;return dr(this,function(r){switch(r.label){case 0:return t=function(s){if(s==null)return zn({},Nc);var i=zn({},s);return i.runtime="mediapipe",i.maxFaces==null&&(i.maxFaces=Nc.maxFaces),i.refineLandmarks==null&&(i.refineLandmarks=Nc.refineLandmarks),i}(e),[4,(n=new bx(t)).initialize()];case 1:return r.sent(),[2,n]}})})}var kc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},kx={};(function(){var e;function t(f){var y=0;return function(){return y<f.length?{done:!1,value:f[y++]}:{done:!0}}}var n=typeof Object.defineProperties=="function"?Object.defineProperty:function(f,y,S){return f==Array.prototype||f==Object.prototype||(f[y]=S.value),f},r=function(f){f=[typeof globalThis=="object"&&globalThis,f,typeof window=="object"&&window,typeof self=="object"&&self,typeof kc=="object"&&kc];for(var y=0;y<f.length;++y){var S=f[y];if(S&&S.Math==Math)return S}throw Error("Cannot find global object")}(this);function s(f,y){if(y)e:{var S=r;f=f.split(".");for(var k=0;k<f.length-1;k++){var O=f[k];if(!(O in S))break e;S=S[O]}(y=y(k=S[f=f[f.length-1]]))!=k&&y!=null&&n(S,f,{configurable:!0,writable:!0,value:y})}}function i(f){return(f={next:f})[Symbol.iterator]=function(){return this},f}function o(f){var y=typeof Symbol<"u"&&Symbol.iterator&&f[Symbol.iterator];return y?y.call(f):{next:t(f)}}function a(f){if(!(f instanceof Array)){f=o(f);for(var y,S=[];!(y=f.next()).done;)S.push(y.value);f=S}return f}s("Symbol",function(f){function y(O,I){this.g=O,n(this,"description",{configurable:!0,writable:!0,value:I})}if(f)return f;y.prototype.toString=function(){return this.g};var S="jscomp_symbol_"+(1e9*Math.random()>>>0)+"_",k=0;return function O(I){if(this instanceof O)throw new TypeError("Symbol is not a constructor");return new y(S+(I||"")+"_"+k++,I)}}),s("Symbol.iterator",function(f){if(f)return f;f=Symbol("Symbol.iterator");for(var y="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),S=0;S<y.length;S++){var k=r[y[S]];typeof k=="function"&&typeof k.prototype[f]!="function"&&n(k.prototype,f,{configurable:!0,writable:!0,value:function(){return i(t(this))}})}return f});var u,l=typeof Object.create=="function"?Object.create:function(f){function y(){}return y.prototype=f,new y};if(typeof Object.setPrototypeOf=="function")u=Object.setPrototypeOf;else{var c;e:{var p={};try{p.__proto__={a:!0},c=p.a;break e}catch{}c=!1}u=c?function(f,y){if(f.__proto__=y,f.__proto__!==y)throw new TypeError(f+" is not extensible");return f}:null}var d=u;function w(f,y){if(f.prototype=l(y.prototype),f.prototype.constructor=f,d)d(f,y);else for(var S in y)if(S!="prototype")if(Object.defineProperties){var k=Object.getOwnPropertyDescriptor(y,S);k&&Object.defineProperty(f,S,k)}else f[S]=y[S];f.na=y.prototype}function b(){this.l=!1,this.i=null,this.h=void 0,this.g=1,this.u=this.o=0,this.j=null}function E(f){if(f.l)throw new TypeError("Generator is already running");f.l=!0}function _(f,y){f.j={da:y,ea:!0},f.g=f.o||f.u}function N(f,y,S){return f.g=S,{value:y}}function x(f){this.g=new b,this.h=f}function $(f,y,S,k){try{var O=y.call(f.g.i,S);if(!(O instanceof Object))throw new TypeError("Iterator result "+O+" is not an object");if(!O.done)return f.g.l=!1,O;var I=O.value}catch(D){return f.g.i=null,_(f.g,D),F(f)}return f.g.i=null,k.call(f.g,I),F(f)}function F(f){for(;f.g.g;)try{var y=f.h(f.g);if(y)return f.g.l=!1,{value:y.value,done:!1}}catch(S){f.g.h=void 0,_(f.g,S)}if(f.g.l=!1,f.g.j){if(y=f.g.j,f.g.j=null,y.ea)throw y.da;return{value:y.return,done:!0}}return{value:void 0,done:!0}}function z(f){this.next=function(y){return E(f.g),f.g.i?y=$(f,f.g.i.next,y,f.g.s):(f.g.s(y),y=F(f)),y},this.throw=function(y){return E(f.g),f.g.i?y=$(f,f.g.i.throw,y,f.g.s):(_(f.g,y),y=F(f)),y},this.return=function(y){return function(S,k){E(S.g);var O=S.g.i;return O?$(S,"return"in O?O.return:function(I){return{value:I,done:!0}},k,S.g.return):(S.g.return(k),F(S))}(f,y)},this[Symbol.iterator]=function(){return this}}function M(f){return function(y){function S(O){return y.next(O)}function k(O){return y.throw(O)}return new Promise(function(O,I){(function D(R){R.done?O(R.value):Promise.resolve(R.value).then(S,k).then(D,I)})(y.next())})}(new z(new x(f)))}b.prototype.s=function(f){this.h=f},b.prototype.return=function(f){this.j={return:f},this.g=this.u},s("Promise",function(f){function y(D){this.h=0,this.i=void 0,this.g=[],this.s=!1;var R=this.j();try{D(R.resolve,R.reject)}catch(U){R.reject(U)}}function S(){this.g=null}function k(D){return D instanceof y?D:new y(function(R){R(D)})}if(f)return f;S.prototype.h=function(D){if(this.g==null){this.g=[];var R=this;this.i(function(){R.l()})}this.g.push(D)};var O=r.setTimeout;S.prototype.i=function(D){O(D,0)},S.prototype.l=function(){for(;this.g&&this.g.length;){var D=this.g;this.g=[];for(var R=0;R<D.length;++R){var U=D[R];D[R]=null;try{U()}catch(K){this.j(K)}}}this.g=null},S.prototype.j=function(D){this.i(function(){throw D})},y.prototype.j=function(){function D(K){return function(Y){U||(U=!0,K.call(R,Y))}}var R=this,U=!1;return{resolve:D(this.D),reject:D(this.l)}},y.prototype.D=function(D){if(D===this)this.l(new TypeError("A Promise cannot resolve to itself"));else if(D instanceof y)this.H(D);else{e:switch(typeof D){case"object":var R=D!=null;break e;case"function":R=!0;break e;default:R=!1}R?this.A(D):this.o(D)}},y.prototype.A=function(D){var R=void 0;try{R=D.then}catch(U){return void this.l(U)}typeof R=="function"?this.I(R,D):this.o(D)},y.prototype.l=function(D){this.u(2,D)},y.prototype.o=function(D){this.u(1,D)},y.prototype.u=function(D,R){if(this.h!=0)throw Error("Cannot settle("+D+", "+R+"): Promise already settled in state"+this.h);this.h=D,this.i=R,this.h===2&&this.G(),this.B()},y.prototype.G=function(){var D=this;O(function(){if(D.C()){var R=r.console;R!==void 0&&R.error(D.i)}},1)},y.prototype.C=function(){if(this.s)return!1;var D=r.CustomEvent,R=r.Event,U=r.dispatchEvent;return U===void 0||(typeof D=="function"?D=new D("unhandledrejection",{cancelable:!0}):typeof R=="function"?D=new R("unhandledrejection",{cancelable:!0}):(D=r.document.createEvent("CustomEvent")).initCustomEvent("unhandledrejection",!1,!0,D),D.promise=this,D.reason=this.i,U(D))},y.prototype.B=function(){if(this.g!=null){for(var D=0;D<this.g.length;++D)I.h(this.g[D]);this.g=null}};var I=new S;return y.prototype.H=function(D){var R=this.j();D.M(R.resolve,R.reject)},y.prototype.I=function(D,R){var U=this.j();try{D.call(R,U.resolve,U.reject)}catch(K){U.reject(K)}},y.prototype.then=function(D,R){function U(ne,se){return typeof ne=="function"?function(de){try{K(ne(de))}catch(ge){Y(ge)}}:se}var K,Y,ee=new y(function(ne,se){K=ne,Y=se});return this.M(U(D,K),U(R,Y)),ee},y.prototype.catch=function(D){return this.then(void 0,D)},y.prototype.M=function(D,R){function U(){switch(K.h){case 1:D(K.i);break;case 2:R(K.i);break;default:throw Error("Unexpected state: "+K.h)}}var K=this;this.g==null?I.h(U):this.g.push(U),this.s=!0},y.resolve=k,y.reject=function(D){return new y(function(R,U){U(D)})},y.race=function(D){return new y(function(R,U){for(var K=o(D),Y=K.next();!Y.done;Y=K.next())k(Y.value).M(R,U)})},y.all=function(D){var R=o(D),U=R.next();return U.done?k([]):new y(function(K,Y){function ee(de){return function(ge){ne[de]=ge,--se==0&&K(ne)}}var ne=[],se=0;do ne.push(void 0),se++,k(U.value).M(ee(ne.length-1),Y),U=R.next();while(!U.done)})},y});var V=typeof Object.assign=="function"?Object.assign:function(f,y){for(var S=1;S<arguments.length;S++){var k=arguments[S];if(k)for(var O in k)Object.prototype.hasOwnProperty.call(k,O)&&(f[O]=k[O])}return f};s("Object.assign",function(f){return f||V}),s("Object.is",function(f){return f||function(y,S){return y===S?y!==0||1/y==1/S:y!=y&&S!=S}}),s("Array.prototype.includes",function(f){return f||function(y,S){var k=this;k instanceof String&&(k=String(k));var O=k.length;for(0>(S=S||0)&&(S=Math.max(S+O,0));S<O;S++){var I=k[S];if(I===y||Object.is(I,y))return!0}return!1}}),s("String.prototype.includes",function(f){return f||function(y,S){if(this==null)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(y instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return this.indexOf(y,S||0)!==-1}}),s("Array.prototype.keys",function(f){return f||function(){return function(y,S){y instanceof String&&(y+="");var k=0,O=!1,I={next:function(){if(!O&&k<y.length){var D=k++;return{value:S(D,y[D]),done:!1}}return O=!0,{done:!0,value:void 0}}};return I[Symbol.iterator]=function(){return I},I}(this,function(y){return y})}});var W=this||self;function X(f,y){f=f.split(".");var S,k=W;for((f[0]in k)||k.execScript===void 0||k.execScript("var "+f[0]);f.length&&(S=f.shift());)f.length||y===void 0?k=k[S]&&k[S]!==Object.prototype[S]?k[S]:k[S]={}:k[S]=y}function Q(){throw Error("Invalid UTF8")}function ue(f,y){return y=String.fromCharCode.apply(null,y),f==null?y:f+y}var Ne,ce,Ce=typeof TextDecoder<"u",Je=typeof TextEncoder<"u",rt={},Ze=null;function re(f){var y;y===void 0&&(y=0),he(),y=rt[y];for(var S=Array(Math.floor(f.length/3)),k=y[64]||"",O=0,I=0;O<f.length-2;O+=3){var D=f[O],R=f[O+1],U=f[O+2],K=y[D>>2];D=y[(3&D)<<4|R>>4],R=y[(15&R)<<2|U>>6],U=y[63&U],S[I++]=K+D+R+U}switch(K=0,U=k,f.length-O){case 2:U=y[(15&(K=f[O+1]))<<2]||k;case 1:f=f[O],S[I]=y[f>>2]+y[(3&f)<<4|K>>4]+U+k}return S.join("")}function fe(f){var y=f.length,S=3*y/4;S%3?S=Math.floor(S):"=.".indexOf(f[y-1])!=-1&&(S="=.".indexOf(f[y-2])!=-1?S-2:S-1);var k=new Uint8Array(S),O=0;return function(I,D){function R(se){for(;U<I.length;){var de=I.charAt(U++),ge=Ze[de];if(ge!=null)return ge;if(!/^[\s\xa0]*$/.test(de))throw Error("Unknown base64 encoding at char: "+de)}return se}he();for(var U=0;;){var K=R(-1),Y=R(0),ee=R(64),ne=R(64);if(ne===64&&K===-1)break;D(K<<2|Y>>4),ee!=64&&(D(Y<<4&240|ee>>2),ne!=64&&D(ee<<6&192|ne))}}(f,function(I){k[O++]=I}),O!==S?k.subarray(0,O):k}function he(){if(!Ze){Ze={};for(var f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),y=["+/=","+/","-_=","-_.","-_"],S=0;5>S;S++){var k=f.concat(y[S].split(""));rt[S]=k;for(var O=0;O<k.length;O++){var I=k[O];Ze[I]===void 0&&(Ze[I]=O)}}}}var Ae,Ke=typeof Uint8Array=="function";function Un(f){return Ke&&f!=null&&f instanceof Uint8Array}function pn(f){if(this.L=f,f!==null&&f.length===0)throw Error("ByteString should be constructed with non-empty values")}var Ar=typeof Uint8Array.prototype.slice=="function",dt=0;function Vn(f,y){return Error("Invalid wire type: "+f+" (at position "+y+")")}function ri(){return Error("Failed to read varint, encoding is invalid.")}function hn(f,y){y=(y=y===void 0?{}:y).v!==void 0&&y.v,this.h=null,this.g=this.i=this.j=0,this.v=y,f&&dn(this,f)}function dn(f,y){f.h=function(S,k){if(S.constructor===Uint8Array)return S;if(S.constructor===ArrayBuffer)return new Uint8Array(S);if(S.constructor===Array)return new Uint8Array(S);if(S.constructor===String)return fe(S);if(S.constructor===pn)return!k&&(k=S.L)&&k.constructor===Uint8Array?k:(k=(k=S.L)==null||Un(k)?k:typeof k=="string"?fe(k):null,(S=S.L=k)?new Uint8Array(S):Ae||(Ae=new Uint8Array(0)));if(S instanceof Uint8Array)return new Uint8Array(S.buffer,S.byteOffset,S.byteLength);throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, or Array of numbers")}(y,f.v),f.j=0,f.i=f.h.length,f.g=f.j}function et(f){if(f.g>f.i)throw Error("Tried to read past the end of the data "+f.g+" > "+f.i)}function Or(f){var y=f.h,S=y[f.g],k=127&S;if(128>S)return f.g+=1,et(f),k;if(k|=(127&(S=y[f.g+1]))<<7,128>S)return f.g+=2,et(f),k;if(k|=(127&(S=y[f.g+2]))<<14,128>S)return f.g+=3,et(f),k;if(k|=(127&(S=y[f.g+3]))<<21,128>S)return f.g+=4,et(f),k;if(S=y[f.g+4],f.g+=5,k|=(15&S)<<28,128>S)return et(f),k;if(128<=y[f.g++]&&128<=y[f.g++]&&128<=y[f.g++]&&128<=y[f.g++]&&128<=y[f.g++])throw ri();return et(f),k}hn.prototype.reset=function(){this.g=this.j};var ds=[];function si(){this.g=[]}function mn(f,y){for(;127<y;)f.g.push(127&y|128),y>>>=7;f.g.push(y)}function $n(f){var y={},S=y.W!==void 0&&y.W;this.l={v:y.v!==void 0&&y.v},this.W=S,y=this.l,ds.length?(S=ds.pop(),y&&(S.v=y.v),f&&dn(S,f),f=S):f=new hn(f,y),this.g=f,this.j=this.g.g,this.h=this.i=-1}function Cr(f){var y=f.g;if(y.g==y.i)return!1;f.j=f.g.g;var S=Or(f.g)>>>0;if(y=S>>>3,!(0<=(S&=7)&&5>=S))throw Vn(S,f.j);if(1>y)throw Error("Invalid field number: "+y+" (at position "+f.j+")");return f.i=y,f.h=S,!0}function jt(f){switch(f.h){case 0:if(f.h!=0)jt(f);else e:{for(var y=(f=f.g).g,S=y+10;y<S;)if(!(128&f.h[y++])){f.g=y,et(f);break e}throw ri()}break;case 1:(f=f.g).g+=8,et(f);break;case 2:f.h!=2?jt(f):(y=Or(f.g)>>>0,(f=f.g).g+=y,et(f));break;case 5:(f=f.g).g+=4,et(f);break;case 3:for(y=f.i;;){if(!Cr(f))throw Error("Unmatched start-group tag: stream EOF");if(f.h==4){if(f.i!=y)throw Error("Unmatched end-group tag");break}jt(f)}break;default:throw Vn(f.h,f.j)}}si.prototype.length=function(){return this.g.length},si.prototype.end=function(){var f=this.g;return this.g=[],f},$n.prototype.reset=function(){this.g.reset(),this.j=this.g.g,this.h=this.i=-1};var In=[];function ii(){this.i=[],this.h=0,this.g=new si}function lt(f,y){y.length!==0&&(f.i.push(y),f.h+=y.length)}var ms=typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol(void 0):void 0;function Zi(f,y){Object.isFrozen(f)||(ms?f[ms]|=y:f.N!==void 0?f.N|=y:Object.defineProperties(f,{N:{value:y,configurable:!0,writable:!0,enumerable:!1}}))}function eo(f){var y;return(y=ms?f[ms]:f.N)==null?0:y}function rr(f){return Zi(f,1),f}function gn(f){return!!Array.isArray(f)&&!!(2&eo(f))}function gs(f){if(!Array.isArray(f))throw Error("cannot mark non-array as immutable");Zi(f,2)}function Bt(f){return f!==null&&typeof f=="object"&&!Array.isArray(f)&&f.constructor===Object}var ys=Object.freeze(rr([]));function to(f){if(gn(f.m))throw Error("Cannot mutate an immutable Message")}var no,ka=typeof Symbol<"u"&&Symbol.hasInstance!==void 0;function Ta(f){return{value:f,configurable:!1,writable:!1,enumerable:!1}}function bt(f,y,S){return y===-1?null:y>=f.i?f.g?f.g[y]:void 0:S!==void 0&&S&&f.g&&(S=f.g[y])!=null?S:f.m[y+f.h]}function tt(f,y,S,k){k=k!==void 0&&k,to(f),y<f.i&&!k?f.m[y+f.h]=S:(f.g||(f.g=f.m[f.i+f.h]={}))[y]=S}function st(f,y,S,k){S=S===void 0||S;var O=bt(f,y,k=k!==void 0&&k);return O==null&&(O=ys),gn(f.m)?S&&(gs(O),Object.freeze(O)):(O===ys||gn(O))&&tt(f,y,O=rr(O.slice()),k),O}function Ct(f,y,S){return(f=(f=bt(f,y))==null?f:+f)==null?S===void 0?0:S:f}function vs(f,y,S,k){f.j||(f.j={});var O=gn(f.m),I=f.j[S];if(!I){k=st(f,S,!0,k!==void 0&&k),I=[],O=O||gn(k);for(var D=0;D<k.length;D++)I[D]=new y(k[D]),O&&gs(I[D].m);O&&(gs(I),Object.freeze(I)),f.j[S]=I}return I}function Re(f,y,S,k,O){var I=I!==void 0&&I;return to(f),I=vs(f,S,y,I),S=k||new S,f=st(f,y),O!=null?(I.splice(O,0,S),f.splice(O,0,S.m)):(I.push(S),f.push(S.m)),S}function ws(f,y){return(f=bt(f,y))==null?0:f}function ro(f,y){return(f=bt(f,y))==null?"":f}function Wn(f){var y=Ea;return be(f,y=y===void 0?oi:y)}function Jt(f,y){if(f!=null){if(Array.isArray(f))f=be(f,y);else if(Bt(f)){var S,k={};for(S in f)k[S]=Jt(f[S],y);f=k}else f=y(f);return f}}function be(f,y){for(var S=f.slice(),k=0;k<S.length;k++)S[k]=Jt(S[k],y);return Array.isArray(f)&&1&eo(f)&&rr(S),S}function Ea(f){return f&&typeof f=="object"&&f.toJSON?f.toJSON():(f=function(y){switch(typeof y){case"number":return isFinite(y)?y:String(y);case"object":if(y&&!Array.isArray(y)){if(Un(y))return re(y);if(y instanceof pn){var S=y.L;return S=S==null||typeof S=="string"?S:Ke&&S instanceof Uint8Array?re(S):null,(y.L=S)||""}}}return y}(f),Array.isArray(f)?Wn(f):f)}function oi(f){return Un(f)?new Uint8Array(f):f}function Ss(f,y,S){f||(f=no),no=null;var k=this.constructor.h;if(f||(f=k?[k]:[]),this.h=(k?0:-1)-(this.constructor.g||0),this.j=void 0,this.m=f,f=(k=this.m.length)-1,k&&Bt(k=this.m[f])?(this.i=f-this.h,this.g=k):y!==void 0&&-1<y?(this.i=Math.max(y,f+1-this.h),this.g=void 0):this.i=Number.MAX_VALUE,S)for(y=0;y<S.length;y++)if((f=S[y])<this.i)f+=this.h,(k=this.m[f])?Array.isArray(k)&&rr(k):this.m[f]=ys;else{var O=(k=this.g||(this.g=this.m[this.i+this.h]={}))[f];O?Array.isArray(O)&&rr(O):k[f]=ys}}function bs(){Ss.apply(this,arguments)}if(Ss.prototype.toJSON=function(){return Wn(this.m)},Ss.prototype.toString=function(){return this.m.toString()},w(bs,Ss),ka){var Hn={};Object.defineProperties(bs,(Hn[Symbol.hasInstance]=Ta(function(){throw Error("Cannot perform instanceof checks for MutableMessage")}),Hn))}function ai(f,y,S){if(S){var k,O={};for(k in S){var I=S[k],D=I.ha;D||(O.F=I.la||I.fa.P,I.aa?(O.U=_a(I.aa),D=function(R){return function(U,K,Y){return R.F(U,K,Y,R.U)}}(O)):I.ca?(O.T=ui(I.X.g,I.ca),D=function(R){return function(U,K,Y){return R.F(U,K,Y,R.T)}}(O)):D=O.F,I.ha=D),D(y,f,I.X),O={F:O.F,U:O.U,T:O.T}}}(function(R,U){if(U=U.ba){lt(R,R.g.end());for(var K=0;K<U.length;K++)lt(R,U[K])}})(y,f)}var Zt=Symbol();function Kn(f,y,S){return f[Zt]||(f[Zt]=function(k,O){return y(k,O,S)})}function xa(f){var y=f[Zt];if(!y){var S=Ca(f);y=function(k,O){return so(k,O,S)},f[Zt]=y}return y}function Cl(f){var y=function(O){var I=O.aa;return I?xa(I):(I=O.ka)?Kn(O.X.g,I,O.ca):void 0}(f),S=f.X,k=f.fa.O;return y?function(O,I){return k(O,I,S,y)}:function(O,I){return k(O,I,S)}}function mt(f,y,S,k,O,I){var D=0;for((f=f()).length&&typeof f[0]!="number"&&(S(y,f[0]),D++);D<f.length;){S=f[D++];for(var R=D+1;R<f.length&&typeof f[R]!="number";)R++;var U=f[D++];switch(R-=D){case 0:k(y,S,U);break;case 1:k(y,S,U,f[D++]);break;case 2:O(y,S,U,f[D++],f[D++]);break;case 3:R=f[D++];var K=f[D++],Y=f[D++];Array.isArray(Y)?O(y,S,U,R,K,Y):I(y,S,U,R,K,Y);break;case 4:I(y,S,U,f[D++],f[D++],f[D++],f[D++]);break;default:throw Error("unexpected number of binary field arguments: "+R)}}return y}var Gn=Symbol();function _a(f){var y=f[Gn];if(!y){var S=Oa(f);y=function(k,O){return oo(k,O,S)},f[Gn]=y}return y}function ui(f,y){var S=f[Gn];return S||(S=function(k,O){return ai(k,O,y)},f[Gn]=S),S}var $a=Symbol();function Dr(f,y){f.push(y)}function Dl(f,y,S){f.push(y,S.P)}function Ia(f,y,S,k,O){var I=_a(O),D=S.P;f.push(y,function(R,U,K){return D(R,U,K,k,I)})}function Aa(f,y,S,k,O,I){var D=ui(k,I),R=S.P;f.push(y,function(U,K,Y){return R(U,K,Y,k,D)})}function Oa(f){var y=f[$a];return y||mt(f,f[$a]=[],Dr,Dl,Ia,Aa)}var li=Symbol();function sr(f,y){f[0]=y}function Fl(f,y,S,k){var O=S.O;f[y]=k?function(I,D,R){return O(I,D,R,k)}:O}function Pl(f,y,S,k,O,I){var D=S.O,R=xa(O);f[y]=function(U,K,Y){return D(U,K,Y,k,R,I)}}function ci(f,y,S,k,O,I,D){var R=S.O,U=Kn(k,O,I);f[y]=function(K,Y,ee){return R(K,Y,ee,k,U,D)}}function Ca(f){var y=f[li];return y||mt(f,f[li]={},sr,Fl,Pl,ci)}function so(f,y,S){for(;Cr(y)&&y.h!=4;){var k=y.i,O=S[k];if(!O){var I=S[0];I&&(I=I[k])&&(O=S[k]=Cl(I))}if(!(O&&O(y,f,k)||(O=y,k=f,I=O.j,jt(O),O.W))){var D=O.g.h;O=I===(O=O.g.g)?Ae||(Ae=new Uint8Array(0)):Ar?D.slice(I,O):new Uint8Array(D.subarray(I,O)),(I=k.ba)?I.push(O):k.ba=[O]}}return f}function io(f,y,S){if(In.length){var k=In.pop();f&&(dn(k.g,f),k.i=-1,k.h=-1),f=k}else f=new $n(f);try{return so(new y,f,Ca(S))}finally{(y=f.g).h=null,y.j=0,y.i=0,y.g=0,y.v=!1,f.i=-1,f.h=-1,100>In.length&&In.push(f)}}function oo(f,y,S){for(var k=S.length,O=k%2==1,I=O?1:0;I<k;I+=2)(0,S[I+1])(y,f,S[I]);ai(f,y,O?S[0]:void 0)}function Ns(f,y){var S=new ii;oo(f,S,Oa(y)),lt(S,S.g.end()),f=new Uint8Array(S.h);for(var k=(y=S.i).length,O=0,I=0;I<k;I++){var D=y[I];f.set(D,O),O+=D.length}return S.i=[f],f}function Fr(f,y){return{O:f,P:y}}var en=Fr(function(f,y,S){if(f.h!==5)return!1;var k=(f=f.g).h[f.g],O=f.h[f.g+1],I=f.h[f.g+2],D=f.h[f.g+3];return f.g+=4,et(f),f=2*((O=(k<<0|O<<8|I<<16|D<<24)>>>0)>>31)+1,k=O>>>23&255,O&=8388607,tt(y,S,k==255?O?NaN:1/0*f:k==0?f*Math.pow(2,-149)*O:f*Math.pow(2,k-150)*(O+Math.pow(2,23))),!0},function(f,y,S){if((y=bt(y,S))!=null){mn(f.g,8*S+5),f=f.g;var k=y;(k=(S=0>k?1:0)?-k:k)===0?0<1/k?dt=0:dt=2147483648:isNaN(k)?dt=2147483647:34028234663852886e22<k?dt=(S<<31|2139095040)>>>0:11754943508222875e-54>k?(k=Math.round(k/Math.pow(2,-149)),dt=(S<<31|k)>>>0):(y=Math.floor(Math.log(k)/Math.LN2),k*=Math.pow(2,-y),16777216<=(k=Math.round(8388608*k))&&++y,dt=(S<<31|y+127<<23|8388607&k)>>>0),S=dt,f.g.push(S>>>0&255),f.g.push(S>>>8&255),f.g.push(S>>>16&255),f.g.push(S>>>24&255)}}),Rl=Fr(function(f,y,S){if(f.h!==0)return!1;for(var k=f.g,O=128,I=0,D=f=0;4>D&&128<=O;D++)O=k.h[k.g++],et(k),I|=(127&O)<<7*D;if(128<=O&&(O=k.h[k.g++],et(k),I|=(127&O)<<28,f|=(127&O)>>4),128<=O)for(D=0;5>D&&128<=O;D++)O=k.h[k.g++],et(k),f|=(127&O)<<7*D+3;if(!(128>O))throw ri();return k=I>>>0,(f=2147483648&(O=f>>>0))&&(O=~O>>>0,(k=1+~k>>>0)==0&&(O=O+1>>>0)),k=4294967296*O+(k>>>0),tt(y,S,f?-k:k),!0},function(f,y,S){if((y=bt(y,S))!=null&&y!=null){mn(f.g,8*S),f=f.g;var k=y;for(S=0>k,y=(k=Math.abs(k))>>>0,k=Math.floor((k-y)/4294967296),k>>>=0,S&&(k=~k>>>0,4294967295<(y=1+(~y>>>0))&&(y=0,4294967295<++k&&(k=0))),S=dt=y,y=k;0<y||127<S;)f.g.push(127&S|128),S=(S>>>7|y<<25)>>>0,y>>>=7;f.g.push(S)}}),Ll=Fr(function(f,y,S){return f.h===0&&(tt(y,S,Or(f.g)),!0)},function(f,y,S){if((y=bt(y,S))!=null&&y!=null)if(mn(f.g,8*S),f=f.g,0<=(S=y))mn(f,S);else{for(y=0;9>y;y++)f.g.push(127&S|128),S>>=7;f.g.push(1)}}),Da=Fr(function(f,y,S){if(f.h!==2)return!1;var k,O=Or(f.g)>>>0,I=(f=f.g).g;if(f.g+=O,et(f),f=f.h,Ce)(k=Ne)||(k=Ne=new TextDecoder("utf-8",{fatal:!0})),k=k.decode(f.subarray(I,I+O));else{O=I+O;for(var D,R,U,K=[],Y=null;I<O;)128>(D=f[I++])?K.push(D):224>D?I>=O?Q():(R=f[I++],194>D||(192&R)!=128?(I--,Q()):K.push((31&D)<<6|63&R)):240>D?I>=O-1?Q():(192&(R=f[I++]))!=128||D===224&&160>R||D===237&&160<=R||(192&(k=f[I++]))!=128?(I--,Q()):K.push((15&D)<<12|(63&R)<<6|63&k):244>=D?I>=O-2?Q():(192&(R=f[I++]))!=128||R-144+(D<<28)>>30||(192&(k=f[I++]))!=128||(192&(U=f[I++]))!=128?(I--,Q()):(D=(7&D)<<18|(63&R)<<12|(63&k)<<6|63&U,D-=65536,K.push(55296+(D>>10&1023),56320+(1023&D))):Q(),8192<=K.length&&(Y=ue(Y,K),K.length=0);k=ue(Y,K)}return tt(y,S,k),!0},function(f,y,S){if((y=bt(y,S))!=null){var k=!1;if(k=k!==void 0&&k,Je){if(k&&/(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(y))throw Error("Found an unpaired surrogate");y=(ce||(ce=new TextEncoder)).encode(y)}else{for(var O=0,I=new Uint8Array(3*y.length),D=0;D<y.length;D++){var R=y.charCodeAt(D);if(128>R)I[O++]=R;else{if(2048>R)I[O++]=R>>6|192;else{if(55296<=R&&57343>=R){if(56319>=R&&D<y.length){var U=y.charCodeAt(++D);if(56320<=U&&57343>=U){R=1024*(R-55296)+U-56320+65536,I[O++]=R>>18|240,I[O++]=R>>12&63|128,I[O++]=R>>6&63|128,I[O++]=63&R|128;continue}D--}if(k)throw Error("Found an unpaired surrogate");R=65533}I[O++]=R>>12|224,I[O++]=R>>6&63|128}I[O++]=63&R|128}}y=I.subarray(0,O)}mn(f.g,8*S+2),mn(f.g,y.length),lt(f,f.g.end()),lt(f,y)}}),ao=Fr(function(f,y,S,k,O){if(f.h!==2)return!1;y=Re(y,S,k),S=f.g.i,k=Or(f.g)>>>0;var I=f.g.g+k,D=I-S;if(0>=D&&(f.g.i=I,O(y,f),D=I-f.g.g),D)throw Error("Message parsing ended unexpectedly. Expected to read "+k+" bytes, instead read "+(k-D)+" bytes, either the data ended unexpectedly or the message misreported its own length");return f.g.g=I,f.g.i=S,!0},function(f,y,S,k,O){if((y=vs(y,k,S))!=null)for(k=0;k<y.length;k++){var I=f;mn(I.g,8*S+2);var D=I.g.end();lt(I,D),D.push(I.h),I=D,O(y[k],f),D=f;var R=I.pop();for(R=D.h+D.g.length()-R;127<R;)I.push(127&R|128),R>>>=7,D.h++;I.push(R),D.h++}});function Ut(){bs.apply(this,arguments)}if(w(Ut,bs),ka){var Fa={};Object.defineProperties(Ut,(Fa[Symbol.hasInstance]=Ta(Object[Symbol.hasInstance]),Fa))}function ir(f){Ut.call(this,f)}function Pa(){return[1,Ll,2,en,3,Da,4,Da]}function uo(f){Ut.call(this,f,-1,Ml)}function zl(){return[1,ao,ir,Pa]}w(ir,Ut),w(uo,Ut),uo.prototype.addClassification=function(f,y){return Re(this,1,ir,f,y),this};var Ml=[1];function Pr(f){Ut.call(this,f)}function Ra(){return[1,en,2,en,3,en,4,en,5,en]}function La(f){Ut.call(this,f,-1,Bl)}function jl(){return[1,ao,Pr,Ra]}w(Pr,Ut),w(La,Ut);var Bl=[1];function lo(f){Ut.call(this,f)}function co(){return[1,en,2,en,3,en,4,en,5,en,6,Rl]}w(lo,Ut);var fo=[[61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]],po=[[263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]],ho=[[276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]],mo=[[33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]],go=[[46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]],za=[[10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]],Ma=[].concat(a(fo),a(po),a(ho),a(mo),a(go),a(za));function h(f,y,S){if(S=f.createShader(S===0?f.VERTEX_SHADER:f.FRAGMENT_SHADER),f.shaderSource(S,y),f.compileShader(S),!f.getShaderParameter(S,f.COMPILE_STATUS))throw Error(`Could not compile WebGL shader.

`+f.getShaderInfoLog(S));return S}function g(f){return vs(f,ir,1).map(function(y){return{index:ws(y,1),ga:Ct(y,2),label:bt(y,3)!=null?ro(y,3):void 0,displayName:bt(y,4)!=null?ro(y,4):void 0}})}function v(f){return{x:Ct(f,1),y:Ct(f,2),z:Ct(f,3),visibility:bt(f,4)!=null?Ct(f,4):void 0}}function C(f,y){this.h=f,this.g=y,this.l=0}function j(f,y,S){return function(k,O){var I=k.g;if(k.o===void 0){var D=h(I,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,0),R=h(I,`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D sampler0;
  void main(){
    gl_FragColor = texture2D(sampler0, vTex);
  }`,1),U=I.createProgram();if(I.attachShader(U,D),I.attachShader(U,R),I.linkProgram(U),!I.getProgramParameter(U,I.LINK_STATUS))throw Error(`Could not compile WebGL program.

`+I.getProgramInfoLog(U));D=k.o=U,I.useProgram(D),R=I.getUniformLocation(D,"sampler0"),k.j={K:I.getAttribLocation(D,"aVertex"),J:I.getAttribLocation(D,"aTex"),ma:R},k.u=I.createBuffer(),I.bindBuffer(I.ARRAY_BUFFER,k.u),I.enableVertexAttribArray(k.j.K),I.vertexAttribPointer(k.j.K,2,I.FLOAT,!1,0,0),I.bufferData(I.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),I.STATIC_DRAW),I.bindBuffer(I.ARRAY_BUFFER,null),k.s=I.createBuffer(),I.bindBuffer(I.ARRAY_BUFFER,k.s),I.enableVertexAttribArray(k.j.J),I.vertexAttribPointer(k.j.J,2,I.FLOAT,!1,0,0),I.bufferData(I.ARRAY_BUFFER,new Float32Array([0,1,0,0,1,0,1,1]),I.STATIC_DRAW),I.bindBuffer(I.ARRAY_BUFFER,null),I.uniform1i(R,0)}D=k.j,I.useProgram(k.o),I.canvas.width=O.width,I.canvas.height=O.height,I.viewport(0,0,O.width,O.height),I.activeTexture(I.TEXTURE0),k.h.bindTexture2d(O.glName),I.enableVertexAttribArray(D.K),I.bindBuffer(I.ARRAY_BUFFER,k.u),I.vertexAttribPointer(D.K,2,I.FLOAT,!1,0,0),I.enableVertexAttribArray(D.J),I.bindBuffer(I.ARRAY_BUFFER,k.s),I.vertexAttribPointer(D.J,2,I.FLOAT,!1,0,0),I.bindFramebuffer(I.DRAW_FRAMEBUFFER?I.DRAW_FRAMEBUFFER:I.FRAMEBUFFER,null),I.clearColor(0,0,0,0),I.clear(I.COLOR_BUFFER_BIT),I.colorMask(!0,!0,!0,!0),I.drawArrays(I.TRIANGLE_FAN,0,4),I.disableVertexAttribArray(D.K),I.disableVertexAttribArray(D.J),I.bindBuffer(I.ARRAY_BUFFER,null),k.h.bindTexture2d(0)}(f,y),typeof f.g.canvas.transferToImageBitmap=="function"?Promise.resolve(f.g.canvas.transferToImageBitmap()):S?Promise.resolve(f.g.canvas):typeof createImageBitmap=="function"?createImageBitmap(f.g.canvas):(f.i===void 0&&(f.i=document.createElement("canvas")),new Promise(function(k){f.i.height=f.g.canvas.height,f.i.width=f.g.canvas.width,f.i.getContext("2d",{}).drawImage(f.g.canvas,0,0,f.g.canvas.width,f.g.canvas.height),k(f.i)}))}function H(f){this.g=f}var B=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,9,1,7,0,65,0,253,15,26,11]);function G(f,y){return y+f}function Z(f,y){window[f]=y}function ie(f){if(this.g=f,this.listeners={},this.j={},this.H={},this.o={},this.u={},this.I=this.s=this.Z=!0,this.D=Promise.resolve(),this.Y="",this.C={},this.locateFile=f&&f.locateFile||G,typeof window=="object")var y=window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/";else{if(typeof location>"u")throw Error("solutions can only be loaded on a web page or in a web worker");y=location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/"}if(this.$=y,f.options)for(var S=(y=o(Object.keys(f.options))).next();!S.done;S=y.next()){S=S.value;var k=f.options[S].default;k!==void 0&&(this.j[S]=typeof k=="function"?k():k)}}function pe(f){var y,S,k,O,I,D,R,U,K,Y,ee;return M(function(ne){switch(ne.g){case 1:return f.Z?(y=f.g.files===void 0?[]:typeof f.g.files=="function"?f.g.files(f.j):f.g.files,N(ne,M(function(se){switch(se.g){case 1:return se.o=2,N(se,WebAssembly.instantiate(B),4);case 4:se.g=3,se.o=0;break;case 2:return se.o=0,se.j=null,se.return(!1);case 3:return se.return(!0)}}),2)):ne.return();case 2:if(S=ne.h,typeof window=="object")return Z("createMediapipeSolutionsWasm",{locateFile:f.locateFile}),Z("createMediapipeSolutionsPackedAssets",{locateFile:f.locateFile}),D=y.filter(function(se){return se.data!==void 0}),R=y.filter(function(se){return se.data===void 0}),U=Promise.all(D.map(function(se){var de=xe(f,se.url);if(se.path!==void 0){var ge=se.path;de=de.then(function(Pe){return f.overrideFile(ge,Pe),Promise.resolve(Pe)})}return de})),K=Promise.all(R.map(function(se){return se.simd===void 0||se.simd&&S||!se.simd&&!S?function(de){var ge=document.createElement("script");return ge.setAttribute("src",de),ge.setAttribute("crossorigin","anonymous"),new Promise(function(Pe){ge.addEventListener("load",function(){Pe()},!1),ge.addEventListener("error",function(){Pe()},!1),document.body.appendChild(ge)})}(f.locateFile(se.url,f.$)):Promise.resolve()})).then(function(){var se,de,ge;return M(function(Pe){if(Pe.g==1)return se=window.createMediapipeSolutionsWasm,de=window.createMediapipeSolutionsPackedAssets,ge=f,N(Pe,se(de),2);ge.h=Pe.h,Pe.g=0})}),Y=M(function(se){return f.g.graph&&f.g.graph.url?se=N(se,xe(f,f.g.graph.url),0):(se.g=0,se=void 0),se}),N(ne,Promise.all([K,U,Y]),7);if(typeof importScripts!="function")throw Error("solutions can only be loaded on a web page or in a web worker");return k=y.filter(function(se){return se.simd===void 0||se.simd&&S||!se.simd&&!S}).map(function(se){return f.locateFile(se.url,f.$)}),importScripts.apply(null,a(k)),O=f,N(ne,createMediapipeSolutionsWasm(Module),6);case 6:O.h=ne.h,f.l=new OffscreenCanvas(1,1),f.h.canvas=f.l,I=f.h.GL.createContext(f.l,{antialias:!1,alpha:!1,ja:typeof WebGL2RenderingContext<"u"?2:1}),f.h.GL.makeContextCurrent(I),ne.g=4;break;case 7:if(f.l=document.createElement("canvas"),!(ee=f.l.getContext("webgl2",{}))&&!(ee=f.l.getContext("webgl",{})))return alert("Failed to create WebGL canvas context when passing video frame."),ne.return();f.G=ee,f.h.canvas=f.l,f.h.createContext(f.l,!0,!0,{});case 4:f.i=new f.h.SolutionWasm,f.Z=!1,ne.g=0}})}function xe(f,y){var S,k;return M(function(O){return y in f.H?O.return(f.H[y]):(S=f.locateFile(y,""),k=fetch(S).then(function(I){return I.arrayBuffer()}),f.H[y]=k,O.return(k))})}function we(f,y,S){var k,O,I,D,R,U,K,Y,ee,ne,se,de,ge,Pe;return M(function(Le){switch(Le.g){case 1:if(!S)return Le.return(y);for(k={},O=0,I=o(Object.keys(S)),D=I.next();!D.done;D=I.next())R=D.value,typeof(U=S[R])!="string"&&U.type==="texture"&&y[U.stream]!==void 0&&++O;1<O&&(f.I=!1),K=o(Object.keys(S)),D=K.next();case 2:if(D.done){Le.g=4;break}if(Y=D.value,typeof(ee=S[Y])=="string")return ge=k,Pe=Y,N(Le,function(ks,If,fi){var ja;return M(function(Ul){return typeof fi=="number"||fi instanceof Uint8Array||fi instanceof ks.h.Uint8BlobList?Ul.return(fi):fi instanceof ks.h.Texture2dDataOut?((ja=ks.u[If])||(ja=new C(ks.h,ks.G),ks.u[If]=ja),Ul.return(j(ja,fi,ks.I))):Ul.return(void 0)})}(f,Y,y[ee]),14);if(ne=y[ee.stream],ee.type==="detection_list"){if(ne){for(var Dt=ne.getRectList(),yn=ne.getLandmarksList(),Vt=ne.getClassificationsList(),Oe=[],Nt=0;Nt<Dt.size();++Nt){var Rr=io(Dt.get(Nt),lo,co);Rr={boundingBox:{xCenter:Ct(Rr,1),yCenter:Ct(Rr,2),height:Ct(Rr,3),width:Ct(Rr,4),rotation:Ct(Rr,5,0),rectId:ws(Rr,6)},landmarks:vs(io(yn.get(Nt),La,jl),Pr,1).map(v),V:g(io(Vt.get(Nt),uo,zl))},Oe.push(Rr)}Dt=Oe}else Dt=[];k[Y]=Dt,Le.g=7;break}if(ee.type==="proto_list"){if(ne){for(Dt=Array(ne.size()),yn=0;yn<ne.size();yn++)Dt[yn]=ne.get(yn);ne.delete()}else Dt=[];k[Y]=Dt,Le.g=7;break}if(ne===void 0){Le.g=3;break}if(ee.type==="float_list"){k[Y]=ne,Le.g=7;break}if(ee.type==="proto"){k[Y]=ne,Le.g=7;break}if(ee.type!=="texture")throw Error("Unknown output config type: '"+ee.type+"'");return(se=f.u[Y])||(se=new C(f.h,f.G),f.u[Y]=se),N(Le,j(se,ne,f.I),13);case 13:de=Le.h,k[Y]=de;case 7:ee.transform&&k[Y]&&(k[Y]=ee.transform(k[Y])),Le.g=3;break;case 14:ge[Pe]=Le.h;case 3:D=K.next(),Le.g=2;break;case 4:return Le.return(k)}})}function me(f,y){for(var S=y.name||"$",k=[].concat(a(y.wants)),O=new f.h.StringList,I=o(y.wants),D=I.next();!D.done;D=I.next())O.push_back(D.value);I=f.h.PacketListener.implement({onResults:function(R){for(var U={},K=0;K<y.wants.length;++K)U[k[K]]=R.get(K);var Y=f.listeners[S];Y&&(f.D=we(f,U,y.outs).then(function(ee){ee=Y(ee);for(var ne=0;ne<y.wants.length;++ne){var se=U[k[ne]];typeof se=="object"&&se.hasOwnProperty&&se.hasOwnProperty("delete")&&se.delete()}ee&&(f.D=ee)}))}}),f.i.attachMultiListener(O,I),O.delete()}function ae(f){var y=this;f=f||{};var S={url:"face_detection_short.binarypb"},k={type:1,graphOptionXref:{calculatorType:"TensorsToDetectionsCalculator",calculatorName:"facedetectionshortrangegpu__facedetectionshortrangecommon__TensorsToDetectionsCalculator",fieldName:"min_score_thresh"}};this.g=new ie({locateFile:f.locateFile,files:[{data:!0,url:"face_detection_short.binarypb"},{data:!0,url:"face_detection_short_range.tflite"},{simd:!0,url:"face_detection_solution_simd_wasm_bin.js"},{simd:!1,url:"face_detection_solution_wasm_bin.js"}],graph:S,listeners:[{wants:["detections","image_transformed"],outs:{image:"image_transformed",detections:{type:"detection_list",stream:"detections"}}}],inputs:{image:{type:"video",stream:"input_frames_gpu"}},options:{useCpuInference:{type:0,graphOptionXref:{calculatorType:"InferenceCalculator",fieldName:"use_cpu_inference"},default:typeof window=="object"&&window.navigator!==void 0&&("iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document)},selfieMode:{type:0,graphOptionXref:{calculatorType:"GlScalerCalculator",calculatorIndex:1,fieldName:"flip_horizontal"}},model:{type:0,onChange:function(O){var I,D,R,U,K;return M(function(Y){switch(Y.g){case 1:I=o(O==="short"?["face_detection_short_range.tflite"]:["face_detection_full_range_sparse.tflite"]),D=I.next();case 2:if(D.done){Y.g=4;break}return R=D.value,U="third_party/mediapipe/modules/face_detection/"+R,N(Y,xe(y.g,R),5);case 5:K=Y.h,y.g.overrideFile(U,K),D=I.next(),Y.g=2;break;case 4:return S.url=O==="short"?"face_detection_short.binarypb":"face_detection_full.binarypb",k.graphOptionXref.calculatorName=O==="short"?"facedetectionshortrangegpu__facedetectionshortrangecommon__TensorsToDetectionsCalculator":"facedetectionfullrangegpu__facedetectionfullrangecommon__TensorsToDetectionsCalculator",Y.return(!0)}})}},minDetectionConfidence:k}})}(e=ie.prototype).close=function(){return this.i&&this.i.delete(),Promise.resolve()},e.reset=function(){var f=this;return M(function(y){f.i&&(f.i.reset(),f.o={},f.u={}),y.g=0})},e.setOptions=function(f,y){var S=this;if(y=y||this.g.options){for(var k=[],O=[],I={},D=o(Object.keys(f)),R=D.next();!R.done;I={R:I.R,S:I.S},R=D.next()){var U=R.value;U in this.j&&this.j[U]===f[U]||(this.j[U]=f[U],(R=y[U])!==void 0&&(R.onChange&&(I.R=R.onChange,I.S=f[U],k.push(function(K){return function(){return M(function(Y){if(Y.g==1)return N(Y,K.R(K.S),2);Y.h===!0&&(S.s=!0),Y.g=0})}}(I))),R.graphOptionXref&&(U={valueNumber:R.type===1?f[U]:0,valueBoolean:R.type===0&&f[U],valueString:R.type===2?f[U]:""},R=Object.assign(Object.assign(Object.assign({},{calculatorName:"",calculatorIndex:0}),R.graphOptionXref),U),O.push(R))))}k.length===0&&O.length===0||(this.s=!0,this.B=(this.B===void 0?[]:this.B).concat(O),this.A=(this.A===void 0?[]:this.A).concat(k))}},e.initialize=function(){var f=this;return M(function(y){return y.g==1?N(y,pe(f),2):y.g!=3?N(y,function(S){var k,O,I,D,R,U,K,Y;return M(function(ee){if(ee.g==1)return S.g.graph&&S.g.graph.url&&S.Y===S.g.graph.url?ee.return():(S.s=!0,S.g.graph&&S.g.graph.url?(S.Y=S.g.graph.url,N(ee,xe(S,S.g.graph.url),3)):void(ee.g=2));for(ee.g!=2&&(k=ee.h,S.i.loadGraph(k)),O=o(Object.keys(S.C)),I=O.next();!I.done;I=O.next())D=I.value,S.i.overrideFile(D,S.C[D]);if(S.C={},S.g.listeners)for(R=o(S.g.listeners),U=R.next();!U.done;U=R.next())K=U.value,me(S,K);Y=S.j,S.j={},S.setOptions(Y),ee.g=0})}(f),3):N(y,function(S){var k,O,I,D,R,U;return M(function(K){switch(K.g){case 1:if(!S.s)return K.return();if(!S.A){K.g=2;break}k=o(S.A),O=k.next();case 3:if(O.done){K.g=5;break}return N(K,(0,O.value)(),4);case 4:O=k.next(),K.g=3;break;case 5:S.A=void 0;case 2:if(S.B){for(I=new S.h.GraphOptionChangeRequestList,D=o(S.B),R=D.next();!R.done;R=D.next())U=R.value,I.push_back(U);S.i.changeOptions(I),I.delete(),S.B=void 0}S.s=!1,K.g=0}})}(f),0)})},e.overrideFile=function(f,y){this.i?this.i.overrideFile(f,y):this.C[f]=y},e.clearOverriddenFiles=function(){this.C={},this.i&&this.i.clearOverriddenFiles()},e.send=function(f,y){var S,k,O,I,D,R,U,K,Y,ee=this;return M(function(ne){switch(ne.g){case 1:return ee.g.inputs?(S=1e3*(y??performance.now()),N(ne,ee.D,2)):ne.return();case 2:return N(ne,ee.initialize(),3);case 3:for(k=new ee.h.PacketDataList,O=o(Object.keys(f)),I=O.next();!I.done;I=O.next())if(D=I.value,R=ee.g.inputs[D]){e:{var se=f[D];switch(R.type){case"video":var de=ee.o[R.stream];if(de||(de=new C(ee.h,ee.G),ee.o[R.stream]=de),de.l===0&&(de.l=de.h.createTexture()),typeof HTMLVideoElement<"u"&&se instanceof HTMLVideoElement)var ge=se.videoWidth,Pe=se.videoHeight;else typeof HTMLImageElement<"u"&&se instanceof HTMLImageElement?(ge=se.naturalWidth,Pe=se.naturalHeight):(ge=se.width,Pe=se.height);Pe={glName:de.l,width:ge,height:Pe},(ge=de.g).canvas.width=Pe.width,ge.canvas.height=Pe.height,ge.activeTexture(ge.TEXTURE0),de.h.bindTexture2d(de.l),ge.texImage2D(ge.TEXTURE_2D,0,ge.RGBA,ge.RGBA,ge.UNSIGNED_BYTE,se),de.h.bindTexture2d(0),de=Pe;break e;case"detections":for((de=ee.o[R.stream])||(de=new H(ee.h),ee.o[R.stream]=de),de.data||(de.data=new de.g.DetectionListData),de.data.reset(se.length),Pe=0;Pe<se.length;++Pe){ge=se[Pe];var Le=de.data,Dt=Le.setBoundingBox,yn=Pe,Vt=ge.boundingBox,Oe=new lo;if(tt(Oe,1,Vt.xCenter),tt(Oe,2,Vt.yCenter),tt(Oe,3,Vt.height),tt(Oe,4,Vt.width),tt(Oe,5,Vt.rotation),tt(Oe,6,Vt.rectId),Vt=Ns(Oe,co),Dt.call(Le,yn,Vt),ge.landmarks)for(Le=0;Le<ge.landmarks.length;++Le){var Nt=!!(Oe=ge.landmarks[Le]).visibility;yn=(Dt=de.data).addNormalizedLandmark,Vt=Pe,Oe=Object.assign(Object.assign({},Oe),{visibility:Nt?Oe.visibility:0}),tt(Nt=new Pr,1,Oe.x),tt(Nt,2,Oe.y),tt(Nt,3,Oe.z),Oe.visibility&&tt(Nt,4,Oe.visibility),Oe=Ns(Nt,Ra),yn.call(Dt,Vt,Oe)}if(ge.V)for(Le=0;Le<ge.V.length;++Le)yn=(Dt=de.data).addClassification,Vt=Pe,Oe=ge.V[Le],tt(Nt=new ir,2,Oe.ga),Oe.index&&tt(Nt,1,Oe.index),Oe.label&&tt(Nt,3,Oe.label),Oe.displayName&&tt(Nt,4,Oe.displayName),Oe=Ns(Nt,Pa),yn.call(Dt,Vt,Oe)}de=de.data;break e;default:de={}}}switch(U=de,K=R.stream,R.type){case"video":k.pushTexture2d(Object.assign(Object.assign({},U),{stream:K,timestamp:S}));break;case"detections":(Y=U).stream=K,Y.timestamp=S,k.pushDetectionList(Y);break;default:throw Error("Unknown input config type: '"+R.type+"'")}}return ee.i.send(k),N(ne,ee.D,4);case 4:k.delete(),ne.g=0}})},e.onResults=function(f,y){this.listeners[y||"$"]=f},X("Solution",ie),X("OptionType",{BOOL:0,NUMBER:1,ia:2,0:"BOOL",1:"NUMBER",2:"STRING"}),(e=ae.prototype).close=function(){return this.g.close(),Promise.resolve()},e.onResults=function(f){this.g.onResults(f)},e.initialize=function(){var f=this;return M(function(y){return N(y,f.g.initialize(),0)})},e.reset=function(){this.g.reset()},e.send=function(f){var y=this;return M(function(S){return N(S,y.g.send(f),0)})},e.setOptions=function(f){this.g.setOptions(f)},X("FaceDetection",ae),X("FACEDETECTION_LIPS",fo),X("FACEDETECTION_LEFT_EYE",po),X("FACEDETECTION_LEFT_EYEBROW",ho),X("FACEDETECTION_RIGHT_EYE",mo),X("FACEDETECTION_RIGHT_EYEBROW",go),X("FACEDETECTION_FACE_OVAL",za),X("FACEDETECTION_CONTOURS",Ma),X("FACEDETECTION_TESSELATION",[[127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]]),X("VERSION","0.4.1646425229")}).call(kc);var as=function(){return as=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var s in t=arguments[n])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},as.apply(this,arguments)};function xr(e,t,n,r){return new(n||(n=Promise))(function(s,i){function o(l){try{u(r.next(l))}catch(c){i(c)}}function a(l){try{u(r.throw(l))}catch(c){i(c)}}function u(l){var c;l.done?s(l.value):(c=l.value,c instanceof n?c:new n(function(p){p(c)})).then(o,a)}u((r=r.apply(e,[])).next())})}function _r(e,t){var n,r,s,i,o={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(i[Symbol.iterator]=function(){return this}),i;function a(u){return function(l){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(s=2&c[0]?r.return:c[0]?r.throw||((s=r.return)&&s.call(r),0):r.next)&&!(s=s.call(r,c[1])).done)return s;switch(r=0,s&&(c=[2&c[0],s.value]),c[0]){case 0:case 1:s=c;break;case 4:return o.label++,{value:c[1],done:!1};case 5:o.label++,r=c[1],c=[0];continue;case 7:c=o.ops.pop(),o.trys.pop();continue;default:if(!((s=(s=o.trys).length>0&&s[s.length-1])||c[0]!==6&&c[0]!==2)){o=0;continue}if(c[0]===3&&(!s||c[1]>s[0]&&c[1]<s[3])){o.label=c[1];break}if(c[0]===6&&o.label<s[1]){o.label=s[1],s=c;break}if(s&&o.label<s[2]){o.label=s[2],o.ops.push(c);break}s[2]&&o.ops.pop(),o.trys.pop();continue}c=t.call(e,o)}catch(p){c=[6,p],r=0}finally{n=s=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([u,l])}}}var y0=["rightEye","leftEye","noseTip","mouthCenter","rightEarTragion","leftEarTragion"],Tc={modelType:"short",runtime:"mediapipe",maxFaces:1},Tx=function(){function e(t){var n=this;this.width=0,this.height=0,this.selfieMode=!1,this.faceDetectorSolution=new kx.FaceDetection({locateFile:function(r,s){return t.solutionPath?t.solutionPath.replace(/\/+$/,"")+"/"+r:s+"/"+r}}),this.faceDetectorSolution.setOptions({selfieMode:this.selfieMode,model:t.modelType}),this.faceDetectorSolution.onResults(function(r){if(n.height=r.image.height,n.width=r.image.width,n.faces=[],r.detections!==null)for(var s=0,i=r.detections;s<i.length;s++){var o=i[s];n.faces.push(n.normalizedToAbsolute(o.landmarks,{xMin:u=(a=o.boundingBox).xCenter-a.width/2,xMax:u+a.width,yMin:l=a.yCenter-a.height/2,yMax:l+a.height,width:a.width,height:a.height}))}var a,u,l})}return e.prototype.normalizedToAbsolute=function(t,n){var r=this;return{keypoints:t.map(function(s,i){return{x:s.x*r.width,y:s.y*r.height,name:y0[i]}}),box:{xMin:n.xMin*this.width,yMin:n.yMin*this.height,xMax:n.xMax*this.width,yMax:n.yMax*this.height,width:n.width*this.width,height:n.height*this.height}}},e.prototype.estimateFaces=function(t,n){return xr(this,void 0,void 0,function(){var r,s;return _r(this,function(i){switch(i.label){case 0:return n&&n.flipHorizontal&&n.flipHorizontal!==this.selfieMode&&(this.selfieMode=n.flipHorizontal,this.faceDetectorSolution.setOptions({selfieMode:this.selfieMode})),t instanceof qe?(s=ImageData.bind,[4,l0(t)]):[3,2];case 1:return r=new(s.apply(ImageData,[void 0,i.sent(),t.shape[1],t.shape[0]])),[3,3];case 2:r=t,i.label=3;case 3:return t=r,[4,this.faceDetectorSolution.send({image:t})];case 4:return i.sent(),[2,this.faces]}})})},e.prototype.dispose=function(){this.faceDetectorSolution.close()},e.prototype.reset=function(){this.faceDetectorSolution.reset(),this.width=0,this.height=0,this.faces=null,this.selfieMode=!1},e.prototype.initialize=function(){return this.faceDetectorSolution.initialize()},e}();function Ex(e){return xr(this,void 0,void 0,function(){var t,n;return _r(this,function(r){switch(r.label){case 0:return t=function(s){if(s==null)return as({},Tc);var i=as({},s);return i.runtime="mediapipe",i.modelType==null&&(i.modelType=Tc.modelType),i.maxFaces==null&&(i.maxFaces=Tc.maxFaces),i}(e),[4,(n=new Tx(t)).initialize()];case 1:return r.sent(),[2,n]}})})}function v0(e){return e instanceof qe?{height:e.shape[0],width:e.shape[1]}:{height:e.height,width:e.width}}function w0(e){return e instanceof qe?e:c0(e)}function Ec(e,t){A(e.width!==0,function(){return t+" width cannot be 0."}),A(e.height!==0,function(){return t+" height cannot be 0."})}function xx(e,t,n){var r=t.outputTensorSize,s=t.keepAspectRatio,i=t.borderMode,o=t.outputTensorFloatRange,a=v0(e),u=function(d,w){return{xCenter:.5*d.width,yCenter:.5*d.height,width:d.width,height:d.height,rotation:0}}(a),l=function(d,w,b){if(b===void 0&&(b=!1),!b)return{top:0,left:0,right:0,bottom:0};var E=w.height,_=w.width;Ec(w,"targetSize"),Ec(d,"roi");var N,x,$=E/_,F=d.height/d.width,z=0,M=0;return $>F?(N=d.width,x=d.width*$,M=(1-F/$)/2):(N=d.height/$,x=d.height,z=(1-$/F)/2),d.width=N,d.height=x,{top:M,left:z,right:z,bottom:M}}(u,r,s),c=function(d,w,b,E){var _=d.width,N=d.height,x=1,$=Math.cos(d.rotation),F=Math.sin(d.rotation),z=d.xCenter,M=d.yCenter,V=1/w,W=1/b,X=new Array(16);return X[0]=_*$*x*V,X[1]=-N*F*V,X[2]=0,X[3]=(-.5*_*$*x+.5*N*F+z)*V,X[4]=_*F*x*W,X[5]=N*$*W,X[6]=0,X[7]=(-.5*N*$-.5*_*F*x+M)*W,X[8]=0,X[9]=0,X[10]=_*V,X[11]=0,X[12]=0,X[13]=0,X[14]=0,X[15]=1,function(Q){if(Q.length!==16)throw new Error("Array length must be 16 but got "+Q.length);return[[Q[0],Q[1],Q[2],Q[3]],[Q[4],Q[5],Q[6],Q[7]],[Q[8],Q[9],Q[10],Q[11]],[Q[12],Q[13],Q[14],Q[15]]]}(X)}(u,a.width,a.height),p=Se(function(){var d=w0(e),w=ns(function(_,N,x){return Ec(x,"inputResolution"),[1/x.width*_[0][0]*N.width,1/x.height*_[0][1]*N.width,_[0][3]*N.width,1/x.width*_[1][0]*N.height,1/x.height*_[1][1]*N.height,_[1][3]*N.height,0,0]}(c,a,r),[1,8]),b=i==="zero"?"constant":"nearest",E=Ji.transform(bn(je(d,"float32")),w,"bilinear",b,0,[r.height,r.width]);return o!=null?function(_,N){var x=function($,F,z,M){var V=(M-z)/255;return{scale:V,offset:z-0*V}}(0,0,N[0],N[1]);return Se(function(){return le(te(_,x.scale),x.offset)})}(E,o):E});return{imageTensor:p,padding:l,transformationMatrix:c}}function hp(e){e.reduceBoxesInLowestLayer==null&&(e.reduceBoxesInLowestLayer=!1),e.interpolatedScaleAspectRatio==null&&(e.interpolatedScaleAspectRatio=1),e.fixedAnchorSize==null&&(e.fixedAnchorSize=!1);for(var t=[],n=0;n<e.numLayers;){for(var r=[],s=[],i=[],o=[],a=n;a<e.strides.length&&e.strides[a]===e.strides[n];){var u=dp(e.minScale,e.maxScale,a,e.strides.length);if(a===0&&e.reduceBoxesInLowestLayer)i.push(1),i.push(2),i.push(.5),o.push(.1),o.push(u),o.push(u);else{for(var l=0;l<e.aspectRatios.length;++l)i.push(e.aspectRatios[l]),o.push(u);if(e.interpolatedScaleAspectRatio>0){var c=a===e.strides.length-1?1:dp(e.minScale,e.maxScale,a+1,e.strides.length);o.push(Math.sqrt(u*c)),i.push(e.interpolatedScaleAspectRatio)}}a++}for(var p=0;p<i.length;++p){var d=Math.sqrt(i[p]);r.push(o[p]/d),s.push(o[p]*d)}var w=0,b=0;if(e.featureMapHeight.length>0)w=e.featureMapHeight[n],b=e.featureMapWidth[n];else{var E=e.strides[n];w=Math.ceil(e.inputSizeHeight/E),b=Math.ceil(e.inputSizeWidth/E)}for(var _=0;_<w;++_)for(var N=0;N<b;++N)for(var x=0;x<r.length;++x){var $={xCenter:(N+e.anchorOffsetX)/b,yCenter:(_+e.anchorOffsetY)/w,width:0,height:0};e.fixedAnchorSize?($.width=1,$.height=1):($.width=s[x],$.height=r[x]),t.push($)}n=a}return t}function dp(e,t,n,r){return r===1?.5*(e+t):e+(t-e)*n/(r-1)}function mp(e,t){var n=t[0],r=t[1];return[n*e[0]+r*e[1]+e[3],n*e[4]+r*e[5]+e[7]]}function _x(e,t,n,r){return xr(this,void 0,void 0,function(){var s,i,o,a,u;return _r(this,function(l){switch(l.label){case 0:return e.sort(function(c,p){return Math.max.apply(Math,p.score)-Math.max.apply(Math,c.score)}),s=ns(e.map(function(c){return[c.locationData.relativeBoundingBox.yMin,c.locationData.relativeBoundingBox.xMin,c.locationData.relativeBoundingBox.yMax,c.locationData.relativeBoundingBox.xMax]})),i=Tt(e.map(function(c){return c.score[0]})),[4,Ji.nonMaxSuppressionAsync(s,i,t,n)];case 1:return[4,(o=l.sent()).array()];case 2:return a=l.sent(),u=e.filter(function(c,p){return a.indexOf(p)>-1}),He([s,i,o]),[2,u]}})})}function $x(e,t,n){return xr(this,void 0,void 0,function(){var r,s,i,o,a;return _r(this,function(u){switch(u.label){case 0:return r=e[0],s=e[1],i=function(l,c,p){return Se(function(){var d,w,b,E;p.reverseOutputOrder?(w=ct(ye(l,[0,p.boxCoordOffset+0],[-1,1])),d=ct(ye(l,[0,p.boxCoordOffset+1],[-1,1])),E=ct(ye(l,[0,p.boxCoordOffset+2],[-1,1])),b=ct(ye(l,[0,p.boxCoordOffset+3],[-1,1]))):(d=ct(ye(l,[0,p.boxCoordOffset+0],[-1,1])),w=ct(ye(l,[0,p.boxCoordOffset+1],[-1,1])),b=ct(ye(l,[0,p.boxCoordOffset+2],[-1,1])),E=ct(ye(l,[0,p.boxCoordOffset+3],[-1,1]))),w=le(te(ke(w,p.xScale),c.w),c.x),d=le(te(ke(d,p.yScale),c.h),c.y),p.applyExponentialOnBoxSize?(b=te(kr(ke(b,p.hScale)),c.h),E=te(kr(ke(E,p.wScale)),c.w)):(b=te(ke(b,p.hScale),c.h),E=te(ke(E,p.wScale),c.h));var _=ve(d,ke(b,2)),N=ve(w,ke(E,2)),x=le(d,ke(b,2)),$=le(w,ke(E,2)),F=wt([q(_,[p.numBoxes,1]),q(N,[p.numBoxes,1]),q(x,[p.numBoxes,1]),q($,[p.numBoxes,1])],1);if(p.numKeypoints)for(var z=0;z<p.numKeypoints;++z){var M=p.keypointCoordOffset+z*p.numValuesPerKeypoint,V=void 0,W=void 0;p.reverseOutputOrder?(V=ct(ye(l,[0,M],[-1,1])),W=ct(ye(l,[0,M+1],[-1,1]))):(W=ct(ye(l,[0,M],[-1,1])),V=ct(ye(l,[0,M+1],[-1,1])));var X=le(te(ke(V,p.xScale),c.w),c.x),Q=le(te(ke(W,p.yScale),c.h),c.y);F=wt([F,q(X,[p.numBoxes,1]),q(Q,[p.numBoxes,1])],1)}return F})}(s,t,n),o=Se(function(){var l=r;return n.sigmoidScore?(n.scoreClippingThresh!=null&&(l=k4(r,-n.scoreClippingThresh,n.scoreClippingThresh)),l=zs(l)):l}),[4,Ix(i,o,n)];case 1:return a=u.sent(),He([i,o]),[2,a]}})})}function Ix(e,t,n){return xr(this,void 0,void 0,function(){var r,s,i,o,a,u,l,c,p,d,w,b;return _r(this,function(E){switch(E.label){case 0:return r=[],[4,e.data()];case 1:return s=E.sent(),[4,t.data()];case 2:for(i=E.sent(),o=0;o<n.numBoxes;++o)if(!(n.minScoreThresh!=null&&i[o]<n.minScoreThresh||(a=o*n.numCoords,u=Ax(s[a+0],s[a+1],s[a+2],s[a+3],i[o],n.flipVertically,o),(l=u.locationData.relativeBoundingBox).width<0||l.height<0))){if(n.numKeypoints>0)for((c=u.locationData).relativeKeypoints=[],p=n.numKeypoints*n.numValuesPerKeypoint,d=0;d<p;d+=n.numValuesPerKeypoint)w=a+n.keypointCoordOffset+d,b={x:s[w+0],y:n.flipVertically?1-s[w+1]:s[w+1]},c.relativeKeypoints.push(b);r.push(u)}return[2,r]}})})}function Ax(e,t,n,r,s,i,o){return{score:[s],ind:o,locationData:{relativeBoundingBox:{xMin:t,yMin:i?1-n:e,xMax:r,yMax:i?1-e:n,width:r-t,height:n-e}}}}var ol,Ox={reduceBoxesInLowestLayer:!1,interpolatedScaleAspectRatio:1,featureMapHeight:[],featureMapWidth:[],numLayers:4,minScale:.1484375,maxScale:.75,inputSizeHeight:128,inputSizeWidth:128,anchorOffsetX:.5,anchorOffsetY:.5,strides:[8,16,16,16],aspectRatios:[1],fixedAnchorSize:!0},Cx={reduceBoxesInLowestLayer:!1,interpolatedScaleAspectRatio:0,featureMapHeight:[],featureMapWidth:[],numLayers:1,minScale:.1484375,maxScale:.75,inputSizeHeight:192,inputSizeWidth:192,anchorOffsetX:.5,anchorOffsetY:.5,strides:[4],aspectRatios:[1],fixedAnchorSize:!0},xc={runtime:"tfjs",modelType:"short",maxFaces:1,detectorModelUrl:"https://tfhub.dev/mediapipe/tfjs-model/face_detection/short/1"},Dx={applyExponentialOnBoxSize:!1,flipVertically:!1,ignoreClasses:[],numClasses:1,numBoxes:896,numCoords:16,boxCoordOffset:0,keypointCoordOffset:4,numKeypoints:6,numValuesPerKeypoint:2,sigmoidScore:!0,scoreClippingThresh:100,reverseOutputOrder:!0,xScale:128,yScale:128,hScale:128,wScale:128,minScoreThresh:.5},Fx={applyExponentialOnBoxSize:!1,flipVertically:!1,ignoreClasses:[],numClasses:1,numBoxes:2304,numCoords:16,boxCoordOffset:0,keypointCoordOffset:4,numKeypoints:6,numValuesPerKeypoint:2,sigmoidScore:!0,scoreClippingThresh:100,reverseOutputOrder:!0,xScale:192,yScale:192,hScale:192,wScale:192,minScoreThresh:.6},Px={outputTensorSize:{width:128,height:128},keepAspectRatio:!0,outputTensorFloatRange:[-1,1],borderMode:"zero"},Rx={outputTensorSize:{width:192,height:192},keepAspectRatio:!0,outputTensorFloatRange:[-1,1],borderMode:"zero"},Lx=function(){function e(t,n,r){this.detectorModel=n,this.maxFaces=r,t==="full"?(this.imageToTensorConfig=Rx,this.tensorsToDetectionConfig=Fx,this.anchors=hp(Cx)):(this.imageToTensorConfig=Px,this.tensorsToDetectionConfig=Dx,this.anchors=hp(Ox));var s=Tt(this.anchors.map(function(u){return u.width})),i=Tt(this.anchors.map(function(u){return u.height})),o=Tt(this.anchors.map(function(u){return u.xCenter})),a=Tt(this.anchors.map(function(u){return u.yCenter}));this.anchorTensor={x:o,y:a,w:s,h:i}}return e.prototype.dispose=function(){this.detectorModel.dispose(),He([this.anchorTensor.x,this.anchorTensor.y,this.anchorTensor.w,this.anchorTensor.h])},e.prototype.reset=function(){},e.prototype.detectFaces=function(t,n){return n===void 0&&(n=!1),xr(this,void 0,void 0,function(){var r,s,i,o,a,u,l,c,p,d,w;return _r(this,function(b){switch(b.label){case 0:return t==null?(this.reset(),[2,[]]):(r=Se(function(){var E=je(w0(t),"float32");return n&&(E=ct(Ji.flipLeftRight(bn(E,0)),[0])),E}),s=xx(r,this.imageToTensorConfig),i=s.imageTensor,o=s.transformationMatrix,a=this.detectorModel.execute(i,"Identity:0"),u=function(E){return Se(function(){var _=function($){return Se(function(){return[ye($,[0,0,0],[1,-1,1]),ye($,[0,0,1],[1,-1,-1])]})}(E),N=_[0],x=_[1];return{boxes:ct(x),logits:ct(N)}})}(a),l=u.boxes,[4,$x([c=u.logits,l],this.anchorTensor,this.tensorsToDetectionConfig)]);case 1:return(p=b.sent()).length===0?(He([r,i,a,c,l]),[2,p]):[4,_x(p,this.maxFaces,.3)];case 2:return d=b.sent(),w=function(E,_){E===void 0&&(E=[]);var N,x=(N=_,[].concat.apply([],N));return E.forEach(function($){var F=$.locationData;F.relativeKeypoints.forEach(function(Q){var ue=mp(x,[Q.x,Q.y]),Ne=ue[0],ce=ue[1];Q.x=Ne,Q.y=ce});var z=F.relativeBoundingBox,M=Number.MAX_VALUE,V=Number.MAX_VALUE,W=Number.MIN_VALUE,X=Number.MIN_VALUE;[[z.xMin,z.yMin],[z.xMin+z.width,z.yMin],[z.xMin+z.width,z.yMin+z.height],[z.xMin,z.yMin+z.height]].forEach(function(Q){var ue=mp(x,Q),Ne=ue[0],ce=ue[1];M=Math.min(M,Ne),W=Math.max(W,Ne),V=Math.min(V,ce),X=Math.max(X,ce)}),F.relativeBoundingBox={xMin:M,xMax:W,yMin:V,yMax:X,width:W-M,height:X-V}}),E}(d,o),He([r,i,a,c,l]),[2,w]}})})},e.prototype.estimateFaces=function(t,n){return xr(this,void 0,void 0,function(){var r,s;return _r(this,function(i){return r=v0(t),s=!!n&&n.flipHorizontal,[2,this.detectFaces(t,s).then(function(o){return o.map(function(a){for(var u=a.locationData.relativeKeypoints.map(function(b,E){return as(as({},b),{x:b.x*r.width,y:b.y*r.height,name:y0[E]})}),l=a.locationData.relativeBoundingBox,c=0,p=["width","xMax","xMin"];c<p.length;c++)l[p[c]]*=r.width;for(var d=0,w=["height","yMax","yMin"];d<w.length;d++)l[w[d]]*=r.height;return{keypoints:u,box:l}})})]})})},e}();function zx(e){return xr(this,void 0,void 0,function(){var t,n,r;return _r(this,function(s){switch(s.label){case 0:return t=function(i){if(i==null)return as({},xc);var o=as({},i);return o.modelType==null&&(o.modelType=xc.modelType),o.maxFaces==null&&(o.maxFaces=xc.maxFaces),o.detectorModelUrl==null&&(o.modelType==="full"?o.detectorModelUrl="https://tfhub.dev/mediapipe/tfjs-model/face_detection/full/1":o.detectorModelUrl="https://tfhub.dev/mediapipe/tfjs-model/face_detection/short/1"),o}(e),n=typeof t.detectorModelUrl=="string"&&t.detectorModelUrl.indexOf("https://tfhub.dev")>-1,[4,d0(t.detectorModelUrl,{fromTFHub:n})];case 1:return r=s.sent(),[2,new Lx(t.modelType,r,t.maxFaces)]}})})}function Mx(e,t){return xr(this,void 0,void 0,function(){var n,r;return _r(this,function(s){if(e===ol.MediaPipeFaceDetector){if(r=void 0,(n=t)!=null){if(n.runtime==="tfjs")return[2,zx(n)];if(n.runtime==="mediapipe")return[2,Ex(n)];r=n.runtime}throw new Error("Expect modelConfig.runtime to be either 'tfjs' or 'mediapipe', but got "+r)}throw new Error(e+" is not a supported model name.")})})}function _c(e){return e.width*e.height}function gp(e){var t=e.xCenter-e.width/2,n=t+e.width,r=e.yCenter-e.height/2;return{xMin:t,xMax:n,yMin:r,yMax:r+e.height,width:e.width,height:e.height}}function jx(e,t){var n=gp(e),r=gp(t);if(!function(o,a){return!(o.xMax<a.xMin||a.xMax<o.xMin||o.yMax<a.yMin||a.yMax<o.yMin)}(n,r))return 0;var s=_c(function(o,a){var u=Math.max(o.xMin,a.xMin),l=Math.min(o.xMax,a.xMax),c=Math.max(o.yMin,a.yMin),p=Math.min(o.yMax,a.yMax);return{xMin:u,xMax:l,yMin:c,yMax:p,width:Math.max(l-u,0),height:Math.max(p-c,0)}}(n,r)),i=_c(n)+_c(r)-s;return i>0?s/i:0}function Bx(e,t,n,r){var s=e.width,i=e.height,o=1,a=Math.cos(e.rotation),u=Math.sin(e.rotation),l=e.xCenter,c=e.yCenter,p=1/t,d=1/n,w=new Array(16);return w[0]=s*a*o*p,w[1]=-i*u*p,w[2]=0,w[3]=(-.5*s*a*o+.5*i*u+l)*p,w[4]=s*u*o*d,w[5]=i*a*d,w[6]=0,w[7]=(-.5*i*a-.5*s*u*o+c)*d,w[8]=0,w[9]=0,w[10]=s*p,w[11]=0,w[12]=0,w[13]=0,w[14]=0,w[15]=1,function(b){if(b.length!==16)throw new Error("Array length must be 16 but got "+b.length);return[[b[0],b[1],b[2],b[3]],[b[4],b[5],b[6],b[7]],[b[8],b[9],b[10],b[11]],[b[12],b[13],b[14],b[15]]]}(w)}function S0(e){return e instanceof qe?{height:e.shape[0],width:e.shape[1]}:{height:e.height,width:e.width}}function b0(e){return e-2*Math.PI*Math.floor((e+Math.PI)/(2*Math.PI))}function N0(e){return e instanceof qe?e:c0(e)}function $c(e,t){A(e.width!==0,function(){return t+" width cannot be 0."}),A(e.height!==0,function(){return t+" height cannot be 0."})}function Ux(e,t){var n=function(r,s,i,o){var a=s-r,u=o-i,l=u/a;return{scale:l,offset:i-r*l}}(0,255,t[0],t[1]);return Se(function(){return le(te(e,n.scale),n.offset)})}function Vx(e,t,n){var r=t.outputTensorSize,s=t.keepAspectRatio,i=t.borderMode,o=t.outputTensorFloatRange,a=S0(e),u=function(d,w){return w?{xCenter:w.xCenter*d.width,yCenter:w.yCenter*d.height,width:w.width*d.width,height:w.height*d.height,rotation:w.rotation}:{xCenter:.5*d.width,yCenter:.5*d.height,width:d.width,height:d.height,rotation:0}}(a,n),l=function(d,w,b){if(b===void 0&&(b=!1),!b)return{top:0,left:0,right:0,bottom:0};var E=w.height,_=w.width;$c(w,"targetSize"),$c(d,"roi");var N,x,$=E/_,F=d.height/d.width,z=0,M=0;return $>F?(N=d.width,x=d.width*$,M=(1-F/$)/2):(N=d.height/$,x=d.height,z=(1-$/F)/2),d.width=N,d.height=x,{top:M,left:z,right:z,bottom:M}}(u,r,s),c=Bx(u,a.width,a.height),p=Se(function(){var d=N0(e),w=ns(function(_,N,x){return $c(x,"inputResolution"),[1/x.width*_[0][0]*N.width,1/x.height*_[0][1]*N.width,_[0][3]*N.width,1/x.width*_[1][0]*N.height,1/x.height*_[1][1]*N.height,_[1][3]*N.height,0,0]}(c,a,r),[1,8]),b=i==="zero"?"constant":"nearest",E=Ji.transform(bn(je(d,"float32")),w,"bilinear",b,0,[r.height,r.width]);return o!=null?Ux(E,o):E});return{imageTensor:p,padding:l,transformationMatrix:c}}function yp(e){return{xCenter:e.xMin+e.width/2,yCenter:e.yMin+e.height/2,width:e.width,height:e.height}}function Wx(e){var t=e.relativeKeypoints;if(t.length<=1)throw new Error("2 or more keypoints required to calculate a rect.");var n=Number.MAX_VALUE,r=Number.MAX_VALUE,s=Number.MIN_VALUE,i=Number.MIN_VALUE;return t.forEach(function(o){n=Math.min(n,o.x),s=Math.max(s,o.x),r=Math.min(r,o.y),i=Math.max(i,o.y)}),{xCenter:(n+s)/2,yCenter:(r+i)/2,width:s-n,height:i-r}}function vp(e,t,n,r,s){var i=n==="rect"?function(o,a,u){var l,c=o.locationData;return l=yp(c.boundingBox),l}(e):function(o,a){var u=o.locationData;return a==="boundingbox"?yp(u.relativeBoundingBox):Wx(u)}(e,t);return s&&(i.rotation=function(o,a,u){var l,c=o.locationData,p=u.rotationVectorStartKeypointIndex,d=u.rotationVectorEndKeypointIndex;l=u.rotationVectorTargetAngle?u.rotationVectorTargetAngle:Math.PI*u.rotationVectorTargetAngleDegree/180;var w=c.relativeKeypoints[p].x*a.width,b=c.relativeKeypoints[p].y*a.height,E=c.relativeKeypoints[d].x*a.width,_=c.relativeKeypoints[d].y*a.height;return b0(l-Math.atan2(-(_-b),E-w))}(e,r,s)),i}function Hx(e,t,n){for(var r=0;r<t.length;++r){var s=t[r],i=n[e[r]];i.x=s.x,i.y=s.y}}function Kx(e,t,n,r){if(typeof t=="string"){if(t==="copy")for(var s=0;s<n.length;++s)r[e[s]].z=n[s].z}else{var i=function(o,a){for(var u=0,l=0;l<a.length;++l)u+=o[a[l]].z;return u/a.length}(r,t);for(s=0;s<e.length;++s)r[e[s]].z=i}}function Gx(e,t){for(var n=function(a){var u=[].concat.apply([],a.map(function(w){return w.indexesMapping}));if(u.length===0)throw new Error("There should be at least one landmark in indexes mapping");var l=u[0],c=u[0],p=new Set(u);p.forEach(function(w){l=Math.min(l,w),c=Math.max(c,w)});var d=p.size;if(l!==0)throw new Error("Indexes are expected to start with 0 instead of "+l);if(c+1!==d)throw new Error("Indexes should have no gaps but "+(c-d+1)+" indexes are missing");return d}(t),r=new Array(n).fill(null).map(Object),s=0;s<e.length;++s){var i=e[s],o=t[s];if(i.length!==o.indexesMapping.length)throw new Error("There are "+i.length+" refinement landmarks while mapping has "+o.indexesMapping.length);Hx(o.indexesMapping,i,r),Kx(o.indexesMapping,o.zRefinement,i,r)}return r}function qx(e,t){return e.map(function(n){var r=zn(zn({},n),{x:n.x*t.width,y:n.y*t.height});return n.z!=null&&(r.z=n.z*t.width),r})}function Xx(e,t){return e==="none"?t:function(n){return 1/(1+Math.exp(-n))}(t)}function Es(e,t,n,r){return hr(this,void 0,void 0,function(){var s,i,o,a,u,l,c,p;return dr(this,function(d){switch(d.label){case 0:return n=n||t.flipHorizontally||!1,r=r||t.flipVertically||!1,s=e.size,i=s/t.numLandmarks,[4,e.data()];case 1:for(o=d.sent(),a=[],u=0;u<t.numLandmarks;++u)l=u*i,(p={x:0,y:0}).x=n?t.inputImageWidth-o[l]:o[l],i>1&&(p.y=r?t.inputImageHeight-o[l+1]:o[l+1]),i>2&&(p.z=o[l+2]),i>3&&(p.score=Xx(t.visibilityActivation,o[l+3])),a.push(p);for(c=0;c<a.length;++c)(p=a[c]).x=p.x/t.inputImageWidth,p.y=p.y/t.inputImageHeight,p.z=p.z/t.inputImageWidth/(t.normalizeZ||1);return[2,a]}})})}function wp(e,t,n){var r=e.width,s=e.height,i=e.rotation;if(n.rotation==null&&n.rotationDegree==null||(i=function(l,c){return c.rotation!=null?l+=c.rotation:c.rotationDegree!=null&&(l+=Math.PI*c.rotationDegree/180),b0(l)}(i,n)),i===0)e.xCenter=e.xCenter+r*n.shiftX,e.yCenter=e.yCenter+s*n.shiftY;else{var o=(t.width*r*n.shiftX*Math.cos(i)-t.height*s*n.shiftY*Math.sin(i))/t.width,a=(t.width*r*n.shiftX*Math.sin(i)+t.height*s*n.shiftY*Math.cos(i))/t.height;e.xCenter=e.xCenter+o,e.yCenter=e.yCenter+a}{var u=Math.max(r*t.width,s*t.height);r=u/t.width,s=u/t.height}return e.width=r*n.scaleX,e.height=s*n.scaleY,e}(ol||(ol={})).MediaPipeFaceDetector="MediaPipeFaceDetector";var Ic={runtime:"tfjs",maxFaces:1,refineLandmarks:!1,landmarkModelUrl:"https://tfhub.dev/mediapipe/tfjs-model/face_landmarks_detection/face_mesh/1"},Ac={flipHorizontal:!1,staticImageMode:!1},Sp={shiftX:0,shiftY:0,scaleX:1.5,scaleY:1.5,squareLong:!0},Yx={outputTensorSize:{width:192,height:192},outputTensorFloatRange:[0,1],borderMode:"replicate"},bp={numLandmarks:468,inputImageWidth:192,inputImageHeight:192,visibilityActivation:"none",flipHorizontally:!1,flipVertically:!1},Qx={numLandmarks:80,inputImageWidth:192,inputImageHeight:192,visibilityActivation:"none",flipHorizontally:!1,flipVertically:!1},Np={numLandmarks:71,inputImageWidth:192,inputImageHeight:192,visibilityActivation:"none",flipHorizontally:!1,flipVertically:!1},kp={numLandmarks:5,inputImageWidth:192,inputImageHeight:192,visibilityActivation:"none",flipHorizontally:!1,flipVertically:!1},Jx={indexesMapping:Array.from(Array(468).keys()),zRefinement:"copy"},Zx={indexesMapping:[61,146,91,181,84,17,314,405,321,375,291,185,40,39,37,0,267,269,270,409,78,95,88,178,87,14,317,402,318,324,308,191,80,81,82,13,312,311,310,415,76,77,90,180,85,16,315,404,320,307,306,184,74,73,72,11,302,303,304,408,62,96,89,179,86,15,316,403,319,325,292,183,42,41,38,12,268,271,272,407],zRefinement:"none"},e_={indexesMapping:[33,7,163,144,145,153,154,155,133,246,161,160,159,158,157,173,130,25,110,24,23,22,26,112,243,247,30,29,27,28,56,190,226,31,228,229,230,231,232,233,244,113,225,224,223,222,221,189,35,124,46,53,52,65,143,111,117,118,119,120,121,128,245,156,70,63,105,66,107,55,193],zRefinement:"none"},t_={indexesMapping:[263,249,390,373,374,380,381,382,362,466,388,387,386,385,384,398,359,255,339,254,253,252,256,341,463,467,260,259,257,258,286,414,446,261,448,449,450,451,452,453,464,342,445,444,443,442,441,413,265,353,276,283,282,295,372,340,346,347,348,349,350,357,465,383,300,293,334,296,336,285,417],zRefinement:"none"},n_={indexesMapping:[468,469,470,471,472],zRefinement:[33,7,163,144,145,153,154,155,133,246,161,160,159,158,157,173]},r_={indexesMapping:[473,474,475,476,477],zRefinement:[263,249,390,373,374,380,381,382,362,466,388,387,386,385,384,398]},Qs,s_=function(){function e(t,n,r,s){this.detector=t,this.landmarkModel=n,this.maxFaces=r,this.withAttention=s,this.prevFaceRectsFromLandmarks=null}return e.prototype.estimateFaces=function(t,n){return hr(this,void 0,void 0,function(){var r,s,i,o,a,u,l,c,p,d,w,b,E,_=this;return dr(this,function(N){switch(N.label){case 0:return r=function(F){if(F==null)return zn({},Ac);var z=zn({},F);return z.flipHorizontal==null&&(z.flipHorizontal=Ac.flipHorizontal),z.staticImageMode==null&&(z.staticImageMode=Ac.staticImageMode),z}(n),t==null?(this.reset(),[2,[]]):(s=S0(t),i=Se(function(){var F=je(N0(t),"float32");return r.flipHorizontal&&(F=ct(Ji.flipLeftRight(bn(F,0)),[0])),F}),o=this.prevFaceRectsFromLandmarks,r.staticImageMode||o==null||o.length<this.maxFaces?[4,this.detector.detectFaces(i,!1)]:[3,2]);case 1:return(u=N.sent()).length===0?(this.reset(),i.dispose(),[2,[]]):(a=u.map(function(F){return _.faceDetectionFrontDetectionToRoi(F,s)}),[3,3]);case 2:a=[],N.label=3;case 3:return x=.5,$=[],[a,o||[]].forEach(function(F){return F.forEach(function(z){($=$.filter(function(M){return jx(z,M)<=x})).push(z)})}),l=$,[4,Promise.all(l.map(function(F){return _.faceLandmark(F,i)}))];case 4:for(c=N.sent(),p=[],this.prevFaceRectsFromLandmarks=[],d=0;d<c.length;++d)(w=c[d])!=null&&(this.prevFaceRectsFromLandmarks.push(this.faceLandmarksToRoi(w,s)),(b=qx(w,s))!=null&&b.forEach(function(F,z){var M=g0.get(z);M!=null&&(F.name=M)}),E=n2(b),p.push({keypoints:b,box:E.locationData.relativeBoundingBox}));return i.dispose(),[2,p]}var x,$})})},e.prototype.dispose=function(){this.detector.dispose(),this.landmarkModel.dispose()},e.prototype.reset=function(){this.detector.reset(),this.prevFaceRectsFromLandmarks=null},e.prototype.faceDetectionFrontDetectionToRoi=function(t,n){return wp(vp(t,"boundingbox","normRect",n,{rotationVectorStartKeypointIndex:0,rotationVectorEndKeypointIndex:1,rotationVectorTargetAngleDegree:0}),n,Sp)},e.prototype.faceLandmark=function(t,n){return hr(this,void 0,void 0,function(){var r,s,i,o,a,u,l;return dr(this,function(c){switch(c.label){case 0:return r=Vx(n,Yx,t).imageTensor,s=["output_faceflag"].concat(this.withAttention?["output_mesh_identity","output_lips","Identity_6:0","Identity_1:0","Identity_2:0","Identity_5:0"]:["output_mesh"]),i=this.landmarkModel.execute(r,s),o=i[0],a=i.slice(1),[4,o.data()];case 1:return c.sent()[0]<.5?(He(i),He(r),[2,null]):this.withAttention?[4,this.tensorsToFaceLandmarksWithAttention(a)]:[3,3];case 2:return u=c.sent(),[3,5];case 3:return[4,this.tensorsToFaceLandmarks(a)];case 4:u=c.sent(),c.label=5;case 5:return l=function(p,d,w){w===void 0&&(w={ignoreRotation:!1});for(var b=[],E=0,_=p;E<_.length;E++){var N=_[E],x=N.x-.5,$=N.y-.5,F=w.ignoreRotation?0:d.rotation,z=Math.cos(F)*x-Math.sin(F)*$,M=Math.sin(F)*x+Math.cos(F)*$;z=z*d.width+d.xCenter,M=M*d.height+d.yCenter;var V=N.z*d.width,W=zn({},N);W.x=z,W.y=M,W.z=V,b.push(W)}return b}(u,t),He(i),He(r),[2,l]}})})},e.prototype.tensorsToFaceLandmarks=function(t){return hr(this,void 0,void 0,function(){return dr(this,function(n){return[2,Es(t[0],bp)]})})},e.prototype.tensorsToFaceLandmarksWithAttention=function(t){return hr(this,void 0,void 0,function(){var n,r,s,i,o,a;return dr(this,function(u){switch(u.label){case 0:return[4,Es(t[0],bp)];case 1:return n=u.sent(),[4,Es(t[1],Qx)];case 2:return r=u.sent(),[4,Es(t[3],Np)];case 3:return s=u.sent(),[4,Es(t[5],Np)];case 4:return i=u.sent(),[4,Es(t[4],kp)];case 5:return o=u.sent(),[4,Es(t[2],kp)];case 6:return a=u.sent(),[2,Gx([n,r,s,i,o,a],[Jx,Zx,e_,t_,n_,r_])]}})})},e.prototype.faceLandmarksToRoi=function(t,n){return wp(vp(n2(t),"boundingbox","normRect",n,{rotationVectorStartKeypointIndex:33,rotationVectorEndKeypointIndex:263,rotationVectorTargetAngleDegree:0}),n,Sp)},e}();function i_(e){return hr(this,void 0,void 0,function(){var t,n,r,s;return dr(this,function(i){switch(i.label){case 0:return t=function(o){if(o==null)return zn({},Ic);var a=zn({},o);return a.runtime="tfjs",a.maxFaces==null&&(a.maxFaces=Ic.maxFaces),a.refineLandmarks==null&&(a.refineLandmarks=Ic.refineLandmarks),a.landmarkModelUrl==null&&(a.landmarkModelUrl=a.refineLandmarks?"https://tfhub.dev/mediapipe/tfjs-model/face_landmarks_detection/attention_mesh/1":"https://tfhub.dev/mediapipe/tfjs-model/face_landmarks_detection/face_mesh/1"),a}(e),n=typeof t.landmarkModelUrl=="string"&&t.landmarkModelUrl.indexOf("https://tfhub.dev")>-1,[4,d0(t.landmarkModelUrl,{fromTFHub:n})];case 1:return r=i.sent(),[4,Mx(ol.MediaPipeFaceDetector,{modelType:"short",maxFaces:t.maxFaces,detectorModelUrl:t.detectorModelUrl,runtime:t.runtime})];case 2:return s=i.sent(),[2,new s_(s,r,t.maxFaces,t.refineLandmarks)]}})})}function o_(e,t){return hr(this,void 0,void 0,function(){var n,r;return dr(this,function(s){if(e===Qs.MediaPipeFaceMesh){if(r=void 0,(n=t)!=null){if(n.runtime==="tfjs")return[2,i_(n)];if(n.runtime==="mediapipe")return[2,Nx(n)];r=n.runtime}throw new Error("Expect modelConfig.runtime to be either 'tfjs' or 'mediapipe', but got "+r)}throw new Error(e+" is not a supported model name.")})})}(function(e){e.MediaPipeFaceMesh="MediaPipeFaceMesh"})(Qs||(Qs={}));var a_=Object.freeze({__proto__:null,getKeypointIndexByContour:function(e){if(e===Qs.MediaPipeFaceMesh)return m0;throw new Error("Model "+e+" is not supported.")},getAdjacentPairs:function(e){if(e===Qs.MediaPipeFaceMesh)return wx;throw new Error("Model "+e+" is not supported.")}});const tn=468,hi=5,Tp="#32EEDB",Ep="#FF2C35",Oc={"640 X 480":{width:640,height:480},"640 X 360":{width:640,height:360},"360 X 270":{width:360,height:270}},Ps={camera:{targetFPS:60,sizeOption:"640 X 480"},backend:"",flags:{},modelConfig:{maxFaces:2,refineLandmarks:!0,triangulateMesh:!0,boundingBox:!0}},u_={lips:"#E0E0E0",leftEye:"#30FF30",leftEyebrow:"#30FF30",leftIris:"#30FF30",rightEye:"#FF3030",rightEyebrow:"#FF3030",rightIris:"#FF3030",faceOval:"#E0E0E0"};async function l_(){const e=Qs.MediaPipeFaceMesh;return o_(e,{runtime:"mediapipe",maxFaces:Ps.modelConfig.maxFaces,refineLandmarks:Ps.modelConfig.refineLandmarks,triangulateMesh:Ps.modelConfig.triangulateMesh,boundingBox:Ps.modelConfig.boundingBox,solutionPath:"/geo-tracking/node_modules/@mediapipe/face_mesh"})}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ou=[127,34,139,11,0,37,232,231,120,72,37,39,128,121,47,232,121,128,104,69,67,175,171,148,157,154,155,118,50,101,73,39,40,9,151,108,48,115,131,194,204,211,74,40,185,80,42,183,40,92,186,230,229,118,202,212,214,83,18,17,76,61,146,160,29,30,56,157,173,106,204,194,135,214,192,203,165,98,21,71,68,51,45,4,144,24,23,77,146,91,205,50,187,201,200,18,91,106,182,90,91,181,85,84,17,206,203,36,148,171,140,92,40,39,193,189,244,159,158,28,247,246,161,236,3,196,54,68,104,193,168,8,117,228,31,189,193,55,98,97,99,126,47,100,166,79,218,155,154,26,209,49,131,135,136,150,47,126,217,223,52,53,45,51,134,211,170,140,67,69,108,43,106,91,230,119,120,226,130,247,63,53,52,238,20,242,46,70,156,78,62,96,46,53,63,143,34,227,173,155,133,123,117,111,44,125,19,236,134,51,216,206,205,154,153,22,39,37,167,200,201,208,36,142,100,57,212,202,20,60,99,28,158,157,35,226,113,160,159,27,204,202,210,113,225,46,43,202,204,62,76,77,137,123,116,41,38,72,203,129,142,64,98,240,49,102,64,41,73,74,212,216,207,42,74,184,169,170,211,170,149,176,105,66,69,122,6,168,123,147,187,96,77,90,65,55,107,89,90,180,101,100,120,63,105,104,93,137,227,15,86,85,129,102,49,14,87,86,55,8,9,100,47,121,145,23,22,88,89,179,6,122,196,88,95,96,138,172,136,215,58,172,115,48,219,42,80,81,195,3,51,43,146,61,171,175,199,81,82,38,53,46,225,144,163,110,246,33,7,52,65,66,229,228,117,34,127,234,107,108,69,109,108,151,48,64,235,62,78,191,129,209,126,111,35,143,163,161,246,117,123,50,222,65,52,19,125,141,221,55,65,3,195,197,25,7,33,220,237,44,70,71,139,122,193,245,247,130,33,71,21,162,153,158,159,170,169,150,188,174,196,216,186,92,144,160,161,2,97,167,141,125,241,164,167,37,72,38,12,145,159,160,38,82,13,63,68,71,226,35,111,158,153,154,101,50,205,206,92,165,209,198,217,165,167,97,220,115,218,133,112,243,239,238,241,214,135,169,190,173,133,171,208,32,125,44,237,86,87,178,85,86,179,84,85,180,83,84,181,201,83,182,137,93,132,76,62,183,61,76,184,57,61,185,212,57,186,214,207,187,34,143,156,79,239,237,123,137,177,44,1,4,201,194,32,64,102,129,213,215,138,59,166,219,242,99,97,2,94,141,75,59,235,24,110,228,25,130,226,23,24,229,22,23,230,26,22,231,112,26,232,189,190,243,221,56,190,28,56,221,27,28,222,29,27,223,30,29,224,247,30,225,238,79,20,166,59,75,60,75,240,147,177,215,20,79,166,187,147,213,112,233,244,233,128,245,128,114,188,114,217,174,131,115,220,217,198,236,198,131,134,177,132,58,143,35,124,110,163,7,228,110,25,356,389,368,11,302,267,452,350,349,302,303,269,357,343,277,452,453,357,333,332,297,175,152,377,384,398,382,347,348,330,303,304,270,9,336,337,278,279,360,418,262,431,304,408,409,310,415,407,270,409,410,450,348,347,422,430,434,313,314,17,306,307,375,387,388,260,286,414,398,335,406,418,364,367,416,423,358,327,251,284,298,281,5,4,373,374,253,307,320,321,425,427,411,421,313,18,321,405,406,320,404,405,315,16,17,426,425,266,377,400,369,322,391,269,417,465,464,386,257,258,466,260,388,456,399,419,284,332,333,417,285,8,346,340,261,413,441,285,327,460,328,355,371,329,392,439,438,382,341,256,429,420,360,364,394,379,277,343,437,443,444,283,275,440,363,431,262,369,297,338,337,273,375,321,450,451,349,446,342,467,293,334,282,458,461,462,276,353,383,308,324,325,276,300,293,372,345,447,382,398,362,352,345,340,274,1,19,456,248,281,436,427,425,381,256,252,269,391,393,200,199,428,266,330,329,287,273,422,250,462,328,258,286,384,265,353,342,387,259,257,424,431,430,342,353,276,273,335,424,292,325,307,366,447,345,271,303,302,423,266,371,294,455,460,279,278,294,271,272,304,432,434,427,272,407,408,394,430,431,395,369,400,334,333,299,351,417,168,352,280,411,325,319,320,295,296,336,319,403,404,330,348,349,293,298,333,323,454,447,15,16,315,358,429,279,14,15,316,285,336,9,329,349,350,374,380,252,318,402,403,6,197,419,318,319,325,367,364,365,435,367,397,344,438,439,272,271,311,195,5,281,273,287,291,396,428,199,311,271,268,283,444,445,373,254,339,263,466,249,282,334,296,449,347,346,264,447,454,336,296,299,338,10,151,278,439,455,292,407,415,358,371,355,340,345,372,390,249,466,346,347,280,442,443,282,19,94,370,441,442,295,248,419,197,263,255,359,440,275,274,300,383,368,351,412,465,263,467,466,301,368,389,380,374,386,395,378,379,412,351,419,436,426,322,373,390,388,2,164,393,370,462,461,164,0,267,302,11,12,374,373,387,268,12,13,293,300,301,446,261,340,385,384,381,330,266,425,426,423,391,429,355,437,391,327,326,440,457,438,341,382,362,459,457,461,434,430,394,414,463,362,396,369,262,354,461,457,316,403,402,315,404,403,314,405,404,313,406,405,421,418,406,366,401,361,306,408,407,291,409,408,287,410,409,432,436,410,434,416,411,264,368,383,309,438,457,352,376,401,274,275,4,421,428,262,294,327,358,433,416,367,289,455,439,462,370,326,2,326,370,305,460,455,254,449,448,255,261,446,253,450,449,252,451,450,256,452,451,341,453,452,413,464,463,441,413,414,258,442,441,257,443,442,259,444,443,260,445,444,467,342,445,459,458,250,289,392,290,290,328,460,376,433,435,250,290,392,411,416,433,341,463,464,453,464,465,357,465,412,343,412,399,360,363,440,437,399,456,420,456,363,401,435,288,372,383,353,339,255,249,448,261,255,133,243,190,133,155,112,33,246,247,33,130,25,398,384,286,362,398,414,362,463,341,263,359,467,263,249,255,466,467,260,75,60,166,238,239,79,162,127,139,72,11,37,121,232,120,73,72,39,114,128,47,233,232,128,103,104,67,152,175,148,173,157,155,119,118,101,74,73,40,107,9,108,49,48,131,32,194,211,184,74,185,191,80,183,185,40,186,119,230,118,210,202,214,84,83,17,77,76,146,161,160,30,190,56,173,182,106,194,138,135,192,129,203,98,54,21,68,5,51,4,145,144,23,90,77,91,207,205,187,83,201,18,181,91,182,180,90,181,16,85,17,205,206,36,176,148,140,165,92,39,245,193,244,27,159,28,30,247,161,174,236,196,103,54,104,55,193,8,111,117,31,221,189,55,240,98,99,142,126,100,219,166,218,112,155,26,198,209,131,169,135,150,114,47,217,224,223,53,220,45,134,32,211,140,109,67,108,146,43,91,231,230,120,113,226,247,105,63,52,241,238,242,124,46,156,95,78,96,70,46,63,116,143,227,116,123,111,1,44,19,3,236,51,207,216,205,26,154,22,165,39,167,199,200,208,101,36,100,43,57,202,242,20,99,56,28,157,124,35,113,29,160,27,211,204,210,124,113,46,106,43,204,96,62,77,227,137,116,73,41,72,36,203,142,235,64,240,48,49,64,42,41,74,214,212,207,183,42,184,210,169,211,140,170,176,104,105,69,193,122,168,50,123,187,89,96,90,66,65,107,179,89,180,119,101,120,68,63,104,234,93,227,16,15,85,209,129,49,15,14,86,107,55,9,120,100,121,153,145,22,178,88,179,197,6,196,89,88,96,135,138,136,138,215,172,218,115,219,41,42,81,5,195,51,57,43,61,208,171,199,41,81,38,224,53,225,24,144,110,105,52,66,118,229,117,227,34,234,66,107,69,10,109,151,219,48,235,183,62,191,142,129,126,116,111,143,7,163,246,118,117,50,223,222,52,94,19,141,222,221,65,196,3,197,45,220,44,156,70,139,188,122,245,139,71,162,145,153,159,149,170,150,122,188,196,206,216,92,163,144,161,164,2,167,242,141,241,0,164,37,11,72,12,144,145,160,12,38,13,70,63,71,31,226,111,157,158,154,36,101,205,203,206,165,126,209,217,98,165,97,237,220,218,237,239,241,210,214,169,140,171,32,241,125,237,179,86,178,180,85,179,181,84,180,182,83,181,194,201,182,177,137,132,184,76,183,185,61,184,186,57,185,216,212,186,192,214,187,139,34,156,218,79,237,147,123,177,45,44,4,208,201,32,98,64,129,192,213,138,235,59,219,141,242,97,97,2,141,240,75,235,229,24,228,31,25,226,230,23,229,231,22,230,232,26,231,233,112,232,244,189,243,189,221,190,222,28,221,223,27,222,224,29,223,225,30,224,113,247,225,99,60,240,213,147,215,60,20,166,192,187,213,243,112,244,244,233,245,245,128,188,188,114,174,134,131,220,174,217,236,236,198,134,215,177,58,156,143,124,25,110,7,31,228,25,264,356,368,0,11,267,451,452,349,267,302,269,350,357,277,350,452,357,299,333,297,396,175,377,381,384,382,280,347,330,269,303,270,151,9,337,344,278,360,424,418,431,270,304,409,272,310,407,322,270,410,449,450,347,432,422,434,18,313,17,291,306,375,259,387,260,424,335,418,434,364,416,391,423,327,301,251,298,275,281,4,254,373,253,375,307,321,280,425,411,200,421,18,335,321,406,321,320,405,314,315,17,423,426,266,396,377,369,270,322,269,413,417,464,385,386,258,248,456,419,298,284,333,168,417,8,448,346,261,417,413,285,326,327,328,277,355,329,309,392,438,381,382,256,279,429,360,365,364,379,355,277,437,282,443,283,281,275,363,395,431,369,299,297,337,335,273,321,348,450,349,359,446,467,283,293,282,250,458,462,300,276,383,292,308,325,283,276,293,264,372,447,346,352,340,354,274,19,363,456,281,426,436,425,380,381,252,267,269,393,421,200,428,371,266,329,432,287,422,290,250,328,385,258,384,446,265,342,386,387,257,422,424,430,445,342,276,422,273,424,306,292,307,352,366,345,268,271,302,358,423,371,327,294,460,331,279,294,303,271,304,436,432,427,304,272,408,395,394,431,378,395,400,296,334,299,6,351,168,376,352,411,307,325,320,285,295,336,320,319,404,329,330,349,334,293,333,366,323,447,316,15,315,331,358,279,317,14,316,8,285,9,277,329,350,253,374,252,319,318,403,351,6,419,324,318,325,397,367,365,288,435,397,278,344,439,310,272,311,248,195,281,375,273,291,175,396,199,312,311,268,276,283,445,390,373,339,295,282,296,448,449,346,356,264,454,337,336,299,337,338,151,294,278,455,308,292,415,429,358,355,265,340,372,388,390,466,352,346,280,295,442,282,354,19,370,285,441,295,195,248,197,457,440,274,301,300,368,417,351,465,251,301,389,385,380,386,394,395,379,399,412,419,410,436,322,387,373,388,326,2,393,354,370,461,393,164,267,268,302,12,386,374,387,312,268,13,298,293,301,265,446,340,380,385,381,280,330,425,322,426,391,420,429,437,393,391,326,344,440,438,458,459,461,364,434,394,428,396,262,274,354,457,317,316,402,316,315,403,315,314,404,314,313,405,313,421,406,323,366,361,292,306,407,306,291,408,291,287,409,287,432,410,427,434,411,372,264,383,459,309,457,366,352,401,1,274,4,418,421,262,331,294,358,435,433,367,392,289,439,328,462,326,94,2,370,289,305,455,339,254,448,359,255,446,254,253,449,253,252,450,252,256,451,256,341,452,414,413,463,286,441,414,286,258,441,258,257,442,257,259,443,259,260,444,260,467,445,309,459,250,305,289,290,305,290,460,401,376,435,309,250,392,376,411,433,453,341,464,357,453,465,343,357,412,437,343,399,344,360,440,420,437,456,360,420,363,361,401,288,265,372,353,390,339,249,339,448,255];function c_(){return/iPhone|iPad|iPod/i.test(navigator.userAgent)}function f_(){return/Android/i.test(navigator.userAgent)}function xp(){return f_()||c_()}function au(e,t){return Math.sqrt(Math.pow(e[0]-t[0],2)+Math.pow(e[1]-t[1],2))}function Cc(e,t,n){const r=new Path2D;r.moveTo(t[0][0],t[0][1]);for(let s=1;s<t.length;s++){const i=t[s];r.lineTo(i[0],i[1])}n&&r.closePath(),e.stroke(r)}function p_(e,t,n,r){t.forEach(s=>{const i=s.keypoints.map(a=>[a.x,a.y]);if(r){e.strokeStyle=Ep,e.lineWidth=1;const a=s.box;Cc(e,[[a.xMin,a.yMin],[a.xMax,a.yMin],[a.xMax,a.yMax],[a.xMin,a.yMax]],!0)}if(n){e.strokeStyle=Tp,e.lineWidth=.5;for(let a=0;a<ou.length/3;a++){const u=[ou[a*3],ou[a*3+1],ou[a*3+2]].map(l=>i[l]);Cc(e,u,!0)}}else{e.fillStyle=Tp;for(let a=0;a<tn;a++){const u=i[a][0],l=i[a][1];e.beginPath(),e.arc(u,l,1,0,2*Math.PI),e.fill()}}if(i.length>tn){e.strokeStyle=Ep,e.lineWidth=1;const a=i[tn],u=au(i[tn+4],i[tn+2]),l=au(i[tn+3],i[tn+1]);if(e.beginPath(),e.ellipse(a[0],a[1],l/2,u/2,0,0,2*Math.PI),e.stroke(),i.length>tn+hi){const c=i[tn+hi],p=au(i[tn+hi+2],i[tn+hi+4]),d=au(i[tn+hi+3],i[tn+hi+1]);e.beginPath(),e.ellipse(c[0],c[1],d/2,p/2,0,0,2*Math.PI),e.stroke()}}const o=a_.getKeypointIndexByContour(Qs.MediaPipeFaceMesh);for(const[a,u]of Object.entries(o)){e.strokeStyle=u_[a],e.lineWidth=3;const l=u.map(c=>i[c]);l.every(c=>c!==void 0)&&Cc(e,l,!1)}})}class $f{constructor(t,n){this.video=t,this.canvas=n,this.ctx=this.canvas.getContext("2d")}static async setupCamera(t,n,r,s){if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia)throw new Error("Browser API navigator.mediaDevices.getUserMedia not available");const{targetFPS:i,sizeOption:o}=t,a=Oc[o],u={audio:!1,video:{facingMode:"user",width:xp()?Oc["360 X 270"].width:a.width,height:xp()?Oc["360 X 270"].height:a.height,frameRate:{ideal:i}}},l=await navigator.mediaDevices.getUserMedia(u),c=new $f(n,r);c.video.srcObject=l,await new Promise(w=>{c.video.onloadedmetadata=b=>{w(b)}}),c.video.play();const p=c.video.videoWidth,d=c.video.videoHeight;return c.video.width=p,c.video.height=d,c.canvas.width=p,c.canvas.height=d,s.style=`width: ${p}px; height: ${d}px`,c.ctx.translate(c.video.videoWidth,0),c.ctx.scale(-1,1),c}drawCtx(){this.ctx.drawImage(this.video,0,0,this.video.videoWidth,this.video.videoHeight)}drawResults(t,n,r){p_(this.ctx,t,n,r)}}function h_({setValidFaceDetection:e}){const t=at.useRef(null),n=at.useRef(null),r=at.useRef(null),[s,i]=at.useState(null),[o,a]=at.useState(null),[u,l]=at.useState(null),[c,p]=at.useState(null);return at.useEffect(()=>(t&&n&&(async()=>{const w=await $f.setupCamera(Ps.camera,t.current,n.current,r.current);a(w);const b=await l_();i(b)})(),()=>{o&&o.video.srcObject.getTracks().forEach(w=>w.stop()),s&&s.dispose()}),[t,n]),at.useEffect(()=>{if(o!=null&&s!==null){const d=async()=>{o.video.readyState<2&&await new Promise(_=>{o.video.onloadeddata=N=>{_(N)}});let E=null;if(s!=null)try{E=await s.estimateFaces(o.video,{flipHorizontal:!1}),E&&E.length>0&&(E.length===1?w(E[0]):e(!1))}catch(_){s.dispose(),i(null),alert(_)}o.drawCtx(),E&&E.length>0&&o.drawResults(E,Ps.modelConfig.triangulateMesh,Ps.modelConfig.boundingBox)},w=E=>{const _=E.box.width*E.box.height;_>0&&_<1e5?l(_):p(_)},b=async()=>{await d(),requestAnimationFrame(b)};b()}},[o,s]),at.useEffect(()=>{u!==null&&c!==null&&Math.abs(c-u)>u*.1&&e(!0)},[u,c,e]),_e.jsxs(_e.Fragment,{children:[_e.jsx("p",{children:u}),_e.jsx("p",{children:c}),_e.jsx("div",{className:"container",children:_e.jsxs("div",{className:"canvas-wrapper",ref:r,children:[_e.jsx("canvas",{id:"output",ref:n}),_e.jsx("video",{id:"video",playsInline:!0,style:{WebkitTransform:"scaleX(-1)",transform:"scaleX(-1)",visibility:"hidden",width:"auto",height:"auto"},ref:t})]})})]})}function d_({setValidDistance:e}){const[t,n]=at.useState(null),[r,s]=at.useState(null),[i,o]=at.useState("");at.useEffect(()=>{const p=((d,w,b,E)=>{const N=(b-d)*(Math.PI/180),x=(E-w)*(Math.PI/180),$=Math.sin(N/2)*Math.sin(N/2)+Math.cos(d*Math.PI/180)*Math.cos(b*Math.PI/180)*Math.sin(x/2)*Math.sin(x/2);return 6371*(2*Math.atan2(Math.sqrt($),Math.sqrt(1-$)))})(parseFloat(t),parseFloat(r),9.7634156,105.6608275);o(p),p<=0&&e(!0)},[t,r,e]);const a=()=>{navigator.geolocation?navigator.geolocation.getCurrentPosition(u=>{n(u.coords.latitude),s(u.coords.longitude)},u=>{console.error("Error getting geolocation:",u)}):console.error("Geolocation is not supported by this browser.")};return _e.jsxs(_e.Fragment,{children:[_e.jsx("button",{onClick:a,children:"Get Location"}),t&&r&&_e.jsxs("div",{children:[_e.jsxs("p",{children:["Distance: ",i]}),_e.jsxs("p",{children:["Latitude: ",t]}),_e.jsxs("p",{children:["Longitude: ",r]})]})]})}const m_=()=>{const[e,t]=at.useState(null),[n,r]=at.useState(!1),[s,i]=at.useState(!1),o=u=>{u.preventDefault()},a=u=>{const{name:l,value:c}=u.target;t({...e,[l]:c})};return _e.jsxs("div",{children:[n?_e.jsx("p",{children:"Valid face"}):_e.jsx("p",{children:"Not valid face"}),_e.jsx(h_,{setValidFaceDetection:r}),_e.jsx("h1",{children:"Student Check-In"}),_e.jsx(d_,{setValidDistance:i}),s?_e.jsx("form",{onSubmit:o,children:_e.jsxs("div",{children:[_e.jsx("p",{children:"You are within the 1 km radius of the school."}),_e.jsxs("label",{children:["Student Name:",_e.jsx("input",{type:"text",name:"name",value:(e==null?void 0:e.name)||"",onChange:a})]}),_e.jsx("br",{}),_e.jsxs("label",{children:["Student ID:",_e.jsx("input",{type:"text",name:"id",value:(e==null?void 0:e.id)||"",onChange:a})]}),_e.jsx("br",{}),_e.jsx("button",{type:"submit",children:"Submit"})]})}):_e.jsx("p",{children:"You are not within the 1 km radius of the school."})]})},g_=()=>_e.jsx(m_,{});Dc.createRoot(document.getElementById("root")).render(_e.jsx(j0.StrictMode,{children:_e.jsx(g_,{})}));
