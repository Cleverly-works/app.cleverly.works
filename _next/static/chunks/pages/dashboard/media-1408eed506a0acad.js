(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5868],{75420:function(e,t,r){"use strict";r.d(t,{r:function(){return o}});var n=r(46482),i=r(85893),o=function(e){var t=e.errors,r=e.name,o=e.onChange,s=e.options,c=e.register;return(0,i.jsx)(n.Z,{errors:t,name:r,onChange:o,options:s,register:c})};o.defaultProps={name:"status"}},3896:function(e,t,r){"use strict";r.d(t,{X:function(){return c}});var n=r(67294),i=r(69119),o=r(23855),s=r(83894);function c(e,t,r){var c=(0,n.useState)(function(){if(JSON.parse(window.sessionStorage.getItem(e))&&!Object.values(JSON.parse(window.sessionStorage[e])).includes(r))return t;try{var n=JSON.parse(window.sessionStorage.getItem(e));return n&&(n.startDate=n.startDate?(0,i.Z)((0,o.Z)(n.startDate)):null,n.endDate=n.endDate?(0,s.Z)((0,o.Z)(n.endDate)):null),n||t}catch(c){return t}}),u=c[0],a=c[1],l=function(t){try{var r=t instanceof Function?t(u):t;a(r),window.sessionStorage.setItem(e,JSON.stringify(r))}catch(n){}};return[u,l]}},32647:function(e,t,r){"use strict";r.d(t,{J:function(){return S}});var n=r(59499),i=r(16835),o=r(4730),s=r(11163),c=r(67294),u=r(78215),a=r(2356),l=r(42283),f=r(97202),p=r(78171),b=r(65375),d=r(10973),O=r(56990),j=r(92264),y=function(e){return e},g=r(3896),h=r(85893);function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var v=function(e){var t=e.initialValues,r=e.renderFilters,n=e.setFilters,o=e.lastQuery,s=e.filters,m=y(t.filterType),v=(0,g.X)("form_data",t,m),x=(0,i.Z)(v,2),P=x[0],Z=x[1],S=(0,l.cI)({defaultValues:P||t}),D=S.control,C=S.errors,E=S.handleSubmit,F=S.register,N=S.reset,_=S.watch,k=S.setValue,T=_(),V=w(w({},T),{},{filterType:m});(0,c.useEffect)(function(){N(V)},[N]),(0,c.useEffect)(function(){Z(V)},[s]);var I=function(e){var r=e.query;if(r!==o){var i={q:"%".concat(r,"%")||0},s=/^\d+$/.test(r);"id"in t&&(i.id=s?Number(r):null),"meta"in t&&(i.meta=s?{invoiceNumbers:[r]}:null),"jobNumber"in t&&(i.jobNumber=s?String(r):null,i.invoiceNumber=s?Number(r):null),n(function(e){return w(w({},e),i)})}},J=function(e){Object.keys(t).map(function(e){return k(e,null)}),n(t),N(t),I("")};return(0,h.jsx)(f.Z,{handleSubmit:E(I),children:(0,h.jsxs)(p.Z,{title:"Filters",children:[(0,h.jsxs)(u.Z,{children:[(0,h.jsx)(a.Z,{sm:12,lg:12,children:(0,h.jsx)(b.Z,{label:"",children:(0,h.jsx)(d.Z,{errors:C,label:"Search",name:"email",placeholder:"Search...",prependSearchIcon:!0,register:F,type:"search"})})}),(0,h.jsx)(a.Z,{sm:12,lg:12,children:r({control:D,errors:C,initialValues:t,register:F,setFilters:n,watch:_,setValue:k,reset:N})})]}),(0,h.jsx)(j.H,{content:"Search",context:"secondary",handleClick:I,type:"submit",children:(0,h.jsx)(O.Z,{content:"Clear",context:"danger",onClick:J,size:"sm"})})]})})},x=["FiltersComp","initialFilters","TableComp"];function P(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function Z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?P(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var S=function(e){var t=e.FiltersComp,r=e.initialFilters,n=e.TableComp,l=(0,o.Z)(e,x),f=y(r.filterType),p=(0,g.X)("filters",r,f),b=(0,i.Z)(p,2),d=b[0],O=b[1],j=(0,c.useState)(d||r),m=j[0],w=j[1],P=(0,s.useRouter)().query.show;return(0,c.useEffect)(function(){O(m)},[m]),(0,h.jsx)(u.Z,{children:(0,h.jsxs)(a.Z,{sm:12,lg:12,children:[(0,h.jsx)(v,{initialValues:r,renderFilters:function(e){return(0,h.jsx)(t,Z(Z(Z({},e),l),{},{show:P}))},setFilters:w,filters:m}),(0,h.jsx)(n,Z({filters:m,initialFilters:r},l))]})})}},16467:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return y}});var n=r(66918),i=r(32647),o=r(99229),s=r(59499),c=r(75420),u=[{text:"Type",value:""},{text:"Document",value:"document"},{text:"Image",value:"image"},{text:"Video",value:"video"}],a=r(78215),l=r(2356),f=r(85893);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach(function(t){(0,s.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var d=function(e){e.control;var t=e.errors,r=e.register,n=e.setFilters;return(0,f.jsx)(a.Z,{children:(0,f.jsx)(l.Z,{md:6,children:(0,f.jsx)(c.r,{errors:t,name:"type",onChange:function(e){return n(function(t){return b(b({},t),{},{type:e.target.value||null})})},options:u,register:r})})})},O={q:null,type:null,filterType:"media_table"},j=function(){return(0,f.jsx)(i.J,{carousel:!1,details:!0,listView:!0,showActionButtons:!1,showEntityColumn:!0,FiltersComp:d,initialFilters:O,TableComp:o.G})},y=function(){return(0,f.jsx)(n.Z,{pageHeading:{heading:"Media"},View:(0,f.jsx)(j,{})})}},87422:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/media",function(){return r(16467)}])}},function(e){e.O(0,[3662,2283,5391,5312,4425,1410,212,9947,4952,465,7840,9229,9774,2888,179],function(){return e(e.s=87422)}),_N_E=e.O()}]);