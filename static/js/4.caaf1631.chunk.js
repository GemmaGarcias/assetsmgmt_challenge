(this.webpackJsonpassetsmgmt_challenge=this.webpackJsonpassetsmgmt_challenge||[]).push([[4],{36:function(e,t,n){"use strict";function a(e){return Object.keys(e)}function r(e){return e.substring(e.lastIndexOf("/")+1)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},37:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){var t=e.text;return r.a.createElement("p",null,t)}},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){"use strict";var a=n(16),r=n(15),c=n(0),u=n.n(c),s=n(8),o=n(38),i=n(49);var l=function(e){var t=e.headers,n=(e.data,e.onSubmit),a=Object(c.useState)({}),s=Object(r.a)(a,2),l=s[0],m=s[1];function b(e){e.persist(),m((function(t){return Object(i.a)(Object(i.a)({},t),{},Object(o.a)({},e.target.name,e.target.value))}))}return u.a.createElement("tr",null,t.map((function(e,t){return u.a.createElement("td",{key:t,className:"td-padding"},u.a.createElement("input",{name:e,onChange:b,value:l[e]||""}))})),u.a.createElement("td",null,u.a.createElement("button",{className:"table-button button-hover",onClick:function(){n(l),m({})}},"Submit")))},m=(n(39),n(40),n(50));var b=function(e){var t=e.row,n=e.property,a=e.disable;return u.a.createElement(u.a.Fragment,null,u.a.createElement(m.b,{id:"context-menu-table",collect:function(e){return e},rowId:t.id,disable:a},u.a.createElement("div",{className:"td-padding"},t[n])),u.a.createElement(m.a,{id:"context-menu-table"},u.a.createElement(m.c,{onClick:function(e,t){return console.log(t.rowId)}},"Test")))};t.a=function(e){var t=e.headers,n=e.data,o=e.addColumn,i=e.disableContextMenu,m=Object(c.useState)(Object(a.a)(n)),f=Object(r.a)(m,2),d=f[0],h=f[1];return u.a.createElement("div",{className:"parentTable"},u.a.createElement("table",{id:"customTable"},u.a.createElement("thead",null,u.a.createElement("tr",null,u.a.createElement(u.a.Fragment,null,t.map((function(e,t){return u.a.createElement("th",{key:t,className:"td-padding"},e)})),o&&u.a.createElement("th",null,o.header)))),u.a.createElement("tbody",null,u.a.createElement(u.a.Fragment,null,u.a.createElement(l,{headers:t,data:d,onSubmit:function(e){h([e].concat(Object(a.a)(d)))}}),d.map((function(e){return u.a.createElement("tr",{key:e.id},u.a.createElement(u.a.Fragment,null,t.map((function(t,n){return u.a.createElement("td",{key:n},u.a.createElement(b,{row:e,property:t,disable:i}))})),o&&u.a.createElement("td",null,u.a.createElement("button",{className:"table-button td-padding"},u.a.createElement(s.b,{to:"".concat("/assetsmgmt_challenge","/entities/").concat(e.id)},"Related entities")))))}))))))}},42:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return p}));var a=n(43),r=n.n(a),c=n(44),u=n(45),s=n(46),o=n(51),i=n(52),l=function(e){Object(s.a)(n,e);var t=Object(o.a)(n);function n(){return Object(u.a)(this,n),t.call(this,"There was a network error. Please try again in a few seconds.")}return n}(Object(i.a)(Error)),m=function(e){Object(s.a)(n,e);var t=Object(o.a)(n);function n(){return Object(u.a)(this,n),t.call(this,"There was a server error.")}return n}(Object(i.a)(Error)),b=function(e){Object(s.a)(n,e);var t=Object(o.a)(n);function n(){return Object(u.a)(this,n),t.call(this,"The requested resource was a not found.")}return n}(Object(i.a)(Error)),f="https://cors-anywhere.herokuapp.com/https://6y458uslg3.execute-api.eu-west-3.amazonaws.com/elixos";function d(){return h.apply(this,arguments)}function h(){return(h=Object(c.a)(r.a.mark((function e(){var t,n,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(f,"/assets"));case 3:if((t=e.sent).ok){e.next=6;break}return e.abrupt("return",j(t.status));case 6:return e.next=8,t.json();case 8:return n=e.sent,a=n.assets,e.abrupt("return",a);case 13:if(e.prev=13,e.t0=e.catch(0),!(e.t0 instanceof m||e.t0 instanceof b)){e.next=17;break}throw e.t0;case 17:throw new l;case 18:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}function p(e){return E.apply(this,arguments)}function E(){return(E=Object(c.a)(r.a.mark((function e(t){var n,a,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(f,"/entities"));case 3:if((n=e.sent).ok){e.next=6;break}return e.abrupt("return",j(n.status));case 6:return e.next=8,n.json();case 8:if(a=e.sent,c=a.entities,"entities"!==t){e.next=14;break}return e.abrupt("return",c);case 14:return e.abrupt("return",c.filter((function(e){return e.id_asset===parseInt(t)})));case 15:e.next=22;break;case 17:if(e.prev=17,e.t0=e.catch(0),!(e.t0 instanceof m||e.t0 instanceof b)){e.next=21;break}throw e.t0;case 21:throw new l;case 22:case"end":return e.stop()}}),e,null,[[0,17]])})))).apply(this,arguments)}function j(e){if(500===e)throw new m;if(404===e)throw new b}},54:function(e,t,n){"use strict";n.r(t);var a=n(15),r=n(0),c=n.n(r),u=n(42),s=n(36),o=n(37),i=n(41);t.default=function(){var e=Object(r.useState)(),t=Object(a.a)(e,2),n=t[0],l=t[1],m=Object(r.useState)({hasErrors:!1}),b=Object(a.a)(m,2),f=b[0],d=b[1];function h(e){d({hasErrors:!0,message:e.message})}return Object(r.useEffect)((function(){Object(u.a)().then(l).catch(h)}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",null,"Assets"),f.hasErrors?c.a.createElement("div",null,f.message):n?c.a.createElement(i.a,{headers:Object(s.b)(n.length&&n[0]),data:n,addColumn:!0,disableContextMenu:!0}):c.a.createElement(o.a,{text:"Wait I'm loading assets for you"}))}}}]);
//# sourceMappingURL=4.caaf1631.chunk.js.map