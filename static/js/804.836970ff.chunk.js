"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[804],{6242:function(e,n,t){t.d(n,{JN:function(){return c},M1:function(){return a},TP:function(){return s},gH:function(){return i},tx:function(){return u}});var r="ceffe16ccd7d46ce9932d25cc21ec8d8",o="https://api.themoviedb.org/3/",c=function(){return fetch("".concat(o,"trending/movie/day?api_key=").concat(r)).then((function(e){return e.ok?e.json():Promise.reject(new Error("Not found"))}))},i=function(e){return fetch("".concat(o,"search/movie?api_key=").concat(r,"&query=").concat(e)).then((function(e){return e.ok?e.json():Promise.reject(new Error("Not found"))}))},s=function(e){return fetch("".concat(o,"movie/").concat(e,"?api_key=").concat(r)).then((function(e){return e.ok?e.json():Promise.reject(new Error("Not found"))}))},a=function(e){return fetch("".concat(o,"movie/").concat(e,"/credits?api_key=").concat(r)).then((function(e){return e.ok?e.json():Promise.reject(new Error("Not found"))}))},u=function(e){return fetch("".concat(o,"movie/").concat(e,"/reviews?api_key=").concat(r)).then((function(e){return e.ok?e.json():Promise.reject(new Error("Not found"))}))}},804:function(e,n,t){t.r(n);var r=t(885),o=t(6871),c=t(501),i=t(2791),s=t(6242),a=t(8402),u=t(218),d=t(184),h=t(5667).animateScroll;n.default=function(){var e,n,t=(0,i.useState)({}),l=(0,r.Z)(t,2),f=l[0],j=l[1],x=(0,i.useState)(""),m=(0,r.Z)(x,2),p=m[0],v=m[1],k=(0,i.useState)([]),w=(0,r.Z)(k,2),_=w[0],g=w[1],b=null!==(e=null===(n=(0,o.TH)().state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/",C=p.slice(0,4),E=Math.round(10*f.vote_average),y=f.overview,N=(0,o.UO)().movieId,P=null!==f.poster_path&&void 0!==f.poster_path?"https://image.tmdb.org/t/p/w500".concat(f.poster_path):"";(0,i.useEffect)((function(){(0,s.TP)(N).then((function(e){j(e),v(e.release_date),g(e.genres)}))}),[N]);var S=function(){h.scrollTo(600)};return(0,d.jsxs)(u.W2,{children:[(0,d.jsx)(c.rU,{to:b,children:(0,d.jsx)(u.ks,{children:"Go back"})}),(0,d.jsxs)(u.fo,{children:[(0,d.jsx)(u.Vd,{children:(0,d.jsx)(u.Ei,{src:"".concat(P),alt:f.title})}),(0,d.jsxs)(u.CL,{children:[(0,d.jsxs)(u.mG,{children:[f.title," (",C,")"]}),(0,d.jsxs)("p",{children:["User Score: ",E,"%"]}),(0,d.jsx)(u.xv,{children:"Overview"}),(0,d.jsx)("p",{children:y}),(0,d.jsx)(u.a9,{children:"Genres"}),(0,d.jsx)(u.CJ,{children:_.length>0&&_.map((function(e){return(0,d.jsx)(u.mH,{children:(0,d.jsx)("p",{children:e.name})},e.id)}))})]})]}),(0,d.jsxs)(u.hY,{children:[(0,d.jsx)("p",{children:"Additional information"}),(0,d.jsxs)(u.jh,{children:[(0,d.jsx)(u.Qp,{children:(0,d.jsx)(u.Fg,{to:"cast",state:{from:b},onClick:S,children:"Cast"})}),(0,d.jsx)(u.Qp,{children:(0,d.jsx)(u.Fg,{to:"reviews",state:{from:b},onClick:S,children:"Reviews"})})]})]}),(0,d.jsx)(u.Ek,{children:(0,d.jsx)(i.Suspense,{fallback:(0,d.jsx)(u.aN,{children:(0,d.jsx)(a.s5,{strokeColor:"#3f51b5",strokeWidth:"5",animationDuration:"0.75",width:"150",visible:!0})}),children:(0,d.jsx)(o.j3,{})})})]})}}}]);
//# sourceMappingURL=804.836970ff.chunk.js.map