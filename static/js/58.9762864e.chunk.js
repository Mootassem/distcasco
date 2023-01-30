(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[58],{1250:function(e,n,t){"use strict";var a=t(14),i=t.n(a),r=t(41),c=t.n(r),o=t(1),l=t(16),s=t.n(l),u=t(298),d=t.n(u),p=t(33),f=t(215),m=t(211),b=t(303),v=t(212),j=t(195),O=t(140),g=t(284),x=t(50),y=void 0,h=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)n.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(t[a[i]]=e[a[i]])}return t},N=o.forwardRef((function(e,n){var t=o.useState(e.visible),a=c()(t,2),r=a[0],l=a[1];o.useEffect((function(){"visible"in e&&l(e.visible)}),[e.visible]),o.useEffect((function(){"defaultVisible"in e&&l(e.defaultVisible)}),[e.defaultVisible]);var u=function(n,t){"visible"in e||l(n),e.onVisibleChange&&e.onVisibleChange(n,t)},d=function(n){u(!1,n),e.onConfirm&&e.onConfirm.call(y,n)},N=function(n){u(!1,n),e.onCancel&&e.onCancel.call(y,n)},E=o.useContext(O.b).getPrefixCls,C=e.prefixCls,w=e.placement,k=e.children,S=e.overlayClassName,T=h(e,["prefixCls","placement","children","overlayClassName"]),P=E("popover",C),D=E("popconfirm",C),U=s()(D,S),I=o.createElement(v.a,{componentName:"Popconfirm",defaultLocale:j.a.Popconfirm},(function(n){return function(n,t){var a=e.okButtonProps,r=e.cancelButtonProps,c=e.title,l=e.cancelText,s=e.okText,u=e.okType,p=e.icon;return o.createElement("div",{className:"".concat(n,"-inner-content")},o.createElement("div",{className:"".concat(n,"-message")},p,o.createElement("div",{className:"".concat(n,"-message-title")},Object(g.a)(c))),o.createElement("div",{className:"".concat(n,"-buttons")},o.createElement(m.a,i()({onClick:N,size:"small"},r),l||t.cancelText),o.createElement(m.a,i()({onClick:d},Object(b.a)(u),{size:"small"},a),s||t.okText)))}(P,n)}));return o.createElement(f.a,i()({},T,{prefixCls:P,placement:w,onVisibleChange:function(n){e.disabled||u(n)},visible:r,overlay:I,overlayClassName:U,ref:n}),Object(x.a)(k,{onKeyDown:function(e){var n,t;o.isValidElement(k)&&(null===(t=null===k||void 0===k?void 0:(n=k.props).onKeyDown)||void 0===t||t.call(n,e)),function(e){e.keyCode===p.a.ESC&&r&&u(!1,e)}(e)}}))}));N.defaultProps={transitionName:"zoom-big",placement:"top",trigger:"click",okType:"primary",icon:o.createElement(d.a,null),disabled:!1},n.a=N},1503:function(e,n,t){"use strict";t.r(n);var a=t(1),i=t(4),r=t(744),c=t(745),o=t(42),l=t(114),s=function(){var e=Object(o.d)();return Object(a.useEffect)((function(){e(l.a.doFetch())}),[]),null},u=t(893),d=t(1250),p=t(211),f=t(934),m=t(104),b=t(29),v=t(242),j=t(5),O={selectLoading:Object(j.a)([function(e){return e.tenant.destroy}],(function(e){return Boolean(e.loading)}))},g=t(111),x=t(319),y=t(193),h=t(43),N=t(76),E=t(187),C={selectPermissionToEdit:Object(j.a)([h.a.selectCurrentUser],(function(e){return function(n){return new N.a(n,e).match(E.a.values.tenantEdit)}})),selectPermissionToDestroy:Object(j.a)([h.a.selectCurrentUser],(function(e){return function(n){return new N.a(n,e).match(E.a.values.tenantDestroy)}})),selectInvitationToken:Object(j.a)([h.a.selectCurrentUser],(function(e){return function(n){if(!e||!e.tenants)return!1;var t=e.tenants.find((function(e){return e.tenant.id===n.id&&"invited"===e.status}));return t?t.invitationToken:null}}))},w=t(806),k=t(770),S=t(221),T=t(44),P=t(39),D=t(11),U=function(e){var n=Object(o.d)(),t=Object(o.e)(y.a.selectLoading),a=Object(o.e)(O.selectLoading),r=Object(o.e)(x.a.selectLoading),c=t||a||r,s=Object(o.e)(y.a.selectRows),j=Object(o.e)(y.a.selectPagination),N=Object(o.e)(C.selectInvitationToken),E=Object(o.e)(C.selectPermissionToEdit),U=Object(o.e)(C.selectPermissionToDestroy),I=Object(o.e)(h.a.selectCurrentTenant),q=[{title:Object(i.d)("tenant.fields.name"),sorter:!0,dataIndex:"name",render:function(e,n){return Object(D.jsxs)(D.Fragment,{children:[n.name,Boolean(N(n))&&Object(D.jsx)(u.a,{color:"gold",style:{marginLeft:"8px"},children:Object(i.d)("tenant.invitation.invited")})]})}},P.a.isEnabled&&{title:Object(i.d)("tenant.fields.url"),sorter:!0,dataIndex:"url",render:function(e,n){return"".concat(n.url,".").concat(T.a.frontendUrl.host)}},T.a.isPlanEnabled&&{title:Object(i.d)("tenant.fields.plan"),sorter:!0,dataIndex:"plan",render:function(e,n){return Object(D.jsx)(u.a,{color:e===S.a.values.free?void 0:"gold",children:Object(i.d)("plan.".concat(e,".label"))})}},{title:"",dataIndex:"",width:"160px",render:function(e,t){return N(t)?Object(D.jsxs)("div",{className:"table-actions",children:[Object(D.jsx)(d.a,{title:Object(i.d)("common.areYouSure"),onConfirm:function(){return e=N(t),void n(g.a.doAccept(e));var e},okText:Object(i.d)("common.yes"),cancelText:Object(i.d)("common.no"),children:Object(D.jsx)(p.a,{type:"primary",children:Object(i.d)("tenant.invitation.accept")})}),Object(D.jsx)(d.a,{title:Object(i.d)("common.areYouSure"),onConfirm:function(){return e=N(t),void n(g.a.doDecline(e));var e},okText:Object(i.d)("common.yes"),cancelText:Object(i.d)("common.no"),children:Object(D.jsx)(p.a,{type:"primary",danger:!0,children:Object(i.d)("tenant.invitation.decline")})})]}):Object(D.jsxs)("div",{className:"table-actions",children:[I.id!==t.id&&Object(D.jsx)(p.a,{type:"primary",onClick:function(){return e=t,void n(b.a.doSelectTenant(e));var e},children:Object(i.d)("tenant.select")}),E(t)&&Object(D.jsx)(m.a,{to:"/tenant/".concat(t.id,"/edit"),children:Object(i.d)("common.edit")}),U(t)&&Object(D.jsx)(d.a,{title:Object(i.d)("common.areYouSure"),onConfirm:function(){return e=t.id,void n(v.a.doDestroy(e));var e},okText:Object(i.d)("common.yes"),cancelText:Object(i.d)("common.no"),children:Object(D.jsx)(w.a,{children:Object(i.d)("common.destroy")})})]})}}].filter(Boolean);return Object(D.jsx)(k.a,{children:Object(D.jsx)(f.a,{rowKey:"id",loading:c,columns:q,dataSource:s,pagination:j,onChange:function(e,t,a){n(l.a.doChangePaginationAndSort(e,a))},scroll:{x:!0}})})},I=t(892),q=t(750),z=function(e){return Object(D.jsx)(q.a,{children:Object(D.jsx)(m.a,{to:"/tenant/new",children:Object(D.jsx)(p.a,{type:"primary",icon:Object(D.jsx)(I.a,{}),children:Object(i.d)("common.new")})})})};n.default=function(e){return Object(D.jsx)(D.Fragment,{children:Object(D.jsxs)(r.a,{style:{marginTop:0},children:[Object(D.jsx)(c.a,{children:Object(i.d)("tenant.list.title")}),Object(D.jsx)(z,{}),Object(D.jsx)(s,{}),Object(D.jsx)(U,{})]})})}},744:function(e,n,t){"use strict";var a,i=t(184),r=t(185).a.div(a||(a=Object(i.a)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"])));n.a=r},745:function(e,n,t){"use strict";var a,i=t(184),r=t(185).a.h1(a||(a=Object(i.a)(["\n  margin-bottom: 36px;\n"])));n.a=r},750:function(e,n,t){"use strict";var a,i=t(184),r=t(185).a.div(a||(a=Object(i.a)(["\n  margin-bottom: 16px;\n\n  .ant-btn {\n    margin-right: 8px;\n    margin-bottom: 8px;\n  }\n"])));n.a=r},770:function(e,n,t){"use strict";var a,i=t(184),r=t(185).a.div(a||(a=Object(i.a)(["\n  .ant-table th {\n    white-space: nowrap;\n  }\n\n  .ant-table td {\n    white-space: nowrap;\n  }\n\n  .ant-table .table-actions {\n    text-align: right;\n  }\n\n  .ant-table .table-actions a,\n  .ant-table .table-actions button {\n    margin-left: 8px;\n  }\n"])));n.a=r},796:function(e,n,t){var a=t(777),i=t(797),r=t(798),c=Math.max,o=Math.min;e.exports=function(e,n,t){var l,s,u,d,p,f,m=0,b=!1,v=!1,j=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function O(n){var t=l,a=s;return l=s=void 0,m=n,d=e.apply(a,t)}function g(e){return m=e,p=setTimeout(y,n),b?O(e):d}function x(e){var t=e-f;return void 0===f||t>=n||t<0||v&&e-m>=u}function y(){var e=i();if(x(e))return h(e);p=setTimeout(y,function(e){var t=n-(e-f);return v?o(t,u-(e-m)):t}(e))}function h(e){return p=void 0,j&&l?O(e):(l=s=void 0,d)}function N(){var e=i(),t=x(e);if(l=arguments,s=this,f=e,t){if(void 0===p)return g(f);if(v)return clearTimeout(p),p=setTimeout(y,n),O(f)}return void 0===p&&(p=setTimeout(y,n)),d}return n=r(n)||0,a(t)&&(b=!!t.leading,u=(v="maxWait"in t)?c(r(t.maxWait)||0,n):u,j="trailing"in t?!!t.trailing:j),N.cancel=function(){void 0!==p&&clearTimeout(p),m=0,l=f=s=p=void 0},N.flush=function(){return void 0===p?d:h(i())},N}},797:function(e,n,t){var a=t(810);e.exports=function(){return a.Date.now()}},798:function(e,n,t){var a=t(799),i=t(777),r=t(801),c=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,l=/^0o[0-7]+$/i,s=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(r(e))return NaN;if(i(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=i(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=a(e);var t=o.test(e);return t||l.test(e)?s(e.slice(2),t?2:8):c.test(e)?NaN:+e}},799:function(e,n,t){var a=t(800),i=/^\s+/;e.exports=function(e){return e?e.slice(0,a(e)+1).replace(i,""):e}},800:function(e,n){var t=/\s/;e.exports=function(e){for(var n=e.length;n--&&t.test(e.charAt(n)););return n}},801:function(e,n,t){var a=t(857),i=t(858);e.exports=function(e){return"symbol"==typeof e||i(e)&&"[object Symbol]"==a(e)}},806:function(e,n,t){"use strict";var a,i=t(184),r=t(185).a.button(a||(a=Object(i.a)(["\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  color: var(--link-color);\n  text-decoration: none;\n  display: inline;\n  margin: 0;\n  padding: 0;\n\n  &:hover {\n    text-decoration: none;\n  }\n  &:focus {\n    text-decoration: none;\n  }\n"])));n.a=r},807:function(e,n,t){"use strict";var a=t(14),i=t.n(a),r=t(21),c=t.n(r),o=t(72),l=t.n(o),s=t(93),u=t.n(s),d=t(94),p=t.n(d),f=t(95),m=t.n(f),b=t(1),v=t(16),j=t.n(v),O=t(138),g=t(796),x=t.n(g),y=t(140),h=t(130),N=t(50),E=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)n.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(t[a[i]]=e[a[i]])}return t},C=(Object(h.a)("small","default","large"),null);var w=function(e){p()(t,e);var n=m()(t);function t(e){var a;l()(this,t),(a=n.call(this,e)).debouncifyUpdateSpinning=function(e){var n=(e||a.props).delay;n&&(a.cancelExistingSpin(),a.updateSpinning=x()(a.originalUpdateSpinning,n))},a.updateSpinning=function(){var e=a.props.spinning;a.state.spinning!==e&&a.setState({spinning:e})},a.renderSpin=function(e){var n,t=e.getPrefixCls,r=e.direction,o=a.props,l=o.prefixCls,s=o.className,u=o.size,d=o.tip,p=o.wrapperClassName,f=o.style,m=E(o,["prefixCls","className","size","tip","wrapperClassName","style"]),v=a.state.spinning,g=t("spin",l),x=j()(g,(n={},c()(n,"".concat(g,"-sm"),"small"===u),c()(n,"".concat(g,"-lg"),"large"===u),c()(n,"".concat(g,"-spinning"),v),c()(n,"".concat(g,"-show-text"),!!d),c()(n,"".concat(g,"-rtl"),"rtl"===r),n),s),y=Object(O.default)(m,["spinning","delay","indicator"]),h=b.createElement("div",i()({},y,{style:f,className:x}),function(e,n){var t=n.indicator,a="".concat(e,"-dot");return null===t?null:Object(N.b)(t)?Object(N.a)(t,{className:j()(t.props.className,a)}):Object(N.b)(C)?Object(N.a)(C,{className:j()(C.props.className,a)}):b.createElement("span",{className:j()(a,"".concat(e,"-dot-spin"))},b.createElement("i",{className:"".concat(e,"-dot-item")}),b.createElement("i",{className:"".concat(e,"-dot-item")}),b.createElement("i",{className:"".concat(e,"-dot-item")}),b.createElement("i",{className:"".concat(e,"-dot-item")}))}(g,a.props),d?b.createElement("div",{className:"".concat(g,"-text")},d):null);if(a.isNestedPattern()){var w=j()("".concat(g,"-container"),c()({},"".concat(g,"-blur"),v));return b.createElement("div",i()({},y,{className:j()("".concat(g,"-nested-loading"),p)}),v&&b.createElement("div",{key:"loading"},h),b.createElement("div",{className:w,key:"container"},a.props.children))}return h};var r=e.spinning,o=function(e,n){return!!e&&!!n&&!isNaN(Number(n))}(r,e.delay);return a.state={spinning:r&&!o},a.originalUpdateSpinning=a.updateSpinning,a.debouncifyUpdateSpinning(e),a}return u()(t,[{key:"componentDidMount",value:function(){this.updateSpinning()}},{key:"componentDidUpdate",value:function(){this.debouncifyUpdateSpinning(),this.updateSpinning()}},{key:"componentWillUnmount",value:function(){this.cancelExistingSpin()}},{key:"cancelExistingSpin",value:function(){var e=this.updateSpinning;e&&e.cancel&&e.cancel()}},{key:"isNestedPattern",value:function(){return!(!this.props||"undefined"===typeof this.props.children)}},{key:"render",value:function(){return b.createElement(y.a,null,this.renderSpin)}}],[{key:"setDefaultIndicator",value:function(e){C=e}}]),t}(b.Component);w.defaultProps={spinning:!0,size:"default",wrapperClassName:""},n.a=w},892:function(e,n,t){"use strict";var a=t(0),i=t(1),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},c=t(36),o=function(e,n){return i.createElement(c.a,Object(a.a)(Object(a.a)({},e),{},{ref:n,icon:r}))};o.displayName="PlusOutlined";n.a=i.forwardRef(o)}}]);