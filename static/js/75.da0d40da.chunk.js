"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[75],{75:function(t,e,n){n.r(e);var r=n(433),c=n(861),a=n(439),o=n(757),u=n.n(o),i=n(791),s=n(689),f=n(87),l=n(184);e.default=function(){var t=(0,i.useState)([]),e=(0,a.Z)(t,2),n=e[0],o=e[1],p=(0,s.TH)();return(0,i.useEffect)((function(){var t=function(){var t=(0,c.Z)(u().mark((function t(){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://api.themoviedb.org/3/trending/all/day?api_key=2ea3a1cc18afc4f3a22942cd8d7fba10");case 3:return e=t.sent,t.next=6,e.json();case 6:n=t.sent,o((function(){return(0,r.Z)(n.results)})),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),n.map((function(t){return(0,l.jsx)("li",{children:(0,l.jsx)(f.rU,{to:"/movies/".concat(t.id),state:{from:p},children:t.original_title})},t.id)}))}},861:function(t,e,n){function r(t,e,n,r,c,a,o){try{var u=t[a](o),i=u.value}catch(s){return void n(s)}u.done?e(i):Promise.resolve(i).then(r,c)}function c(t){return function(){var e=this,n=arguments;return new Promise((function(c,a){var o=t.apply(e,n);function u(t){r(o,c,a,u,i,"next",t)}function i(t){r(o,c,a,u,i,"throw",t)}u(void 0)}))}}n.d(e,{Z:function(){return c}})}}]);
//# sourceMappingURL=75.da0d40da.chunk.js.map