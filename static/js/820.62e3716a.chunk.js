"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[820],{6242:function(e,t,n){n.d(t,{JN:function(){return c},M1:function(){return a},TP:function(){return u},gH:function(){return i},tx:function(){return s}});var r="ceffe16ccd7d46ce9932d25cc21ec8d8",o="https://api.themoviedb.org/3/",c=function(){return fetch("".concat(o,"trending/movie/day?api_key=").concat(r)).then((function(e){return e.ok?e.json():Promise.reject(new Error("Not found"))}))},i=function(e){return fetch("".concat(o,"search/movie?api_key=").concat(r,"&query=").concat(e)).then((function(e){return e.ok?e.json():Promise.reject(new Error("Not found"))}))},u=function(e){return fetch("".concat(o,"movie/").concat(e,"?api_key=").concat(r)).then((function(e){return e.ok?e.json():Promise.reject(new Error("Not found"))}))},a=function(e){return fetch("".concat(o,"movie/").concat(e,"/credits?api_key=").concat(r)).then((function(e){return e.ok?e.json():Promise.reject(new Error("Not found"))}))},s=function(e){return fetch("".concat(o,"movie/").concat(e,"/reviews?api_key=").concat(r)).then((function(e){return e.ok?e.json():Promise.reject(new Error("Not found"))}))}},4820:function(e,t,n){n.r(t);var r=n(885),o=n(2791),c=n(501),i=n(6871),u=n(6242),a=n(5562),s=n.n(a),f=n(218),l=n(184);t.default=function(){var e,t=(0,c.lr)(),n=(0,r.Z)(t,2),a=n[0],h=n[1],m=(0,o.useState)(null!==(e=a.get("query"))&&void 0!==e?e:""),d=(0,r.Z)(m,2),j=d[0],p=d[1],x=(0,o.useState)([]),v=(0,r.Z)(x,2),y=v[0],g=v[1],k=(0,i.TH)();(0,o.useEffect)((function(){""!==j&&(0,u.gH)(j).then((function(e){g(e.results),0===e.results.length&&s().Notify.failure("Sorry, there are no movies matching your search query. Please try again.")})).catch((function(e){console.error(e)}))}),[j]);return(0,l.jsxs)(f.iR,{children:[(0,l.jsxs)(f.l0,{onSubmit:function(e){e.preventDefault(),p(e.target.elements.text.value.trim()),h(""!==e.target.elements.text.value.trim()?{query:e.target.elements.text.value.trim()}:{}),""===e.target.elements.text.value.trim()&&s().Notify.failure("Enter a query"),e.target.reset()},children:[(0,l.jsx)(f.IG,{type:"text",name:"text"}),(0,l.jsx)(f.zx,{type:"submit"})]}),(0,l.jsx)(f.Ul,{children:y.length>0&&y.map((function(e){return(0,l.jsx)(f.Li,{children:(0,l.jsxs)(c.rU,{to:"/movies/".concat(e.id),state:{from:k},children:[(0,l.jsx)(f.Vd,{children:(0,l.jsx)(f.Ei,{src:"https://image.tmdb.org/t/p/w500".concat(e.poster_path),alt:e.title})}),(0,l.jsx)(f.Wr,{children:(0,l.jsx)(f.Dx,{children:e.title})})]})},e.id)}))})]})}}}]);
//# sourceMappingURL=820.62e3716a.chunk.js.map