(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4873],{54224:function(e,n,t){"use strict";t.d(n,{z:function(){return O}});var r=t(59499),i=t(50029),a=t(16835),o=t(64687),c=t.n(o),s=t(256),u=t(7221),d=t(42283),l=t(79665),m=t(97202),p=t(65375),x=t(71247),f=t(83528),y=t(30590),v=t(46482),g=t(72936),j=t(26380),b=t(27940),h=t(74231),Z=(0,h.Ry)().shape({name:(0,h.Z_)().required(),status:(0,h.Z_)().oneOf(["active","inactive"]).required(),complianceCategorySelected:(0,h.Ry)().required(),url:(0,h.Z_)().url()}),_=function(e){var n=e.form,t=e.id,r=e.user;return(n.categoryId=n.complianceCategorySelected.value,delete n.complianceCategorySelected,t)?{id:t,changes:n}:(n.adminId=r.accountId,{objects:[n]})},C=t(85893);function w(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}function $(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?w(Object(t),!0).forEach(function(n){(0,r.Z)(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):w(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}var O=function(e){var n,t=e.defaultValues,r=e.onSuccess,o=(0,g.x)().user,h=(0,d.cI)({defaultValues:t,resolver:(0,l.S)(Z)}),w=h.control,O=h.errors,A=h.handleSubmit,k=h.register,E=(0,s.D)(u.gO,{onCompleted:function(e){var n=e.insert_Compliance.returning[0].id;r&&r(n)}}),S=(0,a.Z)(E,1)[0],I=(0,s.D)(u.Vd,{onCompleted:function(e){var n=e.update_Compliance_by_pk.id;r&&r(n)}}),P=(0,a.Z)(I,1)[0],N=(n=(0,i.Z)(c().mark(function e(n){var r;return c().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=_({form:n,id:t.id,user:o}),!t.id){e.next=6;break}return e.next=4,P({variables:r});case 4:e.next=8;break;case 6:return e.next=8,S({variables:r});case 8:case"end":return e.stop()}},e)})),function(e){return n.apply(this,arguments)}),q={control:w,errors:O,register:k};return(0,C.jsxs)(m.Z,{id:"offCanvasForm",handleSubmit:A(N),children:[(0,C.jsx)(p.Z,{label:"Name",children:(0,C.jsx)(x.Z,$($({},q),{},{name:"name"}))}),(0,C.jsx)(b.l,$($({},q),{},{label:"Category",name:"complianceCategorySelected",type:"complianceCategory"})),(0,C.jsx)(p.Z,{label:"Description",children:(0,C.jsx)(f.Z,$($({},q),{},{name:"description",rows:2}))}),(0,C.jsx)(p.Z,{label:"Governing Body",children:(0,C.jsx)(x.Z,$($({},q),{},{name:"governingBody"}))}),(0,C.jsx)(p.Z,{label:"Registration number example",children:(0,C.jsx)(x.Z,$($({},q),{},{name:"regNumExample"}))}),(0,C.jsx)(p.Z,{label:"URL",children:(0,C.jsx)(x.Z,$($({},q),{},{name:"url"}))}),(0,C.jsx)(y.Z,$($({},q),{},{data:[{id:"hasInsuranceAmount",label:"Has Insurance Amount Attached"}],name:"hasInsuranceAmount"})),(0,C.jsx)(y.Z,$($({},q),{},{data:[{id:"expectCertificate",label:"Expect Certificate"}],name:"expectCertificate"})),(0,C.jsx)(p.Z,{label:"Status",children:(0,C.jsx)(v.Z,$($({},q),{},{name:"status",options:j.bg}))})]})}},7221:function(e,n,t){"use strict";t.d(n,{$i:function(){return u},G1:function(){return d},Vd:function(){return m},gO:function(){return l}});var r,i,a,o,c=t(71383),s=t(22841),u=(0,s.Ps)(r||(r=(0,c.Z)(["\n  query GetCompliace($id: Int!) {\n    compliance: Compliance_by_pk(id: $id) {\n      id\n      name\n      url\n      regNumExample\n      status\n      type\n      governingBody\n      hasInsuranceAmount\n      description\n      createdAt\n      media: Media {\n        id\n        medium: Medium {\n          id\n          category\n          filename\n          meta\n          type\n        }\n      }\n      Compliance_Entities {\n        Location {\n          id\n          name\n          status\n        }\n        Account {\n          id\n          name\n          type\n        }\n      }\n    }\n  }\n"]))),d=(0,s.Ps)(i||(i=(0,c.Z)(['\n  query GetCompliances(\n    $limit: Int\n    $offset: Int\n    $q: String\n    $orderBy: Compliance_order_by!\n    $status: String\n    $type: String\n  ) {\n    compliance: Compliance(\n      limit: $limit\n      offset: $offset\n      where: { name: { _ilike: $q }, status: { _eq: $status }, type: { _eq: $type } }\n      order_by: [$orderBy]\n    ) {\n      id\n      name\n      description\n      status\n      regNumExample\n      hasInsuranceAmount\n      expectCertificate\n      url\n      governingBody\n      createdAt\n      category: Category {\n        id\n        name\n      }\n      questions: Taxonomies {\n        id\n      }\n      media: Media(where: { entity: { _eq: "Compliance" } }) {\n        mediaId\n      }\n    }\n    meta: Compliance_aggregate(\n      where: { name: { _ilike: $q }, status: { _eq: $status }, type: { _eq: $type } }\n    ) {\n      aggregate {\n        totalCount: count\n      }\n    }\n  }\n']))),l=(0,s.Ps)(a||(a=(0,c.Z)(["\n  mutation AddCompliance($objects: [Compliance_insert_input!]!) {\n    insert_Compliance(objects: $objects) {\n      returning {\n        id\n      }\n    }\n  }\n"]))),m=(0,s.Ps)(o||(o=(0,c.Z)(["\n  mutation UpdateCompliance($id: Int!, $changes: Compliance_set_input) {\n    update_Compliance_by_pk(pk_columns: { id: $id }, _set: $changes) {\n      id\n    }\n  }\n"])))},26380:function(e,n,t){"use strict";t.d(n,{WG:function(){return i},bg:function(){return r}});var r=[{text:"Status",value:""},{text:"Active",value:"active"},{text:"Inactive",value:"inactive"}],i=[{text:"Status",value:""},{text:"To do",value:"toDo"},{text:"In progress",value:"inProgress"},{text:"Done",value:"done"},{text:"Blocked",value:"blocked"}]},62335:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return w}});var r=t(66918),i=t(11163),a=t(93633),o=t(7221),c=t(29444),s=t(78215),u=t(2356),d=t(78171),l=t(74425),m=t(85893),p=function(e){var n=e.summary,t=e.columns,r=e.rows;return(0,m.jsx)(d.Z,{open:!0,title:n,children:(0,m.jsx)(l.Z,{columns:t,rows:r})})},x=t(67294),f=t(80880),y=t(58448),v=t(56990),g=t(93443),j=t(18862),b=t(54224),h=function(e){var n=e.refetch,t=e.compliance,r=(0,x.useContext)(f.Z),i=function(){n(),r.close()},a=function(e){r.show({content:(0,m.jsx)(b.z,{defaultValues:t,onSuccess:i}),title:t.id?"Edit":"Add Compliance"}),e.stopPropagation()},o=function(){return(0,m.jsx)(y.Z,{children:(0,m.jsx)(v.Z,{context:"secondary",content:"Edit",onClick:a,size:"sm"})})};return(0,m.jsxs)(d.Z,{toolbar:(0,m.jsx)(o,{}),open:!0,title:"Details",children:[(0,m.jsx)(g.Z,{content:"Name",text:t.name}),(0,m.jsx)(g.Z,{content:"Example Reg Number",text:t.regNumExample?t.regNumExample:"-"}),(0,m.jsx)(g.Z,{content:"Governing Body",text:t.governingBody?t.governingBody:"-"}),(0,m.jsx)(g.Z,{content:"Expect Certificate",text:t.expectCertificate?"Yes":"No"}),(0,m.jsx)(g.Z,{content:"Has Insurance Amount",text:t.hasInsuranceAmount?"Yes":"No"}),(0,m.jsx)(g.Z,{content:"Status",text:t.status?t.status:"-"}),(0,m.jsx)(g.Z,{content:"Type",text:t.type?t.type:"-"}),(0,m.jsx)(g.Z,{content:"Date Added",text:(0,j.Z)(t.createdAt)?(0,j.Z)(t.createdAt):"-"})]})},Z=t(53344),_=t(46165),C=function(){var e,n,t=(0,i.useRouter)().query,r=(0,a.a)(o.$i,{variables:{id:t.id}}),d=r.loading,l=r.data,x=(l=void 0===l?{compliance:[]}:l).compliance,f=r.refetch,y=x.Compliance_Entities,v=x.id,g=x.name,j=x.url,b=[{hidden:!0},{formatter:(0,c.Z)("/dashboard","id","name",!0),text:"Account"},{text:"Type"}],C=[{hidden:!0},{formatter:(0,c.Z)("/dashboard","id","name",!0),text:"Account"},{text:"Status"}];return d?null:(0,m.jsxs)(s.Z,{children:[(0,m.jsxs)(u.Z,{md:3,children:[(0,m.jsx)(_.g,{avatar:(0,Z.Q)(x.media),entity:{id:v,name:g,website:j},entityName:"Compliance",prefix:"/dashboard/compliance/"}),(0,m.jsx)(h,{refetch:f,compliance:x})]}),(0,m.jsx)(u.Z,{md:3,children:(0,m.jsx)(p,{summary:"Accounts",columns:b,rows:(e=[],Object.keys(y).map(function(n,t){var r,i,a;return e.push({id:null===(r=y[n].Account)||void 0===r?void 0:r.id,name:null===(i=y[n].Account)||void 0===i?void 0:i.name,type:null===(a=y[n].Account)||void 0===a?void 0:a.type})}),e)})}),(0,m.jsx)(u.Z,{md:3,children:(0,m.jsx)(p,{summary:"Properties",columns:C,rows:(n=[],Object.keys(y).map(function(e,t){var r,i,a;return n.push({id:null===(r=y[e].Location)||void 0===r?void 0:r.id,name:null===(i=y[e].Location)||void 0===i?void 0:i.name,status:null===(a=y[e].Location)||void 0===a?void 0:a.status})}),n)})})]})},w=function(){return(0,m.jsx)(r.Z,{View:(0,m.jsx)(C,{})})}},78216:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/compliance/view",function(){return t(62335)}])}},function(e){e.O(0,[3662,367,2283,5391,5312,4425,1410,212,9947,93,4952,465,1261,4070,9229,1772,825,9774,2888,179],function(){return e(e.s=78216)}),_N_E=e.O()}]);