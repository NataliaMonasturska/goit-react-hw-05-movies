"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[357],{6242:function(n,e,t){t.d(e,{JN:function(){return c},M1:function(){return f},TP:function(){return u},gH:function(){return i},tx:function(){return a}});var r="ceffe16ccd7d46ce9932d25cc21ec8d8",o="https://api.themoviedb.org/3/",c=function(){return fetch("".concat(o,"trending/movie/day?api_key=").concat(r)).then((function(n){return n.ok?n.json():Promise.reject(new Error("Not found"))}))},i=function(n){return fetch("".concat(o,"search/movie?api_key=").concat(r,"&query=").concat(n)).then((function(n){return n.ok?n.json():Promise.reject(new Error("Not found"))}))},u=function(n){return fetch("".concat(o,"movie/").concat(n,"?api_key=").concat(r)).then((function(n){return n.ok?n.json():Promise.reject(new Error("Not found"))}))},f=function(n){return fetch("".concat(o,"movie/").concat(n,"/credits?api_key=").concat(r)).then((function(n){return n.ok?n.json():Promise.reject(new Error("Not found"))}))},a=function(n){return fetch("".concat(o,"movie/").concat(n,"/reviews?api_key=").concat(r)).then((function(n){return n.ok?n.json():Promise.reject(new Error("Not found"))}))}},6357:function(n,e,t){t.r(e);var r=t(885),o=t(6871),c=t(2791),i=t(6242),u=t(218),f=t(184);e.default=function(){var n=(0,c.useState)([]),e=(0,r.Z)(n,2),t=e[0],a=e[1],s=(0,o.UO)().movieId;return(0,c.useEffect)((function(){(0,i.tx)(s).then((function(n){a(n.results)})).catch((function(n){console.error(n)}))}),[s]),(0,f.jsx)("div",{children:(0,f.jsx)("ul",{children:t.length>0?t.map((function(n){return(0,f.jsxs)("li",{children:[(0,f.jsxs)(u.xy,{children:["Author: ",n.author]}),(0,f.jsx)("p",{children:n.content})]},n.id)})):(0,f.jsx)("p",{children:"We don`t have any reviews for this movie"})})})}}}]);
//# sourceMappingURL=357.7c19b4b1.chunk.js.map