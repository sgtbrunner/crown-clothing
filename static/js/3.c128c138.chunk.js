(this["webpackJsonpcrown-clothing"]=this["webpackJsonpcrown-clothing"]||[]).push([[3],{84:function(e,a,n){},85:function(e,a,n){},86:function(e,a,n){},87:function(e,a,n){},92:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),l=n(40),c=n(1),i=n(14),s=n.n(i),o=n(23);var u=n(42);function m(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],t=!0,r=!1,l=void 0;try{for(var c,i=e[Symbol.iterator]();!(t=(c=i.next()).done)&&(n.push(c.value),!a||n.length!==a);t=!0);}catch(s){r=!0,l=s}finally{try{t||null==i.return||i.return()}finally{if(r)throw l}}return n}}(e,a)||Object(u.a)(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var p=n(38),d=(n(84),function(e){var a=e.handleChange,n=e.label,t=Object(p.a)(e,["handleChange","label"]);return r.a.createElement("div",{className:"group"},r.a.createElement("input",Object.assign({className:"form-input",onChange:a},t)),n?r.a.createElement("label",{className:"".concat(t.value.length?"shrink":""," form-input-label")},n):null)}),f=n(37),b=n(22),h=(n(85),function(){var e={email:"",password:""},a=m(Object(t.useState)(e),2),n=a[0],i=a[1],u=n.email,p=n.password,h=function(){var a=Object(o.a)(s.a.mark((function a(n){return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:n.preventDefault();try{b.a.signInWithEmailAndPassword(u,p),i(e)}catch(t){console.log(t)}case 2:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),v=function(){var e=Object(o.a)(s.a.mark((function e(a){var t,r,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=a.target,r=t.value,o=t.name,i(Object(c.a)(Object(c.a)({},n),{},Object(l.a)({},o,r)));case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"sign-in"},r.a.createElement("h2",null,"I already have an account"),r.a.createElement("span",null,"Sign in with your email and password"),r.a.createElement("form",{onSubmit:h},r.a.createElement(d,{name:"email",label:"Email",type:"email",handleChange:v,value:u,required:!0}),r.a.createElement(d,{name:"password",label:"Password",type:"password",handleChange:v,value:p,required:!0}),r.a.createElement("div",{className:"buttons"},r.a.createElement(f.a,{type:"submit"}," Sign in "),r.a.createElement(f.a,{type:"button",onClick:b.e,isGoogleSignIn:!0},"Sign in with Google"))))}),v=(n(86),function(){var e={displayName:"",email:"",password:"",confirmPassword:""},a=m(Object(t.useState)(e),2),n=a[0],i=a[1],u=n.displayName,p=n.email,h=n.password,v=n.confirmPassword,w=function(){var a=Object(o.a)(s.a.mark((function a(n){var t,r;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(n.preventDefault(),h===v){a.next=4;break}return alert("passwords don't match"),a.abrupt("return");case 4:return a.prev=4,a.next=7,b.a.createUserWithEmailAndPassword(p,h);case 7:return t=a.sent,r=t.user,a.next=11,Object(b.c)(r,{displayName:u});case 11:i(e),a.next=17;break;case 14:a.prev=14,a.t0=a.catch(4),console.error(a.t0);case 17:case"end":return a.stop()}}),a,null,[[4,14]])})));return function(e){return a.apply(this,arguments)}}(),y=function(e){var a=e.target,t=a.name,r=a.value;i(Object(c.a)(Object(c.a)({},n),{},Object(l.a)({},t,r)))};return r.a.createElement("div",{className:"sign-up"},r.a.createElement("h2",{className:"title"},"I do not have a account"),r.a.createElement("span",null,"Sign up with your email and password"),r.a.createElement("form",{className:"sign-up-form",onSubmit:w},r.a.createElement(d,{name:"displayName",label:"Display Name",type:"text",onChange:y,value:u,required:!0}),r.a.createElement(d,{name:"email",label:"Email",type:"email",onChange:y,value:p,required:!0}),r.a.createElement(d,{name:"password",label:"Password",type:"password",onChange:y,value:h,required:!0}),r.a.createElement(d,{name:"confirmPassword",label:"Confirm Password",type:"password",onChange:y,value:v,required:!0}),r.a.createElement(f.a,{type:"submit"},"SIGN UP")))});n(87),a.default=function(){return r.a.createElement("div",{className:"sign-in-and-sign-up"},r.a.createElement(h,null),r.a.createElement(v,null))}}}]);
//# sourceMappingURL=3.c128c138.chunk.js.map