(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{101:function(e,t,n){"use strict";n.r(t);var o=n(0),c=n.n(o),a=n(9),r=n.n(a),i=(n(88),n(55)),s=n(39),l=n(136),d=n(4),u=n(150),j=n(56),b=n(143),f=n(149),O=n(144),x=n(142),h=n(145),p=n(103),g=n(146),v=n(147),y=n(148),m=n(72),C=n.n(m),T=n(73),D=n.n(T),E=n(71),F=n.n(E),_=n(70),k=n.n(_),I=n(44),w=n(32),M=n(18),A=function(e){return function(t){t({type:"CREATE_TODO",data:e})}},S=function(e){for(var t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",o=n.length,c=0;c<e;c++)t+=n.charAt(Math.floor(Math.random()*o));return t},L=n(6),B=Object(l.a)((function(e){return{root:Object(s.a)({padding:"10vh"},e.breakpoints.down("xs"),{padding:"8px"}),container:{textAlign:"center",padding:"8px",border:"1px solid #ff6f00",borderRadius:"10px"},list:Object(s.a)({width:"500px",marginTop:"10px"},e.breakpoints.down("xs"),{width:"100%"}),listItem:{backgroundColor:"#ff6f00",marginBottom:"10px",borderRadius:"5px"},button:{"&:hover":{backgroundColor:"#ffa040"}},selectColor:{marginLeft:"30px"},title:{fontWeight:"bold",padding:"16px",color:"#ff6f00"}}})),N=Object(d.a)({root:{"& label.Mui-focused":{color:"#ff6f00"},"& .MuiInput-underline:after":{borderBottomColor:"#ff6f00"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"#ff6f00"},"&:hover fieldset":{borderColor:"#ff6f00"},"&.Mui-focused fieldset":{borderColor:"#ff6f00"}}}})(u.a),R=function(){var e=B(),t=Object(I.b)(),n=Object(I.c)((function(e){return e.todos})),c=Object(o.useState)(""),a=Object(i.a)(c,2),r=a[0],s=a[1],l=Object(o.useState)("#FFF"),d=Object(i.a)(l,2),u=d[0],m=d[1],T=Object(o.useState)(""),E=Object(i.a)(T,2),_=E[0],R=E[1];return Object(L.jsx)("div",{className:e.root,children:Object(L.jsxs)("div",{className:e.container,children:[Object(L.jsx)(j.a,{variant:"h5",className:e.title,children:"What's your plan today?"}),Object(L.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[Object(L.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(L.jsx)(N,{value:r,onKeyDown:function(e){return function(e){if(13===e.keyCode&&""!==r){var n={_id:S(5),todo:r,status:!1};t(A(n)),s("")}}(e)},onChange:function(e){return s(e.target.value)},id:"outlined-basic",label:"New Todo",variant:"outlined",size:"small",required:!0,color:"secondary"}),Object(L.jsx)(b.a,{onClick:function(){return function(){if(""!==r){var e={_id:S(5),todo:r,status:!1};t(A(e)),s("")}}()},children:Object(L.jsx)(k.a,{style:{fontSize:"25px",color:"#ff6f00"}})})]}),Object(L.jsxs)(f.a,{style:{marginLeft:"30px"},label:"Age",labelId:"demo-simple-select-label",id:"demo-simple-select",defaultValue:"#FFF",value:u,onChange:function(e){return m(e.target.value)},children:[Object(L.jsx)(O.a,{value:"#FFF",children:"White"}),Object(L.jsx)(O.a,{value:"red",children:"Red"}),Object(L.jsx)(O.a,{value:"green",children:"Green"}),Object(L.jsx)(O.a,{value:"blue",children:"Blue"})]})]}),Object(L.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(L.jsx)(x.a,{className:e.list,children:n.map((function(o,c){return Object(L.jsx)(h.a,{in:!0,timeout:500,children:Object(L.jsxs)(p.a,{classes:{root:e.listItem,button:e.button},style:{color:u},onMouseOver:function(){return R(o._id)},onMouseOut:function(){return R("")},onClick:function(){return t((e=n,c=o,function(t){var n=c._id,o=e.findIndex((function(e){return e._id===n})),a=e[o],r=Object(M.a)(Object(M.a)({},a),{},{status:!a.status}),i=e.slice(0,o),s=e.slice(o+1);t({type:"UPDATED_TODO",data:[].concat(Object(w.a)(i),[r],Object(w.a)(s))})}));var e,c},button:!0,children:[Object(L.jsx)(g.a,{children:o.status?Object(L.jsx)(F.a,{style:{color:u}}):Object(L.jsx)(C.a,{style:{color:u}})}),Object(L.jsx)(v.a,{primary:Object(L.jsx)(j.a,{type:"body2",style:{color:u,textDecoration:o.status?"line-through":"none"},children:o.todo})}),o._id===_&&Object(L.jsx)(y.a,{onClick:function(){return t((e=n,c=o,function(t){var n=c._id,o=e.findIndex((function(e){return e._id===n})),a=e.slice(0,o),r=e.slice(o+1);t({type:"DELETE_TODO",data:[].concat(Object(w.a)(a),Object(w.a)(r))})}));var e,c},children:Object(L.jsx)(b.a,{children:Object(L.jsx)(D.a,{style:{fontSize:"15px"}})})})]})},c)}))})})]})})},P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,152)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),o(e),c(e),a(e),r(e)}))},z=n(74),W=n(19),J=n(60),U=n(75),q=n.n(U),G=n(76),K="CREATE_TODO",V="UPDATED_TODO",H="DELETE_TODO",Q={todos:[]},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case K:return Object(M.a)(Object(M.a)({},e),{},{todos:[].concat(Object(w.a)(e.todos),[t.data])});case V:case H:return Object(M.a)(Object(M.a)({},e),{},{todos:t.data});default:return e}},Y={key:"root",storage:q.a},Z=Object(J.a)(Y,X),$=Object(W.d)(Z,Object(W.a)(G.a)),ee=Object(J.b)($);r.a.render(Object(L.jsx)(c.a.StrictMode,{children:Object(L.jsx)(I.a,{store:$,children:Object(L.jsx)(z.a,{loading:null,persistor:ee,children:Object(L.jsx)(R,{})})})}),document.getElementById("root")),P()},88:function(e,t,n){}},[[101,1,2]]]);
//# sourceMappingURL=main.066784b6.chunk.js.map