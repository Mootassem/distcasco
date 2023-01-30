(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[71],{1003:function(e,t,n){"use strict";var r=n(5),c={selectLoading:Object(r.a)([function(e){return e.produr.destroy}],(function(e){return Boolean(e.loading)}))};t.a=c},1516:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(42),a=n(40),o=n(4),i=n(244),s=n(5),d=function(e){return e.produr.view},u=Object(s.a)([d],(function(e){return e.record})),l={selectLoading:Object(s.a)([d],(function(e){return Boolean(e.loading)})),selectRecord:u,selectRaw:d},j=n(0),b=n(766),m=n(880),p=n(1497),O=n(11),f=function(e){var t=e.record;return e.loading||!t?Object(O.jsx)(b.a,{}):Object(O.jsx)(m.a,{children:Boolean(t.produrTitle)&&Object(O.jsx)(p.a.Item,Object(j.a)(Object(j.a)({},m.b),{},{label:Object(o.d)("entities.produr.fields.produrTitle"),children:t.produrTitle}))})},x=n(942),h=n(1548),g=n(737),v=n(211),T=n(1250),w=n(104),C=n(141),y=n(947),L=n(167),P=n(1003),R=n(750),I=function(e){var t=Object(c.d)(),n=Object(a.h)(),r=Object(c.e)(C.a.selectPermissionToRead),i=Object(c.e)(y.a.selectPermissionToEdit),s=Object(c.e)(y.a.selectPermissionToDestroy),d=Object(c.e)(P.a.selectLoading),u=n.params.id;return Object(O.jsxs)(R.a,{children:[i&&Object(O.jsx)(w.a,{to:"/produr/".concat(u,"/edit"),children:Object(O.jsx)(v.a,{type:"primary",icon:Object(O.jsx)(x.a,{}),children:Object(o.d)("common.edit")})}),s&&Object(O.jsx)(T.a,{title:Object(o.d)("common.areYouSure"),onConfirm:function(){t(L.a.doDestroy(u))},okText:Object(o.d)("common.yes"),cancelText:Object(o.d)("common.no"),children:Object(O.jsx)(v.a,{type:"primary",icon:Object(O.jsx)(h.a,{}),disabled:d,children:Object(o.d)("common.destroy")})}),r&&Object(O.jsx)(w.a,{to:"/audit-logs?entityId=".concat(encodeURIComponent(u)),children:Object(O.jsx)(v.a,{icon:Object(O.jsx)(g.a,{}),children:Object(o.d)("auditLog.menu")})})]})},E=n(744),U=n(746),B=n(745);t.default=function(e){var t=Object(c.d)(),n=Object(a.h)(),s=Object(c.e)(l.selectLoading),d=Object(c.e)(l.selectRecord);return Object(r.useEffect)((function(){t(i.a.doFind(n.params.id))}),[]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(U.a,{items:[[Object(o.d)("dashboard.menu"),"/"],[Object(o.d)("entities.produr.menu"),"/produr"],[Object(o.d)("entities.produr.view.title")]]}),Object(O.jsxs)(E.a,{children:[Object(O.jsx)(B.a,{children:Object(o.d)("entities.produr.view.title")}),Object(O.jsx)(I,{match:n}),Object(O.jsx)(f,{loading:s,record:d})]})]})}},744:function(e,t,n){"use strict";var r,c=n(184),a=n(185).a.div(r||(r=Object(c.a)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"])));t.a=a},745:function(e,t,n){"use strict";var r,c=n(184),a=n(185).a.h1(r||(r=Object(c.a)(["\n  margin-bottom: 36px;\n"])));t.a=a},746:function(e,t,n){"use strict";var r=n(891),c=(n(1),n(104)),a=n(11);t.a=function(e){var t=function(e){return e.length>1};return Object(a.jsx)(r.a,{children:e.items.map((function(e){return Object(a.jsx)(r.a.Item,{children:t(e)?Object(a.jsx)(c.a,{to:e[1],children:e[0]}):e[0]},e[0])}))})}},750:function(e,t,n){"use strict";var r,c=n(184),a=n(185).a.div(r||(r=Object(c.a)(["\n  margin-bottom: 16px;\n\n  .ant-btn {\n    margin-right: 8px;\n    margin-bottom: 8px;\n  }\n"])));t.a=a},766:function(e,t,n){"use strict";var r=n(807),c=(n(1),n(11));t.a=function(e){return Object(c.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:Object(c.jsx)(r.a,{})})}},880:function(e,t,n){"use strict";n.d(t,"b",(function(){return o}));var r,c=n(184),a=n(185).a.div(r||(r=Object(c.a)(["\n  padding: 24px;\n  padding-top: 0;\n  padding-bottom: 0;\n\n  .ant-form-item-label {\n    white-space: normal;\n  }\n\n  .ant-row {\n    margin-bottom: 8px;\n  }\n"]))),o={labelCol:{md:{span:6},lg:{span:4}},wrapperCol:{md:{span:18},lg:{span:12}}};t.a=a},942:function(e,t,n){"use strict";var r=n(0),c=n(1),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"},o=n(36),i=function(e,t){return c.createElement(o.a,Object(r.a)(Object(r.a)({},e),{},{ref:t,icon:a}))};i.displayName="EditOutlined";t.a=c.forwardRef(i)},947:function(e,t,n){"use strict";var r=n(5),c=n(43),a=n(76),o=n(187),i=Object(r.a)([c.a.selectCurrentTenant,c.a.selectCurrentUser],(function(e,t){return new a.a(e,t).match(o.a.values.produrRead)})),s=Object(r.a)([c.a.selectCurrentTenant,c.a.selectCurrentUser],(function(e,t){return new a.a(e,t).match(o.a.values.produrEdit)})),d=Object(r.a)([c.a.selectCurrentTenant,c.a.selectCurrentUser],(function(e,t){return new a.a(e,t).match(o.a.values.produrCreate)})),u=Object(r.a)([c.a.selectCurrentTenant,c.a.selectCurrentUser],(function(e,t){return new a.a(e,t).match(o.a.values.produrImport)})),l={selectPermissionToRead:i,selectPermissionToEdit:s,selectPermissionToCreate:d,selectPermissionToDestroy:Object(r.a)([c.a.selectCurrentTenant,c.a.selectCurrentUser],(function(e,t){return new a.a(e,t).match(o.a.values.produrDestroy)})),selectPermissionToImport:u};t.a=l}}]);