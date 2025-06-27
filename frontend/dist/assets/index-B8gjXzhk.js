(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))o(l);new MutationObserver(l=>{for(const s of l)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function n(l){const s={};return l.integrity&&(s.integrity=l.integrity),l.referrerPolicy&&(s.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?s.credentials="include":l.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(l){if(l.ep)return;l.ep=!0;const s=n(l);fetch(l.href,s)}})();function lf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ac={exports:{}},Ii={},zc={exports:{}},be={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zh;function tk(){if(Zh)return be;Zh=1;var e=Symbol.for("react.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),y=Symbol.iterator;function v(A){return A===null||typeof A!="object"?null:(A=y&&A[y]||A["@@iterator"],typeof A=="function"?A:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,_={};function S(A,Y,fe){this.props=A,this.context=Y,this.refs=_,this.updater=fe||x}S.prototype.isReactComponent={},S.prototype.setState=function(A,Y){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,Y,"setState")},S.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function $(){}$.prototype=S.prototype;function E(A,Y,fe){this.props=A,this.context=Y,this.refs=_,this.updater=fe||x}var N=E.prototype=new $;N.constructor=E,b(N,S.prototype),N.isPureReactComponent=!0;var O=Array.isArray,M=Object.prototype.hasOwnProperty,I={current:null},z={key:!0,ref:!0,__self:!0,__source:!0};function P(A,Y,fe){var de,pe={},ye=null,ne=null;if(Y!=null)for(de in Y.ref!==void 0&&(ne=Y.ref),Y.key!==void 0&&(ye=""+Y.key),Y)M.call(Y,de)&&!z.hasOwnProperty(de)&&(pe[de]=Y[de]);var xe=arguments.length-2;if(xe===1)pe.children=fe;else if(1<xe){for(var _e=Array(xe),Ve=0;Ve<xe;Ve++)_e[Ve]=arguments[Ve+2];pe.children=_e}if(A&&A.defaultProps)for(de in xe=A.defaultProps,xe)pe[de]===void 0&&(pe[de]=xe[de]);return{$$typeof:e,type:A,key:ye,ref:ne,props:pe,_owner:I.current}}function K(A,Y){return{$$typeof:e,type:A.type,key:Y,ref:A.ref,props:A.props,_owner:A._owner}}function J(A){return typeof A=="object"&&A!==null&&A.$$typeof===e}function W(A){var Y={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(fe){return Y[fe]})}var U=/\/+/g;function T(A,Y){return typeof A=="object"&&A!==null&&A.key!=null?W(""+A.key):Y.toString(36)}function B(A,Y,fe,de,pe){var ye=typeof A;(ye==="undefined"||ye==="boolean")&&(A=null);var ne=!1;if(A===null)ne=!0;else switch(ye){case"string":case"number":ne=!0;break;case"object":switch(A.$$typeof){case e:case t:ne=!0}}if(ne)return ne=A,pe=pe(ne),A=de===""?"."+T(ne,0):de,O(pe)?(fe="",A!=null&&(fe=A.replace(U,"$&/")+"/"),B(pe,Y,fe,"",function(Ve){return Ve})):pe!=null&&(J(pe)&&(pe=K(pe,fe+(!pe.key||ne&&ne.key===pe.key?"":(""+pe.key).replace(U,"$&/")+"/")+A)),Y.push(pe)),1;if(ne=0,de=de===""?".":de+":",O(A))for(var xe=0;xe<A.length;xe++){ye=A[xe];var _e=de+T(ye,xe);ne+=B(ye,Y,fe,_e,pe)}else if(_e=v(A),typeof _e=="function")for(A=_e.call(A),xe=0;!(ye=A.next()).done;)ye=ye.value,_e=de+T(ye,xe++),ne+=B(ye,Y,fe,_e,pe);else if(ye==="object")throw Y=String(A),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.");return ne}function te(A,Y,fe){if(A==null)return A;var de=[],pe=0;return B(A,de,"","",function(ye){return Y.call(fe,ye,pe++)}),de}function se(A){if(A._status===-1){var Y=A._result;Y=Y(),Y.then(function(fe){(A._status===0||A._status===-1)&&(A._status=1,A._result=fe)},function(fe){(A._status===0||A._status===-1)&&(A._status=2,A._result=fe)}),A._status===-1&&(A._status=0,A._result=Y)}if(A._status===1)return A._result.default;throw A._result}var H={current:null},Q={transition:null},re={ReactCurrentDispatcher:H,ReactCurrentBatchConfig:Q,ReactCurrentOwner:I};function ee(){throw Error("act(...) is not supported in production builds of React.")}return be.Children={map:te,forEach:function(A,Y,fe){te(A,function(){Y.apply(this,arguments)},fe)},count:function(A){var Y=0;return te(A,function(){Y++}),Y},toArray:function(A){return te(A,function(Y){return Y})||[]},only:function(A){if(!J(A))throw Error("React.Children.only expected to receive a single React element child.");return A}},be.Component=S,be.Fragment=n,be.Profiler=l,be.PureComponent=E,be.StrictMode=o,be.Suspense=f,be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=re,be.act=ee,be.cloneElement=function(A,Y,fe){if(A==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+A+".");var de=b({},A.props),pe=A.key,ye=A.ref,ne=A._owner;if(Y!=null){if(Y.ref!==void 0&&(ye=Y.ref,ne=I.current),Y.key!==void 0&&(pe=""+Y.key),A.type&&A.type.defaultProps)var xe=A.type.defaultProps;for(_e in Y)M.call(Y,_e)&&!z.hasOwnProperty(_e)&&(de[_e]=Y[_e]===void 0&&xe!==void 0?xe[_e]:Y[_e])}var _e=arguments.length-2;if(_e===1)de.children=fe;else if(1<_e){xe=Array(_e);for(var Ve=0;Ve<_e;Ve++)xe[Ve]=arguments[Ve+2];de.children=xe}return{$$typeof:e,type:A.type,key:pe,ref:ye,props:de,_owner:ne}},be.createContext=function(A){return A={$$typeof:u,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},A.Provider={$$typeof:s,_context:A},A.Consumer=A},be.createElement=P,be.createFactory=function(A){var Y=P.bind(null,A);return Y.type=A,Y},be.createRef=function(){return{current:null}},be.forwardRef=function(A){return{$$typeof:d,render:A}},be.isValidElement=J,be.lazy=function(A){return{$$typeof:h,_payload:{_status:-1,_result:A},_init:se}},be.memo=function(A,Y){return{$$typeof:p,type:A,compare:Y===void 0?null:Y}},be.startTransition=function(A){var Y=Q.transition;Q.transition={};try{A()}finally{Q.transition=Y}},be.unstable_act=ee,be.useCallback=function(A,Y){return H.current.useCallback(A,Y)},be.useContext=function(A){return H.current.useContext(A)},be.useDebugValue=function(){},be.useDeferredValue=function(A){return H.current.useDeferredValue(A)},be.useEffect=function(A,Y){return H.current.useEffect(A,Y)},be.useId=function(){return H.current.useId()},be.useImperativeHandle=function(A,Y,fe){return H.current.useImperativeHandle(A,Y,fe)},be.useInsertionEffect=function(A,Y){return H.current.useInsertionEffect(A,Y)},be.useLayoutEffect=function(A,Y){return H.current.useLayoutEffect(A,Y)},be.useMemo=function(A,Y){return H.current.useMemo(A,Y)},be.useReducer=function(A,Y,fe){return H.current.useReducer(A,Y,fe)},be.useRef=function(A){return H.current.useRef(A)},be.useState=function(A){return H.current.useState(A)},be.useSyncExternalStore=function(A,Y,fe){return H.current.useSyncExternalStore(A,Y,fe)},be.useTransition=function(){return H.current.useTransition()},be.version="18.3.1",be}var Jh;function af(){return Jh||(Jh=1,zc.exports=tk()),zc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ev;function nk(){if(ev)return Ii;ev=1;var e=af(),t=Symbol.for("react.element"),n=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function u(d,f,p){var h,y={},v=null,x=null;p!==void 0&&(v=""+p),f.key!==void 0&&(v=""+f.key),f.ref!==void 0&&(x=f.ref);for(h in f)o.call(f,h)&&!s.hasOwnProperty(h)&&(y[h]=f[h]);if(d&&d.defaultProps)for(h in f=d.defaultProps,f)y[h]===void 0&&(y[h]=f[h]);return{$$typeof:t,type:d,key:v,ref:x,props:y,_owner:l.current}}return Ii.Fragment=n,Ii.jsx=u,Ii.jsxs=u,Ii}var tv;function rk(){return tv||(tv=1,Ac.exports=nk()),Ac.exports}var D=rk(),Ba={},Ic={exports:{}},Et={},jc={exports:{}},Fc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nv;function ok(){return nv||(nv=1,function(e){function t(Q,re){var ee=Q.length;Q.push(re);e:for(;0<ee;){var A=ee-1>>>1,Y=Q[A];if(0<l(Y,re))Q[A]=re,Q[ee]=Y,ee=A;else break e}}function n(Q){return Q.length===0?null:Q[0]}function o(Q){if(Q.length===0)return null;var re=Q[0],ee=Q.pop();if(ee!==re){Q[0]=ee;e:for(var A=0,Y=Q.length,fe=Y>>>1;A<fe;){var de=2*(A+1)-1,pe=Q[de],ye=de+1,ne=Q[ye];if(0>l(pe,ee))ye<Y&&0>l(ne,pe)?(Q[A]=ne,Q[ye]=ee,A=ye):(Q[A]=pe,Q[de]=ee,A=de);else if(ye<Y&&0>l(ne,ee))Q[A]=ne,Q[ye]=ee,A=ye;else break e}}return re}function l(Q,re){var ee=Q.sortIndex-re.sortIndex;return ee!==0?ee:Q.id-re.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var u=Date,d=u.now();e.unstable_now=function(){return u.now()-d}}var f=[],p=[],h=1,y=null,v=3,x=!1,b=!1,_=!1,S=typeof setTimeout=="function"?setTimeout:null,$=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function N(Q){for(var re=n(p);re!==null;){if(re.callback===null)o(p);else if(re.startTime<=Q)o(p),re.sortIndex=re.expirationTime,t(f,re);else break;re=n(p)}}function O(Q){if(_=!1,N(Q),!b)if(n(f)!==null)b=!0,se(M);else{var re=n(p);re!==null&&H(O,re.startTime-Q)}}function M(Q,re){b=!1,_&&(_=!1,$(P),P=-1),x=!0;var ee=v;try{for(N(re),y=n(f);y!==null&&(!(y.expirationTime>re)||Q&&!W());){var A=y.callback;if(typeof A=="function"){y.callback=null,v=y.priorityLevel;var Y=A(y.expirationTime<=re);re=e.unstable_now(),typeof Y=="function"?y.callback=Y:y===n(f)&&o(f),N(re)}else o(f);y=n(f)}if(y!==null)var fe=!0;else{var de=n(p);de!==null&&H(O,de.startTime-re),fe=!1}return fe}finally{y=null,v=ee,x=!1}}var I=!1,z=null,P=-1,K=5,J=-1;function W(){return!(e.unstable_now()-J<K)}function U(){if(z!==null){var Q=e.unstable_now();J=Q;var re=!0;try{re=z(!0,Q)}finally{re?T():(I=!1,z=null)}}else I=!1}var T;if(typeof E=="function")T=function(){E(U)};else if(typeof MessageChannel<"u"){var B=new MessageChannel,te=B.port2;B.port1.onmessage=U,T=function(){te.postMessage(null)}}else T=function(){S(U,0)};function se(Q){z=Q,I||(I=!0,T())}function H(Q,re){P=S(function(){Q(e.unstable_now())},re)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(Q){Q.callback=null},e.unstable_continueExecution=function(){b||x||(b=!0,se(M))},e.unstable_forceFrameRate=function(Q){0>Q||125<Q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<Q?Math.floor(1e3/Q):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_getFirstCallbackNode=function(){return n(f)},e.unstable_next=function(Q){switch(v){case 1:case 2:case 3:var re=3;break;default:re=v}var ee=v;v=re;try{return Q()}finally{v=ee}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(Q,re){switch(Q){case 1:case 2:case 3:case 4:case 5:break;default:Q=3}var ee=v;v=Q;try{return re()}finally{v=ee}},e.unstable_scheduleCallback=function(Q,re,ee){var A=e.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?A+ee:A):ee=A,Q){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=ee+Y,Q={id:h++,callback:re,priorityLevel:Q,startTime:ee,expirationTime:Y,sortIndex:-1},ee>A?(Q.sortIndex=ee,t(p,Q),n(f)===null&&Q===n(p)&&(_?($(P),P=-1):_=!0,H(O,ee-A))):(Q.sortIndex=Y,t(f,Q),b||x||(b=!0,se(M))),Q},e.unstable_shouldYield=W,e.unstable_wrapCallback=function(Q){var re=v;return function(){var ee=v;v=re;try{return Q.apply(this,arguments)}finally{v=ee}}}}(Fc)),Fc}var rv;function ik(){return rv||(rv=1,jc.exports=ok()),jc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ov;function lk(){if(ov)return Et;ov=1;var e=af(),t=ik();function n(r){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+r,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+r+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var o=new Set,l={};function s(r,i){u(r,i),u(r+"Capture",i)}function u(r,i){for(l[r]=i,r=0;r<i.length;r++)o.add(i[r])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,h={},y={};function v(r){return f.call(y,r)?!0:f.call(h,r)?!1:p.test(r)?y[r]=!0:(h[r]=!0,!1)}function x(r,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function b(r,i,a,c){if(i===null||typeof i>"u"||x(r,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function _(r,i,a,c,m,g,w){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=m,this.mustUseProperty=a,this.propertyName=r,this.type=i,this.sanitizeURL=g,this.removeEmptyString=w}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){S[r]=new _(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var i=r[0];S[i]=new _(i,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){S[r]=new _(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){S[r]=new _(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){S[r]=new _(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){S[r]=new _(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){S[r]=new _(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){S[r]=new _(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){S[r]=new _(r,5,!1,r.toLowerCase(),null,!1,!1)});var $=/[\-:]([a-z])/g;function E(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var i=r.replace($,E);S[i]=new _(i,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var i=r.replace($,E);S[i]=new _(i,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var i=r.replace($,E);S[i]=new _(i,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){S[r]=new _(r,1,!1,r.toLowerCase(),null,!1,!1)}),S.xlinkHref=new _("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){S[r]=new _(r,1,!1,r.toLowerCase(),null,!0,!0)});function N(r,i,a,c){var m=S.hasOwnProperty(i)?S[i]:null;(m!==null?m.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(b(i,a,m,c)&&(a=null),c||m===null?v(i)&&(a===null?r.removeAttribute(i):r.setAttribute(i,""+a)):m.mustUseProperty?r[m.propertyName]=a===null?m.type===3?!1:"":a:(i=m.attributeName,c=m.attributeNamespace,a===null?r.removeAttribute(i):(m=m.type,a=m===3||m===4&&a===!0?"":""+a,c?r.setAttributeNS(c,i,a):r.setAttribute(i,a))))}var O=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,M=Symbol.for("react.element"),I=Symbol.for("react.portal"),z=Symbol.for("react.fragment"),P=Symbol.for("react.strict_mode"),K=Symbol.for("react.profiler"),J=Symbol.for("react.provider"),W=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),T=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),te=Symbol.for("react.memo"),se=Symbol.for("react.lazy"),H=Symbol.for("react.offscreen"),Q=Symbol.iterator;function re(r){return r===null||typeof r!="object"?null:(r=Q&&r[Q]||r["@@iterator"],typeof r=="function"?r:null)}var ee=Object.assign,A;function Y(r){if(A===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);A=i&&i[1]||""}return`
`+A+r}var fe=!1;function de(r,i){if(!r||fe)return"";fe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(V){var c=V}Reflect.construct(r,[],i)}else{try{i.call()}catch(V){c=V}r.call(i.prototype)}else{try{throw Error()}catch(V){c=V}r()}}catch(V){if(V&&c&&typeof V.stack=="string"){for(var m=V.stack.split(`
`),g=c.stack.split(`
`),w=m.length-1,C=g.length-1;1<=w&&0<=C&&m[w]!==g[C];)C--;for(;1<=w&&0<=C;w--,C--)if(m[w]!==g[C]){if(w!==1||C!==1)do if(w--,C--,0>C||m[w]!==g[C]){var R=`
`+m[w].replace(" at new "," at ");return r.displayName&&R.includes("<anonymous>")&&(R=R.replace("<anonymous>",r.displayName)),R}while(1<=w&&0<=C);break}}}finally{fe=!1,Error.prepareStackTrace=a}return(r=r?r.displayName||r.name:"")?Y(r):""}function pe(r){switch(r.tag){case 5:return Y(r.type);case 16:return Y("Lazy");case 13:return Y("Suspense");case 19:return Y("SuspenseList");case 0:case 2:case 15:return r=de(r.type,!1),r;case 11:return r=de(r.type.render,!1),r;case 1:return r=de(r.type,!0),r;default:return""}}function ye(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case z:return"Fragment";case I:return"Portal";case K:return"Profiler";case P:return"StrictMode";case T:return"Suspense";case B:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case W:return(r.displayName||"Context")+".Consumer";case J:return(r._context.displayName||"Context")+".Provider";case U:var i=r.render;return r=r.displayName,r||(r=i.displayName||i.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case te:return i=r.displayName||null,i!==null?i:ye(r.type)||"Memo";case se:i=r._payload,r=r._init;try{return ye(r(i))}catch{}}return null}function ne(r){var i=r.type;switch(r.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=i.render,r=r.displayName||r.name||"",i.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ye(i);case 8:return i===P?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function xe(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function _e(r){var i=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ve(r){var i=_e(r)?"checked":"value",a=Object.getOwnPropertyDescriptor(r.constructor.prototype,i),c=""+r[i];if(!r.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var m=a.get,g=a.set;return Object.defineProperty(r,i,{configurable:!0,get:function(){return m.call(this)},set:function(w){c=""+w,g.call(this,w)}}),Object.defineProperty(r,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(w){c=""+w},stopTracking:function(){r._valueTracker=null,delete r[i]}}}}function Un(r){r._valueTracker||(r._valueTracker=Ve(r))}function Ee(r){if(!r)return!1;var i=r._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return r&&(c=_e(r)?r.checked?"true":"false":r.value),r=c,r!==a?(i.setValue(r),!0):!1}function Ft(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function eo(r,i){var a=i.checked;return ee({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??r._wrapperState.initialChecked})}function to(r,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=xe(i.value!=null?i.value:a),r._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function no(r,i){i=i.checked,i!=null&&N(r,"checked",i,!1)}function $r(r,i){no(r,i);var a=xe(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&r.value===""||r.value!=a)&&(r.value=""+a):r.value!==""+a&&(r.value=""+a);else if(c==="submit"||c==="reset"){r.removeAttribute("value");return}i.hasOwnProperty("value")?Er(r,i.type,a):i.hasOwnProperty("defaultValue")&&Er(r,i.type,xe(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(r.defaultChecked=!!i.defaultChecked)}function ro(r,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+r._wrapperState.initialValue,a||i===r.value||(r.value=i),r.defaultValue=i}a=r.name,a!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,a!==""&&(r.name=a)}function Er(r,i,a){(i!=="number"||Ft(r.ownerDocument)!==r)&&(a==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+a&&(r.defaultValue=""+a))}var Sn=Array.isArray;function Hn(r,i,a,c){if(r=r.options,i){i={};for(var m=0;m<a.length;m++)i["$"+a[m]]=!0;for(a=0;a<r.length;a++)m=i.hasOwnProperty("$"+r[a].value),r[a].selected!==m&&(r[a].selected=m),m&&c&&(r[a].defaultSelected=!0)}else{for(a=""+xe(a),i=null,m=0;m<r.length;m++){if(r[m].value===a){r[m].selected=!0,c&&(r[m].defaultSelected=!0);return}i!==null||r[m].disabled||(i=r[m])}i!==null&&(i.selected=!0)}}function Hs(r,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return ee({},i,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function sp(r,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(n(92));if(Sn(a)){if(1<a.length)throw Error(n(93));a=a[0]}i=a}i==null&&(i=""),a=i}r._wrapperState={initialValue:xe(a)}}function up(r,i){var a=xe(i.value),c=xe(i.defaultValue);a!=null&&(a=""+a,a!==r.value&&(r.value=a),i.defaultValue==null&&r.defaultValue!==a&&(r.defaultValue=a)),c!=null&&(r.defaultValue=""+c)}function cp(r){var i=r.textContent;i===r._wrapperState.initialValue&&i!==""&&i!==null&&(r.value=i)}function dp(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ws(r,i){return r==null||r==="http://www.w3.org/1999/xhtml"?dp(i):r==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var Al,fp=function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,m){MSApp.execUnsafeLocalFunction(function(){return r(i,a,c,m)})}:r}(function(r,i){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=i;else{for(Al=Al||document.createElement("div"),Al.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Al.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;i.firstChild;)r.appendChild(i.firstChild)}});function Jo(r,i){if(i){var a=r.firstChild;if(a&&a===r.lastChild&&a.nodeType===3){a.nodeValue=i;return}}r.textContent=i}var ei={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},i1=["Webkit","ms","Moz","O"];Object.keys(ei).forEach(function(r){i1.forEach(function(i){i=i+r.charAt(0).toUpperCase()+r.substring(1),ei[i]=ei[r]})});function pp(r,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||ei.hasOwnProperty(r)&&ei[r]?(""+i).trim():i+"px"}function mp(r,i){r=r.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,m=pp(a,i[a],c);a==="float"&&(a="cssFloat"),c?r.setProperty(a,m):r[a]=m}}var l1=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ys(r,i){if(i){if(l1[r]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,r));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function Qs(r,i){if(r.indexOf("-")===-1)return typeof i.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gs=null;function Xs(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var qs=null,oo=null,io=null;function hp(r){if(r=_i(r)){if(typeof qs!="function")throw Error(n(280));var i=r.stateNode;i&&(i=oa(i),qs(r.stateNode,r.type,i))}}function vp(r){oo?io?io.push(r):io=[r]:oo=r}function gp(){if(oo){var r=oo,i=io;if(io=oo=null,hp(r),i)for(r=0;r<i.length;r++)hp(i[r])}}function yp(r,i){return r(i)}function xp(){}var Zs=!1;function bp(r,i,a){if(Zs)return r(i,a);Zs=!0;try{return yp(r,i,a)}finally{Zs=!1,(oo!==null||io!==null)&&(xp(),gp())}}function ti(r,i){var a=r.stateNode;if(a===null)return null;var c=oa(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(r=r.type,c=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!c;break e;default:r=!1}if(r)return null;if(a&&typeof a!="function")throw Error(n(231,i,typeof a));return a}var Js=!1;if(d)try{var ni={};Object.defineProperty(ni,"passive",{get:function(){Js=!0}}),window.addEventListener("test",ni,ni),window.removeEventListener("test",ni,ni)}catch{Js=!1}function a1(r,i,a,c,m,g,w,C,R){var V=Array.prototype.slice.call(arguments,3);try{i.apply(a,V)}catch(X){this.onError(X)}}var ri=!1,zl=null,Il=!1,eu=null,s1={onError:function(r){ri=!0,zl=r}};function u1(r,i,a,c,m,g,w,C,R){ri=!1,zl=null,a1.apply(s1,arguments)}function c1(r,i,a,c,m,g,w,C,R){if(u1.apply(this,arguments),ri){if(ri){var V=zl;ri=!1,zl=null}else throw Error(n(198));Il||(Il=!0,eu=V)}}function Pr(r){var i=r,a=r;if(r.alternate)for(;i.return;)i=i.return;else{r=i;do i=r,(i.flags&4098)!==0&&(a=i.return),r=i.return;while(r)}return i.tag===3?a:null}function wp(r){if(r.tag===13){var i=r.memoizedState;if(i===null&&(r=r.alternate,r!==null&&(i=r.memoizedState)),i!==null)return i.dehydrated}return null}function _p(r){if(Pr(r)!==r)throw Error(n(188))}function d1(r){var i=r.alternate;if(!i){if(i=Pr(r),i===null)throw Error(n(188));return i!==r?null:r}for(var a=r,c=i;;){var m=a.return;if(m===null)break;var g=m.alternate;if(g===null){if(c=m.return,c!==null){a=c;continue}break}if(m.child===g.child){for(g=m.child;g;){if(g===a)return _p(m),r;if(g===c)return _p(m),i;g=g.sibling}throw Error(n(188))}if(a.return!==c.return)a=m,c=g;else{for(var w=!1,C=m.child;C;){if(C===a){w=!0,a=m,c=g;break}if(C===c){w=!0,c=m,a=g;break}C=C.sibling}if(!w){for(C=g.child;C;){if(C===a){w=!0,a=g,c=m;break}if(C===c){w=!0,c=g,a=m;break}C=C.sibling}if(!w)throw Error(n(189))}}if(a.alternate!==c)throw Error(n(190))}if(a.tag!==3)throw Error(n(188));return a.stateNode.current===a?r:i}function Sp(r){return r=d1(r),r!==null?kp(r):null}function kp(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var i=kp(r);if(i!==null)return i;r=r.sibling}return null}var $p=t.unstable_scheduleCallback,Ep=t.unstable_cancelCallback,f1=t.unstable_shouldYield,p1=t.unstable_requestPaint,Qe=t.unstable_now,m1=t.unstable_getCurrentPriorityLevel,tu=t.unstable_ImmediatePriority,Pp=t.unstable_UserBlockingPriority,jl=t.unstable_NormalPriority,h1=t.unstable_LowPriority,Tp=t.unstable_IdlePriority,Fl=null,sn=null;function v1(r){if(sn&&typeof sn.onCommitFiberRoot=="function")try{sn.onCommitFiberRoot(Fl,r,void 0,(r.current.flags&128)===128)}catch{}}var Zt=Math.clz32?Math.clz32:x1,g1=Math.log,y1=Math.LN2;function x1(r){return r>>>=0,r===0?32:31-(g1(r)/y1|0)|0}var Ol=64,Kl=4194304;function oi(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function Vl(r,i){var a=r.pendingLanes;if(a===0)return 0;var c=0,m=r.suspendedLanes,g=r.pingedLanes,w=a&268435455;if(w!==0){var C=w&~m;C!==0?c=oi(C):(g&=w,g!==0&&(c=oi(g)))}else w=a&~m,w!==0?c=oi(w):g!==0&&(c=oi(g));if(c===0)return 0;if(i!==0&&i!==c&&(i&m)===0&&(m=c&-c,g=i&-i,m>=g||m===16&&(g&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=r.entangledLanes,i!==0)for(r=r.entanglements,i&=c;0<i;)a=31-Zt(i),m=1<<a,c|=r[a],i&=~m;return c}function b1(r,i){switch(r){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function w1(r,i){for(var a=r.suspendedLanes,c=r.pingedLanes,m=r.expirationTimes,g=r.pendingLanes;0<g;){var w=31-Zt(g),C=1<<w,R=m[w];R===-1?((C&a)===0||(C&c)!==0)&&(m[w]=b1(C,i)):R<=i&&(r.expiredLanes|=C),g&=~C}}function nu(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function Cp(){var r=Ol;return Ol<<=1,(Ol&4194240)===0&&(Ol=64),r}function ru(r){for(var i=[],a=0;31>a;a++)i.push(r);return i}function ii(r,i,a){r.pendingLanes|=i,i!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,i=31-Zt(i),r[i]=a}function _1(r,i){var a=r.pendingLanes&~i;r.pendingLanes=i,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=i,r.mutableReadLanes&=i,r.entangledLanes&=i,i=r.entanglements;var c=r.eventTimes;for(r=r.expirationTimes;0<a;){var m=31-Zt(a),g=1<<m;i[m]=0,c[m]=-1,r[m]=-1,a&=~g}}function ou(r,i){var a=r.entangledLanes|=i;for(r=r.entanglements;a;){var c=31-Zt(a),m=1<<c;m&i|r[c]&i&&(r[c]|=i),a&=~m}}var Te=0;function Mp(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var Dp,iu,Np,Rp,Lp,lu=!1,Bl=[],Wn=null,Yn=null,Qn=null,li=new Map,ai=new Map,Gn=[],S1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ap(r,i){switch(r){case"focusin":case"focusout":Wn=null;break;case"dragenter":case"dragleave":Yn=null;break;case"mouseover":case"mouseout":Qn=null;break;case"pointerover":case"pointerout":li.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ai.delete(i.pointerId)}}function si(r,i,a,c,m,g){return r===null||r.nativeEvent!==g?(r={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:g,targetContainers:[m]},i!==null&&(i=_i(i),i!==null&&iu(i)),r):(r.eventSystemFlags|=c,i=r.targetContainers,m!==null&&i.indexOf(m)===-1&&i.push(m),r)}function k1(r,i,a,c,m){switch(i){case"focusin":return Wn=si(Wn,r,i,a,c,m),!0;case"dragenter":return Yn=si(Yn,r,i,a,c,m),!0;case"mouseover":return Qn=si(Qn,r,i,a,c,m),!0;case"pointerover":var g=m.pointerId;return li.set(g,si(li.get(g)||null,r,i,a,c,m)),!0;case"gotpointercapture":return g=m.pointerId,ai.set(g,si(ai.get(g)||null,r,i,a,c,m)),!0}return!1}function zp(r){var i=Tr(r.target);if(i!==null){var a=Pr(i);if(a!==null){if(i=a.tag,i===13){if(i=wp(a),i!==null){r.blockedOn=i,Lp(r.priority,function(){Np(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){r.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}r.blockedOn=null}function Ul(r){if(r.blockedOn!==null)return!1;for(var i=r.targetContainers;0<i.length;){var a=su(r.domEventName,r.eventSystemFlags,i[0],r.nativeEvent);if(a===null){a=r.nativeEvent;var c=new a.constructor(a.type,a);Gs=c,a.target.dispatchEvent(c),Gs=null}else return i=_i(a),i!==null&&iu(i),r.blockedOn=a,!1;i.shift()}return!0}function Ip(r,i,a){Ul(r)&&a.delete(i)}function $1(){lu=!1,Wn!==null&&Ul(Wn)&&(Wn=null),Yn!==null&&Ul(Yn)&&(Yn=null),Qn!==null&&Ul(Qn)&&(Qn=null),li.forEach(Ip),ai.forEach(Ip)}function ui(r,i){r.blockedOn===i&&(r.blockedOn=null,lu||(lu=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,$1)))}function ci(r){function i(m){return ui(m,r)}if(0<Bl.length){ui(Bl[0],r);for(var a=1;a<Bl.length;a++){var c=Bl[a];c.blockedOn===r&&(c.blockedOn=null)}}for(Wn!==null&&ui(Wn,r),Yn!==null&&ui(Yn,r),Qn!==null&&ui(Qn,r),li.forEach(i),ai.forEach(i),a=0;a<Gn.length;a++)c=Gn[a],c.blockedOn===r&&(c.blockedOn=null);for(;0<Gn.length&&(a=Gn[0],a.blockedOn===null);)zp(a),a.blockedOn===null&&Gn.shift()}var lo=O.ReactCurrentBatchConfig,Hl=!0;function E1(r,i,a,c){var m=Te,g=lo.transition;lo.transition=null;try{Te=1,au(r,i,a,c)}finally{Te=m,lo.transition=g}}function P1(r,i,a,c){var m=Te,g=lo.transition;lo.transition=null;try{Te=4,au(r,i,a,c)}finally{Te=m,lo.transition=g}}function au(r,i,a,c){if(Hl){var m=su(r,i,a,c);if(m===null)$u(r,i,c,Wl,a),Ap(r,c);else if(k1(m,r,i,a,c))c.stopPropagation();else if(Ap(r,c),i&4&&-1<S1.indexOf(r)){for(;m!==null;){var g=_i(m);if(g!==null&&Dp(g),g=su(r,i,a,c),g===null&&$u(r,i,c,Wl,a),g===m)break;m=g}m!==null&&c.stopPropagation()}else $u(r,i,c,null,a)}}var Wl=null;function su(r,i,a,c){if(Wl=null,r=Xs(c),r=Tr(r),r!==null)if(i=Pr(r),i===null)r=null;else if(a=i.tag,a===13){if(r=wp(i),r!==null)return r;r=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;r=null}else i!==r&&(r=null);return Wl=r,null}function jp(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(m1()){case tu:return 1;case Pp:return 4;case jl:case h1:return 16;case Tp:return 536870912;default:return 16}default:return 16}}var Xn=null,uu=null,Yl=null;function Fp(){if(Yl)return Yl;var r,i=uu,a=i.length,c,m="value"in Xn?Xn.value:Xn.textContent,g=m.length;for(r=0;r<a&&i[r]===m[r];r++);var w=a-r;for(c=1;c<=w&&i[a-c]===m[g-c];c++);return Yl=m.slice(r,1<c?1-c:void 0)}function Ql(r){var i=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&i===13&&(r=13)):r=i,r===10&&(r=13),32<=r||r===13?r:0}function Gl(){return!0}function Op(){return!1}function Dt(r){function i(a,c,m,g,w){this._reactName=a,this._targetInst=m,this.type=c,this.nativeEvent=g,this.target=w,this.currentTarget=null;for(var C in r)r.hasOwnProperty(C)&&(a=r[C],this[C]=a?a(g):g[C]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Gl:Op,this.isPropagationStopped=Op,this}return ee(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Gl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Gl)},persist:function(){},isPersistent:Gl}),i}var ao={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cu=Dt(ao),di=ee({},ao,{view:0,detail:0}),T1=Dt(di),du,fu,fi,Xl=ee({},di,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mu,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==fi&&(fi&&r.type==="mousemove"?(du=r.screenX-fi.screenX,fu=r.screenY-fi.screenY):fu=du=0,fi=r),du)},movementY:function(r){return"movementY"in r?r.movementY:fu}}),Kp=Dt(Xl),C1=ee({},Xl,{dataTransfer:0}),M1=Dt(C1),D1=ee({},di,{relatedTarget:0}),pu=Dt(D1),N1=ee({},ao,{animationName:0,elapsedTime:0,pseudoElement:0}),R1=Dt(N1),L1=ee({},ao,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),A1=Dt(L1),z1=ee({},ao,{data:0}),Vp=Dt(z1),I1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},j1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},F1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function O1(r){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(r):(r=F1[r])?!!i[r]:!1}function mu(){return O1}var K1=ee({},di,{key:function(r){if(r.key){var i=I1[r.key]||r.key;if(i!=="Unidentified")return i}return r.type==="keypress"?(r=Ql(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?j1[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mu,charCode:function(r){return r.type==="keypress"?Ql(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?Ql(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),V1=Dt(K1),B1=ee({},Xl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bp=Dt(B1),U1=ee({},di,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mu}),H1=Dt(U1),W1=ee({},ao,{propertyName:0,elapsedTime:0,pseudoElement:0}),Y1=Dt(W1),Q1=ee({},Xl,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),G1=Dt(Q1),X1=[9,13,27,32],hu=d&&"CompositionEvent"in window,pi=null;d&&"documentMode"in document&&(pi=document.documentMode);var q1=d&&"TextEvent"in window&&!pi,Up=d&&(!hu||pi&&8<pi&&11>=pi),Hp=" ",Wp=!1;function Yp(r,i){switch(r){case"keyup":return X1.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qp(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var so=!1;function Z1(r,i){switch(r){case"compositionend":return Qp(i);case"keypress":return i.which!==32?null:(Wp=!0,Hp);case"textInput":return r=i.data,r===Hp&&Wp?null:r;default:return null}}function J1(r,i){if(so)return r==="compositionend"||!hu&&Yp(r,i)?(r=Fp(),Yl=uu=Xn=null,so=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Up&&i.locale!=="ko"?null:i.data;default:return null}}var eS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gp(r){var i=r&&r.nodeName&&r.nodeName.toLowerCase();return i==="input"?!!eS[r.type]:i==="textarea"}function Xp(r,i,a,c){vp(c),i=ta(i,"onChange"),0<i.length&&(a=new cu("onChange","change",null,a,c),r.push({event:a,listeners:i}))}var mi=null,hi=null;function tS(r){mm(r,0)}function ql(r){var i=mo(r);if(Ee(i))return r}function nS(r,i){if(r==="change")return i}var qp=!1;if(d){var vu;if(d){var gu="oninput"in document;if(!gu){var Zp=document.createElement("div");Zp.setAttribute("oninput","return;"),gu=typeof Zp.oninput=="function"}vu=gu}else vu=!1;qp=vu&&(!document.documentMode||9<document.documentMode)}function Jp(){mi&&(mi.detachEvent("onpropertychange",em),hi=mi=null)}function em(r){if(r.propertyName==="value"&&ql(hi)){var i=[];Xp(i,hi,r,Xs(r)),bp(tS,i)}}function rS(r,i,a){r==="focusin"?(Jp(),mi=i,hi=a,mi.attachEvent("onpropertychange",em)):r==="focusout"&&Jp()}function oS(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return ql(hi)}function iS(r,i){if(r==="click")return ql(i)}function lS(r,i){if(r==="input"||r==="change")return ql(i)}function aS(r,i){return r===i&&(r!==0||1/r===1/i)||r!==r&&i!==i}var Jt=typeof Object.is=="function"?Object.is:aS;function vi(r,i){if(Jt(r,i))return!0;if(typeof r!="object"||r===null||typeof i!="object"||i===null)return!1;var a=Object.keys(r),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var m=a[c];if(!f.call(i,m)||!Jt(r[m],i[m]))return!1}return!0}function tm(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function nm(r,i){var a=tm(r);r=0;for(var c;a;){if(a.nodeType===3){if(c=r+a.textContent.length,r<=i&&c>=i)return{node:a,offset:i-r};r=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=tm(a)}}function rm(r,i){return r&&i?r===i?!0:r&&r.nodeType===3?!1:i&&i.nodeType===3?rm(r,i.parentNode):"contains"in r?r.contains(i):r.compareDocumentPosition?!!(r.compareDocumentPosition(i)&16):!1:!1}function om(){for(var r=window,i=Ft();i instanceof r.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)r=i.contentWindow;else break;i=Ft(r.document)}return i}function yu(r){var i=r&&r.nodeName&&r.nodeName.toLowerCase();return i&&(i==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||i==="textarea"||r.contentEditable==="true")}function sS(r){var i=om(),a=r.focusedElem,c=r.selectionRange;if(i!==a&&a&&a.ownerDocument&&rm(a.ownerDocument.documentElement,a)){if(c!==null&&yu(a)){if(i=c.start,r=c.end,r===void 0&&(r=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(r,a.value.length);else if(r=(i=a.ownerDocument||document)&&i.defaultView||window,r.getSelection){r=r.getSelection();var m=a.textContent.length,g=Math.min(c.start,m);c=c.end===void 0?g:Math.min(c.end,m),!r.extend&&g>c&&(m=c,c=g,g=m),m=nm(a,g);var w=nm(a,c);m&&w&&(r.rangeCount!==1||r.anchorNode!==m.node||r.anchorOffset!==m.offset||r.focusNode!==w.node||r.focusOffset!==w.offset)&&(i=i.createRange(),i.setStart(m.node,m.offset),r.removeAllRanges(),g>c?(r.addRange(i),r.extend(w.node,w.offset)):(i.setEnd(w.node,w.offset),r.addRange(i)))}}for(i=[],r=a;r=r.parentNode;)r.nodeType===1&&i.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)r=i[a],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var uS=d&&"documentMode"in document&&11>=document.documentMode,uo=null,xu=null,gi=null,bu=!1;function im(r,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;bu||uo==null||uo!==Ft(c)||(c=uo,"selectionStart"in c&&yu(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),gi&&vi(gi,c)||(gi=c,c=ta(xu,"onSelect"),0<c.length&&(i=new cu("onSelect","select",null,i,a),r.push({event:i,listeners:c}),i.target=uo)))}function Zl(r,i){var a={};return a[r.toLowerCase()]=i.toLowerCase(),a["Webkit"+r]="webkit"+i,a["Moz"+r]="moz"+i,a}var co={animationend:Zl("Animation","AnimationEnd"),animationiteration:Zl("Animation","AnimationIteration"),animationstart:Zl("Animation","AnimationStart"),transitionend:Zl("Transition","TransitionEnd")},wu={},lm={};d&&(lm=document.createElement("div").style,"AnimationEvent"in window||(delete co.animationend.animation,delete co.animationiteration.animation,delete co.animationstart.animation),"TransitionEvent"in window||delete co.transitionend.transition);function Jl(r){if(wu[r])return wu[r];if(!co[r])return r;var i=co[r],a;for(a in i)if(i.hasOwnProperty(a)&&a in lm)return wu[r]=i[a];return r}var am=Jl("animationend"),sm=Jl("animationiteration"),um=Jl("animationstart"),cm=Jl("transitionend"),dm=new Map,fm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qn(r,i){dm.set(r,i),s(i,[r])}for(var _u=0;_u<fm.length;_u++){var Su=fm[_u],cS=Su.toLowerCase(),dS=Su[0].toUpperCase()+Su.slice(1);qn(cS,"on"+dS)}qn(am,"onAnimationEnd"),qn(sm,"onAnimationIteration"),qn(um,"onAnimationStart"),qn("dblclick","onDoubleClick"),qn("focusin","onFocus"),qn("focusout","onBlur"),qn(cm,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),s("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),s("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),s("onBeforeInput",["compositionend","keypress","textInput","paste"]),s("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fS=new Set("cancel close invalid load scroll toggle".split(" ").concat(yi));function pm(r,i,a){var c=r.type||"unknown-event";r.currentTarget=a,c1(c,i,void 0,r),r.currentTarget=null}function mm(r,i){i=(i&4)!==0;for(var a=0;a<r.length;a++){var c=r[a],m=c.event;c=c.listeners;e:{var g=void 0;if(i)for(var w=c.length-1;0<=w;w--){var C=c[w],R=C.instance,V=C.currentTarget;if(C=C.listener,R!==g&&m.isPropagationStopped())break e;pm(m,C,V),g=R}else for(w=0;w<c.length;w++){if(C=c[w],R=C.instance,V=C.currentTarget,C=C.listener,R!==g&&m.isPropagationStopped())break e;pm(m,C,V),g=R}}}if(Il)throw r=eu,Il=!1,eu=null,r}function Ae(r,i){var a=i[Du];a===void 0&&(a=i[Du]=new Set);var c=r+"__bubble";a.has(c)||(hm(i,r,2,!1),a.add(c))}function ku(r,i,a){var c=0;i&&(c|=4),hm(a,r,c,i)}var ea="_reactListening"+Math.random().toString(36).slice(2);function xi(r){if(!r[ea]){r[ea]=!0,o.forEach(function(a){a!=="selectionchange"&&(fS.has(a)||ku(a,!1,r),ku(a,!0,r))});var i=r.nodeType===9?r:r.ownerDocument;i===null||i[ea]||(i[ea]=!0,ku("selectionchange",!1,i))}}function hm(r,i,a,c){switch(jp(i)){case 1:var m=E1;break;case 4:m=P1;break;default:m=au}a=m.bind(null,i,a,r),m=void 0,!Js||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(m=!0),c?m!==void 0?r.addEventListener(i,a,{capture:!0,passive:m}):r.addEventListener(i,a,!0):m!==void 0?r.addEventListener(i,a,{passive:m}):r.addEventListener(i,a,!1)}function $u(r,i,a,c,m){var g=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var w=c.tag;if(w===3||w===4){var C=c.stateNode.containerInfo;if(C===m||C.nodeType===8&&C.parentNode===m)break;if(w===4)for(w=c.return;w!==null;){var R=w.tag;if((R===3||R===4)&&(R=w.stateNode.containerInfo,R===m||R.nodeType===8&&R.parentNode===m))return;w=w.return}for(;C!==null;){if(w=Tr(C),w===null)return;if(R=w.tag,R===5||R===6){c=g=w;continue e}C=C.parentNode}}c=c.return}bp(function(){var V=g,X=Xs(a),q=[];e:{var G=dm.get(r);if(G!==void 0){var oe=cu,ae=r;switch(r){case"keypress":if(Ql(a)===0)break e;case"keydown":case"keyup":oe=V1;break;case"focusin":ae="focus",oe=pu;break;case"focusout":ae="blur",oe=pu;break;case"beforeblur":case"afterblur":oe=pu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":oe=Kp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":oe=M1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":oe=H1;break;case am:case sm:case um:oe=R1;break;case cm:oe=Y1;break;case"scroll":oe=T1;break;case"wheel":oe=G1;break;case"copy":case"cut":case"paste":oe=A1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":oe=Bp}var ue=(i&4)!==0,Ge=!ue&&r==="scroll",j=ue?G!==null?G+"Capture":null:G;ue=[];for(var L=V,F;L!==null;){F=L;var Z=F.stateNode;if(F.tag===5&&Z!==null&&(F=Z,j!==null&&(Z=ti(L,j),Z!=null&&ue.push(bi(L,Z,F)))),Ge)break;L=L.return}0<ue.length&&(G=new oe(G,ae,null,a,X),q.push({event:G,listeners:ue}))}}if((i&7)===0){e:{if(G=r==="mouseover"||r==="pointerover",oe=r==="mouseout"||r==="pointerout",G&&a!==Gs&&(ae=a.relatedTarget||a.fromElement)&&(Tr(ae)||ae[kn]))break e;if((oe||G)&&(G=X.window===X?X:(G=X.ownerDocument)?G.defaultView||G.parentWindow:window,oe?(ae=a.relatedTarget||a.toElement,oe=V,ae=ae?Tr(ae):null,ae!==null&&(Ge=Pr(ae),ae!==Ge||ae.tag!==5&&ae.tag!==6)&&(ae=null)):(oe=null,ae=V),oe!==ae)){if(ue=Kp,Z="onMouseLeave",j="onMouseEnter",L="mouse",(r==="pointerout"||r==="pointerover")&&(ue=Bp,Z="onPointerLeave",j="onPointerEnter",L="pointer"),Ge=oe==null?G:mo(oe),F=ae==null?G:mo(ae),G=new ue(Z,L+"leave",oe,a,X),G.target=Ge,G.relatedTarget=F,Z=null,Tr(X)===V&&(ue=new ue(j,L+"enter",ae,a,X),ue.target=F,ue.relatedTarget=Ge,Z=ue),Ge=Z,oe&&ae)t:{for(ue=oe,j=ae,L=0,F=ue;F;F=fo(F))L++;for(F=0,Z=j;Z;Z=fo(Z))F++;for(;0<L-F;)ue=fo(ue),L--;for(;0<F-L;)j=fo(j),F--;for(;L--;){if(ue===j||j!==null&&ue===j.alternate)break t;ue=fo(ue),j=fo(j)}ue=null}else ue=null;oe!==null&&vm(q,G,oe,ue,!1),ae!==null&&Ge!==null&&vm(q,Ge,ae,ue,!0)}}e:{if(G=V?mo(V):window,oe=G.nodeName&&G.nodeName.toLowerCase(),oe==="select"||oe==="input"&&G.type==="file")var ce=nS;else if(Gp(G))if(qp)ce=lS;else{ce=oS;var me=rS}else(oe=G.nodeName)&&oe.toLowerCase()==="input"&&(G.type==="checkbox"||G.type==="radio")&&(ce=iS);if(ce&&(ce=ce(r,V))){Xp(q,ce,a,X);break e}me&&me(r,G,V),r==="focusout"&&(me=G._wrapperState)&&me.controlled&&G.type==="number"&&Er(G,"number",G.value)}switch(me=V?mo(V):window,r){case"focusin":(Gp(me)||me.contentEditable==="true")&&(uo=me,xu=V,gi=null);break;case"focusout":gi=xu=uo=null;break;case"mousedown":bu=!0;break;case"contextmenu":case"mouseup":case"dragend":bu=!1,im(q,a,X);break;case"selectionchange":if(uS)break;case"keydown":case"keyup":im(q,a,X)}var he;if(hu)e:{switch(r){case"compositionstart":var ge="onCompositionStart";break e;case"compositionend":ge="onCompositionEnd";break e;case"compositionupdate":ge="onCompositionUpdate";break e}ge=void 0}else so?Yp(r,a)&&(ge="onCompositionEnd"):r==="keydown"&&a.keyCode===229&&(ge="onCompositionStart");ge&&(Up&&a.locale!=="ko"&&(so||ge!=="onCompositionStart"?ge==="onCompositionEnd"&&so&&(he=Fp()):(Xn=X,uu="value"in Xn?Xn.value:Xn.textContent,so=!0)),me=ta(V,ge),0<me.length&&(ge=new Vp(ge,r,null,a,X),q.push({event:ge,listeners:me}),he?ge.data=he:(he=Qp(a),he!==null&&(ge.data=he)))),(he=q1?Z1(r,a):J1(r,a))&&(V=ta(V,"onBeforeInput"),0<V.length&&(X=new Vp("onBeforeInput","beforeinput",null,a,X),q.push({event:X,listeners:V}),X.data=he))}mm(q,i)})}function bi(r,i,a){return{instance:r,listener:i,currentTarget:a}}function ta(r,i){for(var a=i+"Capture",c=[];r!==null;){var m=r,g=m.stateNode;m.tag===5&&g!==null&&(m=g,g=ti(r,a),g!=null&&c.unshift(bi(r,g,m)),g=ti(r,i),g!=null&&c.push(bi(r,g,m))),r=r.return}return c}function fo(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function vm(r,i,a,c,m){for(var g=i._reactName,w=[];a!==null&&a!==c;){var C=a,R=C.alternate,V=C.stateNode;if(R!==null&&R===c)break;C.tag===5&&V!==null&&(C=V,m?(R=ti(a,g),R!=null&&w.unshift(bi(a,R,C))):m||(R=ti(a,g),R!=null&&w.push(bi(a,R,C)))),a=a.return}w.length!==0&&r.push({event:i,listeners:w})}var pS=/\r\n?/g,mS=/\u0000|\uFFFD/g;function gm(r){return(typeof r=="string"?r:""+r).replace(pS,`
`).replace(mS,"")}function na(r,i,a){if(i=gm(i),gm(r)!==i&&a)throw Error(n(425))}function ra(){}var Eu=null,Pu=null;function Tu(r,i){return r==="textarea"||r==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Cu=typeof setTimeout=="function"?setTimeout:void 0,hS=typeof clearTimeout=="function"?clearTimeout:void 0,ym=typeof Promise=="function"?Promise:void 0,vS=typeof queueMicrotask=="function"?queueMicrotask:typeof ym<"u"?function(r){return ym.resolve(null).then(r).catch(gS)}:Cu;function gS(r){setTimeout(function(){throw r})}function Mu(r,i){var a=i,c=0;do{var m=a.nextSibling;if(r.removeChild(a),m&&m.nodeType===8)if(a=m.data,a==="/$"){if(c===0){r.removeChild(m),ci(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=m}while(a);ci(i)}function Zn(r){for(;r!=null;r=r.nextSibling){var i=r.nodeType;if(i===1||i===3)break;if(i===8){if(i=r.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return r}function xm(r){r=r.previousSibling;for(var i=0;r;){if(r.nodeType===8){var a=r.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return r;i--}else a==="/$"&&i++}r=r.previousSibling}return null}var po=Math.random().toString(36).slice(2),un="__reactFiber$"+po,wi="__reactProps$"+po,kn="__reactContainer$"+po,Du="__reactEvents$"+po,yS="__reactListeners$"+po,xS="__reactHandles$"+po;function Tr(r){var i=r[un];if(i)return i;for(var a=r.parentNode;a;){if(i=a[kn]||a[un]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(r=xm(r);r!==null;){if(a=r[un])return a;r=xm(r)}return i}r=a,a=r.parentNode}return null}function _i(r){return r=r[un]||r[kn],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function mo(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(n(33))}function oa(r){return r[wi]||null}var Nu=[],ho=-1;function Jn(r){return{current:r}}function ze(r){0>ho||(r.current=Nu[ho],Nu[ho]=null,ho--)}function De(r,i){ho++,Nu[ho]=r.current,r.current=i}var er={},ct=Jn(er),wt=Jn(!1),Cr=er;function vo(r,i){var a=r.type.contextTypes;if(!a)return er;var c=r.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var m={},g;for(g in a)m[g]=i[g];return c&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=i,r.__reactInternalMemoizedMaskedChildContext=m),m}function _t(r){return r=r.childContextTypes,r!=null}function ia(){ze(wt),ze(ct)}function bm(r,i,a){if(ct.current!==er)throw Error(n(168));De(ct,i),De(wt,a)}function wm(r,i,a){var c=r.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var m in c)if(!(m in i))throw Error(n(108,ne(r)||"Unknown",m));return ee({},a,c)}function la(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||er,Cr=ct.current,De(ct,r),De(wt,wt.current),!0}function _m(r,i,a){var c=r.stateNode;if(!c)throw Error(n(169));a?(r=wm(r,i,Cr),c.__reactInternalMemoizedMergedChildContext=r,ze(wt),ze(ct),De(ct,r)):ze(wt),De(wt,a)}var $n=null,aa=!1,Ru=!1;function Sm(r){$n===null?$n=[r]:$n.push(r)}function bS(r){aa=!0,Sm(r)}function tr(){if(!Ru&&$n!==null){Ru=!0;var r=0,i=Te;try{var a=$n;for(Te=1;r<a.length;r++){var c=a[r];do c=c(!0);while(c!==null)}$n=null,aa=!1}catch(m){throw $n!==null&&($n=$n.slice(r+1)),$p(tu,tr),m}finally{Te=i,Ru=!1}}return null}var go=[],yo=0,sa=null,ua=0,Ot=[],Kt=0,Mr=null,En=1,Pn="";function Dr(r,i){go[yo++]=ua,go[yo++]=sa,sa=r,ua=i}function km(r,i,a){Ot[Kt++]=En,Ot[Kt++]=Pn,Ot[Kt++]=Mr,Mr=r;var c=En;r=Pn;var m=32-Zt(c)-1;c&=~(1<<m),a+=1;var g=32-Zt(i)+m;if(30<g){var w=m-m%5;g=(c&(1<<w)-1).toString(32),c>>=w,m-=w,En=1<<32-Zt(i)+m|a<<m|c,Pn=g+r}else En=1<<g|a<<m|c,Pn=r}function Lu(r){r.return!==null&&(Dr(r,1),km(r,1,0))}function Au(r){for(;r===sa;)sa=go[--yo],go[yo]=null,ua=go[--yo],go[yo]=null;for(;r===Mr;)Mr=Ot[--Kt],Ot[Kt]=null,Pn=Ot[--Kt],Ot[Kt]=null,En=Ot[--Kt],Ot[Kt]=null}var Nt=null,Rt=null,Ie=!1,en=null;function $m(r,i){var a=Ht(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=r,i=r.deletions,i===null?(r.deletions=[a],r.flags|=16):i.push(a)}function Em(r,i){switch(r.tag){case 5:var a=r.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(r.stateNode=i,Nt=r,Rt=Zn(i.firstChild),!0):!1;case 6:return i=r.pendingProps===""||i.nodeType!==3?null:i,i!==null?(r.stateNode=i,Nt=r,Rt=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Mr!==null?{id:En,overflow:Pn}:null,r.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Ht(18,null,null,0),a.stateNode=i,a.return=r,r.child=a,Nt=r,Rt=null,!0):!1;default:return!1}}function zu(r){return(r.mode&1)!==0&&(r.flags&128)===0}function Iu(r){if(Ie){var i=Rt;if(i){var a=i;if(!Em(r,i)){if(zu(r))throw Error(n(418));i=Zn(a.nextSibling);var c=Nt;i&&Em(r,i)?$m(c,a):(r.flags=r.flags&-4097|2,Ie=!1,Nt=r)}}else{if(zu(r))throw Error(n(418));r.flags=r.flags&-4097|2,Ie=!1,Nt=r}}}function Pm(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;Nt=r}function ca(r){if(r!==Nt)return!1;if(!Ie)return Pm(r),Ie=!0,!1;var i;if((i=r.tag!==3)&&!(i=r.tag!==5)&&(i=r.type,i=i!=="head"&&i!=="body"&&!Tu(r.type,r.memoizedProps)),i&&(i=Rt)){if(zu(r))throw Tm(),Error(n(418));for(;i;)$m(r,i),i=Zn(i.nextSibling)}if(Pm(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(n(317));e:{for(r=r.nextSibling,i=0;r;){if(r.nodeType===8){var a=r.data;if(a==="/$"){if(i===0){Rt=Zn(r.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}r=r.nextSibling}Rt=null}}else Rt=Nt?Zn(r.stateNode.nextSibling):null;return!0}function Tm(){for(var r=Rt;r;)r=Zn(r.nextSibling)}function xo(){Rt=Nt=null,Ie=!1}function ju(r){en===null?en=[r]:en.push(r)}var wS=O.ReactCurrentBatchConfig;function Si(r,i,a){if(r=a.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(n(309));var c=a.stateNode}if(!c)throw Error(n(147,r));var m=c,g=""+r;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===g?i.ref:(i=function(w){var C=m.refs;w===null?delete C[g]:C[g]=w},i._stringRef=g,i)}if(typeof r!="string")throw Error(n(284));if(!a._owner)throw Error(n(290,r))}return r}function da(r,i){throw r=Object.prototype.toString.call(i),Error(n(31,r==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":r))}function Cm(r){var i=r._init;return i(r._payload)}function Mm(r){function i(j,L){if(r){var F=j.deletions;F===null?(j.deletions=[L],j.flags|=16):F.push(L)}}function a(j,L){if(!r)return null;for(;L!==null;)i(j,L),L=L.sibling;return null}function c(j,L){for(j=new Map;L!==null;)L.key!==null?j.set(L.key,L):j.set(L.index,L),L=L.sibling;return j}function m(j,L){return j=ur(j,L),j.index=0,j.sibling=null,j}function g(j,L,F){return j.index=F,r?(F=j.alternate,F!==null?(F=F.index,F<L?(j.flags|=2,L):F):(j.flags|=2,L)):(j.flags|=1048576,L)}function w(j){return r&&j.alternate===null&&(j.flags|=2),j}function C(j,L,F,Z){return L===null||L.tag!==6?(L=Cc(F,j.mode,Z),L.return=j,L):(L=m(L,F),L.return=j,L)}function R(j,L,F,Z){var ce=F.type;return ce===z?X(j,L,F.props.children,Z,F.key):L!==null&&(L.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===se&&Cm(ce)===L.type)?(Z=m(L,F.props),Z.ref=Si(j,L,F),Z.return=j,Z):(Z=Aa(F.type,F.key,F.props,null,j.mode,Z),Z.ref=Si(j,L,F),Z.return=j,Z)}function V(j,L,F,Z){return L===null||L.tag!==4||L.stateNode.containerInfo!==F.containerInfo||L.stateNode.implementation!==F.implementation?(L=Mc(F,j.mode,Z),L.return=j,L):(L=m(L,F.children||[]),L.return=j,L)}function X(j,L,F,Z,ce){return L===null||L.tag!==7?(L=Fr(F,j.mode,Z,ce),L.return=j,L):(L=m(L,F),L.return=j,L)}function q(j,L,F){if(typeof L=="string"&&L!==""||typeof L=="number")return L=Cc(""+L,j.mode,F),L.return=j,L;if(typeof L=="object"&&L!==null){switch(L.$$typeof){case M:return F=Aa(L.type,L.key,L.props,null,j.mode,F),F.ref=Si(j,null,L),F.return=j,F;case I:return L=Mc(L,j.mode,F),L.return=j,L;case se:var Z=L._init;return q(j,Z(L._payload),F)}if(Sn(L)||re(L))return L=Fr(L,j.mode,F,null),L.return=j,L;da(j,L)}return null}function G(j,L,F,Z){var ce=L!==null?L.key:null;if(typeof F=="string"&&F!==""||typeof F=="number")return ce!==null?null:C(j,L,""+F,Z);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case M:return F.key===ce?R(j,L,F,Z):null;case I:return F.key===ce?V(j,L,F,Z):null;case se:return ce=F._init,G(j,L,ce(F._payload),Z)}if(Sn(F)||re(F))return ce!==null?null:X(j,L,F,Z,null);da(j,F)}return null}function oe(j,L,F,Z,ce){if(typeof Z=="string"&&Z!==""||typeof Z=="number")return j=j.get(F)||null,C(L,j,""+Z,ce);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case M:return j=j.get(Z.key===null?F:Z.key)||null,R(L,j,Z,ce);case I:return j=j.get(Z.key===null?F:Z.key)||null,V(L,j,Z,ce);case se:var me=Z._init;return oe(j,L,F,me(Z._payload),ce)}if(Sn(Z)||re(Z))return j=j.get(F)||null,X(L,j,Z,ce,null);da(L,Z)}return null}function ae(j,L,F,Z){for(var ce=null,me=null,he=L,ge=L=0,rt=null;he!==null&&ge<F.length;ge++){he.index>ge?(rt=he,he=null):rt=he.sibling;var $e=G(j,he,F[ge],Z);if($e===null){he===null&&(he=rt);break}r&&he&&$e.alternate===null&&i(j,he),L=g($e,L,ge),me===null?ce=$e:me.sibling=$e,me=$e,he=rt}if(ge===F.length)return a(j,he),Ie&&Dr(j,ge),ce;if(he===null){for(;ge<F.length;ge++)he=q(j,F[ge],Z),he!==null&&(L=g(he,L,ge),me===null?ce=he:me.sibling=he,me=he);return Ie&&Dr(j,ge),ce}for(he=c(j,he);ge<F.length;ge++)rt=oe(he,j,ge,F[ge],Z),rt!==null&&(r&&rt.alternate!==null&&he.delete(rt.key===null?ge:rt.key),L=g(rt,L,ge),me===null?ce=rt:me.sibling=rt,me=rt);return r&&he.forEach(function(cr){return i(j,cr)}),Ie&&Dr(j,ge),ce}function ue(j,L,F,Z){var ce=re(F);if(typeof ce!="function")throw Error(n(150));if(F=ce.call(F),F==null)throw Error(n(151));for(var me=ce=null,he=L,ge=L=0,rt=null,$e=F.next();he!==null&&!$e.done;ge++,$e=F.next()){he.index>ge?(rt=he,he=null):rt=he.sibling;var cr=G(j,he,$e.value,Z);if(cr===null){he===null&&(he=rt);break}r&&he&&cr.alternate===null&&i(j,he),L=g(cr,L,ge),me===null?ce=cr:me.sibling=cr,me=cr,he=rt}if($e.done)return a(j,he),Ie&&Dr(j,ge),ce;if(he===null){for(;!$e.done;ge++,$e=F.next())$e=q(j,$e.value,Z),$e!==null&&(L=g($e,L,ge),me===null?ce=$e:me.sibling=$e,me=$e);return Ie&&Dr(j,ge),ce}for(he=c(j,he);!$e.done;ge++,$e=F.next())$e=oe(he,j,ge,$e.value,Z),$e!==null&&(r&&$e.alternate!==null&&he.delete($e.key===null?ge:$e.key),L=g($e,L,ge),me===null?ce=$e:me.sibling=$e,me=$e);return r&&he.forEach(function(ek){return i(j,ek)}),Ie&&Dr(j,ge),ce}function Ge(j,L,F,Z){if(typeof F=="object"&&F!==null&&F.type===z&&F.key===null&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case M:e:{for(var ce=F.key,me=L;me!==null;){if(me.key===ce){if(ce=F.type,ce===z){if(me.tag===7){a(j,me.sibling),L=m(me,F.props.children),L.return=j,j=L;break e}}else if(me.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===se&&Cm(ce)===me.type){a(j,me.sibling),L=m(me,F.props),L.ref=Si(j,me,F),L.return=j,j=L;break e}a(j,me);break}else i(j,me);me=me.sibling}F.type===z?(L=Fr(F.props.children,j.mode,Z,F.key),L.return=j,j=L):(Z=Aa(F.type,F.key,F.props,null,j.mode,Z),Z.ref=Si(j,L,F),Z.return=j,j=Z)}return w(j);case I:e:{for(me=F.key;L!==null;){if(L.key===me)if(L.tag===4&&L.stateNode.containerInfo===F.containerInfo&&L.stateNode.implementation===F.implementation){a(j,L.sibling),L=m(L,F.children||[]),L.return=j,j=L;break e}else{a(j,L);break}else i(j,L);L=L.sibling}L=Mc(F,j.mode,Z),L.return=j,j=L}return w(j);case se:return me=F._init,Ge(j,L,me(F._payload),Z)}if(Sn(F))return ae(j,L,F,Z);if(re(F))return ue(j,L,F,Z);da(j,F)}return typeof F=="string"&&F!==""||typeof F=="number"?(F=""+F,L!==null&&L.tag===6?(a(j,L.sibling),L=m(L,F),L.return=j,j=L):(a(j,L),L=Cc(F,j.mode,Z),L.return=j,j=L),w(j)):a(j,L)}return Ge}var bo=Mm(!0),Dm=Mm(!1),fa=Jn(null),pa=null,wo=null,Fu=null;function Ou(){Fu=wo=pa=null}function Ku(r){var i=fa.current;ze(fa),r._currentValue=i}function Vu(r,i,a){for(;r!==null;){var c=r.alternate;if((r.childLanes&i)!==i?(r.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),r===a)break;r=r.return}}function _o(r,i){pa=r,Fu=wo=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&i)!==0&&(St=!0),r.firstContext=null)}function Vt(r){var i=r._currentValue;if(Fu!==r)if(r={context:r,memoizedValue:i,next:null},wo===null){if(pa===null)throw Error(n(308));wo=r,pa.dependencies={lanes:0,firstContext:r}}else wo=wo.next=r;return i}var Nr=null;function Bu(r){Nr===null?Nr=[r]:Nr.push(r)}function Nm(r,i,a,c){var m=i.interleaved;return m===null?(a.next=a,Bu(i)):(a.next=m.next,m.next=a),i.interleaved=a,Tn(r,c)}function Tn(r,i){r.lanes|=i;var a=r.alternate;for(a!==null&&(a.lanes|=i),a=r,r=r.return;r!==null;)r.childLanes|=i,a=r.alternate,a!==null&&(a.childLanes|=i),a=r,r=r.return;return a.tag===3?a.stateNode:null}var nr=!1;function Uu(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Rm(r,i){r=r.updateQueue,i.updateQueue===r&&(i.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function Cn(r,i){return{eventTime:r,lane:i,tag:0,payload:null,callback:null,next:null}}function rr(r,i,a){var c=r.updateQueue;if(c===null)return null;if(c=c.shared,(Se&2)!==0){var m=c.pending;return m===null?i.next=i:(i.next=m.next,m.next=i),c.pending=i,Tn(r,a)}return m=c.interleaved,m===null?(i.next=i,Bu(c)):(i.next=m.next,m.next=i),c.interleaved=i,Tn(r,a)}function ma(r,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=r.pendingLanes,a|=c,i.lanes=a,ou(r,a)}}function Lm(r,i){var a=r.updateQueue,c=r.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var m=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var w={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?m=g=w:g=g.next=w,a=a.next}while(a!==null);g===null?m=g=i:g=g.next=i}else m=g=i;a={baseState:c.baseState,firstBaseUpdate:m,lastBaseUpdate:g,shared:c.shared,effects:c.effects},r.updateQueue=a;return}r=a.lastBaseUpdate,r===null?a.firstBaseUpdate=i:r.next=i,a.lastBaseUpdate=i}function ha(r,i,a,c){var m=r.updateQueue;nr=!1;var g=m.firstBaseUpdate,w=m.lastBaseUpdate,C=m.shared.pending;if(C!==null){m.shared.pending=null;var R=C,V=R.next;R.next=null,w===null?g=V:w.next=V,w=R;var X=r.alternate;X!==null&&(X=X.updateQueue,C=X.lastBaseUpdate,C!==w&&(C===null?X.firstBaseUpdate=V:C.next=V,X.lastBaseUpdate=R))}if(g!==null){var q=m.baseState;w=0,X=V=R=null,C=g;do{var G=C.lane,oe=C.eventTime;if((c&G)===G){X!==null&&(X=X.next={eventTime:oe,lane:0,tag:C.tag,payload:C.payload,callback:C.callback,next:null});e:{var ae=r,ue=C;switch(G=i,oe=a,ue.tag){case 1:if(ae=ue.payload,typeof ae=="function"){q=ae.call(oe,q,G);break e}q=ae;break e;case 3:ae.flags=ae.flags&-65537|128;case 0:if(ae=ue.payload,G=typeof ae=="function"?ae.call(oe,q,G):ae,G==null)break e;q=ee({},q,G);break e;case 2:nr=!0}}C.callback!==null&&C.lane!==0&&(r.flags|=64,G=m.effects,G===null?m.effects=[C]:G.push(C))}else oe={eventTime:oe,lane:G,tag:C.tag,payload:C.payload,callback:C.callback,next:null},X===null?(V=X=oe,R=q):X=X.next=oe,w|=G;if(C=C.next,C===null){if(C=m.shared.pending,C===null)break;G=C,C=G.next,G.next=null,m.lastBaseUpdate=G,m.shared.pending=null}}while(!0);if(X===null&&(R=q),m.baseState=R,m.firstBaseUpdate=V,m.lastBaseUpdate=X,i=m.shared.interleaved,i!==null){m=i;do w|=m.lane,m=m.next;while(m!==i)}else g===null&&(m.shared.lanes=0);Ar|=w,r.lanes=w,r.memoizedState=q}}function Am(r,i,a){if(r=i.effects,i.effects=null,r!==null)for(i=0;i<r.length;i++){var c=r[i],m=c.callback;if(m!==null){if(c.callback=null,c=a,typeof m!="function")throw Error(n(191,m));m.call(c)}}}var ki={},cn=Jn(ki),$i=Jn(ki),Ei=Jn(ki);function Rr(r){if(r===ki)throw Error(n(174));return r}function Hu(r,i){switch(De(Ei,i),De($i,r),De(cn,ki),r=i.nodeType,r){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ws(null,"");break;default:r=r===8?i.parentNode:i,i=r.namespaceURI||null,r=r.tagName,i=Ws(i,r)}ze(cn),De(cn,i)}function So(){ze(cn),ze($i),ze(Ei)}function zm(r){Rr(Ei.current);var i=Rr(cn.current),a=Ws(i,r.type);i!==a&&(De($i,r),De(cn,a))}function Wu(r){$i.current===r&&(ze(cn),ze($i))}var je=Jn(0);function va(r){for(var i=r;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===r)break;for(;i.sibling===null;){if(i.return===null||i.return===r)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Yu=[];function Qu(){for(var r=0;r<Yu.length;r++)Yu[r]._workInProgressVersionPrimary=null;Yu.length=0}var ga=O.ReactCurrentDispatcher,Gu=O.ReactCurrentBatchConfig,Lr=0,Fe=null,Je=null,tt=null,ya=!1,Pi=!1,Ti=0,_S=0;function dt(){throw Error(n(321))}function Xu(r,i){if(i===null)return!1;for(var a=0;a<i.length&&a<r.length;a++)if(!Jt(r[a],i[a]))return!1;return!0}function qu(r,i,a,c,m,g){if(Lr=g,Fe=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,ga.current=r===null||r.memoizedState===null?ES:PS,r=a(c,m),Pi){g=0;do{if(Pi=!1,Ti=0,25<=g)throw Error(n(301));g+=1,tt=Je=null,i.updateQueue=null,ga.current=TS,r=a(c,m)}while(Pi)}if(ga.current=wa,i=Je!==null&&Je.next!==null,Lr=0,tt=Je=Fe=null,ya=!1,i)throw Error(n(300));return r}function Zu(){var r=Ti!==0;return Ti=0,r}function dn(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tt===null?Fe.memoizedState=tt=r:tt=tt.next=r,tt}function Bt(){if(Je===null){var r=Fe.alternate;r=r!==null?r.memoizedState:null}else r=Je.next;var i=tt===null?Fe.memoizedState:tt.next;if(i!==null)tt=i,Je=r;else{if(r===null)throw Error(n(310));Je=r,r={memoizedState:Je.memoizedState,baseState:Je.baseState,baseQueue:Je.baseQueue,queue:Je.queue,next:null},tt===null?Fe.memoizedState=tt=r:tt=tt.next=r}return tt}function Ci(r,i){return typeof i=="function"?i(r):i}function Ju(r){var i=Bt(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=r;var c=Je,m=c.baseQueue,g=a.pending;if(g!==null){if(m!==null){var w=m.next;m.next=g.next,g.next=w}c.baseQueue=m=g,a.pending=null}if(m!==null){g=m.next,c=c.baseState;var C=w=null,R=null,V=g;do{var X=V.lane;if((Lr&X)===X)R!==null&&(R=R.next={lane:0,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null}),c=V.hasEagerState?V.eagerState:r(c,V.action);else{var q={lane:X,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null};R===null?(C=R=q,w=c):R=R.next=q,Fe.lanes|=X,Ar|=X}V=V.next}while(V!==null&&V!==g);R===null?w=c:R.next=C,Jt(c,i.memoizedState)||(St=!0),i.memoizedState=c,i.baseState=w,i.baseQueue=R,a.lastRenderedState=c}if(r=a.interleaved,r!==null){m=r;do g=m.lane,Fe.lanes|=g,Ar|=g,m=m.next;while(m!==r)}else m===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function ec(r){var i=Bt(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=r;var c=a.dispatch,m=a.pending,g=i.memoizedState;if(m!==null){a.pending=null;var w=m=m.next;do g=r(g,w.action),w=w.next;while(w!==m);Jt(g,i.memoizedState)||(St=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),a.lastRenderedState=g}return[g,c]}function Im(){}function jm(r,i){var a=Fe,c=Bt(),m=i(),g=!Jt(c.memoizedState,m);if(g&&(c.memoizedState=m,St=!0),c=c.queue,tc(Km.bind(null,a,c,r),[r]),c.getSnapshot!==i||g||tt!==null&&tt.memoizedState.tag&1){if(a.flags|=2048,Mi(9,Om.bind(null,a,c,m,i),void 0,null),nt===null)throw Error(n(349));(Lr&30)!==0||Fm(a,i,m)}return m}function Fm(r,i,a){r.flags|=16384,r={getSnapshot:i,value:a},i=Fe.updateQueue,i===null?(i={lastEffect:null,stores:null},Fe.updateQueue=i,i.stores=[r]):(a=i.stores,a===null?i.stores=[r]:a.push(r))}function Om(r,i,a,c){i.value=a,i.getSnapshot=c,Vm(i)&&Bm(r)}function Km(r,i,a){return a(function(){Vm(i)&&Bm(r)})}function Vm(r){var i=r.getSnapshot;r=r.value;try{var a=i();return!Jt(r,a)}catch{return!0}}function Bm(r){var i=Tn(r,1);i!==null&&on(i,r,1,-1)}function Um(r){var i=dn();return typeof r=="function"&&(r=r()),i.memoizedState=i.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ci,lastRenderedState:r},i.queue=r,r=r.dispatch=$S.bind(null,Fe,r),[i.memoizedState,r]}function Mi(r,i,a,c){return r={tag:r,create:i,destroy:a,deps:c,next:null},i=Fe.updateQueue,i===null?(i={lastEffect:null,stores:null},Fe.updateQueue=i,i.lastEffect=r.next=r):(a=i.lastEffect,a===null?i.lastEffect=r.next=r:(c=a.next,a.next=r,r.next=c,i.lastEffect=r)),r}function Hm(){return Bt().memoizedState}function xa(r,i,a,c){var m=dn();Fe.flags|=r,m.memoizedState=Mi(1|i,a,void 0,c===void 0?null:c)}function ba(r,i,a,c){var m=Bt();c=c===void 0?null:c;var g=void 0;if(Je!==null){var w=Je.memoizedState;if(g=w.destroy,c!==null&&Xu(c,w.deps)){m.memoizedState=Mi(i,a,g,c);return}}Fe.flags|=r,m.memoizedState=Mi(1|i,a,g,c)}function Wm(r,i){return xa(8390656,8,r,i)}function tc(r,i){return ba(2048,8,r,i)}function Ym(r,i){return ba(4,2,r,i)}function Qm(r,i){return ba(4,4,r,i)}function Gm(r,i){if(typeof i=="function")return r=r(),i(r),function(){i(null)};if(i!=null)return r=r(),i.current=r,function(){i.current=null}}function Xm(r,i,a){return a=a!=null?a.concat([r]):null,ba(4,4,Gm.bind(null,i,r),a)}function nc(){}function qm(r,i){var a=Bt();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Xu(i,c[1])?c[0]:(a.memoizedState=[r,i],r)}function Zm(r,i){var a=Bt();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Xu(i,c[1])?c[0]:(r=r(),a.memoizedState=[r,i],r)}function Jm(r,i,a){return(Lr&21)===0?(r.baseState&&(r.baseState=!1,St=!0),r.memoizedState=a):(Jt(a,i)||(a=Cp(),Fe.lanes|=a,Ar|=a,r.baseState=!0),i)}function SS(r,i){var a=Te;Te=a!==0&&4>a?a:4,r(!0);var c=Gu.transition;Gu.transition={};try{r(!1),i()}finally{Te=a,Gu.transition=c}}function eh(){return Bt().memoizedState}function kS(r,i,a){var c=ar(r);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},th(r))nh(i,a);else if(a=Nm(r,i,a,c),a!==null){var m=gt();on(a,r,c,m),rh(a,i,c)}}function $S(r,i,a){var c=ar(r),m={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(th(r))nh(i,m);else{var g=r.alternate;if(r.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var w=i.lastRenderedState,C=g(w,a);if(m.hasEagerState=!0,m.eagerState=C,Jt(C,w)){var R=i.interleaved;R===null?(m.next=m,Bu(i)):(m.next=R.next,R.next=m),i.interleaved=m;return}}catch{}finally{}a=Nm(r,i,m,c),a!==null&&(m=gt(),on(a,r,c,m),rh(a,i,c))}}function th(r){var i=r.alternate;return r===Fe||i!==null&&i===Fe}function nh(r,i){Pi=ya=!0;var a=r.pending;a===null?i.next=i:(i.next=a.next,a.next=i),r.pending=i}function rh(r,i,a){if((a&4194240)!==0){var c=i.lanes;c&=r.pendingLanes,a|=c,i.lanes=a,ou(r,a)}}var wa={readContext:Vt,useCallback:dt,useContext:dt,useEffect:dt,useImperativeHandle:dt,useInsertionEffect:dt,useLayoutEffect:dt,useMemo:dt,useReducer:dt,useRef:dt,useState:dt,useDebugValue:dt,useDeferredValue:dt,useTransition:dt,useMutableSource:dt,useSyncExternalStore:dt,useId:dt,unstable_isNewReconciler:!1},ES={readContext:Vt,useCallback:function(r,i){return dn().memoizedState=[r,i===void 0?null:i],r},useContext:Vt,useEffect:Wm,useImperativeHandle:function(r,i,a){return a=a!=null?a.concat([r]):null,xa(4194308,4,Gm.bind(null,i,r),a)},useLayoutEffect:function(r,i){return xa(4194308,4,r,i)},useInsertionEffect:function(r,i){return xa(4,2,r,i)},useMemo:function(r,i){var a=dn();return i=i===void 0?null:i,r=r(),a.memoizedState=[r,i],r},useReducer:function(r,i,a){var c=dn();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:i},c.queue=r,r=r.dispatch=kS.bind(null,Fe,r),[c.memoizedState,r]},useRef:function(r){var i=dn();return r={current:r},i.memoizedState=r},useState:Um,useDebugValue:nc,useDeferredValue:function(r){return dn().memoizedState=r},useTransition:function(){var r=Um(!1),i=r[0];return r=SS.bind(null,r[1]),dn().memoizedState=r,[i,r]},useMutableSource:function(){},useSyncExternalStore:function(r,i,a){var c=Fe,m=dn();if(Ie){if(a===void 0)throw Error(n(407));a=a()}else{if(a=i(),nt===null)throw Error(n(349));(Lr&30)!==0||Fm(c,i,a)}m.memoizedState=a;var g={value:a,getSnapshot:i};return m.queue=g,Wm(Km.bind(null,c,g,r),[r]),c.flags|=2048,Mi(9,Om.bind(null,c,g,a,i),void 0,null),a},useId:function(){var r=dn(),i=nt.identifierPrefix;if(Ie){var a=Pn,c=En;a=(c&~(1<<32-Zt(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Ti++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=_S++,i=":"+i+"r"+a.toString(32)+":";return r.memoizedState=i},unstable_isNewReconciler:!1},PS={readContext:Vt,useCallback:qm,useContext:Vt,useEffect:tc,useImperativeHandle:Xm,useInsertionEffect:Ym,useLayoutEffect:Qm,useMemo:Zm,useReducer:Ju,useRef:Hm,useState:function(){return Ju(Ci)},useDebugValue:nc,useDeferredValue:function(r){var i=Bt();return Jm(i,Je.memoizedState,r)},useTransition:function(){var r=Ju(Ci)[0],i=Bt().memoizedState;return[r,i]},useMutableSource:Im,useSyncExternalStore:jm,useId:eh,unstable_isNewReconciler:!1},TS={readContext:Vt,useCallback:qm,useContext:Vt,useEffect:tc,useImperativeHandle:Xm,useInsertionEffect:Ym,useLayoutEffect:Qm,useMemo:Zm,useReducer:ec,useRef:Hm,useState:function(){return ec(Ci)},useDebugValue:nc,useDeferredValue:function(r){var i=Bt();return Je===null?i.memoizedState=r:Jm(i,Je.memoizedState,r)},useTransition:function(){var r=ec(Ci)[0],i=Bt().memoizedState;return[r,i]},useMutableSource:Im,useSyncExternalStore:jm,useId:eh,unstable_isNewReconciler:!1};function tn(r,i){if(r&&r.defaultProps){i=ee({},i),r=r.defaultProps;for(var a in r)i[a]===void 0&&(i[a]=r[a]);return i}return i}function rc(r,i,a,c){i=r.memoizedState,a=a(c,i),a=a==null?i:ee({},i,a),r.memoizedState=a,r.lanes===0&&(r.updateQueue.baseState=a)}var _a={isMounted:function(r){return(r=r._reactInternals)?Pr(r)===r:!1},enqueueSetState:function(r,i,a){r=r._reactInternals;var c=gt(),m=ar(r),g=Cn(c,m);g.payload=i,a!=null&&(g.callback=a),i=rr(r,g,m),i!==null&&(on(i,r,m,c),ma(i,r,m))},enqueueReplaceState:function(r,i,a){r=r._reactInternals;var c=gt(),m=ar(r),g=Cn(c,m);g.tag=1,g.payload=i,a!=null&&(g.callback=a),i=rr(r,g,m),i!==null&&(on(i,r,m,c),ma(i,r,m))},enqueueForceUpdate:function(r,i){r=r._reactInternals;var a=gt(),c=ar(r),m=Cn(a,c);m.tag=2,i!=null&&(m.callback=i),i=rr(r,m,c),i!==null&&(on(i,r,c,a),ma(i,r,c))}};function oh(r,i,a,c,m,g,w){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(c,g,w):i.prototype&&i.prototype.isPureReactComponent?!vi(a,c)||!vi(m,g):!0}function ih(r,i,a){var c=!1,m=er,g=i.contextType;return typeof g=="object"&&g!==null?g=Vt(g):(m=_t(i)?Cr:ct.current,c=i.contextTypes,g=(c=c!=null)?vo(r,m):er),i=new i(a,g),r.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=_a,r.stateNode=i,i._reactInternals=r,c&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=m,r.__reactInternalMemoizedMaskedChildContext=g),i}function lh(r,i,a,c){r=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==r&&_a.enqueueReplaceState(i,i.state,null)}function oc(r,i,a,c){var m=r.stateNode;m.props=a,m.state=r.memoizedState,m.refs={},Uu(r);var g=i.contextType;typeof g=="object"&&g!==null?m.context=Vt(g):(g=_t(i)?Cr:ct.current,m.context=vo(r,g)),m.state=r.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(rc(r,i,g,a),m.state=r.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(i=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),i!==m.state&&_a.enqueueReplaceState(m,m.state,null),ha(r,a,m,c),m.state=r.memoizedState),typeof m.componentDidMount=="function"&&(r.flags|=4194308)}function ko(r,i){try{var a="",c=i;do a+=pe(c),c=c.return;while(c);var m=a}catch(g){m=`
Error generating stack: `+g.message+`
`+g.stack}return{value:r,source:i,stack:m,digest:null}}function ic(r,i,a){return{value:r,source:null,stack:a??null,digest:i??null}}function lc(r,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var CS=typeof WeakMap=="function"?WeakMap:Map;function ah(r,i,a){a=Cn(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){Ca||(Ca=!0,wc=c),lc(r,i)},a}function sh(r,i,a){a=Cn(-1,a),a.tag=3;var c=r.type.getDerivedStateFromError;if(typeof c=="function"){var m=i.value;a.payload=function(){return c(m)},a.callback=function(){lc(r,i)}}var g=r.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){lc(r,i),typeof c!="function"&&(ir===null?ir=new Set([this]):ir.add(this));var w=i.stack;this.componentDidCatch(i.value,{componentStack:w!==null?w:""})}),a}function uh(r,i,a){var c=r.pingCache;if(c===null){c=r.pingCache=new CS;var m=new Set;c.set(i,m)}else m=c.get(i),m===void 0&&(m=new Set,c.set(i,m));m.has(a)||(m.add(a),r=BS.bind(null,r,i,a),i.then(r,r))}function ch(r){do{var i;if((i=r.tag===13)&&(i=r.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return r;r=r.return}while(r!==null);return null}function dh(r,i,a,c,m){return(r.mode&1)===0?(r===i?r.flags|=65536:(r.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Cn(-1,1),i.tag=2,rr(a,i,1))),a.lanes|=1),r):(r.flags|=65536,r.lanes=m,r)}var MS=O.ReactCurrentOwner,St=!1;function vt(r,i,a,c){i.child=r===null?Dm(i,null,a,c):bo(i,r.child,a,c)}function fh(r,i,a,c,m){a=a.render;var g=i.ref;return _o(i,m),c=qu(r,i,a,c,g,m),a=Zu(),r!==null&&!St?(i.updateQueue=r.updateQueue,i.flags&=-2053,r.lanes&=~m,Mn(r,i,m)):(Ie&&a&&Lu(i),i.flags|=1,vt(r,i,c,m),i.child)}function ph(r,i,a,c,m){if(r===null){var g=a.type;return typeof g=="function"&&!Tc(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=g,mh(r,i,g,c,m)):(r=Aa(a.type,null,c,i,i.mode,m),r.ref=i.ref,r.return=i,i.child=r)}if(g=r.child,(r.lanes&m)===0){var w=g.memoizedProps;if(a=a.compare,a=a!==null?a:vi,a(w,c)&&r.ref===i.ref)return Mn(r,i,m)}return i.flags|=1,r=ur(g,c),r.ref=i.ref,r.return=i,i.child=r}function mh(r,i,a,c,m){if(r!==null){var g=r.memoizedProps;if(vi(g,c)&&r.ref===i.ref)if(St=!1,i.pendingProps=c=g,(r.lanes&m)!==0)(r.flags&131072)!==0&&(St=!0);else return i.lanes=r.lanes,Mn(r,i,m)}return ac(r,i,a,c,m)}function hh(r,i,a){var c=i.pendingProps,m=c.children,g=r!==null?r.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},De(Eo,Lt),Lt|=a;else{if((a&1073741824)===0)return r=g!==null?g.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:r,cachePool:null,transitions:null},i.updateQueue=null,De(Eo,Lt),Lt|=r,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=g!==null?g.baseLanes:a,De(Eo,Lt),Lt|=c}else g!==null?(c=g.baseLanes|a,i.memoizedState=null):c=a,De(Eo,Lt),Lt|=c;return vt(r,i,m,a),i.child}function vh(r,i){var a=i.ref;(r===null&&a!==null||r!==null&&r.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function ac(r,i,a,c,m){var g=_t(a)?Cr:ct.current;return g=vo(i,g),_o(i,m),a=qu(r,i,a,c,g,m),c=Zu(),r!==null&&!St?(i.updateQueue=r.updateQueue,i.flags&=-2053,r.lanes&=~m,Mn(r,i,m)):(Ie&&c&&Lu(i),i.flags|=1,vt(r,i,a,m),i.child)}function gh(r,i,a,c,m){if(_t(a)){var g=!0;la(i)}else g=!1;if(_o(i,m),i.stateNode===null)ka(r,i),ih(i,a,c),oc(i,a,c,m),c=!0;else if(r===null){var w=i.stateNode,C=i.memoizedProps;w.props=C;var R=w.context,V=a.contextType;typeof V=="object"&&V!==null?V=Vt(V):(V=_t(a)?Cr:ct.current,V=vo(i,V));var X=a.getDerivedStateFromProps,q=typeof X=="function"||typeof w.getSnapshotBeforeUpdate=="function";q||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(C!==c||R!==V)&&lh(i,w,c,V),nr=!1;var G=i.memoizedState;w.state=G,ha(i,c,w,m),R=i.memoizedState,C!==c||G!==R||wt.current||nr?(typeof X=="function"&&(rc(i,a,X,c),R=i.memoizedState),(C=nr||oh(i,a,C,c,G,R,V))?(q||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(i.flags|=4194308)):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=R),w.props=c,w.state=R,w.context=V,c=C):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{w=i.stateNode,Rm(r,i),C=i.memoizedProps,V=i.type===i.elementType?C:tn(i.type,C),w.props=V,q=i.pendingProps,G=w.context,R=a.contextType,typeof R=="object"&&R!==null?R=Vt(R):(R=_t(a)?Cr:ct.current,R=vo(i,R));var oe=a.getDerivedStateFromProps;(X=typeof oe=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(C!==q||G!==R)&&lh(i,w,c,R),nr=!1,G=i.memoizedState,w.state=G,ha(i,c,w,m);var ae=i.memoizedState;C!==q||G!==ae||wt.current||nr?(typeof oe=="function"&&(rc(i,a,oe,c),ae=i.memoizedState),(V=nr||oh(i,a,V,c,G,ae,R)||!1)?(X||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(c,ae,R),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(c,ae,R)),typeof w.componentDidUpdate=="function"&&(i.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof w.componentDidUpdate!="function"||C===r.memoizedProps&&G===r.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||C===r.memoizedProps&&G===r.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=ae),w.props=c,w.state=ae,w.context=R,c=V):(typeof w.componentDidUpdate!="function"||C===r.memoizedProps&&G===r.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||C===r.memoizedProps&&G===r.memoizedState||(i.flags|=1024),c=!1)}return sc(r,i,a,c,g,m)}function sc(r,i,a,c,m,g){vh(r,i);var w=(i.flags&128)!==0;if(!c&&!w)return m&&_m(i,a,!1),Mn(r,i,g);c=i.stateNode,MS.current=i;var C=w&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,r!==null&&w?(i.child=bo(i,r.child,null,g),i.child=bo(i,null,C,g)):vt(r,i,C,g),i.memoizedState=c.state,m&&_m(i,a,!0),i.child}function yh(r){var i=r.stateNode;i.pendingContext?bm(r,i.pendingContext,i.pendingContext!==i.context):i.context&&bm(r,i.context,!1),Hu(r,i.containerInfo)}function xh(r,i,a,c,m){return xo(),ju(m),i.flags|=256,vt(r,i,a,c),i.child}var uc={dehydrated:null,treeContext:null,retryLane:0};function cc(r){return{baseLanes:r,cachePool:null,transitions:null}}function bh(r,i,a){var c=i.pendingProps,m=je.current,g=!1,w=(i.flags&128)!==0,C;if((C=w)||(C=r!==null&&r.memoizedState===null?!1:(m&2)!==0),C?(g=!0,i.flags&=-129):(r===null||r.memoizedState!==null)&&(m|=1),De(je,m&1),r===null)return Iu(i),r=i.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((i.mode&1)===0?i.lanes=1:r.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(w=c.children,r=c.fallback,g?(c=i.mode,g=i.child,w={mode:"hidden",children:w},(c&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=w):g=za(w,c,0,null),r=Fr(r,c,a,null),g.return=i,r.return=i,g.sibling=r,i.child=g,i.child.memoizedState=cc(a),i.memoizedState=uc,r):dc(i,w));if(m=r.memoizedState,m!==null&&(C=m.dehydrated,C!==null))return DS(r,i,w,c,C,m,a);if(g){g=c.fallback,w=i.mode,m=r.child,C=m.sibling;var R={mode:"hidden",children:c.children};return(w&1)===0&&i.child!==m?(c=i.child,c.childLanes=0,c.pendingProps=R,i.deletions=null):(c=ur(m,R),c.subtreeFlags=m.subtreeFlags&14680064),C!==null?g=ur(C,g):(g=Fr(g,w,a,null),g.flags|=2),g.return=i,c.return=i,c.sibling=g,i.child=c,c=g,g=i.child,w=r.child.memoizedState,w=w===null?cc(a):{baseLanes:w.baseLanes|a,cachePool:null,transitions:w.transitions},g.memoizedState=w,g.childLanes=r.childLanes&~a,i.memoizedState=uc,c}return g=r.child,r=g.sibling,c=ur(g,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,r!==null&&(a=i.deletions,a===null?(i.deletions=[r],i.flags|=16):a.push(r)),i.child=c,i.memoizedState=null,c}function dc(r,i){return i=za({mode:"visible",children:i},r.mode,0,null),i.return=r,r.child=i}function Sa(r,i,a,c){return c!==null&&ju(c),bo(i,r.child,null,a),r=dc(i,i.pendingProps.children),r.flags|=2,i.memoizedState=null,r}function DS(r,i,a,c,m,g,w){if(a)return i.flags&256?(i.flags&=-257,c=ic(Error(n(422))),Sa(r,i,w,c)):i.memoizedState!==null?(i.child=r.child,i.flags|=128,null):(g=c.fallback,m=i.mode,c=za({mode:"visible",children:c.children},m,0,null),g=Fr(g,m,w,null),g.flags|=2,c.return=i,g.return=i,c.sibling=g,i.child=c,(i.mode&1)!==0&&bo(i,r.child,null,w),i.child.memoizedState=cc(w),i.memoizedState=uc,g);if((i.mode&1)===0)return Sa(r,i,w,null);if(m.data==="$!"){if(c=m.nextSibling&&m.nextSibling.dataset,c)var C=c.dgst;return c=C,g=Error(n(419)),c=ic(g,c,void 0),Sa(r,i,w,c)}if(C=(w&r.childLanes)!==0,St||C){if(c=nt,c!==null){switch(w&-w){case 4:m=2;break;case 16:m=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:m=32;break;case 536870912:m=268435456;break;default:m=0}m=(m&(c.suspendedLanes|w))!==0?0:m,m!==0&&m!==g.retryLane&&(g.retryLane=m,Tn(r,m),on(c,r,m,-1))}return Pc(),c=ic(Error(n(421))),Sa(r,i,w,c)}return m.data==="$?"?(i.flags|=128,i.child=r.child,i=US.bind(null,r),m._reactRetry=i,null):(r=g.treeContext,Rt=Zn(m.nextSibling),Nt=i,Ie=!0,en=null,r!==null&&(Ot[Kt++]=En,Ot[Kt++]=Pn,Ot[Kt++]=Mr,En=r.id,Pn=r.overflow,Mr=i),i=dc(i,c.children),i.flags|=4096,i)}function wh(r,i,a){r.lanes|=i;var c=r.alternate;c!==null&&(c.lanes|=i),Vu(r.return,i,a)}function fc(r,i,a,c,m){var g=r.memoizedState;g===null?r.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:m}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=a,g.tailMode=m)}function _h(r,i,a){var c=i.pendingProps,m=c.revealOrder,g=c.tail;if(vt(r,i,c.children,a),c=je.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=i.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&wh(r,a,i);else if(r.tag===19)wh(r,a,i);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break e;for(;r.sibling===null;){if(r.return===null||r.return===i)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}c&=1}if(De(je,c),(i.mode&1)===0)i.memoizedState=null;else switch(m){case"forwards":for(a=i.child,m=null;a!==null;)r=a.alternate,r!==null&&va(r)===null&&(m=a),a=a.sibling;a=m,a===null?(m=i.child,i.child=null):(m=a.sibling,a.sibling=null),fc(i,!1,m,a,g);break;case"backwards":for(a=null,m=i.child,i.child=null;m!==null;){if(r=m.alternate,r!==null&&va(r)===null){i.child=m;break}r=m.sibling,m.sibling=a,a=m,m=r}fc(i,!0,a,null,g);break;case"together":fc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ka(r,i){(i.mode&1)===0&&r!==null&&(r.alternate=null,i.alternate=null,i.flags|=2)}function Mn(r,i,a){if(r!==null&&(i.dependencies=r.dependencies),Ar|=i.lanes,(a&i.childLanes)===0)return null;if(r!==null&&i.child!==r.child)throw Error(n(153));if(i.child!==null){for(r=i.child,a=ur(r,r.pendingProps),i.child=a,a.return=i;r.sibling!==null;)r=r.sibling,a=a.sibling=ur(r,r.pendingProps),a.return=i;a.sibling=null}return i.child}function NS(r,i,a){switch(i.tag){case 3:yh(i),xo();break;case 5:zm(i);break;case 1:_t(i.type)&&la(i);break;case 4:Hu(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,m=i.memoizedProps.value;De(fa,c._currentValue),c._currentValue=m;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(De(je,je.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?bh(r,i,a):(De(je,je.current&1),r=Mn(r,i,a),r!==null?r.sibling:null);De(je,je.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(r.flags&128)!==0){if(c)return _h(r,i,a);i.flags|=128}if(m=i.memoizedState,m!==null&&(m.rendering=null,m.tail=null,m.lastEffect=null),De(je,je.current),c)break;return null;case 22:case 23:return i.lanes=0,hh(r,i,a)}return Mn(r,i,a)}var Sh,pc,kh,$h;Sh=function(r,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)r.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},pc=function(){},kh=function(r,i,a,c){var m=r.memoizedProps;if(m!==c){r=i.stateNode,Rr(cn.current);var g=null;switch(a){case"input":m=eo(r,m),c=eo(r,c),g=[];break;case"select":m=ee({},m,{value:void 0}),c=ee({},c,{value:void 0}),g=[];break;case"textarea":m=Hs(r,m),c=Hs(r,c),g=[];break;default:typeof m.onClick!="function"&&typeof c.onClick=="function"&&(r.onclick=ra)}Ys(a,c);var w;a=null;for(V in m)if(!c.hasOwnProperty(V)&&m.hasOwnProperty(V)&&m[V]!=null)if(V==="style"){var C=m[V];for(w in C)C.hasOwnProperty(w)&&(a||(a={}),a[w]="")}else V!=="dangerouslySetInnerHTML"&&V!=="children"&&V!=="suppressContentEditableWarning"&&V!=="suppressHydrationWarning"&&V!=="autoFocus"&&(l.hasOwnProperty(V)?g||(g=[]):(g=g||[]).push(V,null));for(V in c){var R=c[V];if(C=m!=null?m[V]:void 0,c.hasOwnProperty(V)&&R!==C&&(R!=null||C!=null))if(V==="style")if(C){for(w in C)!C.hasOwnProperty(w)||R&&R.hasOwnProperty(w)||(a||(a={}),a[w]="");for(w in R)R.hasOwnProperty(w)&&C[w]!==R[w]&&(a||(a={}),a[w]=R[w])}else a||(g||(g=[]),g.push(V,a)),a=R;else V==="dangerouslySetInnerHTML"?(R=R?R.__html:void 0,C=C?C.__html:void 0,R!=null&&C!==R&&(g=g||[]).push(V,R)):V==="children"?typeof R!="string"&&typeof R!="number"||(g=g||[]).push(V,""+R):V!=="suppressContentEditableWarning"&&V!=="suppressHydrationWarning"&&(l.hasOwnProperty(V)?(R!=null&&V==="onScroll"&&Ae("scroll",r),g||C===R||(g=[])):(g=g||[]).push(V,R))}a&&(g=g||[]).push("style",a);var V=g;(i.updateQueue=V)&&(i.flags|=4)}},$h=function(r,i,a,c){a!==c&&(i.flags|=4)};function Di(r,i){if(!Ie)switch(r.tailMode){case"hidden":i=r.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?r.tail=null:a.sibling=null;break;case"collapsed":a=r.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||r.tail===null?r.tail=null:r.tail.sibling=null:c.sibling=null}}function ft(r){var i=r.alternate!==null&&r.alternate.child===r.child,a=0,c=0;if(i)for(var m=r.child;m!==null;)a|=m.lanes|m.childLanes,c|=m.subtreeFlags&14680064,c|=m.flags&14680064,m.return=r,m=m.sibling;else for(m=r.child;m!==null;)a|=m.lanes|m.childLanes,c|=m.subtreeFlags,c|=m.flags,m.return=r,m=m.sibling;return r.subtreeFlags|=c,r.childLanes=a,i}function RS(r,i,a){var c=i.pendingProps;switch(Au(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ft(i),null;case 1:return _t(i.type)&&ia(),ft(i),null;case 3:return c=i.stateNode,So(),ze(wt),ze(ct),Qu(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(r===null||r.child===null)&&(ca(i)?i.flags|=4:r===null||r.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,en!==null&&(kc(en),en=null))),pc(r,i),ft(i),null;case 5:Wu(i);var m=Rr(Ei.current);if(a=i.type,r!==null&&i.stateNode!=null)kh(r,i,a,c,m),r.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(n(166));return ft(i),null}if(r=Rr(cn.current),ca(i)){c=i.stateNode,a=i.type;var g=i.memoizedProps;switch(c[un]=i,c[wi]=g,r=(i.mode&1)!==0,a){case"dialog":Ae("cancel",c),Ae("close",c);break;case"iframe":case"object":case"embed":Ae("load",c);break;case"video":case"audio":for(m=0;m<yi.length;m++)Ae(yi[m],c);break;case"source":Ae("error",c);break;case"img":case"image":case"link":Ae("error",c),Ae("load",c);break;case"details":Ae("toggle",c);break;case"input":to(c,g),Ae("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!g.multiple},Ae("invalid",c);break;case"textarea":sp(c,g),Ae("invalid",c)}Ys(a,g),m=null;for(var w in g)if(g.hasOwnProperty(w)){var C=g[w];w==="children"?typeof C=="string"?c.textContent!==C&&(g.suppressHydrationWarning!==!0&&na(c.textContent,C,r),m=["children",C]):typeof C=="number"&&c.textContent!==""+C&&(g.suppressHydrationWarning!==!0&&na(c.textContent,C,r),m=["children",""+C]):l.hasOwnProperty(w)&&C!=null&&w==="onScroll"&&Ae("scroll",c)}switch(a){case"input":Un(c),ro(c,g,!0);break;case"textarea":Un(c),cp(c);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(c.onclick=ra)}c=m,i.updateQueue=c,c!==null&&(i.flags|=4)}else{w=m.nodeType===9?m:m.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=dp(a)),r==="http://www.w3.org/1999/xhtml"?a==="script"?(r=w.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof c.is=="string"?r=w.createElement(a,{is:c.is}):(r=w.createElement(a),a==="select"&&(w=r,c.multiple?w.multiple=!0:c.size&&(w.size=c.size))):r=w.createElementNS(r,a),r[un]=i,r[wi]=c,Sh(r,i,!1,!1),i.stateNode=r;e:{switch(w=Qs(a,c),a){case"dialog":Ae("cancel",r),Ae("close",r),m=c;break;case"iframe":case"object":case"embed":Ae("load",r),m=c;break;case"video":case"audio":for(m=0;m<yi.length;m++)Ae(yi[m],r);m=c;break;case"source":Ae("error",r),m=c;break;case"img":case"image":case"link":Ae("error",r),Ae("load",r),m=c;break;case"details":Ae("toggle",r),m=c;break;case"input":to(r,c),m=eo(r,c),Ae("invalid",r);break;case"option":m=c;break;case"select":r._wrapperState={wasMultiple:!!c.multiple},m=ee({},c,{value:void 0}),Ae("invalid",r);break;case"textarea":sp(r,c),m=Hs(r,c),Ae("invalid",r);break;default:m=c}Ys(a,m),C=m;for(g in C)if(C.hasOwnProperty(g)){var R=C[g];g==="style"?mp(r,R):g==="dangerouslySetInnerHTML"?(R=R?R.__html:void 0,R!=null&&fp(r,R)):g==="children"?typeof R=="string"?(a!=="textarea"||R!=="")&&Jo(r,R):typeof R=="number"&&Jo(r,""+R):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(l.hasOwnProperty(g)?R!=null&&g==="onScroll"&&Ae("scroll",r):R!=null&&N(r,g,R,w))}switch(a){case"input":Un(r),ro(r,c,!1);break;case"textarea":Un(r),cp(r);break;case"option":c.value!=null&&r.setAttribute("value",""+xe(c.value));break;case"select":r.multiple=!!c.multiple,g=c.value,g!=null?Hn(r,!!c.multiple,g,!1):c.defaultValue!=null&&Hn(r,!!c.multiple,c.defaultValue,!0);break;default:typeof m.onClick=="function"&&(r.onclick=ra)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return ft(i),null;case 6:if(r&&i.stateNode!=null)$h(r,i,r.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(n(166));if(a=Rr(Ei.current),Rr(cn.current),ca(i)){if(c=i.stateNode,a=i.memoizedProps,c[un]=i,(g=c.nodeValue!==a)&&(r=Nt,r!==null))switch(r.tag){case 3:na(c.nodeValue,a,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&na(c.nodeValue,a,(r.mode&1)!==0)}g&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[un]=i,i.stateNode=c}return ft(i),null;case 13:if(ze(je),c=i.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(Ie&&Rt!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Tm(),xo(),i.flags|=98560,g=!1;else if(g=ca(i),c!==null&&c.dehydrated!==null){if(r===null){if(!g)throw Error(n(318));if(g=i.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(n(317));g[un]=i}else xo(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;ft(i),g=!1}else en!==null&&(kc(en),en=null),g=!0;if(!g)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(r!==null&&r.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(r===null||(je.current&1)!==0?et===0&&(et=3):Pc())),i.updateQueue!==null&&(i.flags|=4),ft(i),null);case 4:return So(),pc(r,i),r===null&&xi(i.stateNode.containerInfo),ft(i),null;case 10:return Ku(i.type._context),ft(i),null;case 17:return _t(i.type)&&ia(),ft(i),null;case 19:if(ze(je),g=i.memoizedState,g===null)return ft(i),null;if(c=(i.flags&128)!==0,w=g.rendering,w===null)if(c)Di(g,!1);else{if(et!==0||r!==null&&(r.flags&128)!==0)for(r=i.child;r!==null;){if(w=va(r),w!==null){for(i.flags|=128,Di(g,!1),c=w.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)g=a,r=c,g.flags&=14680066,w=g.alternate,w===null?(g.childLanes=0,g.lanes=r,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=w.childLanes,g.lanes=w.lanes,g.child=w.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=w.memoizedProps,g.memoizedState=w.memoizedState,g.updateQueue=w.updateQueue,g.type=w.type,r=w.dependencies,g.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),a=a.sibling;return De(je,je.current&1|2),i.child}r=r.sibling}g.tail!==null&&Qe()>Po&&(i.flags|=128,c=!0,Di(g,!1),i.lanes=4194304)}else{if(!c)if(r=va(w),r!==null){if(i.flags|=128,c=!0,a=r.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Di(g,!0),g.tail===null&&g.tailMode==="hidden"&&!w.alternate&&!Ie)return ft(i),null}else 2*Qe()-g.renderingStartTime>Po&&a!==1073741824&&(i.flags|=128,c=!0,Di(g,!1),i.lanes=4194304);g.isBackwards?(w.sibling=i.child,i.child=w):(a=g.last,a!==null?a.sibling=w:i.child=w,g.last=w)}return g.tail!==null?(i=g.tail,g.rendering=i,g.tail=i.sibling,g.renderingStartTime=Qe(),i.sibling=null,a=je.current,De(je,c?a&1|2:a&1),i):(ft(i),null);case 22:case 23:return Ec(),c=i.memoizedState!==null,r!==null&&r.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(Lt&1073741824)!==0&&(ft(i),i.subtreeFlags&6&&(i.flags|=8192)):ft(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function LS(r,i){switch(Au(i),i.tag){case 1:return _t(i.type)&&ia(),r=i.flags,r&65536?(i.flags=r&-65537|128,i):null;case 3:return So(),ze(wt),ze(ct),Qu(),r=i.flags,(r&65536)!==0&&(r&128)===0?(i.flags=r&-65537|128,i):null;case 5:return Wu(i),null;case 13:if(ze(je),r=i.memoizedState,r!==null&&r.dehydrated!==null){if(i.alternate===null)throw Error(n(340));xo()}return r=i.flags,r&65536?(i.flags=r&-65537|128,i):null;case 19:return ze(je),null;case 4:return So(),null;case 10:return Ku(i.type._context),null;case 22:case 23:return Ec(),null;case 24:return null;default:return null}}var $a=!1,pt=!1,AS=typeof WeakSet=="function"?WeakSet:Set,le=null;function $o(r,i){var a=r.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){Be(r,i,c)}else a.current=null}function mc(r,i,a){try{a()}catch(c){Be(r,i,c)}}var Eh=!1;function zS(r,i){if(Eu=Hl,r=om(),yu(r)){if("selectionStart"in r)var a={start:r.selectionStart,end:r.selectionEnd};else e:{a=(a=r.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var m=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var w=0,C=-1,R=-1,V=0,X=0,q=r,G=null;t:for(;;){for(var oe;q!==a||m!==0&&q.nodeType!==3||(C=w+m),q!==g||c!==0&&q.nodeType!==3||(R=w+c),q.nodeType===3&&(w+=q.nodeValue.length),(oe=q.firstChild)!==null;)G=q,q=oe;for(;;){if(q===r)break t;if(G===a&&++V===m&&(C=w),G===g&&++X===c&&(R=w),(oe=q.nextSibling)!==null)break;q=G,G=q.parentNode}q=oe}a=C===-1||R===-1?null:{start:C,end:R}}else a=null}a=a||{start:0,end:0}}else a=null;for(Pu={focusedElem:r,selectionRange:a},Hl=!1,le=i;le!==null;)if(i=le,r=i.child,(i.subtreeFlags&1028)!==0&&r!==null)r.return=i,le=r;else for(;le!==null;){i=le;try{var ae=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ae!==null){var ue=ae.memoizedProps,Ge=ae.memoizedState,j=i.stateNode,L=j.getSnapshotBeforeUpdate(i.elementType===i.type?ue:tn(i.type,ue),Ge);j.__reactInternalSnapshotBeforeUpdate=L}break;case 3:var F=i.stateNode.containerInfo;F.nodeType===1?F.textContent="":F.nodeType===9&&F.documentElement&&F.removeChild(F.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Z){Be(i,i.return,Z)}if(r=i.sibling,r!==null){r.return=i.return,le=r;break}le=i.return}return ae=Eh,Eh=!1,ae}function Ni(r,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var m=c=c.next;do{if((m.tag&r)===r){var g=m.destroy;m.destroy=void 0,g!==void 0&&mc(i,a,g)}m=m.next}while(m!==c)}}function Ea(r,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&r)===r){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function hc(r){var i=r.ref;if(i!==null){var a=r.stateNode;switch(r.tag){case 5:r=a;break;default:r=a}typeof i=="function"?i(r):i.current=r}}function Ph(r){var i=r.alternate;i!==null&&(r.alternate=null,Ph(i)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(i=r.stateNode,i!==null&&(delete i[un],delete i[wi],delete i[Du],delete i[yS],delete i[xS])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function Th(r){return r.tag===5||r.tag===3||r.tag===4}function Ch(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||Th(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function vc(r,i,a){var c=r.tag;if(c===5||c===6)r=r.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(r,i):a.insertBefore(r,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(r,a)):(i=a,i.appendChild(r)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=ra));else if(c!==4&&(r=r.child,r!==null))for(vc(r,i,a),r=r.sibling;r!==null;)vc(r,i,a),r=r.sibling}function gc(r,i,a){var c=r.tag;if(c===5||c===6)r=r.stateNode,i?a.insertBefore(r,i):a.appendChild(r);else if(c!==4&&(r=r.child,r!==null))for(gc(r,i,a),r=r.sibling;r!==null;)gc(r,i,a),r=r.sibling}var at=null,nn=!1;function or(r,i,a){for(a=a.child;a!==null;)Mh(r,i,a),a=a.sibling}function Mh(r,i,a){if(sn&&typeof sn.onCommitFiberUnmount=="function")try{sn.onCommitFiberUnmount(Fl,a)}catch{}switch(a.tag){case 5:pt||$o(a,i);case 6:var c=at,m=nn;at=null,or(r,i,a),at=c,nn=m,at!==null&&(nn?(r=at,a=a.stateNode,r.nodeType===8?r.parentNode.removeChild(a):r.removeChild(a)):at.removeChild(a.stateNode));break;case 18:at!==null&&(nn?(r=at,a=a.stateNode,r.nodeType===8?Mu(r.parentNode,a):r.nodeType===1&&Mu(r,a),ci(r)):Mu(at,a.stateNode));break;case 4:c=at,m=nn,at=a.stateNode.containerInfo,nn=!0,or(r,i,a),at=c,nn=m;break;case 0:case 11:case 14:case 15:if(!pt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){m=c=c.next;do{var g=m,w=g.destroy;g=g.tag,w!==void 0&&((g&2)!==0||(g&4)!==0)&&mc(a,i,w),m=m.next}while(m!==c)}or(r,i,a);break;case 1:if(!pt&&($o(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(C){Be(a,i,C)}or(r,i,a);break;case 21:or(r,i,a);break;case 22:a.mode&1?(pt=(c=pt)||a.memoizedState!==null,or(r,i,a),pt=c):or(r,i,a);break;default:or(r,i,a)}}function Dh(r){var i=r.updateQueue;if(i!==null){r.updateQueue=null;var a=r.stateNode;a===null&&(a=r.stateNode=new AS),i.forEach(function(c){var m=HS.bind(null,r,c);a.has(c)||(a.add(c),c.then(m,m))})}}function rn(r,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var m=a[c];try{var g=r,w=i,C=w;e:for(;C!==null;){switch(C.tag){case 5:at=C.stateNode,nn=!1;break e;case 3:at=C.stateNode.containerInfo,nn=!0;break e;case 4:at=C.stateNode.containerInfo,nn=!0;break e}C=C.return}if(at===null)throw Error(n(160));Mh(g,w,m),at=null,nn=!1;var R=m.alternate;R!==null&&(R.return=null),m.return=null}catch(V){Be(m,i,V)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Nh(i,r),i=i.sibling}function Nh(r,i){var a=r.alternate,c=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(rn(i,r),fn(r),c&4){try{Ni(3,r,r.return),Ea(3,r)}catch(ue){Be(r,r.return,ue)}try{Ni(5,r,r.return)}catch(ue){Be(r,r.return,ue)}}break;case 1:rn(i,r),fn(r),c&512&&a!==null&&$o(a,a.return);break;case 5:if(rn(i,r),fn(r),c&512&&a!==null&&$o(a,a.return),r.flags&32){var m=r.stateNode;try{Jo(m,"")}catch(ue){Be(r,r.return,ue)}}if(c&4&&(m=r.stateNode,m!=null)){var g=r.memoizedProps,w=a!==null?a.memoizedProps:g,C=r.type,R=r.updateQueue;if(r.updateQueue=null,R!==null)try{C==="input"&&g.type==="radio"&&g.name!=null&&no(m,g),Qs(C,w);var V=Qs(C,g);for(w=0;w<R.length;w+=2){var X=R[w],q=R[w+1];X==="style"?mp(m,q):X==="dangerouslySetInnerHTML"?fp(m,q):X==="children"?Jo(m,q):N(m,X,q,V)}switch(C){case"input":$r(m,g);break;case"textarea":up(m,g);break;case"select":var G=m._wrapperState.wasMultiple;m._wrapperState.wasMultiple=!!g.multiple;var oe=g.value;oe!=null?Hn(m,!!g.multiple,oe,!1):G!==!!g.multiple&&(g.defaultValue!=null?Hn(m,!!g.multiple,g.defaultValue,!0):Hn(m,!!g.multiple,g.multiple?[]:"",!1))}m[wi]=g}catch(ue){Be(r,r.return,ue)}}break;case 6:if(rn(i,r),fn(r),c&4){if(r.stateNode===null)throw Error(n(162));m=r.stateNode,g=r.memoizedProps;try{m.nodeValue=g}catch(ue){Be(r,r.return,ue)}}break;case 3:if(rn(i,r),fn(r),c&4&&a!==null&&a.memoizedState.isDehydrated)try{ci(i.containerInfo)}catch(ue){Be(r,r.return,ue)}break;case 4:rn(i,r),fn(r);break;case 13:rn(i,r),fn(r),m=r.child,m.flags&8192&&(g=m.memoizedState!==null,m.stateNode.isHidden=g,!g||m.alternate!==null&&m.alternate.memoizedState!==null||(bc=Qe())),c&4&&Dh(r);break;case 22:if(X=a!==null&&a.memoizedState!==null,r.mode&1?(pt=(V=pt)||X,rn(i,r),pt=V):rn(i,r),fn(r),c&8192){if(V=r.memoizedState!==null,(r.stateNode.isHidden=V)&&!X&&(r.mode&1)!==0)for(le=r,X=r.child;X!==null;){for(q=le=X;le!==null;){switch(G=le,oe=G.child,G.tag){case 0:case 11:case 14:case 15:Ni(4,G,G.return);break;case 1:$o(G,G.return);var ae=G.stateNode;if(typeof ae.componentWillUnmount=="function"){c=G,a=G.return;try{i=c,ae.props=i.memoizedProps,ae.state=i.memoizedState,ae.componentWillUnmount()}catch(ue){Be(c,a,ue)}}break;case 5:$o(G,G.return);break;case 22:if(G.memoizedState!==null){Ah(q);continue}}oe!==null?(oe.return=G,le=oe):Ah(q)}X=X.sibling}e:for(X=null,q=r;;){if(q.tag===5){if(X===null){X=q;try{m=q.stateNode,V?(g=m.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(C=q.stateNode,R=q.memoizedProps.style,w=R!=null&&R.hasOwnProperty("display")?R.display:null,C.style.display=pp("display",w))}catch(ue){Be(r,r.return,ue)}}}else if(q.tag===6){if(X===null)try{q.stateNode.nodeValue=V?"":q.memoizedProps}catch(ue){Be(r,r.return,ue)}}else if((q.tag!==22&&q.tag!==23||q.memoizedState===null||q===r)&&q.child!==null){q.child.return=q,q=q.child;continue}if(q===r)break e;for(;q.sibling===null;){if(q.return===null||q.return===r)break e;X===q&&(X=null),q=q.return}X===q&&(X=null),q.sibling.return=q.return,q=q.sibling}}break;case 19:rn(i,r),fn(r),c&4&&Dh(r);break;case 21:break;default:rn(i,r),fn(r)}}function fn(r){var i=r.flags;if(i&2){try{e:{for(var a=r.return;a!==null;){if(Th(a)){var c=a;break e}a=a.return}throw Error(n(160))}switch(c.tag){case 5:var m=c.stateNode;c.flags&32&&(Jo(m,""),c.flags&=-33);var g=Ch(r);gc(r,g,m);break;case 3:case 4:var w=c.stateNode.containerInfo,C=Ch(r);vc(r,C,w);break;default:throw Error(n(161))}}catch(R){Be(r,r.return,R)}r.flags&=-3}i&4096&&(r.flags&=-4097)}function IS(r,i,a){le=r,Rh(r)}function Rh(r,i,a){for(var c=(r.mode&1)!==0;le!==null;){var m=le,g=m.child;if(m.tag===22&&c){var w=m.memoizedState!==null||$a;if(!w){var C=m.alternate,R=C!==null&&C.memoizedState!==null||pt;C=$a;var V=pt;if($a=w,(pt=R)&&!V)for(le=m;le!==null;)w=le,R=w.child,w.tag===22&&w.memoizedState!==null?zh(m):R!==null?(R.return=w,le=R):zh(m);for(;g!==null;)le=g,Rh(g),g=g.sibling;le=m,$a=C,pt=V}Lh(r)}else(m.subtreeFlags&8772)!==0&&g!==null?(g.return=m,le=g):Lh(r)}}function Lh(r){for(;le!==null;){var i=le;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:pt||Ea(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!pt)if(a===null)c.componentDidMount();else{var m=i.elementType===i.type?a.memoizedProps:tn(i.type,a.memoizedProps);c.componentDidUpdate(m,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var g=i.updateQueue;g!==null&&Am(i,g,c);break;case 3:var w=i.updateQueue;if(w!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Am(i,w,a)}break;case 5:var C=i.stateNode;if(a===null&&i.flags&4){a=C;var R=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":R.autoFocus&&a.focus();break;case"img":R.src&&(a.src=R.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var V=i.alternate;if(V!==null){var X=V.memoizedState;if(X!==null){var q=X.dehydrated;q!==null&&ci(q)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}pt||i.flags&512&&hc(i)}catch(G){Be(i,i.return,G)}}if(i===r){le=null;break}if(a=i.sibling,a!==null){a.return=i.return,le=a;break}le=i.return}}function Ah(r){for(;le!==null;){var i=le;if(i===r){le=null;break}var a=i.sibling;if(a!==null){a.return=i.return,le=a;break}le=i.return}}function zh(r){for(;le!==null;){var i=le;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Ea(4,i)}catch(R){Be(i,a,R)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var m=i.return;try{c.componentDidMount()}catch(R){Be(i,m,R)}}var g=i.return;try{hc(i)}catch(R){Be(i,g,R)}break;case 5:var w=i.return;try{hc(i)}catch(R){Be(i,w,R)}}}catch(R){Be(i,i.return,R)}if(i===r){le=null;break}var C=i.sibling;if(C!==null){C.return=i.return,le=C;break}le=i.return}}var jS=Math.ceil,Pa=O.ReactCurrentDispatcher,yc=O.ReactCurrentOwner,Ut=O.ReactCurrentBatchConfig,Se=0,nt=null,qe=null,st=0,Lt=0,Eo=Jn(0),et=0,Ri=null,Ar=0,Ta=0,xc=0,Li=null,kt=null,bc=0,Po=1/0,Dn=null,Ca=!1,wc=null,ir=null,Ma=!1,lr=null,Da=0,Ai=0,_c=null,Na=-1,Ra=0;function gt(){return(Se&6)!==0?Qe():Na!==-1?Na:Na=Qe()}function ar(r){return(r.mode&1)===0?1:(Se&2)!==0&&st!==0?st&-st:wS.transition!==null?(Ra===0&&(Ra=Cp()),Ra):(r=Te,r!==0||(r=window.event,r=r===void 0?16:jp(r.type)),r)}function on(r,i,a,c){if(50<Ai)throw Ai=0,_c=null,Error(n(185));ii(r,a,c),((Se&2)===0||r!==nt)&&(r===nt&&((Se&2)===0&&(Ta|=a),et===4&&sr(r,st)),$t(r,c),a===1&&Se===0&&(i.mode&1)===0&&(Po=Qe()+500,aa&&tr()))}function $t(r,i){var a=r.callbackNode;w1(r,i);var c=Vl(r,r===nt?st:0);if(c===0)a!==null&&Ep(a),r.callbackNode=null,r.callbackPriority=0;else if(i=c&-c,r.callbackPriority!==i){if(a!=null&&Ep(a),i===1)r.tag===0?bS(jh.bind(null,r)):Sm(jh.bind(null,r)),vS(function(){(Se&6)===0&&tr()}),a=null;else{switch(Mp(c)){case 1:a=tu;break;case 4:a=Pp;break;case 16:a=jl;break;case 536870912:a=Tp;break;default:a=jl}a=Wh(a,Ih.bind(null,r))}r.callbackPriority=i,r.callbackNode=a}}function Ih(r,i){if(Na=-1,Ra=0,(Se&6)!==0)throw Error(n(327));var a=r.callbackNode;if(To()&&r.callbackNode!==a)return null;var c=Vl(r,r===nt?st:0);if(c===0)return null;if((c&30)!==0||(c&r.expiredLanes)!==0||i)i=La(r,c);else{i=c;var m=Se;Se|=2;var g=Oh();(nt!==r||st!==i)&&(Dn=null,Po=Qe()+500,Ir(r,i));do try{KS();break}catch(C){Fh(r,C)}while(!0);Ou(),Pa.current=g,Se=m,qe!==null?i=0:(nt=null,st=0,i=et)}if(i!==0){if(i===2&&(m=nu(r),m!==0&&(c=m,i=Sc(r,m))),i===1)throw a=Ri,Ir(r,0),sr(r,c),$t(r,Qe()),a;if(i===6)sr(r,c);else{if(m=r.current.alternate,(c&30)===0&&!FS(m)&&(i=La(r,c),i===2&&(g=nu(r),g!==0&&(c=g,i=Sc(r,g))),i===1))throw a=Ri,Ir(r,0),sr(r,c),$t(r,Qe()),a;switch(r.finishedWork=m,r.finishedLanes=c,i){case 0:case 1:throw Error(n(345));case 2:jr(r,kt,Dn);break;case 3:if(sr(r,c),(c&130023424)===c&&(i=bc+500-Qe(),10<i)){if(Vl(r,0)!==0)break;if(m=r.suspendedLanes,(m&c)!==c){gt(),r.pingedLanes|=r.suspendedLanes&m;break}r.timeoutHandle=Cu(jr.bind(null,r,kt,Dn),i);break}jr(r,kt,Dn);break;case 4:if(sr(r,c),(c&4194240)===c)break;for(i=r.eventTimes,m=-1;0<c;){var w=31-Zt(c);g=1<<w,w=i[w],w>m&&(m=w),c&=~g}if(c=m,c=Qe()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*jS(c/1960))-c,10<c){r.timeoutHandle=Cu(jr.bind(null,r,kt,Dn),c);break}jr(r,kt,Dn);break;case 5:jr(r,kt,Dn);break;default:throw Error(n(329))}}}return $t(r,Qe()),r.callbackNode===a?Ih.bind(null,r):null}function Sc(r,i){var a=Li;return r.current.memoizedState.isDehydrated&&(Ir(r,i).flags|=256),r=La(r,i),r!==2&&(i=kt,kt=a,i!==null&&kc(i)),r}function kc(r){kt===null?kt=r:kt.push.apply(kt,r)}function FS(r){for(var i=r;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var m=a[c],g=m.getSnapshot;m=m.value;try{if(!Jt(g(),m))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===r)break;for(;i.sibling===null;){if(i.return===null||i.return===r)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function sr(r,i){for(i&=~xc,i&=~Ta,r.suspendedLanes|=i,r.pingedLanes&=~i,r=r.expirationTimes;0<i;){var a=31-Zt(i),c=1<<a;r[a]=-1,i&=~c}}function jh(r){if((Se&6)!==0)throw Error(n(327));To();var i=Vl(r,0);if((i&1)===0)return $t(r,Qe()),null;var a=La(r,i);if(r.tag!==0&&a===2){var c=nu(r);c!==0&&(i=c,a=Sc(r,c))}if(a===1)throw a=Ri,Ir(r,0),sr(r,i),$t(r,Qe()),a;if(a===6)throw Error(n(345));return r.finishedWork=r.current.alternate,r.finishedLanes=i,jr(r,kt,Dn),$t(r,Qe()),null}function $c(r,i){var a=Se;Se|=1;try{return r(i)}finally{Se=a,Se===0&&(Po=Qe()+500,aa&&tr())}}function zr(r){lr!==null&&lr.tag===0&&(Se&6)===0&&To();var i=Se;Se|=1;var a=Ut.transition,c=Te;try{if(Ut.transition=null,Te=1,r)return r()}finally{Te=c,Ut.transition=a,Se=i,(Se&6)===0&&tr()}}function Ec(){Lt=Eo.current,ze(Eo)}function Ir(r,i){r.finishedWork=null,r.finishedLanes=0;var a=r.timeoutHandle;if(a!==-1&&(r.timeoutHandle=-1,hS(a)),qe!==null)for(a=qe.return;a!==null;){var c=a;switch(Au(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&ia();break;case 3:So(),ze(wt),ze(ct),Qu();break;case 5:Wu(c);break;case 4:So();break;case 13:ze(je);break;case 19:ze(je);break;case 10:Ku(c.type._context);break;case 22:case 23:Ec()}a=a.return}if(nt=r,qe=r=ur(r.current,null),st=Lt=i,et=0,Ri=null,xc=Ta=Ar=0,kt=Li=null,Nr!==null){for(i=0;i<Nr.length;i++)if(a=Nr[i],c=a.interleaved,c!==null){a.interleaved=null;var m=c.next,g=a.pending;if(g!==null){var w=g.next;g.next=m,c.next=w}a.pending=c}Nr=null}return r}function Fh(r,i){do{var a=qe;try{if(Ou(),ga.current=wa,ya){for(var c=Fe.memoizedState;c!==null;){var m=c.queue;m!==null&&(m.pending=null),c=c.next}ya=!1}if(Lr=0,tt=Je=Fe=null,Pi=!1,Ti=0,yc.current=null,a===null||a.return===null){et=1,Ri=i,qe=null;break}e:{var g=r,w=a.return,C=a,R=i;if(i=st,C.flags|=32768,R!==null&&typeof R=="object"&&typeof R.then=="function"){var V=R,X=C,q=X.tag;if((X.mode&1)===0&&(q===0||q===11||q===15)){var G=X.alternate;G?(X.updateQueue=G.updateQueue,X.memoizedState=G.memoizedState,X.lanes=G.lanes):(X.updateQueue=null,X.memoizedState=null)}var oe=ch(w);if(oe!==null){oe.flags&=-257,dh(oe,w,C,g,i),oe.mode&1&&uh(g,V,i),i=oe,R=V;var ae=i.updateQueue;if(ae===null){var ue=new Set;ue.add(R),i.updateQueue=ue}else ae.add(R);break e}else{if((i&1)===0){uh(g,V,i),Pc();break e}R=Error(n(426))}}else if(Ie&&C.mode&1){var Ge=ch(w);if(Ge!==null){(Ge.flags&65536)===0&&(Ge.flags|=256),dh(Ge,w,C,g,i),ju(ko(R,C));break e}}g=R=ko(R,C),et!==4&&(et=2),Li===null?Li=[g]:Li.push(g),g=w;do{switch(g.tag){case 3:g.flags|=65536,i&=-i,g.lanes|=i;var j=ah(g,R,i);Lm(g,j);break e;case 1:C=R;var L=g.type,F=g.stateNode;if((g.flags&128)===0&&(typeof L.getDerivedStateFromError=="function"||F!==null&&typeof F.componentDidCatch=="function"&&(ir===null||!ir.has(F)))){g.flags|=65536,i&=-i,g.lanes|=i;var Z=sh(g,C,i);Lm(g,Z);break e}}g=g.return}while(g!==null)}Vh(a)}catch(ce){i=ce,qe===a&&a!==null&&(qe=a=a.return);continue}break}while(!0)}function Oh(){var r=Pa.current;return Pa.current=wa,r===null?wa:r}function Pc(){(et===0||et===3||et===2)&&(et=4),nt===null||(Ar&268435455)===0&&(Ta&268435455)===0||sr(nt,st)}function La(r,i){var a=Se;Se|=2;var c=Oh();(nt!==r||st!==i)&&(Dn=null,Ir(r,i));do try{OS();break}catch(m){Fh(r,m)}while(!0);if(Ou(),Se=a,Pa.current=c,qe!==null)throw Error(n(261));return nt=null,st=0,et}function OS(){for(;qe!==null;)Kh(qe)}function KS(){for(;qe!==null&&!f1();)Kh(qe)}function Kh(r){var i=Hh(r.alternate,r,Lt);r.memoizedProps=r.pendingProps,i===null?Vh(r):qe=i,yc.current=null}function Vh(r){var i=r;do{var a=i.alternate;if(r=i.return,(i.flags&32768)===0){if(a=RS(a,i,Lt),a!==null){qe=a;return}}else{if(a=LS(a,i),a!==null){a.flags&=32767,qe=a;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{et=6,qe=null;return}}if(i=i.sibling,i!==null){qe=i;return}qe=i=r}while(i!==null);et===0&&(et=5)}function jr(r,i,a){var c=Te,m=Ut.transition;try{Ut.transition=null,Te=1,VS(r,i,a,c)}finally{Ut.transition=m,Te=c}return null}function VS(r,i,a,c){do To();while(lr!==null);if((Se&6)!==0)throw Error(n(327));a=r.finishedWork;var m=r.finishedLanes;if(a===null)return null;if(r.finishedWork=null,r.finishedLanes=0,a===r.current)throw Error(n(177));r.callbackNode=null,r.callbackPriority=0;var g=a.lanes|a.childLanes;if(_1(r,g),r===nt&&(qe=nt=null,st=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Ma||(Ma=!0,Wh(jl,function(){return To(),null})),g=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||g){g=Ut.transition,Ut.transition=null;var w=Te;Te=1;var C=Se;Se|=4,yc.current=null,zS(r,a),Nh(a,r),sS(Pu),Hl=!!Eu,Pu=Eu=null,r.current=a,IS(a),p1(),Se=C,Te=w,Ut.transition=g}else r.current=a;if(Ma&&(Ma=!1,lr=r,Da=m),g=r.pendingLanes,g===0&&(ir=null),v1(a.stateNode),$t(r,Qe()),i!==null)for(c=r.onRecoverableError,a=0;a<i.length;a++)m=i[a],c(m.value,{componentStack:m.stack,digest:m.digest});if(Ca)throw Ca=!1,r=wc,wc=null,r;return(Da&1)!==0&&r.tag!==0&&To(),g=r.pendingLanes,(g&1)!==0?r===_c?Ai++:(Ai=0,_c=r):Ai=0,tr(),null}function To(){if(lr!==null){var r=Mp(Da),i=Ut.transition,a=Te;try{if(Ut.transition=null,Te=16>r?16:r,lr===null)var c=!1;else{if(r=lr,lr=null,Da=0,(Se&6)!==0)throw Error(n(331));var m=Se;for(Se|=4,le=r.current;le!==null;){var g=le,w=g.child;if((le.flags&16)!==0){var C=g.deletions;if(C!==null){for(var R=0;R<C.length;R++){var V=C[R];for(le=V;le!==null;){var X=le;switch(X.tag){case 0:case 11:case 15:Ni(8,X,g)}var q=X.child;if(q!==null)q.return=X,le=q;else for(;le!==null;){X=le;var G=X.sibling,oe=X.return;if(Ph(X),X===V){le=null;break}if(G!==null){G.return=oe,le=G;break}le=oe}}}var ae=g.alternate;if(ae!==null){var ue=ae.child;if(ue!==null){ae.child=null;do{var Ge=ue.sibling;ue.sibling=null,ue=Ge}while(ue!==null)}}le=g}}if((g.subtreeFlags&2064)!==0&&w!==null)w.return=g,le=w;else e:for(;le!==null;){if(g=le,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:Ni(9,g,g.return)}var j=g.sibling;if(j!==null){j.return=g.return,le=j;break e}le=g.return}}var L=r.current;for(le=L;le!==null;){w=le;var F=w.child;if((w.subtreeFlags&2064)!==0&&F!==null)F.return=w,le=F;else e:for(w=L;le!==null;){if(C=le,(C.flags&2048)!==0)try{switch(C.tag){case 0:case 11:case 15:Ea(9,C)}}catch(ce){Be(C,C.return,ce)}if(C===w){le=null;break e}var Z=C.sibling;if(Z!==null){Z.return=C.return,le=Z;break e}le=C.return}}if(Se=m,tr(),sn&&typeof sn.onPostCommitFiberRoot=="function")try{sn.onPostCommitFiberRoot(Fl,r)}catch{}c=!0}return c}finally{Te=a,Ut.transition=i}}return!1}function Bh(r,i,a){i=ko(a,i),i=ah(r,i,1),r=rr(r,i,1),i=gt(),r!==null&&(ii(r,1,i),$t(r,i))}function Be(r,i,a){if(r.tag===3)Bh(r,r,a);else for(;i!==null;){if(i.tag===3){Bh(i,r,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ir===null||!ir.has(c))){r=ko(a,r),r=sh(i,r,1),i=rr(i,r,1),r=gt(),i!==null&&(ii(i,1,r),$t(i,r));break}}i=i.return}}function BS(r,i,a){var c=r.pingCache;c!==null&&c.delete(i),i=gt(),r.pingedLanes|=r.suspendedLanes&a,nt===r&&(st&a)===a&&(et===4||et===3&&(st&130023424)===st&&500>Qe()-bc?Ir(r,0):xc|=a),$t(r,i)}function Uh(r,i){i===0&&((r.mode&1)===0?i=1:(i=Kl,Kl<<=1,(Kl&130023424)===0&&(Kl=4194304)));var a=gt();r=Tn(r,i),r!==null&&(ii(r,i,a),$t(r,a))}function US(r){var i=r.memoizedState,a=0;i!==null&&(a=i.retryLane),Uh(r,a)}function HS(r,i){var a=0;switch(r.tag){case 13:var c=r.stateNode,m=r.memoizedState;m!==null&&(a=m.retryLane);break;case 19:c=r.stateNode;break;default:throw Error(n(314))}c!==null&&c.delete(i),Uh(r,a)}var Hh;Hh=function(r,i,a){if(r!==null)if(r.memoizedProps!==i.pendingProps||wt.current)St=!0;else{if((r.lanes&a)===0&&(i.flags&128)===0)return St=!1,NS(r,i,a);St=(r.flags&131072)!==0}else St=!1,Ie&&(i.flags&1048576)!==0&&km(i,ua,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;ka(r,i),r=i.pendingProps;var m=vo(i,ct.current);_o(i,a),m=qu(null,i,c,r,m,a);var g=Zu();return i.flags|=1,typeof m=="object"&&m!==null&&typeof m.render=="function"&&m.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,_t(c)?(g=!0,la(i)):g=!1,i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,Uu(i),m.updater=_a,i.stateNode=m,m._reactInternals=i,oc(i,c,r,a),i=sc(null,i,c,!0,g,a)):(i.tag=0,Ie&&g&&Lu(i),vt(null,i,m,a),i=i.child),i;case 16:c=i.elementType;e:{switch(ka(r,i),r=i.pendingProps,m=c._init,c=m(c._payload),i.type=c,m=i.tag=YS(c),r=tn(c,r),m){case 0:i=ac(null,i,c,r,a);break e;case 1:i=gh(null,i,c,r,a);break e;case 11:i=fh(null,i,c,r,a);break e;case 14:i=ph(null,i,c,tn(c.type,r),a);break e}throw Error(n(306,c,""))}return i;case 0:return c=i.type,m=i.pendingProps,m=i.elementType===c?m:tn(c,m),ac(r,i,c,m,a);case 1:return c=i.type,m=i.pendingProps,m=i.elementType===c?m:tn(c,m),gh(r,i,c,m,a);case 3:e:{if(yh(i),r===null)throw Error(n(387));c=i.pendingProps,g=i.memoizedState,m=g.element,Rm(r,i),ha(i,c,null,a);var w=i.memoizedState;if(c=w.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){m=ko(Error(n(423)),i),i=xh(r,i,c,a,m);break e}else if(c!==m){m=ko(Error(n(424)),i),i=xh(r,i,c,a,m);break e}else for(Rt=Zn(i.stateNode.containerInfo.firstChild),Nt=i,Ie=!0,en=null,a=Dm(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(xo(),c===m){i=Mn(r,i,a);break e}vt(r,i,c,a)}i=i.child}return i;case 5:return zm(i),r===null&&Iu(i),c=i.type,m=i.pendingProps,g=r!==null?r.memoizedProps:null,w=m.children,Tu(c,m)?w=null:g!==null&&Tu(c,g)&&(i.flags|=32),vh(r,i),vt(r,i,w,a),i.child;case 6:return r===null&&Iu(i),null;case 13:return bh(r,i,a);case 4:return Hu(i,i.stateNode.containerInfo),c=i.pendingProps,r===null?i.child=bo(i,null,c,a):vt(r,i,c,a),i.child;case 11:return c=i.type,m=i.pendingProps,m=i.elementType===c?m:tn(c,m),fh(r,i,c,m,a);case 7:return vt(r,i,i.pendingProps,a),i.child;case 8:return vt(r,i,i.pendingProps.children,a),i.child;case 12:return vt(r,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,m=i.pendingProps,g=i.memoizedProps,w=m.value,De(fa,c._currentValue),c._currentValue=w,g!==null)if(Jt(g.value,w)){if(g.children===m.children&&!wt.current){i=Mn(r,i,a);break e}}else for(g=i.child,g!==null&&(g.return=i);g!==null;){var C=g.dependencies;if(C!==null){w=g.child;for(var R=C.firstContext;R!==null;){if(R.context===c){if(g.tag===1){R=Cn(-1,a&-a),R.tag=2;var V=g.updateQueue;if(V!==null){V=V.shared;var X=V.pending;X===null?R.next=R:(R.next=X.next,X.next=R),V.pending=R}}g.lanes|=a,R=g.alternate,R!==null&&(R.lanes|=a),Vu(g.return,a,i),C.lanes|=a;break}R=R.next}}else if(g.tag===10)w=g.type===i.type?null:g.child;else if(g.tag===18){if(w=g.return,w===null)throw Error(n(341));w.lanes|=a,C=w.alternate,C!==null&&(C.lanes|=a),Vu(w,a,i),w=g.sibling}else w=g.child;if(w!==null)w.return=g;else for(w=g;w!==null;){if(w===i){w=null;break}if(g=w.sibling,g!==null){g.return=w.return,w=g;break}w=w.return}g=w}vt(r,i,m.children,a),i=i.child}return i;case 9:return m=i.type,c=i.pendingProps.children,_o(i,a),m=Vt(m),c=c(m),i.flags|=1,vt(r,i,c,a),i.child;case 14:return c=i.type,m=tn(c,i.pendingProps),m=tn(c.type,m),ph(r,i,c,m,a);case 15:return mh(r,i,i.type,i.pendingProps,a);case 17:return c=i.type,m=i.pendingProps,m=i.elementType===c?m:tn(c,m),ka(r,i),i.tag=1,_t(c)?(r=!0,la(i)):r=!1,_o(i,a),ih(i,c,m),oc(i,c,m,a),sc(null,i,c,!0,r,a);case 19:return _h(r,i,a);case 22:return hh(r,i,a)}throw Error(n(156,i.tag))};function Wh(r,i){return $p(r,i)}function WS(r,i,a,c){this.tag=r,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ht(r,i,a,c){return new WS(r,i,a,c)}function Tc(r){return r=r.prototype,!(!r||!r.isReactComponent)}function YS(r){if(typeof r=="function")return Tc(r)?1:0;if(r!=null){if(r=r.$$typeof,r===U)return 11;if(r===te)return 14}return 2}function ur(r,i){var a=r.alternate;return a===null?(a=Ht(r.tag,i,r.key,r.mode),a.elementType=r.elementType,a.type=r.type,a.stateNode=r.stateNode,a.alternate=r,r.alternate=a):(a.pendingProps=i,a.type=r.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=r.flags&14680064,a.childLanes=r.childLanes,a.lanes=r.lanes,a.child=r.child,a.memoizedProps=r.memoizedProps,a.memoizedState=r.memoizedState,a.updateQueue=r.updateQueue,i=r.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=r.sibling,a.index=r.index,a.ref=r.ref,a}function Aa(r,i,a,c,m,g){var w=2;if(c=r,typeof r=="function")Tc(r)&&(w=1);else if(typeof r=="string")w=5;else e:switch(r){case z:return Fr(a.children,m,g,i);case P:w=8,m|=8;break;case K:return r=Ht(12,a,i,m|2),r.elementType=K,r.lanes=g,r;case T:return r=Ht(13,a,i,m),r.elementType=T,r.lanes=g,r;case B:return r=Ht(19,a,i,m),r.elementType=B,r.lanes=g,r;case H:return za(a,m,g,i);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case J:w=10;break e;case W:w=9;break e;case U:w=11;break e;case te:w=14;break e;case se:w=16,c=null;break e}throw Error(n(130,r==null?r:typeof r,""))}return i=Ht(w,a,i,m),i.elementType=r,i.type=c,i.lanes=g,i}function Fr(r,i,a,c){return r=Ht(7,r,c,i),r.lanes=a,r}function za(r,i,a,c){return r=Ht(22,r,c,i),r.elementType=H,r.lanes=a,r.stateNode={isHidden:!1},r}function Cc(r,i,a){return r=Ht(6,r,null,i),r.lanes=a,r}function Mc(r,i,a){return i=Ht(4,r.children!==null?r.children:[],r.key,i),i.lanes=a,i.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},i}function QS(r,i,a,c,m){this.tag=i,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ru(0),this.expirationTimes=ru(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ru(0),this.identifierPrefix=c,this.onRecoverableError=m,this.mutableSourceEagerHydrationData=null}function Dc(r,i,a,c,m,g,w,C,R){return r=new QS(r,i,a,C,R),i===1?(i=1,g===!0&&(i|=8)):i=0,g=Ht(3,null,null,i),r.current=g,g.stateNode=r,g.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Uu(g),r}function GS(r,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:I,key:c==null?null:""+c,children:r,containerInfo:i,implementation:a}}function Yh(r){if(!r)return er;r=r._reactInternals;e:{if(Pr(r)!==r||r.tag!==1)throw Error(n(170));var i=r;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(_t(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(r.tag===1){var a=r.type;if(_t(a))return wm(r,a,i)}return i}function Qh(r,i,a,c,m,g,w,C,R){return r=Dc(a,c,!0,r,m,g,w,C,R),r.context=Yh(null),a=r.current,c=gt(),m=ar(a),g=Cn(c,m),g.callback=i??null,rr(a,g,m),r.current.lanes=m,ii(r,m,c),$t(r,c),r}function Ia(r,i,a,c){var m=i.current,g=gt(),w=ar(m);return a=Yh(a),i.context===null?i.context=a:i.pendingContext=a,i=Cn(g,w),i.payload={element:r},c=c===void 0?null:c,c!==null&&(i.callback=c),r=rr(m,i,w),r!==null&&(on(r,m,w,g),ma(r,m,w)),w}function ja(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function Gh(r,i){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var a=r.retryLane;r.retryLane=a!==0&&a<i?a:i}}function Nc(r,i){Gh(r,i),(r=r.alternate)&&Gh(r,i)}function XS(){return null}var Xh=typeof reportError=="function"?reportError:function(r){console.error(r)};function Rc(r){this._internalRoot=r}Fa.prototype.render=Rc.prototype.render=function(r){var i=this._internalRoot;if(i===null)throw Error(n(409));Ia(r,i,null,null)},Fa.prototype.unmount=Rc.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var i=r.containerInfo;zr(function(){Ia(null,r,null,null)}),i[kn]=null}};function Fa(r){this._internalRoot=r}Fa.prototype.unstable_scheduleHydration=function(r){if(r){var i=Rp();r={blockedOn:null,target:r,priority:i};for(var a=0;a<Gn.length&&i!==0&&i<Gn[a].priority;a++);Gn.splice(a,0,r),a===0&&zp(r)}};function Lc(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function Oa(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function qh(){}function qS(r,i,a,c,m){if(m){if(typeof c=="function"){var g=c;c=function(){var V=ja(w);g.call(V)}}var w=Qh(i,c,r,0,null,!1,!1,"",qh);return r._reactRootContainer=w,r[kn]=w.current,xi(r.nodeType===8?r.parentNode:r),zr(),w}for(;m=r.lastChild;)r.removeChild(m);if(typeof c=="function"){var C=c;c=function(){var V=ja(R);C.call(V)}}var R=Dc(r,0,!1,null,null,!1,!1,"",qh);return r._reactRootContainer=R,r[kn]=R.current,xi(r.nodeType===8?r.parentNode:r),zr(function(){Ia(i,R,a,c)}),R}function Ka(r,i,a,c,m){var g=a._reactRootContainer;if(g){var w=g;if(typeof m=="function"){var C=m;m=function(){var R=ja(w);C.call(R)}}Ia(i,w,r,m)}else w=qS(a,i,r,m,c);return ja(w)}Dp=function(r){switch(r.tag){case 3:var i=r.stateNode;if(i.current.memoizedState.isDehydrated){var a=oi(i.pendingLanes);a!==0&&(ou(i,a|1),$t(i,Qe()),(Se&6)===0&&(Po=Qe()+500,tr()))}break;case 13:zr(function(){var c=Tn(r,1);if(c!==null){var m=gt();on(c,r,1,m)}}),Nc(r,1)}},iu=function(r){if(r.tag===13){var i=Tn(r,134217728);if(i!==null){var a=gt();on(i,r,134217728,a)}Nc(r,134217728)}},Np=function(r){if(r.tag===13){var i=ar(r),a=Tn(r,i);if(a!==null){var c=gt();on(a,r,i,c)}Nc(r,i)}},Rp=function(){return Te},Lp=function(r,i){var a=Te;try{return Te=r,i()}finally{Te=a}},qs=function(r,i,a){switch(i){case"input":if($r(r,a),i=a.name,a.type==="radio"&&i!=null){for(a=r;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==r&&c.form===r.form){var m=oa(c);if(!m)throw Error(n(90));Ee(c),$r(c,m)}}}break;case"textarea":up(r,a);break;case"select":i=a.value,i!=null&&Hn(r,!!a.multiple,i,!1)}},yp=$c,xp=zr;var ZS={usingClientEntryPoint:!1,Events:[_i,mo,oa,vp,gp,$c]},zi={findFiberByHostInstance:Tr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},JS={bundleType:zi.bundleType,version:zi.version,rendererPackageName:zi.rendererPackageName,rendererConfig:zi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:O.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=Sp(r),r===null?null:r.stateNode},findFiberByHostInstance:zi.findFiberByHostInstance||XS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Va=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Va.isDisabled&&Va.supportsFiber)try{Fl=Va.inject(JS),sn=Va}catch{}}return Et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ZS,Et.createPortal=function(r,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Lc(i))throw Error(n(200));return GS(r,i,null,a)},Et.createRoot=function(r,i){if(!Lc(r))throw Error(n(299));var a=!1,c="",m=Xh;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(m=i.onRecoverableError)),i=Dc(r,1,!1,null,null,a,!1,c,m),r[kn]=i.current,xi(r.nodeType===8?r.parentNode:r),new Rc(i)},Et.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var i=r._reactInternals;if(i===void 0)throw typeof r.render=="function"?Error(n(188)):(r=Object.keys(r).join(","),Error(n(268,r)));return r=Sp(i),r=r===null?null:r.stateNode,r},Et.flushSync=function(r){return zr(r)},Et.hydrate=function(r,i,a){if(!Oa(i))throw Error(n(200));return Ka(null,r,i,!0,a)},Et.hydrateRoot=function(r,i,a){if(!Lc(r))throw Error(n(405));var c=a!=null&&a.hydratedSources||null,m=!1,g="",w=Xh;if(a!=null&&(a.unstable_strictMode===!0&&(m=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(w=a.onRecoverableError)),i=Qh(i,null,r,1,a??null,m,!1,g,w),r[kn]=i.current,xi(r),c)for(r=0;r<c.length;r++)a=c[r],m=a._getVersion,m=m(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,m]:i.mutableSourceEagerHydrationData.push(a,m);return new Fa(i)},Et.render=function(r,i,a){if(!Oa(i))throw Error(n(200));return Ka(null,r,i,!1,a)},Et.unmountComponentAtNode=function(r){if(!Oa(r))throw Error(n(40));return r._reactRootContainer?(zr(function(){Ka(null,null,r,!1,function(){r._reactRootContainer=null,r[kn]=null})}),!0):!1},Et.unstable_batchedUpdates=$c,Et.unstable_renderSubtreeIntoContainer=function(r,i,a,c){if(!Oa(a))throw Error(n(200));if(r==null||r._reactInternals===void 0)throw Error(n(38));return Ka(r,i,a,!1,c)},Et.version="18.3.1-next-f1338f8080-20240426",Et}var iv;function Py(){if(iv)return Ic.exports;iv=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),Ic.exports=lk(),Ic.exports}var lv;function ak(){if(lv)return Ba;lv=1;var e=Py();return Ba.createRoot=e.createRoot,Ba.hydrateRoot=e.hydrateRoot,Ba}var sk=ak();const uk=lf(sk);var k=af();const ie=lf(k);var ji={},av;function ck(){if(av)return ji;av=1,Object.defineProperty(ji,"__esModule",{value:!0}),ji.parse=u,ji.serialize=p;const e=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,t=/^[\u0021-\u003A\u003C-\u007E]*$/,n=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,o=/^[\u0020-\u003A\u003D-\u007E]*$/,l=Object.prototype.toString,s=(()=>{const v=function(){};return v.prototype=Object.create(null),v})();function u(v,x){const b=new s,_=v.length;if(_<2)return b;const S=(x==null?void 0:x.decode)||h;let $=0;do{const E=v.indexOf("=",$);if(E===-1)break;const N=v.indexOf(";",$),O=N===-1?_:N;if(E>O){$=v.lastIndexOf(";",E-1)+1;continue}const M=d(v,$,E),I=f(v,E,M),z=v.slice(M,I);if(b[z]===void 0){let P=d(v,E+1,O),K=f(v,O,P);const J=S(v.slice(P,K));b[z]=J}$=O+1}while($<_);return b}function d(v,x,b){do{const _=v.charCodeAt(x);if(_!==32&&_!==9)return x}while(++x<b);return b}function f(v,x,b){for(;x>b;){const _=v.charCodeAt(--x);if(_!==32&&_!==9)return x+1}return b}function p(v,x,b){const _=(b==null?void 0:b.encode)||encodeURIComponent;if(!e.test(v))throw new TypeError(`argument name is invalid: ${v}`);const S=_(x);if(!t.test(S))throw new TypeError(`argument val is invalid: ${x}`);let $=v+"="+S;if(!b)return $;if(b.maxAge!==void 0){if(!Number.isInteger(b.maxAge))throw new TypeError(`option maxAge is invalid: ${b.maxAge}`);$+="; Max-Age="+b.maxAge}if(b.domain){if(!n.test(b.domain))throw new TypeError(`option domain is invalid: ${b.domain}`);$+="; Domain="+b.domain}if(b.path){if(!o.test(b.path))throw new TypeError(`option path is invalid: ${b.path}`);$+="; Path="+b.path}if(b.expires){if(!y(b.expires)||!Number.isFinite(b.expires.valueOf()))throw new TypeError(`option expires is invalid: ${b.expires}`);$+="; Expires="+b.expires.toUTCString()}if(b.httpOnly&&($+="; HttpOnly"),b.secure&&($+="; Secure"),b.partitioned&&($+="; Partitioned"),b.priority)switch(typeof b.priority=="string"?b.priority.toLowerCase():void 0){case"low":$+="; Priority=Low";break;case"medium":$+="; Priority=Medium";break;case"high":$+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${b.priority}`)}if(b.sameSite)switch(typeof b.sameSite=="string"?b.sameSite.toLowerCase():b.sameSite){case!0:case"strict":$+="; SameSite=Strict";break;case"lax":$+="; SameSite=Lax";break;case"none":$+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${b.sameSite}`)}return $}function h(v){if(v.indexOf("%")===-1)return v;try{return decodeURIComponent(v)}catch{return v}}function y(v){return l.call(v)==="[object Date]"}return ji}ck();var sv="popstate";function dk(e={}){function t(o,l){let{pathname:s,search:u,hash:d}=o.location;return Sd("",{pathname:s,search:u,hash:d},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function n(o,l){return typeof l=="string"?l:ul(l)}return pk(t,n,null,e)}function Ke(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function bn(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function fk(){return Math.random().toString(36).substring(2,10)}function uv(e,t){return{usr:e.state,key:e.key,idx:t}}function Sd(e,t,n=null,o){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?Qo(t):t,state:n,key:t&&t.key||o||fk()}}function ul({pathname:e="/",search:t="",hash:n=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function Qo(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let o=e.indexOf("?");o>=0&&(t.search=e.substring(o),e=e.substring(0,o)),e&&(t.pathname=e)}return t}function pk(e,t,n,o={}){let{window:l=document.defaultView,v5Compat:s=!1}=o,u=l.history,d="POP",f=null,p=h();p==null&&(p=0,u.replaceState({...u.state,idx:p},""));function h(){return(u.state||{idx:null}).idx}function y(){d="POP";let S=h(),$=S==null?null:S-p;p=S,f&&f({action:d,location:_.location,delta:$})}function v(S,$){d="PUSH";let E=Sd(_.location,S,$);p=h()+1;let N=uv(E,p),O=_.createHref(E);try{u.pushState(N,"",O)}catch(M){if(M instanceof DOMException&&M.name==="DataCloneError")throw M;l.location.assign(O)}s&&f&&f({action:d,location:_.location,delta:1})}function x(S,$){d="REPLACE";let E=Sd(_.location,S,$);p=h();let N=uv(E,p),O=_.createHref(E);u.replaceState(N,"",O),s&&f&&f({action:d,location:_.location,delta:0})}function b(S){return mk(S)}let _={get action(){return d},get location(){return e(l,u)},listen(S){if(f)throw new Error("A history only accepts one active listener");return l.addEventListener(sv,y),f=S,()=>{l.removeEventListener(sv,y),f=null}},createHref(S){return t(l,S)},createURL:b,encodeLocation(S){let $=b(S);return{pathname:$.pathname,search:$.search,hash:$.hash}},push:v,replace:x,go(S){return u.go(S)}};return _}function mk(e,t=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),Ke(n,"No window.location.(origin|href) available to create URL");let o=typeof e=="string"?e:ul(e);return o=o.replace(/ $/,"%20"),!t&&o.startsWith("//")&&(o=n+o),new URL(o,n)}function Ty(e,t,n="/"){return hk(e,t,n,!1)}function hk(e,t,n,o){let l=typeof t=="string"?Qo(t):t,s=zn(l.pathname||"/",n);if(s==null)return null;let u=Cy(e);vk(u);let d=null;for(let f=0;d==null&&f<u.length;++f){let p=Pk(s);d=$k(u[f],p,o)}return d}function Cy(e,t=[],n=[],o=""){let l=(s,u,d)=>{let f={relativePath:d===void 0?s.path||"":d,caseSensitive:s.caseSensitive===!0,childrenIndex:u,route:s};f.relativePath.startsWith("/")&&(Ke(f.relativePath.startsWith(o),`Absolute route path "${f.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),f.relativePath=f.relativePath.slice(o.length));let p=An([o,f.relativePath]),h=n.concat(f);s.children&&s.children.length>0&&(Ke(s.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),Cy(s.children,t,h,p)),!(s.path==null&&!s.index)&&t.push({path:p,score:Sk(p,s.index),routesMeta:h})};return e.forEach((s,u)=>{var d;if(s.path===""||!((d=s.path)!=null&&d.includes("?")))l(s,u);else for(let f of My(s.path))l(s,u,f)}),t}function My(e){let t=e.split("/");if(t.length===0)return[];let[n,...o]=t,l=n.endsWith("?"),s=n.replace(/\?$/,"");if(o.length===0)return l?[s,""]:[s];let u=My(o.join("/")),d=[];return d.push(...u.map(f=>f===""?s:[s,f].join("/"))),l&&d.push(...u),d.map(f=>e.startsWith("/")&&f===""?"/":f)}function vk(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:kk(t.routesMeta.map(o=>o.childrenIndex),n.routesMeta.map(o=>o.childrenIndex)))}var gk=/^:[\w-]+$/,yk=3,xk=2,bk=1,wk=10,_k=-2,cv=e=>e==="*";function Sk(e,t){let n=e.split("/"),o=n.length;return n.some(cv)&&(o+=_k),t&&(o+=xk),n.filter(l=>!cv(l)).reduce((l,s)=>l+(gk.test(s)?yk:s===""?bk:wk),o)}function kk(e,t){return e.length===t.length&&e.slice(0,-1).every((o,l)=>o===t[l])?e[e.length-1]-t[t.length-1]:0}function $k(e,t,n=!1){let{routesMeta:o}=e,l={},s="/",u=[];for(let d=0;d<o.length;++d){let f=o[d],p=d===o.length-1,h=s==="/"?t:t.slice(s.length)||"/",y=fs({path:f.relativePath,caseSensitive:f.caseSensitive,end:p},h),v=f.route;if(!y&&p&&n&&!o[o.length-1].route.index&&(y=fs({path:f.relativePath,caseSensitive:f.caseSensitive,end:!1},h)),!y)return null;Object.assign(l,y.params),u.push({params:l,pathname:An([s,y.pathname]),pathnameBase:Dk(An([s,y.pathnameBase])),route:v}),y.pathnameBase!=="/"&&(s=An([s,y.pathnameBase]))}return u}function fs(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,o]=Ek(e.path,e.caseSensitive,e.end),l=t.match(n);if(!l)return null;let s=l[0],u=s.replace(/(.)\/+$/,"$1"),d=l.slice(1);return{params:o.reduce((p,{paramName:h,isOptional:y},v)=>{if(h==="*"){let b=d[v]||"";u=s.slice(0,s.length-b.length).replace(/(.)\/+$/,"$1")}const x=d[v];return y&&!x?p[h]=void 0:p[h]=(x||"").replace(/%2F/g,"/"),p},{}),pathname:s,pathnameBase:u,pattern:e}}function Ek(e,t=!1,n=!0){bn(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let o=[],l="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,d,f)=>(o.push({paramName:d,isOptional:f!=null}),f?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(o.push({paramName:"*"}),l+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?l+="\\/*$":e!==""&&e!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),o]}function Pk(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return bn(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function zn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,o=e.charAt(n);return o&&o!=="/"?null:e.slice(n)||"/"}function Tk(e,t="/"){let{pathname:n,search:o="",hash:l=""}=typeof e=="string"?Qo(e):e;return{pathname:n?n.startsWith("/")?n:Ck(n,t):t,search:Nk(o),hash:Rk(l)}}function Ck(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(l=>{l===".."?n.length>1&&n.pop():l!=="."&&n.push(l)}),n.length>1?n.join("/"):"/"}function Oc(e,t,n,o){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Mk(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Dy(e){let t=Mk(e);return t.map((n,o)=>o===t.length-1?n.pathname:n.pathnameBase)}function Ny(e,t,n,o=!1){let l;typeof e=="string"?l=Qo(e):(l={...e},Ke(!l.pathname||!l.pathname.includes("?"),Oc("?","pathname","search",l)),Ke(!l.pathname||!l.pathname.includes("#"),Oc("#","pathname","hash",l)),Ke(!l.search||!l.search.includes("#"),Oc("#","search","hash",l)));let s=e===""||l.pathname==="",u=s?"/":l.pathname,d;if(u==null)d=n;else{let y=t.length-1;if(!o&&u.startsWith("..")){let v=u.split("/");for(;v[0]==="..";)v.shift(),y-=1;l.pathname=v.join("/")}d=y>=0?t[y]:"/"}let f=Tk(l,d),p=u&&u!=="/"&&u.endsWith("/"),h=(s||u===".")&&n.endsWith("/");return!f.pathname.endsWith("/")&&(p||h)&&(f.pathname+="/"),f}var An=e=>e.join("/").replace(/\/\/+/g,"/"),Dk=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Nk=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Rk=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Lk(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var Ry=["POST","PUT","PATCH","DELETE"];new Set(Ry);var Ak=["GET",...Ry];new Set(Ak);var Go=k.createContext(null);Go.displayName="DataRouter";var Cs=k.createContext(null);Cs.displayName="DataRouterState";var Ly=k.createContext({isTransitioning:!1});Ly.displayName="ViewTransition";var zk=k.createContext(new Map);zk.displayName="Fetchers";var Ik=k.createContext(null);Ik.displayName="Await";var _n=k.createContext(null);_n.displayName="Navigation";var El=k.createContext(null);El.displayName="Location";var Kn=k.createContext({outlet:null,matches:[],isDataRoute:!1});Kn.displayName="Route";var sf=k.createContext(null);sf.displayName="RouteError";function jk(e,{relative:t}={}){Ke(Pl(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:o}=k.useContext(_n),{hash:l,pathname:s,search:u}=Tl(e,{relative:t}),d=s;return n!=="/"&&(d=s==="/"?n:An([n,s])),o.createHref({pathname:d,search:u,hash:l})}function Pl(){return k.useContext(El)!=null}function qr(){return Ke(Pl(),"useLocation() may be used only in the context of a <Router> component."),k.useContext(El).location}var Ay="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function zy(e){k.useContext(_n).static||k.useLayoutEffect(e)}function Fk(){let{isDataRoute:e}=k.useContext(Kn);return e?Zk():Ok()}function Ok(){Ke(Pl(),"useNavigate() may be used only in the context of a <Router> component.");let e=k.useContext(Go),{basename:t,navigator:n}=k.useContext(_n),{matches:o}=k.useContext(Kn),{pathname:l}=qr(),s=JSON.stringify(Dy(o)),u=k.useRef(!1);return zy(()=>{u.current=!0}),k.useCallback((f,p={})=>{if(bn(u.current,Ay),!u.current)return;if(typeof f=="number"){n.go(f);return}let h=Ny(f,JSON.parse(s),l,p.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:An([t,h.pathname])),(p.replace?n.replace:n.push)(h,p.state,p)},[t,n,s,l,e])}k.createContext(null);function Tl(e,{relative:t}={}){let{matches:n}=k.useContext(Kn),{pathname:o}=qr(),l=JSON.stringify(Dy(n));return k.useMemo(()=>Ny(e,JSON.parse(l),o,t==="path"),[e,l,o,t])}function Kk(e,t){return Iy(e,t)}function Iy(e,t,n,o){var $;Ke(Pl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l}=k.useContext(_n),{matches:s}=k.useContext(Kn),u=s[s.length-1],d=u?u.params:{},f=u?u.pathname:"/",p=u?u.pathnameBase:"/",h=u&&u.route;{let E=h&&h.path||"";jy(f,!h||E.endsWith("*")||E.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${f}" (under <Route path="${E}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${E}"> to <Route path="${E==="/"?"*":`${E}/*`}">.`)}let y=qr(),v;if(t){let E=typeof t=="string"?Qo(t):t;Ke(p==="/"||(($=E.pathname)==null?void 0:$.startsWith(p)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${E.pathname}" was given in the \`location\` prop.`),v=E}else v=y;let x=v.pathname||"/",b=x;if(p!=="/"){let E=p.replace(/^\//,"").split("/");b="/"+x.replace(/^\//,"").split("/").slice(E.length).join("/")}let _=Ty(e,{pathname:b});bn(h||_!=null,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),bn(_==null||_[_.length-1].route.element!==void 0||_[_.length-1].route.Component!==void 0||_[_.length-1].route.lazy!==void 0,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let S=Wk(_&&_.map(E=>Object.assign({},E,{params:Object.assign({},d,E.params),pathname:An([p,l.encodeLocation?l.encodeLocation(E.pathname).pathname:E.pathname]),pathnameBase:E.pathnameBase==="/"?p:An([p,l.encodeLocation?l.encodeLocation(E.pathnameBase).pathname:E.pathnameBase])})),s,n,o);return t&&S?k.createElement(El.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...v},navigationType:"POP"}},S):S}function Vk(){let e=qk(),t=Lk(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:o},s={padding:"2px 4px",backgroundColor:o},u=null;return console.error("Error handled by React Router default ErrorBoundary:",e),u=k.createElement(k.Fragment,null,k.createElement("p",null,"💿 Hey developer 👋"),k.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",k.createElement("code",{style:s},"ErrorBoundary")," or"," ",k.createElement("code",{style:s},"errorElement")," prop on your route.")),k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},t),n?k.createElement("pre",{style:l},n):null,u)}var Bk=k.createElement(Vk,null),Uk=class extends k.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?k.createElement(Kn.Provider,{value:this.props.routeContext},k.createElement(sf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Hk({routeContext:e,match:t,children:n}){let o=k.useContext(Go);return o&&o.static&&o.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=t.route.id),k.createElement(Kn.Provider,{value:e},n)}function Wk(e,t=[],n=null,o=null){if(e==null){if(!n)return null;if(n.errors)e=n.matches;else if(t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let l=e,s=n==null?void 0:n.errors;if(s!=null){let f=l.findIndex(p=>p.route.id&&(s==null?void 0:s[p.route.id])!==void 0);Ke(f>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(s).join(",")}`),l=l.slice(0,Math.min(l.length,f+1))}let u=!1,d=-1;if(n)for(let f=0;f<l.length;f++){let p=l[f];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(d=f),p.route.id){let{loaderData:h,errors:y}=n,v=p.route.loader&&!h.hasOwnProperty(p.route.id)&&(!y||y[p.route.id]===void 0);if(p.route.lazy||v){u=!0,d>=0?l=l.slice(0,d+1):l=[l[0]];break}}}return l.reduceRight((f,p,h)=>{let y,v=!1,x=null,b=null;n&&(y=s&&p.route.id?s[p.route.id]:void 0,x=p.route.errorElement||Bk,u&&(d<0&&h===0?(jy("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),v=!0,b=null):d===h&&(v=!0,b=p.route.hydrateFallbackElement||null)));let _=t.concat(l.slice(0,h+1)),S=()=>{let $;return y?$=x:v?$=b:p.route.Component?$=k.createElement(p.route.Component,null):p.route.element?$=p.route.element:$=f,k.createElement(Hk,{match:p,routeContext:{outlet:f,matches:_,isDataRoute:n!=null},children:$})};return n&&(p.route.ErrorBoundary||p.route.errorElement||h===0)?k.createElement(Uk,{location:n.location,revalidation:n.revalidation,component:x,error:y,children:S(),routeContext:{outlet:null,matches:_,isDataRoute:!0}}):S()},null)}function uf(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Yk(e){let t=k.useContext(Go);return Ke(t,uf(e)),t}function Qk(e){let t=k.useContext(Cs);return Ke(t,uf(e)),t}function Gk(e){let t=k.useContext(Kn);return Ke(t,uf(e)),t}function cf(e){let t=Gk(e),n=t.matches[t.matches.length-1];return Ke(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function Xk(){return cf("useRouteId")}function qk(){var o;let e=k.useContext(sf),t=Qk("useRouteError"),n=cf("useRouteError");return e!==void 0?e:(o=t.errors)==null?void 0:o[n]}function Zk(){let{router:e}=Yk("useNavigate"),t=cf("useNavigate"),n=k.useRef(!1);return zy(()=>{n.current=!0}),k.useCallback(async(l,s={})=>{bn(n.current,Ay),n.current&&(typeof l=="number"?e.navigate(l):await e.navigate(l,{fromRouteId:t,...s}))},[e,t])}var dv={};function jy(e,t,n){!t&&!dv[e]&&(dv[e]=!0,bn(!1,n))}k.memo(Jk);function Jk({routes:e,future:t,state:n}){return Iy(e,void 0,n,t)}function Xi(e){Ke(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function e$({basename:e="/",children:t=null,location:n,navigationType:o="POP",navigator:l,static:s=!1}){Ke(!Pl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let u=e.replace(/^\/*/,"/"),d=k.useMemo(()=>({basename:u,navigator:l,static:s,future:{}}),[u,l,s]);typeof n=="string"&&(n=Qo(n));let{pathname:f="/",search:p="",hash:h="",state:y=null,key:v="default"}=n,x=k.useMemo(()=>{let b=zn(f,u);return b==null?null:{location:{pathname:b,search:p,hash:h,state:y,key:v},navigationType:o}},[u,f,p,h,y,v,o]);return bn(x!=null,`<Router basename="${u}"> is not able to match the URL "${f}${p}${h}" because it does not start with the basename, so the <Router> won't render anything.`),x==null?null:k.createElement(_n.Provider,{value:d},k.createElement(El.Provider,{children:t,value:x}))}function t$({children:e,location:t}){return Kk(kd(e),t)}function kd(e,t=[]){let n=[];return k.Children.forEach(e,(o,l)=>{if(!k.isValidElement(o))return;let s=[...t,l];if(o.type===k.Fragment){n.push.apply(n,kd(o.props.children,s));return}Ke(o.type===Xi,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ke(!o.props.index||!o.props.children,"An index route cannot have child routes.");let u={id:o.props.id||s.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(u.children=kd(o.props.children,s)),n.push(u)}),n}var is="get",ls="application/x-www-form-urlencoded";function Ms(e){return e!=null&&typeof e.tagName=="string"}function n$(e){return Ms(e)&&e.tagName.toLowerCase()==="button"}function r$(e){return Ms(e)&&e.tagName.toLowerCase()==="form"}function o$(e){return Ms(e)&&e.tagName.toLowerCase()==="input"}function i$(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function l$(e,t){return e.button===0&&(!t||t==="_self")&&!i$(e)}var Ua=null;function a$(){if(Ua===null)try{new FormData(document.createElement("form"),0),Ua=!1}catch{Ua=!0}return Ua}var s$=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Kc(e){return e!=null&&!s$.has(e)?(bn(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ls}"`),null):e}function u$(e,t){let n,o,l,s,u;if(r$(e)){let d=e.getAttribute("action");o=d?zn(d,t):null,n=e.getAttribute("method")||is,l=Kc(e.getAttribute("enctype"))||ls,s=new FormData(e)}else if(n$(e)||o$(e)&&(e.type==="submit"||e.type==="image")){let d=e.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let f=e.getAttribute("formaction")||d.getAttribute("action");if(o=f?zn(f,t):null,n=e.getAttribute("formmethod")||d.getAttribute("method")||is,l=Kc(e.getAttribute("formenctype"))||Kc(d.getAttribute("enctype"))||ls,s=new FormData(d,e),!a$()){let{name:p,type:h,value:y}=e;if(h==="image"){let v=p?`${p}.`:"";s.append(`${v}x`,"0"),s.append(`${v}y`,"0")}else p&&s.append(p,y)}}else{if(Ms(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=is,o=null,l=ls,u=e}return s&&l==="text/plain"&&(u=s,s=void 0),{action:o,method:n.toLowerCase(),encType:l,formData:s,body:u}}function df(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}async function c$(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function d$(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function f$(e,t,n){let o=await Promise.all(e.map(async l=>{let s=t.routes[l.route.id];if(s){let u=await c$(s,n);return u.links?u.links():[]}return[]}));return v$(o.flat(1).filter(d$).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function fv(e,t,n,o,l,s){let u=(f,p)=>n[p]?f.route.id!==n[p].route.id:!0,d=(f,p)=>{var h;return n[p].pathname!==f.pathname||((h=n[p].route.path)==null?void 0:h.endsWith("*"))&&n[p].params["*"]!==f.params["*"]};return s==="assets"?t.filter((f,p)=>u(f,p)||d(f,p)):s==="data"?t.filter((f,p)=>{var y;let h=o.routes[f.route.id];if(!h||!h.hasLoader)return!1;if(u(f,p)||d(f,p))return!0;if(f.route.shouldRevalidate){let v=f.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:((y=n[0])==null?void 0:y.params)||{},nextUrl:new URL(e,window.origin),nextParams:f.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function p$(e,t,{includeHydrateFallback:n}={}){return m$(e.map(o=>{let l=t.routes[o.route.id];if(!l)return[];let s=[l.module];return l.clientActionModule&&(s=s.concat(l.clientActionModule)),l.clientLoaderModule&&(s=s.concat(l.clientLoaderModule)),n&&l.hydrateFallbackModule&&(s=s.concat(l.hydrateFallbackModule)),l.imports&&(s=s.concat(l.imports)),s}).flat(1))}function m$(e){return[...new Set(e)]}function h$(e){let t={},n=Object.keys(e).sort();for(let o of n)t[o]=e[o];return t}function v$(e,t){let n=new Set;return new Set(t),e.reduce((o,l)=>{let s=JSON.stringify(h$(l));return n.has(s)||(n.add(s),o.push({key:s,link:l})),o},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var g$=new Set([100,101,204,205]);function y$(e,t){let n=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return n.pathname==="/"?n.pathname="_root.data":t&&zn(n.pathname,t)==="/"?n.pathname=`${t.replace(/\/$/,"")}/_root.data`:n.pathname=`${n.pathname.replace(/\/$/,"")}.data`,n}function Fy(){let e=k.useContext(Go);return df(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function x$(){let e=k.useContext(Cs);return df(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var ff=k.createContext(void 0);ff.displayName="FrameworkContext";function Oy(){let e=k.useContext(ff);return df(e,"You must render this element inside a <HydratedRouter> element"),e}function b$(e,t){let n=k.useContext(ff),[o,l]=k.useState(!1),[s,u]=k.useState(!1),{onFocus:d,onBlur:f,onMouseEnter:p,onMouseLeave:h,onTouchStart:y}=t,v=k.useRef(null);k.useEffect(()=>{if(e==="render"&&u(!0),e==="viewport"){let _=$=>{$.forEach(E=>{u(E.isIntersecting)})},S=new IntersectionObserver(_,{threshold:.5});return v.current&&S.observe(v.current),()=>{S.disconnect()}}},[e]),k.useEffect(()=>{if(o){let _=setTimeout(()=>{u(!0)},100);return()=>{clearTimeout(_)}}},[o]);let x=()=>{l(!0)},b=()=>{l(!1),u(!1)};return n?e!=="intent"?[s,v,{}]:[s,v,{onFocus:Fi(d,x),onBlur:Fi(f,b),onMouseEnter:Fi(p,x),onMouseLeave:Fi(h,b),onTouchStart:Fi(y,x)}]:[!1,v,{}]}function Fi(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function w$({page:e,...t}){let{router:n}=Fy(),o=k.useMemo(()=>Ty(n.routes,e,n.basename),[n.routes,e,n.basename]);return o?k.createElement(S$,{page:e,matches:o,...t}):null}function _$(e){let{manifest:t,routeModules:n}=Oy(),[o,l]=k.useState([]);return k.useEffect(()=>{let s=!1;return f$(e,t,n).then(u=>{s||l(u)}),()=>{s=!0}},[e,t,n]),o}function S$({page:e,matches:t,...n}){let o=qr(),{manifest:l,routeModules:s}=Oy(),{basename:u}=Fy(),{loaderData:d,matches:f}=x$(),p=k.useMemo(()=>fv(e,t,f,l,o,"data"),[e,t,f,l,o]),h=k.useMemo(()=>fv(e,t,f,l,o,"assets"),[e,t,f,l,o]),y=k.useMemo(()=>{if(e===o.pathname+o.search+o.hash)return[];let b=new Set,_=!1;if(t.forEach($=>{var N;let E=l.routes[$.route.id];!E||!E.hasLoader||(!p.some(O=>O.route.id===$.route.id)&&$.route.id in d&&((N=s[$.route.id])!=null&&N.shouldRevalidate)||E.hasClientLoader?_=!0:b.add($.route.id))}),b.size===0)return[];let S=y$(e,u);return _&&b.size>0&&S.searchParams.set("_routes",t.filter($=>b.has($.route.id)).map($=>$.route.id).join(",")),[S.pathname+S.search]},[u,d,o,l,p,t,e,s]),v=k.useMemo(()=>p$(h,l),[h,l]),x=_$(h);return k.createElement(k.Fragment,null,y.map(b=>k.createElement("link",{key:b,rel:"prefetch",as:"fetch",href:b,...n})),v.map(b=>k.createElement("link",{key:b,rel:"modulepreload",href:b,...n})),x.map(({key:b,link:_})=>k.createElement("link",{key:b,..._})))}function k$(...e){return t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var Ky=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Ky&&(window.__reactRouterVersion="7.6.2")}catch{}function $$({basename:e,children:t,window:n}){let o=k.useRef();o.current==null&&(o.current=dk({window:n,v5Compat:!0}));let l=o.current,[s,u]=k.useState({action:l.action,location:l.location}),d=k.useCallback(f=>{k.startTransition(()=>u(f))},[u]);return k.useLayoutEffect(()=>l.listen(d),[l,d]),k.createElement(e$,{basename:e,children:t,location:s.location,navigationType:s.action,navigator:l})}var Vy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,nl=k.forwardRef(function({onClick:t,discover:n="render",prefetch:o="none",relative:l,reloadDocument:s,replace:u,state:d,target:f,to:p,preventScrollReset:h,viewTransition:y,...v},x){let{basename:b}=k.useContext(_n),_=typeof p=="string"&&Vy.test(p),S,$=!1;if(typeof p=="string"&&_&&(S=p,Ky))try{let K=new URL(window.location.href),J=p.startsWith("//")?new URL(K.protocol+p):new URL(p),W=zn(J.pathname,b);J.origin===K.origin&&W!=null?p=W+J.search+J.hash:$=!0}catch{bn(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let E=jk(p,{relative:l}),[N,O,M]=b$(o,v),I=C$(p,{replace:u,state:d,target:f,preventScrollReset:h,relative:l,viewTransition:y});function z(K){t&&t(K),K.defaultPrevented||I(K)}let P=k.createElement("a",{...v,...M,href:S||E,onClick:$||s?t:z,ref:k$(x,O),target:f,"data-discover":!_&&n==="render"?"true":void 0});return N&&!_?k.createElement(k.Fragment,null,P,k.createElement(w$,{page:E})):P});nl.displayName="Link";var E$=k.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:o="",end:l=!1,style:s,to:u,viewTransition:d,children:f,...p},h){let y=Tl(u,{relative:p.relative}),v=qr(),x=k.useContext(Cs),{navigator:b,basename:_}=k.useContext(_n),S=x!=null&&L$(y)&&d===!0,$=b.encodeLocation?b.encodeLocation(y).pathname:y.pathname,E=v.pathname,N=x&&x.navigation&&x.navigation.location?x.navigation.location.pathname:null;n||(E=E.toLowerCase(),N=N?N.toLowerCase():null,$=$.toLowerCase()),N&&_&&(N=zn(N,_)||N);const O=$!=="/"&&$.endsWith("/")?$.length-1:$.length;let M=E===$||!l&&E.startsWith($)&&E.charAt(O)==="/",I=N!=null&&(N===$||!l&&N.startsWith($)&&N.charAt($.length)==="/"),z={isActive:M,isPending:I,isTransitioning:S},P=M?t:void 0,K;typeof o=="function"?K=o(z):K=[o,M?"active":null,I?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let J=typeof s=="function"?s(z):s;return k.createElement(nl,{...p,"aria-current":P,className:K,ref:h,style:J,to:u,viewTransition:d},typeof f=="function"?f(z):f)});E$.displayName="NavLink";var P$=k.forwardRef(({discover:e="render",fetcherKey:t,navigate:n,reloadDocument:o,replace:l,state:s,method:u=is,action:d,onSubmit:f,relative:p,preventScrollReset:h,viewTransition:y,...v},x)=>{let b=N$(),_=R$(d,{relative:p}),S=u.toLowerCase()==="get"?"get":"post",$=typeof d=="string"&&Vy.test(d),E=N=>{if(f&&f(N),N.defaultPrevented)return;N.preventDefault();let O=N.nativeEvent.submitter,M=(O==null?void 0:O.getAttribute("formmethod"))||u;b(O||N.currentTarget,{fetcherKey:t,method:M,navigate:n,replace:l,state:s,relative:p,preventScrollReset:h,viewTransition:y})};return k.createElement("form",{ref:x,method:S,action:_,onSubmit:o?f:E,...v,"data-discover":!$&&e==="render"?"true":void 0})});P$.displayName="Form";function T$(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function By(e){let t=k.useContext(Go);return Ke(t,T$(e)),t}function C$(e,{target:t,replace:n,state:o,preventScrollReset:l,relative:s,viewTransition:u}={}){let d=Fk(),f=qr(),p=Tl(e,{relative:s});return k.useCallback(h=>{if(l$(h,t)){h.preventDefault();let y=n!==void 0?n:ul(f)===ul(p);d(e,{replace:y,state:o,preventScrollReset:l,relative:s,viewTransition:u})}},[f,d,p,n,o,t,e,l,s,u])}var M$=0,D$=()=>`__${String(++M$)}__`;function N$(){let{router:e}=By("useSubmit"),{basename:t}=k.useContext(_n),n=Xk();return k.useCallback(async(o,l={})=>{let{action:s,method:u,encType:d,formData:f,body:p}=u$(o,t);if(l.navigate===!1){let h=l.fetcherKey||D$();await e.fetch(h,n,l.action||s,{preventScrollReset:l.preventScrollReset,formData:f,body:p,formMethod:l.method||u,formEncType:l.encType||d,flushSync:l.flushSync})}else await e.navigate(l.action||s,{preventScrollReset:l.preventScrollReset,formData:f,body:p,formMethod:l.method||u,formEncType:l.encType||d,replace:l.replace,state:l.state,fromRouteId:n,flushSync:l.flushSync,viewTransition:l.viewTransition})},[e,t,n])}function R$(e,{relative:t}={}){let{basename:n}=k.useContext(_n),o=k.useContext(Kn);Ke(o,"useFormAction must be used inside a RouteContext");let[l]=o.matches.slice(-1),s={...Tl(e||".",{relative:t})},u=qr();if(e==null){s.search=u.search;let d=new URLSearchParams(s.search),f=d.getAll("index");if(f.some(h=>h==="")){d.delete("index"),f.filter(y=>y).forEach(y=>d.append("index",y));let h=d.toString();s.search=h?`?${h}`:""}}return(!e||e===".")&&l.route.index&&(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(s.pathname=s.pathname==="/"?n:An([n,s.pathname])),ul(s)}function L$(e,t={}){let n=k.useContext(Ly);Ke(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=By("useViewTransitionState"),l=Tl(e,{relative:t.relative});if(!n.isTransitioning)return!1;let s=zn(n.currentLocation.pathname,o)||n.currentLocation.pathname,u=zn(n.nextLocation.pathname,o)||n.nextLocation.pathname;return fs(l.pathname,u)!=null||fs(l.pathname,s)!=null}[...g$];function an(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,o=Object.getOwnPropertySymbols(e);l<o.length;l++)t.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(e,o[l])&&(n[o[l]]=e[o[l]]);return n}function Vc(e,t,n,o){function l(s){return s instanceof n?s:new n(function(u){u(s)})}return new(n||(n=Promise))(function(s,u){function d(h){try{p(o.next(h))}catch(y){u(y)}}function f(h){try{p(o.throw(h))}catch(y){u(y)}}function p(h){h.done?s(h.value):l(h.value).then(d,f)}p((o=o.apply(e,t||[])).next())})}function Uy(e){var t,n,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e)){var l=e.length;for(t=0;t<l;t++)e[t]&&(n=Uy(e[t]))&&(o&&(o+=" "),o+=n)}else for(n in e)e[n]&&(o&&(o+=" "),o+=n);return o}function Ye(){for(var e,t,n=0,o="",l=arguments.length;n<l;n++)(e=arguments[n])&&(t=Uy(e))&&(o&&(o+=" "),o+=t);return o}function lt(e,t){t===void 0&&(t={});var n=t.insertAt;if(e&&typeof document<"u"){var o=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css",n==="top"&&o.firstChild?o.insertBefore(l,o.firstChild):o.appendChild(l),l.styleSheet?l.styleSheet.cssText=e:l.appendChild(document.createTextNode(e))}}var Bc={icon:"icon-module_icon__UzNYn","icon-filled":"icon-module_icon-filled__tkdb0"};lt(`.icon-module_icon__UzNYn {\r
  display: inline-flex;\r
  & i {\r
    font-size: var(--md-icon-size, 24px);\r
    width: var(--md-icon-size, 24px);\r
    height: var(--md-icon-size, 24px);\r
    color: inherit;\r
    font-variation-settings: inherit;\r
    font-weight: 400;\r
    font-family: var(--md-icon-font, Material Symbols Outlined);\r
    display: inline-flex;\r
    font-style: normal;\r
    place-items: center;\r
    place-content: center;\r
    line-height: 1;\r
    overflow: hidden;\r
    letter-spacing: normal;\r
    text-transform: none;\r
    user-select: none;\r
    white-space: nowrap;\r
    overflow-wrap: normal;\r
    flex-shrink: 0;\r
    -webkit-font-smoothing: antialiased;\r
    text-rendering: optimizelegibility;\r
  }\r
}\r
\r
.icon-module_icon-filled__tkdb0 i {\r
  font-variation-settings: 'FILL' 1;\r
}`);const Ct=e=>{var{className:t,children:n,fill:o}=e,l=an(e,["className","children","fill"]);return D.jsxs(ie.Suspense,{fallback:D.jsx("span",{className:Ye(Bc.icon,t),children:D.jsx("span",{style:{display:"block",width:"var(--md-icon-size,24px)",height:"var(--md-icon-size,24px)"}})}),children:[D.jsx("link",{rel:"stylesheet",precedence:"default",href:"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:FILL@0..1&display=swap"}),D.jsx("span",Object.assign({},l,{className:Ye(Bc.icon,o&&Bc["icon-filled"],t),children:D.jsx("i",{"aria-hidden":"true",children:n})}))]})};Ct.displayName="Actify.Icon";function Bo(...e){return(...t)=>{for(let n of e)typeof n=="function"&&n(...t)}}const Re=typeof document<"u"?ie.useLayoutEffect:()=>{};function it(e){const t=k.useRef(null);return Re(()=>{t.current=e},[e]),k.useCallback((...n)=>{const o=t.current;return o==null?void 0:o(...n)},[])}function A$(e){let[t,n]=k.useState(e),o=k.useRef(null),l=it(()=>{if(!o.current)return;let u=o.current.next();u.done?o.current=null:t===u.value?l():n(u.value)});Re(()=>{o.current&&l()});let s=it(u=>{o.current=u(t),l()});return[t,s]}const $d={prefix:String(Math.round(1e10*Math.random())),current:0},pv=ie.createContext($d),z$=ie.createContext(!1);let I$=!!(typeof window<"u"&&window.document&&window.document.createElement),Uc=new WeakMap;const j$=typeof ie.useId=="function"?function(e){let t=ie.useId(),[n]=k.useState(Ds()),o=n?"react-aria":`react-aria${$d.prefix}`;return e||`${o}-${t}`}:function(e){let t=k.useContext(pv);t!==$d||I$||console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");let n=function(l=!1){let s=k.useContext(pv),u=k.useRef(null);if(u.current===null&&!l){var d,f;let p=(f=ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)===null||f===void 0||(d=f.ReactCurrentOwner)===null||d===void 0?void 0:d.current;if(p){let h=Uc.get(p);h==null?Uc.set(p,{id:s.current,state:p.memoizedState}):p.memoizedState!==h.state&&(s.current=h.id,Uc.delete(p))}u.current=++s.current}return u.current}(!!e),o=`react-aria${t.prefix}`;return e||`${o}-${n}`};function F$(){return!1}function O$(){return!0}function K$(e){return()=>{}}function Ds(){return typeof ie.useSyncExternalStore=="function"?ie.useSyncExternalStore(K$,F$,O$):k.useContext(z$)}let qi,V$=!!(typeof window<"u"&&window.document&&window.document.createElement),Uo=new Map;function Mt(e){let[t,n]=k.useState(e),o=k.useRef(null),l=j$(t),s=k.useRef(null);if(qi&&qi.register(s,l),V$){const u=Uo.get(l);u&&!u.includes(o)?u.push(o):Uo.set(l,[o])}return Re(()=>{let u=l;return()=>{qi&&qi.unregister(s),Uo.delete(u)}},[l]),k.useEffect(()=>{let u=o.current;return u&&n(u),()=>{u&&(o.current=null)}}),l}function B$(e,t){if(e===t)return e;let n=Uo.get(e);if(n)return n.forEach(l=>l.current=t),t;let o=Uo.get(t);return o?(o.forEach(l=>l.current=e),e):t}function rl(e=[]){let t=Mt(),[n,o]=A$(t),l=k.useCallback(()=>{o(function*(){yield t,yield document.getElementById(t)?t:void 0})},[t,o]);return Re(l,[t,l,...e]),n}typeof FinalizationRegistry<"u"&&(qi=new FinalizationRegistry(e=>{Uo.delete(e)}));function we(...e){let t={...e[0]};for(let n=1;n<e.length;n++){let o=e[n];for(let l in o){let s=t[l],u=o[l];typeof s=="function"&&typeof u=="function"&&l[0]==="o"&&l[1]==="n"&&l.charCodeAt(2)>=65&&l.charCodeAt(2)<=90?t[l]=Bo(s,u):l!=="className"&&l!=="UNSAFE_className"||typeof s!="string"||typeof u!="string"?l==="id"&&s&&u?t.id=B$(s,u):t[l]=u!==void 0?u:s:t[l]=Ye(s,u)}}return t}function U$(...e){return e.length===1&&e[0]?e[0]:t=>{for(let n of e)typeof n=="function"?n(t):n!=null&&(n.current=t)}}function pf(e){const t=k.useRef(null);return k.useMemo(()=>({get current(){return t.current},set current(n){t.current=n,typeof e=="function"?e(n):e&&(e.current=n)}}),[e])}const H$=Symbol("default");function W$(e){let{className:t,style:n,children:o,defaultClassName:l,defaultChildren:s,defaultStyle:u,values:d}=e;return k.useMemo(()=>{let f,p,h;return f=typeof t=="function"?t({...d,defaultClassName:l}):t,p=typeof n=="function"?n({...d,defaultStyle:u||{}}):n,h=typeof o=="function"?o({...d,defaultChildren:s}):o??s,{className:f??l,style:p||u?{...u,...p}:void 0,children:h??s,"data-rac":""}},[t,n,o,l,s,u,d])}function Y$(e,t){let n=k.useContext(e);if(t===null)return null;if(n&&typeof n=="object"&&"slots"in n&&n.slots){let o=t||H$;if(!n.slots[o]){let l=new Intl.ListFormat().format(Object.keys(n.slots).map(s=>`"${s}"`));throw new Error(`${t?`Invalid slot "${t}".`:"A slot prop is required."} Valid slot names are ${l}.`)}return n.slots[o]}return n}function Q$(e,t,n){let o=Y$(n,e.slot)||{},{ref:l,...s}=o,u=pf(k.useMemo(()=>U$(t,l),[t,l])),d=we(s,e);return"style"in s&&s.style&&"style"in e&&e.style&&(typeof s.style=="function"||typeof e.style=="function"?d.style=f=>{let p=typeof s.style=="function"?s.style(f):s.style,h={...f.defaultStyle,...p},y=typeof e.style=="function"?e.style({...f,defaultStyle:h}):e.style;return{...h,...y}}:d.style={...s.style,...e.style}),[d,u]}var mv={shadow:"elevation-module_shadow__Vsh7b",disabled:"elevation-module_disabled__La41s"};lt(`.elevation-module_shadow__Vsh7b {\r
  border-radius: inherit;\r
  inset: 0px;\r
  position: absolute;\r
  transition-duration: inherit;\r
  transition-property: inherit;\r
  transition-timing-function: inherit;\r
  --md-elevation-level: var(--_container-elevation);\r
  --md-elevation-shadow-color: var(--_container-shadow-color);\r
  transition-duration: 280ms;\r
  display: flex;\r
  pointer-events: none;\r
  &:before,\r
  &:after {\r
    border-radius: inherit;\r
    inset: 0px;\r
    position: absolute;\r
    transition-duration: inherit;\r
    transition-property: inherit;\r
    transition-timing-function: inherit;\r
    content: '';\r
    transition-property: box-shadow, opacity;\r
    --_level: var(--md-elevation-level, 0);\r
    --_shadow-color: var(\r
      --md-elevation-shadow-color,\r
      var(--md-sys-color-shadow, #000)\r
    );\r
  }\r
  &:before {\r
    box-shadow: 0px\r
      calc(\r
        1px *\r
          (\r
            clamp(0, var(--_level), 1) + clamp(0, var(--_level) - 3, 1) + 2 *\r
              clamp(0, var(--_level) - 4, 1)\r
          )\r
      )\r
      calc(\r
        1px *\r
          (\r
            2 * clamp(0, var(--_level), 1) + clamp(0, var(--_level) - 2, 1) +\r
              clamp(0, var(--_level) - 4, 1)\r
          )\r
      )\r
      0px var(--_shadow-color);\r
    opacity: 0.3;\r
  }\r
  &:after {\r
    box-shadow: 0px\r
      calc(\r
        1px *\r
          (\r
            clamp(0, var(--_level), 1) + clamp(0, var(--_level) - 1, 1) + 2 *\r
              clamp(0, var(--_level) - 2, 3)\r
          )\r
      )\r
      calc(\r
        1px *\r
          (3 * clamp(0, var(--_level), 2) + 2 * clamp(0, var(--_level) - 2, 3))\r
      )\r
      calc(\r
        1px * (clamp(0, var(--_level), 4) + 2 * clamp(0, var(--_level) - 4, 1))\r
      )\r
      var(--_shadow-color);\r
    opacity: 0.15;\r
  }\r
}\r
\r
.elevation-module_disabled__La41s .elevation-module_shadow__Vsh7b {\r
  transition: none 0s ease 0s;\r
  --md-elevation-level: var(--_disabled-container-elevation);\r
}\r
`);const Hy=e=>{var{disabled:t=!1}=e,n=an(e,["disabled"]);const o=Ye(mv.shadow,t&&mv.disabled);return D.jsx("span",Object.assign({},n,{"aria-hidden":"true",className:o}))};Hy.displayName="Actify.Elevation";var mf=Py();const G$=lf(mf),Wy=k.createContext({});function X$(e){const t=k.useRef(null);return t.current===null&&(t.current=e()),t.current}const hf=typeof window<"u",q$=hf?k.useLayoutEffect:k.useEffect,vf=k.createContext(null),Yy=k.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});function Z$(e=!0){const t=k.useContext(vf);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:o,register:l}=t,s=k.useId();k.useEffect(()=>{if(e)return l(s)},[e]);const u=k.useCallback(()=>e&&o&&o(s),[s,o,e]);return!n&&o?[!1,u]:[!0]}function J$(e){if(typeof Proxy>"u")return e;const t=new Map;return new Proxy((...n)=>e(...n),{get:(n,o)=>o==="create"?e:(t.has(o)||t.set(o,e(o)),t.get(o))})}function Ns(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}function hv(e){const t=[{},{}];return e==null||e.values.forEach((n,o)=>{t[0][o]=n.get(),t[1][o]=n.getVelocity()}),t}function gf(e,t,n,o){if(typeof t=="function"){const[l,s]=hv(o);t=t(n!==void 0?n:e.custom,l,s)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[l,s]=hv(o);t=t(n!==void 0?n:e.custom,l,s)}return t}function cl(e,t,n){const o=e.getProps();return gf(o,t,n!==void 0?n:o.custom,e)}function yf(e,t){return(e==null?void 0:e[t])??(e==null?void 0:e.default)??e}const qt=e=>e,Ha=["read","resolveKeyframes","update","preRender","render","postRender"],vv={value:null};function eE(e,t){let n=new Set,o=new Set,l=!1,s=!1;const u=new WeakSet;let d={delta:0,timestamp:0,isProcessing:!1},f=0;function p(y){u.has(y)&&(h.schedule(y),e()),f++,y(d)}const h={schedule:(y,v=!1,x=!1)=>{const b=x&&l?n:o;return v&&u.add(y),b.has(y)||b.add(y),y},cancel:y=>{o.delete(y),u.delete(y)},process:y=>{d=y,l?s=!0:(l=!0,[n,o]=[o,n],n.forEach(p),t&&vv.value&&vv.value.frameloop[t].push(f),f=0,n.clear(),l=!1,s&&(s=!1,h.process(y)))}};return h}function Qy(e,t){let n=!1,o=!0;const l={delta:0,timestamp:0,isProcessing:!1},s=()=>n=!0,u=Ha.reduce((b,_)=>(b[_]=eE(s,t?_:void 0),b),{}),{read:d,resolveKeyframes:f,update:p,preRender:h,render:y,postRender:v}=u,x=()=>{const b=performance.now();n=!1,l.delta=o?1e3/60:Math.max(Math.min(b-l.timestamp,40),1),l.timestamp=b,l.isProcessing=!0,d.process(l),f.process(l),p.process(l),h.process(l),y.process(l),v.process(l),l.isProcessing=!1,n&&t&&(o=!1,e(x))};return{schedule:Ha.reduce((b,_)=>{const S=u[_];return b[_]=($,E=!1,N=!1)=>(n||(n=!0,o=!0,l.isProcessing||e(x)),S.schedule($,E,N)),b},{}),cancel:b=>{for(let _=0;_<Ha.length;_++)u[Ha[_]].cancel(b)},state:l,steps:u}}const{schedule:Le,cancel:xr,state:ut,steps:Hc}=Qy(typeof requestAnimationFrame<"u"?requestAnimationFrame:qt,!0),Xo=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Zr=new Set(Xo),Gy=new Set(["width","height","top","left","right","bottom",...Xo]);function xf(e,t){e.indexOf(t)===-1&&e.push(t)}function bf(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}let wf=class{constructor(){this.subscriptions=[]}add(t){return xf(this.subscriptions,t),()=>bf(this.subscriptions,t)}notify(t,n,o){const l=this.subscriptions.length;if(l)if(l===1)this.subscriptions[0](t,n,o);else for(let s=0;s<l;s++){const u=this.subscriptions[s];u&&u(t,n,o)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}};function Xy(e,t){return t?e*(1e3/t):0}const tE={useManualTiming:!1};let as;function nE(){as=void 0}const vn={now:()=>(as===void 0&&vn.set(ut.isProcessing||tE.useManualTiming?ut.timestamp:performance.now()),as),set:e=>{as=e,queueMicrotask(nE)}};let rE=class{constructor(t,n={}){this.version="12.6.3",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(o,l=!0)=>{const s=vn.now();this.updatedAt!==s&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(o),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),l&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){var n;this.current=t,this.updatedAt=vn.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=(n=this.current,!isNaN(parseFloat(n))))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new wf);const o=this.events[t].add(n);return t==="change"?()=>{o(),Le.read(()=>{this.events.change.getSize()||this.stop()})}:o}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){n&&this.passiveEffect?this.passiveEffect(t,this.updateAndNotify):this.updateAndNotify(t,n)}setWithVelocity(t,n,o){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-o}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=vn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>30)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,30);return Xy(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}};function dl(e,t){return new rE(e,t)}const Ed=e=>Array.isArray(e),oE=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),iE=e=>Ed(e)?e[e.length-1]||0:e;function lE(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,dl(n))}function aE(e,t){const n=cl(e,t);let{transitionEnd:o={},transition:l={},...s}=n||{};s={...s,...o};for(const u in s)lE(e,u,iE(s[u]))}const ht=e=>!!(e&&e.getVelocity);function sE(e){return!!(ht(e)&&e.add)}function Pd(e,t){const n=e.getValue("willChange");if(sE(n))return n.add(t)}const _f=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),uE="framerAppearId",qy="data-"+_f(uE);function Zy(e){return e.props[qy]}const gn=e=>1e3*e,yn=e=>e/1e3;function Sf(e){let t;return()=>(t===void 0&&(t=e()),t)}const cE=Sf(()=>window.ScrollTimeline!==void 0);let dE=class{constructor(t){this.stop=()=>this.runAll("stop"),this.animations=t.filter(Boolean)}get finished(){return Promise.all(this.animations.map(t=>t.finished))}getAll(t){return this.animations[0][t]}setAll(t,n){for(let o=0;o<this.animations.length;o++)this.animations[o][t]=n}attachTimeline(t,n){const o=this.animations.map(l=>cE()&&l.attachTimeline?l.attachTimeline(t):typeof n=="function"?n(l):void 0);return()=>{o.forEach((l,s)=>{l&&l(),this.animations[s].stop()})}}get time(){return this.getAll("time")}set time(t){this.setAll("time",t)}get speed(){return this.getAll("speed")}set speed(t){this.setAll("speed",t)}get startTime(){return this.getAll("startTime")}get duration(){let t=0;for(let n=0;n<this.animations.length;n++)t=Math.max(t,this.animations[n].duration);return t}runAll(t){this.animations.forEach(n=>n[t]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}},fE=class extends dE{then(t,n){return this.finished.finally(t).then(()=>{})}};const kf=e=>Array.isArray(e)&&typeof e[0]=="number",pE={};function mE(e,t){const n=Sf(e);return()=>pE[t]??n()}const fl=mE(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Jy=(e,t,n=10)=>{let o="";const l=Math.max(Math.round(t/n),2);for(let s=0;s<l;s++)o+=e(s/(l-1))+", ";return`linear(${o.substring(0,o.length-2)})`},Zi=([e,t,n,o])=>`cubic-bezier(${e}, ${t}, ${n}, ${o})`,Td={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Zi([0,.65,.55,1]),circOut:Zi([.55,0,1,.45]),backIn:Zi([.31,.01,.66,-.59]),backOut:Zi([.33,1.53,.69,.99])};function e0(e,t){return e?typeof e=="function"&&fl()?Jy(e,t):kf(e)?Zi(e):Array.isArray(e)?e.map(n=>e0(n,t)||Td.easeOut):Td[e]:void 0}function hE(e,t,n,{delay:o=0,duration:l=300,repeat:s=0,repeatType:u="loop",ease:d="easeInOut",times:f}={},p=void 0){const h={[t]:n};f&&(h.offset=f);const y=e0(d,l);return Array.isArray(y)&&(h.easing=y),e.animate(h,{delay:o,duration:l,easing:Array.isArray(y)?"linear":y,fill:"both",iterations:s+1,direction:u==="reverse"?"alternate":"normal",pseudoElement:p})}function $f(e){return typeof e=="function"&&"applyToOptions"in e}function t0(e){return!!(typeof e=="function"&&fl()||!e||typeof e=="string"&&(e in Td||fl())||kf(e)||Array.isArray(e)&&e.every(t0))}function gv(e,t){e.timeline=t,e.onfinish=null}const yv=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e;function qo(e,t,n,o){if(e===t&&n===o)return qt;const l=s=>function(u,d,f,p,h){let y,v,x=0;do v=d+(f-d)/2,y=yv(v,p,h)-u,y>0?f=v:d=v;while(Math.abs(y)>1e-7&&++x<12);return v}(s,0,1,e,n);return s=>s===0||s===1?s:yv(l(s),t,o)}const n0=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,r0=e=>t=>1-e(1-t),o0=qo(.33,1.53,.69,.99),Ef=r0(o0),i0=n0(Ef),l0=e=>(e*=2)<1?.5*Ef(e):.5*(2-Math.pow(2,-10*(e-1))),Pf=e=>1-Math.sin(Math.acos(e)),a0=r0(Pf),s0=n0(Pf),u0=e=>/^0[^.\s]+$/u.test(e);function vE(e){return typeof e=="number"?e===0:e===null||e==="none"||e==="0"||u0(e)}const In=(e,t,n)=>n>t?t:n<e?e:n,Zo={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},pl={...Zo,transform:e=>In(0,1,e)},Wa={...Zo,default:1},ol=e=>Math.round(1e5*e)/1e5,Tf=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function gE(e){return e==null}const yE=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Cf=(e,t)=>n=>!!(typeof n=="string"&&yE.test(n)&&n.startsWith(e)||t&&!gE(n)&&Object.prototype.hasOwnProperty.call(n,t)),c0=(e,t,n)=>o=>{if(typeof o!="string")return o;const[l,s,u,d]=o.match(Tf);return{[e]:parseFloat(l),[t]:parseFloat(s),[n]:parseFloat(u),alpha:d!==void 0?parseFloat(d):1}},Wc={...Zo,transform:e=>Math.round((t=>In(0,255,t))(e))},Hr={test:Cf("rgb","red"),parse:c0("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:o=1})=>"rgba("+Wc.transform(e)+", "+Wc.transform(t)+", "+Wc.transform(n)+", "+ol(pl.transform(o))+")"},Cd={test:Cf("#"),parse:function(e){let t="",n="",o="",l="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),o=e.substring(5,7),l=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),o=e.substring(3,4),l=e.substring(4,5),t+=t,n+=n,o+=o,l+=l),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(o,16),alpha:l?parseInt(l,16)/255:1}},transform:Hr.transform},Cl=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),mr=Cl("deg"),xn=Cl("%"),ve=Cl("px"),xE=Cl("vh"),bE=Cl("vw"),xv={...xn,parse:e=>xn.parse(e)/100,transform:e=>xn.transform(100*e)},Ao={test:Cf("hsl","hue"),parse:c0("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:o=1})=>"hsla("+Math.round(e)+", "+xn.transform(ol(t))+", "+xn.transform(ol(n))+", "+ol(pl.transform(o))+")"},mt={test:e=>Hr.test(e)||Cd.test(e)||Ao.test(e),parse:e=>Hr.test(e)?Hr.parse(e):Ao.test(e)?Ao.parse(e):Cd.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?Hr.transform(e):Ao.transform(e)},wE=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,d0="number",f0="color",_E=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function ml(e){const t=e.toString(),n=[],o={color:[],number:[],var:[]},l=[];let s=0;const u=t.replace(_E,d=>(mt.test(d)?(o.color.push(s),l.push(f0),n.push(mt.parse(d))):d.startsWith("var(")?(o.var.push(s),l.push("var"),n.push(d)):(o.number.push(s),l.push(d0),n.push(parseFloat(d))),++s,"${}")).split("${}");return{values:n,split:u,indexes:o,types:l}}function bv(e){return ml(e).values}function wv(e){const{split:t,types:n}=ml(e),o=t.length;return l=>{let s="";for(let u=0;u<o;u++)if(s+=t[u],l[u]!==void 0){const d=n[u];s+=d===d0?ol(l[u]):d===f0?mt.transform(l[u]):l[u]}return s}}const SE=e=>typeof e=="number"?0:e,br={test:function(e){var t,n;return isNaN(e)&&typeof e=="string"&&(((t=e.match(Tf))==null?void 0:t.length)||0)+(((n=e.match(wE))==null?void 0:n.length)||0)>0},parse:bv,createTransformer:wv,getAnimatableNone:function(e){const t=bv(e);return wv(e)(t.map(SE))}},kE=new Set(["brightness","contrast","saturate","opacity"]);function $E(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[o]=n.match(Tf)||[];if(!o)return e;const l=n.replace(o,"");let s=kE.has(t)?1:0;return o!==n&&(s*=100),t+"("+s+l+")"}const EE=/\b([a-z-]*)\(.*?\)/gu,Md={...br,getAnimatableNone:e=>{const t=e.match(EE);return t?t.map($E).join(" "):e}},PE={borderWidth:ve,borderTopWidth:ve,borderRightWidth:ve,borderBottomWidth:ve,borderLeftWidth:ve,borderRadius:ve,radius:ve,borderTopLeftRadius:ve,borderTopRightRadius:ve,borderBottomRightRadius:ve,borderBottomLeftRadius:ve,width:ve,maxWidth:ve,height:ve,maxHeight:ve,top:ve,right:ve,bottom:ve,left:ve,padding:ve,paddingTop:ve,paddingRight:ve,paddingBottom:ve,paddingLeft:ve,margin:ve,marginTop:ve,marginRight:ve,marginBottom:ve,marginLeft:ve,backgroundPositionX:ve,backgroundPositionY:ve},TE={rotate:mr,rotateX:mr,rotateY:mr,rotateZ:mr,scale:Wa,scaleX:Wa,scaleY:Wa,scaleZ:Wa,skew:mr,skewX:mr,skewY:mr,distance:ve,translateX:ve,translateY:ve,translateZ:ve,x:ve,y:ve,z:ve,perspective:ve,transformPerspective:ve,opacity:pl,originX:xv,originY:xv,originZ:ve},_v={...Zo,transform:Math.round},Mf={...PE,...TE,zIndex:_v,size:ve,fillOpacity:pl,strokeOpacity:pl,numOctaves:_v},CE={...Mf,color:mt,backgroundColor:mt,outlineColor:mt,fill:mt,stroke:mt,borderColor:mt,borderTopColor:mt,borderRightColor:mt,borderBottomColor:mt,borderLeftColor:mt,filter:Md,WebkitFilter:Md},p0=e=>CE[e];function m0(e,t){let n=p0(e);return n!==Md&&(n=br),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const ME=new Set(["auto","none","0"]);function DE(e,t,n){let o,l=0;for(;l<e.length&&!o;){const s=e[l];typeof s=="string"&&!ME.has(s)&&ml(s).values.length&&(o=e[l]),l++}if(o&&n)for(const s of t)e[s]=m0(n,o)}const Wr=e=>180*e/Math.PI,ps=e=>{const t=Wr(Math.atan2(e[1],e[0]));return Dd(t)},NE={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:ps,rotateZ:ps,skewX:e=>Wr(Math.atan(e[1])),skewY:e=>Wr(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},Dd=e=>((e%=360)<0&&(e+=360),e),Sv=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),kv=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),RE={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Sv,scaleY:kv,scale:e=>(Sv(e)+kv(e))/2,rotateX:e=>Dd(Wr(Math.atan2(e[6],e[5]))),rotateY:e=>Dd(Wr(Math.atan2(-e[2],e[0]))),rotateZ:ps,rotate:ps,skewX:e=>Wr(Math.atan(e[4])),skewY:e=>Wr(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function $v(e){return e.includes("scale")?1:0}function Nd(e,t){if(!e||e==="none")return $v(t);const n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let o,l;if(n)o=RE,l=n;else{const d=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);o=NE,l=d}if(!l)return $v(t);const s=o[t],u=l[1].split(",").map(AE);return typeof s=="function"?s(u):u[s]}const LE=(e,t)=>{const{transform:n="none"}=getComputedStyle(e);return Nd(n,t)};function AE(e){return parseFloat(e.trim())}const Ev=e=>e===Zo||e===ve,zE=new Set(["x","y","z"]),IE=Xo.filter(e=>!zE.has(e));function jE(e){const t=[];return IE.forEach(n=>{const o=e.getValue(n);o!==void 0&&(t.push([n,o.get()]),o.set(n.startsWith("scale")?1:0))}),t}const zo={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>Nd(t,"x"),y:(e,{transform:t})=>Nd(t,"y")};zo.translateX=zo.x,zo.translateY=zo.y;const Yr=new Set;let Rd=!1,Ld=!1;function h0(){if(Ld){const e=Array.from(Yr).filter(o=>o.needsMeasurement),t=new Set(e.map(o=>o.element)),n=new Map;t.forEach(o=>{const l=jE(o);l.length&&(n.set(o,l),o.render())}),e.forEach(o=>o.measureInitialState()),t.forEach(o=>{o.render();const l=n.get(o);l&&l.forEach(([s,u])=>{var d;(d=o.getValue(s))==null||d.set(u)})}),e.forEach(o=>o.measureEndState()),e.forEach(o=>{o.suspendedScrollY!==void 0&&window.scrollTo(0,o.suspendedScrollY)})}Ld=!1,Rd=!1,Yr.forEach(e=>e.complete()),Yr.clear()}function v0(){Yr.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Ld=!0)})}function FE(){v0(),h0()}let Df=class{constructor(t,n,o,l,s,u=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=o,this.motionValue=l,this.element=s,this.isAsync=u}scheduleResolve(){this.isScheduled=!0,this.isAsync?(Yr.add(this),Rd||(Rd=!0,Le.read(v0),Le.resolveKeyframes(h0))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:o,motionValue:l}=this;for(let s=0;s<t.length;s++)if(t[s]===null)if(s===0){const u=l==null?void 0:l.get(),d=t[t.length-1];if(u!==void 0)t[0]=u;else if(o&&n){const f=o.readValue(n,d);f!=null&&(t[0]=f)}t[0]===void 0&&(t[0]=d),l&&u===void 0&&l.set(t[0])}else t[s]=t[s-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),Yr.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,Yr.delete(this))}resume(){this.isComplete||this.scheduleResolve()}},g0=()=>{};const y0=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),x0=e=>t=>typeof t=="string"&&t.startsWith(e),Nf=x0("--"),OE=x0("var(--"),Rf=e=>!!OE(e)&&KE.test(e.split("/*")[0].trim()),KE=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,VE=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function BE(e){const t=VE.exec(e);if(!t)return[,];const[,n,o,l]=t;return[`--${n??o}`,l]}function b0(e,t,n=1){const[o,l]=BE(e);if(!o)return;const s=window.getComputedStyle(t).getPropertyValue(o);if(s){const u=s.trim();return y0(u)?parseFloat(u):u}return Rf(l)?b0(l,t,n+1):l}const w0=e=>t=>t.test(e),UE={test:e=>e==="auto",parse:e=>e},_0=[Zo,ve,xn,mr,bE,xE,UE],Pv=e=>_0.find(w0(e));let S0=class extends Df{constructor(t,n,o,l,s){super(t,n,o,l,s,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:o}=this;if(!n||!n.current)return;super.readKeyframes();for(let f=0;f<t.length;f++){let p=t[f];if(typeof p=="string"&&(p=p.trim(),Rf(p))){const h=b0(p,n.current);h!==void 0&&(t[f]=h),f===t.length-1&&(this.finalKeyframe=p)}}if(this.resolveNoneKeyframes(),!Gy.has(o)||t.length!==2)return;const[l,s]=t,u=Pv(l),d=Pv(s);if(u!==d)if(Ev(u)&&Ev(d))for(let f=0;f<t.length;f++){const p=t[f];typeof p=="string"&&(t[f]=parseFloat(p))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,o=[];for(let l=0;l<t.length;l++)vE(t[l])&&o.push(l);o.length&&DE(t,o,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:o}=this;if(!t||!t.current)return;o==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=zo[o](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const l=n[n.length-1];l!==void 0&&t.getValue(o,l).jump(l,!1)}measureEndState(){var d;const{element:t,name:n,unresolvedKeyframes:o}=this;if(!t||!t.current)return;const l=t.getValue(n);l&&l.jump(this.measuredOrigin,!1);const s=o.length-1,u=o[s];o[s]=zo[n](t.measureViewportBox(),window.getComputedStyle(t.current)),u!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=u),(d=this.removedTransforms)!=null&&d.length&&this.removedTransforms.forEach(([f,p])=>{t.getValue(f).set(p)}),this.resolveNoneKeyframes()}};const Tv=(e,t)=>t!=="zIndex"&&(!(typeof e!="number"&&!Array.isArray(e))||!(typeof e!="string"||!br.test(e)&&e!=="0"||e.startsWith("url(")));function HE(e,t,n,o){const l=e[0];if(l===null)return!1;if(t==="display"||t==="visibility")return!0;const s=e[e.length-1],u=Tv(l,t),d=Tv(s,t);return!(!u||!d)&&(function(f){const p=f[0];if(f.length===1)return!0;for(let h=0;h<f.length;h++)if(f[h]!==p)return!0}(e)||(n==="spring"||$f(n))&&o)}const WE=e=>e!==null;function Rs(e,{repeat:t,repeatType:n="loop"},o){const l=e.filter(WE),s=t&&n!=="loop"&&t%2==1?0:l.length-1;return s&&o!==void 0?o:l[s]}let k0=class{constructor({autoplay:t=!0,delay:n=0,type:o="keyframes",repeat:l=0,repeatDelay:s=0,repeatType:u="loop",...d}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=vn.now(),this.options={autoplay:t,delay:n,type:o,repeat:l,repeatDelay:s,repeatType:u,...d},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt&&this.resolvedAt-this.createdAt>40?this.resolvedAt:this.createdAt}get resolved(){return this._resolved||this.hasAttemptedResolve||FE(),this._resolved}onKeyframesResolved(t,n){this.resolvedAt=vn.now(),this.hasAttemptedResolve=!0;const{name:o,type:l,velocity:s,delay:u,onComplete:d,onUpdate:f,isGenerator:p}=this.options;if(!p&&!HE(t,o,l,s)){if(!u)return f&&f(Rs(t,this.options,n)),d&&d(),void this.resolveFinishedPromise();this.options.duration=0}const h=this.initPlayback(t,n);h!==!1&&(this._resolved={keyframes:t,finalKeyframe:n,...h},this.onPostResolved())}onPostResolved(){}then(t,n){return this.currentFinishedPromise.then(t,n)}flatten(){this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear")}updateFinishedPromise(){this.currentFinishedPromise=new Promise(t=>{this.resolveFinishedPromise=t})}};const ms=2e4;function Lf(e){let t=0,n=e.next(t);for(;!n.done&&t<ms;)t+=50,n=e.next(t);return t>=ms?1/0:t}const Oe=(e,t,n)=>e+(t-e)*n;function Yc(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function YE({hue:e,saturation:t,lightness:n,alpha:o}){e/=360,n/=100;let l=0,s=0,u=0;if(t/=100){const d=n<.5?n*(1+t):n+t-n*t,f=2*n-d;l=Yc(f,d,e+1/3),s=Yc(f,d,e),u=Yc(f,d,e-1/3)}else l=s=u=n;return{red:Math.round(255*l),green:Math.round(255*s),blue:Math.round(255*u),alpha:o}}function hs(e,t){return n=>n>0?t:e}const Qc=(e,t,n)=>{const o=e*e,l=n*(t*t-o)+o;return l<0?0:Math.sqrt(l)},QE=[Cd,Hr,Ao];function Cv(e){const t=(n=e,QE.find(l=>l.test(n)));var n;if(!t)return!1;let o=t.parse(e);return t===Ao&&(o=YE(o)),o}const Mv=(e,t)=>{const n=Cv(e),o=Cv(t);if(!n||!o)return hs(e,t);const l={...n};return s=>(l.red=Qc(n.red,o.red,s),l.green=Qc(n.green,o.green,s),l.blue=Qc(n.blue,o.blue,s),l.alpha=Oe(n.alpha,o.alpha,s),Hr.transform(l))},GE=(e,t)=>n=>t(e(n)),Ml=(...e)=>e.reduce(GE),Ad=new Set(["none","hidden"]);function XE(e,t){return Ad.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function qE(e,t){return n=>Oe(e,t,n)}function Af(e){return typeof e=="number"?qE:typeof e=="string"?Rf(e)?hs:mt.test(e)?Mv:JE:Array.isArray(e)?$0:typeof e=="object"?mt.test(e)?Mv:ZE:hs}function $0(e,t){const n=[...e],o=n.length,l=e.map((s,u)=>Af(s)(s,t[u]));return s=>{for(let u=0;u<o;u++)n[u]=l[u](s);return n}}function ZE(e,t){const n={...e,...t},o={};for(const l in n)e[l]!==void 0&&t[l]!==void 0&&(o[l]=Af(e[l])(e[l],t[l]));return l=>{for(const s in o)n[s]=o[s](l);return n}}const JE=(e,t)=>{const n=br.createTransformer(t),o=ml(e),l=ml(t);return o.indexes.var.length===l.indexes.var.length&&o.indexes.color.length===l.indexes.color.length&&o.indexes.number.length>=l.indexes.number.length?Ad.has(e)&&!l.values.length||Ad.has(t)&&!o.values.length?XE(e,t):Ml($0(function(s,u){const d=[],f={color:0,var:0,number:0};for(let p=0;p<u.values.length;p++){const h=u.types[p],y=s.indexes[h][f[h]],v=s.values[y]??0;d[p]=v,f[h]++}return d}(o,l),l.values),n):hs(e,t)};function E0(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?Oe(e,t,n):Af(e)(e,t)}function eP(e,t=100,n){const o=n({...e,keyframes:[0,t]}),l=Math.min(Lf(o),ms);return{type:"keyframes",ease:s=>o.next(l*s).value/t,duration:yn(l)}}function P0(e,t,n){const o=Math.max(t-5,0);return Xy(n-e(o),t-o)}const We={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Dv=.001;function tP({duration:e=We.duration,bounce:t=We.bounce,velocity:n=We.velocity,mass:o=We.mass}){let l,s,u=1-t;u=In(We.minDamping,We.maxDamping,u),e=In(We.minDuration,We.maxDuration,yn(e)),u<1?(l=f=>{const p=f*u,h=p*e,y=p-n,v=zd(f,u),x=Math.exp(-h);return Dv-y/v*x},s=f=>{const p=f*u*e,h=p*n+n,y=Math.pow(u,2)*Math.pow(f,2)*e,v=Math.exp(-p),x=zd(Math.pow(f,2),u);return(-l(f)+Dv>0?-1:1)*((h-y)*v)/x}):(l=f=>Math.exp(-f*e)*((f-n)*e+1)-.001,s=f=>Math.exp(-f*e)*(e*e*(n-f)));const d=function(f,p,h){let y=h;for(let v=1;v<nP;v++)y-=f(y)/p(y);return y}(l,s,5/e);if(e=gn(e),isNaN(d))return{stiffness:We.stiffness,damping:We.damping,duration:e};{const f=Math.pow(d,2)*o;return{stiffness:f,damping:2*u*Math.sqrt(o*f),duration:e}}}const nP=12;function zd(e,t){return e*Math.sqrt(1-t*t)}const rP=["duration","bounce"],oP=["stiffness","damping","mass"];function Nv(e,t){return t.some(n=>e[n]!==void 0)}function vs(e=We.visualDuration,t=We.bounce){const n=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:o,restDelta:l}=n;const s=n.keyframes[0],u=n.keyframes[n.keyframes.length-1],d={done:!1,value:s},{stiffness:f,damping:p,mass:h,duration:y,velocity:v,isResolvedFromDuration:x}=function(M){let I={velocity:We.velocity,stiffness:We.stiffness,damping:We.damping,mass:We.mass,isResolvedFromDuration:!1,...M};if(!Nv(M,oP)&&Nv(M,rP))if(M.visualDuration){const z=M.visualDuration,P=2*Math.PI/(1.2*z),K=P*P,J=2*In(.05,1,1-(M.bounce||0))*Math.sqrt(K);I={...I,mass:We.mass,stiffness:K,damping:J}}else{const z=tP(M);I={...I,...z,mass:We.mass},I.isResolvedFromDuration=!0}return I}({...n,velocity:-yn(n.velocity||0)}),b=v||0,_=p/(2*Math.sqrt(f*h)),S=u-s,$=yn(Math.sqrt(f/h)),E=Math.abs(S)<5;let N;if(o||(o=E?We.restSpeed.granular:We.restSpeed.default),l||(l=E?We.restDelta.granular:We.restDelta.default),_<1){const M=zd($,_);N=I=>{const z=Math.exp(-_*$*I);return u-z*((b+_*$*S)/M*Math.sin(M*I)+S*Math.cos(M*I))}}else if(_===1)N=M=>u-Math.exp(-$*M)*(S+(b+$*S)*M);else{const M=$*Math.sqrt(_*_-1);N=I=>{const z=Math.exp(-_*$*I),P=Math.min(M*I,300);return u-z*((b+_*$*S)*Math.sinh(P)+M*S*Math.cosh(P))/M}}const O={calculatedDuration:x&&y||null,next:M=>{const I=N(M);if(x)d.done=M>=y;else{let z=0;_<1&&(z=M===0?gn(b):P0(N,M,I));const P=Math.abs(z)<=o,K=Math.abs(u-I)<=l;d.done=P&&K}return d.value=d.done?u:I,d},toString:()=>{const M=Math.min(Lf(O),ms),I=Jy(z=>O.next(M*z).value,M,30);return M+"ms "+I},toTransition:()=>{}};return O}vs.applyToOptions=e=>{const t=eP(e,100,vs);return e.ease=fl()?t.ease:"easeOut",e.duration=gn(t.duration),e.type="keyframes",e};function Rv({keyframes:e,velocity:t=0,power:n=.8,timeConstant:o=325,bounceDamping:l=10,bounceStiffness:s=500,modifyTarget:u,min:d,max:f,restDelta:p=.5,restSpeed:h}){const y=e[0],v={done:!1,value:y},x=z=>d===void 0?f:f===void 0||Math.abs(d-z)<Math.abs(f-z)?d:f;let b=n*t;const _=y+b,S=u===void 0?_:u(_);S!==_&&(b=S-y);const $=z=>-b*Math.exp(-z/o),E=z=>S+$(z),N=z=>{const P=$(z),K=E(z);v.done=Math.abs(P)<=p,v.value=v.done?S:K};let O,M;const I=z=>{var P;P=v.value,(d!==void 0&&P<d||f!==void 0&&P>f)&&(O=z,M=vs({keyframes:[v.value,x(v.value)],velocity:P0(E,z,v.value),damping:l,stiffness:s,restDelta:p,restSpeed:h}))};return I(0),{calculatedDuration:null,next:z=>{let P=!1;return M||O!==void 0||(P=!0,N(z),I(z)),O!==void 0&&z>=O?M.next(z-O):(!P&&N(z),v)}}}const iP=qo(.42,0,1,1),lP=qo(0,0,.58,1),T0=qo(.42,0,.58,1),aP=e=>Array.isArray(e)&&typeof e[0]!="number",sP={linear:qt,easeIn:iP,easeInOut:T0,easeOut:lP,circIn:Pf,circInOut:s0,circOut:a0,backIn:Ef,backInOut:i0,backOut:o0,anticipate:l0},Lv=e=>{if(kf(e)){g0(e.length===4);const[t,n,o,l]=e;return qo(t,n,o,l)}return typeof e=="string"?sP[e]:e},hl=(e,t,n)=>{const o=t-e;return o===0?1:(n-e)/o};function uP(e,t,{clamp:n=!0,ease:o,mixer:l}={}){const s=e.length;if(g0(s===t.length),s===1)return()=>t[0];if(s===2&&t[0]===t[1])return()=>t[1];const u=e[0]===e[1];e[0]>e[s-1]&&(e=[...e].reverse(),t=[...t].reverse());const d=function(h,y,v){const x=[],b=v||E0,_=h.length-1;for(let S=0;S<_;S++){let $=b(h[S],h[S+1]);if(y){const E=Array.isArray(y)?y[S]||qt:y;$=Ml(E,$)}x.push($)}return x}(t,o,l),f=d.length,p=h=>{if(u&&h<e[0])return t[0];let y=0;if(f>1)for(;y<e.length-2&&!(h<e[y+1]);y++);const v=hl(e[y],e[y+1],h);return d[y](v)};return n?h=>p(In(e[0],e[s-1],h)):p}function cP(e,t){const n=e[e.length-1];for(let o=1;o<=t;o++){const l=hl(0,t,o);e.push(Oe(n,1,l))}}function dP(e){const t=[0];return cP(t,e.length-1),t}function fP(e,t){return e.map(n=>n*t)}function pP(e,t){return e.map(()=>t||T0).splice(0,e.length-1)}function gs({duration:e=300,keyframes:t,times:n,ease:o="easeInOut"}){const l=aP(o)?o.map(Lv):Lv(o),s={done:!1,value:t[0]},u=fP(n&&n.length===t.length?n:dP(t),e),d=uP(u,t,{ease:Array.isArray(l)?l:pP(t,l)});return{calculatedDuration:e,next:f=>(s.value=d(f),s.done=f>=e,s)}}const mP=e=>{const t=({timestamp:n})=>e(n);return{start:()=>Le.update(t,!0),stop:()=>xr(t),now:()=>ut.isProcessing?ut.timestamp:vn.now()}},hP={decay:Rv,inertia:Rv,tween:gs,keyframes:gs,spring:vs},vP=e=>e/100;let Id=class extends k0{constructor(t){super(t),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:d}=this.options;d&&d()};const{name:n,motionValue:o,element:l,keyframes:s}=this.options,u=(l==null?void 0:l.KeyframeResolver)||Df;this.resolver=new u(s,(d,f)=>this.onKeyframesResolved(d,f),n,o,l),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(t){const{type:n="keyframes",repeat:o=0,repeatDelay:l=0,repeatType:s,velocity:u=0}=this.options,d=$f(n)?n:hP[n]||gs;let f,p;d!==gs&&typeof t[0]!="number"&&(f=Ml(vP,E0(t[0],t[1])),t=[0,100]);const h=d({...this.options,keyframes:t});s==="mirror"&&(p=d({...this.options,keyframes:[...t].reverse(),velocity:-u})),h.calculatedDuration===null&&(h.calculatedDuration=Lf(h));const{calculatedDuration:y}=h,v=y+l;return{generator:h,mirroredGenerator:p,mapPercentToKeyframes:f,calculatedDuration:y,resolvedDuration:v,totalDuration:v*(o+1)-l}}onPostResolved(){const{autoplay:t=!0}=this.options;this.play(),this.pendingPlayState!=="paused"&&t?this.state=this.pendingPlayState:this.pause()}tick(t,n=!1){const{resolved:o}=this;if(!o){const{keyframes:P}=this.options;return{done:!0,value:P[P.length-1]}}const{finalKeyframe:l,generator:s,mirroredGenerator:u,mapPercentToKeyframes:d,keyframes:f,calculatedDuration:p,totalDuration:h,resolvedDuration:y}=o;if(this.startTime===null)return s.next(0);const{delay:v,repeat:x,repeatType:b,repeatDelay:_,onUpdate:S}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-h/this.speed,this.startTime)),n?this.currentTime=t:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(t-this.startTime)*this.speed;const $=this.currentTime-v*(this.speed>=0?1:-1),E=this.speed>=0?$<0:$>h;this.currentTime=Math.max($,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=h);let N=this.currentTime,O=s;if(x){const P=Math.min(this.currentTime,h)/y;let K=Math.floor(P),J=P%1;!J&&P>=1&&(J=1),J===1&&K--,K=Math.min(K,x+1),K%2&&(b==="reverse"?(J=1-J,_&&(J-=_/y)):b==="mirror"&&(O=u)),N=In(0,1,J)*y}const M=E?{done:!1,value:f[0]}:O.next(N);d&&(M.value=d(M.value));let{done:I}=M;E||p===null||(I=this.speed>=0?this.currentTime>=h:this.currentTime<=0);const z=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&I);return z&&l!==void 0&&(M.value=Rs(f,this.options,l)),S&&S(M.value),z&&this.finish(),M}get duration(){const{resolved:t}=this;return t?yn(t.calculatedDuration):0}get time(){return yn(this.currentTime)}set time(t){t=gn(t),this.currentTime=t,this.holdTime!==null||this.speed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.speed)}get speed(){return this.playbackSpeed}set speed(t){const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=yn(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved)return void(this.pendingPlayState="running");if(this.isStopped)return;const{driver:t=mP,onPlay:n,startTime:o}=this.options;this.driver||(this.driver=t(s=>this.tick(s))),n&&n();const l=this.driver.now();this.holdTime!==null?this.startTime=l-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=l):this.startTime=o??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){this._resolved?(this.state="paused",this.holdTime=this.currentTime??0):this.pendingPlayState="paused"}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:t}=this.options;t&&t()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}get finished(){return this.currentFinishedPromise}};const gP=new Set(["opacity","clipPath","filter","transform"]),yP=Sf(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Av={anticipate:l0,backInOut:i0,circInOut:s0};let zv=class extends k0{constructor(t){super(t);const{name:n,motionValue:o,element:l,keyframes:s}=this.options;this.resolver=new S0(s,(u,d)=>this.onKeyframesResolved(u,d),n,o,l),this.resolver.scheduleResolve()}initPlayback(t,n){let{duration:o=300,times:l,ease:s,type:u,motionValue:d,name:f,startTime:p}=this.options;if(!d.owner||!d.owner.current)return!1;var h;if(typeof s=="string"&&fl()&&s in Av&&(s=Av[s]),h=this.options,$f(h.type)||h.type==="spring"||!t0(h.ease)){const{onComplete:v,onUpdate:x,motionValue:b,element:_,...S}=this.options,$=function(E,N){const O=new Id({...N,keyframes:E,repeat:0,delay:0,isGenerator:!0});let M={done:!1,value:E[0]};const I=[];let z=0;for(;!M.done&&z<2e4;)M=O.sample(z),I.push(M.value),z+=10;return{times:void 0,keyframes:I,duration:z-10,ease:"linear"}}(t,S);(t=$.keyframes).length===1&&(t[1]=t[0]),o=$.duration,l=$.times,s=$.ease,u="keyframes"}const y=hE(d.owner.current,f,t,{...this.options,duration:o,times:l,ease:s});return y.startTime=p??this.calcStartTime(),this.pendingTimeline?(gv(y,this.pendingTimeline),this.pendingTimeline=void 0):y.onfinish=()=>{const{onComplete:v}=this.options;d.set(Rs(t,this.options,n)),v&&v(),this.cancel(),this.resolveFinishedPromise()},{animation:y,duration:o,times:l,type:u,ease:s,keyframes:t}}get duration(){const{resolved:t}=this;if(!t)return 0;const{duration:n}=t;return yn(n)}get time(){const{resolved:t}=this;if(!t)return 0;const{animation:n}=t;return yn(n.currentTime||0)}set time(t){const{resolved:n}=this;if(!n)return;const{animation:o}=n;o.currentTime=gn(t)}get speed(){const{resolved:t}=this;if(!t)return 1;const{animation:n}=t;return n.playbackRate}get finished(){return this.resolved.animation.finished}set speed(t){const{resolved:n}=this;if(!n)return;const{animation:o}=n;o.playbackRate=t}get state(){const{resolved:t}=this;if(!t)return"idle";const{animation:n}=t;return n.playState}get startTime(){const{resolved:t}=this;if(!t)return null;const{animation:n}=t;return n.startTime}attachTimeline(t){if(this._resolved){const{resolved:n}=this;if(!n)return qt;const{animation:o}=n;gv(o,t)}else this.pendingTimeline=t;return qt}play(){if(this.isStopped)return;const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:t}=this;if(!t)return;const{animation:n,keyframes:o,duration:l,type:s,ease:u,times:d}=t;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:p,onUpdate:h,onComplete:y,element:v,...x}=this.options,b=new Id({...x,keyframes:o,duration:l,type:s,ease:u,times:d,isGenerator:!0}),_=gn(this.time);p.setWithVelocity(b.sample(_-10).value,b.sample(_).value,10)}const{onStop:f}=this.options;f&&f(),this.cancel()}complete(){const{resolved:t}=this;t&&t.animation.finish()}cancel(){const{resolved:t}=this;t&&t.animation.cancel()}static supports(t){const{motionValue:n,name:o,repeatDelay:l,repeatType:s,damping:u,type:d}=t;if(!(n&&n.owner&&n.owner.current instanceof HTMLElement))return!1;const{onUpdate:f,transformTemplate:p}=n.owner.getProps();return yP()&&o&&gP.has(o)&&(o!=="transform"||!p)&&!f&&!l&&s!=="mirror"&&u!==0&&d!=="inertia"}};const xP={type:"spring",stiffness:500,damping:25,restSpeed:10},bP={type:"keyframes",duration:.8},wP={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},_P=(e,{keyframes:t})=>t.length>2?bP:Zr.has(e)?e.startsWith("scale")?{type:"spring",stiffness:550,damping:t[1]===0?2*Math.sqrt(550):30,restSpeed:10}:xP:wP;function SP({when:e,delay:t,delayChildren:n,staggerChildren:o,staggerDirection:l,repeat:s,repeatType:u,repeatDelay:d,from:f,elapsed:p,...h}){return!!Object.keys(h).length}const zf=(e,t,n,o={},l,s)=>u=>{const d=yf(o,e)||{},f=d.delay||o.delay||0;let{elapsed:p=0}=o;p-=gn(f);let h={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...d,delay:-p,onUpdate:v=>{t.set(v),d.onUpdate&&d.onUpdate(v)},onComplete:()=>{u(),d.onComplete&&d.onComplete()},name:e,motionValue:t,element:s?void 0:l};SP(d)||(h={...h,..._P(e,h)}),h.duration&&(h.duration=gn(h.duration)),h.repeatDelay&&(h.repeatDelay=gn(h.repeatDelay)),h.from!==void 0&&(h.keyframes[0]=h.from);let y=!1;if((h.type===!1||h.duration===0&&!h.repeatDelay)&&(h.duration=0,h.delay===0&&(y=!0)),h.allowFlatten=!d.type&&!d.ease,y&&!s&&t.get()!==void 0){const v=Rs(h.keyframes,d);if(v!==void 0)return Le.update(()=>{h.onUpdate(v),h.onComplete()}),new fE([])}return!s&&zv.supports(h)?new zv(h):new Id(h)};function kP({protectedKeys:e,needsAnimating:t},n){const o=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,o}function C0(e,t,{delay:n=0,transitionOverride:o,type:l}={}){let{transition:s=e.getDefaultTransition(),transitionEnd:u,...d}=t;o&&(s=o);const f=[],p=l&&e.animationState&&e.animationState.getState()[l];for(const h in d){const y=e.getValue(h,e.latestValues[h]??null),v=d[h];if(v===void 0||p&&kP(p,h))continue;const x={delay:n,...yf(s||{},h)};let b=!1;if(window.MotionHandoffAnimation){const S=Zy(e);if(S){const $=window.MotionHandoffAnimation(S,h,Le);$!==null&&(x.startTime=$,b=!0)}}Pd(e,h),y.start(zf(h,y,v,e.shouldReduceMotion&&Gy.has(h)?{type:!1}:x,e,b));const _=y.animation;_&&f.push(_)}return u&&Promise.all(f).then(()=>{Le.update(()=>{u&&aE(e,u)})}),f}function jd(e,t,n={}){var f;const o=cl(e,t,n.type==="exit"?(f=e.presenceContext)==null?void 0:f.custom:void 0);let{transition:l=e.getDefaultTransition()||{}}=o||{};n.transitionOverride&&(l=n.transitionOverride);const s=o?()=>Promise.all(C0(e,o,n)):()=>Promise.resolve(),u=e.variantChildren&&e.variantChildren.size?(p=0)=>{const{delayChildren:h=0,staggerChildren:y,staggerDirection:v}=l;return function(x,b,_=0,S=0,$=1,E){const N=[],O=(x.variantChildren.size-1)*S,M=$===1?(I=0)=>I*S:(I=0)=>O-I*S;return Array.from(x.variantChildren).sort($P).forEach((I,z)=>{I.notify("AnimationStart",b),N.push(jd(I,b,{...E,delay:_+M(z)}).then(()=>I.notify("AnimationComplete",b)))}),Promise.all(N)}(e,t,h+p,y,v,n)}:()=>Promise.resolve(),{when:d}=l;if(d){const[p,h]=d==="beforeChildren"?[s,u]:[u,s];return p().then(()=>h())}return Promise.all([s(),u(n.delay)])}function $P(e,t){return e.sortNodePosition(t)}function EP(e,t,n={}){let o;if(e.notify("AnimationStart",t),Array.isArray(t)){const l=t.map(s=>jd(e,s,n));o=Promise.all(l)}else if(typeof t=="string")o=jd(e,t,n);else{const l=typeof t=="function"?cl(e,t,n.custom):t;o=Promise.all(C0(e,l,n))}return o.then(()=>{e.notify("AnimationComplete",t)})}function M0(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let o=0;o<n;o++)if(t[o]!==e[o])return!1;return!0}function vl(e){return typeof e=="string"||Array.isArray(e)}const If=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],jf=["initial",...If],PP=jf.length;function D0(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent&&D0(e.parent)||{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const t={};for(let n=0;n<PP;n++){const o=jf[n],l=e.props[o];(vl(l)||l===!1)&&(t[o]=l)}return t}const TP=[...If].reverse(),CP=If.length;function MP(e){let t=function(u){return d=>Promise.all(d.map(({animation:f,options:p})=>EP(u,f,p)))}(e),n=Iv(),o=!0;const l=u=>(d,f)=>{var h;const p=cl(e,f,u==="exit"?(h=e.presenceContext)==null?void 0:h.custom:void 0);if(p){const{transition:y,transitionEnd:v,...x}=p;d={...d,...x,...v}}return d};function s(u){const{props:d}=e,f=D0(e.parent)||{},p=[],h=new Set;let y={},v=1/0;for(let b=0;b<CP;b++){const _=TP[b],S=n[_],$=d[_]!==void 0?d[_]:f[_],E=vl($),N=_===u?S.isActive:null;N===!1&&(v=b);let O=$===f[_]&&$!==d[_]&&E;if(O&&o&&e.manuallyAnimateOnMount&&(O=!1),S.protectedKeys={...y},!S.isActive&&N===null||!$&&!S.prevProp||Ns($)||typeof $=="boolean")continue;const M=DP(S.prevProp,$);let I=M||_===u&&S.isActive&&!O&&E||b>v&&E,z=!1;const P=Array.isArray($)?$:[$];let K=P.reduce(l(_),{});N===!1&&(K={});const{prevResolvedValues:J={}}=S,W={...J,...K},U=T=>{I=!0,h.has(T)&&(z=!0,h.delete(T)),S.needsAnimating[T]=!0;const B=e.getValue(T);B&&(B.liveStyle=!1)};for(const T in W){const B=K[T],te=J[T];if(y.hasOwnProperty(T))continue;let se=!1;se=Ed(B)&&Ed(te)?!M0(B,te):B!==te,se?B!=null?U(T):h.add(T):B!==void 0&&h.has(T)?U(T):S.protectedKeys[T]=!0}S.prevProp=$,S.prevResolvedValues=K,S.isActive&&(y={...y,...K}),o&&e.blockInitialAnimation&&(I=!1),I&&(!(O&&M)||z)&&p.push(...P.map(T=>({animation:T,options:{type:_}})))}if(h.size){const b={};if(typeof d.initial!="boolean"){const _=cl(e,Array.isArray(d.initial)?d.initial[0]:d.initial);_&&_.transition&&(b.transition=_.transition)}h.forEach(_=>{const S=e.getBaseTarget(_),$=e.getValue(_);$&&($.liveStyle=!0),b[_]=S??null}),p.push({animation:b})}let x=!!p.length;return!o||d.initial!==!1&&d.initial!==d.animate||e.manuallyAnimateOnMount||(x=!1),o=!1,x?t(p):Promise.resolve()}return{animateChanges:s,setActive:function(u,d){var p;if(n[u].isActive===d)return Promise.resolve();(p=e.variantChildren)==null||p.forEach(h=>{var y;return(y=h.animationState)==null?void 0:y.setActive(u,d)}),n[u].isActive=d;const f=s(u);for(const h in n)n[h].protectedKeys={};return f},setAnimateFunction:function(u){t=u(e)},getState:()=>n,reset:()=>{n=Iv(),o=!0}}}function DP(e,t){return typeof t=="string"?t!==e:!!Array.isArray(t)&&!M0(t,e)}function Or(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Iv(){return{animate:Or(!0),whileInView:Or(),whileHover:Or(),whileTap:Or(),whileDrag:Or(),whileFocus:Or(),exit:Or()}}let _r=class{constructor(t){this.isMounted=!1,this.node=t}update(){}},NP=class extends _r{constructor(t){super(t),t.animationState||(t.animationState=MP(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();Ns(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)==null||t.call(this)}},RP=0,LP=class extends _r{constructor(){super(...arguments),this.id=RP++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:o}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===o)return;const l=this.node.animationState.setActive("exit",!t);n&&!t&&l.then(()=>{n(this.id)})}mount(){const{register:t,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),t&&(this.unmount=t(this.id))}unmount(){}};const AP={animation:{Feature:NP},exit:{Feature:LP}},ln={x:!1,y:!1};function N0(){return ln.x||ln.y}function zP(e){return e==="x"||e==="y"?ln[e]?null:(ln[e]=!0,()=>{ln[e]=!1}):ln.x||ln.y?null:(ln.x=ln.y=!0,()=>{ln.x=ln.y=!1})}function gl(e,t,n,o={passive:!0}){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n)}const Ff=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1;function Dl(e){return{point:{x:e.pageX,y:e.pageY}}}const IP=e=>t=>Ff(t)&&e(t,Dl(t));function il(e,t,n,o){return gl(e,t,IP(n),o)}function R0({top:e,left:t,right:n,bottom:o}){return{x:{min:t,max:n},y:{min:e,max:o}}}function jP({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function FP(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),o=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:o.y,right:o.x}}function bt(e){return e.max-e.min}function OP(e,t,n){return Math.abs(e-t)<=n}function jv(e,t,n,o=.5){e.origin=o,e.originPoint=Oe(t.min,t.max,e.origin),e.scale=bt(n)/bt(t),e.translate=Oe(n.min,n.max,e.origin)-e.originPoint,(e.scale>=.9999&&e.scale<=1.0001||isNaN(e.scale))&&(e.scale=1),(e.translate>=-.01&&e.translate<=.01||isNaN(e.translate))&&(e.translate=0)}function ll(e,t,n,o){jv(e.x,t.x,n.x,o?o.originX:void 0),jv(e.y,t.y,n.y,o?o.originY:void 0)}function Fv(e,t,n){e.min=n.min+t.min,e.max=e.min+bt(t)}function KP(e,t,n){Fv(e.x,t.x,n.x),Fv(e.y,t.y,n.y)}function Ov(e,t,n){e.min=t.min-n.min,e.max=e.min+bt(t)}function al(e,t,n){Ov(e.x,t.x,n.x),Ov(e.y,t.y,n.y)}const Io=()=>({x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}}),Xe=()=>({x:{min:0,max:0},y:{min:0,max:0}});function Yt(e){return[e("x"),e("y")]}function Gc(e){return e===void 0||e===1}function Fd({scale:e,scaleX:t,scaleY:n}){return!Gc(e)||!Gc(t)||!Gc(n)}function Vr(e){return Fd(e)||L0(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function L0(e){return Kv(e.x)||Kv(e.y)}function Kv(e){return e&&e!=="0%"}function ys(e,t,n){return n+t*(e-n)}function Vv(e,t,n,o,l){return l!==void 0&&(e=ys(e,l,o)),ys(e,n,o)+t}function Od(e,t=0,n=1,o,l){e.min=Vv(e.min,t,n,o,l),e.max=Vv(e.max,t,n,o,l)}function A0(e,{x:t,y:n}){Od(e.x,t.translate,t.scale,t.originPoint),Od(e.y,n.translate,n.scale,n.originPoint)}const Bv=.999999999999,Uv=1.0000000000001;function VP(e,t,n,o=!1){const l=n.length;if(!l)return;let s,u;t.x=t.y=1;for(let d=0;d<l;d++){s=n[d],u=s.projectionDelta;const{visualElement:f}=s.options;f&&f.props.style&&f.props.style.display==="contents"||(o&&s.options.layoutScroll&&s.scroll&&s!==s.root&&Fo(e,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),u&&(t.x*=u.x.scale,t.y*=u.y.scale,A0(e,u)),o&&Vr(s.latestValues)&&Fo(e,s.latestValues))}t.x<Uv&&t.x>Bv&&(t.x=1),t.y<Uv&&t.y>Bv&&(t.y=1)}function jo(e,t){e.min=e.min+t,e.max=e.max+t}function Hv(e,t,n,o,l=.5){Od(e,t,n,Oe(e.min,e.max,l),o)}function Fo(e,t){Hv(e.x,t.x,t.scaleX,t.scale,t.originX),Hv(e.y,t.y,t.scaleY,t.scale,t.originY)}function z0(e,t){return R0(FP(e.getBoundingClientRect(),t))}function BP(e,t,n){const o=z0(e,n),{scroll:l}=t;return l&&(jo(o.x,l.offset.x),jo(o.y,l.offset.y)),o}const I0=({current:e})=>e?e.ownerDocument.defaultView:null;function Oo(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}const Wv=(e,t)=>Math.abs(e-t);function UP(e,t){const n=Wv(e.x,t.x),o=Wv(e.y,t.y);return Math.sqrt(n**2+o**2)}let j0=class{constructor(t,n,{transformPagePoint:o,contextWindow:l,dragSnapToOrigin:s=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!this.lastMoveEvent||!this.lastMoveEventInfo)return;const h=qc(this.lastMoveEventInfo,this.history),y=this.startEvent!==null,v=UP(h.offset,{x:0,y:0})>=3;if(!y&&!v)return;const{point:x}=h,{timestamp:b}=ut;this.history.push({...x,timestamp:b});const{onStart:_,onMove:S}=this.handlers;y||(_&&_(this.lastMoveEvent,h),this.startEvent=this.lastMoveEvent),S&&S(this.lastMoveEvent,h)},this.handlePointerMove=(h,y)=>{this.lastMoveEvent=h,this.lastMoveEventInfo=Xc(y,this.transformPagePoint),Le.update(this.updatePoint,!0)},this.handlePointerUp=(h,y)=>{this.end();const{onEnd:v,onSessionEnd:x,resumeAnimation:b}=this.handlers;if(this.dragSnapToOrigin&&b&&b(),!this.lastMoveEvent||!this.lastMoveEventInfo)return;const _=qc(h.type==="pointercancel"?this.lastMoveEventInfo:Xc(y,this.transformPagePoint),this.history);this.startEvent&&v&&v(h,_),x&&x(h,_)},!Ff(t))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=o,this.contextWindow=l||window;const u=Xc(Dl(t),this.transformPagePoint),{point:d}=u,{timestamp:f}=ut;this.history=[{...d,timestamp:f}];const{onSessionStart:p}=n;p&&p(t,qc(u,this.history)),this.removeListeners=Ml(il(this.contextWindow,"pointermove",this.handlePointerMove),il(this.contextWindow,"pointerup",this.handlePointerUp),il(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),xr(this.updatePoint)}};function Xc(e,t){return t?{point:t(e.point)}:e}function Yv(e,t){return{x:e.x-t.x,y:e.y-t.y}}function qc({point:e},t){return{point:e,delta:Yv(e,F0(t)),offset:Yv(e,HP(t)),velocity:WP(t,.1)}}function HP(e){return e[0]}function F0(e){return e[e.length-1]}function WP(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,o=null;const l=F0(e);for(;n>=0&&(o=e[n],!(l.timestamp-o.timestamp>gn(t)));)n--;if(!o)return{x:0,y:0};const s=yn(l.timestamp-o.timestamp);if(s===0)return{x:0,y:0};const u={x:(l.x-o.x)/s,y:(l.y-o.y)/s};return u.x===1/0&&(u.x=0),u.y===1/0&&(u.y=0),u}function YP(e,{min:t,max:n},o){return t!==void 0&&e<t?e=o?Oe(t,e,o.min):Math.max(e,t):n!==void 0&&e>n&&(e=o?Oe(n,e,o.max):Math.min(e,n)),e}function Qv(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function QP(e,{top:t,left:n,bottom:o,right:l}){return{x:Qv(e.x,n,l),y:Qv(e.y,t,o)}}function Gv(e,t){let n=t.min-e.min,o=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,o]=[o,n]),{min:n,max:o}}function GP(e,t){return{x:Gv(e.x,t.x),y:Gv(e.y,t.y)}}function XP(e,t){let n=.5;const o=bt(e),l=bt(t);return l>o?n=hl(t.min,t.max-o,e.min):o>l&&(n=hl(e.min,e.max-l,t.min)),In(0,1,n)}function qP(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const O0=.35;function ZP(e=.35){return e===!1?e=0:e===!0&&(e=O0),{x:Xv(e,"left","right"),y:Xv(e,"top","bottom")}}function Xv(e,t,n){return{min:qv(e,t),max:qv(e,n)}}function qv(e,t){return typeof e=="number"?e:e[t]||0}const JP=new WeakMap;let eT=class{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Xe(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:o}=this.visualElement;if(o&&o.isPresent===!1)return;const{dragSnapToOrigin:l}=this.getProps();this.panSession=new j0(t,{onSessionStart:s=>{const{dragSnapToOrigin:u}=this.getProps();u?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Dl(s).point)},onStart:(s,u)=>{const{drag:d,dragPropagation:f,onDragStart:p}=this.getProps();if(d&&!f&&(this.openDragLock&&this.openDragLock(),this.openDragLock=zP(d),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Yt(y=>{let v=this.getAxisMotionValue(y).get()||0;if(xn.test(v)){const{projection:x}=this.visualElement;if(x&&x.layout){const b=x.layout.layoutBox[y];b&&(v=bt(b)*(parseFloat(v)/100))}}this.originPoint[y]=v}),p&&Le.postRender(()=>p(s,u)),Pd(this.visualElement,"transform");const{animationState:h}=this.visualElement;h&&h.setActive("whileDrag",!0)},onMove:(s,u)=>{const{dragPropagation:d,dragDirectionLock:f,onDirectionLock:p,onDrag:h}=this.getProps();if(!d&&!this.openDragLock)return;const{offset:y}=u;if(f&&this.currentDirection===null)return this.currentDirection=function(v,x=10){let b=null;return Math.abs(v.y)>x?b="y":Math.abs(v.x)>x&&(b="x"),b}(y),void(this.currentDirection!==null&&p&&p(this.currentDirection));this.updateAxis("x",u.point,y),this.updateAxis("y",u.point,y),this.visualElement.render(),h&&h(s,u)},onSessionEnd:(s,u)=>this.stop(s,u),resumeAnimation:()=>Yt(s=>{var u;return this.getAnimationState(s)==="paused"&&((u=this.getAxisMotionValue(s).animation)==null?void 0:u.play())})},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:l,contextWindow:I0(this.visualElement)})}stop(t,n){const o=this.isDragging;if(this.cancel(),!o)return;const{velocity:l}=n;this.startAnimation(l);const{onDragEnd:s}=this.getProps();s&&Le.postRender(()=>s(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:o}=this.getProps();!o&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,o){const{drag:l}=this.getProps();if(!o||!Ya(t,l,this.currentDirection))return;const s=this.getAxisMotionValue(t);let u=this.originPoint[t]+o[t];this.constraints&&this.constraints[t]&&(u=YP(u,this.constraints[t],this.elastic[t])),s.set(u)}resolveConstraints(){var s;const{dragConstraints:t,dragElastic:n}=this.getProps(),o=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(s=this.visualElement.projection)==null?void 0:s.layout,l=this.constraints;t&&Oo(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):this.constraints=!(!t||!o)&&QP(o.layoutBox,t),this.elastic=ZP(n),l!==this.constraints&&o&&this.constraints&&!this.hasMutatedConstraints&&Yt(u=>{this.constraints!==!1&&this.getAxisMotionValue(u)&&(this.constraints[u]=qP(o.layoutBox[u],this.constraints[u]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!Oo(t))return!1;const o=t.current,{projection:l}=this.visualElement;if(!l||!l.layout)return!1;const s=BP(o,l.root,this.visualElement.getTransformPagePoint());let u=GP(l.layout.layoutBox,s);if(n){const d=n(jP(u));this.hasMutatedConstraints=!!d,d&&(u=R0(d))}return u}startAnimation(t){const{drag:n,dragMomentum:o,dragElastic:l,dragTransition:s,dragSnapToOrigin:u,onDragTransitionEnd:d}=this.getProps(),f=this.constraints||{},p=Yt(h=>{if(!Ya(h,n,this.currentDirection))return;let y=f&&f[h]||{};u&&(y={min:0,max:0});const v=l?200:1e6,x=l?40:1e7,b={type:"inertia",velocity:o?t[h]:0,bounceStiffness:v,bounceDamping:x,timeConstant:750,restDelta:1,restSpeed:10,...s,...y};return this.startAxisValueAnimation(h,b)});return Promise.all(p).then(d)}startAxisValueAnimation(t,n){const o=this.getAxisMotionValue(t);return Pd(this.visualElement,t),o.start(zf(t,o,0,n,this.visualElement,!1))}stopAnimation(){Yt(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){Yt(t=>{var n;return(n=this.getAxisMotionValue(t).animation)==null?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)==null?void 0:n.state}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,o=this.visualElement.getProps();return o[n]||this.visualElement.getValue(t,(o.initial?o.initial[t]:void 0)||0)}snapToCursor(t){Yt(n=>{const{drag:o}=this.getProps();if(!Ya(n,o,this.currentDirection))return;const{projection:l}=this.visualElement,s=this.getAxisMotionValue(n);if(l&&l.layout){const{min:u,max:d}=l.layout.layoutBox[n];s.set(t[n]-Oe(u,d,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:o}=this.visualElement;if(!Oo(n)||!o||!this.constraints)return;this.stopAnimation();const l={x:0,y:0};Yt(u=>{const d=this.getAxisMotionValue(u);if(d&&this.constraints!==!1){const f=d.get();l[u]=XP({min:f,max:f},this.constraints[u])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",o.root&&o.root.updateScroll(),o.updateLayout(),this.resolveConstraints(),Yt(u=>{if(!Ya(u,t,null))return;const d=this.getAxisMotionValue(u),{min:f,max:p}=this.constraints[u];d.set(Oe(f,p,l[u]))})}addListeners(){if(!this.visualElement.current)return;JP.set(this.visualElement,this);const t=this.visualElement.current,n=il(t,"pointerdown",f=>{const{drag:p,dragListener:h=!0}=this.getProps();p&&h&&this.start(f)}),o=()=>{const{dragConstraints:f}=this.getProps();Oo(f)&&f.current&&(this.constraints=this.resolveRefConstraints())},{projection:l}=this.visualElement,s=l.addEventListener("measure",o);l&&!l.layout&&(l.root&&l.root.updateScroll(),l.updateLayout()),Le.read(o);const u=gl(window,"resize",()=>this.scalePositionWithinConstraints()),d=l.addEventListener("didUpdate",({delta:f,hasLayoutChanged:p})=>{this.isDragging&&p&&(Yt(h=>{const y=this.getAxisMotionValue(h);y&&(this.originPoint[h]+=f[h].translate,y.set(y.get()+f[h].translate))}),this.visualElement.render())});return()=>{u(),n(),s(),d&&d()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:o=!1,dragPropagation:l=!1,dragConstraints:s=!1,dragElastic:u=O0,dragMomentum:d=!0}=t;return{...t,drag:n,dragDirectionLock:o,dragPropagation:l,dragConstraints:s,dragElastic:u,dragMomentum:d}}};function Ya(e,t,n){return!(t!==!0&&t!==e||n!==null&&n!==e)}let tT=class extends _r{constructor(t){super(t),this.removeGroupControls=qt,this.removeListeners=qt,this.controls=new eT(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||qt}unmount(){this.removeGroupControls(),this.removeListeners()}};const Zv=e=>(t,n)=>{e&&Le.postRender(()=>e(t,n))};let nT=class extends _r{constructor(){super(...arguments),this.removePointerDownListener=qt}onPointerDown(t){this.session=new j0(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:I0(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:o,onPanEnd:l}=this.node.getProps();return{onSessionStart:Zv(t),onStart:Zv(n),onMove:o,onEnd:(s,u)=>{delete this.session,l&&Le.postRender(()=>l(s,u))}}}mount(){this.removePointerDownListener=il(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}};const{schedule:Of}=Qy(queueMicrotask,!1),K0=k.createContext({}),ss={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Jv(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const Oi={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string"){if(!ve.test(e))return e;e=parseFloat(e)}return`${Jv(e,t.target.x)}% ${Jv(e,t.target.y)}%`}},rT={correct:(e,{treeScale:t,projectionDelta:n})=>{const o=e,l=br.parse(e);if(l.length>5)return o;const s=br.createTransformer(e),u=typeof l[0]!="number"?1:0,d=n.x.scale*t.x,f=n.y.scale*t.y;l[0+u]/=d,l[1+u]/=f;const p=Oe(d,f,.5);return typeof l[2+u]=="number"&&(l[2+u]/=p),typeof l[3+u]=="number"&&(l[3+u]/=p),s(l)}},yl={};function oT(e){for(const t in e)yl[t]=e[t],Nf(t)&&(yl[t].isCSSVariable=!0)}let iT=class extends k.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:o,layoutId:l}=this.props,{projection:s}=t;oT(lT),s&&(n.group&&n.group.add(s),o&&o.register&&l&&o.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),ss.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:o,drag:l,isPresent:s}=this.props,u=o.projection;return u&&(u.isPresent=s,l||t.layoutDependency!==n||n===void 0||t.isPresent!==s?u.willUpdate():this.safeToRemove(),t.isPresent!==s&&(s?u.promote():u.relegate()||Le.postRender(()=>{const d=u.getStack();d&&d.members.length||this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),Of.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:o}=this.props,{projection:l}=t;l&&(l.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(l),o&&o.deregister&&o.deregister(l))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}};function V0(e){const[t,n]=Z$(),o=k.useContext(Wy);return D.jsx(iT,{...e,layoutGroup:o,switchLayoutGroup:k.useContext(K0),isPresent:t,safeToRemove:n})}const lT={borderRadius:{...Oi,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Oi,borderTopRightRadius:Oi,borderBottomLeftRadius:Oi,borderBottomRightRadius:Oi,boxShadow:rT};function aT(e,t,n){const o=ht(e)?e:dl(e);return o.start(zf("",o,t,n)),o.animation}function sT(e){return e instanceof SVGElement&&e.tagName!=="svg"}const uT=(e,t)=>e.depth-t.depth;let cT=class{constructor(){this.children=[],this.isDirty=!1}add(t){xf(this.children,t),this.isDirty=!0}remove(t){bf(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(uT),this.isDirty=!1,this.children.forEach(t)}};function dT(e,t){const n=vn.now(),o=({timestamp:l})=>{const s=l-n;s>=t&&(xr(o),e(s-t))};return Le.read(o,!0),()=>xr(o)}function us(e){const t=ht(e)?e.get():e;return oE(t)?t.toValue():t}const B0=["TopLeft","TopRight","BottomLeft","BottomRight"],fT=B0.length,eg=e=>typeof e=="string"?parseFloat(e):e,tg=e=>typeof e=="number"||ve.test(e);function pT(e,t,n,o,l,s){l?(e.opacity=Oe(0,n.opacity!==void 0?n.opacity:1,mT(o)),e.opacityExit=Oe(t.opacity!==void 0?t.opacity:1,0,hT(o))):s&&(e.opacity=Oe(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,o));for(let u=0;u<fT;u++){const d=`border${B0[u]}Radius`;let f=ng(t,d),p=ng(n,d);f===void 0&&p===void 0||(f||(f=0),p||(p=0),f===0||p===0||tg(f)===tg(p)?(e[d]=Math.max(Oe(eg(f),eg(p),o),0),(xn.test(p)||xn.test(f))&&(e[d]+="%")):e[d]=p)}(t.rotate||n.rotate)&&(e.rotate=Oe(t.rotate||0,n.rotate||0,o))}function ng(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const mT=U0(0,.5,a0),hT=U0(.5,.95,qt);function U0(e,t,n){return o=>o<e?0:o>t?1:n(hl(e,t,o))}function rg(e,t){e.min=t.min,e.max=t.max}function Wt(e,t){rg(e.x,t.x),rg(e.y,t.y)}function og(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function ig(e,t,n,o,l){return e=ys(e-=t,1/n,o),l!==void 0&&(e=ys(e,1/l,o)),e}function vT(e,t=0,n=1,o=.5,l,s=e,u=e){if(xn.test(t)&&(t=parseFloat(t),t=Oe(u.min,u.max,t/100)-u.min),typeof t!="number")return;let d=Oe(s.min,s.max,o);e===s&&(d-=t),e.min=ig(e.min,t,n,d,l),e.max=ig(e.max,t,n,d,l)}function lg(e,t,[n,o,l],s,u){vT(e,t[n],t[o],t[l],t.scale,s,u)}const gT=["x","scaleX","originX"],yT=["y","scaleY","originY"];function ag(e,t,n,o){lg(e.x,t,gT,n?n.x:void 0,o?o.x:void 0),lg(e.y,t,yT,n?n.y:void 0,o?o.y:void 0)}function sg(e){return e.translate===0&&e.scale===1}function H0(e){return sg(e.x)&&sg(e.y)}function ug(e,t){return e.min===t.min&&e.max===t.max}function xT(e,t){return ug(e.x,t.x)&&ug(e.y,t.y)}function cg(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function W0(e,t){return cg(e.x,t.x)&&cg(e.y,t.y)}function dg(e){return bt(e.x)/bt(e.y)}function fg(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}let bT=class{constructor(){this.members=[]}add(t){xf(this.members,t),t.scheduleRender()}remove(t){if(bf(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(l=>t===l);if(n===0)return!1;let o;for(let l=n;l>=0;l--){const s=this.members[l];if(s.isPresent!==!1){o=s;break}}return!!o&&(this.promote(o),!0)}promote(t,n){const o=this.lead;if(t!==o&&(this.prevLead=o,this.lead=t,t.show(),o)){o.instance&&o.scheduleRender(),t.scheduleRender(),t.resumeFrom=o,n&&(t.resumeFrom.preserveOpacity=!0),o.snapshot&&(t.snapshot=o.snapshot,t.snapshot.latestValues=o.animationValues||o.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:l}=t.options;l===!1&&o.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:o}=t;n.onExitComplete&&n.onExitComplete(),o&&o.options.onExitComplete&&o.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}};function wT(e,t,n){let o="";const l=e.x.translate/t.x,s=e.y.translate/t.y,u=(n==null?void 0:n.z)||0;if((l||s||u)&&(o=`translate3d(${l}px, ${s}px, ${u}px) `),t.x===1&&t.y===1||(o+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:p,rotate:h,rotateX:y,rotateY:v,skewX:x,skewY:b}=n;p&&(o=`perspective(${p}px) ${o}`),h&&(o+=`rotate(${h}deg) `),y&&(o+=`rotateX(${y}deg) `),v&&(o+=`rotateY(${v}deg) `),x&&(o+=`skewX(${x}deg) `),b&&(o+=`skewY(${b}deg) `)}const d=e.x.scale*t.x,f=e.y.scale*t.y;return d===1&&f===1||(o+=`scale(${d}, ${f})`),o||"none"}const Zc=["","X","Y","Z"],_T={visibility:"hidden"};let ST=0;function Jc(e,t,n,o){const{latestValues:l}=t;l[e]&&(n[e]=l[e],t.setStaticValue(e,0),o&&(o[e]=0))}function Y0(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=Zy(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:l,layoutId:s}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",Le,!(l||s))}const{parent:o}=e;o&&!o.hasCheckedOptimisedAppear&&Y0(o)}function Q0({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:o,resetTransform:l}){return class{constructor(s={},u=t==null?void 0:t()){this.id=ST++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(ET),this.nodes.forEach(DT),this.nodes.forEach(NT),this.nodes.forEach(PT)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=s,this.root=u?u.root||u:this,this.path=u?[...u.path,u]:[],this.parent=u,this.depth=u?u.depth+1:0;for(let d=0;d<this.path.length;d++)this.path[d].shouldResetTransform=!0;this.root===this&&(this.nodes=new cT)}addEventListener(s,u){return this.eventHandlers.has(s)||this.eventHandlers.set(s,new wf),this.eventHandlers.get(s).add(u)}notifyListeners(s,...u){const d=this.eventHandlers.get(s);d&&d.notify(...u)}hasListeners(s){return this.eventHandlers.has(s)}mount(s,u=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=sT(s),this.instance=s;const{layoutId:d,layout:f,visualElement:p}=this.options;if(p&&!p.current&&p.mount(s),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),u&&(f||d)&&(this.isLayoutDirty=!0),e){let h;const y=()=>this.root.updateBlockedByResize=!1;e(s,()=>{this.root.updateBlockedByResize=!0,h&&h(),h=dT(y,250),ss.hasAnimatedSinceResize&&(ss.hasAnimatedSinceResize=!1,this.nodes.forEach(mg))})}d&&this.root.registerSharedNode(d,this),this.options.animate!==!1&&p&&(d||f)&&this.addEventListener("didUpdate",({delta:h,hasLayoutChanged:y,hasRelativeLayoutChanged:v,layout:x})=>{if(this.isTreeAnimationBlocked())return this.target=void 0,void(this.relativeTarget=void 0);const b=this.options.transition||p.getDefaultTransition()||IT,{onLayoutAnimationStart:_,onLayoutAnimationComplete:S}=p.getProps(),$=!this.targetLayout||!W0(this.targetLayout,x),E=!y&&v;if(this.options.layoutRoot||this.resumeFrom||E||y&&($||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(h,E);const N={...yf(b,"layout"),onPlay:_,onComplete:S};(p.shouldReduceMotion||this.options.layoutRoot)&&(N.delay=0,N.type=!1),this.startAnimation(N)}else y||mg(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=x})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const s=this.getStack();s&&s.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,xr(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(RT),this.animationId++)}getTransformTemplate(){const{visualElement:s}=this.options;return s&&s.getProps().transformTemplate}willUpdate(s=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked())return void(this.options.onExitComplete&&this.options.onExitComplete());if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Y0(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let p=0;p<this.path.length;p++){const h=this.path[p];h.shouldResetTransform=!0,h.updateScroll("snapshot"),h.options.layoutRoot&&h.willUpdate(!1)}const{layoutId:u,layout:d}=this.options;if(u===void 0&&!d)return;const f=this.getTransformTemplate();this.prevTransformTemplateValue=f?f(this.latestValues,""):void 0,this.updateSnapshot(),s&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked())return this.unblockUpdate(),this.clearAllSnapshots(),void this.nodes.forEach(pg);this.isUpdating||this.nodes.forEach(CT),this.isUpdating=!1,this.nodes.forEach(MT),this.nodes.forEach(kT),this.nodes.forEach($T),this.clearAllSnapshots();const s=vn.now();ut.delta=In(0,1e3/60,s-ut.timestamp),ut.timestamp=s,ut.isProcessing=!0,Hc.update.process(ut),Hc.preRender.process(ut),Hc.render.process(ut),ut.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Of.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(TT),this.sharedNodes.forEach(LT)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Le.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Le.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){!this.snapshot&&this.instance&&(this.snapshot=this.measure(),!this.snapshot||bt(this.snapshot.measuredBox.x)||bt(this.snapshot.measuredBox.y)||(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead()||this.isLayoutDirty)))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let d=0;d<this.path.length;d++)this.path[d].updateScroll();const s=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Xe(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:u}=this.options;u&&u.notify("LayoutMeasure",this.layout.layoutBox,s?s.layoutBox:void 0)}updateScroll(s="measure"){let u=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===s&&(u=!1),u){const d=o(this.instance);this.scroll={animationId:this.root.animationId,phase:s,isRoot:d,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:d}}}resetTransform(){if(!l)return;const s=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,u=this.projectionDelta&&!H0(this.projectionDelta),d=this.getTransformTemplate(),f=d?d(this.latestValues,""):void 0,p=f!==this.prevTransformTemplateValue;s&&(u||Vr(this.latestValues)||p)&&(l(this.instance,f),this.shouldResetTransform=!1,this.scheduleRender())}measure(s=!0){const u=this.measurePageBox();let d=this.removeElementScroll(u);var f;return s&&(d=this.removeTransform(d)),xg((f=d).x),xg(f.y),{animationId:this.root.animationId,measuredBox:u,layoutBox:d,latestValues:{},source:this.id}}measurePageBox(){var d;const{visualElement:s}=this.options;if(!s)return Xe();const u=s.measureViewportBox();if(!((d=this.scroll)!=null&&d.wasRoot||this.path.some(jT))){const{scroll:f}=this.root;f&&(jo(u.x,f.offset.x),jo(u.y,f.offset.y))}return u}removeElementScroll(s){var d;const u=Xe();if(Wt(u,s),(d=this.scroll)==null?void 0:d.wasRoot)return u;for(let f=0;f<this.path.length;f++){const p=this.path[f],{scroll:h,options:y}=p;p!==this.root&&h&&y.layoutScroll&&(h.wasRoot&&Wt(u,s),jo(u.x,h.offset.x),jo(u.y,h.offset.y))}return u}applyTransform(s,u=!1){const d=Xe();Wt(d,s);for(let f=0;f<this.path.length;f++){const p=this.path[f];!u&&p.options.layoutScroll&&p.scroll&&p!==p.root&&Fo(d,{x:-p.scroll.offset.x,y:-p.scroll.offset.y}),Vr(p.latestValues)&&Fo(d,p.latestValues)}return Vr(this.latestValues)&&Fo(d,this.latestValues),d}removeTransform(s){const u=Xe();Wt(u,s);for(let d=0;d<this.path.length;d++){const f=this.path[d];if(!f.instance||!Vr(f.latestValues))continue;Fd(f.latestValues)&&f.updateSnapshot();const p=Xe(),h=f.measurePageBox();Wt(p,h),ag(u,f.latestValues,f.snapshot?f.snapshot.layoutBox:void 0,p)}return Vr(this.latestValues)&&ag(u,this.latestValues),u}setTargetDelta(s){this.targetDelta=s,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(s){this.options={...this.options,...s,crossfade:s.crossfade===void 0||s.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==ut.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(s=!1){var h;const u=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=u.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=u.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=u.isSharedProjectionDirty);const d=!!this.resumingFrom||this!==u;if(!(s||d&&this.isSharedProjectionDirty||this.isProjectionDirty||(h=this.parent)!=null&&h.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:f,layoutId:p}=this.options;if(this.layout&&(f||p)){if(this.resolvedRelativeTargetAt=ut.timestamp,!this.targetDelta&&!this.relativeTarget){const y=this.getClosestProjectingParent();y&&y.layout&&this.animationProgress!==1?(this.relativeParent=y,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Xe(),this.relativeTargetOrigin=Xe(),al(this.relativeTargetOrigin,this.layout.layoutBox,y.layout.layoutBox),Wt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if((this.relativeTarget||this.targetDelta)&&(this.target||(this.target=Xe(),this.targetWithTransforms=Xe()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),KP(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Wt(this.target,this.layout.layoutBox),A0(this.target,this.targetDelta)):Wt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const y=this.getClosestProjectingParent();y&&!!y.resumingFrom==!!this.resumingFrom&&!y.options.layoutScroll&&y.target&&this.animationProgress!==1?(this.relativeParent=y,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Xe(),this.relativeTargetOrigin=Xe(),al(this.relativeTargetOrigin,this.target,y.target),Wt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(this.parent&&!Fd(this.parent.latestValues)&&!L0(this.parent.latestValues))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var x;const s=this.getLead(),u=!!this.resumingFrom||this!==s;let d=!0;if((this.isProjectionDirty||(x=this.parent)!=null&&x.isProjectionDirty)&&(d=!1),u&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(d=!1),this.resolvedRelativeTargetAt===ut.timestamp&&(d=!1),d)return;const{layout:f,layoutId:p}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!f&&!p)return;Wt(this.layoutCorrected,this.layout.layoutBox);const h=this.treeScale.x,y=this.treeScale.y;VP(this.layoutCorrected,this.treeScale,this.path,u),!s.layout||s.target||this.treeScale.x===1&&this.treeScale.y===1||(s.target=s.layout.layoutBox,s.targetWithTransforms=Xe());const{target:v}=s;v?(this.projectionDelta&&this.prevProjectionDelta?(og(this.prevProjectionDelta.x,this.projectionDelta.x),og(this.prevProjectionDelta.y,this.projectionDelta.y)):this.createProjectionDeltas(),ll(this.projectionDelta,this.layoutCorrected,v,this.latestValues),this.treeScale.x===h&&this.treeScale.y===y&&fg(this.projectionDelta.x,this.prevProjectionDelta.x)&&fg(this.projectionDelta.y,this.prevProjectionDelta.y)||(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",v))):this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender())}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(s=!0){var u;if((u=this.options.visualElement)==null||u.scheduleRender(),s){const d=this.getStack();d&&d.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Io(),this.projectionDelta=Io(),this.projectionDeltaWithTransform=Io()}setAnimationOrigin(s,u=!1){const d=this.snapshot,f=d?d.latestValues:{},p={...this.latestValues},h=Io();this.relativeParent&&this.relativeParent.options.layoutRoot||(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!u;const y=Xe(),v=(d?d.source:void 0)!==(this.layout?this.layout.source:void 0),x=this.getStack(),b=!x||x.members.length<=1,_=!!(v&&!b&&this.options.crossfade===!0&&!this.path.some(zT));let S;this.animationProgress=0,this.mixTargetDelta=$=>{const E=$/1e3;hg(h.x,s.x,E),hg(h.y,s.y,E),this.setTargetDelta(h),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(al(y,this.layout.layoutBox,this.relativeParent.layout.layoutBox),AT(this.relativeTarget,this.relativeTargetOrigin,y,E),S&&xT(this.relativeTarget,S)&&(this.isProjectionDirty=!1),S||(S=Xe()),Wt(S,this.relativeTarget)),v&&(this.animationValues=p,pT(p,f,this.latestValues,E,_,b)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=E},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(s){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(xr(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Le.update(()=>{ss.hasAnimatedSinceResize=!0,this.currentAnimation=aT(0,1e3,{...s,onUpdate:u=>{this.mixTargetDelta(u),s.onUpdate&&s.onUpdate(u)},onStop:()=>{},onComplete:()=>{s.onComplete&&s.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const s=this.getStack();s&&s.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(1e3),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const s=this.getLead();let{targetWithTransforms:u,target:d,layout:f,latestValues:p}=s;if(u&&d&&f){if(this!==s&&this.layout&&f&&G0(this.options.animationType,this.layout.layoutBox,f.layoutBox)){d=this.target||Xe();const h=bt(this.layout.layoutBox.x);d.x.min=s.target.x.min,d.x.max=d.x.min+h;const y=bt(this.layout.layoutBox.y);d.y.min=s.target.y.min,d.y.max=d.y.min+y}Wt(u,d),Fo(u,p),ll(this.projectionDeltaWithTransform,this.layoutCorrected,u,p)}}registerSharedNode(s,u){this.sharedNodes.has(s)||this.sharedNodes.set(s,new bT),this.sharedNodes.get(s).add(u);const d=u.options.initialPromotionConfig;u.promote({transition:d?d.transition:void 0,preserveFollowOpacity:d&&d.shouldPreserveFollowOpacity?d.shouldPreserveFollowOpacity(u):void 0})}isLead(){const s=this.getStack();return!s||s.lead===this}getLead(){var u;const{layoutId:s}=this.options;return s&&((u=this.getStack())==null?void 0:u.lead)||this}getPrevLead(){var u;const{layoutId:s}=this.options;return s?(u=this.getStack())==null?void 0:u.prevLead:void 0}getStack(){const{layoutId:s}=this.options;if(s)return this.root.sharedNodes.get(s)}promote({needsReset:s,transition:u,preserveFollowOpacity:d}={}){const f=this.getStack();f&&f.promote(this,d),s&&(this.projectionDelta=void 0,this.needsReset=!0),u&&this.setOptions({transition:u})}relegate(){const s=this.getStack();return!!s&&s.relegate(this)}resetSkewAndRotation(){const{visualElement:s}=this.options;if(!s)return;let u=!1;const{latestValues:d}=s;if((d.z||d.rotate||d.rotateX||d.rotateY||d.rotateZ||d.skewX||d.skewY)&&(u=!0),!u)return;const f={};d.z&&Jc("z",s,f,this.animationValues);for(let p=0;p<Zc.length;p++)Jc(`rotate${Zc[p]}`,s,f,this.animationValues),Jc(`skew${Zc[p]}`,s,f,this.animationValues);s.render();for(const p in f)s.setStaticValue(p,f[p]),this.animationValues&&(this.animationValues[p]=f[p]);s.scheduleRender()}getProjectionStyles(s){if(!this.instance||this.isSVG)return;if(!this.isVisible)return _T;const u={visibility:""},d=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=us(s==null?void 0:s.pointerEvents)||"",u.transform=d?d(this.latestValues,""):"none",u;const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){const v={};return this.options.layoutId&&(v.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,v.pointerEvents=us(s==null?void 0:s.pointerEvents)||""),this.hasProjected&&!Vr(this.latestValues)&&(v.transform=d?d({},""):"none",this.hasProjected=!1),v}const p=f.animationValues||f.latestValues;this.applyTransformsToTarget(),u.transform=wT(this.projectionDeltaWithTransform,this.treeScale,p),d&&(u.transform=d(p,u.transform));const{x:h,y}=this.projectionDelta;u.transformOrigin=`${100*h.origin}% ${100*y.origin}% 0`,f.animationValues?u.opacity=f===this?p.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:p.opacityExit:u.opacity=f===this?p.opacity!==void 0?p.opacity:"":p.opacityExit!==void 0?p.opacityExit:0;for(const v in yl){if(p[v]===void 0)continue;const{correct:x,applyTo:b,isCSSVariable:_}=yl[v],S=u.transform==="none"?p[v]:x(p[v],f);if(b){const $=b.length;for(let E=0;E<$;E++)u[b[E]]=S}else _?this.options.visualElement.renderState.vars[v]=S:u[v]=S}return this.options.layoutId&&(u.pointerEvents=f===this?us(s==null?void 0:s.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(s=>{var u;return(u=s.currentAnimation)==null?void 0:u.stop()}),this.root.nodes.forEach(pg),this.root.sharedNodes.clear()}}}function kT(e){e.updateLayout()}function $T(e){var n;const t=((n=e.resumeFrom)==null?void 0:n.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners("didUpdate")){const{layoutBox:o,measuredBox:l}=e.layout,{animationType:s}=e.options,u=t.source!==e.layout.source;s==="size"?Yt(y=>{const v=u?t.measuredBox[y]:t.layoutBox[y],x=bt(v);v.min=o[y].min,v.max=v.min+x}):G0(s,t.layoutBox,o)&&Yt(y=>{const v=u?t.measuredBox[y]:t.layoutBox[y],x=bt(o[y]);v.max=v.min+x,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[y].max=e.relativeTarget[y].min+x)});const d=Io();ll(d,o,t.layoutBox);const f=Io();u?ll(f,e.applyTransform(l,!0),t.measuredBox):ll(f,o,t.layoutBox);const p=!H0(d);let h=!1;if(!e.resumeFrom){const y=e.getClosestProjectingParent();if(y&&!y.resumeFrom){const{snapshot:v,layout:x}=y;if(v&&x){const b=Xe();al(b,t.layoutBox,v.layoutBox);const _=Xe();al(_,o,x.layoutBox),W0(b,_)||(h=!0),y.options.layoutRoot&&(e.relativeTarget=_,e.relativeTargetOrigin=b,e.relativeParent=y)}}}e.notifyListeners("didUpdate",{layout:o,snapshot:t,delta:f,layoutDelta:d,hasLayoutChanged:p,hasRelativeLayoutChanged:h})}else if(e.isLead()){const{onExitComplete:o}=e.options;o&&o()}e.options.transition=void 0}function ET(e){e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function PT(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function TT(e){e.clearSnapshot()}function pg(e){e.clearMeasurements()}function CT(e){e.isLayoutDirty=!1}function MT(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function mg(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function DT(e){e.resolveTargetDelta()}function NT(e){e.calcProjection()}function RT(e){e.resetSkewAndRotation()}function LT(e){e.removeLeadSnapshot()}function hg(e,t,n){e.translate=Oe(t.translate,0,n),e.scale=Oe(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function vg(e,t,n,o){e.min=Oe(t.min,n.min,o),e.max=Oe(t.max,n.max,o)}function AT(e,t,n,o){vg(e.x,t.x,n.x,o),vg(e.y,t.y,n.y,o)}function zT(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const IT={duration:.45,ease:[.4,0,.1,1]},gg=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),yg=gg("applewebkit/")&&!gg("chrome/")?Math.round:qt;function xg(e){e.min=yg(e.min),e.max=yg(e.max)}function G0(e,t,n){return e==="position"||e==="preserve-aspect"&&!OP(dg(t),dg(n),.2)}function jT(e){var t;return e!==e.root&&((t=e.scroll)==null?void 0:t.wasRoot)}const FT=Q0({attachResizeListener:(e,t)=>gl(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),ed={current:void 0},X0=Q0({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!ed.current){const e=new FT({});e.mount(window),e.setOptions({layoutScroll:!0}),ed.current=e}return ed.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),OT={pan:{Feature:nT},drag:{Feature:tT,ProjectionNode:X0,MeasureLayout:V0}};function KT(e,t,n){if(e instanceof EventTarget)return[e];if(typeof e=="string"){let o=document;const l=(n==null?void 0:n[e])??o.querySelectorAll(e);return l?Array.from(l):[]}return Array.from(e)}function q0(e,t){const n=KT(e),o=new AbortController;return[n,{passive:!0,...t,signal:o.signal},()=>o.abort()]}function bg(e){return!(e.pointerType==="touch"||N0())}function VT(e,t,n={}){const[o,l,s]=q0(e,n),u=d=>{if(!bg(d))return;const{target:f}=d,p=t(f,d);if(typeof p!="function"||!f)return;const h=y=>{bg(y)&&(p(y),f.removeEventListener("pointerleave",h))};f.addEventListener("pointerleave",h,l)};return o.forEach(d=>{d.addEventListener("pointerenter",u,l)}),s}function wg(e,t,n){const{props:o}=e;e.animationState&&o.whileHover&&e.animationState.setActive("whileHover",n==="Start");const l=o["onHover"+n];l&&Le.postRender(()=>l(t,Dl(t)))}let BT=class extends _r{mount(){const{current:t}=this.node;t&&(this.unmount=VT(t,(n,o)=>(wg(this.node,o,"Start"),l=>wg(this.node,l,"End"))))}unmount(){}},UT=class extends _r{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}t&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){this.isActive&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Ml(gl(this.node.current,"focus",()=>this.onFocus()),gl(this.node.current,"blur",()=>this.onBlur()))}unmount(){}};const Z0=(e,t)=>!!t&&(e===t||Z0(e,t.parentElement)),HT=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function WT(e){return HT.has(e.tagName)||e.tabIndex!==-1}const Ji=new WeakSet;function _g(e){return t=>{t.key==="Enter"&&e(t)}}function td(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const YT=(e,t)=>{const n=e.currentTarget;if(!n)return;const o=_g(()=>{if(Ji.has(n))return;td(n,"down");const l=_g(()=>{td(n,"up")});n.addEventListener("keyup",l,t),n.addEventListener("blur",()=>td(n,"cancel"),t)});n.addEventListener("keydown",o,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",o),t)};function Sg(e){return Ff(e)&&!N0()}function QT(e,t,n={}){const[o,l,s]=q0(e,n),u=d=>{const f=d.currentTarget;if(!Sg(d)||Ji.has(f))return;Ji.add(f);const p=t(f,d),h=(x,b)=>{window.removeEventListener("pointerup",y),window.removeEventListener("pointercancel",v),Sg(x)&&Ji.has(f)&&(Ji.delete(f),typeof p=="function"&&p(x,{success:b}))},y=x=>{h(x,f===window||f===document||n.useGlobalTarget||Z0(f,x.target))},v=x=>{h(x,!1)};window.addEventListener("pointerup",y,l),window.addEventListener("pointercancel",v,l)};return o.forEach(d=>{(n.useGlobalTarget?window:d).addEventListener("pointerdown",u,l),d instanceof HTMLElement&&(d.addEventListener("focus",f=>YT(f,l)),WT(d)||d.hasAttribute("tabindex")||(d.tabIndex=0))}),s}function kg(e,t,n){const{props:o}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&o.whileTap&&e.animationState.setActive("whileTap",n==="Start");const l=o["onTap"+(n==="End"?"":n)];l&&Le.postRender(()=>l(t,Dl(t)))}let GT=class extends _r{mount(){const{current:t}=this.node;t&&(this.unmount=QT(t,(n,o)=>(kg(this.node,o,"Start"),(l,{success:s})=>kg(this.node,l,s?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}};const Kd=new WeakMap,nd=new WeakMap,XT=e=>{const t=Kd.get(e.target);t&&t(e)},qT=e=>{e.forEach(XT)};function ZT(e,t,n){const o=function({root:l,...s}){const u=l||document;nd.has(u)||nd.set(u,{});const d=nd.get(u),f=JSON.stringify(s);return d[f]||(d[f]=new IntersectionObserver(qT,{root:l,...s})),d[f]}(t);return Kd.set(e,n),o.observe(e),()=>{Kd.delete(e),o.unobserve(e)}}const JT={some:0,all:1};let eC=class extends _r{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:o,amount:l="some",once:s}=t,u={root:n?n.current:void 0,rootMargin:o,threshold:typeof l=="number"?l:JT[l]};return ZT(this.node.current,u,d=>{const{isIntersecting:f}=d;if(this.isInView===f||(this.isInView=f,s&&!f&&this.hasEnteredView))return;f&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",f);const{onViewportEnter:p,onViewportLeave:h}=this.node.getProps(),y=f?p:h;y&&y(d)})}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(function({viewport:o={}},{viewport:l={}}={}){return s=>o[s]!==l[s]}(t,n))&&this.startObserver()}unmount(){}};const tC={inView:{Feature:eC},tap:{Feature:GT},focus:{Feature:UT},hover:{Feature:BT}},nC={layout:{ProjectionNode:X0,MeasureLayout:V0}},J0=k.createContext({strict:!1}),Ls=k.createContext({});function As(e){return Ns(e.animate)||jf.some(t=>vl(e[t]))}function ex(e){return!!(As(e)||e.variants)}function rC(e,t){if(As(e)){const{initial:n,animate:o}=e;return{initial:n===!1||vl(n)?n:void 0,animate:vl(o)?o:void 0}}return e.inherit!==!1?t:{}}function oC(e){const{initial:t,animate:n}=rC(e,k.useContext(Ls));return k.useMemo(()=>({initial:t,animate:n}),[$g(t),$g(n)])}function $g(e){return Array.isArray(e)?e.join(" "):e}const Eg={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Yo={};for(const e in Eg)Yo[e]={isEnabled:t=>Eg[e].some(n=>!!t[n])};function iC(e){for(const t in e)Yo[t]={...Yo[t],...e[t]}}const lC=Symbol.for("motionComponentSymbol");function aC(e,t,n){return k.useCallback(o=>{o&&e.onMount&&e.onMount(o),t&&(o?t.mount(o):t.unmount()),n&&(typeof n=="function"?n(o):Oo(n)&&(n.current=o))},[t])}function sC(e,t,n,o,l){var _,S;const{visualElement:s}=k.useContext(Ls),u=k.useContext(J0),d=k.useContext(vf),f=k.useContext(Yy).reducedMotion,p=k.useRef(null);o=o||u.renderer,!p.current&&o&&(p.current=o(e,{visualState:t,parent:s,props:n,presenceContext:d,blockInitialAnimation:!!d&&d.initial===!1,reducedMotionConfig:f}));const h=p.current,y=k.useContext(K0);!h||h.projection||!l||h.type!=="html"&&h.type!=="svg"||function($,E,N,O){const{layoutId:M,layout:I,drag:z,dragConstraints:P,layoutScroll:K,layoutRoot:J}=E;$.projection=new N($.latestValues,E["data-framer-portal-id"]?void 0:tx($.parent)),$.projection.setOptions({layoutId:M,layout:I,alwaysMeasureLayout:!!z||P&&Oo(P),visualElement:$,animationType:typeof I=="string"?I:"both",initialPromotionConfig:O,layoutScroll:K,layoutRoot:J})}(p.current,n,l,y);const v=k.useRef(!1);k.useInsertionEffect(()=>{h&&v.current&&h.update(n,d)});const x=n[qy],b=k.useRef(!!x&&!((_=window.MotionHandoffIsComplete)!=null&&_.call(window,x))&&((S=window.MotionHasOptimisedAnimation)==null?void 0:S.call(window,x)));return q$(()=>{h&&(v.current=!0,window.MotionIsMounted=!0,h.updateFeatures(),Of.render(h.render),b.current&&h.animationState&&h.animationState.animateChanges())}),k.useEffect(()=>{h&&(!b.current&&h.animationState&&h.animationState.animateChanges(),b.current&&(queueMicrotask(()=>{var $;($=window.MotionHandoffMarkAsComplete)==null||$.call(window,x)}),b.current=!1))}),h}function tx(e){if(e)return e.options.allowProjection!==!1?e.projection:tx(e.parent)}function uC({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:o,Component:l}){function s(d,f){let p;const h={...k.useContext(Yy),...d,layoutId:cC(d)},{isStatic:y}=h,v=oC(d),x=o(d,y);if(!y&&hf){(function(_,S){k.useContext(J0).strict})();const b=function(_){const{drag:S,layout:$}=Yo;if(!S&&!$)return{};const E={...S,...$};return{MeasureLayout:S!=null&&S.isEnabled(_)||$!=null&&$.isEnabled(_)?E.MeasureLayout:void 0,ProjectionNode:E.ProjectionNode}}(h);p=b.MeasureLayout,v.visualElement=sC(l,x,h,t,b.ProjectionNode)}return D.jsxs(Ls.Provider,{value:v,children:[p&&v.visualElement?D.jsx(p,{visualElement:v.visualElement,...h}):null,n(l,d,aC(x,v.visualElement,f),x,y,v.visualElement)]})}e&&iC(e),s.displayName=`motion.${typeof l=="string"?l:`create(${l.displayName??l.name??""})`}`;const u=k.forwardRef(s);return u[lC]=l,u}function cC({layoutId:e}){const t=k.useContext(Wy).id;return t&&e!==void 0?t+"-"+e:e}function nx(e,{layout:t,layoutId:n}){return Zr.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!yl[e]||e==="opacity")}const rx=(e,t)=>t&&typeof e=="number"?t.transform(e):e,dC={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},fC=Xo.length;function pC(e,t,n){let o="",l=!0;for(let s=0;s<fC;s++){const u=Xo[s],d=e[u];if(d===void 0)continue;let f=!0;if(f=typeof d=="number"?d===(u.startsWith("scale")?1:0):parseFloat(d)===0,!f||n){const p=rx(d,Mf[u]);f||(l=!1,o+=`${dC[u]||u}(${p}) `),n&&(t[u]=p)}}return o=o.trim(),n?o=n(t,l?"":o):l&&(o="none"),o}function Kf(e,t,n){const{style:o,vars:l,transformOrigin:s}=e;let u=!1,d=!1;for(const f in t){const p=t[f];if(Zr.has(f))u=!0;else if(Nf(f))l[f]=p;else{const h=rx(p,Mf[f]);f.startsWith("origin")?(d=!0,s[f]=h):o[f]=h}}if(t.transform||(u||n?o.transform=pC(t,e.transform,n):o.transform&&(o.transform="none")),d){const{originX:f="50%",originY:p="50%",originZ:h=0}=s;o.transformOrigin=`${f} ${p} ${h}`}}const Vf=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function ox(e,t,n){for(const o in t)ht(t[o])||nx(o,n)||(e[o]=t[o])}function mC(e,t){const n={};return ox(n,e.style||{},e),Object.assign(n,function({transformTemplate:o},l){return k.useMemo(()=>{const s=Vf();return Kf(s,l,o),Object.assign({},s.vars,s.style)},[l])}(e,t)),n}function hC(e,t){const n={},o=mC(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,o.userSelect=o.WebkitUserSelect=o.WebkitTouchCallout="none",o.touchAction=e.drag===!0?"none":"pan-"+(e.drag==="x"?"y":"x")),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=o,n}const vC=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function xs(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||vC.has(e)}let ix=e=>!xs(e);function gC(e){e&&(ix=t=>t.startsWith("on")?!xs(t):e(t))}try{gC(require("@emotion/is-prop-valid").default)}catch{}function yC(e,t,n){const o={};for(const l in e)l==="values"&&typeof e.values=="object"||(ix(l)||n===!0&&xs(l)||!t&&!xs(l)||e.draggable&&l.startsWith("onDrag"))&&(o[l]=e[l]);return o}const xC=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Bf(e){return typeof e=="string"&&!e.includes("-")&&!!(xC.indexOf(e)>-1||/[A-Z]/u.test(e))}const bC={offset:"stroke-dashoffset",array:"stroke-dasharray"},wC={offset:"strokeDashoffset",array:"strokeDasharray"};function _C(e,t,n=1,o=0,l=!0){e.pathLength=1;const s=l?bC:wC;e[s.offset]=ve.transform(-o);const u=ve.transform(t),d=ve.transform(n);e[s.array]=`${u} ${d}`}function Pg(e,t,n){return typeof e=="string"?e:ve.transform(t+n*e)}function SC(e,t,n){return`${Pg(t,e.x,e.width)} ${Pg(n,e.y,e.height)}`}function Uf(e,{attrX:t,attrY:n,attrScale:o,originX:l,originY:s,pathLength:u,pathSpacing:d=1,pathOffset:f=0,...p},h,y){if(Kf(e,p,y),h)return void(e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox));e.attrs=e.style,e.style={};const{attrs:v,style:x,dimensions:b}=e;v.transform&&(b&&(x.transform=v.transform),delete v.transform),b&&(l!==void 0||s!==void 0||x.transform)&&(x.transformOrigin=SC(b,l!==void 0?l:.5,s!==void 0?s:.5)),t!==void 0&&(v.x=t),n!==void 0&&(v.y=n),o!==void 0&&(v.scale=o),u!==void 0&&_C(v,u,d,f,!1)}const lx=()=>({...Vf(),attrs:{}}),Hf=e=>typeof e=="string"&&e.toLowerCase()==="svg";function kC(e,t,n,o){const l=k.useMemo(()=>{const s=lx();return Uf(s,t,Hf(o),e.transformTemplate),{...s.attrs,style:{...s.style}}},[t]);if(e.style){const s={};ox(s,e.style,e),l.style={...s,...l.style}}return l}function $C(e=!1){return(t,n,o,{latestValues:l},s)=>{const u=(Bf(t)?kC:hC)(n,l,s,t),d=yC(n,typeof t=="string",e),f=t!==k.Fragment?{...d,...u,ref:o}:{},{children:p}=n,h=k.useMemo(()=>ht(p)?p.get():p,[p]);return k.createElement(t,{...f,children:h})}}const ax=e=>(t,n)=>{const o=k.useContext(Ls),l=k.useContext(vf),s=()=>function({scrapeMotionValuesFromProps:u,createRenderState:d,onUpdate:f},p,h,y){const v={latestValues:EC(p,h,y,u),renderState:d()};return f&&(v.onMount=x=>f({props:p,current:x,...v}),v.onUpdate=x=>f(x)),v}(e,t,o,l);return n?s():X$(s)};function EC(e,t,n,o){const l={},s=o(e,{});for(const v in s)l[v]=us(s[v]);let{initial:u,animate:d}=e;const f=As(e),p=ex(e);t&&p&&!f&&e.inherit!==!1&&(u===void 0&&(u=t.initial),d===void 0&&(d=t.animate));let h=!!n&&n.initial===!1;h=h||u===!1;const y=h?d:u;if(y&&typeof y!="boolean"&&!Ns(y)){const v=Array.isArray(y)?y:[y];for(let x=0;x<v.length;x++){const b=gf(e,v[x]);if(b){const{transitionEnd:_,transition:S,...$}=b;for(const E in $){let N=$[E];Array.isArray(N)&&(N=N[h?N.length-1:0]),N!==null&&(l[E]=N)}for(const E in _)l[E]=_[E]}}}return l}function Wf(e,t,n){var s;const{style:o}=e,l={};for(const u in o)(ht(o[u])||t.style&&ht(t.style[u])||nx(u,e)||((s=n==null?void 0:n.getValue(u))==null?void 0:s.liveStyle)!==void 0)&&(l[u]=o[u]);return l}const PC={useVisualState:ax({scrapeMotionValuesFromProps:Wf,createRenderState:Vf})};function sx(e,t){try{t.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{t.dimensions={x:0,y:0,width:0,height:0}}}function ux(e,{style:t,vars:n},o,l){Object.assign(e.style,t,l&&l.getProjectionStyles(o));for(const s in n)e.style.setProperty(s,n[s])}const cx=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function dx(e,t,n,o){ux(e,t,void 0,o);for(const l in t.attrs)e.setAttribute(cx.has(l)?l:_f(l),t.attrs[l])}function fx(e,t,n){const o=Wf(e,t,n);for(const l in e)(ht(e[l])||ht(t[l]))&&(o[Xo.indexOf(l)!==-1?"attr"+l.charAt(0).toUpperCase()+l.substring(1):l]=e[l]);return o}const Tg=["x","y","width","height","cx","cy","r"],TC={useVisualState:ax({scrapeMotionValuesFromProps:fx,createRenderState:lx,onUpdate:({props:e,prevProps:t,current:n,renderState:o,latestValues:l})=>{if(!n)return;let s=!!e.drag;if(!s){for(const d in l)if(Zr.has(d)){s=!0;break}}if(!s)return;let u=!t;if(t)for(let d=0;d<Tg.length;d++){const f=Tg[d];e[f]!==t[f]&&(u=!0)}u&&Le.read(()=>{sx(n,o),Le.render(()=>{Uf(o,l,Hf(n.tagName),e.transformTemplate),dx(n,o)})})}})};function CC(e,t){return function(n,{forwardMotionProps:o}={forwardMotionProps:!1}){const l={...Bf(n)?TC:PC,preloadedFeatures:e,useRender:$C(o),createVisualElement:t,Component:n};return uC(l)}}const Vd={current:null},px={current:!1};function MC(){if(px.current=!0,hf)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Vd.current=e.matches;e.addListener(t),t()}else Vd.current=!1}const DC=[..._0,mt,br],NC=e=>DC.find(w0(e)),RC=new WeakMap;function LC(e,t,n){for(const o in t){const l=t[o],s=n[o];if(ht(l))e.addValue(o,l);else if(ht(s))e.addValue(o,dl(l,{owner:e}));else if(s!==l)if(e.hasValue(o)){const u=e.getValue(o);u.liveStyle===!0?u.jump(l):u.hasAnimated||u.set(l)}else{const u=e.getStaticValue(o);e.addValue(o,dl(u!==void 0?u:l,{owner:e}))}}for(const o in n)t[o]===void 0&&e.removeValue(o);return t}const Cg=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let AC=class{scrapeMotionValuesFromProps(t,n,o){return{}}constructor({parent:t,props:n,presenceContext:o,reducedMotionConfig:l,blockInitialAnimation:s,visualState:u},d={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Df,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const x=vn.now();this.renderScheduledAt<x&&(this.renderScheduledAt=x,Le.render(this.render,!1,!0))};const{latestValues:f,renderState:p,onUpdate:h}=u;this.onUpdate=h,this.latestValues=f,this.baseTarget={...f},this.initialValues=n.initial?{...f}:{},this.renderState=p,this.parent=t,this.props=n,this.presenceContext=o,this.depth=t?t.depth+1:0,this.reducedMotionConfig=l,this.options=d,this.blockInitialAnimation=!!s,this.isControllingVariants=As(n),this.isVariantNode=ex(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:y,...v}=this.scrapeMotionValuesFromProps(n,{},this);for(const x in v){const b=v[x];f[x]!==void 0&&ht(b)&&b.set(f[x],!1)}}mount(t){this.current=t,RC.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,o)=>this.bindToMotionValue(o,n)),px.current||MC(),this.shouldReduceMotion=this.reducedMotionConfig!=="never"&&(this.reducedMotionConfig==="always"||Vd.current),this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),xr(this.notifyUpdate),xr(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const n=this.features[t];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(t,n){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const o=Zr.has(t);o&&this.onBindTransform&&this.onBindTransform();const l=n.on("change",d=>{this.latestValues[t]=d,this.props.onUpdate&&Le.preRender(this.notifyUpdate),o&&this.projection&&(this.projection.isTransformDirty=!0)}),s=n.on("renderRequest",this.scheduleRender);let u;window.MotionCheckAppearSync&&(u=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{l(),s(),u&&u(),n.owner&&n.stop()})}sortNodePosition(t){return this.current&&this.sortInstanceNodePosition&&this.type===t.type?this.sortInstanceNodePosition(this.current,t.current):0}updateFeatures(){let t="animation";for(t in Yo){const n=Yo[t];if(!n)continue;const{isEnabled:o,Feature:l}=n;if(!this.features[t]&&l&&o(this.props)&&(this.features[t]=new l(this)),this.features[t]){const s=this.features[t];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Xe()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let o=0;o<Cg.length;o++){const l=Cg[o];this.propEventSubscriptions[l]&&(this.propEventSubscriptions[l](),delete this.propEventSubscriptions[l]);const s=t["on"+l];s&&(this.propEventSubscriptions[l]=this.on(l,s))}this.prevMotionValues=LC(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const o=this.values.get(t);n!==o&&(o&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let o=this.values.get(t);return o===void 0&&n!==void 0&&(o=dl(n===null?void 0:n,{owner:this}),this.addValue(t,o)),o}readValue(t,n){let o=this.latestValues[t]===void 0&&this.current?this.getBaseTargetFromProps(this.props,t)??this.readValueFromInstance(this.current,t,this.options):this.latestValues[t];return o!=null&&(typeof o=="string"&&(y0(o)||u0(o))?o=parseFloat(o):!NC(o)&&br.test(n)&&(o=m0(t,n)),this.setBaseTarget(t,ht(o)?o.get():o)),ht(o)?o.get():o}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var s;const{initial:n}=this.props;let o;if(typeof n=="string"||typeof n=="object"){const u=gf(this.props,n,(s=this.presenceContext)==null?void 0:s.custom);u&&(o=u[t])}if(n&&o!==void 0)return o;const l=this.getBaseTargetFromProps(this.props,t);return l===void 0||ht(l)?this.initialValues[t]!==void 0&&o===void 0?void 0:this.baseTarget[t]:l}on(t,n){return this.events[t]||(this.events[t]=new wf),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}},mx=class extends AC{constructor(){super(...arguments),this.KeyframeResolver=S0}sortInstanceNodePosition(t,n){return 2&t.compareDocumentPosition(n)?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:o}){delete n[t],delete o[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;ht(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}};function zC(e){return window.getComputedStyle(e)}let IC=class extends mx{constructor(){super(...arguments),this.type="html",this.renderInstance=ux}readValueFromInstance(t,n){if(Zr.has(n))return LE(t,n);{const o=zC(t),l=(Nf(n)?o.getPropertyValue(n):o[n])||0;return typeof l=="string"?l.trim():l}}measureInstanceViewportBox(t,{transformPagePoint:n}){return z0(t,n)}build(t,n,o){Kf(t,n,o.transformTemplate)}scrapeMotionValuesFromProps(t,n,o){return Wf(t,n,o)}},jC=class extends mx{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Xe,this.updateDimensions=()=>{this.current&&!this.renderState.dimensions&&sx(this.current,this.renderState)}}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(Zr.has(n)){const o=p0(n);return o&&o.default||0}return n=cx.has(n)?n:_f(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,o){return fx(t,n,o)}onBindTransform(){this.current&&!this.renderState.dimensions&&Le.postRender(this.updateDimensions)}build(t,n,o){Uf(t,n,this.isSVGTag,o.transformTemplate)}renderInstance(t,n,o,l){dx(t,n,o,l)}mount(t){this.isSVGTag=Hf(t.tagName),super.mount(t)}};const FC=(e,t)=>Bf(e)?new jC(t):new IC(t,{allowProjection:e!==k.Fragment}),OC=CC({...AP,...tC,...OT,...nC},FC),hx=J$(OC),KC={STANDARD:`cubic-bezier(${[.2,0,0,1].toString()})`};var rd={ripple:"ripple-module_ripple__8Y3pc",hovered:"ripple-module_hovered__nOsN-",pressed:"ripple-module_pressed__WGjcN"};lt(`.ripple-module_ripple__8Y3pc {\r
  inset: 0;\r
  cursor: inherit;\r
  overflow: hidden;\r
  position: absolute;\r
  border-radius: inherit;\r
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\r
  &:before,\r
  &:after {\r
    content: '';\r
    opacity: 0;\r
    position: absolute;\r
  }\r
  &:before {\r
    background-color: var(\r
      --md-ripple-hover-color,\r
      var(--md-sys-color-on-surface)\r
    );\r
    inset: 0;\r
    transition:\r
      opacity 15ms linear,\r
      background-color 15ms linear;\r
  }\r
  &:after {\r
    background: radial-gradient(\r
      closest-side,\r
      var(--md-ripple-pressed-color, var(--md-sys-color-on-surface))\r
        max(100% - 70px, 65%),\r
      transparent 100%\r
    );\r
    transform-origin: center center;\r
    transition: opacity 375ms linear;\r
  }\r
  &.ripple-module_hovered__nOsN-:before {\r
    background-color: var(\r
      --md-ripple-hover-color,\r
      var(--md-sys-color-on-surface)\r
    );\r
    opacity: var(--md-ripple-hover-opacity, 0.08);\r
  }\r
  &.ripple-module_pressed__WGjcN:after {\r
    opacity: var(--md-ripple-pressed-opacity, 0.12);\r
    transition-duration: 105ms;\r
  }\r
}\r
`);const VC=e=>{const[t,n]=k.useState(null);return k.useEffect(()=>{var o,l;const s=(o=e.current)===null||o===void 0?void 0:o.getAttribute("for");if(s){const u=document.getElementById(s),d=(l=e.current)===null||l===void 0?void 0:l.parentElement;n(u||d)}},[e]),t};var yt;(function(e){e[e.INACTIVE=0]="INACTIVE",e[e.TOUCH_DELAY=1]="TOUCH_DELAY",e[e.HOLDING=2]="HOLDING",e[e.WAITING_FOR_CLICK=3]="WAITING_FOR_CLICK"})(yt||(yt={}));const BC=["click","keydown","contextmenu","pointercancel","pointerdown","pointerenter","pointerleave","pointerup"],yr=e=>{const{id:t,disabled:n=!1,style:o,className:l}=e,s=t||`actify-ripple${k.useId()}`,[u,d]=k.useState(!1),[f,p]=k.useState(!1),h=k.useRef(null),y=VC(h),v=k.useRef(yt.INACTIVE),x=k.useRef(""),b=k.useRef(""),_=k.useRef(0),S=k.useRef(null),$=k.useRef(null),E=k.useRef(!1),N=({pointerType:T})=>T==="touch",O=T=>{const{height:B,width:te}=h.current.getBoundingClientRect(),se={x:(te-_.current)/2,y:(B-_.current)/2};let H;return H=T instanceof PointerEvent?(Q=>{const{scrollX:re,scrollY:ee}=window,{left:A,top:Y}=h.current.getBoundingClientRect(),fe=re+A,de=ee+Y,{pageX:pe,pageY:ye}=Q;return{x:pe-fe,y:ye-de}})(T):{x:te/2,y:B/2},H={x:H.x-_.current/2,y:H.y-_.current/2},{startPoint:H,endPoint:se}},M=T=>{var B,te;if(!h.current)return;p(!0),(B=S.current)===null||B===void 0||B.cancel(),(()=>{const{height:ee,width:A}=h.current.getBoundingClientRect(),Y=Math.max(ee,A),fe=Math.max(.35*Y,75),de=Math.floor(.2*Y),pe=Math.sqrt(Math.pow(A,2)+Math.pow(ee,2))+10;_.current=de,b.current=""+(pe+fe)/de,x.current=`${_.current}px`})();const{startPoint:se,endPoint:H}=O(T),Q=`${se.x}px, ${se.y}px`,re=`${H.x}px, ${H.y}px`;S.current=(te=h.current)===null||te===void 0?void 0:te.animate({top:[0,0],left:[0,0],height:[x.current,x.current],width:[x.current,x.current],transform:[`translate(${Q}) scale(1)`,`translate(${re}) scale(${b.current})`]},{pseudoElement:"::after",duration:450,easing:KC.STANDARD,fill:"forwards"})},I=()=>Vc(void 0,void 0,void 0,function*(){$.current=null,v.current=yt.INACTIVE;const T=S.current;let B=1/0;typeof(T==null?void 0:T.currentTime)=="number"?B=T.currentTime:T!=null&&T.currentTime&&(B=T.currentTime.to("ms").value),B>=225?p(!1):(yield new Promise(te=>setTimeout(te,225-B)),S.current===T&&p(!1))}),z=T=>{if(n||!T.isPrimary||$.current&&$.current.pointerId!==T.pointerId)return!1;if(T.type==="pointerenter"||T.type==="pointerleave")return!N(T);const B=T.buttons===1;return N(T)||B},P=T=>{z(T)&&I()},K=T=>Vc(void 0,void 0,void 0,function*(){if(z(T)){if($.current=T,!N(T))return v.current=yt.WAITING_FOR_CLICK,void M(T);E.current&&!(({x:B,y:te})=>{const{top:se,left:H,bottom:Q,right:re}=h.current.getBoundingClientRect();return B>=H&&B<=re&&te>=se&&te<=Q})(T)||(E.current=!1,v.current=yt.TOUCH_DELAY,yield new Promise(B=>{setTimeout(B,150)}),v.current===yt.TOUCH_DELAY&&(v.current=yt.HOLDING,M(T)))}}),J=T=>{z(T)&&d(!0)},W=T=>{z(T)&&(d(!1),v.current!==yt.INACTIVE&&I())},U=T=>{if(z(T)){if(v.current!==yt.HOLDING)return v.current===yt.TOUCH_DELAY?(v.current=yt.WAITING_FOR_CLICK,void M($.current)):void 0;v.current=yt.WAITING_FOR_CLICK}};return k.useEffect(()=>{if(y)for(const T of BC)y.addEventListener(T,B=>Vc(void 0,void 0,void 0,function*(){if(B.type!="keydown"||B.code=="Enter"||B.code=="Space")switch(B.type){case"click":case"keydown":v.current!==yt.WAITING_FOR_CLICK?v.current===yt.INACTIVE&&(M(),I()):I();break;case"contextmenu":n||(E.current=!0,I());break;case"pointercancel":P(B);break;case"pointerdown":yield K(B);break;case"pointerenter":J(B);break;case"pointerleave":W(B);break;case"pointerup":U(B)}}))},[h.current]),D.jsx("label",{ref:h,style:o,htmlFor:s,"aria-hidden":"true",className:Ye(rd.ripple,u&&rd.hovered,f&&rd.pressed,l)})};yr.displayName="Actify.Ripple";var od={root:"badges-module_root__h4kuY",badge:"badges-module_badge__CcPnD",primary:"badges-module_primary__H40jN",secondary:"badges-module_secondary__KmLUr",tertiary:"badges-module_tertiary__wxgES",error:"badges-module_error__fQ-21"};lt(`.badges-module_root__h4kuY {\r
  display: inline-flex;\r
  position: relative;\r
}\r
.badges-module_badge__CcPnD {\r
  padding: 4px;\r
  display: grid;\r
  font-size: 0.75rem;\r
  font-weight: 500;\r
  line-height: 1;\r
  min-width: 1.5rem;\r
  min-height: 1.5rem;\r
  top: 4%;\r
  position: absolute;\r
  right: 2%;\r
  border-radius: 9999px;\r
  place-items: center;\r
  transform: translate(50%, -50%);\r
}\r
.badges-module_primary__H40jN {\r
  color: var(--md-sys-color-on-primary);\r
  background-color: var(--md-sys-color-primary);\r
}\r
.badges-module_secondary__KmLUr {\r
  color: var(--md-sys-color-on-secondary);\r
  background-color: var(--md-sys-color-secondary);\r
}\r
.badges-module_tertiary__wxgES {\r
  color: var(--md-sys-color-on-tertiary);\r
  background-color: var(--md-sys-color-tertiary);\r
}\r
.badges-module_error__fQ-21 {\r
  color: var(--md-sys-color-on-error);\r
  background-color: var(--md-sys-color-error);\r
}\r
`);const UC=e=>{const{color:t="error",value:n,className:o,style:l,children:s}=e,u=an(e,["color","value","className","style","children"]),d=k.useMemo(()=>!!n&&(parseInt(n.toString())>999?"999+":n),[n]),f=Ye(od.badge,od[t]);return D.jsxs("div",{style:l,className:Ye(od.root,o),children:[s,d&&D.jsx("span",Object.assign({className:f},u,{children:d}))]})},HC=k.createContext(null);let dr=null;function Yf(e,t="assertive",n=7e3){dr?dr.announce(e,t,n):(dr=new WC,(typeof IS_REACT_ACT_ENVIRONMENT=="boolean"?IS_REACT_ACT_ENVIRONMENT:typeof jest<"u")?dr.announce(e,t,n):setTimeout(()=>{dr!=null&&dr.isAttached()&&(dr==null||dr.announce(e,t,n))},100))}let WC=class{isAttached(){var t;return(t=this.node)===null||t===void 0?void 0:t.isConnected}createLog(t){let n=document.createElement("div");return n.setAttribute("role","log"),n.setAttribute("aria-live",t),n.setAttribute("aria-relevant","additions"),n}destroy(){this.node&&(document.body.removeChild(this.node),this.node=null)}announce(t,n="assertive",o=7e3){var l,s;if(!this.node)return;let u=document.createElement("div");typeof t=="object"?(u.setAttribute("role","img"),u.setAttribute("aria-labelledby",t["aria-labelledby"])):u.textContent=t,n==="assertive"?(l=this.assertiveLog)===null||l===void 0||l.appendChild(u):(s=this.politeLog)===null||s===void 0||s.appendChild(u),t!==""&&setTimeout(()=>{u.remove()},o)}clear(t){this.node&&(t&&t!=="assertive"||!this.assertiveLog||(this.assertiveLog.innerHTML=""),t&&t!=="polite"||!this.politeLog||(this.politeLog.innerHTML=""))}constructor(){this.node=null,this.assertiveLog=null,this.politeLog=null,typeof document<"u"&&(this.node=document.createElement("div"),this.node.dataset.liveAnnouncer="true",Object.assign(this.node.style,{border:0,clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap"}),this.assertiveLog=this.createLog("assertive"),this.node.appendChild(this.assertiveLog),this.politeLog=this.createLog("polite"),this.node.appendChild(this.politeLog),document.body.prepend(this.node))}};if(typeof HTMLTemplateElement<"u"){const e=Object.getOwnPropertyDescriptor(Node.prototype,"firstChild").get;Object.defineProperty(HTMLTemplateElement.prototype,"firstChild",{configurable:!0,enumerable:!0,get:function(){return this.dataset.reactAriaHidden?this.content.firstChild:e.call(this)}})}const YC=k.createContext(!1);function QC(e){let t=(n,o)=>k.useContext(YC)?null:e(n,o);return t.displayName=e.displayName||e.name,k.forwardRef(t)}const GC=new Set(["id"]),XC=new Set(["aria-label","aria-labelledby","aria-describedby","aria-details"]),qC=new Set(["href","hrefLang","target","rel","download","ping","referrerPolicy"]),ZC=/^(data-.*)$/;function Jr(e,t={}){let{labelable:n,isLink:o,propNames:l}=t,s={};for(const u in e)Object.prototype.hasOwnProperty.call(e,u)&&(GC.has(u)||n&&XC.has(u)||o&&qC.has(u)||l!=null&&l.has(u)||ZC.test(u))&&(s[u]=e[u]);return s}const Me=e=>{var t;return(t=e==null?void 0:e.ownerDocument)!==null&&t!==void 0?t:document},It=e=>e&&"window"in e&&e.window===e?e:Me(e).defaultView||window;let No=new Map,Bd=new Set;function Mg(){if(typeof window>"u")return;function e(n){return"propertyName"in n}let t=n=>{if(!e(n)||!n.target)return;let o=No.get(n.target);if(o&&(o.delete(n.propertyName),o.size===0&&(n.target.removeEventListener("transitioncancel",t),No.delete(n.target)),No.size===0)){for(let l of Bd)l();Bd.clear()}};document.body.addEventListener("transitionrun",n=>{if(!e(n)||!n.target)return;let o=No.get(n.target);o||(o=new Set,No.set(n.target,o),n.target.addEventListener("transitioncancel",t,{once:!0})),o.add(n.propertyName)}),document.body.addEventListener("transitionend",t)}function vx(e){requestAnimationFrame(()=>{No.size===0?e():Bd.add(e)})}typeof document<"u"&&(document.readyState!=="loading"?Mg():document.addEventListener("DOMContentLoaded",Mg));function zs(e){var t;return typeof window<"u"&&window.navigator!=null&&(((t=window.navigator.userAgentData)===null||t===void 0?void 0:t.brands.some(n=>e.test(n.brand)))||e.test(window.navigator.userAgent))}function Qf(e){var t;return typeof window<"u"&&window.navigator!=null&&e.test(((t=window.navigator.userAgentData)===null||t===void 0?void 0:t.platform)||window.navigator.platform)}function Vn(e){let t=null;return()=>(t==null&&(t=e()),t)}const Qr=Vn(function(){return Qf(/^Mac/i)}),JC=Vn(function(){return Qf(/^iPhone/i)}),gx=Vn(function(){return Qf(/^iPad/i)||Qr()&&navigator.maxTouchPoints>1}),Is=Vn(function(){return JC()||gx()}),eM=Vn(function(){return Qr()||Is()}),yx=Vn(function(){return zs(/AppleWebKit/i)&&!xx()}),xx=Vn(function(){return zs(/Chrome/i)}),xl=Vn(function(){return zs(/Android/i)}),tM=Vn(function(){return zs(/Firefox/i)});let Ko="default",Ud="",cs=new WeakMap;function Dg(e){if(Is()){if(Ko==="default"){const t=Me(e);Ud=t.documentElement.style.webkitUserSelect,t.documentElement.style.webkitUserSelect="none"}Ko="disabled"}else if(e instanceof HTMLElement||e instanceof SVGElement){let t="userSelect"in e.style?"userSelect":"webkitUserSelect";cs.set(e,e.style[t]),e.style[t]="none"}}function id(e){if(Is()){if(Ko!=="disabled")return;Ko="restoring",setTimeout(()=>{vx(()=>{if(Ko==="restoring"){const t=Me(e);t.documentElement.style.webkitUserSelect==="none"&&(t.documentElement.style.webkitUserSelect=Ud||""),Ud="",Ko="default"}})},300)}else if((e instanceof HTMLElement||e instanceof SVGElement)&&e&&cs.has(e)){let t=cs.get(e),n="userSelect"in e.style?"userSelect":"webkitUserSelect";e.style[n]==="none"&&(e.style[n]=t),e.getAttribute("style")===""&&e.removeAttribute("style"),cs.delete(e)}}const bl=ie.createContext({register:()=>{}});bl.displayName="PressResponderContext";function wn(e){if(function(){if(Qa==null){Qa=!1;try{document.createElement("div").focus({get preventScroll(){return Qa=!0,!0}})}catch{}}return Qa}())e.focus({preventScroll:!0});else{let t=function(n){let o=n.parentNode,l=[],s=document.scrollingElement||document.documentElement;for(;o instanceof HTMLElement&&o!==s;)(o.offsetHeight<o.scrollHeight||o.offsetWidth<o.scrollWidth)&&l.push({element:o,scrollTop:o.scrollTop,scrollLeft:o.scrollLeft}),o=o.parentNode;return s instanceof HTMLElement&&l.push({element:s,scrollTop:s.scrollTop,scrollLeft:s.scrollLeft}),l}(e);e.focus(),function(n){for(let{element:o,scrollTop:l,scrollLeft:s}of n)o.scrollTop=l,o.scrollLeft=s}(t)}}let Qa=null;const Gf=["input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable^="false"])'],nM=Gf.join(":not([hidden]),")+",[tabindex]:not([disabled]):not([hidden])";Gf.push('[tabindex]:not([tabindex="-1"]):not([disabled])');const rM=Gf.join(':not([hidden]):not([tabindex="-1"]),');function bx(e){return e.matches(nM)}function oM(e){return e.matches(rM)}let wx=class{isDefaultPrevented(){return this.nativeEvent.defaultPrevented}preventDefault(){this.defaultPrevented=!0,this.nativeEvent.preventDefault()}stopPropagation(){this.nativeEvent.stopPropagation(),this.isPropagationStopped=()=>!0}isPropagationStopped(){return!1}persist(){}constructor(t,n){this.nativeEvent=n,this.target=n.target,this.currentTarget=n.currentTarget,this.relatedTarget=n.relatedTarget,this.bubbles=n.bubbles,this.cancelable=n.cancelable,this.defaultPrevented=n.defaultPrevented,this.eventPhase=n.eventPhase,this.isTrusted=n.isTrusted,this.timeStamp=n.timeStamp,this.type=t}};function _x(e){let t=k.useRef({isFocused:!1,observer:null});Re(()=>{const o=t.current;return()=>{o.observer&&(o.observer.disconnect(),o.observer=null)}},[]);let n=it(o=>{e==null||e(o)});return k.useCallback(o=>{if(o.target instanceof HTMLButtonElement||o.target instanceof HTMLInputElement||o.target instanceof HTMLTextAreaElement||o.target instanceof HTMLSelectElement){t.current.isFocused=!0;let l=o.target,s=u=>{t.current.isFocused=!1,l.disabled&&n(new wx("blur",u)),t.current.observer&&(t.current.observer.disconnect(),t.current.observer=null)};l.addEventListener("focusout",s,{once:!0}),t.current.observer=new MutationObserver(()=>{if(t.current.isFocused&&l.disabled){var u;(u=t.current.observer)===null||u===void 0||u.disconnect();let d=l===document.activeElement?null:document.activeElement;l.dispatchEvent(new FocusEvent("blur",{relatedTarget:d})),l.dispatchEvent(new FocusEvent("focusout",{bubbles:!0,relatedTarget:d}))}}),t.current.observer.observe(l,{attributes:!0,attributeFilter:["disabled"]})}},[n])}let bs=!1;function Ng(e){for(;e&&!bx(e);)e=e.parentElement;let t=It(e),n=t.document.activeElement;if(!n||n===e)return;bs=!0;let o=!1,l=h=>{(h.target===n||o)&&h.stopImmediatePropagation()},s=h=>{(h.target===n||o)&&(h.stopImmediatePropagation(),e||o||(o=!0,wn(n),f()))},u=h=>{(h.target===e||o)&&h.stopImmediatePropagation()},d=h=>{(h.target===e||o)&&(h.stopImmediatePropagation(),o||(o=!0,wn(n),f()))};t.addEventListener("blur",l,!0),t.addEventListener("focusout",s,!0),t.addEventListener("focusin",d,!0),t.addEventListener("focus",u,!0);let f=()=>{cancelAnimationFrame(p),t.removeEventListener("blur",l,!0),t.removeEventListener("focusout",s,!0),t.removeEventListener("focusin",d,!0),t.removeEventListener("focus",u,!0),bs=!1,o=!1},p=requestAnimationFrame(f);return f}function iM(e,t){return t.get?t.get.call(e):t.value}function Sx(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}function lM(e,t){var n=Sx(e,t,"get");return iM(e,n)}function aM(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function sM(e,t,n){aM(e,t),t.set(e,n)}function uM(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}function Rg(e,t,n){var o=Sx(e,t,"set");return uM(e,o,n),n}function kx(){return!1}function He(e,t){return!(!t||!e)&&e.contains(t)}const xt=(e=document)=>e.activeElement;function Pe(e){return e.target}const cM=k.createContext({isNative:!0,open:function(e,t){(function(n,o){if(n instanceof HTMLAnchorElement)o(n);else if(n.hasAttribute("data-href")){let l=document.createElement("a");l.href=n.getAttribute("data-href"),n.hasAttribute("data-target")&&(l.target=n.getAttribute("data-target")),n.hasAttribute("data-rel")&&(l.rel=n.getAttribute("data-rel")),n.hasAttribute("data-download")&&(l.download=n.getAttribute("data-download")),n.hasAttribute("data-ping")&&(l.ping=n.getAttribute("data-ping")),n.hasAttribute("data-referrer-policy")&&(l.referrerPolicy=n.getAttribute("data-referrer-policy")),n.appendChild(l),o(l),n.removeChild(l)}})(e,n=>Gr(n,t))},useHref:e=>e});function Nl(){return k.useContext(cM)}function Gr(e,t,n=!0){var o,l;let{metaKey:s,ctrlKey:u,altKey:d,shiftKey:f}=t;tM()&&(!((l=window.event)===null||l===void 0||(o=l.type)===null||o===void 0)&&o.startsWith("key"))&&e.target==="_blank"&&(Qr()?s=!0:u=!0);let p=yx()&&Qr()&&!gx()?new KeyboardEvent("keydown",{keyIdentifier:"Enter",metaKey:s,ctrlKey:u,altKey:d,shiftKey:f}):new MouseEvent("click",{metaKey:s,ctrlKey:u,altKey:d,shiftKey:f,bubbles:!0,cancelable:!0});Gr.isOpening=n,wn(e),e.dispatchEvent(p),Gr.isOpening=!1}function dM(e){var t;const n=Nl().useHref((t=e.href)!==null&&t!==void 0?t:"");return{"data-href":e.href?n:void 0,"data-target":e.target,"data-rel":e.rel,"data-download":e.download,"data-ping":e.ping,"data-referrer-policy":e.referrerPolicy}}function fM(e){var t;const n=Nl().useHref((t=e==null?void 0:e.href)!==null&&t!==void 0?t:"");return{href:e!=null&&e.href?n:void 0,target:e==null?void 0:e.target,rel:e==null?void 0:e.rel,download:e==null?void 0:e.download,ping:e==null?void 0:e.ping,referrerPolicy:e==null?void 0:e.referrerPolicy}}Gr.isOpening=!1;function js(){let e=k.useRef(new Map),t=k.useCallback((l,s,u,d)=>{let f=d!=null&&d.once?(...p)=>{e.current.delete(u),u(...p)}:u;e.current.set(u,{type:s,eventTarget:l,fn:f,options:d}),l.addEventListener(s,f,d)},[]),n=k.useCallback((l,s,u,d)=>{var f;let p=((f=e.current.get(u))===null||f===void 0?void 0:f.fn)||u;l.removeEventListener(s,p,d),e.current.delete(u)},[]),o=k.useCallback(()=>{e.current.forEach((l,s)=>{n(l.eventTarget,l.type,s,l.options)})},[n]);return k.useEffect(()=>o,[o]),{addGlobalListener:t,removeGlobalListener:n,removeAllGlobalListeners:o}}function Xf(e,t){Re(()=>{if(e&&e.ref&&t)return e.ref.current=t.current,()=>{e.ref&&(e.ref.current=null)}})}function Hd(e){return!(e.mozInputSource!==0||!e.isTrusted)||(xl()&&e.pointerType?e.type==="click"&&e.buttons===1:e.detail===0&&!e.pointerType)}function pM(e){return!xl()&&e.width===0&&e.height===0||e.width===1&&e.height===1&&e.pressure===0&&e.detail===0&&e.pointerType==="mouse"}var Ga=new WeakMap;let Xa=class{continuePropagation(){Rg(this,Ga,!1)}get shouldStopPropagation(){return lM(this,Ga)}constructor(t,n,o,l){var s;sM(this,Ga,{writable:!0,value:void 0}),Rg(this,Ga,!0);let u=(s=l==null?void 0:l.target)!==null&&s!==void 0?s:o.currentTarget;const d=u==null?void 0:u.getBoundingClientRect();let f,p,h=0,y=null;o.clientX!=null&&o.clientY!=null&&(p=o.clientX,y=o.clientY),d&&(p!=null&&y!=null?(f=p-d.left,h=y-d.top):(f=d.width/2,h=d.height/2)),this.type=t,this.pointerType=n,this.target=o.currentTarget,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.x=f,this.y=h}};const Lg=Symbol("linkClicked");function wr(e){let{onPress:t,onPressChange:n,onPressStart:o,onPressEnd:l,onPressUp:s,isDisabled:u,isPressed:d,preventFocusOnPress:f,shouldCancelOnPointerExit:p,allowTextSelectionOnPress:h,ref:y,...v}=function(P){let K=k.useContext(bl);if(K){let{register:J,...W}=K;P=we(W,P),J()}return Xf(K,P.ref),P}(e),[x,b]=k.useState(!1),_=k.useRef({isPressed:!1,ignoreEmulatedMouseEvents:!1,didFirePressStart:!1,isTriggeringEvent:!1,activePointerId:null,target:null,isOverTarget:!1,pointerType:null,disposables:[]}),{addGlobalListener:S,removeAllGlobalListeners:$}=js(),E=it((P,K)=>{let J=_.current;if(u||J.didFirePressStart)return!1;let W=!0;if(J.isTriggeringEvent=!0,o){let U=new Xa("pressstart",K,P);o(U),W=U.shouldStopPropagation}return n&&n(!0),J.isTriggeringEvent=!1,J.didFirePressStart=!0,b(!0),W}),N=it((P,K,J=!0)=>{let W=_.current;if(!W.didFirePressStart)return!1;W.didFirePressStart=!1,W.isTriggeringEvent=!0;let U=!0;if(l){let T=new Xa("pressend",K,P);l(T),U=T.shouldStopPropagation}if(n&&n(!1),b(!1),t&&J&&!u){let T=new Xa("press",K,P);t(T),U&&(U=T.shouldStopPropagation)}return W.isTriggeringEvent=!1,U}),O=it((P,K)=>{let J=_.current;if(u)return!1;if(s){J.isTriggeringEvent=!0;let W=new Xa("pressup",K,P);return s(W),J.isTriggeringEvent=!1,W.shouldStopPropagation}return!0}),M=it(P=>{let K=_.current;if(K.isPressed&&K.target){K.didFirePressStart&&K.pointerType!=null&&N(Co(K.target,P),K.pointerType,!1),K.isPressed=!1,K.isOverTarget=!1,K.activePointerId=null,K.pointerType=null,$(),h||id(K.target);for(let J of K.disposables)J();K.disposables=[]}}),I=it(P=>{p&&M(P)}),z=k.useMemo(()=>{let P=_.current,K={onKeyDown(W){if(ld(W.nativeEvent,W.currentTarget)&&He(W.currentTarget,Pe(W.nativeEvent))){var U;Ig(Pe(W.nativeEvent),W.key)&&W.preventDefault();let T=!0;if(!P.isPressed&&!W.repeat){P.target=W.currentTarget,P.isPressed=!0,P.pointerType="keyboard",T=E(W,"keyboard");let B=W.currentTarget,te=se=>{ld(se,B)&&!se.repeat&&He(B,Pe(se))&&P.target&&O(Co(P.target,se),"keyboard")};S(Me(W.currentTarget),"keyup",Bo(te,J),!0)}T&&W.stopPropagation(),W.metaKey&&Qr()&&((U=P.metaKeyEvents)===null||U===void 0||U.set(W.key,W.nativeEvent))}else W.key==="Meta"&&(P.metaKeyEvents=new Map)},onClick(W){if((!W||He(W.currentTarget,Pe(W.nativeEvent)))&&W&&W.button===0&&!P.isTriggeringEvent&&!Gr.isOpening){let U=!0;if(u&&W.preventDefault(),P.ignoreEmulatedMouseEvents||P.isPressed||P.pointerType!=="virtual"&&!Hd(W.nativeEvent)){if(P.isPressed&&P.pointerType!=="keyboard"){let T=P.pointerType||W.nativeEvent.pointerType||"virtual";U=N(Co(W.currentTarget,W),T,!0),P.isOverTarget=!1,M(W)}}else{let T=E(W,"virtual"),B=O(W,"virtual"),te=N(W,"virtual");U=T&&B&&te}P.ignoreEmulatedMouseEvents=!1,U&&W.stopPropagation()}}},J=W=>{var U;if(P.isPressed&&P.target&&ld(W,P.target)){var T;Ig(Pe(W),W.key)&&W.preventDefault();let te=Pe(W);N(Co(P.target,W),"keyboard",He(P.target,Pe(W))),$(),W.key!=="Enter"&&qf(P.target)&&He(P.target,te)&&!W[Lg]&&(W[Lg]=!0,Gr(P.target,W,!1)),P.isPressed=!1,(T=P.metaKeyEvents)===null||T===void 0||T.delete(W.key)}else if(W.key==="Meta"&&(!((U=P.metaKeyEvents)===null||U===void 0)&&U.size)){var B;let te=P.metaKeyEvents;P.metaKeyEvents=void 0;for(let se of te.values())(B=P.target)===null||B===void 0||B.dispatchEvent(new KeyboardEvent("keyup",se))}};if(typeof PointerEvent<"u"){K.onPointerDown=T=>{if(T.button!==0||!He(T.currentTarget,Pe(T.nativeEvent)))return;if(pM(T.nativeEvent))return void(P.pointerType="virtual");P.pointerType=T.pointerType;let B=!0;if(!P.isPressed){P.isPressed=!0,P.isOverTarget=!0,P.activePointerId=T.pointerId,P.target=T.currentTarget,h||Dg(P.target),B=E(T,P.pointerType);let te=Pe(T.nativeEvent);"releasePointerCapture"in te&&te.releasePointerCapture(T.pointerId),S(Me(T.currentTarget),"pointerup",W,!1),S(Me(T.currentTarget),"pointercancel",U,!1)}B&&T.stopPropagation()},K.onMouseDown=T=>{if(He(T.currentTarget,Pe(T.nativeEvent))&&T.button===0){if(f){let B=Ng(T.target);B&&P.disposables.push(B)}T.stopPropagation()}},K.onPointerUp=T=>{He(T.currentTarget,Pe(T.nativeEvent))&&P.pointerType!=="virtual"&&T.button===0&&O(T,P.pointerType||T.pointerType)},K.onPointerEnter=T=>{T.pointerId===P.activePointerId&&P.target&&!P.isOverTarget&&P.pointerType!=null&&(P.isOverTarget=!0,E(Co(P.target,T),P.pointerType))},K.onPointerLeave=T=>{T.pointerId===P.activePointerId&&P.target&&P.isOverTarget&&P.pointerType!=null&&(P.isOverTarget=!1,N(Co(P.target,T),P.pointerType,!1),I(T))};let W=T=>{if(T.pointerId===P.activePointerId&&P.isPressed&&T.button===0&&P.target){if(He(P.target,Pe(T))&&P.pointerType!=null){let B=!1,te=setTimeout(()=>{P.isPressed&&P.target instanceof HTMLElement&&(B?M(T):(wn(P.target),P.target.click()))},80);S(T.currentTarget,"click",()=>B=!0,!0),P.disposables.push(()=>clearTimeout(te))}else M(T);P.isOverTarget=!1}},U=T=>{M(T)};K.onDragStart=T=>{He(T.currentTarget,Pe(T.nativeEvent))&&M(T)}}else{K.onMouseDown=T=>{if(!(T.button!==0||!He(T.currentTarget,Pe(T.nativeEvent)))){if(P.ignoreEmulatedMouseEvents)return void T.stopPropagation();if(P.isPressed=!0,P.isOverTarget=!0,P.target=T.currentTarget,P.pointerType=Hd(T.nativeEvent)?"virtual":"mouse",mf.flushSync(()=>E(T,P.pointerType))&&T.stopPropagation(),f){let B=Ng(T.target);B&&P.disposables.push(B)}S(Me(T.currentTarget),"mouseup",W,!1)}},K.onMouseEnter=T=>{if(!He(T.currentTarget,Pe(T.nativeEvent)))return;let B=!0;P.isPressed&&!P.ignoreEmulatedMouseEvents&&P.pointerType!=null&&(P.isOverTarget=!0,B=E(T,P.pointerType)),B&&T.stopPropagation()},K.onMouseLeave=T=>{if(!He(T.currentTarget,Pe(T.nativeEvent)))return;let B=!0;P.isPressed&&!P.ignoreEmulatedMouseEvents&&P.pointerType!=null&&(P.isOverTarget=!1,B=N(T,P.pointerType,!1),I(T)),B&&T.stopPropagation()},K.onMouseUp=T=>{He(T.currentTarget,Pe(T.nativeEvent))&&(P.ignoreEmulatedMouseEvents||T.button!==0||O(T,P.pointerType||"mouse"))};let W=T=>{T.button===0&&(P.ignoreEmulatedMouseEvents?P.ignoreEmulatedMouseEvents=!1:(P.target&&P.target.contains(T.target)&&P.pointerType!=null||M(T),P.isOverTarget=!1))};K.onTouchStart=T=>{if(!He(T.currentTarget,Pe(T.nativeEvent)))return;let B=function(te){const{targetTouches:se}=te;return se.length>0?se[0]:null}(T.nativeEvent);B&&(P.activePointerId=B.identifier,P.ignoreEmulatedMouseEvents=!0,P.isOverTarget=!0,P.isPressed=!0,P.target=T.currentTarget,P.pointerType="touch",h||Dg(P.target),E(fr(P.target,T),P.pointerType)&&T.stopPropagation(),S(It(T.currentTarget),"scroll",U,!0))},K.onTouchMove=T=>{if(!He(T.currentTarget,Pe(T.nativeEvent)))return;if(!P.isPressed)return void T.stopPropagation();let B=Ag(T.nativeEvent,P.activePointerId),te=!0;B&&zg(B,T.currentTarget)?P.isOverTarget||P.pointerType==null||(P.isOverTarget=!0,te=E(fr(P.target,T),P.pointerType)):P.isOverTarget&&P.pointerType!=null&&(P.isOverTarget=!1,te=N(fr(P.target,T),P.pointerType,!1),I(fr(P.target,T))),te&&T.stopPropagation()},K.onTouchEnd=T=>{if(!He(T.currentTarget,Pe(T.nativeEvent)))return;if(!P.isPressed)return void T.stopPropagation();let B=Ag(T.nativeEvent,P.activePointerId),te=!0;B&&zg(B,T.currentTarget)&&P.pointerType!=null?(O(fr(P.target,T),P.pointerType),te=N(fr(P.target,T),P.pointerType)):P.isOverTarget&&P.pointerType!=null&&(te=N(fr(P.target,T),P.pointerType,!1)),te&&T.stopPropagation(),P.isPressed=!1,P.activePointerId=null,P.isOverTarget=!1,P.ignoreEmulatedMouseEvents=!0,P.target&&!h&&id(P.target),$()},K.onTouchCancel=T=>{He(T.currentTarget,Pe(T.nativeEvent))&&(T.stopPropagation(),P.isPressed&&M(fr(P.target,T)))};let U=T=>{P.isPressed&&He(Pe(T),P.target)&&M({currentTarget:P.target,shiftKey:!1,ctrlKey:!1,metaKey:!1,altKey:!1})};K.onDragStart=T=>{He(T.currentTarget,Pe(T.nativeEvent))&&M(T)}}return K},[S,u,f,$,h,M,I,N,E,O]);return k.useEffect(()=>{let P=_.current;return()=>{var K;h||id((K=P.target)!==null&&K!==void 0?K:void 0);for(let J of P.disposables)J();P.disposables=[]}},[h]),{isPressed:d||x,pressProps:we(v,z)}}function qf(e){return e.tagName==="A"&&e.hasAttribute("href")}function ld(e,t){const{key:n,code:o}=e,l=t,s=l.getAttribute("role");return!(n!=="Enter"&&n!==" "&&n!=="Spacebar"&&o!=="Space"||l instanceof It(l).HTMLInputElement&&!$x(l,n)||l instanceof It(l).HTMLTextAreaElement||l.isContentEditable||(s==="link"||!s&&qf(l))&&n!=="Enter")}function Ag(e,t){const n=e.changedTouches;for(let o=0;o<n.length;o++){const l=n[o];if(l.identifier===t)return l}return null}function fr(e,t){let n=0,o=0;return t.targetTouches&&t.targetTouches.length===1&&(n=t.targetTouches[0].clientX,o=t.targetTouches[0].clientY),{currentTarget:e,shiftKey:t.shiftKey,ctrlKey:t.ctrlKey,metaKey:t.metaKey,altKey:t.altKey,clientX:n,clientY:o}}function Co(e,t){let n=t.clientX,o=t.clientY;return{currentTarget:e,shiftKey:t.shiftKey,ctrlKey:t.ctrlKey,metaKey:t.metaKey,altKey:t.altKey,clientX:n,clientY:o}}function zg(e,t){let n=t.getBoundingClientRect();return s=function(u){let d=0,f=0;return u.width!==void 0?d=u.width/2:u.radiusX!==void 0&&(d=u.radiusX),u.height!==void 0?f=u.height/2:u.radiusY!==void 0&&(f=u.radiusY),{top:u.clientY-f,right:u.clientX+d,bottom:u.clientY+f,left:u.clientX-d}}(e),!((l=n).left>s.right||s.left>l.right||l.top>s.bottom||s.top>l.bottom);var l,s}function Ig(e,t){return e instanceof HTMLInputElement?!$x(e,t):function(n){return!(n instanceof HTMLInputElement||(n instanceof HTMLButtonElement?n.type==="submit"||n.type==="reset":qf(n)))}(e)}const mM=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);function $x(e,t){return e.type==="checkbox"||e.type==="radio"?t===" ":mM.has(e.type)}let jn=null,wl=new Set,sl=new Map,Xr=!1,Wd=!1;const hM={Tab:!0,Escape:!0};function Fs(e,t){for(let n of wl)n(e,t)}function ws(e){Xr=!0,function(t){return!(t.metaKey||!Qr()&&t.altKey||t.ctrlKey||t.key==="Control"||t.key==="Shift"||t.key==="Meta")}(e)&&(jn="keyboard",Fs("keyboard",e))}function Gt(e){jn="pointer",e.type!=="mousedown"&&e.type!=="pointerdown"||(Xr=!0,Fs("pointer",e))}function Ex(e){Hd(e)&&(Xr=!0,jn="virtual")}function Px(e){e.target!==window&&e.target!==document&&!bs&&e.isTrusted&&(Xr||Wd||(jn="virtual",Fs("virtual",e)),Xr=!1,Wd=!1)}function Tx(){bs||(Xr=!1,Wd=!0)}function _s(e){if(typeof window>"u"||sl.get(It(e)))return;const t=It(e),n=Me(e);let o=t.HTMLElement.prototype.focus;t.HTMLElement.prototype.focus=function(){Xr=!0,o.apply(this,arguments)},n.addEventListener("keydown",ws,!0),n.addEventListener("keyup",ws,!0),n.addEventListener("click",Ex,!0),t.addEventListener("focus",Px,!0),t.addEventListener("blur",Tx,!1),typeof PointerEvent<"u"?(n.addEventListener("pointerdown",Gt,!0),n.addEventListener("pointermove",Gt,!0),n.addEventListener("pointerup",Gt,!0)):(n.addEventListener("mousedown",Gt,!0),n.addEventListener("mousemove",Gt,!0),n.addEventListener("mouseup",Gt,!0)),t.addEventListener("beforeunload",()=>{Cx(e)},{once:!0}),sl.set(t,{focus:o})}const Cx=(e,t)=>{const n=It(e),o=Me(e);t&&o.removeEventListener("DOMContentLoaded",t),sl.has(n)&&(n.HTMLElement.prototype.focus=sl.get(n).focus,o.removeEventListener("keydown",ws,!0),o.removeEventListener("keyup",ws,!0),o.removeEventListener("click",Ex,!0),n.removeEventListener("focus",Px,!0),n.removeEventListener("blur",Tx,!1),typeof PointerEvent<"u"?(o.removeEventListener("pointerdown",Gt,!0),o.removeEventListener("pointermove",Gt,!0),o.removeEventListener("pointerup",Gt,!0)):(o.removeEventListener("mousedown",Gt,!0),o.removeEventListener("mousemove",Gt,!0),o.removeEventListener("mouseup",Gt,!0)),sl.delete(n))};function vM(e){const t=Me(e);let n;return t.readyState!=="loading"?_s(e):(n=()=>{_s(e)},t.addEventListener("DOMContentLoaded",n)),()=>Cx(e,n)}function _l(){return jn!=="pointer"}function Ss(){return jn}function gM(e){jn=e,Fs(e,null)}function yM(){_s();let[e,t]=k.useState(jn);return k.useEffect(()=>{let n=()=>{t(jn)};return wl.add(n),()=>{wl.delete(n)}},[]),Ds()?null:e}typeof document<"u"&&vM();const xM=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);function bM(e,t,n){_s(),k.useEffect(()=>{let o=(l,s)=>{(function(u,d,f){let p=Me(f==null?void 0:f.target);const h=typeof window<"u"?It(f==null?void 0:f.target).HTMLInputElement:HTMLInputElement,y=typeof window<"u"?It(f==null?void 0:f.target).HTMLTextAreaElement:HTMLTextAreaElement,v=typeof window<"u"?It(f==null?void 0:f.target).HTMLElement:HTMLElement,x=typeof window<"u"?It(f==null?void 0:f.target).KeyboardEvent:KeyboardEvent;return!((u=u||p.activeElement instanceof h&&!xM.has(p.activeElement.type)||p.activeElement instanceof y||p.activeElement instanceof v&&p.activeElement.isContentEditable)&&d==="keyboard"&&f instanceof x&&!hM[f.key])})(!!(n!=null&&n.isTextInput),l,s)&&e(_l())};return wl.add(o),()=>{wl.delete(o)}},t)}function zt(e){const t=Me(e),n=xt(t);if(Ss()==="virtual"){let o=n;vx(()=>{xt(t)===o&&e.isConnected&&wn(e)})}else wn(e)}function Zf(e){let{isDisabled:t,onFocus:n,onBlur:o,onFocusChange:l}=e;const s=k.useCallback(f=>{if(f.target===f.currentTarget)return o&&o(f),l&&l(!1),!0},[o,l]),u=_x(s),d=k.useCallback(f=>{const p=Me(f.target),h=p?xt(p):xt();f.target===f.currentTarget&&h===Pe(f.nativeEvent)&&(n&&n(f),l&&l(!0),u(f))},[l,n,u]);return{focusProps:{onFocus:!t&&(n||l||o)?d:void 0,onBlur:t||!o&&!l?void 0:s}}}function jg(e){if(!e)return;let t=!0;return n=>{let o={...n,preventDefault(){n.preventDefault()},isDefaultPrevented:()=>n.isDefaultPrevented(),stopPropagation(){t?console.error("stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior."):t=!0},continuePropagation(){t=!1},isPropagationStopped:()=>t};e(o),t&&n.stopPropagation()}}function Mx(e){return{keyboardProps:e.isDisabled?{}:{onKeyDown:jg(e.onKeyDown),onKeyUp:jg(e.onKeyUp)}}}let Dx=ie.createContext(null);ie.forwardRef(function(e,t){let{children:n,...o}=e,l={...o,ref:pf(t)};return ie.createElement(Dx.Provider,{value:l},n)});function Os(e,t){let{focusProps:n}=Zf(e),{keyboardProps:o}=Mx(e),l=we(n,o),s=function(p){let h=k.useContext(Dx)||{};Xf(h,p);let{ref:y,...v}=h;return v}(t),u=e.isDisabled?{}:s,d=k.useRef(e.autoFocus);k.useEffect(()=>{d.current&&t.current&&zt(t.current),d.current=!1},[t]);let f=e.excludeFromTabOrder?-1:0;return e.isDisabled&&(f=void 0),{focusableProps:we({...l,tabIndex:f},u)}}function wM(e,t){let n,{elementType:o="button",isDisabled:l,onPress:s,onPressStart:u,onPressEnd:d,onPressUp:f,onPressChange:p,preventFocusOnPress:h,allowFocusWhenDisabled:y,onClick:v,href:x,target:b,rel:_,type:S="button"}=e;n=o==="button"?{type:S,disabled:l}:{role:"button",href:o!=="a"||l?void 0:x,target:o==="a"?b:void 0,type:o==="input"?S:void 0,disabled:o==="input"?l:void 0,"aria-disabled":l&&o!=="input"?l:void 0,rel:o==="a"?_:void 0};let{pressProps:$,isPressed:E}=wr({onPressStart:u,onPressEnd:d,onPressChange:p,onPress:s,onPressUp:f,isDisabled:l,preventFocusOnPress:h,ref:t}),{focusableProps:N}=Os(e,t);y&&(N.tabIndex=l?-1:N.tabIndex);let O=we(N,$,Jr(e,{labelable:!0}));return{isPressed:E,buttonProps:we(n,O,{"aria-haspopup":e["aria-haspopup"],"aria-expanded":e["aria-expanded"],"aria-controls":e["aria-controls"],"aria-pressed":e["aria-pressed"],"aria-current":e["aria-current"],onClick:M=>{v&&(v(M),console.warn("onClick is deprecated, please use onPress"))}})}}function Jf(e){let{isDisabled:t,onBlurWithin:n,onFocusWithin:o,onFocusWithinChange:l}=e,s=k.useRef({isFocusWithin:!1}),{addGlobalListener:u,removeAllGlobalListeners:d}=js(),f=k.useCallback(y=>{y.currentTarget.contains(y.target)&&s.current.isFocusWithin&&!y.currentTarget.contains(y.relatedTarget)&&(s.current.isFocusWithin=!1,d(),n&&n(y),l&&l(!1))},[n,l,s,d]),p=_x(f),h=k.useCallback(y=>{if(!y.currentTarget.contains(y.target))return;const v=Me(y.target),x=xt(v);if(!s.current.isFocusWithin&&x===Pe(y.nativeEvent)){o&&o(y),l&&l(!0),s.current.isFocusWithin=!0,p(y);let b=y.currentTarget;u(v,"focus",_=>{if(s.current.isFocusWithin&&!He(b,_.target)){let S=new wx("blur",new v.defaultView.FocusEvent("blur",{relatedTarget:_.target}));S.target=b,S.currentTarget=b,f(S)}},{capture:!0})}},[o,l,p,u,f]);return t?{focusWithinProps:{onFocus:void 0,onBlur:void 0}}:{focusWithinProps:{onFocus:h,onBlur:f}}}function Bn(e={}){let{autoFocus:t=!1,isTextInput:n,within:o}=e,l=k.useRef({isFocused:!1,isFocusVisible:t||_l()}),[s,u]=k.useState(!1),[d,f]=k.useState(()=>l.current.isFocused&&l.current.isFocusVisible),p=k.useCallback(()=>f(l.current.isFocused&&l.current.isFocusVisible),[]),h=k.useCallback(x=>{l.current.isFocused=x,u(x),p()},[p]);bM(x=>{l.current.isFocusVisible=x,p()},[],{isTextInput:n});let{focusProps:y}=Zf({isDisabled:o,onFocusChange:h}),{focusWithinProps:v}=Jf({isDisabled:!o,onFocusWithinChange:h});return{isFocused:s,isFocusVisible:d,focusProps:o?v:y}}let ks=!1,ad=0;function Yd(){ks=!0,setTimeout(()=>{ks=!1},50)}function Fg(e){e.pointerType==="touch"&&Yd()}function _M(){if(typeof document<"u")return typeof PointerEvent<"u"?document.addEventListener("pointerup",Fg):document.addEventListener("touchend",Yd),ad++,()=>{ad--,ad>0||(typeof PointerEvent<"u"?document.removeEventListener("pointerup",Fg):document.removeEventListener("touchend",Yd))}}function ep(e){let{onHoverStart:t,onHoverChange:n,onHoverEnd:o,isDisabled:l}=e,[s,u]=k.useState(!1),d=k.useRef({isHovered:!1,ignoreEmulatedMouseEvents:!1,pointerType:"",target:null}).current;k.useEffect(_M,[]);let{addGlobalListener:f,removeAllGlobalListeners:p}=js(),{hoverProps:h,triggerHoverEnd:y}=k.useMemo(()=>{let v=(_,S)=>{if(d.pointerType=S,l||S==="touch"||d.isHovered||!_.currentTarget.contains(_.target))return;d.isHovered=!0;let $=_.currentTarget;d.target=$,f(Me(_.target),"pointerover",E=>{d.isHovered&&d.target&&!He(d.target,E.target)&&x(E,E.pointerType)},{capture:!0}),t&&t({type:"hoverstart",target:$,pointerType:S}),n&&n(!0),u(!0)},x=(_,S)=>{let $=d.target;d.pointerType="",d.target=null,S!=="touch"&&d.isHovered&&$&&(d.isHovered=!1,p(),o&&o({type:"hoverend",target:$,pointerType:S}),n&&n(!1),u(!1))},b={};return typeof PointerEvent<"u"?(b.onPointerEnter=_=>{ks&&_.pointerType==="mouse"||v(_,_.pointerType)},b.onPointerLeave=_=>{!l&&_.currentTarget.contains(_.target)&&x(_,_.pointerType)}):(b.onTouchStart=()=>{d.ignoreEmulatedMouseEvents=!0},b.onMouseEnter=_=>{d.ignoreEmulatedMouseEvents||ks||v(_,"mouse"),d.ignoreEmulatedMouseEvents=!1},b.onMouseLeave=_=>{!l&&_.currentTarget.contains(_.target)&&x(_,"mouse")}),{hoverProps:b,triggerHoverEnd:x}},[t,n,o,l,d,f,p]);return k.useEffect(()=>{l&&y({currentTarget:d.target},d.pointerType)},[l]),{hoverProps:h,isHovered:s}}const SM=new Set(["form","formAction","formEncType","formMethod","formNoValidate","formTarget","name","value"]),kM=k.createContext({}),Nx=QC(function(e,t){[e,t]=Q$(e,t,kM);let n=e=function($){return $.isPending&&($.onPress=void 0,$.onPressStart=void 0,$.onPressEnd=void 0,$.onPressChange=void 0,$.onPressUp=void 0,$.onKeyDown=void 0,$.onKeyUp=void 0,$.onClick=void 0,$.href=void 0),$}(e),{isPending:o}=n,{buttonProps:l,isPressed:s}=wM(e,t),{focusProps:u,isFocused:d,isFocusVisible:f}=Bn(e),{hoverProps:p,isHovered:h}=ep({...e,isDisabled:e.isDisabled||o}),y={isHovered:h,isPressed:(n.isPressed||s)&&!o,isFocused:d,isFocusVisible:f,isDisabled:e.isDisabled||!1,isPending:o!=null&&o},v=W$({...e,values:y,defaultClassName:"react-aria-Button"}),x=Mt(l.id),b=Mt(),_=l["aria-labelledby"];o&&(_?_=`${_} ${b}`:l["aria-label"]&&(_=`${x} ${b}`));let S=k.useRef(o);return k.useEffect(()=>{let $={"aria-labelledby":_||x};(!S.current&&d&&o||S.current&&d&&!o)&&Yf($,"assertive"),S.current=o},[o,d,_,x]),ie.createElement("button",{...Jr(e,{propNames:SM}),...we(l,u,p),...v,type:l.type==="submit"&&o?"button":l.type,id:x,ref:t,"aria-labelledby":_,slot:e.slot||void 0,"aria-disabled":o?"true":l["aria-disabled"],"data-disabled":e.isDisabled||void 0,"data-pressed":y.isPressed||void 0,"data-hovered":h||void 0,"data-focused":d||void 0,"data-pending":o||void 0,"data-focus-visible":f||void 0},ie.createElement(HC.Provider,{value:{id:b}},v.children))});var $M={"focus-ring":"focusring-module_focus-ring__jYxTQ"};lt(`@keyframes focusring-module_outward-grow__Qdj-A {\r
  from {\r
    outline-width: 0;\r
  }\r
  to {\r
    outline-width: var(--md-focus-ring-active-width, 8px);\r
  }\r
}\r
@keyframes focusring-module_outward-shrink__Rb3ur {\r
  from {\r
    outline-width: var(--md-focus-ring-active-width, 8px);\r
  }\r
}\r
@keyframes focusring-module_inward-grow__g-09Q {\r
  from {\r
    border-width: 0;\r
  }\r
  to {\r
    border-width: var(--md-focus-ring-active-width, 8px);\r
  }\r
}\r
@keyframes focusring-module_inward-shrink__ww4sN {\r
  from {\r
    border-width: var(--md-focus-ring-active-width, 8px);\r
  }\r
}\r
.focusring-module_focus-ring__jYxTQ {\r
  z-index: 1;\r
  animation-delay: 0s, calc(var(--md-focus-ring-duration, 600ms) * 0.25);\r
  animation-duration: calc(var(--md-focus-ring-duration, 600ms) * 0.25),\r
    calc(var(--md-focus-ring-duration, 600ms) * 0.75);\r
  animation-timing-function: cubic-bezier(0.2, 0, 0, 1);\r
  box-sizing: border-box;\r
  color: var(\r
    --md-focus-ring-color,\r
    var(--md-sys-color-secondary, #625b71)\r
  );\r
  pointer-events: none;\r
  position: absolute;\r
  &:not([inward]) {\r
    animation-name: focusring-module_outward-grow__Qdj-A, focusring-module_outward-shrink__Rb3ur;\r
    border-radius: inherit;\r
    inset: calc(-1 * var(--md-focus-ring-outward-offset, 2px));\r
    outline: var(--md-focus-ring-width, 3px) solid currentColor;\r
  }\r
  &[inward] {\r
    animation-name: focusring-module_inward-grow__g-09Q, focusring-module_inward-shrink__ww4sN;\r
    border-radius: calc(\r
      var(--md-focus-ring-shape, inherit) - var(--md-focus-ring-inward-offset, 0px)\r
    );\r
    border: var(--md-focus-ring-width, 3px) solid currentColor;\r
    inset: var(--md-focus-ring-inward-offset, 0px);\r
  }\r
  @media (prefers-reduced-motion) {\r
    .focusring-module_a-focus-ring__p-PXU {\r
      animation: none;\r
    }\r
  }\r
}\r
`);const Fn=({as:e="span",type:t="outward",style:n,className:o})=>D.jsx(e,{style:n,className:Ye($M["focus-ring"],o),inward:t==="inward"?"true":void 0});Fn.displayName="Actify.FocusRing";var Kr={btn:"button-module_btn__sxcxC",disabled:"button-module_disabled__obywO",button:"button-module_button__vQZFj",touch:"button-module_touch__Cec8z",outline:"button-module_outline__rI4up",background:"button-module_background__erbWE",label:"button-module_label__rzPeC"};lt(`.button-module_btn__sxcxC {\r
  border: 0 solid #e5e7eb;\r
  appearance: button;\r
  background-color: transparent;\r
  background-image: none;\r
\r
  border-start-start-radius: var(--_container-shape-start-start);\r
  border-start-end-radius: var(--_container-shape-start-end);\r
  border-end-start-radius: var(--_container-shape-end-start);\r
  border-end-end-radius: var(--_container-shape-end-end);\r
  box-sizing: border-box;\r
  cursor: pointer;\r
  display: inline-flex;\r
  gap: 8px;\r
  min-height: var(--_container-height);\r
  outline: none;\r
  padding-block: calc(\r
    (\r
        var(--_container-height) -\r
          max(var(--_label-text-line-height), var(--_icon-size))\r
      ) / 2\r
  );\r
  padding-inline-start: var(--_leading-space);\r
  padding-inline-end: var(--_trailing-space);\r
  place-content: center;\r
  place-items: center;\r
  position: relative;\r
  font-family: var(--_label-text-font);\r
  font-size: var(--_label-text-size);\r
  line-height: var(--_label-text-line-height);\r
  font-weight: var(--_label-text-weight);\r
  text-overflow: ellipsis;\r
  text-wrap: nowrap;\r
  user-select: none;\r
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\r
  vertical-align: top;\r
  --md-ripple-hover-color: var(--_hover-state-layer-color);\r
  --md-ripple-pressed-color: var(--_pressed-state-layer-color);\r
  --md-ripple-hover-opacity: var(--_hover-state-layer-opacity);\r
  --md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity);\r
}\r
\r
.button-module_disabled__obywO {\r
  cursor: default;\r
  pointer-events: none;\r
}\r
\r
.button-module_button__vQZFj {\r
  text-overflow: inherit;\r
  border-radius: inherit;\r
  cursor: inherit;\r
  display: inline-flex;\r
  align-items: center;\r
  justify-content: center;\r
  border: none;\r
  outline: none;\r
  appearance: none;\r
  vertical-align: middle;\r
  background: rgba(0, 0, 0, 0);\r
  text-decoration: none;\r
  min-width: calc(64px - var(--_leading-space) - var(--_trailing-space));\r
  width: 100%;\r
  z-index: 0;\r
  height: 100%;\r
  font: inherit;\r
  color: var(--_label-text-color);\r
  padding: 0px;\r
  gap: inherit;\r
  text-transform: inherit;\r
}\r
\r
.button-module_touch__Cec8z {\r
  position: absolute;\r
  top: 50%;\r
  height: 48px;\r
  left: 0px;\r
  right: 0px;\r
  transform: translateY(-50%);\r
}\r
\r
.button-module_outline__rI4up {\r
  outline-style: none;\r
  border-width: var(--_outline-width);\r
  inset: 0px;\r
  border-style: solid;\r
  position: absolute;\r
  box-sizing: border-box;\r
  border-color: var(--_outline-color);\r
  border-radius: inherit;\r
}\r
\r
.button-module_background__erbWE {\r
  background-color: var(--_container-color);\r
  border-radius: inherit;\r
  inset: 0;\r
  position: absolute;\r
}\r
.button-module_disabled__obywO .button-module_background__erbWE {\r
  opacity: var(--_disabled-container-opacity);\r
  background-color: var(--_disabled-container-color);\r
}\r
\r
.button-module_label__rzPeC {\r
  text-overflow: inherit;\r
  overflow: hidden;\r
  display: inherit;\r
  gap: inherit;\r
  z-index: 1;\r
  align-items: inherit;\r
}\r
.button-module_disabled__obywO .button-module_label__rzPeC {\r
  color: var(--_disabled-label-text-color);\r
  opacity: var(--_disabled-label-text-opacity);\r
}\r
`);var EM={secondary:"color-module_secondary__gpdVQ",tertiary:"color-module_tertiary__zPmbq",error:"color-module_error__VplyG"};lt(`.color-module_secondary__gpdVQ {\r
  --md-sys-color-primary: var(--md-sys-color-secondary);\r
}\r
.color-module_tertiary__zPmbq {\r
  --md-sys-color-primary: var(--md-sys-color-tertiary);\r
}\r
.color-module_error__VplyG {\r
  --md-sys-color-primary: var(--md-sys-color-error);\r
}\r
`);var PM={filled:"variant-module_filled__rQH-3",elevated:"variant-module_elevated__F69Jv",outlined:"variant-module_outlined__nvVIW",tonal:"variant-module_tonal__ZqJTa",text:"variant-module_text__oL9YN"};lt(`.variant-module_filled__rQH-3 {\r
  --_container-color: var(\r
    --md-filled-button-container-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_container-elevation: var(--md-filled-button-container-elevation, 0);\r
  --_container-height: var(--md-filled-button-container-height, 40px);\r
  --_container-shadow-color: var(\r
    --md-filled-button-container-shadow-color,\r
    var(--md-sys-color-shadow, #000000)\r
  );\r
  --_container-shape: var(--md-filled-button-container-shape, 9999px);\r
  --_disabled-container-color: var(\r
    --md-filled-button-disabled-container-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_disabled-container-elevation: var(\r
    --md-filled-button-disabled-container-elevation,\r
    0\r
  );\r
  --_disabled-container-opacity: var(\r
    --md-filled-button-disabled-container-opacity,\r
    0.12\r
  );\r
  --_disabled-label-text-color: var(\r
    --md-filled-button-disabled-label-text-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_disabled-label-text-opacity: var(\r
    --md-filled-button-disabled-label-text-opacity,\r
    0.38\r
  );\r
  --_focus-container-elevation: var(\r
    --md-filled-button-focus-container-elevation,\r
    0\r
  );\r
  --_focus-label-text-color: var(\r
    --md-filled-button-focus-label-text-color,\r
    var(--md-sys-color-on-primary, #ffffff)\r
  );\r
  --_hover-container-elevation: var(\r
    --md-filled-button-hover-container-elevation,\r
    1\r
  );\r
  --_hover-label-text-color: var(\r
    --md-filled-button-hover-label-text-color,\r
    var(--md-sys-color-on-primary, #ffffff)\r
  );\r
  --_hover-state-layer-color: var(\r
    --md-filled-button-hover-state-layer-color,\r
    var(--md-sys-color-on-primary, #ffffff)\r
  );\r
  --_hover-state-layer-opacity: var(\r
    --md-filled-button-hover-state-layer-opacity,\r
    0.08\r
  );\r
  --_label-text-color: var(\r
    --md-filled-button-label-text-color,\r
    var(--md-sys-color-on-primary, #ffffff)\r
  );\r
  --_label-text-font: var(\r
    --md-filled-button-label-text-font,\r
    var(\r
      --md-sys-typescale-label-large-font,\r
      var(--md-ref-typeface-plain, Roboto)\r
    )\r
  );\r
  --_label-text-line-height: var(\r
    --md-filled-button-label-text-line-height,\r
    var(--md-sys-typescale-label-large-line-height, 1.25rem)\r
  );\r
  --_label-text-size: var(\r
    --md-filled-button-label-text-size,\r
    var(--md-sys-typescale-label-large-size, 0.875rem)\r
  );\r
  --_label-text-weight: var(\r
    --md-filled-button-label-text-weight,\r
    var(\r
      --md-sys-typescale-label-large-weight,\r
      var(--md-ref-typeface-weight-medium, 500)\r
    )\r
  );\r
  --_pressed-container-elevation: var(\r
    --md-filled-button-pressed-container-elevation,\r
    0\r
  );\r
  --_pressed-label-text-color: var(\r
    --md-filled-button-pressed-label-text-color,\r
    var(--md-sys-color-on-primary, #ffffff)\r
  );\r
  --_pressed-state-layer-color: var(\r
    --md-filled-button-pressed-state-layer-color,\r
    var(--md-sys-color-on-primary, #ffffff)\r
  );\r
  --_pressed-state-layer-opacity: var(\r
    --md-filled-button-pressed-state-layer-opacity,\r
    0.12\r
  );\r
  --_disabled-icon-color: var(\r
    --md-filled-button-disabled-icon-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_disabled-icon-opacity: var(--md-filled-button-disabled-icon-opacity, 0.38);\r
  --_focus-icon-color: var(\r
    --md-filled-button-focus-icon-color,\r
    var(--md-sys-color-on-primary, #ffffff)\r
  );\r
  --_hover-icon-color: var(\r
    --md-filled-button-hover-icon-color,\r
    var(--md-sys-color-on-primary, #ffffff)\r
  );\r
  --_icon-color: var(\r
    --md-filled-button-icon-color,\r
    var(--md-sys-color-on-primary, #ffffff)\r
  );\r
  --_icon-size: var(--md-filled-button-icon-size, 18px);\r
  --_pressed-icon-color: var(\r
    --md-filled-button-pressed-icon-color,\r
    var(--md-sys-color-on-primary, #ffffff)\r
  );\r
  --_leading-space: var(--md-filled-button-leading-space, 24px);\r
  --_trailing-space: var(--md-filled-button-trailing-space, 24px);\r
  --_with-leading-icon-leading-space: var(\r
    --md-filled-button-with-leading-icon-leading-space,\r
    16px\r
  );\r
  --_with-leading-icon-trailing-space: var(\r
    --md-filled-button-with-leading-icon-trailing-space,\r
    24px\r
  );\r
  --_with-trailing-icon-leading-space: var(\r
    --md-filled-button-with-trailing-icon-leading-space,\r
    24px\r
  );\r
  --_with-trailing-icon-trailing-space: var(\r
    --md-filled-button-with-trailing-icon-trailing-space,\r
    16px\r
  );\r
  --_container-shape-start-start: var(\r
    --md-filled-button-container-shape-start-start,\r
    var(--_container-shape)\r
  );\r
  --_container-shape-start-end: var(\r
    --md-filled-button-container-shape-start-end,\r
    var(--_container-shape)\r
  );\r
  --_container-shape-end-end: var(\r
    --md-filled-button-container-shape-end-end,\r
    var(--_container-shape)\r
  );\r
  --_container-shape-end-start: var(\r
    --md-filled-button-container-shape-end-start,\r
    var(--_container-shape)\r
  );\r
}\r
.variant-module_elevated__F69Jv {\r
  --_container-color: var(\r
    --md-elevated-button-container-color,\r
    var(--md-sys-color-surface-container-low, f7f2fa)\r
  );\r
  --_container-elevation: var(--md-elevated-button-container-elevation, 1);\r
  --_container-height: var(--md-elevated-button-container-height, 40px);\r
  --_container-shadow-color: var(\r
    --md-elevated-button-container-shadow-color,\r
    var(--md-sys-color-shadow, #000000)\r
  );\r
  --_container-shape: var(--md-elevated-button-container-shape, 9999px);\r
  --_disabled-container-color: var(\r
    --md-elevated-button-disabled-container-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_disabled-container-elevation: var(\r
    --md-elevated-button-disabled-container-elevation,\r
    0\r
  );\r
  --_disabled-container-opacity: var(\r
    --md-elevated-button-disabled-container-opacity,\r
    0.12\r
  );\r
  --_disabled-label-text-color: var(\r
    --md-elevated-button-disabled-label-text-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_disabled-label-text-opacity: var(\r
    --md-elevated-button-disabled-label-text-opacity,\r
    0.38\r
  );\r
  --_focus-container-elevation: var(\r
    --md-elevated-button-focus-container-elevation,\r
    1\r
  );\r
  --_focus-label-text-color: var(\r
    --md-elevated-button-focus-label-text-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_hover-container-elevation: var(\r
    --md-elevated-button-hover-container-elevation,\r
    2\r
  );\r
  --_hover-label-text-color: var(\r
    --md-elevated-button-hover-label-text-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_hover-state-layer-color: var(\r
    --md-elevated-button-hover-state-layer-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_hover-state-layer-opacity: var(\r
    --md-elevated-button-hover-state-layer-opacity,\r
    0.08\r
  );\r
  --_label-text-color: var(\r
    --md-elevated-button-label-text-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_label-text-font: var(\r
    --md-elevated-button-label-text-font,\r
    var(\r
      --md-sys-typescale-label-large-font,\r
      var(--md-ref-typeface-plain, Roboto)\r
    )\r
  );\r
  --_label-text-line-height: var(\r
    --md-elevated-button-label-text-line-height,\r
    var(--md-sys-typescale-label-large-line-height, 1.25rem)\r
  );\r
  --_label-text-size: var(\r
    --md-elevated-button-label-text-size,\r
    var(--md-sys-typescale-label-large-size, 0.875rem)\r
  );\r
  --_label-text-weight: var(\r
    --md-elevated-button-label-text-weight,\r
    var(\r
      --md-sys-typescale-label-large-weight,\r
      var(--md-ref-typeface-weight-medium, 500)\r
    )\r
  );\r
  --_pressed-container-elevation: var(\r
    --md-elevated-button-pressed-container-elevation,\r
    1\r
  );\r
  --_pressed-label-text-color: var(\r
    --md-elevated-button-pressed-label-text-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_pressed-state-layer-color: var(\r
    --md-elevated-button-pressed-state-layer-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_pressed-state-layer-opacity: var(\r
    --md-elevated-button-pressed-state-layer-opacity,\r
    0.12\r
  );\r
  --_disabled-icon-color: var(\r
    --md-elevated-button-disabled-icon-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_disabled-icon-opacity: var(\r
    --md-elevated-button-disabled-icon-opacity,\r
    0.38\r
  );\r
  --_focus-icon-color: var(\r
    --md-elevated-button-focus-icon-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_hover-icon-color: var(\r
    --md-elevated-button-hover-icon-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_icon-color: var(\r
    --md-elevated-button-icon-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_icon-size: var(--md-elevated-button-icon-size, 18px);\r
  --_pressed-icon-color: var(\r
    --md-elevated-button-pressed-icon-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_leading-space: var(--md-elevated-button-leading-space, 24px);\r
  --_trailing-space: var(--md-elevated-button-trailing-space, 24px);\r
  --_with-leading-icon-leading-space: var(\r
    --md-elevated-button-with-leading-icon-leading-space,\r
    16px\r
  );\r
  --_with-leading-icon-trailing-space: var(\r
    --md-elevated-button-with-leading-icon-trailing-space,\r
    24px\r
  );\r
  --_with-trailing-icon-leading-space: var(\r
    --md-elevated-button-with-trailing-icon-leading-space,\r
    24px\r
  );\r
  --_with-trailing-icon-trailing-space: var(\r
    --md-elevated-button-with-trailing-icon-trailing-space,\r
    16px\r
  );\r
  --_container-shape-start-start: var(\r
    --md-elevated-button-container-shape-start-start,\r
    var(--_container-shape)\r
  );\r
  --_container-shape-start-end: var(\r
    --md-elevated-button-container-shape-start-end,\r
    var(--_container-shape)\r
  );\r
  --_container-shape-end-end: var(\r
    --md-elevated-button-container-shape-end-end,\r
    var(--_container-shape)\r
  );\r
  --_container-shape-end-start: var(\r
    --md-elevated-button-container-shape-end-start,\r
    var(--_container-shape)\r
  );\r
}\r
.variant-module_outlined__nvVIW {\r
  --_container-height: var(--md-outlined-button-container-height, 40px);\r
  --_container-shape: var(--md-outlined-button-container-shape, 9999px);\r
  --_disabled-label-text-color: var(\r
    --md-outlined-button-disabled-label-text-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_disabled-label-text-opacity: var(\r
    --md-outlined-button-disabled-label-text-opacity,\r
    0.38\r
  );\r
  --_disabled-outline-color: var(\r
    --md-outlined-button-disabled-outline-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_disabled-outline-opacity: var(\r
    --md-outlined-button-disabled-outline-opacity,\r
    0.12\r
  );\r
  --_focus-label-text-color: var(\r
    --md-outlined-button-focus-label-text-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_hover-label-text-color: var(\r
    --md-outlined-button-hover-label-text-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_hover-state-layer-color: var(\r
    --md-outlined-button-hover-state-layer-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_hover-state-layer-opacity: var(\r
    --md-outlined-button-hover-state-layer-opacity,\r
    0.08\r
  );\r
  --_label-text-color: var(\r
    --md-outlined-button-label-text-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_label-text-font: var(\r
    --md-outlined-button-label-text-font,\r
    var(\r
      --md-sys-typescale-label-large-font,\r
      var(--md-ref-typeface-plain, Roboto)\r
    )\r
  );\r
  --_label-text-line-height: var(\r
    --md-outlined-button-label-text-line-height,\r
    var(--md-sys-typescale-label-large-line-height, 1.25rem)\r
  );\r
  --_label-text-size: var(\r
    --md-outlined-button-label-text-size,\r
    var(--md-sys-typescale-label-large-size, 0.875rem)\r
  );\r
  --_label-text-weight: var(\r
    --md-outlined-button-label-text-weight,\r
    var(\r
      --md-sys-typescale-label-large-weight,\r
      var(--md-ref-typeface-weight-medium, 500)\r
    )\r
  );\r
  --_outline-color: var(\r
    --md-outlined-button-outline-color,\r
    var(--md-sys-color-outline,#79747e)\r
  );\r
  --_outline-width: var(--md-outlined-button-outline-width, 1px);\r
  --_pressed-label-text-color: var(\r
    --md-outlined-button-pressed-label-text-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_pressed-outline-color: var(\r
    --md-outlined-button-pressed-outline-color,\r
    var(--md-sys-color-outline, #79747e)\r
  );\r
  --_pressed-state-layer-color: var(\r
    --md-outlined-button-pressed-state-layer-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_pressed-state-layer-opacity: var(\r
    --md-outlined-button-pressed-state-layer-opacity,\r
    0.12\r
  );\r
  --_disabled-icon-color: var(\r
    --md-outlined-button-disabled-icon-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_disabled-icon-opacity: var(\r
    --md-outlined-button-disabled-icon-opacity,\r
    0.38\r
  );\r
  --_focus-icon-color: var(\r
    --md-outlined-button-focus-icon-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_hover-icon-color: var(\r
    --md-outlined-button-hover-icon-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_icon-color: var(\r
    --md-outlined-button-icon-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_icon-size: var(--md-outlined-button-icon-size, 18px);\r
  --_pressed-icon-color: var(\r
    --md-outlined-button-pressed-icon-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_leading-space: var(--md-outlined-button-leading-space, 24px);\r
  --_trailing-space: var(--md-outlined-button-trailing-space, 24px);\r
  --_with-leading-icon-leading-space: var(\r
    --md-outlined-button-with-leading-icon-leading-space,\r
    16px\r
  );\r
  --_with-leading-icon-trailing-space: var(\r
    --md-outlined-button-with-leading-icon-trailing-space,\r
    24px\r
  );\r
  --_with-trailing-icon-leading-space: var(\r
    --md-outlined-button-with-trailing-icon-leading-space,\r
    24px\r
  );\r
  --_with-trailing-icon-trailing-space: var(\r
    --md-outlined-button-with-trailing-icon-trailing-space,\r
    16px\r
  );\r
  --_container-color: none;\r
  --_disabled-container-color: none;\r
  --_disabled-container-opacity: 0;\r
  --_container-shape-start-start: var(\r
    --md-outlined-button-container-shape-start-start,\r
    var(--_container-shape)\r
  );\r
  --_container-shape-start-end: var(\r
    --md-outlined-button-container-shape-start-end,\r
    var(--_container-shape)\r
  );\r
  --_container-shape-end-end: var(\r
    --md-outlined-button-container-shape-end-end,\r
    var(--_container-shape)\r
  );\r
  --_container-shape-end-start: var(\r
    --md-outlined-button-container-shape-end-start,\r
    var(--_container-shape)\r
  );\r
}\r
.variant-module_tonal__ZqJTa {\r
  --_container-color: var(\r
    --md-filled-tonal-button-container-color,\r
    var(--md-sys-color-secondary-container, #e8def8)\r
  );\r
  --_container-elevation: var(--md-filled-tonal-button-container-elevation, 0);\r
  --_container-height: var(--md-filled-tonal-button-container-height, 40px);\r
  --_container-shadow-color: var(\r
    --md-filled-tonal-button-container-shadow-color,\r
    var(--md-sys-color-shadow, #000000)\r
  );\r
  --_container-shape: var(--md-filled-tonal-button-container-shape, 9999px);\r
  --_disabled-container-color: var(\r
    --md-filled-tonal-button-disabled-container-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_disabled-container-elevation: var(\r
    --md-filled-tonal-button-disabled-container-elevation,\r
    0\r
  );\r
  --_disabled-container-opacity: var(\r
    --md-filled-tonal-button-disabled-container-opacity,\r
    0.12\r
  );\r
  --_disabled-label-text-color: var(\r
    --md-filled-tonal-button-disabled-label-text-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_disabled-label-text-opacity: var(\r
    --md-filled-tonal-button-disabled-label-text-opacity,\r
    0.38\r
  );\r
  --_focus-container-elevation: var(\r
    --md-filled-tonal-button-focus-container-elevation,\r
    0\r
  );\r
  --_focus-label-text-color: var(\r
    --md-filled-tonal-button-focus-label-text-color,\r
    var(--md-sys-color-on-secondary-container, #1d192b)\r
  );\r
  --_hover-container-elevation: var(\r
    --md-filled-tonal-button-hover-container-elevation,\r
    1\r
  );\r
  --_hover-label-text-color: var(\r
    --md-filled-tonal-button-hover-label-text-color,\r
    var(--md-sys-color-on-secondary-container, #1d192b)\r
  );\r
  --_hover-state-layer-color: var(\r
    --md-filled-tonal-button-hover-state-layer-color,\r
    var(--md-sys-color-on-secondary-container, #1d192b)\r
  );\r
  --_hover-state-layer-opacity: var(\r
    --md-filled-tonal-button-hover-state-layer-opacity,\r
    0.08\r
  );\r
  --_label-text-color: var(\r
    --md-filled-tonal-button-label-text-color,\r
    var(--md-sys-color-on-secondary-container, #1d192b)\r
  );\r
  --_label-text-font: var(\r
    --md-filled-tonal-button-label-text-font,\r
    var(\r
      --md-sys-typescale-label-large-font,\r
      var(--md-ref-typeface-plain, Roboto)\r
    )\r
  );\r
  --_label-text-line-height: var(\r
    --md-filled-tonal-button-label-text-line-height,\r
    var(--md-sys-typescale-label-large-line-height, 1.25rem)\r
  );\r
  --_label-text-size: var(\r
    --md-filled-tonal-button-label-text-size,\r
    var(--md-sys-typescale-label-large-size, 0.875rem)\r
  );\r
  --_label-text-weight: var(\r
    --md-filled-tonal-button-label-text-weight,\r
    var(\r
      --md-sys-typescale-label-large-weight,\r
      var(--md-ref-typeface-weight-medium, 500)\r
    )\r
  );\r
  --_pressed-container-elevation: var(\r
    --md-filled-tonal-button-pressed-container-elevation,\r
    0\r
  );\r
  --_pressed-label-text-color: var(\r
    --md-filled-tonal-button-pressed-label-text-color,\r
    var(--md-sys-color-on-secondary-container, #1d192b)\r
  );\r
  --_pressed-state-layer-color: var(\r
    --md-filled-tonal-button-pressed-state-layer-color,\r
    var(--md-sys-color-on-secondary-container, #1d192b)\r
  );\r
  --_pressed-state-layer-opacity: var(\r
    --md-filled-tonal-button-pressed-state-layer-opacity,\r
    0.12\r
  );\r
  --_disabled-icon-color: var(\r
    --md-filled-tonal-button-disabled-icon-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_disabled-icon-opacity: var(\r
    --md-filled-tonal-button-disabled-icon-opacity,\r
    0.38\r
  );\r
  --_focus-icon-color: var(\r
    --md-filled-tonal-button-focus-icon-color,\r
    var(--md-sys-color-on-secondary-container, #1d192b)\r
  );\r
  --_hover-icon-color: var(\r
    --md-filled-tonal-button-hover-icon-color,\r
    var(--md-sys-color-on-secondary-container, #1d192b)\r
  );\r
  --_icon-color: var(\r
    --md-filled-tonal-button-icon-color,\r
    var(--md-sys-color-on-secondary-container, #1d192b)\r
  );\r
  --_icon-size: var(--md-filled-tonal-button-icon-size, 18px);\r
  --_pressed-icon-color: var(\r
    --md-filled-tonal-button-pressed-icon-color,\r
    var(--md-sys-color-on-secondary-container, #1d192b)\r
  );\r
  --_leading-space: var(--md-filled-tonal-button-leading-space, 24px);\r
  --_trailing-space: var(--md-filled-tonal-button-trailing-space, 24px);\r
  --_with-leading-icon-leading-space: var(\r
    --md-filled-tonal-button-with-leading-icon-leading-space,\r
    16px\r
  );\r
  --_with-leading-icon-trailing-space: var(\r
    --md-filled-tonal-button-with-leading-icon-trailing-space,\r
    24px\r
  );\r
  --_with-trailing-icon-leading-space: var(\r
    --md-filled-tonal-button-with-trailing-icon-leading-space,\r
    24px\r
  );\r
  --_with-trailing-icon-trailing-space: var(\r
    --md-filled-tonal-button-with-trailing-icon-trailing-space,\r
    16px\r
  );\r
  --_container-shape-start-start: var(\r
    --md-filled-tonal-button-container-shape-start-start,\r
    var(--_container-shape)\r
  );\r
  --_container-shape-start-end: var(\r
    --md-filled-tonal-button-container-shape-start-end,\r
    var(--_container-shape)\r
  );\r
  --_container-shape-end-end: var(\r
    --md-filled-tonal-button-container-shape-end-end,\r
    var(--_container-shape)\r
  );\r
  --_container-shape-end-start: var(\r
    --md-filled-tonal-button-container-shape-end-start,\r
    var(--_container-shape)\r
  );\r
}\r
.variant-module_text__oL9YN {\r
  --_container-height: var(--md-text-button-container-height, 40px);\r
  --_container-shape: var(--md-text-button-container-shape, 9999px);\r
  --_disabled-label-text-color: var(\r
    --md-text-button-disabled-label-text-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_disabled-label-text-opacity: var(\r
    --md-text-button-disabled-label-text-opacity,\r
    0.38\r
  );\r
  --_focus-label-text-color: var(\r
    --md-text-button-focus-label-text-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_hover-label-text-color: var(\r
    --md-text-button-hover-label-text-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_hover-state-layer-color: var(\r
    --md-text-button-hover-state-layer-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_hover-state-layer-opacity: var(\r
    --md-text-button-hover-state-layer-opacity,\r
    0.08\r
  );\r
  --_label-text-color: var(\r
    --md-text-button-label-text-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_label-text-font: var(\r
    --md-text-button-label-text-font,\r
    var(\r
      --md-sys-typescale-label-large-font,\r
      var(--md-ref-typeface-plain, Roboto)\r
    )\r
  );\r
  --_label-text-line-height: var(\r
    --md-text-button-label-text-line-height,\r
    var(--md-sys-typescale-label-large-line-height, 1.25rem)\r
  );\r
  --_label-text-size: var(\r
    --md-text-button-label-text-size,\r
    var(--md-sys-typescale-label-large-size, 0.875rem)\r
  );\r
  --_label-text-weight: var(\r
    --md-text-button-label-text-weight,\r
    var(\r
      --md-sys-typescale-label-large-weight,\r
      var(--md-ref-typeface-weight-medium, 500)\r
    )\r
  );\r
  --_pressed-label-text-color: var(\r
    --md-text-button-pressed-label-text-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_pressed-state-layer-color: var(\r
    --md-text-button-pressed-state-layer-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_pressed-state-layer-opacity: var(\r
    --md-text-button-pressed-state-layer-opacity,\r
    0.12\r
  );\r
  --_disabled-icon-color: var(\r
    --md-text-button-disabled-icon-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_disabled-icon-opacity: var(--md-text-button-disabled-icon-opacity, 0.38);\r
  --_focus-icon-color: var(\r
    --md-text-button-focus-icon-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_hover-icon-color: var(\r
    --md-text-button-hover-icon-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_icon-color: var(\r
    --md-text-button-icon-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_icon-size: var(--md-text-button-icon-size, 18px);\r
  --_pressed-icon-color: var(\r
    --md-text-button-pressed-icon-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_leading-space: var(--md-text-button-leading-space, 12px);\r
  --_trailing-space: var(--md-text-button-trailing-space, 12px);\r
  --_with-leading-icon-leading-space: var(\r
    --md-text-button-with-leading-icon-leading-space,\r
    12px\r
  );\r
  --_with-leading-icon-trailing-space: var(\r
    --md-text-button-with-leading-icon-trailing-space,\r
    16px\r
  );\r
  --_with-trailing-icon-leading-space: var(\r
    --md-text-button-with-trailing-icon-leading-space,\r
    16px\r
  );\r
  --_with-trailing-icon-trailing-space: var(\r
    --md-text-button-with-trailing-icon-trailing-space,\r
    12px\r
  );\r
  --_container-color: none;\r
  --_disabled-container-color: none;\r
  --_disabled-container-opacity: 0;\r
  --_container-shape-start-start: var(\r
    --md-text-button-container-shape-start-start,\r
    var(--_container-shape)\r
  );\r
  --_container-shape-start-end: var(\r
    --md-text-button-container-shape-start-end,\r
    var(--_container-shape)\r
  );\r
  --_container-shape-end-end: var(\r
    --md-text-button-container-shape-end-end,\r
    var(--_container-shape)\r
  );\r
  --_container-shape-end-start: var(\r
    --md-text-button-container-shape-end-start,\r
    var(--_container-shape)\r
  );\r
}\r
`);const Rl=e=>{const{ref:t,style:n,children:o,className:l,ripple:s=!0,color:u="primary",variant:d="elevated",isDisabled:f=!1}=e,{focusProps:p,isFocusVisible:h}=Bn();return D.jsx(Nx,Object.assign({ref:t},we(e,p),{style:n,className:Ye(Kr.btn,EM[u],PM[d],f&&Kr.disabled,l),children:D.jsxs("div",{className:Kr.button,children:[D.jsx("span",{className:Kr.background}),D.jsx("span",{className:Kr.touch}),D.jsx("span",{className:Kr.label,children:D.jsx(D.Fragment,{children:o})}),d=="outlined"&&D.jsx("div",{className:Kr.outline}),D.jsx(Hy,{disabled:f}),h&&D.jsx(Fn,{}),s&&D.jsx(yr,{id:e.id,disabled:f})]})}))};Rl.displayName="Actify.Button";var sd={btn:"icon-button-module_btn__Ixgd4","text-outline":"icon-button-module_text-outline__42DFJ","icon-button":"icon-button-module_icon-button__-Xc9O"};lt(`.icon-button-module_btn__Ixgd4 {\r
  border: 0 solid #e5e7eb;\r
  appearance: button;\r
  background-color: transparent;\r
  background-image: none;\r
  font-feature-settings: inherit;\r
  font-variation-settings: inherit;\r
  letter-spacing: inherit;\r
  color: inherit;\r
  padding: 0;\r
  cursor: pointer;\r
\r
  width: 2.5rem /* 40px */;\r
  height: 2.5rem /* 40px */;\r
  position: relative;\r
  color: currentColor;\r
  display: inline-flex;\r
  align-items: center;\r
  border-radius: 9999px;\r
  justify-content: center;\r
}\r
.icon-button-module_btn__Ixgd4:focus-visible {\r
  outline: none;\r
}\r
.icon-button-module_text-outline__42DFJ {\r
  --tw-text-opacity: 1;\r
  color: var(--md-sys-color-outline) / var(--tw-text-opacity);\r
}\r
.icon-button-module_icon-button__-Xc9O {\r
  position: absolute;\r
  width: max(48px, 100%);\r
  height: max(48px, 100%);\r
}\r
`);const mn=e=>{const{ref:t,ripple:n=!0,children:o,className:l,isDisabled:s}=e,{focusProps:u,isFocusVisible:d}=Bn();return D.jsxs(Nx,Object.assign({ref:t},we(e,u),{className:Ye(sd.btn,s&&sd["text-outline"],l),children:[d&&D.jsx(Fn,{}),n&&D.jsx(yr,{id:e.id,disabled:s}),D.jsx(D.Fragment,{children:o}),D.jsx("span",{className:sd["icon-button"]})]}))};mn.displayName="Actify.IconButton";const Qd=e=>{var{ref:t,children:n}=e,o=an(e,["ref","children"]);return D.jsx("label",Object.assign({ref:t},o,{onMouseDown:l=>{var s;l.target.closest("button, input, select, textarea")||((s=o.onMouseDown)===null||s===void 0||s.call(o,l),!l.defaultPrevented&&l.detail>1&&l.preventDefault())},children:n}))};Qd.displayName="Actify.Label";const Rx={badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1,valid:!0},Lx={...Rx,customError:!0,valid:!1},Ro={isInvalid:!1,validationDetails:Rx,validationErrors:[]},TM=k.createContext({}),$s="__formValidationState"+Date.now();function tp(e){if(e[$s]){let{realtimeValidation:t,displayValidation:n,updateValidation:o,resetValidation:l,commitValidation:s}=e[$s];return{realtimeValidation:t,displayValidation:n,updateValidation:o,resetValidation:l,commitValidation:s}}return function(t){let{isInvalid:n,validationState:o,name:l,value:s,builtinValidation:u,validate:d,validationBehavior:f="aria"}=t;o&&(n||(n=o==="invalid"));let p=n!==void 0?{isInvalid:n,validationErrors:[],validationDetails:Lx}:null,h=k.useMemo(()=>{if(!d||s==null)return null;let K=function(J,W){if(typeof J=="function"){let U=J(W);if(U&&typeof U!="boolean")return ud(U)}return[]}(d,s);return Og(K)},[d,s]);u!=null&&u.validationDetails.valid&&(u=void 0);let y=k.useContext(TM),v=k.useMemo(()=>l?Array.isArray(l)?l.flatMap(K=>ud(y[K])):ud(y[l]):[],[y,l]),[x,b]=k.useState(y),[_,S]=k.useState(!1);y!==x&&(b(y),S(!1));let $=k.useMemo(()=>Og(_?[]:v),[_,v]),E=k.useRef(Ro),[N,O]=k.useState(Ro),M=k.useRef(Ro),I=()=>{if(!z)return;P(!1);let K=h||u||E.current;cd(K,M.current)||(M.current=K,O(K))},[z,P]=k.useState(!1);return k.useEffect(I),{realtimeValidation:p||$||h||u||Ro,displayValidation:f==="native"?p||$||N:p||$||h||u||N,updateValidation(K){f!=="aria"||cd(N,K)?E.current=K:O(K)},resetValidation(){let K=Ro;cd(K,M.current)||(M.current=K,O(K)),f==="native"&&P(!1),S(!0)},commitValidation(){f==="native"&&P(!0),S(!0)}}}(e)}function ud(e){return e?Array.isArray(e)?e:[e]:[]}function Og(e){return e.length?{isInvalid:!0,validationErrors:e,validationDetails:Lx}:null}function cd(e,t){return e===t||!!e&&!!t&&e.isInvalid===t.isInvalid&&e.validationErrors.length===t.validationErrors.length&&e.validationErrors.every((n,o)=>n===t.validationErrors[o])&&Object.entries(e.validationDetails).every(([n,o])=>t.validationDetails[n]===o)}function Ll(e,t,n){let[o,l]=k.useState(e||t),s=k.useRef(e!==void 0),u=e!==void 0;k.useEffect(()=>{let p=s.current;p!==u&&console.warn(`WARN: A component changed from ${p?"controlled":"uncontrolled"} to ${u?"controlled":"uncontrolled"}.`),s.current=u},[u]);let d=u?e:o,f=k.useCallback((p,...h)=>{let y=(v,...x)=>{n&&(Object.is(d,v)||n(v,...x)),u||(d=v)};typeof p=="function"?(console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320"),l((v,...x)=>{let b=p(u?d:v,...x);return y(b,...h),u?v:b})):(u||l(p),y(p,...h))},[u,d,n]);return[d,f]}const CM=new WeakMap;function Ax(e,t){let{id:n,"aria-label":o,"aria-labelledby":l}=e;return n=Mt(n),l&&o?l=[...new Set([n,...l.trim().split(/\s+/)])].join(" "):l&&(l=l.trim().split(/\s+/).join(" ")),o||l||!t||(o=t),{id:n,"aria-label":o,"aria-labelledby":l}}function MM(e){let{id:t,label:n,"aria-labelledby":o,"aria-label":l,labelElementType:s="label"}=e;t=Mt(t);let u=Mt(),d={};return n?(o=o?`${u} ${o}`:u,d={id:u,htmlFor:s==="label"?t:void 0}):o||l||console.warn("If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility"),{labelProps:d,fieldProps:Ax({id:t,"aria-label":l,"aria-labelledby":o})}}function DM(e){let{description:t,errorMessage:n,isInvalid:o,validationState:l}=e,{labelProps:s,fieldProps:u}=MM(e),d=rl([!!t,!!n,o,l]),f=rl([!!t,!!n,o,l]);return u=we(u,{"aria-describedby":[d,f,e["aria-describedby"]].filter(Boolean).join(" ")||void 0}),{labelProps:s,fieldProps:u,descriptionProps:{id:d},errorMessageProps:{id:f}}}const NM=ie.createContext(null);var Ue={"checkbox-wrapper":"checkbox-module_checkbox-wrapper__m8Q-6",checkbox:"checkbox-module_checkbox__rLEgd",disabled:"checkbox-module_disabled__E2BaQ",selected:"checkbox-module_selected__A9v0C",container:"checkbox-module_container__26-ah",input:"checkbox-module_input__YAXXm",outline:"checkbox-module_outline__16oBt",background:"checkbox-module_background__S5DT6",icon:"checkbox-module_icon__TK3cZ",mark:"checkbox-module_mark__diPNr",indeterminate:"checkbox-module_indeterminate__rdQZr",unselected:"checkbox-module_unselected__b9llC",short:"checkbox-module_short__-CpaY",checked:"checkbox-module_checked__mqwdo",long:"checkbox-module_long__Y4P0H"};lt(`.checkbox-module_checkbox-wrapper__m8Q-6 {\r
  gap: 8px;\r
  display: flex;\r
  align-items: center;\r
}\r
.checkbox-module_checkbox__rLEgd {\r
  margin: max(0px, (48px - var(--md-checkbox-container-size, 18px)) / 2);\r
  border-start-start-radius: var(\r
    --md-checkbox-container-shape-start-start,\r
    var(--md-checkbox-container-shape, 2px)\r
  );\r
  border-start-end-radius: var(\r
    --md-checkbox-container-shape-start-end,\r
    var(--md-checkbox-container-shape, 2px)\r
  );\r
  border-end-end-radius: var(\r
    --md-checkbox-container-shape-end-end,\r
    var(--md-checkbox-container-shape, 2px)\r
  );\r
  border-end-start-radius: var(\r
    --md-checkbox-container-shape-end-start,\r
    var(--md-checkbox-container-shape, 2px)\r
  );\r
  display: inline-flex;\r
  height: var(--md-checkbox-container-size, 18px);\r
  position: relative;\r
  vertical-align: top;\r
  width: var(--md-checkbox-container-size, 18px);\r
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\r
  cursor: pointer;\r
  &:has(.checkbox-module_disabled__E2BaQ) {\r
    cursor: default;\r
  }\r
  &:where(.checkbox-module_selected__A9v0C) :is(.checkbox-module_a-checkbox-background__paaYl, .checkbox-module_a-checkbox-icon__YwkqB) {\r
    opacity: 1;\r
    transition-duration: 350ms, 50ms;\r
    transition-timing-function: cubic-bezier(0.05, 0.7, 0.1, 1), linear;\r
    transform: scale(1);\r
  }\r
}\r
.checkbox-module_container__26-ah {\r
  border-radius: inherit;\r
  display: flex;\r
  height: 100%;\r
  place-content: center;\r
  place-items: center;\r
  position: relative;\r
  width: 100%;\r
}\r
.checkbox-module_input__YAXXm {\r
  appearance: none;\r
  height: 48px;\r
  margin: 0;\r
  opacity: 0;\r
  outline: none;\r
  position: absolute;\r
  width: 48px;\r
  z-index: 1;\r
  cursor: inherit;\r
}\r
.checkbox-module_outline__16oBt {\r
  inset: 0;\r
  position: absolute;\r
  border-radius: inherit;\r
  border-color: var(\r
    --md-checkbox-outline-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  border-style: solid;\r
  border-width: var(--md-checkbox-outline-width, 2px);\r
  box-sizing: border-box;\r
  &.checkbox-module_disabled__E2BaQ {\r
    border-color: var(\r
      --md-checkbox-disabled-outline-color,\r
      var(--md-sys-color-on-surface)\r
    );\r
    border-width: var(--md-checkbox-disabled-outline-width, 2px);\r
    opacity: var(--md-checkbox-disabled-container-opacity, 0.38);\r
  }\r
  &.checkbox-module_disabled__E2BaQ.checkbox-module_selected__A9v0C {\r
    visibility: hidden;\r
  }\r
}\r
.checkbox-module_background__S5DT6 {\r
  inset: 0;\r
  position: absolute;\r
  border-radius: inherit;\r
  background-color: var(\r
    --md-checkbox-selected-container-color,\r
    var(--md-sys-color-primary)\r
  );\r
  opacity: 0;\r
  transition-duration: 150ms, 50ms;\r
  transition-property: transform, opacity;\r
  transition-timing-function: cubic-bezier(0.3, 0, 0.8, 0.15), linear;\r
  transform: scale(0.6);\r
  &.checkbox-module_selected__A9v0C {\r
    opacity: 1;\r
    transition-duration: 350ms, 50ms;\r
    transition-timing-function: cubic-bezier(0.05, 0.7, 0.1, 1), linear;\r
    transform: scale(1);\r
  }\r
  &.checkbox-module_selected__A9v0C.checkbox-module_disabled__E2BaQ {\r
    background: var(\r
      --md-checkbox-selected-disabled-container-color,\r
      var(--md-sys-color-on-surface)\r
    );\r
    opacity: var(--md-checkbox-selected-disabled-container-opacity, 0.38);\r
  }\r
}\r
.checkbox-module_icon__TK3cZ {\r
  inset: 0;\r
  position: absolute;\r
  fill: var(\r
    --md-checkbox-selected-icon-color,\r
    var(--md-sys-color-on-primary)\r
  );\r
  height: var(--md-checkbox-icon-size, 18px);\r
  width: var(--md-checkbox-icon-size, 18px);\r
  opacity: 0;\r
  transition-duration: 150ms, 50ms;\r
  transition-property: transform, opacity;\r
  transition-timing-function: cubic-bezier(0.3, 0, 0.8, 0.15), linear;\r
  transform: scale(0.6);\r
  &.checkbox-module_selected__A9v0C {\r
    opacity: 1;\r
    transition-duration: 350ms, 50ms;\r
    transition-timing-function: cubic-bezier(0.05, 0.7, 0.1, 1), linear;\r
    transform: scale(1);\r
  }\r
}\r
.checkbox-module_mark__diPNr {\r
  animation-duration: 150ms;\r
  transition-duration: 150ms;\r
  transform: scaleY(-1) translate(7px, -14px) rotate(45deg);\r
  animation-timing-function: cubic-bezier(0.3, 0, 0.8, 0.15);\r
  transition-timing-function: cubic-bezier(0.3, 0, 0.8, 0.15);\r
  &.checkbox-module_indeterminate__rdQZr,\r
  &.checkbox-module_prev-indeterminate__3C-So.checkbox-module_unselected__b9llC {\r
    transform: scaleY(-1) translate(4px, -10px) rotate(0deg);\r
  }\r
}\r
.checkbox-module_short__-CpaY {\r
  width: 2px;\r
  height: 2px;\r
  transition-property: transform, height;\r
  &.checkbox-module_checked__mqwdo,\r
  &.checkbox-module_prev-checked__gQWRy.checkbox-module_unselected__b9llC {\r
    height: 5.6568542495px;\r
  }\r
}\r
.checkbox-module_long__Y4P0H {\r
  height: 2px;\r
  width: 10px;\r
  transition-property: transform, width;\r
  &.checkbox-module_checked__mqwdo,\r
  &.checkbox-module_prev-checked__gQWRy.checkbox-module_unselected__b9llC {\r
    width: 11.313708499px;\r
  }\r
}\r
`);function zx(e={}){let{isReadOnly:t}=e,[n,o]=Ll(e.isSelected,e.defaultSelected||!1,e.onChange);return{isSelected:n,setSelected:function(l){t||o(l)},toggle:function(){t||o(!n)}}}function Ix(e,t,n){let{validationBehavior:o,focus:l}=e;Re(()=>{if(o==="native"&&(n!=null&&n.current)&&!n.current.disabled){let p=t.realtimeValidation.isInvalid?t.realtimeValidation.validationErrors.join(" ")||"Invalid value.":"";n.current.setCustomValidity(p),n.current.hasAttribute("title")||(n.current.title=""),t.realtimeValidation.isInvalid||t.updateValidation({isInvalid:!(f=n.current).validity.valid,validationDetails:RM(f),validationErrors:f.validationMessage?[f.validationMessage]:[]})}var f});let s=it(()=>{t.resetValidation()}),u=it(f=>{var p;t.displayValidation.isInvalid||t.commitValidation();let h=n==null||(p=n.current)===null||p===void 0?void 0:p.form;var y;!f.defaultPrevented&&n&&h&&function(v){for(let x=0;x<v.elements.length;x++){let b=v.elements[x];if(!b.validity.valid)return b}return null}(h)===n.current&&(l?l():(y=n.current)===null||y===void 0||y.focus(),gM("keyboard")),f.preventDefault()}),d=it(()=>{t.commitValidation()});k.useEffect(()=>{let f=n==null?void 0:n.current;if(!f)return;let p=f.form;return f.addEventListener("invalid",u),f.addEventListener("change",d),p==null||p.addEventListener("reset",s),()=>{f.removeEventListener("invalid",u),f.removeEventListener("change",d),p==null||p.removeEventListener("reset",s)}},[n,u,d,s,o])}function RM(e){let t=e.validity;return{badInput:t.badInput,customError:t.customError,patternMismatch:t.patternMismatch,rangeOverflow:t.rangeOverflow,rangeUnderflow:t.rangeUnderflow,stepMismatch:t.stepMismatch,tooLong:t.tooLong,tooShort:t.tooShort,typeMismatch:t.typeMismatch,valueMissing:t.valueMissing,valid:t.valid}}function jx(e,t,n){let o=k.useRef(t),l=it(()=>{n&&n(o.current)});k.useEffect(()=>{var s;let u=e==null||(s=e.current)===null||s===void 0?void 0:s.form;return u==null||u.addEventListener("reset",l),()=>{u==null||u.removeEventListener("reset",l)}},[e,l])}function LM(e,t,n){let{isDisabled:o=!1,isReadOnly:l=!1,value:s,name:u,children:d,"aria-label":f,"aria-labelledby":p,validationState:h="valid",isInvalid:y}=e;d!=null||f!=null||p!=null||console.warn("If you do not provide children, you must specify an aria-label for accessibility");let{pressProps:v,isPressed:x}=wr({isDisabled:o}),{pressProps:b,isPressed:_}=wr({onPress(){var N;t.toggle(),(N=n.current)===null||N===void 0||N.focus()},isDisabled:o||l}),{focusableProps:S}=Os(e,n),$=we(v,S),E=Jr(e,{labelable:!0});return jx(n,t.isSelected,t.setSelected),{labelProps:we(b,{onClick:N=>N.preventDefault()}),inputProps:we(E,{"aria-invalid":y||h==="invalid"||void 0,"aria-errormessage":e["aria-errormessage"],"aria-controls":e["aria-controls"],"aria-readonly":l||void 0,onChange:N=>{N.stopPropagation(),t.setSelected(N.target.checked)},disabled:o,...s==null?{}:{value:s},name:u,type:"checkbox",...$}),isSelected:t.isSelected,isPressed:x||_,isDisabled:o,isReadOnly:l,isInvalid:y||h==="invalid"}}function Fx(e,t,n){let o=tp({...e,value:t.isSelected}),{isInvalid:l,validationErrors:s,validationDetails:u}=o.displayValidation,{labelProps:d,inputProps:f,isSelected:p,isPressed:h,isDisabled:y,isReadOnly:v}=LM({...e,isInvalid:l},t,n);Ix(e,o,n);let{isIndeterminate:x,isRequired:b,validationBehavior:_="aria"}=e;k.useEffect(()=>{n.current&&(n.current.indeterminate=!!x)});let{pressProps:S}=wr({isDisabled:y||v,onPress(){let{[$s]:$}=e,{commitValidation:E}=$||o;E()}});return{labelProps:we(d,S),inputProps:{...f,checked:p,"aria-required":b&&_==="aria"||void 0,required:b&&_==="native"},isSelected:p,isPressed:h,isDisabled:y,isReadOnly:v,isInvalid:l,validationErrors:s,validationDetails:u}}function AM(e,t,n){const o=zx({isReadOnly:e.isReadOnly||t.isReadOnly,isSelected:t.isSelected(e.value),onChange(S){S?t.addValue(e.value):t.removeValue(e.value),e.onChange&&e.onChange(S)}});let{name:l,descriptionId:s,errorMessageId:u,validationBehavior:d}=CM.get(t);var f;d=(f=e.validationBehavior)!==null&&f!==void 0?f:d;let{realtimeValidation:p}=tp({...e,value:o.isSelected,name:void 0,validationBehavior:"aria"}),h=k.useRef(Ro),y=()=>{t.setInvalid(e.value,p.isInvalid?p:h.current)};k.useEffect(y);let v=t.realtimeValidation.isInvalid?t.realtimeValidation:p,x=d==="native"?t.displayValidation:v;var b;let _=Fx({...e,isReadOnly:e.isReadOnly||t.isReadOnly,isDisabled:e.isDisabled||t.isDisabled,name:e.name||l,isRequired:(b=e.isRequired)!==null&&b!==void 0?b:t.isRequired,validationBehavior:d,[$s]:{realtimeValidation:v,displayValidation:x,resetValidation:t.resetValidation,commitValidation:t.commitValidation,updateValidation(S){h.current=S,y()}}},o,n);return{..._,inputProps:{..._.inputProps,"aria-describedby":[e["aria-describedby"],t.isInvalid?u:null,s].filter(Boolean).join(" ")||void 0}}}const np=e=>{const t=ie.useRef(null),{ref:n=t}=e,o=ie.useContext(NM),l=zx(e),s=o??l,{inputProps:u,labelProps:d}=o?AM(e,s,n):Fx(e,l,n),f=o?s.isSelected(e.value):s.isSelected&&!e.isIndeterminate,p=o?s.isDisabled:e.isDisabled,{isFocusVisible:h,focusProps:y}=Bn();return D.jsxs("div",{className:Ue["checkbox-wrapper"],children:[D.jsx(Qd,{style:e.style,className:Ye(Ue.checkbox,e.className),children:D.jsxs("div",{className:Ue.container,children:[D.jsx("input",Object.assign({ref:n,className:Ue.input},we(u,y),{"aria-checked":e.isIndeterminate?"mixed":void 0})),D.jsx("span",{className:Ye([Ue.outline,p&&Ue.disabled])}),D.jsx("span",{className:Ye([Ue.background,e.isIndeterminate||f?Ue.selected:Ue.unselected])}),D.jsx(yr,{id:u.id,disabled:p,style:{inset:"unset",borderRadius:"50%",width:"var(--md-checkbox-state-layer-size, 40px)",height:"var(--md-checkbox-state-layer-size, 40px)"}}),h&&D.jsx(Fn,{style:{width:"44px",height:"44px",inset:"unset",borderRadius:"50%"}}),D.jsxs("svg",{"aria-hidden":"true",viewBox:"0 0 18 18",className:Ye([Ue.icon,e.isIndeterminate||f?Ue.selected:Ue.unselected]),children:[D.jsx("rect",{className:Ye([Ue.mark,Ue.short,e.isIndeterminate&&Ue.indeterminate,f?Ue.checked:Ue.unselected])}),D.jsx("rect",{className:Ye([Ue.mark,Ue.long,e.isIndeterminate&&Ue.indeterminate,f?Ue.checked:Ue.unselected])})]})]})}),D.jsx(Qd,Object.assign({},d,{children:e.children}))]})};np.displayName="Actify.Checkbox";function Gd(e){return eM()?e.altKey:e.ctrlKey}function ds(e,t){var n,o;let l=`[data-key="${CSS.escape(String(t))}"]`,s=(n=e.current)===null||n===void 0?void 0:n.dataset.collection;return s&&(l=`[data-collection="${CSS.escape(s)}"]${l}`),(o=e.current)===null||o===void 0?void 0:o.querySelector(l)}const Ox=new WeakMap;function zM(e){let t=Mt();return Ox.set(e,t),t}function IM(e){return Ox.get(e)}let Xd=class{getItemRect(t){let n=this.ref.current;if(!n)return null;let o=t!=null?ds(this.ref,t):null;if(!o)return null;let l=n.getBoundingClientRect(),s=o.getBoundingClientRect();return{x:s.left-l.left+n.scrollLeft,y:s.top-l.top+n.scrollTop,width:s.width,height:s.height}}getContentSize(){let t=this.ref.current;var n,o;return{width:(n=t==null?void 0:t.scrollWidth)!==null&&n!==void 0?n:0,height:(o=t==null?void 0:t.scrollHeight)!==null&&o!==void 0?o:0}}getVisibleRect(){let t=this.ref.current;var n,o,l,s;return{x:(n=t==null?void 0:t.scrollLeft)!==null&&n!==void 0?n:0,y:(o=t==null?void 0:t.scrollTop)!==null&&o!==void 0?o:0,width:(l=t==null?void 0:t.offsetWidth)!==null&&l!==void 0?l:0,height:(s=t==null?void 0:t.offsetHeight)!==null&&s!==void 0?s:0}}constructor(t){this.ref=t}};function Sl(e,t){if(!e)return!1;let n=window.getComputedStyle(e),o=/(auto|scroll)/.test(n.overflow+n.overflowX+n.overflowY);return o&&t&&(o=e.scrollHeight!==e.clientHeight||e.scrollWidth!==e.clientWidth),o}let jM=class{isDisabled(t){var n;return this.disabledBehavior==="all"&&(((n=t.props)===null||n===void 0?void 0:n.isDisabled)||this.disabledKeys.has(t.key))}findNextNonDisabled(t,n){let o=t;for(;o!=null;){let l=this.collection.getItem(o);if((l==null?void 0:l.type)==="item"&&!this.isDisabled(l))return o;o=n(o)}return null}getNextKey(t){let n=t;return n=this.collection.getKeyAfter(n),this.findNextNonDisabled(n,o=>this.collection.getKeyAfter(o))}getPreviousKey(t){let n=t;return n=this.collection.getKeyBefore(n),this.findNextNonDisabled(n,o=>this.collection.getKeyBefore(o))}findKey(t,n,o){let l=t,s=this.layoutDelegate.getItemRect(l);if(!s||l==null)return null;let u=s;do{if(l=n(l),l==null)break;s=this.layoutDelegate.getItemRect(l)}while(s&&o(u,s)&&l!=null);return l}isSameRow(t,n){return t.y===n.y||t.x!==n.x}isSameColumn(t,n){return t.x===n.x||t.y!==n.y}getKeyBelow(t){return this.layout==="grid"&&this.orientation==="vertical"?this.findKey(t,n=>this.getNextKey(n),this.isSameRow):this.getNextKey(t)}getKeyAbove(t){return this.layout==="grid"&&this.orientation==="vertical"?this.findKey(t,n=>this.getPreviousKey(n),this.isSameRow):this.getPreviousKey(t)}getNextColumn(t,n){return n?this.getPreviousKey(t):this.getNextKey(t)}getKeyRightOf(t){let n=this.direction==="ltr"?"getKeyRightOf":"getKeyLeftOf";return this.layoutDelegate[n]?(t=this.layoutDelegate[n](t),this.findNextNonDisabled(t,o=>this.layoutDelegate[n](o))):this.layout==="grid"?this.orientation==="vertical"?this.getNextColumn(t,this.direction==="rtl"):this.findKey(t,o=>this.getNextColumn(o,this.direction==="rtl"),this.isSameColumn):this.orientation==="horizontal"?this.getNextColumn(t,this.direction==="rtl"):null}getKeyLeftOf(t){let n=this.direction==="ltr"?"getKeyLeftOf":"getKeyRightOf";return this.layoutDelegate[n]?(t=this.layoutDelegate[n](t),this.findNextNonDisabled(t,o=>this.layoutDelegate[n](o))):this.layout==="grid"?this.orientation==="vertical"?this.getNextColumn(t,this.direction==="ltr"):this.findKey(t,o=>this.getNextColumn(o,this.direction==="ltr"),this.isSameColumn):this.orientation==="horizontal"?this.getNextColumn(t,this.direction==="ltr"):null}getFirstKey(){let t=this.collection.getFirstKey();return this.findNextNonDisabled(t,n=>this.collection.getKeyAfter(n))}getLastKey(){let t=this.collection.getLastKey();return this.findNextNonDisabled(t,n=>this.collection.getKeyBefore(n))}getKeyPageAbove(t){let n=this.ref.current,o=this.layoutDelegate.getItemRect(t);if(!o)return null;if(n&&!Sl(n))return this.getFirstKey();let l=t;if(this.orientation==="horizontal"){let s=Math.max(0,o.x+o.width-this.layoutDelegate.getVisibleRect().width);for(;o&&o.x>s&&l!=null;)l=this.getKeyAbove(l),o=l==null?null:this.layoutDelegate.getItemRect(l)}else{let s=Math.max(0,o.y+o.height-this.layoutDelegate.getVisibleRect().height);for(;o&&o.y>s&&l!=null;)l=this.getKeyAbove(l),o=l==null?null:this.layoutDelegate.getItemRect(l)}return l??this.getFirstKey()}getKeyPageBelow(t){let n=this.ref.current,o=this.layoutDelegate.getItemRect(t);if(!o)return null;if(n&&!Sl(n))return this.getLastKey();let l=t;if(this.orientation==="horizontal"){let s=Math.min(this.layoutDelegate.getContentSize().width,o.y-o.width+this.layoutDelegate.getVisibleRect().width);for(;o&&o.x<s&&l!=null;)l=this.getKeyBelow(l),o=l==null?null:this.layoutDelegate.getItemRect(l)}else{let s=Math.min(this.layoutDelegate.getContentSize().height,o.y-o.height+this.layoutDelegate.getVisibleRect().height);for(;o&&o.y<s&&l!=null;)l=this.getKeyBelow(l),o=l==null?null:this.layoutDelegate.getItemRect(l)}return l??this.getLastKey()}getKeyForSearch(t,n){if(!this.collator)return null;let o=this.collection,l=n||this.getFirstKey();for(;l!=null;){let s=o.getItem(l);if(!s)return null;let u=s.textValue.slice(0,t.length);if(s.textValue&&this.collator.compare(u,t)===0)return l;l=this.getNextKey(l)}return null}constructor(...t){if(t.length===1){let n=t[0];this.collection=n.collection,this.ref=n.ref,this.collator=n.collator,this.disabledKeys=n.disabledKeys||new Set,this.disabledBehavior=n.disabledBehavior||"all",this.orientation=n.orientation||"vertical",this.direction=n.direction,this.layout=n.layout||"stack",this.layoutDelegate=n.layoutDelegate||new Xd(n.ref)}else this.collection=t[0],this.disabledKeys=t[1],this.ref=t[2],this.collator=t[3],this.layout="stack",this.orientation="vertical",this.disabledBehavior="all",this.layoutDelegate=new Xd(this.ref);this.layout==="stack"&&this.orientation==="vertical"&&(this.getKeyLeftOf=void 0,this.getKeyRightOf=void 0)}};var Kx;Kx={deselectedItem:e=>`${e.item} غير المحدد`,longPressToSelect:"اضغط مطولًا للدخول إلى وضع التحديد.",select:"تحديد",selectedAll:"جميع العناصر المحددة.",selectedCount:(e,t)=>`${t.plural(e.count,{"=0":"لم يتم تحديد عناصر",one:()=>`${t.number(e.count)} عنصر محدد`,other:()=>`${t.number(e.count)} عنصر محدد`})}.`,selectedItem:e=>`${e.item} المحدد`};var Vx;Vx={deselectedItem:e=>`${e.item} не е избран.`,longPressToSelect:"Натиснете и задръжте за да влезете в избирателен режим.",select:"Изберете",selectedAll:"Всички елементи са избрани.",selectedCount:(e,t)=>`${t.plural(e.count,{"=0":"Няма избрани елементи",one:()=>`${t.number(e.count)} избран елемент`,other:()=>`${t.number(e.count)} избрани елементи`})}.`,selectedItem:e=>`${e.item} избран.`};var Bx;Bx={deselectedItem:e=>`Položka ${e.item} není vybrána.`,longPressToSelect:"Dlouhým stisknutím přejdete do režimu výběru.",select:"Vybrat",selectedAll:"Vybrány všechny položky.",selectedCount:(e,t)=>`${t.plural(e.count,{"=0":"Nevybrány žádné položky",one:()=>`Vybrána ${t.number(e.count)} položka`,other:()=>`Vybráno ${t.number(e.count)} položek`})}.`,selectedItem:e=>`Vybrána položka ${e.item}.`};var Ux;Ux={deselectedItem:e=>`${e.item} ikke valgt.`,longPressToSelect:"Lav et langt tryk for at aktivere valgtilstand.",select:"Vælg",selectedAll:"Alle elementer valgt.",selectedCount:(e,t)=>`${t.plural(e.count,{"=0":"Ingen elementer valgt",one:()=>`${t.number(e.count)} element valgt`,other:()=>`${t.number(e.count)} elementer valgt`})}.`,selectedItem:e=>`${e.item} valgt.`};var Hx;Hx={deselectedItem:e=>`${e.item} nicht ausgewählt.`,longPressToSelect:"Gedrückt halten, um Auswahlmodus zu öffnen.",select:"Auswählen",selectedAll:"Alle Elemente ausgewählt.",selectedCount:(e,t)=>`${t.plural(e.count,{"=0":"Keine Elemente ausgewählt",one:()=>`${t.number(e.count)} Element ausgewählt`,other:()=>`${t.number(e.count)} Elemente ausgewählt`})}.`,selectedItem:e=>`${e.item} ausgewählt.`};var Wx;Wx={deselectedItem:e=>`Δεν επιλέχθηκε το στοιχείο ${e.item}.`,longPressToSelect:"Πατήστε παρατεταμένα για να μπείτε σε λειτουργία επιλογής.",select:"Επιλογή",selectedAll:"Επιλέχθηκαν όλα τα στοιχεία.",selectedCount:(e,t)=>`${t.plural(e.count,{"=0":"Δεν επιλέχθηκαν στοιχεία",one:()=>`Επιλέχθηκε ${t.number(e.count)} στοιχείο`,other:()=>`Επιλέχθηκαν ${t.number(e.count)} στοιχεία`})}.`,selectedItem:e=>`Επιλέχθηκε το στοιχείο ${e.item}.`};var Yx;Yx={deselectedItem:e=>`${e.item} not selected.`,select:"Select",selectedCount:(e,t)=>`${t.plural(e.count,{"=0":"No items selected",one:()=>`${t.number(e.count)} item selected`,other:()=>`${t.number(e.count)} items selected`})}.`,selectedAll:"All items selected.",selectedItem:e=>`${e.item} selected.`,longPressToSelect:"Long press to enter selection mode."};var Qx;Qx={deselectedItem:e=>`${e.item} no seleccionado.`,longPressToSelect:"Mantenga pulsado para abrir el modo de selección.",select:"Seleccionar",selectedAll:"Todos los elementos seleccionados.",selectedCount:(e,t)=>`${t.plural(e.count,{"=0":"Ningún elemento seleccionado",one:()=>`${t.number(e.count)} elemento seleccionado`,other:()=>`${t.number(e.count)} elementos seleccionados`})}.`,selectedItem:e=>`${e.item} seleccionado.`};var Gx;Gx={deselectedItem:e=>`${e.item} pole valitud.`,longPressToSelect:"Valikurežiimi sisenemiseks vajutage pikalt.",select:"Vali",selectedAll:"Kõik üksused valitud.",selectedCount:(e,t)=>`${t.plural(e.count,{"=0":"Üksusi pole valitud",one:()=>`${t.number(e.count)} üksus valitud`,other:()=>`${t.number(e.count)} üksust valitud`})}.`,selectedItem:e=>`${e.item} valitud.`};var Xx;Xx={deselectedItem:e=>`Kohdetta ${e.item} ei valittu.`,longPressToSelect:"Siirry valintatilaan painamalla pitkään.",select:"Valitse",selectedAll:"Kaikki kohteet valittu.",selectedCount:(e,t)=>`${t.plural(e.count,{"=0":"Ei yhtään kohdetta valittu",one:()=>`${t.number(e.count)} kohde valittu`,other:()=>`${t.number(e.count)} kohdetta valittu`})}.`,selectedItem:e=>`${e.item} valittu.`};var qx;qx={deselectedItem:e=>`${e.item} non sélectionné.`,longPressToSelect:"Appuyez de manière prolongée pour passer en mode de sélection.",select:"Sélectionner",selectedAll:"Tous les éléments sélectionnés.",selectedCount:(e,t)=>`${t.plural(e.count,{"=0":"Aucun élément sélectionné",one:()=>`${t.number(e.count)} élément sélectionné`,other:()=>`${t.number(e.count)} éléments sélectionnés`})}.`,selectedItem:e=>`${e.item} sélectionné.`};var Zx;Zx={deselectedItem:e=>`${e.item} לא נבחר.`,longPressToSelect:"הקשה ארוכה לכניסה למצב בחירה.",select:"בחר",selectedAll:"כל הפריטים נבחרו.",selectedCount:(e,t)=>`${t.plural(e.count,{"=0":"לא נבחרו פריטים",one:()=>`פריט ${t.number(e.count)} נבחר`,other:()=>`${t.number(e.count)} פריטים נבחרו`})}.`,selectedItem:e=>`${e.item} נבחר.`};var Jx;Jx={deselectedItem:e=>`Stavka ${e.item} nije odabrana.`,longPressToSelect:"Dugo pritisnite za ulazak u način odabira.",select:"Odaberite",selectedAll:"Odabrane su sve stavke.",selectedCount:(e,t)=>`${t.plural(e.count,{"=0":"Nije odabrana nijedna stavka",one:()=>`Odabrana je ${t.number(e.count)} stavka`,other:()=>`Odabrano je ${t.number(e.count)} stavki`})}.`,selectedItem:e=>`Stavka ${e.item} je odabrana.`};var eb;eb={deselectedItem:e=>`${e.item} nincs kijelölve.`,longPressToSelect:"Nyomja hosszan a kijelöléshez.",select:"Kijelölés",selectedAll:"Az összes elem kijelölve.",selectedCount:(e,t)=>`${t.plural(e.count,{"=0":"Egy elem sincs kijelölve",one:()=>`${t.number(e.count)} elem kijelölve`,other:()=>`${t.number(e.count)} elem kijelölve`})}.`,selectedItem:e=>`${e.item} kijelölve.`};var tb;tb={deselectedItem:e=>`${e.item} non selezionato.`,longPressToSelect:"Premi a lungo per passare alla modalità di selezione.",select:"Seleziona",selectedAll:"Tutti gli elementi selezionati.",selectedCount:(e,t)=>`${t.plural(e.count,{"=0":"Nessun elemento selezionato",one:()=>`${t.number(e.count)} elemento selezionato`,other:()=>`${t.number(e.count)} elementi selezionati`})}.`,selectedItem:e=>`${e.item} selezionato.`};var nb;nb={deselectedItem:e=>`${e.item} が選択されていません。`,longPressToSelect:"長押しして選択モードを開きます。",select:"選択",selectedAll:"すべての項目を選択しました。",selectedCount:(e,t)=>`${t.plural(e.count,{"=0":"項目が選択されていません",one:()=>`${t.number(e.count)} 項目を選択しました`,other:()=>`${t.number(e.count)} 項目を選択しました`})}。`,selectedItem:e=>`${e.item} を選択しました。`};var rb;rb={deselectedItem:e=>`${e.item}이(가) 선택되지 않았습니다.`,longPressToSelect:"선택 모드로 들어가려면 길게 누르십시오.",select:"선택",selectedAll:"모든 항목이 선택되었습니다.",selectedCount:(e,t)=>`${t.plural(e.count,{"=0":"선택된 항목이 없습니다",one:()=>`${t.number(e.count)}개 항목이 선택되었습니다`,other:()=>`${t.number(e.count)}개 항목이 선택되었습니다`})}.`,selectedItem:e=>`${e.item}이(가) 선택되었습니다.`};var ob;ob={deselectedItem:e=>`${e.item} nepasirinkta.`,longPressToSelect:"Norėdami įjungti pasirinkimo režimą, paspauskite ir palaikykite.",select:"Pasirinkti",selectedAll:"Pasirinkti visi elementai.",selectedCount:(e,t)=>`${t.plural(e.count,{"=0":"Nepasirinktas nė vienas elementas",one:()=>`Pasirinktas ${t.number(e.count)} elementas`,other:()=>`Pasirinkta elementų: ${t.number(e.count)}`})}.`,selectedItem:e=>`Pasirinkta: ${e.item}.`};var ib;ib={deselectedItem:e=>`Vienums ${e.item} nav atlasīts.`,longPressToSelect:"Ilgi turiet nospiestu. lai ieslēgtu atlases režīmu.",select:"Atlasīt",selectedAll:"Atlasīti visi vienumi.",selectedCount:(e,t)=>`${t.plural(e.count,{"=0":"Nav atlasīts neviens vienums",one:()=>`Atlasīto vienumu skaits: ${t.number(e.count)}`,other:()=>`Atlasīto vienumu skaits: ${t.number(e.count)}`})}.`,selectedItem:e=>`Atlasīts vienums ${e.item}.`};var lb;lb={deselectedItem:e=>`${e.item} er ikke valgt.`,longPressToSelect:"Bruk et langt trykk for å gå inn i valgmodus.",select:"Velg",selectedAll:"Alle elementer er valgt.",selectedCount:(e,t)=>`${t.plural(e.count,{"=0":"Ingen elementer er valgt",one:()=>`${t.number(e.count)} element er valgt`,other:()=>`${t.number(e.count)} elementer er valgt`})}.`,selectedItem:e=>`${e.item} er valgt.`};var ab;ab={deselectedItem:e=>`${e.item} niet geselecteerd.`,longPressToSelect:"Druk lang om de selectiemodus te openen.",select:"Selecteren",selectedAll:"Alle items geselecteerd.",selectedCount:(e,t)=>`${t.plural(e.count,{"=0":"Geen items geselecteerd",one:()=>`${t.number(e.count)} item geselecteerd`,other:()=>`${t.number(e.count)} items geselecteerd`})}.`,selectedItem:e=>`${e.item} geselecteerd.`};var sb;sb={deselectedItem:e=>`Nie zaznaczono ${e.item}.`,longPressToSelect:"Naciśnij i przytrzymaj, aby wejść do trybu wyboru.",select:"Zaznacz",selectedAll:"Wszystkie zaznaczone elementy.",selectedCount:(e,t)=>`${t.plural(e.count,{"=0":"Nie zaznaczono żadnych elementów",one:()=>`${t.number(e.count)} zaznaczony element`,other:()=>`${t.number(e.count)} zaznaczonych elementów`})}.`,selectedItem:e=>`Zaznaczono ${e.item}.`};var ub;ub={deselectedItem:e=>`${e.item} não selecionado.`,longPressToSelect:"Mantenha pressionado para entrar no modo de seleção.",select:"Selecionar",selectedAll:"Todos os itens selecionados.",selectedCount:(e,t)=>`${t.plural(e.count,{"=0":"Nenhum item selecionado",one:()=>`${t.number(e.count)} item selecionado`,other:()=>`${t.number(e.count)} itens selecionados`})}.`,selectedItem:e=>`${e.item} selecionado.`};var cb;cb={deselectedItem:e=>`${e.item} não selecionado.`,longPressToSelect:"Prima continuamente para entrar no modo de seleção.",select:"Selecionar",selectedAll:"Todos os itens selecionados.",selectedCount:(e,t)=>`${t.plural(e.count,{"=0":"Nenhum item selecionado",one:()=>`${t.number(e.count)} item selecionado`,other:()=>`${t.number(e.count)} itens selecionados`})}.`,selectedItem:e=>`${e.item} selecionado.`};var db;db={deselectedItem:e=>`${e.item} neselectat.`,longPressToSelect:"Apăsați lung pentru a intra în modul de selectare.",select:"Selectare",selectedAll:"Toate elementele selectate.",selectedCount:(e,t)=>`${t.plural(e.count,{"=0":"Niciun element selectat",one:()=>`${t.number(e.count)} element selectat`,other:()=>`${t.number(e.count)} elemente selectate`})}.`,selectedItem:e=>`${e.item} selectat.`};var fb;fb={deselectedItem:e=>`${e.item} не выбрано.`,longPressToSelect:"Нажмите и удерживайте для входа в режим выбора.",select:"Выбрать",selectedAll:"Выбраны все элементы.",selectedCount:(e,t)=>`${t.plural(e.count,{"=0":"Нет выбранных элементов",one:()=>`${t.number(e.count)} элемент выбран`,other:()=>`${t.number(e.count)} элементов выбрано`})}.`,selectedItem:e=>`${e.item} выбрано.`};var pb;pb={deselectedItem:e=>`Nevybraté položky: ${e.item}.`,longPressToSelect:"Dlhším stlačením prejdite do režimu výberu.",select:"Vybrať",selectedAll:"Všetky vybraté položky.",selectedCount:(e,t)=>`${t.plural(e.count,{"=0":"Žiadne vybraté položky",one:()=>`${t.number(e.count)} vybratá položka`,other:()=>`Počet vybratých položiek:${t.number(e.count)}`})}.`,selectedItem:e=>`Vybraté položky: ${e.item}.`};var mb;mb={deselectedItem:e=>`Element ${e.item} ni izbran.`,longPressToSelect:"Za izbirni način pritisnite in dlje časa držite.",select:"Izberite",selectedAll:"Vsi elementi so izbrani.",selectedCount:(e,t)=>`${t.plural(e.count,{"=0":"Noben element ni izbran",one:()=>`${t.number(e.count)} element je izbran`,other:()=>`${t.number(e.count)} elementov je izbranih`})}.`,selectedItem:e=>`Element ${e.item} je izbran.`};var hb;hb={deselectedItem:e=>`${e.item} nije izabrano.`,longPressToSelect:"Dugo pritisnite za ulazak u režim biranja.",select:"Izaberite",selectedAll:"Izabrane su sve stavke.",selectedCount:(e,t)=>`${t.plural(e.count,{"=0":"Nije izabrana nijedna stavka",one:()=>`Izabrana je ${t.number(e.count)} stavka`,other:()=>`Izabrano je ${t.number(e.count)} stavki`})}.`,selectedItem:e=>`${e.item} je izabrano.`};var vb;vb={deselectedItem:e=>`${e.item} ej markerat.`,longPressToSelect:"Tryck länge när du vill öppna väljarläge.",select:"Markera",selectedAll:"Alla markerade objekt.",selectedCount:(e,t)=>`${t.plural(e.count,{"=0":"Inga markerade objekt",one:()=>`${t.number(e.count)} markerat objekt`,other:()=>`${t.number(e.count)} markerade objekt`})}.`,selectedItem:e=>`${e.item} markerat.`};var gb;gb={deselectedItem:e=>`${e.item} seçilmedi.`,longPressToSelect:"Seçim moduna girmek için uzun basın.",select:"Seç",selectedAll:"Tüm ögeler seçildi.",selectedCount:(e,t)=>`${t.plural(e.count,{"=0":"Hiçbir öge seçilmedi",one:()=>`${t.number(e.count)} öge seçildi`,other:()=>`${t.number(e.count)} öge seçildi`})}.`,selectedItem:e=>`${e.item} seçildi.`};var yb;yb={deselectedItem:e=>`${e.item} не вибрано.`,longPressToSelect:"Виконайте довге натиснення, щоб перейти в режим вибору.",select:"Вибрати",selectedAll:"Усі елементи вибрано.",selectedCount:(e,t)=>`${t.plural(e.count,{"=0":"Жодних елементів не вибрано",one:()=>`${t.number(e.count)} елемент вибрано`,other:()=>`Вибрано елементів: ${t.number(e.count)}`})}.`,selectedItem:e=>`${e.item} вибрано.`};var xb;xb={deselectedItem:e=>`未选择 ${e.item}。`,longPressToSelect:"长按以进入选择模式。",select:"选择",selectedAll:"已选择所有项目。",selectedCount:(e,t)=>`${t.plural(e.count,{"=0":"未选择项目",one:()=>`已选择 ${t.number(e.count)} 个项目`,other:()=>`已选择 ${t.number(e.count)} 个项目`})}。`,selectedItem:e=>`已选择 ${e.item}。`};var bb;bb={deselectedItem:e=>`未選取「${e.item}」。`,longPressToSelect:"長按以進入選擇模式。",select:"選取",selectedAll:"已選取所有項目。",selectedCount:(e,t)=>`${t.plural(e.count,{"=0":"未選取任何項目",one:()=>`已選取 ${t.number(e.count)} 個項目`,other:()=>`已選取 ${t.number(e.count)} 個項目`})}。`,selectedItem:e=>`已選取「${e.item}」。`};var Ks;Ks={"ar-AE":Kx,"bg-BG":Vx,"cs-CZ":Bx,"da-DK":Ux,"de-DE":Hx,"el-GR":Wx,"en-US":Yx,"es-ES":Qx,"et-EE":Gx,"fi-FI":Xx,"fr-FR":qx,"he-IL":Zx,"hr-HR":Jx,"hu-HU":eb,"it-IT":tb,"ja-JP":nb,"ko-KR":rb,"lt-LT":ob,"lv-LV":ib,"nb-NO":lb,"nl-NL":ab,"pl-PL":sb,"pt-BR":ub,"pt-PT":cb,"ro-RO":db,"ru-RU":fb,"sk-SK":pb,"sl-SI":mb,"sr-SP":hb,"sv-SE":vb,"tr-TR":gb,"uk-UA":yb,"zh-CN":xb,"zh-TW":bb};let FM=0;const dd=new Map;function Vs(e){let[t,n]=k.useState();return Re(()=>{if(!e)return;let o=dd.get(e);if(o)n(o.element.id);else{let l="react-aria-description-"+FM++;n(l);let s=document.createElement("div");s.id=l,s.style.display="none",s.textContent=e,document.body.appendChild(s),o={refCount:0,element:s},dd.set(e,o)}return o.refCount++,()=>{o&&--o.refCount==0&&(o.element.remove(),dd.delete(e))}},[e]),{"aria-describedby":e?t:void 0}}const OM=new Set(["Arab","Syrc","Samr","Mand","Thaa","Mend","Nkoo","Adlm","Rohg","Hebr"]),KM=new Set(["ae","ar","arc","bcc","bqi","ckb","dv","fa","glk","he","ku","mzn","nqo","pnb","ps","sd","ug","ur","yi"]);function VM(e){if(Intl.Locale){let n=new Intl.Locale(e).maximize(),o=typeof n.getTextInfo=="function"?n.getTextInfo():n.textInfo;if(o)return o.direction==="rtl";if(n.script)return OM.has(n.script)}let t=e.split("-")[0];return KM.has(t)}const BM=Symbol.for("react-aria.i18n.locale");function wb(){let e=typeof window<"u"&&window[BM]||typeof navigator<"u"&&(navigator.language||navigator.userLanguage)||"en-US";try{Intl.DateTimeFormat.supportedLocalesOf([e])}catch{e="en-US"}return{locale:e,direction:VM(e)?"rtl":"ltr"}}let qd=wb(),el=new Set;function Kg(){qd=wb();for(let e of el)e(qd)}function UM(){let e=Ds(),[t,n]=k.useState(qd);return k.useEffect(()=>(el.size===0&&window.addEventListener("languagechange",Kg),el.add(n),()=>{el.delete(n),el.size===0&&window.removeEventListener("languagechange",Kg)}),[]),e?{locale:"en-US",direction:"ltr"}:t}const HM=ie.createContext(null);function Sr(){let e=UM();return k.useContext(HM)||e}const WM=Symbol.for("react-aria.i18n.locale"),YM=Symbol.for("react-aria.i18n.strings");let Ki,Vg=class _b{getStringForLocale(t,n){let o=this.getStringsForLocale(n)[t];if(!o)throw new Error(`Could not find intl message ${t} in ${n} locale`);return o}getStringsForLocale(t){let n=this.strings[t];return n||(n=function(o,l,s="en-US"){if(l[o])return l[o];let u=function(d){return Intl.Locale?new Intl.Locale(d).language:d.split("-")[0]}(o);if(l[u])return l[u];for(let d in l)if(d.startsWith(u+"-"))return l[d];return l[s]}(t,this.strings,this.defaultLocale),this.strings[t]=n),n}static getGlobalDictionaryForPackage(t){if(typeof window>"u")return null;let n=window[WM];if(Ki===void 0){let l=window[YM];if(!l)return null;Ki={};for(let s in l)Ki[s]=new _b({[n]:l[s]},n)}let o=Ki==null?void 0:Ki[t];if(!o)throw new Error(`Strings for package "${t}" were not included by LocalizedStringProvider. Please add it to the list passed to createLocalizedStringDictionary.`);return o}constructor(t,n="en-US"){this.strings=Object.fromEntries(Object.entries(t).filter(([,o])=>o)),this.defaultLocale=n}};const Bg=new Map,Ug=new Map;let QM=class{format(t,n){let o=this.strings.getStringForLocale(t,this.locale);return typeof o=="function"?o(n,this):o}plural(t,n,o="cardinal"){let l=n["="+t];if(l)return typeof l=="function"?l():l;let s=this.locale+":"+o,u=Bg.get(s);return u||(u=new Intl.PluralRules(this.locale,{type:o}),Bg.set(s,u)),l=n[u.select(t)]||n.other,typeof l=="function"?l():l}number(t){let n=Ug.get(this.locale);return n||(n=new Intl.NumberFormat(this.locale),Ug.set(this.locale,n)),n.format(t)}select(t,n){let o=t[n]||t.other;return typeof o=="function"?o():o}constructor(t,n){this.locale=t,this.strings=n}};const Hg=new WeakMap;function GM(e,t){return t&&Vg.getGlobalDictionaryForPackage(t)||function(n){let o=Hg.get(n);return o||(o=new Vg(n),Hg.set(n,o)),o}(e)}function kr(e,t){let{locale:n}=Sr(),o=GM(e,t);return k.useMemo(()=>new QM(n,o),[n,o])}function XM(e){let t=kr((n=Ks)&&n.__esModule?n.default:n,"@react-aria/grid");var n;let o=yM(),l=(o==="pointer"||o==="virtual"||o==null)&&typeof window<"u"&&"ontouchstart"in window,s=k.useMemo(()=>{let u,d=e.selectionManager.selectionMode,f=e.selectionManager.selectionBehavior;return l&&(u=t.format("longPressToSelect")),f==="replace"&&d!=="none"&&e.hasItemActions?u:void 0},[e.selectionManager.selectionMode,e.selectionManager.selectionBehavior,e.hasItemActions,t,l]);return Vs(s)}function Sb(e,t){const n=k.useRef(!0),o=k.useRef(null);k.useEffect(()=>(n.current=!0,()=>{n.current=!1}),[]),k.useEffect(()=>{let l=o.current;n.current?n.current=!1:l&&!t.some((s,u)=>!Object.is(s,l[u]))||e(),o.current=t},t)}function qM(e,t){let{getRowText:n=f=>{var p,h,y,v;return(v=(p=(h=t.collection).getTextValue)===null||p===void 0?void 0:p.call(h,f))!==null&&v!==void 0?v:(y=t.collection.getItem(f))===null||y===void 0?void 0:y.textValue}}=e,o=kr((l=Ks)&&l.__esModule?l.default:l,"@react-aria/grid");var l;let s=t.selectionManager.rawSelection,u=k.useRef(s),d=it(()=>{var f;if(!t.selectionManager.isFocused||s===u.current)return void(u.current=s);let p=Wg(s,u.current),h=Wg(u.current,s),y=t.selectionManager.selectionBehavior==="replace",v=[];if(t.selectionManager.selectedKeys.size===1&&y){if(t.collection.getItem(t.selectionManager.selectedKeys.keys().next().value)){let x=n(t.selectionManager.selectedKeys.keys().next().value);x&&v.push(o.format("selectedItem",{item:x}))}}else if(p.size===1&&h.size===0){let x=n(p.keys().next().value);x&&v.push(o.format("selectedItem",{item:x}))}else if(h.size===1&&p.size===0&&t.collection.getItem(h.keys().next().value)){let x=n(h.keys().next().value);x&&v.push(o.format("deselectedItem",{item:x}))}t.selectionManager.selectionMode==="multiple"&&(v.length===0||s==="all"||s.size>1||u.current==="all"||((f=u.current)===null||f===void 0?void 0:f.size)>1)&&v.push(s==="all"?o.format("selectedAll"):o.format("selectedCount",{count:s.size})),v.length>0&&Yf(v.join(" ")),u.current=s});Sb(()=>{if(!t.selectionManager.isFocused){let f=requestAnimationFrame(d);return()=>cancelAnimationFrame(f)}d()},[s,t.selectionManager.isFocused])}function Wg(e,t){let n=new Set;if(e==="all"||t==="all")return n;for(let o of e.keys())t.has(o)||n.add(o);return n}function kb(e,t){return e.nodeName!=="#comment"&&function(n){const o=It(n);if(!(n instanceof o.HTMLElement||n instanceof o.SVGElement))return!1;let{display:l,visibility:s}=n.style,u=l!=="none"&&s!=="hidden"&&s!=="collapse";if(u){const{getComputedStyle:d}=n.ownerDocument.defaultView;let{display:f,visibility:p}=d(n);u=f!=="none"&&p!=="hidden"&&p!=="collapse"}return u}(e)&&function(n,o){return!n.hasAttribute("hidden")&&!n.hasAttribute("data-react-aria-prevent-focus")&&(n.nodeName!=="DETAILS"||!o||o.nodeName==="SUMMARY"||n.hasAttribute("open"))}(e,t)&&(!e.parentElement||kb(e.parentElement,e))}function ZM(e,t,n,o){return e.createTreeWalker(t,n,o)}const Yg=ie.createContext(null),Zd="react-aria-focus-scope-restore";let Ne=null;function JM(e){let{children:t,contain:n,restoreFocus:o,autoFocus:l}=e,s=k.useRef(null),u=k.useRef(null),d=k.useRef([]),{parentNode:f}=k.useContext(Yg)||{},p=k.useMemo(()=>new Jd({scopeRef:d}),[d]);Re(()=>{let v=f||Ze.root;if(Ze.getTreeNode(v.scopeRef)&&Ne&&!qa(Ne,v.scopeRef)){let x=Ze.getTreeNode(Ne);x&&(v=x)}v.addChild(p),Ze.addNode(p)},[p,f]),Re(()=>{let v=Ze.getTreeNode(d);v&&(v.contain=!!n)},[n]),Re(()=>{var v;let x=(v=s.current)===null||v===void 0?void 0:v.nextSibling,b=[],_=S=>S.stopPropagation();for(;x&&x!==u.current;)b.push(x),x.addEventListener(Zd,_),x=x.nextSibling;return d.current=b,()=>{for(let S of b)S.removeEventListener(Zd,_)}},[t]),function(v,x,b){Re(()=>{if(x||b)return;let _=v.current;const S=Me(_?_[0]:void 0);let $=E=>{let N=Pe(E);Qt(N,v.current)?Ne=v:Qg(N)||(Ne=null)};return S.addEventListener("focusin",$,!1),_==null||_.forEach(E=>E.addEventListener("focusin",$,!1)),()=>{S.removeEventListener("focusin",$,!1),_==null||_.forEach(E=>E.removeEventListener("focusin",$,!1))}},[v,x,b])}(d,o,n),function(v,x){let b=k.useRef(void 0),_=k.useRef(void 0);Re(()=>{let S=v.current;if(!x)return void(_.current&&(cancelAnimationFrame(_.current),_.current=void 0));const $=Me(S?S[0]:void 0);let E=M=>{if(M.key!=="Tab"||M.altKey||M.ctrlKey||M.metaKey||!Vi(v)||M.isComposing)return;let I=xt($),z=v.current;if(!z||!Qt(I,z))return;let P=Xt(Ur(z),{tabbable:!0},z);if(!I)return;P.currentNode=I;let K=M.shiftKey?P.previousNode():P.nextNode();K||(P.currentNode=M.shiftKey?z[z.length-1].nextElementSibling:z[0].previousElementSibling,K=M.shiftKey?P.previousNode():P.nextNode()),M.preventDefault(),K&&Nn(K,!0)},N=M=>{Ne&&!qa(Ne,v)||!Qt(Pe(M),v.current)?Vi(v)&&!hr(Pe(M),v)?b.current?b.current.focus():Ne&&Ne.current&&fd(Ne.current):Vi(v)&&(b.current=Pe(M)):(Ne=v,b.current=Pe(M))},O=M=>{_.current&&cancelAnimationFrame(_.current),_.current=requestAnimationFrame(()=>{let I=Ss(),z=(I==="virtual"||I===null)&&xl()&&xx(),P=xt($);if(!z&&P&&Vi(v)&&!hr(P,v)){Ne=v;let J=Pe(M);var K;J&&J.isConnected?(b.current=J,(K=b.current)===null||K===void 0||K.focus()):Ne.current&&fd(Ne.current)}})};return $.addEventListener("keydown",E,!1),$.addEventListener("focusin",N,!1),S==null||S.forEach(M=>M.addEventListener("focusin",N,!1)),S==null||S.forEach(M=>M.addEventListener("focusout",O,!1)),()=>{$.removeEventListener("keydown",E,!1),$.removeEventListener("focusin",N,!1),S==null||S.forEach(M=>M.removeEventListener("focusin",N,!1)),S==null||S.forEach(M=>M.removeEventListener("focusout",O,!1))}},[v,x]),Re(()=>()=>{_.current&&cancelAnimationFrame(_.current)},[_])}(d,n),function(v,x,b){const _=k.useRef(typeof document<"u"?xt(Me(v.current?v.current[0]:void 0)):null);Re(()=>{let S=v.current;const $=Me(S?S[0]:void 0);if(!x||b)return;let E=()=>{Ne&&!qa(Ne,v)||!Qt(xt($),v.current)||(Ne=v)};return $.addEventListener("focusin",E,!1),S==null||S.forEach(N=>N.addEventListener("focusin",E,!1)),()=>{$.removeEventListener("focusin",E,!1),S==null||S.forEach(N=>N.removeEventListener("focusin",E,!1))}},[v,b]),Re(()=>{const S=Me(v.current?v.current[0]:void 0);if(!x)return;let $=E=>{if(E.key!=="Tab"||E.altKey||E.ctrlKey||E.metaKey||!Vi(v)||E.isComposing)return;let N=S.activeElement;if(!hr(N,v)||!Gg(v))return;let O=Ze.getTreeNode(v);if(!O)return;let M=O.nodeToRestore,I=Xt(S.body,{tabbable:!0});I.currentNode=N;let z=E.shiftKey?I.previousNode():I.nextNode();if(M&&M.isConnected&&M!==S.body||(M=void 0,O.nodeToRestore=void 0),(!z||!hr(z,v))&&M){I.currentNode=M;do z=E.shiftKey?I.previousNode():I.nextNode();while(hr(z,v));E.preventDefault(),E.stopPropagation(),z?Nn(z,!0):Qg(M)?Nn(M,!0):N.blur()}};return b||S.addEventListener("keydown",$,!0),()=>{b||S.removeEventListener("keydown",$,!0)}},[v,x,b]),Re(()=>{const S=Me(v.current?v.current[0]:void 0);if(!x)return;let $=Ze.getTreeNode(v);var E;return $?($.nodeToRestore=(E=_.current)!==null&&E!==void 0?E:void 0,()=>{let N=Ze.getTreeNode(v);if(!N)return;let O=N.nodeToRestore,M=xt(S);if(x&&O&&(M&&hr(M,v)||M===S.body&&Gg(v))){let I=Ze.clone();requestAnimationFrame(()=>{if(S.activeElement===S.body){let z=I.getTreeNode(v);for(;z;){if(z.nodeToRestore&&z.nodeToRestore.isConnected)return void Xg(z.nodeToRestore);z=z.parent}for(z=I.getTreeNode(v);z;){if(z.scopeRef&&z.scopeRef.current&&Ze.getTreeNode(z.scopeRef))return void Xg($b(z.scopeRef.current,!0));z=z.parent}}})}}):void 0},[v,x])}(d,o,n),function(v,x){const b=ie.useRef(x);k.useEffect(()=>{if(b.current){Ne=v;const _=Me(v.current?v.current[0]:void 0);!Qt(xt(_),Ne.current)&&v.current&&fd(v.current)}b.current=!1},[v])}(d,l),k.useEffect(()=>{const v=xt(Me(d.current?d.current[0]:void 0));let x=null;if(Qt(v,d.current)){for(let b of Ze.traverse())b.scopeRef&&Qt(v,b.scopeRef.current)&&(x=b);x===Ze.getTreeNode(d)&&(Ne=x.scopeRef)}},[d]),Re(()=>()=>{var v,x,b;let _=(b=(x=Ze.getTreeNode(d))===null||x===void 0||(v=x.parent)===null||v===void 0?void 0:v.scopeRef)!==null&&b!==void 0?b:null;d!==Ne&&!qa(d,Ne)||_&&!Ze.getTreeNode(_)||(Ne=_),Ze.removeTreeNode(d)},[d]);let h=k.useMemo(()=>function(v){return{focusNext(x={}){let b=v.current,{from:_,tabbable:S,wrap:$,accept:E}=x;var N;let O=_||xt(Me((N=b[0])!==null&&N!==void 0?N:void 0)),M=b[0].previousElementSibling,I=Xt(Ur(b),{tabbable:S,accept:E},b);I.currentNode=Qt(O,b)?O:M;let z=I.nextNode();return!z&&$&&(I.currentNode=M,z=I.nextNode()),z&&Nn(z,!0),z},focusPrevious(x={}){let b=v.current,{from:_,tabbable:S,wrap:$,accept:E}=x;var N;let O=_||xt(Me((N=b[0])!==null&&N!==void 0?N:void 0)),M=b[b.length-1].nextElementSibling,I=Xt(Ur(b),{tabbable:S,accept:E},b);I.currentNode=Qt(O,b)?O:M;let z=I.previousNode();return!z&&$&&(I.currentNode=M,z=I.previousNode()),z&&Nn(z,!0),z},focusFirst(x={}){let b=v.current,{tabbable:_,accept:S}=x,$=Xt(Ur(b),{tabbable:_,accept:S},b);$.currentNode=b[0].previousElementSibling;let E=$.nextNode();return E&&Nn(E,!0),E},focusLast(x={}){let b=v.current,{tabbable:_,accept:S}=x,$=Xt(Ur(b),{tabbable:_,accept:S},b);$.currentNode=b[b.length-1].nextElementSibling;let E=$.previousNode();return E&&Nn(E,!0),E}}}(d),[]),y=k.useMemo(()=>({focusManager:h,parentNode:p}),[p,h]);return ie.createElement(Yg.Provider,{value:y},ie.createElement("span",{"data-focus-scope-start":!0,hidden:!0,ref:s}),t,ie.createElement("span",{"data-focus-scope-end":!0,hidden:!0,ref:u}))}function Ur(e){return e[0].parentElement}function Vi(e){let t=Ze.getTreeNode(Ne);for(;t&&t.scopeRef!==e;){if(t.contain)return!1;t=t.parent}return!0}function Qg(e){return hr(e)}function Qt(e,t){return!!e&&!!t&&t.some(n=>n.contains(e))}function hr(e,t=null){if(e instanceof Element&&e.closest("[data-react-aria-top-layer]"))return!0;for(let{scopeRef:n}of Ze.traverse(Ze.getTreeNode(t)))if(n&&Qt(e,n.current))return!0;return!1}function eD(e){return hr(e,Ne)}function qa(e,t){var n;let o=(n=Ze.getTreeNode(t))===null||n===void 0?void 0:n.parent;for(;o;){if(o.scopeRef===e)return!0;o=o.parent}return!1}function Nn(e,t=!1){if(e==null||t){if(e!=null)try{e.focus()}catch{}}else try{zt(e)}catch{}}function $b(e,t=!0){let n=e[0].previousElementSibling,o=Ur(e),l=Xt(o,{tabbable:t},e);l.currentNode=n;let s=l.nextNode();return t&&!s&&(o=Ur(e),l=Xt(o,{tabbable:!1},e),l.currentNode=n,s=l.nextNode()),s}function fd(e,t=!0){Nn($b(e,t))}function Gg(e){let t=Ze.getTreeNode(Ne);for(;t&&t.scopeRef!==e;){if(t.nodeToRestore)return!1;t=t.parent}return(t==null?void 0:t.scopeRef)===e}function Xg(e){e.dispatchEvent(new CustomEvent(Zd,{bubbles:!0,cancelable:!0}))&&Nn(e)}function Xt(e,t,n){let o=t!=null&&t.tabbable?oM:bx,l=(e==null?void 0:e.nodeType)===Node.ELEMENT_NODE?e:null,s=Me(l),u=ZM(s,e||s,NodeFilter.SHOW_ELEMENT,{acceptNode(d){var f;return!(t==null||(f=t.from)===null||f===void 0)&&f.contains(d)?NodeFilter.FILTER_REJECT:!o(d)||!kb(d)||n&&!Qt(d,n)||t!=null&&t.accept&&!t.accept(d)?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT}});return t!=null&&t.from&&(u.currentNode=t.from),u}class rp{get size(){return this.fastMap.size}getTreeNode(t){return this.fastMap.get(t)}addTreeNode(t,n,o){let l=this.fastMap.get(n??null);if(!l)return;let s=new Jd({scopeRef:t});l.addChild(s),s.parent=l,this.fastMap.set(t,s),o&&(s.nodeToRestore=o)}addNode(t){this.fastMap.set(t.scopeRef,t)}removeTreeNode(t){if(t===null)return;let n=this.fastMap.get(t);if(!n)return;let o=n.parent;for(let s of this.traverse())s!==n&&n.nodeToRestore&&s.nodeToRestore&&n.scopeRef&&n.scopeRef.current&&Qt(s.nodeToRestore,n.scopeRef.current)&&(s.nodeToRestore=n.nodeToRestore);let l=n.children;o&&(o.removeChild(n),l.size>0&&l.forEach(s=>o&&o.addChild(s))),this.fastMap.delete(n.scopeRef)}*traverse(t=this.root){if(t.scopeRef!=null&&(yield t),t.children.size>0)for(let n of t.children)yield*this.traverse(n)}clone(){var t;let n=new rp;var o;for(let l of this.traverse())n.addTreeNode(l.scopeRef,(o=(t=l.parent)===null||t===void 0?void 0:t.scopeRef)!==null&&o!==void 0?o:null,l.nodeToRestore);return n}constructor(){this.fastMap=new Map,this.root=new Jd({scopeRef:null}),this.fastMap.set(null,this.root)}}class Jd{addChild(t){this.children.add(t),t.parent=this}removeChild(t){this.children.delete(t),t.parent=void 0}constructor(t){this.children=new Set,this.contain=!1,this.scopeRef=t.scopeRef}}let Ze=new rp;function tD(e,t){let n=t==null?void 0:t.isDisabled,[o,l]=k.useState(!1);return Re(()=>{if(e!=null&&e.current&&!n){let s=()=>{if(e.current){let d=Xt(e.current,{tabbable:!0});l(!!d.nextNode())}};s();let u=new MutationObserver(s);return u.observe(e.current,{subtree:!0,childList:!0,attributes:!0,attributeFilter:["tabIndex","disabled"]}),()=>{u.disconnect()}}}),!n&&o}function nD(e){let{keyboardDelegate:t,selectionManager:n,onTypeSelect:o}=e,l=k.useRef({search:"",timeout:void 0}).current;return{typeSelectProps:{onKeyDownCapture:t.getKeyForSearch?s=>{let u=(d=s.key).length!==1&&/^[A-Z]/i.test(d)?"":d;var d;if(u&&!s.ctrlKey&&!s.metaKey&&s.currentTarget.contains(s.target)){if(u===" "&&l.search.trim().length>0&&(s.preventDefault(),"continuePropagation"in s||s.stopPropagation()),l.search+=u,t.getKeyForSearch!=null){let f=t.getKeyForSearch(l.search,n.focusedKey);f==null&&(f=t.getKeyForSearch(l.search)),f!=null&&(n.setFocusedKey(f),o&&o(f))}clearTimeout(l.timeout),l.timeout=setTimeout(()=>{l.search=""},1e3)}}:void 0}}}function qg(e,t){const n=k.useRef(!0),o=k.useRef(null);Re(()=>(n.current=!0,()=>{n.current=!1}),[]),Re(()=>{n.current?n.current=!1:o.current&&!t.some((l,s)=>!Object.is(l,o[s]))||e(),o.current=t},t)}function Za(e,t,n,o){let l=it(n),s=n==null;k.useEffect(()=>{if(s||!e.current)return;let u=e.current;return u.addEventListener(t,l,o),()=>{u.removeEventListener(t,l,o)}},[e,t,o,s,l])}function rD(e,t){const n=[];for(;e&&e!==document.documentElement;)Sl(e,t)&&n.push(e),e=e.parentElement;return n}function Eb(e,t){let n=Zg(e,t,"left"),o=Zg(e,t,"top"),l=t.offsetWidth,s=t.offsetHeight,u=e.scrollLeft,d=e.scrollTop,{borderTopWidth:f,borderLeftWidth:p,scrollPaddingTop:h,scrollPaddingRight:y,scrollPaddingBottom:v,scrollPaddingLeft:x}=getComputedStyle(e),b=u+parseInt(p,10),_=d+parseInt(f,10),S=b+e.clientWidth,$=_+e.clientHeight,E=parseInt(h,10)||0,N=parseInt(v,10)||0,O=parseInt(y,10)||0,M=parseInt(x,10)||0;n<=u+M?u=n-parseInt(p,10)-M:n+l>S-O&&(u+=n+l-S+O),o<=_+E?d=o-parseInt(f,10)-E:o+s>$-N&&(d+=o+s-$+N),e.scrollLeft=u,e.scrollTop=d}function Zg(e,t,n){const o=n==="left"?"offsetLeft":"offsetTop";let l=0;for(;t.offsetParent&&(l+=t[o],t.offsetParent!==e);){if(t.offsetParent.contains(e)){l-=e[o];break}t=t.offsetParent}return l}function vr(e,t){if(e&&document.contains(e)){let u=document.scrollingElement||document.documentElement;if(window.getComputedStyle(u).overflow==="hidden"){let d=rD(e);for(let f of d)Eb(f,e)}else{var n;let{left:d,top:f}=e.getBoundingClientRect();e==null||(n=e.scrollIntoView)===null||n===void 0||n.call(e,{block:"nearest"});let{left:p,top:h}=e.getBoundingClientRect();var o,l,s;(Math.abs(d-p)>1||Math.abs(f-h)>1)&&(t==null||(l=t.containingElement)===null||l===void 0||(o=l.scrollIntoView)===null||o===void 0||o.call(l,{block:"center",inline:"center"}),(s=e.scrollIntoView)===null||s===void 0||s.call(e,{block:"nearest"}))}}}const oD="react-aria-clear-focus",iD="react-aria-focus";function Lo(e){return Qr()?e.metaKey:e.ctrlKey}function Pb(e){let t=sD(Me(e));t!==e&&(t&&lD(t,e),e&&aD(e,t))}function lD(e,t){e.dispatchEvent(new FocusEvent("blur",{relatedTarget:t})),e.dispatchEvent(new FocusEvent("focusout",{bubbles:!0,relatedTarget:t}))}function aD(e,t){e.dispatchEvent(new FocusEvent("focus",{relatedTarget:t})),e.dispatchEvent(new FocusEvent("focusin",{bubbles:!0,relatedTarget:t}))}function sD(e){let t=xt(e),n=t==null?void 0:t.getAttribute("aria-activedescendant");return n&&e.getElementById(n)||t}function Tb(e){let{selectionManager:t,keyboardDelegate:n,ref:o,autoFocus:l=!1,shouldFocusWrap:s=!1,disallowEmptySelection:u=!1,disallowSelectAll:d=!1,selectOnFocus:f=t.selectionBehavior==="replace",disallowTypeAhead:p=!1,shouldUseVirtualFocus:h,allowsTabNavigation:y=!1,isVirtualized:v,scrollRef:x=o,linkBehavior:b="action"}=e,{direction:_}=Sr(),S=Nl(),$=k.useRef({top:0,left:0});Za(x,"scroll",v?void 0:()=>{var U,T,B,te;$.current={top:(B=(U=x.current)===null||U===void 0?void 0:U.scrollTop)!==null&&B!==void 0?B:0,left:(te=(T=x.current)===null||T===void 0?void 0:T.scrollLeft)!==null&&te!==void 0?te:0}});let E=k.useRef(!1);Za(o,iD,h?U=>{let{detail:T}=U;U.stopPropagation(),t.setFocused(!0),(T==null?void 0:T.focusStrategy)==="first"&&(E.current=!0)}:void 0);let N=it(()=>{var U,T;let B=(T=(U=n.getFirstKey)===null||U===void 0?void 0:U.call(n))!==null&&T!==void 0?T:null;B==null?(Pb(o.current),t.collection.size>0&&(E.current=!1)):(t.setFocusedKey(B),E.current=!1)});qg(()=>{E.current&&N()},[t.collection,N]);let O=it(()=>{t.collection.size>0&&(E.current=!1)});qg(()=>{O()},[t.focusedKey,O]),Za(o,oD,h?U=>{var T;U.stopPropagation(),t.setFocused(!1),!((T=U.detail)===null||T===void 0)&&T.clearFocusKey&&t.setFocusedKey(null)}:void 0);const M=k.useRef(l),I=k.useRef(!1);k.useEffect(()=>{if(M.current){var U,T;let se=null;var B,te;l==="first"&&(se=(B=(U=n.getFirstKey)===null||U===void 0?void 0:U.call(n))!==null&&B!==void 0?B:null),l==="last"&&(se=(te=(T=n.getLastKey)===null||T===void 0?void 0:T.call(n))!==null&&te!==void 0?te:null);let H=t.selectedKeys;if(H.size){for(let Q of H)if(t.canSelectItem(Q)){se=Q;break}}t.setFocused(!0),t.setFocusedKey(se),se==null&&!h&&o.current&&zt(o.current),t.collection.size>0&&(M.current=!1,I.current=!0)}});let z=k.useRef(t.focusedKey);k.useEffect(()=>{if(t.isFocused&&t.focusedKey!=null&&(t.focusedKey!==z.current||I.current)&&x.current&&o.current){let U=Ss(),T=ds(o,t.focusedKey);if(!(T instanceof HTMLElement))return;(U==="keyboard"||I.current)&&(Eb(x.current,T),U!=="virtual"&&vr(T,{containingElement:o.current}))}!h&&t.isFocused&&t.focusedKey==null&&z.current!=null&&o.current&&zt(o.current),z.current=t.focusedKey,I.current=!1}),Za(o,"react-aria-focus-scope-restore",U=>{U.preventDefault(),t.setFocused(!0)});let P,K={onKeyDown:U=>{var T;if(U.altKey&&U.key==="Tab"&&U.preventDefault(),!(!((T=o.current)===null||T===void 0)&&T.contains(U.target)))return;const B=(ne,xe)=>{if(ne!=null){if(t.isLink(ne)&&b==="selection"&&f&&!Gd(U)){mf.flushSync(()=>{t.setFocusedKey(ne,xe)});let _e=ds(o,ne),Ve=t.getItemProps(ne);return void(_e&&S.open(_e,U,Ve.href,Ve.routerOptions))}if(t.setFocusedKey(ne,xe),t.isLink(ne)&&b==="override")return;U.shiftKey&&t.selectionMode==="multiple"?t.extendSelection(ne):f&&!Gd(U)&&t.replaceSelection(ne)}};switch(U.key){case"ArrowDown":if(n.getKeyBelow){var te,se,H;let ne=t.focusedKey!=null?(te=n.getKeyBelow)===null||te===void 0?void 0:te.call(n,t.focusedKey):(se=n.getFirstKey)===null||se===void 0?void 0:se.call(n);ne==null&&s&&(ne=(H=n.getFirstKey)===null||H===void 0?void 0:H.call(n,t.focusedKey)),ne!=null&&(U.preventDefault(),B(ne))}break;case"ArrowUp":if(n.getKeyAbove){var Q,re,ee;let ne=t.focusedKey!=null?(Q=n.getKeyAbove)===null||Q===void 0?void 0:Q.call(n,t.focusedKey):(re=n.getLastKey)===null||re===void 0?void 0:re.call(n);ne==null&&s&&(ne=(ee=n.getLastKey)===null||ee===void 0?void 0:ee.call(n,t.focusedKey)),ne!=null&&(U.preventDefault(),B(ne))}break;case"ArrowLeft":if(n.getKeyLeftOf){var A,Y,fe;let ne=t.focusedKey!=null?(A=n.getKeyLeftOf)===null||A===void 0?void 0:A.call(n,t.focusedKey):null;ne==null&&s&&(ne=_==="rtl"?(Y=n.getFirstKey)===null||Y===void 0?void 0:Y.call(n,t.focusedKey):(fe=n.getLastKey)===null||fe===void 0?void 0:fe.call(n,t.focusedKey)),ne!=null&&(U.preventDefault(),B(ne,_==="rtl"?"first":"last"))}break;case"ArrowRight":if(n.getKeyRightOf){var de,pe,ye;let ne=t.focusedKey!=null?(de=n.getKeyRightOf)===null||de===void 0?void 0:de.call(n,t.focusedKey):null;ne==null&&s&&(ne=_==="rtl"?(pe=n.getLastKey)===null||pe===void 0?void 0:pe.call(n,t.focusedKey):(ye=n.getFirstKey)===null||ye===void 0?void 0:ye.call(n,t.focusedKey)),ne!=null&&(U.preventDefault(),B(ne,_==="rtl"?"last":"first"))}break;case"Home":if(n.getFirstKey){if(t.focusedKey===null&&U.shiftKey)return;U.preventDefault();let ne=n.getFirstKey(t.focusedKey,Lo(U));t.setFocusedKey(ne),ne!=null&&(Lo(U)&&U.shiftKey&&t.selectionMode==="multiple"?t.extendSelection(ne):f&&t.replaceSelection(ne))}break;case"End":if(n.getLastKey){if(t.focusedKey===null&&U.shiftKey)return;U.preventDefault();let ne=n.getLastKey(t.focusedKey,Lo(U));t.setFocusedKey(ne),ne!=null&&(Lo(U)&&U.shiftKey&&t.selectionMode==="multiple"?t.extendSelection(ne):f&&t.replaceSelection(ne))}break;case"PageDown":if(n.getKeyPageBelow&&t.focusedKey!=null){let ne=n.getKeyPageBelow(t.focusedKey);ne!=null&&(U.preventDefault(),B(ne))}break;case"PageUp":if(n.getKeyPageAbove&&t.focusedKey!=null){let ne=n.getKeyPageAbove(t.focusedKey);ne!=null&&(U.preventDefault(),B(ne))}break;case"a":Lo(U)&&t.selectionMode==="multiple"&&d!==!0&&(U.preventDefault(),t.selectAll());break;case"Escape":u||t.selectedKeys.size===0||(U.stopPropagation(),U.preventDefault(),t.clearSelection());break;case"Tab":if(!y){if(U.shiftKey)o.current.focus();else{let ne,xe,_e=Xt(o.current,{tabbable:!0});do xe=_e.lastChild(),xe&&(ne=xe);while(xe);ne&&!ne.contains(document.activeElement)&&wn(ne)}break}}},onFocus:U=>{if(t.isFocused)U.currentTarget.contains(U.target)||t.setFocused(!1);else if(U.currentTarget.contains(U.target)){if(t.setFocused(!0),t.focusedKey==null){var T,B;let H=re=>{re!=null&&(t.setFocusedKey(re),f&&!t.isSelected(re)&&t.replaceSelection(re))},Q=U.relatedTarget;var te,se;Q&&U.currentTarget.compareDocumentPosition(Q)&Node.DOCUMENT_POSITION_FOLLOWING?H((te=t.lastSelectedKey)!==null&&te!==void 0?te:(T=n.getLastKey)===null||T===void 0?void 0:T.call(n)):H((se=t.firstSelectedKey)!==null&&se!==void 0?se:(B=n.getFirstKey)===null||B===void 0?void 0:B.call(n))}else!v&&x.current&&(x.current.scrollTop=$.current.top,x.current.scrollLeft=$.current.left);if(t.focusedKey!=null&&x.current){let H=ds(o,t.focusedKey);H instanceof HTMLElement&&(H.contains(document.activeElement)||h||wn(H),Ss()==="keyboard"&&vr(H,{containingElement:o.current}))}}},onBlur:U=>{U.currentTarget.contains(U.relatedTarget)||t.setFocused(!1)},onMouseDown(U){x.current===U.target&&U.preventDefault()}},{typeSelectProps:J}=nD({keyboardDelegate:n,selectionManager:t});p||(K=we(J,K)),h||(P=t.focusedKey==null?0:-1);let W=zM(t.collection);return{collectionProps:we(K,{tabIndex:P,"data-collection":W})}}let pd=new Map;function op(e){let{locale:t}=Sr(),n=t+(e?Object.entries(e).sort((l,s)=>l[0]<s[0]?-1:1).join():"");if(pd.has(n))return pd.get(n);let o=new Intl.Collator(t,e);return pd.set(n,o),o}function uD(e){let{selectionManager:t,collection:n,disabledKeys:o,ref:l,keyboardDelegate:s,layoutDelegate:u}=e,d=op({usage:"search",sensitivity:"base"}),f=t.disabledBehavior,p=k.useMemo(()=>s||new jM({collection:n,disabledKeys:o,disabledBehavior:f,ref:l,collator:d,layoutDelegate:u}),[s,u,n,o,l,d,f]),{collectionProps:h}=Tb({...e,ref:l,selectionManager:t,keyboardDelegate:p});return{listProps:h}}function gr(e,t){let n=e;for(Sl(n,t)&&(n=n.parentElement);n&&!Sl(n,t);)n=n.parentElement;return n||document.scrollingElement||document.documentElement}function ot(e,t){return typeof t.getChildren=="function"?t.getChildren(e.key):e.childNodes}function Ln(e){return tl(e,0)}function tl(e,t){if(t<0)return;let n=0;for(let o of e){if(n===t)return o;n++}}function Vo(e){let t;for(let n of e)t=n;return t}function md(e,t,n){if(t.parentKey===n.parentKey)return t.index-n.index;let o=[...Jg(e,t),t],l=[...Jg(e,n),n],s=o.slice(0,l.length).findIndex((u,d)=>u!==l[d]);return s!==-1?(t=o[s],n=l[s],t.index-n.index):o.findIndex(u=>u===n)>=0?1:(l.findIndex(u=>u===t),-1)}function Jg(e,t){let n=[],o=t;for(;(o==null?void 0:o.parentKey)!=null;)o=e.getItem(o.parentKey),o&&n.unshift(o);return n}const cD=500;function Cb(e){let{isDisabled:t,onLongPressStart:n,onLongPressEnd:o,onLongPress:l,threshold:s=cD,accessibilityDescription:u}=e;const d=k.useRef(void 0);let{addGlobalListener:f,removeGlobalListener:p}=js(),{pressProps:h}=wr({isDisabled:t,onPressStart(v){if(v.continuePropagation(),(v.pointerType==="mouse"||v.pointerType==="touch")&&(n&&n({...v,type:"longpressstart"}),d.current=setTimeout(()=>{v.target.dispatchEvent(new PointerEvent("pointercancel",{bubbles:!0})),Me(v.target).activeElement!==v.target&&wn(v.target),l&&l({...v,type:"longpress"}),d.current=void 0},s),v.pointerType==="touch")){let x=b=>{b.preventDefault()};f(v.target,"contextmenu",x,{once:!0}),f(window,"pointerup",()=>{setTimeout(()=>{p(v.target,"contextmenu",x)},30)},{once:!0})}},onPressEnd(v){d.current&&clearTimeout(d.current),!o||v.pointerType!=="mouse"&&v.pointerType!=="touch"||o({...v,type:"longpressend"})}}),y=Vs(l&&!t?u:void 0);return{longPressProps:we(h,y)}}function ip(e){let{id:t,selectionManager:n,key:o,ref:l,shouldSelectOnPressUp:s,shouldUseVirtualFocus:u,focus:d,isDisabled:f,onAction:p,allowsDifferentPressOrigin:h,linkBehavior:y="action"}=e,v=Nl();t=Mt(t);let x=H=>{if(H.pointerType==="keyboard"&&Gd(H))n.toggleSelection(o);else{if(n.selectionMode==="none")return;if(n.isLink(o)){if(y==="selection"&&l.current){let Q=n.getItemProps(o);return v.open(l.current,H,Q.href,Q.routerOptions),void n.setSelectedKeys(n.selectedKeys)}if(y==="override"||y==="none")return}n.selectionMode==="single"?n.isSelected(o)&&!n.disallowEmptySelection?n.toggleSelection(o):n.replaceSelection(o):H&&H.shiftKey?n.extendSelection(o):n.selectionBehavior==="toggle"||H&&(Lo(H)||H.pointerType==="touch"||H.pointerType==="virtual")?n.toggleSelection(o):n.replaceSelection(o)}};k.useEffect(()=>{o===n.focusedKey&&n.isFocused&&(u?Pb(l.current):d?d():document.activeElement!==l.current&&l.current&&zt(l.current))},[l,o,n.focusedKey,n.childFocusStrategy,n.isFocused,u]),f=f||n.isDisabled(o);let b={};u||f?f&&(b.onMouseDown=H=>{H.preventDefault()}):b={tabIndex:o===n.focusedKey?0:-1,onFocus(H){H.target===l.current&&n.setFocusedKey(o)}};let _=n.isLink(o)&&y==="override",S=n.isLink(o)&&y!=="selection"&&y!=="none",$=!f&&n.canSelectItem(o)&&!_,E=(p||S)&&!f,N=E&&(n.selectionBehavior==="replace"?!$:!$||n.isEmpty),O=E&&$&&n.selectionBehavior==="replace",M=N||O,I=k.useRef(null),z=M&&$,P=k.useRef(!1),K=k.useRef(!1),J=H=>{if(p&&p(),S&&l.current){let Q=n.getItemProps(o);v.open(l.current,H,Q.href,Q.routerOptions)}},W={};s?(W.onPressStart=H=>{I.current=H.pointerType,P.current=z,H.pointerType!=="keyboard"||M&&!ty()||x(H)},h?(W.onPressUp=N?void 0:H=>{H.pointerType==="mouse"&&$&&x(H)},W.onPress=N?J:H=>{H.pointerType!=="keyboard"&&H.pointerType!=="mouse"&&$&&x(H)}):W.onPress=H=>{if(N||O&&H.pointerType!=="mouse"){if(H.pointerType==="keyboard"&&!ey())return;J(H)}else H.pointerType!=="keyboard"&&$&&x(H)}):(W.onPressStart=H=>{I.current=H.pointerType,P.current=z,K.current=N,$&&(H.pointerType==="mouse"&&!N||H.pointerType==="keyboard"&&(!E||ty()))&&x(H)},W.onPress=H=>{(H.pointerType==="touch"||H.pointerType==="pen"||H.pointerType==="virtual"||H.pointerType==="keyboard"&&M&&ey()||H.pointerType==="mouse"&&K.current)&&(M?J(H):$&&x(H))}),b["data-collection"]=IM(n.collection),b["data-key"]=o,W.preventFocusOnPress=u,u&&(W=we(W,{onPressStart(H){H.pointerType!=="touch"&&(n.setFocused(!0),n.setFocusedKey(o))},onPress(H){H.pointerType==="touch"&&(n.setFocused(!0),n.setFocusedKey(o))}}));let{pressProps:U,isPressed:T}=wr(W),B=O?H=>{I.current==="mouse"&&(H.stopPropagation(),H.preventDefault(),J(H))}:void 0,{longPressProps:te}=Cb({isDisabled:!z,onLongPress(H){H.pointerType==="touch"&&(x(H),n.setSelectionBehavior("toggle"))}}),se=n.isLink(o)?H=>{Gr.isOpening||H.preventDefault()}:void 0;return{itemProps:we(b,$||N||u?U:{},z?te:{},{onDoubleClick:B,onDragStartCapture:H=>{I.current==="touch"&&P.current&&H.preventDefault()},onClick:se,id:t},u?{onMouseDown:H=>H.preventDefault()}:void 0),isPressed:T,isSelected:n.isSelected(o),isFocused:n.isFocused&&n.focusedKey===o,isDisabled:f,allowsSelection:$,hasAction:M}}function ey(){let e=window.event;return(e==null?void 0:e.key)==="Enter"}function ty(){let e=window.event;return(e==null?void 0:e.key)===" "||(e==null?void 0:e.code)==="Space"}let Rn=class Mb extends Set{constructor(t,n,o){super(t),t instanceof Mb?(this.anchorKey=n??t.anchorKey,this.currentKey=o??t.currentKey):(this.anchorKey=n??null,this.currentKey=o??null)}};function Db(e){let{selectionMode:t="none",disallowEmptySelection:n=!1,allowDuplicateSelectionEvents:o,selectionBehavior:l="toggle",disabledBehavior:s="all"}=e,u=k.useRef(!1),[,d]=k.useState(!1),f=k.useRef(null),p=k.useRef(null),[,h]=k.useState(null),y=k.useMemo(()=>ny(e.selectedKeys),[e.selectedKeys]),v=k.useMemo(()=>ny(e.defaultSelectedKeys,new Rn),[e.defaultSelectedKeys]),[x,b]=Ll(y,v,e.onSelectionChange),_=k.useMemo(()=>e.disabledKeys?new Set(e.disabledKeys):new Set,[e.disabledKeys]),[S,$]=k.useState(l);l==="replace"&&S==="toggle"&&typeof x=="object"&&x.size===0&&$("replace");let E=k.useRef(l);return k.useEffect(()=>{l!==E.current&&($(l),E.current=l)},[l]),{selectionMode:t,disallowEmptySelection:n,selectionBehavior:S,setSelectionBehavior:$,get isFocused(){return u.current},setFocused(N){u.current=N,d(N)},get focusedKey(){return f.current},get childFocusStrategy(){return p.current},setFocusedKey(N,O="first"){f.current=N,p.current=O,h(N)},selectedKeys:x,setSelectedKeys(N){!o&&function(O,M){if(O.size!==M.size)return!1;for(let I of O)if(!M.has(I))return!1;return!0}(N,x)||b(N)},disabledKeys:_,disabledBehavior:s}}function ny(e,t){return e?e==="all"?"all":new Rn(e):t}let Nb=class Rb{get selectionMode(){return this.state.selectionMode}get disallowEmptySelection(){return this.state.disallowEmptySelection}get selectionBehavior(){return this.state.selectionBehavior}setSelectionBehavior(t){this.state.setSelectionBehavior(t)}get isFocused(){return this.state.isFocused}setFocused(t){this.state.setFocused(t)}get focusedKey(){return this.state.focusedKey}get childFocusStrategy(){return this.state.childFocusStrategy}setFocusedKey(t,n){(t==null||this.collection.getItem(t))&&this.state.setFocusedKey(t,n)}get selectedKeys(){return this.state.selectedKeys==="all"?new Set(this.getSelectAllKeys()):this.state.selectedKeys}get rawSelection(){return this.state.selectedKeys}isSelected(t){if(this.state.selectionMode==="none")return!1;let n=this.getKey(t);return n!=null&&(this.state.selectedKeys==="all"?this.canSelectItem(n):this.state.selectedKeys.has(n))}get isEmpty(){return this.state.selectedKeys!=="all"&&this.state.selectedKeys.size===0}get isSelectAll(){if(this.isEmpty)return!1;if(this.state.selectedKeys==="all")return!0;if(this._isSelectAll!=null)return this._isSelectAll;let t=this.getSelectAllKeys(),n=this.state.selectedKeys;return this._isSelectAll=t.every(o=>n.has(o)),this._isSelectAll}get firstSelectedKey(){let t=null;for(let o of this.state.selectedKeys){let l=this.collection.getItem(o);(!t||l&&md(this.collection,l,t)<0)&&(t=l)}var n;return(n=t==null?void 0:t.key)!==null&&n!==void 0?n:null}get lastSelectedKey(){let t=null;for(let o of this.state.selectedKeys){let l=this.collection.getItem(o);(!t||l&&md(this.collection,l,t)>0)&&(t=l)}var n;return(n=t==null?void 0:t.key)!==null&&n!==void 0?n:null}get disabledKeys(){return this.state.disabledKeys}get disabledBehavior(){return this.state.disabledBehavior}extendSelection(t){if(this.selectionMode==="none")return;if(this.selectionMode==="single")return void this.replaceSelection(t);let n,o=this.getKey(t);if(o!=null){if(this.state.selectedKeys==="all")n=new Rn([o],o,o);else{let u=this.state.selectedKeys;var l;let d=(l=u.anchorKey)!==null&&l!==void 0?l:o;var s;n=new Rn(u,d,o);for(let f of this.getKeyRange(d,(s=u.currentKey)!==null&&s!==void 0?s:o))n.delete(f);for(let f of this.getKeyRange(o,d))this.canSelectItem(f)&&n.add(f)}this.state.setSelectedKeys(n)}}getKeyRange(t,n){let o=this.collection.getItem(t),l=this.collection.getItem(n);return o&&l?md(this.collection,o,l)<=0?this.getKeyRangeInternal(t,n):this.getKeyRangeInternal(n,t):[]}getKeyRangeInternal(t,n){var o;if(!((o=this.layoutDelegate)===null||o===void 0)&&o.getKeyRange)return this.layoutDelegate.getKeyRange(t,n);let l=[],s=t;for(;s!=null;){let u=this.collection.getItem(s);if(u&&(u.type==="item"||u.type==="cell"&&this.allowsCellSelection)&&l.push(s),s===n)return l;s=this.collection.getKeyAfter(s)}return[]}getKey(t){let n=this.collection.getItem(t);if(!n||n.type==="cell"&&this.allowsCellSelection)return t;for(;n&&n.type!=="item"&&n.parentKey!=null;)n=this.collection.getItem(n.parentKey);return n&&n.type==="item"?n.key:null}toggleSelection(t){if(this.selectionMode==="none")return;if(this.selectionMode==="single"&&!this.isSelected(t))return void this.replaceSelection(t);let n=this.getKey(t);if(n==null)return;let o=new Rn(this.state.selectedKeys==="all"?this.getSelectAllKeys():this.state.selectedKeys);o.has(n)?o.delete(n):this.canSelectItem(n)&&(o.add(n),o.anchorKey=n,o.currentKey=n),this.disallowEmptySelection&&o.size===0||this.state.setSelectedKeys(o)}replaceSelection(t){if(this.selectionMode==="none")return;let n=this.getKey(t);if(n==null)return;let o=this.canSelectItem(n)?new Rn([n],n,n):new Rn;this.state.setSelectedKeys(o)}setSelectedKeys(t){if(this.selectionMode==="none")return;let n=new Rn;for(let o of t){let l=this.getKey(o);if(l!=null&&(n.add(l),this.selectionMode==="single"))break}this.state.setSelectedKeys(n)}getSelectAllKeys(){let t=[],n=o=>{for(;o!=null;){if(this.canSelectItem(o)){var l;let u=this.collection.getItem(o);var s;(u==null?void 0:u.type)==="item"&&t.push(o),u!=null&&u.hasChildNodes&&(this.allowsCellSelection||u.type!=="item")&&n((s=(l=Ln(ot(u,this.collection)))===null||l===void 0?void 0:l.key)!==null&&s!==void 0?s:null)}o=this.collection.getKeyAfter(o)}};return n(this.collection.getFirstKey()),t}selectAll(){this.isSelectAll||this.selectionMode!=="multiple"||this.state.setSelectedKeys("all")}clearSelection(){!this.disallowEmptySelection&&(this.state.selectedKeys==="all"||this.state.selectedKeys.size>0)&&this.state.setSelectedKeys(new Rn)}toggleSelectAll(){this.isSelectAll?this.clearSelection():this.selectAll()}select(t,n){this.selectionMode!=="none"&&(this.selectionMode==="single"?this.isSelected(t)&&!this.disallowEmptySelection?this.toggleSelection(t):this.replaceSelection(t):this.selectionBehavior==="toggle"||n&&(n.pointerType==="touch"||n.pointerType==="virtual")?this.toggleSelection(t):this.replaceSelection(t))}isSelectionEqual(t){if(t===this.state.selectedKeys)return!0;let n=this.selectedKeys;if(t.size!==n.size)return!1;for(let o of t)if(!n.has(o))return!1;for(let o of n)if(!t.has(o))return!1;return!0}canSelectItem(t){var n;if(this.state.selectionMode==="none"||this.state.disabledKeys.has(t))return!1;let o=this.collection.getItem(t);return!(!o||!(o==null||(n=o.props)===null||n===void 0)&&n.isDisabled||o.type==="cell"&&!this.allowsCellSelection)}isDisabled(t){var n,o;return this.state.disabledBehavior==="all"&&(this.state.disabledKeys.has(t)||!!(!((o=this.collection.getItem(t))===null||o===void 0||(n=o.props)===null||n===void 0)&&n.isDisabled))}isLink(t){var n,o;return!!(!((o=this.collection.getItem(t))===null||o===void 0||(n=o.props)===null||n===void 0)&&n.href)}getItemProps(t){var n;return(n=this.collection.getItem(t))===null||n===void 0?void 0:n.props}withCollection(t){return new Rb(t,this.state,{allowsCellSelection:this.allowsCellSelection,layoutDelegate:this.layoutDelegate||void 0})}constructor(t,n,o){var l;this.collection=t,this.state=n,this.allowsCellSelection=(l=o==null?void 0:o.allowsCellSelection)!==null&&l!==void 0&&l,this._isSelectAll=null,this.layoutDelegate=(o==null?void 0:o.layoutDelegate)||null}},dD=class{build(t,n){return this.context=n,ry(()=>this.iterateCollection(t))}*iterateCollection(t){let{children:n,items:o}=t;if(ie.isValidElement(n)&&n.type===ie.Fragment)yield*this.iterateCollection({children:n.props.children,items:o});else if(typeof n=="function"){if(!o)throw new Error("props.children was a function but props.items is missing");let l=0;for(let s of o)yield*this.getFullNode({value:s,index:l},{renderer:n}),l++}else{let l=[];ie.Children.forEach(n,u=>{u&&l.push(u)});let s=0;for(let u of l){let d=this.getFullNode({element:u,index:s},{});for(let f of d)s++,yield f}}}getKey(t,n,o,l){if(t.key!=null)return t.key;if(n.type==="cell"&&n.key!=null)return`${l}${n.key}`;let s=n.value;if(s!=null){var u;let d=(u=s.key)!==null&&u!==void 0?u:s.id;if(d==null)throw new Error("No key found for item");return d}return l?`${l}.${n.index}`:`$.${n.index}`}getChildState(t,n){return{renderer:n.renderer||t.renderer}}*getFullNode(t,n,o,l){if(ie.isValidElement(t.element)&&t.element.type===ie.Fragment){let S=[];var s;ie.Children.forEach(t.element.props.children,E=>{S.push(E)});let $=(s=t.index)!==null&&s!==void 0?s:0;for(const E of S)yield*this.getFullNode({element:E,index:$++},n,o,l);return}let u=t.element;if(!u&&t.value&&n&&n.renderer){let S=this.cache.get(t.value);if(S&&(!S.shouldInvalidate||!S.shouldInvalidate(this.context)))return S.index=t.index,S.parentKey=l?l.key:null,void(yield S);u=n.renderer(t.value)}if(ie.isValidElement(u)){let S=u.type;if(typeof S!="function"&&typeof S.getCollectionNode!="function"){let O=u.type;throw new Error(`Unknown element <${O}> in collection.`)}let $=S.getCollectionNode(u.props,this.context);var d;let E=(d=t.index)!==null&&d!==void 0?d:0,N=$.next();for(;!N.done&&N.value;){let O=N.value;var f;t.index=E;let M=(f=O.key)!==null&&f!==void 0?f:null;M==null&&(M=O.element?null:this.getKey(u,t,n,o));let I=[...this.getFullNode({...O,key:M,index:E,wrapper:fD(t.wrapper,O.wrapper)},this.getChildState(n,O),o?`${o}${u.key}`:u.key,l)];for(let z of I){var p,h,y;if(z.value=(h=(p=O.value)!==null&&p!==void 0?p:t.value)!==null&&h!==void 0?h:null,z.value&&this.cache.set(z.value,z),t.type&&z.type!==t.type)throw new Error(`Unsupported type <${hd(z.type)}> in <${hd((y=l==null?void 0:l.type)!==null&&y!==void 0?y:"unknown parent type")}>. Only <${hd(t.type)}> is supported.`);E++,yield z}N=$.next(I)}return}if(t.key==null||t.type==null)return;let v=this;var x,b;let _={type:t.type,props:t.props,key:t.key,parentKey:l?l.key:null,value:(x=t.value)!==null&&x!==void 0?x:null,level:l?l.level+1:0,index:t.index,rendered:t.rendered,textValue:(b=t.textValue)!==null&&b!==void 0?b:"","aria-label":t["aria-label"],wrapper:t.wrapper,shouldInvalidate:t.shouldInvalidate,hasChildNodes:t.hasChildNodes||!1,childNodes:ry(function*(){if(!t.hasChildNodes||!t.childNodes)return;let S=0;for(let $ of t.childNodes()){$.key!=null&&($.key=`${_.key}${$.key}`);let E=v.getFullNode({...$,index:S},v.getChildState(n,$),_.key,_);for(let N of E)S++,yield N}})};yield _}constructor(){this.cache=new WeakMap}};function ry(e){let t=[],n=null;return{*[Symbol.iterator](){for(let o of t)yield o;n||(n=e());for(let o of n)t.push(o),yield o}}}function fD(e,t){return e&&t?n=>e(t(n)):e||t||void 0}function hd(e){return e[0].toUpperCase()+e.slice(1)}function Lb(e,t,n){let o=k.useMemo(()=>new dD,[]),{children:l,items:s,collection:u}=e;return k.useMemo(()=>{if(u)return u;let d=o.build({children:l,items:s},n);return t(d)},[o,l,s,u,n,t])}let Bi=new WeakMap,Tt=[];function pD(e,t=document.body){let n=new Set(e),o=new Set,l=f=>{for(let v of f.querySelectorAll("[data-live-announcer], [data-react-aria-top-layer]"))n.add(v);let p=v=>{if(n.has(v)||v.parentElement&&o.has(v.parentElement)&&v.parentElement.getAttribute("role")!=="row")return NodeFilter.FILTER_REJECT;for(let x of n)if(v.contains(x))return NodeFilter.FILTER_SKIP;return NodeFilter.FILTER_ACCEPT},h=document.createTreeWalker(f,NodeFilter.SHOW_ELEMENT,{acceptNode:p}),y=p(f);if(y===NodeFilter.FILTER_ACCEPT&&s(f),y!==NodeFilter.FILTER_REJECT){let v=h.nextNode();for(;v!=null;)s(v),v=h.nextNode()}},s=f=>{var p;let h=(p=Bi.get(f))!==null&&p!==void 0?p:0;f.getAttribute("aria-hidden")==="true"&&h===0||(h===0&&f.setAttribute("aria-hidden","true"),o.add(f),Bi.set(f,h+1))};Tt.length&&Tt[Tt.length-1].disconnect(),l(t);let u=new MutationObserver(f=>{for(let p of f)if(p.type==="childList"&&p.addedNodes.length!==0&&![...n,...o].some(h=>h.contains(p.target))){for(let h of p.removedNodes)h instanceof Element&&(n.delete(h),o.delete(h));for(let h of p.addedNodes)!(h instanceof HTMLElement||h instanceof SVGElement)||h.dataset.liveAnnouncer!=="true"&&h.dataset.reactAriaTopLayer!=="true"?h instanceof Element&&l(h):n.add(h)}});u.observe(t,{childList:!0,subtree:!0});let d={visibleNodes:n,hiddenNodes:o,observe(){u.observe(t,{childList:!0,subtree:!0})},disconnect(){u.disconnect()}};return Tt.push(d),()=>{u.disconnect();for(let f of o){let p=Bi.get(f);p!=null&&(p===1?(f.removeAttribute("aria-hidden"),Bi.delete(f)):Bi.set(f,p-1))}d===Tt[Tt.length-1]?(Tt.pop(),Tt.length&&Tt[Tt.length-1].observe()):Tt.splice(Tt.indexOf(d),1)}}function mD(e){let t=Tt[Tt.length-1];if(t&&!t.visibleNodes.has(e))return t.visibleNodes.add(e),()=>{t.visibleNodes.delete(e)}}function hD(e){let{ref:t,onInteractOutside:n,isDisabled:o,onInteractOutsideStart:l}=e,s=k.useRef({isPointerDown:!1,ignoreEmulatedMouseEvents:!1}),u=it(f=>{n&&Ja(f,t)&&(l&&l(f),s.current.isPointerDown=!0)}),d=it(f=>{n&&n(f)});k.useEffect(()=>{let f=s.current;if(o)return;const p=t.current,h=Me(p);if(typeof PointerEvent<"u"){let y=v=>{f.isPointerDown&&Ja(v,t)&&d(v),f.isPointerDown=!1};return h.addEventListener("pointerdown",u,!0),h.addEventListener("pointerup",y,!0),()=>{h.removeEventListener("pointerdown",u,!0),h.removeEventListener("pointerup",y,!0)}}{let y=x=>{f.ignoreEmulatedMouseEvents?f.ignoreEmulatedMouseEvents=!1:f.isPointerDown&&Ja(x,t)&&d(x),f.isPointerDown=!1},v=x=>{f.ignoreEmulatedMouseEvents=!0,f.isPointerDown&&Ja(x,t)&&d(x),f.isPointerDown=!1};return h.addEventListener("mousedown",u,!0),h.addEventListener("mouseup",y,!0),h.addEventListener("touchstart",u,!0),h.addEventListener("touchend",v,!0),()=>{h.removeEventListener("mousedown",u,!0),h.removeEventListener("mouseup",y,!0),h.removeEventListener("touchstart",u,!0),h.removeEventListener("touchend",v,!0)}}},[t,o,u,d])}function Ja(e,t){if(e.button>0)return!1;if(e.target){const n=e.target.ownerDocument;if(!n||!n.documentElement.contains(e.target)||e.target.closest("[data-react-aria-top-layer]"))return!1}return!!t.current&&!e.composedPath().includes(t.current)}const pn=[];function vD(e,t){let{onClose:n,isOpen:o,isDismissable:l=!1,isKeyboardDismissDisabled:s=!1,shouldCloseOnInteractOutside:u}=e;k.useEffect(()=>{if(o&&!pn.includes(t))return pn.push(t),()=>{let p=pn.indexOf(t);p>=0&&pn.splice(p,1)}},[o,t]);let d=()=>{pn[pn.length-1]===t&&n&&n()};hD({ref:t,onInteractOutside:l&&o?p=>{u&&!u(p.target)||(pn[pn.length-1]===t&&(p.stopPropagation(),p.preventDefault()),d())}:void 0,onInteractOutsideStart:p=>{u&&!u(p.target)||pn[pn.length-1]===t&&(p.stopPropagation(),p.preventDefault())}});let{focusWithinProps:f}=Jf({isDisabled:!1,onBlurWithin:p=>{p.relatedTarget&&!eD(p.relatedTarget)&&(u&&!u(p.relatedTarget)||n==null||n())}});return{overlayProps:{onKeyDown:p=>{p.key!=="Escape"||s||p.nativeEvent.isComposing||(p.stopPropagation(),p.preventDefault(),d())},...f},underlayProps:{onPointerDown:p=>{p.target===p.currentTarget&&p.preventDefault()}}}}const gD=k.createContext({});function yD(){var e;return(e=k.useContext(gD))!==null&&e!==void 0?e:{}}ie.forwardRef(({children:e,...t},n)=>{let o=k.useRef(!1),l=k.useContext(bl);n=pf(n||(l==null?void 0:l.ref));let s=we(l||{},{...t,ref:n,register(){o.current=!0,l&&l.register()}});return Xf(l,n),k.useEffect(()=>{o.current||(console.warn("A PressResponder was rendered without a pressable child. Either call the usePress hook, or wrap your DOM node with <Pressable> component."),o.current=!0)},[]),ie.createElement(bl.Provider,{value:s},e)});function xD({children:e}){let t=k.useMemo(()=>({register:()=>{}}),[]);return ie.createElement(bl.Provider,{value:t},e)}const bD=ie.createContext(null);function wD(e){let t=Ds(),{portalContainer:n=t?null:document.body,isExiting:o}=e,[l,s]=k.useState(!1),u=k.useMemo(()=>({contain:l,setContain:s}),[l,s]),{getContainer:d}=yD();if(!e.portalContainer&&d&&(n=d()),!n)return null;let f=e.children;return e.disableFocusManagement||(f=ie.createElement(JM,{restoreFocus:!0,contain:(e.shouldContainFocus||l)&&!o},f)),f=ie.createElement(bD.Provider,{value:u},ie.createElement(xD,null,f)),G$.createPortal(f,n)}const vd=typeof document<"u"&&window.visualViewport,_D=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);let oy,es=0;function SD(e={}){let{isDisabled:t}=e;Re(()=>{if(!t)return es++,es===1&&(oy=Is()?function(){let n,o,l=h=>{n&&n!==document.documentElement&&n!==document.body?n.scrollHeight===n.clientHeight&&n.scrollWidth===n.clientWidth&&h.preventDefault():h.preventDefault()},s=()=>{o&&o()},u=h=>{let y=h.target;(function(v){return v instanceof HTMLInputElement&&!_D.has(v.type)||v instanceof HTMLTextAreaElement||v instanceof HTMLElement&&v.isContentEditable})(y)&&(f(),y.style.transform="translateY(-2000px)",requestAnimationFrame(()=>{y.style.transform="",vd&&(vd.height<window.innerHeight?requestAnimationFrame(()=>{iy(y)}):vd.addEventListener("resize",()=>iy(y),{once:!0}))}))},d=null,f=()=>{if(d)return;let h=()=>{window.scrollTo(0,0)},y=window.pageXOffset,v=window.pageYOffset;d=Bo(Ui(window,"scroll",h),Mo(document.documentElement,"paddingRight",window.innerWidth-document.documentElement.clientWidth+"px"),Mo(document.documentElement,"overflow","hidden"),Mo(document.body,"marginTop",`-${v}px`),()=>{window.scrollTo(y,v)}),window.scrollTo(0,0)},p=Bo(Ui(document,"touchstart",h=>{n=gr(h.target,!0),n===document.documentElement&&n===document.body||n instanceof HTMLElement&&window.getComputedStyle(n).overscrollBehavior==="auto"&&(o=Mo(n,"overscrollBehavior","contain"))},{passive:!1,capture:!0}),Ui(document,"touchmove",l,{passive:!1,capture:!0}),Ui(document,"touchend",s,{passive:!1,capture:!0}),Ui(document,"focus",u,!0));return()=>{o==null||o(),d==null||d(),p()}}():Bo(Mo(document.documentElement,"paddingRight",window.innerWidth-document.documentElement.clientWidth+"px"),Mo(document.documentElement,"overflow","hidden"))),()=>{es--,es===0&&oy()}},[t])}function Mo(e,t,n){let o=e.style[t];return e.style[t]=n,()=>{e.style[t]=o}}function Ui(e,t,n,o){return e.addEventListener(t,n,o),()=>{e.removeEventListener(t,n,o)}}function iy(e){let t=document.scrollingElement||document.documentElement,n=e;for(;n&&n!==t;){let o=gr(n);if(o!==document.documentElement&&o!==document.body&&o!==n){let l=o.getBoundingClientRect().top,s=n.getBoundingClientRect().top;s>l+n.clientHeight&&(o.scrollTop+=s-l)}n=o.parentElement}}function kD(e){let[t,n]=Ll(e.isOpen,e.defaultOpen||!1,e.onOpenChange);const o=k.useCallback(()=>{n(!0)},[n]),l=k.useCallback(()=>{n(!1)},[n]),s=k.useCallback(()=>{n(!t)},[n,t]);return{isOpen:t,setOpen:n,open:o,close:l,toggle:s}}const Ab=new WeakMap;function $D(e){let{triggerRef:t,isOpen:n,onClose:o}=e;k.useEffect(()=>{if(!n||o===null)return;let l=s=>{let u=s.target;if(!t.current||u instanceof Node&&!u.contains(t.current)||s.target instanceof HTMLInputElement||s.target instanceof HTMLTextAreaElement)return;let d=o||Ab.get(t.current);d&&d()};return window.addEventListener("scroll",l,!0),()=>{window.removeEventListener("scroll",l,!0)}},[n,o,t])}function ED(e,t,n){let o,{type:l}=e,{isOpen:s}=t;k.useEffect(()=>{n&&n.current&&Ab.set(n.current,t.close)}),l==="menu"?o=!0:l==="listbox"&&(o="listbox");let u=Mt();return{triggerProps:{"aria-haspopup":o,"aria-expanded":s,"aria-controls":s?u:void 0,onPress:t.toggle},overlayProps:{id:u}}}function ef(e,t=-1/0,n=1/0){return Math.min(Math.max(e,t),n)}const hn={top:"top",bottom:"top",left:"left",right:"left"},Es={top:"bottom",bottom:"top",left:"right",right:"left"},PD={top:"left",left:"top"},tf={top:"height",left:"width"},zb={width:"totalWidth",height:"totalHeight"},ts={};let At=typeof document<"u"?window.visualViewport:null;function ly(e){let t=0,n=0,o=0,l=0,s=0,u=0,d={};var f;let p=((f=At==null?void 0:At.scale)!==null&&f!==void 0?f:1)>1;if(e.tagName==="BODY"){let b=document.documentElement;var h,y;o=b.clientWidth,l=b.clientHeight,t=(h=At==null?void 0:At.width)!==null&&h!==void 0?h:o,n=(y=At==null?void 0:At.height)!==null&&y!==void 0?y:l,d.top=b.scrollTop||e.scrollTop,d.left=b.scrollLeft||e.scrollLeft,At&&(s=At.offsetTop,u=At.offsetLeft)}else({width:t,height:n,top:s,left:u}=Ho(e)),d.top=e.scrollTop,d.left=e.scrollLeft,o=t,l=n;var v,x;return yx()&&(e.tagName==="BODY"||e.tagName==="HTML")&&p&&(d.top=0,d.left=0,s=(v=At==null?void 0:At.pageTop)!==null&&v!==void 0?v:0,u=(x=At==null?void 0:At.pageLeft)!==null&&x!==void 0?x:0),{width:t,height:n,totalWidth:o,totalHeight:l,scroll:d,top:s,left:u}}function ay(e,t,n,o,l,s,u){var d;let f=(d=l.scroll[e])!==null&&d!==void 0?d:0,p=o[tf[e]],h=o.scroll[hn[e]]+s,y=p+o.scroll[hn[e]]-s,v=t-f+u[e]-o[hn[e]],x=t-f+n+u[e]-o[hn[e]];return v<h?h-v:x>y?Math.max(y-x,h-v):0}function sy(e){if(ts[e])return ts[e];let[t,n]=e.split(" "),o=hn[t]||"right",l=PD[o];hn[n]||(n="center");let s=tf[o],u=tf[l];return ts[e]={placement:t,crossPlacement:n,axis:o,crossAxis:l,size:s,crossSize:u},ts[e]}function gd(e,t,n,o,l,s,u,d,f,p){let{placement:h,crossPlacement:y,axis:v,crossAxis:x,size:b,crossSize:_}=o,S={};var $,E,N,O,M;S[x]=($=e[x])!==null&&$!==void 0?$:0,y==="center"?S[x]+=(((E=e[_])!==null&&E!==void 0?E:0)-((N=n[_])!==null&&N!==void 0?N:0))/2:y!==x&&(S[x]+=((O=e[_])!==null&&O!==void 0?O:0)-((M=n[_])!==null&&M!==void 0?M:0)),S[x]+=s;const I=e[x]-n[_]+f+p,z=e[x]+e[_]-f-p;if(S[x]=ef(S[x],I,z),h===v){const P=d?u[b]:t[zb[b]];S[Es[v]]=Math.floor(P-e[v]+l)}else S[v]=Math.floor(e[v]+e[b]+l);return S}function uy(e,t,n,o,l,s){let{placement:u,axis:d,size:f}=s;var p,h,y;return u===d?Math.max(0,n[d]-e[d]-((p=e.scroll[d])!==null&&p!==void 0?p:0)+t[d]-((h=o[d])!==null&&h!==void 0?h:0)-o[Es[d]]-l):Math.max(0,e[f]+e[d]+e.scroll[d]-t[d]-n[d]-n[f]-((y=o[d])!==null&&y!==void 0?y:0)-o[Es[d]]-l)}function TD(e,t,n,o,l,s,u,d,f,p,h,y,v,x,b,_){let S=sy(e),{size:$,crossAxis:E,crossSize:N,placement:O,crossPlacement:M}=S,I=gd(t,d,n,S,h,y,p,v,b,_),z=h,P=uy(d,p,t,l,s+h,S);if(u&&o[$]>P){let de=sy(`${Es[O]} ${M}`),pe=gd(t,d,n,de,h,y,p,v,b,_);uy(d,p,t,l,s+h,de)>P&&(S=de,I=pe,z=h)}let K="bottom";S.axis==="top"?S.placement==="top"?K="top":S.placement==="bottom"&&(K="bottom"):S.crossAxis==="top"&&(S.crossPlacement==="top"?K="bottom":S.crossPlacement==="bottom"&&(K="top"));let J=ay(E,I[E],n[N],d,f,s,p);I[E]+=J;let W=function(de,pe,ye,ne,xe,_e,Ve,Un){const Ee=ne?ye.height:pe[zb.height];var Ft;let eo=de.top!=null?ye.top+de.top:ye.top+(Ee-((Ft=de.bottom)!==null&&Ft!==void 0?Ft:0)-Ve);var to,no,$r,ro,Er,Sn;let Hn=Un!=="top"?Math.max(0,pe.height+pe.top+((to=pe.scroll.top)!==null&&to!==void 0?to:0)-eo-(((no=xe.top)!==null&&no!==void 0?no:0)+(($r=xe.bottom)!==null&&$r!==void 0?$r:0)+_e)):Math.max(0,eo+Ve-(pe.top+((ro=pe.scroll.top)!==null&&ro!==void 0?ro:0))-(((Er=xe.top)!==null&&Er!==void 0?Er:0)+((Sn=xe.bottom)!==null&&Sn!==void 0?Sn:0)+_e));return Math.min(pe.height-2*_e,Hn)}(I,d,p,v,l,s,n.height,K);x&&x<W&&(W=x),n.height=Math.min(n.height,W),I=gd(t,d,n,S,z,y,p,v,b,_),J=ay(E,I[E],n[N],d,f,s,p),I[E]+=J;let U={},T=t[E]+.5*t[N]-I[E]-l[hn[E]];const B=b/2+_;var te,se,H,Q;const re=hn[E]==="left"?((te=l.left)!==null&&te!==void 0?te:0)+((se=l.right)!==null&&se!==void 0?se:0):((H=l.top)!==null&&H!==void 0?H:0)+((Q=l.bottom)!==null&&Q!==void 0?Q:0),ee=n[N]-re-b/2-_,A=t[E]+b/2-(I[E]+l[hn[E]]),Y=t[E]+t[N]-b/2-(I[E]+l[hn[E]]),fe=ef(T,A,Y);return U[E]=ef(fe,B,ee),{position:I,maxHeight:W,arrowOffsetLeft:U.left,arrowOffsetTop:U.top,placement:S.placement}}function CD(e){let{placement:t,targetNode:n,overlayNode:o,scrollNode:l,padding:s,shouldFlip:u,boundaryElement:d,offset:f,crossOffset:p,maxHeight:h,arrowSize:y=0,arrowBoundaryOffset:v=0}=e,x=o instanceof HTMLElement?function(T){let B=T.offsetParent;if(B&&B===document.body&&window.getComputedStyle(B).position==="static"&&!dy(B)&&(B=document.documentElement),B==null)for(B=T.parentElement;B&&!dy(B);)B=B.parentElement;return B||document.documentElement}(o):document.documentElement,b=x===document.documentElement;const _=window.getComputedStyle(x).position;let S=!!_&&_!=="static",$=b?Ho(n):cy(n,x);if(!b){let{marginTop:T,marginLeft:B}=window.getComputedStyle(n);$.top+=parseInt(T,10)||0,$.left+=parseInt(B,10)||0}let E=Ho(o),N=function(T){let B=window.getComputedStyle(T);return{top:parseInt(B.marginTop,10)||0,bottom:parseInt(B.marginBottom,10)||0,left:parseInt(B.marginLeft,10)||0,right:parseInt(B.marginRight,10)||0}}(o);var O,M,I,z;E.width+=((O=N.left)!==null&&O!==void 0?O:0)+((M=N.right)!==null&&M!==void 0?M:0),E.height+=((I=N.top)!==null&&I!==void 0?I:0)+((z=N.bottom)!==null&&z!==void 0?z:0);let P={top:(K=l).scrollTop,left:K.scrollLeft,width:K.scrollWidth,height:K.scrollHeight};var K;let J=ly(d),W=ly(x),U=d.tagName==="BODY"?Ho(x):cy(x,d);return x.tagName==="HTML"&&d.tagName==="BODY"&&(W.scroll.top=0,W.scroll.left=0),TD(t,$,E,P,N,s,u,J,W,U,f,p,S,h,y,v)}function Ho(e){let{top:t,left:n,width:o,height:l}=e.getBoundingClientRect(),{scrollTop:s,scrollLeft:u,clientTop:d,clientLeft:f}=document.documentElement;return{top:t+s-d,left:n+u-f,width:o,height:l}}function cy(e,t){let n,o=window.getComputedStyle(e);if(o.position==="fixed"){let{top:l,left:s,width:u,height:d}=e.getBoundingClientRect();n={top:l,left:s,width:u,height:d}}else{n=Ho(e);let l=Ho(t),s=window.getComputedStyle(t);l.top+=(parseInt(s.borderTopWidth,10)||0)-t.scrollTop,l.left+=(parseInt(s.borderLeftWidth,10)||0)-t.scrollLeft,n.top-=l.top,n.left-=l.left}return n.top-=parseInt(o.marginTop,10)||0,n.left-=parseInt(o.marginLeft,10)||0,n}function dy(e){let t=window.getComputedStyle(e);return t.transform!=="none"||/transform|perspective/.test(t.willChange)||t.filter!=="none"||t.contain==="paint"||"backdropFilter"in t&&t.backdropFilter!=="none"||"WebkitBackdropFilter"in t&&t.WebkitBackdropFilter!=="none"}function fy(e){const{ref:t,box:n,onResize:o}=e;k.useEffect(()=>{let l=t==null?void 0:t.current;if(l){if(window.ResizeObserver===void 0)return window.addEventListener("resize",o,!1),()=>{window.removeEventListener("resize",o,!1)};{const s=new window.ResizeObserver(u=>{u.length&&o()});return s.observe(l,{box:n}),()=>{l&&s.unobserve(l)}}}},[o,t,n])}let Pt=typeof document<"u"?window.visualViewport:null;function MD(e){let{direction:t}=Sr(),{arrowSize:n=0,targetRef:o,overlayRef:l,scrollRef:s=l,placement:u="bottom",containerPadding:d=12,shouldFlip:f=!0,boundaryElement:p=typeof document<"u"?document.body:null,offset:h=0,crossOffset:y=0,shouldUpdatePosition:v=!0,isOpen:x=!0,onClose:b,maxHeight:_,arrowBoundaryOffset:S=0}=e,[$,E]=k.useState(null),N=[v,u,l.current,o.current,s.current,d,f,p,h,y,x,t,_,S,n],O=k.useRef(Pt==null?void 0:Pt.scale);k.useEffect(()=>{x&&(O.current=Pt==null?void 0:Pt.scale)},[x]);let M=k.useCallback(()=>{if(!(v!==!1&&x&&l.current&&o.current&&p)||(Pt==null?void 0:Pt.scale)!==O.current)return;let W=null;if(s.current&&s.current.contains(document.activeElement)){var U;let re=(U=document.activeElement)===null||U===void 0?void 0:U.getBoundingClientRect(),ee=s.current.getBoundingClientRect();var T,B;W={type:"top",offset:((T=re==null?void 0:re.top)!==null&&T!==void 0?T:0)-ee.top},W.offset>ee.height/2&&(W.type="bottom",W.offset=((B=re==null?void 0:re.bottom)!==null&&B!==void 0?B:0)-ee.bottom)}let te=l.current;var se,H;!_&&l.current&&(te.style.top="0px",te.style.bottom="",te.style.maxHeight=((H=(se=window.visualViewport)===null||se===void 0?void 0:se.height)!==null&&H!==void 0?H:window.innerHeight)+"px");let Q=CD({placement:DD(u,t),overlayNode:l.current,targetNode:o.current,scrollNode:s.current||l.current,padding:d,shouldFlip:f,boundaryElement:p,offset:h,crossOffset:y,maxHeight:_,arrowSize:n,arrowBoundaryOffset:S});if(Q.position){if(te.style.top="",te.style.bottom="",te.style.left="",te.style.right="",Object.keys(Q.position).forEach(re=>te.style[re]=Q.position[re]+"px"),te.style.maxHeight=Q.maxHeight!=null?Q.maxHeight+"px":"",W&&document.activeElement&&s.current){let re=document.activeElement.getBoundingClientRect(),ee=s.current.getBoundingClientRect(),A=re[W.type]-ee[W.type];s.current.scrollTop+=A-W.offset}E(Q)}},N);var I;Re(M,N),Re(()=>(window.addEventListener("resize",I,!1),()=>{window.removeEventListener("resize",I,!1)}),[I=M]),fy({ref:l,onResize:M}),fy({ref:o,onResize:M});let z=k.useRef(!1);Re(()=>{let W,U=()=>{z.current=!0,clearTimeout(W),W=setTimeout(()=>{z.current=!1},500),M()},T=()=>{z.current&&U()};return Pt==null||Pt.addEventListener("resize",U),Pt==null||Pt.addEventListener("scroll",T),()=>{Pt==null||Pt.removeEventListener("resize",U),Pt==null||Pt.removeEventListener("scroll",T)}},[M]);let P=k.useCallback(()=>{z.current||b==null||b()},[b,z]);var K,J;return $D({triggerRef:o,isOpen:x,onClose:b&&P}),{overlayProps:{style:{position:"absolute",zIndex:1e5,...$==null?void 0:$.position,maxHeight:(K=$==null?void 0:$.maxHeight)!==null&&K!==void 0?K:"100vh"}},placement:(J=$==null?void 0:$.placement)!==null&&J!==void 0?J:null,arrowProps:{"aria-hidden":"true",role:"presentation",style:{left:$==null?void 0:$.arrowOffsetLeft,top:$==null?void 0:$.arrowOffsetTop}},updatePosition:M}}function DD(e,t){return t==="rtl"?e.replace("start","right").replace("end","left"):e.replace("start","left").replace("end","right")}function ND(e,t){let{triggerRef:n,popoverRef:o,groupRef:l,isNonModal:s,isKeyboardDismissDisabled:u,shouldCloseOnInteractOutside:d,...f}=e,p=f.trigger==="SubmenuTrigger",{overlayProps:h,underlayProps:y}=vD({isOpen:t.isOpen,onClose:t.close,isDismissable:!s||p,isKeyboardDismissDisabled:u,shouldCloseOnInteractOutside:d},l??o),{overlayProps:v,arrowProps:x,placement:b}=MD({...f,targetRef:n,overlayRef:o,isOpen:t.isOpen,onClose:s&&!p?t.close:null});return SD({isDisabled:s||!t.isOpen}),Re(()=>{var _,S;if(t.isOpen&&o.current)return s?mD((_=l==null?void 0:l.current)!==null&&_!==void 0?_:o.current):pD([(S=l==null?void 0:l.current)!==null&&S!==void 0?S:o.current])},[s,t.isOpen,o,l]),{popoverProps:we(h,v),arrowProps:x,underlayProps:y,placement:b}}var Ib;Ib={dismiss:"تجاهل"};var jb;jb={dismiss:"Отхвърляне"};var Fb;Fb={dismiss:"Odstranit"};var Ob;Ob={dismiss:"Luk"};var Kb;Kb={dismiss:"Schließen"};var Vb;Vb={dismiss:"Απόρριψη"};var Bb;Bb={dismiss:"Dismiss"};var Ub;Ub={dismiss:"Descartar"};var Hb;Hb={dismiss:"Lõpeta"};var Wb;Wb={dismiss:"Hylkää"};var Yb;Yb={dismiss:"Rejeter"};var Qb;Qb={dismiss:"התעלם"};var Gb;Gb={dismiss:"Odbaci"};var Xb;Xb={dismiss:"Elutasítás"};var qb;qb={dismiss:"Ignora"};var Zb;Zb={dismiss:"閉じる"};var Jb;Jb={dismiss:"무시"};var ew;ew={dismiss:"Atmesti"};var tw;tw={dismiss:"Nerādīt"};var nw;nw={dismiss:"Lukk"};var rw;rw={dismiss:"Negeren"};var ow;ow={dismiss:"Zignoruj"};var iw;iw={dismiss:"Descartar"};var lw;lw={dismiss:"Dispensar"};var aw;aw={dismiss:"Revocare"};var sw;sw={dismiss:"Пропустить"};var uw;uw={dismiss:"Zrušiť"};var cw;cw={dismiss:"Opusti"};var dw;dw={dismiss:"Odbaci"};var fw;fw={dismiss:"Avvisa"};var pw;pw={dismiss:"Kapat"};var mw;mw={dismiss:"Скасувати"};var hw;hw={dismiss:"取消"};var vw;vw={dismiss:"關閉"};var gw;gw={"ar-AE":Ib,"bg-BG":jb,"cs-CZ":Fb,"da-DK":Ob,"de-DE":Kb,"el-GR":Vb,"en-US":Bb,"es-ES":Ub,"et-EE":Hb,"fi-FI":Wb,"fr-FR":Yb,"he-IL":Qb,"hr-HR":Gb,"hu-HU":Xb,"it-IT":qb,"ja-JP":Zb,"ko-KR":Jb,"lt-LT":ew,"lv-LV":tw,"nb-NO":nw,"nl-NL":rw,"pl-PL":ow,"pt-BR":iw,"pt-PT":lw,"ro-RO":aw,"ru-RU":sw,"sk-SK":uw,"sl-SI":cw,"sr-SP":dw,"sv-SE":fw,"tr-TR":pw,"uk-UA":mw,"zh-CN":hw,"zh-TW":vw};const py={border:0,clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap"};function RD(e={}){let{style:t,isFocusable:n}=e,[o,l]=k.useState(!1),{focusWithinProps:s}=Jf({isDisabled:!n,onFocusWithinChange:u=>l(u)});return{visuallyHiddenProps:{...s,style:k.useMemo(()=>o?t:t?{...py,...t}:py,[o])}}}function yw(e){let{children:t,elementType:n="div",isFocusable:o,style:l,...s}=e,{visuallyHiddenProps:u}=RD(e);return ie.createElement(n,we(s,u),t)}function my(e){let{onDismiss:t,...n}=e,o=kr((l=gw)&&l.__esModule?l.default:l,"@react-aria/overlays");var l;let s=Ax(n,o.format("dismiss"));return ie.createElement(yw,null,ie.createElement("button",{...s,tabIndex:-1,onClick:()=>{t&&t()},style:{width:1,height:1}}))}function LD(e){let t=kD(e),[n,o]=k.useState(null),[l,s]=k.useState([]);return{focusStrategy:n,...t,open(u=null){o(u),t.open()},toggle(u=null){o(u),t.toggle()},close(){s([]),t.close()},expandedKeysStack:l,openSubmenu:(u,d)=>{s(f=>d>f.length?f:[...f.slice(0,d),u])},closeSubmenu:(u,d)=>{s(f=>f[d]===u?f.slice(0,d):f)}}}var xw;xw={longPressMessage:"اضغط مطولاً أو اضغط على Alt + السهم لأسفل لفتح القائمة"};var bw;bw={longPressMessage:"Натиснете продължително или натиснете Alt+ стрелка надолу, за да отворите менюто"};var ww;ww={longPressMessage:"Dlouhým stiskem nebo stisknutím kláves Alt + šipka dolů otevřete nabídku"};var _w;_w={longPressMessage:"Langt tryk eller tryk på Alt + pil ned for at åbne menuen"};var Sw;Sw={longPressMessage:"Drücken Sie lange oder drücken Sie Alt + Nach-unten, um das Menü zu öffnen"};var kw;kw={longPressMessage:"Πιέστε παρατεταμένα ή πατήστε Alt + κάτω βέλος για να ανοίξετε το μενού"};var $w;$w={longPressMessage:"Long press or press Alt + ArrowDown to open menu"};var Ew;Ew={longPressMessage:"Mantenga pulsado o pulse Alt + flecha abajo para abrir el menú"};var Pw;Pw={longPressMessage:"Menüü avamiseks vajutage pikalt või vajutage klahve Alt + allanool"};var Tw;Tw={longPressMessage:"Avaa valikko painamalla pohjassa tai näppäinyhdistelmällä Alt + Alanuoli"};var Cw;Cw={longPressMessage:"Appuyez de manière prolongée ou appuyez sur Alt + Flèche vers le bas pour ouvrir le menu."};var Mw;Mw={longPressMessage:"לחץ לחיצה ארוכה או הקש Alt + ArrowDown כדי לפתוח את התפריט"};var Dw;Dw={longPressMessage:"Dugo pritisnite ili pritisnite Alt + strelicu prema dolje za otvaranje izbornika"};var Nw;Nw={longPressMessage:"Nyomja meg hosszan, vagy nyomja meg az Alt + lefele nyíl gombot a menü megnyitásához"};var Rw;Rw={longPressMessage:"Premere a lungo o premere Alt + Freccia giù per aprire il menu"};var Lw;Lw={longPressMessage:"長押しまたは Alt+下矢印キーでメニューを開く"};var Aw;Aw={longPressMessage:"길게 누르거나 Alt + 아래쪽 화살표를 눌러 메뉴 열기"};var zw;zw={longPressMessage:"Norėdami atidaryti meniu, nuspaudę palaikykite arba paspauskite „Alt + ArrowDown“."};var Iw;Iw={longPressMessage:"Lai atvērtu izvēlni, turiet nospiestu vai nospiediet taustiņu kombināciju Alt + lejupvērstā bultiņa"};var jw;jw={longPressMessage:"Langt trykk eller trykk Alt + PilNed for å åpne menyen"};var Fw;Fw={longPressMessage:"Druk lang op Alt + pijl-omlaag of druk op Alt om het menu te openen"};var Ow;Ow={longPressMessage:"Naciśnij i przytrzymaj lub naciśnij klawisze Alt + Strzałka w dół, aby otworzyć menu"};var Kw;Kw={longPressMessage:"Pressione e segure ou pressione Alt + Seta para baixo para abrir o menu"};var Vw;Vw={longPressMessage:"Prima continuamente ou prima Alt + Seta Para Baixo para abrir o menu"};var Bw;Bw={longPressMessage:"Apăsați lung sau apăsați pe Alt + săgeată în jos pentru a deschide meniul"};var Uw;Uw={longPressMessage:"Нажмите и удерживайте или нажмите Alt + Стрелка вниз, чтобы открыть меню"};var Hw;Hw={longPressMessage:"Ponuku otvoríte dlhým stlačením alebo stlačením klávesu Alt + klávesu so šípkou nadol"};var Ww;Ww={longPressMessage:"Za odprtje menija pritisnite in držite gumb ali pritisnite Alt+puščica navzdol"};var Yw;Yw={longPressMessage:"Dugo pritisnite ili pritisnite Alt + strelicu prema dole da otvorite meni"};var Qw;Qw={longPressMessage:"Håll nedtryckt eller tryck på Alt + pil nedåt för att öppna menyn"};var Gw;Gw={longPressMessage:"Menüyü açmak için uzun basın veya Alt + Aşağı Ok tuşuna basın"};var Xw;Xw={longPressMessage:"Довго або звичайно натисніть комбінацію клавіш Alt і стрілка вниз, щоб відкрити меню"};var qw;qw={longPressMessage:"长按或按 Alt + 向下方向键以打开菜单"};var Zw;Zw={longPressMessage:"長按或按 Alt+向下鍵以開啟功能表"};var Jw;Jw={"ar-AE":xw,"bg-BG":bw,"cs-CZ":ww,"da-DK":_w,"de-DE":Sw,"el-GR":kw,"en-US":$w,"es-ES":Ew,"et-EE":Pw,"fi-FI":Tw,"fr-FR":Cw,"he-IL":Mw,"hr-HR":Dw,"hu-HU":Nw,"it-IT":Rw,"ja-JP":Lw,"ko-KR":Aw,"lt-LT":zw,"lv-LV":Iw,"nb-NO":jw,"nl-NL":Fw,"pl-PL":Ow,"pt-BR":Kw,"pt-PT":Vw,"ro-RO":Bw,"ru-RU":Uw,"sk-SK":Hw,"sl-SI":Ww,"sr-SP":Yw,"sv-SE":Qw,"tr-TR":Gw,"uk-UA":Xw,"zh-CN":qw,"zh-TW":Zw};function AD(e,t,n){let{type:o="menu",isDisabled:l,trigger:s="press"}=e,u=Mt(),{triggerProps:d,overlayProps:f}=ED({type:o},t,n),p=kr((h=Jw)&&h.__esModule?h.default:h,"@react-aria/menu");var h;let{longPressProps:y}=Cb({isDisabled:l||s!=="longPress",accessibilityDescription:p.format("longPressMessage"),onLongPressStart(){t.close()},onLongPress(){t.open("first")}}),v={preventFocusOnPress:!0,onPressStart(x){x.pointerType==="touch"||x.pointerType==="keyboard"||l||(wn(x.target),t.open(x.pointerType==="virtual"?"first":null))},onPress(x){x.pointerType!=="touch"||l||t.toggle()}};return delete d.onPress,{menuTriggerProps:{...d,...s==="press"?v:y,id:u,onKeyDown:x=>{if(!l&&(s!=="longPress"||x.altKey)&&n&&n.current)switch(x.key){case"Enter":case" ":if(s==="longPress")return;case"ArrowDown":"continuePropagation"in x||x.stopPropagation(),x.preventDefault(),t.toggle("first");break;case"ArrowUp":"continuePropagation"in x||x.stopPropagation(),x.preventDefault(),t.toggle("last");break;default:"continuePropagation"in x&&x.continuePropagation()}}},menuProps:{...f,"aria-labelledby":u,autoFocus:t.focusStrategy||!0,onClose:t.close}}}const e_=new WeakMap;function zD(e,t,n){let{shouldFocusWrap:o=!0,onKeyDown:l,onKeyUp:s,...u}=e;e["aria-label"]||e["aria-labelledby"]||console.warn("An aria-label or aria-labelledby prop is required for accessibility.");let d=Jr(e,{labelable:!0}),{listProps:f}=uD({...u,ref:n,selectionManager:t.selectionManager,collection:t.collection,disabledKeys:t.disabledKeys,shouldFocusWrap:o,linkBehavior:"override"});return e_.set(t,{onClose:e.onClose,onAction:e.onAction,shouldUseVirtualFocus:e.shouldUseVirtualFocus}),{menuProps:we(d,{onKeyDown:l,onKeyUp:s},{role:"menu",...f,onKeyDown:p=>{var h;(p.key!=="Escape"||e.shouldUseVirtualFocus)&&((h=f.onKeyDown)===null||h===void 0||h.call(f,p))}})}}const hy=new WeakMap;function ID(e){let t=hy.get(e);if(t!=null)return t;let n=0,o=l=>{for(let s of l)s.type==="section"?o(ot(s,e)):n++};return o(e),hy.set(e,n),n}function jD(e,t,n){let{id:o,key:l,closeOnSelect:s,isVirtualized:u,"aria-haspopup":d,onPressStart:f,onPressUp:p,onPress:h,onPressChange:y,onPressEnd:v,onHoverStart:x,onHoverChange:b,onHoverEnd:_,onKeyDown:S,onKeyUp:$,onFocus:E,onFocusChange:N,onBlur:O,selectionManager:M=t.selectionManager}=e,I=!!d,z=I&&e["aria-expanded"]==="true";var P;let K=(P=e.isDisabled)!==null&&P!==void 0?P:M.isDisabled(l);var J;let W=(J=e.isSelected)!==null&&J!==void 0?J:M.isSelected(l),U=e_.get(t),T=t.collection.getItem(l),B=e.onClose||U.onClose,te=Nl(),se=Ee=>{var Ft;I||(!(T==null||(Ft=T.props)===null||Ft===void 0)&&Ft.onAction?T.props.onAction():e.onAction&&e.onAction(l),U.onAction&&(0,U.onAction)(l),Ee.target instanceof HTMLAnchorElement&&T&&te.open(Ee.target,Ee,T.props.href,T.props.routerOptions))},H="menuitem";I||(M.selectionMode==="single"?H="menuitemradio":M.selectionMode==="multiple"&&(H="menuitemcheckbox"));let Q=rl(),re=rl(),ee=rl(),A={id:o,"aria-disabled":K||void 0,role:H,"aria-label":e["aria-label"],"aria-labelledby":Q,"aria-describedby":[re,ee].filter(Boolean).join(" ")||void 0,"aria-controls":e["aria-controls"],"aria-haspopup":d,"aria-expanded":e["aria-expanded"]};M.selectionMode==="none"||I||(A["aria-checked"]=W),u&&(A["aria-posinset"]=T==null?void 0:T.index,A["aria-setsize"]=ID(t.collection));let Y=()=>{!I&&B&&(s??(M.selectionMode!=="multiple"||M.isLink(l)))&&B()},{itemProps:fe,isFocused:de}=ip({id:o,selectionManager:M,key:l,ref:n,shouldSelectOnPressUp:!0,allowsDifferentPressOrigin:!0,linkBehavior:"none",shouldUseVirtualFocus:U.shouldUseVirtualFocus}),{pressProps:pe,isPressed:ye}=wr({onPressStart:Ee=>{Ee.pointerType==="keyboard"&&se(Ee),f==null||f(Ee)},onPress:Ee=>{Ee.pointerType!=="keyboard"&&Ee.pointerType!=="mouse"&&(se(Ee),Y()),h==null||h(Ee)},onPressUp:Ee=>{Ee.pointerType==="mouse"&&(se(Ee),Y()),p==null||p(Ee)},onPressChange:y,onPressEnd:v,isDisabled:K}),{hoverProps:ne}=ep({isDisabled:K,onHoverStart(Ee){_l()||z&&d||(M.setFocused(!0),M.setFocusedKey(l)),x==null||x(Ee)},onHoverChange:b,onHoverEnd:_}),{keyboardProps:xe}=Mx({onKeyDown:Ee=>{if(Ee.repeat)Ee.continuePropagation();else switch(Ee.key){case" ":K||M.selectionMode!=="none"||I||s===!1||!B||B();break;case"Enter":K||s===!1||I||!B||B();break;default:I||Ee.continuePropagation(),S==null||S(Ee)}},onKeyUp:$}),{focusProps:_e}=Zf({onBlur:O,onFocus:E,onFocusChange:N}),Ve=Jr(T==null?void 0:T.props);delete Ve.id;let Un=fM(T==null?void 0:T.props);return{menuItemProps:{...A,...we(Ve,Un,I?{onFocus:fe.onFocus,"data-collection":fe["data-collection"],"data-key":fe["data-key"]}:fe,pe,ne,xe,_e,U.shouldUseVirtualFocus||I?{onMouseDown:Ee=>Ee.preventDefault()}:void 0),tabIndex:fe.tabIndex!=null&&z&&!U.shouldUseVirtualFocus?-1:fe.tabIndex},labelProps:{id:Q},descriptionProps:{id:re},keyboardShortcutProps:{id:ee},isFocused:de,isFocusVisible:de&&M.isFocused&&_l()&&!z,isSelected:W,isPressed:ye,isDisabled:K}}function FD(e){let{heading:t,"aria-label":n}=e,o=Mt();return{itemProps:{role:"presentation"},headingProps:t?{id:o,role:"presentation"}:{},groupProps:{role:"group","aria-label":n,"aria-labelledby":t?o:void 0}}}let OD=class{*[Symbol.iterator](){yield*this.iterable}get size(){return this.keyMap.size}getKeys(){return this.keyMap.keys()}getKeyBefore(t){let n=this.keyMap.get(t);var o;return n&&(o=n.prevKey)!==null&&o!==void 0?o:null}getKeyAfter(t){let n=this.keyMap.get(t);var o;return n&&(o=n.nextKey)!==null&&o!==void 0?o:null}getFirstKey(){return this.firstKey}getLastKey(){return this.lastKey}getItem(t){var n;return(n=this.keyMap.get(t))!==null&&n!==void 0?n:null}at(t){const n=[...this.getKeys()];return this.getItem(n[t])}constructor(t,{expandedKeys:n}={}){this.keyMap=new Map,this.firstKey=null,this.lastKey=null,this.iterable=t,n=n||new Set;let o=d=>{if(this.keyMap.set(d.key,d),d.childNodes&&(d.type==="section"||n.has(d.key)))for(let f of d.childNodes)o(f)};for(let d of t)o(d);let l=null,s=0;for(let[d,f]of this.keyMap)l?(l.nextKey=d,f.prevKey=l.key):(this.firstKey=d,f.prevKey=void 0),f.type==="item"&&(f.index=s++),l=f,l.nextKey=void 0;var u;this.lastKey=(u=l==null?void 0:l.key)!==null&&u!==void 0?u:null}};function KD(e){let{onExpandedChange:t}=e,[n,o]=Ll(e.expandedKeys?new Set(e.expandedKeys):void 0,e.defaultExpandedKeys?new Set(e.defaultExpandedKeys):new Set,t),l=Db(e),s=k.useMemo(()=>e.disabledKeys?new Set(e.disabledKeys):new Set,[e.disabledKeys]),u=Lb(e,k.useCallback(d=>new OD(d,{expandedKeys:n}),[n]),null);return k.useEffect(()=>{l.focusedKey==null||u.getItem(l.focusedKey)||l.setFocusedKey(null)},[u,l.focusedKey]),{collection:u,expandedKeys:n,disabledKeys:s,toggleKey:d=>{o(function(f,p){let h=new Set(f);return h.has(p)?h.delete(p):h.add(p),h}(n,d))},setExpandedKeys:o,selectionManager:new Nb(u,l)}}var VD={item:"item-module_item__egCtn"};lt(`.item-module_item__egCtn {\r
  color: var(--md-sys-color-on-surface, #1d1b20);\r
  font-family: var(\r
    --md-sys-typescale-body-large-font,\r
    var(--md-ref-typeface-plain, Roboto)\r
  );\r
  font-size: var(--md-sys-typescale-body-large-size, 1rem);\r
  font-weight: var(\r
    --md-sys-typescale-body-large-weight,\r
    var(--md-ref-typeface-weight-regular, 400)\r
  );\r
  line-height: var(--md-sys-typescale-body-large-line-height, 1.5rem);\r
  align-items: center;\r
  box-sizing: border-box;\r
  display: flex;\r
  gap: 16px;\r
  min-height: 56px;\r
  overflow: hidden;\r
  padding: 12px 16px;\r
  position: relative;\r
  text-overflow: ellipsis;\r
\r
  border-radius: inherit;\r
  flex: 1;\r
  color: var(\r
    --md-menu-item-label-text-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  font-family: var(\r
    --md-menu-item-label-text-font,\r
    var(\r
      --md-sys-typescale-body-large-font,\r
      var(--md-ref-typeface-plain, Roboto)\r
    )\r
  );\r
  font-size: var(\r
    --md-menu-item-label-text-size,\r
    var(--md-sys-typescale-body-large-size, 1rem)\r
  );\r
  line-height: var(\r
    --md-menu-item-label-text-line-height,\r
    var(--md-sys-typescale-body-large-line-height, 1.5rem)\r
  );\r
  font-weight: var(\r
    --md-menu-item-label-text-weight,\r
    var(\r
      --md-sys-typescale-body-large-weight,\r
      var(--md-ref-typeface-weight-regular, 400)\r
    )\r
  );\r
  min-height: var(--md-menu-item-one-line-container-height, 56px);\r
  padding-top: var(--md-menu-item-top-space, 12px);\r
  padding-bottom: var(--md-menu-item-bottom-space, 12px);\r
  padding-inline-start: var(--md-menu-item-leading-space, 16px);\r
  padding-inline-end: var(--md-menu-item-trailing-space, 16px);\r
}\r
`);const t_=e=>{const{container:t,start:n,overline:o,headline:l,supportingText:s,trailingSupportingText:u,end:d,children:f}=e,p=an(e,["container","start","overline","headline","supportingText","trailingSupportingText","end","children"]);return D.jsxs("div",Object.assign({},p,{className:VD.item,children:[t,n,d,f,o,l,s,u]}))};t_.displayName="Actify.Item";var yd={underlay:"popover-module_underlay__We0fa",popover:"popover-module_popover__KarDC",open:"popover-module_open__l9qOo"};lt(`.popover-module_underlay__We0fa {\r
  position: fixed;\r
  inset: 0;\r
}\r
\r
.popover-module_popover__KarDC {\r
  display: block;\r
  list-style-type: none;\r
  margin: 0;\r
  outline: none;\r
  box-sizing: border-box;\r
  background-color: var(\r
    --md-menu-container-color,\r
    var(--md-sys-color-surface-container, #f3edf7)\r
  );\r
  height: inherit;\r
  max-height: inherit;\r
  min-width: inherit;\r
  max-width: inherit;\r
  border-radius: var(\r
    --md-menu-container-shape,\r
    var(--md-sys-shape-corner-extra-small, 4px)\r
  );\r
  scrollbar-width: inherit;\r
  box-shadow: 0 2px 6px 2px rgba(0, 0, 0, .15);\r
}\r
\r
.popover-module_popover__KarDC > ul {\r
  overflow: hidden;\r
}\r
\r
.popover-module_popover__KarDC.popover-module_open__l9qOo > ul {\r
  overflow: auto;\r
}\r
`);const BD=e=>{const t=ie.useRef(null),n=ie.useRef(null),{state:o,children:l,referenceWidth:s,triggerRef:u=t,popoverRef:d=n}=e,{popoverProps:f,underlayProps:p}=ND(Object.assign(Object.assign({},e),{triggerRef:u,popoverRef:d}),o);s&&(f.style=Object.assign(Object.assign({},f.style),{"--reference-width":s+"px"}));const h=ie.useCallback(()=>{var y;(y=d.current)===null||y===void 0||y.classList.add(yd.open)},[d]);return D.jsxs(wD,{children:[D.jsx("div",Object.assign({},p,{className:yd.underlay})),D.jsxs(hx.div,Object.assign({},f,{className:Ye(yd.popover,e.className),initial:{height:0,overflow:"hidden"},onAnimationComplete:h,animate:{height:"auto"},transition:{duration:.3},ref:d,children:[D.jsx(my,{onDismiss:o.close}),D.jsx(D.Fragment,{children:l}),D.jsx(my,{onDismiss:o.close})]}))]})};var vy={text:"supporting-module_text__LAS2Y",counter:"supporting-module_counter__GuSE6"};lt(`.supporting-module_text__LAS2Y {\r
  color: var(--_supporting-text-color);\r
  display: flex;\r
  font-family: var(--_supporting-text-font);\r
  font-size: var(--_supporting-text-size);\r
  line-height: var(--_supporting-text-line-height);\r
  font-weight: var(--_supporting-text-weight);\r
  gap: 16px;\r
  justify-content: space-between;\r
  padding-inline-start: var(--_supporting-text-leading-space);\r
  padding-inline-end: var(--_supporting-text-trailing-space);\r
  padding-top: var(--_supporting-text-top-space);\r
}\r
.supporting-module_counter__GuSE6 {\r
  flex-shrink: 0;\r
}\r
`);const UD=({max:e=-1,count:t=-1,error:n,errorText:o,supportingText:l,refreshErrorAlert:s})=>{const u=n&&o&&!s?"alert":"",d=()=>t<0||e<=0?"":`${t} / ${e}`,f=()=>n&&o?o:l;return D.jsxs(ie.Fragment,{children:[D.jsxs("div",{role:u,className:vy.text,children:[D.jsx("span",{children:f()}),D.jsx("span",{className:vy.counter,children:d()})]}),D.jsx("div",{hidden:!0,id:"description",children:`${f()} ${d()}`})]})};var ke={filled:"field-module_filled__lGXpV",outlined:"field-module_outlined__7MFPd",field:"field-module_field__OUiHT",outline:"field-module_outline__MLMKT","container-overflow":"field-module_container-overflow__DVkGv",container:"field-module_container__Vg8QO",start:"field-module_start__hbiQQ",end:"field-module_end__k4pEv","with-start":"field-module_with-start__oQ4V1","with-end":"field-module_with-end__v1BEg",middle:"field-module_middle__o4DOl",focused:"field-module_focused__yovQv",content:"field-module_content__r4BW-",populated:"field-module_populated__Q-p--",label:"field-module_label__nLEGd",resting:"field-module_resting__WB4GE",floating:"field-module_floating__cHtoV",visible:"field-module_visible__192Ro",error:"field-module_error__Gwmtc","input-wrapper":"field-module_input-wrapper__euPtU","no-label":"field-module_no-label__WTIud",background:"field-module_background__lA8Sd","state-layer":"field-module_state-layer__C0so-",disabled:"field-module_disabled__-ZlOi","active-indicator":"field-module_active-indicator__EV61C","label-wrapper":"field-module_label-wrapper__rT6tK","outline-start":"field-module_outline-start__1g5Bi","outline-notch":"field-module_outline-notch__DkhHs","outline-end":"field-module_outline-end__u0aPt","outline-panel-inactive":"field-module_outline-panel-inactive__tdtyr","outline-panel-active":"field-module_outline-panel-active__BoFP8","outline-label":"field-module_outline-label__V41uw"};lt(`.field-module_filled__lGXpV {\r
  --_active-indicator-color: var(\r
    --md-filled-field-active-indicator-color,\r
    var(--md-sys-color-on-surface-variant, #49454f)\r
  );\r
  --_active-indicator-height: var(\r
    --md-filled-field-active-indicator-height,\r
    1px\r
  );\r
  --_bottom-space: var(--md-filled-field-bottom-space, 16px);\r
  --_container-color: var(\r
    --md-filled-field-container-color,\r
    var(--md-sys-color-surface-container-highest, #e6e0e9)\r
  );\r
  --_container-shape-start-start: var(\r
    --md-filled-field-container-shape-start-start,\r
    var(--md-filled-field-container-shape, 4px)\r
  );\r
  --_container-shape-start-end: var(\r
    --md-filled-field-container-shape-start-end,\r
    var(--md-filled-field-container-shape, 4px)\r
  );\r
  --_container-shape-end-end: var(\r
    --md-filled-field-container-shape-end-end,\r
    var(--md-filled-field-container-shape, 0px)\r
  );\r
  --_container-shape-end-start: var(\r
    --md-filled-field-container-shape-end-start,\r
    var(--md-filled-field-container-shape, 0px)\r
  );\r
  --_content-color: var(\r
    --md-filled-field-content-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_content-font: var(\r
    --md-filled-field-content-font,\r
    var(\r
      --md-sys-typescale-body-large-font,\r
      var(--md-ref-typeface-plain, Roboto)\r
    )\r
  );\r
  --_content-line-height: var(\r
    --md-filled-field-content-line-height,\r
    var(--md-sys-typescale-body-large-line-height, 1.5rem)\r
  );\r
  --_content-size: var(\r
    --md-filled-field-content-size,\r
    var(--md-sys-typescale-body-large-size, 1rem)\r
  );\r
  --_content-weight: var(\r
    --md-filled-field-content-weight,\r
    var(\r
      --md-sys-typescale-body-large-weight,\r
      var(--md-ref-typeface-weight-regular, 400)\r
    )\r
  );\r
  --_disabled-active-indicator-color: var(\r
    --md-filled-field-disabled-active-indicator-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_disabled-active-indicator-height: var(\r
    --md-filled-field-disabled-active-indicator-height,\r
    1px\r
  );\r
  --_disabled-active-indicator-opacity: var(\r
    --md-filled-field-disabled-active-indicator-opacity,\r
    0.38\r
  );\r
  --_disabled-container-color: var(\r
    --md-filled-field-disabled-container-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_disabled-container-opacity: var(\r
    --md-filled-field-disabled-container-opacity,\r
    0.04\r
  );\r
  --_disabled-content-color: var(\r
    --md-filled-field-disabled-content-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_disabled-content-opacity: var(\r
    --md-filled-field-disabled-content-opacity,\r
    0.38\r
  );\r
  --_disabled-label-text-color: var(\r
    --md-filled-field-disabled-label-text-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_disabled-label-text-opacity: var(\r
    --md-filled-field-disabled-label-text-opacity,\r
    0.38\r
  );\r
  --_disabled-leading-content-color: var(\r
    --md-filled-field-disabled-leading-content-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_disabled-leading-content-opacity: var(\r
    --md-filled-field-disabled-leading-content-opacity,\r
    0.38\r
  );\r
  --_disabled-supporting-text-color: var(\r
    --md-filled-field-disabled-supporting-text-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_disabled-supporting-text-opacity: var(\r
    --md-filled-field-disabled-supporting-text-opacity,\r
    0.38\r
  );\r
  --_disabled-trailing-content-color: var(\r
    --md-filled-field-disabled-trailing-content-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_disabled-trailing-content-opacity: var(\r
    --md-filled-field-disabled-trailing-content-opacity,\r
    0.38\r
  );\r
  --_error-active-indicator-color: var(\r
    --md-filled-field-error-active-indicator-color,\r
    var(--md-sys-color-error, #b3261e)\r
  );\r
  --_error-content-color: var(\r
    --md-filled-field-error-content-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_error-focus-active-indicator-color: var(\r
    --md-filled-field-error-focus-active-indicator-color,\r
    var(--md-sys-color-error, #b3261e)\r
  );\r
  --_error-focus-content-color: var(\r
    --md-filled-field-error-focus-content-color,\r
    var(--md-sys-color-on-surface-variant, #49454f)\r
  );\r
  --_error-focus-label-text-color: var(\r
    --md-filled-field-error-focus-label-text-color,\r
    var(--md-sys-color-error, #b3261e)\r
  );\r
  --_error-focus-leading-content-color: var(\r
    --md-filled-field-error-focus-leading-content-color,\r
    var(--md-sys-color-on-surface-variant, #49454f)\r
  );\r
  --_error-focus-supporting-text-color: var(\r
    --md-filled-field-error-focus-supporting-text-color,\r
    var(--md-sys-color-error, #b3261e)\r
  );\r
  --_error-focus-trailing-content-color: var(\r
    --md-filled-field-error-focus-trailing-content-color,\r
    var(--md-sys-color-error, #b3261e)\r
  );\r
  --_error-hover-active-indicator-color: var(\r
    --md-filled-field-error-hover-active-indicator-color,\r
    var(--md-sys-color-on-error-container, #410e0b)\r
  );\r
  --_error-hover-content-color: var(\r
    --md-filled-field-error-hover-content-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_error-hover-label-text-color: var(\r
    --md-filled-field-error-hover-label-text-color,\r
    var(--md-sys-color-on-error-container, #410e0b)\r
  );\r
  --_error-hover-leading-content-color: var(\r
    --md-filled-field-error-hover-leading-content-color,\r
    var(--md-sys-color-on-surface-variant, #49454f)\r
  );\r
  --_error-hover-state-layer-color: var(\r
    --md-filled-field-error-hover-state-layer-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_error-hover-state-layer-opacity: var(\r
    --md-filled-field-error-hover-state-layer-opacity,\r
    0.08\r
  );\r
  --_error-hover-supporting-text-color: var(\r
    --md-filled-field-error-hover-supporting-text-color,\r
    var(--md-sys-color-error, #b3261e)\r
  );\r
  --_error-hover-trailing-content-color: var(\r
    --md-filled-field-error-hover-trailing-content-color,\r
    var(--md-sys-color-on-error-container, #410e0b)\r
  );\r
  --_error-label-text-color: var(\r
    --md-filled-field-error-label-text-color,\r
    var(--md-sys-color-error, #b3261e)\r
  );\r
  --_error-leading-content-color: var(\r
    --md-filled-field-error-leading-content-color,\r
    var(--md-sys-color-on-surface-variant, #49454f)\r
  );\r
  --_error-supporting-text-color: var(\r
    --md-filled-field-error-supporting-text-color,\r
    var(--md-sys-color-error, #b3261e)\r
  );\r
  --_error-trailing-content-color: var(\r
    --md-filled-field-error-trailing-content-color,\r
    var(--md-sys-color-error, #b3261e)\r
  );\r
  --_focus-active-indicator-color: var(\r
    --md-filled-field-focus-active-indicator-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_focus-active-indicator-height: var(\r
    --md-filled-field-focus-active-indicator-height,\r
    3px\r
  );\r
  --_focus-content-color: var(\r
    --md-filled-field-focus-content-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_focus-label-text-color: var(\r
    --md-filled-field-focus-label-text-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_focus-leading-content-color: var(\r
    --md-filled-field-focus-leading-content-color,\r
    var(--md-sys-color-on-surface-variant, #49454f)\r
  );\r
  --_focus-supporting-text-color: var(\r
    --md-filled-field-focus-supporting-text-color,\r
    var(--md-sys-color-on-surface-variant, #49454f)\r
  );\r
  --_focus-trailing-content-color: var(\r
    --md-filled-field-focus-trailing-content-color,\r
    var(--md-sys-color-on-surface-variant, #49454f)\r
  );\r
  --_hover-active-indicator-color: var(\r
    --md-filled-field-hover-active-indicator-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_hover-active-indicator-height: var(\r
    --md-filled-field-hover-active-indicator-height,\r
    1px\r
  );\r
  --_hover-content-color: var(\r
    --md-filled-field-hover-content-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_hover-label-text-color: var(\r
    --md-filled-field-hover-label-text-color,\r
    var(--md-sys-color-on-surface-variant, #49454f)\r
  );\r
  --_hover-leading-content-color: var(\r
    --md-filled-field-hover-leading-content-color,\r
    var(--md-sys-color-on-surface-variant, #49454f)\r
  );\r
  --_hover-state-layer-color: var(\r
    --md-filled-field-hover-state-layer-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_hover-state-layer-opacity: var(\r
    --md-filled-field-hover-state-layer-opacity,\r
    0.08\r
  );\r
  --_hover-supporting-text-color: var(\r
    --md-filled-field-hover-supporting-text-color,\r
    var(--md-sys-color-on-surface-variant, #49454f)\r
  );\r
  --_hover-trailing-content-color: var(\r
    --md-filled-field-hover-trailing-content-color,\r
    var(--md-sys-color-on-surface-variant, #49454f)\r
  );\r
  --_label-text-color: var(\r
    --md-filled-field-label-text-color,\r
    var(--md-sys-color-on-surface-variant, #49454f)\r
  );\r
  --_label-text-font: var(\r
    --md-filled-field-label-text-font,\r
    var(\r
      --md-sys-typescale-body-large-font,\r
      var(--md-ref-typeface-plain, Roboto)\r
    )\r
  );\r
  --_label-text-line-height: var(\r
    --md-filled-field-label-text-line-height,\r
    var(--md-sys-typescale-body-large-line-height, 1.5rem)\r
  );\r
  --_label-text-populated-line-height: var(\r
    --md-filled-field-label-text-populated-line-height,\r
    var(--md-sys-typescale-body-small-line-height, 1rem)\r
  );\r
  --_label-text-populated-size: var(\r
    --md-filled-field-label-text-populated-size,\r
    var(--md-sys-typescale-body-small-size, 0.75rem)\r
  );\r
  --_label-text-size: var(\r
    --md-filled-field-label-text-size,\r
    var(--md-sys-typescale-body-large-size, 1rem)\r
  );\r
  --_label-text-weight: var(\r
    --md-filled-field-label-text-weight,\r
    var(\r
      --md-sys-typescale-body-large-weight,\r
      var(--md-ref-typeface-weight-regular, 400)\r
    )\r
  );\r
  --_leading-content-color: var(\r
    --md-filled-field-leading-content-color,\r
    var(--md-sys-color-on-surface-variant, #49454f)\r
  );\r
  --_leading-space: var(--md-filled-field-leading-space, 16px);\r
  --_supporting-text-color: var(\r
    --md-filled-field-supporting-text-color,\r
    var(--md-sys-color-on-surface-variant, #49454f)\r
  );\r
  --_supporting-text-font: var(\r
    --md-filled-field-supporting-text-font,\r
    var(\r
      --md-sys-typescale-body-small-font,\r
      var(--md-ref-typeface-plain, Roboto)\r
    )\r
  );\r
  --_supporting-text-leading-space: var(\r
    --md-filled-field-supporting-text-leading-space,\r
    16px\r
  );\r
  --_supporting-text-line-height: var(\r
    --md-filled-field-supporting-text-line-height,\r
    var(--md-sys-typescale-body-small-line-height, 1rem)\r
  );\r
  --_supporting-text-size: var(\r
    --md-filled-field-supporting-text-size,\r
    var(--md-sys-typescale-body-small-size, 0.75rem)\r
  );\r
  --_supporting-text-top-space: var(\r
    --md-filled-field-supporting-text-top-space,\r
    4px\r
  );\r
  --_supporting-text-trailing-space: var(\r
    --md-filled-field-supporting-text-trailing-space,\r
    16px\r
  );\r
  --_supporting-text-weight: var(\r
    --md-filled-field-supporting-text-weight,\r
    var(\r
      --md-sys-typescale-body-small-weight,\r
      var(--md-ref-typeface-weight-regular, 400)\r
    )\r
  );\r
  --_top-space: var(--md-filled-field-top-space, 16px);\r
  --_trailing-content-color: var(\r
    --md-filled-field-trailing-content-color,\r
    var(--md-sys-color-on-surface-variant, #49454f)\r
  );\r
  --_trailing-space: var(--md-filled-field-trailing-space, 16px);\r
  --_with-label-bottom-space: var(\r
    --md-filled-field-with-label-bottom-space,\r
    8px\r
  );\r
  --_with-label-top-space: var(--md-filled-field-with-label-top-space, 8px);\r
}\r
\r
.field-module_outlined__7MFPd {\r
  --_bottom-space: var(--md-outlined-field-bottom-space, 16px);\r
  --_container-shape: var(--md-outlined-field-container-shape, 4px);\r
  --_content-color: var(\r
    --md-outlined-field-content-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_content-font: var(\r
    --md-outlined-field-content-font,\r
    var(\r
      --md-sys-typescale-body-large-font,\r
      var(--md-ref-typeface-plain, Roboto)\r
    )\r
  );\r
  --_content-line-height: var(\r
    --md-outlined-field-content-line-height,\r
    var(--md-sys-typescale-body-large-line-height, 1.5rem)\r
  );\r
  --_content-size: var(\r
    --md-outlined-field-content-size,\r
    var(--md-sys-typescale-body-large-size, 1rem)\r
  );\r
  --_content-weight: var(\r
    --md-outlined-field-content-weight,\r
    var(\r
      --md-sys-typescale-body-large-weight,\r
      var(--md-ref-typeface-weight-regular, 400)\r
    )\r
  );\r
  --_disabled-content-color: var(\r
    --md-outlined-field-disabled-content-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_disabled-content-opacity: var(\r
    --md-outlined-field-disabled-content-opacity,\r
    0.38\r
  );\r
  --_disabled-label-text-color: var(\r
    --md-outlined-field-disabled-label-text-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_disabled-label-text-opacity: var(\r
    --md-outlined-field-disabled-label-text-opacity,\r
    0.38\r
  );\r
  --_disabled-leading-content-color: var(\r
    --md-outlined-field-disabled-leading-content-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_disabled-leading-content-opacity: var(\r
    --md-outlined-field-disabled-leading-content-opacity,\r
    0.38\r
  );\r
  --_disabled-outline-color: var(\r
    --md-outlined-field-disabled-outline-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_disabled-outline-opacity: var(\r
    --md-outlined-field-disabled-outline-opacity,\r
    0.12\r
  );\r
  --_disabled-outline-width: var(\r
    --md-outlined-field-disabled-outline-width,\r
    1px\r
  );\r
  --_disabled-supporting-text-color: var(\r
    --md-outlined-field-disabled-supporting-text-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_disabled-supporting-text-opacity: var(\r
    --md-outlined-field-disabled-supporting-text-opacity,\r
    0.38\r
  );\r
  --_disabled-trailing-content-color: var(\r
    --md-outlined-field-disabled-trailing-content-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_disabled-trailing-content-opacity: var(\r
    --md-outlined-field-disabled-trailing-content-opacity,\r
    0.38\r
  );\r
  --_error-content-color: var(\r
    --md-outlined-field-error-content-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_error-focus-content-color: var(\r
    --md-outlined-field-error-focus-content-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_error-focus-label-text-color: var(\r
    --md-outlined-field-error-focus-label-text-color,\r
    var(--md-sys-color-error, #b3261e)\r
  );\r
  --_error-focus-leading-content-color: var(\r
    --md-outlined-field-error-focus-leading-content-color,\r
    var(--md-sys-color-on-surface-variant, #49454f)\r
  );\r
  --_error-focus-outline-color: var(\r
    --md-outlined-field-error-focus-outline-color,\r
    var(--md-sys-color-error, #b3261e)\r
  );\r
  --_error-focus-supporting-text-color: var(\r
    --md-outlined-field-error-focus-supporting-text-color,\r
    var(--md-sys-color-error, #b3261e)\r
  );\r
  --_error-focus-trailing-content-color: var(\r
    --md-outlined-field-error-focus-trailing-content-color,\r
    var(--md-sys-color-error, #b3261e)\r
  );\r
  --_error-hover-content-color: var(\r
    --md-outlined-field-error-hover-content-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_error-hover-label-text-color: var(\r
    --md-outlined-field-error-hover-label-text-color,\r
    var(--md-sys-color-on-error-container, #410e0b)\r
  );\r
  --_error-hover-leading-content-color: var(\r
    --md-outlined-field-error-hover-leading-content-color,\r
    var(--md-sys-color-on-surface-variant, #49454f)\r
  );\r
  --_error-hover-outline-color: var(\r
    --md-outlined-field-error-hover-outline-color,\r
    var(--md-sys-color-on-error-container, #410e0b)\r
  );\r
  --_error-hover-supporting-text-color: var(\r
    --md-outlined-field-error-hover-supporting-text-color,\r
    var(--md-sys-color-error, #b3261e)\r
  );\r
  --_error-hover-trailing-content-color: var(\r
    --md-outlined-field-error-hover-trailing-content-color,\r
    var(--md-sys-color-on-error-container, #410e0b)\r
  );\r
  --_error-label-text-color: var(\r
    --md-outlined-field-error-label-text-color,\r
    var(--md-sys-color-error, #b3261e)\r
  );\r
  --_error-leading-content-color: var(\r
    --md-outlined-field-error-leading-content-color,\r
    var(--md-sys-color-on-surface-variant, #49454f)\r
  );\r
  --_error-outline-color: var(\r
    --md-outlined-field-error-outline-color,\r
    var(--md-sys-color-error, #b3261e)\r
  );\r
  --_error-supporting-text-color: var(\r
    --md-outlined-field-error-supporting-text-color,\r
    var(--md-sys-color-error, #b3261e)\r
  );\r
  --_error-trailing-content-color: var(\r
    --md-outlined-field-error-trailing-content-color,\r
    var(--md-sys-color-error, #b3261e)\r
  );\r
  --_focus-content-color: var(\r
    --md-outlined-field-focus-content-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_focus-label-text-color: var(\r
    --md-outlined-field-focus-label-text-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_focus-leading-content-color: var(\r
    --md-outlined-field-focus-leading-content-color,\r
    var(--md-sys-color-on-surface-variant, #49454f)\r
  );\r
  --_focus-outline-color: var(\r
    --md-outlined-field-focus-outline-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_focus-outline-width: var(--md-outlined-field-focus-outline-width, 3px);\r
  --_focus-supporting-text-color: var(\r
    --md-outlined-field-focus-supporting-text-color,\r
    var(--md-sys-color-on-surface-variant, #49454f)\r
  );\r
  --_focus-trailing-content-color: var(\r
    --md-outlined-field-focus-trailing-content-color,\r
    var(--md-sys-color-on-surface-variant, #49454f)\r
  );\r
  --_hover-content-color: var(\r
    --md-outlined-field-hover-content-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_hover-label-text-color: var(\r
    --md-outlined-field-hover-label-text-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_hover-leading-content-color: var(\r
    --md-outlined-field-hover-leading-content-color,\r
    var(--md-sys-color-on-surface-variant, #49454f)\r
  );\r
  --_hover-outline-color: var(\r
    --md-outlined-field-hover-outline-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_hover-outline-width: var(--md-outlined-field-hover-outline-width, 1px);\r
  --_hover-supporting-text-color: var(\r
    --md-outlined-field-hover-supporting-text-color,\r
    var(--md-sys-color-on-surface-variant, #49454f)\r
  );\r
  --_hover-trailing-content-color: var(\r
    --md-outlined-field-hover-trailing-content-color,\r
    var(--md-sys-color-on-surface-variant, #49454f)\r
  );\r
  --_label-text-color: var(\r
    --md-outlined-field-label-text-color,\r
    var(--md-sys-color-on-surface-variant, #49454f)\r
  );\r
  --_label-text-font: var(\r
    --md-outlined-field-label-text-font,\r
    var(\r
      --md-sys-typescale-body-large-font,\r
      var(--md-ref-typeface-plain, Roboto)\r
    )\r
  );\r
  --_label-text-line-height: var(\r
    --md-outlined-field-label-text-line-height,\r
    var(--md-sys-typescale-body-large-line-height, 1.5rem)\r
  );\r
  --_label-text-padding-bottom: var(\r
    --md-outlined-field-label-text-padding-bottom,\r
    8px\r
  );\r
  --_label-text-populated-line-height: var(\r
    --md-outlined-field-label-text-populated-line-height,\r
    var(--md-sys-typescale-body-small-line-height, 1rem)\r
  );\r
  --_label-text-populated-size: var(\r
    --md-outlined-field-label-text-populated-size,\r
    var(--md-sys-typescale-body-small-size, 0.75rem)\r
  );\r
  --_label-text-size: var(\r
    --md-outlined-field-label-text-size,\r
    var(--md-sys-typescale-body-large-size, 1rem)\r
  );\r
  --_label-text-weight: var(\r
    --md-outlined-field-label-text-weight,\r
    var(\r
      --md-sys-typescale-body-large-weight,\r
      var(--md-ref-typeface-weight-regular, 400)\r
    )\r
  );\r
  --_leading-content-color: var(\r
    --md-outlined-field-leading-content-color,\r
    var(--md-sys-color-on-surface-variant, #49454f)\r
  );\r
  --_leading-space: var(--md-outlined-field-leading-space, 16px);\r
  --_outline-color: var(\r
    --md-outlined-field-outline-color,\r
    var(--md-sys-color-outline, #79747e)\r
  );\r
  --_outline-label-padding: var(--md-outlined-field-outline-label-padding, 4px);\r
  --_outline-width: var(--md-outlined-field-outline-width, 1px);\r
  --_supporting-text-color: var(\r
    --md-outlined-field-supporting-text-color,\r
    var(--md-sys-color-on-surface-variant, #49454f)\r
  );\r
  --_supporting-text-font: var(\r
    --md-outlined-field-supporting-text-font,\r
    var(\r
      --md-sys-typescale-body-small-font,\r
      var(--md-ref-typeface-plain, Roboto)\r
    )\r
  );\r
  --_supporting-text-leading-space: var(\r
    --md-outlined-field-supporting-text-leading-space,\r
    16px\r
  );\r
  --_supporting-text-line-height: var(\r
    --md-outlined-field-supporting-text-line-height,\r
    var(--md-sys-typescale-body-small-line-height, 1rem)\r
  );\r
  --_supporting-text-size: var(\r
    --md-outlined-field-supporting-text-size,\r
    var(--md-sys-typescale-body-small-size, 0.75rem)\r
  );\r
  --_supporting-text-top-space: var(\r
    --md-outlined-field-supporting-text-top-space,\r
    4px\r
  );\r
  --_supporting-text-trailing-space: var(\r
    --md-outlined-field-supporting-text-trailing-space,\r
    16px\r
  );\r
  --_supporting-text-weight: var(\r
    --md-outlined-field-supporting-text-weight,\r
    var(\r
      --md-sys-typescale-body-small-weight,\r
      var(--md-ref-typeface-weight-regular, 400)\r
    )\r
  );\r
  --_top-space: var(--md-outlined-field-top-space, 16px);\r
  --_trailing-content-color: var(\r
    --md-outlined-field-trailing-content-color,\r
    var(--md-sys-color-on-surface-variant, #49454f)\r
  );\r
  --_trailing-space: var(--md-outlined-field-trailing-space, 16px);\r
  --_container-shape-start-start: var(\r
    --md-outlined-field-container-shape-start-start,\r
    var(--_container-shape)\r
  );\r
  --_container-shape-start-end: var(\r
    --md-outlined-field-container-shape-start-end,\r
    var(--_container-shape)\r
  );\r
  --_container-shape-end-end: var(\r
    --md-outlined-field-container-shape-end-end,\r
    var(--_container-shape)\r
  );\r
  --_container-shape-end-start: var(\r
    --md-outlined-field-container-shape-end-start,\r
    var(--_container-shape)\r
  );\r
}\r
\r
.field-module_field__OUiHT {\r
  --_with-leading-content-leading-space: var(\r
    --md-filled-field-with-leading-content-leading-space,\r
    12px\r
  );\r
  --_content-space: var(--md-filled-field-content-space, 16px);\r
  --_with-trailing-content-trailing-space: var(\r
    --md-filled-field-with-trailing-content-trailing-space,\r
    12px\r
  );\r
  width: 100%;\r
  cursor: text;\r
  display: flex;\r
  resize: inherit;\r
  flex: 1;\r
  outline: none;\r
  flex-direction: column;\r
  writing-mode: horizontal-tb;\r
  max-width: 100%;\r
  &:hover .field-module_outline__MLMKT {\r
    border-color: var(--_hover-outline-color);\r
    color: var(--_hover-outline-color);\r
  }\r
}\r
\r
.field-module_container-overflow__DVkGv {\r
  resize: inherit;\r
  border-start-start-radius: var(--_container-shape-start-start);\r
  border-start-end-radius: var(--_container-shape-start-end);\r
  border-end-end-radius: var(--_container-shape-end-end);\r
  border-end-start-radius: var(--_container-shape-end-start);\r
  display: flex;\r
  height: 100%;\r
  position: relative;\r
}\r
\r
.field-module_container__Vg8QO {\r
  align-items: center;\r
  border-radius: inherit;\r
  display: flex;\r
  flex: 1;\r
  max-height: 100%;\r
  min-height: 100%;\r
  min-width: min-content;\r
  position: relative;\r
}\r
\r
.field-module_start__hbiQQ {\r
  height: 100%;\r
  display: flex;\r
  position: relative;\r
  align-items: center;\r
  box-sizing: border-box;\r
  justify-content: center;\r
  color: var(--_leading-content-color);\r
}\r
.field-module_end__k4pEv {\r
  height: 100%;\r
  display: flex;\r
  position: relative;\r
  align-items: center;\r
  box-sizing: border-box;\r
  justify-content: center;\r
  color: var(--_trailing-content-color);\r
}\r
\r
.field-module_with-start__oQ4V1 .field-module_start__hbiQQ {\r
  margin-inline: var(--_with-leading-content-leading-space)\r
    var(--_content-space);\r
}\r
.field-module_with-end__v1BEg .field-module_end__k4pEv {\r
  margin-inline: var(--_content-space)\r
    var(--_with-trailing-content-trailing-space);\r
}\r
\r
.field-module_middle__o4DOl {\r
  display: flex;\r
  box-sizing: border-box;\r
  height: 100%;\r
  position: relative;\r
  align-items: stretch;\r
  align-self: baseline;\r
  flex: 1;\r
}\r
\r
.field-module_focused__yovQv .field-module_end__k4pEv {\r
  color: var(--_focus-trailing-content-color);\r
}\r
\r
.field-module_content__r4BW- {\r
  color: var(--_content-color);\r
  display: flex;\r
  flex: 1 1 0%;\r
  opacity: 0;\r
  transition: opacity 83ms cubic-bezier(0.2, 0, 0, 1) 0s;\r
}\r
.field-module_focused__yovQv .field-module_content__r4BW-,\r
.field-module_populated__Q-p-- .field-module_content__r4BW- {\r
  opacity: 1;\r
  transition-delay: 67ms;\r
}\r
\r
.field-module_input__AB2-O {\r
  caret-color: var(--_caret-color);\r
  overflow-x: hidden;\r
  text-align: inherit;\r
}\r
\r
.field-module_label__nLEGd {\r
  box-sizing: border-box;\r
  color: var(--_label-text-color);\r
  overflow: hidden;\r
  max-width: 100%;\r
  text-overflow: ellipsis;\r
  white-space: nowrap;\r
  z-index: 1;\r
  font-family: var(--_label-text-font);\r
  font-size: var(--_label-text-size);\r
  line-height: var(--_label-text-line-height);\r
  font-weight: var(--_label-text-weight);\r
  width: min-content;\r
  &.field-module_resting__WB4GE {\r
    position: absolute;\r
    top: var(--_top-space);\r
  }\r
  &.field-module_floating__cHtoV {\r
    font-size: var(--_label-text-populated-size);\r
    line-height: var(--_label-text-populated-line-height);\r
    transform-origin: top left;\r
  }\r
  &.field-module_visible__192Ro {\r
    opacity: 0;\r
  }\r
}\r
.field-module_error__Gwmtc .field-module_label__nLEGd {\r
  color: var(--_error-label-text-color);\r
}\r
\r
.field-module_input-wrapper__euPtU {\r
  all: unset;\r
  color: currentColor;\r
  font-family: var(--_content-font);\r
  font-size: var(--_content-size);\r
  line-height: var(--_content-line-height);\r
  font-weight: var(--_content-weight);\r
  width: 100%;\r
  overflow-wrap: revert;\r
  white-space: revert;\r
  display: flex;\r
  padding-top: var(--_top-space);\r
  padding-bottom: var(--_bottom-space);\r
  & > input,\r
  & > textarea {\r
    all: inherit;\r
    padding: 0;\r
  }\r
}\r
.field-module_field__OUiHT:not(.field-module_no-label__WTIud) .field-module_filled__lGXpV .field-module_input-wrapper__euPtU {\r
  padding-bottom: var(--_with-label-bottom-space);\r
  padding-top: calc(\r
    var(--_with-label-top-space) + var(--_label-text-populated-line-height)\r
  );\r
}\r
.field-module_field__OUiHT:not(.field-module_with-start__oQ4V1) .field-module_filled__lGXpV .field-module_input-wrapper__euPtU {\r
  padding-inline-start: var(--_leading-space);\r
}\r
.field-module_field__OUiHT:not(.field-module_with-end__v1BEg) .field-module_filled__lGXpV .field-module_input-wrapper__euPtU {\r
  padding-inline-end: var(--_trailing-space);\r
}\r
\r
.field-module_field__OUiHT:not(.field-module_no-label__WTIud) .field-module_outlined__7MFPd .field-module_input-wrapper__euPtU {\r
  padding-top: var(--_top-space);\r
  padding-bottom: var(--_bottom-space);\r
}\r
\r
.field-module_field__OUiHT:not(.field-module_with-start__oQ4V1) .field-module_outlined__7MFPd .field-module_input-wrapper__euPtU {\r
  padding-inline-start: max(\r
    var(--_leading-space),\r
    max(var(--_container-shape-start-start), var(--_container-shape-end-start)) +\r
      var(--_outline-label-padding)\r
  );\r
}\r
.field-module_field__OUiHT:not(.field-module_with-end__v1BEg) .field-module_outlined__7MFPd .field-module_input-wrapper__euPtU {\r
  padding-inline-end: max(\r
    var(--_trailing-space),\r
    max(var(--_container-shape-start-end), var(--_container-shape-end-end))\r
  );\r
}\r
\r
.field-module_background__lA8Sd {\r
  background-color: var(--_container-color);\r
  border-radius: inherit;\r
  inset: 0;\r
  position: absolute;\r
}\r
\r
.field-module_state-layer__C0so- {\r
  border-radius: inherit;\r
  inset: 0;\r
  pointer-events: none;\r
  position: absolute;\r
  visibility: hidden;\r
}\r
:hover .field-module_state-layer__C0so- {\r
  background: var(--_hover-state-layer-color);\r
  opacity: var(--_hover-state-layer-opacity);\r
}\r
.field-module_field__OUiHT:not(.field-module_disabled__-ZlOi):hover .field-module_state-layer__C0so- {\r
  visibility: visible;\r
}\r
\r
.field-module_active-indicator__EV61C {\r
  inset: auto 0 0 0;\r
  pointer-events: none;\r
  position: absolute;\r
  width: 100%;\r
  z-index: 1;\r
  &:before {\r
    border-bottom: var(--_active-indicator-height) solid\r
      var(--_active-indicator-color);\r
    inset: auto 0 0 0;\r
    content: '';\r
    position: absolute;\r
    width: 100%;\r
    border-bottom-color: var(--_hover-active-indicator-color);\r
    border-bottom-width: var(--_hover-active-indicator-height);\r
  }\r
  &:after {\r
    border-bottom: var(--_active-indicator-height) solid\r
      var(--_active-indicator-color);\r
    inset: auto 0 0 0;\r
    content: '';\r
    position: absolute;\r
    width: 100%;\r
    opacity: 0;\r
    transition: opacity 150ms cubic-bezier(0.2, 0, 0, 1);\r
    border-bottom-color: var(--_focus-active-indicator-color);\r
    border-bottom-width: var(--_focus-active-indicator-height);\r
  }\r
}\r
.field-module_focused__yovQv .field-module_active-indicator__EV61C:after {\r
  opacity: 1;\r
}\r
\r
.field-module_label-wrapper__rT6tK {\r
  inset: 0;\r
  pointer-events: none;\r
  position: absolute;\r
  text-align: initial;\r
}\r
\r
.field-module_field__OUiHT:not(.field-module_with-start__oQ4V1) .field-module_filled__lGXpV .field-module_label-wrapper__rT6tK {\r
  margin-inline-start: var(--_leading-space);\r
}\r
.field-module_field__OUiHT:not(.field-module_with-end__v1BEg) .field-module_filled__lGXpV .field-module_label-wrapper__rT6tK {\r
  margin-inline-end: var(--_trailing-space);\r
}\r
\r
.field-module_field__OUiHT:not(.field-module_with-start__oQ4V1) .field-module_outlined__7MFPd .field-module_label-wrapper__rT6tK {\r
  margin-inline-start: max(\r
    var(--_leading-space),\r
    max(var(--_container-shape-start-start), var(--_container-shape-end-start)) +\r
      var(--_outline-label-padding)\r
  );\r
}\r
.field-module_field__OUiHT:not(.field-module_with-end__v1BEg) .field-module_outlined__7MFPd .field-module_label-wrapper__rT6tK {\r
  margin-inline-end: max(\r
    var(--_trailing-space),\r
    max(var(--_container-shape-start-end), var(--_container-shape-end-end))\r
  );\r
}\r
\r
.field-module_outline__MLMKT {\r
  border-color: var(--_outline-color);\r
  border-radius: inherit;\r
  display: flex;\r
  pointer-events: none;\r
  height: 100%;\r
  position: absolute;\r
  width: 100%;\r
  z-index: 1;\r
}\r
\r
.field-module_field__OUiHT.field-module_focused__yovQv .field-module_outline__MLMKT {\r
  color: var(--_focus-outline-color);\r
  border-color: var(--_focus-outline-color);\r
}\r
.field-module_error__Gwmtc .field-module_outline__MLMKT {\r
  border-color: var(--_error-outline-color);\r
  color: var(--_error-outline-color);\r
}\r
\r
.field-module_outline-start__1g5Bi {\r
  border: inherit;\r
  border-radius: inherit;\r
  box-sizing: border-box;\r
  position: relative;\r
  padding-inline-start: max(\r
    var(--_leading-space),\r
    max(var(--_container-shape-start-start), var(--_container-shape-end-start)) +\r
      var(--_outline-label-padding)\r
  );\r
  &:before,\r
  &:after {\r
    border: inherit;\r
    content: '';\r
    inset: 0;\r
    position: absolute;\r
  }\r
  &:before {\r
    border-width: var(--_outline-width);\r
    border-inline-start-style: solid;\r
    border-inline-end-style: none;\r
    border-start-start-radius: inherit;\r
    border-start-end-radius: 0;\r
    border-end-start-radius: inherit;\r
    border-end-end-radius: 0;\r
    margin-inline-end: var(--_outline-label-padding);\r
    border-bottom-style: solid;\r
    border-top-style: solid;\r
  }\r
  &:after {\r
    border-width: var(--_focus-outline-width);\r
    border-inline-start-style: solid;\r
    border-inline-end-style: none;\r
    border-start-start-radius: inherit;\r
    border-start-end-radius: 0;\r
    border-end-start-radius: inherit;\r
    border-end-end-radius: 0;\r
    margin-inline-end: var(--_outline-label-padding);\r
    opacity: 0;\r
    transition: opacity 150ms cubic-bezier(0.2, 0, 0, 1);\r
    border-bottom-style: solid;\r
    border-top-style: solid;\r
  }\r
}\r
\r
.field-module_outline-notch__DkhHs {\r
  align-items: flex-start;\r
  border: inherit;\r
  display: flex;\r
  margin-inline-start: calc(-1 * var(--_outline-label-padding));\r
  margin-inline-end: var(--_outline-label-padding);\r
  max-width: calc(100% - var(--_leading-space) - var(--_trailing-space));\r
  padding: 0 var(--_outline-label-padding);\r
  position: relative;\r
}\r
.field-module_no-label__WTIud .field-module_outline-notch__DkhHs {\r
  display: none;\r
}\r
\r
.field-module_outline-end__u0aPt {\r
  border: inherit;\r
  border-radius: inherit;\r
  box-sizing: border-box;\r
  position: relative;\r
  flex-grow: 1;\r
  margin-inline-start: calc(-1 * var(--_outline-label-padding));\r
  &:before,\r
  &:after {\r
    border: inherit;\r
    content: '';\r
    inset: 0;\r
    position: absolute;\r
  }\r
  &:before {\r
    border-width: var(--_outline-width);\r
    border-inline-start-style: none;\r
    border-inline-end-style: solid;\r
    border-start-start-radius: 0;\r
    border-start-end-radius: inherit;\r
    border-end-start-radius: 0;\r
    border-end-end-radius: inherit;\r
    border-bottom-style: solid;\r
    border-top-style: solid;\r
  }\r
  &:after {\r
    border-width: var(--_focus-outline-width);\r
    border-inline-start-style: none;\r
    border-inline-end-style: solid;\r
    border-start-start-radius: 0;\r
    border-start-end-radius: inherit;\r
    border-end-start-radius: 0;\r
    border-end-end-radius: inherit;\r
    opacity: 0;\r
    transition: opacity 150ms cubic-bezier(0.2, 0, 0, 1);\r
    border-bottom-style: solid;\r
    border-top-style: solid;\r
  }\r
}\r
\r
.field-module_outline-panel-inactive__tdtyr {\r
  border-width: var(--_outline-width);\r
  content: '';\r
  inset: 0;\r
  position: absolute;\r
  border-left-style: none;\r
  border-right-style: none;\r
  border-top-style: none;\r
  border-color: inherit;\r
  border-bottom-style: solid;\r
  &:before,\r
  &:after {\r
    border: inherit;\r
    content: '';\r
    inset: 0;\r
    position: absolute;\r
    border-width: var(--_outline-width);\r
    border-top-style: solid;\r
    border-bottom: none;\r
    bottom: auto;\r
    transform: scaleX(1);\r
    transition: transform 150ms cubic-bezier(0.2, 0, 0, 1);\r
  }\r
  &:before {\r
    right: 50%;\r
    transform-origin: top left;\r
  }\r
  &:after {\r
    left: 50%;\r
    transform-origin: top right;\r
  }\r
}\r
\r
.field-module_outline-panel-active__BoFP8 {\r
  border: inherit;\r
  content: '';\r
  inset: 0;\r
  position: absolute;\r
  border-width: var(--_focus-outline-width);\r
  opacity: 0;\r
  border-top-style: none;\r
  border-left-style: none;\r
  border-right-style: none;\r
  border-bottom-style: solid;\r
  transition: opacity 150ms cubic-bezier(0.2, 0, 0, 1);\r
  &:before,\r
  &:after {\r
    border: inherit;\r
    content: '';\r
    inset: 0;\r
    position: absolute;\r
    border-width: var(--_focus-outline-width);\r
    border-top-style: solid;\r
    border-bottom: none;\r
    bottom: auto;\r
    transform: scaleX(1);\r
    transition: transform 150ms cubic-bezier(0.2, 0, 0, 1);\r
  }\r
  &:before {\r
    right: 50%;\r
    transform-origin: top left;\r
  }\r
  &:before {\r
    left: 50%;\r
    transform-origin: top right;\r
  }\r
}\r
\r
.field-module_focused__yovQv .field-module_outline-start__1g5Bi:after,\r
.field-module_focused__yovQv .field-module_outline-end__u0aPt:after,\r
.field-module_focused__yovQv .field-module_outline-panel-active__BoFP8 {\r
  opacity: 1;\r
}\r
.field-module_populated__Q-p-- .field-module_outline-panel-inactive__tdtyr:before,\r
.field-module_populated__Q-p-- .field-module_outline-panel-inactive__tdtyr:after,\r
.field-module_populated__Q-p-- .field-module_outline-panel-active__BoFP8:before,\r
.field-module_populated__Q-p-- .field-module_outline-panel-active__BoFP8:after,\r
.field-module_focused__yovQv .field-module_outline-panel-inactive__tdtyr:before,\r
.field-module_focused__yovQv .field-module_outline-panel-inactive__tdtyr:after,\r
.field-module_focused__yovQv .field-module_outline-panel-active__BoFP8:before,\r
.field-module_focused__yovQv .field-module_outline-panel-active__BoFP8:after {\r
  transform: scaleX(0);\r
}\r
\r
.field-module_outline-label__V41uw {\r
  display: flex;\r
  max-width: 100%;\r
  transform: translateY(calc(-100% + var(--_label-text-padding-bottom)));\r
}\r
`);const n_=e=>{const{disabled:t,className:n,label:o="",max:l,count:s,focused:u=!1,populated:d=!1,required:f=!1,children:p,leadingIcon:h,trailingIcon:y,error:v,errorText:x,supportingText:b,renderOutline:_,renderIndicator:S,renderBackground:$}=e,E=an(e,["disabled","className","label","max","count","focused","populated","required","children","leadingIcon","trailingIcon","error","errorText","supportingText","renderOutline","renderIndicator","renderBackground"]),N=ie.useId(),O=K=>{if(!o)return"";let J;J=K?u||d:!u&&!d;const W=`${o}${f?"*":""}`;return J?D.jsx(hx.span,{layoutId:N,transition:{duration:.15,easings:[qo(.2,0,0,1)]},"aria-hidden":!J,className:Ye(ke.label,!J&&ke.visible,K?ke.floating:ke.resting),children:W}):""},M=O(!0),I=O(!1),z=_==null?void 0:_(M),P=Ye(ke.field,v&&ke.error,u&&ke.focused,t&&ke.disabled,d&&ke.populated,!o&&ke["no-label"],!!h&&ke["with-start"],!!y&&ke["with-end"]);return D.jsxs("div",Object.assign({className:P},E,{children:[D.jsxs("div",{className:Ye(ke["container-overflow"],n),children:[$==null?void 0:$(),S==null?void 0:S(u),z,D.jsxs("div",{className:ke.container,children:[D.jsx("div",{className:ke.start,children:h}),D.jsxs("div",{className:ke.middle,children:[D.jsxs("span",{className:ke["label-wrapper"],children:[I,z?"":M]}),D.jsx("div",{className:ke.content,children:p})]}),D.jsx("div",{className:ke.end,children:y})]})]}),D.jsx(UD,{max:l,count:s,error:v,errorText:x,supportingText:b})]}))},HD=()=>D.jsxs(ie.Fragment,{children:[D.jsx("div",{className:ke.background}),D.jsx("div",{className:ke["state-layer"]})]}),WD=()=>D.jsx("div",{className:ke["active-indicator"]}),gy=e=>{const{children:t}=e,n=an(e,["children"]);return D.jsx(n_,Object.assign({},n,{className:ke.filled,renderBackground:HD,renderIndicator:WD,children:D.jsx("div",{className:ke["input-wrapper"],children:t})}))},YD=e=>D.jsxs("div",{className:ke.outline,children:[D.jsx("div",{className:ke["outline-start"]}),D.jsxs("div",{className:ke["outline-notch"],children:[D.jsx("div",{className:ke["outline-panel-inactive"]}),D.jsx("div",{className:ke["outline-panel-active"]}),D.jsx("div",{className:ke["outline-label"],children:e})]}),D.jsx("div",{className:ke["outline-end"]})]}),QD=e=>{const{children:t}=e,n=an(e,["children"]);return D.jsx(n_,Object.assign({},n,{className:ke.outlined,renderOutline:YD,children:D.jsx("div",{className:ke["input-wrapper"],children:t})}))};var xd={filled:"text-field-module_filled__bCfKF",outlined:"text-field-module_outlined__vwS7g",prefix:"text-field-module_prefix__9Zf4V",suffix:"text-field-module_suffix__itEyf"};lt(`.text-field-module_filled__bCfKF {\r
  --_leading-space: var(--md-filled-text-field-leading-space, 16px);\r
  --_trailing-space: var(--md-filled-text-field-trailing-space, 16px);\r
  --_top-space: var(--md-filled-text-field-top-space, 16px);\r
  --_bottom-space: var(--md-filled-text-field-bottom-space, 16px);\r
  --_input-text-prefix-trailing-space: var(\r
    --md-filled-text-field-input-text-prefix-trailing-space,\r
    2px\r
  );\r
  --_input-text-suffix-leading-space: var(\r
    --md-filled-text-field-input-text-suffix-leading-space,\r
    2px\r
  );\r
  --_with-label-top-space: var(\r
    --md-filled-text-field-with-label-top-space,\r
    8px\r
  );\r
  --_with-label-bottom-space: var(\r
    --md-filled-text-field-with-label-bottom-space,\r
    8px\r
  );\r
  --_focus-caret-color: var(\r
    --md-filled-text-field-focus-caret-color,\r
    var(--md-sys-color-primary)\r
  );\r
  --_active-indicator-color: var(\r
    --md-filled-text-field-active-indicator-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_active-indicator-height: var(\r
    --md-filled-text-field-active-indicator-height,\r
    1px\r
  );\r
  --_caret-color: var(\r
    --md-filled-text-field-caret-color,\r
    var(--md-sys-color-primary)\r
  );\r
  --_container-color: var(\r
    --md-filled-text-field-container-color,\r
    var(--md-sys-color-surface-container-highest)\r
  );\r
  --_container-shape-start-start: var(\r
    --md-filled-text-field-container-shape-start-start,\r
    var(--md-filled-text-field-container-shape, 4px)\r
  );\r
  --_container-shape-start-end: var(\r
    --md-filled-text-field-container-shape-start-end,\r
    var(--md-filled-text-field-container-shape, 4px)\r
  );\r
  --_container-shape-end-end: var(\r
    --md-filled-text-field-container-shape-end-end,\r
    var(--md-filled-text-field-container-shape, 0px)\r
  );\r
  --_container-shape-end-start: var(\r
    --md-filled-text-field-container-shape-end-start,\r
    var(--md-filled-text-field-container-shape, 0px)\r
  );\r
  --_disabled-active-indicator-color: var(\r
    --md-filled-text-field-disabled-active-indicator-color,\r
    var(--md-sys-color-on-surface)\r
  );\r
  --_disabled-active-indicator-height: var(\r
    --md-filled-text-field-disabled-active-indicator-height,\r
    1px\r
  );\r
  --_disabled-active-indicator-opacity: var(\r
    --md-filled-text-field-disabled-active-indicator-opacity,\r
    0.38\r
  );\r
  --_disabled-container-color: var(\r
    --md-filled-text-field-disabled-container-color,\r
    var(--md-sys-color-on-surface)\r
  );\r
  --_disabled-container-opacity: var(\r
    --md-filled-text-field-disabled-container-opacity,\r
    0.04\r
  );\r
  --_disabled-input-text-color: var(\r
    --md-filled-text-field-disabled-input-text-color,\r
    var(--md-sys-color-on-surface)\r
  );\r
  --_disabled-input-text-opacity: var(\r
    --md-filled-text-field-disabled-input-text-opacity,\r
    0.38\r
  );\r
  --_disabled-label-text-color: var(\r
    --md-filled-text-field-disabled-label-text-color,\r
    var(--md-sys-color-on-surface)\r
  );\r
  --_disabled-label-text-opacity: var(\r
    --md-filled-text-field-disabled-label-text-opacity,\r
    0.38\r
  );\r
  --_disabled-leading-icon-color: var(\r
    --md-filled-text-field-disabled-leading-icon-color,\r
    var(--md-sys-color-on-surface)\r
  );\r
  --_disabled-leading-icon-opacity: var(\r
    --md-filled-text-field-disabled-leading-icon-opacity,\r
    0.38\r
  );\r
  --_disabled-supporting-text-color: var(\r
    --md-filled-text-field-disabled-supporting-text-color,\r
    var(--md-sys-color-on-surface)\r
  );\r
  --_disabled-supporting-text-opacity: var(\r
    --md-filled-text-field-disabled-supporting-text-opacity,\r
    0.38\r
  );\r
  --_disabled-trailing-icon-color: var(\r
    --md-filled-text-field-disabled-trailing-icon-color,\r
    var(--md-sys-color-on-surface)\r
  );\r
  --_disabled-trailing-icon-opacity: var(\r
    --md-filled-text-field-disabled-trailing-icon-opacity,\r
    0.38\r
  );\r
  --_error-active-indicator-color: var(\r
    --md-filled-text-field-error-active-indicator-color,\r
    var(--md-sys-color-error)\r
  );\r
  --_error-focus-active-indicator-color: var(\r
    --md-filled-text-field-error-focus-active-indicator-color,\r
    var(--md-sys-color-error)\r
  );\r
  --_error-focus-caret-color: var(\r
    --md-filled-text-field-error-focus-caret-color,\r
    var(--md-sys-color-error)\r
  );\r
  --_error-focus-input-text-color: var(\r
    --md-filled-text-field-error-focus-input-text-color,\r
    var(--md-sys-color-on-surface)\r
  );\r
  --_error-focus-label-text-color: var(\r
    --md-filled-text-field-error-focus-label-text-color,\r
    var(--md-sys-color-error)\r
  );\r
  --_error-focus-leading-icon-color: var(\r
    --md-filled-text-field-error-focus-leading-icon-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_error-focus-supporting-text-color: var(\r
    --md-filled-text-field-error-focus-supporting-text-color,\r
    var(--md-sys-color-error)\r
  );\r
  --_error-focus-trailing-icon-color: var(\r
    --md-filled-text-field-error-focus-trailing-icon-color,\r
    var(--md-sys-color-error)\r
  );\r
  --_error-hover-active-indicator-color: var(\r
    --md-filled-text-field-error-hover-active-indicator-color,\r
    var(--md-sys-color-on-error-container)\r
  );\r
  --_error-hover-input-text-color: var(\r
    --md-filled-text-field-error-hover-input-text-color,\r
    var(--md-sys-color-on-surface)\r
  );\r
  --_error-hover-label-text-color: var(\r
    --md-filled-text-field-error-hover-label-text-color,\r
    var(--md-sys-color-on-error-container)\r
  );\r
  --_error-hover-leading-icon-color: var(\r
    --md-filled-text-field-error-hover-leading-icon-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_error-hover-state-layer-color: var(\r
    --md-filled-text-field-error-hover-state-layer-color,\r
    var(--md-sys-color-on-surface)\r
  );\r
  --_error-hover-state-layer-opacity: var(\r
    --md-filled-text-field-error-hover-state-layer-opacity,\r
    0.08\r
  );\r
  --_error-hover-supporting-text-color: var(\r
    --md-filled-text-field-error-hover-supporting-text-color,\r
    var(--md-sys-color-error)\r
  );\r
  --_error-hover-trailing-icon-color: var(\r
    --md-filled-text-field-error-hover-trailing-icon-color,\r
    var(--md-sys-color-on-error-container)\r
  );\r
  --_error-input-text-color: var(\r
    --md-filled-text-field-error-input-text-color,\r
    var(--md-sys-color-on-surface)\r
  );\r
  --_error-label-text-color: var(\r
    --md-filled-text-field-error-label-text-color,\r
    var(--md-sys-color-error)\r
  );\r
  --_error-leading-icon-color: var(\r
    --md-filled-text-field-error-leading-icon-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_error-supporting-text-color: var(\r
    --md-filled-text-field-error-supporting-text-color,\r
    var(--md-sys-color-error)\r
  );\r
  --_error-trailing-icon-color: var(\r
    --md-filled-text-field-error-trailing-icon-color,\r
    var(--md-sys-color-error)\r
  );\r
  --_focus-active-indicator-color: var(\r
    --md-filled-text-field-focus-active-indicator-color,\r
    var(--md-sys-color-primary)\r
  );\r
  --_focus-active-indicator-height: var(\r
    --md-filled-text-field-focus-active-indicator-height,\r
    3px\r
  );\r
  --_focus-input-text-color: var(\r
    --md-filled-text-field-focus-input-text-color,\r
    var(--md-sys-color-on-surface)\r
  );\r
  --_focus-label-text-color: var(\r
    --md-filled-text-field-focus-label-text-color,\r
    var(--md-sys-color-primary)\r
  );\r
  --_focus-leading-icon-color: var(\r
    --md-filled-text-field-focus-leading-icon-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_focus-supporting-text-color: var(\r
    --md-filled-text-field-focus-supporting-text-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_focus-trailing-icon-color: var(\r
    --md-filled-text-field-focus-trailing-icon-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_hover-active-indicator-color: var(\r
    --md-filled-text-field-hover-active-indicator-color,\r
    var(--md-sys-color-on-surface)\r
  );\r
  --_hover-active-indicator-height: var(\r
    --md-filled-text-field-hover-active-indicator-height,\r
    1px\r
  );\r
  --_hover-input-text-color: var(\r
    --md-filled-text-field-hover-input-text-color,\r
    var(--md-sys-color-on-surface)\r
  );\r
  --_hover-label-text-color: var(\r
    --md-filled-text-field-hover-label-text-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_hover-leading-icon-color: var(\r
    --md-filled-text-field-hover-leading-icon-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_hover-state-layer-color: var(\r
    --md-filled-text-field-hover-state-layer-color,\r
    var(--md-sys-color-on-surface)\r
  );\r
  --_hover-state-layer-opacity: var(\r
    --md-filled-text-field-hover-state-layer-opacity,\r
    0.08\r
  );\r
  --_hover-supporting-text-color: var(\r
    --md-filled-text-field-hover-supporting-text-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_hover-trailing-icon-color: var(\r
    --md-filled-text-field-hover-trailing-icon-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_input-text-color: var(\r
    --md-filled-text-field-input-text-color,\r
    var(--md-sys-color-on-surface)\r
  );\r
  --_input-text-font: var(\r
    --md-filled-text-field-input-text-font,\r
    var(\r
      --md-sys-typescale-body-large-font,\r
      var(--md-ref-typeface-plain, Roboto)\r
    )\r
  );\r
  --_input-text-line-height: var(\r
    --md-filled-text-field-input-text-line-height,\r
    var(--md-sys-typescale-body-large-line-height, 1.5rem)\r
  );\r
  --_input-text-placeholder-color: var(\r
    --md-filled-text-field-input-text-placeholder-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_input-text-prefix-color: var(\r
    --md-filled-text-field-input-text-prefix-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_input-text-size: var(\r
    --md-filled-text-field-input-text-size,\r
    var(--md-sys-typescale-body-large-size, 1rem)\r
  );\r
  --_input-text-suffix-color: var(\r
    --md-filled-text-field-input-text-suffix-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_input-text-weight: var(\r
    --md-filled-text-field-input-text-weight,\r
    var(\r
      --md-sys-typescale-body-large-weight,\r
      var(--md-ref-typeface-weight-regular, 400)\r
    )\r
  );\r
  --_label-text-color: var(\r
    --md-filled-text-field-label-text-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_label-text-font: var(\r
    --md-filled-text-field-label-text-font,\r
    var(\r
      --md-sys-typescale-body-large-font,\r
      var(--md-ref-typeface-plain, Roboto)\r
    )\r
  );\r
  --_label-text-line-height: var(\r
    --md-filled-text-field-label-text-line-height,\r
    var(--md-sys-typescale-body-large-line-height, 1.5rem)\r
  );\r
  --_label-text-populated-line-height: var(\r
    --md-filled-text-field-label-text-populated-line-height,\r
    var(--md-sys-typescale-body-small-line-height, 1rem)\r
  );\r
  --_label-text-populated-size: var(\r
    --md-filled-text-field-label-text-populated-size,\r
    var(--md-sys-typescale-body-small-size, 0.75rem)\r
  );\r
  --_label-text-size: var(\r
    --md-filled-text-field-label-text-size,\r
    var(--md-sys-typescale-body-large-size, 1rem)\r
  );\r
  --_label-text-weight: var(\r
    --md-filled-text-field-label-text-weight,\r
    var(\r
      --md-sys-typescale-body-large-weight,\r
      var(--md-ref-typeface-weight-regular, 400)\r
    )\r
  );\r
  --_leading-icon-color: var(\r
    --md-filled-text-field-leading-icon-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_leading-icon-size: var(--md-filled-text-field-leading-icon-size, 24px);\r
  --_supporting-text-color: var(\r
    --md-filled-text-field-supporting-text-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_supporting-text-font: var(\r
    --md-filled-text-field-supporting-text-font,\r
    var(\r
      --md-sys-typescale-body-small-font,\r
      var(--md-ref-typeface-plain, Roboto)\r
    )\r
  );\r
  --_supporting-text-leading-space: var(\r
    --md-filled-field-supporting-text-leading-space,\r
    16px\r
  );\r
  --_supporting-text-line-height: var(\r
    --md-filled-text-field-supporting-text-line-height,\r
    var(--md-sys-typescale-body-small-line-height, 1rem)\r
  );\r
  --_supporting-text-size: var(\r
    --md-filled-text-field-supporting-text-size,\r
    var(--md-sys-typescale-body-small-size, 0.75rem)\r
  );\r
  --_supporting-text-top-space: var(\r
    --md-filled-field-supporting-text-top-space,\r
    4px\r
  );\r
  --_supporting-text-trailing-space: var(\r
    --md-filled-field-supporting-text-trailing-space,\r
    16px\r
  );\r
  --_supporting-text-weight: var(\r
    --md-filled-text-field-supporting-text-weight,\r
    var(\r
      --md-sys-typescale-body-small-weight,\r
      var(--md-ref-typeface-weight-regular, 400)\r
    )\r
  );\r
  --_trailing-icon-color: var(\r
    --md-filled-text-field-trailing-icon-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_trailing-icon-size: var(--md-filled-text-field-trailing-icon-size, 24px);\r
  --md-filled-field-active-indicator-color: var(--_active-indicator-color);\r
  --md-filled-field-active-indicator-height: var(--_active-indicator-height);\r
  --md-filled-field-bottom-space: var(--_bottom-space);\r
  --md-filled-field-container-color: var(--_container-color);\r
  --md-filled-field-container-shape-end-end: var(--_container-shape-end-end);\r
  --md-filled-field-container-shape-end-start: var(\r
    --_container-shape-end-start\r
  );\r
  --md-filled-field-container-shape-start-end: var(\r
    --_container-shape-start-end\r
  );\r
  --md-filled-field-container-shape-start-start: var(\r
    --_container-shape-start-start\r
  );\r
  --md-filled-field-content-color: var(--_input-text-color);\r
  --md-filled-field-content-font: var(--_input-text-font);\r
  --md-filled-field-content-line-height: var(--_input-text-line-height);\r
  --md-filled-field-content-size: var(--_input-text-size);\r
  --md-filled-field-content-weight: var(--_input-text-weight);\r
  --md-filled-field-disabled-active-indicator-color: var(\r
    --_disabled-active-indicator-color\r
  );\r
  --md-filled-field-disabled-active-indicator-height: var(\r
    --_disabled-active-indicator-height\r
  );\r
  --md-filled-field-disabled-active-indicator-opacity: var(\r
    --_disabled-active-indicator-opacity\r
  );\r
  --md-filled-field-disabled-container-color: var(--_disabled-container-color);\r
  --md-filled-field-disabled-container-opacity: var(\r
    --_disabled-container-opacity\r
  );\r
  --md-filled-field-disabled-content-color: var(--_disabled-input-text-color);\r
  --md-filled-field-disabled-content-opacity: var(\r
    --_disabled-input-text-opacity\r
  );\r
  --md-filled-field-disabled-label-text-color: var(\r
    --_disabled-label-text-color\r
  );\r
  --md-filled-field-disabled-label-text-opacity: var(\r
    --_disabled-label-text-opacity\r
  );\r
  --md-filled-field-disabled-leading-content-color: var(\r
    --_disabled-leading-icon-color\r
  );\r
  --md-filled-field-disabled-leading-content-opacity: var(\r
    --_disabled-leading-icon-opacity\r
  );\r
  --md-filled-field-disabled-supporting-text-color: var(\r
    --_disabled-supporting-text-color\r
  );\r
  --md-filled-field-disabled-supporting-text-opacity: var(\r
    --_disabled-supporting-text-opacity\r
  );\r
  --md-filled-field-disabled-trailing-content-color: var(\r
    --_disabled-trailing-icon-color\r
  );\r
  --md-filled-field-disabled-trailing-content-opacity: var(\r
    --_disabled-trailing-icon-opacity\r
  );\r
  --md-filled-field-error-active-indicator-color: var(\r
    --_error-active-indicator-color\r
  );\r
  --md-filled-field-error-content-color: var(--_error-input-text-color);\r
  --md-filled-field-error-focus-active-indicator-color: var(\r
    --_error-focus-active-indicator-color\r
  );\r
  --md-filled-field-error-focus-content-color: var(\r
    --_error-focus-input-text-color\r
  );\r
  --md-filled-field-error-focus-label-text-color: var(\r
    --_error-focus-label-text-color\r
  );\r
  --md-filled-field-error-focus-leading-content-color: var(\r
    --_error-focus-leading-icon-color\r
  );\r
  --md-filled-field-error-focus-supporting-text-color: var(\r
    --_error-focus-supporting-text-color\r
  );\r
  --md-filled-field-error-focus-trailing-content-color: var(\r
    --_error-focus-trailing-icon-color\r
  );\r
  --md-filled-field-error-hover-active-indicator-color: var(\r
    --_error-hover-active-indicator-color\r
  );\r
  --md-filled-field-error-hover-content-color: var(\r
    --_error-hover-input-text-color\r
  );\r
  --md-filled-field-error-hover-label-text-color: var(\r
    --_error-hover-label-text-color\r
  );\r
  --md-filled-field-error-hover-leading-content-color: var(\r
    --_error-hover-leading-icon-color\r
  );\r
  --md-filled-field-error-hover-state-layer-color: var(\r
    --_error-hover-state-layer-color\r
  );\r
  --md-filled-field-error-hover-state-layer-opacity: var(\r
    --_error-hover-state-layer-opacity\r
  );\r
  --md-filled-field-error-hover-supporting-text-color: var(\r
    --_error-hover-supporting-text-color\r
  );\r
  --md-filled-field-error-hover-trailing-content-color: var(\r
    --_error-hover-trailing-icon-color\r
  );\r
  --md-filled-field-error-label-text-color: var(--_error-label-text-color);\r
  --md-filled-field-error-leading-content-color: var(\r
    --_error-leading-icon-color\r
  );\r
  --md-filled-field-error-supporting-text-color: var(\r
    --_error-supporting-text-color\r
  );\r
  --md-filled-field-error-trailing-content-color: var(\r
    --_error-trailing-icon-color\r
  );\r
  --md-filled-field-focus-active-indicator-color: var(\r
    --_focus-active-indicator-color\r
  );\r
  --md-filled-field-focus-active-indicator-height: var(\r
    --_focus-active-indicator-height\r
  );\r
  --md-filled-field-focus-content-color: var(--_focus-input-text-color);\r
  --md-filled-field-focus-label-text-color: var(--_focus-label-text-color);\r
  --md-filled-field-focus-leading-content-color: var(\r
    --_focus-leading-icon-color\r
  );\r
  --md-filled-field-focus-supporting-text-color: var(\r
    --_focus-supporting-text-color\r
  );\r
  --md-filled-field-focus-trailing-content-color: var(\r
    --_focus-trailing-icon-color\r
  );\r
  --md-filled-field-hover-active-indicator-color: var(\r
    --_hover-active-indicator-color\r
  );\r
  --md-filled-field-hover-active-indicator-height: var(\r
    --_hover-active-indicator-height\r
  );\r
  --md-filled-field-hover-content-color: var(--_hover-input-text-color);\r
  --md-filled-field-hover-label-text-color: var(--_hover-label-text-color);\r
  --md-filled-field-hover-leading-content-color: var(\r
    --_hover-leading-icon-color\r
  );\r
  --md-filled-field-hover-state-layer-color: var(--_hover-state-layer-color);\r
  --md-filled-field-hover-state-layer-opacity: var(\r
    --_hover-state-layer-opacity\r
  );\r
  --md-filled-field-hover-supporting-text-color: var(\r
    --_hover-supporting-text-color\r
  );\r
  --md-filled-field-hover-trailing-content-color: var(\r
    --_hover-trailing-icon-color\r
  );\r
  --md-filled-field-label-text-color: var(--_label-text-color);\r
  --md-filled-field-label-text-font: var(--_label-text-font);\r
  --md-filled-field-label-text-line-height: var(--_label-text-line-height);\r
  --md-filled-field-label-text-populated-line-height: var(\r
    --_label-text-populated-line-height\r
  );\r
  --md-filled-field-label-text-populated-size: var(\r
    --_label-text-populated-size\r
  );\r
  --md-filled-field-label-text-size: var(--_label-text-size);\r
  --md-filled-field-label-text-weight: var(--_label-text-weight);\r
  --md-filled-field-leading-content-color: var(--_leading-icon-color);\r
  --md-filled-field-leading-space: var(--_leading-space);\r
  --md-filled-field-supporting-text-color: var(--_supporting-text-color);\r
  --md-filled-field-supporting-text-font: var(--_supporting-text-font);\r
  --md-filled-field-supporting-text-line-height: var(\r
    --_supporting-text-line-height\r
  );\r
  --md-filled-field-supporting-text-size: var(--_supporting-text-size);\r
  --md-filled-field-supporting-text-weight: var(--_supporting-text-weight);\r
  --md-filled-field-top-space: var(--_top-space);\r
  --md-filled-field-trailing-content-color: var(--_trailing-icon-color);\r
  --md-filled-field-trailing-space: var(--_trailing-space);\r
  --md-filled-field-with-label-bottom-space: var(--_with-label-bottom-space);\r
  --md-filled-field-with-label-top-space: var(--_with-label-top-space);\r
}\r
\r
.text-field-module_outlined__vwS7g {\r
  --_leading-space: var(--md-outlined-text-field-leading-space, 16px);\r
  --_trailing-space: var(--md-outlined-text-field-trailing-space, 16px);\r
  --_top-space: var(--md-outlined-text-field-top-space, 16px);\r
  --_bottom-space: var(--md-outlined-text-field-bottom-space, 16px);\r
  --_input-text-prefix-trailing-space: var(\r
    --md-outlined-text-field-input-text-prefix-trailing-space,\r
    2px\r
  );\r
  --_input-text-suffix-leading-space: var(\r
    --md-outlined-text-field-input-text-suffix-leading-space,\r
    2px\r
  );\r
  --_focus-caret-color: var(\r
    --md-outlined-text-field-focus-caret-color,\r
    var(--md-sys-color-primary)\r
  );\r
  --_caret-color: var(\r
    --md-outlined-text-field-caret-color,\r
    var(--md-sys-color-primary)\r
  );\r
  --_container-shape: var(--md-outlined-text-field-container-shape, 4px);\r
  --_disabled-input-text-color: var(\r
    --md-outlined-text-field-disabled-input-text-color,\r
    var(--md-sys-color-on-surface)\r
  );\r
  --_disabled-input-text-opacity: var(\r
    --md-outlined-text-field-disabled-input-text-opacity,\r
    0.38\r
  );\r
  --_disabled-label-text-color: var(\r
    --md-outlined-text-field-disabled-label-text-color,\r
    var(--md-sys-color-on-surface)\r
  );\r
  --_disabled-label-text-opacity: var(\r
    --md-outlined-text-field-disabled-label-text-opacity,\r
    0.38\r
  );\r
  --_disabled-leading-icon-color: var(\r
    --md-outlined-text-field-disabled-leading-icon-color,\r
    var(--md-sys-color-on-surface)\r
  );\r
  --_disabled-leading-icon-opacity: var(\r
    --md-outlined-text-field-disabled-leading-icon-opacity,\r
    0.38\r
  );\r
  --_disabled-outline-color: var(\r
    --md-outlined-text-field-disabled-outline-color,\r
    var(--md-sys-color-on-surface)\r
  );\r
  --_disabled-outline-opacity: var(\r
    --md-outlined-text-field-disabled-outline-opacity,\r
    0.12\r
  );\r
  --_disabled-outline-width: var(\r
    --md-outlined-text-field-disabled-outline-width,\r
    1px\r
  );\r
  --_disabled-supporting-text-color: var(\r
    --md-outlined-text-field-disabled-supporting-text-color,\r
    var(--md-sys-color-on-surface)\r
  );\r
  --_disabled-supporting-text-opacity: var(\r
    --md-outlined-text-field-disabled-supporting-text-opacity,\r
    0.38\r
  );\r
  --_disabled-trailing-icon-color: var(\r
    --md-outlined-text-field-disabled-trailing-icon-color,\r
    var(--md-sys-color-on-surface)\r
  );\r
  --_disabled-trailing-icon-opacity: var(\r
    --md-outlined-text-field-disabled-trailing-icon-opacity,\r
    0.38\r
  );\r
  --_error-focus-caret-color: var(\r
    --md-outlined-text-field-error-focus-caret-color,\r
    var(--md-sys-color-error)\r
  );\r
  --_error-focus-input-text-color: var(\r
    --md-outlined-text-field-error-focus-input-text-color,\r
    var(--md-sys-color-on-surface)\r
  );\r
  --_error-focus-label-text-color: var(\r
    --md-outlined-text-field-error-focus-label-text-color,\r
    var(--md-sys-color-error)\r
  );\r
  --_error-focus-leading-icon-color: var(\r
    --md-outlined-text-field-error-focus-leading-icon-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_error-focus-outline-color: var(\r
    --md-outlined-text-field-error-focus-outline-color,\r
    var(--md-sys-color-error)\r
  );\r
  --_error-focus-supporting-text-color: var(\r
    --md-outlined-text-field-error-focus-supporting-text-color,\r
    var(--md-sys-color-error)\r
  );\r
  --_error-focus-trailing-icon-color: var(\r
    --md-outlined-text-field-error-focus-trailing-icon-color,\r
    var(--md-sys-color-error)\r
  );\r
  --_error-hover-input-text-color: var(\r
    --md-outlined-text-field-error-hover-input-text-color,\r
    var(--md-sys-color-on-surface)\r
  );\r
  --_error-hover-label-text-color: var(\r
    --md-outlined-text-field-error-hover-label-text-color,\r
    var(--md-sys-color-on-error-container)\r
  );\r
  --_error-hover-leading-icon-color: var(\r
    --md-outlined-text-field-error-hover-leading-icon-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_error-hover-outline-color: var(\r
    --md-outlined-text-field-error-hover-outline-color,\r
    var(--md-sys-color-on-error-container)\r
  );\r
  --_error-hover-supporting-text-color: var(\r
    --md-outlined-text-field-error-hover-supporting-text-color,\r
    var(--md-sys-color-error)\r
  );\r
  --_error-hover-trailing-icon-color: var(\r
    --md-outlined-text-field-error-hover-trailing-icon-color,\r
    var(--md-sys-color-on-error-container)\r
  );\r
  --_error-input-text-color: var(\r
    --md-outlined-text-field-error-input-text-color,\r
    var(--md-sys-color-on-surface)\r
  );\r
  --_error-label-text-color: var(\r
    --md-outlined-text-field-error-label-text-color,\r
    var(--md-sys-color-error)\r
  );\r
  --_error-leading-icon-color: var(\r
    --md-outlined-text-field-error-leading-icon-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_error-outline-color: var(\r
    --md-outlined-text-field-error-outline-color,\r
    var(--md-sys-color-error)\r
  );\r
  --_error-supporting-text-color: var(\r
    --md-outlined-text-field-error-supporting-text-color,\r
    var(--md-sys-color-error)\r
  );\r
  --_error-trailing-icon-color: var(\r
    --md-outlined-text-field-error-trailing-icon-color,\r
    var(--md-sys-color-error)\r
  );\r
  --_focus-input-text-color: var(\r
    --md-outlined-text-field-focus-input-text-color,\r
    var(--md-sys-color-on-surface)\r
  );\r
  --_focus-label-text-color: var(\r
    --md-outlined-text-field-focus-label-text-color,\r
    var(--md-sys-color-primary)\r
  );\r
  --_focus-leading-icon-color: var(\r
    --md-outlined-text-field-focus-leading-icon-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_focus-outline-color: var(\r
    --md-outlined-text-field-focus-outline-color,\r
    var(--md-sys-color-primary)\r
  );\r
  --_focus-outline-width: var(\r
    --md-outlined-text-field-focus-outline-width,\r
    3px\r
  );\r
  --_focus-supporting-text-color: var(\r
    --md-outlined-text-field-focus-supporting-text-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_focus-trailing-icon-color: var(\r
    --md-outlined-text-field-focus-trailing-icon-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_hover-input-text-color: var(\r
    --md-outlined-text-field-hover-input-text-color,\r
    var(--md-sys-color-on-surface)\r
  );\r
  --_hover-label-text-color: var(\r
    --md-outlined-text-field-hover-label-text-color,\r
    var(--md-sys-color-on-surface)\r
  );\r
  --_hover-leading-icon-color: var(\r
    --md-outlined-text-field-hover-leading-icon-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_hover-outline-color: var(\r
    --md-outlined-text-field-hover-outline-color,\r
    var(--md-sys-color-on-surface)\r
  );\r
  --_hover-outline-width: var(\r
    --md-outlined-text-field-hover-outline-width,\r
    1px\r
  );\r
  --_hover-supporting-text-color: var(\r
    --md-outlined-text-field-hover-supporting-text-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_hover-trailing-icon-color: var(\r
    --md-outlined-text-field-hover-trailing-icon-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_input-text-color: var(\r
    --md-outlined-text-field-input-text-color,\r
    var(--md-sys-color-on-surface)\r
  );\r
  --_input-text-font: var(\r
    --md-outlined-text-field-input-text-font,\r
    var(\r
      --md-sys-typescale-body-large-font,\r
      var(--md-ref-typeface-plain, Roboto)\r
    )\r
  );\r
  --_input-text-line-height: var(\r
    --md-outlined-text-field-input-text-line-height,\r
    var(--md-sys-typescale-body-large-line-height, 1.5rem)\r
  );\r
  --_input-text-placeholder-color: var(\r
    --md-outlined-text-field-input-text-placeholder-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_input-text-prefix-color: var(\r
    --md-outlined-text-field-input-text-prefix-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_input-text-size: var(\r
    --md-outlined-text-field-input-text-size,\r
    var(--md-sys-typescale-body-large-size, 1rem)\r
  );\r
  --_input-text-suffix-color: var(\r
    --md-outlined-text-field-input-text-suffix-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_input-text-weight: var(\r
    --md-outlined-text-field-input-text-weight,\r
    var(\r
      --md-sys-typescale-body-large-weight,\r
      var(--md-ref-typeface-weight-regular, 400)\r
    )\r
  );\r
  --_label-text-color: var(\r
    --md-outlined-text-field-label-text-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_label-text-font: var(\r
    --md-outlined-text-field-label-text-font,\r
    var(\r
      --md-sys-typescale-body-large-font,\r
      var(--md-ref-typeface-plain, Roboto)\r
    )\r
  );\r
  --_label-text-line-height: var(\r
    --md-outlined-text-field-label-text-line-height,\r
    var(--md-sys-typescale-body-large-line-height, 1.5rem)\r
  );\r
  --_label-text-populated-line-height: var(\r
    --md-outlined-text-field-label-text-populated-line-height,\r
    var(--md-sys-typescale-body-small-line-height, 1rem)\r
  );\r
  --_label-text-populated-size: var(\r
    --md-outlined-text-field-label-text-populated-size,\r
    var(--md-sys-typescale-body-small-size, 0.75rem)\r
  );\r
  --_label-text-size: var(\r
    --md-outlined-text-field-label-text-size,\r
    var(--md-sys-typescale-body-large-size, 1rem)\r
  );\r
  --_label-text-weight: var(\r
    --md-outlined-text-field-label-text-weight,\r
    var(\r
      --md-sys-typescale-body-large-weight,\r
      var(--md-ref-typeface-weight-regular, 400)\r
    )\r
  );\r
  --_leading-icon-color: var(\r
    --md-outlined-text-field-leading-icon-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_leading-icon-size: var(--md-outlined-text-field-leading-icon-size, 24px);\r
  --_outline-color: var(\r
    --md-outlined-text-field-outline-color,\r
    var(--md-sys-color-outline)\r
  );\r
  --_outline-width: var(--md-outlined-text-field-outline-width, 1px);\r
  --_supporting-text-color: var(\r
    --md-outlined-text-field-supporting-text-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_supporting-text-font: var(\r
    --md-outlined-text-field-supporting-text-font,\r
    var(\r
      --md-sys-typescale-body-small-font,\r
      var(--md-ref-typeface-plain, Roboto)\r
    )\r
  );\r
  --_supporting-text-leading-space: var(\r
    --md-outlined-field-supporting-text-leading-space,\r
    16px\r
  );\r
  --_supporting-text-line-height: var(\r
    --md-outlined-text-field-supporting-text-line-height,\r
    var(--md-sys-typescale-body-small-line-height, 1rem)\r
  );\r
  --_supporting-text-size: var(\r
    --md-outlined-text-field-supporting-text-size,\r
    var(--md-sys-typescale-body-small-size, 0.75rem)\r
  );\r
  --_supporting-text-top-space: var(\r
    --md-outlined-field-supporting-text-top-space,\r
    4px\r
  );\r
  --_supporting-text-trailing-space: var(\r
    --md-outlined-field-supporting-text-trailing-space,\r
    16px\r
  );\r
  --_supporting-text-weight: var(\r
    --md-outlined-text-field-supporting-text-weight,\r
    var(\r
      --md-sys-typescale-body-small-weight,\r
      var(--md-ref-typeface-weight-regular, 400)\r
    )\r
  );\r
  --_trailing-icon-color: var(\r
    --md-outlined-text-field-trailing-icon-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_trailing-icon-size: var(--md-outlined-text-field-trailing-icon-size, 24px);\r
  --_container-shape-start-start: var(\r
    --md-outlined-text-field-container-shape-start-start,\r
    var(--_container-shape)\r
  );\r
  --_container-shape-start-end: var(\r
    --md-outlined-text-field-container-shape-start-end,\r
    var(--_container-shape)\r
  );\r
  --_container-shape-end-end: var(\r
    --md-outlined-text-field-container-shape-end-end,\r
    var(--_container-shape)\r
  );\r
  --_container-shape-end-start: var(\r
    --md-outlined-text-field-container-shape-end-start,\r
    var(--_container-shape)\r
  );\r
  --md-outlined-field-bottom-space: var(--_bottom-space);\r
  --md-outlined-field-container-shape-end-end: var(--_container-shape-end-end);\r
  --md-outlined-field-container-shape-end-start: var(\r
    --_container-shape-end-start\r
  );\r
  --md-outlined-field-container-shape-start-end: var(\r
    --_container-shape-start-end\r
  );\r
  --md-outlined-field-container-shape-start-start: var(\r
    --_container-shape-start-start\r
  );\r
  --md-outlined-field-content-color: var(--_input-text-color);\r
  --md-outlined-field-content-font: var(--_input-text-font);\r
  --md-outlined-field-content-line-height: var(--_input-text-line-height);\r
  --md-outlined-field-content-size: var(--_input-text-size);\r
  --md-outlined-field-content-weight: var(--_input-text-weight);\r
  --md-outlined-field-disabled-content-color: var(--_disabled-input-text-color);\r
  --md-outlined-field-disabled-content-opacity: var(\r
    --_disabled-input-text-opacity\r
  );\r
  --md-outlined-field-disabled-label-text-color: var(\r
    --_disabled-label-text-color\r
  );\r
  --md-outlined-field-disabled-label-text-opacity: var(\r
    --_disabled-label-text-opacity\r
  );\r
  --md-outlined-field-disabled-leading-content-color: var(\r
    --_disabled-leading-icon-color\r
  );\r
  --md-outlined-field-disabled-leading-content-opacity: var(\r
    --_disabled-leading-icon-opacity\r
  );\r
  --md-outlined-field-disabled-outline-color: var(--_disabled-outline-color);\r
  --md-outlined-field-disabled-outline-opacity: var(\r
    --_disabled-outline-opacity\r
  );\r
  --md-outlined-field-disabled-outline-width: var(--_disabled-outline-width);\r
  --md-outlined-field-disabled-supporting-text-color: var(\r
    --_disabled-supporting-text-color\r
  );\r
  --md-outlined-field-disabled-supporting-text-opacity: var(\r
    --_disabled-supporting-text-opacity\r
  );\r
  --md-outlined-field-disabled-trailing-content-color: var(\r
    --_disabled-trailing-icon-color\r
  );\r
  --md-outlined-field-disabled-trailing-content-opacity: var(\r
    --_disabled-trailing-icon-opacity\r
  );\r
  --md-outlined-field-error-content-color: var(--_error-input-text-color);\r
  --md-outlined-field-error-focus-content-color: var(\r
    --_error-focus-input-text-color\r
  );\r
  --md-outlined-field-error-focus-label-text-color: var(\r
    --_error-focus-label-text-color\r
  );\r
  --md-outlined-field-error-focus-leading-content-color: var(\r
    --_error-focus-leading-icon-color\r
  );\r
  --md-outlined-field-error-focus-outline-color: var(\r
    --_error-focus-outline-color\r
  );\r
  --md-outlined-field-error-focus-supporting-text-color: var(\r
    --_error-focus-supporting-text-color\r
  );\r
  --md-outlined-field-error-focus-trailing-content-color: var(\r
    --_error-focus-trailing-icon-color\r
  );\r
  --md-outlined-field-error-hover-content-color: var(\r
    --_error-hover-input-text-color\r
  );\r
  --md-outlined-field-error-hover-label-text-color: var(\r
    --_error-hover-label-text-color\r
  );\r
  --md-outlined-field-error-hover-leading-content-color: var(\r
    --_error-hover-leading-icon-color\r
  );\r
  --md-outlined-field-error-hover-outline-color: var(\r
    --_error-hover-outline-color\r
  );\r
  --md-outlined-field-error-hover-supporting-text-color: var(\r
    --_error-hover-supporting-text-color\r
  );\r
  --md-outlined-field-error-hover-trailing-content-color: var(\r
    --_error-hover-trailing-icon-color\r
  );\r
  --md-outlined-field-error-label-text-color: var(--_error-label-text-color);\r
  --md-outlined-field-error-leading-content-color: var(\r
    --_error-leading-icon-color\r
  );\r
  --md-outlined-field-error-outline-color: var(--_error-outline-color);\r
  --md-outlined-field-error-supporting-text-color: var(\r
    --_error-supporting-text-color\r
  );\r
  --md-outlined-field-error-trailing-content-color: var(\r
    --_error-trailing-icon-color\r
  );\r
  --md-outlined-field-focus-content-color: var(--_focus-input-text-color);\r
  --md-outlined-field-focus-label-text-color: var(--_focus-label-text-color);\r
  --md-outlined-field-focus-leading-content-color: var(\r
    --_focus-leading-icon-color\r
  );\r
  --md-outlined-field-focus-outline-color: var(--_focus-outline-color);\r
  --md-outlined-field-focus-outline-width: var(--_focus-outline-width);\r
  --md-outlined-field-focus-supporting-text-color: var(\r
    --_focus-supporting-text-color\r
  );\r
  --md-outlined-field-focus-trailing-content-color: var(\r
    --_focus-trailing-icon-color\r
  );\r
  --md-outlined-field-hover-content-color: var(--_hover-input-text-color);\r
  --md-outlined-field-hover-label-text-color: var(--_hover-label-text-color);\r
  --md-outlined-field-hover-leading-content-color: var(\r
    --_hover-leading-icon-color\r
  );\r
  --md-outlined-field-hover-outline-color: var(--_hover-outline-color);\r
  --md-outlined-field-hover-outline-width: var(--_hover-outline-width);\r
  --md-outlined-field-hover-supporting-text-color: var(\r
    --_hover-supporting-text-color\r
  );\r
  --md-outlined-field-hover-trailing-content-color: var(\r
    --_hover-trailing-icon-color\r
  );\r
  --md-outlined-field-label-text-color: var(--_label-text-color);\r
  --md-outlined-field-label-text-font: var(--_label-text-font);\r
  --md-outlined-field-label-text-line-height: var(--_label-text-line-height);\r
  --md-outlined-field-label-text-populated-line-height: var(\r
    --_label-text-populated-line-height\r
  );\r
  --md-outlined-field-label-text-populated-size: var(\r
    --_label-text-populated-size\r
  );\r
  --md-outlined-field-label-text-size: var(--_label-text-size);\r
  --md-outlined-field-label-text-weight: var(--_label-text-weight);\r
  --md-outlined-field-leading-content-color: var(--_leading-icon-color);\r
  --md-outlined-field-leading-space: var(--_leading-space);\r
  --md-outlined-field-outline-color: var(--_outline-color);\r
  --md-outlined-field-outline-width: var(--_outline-width);\r
  --md-outlined-field-supporting-text-color: var(--_supporting-text-color);\r
  --md-outlined-field-supporting-text-font: var(--_supporting-text-font);\r
  --md-outlined-field-supporting-text-line-height: var(\r
    --_supporting-text-line-height\r
  );\r
  --md-outlined-field-supporting-text-size: var(--_supporting-text-size);\r
  --md-outlined-field-supporting-text-weight: var(--_supporting-text-weight);\r
  --md-outlined-field-top-space: var(--_top-space);\r
  --md-outlined-field-trailing-content-color: var(--_trailing-icon-color);\r
  --md-outlined-field-trailing-space: var(--_trailing-space);\r
}\r
.text-field-module_prefix__9Zf4V {\r
  text-wrap: nowrap;\r
  width: min-content;\r
  color: var(--_input-text-prefix-color);\r
  padding-inline-end: var(--_input-text-prefix-trailing-space);\r
}\r
.text-field-module_suffix__itEyf {\r
  text-wrap: nowrap;\r
  width: min-content;\r
  padding-inline-start: var(--_input-text-suffix-leading-space);\r
}\r
`);function GD(e,t){let{inputElementType:n="input",isDisabled:o=!1,isRequired:l=!1,isReadOnly:s=!1,type:u="text",validationBehavior:d="aria"}=e,[f,p]=Ll(e.value,e.defaultValue||"",e.onChange),{focusableProps:h}=Os(e,t),y=tp({...e,value:f}),{isInvalid:v,validationErrors:x,validationDetails:b}=y.displayValidation,{labelProps:_,fieldProps:S,descriptionProps:$,errorMessageProps:E}=DM({...e,isInvalid:v,errorMessage:e.errorMessage||x}),N=Jr(e,{labelable:!0});const O={type:u,pattern:e.pattern};return jx(t,f,p),Ix(e,y,t),k.useEffect(()=>{if(t.current instanceof It(t.current).HTMLTextAreaElement){let M=t.current;Object.defineProperty(M,"defaultValue",{get:()=>M.value,set:()=>{},configurable:!0})}},[t]),{labelProps:_,inputProps:we(N,n==="input"?O:void 0,{disabled:o,readOnly:s,required:l&&d==="native","aria-required":l&&d==="aria"||void 0,"aria-invalid":v||void 0,"aria-errormessage":e["aria-errormessage"],"aria-activedescendant":e["aria-activedescendant"],"aria-autocomplete":e["aria-autocomplete"],"aria-haspopup":e["aria-haspopup"],"aria-controls":e["aria-controls"],value:f,onChange:M=>p(M.target.value),autoComplete:e.autoComplete,autoCapitalize:e.autoCapitalize,maxLength:e.maxLength,minLength:e.minLength,name:e.name,placeholder:e.placeholder,inputMode:e.inputMode,autoCorrect:e.autoCorrect,spellCheck:e.spellCheck,[parseInt(ie.version,10)>=17?"enterKeyHint":"enterkeyhint"]:e.enterKeyHint,onCopy:e.onCopy,onCut:e.onCut,onPaste:e.onPaste,onCompositionEnd:e.onCompositionEnd,onCompositionStart:e.onCompositionStart,onCompositionUpdate:e.onCompositionUpdate,onSelect:e.onSelect,onBeforeInput:e.onBeforeInput,onInput:e.onInput,...h,...S}),descriptionProps:$,errorMessageProps:E,isInvalid:v,validationErrors:x,validationDetails:b}}const kl=e=>{var t;const n=ie.useRef(null),{style:o,onFocus:l,onBlur:s,className:u,suffixText:d,prefixText:f,leadingIcon:p,trailingIcon:h,ref:y=n,type:v="text",variant:x="filled",inputProps:b,children:_}=e,S=an(e,["style","onFocus","onBlur","className","suffixText","prefixText","leadingIcon","trailingIcon","ref","type","variant","inputProps","children"]),{inputProps:$,labelProps:E,descriptionProps:N,errorMessageProps:O,isInvalid:M,validationErrors:I}=GD(Object.assign(Object.assign({},S),{inputElementType:e.type=="textarea"?"textarea":"input"}),y),{focusProps:z,isFocused:P}=Bn();let K=gy;x=="filled"&&(K=gy),x=="outlined"&&(K=QD);const J=(t=(b??$).value)===null||t===void 0?void 0:t.toString().length,W=!!(b??$).value;return D.jsxs("label",Object.assign({},E,{className:xd[x],children:[D.jsxs(K,{leadingIcon:p,trailingIcon:h,count:J,populated:W,label:e.label,focused:P,children:[f&&D.jsx("span",{className:xd.prefix,children:f}),v=="textarea"?D.jsx("textarea",Object.assign({style:Object.assign({resize:"vertical",overflowX:"hidden",wordBreak:"break-word"},o),className:u},we(z,b??$),{ref:y})):D.jsx("input",Object.assign({style:o,className:u},we(z,b??$),{type:v,ref:y})),d&&D.jsx("span",{className:xd.suffix,children:d})]}),e.description&&D.jsx("div",Object.assign({},N,{style:{fontSize:12},children:e.description})),M&&D.jsx("div",Object.assign({},O,{style:{color:"red",fontSize:12},children:I.join(" ")}))]}))};kl.displayName="Actify.TextField";var Ps={group:"menu-module_group__35TK7","menu-item":"menu-module_menu-item__9yaKi","list-item":"menu-module_list-item__NRzop",container:"menu-module_container__xusis"};lt(`.menu-module_menu__kQXzv {\r
  display: none;\r
  inset: auto;\r
  border: none;\r
  padding: 0px;\r
  overflow: visible;\r
  background-color: rgba(0, 0, 0, 0);\r
  color: inherit;\r
  opacity: 1;\r
  z-index: 20;\r
  position: absolute;\r
  user-select: none;\r
  max-height: inherit;\r
  height: inherit;\r
  min-width: inherit;\r
  max-width: inherit;\r
  scrollbar-width: inherit;\r
  &.menu-module_open__YZq4t {\r
    display: block;\r
  }\r
}\r
.menu-module_items__uQ-ne {\r
  display: block;\r
  list-style-type: none;\r
  margin: 0;\r
  outline: none;\r
  box-sizing: border-box;\r
  background-color: var(\r
    --md-menu-container-color,\r
    var(--md-sys-color-surface-container, #f3edf7)\r
  );\r
  height: inherit;\r
  max-height: inherit;\r
  overflow: auto;\r
  min-width: inherit;\r
  max-width: inherit;\r
  border-radius: inherit;\r
  scrollbar-width: inherit;\r
}\r
.menu-module_animating__OVsP5 .menu-module_items__uQ-ne {\r
  overflow: hidden;\r
}\r
.menu-module_item-padding__4y9YJ {\r
  padding-block: 8px;\r
}\r
.menu-module_group__35TK7 {\r
  box-sizing: border-box;\r
  list-style: none;\r
  margin: 0;\r
  padding: 0;\r
}\r
.menu-module_menu-item__9yaKi {\r
  box-sizing: border-box;\r
  list-style: none;\r
  margin: 0;\r
  padding: 8px;\r
  --md-ripple-hover-color: var(\r
    --md-menu-item-hover-state-layer-color,\r
    var(--md-sys-color-on-surface)\r
  );\r
  --md-ripple-hover-opacity: var(\r
    --md-menu-item-hover-state-layer-opacity,\r
    0.08\r
  );\r
  --md-ripple-pressed-color: var(\r
    --md-menu-item-pressed-state-layer-color,\r
    var(--md-sys-color-on-surface)\r
  );\r
  --md-ripple-pressed-opacity: var(\r
    --md-menu-item-pressed-state-layer-opacity,\r
    0.12\r
  );\r
  &:focus-visible {\r
    outline: none;\r
  }\r
}\r
.menu-module_list-item__NRzop {\r
  position: relative; /* for focus ring */\r
  list-style: none;\r
  background-color: var(--md-menu-item-container-color, transparent);\r
  border-radius: var(\r
    --md-menu-container-shape,\r
    var(--md-sys-shape-corner-extra-small, 4px)\r
  );\r
  display: flex;\r
  flex: 1;\r
  max-width: inherit;\r
  min-width: inherit;\r
  outline: none;\r
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\r
  &:not(.menu-module_disabled__V4JF9) {\r
    cursor: pointer;\r
  }\r
}\r
.menu-module_container__xusis {\r
  position: absolute;\r
  inset: 0;\r
}\r
`);const r_=({item:e,state:t,onAction:n,onClose:o})=>{const l=ie.useRef(null),{focusProps:s,isFocusVisible:u}=Bn(),{menuItemProps:d}=jD({key:e.key,onAction:n,onClose:o},t,l);return D.jsxs("li",Object.assign({ref:l,className:Ps["list-item"]},we(d,s),{children:[D.jsx(t_,{container:D.jsx(()=>D.jsxs("div",{className:Ps.container,children:[D.jsx(yr,{}),D.jsx(Fn,{})]}),{}),children:e.rendered}),u&&D.jsx(Fn,{style:{color:"var(--md-sys-color-primary)"}})]}))},XD=({section:e,state:t,onAction:n,onClose:o})=>{const{itemProps:l,groupProps:s}=FD({heading:e.rendered,"aria-label":e["aria-label"]});return D.jsx("li",Object.assign({},l,{children:D.jsx("ul",Object.assign({},s,{className:Ps.group,children:[...e.childNodes].map(u=>D.jsx(r_,{item:u,state:t,onClose:o,onAction:n},u.key))}))}))},qD=e=>{const t=KD(e),n=ie.useRef(null),{menuProps:o}=zD(e,t,n);return D.jsx("ul",Object.assign({ref:n},o,{style:e.style,className:Ye(Ps["menu-item"],e.className),children:[...t.collection].map(l=>l.type=="section"?D.jsx(XD,{section:l,state:t,onClose:e.onClose,onAction:()=>e.onAction},l.key):D.jsx(r_,{item:l,state:t,onClose:e.onClose,onAction:()=>e.onAction},l.key))}))},ZD=e=>{var t;const n=LD(e),o=ie.useRef(null),{menuTriggerProps:l,menuProps:s}=AD({},n,o);return D.jsxs(D.Fragment,{children:[e.label&&D.jsx(Rl,Object.assign({},l,{ref:o,children:e.label})),(t=e==null?void 0:e.activator)===null||t===void 0?void 0:t.call(e,o,l),n.isOpen&&D.jsx(BD,{state:n,triggerRef:o,children:D.jsx(qD,Object.assign({},e,s,{autoFocus:n.focusStrategy||!0,onClose:()=>n.close()}))})]})},JD=({page:e,isActive:t,position:n,onPageChange:o})=>D.jsx(Rl,t||n==="middle"?{variant:t?"filled":"tonal",children:e}:{variant:"tonal",onPress:()=>o==null?void 0:o(e),children:e}),eN=(e,t)=>t<=7?Array.from({length:t},(n,o)=>o+1):e<=3?[1,2,3,"...",t-1,t]:e>=t-2?[1,2,"...",t-2,t-1,t]:[1,"...",e-1,e,e+1,"...",t];var Hi={pagination:"pagination-module_pagination__mHDWp",ul:"pagination-module_ul__lERLB","page-size":"pagination-module_page-size__KPhE9","page-size-wrapper":"pagination-module_page-size-wrapper__ScJSo","item-per-page":"pagination-module_item-per-page__0q-7H"};lt(`.pagination-module_pagination__mHDWp {\r
  display: flex;\r
  padding: 1rem;\r
  align-items: center;\r
  border-radius: 0.5rem;\r
  justify-content: center;\r
  background-color: var(--md-sys-color-surface);\r
}\r
.pagination-module_ul__lERLB {\r
  list-style: none;\r
  margin: 0;\r
  padding: 0;\r
\r
  display: none;\r
  gap: 1rem;\r
}\r
@media (min-width: 1024px) {\r
  .pagination-module_ul__lERLB {\r
    display: flex;\r
  }\r
}\r
.pagination-module_page-size__KPhE9 {\r
  width: 100%;\r
  display: flex;\r
  flex-direction: row;\r
  padding-left: 0.75rem /* 12px */;\r
  padding-right: 0.75rem /* 12px */;\r
  padding-top: 0.25rem /* 4px */;\r
  padding-bottom: 0.25rem /* 4px */;\r
  background-color: var(--md-sys-color-surface);\r
}\r
.pagination-module_page-size-wrapper__ScJSo {\r
  display: flex;\r
  margin-left: auto;\r
  flex-direction: row;\r
  align-items: center;\r
}\r
.pagination-module_item-per-page__0q-7H {\r
  font-size: 0.875rem /* 14px */;\r
  line-height: 1.25rem /* 20px */;\r
}\r
`);function o_(e){return null}function tN(e){return e.hasChildItems!=null?e.hasChildItems:!!e.childItems||!!(e.title&&ie.Children.count(e.children)>0)}o_.getCollectionNode=function*(e,t){let{childItems:n,title:o,children:l}=e,s=e.title||e.children,u=e.textValue||(typeof s=="string"?s:"")||e["aria-label"]||"";u||t!=null&&t.suppressTextValueWarning||console.warn("<Item> with non-plain text contents is unsupported by type to select for accessibility. Please add a `textValue` prop."),yield{type:"item",props:e,rendered:s,textValue:u,"aria-label":e["aria-label"],hasChildNodes:tN(e),*childNodes(){if(n)for(let d of n)yield{type:"item",value:d};else if(o){let d=[];ie.Children.forEach(l,f=>{d.push({type:"item",element:f})}),yield*d}}}};let nN=o_;const rN=e=>{const{pageSizes:t=[5,10,20],currentPage:n=1,totalPages:o=1,selectedPageSize:l,setSelectedPageSize:s,onPageChange:u,className:d}=e,f=an(e,["pageSizes","currentPage","totalPages","selectedPageSize","setSelectedPageSize","onPageChange","className"]),p=eN(n,o);return D.jsxs("nav",Object.assign({},f,{className:Hi.pagination,children:[D.jsxs("ul",{className:Hi.ul,children:[D.jsx("li",{children:D.jsx(mn,{isDisabled:n<=1,onPress:()=>u==null?void 0:u(n-1),children:D.jsx(Ct,{children:"chevron_left"})})}),p.map((h,y)=>{let v;return y==0&&(v="first"),y==p.length-1&&(v="last"),p.length==1&&(v="single"),h=="..."&&(v="middle"),D.jsx("li",{children:D.jsx(JD,{page:h,position:v,isActive:n===h,onPageChange:u})},y)}),D.jsx("li",{children:D.jsx(mn,{isDisabled:n>=o,onPress:()=>u==null?void 0:u(n+1),children:D.jsx(Ct,{children:"chevron_right"})})})]}),t?D.jsx("div",{className:Hi["page-size"],children:D.jsxs("div",{className:Hi["page-size-wrapper"],children:[D.jsx("p",{className:Hi["item-per-page"],children:"Items per page:"}),D.jsx(ZD,{activator:(h,y)=>D.jsx(Rl,Object.assign({ref:h},y,{style:{margin:"0 .625rem"},children:D.jsxs("div",{className:"flex flex-row items-center",children:[D.jsx("p",{className:"text-md mr-2",children:l}),D.jsx(Ct,{children:"arrow_drop_down"})]})})),onAction:h=>{s==null||s(h)},children:t.map(h=>D.jsx(nN,{children:h.toString()},h))}),D.jsxs("span",{children:[1+(n-1)*l," of"," ",n*l]}),D.jsx(mn,{isDisabled:n<=1,onPress:()=>u==null?void 0:u(n-1),children:D.jsx(Ct,{children:"chevron_left"})}),D.jsx(mn,{isDisabled:n>=o,onPress:()=>u==null?void 0:u(n+1),children:D.jsx(Ct,{children:"chevron_right"})})]})}):null]}))};var Wo={table:"table-module_table__OGgJX",th:"table-module_th__b5h4v",tr:"table-module_tr__4-HIy",td:"table-module_td__7s8MQ",hovered:"table-module_hovered__Y09TL",selected:"table-module_selected__SPN7R"};lt(`.table-module_table__OGgJX {\r
  text-indent: 0;\r
  box-sizing: border-box;\r
  border-color: inherit;\r
  border: 0 solid #e5e7eb;\r
\r
  width: 100%;\r
  position: relative;\r
  border-collapse: collapse;\r
  background-color: var(--md-sys-color-surface);\r
  box-shadow:\r
    rgba(0, 0, 0, 0.2) 0px 5px 5px -3px,\r
    rgba(0, 0, 0, 0.14) 0px 8px 10px 1px,\r
    rgba(0, 0, 0, 0.12) 0px 3px 14px 2px;\r
}\r
.table-module_th__b5h4v:focus-visible,\r
.table-module_tr__4-HIy:focus-visible,\r
.table-module_td__7s8MQ:focus-visible {\r
  outline: none;\r
}\r
\r
.table-module_th__b5h4v {\r
  position: relative;\r
  padding: 0 1rem;\r
}\r
.table-module_tr__4-HIy {\r
  border-color: inherit;\r
  border: 0 solid #e5e7eb;\r
\r
  position: relative;\r
  height: 52px;\r
  border-style: solid;\r
  border-top-width: 1px;\r
  border-color: rgb(\r
    var(--md-sys-color-outline-variant) / var(--tw-border-opacity)\r
  );\r
}\r
.table-module_tr__4-HIy.table-module_hovered__Y09TL {\r
  background-color: var(--md-sys-color-inverse-surface) / 0.1;\r
}\r
.table-module_tr__4-HIy.table-module_selected__SPN7R {\r
  color: var(--md-sys-color-on-secondary-container);\r
  background-color: var(--md-sys-color-secondary-container);\r
}\r
.table-module_td__7s8MQ {\r
  position: relative;\r
  padding: 0 1rem;\r
}\r
`);const lp=new WeakMap;function nf(e){return typeof e=="string"?e.replace(/\s*/g,""):""+e}function oN(e,t){let n=lp.get(e);if(!n)throw new Error("Unknown grid");return`${n}-${nf(t)}`}function i_(e,t,n){let o=lp.get(e);if(!o)throw new Error("Unknown grid");return`${o}-${nf(t)}-${nf(n)}`}function l_(e,t){return[...e.collection.rowHeaderColumnKeys].map(n=>i_(e,t,n)).join(" ")}const ap=new WeakMap;function a_(e,t,n){let{node:o,isVirtualized:l,focusMode:s="child",shouldSelectOnPressUp:u,onAction:d}=e,{direction:f}=Sr(),{keyboardDelegate:p,actions:{onCellAction:h}}=ap.get(t),y=k.useRef(null),v=()=>{if(n.current){let $=Xt(n.current);if(s==="child"){if(n.current.contains(document.activeElement)&&n.current!==document.activeElement)return;let E=t.selectionManager.childFocusStrategy==="last"?bd($):$.firstChild();if(E)return void zt(E)}(y.current!=null&&o.key!==y.current||!n.current.contains(document.activeElement))&&zt(n.current)}},{itemProps:x,isPressed:b}=ip({selectionManager:t.selectionManager,key:o.key,ref:n,focus:v,shouldSelectOnPressUp:u,onAction:h?()=>h(o.key):d,isDisabled:t.collection.size===0}),_=we(x,{role:"gridcell",onKeyDownCapture:$=>{if(!$.currentTarget.contains($.target)||t.isKeyboardNavigationDisabled||!n.current||!document.activeElement)return;let E=Xt(n.current);switch(E.currentNode=document.activeElement,$.key){case"ArrowLeft":{let P=f==="rtl"?E.nextNode():E.previousNode();if(s==="child"&&P===n.current&&(P=null),$.preventDefault(),$.stopPropagation(),P)zt(P),vr(P,{containingElement:gr(n.current)});else{var N;if(((N=p.getKeyLeftOf)===null||N===void 0?void 0:N.call(p,o.key))!==o.key){var O;(O=n.current.parentElement)===null||O===void 0||O.dispatchEvent(new KeyboardEvent($.nativeEvent.type,$.nativeEvent));break}s==="cell"&&f==="rtl"?(zt(n.current),vr(n.current,{containingElement:gr(n.current)})):(E.currentNode=n.current,P=f==="rtl"?E.firstChild():bd(E),P&&(zt(P),vr(P,{containingElement:gr(n.current)})))}break}case"ArrowRight":{let P=f==="rtl"?E.previousNode():E.nextNode();if(s==="child"&&P===n.current&&(P=null),$.preventDefault(),$.stopPropagation(),P)zt(P),vr(P,{containingElement:gr(n.current)});else{var M;if(((M=p.getKeyRightOf)===null||M===void 0?void 0:M.call(p,o.key))!==o.key){var I;(I=n.current.parentElement)===null||I===void 0||I.dispatchEvent(new KeyboardEvent($.nativeEvent.type,$.nativeEvent));break}s==="cell"&&f==="ltr"?(zt(n.current),vr(n.current,{containingElement:gr(n.current)})):(E.currentNode=n.current,P=f==="rtl"?bd(E):E.firstChild(),P&&(zt(P),vr(P,{containingElement:gr(n.current)})))}break}case"ArrowUp":case"ArrowDown":var z;!$.altKey&&n.current.contains($.target)&&($.stopPropagation(),$.preventDefault(),(z=n.current.parentElement)===null||z===void 0||z.dispatchEvent(new KeyboardEvent($.nativeEvent.type,$.nativeEvent)))}},"aria-colspan":o.colSpan,"aria-colindex":o.colIndex!=null?o.colIndex+1:void 0,colSpan:l?void 0:o.colSpan,onFocus:$=>{y.current=o.key,$.target===n.current?requestAnimationFrame(()=>{s==="child"&&document.activeElement===n.current&&v()}):_l()||t.selectionManager.setFocusedKey(o.key)}});var S;return l&&(_["aria-colindex"]=((S=o.colIndex)!==null&&S!==void 0?S:o.index)+1),u&&_.tabIndex!=null&&_.onPointerDown==null&&(_.onPointerDown=$=>{let E=$.currentTarget,N=E.getAttribute("tabindex");E.removeAttribute("tabindex"),requestAnimationFrame(()=>{N!=null&&E.setAttribute("tabindex",N)})}),{gridCellProps:_,isPressed:b}}function bd(e){let t=null,n=null;do n=e.lastChild(),n&&(t=n);while(n);return t}function s_(e,t,n){var o;let{gridCellProps:l,isPressed:s}=a_(e,t,n),u=(o=e.node.column)===null||o===void 0?void 0:o.key;return u!=null&&t.collection.rowHeaderColumnKeys.has(u)&&(l.role="rowheader",l.id=i_(t,e.node.parentKey,u)),{gridCellProps:l,isPressed:s}}const iN=({node:e,state:t})=>{const n=ie.useRef(null),{gridCellProps:o}=s_({node:e},t,n),{isFocusVisible:l,focusProps:s}=Bn();return D.jsxs("td",Object.assign({ref:n,className:Wo.td},we(o,s),{children:[e.rendered,l&&D.jsx(Fn,{})]}))};var u_;u_={ascending:"تصاعدي",ascendingSort:e=>`ترتيب حسب العمود ${e.columnName} بترتيب تصاعدي`,columnSize:e=>`${e.value} بالبكسل`,descending:"تنازلي",descendingSort:e=>`ترتيب حسب العمود ${e.columnName} بترتيب تنازلي`,resizerDescription:"اضغط على مفتاح Enter لبدء تغيير الحجم",select:"تحديد",selectAll:"تحديد الكل",sortable:"عمود قابل للترتيب"};var c_;c_={ascending:"възходящ",ascendingSort:e=>`сортирано по колона ${e.columnName} във възходящ ред`,columnSize:e=>`${e.value} пиксела`,descending:"низходящ",descendingSort:e=>`сортирано по колона ${e.columnName} в низходящ ред`,resizerDescription:"Натиснете „Enter“, за да започнете да преоразмерявате",select:"Изберете",selectAll:"Изберете всичко",sortable:"сортираща колона"};var d_;d_={ascending:"vzestupně",ascendingSort:e=>`řazeno vzestupně podle sloupce ${e.columnName}`,columnSize:e=>`${e.value} pixelů`,descending:"sestupně",descendingSort:e=>`řazeno sestupně podle sloupce ${e.columnName}`,resizerDescription:"Stisknutím klávesy Enter začnete měnit velikost",select:"Vybrat",selectAll:"Vybrat vše",sortable:"sloupec s možností řazení"};var f_;f_={ascending:"stigende",ascendingSort:e=>`sorteret efter kolonne ${e.columnName} i stigende rækkefølge`,columnSize:e=>`${e.value} pixels`,descending:"faldende",descendingSort:e=>`sorteret efter kolonne ${e.columnName} i faldende rækkefølge`,resizerDescription:"Tryk på Enter for at ændre størrelse",select:"Vælg",selectAll:"Vælg alle",sortable:"sorterbar kolonne"};var p_;p_={ascending:"aufsteigend",ascendingSort:e=>`sortiert nach Spalte ${e.columnName} in aufsteigender Reihenfolge`,columnSize:e=>`${e.value} Pixel`,descending:"absteigend",descendingSort:e=>`sortiert nach Spalte ${e.columnName} in absteigender Reihenfolge`,resizerDescription:"Eingabetaste zum Starten der Größenänderung drücken",select:"Auswählen",selectAll:"Alles auswählen",sortable:"sortierbare Spalte"};var m_;m_={ascending:"αύξουσα",ascendingSort:e=>`διαλογή ανά στήλη ${e.columnName} σε αύξουσα σειρά`,columnSize:e=>`${e.value} pixel`,descending:"φθίνουσα",descendingSort:e=>`διαλογή ανά στήλη ${e.columnName} σε φθίνουσα σειρά`,resizerDescription:"Πατήστε Enter για έναρξη της αλλαγής μεγέθους",select:"Επιλογή",selectAll:"Επιλογή όλων",sortable:"Στήλη διαλογής"};var h_;h_={select:"Select",selectAll:"Select All",sortable:"sortable column",ascending:"ascending",descending:"descending",ascendingSort:e=>`sorted by column ${e.columnName} in ascending order`,descendingSort:e=>`sorted by column ${e.columnName} in descending order`,columnSize:e=>`${e.value} pixels`,resizerDescription:"Press Enter to start resizing"};var v_;v_={ascending:"de subida",ascendingSort:e=>`ordenado por columna ${e.columnName} en orden de subida`,columnSize:e=>`${e.value} píxeles`,descending:"de bajada",descendingSort:e=>`ordenado por columna ${e.columnName} en orden de bajada`,resizerDescription:"Pulse Intro para empezar a redimensionar",select:"Seleccionar",selectAll:"Seleccionar todos",sortable:"columna ordenable"};var g_;g_={ascending:"tõusev järjestus",ascendingSort:e=>`sorditud veeru järgi ${e.columnName} tõusvas järjestuses`,columnSize:e=>`${e.value} pikslit`,descending:"laskuv järjestus",descendingSort:e=>`sorditud veeru järgi ${e.columnName} laskuvas järjestuses`,resizerDescription:"Suuruse muutmise alustamiseks vajutage klahvi Enter",select:"Vali",selectAll:"Vali kõik",sortable:"sorditav veerg"};var y_;y_={ascending:"nouseva",ascendingSort:e=>`lajiteltu sarakkeen ${e.columnName} mukaan nousevassa järjestyksessä`,columnSize:e=>`${e.value} pikseliä`,descending:"laskeva",descendingSort:e=>`lajiteltu sarakkeen ${e.columnName} mukaan laskevassa järjestyksessä`,resizerDescription:"Aloita koon muutos painamalla Enter-näppäintä",select:"Valitse",selectAll:"Valitse kaikki",sortable:"lajiteltava sarake"};var x_;x_={ascending:"croissant",ascendingSort:e=>`trié en fonction de la colonne ${e.columnName} par ordre croissant`,columnSize:e=>`${e.value} pixels`,descending:"décroissant",descendingSort:e=>`trié en fonction de la colonne ${e.columnName} par ordre décroissant`,resizerDescription:"Appuyez sur Entrée pour commencer le redimensionnement.",select:"Sélectionner",selectAll:"Sélectionner tout",sortable:"colonne triable"};var b_;b_={ascending:"עולה",ascendingSort:e=>`מוין לפי עמודה ${e.columnName} בסדר עולה`,columnSize:e=>`${e.value} פיקסלים`,descending:"יורד",descendingSort:e=>`מוין לפי עמודה ${e.columnName} בסדר יורד`,resizerDescription:"הקש Enter כדי לשנות את הגודל",select:"בחר",selectAll:"בחר הכול",sortable:"עמודה שניתן למיין"};var w_;w_={ascending:"rastući",ascendingSort:e=>`razvrstano po stupcima ${e.columnName} rastućem redoslijedom`,columnSize:e=>`${e.value} piksela`,descending:"padajući",descendingSort:e=>`razvrstano po stupcima ${e.columnName} padajućim redoslijedom`,resizerDescription:"Pritisnite Enter da biste započeli promenu veličine",select:"Odaberite",selectAll:"Odaberite sve",sortable:"stupac koji se može razvrstati"};var __;__={ascending:"növekvő",ascendingSort:e=>`rendezve a(z) ${e.columnName} oszlop szerint, növekvő sorrendben`,columnSize:e=>`${e.value} képpont`,descending:"csökkenő",descendingSort:e=>`rendezve a(z) ${e.columnName} oszlop szerint, csökkenő sorrendben`,resizerDescription:"Nyomja le az Enter billentyűt az átméretezés megkezdéséhez",select:"Kijelölés",selectAll:"Összes kijelölése",sortable:"rendezendő oszlop"};var S_;S_={ascending:"crescente",ascendingSort:e=>`in ordine crescente in base alla colonna ${e.columnName}`,columnSize:e=>`${e.value} pixel`,descending:"decrescente",descendingSort:e=>`in ordine decrescente in base alla colonna ${e.columnName}`,resizerDescription:"Premi Invio per iniziare a ridimensionare",select:"Seleziona",selectAll:"Seleziona tutto",sortable:"colonna ordinabile"};var k_;k_={ascending:"昇順",ascendingSort:e=>`列 ${e.columnName} を昇順で並べ替え`,columnSize:e=>`${e.value} ピクセル`,descending:"降順",descendingSort:e=>`列 ${e.columnName} を降順で並べ替え`,resizerDescription:"Enter キーを押してサイズ変更を開始",select:"選択",selectAll:"すべて選択",sortable:"並べ替え可能な列"};var $_;$_={ascending:"오름차순",ascendingSort:e=>`${e.columnName} 열을 기준으로 오름차순으로 정렬됨`,columnSize:e=>`${e.value} 픽셀`,descending:"내림차순",descendingSort:e=>`${e.columnName} 열을 기준으로 내림차순으로 정렬됨`,resizerDescription:"크기 조정을 시작하려면 Enter를 누르세요.",select:"선택",selectAll:"모두 선택",sortable:"정렬 가능한 열"};var E_;E_={ascending:"didėjančia tvarka",ascendingSort:e=>`surikiuota pagal stulpelį ${e.columnName} didėjančia tvarka`,columnSize:e=>`${e.value} piks.`,descending:"mažėjančia tvarka",descendingSort:e=>`surikiuota pagal stulpelį ${e.columnName} mažėjančia tvarka`,resizerDescription:"Paspauskite „Enter“, kad pradėtumėte keisti dydį",select:"Pasirinkti",selectAll:"Pasirinkti viską",sortable:"rikiuojamas stulpelis"};var P_;P_={ascending:"augošā secībā",ascendingSort:e=>`kārtots pēc kolonnas ${e.columnName} augošā secībā`,columnSize:e=>`${e.value} pikseļi`,descending:"dilstošā secībā",descendingSort:e=>`kārtots pēc kolonnas ${e.columnName} dilstošā secībā`,resizerDescription:"Nospiediet Enter, lai sāktu izmēru mainīšanu",select:"Atlasīt",selectAll:"Atlasīt visu",sortable:"kārtojamā kolonna"};var T_;T_={ascending:"stigende",ascendingSort:e=>`sortert etter kolonne ${e.columnName} i stigende rekkefølge`,columnSize:e=>`${e.value} piksler`,descending:"synkende",descendingSort:e=>`sortert etter kolonne ${e.columnName} i synkende rekkefølge`,resizerDescription:"Trykk på Enter for å starte størrelsesendring",select:"Velg",selectAll:"Velg alle",sortable:"kolonne som kan sorteres"};var C_;C_={ascending:"oplopend",ascendingSort:e=>`gesorteerd in oplopende volgorde in kolom ${e.columnName}`,columnSize:e=>`${e.value} pixels`,descending:"aflopend",descendingSort:e=>`gesorteerd in aflopende volgorde in kolom ${e.columnName}`,resizerDescription:"Druk op Enter om het formaat te wijzigen",select:"Selecteren",selectAll:"Alles selecteren",sortable:"sorteerbare kolom"};var M_;M_={ascending:"rosnąco",ascendingSort:e=>`posortowano według kolumny ${e.columnName} w porządku rosnącym`,columnSize:e=>`Liczba pikseli: ${e.value}`,descending:"malejąco",descendingSort:e=>`posortowano według kolumny ${e.columnName} w porządku malejącym`,resizerDescription:"Naciśnij Enter, aby rozpocząć zmienianie rozmiaru",select:"Zaznacz",selectAll:"Zaznacz wszystko",sortable:"kolumna z możliwością sortowania"};var D_;D_={ascending:"crescente",ascendingSort:e=>`classificado pela coluna ${e.columnName} em ordem crescente`,columnSize:e=>`${e.value} pixels`,descending:"decrescente",descendingSort:e=>`classificado pela coluna ${e.columnName} em ordem decrescente`,resizerDescription:"Pressione Enter para começar a redimensionar",select:"Selecionar",selectAll:"Selecionar tudo",sortable:"coluna classificável"};var N_;N_={ascending:"ascendente",ascendingSort:e=>`Ordenar por coluna ${e.columnName} em ordem ascendente`,columnSize:e=>`${e.value} pixels`,descending:"descendente",descendingSort:e=>`Ordenar por coluna ${e.columnName} em ordem descendente`,resizerDescription:"Prima Enter para iniciar o redimensionamento",select:"Selecionar",selectAll:"Selecionar tudo",sortable:"Coluna ordenável"};var R_;R_={ascending:"crescătoare",ascendingSort:e=>`sortate după coloana ${e.columnName} în ordine crescătoare`,columnSize:e=>`${e.value} pixeli`,descending:"descrescătoare",descendingSort:e=>`sortate după coloana ${e.columnName} în ordine descrescătoare`,resizerDescription:"Apăsați pe Enter pentru a începe redimensionarea",select:"Selectare",selectAll:"Selectare totală",sortable:"coloană sortabilă"};var L_;L_={ascending:"возрастание",ascendingSort:e=>`сортировать столбец ${e.columnName} в порядке возрастания`,columnSize:e=>`${e.value} пикс.`,descending:"убывание",descendingSort:e=>`сортировать столбец ${e.columnName} в порядке убывания`,resizerDescription:"Нажмите клавишу Enter для начала изменения размеров",select:"Выбрать",selectAll:"Выбрать все",sortable:"сортируемый столбец"};var A_;A_={ascending:"vzostupne",ascendingSort:e=>`zoradené zostupne podľa stĺpca ${e.columnName}`,columnSize:e=>`Počet pixelov: ${e.value}`,descending:"zostupne",descendingSort:e=>`zoradené zostupne podľa stĺpca ${e.columnName}`,resizerDescription:"Stlačením klávesu Enter začnete zmenu veľkosti",select:"Vybrať",selectAll:"Vybrať všetko",sortable:"zoraditeľný stĺpec"};var z_;z_={ascending:"naraščajoče",ascendingSort:e=>`razvrščeno po stolpcu ${e.columnName} v naraščajočem vrstnem redu`,columnSize:e=>`${e.value} slikovnih pik`,descending:"padajoče",descendingSort:e=>`razvrščeno po stolpcu ${e.columnName} v padajočem vrstnem redu`,resizerDescription:"Pritisnite tipko Enter da začnete spreminjati velikost",select:"Izberite",selectAll:"Izberite vse",sortable:"razvrstljivi stolpec"};var I_;I_={ascending:"rastući",ascendingSort:e=>`sortirano po kolonama ${e.columnName} rastućim redosledom`,columnSize:e=>`${e.value} piksela`,descending:"padajući",descendingSort:e=>`sortirano po kolonama ${e.columnName} padajućim redosledom`,resizerDescription:"Pritisnite Enter da biste započeli promenu veličine",select:"Izaberite",selectAll:"Izaberite sve",sortable:"kolona koja se može sortirati"};var j_;j_={ascending:"stigande",ascendingSort:e=>`sorterat på kolumn ${e.columnName} i stigande ordning`,columnSize:e=>`${e.value} pixlar`,descending:"fallande",descendingSort:e=>`sorterat på kolumn ${e.columnName} i fallande ordning`,resizerDescription:"Tryck på Retur för att börja ändra storlek",select:"Markera",selectAll:"Markera allt",sortable:"sorterbar kolumn"};var F_;F_={ascending:"artan sırada",ascendingSort:e=>`${e.columnName} sütuna göre artan düzende sırala`,columnSize:e=>`${e.value} piksel`,descending:"azalan sırada",descendingSort:e=>`${e.columnName} sütuna göre azalan düzende sırala`,resizerDescription:"Yeniden boyutlandırmak için Enter'a basın",select:"Seç",selectAll:"Tümünü Seç",sortable:"Sıralanabilir sütun"};var O_;O_={ascending:"висхідний",ascendingSort:e=>`відсортовано за стовпцем ${e.columnName} у висхідному порядку`,columnSize:e=>`${e.value} пікс.`,descending:"низхідний",descendingSort:e=>`відсортовано за стовпцем ${e.columnName} у низхідному порядку`,resizerDescription:"Натисніть Enter, щоб почати зміну розміру",select:"Вибрати",selectAll:"Вибрати все",sortable:"сортувальний стовпець"};var K_;K_={ascending:"升序",ascendingSort:e=>`按列 ${e.columnName} 升序排序`,columnSize:e=>`${e.value} 像素`,descending:"降序",descendingSort:e=>`按列 ${e.columnName} 降序排序`,resizerDescription:"按“输入”键开始调整大小。",select:"选择",selectAll:"全选",sortable:"可排序的列"};var V_;V_={ascending:"遞增",ascendingSort:e=>`已依據「${e.columnName}」欄遞增排序`,columnSize:e=>`${e.value} 像素`,descending:"遞減",descendingSort:e=>`已依據「${e.columnName}」欄遞減排序`,resizerDescription:"按 Enter 鍵以開始調整大小",select:"選取",selectAll:"全選",sortable:"可排序的欄"};var Bs;Bs={"ar-AE":u_,"bg-BG":c_,"cs-CZ":d_,"da-DK":f_,"de-DE":p_,"el-GR":m_,"en-US":h_,"es-ES":v_,"et-EE":g_,"fi-FI":y_,"fr-FR":x_,"he-IL":b_,"hr-HR":w_,"hu-HU":__,"it-IT":S_,"ja-JP":k_,"ko-KR":$_,"lt-LT":E_,"lv-LV":P_,"nb-NO":T_,"nl-NL":C_,"pl-PL":M_,"pt-BR":D_,"pt-PT":N_,"ro-RO":R_,"ru-RU":L_,"sk-SK":A_,"sl-SI":z_,"sr-SP":I_,"sv-SE":j_,"tr-TR":F_,"uk-UA":O_,"zh-CN":K_,"zh-TW":V_};function lN(e,t){let{key:n}=e,o=t.selectionManager,l=Mt(),s=!t.selectionManager.canSelectItem(n),u=t.selectionManager.isSelected(n);var d;return{checkboxProps:{id:l,"aria-label":kr((d=Ks)&&d.__esModule?d.default:d,"@react-aria/grid").format("select"),isSelected:u,isDisabled:s,onChange:()=>o.toggleSelection(n)}}}function aN(e,t){let{key:n}=e;const{checkboxProps:o}=lN(e,t);return{checkboxProps:{...o,"aria-labelledby":`${o.id} ${l_(t,n)}`}}}function sN(e){let{isEmpty:t,isSelectAll:n,selectionMode:o}=e.selectionManager;var l;return{checkboxProps:{"aria-label":kr((l=Bs)&&l.__esModule?l.default:l,"@react-aria/table").format(o==="single"?"select":"selectAll"),isSelected:n,isDisabled:o!=="multiple"||e.collection.size===0,isIndeterminate:!t&&!n,onChange:()=>e.selectionManager.toggleSelectAll()}}}const uN=({node:e,state:t})=>{const n=ie.useRef(null),{gridCellProps:o}=s_({node:e},t,n),{checkboxProps:l}=aN({key:e.parentKey},t);return D.jsx("td",Object.assign({},o,{ref:n,children:D.jsx(np,Object.assign({},l))}))};function B_(e,t,n){var o,l;let s,{node:u}=e,d=u.props.allowsSorting,{gridCellProps:f}=a_({...e,focusMode:"child"},t,n),p=u.props.isSelectionCell&&t.selectionManager.selectionMode==="single",{pressProps:h}=wr({isDisabled:!d||p,onPress(){t.sort(u.key)},ref:n}),{focusableProps:y}=Os({},n),v=((o=t.sortDescriptor)===null||o===void 0?void 0:o.column)===u.key,x=(l=t.sortDescriptor)===null||l===void 0?void 0:l.direction;u.props.allowsSorting&&!xl()&&(s=v?x:"none");let b=kr((_=Bs)&&_.__esModule?_.default:_,"@react-aria/table");var _;let S;d&&(S=`${b.format("sortable")}`,v&&x&&xl()&&(S=`${S}, ${b.format(x)}`));let $=Vs(S),E=t.collection.size===0;return k.useEffect(()=>{E&&t.selectionManager.focusedKey===u.key&&t.selectionManager.setFocusedKey(null)},[E,t.selectionManager,u.key]),{columnHeaderProps:{...we(y,f,h,$,E?{tabIndex:-1}:null),role:"columnheader",id:oN(t,u.key),"aria-colspan":u.colSpan&&u.colSpan>1?u.colSpan:void 0,"aria-sort":s}}}const cN=({node:e,state:t})=>{var n,o;const l=ie.useRef(null),{columnHeaderProps:s}=B_({node:e},t,l),u=((n=t.sortDescriptor)===null||n===void 0?void 0:n.column)===e.key,{isFocusVisible:d,focusProps:f}=Bn();return D.jsxs("th",Object.assign({ref:l,colSpan:e.colspan,className:Wo.th,style:{textAlign:e.colspan>1?"center":"left",cursor:e.props.allowsSorting?"pointer":"default"}},we(s,f),{children:[d&&D.jsx(Fn,{}),e.rendered,e.props.allowsSorting&&D.jsx("span",{"aria-hidden":"true",style:{padding:"0 2px",display:"inline-flex",verticalAlign:"middle",transition:"all 300ms ease-in-out",visibility:u?"visible":"hidden",rotate:((o=t.sortDescriptor)===null||o===void 0?void 0:o.direction)==="ascending"?"0deg":"-180deg"},children:D.jsx(Ct,{children:"Stat_1"})})]}))};function dN(e,t,n){let{node:o,isVirtualized:l}=e,s={role:"row"};return!l||kx()||(s["aria-rowindex"]=o.index+1),{rowProps:s}}const fN=({item:e,state:t,children:n})=>{const o=ie.useRef(null),{rowProps:l}=dN({node:e});return D.jsx("tr",Object.assign({},l,{ref:o,children:n}))};function pN(e,t,n){var o,l;let{node:s,isVirtualized:u,shouldSelectOnPressUp:d,onAction:f}=e,{actions:p}=ap.get(t),h=p.onRowAction?()=>{var _;return(_=p.onRowAction)===null||_===void 0?void 0:_.call(p,s.key)}:f,{itemProps:y,...v}=ip({selectionManager:t.selectionManager,key:s.key,ref:n,shouldSelectOnPressUp:d,onAction:h||!(s==null||(o=s.props)===null||o===void 0)&&o.onAction?Bo(s==null||(l=s.props)===null||l===void 0?void 0:l.onAction,h):void 0,isDisabled:t.collection.size===0}),x=t.selectionManager.isSelected(s.key),b={role:"row","aria-selected":t.selectionManager.selectionMode!=="none"?x:void 0,"aria-disabled":v.isDisabled||void 0,...y};return u&&(b["aria-rowindex"]=s.index+1),{rowProps:b,...v}}function mN(e,t,n){let{node:o,isVirtualized:l}=e,{rowProps:s,...u}=pN(e,t,n),{direction:d}=Sr();!l||kx()?delete s["aria-rowindex"]:s["aria-rowindex"]=o.index+1+t.collection.headerRows.length;let f={},p=dM(o.props),h=u.hasAction?p:{};return{rowProps:{...we(s,f,h),"aria-labelledby":l_(t,o.key)},...u}}const hN=e=>{const{node:t,children:n,state:o}=e,l=ie.useRef(null),s=o.selectionManager.isDisabled(t.key),u=o.selectionManager.isSelected(t.key),{rowProps:d,isPressed:f}=mN({node:t},o,l),{isHovered:p,hoverProps:h}=ep({isDisabled:s}),{isFocusVisible:y,focusProps:v}=Bn();return D.jsxs("tr",Object.assign({ref:l,"data-pressed":f?"true":void 0,"data-hover":p?"true":void 0,"data-selected":u?"true":void 0},we(d,h,v),{className:Ye(Wo.tr,p&&Wo.hovered,u&&Wo.selected),children:[n,y&&D.jsx(Fn,{as:"td"})]}))};function vN(){return{rowGroupProps:{role:"rowgroup"}}}function gN(){return vN()}const yy=({type:e="thead",children:t})=>{const{rowGroupProps:n}=gN(),o=e;return D.jsx(o,Object.assign({},n,{style:{borderBottom:o==="thead"?"2px solid var(--md-sys-color-outline-variant)":""},children:t}))},yN=({node:e,state:t})=>{const n=ie.useRef(null),{columnHeaderProps:o}=B_({node:e},t,n),{checkboxProps:l}=sN(t);return D.jsx("th",Object.assign({},o,{ref:n,children:t.selectionManager.selectionMode==="single"?D.jsx(yw,{children:l["aria-label"]}):D.jsx(np,Object.assign({},l))}))};let xN=class{*[Symbol.iterator](){yield*[...this.rows]}get size(){return[...this.rows].length}getKeys(){return this.keyMap.keys()}getKeyBefore(t){let n=this.keyMap.get(t);var o;return n&&(o=n.prevKey)!==null&&o!==void 0?o:null}getKeyAfter(t){let n=this.keyMap.get(t);var o;return n&&(o=n.nextKey)!==null&&o!==void 0?o:null}getFirstKey(){var t;return(t=[...this.rows][0])===null||t===void 0?void 0:t.key}getLastKey(){var t;let n=[...this.rows];return(t=n[n.length-1])===null||t===void 0?void 0:t.key}getItem(t){var n;return(n=this.keyMap.get(t))!==null&&n!==void 0?n:null}at(t){const n=[...this.getKeys()];return this.getItem(n[t])}getChildren(t){let n=this.keyMap.get(t);return(n==null?void 0:n.childNodes)||[]}constructor(t){this.keyMap=new Map,this.keyMap=new Map,this.columnCount=t==null?void 0:t.columnCount,this.rows=[];let n=y=>{let v=this.keyMap.get(y.key);t.visitNode&&(y=t.visitNode(y)),this.keyMap.set(y.key,y);let x=new Set,b=null,_=!1;var S;if(y.type==="item"){for(let M of y.childNodes)if(((S=M.props)===null||S===void 0?void 0:S.colSpan)!==void 0){_=!0;break}}for(let M of y.childNodes){var $,E,N,O;M.type==="cell"&&_&&(M.colspan=($=M.props)===null||$===void 0?void 0:$.colSpan,M.colSpan=(E=M.props)===null||E===void 0?void 0:E.colSpan,M.colIndex=b?((N=b.colIndex)!==null&&N!==void 0?N:b.index)+((O=b.colSpan)!==null&&O!==void 0?O:1):M.index),M.type==="cell"&&M.parentKey==null&&(M.parentKey=y.key),x.add(M.key),b?(b.nextKey=M.key,M.prevKey=b.key):M.prevKey=null,n(M),b=M}if(b&&(b.nextKey=null),v)for(let M of v.childNodes)x.has(M.key)||o(M)},o=y=>{this.keyMap.delete(y.key);for(let v of y.childNodes)this.keyMap.get(v.key)===v&&o(v)},l=null;for(let[y,v]of t.items.entries()){var s,u,d,f,p,h;let x={...v,level:(s=v.level)!==null&&s!==void 0?s:0,key:(u=v.key)!==null&&u!==void 0?u:"row-"+y,type:(d=v.type)!==null&&d!==void 0?d:"row",value:(f=v.value)!==null&&f!==void 0?f:null,hasChildNodes:!0,childNodes:[...v.childNodes],rendered:v.rendered,textValue:(p=v.textValue)!==null&&p!==void 0?p:"",index:(h=v.index)!==null&&h!==void 0?h:y};l?(l.nextKey=x.key,x.prevKey=l.key):x.prevKey=null,this.rows.push(x),n(x),l=x}l&&(l.nextKey=null)}};const U_="row-header-column-"+Math.random().toString(36).slice(2);let rf="row-header-column-"+Math.random().toString(36).slice(2);for(;U_===rf;)rf="row-header-column-"+Math.random().toString(36).slice(2);function bN(e,t){if(t.length===0)return[];let n=[],o=new Map;for(let h of t){let y=h.parentKey,v=[h];for(;y;){let x=e.get(y);if(!x)break;if(o.has(x)){var l,s;(s=(l=x).colSpan)!==null&&s!==void 0||(l.colSpan=0),x.colSpan++,x.colspan=x.colSpan;let{column:b,index:_}=o.get(x);if(_>v.length)break;for(let S=_;S<v.length;S++)b.splice(S,0,null);for(let S=v.length;S<b.length;S++)b[S]&&o.has(b[S])&&(o.get(b[S]).index=S)}else x.colSpan=1,x.colspan=1,v.push(x),o.set(x,{column:v,index:v.length-1});y=x.parentKey}n.push(v),h.index=n.length-1}let u=Math.max(...n.map(h=>h.length)),d=Array(u).fill(0).map(()=>[]),f=0;for(let h of n){let y=u-1;for(let v of h){if(v){let x=d[y],b=x.reduce((_,S)=>{var $;return _+(($=S.colSpan)!==null&&$!==void 0?$:1)},0);if(b<f){let _={type:"placeholder",key:"placeholder-"+v.key,colspan:f-b,colSpan:f-b,index:b,value:null,rendered:null,level:y,hasChildNodes:!1,childNodes:[],textValue:""};x.length>0&&(x[x.length-1].nextKey=_.key,_.prevKey=x[x.length-1].key),x.push(_)}x.length>0&&(x[x.length-1].nextKey=v.key,v.prevKey=x[x.length-1].key),v.level=y,v.colIndex=f,x.push(v)}y--}f++}let p=0;for(let h of d){let y=h.reduce((v,x)=>{var b;return v+((b=x.colSpan)!==null&&b!==void 0?b:1)},0);if(y<t.length){let v={type:"placeholder",key:"placeholder-"+h[h.length-1].key,colSpan:t.length-y,colspan:t.length-y,index:y,value:null,rendered:null,level:p,hasChildNodes:!1,childNodes:[],textValue:"",prevKey:h[h.length-1].key};h.push(v)}p++}return d.map((h,y)=>({type:"headerrow",key:"headerrow-"+y,index:y,value:null,rendered:null,level:0,hasChildNodes:!0,childNodes:h,textValue:""}))}let wN=class extends xN{*[Symbol.iterator](){yield*this.body.childNodes}get size(){return this._size}getKeys(){return this.keyMap.keys()}getKeyBefore(t){let n=this.keyMap.get(t);var o;return(o=n==null?void 0:n.prevKey)!==null&&o!==void 0?o:null}getKeyAfter(t){let n=this.keyMap.get(t);var o;return(o=n==null?void 0:n.nextKey)!==null&&o!==void 0?o:null}getFirstKey(){var t,n;return(n=(t=Ln(this.body.childNodes))===null||t===void 0?void 0:t.key)!==null&&n!==void 0?n:null}getLastKey(){var t,n;return(n=(t=Vo(this.body.childNodes))===null||t===void 0?void 0:t.key)!==null&&n!==void 0?n:null}getItem(t){var n;return(n=this.keyMap.get(t))!==null&&n!==void 0?n:null}at(t){const n=[...this.getKeys()];return this.getItem(n[t])}getChildren(t){return t===this.body.key?this.body.childNodes:super.getChildren(t)}getTextValue(t){let n=this.getItem(t);if(!n)return"";if(n.textValue)return n.textValue;let o=this.rowHeaderColumnKeys;if(o){let l=[];for(let s of n.childNodes){let u=this.columns[s.index];if(o.has(u.key)&&s.textValue&&l.push(s.textValue),l.length===o.size)break}return l.join(" ")}return""}constructor(t,n,o){let l=new Set,s=null,u=[];if(o!=null&&o.showSelectionCheckboxes){let y={type:"column",key:U_,value:null,textValue:"",level:0,index:o!=null&&o.showDragButtons?1:0,hasChildNodes:!1,rendered:null,childNodes:[],props:{isSelectionCell:!0}};u.unshift(y)}if(o!=null&&o.showDragButtons){let y={type:"column",key:rf,value:null,textValue:"",level:0,index:0,hasChildNodes:!1,rendered:null,childNodes:[],props:{isDragButtonCell:!0}};u.unshift(y)}let d=[],f=new Map,p=y=>{switch(y.type){case"body":s=y;break;case"column":f.set(y.key,y),y.hasChildNodes||(u.push(y),y.props.isRowHeader&&l.add(y.key));break;case"item":return void d.push(y)}for(let v of y.childNodes)p(v)};for(let y of t)p(y);let h=bN(f,u);if(h.forEach((y,v)=>d.splice(v,0,y)),super({columnCount:u.length,items:d,visitNode:y=>(y.column=u[y.index],y)}),this._size=0,this.columns=u,this.rowHeaderColumnKeys=l,this.body=s,this.headerRows=h,this._size=[...s.childNodes].length,this.rowHeaderColumnKeys.size===0){let y=this.columns.find(v=>{var x,b;return!(!((x=v.props)===null||x===void 0)&&x.isDragButtonCell)&&!(!((b=v.props)===null||b===void 0)&&b.isSelectionCell)});y&&this.rowHeaderColumnKeys.add(y.key)}}};function _N(e){let{collection:t,focusMode:n}=e,o=e.UNSAFE_selectionState||Db(e),l=k.useMemo(()=>e.disabledKeys?new Set(e.disabledKeys):new Set,[e.disabledKeys]),s=o.setFocusedKey;o.setFocusedKey=(f,p)=>{if(n==="cell"&&f!=null){let b=t.getItem(f);if((b==null?void 0:b.type)==="item"){var h,y;let _=ot(b,t);var v,x;f=p==="last"?(v=(h=Vo(_))===null||h===void 0?void 0:h.key)!==null&&v!==void 0?v:null:(x=(y=Ln(_))===null||y===void 0?void 0:y.key)!==null&&x!==void 0?x:null}}s(f,p)};let u=k.useMemo(()=>new Nb(t,o),[t,o]);const d=k.useRef(null);return k.useEffect(()=>{if(o.focusedKey!=null&&d.current&&!t.getItem(o.focusedKey)){const f=d.current.getItem(o.focusedKey),p=(f==null?void 0:f.parentKey)==null||f.type!=="cell"&&f.type!=="rowheader"&&f.type!=="column"?f:d.current.getItem(f.parentKey);if(!p)return void o.setFocusedKey(null);const h=d.current.rows,y=t.rows,v=h.length-y.length;let x=Math.min(v>1?Math.max(p.index-v+1,0):p.index,y.length-1),b=null;for(;x>=0;){if(!u.isDisabled(y[x].key)&&y[x].type!=="headerrow"){b=y[x];break}x<y.length-1?x++:(x>p.index&&(x=p.index),x--)}if(b){const _=b.hasChildNodes?[...ot(b,t)]:[],S=b.hasChildNodes&&p!==f&&f&&f.index<_.length?_[f.index].key:b.key;o.setFocusedKey(S)}else o.setFocusedKey(null)}d.current=t},[t,u,o,o.focusedKey]),{collection:t,disabledKeys:l,isKeyboardNavigationDisabled:!1,selectionManager:u}}const SN={ascending:"descending",descending:"ascending"};function kN(e){let[t,n]=k.useState(!1),{selectionMode:o="none",showSelectionCheckboxes:l,showDragButtons:s}=e,u=k.useMemo(()=>({showSelectionCheckboxes:l&&o!=="none",showDragButtons:s,selectionMode:o,columns:[]}),[e.children,l,o,s]),d=Lb(e,k.useCallback(y=>new wN(y,null,u),[u]),u),{disabledKeys:f,selectionManager:p}=_N({...e,collection:d,disabledBehavior:e.disabledBehavior||"selection"});var h;return{collection:d,disabledKeys:f,selectionManager:p,showSelectionCheckboxes:e.showSelectionCheckboxes||!1,sortDescriptor:(h=e.sortDescriptor)!==null&&h!==void 0?h:null,isKeyboardNavigationDisabled:d.size===0||t,setKeyboardNavigationDisabled:n,sort(y,v){var x,b;(b=e.onSortChange)===null||b===void 0||b.call(e,{column:y,direction:v??(((x=e.sortDescriptor)===null||x===void 0?void 0:x.column)===y?SN[e.sortDescriptor.direction]:"ascending")})}}}let H_=class{isCell(t){return t.type==="cell"}isRow(t){return t.type==="row"||t.type==="item"}isDisabled(t){var n;return this.disabledBehavior==="all"&&(((n=t.props)===null||n===void 0?void 0:n.isDisabled)||this.disabledKeys.has(t.key))}findPreviousKey(t,n){let o=t!=null?this.collection.getKeyBefore(t):this.collection.getLastKey();for(;o!=null;){let l=this.collection.getItem(o);if(!l)return null;if(!this.isDisabled(l)&&(!n||n(l)))return o;o=this.collection.getKeyBefore(o)}return null}findNextKey(t,n){let o=t!=null?this.collection.getKeyAfter(t):this.collection.getFirstKey();for(;o!=null;){let l=this.collection.getItem(o);if(!l)return null;if(!this.isDisabled(l)&&(!n||n(l)))return o;if(o=this.collection.getKeyAfter(o),o==null)return null}return null}getKeyForItemInRowByIndex(t,n=0){if(n<0)return null;let o=this.collection.getItem(t);if(!o)return null;let l=0;for(let d of ot(o,this.collection)){var s,u;if(d.colSpan&&d.colSpan+l>n)return(s=d.key)!==null&&s!==void 0?s:null;if(d.colSpan&&(l=l+d.colSpan-1),l===n)return(u=d.key)!==null&&u!==void 0?u:null;l++}return null}getKeyBelow(t){let n=t,o=this.collection.getItem(n);if(!o)return null;var l;if(this.isCell(o)&&(n=(l=o.parentKey)!==null&&l!==void 0?l:null),n==null)return null;if(n=this.findNextKey(n,s=>s.type==="item"),n!=null){if(this.isCell(o)){let s=o.colIndex?o.colIndex:o.index;return this.getKeyForItemInRowByIndex(n,s)}if(this.focusMode==="row")return n}return null}getKeyAbove(t){let n=t,o=this.collection.getItem(n);if(!o)return null;var l;if(this.isCell(o)&&(n=(l=o.parentKey)!==null&&l!==void 0?l:null),n==null)return null;if(n=this.findPreviousKey(n,s=>s.type==="item"),n!=null){if(this.isCell(o)){let s=o.colIndex?o.colIndex:o.index;return this.getKeyForItemInRowByIndex(n,s)}if(this.focusMode==="row")return n}return null}getKeyRightOf(t){let n=this.collection.getItem(t);if(!n)return null;if(this.isRow(n)){var o,l;let h=ot(n,this.collection);var s;return(s=this.direction==="rtl"?(o=Vo(h))===null||o===void 0?void 0:o.key:(l=Ln(h))===null||l===void 0?void 0:l.key)!==null&&s!==void 0?s:null}if(this.isCell(n)&&n.parentKey!=null){let h=this.collection.getItem(n.parentKey);if(!h)return null;let y=ot(h,this.collection);var u;let v=(u=this.direction==="rtl"?tl(y,n.index-1):tl(y,n.index+1))!==null&&u!==void 0?u:null;var d,f,p;return v?(d=v.key)!==null&&d!==void 0?d:null:this.focusMode==="row"?(f=n.parentKey)!==null&&f!==void 0?f:null:(p=this.direction==="rtl"?this.getFirstKey(t):this.getLastKey(t))!==null&&p!==void 0?p:null}return null}getKeyLeftOf(t){let n=this.collection.getItem(t);if(!n)return null;if(this.isRow(n)){var o,l;let h=ot(n,this.collection);var s;return(s=this.direction==="rtl"?(o=Ln(h))===null||o===void 0?void 0:o.key:(l=Vo(h))===null||l===void 0?void 0:l.key)!==null&&s!==void 0?s:null}if(this.isCell(n)&&n.parentKey!=null){let h=this.collection.getItem(n.parentKey);if(!h)return null;let y=ot(h,this.collection);var u;let v=(u=this.direction==="rtl"?tl(y,n.index+1):tl(y,n.index-1))!==null&&u!==void 0?u:null;var d,f,p;return v?(d=v.key)!==null&&d!==void 0?d:null:this.focusMode==="row"?(f=n.parentKey)!==null&&f!==void 0?f:null:(p=this.direction==="rtl"?this.getLastKey(t):this.getFirstKey(t))!==null&&p!==void 0?p:null}return null}getFirstKey(t,n){let o,l=t??null;if(l!=null){if(o=this.collection.getItem(l),!o)return null;if(this.isCell(o)&&!n&&o.parentKey!=null){var s;let p=this.collection.getItem(o.parentKey);return p&&(u=(s=Ln(ot(p,this.collection)))===null||s===void 0?void 0:s.key)!==null&&u!==void 0?u:null;var u}}if(l=this.findNextKey(void 0,p=>p.type==="item"),l!=null&&(o&&this.isCell(o)&&n||this.focusMode==="cell")){var d;let p=this.collection.getItem(l);if(!p)return null;var f;l=(f=(d=Ln(ot(p,this.collection)))===null||d===void 0?void 0:d.key)!==null&&f!==void 0?f:null}return l}getLastKey(t,n){let o,l=t??null;if(l!=null){if(o=this.collection.getItem(l),!o)return null;if(this.isCell(o)&&!n&&o.parentKey!=null){var s;let p=this.collection.getItem(o.parentKey);if(!p)return null;let h=ot(p,this.collection);var u;return(u=(s=Vo(h))===null||s===void 0?void 0:s.key)!==null&&u!==void 0?u:null}}if(l=this.findPreviousKey(void 0,p=>p.type==="item"),l!=null&&(o&&this.isCell(o)&&n||this.focusMode==="cell")){var d;let p=this.collection.getItem(l);if(!p)return null;let h=ot(p,this.collection);var f;l=(f=(d=Vo(h))===null||d===void 0?void 0:d.key)!==null&&f!==void 0?f:null}return l}getKeyPageAbove(t){let n=t,o=this.layoutDelegate.getItemRect(n);if(!o)return null;let l=Math.max(0,o.y+o.height-this.layoutDelegate.getVisibleRect().height);for(;o&&o.y>l&&n!=null;){var s;if(n=(s=this.getKeyAbove(n))!==null&&s!==void 0?s:null,n==null)break;o=this.layoutDelegate.getItemRect(n)}return n}getKeyPageBelow(t){let n=t,o=this.layoutDelegate.getItemRect(n);if(!o)return null;let l=this.layoutDelegate.getVisibleRect().height,s=Math.min(this.layoutDelegate.getContentSize().height,o.y+l);for(;o&&o.y+o.height<s;){let u=this.getKeyBelow(n);if(u==null)break;o=this.layoutDelegate.getItemRect(u),n=u}return n}getKeyForSearch(t,n){let o=n??null;if(!this.collator)return null;let l=this.collection;if(o=n??this.getFirstKey(),o==null)return null;let s=l.getItem(o);if(!s)return null;var u;s.type==="cell"&&(o=(u=s.parentKey)!==null&&u!==void 0?u:null);let d=!1;for(;o!=null;){let h=l.getItem(o);if(!h)return null;if(h.textValue){let y=h.textValue.slice(0,t.length);var f,p;if(this.collator.compare(y,t)===0)return this.isRow(h)&&this.focusMode==="cell"?(p=(f=Ln(ot(h,this.collection)))===null||f===void 0?void 0:f.key)!==null&&p!==void 0?p:null:h.key}o=this.findNextKey(o,y=>y.type==="item"),o!=null||d||(o=this.getFirstKey(),d=!0)}return null}constructor(t){if(this.collection=t.collection,this.disabledKeys=t.disabledKeys,this.disabledBehavior=t.disabledBehavior||"all",this.direction=t.direction,this.collator=t.collator,!t.layout&&!t.ref)throw new Error("Either a layout or a ref must be specified.");this.layoutDelegate=t.layoutDelegate||(t.layout?new $N(t.layout):new Xd(t.ref)),this.focusMode=t.focusMode||"row"}},$N=class{getContentSize(){return this.layout.getContentSize()}getItemRect(t){var n;return((n=this.layout.getLayoutInfo(t))===null||n===void 0?void 0:n.rect)||null}getVisibleRect(){return this.layout.virtualizer.visibleRect}constructor(t){this.layout=t}},EN=class extends H_{isCell(t){return t.type==="cell"||t.type==="rowheader"||t.type==="column"}getKeyBelow(t){let n=this.collection.getItem(t);if(!n)return null;if(n.type==="column"){let o=Ln(ot(n,this.collection));if(o)return o.key;let l=this.getFirstKey();return l==null?null:this.collection.getItem(l)?super.getKeyForItemInRowByIndex(l,n.index):null}return super.getKeyBelow(t)}getKeyAbove(t){let n=this.collection.getItem(t);if(!n)return null;if(n.type==="column"){let s=n.parentKey!=null?this.collection.getItem(n.parentKey):null;return s&&s.type==="column"?s.key:null}let o=super.getKeyAbove(t),l=o!=null?this.collection.getItem(o):null;return l&&l.type!=="headerrow"?o:this.isCell(n)?this.collection.columns[n.index].key:this.collection.columns[0].key}findNextColumnKey(t){let n=this.findNextKey(t.key,l=>l.type==="column");if(n!=null)return n;let o=this.collection.headerRows[t.level];for(let l of ot(o,this.collection))if(l.type==="column")return l.key;return null}findPreviousColumnKey(t){let n=this.findPreviousKey(t.key,s=>s.type==="column");if(n!=null)return n;let o=this.collection.headerRows[t.level],l=[...ot(o,this.collection)];for(let s=l.length-1;s>=0;s--){let u=l[s];if(u.type==="column")return u.key}return null}getKeyRightOf(t){let n=this.collection.getItem(t);return n?n.type==="column"?this.direction==="rtl"?this.findPreviousColumnKey(n):this.findNextColumnKey(n):super.getKeyRightOf(t):null}getKeyLeftOf(t){let n=this.collection.getItem(t);return n?n.type==="column"?this.direction==="rtl"?this.findNextColumnKey(n):this.findPreviousColumnKey(n):super.getKeyLeftOf(t):null}getKeyForSearch(t,n){if(!this.collator)return null;let o=this.collection,l=n??this.getFirstKey();if(l==null)return null;let s=o.getItem(l);var u;(s==null?void 0:s.type)==="cell"&&(l=(u=s.parentKey)!==null&&u!==void 0?u:null);let d=!1;for(;l!=null;){let f=o.getItem(l);if(!f)return null;for(let p of ot(f,this.collection)){let h=o.columns[p.index];if(o.rowHeaderColumnKeys.has(h.key)&&p.textValue){let y=p.textValue.slice(0,t.length);if(this.collator.compare(y,t)===0){let v=n!=null?o.getItem(n):s;return(v==null?void 0:v.type)==="cell"?p.key:f.key}}}l=this.getKeyBelow(l),l!=null||d||(l=this.getFirstKey(),d=!0)}return null}};function PN(e,t,n){let{isVirtualized:o,disallowTypeAhead:l,keyboardDelegate:s,focusMode:u,scrollRef:d,getRowText:f,onRowAction:p,onCellAction:h}=e,{selectionManager:y}=t;e["aria-label"]||e["aria-labelledby"]||console.warn("An aria-label or aria-labelledby prop is required for accessibility.");let v=op({usage:"search",sensitivity:"base"}),{direction:x}=Sr(),b=t.selectionManager.disabledBehavior,_=k.useMemo(()=>s||new H_({collection:t.collection,disabledKeys:t.disabledKeys,disabledBehavior:b,ref:n,direction:x,collator:v,focusMode:u}),[s,t.collection,t.disabledKeys,b,n,x,v,u]),{collectionProps:S}=Tb({ref:n,selectionManager:y,keyboardDelegate:_,isVirtualized:o,scrollRef:d,disallowTypeAhead:l}),$=Mt(e.id);ap.set(t,{keyboardDelegate:_,actions:{onRowAction:p,onCellAction:h}});let E=XM({selectionManager:y,hasItemActions:!(!p&&!h)}),N=Jr(e,{labelable:!0}),O=k.useCallback(P=>{y.isFocused?P.currentTarget.contains(P.target)||y.setFocused(!1):P.currentTarget.contains(P.target)&&y.setFocused(!0)},[y]),M=k.useMemo(()=>({onBlur:S.onBlur,onFocus:O}),[O,S.onBlur]),I=tD(n,{isDisabled:t.collection.size!==0}),z=we(N,{role:"grid",id:$,"aria-multiselectable":y.selectionMode==="multiple"?"true":void 0},t.isKeyboardNavigationDisabled?M:S,t.collection.size===0&&{tabIndex:I?-1:0}||void 0,E);return o&&(z["aria-rowcount"]=t.collection.size,z["aria-colcount"]=t.collection.columnCount),qM({getRowText:f},t),{gridProps:z}}function TN(e,t,n){let{keyboardDelegate:o,isVirtualized:l,layoutDelegate:s,layout:u}=e,d=op({usage:"search",sensitivity:"base"}),{direction:f}=Sr(),p=t.selectionManager.disabledBehavior,h=k.useMemo(()=>o||new EN({collection:t.collection,disabledKeys:t.disabledKeys,disabledBehavior:p,ref:n,direction:f,collator:d,layoutDelegate:s,layout:u}),[o,t.collection,t.disabledKeys,p,n,f,d,s,u]),y=Mt(e.id);lp.set(t,y);let{gridProps:v}=PN({...e,id:y,keyboardDelegate:h},t,n);l&&(v["aria-rowcount"]=t.collection.size+t.collection.headerRows.length);let{column:x,direction:b}=t.sortDescriptor||{},_=kr((S=Bs)&&S.__esModule?S.default:S,"@react-aria/table");var S;let $=k.useMemo(()=>{var N,O;let M=(O=(N=t.collection.columns.find(I=>I.key===x))===null||N===void 0?void 0:N.textValue)!==null&&O!==void 0?O:"";return b&&x?_.format(`${b}Sort`,{columnName:M}):void 0},[b,x,t.collection.columns]),E=Vs($);return Sb(()=>{$&&Yf($,"assertive",500)},[$]),{gridProps:we(v,E,{"aria-describedby":[E["aria-describedby"],v["aria-describedby"]].filter(Boolean).join(" ")})}}const W_=e=>{var t;const{paginator:n,selectionMode:o,selectionBehavior:l}=e,s=kN(Object.assign(Object.assign({},e),{showSelectionCheckboxes:o==="multiple"&&l!=="replace"})),{collection:u}=s,d=ie.useRef(null),{gridProps:f}=TN(e,s,d),p=(t=n==null?void 0:n.pageSizes)!==null&&t!==void 0?t:[5,10,20],[h,y]=ie.useState(1),[v,x]=ie.useState(p[0]);ie.useEffect(()=>{Math.ceil(u.size/v)<h&&y(1)},[h,v]);const b=ie.useMemo(()=>{const _=Math.ceil(u.size/v);return{pageSizes:p,currentPage:h,totalPages:_,selectedPageSize:v,setSelectedPageSize:x}},[p,h,u,v,x]);return D.jsxs(D.Fragment,{children:[D.jsxs("table",Object.assign({},f,{ref:d,className:Wo.table,children:[D.jsx(yy,{type:"thead",children:u.headerRows.map(_=>D.jsx(fN,{item:_,state:s,children:[..._.childNodes].map(S=>S.props.isSelectionCell?D.jsx(yN,{node:S,state:s},S.key):D.jsx(cN,{node:S,state:s},S.key))},_.key))}),D.jsx(yy,{type:"tbody",children:[...u.body.childNodes].slice(v*(h-1),h*v).map(_=>D.jsx(hN,{node:_,state:s,children:[..._.childNodes].map(S=>S.props.isSelectionCell?D.jsx(uN,{node:S,state:s},S.key):D.jsx(iN,{node:S,state:s},S.key))},_.key))})]})),n&&D.jsx(rN,Object.assign({onPageChange:_=>{y(_)}},b))]})};W_.displayName="Actify.Table";const Y_=e=>{const{alt:t,src:n}=e,o=an(e,["alt","src"]);return D.jsx("img",Object.assign({},o,{alt:t||"avatar",src:n||"https://avatars.githubusercontent.com/u/15228321?v=4"}))};Y_.displayName="Actify.Avatar";const Q_=6048e5,CN=864e5,G_=6e4,X_=36e5,xy=Symbol.for("constructDateFrom");function On(e,t){return typeof e=="function"?e(t):e&&typeof e=="object"&&xy in e?e[xy](t):e instanceof Date?new e.constructor(t):new Date(t)}function jt(e,t){return On(t||e,e)}let MN={};function Us(){return MN}function $l(e,t){var d,f,p,h;const n=Us(),o=(t==null?void 0:t.weekStartsOn)??((f=(d=t==null?void 0:t.locale)==null?void 0:d.options)==null?void 0:f.weekStartsOn)??n.weekStartsOn??((h=(p=n.locale)==null?void 0:p.options)==null?void 0:h.weekStartsOn)??0,l=jt(e,t==null?void 0:t.in),s=l.getDay(),u=(s<o?7:0)+s-o;return l.setDate(l.getDate()-u),l.setHours(0,0,0,0),l}function Ts(e,t){return $l(e,{...t,weekStartsOn:1})}function q_(e,t){const n=jt(e,t==null?void 0:t.in),o=n.getFullYear(),l=On(n,0);l.setFullYear(o+1,0,4),l.setHours(0,0,0,0);const s=Ts(l),u=On(n,0);u.setFullYear(o,0,4),u.setHours(0,0,0,0);const d=Ts(u);return n.getTime()>=s.getTime()?o+1:n.getTime()>=d.getTime()?o:o-1}function by(e){const t=jt(e),n=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return n.setUTCFullYear(t.getFullYear()),+e-+n}function DN(e,...t){const n=On.bind(null,t.find(o=>typeof o=="object"));return t.map(n)}function wy(e,t){const n=jt(e,t==null?void 0:t.in);return n.setHours(0,0,0,0),n}function NN(e,t,n){const[o,l]=DN(n==null?void 0:n.in,e,t),s=wy(o),u=wy(l),d=+s-by(s),f=+u-by(u);return Math.round((d-f)/CN)}function RN(e,t){const n=q_(e,t),o=On(e,0);return o.setFullYear(n,0,4),o.setHours(0,0,0,0),Ts(o)}function LN(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function AN(e){return!(!LN(e)&&typeof e!="number"||isNaN(+jt(e)))}function zN(e,t){const n=jt(e,t==null?void 0:t.in);return n.setFullYear(n.getFullYear(),0,1),n.setHours(0,0,0,0),n}const IN={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},jN=(e,t,n)=>{let o;const l=IN[e];return typeof l=="string"?o=l:t===1?o=l.one:o=l.other.replace("{{count}}",t.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+o:o+" ago":o};function wd(e){return(t={})=>{const n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}const FN={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},ON={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},KN={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},VN={date:wd({formats:FN,defaultWidth:"full"}),time:wd({formats:ON,defaultWidth:"full"}),dateTime:wd({formats:KN,defaultWidth:"full"})},BN={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},UN=(e,t,n,o)=>BN[e];function Wi(e){return(t,n)=>{const o=n!=null&&n.context?String(n.context):"standalone";let l;if(o==="formatting"&&e.formattingValues){const u=e.defaultFormattingWidth||e.defaultWidth,d=n!=null&&n.width?String(n.width):u;l=e.formattingValues[d]||e.formattingValues[u]}else{const u=e.defaultWidth,d=n!=null&&n.width?String(n.width):e.defaultWidth;l=e.values[d]||e.values[u]}const s=e.argumentCallback?e.argumentCallback(t):t;return l[s]}}const HN={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},WN={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},YN={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},QN={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},GN={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},XN={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},qN=(e,t)=>{const n=Number(e),o=n%100;if(o>20||o<10)switch(o%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},ZN={ordinalNumber:qN,era:Wi({values:HN,defaultWidth:"wide"}),quarter:Wi({values:WN,defaultWidth:"wide",argumentCallback:e=>e-1}),month:Wi({values:YN,defaultWidth:"wide"}),day:Wi({values:QN,defaultWidth:"wide"}),dayPeriod:Wi({values:GN,defaultWidth:"wide",formattingValues:XN,defaultFormattingWidth:"wide"})};function Yi(e){return(t,n={})=>{const o=n.width,l=o&&e.matchPatterns[o]||e.matchPatterns[e.defaultMatchWidth],s=t.match(l);if(!s)return null;const u=s[0],d=o&&e.parsePatterns[o]||e.parsePatterns[e.defaultParseWidth],f=Array.isArray(d)?eR(d,y=>y.test(u)):JN(d,y=>y.test(u));let p;p=e.valueCallback?e.valueCallback(f):f,p=n.valueCallback?n.valueCallback(p):p;const h=t.slice(u.length);return{value:p,rest:h}}}function JN(e,t){for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&t(e[n]))return n}function eR(e,t){for(let n=0;n<e.length;n++)if(t(e[n]))return n}function tR(e){return(t,n={})=>{const o=t.match(e.matchPattern);if(!o)return null;const l=o[0],s=t.match(e.parsePattern);if(!s)return null;let u=e.valueCallback?e.valueCallback(s[0]):s[0];u=n.valueCallback?n.valueCallback(u):u;const d=t.slice(l.length);return{value:u,rest:d}}}const nR=/^(\d+)(th|st|nd|rd)?/i,rR=/\d+/i,oR={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},iR={any:[/^b/i,/^(a|c)/i]},lR={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},aR={any:[/1/i,/2/i,/3/i,/4/i]},sR={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},uR={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},cR={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},dR={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},fR={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},pR={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},mR={ordinalNumber:tR({matchPattern:nR,parsePattern:rR,valueCallback:e=>parseInt(e,10)}),era:Yi({matchPatterns:oR,defaultMatchWidth:"wide",parsePatterns:iR,defaultParseWidth:"any"}),quarter:Yi({matchPatterns:lR,defaultMatchWidth:"wide",parsePatterns:aR,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Yi({matchPatterns:sR,defaultMatchWidth:"wide",parsePatterns:uR,defaultParseWidth:"any"}),day:Yi({matchPatterns:cR,defaultMatchWidth:"wide",parsePatterns:dR,defaultParseWidth:"any"}),dayPeriod:Yi({matchPatterns:fR,defaultMatchWidth:"any",parsePatterns:pR,defaultParseWidth:"any"})},hR={code:"en-US",formatDistance:jN,formatLong:VN,formatRelative:UN,localize:ZN,match:mR,options:{weekStartsOn:0,firstWeekContainsDate:1}};function vR(e,t){const n=jt(e,t==null?void 0:t.in);return NN(n,zN(n))+1}function gR(e,t){const n=jt(e,t==null?void 0:t.in),o=+Ts(n)-+RN(n);return Math.round(o/Q_)+1}function Z_(e,t){var h,y,v,x;const n=jt(e,t==null?void 0:t.in),o=n.getFullYear(),l=Us(),s=(t==null?void 0:t.firstWeekContainsDate)??((y=(h=t==null?void 0:t.locale)==null?void 0:h.options)==null?void 0:y.firstWeekContainsDate)??l.firstWeekContainsDate??((x=(v=l.locale)==null?void 0:v.options)==null?void 0:x.firstWeekContainsDate)??1,u=On((t==null?void 0:t.in)||e,0);u.setFullYear(o+1,0,s),u.setHours(0,0,0,0);const d=$l(u,t),f=On((t==null?void 0:t.in)||e,0);f.setFullYear(o,0,s),f.setHours(0,0,0,0);const p=$l(f,t);return+n>=+d?o+1:+n>=+p?o:o-1}function yR(e,t){var d,f,p,h;const n=Us(),o=(t==null?void 0:t.firstWeekContainsDate)??((f=(d=t==null?void 0:t.locale)==null?void 0:d.options)==null?void 0:f.firstWeekContainsDate)??n.firstWeekContainsDate??((h=(p=n.locale)==null?void 0:p.options)==null?void 0:h.firstWeekContainsDate)??1,l=Z_(e,t),s=On((t==null?void 0:t.in)||e,0);return s.setFullYear(l,0,o),s.setHours(0,0,0,0),$l(s,t)}function xR(e,t){const n=jt(e,t==null?void 0:t.in),o=+$l(n,t)-+yR(n,t);return Math.round(o/Q_)+1}function Ce(e,t){const n=e<0?"-":"",o=Math.abs(e).toString().padStart(t,"0");return n+o}const pr={y(e,t){const n=e.getFullYear(),o=n>0?n:1-n;return Ce(t==="yy"?o%100:o,t.length)},M(e,t){const n=e.getMonth();return t==="M"?String(n+1):Ce(n+1,2)},d(e,t){return Ce(e.getDate(),t.length)},a(e,t){const n=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(e,t){return Ce(e.getHours()%12||12,t.length)},H(e,t){return Ce(e.getHours(),t.length)},m(e,t){return Ce(e.getMinutes(),t.length)},s(e,t){return Ce(e.getSeconds(),t.length)},S(e,t){const n=t.length,o=e.getMilliseconds(),l=Math.trunc(o*Math.pow(10,n-3));return Ce(l,t.length)}},Do={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},_y={G:function(e,t,n){const o=e.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(o,{width:"abbreviated"});case"GGGGG":return n.era(o,{width:"narrow"});case"GGGG":default:return n.era(o,{width:"wide"})}},y:function(e,t,n){if(t==="yo"){const o=e.getFullYear(),l=o>0?o:1-o;return n.ordinalNumber(l,{unit:"year"})}return pr.y(e,t)},Y:function(e,t,n,o){const l=Z_(e,o),s=l>0?l:1-l;if(t==="YY"){const u=s%100;return Ce(u,2)}return t==="Yo"?n.ordinalNumber(s,{unit:"year"}):Ce(s,t.length)},R:function(e,t){const n=q_(e);return Ce(n,t.length)},u:function(e,t){const n=e.getFullYear();return Ce(n,t.length)},Q:function(e,t,n){const o=Math.ceil((e.getMonth()+1)/3);switch(t){case"Q":return String(o);case"QQ":return Ce(o,2);case"Qo":return n.ordinalNumber(o,{unit:"quarter"});case"QQQ":return n.quarter(o,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(o,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(o,{width:"wide",context:"formatting"})}},q:function(e,t,n){const o=Math.ceil((e.getMonth()+1)/3);switch(t){case"q":return String(o);case"qq":return Ce(o,2);case"qo":return n.ordinalNumber(o,{unit:"quarter"});case"qqq":return n.quarter(o,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(o,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(o,{width:"wide",context:"standalone"})}},M:function(e,t,n){const o=e.getMonth();switch(t){case"M":case"MM":return pr.M(e,t);case"Mo":return n.ordinalNumber(o+1,{unit:"month"});case"MMM":return n.month(o,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(o,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(o,{width:"wide",context:"formatting"})}},L:function(e,t,n){const o=e.getMonth();switch(t){case"L":return String(o+1);case"LL":return Ce(o+1,2);case"Lo":return n.ordinalNumber(o+1,{unit:"month"});case"LLL":return n.month(o,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(o,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(o,{width:"wide",context:"standalone"})}},w:function(e,t,n,o){const l=xR(e,o);return t==="wo"?n.ordinalNumber(l,{unit:"week"}):Ce(l,t.length)},I:function(e,t,n){const o=gR(e);return t==="Io"?n.ordinalNumber(o,{unit:"week"}):Ce(o,t.length)},d:function(e,t,n){return t==="do"?n.ordinalNumber(e.getDate(),{unit:"date"}):pr.d(e,t)},D:function(e,t,n){const o=vR(e);return t==="Do"?n.ordinalNumber(o,{unit:"dayOfYear"}):Ce(o,t.length)},E:function(e,t,n){const o=e.getDay();switch(t){case"E":case"EE":case"EEE":return n.day(o,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(o,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(o,{width:"short",context:"formatting"});case"EEEE":default:return n.day(o,{width:"wide",context:"formatting"})}},e:function(e,t,n,o){const l=e.getDay(),s=(l-o.weekStartsOn+8)%7||7;switch(t){case"e":return String(s);case"ee":return Ce(s,2);case"eo":return n.ordinalNumber(s,{unit:"day"});case"eee":return n.day(l,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(l,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(l,{width:"short",context:"formatting"});case"eeee":default:return n.day(l,{width:"wide",context:"formatting"})}},c:function(e,t,n,o){const l=e.getDay(),s=(l-o.weekStartsOn+8)%7||7;switch(t){case"c":return String(s);case"cc":return Ce(s,t.length);case"co":return n.ordinalNumber(s,{unit:"day"});case"ccc":return n.day(l,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(l,{width:"narrow",context:"standalone"});case"cccccc":return n.day(l,{width:"short",context:"standalone"});case"cccc":default:return n.day(l,{width:"wide",context:"standalone"})}},i:function(e,t,n){const o=e.getDay(),l=o===0?7:o;switch(t){case"i":return String(l);case"ii":return Ce(l,t.length);case"io":return n.ordinalNumber(l,{unit:"day"});case"iii":return n.day(o,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(o,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(o,{width:"short",context:"formatting"});case"iiii":default:return n.day(o,{width:"wide",context:"formatting"})}},a:function(e,t,n){const l=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(l,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(l,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(l,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(l,{width:"wide",context:"formatting"})}},b:function(e,t,n){const o=e.getHours();let l;switch(o===12?l=Do.noon:o===0?l=Do.midnight:l=o/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(l,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(l,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(l,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(l,{width:"wide",context:"formatting"})}},B:function(e,t,n){const o=e.getHours();let l;switch(o>=17?l=Do.evening:o>=12?l=Do.afternoon:o>=4?l=Do.morning:l=Do.night,t){case"B":case"BB":case"BBB":return n.dayPeriod(l,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(l,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(l,{width:"wide",context:"formatting"})}},h:function(e,t,n){if(t==="ho"){let o=e.getHours()%12;return o===0&&(o=12),n.ordinalNumber(o,{unit:"hour"})}return pr.h(e,t)},H:function(e,t,n){return t==="Ho"?n.ordinalNumber(e.getHours(),{unit:"hour"}):pr.H(e,t)},K:function(e,t,n){const o=e.getHours()%12;return t==="Ko"?n.ordinalNumber(o,{unit:"hour"}):Ce(o,t.length)},k:function(e,t,n){let o=e.getHours();return o===0&&(o=24),t==="ko"?n.ordinalNumber(o,{unit:"hour"}):Ce(o,t.length)},m:function(e,t,n){return t==="mo"?n.ordinalNumber(e.getMinutes(),{unit:"minute"}):pr.m(e,t)},s:function(e,t,n){return t==="so"?n.ordinalNumber(e.getSeconds(),{unit:"second"}):pr.s(e,t)},S:function(e,t){return pr.S(e,t)},X:function(e,t,n){const o=e.getTimezoneOffset();if(o===0)return"Z";switch(t){case"X":return ky(o);case"XXXX":case"XX":return Br(o);case"XXXXX":case"XXX":default:return Br(o,":")}},x:function(e,t,n){const o=e.getTimezoneOffset();switch(t){case"x":return ky(o);case"xxxx":case"xx":return Br(o);case"xxxxx":case"xxx":default:return Br(o,":")}},O:function(e,t,n){const o=e.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+Sy(o,":");case"OOOO":default:return"GMT"+Br(o,":")}},z:function(e,t,n){const o=e.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+Sy(o,":");case"zzzz":default:return"GMT"+Br(o,":")}},t:function(e,t,n){const o=Math.trunc(+e/1e3);return Ce(o,t.length)},T:function(e,t,n){return Ce(+e,t.length)}};function Sy(e,t=""){const n=e>0?"-":"+",o=Math.abs(e),l=Math.trunc(o/60),s=o%60;return s===0?n+String(l):n+String(l)+t+Ce(s,2)}function ky(e,t){return e%60===0?(e>0?"-":"+")+Ce(Math.abs(e)/60,2):Br(e,t)}function Br(e,t=""){const n=e>0?"-":"+",o=Math.abs(e),l=Ce(Math.trunc(o/60),2),s=Ce(o%60,2);return n+l+t+s}const $y=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},J_=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},bR=(e,t)=>{const n=e.match(/(P+)(p+)?/)||[],o=n[1],l=n[2];if(!l)return $y(e,t);let s;switch(o){case"P":s=t.dateTime({width:"short"});break;case"PP":s=t.dateTime({width:"medium"});break;case"PPP":s=t.dateTime({width:"long"});break;case"PPPP":default:s=t.dateTime({width:"full"});break}return s.replace("{{date}}",$y(o,t)).replace("{{time}}",J_(l,t))},wR={p:J_,P:bR},_R=/^D+$/,SR=/^Y+$/,kR=["D","DD","YY","YYYY"];function $R(e){return _R.test(e)}function ER(e){return SR.test(e)}function PR(e,t,n){const o=TR(e,t,n);if(console.warn(o),kR.includes(e))throw new RangeError(o)}function TR(e,t,n){const o=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${o} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const CR=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,MR=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,DR=/^'([^]*?)'?$/,NR=/''/g,RR=/[a-zA-Z]/;function LR(e,t,n){var h,y,v,x;const o=Us(),l=o.locale??hR,s=o.firstWeekContainsDate??((y=(h=o.locale)==null?void 0:h.options)==null?void 0:y.firstWeekContainsDate)??1,u=o.weekStartsOn??((x=(v=o.locale)==null?void 0:v.options)==null?void 0:x.weekStartsOn)??0,d=jt(e,n==null?void 0:n.in);if(!AN(d))throw new RangeError("Invalid time value");let f=t.match(MR).map(b=>{const _=b[0];if(_==="p"||_==="P"){const S=wR[_];return S(b,l.formatLong)}return b}).join("").match(CR).map(b=>{if(b==="''")return{isToken:!1,value:"'"};const _=b[0];if(_==="'")return{isToken:!1,value:AR(b)};if(_y[_])return{isToken:!0,value:b};if(_.match(RR))throw new RangeError("Format string contains an unescaped latin alphabet character `"+_+"`");return{isToken:!1,value:b}});l.localize.preprocessor&&(f=l.localize.preprocessor(d,f));const p={firstWeekContainsDate:s,weekStartsOn:u,locale:l};return f.map(b=>{if(!b.isToken)return b.value;const _=b.value;(ER(_)||$R(_))&&PR(_,t,String(e));const S=_y[_[0]];return S(d,_,l.localize,p)}).join("")}function AR(e){const t=e.match(DR);return t?t[1].replace(NR,"'"):e}function zR(e,t){const n=()=>On(t==null?void 0:t.in,NaN),l=OR(e);let s;if(l.date){const p=KR(l.date,2);s=VR(p.restDateString,p.year)}if(!s||isNaN(+s))return n();const u=+s;let d=0,f;if(l.time&&(d=BR(l.time),isNaN(d)))return n();if(l.timezone){if(f=UR(l.timezone),isNaN(f))return n()}else{const p=new Date(u+d),h=jt(0,t==null?void 0:t.in);return h.setFullYear(p.getUTCFullYear(),p.getUTCMonth(),p.getUTCDate()),h.setHours(p.getUTCHours(),p.getUTCMinutes(),p.getUTCSeconds(),p.getUTCMilliseconds()),h}return jt(u+d+f,t==null?void 0:t.in)}const ns={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},IR=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,jR=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,FR=/^([+-])(\d{2})(?::?(\d{2}))?$/;function OR(e){const t={},n=e.split(ns.dateTimeDelimiter);let o;if(n.length>2)return t;if(/:/.test(n[0])?o=n[0]:(t.date=n[0],o=n[1],ns.timeZoneDelimiter.test(t.date)&&(t.date=e.split(ns.timeZoneDelimiter)[0],o=e.substr(t.date.length,e.length))),o){const l=ns.timezone.exec(o);l?(t.time=o.replace(l[1],""),t.timezone=l[1]):t.time=o}return t}function KR(e,t){const n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),o=e.match(n);if(!o)return{year:NaN,restDateString:""};const l=o[1]?parseInt(o[1]):null,s=o[2]?parseInt(o[2]):null;return{year:s===null?l:s*100,restDateString:e.slice((o[1]||o[2]).length)}}function VR(e,t){if(t===null)return new Date(NaN);const n=e.match(IR);if(!n)return new Date(NaN);const o=!!n[4],l=Qi(n[1]),s=Qi(n[2])-1,u=Qi(n[3]),d=Qi(n[4]),f=Qi(n[5])-1;if(o)return GR(t,d,f)?HR(t,d,f):new Date(NaN);{const p=new Date(0);return!YR(t,s,u)||!QR(t,l)?new Date(NaN):(p.setUTCFullYear(t,s,Math.max(l,u)),p)}}function Qi(e){return e?parseInt(e):1}function BR(e){const t=e.match(jR);if(!t)return NaN;const n=_d(t[1]),o=_d(t[2]),l=_d(t[3]);return XR(n,o,l)?n*X_+o*G_+l*1e3:NaN}function _d(e){return e&&parseFloat(e.replace(",","."))||0}function UR(e){if(e==="Z")return 0;const t=e.match(FR);if(!t)return 0;const n=t[1]==="+"?-1:1,o=parseInt(t[2]),l=t[3]&&parseInt(t[3])||0;return qR(o,l)?n*(o*X_+l*G_):NaN}function HR(e,t,n){const o=new Date(0);o.setUTCFullYear(e,0,4);const l=o.getUTCDay()||7,s=(t-1)*7+n+1-l;return o.setUTCDate(o.getUTCDate()+s),o}const WR=[31,null,31,30,31,30,31,31,30,31,30,31];function e1(e){return e%400===0||e%4===0&&e%100!==0}function YR(e,t,n){return t>=0&&t<=11&&n>=1&&n<=(WR[t]||(e1(e)?29:28))}function QR(e,t){return t>=1&&t<=(e1(e)?366:365)}function GR(e,t,n){return t>=1&&t<=53&&n>=0&&n<=6}function XR(e,t,n){return e===24?t===0&&n===0:n>=0&&n<60&&t>=0&&t<60&&e>=0&&e<25}function qR(e,t){return t>=0&&t<=59}function ZR(e,t){let{cursor:n,getKey:o}=e;return{setSelectedKeys(l){t(s=>({...s,selectedKeys:l}))},setFilterText(l){t(s=>({...s,filterText:l}))},insert(l,...s){t(u=>Gi(u,l,...s))},insertBefore(l,...s){t(u=>{let d=u.items.findIndex(f=>(o==null?void 0:o(f))===l);if(d===-1){if(u.items.length!==0)return u;d=0}return Gi(u,d,...s)})},insertAfter(l,...s){t(u=>{let d=u.items.findIndex(f=>(o==null?void 0:o(f))===l);if(d===-1){if(u.items.length!==0)return u;d=0}return Gi(u,d+1,...s)})},prepend(...l){t(s=>Gi(s,0,...l))},append(...l){t(s=>Gi(s,s.items.length,...l))},remove(...l){t(s=>{let u=new Set(l),d=s.items.filter(p=>!u.has(o(p))),f="all";if(s.selectedKeys!=="all"){f=new Set(s.selectedKeys);for(let p of l)f.delete(p)}return n==null&&d.length===0&&(f=new Set),{...s,items:d,selectedKeys:f}})},removeSelectedItems(){t(l=>{if(l.selectedKeys==="all")return{...l,items:[],selectedKeys:new Set};let s=l.selectedKeys,u=l.items.filter(d=>!s.has(o(d)));return{...l,items:u,selectedKeys:new Set}})},move(l,s){t(u=>{let d=u.items.findIndex(h=>o(h)===l);if(d===-1)return u;let f=u.items.slice(),[p]=f.splice(d,1);return f.splice(s,0,p),{...u,items:f}})},moveBefore(l,s){t(u=>{let d=u.items.findIndex(p=>o(p)===l);if(d===-1)return u;let f=(Array.isArray(s)?s:[...s]).map(p=>u.items.findIndex(h=>o(h)===p)).sort((p,h)=>p-h);return Ey(u,f,d)})},moveAfter(l,s){t(u=>{let d=u.items.findIndex(p=>o(p)===l);if(d===-1)return u;let f=(Array.isArray(s)?s:[...s]).map(p=>u.items.findIndex(h=>o(h)===p)).sort((p,h)=>p-h);return Ey(u,f,d+1)})},update(l,s){t(u=>{let d=u.items.findIndex(f=>o(f)===l);return d===-1?u:{...u,items:[...u.items.slice(0,d),s,...u.items.slice(d+1)]}})}}}function Gi(e,t,...n){return{...e,items:[...e.items.slice(0,t),...n,...e.items.slice(t)]}}function Ey(e,t,n){n-=t.filter(s=>s<n).length;let o=t.map(s=>({from:s,to:n++}));for(let s=0;s<o.length;s++){let u=o[s].from;for(let d=s;d<o.length;d++)o[d].from>u&&o[d].from--}for(let s=0;s<o.length;s++){let u=o[s];for(let d=o.length-1;d>s;d--){let f=o[d];f.from<u.to?u.to++:f.from++}}let l=e.items.slice();for(let s of o){let[u]=l.splice(s.from,1);l.splice(s.to,0,u)}return{...e,items:l}}function t1(e){return null}t1.getCollectionNode=function*(e){let{children:t}=e,n=e.textValue||(typeof t=="string"?t:"")||e["aria-label"]||"";yield{type:"cell",props:e,rendered:t,textValue:n,"aria-label":e["aria-label"],hasChildNodes:!1}};let rs=t1;function n1(e){return null}n1.getCollectionNode=function*(e,t){let{title:n,children:o,childColumns:l}=e,s=n||o,u=e.textValue||(typeof s=="string"?s:"")||e["aria-label"],d=yield{type:"column",hasChildNodes:!!l||!!n&&ie.Children.count(o)>0,rendered:s,textValue:u,props:e,*childNodes(){if(l)for(let p of l)yield{type:"column",value:p};else if(n){let p=[];ie.Children.forEach(o,h=>{p.push({type:"column",element:h})}),yield*p}},shouldInvalidate:p=>(f(p),!1)},f=p=>{for(let h of d)h.hasChildNodes||p.columns.push(h)};f(t)};let os=n1;function of(e){return null}of.getCollectionNode=function*(e,t){let{children:n,textValue:o,UNSTABLE_childItems:l}=e;yield{type:"item",props:e,textValue:o,"aria-label":e["aria-label"],hasChildNodes:!0,*childNodes(){if(t.showDragButtons&&(yield{type:"cell",key:"header-drag",props:{isDragButtonCell:!0}}),t.showSelectionCheckboxes&&t.selectionMode!=="none"&&(yield{type:"cell",key:"header",props:{isSelectionCell:!0}}),typeof n=="function"){for(let s of t.columns)yield{type:"cell",element:n(s.key),key:s.key};if(l)for(let s of l)yield{type:"item",value:s}}else{let s=[],u=[],d=0;if(ie.Children.forEach(n,f=>{if(f.type===of){if(s.length<t.columns.length)throw new Error("All of a Row's child Cells must be positioned before any child Rows.");u.push({type:"item",element:f})}else{var p;s.push({type:"cell",element:f}),d+=(p=f.props.colSpan)!==null&&p!==void 0?p:1}}),d!==t.columns.length)throw new Error(`Cell count must match column count. Found ${d} cells and ${t.columns.length} columns.`);yield*s,yield*u}},shouldInvalidate:s=>s.columns.length!==t.columns.length||s.columns.some((u,d)=>u.key!==t.columns[d].key)||s.showSelectionCheckboxes!==t.showSelectionCheckboxes||s.showDragButtons!==t.showDragButtons||s.selectionMode!==t.selectionMode}};let JR=of;function r1(e){return null}r1.getCollectionNode=function*(e){let{children:t,items:n}=e;yield{type:"body",hasChildNodes:!0,props:e,*childNodes(){if(typeof t=="function"){if(!n)throw new Error("props.children was a function but props.items is missing");for(let o of n)yield{type:"item",value:o,renderer:t}}else{let o=[];ie.Children.forEach(t,l=>{o.push({type:"item",element:l})}),yield*o}}}};let e2=r1;function o1(e){return null}o1.getCollectionNode=function*(e,t){let{children:n,columns:o}=e;if(t.columns=[],typeof n=="function"){if(!o)throw new Error("props.children was a function but props.columns is missing");for(let l of o)yield{type:"column",value:l,renderer:n}}else{let l=[];ie.Children.forEach(n,s=>{l.push({type:"column",element:s})}),yield*l}};let t2=o1;function n2(e,t){let n;switch(e.state){case"idle":case"error":switch(t.type){case"loading":case"loadingMore":case"sorting":case"filtering":var o,l;return{...e,filterText:(o=t.filterText)!==null&&o!==void 0?o:e.filterText,state:t.type,items:t.type==="loading"?[]:e.items,sortDescriptor:(l=t.sortDescriptor)!==null&&l!==void 0?l:e.sortDescriptor,abortController:t.abortController};case"update":var s;return{...e,...(s=t.updater)===null||s===void 0?void 0:s.call(t,e)};case"success":case"error":return e;default:throw new Error(`Invalid action "${t.type}" in state "${e.state}"`)}case"loading":case"sorting":case"filtering":switch(t.type){case"success":return t.abortController!==e.abortController?e:(n=(u=t.selectedKeys)!==null&&u!==void 0?u:e.selectedKeys,{...e,filterText:(d=t.filterText)!==null&&d!==void 0?d:e.filterText,state:"idle",items:[...(f=t.items)!==null&&f!==void 0?f:[]],selectedKeys:n==="all"?"all":new Set(n),sortDescriptor:(p=t.sortDescriptor)!==null&&p!==void 0?p:e.sortDescriptor,abortController:void 0,cursor:t.cursor});var u,d,f,p;case"error":return t.abortController!==e.abortController?e:{...e,state:"error",error:t.error,abortController:void 0};case"loading":case"loadingMore":case"sorting":case"filtering":var h,y;return(h=e.abortController)===null||h===void 0||h.abort(),{...e,filterText:(y=t.filterText)!==null&&y!==void 0?y:e.filterText,state:t.type,items:t.type==="loading"?[]:e.items,abortController:t.abortController};case"update":var v;return{...e,...(v=t.updater)===null||v===void 0?void 0:v.call(t,e)};default:throw new Error(`Invalid action "${t.type}" in state "${e.state}"`)}case"loadingMore":switch(t.type){case"success":var x,b,_;return n=e.selectedKeys==="all"||t.selectedKeys==="all"?"all":new Set([...e.selectedKeys,...(x=t.selectedKeys)!==null&&x!==void 0?x:[]]),{...e,state:"idle",items:[...e.items,...(b=t.items)!==null&&b!==void 0?b:[]],selectedKeys:n,sortDescriptor:(_=t.sortDescriptor)!==null&&_!==void 0?_:e.sortDescriptor,abortController:void 0,cursor:t.cursor};case"error":return t.abortController!==e.abortController?e:{...e,state:"error",error:t.error};case"loading":case"sorting":case"filtering":var S,$;return(S=e.abortController)===null||S===void 0||S.abort(),{...e,filterText:($=t.filterText)!==null&&$!==void 0?$:e.filterText,state:t.type,items:t.type==="loading"?[]:e.items,abortController:t.abortController};case"loadingMore":var E;return(E=t.abortController)===null||E===void 0||E.abort(),e;case"update":var N;return{...e,...(N=t.updater)===null||N===void 0?void 0:N.call(t,e)};default:throw new Error(`Invalid action "${t.type}" in state "${e.state}"`)}default:throw new Error(`Invalid state "${e.state}"`)}}function r2(e){const{load:t,sort:n,initialSelectedKeys:o,initialSortDescriptor:l,getKey:s=y=>y.id||y.key,initialFilterText:u=""}=e;let[d,f]=k.useReducer(n2,{state:"idle",error:void 0,items:[],selectedKeys:o==="all"?"all":new Set(o),sortDescriptor:l,filterText:u});const p=async(y,v)=>{let x=new AbortController;try{var b;f({...y,abortController:x});let $=(b=y.filterText)!==null&&b!==void 0?b:d.filterText;var _;let E=await v({items:d.items.slice(),selectedKeys:d.selectedKeys,sortDescriptor:(_=y.sortDescriptor)!==null&&_!==void 0?_:d.sortDescriptor,signal:x.signal,cursor:y.type==="loadingMore"?d.cursor:void 0,filterText:$});var S;let N=(S=E.filterText)!==null&&S!==void 0?S:$;f({type:"success",...E,abortController:x}),N&&N!==$&&!x.signal.aborted&&p({type:"filtering",filterText:N},t)}catch($){f({type:"error",error:$,abortController:x})}};let h=k.useRef(!1);return k.useEffect(()=>{h.current||(p({type:"loading"},t),h.current=!0)},[]),{items:d.items,selectedKeys:d.selectedKeys,sortDescriptor:d.sortDescriptor,isLoading:d.state==="loading"||d.state==="loadingMore"||d.state==="sorting"||d.state==="filtering",loadingState:d.state,error:d.error,filterText:d.filterText,getItem:y=>d.items.find(v=>s(v)===y),reload(){p({type:"loading"},t)},loadMore(){d.state!=="loadingMore"&&d.state!=="filtering"&&d.cursor!=null&&p({type:"loadingMore"},t)},sort(y){p({type:"sorting",sortDescriptor:y},n||t)},...ZR({...e,getKey:s,cursor:d.cursor},y=>{f({type:"update",updater:y})}),setFilterText(y){p({type:"filtering",filterText:y},t)}}}function o2({user:e}){return D.jsxs("div",{className:"flex flex-col",children:[D.jsx(mn,{children:D.jsx("img",{src:e.userImageURL,alt:e.userName,style:{width:"30px",height:"30px",borderRadius:"50%"}})}),D.jsx("span",{children:e.userName})]})}function i2(){const e=r2({async load({signal:t}){return{items:await(await fetch("http://localhost:8080/api/thread",{signal:t})).json()}}});return k.useId(),D.jsxs(D.Fragment,{children:[D.jsx("div",{className:"text-2xl text-center",children:"Recent Threads"}),D.jsxs(W_,{style:{height:"20px",maxWidth:"80px"},paginator:{pageSizes:[5,10,20]},"aria-label":"Table of threads",children:[D.jsxs(t2,{children:[D.jsx(os,{},"threadUser"),D.jsx(os,{},"threadName"),D.jsx(os,{},"threadContent"),D.jsx(os,{},"threadCreationTime")]}),D.jsx(e2,{items:e.items,children:t=>D.jsxs(JR,{children:[D.jsx(rs,{children:D.jsx(o2,{user:t.threadUser})}),D.jsxs(rs,{children:[D.jsx(yr,{}),t.threadName]}),D.jsxs(rs,{children:[D.jsx(yr,{}),t.threadContent]}),D.jsxs(rs,{children:[D.jsx(yr,{}),LR(zR(t.threadCreationTime),"MMMM dd, yyyy")]})]},t.id)})]})]})}function l2(){const[e,t]=k.useState(""),[n,o]=k.useState(""),l=async s=>{s.preventDefault();const u={threadName:e,threadContent:n,threadUser:{id:1},threadCreationTime:new Date().toISOString(),threadUpdateTime:null};try{const d=await fetch("http://localhost:8080/api/thread/new",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(u)});d.ok?(console.log("Thread created successfully!"),t(""),o("")):console.error("Failed to create thread:",d.status)}catch(d){console.error("Error creating thread:",d)}};return D.jsxs("form",{onSubmit:l,children:[D.jsx("div",{className:"flex justify-center",children:D.jsx("div",{className:"text-xl self-center",children:"Create a new Thread"})}),D.jsx(kl,{label:"Title",type:"text",style:{height:"25px"},value:e,onChange:s=>t(s)}),D.jsx(kl,{variant:"outlined",label:"Message",type:"textarea",value:n,onChange:s=>o(s)}),D.jsx("div",{className:"flex justify-end",children:D.jsx(mn,{type:"submit",children:D.jsx(Ct,{children:"send"})})})]})}function a2(){return D.jsx(D.Fragment,{children:D.jsxs("form",{className:"grid-flow-row",children:[D.jsx(kl,{label:"Email",suffixText:"@adaptio.corp",leadingIcon:D.jsx(Ct,{children:"email"})}),D.jsx(kl,{label:"Password",leadingIcon:D.jsx(Ct,{children:"lock"})})]})})}function s2(){const e="error",[t,n]=k.useState(" ");return D.jsx("div",{className:"sticky top-0 left-0 w-full bg-surface-container",children:D.jsxs("div",{className:"header p-8 flex justify-between items-center font-bold",children:[D.jsx(nl,{to:"/",children:D.jsx(mn,{className:"scale-150",children:D.jsx(Ct,{className:"text-on-secondary-container",children:"home"})})}),D.jsx(nl,{to:"/thread/create",children:D.jsxs(Rl,{variant:"tonal",className:"scale-150",children:[D.jsx("span",{className:"font-bold",children:"New Thread"}),D.jsx(Ct,{children:"add"})]})}),D.jsxs("div",{className:"login scale-150 flex items-center",children:[D.jsx(UC,{value:t,color:e,children:D.jsx(mn,{children:D.jsx(Ct,{className:"text-on-secondary-container",children:"notifications"})})}),D.jsx(nl,{to:"/user",children:D.jsx(mn,{variant:"filled-tonal",children:D.jsx(Ct,{className:"text-on-secondary-container",children:"person"})})})]})]})})}function u2(){return D.jsx("div",{className:"sticky h-24 bottom-0 left-0 w-full bg-surface-container flex items-center justify-center",children:D.jsx("span",{className:"font-bold",children:"©AdaptI/O Tech Ltd."})})}function c2(){return D.jsx(Y_,{})}uk.createRoot(document.getElementById("root")).render(D.jsx(k.StrictMode,{children:D.jsxs($$,{children:[D.jsx(s2,{}),D.jsxs(t$,{children:[D.jsx(Xi,{path:"/",element:D.jsx(i2,{})}),D.jsx(Xi,{path:"/login",element:D.jsx(a2,{})}),D.jsx(Xi,{path:"/thread/create",element:D.jsx(l2,{})}),D.jsx(Xi,{path:"/user",element:D.jsx(c2,{})})]}),D.jsx(u2,{})]})}));
