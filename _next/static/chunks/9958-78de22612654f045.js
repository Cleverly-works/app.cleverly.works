"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9958],{34197:function(n,e,t){t.d(e,{E:function(){return o}});var o=function(n,e){if(Array.isArray(e)){var t,o=null;return e.forEach(function(e){var t,a=null==n?void 0:null===(t=n.timings)||void 0===t?void 0:t.find(function(n){return n.status===e});o=(null==a?void 0:a.createdAt)||o}),o}var a=null==n?void 0:null===(t=n.timings)||void 0===t?void 0:t.find(function(n){return n.status===e});return(null==a?void 0:a.createdAt)||null}},19958:function(n,e,t){t.d(e,{V:function(){return z}});var o=t(16835),a=t(50029),r=t(59499),c=t(4730),i=t(64687),s=t.n(i),d=t(67294),u=t(45697),l=t(93633),p=t(256),m=t(95102),f=t(11163),v=t.n(f),y=t(42283),b=t(79665),h=t(80880),g=t(97202),_=t(38603),A=t(78215),j=t(2356),I=t(65375),w=t(71247),O=t(83528),C=t(46482),x=t(50093),Z=t(11057),L=t(47385),P=t(71772),$=t(85893);function k(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})),t.push.apply(t,o)}return t}function S(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?k(Object(t),!0).forEach(function(e){(0,r.Z)(n,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):k(Object(t)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))})}return n}var N=function(n){var e=n.accountId,t=n.accountName,o=n.canSelectAccount,a=n.control,r=n.errors,c=n.setValue,i=n.watch,s=e?{value:e,label:t}:i("propertyOwner"),u=(0,L.Z)(s),l=function(n){c("contactUser",null)};(0,d.useEffect)(function(){s!==u&&u&&l(s)},[s]);var p={control:a,errors:r};return(0,$.jsxs)(A.Z,{children:[(0,$.jsx)(j.Z,{md:6,children:(0,$.jsx)(P.P,S(S({},p),{},{defaultValue:e&&{value:e,label:t},errors:S({},r),isDisabled:!o,label:"Client",name:"propertyOwner",placeholder:"Select",type:"customer"}))}),(0,$.jsx)(j.Z,{md:6,children:(0,$.jsx)(P.P,S(S({},p),{},{accountId:(null==s?void 0:s.value)||null,errors:S({},r),isDisabled:!s,label:"Contact Name",name:"contactUser",placeholder:s?"Select":"Select the location owner",type:"user"}))})]})},U=t(34197),q=function(n,e){var t=n.propertyOwner,o=n.contactUser;return n.Account_Locations={data:{accountId:t.value}},delete n.propertyOwner,n.contactUserId=(null==o?void 0:o.value)||null,delete n.contactUser,e&&delete n.Account_Locations,n},D=function(n,e,t,o){var a={location:q(n,!0),locationId:e.locationId,accountId:e.accountId,newAccountId:e.newAccountId,hasChanged:e.hasChanged};o({variables:a})},E=t(74231),V=t(58969),M=t(26380),T=t(72936),X=["accountId","accountName","entity","data","refetch","onAddressCreated","isPropsComponent","initialValues","xeroContactId","displayXeroContacts","xeroContacts","displaySignin","handleXeroAuthorize"];function J(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})),t.push.apply(t,o)}return t}function G(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?J(Object(t),!0).forEach(function(e){(0,r.Z)(n,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):J(Object(t)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))})}return n}var R="/dashboard/properties/",z=function(n){var e=n.accountId,t=n.accountName,r=n.entity,i=n.data,u=n.refetch,f=n.onAddressCreated,L=n.isPropsComponent,P=n.initialValues,k=n.xeroContactId,S=n.displayXeroContacts,J=n.xeroContacts,z=n.displaySignin,F=n.handleXeroAuthorize;(0,c.Z)(n,X);var B,H,K,Q,W=(0,d.useContext)(h.Z),Y=(0,T.x)().hasRole,nn=(0,d.useState)(!1),ne=nn[0],nt=nn[1],no=null==J?void 0:J.find(function(n){return n.value===k}),na=G(G(G({},i?(location.propertyOwner={label:i.customer[0].account.name,value:i.customer[0].account.id},location.contactUser=(null==i?void 0:i.user)&&i.customer[0].account.id&&{label:i.user.fullName,value:i.user.id},location.access=i.access,location.name=i.name,location.status=i.status,location):{}),P),{},{xeroContact:no})||{},nr=(0,y.cI)({defaultValues:na,resolver:(0,b.S)((0,E.Ry)().shape({access:(0,E.Z_)().required(),contactUser:(0,E.Ry)().required(),name:(0,E.Z_)().required(),propertyOwner:(0,E.Ry)().required(),status:Y("admin")&&(0,E.Z_)().required()}))}),nc=nr.control,ni=nr.errors,ns=nr.handleSubmit,nd=nr.register,nu=nr.setValue,nl=nr.getValues,np=nr.watch,nm=(0,l.a)(m.yf,{variables:{id:null==i?void 0:i.id},skip:!(null!=i&&i.id)}).data,nf=(nm=void 0===nm?{property:{}}:nm).property,nv=(K=(0,a.Z)(s().mark(function n(e){var t,o,a,c,i,d,u;return s().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:var a,s;return t={Addresses:{data:{Address:{data:G({},e)},entity:r}}},o=G(G({},nl()),t),Y("customer")&&(o.status="active"),n.next=5,ng({variables:{objects:[q(a=o)]}});case 5:u=void 0===(d=(i=void 0===(i=(c=void 0===(c=n.sent.data)?{}:c).insert_Location)?{}:i).returning)?{}:d,f&&f(u),W.close(),W.close();case 14:case"end":return n.stop()}},n)})),function(n){return K.apply(this,arguments)}),ny=(Q=(0,a.Z)(s().mark(function n(e){return s().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:W.show({title:"Add new address",content:(0,$.jsx)(V.k,{onCancel:function(){},onSubmit:nv,type:"text"}),submit:!1});case 1:case"end":return n.stop()}},n)})),function(n){return Q.apply(this,arguments)}),nb=(0,p.D)(m.A1,{onCompleted:function(n){if(!L){var e=n.insert_Location.returning[0].id;W.close(),u?u():v().push("".concat(R,"view?id=").concat(e))}}}),nh=(0,o.Z)(nb,2),ng=nh[0],n_=nh[1].loading,nA=(0,p.D)(m.$A,{onCompleted:function(n){var e=n.update_Location_by_pk.id;W.close(),u?u():v().push("".concat(R,"view?id=").concat(e))}}),nj=(0,o.Z)(nA,2),nI=nj[0],nw=nj[1].loading,nO=(0,p.D)(m.$E),nC=(0,o.Z)(nO,1)[0],nx=function(n){if(nt(!1),i){if("inactive"===n.status&&!(e=nf.jobs).every(function(n){return!!(0,U.E)(n,["completed","closed"])})){nt(!0);return}n.xeroContact&&nC({variables:{id:null==i?void 0:null===(r=i.customer[0])||void 0===r?void 0:r.account.id,changes:{meta:G(G({},null==i?void 0:null===(c=i.customer[0])||void 0===c?void 0:c.account.meta),{},{xeroContactId:n.xeroContact.value})}}});var e,t,o,a,r,c,s={locationId:null==i?void 0:i.id,accountId:null==i?void 0:null===(t=i.customer[0])||void 0===t?void 0:t.account.id,newAccountId:null==n?void 0:null===(o=n.propertyOwner)||void 0===o?void 0:o.value,hasChanged:(null==i?void 0:null===(a=i.customer[0])||void 0===a?void 0:a.account.id)!==(null==n?void 0:n.propertyOwner.value)};D(G(G({},n),{},{xeroContact:void 0}),s,i.id,nI)}else ny()},nZ={control:nc,errors:ni,register:nd};return(0,$.jsxs)(g.Z,{disabled:n_||nw,id:"offCanvasForm",handleSubmit:ns(nx),children:[ne&&(0,$.jsx)(_.Z,{context:"info",content:" This location cannot be made inactive, it has active jobs."}),(0,$.jsx)(A.Z,{children:(0,$.jsx)(j.Z,{md:12,children:(0,$.jsx)(N,G(G({},nZ),{},{accountId:e,accountName:t,canSelectAccount:!e,setValue:nu,watch:np}))})}),(0,$.jsx)(I.Z,{label:"Name",children:(0,$.jsx)(w.Z,G(G({},nZ),{},{name:"name"}))}),(0,$.jsx)(I.Z,{label:"Access information",children:(0,$.jsx)(O.Z,G(G({},nZ),{},{name:"access",rows:4}))}),Y("admin")&&(0,$.jsx)(I.Z,{label:"Status",children:(0,$.jsx)(C.Z,G(G({},nZ),{},{name:"status",options:M.bg}))}),Y("admin")&&void 0!==S&&S&&(0,$.jsx)(I.Z,{label:"Xero Contact",children:z?(0,$.jsx)(Z.Z,{variant:"contained",onClick:function(){F()},children:"Connect to Xero to select Contact"}):(0,$.jsx)(x.Z,G(G({options:J},nZ),{},{name:"xeroContact"}))})]})};N.propTypes={accountId:u.number,accountName:u.string,data:u.object,refetch:u.func,offCanvas:u.func}},95102:function(n,e,t){t.d(e,{$A:function(){return v},$E:function(){return y},A1:function(){return f},Un:function(){return m},yf:function(){return h},zg:function(){return b}});var o,a,r,c,i,s,d,u,l=t(71383),p=t(22841);(0,p.Ps)(o||(o=(0,l.Z)(["\n  query GetProperty($id: Int!) {\n    location: Location_by_pk(id: $id) {\n      id\n      contactUserId\n      name\n      access\n      contactUser: User {\n        id\n        nameFirst\n        nameLast\n      }\n      propertyOwner: Account_Locations {\n        account: Account {\n          id\n          name\n          type\n        }\n      }\n    }\n  }\n"])));var m=(0,p.Ps)(a||(a=(0,l.Z)(['\n  query GetMapProperties {\n    properties: Location {\n      id\n      access\n      createdAt\n      name\n      contactUserId\n      addresses: Addresses(where: { entity: { _eq: "Location" } }) {\n        id\n        registered\n        operating\n        trading\n        invoice\n        status\n        createdAt\n        address: Address {\n          id\n          name\n          addressLine1\n          addressLine2\n          addressLine3\n          city\n          county\n          geo\n          postCode\n          country: Country {\n            id\n            name\n          }\n        }\n      }\n      bookings: Jobs {\n        id\n        title\n        createdAt\n        customerId\n        amount\n        locationId\n        managerId\n        quoteNumber\n        reference\n        status\n        serviceId\n        meta\n        customer: Customer {\n          id\n          name\n        }\n        location: Location {\n          id\n          name\n          addresses: Addresses(where: { entity: { _eq: "Location" } }) {\n            id\n            registered\n            operating\n            trading\n            invoice\n            status\n            createdAt\n            address: Address {\n              id\n              name\n              addressLine1\n              addressLine2\n              addressLine3\n              city\n              county\n              geo\n              postCode\n              country: Country {\n                id\n                name\n              }\n            }\n          }\n        }\n        manager: Manager {\n          id\n          nameFirst\n          nameLast\n        }\n        sla: SLA {\n          id\n          name\n          notes\n        }\n        supplier: Supplier {\n          id\n          companyNumber\n          createdAt\n          name\n          status\n          type\n          updatedAt\n          website\n          clientType\n          managerId\n          vatId\n          meta\n          media: Media {\n            id\n            medium: Medium {\n              id\n              category\n              filename\n              meta\n              type\n            }\n          }\n          manager: Manager {\n            id\n            fullName\n          }\n        }\n        supplierOffers: SupplierOffers {\n          status\n          rate\n          supplier: Supplier {\n            id\n            companyNumber\n            createdAt\n            name\n            status\n            type\n            updatedAt\n            website\n            clientType\n            managerId\n            vatId\n            meta\n            media: Media {\n              id\n              medium: Medium {\n                id\n                category\n                filename\n                meta\n                type\n              }\n            }\n            manager: Manager {\n              id\n              fullName\n            }\n          }\n        }\n        timings: JobTimings {\n          id\n          status\n          createdAt\n        }\n      }\n    }\n  }\n']))),f=(0,p.Ps)(r||(r=(0,l.Z)(["\n  mutation AddLocation($objects: [Location_insert_input!]!) {\n    insert_Location(objects: $objects) {\n      returning {\n        id\n        name\n      }\n    }\n  }\n"]))),v=(0,p.Ps)(c||(c=(0,l.Z)(["\n  mutation UpdateAccountLocation(\n    $location: Location_set_input\n    $locationId: Int!\n    $accountId: Int!\n    $newAccountId: Int!\n    $hasChanged: Boolean!\n  ) {\n    update_Account_Location(\n      where: { Account: { id: { _eq: $accountId } }, id: { _eq: $locationId } }\n      _set: { accountId: $newAccountId }\n    ) @include(if: $hasChanged) {\n      returning {\n        id\n      }\n    }\n    update_Location_by_pk(pk_columns: { id: $locationId }, _set: $location) {\n      id\n    }\n  }\n"]))),y=(0,p.Ps)(i||(i=(0,l.Z)(["\n  mutation UpdateAccount($id: Int!, $changes: Account_set_input) {\n    update_Account_by_pk(pk_columns: { id: $id }, _set: $changes) {\n      id\n    }\n  }\n"]))),b=(0,p.Ps)(s||(s=(0,l.Z)(["\n  mutation UpdateLocation($id: Int!, $changes: Location_set_input) {\n    update_Location_by_pk(pk_columns: { id: $id }, _set: $changes) {\n      id\n    }\n  }\n"])));(0,p.Ps)(d||(d=(0,l.Z)(["\n  query GetAccountName($id: Int!) {\n    account: Account_by_pk(id: $id) {\n      id\n      name\n      type\n    }\n  }\n"])));var h=(0,p.Ps)(u||(u=(0,l.Z)(["\n  query GetPropertiesJob($id: Int!) {\n    property: Location_by_pk(id: $id) {\n      id\n      jobs: Jobs {\n        id\n        timings: JobTimings {\n          id\n          status\n          createdAt\n        }\n      }\n    }\n  }\n"])))}}]);