(this["webpackJsonpcrown-clothing"]=this["webpackJsonpcrown-clothing"]||[]).push([[0],{13:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var r={TOGGLE_CART_HIDDEN:"TOGGLE_CART_HIDDEN",ADD_ITEM:"ADD_ITEM",REMOVE_ITEM:"REMOVE_ITEM",CLEAR_ITEM_FROM_CART:"CLEAR_ITEM_FROM_CART"}},19:function(e,n,t){"use strict";t.d(n,"b",(function(){return c})),t.d(n,"a",(function(){return i})),t.d(n,"c",(function(){return o})),t.d(n,"d",(function(){return l}));var r=t(6),a=function(e){return e.cart},c=Object(r.a)([a],(function(e){return e.cartItems})),i=Object(r.a)([a],(function(e){return e.hidden})),o=Object(r.a)([c],(function(e){return e.reduce((function(e,n){return e+n.quantity}),0)})),l=Object(r.a)([c],(function(e){return e.reduce((function(e,n){return e+n.price*n.quantity}),0)}))},22:function(e,n,t){"use strict";t.d(n,"c",(function(){return u})),t.d(n,"b",(function(){return s})),t.d(n,"a",(function(){return d})),t.d(n,"d",(function(){return f})),t.d(n,"e",(function(){return b}));var r=t(14),a=t.n(r),c=t(1),i=t(23),o=t(20),l=t.n(o);t(71),t(74);l.a.initializeApp({apiKey:"AIzaSyD6nwOlZhDgTN0AzNZqdZuM3eMxSp8uUdo",authDomain:"crown-clothing-db-9b86e.firebaseapp.com",databaseURL:"https://crown-clothing-db-9b86e.firebaseio.com",projectId:"crown-clothing-db-9b86e",storageBucket:"crown-clothing-db-9b86e.appspot.com",messagingSenderId:"940396830305",appId:"1:940396830305:web:832ce883ef7566fd141420"});var u=function(){var e=Object(i.a)(a.a.mark((function e(n,t){var r,i,o,l;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}return e.abrupt("return");case 2:return r=f.doc("users/".concat(n.uid)),e.next=5,r.get();case 5:if(e.sent.exists){e.next=17;break}return i=n.displayName,o=n.email,l=new Date,e.prev=9,e.next=12,r.set(Object(c.a)({displayName:i,email:o,createdAt:l},t));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("error creating user",e.t0.message);case 17:return e.abrupt("return",r);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(n,t){return e.apply(this,arguments)}}(),s=function(e){return e.docs.map((function(e){var n=e.data(),t=n.title,r=n.items;return{routeName:encodeURI(t.toLowerCase()),id:e.id,title:t,items:r}})).reduce((function(e,n){return e[n.title.toLowerCase()]=n,e}),{})},d=l.a.auth(),f=l.a.firestore(),p=new l.a.auth.GoogleAuthProvider;p.setCustomParameters({prompt:"select_account"});var b=function(){return d.signInWithPopup(p)};l.a},25:function(e,n,t){"use strict";t.d(n,"d",(function(){return a})),t.d(n,"a",(function(){return c})),t.d(n,"c",(function(){return i})),t.d(n,"b",(function(){return o}));var r=t(13),a=function(){return{type:r.a.TOGGLE_CART_HIDDEN}},c=function(e){return{type:r.a.ADD_ITEM,payload:e}},i=function(e){return{type:r.a.REMOVE_ITEM,payload:e}},o=function(e){return{type:r.a.CLEAR_ITEM_FROM_CART,payload:e}}},28:function(e,n,t){"use strict";n.a={FETCH_COLLECTIONS_START:"FETCH_COLLECTIONS_START",FETCH_COLLECTIONS_SUCCESS:"FETCH_COLLECTIONS_SUCCESS",FETCH_COLLECTIONS_FAILURE:"FETCH_COLLECTIONS_FAILURE"}},37:function(e,n,t){"use strict";var r=t(38),a=t(0),c=t.n(a);t(76);n.a=function(e){var n=e.children,t=e.isGoogleSignIn,a=e.inverted,i=Object(r.a)(e,["children","isGoogleSignIn","inverted"]);return c.a.createElement("button",Object.assign({className:"".concat(a?"inverted":""," ").concat(t?"google-sign-in":""," custom-button")},i),n)}},39:function(e,n,t){"use strict";var r=t(0),a=t.n(r),c=t(3),i=t(4);function o(){var e=Object(c.a)(["\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n  border: 3px solid rgba(195, 195, 195, 0.6);\n  border-radius: 50%;\n  border-top-color: #636767;\n  animation: spin 1s ease-in-out infinite;\n  -webkit-animation: spin 1s ease-in-out infinite;\n  @keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n  @-webkit-keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n"]);return o=function(){return e},e}function l(){var e=Object(c.a)(["\n  height: 60vh;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return l=function(){return e},e}var u=i.b.div(l()),s=i.b.div(o());n.a=function(){return a.a.createElement(u,null,a.a.createElement(s,null))}},58:function(e,n,t){e.exports=t(78)},69:function(e,n,t){},76:function(e,n,t){},78:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(27),i=t.n(c),o=t(16),l=t(12),u=t(47),s=t(10),d=t(29),f=t(48),p=t(49),b=t.n(p),m=t(1),h="SET_CURRENT_USER",g={currentUser:null},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case h:return Object(m.a)(Object(m.a)({},e),{},{currentUser:n.payload});default:return e}},v=t(13),O=t(56),y=function(e,n){return e.find((function(e){return e.id===n.id}))?e.map((function(e){return e.id===n.id?Object(m.a)(Object(m.a)({},e),{},{quantity:e.quantity+1}):e})):[].concat(Object(O.a)(e),[Object(m.a)(Object(m.a)({},n),{},{quantity:1})])},j=function(e,n){return 1===e.find((function(e){return e.id===n.id})).quantity?x(e,n):e.map((function(e){return e.id===n.id?Object(m.a)(Object(m.a)({},e),{},{quantity:e.quantity-1}):e}))},x=function(e,n){return e.filter((function(e){return e.id!==n.id}))},w={hidden:!0,cartItems:[]},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case v.a.TOGGLE_CART_HIDDEN:return Object(m.a)(Object(m.a)({},e),{},{hidden:!e.hidden});case v.a.ADD_ITEM:return Object(m.a)(Object(m.a)({},e),{},{cartItems:y(e.cartItems,n.payload)});case v.a.REMOVE_ITEM:return Object(m.a)(Object(m.a)({},e),{},{cartItems:j(e.cartItems,n.payload)});case v.a.CLEAR_ITEM_FROM_CART:return Object(m.a)(Object(m.a)({},e),{},{cartItems:x(e.cartItems,n.payload)});default:return e}},T={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"jackets"},{title:"shoes",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shoes"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"mens"}]},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,n=arguments.length>1?arguments[1]:void 0;return n.type,e},k=t(28),I={collections:null,isFetching:!1,errorMessage:void 0},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case k.a.FETCH_COLLECTIONS_START:return Object(m.a)(Object(m.a)({},e),{},{isFetching:!0});case k.a.FETCH_COLLECTIONS_SUCCESS:return Object(m.a)(Object(m.a)({},e),{},{isFetching:!1,collections:n.payload});case k.a.FETCH_COLLECTIONS_FAILURE:return Object(m.a)(Object(m.a)({},e),{},{isFetching:!1,errorMessage:n.payload});default:return e}},R={key:"root",storage:b.a,whitelist:["cart"]},U=Object(s.c)({user:E,cart:C,directory:_,shop:S}),L=Object(d.a)(R,U),A=[f.a],N=Object(s.e)(L,Object(s.d)(s.a.apply(void 0,A),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),M=Object(d.b)(N),D=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function H(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}t(69);var F=t(14),z=t.n(F),G=t(23),P=t(5),W=t(6),q=Object(W.a)([function(e){return e.user}],(function(e){return e.currentUser})),V=t(22),B=t(3),X=t(4);function Z(){var e=Object(B.a)(["\n    body {\n        font-family: 'Open Sans Condensed';\n        padding: 20px 40px;\n\n        @media screen and (max-width: 767px) {\n            padding: 10px;\n        }\n    }\n    \n    a {\n        text-decoration: none;\n        color: black;\n    }\n    \n    button {\n        margin-top: auto;\n    }\n    \n    * {\n        box-sizing: border-box;\n    }\n"]);return Z=function(){return e},e}var J=Object(X.a)(Z()),K=t(25),$=t(19);function Q(){return(Q=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function Y(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var ee=a.a.createElement("g",null),ne=a.a.createElement("g",null),te=a.a.createElement("g",null),re=a.a.createElement("g",null),ae=a.a.createElement("g",null),ce=a.a.createElement("g",null),ie=a.a.createElement("g",null),oe=a.a.createElement("g",null),le=a.a.createElement("g",null),ue=a.a.createElement("g",null),se=a.a.createElement("g",null),de=a.a.createElement("g",null),fe=a.a.createElement("g",null),pe=a.a.createElement("g",null),be=a.a.createElement("g",null),me=function(e){var n=e.svgRef,t=e.title,r=Y(e,["svgRef","title"]);return a.a.createElement("svg",Q({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:n},r),t?a.a.createElement("title",null,t):null,a.a.createElement("g",null,a.a.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),a.a.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),a.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),a.a.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),a.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),ee,ne,te,re,ae,ce,ie,oe,le,ue,se,de,fe,pe,be)},he=a.a.forwardRef((function(e,n){return a.a.createElement(me,Q({svgRef:n},e))}));t.p;function ge(){var e=Object(B.a)(["\n  width: 36px;\n  height: 36px;\n"]);return ge=function(){return e},e}function Ee(){var e=Object(B.a)(["\n  position: absolute;\n  font-size: 14px;\n  font-weight: bold;\n  bottom: 15px;\n"]);return Ee=function(){return e},e}function ve(){var e=Object(B.a)(["\n  width: 60px;\n  height: 60px;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n"]);return ve=function(){return e},e}var Oe=X.b.div(ve()),ye=X.b.span(Ee()),je=Object(X.b)(he)(ge()),xe=Object(W.b)({itemCount:$.c}),we=Object(l.b)(xe,(function(e){return{toggleCartHidden:function(){return e(Object(K.d)())}}}))((function(e){var n=e.toggleCartHidden,t=e.itemCount;return a.a.createElement(Oe,{onClick:n},a.a.createElement(je,{className:"shopping-icon"}),a.a.createElement(ye,{className:"item-count"},t))}));function Ce(){var e=Object(B.a)(["\n  width: 70%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  padding: 10px 20px;\n"]);return Ce=function(){return e},e}function Te(){var e=Object(B.a)(["\n  width: 30%;\n"]);return Te=function(){return e},e}function _e(){var e=Object(B.a)(["\n  width: 100%;\n  display: flex;\n  height: 80px;\n  margin-bottom: 15px;\n"]);return _e=function(){return e},e}var ke=X.b.div(_e()),Ie=X.b.img(Te()),Se=X.b.div(Ce()),Re=a.a.memo((function(e){var n=e.item,t=n.imageUrl,r=n.price,c=n.name,i=n.quantity;return a.a.createElement(ke,null,a.a.createElement(Ie,{src:t,alt:"item"}),a.a.createElement(Se,null,a.a.createElement("span",{className:"name"},c),a.a.createElement("span",{className:"price"},i," x $",r)))})),Ue=t(37);function Le(){var e=Object(B.a)(["\n  font-size: 18px;\n  margin: 50px auto;\n"]);return Le=function(){return e},e}function Ae(){var e=Object(B.a)(["\n  height: 240px;\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n"]);return Ae=function(){return e},e}function Ne(){var e=Object(B.a)(["\n  position: absolute;\n  width: 240px;\n  height: 340px;\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  border: 1px solid black;\n  background-color: white;\n  top: 90px;\n  right: 40px;\n  z-index: 5;\n"]);return Ne=function(){return e},e}var Me=X.b.div(Ne()),De=X.b.div(Ae()),He=X.b.span(Le()),Fe=Object(W.b)({cartItems:$.b}),ze=Object(P.g)(Object(l.b)(Fe)((function(e){var n=e.cartItems,t=e.history,r=e.dispatch;return a.a.createElement(Me,null,a.a.createElement(De,null,n.length?n.map((function(e){return a.a.createElement(Re,{key:e.id,item:e})})):a.a.createElement(He,null,"Your cart is empty!")),a.a.createElement(Ue.a,{onClick:function(){r(Object(K.d)()),t.push("/checkout")}},"GO TO CHECKOUT"))})));function Ge(){return(Ge=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function Pe(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var We=a.a.createElement("title",null,"Group"),qe=a.a.createElement("desc",null,"Created with Sketch."),Ve=a.a.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},a.a.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},a.a.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},a.a.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),a.a.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),a.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),a.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),a.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2})))),Be=function(e){var n=e.svgRef,t=e.title,r=Pe(e,["svgRef","title"]);return a.a.createElement("svg",Ge({width:"50px",height:"39px",viewBox:"0 0 50 39",ref:n},r),void 0===t?We:t?a.a.createElement("title",null,t):null,qe,Ve)},Xe=a.a.forwardRef((function(e,n){return a.a.createElement(Be,Ge({svgRef:n},e))}));t.p;function Ze(){var e=Object(B.a)(["\n  padding: 10px 15px;\n  cursor: pointer;\n"]);return Ze=function(){return e},e}function Je(){var e=Object(B.a)(["\n  width: 50%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n\n  @media screen and (max-width: 767px) {\n    width: 80%;\n  }\n"]);return Je=function(){return e},e}function Ke(){var e=Object(B.a)(["\n  height: 100%;\n  width: 70px;\n  padding: 25px;\n\n  @media screen and (max-width: 767px) {\n    width: 50px;\n    padding: 0;\n  }\n"]);return Ke=function(){return e},e}function $e(){var e=Object(B.a)(["\n  height: 70px;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 25px;\n\n  @media screen and (max-width: 767px) {\n    height: 60px;\n    padding: 10px;\n    margin-bottom: 10px;\n  }\n"]);return $e=function(){return e},e}var Qe=X.b.div($e()),Ye=Object(X.b)(o.b)(Ke()),en=X.b.div(Je()),nn=Object(X.b)(o.b)(Ze()),tn=Object(W.b)({currentUser:q,hidden:$.a}),rn=Object(l.b)(tn)((function(e){var n=e.currentUser,t=e.hidden;return a.a.createElement(Qe,null,a.a.createElement(Ye,{to:"/"},a.a.createElement(Xe,{className:"logo"})),a.a.createElement(en,null,a.a.createElement(nn,{to:"/shop"},"SHOP"),a.a.createElement(nn,{to:"/shop"},"CONTACT"),n?a.a.createElement(nn,{as:"div",onClick:function(){return V.a.signOut()}},"SIGN OUT"):a.a.createElement(nn,{to:"/signin"},"SIGN IN"),a.a.createElement(we,null)),t?null:a.a.createElement(ze,null))})),an=t(39),cn=t(53),on=t(54),ln=t(57),un=t(55);function sn(){var e=Object(B.a)(["\n  font-size: 28px;\n  color: #2f8e89;\n"]);return sn=function(){return e},e}function dn(){var e=Object(B.a)(["\n  display: inline-block;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 40vh;\n  height: 40vh;\n"]);return dn=function(){return e},e}function fn(){var e=Object(B.a)(["\n  height: 60vh;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]);return fn=function(){return e},e}var pn=X.b.div(fn()),bn=X.b.div(dn(),(function(e){var n=e.imageUrl;return"url(".concat(n,")")})),mn=X.b.h2(sn()),hn=function(e){Object(ln.a)(t,e);var n=Object(un.a)(t);function t(){var e;return Object(cn.a)(this,t),(e=n.call(this)).state={hasErrored:!1},e}return Object(on.a)(t,[{key:"componentDidCatch",value:function(e,n){console.log(e,n)}},{key:"render",value:function(){return this.state.hasErrored?a.a.createElement(pn,null,a.a.createElement(bn,{imageUrl:"https://i.imgur.com/yW2W9SC.png"}),a.a.createElement(mn,null,"Sorry this page is broken")):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasErrored:!0}}}]),t}(a.a.Component),gn=Object(r.lazy)((function(){return t.e(7).then(t.bind(null,93))})),En=Object(r.lazy)((function(){return t.e(8).then(t.bind(null,96))})),vn=Object(r.lazy)((function(){return t.e(3).then(t.bind(null,92))})),On=Object(r.lazy)((function(){return t.e(6).then(t.bind(null,94))})),yn=Object(W.b)({currentUser:q}),jn=Object(l.b)(yn,(function(e){return{setCurrentUser:function(n){return e(function(e){return{type:h,payload:e}}(n))}}}))((function(e){var n=e.setCurrentUser,t=e.currentUser;return Object(r.useEffect)((function(){var e=V.a.onAuthStateChanged(function(){var e=Object(G.a)(z.a.mark((function e(t){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=5;break}return e.next=3,Object(V.c)(t);case 3:e.sent.onSnapshot((function(e){n(Object(m.a)({id:e.id},e.data()))}));case 5:n(t);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}());return function(){e()}}),[n]),a.a.createElement("div",null,a.a.createElement(J,null),a.a.createElement(rn,null),a.a.createElement(P.d,null,a.a.createElement(hn,null,a.a.createElement(r.Suspense,{fallback:a.a.createElement(an.a,null)},a.a.createElement(P.b,{exact:!0,path:"/",component:gn}),a.a.createElement(P.b,{path:"/shop",component:En}),a.a.createElement(P.b,{path:"/checkout",component:On}),a.a.createElement(P.b,{exact:!0,path:"/signin",render:function(){return t?a.a.createElement(P.a,{to:"/"}):a.a.createElement(vn,null)}})))))}));i.a.render(a.a.createElement(l.a,{store:N},a.a.createElement(o.a,{basename:"/"},a.a.createElement(u.a,{persistor:M},a.a.createElement(jn,null)))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/crown-clothing",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/crown-clothing","/service-worker.js");D?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):H(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):H(n,e)}))}}()}},[[58,1,2]]]);
//# sourceMappingURL=main.3432e9f4.chunk.js.map