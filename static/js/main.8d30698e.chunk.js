(this.webpackJsonpmemory_game=this.webpackJsonpmemory_game||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),r=c(7),s=c.n(r),i=c(2),o=c(6),l=c(0);var u=function(e){var t,c=e.id,a=e.name,n=e.handleCardClick;return Object(l.jsxs)("div",{className:"card",id:c,onClick:function(){return n(c)},children:[Object(l.jsx)("div",{className:"card-title",children:(t=a,t.charAt(0).toUpperCase()+t.slice(1))}),Object(l.jsx)("img",{className:"card-image",src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(c,".png"),alt:a}),Object(l.jsx)("div",{className:"card-footer"})]})};var d=function(e){var t=e.updateScore,c=e.updateLevel,n=Object(a.useState)([]),r=Object(i.a)(n,2),s=r[0],d=r[1],j=Object(a.useState)([]),m=Object(i.a)(j,2),b=m[0],v=m[1],f=Object(a.useState)([]),O=Object(i.a)(f,2),h=O[0],p=O[1],g=Object(a.useState)(!0),x=Object(i.a)(g,2),S=x[0],k=x[1];function N(e){for(var t=[];t.length<e;){var c=Math.floor(151*Math.random()+1);t.includes(c)||t.push(c)}return t}function w(e){var a=h.indexOf(e);if(-1!==a){t(!0);var n=Object(o.a)(h);if(n.splice(a,1),0===n.length){c(!0);var r=N(s.length+1);d(r),p(r)}else{var i=Object(o.a)(s);!function(e){var t,c,a=e.length;for(;0!==a;)c=Math.floor(Math.random()*a),t=e[a-=1],e[a]=e[c],e[c]=t}(i),p(n),d(i)}}else{t(!1),c(!1);var l=N(3);d(l),p(l)}}return Object(a.useEffect)((function(){fetch("https://pokeapi.co/api/v2/pokemon/?limit=151").then((function(e){return e.json()})).then((function(e){v(e.results),k(!1)}))}),[]),Object(a.useEffect)((function(){if(!S){var e=N(3);d(e),p(e)}}),[S]),Object(l.jsx)("div",{id:"gameboard",children:!S&&s.map((function(e){var t=b[e-1].name;return Object(l.jsx)(u,{id:e,name:t,handleCardClick:w},e)}))})};var j=function(e){var t=e.score,c=e.bestScore,a=e.level;return Object(l.jsxs)("div",{id:"menu",children:[Object(l.jsxs)("div",{id:"score",className:"menu-item",children:["Score: ",t]}),Object(l.jsxs)("div",{id:"level",className:"menu-item big",children:["Level ",a]}),Object(l.jsxs)("div",{id:"hiscore",className:"menu-item",children:["Hi-Score: ",c]})]})};c(13);var m=function(){var e=Object(a.useState)(0),t=Object(i.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)(0),s=Object(i.a)(r,2),o=s[0],u=s[1],m=Object(a.useState)(1),b=Object(i.a)(m,2),v=b[0],f=b[1];function O(e,t){var c=document.getElementById(t);e?(c.classList.add("green-glow"),setTimeout((function(){c.classList.remove("green-glow")}),500)):(c.classList.add("red-glow"),setTimeout((function(){c.classList.remove("red-glow")}),500))}return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(j,{score:c,bestScore:o,level:v}),Object(l.jsx)(d,{updateScore:function(e){e?(O(!0,"score"),c>=o&&(O(!0,"hiscore"),u(c+1)),n(c+1)):(O(!1,"score"),n(0))},updateLevel:function(e){e?(O(!0,"level"),f(v+1)):(O(!1,"level"),f(1))}})]})};s.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(m,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.8d30698e.chunk.js.map