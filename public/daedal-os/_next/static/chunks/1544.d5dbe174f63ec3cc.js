"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1544],{918:function(e,t,i){i.d(t,{BS:function(){return l},FC:function(){return o},F_:function(){return n},wV:function(){return r}});let n={bottom:!1,bottomLeft:!1,bottomRight:!1,left:!1,right:!1,top:!1,topLeft:!1,topRight:!1},o={bottom:!0,bottomLeft:!0,bottomRight:!0,left:!0,right:!0,top:!0,topLeft:!0,topRight:!0},r=30,l=166,s={cancel:".cancel",dragHandleClassName:"handle",enableUserSelectHack:!1,minHeight:`${r}px`,minWidth:`${l}px`,resizeHandleStyles:{bottom:{bottom:"-3px",cursor:"ns-resize",height:"6px"},bottomLeft:{bottom:"-3px",cursor:"nesw-resize",height:"12px",left:"-3px",width:"12px"},bottomRight:{bottom:"-3px",cursor:"nwse-resize",height:"12px",right:"-3px",width:"12px"},left:{cursor:"ew-resize",left:"-3px",width:"6px"},right:{cursor:"ew-resize",right:"-3px",width:"6px"},top:{cursor:"ns-resize",height:"6px",top:"-3px"},topLeft:{cursor:"nwse-resize",height:"12px",left:"-3px",top:"-3px",width:"12px"},topRight:{cursor:"nesw-resize",height:"12px",right:"-3px",top:"-3px",width:"12px"}}};t.ZP=s},67364:function(e,t,i){i.d(t,{J6:function(){return s},Tw:function(){return a},bJ:function(){return l},dO:function(){return r}});var n=i(85893),o=i(67294);let r=(0,o.memo)(()=>(0,n.jsx)("svg",{viewBox:"0 0 10 1",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M0 0h10v1H0z"})})),l=(0,o.memo)(()=>(0,n.jsx)("svg",{viewBox:"0 0 10 10",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M0 0v10h10V0H0zm1 1h8v8H1V1z"})})),s=(0,o.memo)(()=>(0,n.jsx)("svg",{viewBox:"0 0 10 10",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M2.1 0v2H0v8.1h8.2v-2h2V0H2.1zm5.1 9.2H1.1V3h6.1v6.2zm2-2.1h-1V2H3.1V1h6.1v6.1z"})})),a=(0,o.memo)(()=>(0,n.jsx)("svg",{viewBox:"0 0 10 10",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M10.2.7L9.5 0 5.1 4.4.7 0 0 .7l4.4 4.4L0 9.5l.7.7 4.4-4.4 4.4 4.4.7-.7-4.4-4.4z"})}))},64146:function(e,t,i){i.d(t,{Z:function(){return u}});var n=i(67294),o=i(23561),r=i(7502),l=i(58437),s=i(97836),a=i(76488),u=e=>{let{contextMenu:t}=(0,r.H)(),{onClose:i,onMaximize:u,onMinimize:c}=(0,o.Z)(e),{processes:{[e]:A}}=(0,l.z)(),{setForegroundId:d}=(0,a.k)(),{allowResizing:h=!0,componentWindow:g,hideMaximizeButton:p,hideMinimizeButton:m,maximized:f,minimized:v}=A||{},x=(0,n.useCallback)(()=>{d(e),null==g||g.focus(s.eS)},[g,e,d]);return(0,n.useMemo)(()=>null==t?void 0:t(()=>{let e=f||v,t=!p||!m;return[t&&{action:()=>{v?c():u(),x()},disabled:!e,icon:e?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAOklEQVR4AWMYVmA2BiBN/6JFi3DKrcUAEEGcGnZiAIggTg1HwQCNDSSpp+H8hQtoiECAXMcADMMbAABMtF75qvi0qwAAAABJRU5ErkJggg==":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAJElEQVR42mNABaPA09PzPzZMsaFk20x/A2D8gTIAE9Mp+kYBAJPzT5+OMe9rAAAAAElFTkSuQmCC",label:"Restore"},!m&&{action:c,disabled:v,icon:v?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGElEQVR42mMYPGAUjAJPT8//+DCNDRgFAPTaHaFVv24VAAAAAElFTkSuQmCC":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAIUlEQVR42mMYPGAUjIIDBw78x4cJGnDu3Ln/+DB+3aMAAPFzNUFuAVJEAAAAAElFTkSuQmCC",label:"Minimize"},!p&&{action:()=>{u(),x()},disabled:e||!h,icon:e?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAHklEQVR42mOgEhgFnp6e//Fh+hmALj5UDBj4QBwFANQKUXn4YyGJAAAAAElFTkSuQmCC":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAR0lEQVR42u3IoRHAMAzFUO+/gllKG5IgD2DujX4vC8ikMO9ORHb9xN1FWWc8Q5R15jt1gs/22jrBZxGhE3yWmaKsU1Wi7EIfHneIsXEKuhAAAAAASUVORK5CYII=",label:"Maximize"},t&&s.Os,{action:i,icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAMElEQVR4AWMgEoyC2TCAwsYPFqMCouzZCQPEOmzvnj0QRJTqo6iAgOoLMIDCHsYAACjTO7/gCQlBAAAAAElFTkSuQmCC",label:"Close"}].filter(Boolean)}),[h,t,x,p,m,f,v,i,u,c])}},23561:function(e,t,i){var n=i(67294),o=i(67318),r=i(58437),l=i(76488),s=i(86178),a=i(97836);t.Z=e=>{let t=(0,o.Z)(e),{setForegroundId:i,removeFromStack:u}=(0,l.k)(),{closeWithTransition:c,maximize:A,minimize:d}=(0,r.z)(),h=(0,s.R)(),g=(0,n.useCallback)(()=>{d(e),i(t)},[e,d,t,i]),p=(0,n.useCallback)(()=>{var t,i;A(e),null===(i=h.current[e])||void 0===i||null===(t=i.componentWindow)||void 0===t||t.focus(a.eS)},[e,A,h]);return{onClose:(0,n.useCallback)(()=>{u(e),c(e),i(t)},[c,e,t,u,i]),onMaximize:p,onMinimize:g}}},38365:function(e,t,i){i.d(t,{Rf:function(){return s},b$:function(){return c},hu:function(){return l},ix:function(){return u},mZ:function(){return a}});var n=i(918),o=i(97836),r=i(6484);let l=(e,t,i=[],n=0)=>{let[l]=e.split(o.CC),s=`${l}${o.CC}`,a=i.find(e=>e.startsWith(s))||"",{componentWindow:u}=(null==t?void 0:t[a])||{},{x:c=0,y:A=0,width:d=0,height:h=0}=(null==u?void 0:u.getBoundingClientRect())||{};return!(c+n+d>(0,r.E9)()||A+n+h>(0,r.sI)())&&(c||A)?{x:c+n,y:A+n}:void 0},s=({height:e,width:t})=>{let[i,n]=[(0,r.sI)(),(0,r.E9)()];return{x:Math.floor(n/2-(0,r.Vy)(t)/2),y:Math.floor((i-o.bK)/2-(0,r.Vy)(e)/2)}},a={BOTTOM:15,LEFT:150,RIGHT:50,TOP:15},u=(e,t,i=!1)=>{let{position:n,size:o}=e||{},{x:l=0,y:s=0}=n||{},{height:u=0,width:c=0}=o||{};return i?l+a.RIGHT>t.x||l+(0,r.Vy)(c)-a.LEFT<0||s+a.BOTTOM>t.y||s+a.TOP<0:l<0||s<0||l+(0,r.Vy)(c)>t.x||s+(0,r.Vy)(u)>t.y},c=(e,t)=>{let i=Number(e.height),l=Number(e.width),[s,a]=[(0,r.sI)(),(0,r.E9)()],u=s-o.bK,c=Math.max(n.wV,Math.min(i,u)),A=Math.max(n.BS,Math.min(l,a));if(!t)return{height:c,width:A};let d=i===c,h=l===A;return d||h?d?h?{height:c,width:A}:{height:Math.round(c/(l/A)),width:A}:{height:c,width:Math.round(A/(i/c))}:i>l?{height:c,width:Math.round(A/(u/c))}:{height:Math.round(c/(a/A)),width:A}}},61544:function(e,t,i){i.r(t),i.d(t,{default:function(){return Z}});var n=i(85893),o=i(67294),r=i(10508);let l=r.ZP.div(["background-color:inherit;height:inherit;width:inherit;"]);var s=i(42663),a=i(918),u=i(58437),c=e=>{let{processes:t}=(0,u.z)(),{maximized:i=!1,minimized:n=!1}=t[e]||{},r=(0,o.useRef)(!1);return(0,o.useEffect)(()=>{r.current=!!(i||n)},[i,n]),r},A=i(38365),d=i(76488),h=i(6484),g=(e,t)=>{let{sizes:{window:{cascadeOffset:i}}}=(0,r.Fg)(),{processes:n}=(0,u.z)(),{autoSizing:l,closing:s,componentWindow:a,initialRelativePosition:g}=n[e]||{},{stackOrder:p,windowStates:{[e]:m}={}}=(0,d.k)(),{position:f,size:v}=m||{},x=(0,o.useMemo)(()=>(0,A.ix)(m,(0,h.mE)()),[m]),[w,b]=(0,o.useState)(()=>!x&&f||(0,A.hu)(e,n,p,i)||(0,A.Rf)(t)),C=c(e);return(0,o.useEffect)(()=>{let e=()=>{let e=(0,h.mE)();(0,A.ix)({position:w,size:t},e,!0)&&b(({x:t,y:i})=>{let n=e.x-A.mZ.RIGHT,o=e.y-A.mZ.BOTTOM;return{x:t>n?n:t,y:i>o?o:i}})};return window.addEventListener("resize",e,{passive:!0}),()=>window.removeEventListener("resize",e)},[w,t]),(0,o.useLayoutEffect)(()=>{!l||s||!v||f||C.current||b((0,A.Rf)(v))},[l,C,s,f,v]),(0,o.useLayoutEffect)(()=>{g&&a&&t&&b((0,h.rB)(a,g,t))},[a,g,t]),[w,b]},p=i(97836),m=e=>{let{processes:{[e]:t}={}}=(0,u.z)(),{defaultSize:i}=t||{},{sizes:{titleBar:n}}=(0,r.Fg)();return(0,o.useMemo)(()=>i?{height:Number(i.height)+n.height,width:i.width}:p.i9,[i,n.height])},f=(e,t=!1)=>{let i=m(e),{windowStates:{[e]:{size:n=i}={}}={}}=(0,d.k)(),{processes:{[e]:{lockAspectRatio:r=!1}={}}}=(0,u.z)(),[l,s]=(0,o.useState)(()=>(0,A.b$)(n,r)),a=c(e);return(0,o.useLayoutEffect)(()=>{t&&!a.current&&s((0,A.b$)(n,r))},[t,a,r,n]),[l,s]};let v=(e=!0)=>document.querySelectorAll("iframe").forEach(t=>{t.style.pointerEvents=e?"initial":"none"});var x=e=>{let{processes:{[e]:{allowResizing:t=!0,autoSizing:i=!1,lockAspectRatio:n=!1,maximized:r=!1}={}}}=(0,u.z)(),{setWindowStates:l}=(0,d.k)(),[s,c]=f(e,i),[p,m]=g(e,s),x=(0,o.useCallback)((t,{x:i,y:n})=>{v();let o={x:i,y:n};(0,A.ix)({position:o,size:s},(0,h.mE)(),!0)||(m(o),l(t=>({...t,[e]:{...t[e],position:o}})))},[e,m,l,s]),w=(0,o.useCallback)((t,i,{style:{height:n,width:o}},r,s)=>{v();let a={height:(0,h.Vy)(n),width:(0,h.Vy)(o)};c(a),m(s),l(t=>({...t,[e]:{...t[e],position:s,size:a}}))},[e,m,c,l]),b=(0,o.useCallback)(()=>v(!1),[]),C=(0,o.useMemo)(()=>t&&!r?a.FC:a.F_,[t,r]);return{disableDragging:r,enableResizing:C,lockAspectRatio:n,onDragStart:b,onDragStop:x,onResizeStart:b,onResizeStop:w,position:p,size:s,...a.ZP}};let w=e=>t=>{null==t||t.setAttribute("tabindex",p.LL.tabIndex.toString()),null==t||t.addEventListener("contextmenu",h.nK),null==t||t.addEventListener("mousedown",t=>{t.preventDefault(),null==e||e.focus(p.eS)})};var b=({children:e,id:t,zIndex:i})=>{let{linkElement:r,processes:{[t]:l}}=(0,u.z)(),{Component:a,componentWindow:c,maximized:A,minimized:d}=l||{},h=(0,o.useRef)(null),g=x(t),p=(0,o.useMemo)(()=>({pointerEvents:d?"none":void 0,zIndex:i}),[d,i]),m=(0,o.useCallback)(e=>{var i,n;h.current=e;let[o]=(null==e?void 0:null===(n=e.resizableElement)||void 0===n?void 0:null===(i=n.current)||void 0===i?void 0:i.children)||[];a&&!c&&o&&r(t,"componentWindow",o)},[a,c,t,r]);return(0,o.useEffect)(()=>{if(!A){var e,t;let{current:i}=h,[n,o]=(null==i?void 0:null===(t=i.resizableElement)||void 0===t?void 0:null===(e=t.current)||void 0===e?void 0:e.children)||[];[...(null==o?void 0:o.children)||[]].forEach(w(n))}},[A]),(0,n.jsx)(s.s,{ref:m,style:p,...g,children:e})},C=i(8897);let z=(0,r.ZP)(C.m.section)(["background-color:",";box-shadow:",";contain:strict;height:100%;outline:",";overflow:hidden;position:absolute;width:100%;header + *{height:",";}"],({$backgroundColor:e,theme:t})=>e||t.colors.window.background,({$isForeground:e,theme:t})=>e?t.colors.window.shadow:t.colors.window.shadowInactive,({$isForeground:e,theme:t})=>`${t.sizes.window.outline} solid ${e?t.colors.window.outline:t.colors.window.outlineInactive}`,({theme:e})=>`calc(100% - ${e.sizes.titleBar.height}px)`),E=({$foreground:e,theme:t})=>e?`1px solid ${t.colors.titleBar.background}`:`1px solid ${t.colors.titleBar.backgroundInactive}`,B=r.ZP.header(["background-color:",";border-bottom:",";display:flex;height:","px;position:relative;top:0;z-index:2;> button{align-items:center;color:",";display:flex;flex-grow:1;font-size:",";font-weight:400;min-width:0;figure{align-items:center;display:flex;margin-left:8px;min-width:inherit;pointer-events:none;position:relative;top:-1px;picture{height:",";margin-right:",";width:",";}img,picture{pointer-events:all;}figcaption{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}}}nav{display:flex;button{border-left:",";box-sizing:content-box;display:flex;place-content:center;place-items:center;width:",";svg{fill:",";margin:0 1px 2px 0;width:",";}&.minimize{svg{margin-bottom:1px;margin-right:0;}}&:hover{background-color:",";svg{fill:",";}&.close{background-color:",";transition:background-color 0.25s ease;}}&:active{background-color:rgb(51,51,51);&.close{background-color:rgb(139,10,20);}}&:disabled{svg{fill:",";}&:hover{background-color:inherit;}}}}"],({$foreground:e,theme:t})=>e?t.colors.titleBar.background:t.colors.titleBar.backgroundInactive,E,({theme:e})=>e.sizes.titleBar.height,({$foreground:e,theme:t})=>e?t.colors.titleBar.text:t.colors.titleBar.textInactive,({theme:e})=>e.sizes.titleBar.fontSize,({theme:e})=>e.sizes.titleBar.iconSize,({theme:e})=>e.sizes.titleBar.iconMarginRight,({theme:e})=>e.sizes.titleBar.iconSize,E,({theme:e})=>e.sizes.titleBar.buttonWidth,({$foreground:e,theme:t})=>e?t.colors.titleBar.text:t.colors.titleBar.buttonInactive,({theme:e})=>e.sizes.titleBar.buttonIconWidth,({theme:e})=>e.colors.titleBar.backgroundHover,({theme:e})=>e.colors.titleBar.text,({theme:e})=>e.colors.titleBar.closeHover,({$foreground:e})=>e?"rgb(50, 50, 50)":"rgb(60, 60, 60)");var k=i(67364),R=i(64146),M=i(23561),S=i(7502),y=i(24645),j=i(67278),O=i(46581),V=(0,o.memo)(({id:e})=>{let{processes:{[e]:t}}=(0,u.z)(),{allowResizing:i=!0,closing:r,componentWindow:l,hideMaximizeButton:s,hideMinimizeButton:c,hideTitlebarIcon:A,icon:g,title:m,maximized:f}=t||{},{foregroundId:v}=(0,d.k)(),x=e===v,{onClose:w,onMaximize:b,onMinimize:C}=(0,M.Z)(e),z=(0,y.Z)(w),E=(0,y.Z)(b),{menu:V,setMenu:T}=(0,S.H)(),I=(0,R.Z)(e),Z=(0,o.useRef)(0),L=(0,o.useRef)(),F=(0,o.useRef)(),Q=(0,o.useCallback)(e=>{let{x:t,y:i}=(null==l?void 0:l.getBoundingClientRect())||{};Date.now()-Z.current>=p.XX&&L.current&&L.current.x===t&&L.current.y===i&&I.onContextMenuCapture(Object.assign(e,{touches:F.current}))},[l,I]),N=(0,o.useCallback)(({touches:e})=>{l&&(l.blur(),l.focus(p.eS),Z.current=Date.now(),L.current=l.getBoundingClientRect(),F.current=e)},[l]);return(0,n.jsxs)(B,{$foreground:x,className:a.ZP.dragHandleClassName,onDragOver:h.nK,onDrop:h.nK,...I,children:[(0,n.jsx)(j.Z,{...s||!i||r?{}:E,onMouseDownCapture:({button:e})=>{0===e&&Object.keys(V).length>0&&T(Object.create(null))},onMouseUpCapture:()=>{l&&l!==document.activeElement&&l.focus(p.eS)},onTouchEndCapture:Q,onTouchStartCapture:N,children:(0,n.jsxs)("figure",{children:[!A&&(0,n.jsx)(O.Z,{alt:m,imgSize:16,src:g,...z}),(0,n.jsx)("figcaption",{children:m})]})}),(0,n.jsxs)("nav",{className:"cancel",children:[!c&&(0,n.jsx)(j.Z,{className:"minimize",onClick:C,...(0,h.PS)("Minimize"),children:(0,n.jsx)(k.dO,{})}),!s&&(0,n.jsx)(j.Z,{className:"maximize",disabled:!i,onClick:b,...(0,h.PS)(f?"Restore Down":"Maximize"),children:f?(0,n.jsx)(k.J6,{}):(0,n.jsx)(k.bJ,{})}),(0,n.jsx)(j.Z,{$short:s&&c,className:"close",onClick:w,...(0,h.PS)("Close"),children:(0,n.jsx)(k.Tw,{})})]})]})}),T=i(45032),I=i(85738),Z=({children:e,id:t})=>{let{linkElement:i,processes:{[t]:r}}=(0,u.z)(),{backgroundColor:s,Component:a,hideTitlebar:c,peekElement:A}=r||{},{foregroundId:h}=(0,d.k)(),g=t===h,{zIndex:p,...m}=(0,T.Z)(t),f=(0,I.Z)(t),v=(0,o.useCallback)(e=>{a&&!A&&e&&i(t,"peekElement",e)},[a,t,i,A]);return(0,n.jsx)(b,{id:t,zIndex:p,children:(0,n.jsx)(z,{$backgroundColor:s,$isForeground:g,...m,...f,children:(0,n.jsxs)(l,{ref:v,children:[!c&&(0,n.jsx)(V,{id:t}),e]})})})}},45032:function(e,t,i){var n=i(67294),o=i(58437),r=i(76488),l=i(97836);t.Z=(e,t)=>{let{foregroundId:i,prependToStack:s,setForegroundId:a,stackOrder:u=[]}=(0,r.k)(),{processes:{[e]:c}}=(0,o.z)(),{closing:A,componentWindow:d,minimized:h,taskbarEntry:g,url:p}=c||{},m=(0,n.useMemo)(()=>u.length+(h?1:-u.indexOf(e))+1,[e,h,u]),f=(0,n.useCallback)(i=>{var n;let{relatedTarget:o}=i,r=o===g,s=o&&(null==g?void 0:null===(n=g.previousSibling)||void 0===n?void 0:n.contains(o)),u=o&&(null==d?void 0:d.contains(o));a(n=>{if(n===e&&!r&&!u){if(s)null==d||d.focus(l.eS);else{var o;null==t||null===(o=t.onBlurCapture)||void 0===o||o.call(t,i)}return s?n:""}return n})},[t,d,e,a,g]),v=(0,n.useCallback)(i=>{let{relatedTarget:n}=i||{};if(null==d?void 0:d.contains(document.activeElement))s(e),a(e);else if(!n||document.activeElement===g){var o;null==d||d.focus(l.eS),null==t||null===(o=t.onFocusCapture)||void 0===o||o.call(t,i)}},[t,d,e,s,a,g]);return(0,n.useLayoutEffect)(()=>{e===i&&v()},[i,e,v]),(0,n.useLayoutEffect)(()=>{!d||A||h||a(e)},[A,d,e,h,a,p]),(0,n.useMemo)(()=>({onBlurCapture:f,onClickCapture:v,onFocusCapture:v,zIndex:m,...l.LL}),[v,f,m])}},67318:function(e,t,i){var n=i(58437),o=i(76488);t.Z=e=>{let{stackOrder:t=[]}=(0,o.k)(),{processes:i}=(0,n.z)();return t.find(t=>{var n;return t!==e&&!(null==i?void 0:null===(n=i[t])||void 0===n?void 0:n.minimized)})||""}},85738:function(e,t,i){var n=i(67294),o=i(58437),r=i(97836),l=i(6484);let s={height:"inherit",opacity:1,scale:1,width:"inherit"},a={opacity:0,scale:.95},u={...a,height:"inherit",width:"inherit"},c={...u,scale:1},A={opacity:1,scale:1},d={opacity:0,scale:.7},h=()=>({height:(0,l.sI)()-r.bK,width:(0,l.E9)()});t.Z=(e,t=!1)=>{let{processes:{[e]:i}={}}=(0,o.z)(),{closing:l,componentWindow:g,maximized:p,minimized:m,taskbarEntry:f}=i||{},[v,x]=(0,n.useState)(Object.create(null)),[w,b]=(0,n.useState)(Object.create(null));return(0,n.useLayoutEffect)(()=>{if(!g||l)return;let{x:e=0,y:t=0}=g.getBoundingClientRect();x({...A,...h(),x:0-e,y:0-t})},[l,g,p]),(0,n.useLayoutEffect)(()=>{if(!f||!g||l)return;let{height:e=0,width:t=0,x:i=0,y:n=0}=f.getBoundingClientRect(),{height:o=0,width:r=0,x:s=0,y:a=0}=g.getBoundingClientRect(),u=Math.round(i-s-r/2+t/2),c=Math.round(n-a-o/2+e/2);0===u&&0===c||b({...d,x:u,y:c})},[l,g,m,f]),(0,n.useEffect)(()=>{let e=()=>{p&&x(e=>({...e,...h()}))};return window.addEventListener("resize",e,{passive:!0}),()=>window.removeEventListener("resize",e)},[p]),{animate:(m?"minimize":"")||(!l&&p?"maximize":"")||"active",exit:"exit",initial:"initial",transition:{duration:r.Nb.WINDOW},variants:{active:s,exit:a,initial:t?c:u,maximize:v,minimize:w}}}}}]);