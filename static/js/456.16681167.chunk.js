"use strict";(self.webpackChunkreact_movie=self.webpackChunkreact_movie||[]).push([[456],{1821:function(e,t,s){s(2791);var n=s(7470),l=s(2758),i=s(184);t.Z=(0,n.withErrorBoundary)((function(e){return(0,i.jsx)("div",{className:"skeleton ".concat(e.className),style:{height:e.height,width:e.width||"100%",borderRadius:e.radius}})}),{FallbackComponent:l.q})},8048:function(e,t,s){s.d(t,{q:function(){return o}});var n=s(1821),l=(s(2791),s(8185)),i=s(5772),a=s(3197),r=s(460),c=s(184),o=function(){return(0,c.jsxs)("div",{className:"flex flex-col h-full p-3 text-white rounded-lg select-none movie-card bg-slate-800",children:[(0,c.jsx)(n.Z,{width:"100%",height:"250px",radius:"8px",className:"mb-5"}),(0,c.jsxs)("div",{className:"flex flex-col flex-1",children:[(0,c.jsx)("h3",{className:"mt-3 mb-3 text-xl font-bold ",children:(0,c.jsx)(n.Z,{width:"100%",height:"20px"})}),(0,c.jsxs)("div",{className:"flex items-center justify-between mb-10 text-sm opacity-50",children:[(0,c.jsx)("span",{children:(0,c.jsx)(n.Z,{width:"50px",height:"10px"})}),(0,c.jsx)("span",{children:(0,c.jsx)(n.Z,{width:"30px",height:"10px"})})]}),(0,c.jsx)(n.Z,{width:"100%",height:"45px",radius:"6px"})]})]})};t.Z=function(e){var t=e.item,s=t.title,n=t.vote_average,o=t.poster_path,d=t.release_date,u=t.id,m=(0,i.s0)();return(0,c.jsxs)("div",{className:"flex flex-col h-full p-3 text-white rounded-lg select-none movie-card bg-slate-800",children:[(0,c.jsx)("div",{className:"film__item--img",children:(0,c.jsx)("img",{src:a.Qo.image500(o),alt:"poster-film",className:"w-full h-[350px] object-fill rounded-lg cursor-pointer",onClick:function(){return m("/movie/".concat(u))}})}),(0,c.jsxs)("div",{className:"flex flex-col flex-1",children:[(0,c.jsx)("h3",{className:"mt-3 mb-3 text-xl font-bold cursor-pointer hover:underline movie-card--title",onClick:function(){return m("/movie/".concat(u))},children:s}),(0,c.jsxs)("div",{className:"flex items-center justify-between mb-6 text-sm movie-card--content",children:[(0,c.jsx)("div",{className:"opacity-50",children:(0,c.jsx)("span",{children:new Date(d).getFullYear()})}),(0,c.jsxs)("div",{className:"flex items-center gap-x-2",children:[(0,c.jsx)("span",{className:"opacity-50",children:parseFloat(n).toFixed(1)}),(0,c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"#F5B50A",className:"w-6 h-6 mr-3",children:(0,c.jsx)("path",{fillRule:"evenodd",d:"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z",clipRule:"evenodd"})})]})]}),(0,c.jsxs)(r.Z,{bgColor:"primary",className:"flex items-center justify-center text-xl font-bold gap-x-2 btn-movie--detail",onClick:function(){return m("/movie/".concat(u))},children:["Watch Now",(0,c.jsx)(l.rUT,{size:25})]})]})]})}},8112:function(e,t,s){s.d(t,{Z:function(){return i}});var n=s(885),l=s(2791);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3,s=(0,l.useState)(e),i=(0,n.Z)(s,2),a=i[0],r=i[1];return(0,l.useEffect)((function(){var s=setTimeout((function(){r(e)}),t);return function(){clearTimeout(s)}}),[t,e]),a}},4456:function(e,t,s){s.r(t),s.d(t,{default:function(){return j}});var n=s(885),l=s(8048),i=s(3197),a=s(8112),r=s(2791),c=s(6048),o=s.n(c),d=s(7821),u=s.n(d),m=s(2419),x=s(4261),h=s(5772),f=s(7686),p=s.n(f),v=s(184),g=function(e){var t=e.item;(0,r.useEffect)((function(){document.querySelector("#root").scrollIntoView({behavior:"smooth"},0)}),[]);var s=t.name,n=t.profile_path,l=t.id,a=t.known_for_department,c=(0,h.s0)();return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(p(),{children:(0,v.jsx)("div",{className:"lists__all--items",children:(0,v.jsxs)("div",{className:"mx-4 film--item",children:[(0,v.jsx)("div",{className:"film--item-img ",children:n?(0,v.jsx)("img",{src:i.Qo.image500(n),onClick:function(){return c("/actor/".concat(l))},alt:""}):(0,v.jsx)("img",{src:"/avatar.png",onClick:function(){return c("/actor/".concat(l))},className:"object-cover w-full h-full",alt:""})}),(0,v.jsxs)("div",{className:"film--item-content",children:[(0,v.jsx)("div",{className:"flex items-center mt-4 text-gray-400",children:a}),(0,v.jsx)("h6",{className:"item--content-h6",onClick:function(){return c("/actor/".concat(l))},children:s})]})]})})})})},j=function(){(0,r.useEffect)((function(){document.querySelector("#root").scrollIntoView({behavior:"smooth"},0)}),[]);var e=(0,r.useState)(1),t=(0,n.Z)(e,2),s=t[0],c=t[1],d=(0,r.useState)(""),h=(0,n.Z)(d,2),f=h[0],p=h[1],j=(0,r.useState)(i.Qo.getActorList("popular",s)),w=(0,n.Z)(j,2),N=w[0],b=w[1],Z=(0,a.Z)(f,500),k=(0,m.ZP)(N,i._i),y=k.data,_=k.error,C=!y&&!_;(0,r.useEffect)((function(){b(Z?i.Qo.getActorSearch(Z,s):i.Qo.getActorList("popular",s))}),[Z,s]);var S=(null===y||void 0===y?void 0:y.results)||[],A=(0,r.useState)(0),L=(0,n.Z)(A,2),F=L[0],E=L[1],q=(0,r.useState)(0),Q=(0,n.Z)(q,2),z=Q[0],B=Q[1];(0,r.useEffect)((function(){y&&y.total_results&&E(Math.ceil(y.total_results/20))}),[y,z]);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("div",{className:"select-none py-28 page-container wrapp-list--page",children:[(0,v.jsxs)("div",{className:"flex mb-10 wrapp-search",children:[(0,v.jsx)("div",{className:"flex-1 search",children:(0,v.jsx)("input",{type:"text",className:"w-full p-4 text-white outline-none bg-slate-800 rounded-xl",placeholder:"Type here to search...",onChange:function(e){p(e.target.value)}})}),(0,v.jsx)("button",{className:"p-4 text-white rounded-lg bg-primary",children:(0,v.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-6 h-6",children:(0,v.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"})})})]}),(0,v.jsx)("h2",{className:"mb-5 text-3xl font-bold text-white capitalize lists__film--head",children:"All Actors"}),C&&(0,v.jsx)("div",{className:"grid grid-cols-4 gap-10 wrapp-list--item",children:new Array(20).fill(0).map((function(){return(0,v.jsx)(l.q,{},(0,x.Z)())}))}),(0,v.jsx)("div",{className:"grid grid-cols-4 gap-10 wrapp-list--item",children:!C&&S.length>0&&S.map((function(e){return(0,v.jsx)(g,{item:e},e.id)}))}),(0,v.jsx)("div",{className:"mt-20 wrapp-pagination",children:(0,v.jsx)(o(),{breakLabel:"...",nextLabel:"next >",onPageChange:function(e){var t=20*e.selected%y.total_results;B(t),c(e.selected+1)},pageRangeDisplayed:5,pageCount:F,previousLabel:"< previous",renderOnZeroPageCount:null,className:"pagination"})})]}),(0,v.jsx)(u(),{smooth:!0,className:"pl-[6px]"})]})}}}]);
//# sourceMappingURL=456.16681167.chunk.js.map