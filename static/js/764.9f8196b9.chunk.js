"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[764],{2764:function(t,e,n){n.r(e);var r=n(885),o=n(2791),c=n(501),i=n(6871),u=n(1933),a=n(5562),s=n.n(a),f=n(218),h=n(8402),l=n(184);e.default=function(){var t,e,n=(0,c.lr)(),a=(0,r.Z)(n,2),d=a[0],m=a[1],j=(0,o.useState)(null!==(t=d.get("query"))&&void 0!==t?t:""),y=(0,r.Z)(j,2),p=y[0],v=y[1],k=(0,o.useState)(!1),x=(0,r.Z)(k,2),g=x[0],w=x[1],_=(0,o.useState)(null!==(e=d.get("query"))&&void 0!==e?e:""),N=(0,r.Z)(_,2),b=N[0],E=N[1],P=(0,o.useState)([]),q=(0,r.Z)(P,2),S=q[0],Z=q[1],C=(0,i.TH)();(0,o.useEffect)((function(){""!==p&&(w(!0),(0,u.gH)(p).then((function(t){Z(t.results),0===t.results.length&&s().Notify.failure("Sorry, there are no movies matching your search query. Please try again.")})).catch((function(t){console.error(t)})).finally((function(){w(!1)})))}),[p]);return(0,l.jsxs)(f.y1,{children:[(0,l.jsxs)(f.l0,{onSubmit:function(t){if(t.preventDefault(),""===b.trim())return s().Notify.failure("Enter a query"),void E("");v(b.trim()),m(""!==b.trim()?{query:b.trim()}:{})},children:[(0,l.jsx)(f.IG,{type:"text",name:"text",value:b,onChange:function(t){E(t.target.value)}}),(0,l.jsx)(f.zx,{type:"submit"})]}),!g&&(0,l.jsx)(f.Ul,{children:S.length>0&&S.map((function(t){return(0,l.jsx)(f.Li,{children:(0,l.jsxs)(c.rU,{to:"/movies/".concat(t.id),state:{from:C},children:[(0,l.jsx)(f.Vd,{children:(0,l.jsx)(f.Ei,{src:"https://image.tmdb.org/t/p/w500".concat(t.poster_path),alt:t.title})}),(0,l.jsx)(f.Wr,{children:(0,l.jsx)(f.Dx,{children:t.title})})]})},t.id)}))}),g&&(0,l.jsx)(f.aN,{children:(0,l.jsx)(h.s5,{strokeColor:"#3f51b5",strokeWidth:"5",animationDuration:"0.75",width:"150",visible:!0})})]})}},1933:function(t,e,n){n.d(e,{JN:function(){return c},M1:function(){return a},TP:function(){return u},gH:function(){return i},tx:function(){return s}});var r="ceffe16ccd7d46ce9932d25cc21ec8d8",o="https://api.themoviedb.org/3/",c=function(){return fetch("".concat(o,"trending/movie/day?api_key=").concat(r)).then((function(t){return t.ok?t.json():Promise.reject(new Error("Not found"))}))},i=function(t){return fetch("".concat(o,"search/movie?api_key=").concat(r,"&query=").concat(t)).then((function(t){return t.ok?t.json():Promise.reject(new Error("Not found"))}))},u=function(t){return fetch("".concat(o,"movie/").concat(t,"?api_key=").concat(r)).then((function(t){return t.ok?t.json():Promise.reject(new Error("Not found"))}))},a=function(t){return fetch("".concat(o,"movie/").concat(t,"/credits?api_key=").concat(r)).then((function(t){return t.ok?t.json():Promise.reject(new Error("Not found"))}))},s=function(t){return fetch("".concat(o,"movie/").concat(t,"/reviews?api_key=").concat(r)).then((function(t){return t.ok?t.json():Promise.reject(new Error("Not found"))}))}}}]);
//# sourceMappingURL=764.9f8196b9.chunk.js.map