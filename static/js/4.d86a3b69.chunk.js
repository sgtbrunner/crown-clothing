(this["webpackJsonpcrown-clothing"]=this["webpackJsonpcrown-clothing"]||[]).push([[4],{84:function(n,e,t){"use strict";t.d(e,"b",(function(){return r})),t.d(e,"a",(function(){return o})),t.d(e,"c",(function(){return l}));var a=t(6),i=function(n){return n.shop},c=Object(a.a)([i],(function(n){return n.collections})),r=Object(a.a)([c],(function(n){return n?Object.values(n):[]})),o=function(n){return Object(a.a)([c],(function(e){return e?e[n]:null}))},l=(Object(a.a)([i],(function(n){return n.isFetching})),Object(a.a)([i],(function(n){return!!n.collections})))},88:function(n,e,t){"use strict";var a=t(38),i=t(0),c=t.n(i),r=t(42),o=["isLoading"];e.a=function(n){return function(e){var t=e.isLoading,i=Object(a.a)(e,o);return t?c.a.createElement(r.a,null):c.a.createElement(n,i)}}},89:function(n,e,t){"use strict";var a,i,c,r,o,l=t(0),u=t.n(l),d=t(12),s=t(23),m=t(1),p=t(2),b=t(39),f=p.c.div(a||(a=Object(m.a)(["\n  width: 22vw;\n  display: flex;\n  flex-direction: column;\n  height: 350px;\n  align-items: center;\n  position: relative;\n  &:hover {\n    .image {\n      opacity: 0.8;\n    }\n    button {\n      opacity: 0.85;\n      display: flex;\n    }\n  }\n\n  @media screen and (max-width: 767px) {\n    width: 40vw;\n    &:hover {\n      .image {\n        opacity: unset;\n      }\n      button {\n        opacity: unset;\n      }\n    }\n  }\n"]))),g=Object(p.c)(b.a)(i||(i=Object(m.a)(["\n  width: 80%;\n  height: auto;\n  opacity: 0.7;\n  position: absolute;\n  top: 255px;\n  display: none;\n\n  @media screen and (max-width: 767px) {\n    display: block;\n    opacity: 0.9;\n    min-width: unset;\n    padding: 0 10px;\n  }\n"])));g.displayName="AddButton";var h=p.c.div(c||(c=Object(m.a)(["\n  width: 100%;\n  height: 95%;\n  background-size: cover;\n  background-position: center;\n  margin-bottom: 5px;\n  background-image: ",";\n"])),(function(n){var e=n.imageUrl;return"url(".concat(e,")")}));h.displayName="BackgroundImage";var j=p.c.div(r||(r=Object(m.a)(["\n  width: 100%;\n  height: 5%;\n  display: flex;\n  justify-content: space-between;\n  font-size: 18px;\n"])));j.displayName="CollectionFooterContainer";var v=p.c.span(o||(o=Object(m.a)(["\n  width: 90%;\n  margin-bottom: 15px;\n"])));v.displayName="NameContainer";e.a=Object(d.b)(null,(function(n){return{addItem:function(e){return n(Object(s.a)(e))}}}))((function(n){var e=n.item,t=n.addItem,a=e.name,i=e.imageUrl,c=e.price;return u.a.createElement(f,{"data-testid":"collection-item"},u.a.createElement(h,{role:"img",imageUrl:i}),u.a.createElement(j,null,u.a.createElement(v,null,a),u.a.createElement("span",null,"$".concat(c))),u.a.createElement(g,{onClick:function(){return t(e)},inverted:!0},"Add to cart"))}))},95:function(n,e,t){"use strict";t.r(e);var a,i,c,r,o=t(12),l=t(13),u=t(6),d=t(84),s=t(88),m=t(38),p=t(0),b=t.n(p),f=t(89),g=t(1),h=t(2),j=t(16),v=h.c.div(a||(a=Object(g.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 30px;\n\n  @media screen and (max-width: 767px) {\n    align-items: center;\n  }\n"]))),O=Object(h.c)(j.b)(i||(i=Object(g.a)(["\n  font-size: 28px;\n  margin-bottom: 25px;\n\n  &:hover {\n    color: grey;\n  }\n"]))),x=h.c.div(c||(c=Object(g.a)(["\n  display: flex;\n  justify-content: space-between;\n\n  @media screen and (max-width: 767px) {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-gap: 15px;\n  }\n"]))),y=function(n){var e=n.title,t=n.items;return b.a.createElement(v,{"data-testid":"collection-preview"},b.a.createElement(O,{to:"/shop/".concat(e.toLowerCase())},e.toUpperCase()),b.a.createElement(x,null,t.filter((function(n,e){return e<4})).map((function(n){return b.a.createElement(f.a,{key:n.id,item:n})}))))},w=h.c.div(r||(r=Object(g.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),E=["id"],k=Object(o.b)((function(n){return{collections:Object(d.b)(n)}}))((function(n){var e=n.collections;return b.a.createElement(w,null,e.map((function(n){var e=n.id,t=Object(m.a)(n,E);return b.a.createElement(y,Object.assign({key:e},t))})))})),C=Object(u.b)({isLoading:function(n){return!Object(d.c)(n)}}),N=Object(l.c)(Object(o.b)(C),s.a)(k);e.default=N}}]);
//# sourceMappingURL=4.d86a3b69.chunk.js.map