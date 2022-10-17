"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[669],{241:function(e,n,t){t.d(n,{IR:function(){return g},R8:function(){return l},Uh:function(){return h},o7:function(){return v},oV:function(){return o}});var r=t(861),c=t(757),a=t.n(c),s=t(44),u="https://api.themoviedb.org/3",i="298b3ba9f2c0a557e7d7fc47b0ac595b";function o(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(a().mark((function e(){var n,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(u,"/trending/movie/day?api_key=").concat(i));case 3:return n=e.sent,e.next=6,n.data;case 6:return t=e.sent,e.abrupt("return",t);case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case 14:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function l(e){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(a().mark((function e(n){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(u,"/search/movie?api_key=").concat(i,"&language=en-US&query=").concat(n,"&include_adult=false"));case 3:return t=e.sent,e.next=6,t.data;case 6:return r=e.sent,e.abrupt("return",r);case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case 14:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function h(e){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(a().mark((function e(n){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(u,"/movie/").concat(n,"?api_key=").concat(i,"&language=en-US"));case 3:return t=e.sent,e.next=6,t.data;case 6:return r=e.sent,e.abrupt("return",r);case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case 14:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function v(e){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(a().mark((function e(n){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(u,"/movie/").concat(n,"/credits?api_key=").concat(i,"&language=en-US"));case 3:return t=e.sent,e.next=6,t.data;case 6:return r=e.sent,e.abrupt("return",r);case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case 14:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function g(e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(a().mark((function e(n){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(u,"/movie/").concat(n,"/reviews?api_key=").concat(i,"&language=en-US"));case 3:return t=e.sent,e.next=6,t.data;case 6:return r=e.sent,e.abrupt("return",r);case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case 14:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}},669:function(e,n,t){t.r(n),t.d(n,{default:function(){return k}});var r,c,a,s=t(861),u=t(885),i=t(757),o=t.n(i),p=t(791),l=t(241),f=t(731),h=t(739),d=t(168),v=t(444),x=v.ZP.button(r||(r=(0,d.Z)(["\n    display: block;\n    margin-top: 10px;\n"]))),g=v.ZP.div(c||(c=(0,d.Z)(["\n    display: flex;\n"]))),m=v.ZP.div(a||(a=(0,d.Z)(["\n    flex-grow: 1;\n    padding: 10px;\n"]))),w=t(184),k=function(){var e,n=(0,h.UO)().movieId,t=(0,p.useState)({}),r=(0,u.Z)(t,2),c=r[0],a=r[1],i=(0,p.useState)([]),d=(0,u.Z)(i,2),v=d[0],k=d[1],j=(0,p.useRef)(""),y=(0,h.TH)(),b=(0,h.s0)(),Z=null!==(e=j.current)&&void 0!==e?e:"/";(0,p.useEffect)((function(){var e;j.current=null===(e=y.state)||void 0===e?void 0:e.from}),[]),(0,p.useEffect)((function(){var e=function(){var e=(0,s.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.Uh)(n);case 2:t=e.sent,a(t),k(t.genres.map((function(e){return e.name})));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[n]);var _=c.title,U=c.overview,S=c.poster_path;return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(x,{type:"button",onClick:function(){b(Z)},children:"Go back"}),(0,w.jsxs)(g,{children:[(0,w.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(S),alt:_,height:"400"}),(0,w.jsxs)(m,{children:[(0,w.jsx)("h2",{children:_}),(0,w.jsx)("div",{children:"User score"}),(0,w.jsx)("h2",{children:"Overview"}),(0,w.jsx)("div",{children:U}),(0,w.jsx)("h2",{children:"Genres"}),(0,w.jsx)("div",{children:v.join(", ")})]})]}),(0,w.jsx)("h3",{children:"Additional information"}),(0,w.jsxs)("ul",{children:[(0,w.jsx)("li",{children:(0,w.jsx)(f.rU,{to:"cast",state:{from:{backLinkHref:Z}},children:"Cast"})}),(0,w.jsx)("li",{children:(0,w.jsx)(f.rU,{to:"reviews",state:{from:{backLinkHref:Z}},children:"Reviews"})})]}),(0,w.jsx)(p.Suspense,{children:(0,w.jsx)(h.j3,{})})]})}}}]);
//# sourceMappingURL=669.64608909.chunk.js.map