(this.webpackJsonpmemory_game=this.webpackJsonpmemory_game||[]).push([[0],{13:function(e,t,s){},14:function(e,t,s){"use strict";s.r(t);var c=s(1),r=s.n(c),a=s(7),n=s.n(a),o=s(2),i=s(5),d=s(0);var l=function(e){var t,s=e.id,c=e.name,r=e.handleCardClick;return Object(d.jsxs)("div",{className:"card",id:s,onClick:function(){return r(s)},children:[Object(d.jsx)("div",{className:"card-title",children:(t=c,t.charAt(0).toUpperCase()+t.slice(1))}),Object(d.jsx)("img",{className:"card-image",src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(s,".png"),alt:c}),Object(d.jsx)("div",{className:"card-footer"})]})};var m=function(e){var t=e.updateScore,s=Object(c.useState)([]),r=Object(o.a)(s,2),a=r[0],n=r[1],m=Object(c.useState)([]),u=Object(o.a)(m,2),j=u[0],b=u[1],g=Object(c.useState)([]),f=Object(o.a)(g,2),v=f[0],h=f[1],p=Object(c.useState)(!0),O=Object(o.a)(p,2),w=O[0],x=O[1],k=Object(c.useState)((new Date).getTime()/1e3),S=Object(o.a)(k,2),L=S[0],I=S[1];function M(){for(var e=[];e.length<3;){var t=Math.floor(151*Math.random()+1);e.includes(t)||e.push(t)}return e}function N(e){!function(){var e=(new Date).getTime()/1e3;if(console.log(e-L),e-L>540){for(var t=1;t<=151;t++)(new Image).src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(t,".png");I(e)}}();var s=v.indexOf(e);if(-1!==s){P(!0),t(!0);var c=Object(i.a)(v);if(c.splice(s,1),0===c.length)!function(){for(var e=[],t=Object(i.a)(a),s=!1;!s;){var c=Math.floor(151*Math.random()+1);t.includes(c)||(t.push(c),e.push(c),s=!0)}y(t),n(t),h(e)}();else{var r=Object(i.a)(a);y(r),h(c),n(r)}}else{t(!1),P(!1);var o=M();n(o),h(o)}}function y(e){for(var t,s,c=e.length;0!==c;)s=Math.floor(Math.random()*c),t=e[c-=1],e[c]=e[s],e[s]=t;return e}function P(e){var t=document.getElementById("score"),s=document.getElementById("hiscore"),c=document.getElementById("title");e?(t.classList.add("green-glow"),s.classList.add("green-glow"),c.classList.add("green-glow"),setTimeout((function(){t.classList.remove("green-glow"),s.classList.remove("green-glow"),c.classList.remove("green-glow")}),500)):(t.classList.add("red-glow"),s.classList.add("red-glow"),c.classList.add("red-glow"),setTimeout((function(){t.classList.remove("red-glow"),s.classList.remove("red-glow"),c.classList.remove("red-glow")}),500))}return Object(c.useEffect)((function(){fetch("https://pokeapi.co/api/v2/pokemon/?limit=151").then((function(e){return e.json()})).then((function(e){b(e.results),x(!1)}))}),[]),Object(c.useEffect)((function(){if(!w){var e=M();n(e),h(e);for(var t=1;t<=151;t++){(new Image).src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(t,".png")}}}),[w]),Object(d.jsx)("div",{id:"gameboard",children:!w&&a.map((function(e){var t=j[e-1].name;return Object(d.jsx)(l,{id:e,name:t,handleCardClick:N},e)}))})};var u=function(e){var t=e.score,s=e.bestScore;return Object(d.jsxs)("div",{id:"menu",children:[Object(d.jsxs)("div",{id:"score",className:"menu-item",children:["Score: ",t]}),Object(d.jsx)("div",{id:"title",className:"menu-item big",children:"Pok\xe9mon Memory Game"}),Object(d.jsxs)("div",{id:"hiscore",className:"menu-item",children:["Hi-Score: ",s]})]})};s(13);var j=function(){var e=Object(c.useState)(0),t=Object(o.a)(e,2),s=t[0],r=t[1],a=Object(c.useState)(0),n=Object(o.a)(a,2),i=n[0],l=n[1];return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(u,{score:s,bestScore:i}),Object(d.jsx)(m,{updateScore:function(e){e?(s>=i&&l(s+1),r(s+1)):r(0)}})]})};n.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(j,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.d459fa46.chunk.js.map