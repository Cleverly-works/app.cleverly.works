(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1031],{61497:function(n,e,t){"use strict";t.d(e,{r:function(){return o}});var o=[{text:"All work orders",value:""},{text:"All outstanding invoices",value:"0-"},{text:"1 - 30",value:"1-30"},{text:"31 - 60",value:"31-60"},{text:"61 - 90",value:"61-90"},{text:"> 90",value:"90-"}]},33816:function(n,e,t){"use strict";t.d(e,{By:function(){return v},Rm:function(){return l},WG:function(){return s},bK:function(){return m}});var o,i,r,a,c,u=t(71383),d=t(22841),l=(0,d.Ps)(o||(o=(0,u.Z)(['\n  query getInvoices($jobId: Int!, $locationId: Int!) {\n    invoices: Invoice(\n      where: {\n        _or: [\n          { _and: [{ Job: { id: { _eq: $jobId } } }, { entity: { _eq: "Job" } }] }\n          {\n            _and: [\n              { entity: { _eq: "Location" } }\n              { entityId: { _eq: $locationId } }\n              { AccountEntry: { jobId: { _eq: $jobId } } }\n            ]\n          }\n        ]\n      }\n    ) {\n      id\n      accountEntry: AccountEntry {\n        id\n        paymentStatus\n        meta\n        dueDate\n      }\n      items\n      status\n      createdAt\n      rebate\n      meta\n      totals\n      invoiceType\n      invoiceNumber\n      invoiceDate\n      expenses\n      entityId\n      entity\n      configs\n      amounts\n      addendum\n      addresses\n      adminId\n      amountPaid: AccountEntry {\n        reconciliations: InvoiceReconciliations_aggregate(\n          where: { creditEntity: { _eq: "PaymentReceipt" } }\n        ) {\n          aggregate {\n            sum {\n              amount\n            }\n          }\n        }\n      }\n      amountDeducted: AccountEntry {\n        reconciliations: InvoiceReconciliations_aggregate(\n          where: { creditEntity: { _eq: "CreditNote" } }\n        ) {\n          aggregate {\n            sum {\n              amount\n            }\n          }\n        }\n      }\n      reconciledAmount: AccountEntry {\n        reconciliations: InvoiceReconciliations_aggregate {\n          aggregate {\n            sum {\n              amount\n            }\n          }\n        }\n      }\n    }\n    meta: Invoice_aggregate(\n      where: {\n        _or: [\n          { _and: [{ Job: { id: { _eq: $jobId } } }, { AccountEntry: { jobId: { _eq: $jobId } } }] }\n          {\n            _and: [\n              { entity: { _eq: "Location" } }\n              { entityId: { _eq: $locationId } }\n              { AccountEntry: { jobId: { _eq: $jobId } } }\n            ]\n          }\n        ]\n        invoiceType: { _in: ["ProformaInvoiceCustomer", "ProformaInvoiceSupplier"] }\n      }\n    ) {\n      aggregate {\n        totalCount: count\n      }\n    }\n  }\n'])));(0,d.Ps)(i||(i=(0,u.Z)(['\n  query getInvoices($id: Int!) {\n    invoice: Invoice_by_pk(id: $id) {\n      id\n      accountEntry: AccountEntry {\n        id\n        paymentStatus\n      }\n      items\n      status\n      createdAt\n      rebate\n      meta\n      totals\n      invoiceType\n      invoiceNumber\n      invoiceDate\n      expenses\n      entityId\n      configs\n      amounts\n      addendum\n      addresses\n      adminId\n      amountPaid: AccountEntry {\n        reconciliations: InvoiceReconciliations_aggregate(\n          where: { creditEntity: { _eq: "PaymentReceipt" } }\n        ) {\n          aggregate {\n            sum {\n              amount\n            }\n          }\n        }\n      }\n      amountDeducted: AccountEntry {\n        reconciliations: InvoiceReconciliations_aggregate(\n          where: { creditEntity: { _eq: "CreditNote" } }\n        ) {\n          aggregate {\n            sum {\n              amount\n            }\n          }\n        }\n      }\n      reconciledAmount: AccountEntry {\n        reconciliations: InvoiceReconciliations_aggregate {\n          aggregate {\n            sum {\n              amount\n            }\n          }\n        }\n      }\n    }\n  }\n'])));var s=(0,d.Ps)(r||(r=(0,u.Z)(['\n  query getInvoiceForPdf($id: Int!) {\n    invoice: Invoice_by_pk(id: $id) {\n      id\n      invoiceType\n      accountEntry: AccountEntry {\n        id\n        meta\n      }\n      amountPaid: AccountEntry {\n        reconciliations: InvoiceReconciliations_aggregate(\n          where: { creditEntity: { _eq: "PaymentReceipt" } }\n        ) {\n          aggregate {\n            sum {\n              amount\n            }\n          }\n        }\n      }\n      amountDeducted: AccountEntry {\n        reconciliations: InvoiceReconciliations_aggregate(\n          where: { creditEntity: { _eq: "CreditNote" } }\n        ) {\n          aggregate {\n            sum {\n              amount\n            }\n          }\n        }\n      }\n      reconciledAmount: AccountEntry {\n        reconciliations: InvoiceReconciliations_aggregate {\n          aggregate {\n            sum {\n              amount\n            }\n          }\n        }\n      }\n    }\n  }\n']))),v=(0,d.Ps)(a||(a=(0,u.Z)(['\n  query getInvoiceForPdfByType($jobId: Int!, $invoiceType: String!) {\n    invoices: Invoice(\n      where: { entityId: { _eq: $jobId }, invoiceType: { _eq: $invoiceType } }\n      order_by: { createdAt: desc }\n    ) {\n      id\n      invoiceType\n      accountEntry: AccountEntry {\n        id\n        meta\n      }\n      amountPaid: AccountEntry {\n        reconciliations: InvoiceReconciliations_aggregate(\n          where: { creditEntity: { _eq: "PaymentReceipt" } }\n        ) {\n          aggregate {\n            sum {\n              amount\n            }\n          }\n        }\n      }\n      amountDeducted: AccountEntry {\n        reconciliations: InvoiceReconciliations_aggregate(\n          where: { creditEntity: { _eq: "CreditNote" } }\n        ) {\n          aggregate {\n            sum {\n              amount\n            }\n          }\n        }\n      }\n      reconciledAmount: AccountEntry {\n        reconciliations: InvoiceReconciliations_aggregate {\n          aggregate {\n            sum {\n              amount\n            }\n          }\n        }\n      }\n    }\n  }\n']))),m=(0,d.Ps)(c||(c=(0,u.Z)(["\n  mutation InsertInvoice(\n    $accountEntry: [AccountEntry_insert_input!]!\n    $account: Account_set_input\n    $accountId: Int!\n    $jobId: Int!\n    $updatePointer: Boolean!\n    $updateJob: Boolean!\n    $deleteJobTiming: Boolean!\n    $job: Job_set_input!\n    $jobTimingStatus: String!\n  ) {\n    insert_AccountEntry(objects: $accountEntry) {\n      returning {\n        id\n      }\n    }\n    update_Account_by_pk(pk_columns: { id: $accountId }, _set: $account)\n      @include(if: $updatePointer) {\n      id\n    }\n    update_Job_by_pk(pk_columns: { id: $jobId }, _set: $job) @include(if: $updateJob) {\n      id\n    }\n    delete_JobTiming(where: { status: { _eq: $jobTimingStatus }, jobId: { _eq: $jobId } })\n      @include(if: $deleteJobTiming) {\n      returning {\n        id\n      }\n    }\n  }\n"])))},33234:function(n,e,t){"use strict";t.d(e,{_:function(){return y}});var o=t(59499),i=t(50029),r=t(64687),a=t.n(r),c=t(11552),u=t(60036),d=t(94568);function l(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})),t.push.apply(t,o)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach(function(e){(0,o.Z)(n,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))})}return n}var v,m="",p="",y=(v=(0,i.Z)(a().mark(function n(e){var t,o,i,r,l,v,y,g,b,h,I,x,w,j,_,O,P,Z,T,E,S,A,k,D,N,C,$,R,q,J,z,L,B;return a().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:t=e.job,o=e.invoice,i=e.meta,r=e.type,l=e.client,v=e.revisionIndex,g=void 0!==(y=e.getUrl)&&y,b=e.preview,n.t0=r,n.next="supplier"===n.t0?4:"customerVat"===n.t0?7:10;break;case 4:return m="supplier/create",p="Self Bill Invoice",n.abrupt("break",11);case 7:return m="customer/create",p="VAT Invoice",n.abrupt("break",11);case 10:return n.abrupt("return");case 11:if(h={},b){n.next=22;break}I=v&&Number(v)>-1?f({meta:t.meta,revisionIndex:v,type:r}):s({},i),C=(null==o?void 0:null===(x=o.amountPaid)||void 0===x?void 0:null===(w=x.reconciliations)||void 0===w?void 0:null===(j=w.aggregate)||void 0===j?void 0:null===(_=j.sum)||void 0===_?void 0:_.amount)||0,$=(null==o?void 0:null===(O=o.amountDeducted)||void 0===O?void 0:null===(P=O.reconciliations)||void 0===P?void 0:null===(Z=P.aggregate)||void 0===Z?void 0:null===(T=Z.sum)||void 0===T?void 0:T.amount)||0,R=(null==o?void 0:null===(E=o.reconciledAmount)||void 0===E?void 0:null===(S=E.reconciliations)||void 0===S?void 0:null===(A=S.aggregate)||void 0===A?void 0:null===(k=A.sum)||void 0===k?void 0:k.amount)||0,I.amountInfo=s(s({},I.amountInfo),{},{title:p,amountPaid:C,amountDeducted:$,reconciledAmount:R}),I.invoiceInfo=s(s({},I.invoiceInfo),{},{invoiceNumber:(null===(D=I)||void 0===D?void 0:null===(N=D.invoiceInfo)||void 0===N?void 0:N.invoiceNumber)||"Draft"}),h=s({},I),n.next=28;break;case 22:return n.next=24,(0,c.F)(l,t.id);case 24:J=(q=n.sent).financeSupplier,z=q.financeCustomer,h="supplier"===r?J:z;case 28:return(0,d.a)()||g||(L=window.open("/download","_blank")),B="",n.next=32,window.fetch("".concat("https://aws.cleverly.works","/pdf/invoice/").concat(m),{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify(h)}).then(function(n){return n.json()}).then(function(n){if(g)B="".concat("https://cleverly-media.s3.eu-west-2.amazonaws.com","/").concat(n.key);else{var e,t,o,i,r;null===(e=L)||void 0===e||null===(t=e.location)||void 0===t||t.assign("".concat("https://cleverly-media.s3.eu-west-2.amazonaws.com","/").concat(n.key)),null!==(o=window)&&void 0!==o&&null!==(i=o.Capacitor)&&void 0!==i&&null!==(r=i.Plugins)&&void 0!==r&&r.Browser&&window.Capacitor.Plugins.Browser.open({url:"".concat("https://cleverly-media.s3.eu-west-2.amazonaws.com","/").concat(n.key)})}}).catch(function(n){(0,u.Tb)({message:n,section:"fetch"})});case 32:return n.abrupt("return",B);case 33:case"end":return n.stop()}},n)})),function(n){return v.apply(this,arguments)}),f=function(n){var e=n.meta,t=n.revisionIndex,o=n.type;if(!(t&&Number(t)>-1))return"supplier"===o?s({},null==e?void 0:e.supplierInvoice):s({},null==e?void 0:e.customerVATInvoice);var i=s({},null==e?void 0:e.revisions[t]);return"supplier"===o?s({},i.data.supplierInvoice):s({},i.data.customerVATInvoice)}},46718:function(n,e,t){"use strict";t.d(e,{$:function(){return d}});var o,i=t(50029),r=t(64687),a=t.n(r),c=t(94568),u=t(60036),d=(o=(0,i.Z)(a().mark(function n(e){var t;return a().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return(0,c.a)()||(t=window.open("/download","_blank")),n.next=3,window.fetch("".concat("https://aws.cleverly.works","/pdf/invoice/ppmNew/create"),{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify(e)}).then(function(n){return n.json()}).then(function(n){var e,o,i,r,a;null===(e=t)||void 0===e||null===(o=e.location)||void 0===o||o.assign("".concat("https://cleverly-media.s3.eu-west-2.amazonaws.com","/").concat(n.key)),null!==(i=window)&&void 0!==i&&null!==(r=i.Capacitor)&&void 0!==r&&null!==(a=r.Plugins)&&void 0!==a&&a.Browser&&window.Capacitor.Plugins.Browser.open({url:"".concat("https://cleverly-media.s3.eu-west-2.amazonaws.com","/").concat(n.key)})}).catch(function(n){(0,u.Tb)({message:n,section:"fetch"})});case 3:case"end":return n.stop()}},n)})),function(n){return o.apply(this,arguments)})},19149:function(n,e,t){"use strict";t.d(e,{u:function(){return v}});var o=t(59499),i=t(50029),r=t(64687),a=t.n(r),c=t(60036),u=t(94568);function d(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})),t.push.apply(t,o)}return t}function l(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?d(Object(t),!0).forEach(function(e){(0,o.Z)(n,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))})}return n}var s,v=(s=(0,i.Z)(a().mark(function n(e){var t,o,i,r,d,s,v,m,p,y,f,g,b,h,I,x;return a().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return b=e.meta,h=e.invoice,I=l(l({},b),{},{title:"Proforma Invoice",amountPaid:null==h?void 0:null===(t=h.amountPaid)||void 0===t?void 0:null===(o=t.reconciliations)||void 0===o?void 0:null===(i=o.aggregate)||void 0===i?void 0:null===(r=i.sum)||void 0===r?void 0:r.amount,amountDeducted:null==h?void 0:null===(d=h.amountDeducted)||void 0===d?void 0:null===(s=d.reconciliations)||void 0===s?void 0:null===(v=s.aggregate)||void 0===v?void 0:null===(m=v.sum)||void 0===m?void 0:m.amount,reconciledAmount:null==h?void 0:null===(p=h.reconciledAmount)||void 0===p?void 0:null===(y=p.reconciliations)||void 0===y?void 0:null===(f=y.aggregate)||void 0===f?void 0:null===(g=f.sum)||void 0===g?void 0:g.amount}),(0,u.a)()||(x=window.open("/download","_blank")),n.next=5,window.fetch("".concat("https://aws.cleverly.works","/pdf/invoice/proforma/create"),{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify(I)}).then(function(n){return n.json()}).then(function(n){var e,t,o,i,r;null===(e=x)||void 0===e||null===(t=e.location)||void 0===t||t.assign("".concat("https://cleverly-media.s3.eu-west-2.amazonaws.com","/").concat(n.key)),null!==(o=window)&&void 0!==o&&null!==(i=o.Capacitor)&&void 0!==i&&null!==(r=i.Plugins)&&void 0!==r&&r.Browser&&window.Capacitor.Plugins.Browser.open({url:"".concat("https://cleverly-media.s3.eu-west-2.amazonaws.com","/").concat(n.key)})}).catch(function(n){(0,c.Tb)({message:n,section:"fetch"})});case 5:case"end":return n.stop()}},n)})),function(n){return s.apply(this,arguments)})},48829:function(n,e,t){"use strict";t.d(e,{S:function(){return o}});var o=function(n,e){var t=document.createElement("a");"string"==typeof t.download?(document.body.appendChild(t),t.download=e,t.href=n,t.click(),document.body.removeChild(t)):location.replace(n)}},11552:function(n,e,t){"use strict";t.d(e,{F:function(){return u}});var o,i=t(50029),r=t(64687),a=t.n(r),c=t(38512),u=(o=(0,i.Z)(a().mark(function n(e,t,o){var i,r;return a().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return i={},r={},n.next=4,e.mutate({mutation:c.iU,variables:{jobId:t,invoiceType:"supplier"},skip:o&&"supplier"!==o}).then(function(n){var e;i=null==n?void 0:null===(e=n.data.calculateJobFinance)||void 0===e?void 0:e.data.persistentData});case 4:return n.next=6,e.mutate({mutation:c.iU,variables:{jobId:t,invoiceType:"customerVat"},skip:o&&"supplier"===o}).then(function(n){var e;r=null==n?void 0:null===(e=n.data.calculateJobFinance)||void 0===e?void 0:e.data.persistentData});case 6:return n.abrupt("return",{financeSupplier:i,financeCustomer:r});case 7:case"end":return n.stop()}},n)})),function(n,e,t){return o.apply(this,arguments)})},54258:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return ny}});var o,i,r=t(66918),a=t(50029),c=t(27812),u=t(16835),d=t(59499),l=t(64687),s=t.n(l),v=t(67294),m=t(11163),p=t(26075),y=t(93633),f=t(38460),g=t(71383),b=t(22841),h=(0,b.Ps)(o||(o=(0,g.Z)(["\n  query GetAccountEntries(\n    $where: AccountEntry_bool_exp\n    $limit: Int\n    $offset: Int\n    $accountId: Int\n    $locationId: Int\n    $orderBy: [AccountEntry_order_by!]\n  ) {\n    accountEntries: getDashboard_AccountEntry_calculatebalance(\n      limit: $limit\n      offset: $offset\n      order_by: $orderBy\n      where: $where\n      args: { location_id: $locationId }\n    ) {\n      id\n      outstandingAmount\n      outstandingdays\n      type\n      createdAt\n      status\n      meta\n      paymentStatus\n      createdAt\n      balance\n      debit\n      credit\n      invoices: Invoices {\n        id\n        meta\n        invoiceType\n        invoiceNumber\n        amounts\n        Job {\n          id\n          number\n          type\n          status\n          Customer {\n            id\n            name\n          }\n          Supplier {\n            id\n            name\n          }\n        }\n      }\n    }\n    meta: getDashboard_AccountEntry_calculatebalance_aggregate(\n      where: $where\n      args: { location_id: $locationId }\n    ) {\n      aggregate {\n        debitTotal: sum {\n          debit\n        }\n        creditTotal: sum {\n          credit\n        }\n        totalCount: count\n      }\n    }\n  }\n"]))),I=(0,b.Ps)(i||(i=(0,g.Z)(["\n  query GetAccountEntries(\n    $where: AccountEntry_bool_exp\n    $limit: Int\n    $offset: Int\n    $accountId: Int\n    $locationId: Int\n    $orderBy: [AccountEntry_order_by!]\n  ) {\n    accountEntries: getDashboard_AccountEntry_calculatebalance(\n      limit: $limit\n      offset: $offset\n      order_by: $orderBy\n      where: $where\n      args: { location_id: $locationId }\n    ) {\n      id\n      outstandingAmount\n      outstandingdays\n      type\n      createdAt\n      status\n      meta\n      paymentStatus\n      createdAt\n      balance\n      debit\n      credit\n      invoices: Invoices {\n        id\n        meta\n        invoiceType\n        invoiceNumber\n        amounts\n        Job {\n          id\n          number\n          type\n          status\n          Customer {\n            id\n            name\n          }\n          Supplier {\n            id\n            name\n          }\n        }\n      }\n    }\n  }\n"]))),x=t(33816),w=t(40755),j=t(42283),_=t(57460),O=t.n(_),P=t(87108),Z=t(33846),T=t(80285),E=t(60287),S=t(18862),A=t(78171),k=t(97202),D=t(78215),N=t(2356),C=t(71247),$=t(46482),R=t(56990),q=t(84268),J=t(51570),z=t(84808),L=t(98456),B=t(67872),X=t(52220),F=t(48829),U=t(33234),V=t(19149),G=t(46718),M=t(69532),W=t(61497),H=t(825),K=t(72936),Q=t(1820),Y=t(94568),nn=t(55863);function ne(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})),t.push.apply(t,o)}return t}function nt(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?ne(Object(t),!0).forEach(function(e){(0,d.Z)(n,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):ne(Object(t)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))})}return n}var no=function(n,e){var t=n.itemType,o=n.paymentStatus;return"paymentReceipt"===t?e.COLOUR.black:"creditNote"===t?e.COLOUR.dark:"paid"===o?e.COLOUR.success:"partial"===o?e.COLOUR.female:e.COLOUR.danger},ni=function(n){var e=n.from,t=void 0===e?null:e,o=n.outstandingLevel,i=n.to,r=void 0===i?null:i,a=n.type,u=n.jobNumber,d={},l={},s=[],v=[],m=[];return a&&(d.type={_in:[].concat((0,c.Z)(a),["invoice"])},d.paymentStatus={_in:(0,c.Z)(a)},a.includes("synced")||(v=[{_or:[{_and:[{meta:{_is_null:!1}},{_not:{meta:{_has_key:"xeroInvoiceId"}}},{_not:{meta:{_has_key:"xeroCreditNoteId"}}}]},{meta:{_is_null:!0}}]}])),o&&(d.outstandingdays={_gte:o.split("-")[0]||null,_lte:o.split("-")[1]||null}),(r||t)&&(m=[{_and:[{_or:[{_and:[{createdAt:{_gte:t}},{createdAt:{_lte:r}}]}]}]}]),u&&(s=[{_or:[{Invoices:{invoiceNumber:{_eq:u}}},{Invoices:{Job:{number:{_ilike:u}}}},{PaymentReconciliations:{InvoiceEntry:{Invoices:{invoiceNumber:{_eq:u}}}}},{PaymentReconciliations:{InvoiceEntry:{Invoices:{Job:{number:{_ilike:u}}}}}}]}]),(s.length>0||m.length>0||v.length>0)&&(l={_and:[].concat((0,c.Z)(s),(0,c.Z)(m),(0,c.Z)(v))}),nt(nt({},d),l)},nr=t(70998),na=t(85893),nc=function(n){var e=n.onFilter,t=(0,v.useState)(["ppmInvoice","partial","paid","proformaInvoice","unpaid","synced"]),o=t[0],i=t[1],r=function(n,t){var r;r=t?[].concat((0,c.Z)(o),[n]):o.filter(function(e){return e!==n}),e(r),i(r)};return(0,na.jsxs)(D.Z,{children:[(0,na.jsxs)(nu,{md:2,children:[(0,na.jsx)(Z.Z,{context:"danger",onToggle:function(n){return r("proformaInvoice",n)},size:"sm",toggled:!0}),(0,na.jsx)(q.Z,{marginLeft:"sm"}),(0,na.jsx)(nr.Z,{size:"sm",children:"Proforma Invoice"})]}),(0,na.jsxs)(nu,{md:1.6,children:[(0,na.jsx)(Z.Z,{context:"danger",onToggle:function(n){return r("ppmInvoice",n)},size:"sm",toggled:!0}),(0,na.jsx)(q.Z,{marginLeft:"sm"}),(0,na.jsx)(nr.Z,{size:"sm",children:"PPM Invoice"})]}),(0,na.jsxs)(nu,{md:1.7,children:[(0,na.jsx)(Z.Z,{context:"danger",onToggle:function(n){return r("unpaid",n)},size:"sm",toggled:!0}),(0,na.jsx)(q.Z,{marginLeft:"sm"}),(0,na.jsx)(nr.Z,{size:"sm",children:"Unpaid"})]}),(0,na.jsxs)(nu,{md:1.7,children:[(0,na.jsx)(Z.Z,{context:"female",onToggle:function(n){return r("partial",n)},size:"sm",toggled:!0}),(0,na.jsx)(q.Z,{marginLeft:"sm"}),(0,na.jsx)(nr.Z,{size:"sm",children:"Partially Paid"})]}),(0,na.jsxs)(nu,{md:1.7,children:[(0,na.jsx)(Z.Z,{context:"success",onToggle:function(n){return r("paid",n)},size:"sm",toggled:!0}),(0,na.jsx)(q.Z,{marginLeft:"sm"}),(0,na.jsx)(nr.Z,{size:"sm",children:"Paid"})]}),(0,na.jsxs)(nu,{md:1.7,children:[(0,na.jsx)(Z.Z,{context:"success",onToggle:function(n){return r("synced",n)},size:"sm",toggled:!0}),(0,na.jsx)(q.Z,{marginLeft:"sm"}),(0,na.jsx)(nr.Z,{size:"sm",children:"Synced"})]})]})},nu=(0,P.ZP)(N.Z).withConfig({displayName:"filters__StyledColumn",componentId:"sc-1d9ji0y-0"})(["align-items:center;display:flex;"]);function nd(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})),t.push.apply(t,o)}return t}function nl(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?nd(Object(t),!0).forEach(function(e){(0,d.Z)(n,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):nd(Object(t)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))})}return n}var ns=function(){var n,e,t,o,i=(0,K.x)().user,r=(0,w.RM)(i.id),d=(0,p.x)(),l=(0,nn.q)(),g=(0,v.useState)(!1),b=g[0],_=g[1],P=(0,v.useState)([]),J=P[0],ne=P[1],nt=(0,v.useState)([]),no=nt[0],nr=nt[1],nu=(0,m.useRouter)().query,nd=null===(n=l.admin)||void 0===n?void 0:null===(e=n.jobSetting)||void 0===e?void 0:e.jobNumberPrefix,ns=null===(t=l.admin)||void 0===t?void 0:null===(o=t.jobSetting)||void 0===o?void 0:o.jobNumberSuffix,ny=i.id,nf={endDate:nu.endDate&&new Date(nu.endDate),outstandingLevel:nu.outstandingLevel,startDate:nu.startDate&&new Date(nu.startDate),type:["synced","ppmInvoice","proformaInvoice","partial","paid","unpaid"]},ng=(0,v.useState)(nf),nb=ng[0],nh=ng[1],nI=(0,v.useState)(!1),nx=nI[0],nw=nI[1],nj=nb.endDate,n_=nb.invoiceNumber,nO=nb.outstandingLevel,nP=nb.startDate,nZ=nb.type,nT=(0,Q.x)({filters:nb}),nE=nT.initialData,nS=nT.ref,nA=(0,j.cI)({defaultValues:{endDate:nj,invoiceNumber:n_,outstandingLevel:nO,startDate:nP}}),nk=nA.control,nD=nA.errors,nN=nA.handleSubmit,nC=nA.register,n$=(0,v.useState)(!1)[1],nR=nl(nl({},nE),{},{limit:25}),nq=(0,y.a)(h,{variables:nl(nl({},nR),{},{where:nl({},ni({outstandingLevel:nO,to:nj,from:nP,jobNumber:n_,type:nZ}))})}),nJ=nq.data,nz=(nJ=void 0===nJ?{accountEntries:[],meta:{aggregate:{totalCount:0,debitTotal:{debit:0},creditTotal:{credit:0},balance:{balance:0}}}}:nJ).accountEntries,nL=nJ.meta,nB=nq.loading,nX=nq.refetch,nF=(0,f.t)(I,{fetchPolicy:"no-cache",variables:nl(nl({},nE),{},{where:nl({},ni({outstandingLevel:nO,to:nj,from:nP,jobNumber:n_,type:nZ})),limit:1e3,offset:J.length}),onCompleted:function(n){var e,t=n.accountEntries,o=[].concat((0,c.Z)(J),(0,c.Z)(t));if(o.length<(null==nL?void 0:null===(e=nL.aggregate)||void 0===e?void 0:e.totalCount))ne(o),nU();else try{var i,r=O().unparse(J.map(function(n){var e,t,o,i,r,a,c,u,d,l,s,v,m,p,y,f,g,b,h,I,x,w,j,_,O="creditNote"!==n.type&&"paymentReceipt"!==n.type?n.outstandingdays:"-";return{jobNumber:(null==n?void 0:null===(e=n.invoices)||void 0===e?void 0:null===(t=e[0])||void 0===t?void 0:null===(o=t.Job)||void 0===o?void 0:o.number)||"-",jobType:(null==n?void 0:null===(i=n.invoices)||void 0===i?void 0:null===(r=i[0])||void 0===r?void 0:null===(a=r.Job)||void 0===a?void 0:a.type)||"-",invoiceNumber:(null==n?void 0:null===(c=n.invoices)||void 0===c?void 0:null===(u=c[0])||void 0===u?void 0:u.invoiceNumber)||"-",itemType:n.type||"-",paymentStatus:n.paymentStatus||"-",customer:(null==n?void 0:null===(d=n.invoices)||void 0===d?void 0:null===(l=d[0])||void 0===l?void 0:null===(s=l.Job)||void 0===s?void 0:null===(v=s.Customer)||void 0===v?void 0:v.name)||"-",supplier:(null==n?void 0:null===(m=n.invoices)||void 0===m?void 0:null===(p=m[0])||void 0===p?void 0:null===(y=p.Job)||void 0===y?void 0:null===(f=y.Supplier)||void 0===f?void 0:f.name)||"-",xeroStatus:null!=n&&null!==(g=n.meta)&&void 0!==g&&g.xeroInvoiceId||null!=n&&null!==(b=n.meta)&&void 0!==b&&b.xeroCreditNoteId?"Synced":"Not Synced",xeroReference:(null==n?void 0:null===(h=n.meta)||void 0===h?void 0:h.xeroInvoiceId)||(null==n?void 0:null===(I=n.meta)||void 0===I?void 0:I.xeroCreditNoteId)||"-",reference:n.reference||(null===(x=n.meta)||void 0===x?void 0:x.paymentReference)||"-",date:(0,S.Z)(n.createdAt)||"-",outstandingDays:O,outstandingAmount:n.outstandingAmount||"-",status:(null==n?void 0:null===(w=n.invoices)||void 0===w?void 0:null===(j=w[0])||void 0===j?void 0:null===(_=j.Job)||void 0===_?void 0:_.status)||"-",debit:n.debit||"-",credit:n.credit||"-"}})),a="data:application/octet-stream,"+encodeURIComponent(r);(0,F.S)(a,"AccountEntriesXero.csv")}finally{n$(!1)}}}),nU=(0,u.Z)(nF,1)[0],nV=(0,w.BR)({adminId:ny,xeroClientId:null==nu?void 0:nu.clientId,onSaveXeroTokenCallback:function(){return nX()}}),nG=nV.tokenStatus,nM=nV.onCallAuthorize,nW=nV.onSendEntitiesToXero,nH=nV.onReceiveUpdatesFromXero;(0,v.useEffect)(function(){"unauthenticated"===nG?_(!0):_(!1)},[nG]);var nK,nQ,nY,n0=function(n){var e=n.row,t=n.row.itemType;return(0,na.jsx)(np,{content:t,row:e,size:"sm"})},n1=function(n,e){var t=n.id;nr(no.map(function(n){return n.id===t&&(n.assigned=e),n}))},n2=(nK=(0,a.Z)(s().mark(function n(e,t){var o,i,r,a,c,u,l,v,m,p,y,f,g;return s().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:e.preventDefault(),e.stopPropagation(),i=void 0===(o=t.invoice)?{}:o,n.t0=t.itemType,n.next="proformaInvoice"===n.t0?6:"invoice"===n.t0?12:"ppmInvoice"===n.t0?19:26;break;case 6:return n.next=8,d.query({query:x.WG,variables:{id:i.id}});case 8:return c=n.sent.data.invoice,(0,V.u)({meta:null==c?void 0:null===(r=c.accountEntry)||void 0===r?void 0:r.meta,invoice:c}),n.abrupt("break",27);case 12:return n.next=14,d.query({query:x.By,variables:{jobId:t.jobId,invoiceType:i.invoiceType}});case 14:return m=null==(v=n.sent.data.invoices)?void 0:v[0],(0,U._)({invoice:m,meta:null==m?void 0:null===(u=m.accountEntry)||void 0===u?void 0:u.meta,type:null==m?void 0:m.invoiceType,client:d}),n.abrupt("break",27);case 19:return n.next=21,d.query({query:x.By,variables:{jobId:t.jobId,invoiceType:i.invoiceType}});case 21:return g=null==(f=n.sent.data.invoices)?void 0:f[0],(0,G.$)(null==g?void 0:null===(p=g.accountEntry)||void 0===p?void 0:p.meta),n.abrupt("break",27);case 26:return n.abrupt("break",27);case 27:case"end":return n.stop()}},n)})),function(n,e){return nK.apply(this,arguments)}),n8=(nQ=(0,a.Z)(s().mark(function n(e){var t,o;return s().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(e.stopPropagation(),nw(!0),(t=no.filter(function(n){var e,t;return n.assigned&&!(null!==(e=n.meta)&&void 0!==e&&e.xeroInvoiceId||null!==(t=n.meta)&&void 0!==t&&t.xeroCreditNoteId)})).length){n.next=5;break}return n.abrupt("return");case 5:if(null!=r&&r.companyId){n.next=8;break}return _(!0),n.abrupt("return");case 8:return o={userId:ny,entities:t.map(function(n){return"creditNote"===n.itemType?{id:n.id,entity:n.itemType}:{entity:n.itemType,invoiceType:n.invoice.invoiceType||null,invoiceId:n.id||null}})},n.next=11,nW(o).then(function(){nw(!1),nX()});case 11:case"end":return n.stop()}},n)})),function(n){return nQ.apply(this,arguments)}),n6=function(){return(0,na.jsxs)(nv,{children:[b&&(0,na.jsx)(nm,{context:"info",onClick:function(){return nM(window.location.href)},title:"Refresh Token",size:"md",children:"Sign in with Xero"}),!b&&(0,na.jsx)(nm,{context:"info",onClick:n8,title:"Send invoices to Xero",size:"md",disabled:!no.some(function(n){var e,t;return n.assigned&&!(null!==(e=n.meta)&&void 0!==e&&e.xeroInvoiceId||null!==(t=n.meta)&&void 0!==t&&t.xeroCreditNoteId)})||nx,children:"Sync with Xero"})]})},n4=function(n){var e,t,o,i,r=n.row;return(0,na.jsx)(Z.Z,{context:"secondary",size:"sm",onToggle:function(n){return n1(r,n)},toggled:r.assigned||(null===(e=r.meta)||void 0===e?void 0:e.xeroInvoiceId)||(null===(t=r.meta)||void 0===t?void 0:t.xeroCreditNoteId),disabled:(null===(o=r.meta)||void 0===o?void 0:o.xeroInvoiceId)||(null===(i=r.meta)||void 0===i?void 0:i.xeroCreditNoteId)})},n3=(nY=(0,a.Z)(s().mark(function n(e,t){var o,i;return s().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e.preventDefault(),e.stopPropagation(),n.next=4,nH((null===(o=t.meta)||void 0===o?void 0:o.xeroInvoiceId)||(null===(i=t.meta)||void 0===i?void 0:i.xeroCreditNoteId),null==r?void 0:r.companyId,ny);case 4:nX();case 5:case"end":return n.stop()}},n)})),function(n,e){return nY.apply(this,arguments)}),n9=[{formatter:n4,text:(0,na.jsx)(Z.Z,{context:"secondary",size:"sm",toggled:no.every(function(n){return n.assigned}),onToggle:function(n){return n5(n)}})},{formatter:n0,text:"Type"},{text:"Customer",formatter:function(n){var e,t,o,i,r=n.row;return null!==(e=r.invoice)&&void 0!==e&&null!==(t=e.invoiceType)&&void 0!==t&&t.includes("customer")||null!==(o=r.invoice)&&void 0!==o&&null!==(i=o.invoiceType)&&void 0!==i&&i.includes("Customer")?r.customer:"-"}},{text:"Supplier",formatter:function(n){var e,t,o,i,r=n.row;return null!==(e=r.invoice)&&void 0!==e&&null!==(t=e.invoiceType)&&void 0!==t&&t.includes("supplier")||null!==(o=r.invoice)&&void 0!==o&&null!==(i=o.invoiceType)&&void 0!==i&&i.includes("Supplier")?r.supplier:"-"}},{text:"Number",formatter:function(n){var e,t=n.row;return(0,na.jsx)(H.D,{id:t.jobId,number:t.number,invoiceNumber:null===(e=t.invoice)||void 0===e?void 0:e.invoiceNumber,numberPrefix:nd,numberSuffix:ns,openCanvas:!!t.jobId,type:t.jobType})}},{text:"Xero Status"},{text:"Xero Reference"},{text:"Reference"},{text:"Date"},{text:"Days Outstanding"},{text:"Amount Outstanding",formatter:function(n){var e=n.row;return"invoice"===e.itemType||"proformaInvoice"===e.itemType||"ppmInvoice"===e.itemType?(0,T.Z)(e.outstandingAmount):"-"}},{text:"Status",formatter:function(n){var e=n.row;return e.status?(0,na.jsx)(M.B,{value:e.status}):""}},{text:"Debit",formatter:function(n){var e=n.row;return e.debit?(0,T.Z)(e.debit):"-"}},{text:"Credit",formatter:function(n){var e=n.row;return e.credit?(0,T.Z)(e.credit):"-"}},{formatter:E.Z,formatterData:function(n){var e,t,o=[{context:"secondary",icon:["fas","download"],onClick:function(n,e){return n2(n,e)},tooltip:"Download",disabled:"creditNote"===n.itemType||"paymentReceipt"===n.itemType}];return null!==(e=n.meta)&&void 0!==e&&e.xeroInvoiceId&&!(null!==(t=n.meta)&&void 0!==t&&t.syncedWithXero)&&o.unshift({context:"info",icon:["fas","circle"],onClick:function(n,e){return n3(n,e)},tooltip:"Invoice has changes in Xero. Click to update it in Cleverly"}),o},text:"Actions"},{hidden:!0},{hidden:!0},{hidden:!0},{hidden:!0},{hidden:!0},{hidden:!0},{hidden:!0},{hidden:!0},{hidden:!0}],n7=function(n){return nz.map(function(e){var t,o,i,r,a,c,u,d,l,s,v,m,p,y,f,g,b,h,I,x,w="creditNote"!==e.type&&"paymentReceipt"!==e.type?e.outstandingdays:"-";return{selector:"",itemType:e.type,customer:null==e?void 0:null===(t=e.invoices[0])||void 0===t?void 0:null===(o=t.Job)||void 0===o?void 0:null===(i=o.Customer)||void 0===i?void 0:i.name,supplier:null==e?void 0:null===(r=e.invoices[0])||void 0===r?void 0:null===(a=r.Job)||void 0===a?void 0:null===(c=a.Supplier)||void 0===c?void 0:c.name,jobId:null==e?void 0:null===(u=e.invoices[0])||void 0===u?void 0:null===(d=u.Job)||void 0===d?void 0:d.id,xeroStatus:null!=e&&null!==(l=e.meta)&&void 0!==l&&l.xeroInvoiceId||null!=e&&null!==(s=e.meta)&&void 0!==s&&s.xeroCreditNoteId?"Synced":"Not Synced",xeroReference:(null==e?void 0:null===(v=e.meta)||void 0===v?void 0:v.xeroInvoiceId)||(null==e?void 0:null===(m=e.meta)||void 0===m?void 0:m.xeroCreditNoteId),reference:e.reference||(null===(p=e.meta)||void 0===p?void 0:p.paymentReference),date:(0,S.Z)(e.createdAt),outstandingDays:w,outstandingAmount:e.outstandingAmount,status:null==e?void 0:null===(y=e.invoices[0])||void 0===y?void 0:null===(f=y.Job)||void 0===f?void 0:f.status,debit:e.debit,credit:e.credit,actions:"",number:null==e?void 0:null===(g=e.invoices[0])||void 0===g?void 0:null===(b=g.Job)||void 0===b?void 0:b.number,jobType:null==e?void 0:null===(h=e.invoices[0])||void 0===h?void 0:null===(I=h.Job)||void 0===I?void 0:I.type,invoiceNumber:null==e?void 0:null===(x=e.invoices[0])||void 0===x?void 0:x.invoiceNumber,invoice:null!=e&&e.invoices?null==e?void 0:e.invoices[0]:null,invoices:null==e?void 0:e.invoices,meta:null==e?void 0:e.meta,paymentStatus:e.paymentStatus,assigned:n,id:e.id}})},n5=function(n){nr(n7(n))},en={control:nk,errors:nD,register:nC},ee=function(n){n.invoiceNumber||n.startDate||n.endDate||n.outstandingLevel?nh(nl(nl({},nb),{},{endDate:n.endDate,invoiceNumber:n.invoiceNumber?n.invoiceNumber:null,outstandingLevel:n.outstandingLevel,startDate:n.startDate})):Array.isArray(n)?nh(nl(nl({},nb),{},{type:n})):nh(nf)};return(0,v.useEffect)(function(){nr(n7(!1))},[nB]),(0,na.jsxs)(na.Fragment,{children:[(0,na.jsx)(z.Z,{sx:{color:"#fff",zIndex:function(n){return n.zIndex.drawer+1}},open:nx,children:(0,na.jsx)(L.Z,{color:"inherit"})}),(0,na.jsx)(A.Z,{open:!0,title:"Filters",children:(0,na.jsxs)(k.Z,{handleSubmit:nN(ee),children:[(0,na.jsxs)(D.Z,{children:[(0,na.jsx)(N.Z,{md:2,children:(0,na.jsx)(X.M,nl(nl({},en),{},{name:"startDate",placeholder:"Start date"}))}),(0,na.jsx)(N.Z,{md:2,children:(0,na.jsx)(X.M,nl(nl({},en),{},{name:"endDate",placeholder:"End date"}))}),(0,na.jsx)(N.Z,{md:3,children:(0,na.jsx)(C.Z,nl(nl({},en),{},{name:"invoiceNumber",placeholder:"Id / Invoice"}))}),(0,na.jsx)(N.Z,{md:3,children:(0,na.jsx)($.Z,nl(nl({},en),{},{name:"outstandingLevel",options:W.r}))}),(0,na.jsx)(N.Z,{md:1,children:(0,na.jsx)(R.Z,{content:"Filter",context:"secondary",size:"sm",type:"submit"})})]}),(0,na.jsx)(q.Z,{marginBottom:"md"}),(0,na.jsx)(nc,{onFilter:ee})]})}),(0,na.jsxs)(A.Z,{dataSet:{"data-cy":"Xero Data"},open:!0,title:"Account Entries",toolbar:!(0,Y.s)()&&(0,na.jsx)(n6,{}),children:[(0,na.jsx)(B.t,{history:!0,columns:n9,loading:nB,meta:nL,ref:nS,refetch:nX,rows:no}),(0,na.jsx)(q.Z,{})]})]})},nv=P.ZP.div.withConfig({displayName:"list__StyledToolbar",componentId:"sc-g7ghbs-0"})(["float:right;"]),nm=(0,P.ZP)(R.Z).withConfig({displayName:"list__StyledButton",componentId:"sc-g7ghbs-1"})(["margin-left:10px;&[disabled]{background-color:#cbd5e0;opacity:1;}"]),np=(0,P.ZP)(J.Z).withConfig({displayName:"list__StyledBadge",componentId:"sc-g7ghbs-2"})(["background-color:",";"],function(n){return no(n.row,n.theme)}),ny=function(){return(0,na.jsx)(r.Z,{pageHeading:{heading:"Xero"},View:(0,na.jsx)(ns,{})})}},89474:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/data/xero",function(){return t(54258)}])}},function(n){n.O(0,[3662,367,2283,5391,5312,4425,1410,212,9947,93,4952,465,1261,9480,9229,1772,825,9774,2888,179],function(){return n(n.s=89474)}),_N_E=n.O()}]);