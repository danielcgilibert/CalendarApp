(this["webpackJsonpcalendar-app"]=this["webpackJsonpcalendar-app"]||[]).push([[0],{101:function(e,t,a){},103:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(7),s=a.n(c),r=a(12),o=a(21),l=a(54),i=a(59),j=a(8),d=a(15),b=a.n(d),u="[ui] Open modal",m="[ui] Close modal",O="[event] Add new",p="[event] Set Active",v="[event] Clear active event",f="[event] Event updated",h="[event] Event deleted",x={events:[{id:(new Date).getTime(),title:"title fin",start:b()().toDate(),end:b()().add(2,"hour").toDate(),bgColor:"#fafaff",notes:"Aprender React",user:{_id:"123",name:"Daniel"}}],activeEvent:null},g={modalOpen:!1},N=Object(o.b)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(j.a)(Object(j.a)({},e),{},{modalOpen:!0});case m:return Object(j.a)(Object(j.a)({},e),{},{modalOpen:!1});default:return e}},calendar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(j.a)(Object(j.a)({},e),{},{activeEvent:t.payload});case O:return Object(j.a)(Object(j.a)({},e),{},{events:[].concat(Object(i.a)(e.events),[t.payload])});case v:return Object(j.a)(Object(j.a)({},e),{},{activeEvent:null});case f:return Object(j.a)(Object(j.a)({},e),{},{events:e.events.map((function(e){return e.id===t.payload.id?t.payload:e}))});case h:return Object(j.a)(Object(j.a)({},e),{},{events:e.events.filter((function(t){return t.id!==e.activeEvent.id})),activeEvent:null});default:return e}}}),y="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.c,E=Object(o.d)(N,y(Object(o.a)(l.a))),w=a(58),C=a(9),S=(a(68),a(3)),D=function(){return Object(S.jsx)("div",{className:"container login-container",children:Object(S.jsxs)("div",{className:"row",children:[Object(S.jsxs)("div",{className:"col-md-6 login-form-1",children:[Object(S.jsx)("h3",{children:"Ingreso"}),Object(S.jsxs)("form",{children:[Object(S.jsx)("div",{className:"form-group",children:Object(S.jsx)("input",{type:"text",className:"form-control",placeholder:"Correo"})}),Object(S.jsx)("div",{className:"form-group",children:Object(S.jsx)("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a"})}),Object(S.jsx)("div",{className:"form-group",children:Object(S.jsx)("input",{type:"submit",className:"btnSubmit",value:"Login"})})]})]}),Object(S.jsxs)("div",{className:"col-md-6 login-form-2",children:[Object(S.jsx)("h3",{children:"Registro"}),Object(S.jsxs)("form",{children:[Object(S.jsx)("div",{className:"form-group",children:Object(S.jsx)("input",{type:"text",className:"form-control",placeholder:"Nombre"})}),Object(S.jsx)("div",{className:"form-group",children:Object(S.jsx)("input",{type:"email",className:"form-control",placeholder:"Correo"})}),Object(S.jsx)("div",{className:"form-group",children:Object(S.jsx)("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a"})}),Object(S.jsx)("div",{className:"form-group",children:Object(S.jsx)("input",{type:"password",className:"form-control",placeholder:"Repita la contrase\xf1a"})}),Object(S.jsx)("div",{className:"form-group",children:Object(S.jsx)("input",{type:"submit",className:"btnSubmit",value:"Crear cuenta"})})]})]})]})})},k=a(20),_=a(46),A=function(){return Object(S.jsxs)("div",{className:"navbar navbar-dark bg-dark mb-4",children:[Object(S.jsx)("span",{className:"navbar-brand",children:"Pepe"}),Object(S.jsxs)("button",{className:"btn btn-danger",children:[Object(S.jsx)("i",{className:"fas fa-sign-out-alt"}),Object(S.jsx)("span",{children:" Salir"})]})]})},R=(a(70),{allDay:"Todo el d\xeda",previous:"<",next:">",today:"Hoy",month:"Mes",week:"Semana",day:"D\xeda",agenda:"Agenda",date:"Fecha",time:"Hora",event:"Evento",noEventsInRange:"No hay eventos en este rango",showMore:function(e){return"+ Ver m\xe1s (".concat(e,")")}}),T=(a(71),function(e){var t=e.event,a=t.title,n=t.user;return Object(S.jsxs)("div",{children:[Object(S.jsxs)("strong",{children:[a," - "]}),Object(S.jsx)("span",{children:n.name})]})}),I=a(31),M=a(41),V=a.n(M),F=a(42),H=a.n(F),L=a(57),P=a.n(L),B=function(){return{type:u}},G={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};V.a.setAppElement("#root");var J=b()().minutes(0).seconds(0).add(1,"hours"),U=J.clone().add(1,"hours"),X={title:"",notes:"",start:J.toDate(),end:U.toDate()},q=function(){var e=Object(n.useState)(J.toDate()),t=Object(k.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(U.toDate()),o=Object(k.a)(s,2),l=o[0],i=o[1],d=Object(n.useState)(!0),u=Object(k.a)(d,2),p=u[0],h=u[1],x=Object(r.b)(),g=Object(r.c)((function(e){return e.ui})).modalOpen,N=Object(r.c)((function(e){return e.calendar})).activeEvent,y=Object(n.useState)(X),E=Object(k.a)(y,2),w=E[0],C=E[1],D=w.title,_=w.notes,A=w.start,R=w.end;Object(n.useEffect)((function(){C(N||X)}),[N,C]);var T=function(e){var t=e.target;C(Object(j.a)(Object(j.a)({},w),{},Object(I.a)({},t.name,t.value)))},M=function(){x({type:m}),x({type:v}),C(X)};return Object(S.jsx)("div",{children:Object(S.jsxs)(V.a,{isOpen:g,onRequestClose:M,style:G,closeTimeoutMS:200,contentLabel:"Example Modal",className:"modal",overlayClassName:"modal-fondo",children:[Object(S.jsx)("h1",{children:" Nuevo evento "}),Object(S.jsx)("hr",{}),Object(S.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=b()(A),a=b()(R);return t.isSameOrAfter(a)?P.a.fire("Error","La fecha fin debe de ser mayor a la fecha de inicio","error"):D.trim().length<2?h(!1):(x(N?{type:f,payload:w}:function(e){return{type:O,payload:e}}(Object(j.a)(Object(j.a)({},w),{},{id:(new Date).getTime(),user:{_id:"1",name:"Daniel"}}))),h(!0),void M())},className:"container",children:[Object(S.jsxs)("div",{className:"form-group",children:[Object(S.jsx)("label",{children:"Fecha y hora inicio"}),Object(S.jsx)(H.a,{onChange:function(e){c(e),C(Object(j.a)(Object(j.a)({},w),{},{start:e}))},value:a,className:"form-control"})]}),Object(S.jsxs)("div",{className:"form-group",children:[Object(S.jsx)("label",{children:"Fecha y hora fin"}),Object(S.jsx)(H.a,{onChange:function(e){i(e),C(Object(j.a)(Object(j.a)({},w),{},{end:e}))},minDate:a,value:l,className:"form-control"})]}),Object(S.jsx)("hr",{}),Object(S.jsxs)("div",{className:"form-group",children:[Object(S.jsx)("label",{children:"Titulo y notas"}),Object(S.jsx)("input",{type:"text",className:"form-control ".concat(!p&&"is-invalid"),placeholder:"T\xedtulo del evento",name:"title",autoComplete:"off",value:D,onChange:T}),Object(S.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Una descripci\xf3n corta"})]}),Object(S.jsxs)("div",{className:"form-group",children:[Object(S.jsx)("textarea",{type:"text",className:"form-control",placeholder:"Notas",rows:"5",name:"notes",value:_,onChange:T}),Object(S.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Informaci\xf3n adicional"})]}),Object(S.jsxs)("button",{type:"submit",className:"btn btn-outline-primary btn-block",children:[Object(S.jsx)("i",{className:"far fa-save"}),Object(S.jsx)("span",{children:" Guardar"})]})]})]})})},z=function(){var e=Object(r.b)();return Object(S.jsx)("button",{className:"btn btn-primary fab",onClick:function(){e(B())},children:Object(S.jsx)("i",{className:"fas fa-plus"})})},K=function(){var e=Object(r.b)();return Object(S.jsxs)("button",{className:"btn btn-danger fab-danger",onClick:function(){e({type:h})},children:[Object(S.jsx)("i",{className:"fas fa-trash"}),Object(S.jsx)("span",{children:" Borrar Evento"})]})};b.a.locale("es");var Q=Object(_.b)(b.a),W=function(){var e=Object(n.useState)(localStorage.getItem("lastView")||"month"),t=Object(k.a)(e,2),a=t[0],c=t[1],s=Object(r.b)(),o=Object(r.c)((function(e){return e.calendar})),l=o.events,i=o.activeEvent;return Object(S.jsxs)("div",{className:"calendar-screen",children:[Object(S.jsx)(A,{}),Object(S.jsx)(_.a,{localizer:Q,events:l,startAccessor:"start",endAccessor:"end",messages:R,eventPropGetter:function(e,t,a,n){return{style:{backgroundColor:"#367CF7",borderRadius:"0px",opacity:.8,display:"block",color:"white"}}},onDoubleClickEvent:function(e){s(B())},onSelectEvent:function(e){s({type:p,payload:e})},onView:function(e){c(e),localStorage.setItem("lastView",e)},view:a,components:{event:T}}),Object(S.jsx)(z,{}),i&&Object(S.jsx)(K,{}),Object(S.jsx)(q,{})]})},Y=function(){return Object(S.jsx)(w.a,{children:Object(S.jsx)("div",{children:Object(S.jsxs)(C.d,{children:[Object(S.jsx)(C.b,{exact:!0,path:"/login",component:D}),Object(S.jsx)(C.b,{exact:!0,path:"/",component:W}),Object(S.jsx)(C.a,{to:"/"})]})})})},Z=function(){return Object(S.jsx)(r.a,{store:E,children:Object(S.jsx)(Y,{})})};a(101);s.a.render(Object(S.jsx)(Z,{}),document.getElementById("root"))},68:function(e,t,a){}},[[103,1,2]]]);
//# sourceMappingURL=main.f17a4b6a.chunk.js.map