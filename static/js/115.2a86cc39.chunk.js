"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[115],{9115:function(n,t,e){e.r(t);var r=e(885),c=e(6871),o=e(2791),i=e(1933),a=e(1014),u=e(8402),f=e(218),s=e(184);t.default=function(){var n=(0,o.useState)([]),t=(0,r.Z)(n,2),e=t[0],h=t[1],d=(0,o.useState)(!0),l=(0,r.Z)(d,2),m=l[0],p=l[1],j=(0,c.UO)().movieId;return(0,o.useEffect)((function(){p(!0),(0,i.M1)(j).then((function(n){h(n.cast)})).catch((function(n){console.error(n)})).finally((function(){p(!1)}))}),[j]),(0,s.jsxs)(f.y1,{children:[!m&&e.length>0&&(0,s.jsx)(f.Ul,{children:e.map((function(n){return(0,s.jsxs)(f.Li,{children:[(0,s.jsx)(f.Vd,{children:null!==n.profile_path&&void 0!==n.profile_path?(0,s.jsx)(f.Ei,{src:"https://image.tmdb.org/t/p/w500".concat(n.profile_path),alt:n.name}):(0,s.jsx)(f.Ei,{src:a,alt:n.name})}),(0,s.jsxs)(f.A9,{children:[(0,s.jsx)(f.Dx,{children:n.name}),(0,s.jsxs)("p",{children:["Character: ",n.character]})]})]},n.id)}))}),m&&(0,s.jsx)(f.aN,{children:(0,s.jsx)(u.s5,{strokeColor:"#3f51b5",strokeWidth:"5",animationDuration:"0.75",width:"150",visible:!0})})]})}},1933:function(n,t,e){e.d(t,{JN:function(){return o},M1:function(){return u},TP:function(){return a},gH:function(){return i},tx:function(){return f}});var r="ceffe16ccd7d46ce9932d25cc21ec8d8",c="https://api.themoviedb.org/3/",o=function(){return fetch("".concat(c,"trending/movie/day?api_key=").concat(r)).then((function(n){return n.ok?n.json():Promise.reject(new Error("Not found"))}))},i=function(n){return fetch("".concat(c,"search/movie?api_key=").concat(r,"&query=").concat(n)).then((function(n){return n.ok?n.json():Promise.reject(new Error("Not found"))}))},a=function(n){return fetch("".concat(c,"movie/").concat(n,"?api_key=").concat(r)).then((function(n){return n.ok?n.json():Promise.reject(new Error("Not found"))}))},u=function(n){return fetch("".concat(c,"movie/").concat(n,"/credits?api_key=").concat(r)).then((function(n){return n.ok?n.json():Promise.reject(new Error("Not found"))}))},f=function(n){return fetch("".concat(c,"movie/").concat(n,"/reviews?api_key=").concat(r)).then((function(n){return n.ok?n.json():Promise.reject(new Error("Not found"))}))}},1014:function(n,t,e){n.exports=e.p+"static/media/DefaultImg.5f95e72c057493b57728.jpg"}}]);
//# sourceMappingURL=115.2a86cc39.chunk.js.map