(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[74],{1007:function(e,t,n){"use strict";var a=n(5),c={selectLoading:Object(a.a)([function(e){return e.zap.destroy}],(function(e){return Boolean(e.loading)}))};t.a=c},1522:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(42),r=n(40),i=n(4),s=n(248),o=n(5),d=function(e){return e.zap.view},l=Object(o.a)([d],(function(e){return e.record})),j={selectLoading:Object(o.a)([d],(function(e){return Boolean(e.loading)})),selectRecord:l,selectRaw:d},u=n(0),b=n(766),p=n(880),m=n(1497),O=n(11),f=function(e){var t=e.record;return e.loading||!t?Object(O.jsx)(b.a,{}):Object(O.jsxs)(p.a,{children:[Boolean(t.zapTitle)&&Object(O.jsx)(m.a.Item,Object(u.a)(Object(u.a)({},p.b),{},{label:Object(i.d)("entities.zap.fields.zapTitle"),children:t.zapTitle})),Boolean(t.zapDescr)&&Object(O.jsx)(m.a.Item,Object(u.a)(Object(u.a)({},p.b),{},{label:Object(i.d)("entities.zap.fields.zapDescr"),children:t.zapDescr}))]})},x=n(942),h=n(1548),g=n(737),v=n(211),z=n(1250),T=n(104),w=n(141),C=n(952),y=n(171),L=n(1007),I=n(750),P=function(e){var t=Object(c.d)(),n=Object(r.h)(),a=Object(c.e)(w.a.selectPermissionToRead),s=Object(c.e)(C.a.selectPermissionToEdit),o=Object(c.e)(C.a.selectPermissionToDestroy),d=Object(c.e)(L.a.selectLoading),l=n.params.id;return Object(O.jsxs)(I.a,{children:[s&&Object(O.jsx)(T.a,{to:"/zap/".concat(l,"/edit"),children:Object(O.jsx)(v.a,{type:"primary",icon:Object(O.jsx)(x.a,{}),children:Object(i.d)("common.edit")})}),o&&Object(O.jsx)(z.a,{title:Object(i.d)("common.areYouSure"),onConfirm:function(){t(y.a.doDestroy(l))},okText:Object(i.d)("common.yes"),cancelText:Object(i.d)("common.no"),children:Object(O.jsx)(v.a,{type:"primary",icon:Object(O.jsx)(h.a,{}),disabled:d,children:Object(i.d)("common.destroy")})}),a&&Object(O.jsx)(T.a,{to:"/audit-logs?entityId=".concat(encodeURIComponent(l)),children:Object(O.jsx)(v.a,{icon:Object(O.jsx)(g.a,{}),children:Object(i.d)("auditLog.menu")})})]})},R=n(744),D=n(746),B=n(745);t.default=function(e){var t=Object(c.d)(),n=Object(r.h)(),o=Object(c.e)(j.selectLoading),d=Object(c.e)(j.selectRecord);return Object(a.useEffect)((function(){t(s.a.doFind(n.params.id))}),[]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(D.a,{items:[[Object(i.d)("dashboard.menu"),"/"],[Object(i.d)("entities.zap.menu"),"/zap"],[Object(i.d)("entities.zap.view.title")]]}),Object(O.jsxs)(R.a,{children:[Object(O.jsx)(B.a,{children:Object(i.d)("entities.zap.view.title")}),Object(O.jsx)(P,{match:n}),Object(O.jsx)(f,{loading:o,record:d})]})]})}},744:function(e,t,n){"use strict";var a,c=n(184),r=n(185).a.div(a||(a=Object(c.a)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"])));t.a=r},745:function(e,t,n){"use strict";var a,c=n(184),r=n(185).a.h1(a||(a=Object(c.a)(["\n  margin-bottom: 36px;\n"])));t.a=r},746:function(e,t,n){"use strict";var a=n(891),c=(n(1),n(104)),r=n(11);t.a=function(e){var t=function(e){return e.length>1};return Object(r.jsx)(a.a,{children:e.items.map((function(e){return Object(r.jsx)(a.a.Item,{children:t(e)?Object(r.jsx)(c.a,{to:e[1],children:e[0]}):e[0]},e[0])}))})}},750:function(e,t,n){"use strict";var a,c=n(184),r=n(185).a.div(a||(a=Object(c.a)(["\n  margin-bottom: 16px;\n\n  .ant-btn {\n    margin-right: 8px;\n    margin-bottom: 8px;\n  }\n"])));t.a=r},766:function(e,t,n){"use strict";var a=n(807),c=(n(1),n(11));t.a=function(e){return Object(c.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:Object(c.jsx)(a.a,{})})}},880:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var a,c=n(184),r=n(185).a.div(a||(a=Object(c.a)(["\n  padding: 24px;\n  padding-top: 0;\n  padding-bottom: 0;\n\n  .ant-form-item-label {\n    white-space: normal;\n  }\n\n  .ant-row {\n    margin-bottom: 8px;\n  }\n"]))),i={labelCol:{md:{span:6},lg:{span:4}},wrapperCol:{md:{span:18},lg:{span:12}}};t.a=r},942:function(e,t,n){"use strict";var a=n(0),c=n(1),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"},i=n(36),s=function(e,t){return c.createElement(i.a,Object(a.a)(Object(a.a)({},e),{},{ref:t,icon:r}))};s.displayName="EditOutlined";t.a=c.forwardRef(s)},952:function(e,t,n){"use strict";var a=n(5),c=n(43),r=n(76),i=n(187),s=Object(a.a)([c.a.selectCurrentTenant,c.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.zapRead)})),o=Object(a.a)([c.a.selectCurrentTenant,c.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.zapEdit)})),d=Object(a.a)([c.a.selectCurrentTenant,c.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.zapCreate)})),l=Object(a.a)([c.a.selectCurrentTenant,c.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.zapImport)})),j={selectPermissionToRead:s,selectPermissionToEdit:o,selectPermissionToCreate:d,selectPermissionToDestroy:Object(a.a)([c.a.selectCurrentTenant,c.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.zapDestroy)})),selectPermissionToImport:l};t.a=j}}]);