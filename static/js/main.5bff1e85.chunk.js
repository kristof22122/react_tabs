(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{14:function(t,e,a){},15:function(t,e,a){"use strict";a.r(e);var n=a(4),c=a.n(n),r=a(5),s=a(6),i=a(8),b=a(7),l=a(1),o=a.n(l),u=(a(3),a(0)),d=function(t){var e=t.tabs,a=t.value,n=t.onChange;return Object(u.jsxs)("div",{children:[e.map((function(t){return Object(u.jsx)("button",{type:"button",className:"btn btn-primary",onClick:function(){n(t)},children:t.title},t.id)})),Object(u.jsx)("p",{className:"alert alert-primary",children:a.content})]})},j=(a(14),[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}]),p=function(t){Object(i.a)(a,t);var e=Object(b.a)(a);function a(){var t;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={selectedTab:j[0]},t.setTab=function(e){t.setState({selectedTab:e})},t}return Object(s.a)(a,[{key:"render",value:function(){var t=this,e=this.state.selectedTab;return Object(u.jsx)("div",{className:"wrapper",children:Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{className:"alert alert-primary",children:"Selected tab is ".concat(e.title)}),Object(u.jsx)(d,{tabs:j,value:e,onChange:function(e){t.setTab(e)}})]})})}}]),a}(o.a.Component),h=p;c.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.5bff1e85.chunk.js.map