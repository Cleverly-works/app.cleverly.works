"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9947],{58448:function(e,t,n){var r,i,o=n(19017),a=n(67294),s=n(45697),c=n(87108),u=function(e){var t=e.align,n=e.children;return a.createElement(p,{align:t,"aria-label":"Toolbar with button groups",role:"toolbar"},a.createElement(d,{role:"group","aria-label":"First group"},n))};u.displayName="ButtonToolbar";var p=c.ZP.div(r||(r=(0,o.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: ",";\n"])),function(e){return e.align}),d=c.ZP.div(i||(i=(0,o.Z)(["\n  display: inline-flex;\n  position: relative;\n  vertical-align: middle;\n\n  a:hover {\n    color: white;\n  }\n\n  &:last-child > div:last-of-type button {\n    border-top-right-radius: 0.25rem;\n    border-bottom-right-radius: 0.25rem;\n    border-right: 0;\n  }\n\n  a:not(:last-child),\n  button:not(:last-child) {\n    border-bottom-right-radius: 0;\n    border-right: 1px solid ",";\n    border-top-right-radius: 0;\n  }\n\n  a:not(:first-child),\n  button:not(:first-child),\n  a:not(:first-child) button,\n  div:not(:first-child) button {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n    margin-left: 0;\n  }\n\n  a:not(:last-child) button,\n  div:not(:last-child) button {\n    border-bottom-right-radius: 0;\n    border-right: 1px solid ",";\n    border-top-right-radius: 0;\n  }\n"])),function(e){return e.theme.COLOUR.light},function(e){return e.theme.COLOUR.light});u.propTypes={align:s.string,children:s.node.isRequired},u.defaultProps={align:"center"},t.Z=u},8373:function(e,t,n){n.d(t,{Z:function(){return ev}});var r,i=n(19017),o=n(87108),a=n(30212),s=n(17824),c="tippy-content",u="tippy-arrow",p="tippy-svg-arrow",d={passive:!0,capture:!0},f=function(){return document.body};function l(e,t,n){if(Array.isArray(e)){var r=e[t];return null==r?Array.isArray(n)?n[t]:n:r}return e}function v(e,t){var n=({}).toString.call(e);return 0===n.indexOf("[object")&&n.indexOf(t+"]")>-1}function m(e,t){return"function"==typeof e?e.apply(void 0,t):e}function h(e,t){var n;return 0===t?e:function(r){clearTimeout(n),n=setTimeout(function(){e(r)},t)}}function g(e){return[].concat(e)}function b(e,t){-1===e.indexOf(t)&&e.push(t)}function y(e){return[].slice.call(e)}function O(e){return Object.keys(e).reduce(function(t,n){return void 0!==e[n]&&(t[n]=e[n]),t},{})}function w(){return document.createElement("div")}function E(e){return["Element","Fragment"].some(function(t){return v(e,t)})}function x(e,t){e.forEach(function(e){e&&(e.style.transitionDuration=t+"ms")})}function T(e,t){e.forEach(function(e){e&&e.setAttribute("data-state",t)})}function A(e,t,n){var r=t+"EventListener";["transitionend","webkitTransitionEnd"].forEach(function(t){e[r](t,n)})}function C(e,t){for(var n,r=t;r;){if(e.contains(r))return!0;r=null==r.getRootNode?void 0:null==(n=r.getRootNode())?void 0:n.host}return!1}var L={isTouch:!1},j=0;function k(){!L.isTouch&&(L.isTouch=!0,window.performance&&document.addEventListener("mousemove",P))}function P(){var e=performance.now();e-j<20&&(L.isTouch=!1,document.removeEventListener("mousemove",P)),j=e}function D(){var e,t=document.activeElement;if(t&&t._tippy&&t._tippy.reference===t){var n=t._tippy;t.blur&&!n.state.isVisible&&t.blur()}}var R=!!("undefined"!=typeof window&&"undefined"!=typeof document)&&!!window.msCrypto,N=Object.assign({appendTo:f,aria:{content:"auto",expanded:"auto"},delay:0,duration:[300,250],getReferenceClientRect:null,hideOnClick:!0,ignoreAttributes:!1,interactive:!1,interactiveBorder:2,interactiveDebounce:0,moveTransition:"",offset:[0,10],onAfterUpdate:function(){},onBeforeUpdate:function(){},onCreate:function(){},onDestroy:function(){},onHidden:function(){},onHide:function(){},onMount:function(){},onShow:function(){},onShown:function(){},onTrigger:function(){},onUntrigger:function(){},onClickOutside:function(){},placement:"top",plugins:[],popperOptions:{},render:null,showOnCreate:!1,touch:!0,trigger:"mouseenter focus",triggerTarget:null},{animateFill:!1,followCursor:!1,inlinePositioning:!1,sticky:!1},{allowHTML:!1,animation:"fade",arrow:!0,content:"",inertia:!1,maxWidth:350,role:"tooltip",theme:"",zIndex:9999}),S=Object.keys(N),_=function(e){Object.keys(e).forEach(function(t){N[t]=e[t]})};function V(e){var t=(e.plugins||[]).reduce(function(t,n){var r,i=n.name,o=n.defaultValue;return i&&(t[i]=void 0!==e[i]?e[i]:null!=(r=N[i])?r:o),t},{});return Object.assign({},e,t)}function H(e,t){var n,r,i=Object.assign({},t,{content:m(t.content,[e])},t.ignoreAttributes?{}:((r=t.plugins)?Object.keys(V(Object.assign({},N,{plugins:r}))):S).reduce(function(t,n){var r=(e.getAttribute("data-tippy-"+n)||"").trim();if(!r)return t;if("content"===n)t[n]=r;else try{t[n]=JSON.parse(r)}catch(i){t[n]=r}return t},{}));return i.aria=Object.assign({},N.aria,i.aria),i.aria={expanded:"auto"===i.aria.expanded?t.interactive:i.aria.expanded,content:"auto"===i.aria.content?t.interactive?null:"describedby":i.aria.content},i}var I=function(){return"innerHTML"};function U(e,t){e[I()]=t}function M(e){var t=w();return!0===e?t.className=u:(t.className=p,E(e)?t.appendChild(e):U(t,e)),t}function Z(e,t){E(t.content)?(U(e,""),e.appendChild(t.content)):"function"!=typeof t.content&&(t.allowHTML?U(e,t.content):e.textContent=t.content)}function B(e){var t=e.firstElementChild,n=y(t.children);return{box:t,content:n.find(function(e){return e.classList.contains(c)}),arrow:n.find(function(e){return e.classList.contains(u)||e.classList.contains(p)}),backdrop:n.find(function(e){return e.classList.contains("tippy-backdrop")})}}function $(e){var t=w(),n=w();n.className="tippy-box",n.setAttribute("data-state","hidden"),n.setAttribute("tabindex","-1");var r=w();function i(n,r){var i=B(t),o=i.box,a=i.content,s=i.arrow;r.theme?o.setAttribute("data-theme",r.theme):o.removeAttribute("data-theme"),"string"==typeof r.animation?o.setAttribute("data-animation",r.animation):o.removeAttribute("data-animation"),r.inertia?o.setAttribute("data-inertia",""):o.removeAttribute("data-inertia"),o.style.maxWidth="number"==typeof r.maxWidth?r.maxWidth+"px":r.maxWidth,r.role?o.setAttribute("role",r.role):o.removeAttribute("role"),(n.content!==r.content||n.allowHTML!==r.allowHTML)&&Z(a,e.props),r.arrow?s?n.arrow!==r.arrow&&(o.removeChild(s),o.appendChild(M(r.arrow))):o.appendChild(M(r.arrow)):s&&o.removeChild(s)}return r.className=c,r.setAttribute("data-state","hidden"),Z(r,e.props),t.appendChild(n),n.appendChild(r),i(e.props,e.props),{popper:t,onUpdate:i}}$.$$tippy=!0;var W=1,F=[],q=[];function z(e,t){void 0===t&&(t={});var n=N.plugins.concat(t.plugins||[]);document.addEventListener("touchstart",k,d),window.addEventListener("blur",D);var r,i=Object.assign({},t,{plugins:n}),o=(function(e){var t;return E(e)?[e]:v(e,"NodeList")?y(e):Array.isArray(e)?e:y(document.querySelectorAll(e))})(e).reduce(function(e,t){var n=t&&function(e,t){var n,r,i,o,s,c,u,p,E=H(e,Object.assign({},N,V(O(t)))),j=!1,k=!1,P=!1,D=!1,S=[],_=h(eb,E.interactiveDebounce),I=W++,U=(p=E.plugins).filter(function(e,t){return p.indexOf(e)===t}),M={id:I,reference:e,popper:w(),popperInstance:null,props:E,state:{isEnabled:!0,isVisible:!1,isDestroyed:!1,isMounted:!1,isShown:!1},plugins:U,clearDelayTimeouts:function(){clearTimeout(n),clearTimeout(r),cancelAnimationFrame(i)},setProps:function(t){if(!M.state.isDestroyed){ei("onBeforeUpdate",[M,t]),eh();var n=M.props,r=H(e,Object.assign({},n,O(t),{ignoreAttributes:!0}));M.props=r,em(),n.interactiveDebounce!==r.interactiveDebounce&&(es(),_=h(eb,r.interactiveDebounce)),n.triggerTarget&&!r.triggerTarget?g(n.triggerTarget).forEach(function(e){e.removeAttribute("aria-expanded")}):r.triggerTarget&&e.removeAttribute("aria-expanded"),ea(),er(),z&&z(n,r),M.popperInstance&&(eE(),eT().forEach(function(e){requestAnimationFrame(e._tippy.popperInstance.forceUpdate)})),ei("onAfterUpdate",[M,t])}},setContent:function(e){M.setProps({content:e})},show:function(){var e,t,n,r=M.state.isVisible,i=M.state.isDestroyed,o=!M.state.isEnabled,a=L.isTouch&&!M.props.touch,s=l(M.props.duration,0,N.duration);if(!(r||i||o||a||Q().hasAttribute("disabled"))){if(ei("onShow",[M],!1),!1!==M.props.onShow(M)){if(M.state.isVisible=!0,G()&&($.style.visibility="visible"),er(),ed(),M.state.isMounted||($.style.transition="none"),G()){var u,p=et();x([p.box,p.content],0)}c=function(){if(M.state.isVisible&&!D){if(D=!0,$.offsetHeight,$.style.transition=M.props.moveTransition,G()&&M.props.animation){var e,t,n,r=et(),i=r.box,o=r.content;x([i,o],s),T([i,o],"visible")}eo(),ea(),b(q,M),null==(e=M.popperInstance)||e.forceUpdate(),ei("onMount",[M]),M.props.animation&&G()&&(t=s,el(t,n=function(){M.state.isShown=!0,ei("onShown",[M])}))}},t=M.props.appendTo,n=Q(),(e=M.props.interactive&&t===f||"parent"===t?n.parentNode:m(t,[n])).contains($)||e.appendChild($),M.state.isMounted=!0,eE()}}},hide:function(){var e,t,n=!M.state.isVisible,r=M.state.isDestroyed,i=!M.state.isEnabled,o=l(M.props.duration,1,N.duration);if(!n&&!r&&!i){if(ei("onHide",[M],!1),!1!==M.props.onHide(M)){if(M.state.isVisible=!1,M.state.isShown=!1,D=!1,j=!1,G()&&($.style.visibility="hidden"),es(),ef(),er(!0),G()){var a=et(),s=a.box,c=a.content;M.props.animation&&(x([s,c],o),T([s,c],"hidden"))}(eo(),ea(),M.props.animation)?G()&&(e=o,t=M.unmount,el(e,function(){!M.state.isVisible&&$.parentNode&&$.parentNode.contains($)&&t()})):M.unmount()}}},hideWithInteractivity:function(e){ee().addEventListener("mousemove",_),b(F,_),_(e)},enable:function(){M.state.isEnabled=!0},disable:function(){M.hide(),M.state.isEnabled=!1},unmount:function(){M.state.isVisible&&M.hide(),M.state.isMounted&&(ex(),eT().forEach(function(e){e._tippy.unmount()}),$.parentNode&&$.parentNode.removeChild($),q=q.filter(function(e){return e!==M}),M.state.isMounted=!1,ei("onHidden",[M]))},destroy:function(){!M.state.isDestroyed&&(M.clearDelayTimeouts(),M.unmount(),eh(),delete e._tippy,M.state.isDestroyed=!0,ei("onDestroy",[M]))}};if(!E.render)return M;var Z=E.render(M),$=Z.popper,z=Z.onUpdate;$.setAttribute("data-tippy-root",""),$.id="tippy-"+M.id,M.popper=$,e._tippy=M,$._tippy=M;var J=U.map(function(e){return e.fn(M)}),K=e.hasAttribute("aria-expanded");return em(),ea(),er(),ei("onCreate",[M]),E.showOnCreate&&eA(),$.addEventListener("mouseenter",function(){M.props.interactive&&M.state.isVisible&&M.clearDelayTimeouts()}),$.addEventListener("mouseleave",function(){M.props.interactive&&M.props.trigger.indexOf("mouseenter")>=0&&ee().addEventListener("mousemove",_)}),M;function X(){var e=M.props.touch;return Array.isArray(e)?e:[e,0]}function Y(){return"hold"===X()[0]}function G(){var e;return!!(null!=(e=M.props.render)&&e.$$tippy)}function Q(){return u||e}function ee(){var e,t,n,r=Q().parentNode;return r&&null!=(n=g(r)[0])&&null!=(t=n.ownerDocument)&&t.body?n.ownerDocument:document}function et(){return B($)}function en(e){return M.state.isMounted&&!M.state.isVisible||L.isTouch||o&&"focus"===o.type?0:l(M.props.delay,e?0:1,N.delay)}function er(e){void 0===e&&(e=!1),$.style.pointerEvents=M.props.interactive&&!e?"":"none",$.style.zIndex=""+M.props.zIndex}function ei(e,t,n){if(void 0===n&&(n=!0),J.forEach(function(n){n[e]&&n[e].apply(n,t)}),n){var r;(r=M.props)[e].apply(r,t)}}function eo(){var t=M.props.aria;if(t.content){var n="aria-"+t.content,r=$.id;g(M.props.triggerTarget||e).forEach(function(e){var t=e.getAttribute(n);if(M.state.isVisible)e.setAttribute(n,t?t+" "+r:r);else{var i=t&&t.replace(r,"").trim();i?e.setAttribute(n,i):e.removeAttribute(n)}})}}function ea(){!K&&M.props.aria.expanded&&g(M.props.triggerTarget||e).forEach(function(e){M.props.interactive?e.setAttribute("aria-expanded",M.state.isVisible&&e===Q()?"true":"false"):e.removeAttribute("aria-expanded")})}function es(){ee().removeEventListener("mousemove",_),F=F.filter(function(e){return e!==_})}function ec(t){if(!L.isTouch||!P&&"mousedown"!==t.type){var n=t.composedPath&&t.composedPath()[0]||t.target;if(!(M.props.interactive&&C($,n))){if(g(M.props.triggerTarget||e).some(function(e){return C(e,n)})){if(L.isTouch||M.state.isVisible&&M.props.trigger.indexOf("click")>=0)return}else ei("onClickOutside",[M,t]);!0!==M.props.hideOnClick||(M.clearDelayTimeouts(),M.hide(),k=!0,setTimeout(function(){k=!1}),M.state.isMounted||ef())}}}function eu(){P=!0}function ep(){P=!1}function ed(){var e=ee();e.addEventListener("mousedown",ec,!0),e.addEventListener("touchend",ec,d),e.addEventListener("touchstart",ep,d),e.addEventListener("touchmove",eu,d)}function ef(){var e=ee();e.removeEventListener("mousedown",ec,!0),e.removeEventListener("touchend",ec,d),e.removeEventListener("touchstart",ep,d),e.removeEventListener("touchmove",eu,d)}function el(e,t){var n=et().box;function r(e){e.target===n&&(A(n,"remove",r),t())}if(0===e)return t();A(n,"remove",s),A(n,"add",r),s=r}function ev(t,n,r){void 0===r&&(r=!1),g(M.props.triggerTarget||e).forEach(function(e){e.addEventListener(t,n,r),S.push({node:e,eventType:t,handler:n,options:r})})}function em(){var e;Y()&&(ev("touchstart",eg,{passive:!0}),ev("touchend",ey,{passive:!0})),(e=M.props.trigger).split(/\s+/).filter(Boolean).forEach(function(e){if("manual"!==e)switch(ev(e,eg),e){case"mouseenter":ev("mouseleave",ey);break;case"focus":ev(R?"focusout":"blur",eO);break;case"focusin":ev("focusout",eO)}})}function eh(){S.forEach(function(e){var t=e.node,n=e.eventType,r=e.handler,i=e.options;t.removeEventListener(n,r,i)}),S=[]}function eg(e){var t,n=!1;if(!(!M.state.isEnabled||ew(e))&&!k){var r,i=(null==(t=o)?void 0:t.type)==="focus";o=e,u=e.currentTarget,ea(),!M.state.isVisible&&v(e,"MouseEvent")&&F.forEach(function(t){return t(e)}),"click"===e.type&&(0>M.props.trigger.indexOf("mouseenter")||j)&&!1!==M.props.hideOnClick&&M.state.isVisible?n=!0:eA(e),"click"===e.type&&(j=!n),n&&!i&&eC(e)}}function eb(e){var t,n,r,i,o=e.target,a=Q().contains(o)||$.contains(o);("mousemove"!==e.type||!a)&&(t=eT().concat($).map(function(e){var t,n=null==(t=e._tippy.popperInstance)?void 0:t.state;return n?{popperRect:e.getBoundingClientRect(),popperState:n,props:E}:null}).filter(Boolean),r=e.clientX,i=e.clientY,t.every(function(e){var t,n=e.popperRect,o=e.popperState,a=e.props.interactiveBorder,s=(t=o.placement).split("-")[0],c=o.modifiersData.offset;if(!c)return!0;var u="bottom"===s?c.top.y:0,p="top"===s?c.bottom.y:0,d="right"===s?c.left.x:0,f="left"===s?c.right.x:0,l=n.top-i+u>a,v=i-n.bottom-p>a,m=n.left-r+d>a,h=r-n.right-f>a;return l||v||m||h})&&(es(),eC(e)))}function ey(e){if(!(ew(e)||M.props.trigger.indexOf("click")>=0&&j)){if(M.props.interactive){M.hideWithInteractivity(e);return}eC(e)}}function eO(e){!(0>M.props.trigger.indexOf("focusin")&&e.target!==Q()||M.props.interactive&&e.relatedTarget&&$.contains(e.relatedTarget))&&eC(e)}function ew(e){return!!L.isTouch&&Y()!==e.type.indexOf("touch")>=0}function eE(){ex();var t=M.props,n=t.popperOptions,r=t.placement,i=t.offset,o=t.getReferenceClientRect,s=t.moveTransition,u=G()?B($).arrow:null,p=o?{getBoundingClientRect:o,contextElement:o.contextElement||Q()}:e,d=[{name:"offset",options:{offset:i}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5}},{name:"computeStyles",options:{adaptive:!s}},{name:"$$tippy",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:function(e){var t=e.state;if(G()){var n=et().box;["placement","reference-hidden","escaped"].forEach(function(e){"placement"===e?n.setAttribute("data-placement",t.placement):t.attributes.popper["data-popper-"+e]?n.setAttribute("data-"+e,""):n.removeAttribute("data-"+e)}),t.attributes.popper={}}}}];G()&&u&&d.push({name:"arrow",options:{element:u,padding:3}}),d.push.apply(d,(null==n?void 0:n.modifiers)||[]),M.popperInstance=(0,a.fi)(p,$,Object.assign({},n,{placement:r,onFirstUpdate:c,modifiers:d}))}function ex(){M.popperInstance&&(M.popperInstance.destroy(),M.popperInstance=null)}function eT(){return y($.querySelectorAll("[data-tippy-root]"))}function eA(e){M.clearDelayTimeouts(),e&&ei("onTrigger",[M,e]),ed();var t=en(!0),r=X(),i=r[0],o=r[1];L.isTouch&&"hold"===i&&o&&(t=o),t?n=setTimeout(function(){M.show()},t):M.show()}function eC(e){if(M.clearDelayTimeouts(),ei("onUntrigger",[M,e]),!M.state.isVisible){ef();return}if(!(M.props.trigger.indexOf("mouseenter")>=0&&M.props.trigger.indexOf("click")>=0&&["mouseleave","mousemove"].indexOf(e.type)>=0)||!j){var t=en(!1);t?r=setTimeout(function(){M.state.isVisible&&M.hide()},t):i=requestAnimationFrame(function(){M.hide()})}}}(t,i);return n&&e.push(n),e},[]);return E(e)?o[0]:o}z.defaultProps=N,z.setDefaultProps=_,z.currentInput=L;var J=Object.assign({},s.Z,{effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow)}}),K=function(e,t){void 0===t&&(t={});var n,r,i=e,o=[],a=[],s=t.overrides,c=[],u=!1;function p(){a=i.map(function(e){return g(e.props.triggerTarget||e.reference)}).reduce(function(e,t){return e.concat(t)},[])}function d(){o=i.map(function(e){return e.reference})}function f(e){i.forEach(function(t){e?t.enable():t.disable()})}function l(e){return i.map(function(t){var n=t.setProps;return t.setProps=function(i){n(i),t.reference===r&&e.setProps(i)},function(){t.setProps=n}})}function v(e,t){var n=a.indexOf(t);if(t!==r){r=t;var c=(s||[]).concat("content").reduce(function(e,t){return e[t]=i[n].props[t],e},{});e.setProps(Object.assign({},c,{getReferenceClientRect:"function"==typeof c.getReferenceClientRect?c.getReferenceClientRect:function(){var e;return null==(e=o[n])?void 0:e.getBoundingClientRect()}}))}}f(!1),d(),p();var m,h,b,y=z(w(),Object.assign({},(m=t,h=["overrides"],b=Object.assign({},m),h.forEach(function(e){delete b[e]}),b),{plugins:[{fn:function(){return{onDestroy:function(){f(!0)},onHidden:function(){r=null},onClickOutside:function(e){e.props.showOnCreate&&!u&&(u=!0,r=null)},onShow:function(e){e.props.showOnCreate&&!u&&(u=!0,v(e,o[0]))},onTrigger:function(e,t){v(e,t.currentTarget)}}}}].concat(t.plugins||[]),triggerTarget:a,popperOptions:Object.assign({},t.popperOptions,{modifiers:[].concat((null==(n=t.popperOptions)?void 0:n.modifiers)||[],[J])})})),O=y.show;y.show=function(e){if(O(),!r&&null==e)return v(y,o[0]);if(!r||null!=e){if("number"==typeof e)return o[e]&&v(y,o[e]);if(i.indexOf(e)>=0)return v(y,e.reference);if(o.indexOf(e)>=0)return v(y,e)}},y.showNext=function(){var e=o[0];if(!r)return y.show(0);var t=o.indexOf(r);y.show(o[t+1]||e)},y.showPrevious=function(){var e=o[o.length-1];if(!r)return y.show(e);var t=o[o.indexOf(r)-1]||e;y.show(t)};var E=y.setProps;return y.setProps=function(e){s=e.overrides||s,E(e)},y.setInstances=function(e){f(!0),c.forEach(function(e){return e()}),i=e,f(!1),d(),p(),c=l(y),y.setProps({triggerTarget:a})},c=l(y),y};z.setDefaultProps({render:$});var X=n(67294),Y=n(73935);function G(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}var Q="undefined"!=typeof window&&"undefined"!=typeof document;function ee(e,t){e&&("function"==typeof e&&e(t),({}).hasOwnProperty.call(e,"current")&&(e.current=t))}function et(){return Q&&document.createElement("div")}var en=Q?X.useLayoutEffect:X.useEffect;function er(e,t,n){n.split(/\s+/).forEach(function(n){n&&e.classList[t](n)})}var ei,eo,ea={name:"className",defaultValue:"",fn:function(e){var t=e.popper.firstElementChild,n=function(){var t;return!!(null==(t=e.props.render)?void 0:t.$$tippy)};function r(){(!e.props.className||n())&&er(t,"add",e.props.className)}return{onCreate:r,onBeforeUpdate:function(){n()&&er(t,"remove",e.props.className)},onAfterUpdate:r}}},es=(eo=function(e){var t,n,r=e.children,i=e.content,o=e.visible,a=e.singleton,s=e.render,c=e.reference,u=e.disabled,p=void 0!==u&&u,d=e.ignoreAttributes,f=(e.__source,e.__self,G(e,["children","content","visible","singleton","render","reference","disabled","ignoreAttributes","__source","__self"])),l=void 0!==o,v=void 0!==a,m=(0,X.useState)(!1),h=m[0],g=m[1],b=(0,X.useState)({}),y=b[0],O=b[1],w=(0,X.useState)(),E=w[0],x=w[1],T=(t=function(){return{container:et(),renders:1}},n=(0,X.useRef)(),n.current||(n.current="function"==typeof t?t():t),n.current),A=Object.assign({ignoreAttributes:void 0===d||d},f,{content:T.container});l&&(A.trigger="manual",A.hideOnClick=!1),v&&(p=!0);var C=A,L=A.plugins||[];s&&(C=Object.assign({},A,{plugins:v?[].concat(L,[{fn:function(){return{onTrigger:function(e,t){x(a.data.children.find(function(e){return e.instance.reference===t.currentTarget}).content)}}}}]):L,render:function(){return{popper:T.container}}}));var j,k,P=[c].concat(r?[r.type]:[]);return en(function(){var e=c;c&&c.hasOwnProperty("current")&&(e=c.current);var t=z(e||T.ref||et(),Object.assign({},C,{plugins:[ea].concat(A.plugins||[])}));return T.instance=t,p&&t.disable(),o&&t.show(),v&&a.hook({instance:t,content:i,props:C}),g(!0),function(){t.destroy(),null==a||a.cleanup(t)}},P),en(function(){if(1===T.renders){T.renders++;return}var e,t,n,r,s=T.instance;s.setProps((e=s.props,t=C,Object.assign({},t,{popperOptions:Object.assign({},e.popperOptions,t.popperOptions,{modifiers:[].concat(((null==(n=e.popperOptions)?void 0:n.modifiers)||[]).filter(function(e){return e.name.indexOf("tippy")>=0}),(null==(r=t.popperOptions)?void 0:r.modifiers)||[])})}))),p?s.disable():s.enable(),l&&(o?s.show():s.hide()),v&&a.hook({instance:s,content:i,props:C})}),en(function(){if(s){var e,t=T.instance;t.setProps({popperOptions:Object.assign({},t.props.popperOptions,{modifiers:[].concat((null==(e=t.props.popperOptions)?void 0:e.modifiers)||[],[{name:"$$tippyReact",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:function(e){var t,n=e.state,r=null==(t=n.modifiersData)?void 0:t.hide;(y.placement!==n.placement||y.referenceHidden!==(null==r?void 0:r.isReferenceHidden)||y.escaped!==(null==r?void 0:r.hasPopperEscaped))&&O({placement:n.placement,referenceHidden:null==r?void 0:r.isReferenceHidden,escaped:null==r?void 0:r.hasPopperEscaped}),n.attributes.popper={}}}])})})}},[y.placement,y.referenceHidden,y.escaped].concat(P)),X.createElement(X.Fragment,null,r?(0,X.cloneElement)(r,{ref:function(e){T.ref=e,ee(r.ref,e)}}):null,h&&(0,Y.createPortal)(s?s((k={"data-placement":y.placement},y.referenceHidden&&(k["data-reference-hidden"]=""),y.escaped&&(k["data-escaped"]=""),k),E,T.instance):i,T.container))},(0,X.forwardRef)(function(e,t){var n=e.children,r=G(e,["children"]);return X.createElement(eo,Object.assign({},void 0,r),n?(0,X.cloneElement)(n,{ref:function(e){ee(t,e),ee(n.ref,e)}}):null)})),ec=n(96978),eu=n(45697),ep=n(37815),ed={children:eu.node,content:eu.node,context:(0,eu.oneOf)(Object.values(ep.Z))},ef={context:ep.Z.DARK},el=(0,o.ZP)(es)(r||(r=(0,i.Z)(["\n  && {\n    ","\n\n    .tippy-content {\n      padding: 8px;\n    }\n\n    .tippy-arrow::before {\n      color: ",";\n    }\n  }\n"])),function(e){return(0,ec.Z)(e)},function(e){var t=e.context;return e.theme.COLOUR[t]});el.propTypes=ed,el.defaultProps=ef;var ev=el}}]);