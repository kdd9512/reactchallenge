(this.webpackJsonpreactchallenge=this.webpackJsonpreactchallenge||[]).push([[0],{65:function(e,t,n){"use strict";n.r(t);n(0);var o,r,c=n(20),a=n.n(c),l=n(32),i=n(42),s=n(28),b=n(6),u=n(10),d=n(8),O=n(3),j=n(43);!function(e){e.TO_DO="TO_DO",e.DOING="DOING",e.DONE="DONE"}(o||(o={})),function(e){e.localToDos="localToDos"}(r||(r={}));var f=Object(u.b)({key:"category",default:o.TO_DO}),g=Object(u.b)({key:"toDo",default:[]}),h=Object(u.c)({key:"toDoSelector",get:function(e){var t=e.get,n=t(g),o=t(f);return n.filter((function(e){return e.category===o}))}}),m=n(4);var p=function(){var e=Object(u.e)(f),t=Object(u.d)(g),n=Object(O.a)(t,2),o=(n[0],n[1]),c=Object(j.a)(),a=c.register,l=c.handleSubmit,i=c.setValue;return Object(m.jsxs)("form",{onSubmit:l((function(t){var n=t.toDo;o((function(t){return[{text:n,id:Date.now(),category:e}].concat(Object(d.a)(t))})),i("toDo","");var c=localStorage.getItem(r.localToDos);if(null!=c)return JSON.parse(c);localStorage.setItem(r.localToDos,JSON.stringify(c))})),children:[Object(m.jsx)("input",Object(b.a)(Object(b.a)({},a("toDo")),{},{type:"text",placeholder:"Write To Do"})),Object(m.jsx)("button",{type:"submit",children:"Add"})]})};var D=function(e){var t=e.text,n=e.category,c=e.id,a=Object(u.d)(g),l=Object(O.a)(a,2),i=l[0],s=l[1];Object(u.e)(h),localStorage.setItem(r.localToDos,JSON.stringify(i));var b=function(e){var n=e.currentTarget.name;s((function(e){var o=e.findIndex((function(e){return e.id===c})),r={text:t,id:c,category:n};return[].concat(Object(d.a)(e.slice(0,o)),[r],Object(d.a)(e.slice(o+1)))})),localStorage.setItem(r.localToDos,JSON.stringify(i))},j=localStorage.getItem(r.localToDos);return null!==j&&JSON.parse(j),localStorage.setItem(r.localToDos,JSON.stringify(i)),Object(m.jsxs)("li",{id:c.toString(),children:[Object(m.jsx)("span",{children:t}),n!==o.DOING&&Object(m.jsx)("button",{name:o.DOING,onClick:b,children:"Doing"}),n!==o.TO_DO&&Object(m.jsx)("button",{name:o.TO_DO,onClick:b,children:"To Do"}),n!==o.DONE&&Object(m.jsx)("button",{name:o.DONE,onClick:b,children:"Done"}),Object(m.jsx)("button",{onClick:function(e){var t,n=null===(t=e.currentTarget.parentElement)||void 0===t?void 0:t.id,o=i.filter((function(e){return e.id.toString()!==n}));s(o),localStorage.setItem(r.localToDos,JSON.stringify(i)),1===i.length&&localStorage.clear()},children:"Delete"})]})};var x=function(){var e=Object(u.d)(f),t=Object(O.a)(e,2),n=t[0],r=t[1];return Object(m.jsxs)("select",{onInput:function(e){r(e.currentTarget.value)},value:n,children:[Object(m.jsx)("option",{value:o.TO_DO,children:"To Do"}),Object(m.jsx)("option",{value:o.DOING,children:"Doing"}),Object(m.jsx)("option",{value:o.DONE,children:"Done"})]})};var v,y=function(){var e=Object(u.e)(h);return Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:"TODOS"}),Object(m.jsx)("br",{}),Object(m.jsx)(x,{}),Object(m.jsx)(p,{}),null===e||void 0===e?void 0:e.map((function(e){return Object(m.jsx)(D,Object(b.a)({},e),e.id)}))]})},S=Object(s.b)(v||(v=Object(i.a)(["\n  @import url('https://fonts.googleapis.com/css2?family=Readex+Pro:wght@200;400&display=swap');\n\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed,\n  figure, figcaption, footer, header, hgroup,\n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n  }\n\n  /* HTML5 display-role reset for older browsers */\n  article, aside, details, figcaption, figure,\n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n\n  body {\n    line-height: 1;\n  }\n\n  ol, ul {\n    list-style: none;\n  }\n\n  blockquote, q {\n    quotes: none;\n  }\n\n  blockquote:before, blockquote:after,\n  q:before, q:after {\n    content: '';\n    content: none;\n  }\n\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n\n  * {\n    box-sizing: border-box;\n  }\n\n  // \ub9cc\uc57d \uc0c1\ub2e8\uc5d0\uc11c @import \uac00 \uc2e4\ud328\ud558\uba74 \uc774\ud558\uc758 \uae00\uaf34\uc744 \uc801\uc6a9\ud55c\ub2e4.\n  body {\n    font-family: 'Source Sans Pro', sans-serif;\n    background-color: ",";\n    color: ",";\n  }\n\n  // Link \ud0dc\uadf8\ub294 \uacb0\uad6d HTML \uc5d0\uc11c a \ud0dc\uadf8\ub85c \ubc14\ub00c\ubbc0\ub85c \uc774\uacf3\uc5d0\uc11c CSS \ub97c \uc124\uc815\ud55c\ub2e4.\n  a {\n    text-decoration: none;\n    color: inherit;\n  }\n"])),(function(e){return e.theme.bgColor}),(function(e){return e.theme.textColor}));var T=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(S,{}),Object(m.jsx)(y,{})]})},k=new l.QueryClient;a.a.render(Object(m.jsx)(u.a,{children:Object(m.jsx)(l.QueryClientProvider,{client:k,children:Object(m.jsx)(s.a,{theme:{bgColor:"#2f3640",textColor:"#44bd32",linkColor:"#00a8ff",boxColor:"#718092",detailBoxColor:"#00000080"},children:Object(m.jsx)(T,{})})})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.cf3c8ef0.chunk.js.map