"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[266],{1266:function(n,t,e){e.r(t);var r=e(885),c=e(2791),o=e(6871),i=e(501),u=e(1933),a=e(218),f=e(184);t.default=function(){var n=(0,c.useState)([]),t=(0,r.Z)(n,2),e=t[0],s=t[1],h=(0,c.useState)(!0),d=(0,r.Z)(h,2),l=d[0],m=d[1],j=(0,o.TH)();return(0,c.useEffect)((function(){m(!0),(0,u.JN)().then((function(n){s(n.results)})).catch((function(n){console.error(n)})).finally((function(){m(!1)}))}),[]),(0,f.jsx)(a.Mi,{children:!l&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(a.H1,{children:"Trending today"}),(0,f.jsx)(a.Ul,{children:e.length>0&&e.map((function(n){return(0,f.jsx)(a.Li,{children:(0,f.jsxs)(i.rU,{to:"/movies/".concat(n.id),state:{from:j},children:[(0,f.jsx)(a.Vd,{children:(0,f.jsx)(a.Ei,{src:"https://image.tmdb.org/t/p/w500".concat(n.poster_path),alt:n.title})}),(0,f.jsx)(a.Wr,{children:(0,f.jsx)(a.Dx,{children:n.title})})]})},n.id)}))})]})})}},1933:function(n,t,e){e.d(t,{JN:function(){return o},M1:function(){return a},TP:function(){return u},gH:function(){return i},tx:function(){return f}});var r="ceffe16ccd7d46ce9932d25cc21ec8d8",c="https://api.themoviedb.org/3/",o=function(){return fetch("".concat(c,"trending/movie/day?api_key=").concat(r)).then((function(n){return n.ok?n.json():Promise.reject(new Error("Not found"))}))},i=function(n){return fetch("".concat(c,"search/movie?api_key=").concat(r,"&query=").concat(n)).then((function(n){return n.ok?n.json():Promise.reject(new Error("Not found"))}))},u=function(n){return fetch("".concat(c,"movie/").concat(n,"?api_key=").concat(r)).then((function(n){return n.ok?n.json():Promise.reject(new Error("Not found"))}))},a=function(n){return fetch("".concat(c,"movie/").concat(n,"/credits?api_key=").concat(r)).then((function(n){return n.ok?n.json():Promise.reject(new Error("Not found"))}))},f=function(n){return fetch("".concat(c,"movie/").concat(n,"/reviews?api_key=").concat(r)).then((function(n){return n.ok?n.json():Promise.reject(new Error("Not found"))}))}}}]);
//# sourceMappingURL=266.80774c93.chunk.js.map