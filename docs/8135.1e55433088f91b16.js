(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8135],{4327:function(x,A){var f,y;void 0!==(y="function"==typeof(f=function(){"use strict";function _(o,s,h){var a=new XMLHttpRequest;a.open("GET",o),a.responseType="blob",a.onload=function(){w(a.response,s,h)},a.onerror=function(){console.error("could not download file")},a.send()}function S(o){var s=new XMLHttpRequest;s.open("HEAD",o,!1);try{s.send()}catch{}return 200<=s.status&&299>=s.status}function M(o){try{o.dispatchEvent(new MouseEvent("click"))}catch{var s=document.createEvent("MouseEvents");s.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),o.dispatchEvent(s)}}var c="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,T=c.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),w=c.saveAs||("object"!=typeof window||window!==c?function(){}:"download"in HTMLAnchorElement.prototype&&!T?function(o,s,h){var a=c.URL||c.webkitURL,l=document.createElement("a");l.download=s=s||o.name||"download",l.rel="noopener","string"==typeof o?(l.href=o,l.origin===location.origin?M(l):S(l.href)?_(o,s,h):M(l,l.target="_blank")):(l.href=a.createObjectURL(o),setTimeout(function(){a.revokeObjectURL(l.href)},4e4),setTimeout(function(){M(l)},0))}:"msSaveOrOpenBlob"in navigator?function(o,s,h){if(s=s||o.name||"download","string"!=typeof o)navigator.msSaveOrOpenBlob(function m(o,s){return typeof s>"u"?s={autoBom:!1}:"object"!=typeof s&&(console.warn("Deprecated: Expected third argument to be a object"),s={autoBom:!s}),s.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(o.type)?new Blob(["\ufeff",o],{type:o.type}):o}(o,h),s);else if(S(o))_(o,s,h);else{var a=document.createElement("a");a.href=o,a.target="_blank",setTimeout(function(){M(a)})}}:function(o,s,h,a){if((a=a||open("","_blank"))&&(a.document.title=a.document.body.innerText="downloading..."),"string"==typeof o)return _(o,s,h);var l="application/octet-stream"===o.type,j=/constructor/i.test(c.HTMLElement)||c.safari,k=/CriOS\/[\d]+/.test(navigator.userAgent);if((k||l&&j||T)&&typeof FileReader<"u"){var L=new FileReader;L.onloadend=function(){var D=L.result;D=k?D:D.replace(/^data:[^;]*;/,"data:attachment/file;"),a?a.location.href=D:location=D,a=null},L.readAsDataURL(o)}else{var I=c.URL||c.webkitURL,O=I.createObjectURL(o);a?a.location=O:location.href=O,a=null,setTimeout(function(){I.revokeObjectURL(O)},4e4)}});c.saveAs=w.saveAs=w,x.exports=w})?f.apply(A,[]):f)&&(x.exports=y)},3905:(x,A,f)=>{"use strict";f.d(A,{z:()=>m});var b=f(6805),y=f(930);function m(_,S){const M="object"==typeof S;return new Promise((c,T)=>{const w=new y.Hp({next:o=>{c(o),w.unsubscribe()},error:T,complete:()=>{M?c(S.defaultValue):T(new b.K)}});_.subscribe(w)})}},3200:(x,A,f)=>{"use strict";f.d(A,{BS:()=>l,C1:()=>s,HT:()=>N,I8:()=>_,X1:()=>h});var b=f(4650),m=(f(4327),f(4006));let _=(()=>{class e{belongsToSameMonth(n,r){return n.toISOString().split("T")[0].split("-").slice(0,2).toString()===r.toISOString().split("T")[0].split("-").slice(0,2).toString()}firstDayOfMonth(n=new Date){return new Date(n.getFullYear(),n.getMonth(),1)}lastDayOfMonth(n=new Date){return new Date(n.getFullYear(),n.getMonth()+1,0)}belongsToActualMonth(n){const r=new Date;return`${r.getMonth()+1}-${r.getFullYear()}`==`${n.getMonth()+1}-${n.getFullYear()}`}belongsToPreviousMonth(n){const r=new Date((new Date).setMonth((new Date).getMonth()-1));return`${r.getMonth()+1}-${r.getFullYear()}`==`${n.getMonth()+1}-${n.getFullYear()}`}daysInMonth(n=new Date){return new Date(n.getFullYear(),n.getMonth()+1,0).getDate()}diffInDays(n,r){return(r-n)/864e5}olderThanToday(n){return n>new Date}get dateForFiles(){return this._dateForFiles()}_dateForFiles(){const n=(new Date-1).toString();return n.slice(n.length-7)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=b.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const s=m.kI.required,h=m.kI.pattern(/^[0-9]+$/),l=(m.kI.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$/),e=>m.kI.maxLength(e));function v(e,t,n="s",r){return{value:e,label:`${t}(${n})`,single:t,plural:r=r||`${t}${n}`}}function g(e){return typeof e<"u"&&null!==e}v(31536e6,"a\xf1o"),v(2592e6,"mes","es"),v(6048e5,"semana"),v(864e5,"d\xeda","s","dias"),v(36e5,"hora"),v(6e4,"minuto"),v(1e3,"segundo");class q extends Error{constructor(t,n){super(""),this._element=t,this._index=n}get element(){return this._element}get index(){return this._index}}class F{constructor(){}static build(t){return g(t)?this.of(t):this.empty()}static of(t){if(g(t))return new se(t);throw new Error("The passed value was null or undefined.")}static empty(){return new ie}}class se extends F{constructor(t){super(),this.value=t}isPresent(){return!0}isEmpty(){return!1}get(){return this.value}}class ie extends F{isPresent(){return!1}isEmpty(){return!0}get(){throw new Error("The optional is not present.")}}const Q=e=>{const{left:t,right:n}=e;if(g(n)&&g(t))throw new Error("Received both left and right values at runtime");if(g(t))return t;if(g(n))return n;throw new Error("Received no left or right values at runtime when opening Either")};class N{constructor(t){this.value=t}fold(t){return this._unwrap(t)}promise(t){return Promise.resolve(this.fold(t))}optional(t){return F.build(this.fold(t))}_unwrap(t){return g(this.value.right)&&t.right?t.right(Q(this.value)):(e=>g(this.value.left))()&&t.left?t.left(Q(this.value)):void 0}static left(t){return new N({left:t})}static right(t){return new N({right:t})}}}}]);