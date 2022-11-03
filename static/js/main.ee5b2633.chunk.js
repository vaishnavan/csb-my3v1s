(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{22:function(e,t,r){},23:function(e,t,r){"use strict";r.r(t);var c=r(1),n=r.n(c),a=r(9),o=r(2),i=r(0),s=Object(c.createContext)(),j={ticket:"",remarks:"",prority:"",date:"",reporter:""},l=function(e){var t=e.children,r=Object(c.useState)(j),n=Object(o.a)(r,2),a=n[0],l=n[1],d=Object(c.useState)(!1),b=Object(o.a)(d,2),u=b[0],O=b[1],h=Object(c.useState)(!1),m=Object(o.a)(h,2),x=m[0],f=m[1],p=Object(c.useState)((function(){var e=localStorage.getItem("jira");return JSON.parse(e)||[]})),v=Object(o.a)(p,2),g=v[0],k=v[1],w=Object(c.useState)([]),y=Object(o.a)(w,2),S=y[0],C=y[1],D=Object(c.useState)(!1),F=Object(o.a)(D,2),N=F[0],I=F[1],E=Object(c.useRef)();return Object(i.jsx)(s.Provider,{value:{formInitialState:j,formData:a,setFormData:l,jiraData:g,setJiraData:k,fillData:S,setFillData:C,show:u,setShow:O,mode:N,setMode:I,modeRef:E,formToggle:x,setFormToggle:f},children:t})},d=r(7),b=function(){var e=Object(c.useContext)(s),t=e.mode,r=e.setMode,a=e.modeRef;return Object(i.jsx)(n.a.Fragment,{children:Object(i.jsx)("span",{className:"font-icons",onClick:function(){r(!t),a.current.style=t?"\n      background-color: white;\n      color: black;\n    ":"\n      background-color: #121212;\n      color: white;\n      "},children:t?Object(i.jsx)(d.a,{}):Object(i.jsx)(d.b,{color:"orange"})})})},u=r(3),O=r(10),h=r.n(O),m=function(e){var t=e.handleLoad;return Object(i.jsx)(n.a.Fragment,{children:Object(i.jsx)("div",{className:"loadmore-btn",children:Object(i.jsx)("button",{onClick:t,children:"Loadmore"})})})},x=function(){var e=Object(c.useContext)(s),t=e.jiraData,r=e.setJiraData,a=e.setFormData,j=e.fillData,l=e.show,d=e.setShow,b=Object(c.useState)(6),O=Object(o.a)(b,2),x=O[0],f=O[1];Object(c.useEffect)((function(){j.length?d(!0):d(!1)}),[j]);var p=l?j:t;return Object(i.jsxs)(n.a.Fragment,{children:[Object(i.jsx)("div",{className:"main-container",children:t&&p.slice(0,x).sort((function(e,t){return new Date(t.date)-new Date(e.date)})).map((function(e){return Object(i.jsxs)("div",{style:(c=e.prority.toLowerCase(),"critical"===c?{border:"2px solid red",boxShadow:"0 0 10px red"}:"major"===c?{border:"2px solid orange",boxShadow:"0 0 10px orange"}:{border:"2px solid green",boxShadow:"0 0 10px green"}),className:"display-card",children:[Object(i.jsxs)("h4",{children:[e.ticket.slice(-9)," - ",h()(e.date).format("ll")]}),Object(i.jsx)("a",{href:e.ticket,children:Object(i.jsx)("h4",{children:e.ticket})}),Object(i.jsx)("p",{children:e.remarks}),Object(i.jsx)("b",{children:e.prority}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("b",{children:"Report To:-"})," ",e.reporter,Object(i.jsxs)("div",{className:"delete-btn",children:[Object(i.jsx)("button",{onClick:function(){return function(e){var c=t.filter((function(t){return t.id!==e}));window.confirm("Are you sure to delete issue")&&r(c)}(e.id)},children:"Delete"}),Object(i.jsx)("button",{onClick:function(){return function(e){var r=t.find((function(t){return t.id===e})),c=Object(u.a)({updateId:e},r);a(c),window.scroll({top:0,behavior:"smooth"})}(e.id)},children:"Update"})]})]},e.id);var c}))}),t.length<x?"":Object(i.jsx)(m,{handleLoad:function(){f((function(e){return e+4}))}})]})},f=r(11),p=r(6),v=r(25),g=function(){var e=Object(c.useContext)(s),t=e.formData,r=e.setFormData,a=e.formInitialState,o=e.jiraData,j=e.setJiraData,l=e.setShow,d=e.formToggle,b=e.setFormToggle,O=Object(c.useRef)();Object(c.useEffect)((function(){O.current.style.display="none",localStorage.setItem("jira",JSON.stringify(o))}),[o]);var h=function(e){var c=e.target,n=c.value,a=c.name;r(Object(u.a)(Object(u.a)({},t),{},Object(p.a)({},a,n)))};return Object(i.jsxs)(n.a.Fragment,{children:[Object(i.jsx)("div",{className:"issues-text",children:Object(i.jsxs)("h3",{children:[" ",Object(i.jsx)("b",{style:{fontSize:"30px"},children:o.length})," issues are on tracking"]})}),Object(i.jsxs)("div",{class:"form-main-first",children:[Object(i.jsx)("div",{children:Object(i.jsx)("button",{onClick:function(){b(!d),O.current.style.display=d?"none":"block"},children:d?"Close Form":"Open Form"})}),Object(i.jsx)("div",{ref:O,className:"dropdown-menu",children:Object(i.jsxs)("form",{children:[Object(i.jsx)("input",{type:"text",placeholder:"Enter the ticket details",name:"ticket",value:t.ticket,onChange:h}),Object(i.jsxs)("select",{value:t.prority,name:"prority",onChange:h,children:[Object(i.jsx)("option",{value:""}),Object(i.jsx)("option",{value:"critical",children:"critical"}),Object(i.jsx)("option",{value:"major",children:"major"}),Object(i.jsx)("option",{value:"minor",children:"minor"})]}),Object(i.jsx)("input",{type:"date",placeholder:"Enter the date",name:"date",value:t.date,onChange:h}),Object(i.jsx)("input",{type:"text",placeholder:"Enter the reporter name",name:"reporter",value:t.reporter,onChange:h}),Object(i.jsx)("textarea",{placeholder:"Enter the remarks",name:"remarks",value:t.remarks,onChange:h,rows:"10",cols:"41"}),Object(i.jsx)("input",{onClick:function(e){if(e.preventDefault(),t.updateId){var c=o.map((function(e){return e.id===t.updateId?Object(u.a)(Object(u.a)({},e),t):e}));j(c),r(a)}else{var n=Object(u.a)({id:Object(v.a)()},t);j([].concat(Object(f.a)(o),[n])),r(a),l(!1)}},type:"submit",value:t.updateId?"Update":"Submit"})]})})]})]})},k=function(){var e=Object(c.useContext)(s),t=e.setFillData,r=e.jiraData,a=["issues","critical","major","minor"];return Object(i.jsx)(n.a.Fragment,{children:Object(i.jsx)("div",{className:"issue-btn",children:a&&a.map((function(e){return Object(i.jsx)("button",{style:{background:"".concat(("critical"===e?"red":"major"===e&&"orange")||"minor"===e&&"green"||"issues"===e&&"Blue")},onClick:function(){return function(e){var c;switch(e){case"critical":case"major":case"minor":c=r.filter((function(t){return t.prority===e}));break;default:c=r}t(c)}(e)},children:e})}))})})},w=(r(22),function(){var e=Object(c.useContext)(s).modeRef;return Object(i.jsx)(n.a.Fragment,{children:Object(i.jsxs)("div",{ref:e,className:"mode-change",children:[Object(i.jsx)(b,{}),Object(i.jsx)(g,{}),Object(i.jsx)(k,{}),Object(i.jsx)(x,{})]})})}),y=document.getElementById("root");Object(a.createRoot)(y).render(Object(i.jsx)(c.StrictMode,{children:Object(i.jsx)(l,{children:Object(i.jsx)(w,{})})}))}},[[23,1,2]]]);
//# sourceMappingURL=main.ee5b2633.chunk.js.map