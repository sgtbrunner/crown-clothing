(this["webpackJsonpcrown-clothing"]=this["webpackJsonpcrown-clothing"]||[]).push([[3],{85:function(e,t,n){"use strict";n.d(t,"b",(function(){return v})),n.d(t,"a",(function(){return E}));var o,r,a,i,l=n(0),c=n.n(l),s=n(86),u=n.n(s),d=n(87),p=n.n(d),f=n(1),h=n(2),b=h.c.div(o||(o=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),m=h.c.span(r||(r=Object(f.a)(["\n  margin: 20px 0;\n  font-size: 18px;\n  text-align: center;\n"]))),g=h.c.img(a||(a=Object(f.a)(["\n  width: var(--icon-length);\n  height: var(--icon-length);\n"]))),y=h.c.button(i||(i=Object(f.a)(["\n  padding: 5px 15px;\n  letter-spacing: 0.5px;\n  font-size: 13px;\n  font-family: var(--default-font-family);\n  font-weight: bolder;\n  background-color: var(--white-color);\n  color: var(--primary-color);\n  border: 1px solid var(--primary-color);\n  cursor: pointer;\n  &:hover {\n    background-color: var(--primary-color);\n    color: var(--white-color);\n    border: 1px solid var(--white-color);\n  }\n"]))),v="success",E="error",O={error:u.a,success:p.a},x=function(e){return[v,E].some((function(t){return t===e}))};t.c=function(e){var t=e.children,n=e.type,o=e.onButtonClick;return c.a.createElement(b,{role:"alert"},c.a.createElement(g,{id:"alert-icon",src:x(n)?O[n]:null,alt:"alert-icon"}),c.a.createElement(m,null,t),c.a.createElement(y,{onClick:o},"OK"))}},86:function(e,t,n){e.exports=n.p+"static/media/error-icon.e708d1a0.svg"},87:function(e,t,n){e.exports=n.p+"static/media/success-icon.03bce88c.svg"},90:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=l(n(0)),i=l(n(17));function l(e){return e&&e.__esModule?e:{default:e}}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=!1,u=!1,d=!1,p=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.onScriptLoaded=function(){t.stripeHandler||(t.stripeHandler=StripeCheckout.configure({key:n.props.stripeKey}),n.hasPendingClick&&n.showStripeDialog())},n.onScriptError=function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];n.hideLoadingDialog(),n.props.onScriptError&&n.props.onScriptError.apply(n,t)},n.onClosed=function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];n._isMounted&&n.setState({open:!1}),n.props.closed&&n.props.closed.apply(n,t)},n.onOpened=function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];n.setState({open:!0}),n.props.opened&&n.props.opened.apply(n,t)},n.getConfig=function(){return["token","image","name","description","amount","locale","currency","panelLabel","zipCode","shippingAddress","billingAddress","email","allowRememberMe","bitcoin","alipay","alipayReusable"].reduce((function(e,t){return o({},e,n.props.hasOwnProperty(t)&&c({},t,n.props[t]))}),{opened:n.onOpened,closed:n.onClosed})},n.onClick=function(){if(!n.props.disabled)if(d)try{throw new Error("Tried to call onClick, but StripeCheckout failed to load")}catch(e){}else t.stripeHandler?n.showStripeDialog():(n.showLoadingDialog(),n.hasPendingClick=!0)},n.handleOnMouseDown=function(){n.setState({buttonActive:!0})},n.handleOnMouseUp=function(){n.setState({buttonActive:!1})},n.state={open:!1,buttonActive:!1},n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){var e=this;if(this._isMounted=!0,!u&&!s){s=!0;var t=document.createElement("script");"function"===typeof this.props.onScriptTagCreated&&this.props.onScriptTagCreated(t),t.src="https://checkout.stripe.com/checkout.js",t.async=1,this.loadPromise=function(){var n=!1,o=new Promise((function(n,o){t.onload=function(){u=!0,s=!1,n(),e.onScriptLoaded()},t.onerror=function(t){d=!0,s=!1,o(t),e.onScriptError(t)}}));return{promise:new Promise((function(e,t){o.then((function(){return n?t({isCanceled:!0}):e()})),o.catch((function(e){return t(n?{isCanceled:!0}:e)}))})),cancel:function(){n=!0}}}(),this.loadPromise.promise.then(this.onScriptLoaded).catch(this.onScriptError),document.body.appendChild(t)}}},{key:"componentDidUpdate",value:function(){s||this.updateStripeHandler()}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,this.loadPromise&&this.loadPromise.cancel(),t.stripeHandler&&this.state.open&&t.stripeHandler.close()}},{key:"updateStripeHandler",value:function(){t.stripeHandler&&!this.props.reconfigureOnUpdate||(t.stripeHandler=StripeCheckout.configure({key:this.props.stripeKey}))}},{key:"showLoadingDialog",value:function(){if(this.props.showLoadingDialog){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];this.props.showLoadingDialog.apply(this,t)}}},{key:"hideLoadingDialog",value:function(){if(this.props.hideLoadingDialog){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];this.props.hideLoadingDialog.apply(this,t)}}},{key:"showStripeDialog",value:function(){this.hideLoadingDialog(),t.stripeHandler.open(this.getConfig())}},{key:"renderDefaultStripeButton",value:function(){return a.default.createElement("button",o({},c({},this.props.triggerEvent,this.onClick),{className:this.props.className,onMouseDown:this.handleOnMouseDown,onFocus:this.handleOnMouseDown,onMouseUp:this.handleOnMouseUp,onMouseOut:this.handleOnMouseUp,onBlur:this.handleOnMouseUp,style:o({},{overflow:"hidden",display:"inline-block",background:"linear-gradient(#28a0e5,#015e94)",border:0,padding:1,textDecoration:"none",borderRadius:5,boxShadow:"0 1px 0 rgba(0,0,0,0.2)",cursor:"pointer",visibility:"visible",userSelect:"none"},this.state.buttonActive&&{background:"#005d93"},this.props.style)}),a.default.createElement("span",{style:o({},{backgroundImage:"linear-gradient(#7dc5ee,#008cdd 85%,#30a2e4)",fontFamily:'"Helvetica Neue",Helvetica,Arial,sans-serif',fontSize:14,position:"relative",padding:"0 12px",display:"block",height:30,lineHeight:"30px",color:"#fff",fontWeight:"bold",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.25)",textShadow:"0 -1px 0 rgba(0,0,0,0.25)",borderRadius:4},this.state.buttonActive&&{color:"#eee",boxShadow:"inset 0 1px 0 rgba(0,0,0,0.1)",backgroundImage:"linear-gradient(#008cdd,#008cdd 85%,#239adf)"},this.props.textStyle)},this.props.label))}},{key:"renderDisabledButton",value:function(){return a.default.createElement("button",{disabled:!0,style:{background:"rgba(0,0,0,0.2)",overflow:"hidden",display:"inline-block",border:0,padding:1,textDecoration:"none",borderRadius:5,userSelect:"none"}},a.default.createElement("span",{style:{boxShadow:"inset 0 1px 0 rgba(255,255,255,0.25)",fontFamily:'"Helvetica Neue",Helvetica,Arial,sans-serif',fontSize:14,position:"relative",padding:"0 12px",display:"block",height:30,lineHeight:"30px",borderRadius:4,color:"#999",background:"#f8f9fa",textShadow:"0 1px 0 rgba(255,255,255,0.5)"}},this.props.label))}},{key:"render",value:function(){!0!==this.props.desktopShowModal||this.state.open?!1===this.props.desktopShowModal&&this.state.open&&t.stripeHandler.close():this.onClick();var e=this.props.ComponentClass;return this.props.children?a.default.createElement(e,o({},c({},this.props.triggerEvent,this.onClick),{children:this.props.children})):this.props.disabled?this.renderDisabledButton():this.renderDefaultStripeButton()}}]),t}(a.default.Component);p.defaultProps={className:"StripeCheckout",label:"Pay With Card",locale:"auto",ComponentClass:"span",reconfigureOnUpdate:!1,triggerEvent:"onClick"},p.propTypes={desktopShowModal:i.default.bool,triggerEvent:i.default.oneOf(["onClick","onTouchTap","onTouchStart"]),label:i.default.string,style:i.default.object,textStyle:i.default.object,disabled:i.default.bool,ComponentClass:i.default.string,showLoadingDialog:i.default.func,hideLoadingDialog:i.default.func,onScriptError:i.default.func,onScriptTagCreated:i.default.func,reconfigureOnUpdate:i.default.bool,stripeKey:i.default.string.isRequired,token:i.default.func.isRequired,name:i.default.string,description:i.default.string,image:i.default.string,amount:i.default.number,locale:i.default.oneOf(["auto","zh","da","nl","en","fr","de","it","ja","no","es","sv"]),currency:i.default.oneOf(["AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BIF","BMD","BND","BOB","BRL","BSD","BWP","BZD","CAD","CDF","CHF","CLP","CNY","COP","CRC","CVE","CZK","DJF","DKK","DOP","DZD","EEK","EGP","ETB","EUR","FJD","FKP","GBP","GEL","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","INR","ISK","JMD","JPY","KES","KGS","KHR","KMF","KRW","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LTL","LVL","MAD","MDL","MGA","MKD","MNT","MOP","MRO","MUR","MVR","MWK","MXN","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SEK","SGD","SHP","SLL","SOS","SRD","STD","SVC","SZL","THB","TJS","TOP","TRY","TTD","TWD","TZS","UAH","UGX","USD","UYU","UZS","VND","VUV","WST","XAF","XCD","XOF","XPF","YER","ZAR","ZMW"]),panelLabel:i.default.string,zipCode:i.default.bool,billingAddress:i.default.bool,shippingAddress:i.default.bool,email:i.default.string,allowRememberMe:i.default.bool,bitcoin:i.default.bool,alipay:i.default.oneOf(["auto",!0,!1]),alipayReusable:i.default.bool,opened:i.default.func,closed:i.default.func},p._isMounted=!1,t.default=p},91:function(e,t,n){e.exports=n.p+"static/media/crown.5be67c1b.svg"},94:function(e,t,n){"use strict";n.r(t);var o,r,a,i,l,c,s,u,d,p,f,h,b,m,g,y=n(0),v=n.n(y),E=n(12),O=n(6),x=n(23),S=n(1),w=n(2),D=w.c.div(o||(o=Object(S.a)(["\n  width: 100%;\n  display: flex;\n  min-height: 100px;\n  border-bottom: 1px solid darkgrey;\n  padding: 15px 0;\n  font-size: 20px;\n  align-items: center;\n"]))),C=w.c.div(r||(r=Object(S.a)(["\n  width: 23%;\n  padding-right: 15px;\n  img {\n    width: 100%;\n    height: 100%;\n  }\n"]))),k=w.c.span(a||(a=Object(S.a)(["\n  width: 23%;\n"]))),P=Object(w.c)(k)(i||(i=Object(S.a)(["\n  display: flex;\n\n  span {\n    text-align: center;\n    padding-top: 2px;\n  }\n  div {\n    cursor: pointer;\n    user-select: none;\n  }\n"]))),j=w.c.div(l||(l=Object(S.a)(["\n  padding-left: 16px;\n  cursor: pointer;\n  color: var(--error-color);\n"]))),M=Object(E.b)(null,(function(e){return{clearItemFromCart:function(t){return e(Object(x.c)(t))},addItem:function(t){return e(Object(x.a)(t))},removeItem:function(t){return e(Object(x.d)(t))}}}))((function(e){var t=e.cartItem,n=e.clearItemFromCart,o=e.addItem,r=e.removeItem,a=t.name,i=t.quantity,l=t.price,c=t.imageUrl;return v.a.createElement(D,null,v.a.createElement(C,null,v.a.createElement("img",{alt:"checkout-item",src:c})),v.a.createElement(k,null,a),v.a.createElement(P,null,v.a.createElement("div",{role:"button",onClick:function(){return r(t)}},"\u276e"),v.a.createElement(k,null,i),v.a.createElement("div",{role:"button",onClick:function(){return o(t)}},"\u276f")),v.a.createElement(k,null,"$".concat(l)),v.a.createElement(j,{role:"button",onClick:function(){return n(t)}},"\u2716"))})),L=n(90),A=n.n(L),R=n(91),N=n.n(R),H=n(85),K=n(41),T=Object(E.b)(null,(function(e){return{clearCartItems:function(){return e(Object(x.b)())}}}))((function(e){var t=e.price,n=e.clearCartItems,o=100*t,r=Object(K.b)(),a=r.setDialog,i=r.unsetDialog;return v.a.createElement(A.a,{label:"Pay Now",name:"Crown Clothing Ltd.",image:N.a,panelLabel:"Pay Now",description:"Your total is $".concat(t),amount:o,token:function(e){a(v.a.createElement(H.c,{type:H.b,onButtonClick:i},"Payment Successful! Your order number is ",e.created,".")),n()},stripeKey:"pk_test_XKUpwPvvEnNxMsSzoLm8H3i8",allowRememberMe:!0,billingAddress:!0,shippingAddress:!0})})),B=n(18),U=n(27),I=n(40),F=n(16),G=w.c.div(c||(c=Object(S.a)(["\n  width: 55%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 50px auto 0;\n  padding-bottom: 40px;\n  button {\n    margin-left: auto;\n    margin-top: 50px;\n  }\n  @media screen and (max-width: 767px) {\n    width: 90%;\n  }\n"]))),_=w.c.div(s||(s=Object(S.a)(["\n  width: 100%;\n  height: 40px;\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 1px solid darkgrey;\n"]))),z=w.c.div(u||(u=Object(S.a)(["\n  text-transform: capitalize;\n  width: 23%;\n  &:last-child {\n    width: 8%;\n  }\n  @media screen and (max-width: 767px) {\n    width: 22%\n    &:last-child {\n      width: 12%;\n    }\n  }\n"]))),Z=w.c.div(d||(d=Object(S.a)(["\n  margin-top: 30px;\n  margin-left: auto;\n  font-size: 36px;\n"]))),W=w.c.div(p||(p=Object(S.a)(["\n  text-align: center;\n  margin-top: 40px;\n  font-size: 24px;\n  color: var(--error-color);\n"]))),Y=w.c.div(f||(f=Object(S.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  gap: 16;\n  margin-top: 100px;\n"]))),V=w.c.p(h||(h=Object(S.a)(["\n  font-size: 36px;\n"]))),J=w.c.p(b||(b=Object(S.a)(["\n  font-size: 24px;\n"]))),X=w.c.p(m||(m=Object(S.a)(["\n  font-size: 18px;\n"]))),q=Object(w.c)(F.b)(g||(g=Object(S.a)(["\n  &:hover {\n    text-decoration: underline;\n  }\n"]))),Q=function(e){var t=e.cartItems,n=e.totalPrice,o=e.user;return v.a.createElement(G,null,t.length?v.a.createElement(v.a.Fragment,null,v.a.createElement(_,null,v.a.createElement(z,null,v.a.createElement("span",null,"Product")),v.a.createElement(z,null,v.a.createElement("span",null,"Description")),v.a.createElement(z,null,v.a.createElement("span",null,"Quantity")),v.a.createElement(z,null,v.a.createElement("span",null,"Price")),v.a.createElement(z,null,v.a.createElement("span",null,"Remove"))),t.map((function(e){return v.a.createElement(M,{key:e.id,cartItem:e})})),v.a.createElement(Z,null,"TOTAL: $",n),(null===o||void 0===o?void 0:o.id)?v.a.createElement(v.a.Fragment,null,v.a.createElement(W,null,"* Please use the following test credit card for payments *",v.a.createElement("br",null),"4242 4242 4242 4242 - Exp: 12/29 - CVC: 123"),v.a.createElement(T,{price:n})):v.a.createElement(Y,null,v.a.createElement(J,null,"Please"," ",v.a.createElement(q,{to:"/signin"},"sign in or sign up")," ","to proceed"))):v.a.createElement(Y,null,v.a.createElement(V,null,I.h),v.a.createElement(X,null,"Go back to the"," ",v.a.createElement(q,{to:"/"},"homepage")," or shop for"," ",v.a.createElement(q,{to:"/shop"},"other products"))))},$=Object(O.b)({cartItems:B.b,totalPrice:B.d,user:U.a});Q.defaultProps={userIsLoggedIn:{}};t.default=Object(E.b)($)(Q)}}]);
//# sourceMappingURL=3.1ee27144.chunk.js.map