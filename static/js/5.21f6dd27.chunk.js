(this["webpackJsonpcrown-clothing"]=this["webpackJsonpcrown-clothing"]||[]).push([[5],{84:function(n,t,e){"use strict";e.d(t,"b",(function(){return r})),e.d(t,"a",(function(){return o})),e.d(t,"c",(function(){return l}));var a=e(6),i=function(n){return n.shop},c=Object(a.a)([i],(function(n){return n.collections})),r=Object(a.a)([c],(function(n){return n?Object.values(n):[]})),o=function(n){return Object(a.a)([c],(function(t){return t?t[n]:null}))},l=(Object(a.a)([i],(function(n){return n.isFetching})),Object(a.a)([i],(function(n){return!!n.collections})))},88:function(n,t,e){"use strict";var a=e(38),i=e(0),c=e.n(i),r=e(42),o=["isLoading"];t.a=function(n){return function(t){var e=t.isLoading,i=Object(a.a)(t,o);return e?c.a.createElement(r.a,null):c.a.createElement(n,i)}}},89:function(n,t,e){"use strict";var a,i,c,r,o,l=e(0),u=e.n(l),d=e(12),m=e(23),s=e(1),p=e(2),b=e(39),f=p.c.div(a||(a=Object(s.a)(["\n  width: 22vw;\n  display: flex;\n  flex-direction: column;\n  height: 350px;\n  align-items: center;\n  position: relative;\n  &:hover {\n    .image {\n      opacity: 0.8;\n    }\n    button {\n      opacity: 0.85;\n      display: flex;\n    }\n  }\n\n  @media screen and (max-width: 767px) {\n    width: 40vw;\n    &:hover {\n      .image {\n        opacity: unset;\n      }\n      button {\n        opacity: unset;\n      }\n    }\n  }\n"]))),g=Object(p.c)(b.a)(i||(i=Object(s.a)(["\n  width: 80%;\n  height: auto;\n  opacity: 0.7;\n  position: absolute;\n  top: 255px;\n  display: none;\n\n  @media screen and (max-width: 767px) {\n    display: block;\n    opacity: 0.9;\n    min-width: unset;\n    padding: 0 10px;\n  }\n"])));g.displayName="AddButton";var h=p.c.div(c||(c=Object(s.a)(["\n  width: 100%;\n  height: 95%;\n  background-size: cover;\n  background-position: center;\n  margin-bottom: 5px;\n  background-image: ",";\n"])),(function(n){var t=n.imageUrl;return"url(".concat(t,")")}));h.displayName="BackgroundImage";var v=p.c.div(r||(r=Object(s.a)(["\n  width: 100%;\n  height: 5%;\n  display: flex;\n  justify-content: space-between;\n  font-size: 18px;\n"])));v.displayName="CollectionFooterContainer";var j=p.c.span(o||(o=Object(s.a)(["\n  width: 90%;\n  margin-bottom: 15px;\n"])));j.displayName="NameContainer";t.a=Object(d.b)(null,(function(n){return{addItem:function(t){return n(Object(m.a)(t))}}}))((function(n){var t=n.item,e=n.addItem,a=t.name,i=t.imageUrl,c=t.price;return u.a.createElement(f,{"data-testid":"collection-item"},u.a.createElement(h,{role:"img",imageUrl:i}),u.a.createElement(v,null,u.a.createElement(j,null,a),u.a.createElement("span",null,"$".concat(c))),u.a.createElement(g,{onClick:function(){return e(t)},inverted:!0},"Add to cart"))}))},97:function(n,t,e){"use strict";e.r(t);var a,i,c,r=e(12),o=e(13),l=e(6),u=e(84),d=e(88),m=e(0),s=e.n(m),p=e(89),b=e(1),f=e(2),g=f.c.div(a||(a=Object(b.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),h=f.c.h2(i||(i=Object(b.a)(["\n  font-size: 38px;\n  margin: 0 auto 30px;\n"]))),v=f.c.div(c||(c=Object(b.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-gap: 10px;\n  & > div {\n    margin-bottom: 30px;\n  }\n  @media screen and (max-width: 767px) {\n    grid-template-columns: 1fr 1fr;\n    grid-gap: 15px;\n  }\n"])));v.displayName="CollectionItemsContainer";var j=Object(r.b)((function(n,t){return{collection:Object(u.a)(t.match.params.collectionId)(n)}}))((function(n){var t=n.collection,e=t.title,a=t.items;return s.a.createElement(g,null,s.a.createElement(h,null,e),s.a.createElement(v,null,a.map((function(n){return s.a.createElement(p.a,{key:n.id,item:n})}))))})),O=Object(l.b)({isLoading:function(n){return!Object(u.c)(n)}}),x=Object(o.c)(Object(r.b)(O),d.a)(j);t.default=x}}]);
//# sourceMappingURL=5.21f6dd27.chunk.js.map