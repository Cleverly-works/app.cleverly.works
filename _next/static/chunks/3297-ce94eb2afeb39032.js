"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3297],{43297:function(e,t,n){n.d(t,{P:function(){return N}});var r=n(59499),a=n(67294),o=n(42283),l=n(79665),i=n(76600),s=n(58965),u=n(9270),c=n(62140),d=n(49501),p=n(55563),b=n(95103),m=n(84043),v=n(58594),y=n(6911),f=n(92264),h=n(13575),g=n(71772),j=n(5547),x=n(85893);function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var T=function(e){var t,n={errors:e.errors,register:e.register};return(0,x.jsxs)(u.Z,{children:[(0,x.jsx)(c.Z,{md:6,children:(0,x.jsx)(d.Z,{label:"Type Of organisation",children:(0,x.jsx)(b.Z,Z(Z({},n),{},{name:"typeOfOrganisation",options:j.E}))})}),(0,x.jsx)(c.Z,{md:6,children:(0,x.jsx)(d.Z,{label:"Quoting Email",children:(0,x.jsx)(p.Z,Z(Z({},n),{},{name:"quotingEmail",type:"email"}))})}),(0,x.jsx)(c.Z,{md:6,children:(0,x.jsx)(d.Z,{label:"UTR Number",children:(0,x.jsx)(p.Z,Z(Z({},n),{},{name:"utrNumber"}))})}),(0,x.jsx)(c.Z,{md:6,children:(0,x.jsx)(d.Z,{label:"CIS registration number",children:(0,x.jsx)(p.Z,Z(Z({},n),{},{name:"cisRegistered"}))})})]})},C=n(3915),S=n(74278),P=n(26380),A=n(72936),w=n(27940),_=n(5616),$=n(98456),I=n(64666),B=n(37645),q=n(6514),D=n(58951),E=n(31425),L=n(11057),k=n(2112);function J(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?J(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):J(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var N=function(e){var t=e.account,n=e.displayXeroContacts,r=void 0!==n&&n,j=e.xeroContacts,O=e.displaySignin,Z=e.handleXeroAuthorize,J=e.onSubmit,N=e.schema,Q=e.type,U=e.loading,F=(0,A.x)(),G=F.hasRole,V=F.user,z=(0,a.useState)(!1),M=z[0],W=z[1],X=(0,a.useState)(""),H=X[0],Y=X[1],K=null==j?void 0:j.find(function(e){var n;return e.value===(null==t?void 0:null===(n=t.meta)||void 0===n?void 0:n.xeroContactId)}),ee=R(R({},t),{},{availableCharts:null!==(er=null==t?void 0:null===(ea=t.meta)||void 0===ea?void 0:ea.availableCharts)&&void 0!==er?er:[],xeroContact:K})||{},et="Assign",en="Assigned To";if(("customer"===Q||"admin"===Q)&&(ee.contactUsernameFirst=null==t?void 0:null===(el=t.contactUsers[0])||void 0===el?void 0:null===(ei=el.user)||void 0===ei?void 0:ei.nameFirst,ee.contactUsernameLast=null==t?void 0:null===(es=t.contactUsers[0])||void 0===es?void 0:null===(eu=es.user)||void 0===eu?void 0:eu.nameLast,ee.contactUseremail=null==t?void 0:null===(ec=t.contactUsers[0])||void 0===ec?void 0:null===(ed=ec.user)||void 0===ed?void 0:ed.email,ee.contactUserphone=null==t?void 0:null===(ep=t.contactUsers[0])||void 0===ep?void 0:null===(eb=ep.user)||void 0===eb?void 0:eb.phone,ee.contactUserstatus=null==t?void 0:null===(em=t.contactUsers[0])||void 0===em?void 0:null===(ev=em.user)||void 0===ev?void 0:ev.status,ee.contactUseruserId=null==t?void 0:null===(ey=t.contactUsers[0])||void 0===ey?void 0:null===(ef=ey.user)||void 0===ef?void 0:ef.id,et="Manager",en="Account manager"),"admin"===Q){var er,ea,eo,el,ei,es,eu,ec,ed,ep,eb,em,ev,ey,ef,eh,eg,ej=null==t?void 0:null===(eh=t.meta)||void 0===eh?void 0:eh.timeZone;ee.timeZone=ej||{value:"Europe/London",label:"Europe/London +00:00"},ee.modules=[],null!=t&&null!==(eg=t.meta)&&void 0!==eg&&eg.modules&&Object.keys(t.meta.modules).forEach(function(e){!0===t.meta.modules[e]&&ee.modules.push(e)})}var ex=(0,o.cI)({defaultValues:ee,resolver:(0,l.S)(N())}),eO=ex.control,eZ=ex.errors,eT=ex.setValue,eC=ex.handleSubmit,eS=ex.register,eP=ex.watch,eA=eP("vatId"),ew=(0,k.b)(eA),e_=eP("modules"),e$={control:eO,errors:eZ,register:eS};return((0,a.useEffect)(function(){r&&j.length&&eT("xeroContact",null==j?void 0:j.find(function(e){var n;return e.value===(null==t?void 0:null===(n=t.meta)||void 0===n?void 0:n.xeroContactId)}))},[null==t?void 0:null===(eo=t.meta)||void 0===eo?void 0:eo.xeroContactId,r,eT,j]),U)?(0,x.jsx)(_.Z,{sx:{width:"100%",display:"flex",justifyContent:"center"},children:(0,x.jsx)($.Z,{})}):(0,x.jsxs)(i.Z,{handleSubmit:eC(J),children:[(0,x.jsxs)(I.Z,{open:M,onClose:function(){W(!1)},"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[(0,x.jsx)(B.Z,{id:"alert-dialog-title",children:"VAT Number"}),(0,x.jsx)(q.Z,{children:(0,x.jsxs)(D.Z,{id:"alert-dialog-description",children:["This supplier does not appear to have a valid VAT number supplied.",(0,x.jsx)("br",{}),(0,x.jsx)("br",{}),"Please note that no VAT will be charged for this supplier without a valid VAT number."]})}),(0,x.jsxs)(E.Z,{children:[(0,x.jsx)(L.Z,{variant:"contained",onClick:function(){eC(J)(),W(!1)},children:"Confirm"}),(0,x.jsx)(L.Z,{variant:"outlined",onClick:function(){W(!1)},children:"Cancel"})]})]}),(null==t?void 0:t.type)!=="superadmin"&&(0,x.jsx)(s.Z,{open:!0,title:et,children:(0,x.jsx)(u.Z,{children:(0,x.jsx)(c.Z,{md:6,children:(0,x.jsx)(g.P,R(R({},e$),{},{accountId:V.accountId,errors:R({},eZ),label:en,name:"managerSelected",type:"user"}))})})}),(0,x.jsx)(s.Z,{open:!0,title:"Company",children:(0,x.jsxs)(u.Z,{children:[(0,x.jsx)(c.Z,{md:6,children:(0,x.jsx)(d.Z,{label:"Name",children:(0,x.jsx)(p.Z,R(R({},e$),{},{name:"name"}))})}),(0,x.jsx)(c.Z,{md:6,children:(0,x.jsx)(d.Z,{label:"Website",children:(0,x.jsx)(p.Z,R(R({},e$),{},{name:"website"}))})}),(0,x.jsx)(c.Z,{md:6,children:(0,x.jsx)(d.Z,{label:"Company Number",children:(0,x.jsx)(p.Z,R(R({},e$),{},{name:"companyNumber"}))})}),(0,x.jsx)(c.Z,{md:6,children:(0,x.jsx)(d.Z,{label:"VAT ID",children:(0,x.jsx)(p.Z,R(R({},e$),{},{name:"vatId"}))})}),(0,x.jsx)(c.Z,{md:6,children:(0,x.jsx)(d.Z,{label:"Status",children:(0,x.jsx)(b.Z,R(R({},e$),{},{name:"status",options:P.bg}))})})]})}),"admin"===Q&&(0,x.jsxs)(s.Z,{open:!0,title:"Admin Settings",children:[(0,x.jsx)(u.Z,{children:(0,x.jsx)(c.Z,{md:6,children:(0,x.jsx)(d.Z,{label:"Client Type",children:(0,x.jsx)(m.Z,R(R({options:(0,h.r)()},e$),{},{name:"timeZone"}))})})}),G("superadmin")&&(0,x.jsx)(u.Z,{children:(0,x.jsx)(c.Z,{md:12,children:(0,x.jsx)(v.Z,R(R({},e$),{},{data:S.o,legend:"Modules",name:"modules"}))})}),G("superadmin")&&e_.includes("dataCharts")&&(0,x.jsx)(_.Z,{sx:{width:"300px"},children:(0,x.jsx)(o.Qr,{name:"availableCharts",control:eO,render:function(e){var t,n=e.value,r=e.onChange;return(0,x.jsx)(y.q,{value:n||[],onChange:function(e,t){return r(t)},multiple:!0,limitTags:1,setSearch:Y,textFieldProps:{color:"secondary",variant:"standard",label:"Select available charts",error:!!eZ.availableCharts,helperText:null===(t=eZ.availableCharts)||void 0===t?void 0:t.message},options:S.O.filter(function(e){return e.label.toLowerCase().includes(H.toLowerCase())})})}})})]}),"customer"===Q&&(0,x.jsx)(s.Z,{open:!0,title:"Customer",children:(0,x.jsx)(u.Z,{children:(0,x.jsx)(c.Z,{md:6,children:(0,x.jsx)(w.l,R(R({},e$),{},{label:"Customer Type",name:"clientType",type:"clientType"}))})})}),"supplier"===Q&&(0,x.jsx)(s.Z,{open:!0,title:"Supplier",children:(0,x.jsx)(T,R({},e$))}),r&&(0,x.jsx)(s.Z,{open:!0,title:"Xero User Sync",children:(0,x.jsx)(c.Z,{md:12,children:(0,x.jsx)(d.Z,{label:"Xero Contact",children:O?(0,x.jsx)(L.Z,{variant:"contained",onClick:function(){Z()},children:"Connect to Xero to select Contact"}):(0,x.jsx)(m.Z,R(R({options:j},e$),{},{name:"xeroContact"}))})})}),(!t||"customer"===Q||"admin"===Q)&&(0,x.jsxs)(s.Z,{open:!0,title:"Contact User",children:[(0,x.jsx)(C.q,R(R({},e$),{},{prefix:"contactUser"})),(0,x.jsx)(p.Z,R(R({},e$),{},{defaultValue:"true",name:"contactUser",type:"hidden"}))]}),"supplier"!==Q||ew?(0,x.jsx)(f.H,{content:"Submit",type:"submit"}):(0,x.jsx)(f.H,{content:"Submit",handleClick:function(){return W(!0)}})]})}},6911:function(e,t,n){n.d(t,{q:function(){return m}});var r=n(59499),a=n(4730),o=n(23776),l=n(87918),i=n(50135),s=n(98456),u=n(67294),c=n(85893),d=["loading","setSearch","textFieldProps"];function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var m=function(e){var t=e.loading,n=e.setSearch,r=e.textFieldProps,p=(0,a.Z)(e,d),m=(0,u.useState)(""),v=m[0],y=m[1];return(0,u.useEffect)(function(){var e=setTimeout(function(){n(v)},500);return function(){return clearTimeout(e)}},[v,n]),(0,c.jsx)(o.Z,b(b({},p),{},{loading:t,onInputChange:function(e,t){y(t)},getOptionLabel:function(e){return e.label},renderTags:function(e,t){return e.map(function(e,n){return(0,c.jsx)(l.Z,b({size:"small",label:e.label},t({index:n})))})},renderInput:function(e){return(0,c.jsx)(i.Z,b(b(b({},e),r),{},{InputProps:b(b(b({},e.InputProps),r.InputProps||{}),{},{endAdornment:(0,c.jsxs)(c.Fragment,{children:[t?(0,c.jsx)(s.Z,{color:"inherit",size:20}):null,e.InputProps.endAdornment]})})}))}}))};m.defaultProps={color:"secondary",onChange:function(){},options:[],onOpen:function(){},setSearch:function(){},textFieldProps:{}}},92264:function(e,t,n){n.d(t,{H:function(){return u}});var r=n(59499),a=n(55377),o=n(16551),l=n(77439),i=n(85893);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var u=function(e){var t=e.children,n=e.content,u=e.context,c=e.data,d=e.disabled,p=e.handleClick,b=e.size,m=e.type;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.Z,{size:"sm"}),(0,i.jsxs)(o.Z,{align:"flex-end",children:[t,(0,i.jsx)(l.Z,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({content:n,context:u,disabled:d,onClick:p,size:b,type:m},c))]})]})};u.defaultProps={content:"Add",context:"secondary",disabled:!1,size:"sm",type:"button"}},13575:function(e,t,n){n.d(t,{r:function(){return o}});var r=n(22091).ZP.getAllTimezones(),a=Object.keys(r).map(function(e){return r[e]}),o=function(){return a.map(function(e){return{label:"".concat(e.name," ").concat(e.utcOffsetStr),value:e.name}})}},88854:function(e,t,n){n.d(t,{Im:function(){return p},RQ:function(){return v},fC:function(){return y},mW:function(){return b},uY:function(){return f},ze:function(){return m}});var r,a,o,l,i,s,u,c=n(71383),d=n(75063),p=(0,d.Ps)(r||(r=(0,c.Z)(['\n  query GetTaxonomys(\n    $limit: Int\n    $offset: Int\n    $q: String\n    $orderBy: Taxonomy_order_by!\n    $status: String = "active"\n    $type: String\n    $typeGroup: String\n    $parentId: Int\n    $fetchGroup: Boolean! = true\n    $id: Int\n    $isGroup: Boolean = false\n  ) {\n    taxonomy: Taxonomy(\n      limit: $limit\n      offset: $offset\n      where: {\n        name: { _ilike: $q }\n        status: { _eq: $status }\n        type: { _eq: $type }\n        parentId: { _eq: $parentId }\n        id: { _eq: $id }\n        isGroup: { _eq: $isGroup }\n      }\n      order_by: [$orderBy]\n    ) {\n      options: Taxonomies(\n        where: {\n          type: { _eq: $type }\n          name: { _ilike: $q }\n          id: { _eq: $id }\n          status: { _eq: "active" }\n        }\n        order_by: { name: asc }\n      ) {\n        value: id\n        label: name\n\n        childs: Taxonomies(order_by: { id: asc }, where: { status: { _eq: "active" } }) {\n          taxonomyId: id\n          name\n          type\n          meta\n          status\n        }\n      }\n      id\n      name\n      type\n      status\n      parentId\n      createdAt\n      meta\n      parent: Parent {\n        id\n        name\n        type\n      }\n      childs: Taxonomies(order_by: { id: asc }, where: { status: { _eq: "active" } }) {\n        taxonomyId: id\n        name\n        type\n        meta\n        status\n      }\n      jobs: Taxonomy_Entities_aggregate(\n        where: { Taxonomy: { type: { _eq: "jobTags" } }, entity: { _eq: "Job" } }\n      ) {\n        aggregate {\n          count\n        }\n      }\n    }\n    meta: Taxonomy_aggregate(\n      where: {\n        name: { _ilike: $q }\n        status: { _eq: $status }\n        type: { _eq: $type }\n        parentId: { _eq: $parentId }\n        id: { _eq: $id }\n        isGroup: { _eq: $isGroup }\n      }\n    ) {\n      aggregate {\n        totalCount: count\n      }\n    }\n    taxonomyGroup: Taxonomy(where: { isGroup: { _eq: true }, type: { _eq: $typeGroup } })\n      @include(if: $fetchGroup) {\n      value: id\n      text: name\n    }\n  }\n'])));(0,d.Ps)(a||(a=(0,c.Z)(["\n  query GetTaxonomy($id: Int!) {\n    taxonomy: Taxonomy_by_pk(id: $id) {\n      id\n      name\n      type\n      status\n      parentId\n      createdAt\n      meta\n    }\n  }\n"])));var b=(0,d.Ps)(o||(o=(0,c.Z)(["\n  mutation AddTaxonomy($objects: [Taxonomy_insert_input!]!) {\n    insert_Taxonomy(objects: $objects) {\n      returning {\n        id\n        type\n      }\n    }\n  }\n"]))),m=(0,d.Ps)(l||(l=(0,c.Z)(["\n  mutation UpdateTaxonomy($id: Int!, $changes: Taxonomy_set_input) {\n    update_Taxonomy_by_pk(pk_columns: { id: $id }, _set: $changes) {\n      id\n      type\n    }\n  }\n"]))),v=(0,d.Ps)(i||(i=(0,c.Z)(["\n  query GeTaxonomyWithEntities($type: String!, $entity: String!, $entityId: Int!) {\n    questions: Taxonomy(where: { type: { _eq: $type } }) {\n      id\n      meta\n      name\n      status\n      taxonomy_entity: Taxonomy_Entities(\n        where: { entityId: { _eq: $entityId }, entity: { _eq: $entity } }\n      ) {\n        comments\n      }\n    }\n  }\n"]))),y=(0,d.Ps)(s||(s=(0,c.Z)(["\n  mutation InsertTaxonomyEntity(\n    $entity: String!\n    $entityId: Int!\n    $questions: [Taxonomy_Entity_insert_input!]!\n    $objectStatusLog: [StatusLog_insert_input!]!\n    $hasStatusLog: Boolean!\n  ) {\n    delete_Taxonomy_Entity(where: { entityId: { _eq: $entityId }, entity: { _eq: $entity } }) {\n      returning {\n        id\n      }\n    }\n    insert_Taxonomy_Entity(objects: $questions) {\n      returning {\n        id\n      }\n    }\n\n    insert_StatusLog(objects: $objectStatusLog) @include(if: $hasStatusLog) {\n      returning {\n        id\n      }\n    }\n  }\n"]))),f=(0,d.Ps)(u||(u=(0,c.Z)(["\n  query GetSLAsForJobManage {\n    slas: SLA(order_by: { name: asc }) {\n      id\n      label: name\n      notes\n    }\n  }\n"])))},27940:function(e,t,n){n.d(t,{l:function(){return v}});var r=n(59499),a=n(4730),o=n(67294),l=n(6812),i=n(88854),s=n(49501),u=n(84043),c=n(85893),d=["control","errors","label","name","register","type","filters"];function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var m=function(e,t){var n,r,a,o=!0;return(null===(n=e.errors[e.name])||void 0===n?void 0:n.message)!==(null===(r=t.errors[t.name])||void 0===r?void 0:r.message)&&(o=!1),["name","type"].forEach(function(n){e[n]!==t[n]&&(o=!1)}),o},v=(0,o.memo)(function(e){var t,n,r,o=e.control,p=e.errors,m=e.label,v=e.name,y=e.register,f=e.type,h=e.filters,g=(0,a.Z)(e,d),j=(r=(n=void 0===(n=(0,l.a)(i.Im,{variables:b(b({isGroup:"assetCategory"===f},h),{},{orderBy:{name:"asc"},type:f})}).data)?{taxonomy:[]}:n).taxonomy,"assetCategory"===f?r.map(function(e){return{label:e.name,options:e.options,childs:e.childs,meta:e.meta}}):r.map(function(e){return{label:e.name,value:e.id,childs:e.childs,meta:e.meta}}));return(0,c.jsx)(s.Z,{id:v,label:m,children:(0,c.jsx)(u.Z,b(b({},{control:o,errors:p,register:y}),{},{cacheOptions:!0,isClearable:!0,options:j,name:v},g))})},m);v.defaultProps={filters:{}}},3915:function(e,t,n){n.d(t,{q:function(){return f}});var r=n(27812),a=n(59499),o=n(9270),l=n(62140),i=n(49501),s=n(55563),u=n(70982),c=n(95103),d=n(26380),p=n(72936),b=n(19015),m=n(85893);function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach(function(t){(0,a.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var f=function(e){var t=e.errors,n=e.prefix,a=e.register,v=(0,p.x)().hasRole,f={errors:t,register:a};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(o.Z,{children:[(0,m.jsx)(l.Z,{md:6,children:(0,m.jsx)(i.Z,{label:"First name",children:(0,m.jsx)(s.Z,y(y({},f),{},{name:"".concat(n,"nameFirst")}))})}),(0,m.jsx)(l.Z,{md:6,children:(0,m.jsx)(i.Z,{label:"Last name",children:(0,m.jsx)(s.Z,y(y({},f),{},{name:"".concat(n,"nameLast")}))})}),(0,m.jsx)(l.Z,{md:6,children:(0,m.jsxs)(i.Z,{label:"Email",children:[(0,m.jsx)(s.Z,y(y({},f),{},{name:"".concat(n,"email"),type:"email"})),t["".concat(n,"email")]&&"duplicate"===t["".concat(n,"email")].type&&(0,m.jsx)(u.Z,{message:t["".concat(n,"email")].message})]})}),(0,m.jsx)(l.Z,{md:6,children:(0,m.jsx)(i.Z,{label:"Mobile",children:(0,m.jsx)(s.Z,y(y({},f),{},{name:"".concat(n,"phone")}))})})]}),v([].concat((0,r.Z)(b.td),(0,r.Z)(b.Sf),(0,r.Z)(b.n),(0,r.Z)(b.nx)))&&(0,m.jsx)(i.Z,{label:"Status",children:(0,m.jsx)(c.Z,y(y({},f),{},{name:"".concat(n,"status"),options:d.bg}))}),(0,m.jsx)(s.Z,y(y({},f),{},{name:"".concat(n,"userId"),type:"hidden"}))]})};f.defaultProps={prefix:""}},2112:function(e,t,n){n.d(t,{b:function(){return r}});var r=function(e){return String(e).toLowerCase().replace("gb","").length>=9}},74278:function(e,t,n){n.d(t,{O:function(){return a},o:function(){return r}});var r=[{id:"quotes",label:"Quotes",value:"quotes"},{id:"cleverCalendar",label:"Planned Maintenance",value:"cleverCalendar"},{id:"assets",label:"Assets",value:"assets"},{id:"sensors",label:"IoT/Sensors",value:"sensors"},{id:"compliance",label:"Compliance",value:"compliance"},{id:"tasks",label:"Tasks",value:"tasks"},{id:"workflows",label:"Automated Workflows",value:"workflows"},{id:"sageIntegration",label:"Sage Integration",value:"sageIntegration"},{id:"dataReports",label:"Data Reports",value:"dataReports"},{id:"dataCharts",label:"Data Charts",value:"dataCharts"},{id:"nonLoggedUser",label:"Non logged user",value:"nonLoggedUser"}],a=[{value:"AverageDaysOutstandingChart",label:"Average Days Outstanding"},{value:"AverageJobLengthChart",label:"Average Job Length"},{value:"AverageJobRevenueChart",label:"Average Job Revenue"},{value:"SlaBreachCountChart",label:"SLA Breach (Count)"},{value:"SlaBreachPercentageChart",label:"SLA Breach (Percentage)"},{value:"AverageToCloseByHourChart",label:"Average Time To Close Job"},{value:"AvgPriceChart",label:"Average Price"},{value:"AverageProfitChart",label:"Average Profit"},{value:"AverageQuoteValueChart",label:"Average Quote Value"},{value:"AverageTimeToAcceptByMinuteChart",label:"Average Time To Accept Job"},{value:"AverageTimeToAttendanceChart",label:"Average Time To Attendance"},{value:"AverageTimeToSubmitJobReportChart",label:"Average Time To Submit Job Report"},{value:"CountByActiveAccountChart",label:"Count By Active Account"},{value:"CountJobsEngagementRateChart",label:"Count Jobs Engagement Rate"},{value:"CountOpenJobsByDateChart",label:"Count Open Jobs By Date"},{value:"CustomerAndSupplierAmounts",label:"Customer And Supplier Amounts"},{value:"JobsByDayLineChart",label:"Jobs By Day Line"},{value:"JobsByMonth",label:"Jobs By Month"},{value:"JobsFinancialByDayLineChart",label:"Jobs Financial By Day Line"},{value:"NewCustomerAccountsChart",label:"New Customer Accounts"},{value:"NewSupplierAccountsChart",label:"New Supplier Accounts"},{value:"PercentageOfWorkOrdersByServiceLineTable",label:"Percentage Of Work Orders By Service Line "},{value:"QuoteAcceptanceRateChart",label:"Quote Acceptance Rate"},{value:"SpendByCoverageAreaTable",label:"Spend By Coverage Area "},{value:"SpendFromNewCustomerAccountsChart",label:"Spend From New Customer Accounts"},{value:"SumQuoteAccepted",label:"Value of Quotes Accepted "},{value:"SumQuoteSent",label:"Value of quotations sent"},{value:"TopAssetsByNumberOfJobsTable",label:"Top Assets By Number Of Jobs"},{value:"TopAssetsBySpendTable",label:"Top Assets By Spend "},{value:"TopAssetTypesBySpendTable",label:"Top Asset Types By Spend "},{value:"TopCustomersByNumberOfPropertiesTable",label:"Top Customers By Number Of Properties"},{value:"TopCustomersByProfitChart",label:"Top Customers By Profit"},{value:"TopPropertiesBySpendTable",label:"Top Properties By Spend "},{value:"TopSuppliersByNumberOfJobsTable",label:"Top Suppliers By Number Of Jobs"},{value:"TopSuppliersByQuoteReturnTable",label:"Top Suppliers By Quote Return"},{value:"TopSuppliersByTimeToSubmitJobReportTable",label:"Top Suppliers By Time To Submit Job Report"},{value:"TotalJobRevenueChart",label:"Total Job Revenue"},{value:"TotalQuoteInvoiceSent",label:"Total Quote Invoice Sent"},{value:"TotalQuoteSentChart",label:"Number Of Quotes"},{value:"TotalQuoteReportSent",label:"Total Quote Report Sent"},{value:"TotalQuoteSent",label:"Total Quotes Sent"},{value:"WorstCustomersByAgedReceivablesTable",label:"Worst Customers By Aged Receivables"}]},5547:function(e,t,n){n.d(t,{E:function(){return r}});var r=[{text:"Select Type Of Organisation",value:""},{text:"Sole trader",value:"soleTrader"},{text:"Limited company",value:"limitedCompany"},{text:"Partnership",value:"partnership"},{text:"LLP",value:"llp"},{text:"PLC",value:"plc"}]},26380:function(e,t,n){n.d(t,{bg:function(){return r}});var r=[{text:"Status",value:""},{text:"Active",value:"active"},{text:"Inactive",value:"inactive"}]}}]);