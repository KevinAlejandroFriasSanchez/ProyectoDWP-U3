(this["webpackJsonpreact-blog"]=this["webpackJsonpreact-blog"]||[]).push([[0],{35:function(e,t,s){},45:function(e,t,s){},46:function(e,t,s){},47:function(e,t,s){},66:function(e,t,s){},67:function(e,t,s){},68:function(e,t,s){},69:function(e,t,s){},70:function(e,t,s){},71:function(e,t,s){},72:function(e,t,s){},73:function(e,t,s){},74:function(e,t,s){},75:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s(28),n=s.n(c),r=s(4),i=s(2),l=s(19),o=function(e,t){switch(t.type){case"LOGIN_START":return{user:null,isFetching:!0,error:!1};case"LOGIN_SUCCESS":return{user:t.payload,isFetching:!1,error:!1};case"LOGIN_FAILURE":return{user:null,isFetching:!1,error:!0};case"UPDATE_START":return Object(l.a)(Object(l.a)({},e),{},{isFetching:!0});case"UPDATE_SUCCESS":return{user:t.payload,isFetching:!1,error:!1};case"UPDATE_FAILURE":return{user:e.user,isFetching:!1,error:!0};case"LOGOUT":return{user:null,isFetching:!1,error:!1};default:return e}},j=s(0),u={user:JSON.parse(localStorage.getItem("user"))||null,isFetching:!1,error:!1},b=Object(a.createContext)(u),p=function(e){var t=e.children,s=Object(a.useReducer)(o,u),c=Object(i.a)(s,2),n=c[0],r=c[1];return Object(a.useEffect)((function(){localStorage.setItem("user",JSON.stringify(n.user))}),[n.user]),Object(j.jsx)(b.Provider,{value:{user:n.user,isFetching:n.isFetching,error:n.error,dispatch:r},children:t})};s(35);function d(){var e=Object(a.useContext)(b),t=e.user,s=e.dispatch,c="http://localhost:5000/images/";return Object(j.jsxs)("div",{className:"top",children:[Object(j.jsxs)("div",{className:"topLeft",children:[Object(j.jsx)("i",{className:"topIcon fab fa-facebook-square"}),Object(j.jsx)("i",{className:"topIcon fab fa-twitter-square"}),Object(j.jsx)("i",{className:"topIcon fab fa-pinterest-square"}),Object(j.jsx)("i",{className:"topIcon fab fa-instagram-square"})]}),Object(j.jsx)("div",{className:"topCenter",children:Object(j.jsxs)("ul",{className:"topList",children:[Object(j.jsx)("li",{className:"topListItem",children:Object(j.jsx)(r.b,{className:"link",to:"/",children:"Inicio"})}),Object(j.jsx)("li",{className:"topListItem",children:Object(j.jsx)(r.b,{className:"link",to:"/",children:"Acerca de"})}),Object(j.jsx)("li",{className:"topListItem",children:Object(j.jsx)(r.b,{className:"link",to:"/write",children:"Crear Post"})}),Object(j.jsx)("li",{className:"topListItem",onClick:function(){s({type:"LOGOUT"})},children:t&&"LOGOUT"})]})}),Object(j.jsxs)("div",{className:"topRight",children:[null!==t?""!==t.profilePic?Object(j.jsx)(r.b,{to:"/profile/".concat(t.username),children:Object(j.jsx)("img",{className:"topImg",src:c+t.profilePic,alt:""})}):Object(j.jsx)(r.b,{to:"/profile/".concat(t.username),children:Object(j.jsx)("img",{className:"topImg",src:c+"default-profile.png",alt:""})}):Object(j.jsxs)("ul",{className:"topList",children:[Object(j.jsx)("li",{className:"topListItem",children:Object(j.jsx)(r.b,{className:"link",to:"/login",children:"LOGIN"})}),Object(j.jsx)("li",{className:"topListItem",children:Object(j.jsx)(r.b,{className:"link",to:"/register",children:"REGISTRAR"})})]}),Object(j.jsx)("i",{className:"topSearchIcon fas fa-search"})]})]})}var O=s(3),m=s.n(O),h=s(8);s(45);function x(){return Object(j.jsxs)("div",{className:"header",children:[Object(j.jsx)("div",{className:"headerTitles",children:Object(j.jsx)("span",{className:"headerTitleLg",children:"Blog"})}),Object(j.jsx)("img",{className:"headerImg",src:"https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",alt:""})]})}s(46);function f(e){var t=e.post;return Object(j.jsxs)("div",{className:"post",children:[Object(j.jsxs)("div",{className:"author-tab",children:["Autor: ",Object(j.jsx)(r.b,{to:"/profile/".concat(t.username),className:"author-name",children:t.username})]}),t.photo&&Object(j.jsx)("img",{className:"post-image",src:"http://localhost:5000/images/"+t.photo,alt:""}),Object(j.jsxs)("div",{className:"post-info",children:[Object(j.jsx)(r.b,{to:"/post/".concat(t._id),className:"link",children:Object(j.jsx)("span",{className:"post-title",children:t.title})}),Object(j.jsxs)("span",{className:"post-date",children:["Fecha: ",new Date(t.updatedAt).toDateString()]})]}),Object(j.jsx)("p",{className:"post-desc",children:t.desc}),t.categories.length>0&&Object(j.jsxs)("div",{className:"post-cats",children:["Categorias: ",t.categories.map((function(e,t){return Object(j.jsx)(r.b,{to:"/posts/".concat(e),className:"post-cat",children:e},t)}))]})]})}s(47);function g(e){var t=e.posts;return Object(j.jsx)("div",{className:"posts",children:t.map((function(e,t){return Object(j.jsx)(f,{post:e},t)}))})}var v=s(6),N=s.n(v);s(66);function w(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),s=t[0],c=t[1];return Object(a.useEffect)((function(){(function(){var e=Object(h.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("/categories");case 2:t=e.sent,c(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(j.jsxs)("div",{className:"sidebar",children:[Object(j.jsx)("span",{className:"title-bar",children:"Categorias"}),Object(j.jsx)("ul",{className:"tag-list",children:s.map((function(e,t){return Object(j.jsx)(r.b,{to:"/posts/".concat(e.name),className:"link single-tag",children:e.name},t)}))}),Object(j.jsx)("span",{className:"title-bar",children:"Siguenos"}),Object(j.jsxs)("div",{className:"icon-box",children:[Object(j.jsx)("i",{className:"icon fab fa-facebook-square"}),Object(j.jsx)("i",{className:"icon fab fa-twitter-square"}),Object(j.jsx)("i",{className:"icon fab fa-pinterest-square"}),Object(j.jsx)("i",{className:"icon fab fa-instagram-square"})]})]})}s(67);var S=s(5);function I(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),s=t[0],c=t[1],n=Object(S.f)().search;return Object(a.useEffect)((function(){(function(){var e=Object(h.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("/posts"+n);case 2:t=e.sent,c(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[n]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(x,{}),Object(j.jsxs)("div",{className:"home",children:[Object(j.jsx)(g,{posts:s}),Object(j.jsx)(w,{})]})]})}s(68),s(69);function y(e){var t=e.id,s=Object(a.useState)(""),c=Object(i.a)(s,2),n=c[0],l=c[1],o=Object(a.useState)(""),u=Object(i.a)(o,2),p=u[0],d=u[1],O=Object(a.useState)({}),x=Object(i.a)(O,2),f=x[0],g=x[1],v=Object(a.useState)(!1),w=Object(i.a)(v,2),S=w[0],I=w[1],y=Object(a.useContext)(b).user;Object(a.useEffect)((function(){(function(){var e=Object(h.a)(m.a.mark((function e(){var s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("/posts/"+t);case 2:s=e.sent,g(s.data),l(s.data.title),d(s.data.desc);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var k=function(){var e=Object(h.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Estas seguro de eliminar el post")){e.next=9;break}return e.prev=1,e.next=4,N.a.delete("/posts/".concat(f._id),{data:{username:y.username}});case 4:window.location.replace("/"),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(1);case 9:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(h.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.put("/posts/".concat(f._id),{username:y.username,title:n,desc:p});case 3:I(!1),e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:"single-post",children:[f.photo&&Object(j.jsx)("img",{src:"http://localhost:5000/images/"+f.photo,alt:"",className:"single-post-image"}),S?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("input",{type:"text",value:n,className:"single-post-title-input",autoFocus:!0,onChange:function(e){return l(e.target.value)}}),Object(j.jsx)("textarea",{className:"single-post-desc-input",value:p,onChange:function(e){return d(e.target.value)}})]}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("h1",{className:"single-post-title",children:[n,f.username===(null===y||void 0===y?void 0:y.username)&&Object(j.jsxs)("div",{className:"single-post-edit",children:[Object(j.jsx)("i",{className:"single-post-icon far fa-edit",onClick:function(){return I(!0)}}),Object(j.jsx)("i",{className:"single-post-icon far fa-trash-alt",onClick:k})]})]}),Object(j.jsx)("p",{className:"single-post-desc",children:p})]}),Object(j.jsxs)("div",{className:"single-post-info",children:[Object(j.jsxs)("span",{className:"single-post-author",children:["Autor:",Object(j.jsx)(r.b,{to:"/profile/".concat(f.username),className:"link",children:Object(j.jsxs)("b",{children:[" ",f.username]})})]}),Object(j.jsxs)("span",{className:"single-post-date",children:["Fecha: ",new Date(f.updatedAt).toDateString()]})]}),S&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("button",{className:"single-post-button-cancel",onClick:function(){return I(!1)},children:"Cancelar"}),Object(j.jsx)("button",{className:"single-post-button-update",onClick:C,children:"Cambiar"})]})]})}function k(){var e=Object(S.g)().id;return Object(j.jsxs)("div",{className:"single",children:[Object(j.jsx)(y,{id:e}),Object(j.jsx)(w,{})]})}s(70);function C(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),s=t[0],c=t[1],n=Object(a.useState)(""),r=Object(i.a)(n,2),l=r[0],o=r[1],u=Object(a.useState)(""),p=Object(i.a)(u,2),d=p[0],O=p[1],x=Object(a.useState)(null),f=Object(i.a)(x,2),g=f[0],v=f[1],w=Object(a.useContext)(b).user,S=function(){var e=Object(h.a)(m.a.mark((function e(t){var a,c,n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a={username:w.username,title:s,desc:l,categories:d.split(" ")},!g){e.next=15;break}return c=new FormData,n=Date.now()+g.name,c.append("name",n),c.append("file",g),a.photo=n,e.prev=8,e.next=11,N.a.post("/upload",c);case 11:e.next=15;break;case 13:e.prev=13,e.t0=e.catch(8);case 15:return e.prev=15,e.next=18,N.a.post("/posts",a);case 18:r=e.sent,window.location.replace("/post/"+r.data._id),e.next=24;break;case 22:e.prev=22,e.t1=e.catch(15);case 24:case"end":return e.stop()}}),e,null,[[8,13],[15,22]])})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:"write",children:[g&&Object(j.jsx)("img",{className:"writeImg",src:URL.createObjectURL(g),alt:""}),Object(j.jsxs)("form",{className:"writeForm",onSubmit:S,children:[Object(j.jsxs)("div",{className:"writeFormGroup",children:[Object(j.jsx)("label",{htmlFor:"fileInput",children:Object(j.jsx)("i",{className:"writeIcon fas fa-plus"})}),Object(j.jsx)("input",{type:"file",id:"fileInput",style:{display:"none"},onChange:function(e){return v(e.target.files[0])}}),Object(j.jsx)("input",{type:"text",placeholder:"Titulo",className:"writeInput",autoFocus:!0,onChange:function(e){return c(e.target.value)}})]}),Object(j.jsx)("div",{className:"writeFormGroup",children:Object(j.jsx)("textarea",{placeholder:"Ingresar texto...",type:"text",className:"writeInput writeText",onChange:function(e){return o(e.target.value)}})}),Object(j.jsx)("button",{className:"writeSubmit",type:"submit",children:"Publicar"}),Object(j.jsx)("input",{className:"tags-component",type:"text",placeholder:"Ingresar Categorias...",value:d,onChange:function(e){return O(e.target.value)}})]})]})}s(71);function F(){var e=Object(a.useRef)(),t=Object(a.useRef)(),s=Object(a.useContext)(b),c=s.dispatch,n=s.isFetching,l=Object(a.useState)(!1),o=Object(i.a)(l,2),u=o[0],p=o[1],d=function(){var s=Object(h.a)(m.a.mark((function s(a){var n;return m.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return a.preventDefault(),p(!1),c({type:"LOGIN_START"}),s.prev=3,s.next=6,N.a.post("/auth/login",{username:e.current.value,password:t.current.value});case 6:n=s.sent,c({type:"LOGIN_SUCCESS",payload:n.data}),s.next=15;break;case 10:s.prev=10,s.t0=s.catch(3),p(!0),setTimeout((function(){p(!1)}),7e3),c({type:"LOGIN_FAILURE"});case 15:case"end":return s.stop()}}),s,null,[[3,10]])})));return function(e){return s.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:"login",children:[Object(j.jsx)("span",{className:"loginTitle",children:"Login"}),Object(j.jsxs)("form",{className:"loginForm",onSubmit:d,children:[Object(j.jsx)("label",{children:"Username"}),Object(j.jsx)("input",{type:"text",className:"loginInput",placeholder:"Ingresar Usuario..",ref:e}),Object(j.jsx)("label",{children:"Password"}),Object(j.jsx)("input",{type:"password",className:"loginInput",placeholder:"Ingresar Contrase\xf1a...",ref:t}),Object(j.jsx)("button",{className:"loginButton",type:"submit",disabled:n,children:"Login"}),u&&Object(j.jsx)("span",{style:{color:"red",marginTop:"10px"},children:"Something went wrong!"})]}),Object(j.jsx)("button",{className:"loginRegisterButton",children:Object(j.jsx)(r.b,{className:"link",to:"/register",children:"Registrar"})})]})}s(72);function L(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),s=t[0],c=t[1],n=Object(a.useState)(""),l=Object(i.a)(n,2),o=l[0],u=l[1],b=Object(a.useState)(""),p=Object(i.a)(b,2),d=p[0],O=p[1],x=Object(a.useState)(!1),f=Object(i.a)(x,2),g=f[0],v=f[1],w=function(){var e=Object(h.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),v(!1),e.prev=2,e.next=5,N.a.post("/auth/register",{username:s,email:o,password:d});case 5:e.sent.data&&window.location.replace("/login"),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),v(!0),setTimeout((function(){v(!1)}),7e3);case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:"register",children:[Object(j.jsx)("span",{className:"registerTitle",children:"Registrar"}),Object(j.jsxs)("form",{className:"registerForm",onSubmit:w,children:[Object(j.jsx)("label",{children:"Nombre de usuario"}),Object(j.jsx)("input",{type:"text",className:"registerInput",placeholder:"Ingresar usuario...",onChange:function(e){return c(e.target.value)}}),Object(j.jsx)("label",{children:"Email"}),Object(j.jsx)("input",{type:"text",className:"registerInput",placeholder:"Ingresar Email...",onChange:function(e){return u(e.target.value)}}),Object(j.jsx)("label",{children:"Contrase\xf1a"}),Object(j.jsx)("input",{type:"password",className:"registerInput",placeholder:"Ingresar Contrase\xf1a...",onChange:function(e){return O(e.target.value)}}),Object(j.jsx)("button",{className:"registerButton",type:"submit",children:"Registrar"})]}),Object(j.jsx)("button",{className:"registerLoginButton",children:Object(j.jsx)(r.b,{className:"link",to:"/login",children:"Login"})}),g&&Object(j.jsx)("span",{style:{color:"red",marginTop:"10px"},children:"Something went wrong!"})]})}s(73);function T(){var e=Object(a.useContext)(b).user,t=Object(a.useState)({username:"",email:"",profilePic:"",createdAt:""}),s=Object(i.a)(t,2),c=s[0],n=s[1],r=Object(a.useState)(Object(S.g)().username),l=Object(i.a)(r,2),o=l[0],u=l[1],p=Object(a.useState)(""),d=Object(i.a)(p,2),O=d[0],x=d[1],f=Object(a.useState)([]),v=Object(i.a)(f,2),I=v[0],y=v[1],k=Object(a.useState)(!1),C=Object(i.a)(k,2),F=C[0],L=C[1],T="http://localhost:5000/images/";return Object(a.useEffect)((function(){(function(){var e=Object(h.a)(m.a.mark((function e(){var t,s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.get("/users/"+o);case 3:t=e.sent,n(t.data),x(t.data.email),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:return e.prev=10,e.next=13,N.a.get("/posts/?user="+o);case 13:s=e.sent,y(s.data),e.next=19;break;case 17:e.prev=17,e.t1=e.catch(10);case 19:case"end":return e.stop()}}),e,null,[[0,8],[10,17]])})));return function(){return e.apply(this,arguments)}})()()}),[o]),Object(j.jsx)(j.Fragment,{children:c&&Object(j.jsxs)("div",{children:[(null===e||void 0===e?void 0:e.username)===c.username&&F?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("span",{className:"profile-img",children:Object(j.jsx)("input",{type:"file",id:"fileInput",style:{display:"none"}})}),Object(j.jsx)("input",{type:"text",value:o,className:"",autoFocus:!0,onChange:function(e){return u(e.target.value)}}),Object(j.jsx)("textarea",{className:"",value:O,onChange:function(e){return x(e.target.value)}})]}):Object(j.jsxs)(j.Fragment,{children:[""!==c.profilePic?Object(j.jsx)("img",{className:"profile-img",src:T+c.profilePic,alt:""}):Object(j.jsx)("img",{className:"profile-img",src:T+"default-profile.png",alt:""}),Object(j.jsxs)("div",{className:"details",children:[Object(j.jsx)("div",{className:"profile-name",children:c.username}),Object(j.jsx)("div",{className:"profile-email",children:c.email}),Object(j.jsxs)("div",{className:"profile-created-at",children:["Fecha de creaci\xf3n: ",new Date(c.createdAt).toDateString()]})]})]}),(null===e||void 0===e?void 0:e.username)===c.username&&Object(j.jsx)("span",{className:"edit-option",onClick:function(){return L(!F)},children:F?"cancel":"edit profile"}),I.length>0&&Object(j.jsxs)("div",{className:"post-section",children:[I.length>0&&Object(j.jsx)("span",{className:"all-posts-title",children:"Post realizados por mi:"}),Object(j.jsxs)("div",{className:"home-tab-profile",children:[Object(j.jsx)(g,{posts:I}),Object(j.jsx)(w,{})]})]})]})})}s(74);function E(){var e=Object(S.g)().category,t=Object(a.useState)([]),s=Object(i.a)(t,2),c=s[0],n=s[1];return Object(a.useEffect)((function(){(function(){var t=Object(h.a)(m.a.mark((function t(){var s;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,N.a.get("/posts/?cat="+e);case 3:s=t.sent,n(s.data),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}})()()}),[]),Object(j.jsx)("div",{children:c.length>0&&Object(j.jsxs)("div",{className:"post-section2",children:[c.length>0&&Object(j.jsxs)("span",{className:"all-posts-title2",children:["Todos los post con la categoria ",e,": "]}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:"home-tab",children:[Object(j.jsx)(g,{posts:c}),Object(j.jsx)(w,{})]})]})})}var R=function(){var e=Object(a.useContext)(b).user;return Object(j.jsxs)(r.a,{children:[Object(j.jsx)(d,{}),Object(j.jsxs)(S.c,{children:[Object(j.jsx)(S.a,{exact:!0,path:"/",children:Object(j.jsx)(I,{})}),Object(j.jsx)(S.a,{path:"/register",children:e?Object(j.jsx)(I,{}):Object(j.jsx)(L,{})}),Object(j.jsx)(S.a,{path:"/login",children:e?Object(j.jsx)(I,{}):Object(j.jsx)(F,{})}),Object(j.jsx)(S.a,{path:"/write",children:e?Object(j.jsx)(C,{}):Object(j.jsx)(L,{})}),Object(j.jsx)(S.a,{path:"/post/:id",children:Object(j.jsx)(k,{})}),Object(j.jsx)(S.a,{path:"/profile/:username",children:Object(j.jsx)(T,{})}),Object(j.jsx)(S.a,{path:"/posts/:category",children:Object(j.jsx)(E,{})})]})]})};n.a.render(Object(j.jsx)(p,{children:Object(j.jsx)(R,{})}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.76a83bc3.chunk.js.map