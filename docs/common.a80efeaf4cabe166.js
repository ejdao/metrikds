"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{6022:(M,E,h)=>{h.d(E,{c:()=>c});var l=h(9816),d=h(7864),m=h(1898);const c=(s,e)=>{let n,t;const g=(p,u,i)=>{if(typeof document>"u")return;const r=document.elementFromPoint(p,u);r&&e(r)?r!==n&&(v(),f(r,i)):v()},f=(p,u)=>{n=p,t||(t=n);const i=n;(0,l.w)(()=>i.classList.add("ion-activated")),u()},v=(p=!1)=>{if(!n)return;const u=n;(0,l.w)(()=>u.classList.remove("ion-activated")),p&&t!==n&&n.click(),n=void 0};return(0,m.createGesture)({el:s,gestureName:"buttonActiveDrag",threshold:0,onStart:p=>g(p.currentX,p.currentY,d.a),onMove:p=>g(p.currentX,p.currentY,d.b),onEnd:()=>{v(!0),(0,d.h)(),t=void 0}})}},2225:(M,E,h)=>{h.d(E,{g:()=>l});const l=(e,n,t,g,f)=>m(e[1],n[1],t[1],g[1],f).map(v=>d(e[0],n[0],t[0],g[0],v)),d=(e,n,t,g,f)=>f*(3*n*Math.pow(f-1,2)+f*(-3*t*f+3*t+g*f))-e*Math.pow(f-1,3),m=(e,n,t,g,f)=>s((g-=f)-3*(t-=f)+3*(n-=f)-(e-=f),3*t-6*n+3*e,3*n-3*e,e).filter(p=>p>=0&&p<=1),s=(e,n,t,g)=>{if(0===e)return((e,n,t)=>{const g=n*n-4*e*t;return g<0?[]:[(-n+Math.sqrt(g))/(2*e),(-n-Math.sqrt(g))/(2*e)]})(n,t,g);const f=(3*(t/=e)-(n/=e)*n)/3,v=(2*n*n*n-9*n*t+27*(g/=e))/27;if(0===f)return[Math.pow(-v,1/3)];if(0===v)return[Math.sqrt(-f),-Math.sqrt(-f)];const p=Math.pow(v/2,2)+Math.pow(f/3,3);if(0===p)return[Math.pow(v/2,.5)-n/3];if(p>0)return[Math.pow(-v/2+Math.sqrt(p),1/3)-Math.pow(v/2+Math.sqrt(p),1/3)-n/3];const u=Math.sqrt(Math.pow(-f/3,3)),i=Math.acos(-v/(2*Math.sqrt(Math.pow(-f/3,3)))),r=2*Math.pow(u,1/3);return[r*Math.cos(i/3)-n/3,r*Math.cos((i+2*Math.PI)/3)-n/3,r*Math.cos((i+4*Math.PI)/3)-n/3]}},5062:(M,E,h)=>{h.d(E,{i:()=>l});const l=d=>d&&""!==d.dir?"rtl"===d.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},6602:(M,E,h)=>{h.r(E),h.d(E,{startFocusVisible:()=>c});const l="ion-focused",m=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],c=s=>{let e=[],n=!0;const t=s?s.shadowRoot:document,g=s||document.body,f=_=>{e.forEach(a=>a.classList.remove(l)),_.forEach(a=>a.classList.add(l)),e=_},v=()=>{n=!1,f([])},p=_=>{n=m.includes(_.key),n||f([])},u=_=>{if(n&&void 0!==_.composedPath){const a=_.composedPath().filter(w=>!!w.classList&&w.classList.contains("ion-focusable"));f(a)}},i=()=>{t.activeElement===g&&f([])};return t.addEventListener("keydown",p),t.addEventListener("focusin",u),t.addEventListener("focusout",i),t.addEventListener("touchstart",v),t.addEventListener("mousedown",v),{destroy:()=>{t.removeEventListener("keydown",p),t.removeEventListener("focusin",u),t.removeEventListener("focusout",i),t.removeEventListener("touchstart",v),t.removeEventListener("mousedown",v)},setFocus:f}}},2509:(M,E,h)=>{h.d(E,{c:()=>l});const l=s=>{const e=s;let n;return{hasLegacyControl:()=>{if(void 0===n){const g=void 0!==e.label||d(e),f=e.hasAttribute("aria-label")||e.hasAttribute("aria-labelledby")&&null===e.shadowRoot;n=!0===e.legacy||!g&&!f}return n}}},d=s=>null!==s.shadowRoot&&!!(m.includes(s.tagName)&&null!==s.querySelector('[slot="label"]')||c.includes(s.tagName)&&""!==s.textContent),m=["ION-RANGE"],c=["ION-TOGGLE","ION-CHECKBOX","ION-RADIO"]},7864:(M,E,h)=>{h.d(E,{a:()=>c,b:()=>s,c:()=>m,d:()=>n,h:()=>e});const l={getEngine(){var t;const g=window;return g.TapticEngine||(null===(t=g.Capacitor)||void 0===t?void 0:t.isPluginAvailable("Haptics"))&&g.Capacitor.Plugins.Haptics},available(){var t;const g=window;return!!this.getEngine()&&("web"!==(null===(t=g.Capacitor)||void 0===t?void 0:t.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate)},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const g=this.getEngine();if(!g)return;const f=this.isCapacitor()?t.style.toUpperCase():t.style;g.impact({style:f})},notification(t){const g=this.getEngine();if(!g)return;const f=this.isCapacitor()?t.style.toUpperCase():t.style;g.notification({style:f})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},d=()=>l.available(),m=()=>{d()&&l.selection()},c=()=>{d()&&l.selectionStart()},s=()=>{d()&&l.selectionChanged()},e=()=>{d()&&l.selectionEnd()},n=t=>{d()&&l.impact(t)}},7366:(M,E,h)=>{h.d(E,{a:()=>l,b:()=>u,c:()=>n,d:()=>i,e:()=>x,f:()=>e,g:()=>r,h:()=>m,i:()=>d,j:()=>y,k:()=>D,l:()=>t,m:()=>v,n:()=>_,o:()=>f,p:()=>s,q:()=>c,r:()=>o,s:()=>C,t:()=>p,u:()=>a,v:()=>w,w:()=>g});const l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",D="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",x="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},8986:(M,E,h)=>{h.d(E,{I:()=>e,a:()=>f,b:()=>s,c:()=>u,d:()=>r,f:()=>v,g:()=>g,i:()=>t,p:()=>i,r:()=>_,s:()=>p});var l=h(5861),d=h(9397),m=h(1178);const s="ion-content",e=".ion-content-scroll-host",n=`${s}, ${e}`,t=a=>"ION-CONTENT"===a.tagName,g=function(){var a=(0,l.Z)(function*(w){return t(w)?(yield new Promise(o=>(0,d.c)(w,o)),w.getScrollElement()):w});return function(o){return a.apply(this,arguments)}}(),f=a=>a.querySelector(e)||a.querySelector(n),v=a=>a.closest(n),p=(a,w)=>t(a)?a.scrollToTop(w):Promise.resolve(a.scrollTo({top:0,left:0,behavior:w>0?"smooth":"auto"})),u=(a,w,o,y)=>t(a)?a.scrollByPoint(w,o,y):Promise.resolve(a.scrollBy({top:o,left:w,behavior:y>0?"smooth":"auto"})),i=a=>(0,m.b)(a,s),r=a=>{if(t(a)){const o=a.scrollY;return a.scrollY=!1,o}return a.style.setProperty("overflow","hidden"),!0},_=(a,w)=>{t(a)?a.scrollY=w:a.style.removeProperty("overflow")}},9240:(M,E,h)=>{h.d(E,{g:()=>d});var l=h(1178);const d=(c,s,e)=>{const n=null==c?0:c.toString().length,t=m(n,s);if(void 0===e)return t;try{return e(n,s)}catch(g){return(0,l.a)("Exception in provided `counterFormatter`.",g),t}},m=(c,s)=>`${c} / ${s}`},5234:(M,E,h)=>{h.r(E),h.d(E,{KEYBOARD_DID_CLOSE:()=>d,KEYBOARD_DID_OPEN:()=>l,copyVisualViewport:()=>w,keyboardDidClose:()=>i,keyboardDidOpen:()=>p,keyboardDidResize:()=>u,resetKeyboardAssist:()=>n,setKeyboardClose:()=>v,setKeyboardOpen:()=>f,startKeyboardAssist:()=>t,trackViewportChanges:()=>a});const l="ionKeyboardDidShow",d="ionKeyboardDidHide";let c={},s={},e=!1;const n=()=>{c={},s={},e=!1},t=o=>{g(o),o.visualViewport&&(s=w(o.visualViewport),o.visualViewport.onresize=()=>{a(o),p()||u(o)?f(o):i(o)&&v(o)})},g=o=>{o.addEventListener("keyboardDidShow",y=>f(o,y)),o.addEventListener("keyboardDidHide",()=>v(o))},f=(o,y)=>{r(o,y),e=!0},v=o=>{_(o),e=!1},p=()=>!e&&c.width===s.width&&(c.height-s.height)*s.scale>150,u=o=>e&&!i(o),i=o=>e&&s.height===o.innerHeight,r=(o,y)=>{const C=new CustomEvent(l,{detail:{keyboardHeight:y?y.keyboardHeight:o.innerHeight-s.height}});o.dispatchEvent(C)},_=o=>{const y=new CustomEvent(d);o.dispatchEvent(y)},a=o=>{c=Object.assign({},s),s=w(o.visualViewport)},w=o=>({width:Math.round(o.width),height:Math.round(o.height),offsetTop:o.offsetTop,offsetLeft:o.offsetLeft,pageTop:o.pageTop,pageLeft:o.pageLeft,scale:o.scale})},9852:(M,E,h)=>{h.d(E,{c:()=>d});var l=h(3457);const d=m=>{let c,s,e;const n=()=>{c=()=>{e=!0,m&&m(!0)},s=()=>{e=!1,m&&m(!1)},null==l.w||l.w.addEventListener("keyboardWillShow",c),null==l.w||l.w.addEventListener("keyboardWillHide",s)};return n(),{init:n,destroy:()=>{null==l.w||l.w.removeEventListener("keyboardWillShow",c),null==l.w||l.w.removeEventListener("keyboardWillHide",s),c=s=void 0},isKeyboardVisible:()=>e}}},7741:(M,E,h)=>{h.d(E,{S:()=>d});const d={bubbles:{dur:1e3,circles:9,fn:(m,c,s)=>{const e=m*c/s-m+"ms",n=2*Math.PI*c/s;return{r:5,style:{top:9*Math.sin(n)+"px",left:9*Math.cos(n)+"px","animation-delay":e}}}},circles:{dur:1e3,circles:8,fn:(m,c,s)=>{const e=c/s,n=m*e-m+"ms",t=2*Math.PI*e;return{r:5,style:{top:9*Math.sin(t)+"px",left:9*Math.cos(t)+"px","animation-delay":n}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(m,c)=>({r:6,style:{left:9-9*c+"px","animation-delay":-110*c+"ms"}})},lines:{dur:1e3,lines:8,fn:(m,c,s)=>({y1:14,y2:26,style:{transform:`rotate(${360/s*c+(c<s/2?180:-180)}deg)`,"animation-delay":m*c/s-m+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(m,c,s)=>({y1:12,y2:20,style:{transform:`rotate(${360/s*c+(c<s/2?180:-180)}deg)`,"animation-delay":m*c/s-m+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(m,c,s)=>({y1:17,y2:29,style:{transform:`rotate(${30*c+(c<6?180:-180)}deg)`,"animation-delay":m*c/s-m+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(m,c,s)=>({y1:12,y2:20,style:{transform:`rotate(${30*c+(c<6?180:-180)}deg)`,"animation-delay":m*c/s-m+"ms"}})}}},7135:(M,E,h)=>{h.r(E),h.d(E,{createSwipeBackGesture:()=>s});var l=h(9397),d=h(5062),m=h(1898);h(4349);const s=(e,n,t,g,f)=>{const v=e.ownerDocument.defaultView;let p=(0,d.i)(e);const i=o=>p?-o.deltaX:o.deltaX;return(0,m.createGesture)({el:e,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:o=>(p=(0,d.i)(e),(o=>{const{startX:D}=o;return p?D>=v.innerWidth-50:D<=50})(o)&&n()),onStart:t,onMove:o=>{const D=i(o)/v.innerWidth;g(D)},onEnd:o=>{const y=i(o),D=v.innerWidth,C=y/D,x=(o=>p?-o.velocityX:o.velocityX)(o),O=x>=0&&(x>.2||y>D/2),S=(O?1-C:C)*D;let L=0;if(S>5){const T=S/Math.abs(x);L=Math.min(T,540)}f(O,C<=0?.01:(0,l.l)(0,C,.9999),L)}})}},2798:(M,E,h)=>{h.d(E,{d:()=>g,m:()=>f});var l=h(5861),d=h(3200),m=h(1135),c=h(3905),s=h(8505),e=h(2523),n=h(1460),t=h(4650);let g=(()=>{class v extends n.E{constructor(){super(...arguments),this._entidades=new m.X([]),this._entidades$=this._entidades.asObservable()}suggestions(u){var i=this;return(0,l.Z)(function*(){try{const r=yield i._suggestions(u);return d.HT.right(r)}catch{return d.HT.left(!1)}})()}evaluar(u,i){var r=this;return(0,l.Z)(function*(){try{const _=yield r._evaluar(u,i);return d.HT.right(_)}catch{return d.HT.left(!1)}})()}create(u){var i=this;return(0,l.Z)(function*(){try{const r=yield i._create(u);return d.HT.right(r)}catch{return d.HT.left(!1)}})()}fetch(u,i){var r=this;return(0,l.Z)(function*(){try{const _=yield r._fetch(u,i);return d.HT.right(_)}catch{return d.HT.left(!1)}})()}observable(){return this._entidades$}_create(u){var i=this;return(0,l.Z)(function*(){return(0,c.z)(i._http.post(`${e.b.V1.ENTIDADES}`,u).pipe((0,s.b)(r=>{r.min_time_last_eva_valid=!0,i._entidades.value.unshift(r),i._entidades.next(i._entidades.value)})))})()}_evaluar(u,i){var r=this;return(0,l.Z)(function*(){return(0,c.z)(r._http.post(`${e.b.V1.EVALUACIONES}`,{tipo_id:i,entidad_id:u.id}).pipe((0,s.b)(_=>{_&&(r._entidades.value.map(a=>{a.id===u.id&&(a.fecha_ultima_evaluacion=(new Date).toISOString()),a.min_time_last_eva_valid=!0,a.fecha_ultima_evaluacion&&new Date-new Date(a.fecha_ultima_evaluacion)<432e6&&(a.min_time_last_eva_valid=!1)}),r._entidades.next(r._entidades.value))})))})()}_fetch(u,i){var r=this;return(0,l.Z)(function*(){if(!i&&r._entidades.value.length)return r._entidades.value;const _=[];return u.map(a=>{_.push(a)}),(0,c.z)(r._http.get(`${e.b.V1.ENTIDADES}`,{params:{t:_}}).pipe((0,s.b)(a=>{a.map(w=>{w.min_time_last_eva_valid=!0,w.fecha_ultima_evaluacion&&new Date-new Date(w.fecha_ultima_evaluacion)<432e6&&(w.min_time_last_eva_valid=!1)}),r._entidades.next(a)})))})()}_suggestions(u){var i=this;return(0,l.Z)(function*(){return(0,c.z)(i._http.get(`${e.b.V1.ENTIDADES}suggestions/${u}`).pipe())})()}}return v.\u0275fac=function(){let p;return function(i){return(p||(p=t.n5z(v)))(i||v)}}(),v.\u0275prov=t.Yz7({token:v,factory:v.\u0275fac,providedIn:"root"}),v})(),f=(()=>{class v extends n.E{constructor(){super(...arguments),this._entidades=new m.X([]),this._entidades$=this._entidades.asObservable()}suggestions(u,i){var r=this;return(0,l.Z)(function*(){try{const _=yield r._suggestions(u,i);return d.HT.right(_)}catch{return d.HT.left(!1)}})()}evaluar(u,i){var r=this;return(0,l.Z)(function*(){try{const _=yield r._evaluar(u,i);return d.HT.right(_)}catch{return d.HT.left(!1)}})()}create(u){var i=this;return(0,l.Z)(function*(){try{const r=yield i._create(u);return d.HT.right(r)}catch{return d.HT.left(!1)}})()}fetch(u,i){var r=this;return(0,l.Z)(function*(){try{const _=yield r._fetch(u,i);return d.HT.right(_)}catch{return d.HT.left(!1)}})()}observable(){return this._entidades$}_create(u){var i=this;return(0,l.Z)(function*(){return(0,c.z)(i._http.post(`${e.b.V1.ENTIDADES}`,u).pipe((0,s.b)(r=>{r.min_time_last_eva_valid=!0,i._entidades.value.unshift(r),i._entidades.next(i._entidades.value)})))})()}_evaluar(u,i){var r=this;return(0,l.Z)(function*(){return i.entidad_id=u.id,console.log(i),(0,c.z)(r._http.post(`${e.b.V1.EVALUACIONES}`,i).pipe((0,s.b)(_=>{_&&(r._entidades.value.map(a=>{a.id===u.id&&(a.fecha_ultima_evaluacion=(new Date).toISOString()),a.min_time_last_eva_valid=!0,a.fecha_ultima_evaluacion&&new Date-new Date(a.fecha_ultima_evaluacion)<432e6&&(a.min_time_last_eva_valid=!1)}),r._entidades.next(r._entidades.value))})))})()}_fetch(u,i){var r=this;return(0,l.Z)(function*(){if(!i&&r._entidades.value.length)return r._entidades.value;const _=[];return u.map(a=>{_.push(a)}),(0,c.z)(r._http.get(`${e.b.V1.ENTIDADES}`,{params:_}).pipe((0,s.b)(a=>{a.map(w=>{w.min_time_last_eva_valid=!0,w.fecha_ultima_evaluacion&&new Date-new Date(w.fecha_ultima_evaluacion)<432e6&&(w.min_time_last_eva_valid=!1)}),r._entidades.next(a)})))})()}_suggestions(u,i){var r=this;return(0,l.Z)(function*(){return(0,c.z)(r._http.get(`${e.b.V1.ENTIDADES}/suggestions/${u}/${i}`).pipe())})()}}return v.\u0275fac=function(){let p;return function(i){return(p||(p=t.n5z(v)))(i||v)}}(),v.\u0275prov=t.Yz7({token:v,factory:v.\u0275fac,providedIn:"root"}),v})()}}]);