"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[87],{292:function(e,r,n){n.r(r),n.d(r,{default:function(){return v}});var t,s=n(861),i=n(439),c=n(757),a=n.n(c),l=n(791),o=n(87),d=n(689),h=n(168),u=n(444).ZP.div(t||(t=(0,h.Z)(["\n  display: flex;\n  flex-direction: row;\n  gap: 20px;\n"]))),x=n(184),v=function(){var e,r,n=(0,d.UO)().movieId,t=(0,l.useState)({}),c=(0,i.Z)(t,2),h=c[0],v=c[1],p=(0,d.TH)(),f=(0,l.useRef)(null!==(e=null===(r=p.state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/movies");return(0,l.useEffect)((function(){var e=function(){var e=(0,s.Z)(a().mark((function e(){var r,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=2ea3a1cc18afc4f3a22942cd8d7fba10&language=en-US"));case 2:return r=e.sent,e.next=5,r.json();case 5:t=e.sent,v(t);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[n]),(0,x.jsxs)("div",{children:[(0,x.jsx)("h2",{children:"MovieDetalis"}),(0,x.jsx)(o.rU,{to:f.current,children:"Back to"}),(0,x.jsxs)(u,{children:[(0,x.jsxs)("div",{children:[" ",h.poster_path&&(0,x.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(h.poster_path),alt:h.title})]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("h2",{children:h.title}),(0,x.jsxs)("p",{children:["User Score: ",h.vote_average]}),(0,x.jsx)("h3",{children:"Overview"}),(0,x.jsx)("p",{children:h.overview}),(0,x.jsx)("h3",{children:"Genres"}),(0,x.jsx)("ul",{children:h.genres&&h.genres.map((function(e){return(0,x.jsx)("li",{children:e.name},e.id)}))})]})]}),(0,x.jsxs)("ul",{children:[(0,x.jsx)("li",{children:(0,x.jsx)(o.rU,{to:"cast",children:"Cast"})}),(0,x.jsx)("li",{children:(0,x.jsx)(o.rU,{to:"reviews",children:"Reviews"})})]}),(0,x.jsx)(l.Suspense,{fallback:(0,x.jsx)("div",{children:"LOADING..."}),children:(0,x.jsx)(d.j3,{})})]})}}}]);
//# sourceMappingURL=87.2d913e79.chunk.js.map