(this["webpackJsonpkhv-portal"]=this["webpackJsonpkhv-portal"]||[]).push([[3],{327:function(e,t,c){"use strict";c.d(t,"f",(function(){return O})),c.d(t,"b",(function(){return h})),c.d(t,"a",(function(){return v})),c.d(t,"c",(function(){return x})),c.d(t,"d",(function(){return f})),c.d(t,"e",(function(){return m}));var n=c(5),a=c.n(n),i=c(12),r=c(20),s=c.n(r),j=c(8),l=c(106),d=function(e,t){return s.a.get("".concat(j.a,"api/lists?page=").concat(e,"&limit=").concat(t),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}})},u=function(e){return s.a.get("".concat(j.a,"api/lists/")+e,{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}})},o=c(25),b=c(107);function O(e,t,c,n,r,d,u,o,O,h,p,v,x,f){return function(){var m=Object(i.a)(a.a.mark((function i(m){var _;return a.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,m(Object(l.g)(!0,e)),a.next=4,s.a.put("".concat(j.a,"api/lists?id=").concat(e),{nameProduct:t,weight:c,location:n,incongruity:r,reason:d,usage:u,department:o,sum:O,article:h,nameGuilty:p,correction:v,nameCorrection:x,monthfdp:f},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});case 4:_=a.sent,m(Object(b.c)(_.data)),m(Object(l.g)(!1,e)),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),alert(a.t0.response.data.message);case 12:case"end":return a.stop()}}),i,null,[[0,9]])})));return function(e){return m.apply(this,arguments)}}()}function h(e,t,c,n,r,d,u,o,O,h,p,v,x,f){return function(){var m=Object(i.a)(a.a.mark((function i(m){var _;return a.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,m(Object(l.g)(!0)),a.next=4,s.a.post("".concat(j.a,"api/lists"),{name:e,date:t,nameProduct:c,weight:n,location:r,incongruity:d,reason:u,usage:o,department:O,sum:h,article:p,nameGuilty:v,correction:x,nameCorrection:f},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});case 4:_=a.sent,m(Object(b.a)(_.data)),alert("\u041b\u0438\u0441\u0442 \u0441 \u043d\u043e\u043c\u0435\u0440\u043e\u043c ".concat(e," \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d")),m(Object(l.g)(!1)),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(0),alert(a.t0.response.data.message);case 13:case"end":return a.stop()}}),i,null,[[0,10]])})));return function(e){return m.apply(this,arguments)}}()}var p=function(){var e=Object(i.a)(a.a.mark((function e(t,c,n,i){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(Object(l.g)(!0,c)),e.next=4,s.a.put("".concat(j.a,"api/lists?id=").concat(c),{added:n},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});case 4:r=e.sent,t(i(r.data)),t(Object(l.g)(!1,c)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),alert(e.t0.response.data.message);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,c,n,a){return e.apply(this,arguments)}}();function v(e,t){return function(){var c=Object(i.a)(a.a.mark((function c(n){return a.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:p(n,e,t,l.b);case 1:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}()}function x(e,t){return function(){var c=Object(i.a)(a.a.mark((function c(n){return a.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:p(n,e,t,l.a);case 1:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}()}var f=function(e,t){return function(){var c=Object(i.a)(a.a.mark((function c(n){return a.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:try{n(Object(o.c)()),d(e,t).then((function(e){n(Object(l.e)(e.data.docs)),n(Object(l.f)(e.data.totalDocs))})),n(Object(o.b)())}catch(a){alert(a.response.data.message)}case 1:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(i.a)(a.a.mark((function t(c){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{c(Object(o.c)()),u(e).then((function(e){c(Object(b.c)(e.data))}))}catch(n){alert(n.response.data.message)}finally{c(Object(o.b)())}case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},328:function(e,t,c){e.exports={green:"ListCertificate_green__3UGht",list:"ListCertificate_list__2U5CF",adding_btn_add:"ListCertificate_adding_btn_add__1biLa",adding_btn_remove:"ListCertificate_adding_btn_remove__2UrcG",inpt:"ListCertificate_inpt__1KKz6",link:"ListCertificate_link__351_6",nbr_link:"ListCertificate_nbr_link__JvEWu"}},329:function(e,t,c){e.exports={green:"newList_green__2vsMf",head:"newList_head__368gF",a:"newList_a__3odkS",an:"newList_an__2Cn40",abc:"newList_abc__3P6ak",row:"newList_row__330Fd",input_column:"newList_input_column__15JIi"}},330:function(e,t,c){e.exports={green:"ListsCertificate_green__3-GT3",l:"ListsCertificate_l__3lvAD"}},332:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(15),i=c(2),r=c(13),s=c(329),j=c.n(s),l=c(4);function d(e){var t=Object(n.useState)(e),c=Object(r.a)(t,2),a=c[0],i=c[1];return{value:a,onChange:function(e){i(e.target.value)}}}var u=c(327),o=c(0),b=function(){var e=Object(l.c)(),t=d(""),c=d(""),s=d(""),b=d(""),O=d(""),h=d(""),p=d(""),v=d(""),x=d(""),f=d(""),m=d(""),_=d(""),g=Object(n.useState)(""),C=Object(r.a)(g,2),k=C[0],w=C[1],y=d(""),N=Object(a.g)(),L=new Date;return Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:j.a.row,children:[Object(o.jsx)("h2",{className:j.a.head,children:"\u041d\u041e\u0412\u042b\u0419 \u041b\u0418\u0421\u0422 \u0410\u041a\u0422\u0410 \u0411\u0420\u0410\u041a\u0410"}),Object(o.jsxs)("div",{className:j.a.input_column,children:[Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:j.a.a,children:"\u2116 \u0430\u043a\u0442\u0430"}),Object(o.jsx)("input",Object(i.a)({type:"number",placeholder:"\u2116 \u0430\u043a\u0442\u0430...",value:t},t))]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:j.a.a,children:"\u0414\u0430\u0442\u0430 \u0430\u043a\u0442\u0430"}),Object(o.jsx)("input",Object(i.a)({type:"date",placeholder:"\u0414\u0430\u0442\u0430 \u0430\u043a\u0442\u0430...",value:L},c))]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:j.a.a,children:"\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u043e\u0434\u0443\u043a\u0446\u0438\u0438"}),Object(o.jsx)("input",Object(i.a)({type:"text",placeholder:"\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u043e\u0434\u0443\u043a\u0446\u0438\u0438...",value:s},s))]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:j.a.a,children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e, \u043a\u0433"}),Object(o.jsx)("input",Object(i.a)({type:"number",placeholder:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e...",value:b},b))]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:j.a.a,children:"\u041c\u0435\u0441\u0442\u043e \u043e\u0431\u043d\u0430\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),Object(o.jsx)("input",Object(i.a)({type:"text",placeholder:"\u041c\u0435\u0441\u0442\u043e \u043e\u0431\u043d\u0430\u0440\u0443\u0436\u0435\u043d\u0438\u044f...",value:O},O))]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:j.a.a,children:"\u0412\u0438\u0434 \u043d\u0435\u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u044f"}),Object(o.jsx)("input",Object(i.a)({type:"text",placeholder:"\u0412\u0438\u0434 \u043d\u0435\u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u044f...",value:h},h))]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:j.a.a,children:"\u041f\u0440\u0438\u0447\u0438\u043d\u0430"}),Object(o.jsx)("input",Object(i.a)({type:"text",placeholder:"\u041f\u0440\u0438\u0447\u0438\u043d\u0430...",value:p},p))]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:j.a.a,children:"\u041d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0434\u0443\u043a\u0446\u0438\u0438"}),Object(o.jsx)("input",Object(i.a)({type:"text",placeholder:"\u041d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0434\u0443\u043a\u0446\u0438\u0438...",value:v},v))]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:j.a.a,children:"\u0421\u0442\u0430\u0442\u044c\u044f \u0441\u043f\u0438\u0441\u0430\u043d\u0438\u044f"}),Object(o.jsx)("input",Object(i.a)({type:"text",placeholder:"\u0421\u0442\u0430\u0442\u044c\u044f \u0441\u043f\u0438\u0441\u0430\u043d\u0438\u044f...",value:m},m))]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:j.a.a,children:"\u0424\u0418\u041e \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0433\u043e \u0437\u0430 \u0431\u0440\u0430\u043a"}),Object(o.jsx)("input",Object(i.a)({type:"text",placeholder:"\u0424\u0418\u041e \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0433\u043e...",value:_},_))]})]}),Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:j.a.a,children:"\u0421\u0443\u043c\u043c\u0430 \u0443\u0449\u0435\u0440\u0431\u0430, \u0440\u0443\u0431"}),Object(o.jsx)("input",Object(i.a)({type:"number",placeholder:"\u0421\u0443\u043c\u043c\u0430 \u0443\u0449\u0435\u0440\u0431\u0430, \u0440\u0443\u0431...",value:f},f))]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:j.a.a,children:"\u041e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0435 \u043e\u0442\u0434\u0435\u043b\u0435\u043d\u0438\u0435"}),Object(o.jsx)("input",Object(i.a)({type:"text",placeholder:"\u041e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0435 \u043e\u0442\u0434\u0435\u043b\u0435\u043d\u0438\u0435...",value:x},x))]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:j.a.a,children:"\u041e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u0437\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u0438\u0440\u0443\u044e\u0449\u0438\u0445 \u043c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u0439"}),Object(o.jsx)("input",Object(i.a)({type:"text",placeholder:"\u041e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439...",value:y},y))]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:j.a.a,children:"\u041a\u043e\u0440\u0440\u0435\u043a\u0442\u0438\u0440\u0443\u044e\u0449\u0438\u0435 \u043c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u044f"}),Object(o.jsx)("textarea",{type:"text",value:k,onChange:function(e){w(e.target.value)},placeholder:"\u041a\u043e\u0440\u0440\u0435\u043a\u0442\u0438\u0440\u0443\u044e\u0449\u0438\u0435 \u043c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u044f...",cols:70,rows:20})]})]})]}),Object(o.jsx)("div",{children:Object(o.jsx)("button",{onClick:function(n){""!==t.value?(N.push("/fdp/listsCertificates"),e(Object(u.b)(t.value,c.value||L,s.value,b.value,O.value,h.value,p.value,v.value,x.value,f.value,m.value,_.value,k,y.value))):(n.preventDefault(),alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u043c\u0435\u0440"))},className:j.a.green,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})})]})})},O=c(31),h=c(23),p=c.n(h),v=c(11),x=c(330),f=c.n(x),m=c(328),_=c.n(m),g=c(26),C=c.n(g),k=function(e){var t=e.list,c=Object(l.c)(),n=Object(l.d)((function(e){return e.listsCertificatePage.addingInProgress})),a=C()(t.monthfdp,"YYYY-MM-DD").format("MMMM YYYY"),i=C()(t.date,"YYYY-MM-DD").format("DD MMMM YYYY");return Object(o.jsxs)("div",{className:_.a.list,children:[Object(o.jsx)("span",{children:Object(o.jsx)("div",{children:"\u2116 \u0430\u043a\u0442\u0430"})}),Object(o.jsx)("div",{className:_.a.link,children:Object(o.jsx)(v.b,{className:_.a.nbr_link,to:"/certificateList/"+t.name,children:t.name})}),Object(o.jsx)("span",{children:Object(o.jsx)("div",{children:"\u0414\u0430\u0442\u0430 \u0430\u043a\u0442\u0430"})}),Object(o.jsx)("div",{children:i}),Object(o.jsx)("span",{children:Object(o.jsx)("div",{children:"\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u043e\u0434\u0443\u043a\u0446\u0438\u0438"})}),Object(o.jsx)("div",{children:t.nameProduct}),Object(o.jsx)("span",{children:Object(o.jsx)("div",{children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e, \u043a\u0433"})}),Object(o.jsxs)("div",{children:[t.weight," \u043a\u0433"]}),Object(o.jsx)("span",{children:Object(o.jsx)("div",{children:"\u041e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0435 \u043e\u0442\u0434\u0435\u043b\u0435\u043d\u0438\u0435"})}),Object(o.jsx)("div",{children:t.department}),Object(o.jsx)("span",{children:Object(o.jsx)("div",{children:"\u0421\u0443\u043c\u043c\u0430 \u0443\u0449\u0435\u0440\u0431\u0430, \u0440\u0443\u0431"})}),Object(o.jsxs)("div",{children:[t.sum," \u0440\u0443\u0431"]}),Object(o.jsx)("span",{children:Object(o.jsx)("div",{children:"\u0421\u0442\u0430\u0442\u044c\u044f \u0441\u043f\u0438\u0441\u0430\u043d\u0438\u044f"})}),Object(o.jsx)("div",{children:t.article}),Object(o.jsx)("span",{children:Object(o.jsx)("div",{children:"\u0424\u0418\u041e \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0433\u043e \u0437\u0430 \u0431\u0440\u0430\u043a"})}),Object(o.jsx)("div",{children:t.nameGuilty}),Object(o.jsx)("span",{children:Object(o.jsx)("div",{children:"\u041e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u0437\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u0438\u0440\u0443\u044e\u0449\u0438\u0445 \u043c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u0439"})}),Object(o.jsx)("div",{children:t.nameCorrection}),Object(o.jsx)("span",{children:Object(o.jsx)("div",{children:"\u041e\u0442\u0440\u0430\u0437\u0438\u0442\u044c \u0432 \u043c\u0435\u0441\u044f\u0446"})}),Object(o.jsx)("div",{children:a}),Object(o.jsx)("div",{children:t.added?Object(o.jsx)("button",{className:_.a.adding_btn_add,disabled:n.some((function(e){return e===t._id})),onClick:function(){c(Object(u.c)(t._id,!1))},children:"\u0423\u0431\u0440\u0430\u0442\u044c"}):Object(o.jsx)("button",{className:_.a.adding_btn_remove,disabled:n.some((function(e){return e===t._id})),onClick:function(){c(Object(u.a)(t._id,!0))},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})}),Object(o.jsx)("hr",{})]})},w=c(106),y=c(30),N=c(79),L=c.n(N),Y=c(116),M=c.n(Y),P=function(e){for(var t=e.onPageChange,c=e.portionSize,a=void 0===c?2:c,i=Object(l.d)((function(e){return e.listsCertificatePage.limit})),s=Object(l.d)((function(e){return e.listsCertificatePage.totalDocs})),j=Object(l.d)((function(e){return e.listsCertificatePage.page})),d=Math.ceil(s/i),u=[],b=1;b<=d;b++)u.push(b);var O=Math.ceil(d/a),h=Object(n.useState)(1),p=Object(r.a)(h,2),v=p[0],x=p[1],f=(v-1)*a+1,m=v*a;return Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:L.a.list,children:[v>1&&Object(o.jsx)("button",{onClick:function(){x(v-1)},children:"\u2190"}),u.filter((function(e){return e>=f&&e<=m})).map((function(e){return Object(o.jsx)("span",{className:M()(Object(y.a)({},L.a.selectedList,j===e),L.a.list),onClick:function(c){t(e)},children:e},e)})),O>v&&Object(o.jsx)("button",{onClick:function(){x(v+1)},children:"\u2192"})]})})},D=function(){var e=Object(l.d)((function(e){return e.listsCertificatePage.limit})),t=Object(l.d)((function(e){return e.listsCertificatePage.page})),c=Object(l.d)((function(e){return e.listsCertificatePage.docs})),a=Object(l.c)();return Object(n.useEffect)((function(){a(Object(u.d)(t,e))}),[t,e]),Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{children:Object(o.jsx)(v.b,{to:"/fdp/listsCertificates/newList",children:Object(o.jsx)("button",{className:f.a.green,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0430\u043a\u0442"})})}),Object(o.jsxs)("div",{className:f.a.l,children:[Object(o.jsx)(P,{onPageChange:function(t){a(Object(w.d)(t)),a(Object(u.d)(t,e))}}),Object(o.jsx)("hr",{}),Object(o.jsx)("div",{children:c.map((function(e){return Object(o.jsx)(k,{list:e},e.name)}))})]})]})},S=function(){return Object(l.d)((function(e){return e.listsCertificatePage.loader}))?Object(o.jsx)("div",{className:p.a.loader,children:Object(o.jsx)(O.a,{})}):Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(D,{})})};t.default=function(){return Object(o.jsx)("div",{children:Object(o.jsxs)(a.d,{children:[Object(o.jsx)(a.b,{exact:!0,path:"/fdp/listsCertificates",render:function(){return Object(o.jsx)(S,{})}}),Object(o.jsx)(a.b,{exact:!0,path:"/fdp/listsCertificates/newList",render:function(){return Object(o.jsx)(b,{})}})]})})}}}]);
//# sourceMappingURL=3.3c9d9452.chunk.js.map