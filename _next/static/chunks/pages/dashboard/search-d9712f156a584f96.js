(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9673],{46902:function(e,t,n){"use strict";n.d(t,{p:function(){return o}});var o=function(e){var t=e.id,n=e.number,o=e.invoiceNumber,r=e.numberPrefix,c=e.numberSuffix,i=t?"".concat(r," ").concat(n||t," ").concat(c):"";return o?"".concat(i," / ").concat(o):i}},69532:function(e,t,n){"use strict";n.d(t,{B:function(){return d}});var o=n(27812),r=n(87108),c=n(8373),i=n(70998),s=n(33366),u=n(92742),a=n(72936),l=n(85893),d=function(e){var t=e.size,n=e.value,r=e.withTooltip,d=e.textColor,p=(0,u.t)(n),v=(0,a.x)().hasRole,f=[].concat((0,o.Z)(s.iz),(0,o.Z)(s.yW),(0,o.Z)(s.l8)).find(function(e){return e.value===n})||{statusText:""},m=f.text,h=f.customerText,j=f.supplierText,O=v("admin")?m:v("supplier")?j||m:v("customer")&&h||m;return r?(0,l.jsx)(c.Z,{content:O,context:"black",children:(0,l.jsx)(x,{children:(0,l.jsx)("svg",{height:"16",width:"16",children:(0,l.jsx)("circle",{cx:"8",cy:"8",r:"6",fill:p})})})}):(0,l.jsxs)(x,{children:[(0,l.jsx)("svg",{height:"16",width:"16",children:(0,l.jsx)("circle",{cx:"8",cy:"8",r:"6",fill:p})}),(0,l.jsx)(i.Z,{size:t,context:d,children:O})]})},x=r.ZP.span.withConfig({displayName:"status__StyledLabel",componentId:"sc-sb0gv0-0"})(["display:flex;align-items:center;"]);d.defaultProps={size:"sm",withTooltip:!1}},92742:function(e,t,n){"use strict";n.d(t,{b:function(){return c},t:function(){return r}});var o=n(60092),r=function(e){switch(e){case"raised":case"pending":default:return o.Q.COLOUR.info;case"offered":return o.Q.COLOUR.warning;case"accepted":return o.Q.COLOUR.success;case"inProgress":return o.Q.COLOUR.primary;case"completed":return o.Q.COLOUR.muiLightGray;case"reportSent":return o.Q.COLOUR.muiGray;case"invoiceSent":return o.Q.COLOUR.secondary;case"customerPaid":case"supplierPaid":return o.Q.COLOUR.help;case"closed":return o.Q.COLOUR.black;case"quoteOffered":case"quoteReceived":case"quoteNew":return o.Q.COLOUR.muiLightViolet}},c=function(e){switch(e){case"raised":case"pending":default:return"info";case"offered":return"warning";case"accepted":return"success";case"inProgress":return"primary";case"completed":return"muiLightGray";case"reportSent":return"muiGray";case"invoiceSent":return"secondary";case"customerPaid":case"supplierPaid":return"help";case"closed":case"quoteClosed":return"black";case"quoteOffered":case"quoteReceived":case"quoteNew":return"muiLightViolet"}}},33366:function(e,t,n){"use strict";n.d(t,{AK:function(){return u},DJ:function(){return d},E6:function(){return r},cj:function(){return s},hD:function(){return l},iz:function(){return c},l8:function(){return a},yW:function(){return i}});var o=n(60092),r=[{text:"Quotation Requested",value:"supplierQuoteRequested",context:"info"},{text:"Quotation Completed",value:"supplierQuoteComplete",context:"help"},{text:"Draft Quotation",value:"supplierQuoteDraft",context:"info"},{text:"Awaiting threshold approval",value:"waitingThresholdApproval",context:"info"},{text:"Quotation Refused",value:"supplierQuoteRefused",context:"danger"},{text:"Quotation Sent",value:"supplierQuoteSent",context:"success"},{text:"Quotation Accepted",value:"quotationAccepted",context:"success"},{text:"Quotation Rejected",value:"quotationRejected",context:"danger"},{text:"Quotation Updated",value:"supplierQuoteUpdated",context:"success"}],c=[{text:"New Quote",value:"quoteNew",customerText:"Quote issued",supplierText:null},{text:"Sent to Supplier(s)",value:"quoteOffered",customerText:"Quote issued",supplierText:"Quote offered"},{text:"Received from Supplier(s)",value:"quoteReceived",customerText:"Final review",supplierText:"Quote submitted"},{text:"Sent to Customer",value:"quoteSent",customerText:"Awaiting approval",supplierText:"Awaiting approval"},{text:"Quote Accepted",value:"quoteAccepted",customerText:"Quote accepted",supplierText:"Quote accepted"},{text:"Quote Rejected",value:"quoteRejected",customerText:"Quote rejected",supplierText:"Quote rejected"},{text:"Canceled",value:"quoteCancelled",customerText:"Cancelled",supplierText:null},{text:"Closed",value:"quoteClosed",customerText:"Closed",supplierText:"Closed"}],i=[{text:"Pending",value:"pending",colour:o.Q.COLOUR.info},{text:"Raised",value:"raised",colour:o.Q.COLOUR.info},{text:"Offered",value:"offered",colour:o.Q.COLOUR.warning},{text:"Accepted",value:"accepted",colour:o.Q.COLOUR.success},{text:"In Progress",value:"inProgress",colour:o.Q.COLOUR.primary},{text:"Completed",value:"completed",colour:o.Q.COLOUR.muiLightGray},{text:"Awaiting threshold approval",value:"waitingThresholdApproval",colour:o.Q.COLOUR.info},{text:"Report Sent",value:"reportSent",colour:o.Q.COLOUR.muiGray},{text:"Invoice Sent",value:"invoiceSent",colour:o.Q.COLOUR.secondary},{text:"Customer Paid",value:"customerPaid",colour:o.Q.COLOUR.help},{text:"Supplier Paid",value:"supplierPaid",colour:o.Q.COLOUR.help},{text:"Quote",value:"quote",colour:o.Q.COLOUR.muiLightViolet},{text:"Site Visit",value:"siteVisit",colour:o.Q.COLOUR.muiViolet},{text:"Canceled",value:"canceled",colour:o.Q.COLOUR.black},{text:"Closed",value:"closed",colour:o.Q.COLOUR.black},{text:"On Hold",value:"onHold",colour:o.Q.COLOUR.black},{text:"Continued",value:"continued",colour:o.Q.COLOUR.primary},{text:"Paused",value:"paused",colour:o.Q.COLOUR.black}],s=[{label:"Pending",value:"pending"},{label:"Raised",value:"raised"},{label:"Offered",value:"offered"},{label:"Accepted",value:"accepted"},{label:"In Progress",value:"inProgress"},{label:"Completed",value:"completed"},{label:"Awaiting threshold approval",value:"waitingThresholdApproval"},{label:"Report Sent",value:"reportSent"},{label:"Invoice Sent",value:"invoiceSent"},{label:"Customer Paid",value:"customerPaid"},{label:"Supplier Paid",value:"supplierPaid"},{label:"Quote",value:"quote"},{label:"Site Visit",value:"siteVisit"},{label:"Canceled",value:"canceled"},{label:"Closed",value:"closed"},{label:"On Hold",value:"onHold"},{label:"Continued",value:"continued"},{label:"Paused",value:"paused"}],u=[{text:"Uplift Draft",value:"upliftDraft",context:"info"},{text:"Supplier Uplift Requested",value:"supplierUpliftRequested",context:"secondary"},{text:"Uplift Requested Send to Customer",value:"upliftRequestSendCustomer",context:"secondary"},{text:"Uplift Approved",value:"customerUpliftApproved",context:"success"},{text:"Uplift Rejected",value:"customerUpliftRejected",context:"danger"}],a=[{text:"Offered",value:"offered",context:"info"},{text:"Raised",value:"raised",context:"info"},{text:"Pending",value:"pending",context:"info"},{text:"Accepted",value:"accepted",context:"info"},{text:"Uplift Requested by Supplier",value:"supplierUpliftRequested",context:"info"},{text:"Uplift Draft",value:"upliftDraft",context:"info"},{text:"Uplift Requested Send Customer",value:"upliftRequestSendCustomer",context:"info"},{text:"Uplift Requested Approved",value:"customerUpliftApproved",context:"success"},{text:"In Dispute",value:"inDispute",context:"info"},{text:"Resumed",value:"resumed",context:"Danger"},{text:"Quote Sent",value:"quoteSent",context:"info"},{text:"Quote Offered",value:"quoteOffered",context:"info"},{text:"Report Sent Supplier",value:"reportSentSupplier",context:"info"},{text:"Dispute Resolved",value:"disputeResolved",context:"info"},{text:"Validated",value:"validated",context:"success"},{text:"Un Validated",value:"unvalidated",context:"success"},{text:"Paused",value:"paused",context:"info"},{text:"TimingChanged",value:"timingChanged",context:"info"},{text:"Customer Paid",value:"customerPaid",context:"info"},{text:"In Progress",value:"inProgress",context:"info"},{text:"PPM Invoice Created",value:"ppmInvoiceCreated",context:"success"},{text:"Late Arrival",value:"lateArrival",context:"info"},{text:"Pricing Changed",value:"pricingChanged",context:"info"},{text:"Report Sent",value:"reportSent",context:"info"},{text:"Invoice Sent Supplier",value:"invoiceSentSupplier",context:"info"},{text:"Invoice Sent",value:"invoiceSent",context:"info"},{text:"Invoice Sent Customer",value:"invoiceSentCustomer",context:"info"},{text:"Quote Accepted",value:"quoteAccepted",context:"info"},{text:"On Hold",value:"onHold",context:"info"},{text:"Continued",value:"continued",context:"info"},{text:"Quote Received",value:"quoteReceived",context:"info"},{text:"Quote New",value:"quoteNew",context:"info"},{text:"Closed",value:"closed",context:"danger"},{text:"Re posted",value:"reposted",context:"info"},{text:"Supplier Paid",value:"supplierPaid",context:"info"},{text:"Rejected",value:"rejected",context:"info"},{text:"Completed",value:"completed",context:"info"},{text:"Canceled",value:"canceled",context:"danger"}],l=[{value:"complete",text:"Complete"},{value:"returnVisitByAnother",text:"Return Visit By Another"},{value:"returnVisit",text:"Return Visit"},{value:"completeCertificate",text:"Complete Certificate"},{value:"couldNotDo",text:"Could Not Do"}],d=[{text:"Not yet offered",value:"pending",colour:o.Q.COLOUR.muiGray},{text:"Not yet offered",value:"raised",colour:o.Q.COLOUR.muiGray},{text:"Offered",value:"offered",colour:o.Q.COLOUR.warning},{text:"Not yet started",value:"accepted",colour:o.Q.COLOUR.white},{text:"In Progress",value:"inProgress",colour:o.Q.COLOUR.primary},{text:"Completed",value:"completed",colour:o.Q.COLOUR.secondary},{text:"Requires approval",value:"waitingThresholdApproval",colour:o.Q.COLOUR.info},{text:"Completed",value:"reportSent",colour:o.Q.COLOUR.secondary},{text:"Completed",value:"invoiceSent",colour:o.Q.COLOUR.secondary},{text:"Completed",value:"customerPaid",colour:o.Q.COLOUR.secondary},{text:"Completed",value:"supplierPaid",colour:o.Q.COLOUR.secondary},{text:"Quote",value:"quote",colour:o.Q.COLOUR.white},{text:"Not yet started",value:"siteVisit",colour:o.Q.COLOUR.white},{text:"Closed",value:"canceled",colour:o.Q.COLOUR.black},{text:"Closed",value:"closed",colour:o.Q.COLOUR.black},{text:"On Hold",value:"onHold",colour:o.Q.COLOUR.help},{text:"In Progress",value:"continued",colour:o.Q.COLOUR.primary},{text:"Closed",value:"paused",colour:o.Q.COLOUR.black},{text:"Not yet offered",value:"quoteNew",colour:o.Q.COLOUR.muiGray},{text:"Offered",value:"quoteOffered",colour:o.Q.COLOUR.warning},{text:"Completed",value:"quoteReceived",colour:o.Q.COLOUR.secondary},{text:"Requires approval",value:"quoteSent",colour:o.Q.COLOUR.info},{text:"Not yet started",value:"quoteAccepted",colour:o.Q.COLOUR.white},{text:"Closed",value:"quoteRejected",colour:o.Q.COLOUR.black},{text:"Closed",value:"quoteCancelled",colour:o.Q.COLOUR.black},{text:"Closed",value:"quoteClosed",colour:o.Q.COLOUR.black},{text:"Not yet started",value:"ppmNew",colour:o.Q.COLOUR.white}]},29997:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ec}});var o,r=n(66918),c=n(59499),i=n(50029),s=n(16835),u=n(64687),a=n.n(u),l=n(67294),d=n(38460),x=n(71383),p=(0,n(22841).Ps)(o||(o=(0,x.Z)(["\n  query search($adminId: Int, $index: String, $keyword: String) {\n    Search(adminId: $adminId, index: $index, keyword: $keyword) {\n      data\n    }\n  }\n"]))),v=n(42283),f=n(11163),m=n(97202),h=n(44442),j=n(71247),O=n(21269),C=n(56990),g=n(84268),Z=n(58448),R=n(87108),b=n(78215),y=n(2356),Q=n(88035),S=n(70998),w=n(34453),U=n(76325),L=n(911),P=n(21028),q=n(71050),N=n(85893),_=function(e){var t=e.data;return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)(b.Z,{children:[(0,N.jsxs)(y.Z,{md:2,children:[(0,N.jsx)(Q.Z,{content:"Users",tag:"h2"}),(0,N.jsxs)(S.Z,{children:[t[1]," results"]})]}),(0,N.jsx)(y.Z,{md:10,children:(0,N.jsx)(b.Z,{children:t[0].slice(0,8).map(function(e,t){var n=e._source,o=n.email,r=n.nameFirst,c=n.nameLast,i=n.phone;return(0,N.jsx)(y.Z,{sm:12,md:6,lg:3,children:(0,N.jsx)(k,{bordered:!0,shadow:!0,children:(0,N.jsxs)(w.Z,{children:[(0,N.jsx)(S.Z,{size:"lg",children:"".concat(r," ").concat(c)}),(0,N.jsxs)(S.Z,{size:"sm",children:[(0,N.jsx)(U.Z,{icon:"phone"})," ",(0,N.jsx)(L.Z,{to:"tel:".concat(i),children:i})]}),(0,N.jsxs)(S.Z,{size:"sm",children:[(0,N.jsx)(U.Z,{icon:"envelope"})," ",(0,N.jsx)(L.Z,{to:"mailto:".concat(o),children:o})]})]})})},"user".concat(t))})})})]}),(0,N.jsx)(P.Z,{})]})},k=(0,R.ZP)(q.Z).withConfig({displayName:"user__StyledCard",componentId:"sc-1n96b2v-0"})(["margin-bottom:0.5rem;"]),A=n(18862),z=n(96963),I=n(92742),T=n(69532),D=n(46902),V=n(55863),E=function(e){var t,n,o=e.data,r=e.handleExpand,c=e.index,i=(0,V.q)(),s=(0,f.useRouter)(),u=null===(t=i.admin.jobSetting)||void 0===t?void 0:t.jobNumberPrefix,a=null===(n=i.admin.jobSetting)||void 0===n?void 0:n.jobNumberSuffix,l=8,d=1;"job"===c&&(l=16,d=Math.ceil(o[1]/16));var x=function(e){s.query.page=e,s.push(s)};return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)(b.Z,{children:[(0,N.jsxs)(y.Z,{md:2,children:[(0,N.jsx)(Q.Z,{content:"Work orders",tag:"h2"}),(0,N.jsxs)(S.Z,{children:[o[1]," results"]}),(0,N.jsx)(g.Z,{}),"job"===c&&(0,N.jsxs)(L.Z,{onClick:function(){return r(null)},size:"sm",to:"",children:[(0,N.jsx)(U.Z,{icon:"caret-left"}),"Back to results"]})]}),(0,N.jsx)(y.Z,{md:10,children:(0,N.jsx)(b.Z,{children:o[0].slice(0,l).map(function(e,t){var n=e._source,o=n.date,r=n.id,c=n.customerName,i=n.locationName,s=n.serviceName,l=n.status,d=n.supplierName,x=n.title,p=(0,I.t)(l);return(0,N.jsxs)(y.Z,{sm:12,md:6,lg:3,children:[(0,N.jsx)(G,{children:(0,N.jsx)("svg",{height:"16",width:"16",children:(0,N.jsx)("circle",{cx:"8",cy:"8",r:"6",fill:p})})}),(0,N.jsx)(H,{bordered:!0,shadow:!0,to:"/dashboard/issues/view?id=".concat(r),children:(0,N.jsxs)(w.Z,{children:[(0,D.p)({id:r,numberPrefix:u,numberSuffix:a}),(0,N.jsx)(S.Z,{size:"sm",children:x}),(0,N.jsxs)(S.Z,{size:"sm",children:[c," @ ",i]}),(0,N.jsx)(S.Z,{size:"sm",children:"Supplier: ".concat(d)}),(0,N.jsx)(S.Z,{size:"sm",children:"".concat(s)}),o&&(0,N.jsx)(S.Z,{size:"sm",children:"Date: ".concat((0,A.Z)(o))}),(0,N.jsx)(T.B,{value:l})]})})]},"job".concat(t))})})})]}),"job"===c&&(0,N.jsx)(z.Z,{breakCount:5,currentPage:1,pageCount:d,onPageChange:x,size:"md",showNextAndPrev:!1}),!c&&(0,N.jsx)(F,{children:(0,N.jsx)(C.Z,{content:o[1]>8&&"Expand",onClick:function(){return r("job")},size:"sm"})}),(0,N.jsx)(P.Z,{})]})},G=R.ZP.div.withConfig({displayName:"job__StyledSvg",componentId:"sc-1epptmp-0"})(["position:absolute;right:0.5rem;top:-0.5rem;z-index:10000;"]),H=(0,R.ZP)(q.Z).withConfig({displayName:"job__StyledCard",componentId:"sc-1epptmp-1"})(["margin-bottom:0.5rem;"]),F=R.ZP.div.withConfig({displayName:"job__StyledDiv",componentId:"sc-1epptmp-2"})(["display:flex;justify-content:center;"]),B=n(39759),$=function(e){var t=e.data;return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)(b.Z,{children:[(0,N.jsxs)(y.Z,{md:2,children:[(0,N.jsx)(Q.Z,{content:"Locations",tag:"h2"}),(0,N.jsxs)(S.Z,{children:[t[1]," results"]})]}),(0,N.jsx)(y.Z,{md:10,children:(0,N.jsx)(b.Z,{children:t[0].slice(0,8).map(function(e,t){var n=e._source,o=n.addresses,r=n.customerName,c=n.id,i=n.name;return(0,N.jsx)(y.Z,{sm:12,md:6,lg:3,children:(0,N.jsx)(M,{bordered:!0,shadow:!0,to:"/dashboard/properties/view?id=".concat(c),children:(0,N.jsxs)(w.Z,{children:[(0,N.jsx)(S.Z,{size:"lg",children:i}),(0,N.jsx)(S.Z,{size:"md",children:r}),o.slice(0,1).map(function(e,t){var n=e.address,o=n.addressLine1,r=n.addressLine2,c=n.addressLine3,i=n.city,s=n.county,u=n.postCode;return(0,N.jsx)(W,{county:s,line1:o,line2:r,line3:c,postcode:u,town:i},"address".concat(t))})]})})},"location".concat(t))})})})]}),(0,N.jsx)(P.Z,{})]})},W=(0,R.ZP)(B.Z).withConfig({displayName:"location__StyledAddress",componentId:"sc-1utkcny-0"})(["font-size:0.75rem !important;"]),M=(0,R.ZP)(q.Z).withConfig({displayName:"location__StyledCard",componentId:"sc-1utkcny-1"})(["margin-bottom:0.5rem;"]),X=n(15098),J=function(e){var t=e.data;return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)(b.Z,{children:[(0,N.jsxs)(y.Z,{md:2,children:[(0,N.jsx)(Q.Z,{content:"Accounts",tag:"h2"}),(0,N.jsxs)(S.Z,{children:[t[1]," results"]})]}),(0,N.jsx)(y.Z,{md:10,children:(0,N.jsx)(b.Z,{children:t[0].slice(0,8).map(function(e,t){var n=e._source,o=n.id,r=n.name,c=n.ownerName,i=n.ownerPhone,s=n.ownerEmail,u=n.type;return(0,N.jsxs)(y.Z,{sm:12,md:6,lg:3,children:[(0,N.jsx)(K,{context:"customer"===u?"primary":"secondary",size:"xs",children:(0,N.jsx)(U.Z,{icon:"customer"===u?"user-tie":"user-cog"})}),(0,N.jsx)(Y,{bordered:!0,shadow:!0,to:"/dashboard/".concat(u,"s/view?id=").concat(o),children:(0,N.jsxs)(w.Z,{children:[(0,N.jsx)(S.Z,{size:"lg",children:r}),(0,N.jsxs)(S.Z,{size:"sm",children:[(0,N.jsx)(U.Z,{icon:"user-tie"})," ",c]}),(0,N.jsxs)(S.Z,{size:"sm",children:[(0,N.jsx)(U.Z,{icon:"phone"})," ",(0,N.jsx)(L.Z,{to:"tel:".concat(i),children:i})]}),(0,N.jsxs)(S.Z,{size:"sm",children:[(0,N.jsx)(U.Z,{icon:"envelope"})," ",(0,N.jsx)(L.Z,{to:"mailto:".concat(s),children:s})]})]})})]},"account".concat(t))})})})]}),(0,N.jsx)(P.Z,{})]})},K=(0,R.ZP)(X.Z).withConfig({displayName:"account__StyledAvatar",componentId:"sc-1bgrzfs-0"})(["position:absolute;right:0;top:-1rem;z-index:10000;"]),Y=(0,R.ZP)(q.Z).withConfig({displayName:"account__StyledCard",componentId:"sc-1bgrzfs-1"})(["margin-bottom:0.5rem;"]),ee=n(72936);function et(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n}function en(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?et(Object(n),!0).forEach(function(t){(0,c.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):et(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var eo=["",""],er=function(){var e=(0,f.useRouter)(),t=e.query.q,n=(0,ee.x)().user,o=(0,l.useState)(eo),r=o[0],c=o[1],u=(0,l.useState)(eo),x=u[0],R=u[1],b=(0,l.useState)(eo),y=b[0],Q=b[1],S=(0,l.useState)(eo),w=S[0],U=S[1],L=(0,l.useState)(),P=L[0],q=L[1],k=(0,l.useState)(t),A=k[0],z=k[1],I=(0,v.cI)(),T=I.errors,D=I.handleSubmit,V=I.register,G=I.setValue,H=I.trigger;(0,l.useEffect)(function(){z(t),G("q",t),t&&H()},[t]);var F,B=(0,d.t)(p,{variables:{adminId:n.adminId,index:P,keyword:A},onCompleted:function(e){var t=e.Search.data.hits.hits,n=t.filter(function(e){return"account"===e._index}),o=t.filter(function(e){return"job"===e._index}),r=t.filter(function(e){return"location"===e._index}),i=t.filter(function(e){return"user"===e._index});c([n,n.length]),R([o,o.length]),Q([r,r.length]),U([i,i.length])}}),W=(0,s.Z)(B,1)[0],M=(F=(0,i.Z)(a().mark(function t(n){return a().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:c(eo),R(eo),Q(eo),U(eo),q(null),z(n.q),W(),e.push({pathname:"/dashboard/search",query:{q:n.q}},void 0,{shallow:!0});case 8:case"end":return t.stop()}},t)})),function(e){return F.apply(this,arguments)}),X=function(e){q(e)},K={outline:!0,size:"sm"};return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(m.Z,{handleSubmit:D(M),children:(0,N.jsxs)(h.Z,{children:[(0,N.jsx)(j.Z,{errors:T,name:"q",placeholder:"Search",register:V}),(0,N.jsxs)(O.Z,{addonType:"append",children:[(0,N.jsx)(C.Z,{content:"Clear",type:"reset",size:"sm"}),(0,N.jsx)(C.Z,{content:"Search",type:"submit",size:"sm"})]})]})}),(0,N.jsx)(g.Z,{marginBottom:"xs"}),(0,N.jsxs)(Z.Z,{align:"flex-start",children:[(0,N.jsx)(C.Z,en(en({},K),{},{content:"All",context:null===P?"success":"secondary",onClick:function(){return X(null)}})),(0,N.jsx)(C.Z,en(en({},K),{},{content:"Work Orders",context:"job"===P?"success":"secondary",onClick:function(){return X("job")}})),(0,N.jsx)(C.Z,en(en({},K),{},{content:"Locations",context:"location"===P?"success":"secondary",onClick:function(){return X("location")}})),(0,N.jsx)(C.Z,en(en({},K),{},{content:"Accounts",context:"account"===P?"success":"secondary",onClick:function(){return X("account")}})),(0,N.jsx)(C.Z,en(en({},K),{},{content:"Users",context:"user"===P?"success":"secondary",onClick:function(){return X("user")}}))]}),(0,N.jsx)(g.Z,{}),x[0].length>0&&(0,N.jsx)(E,{data:x,handleExpand:X,index:P}),y[0].length>0&&(0,N.jsx)($,{data:y}),r[0].length>0&&(0,N.jsx)(J,{data:r}),w[0].length>0&&(0,N.jsx)(_,{data:w})]})},ec=function(){return(0,N.jsx)(r.Z,{pageHeading:{heading:"Search"},View:(0,N.jsx)(er,{})})}},35156:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/search",function(){return n(29997)}])}},function(e){e.O(0,[2283,212,9947,3741,9428,9774,2888,179],function(){return e(e.s=35156)}),_N_E=e.O()}]);