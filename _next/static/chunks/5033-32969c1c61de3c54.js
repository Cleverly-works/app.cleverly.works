(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5033],{39759:function(e,t,n){"use strict";var r=n(67294),o=n(45697),i=n(70998),a=function(e){var t=e.county,n=e.country,o=e.line1,a=e.line2,c=e.line3,s=e.postcode,u=e.town;return r.createElement("address",null,r.createElement(i.Z,null,o),a&&r.createElement(i.Z,null,a),c&&r.createElement(i.Z,null,c),r.createElement(i.Z,null,u),t&&r.createElement(i.Z,null,t),r.createElement(i.Z,null,s),r.createElement(i.Z,null,n))};a.displayName="Address",a.propTypes={county:o.string,country:o.string,line1:o.string.isRequired,line2:o.string,line3:o.string,postcode:o.string.isRequired,town:o.string},t.Z=a},93443:function(e,t,n){"use strict";var r=n(67294),o=n(45697),i=n(84268),a=n(70998),c=function(e){var t=e.content,n=e.text;return r.createElement(r.Fragment,null,r.createElement(i.Z,{marginBottom:"sm"}),r.createElement(a.Z,{content:t,context:"dark",size:"sm"}),r.createElement(a.Z,null,n))};c.propTypes={content:o.string.isRequired,text:(0,o.oneOfType)([o.node,o.string]).isRequired},t.Z=c},62188:function(e,t,n){"use strict";var r=n(67294),o=n(45697),i=n(76325),a=function(e){var t=e.icon,n=e.prefix;return r.createElement("span",{className:"fa-stack fa-1x",style:{pointerEvents:"none"}},r.createElement(i.Z,{className:"fa-stack-2x",color:"#eaf0f6",fixedWidth:!1,icon:"circle"}),r.createElement(i.Z,{className:"fa-stack-1x",color:"#506e91",fixedWidth:!1,icon:t,prefix:n}))};a.displayName="IconStacked",a.propTypes={icon:o.string.isRequired,prefix:o.string},a.defaultProps={prefix:"fas"},t.Z=a},47385:function(e,t,n){"use strict";var r=n(67294),o=function(e){var t=(0,r.useRef)();return(0,r.useEffect)(function(){t.current=e}),t.current};t.Z=o},926:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(77367),o=n(67294),i=n(45697),a=n(27649),c=n(54067);function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e){var t=this,n=[];if(Array.isArray(e)){var r=e.map(function(e){return t.locationBuilder(e)});n.push.apply(n,(0,c.Z)(r))}return("string"==typeof e||"number"==typeof e)&&n.push(e),"object"===(0,a.Z)(e)&&e.lat&&e.lng&&n.push("".concat(e.lat,",").concat(e.lng)),n.join("%7C")}var l=function(){var e,t,n;function r(e){var t=e.apiKey,n=e.center,o=e.channel,i=e.client,a=e.format,c=e.language,s=e.location,u=e.maptype,l=e.markers,f=e.paths,d=e.region,p=e.rootURL,h=e.scale,g=e.signature,y=e.size,m=e.style,v=e.visible,b=e.zoom;!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,r),this.apiKey=t,this.channel=o,this.center=n,this.client=i,this.format=void 0===a?"png":a,this.language=c,this.location=void 0===s?"":s,this.maptype=void 0===u?"roadmap":u,this.markers=void 0===l?[]:l,this.paths=void 0===f?[]:f,this.region=d,this.rootURL=void 0===p?"https://maps.googleapis.com/maps/api/staticmap":p,this.scale=void 0===h?1:h,this.signature=g,this.size=void 0===y?"400x200":y,this.style=m,this.visible=v,this.zoom=void 0===b?15:b}return t=[{key:"urlBuilder",value:function(e,t,n){return t?"".concat(e).concat(n).concat(t):null}},{key:"renderBaseMap",value:function(){var e=[];e.push(this.urlBuilder("key",this.apiKey,"=")),e.push(this.urlBuilder("center",this.center,"=")),e.push(this.urlBuilder("channel",this.channel,"=")),e.push(this.urlBuilder("client",this.client,"=")),e.push(this.urlBuilder("format",this.format,"=")),e.push(this.urlBuilder("language",this.language,"=")),e.push(this.urlBuilder("maptype",this.maptype,"=")),e.push(this.urlBuilder("region",this.region,"=")),e.push(this.urlBuilder("scale",this.scale,"=")),e.push(this.urlBuilder("signature",this.signature,"=")),e.push(this.urlBuilder("size",this.size,"=")),e.push(this.urlBuilder("style",this.style,"=")),e.push(this.urlBuilder("visible",this.visible,"=")),e.push(this.urlBuilder("zoom",this.zoom,"="));var t=e.filter(function(e){return e}).join("&");return"".concat(this.rootURL,"?").concat(t)}},{key:"locationBuilder",value:function(e){var t=this,n=[];if(Array.isArray(e)){var r=e.map(function(e){return t.locationBuilder(e)});n.push.apply(n,(0,c.Z)(r))}return("string"==typeof e||"number"==typeof e)&&n.push(encodeURI(e)),"object"===(0,a.Z)(e)&&e.lat&&e.lng&&n.push("".concat(e.lat,",").concat(e.lng)),n.join("%7C")}},{key:"renderPath",value:function(e){var t=e.circle,n=e.color,r=e.fillcolor,o=e.geodesic,i=e.points,a=e.weight,c=[];if(t){var s,l,f,d=(s=t.latitude,l=t.longitude,function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:8,o=Math.PI,i="",a=e*o/180,c=t*o/180,s=n/1e3/6371,l=0;for(l=0;l<=360;l+=r){var f=l*o/180,d=Math.asin(Math.sin(a)*Math.cos(s)+Math.cos(a)*Math.sin(s)*Math.cos(f)),p=(c+Math.atan2(Math.sin(f)*Math.sin(s)*Math.cos(a),Math.cos(s)-Math.sin(a)*Math.sin(d)))*180/o;i+=u((d=180*d/o)+","+p)}return encodeURI(i)}(s,l,f=t.radius));c.push(this.urlBuilder("",this.locationBuilder("".concat(d)),""))}c.push(this.urlBuilder("color",n,":")),c.push(this.urlBuilder("weight",a,":")),c.push(this.urlBuilder("fillcolor",r,":")),c.push(this.urlBuilder("geodesic",o,":")),c.push(this.urlBuilder("",this.locationBuilder(i),""));var p=c.filter(function(e){return e}).join("%7C");return"path=".concat(p)}},{key:"renderParts",value:function(){var e=this;return this.paths.map(function(t){return e.renderPath(t)})}},{key:"renderMarkers",value:function(){var e=this.markers,t=this.locationBuilder,n=this.location,r={};return(e.length?e.map(function(e){var n="markers=";switch((0,a.Z)(e)){case"string":n+=t(e);break;case"object":var r,o=e.colour,i=e.label,c=e.location,s=o&&"color:".concat(o,"|");n+=s+(i&&"label:".concat(i,"|"))+(c&&"".concat(t(c),"|"))}return n}):["markers=".concat(t(n))]).join("&")}},{key:"generateUrl",value:function(){var e=this.renderParts()||[],t=this.renderBaseMap(),n=this.renderMarkers();return"".concat(t,"&").concat(e,"&").concat(n)}}],s(r.prototype,t),n&&s(r,n),r}(),f=function(e){var t=e.apiKey,n=e.center,i=e.channel,a=e.className,c=e.client,s=e.container,u=e.format,f=e.language,d=e.location,p=e.maptype,h=e.markers,g=e.paths,y=e.region,m=e.scale,v=e.signature,b=e.size,k=e.style,S=e.styleMap,j=e.visible,x=e.zoom,E=b.split("x"),w=(0,r.Z)(E,2),O=w[0],M=w[1],B=(0,o.useState)(""),I=(0,r.Z)(B,2),A=I[0],Z=I[1];return(0,o.useEffect)(function(){Z(new l({apiKey:t,center:n,channel:i,client:c,format:u,language:f,location:d,maptype:p,markers:h,paths:g,region:y,scale:m,signature:v,size:b,style:S,visible:j,zoom:x}).generateUrl())},[]),o.createElement(void 0===s?"img":s,{className:a,width:O,height:M,src:A,style:k,alt:"map"})};f.displayName="StaticLocation",f.propTypes={apiKey:i.string.isRequired,center:i.string,channel:i.string,className:i.string,client:i.string,container:i.node,format:(0,i.oneOf)(["png","png8","png32","gif","jpg","jpg-baseline"]),language:i.string,location:i.string,maptype:(0,i.oneOf)(["roadmap","satellite","terrain","hybrid"]),markers:i.array,paths:i.array,region:i.string,scale:(0,i.oneOf)([1,2,4,"1","2","4"]),signature:i.string,size:i.string.isRequired,style:i.object,styleMap:i.string,visible:i.string,zoom:i.number},f.defaultProps={format:"png",maptype:"roadmap",scale:1,size:"400x200",zoom:15};var d=f},75515:function(e,t){"use strict";t.Z={camelize:function(e){return e.replace(/(?:^\w|[A-Z]|\b\w)/g,function(e,t){return 0===t?e.toLowerCase():e.toUpperCase()}).replace(/\s+/g,"")},decamelize:function(e){return e.split(/(?=[A-Z])/).join(" ")}}},80285:function(e,t){"use strict";var n=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GBP";return new Intl.NumberFormat(["en-GB"],{currency:t,currencyDisplay:"symbol",style:"currency"}).format(e)};t.Z=n},26447:function(e,t,n){"use strict";var r=n(1819),o=n(90948),i=n(71657);let a=(0,r.Z)({createStyledComponent:(0,o.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root}),useThemeProps:e=>(0,i.Z)({props:e,name:"MuiStack"})});t.Z=a},1819:function(e,t,n){"use strict";n.d(t,{Z:function(){return x}});var r=n(60916),o=n(54695),i=n(67294),a=n(70828),c=n(59766),s=n(94780),u=n(34867),l=n(13264),f=n(29628),d=n(39707),p=n(66500),h=n(95408),g=n(98700),y=n(85893);let m=["component","direction","spacing","divider","children","className","useFlexGap"],v=(0,p.Z)(),b=(0,l.Z)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root});function k(e){return(0,f.Z)({props:e,name:"MuiStack",defaultTheme:v})}let S=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],j=({ownerState:e,theme:t})=>{let n=(0,o.Z)({display:"flex",flexDirection:"column"},(0,h.k9)({theme:t},(0,h.P$)({values:e.direction,breakpoints:t.breakpoints.values}),e=>({flexDirection:e})));if(e.spacing){let r=(0,g.hB)(t),i=Object.keys(t.breakpoints.values).reduce((t,n)=>(("object"==typeof e.spacing&&null!=e.spacing[n]||"object"==typeof e.direction&&null!=e.direction[n])&&(t[n]=!0),t),{}),a=(0,h.P$)({values:e.direction,base:i}),s=(0,h.P$)({values:e.spacing,base:i});"object"==typeof a&&Object.keys(a).forEach((e,t,n)=>{let r=a[e];if(!r){let o=t>0?a[n[t-1]]:"column";a[e]=o}});let u=(t,n)=>e.useFlexGap?{gap:(0,g.NA)(r,t)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${S(n?a[n]:e.direction)}`]:(0,g.NA)(r,t)}};n=(0,c.Z)(n,(0,h.k9)({theme:t},s,u))}return(0,h.dt)(t.breakpoints,n)};function x(e={}){let{createStyledComponent:t=b,useThemeProps:n=k,componentName:c="MuiStack"}=e,l=()=>(0,s.Z)({root:["root"]},e=>(0,u.Z)(c,e),{}),f=t(j),p=i.forwardRef(function(e,t){let c=n(e),s=(0,d.Z)(c),{component:u="div",direction:p="column",spacing:h=0,divider:g,children:v,className:b,useFlexGap:k=!1}=s,S=(0,r.Z)(s,m),j=l();return(0,y.jsx)(f,(0,o.Z)({as:u,ownerState:{direction:p,spacing:h,useFlexGap:k},ref:t,className:(0,a.Z)(j.root,b)},S,{children:g?function(e,t){let n=i.Children.toArray(e).filter(Boolean);return n.reduce((e,r,o)=>(e.push(r),o<n.length-1&&e.push(i.cloneElement(t,{key:`separator-${o}`})),e),[])}(v,g):v}))});return p}},13264:function(e,t,n){"use strict";var r=n(70182);let o=(0,r.ZP)();t.Z=o},93645:function(e,t,n){var r,o;"undefined"!=typeof self&&self,o=function(e){var t,n;return n={},r.m=t=[function(t){t.exports=e},function(e,t,n){e.exports=n(2)()},function(e,t,n){"use strict";function r(){}function o(){}var i=n(3);o.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,o,a){if(a!==i){var c=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}var n={array:e.isRequired=e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:r};return n.PropTypes=n}},function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";function r(e,t){null!=t&&t<=e.length||(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(s){o=!0,i=s}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){null!=t&&t<=e.length||(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){null!=t&&t<=e.length||(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(s){o=!0,i=s}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){null!=t&&t<=e.length||(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function u(e,t,n,r,o,i){var a=e.getElementsByTagName(t)[0],c=a;(c=e.createElement(t)).id=n,c.src=r,a&&a.parentNode?a.parentNode.insertBefore(c,a):e.head.appendChild(c),c.onerror=i,c.onload=o}function l(e,t){var n=e.getElementById(t);n&&n.parentNode.removeChild(n)}function f(e){return g.a.createElement("span",{style:{paddingRight:10,fontWeight:500,paddingLeft:e.icon?0:10,paddingTop:10,paddingBottom:10}},e.children)}function d(e){return g.a.createElement("div",{style:{marginRight:10,background:e.active?"#eee":"#fff",padding:10,borderRadius:2}},g.a.createElement("svg",{width:"18",height:"18",xmlns:"http://www.w3.org/2000/svg"},g.a.createElement("g",{fill:"#000",fillRule:"evenodd"},g.a.createElement("path",{d:"M9 3.48c1.69 0 2.83.73 3.48 1.34l2.54-2.48C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.96l2.91 2.26C4.6 5.05 6.62 3.48 9 3.48z",fill:"#EA4335"}),g.a.createElement("path",{d:"M17.64 9.2c0-.74-.06-1.28-.19-1.84H9v3.34h4.96c-.1.83-.64 2.08-1.84 2.92l2.84 2.2c1.7-1.57 2.68-3.88 2.68-6.62z",fill:"#4285F4"}),g.a.createElement("path",{d:"M3.88 10.78A5.54 5.54 0 0 1 3.58 9c0-.62.11-1.22.29-1.78L.96 4.96A9.008 9.008 0 0 0 0 9c0 1.45.35 2.82.96 4.04l2.92-2.26z",fill:"#FBBC05"}),g.a.createElement("path",{d:"M9 18c2.43 0 4.47-.8 5.96-2.18l-2.84-2.2c-.76.53-1.78.9-3.12.9-2.38 0-4.4-1.57-5.12-3.74L.97 13.04C2.45 15.98 5.48 18 9 18z",fill:"#34A853"}),g.a.createElement("path",{fill:"none",d:"M0 0h18v18H0z"}))))}function p(e){var t=o(Object(h.useState)(!1),2),n=t[0],r=t[1],i=o(Object(h.useState)(!1),2),a=i[0],c=i[1],s=e.tag,u=e.type,l=e.className,p=e.disabledStyle,m=e.buttonText,v=e.children,b=e.render,k=e.theme,S=e.icon,j=e.disabled,x=y({onSuccess:e.onSuccess,onAutoLoadFinished:e.onAutoLoadFinished,onRequest:e.onRequest,onFailure:e.onFailure,onScriptLoadFailure:e.onScriptLoadFailure,clientId:e.clientId,cookiePolicy:e.cookiePolicy,loginHint:e.loginHint,hostedDomain:e.hostedDomain,autoLoad:e.autoLoad,isSignedIn:e.isSignedIn,fetchBasicProfile:e.fetchBasicProfile,redirectUri:e.redirectUri,discoveryDocs:e.discoveryDocs,uxMode:e.uxMode,scope:e.scope,accessType:e.accessType,responseType:e.responseType,jsSrc:e.jsSrc,prompt:e.prompt}),E=x.signIn,w=j||!x.loaded;if(b)return b({onClick:E,disabled:w});var O={backgroundColor:"dark"===k?"rgb(66, 133, 244)":"#fff",display:"inline-flex",alignItems:"center",color:"dark"===k?"#fff":"rgba(0, 0, 0, .54)",boxShadow:"0 2px 2px 0 rgba(0, 0, 0, .24), 0 0 1px 0 rgba(0, 0, 0, .24)",padding:0,borderRadius:2,border:"1px solid transparent",fontSize:14,fontWeight:"500",fontFamily:"Roboto, sans-serif"},M=w?Object.assign({},O,p):a?Object.assign({},O,{cursor:"pointer",backgroundColor:"dark"===k?"#3367D6":"#eee",color:"dark"===k?"#fff":"rgba(0, 0, 0, .54)",opacity:1}):n?Object.assign({},O,{cursor:"pointer",opacity:.9}):O;return g.a.createElement(s,{onMouseEnter:function(){return r(!0)},onMouseLeave:function(){r(!1),c(!1)},onMouseDown:function(){return c(!0)},onMouseUp:function(){return c(!1)},onClick:E,style:M,type:u,disabled:w,className:l},[S&&g.a.createElement(d,{key:1,active:a}),g.a.createElement(f,{icon:S,key:2},v||m)])}n.r(t),n.d(t,"default",function(){return v}),n.d(t,"GoogleLogin",function(){return v}),n.d(t,"GoogleLogout",function(){return k}),n.d(t,"useGoogleLogin",function(){return y}),n.d(t,"useGoogleLogout",function(){return b});var h=n(0),g=n.n(h),y=(n(1),function(e){function t(e){var t=e.getBasicProfile(),n=e.getAuthResponse(!0);e.googleId=t.getId(),e.tokenObj=n,e.tokenId=n.id_token,e.accessToken=n.access_token,e.profileObj={googleId:t.getId(),imageUrl:t.getImageUrl(),email:t.getEmail(),name:t.getName(),givenName:t.getGivenName(),familyName:t.getFamilyName()},c(e)}function n(e){if(e&&e.preventDefault(),R){var n=window.gapi.auth2.getAuthInstance(),r={prompt:_};y(),"code"===A?n.grantOfflineAccess(r).then(function(e){return c(e)},function(e){return p(e)}):n.signIn(r).then(function(e){return t(e)},function(e){return p(e)})}}var o,i,a=e.onSuccess,c=void 0===a?function(){}:a,s=e.onAutoLoadFinished,f=void 0===s?function(){}:s,d=e.onFailure,p=void 0===d?function(){}:d,g=e.onRequest,y=void 0===g?function(){}:g,m=e.onScriptLoadFailure,v=e.clientId,b=e.cookiePolicy,k=e.loginHint,S=e.hostedDomain,j=e.autoLoad,x=e.isSignedIn,E=e.fetchBasicProfile,w=e.redirectUri,O=e.discoveryDocs,M=e.uxMode,B=e.scope,I=e.accessType,A=e.responseType,Z=e.jsSrc,P=void 0===Z?"https://apis.google.com/js/api.js":Z,_=e.prompt,T=function(e){if(Array.isArray(e))return e}(o=Object(h.useState)(!1))||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(s){o=!0,i=s}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}(o,2)||function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(o,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),R=T[0],C=T[1];return Object(h.useEffect)(function(){var e=!1,n=m||p;return u(document,"script","google-login",P,function(){var r={client_id:v,cookie_policy:b,login_hint:k,hosted_domain:S,fetch_basic_profile:E,discoveryDocs:O,ux_mode:M,redirect_uri:w,scope:B,access_type:I};"code"===A&&(r.access_type="offline"),window.gapi.load("auth2",function(){var o=window.gapi.auth2.getAuthInstance();o?o.then(function(){e||(x&&o.isSignedIn.get()?(C(!0),f(!0),t(o.currentUser.get())):(C(!0),f(!1)))},function(e){p(e)}):window.gapi.auth2.init(r).then(function(n){if(!e){C(!0);var r=x&&n.isSignedIn.get();f(r),r&&t(n.currentUser.get())}},function(e){C(!0),f(!1),n(e)})})},function(e){n(e)}),function(){e=!0,l(document,"google-login")}},[]),Object(h.useEffect)(function(){j&&n()},[R]),{signIn:n,loaded:R}});function m(e){var t=c(Object(h.useState)(!1),2),n=t[0],r=t[1],o=c(Object(h.useState)(!1),2),i=o[0],a=o[1],s=e.tag,u=e.type,l=e.className,p=e.disabledStyle,y=e.buttonText,m=e.children,v=e.render,k=e.theme,S=e.icon,j=e.disabled,x=b({jsSrc:e.jsSrc,onFailure:e.onFailure,onScriptLoadFailure:e.onScriptLoadFailure,clientId:e.clientId,cookiePolicy:e.cookiePolicy,loginHint:e.loginHint,hostedDomain:e.hostedDomain,fetchBasicProfile:e.fetchBasicProfile,discoveryDocs:e.discoveryDocs,uxMode:e.uxMode,redirectUri:e.redirectUri,scope:e.scope,accessType:e.accessType,onLogoutSuccess:e.onLogoutSuccess}),E=x.signOut,w=j||!x.loaded;if(v)return v({onClick:E,disabled:w});var O={backgroundColor:"dark"===k?"rgb(66, 133, 244)":"#fff",display:"inline-flex",alignItems:"center",color:"dark"===k?"#fff":"rgba(0, 0, 0, .54)",boxShadow:"0 2px 2px 0 rgba(0, 0, 0, .24), 0 0 1px 0 rgba(0, 0, 0, .24)",padding:0,borderRadius:2,border:"1px solid transparent",fontSize:14,fontWeight:"500",fontFamily:"Roboto, sans-serif"},M=w?Object.assign({},O,p):i?Object.assign({},O,{cursor:"pointer",backgroundColor:"dark"===k?"#3367D6":"#eee",color:"dark"===k?"#fff":"rgba(0, 0, 0, .54)",opacity:1}):n?Object.assign({},O,{cursor:"pointer",opacity:.9}):O;return g.a.createElement(s,{onMouseEnter:function(){return r(!0)},onMouseLeave:function(){r(!1),a(!1)},onMouseDown:function(){return a(!0)},onMouseUp:function(){return a(!1)},onClick:E,style:M,type:u,disabled:w,className:l},[S&&g.a.createElement(d,{key:1,active:i}),g.a.createElement(f,{icon:S,key:2},m||y)])}p.defaultProps={type:"button",tag:"button",buttonText:"Sign in with Google",scope:"profile email",accessType:"online",prompt:"",cookiePolicy:"single_host_origin",fetchBasicProfile:!0,isSignedIn:!1,uxMode:"popup",disabledStyle:{opacity:.6},icon:!0,theme:"light",onRequest:function(){}};var v=p,b=function(e){var t,n,r=e.jsSrc,o=void 0===r?"https://apis.google.com/js/api.js":r,i=e.onFailure,c=e.onScriptLoadFailure,s=e.clientId,f=e.cookiePolicy,d=e.loginHint,p=e.hostedDomain,g=e.fetchBasicProfile,y=e.discoveryDocs,m=e.uxMode,v=e.redirectUri,b=e.scope,k=e.accessType,S=e.onLogoutSuccess,j=function(e){if(Array.isArray(e))return e}(t=Object(h.useState)(!1))||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(s){o=!0,i=s}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}(t,2)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}(t,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),x=j[0],E=j[1],w=Object(h.useCallback)(function(){if(window.gapi){var e=window.gapi.auth2.getAuthInstance();null!=e&&e.then(function(){e.signOut().then(function(){e.disconnect(),S()})},function(e){return i(e)})}},[S]);return Object(h.useEffect)(function(){var e=c||i;return u(document,"script","google-login",o,function(){var t={client_id:s,cookie_policy:f,login_hint:d,hosted_domain:p,fetch_basic_profile:g,discoveryDocs:y,ux_mode:m,redirect_uri:v,scope:b,access_type:k};window.gapi.load("auth2",function(){window.gapi.auth2.getAuthInstance()?E(!0):window.gapi.auth2.init(t).then(function(){return E(!0)},function(t){return e(t)})})},function(t){e(t)}),function(){l(document,"google-login")}},[]),{signOut:w,loaded:x}};m.defaultProps={type:"button",tag:"button",buttonText:"Logout of Google",disabledStyle:{opacity:.6},icon:!0,theme:"light",jsSrc:"https://apis.google.com/js/api.js"};var k=m}],r.c=n,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t||4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,(function(t){return e[t]}).bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=4);function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}},e.exports=o(n(67294))}}]);