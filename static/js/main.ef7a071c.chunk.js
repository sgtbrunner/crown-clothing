(this["webpackJsonpcrown-clothing"]=this["webpackJsonpcrown-clothing"]||[]).push([[0],{10:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var r={TOGGLE_CART_HIDDEN:"TOGGLE_CART_HIDDEN",ADD_ITEM:"ADD_ITEM",REMOVE_ITEM:"REMOVE_ITEM",CLEAR_ITEM_FROM_CART:"CLEAR_ITEM_FROM_CART",CLEAR_CART_ITEMS:"CLEAR_CART_ITEMS"}},18:function(e,n,t){"use strict";t.d(n,"b",(function(){return c})),t.d(n,"a",(function(){return o})),t.d(n,"c",(function(){return i})),t.d(n,"d",(function(){return l}));var r=t(6),a=function(e){return e.cart},c=Object(r.a)([a],(function(e){return e.cartItems})),o=Object(r.a)([a],(function(e){return e.hidden})),i=Object(r.a)([c],(function(e){return e.reduce((function(e,n){return e+n.quantity}),0)})),l=Object(r.a)([c],(function(e){return e.reduce((function(e,n){return e+n.price*n.quantity}),0)}))},20:function(e,n,t){"use strict";t.d(n,"c",(function(){return u})),t.d(n,"b",(function(){return s})),t.d(n,"a",(function(){return d})),t.d(n,"d",(function(){return p})),t.d(n,"e",(function(){return b}));var r=t(14),a=t.n(r),c=t(3),o=t(21),i=t(19),l=t.n(i);t(75),t(78);l.a.initializeApp({apiKey:"AIzaSyD6nwOlZhDgTN0AzNZqdZuM3eMxSp8uUdo",authDomain:"crown-clothing-db-9b86e.firebaseapp.com",databaseURL:"https://crown-clothing-db-9b86e.firebaseio.com",projectId:"crown-clothing-db-9b86e",storageBucket:"crown-clothing-db-9b86e.appspot.com",messagingSenderId:"940396830305",appId:"1:940396830305:web:832ce883ef7566fd141420"});var u=function(){var e=Object(o.a)(a.a.mark((function e(n,t){var r,o,i,l;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}return e.abrupt("return");case 2:return r=p.doc("users/".concat(n.uid)),e.next=5,r.get();case 5:if(e.sent.exists){e.next=17;break}return o=n.displayName,i=n.email,l=new Date,e.prev=9,e.next=12,r.set(Object(c.a)({displayName:o,email:i,createdAt:l},t));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("error creating user",e.t0.message);case 17:return e.abrupt("return",r);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(n,t){return e.apply(this,arguments)}}(),s=function(e){return e.docs.map((function(e){var n=e.data(),t=n.title,r=n.items;return{routeName:encodeURI(t.toLowerCase()),id:e.id,title:t,items:r}})).reduce((function(e,n){return e[n.title.toLowerCase()]=n,e}),{})},d=l.a.auth(),p=l.a.firestore(),f=new l.a.auth.GoogleAuthProvider;f.setCustomParameters({prompt:"select_account"});var b=function(){return d.signInWithPopup(f)};l.a},23:function(e,n,t){"use strict";t.d(n,"e",(function(){return a})),t.d(n,"a",(function(){return c})),t.d(n,"d",(function(){return o})),t.d(n,"c",(function(){return i})),t.d(n,"b",(function(){return l}));var r=t(10),a=function(){return{type:r.a.TOGGLE_CART_HIDDEN}},c=function(e){return{type:r.a.ADD_ITEM,payload:e}},o=function(e){return{type:r.a.REMOVE_ITEM,payload:e}},i=function(e){return{type:r.a.CLEAR_ITEM_FROM_CART,payload:e}},l=function(){return{type:r.a.CLEAR_CART_ITEMS}}},27:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var r=t(6),a=Object(r.a)([function(e){return e.user}],(function(e){return e.currentUser}))},29:function(e,n,t){"use strict";n.a={FETCH_COLLECTIONS_START:"FETCH_COLLECTIONS_START",FETCH_COLLECTIONS_SUCCESS:"FETCH_COLLECTIONS_SUCCESS",FETCH_COLLECTIONS_FAILURE:"FETCH_COLLECTIONS_FAILURE"}},39:function(e,n,t){"use strict";var r,a,c,o,i=t(38),l=t(0),u=t.n(l),s=t(1),d=t(2),p=Object(d.b)(r||(r=Object(s.a)(["\n  background-color: var(--primary-color);\n  color: var(--white-color);\n  border: none;\n  &:hover {\n    background-color: var(--white-color);\n    color: var(--primary-color);\n    border: 1px solid var(--primary-color);\n  }\n"]))),f=Object(d.b)(a||(a=Object(s.a)(["\n  background-color: var(--white-color);\n  color: var(--primary-color);\n  border: 1px solid var(--primary-color);\n  &:hover {\n    background-color: var(--primary-color);\n    color: var(--white-color);\n    border: none;\n  }\n"]))),b=Object(d.b)(c||(c=Object(s.a)(["\n  color: var(--white-color);\n  background-color: var(--secondary-color);\n  border: 1px solid var(--secondary-color);\n  &:hover {\n    color: var(--secondary-color);\n    background-color: var(--white-color);\n    border: 1px solid var(--secondary-color);\n  }\n"]))),m=d.c.button(o||(o=Object(s.a)(["\n  min-width: 165px;\n  width: auto;\n  height: 50px;\n  letter-spacing: 0.5px;\n  line-height: 50px;\n  padding: 0 25px;\n  font-size: 13px;\n  text-transform: uppercase;\n  font-family: var(--default-font-family);\n  font-weight: bolder;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  ","\n  &:disabled {\n    color: var(--white-color);\n    background-color: var(--disabled-color);\n    cursor: default;\n    border: none;\n  }\n"])),(function(e){return e.isGoogleSignIn?b:e.inverted?f:p})),h=["children"],g=function(e){var n=e.children,t=Object(i.a)(e,h);return u.a.createElement(m,t,n)};g.defaultProps={isGoogleSignIn:!1,inverted:!1};n.a=g},40:function(e,n,t){"use strict";t.d(n,"c",(function(){return r})),t.d(n,"d",(function(){return a})),t.d(n,"f",(function(){return c})),t.d(n,"i",(function(){return o})),t.d(n,"a",(function(){return i})),t.d(n,"e",(function(){return l})),t.d(n,"g",(function(){return u})),t.d(n,"j",(function(){return s})),t.d(n,"b",(function(){return d})),t.d(n,"k",(function(){return p})),t.d(n,"h",(function(){return f}));var r={isValid:!1,value:"",showError:!1},a="displayName",c="email",o="password",i="confirmPassword",l="Display name must have at least 3 characters",u="Please enter a valid email address",s="Your password must be at least 6 characters long",d="Password and confirm password do not match",p="An unknown error occurred. Please try again later!",f="Your cart is empty..."},41:function(e,n,t){"use strict";t.d(n,"a",(function(){return y})),t.d(n,"b",(function(){return x}));var r,a,c,o,i,l=t(44),u=t(0),s=t.n(u),d=t(1),p=t(2),f=p.c.div(r||(r=Object(d.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  z-index: 10;\n"]))),b=p.c.button(a||(a=Object(d.a)(["\n  display: block;\n  position: fixed;\n  background: rgba(0, 0, 0, 0.6);\n  border: none;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"]))),m=p.c.div(c||(c=Object(d.a)(["\n  position: absolute;\n  width: calc("," * 28);\n  max-width: 90%;\n  padding: calc("," / 2) calc("," * 1.5);\n  border-radius: 5px;\n  border: 1px solid rgba(0, 0, 0, 0.25);\n  background-color: #ffffff;\n  box-shadow: rgba(9, 30, 66, 0.25) 0px 20px 32px -8px;\n  bottom: calc(100% - "," * 15);\n"])),"24px","24px","24px","24px"),h=p.c.button(o||(o=Object(d.a)(["\n  position: absolute;\n  top: ",";\n  right: ",";\n  padding: 0;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n"])),"24px","24px"),g=p.c.svg(i||(i=Object(d.a)(["\n  width: ",";\n  height: ",";\n  fill: currentColor;\n  opacity: 0.5;\n  &:hover {\n    opacity: 1;\n  }\n"])),"24px","24px"),E=function(e){var n=e.content,t=e.unsetDialog;return Object(u.useEffect)((function(){var e=function(e){27===e.keyCode&&(document.activeElement&&["INPUT","SELECT"].includes(document.activeElement.tagName)||t())};return document.addEventListener("keyup",e),function(){return document.removeEventListener("keyup",e)}}),[n,t]),s.a.createElement(f,null,s.a.createElement(b,{onClick:t}),s.a.createElement(m,{role:"dialog"},s.a.createElement(h,{onClick:t},s.a.createElement(g,{height:"20",width:"20",viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false"},s.a.createElement("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))),n))};E.defaulProps={content:{}};var v=E,O=Object(u.createContext)(),y=function(e){var n=Object(u.useState)(),t=Object(l.a)(n,2),r=t[0],a=t[1],c=Object(u.useCallback)((function(){a()}),[a]);return s.a.createElement(O.Provider,Object.assign({value:{unsetDialog:c,setDialog:a}},e),e.children,r&&s.a.createElement(v,{content:r,unsetDialog:c}))},x=function(){var e=Object(u.useContext)(O);if(void 0===e)throw new Error("useDialog must be wrapped by a DialogProvider");return e};y.defaulProps={children:{}}},42:function(e,n,t){"use strict";var r,a,c=t(0),o=t.n(c),i=t(1),l=t(2),u=l.c.div(r||(r=Object(i.a)(["\n  height: 60vh;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),s=l.c.div(a||(a=Object(i.a)(["\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n  border: 3px solid rgba(195, 195, 195, 0.6);\n  border-radius: 50%;\n  border-top-color: #636767;\n  animation: spin 1s ease-in-out infinite;\n  -webkit-animation: spin 1s ease-in-out infinite;\n  @keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n  @-webkit-keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n"])));n.a=function(){return o.a.createElement(u,null,o.a.createElement(s,null))}},61:function(e,n,t){e.exports=t(83)},83:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(26),o=t.n(c),i=t(16),l=t(12),u=t(50),s=t(41),d=t(13),p=t(30),f=t(54),b=t(55),m=t.n(b),h=t(3),g="SET_CURRENT_USER",E={currentUser:null},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case g:return Object(h.a)(Object(h.a)({},e),{},{currentUser:n.payload});default:return e}},O=t(10),y=t(59),x=function(e,n){return e.find((function(e){return e.id===n.id}))?e.map((function(e){return e.id===n.id?Object(h.a)(Object(h.a)({},e),{},{quantity:e.quantity+1}):e})):[].concat(Object(y.a)(e),[Object(h.a)(Object(h.a)({},n),{},{quantity:1})])},j=function(e,n){return 1===e.find((function(e){return e.id===n.id})).quantity?w(e,n):e.map((function(e){return e.id===n.id?Object(h.a)(Object(h.a)({},e),{},{quantity:e.quantity-1}):e}))},w=function(e,n){return e.filter((function(e){return e.id!==n.id}))},C={hidden:!0,cartItems:[]},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case O.a.TOGGLE_CART_HIDDEN:return Object(h.a)(Object(h.a)({},e),{},{hidden:!e.hidden});case O.a.ADD_ITEM:return Object(h.a)(Object(h.a)({},e),{},{cartItems:x(e.cartItems,n.payload)});case O.a.REMOVE_ITEM:return Object(h.a)(Object(h.a)({},e),{},{cartItems:j(e.cartItems,n.payload)});case O.a.CLEAR_ITEM_FROM_CART:return Object(h.a)(Object(h.a)({},e),{},{cartItems:w(e.cartItems,n.payload)});case O.a.CLEAR_CART_ITEMS:return Object(h.a)(Object(h.a)({},e),{},{cartItems:[]});default:return e}},T={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"jackets"},{title:"shoes",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shoes"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"mens"}]},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,n=arguments.length>1?arguments[1]:void 0;return n.type,e},I=t(29),S={collections:null,isFetching:!1,errorMessage:void 0},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case I.a.FETCH_COLLECTIONS_START:return Object(h.a)(Object(h.a)({},e),{},{isFetching:!0});case I.a.FETCH_COLLECTIONS_SUCCESS:return Object(h.a)(Object(h.a)({},e),{},{isFetching:!1,collections:n.payload});case I.a.FETCH_COLLECTIONS_FAILURE:return Object(h.a)(Object(h.a)({},e),{},{isFetching:!1,errorMessage:n.payload});default:return e}},L={key:"root",storage:m.a,whitelist:["cart"]},A=Object(d.b)({user:v,cart:k,directory:_,shop:R}),U=Object(p.a)(L,A),M=[f.a],D=Object(d.d)(U,Object(d.c)(d.a.apply(void 0,M),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),N=Object(p.b)(D),z=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function H(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var P,F,G,W,q,V,B,X,Z,J,K,Y,$,Q,ee,ne,te=t(14),re=t.n(te),ae=t(21),ce=t(5),oe=t(6),ie=t(27),le=t(20),ue=t(1),se=t(2),de=Object(se.a)(P||(P=Object(ue.a)(["\n    :root {\n        --primary-color: black;\n        --secondary-color: #4285f4;\n        --white-color: white;\n        --disabled-color: gray;\n        --error-color: red;\n        --default-font-family: 'Open Sans Condensed';\n        --icon-length: 40px; \n    }\n\n    body {\n        margin: 0;\n        padding: 10px 40px 20px 40px;\n        font-family: 'Open Sans Condensed';\n\n        @media screen and (max-width: 767px) {\n            padding: 10px;\n        }\n    }\n\n    code {\n        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n          monospace;\n    }\n    \n    a {\n        text-decoration: none;\n        color: black;\n    }\n\n    p {\n        margin: 0.5em;\n    }\n    \n    button {\n        margin-top: auto;\n    }\n    \n    * {\n        box-sizing: border-box;\n    }\n"]))),pe=t(23),fe=t(18),be=["svgRef","title"];function me(){return(me=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function he(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var ge,Ee,ve,Oe,ye,xe,je,we,Ce,ke,Te,_e,Ie=function(e){var n=e.svgRef,t=e.title,r=he(e,be);return a.a.createElement("svg",me({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:n},r),t?a.a.createElement("title",null,t):null,a.a.createElement("g",null,a.a.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),a.a.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),a.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),a.a.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),a.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),F||(F=a.a.createElement("g",null)),G||(G=a.a.createElement("g",null)),W||(W=a.a.createElement("g",null)),q||(q=a.a.createElement("g",null)),V||(V=a.a.createElement("g",null)),B||(B=a.a.createElement("g",null)),X||(X=a.a.createElement("g",null)),Z||(Z=a.a.createElement("g",null)),J||(J=a.a.createElement("g",null)),K||(K=a.a.createElement("g",null)),Y||(Y=a.a.createElement("g",null)),$||($=a.a.createElement("g",null)),Q||(Q=a.a.createElement("g",null)),ee||(ee=a.a.createElement("g",null)),ne||(ne=a.a.createElement("g",null)))},Se=a.a.forwardRef((function(e,n){return a.a.createElement(Ie,me({svgRef:n},e))})),Re=(t.p,se.c.div(ge||(ge=Object(ue.a)(["\n  width: 60px;\n  height: 60px;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n"])))),Le=se.c.span(Ee||(Ee=Object(ue.a)(["\n  position: absolute;\n  font-size: 14px;\n  font-weight: bold;\n  bottom: 15px;\n"]))),Ae=Object(se.c)(Se)(ve||(ve=Object(ue.a)(["\n  width: var(--icon-length);\n  height: var(--icon-length);\n"]))),Ue=Object(oe.b)({itemCount:fe.c}),Me=Object(l.b)(Ue,(function(e){return{toggleCartHidden:function(){return e(Object(pe.e)())}}}))((function(e){var n=e.toggleCartHidden,t=e.itemCount;return a.a.createElement(Re,{onClick:n,role:"figure"},a.a.createElement(Ae,null),a.a.createElement(Le,null,t))})),De=se.c.div(Oe||(Oe=Object(ue.a)(["\n  width: 100%;\n  display: flex;\n  height: 80px;\n  margin-bottom: 15px;\n"]))),Ne=se.c.img(ye||(ye=Object(ue.a)(["\n  width: 30%;\n"]))),ze=se.c.div(xe||(xe=Object(ue.a)(["\n  width: 70%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  padding: 10px 20px;\n"]))),He=a.a.memo((function(e){var n=e.item,t=n.imageUrl,r=n.price,c=n.name,o=n.quantity;return a.a.createElement(De,null,a.a.createElement(Ne,{src:t,alt:"item"}),a.a.createElement(ze,null,a.a.createElement("span",null,c),a.a.createElement("span",null,o," x $",r)))})),Pe=t(39),Fe=t(40),Ge=se.c.div(je||(je=Object(ue.a)(["\n  position: absolute;\n  width: 240px;\n  height: 340px;\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  border: 1px solid black;\n  background-color: white;\n  top: 90px;\n  right: 40px;\n  z-index: 5;\n"]))),We=se.c.div(we||(we=Object(ue.a)(["\n  height: 240px;\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n"]))),qe=se.c.span(Ce||(Ce=Object(ue.a)(["\n  font-size: 18px;\n  margin: 50px auto;\n"]))),Ve=Object(oe.b)({cartItems:fe.b}),Be=Object(ce.g)(Object(l.b)(Ve)((function(e){var n=e.cartItems,t=e.history,r=e.dispatch;return a.a.createElement(Ge,null,a.a.createElement(We,null,n.length?n.map((function(e){return a.a.createElement(He,{key:e.id,item:e,"data-testid":"cart-item"})})):a.a.createElement(qe,null,Fe.h)),a.a.createElement(Pe.a,{onClick:function(){r(Object(pe.e)()),t.push("/checkout")}},"CHECKOUT"))}))),Xe=["svgRef","title"];function Ze(){return(Ze=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function Je(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var Ke,Ye,$e,Qe,en,nn,tn,rn,an=function(e){var n=e.svgRef,t=e.title,r=Je(e,Xe);return a.a.createElement("svg",Ze({width:"50px",height:"39px",viewBox:"0 0 50 39",ref:n},r),void 0===t?ke||(ke=a.a.createElement("title",null,"Crown Clothing")):t?a.a.createElement("title",null,t):null,Te||(Te=a.a.createElement("desc",null,"Created with Sketch.")),_e||(_e=a.a.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},a.a.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},a.a.createElement("g",{id:"Crown Clothing",transform:"translate(90.000000, 38.000000)"},a.a.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),a.a.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),a.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),a.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),a.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2}))))))},cn=a.a.forwardRef((function(e,n){return a.a.createElement(an,Ze({svgRef:n},e))})),on=(t.p,se.c.div(Ke||(Ke=Object(ue.a)(["\n  height: 70px;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n\n  @media screen and (max-width: 767px) {\n    height: 60px;\n    padding: 10px;\n  }\n"])))),ln=Object(se.c)(i.b)(Ye||(Ye=Object(ue.a)(["\n  height: 100%;\n  width: 70px;\n  padding: 12px;\n  text-align: center;\n\n  @media screen and (max-width: 767px) {\n    width: 50px;\n    padding: 0;\n  }\n"]))),un=se.c.div($e||($e=Object(ue.a)(["\n  width: 50%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n\n  @media screen and (max-width: 767px) {\n    width: 80%;\n  }\n"]))),sn=Object(se.c)(i.b)(Qe||(Qe=Object(ue.a)(["\n  padding: 10px 15px;\n  cursor: pointer;\n"]))),dn=se.c.hr(en||(en=Object(ue.a)(["\n  margin-top: 0;\n  margin-bottom: 25px;\n\n  @media screen and (max-width: 767px) {\n    margin-bottom: 10px;\n  }\n"]))),pn=Object(oe.b)({currentUser:ie.a,hidden:fe.a}),fn=Object(l.b)(pn)((function(e){var n=e.currentUser,t=e.hidden;return a.a.createElement(a.a.Fragment,null,a.a.createElement(on,null,a.a.createElement(ln,{to:"/"},a.a.createElement(cn,null)),a.a.createElement(un,null,a.a.createElement(sn,{to:"/shop"},"SHOP"),n?a.a.createElement(sn,{as:"div",onClick:function(){return le.a.signOut()}},"SIGN OUT"):a.a.createElement(sn,{to:"/signin"},"SIGN IN"),a.a.createElement(Me,null)),!t&&a.a.createElement(Be,null)),a.a.createElement(dn,null))})),bn=t(42),mn=t(56),hn=t(57),gn=t(60),En=t(58),vn=se.c.div(nn||(nn=Object(ue.a)(["\n  height: 60vh;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]))),On=se.c.div(tn||(tn=Object(ue.a)(["\n  display: inline-block;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 40vh;\n  height: 40vh;\n"])),(function(e){var n=e.imageUrl;return"url(".concat(n,")")})),yn=se.c.h2(rn||(rn=Object(ue.a)(["\n  font-size: 28px;\n  color: #2f8e89;\n"]))),xn=function(e){Object(gn.a)(t,e);var n=Object(En.a)(t);function t(){var e;return Object(mn.a)(this,t),(e=n.call(this)).state={hasErrored:!1},e}return Object(hn.a)(t,[{key:"componentDidCatch",value:function(e,n){console.log(e,n)}},{key:"render",value:function(){return this.state.hasErrored?a.a.createElement(vn,null,a.a.createElement(On,{imageUrl:"https://i.imgur.com/yW2W9SC.png"}),a.a.createElement(yn,null,"Sorry this page is broken")):this.props.children}}],[{key:"getDerivedStateFromError",value:function(){return{hasErrored:!0}}}]),t}(a.a.Component),jn=Object(r.lazy)((function(){return t.e(7).then(t.bind(null,93))})),wn=Object(r.lazy)((function(){return t.e(8).then(t.bind(null,96))})),Cn=Object(r.lazy)((function(){return t.e(6).then(t.bind(null,92))})),kn=Object(r.lazy)((function(){return t.e(3).then(t.bind(null,94))})),Tn=Object(oe.b)({currentUser:ie.a}),_n=Object(l.b)(Tn,(function(e){return{setCurrentUser:function(n){return e(function(e){return{type:g,payload:e}}(n))}}}))((function(e){var n=e.setCurrentUser,t=e.currentUser;return Object(r.useEffect)((function(){var e=le.a.onAuthStateChanged(function(){var e=Object(ae.a)(re.a.mark((function e(t){return re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=5;break}return e.next=3,Object(le.c)(t);case 3:e.sent.onSnapshot((function(e){n(Object(h.a)({id:e.id},e.data()))}));case 5:n(t);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}());return function(){e()}}),[n]),a.a.createElement("div",null,a.a.createElement(de,null),a.a.createElement(fn,null),a.a.createElement(ce.d,null,a.a.createElement(xn,null,a.a.createElement(r.Suspense,{fallback:a.a.createElement(bn.a,null)},a.a.createElement(ce.b,{exact:!0,path:"/",component:jn}),a.a.createElement(ce.b,{path:"/shop",component:wn}),a.a.createElement(ce.b,{path:"/checkout",component:kn}),a.a.createElement(ce.b,{exact:!0,path:"/signin",render:function(){return t?a.a.createElement(ce.a,{to:"/"}):a.a.createElement(Cn,null)}})))))}));o.a.render(a.a.createElement(l.a,{store:D},a.a.createElement(i.a,{basename:"/"},a.a.createElement(u.a,{persistor:N},a.a.createElement(s.a,null,a.a.createElement(_n,null))))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/crown-clothing",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/crown-clothing","/service-worker.js");z?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):H(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):H(n,e)}))}}()}},[[61,1,2]]]);
//# sourceMappingURL=main.ef7a071c.chunk.js.map