(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5503],{13868:function(e,t,r){"use strict";r.d(t,{n:function(){return v}});var n=r(59499),i=r(78171),o=r(55572),a=r(34868),l=r(38603),s=r(78215),c=r(2356),u=r(47568),d=r(85893);function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var v=function(e){var t=e.errors,r=e.register,n=e.pricingWatch,m=e.hasServiceRate,v=e.isPPM,b={register:r,errors:t},f=u.Hu.filter(function(e){var t=e.value;return!v||"fixed"===t});return(0,d.jsxs)(i.Z,{dataSet:{"data-cy":"pricing"},open:!0,title:"Pricing",children:[(0,d.jsx)(o.Z,p(p({},b),{},{data:f,legend:"Pricing",name:"pricing"})),"time-materials"===n&&(0,d.jsx)(a.Z,p(p({},b),{},{label:"Spend Threshold",name:"customerSpendThreshold",vat:"Ex VAT"})),"fixed"===n&&(0,d.jsxs)(d.Fragment,{children:[m?(0,d.jsx)(l.Z,{content:"This customer has a service rate on their account. The customer amounts will be calculated using the relevant service rates.",context:"info"}):(0,d.jsx)(a.Z,p(p({},b),{},{label:"Customer",name:"amount",vat:"Ex VAT"})),(0,d.jsxs)(s.Z,{children:[(0,d.jsx)(c.Z,{sm:12,md:6,children:(0,d.jsx)(a.Z,p(p({},b),{},{label:"Supplier labour amount",name:"supplierLabourAmount",vat:"Ex VAT"}))}),(0,d.jsx)(c.Z,{sm:12,md:6,children:(0,d.jsx)(a.Z,p(p({},b),{},{label:"Supplier materials amount",name:"supplierMaterialsAmount",vat:"Ex VAT"}))})]})]})]})}},42985:function(e,t,r){"use strict";r.d(t,{t:function(){return u}});var n=r(59499),i=r(78171),o=r(71772),a=r(27940),l=r(85893);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var u=function(e){var t=e.control,r=e.errors,n={control:t,errors:r,register:e.register};return(0,l.jsxs)(i.Z,{dataSet:{"data-cy":"taxonomy"},open:!0,title:"Service",children:[(0,l.jsx)(a.l,c(c({},n),{},{label:"Cost category",name:"costCategorySelected",type:"costCategory"})),(0,l.jsx)(o.P,c(c({},n),{},{errors:c({},r),name:"serviceSelected",label:"Service",type:"service"}))]})}},81231:function(e,t,r){"use strict";r.d(t,{X:function(){return Z}});var n=r(59499),i=r(67294),o=r(78171),a=r(65375),l=r(46482),s=r(55572),c=r(78215),u=r(2356),d=r(30590),m=r(52220),p=r(47568),v=[{text:"Select...",value:""},{text:"Today",value:"today"},{text:"This week",value:"thisWeek"},{text:"This month",value:"thisMonth"},{text:"Next Three month",value:"nextThreeMonth"}],b=r(4135),f=r(43703),y=r(11640),j=r(83894),h=r(69119),g=r(67090),O=function(){var e=(0,b.Z)(new Date),t=(0,f.Z)(new Date),r=(0,b.Z)((0,y.Z)(new Date(t),2)),n=(0,j.Z)(new Date),i=(0,h.Z)(new Date),o=(0,g.Z)(new Date);return{monthEnd:e,nextThreeEnd:r,todayEnd:n,todayStart:i,weekEnd:o}},x=r(85893);function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var P=p.KB,Z=function(e){var t=e.control,r=e.errors,n=e.hasRole,b=e.query,f=e.register,y=e.setValue,j=e.timingWatch,h=e.watch,g={control:t,errors:r,register:f},w=n("customer")&&!n("admin"),Z=h("pricing"),D=h("timingStart"),q=h("timingEnd"),I=h("multipleDays"),E=h("timeSpan"),T=h("timing");(0,i.useEffect)(function(){w&&(P=p.KB.filter(function(e){return"at"!==e.value}),y("timing","between")),E&&k({time:E,setValue:y})},[E]),(0,i.useEffect)(function(){"at"===T&&y("timeSpan","")},[T]);var k=function(e){var t,r,n=e.time,i=e.setValue,o=O(),a=o.monthEnd,l=o.todayStart,s=o.weekEnd,c=o.todayEnd,u=o.nextThreeEnd;switch(n){case"today":t=l,r=c;break;case"thisWeek":t=l,r=s;break;case"thisMonth":t=l,r=a;break;case"nextThreeMonth":t=l,r=u}i("timing","between"),i("timingStart",t),i("timingEnd",r)},R=function(e){var t=new Date,r=new Date(e);return t.getTime()<r.getTime()},V=function(e){var t=D?new Date(D):new Date,r=new Date(e);return t.getTime()<r.getTime()};return(0,x.jsxs)(o.Z,{dataSet:{"data-cy":"timing"},open:!0,title:"Timing",children:[!(null!=b&&b.id)&&y&&(0,x.jsx)(a.Z,{label:"Select Time span",children:(0,x.jsx)(l.Z,S(S({},g),{},{name:"timeSpan",options:v}))}),(0,x.jsx)(s.Z,S(S({},g),{},{data:P,legend:"Timing",name:"timing"})),(0,x.jsxs)(c.Z,{children:[(0,x.jsxs)(u.Z,{md:12,children:[(0,x.jsx)(a.Z,{label:"Start time"}),(0,x.jsx)(m.M,S(S({},g),{},{dateFormat:"d MMM yyyy HH:mm",maxDate:q?new Date(q):null,minDate:new Date,filterTime:R,name:"timingStart",placeholder:"Click to select Start time",showTimeSelect:!0,todayButton:!1}))]}),"at"!==j&&(0,x.jsxs)(u.Z,{md:12,children:[(0,x.jsx)(a.Z,{label:"End time"}),(0,x.jsx)(m.M,S(S({},g),{},{dateFormat:"d MMM yyyy HH:mm",disableInitialDateBackground:!1,minDate:D?new Date(D):new Date,filterTime:V,name:"timingEnd",showTimeSelect:!0,todayButton:!1}))]})]}),D instanceof Date&&"fixed"===Z&&(0,x.jsx)(d.Z,S(S({},g),{},{data:[{id:"multipleDays",label:"Multiple days"}],name:"multipleDays"})),I&&(0,x.jsx)(a.Z,{label:"End Date",children:(0,x.jsx)(m.M,S(S({},g),{},{dateFormat:"d MMM yyyy HH:mm",disableInitialDateBackground:!0,filterTime:V,minDate:D?new Date(D):new Date,name:"endDate",showTimeSelect:!0,todayButton:!1}))}),n("admin")&&(0,x.jsx)(d.Z,S(S({},g),{},{data:[{id:"allowTimingNormalHours",label:"Allow premium rates to be used",value:"allowTimingNormalHours"}],name:"allowTimingNormalHours"}))]})}},11552:function(e,t,r){"use strict";r.d(t,{F:function(){return s}});var n,i=r(50029),o=r(64687),a=r.n(o),l=r(38512),s=(n=(0,i.Z)(a().mark(function e(t,r,n){var i,o;return a().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return i={},o={},e.next=4,t.mutate({mutation:l.iU,variables:{jobId:r,invoiceType:"supplier"},skip:n&&"supplier"!==n}).then(function(e){var t;i=null==e?void 0:null===(t=e.data.calculateJobFinance)||void 0===t?void 0:t.data.persistentData});case 4:return e.next=6,t.mutate({mutation:l.iU,variables:{jobId:r,invoiceType:"customerVat"},skip:n&&"supplier"===n}).then(function(e){var t;o=null==e?void 0:null===(t=e.data.calculateJobFinance)||void 0===t?void 0:t.data.persistentData});case 6:return e.abrupt("return",{financeSupplier:i,financeCustomer:o});case 7:case"end":return e.stop()}},e)})),function(e,t,r){return n.apply(this,arguments)})},47568:function(e,t,r){"use strict";r.d(t,{Hu:function(){return n},KB:function(){return i},M2:function(){return o}});var n=[{id:"time-materials",label:"Time & Materials",value:"time-materials"},{id:"fixed",label:"Fixed",value:"fixed"}],i=[{id:"at",label:"At",value:"at"},{id:"between",label:"Between",value:"between"}],o=[{id:"complete",label:"Job complete",value:"complete"},{id:"completeCertificate",label:"Job complete, certificate to follow",value:"completeCertificate"},{id:"returnVisit",label:"Return visit required",value:"returnVisit"},{id:"returnVisitByAnother",label:"Visit required by another supplier",value:"returnVisitByAnother"},{id:"couldNotDo",label:"Could not do",value:"couldNotDo"}]},26380:function(e,t,r){"use strict";r.d(t,{WG:function(){return i},bg:function(){return n}});var n=[{text:"Status",value:""},{text:"Active",value:"active"},{text:"Inactive",value:"inactive"}],i=[{text:"Status",value:""},{text:"To do",value:"toDo"},{text:"In progress",value:"inProgress"},{text:"Done",value:"done"},{text:"Blocked",value:"blocked"}]},54587:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return eU}});var n=r(59499),i=r(11163),o=r.n(i),a=r(66918),l=r(50029),s=r(16835),c=r(64687),u=r.n(c),d=r(67294),m=r(26075),p=r(38460),v=r(256),b=r(38512),f=r(75847),y=r(34197),j=r(42283),h=r(79665),g=r(47385),O=r(97202),x=r(78215),w=r(2356),S=r(56990),P=r(93633),Z=r(59636),D=r(83863),q=r(54559),I=r(80880),E=r(18862),T=r(78171),k=r(67872),R=r(64723),V=r(1820),M=r(55863),C=r(85893);function A(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function W(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?A(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):A(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var _=(0,D.Z)((0,q.Z)(new Date,12)),F=(0,d.memo)(function(e){var t,r,n=e.jobId,i=e.locationId,o=e.serviceId,a=(0,V.x)({filters:{}}),l=a.initialData,s=a.ref,c=(0,d.useContext)(I.Z),u=(0,M.q)(),m=null===(t=u.admin.jobSetting)||void 0===t?void 0:t.jobNumberPrefix,p=null===(r=u.admin.jobSetting)||void 0===r?void 0:r.jobNumberSuffix,v=(0,P.a)(Z.sW,{variables:W(W({jobId:n,locationId:i},l),{},{serviceId:o,startDate:_})}),b=v.data,f=(b=void 0===b?{jobs:[],meta:{aggregate:{totalCount:0}}}:b).jobs,y=b.meta,j=v.loading,h=v.refetch,g=function(e){c.show({content:(0,C.jsx)(R.g,{jobId:e.id,toggleShow:c.close,numberPrefix:m,numberSuffix:p}),submit:!1,title:"Job details",width:"50%"})};return(0,C.jsx)(T.Z,{title:"Job History",children:(0,C.jsx)(k.t,{columns:[{hidden:!0,text:"Id"},{text:"Title"},{text:"Service"},{text:"Date"}],history:!1,loading:j,meta:y,ref:s,refetch:h,rowClick:g,rows:f.map(function(e){var t;return{id:e.id,title:e.title,service:null===(t=e.service)||void 0===t?void 0:t.name,createdDate:(0,E.Z)(e.createdAt)}})})})},function(e,t){var r=!0;return(t.locationId!==e.locationId||t.serviceId!==e.serviceId)&&(r=!1),r}),N=r(27812),H=r(65375),U=r(46482),B=r(71772),J=r(86559),Q=r(19015);function L(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function X(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?L(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):L(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var z=(0,d.memo)(function(e){var t=e.control,r=e.customerSelectedWatch,n=e.errors,i=e.hasRole,o={control:t,errors:n,register:e.register};return(0,C.jsxs)(T.Z,{dataSet:{"data-cy":"customer"},open:!0,title:"Customer",children:[(0,C.jsx)(B.P,X(X({},o),{},{errors:X({},n),label:"Customer",name:"customerSelected",type:"customer"})),r&&(0,C.jsx)(B.P,X(X({},o),{},{isDisabled:!i([].concat((0,N.Z)(Q.td),(0,N.Z)(Q.Sf),(0,N.Z)(Q.n))),accountId:(null==r?void 0:r.value)||null,errors:X({},n),label:"Contact User",name:"customerUserSelected",type:"user"})),i("admin")&&(0,C.jsx)(H.Z,{label:"Source",children:(0,C.jsx)(U.Z,X(X({},o),{},{name:"source",options:J.Y}))})]})},function(e,t){var r,n;return e.customerSelectedWatch===t.customerSelectedWatch&&!(null!==(r=t.errors.customerSelected)&&void 0!==r&&r.message)&&!(null!==(n=t.errors.customerUserSelected)&&void 0!==n&&n.message)}),G=r(84268),K=r(83528),Y=r(55572),$=r(38603),ee=r(71247),et=r(30590),er=r(9105),en=r(27940),ei=r(19957),eo=r(40527),ea=r(72936);function el(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function es(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?el(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):el(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var ec=function(e){var t,r=e.complianceWatch,n=e.control,i=e.currentAnswers,o=e.errors,a=e.isQuote,l=e.isPPM,s=e.jobId,c=e.locationSelectedWatch,u=e.prevTaxonomy,m=e.register,p=e.taxonomyWatch,v=e.watch,b=e.dataSlas,f=(0,ea.x)().hasRole,y=(0,d.useContext)(I.Z),j=(0,d.useState)(i),h=j[0],g=j[1],O=v("slaId");(0,d.useEffect)(function(){p!==u&&p&&q(null==p?void 0:p.childs)},[p]);var S=(0,eo.G2)(b),P=null==S?void 0:null===(t=S.find(function(e){return e.id===Number(O)}))||void 0===t?void 0:t.notes,Z={errors:o,register:m,control:n},D=function(e){g(e),y.close()},q=function(e){e&&e.length>0?y.show({content:(0,C.jsx)(ei.D,{onSuccess:D,entity:"Job",entityId:s,questions:e}),title:"Please answer the following questions"}):g([])};return(0,C.jsxs)(T.Z,{dataSet:{"data-cy":"details"},open:!0,title:"Description",children:[(0,C.jsx)(en.l,es(es({},Z),{},{label:a?"Quote Headline":"Short job description",name:"taxonomyId_ShortDesc",type:"jobTags"})),(0,C.jsx)(er.y,{answers:h,onEdit:q}),(0,C.jsx)(G.Z,{}),(0,C.jsx)(H.Z,{label:"Work Description",children:(0,C.jsx)(K.Z,es(es({},Z),{},{name:"description",rows:3}))}),!l&&!a&&!!S.length&&(0,C.jsx)(Y.Z,es(es({},Z),{},{data:S,legend:"Priority",name:"slaId"})),!a&&O&&(0,C.jsx)($.Z,{content:P||"-",context:"light"}),!a&&(0,C.jsxs)(x.Z,{children:[(0,C.jsx)(w.Z,{md:6,children:(0,C.jsx)(H.Z,{label:"Estimated duration",children:(0,C.jsx)(ee.Z,es(es({},Z),{},{name:"estimatedDuration",type:"number",defaultValue:90,min:0}))})}),(0,C.jsx)(w.Z,{md:6,children:(0,C.jsx)(H.Z,{label:"Unit",children:(0,C.jsx)(U.Z,es(es({},Z),{},{name:"estimatedDurationUnit",options:[{text:"Hours",value:"hours"},{text:"Minutes",value:"minutes"},{text:"Days",value:"days"}],defaultValue:"minutes"}))})})]}),(0,C.jsx)(H.Z,{label:"".concat(f("customer")?"Your reference":"Customer reference"),children:(0,C.jsx)(ee.Z,es(es({},Z),{},{name:"reference"}))}),(0,C.jsx)(ee.Z,es(es({},Z),{},{name:"questions",type:"hidden",defaultValue:JSON.stringify(h)})),(0,C.jsx)(et.Z,es(es({},Z),{},{data:[{id:"compliance",label:"Compliance",value:!!r}],name:"compliance"})),r&&(0,C.jsx)(B.P,es(es({},Z),{},{errors:es({},o),label:"",locationId:null==c?void 0:c.value,name:"complianceSelected",type:"compliance"})),(0,C.jsx)(ee.Z,es(es({},Z),{},{name:"reportPassFail",type:"hidden"})),(0,C.jsx)(ee.Z,es(es({},Z),{},{name:"reportPassFailTitle",type:"hidden"})),(0,C.jsx)(ee.Z,es(es({},Z),{},{name:"requireReportRecommendations",type:"hidden"})),(0,C.jsx)(ee.Z,es(es({},Z),{},{name:"customerSignature",type:"hidden"})),(0,C.jsx)(ee.Z,es(es({},Z),{},{name:"supplierSignature",type:"hidden"})),(0,C.jsx)(ee.Z,es(es({},Z),{},{name:"onSiteTimingEnd",type:"hidden"}))]})};ec.defaultProps={isQuote:!1};var eu=r(19958),ed=r(76301),em=r(87108);function ep(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function ev(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ep(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ep(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var eb=["manager","owner"],ef=function(e){var t,r,n=e.assetCategoryWatch,i=e.control,o=e.customerSelectedWatch,a=e.customerUserSelectedWatch,l=e.errors,c=e.locationSelectedWatch,u=e.register,d=e.setValue,m=(0,M.q)(),p=null==m?void 0:null===(t=m.admin)||void 0===t?void 0:null===(r=t.modules)||void 0===r?void 0:r.assets,v=(0,P.a)(ed.kB,{variables:{accountId:null==o?void 0:o.value,userId:null==a?void 0:a.value}}).data,b=(v=void 0===v?{accountUsers:[]}:v).accountUsers,f=function(e){var t=(0,s.Z)(e,1)[0];d("locationSelected",{value:t.id,label:t.name})},y={isClearable:!1,control:i,errors:l,register:u};return(0,C.jsxs)(T.Z,{dataSet:{"data-cy":"location"},open:!0,title:"Location",children:[(0,C.jsx)(B.P,ev(ev({},y),{},{accountId:null==o?void 0:o.value,errors:ev({},l),name:"locationSelected",label:"Property",type:"property",customerRole:b.some(function(e){return eb.includes(e.role)})?null:"user",customerId:null==a?void 0:a.value,AddForm:function(){return(0,C.jsx)(eu.V,{initialValues:{propertyOwner:ev({},o)},isPropsComponent:!0,entity:"Location",onAddressCreated:f})}})),c&&(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(B.P,ev(ev({},y),{},{isClearable:!0,label:"Sublocation",locationId:c.value,name:"sublocationSelected",type:"sublocation"})),(0,C.jsx)(H.Z,{label:"Access information",children:(0,C.jsx)(K.Z,ev(ev({},y),{},{name:"access",rows:2}))}),p&&(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(B.P,ev(ev({},y),{},{isClearable:!0,label:"Asset Category",locationId:c.value,name:"assetCategorySelected",type:"assetCategory"})),(0,C.jsx)(ey,ev(ev({},y),{},{isClearable:!0,isDisabled:!n,label:"Assets",locationId:c.value,assetCategoryId:(null==n?void 0:n.value)||null,name:"assetSelected",type:"asset",isMulti:!0}))]})]})]})},ey=(0,em.ZP)(B.P).withConfig({displayName:"location__StyledSelect",componentId:"sc-18zko7j-0"})(["&& > div:first-of-type{","}&&{margin-bottom:1rem;}"],function(e){return e.isDisabled?"background-color: #cecece !important;":""});function ej(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var eh=(0,d.memo)(function(e){var t=e.control,r=e.errors,i=e.user;return(0,C.jsx)(T.Z,{dataSet:{"data-cy":"manager"},open:!0,title:"Admin User",children:(0,C.jsx)(B.P,{control:t,accountId:i.accountId,errors:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ej(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ej(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},r),isClearable:!1,label:"Assigned to",name:"managerSelected",type:"user"})})},function(e,t){return!0});function eg(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function eO(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?eg(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):eg(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var ex=["1w","1m","3m","6m","12m"].map(function(e){return{id:e,label:e,value:e}}),ew=[1,2,3,4].map(function(e){return{id:"week"+e,label:e,value:"week"+e}}),eS=function(e){var t,r=e.control,n={control:r,errors:e.errors,register:(e.locationId,e.register)};return(0,C.jsxs)(T.Z,{dataSet:{"data-cy":"ppm"},open:!0,title:"PPM",children:[(0,C.jsx)(et.Z,eO(eO({},n),{},{data:ex,legend:"Frequency",name:"frequency",stacked:!1})),(0,C.jsx)(H.Z,{label:"Frequency Description",children:(0,C.jsx)(K.Z,eO(eO({},n),{},{name:"frequencyDesc",rows:2}))}),(0,C.jsx)(et.Z,eO(eO({},n),{},{data:ew,legend:"Week",name:"week",stacked:!1}))]})},eP=r(13868),eZ=r(52220);function eD(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function eq(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?eD(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):eD(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var eI=function(e){var t=e.control,r=e.errors,n=e.register,i=e.siteVisitWatch,o=e.watch,a={control:t,errors:r,register:n},l=o("siteVisitStart"),s=o("siteVisitEnd"),c=o("siteVisitWeekends"),u=function(e){var t=new Date,r=new Date(e);return r.getHours()>=8&&17>r.getHours()&&t.getTime()<r.getTime()},d=function(e){var t=l?new Date(l):new Date,r=new Date(e);return r.getHours()>=8&&17>r.getHours()&&t.getTime()<r.getTime()},m=function(e){var t=e.getDay();return 0!==t&&6!==t};return(0,C.jsxs)(T.Z,{dataSet:{"data-cy":"quote"},open:!0,title:"Quote information",children:[(0,C.jsx)(H.Z,{label:"Number of Quotes",children:(0,C.jsx)(U.Z,eq(eq({},a),{},{name:"quoteNumber",placeholder:"Select number of quotes",range:[4,1]}))}),(0,C.jsx)(H.Z,{label:"Quote due date",children:(0,C.jsx)(eZ.M,eq(eq({},a),{},{name:"quoteDue",placeholder:"Click to select Quote Due Date"}))}),(0,C.jsx)(et.Z,eq(eq({},a),{},{data:[{id:"siteVisitReq",label:"Site visit required",value:!0}],name:"siteVisitReq"})),i&&(0,C.jsxs)(x.Z,{children:[(0,C.jsx)(w.Z,{md:12,children:(0,C.jsx)(et.Z,eq(eq({},a),{},{data:[{id:"siteVisitWeekends",label:"Include Weekends",value:!0}],name:"siteVisitWeekends"}))}),(0,C.jsxs)(w.Z,{md:12,children:[(0,C.jsx)(H.Z,{label:"Start time"}),(0,C.jsx)(eZ.M,eq(eq({},a),{},{dateFormat:"d MMM yyyy HH:mm",minDate:new Date,maxDate:s?new Date(s):null,filterTime:u,filterDate:!c&&m,name:"siteVisitStart",showTimeSelect:!0,todayButton:!1}))]}),l&&(0,C.jsxs)(w.Z,{md:12,children:[(0,C.jsx)(H.Z,{label:"End time"}),(0,C.jsx)(eZ.M,eq(eq({},a),{},{dateFormat:"d MMM yyyy HH:mm",disableInitialDateBackground:!1,minDate:l?new Date(l):new Date,filterTime:d,filterDate:!c&&m,name:"siteVisitEnd",showTimeSelect:!0,todayButton:!1}))]})]})]})},eE=r(74231);(0,eE.Ry)().shape({title:(0,eE.Z_)().required(),description:(0,eE.Z_)().required(),access:(0,eE.Z_)(),serviceSelected:(0,eE.Ry)().required(),timingEnd:(0,eE.hT)().required(),timingStart:(0,eE.hT)().required()});var eT=r(42985),ek=r(81231),eR=r(30381),eV=r.n(eR);function eM(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function eC(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?eM(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):eM(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var eA=function(e){var t,r,n,i=e.defaultValues,o=e.job,a=e.onSubmit,l=e.query,s=(0,ea.x)(),c=s.hasRole,u=s.user,m=(0,j.cI)({defaultValues:i,resolver:(0,h.S)((t=l,r=c,n=i.type,(0,eE.Ry)().shape({managerSelected:r("admin")&&(0,eE.Ry)().required(),customerSelected:(0,eE.Ry)().nullable().required(),customerUserSelected:(0,eE.Ry)().required(),source:r("admin")&&(0,eE.Z_)().oneOf(["call","email","portal","other"]).required(),slaId:!t.quoted&&"ppm"!==n&&(0,eE.Rx)().required(),description:(0,eE.Z_)().required(),taxonomyId_ShortDesc:(0,eE.Ry)().required(),reference:(0,eE.Z_)(),locationSelected:(0,eE.Ry)().required(),access:(0,eE.Z_)().required(),pricing:!t.quoted&&(0,eE.Z_)().oneOf(["time-materials","fixed"]),customerSpendThreshold:!t.quoted&&(0,eE.Rx)().transform(function(e){return isNaN(e)?null:e}).nullable(),amount:!t.quoted&&(0,eE.Rx)().transform(function(e){return isNaN(e)?null:e}).nullable(),supplierLabourAmount:!t.quoted&&(0,eE.Rx)().transform(function(e){return isNaN(e)?null:e}).nullable(),supplierMaterialsAmount:!t.quoted&&(0,eE.Rx)().transform(function(e){return isNaN(e)?null:e}).nullable(),quoteNumber:t.quoted&&(0,eE.Z_)().required(),quoteDue:t.quoted&&(0,eE.hT)().required(),siteVisitStart:t.quoted&&(0,eE.hT)().when("siteVisitReq",{is:"true",then:(0,eE.hT)().required()}),siteVisitEnd:t.quoted&&(0,eE.hT)().when("siteVisitReq",{is:"true",then:(0,eE.hT)().required()}),siteVisitWeekends:t.quoted&&(0,eE.Z_)(),costCategorySelected:r(["admin","customer"])&&!t.quoted&&(0,eE.Ry)().required(),serviceSelected:r(["admin","customer"])&&!t.quoted&&(0,eE.Ry)().required(),timing:!t.quoted&&(0,eE.Z_)().required().oneOf(["at","between"]),timingStart:!t.quoted&&(0,eE.hT)().required(),timingEnd:!t.quoted&&(0,eE.hT)().when("timing",{is:"between",then:(0,eE.hT)().required()}),allowTimingNormalHours:!t.quoted&&(0,eE.Z_)(),complianceSelected:(0,eE.Ry)().when("compliance",{is:"true",then:(0,eE.Ry)().required()}),reportPassFail:(0,eE.Xg)(),reportPassFailTitle:(0,eE.Z_)().nullable(),customerSignature:(0,eE.Xg)(),supplierSignature:(0,eE.Xg)(),requireReportRecommendations:(0,eE.Xg)(),estimatedDuration:(0,eE.Rx)().min(0),estimatedDurationUnit:(0,eE.Z_)()})))}),p=m.control,v=m.errors,f=m.formState,y=m.handleSubmit,Z=m.register,D=m.setValue,q=m.watch,I=q("customerSelected",i.customerSelected),E=q("customerUserSelected",i.customerUserSelected),T=q("locationSelected",i.locationSelected),k=q("pricing",i.pricing),R=q("serviceSelected",i.serviceSelected),V=q("timing",i.timing),M=q("siteVisitReq",i.siteVisitReq),A=q("taxonomyId_ShortDesc"),W=q("compliance",i.compliance),_=q("assetCategorySelected",null==i?void 0:i.assetCategory),N=q("slaId"),H=(0,g.Z)(I),U=(0,g.Z)(E),B=(0,g.Z)(T),J=(0,g.Z)(A),Q=(0,g.Z)(_),L=(0,P.a)(b.Ab,{variables:{customerId:null==I?void 0:I.value,locationId:null==T?void 0:T.value}}).data;(0,d.useEffect)(function(){if(void 0!==B&&T!==B?[{name:"access",value:(null==T?void 0:T.access)||""},{name:"coordinates",value:null}].forEach(function(e){var t;return D(e.name,e.value)}):I!==H&&H?[{name:"coordinates",value:null},{name:"customerUserSelected",value:null},{name:"locationSelected",value:null}].forEach(function(e){var t;return D(e.name,e.value)}):k&&!l.parentId&&!l.id&&[{name:"customerSpendThreshold",value:null==I?void 0:I.spendThreshold},{name:"amount",value:null==A?void 0:null===(d=A.meta)||void 0===d?void 0:null===(m=d.template)||void 0===m?void 0:m.amount},{name:"supplierLabourAmount",value:null==A?void 0:null===(p=A.meta)||void 0===p?void 0:null===(v=p.template)||void 0===v?void 0:v.supplierLabourAmount},{name:"supplierMaterialsAmount",value:null==A?void 0:null===(b=A.meta)||void 0===b?void 0:null===(f=b.template)||void 0===f?void 0:f.supplierMaterialsAmount}].forEach(function(e){var t;return D(e.name,e.value)}),A!==J&&!l.id&&!l.parentId){[{name:"title",value:null==A?void 0:null===(y=A.meta)||void 0===y?void 0:null===(j=y.template)||void 0===j?void 0:j.title},{name:"description",value:null==A?void 0:null===(h=A.meta)||void 0===h?void 0:null===(g=h.template)||void 0===g?void 0:g.description},{name:"slaId",value:null==A?void 0:null===(O=A.meta)||void 0===O?void 0:null===(x=O.template)||void 0===x?void 0:x.slaId},{name:"costCategorySelected",value:null==A?void 0:null===(w=A.meta)||void 0===w?void 0:null===(S=w.template)||void 0===S?void 0:S.costCategorySelected},{name:"serviceSelected",value:null==A?void 0:null===(P=A.meta)||void 0===P?void 0:null===(Z=P.template)||void 0===Z?void 0:Z.serviceSelected},{name:"reportPassFail",value:(null==A?void 0:null===(q=A.meta)||void 0===q?void 0:null===(R=q.template)||void 0===R?void 0:R.reportPassFail)||!1},{name:"customerSignature",value:(null==A?void 0:null===(V=A.meta)||void 0===V?void 0:null===(M=V.template)||void 0===M?void 0:M.customerSignature)||!1},{name:"supplierSignature",value:(null==A?void 0:null===(C=A.meta)||void 0===C?void 0:null===(W=C.template)||void 0===W?void 0:W.customerSignature)||!1},{name:"reportPassFailTitle",value:null==A?void 0:null===(F=A.meta)||void 0===F?void 0:null===(N=F.template)||void 0===N?void 0:N.reportPassFailTitle},{name:"requireReportRecommendations",value:(null==A?void 0:null===(L=A.meta)||void 0===L?void 0:null===(X=L.template)||void 0===X?void 0:X.requireReportRecommendations)||!1}].forEach(function(e){var t;return D(e.name,e.value)});var e,t,r,n,i,o,a,s,c,u,d,m,p,v,b,f,y,j,h,g,O,x,w,S,P,Z,q,R,V,M,C,W,F,N,L,X,z,G=null==A?void 0:null===(z=A.meta)||void 0===z?void 0:z.template;null!=G&&G.amount||null!=G&&G.supplierLabourAmount||null!=G&&G.supplierMaterialsAmount?D("pricing","fixed"):D("pricing",null)}A!==J&&[{name:"reportPassFail",value:(null==A?void 0:null===(e=A.meta)||void 0===e?void 0:null===(t=e.template)||void 0===t?void 0:t.reportPassFail)||!1},{name:"reportPassFailTitle",value:null==A?void 0:null===(r=A.meta)||void 0===r?void 0:null===(n=r.template)||void 0===n?void 0:n.reportPassFailTitle},{name:"customerSignature",value:(null==A?void 0:null===(i=A.meta)||void 0===i?void 0:null===(o=i.template)||void 0===o?void 0:o.customerSignature)||!1},{name:"supplierSignature",value:(null==A?void 0:null===(a=A.meta)||void 0===a?void 0:null===(s=a.template)||void 0===s?void 0:s.supplierSignature)||!1},{name:"requireReportRecommendations",value:(null==A?void 0:null===(c=A.meta)||void 0===c?void 0:null===(u=c.template)||void 0===u?void 0:u.requireReportRecommendations)||!1}].forEach(function(e){var t;return D(e.name,e.value)}),_!==Q&&Q&&D("assetSelected",null),U&&(null==E?void 0:E.value)!==(null==U?void 0:U.value)&&D("locationSelected",null)},[_,I,E,T,k,A]),(0,d.useEffect)(function(){var e,t,r=(0,eo.G2)(L),n=null==r?void 0:null===(e=r.find(function(e){return e.id===Number(N)}))||void 0===e?void 0:e.onSite,o=null==r?void 0:null===(t=r.find(function(e){return e.id===Number(N)}))||void 0===t?void 0:t.onSiteUnit;if(n&&o){var a=eV()(null==i?void 0:i.createdAt),l=eV()(null==i?void 0:i.createdAt).add(n,o),s=30-a.minute()%30,c=30-l.minute()%30;D("timing","between"),D("onSiteTimingEnd",l.clone().add(c,"minutes").toISOString()),D("timingStart",a.clone().add(s,"minutes").toDate()),D("timingEnd",l.clone().add(c,"minutes").toDate())}},[N,JSON.stringify(L)]);var X={control:p,errors:v,register:Z};return(0,C.jsxs)(O.Z,{handleSubmit:y(a),children:[(0,C.jsxs)(x.Z,{children:[(0,C.jsxs)(w.Z,{md:6,children:[c("admin")&&(0,C.jsx)(eh,eC(eC({},X),{},{user:u})),(0,C.jsx)(z,eC(eC({},X),{},{customerSelectedWatch:I,user:u,hasRole:c})),T&&c(["admin","customer","tenant"])&&(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(ec,eC(eC({},X),{},{dataSlas:L,complianceWatch:W,currentAnswers:i.questions,jobId:null==o?void 0:o.id,locationSelectedWatch:T,taxonomyWatch:A,prevTaxonomy:J,watch:q,isQuote:l.quoted,isPPM:"ppm"===i.type})),!l.quoted&&c(["admin","customer"])&&(0,C.jsx)(eT.t,eC({},X)),!l.quoted&&c("admin")&&(0,C.jsx)(eP.n,eC(eC({},X),{},{pricingWatch:k,hasServiceRate:!!(null!=I&&I.serviceRateLabour)||!!(null!=I&&I.serviceRateExpenses),serviceSelectedWatch:R,isPPM:(null==o?void 0:o.type)==="ppm"})),!l.quoted&&(0,C.jsx)(ek.X,eC(eC({},X),{},{hasRole:c,query:l,setValue:D,timingWatch:V,watch:q}))]})]}),(0,C.jsxs)(w.Z,{md:6,children:[I&&(0,C.jsx)(ef,eC(eC({},X),{},{setValue:D,assetCategoryWatch:_,customerSelectedWatch:I,customerUserSelectedWatch:E,locationSelectedWatch:T})),T&&(0,C.jsxs)(C.Fragment,{children:[l.quoted&&(0,C.jsx)(eI,eC(eC({},X),{},{siteVisitWatch:M,watch:q})),l.ppm&&(0,C.jsx)(eS,eC(eC({},X),{},{locationId:T.value})),!o&&(0,C.jsx)(F,{locationId:T.value,serviceId:(null==R?void 0:R.value)||null})]})]})]}),(0,C.jsx)(S.Z,{content:"Submit",disabled:f.isSubmitting,size:"lg",type:"submit"})]})},eW=r(11552);function e_(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function eF(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?e_(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):e_(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var eN=function(e){var t=(0,ea.x)(),r=t.hasRole,n=t.user,i=(0,m.x)(),a=(0,d.useState)(!0),c=a[0],j=a[1],h="/dashboard/issues/",g=e.accountId||0,O=e.locationId||0,x=e.parentId||0,w=e.assetId||0,S=e.recall||null;r("customer")&&(g=n.accountId);var P,Z,D=(0,p.t)(b.E6,{skip:!e.id,variables:{adminId:n.adminId,number:"".concat(e.id)}}),q=(0,s.Z)(D,2),I=q[0],E=q[1],T=E.loading,k=E.data,R=(k=void 0===k?{job:null}:k).job,V=R&&R[0],M=(0,p.t)(b.TY,{variables:{accountId:g,locationId:O,parentId:x,assetId:w,includeAccount:!!g,includeLocation:!!O,includeParentJob:!!x,includeAsset:!!w}}),A=(0,s.Z)(M,2),W=A[0],_=A[1],F=_.loading,N=_.data,H=(0,v.D)(f.xM),U=(0,s.Z)(H,1)[0],B=(0,v.D)(f.tv),J=(0,s.Z)(B,1)[0],Q=(0,v.D)(b.mJ),L=(0,s.Z)(Q,1)[0],X=(0,v.D)(b.r2),z=(0,s.Z)(X,1)[0],G=(0,v.D)(b.uA,{onCompleted:(P=(0,l.Z)(u().mark(function e(t){var r;return u().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,eW.F)(i,V.id);case 2:r=t.update_Job_by_pk.number,o().push("".concat(h,"view?id=").concat(r));case 4:case"end":return e.stop()}},e)})),function(e){return P.apply(this,arguments)})}),K=(0,s.Z)(G,1)[0];(0,d.useEffect)(function(){e.id?I():g||O||x?W():j(!1)},[]),(0,d.useEffect)(function(){!T&&V?j(!1):!F&&N&&j(!1)},[T,F]);var Y=(Z=(0,l.Z)(u().mark(function t(a){var s,c,d,m,p,v,b;return u().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return s=(0,eo.eD)(a,null==V?void 0:V.id),t.next=3,(0,eo.lV)({query:e,data:a,hasRole:r,user:n,type:$.type});case 3:if(c=t.sent,!(!e.id||e.parentId)){t.next=9;break}return t.next=7,L({variables:{adminId:n.adminId,objects:[c]}}).then(function(){var t=(0,l.Z)(u().mark(function t(r){var a,s,c,d,m,p,v;return u().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return c=(s=r.data.createJob.data.insert_Job.returning[0]).id,d=s.number,t.next=4,(0,eW.F)(i,c);case 4:x&&"true"===S&&(z({variables:{objects:[{notes:"Marked as dispute because of creating a recall job",status:"inDispute",jobId:e.parentId,userId:n.id}]}}),U({variables:{objects:{caption:"report for recall job",expiryAt:null,extension:null==(p=e.report)?void 0:p.split(".").pop(),userId:n.id,filename:p,type:"document"}}}).then(function(){var e=(0,l.Z)(u().mark(function e(t){var r,n,i;return u().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return i={mediaId:t.data.insert_Media.returning[0].id,entity:"Job",entityId:c},e.next=5,J({variables:{objects:i}});case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}())),o().push("".concat(h,"view?id=").concat(d));case 6:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}());case 7:t.next=15;break;case 9:return p=[],v=$.assetSelected.map(function(e){return e.assetId}),(null===(d=c.Assets)||void 0===d?void 0:null===(m=d.data)||void 0===m?void 0:m.length)>0&&(p=c.Assets.data.map(function(e){return eF(eF({},e),{},{jobId:V.id})}),delete c.Assets),b=(0,eo.xv)({form:c,jobId:V.id}),t.next=15,K({variables:{jobId:V.id,changes:c,compliances:b,deletedAssetIds:v,assets:p,questions:s,hasQuestions:(null==s?void 0:s.length)>0}});case 15:case"end":return t.stop()}},t)})),function(e){return Z.apply(this,arguments)});if(V&&((0,y.E)(V,"accepted")&&!r("admin")||(0,y.E)(V,"inProgress")))return(0,C.jsx)("p",{children:"Work order can't be edited after started by supplier"});var $={};return c||($=e.id?V?(0,eo.I2)(V):null:(0,eo.$z)(N,r,n,S)),!c&&$&&(0,C.jsx)(eA,{defaultValues:$,job:e.id?V:null,onSubmit:Y,query:e})};function eH(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var eU=function(){var e=(0,i.useRouter)().query,t=e.id?"Edit":"Create",r="Work Order";return r=e.quoted?"Quote":r,r=e.ppm?"PPM":r,(0,C.jsx)(a.Z,{pageHeading:{heading:"".concat(t," ").concat(r)},View:(0,C.jsx)(eN,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?eH(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):eH(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},e))})}},20633:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/issues/manage",function(){return r(54587)}])}},function(e){e.O(0,[3662,367,2283,5391,5312,4425,1410,212,9947,93,4952,465,1261,3038,9229,1772,825,9958,9774,2888,179],function(){return e(e.s=20633)}),_N_E=e.O()}]);