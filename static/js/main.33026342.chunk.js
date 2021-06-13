(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{53:function(e,t,a){e.exports=a(83)},59:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(13),l=a.n(r),s=a(21),o=a.n(s),i=a(30),u=a(11),m=a(9),f=(a(59),a(31)),d=a.n(f),b=a(92),p=a(23),E=a(26),h=function(){return c.a.createElement(b.a,{className:"shadow p-3 m-2 mb-5 bg-light rounded-lg"},c.a.createElement(b.a.Brand,{href:"/"},c.a.createElement("span",{className:"px-2"},"SupMonitor"),c.a.createElement(p.a,{style:{fontSize:18},icon:E.b})))},x=a(93);function w(e,t){return null==e||null==e[t]?null:e[t]}var v=function(e){var t=e.data;return c.a.createElement(x.a,{className:"h-100 px-2 shadow-sm bg-white rounded"},c.a.createElement(x.a.Img,{variant:"top",src:t.images[2]}),c.a.createElement(x.a.Body,{className:"d-flex p-2 flex-column"},c.a.createElement(x.a.Title,{className:"mb-0 h6 font-weight-bold item-title"},t.name),c.a.createElement("div",{className:"row mb-0"},c.a.createElement("div",{className:"col d-flex flex-column"},c.a.createElement("span",{className:""},"Retail"),c.a.createElement("span",{className:"h6"},"$",Math.round(Number(t.prices.usd)))),c.a.createElement("div",{className:"col d-flex flex-column"},c.a.createElement("span",{className:""},"Resell"),c.a.createElement("span",{className:"h6 ".concat(null!=t.stockx&&Math.round(Number(t.stockx.latestAverage.lowestAsk))>0?"text-success":"text-danger")},"$",Math.round(Number(w(w(t.stockx,"latestAverage"),"lowestAsk"))))),c.a.createElement("div",{className:"col d-flex flex-column"},c.a.createElement("span",{className:""},"Profit"),c.a.createElement("span",{className:"h6 ".concat(null!=t.stockx&&Math.round(Number(t.stockx.latestAverage.profit))>0?"text-success":"text-danger")},"$",Math.round(Number(w(w(t.stockx,"latestAverage"),"profit"))))),c.a.createElement("div",{className:"col d-flex flex-column"})),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col d-flex flex-column"},c.a.createElement("span",{className:"small"},"Last update"),c.a.createElement("span",{className:"small font-weight-bold"},new Date(w(w(t.stockx,"latestAverage"),"timestamp")).toLocaleDateString())))))},g=function(e){var t=Object(n.useState)(!1),a=Object(m.a)(t,2),r=a[0],l=a[1];return c.a.createElement("button",{onClick:function(){l((function(e){return!e})),e.handleClick(e.cat)},key:e.index,type:"button",value:e.cat,className:"btn btn-sm btn-light mx-1 rounded-pill d-flex flex-row align-items-center no-shadowbox ".concat(r?"btn-active":"btn-nonactive"),style:{textTransform:"capitalize",paddingRight:"1.25em"}},c.a.createElement(p.a,{style:{fontSize:"0.85em",marginRight:"0.4em"},icon:E.a,className:"".concat(r?"visible":"invisible")}),c.a.createElement("span",null,e.cat))},N=a(88),k=a(91),j=a(89),O=a(90),y=["jackets","shirts","tops-sweaters","sweatshirts","pants","shorts","t-shirts","hats","bags","accessories","skate","shoes"];var S=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)([]),s=Object(m.a)(l,2),f=s[0],b=s[1],p=Object(n.useState)("profit"),E=Object(m.a)(p,2),x=E[0],w=E[1],S=Object(n.useState)(1),A=Object(m.a)(S,2),M=A[0],R=A[1],W=Object(n.useState)(!1),z=Object(m.a)(W,2),C=(z[0],z[1],Object(n.useState)([])),L=Object(m.a)(C,2),T=L[0],B=L[1],I=Object(n.useState)([]),$=Object(m.a)(I,2),D=$[0],H=$[1];Object(n.useEffect)((function(){return window.addEventListener("scroll",K),function(){return window.removeEventListener("scroll",K)}}),[]);var J=function(e){0===T.length?H((function(t){return[].concat(Object(u.a)(t),Object(u.a)(e))})):H((function(t){return[].concat(Object(u.a)(t),Object(u.a)(e.filter((function(e){return T.indexOf(e.category)>-1||T.indexOf("Week "+e.week)>-1}))))}))},P=function(e,t){var a=void 0!=t&&"week"===t,n=T.indexOf(e);if(n>-1)1===T.length?(B([]),H(f)):(B((function(e){return e.splice(n,1),e})),H((function(t){return t.filter((function(t){return a?Number(t.week)!==Number(e.split("Week")[1]):t.category!==e}))})));else if(0===T.length){var c=T.push(e);H(f.filter((function(t){return a?Number(t.week)===Number(e.split("Week")[1]):t.category===T[c-1]})))}else{var r=T.push(e);H((function(t){return[].concat(Object(u.a)(t),Object(u.a)(f.filter((function(t){return a?Number(t.week)===Number(e.split("Week")[1]):t.category===T[r-1]}))))}))}},K=function(){window.innerHeight+document.documentElement.scrollTop===document.scrollingElement.scrollHeight&&R((function(e){return e+1}))};return Object(n.useEffect)(Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("https://www.supmonitor.lubomirdlhy.tech/api/droplist");case 2:t=e.sent,r(t.data.data.map((function(e){return"Week "+e.week})));case 4:case"end":return e.stop()}}),e)}))),[]),Object(n.useEffect)((function(){(function(){var e=Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("https://www.supmonitor.lubomirdlhy.tech/api/drop/all?sort=profit&page=".concat(M));case 2:t=e.sent,b((function(e){return[].concat(Object(u.a)(e),Object(u.a)(t.data.data))})),J(t.data.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[M]),c.a.createElement("div",{className:"App",onScroll:K},c.a.createElement(h,null),c.a.createElement(N.a,{fluid:!0},c.a.createElement("div",{className:"d-flex flex-row justify-content-center mb-3"},y.map((function(e,t){return c.a.createElement(g,{cat:e,key:t,handleClick:function(e){return P(e)}})}))),c.a.createElement("div",{className:"d-flex flex-row justify-content-center mb-3"},a.map((function(e,t){return c.a.createElement(g,{cat:e,key:t,handleClick:function(e){return P(e,"week")}})}))),c.a.createElement(N.a,{className:"d-flex justify-content-between mb-3"},c.a.createElement("div",null,c.a.createElement("span",null,"Results: "),c.a.createElement("span",{className:"h6"},D.length)),c.a.createElement(k.a,null,c.a.createElement(k.a.Toggle,{id:"dropdown-item-button",size:"sm",variant:"white"},x),c.a.createElement(k.a.Menu,null,c.a.createElement(k.a.Item,{onSelect:function(e){w(e)},as:"button",className:"btn btn-light",eventKey:"profit"},"Profit"))))),c.a.createElement(N.a,null,c.a.createElement(j.a,{className:"justify-content-center"},D&&D.map((function(e,t){return c.a.createElement(O.a,{key:t,xs:10,sm:6,lg:4,xl:3,className:"mb-5"},c.a.createElement(v,{data:e}))})),c.a.createElement(O.a,{className:"mb-5"}))))};a(82);l.a.render(c.a.createElement(S,null),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.33026342.chunk.js.map