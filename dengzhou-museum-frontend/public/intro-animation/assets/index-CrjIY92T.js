(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Va(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const oe={},ji=[],pn=()=>{},ou=()=>!1,Bs=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),zs=n=>n.startsWith("onUpdate:"),be=Object.assign,Ga=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},Kh=Object.prototype.hasOwnProperty,Zt=(n,t)=>Kh.call(n,t),Bt=Array.isArray,Ki=n=>Vr(n)==="[object Map]",au=n=>Vr(n)==="[object Set]",wl=n=>Vr(n)==="[object Date]",kt=n=>typeof n=="function",fe=n=>typeof n=="string",gn=n=>typeof n=="symbol",ie=n=>n!==null&&typeof n=="object",lu=n=>(ie(n)||kt(n))&&kt(n.then)&&kt(n.catch),cu=Object.prototype.toString,Vr=n=>cu.call(n),$h=n=>Vr(n).slice(8,-1),uu=n=>Vr(n)==="[object Object]",ka=n=>fe(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Ar=Va(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Hs=n=>{const t=Object.create(null);return(e=>t[e]||(t[e]=n(e)))},Zh=/-\w/g,Qe=Hs(n=>n.replace(Zh,t=>t.slice(1).toUpperCase())),Jh=/\B([A-Z])/g,Ai=Hs(n=>n.replace(Jh,"-$1").toLowerCase()),hu=Hs(n=>n.charAt(0).toUpperCase()+n.slice(1)),Qs=Hs(n=>n?`on${hu(n)}`:""),un=(n,t)=>!Object.is(n,t),to=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},fu=(n,t,e,i=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:i,value:e})},Qh=n=>{const t=parseFloat(n);return isNaN(t)?n:t};let Cl;const Vs=()=>Cl||(Cl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Wa(n){if(Bt(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],r=fe(i)?rf(i):Wa(i);if(r)for(const s in r)t[s]=r[s]}return t}else if(fe(n)||ie(n))return n}const tf=/;(?![^(]*\))/g,ef=/:([^]+)/,nf=/\/\*[^]*?\*\//g;function rf(n){const t={};return n.replace(nf,"").split(tf).forEach(e=>{if(e){const i=e.split(ef);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function Gs(n){let t="";if(fe(n))t=n;else if(Bt(n))for(let e=0;e<n.length;e++){const i=Gs(n[e]);i&&(t+=i+" ")}else if(ie(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const sf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",of=Va(sf);function du(n){return!!n||n===""}function af(n,t){if(n.length!==t.length)return!1;let e=!0;for(let i=0;e&&i<n.length;i++)e=Xa(n[i],t[i]);return e}function Xa(n,t){if(n===t)return!0;let e=wl(n),i=wl(t);if(e||i)return e&&i?n.getTime()===t.getTime():!1;if(e=gn(n),i=gn(t),e||i)return n===t;if(e=Bt(n),i=Bt(t),e||i)return e&&i?af(n,t):!1;if(e=ie(n),i=ie(t),e||i){if(!e||!i)return!1;const r=Object.keys(n).length,s=Object.keys(t).length;if(r!==s)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=t.hasOwnProperty(o);if(a&&!l||!a&&l||!Xa(n[o],t[o]))return!1}}return String(n)===String(t)}const pu=n=>!!(n&&n.__v_isRef===!0),mu=n=>fe(n)?n:n==null?"":Bt(n)||ie(n)&&(n.toString===cu||!kt(n.toString))?pu(n)?mu(n.value):JSON.stringify(n,_u,2):String(n),_u=(n,t)=>pu(t)?_u(n,t.value):Ki(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[i,r],s)=>(e[eo(i,s)+" =>"]=r,e),{})}:au(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>eo(e))}:gn(t)?eo(t):ie(t)&&!Bt(t)&&!uu(t)?String(t):t,eo=(n,t="")=>{var e;return gn(n)?`Symbol(${(e=n.description)!=null?e:t})`:n};/**
* @vue/reactivity v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let xe;class lf{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&xe&&(xe.active?(this.parent=xe,this.index=(xe.scopes||(xe.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].pause();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].resume();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].resume()}}run(t){if(this._active){const e=xe;try{return xe=this,t()}finally{xe=e}}}on(){++this._on===1&&(this.prevScope=xe,xe=this)}off(){if(this._on>0&&--this._on===0){if(xe===this)xe=this.prevScope;else{let t=xe;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(this.effects.length=0,e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){for(e=0,i=this.scopes.length;e<i;e++)this.scopes[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function cf(){return xe}let se;const no=new WeakSet;class gu{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,xe&&(xe.active?xe.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,no.has(this)&&(no.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||xu(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Pl(this),Mu(this);const t=se,e=tn;se=this,tn=!0;try{return this.fn()}finally{Su(this),se=t,tn=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)ja(t);this.deps=this.depsTail=void 0,Pl(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?no.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ko(this)&&this.run()}get dirty(){return ko(this)}}let vu=0,Rr,wr;function xu(n,t=!1){if(n.flags|=8,t){n.next=wr,wr=n;return}n.next=Rr,Rr=n}function qa(){vu++}function Ya(){if(--vu>0)return;if(wr){let t=wr;for(wr=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let n;for(;Rr;){let t=Rr;for(Rr=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){n||(n=i)}t=e}}if(n)throw n}function Mu(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Su(n){let t,e=n.depsTail,i=e;for(;i;){const r=i.prevDep;i.version===-1?(i===e&&(e=r),ja(i),uf(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=t,n.depsTail=e}function ko(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Eu(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function Eu(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Ur)||(n.globalVersion=Ur,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!ko(n))))return;n.flags|=2;const t=n.dep,e=se,i=tn;se=n,tn=!0;try{Mu(n);const r=n.fn(n._value);(t.version===0||un(r,n._value))&&(n.flags|=128,n._value=r,t.version++)}catch(r){throw t.version++,r}finally{se=e,tn=i,Su(n),n.flags&=-3}}function ja(n,t=!1){const{dep:e,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),e.subs===n&&(e.subs=i,!i&&e.computed)){e.computed.flags&=-5;for(let s=e.computed.deps;s;s=s.nextDep)ja(s,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function uf(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let tn=!0;const yu=[];function Fn(){yu.push(tn),tn=!1}function On(){const n=yu.pop();tn=n===void 0?!0:n}function Pl(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=se;se=void 0;try{t()}finally{se=e}}}let Ur=0;class hf{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ka{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!se||!tn||se===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==se)e=this.activeLink=new hf(se,this),se.deps?(e.prevDep=se.depsTail,se.depsTail.nextDep=e,se.depsTail=e):se.deps=se.depsTail=e,Tu(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const i=e.nextDep;i.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=i),e.prevDep=se.depsTail,e.nextDep=void 0,se.depsTail.nextDep=e,se.depsTail=e,se.deps===e&&(se.deps=i)}return e}trigger(t){this.version++,Ur++,this.notify(t)}notify(t){qa();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Ya()}}}function Tu(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)Tu(i)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const Wo=new WeakMap,Si=Symbol(""),Xo=Symbol(""),Ir=Symbol("");function ye(n,t,e){if(tn&&se){let i=Wo.get(n);i||Wo.set(n,i=new Map);let r=i.get(e);r||(i.set(e,r=new Ka),r.map=i,r.key=e),r.track()}}function Dn(n,t,e,i,r,s){const o=Wo.get(n);if(!o){Ur++;return}const a=l=>{l&&l.trigger()};if(qa(),t==="clear")o.forEach(a);else{const l=Bt(n),c=l&&ka(e);if(l&&e==="length"){const u=Number(i);o.forEach((h,d)=>{(d==="length"||d===Ir||!gn(d)&&d>=u)&&a(h)})}else switch((e!==void 0||o.has(void 0))&&a(o.get(e)),c&&a(o.get(Ir)),t){case"add":l?c&&a(o.get("length")):(a(o.get(Si)),Ki(n)&&a(o.get(Xo)));break;case"delete":l||(a(o.get(Si)),Ki(n)&&a(o.get(Xo)));break;case"set":Ki(n)&&a(o.get(Si));break}}Ya()}function Ci(n){const t=$t(n);return t===n?t:(ye(t,"iterate",Ir),en(n)?t:t.map(Bn))}function $a(n){return ye(n=$t(n),"iterate",Ir),n}function an(n,t){return ni(n)?Nr($i(n)?Bn(t):t):Bn(t)}const ff={__proto__:null,[Symbol.iterator](){return io(this,Symbol.iterator,n=>an(this,n))},concat(...n){return Ci(this).concat(...n.map(t=>Bt(t)?Ci(t):t))},entries(){return io(this,"entries",n=>(n[1]=an(this,n[1]),n))},every(n,t){return Sn(this,"every",n,t,void 0,arguments)},filter(n,t){return Sn(this,"filter",n,t,e=>e.map(i=>an(this,i)),arguments)},find(n,t){return Sn(this,"find",n,t,e=>an(this,e),arguments)},findIndex(n,t){return Sn(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return Sn(this,"findLast",n,t,e=>an(this,e),arguments)},findLastIndex(n,t){return Sn(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return Sn(this,"forEach",n,t,void 0,arguments)},includes(...n){return ro(this,"includes",n)},indexOf(...n){return ro(this,"indexOf",n)},join(n){return Ci(this).join(n)},lastIndexOf(...n){return ro(this,"lastIndexOf",n)},map(n,t){return Sn(this,"map",n,t,void 0,arguments)},pop(){return mr(this,"pop")},push(...n){return mr(this,"push",n)},reduce(n,...t){return Dl(this,"reduce",n,t)},reduceRight(n,...t){return Dl(this,"reduceRight",n,t)},shift(){return mr(this,"shift")},some(n,t){return Sn(this,"some",n,t,void 0,arguments)},splice(...n){return mr(this,"splice",n)},toReversed(){return Ci(this).toReversed()},toSorted(n){return Ci(this).toSorted(n)},toSpliced(...n){return Ci(this).toSpliced(...n)},unshift(...n){return mr(this,"unshift",n)},values(){return io(this,"values",n=>an(this,n))}};function io(n,t,e){const i=$a(n),r=i[t]();return i!==n&&!en(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=e(s.value)),s}),r}const df=Array.prototype;function Sn(n,t,e,i,r,s){const o=$a(n),a=o!==n&&!en(n),l=o[t];if(l!==df[t]){const h=l.apply(n,s);return a?Bn(h):h}let c=e;o!==n&&(a?c=function(h,d){return e.call(this,an(n,h),d,n)}:e.length>2&&(c=function(h,d){return e.call(this,h,d,n)}));const u=l.call(o,c,i);return a&&r?r(u):u}function Dl(n,t,e,i){const r=$a(n),s=r!==n&&!en(n);let o=e,a=!1;r!==n&&(s?(a=i.length===0,o=function(c,u,h){return a&&(a=!1,c=an(n,c)),e.call(this,c,an(n,u),h,n)}):e.length>3&&(o=function(c,u,h){return e.call(this,c,u,h,n)}));const l=r[t](o,...i);return a?an(n,l):l}function ro(n,t,e){const i=$t(n);ye(i,"iterate",Ir);const r=i[t](...e);return(r===-1||r===!1)&&tl(e[0])?(e[0]=$t(e[0]),i[t](...e)):r}function mr(n,t,e=[]){Fn(),qa();const i=$t(n)[t].apply(n,e);return Ya(),On(),i}const pf=Va("__proto__,__v_isRef,__isVue"),bu=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(gn));function mf(n){gn(n)||(n=String(n));const t=$t(this);return ye(t,"has",n),t.hasOwnProperty(n)}class Au{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){if(e==="__v_skip")return t.__v_skip;const r=this._isReadonly,s=this._isShallow;if(e==="__v_isReactive")return!r;if(e==="__v_isReadonly")return r;if(e==="__v_isShallow")return s;if(e==="__v_raw")return i===(r?s?bf:Pu:s?Cu:wu).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const o=Bt(t);if(!r){let l;if(o&&(l=ff[e]))return l;if(e==="hasOwnProperty")return mf}const a=Reflect.get(t,e,Te(t)?t:i);if((gn(e)?bu.has(e):pf(e))||(r||ye(t,"get",e),s))return a;if(Te(a)){const l=o&&ka(e)?a:a.value;return r&&ie(l)?Yo(l):l}return ie(a)?r?Yo(a):Ja(a):a}}class Ru extends Au{constructor(t=!1){super(!1,t)}set(t,e,i,r){let s=t[e];const o=Bt(t)&&ka(e);if(!this._isShallow){const c=ni(s);if(!en(i)&&!ni(i)&&(s=$t(s),i=$t(i)),!o&&Te(s)&&!Te(i))return c||(s.value=i),!0}const a=o?Number(e)<t.length:Zt(t,e),l=Reflect.set(t,e,i,Te(t)?t:r);return t===$t(r)&&(a?un(i,s)&&Dn(t,"set",e,i):Dn(t,"add",e,i)),l}deleteProperty(t,e){const i=Zt(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&i&&Dn(t,"delete",e,void 0),r}has(t,e){const i=Reflect.has(t,e);return(!gn(e)||!bu.has(e))&&ye(t,"has",e),i}ownKeys(t){return ye(t,"iterate",Bt(t)?"length":Si),Reflect.ownKeys(t)}}class _f extends Au{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const gf=new Ru,vf=new _f,xf=new Ru(!0);const qo=n=>n,$r=n=>Reflect.getPrototypeOf(n);function Mf(n,t,e){return function(...i){const r=this.__v_raw,s=$t(r),o=Ki(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=e?qo:t?Nr:Bn;return!t&&ye(s,"iterate",l?Xo:Si),be(Object.create(c),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}}})}}function Zr(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function Sf(n,t){const e={get(r){const s=this.__v_raw,o=$t(s),a=$t(r);n||(un(r,a)&&ye(o,"get",r),ye(o,"get",a));const{has:l}=$r(o),c=t?qo:n?Nr:Bn;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&ye($t(r),"iterate",Si),r.size},has(r){const s=this.__v_raw,o=$t(s),a=$t(r);return n||(un(r,a)&&ye(o,"has",r),ye(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=$t(a),c=t?qo:n?Nr:Bn;return!n&&ye(l,"iterate",Si),a.forEach((u,h)=>r.call(s,c(u),c(h),o))}};return be(e,n?{add:Zr("add"),set:Zr("set"),delete:Zr("delete"),clear:Zr("clear")}:{add(r){const s=$t(this),o=$r(s),a=$t(r),l=!t&&!en(r)&&!ni(r)?a:r;return o.has.call(s,l)||un(r,l)&&o.has.call(s,r)||un(a,l)&&o.has.call(s,a)||(s.add(l),Dn(s,"add",l,l)),this},set(r,s){!t&&!en(s)&&!ni(s)&&(s=$t(s));const o=$t(this),{has:a,get:l}=$r(o);let c=a.call(o,r);c||(r=$t(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?un(s,u)&&Dn(o,"set",r,s):Dn(o,"add",r,s),this},delete(r){const s=$t(this),{has:o,get:a}=$r(s);let l=o.call(s,r);l||(r=$t(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&Dn(s,"delete",r,void 0),c},clear(){const r=$t(this),s=r.size!==0,o=r.clear();return s&&Dn(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=Mf(r,n,t)}),e}function Za(n,t){const e=Sf(n,t);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(Zt(e,r)&&r in i?e:i,r,s)}const Ef={get:Za(!1,!1)},yf={get:Za(!1,!0)},Tf={get:Za(!0,!1)};const wu=new WeakMap,Cu=new WeakMap,Pu=new WeakMap,bf=new WeakMap;function Af(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Rf(n){return n.__v_skip||!Object.isExtensible(n)?0:Af($h(n))}function Ja(n){return ni(n)?n:Qa(n,!1,gf,Ef,wu)}function wf(n){return Qa(n,!1,xf,yf,Cu)}function Yo(n){return Qa(n,!0,vf,Tf,Pu)}function Qa(n,t,e,i,r){if(!ie(n)||n.__v_raw&&!(t&&n.__v_isReactive))return n;const s=Rf(n);if(s===0)return n;const o=r.get(n);if(o)return o;const a=new Proxy(n,s===2?i:e);return r.set(n,a),a}function $i(n){return ni(n)?$i(n.__v_raw):!!(n&&n.__v_isReactive)}function ni(n){return!!(n&&n.__v_isReadonly)}function en(n){return!!(n&&n.__v_isShallow)}function tl(n){return n?!!n.__v_raw:!1}function $t(n){const t=n&&n.__v_raw;return t?$t(t):n}function Cf(n){return!Zt(n,"__v_skip")&&Object.isExtensible(n)&&fu(n,"__v_skip",!0),n}const Bn=n=>ie(n)?Ja(n):n,Nr=n=>ie(n)?Yo(n):n;function Te(n){return n?n.__v_isRef===!0:!1}function so(n){return Pf(n,!1)}function Pf(n,t){return Te(n)?n:new Df(n,t)}class Df{constructor(t,e){this.dep=new Ka,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:$t(t),this._value=e?t:Bn(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,i=this.__v_isShallow||en(t)||ni(t);t=i?t:$t(t),un(t,e)&&(this._rawValue=t,this._value=i?t:Bn(t),this.dep.trigger())}}function Lf(n){return Te(n)?n.value:n}const Uf={get:(n,t,e)=>t==="__v_raw"?n:Lf(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const r=n[t];return Te(r)&&!Te(e)?(r.value=e,!0):Reflect.set(n,t,e,i)}};function Du(n){return $i(n)?n:new Proxy(n,Uf)}class If{constructor(t,e,i){this.fn=t,this.setter=e,this._value=void 0,this.dep=new Ka(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ur-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&se!==this)return xu(this,!0),!0}get value(){const t=this.dep.track();return Eu(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Nf(n,t,e=!1){let i,r;return kt(n)?i=n:(i=n.get,r=n.set),new If(i,r,e)}const Jr={},Ds=new WeakMap;let mi;function Ff(n,t=!1,e=mi){if(e){let i=Ds.get(e);i||Ds.set(e,i=[]),i.push(n)}}function Of(n,t,e=oe){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=e,c=S=>r?S:en(S)||r===!1||r===0?Jn(S,1):Jn(S);let u,h,d,p,v=!1,x=!1;if(Te(n)?(h=()=>n.value,v=en(n)):$i(n)?(h=()=>c(n),v=!0):Bt(n)?(x=!0,v=n.some(S=>$i(S)||en(S)),h=()=>n.map(S=>{if(Te(S))return S.value;if($i(S))return c(S);if(kt(S))return l?l(S,2):S()})):kt(n)?t?h=l?()=>l(n,2):n:h=()=>{if(d){Fn();try{d()}finally{On()}}const S=mi;mi=u;try{return l?l(n,3,[p]):n(p)}finally{mi=S}}:h=pn,t&&r){const S=h,B=r===!0?1/0:r;h=()=>Jn(S(),B)}const m=cf(),f=()=>{u.stop(),m&&m.active&&Ga(m.effects,u)};if(s&&t){const S=t;t=(...B)=>{S(...B),f()}}let R=x?new Array(n.length).fill(Jr):Jr;const A=S=>{if(!(!(u.flags&1)||!u.dirty&&!S))if(t){const B=u.run();if(r||v||(x?B.some((L,P)=>un(L,R[P])):un(B,R))){d&&d();const L=mi;mi=u;try{const P=[B,R===Jr?void 0:x&&R[0]===Jr?[]:R,p];R=B,l?l(t,3,P):t(...P)}finally{mi=L}}}else u.run()};return a&&a(A),u=new gu(h),u.scheduler=o?()=>o(A,!1):A,p=S=>Ff(S,!1,u),d=u.onStop=()=>{const S=Ds.get(u);if(S){if(l)l(S,4);else for(const B of S)B();Ds.delete(u)}},t?i?A(!0):R=u.run():o?o(A.bind(null,!0),!0):u.run(),f.pause=u.pause.bind(u),f.resume=u.resume.bind(u),f.stop=f,f}function Jn(n,t=1/0,e){if(t<=0||!ie(n)||n.__v_skip||(e=e||new Map,(e.get(n)||0)>=t))return n;if(e.set(n,t),t--,Te(n))Jn(n.value,t,e);else if(Bt(n))for(let i=0;i<n.length;i++)Jn(n[i],t,e);else if(au(n)||Ki(n))n.forEach(i=>{Jn(i,t,e)});else if(uu(n)){for(const i in n)Jn(n[i],t,e);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Jn(n[i],t,e)}return n}/**
* @vue/runtime-core v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Gr(n,t,e,i){try{return i?n(...i):n()}catch(r){ks(r,t,e)}}function vn(n,t,e,i){if(kt(n)){const r=Gr(n,t,e,i);return r&&lu(r)&&r.catch(s=>{ks(s,t,e)}),r}if(Bt(n)){const r=[];for(let s=0;s<n.length;s++)r.push(vn(n[s],t,e,i));return r}}function ks(n,t,e,i=!0){const r=t?t.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||oe;if(t){let a=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${e}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](n,l,c)===!1)return}a=a.parent}if(s){Fn(),Gr(s,null,10,[n,l,c]),On();return}}Bf(n,e,r,i,o)}function Bf(n,t,e,i=!0,r=!1){if(r)throw n;console.error(n)}const we=[];let on=-1;const Zi=[];let $n=null,Wi=0;const Lu=Promise.resolve();let Ls=null;function Uu(n){const t=Ls||Lu;return n?t.then(this?n.bind(this):n):t}function zf(n){let t=on+1,e=we.length;for(;t<e;){const i=t+e>>>1,r=we[i],s=Fr(r);s<n||s===n&&r.flags&2?t=i+1:e=i}return t}function el(n){if(!(n.flags&1)){const t=Fr(n),e=we[we.length-1];!e||!(n.flags&2)&&t>=Fr(e)?we.push(n):we.splice(zf(t),0,n),n.flags|=1,Iu()}}function Iu(){Ls||(Ls=Lu.then(Fu))}function Hf(n){Bt(n)?Zi.push(...n):$n&&n.id===-1?$n.splice(Wi+1,0,n):n.flags&1||(Zi.push(n),n.flags|=1),Iu()}function Ll(n,t,e=on+1){for(;e<we.length;e++){const i=we[e];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;we.splice(e,1),e--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Nu(n){if(Zi.length){const t=[...new Set(Zi)].sort((e,i)=>Fr(e)-Fr(i));if(Zi.length=0,$n){$n.push(...t);return}for($n=t,Wi=0;Wi<$n.length;Wi++){const e=$n[Wi];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}$n=null,Wi=0}}const Fr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Fu(n){try{for(on=0;on<we.length;on++){const t=we[on];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Gr(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;on<we.length;on++){const t=we[on];t&&(t.flags&=-2)}on=-1,we.length=0,Nu(),Ls=null,(we.length||Zi.length)&&Fu()}}let hn=null,Ou=null;function Us(n){const t=hn;return hn=n,Ou=n&&n.type.__scopeId||null,t}function Vf(n,t=hn,e){if(!t||n._n)return n;const i=(...r)=>{i._d&&kl(-1);const s=Us(t);let o;try{o=n(...r)}finally{Us(s),i._d&&kl(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function ai(n,t,e,i){const r=n.dirs,s=t&&t.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Fn(),vn(l,e,8,[n.el,a,n,t]),On())}}function Gf(n,t){if(Pe){let e=Pe.provides;const i=Pe.parent&&Pe.parent.provides;i===e&&(e=Pe.provides=Object.create(i)),e[n]=t}}function Es(n,t,e=!1){const i=Wd();if(i||Ji){let r=Ji?Ji._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return e&&kt(t)?t.call(i&&i.proxy):t}}const kf=Symbol.for("v-scx"),Wf=()=>Es(kf);function oo(n,t,e){return Bu(n,t,e)}function Bu(n,t,e=oe){const{immediate:i,deep:r,flush:s,once:o}=e,a=be({},e),l=t&&i||!t&&s!=="post";let c;if(Br){if(s==="sync"){const p=Wf();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=pn,p.resume=pn,p.pause=pn,p}}const u=Pe;a.call=(p,v,x)=>vn(p,u,v,x);let h=!1;s==="post"?a.scheduler=p=>{Fe(p,u&&u.suspense)}:s!=="sync"&&(h=!0,a.scheduler=(p,v)=>{v?p():el(p)}),a.augmentJob=p=>{t&&(p.flags|=4),h&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const d=Of(n,t,a);return Br&&(c?c.push(d):l&&d()),d}function Xf(n,t,e){const i=this.proxy,r=fe(n)?n.includes(".")?zu(i,n):()=>i[n]:n.bind(i,i);let s;kt(t)?s=t:(s=t.handler,e=t);const o=kr(this),a=Bu(r,s.bind(i),e);return o(),a}function zu(n,t){const e=t.split(".");return()=>{let i=n;for(let r=0;r<e.length&&i;r++)i=i[e[r]];return i}}const qf=Symbol("_vte"),Yf=n=>n.__isTeleport,jf=Symbol("_leaveCb");function nl(n,t){n.shapeFlag&6&&n.component?(n.transition=t,nl(n.component.subTree,t)):n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}function Hu(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Ul(n,t){let e;return!!((e=Object.getOwnPropertyDescriptor(n,t))&&!e.configurable)}const Is=new WeakMap;function Cr(n,t,e,i,r=!1){if(Bt(n)){n.forEach((x,m)=>Cr(x,t&&(Bt(t)?t[m]:t),e,i,r));return}if(Pr(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Cr(n,t,e,i.component.subTree);return}const s=i.shapeFlag&4?ol(i.component):i.el,o=r?null:s,{i:a,r:l}=n,c=t&&t.r,u=a.refs===oe?a.refs={}:a.refs,h=a.setupState,d=$t(h),p=h===oe?ou:x=>Ul(u,x)?!1:Zt(d,x),v=(x,m)=>!(m&&Ul(u,m));if(c!=null&&c!==l){if(Il(t),fe(c))u[c]=null,p(c)&&(h[c]=null);else if(Te(c)){const x=t;v(c,x.k)&&(c.value=null),x.k&&(u[x.k]=null)}}if(kt(l))Gr(l,a,12,[o,u]);else{const x=fe(l),m=Te(l);if(x||m){const f=()=>{if(n.f){const R=x?p(l)?h[l]:u[l]:v()||!n.k?l.value:u[n.k];if(r)Bt(R)&&Ga(R,s);else if(Bt(R))R.includes(s)||R.push(s);else if(x)u[l]=[s],p(l)&&(h[l]=u[l]);else{const A=[s];v(l,n.k)&&(l.value=A),n.k&&(u[n.k]=A)}}else x?(u[l]=o,p(l)&&(h[l]=o)):m&&(v(l,n.k)&&(l.value=o),n.k&&(u[n.k]=o))};if(o){const R=()=>{f(),Is.delete(n)};R.id=-1,Is.set(n,R),Fe(R,e)}else Il(n),f()}}}function Il(n){const t=Is.get(n);t&&(t.flags|=8,Is.delete(n))}Vs().requestIdleCallback;Vs().cancelIdleCallback;const Pr=n=>!!n.type.__asyncLoader,Vu=n=>n.type.__isKeepAlive;function Kf(n,t){Gu(n,"a",t)}function $f(n,t){Gu(n,"da",t)}function Gu(n,t,e=Pe){const i=n.__wdc||(n.__wdc=()=>{let r=e;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Ws(t,i,e),e){let r=e.parent;for(;r&&r.parent;)Vu(r.parent.vnode)&&Zf(i,t,e,r),r=r.parent}}function Zf(n,t,e,i){const r=Ws(t,n,i,!0);Wu(()=>{Ga(i[t],r)},e)}function Ws(n,t,e=Pe,i=!1){if(e){const r=e[n]||(e[n]=[]),s=t.__weh||(t.__weh=(...o)=>{Fn();const a=kr(e),l=vn(t,e,n,o);return a(),On(),l});return i?r.unshift(s):r.push(s),s}}const Vn=n=>(t,e=Pe)=>{(!Br||n==="sp")&&Ws(n,(...i)=>t(...i),e)},Jf=Vn("bm"),ku=Vn("m"),Qf=Vn("bu"),td=Vn("u"),ed=Vn("bum"),Wu=Vn("um"),nd=Vn("sp"),id=Vn("rtg"),rd=Vn("rtc");function sd(n,t=Pe){Ws("ec",n,t)}const od=Symbol.for("v-ndc"),jo=n=>n?uh(n)?ol(n):jo(n.parent):null,Dr=be(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>jo(n.parent),$root:n=>jo(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>qu(n),$forceUpdate:n=>n.f||(n.f=()=>{el(n.update)}),$nextTick:n=>n.n||(n.n=Uu.bind(n.proxy)),$watch:n=>Xf.bind(n)}),ao=(n,t)=>n!==oe&&!n.__isScriptSetup&&Zt(n,t),ad={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;if(t[0]!=="$"){const d=o[t];if(d!==void 0)switch(d){case 1:return i[t];case 2:return r[t];case 4:return e[t];case 3:return s[t]}else{if(ao(i,t))return o[t]=1,i[t];if(r!==oe&&Zt(r,t))return o[t]=2,r[t];if(Zt(s,t))return o[t]=3,s[t];if(e!==oe&&Zt(e,t))return o[t]=4,e[t];Ko&&(o[t]=0)}}const c=Dr[t];let u,h;if(c)return t==="$attrs"&&ye(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[t]))return u;if(e!==oe&&Zt(e,t))return o[t]=4,e[t];if(h=l.config.globalProperties,Zt(h,t))return h[t]},set({_:n},t,e){const{data:i,setupState:r,ctx:s}=n;return ao(r,t)?(r[t]=e,!0):i!==oe&&Zt(i,t)?(i[t]=e,!0):Zt(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(s[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:r,props:s,type:o}},a){let l;return!!(e[a]||n!==oe&&a[0]!=="$"&&Zt(n,a)||ao(t,a)||Zt(s,a)||Zt(i,a)||Zt(Dr,a)||Zt(r.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:Zt(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function Nl(n){return Bt(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let Ko=!0;function ld(n){const t=qu(n),e=n.proxy,i=n.ctx;Ko=!1,t.beforeCreate&&Fl(t.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:p,updated:v,activated:x,deactivated:m,beforeDestroy:f,beforeUnmount:R,destroyed:A,unmounted:S,render:B,renderTracked:L,renderTriggered:P,errorCaptured:F,serverPrefetch:T,expose:E,inheritAttrs:D,components:Q,directives:q,filters:it}=t;if(c&&cd(c,i,null),o)for(const J in o){const z=o[J];kt(z)&&(i[J]=z.bind(e))}if(r){const J=r.call(e,e);ie(J)&&(n.data=Ja(J))}if(Ko=!0,s)for(const J in s){const z=s[J],ft=kt(z)?z.bind(e,e):kt(z.get)?z.get.bind(e,e):pn,Mt=!kt(z)&&kt(z.set)?z.set.bind(e):pn,yt=$d({get:ft,set:Mt});Object.defineProperty(i,J,{enumerable:!0,configurable:!0,get:()=>yt.value,set:Dt=>yt.value=Dt})}if(a)for(const J in a)Xu(a[J],i,e,J);if(l){const J=kt(l)?l.call(e):l;Reflect.ownKeys(J).forEach(z=>{Gf(z,J[z])})}u&&Fl(u,n,"c");function $(J,z){Bt(z)?z.forEach(ft=>J(ft.bind(e))):z&&J(z.bind(e))}if($(Jf,h),$(ku,d),$(Qf,p),$(td,v),$(Kf,x),$($f,m),$(sd,F),$(rd,L),$(id,P),$(ed,R),$(Wu,S),$(nd,T),Bt(E))if(E.length){const J=n.exposed||(n.exposed={});E.forEach(z=>{Object.defineProperty(J,z,{get:()=>e[z],set:ft=>e[z]=ft,enumerable:!0})})}else n.exposed||(n.exposed={});B&&n.render===pn&&(n.render=B),D!=null&&(n.inheritAttrs=D),Q&&(n.components=Q),q&&(n.directives=q),T&&Hu(n)}function cd(n,t,e=pn){Bt(n)&&(n=$o(n));for(const i in n){const r=n[i];let s;ie(r)?"default"in r?s=Es(r.from||i,r.default,!0):s=Es(r.from||i):s=Es(r),Te(s)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):t[i]=s}}function Fl(n,t,e){vn(Bt(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function Xu(n,t,e,i){let r=i.includes(".")?zu(e,i):()=>e[i];if(fe(n)){const s=t[n];kt(s)&&oo(r,s)}else if(kt(n))oo(r,n.bind(e));else if(ie(n))if(Bt(n))n.forEach(s=>Xu(s,t,e,i));else{const s=kt(n.handler)?n.handler.bind(e):t[n.handler];kt(s)&&oo(r,s,n)}}function qu(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(t);let l;return a?l=a:!r.length&&!e&&!i?l=t:(l={},r.length&&r.forEach(c=>Ns(l,c,o,!0)),Ns(l,t,o)),ie(t)&&s.set(t,l),l}function Ns(n,t,e,i=!1){const{mixins:r,extends:s}=t;s&&Ns(n,s,e,!0),r&&r.forEach(o=>Ns(n,o,e,!0));for(const o in t)if(!(i&&o==="expose")){const a=ud[o]||e&&e[o];n[o]=a?a(n[o],t[o]):t[o]}return n}const ud={data:Ol,props:Bl,emits:Bl,methods:Er,computed:Er,beforeCreate:Ae,created:Ae,beforeMount:Ae,mounted:Ae,beforeUpdate:Ae,updated:Ae,beforeDestroy:Ae,beforeUnmount:Ae,destroyed:Ae,unmounted:Ae,activated:Ae,deactivated:Ae,errorCaptured:Ae,serverPrefetch:Ae,components:Er,directives:Er,watch:fd,provide:Ol,inject:hd};function Ol(n,t){return t?n?function(){return be(kt(n)?n.call(this,this):n,kt(t)?t.call(this,this):t)}:t:n}function hd(n,t){return Er($o(n),$o(t))}function $o(n){if(Bt(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function Ae(n,t){return n?[...new Set([].concat(n,t))]:t}function Er(n,t){return n?be(Object.create(null),n,t):t}function Bl(n,t){return n?Bt(n)&&Bt(t)?[...new Set([...n,...t])]:be(Object.create(null),Nl(n),Nl(t??{})):t}function fd(n,t){if(!n)return t;if(!t)return n;const e=be(Object.create(null),n);for(const i in t)e[i]=Ae(n[i],t[i]);return e}function Yu(){return{app:null,config:{isNativeTag:ou,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let dd=0;function pd(n,t){return function(i,r=null){kt(i)||(i=be({},i)),r!=null&&!ie(r)&&(r=null);const s=Yu(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:dd++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Zd,get config(){return s.config},set config(u){},use(u,...h){return o.has(u)||(u&&kt(u.install)?(o.add(u),u.install(c,...h)):kt(u)&&(o.add(u),u(c,...h))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,h){return h?(s.components[u]=h,c):s.components[u]},directive(u,h){return h?(s.directives[u]=h,c):s.directives[u]},mount(u,h,d){if(!l){const p=c._ceVNode||Ei(i,r);return p.appContext=s,d===!0?d="svg":d===!1&&(d=void 0),n(p,u,d),l=!0,c._container=u,u.__vue_app__=c,ol(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(vn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,h){return s.provides[u]=h,c},runWithContext(u){const h=Ji;Ji=c;try{return u()}finally{Ji=h}}};return c}}let Ji=null;const md=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${Qe(t)}Modifiers`]||n[`${Ai(t)}Modifiers`];function _d(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||oe;let r=e;const s=t.startsWith("update:"),o=s&&md(i,t.slice(7));o&&(o.trim&&(r=e.map(u=>fe(u)?u.trim():u)),o.number&&(r=e.map(Qh)));let a,l=i[a=Qs(t)]||i[a=Qs(Qe(t))];!l&&s&&(l=i[a=Qs(Ai(t))]),l&&vn(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,vn(c,n,6,r)}}const gd=new WeakMap;function ju(n,t,e=!1){const i=e?gd:t.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!kt(n)){const l=c=>{const u=ju(c,t,!0);u&&(a=!0,be(o,u))};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(ie(n)&&i.set(n,null),null):(Bt(s)?s.forEach(l=>o[l]=null):be(o,s),ie(n)&&i.set(n,o),o)}function Xs(n,t){return!n||!Bs(t)?!1:(t=t.slice(2).replace(/Once$/,""),Zt(n,t[0].toLowerCase()+t.slice(1))||Zt(n,Ai(t))||Zt(n,t))}function zl(n){const{type:t,vnode:e,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:d,setupState:p,ctx:v,inheritAttrs:x}=n,m=Us(n);let f,R;try{if(e.shapeFlag&4){const S=r||i,B=S;f=ln(c.call(B,S,u,h,p,d,v)),R=a}else{const S=t;f=ln(S.length>1?S(h,{attrs:a,slots:o,emit:l}):S(h,null)),R=t.props?a:vd(a)}}catch(S){Lr.length=0,ks(S,n,1),f=Ei(ir)}let A=f;if(R&&x!==!1){const S=Object.keys(R),{shapeFlag:B}=A;S.length&&B&7&&(s&&S.some(zs)&&(R=xd(R,s)),A=rr(A,R,!1,!0))}return e.dirs&&(A=rr(A,null,!1,!0),A.dirs=A.dirs?A.dirs.concat(e.dirs):e.dirs),e.transition&&nl(A,e.transition),f=A,Us(m),f}const vd=n=>{let t;for(const e in n)(e==="class"||e==="style"||Bs(e))&&((t||(t={}))[e]=n[e]);return t},xd=(n,t)=>{const e={};for(const i in n)(!zs(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function Md(n,t,e){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=t,c=s.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return i?Hl(i,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(Ku(o,i,d)&&!Xs(c,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Hl(i,o,c):!0:!!o;return!1}function Hl(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(Ku(t,n,s)&&!Xs(e,s))return!0}return!1}function Ku(n,t,e){const i=n[e],r=t[e];return e==="style"&&ie(i)&&ie(r)?!Xa(i,r):i!==r}function Sd({vnode:n,parent:t,suspense:e},i){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.suspense.vnode.el=r.el=i,n=r),r===n)(n=t.vnode).el=i,t=t.parent;else break}e&&e.activeBranch===n&&(e.vnode.el=i)}const $u={},Zu=()=>Object.create($u),Ju=n=>Object.getPrototypeOf(n)===$u;function Ed(n,t,e,i=!1){const r={},s=Zu();n.propsDefaults=Object.create(null),Qu(n,t,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);e?n.props=i?r:wf(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function yd(n,t,e,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=$t(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Xs(n.emitsOptions,d))continue;const p=t[d];if(l)if(Zt(s,d))p!==s[d]&&(s[d]=p,c=!0);else{const v=Qe(d);r[v]=Zo(l,a,v,p,n,!1)}else p!==s[d]&&(s[d]=p,c=!0)}}}else{Qu(n,t,r,s)&&(c=!0);let u;for(const h in a)(!t||!Zt(t,h)&&((u=Ai(h))===h||!Zt(t,u)))&&(l?e&&(e[h]!==void 0||e[u]!==void 0)&&(r[h]=Zo(l,a,h,void 0,n,!0)):delete r[h]);if(s!==a)for(const h in s)(!t||!Zt(t,h))&&(delete s[h],c=!0)}c&&Dn(n.attrs,"set","")}function Qu(n,t,e,i){const[r,s]=n.propsOptions;let o=!1,a;if(t)for(let l in t){if(Ar(l))continue;const c=t[l];let u;r&&Zt(r,u=Qe(l))?!s||!s.includes(u)?e[u]=c:(a||(a={}))[u]=c:Xs(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=$t(e),c=a||oe;for(let u=0;u<s.length;u++){const h=s[u];e[h]=Zo(r,l,h,c[h],n,!Zt(c,h))}}return o}function Zo(n,t,e,i,r,s){const o=n[e];if(o!=null){const a=Zt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&kt(l)){const{propsDefaults:c}=r;if(e in c)i=c[e];else{const u=kr(r);i=c[e]=l.call(null,t),u()}}else i=l;r.ce&&r.ce._setProp(e,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Ai(e))&&(i=!0))}return i}const Td=new WeakMap;function th(n,t,e=!1){const i=e?Td:t.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!kt(n)){const u=h=>{l=!0;const[d,p]=th(h,t,!0);be(o,d),p&&a.push(...p)};!e&&t.mixins.length&&t.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return ie(n)&&i.set(n,ji),ji;if(Bt(s))for(let u=0;u<s.length;u++){const h=Qe(s[u]);Vl(h)&&(o[h]=oe)}else if(s)for(const u in s){const h=Qe(u);if(Vl(h)){const d=s[u],p=o[h]=Bt(d)||kt(d)?{type:d}:be({},d),v=p.type;let x=!1,m=!0;if(Bt(v))for(let f=0;f<v.length;++f){const R=v[f],A=kt(R)&&R.name;if(A==="Boolean"){x=!0;break}else A==="String"&&(m=!1)}else x=kt(v)&&v.name==="Boolean";p[0]=x,p[1]=m,(x||Zt(p,"default"))&&a.push(h)}}const c=[o,a];return ie(n)&&i.set(n,c),c}function Vl(n){return n[0]!=="$"&&!Ar(n)}const il=n=>n==="_"||n==="_ctx"||n==="$stable",rl=n=>Bt(n)?n.map(ln):[ln(n)],bd=(n,t,e)=>{if(t._n)return t;const i=Vf((...r)=>rl(t(...r)),e);return i._c=!1,i},eh=(n,t,e)=>{const i=n._ctx;for(const r in n){if(il(r))continue;const s=n[r];if(kt(s))t[r]=bd(r,s,i);else if(s!=null){const o=rl(s);t[r]=()=>o}}},nh=(n,t)=>{const e=rl(t);n.slots.default=()=>e},ih=(n,t,e)=>{for(const i in t)(e||!il(i))&&(n[i]=t[i])},Ad=(n,t,e)=>{const i=n.slots=Zu();if(n.vnode.shapeFlag&32){const r=t._;r?(ih(i,t,e),e&&fu(i,"_",r,!0)):eh(t,i)}else t&&nh(n,t)},Rd=(n,t,e)=>{const{vnode:i,slots:r}=n;let s=!0,o=oe;if(i.shapeFlag&32){const a=t._;a?e&&a===1?s=!1:ih(r,t,e):(s=!t.$stable,eh(t,r)),o=t}else t&&(nh(n,t),o={default:1});if(s)for(const a in r)!il(a)&&o[a]==null&&delete r[a]},Fe=Ld;function wd(n){return Cd(n)}function Cd(n,t){const e=Vs();e.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:p=pn,insertStaticContent:v}=n,x=(b,C,y,et=null,X=null,Y=null,Z=void 0,rt=null,j=!!C.dynamicChildren)=>{if(b===C)return;b&&!_r(b,C)&&(et=pt(b),Dt(b,X,Y,!0),b=null),C.patchFlag===-2&&(j=!1,C.dynamicChildren=null);const{type:g,ref:_,shapeFlag:w}=C;switch(g){case qs:m(b,C,y,et);break;case ir:f(b,C,y,et);break;case co:b==null&&R(C,y,et,Z);break;case Cn:Q(b,C,y,et,X,Y,Z,rt,j);break;default:w&1?B(b,C,y,et,X,Y,Z,rt,j):w&6?q(b,C,y,et,X,Y,Z,rt,j):(w&64||w&128)&&g.process(b,C,y,et,X,Y,Z,rt,j,Ft)}_!=null&&X?Cr(_,b&&b.ref,Y,C||b,!C):_==null&&b&&b.ref!=null&&Cr(b.ref,null,Y,b,!0)},m=(b,C,y,et)=>{if(b==null)i(C.el=a(C.children),y,et);else{const X=C.el=b.el;C.children!==b.children&&c(X,C.children)}},f=(b,C,y,et)=>{b==null?i(C.el=l(C.children||""),y,et):C.el=b.el},R=(b,C,y,et)=>{[b.el,b.anchor]=v(b.children,C,y,et,b.el,b.anchor)},A=({el:b,anchor:C},y,et)=>{let X;for(;b&&b!==C;)X=d(b),i(b,y,et),b=X;i(C,y,et)},S=({el:b,anchor:C})=>{let y;for(;b&&b!==C;)y=d(b),r(b),b=y;r(C)},B=(b,C,y,et,X,Y,Z,rt,j)=>{if(C.type==="svg"?Z="svg":C.type==="math"&&(Z="mathml"),b==null)L(C,y,et,X,Y,Z,rt,j);else{const g=b.el&&b.el._isVueCE?b.el:null;try{g&&g._beginPatch(),T(b,C,X,Y,Z,rt,j)}finally{g&&g._endPatch()}}},L=(b,C,y,et,X,Y,Z,rt)=>{let j,g;const{props:_,shapeFlag:w,transition:O,dirs:V}=b;if(j=b.el=o(b.type,Y,_&&_.is,_),w&8?u(j,b.children):w&16&&F(b.children,j,null,et,X,lo(b,Y),Z,rt),V&&ai(b,null,et,"created"),P(j,b,b.scopeId,Z,et),_){for(const ht in _)ht!=="value"&&!Ar(ht)&&s(j,ht,null,_[ht],Y,et);"value"in _&&s(j,"value",null,_.value,Y),(g=_.onVnodeBeforeMount)&&sn(g,et,b)}V&&ai(b,null,et,"beforeMount");const G=Pd(X,O);G&&O.beforeEnter(j),i(j,C,y),((g=_&&_.onVnodeMounted)||G||V)&&Fe(()=>{try{g&&sn(g,et,b),G&&O.enter(j),V&&ai(b,null,et,"mounted")}finally{}},X)},P=(b,C,y,et,X)=>{if(y&&p(b,y),et)for(let Y=0;Y<et.length;Y++)p(b,et[Y]);if(X){let Y=X.subTree;if(C===Y||ah(Y.type)&&(Y.ssContent===C||Y.ssFallback===C)){const Z=X.vnode;P(b,Z,Z.scopeId,Z.slotScopeIds,X.parent)}}},F=(b,C,y,et,X,Y,Z,rt,j=0)=>{for(let g=j;g<b.length;g++){const _=b[g]=rt?Pn(b[g]):ln(b[g]);x(null,_,C,y,et,X,Y,Z,rt)}},T=(b,C,y,et,X,Y,Z)=>{const rt=C.el=b.el;let{patchFlag:j,dynamicChildren:g,dirs:_}=C;j|=b.patchFlag&16;const w=b.props||oe,O=C.props||oe;let V;if(y&&li(y,!1),(V=O.onVnodeBeforeUpdate)&&sn(V,y,C,b),_&&ai(C,b,y,"beforeUpdate"),y&&li(y,!0),(w.innerHTML&&O.innerHTML==null||w.textContent&&O.textContent==null)&&u(rt,""),g?E(b.dynamicChildren,g,rt,y,et,lo(C,X),Y):Z||z(b,C,rt,null,y,et,lo(C,X),Y,!1),j>0){if(j&16)D(rt,w,O,y,X);else if(j&2&&w.class!==O.class&&s(rt,"class",null,O.class,X),j&4&&s(rt,"style",w.style,O.style,X),j&8){const G=C.dynamicProps;for(let ht=0;ht<G.length;ht++){const ot=G[ht],ct=w[ot],Pt=O[ot];(Pt!==ct||ot==="value")&&s(rt,ot,ct,Pt,X,y)}}j&1&&b.children!==C.children&&u(rt,C.children)}else!Z&&g==null&&D(rt,w,O,y,X);((V=O.onVnodeUpdated)||_)&&Fe(()=>{V&&sn(V,y,C,b),_&&ai(C,b,y,"updated")},et)},E=(b,C,y,et,X,Y,Z)=>{for(let rt=0;rt<C.length;rt++){const j=b[rt],g=C[rt],_=j.el&&(j.type===Cn||!_r(j,g)||j.shapeFlag&198)?h(j.el):y;x(j,g,_,null,et,X,Y,Z,!0)}},D=(b,C,y,et,X)=>{if(C!==y){if(C!==oe)for(const Y in C)!Ar(Y)&&!(Y in y)&&s(b,Y,C[Y],null,X,et);for(const Y in y){if(Ar(Y))continue;const Z=y[Y],rt=C[Y];Z!==rt&&Y!=="value"&&s(b,Y,rt,Z,X,et)}"value"in y&&s(b,"value",C.value,y.value,X)}},Q=(b,C,y,et,X,Y,Z,rt,j)=>{const g=C.el=b?b.el:a(""),_=C.anchor=b?b.anchor:a("");let{patchFlag:w,dynamicChildren:O,slotScopeIds:V}=C;V&&(rt=rt?rt.concat(V):V),b==null?(i(g,y,et),i(_,y,et),F(C.children||[],y,_,X,Y,Z,rt,j)):w>0&&w&64&&O&&b.dynamicChildren&&b.dynamicChildren.length===O.length?(E(b.dynamicChildren,O,y,X,Y,Z,rt),(C.key!=null||X&&C===X.subTree)&&rh(b,C,!0)):z(b,C,y,_,X,Y,Z,rt,j)},q=(b,C,y,et,X,Y,Z,rt,j)=>{C.slotScopeIds=rt,b==null?C.shapeFlag&512?X.ctx.activate(C,y,et,Z,j):it(C,y,et,X,Y,Z,j):st(b,C,j)},it=(b,C,y,et,X,Y,Z)=>{const rt=b.component=kd(b,et,X);if(Vu(b)&&(rt.ctx.renderer=Ft),Xd(rt,!1,Z),rt.asyncDep){if(X&&X.registerDep(rt,$,Z),!b.el){const j=rt.subTree=Ei(ir);f(null,j,C,y),b.placeholder=j.el}}else $(rt,b,C,y,X,Y,Z)},st=(b,C,y)=>{const et=C.component=b.component;if(Md(b,C,y))if(et.asyncDep&&!et.asyncResolved){J(et,C,y);return}else et.next=C,et.update();else C.el=b.el,et.vnode=C},$=(b,C,y,et,X,Y,Z)=>{const rt=()=>{if(b.isMounted){let{next:w,bu:O,u:V,parent:G,vnode:ht}=b;{const _t=sh(b);if(_t){w&&(w.el=ht.el,J(b,w,Z)),_t.asyncDep.then(()=>{Fe(()=>{b.isUnmounted||g()},X)});return}}let ot=w,ct;li(b,!1),w?(w.el=ht.el,J(b,w,Z)):w=ht,O&&to(O),(ct=w.props&&w.props.onVnodeBeforeUpdate)&&sn(ct,G,w,ht),li(b,!0);const Pt=zl(b),at=b.subTree;b.subTree=Pt,x(at,Pt,h(at.el),pt(at),b,X,Y),w.el=Pt.el,ot===null&&Sd(b,Pt.el),V&&Fe(V,X),(ct=w.props&&w.props.onVnodeUpdated)&&Fe(()=>sn(ct,G,w,ht),X)}else{let w;const{el:O,props:V}=C,{bm:G,m:ht,parent:ot,root:ct,type:Pt}=b,at=Pr(C);li(b,!1),G&&to(G),!at&&(w=V&&V.onVnodeBeforeMount)&&sn(w,ot,C),li(b,!0);{ct.ce&&ct.ce._hasShadowRoot()&&ct.ce._injectChildStyle(Pt,b.parent?b.parent.type:void 0);const _t=b.subTree=zl(b);x(null,_t,y,et,b,X,Y),C.el=_t.el}if(ht&&Fe(ht,X),!at&&(w=V&&V.onVnodeMounted)){const _t=C;Fe(()=>sn(w,ot,_t),X)}(C.shapeFlag&256||ot&&Pr(ot.vnode)&&ot.vnode.shapeFlag&256)&&b.a&&Fe(b.a,X),b.isMounted=!0,C=y=et=null}};b.scope.on();const j=b.effect=new gu(rt);b.scope.off();const g=b.update=j.run.bind(j),_=b.job=j.runIfDirty.bind(j);_.i=b,_.id=b.uid,j.scheduler=()=>el(_),li(b,!0),g()},J=(b,C,y)=>{C.component=b;const et=b.vnode.props;b.vnode=C,b.next=null,yd(b,C.props,et,y),Rd(b,C.children,y),Fn(),Ll(b),On()},z=(b,C,y,et,X,Y,Z,rt,j=!1)=>{const g=b&&b.children,_=b?b.shapeFlag:0,w=C.children,{patchFlag:O,shapeFlag:V}=C;if(O>0){if(O&128){Mt(g,w,y,et,X,Y,Z,rt,j);return}else if(O&256){ft(g,w,y,et,X,Y,Z,rt,j);return}}V&8?(_&16&&Et(g,X,Y),w!==g&&u(y,w)):_&16?V&16?Mt(g,w,y,et,X,Y,Z,rt,j):Et(g,X,Y,!0):(_&8&&u(y,""),V&16&&F(w,y,et,X,Y,Z,rt,j))},ft=(b,C,y,et,X,Y,Z,rt,j)=>{b=b||ji,C=C||ji;const g=b.length,_=C.length,w=Math.min(g,_);let O;for(O=0;O<w;O++){const V=C[O]=j?Pn(C[O]):ln(C[O]);x(b[O],V,y,null,X,Y,Z,rt,j)}g>_?Et(b,X,Y,!0,!1,w):F(C,y,et,X,Y,Z,rt,j,w)},Mt=(b,C,y,et,X,Y,Z,rt,j)=>{let g=0;const _=C.length;let w=b.length-1,O=_-1;for(;g<=w&&g<=O;){const V=b[g],G=C[g]=j?Pn(C[g]):ln(C[g]);if(_r(V,G))x(V,G,y,null,X,Y,Z,rt,j);else break;g++}for(;g<=w&&g<=O;){const V=b[w],G=C[O]=j?Pn(C[O]):ln(C[O]);if(_r(V,G))x(V,G,y,null,X,Y,Z,rt,j);else break;w--,O--}if(g>w){if(g<=O){const V=O+1,G=V<_?C[V].el:et;for(;g<=O;)x(null,C[g]=j?Pn(C[g]):ln(C[g]),y,G,X,Y,Z,rt,j),g++}}else if(g>O)for(;g<=w;)Dt(b[g],X,Y,!0),g++;else{const V=g,G=g,ht=new Map;for(g=G;g<=O;g++){const dt=C[g]=j?Pn(C[g]):ln(C[g]);dt.key!=null&&ht.set(dt.key,g)}let ot,ct=0;const Pt=O-G+1;let at=!1,_t=0;const wt=new Array(Pt);for(g=0;g<Pt;g++)wt[g]=0;for(g=V;g<=w;g++){const dt=b[g];if(ct>=Pt){Dt(dt,X,Y,!0);continue}let It;if(dt.key!=null)It=ht.get(dt.key);else for(ot=G;ot<=O;ot++)if(wt[ot-G]===0&&_r(dt,C[ot])){It=ot;break}It===void 0?Dt(dt,X,Y,!0):(wt[It-G]=g+1,It>=_t?_t=It:at=!0,x(dt,C[It],y,null,X,Y,Z,rt,j),ct++)}const Lt=at?Dd(wt):ji;for(ot=Lt.length-1,g=Pt-1;g>=0;g--){const dt=G+g,It=C[dt],Ot=C[dt+1],Jt=dt+1<_?Ot.el||oh(Ot):et;wt[g]===0?x(null,It,y,Jt,X,Y,Z,rt,j):at&&(ot<0||g!==Lt[ot]?yt(It,y,Jt,2):ot--)}}},yt=(b,C,y,et,X=null)=>{const{el:Y,type:Z,transition:rt,children:j,shapeFlag:g}=b;if(g&6){yt(b.component.subTree,C,y,et);return}if(g&128){b.suspense.move(C,y,et);return}if(g&64){Z.move(b,C,y,Ft);return}if(Z===Cn){i(Y,C,y);for(let w=0;w<j.length;w++)yt(j[w],C,y,et);i(b.anchor,C,y);return}if(Z===co){A(b,C,y);return}if(et!==2&&g&1&&rt)if(et===0)rt.beforeEnter(Y),i(Y,C,y),Fe(()=>rt.enter(Y),X);else{const{leave:w,delayLeave:O,afterLeave:V}=rt,G=()=>{b.ctx.isUnmounted?r(Y):i(Y,C,y)},ht=()=>{Y._isLeaving&&Y[jf](!0),w(Y,()=>{G(),V&&V()})};O?O(Y,G,ht):ht()}else i(Y,C,y)},Dt=(b,C,y,et=!1,X=!1)=>{const{type:Y,props:Z,ref:rt,children:j,dynamicChildren:g,shapeFlag:_,patchFlag:w,dirs:O,cacheIndex:V,memo:G}=b;if(w===-2&&(X=!1),rt!=null&&(Fn(),Cr(rt,null,y,b,!0),On()),V!=null&&(C.renderCache[V]=void 0),_&256){C.ctx.deactivate(b);return}const ht=_&1&&O,ot=!Pr(b);let ct;if(ot&&(ct=Z&&Z.onVnodeBeforeUnmount)&&sn(ct,C,b),_&6)lt(b.component,y,et);else{if(_&128){b.suspense.unmount(y,et);return}ht&&ai(b,null,C,"beforeUnmount"),_&64?b.type.remove(b,C,y,Ft,et):g&&!g.hasOnce&&(Y!==Cn||w>0&&w&64)?Et(g,C,y,!1,!0):(Y===Cn&&w&384||!X&&_&16)&&Et(j,C,y),et&&Yt(b)}const Pt=G!=null&&V==null;(ot&&(ct=Z&&Z.onVnodeUnmounted)||ht||Pt)&&Fe(()=>{ct&&sn(ct,C,b),ht&&ai(b,null,C,"unmounted"),Pt&&(b.el=null)},y)},Yt=b=>{const{type:C,el:y,anchor:et,transition:X}=b;if(C===Cn){tt(y,et);return}if(C===co){S(b);return}const Y=()=>{r(y),X&&!X.persisted&&X.afterLeave&&X.afterLeave()};if(b.shapeFlag&1&&X&&!X.persisted){const{leave:Z,delayLeave:rt}=X,j=()=>Z(y,Y);rt?rt(b.el,Y,j):j()}else Y()},tt=(b,C)=>{let y;for(;b!==C;)y=d(b),r(b),b=y;r(C)},lt=(b,C,y)=>{const{bum:et,scope:X,job:Y,subTree:Z,um:rt,m:j,a:g}=b;Gl(j),Gl(g),et&&to(et),X.stop(),Y&&(Y.flags|=8,Dt(Z,b,C,y)),rt&&Fe(rt,C),Fe(()=>{b.isUnmounted=!0},C)},Et=(b,C,y,et=!1,X=!1,Y=0)=>{for(let Z=Y;Z<b.length;Z++)Dt(b[Z],C,y,et,X)},pt=b=>{if(b.shapeFlag&6)return pt(b.component.subTree);if(b.shapeFlag&128)return b.suspense.next();const C=d(b.anchor||b.el),y=C&&C[qf];return y?d(y):C};let Ct=!1;const Ut=(b,C,y)=>{let et;b==null?C._vnode&&(Dt(C._vnode,null,null,!0),et=C._vnode.component):x(C._vnode||null,b,C,null,null,null,y),C._vnode=b,Ct||(Ct=!0,Ll(et),Nu(),Ct=!1)},Ft={p:x,um:Dt,m:yt,r:Yt,mt:it,mc:F,pc:z,pbc:E,n:pt,o:n};return{render:Ut,hydrate:void 0,createApp:pd(Ut)}}function lo({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function li({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function Pd(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function rh(n,t,e=!1){const i=n.children,r=t.children;if(Bt(i)&&Bt(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Pn(r[s]),a.el=o.el),!e&&a.patchFlag!==-2&&rh(o,a)),a.type===qs&&(a.patchFlag===-1&&(a=r[s]=Pn(a)),a.el=o.el),a.type===ir&&!a.el&&(a.el=o.el)}}function Dd(n){const t=n.slice(),e=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=e[e.length-1],n[r]<c){t[i]=r,e.push(i);continue}for(s=0,o=e.length-1;s<o;)a=s+o>>1,n[e[a]]<c?s=a+1:o=a;c<n[e[s]]&&(s>0&&(t[i]=e[s-1]),e[s]=i)}}for(s=e.length,o=e[s-1];s-- >0;)e[s]=o,o=t[o];return e}function sh(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:sh(t)}function Gl(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}function oh(n){if(n.placeholder)return n.placeholder;const t=n.component;return t?oh(t.subTree):null}const ah=n=>n.__isSuspense;function Ld(n,t){t&&t.pendingBranch?Bt(n)?t.effects.push(...n):t.effects.push(n):Hf(n)}const Cn=Symbol.for("v-fgt"),qs=Symbol.for("v-txt"),ir=Symbol.for("v-cmt"),co=Symbol.for("v-stc"),Lr=[];let Ve=null;function Ud(n=!1){Lr.push(Ve=n?null:[])}function Id(){Lr.pop(),Ve=Lr[Lr.length-1]||null}let Or=1;function kl(n,t=!1){Or+=n,n<0&&Ve&&t&&(Ve.hasOnce=!0)}function Nd(n){return n.dynamicChildren=Or>0?Ve||ji:null,Id(),Or>0&&Ve&&Ve.push(n),n}function Fd(n,t,e,i,r,s){return Nd(Xi(n,t,e,i,r,s,!0))}function lh(n){return n?n.__v_isVNode===!0:!1}function _r(n,t){return n.type===t.type&&n.key===t.key}const ch=({key:n})=>n??null,ys=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?fe(n)||Te(n)||kt(n)?{i:hn,r:n,k:t,f:!!e}:n:null);function Xi(n,t=null,e=null,i=0,r=null,s=n===Cn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&ch(t),ref:t&&ys(t),scopeId:Ou,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:hn};return a?(sl(l,e),s&128&&n.normalize(l)):e&&(l.shapeFlag|=fe(e)?8:16),Or>0&&!o&&Ve&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Ve.push(l),l}const Ei=Od;function Od(n,t=null,e=null,i=0,r=null,s=!1){if((!n||n===od)&&(n=ir),lh(n)){const a=rr(n,t,!0);return e&&sl(a,e),Or>0&&!s&&Ve&&(a.shapeFlag&6?Ve[Ve.indexOf(n)]=a:Ve.push(a)),a.patchFlag=-2,a}if(Kd(n)&&(n=n.__vccOpts),t){t=Bd(t);let{class:a,style:l}=t;a&&!fe(a)&&(t.class=Gs(a)),ie(l)&&(tl(l)&&!Bt(l)&&(l=be({},l)),t.style=Wa(l))}const o=fe(n)?1:ah(n)?128:Yf(n)?64:ie(n)?4:kt(n)?2:0;return Xi(n,t,e,i,r,o,s,!0)}function Bd(n){return n?tl(n)||Ju(n)?be({},n):n:null}function rr(n,t,e=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,c=t?Hd(r||{},t):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&ch(c),ref:t&&t.ref?e&&s?Bt(s)?s.concat(ys(t)):[s,ys(t)]:ys(t):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==Cn?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&rr(n.ssContent),ssFallback:n.ssFallback&&rr(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&nl(u,l.clone(u)),u}function zd(n=" ",t=0){return Ei(qs,null,n,t)}function ln(n){return n==null||typeof n=="boolean"?Ei(ir):Bt(n)?Ei(Cn,null,n.slice()):lh(n)?Pn(n):Ei(qs,null,String(n))}function Pn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:rr(n)}function sl(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(Bt(t))e=16;else if(typeof t=="object")if(i&65){const r=t.default;r&&(r._c&&(r._d=!1),sl(n,r()),r._c&&(r._d=!0));return}else{e=32;const r=t._;!r&&!Ju(t)?t._ctx=hn:r===3&&hn&&(hn.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else kt(t)?(t={default:t,_ctx:hn},e=32):(t=String(t),i&64?(e=16,t=[zd(t)]):e=8);n.children=t,n.shapeFlag|=e}function Hd(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const r in i)if(r==="class")t.class!==i.class&&(t.class=Gs([t.class,i.class]));else if(r==="style")t.style=Wa([t.style,i.style]);else if(Bs(r)){const s=t[r],o=i[r];o&&s!==o&&!(Bt(s)&&s.includes(o))?t[r]=s?[].concat(s,o):o:o==null&&s==null&&!zs(r)&&(t[r]=o)}else r!==""&&(t[r]=i[r])}return t}function sn(n,t,e,i=null){vn(n,t,7,[e,i])}const Vd=Yu();let Gd=0;function kd(n,t,e){const i=n.type,r=(t?t.appContext:n.appContext)||Vd,s={uid:Gd++,vnode:n,type:i,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new lf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:th(i,r),emitsOptions:ju(i,r),emit:null,emitted:null,propsDefaults:oe,inheritAttrs:i.inheritAttrs,ctx:oe,data:oe,props:oe,attrs:oe,slots:oe,refs:oe,setupState:oe,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=_d.bind(null,s),n.ce&&n.ce(s),s}let Pe=null;const Wd=()=>Pe||hn;let Fs,Jo;{const n=Vs(),t=(e,i)=>{let r;return(r=n[e])||(r=n[e]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Fs=t("__VUE_INSTANCE_SETTERS__",e=>Pe=e),Jo=t("__VUE_SSR_SETTERS__",e=>Br=e)}const kr=n=>{const t=Pe;return Fs(n),n.scope.on(),()=>{n.scope.off(),Fs(t)}},Wl=()=>{Pe&&Pe.scope.off(),Fs(null)};function uh(n){return n.vnode.shapeFlag&4}let Br=!1;function Xd(n,t=!1,e=!1){t&&Jo(t);const{props:i,children:r}=n.vnode,s=uh(n);Ed(n,i,s,t),Ad(n,r,e||t);const o=s?qd(n,t):void 0;return t&&Jo(!1),o}function qd(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,ad);const{setup:i}=e;if(i){Fn();const r=n.setupContext=i.length>1?jd(n):null,s=kr(n),o=Gr(i,n,0,[n.props,r]),a=lu(o);if(On(),s(),(a||n.sp)&&!Pr(n)&&Hu(n),a){if(o.then(Wl,Wl),t)return o.then(l=>{Xl(n,l)}).catch(l=>{ks(l,n,0)});n.asyncDep=o}else Xl(n,o)}else hh(n)}function Xl(n,t,e){kt(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:ie(t)&&(n.setupState=Du(t)),hh(n)}function hh(n,t,e){const i=n.type;n.render||(n.render=i.render||pn);{const r=kr(n);Fn();try{ld(n)}finally{On(),r()}}}const Yd={get(n,t){return ye(n,"get",""),n[t]}};function jd(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,Yd),slots:n.slots,emit:n.emit,expose:t}}function ol(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Du(Cf(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in Dr)return Dr[e](n)},has(t,e){return e in t||e in Dr}})):n.proxy}function Kd(n){return kt(n)&&"__vccOpts"in n}const $d=(n,t)=>Nf(n,t,Br),Zd="3.5.34";/**
* @vue/runtime-dom v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Qo;const ql=typeof window<"u"&&window.trustedTypes;if(ql)try{Qo=ql.createPolicy("vue",{createHTML:n=>n})}catch{}const fh=Qo?n=>Qo.createHTML(n):n=>n,Jd="http://www.w3.org/2000/svg",Qd="http://www.w3.org/1998/Math/MathML",wn=typeof document<"u"?document:null,Yl=wn&&wn.createElement("template"),tp={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const r=t==="svg"?wn.createElementNS(Jd,n):t==="mathml"?wn.createElementNS(Qd,n):e?wn.createElement(n,{is:e}):wn.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>wn.createTextNode(n),createComment:n=>wn.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>wn.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,r,s){const o=e?e.previousSibling:t.lastChild;if(r&&(r===s||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),e),!(r===s||!(r=r.nextSibling)););else{Yl.innerHTML=fh(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Yl.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[o?o.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},ep=Symbol("_vtc");function np(n,t,e){const i=n[ep];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const jl=Symbol("_vod"),ip=Symbol("_vsh"),rp=Symbol(""),sp=/(?:^|;)\s*display\s*:/;function op(n,t,e){const i=n.style,r=fe(e);let s=!1;if(e&&!r){if(t)if(fe(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();e[a]==null&&yr(i,a,"")}else for(const o in t)e[o]==null&&yr(i,o,"");for(const o in e){o==="display"&&(s=!0);const a=e[o];a!=null?lp(n,o,!fe(t)&&t?t[o]:void 0,a)||yr(i,o,a):yr(i,o,"")}}else if(r){if(t!==e){const o=i[rp];o&&(e+=";"+o),i.cssText=e,s=sp.test(e)}}else t&&n.removeAttribute("style");jl in n&&(n[jl]=s?i.display:"",n[ip]&&(i.display="none"))}const Kl=/\s*!important$/;function yr(n,t,e){if(Bt(e))e.forEach(i=>yr(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))n.setProperty(t,e);else{const i=ap(n,t);Kl.test(e)?n.setProperty(Ai(i),e.replace(Kl,""),"important"):n[i]=e}}const $l=["Webkit","Moz","ms"],uo={};function ap(n,t){const e=uo[t];if(e)return e;let i=Qe(t);if(i!=="filter"&&i in n)return uo[t]=i;i=hu(i);for(let r=0;r<$l.length;r++){const s=$l[r]+i;if(s in n)return uo[t]=s}return t}function lp(n,t,e,i){return n.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&fe(i)&&e===i}const Zl="http://www.w3.org/1999/xlink";function Jl(n,t,e,i,r,s=of(t)){i&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(Zl,t.slice(6,t.length)):n.setAttributeNS(Zl,t,e):e==null||s&&!du(e)?n.removeAttribute(t):n.setAttribute(t,s?"":gn(e)?String(e):e)}function Ql(n,t,e,i,r){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?fh(e):e);return}const s=n.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=e==null?n.type==="checkbox"?"on":"":String(e);(a!==l||!("_value"in n))&&(n.value=l),e==null&&n.removeAttribute(t),n._value=e;return}let o=!1;if(e===""||e==null){const a=typeof n[t];a==="boolean"?e=du(e):e==null&&a==="string"?(e="",o=!0):a==="number"&&(e=0,o=!0)}try{n[t]=e}catch{}o&&n.removeAttribute(r||t)}function cp(n,t,e,i){n.addEventListener(t,e,i)}function up(n,t,e,i){n.removeEventListener(t,e,i)}const tc=Symbol("_vei");function hp(n,t,e,i,r=null){const s=n[tc]||(n[tc]={}),o=s[t];if(i&&o)o.value=i;else{const[a,l]=fp(t);if(i){const c=s[t]=mp(i,r);cp(n,a,c,l)}else o&&(up(n,a,o,l),s[t]=void 0)}}const ec=/(?:Once|Passive|Capture)$/;function fp(n){let t;if(ec.test(n)){t={};let i;for(;i=n.match(ec);)n=n.slice(0,n.length-i[0].length),t[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Ai(n.slice(2)),t]}let ho=0;const dp=Promise.resolve(),pp=()=>ho||(dp.then(()=>ho=0),ho=Date.now());function mp(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;vn(_p(i,e.value),t,5,[i])};return e.value=n,e.attached=pp(),e}function _p(n,t){if(Bt(t)){const e=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{e.call(n),n._stopped=!0},t.map(i=>r=>!r._stopped&&i&&i(r))}else return t}const nc=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,gp=(n,t,e,i,r,s)=>{const o=r==="svg";t==="class"?np(n,i,o):t==="style"?op(n,e,i):Bs(t)?zs(t)||hp(n,t,e,i,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):vp(n,t,i,o))?(Ql(n,t,i),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Jl(n,t,i,o,s,t!=="value")):n._isVueCE&&(xp(n,t)||n._def.__asyncLoader&&(/[A-Z]/.test(t)||!fe(i)))?Ql(n,Qe(t),i,s,t):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),Jl(n,t,i,o))};function vp(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&nc(t)&&kt(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&n.tagName==="IFRAME"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return nc(t)&&fe(e)?!1:t in n}function xp(n,t){const e=n._def.props;if(!e)return!1;const i=Qe(t);return Array.isArray(e)?e.some(r=>Qe(r)===i):Object.keys(e).some(r=>Qe(r)===i)}const Mp=be({patchProp:gp},tp);let ic;function Sp(){return ic||(ic=wd(Mp))}const Ep=((...n)=>{const t=Sp().createApp(...n),{mount:e}=t;return t.mount=i=>{const r=Tp(i);if(!r)return;const s=t._component;!kt(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=e(r,!1,yp(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t});function yp(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Tp(n){return fe(n)?document.querySelector(n):n}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const al="170",Qi={ROTATE:0,DOLLY:1,PAN:2},qi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},bp=0,rc=1,Ap=2,dh=1,Rp=2,Rn=3,ii=0,De=1,Ln=2,ti=0,tr=1,sc=2,oc=3,ac=4,wp=5,gi=100,Cp=101,Pp=102,Dp=103,Lp=104,Up=200,Ip=201,Np=202,Fp=203,ta=204,ea=205,Op=206,Bp=207,zp=208,Hp=209,Vp=210,Gp=211,kp=212,Wp=213,Xp=214,na=0,ia=1,ra=2,sr=3,sa=4,oa=5,aa=6,la=7,ph=0,qp=1,Yp=2,ei=0,jp=1,Kp=2,$p=3,Zp=4,Jp=5,Qp=6,tm=7,mh=300,or=301,ar=302,ca=303,ua=304,Ys=306,ha=1e3,xi=1001,fa=1002,nn=1003,em=1004,Qr=1005,fn=1006,fo=1007,Mi=1008,zn=1009,_h=1010,gh=1011,zr=1012,ll=1013,yi=1014,Un=1015,Wr=1016,cl=1017,ul=1018,lr=1020,vh=35902,xh=1021,Mh=1022,Je=1023,Sh=1024,Eh=1025,er=1026,cr=1027,yh=1028,hl=1029,Th=1030,fl=1031,dl=1033,Ts=33776,bs=33777,As=33778,Rs=33779,da=35840,pa=35841,ma=35842,_a=35843,ga=36196,va=37492,xa=37496,Ma=37808,Sa=37809,Ea=37810,ya=37811,Ta=37812,ba=37813,Aa=37814,Ra=37815,wa=37816,Ca=37817,Pa=37818,Da=37819,La=37820,Ua=37821,ws=36492,Ia=36494,Na=36495,bh=36283,Fa=36284,Oa=36285,Ba=36286,nm=3200,im=3201,rm=0,sm=1,Qn="",He="srgb",hr="srgb-linear",js="linear",te="srgb",Pi=7680,lc=519,om=512,am=513,lm=514,Ah=515,cm=516,um=517,hm=518,fm=519,cc=35044,uc="300 es",In=2e3,Os=2001;class Ri{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const Se=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Cs=Math.PI/180,za=180/Math.PI;function Xr(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Se[n&255]+Se[n>>8&255]+Se[n>>16&255]+Se[n>>24&255]+"-"+Se[t&255]+Se[t>>8&255]+"-"+Se[t>>16&15|64]+Se[t>>24&255]+"-"+Se[e&63|128]+Se[e>>8&255]+"-"+Se[e>>16&255]+Se[e>>24&255]+Se[i&255]+Se[i>>8&255]+Se[i>>16&255]+Se[i>>24&255]).toLowerCase()}function Ce(n,t,e){return Math.max(t,Math.min(e,n))}function dm(n,t){return(n%t+t)%t}function po(n,t,e){return(1-e)*n+e*t}function gr(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ie(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const pm={DEG2RAD:Cs};class Wt{constructor(t=0,e=0){Wt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ce(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*r+t.x,this.y=s*r+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Vt{constructor(t,e,i,r,s,o,a,l,c){Vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,l,c)}set(t,e,i,r,s,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],p=i[5],v=i[8],x=r[0],m=r[3],f=r[6],R=r[1],A=r[4],S=r[7],B=r[2],L=r[5],P=r[8];return s[0]=o*x+a*R+l*B,s[3]=o*m+a*A+l*L,s[6]=o*f+a*S+l*P,s[1]=c*x+u*R+h*B,s[4]=c*m+u*A+h*L,s[7]=c*f+u*S+h*P,s[2]=d*x+p*R+v*B,s[5]=d*m+p*A+v*L,s[8]=d*f+p*S+v*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,d=a*l-u*s,p=c*s-o*l,v=e*h+i*d+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return t[0]=h*x,t[1]=(r*c-u*i)*x,t[2]=(a*i-r*o)*x,t[3]=d*x,t[4]=(u*e-r*l)*x,t[5]=(r*s-a*e)*x,t[6]=p*x,t[7]=(i*l-c*e)*x,t[8]=(o*e-i*s)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(mo.makeScale(t,e)),this}rotate(t){return this.premultiply(mo.makeRotation(-t)),this}translate(t,e){return this.premultiply(mo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const mo=new Vt;function Rh(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Hr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function mm(){const n=Hr("canvas");return n.style.display="block",n}const hc={};function Tr(n){n in hc||(hc[n]=!0,console.warn(n))}function _m(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}function gm(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function vm(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Xt={enabled:!0,workingColorSpace:hr,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===te&&(n.r=Nn(n.r),n.g=Nn(n.g),n.b=Nn(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===te&&(n.r=nr(n.r),n.g=nr(n.g),n.b=nr(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Qn?js:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Nn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function nr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const fc=[.64,.33,.3,.6,.15,.06],dc=[.2126,.7152,.0722],pc=[.3127,.329],mc=new Vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_c=new Vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Xt.define({[hr]:{primaries:fc,whitePoint:pc,transfer:js,toXYZ:mc,fromXYZ:_c,luminanceCoefficients:dc,workingColorSpaceConfig:{unpackColorSpace:He},outputColorSpaceConfig:{drawingBufferColorSpace:He}},[He]:{primaries:fc,whitePoint:pc,transfer:te,toXYZ:mc,fromXYZ:_c,luminanceCoefficients:dc,outputColorSpaceConfig:{drawingBufferColorSpace:He}}});let Di;class xm{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Di===void 0&&(Di=Hr("canvas")),Di.width=t.width,Di.height=t.height;const i=Di.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Di}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Hr("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Nn(s[o]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Nn(e[i]/255)*255):e[i]=Nn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Mm=0;class wh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Mm++}),this.uuid=Xr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(_o(r[o].image)):s.push(_o(r[o]))}else s=_o(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function _o(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?xm.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Sm=0;class Le extends Ri{constructor(t=Le.DEFAULT_IMAGE,e=Le.DEFAULT_MAPPING,i=xi,r=xi,s=fn,o=Mi,a=Je,l=zn,c=Le.DEFAULT_ANISOTROPY,u=Qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sm++}),this.uuid=Xr(),this.name="",this.source=new wh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Wt(0,0),this.repeat=new Wt(1,1),this.center=new Wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==mh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ha:t.x=t.x-Math.floor(t.x);break;case xi:t.x=t.x<0?0:1;break;case fa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ha:t.y=t.y-Math.floor(t.y);break;case xi:t.y=t.y<0?0:1;break;case fa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Le.DEFAULT_IMAGE=null;Le.DEFAULT_MAPPING=mh;Le.DEFAULT_ANISOTROPY=1;class he{constructor(t=0,e=0,i=0,r=1){he.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const l=t.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],v=l[9],x=l[2],m=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const A=(c+1)/2,S=(p+1)/2,B=(f+1)/2,L=(u+d)/4,P=(h+x)/4,F=(v+m)/4;return A>S&&A>B?A<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(A),r=L/i,s=P/i):S>B?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=L/r,s=F/r):B<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(B),i=P/s,r=F/s),this.set(i,r,s,e),this}let R=Math.sqrt((m-v)*(m-v)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(R)<.001&&(R=1),this.x=(m-v)/R,this.y=(h-x)/R,this.z=(d-u)/R,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Em extends Ri{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new he(0,0,t,e),this.scissorTest=!1,this.viewport=new he(0,0,t,e);const r={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Le(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new wh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ti extends Em{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Ch extends Le{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=nn,this.minFilter=nn,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ym extends Le{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=nn,this.minFilter=nn,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bi{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const d=s[o+0],p=s[o+1],v=s[o+2],x=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=v,t[e+3]=x;return}if(h!==x||l!==d||c!==p||u!==v){let m=1-a;const f=l*d+c*p+u*v+h*x,R=f>=0?1:-1,A=1-f*f;if(A>Number.EPSILON){const B=Math.sqrt(A),L=Math.atan2(B,f*R);m=Math.sin(m*L)/B,a=Math.sin(a*L)/B}const S=a*R;if(l=l*m+d*S,c=c*m+p*S,u=u*m+v*S,h=h*m+x*S,m===1-a){const B=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=B,c*=B,u*=B,h*=B}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[o],d=s[o+1],p=s[o+2],v=s[o+3];return t[e]=a*v+u*h+l*p-c*d,t[e+1]=l*v+u*d+c*h-a*p,t[e+2]=c*v+u*p+a*d-l*h,t[e+3]=u*v-a*h-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),h=a(s/2),d=l(i/2),p=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=d*u*h+c*p*v,this._y=c*p*h-d*u*v,this._z=c*u*v+d*p*h,this._w=c*u*h-d*p*v;break;case"YXZ":this._x=d*u*h+c*p*v,this._y=c*p*h-d*u*v,this._z=c*u*v-d*p*h,this._w=c*u*h+d*p*v;break;case"ZXY":this._x=d*u*h-c*p*v,this._y=c*p*h+d*u*v,this._z=c*u*v+d*p*h,this._w=c*u*h-d*p*v;break;case"ZYX":this._x=d*u*h-c*p*v,this._y=c*p*h+d*u*v,this._z=c*u*v-d*p*h,this._w=c*u*h+d*p*v;break;case"YZX":this._x=d*u*h+c*p*v,this._y=c*p*h+d*u*v,this._z=c*u*v-d*p*h,this._w=c*u*h-d*p*v;break;case"XZY":this._x=d*u*h-c*p*v,this._y=c*p*h-d*u*v,this._z=c*u*v+d*p*h,this._w=c*u*h+d*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],d=i+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ce(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+i*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*i+e*this._x,this._y=p*r+e*this._y,this._z=p*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,d=Math.sin(e*u)/c;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(t=0,e=0,i=0){H.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(gc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(gc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*r-a*i),u=2*(a*e-s*r),h=2*(s*i-o*e);return this.x=e+l*c+o*h-a*u,this.y=i+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return go.copy(this).projectOnVector(t),this.sub(go)}reflect(t){return this.sub(go.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ce(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const go=new H,gc=new bi;class qr{constructor(t=new H(1/0,1/0,1/0),e=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(je.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(je.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=je.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,je):je.fromBufferAttribute(s,o),je.applyMatrix4(t.matrixWorld),this.expandByPoint(je);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ts.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ts.copy(i.boundingBox)),ts.applyMatrix4(t.matrixWorld),this.union(ts)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,je),je.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(vr),es.subVectors(this.max,vr),Li.subVectors(t.a,vr),Ui.subVectors(t.b,vr),Ii.subVectors(t.c,vr),Wn.subVectors(Ui,Li),Xn.subVectors(Ii,Ui),ci.subVectors(Li,Ii);let e=[0,-Wn.z,Wn.y,0,-Xn.z,Xn.y,0,-ci.z,ci.y,Wn.z,0,-Wn.x,Xn.z,0,-Xn.x,ci.z,0,-ci.x,-Wn.y,Wn.x,0,-Xn.y,Xn.x,0,-ci.y,ci.x,0];return!vo(e,Li,Ui,Ii,es)||(e=[1,0,0,0,1,0,0,0,1],!vo(e,Li,Ui,Ii,es))?!1:(ns.crossVectors(Wn,Xn),e=[ns.x,ns.y,ns.z],vo(e,Li,Ui,Ii,es))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,je).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(je).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(En[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),En[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),En[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),En[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),En[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),En[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),En[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),En[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(En),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const En=[new H,new H,new H,new H,new H,new H,new H,new H],je=new H,ts=new qr,Li=new H,Ui=new H,Ii=new H,Wn=new H,Xn=new H,ci=new H,vr=new H,es=new H,ns=new H,ui=new H;function vo(n,t,e,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){ui.fromArray(n,s);const a=r.x*Math.abs(ui.x)+r.y*Math.abs(ui.y)+r.z*Math.abs(ui.z),l=t.dot(ui),c=e.dot(ui),u=i.dot(ui);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Tm=new qr,xr=new H,xo=new H;class pl{constructor(t=new H,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Tm.setFromPoints(t).getCenter(i);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;xr.subVectors(t,this.center);const e=xr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(xr,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(xo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(xr.copy(t.center).add(xo)),this.expandByPoint(xr.copy(t.center).sub(xo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const yn=new H,Mo=new H,is=new H,qn=new H,So=new H,rs=new H,Eo=new H;class Ph{constructor(t=new H,e=new H(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,yn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=yn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(yn.copy(this.origin).addScaledVector(this.direction,e),yn.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){Mo.copy(t).add(e).multiplyScalar(.5),is.copy(e).sub(t).normalize(),qn.copy(this.origin).sub(Mo);const s=t.distanceTo(e)*.5,o=-this.direction.dot(is),a=qn.dot(this.direction),l=-qn.dot(is),c=qn.lengthSq(),u=Math.abs(1-o*o);let h,d,p,v;if(u>0)if(h=o*l-a,d=o*a-l,v=s*u,h>=0)if(d>=-v)if(d<=v){const x=1/u;h*=x,d*=x,p=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d<=-v?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c):d<=v?(h=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Mo).addScaledVector(is,d),p}intersectSphere(t,e){yn.subVectors(t.center,this.origin);const i=yn.dot(this.direction),r=yn.dot(yn)-i*i,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,r=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,r=(t.min.x-d.x)*c),u>=0?(s=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(s=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,yn)!==null}intersectTriangle(t,e,i,r,s){So.subVectors(e,t),rs.subVectors(i,t),Eo.crossVectors(So,rs);let o=this.direction.dot(Eo),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;qn.subVectors(this.origin,t);const l=a*this.direction.dot(rs.crossVectors(qn,rs));if(l<0)return null;const c=a*this.direction.dot(So.cross(qn));if(c<0||l+c>o)return null;const u=-a*qn.dot(Eo);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pe{constructor(t,e,i,r,s,o,a,l,c,u,h,d,p,v,x,m){pe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,l,c,u,h,d,p,v,x,m)}set(t,e,i,r,s,o,a,l,c,u,h,d,p,v,x,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=v,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pe().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/Ni.setFromMatrixColumn(t,0).length(),s=1/Ni.setFromMatrixColumn(t,1).length(),o=1/Ni.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const d=o*u,p=o*h,v=a*u,x=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=p+v*c,e[5]=d-x*c,e[9]=-a*l,e[2]=x-d*c,e[6]=v+p*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*u,p=l*h,v=c*u,x=c*h;e[0]=d+x*a,e[4]=v*a-p,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=p*a-v,e[6]=x+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*u,p=l*h,v=c*u,x=c*h;e[0]=d-x*a,e[4]=-o*h,e[8]=v+p*a,e[1]=p+v*a,e[5]=o*u,e[9]=x-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*u,p=o*h,v=a*u,x=a*h;e[0]=l*u,e[4]=v*c-p,e[8]=d*c+x,e[1]=l*h,e[5]=x*c+d,e[9]=p*c-v,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,p=o*c,v=a*l,x=a*c;e[0]=l*u,e[4]=x-d*h,e[8]=v*h+p,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=p*h+v,e[10]=d-x*h}else if(t.order==="XZY"){const d=o*l,p=o*c,v=a*l,x=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=d*h+x,e[5]=o*u,e[9]=p*h-v,e[2]=v*h-p,e[6]=a*u,e[10]=x*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(bm,t,Am)}lookAt(t,e,i){const r=this.elements;return Be.subVectors(t,e),Be.lengthSq()===0&&(Be.z=1),Be.normalize(),Yn.crossVectors(i,Be),Yn.lengthSq()===0&&(Math.abs(i.z)===1?Be.x+=1e-4:Be.z+=1e-4,Be.normalize(),Yn.crossVectors(i,Be)),Yn.normalize(),ss.crossVectors(Be,Yn),r[0]=Yn.x,r[4]=ss.x,r[8]=Be.x,r[1]=Yn.y,r[5]=ss.y,r[9]=Be.y,r[2]=Yn.z,r[6]=ss.z,r[10]=Be.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],p=i[13],v=i[2],x=i[6],m=i[10],f=i[14],R=i[3],A=i[7],S=i[11],B=i[15],L=r[0],P=r[4],F=r[8],T=r[12],E=r[1],D=r[5],Q=r[9],q=r[13],it=r[2],st=r[6],$=r[10],J=r[14],z=r[3],ft=r[7],Mt=r[11],yt=r[15];return s[0]=o*L+a*E+l*it+c*z,s[4]=o*P+a*D+l*st+c*ft,s[8]=o*F+a*Q+l*$+c*Mt,s[12]=o*T+a*q+l*J+c*yt,s[1]=u*L+h*E+d*it+p*z,s[5]=u*P+h*D+d*st+p*ft,s[9]=u*F+h*Q+d*$+p*Mt,s[13]=u*T+h*q+d*J+p*yt,s[2]=v*L+x*E+m*it+f*z,s[6]=v*P+x*D+m*st+f*ft,s[10]=v*F+x*Q+m*$+f*Mt,s[14]=v*T+x*q+m*J+f*yt,s[3]=R*L+A*E+S*it+B*z,s[7]=R*P+A*D+S*st+B*ft,s[11]=R*F+A*Q+S*$+B*Mt,s[15]=R*T+A*q+S*J+B*yt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],d=t[10],p=t[14],v=t[3],x=t[7],m=t[11],f=t[15];return v*(+s*l*h-r*c*h-s*a*d+i*c*d+r*a*p-i*l*p)+x*(+e*l*p-e*c*d+s*o*d-r*o*p+r*c*u-s*l*u)+m*(+e*c*h-e*a*p-s*o*h+i*o*p+s*a*u-i*c*u)+f*(-r*a*u-e*l*h+e*a*d+r*o*h-i*o*d+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],p=t[11],v=t[12],x=t[13],m=t[14],f=t[15],R=h*m*c-x*d*c+x*l*p-a*m*p-h*l*f+a*d*f,A=v*d*c-u*m*c-v*l*p+o*m*p+u*l*f-o*d*f,S=u*x*c-v*h*c+v*a*p-o*x*p-u*a*f+o*h*f,B=v*h*l-u*x*l-v*a*d+o*x*d+u*a*m-o*h*m,L=e*R+i*A+r*S+s*B;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/L;return t[0]=R*P,t[1]=(x*d*s-h*m*s-x*r*p+i*m*p+h*r*f-i*d*f)*P,t[2]=(a*m*s-x*l*s+x*r*c-i*m*c-a*r*f+i*l*f)*P,t[3]=(h*l*s-a*d*s-h*r*c+i*d*c+a*r*p-i*l*p)*P,t[4]=A*P,t[5]=(u*m*s-v*d*s+v*r*p-e*m*p-u*r*f+e*d*f)*P,t[6]=(v*l*s-o*m*s-v*r*c+e*m*c+o*r*f-e*l*f)*P,t[7]=(o*d*s-u*l*s+u*r*c-e*d*c-o*r*p+e*l*p)*P,t[8]=S*P,t[9]=(v*h*s-u*x*s-v*i*p+e*x*p+u*i*f-e*h*f)*P,t[10]=(o*x*s-v*a*s+v*i*c-e*x*c-o*i*f+e*a*f)*P,t[11]=(u*a*s-o*h*s-u*i*c+e*h*c+o*i*p-e*a*p)*P,t[12]=B*P,t[13]=(u*x*r-v*h*r+v*i*d-e*x*d-u*i*m+e*h*m)*P,t[14]=(v*a*r-o*x*r-v*i*l+e*x*l+o*i*m-e*a*m)*P,t[15]=(o*h*r-u*a*r+u*i*l-e*h*l-o*i*d+e*a*d)*P,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,o=t.x,a=t.y,l=t.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,o){return this.set(1,i,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,u=o+o,h=a+a,d=s*c,p=s*u,v=s*h,x=o*u,m=o*h,f=a*h,R=l*c,A=l*u,S=l*h,B=i.x,L=i.y,P=i.z;return r[0]=(1-(x+f))*B,r[1]=(p+S)*B,r[2]=(v-A)*B,r[3]=0,r[4]=(p-S)*L,r[5]=(1-(d+f))*L,r[6]=(m+R)*L,r[7]=0,r[8]=(v+A)*P,r[9]=(m-R)*P,r[10]=(1-(d+x))*P,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=Ni.set(r[0],r[1],r[2]).length();const o=Ni.set(r[4],r[5],r[6]).length(),a=Ni.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Ke.copy(this);const c=1/s,u=1/o,h=1/a;return Ke.elements[0]*=c,Ke.elements[1]*=c,Ke.elements[2]*=c,Ke.elements[4]*=u,Ke.elements[5]*=u,Ke.elements[6]*=u,Ke.elements[8]*=h,Ke.elements[9]*=h,Ke.elements[10]*=h,e.setFromRotationMatrix(Ke),i.x=s,i.y=o,i.z=a,this}makePerspective(t,e,i,r,s,o,a=In){const l=this.elements,c=2*s/(e-t),u=2*s/(i-r),h=(e+t)/(e-t),d=(i+r)/(i-r);let p,v;if(a===In)p=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===Os)p=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,r,s,o,a=In){const l=this.elements,c=1/(e-t),u=1/(i-r),h=1/(o-s),d=(e+t)*c,p=(i+r)*u;let v,x;if(a===In)v=(o+s)*h,x=-2*h;else if(a===Os)v=s*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Ni=new H,Ke=new pe,bm=new H(0,0,0),Am=new H(1,1,1),Yn=new H,ss=new H,Be=new H,vc=new pe,xc=new bi;class Hn{constructor(t=0,e=0,i=0,r=Hn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],p=r[10];switch(e){case"XYZ":this._y=Math.asin(Ce(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ce(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ce(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ce(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ce(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ce(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return vc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(vc,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return xc.setFromEuler(this),this.setFromQuaternion(xc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hn.DEFAULT_ORDER="XYZ";class Dh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Rm=0;const Mc=new H,Fi=new bi,Tn=new pe,os=new H,Mr=new H,wm=new H,Cm=new bi,Sc=new H(1,0,0),Ec=new H(0,1,0),yc=new H(0,0,1),Tc={type:"added"},Pm={type:"removed"},Oi={type:"childadded",child:null},yo={type:"childremoved",child:null};class Ge extends Ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rm++}),this.uuid=Xr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ge.DEFAULT_UP.clone();const t=new H,e=new Hn,i=new bi,r=new H(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new pe},normalMatrix:{value:new Vt}}),this.matrix=new pe,this.matrixWorld=new pe,this.matrixAutoUpdate=Ge.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Fi.setFromAxisAngle(t,e),this.quaternion.multiply(Fi),this}rotateOnWorldAxis(t,e){return Fi.setFromAxisAngle(t,e),this.quaternion.premultiply(Fi),this}rotateX(t){return this.rotateOnAxis(Sc,t)}rotateY(t){return this.rotateOnAxis(Ec,t)}rotateZ(t){return this.rotateOnAxis(yc,t)}translateOnAxis(t,e){return Mc.copy(t).applyQuaternion(this.quaternion),this.position.add(Mc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Sc,t)}translateY(t){return this.translateOnAxis(Ec,t)}translateZ(t){return this.translateOnAxis(yc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Tn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?os.copy(t):os.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Tn.lookAt(Mr,os,this.up):Tn.lookAt(os,Mr,this.up),this.quaternion.setFromRotationMatrix(Tn),r&&(Tn.extractRotation(r.matrixWorld),Fi.setFromRotationMatrix(Tn),this.quaternion.premultiply(Fi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Tc),Oi.child=t,this.dispatchEvent(Oi),Oi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Pm),yo.child=t,this.dispatchEvent(yo),yo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Tn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Tn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Tn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Tc),Oi.child=t,this.dispatchEvent(Oi),Oi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,t,wm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,Cm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),d=o(t.skeletons),p=o(t.animations),v=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}Ge.DEFAULT_UP=new H(0,1,0);Ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $e=new H,bn=new H,To=new H,An=new H,Bi=new H,zi=new H,bc=new H,bo=new H,Ao=new H,Ro=new H,wo=new he,Co=new he,Po=new he;class Ze{constructor(t=new H,e=new H,i=new H){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),$e.subVectors(t,e),r.cross($e);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){$e.subVectors(r,e),bn.subVectors(i,e),To.subVectors(t,e);const o=$e.dot($e),a=$e.dot(bn),l=$e.dot(To),c=bn.dot(bn),u=bn.dot(To),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,p=(c*l-a*u)*d,v=(o*u-a*l)*d;return s.set(1-p-v,v,p)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,An)===null?!1:An.x>=0&&An.y>=0&&An.x+An.y<=1}static getInterpolation(t,e,i,r,s,o,a,l){return this.getBarycoord(t,e,i,r,An)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,An.x),l.addScaledVector(o,An.y),l.addScaledVector(a,An.z),l)}static getInterpolatedAttribute(t,e,i,r,s,o){return wo.setScalar(0),Co.setScalar(0),Po.setScalar(0),wo.fromBufferAttribute(t,e),Co.fromBufferAttribute(t,i),Po.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(wo,s.x),o.addScaledVector(Co,s.y),o.addScaledVector(Po,s.z),o}static isFrontFacing(t,e,i,r){return $e.subVectors(i,e),bn.subVectors(t,e),$e.cross(bn).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return $e.subVectors(this.c,this.b),bn.subVectors(this.a,this.b),$e.cross(bn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ze.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ze.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return Ze.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return Ze.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ze.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let o,a;Bi.subVectors(r,i),zi.subVectors(s,i),bo.subVectors(t,i);const l=Bi.dot(bo),c=zi.dot(bo);if(l<=0&&c<=0)return e.copy(i);Ao.subVectors(t,r);const u=Bi.dot(Ao),h=zi.dot(Ao);if(u>=0&&h<=u)return e.copy(r);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(i).addScaledVector(Bi,o);Ro.subVectors(t,s);const p=Bi.dot(Ro),v=zi.dot(Ro);if(v>=0&&p<=v)return e.copy(s);const x=p*c-l*v;if(x<=0&&c>=0&&v<=0)return a=c/(c-v),e.copy(i).addScaledVector(zi,a);const m=u*v-p*h;if(m<=0&&h-u>=0&&p-v>=0)return bc.subVectors(s,r),a=(h-u)/(h-u+(p-v)),e.copy(r).addScaledVector(bc,a);const f=1/(m+x+d);return o=x*f,a=d*f,e.copy(i).addScaledVector(Bi,o).addScaledVector(zi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Lh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jn={h:0,s:0,l:0},as={h:0,s:0,l:0};function Do(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class ne{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=He){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Xt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,r=Xt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Xt.toWorkingColorSpace(this,r),this}setHSL(t,e,i,r=Xt.workingColorSpace){if(t=dm(t,1),e=Ce(e,0,1),i=Ce(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=Do(o,s,t+1/3),this.g=Do(o,s,t),this.b=Do(o,s,t-1/3)}return Xt.toWorkingColorSpace(this,r),this}setStyle(t,e=He){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=He){const i=Lh[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Nn(t.r),this.g=Nn(t.g),this.b=Nn(t.b),this}copyLinearToSRGB(t){return this.r=nr(t.r),this.g=nr(t.g),this.b=nr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=He){return Xt.fromWorkingColorSpace(Ee.copy(this),t),Math.round(Ce(Ee.r*255,0,255))*65536+Math.round(Ce(Ee.g*255,0,255))*256+Math.round(Ce(Ee.b*255,0,255))}getHexString(t=He){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Xt.workingColorSpace){Xt.fromWorkingColorSpace(Ee.copy(this),e);const i=Ee.r,r=Ee.g,s=Ee.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Xt.workingColorSpace){return Xt.fromWorkingColorSpace(Ee.copy(this),e),t.r=Ee.r,t.g=Ee.g,t.b=Ee.b,t}getStyle(t=He){Xt.fromWorkingColorSpace(Ee.copy(this),t);const e=Ee.r,i=Ee.g,r=Ee.b;return t!==He?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(jn),this.setHSL(jn.h+t,jn.s+e,jn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(jn),t.getHSL(as);const i=po(jn.h,as.h,e),r=po(jn.s,as.s,e),s=po(jn.l,as.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ee=new ne;ne.NAMES=Lh;let Dm=0;class Ks extends Ri{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dm++}),this.uuid=Xr(),this.name="",this.blending=tr,this.side=ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ta,this.blendDst=ea,this.blendEquation=gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ne(0,0,0),this.blendAlpha=0,this.depthFunc=sr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pi,this.stencilZFail=Pi,this.stencilZPass=Pi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==tr&&(i.blending=this.blending),this.side!==ii&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ta&&(i.blendSrc=this.blendSrc),this.blendDst!==ea&&(i.blendDst=this.blendDst),this.blendEquation!==gi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==sr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Pi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Pi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Pi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ml extends Ks{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.combine=ph,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const de=new H,ls=new Wt;class mn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=cc,this.updateRanges=[],this.gpuType=Un,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ls.fromBufferAttribute(this,e),ls.applyMatrix3(t),this.setXY(e,ls.x,ls.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)de.fromBufferAttribute(this,e),de.applyMatrix3(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)de.fromBufferAttribute(this,e),de.applyMatrix4(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)de.fromBufferAttribute(this,e),de.applyNormalMatrix(t),this.setXYZ(e,de.x,de.y,de.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)de.fromBufferAttribute(this,e),de.transformDirection(t),this.setXYZ(e,de.x,de.y,de.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=gr(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ie(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=gr(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=gr(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=gr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=gr(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),i=Ie(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),i=Ie(i,this.array),r=Ie(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),i=Ie(i,this.array),r=Ie(r,this.array),s=Ie(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==cc&&(t.usage=this.usage),t}}class Uh extends mn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Ih extends mn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class _n extends mn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Lm=0;const We=new pe,Lo=new Ge,Hi=new H,ze=new qr,Sr=new qr,ve=new H;class si extends Ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lm++}),this.uuid=Xr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Rh(t)?Ih:Uh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Vt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return We.makeRotationFromQuaternion(t),this.applyMatrix4(We),this}rotateX(t){return We.makeRotationX(t),this.applyMatrix4(We),this}rotateY(t){return We.makeRotationY(t),this.applyMatrix4(We),this}rotateZ(t){return We.makeRotationZ(t),this.applyMatrix4(We),this}translate(t,e,i){return We.makeTranslation(t,e,i),this.applyMatrix4(We),this}scale(t,e,i){return We.makeScale(t,e,i),this.applyMatrix4(We),this}lookAt(t){return Lo.lookAt(t),Lo.updateMatrix(),this.applyMatrix4(Lo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hi).negate(),this.translate(Hi.x,Hi.y,Hi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let r=0,s=t.length;r<s;r++){const o=t[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new _n(i,3))}else{for(let i=0,r=e.count;i<r;i++){const s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];ze.setFromBufferAttribute(s),this.morphTargetsRelative?(ve.addVectors(this.boundingBox.min,ze.min),this.boundingBox.expandByPoint(ve),ve.addVectors(this.boundingBox.max,ze.max),this.boundingBox.expandByPoint(ve)):(this.boundingBox.expandByPoint(ze.min),this.boundingBox.expandByPoint(ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pl);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(t){const i=this.boundingSphere.center;if(ze.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Sr.setFromBufferAttribute(a),this.morphTargetsRelative?(ve.addVectors(ze.min,Sr.min),ze.expandByPoint(ve),ve.addVectors(ze.max,Sr.max),ze.expandByPoint(ve)):(ze.expandByPoint(Sr.min),ze.expandByPoint(Sr.max))}ze.getCenter(i);let r=0;for(let s=0,o=t.count;s<o;s++)ve.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(ve));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)ve.fromBufferAttribute(a,c),l&&(Hi.fromBufferAttribute(t,c),ve.add(Hi)),r=Math.max(r,i.distanceToSquared(ve))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let F=0;F<i.count;F++)a[F]=new H,l[F]=new H;const c=new H,u=new H,h=new H,d=new Wt,p=new Wt,v=new Wt,x=new H,m=new H;function f(F,T,E){c.fromBufferAttribute(i,F),u.fromBufferAttribute(i,T),h.fromBufferAttribute(i,E),d.fromBufferAttribute(s,F),p.fromBufferAttribute(s,T),v.fromBufferAttribute(s,E),u.sub(c),h.sub(c),p.sub(d),v.sub(d);const D=1/(p.x*v.y-v.x*p.y);isFinite(D)&&(x.copy(u).multiplyScalar(v.y).addScaledVector(h,-p.y).multiplyScalar(D),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-v.x).multiplyScalar(D),a[F].add(x),a[T].add(x),a[E].add(x),l[F].add(m),l[T].add(m),l[E].add(m))}let R=this.groups;R.length===0&&(R=[{start:0,count:t.count}]);for(let F=0,T=R.length;F<T;++F){const E=R[F],D=E.start,Q=E.count;for(let q=D,it=D+Q;q<it;q+=3)f(t.getX(q+0),t.getX(q+1),t.getX(q+2))}const A=new H,S=new H,B=new H,L=new H;function P(F){B.fromBufferAttribute(r,F),L.copy(B);const T=a[F];A.copy(T),A.sub(B.multiplyScalar(B.dot(T))).normalize(),S.crossVectors(L,T);const D=S.dot(l[F])<0?-1:1;o.setXYZW(F,A.x,A.y,A.z,D)}for(let F=0,T=R.length;F<T;++F){const E=R[F],D=E.start,Q=E.count;for(let q=D,it=D+Q;q<it;q+=3)P(t.getX(q+0)),P(t.getX(q+1)),P(t.getX(q+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new mn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new H,s=new H,o=new H,a=new H,l=new H,c=new H,u=new H,h=new H;if(t)for(let d=0,p=t.count;d<p;d+=3){const v=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);r.fromBufferAttribute(e,v),s.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)r.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ve.fromBufferAttribute(t,e),ve.normalize(),t.setXYZ(e,ve.x,ve.y,ve.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let p=0,v=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*u;for(let f=0;f<u;f++)d[v++]=c[p++]}return new mn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new si,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=t(l,i);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=t(d,i);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const r=t.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ac=new pe,hi=new Ph,cs=new pl,Rc=new H,us=new H,hs=new H,fs=new H,Uo=new H,ds=new H,wc=new H,ps=new H;class dn extends Ge{constructor(t=new si,e=new ml){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){ds.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Uo.fromBufferAttribute(h,t),o?ds.addScaledVector(Uo,u):ds.addScaledVector(Uo.sub(e),u))}e.add(ds)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),cs.copy(i.boundingSphere),cs.applyMatrix4(s),hi.copy(t.ray).recast(t.near),!(cs.containsPoint(hi.origin)===!1&&(hi.intersectSphere(cs,Rc)===null||hi.origin.distanceToSquared(Rc)>(t.far-t.near)**2))&&(Ac.copy(s).invert(),hi.copy(t.ray).applyMatrix4(Ac),!(i.boundingBox!==null&&hi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,hi)))}_computeIntersections(t,e,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,x=d.length;v<x;v++){const m=d[v],f=o[m.materialIndex],R=Math.max(m.start,p.start),A=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=R,B=A;S<B;S+=3){const L=a.getX(S),P=a.getX(S+1),F=a.getX(S+2);r=ms(this,f,t,i,c,u,h,L,P,F),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const v=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=v,f=x;m<f;m+=3){const R=a.getX(m),A=a.getX(m+1),S=a.getX(m+2);r=ms(this,o,t,i,c,u,h,R,A,S),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,x=d.length;v<x;v++){const m=d[v],f=o[m.materialIndex],R=Math.max(m.start,p.start),A=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=R,B=A;S<B;S+=3){const L=S,P=S+1,F=S+2;r=ms(this,f,t,i,c,u,h,L,P,F),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const v=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=v,f=x;m<f;m+=3){const R=m,A=m+1,S=m+2;r=ms(this,o,t,i,c,u,h,R,A,S),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function Um(n,t,e,i,r,s,o,a){let l;if(t.side===De?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,t.side===ii,a),l===null)return null;ps.copy(a),ps.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(ps);return c<e.near||c>e.far?null:{distance:c,point:ps.clone(),object:n}}function ms(n,t,e,i,r,s,o,a,l,c){n.getVertexPosition(a,us),n.getVertexPosition(l,hs),n.getVertexPosition(c,fs);const u=Um(n,t,e,i,us,hs,fs,wc);if(u){const h=new H;Ze.getBarycoord(wc,us,hs,fs,h),r&&(u.uv=Ze.getInterpolatedAttribute(r,a,l,c,h,new Wt)),s&&(u.uv1=Ze.getInterpolatedAttribute(s,a,l,c,h,new Wt)),o&&(u.normal=Ze.getInterpolatedAttribute(o,a,l,c,h,new H),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new H,materialIndex:0};Ze.getNormal(us,hs,fs,d.normal),u.face=d,u.barycoord=h}return u}class Yr extends si{constructor(t=1,e=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,p=0;v("z","y","x",-1,-1,i,e,t,o,s,0),v("z","y","x",1,-1,i,e,-t,o,s,1),v("x","z","y",1,1,t,i,e,r,o,2),v("x","z","y",1,-1,t,i,-e,r,o,3),v("x","y","z",1,-1,t,e,i,r,s,4),v("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new _n(c,3)),this.setAttribute("normal",new _n(u,3)),this.setAttribute("uv",new _n(h,2));function v(x,m,f,R,A,S,B,L,P,F,T){const E=S/P,D=B/F,Q=S/2,q=B/2,it=L/2,st=P+1,$=F+1;let J=0,z=0;const ft=new H;for(let Mt=0;Mt<$;Mt++){const yt=Mt*D-q;for(let Dt=0;Dt<st;Dt++){const Yt=Dt*E-Q;ft[x]=Yt*R,ft[m]=yt*A,ft[f]=it,c.push(ft.x,ft.y,ft.z),ft[x]=0,ft[m]=0,ft[f]=L>0?1:-1,u.push(ft.x,ft.y,ft.z),h.push(Dt/P),h.push(1-Mt/F),J+=1}}for(let Mt=0;Mt<F;Mt++)for(let yt=0;yt<P;yt++){const Dt=d+yt+st*Mt,Yt=d+yt+st*(Mt+1),tt=d+(yt+1)+st*(Mt+1),lt=d+(yt+1)+st*Mt;l.push(Dt,Yt,lt),l.push(Yt,tt,lt),z+=6}a.addGroup(p,z,T),p+=z,d+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ur(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function Re(n){const t={};for(let e=0;e<n.length;e++){const i=ur(n[e]);for(const r in i)t[r]=i[r]}return t}function Im(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Nh(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Xt.workingColorSpace}const Nm={clone:ur,merge:Re};var Fm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Om=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ri extends Ks{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fm,this.fragmentShader=Om,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ur(t.uniforms),this.uniformsGroups=Im(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Fh extends Ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pe,this.projectionMatrix=new pe,this.projectionMatrixInverse=new pe,this.coordinateSystem=In}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Kn=new H,Cc=new Wt,Pc=new Wt;class Xe extends Fh{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=za*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Cs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return za*2*Math.atan(Math.tan(Cs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Kn.x,Kn.y).multiplyScalar(-t/Kn.z),Kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Kn.x,Kn.y).multiplyScalar(-t/Kn.z)}getViewSize(t,e){return this.getViewBounds(t,Cc,Pc),e.subVectors(Pc,Cc)}setViewOffset(t,e,i,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Cs*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Vi=-90,Gi=1;class Bm extends Ge{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Xe(Vi,Gi,t,e);r.layers=this.layers,this.add(r);const s=new Xe(Vi,Gi,t,e);s.layers=this.layers,this.add(s);const o=new Xe(Vi,Gi,t,e);o.layers=this.layers,this.add(o);const a=new Xe(Vi,Gi,t,e);a.layers=this.layers,this.add(a);const l=new Xe(Vi,Gi,t,e);l.layers=this.layers,this.add(l);const c=new Xe(Vi,Gi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===In)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Os)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,o),t.setRenderTarget(i,2,r),t.render(e,a),t.setRenderTarget(i,3,r),t.render(e,l),t.setRenderTarget(i,4,r),t.render(e,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,r),t.render(e,u),t.setRenderTarget(h,d,p),t.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Oh extends Le{constructor(t,e,i,r,s,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:or,super(t,e,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class zm extends Ti{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new Oh(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:fn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Yr(5,5,5),s=new ri({name:"CubemapFromEquirect",uniforms:ur(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:De,blending:ti});s.uniforms.tEquirect.value=e;const o=new dn(r,s),a=e.minFilter;return e.minFilter===Mi&&(e.minFilter=fn),new Bm(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,r);t.setRenderTarget(s)}}const Io=new H,Hm=new H,Vm=new Vt;class Zn{constructor(t=new H(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=Io.subVectors(i,e).cross(Hm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Io),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Vm.getNormalMatrix(t),r=this.coplanarPoint(Io).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fi=new pl,_s=new H;class Bh{constructor(t=new Zn,e=new Zn,i=new Zn,r=new Zn,s=new Zn,o=new Zn){this.planes=[t,e,i,r,s,o]}set(t,e,i,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=In){const i=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],h=r[6],d=r[7],p=r[8],v=r[9],x=r[10],m=r[11],f=r[12],R=r[13],A=r[14],S=r[15];if(i[0].setComponents(l-s,d-c,m-p,S-f).normalize(),i[1].setComponents(l+s,d+c,m+p,S+f).normalize(),i[2].setComponents(l+o,d+u,m+v,S+R).normalize(),i[3].setComponents(l-o,d-u,m-v,S-R).normalize(),i[4].setComponents(l-a,d-h,m-x,S-A).normalize(),e===In)i[5].setComponents(l+a,d+h,m+x,S+A).normalize();else if(e===Os)i[5].setComponents(a,h,x,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),fi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),fi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(fi)}intersectsSprite(t){return fi.center.set(0,0,0),fi.radius=.7071067811865476,fi.applyMatrix4(t.matrixWorld),this.intersectsSphere(fi)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(_s.x=r.normal.x>0?t.max.x:t.min.x,_s.y=r.normal.y>0?t.max.y:t.min.y,_s.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(_s)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function zh(){let n=null,t=!1,e=null,i=null;function r(s,o){e(s,o),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function Gm(n){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((p,v)=>p.start-v.start);let d=0;for(let p=1;p<h.length;p++){const v=h[d],x=h[p];x.start<=v.start+v.count+1?v.count=Math.max(v.count,x.start+x.count-v.start):(++d,h[d]=x)}h.length=d+1;for(let p=0,v=h.length;p<v;p++){const x=h[p];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class $s extends si{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,h=t/a,d=e/l,p=[],v=[],x=[],m=[];for(let f=0;f<u;f++){const R=f*d-o;for(let A=0;A<c;A++){const S=A*h-s;v.push(S,-R,0),x.push(0,0,1),m.push(A/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let R=0;R<a;R++){const A=R+c*f,S=R+c*(f+1),B=R+1+c*(f+1),L=R+1+c*f;p.push(A,S,L),p.push(S,B,L)}this.setIndex(p),this.setAttribute("position",new _n(v,3)),this.setAttribute("normal",new _n(x,3)),this.setAttribute("uv",new _n(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $s(t.width,t.height,t.widthSegments,t.heightSegments)}}var km=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Xm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ym=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Km=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,$m=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Jm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Qm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,t_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,e_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,n_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,i_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,r_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,s_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,o_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,a_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,l_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,c_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,u_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,h_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,f_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,d_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,p_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,m_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,__=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,g_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,v_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,x_="gl_FragColor = linearToOutputTexel( gl_FragColor );",M_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,S_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,E_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,y_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,T_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,b_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,A_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,R_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,w_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,C_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,P_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,D_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,L_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,U_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,I_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,N_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,F_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,O_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,B_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,z_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,H_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,V_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,G_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,k_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,W_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,X_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,q_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Y_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,j_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,K_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Z_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,J_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Q_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,eg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ng=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ig=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,sg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,og=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ag=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,lg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ug=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,fg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_g=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,vg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Eg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,bg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ag=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Rg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,wg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Pg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Dg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Lg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ug=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ig=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ng=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Og=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Bg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Hg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Vg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Gg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Kg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,$g=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Zg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Jg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ev=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,iv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ov=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,av=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,cv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,uv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,dv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_v=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,gv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Mv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Sv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Gt={alphahash_fragment:km,alphahash_pars_fragment:Wm,alphamap_fragment:Xm,alphamap_pars_fragment:qm,alphatest_fragment:Ym,alphatest_pars_fragment:jm,aomap_fragment:Km,aomap_pars_fragment:$m,batching_pars_vertex:Zm,batching_vertex:Jm,begin_vertex:Qm,beginnormal_vertex:t_,bsdfs:e_,iridescence_fragment:n_,bumpmap_pars_fragment:i_,clipping_planes_fragment:r_,clipping_planes_pars_fragment:s_,clipping_planes_pars_vertex:o_,clipping_planes_vertex:a_,color_fragment:l_,color_pars_fragment:c_,color_pars_vertex:u_,color_vertex:h_,common:f_,cube_uv_reflection_fragment:d_,defaultnormal_vertex:p_,displacementmap_pars_vertex:m_,displacementmap_vertex:__,emissivemap_fragment:g_,emissivemap_pars_fragment:v_,colorspace_fragment:x_,colorspace_pars_fragment:M_,envmap_fragment:S_,envmap_common_pars_fragment:E_,envmap_pars_fragment:y_,envmap_pars_vertex:T_,envmap_physical_pars_fragment:N_,envmap_vertex:b_,fog_vertex:A_,fog_pars_vertex:R_,fog_fragment:w_,fog_pars_fragment:C_,gradientmap_pars_fragment:P_,lightmap_pars_fragment:D_,lights_lambert_fragment:L_,lights_lambert_pars_fragment:U_,lights_pars_begin:I_,lights_toon_fragment:F_,lights_toon_pars_fragment:O_,lights_phong_fragment:B_,lights_phong_pars_fragment:z_,lights_physical_fragment:H_,lights_physical_pars_fragment:V_,lights_fragment_begin:G_,lights_fragment_maps:k_,lights_fragment_end:W_,logdepthbuf_fragment:X_,logdepthbuf_pars_fragment:q_,logdepthbuf_pars_vertex:Y_,logdepthbuf_vertex:j_,map_fragment:K_,map_pars_fragment:$_,map_particle_fragment:Z_,map_particle_pars_fragment:J_,metalnessmap_fragment:Q_,metalnessmap_pars_fragment:tg,morphinstance_vertex:eg,morphcolor_vertex:ng,morphnormal_vertex:ig,morphtarget_pars_vertex:rg,morphtarget_vertex:sg,normal_fragment_begin:og,normal_fragment_maps:ag,normal_pars_fragment:lg,normal_pars_vertex:cg,normal_vertex:ug,normalmap_pars_fragment:hg,clearcoat_normal_fragment_begin:fg,clearcoat_normal_fragment_maps:dg,clearcoat_pars_fragment:pg,iridescence_pars_fragment:mg,opaque_fragment:_g,packing:gg,premultiplied_alpha_fragment:vg,project_vertex:xg,dithering_fragment:Mg,dithering_pars_fragment:Sg,roughnessmap_fragment:Eg,roughnessmap_pars_fragment:yg,shadowmap_pars_fragment:Tg,shadowmap_pars_vertex:bg,shadowmap_vertex:Ag,shadowmask_pars_fragment:Rg,skinbase_vertex:wg,skinning_pars_vertex:Cg,skinning_vertex:Pg,skinnormal_vertex:Dg,specularmap_fragment:Lg,specularmap_pars_fragment:Ug,tonemapping_fragment:Ig,tonemapping_pars_fragment:Ng,transmission_fragment:Fg,transmission_pars_fragment:Og,uv_pars_fragment:Bg,uv_pars_vertex:zg,uv_vertex:Hg,worldpos_vertex:Vg,background_vert:Gg,background_frag:kg,backgroundCube_vert:Wg,backgroundCube_frag:Xg,cube_vert:qg,cube_frag:Yg,depth_vert:jg,depth_frag:Kg,distanceRGBA_vert:$g,distanceRGBA_frag:Zg,equirect_vert:Jg,equirect_frag:Qg,linedashed_vert:tv,linedashed_frag:ev,meshbasic_vert:nv,meshbasic_frag:iv,meshlambert_vert:rv,meshlambert_frag:sv,meshmatcap_vert:ov,meshmatcap_frag:av,meshnormal_vert:lv,meshnormal_frag:cv,meshphong_vert:uv,meshphong_frag:hv,meshphysical_vert:fv,meshphysical_frag:dv,meshtoon_vert:pv,meshtoon_frag:mv,points_vert:_v,points_frag:gv,shadow_vert:vv,shadow_frag:xv,sprite_vert:Mv,sprite_frag:Sv},mt={common:{diffuse:{value:new ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new Wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new ne(16777215)},opacity:{value:1},center:{value:new Wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},cn={basic:{uniforms:Re([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:Re([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new ne(0)}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:Re([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new ne(0)},specular:{value:new ne(1118481)},shininess:{value:30}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:Re([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:Re([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new ne(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:Re([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:Re([mt.points,mt.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:Re([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:Re([mt.common,mt.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:Re([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:Re([mt.sprite,mt.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distanceRGBA:{uniforms:Re([mt.common,mt.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distanceRGBA_vert,fragmentShader:Gt.distanceRGBA_frag},shadow:{uniforms:Re([mt.lights,mt.fog,{color:{value:new ne(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};cn.physical={uniforms:Re([cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new Wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new Wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new ne(0)},specularColor:{value:new ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new Wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};const gs={r:0,b:0,g:0},di=new Hn,Ev=new pe;function yv(n,t,e,i,r,s,o){const a=new ne(0);let l=s===!0?0:1,c,u,h=null,d=0,p=null;function v(R){let A=R.isScene===!0?R.background:null;return A&&A.isTexture&&(A=(R.backgroundBlurriness>0?e:t).get(A)),A}function x(R){let A=!1;const S=v(R);S===null?f(a,l):S&&S.isColor&&(f(S,1),A=!0);const B=n.xr.getEnvironmentBlendMode();B==="additive"?i.buffers.color.setClear(0,0,0,1,o):B==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||A)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(R,A){const S=v(A);S&&(S.isCubeTexture||S.mapping===Ys)?(u===void 0&&(u=new dn(new Yr(1,1,1),new ri({name:"BackgroundCubeMaterial",uniforms:ur(cn.backgroundCube.uniforms),vertexShader:cn.backgroundCube.vertexShader,fragmentShader:cn.backgroundCube.fragmentShader,side:De,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(B,L,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),di.copy(A.backgroundRotation),di.x*=-1,di.y*=-1,di.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(di.y*=-1,di.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Ev.makeRotationFromEuler(di)),u.material.toneMapped=Xt.getTransfer(S.colorSpace)!==te,(h!==S||d!==S.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=S,d=S.version,p=n.toneMapping),u.layers.enableAll(),R.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new dn(new $s(2,2),new ri({name:"BackgroundMaterial",uniforms:ur(cn.background.uniforms),vertexShader:cn.background.vertexShader,fragmentShader:cn.background.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=Xt.getTransfer(S.colorSpace)!==te,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||d!==S.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,h=S,d=S.version,p=n.toneMapping),c.layers.enableAll(),R.unshift(c,c.geometry,c.material,0,0,null))}function f(R,A){R.getRGB(gs,Nh(n)),i.buffers.color.setClear(gs.r,gs.g,gs.b,A,o)}return{getClearColor:function(){return a},setClearColor:function(R,A=1){a.set(R),l=A,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(R){l=R,f(a,l)},render:x,addToRenderList:m}}function Tv(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(E,D,Q,q,it){let st=!1;const $=h(q,Q,D);s!==$&&(s=$,c(s.object)),st=p(E,q,Q,it),st&&v(E,q,Q,it),it!==null&&t.update(it,n.ELEMENT_ARRAY_BUFFER),(st||o)&&(o=!1,S(E,D,Q,q),it!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(it).buffer))}function l(){return n.createVertexArray()}function c(E){return n.bindVertexArray(E)}function u(E){return n.deleteVertexArray(E)}function h(E,D,Q){const q=Q.wireframe===!0;let it=i[E.id];it===void 0&&(it={},i[E.id]=it);let st=it[D.id];st===void 0&&(st={},it[D.id]=st);let $=st[q];return $===void 0&&($=d(l()),st[q]=$),$}function d(E){const D=[],Q=[],q=[];for(let it=0;it<e;it++)D[it]=0,Q[it]=0,q[it]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:Q,attributeDivisors:q,object:E,attributes:{},index:null}}function p(E,D,Q,q){const it=s.attributes,st=D.attributes;let $=0;const J=Q.getAttributes();for(const z in J)if(J[z].location>=0){const Mt=it[z];let yt=st[z];if(yt===void 0&&(z==="instanceMatrix"&&E.instanceMatrix&&(yt=E.instanceMatrix),z==="instanceColor"&&E.instanceColor&&(yt=E.instanceColor)),Mt===void 0||Mt.attribute!==yt||yt&&Mt.data!==yt.data)return!0;$++}return s.attributesNum!==$||s.index!==q}function v(E,D,Q,q){const it={},st=D.attributes;let $=0;const J=Q.getAttributes();for(const z in J)if(J[z].location>=0){let Mt=st[z];Mt===void 0&&(z==="instanceMatrix"&&E.instanceMatrix&&(Mt=E.instanceMatrix),z==="instanceColor"&&E.instanceColor&&(Mt=E.instanceColor));const yt={};yt.attribute=Mt,Mt&&Mt.data&&(yt.data=Mt.data),it[z]=yt,$++}s.attributes=it,s.attributesNum=$,s.index=q}function x(){const E=s.newAttributes;for(let D=0,Q=E.length;D<Q;D++)E[D]=0}function m(E){f(E,0)}function f(E,D){const Q=s.newAttributes,q=s.enabledAttributes,it=s.attributeDivisors;Q[E]=1,q[E]===0&&(n.enableVertexAttribArray(E),q[E]=1),it[E]!==D&&(n.vertexAttribDivisor(E,D),it[E]=D)}function R(){const E=s.newAttributes,D=s.enabledAttributes;for(let Q=0,q=D.length;Q<q;Q++)D[Q]!==E[Q]&&(n.disableVertexAttribArray(Q),D[Q]=0)}function A(E,D,Q,q,it,st,$){$===!0?n.vertexAttribIPointer(E,D,Q,it,st):n.vertexAttribPointer(E,D,Q,q,it,st)}function S(E,D,Q,q){x();const it=q.attributes,st=Q.getAttributes(),$=D.defaultAttributeValues;for(const J in st){const z=st[J];if(z.location>=0){let ft=it[J];if(ft===void 0&&(J==="instanceMatrix"&&E.instanceMatrix&&(ft=E.instanceMatrix),J==="instanceColor"&&E.instanceColor&&(ft=E.instanceColor)),ft!==void 0){const Mt=ft.normalized,yt=ft.itemSize,Dt=t.get(ft);if(Dt===void 0)continue;const Yt=Dt.buffer,tt=Dt.type,lt=Dt.bytesPerElement,Et=tt===n.INT||tt===n.UNSIGNED_INT||ft.gpuType===ll;if(ft.isInterleavedBufferAttribute){const pt=ft.data,Ct=pt.stride,Ut=ft.offset;if(pt.isInstancedInterleavedBuffer){for(let Ft=0;Ft<z.locationSize;Ft++)f(z.location+Ft,pt.meshPerAttribute);E.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let Ft=0;Ft<z.locationSize;Ft++)m(z.location+Ft);n.bindBuffer(n.ARRAY_BUFFER,Yt);for(let Ft=0;Ft<z.locationSize;Ft++)A(z.location+Ft,yt/z.locationSize,tt,Mt,Ct*lt,(Ut+yt/z.locationSize*Ft)*lt,Et)}else{if(ft.isInstancedBufferAttribute){for(let pt=0;pt<z.locationSize;pt++)f(z.location+pt,ft.meshPerAttribute);E.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let pt=0;pt<z.locationSize;pt++)m(z.location+pt);n.bindBuffer(n.ARRAY_BUFFER,Yt);for(let pt=0;pt<z.locationSize;pt++)A(z.location+pt,yt/z.locationSize,tt,Mt,yt*lt,yt/z.locationSize*pt*lt,Et)}}else if($!==void 0){const Mt=$[J];if(Mt!==void 0)switch(Mt.length){case 2:n.vertexAttrib2fv(z.location,Mt);break;case 3:n.vertexAttrib3fv(z.location,Mt);break;case 4:n.vertexAttrib4fv(z.location,Mt);break;default:n.vertexAttrib1fv(z.location,Mt)}}}}R()}function B(){F();for(const E in i){const D=i[E];for(const Q in D){const q=D[Q];for(const it in q)u(q[it].object),delete q[it];delete D[Q]}delete i[E]}}function L(E){if(i[E.id]===void 0)return;const D=i[E.id];for(const Q in D){const q=D[Q];for(const it in q)u(q[it].object),delete q[it];delete D[Q]}delete i[E.id]}function P(E){for(const D in i){const Q=i[D];if(Q[E.id]===void 0)continue;const q=Q[E.id];for(const it in q)u(q[it].object),delete q[it];delete Q[E.id]}}function F(){T(),o=!0,s!==r&&(s=r,c(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:F,resetDefaultState:T,dispose:B,releaseStatesOfGeometry:L,releaseStatesOfProgram:P,initAttributes:x,enableAttribute:m,disableUnusedAttributes:R}}function bv(n,t,e){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),e.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),e.update(u,i,h))}function a(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let p=0;for(let v=0;v<h;v++)p+=u[v];e.update(p,i,1)}function l(c,u,h,d){if(h===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<c.length;v++)o(c[v],u[v],d[v]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,h);let v=0;for(let x=0;x<h;x++)v+=u[x]*d[x];e.update(v,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Av(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(P){return!(P!==Je&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const F=P===Wr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==zn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Un&&!F)}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),R=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),B=v>0,L=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:v,maxTextureSize:x,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:R,maxVaryings:A,maxFragmentUniforms:S,vertexTextures:B,maxSamples:L}}function Rv(n){const t=this;let e=null,i=0,r=!1,s=!1;const o=new Zn,a=new Vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||r;return r=d,i=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,p){const v=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,f=n.get(h);if(!r||v===null||v.length===0||s&&!m)s?u(null):c();else{const R=s?0:i,A=R*4;let S=f.clippingState||null;l.value=S,S=u(v,d,A,p);for(let B=0;B!==A;++B)S[B]=e[B];f.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=R}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,d,p,v){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=l.value,v!==!0||m===null){const f=p+x*4,R=d.matrixWorldInverse;a.getNormalMatrix(R),(m===null||m.length<f)&&(m=new Float32Array(f));for(let A=0,S=p;A!==x;++A,S+=4)o.copy(h[A]).applyMatrix4(R,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function wv(n){let t=new WeakMap;function e(o,a){return a===ca?o.mapping=or:a===ua&&(o.mapping=ar),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===ca||a===ua)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new zm(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",r),e(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}class Cv extends Fh{constructor(t=-1,e=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,o=i+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Yi=4,Dc=[.125,.215,.35,.446,.526,.582],vi=20,No=new Cv,Lc=new ne;let Fo=null,Oo=0,Bo=0,zo=!1;const _i=(1+Math.sqrt(5))/2,ki=1/_i,Uc=[new H(-_i,ki,0),new H(_i,ki,0),new H(-ki,0,_i),new H(ki,0,_i),new H(0,_i,-ki),new H(0,_i,ki),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)];class Ic{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100){Fo=this._renderer.getRenderTarget(),Oo=this._renderer.getActiveCubeFace(),Bo=this._renderer.getActiveMipmapLevel(),zo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Oc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Fo,Oo,Bo),this._renderer.xr.enabled=zo,t.scissorTest=!1,vs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===or||t.mapping===ar?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Fo=this._renderer.getRenderTarget(),Oo=this._renderer.getActiveCubeFace(),Bo=this._renderer.getActiveMipmapLevel(),zo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:Wr,format:Je,colorSpace:hr,depthBuffer:!1},r=Nc(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nc(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Pv(s)),this._blurMaterial=Dv(s,t,e)}return r}_compileMaterial(t){const e=new dn(this._lodPlanes[0],t);this._renderer.compile(e,No)}_sceneToCubeUV(t,e,i,r){const a=new Xe(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Lc),u.toneMapping=ei,u.autoClear=!1;const p=new ml({name:"PMREM.Background",side:De,depthWrite:!1,depthTest:!1}),v=new dn(new Yr,p);let x=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,x=!0):(p.color.copy(Lc),x=!0);for(let f=0;f<6;f++){const R=f%3;R===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):R===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const A=this._cubeSize;vs(r,R*A,f>2?A:0,A,A),u.setRenderTarget(r),x&&u.render(v,a),u.render(t,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===or||t.mapping===ar;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Oc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fc());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new dn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;vs(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,No)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Uc[(r-s-1)%Uc.length];this._blur(t,s-1,s,o,a)}e.autoClear=i}_blur(t,e,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,r,"latitudinal",s),this._halfBlur(o,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new dn(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*vi-1),x=s/v,m=isFinite(s)?1+Math.floor(u*x):vi;m>vi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${vi}`);const f=[];let R=0;for(let P=0;P<vi;++P){const F=P/x,T=Math.exp(-F*F/2);f.push(T),P===0?R+=T:P<m&&(R+=2*T)}for(let P=0;P<f.length;P++)f[P]=f[P]/R;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:A}=this;d.dTheta.value=v,d.mipInt.value=A-i;const S=this._sizeLods[r],B=3*S*(r>A-Yi?r-A+Yi:0),L=4*(this._cubeSize-S);vs(e,B,L,3*S,2*S),l.setRenderTarget(e),l.render(h,No)}}function Pv(n){const t=[],e=[],i=[];let r=n;const s=n-Yi+1+Dc.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>n-Yi?l=Dc[o-n+Yi-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,v=6,x=3,m=2,f=1,R=new Float32Array(x*v*p),A=new Float32Array(m*v*p),S=new Float32Array(f*v*p);for(let L=0;L<p;L++){const P=L%3*2/3-1,F=L>2?0:-1,T=[P,F,0,P+2/3,F,0,P+2/3,F+1,0,P,F,0,P+2/3,F+1,0,P,F+1,0];R.set(T,x*v*L),A.set(d,m*v*L);const E=[L,L,L,L,L,L];S.set(E,f*v*L)}const B=new si;B.setAttribute("position",new mn(R,x)),B.setAttribute("uv",new mn(A,m)),B.setAttribute("faceIndex",new mn(S,f)),t.push(B),r>Yi&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Nc(n,t,e){const i=new Ti(n,t,e);return i.texture.mapping=Ys,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function vs(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function Dv(n,t,e){const i=new Float32Array(vi),r=new H(0,1,0);return new ri({name:"SphericalGaussianBlur",defines:{n:vi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:_l(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Fc(){return new ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_l(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Oc(){return new ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_l(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function _l(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Lv(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===ca||l===ua,u=l===or||l===ar;if(c||u){let h=t.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Ic(n)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(e===null&&(e=new Ic(n)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function Uv(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&Tr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Iv(n,t,e,i){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const v in d.attributes)t.remove(d.attributes[v]);for(const v in d.morphAttributes){const x=d.morphAttributes[v];for(let m=0,f=x.length;m<f;m++)t.remove(x[m])}d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(t.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,e.memory.geometries++),d}function l(h){const d=h.attributes;for(const v in d)t.update(d[v],n.ARRAY_BUFFER);const p=h.morphAttributes;for(const v in p){const x=p[v];for(let m=0,f=x.length;m<f;m++)t.update(x[m],n.ARRAY_BUFFER)}}function c(h){const d=[],p=h.index,v=h.attributes.position;let x=0;if(p!==null){const R=p.array;x=p.version;for(let A=0,S=R.length;A<S;A+=3){const B=R[A+0],L=R[A+1],P=R[A+2];d.push(B,L,L,P,P,B)}}else if(v!==void 0){const R=v.array;x=v.version;for(let A=0,S=R.length/3-1;A<S;A+=3){const B=A+0,L=A+1,P=A+2;d.push(B,L,L,P,P,B)}}else return;const m=new(Rh(d)?Ih:Uh)(d,1);m.version=x;const f=s.get(h);f&&t.remove(f),s.set(h,m)}function u(h){const d=s.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Nv(n,t,e){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,p){n.drawElements(i,p,s,d*o),e.update(p,i,1)}function c(d,p,v){v!==0&&(n.drawElementsInstanced(i,p,s,d*o,v),e.update(p,i,v))}function u(d,p,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,v);let m=0;for(let f=0;f<v;f++)m+=p[f];e.update(m,i,1)}function h(d,p,v,x){if(v===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/o,p[f],x[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,x,0,v);let f=0;for(let R=0;R<v;R++)f+=p[R]*x[R];e.update(f,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Fv(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(s/3);break;case n.LINES:e.lines+=a*(s/2);break;case n.LINE_STRIP:e.lines+=a*(s-1);break;case n.LINE_LOOP:e.lines+=a*s;break;case n.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function Ov(n,t,e){const i=new WeakMap,r=new he;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let E=function(){F.dispose(),i.delete(a),a.removeEventListener("dispose",E)};var p=E;d!==void 0&&d.texture.dispose();const v=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],R=a.morphAttributes.normal||[],A=a.morphAttributes.color||[];let S=0;v===!0&&(S=1),x===!0&&(S=2),m===!0&&(S=3);let B=a.attributes.position.count*S,L=1;B>t.maxTextureSize&&(L=Math.ceil(B/t.maxTextureSize),B=t.maxTextureSize);const P=new Float32Array(B*L*4*h),F=new Ch(P,B,L,h);F.type=Un,F.needsUpdate=!0;const T=S*4;for(let D=0;D<h;D++){const Q=f[D],q=R[D],it=A[D],st=B*L*4*D;for(let $=0;$<Q.count;$++){const J=$*T;v===!0&&(r.fromBufferAttribute(Q,$),P[st+J+0]=r.x,P[st+J+1]=r.y,P[st+J+2]=r.z,P[st+J+3]=0),x===!0&&(r.fromBufferAttribute(q,$),P[st+J+4]=r.x,P[st+J+5]=r.y,P[st+J+6]=r.z,P[st+J+7]=0),m===!0&&(r.fromBufferAttribute(it,$),P[st+J+8]=r.x,P[st+J+9]=r.y,P[st+J+10]=r.z,P[st+J+11]=it.itemSize===4?r.w:1)}}d={count:h,texture:F,size:new Wt(B,L)},i.set(a,d),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let v=0;for(let m=0;m<c.length;m++)v+=c[m];const x=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function Bv(n,t,e,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=t.get(l,u);if(r.get(h)!==c&&(t.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}class Hh extends Le{constructor(t,e,i,r,s,o,a,l,c,u=er){if(u!==er&&u!==cr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===er&&(i=yi),i===void 0&&u===cr&&(i=lr),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:nn,this.minFilter=l!==void 0?l:nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Vh=new Le,Bc=new Hh(1,1),Gh=new Ch,kh=new ym,Wh=new Oh,zc=[],Hc=[],Vc=new Float32Array(16),Gc=new Float32Array(9),kc=new Float32Array(4);function fr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=zc[r];if(s===void 0&&(s=new Float32Array(r),zc[r]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(s,a)}return s}function _e(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function ge(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Zs(n,t){let e=Hc[t];e===void 0&&(e=new Int32Array(t),Hc[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function zv(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Hv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;n.uniform2fv(this.addr,t),ge(e,t)}}function Vv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(_e(e,t))return;n.uniform3fv(this.addr,t),ge(e,t)}}function Gv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;n.uniform4fv(this.addr,t),ge(e,t)}}function kv(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(_e(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),ge(e,t)}else{if(_e(e,i))return;kc.set(i),n.uniformMatrix2fv(this.addr,!1,kc),ge(e,i)}}function Wv(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(_e(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),ge(e,t)}else{if(_e(e,i))return;Gc.set(i),n.uniformMatrix3fv(this.addr,!1,Gc),ge(e,i)}}function Xv(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(_e(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),ge(e,t)}else{if(_e(e,i))return;Vc.set(i),n.uniformMatrix4fv(this.addr,!1,Vc),ge(e,i)}}function qv(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Yv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;n.uniform2iv(this.addr,t),ge(e,t)}}function jv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;n.uniform3iv(this.addr,t),ge(e,t)}}function Kv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;n.uniform4iv(this.addr,t),ge(e,t)}}function $v(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Zv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;n.uniform2uiv(this.addr,t),ge(e,t)}}function Jv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;n.uniform3uiv(this.addr,t),ge(e,t)}}function Qv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;n.uniform4uiv(this.addr,t),ge(e,t)}}function tx(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Bc.compareFunction=Ah,s=Bc):s=Vh,e.setTexture2D(t||s,r)}function ex(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||kh,r)}function nx(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||Wh,r)}function ix(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||Gh,r)}function rx(n){switch(n){case 5126:return zv;case 35664:return Hv;case 35665:return Vv;case 35666:return Gv;case 35674:return kv;case 35675:return Wv;case 35676:return Xv;case 5124:case 35670:return qv;case 35667:case 35671:return Yv;case 35668:case 35672:return jv;case 35669:case 35673:return Kv;case 5125:return $v;case 36294:return Zv;case 36295:return Jv;case 36296:return Qv;case 35678:case 36198:case 36298:case 36306:case 35682:return tx;case 35679:case 36299:case 36307:return ex;case 35680:case 36300:case 36308:case 36293:return nx;case 36289:case 36303:case 36311:case 36292:return ix}}function sx(n,t){n.uniform1fv(this.addr,t)}function ox(n,t){const e=fr(t,this.size,2);n.uniform2fv(this.addr,e)}function ax(n,t){const e=fr(t,this.size,3);n.uniform3fv(this.addr,e)}function lx(n,t){const e=fr(t,this.size,4);n.uniform4fv(this.addr,e)}function cx(n,t){const e=fr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function ux(n,t){const e=fr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function hx(n,t){const e=fr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function fx(n,t){n.uniform1iv(this.addr,t)}function dx(n,t){n.uniform2iv(this.addr,t)}function px(n,t){n.uniform3iv(this.addr,t)}function mx(n,t){n.uniform4iv(this.addr,t)}function _x(n,t){n.uniform1uiv(this.addr,t)}function gx(n,t){n.uniform2uiv(this.addr,t)}function vx(n,t){n.uniform3uiv(this.addr,t)}function xx(n,t){n.uniform4uiv(this.addr,t)}function Mx(n,t,e){const i=this.cache,r=t.length,s=Zs(e,r);_e(i,s)||(n.uniform1iv(this.addr,s),ge(i,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||Vh,s[o])}function Sx(n,t,e){const i=this.cache,r=t.length,s=Zs(e,r);_e(i,s)||(n.uniform1iv(this.addr,s),ge(i,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||kh,s[o])}function Ex(n,t,e){const i=this.cache,r=t.length,s=Zs(e,r);_e(i,s)||(n.uniform1iv(this.addr,s),ge(i,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||Wh,s[o])}function yx(n,t,e){const i=this.cache,r=t.length,s=Zs(e,r);_e(i,s)||(n.uniform1iv(this.addr,s),ge(i,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||Gh,s[o])}function Tx(n){switch(n){case 5126:return sx;case 35664:return ox;case 35665:return ax;case 35666:return lx;case 35674:return cx;case 35675:return ux;case 35676:return hx;case 5124:case 35670:return fx;case 35667:case 35671:return dx;case 35668:case 35672:return px;case 35669:case 35673:return mx;case 5125:return _x;case 36294:return gx;case 36295:return vx;case 36296:return xx;case 35678:case 36198:case 36298:case 36306:case 35682:return Mx;case 35679:case 36299:case 36307:return Sx;case 35680:case 36300:case 36308:case 36293:return Ex;case 36289:case 36303:case 36311:case 36292:return yx}}class bx{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=rx(e.type)}}class Ax{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Tx(e.type)}}class Rx{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],i)}}}const Ho=/(\w+)(\])?(\[|\.)?/g;function Wc(n,t){n.seq.push(t),n.map[t.id]=t}function wx(n,t,e){const i=n.name,r=i.length;for(Ho.lastIndex=0;;){const s=Ho.exec(i),o=Ho.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Wc(e,c===void 0?new bx(a,n,t):new Ax(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new Rx(a),Wc(e,h)),e=h}}}class Ps{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);wx(s,o,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&i.push(o)}return i}}function Xc(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const Cx=37297;let Px=0;function Dx(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const qc=new Vt;function Lx(n){Xt._getMatrix(qc,Xt.workingColorSpace,n);const t=`mat3( ${qc.elements.map(e=>e.toFixed(4))} )`;switch(Xt.getTransfer(n)){case js:return[t,"LinearTransferOETF"];case te:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Yc(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+Dx(n.getShaderSource(t),o)}else return r}function Ux(n,t){const e=Lx(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Ix(n,t){let e;switch(t){case jp:e="Linear";break;case Kp:e="Reinhard";break;case $p:e="Cineon";break;case Zp:e="ACESFilmic";break;case Qp:e="AgX";break;case tm:e="Neutral";break;case Jp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const xs=new H;function Nx(){Xt.getLuminanceCoefficients(xs);const n=xs.x.toFixed(4),t=xs.y.toFixed(4),e=xs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Fx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(br).join(`
`)}function Ox(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Bx(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function br(n){return n!==""}function jc(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Kc(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const zx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ha(n){return n.replace(zx,Vx)}const Hx=new Map;function Vx(n,t){let e=Gt[t];if(e===void 0){const i=Hx.get(t);if(i!==void 0)e=Gt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Ha(e)}const Gx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $c(n){return n.replace(Gx,kx)}function kx(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Zc(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Wx(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===dh?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Rp?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Rn&&(t="SHADOWMAP_TYPE_VSM"),t}function Xx(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case or:case ar:t="ENVMAP_TYPE_CUBE";break;case Ys:t="ENVMAP_TYPE_CUBE_UV";break}return t}function qx(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ar:t="ENVMAP_MODE_REFRACTION";break}return t}function Yx(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ph:t="ENVMAP_BLENDING_MULTIPLY";break;case qp:t="ENVMAP_BLENDING_MIX";break;case Yp:t="ENVMAP_BLENDING_ADD";break}return t}function jx(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function Kx(n,t,e,i){const r=n.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Wx(e),c=Xx(e),u=qx(e),h=Yx(e),d=jx(e),p=Fx(e),v=Ox(s),x=r.createProgram();let m,f,R=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(br).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(br).join(`
`),f.length>0&&(f+=`
`)):(m=[Zc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(br).join(`
`),f=[Zc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ei?"#define TONE_MAPPING":"",e.toneMapping!==ei?Gt.tonemapping_pars_fragment:"",e.toneMapping!==ei?Ix("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,Ux("linearToOutputTexel",e.outputColorSpace),Nx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(br).join(`
`)),o=Ha(o),o=jc(o,e),o=Kc(o,e),a=Ha(a),a=jc(a,e),a=Kc(a,e),o=$c(o),a=$c(a),e.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===uc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===uc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const A=R+m+o,S=R+f+a,B=Xc(r,r.VERTEX_SHADER,A),L=Xc(r,r.FRAGMENT_SHADER,S);r.attachShader(x,B),r.attachShader(x,L),e.index0AttributeName!==void 0?r.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function P(D){if(n.debug.checkShaderErrors){const Q=r.getProgramInfoLog(x).trim(),q=r.getShaderInfoLog(B).trim(),it=r.getShaderInfoLog(L).trim();let st=!0,$=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(st=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,B,L);else{const J=Yc(r,B,"vertex"),z=Yc(r,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+Q+`
`+J+`
`+z)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(q===""||it==="")&&($=!1);$&&(D.diagnostics={runnable:st,programLog:Q,vertexShader:{log:q,prefix:m},fragmentShader:{log:it,prefix:f}})}r.deleteShader(B),r.deleteShader(L),F=new Ps(r,x),T=Bx(r,x)}let F;this.getUniforms=function(){return F===void 0&&P(this),F};let T;this.getAttributes=function(){return T===void 0&&P(this),T};let E=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(x,Cx)),E},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Px++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=B,this.fragmentShader=L,this}let $x=0;class Zx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Jx(t),e.set(t,i)),i}}class Jx{constructor(t){this.id=$x++,this.code=t,this.usedTimes=0}}function Qx(n,t,e,i,r,s,o){const a=new Dh,l=new Zx,c=new Set,u=[],h=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(T){return c.add(T),T===0?"uv":`uv${T}`}function m(T,E,D,Q,q){const it=Q.fog,st=q.geometry,$=T.isMeshStandardMaterial?Q.environment:null,J=(T.isMeshStandardMaterial?e:t).get(T.envMap||$),z=J&&J.mapping===Ys?J.image.height:null,ft=v[T.type];T.precision!==null&&(p=r.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const Mt=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,yt=Mt!==void 0?Mt.length:0;let Dt=0;st.morphAttributes.position!==void 0&&(Dt=1),st.morphAttributes.normal!==void 0&&(Dt=2),st.morphAttributes.color!==void 0&&(Dt=3);let Yt,tt,lt,Et;if(ft){const Qt=cn[ft];Yt=Qt.vertexShader,tt=Qt.fragmentShader}else Yt=T.vertexShader,tt=T.fragmentShader,l.update(T),lt=l.getVertexShaderID(T),Et=l.getFragmentShaderID(T);const pt=n.getRenderTarget(),Ct=n.state.buffers.depth.getReversed(),Ut=q.isInstancedMesh===!0,Ft=q.isBatchedMesh===!0,ce=!!T.map,b=!!T.matcap,C=!!J,y=!!T.aoMap,et=!!T.lightMap,X=!!T.bumpMap,Y=!!T.normalMap,Z=!!T.displacementMap,rt=!!T.emissiveMap,j=!!T.metalnessMap,g=!!T.roughnessMap,_=T.anisotropy>0,w=T.clearcoat>0,O=T.dispersion>0,V=T.iridescence>0,G=T.sheen>0,ht=T.transmission>0,ot=_&&!!T.anisotropyMap,ct=w&&!!T.clearcoatMap,Pt=w&&!!T.clearcoatNormalMap,at=w&&!!T.clearcoatRoughnessMap,_t=V&&!!T.iridescenceMap,wt=V&&!!T.iridescenceThicknessMap,Lt=G&&!!T.sheenColorMap,dt=G&&!!T.sheenRoughnessMap,It=!!T.specularMap,Ot=!!T.specularColorMap,Jt=!!T.specularIntensityMap,U=ht&&!!T.transmissionMap,gt=ht&&!!T.thicknessMap,K=!!T.gradientMap,nt=!!T.alphaMap,St=T.alphaTest>0,vt=!!T.alphaHash,zt=!!T.extensions;let ue=ei;T.toneMapped&&(pt===null||pt.isXRRenderTarget===!0)&&(ue=n.toneMapping);const Me={shaderID:ft,shaderType:T.type,shaderName:T.name,vertexShader:Yt,fragmentShader:tt,defines:T.defines,customVertexShaderID:lt,customFragmentShaderID:Et,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:Ft,batchingColor:Ft&&q._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&q.instanceColor!==null,instancingMorph:Ut&&q.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:pt===null?n.outputColorSpace:pt.isXRRenderTarget===!0?pt.texture.colorSpace:hr,alphaToCoverage:!!T.alphaToCoverage,map:ce,matcap:b,envMap:C,envMapMode:C&&J.mapping,envMapCubeUVHeight:z,aoMap:y,lightMap:et,bumpMap:X,normalMap:Y,displacementMap:d&&Z,emissiveMap:rt,normalMapObjectSpace:Y&&T.normalMapType===sm,normalMapTangentSpace:Y&&T.normalMapType===rm,metalnessMap:j,roughnessMap:g,anisotropy:_,anisotropyMap:ot,clearcoat:w,clearcoatMap:ct,clearcoatNormalMap:Pt,clearcoatRoughnessMap:at,dispersion:O,iridescence:V,iridescenceMap:_t,iridescenceThicknessMap:wt,sheen:G,sheenColorMap:Lt,sheenRoughnessMap:dt,specularMap:It,specularColorMap:Ot,specularIntensityMap:Jt,transmission:ht,transmissionMap:U,thicknessMap:gt,gradientMap:K,opaque:T.transparent===!1&&T.blending===tr&&T.alphaToCoverage===!1,alphaMap:nt,alphaTest:St,alphaHash:vt,combine:T.combine,mapUv:ce&&x(T.map.channel),aoMapUv:y&&x(T.aoMap.channel),lightMapUv:et&&x(T.lightMap.channel),bumpMapUv:X&&x(T.bumpMap.channel),normalMapUv:Y&&x(T.normalMap.channel),displacementMapUv:Z&&x(T.displacementMap.channel),emissiveMapUv:rt&&x(T.emissiveMap.channel),metalnessMapUv:j&&x(T.metalnessMap.channel),roughnessMapUv:g&&x(T.roughnessMap.channel),anisotropyMapUv:ot&&x(T.anisotropyMap.channel),clearcoatMapUv:ct&&x(T.clearcoatMap.channel),clearcoatNormalMapUv:Pt&&x(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:at&&x(T.clearcoatRoughnessMap.channel),iridescenceMapUv:_t&&x(T.iridescenceMap.channel),iridescenceThicknessMapUv:wt&&x(T.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&x(T.sheenColorMap.channel),sheenRoughnessMapUv:dt&&x(T.sheenRoughnessMap.channel),specularMapUv:It&&x(T.specularMap.channel),specularColorMapUv:Ot&&x(T.specularColorMap.channel),specularIntensityMapUv:Jt&&x(T.specularIntensityMap.channel),transmissionMapUv:U&&x(T.transmissionMap.channel),thicknessMapUv:gt&&x(T.thicknessMap.channel),alphaMapUv:nt&&x(T.alphaMap.channel),vertexTangents:!!st.attributes.tangent&&(Y||_),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!st.attributes.uv&&(ce||nt),fog:!!it,useFog:T.fog===!0,fogExp2:!!it&&it.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Ct,skinning:q.isSkinnedMesh===!0,morphTargets:st.morphAttributes.position!==void 0,morphNormals:st.morphAttributes.normal!==void 0,morphColors:st.morphAttributes.color!==void 0,morphTargetsCount:yt,morphTextureStride:Dt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:ue,decodeVideoTexture:ce&&T.map.isVideoTexture===!0&&Xt.getTransfer(T.map.colorSpace)===te,decodeVideoTextureEmissive:rt&&T.emissiveMap.isVideoTexture===!0&&Xt.getTransfer(T.emissiveMap.colorSpace)===te,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Ln,flipSided:T.side===De,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:zt&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(zt&&T.extensions.multiDraw===!0||Ft)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Me.vertexUv1s=c.has(1),Me.vertexUv2s=c.has(2),Me.vertexUv3s=c.has(3),c.clear(),Me}function f(T){const E=[];if(T.shaderID?E.push(T.shaderID):(E.push(T.customVertexShaderID),E.push(T.customFragmentShaderID)),T.defines!==void 0)for(const D in T.defines)E.push(D),E.push(T.defines[D]);return T.isRawShaderMaterial===!1&&(R(E,T),A(E,T),E.push(n.outputColorSpace)),E.push(T.customProgramCacheKey),E.join()}function R(T,E){T.push(E.precision),T.push(E.outputColorSpace),T.push(E.envMapMode),T.push(E.envMapCubeUVHeight),T.push(E.mapUv),T.push(E.alphaMapUv),T.push(E.lightMapUv),T.push(E.aoMapUv),T.push(E.bumpMapUv),T.push(E.normalMapUv),T.push(E.displacementMapUv),T.push(E.emissiveMapUv),T.push(E.metalnessMapUv),T.push(E.roughnessMapUv),T.push(E.anisotropyMapUv),T.push(E.clearcoatMapUv),T.push(E.clearcoatNormalMapUv),T.push(E.clearcoatRoughnessMapUv),T.push(E.iridescenceMapUv),T.push(E.iridescenceThicknessMapUv),T.push(E.sheenColorMapUv),T.push(E.sheenRoughnessMapUv),T.push(E.specularMapUv),T.push(E.specularColorMapUv),T.push(E.specularIntensityMapUv),T.push(E.transmissionMapUv),T.push(E.thicknessMapUv),T.push(E.combine),T.push(E.fogExp2),T.push(E.sizeAttenuation),T.push(E.morphTargetsCount),T.push(E.morphAttributeCount),T.push(E.numDirLights),T.push(E.numPointLights),T.push(E.numSpotLights),T.push(E.numSpotLightMaps),T.push(E.numHemiLights),T.push(E.numRectAreaLights),T.push(E.numDirLightShadows),T.push(E.numPointLightShadows),T.push(E.numSpotLightShadows),T.push(E.numSpotLightShadowsWithMaps),T.push(E.numLightProbes),T.push(E.shadowMapType),T.push(E.toneMapping),T.push(E.numClippingPlanes),T.push(E.numClipIntersection),T.push(E.depthPacking)}function A(T,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),T.push(a.mask)}function S(T){const E=v[T.type];let D;if(E){const Q=cn[E];D=Nm.clone(Q.uniforms)}else D=T.uniforms;return D}function B(T,E){let D;for(let Q=0,q=u.length;Q<q;Q++){const it=u[Q];if(it.cacheKey===E){D=it,++D.usedTimes;break}}return D===void 0&&(D=new Kx(n,E,T,s),u.push(D)),D}function L(T){if(--T.usedTimes===0){const E=u.indexOf(T);u[E]=u[u.length-1],u.pop(),T.destroy()}}function P(T){l.remove(T)}function F(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:S,acquireProgram:B,releaseProgram:L,releaseShaderCache:P,programs:u,dispose:F}}function t0(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function e0(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Jc(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Qc(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function o(h,d,p,v,x,m){let f=n[t];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:v,renderOrder:h.renderOrder,z:x,group:m},n[t]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=v,f.renderOrder=h.renderOrder,f.z=x,f.group=m),t++,f}function a(h,d,p,v,x,m){const f=o(h,d,p,v,x,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):e.push(f)}function l(h,d,p,v,x,m){const f=o(h,d,p,v,x,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):e.unshift(f)}function c(h,d){e.length>1&&e.sort(h||e0),i.length>1&&i.sort(d||Jc),r.length>1&&r.sort(d||Jc)}function u(){for(let h=t,d=n.length;h<d;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function n0(){let n=new WeakMap;function t(i,r){const s=n.get(i);let o;return s===void 0?(o=new Qc,n.set(i,[o])):r>=s.length?(o=new Qc,s.push(o)):o=s[r],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function i0(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new H,color:new ne};break;case"SpotLight":e={position:new H,direction:new H,color:new ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new H,color:new ne,distance:0,decay:0};break;case"HemisphereLight":e={direction:new H,skyColor:new ne,groundColor:new ne};break;case"RectAreaLight":e={color:new ne,position:new H,halfWidth:new H,halfHeight:new H};break}return n[t.id]=e,e}}}function r0(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let s0=0;function o0(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function a0(n){const t=new i0,e=r0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new H);const r=new H,s=new pe,o=new pe;function a(c){let u=0,h=0,d=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,v=0,x=0,m=0,f=0,R=0,A=0,S=0,B=0,L=0,P=0;c.sort(o0);for(let T=0,E=c.length;T<E;T++){const D=c[T],Q=D.color,q=D.intensity,it=D.distance,st=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=Q.r*q,h+=Q.g*q,d+=Q.b*q;else if(D.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(D.sh.coefficients[$],q);P++}else if(D.isDirectionalLight){const $=t.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const J=D.shadow,z=e.get(D);z.shadowIntensity=J.intensity,z.shadowBias=J.bias,z.shadowNormalBias=J.normalBias,z.shadowRadius=J.radius,z.shadowMapSize=J.mapSize,i.directionalShadow[p]=z,i.directionalShadowMap[p]=st,i.directionalShadowMatrix[p]=D.shadow.matrix,R++}i.directional[p]=$,p++}else if(D.isSpotLight){const $=t.get(D);$.position.setFromMatrixPosition(D.matrixWorld),$.color.copy(Q).multiplyScalar(q),$.distance=it,$.coneCos=Math.cos(D.angle),$.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),$.decay=D.decay,i.spot[x]=$;const J=D.shadow;if(D.map&&(i.spotLightMap[B]=D.map,B++,J.updateMatrices(D),D.castShadow&&L++),i.spotLightMatrix[x]=J.matrix,D.castShadow){const z=e.get(D);z.shadowIntensity=J.intensity,z.shadowBias=J.bias,z.shadowNormalBias=J.normalBias,z.shadowRadius=J.radius,z.shadowMapSize=J.mapSize,i.spotShadow[x]=z,i.spotShadowMap[x]=st,S++}x++}else if(D.isRectAreaLight){const $=t.get(D);$.color.copy(Q).multiplyScalar(q),$.halfWidth.set(D.width*.5,0,0),$.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=$,m++}else if(D.isPointLight){const $=t.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity),$.distance=D.distance,$.decay=D.decay,D.castShadow){const J=D.shadow,z=e.get(D);z.shadowIntensity=J.intensity,z.shadowBias=J.bias,z.shadowNormalBias=J.normalBias,z.shadowRadius=J.radius,z.shadowMapSize=J.mapSize,z.shadowCameraNear=J.camera.near,z.shadowCameraFar=J.camera.far,i.pointShadow[v]=z,i.pointShadowMap[v]=st,i.pointShadowMatrix[v]=D.shadow.matrix,A++}i.point[v]=$,v++}else if(D.isHemisphereLight){const $=t.get(D);$.skyColor.copy(D.color).multiplyScalar(q),$.groundColor.copy(D.groundColor).multiplyScalar(q),i.hemi[f]=$,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=mt.LTC_FLOAT_1,i.rectAreaLTC2=mt.LTC_FLOAT_2):(i.rectAreaLTC1=mt.LTC_HALF_1,i.rectAreaLTC2=mt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const F=i.hash;(F.directionalLength!==p||F.pointLength!==v||F.spotLength!==x||F.rectAreaLength!==m||F.hemiLength!==f||F.numDirectionalShadows!==R||F.numPointShadows!==A||F.numSpotShadows!==S||F.numSpotMaps!==B||F.numLightProbes!==P)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=v,i.hemi.length=f,i.directionalShadow.length=R,i.directionalShadowMap.length=R,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=R,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=S+B-L,i.spotLightMap.length=B,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=P,F.directionalLength=p,F.pointLength=v,F.spotLength=x,F.rectAreaLength=m,F.hemiLength=f,F.numDirectionalShadows=R,F.numPointShadows=A,F.numSpotShadows=S,F.numSpotMaps=B,F.numLightProbes=P,i.version=s0++)}function l(c,u){let h=0,d=0,p=0,v=0,x=0;const m=u.matrixWorldInverse;for(let f=0,R=c.length;f<R;f++){const A=c[f];if(A.isDirectionalLight){const S=i.directional[h];S.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),h++}else if(A.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(A.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(A.isRectAreaLight){const S=i.rectArea[v];S.position.setFromMatrixPosition(A.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(A.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(A.width*.5,0,0),S.halfHeight.set(0,A.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),v++}else if(A.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(A.matrixWorld),S.position.applyMatrix4(m),d++}else if(A.isHemisphereLight){const S=i.hemi[x];S.direction.setFromMatrixPosition(A.matrixWorld),S.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function tu(n){const t=new a0(n),e=[],i=[];function r(u){c.camera=u,e.length=0,i.length=0}function s(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function l0(n){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new tu(n),t.set(r,[a])):s>=o.length?(a=new tu(n),o.push(a)):a=o[s],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class c0 extends Ks{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=nm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class u0 extends Ks{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const h0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,f0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function d0(n,t,e){let i=new Bh;const r=new Wt,s=new Wt,o=new he,a=new c0({depthPacking:im}),l=new u0,c={},u=e.maxTextureSize,h={[ii]:De,[De]:ii,[Ln]:Ln},d=new ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Wt},radius:{value:4}},vertexShader:h0,fragmentShader:f0}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const v=new si;v.setAttribute("position",new mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new dn(v,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dh;let f=this.type;this.render=function(L,P,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||L.length===0)return;const T=n.getRenderTarget(),E=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),Q=n.state;Q.setBlending(ti),Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const q=f!==Rn&&this.type===Rn,it=f===Rn&&this.type!==Rn;for(let st=0,$=L.length;st<$;st++){const J=L[st],z=J.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const ft=z.getFrameExtents();if(r.multiply(ft),s.copy(z.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ft.x),r.x=s.x*ft.x,z.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ft.y),r.y=s.y*ft.y,z.mapSize.y=s.y)),z.map===null||q===!0||it===!0){const yt=this.type!==Rn?{minFilter:nn,magFilter:nn}:{};z.map!==null&&z.map.dispose(),z.map=new Ti(r.x,r.y,yt),z.map.texture.name=J.name+".shadowMap",z.camera.updateProjectionMatrix()}n.setRenderTarget(z.map),n.clear();const Mt=z.getViewportCount();for(let yt=0;yt<Mt;yt++){const Dt=z.getViewport(yt);o.set(s.x*Dt.x,s.y*Dt.y,s.x*Dt.z,s.y*Dt.w),Q.viewport(o),z.updateMatrices(J,yt),i=z.getFrustum(),S(P,F,z.camera,J,this.type)}z.isPointLightShadow!==!0&&this.type===Rn&&R(z,F),z.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(T,E,D)};function R(L,P){const F=t.update(x);d.defines.VSM_SAMPLES!==L.blurSamples&&(d.defines.VSM_SAMPLES=L.blurSamples,p.defines.VSM_SAMPLES=L.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Ti(r.x,r.y)),d.uniforms.shadow_pass.value=L.map.texture,d.uniforms.resolution.value=L.mapSize,d.uniforms.radius.value=L.radius,n.setRenderTarget(L.mapPass),n.clear(),n.renderBufferDirect(P,null,F,d,x,null),p.uniforms.shadow_pass.value=L.mapPass.texture,p.uniforms.resolution.value=L.mapSize,p.uniforms.radius.value=L.radius,n.setRenderTarget(L.map),n.clear(),n.renderBufferDirect(P,null,F,p,x,null)}function A(L,P,F,T){let E=null;const D=F.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(D!==void 0)E=D;else if(E=F.isPointLight===!0?l:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const Q=E.uuid,q=P.uuid;let it=c[Q];it===void 0&&(it={},c[Q]=it);let st=it[q];st===void 0&&(st=E.clone(),it[q]=st,P.addEventListener("dispose",B)),E=st}if(E.visible=P.visible,E.wireframe=P.wireframe,T===Rn?E.side=P.shadowSide!==null?P.shadowSide:P.side:E.side=P.shadowSide!==null?P.shadowSide:h[P.side],E.alphaMap=P.alphaMap,E.alphaTest=P.alphaTest,E.map=P.map,E.clipShadows=P.clipShadows,E.clippingPlanes=P.clippingPlanes,E.clipIntersection=P.clipIntersection,E.displacementMap=P.displacementMap,E.displacementScale=P.displacementScale,E.displacementBias=P.displacementBias,E.wireframeLinewidth=P.wireframeLinewidth,E.linewidth=P.linewidth,F.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const Q=n.properties.get(E);Q.light=F}return E}function S(L,P,F,T,E){if(L.visible===!1)return;if(L.layers.test(P.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&E===Rn)&&(!L.frustumCulled||i.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,L.matrixWorld);const q=t.update(L),it=L.material;if(Array.isArray(it)){const st=q.groups;for(let $=0,J=st.length;$<J;$++){const z=st[$],ft=it[z.materialIndex];if(ft&&ft.visible){const Mt=A(L,ft,T,E);L.onBeforeShadow(n,L,P,F,q,Mt,z),n.renderBufferDirect(F,null,q,Mt,L,z),L.onAfterShadow(n,L,P,F,q,Mt,z)}}}else if(it.visible){const st=A(L,it,T,E);L.onBeforeShadow(n,L,P,F,q,st,null),n.renderBufferDirect(F,null,q,st,L,null),L.onAfterShadow(n,L,P,F,q,st,null)}}const Q=L.children;for(let q=0,it=Q.length;q<it;q++)S(Q[q],P,F,T,E)}function B(L){L.target.removeEventListener("dispose",B);for(const F in c){const T=c[F],E=L.target.uuid;E in T&&(T[E].dispose(),delete T[E])}}}const p0={[na]:ia,[ra]:aa,[sa]:la,[sr]:oa,[ia]:na,[aa]:ra,[la]:sa,[oa]:sr};function m0(n,t){function e(){let U=!1;const gt=new he;let K=null;const nt=new he(0,0,0,0);return{setMask:function(St){K!==St&&!U&&(n.colorMask(St,St,St,St),K=St)},setLocked:function(St){U=St},setClear:function(St,vt,zt,ue,Me){Me===!0&&(St*=ue,vt*=ue,zt*=ue),gt.set(St,vt,zt,ue),nt.equals(gt)===!1&&(n.clearColor(St,vt,zt,ue),nt.copy(gt))},reset:function(){U=!1,K=null,nt.set(-1,0,0,0)}}}function i(){let U=!1,gt=!1,K=null,nt=null,St=null;return{setReversed:function(vt){if(gt!==vt){const zt=t.get("EXT_clip_control");gt?zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.ZERO_TO_ONE_EXT):zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.NEGATIVE_ONE_TO_ONE_EXT);const ue=St;St=null,this.setClear(ue)}gt=vt},getReversed:function(){return gt},setTest:function(vt){vt?pt(n.DEPTH_TEST):Ct(n.DEPTH_TEST)},setMask:function(vt){K!==vt&&!U&&(n.depthMask(vt),K=vt)},setFunc:function(vt){if(gt&&(vt=p0[vt]),nt!==vt){switch(vt){case na:n.depthFunc(n.NEVER);break;case ia:n.depthFunc(n.ALWAYS);break;case ra:n.depthFunc(n.LESS);break;case sr:n.depthFunc(n.LEQUAL);break;case sa:n.depthFunc(n.EQUAL);break;case oa:n.depthFunc(n.GEQUAL);break;case aa:n.depthFunc(n.GREATER);break;case la:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}nt=vt}},setLocked:function(vt){U=vt},setClear:function(vt){St!==vt&&(gt&&(vt=1-vt),n.clearDepth(vt),St=vt)},reset:function(){U=!1,K=null,nt=null,St=null,gt=!1}}}function r(){let U=!1,gt=null,K=null,nt=null,St=null,vt=null,zt=null,ue=null,Me=null;return{setTest:function(Qt){U||(Qt?pt(n.STENCIL_TEST):Ct(n.STENCIL_TEST))},setMask:function(Qt){gt!==Qt&&!U&&(n.stencilMask(Qt),gt=Qt)},setFunc:function(Qt,qe,xn){(K!==Qt||nt!==qe||St!==xn)&&(n.stencilFunc(Qt,qe,xn),K=Qt,nt=qe,St=xn)},setOp:function(Qt,qe,xn){(vt!==Qt||zt!==qe||ue!==xn)&&(n.stencilOp(Qt,qe,xn),vt=Qt,zt=qe,ue=xn)},setLocked:function(Qt){U=Qt},setClear:function(Qt){Me!==Qt&&(n.clearStencil(Qt),Me=Qt)},reset:function(){U=!1,gt=null,K=null,nt=null,St=null,vt=null,zt=null,ue=null,Me=null}}}const s=new e,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,p=[],v=null,x=!1,m=null,f=null,R=null,A=null,S=null,B=null,L=null,P=new ne(0,0,0),F=0,T=!1,E=null,D=null,Q=null,q=null,it=null;const st=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,J=0;const z=n.getParameter(n.VERSION);z.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(z)[1]),$=J>=1):z.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),$=J>=2);let ft=null,Mt={};const yt=n.getParameter(n.SCISSOR_BOX),Dt=n.getParameter(n.VIEWPORT),Yt=new he().fromArray(yt),tt=new he().fromArray(Dt);function lt(U,gt,K,nt){const St=new Uint8Array(4),vt=n.createTexture();n.bindTexture(U,vt),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let zt=0;zt<K;zt++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(gt,0,n.RGBA,1,1,nt,0,n.RGBA,n.UNSIGNED_BYTE,St):n.texImage2D(gt+zt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,St);return vt}const Et={};Et[n.TEXTURE_2D]=lt(n.TEXTURE_2D,n.TEXTURE_2D,1),Et[n.TEXTURE_CUBE_MAP]=lt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Et[n.TEXTURE_2D_ARRAY]=lt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Et[n.TEXTURE_3D]=lt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),pt(n.DEPTH_TEST),o.setFunc(sr),X(!1),Y(rc),pt(n.CULL_FACE),y(ti);function pt(U){u[U]!==!0&&(n.enable(U),u[U]=!0)}function Ct(U){u[U]!==!1&&(n.disable(U),u[U]=!1)}function Ut(U,gt){return h[U]!==gt?(n.bindFramebuffer(U,gt),h[U]=gt,U===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=gt),U===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=gt),!0):!1}function Ft(U,gt){let K=p,nt=!1;if(U){K=d.get(gt),K===void 0&&(K=[],d.set(gt,K));const St=U.textures;if(K.length!==St.length||K[0]!==n.COLOR_ATTACHMENT0){for(let vt=0,zt=St.length;vt<zt;vt++)K[vt]=n.COLOR_ATTACHMENT0+vt;K.length=St.length,nt=!0}}else K[0]!==n.BACK&&(K[0]=n.BACK,nt=!0);nt&&n.drawBuffers(K)}function ce(U){return v!==U?(n.useProgram(U),v=U,!0):!1}const b={[gi]:n.FUNC_ADD,[Cp]:n.FUNC_SUBTRACT,[Pp]:n.FUNC_REVERSE_SUBTRACT};b[Dp]=n.MIN,b[Lp]=n.MAX;const C={[Up]:n.ZERO,[Ip]:n.ONE,[Np]:n.SRC_COLOR,[ta]:n.SRC_ALPHA,[Vp]:n.SRC_ALPHA_SATURATE,[zp]:n.DST_COLOR,[Op]:n.DST_ALPHA,[Fp]:n.ONE_MINUS_SRC_COLOR,[ea]:n.ONE_MINUS_SRC_ALPHA,[Hp]:n.ONE_MINUS_DST_COLOR,[Bp]:n.ONE_MINUS_DST_ALPHA,[Gp]:n.CONSTANT_COLOR,[kp]:n.ONE_MINUS_CONSTANT_COLOR,[Wp]:n.CONSTANT_ALPHA,[Xp]:n.ONE_MINUS_CONSTANT_ALPHA};function y(U,gt,K,nt,St,vt,zt,ue,Me,Qt){if(U===ti){x===!0&&(Ct(n.BLEND),x=!1);return}if(x===!1&&(pt(n.BLEND),x=!0),U!==wp){if(U!==m||Qt!==T){if((f!==gi||S!==gi)&&(n.blendEquation(n.FUNC_ADD),f=gi,S=gi),Qt)switch(U){case tr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case sc:n.blendFunc(n.ONE,n.ONE);break;case oc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ac:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case tr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case sc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case oc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ac:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}R=null,A=null,B=null,L=null,P.set(0,0,0),F=0,m=U,T=Qt}return}St=St||gt,vt=vt||K,zt=zt||nt,(gt!==f||St!==S)&&(n.blendEquationSeparate(b[gt],b[St]),f=gt,S=St),(K!==R||nt!==A||vt!==B||zt!==L)&&(n.blendFuncSeparate(C[K],C[nt],C[vt],C[zt]),R=K,A=nt,B=vt,L=zt),(ue.equals(P)===!1||Me!==F)&&(n.blendColor(ue.r,ue.g,ue.b,Me),P.copy(ue),F=Me),m=U,T=!1}function et(U,gt){U.side===Ln?Ct(n.CULL_FACE):pt(n.CULL_FACE);let K=U.side===De;gt&&(K=!K),X(K),U.blending===tr&&U.transparent===!1?y(ti):y(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),s.setMask(U.colorWrite);const nt=U.stencilWrite;a.setTest(nt),nt&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),rt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?pt(n.SAMPLE_ALPHA_TO_COVERAGE):Ct(n.SAMPLE_ALPHA_TO_COVERAGE)}function X(U){E!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),E=U)}function Y(U){U!==bp?(pt(n.CULL_FACE),U!==D&&(U===rc?n.cullFace(n.BACK):U===Ap?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ct(n.CULL_FACE),D=U}function Z(U){U!==Q&&($&&n.lineWidth(U),Q=U)}function rt(U,gt,K){U?(pt(n.POLYGON_OFFSET_FILL),(q!==gt||it!==K)&&(n.polygonOffset(gt,K),q=gt,it=K)):Ct(n.POLYGON_OFFSET_FILL)}function j(U){U?pt(n.SCISSOR_TEST):Ct(n.SCISSOR_TEST)}function g(U){U===void 0&&(U=n.TEXTURE0+st-1),ft!==U&&(n.activeTexture(U),ft=U)}function _(U,gt,K){K===void 0&&(ft===null?K=n.TEXTURE0+st-1:K=ft);let nt=Mt[K];nt===void 0&&(nt={type:void 0,texture:void 0},Mt[K]=nt),(nt.type!==U||nt.texture!==gt)&&(ft!==K&&(n.activeTexture(K),ft=K),n.bindTexture(U,gt||Et[U]),nt.type=U,nt.texture=gt)}function w(){const U=Mt[ft];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function O(){try{n.compressedTexImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function V(){try{n.compressedTexImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function G(){try{n.texSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ht(){try{n.texSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ot(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ct(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Pt(){try{n.texStorage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function at(){try{n.texStorage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _t(){try{n.texImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function wt(){try{n.texImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Lt(U){Yt.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),Yt.copy(U))}function dt(U){tt.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),tt.copy(U))}function It(U,gt){let K=c.get(gt);K===void 0&&(K=new WeakMap,c.set(gt,K));let nt=K.get(U);nt===void 0&&(nt=n.getUniformBlockIndex(gt,U.name),K.set(U,nt))}function Ot(U,gt){const nt=c.get(gt).get(U);l.get(gt)!==nt&&(n.uniformBlockBinding(gt,nt,U.__bindingPointIndex),l.set(gt,nt))}function Jt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ft=null,Mt={},h={},d=new WeakMap,p=[],v=null,x=!1,m=null,f=null,R=null,A=null,S=null,B=null,L=null,P=new ne(0,0,0),F=0,T=!1,E=null,D=null,Q=null,q=null,it=null,Yt.set(0,0,n.canvas.width,n.canvas.height),tt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:pt,disable:Ct,bindFramebuffer:Ut,drawBuffers:Ft,useProgram:ce,setBlending:y,setMaterial:et,setFlipSided:X,setCullFace:Y,setLineWidth:Z,setPolygonOffset:rt,setScissorTest:j,activeTexture:g,bindTexture:_,unbindTexture:w,compressedTexImage2D:O,compressedTexImage3D:V,texImage2D:_t,texImage3D:wt,updateUBOMapping:It,uniformBlockBinding:Ot,texStorage2D:Pt,texStorage3D:at,texSubImage2D:G,texSubImage3D:ht,compressedTexSubImage2D:ot,compressedTexSubImage3D:ct,scissor:Lt,viewport:dt,reset:Jt}}function eu(n,t,e,i){const r=_0(i);switch(e){case xh:return n*t;case Sh:return n*t;case Eh:return n*t*2;case yh:return n*t/r.components*r.byteLength;case hl:return n*t/r.components*r.byteLength;case Th:return n*t*2/r.components*r.byteLength;case fl:return n*t*2/r.components*r.byteLength;case Mh:return n*t*3/r.components*r.byteLength;case Je:return n*t*4/r.components*r.byteLength;case dl:return n*t*4/r.components*r.byteLength;case Ts:case bs:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case As:case Rs:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case pa:case _a:return Math.max(n,16)*Math.max(t,8)/4;case da:case ma:return Math.max(n,8)*Math.max(t,8)/2;case ga:case va:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case xa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ma:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Sa:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Ea:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case ya:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Ta:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case ba:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Aa:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Ra:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case wa:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Ca:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Pa:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Da:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case La:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Ua:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case ws:case Ia:case Na:return Math.ceil(n/4)*Math.ceil(t/4)*16;case bh:case Fa:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Oa:case Ba:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function _0(n){switch(n){case zn:case _h:return{byteLength:1,components:1};case zr:case gh:case Wr:return{byteLength:2,components:1};case cl:case ul:return{byteLength:2,components:4};case yi:case ll:case Un:return{byteLength:4,components:1};case vh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function g0(n,t,e,i,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Wt,u=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(g,_){return p?new OffscreenCanvas(g,_):Hr("canvas")}function x(g,_,w){let O=1;const V=j(g);if((V.width>w||V.height>w)&&(O=w/Math.max(V.width,V.height)),O<1)if(typeof HTMLImageElement<"u"&&g instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&g instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&g instanceof ImageBitmap||typeof VideoFrame<"u"&&g instanceof VideoFrame){const G=Math.floor(O*V.width),ht=Math.floor(O*V.height);h===void 0&&(h=v(G,ht));const ot=_?v(G,ht):h;return ot.width=G,ot.height=ht,ot.getContext("2d").drawImage(g,0,0,G,ht),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+V.width+"x"+V.height+") to ("+G+"x"+ht+")."),ot}else return"data"in g&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+V.width+"x"+V.height+")."),g;return g}function m(g){return g.generateMipmaps}function f(g){n.generateMipmap(g)}function R(g){return g.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:g.isWebGL3DRenderTarget?n.TEXTURE_3D:g.isWebGLArrayRenderTarget||g.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function A(g,_,w,O,V=!1){if(g!==null){if(n[g]!==void 0)return n[g];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+g+"'")}let G=_;if(_===n.RED&&(w===n.FLOAT&&(G=n.R32F),w===n.HALF_FLOAT&&(G=n.R16F),w===n.UNSIGNED_BYTE&&(G=n.R8)),_===n.RED_INTEGER&&(w===n.UNSIGNED_BYTE&&(G=n.R8UI),w===n.UNSIGNED_SHORT&&(G=n.R16UI),w===n.UNSIGNED_INT&&(G=n.R32UI),w===n.BYTE&&(G=n.R8I),w===n.SHORT&&(G=n.R16I),w===n.INT&&(G=n.R32I)),_===n.RG&&(w===n.FLOAT&&(G=n.RG32F),w===n.HALF_FLOAT&&(G=n.RG16F),w===n.UNSIGNED_BYTE&&(G=n.RG8)),_===n.RG_INTEGER&&(w===n.UNSIGNED_BYTE&&(G=n.RG8UI),w===n.UNSIGNED_SHORT&&(G=n.RG16UI),w===n.UNSIGNED_INT&&(G=n.RG32UI),w===n.BYTE&&(G=n.RG8I),w===n.SHORT&&(G=n.RG16I),w===n.INT&&(G=n.RG32I)),_===n.RGB_INTEGER&&(w===n.UNSIGNED_BYTE&&(G=n.RGB8UI),w===n.UNSIGNED_SHORT&&(G=n.RGB16UI),w===n.UNSIGNED_INT&&(G=n.RGB32UI),w===n.BYTE&&(G=n.RGB8I),w===n.SHORT&&(G=n.RGB16I),w===n.INT&&(G=n.RGB32I)),_===n.RGBA_INTEGER&&(w===n.UNSIGNED_BYTE&&(G=n.RGBA8UI),w===n.UNSIGNED_SHORT&&(G=n.RGBA16UI),w===n.UNSIGNED_INT&&(G=n.RGBA32UI),w===n.BYTE&&(G=n.RGBA8I),w===n.SHORT&&(G=n.RGBA16I),w===n.INT&&(G=n.RGBA32I)),_===n.RGB&&w===n.UNSIGNED_INT_5_9_9_9_REV&&(G=n.RGB9_E5),_===n.RGBA){const ht=V?js:Xt.getTransfer(O);w===n.FLOAT&&(G=n.RGBA32F),w===n.HALF_FLOAT&&(G=n.RGBA16F),w===n.UNSIGNED_BYTE&&(G=ht===te?n.SRGB8_ALPHA8:n.RGBA8),w===n.UNSIGNED_SHORT_4_4_4_4&&(G=n.RGBA4),w===n.UNSIGNED_SHORT_5_5_5_1&&(G=n.RGB5_A1)}return(G===n.R16F||G===n.R32F||G===n.RG16F||G===n.RG32F||G===n.RGBA16F||G===n.RGBA32F)&&t.get("EXT_color_buffer_float"),G}function S(g,_){let w;return g?_===null||_===yi||_===lr?w=n.DEPTH24_STENCIL8:_===Un?w=n.DEPTH32F_STENCIL8:_===zr&&(w=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===yi||_===lr?w=n.DEPTH_COMPONENT24:_===Un?w=n.DEPTH_COMPONENT32F:_===zr&&(w=n.DEPTH_COMPONENT16),w}function B(g,_){return m(g)===!0||g.isFramebufferTexture&&g.minFilter!==nn&&g.minFilter!==fn?Math.log2(Math.max(_.width,_.height))+1:g.mipmaps!==void 0&&g.mipmaps.length>0?g.mipmaps.length:g.isCompressedTexture&&Array.isArray(g.image)?_.mipmaps.length:1}function L(g){const _=g.target;_.removeEventListener("dispose",L),F(_),_.isVideoTexture&&u.delete(_)}function P(g){const _=g.target;_.removeEventListener("dispose",P),E(_)}function F(g){const _=i.get(g);if(_.__webglInit===void 0)return;const w=g.source,O=d.get(w);if(O){const V=O[_.__cacheKey];V.usedTimes--,V.usedTimes===0&&T(g),Object.keys(O).length===0&&d.delete(w)}i.remove(g)}function T(g){const _=i.get(g);n.deleteTexture(_.__webglTexture);const w=g.source,O=d.get(w);delete O[_.__cacheKey],o.memory.textures--}function E(g){const _=i.get(g);if(g.depthTexture&&(g.depthTexture.dispose(),i.remove(g.depthTexture)),g.isWebGLCubeRenderTarget)for(let O=0;O<6;O++){if(Array.isArray(_.__webglFramebuffer[O]))for(let V=0;V<_.__webglFramebuffer[O].length;V++)n.deleteFramebuffer(_.__webglFramebuffer[O][V]);else n.deleteFramebuffer(_.__webglFramebuffer[O]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[O])}else{if(Array.isArray(_.__webglFramebuffer))for(let O=0;O<_.__webglFramebuffer.length;O++)n.deleteFramebuffer(_.__webglFramebuffer[O]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let O=0;O<_.__webglColorRenderbuffer.length;O++)_.__webglColorRenderbuffer[O]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[O]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const w=g.textures;for(let O=0,V=w.length;O<V;O++){const G=i.get(w[O]);G.__webglTexture&&(n.deleteTexture(G.__webglTexture),o.memory.textures--),i.remove(w[O])}i.remove(g)}let D=0;function Q(){D=0}function q(){const g=D;return g>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+g+" texture units while this GPU supports only "+r.maxTextures),D+=1,g}function it(g){const _=[];return _.push(g.wrapS),_.push(g.wrapT),_.push(g.wrapR||0),_.push(g.magFilter),_.push(g.minFilter),_.push(g.anisotropy),_.push(g.internalFormat),_.push(g.format),_.push(g.type),_.push(g.generateMipmaps),_.push(g.premultiplyAlpha),_.push(g.flipY),_.push(g.unpackAlignment),_.push(g.colorSpace),_.join()}function st(g,_){const w=i.get(g);if(g.isVideoTexture&&Z(g),g.isRenderTargetTexture===!1&&g.version>0&&w.__version!==g.version){const O=g.image;if(O===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(O.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{tt(w,g,_);return}}e.bindTexture(n.TEXTURE_2D,w.__webglTexture,n.TEXTURE0+_)}function $(g,_){const w=i.get(g);if(g.version>0&&w.__version!==g.version){tt(w,g,_);return}e.bindTexture(n.TEXTURE_2D_ARRAY,w.__webglTexture,n.TEXTURE0+_)}function J(g,_){const w=i.get(g);if(g.version>0&&w.__version!==g.version){tt(w,g,_);return}e.bindTexture(n.TEXTURE_3D,w.__webglTexture,n.TEXTURE0+_)}function z(g,_){const w=i.get(g);if(g.version>0&&w.__version!==g.version){lt(w,g,_);return}e.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+_)}const ft={[ha]:n.REPEAT,[xi]:n.CLAMP_TO_EDGE,[fa]:n.MIRRORED_REPEAT},Mt={[nn]:n.NEAREST,[em]:n.NEAREST_MIPMAP_NEAREST,[Qr]:n.NEAREST_MIPMAP_LINEAR,[fn]:n.LINEAR,[fo]:n.LINEAR_MIPMAP_NEAREST,[Mi]:n.LINEAR_MIPMAP_LINEAR},yt={[om]:n.NEVER,[fm]:n.ALWAYS,[am]:n.LESS,[Ah]:n.LEQUAL,[lm]:n.EQUAL,[hm]:n.GEQUAL,[cm]:n.GREATER,[um]:n.NOTEQUAL};function Dt(g,_){if(_.type===Un&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===fn||_.magFilter===fo||_.magFilter===Qr||_.magFilter===Mi||_.minFilter===fn||_.minFilter===fo||_.minFilter===Qr||_.minFilter===Mi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(g,n.TEXTURE_WRAP_S,ft[_.wrapS]),n.texParameteri(g,n.TEXTURE_WRAP_T,ft[_.wrapT]),(g===n.TEXTURE_3D||g===n.TEXTURE_2D_ARRAY)&&n.texParameteri(g,n.TEXTURE_WRAP_R,ft[_.wrapR]),n.texParameteri(g,n.TEXTURE_MAG_FILTER,Mt[_.magFilter]),n.texParameteri(g,n.TEXTURE_MIN_FILTER,Mt[_.minFilter]),_.compareFunction&&(n.texParameteri(g,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(g,n.TEXTURE_COMPARE_FUNC,yt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===nn||_.minFilter!==Qr&&_.minFilter!==Mi||_.type===Un&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const w=t.get("EXT_texture_filter_anisotropic");n.texParameterf(g,w.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Yt(g,_){let w=!1;g.__webglInit===void 0&&(g.__webglInit=!0,_.addEventListener("dispose",L));const O=_.source;let V=d.get(O);V===void 0&&(V={},d.set(O,V));const G=it(_);if(G!==g.__cacheKey){V[G]===void 0&&(V[G]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,w=!0),V[G].usedTimes++;const ht=V[g.__cacheKey];ht!==void 0&&(V[g.__cacheKey].usedTimes--,ht.usedTimes===0&&T(_)),g.__cacheKey=G,g.__webglTexture=V[G].texture}return w}function tt(g,_,w){let O=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(O=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(O=n.TEXTURE_3D);const V=Yt(g,_),G=_.source;e.bindTexture(O,g.__webglTexture,n.TEXTURE0+w);const ht=i.get(G);if(G.version!==ht.__version||V===!0){e.activeTexture(n.TEXTURE0+w);const ot=Xt.getPrimaries(Xt.workingColorSpace),ct=_.colorSpace===Qn?null:Xt.getPrimaries(_.colorSpace),Pt=_.colorSpace===Qn||ot===ct?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);let at=x(_.image,!1,r.maxTextureSize);at=rt(_,at);const _t=s.convert(_.format,_.colorSpace),wt=s.convert(_.type);let Lt=A(_.internalFormat,_t,wt,_.colorSpace,_.isVideoTexture);Dt(O,_);let dt;const It=_.mipmaps,Ot=_.isVideoTexture!==!0,Jt=ht.__version===void 0||V===!0,U=G.dataReady,gt=B(_,at);if(_.isDepthTexture)Lt=S(_.format===cr,_.type),Jt&&(Ot?e.texStorage2D(n.TEXTURE_2D,1,Lt,at.width,at.height):e.texImage2D(n.TEXTURE_2D,0,Lt,at.width,at.height,0,_t,wt,null));else if(_.isDataTexture)if(It.length>0){Ot&&Jt&&e.texStorage2D(n.TEXTURE_2D,gt,Lt,It[0].width,It[0].height);for(let K=0,nt=It.length;K<nt;K++)dt=It[K],Ot?U&&e.texSubImage2D(n.TEXTURE_2D,K,0,0,dt.width,dt.height,_t,wt,dt.data):e.texImage2D(n.TEXTURE_2D,K,Lt,dt.width,dt.height,0,_t,wt,dt.data);_.generateMipmaps=!1}else Ot?(Jt&&e.texStorage2D(n.TEXTURE_2D,gt,Lt,at.width,at.height),U&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,at.width,at.height,_t,wt,at.data)):e.texImage2D(n.TEXTURE_2D,0,Lt,at.width,at.height,0,_t,wt,at.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ot&&Jt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,gt,Lt,It[0].width,It[0].height,at.depth);for(let K=0,nt=It.length;K<nt;K++)if(dt=It[K],_.format!==Je)if(_t!==null)if(Ot){if(U)if(_.layerUpdates.size>0){const St=eu(dt.width,dt.height,_.format,_.type);for(const vt of _.layerUpdates){const zt=dt.data.subarray(vt*St/dt.data.BYTES_PER_ELEMENT,(vt+1)*St/dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,vt,dt.width,dt.height,1,_t,zt)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,dt.width,dt.height,at.depth,_t,dt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,K,Lt,dt.width,dt.height,at.depth,0,dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ot?U&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,dt.width,dt.height,at.depth,_t,wt,dt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,K,Lt,dt.width,dt.height,at.depth,0,_t,wt,dt.data)}else{Ot&&Jt&&e.texStorage2D(n.TEXTURE_2D,gt,Lt,It[0].width,It[0].height);for(let K=0,nt=It.length;K<nt;K++)dt=It[K],_.format!==Je?_t!==null?Ot?U&&e.compressedTexSubImage2D(n.TEXTURE_2D,K,0,0,dt.width,dt.height,_t,dt.data):e.compressedTexImage2D(n.TEXTURE_2D,K,Lt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ot?U&&e.texSubImage2D(n.TEXTURE_2D,K,0,0,dt.width,dt.height,_t,wt,dt.data):e.texImage2D(n.TEXTURE_2D,K,Lt,dt.width,dt.height,0,_t,wt,dt.data)}else if(_.isDataArrayTexture)if(Ot){if(Jt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,gt,Lt,at.width,at.height,at.depth),U)if(_.layerUpdates.size>0){const K=eu(at.width,at.height,_.format,_.type);for(const nt of _.layerUpdates){const St=at.data.subarray(nt*K/at.data.BYTES_PER_ELEMENT,(nt+1)*K/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,nt,at.width,at.height,1,_t,wt,St)}_.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,_t,wt,at.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Lt,at.width,at.height,at.depth,0,_t,wt,at.data);else if(_.isData3DTexture)Ot?(Jt&&e.texStorage3D(n.TEXTURE_3D,gt,Lt,at.width,at.height,at.depth),U&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,_t,wt,at.data)):e.texImage3D(n.TEXTURE_3D,0,Lt,at.width,at.height,at.depth,0,_t,wt,at.data);else if(_.isFramebufferTexture){if(Jt)if(Ot)e.texStorage2D(n.TEXTURE_2D,gt,Lt,at.width,at.height);else{let K=at.width,nt=at.height;for(let St=0;St<gt;St++)e.texImage2D(n.TEXTURE_2D,St,Lt,K,nt,0,_t,wt,null),K>>=1,nt>>=1}}else if(It.length>0){if(Ot&&Jt){const K=j(It[0]);e.texStorage2D(n.TEXTURE_2D,gt,Lt,K.width,K.height)}for(let K=0,nt=It.length;K<nt;K++)dt=It[K],Ot?U&&e.texSubImage2D(n.TEXTURE_2D,K,0,0,_t,wt,dt):e.texImage2D(n.TEXTURE_2D,K,Lt,_t,wt,dt);_.generateMipmaps=!1}else if(Ot){if(Jt){const K=j(at);e.texStorage2D(n.TEXTURE_2D,gt,Lt,K.width,K.height)}U&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,_t,wt,at)}else e.texImage2D(n.TEXTURE_2D,0,Lt,_t,wt,at);m(_)&&f(O),ht.__version=G.version,_.onUpdate&&_.onUpdate(_)}g.__version=_.version}function lt(g,_,w){if(_.image.length!==6)return;const O=Yt(g,_),V=_.source;e.bindTexture(n.TEXTURE_CUBE_MAP,g.__webglTexture,n.TEXTURE0+w);const G=i.get(V);if(V.version!==G.__version||O===!0){e.activeTexture(n.TEXTURE0+w);const ht=Xt.getPrimaries(Xt.workingColorSpace),ot=_.colorSpace===Qn?null:Xt.getPrimaries(_.colorSpace),ct=_.colorSpace===Qn||ht===ot?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);const Pt=_.isCompressedTexture||_.image[0].isCompressedTexture,at=_.image[0]&&_.image[0].isDataTexture,_t=[];for(let nt=0;nt<6;nt++)!Pt&&!at?_t[nt]=x(_.image[nt],!0,r.maxCubemapSize):_t[nt]=at?_.image[nt].image:_.image[nt],_t[nt]=rt(_,_t[nt]);const wt=_t[0],Lt=s.convert(_.format,_.colorSpace),dt=s.convert(_.type),It=A(_.internalFormat,Lt,dt,_.colorSpace),Ot=_.isVideoTexture!==!0,Jt=G.__version===void 0||O===!0,U=V.dataReady;let gt=B(_,wt);Dt(n.TEXTURE_CUBE_MAP,_);let K;if(Pt){Ot&&Jt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,gt,It,wt.width,wt.height);for(let nt=0;nt<6;nt++){K=_t[nt].mipmaps;for(let St=0;St<K.length;St++){const vt=K[St];_.format!==Je?Lt!==null?Ot?U&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,St,0,0,vt.width,vt.height,Lt,vt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,St,It,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ot?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,St,0,0,vt.width,vt.height,Lt,dt,vt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,St,It,vt.width,vt.height,0,Lt,dt,vt.data)}}}else{if(K=_.mipmaps,Ot&&Jt){K.length>0&&gt++;const nt=j(_t[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,gt,It,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(at){Ot?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,_t[nt].width,_t[nt].height,Lt,dt,_t[nt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,It,_t[nt].width,_t[nt].height,0,Lt,dt,_t[nt].data);for(let St=0;St<K.length;St++){const zt=K[St].image[nt].image;Ot?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,St+1,0,0,zt.width,zt.height,Lt,dt,zt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,St+1,It,zt.width,zt.height,0,Lt,dt,zt.data)}}else{Ot?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Lt,dt,_t[nt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,It,Lt,dt,_t[nt]);for(let St=0;St<K.length;St++){const vt=K[St];Ot?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,St+1,0,0,Lt,dt,vt.image[nt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,St+1,It,Lt,dt,vt.image[nt])}}}m(_)&&f(n.TEXTURE_CUBE_MAP),G.__version=V.version,_.onUpdate&&_.onUpdate(_)}g.__version=_.version}function Et(g,_,w,O,V,G){const ht=s.convert(w.format,w.colorSpace),ot=s.convert(w.type),ct=A(w.internalFormat,ht,ot,w.colorSpace),Pt=i.get(_),at=i.get(w);if(at.__renderTarget=_,!Pt.__hasExternalTextures){const _t=Math.max(1,_.width>>G),wt=Math.max(1,_.height>>G);V===n.TEXTURE_3D||V===n.TEXTURE_2D_ARRAY?e.texImage3D(V,G,ct,_t,wt,_.depth,0,ht,ot,null):e.texImage2D(V,G,ct,_t,wt,0,ht,ot,null)}e.bindFramebuffer(n.FRAMEBUFFER,g),Y(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,O,V,at.__webglTexture,0,X(_)):(V===n.TEXTURE_2D||V>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&V<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,O,V,at.__webglTexture,G),e.bindFramebuffer(n.FRAMEBUFFER,null)}function pt(g,_,w){if(n.bindRenderbuffer(n.RENDERBUFFER,g),_.depthBuffer){const O=_.depthTexture,V=O&&O.isDepthTexture?O.type:null,G=S(_.stencilBuffer,V),ht=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ot=X(_);Y(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ot,G,_.width,_.height):w?n.renderbufferStorageMultisample(n.RENDERBUFFER,ot,G,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,G,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ht,n.RENDERBUFFER,g)}else{const O=_.textures;for(let V=0;V<O.length;V++){const G=O[V],ht=s.convert(G.format,G.colorSpace),ot=s.convert(G.type),ct=A(G.internalFormat,ht,ot,G.colorSpace),Pt=X(_);w&&Y(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Pt,ct,_.width,_.height):Y(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Pt,ct,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,ct,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ct(g,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,g),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const O=i.get(_.depthTexture);O.__renderTarget=_,(!O.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),st(_.depthTexture,0);const V=O.__webglTexture,G=X(_);if(_.depthTexture.format===er)Y(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,V,0,G):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,V,0);else if(_.depthTexture.format===cr)Y(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,V,0,G):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,V,0);else throw new Error("Unknown depthTexture format")}function Ut(g){const _=i.get(g),w=g.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==g.depthTexture){const O=g.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),O){const V=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,O.removeEventListener("dispose",V)};O.addEventListener("dispose",V),_.__depthDisposeCallback=V}_.__boundDepthTexture=O}if(g.depthTexture&&!_.__autoAllocateDepthBuffer){if(w)throw new Error("target.depthTexture not supported in Cube render targets");Ct(_.__webglFramebuffer,g)}else if(w){_.__webglDepthbuffer=[];for(let O=0;O<6;O++)if(e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[O]),_.__webglDepthbuffer[O]===void 0)_.__webglDepthbuffer[O]=n.createRenderbuffer(),pt(_.__webglDepthbuffer[O],g,!1);else{const V=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,G=_.__webglDepthbuffer[O];n.bindRenderbuffer(n.RENDERBUFFER,G),n.framebufferRenderbuffer(n.FRAMEBUFFER,V,n.RENDERBUFFER,G)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),pt(_.__webglDepthbuffer,g,!1);else{const O=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,V=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,V),n.framebufferRenderbuffer(n.FRAMEBUFFER,O,n.RENDERBUFFER,V)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ft(g,_,w){const O=i.get(g);_!==void 0&&Et(O.__webglFramebuffer,g,g.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),w!==void 0&&Ut(g)}function ce(g){const _=g.texture,w=i.get(g),O=i.get(_);g.addEventListener("dispose",P);const V=g.textures,G=g.isWebGLCubeRenderTarget===!0,ht=V.length>1;if(ht||(O.__webglTexture===void 0&&(O.__webglTexture=n.createTexture()),O.__version=_.version,o.memory.textures++),G){w.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(_.mipmaps&&_.mipmaps.length>0){w.__webglFramebuffer[ot]=[];for(let ct=0;ct<_.mipmaps.length;ct++)w.__webglFramebuffer[ot][ct]=n.createFramebuffer()}else w.__webglFramebuffer[ot]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){w.__webglFramebuffer=[];for(let ot=0;ot<_.mipmaps.length;ot++)w.__webglFramebuffer[ot]=n.createFramebuffer()}else w.__webglFramebuffer=n.createFramebuffer();if(ht)for(let ot=0,ct=V.length;ot<ct;ot++){const Pt=i.get(V[ot]);Pt.__webglTexture===void 0&&(Pt.__webglTexture=n.createTexture(),o.memory.textures++)}if(g.samples>0&&Y(g)===!1){w.__webglMultisampledFramebuffer=n.createFramebuffer(),w.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,w.__webglMultisampledFramebuffer);for(let ot=0;ot<V.length;ot++){const ct=V[ot];w.__webglColorRenderbuffer[ot]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,w.__webglColorRenderbuffer[ot]);const Pt=s.convert(ct.format,ct.colorSpace),at=s.convert(ct.type),_t=A(ct.internalFormat,Pt,at,ct.colorSpace,g.isXRRenderTarget===!0),wt=X(g);n.renderbufferStorageMultisample(n.RENDERBUFFER,wt,_t,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ot,n.RENDERBUFFER,w.__webglColorRenderbuffer[ot])}n.bindRenderbuffer(n.RENDERBUFFER,null),g.depthBuffer&&(w.__webglDepthRenderbuffer=n.createRenderbuffer(),pt(w.__webglDepthRenderbuffer,g,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(G){e.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture),Dt(n.TEXTURE_CUBE_MAP,_);for(let ot=0;ot<6;ot++)if(_.mipmaps&&_.mipmaps.length>0)for(let ct=0;ct<_.mipmaps.length;ct++)Et(w.__webglFramebuffer[ot][ct],g,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,ct);else Et(w.__webglFramebuffer[ot],g,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);m(_)&&f(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ht){for(let ot=0,ct=V.length;ot<ct;ot++){const Pt=V[ot],at=i.get(Pt);e.bindTexture(n.TEXTURE_2D,at.__webglTexture),Dt(n.TEXTURE_2D,Pt),Et(w.__webglFramebuffer,g,Pt,n.COLOR_ATTACHMENT0+ot,n.TEXTURE_2D,0),m(Pt)&&f(n.TEXTURE_2D)}e.unbindTexture()}else{let ot=n.TEXTURE_2D;if((g.isWebGL3DRenderTarget||g.isWebGLArrayRenderTarget)&&(ot=g.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ot,O.__webglTexture),Dt(ot,_),_.mipmaps&&_.mipmaps.length>0)for(let ct=0;ct<_.mipmaps.length;ct++)Et(w.__webglFramebuffer[ct],g,_,n.COLOR_ATTACHMENT0,ot,ct);else Et(w.__webglFramebuffer,g,_,n.COLOR_ATTACHMENT0,ot,0);m(_)&&f(ot),e.unbindTexture()}g.depthBuffer&&Ut(g)}function b(g){const _=g.textures;for(let w=0,O=_.length;w<O;w++){const V=_[w];if(m(V)){const G=R(g),ht=i.get(V).__webglTexture;e.bindTexture(G,ht),f(G),e.unbindTexture()}}}const C=[],y=[];function et(g){if(g.samples>0){if(Y(g)===!1){const _=g.textures,w=g.width,O=g.height;let V=n.COLOR_BUFFER_BIT;const G=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ht=i.get(g),ot=_.length>1;if(ot)for(let ct=0;ct<_.length;ct++)e.bindFramebuffer(n.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,ht.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,ht.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let ct=0;ct<_.length;ct++){if(g.resolveDepthBuffer&&(g.depthBuffer&&(V|=n.DEPTH_BUFFER_BIT),g.stencilBuffer&&g.resolveStencilBuffer&&(V|=n.STENCIL_BUFFER_BIT)),ot){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ht.__webglColorRenderbuffer[ct]);const Pt=i.get(_[ct]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Pt,0)}n.blitFramebuffer(0,0,w,O,0,0,w,O,V,n.NEAREST),l===!0&&(C.length=0,y.length=0,C.push(n.COLOR_ATTACHMENT0+ct),g.depthBuffer&&g.resolveDepthBuffer===!1&&(C.push(G),y.push(G),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,y)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,C))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ot)for(let ct=0;ct<_.length;ct++){e.bindFramebuffer(n.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.RENDERBUFFER,ht.__webglColorRenderbuffer[ct]);const Pt=i.get(_[ct]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,ht.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.TEXTURE_2D,Pt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ht.__webglMultisampledFramebuffer)}else if(g.depthBuffer&&g.resolveDepthBuffer===!1&&l){const _=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function X(g){return Math.min(r.maxSamples,g.samples)}function Y(g){const _=i.get(g);return g.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Z(g){const _=o.render.frame;u.get(g)!==_&&(u.set(g,_),g.update())}function rt(g,_){const w=g.colorSpace,O=g.format,V=g.type;return g.isCompressedTexture===!0||g.isVideoTexture===!0||w!==hr&&w!==Qn&&(Xt.getTransfer(w)===te?(O!==Je||V!==zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",w)),_}function j(g){return typeof HTMLImageElement<"u"&&g instanceof HTMLImageElement?(c.width=g.naturalWidth||g.width,c.height=g.naturalHeight||g.height):typeof VideoFrame<"u"&&g instanceof VideoFrame?(c.width=g.displayWidth,c.height=g.displayHeight):(c.width=g.width,c.height=g.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=Q,this.setTexture2D=st,this.setTexture2DArray=$,this.setTexture3D=J,this.setTextureCube=z,this.rebindTextures=Ft,this.setupRenderTarget=ce,this.updateRenderTargetMipmap=b,this.updateMultisampleRenderTarget=et,this.setupDepthRenderbuffer=Ut,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=Y}function v0(n,t){function e(i,r=Qn){let s;const o=Xt.getTransfer(r);if(i===zn)return n.UNSIGNED_BYTE;if(i===cl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ul)return n.UNSIGNED_SHORT_5_5_5_1;if(i===vh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===_h)return n.BYTE;if(i===gh)return n.SHORT;if(i===zr)return n.UNSIGNED_SHORT;if(i===ll)return n.INT;if(i===yi)return n.UNSIGNED_INT;if(i===Un)return n.FLOAT;if(i===Wr)return n.HALF_FLOAT;if(i===xh)return n.ALPHA;if(i===Mh)return n.RGB;if(i===Je)return n.RGBA;if(i===Sh)return n.LUMINANCE;if(i===Eh)return n.LUMINANCE_ALPHA;if(i===er)return n.DEPTH_COMPONENT;if(i===cr)return n.DEPTH_STENCIL;if(i===yh)return n.RED;if(i===hl)return n.RED_INTEGER;if(i===Th)return n.RG;if(i===fl)return n.RG_INTEGER;if(i===dl)return n.RGBA_INTEGER;if(i===Ts||i===bs||i===As||i===Rs)if(o===te)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ts)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===bs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===As)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Rs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ts)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===bs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===As)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Rs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===da||i===pa||i===ma||i===_a)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===da)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===pa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ma)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===_a)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ga||i===va||i===xa)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===ga||i===va)return o===te?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===xa)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ma||i===Sa||i===Ea||i===ya||i===Ta||i===ba||i===Aa||i===Ra||i===wa||i===Ca||i===Pa||i===Da||i===La||i===Ua)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ma)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Sa)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ea)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ya)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ta)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ba)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Aa)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ra)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===wa)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ca)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Pa)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Da)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===La)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ua)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ws||i===Ia||i===Na)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===ws)return o===te?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ia)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Na)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===bh||i===Fa||i===Oa||i===Ba)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===ws)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Fa)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Oa)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ba)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===lr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class x0 extends Xe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ms extends Ge{constructor(){super(),this.isGroup=!0,this.type="Group"}}const M0={type:"move"};class Vo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ms,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ms,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ms,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,i),f=this._getHandJoint(c,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,v=.005;c.inputState.pinching&&d>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(M0)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Ms;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const S0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,E0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class y0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const r=new Le,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new ri({vertexShader:S0,fragmentShader:E0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new dn(new $s(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class T0 extends Ri{constructor(t,e){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,v=null;const x=new y0,m=e.getContextAttributes();let f=null,R=null;const A=[],S=[],B=new Wt;let L=null;const P=new Xe;P.viewport=new he;const F=new Xe;F.viewport=new he;const T=[P,F],E=new x0;let D=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let lt=A[tt];return lt===void 0&&(lt=new Vo,A[tt]=lt),lt.getTargetRaySpace()},this.getControllerGrip=function(tt){let lt=A[tt];return lt===void 0&&(lt=new Vo,A[tt]=lt),lt.getGripSpace()},this.getHand=function(tt){let lt=A[tt];return lt===void 0&&(lt=new Vo,A[tt]=lt),lt.getHandSpace()};function q(tt){const lt=S.indexOf(tt.inputSource);if(lt===-1)return;const Et=A[lt];Et!==void 0&&(Et.update(tt.inputSource,tt.frame,c||o),Et.dispatchEvent({type:tt.type,data:tt.inputSource}))}function it(){r.removeEventListener("select",q),r.removeEventListener("selectstart",q),r.removeEventListener("selectend",q),r.removeEventListener("squeeze",q),r.removeEventListener("squeezestart",q),r.removeEventListener("squeezeend",q),r.removeEventListener("end",it),r.removeEventListener("inputsourceschange",st);for(let tt=0;tt<A.length;tt++){const lt=S[tt];lt!==null&&(S[tt]=null,A[tt].disconnect(lt))}D=null,Q=null,x.reset(),t.setRenderTarget(f),p=null,d=null,h=null,r=null,R=null,Yt.stop(),i.isPresenting=!1,t.setPixelRatio(L),t.setSize(B.width,B.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){s=tt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){a=tt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(tt){c=tt},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(tt){if(r=tt,r!==null){if(f=t.getRenderTarget(),r.addEventListener("select",q),r.addEventListener("selectstart",q),r.addEventListener("selectend",q),r.addEventListener("squeeze",q),r.addEventListener("squeezestart",q),r.addEventListener("squeezeend",q),r.addEventListener("end",it),r.addEventListener("inputsourceschange",st),m.xrCompatible!==!0&&await e.makeXRCompatible(),L=t.getPixelRatio(),t.getSize(B),r.renderState.layers===void 0){const lt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,e,lt),r.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),R=new Ti(p.framebufferWidth,p.framebufferHeight,{format:Je,type:zn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let lt=null,Et=null,pt=null;m.depth&&(pt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,lt=m.stencil?cr:er,Et=m.stencil?lr:yi);const Ct={colorFormat:e.RGBA8,depthFormat:pt,scaleFactor:s};h=new XRWebGLBinding(r,e),d=h.createProjectionLayer(Ct),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),R=new Ti(d.textureWidth,d.textureHeight,{format:Je,type:zn,depthTexture:new Hh(d.textureWidth,d.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,lt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Yt.setContext(r),Yt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function st(tt){for(let lt=0;lt<tt.removed.length;lt++){const Et=tt.removed[lt],pt=S.indexOf(Et);pt>=0&&(S[pt]=null,A[pt].disconnect(Et))}for(let lt=0;lt<tt.added.length;lt++){const Et=tt.added[lt];let pt=S.indexOf(Et);if(pt===-1){for(let Ut=0;Ut<A.length;Ut++)if(Ut>=S.length){S.push(Et),pt=Ut;break}else if(S[Ut]===null){S[Ut]=Et,pt=Ut;break}if(pt===-1)break}const Ct=A[pt];Ct&&Ct.connect(Et)}}const $=new H,J=new H;function z(tt,lt,Et){$.setFromMatrixPosition(lt.matrixWorld),J.setFromMatrixPosition(Et.matrixWorld);const pt=$.distanceTo(J),Ct=lt.projectionMatrix.elements,Ut=Et.projectionMatrix.elements,Ft=Ct[14]/(Ct[10]-1),ce=Ct[14]/(Ct[10]+1),b=(Ct[9]+1)/Ct[5],C=(Ct[9]-1)/Ct[5],y=(Ct[8]-1)/Ct[0],et=(Ut[8]+1)/Ut[0],X=Ft*y,Y=Ft*et,Z=pt/(-y+et),rt=Z*-y;if(lt.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(rt),tt.translateZ(Z),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),Ct[10]===-1)tt.projectionMatrix.copy(lt.projectionMatrix),tt.projectionMatrixInverse.copy(lt.projectionMatrixInverse);else{const j=Ft+Z,g=ce+Z,_=X-rt,w=Y+(pt-rt),O=b*ce/g*j,V=C*ce/g*j;tt.projectionMatrix.makePerspective(_,w,O,V,j,g),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function ft(tt,lt){lt===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(lt.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(r===null)return;let lt=tt.near,Et=tt.far;x.texture!==null&&(x.depthNear>0&&(lt=x.depthNear),x.depthFar>0&&(Et=x.depthFar)),E.near=F.near=P.near=lt,E.far=F.far=P.far=Et,(D!==E.near||Q!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),D=E.near,Q=E.far),P.layers.mask=tt.layers.mask|2,F.layers.mask=tt.layers.mask|4,E.layers.mask=P.layers.mask|F.layers.mask;const pt=tt.parent,Ct=E.cameras;ft(E,pt);for(let Ut=0;Ut<Ct.length;Ut++)ft(Ct[Ut],pt);Ct.length===2?z(E,P,F):E.projectionMatrix.copy(P.projectionMatrix),Mt(tt,E,pt)};function Mt(tt,lt,Et){Et===null?tt.matrix.copy(lt.matrixWorld):(tt.matrix.copy(Et.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(lt.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(lt.projectionMatrix),tt.projectionMatrixInverse.copy(lt.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=za*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(tt){l=tt,d!==null&&(d.fixedFoveation=tt),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=tt)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(E)};let yt=null;function Dt(tt,lt){if(u=lt.getViewerPose(c||o),v=lt,u!==null){const Et=u.views;p!==null&&(t.setRenderTargetFramebuffer(R,p.framebuffer),t.setRenderTarget(R));let pt=!1;Et.length!==E.cameras.length&&(E.cameras.length=0,pt=!0);for(let Ut=0;Ut<Et.length;Ut++){const Ft=Et[Ut];let ce=null;if(p!==null)ce=p.getViewport(Ft);else{const C=h.getViewSubImage(d,Ft);ce=C.viewport,Ut===0&&(t.setRenderTargetTextures(R,C.colorTexture,d.ignoreDepthValues?void 0:C.depthStencilTexture),t.setRenderTarget(R))}let b=T[Ut];b===void 0&&(b=new Xe,b.layers.enable(Ut),b.viewport=new he,T[Ut]=b),b.matrix.fromArray(Ft.transform.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale),b.projectionMatrix.fromArray(Ft.projectionMatrix),b.projectionMatrixInverse.copy(b.projectionMatrix).invert(),b.viewport.set(ce.x,ce.y,ce.width,ce.height),Ut===0&&(E.matrix.copy(b.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),pt===!0&&E.cameras.push(b)}const Ct=r.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")){const Ut=h.getDepthInformation(Et[0]);Ut&&Ut.isValid&&Ut.texture&&x.init(t,Ut,r.renderState)}}for(let Et=0;Et<A.length;Et++){const pt=S[Et],Ct=A[Et];pt!==null&&Ct!==void 0&&Ct.update(pt,lt,c||o)}yt&&yt(tt,lt),lt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:lt}),v=null}const Yt=new zh;Yt.setAnimationLoop(Dt),this.setAnimationLoop=function(tt){yt=tt},this.dispose=function(){}}}const pi=new Hn,b0=new pe;function A0(n,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Nh(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,R,A,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),h(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f)):f.isMeshStandardMaterial?(s(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,S)):f.isMeshMatcapMaterial?(s(m,f),v(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),x(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,R,A):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===De&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===De&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const R=t.get(f),A=R.envMap,S=R.envMapRotation;A&&(m.envMap.value=A,pi.copy(S),pi.x*=-1,pi.y*=-1,pi.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(pi.y*=-1,pi.z*=-1),m.envMapRotation.value.setFromMatrix4(b0.makeRotationFromEuler(pi)),m.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,R,A){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*R,m.scale.value=A*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,R){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===De&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=R.texture,m.transmissionSamplerSize.value.set(R.width,R.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){const R=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(R.matrixWorld),m.nearDistance.value=R.shadow.camera.near,m.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function R0(n,t,e,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(R,A){const S=A.program;i.uniformBlockBinding(R,S)}function c(R,A){let S=r[R.id];S===void 0&&(v(R),S=u(R),r[R.id]=S,R.addEventListener("dispose",m));const B=A.program;i.updateUBOMapping(R,B);const L=t.render.frame;s[R.id]!==L&&(d(R),s[R.id]=L)}function u(R){const A=h();R.__bindingPointIndex=A;const S=n.createBuffer(),B=R.__size,L=R.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,B,L),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,A,S),S}function h(){for(let R=0;R<a;R++)if(o.indexOf(R)===-1)return o.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(R){const A=r[R.id],S=R.uniforms,B=R.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let L=0,P=S.length;L<P;L++){const F=Array.isArray(S[L])?S[L]:[S[L]];for(let T=0,E=F.length;T<E;T++){const D=F[T];if(p(D,L,T,B)===!0){const Q=D.__offset,q=Array.isArray(D.value)?D.value:[D.value];let it=0;for(let st=0;st<q.length;st++){const $=q[st],J=x($);typeof $=="number"||typeof $=="boolean"?(D.__data[0]=$,n.bufferSubData(n.UNIFORM_BUFFER,Q+it,D.__data)):$.isMatrix3?(D.__data[0]=$.elements[0],D.__data[1]=$.elements[1],D.__data[2]=$.elements[2],D.__data[3]=0,D.__data[4]=$.elements[3],D.__data[5]=$.elements[4],D.__data[6]=$.elements[5],D.__data[7]=0,D.__data[8]=$.elements[6],D.__data[9]=$.elements[7],D.__data[10]=$.elements[8],D.__data[11]=0):($.toArray(D.__data,it),it+=J.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,Q,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(R,A,S,B){const L=R.value,P=A+"_"+S;if(B[P]===void 0)return typeof L=="number"||typeof L=="boolean"?B[P]=L:B[P]=L.clone(),!0;{const F=B[P];if(typeof L=="number"||typeof L=="boolean"){if(F!==L)return B[P]=L,!0}else if(F.equals(L)===!1)return F.copy(L),!0}return!1}function v(R){const A=R.uniforms;let S=0;const B=16;for(let P=0,F=A.length;P<F;P++){const T=Array.isArray(A[P])?A[P]:[A[P]];for(let E=0,D=T.length;E<D;E++){const Q=T[E],q=Array.isArray(Q.value)?Q.value:[Q.value];for(let it=0,st=q.length;it<st;it++){const $=q[it],J=x($),z=S%B,ft=z%J.boundary,Mt=z+ft;S+=ft,Mt!==0&&B-Mt<J.storage&&(S+=B-Mt),Q.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=S,S+=J.storage}}}const L=S%B;return L>0&&(S+=B-L),R.__size=S,R.__cache={},this}function x(R){const A={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(A.boundary=4,A.storage=4):R.isVector2?(A.boundary=8,A.storage=8):R.isVector3||R.isColor?(A.boundary=16,A.storage=12):R.isVector4?(A.boundary=16,A.storage=16):R.isMatrix3?(A.boundary=48,A.storage=48):R.isMatrix4?(A.boundary=64,A.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),A}function m(R){const A=R.target;A.removeEventListener("dispose",m);const S=o.indexOf(A.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(r[A.id]),delete r[A.id],delete s[A.id]}function f(){for(const R in r)n.deleteBuffer(r[R]);o=[],r={},s={}}return{bind:l,update:c,dispose:f}}class w0{constructor(t={}){const{canvas:e=mm(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const v=new Uint32Array(4),x=new Int32Array(4);let m=null,f=null;const R=[],A=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=He,this.toneMapping=ei,this.toneMappingExposure=1;const S=this;let B=!1,L=0,P=0,F=null,T=-1,E=null;const D=new he,Q=new he;let q=null;const it=new ne(0);let st=0,$=e.width,J=e.height,z=1,ft=null,Mt=null;const yt=new he(0,0,$,J),Dt=new he(0,0,$,J);let Yt=!1;const tt=new Bh;let lt=!1,Et=!1;const pt=new pe,Ct=new pe,Ut=new H,Ft=new he,ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let b=!1;function C(){return F===null?z:1}let y=i;function et(M,I){return e.getContext(M,I)}try{const M={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${al}`),e.addEventListener("webglcontextlost",nt,!1),e.addEventListener("webglcontextrestored",St,!1),e.addEventListener("webglcontextcreationerror",vt,!1),y===null){const I="webgl2";if(y=et(I,M),y===null)throw et(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let X,Y,Z,rt,j,g,_,w,O,V,G,ht,ot,ct,Pt,at,_t,wt,Lt,dt,It,Ot,Jt,U;function gt(){X=new Uv(y),X.init(),Ot=new v0(y,X),Y=new Av(y,X,t,Ot),Z=new m0(y,X),Y.reverseDepthBuffer&&d&&Z.buffers.depth.setReversed(!0),rt=new Fv(y),j=new t0,g=new g0(y,X,Z,j,Y,Ot,rt),_=new wv(S),w=new Lv(S),O=new Gm(y),Jt=new Tv(y,O),V=new Iv(y,O,rt,Jt),G=new Bv(y,V,O,rt),Lt=new Ov(y,Y,g),at=new Rv(j),ht=new Qx(S,_,w,X,Y,Jt,at),ot=new A0(S,j),ct=new n0,Pt=new l0(X),wt=new yv(S,_,w,Z,G,p,l),_t=new d0(S,G,Y),U=new R0(y,rt,Y,Z),dt=new bv(y,X,rt),It=new Nv(y,X,rt),rt.programs=ht.programs,S.capabilities=Y,S.extensions=X,S.properties=j,S.renderLists=ct,S.shadowMap=_t,S.state=Z,S.info=rt}gt();const K=new T0(S,y);this.xr=K,this.getContext=function(){return y},this.getContextAttributes=function(){return y.getContextAttributes()},this.forceContextLoss=function(){const M=X.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=X.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(M){M!==void 0&&(z=M,this.setSize($,J,!1))},this.getSize=function(M){return M.set($,J)},this.setSize=function(M,I,k=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=M,J=I,e.width=Math.floor(M*z),e.height=Math.floor(I*z),k===!0&&(e.style.width=M+"px",e.style.height=I+"px"),this.setViewport(0,0,M,I)},this.getDrawingBufferSize=function(M){return M.set($*z,J*z).floor()},this.setDrawingBufferSize=function(M,I,k){$=M,J=I,z=k,e.width=Math.floor(M*k),e.height=Math.floor(I*k),this.setViewport(0,0,M,I)},this.getCurrentViewport=function(M){return M.copy(D)},this.getViewport=function(M){return M.copy(yt)},this.setViewport=function(M,I,k,W){M.isVector4?yt.set(M.x,M.y,M.z,M.w):yt.set(M,I,k,W),Z.viewport(D.copy(yt).multiplyScalar(z).round())},this.getScissor=function(M){return M.copy(Dt)},this.setScissor=function(M,I,k,W){M.isVector4?Dt.set(M.x,M.y,M.z,M.w):Dt.set(M,I,k,W),Z.scissor(Q.copy(Dt).multiplyScalar(z).round())},this.getScissorTest=function(){return Yt},this.setScissorTest=function(M){Z.setScissorTest(Yt=M)},this.setOpaqueSort=function(M){ft=M},this.setTransparentSort=function(M){Mt=M},this.getClearColor=function(M){return M.copy(wt.getClearColor())},this.setClearColor=function(){wt.setClearColor.apply(wt,arguments)},this.getClearAlpha=function(){return wt.getClearAlpha()},this.setClearAlpha=function(){wt.setClearAlpha.apply(wt,arguments)},this.clear=function(M=!0,I=!0,k=!0){let W=0;if(M){let N=!1;if(F!==null){const ut=F.texture.format;N=ut===dl||ut===fl||ut===hl}if(N){const ut=F.texture.type,xt=ut===zn||ut===yi||ut===zr||ut===lr||ut===cl||ut===ul,Tt=wt.getClearColor(),bt=wt.getClearAlpha(),Nt=Tt.r,Ht=Tt.g,At=Tt.b;xt?(v[0]=Nt,v[1]=Ht,v[2]=At,v[3]=bt,y.clearBufferuiv(y.COLOR,0,v)):(x[0]=Nt,x[1]=Ht,x[2]=At,x[3]=bt,y.clearBufferiv(y.COLOR,0,x))}else W|=y.COLOR_BUFFER_BIT}I&&(W|=y.DEPTH_BUFFER_BIT),k&&(W|=y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),y.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",nt,!1),e.removeEventListener("webglcontextrestored",St,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),ct.dispose(),Pt.dispose(),j.dispose(),_.dispose(),w.dispose(),G.dispose(),Jt.dispose(),U.dispose(),ht.dispose(),K.dispose(),K.removeEventListener("sessionstart",Ml),K.removeEventListener("sessionend",Sl),oi.stop()};function nt(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function St(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;const M=rt.autoReset,I=_t.enabled,k=_t.autoUpdate,W=_t.needsUpdate,N=_t.type;gt(),rt.autoReset=M,_t.enabled=I,_t.autoUpdate=k,_t.needsUpdate=W,_t.type=N}function vt(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function zt(M){const I=M.target;I.removeEventListener("dispose",zt),ue(I)}function ue(M){Me(M),j.remove(M)}function Me(M){const I=j.get(M).programs;I!==void 0&&(I.forEach(function(k){ht.releaseProgram(k)}),M.isShaderMaterial&&ht.releaseShaderCache(M))}this.renderBufferDirect=function(M,I,k,W,N,ut){I===null&&(I=ce);const xt=N.isMesh&&N.matrixWorld.determinant()<0,Tt=qh(M,I,k,W,N);Z.setMaterial(W,xt);let bt=k.index,Nt=1;if(W.wireframe===!0){if(bt=V.getWireframeAttribute(k),bt===void 0)return;Nt=2}const Ht=k.drawRange,At=k.attributes.position;let qt=Ht.start*Nt,re=(Ht.start+Ht.count)*Nt;ut!==null&&(qt=Math.max(qt,ut.start*Nt),re=Math.min(re,(ut.start+ut.count)*Nt)),bt!==null?(qt=Math.max(qt,0),re=Math.min(re,bt.count)):At!=null&&(qt=Math.max(qt,0),re=Math.min(re,At.count));const ae=re-qt;if(ae<0||ae===1/0)return;Jt.setup(N,W,Tt,k,bt);let Ue,jt=dt;if(bt!==null&&(Ue=O.get(bt),jt=It,jt.setIndex(Ue)),N.isMesh)W.wireframe===!0?(Z.setLineWidth(W.wireframeLinewidth*C()),jt.setMode(y.LINES)):jt.setMode(y.TRIANGLES);else if(N.isLine){let Rt=W.linewidth;Rt===void 0&&(Rt=1),Z.setLineWidth(Rt*C()),N.isLineSegments?jt.setMode(y.LINES):N.isLineLoop?jt.setMode(y.LINE_LOOP):jt.setMode(y.LINE_STRIP)}else N.isPoints?jt.setMode(y.POINTS):N.isSprite&&jt.setMode(y.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)jt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(X.get("WEBGL_multi_draw"))jt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Rt=N._multiDrawStarts,Mn=N._multiDrawCounts,Kt=N._multiDrawCount,Ye=bt?O.get(bt).bytesPerElement:1,wi=j.get(W).currentProgram.getUniforms();for(let Oe=0;Oe<Kt;Oe++)wi.setValue(y,"_gl_DrawID",Oe),jt.render(Rt[Oe]/Ye,Mn[Oe])}else if(N.isInstancedMesh)jt.renderInstances(qt,ae,N.count);else if(k.isInstancedBufferGeometry){const Rt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Mn=Math.min(k.instanceCount,Rt);jt.renderInstances(qt,ae,Mn)}else jt.render(qt,ae)};function Qt(M,I,k){M.transparent===!0&&M.side===Ln&&M.forceSinglePass===!1?(M.side=De,M.needsUpdate=!0,Kr(M,I,k),M.side=ii,M.needsUpdate=!0,Kr(M,I,k),M.side=Ln):Kr(M,I,k)}this.compile=function(M,I,k=null){k===null&&(k=M),f=Pt.get(k),f.init(I),A.push(f),k.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),M!==k&&M.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights();const W=new Set;return M.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const ut=N.material;if(ut)if(Array.isArray(ut))for(let xt=0;xt<ut.length;xt++){const Tt=ut[xt];Qt(Tt,k,N),W.add(Tt)}else Qt(ut,k,N),W.add(ut)}),A.pop(),f=null,W},this.compileAsync=function(M,I,k=null){const W=this.compile(M,I,k);return new Promise(N=>{function ut(){if(W.forEach(function(xt){j.get(xt).currentProgram.isReady()&&W.delete(xt)}),W.size===0){N(M);return}setTimeout(ut,10)}X.get("KHR_parallel_shader_compile")!==null?ut():setTimeout(ut,10)})};let qe=null;function xn(M){qe&&qe(M)}function Ml(){oi.stop()}function Sl(){oi.start()}const oi=new zh;oi.setAnimationLoop(xn),typeof self<"u"&&oi.setContext(self),this.setAnimationLoop=function(M){qe=M,K.setAnimationLoop(M),M===null?oi.stop():oi.start()},K.addEventListener("sessionstart",Ml),K.addEventListener("sessionend",Sl),this.render=function(M,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(I),I=K.getCamera()),M.isScene===!0&&M.onBeforeRender(S,M,I,F),f=Pt.get(M,A.length),f.init(I),A.push(f),Ct.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),tt.setFromProjectionMatrix(Ct),Et=this.localClippingEnabled,lt=at.init(this.clippingPlanes,Et),m=ct.get(M,R.length),m.init(),R.push(m),K.enabled===!0&&K.isPresenting===!0){const ut=S.xr.getDepthSensingMesh();ut!==null&&Js(ut,I,-1/0,S.sortObjects)}Js(M,I,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(ft,Mt),b=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,b&&wt.addToRenderList(m,M),this.info.render.frame++,lt===!0&&at.beginShadows();const k=f.state.shadowsArray;_t.render(k,M,I),lt===!0&&at.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=m.opaque,N=m.transmissive;if(f.setupLights(),I.isArrayCamera){const ut=I.cameras;if(N.length>0)for(let xt=0,Tt=ut.length;xt<Tt;xt++){const bt=ut[xt];yl(W,N,M,bt)}b&&wt.render(M);for(let xt=0,Tt=ut.length;xt<Tt;xt++){const bt=ut[xt];El(m,M,bt,bt.viewport)}}else N.length>0&&yl(W,N,M,I),b&&wt.render(M),El(m,M,I);F!==null&&(g.updateMultisampleRenderTarget(F),g.updateRenderTargetMipmap(F)),M.isScene===!0&&M.onAfterRender(S,M,I),Jt.resetDefaultState(),T=-1,E=null,A.pop(),A.length>0?(f=A[A.length-1],lt===!0&&at.setGlobalState(S.clippingPlanes,f.state.camera)):f=null,R.pop(),R.length>0?m=R[R.length-1]:m=null};function Js(M,I,k,W){if(M.visible===!1)return;if(M.layers.test(I.layers)){if(M.isGroup)k=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(I);else if(M.isLight)f.pushLight(M),M.castShadow&&f.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||tt.intersectsSprite(M)){W&&Ft.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Ct);const xt=G.update(M),Tt=M.material;Tt.visible&&m.push(M,xt,Tt,k,Ft.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||tt.intersectsObject(M))){const xt=G.update(M),Tt=M.material;if(W&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ft.copy(M.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),Ft.copy(xt.boundingSphere.center)),Ft.applyMatrix4(M.matrixWorld).applyMatrix4(Ct)),Array.isArray(Tt)){const bt=xt.groups;for(let Nt=0,Ht=bt.length;Nt<Ht;Nt++){const At=bt[Nt],qt=Tt[At.materialIndex];qt&&qt.visible&&m.push(M,xt,qt,k,Ft.z,At)}}else Tt.visible&&m.push(M,xt,Tt,k,Ft.z,null)}}const ut=M.children;for(let xt=0,Tt=ut.length;xt<Tt;xt++)Js(ut[xt],I,k,W)}function El(M,I,k,W){const N=M.opaque,ut=M.transmissive,xt=M.transparent;f.setupLightsView(k),lt===!0&&at.setGlobalState(S.clippingPlanes,k),W&&Z.viewport(D.copy(W)),N.length>0&&jr(N,I,k),ut.length>0&&jr(ut,I,k),xt.length>0&&jr(xt,I,k),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1)}function yl(M,I,k,W){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[W.id]===void 0&&(f.state.transmissionRenderTarget[W.id]=new Ti(1,1,{generateMipmaps:!0,type:X.has("EXT_color_buffer_half_float")||X.has("EXT_color_buffer_float")?Wr:zn,minFilter:Mi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xt.workingColorSpace}));const ut=f.state.transmissionRenderTarget[W.id],xt=W.viewport||D;ut.setSize(xt.z,xt.w);const Tt=S.getRenderTarget();S.setRenderTarget(ut),S.getClearColor(it),st=S.getClearAlpha(),st<1&&S.setClearColor(16777215,.5),S.clear(),b&&wt.render(k);const bt=S.toneMapping;S.toneMapping=ei;const Nt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),f.setupLightsView(W),lt===!0&&at.setGlobalState(S.clippingPlanes,W),jr(M,k,W),g.updateMultisampleRenderTarget(ut),g.updateRenderTargetMipmap(ut),X.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let At=0,qt=I.length;At<qt;At++){const re=I[At],ae=re.object,Ue=re.geometry,jt=re.material,Rt=re.group;if(jt.side===Ln&&ae.layers.test(W.layers)){const Mn=jt.side;jt.side=De,jt.needsUpdate=!0,Tl(ae,k,W,Ue,jt,Rt),jt.side=Mn,jt.needsUpdate=!0,Ht=!0}}Ht===!0&&(g.updateMultisampleRenderTarget(ut),g.updateRenderTargetMipmap(ut))}S.setRenderTarget(Tt),S.setClearColor(it,st),Nt!==void 0&&(W.viewport=Nt),S.toneMapping=bt}function jr(M,I,k){const W=I.isScene===!0?I.overrideMaterial:null;for(let N=0,ut=M.length;N<ut;N++){const xt=M[N],Tt=xt.object,bt=xt.geometry,Nt=W===null?xt.material:W,Ht=xt.group;Tt.layers.test(k.layers)&&Tl(Tt,I,k,bt,Nt,Ht)}}function Tl(M,I,k,W,N,ut){M.onBeforeRender(S,I,k,W,N,ut),M.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),N.onBeforeRender(S,I,k,W,M,ut),N.transparent===!0&&N.side===Ln&&N.forceSinglePass===!1?(N.side=De,N.needsUpdate=!0,S.renderBufferDirect(k,I,W,N,M,ut),N.side=ii,N.needsUpdate=!0,S.renderBufferDirect(k,I,W,N,M,ut),N.side=Ln):S.renderBufferDirect(k,I,W,N,M,ut),M.onAfterRender(S,I,k,W,N,ut)}function Kr(M,I,k){I.isScene!==!0&&(I=ce);const W=j.get(M),N=f.state.lights,ut=f.state.shadowsArray,xt=N.state.version,Tt=ht.getParameters(M,N.state,ut,I,k),bt=ht.getProgramCacheKey(Tt);let Nt=W.programs;W.environment=M.isMeshStandardMaterial?I.environment:null,W.fog=I.fog,W.envMap=(M.isMeshStandardMaterial?w:_).get(M.envMap||W.environment),W.envMapRotation=W.environment!==null&&M.envMap===null?I.environmentRotation:M.envMapRotation,Nt===void 0&&(M.addEventListener("dispose",zt),Nt=new Map,W.programs=Nt);let Ht=Nt.get(bt);if(Ht!==void 0){if(W.currentProgram===Ht&&W.lightsStateVersion===xt)return Al(M,Tt),Ht}else Tt.uniforms=ht.getUniforms(M),M.onBeforeCompile(Tt,S),Ht=ht.acquireProgram(Tt,bt),Nt.set(bt,Ht),W.uniforms=Tt.uniforms;const At=W.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(At.clippingPlanes=at.uniform),Al(M,Tt),W.needsLights=jh(M),W.lightsStateVersion=xt,W.needsLights&&(At.ambientLightColor.value=N.state.ambient,At.lightProbe.value=N.state.probe,At.directionalLights.value=N.state.directional,At.directionalLightShadows.value=N.state.directionalShadow,At.spotLights.value=N.state.spot,At.spotLightShadows.value=N.state.spotShadow,At.rectAreaLights.value=N.state.rectArea,At.ltc_1.value=N.state.rectAreaLTC1,At.ltc_2.value=N.state.rectAreaLTC2,At.pointLights.value=N.state.point,At.pointLightShadows.value=N.state.pointShadow,At.hemisphereLights.value=N.state.hemi,At.directionalShadowMap.value=N.state.directionalShadowMap,At.directionalShadowMatrix.value=N.state.directionalShadowMatrix,At.spotShadowMap.value=N.state.spotShadowMap,At.spotLightMatrix.value=N.state.spotLightMatrix,At.spotLightMap.value=N.state.spotLightMap,At.pointShadowMap.value=N.state.pointShadowMap,At.pointShadowMatrix.value=N.state.pointShadowMatrix),W.currentProgram=Ht,W.uniformsList=null,Ht}function bl(M){if(M.uniformsList===null){const I=M.currentProgram.getUniforms();M.uniformsList=Ps.seqWithValue(I.seq,M.uniforms)}return M.uniformsList}function Al(M,I){const k=j.get(M);k.outputColorSpace=I.outputColorSpace,k.batching=I.batching,k.batchingColor=I.batchingColor,k.instancing=I.instancing,k.instancingColor=I.instancingColor,k.instancingMorph=I.instancingMorph,k.skinning=I.skinning,k.morphTargets=I.morphTargets,k.morphNormals=I.morphNormals,k.morphColors=I.morphColors,k.morphTargetsCount=I.morphTargetsCount,k.numClippingPlanes=I.numClippingPlanes,k.numIntersection=I.numClipIntersection,k.vertexAlphas=I.vertexAlphas,k.vertexTangents=I.vertexTangents,k.toneMapping=I.toneMapping}function qh(M,I,k,W,N){I.isScene!==!0&&(I=ce),g.resetTextureUnits();const ut=I.fog,xt=W.isMeshStandardMaterial?I.environment:null,Tt=F===null?S.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:hr,bt=(W.isMeshStandardMaterial?w:_).get(W.envMap||xt),Nt=W.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ht=!!k.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),At=!!k.morphAttributes.position,qt=!!k.morphAttributes.normal,re=!!k.morphAttributes.color;let ae=ei;W.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(ae=S.toneMapping);const Ue=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,jt=Ue!==void 0?Ue.length:0,Rt=j.get(W),Mn=f.state.lights;if(lt===!0&&(Et===!0||M!==E)){const ke=M===E&&W.id===T;at.setState(W,M,ke)}let Kt=!1;W.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==Mn.state.version||Rt.outputColorSpace!==Tt||N.isBatchedMesh&&Rt.batching===!1||!N.isBatchedMesh&&Rt.batching===!0||N.isBatchedMesh&&Rt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Rt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Rt.instancing===!1||!N.isInstancedMesh&&Rt.instancing===!0||N.isSkinnedMesh&&Rt.skinning===!1||!N.isSkinnedMesh&&Rt.skinning===!0||N.isInstancedMesh&&Rt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Rt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Rt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Rt.instancingMorph===!1&&N.morphTexture!==null||Rt.envMap!==bt||W.fog===!0&&Rt.fog!==ut||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==at.numPlanes||Rt.numIntersection!==at.numIntersection)||Rt.vertexAlphas!==Nt||Rt.vertexTangents!==Ht||Rt.morphTargets!==At||Rt.morphNormals!==qt||Rt.morphColors!==re||Rt.toneMapping!==ae||Rt.morphTargetsCount!==jt)&&(Kt=!0):(Kt=!0,Rt.__version=W.version);let Ye=Rt.currentProgram;Kt===!0&&(Ye=Kr(W,I,N));let wi=!1,Oe=!1,dr=!1;const le=Ye.getUniforms(),rn=Rt.uniforms;if(Z.useProgram(Ye.program)&&(wi=!0,Oe=!0,dr=!0),W.id!==T&&(T=W.id,Oe=!0),wi||E!==M){Z.buffers.depth.getReversed()?(pt.copy(M.projectionMatrix),gm(pt),vm(pt),le.setValue(y,"projectionMatrix",pt)):le.setValue(y,"projectionMatrix",M.projectionMatrix),le.setValue(y,"viewMatrix",M.matrixWorldInverse);const Gn=le.map.cameraPosition;Gn!==void 0&&Gn.setValue(y,Ut.setFromMatrixPosition(M.matrixWorld)),Y.logarithmicDepthBuffer&&le.setValue(y,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&le.setValue(y,"isOrthographic",M.isOrthographicCamera===!0),E!==M&&(E=M,Oe=!0,dr=!0)}if(N.isSkinnedMesh){le.setOptional(y,N,"bindMatrix"),le.setOptional(y,N,"bindMatrixInverse");const ke=N.skeleton;ke&&(ke.boneTexture===null&&ke.computeBoneTexture(),le.setValue(y,"boneTexture",ke.boneTexture,g))}N.isBatchedMesh&&(le.setOptional(y,N,"batchingTexture"),le.setValue(y,"batchingTexture",N._matricesTexture,g),le.setOptional(y,N,"batchingIdTexture"),le.setValue(y,"batchingIdTexture",N._indirectTexture,g),le.setOptional(y,N,"batchingColorTexture"),N._colorsTexture!==null&&le.setValue(y,"batchingColorTexture",N._colorsTexture,g));const pr=k.morphAttributes;if((pr.position!==void 0||pr.normal!==void 0||pr.color!==void 0)&&Lt.update(N,k,Ye),(Oe||Rt.receiveShadow!==N.receiveShadow)&&(Rt.receiveShadow=N.receiveShadow,le.setValue(y,"receiveShadow",N.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(rn.envMap.value=bt,rn.flipEnvMap.value=bt.isCubeTexture&&bt.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&I.environment!==null&&(rn.envMapIntensity.value=I.environmentIntensity),Oe&&(le.setValue(y,"toneMappingExposure",S.toneMappingExposure),Rt.needsLights&&Yh(rn,dr),ut&&W.fog===!0&&ot.refreshFogUniforms(rn,ut),ot.refreshMaterialUniforms(rn,W,z,J,f.state.transmissionRenderTarget[M.id]),Ps.upload(y,bl(Rt),rn,g)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Ps.upload(y,bl(Rt),rn,g),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&le.setValue(y,"center",N.center),le.setValue(y,"modelViewMatrix",N.modelViewMatrix),le.setValue(y,"normalMatrix",N.normalMatrix),le.setValue(y,"modelMatrix",N.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const ke=W.uniformsGroups;for(let Gn=0,kn=ke.length;Gn<kn;Gn++){const Rl=ke[Gn];U.update(Rl,Ye),U.bind(Rl,Ye)}}return Ye}function Yh(M,I){M.ambientLightColor.needsUpdate=I,M.lightProbe.needsUpdate=I,M.directionalLights.needsUpdate=I,M.directionalLightShadows.needsUpdate=I,M.pointLights.needsUpdate=I,M.pointLightShadows.needsUpdate=I,M.spotLights.needsUpdate=I,M.spotLightShadows.needsUpdate=I,M.rectAreaLights.needsUpdate=I,M.hemisphereLights.needsUpdate=I}function jh(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(M,I,k){j.get(M.texture).__webglTexture=I,j.get(M.depthTexture).__webglTexture=k;const W=j.get(M);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=k===void 0,W.__autoAllocateDepthBuffer||X.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,I){const k=j.get(M);k.__webglFramebuffer=I,k.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(M,I=0,k=0){F=M,L=I,P=k;let W=!0,N=null,ut=!1,xt=!1;if(M){const bt=j.get(M);if(bt.__useDefaultFramebuffer!==void 0)Z.bindFramebuffer(y.FRAMEBUFFER,null),W=!1;else if(bt.__webglFramebuffer===void 0)g.setupRenderTarget(M);else if(bt.__hasExternalTextures)g.rebindTextures(M,j.get(M.texture).__webglTexture,j.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const At=M.depthTexture;if(bt.__boundDepthTexture!==At){if(At!==null&&j.has(At)&&(M.width!==At.image.width||M.height!==At.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");g.setupDepthRenderbuffer(M)}}const Nt=M.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(xt=!0);const Ht=j.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ht[I])?N=Ht[I][k]:N=Ht[I],ut=!0):M.samples>0&&g.useMultisampledRTT(M)===!1?N=j.get(M).__webglMultisampledFramebuffer:Array.isArray(Ht)?N=Ht[k]:N=Ht,D.copy(M.viewport),Q.copy(M.scissor),q=M.scissorTest}else D.copy(yt).multiplyScalar(z).floor(),Q.copy(Dt).multiplyScalar(z).floor(),q=Yt;if(Z.bindFramebuffer(y.FRAMEBUFFER,N)&&W&&Z.drawBuffers(M,N),Z.viewport(D),Z.scissor(Q),Z.setScissorTest(q),ut){const bt=j.get(M.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_CUBE_MAP_POSITIVE_X+I,bt.__webglTexture,k)}else if(xt){const bt=j.get(M.texture),Nt=I||0;y.framebufferTextureLayer(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,bt.__webglTexture,k||0,Nt)}T=-1},this.readRenderTargetPixels=function(M,I,k,W,N,ut,xt){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=j.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&xt!==void 0&&(Tt=Tt[xt]),Tt){Z.bindFramebuffer(y.FRAMEBUFFER,Tt);try{const bt=M.texture,Nt=bt.format,Ht=bt.type;if(!Y.textureFormatReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Y.textureTypeReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=M.width-W&&k>=0&&k<=M.height-N&&y.readPixels(I,k,W,N,Ot.convert(Nt),Ot.convert(Ht),ut)}finally{const bt=F!==null?j.get(F).__webglFramebuffer:null;Z.bindFramebuffer(y.FRAMEBUFFER,bt)}}},this.readRenderTargetPixelsAsync=async function(M,I,k,W,N,ut,xt){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Tt=j.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&xt!==void 0&&(Tt=Tt[xt]),Tt){const bt=M.texture,Nt=bt.format,Ht=bt.type;if(!Y.textureFormatReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Y.textureTypeReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=M.width-W&&k>=0&&k<=M.height-N){Z.bindFramebuffer(y.FRAMEBUFFER,Tt);const At=y.createBuffer();y.bindBuffer(y.PIXEL_PACK_BUFFER,At),y.bufferData(y.PIXEL_PACK_BUFFER,ut.byteLength,y.STREAM_READ),y.readPixels(I,k,W,N,Ot.convert(Nt),Ot.convert(Ht),0);const qt=F!==null?j.get(F).__webglFramebuffer:null;Z.bindFramebuffer(y.FRAMEBUFFER,qt);const re=y.fenceSync(y.SYNC_GPU_COMMANDS_COMPLETE,0);return y.flush(),await _m(y,re,4),y.bindBuffer(y.PIXEL_PACK_BUFFER,At),y.getBufferSubData(y.PIXEL_PACK_BUFFER,0,ut),y.deleteBuffer(At),y.deleteSync(re),ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,I=null,k=0){M.isTexture!==!0&&(Tr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,M=arguments[1]);const W=Math.pow(2,-k),N=Math.floor(M.image.width*W),ut=Math.floor(M.image.height*W),xt=I!==null?I.x:0,Tt=I!==null?I.y:0;g.setTexture2D(M,0),y.copyTexSubImage2D(y.TEXTURE_2D,k,0,0,xt,Tt,N,ut),Z.unbindTexture()},this.copyTextureToTexture=function(M,I,k=null,W=null,N=0){M.isTexture!==!0&&(Tr("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,M=arguments[1],I=arguments[2],N=arguments[3]||0,k=null);let ut,xt,Tt,bt,Nt,Ht,At,qt,re;const ae=M.isCompressedTexture?M.mipmaps[N]:M.image;k!==null?(ut=k.max.x-k.min.x,xt=k.max.y-k.min.y,Tt=k.isBox3?k.max.z-k.min.z:1,bt=k.min.x,Nt=k.min.y,Ht=k.isBox3?k.min.z:0):(ut=ae.width,xt=ae.height,Tt=ae.depth||1,bt=0,Nt=0,Ht=0),W!==null?(At=W.x,qt=W.y,re=W.z):(At=0,qt=0,re=0);const Ue=Ot.convert(I.format),jt=Ot.convert(I.type);let Rt;I.isData3DTexture?(g.setTexture3D(I,0),Rt=y.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(g.setTexture2DArray(I,0),Rt=y.TEXTURE_2D_ARRAY):(g.setTexture2D(I,0),Rt=y.TEXTURE_2D),y.pixelStorei(y.UNPACK_FLIP_Y_WEBGL,I.flipY),y.pixelStorei(y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),y.pixelStorei(y.UNPACK_ALIGNMENT,I.unpackAlignment);const Mn=y.getParameter(y.UNPACK_ROW_LENGTH),Kt=y.getParameter(y.UNPACK_IMAGE_HEIGHT),Ye=y.getParameter(y.UNPACK_SKIP_PIXELS),wi=y.getParameter(y.UNPACK_SKIP_ROWS),Oe=y.getParameter(y.UNPACK_SKIP_IMAGES);y.pixelStorei(y.UNPACK_ROW_LENGTH,ae.width),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,ae.height),y.pixelStorei(y.UNPACK_SKIP_PIXELS,bt),y.pixelStorei(y.UNPACK_SKIP_ROWS,Nt),y.pixelStorei(y.UNPACK_SKIP_IMAGES,Ht);const dr=M.isDataArrayTexture||M.isData3DTexture,le=I.isDataArrayTexture||I.isData3DTexture;if(M.isRenderTargetTexture||M.isDepthTexture){const rn=j.get(M),pr=j.get(I),ke=j.get(rn.__renderTarget),Gn=j.get(pr.__renderTarget);Z.bindFramebuffer(y.READ_FRAMEBUFFER,ke.__webglFramebuffer),Z.bindFramebuffer(y.DRAW_FRAMEBUFFER,Gn.__webglFramebuffer);for(let kn=0;kn<Tt;kn++)dr&&y.framebufferTextureLayer(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,j.get(M).__webglTexture,N,Ht+kn),M.isDepthTexture?(le&&y.framebufferTextureLayer(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,j.get(I).__webglTexture,N,re+kn),y.blitFramebuffer(bt,Nt,ut,xt,At,qt,ut,xt,y.DEPTH_BUFFER_BIT,y.NEAREST)):le?y.copyTexSubImage3D(Rt,N,At,qt,re+kn,bt,Nt,ut,xt):y.copyTexSubImage2D(Rt,N,At,qt,re+kn,bt,Nt,ut,xt);Z.bindFramebuffer(y.READ_FRAMEBUFFER,null),Z.bindFramebuffer(y.DRAW_FRAMEBUFFER,null)}else le?M.isDataTexture||M.isData3DTexture?y.texSubImage3D(Rt,N,At,qt,re,ut,xt,Tt,Ue,jt,ae.data):I.isCompressedArrayTexture?y.compressedTexSubImage3D(Rt,N,At,qt,re,ut,xt,Tt,Ue,ae.data):y.texSubImage3D(Rt,N,At,qt,re,ut,xt,Tt,Ue,jt,ae):M.isDataTexture?y.texSubImage2D(y.TEXTURE_2D,N,At,qt,ut,xt,Ue,jt,ae.data):M.isCompressedTexture?y.compressedTexSubImage2D(y.TEXTURE_2D,N,At,qt,ae.width,ae.height,Ue,ae.data):y.texSubImage2D(y.TEXTURE_2D,N,At,qt,ut,xt,Ue,jt,ae);y.pixelStorei(y.UNPACK_ROW_LENGTH,Mn),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,Kt),y.pixelStorei(y.UNPACK_SKIP_PIXELS,Ye),y.pixelStorei(y.UNPACK_SKIP_ROWS,wi),y.pixelStorei(y.UNPACK_SKIP_IMAGES,Oe),N===0&&I.generateMipmaps&&y.generateMipmap(Rt),Z.unbindTexture()},this.copyTextureToTexture3D=function(M,I,k=null,W=null,N=0){return M.isTexture!==!0&&(Tr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,W=arguments[1]||null,M=arguments[2],I=arguments[3],N=arguments[4]||0),Tr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,I,k,W,N)},this.initRenderTarget=function(M){j.get(M).__webglFramebuffer===void 0&&g.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?g.setTextureCube(M,0):M.isData3DTexture?g.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?g.setTexture2DArray(M,0):g.setTexture2D(M,0),Z.unbindTexture()},this.resetState=function(){L=0,P=0,F=null,Z.reset(),Jt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return In}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Xt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Xt._getUnpackColorSpace()}}class C0 extends Ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hn,this.environmentIntensity=1,this.environmentRotation=new Hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class gl extends si{constructor(t=1,e=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new H,d=new H,p=[],v=[],x=[],m=[];for(let f=0;f<=i;f++){const R=[],A=f/i;let S=0;f===0&&o===0?S=.5/e:f===i&&l===Math.PI&&(S=-.5/e);for(let B=0;B<=e;B++){const L=B/e;h.x=-t*Math.cos(r+L*s)*Math.sin(o+A*a),h.y=t*Math.cos(o+A*a),h.z=t*Math.sin(r+L*s)*Math.sin(o+A*a),v.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),m.push(L+S,1-A),R.push(c++)}u.push(R)}for(let f=0;f<i;f++)for(let R=0;R<e;R++){const A=u[f][R+1],S=u[f][R],B=u[f+1][R],L=u[f+1][R+1];(f!==0||o>0)&&p.push(A,S,L),(f!==i-1||l<Math.PI)&&p.push(S,B,L)}this.setIndex(p),this.setAttribute("position",new _n(v,3)),this.setAttribute("normal",new _n(x,3)),this.setAttribute("uv",new _n(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gl(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}const nu={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class P0{constructor(t,e,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const p=c[h],v=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return v}return null}}}const D0=new P0;class vl{constructor(t){this.manager=t!==void 0?t:D0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(r,s){i.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}vl.DEFAULT_MATERIAL_NAME="__DEFAULT";class L0 extends vl{constructor(t){super(t)}load(t,e,i,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=nu.get(t);if(o!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o;const a=Hr("img");function l(){u(),nu.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(h){u(),r&&r(h),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}}class U0 extends vl{constructor(t){super(t)}load(t,e,i,r){const s=new Le,o=new L0(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},i,r),s}}class iu{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Ce(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class I0 extends Ri{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:al}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=al);const ru={type:"change"},xl={type:"start"},Xh={type:"end"},Ss=new Ph,su=new Zn,N0=Math.cos(70*pm.DEG2RAD),me=new H,Ne=2*Math.PI,ee={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Go=1e-6;class F0 extends I0{constructor(t,e=null){super(t,e),this.state=ee.NONE,this.enabled=!0,this.target=new H,this.cursor=new H,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Qi.ROTATE,MIDDLE:Qi.DOLLY,RIGHT:Qi.PAN},this.touches={ONE:qi.ROTATE,TWO:qi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new H,this._lastQuaternion=new bi,this._lastTargetPosition=new H,this._quat=new bi().setFromUnitVectors(t.up,new H(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new iu,this._sphericalDelta=new iu,this._scale=1,this._panOffset=new H,this._rotateStart=new Wt,this._rotateEnd=new Wt,this._rotateDelta=new Wt,this._panStart=new Wt,this._panEnd=new Wt,this._panDelta=new Wt,this._dollyStart=new Wt,this._dollyEnd=new Wt,this._dollyDelta=new Wt,this._dollyDirection=new H,this._mouse=new Wt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=B0.bind(this),this._onPointerDown=O0.bind(this),this._onPointerUp=z0.bind(this),this._onContextMenu=q0.bind(this),this._onMouseWheel=G0.bind(this),this._onKeyDown=k0.bind(this),this._onTouchStart=W0.bind(this),this._onTouchMove=X0.bind(this),this._onMouseDown=H0.bind(this),this._onMouseMove=V0.bind(this),this._interceptControlDown=Y0.bind(this),this._interceptControlUp=j0.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ru),this.update(),this.state=ee.NONE}update(t=null){const e=this.object.position;me.copy(e).sub(this.target),me.applyQuaternion(this._quat),this._spherical.setFromVector3(me),this.autoRotate&&this.state===ee.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=Ne:i>Math.PI&&(i-=Ne),r<-Math.PI?r+=Ne:r>Math.PI&&(r-=Ne),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(me.setFromSpherical(this._spherical),me.applyQuaternion(this._quatInverse),e.copy(this.target).add(me),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=me.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new H(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new H(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=me.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Ss.origin.copy(this.object.position),Ss.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ss.direction))<N0?this.object.lookAt(this.target):(su.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ss.intersectPlane(su,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Go||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Go||this._lastTargetPosition.distanceToSquared(this.target)>Go?(this.dispatchEvent(ru),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ne/60*this.autoRotateSpeed*t:Ne/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){me.setFromMatrixColumn(e,0),me.multiplyScalar(-t),this._panOffset.add(me)}_panUp(t,e){this.screenSpacePanning===!0?me.setFromMatrixColumn(e,1):(me.setFromMatrixColumn(e,0),me.crossVectors(this.object.up,me)),me.multiplyScalar(t),this._panOffset.add(me)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;me.copy(r).sub(this.target);let s=me.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/i.clientHeight,this.object.matrix),this._panUp(2*e*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=t-i.left,s=e-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ne*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ne*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Ne*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Ne*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Ne*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Ne*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(i,r)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),s=.5*(t.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ne*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ne*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Wt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function O0(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function B0(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function z0(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Xh),this.state=ee.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function H0(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Qi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ee.DOLLY;break;case Qi.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ee.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ee.ROTATE}break;case Qi.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ee.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ee.PAN}break;default:this.state=ee.NONE}this.state!==ee.NONE&&this.dispatchEvent(xl)}function V0(n){switch(this.state){case ee.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ee.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ee.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function G0(n){this.enabled===!1||this.enableZoom===!1||this.state!==ee.NONE||(n.preventDefault(),this.dispatchEvent(xl),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Xh))}function k0(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function W0(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case qi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ee.TOUCH_ROTATE;break;case qi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ee.TOUCH_PAN;break;default:this.state=ee.NONE}break;case 2:switch(this.touches.TWO){case qi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ee.TOUCH_DOLLY_PAN;break;case qi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ee.TOUCH_DOLLY_ROTATE;break;default:this.state=ee.NONE}break;default:this.state=ee.NONE}this.state!==ee.NONE&&this.dispatchEvent(xl)}function X0(n){switch(this._trackPointer(n),this.state){case ee.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ee.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ee.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ee.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ee.NONE}}function q0(n){this.enabled!==!1&&n.preventDefault()}function Y0(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function j0(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const K0={id:"vr-app"},$0={class:"loader-text"},Z0={__name:"App",setup(n){const t=so(null),e=so(!0),i=so("正在加载全景...");let r,s,o,a,l;function c(){r=new C0,s=new Xe(70,innerWidth/innerHeight,.1,1e3),o=new w0({antialias:!0}),o.setSize(innerWidth,innerHeight),o.setPixelRatio(Math.min(devicePixelRatio,2)),t.value.appendChild(o.domElement),a=new F0(s,o.domElement),a.enableZoom=!0,a.zoomSpeed=.5,a.rotateSpeed=.3,a.enablePan=!1,a.minPolarAngle=0,a.maxPolarAngle=Math.PI,a.target.set(0,0,0),s.position.set(0,0,.1),a.update(),window.addEventListener("resize",()=>{s.aspect=innerWidth/innerHeight,s.updateProjectionMatrix(),o.setSize(innerWidth,innerHeight)}),u()}function u(){requestAnimationFrame(u),a.update(),o.render(r,s)}function h(p){return new Promise((v,x)=>{new U0().load(`./materials/equirect/${p}.jpg`,m=>{m.colorSpace=He,v(m)},void 0,x)})}async function d(p){var v,x;e.value=!0,i.value="正在加载全景...";try{l&&(r.remove(l),(v=l.geometry)==null||v.dispose(),(x=l.material)==null||x.dispose(),l=null);const m=await h(p.id),f=new gl(500,64,64),R=new ml({map:m,side:De});l=new dn(f,R),r.add(l),s.position.set(0,0,.1),a.target.set(0,0,0),a.autoRotate=!0,a.autoRotateSpeed=.5,a.update(),e.value=!1,i.value="",setTimeout(()=>{window.parent.postMessage("intro-ready","*")},5e3)}catch(m){console.error("全景加载失败:",m),i.value="全景加载失败，请重试"}}return ku(async()=>{await Uu(),c();try{const v=await(await fetch("./data/scenes.json")).json();v.length>0?await d(v[0]):i.value="场景数据为空"}catch(p){i.value="数据加载失败",console.error(p)}}),(p,v)=>(Ud(),Fd("div",K0,[Xi("div",{id:"loading",class:Gs({hidden:!e.value})},[v[0]||(v[0]=Xi("div",{class:"spinner"},null,-1)),Xi("div",$0,mu(i.value),1)],2),Xi("div",{id:"pano-container",ref_key:"panoRef",ref:t},null,512)]))}};Ep(Z0).mount("#app");
