(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{64998:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(76570)}])},44350:function(e,s,t){"use strict";var a=t(11527),r=t(71315),i=t(15453),l=t.n(i),n=t(50959),o=t(48529),c=t(12362);let d=e=>{let{children:s,disabled:t,Icon:i,isLoading:d,href:x,variant:h="neutral",noLayout:m,noAnim:p,onClick:u,...g}=e,[b,j]=(0,n.useState)(!1),[v,f]=(0,n.useState)(!1),N=d||v,y=(0,a.jsxs)("div",{className:"".concat(m?"":"px-8 py-4"," overflow-hidden"),children:[(0,a.jsx)(r.E.div,{initial:!1,animate:{y:N?-10:0,opacity:N?0:1},transition:{duration:.1,delay:N?0:.25},children:(0,a.jsxs)(r.E.div,{initial:!1,animate:{x:b?-13:0},transition:{delay:.1},className:"flex items-center",children:[i&&(0,a.jsx)("div",{className:"-ml-2 mr-2",children:(0,a.jsx)(i,{})}),s]})}),(0,a.jsx)("div",{className:"absolute top-0 right-0 pr-3 bottom-0 overflow-hidden flex items-center justify-center",children:(0,a.jsx)(r.E.div,{initial:!1,animate:{x:b||N?0:-30,opacity:b&&!N?1:0},children:(0,a.jsx)(c.Tfp,{size:24,className:"opacity-50 text-blue-2"})})}),(0,a.jsx)("div",{className:"absolute top-0 left-0 right-0 bottom-0 overflow-hidden flex items-center justify-center",children:(0,a.jsx)(r.E.div,{transition:{delay:N?.1:0,duration:.1},initial:!1,animate:{y:N?0:10,opacity:N?1:0},children:(0,a.jsx)(o.epG,{size:36,className:"opacity-50 animate-spin-fast"})})})]}),w=e=>{if(u){let s=u(e);s&&"then"in s&&(f(!0),s.finally(()=>f(!1)))}},k="\n    btn relative\n    ".concat("neutral"===h?"btn-neutral":"discret"===h?"btn-discret":"","\n  ");return x?(0,a.jsx)(l(),{href:x,className:k,onMouseEnter:p?()=>{}:()=>j(!0),onMouseLeave:p?()=>{}:()=>j(!1),onClick:()=>f(!0),children:y}):(0,a.jsx)("button",{className:k,type:"button",disabled:N||t,...g,onMouseEnter:p?()=>{}:()=>j(!0),onMouseLeave:p?()=>{}:()=>j(!1),onClick:w,children:y})};s.Z=d},5317:function(e,s,t){"use strict";var a=t(11527),r=t(93366),i=t.n(r);let l=e=>{let{responsive:s}=e;return(0,a.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,a.jsx)(i(),{className:"rounded-full",src:"/img/logo.webp",alt:"logo",width:30,height:30}),(0,a.jsxs)("div",{className:"".concat(s?"invisible xl:visible":""),children:[(0,a.jsxs)("div",{className:"uppercase text-blue-2 tracking-widest select-none",children:["Astro",(0,a.jsx)("span",{className:"font-semibold",children:"quirks"})]}),(0,a.jsx)("div",{className:"uppercase text-blue-2 tracking-widest select-none opacity-60 text-[11px]",children:"Cosmos ecosystem validator"})]})]})};s.Z=l},76570:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return ee}});var a=t(11527),r=t(71315),i=t(93366),l=t.n(i),n=t(12362),o=t(44350),c=t(1232),d=t(20778),x=t(44007),h=t(50959),m=t(1759);let p=async()=>{let e=await fetch("https://raw.githubusercontent.com/AstroquirksHQ/quirky_rewards/main/data.json").then(e=>e.json());return e};var u=t(52611);let g=e=>{let{labelOpened:s,labelClosed:t,children:i}=e,[l,o]=(0,h.useState)(!1),c=()=>o(!l);return(0,a.jsxs)(u.M,{initial:!1,children:[(0,a.jsxs)("button",{className:"block w-full bg-blue-6 select-none ".concat(l?"":"rounded-b"," bg-opacity-40 p-4 text-center hover:bg-opacity-50 active:bg-opacity-60 transition-colors relative"),onClick:c,children:[(0,a.jsx)("span",{className:"relative",children:l?s:t}),(0,a.jsx)("span",{className:"absolute right-4 top-0 bottom-0 flex items-center justify-center",children:l?(0,a.jsx)(n.rH8,{className:"opacity-50"}):(0,a.jsx)(n.bTu,{className:"opacity-50"})})]}),l&&(0,a.jsx)(r.E.section,{className:"bg-blue-5 bg-opacity-70",layout:!0,initial:"initial",animate:"animate",exit:"exit",variants:{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto",transition:{opacity:{duration:.2,delay:.2},height:{duration:.2}}},exit:{opacity:0,height:0}},transition:{opacity:{duration:.2},height:{duration:.3,delay:.2}},children:i},"content")]})},b={UMEE:"https://cdn.jsdelivr.net/gh/cosmos/chain-registry/umee/images/umee.png",STARS:"https://cdn.jsdelivr.net/gh/cosmos/chain-registry/stargaze/images/stars.png",MARS:"https://cdn.jsdelivr.net/gh/cosmos/chain-registry/mars/images/mars-token.png",JUNO:"https://cdn.jsdelivr.net/gh/cosmos/chain-registry/juno/images/juno.png",HUAHUA:"https://cdn.jsdelivr.net/gh/cosmos/chain-registry/chihuahua/images/huahua.png"},j=e=>{let{ticker:s,...t}=e,r=b[s];return r?(0,a.jsx)("img",{src:r,alt:s,...t}):null};var v=t(32699),f=t(49161),N=t(91892),y=t(23402),w=t(78151),k=t(404);let E=["#c80064","#d7658b","#df979e","#e4bcad","#dedad2","#badbdb","#98d1d1","#76c8c8","#54bebe"],A=e=>{let{snapshot:s}=e,{data:t}=s,r=(0,h.useMemo)(()=>{let e=[],s=0;for(;s<t.length&&s<7;s++){let a=t[s],r=Number((0,c.Z)(a.share).times(100).toFixed(2));e.push({name:a.address,value:r})}let i=t.slice(s);if(i.length){let l=Number((0,c.Z)(i.reduce((e,s)=>e+Number((0,c.Z)(s.share).times(100).toFixed(2)),0)).toFixed(2));e.push({name:"(...".concat(i.length," addresses)"),value:l})}return e},[t]);return(0,a.jsx)(N.h,{width:"100%",height:"100%",children:(0,a.jsxs)(y.u,{width:400,height:300,children:[(0,a.jsx)(w.b,{dataKey:"value",data:r,cx:"50%",cy:"50%",outerRadius:80,fill:"hsl(202, 46%, 30%)",stroke:"hsl(222, 61%, 7%)",label(e){let{value:s}=e;return"".concat(s,"%")},animationDuration:500,children:t.map((e,s)=>(0,a.jsx)(f.b,{fill:s<E.length?E[s]:(0,v.last)(E)},s))}),(0,a.jsx)(k.u,{content:(0,a.jsx)(_,{})})]})})},_=e=>{let{active:s,payload:t}=e;return s&&t&&t.length?(0,a.jsx)("div",{className:"bg-blue-6 rounded outline-none p-4 border-none",children:(0,a.jsx)("p",{className:"label",children:"".concat(t[0].name)})}):null};var M=(0,h.memo)(A),S=t(64480),D=t(32814);let R=e=>{let{pos:s,isPlain:t}=e;return(0,a.jsx)(r.E.div,{animate:{x:[s.x,s.x,s.x],opacity:[0,1,0],y:[s.y,s.y-20,s.y-100],scale:[.9,1,.9]},transition:{delay:.1*s.index,repeat:1/0,duration:.7+Math.random()},children:t?(0,a.jsx)(S.$0H,{className:"text-[10px] text-[red] absolute top-0 left-0"}):(0,a.jsx)(n.$aX,{className:"text-[10px] text-[red] absolute top-0 left-0"})})},C=()=>{let[e,{width:s,height:t}]=(0,D.Z)(),r=(0,h.useMemo)(()=>{let e=s/5;return[,,,,,].fill(void 0).map((s,a)=>({index:a,x:a*e,y:t}))},[5,s,t]);return(0,a.jsx)("div",{ref:e,className:"absolute -top-[10px] -left-[10px] -right-[10px] -bottom-[10px] overflow-hidden",children:r.map((e,s)=>(0,a.jsx)(R,{pos:e,isPlain:s%2==0},s))})};var F=t(67945),Z=t(94845),q=t(57249),O=t(63763),H=t(42427),I=t(56773),z=t(75873);let T=e=>{let{children:s}=e,[t,r]=(0,h.useState)(!1);return((0,h.useEffect)(()=>{r(!0)},[r]),t)?(0,a.jsx)(a.Fragment,{children:s}):null},B=e=>{let s=new Date,t=Math.floor((0,F.Z)(e,s));s=(0,Z.Z)(s,t);let a=Math.floor((0,q.Z)(e,s));s=(0,O.Z)(s,a);let r=Math.floor((0,H.Z)(e,s));s=(0,I.Z)(s,r);let i=Math.floor((0,z.Z)(e,s)),l={days:t,hours:a,min:r,sec:i},n=Object.values(l).some(e=>e<0);return n?null:l},P=e=>{let{untilDate:s,fallback:t}=e,[,r]=(0,h.useState)(0),i=B(s);return((0,h.useEffect)(()=>{let e=setInterval(()=>{r(e=>e+1)},1e3);return()=>clearInterval(e)},[]),i)?(0,a.jsx)(T,{children:"".concat(i.days," days + ").concat(i.hours,"h ").concat(i.min,"min ").concat(i.sec,"s")}):(0,a.jsx)(a.Fragment,{children:t})},$=()=>{let e=(0,m.useQuery)("rewards",p);if(e.isLoading)return(0,a.jsx)(a.Fragment,{children:"..."});if(e.error)return(0,a.jsx)(a.Fragment,{children:"... error?"});if(!e.data)return null;let s=e.data.quirk_rewards[0];if(!s)return null;let t=new Date(s.date),r=(0,a.jsxs)("div",{className:"inline-flex relative",children:[(0,a.jsx)(C,{}),(0,a.jsx)("span",{className:"relative",children:"in progress..."})]});return(0,a.jsx)(P,{fallback:r,untilDate:t})},L=e=>{let{event:s,isFirst:t,isLast:r,children:i}=e,l=s.tx_hash?"https://www.mintscan.io/osmosis/txs/".concat(s.tx_hash):null;return(0,a.jsxs)("div",{className:"".concat(t?"":"pt-8"," relative"),children:[(0,a.jsx)("div",{className:"pb-4 opacity-50",children:(0,a.jsx)(a.Fragment,{children:(0,d.Z)(s.date,"PPP")})}),(0,a.jsxs)("div",{className:"absolute top-0 bottom-0 right-full mr-3 sm:mr-8 opacity-10",children:[(0,a.jsx)("div",{className:"bg-blue-4 w-[4px] absolute bottom-0 ".concat(t?"top-8":"top-0"," ").concat(r?"bottom-auto h-16":""," left-[18px]")}),(0,a.jsxs)("div",{className:"relative bg-blue-4 w-[40px] h-[40px] rounded-full shadow-lg border border-blue-2 ".concat(t?"-mt-2":"mt-6"),children:[(0,a.jsx)("div",{className:"absolute w-[30px] h-[30px] top-[4px] opacity-50 left-[4px] rounded-full bg-blue-2 z-10"}),(0,a.jsx)("div",{className:"absolute w-[20px] h-[20px] top-[9px] left-[9px] rounded-full bg-blue-2 z-10"})]})]}),(0,a.jsxs)("div",{className:"bg-blue-1 bg-opacity-30 w-[300px] sm:w-[500px] border border-blue-1 shadow-lg p-8 rounded relative",children:["REWARD"===s.type&&(0,a.jsxs)("div",{className:"uppercase text-blue-2 tracking-widest select-none absolute top-2 left-3 opacity-40 font-semibold flex items-center space-x-2",children:[(0,a.jsx)(n.nlg,{}),(0,a.jsx)("span",{children:"Airdrop"})]}),l&&(0,a.jsx)("div",{className:"absolute top-1 right-1 text-sm",children:(0,a.jsxs)("a",{target:"_blank",rel:"noreferrer noopener",className:"inline-flex space-x-2 items-center text-orange-1 opacity-50 hover:opacity-100",href:l,children:[(0,a.jsx)("span",{children:"See in explorer"}),(0,a.jsx)(n.AlO,{})]})}),i]})]})},Q=e=>{let{rewards:s}=e,t=(0,h.useMemo)(()=>{if(!s)return null;let e=[...s.map(e=>({type:"REWARD",id:"REWARD_".concat(e.date,"_").concat(e.tx_hash||"NOHASH"),date:new Date(e.date),...e.tx_hash?{tx_hash:e.tx_hash}:{},reward:e}))],t={id:"creation",type:"CUSTOM",date:new Date("2022-11-06 00:13:50"),desc:"Astroquirks validator is up!",tx_hash:"7ADEF865AAFEB7B55A05E4B7CC54F72FEE1496E80C0DA56463483E35FE7781B9"};return e.push(t),e},[s]);return t},W=()=>{let{data:e}=(0,m.useQuery)("rewards",p),s=null==e?void 0:e.quirk_rewards,t=Q({rewards:s});return t?(0,a.jsx)("div",{className:"flex flex-col ml-6 sm:ml-0 sm:items-center text-left",children:t.map((e,s)=>{let r=(0,x.Z)(e.date,new Date),i=0===s,l=s===t.length-1;if("REWARD"===e.type){let{reward:n}=e,o=(0,c.Z)(n.amount);return(0,a.jsx)(L,{event:e,isFirst:i,isLast:l,children:r?(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)("div",{className:"absolute left-6 top-[55px]",children:(0,a.jsx)(j,{className:"max-h-[50px] max-w-[50px] invisible sm:visible",ticker:n.currency})}),(0,a.jsx)("div",{className:"py-8",children:(0,a.jsxs)("div",{className:"text-center mb-14",children:[(0,a.jsxs)("div",{className:"font-bold text-2xl",children:[(0,a.jsx)("span",{className:"opacity-30 select-none",children:"~ "}),"".concat(o.toFixed(0)," "),(0,a.jsx)("span",{className:"opacity-70",children:n.currency})]}),(0,a.jsx)("div",{className:"opacity-50",children:"swapped from ~".concat((0,c.Z)(n.commission.amount).toFixed(0)," ").concat(n.commission.currency)}),(0,a.jsxs)("div",{children:["sent to ",(0,a.jsx)("strong",{children:(0,a.jsx)("span",{children:n.snapshot.data.length})})," addresses"]})]})}),(0,a.jsx)("div",{className:"-m-8",children:(0,a.jsx)(g,{labelClosed:"Show distribution by address",labelOpened:"Hide distribution by address",children:(0,a.jsx)("div",{className:"h-[300px]",children:(0,a.jsx)(M,{snapshot:n.snapshot})})})})]}):(0,a.jsxs)("div",{className:"text-center",children:[(0,a.jsx)("strong",{className:"text-orange-1 relative z-10",children:"Incoming airdrop!"}),(0,a.jsx)("div",{className:"my-8",children:(0,a.jsx)("span",{className:"bg-blue-5 p-4 rounded-xl bg-opacity-40 text-[#fff] font-bold border border-blue-2 border-opacity-10 shadow-lg",children:(0,a.jsx)(T,{children:(0,a.jsx)($,{})})})})]})},e.id)}return(0,a.jsx)(L,{event:e,isFirst:i,isLast:l,children:(0,a.jsx)("div",{className:"text-center py-8",children:e.desc})},e.id)})}):null},U=()=>(0,a.jsxs)("footer",{className:"p-4 bg-white sm:p-6 dark:bg-gray-900 mt-40 bg-blue-2 bg-opacity-5 border-t border-blue-2 border-opacity-10",children:[(0,a.jsxs)("div",{className:"md:flex",children:[(0,a.jsxs)("div",{className:"mb-6 md:mb-0",children:[(0,a.jsx)(l(),{className:"rounded-full mr-4 mb-4",src:"/img/logo.webp",alt:"logo",width:40,height:40}),(0,a.jsxs)("div",{className:"opacity-60",children:[(0,a.jsx)("div",{children:"Made with love."}),(0,a.jsx)("div",{children:"Profit-sharing is caring <3"})]})]}),(0,a.jsxs)("div",{className:"md:flex-grow md:ml-48 grid grid-cols-2 gap-8 sm:gap-6",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{className:"mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white tracking-widest",children:"Resources"}),(0,a.jsxs)("ul",{className:"text-gray-600 dark:text-gray-400",children:[(0,a.jsx)("li",{className:"mb-4",children:(0,a.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.mintscan.io/osmosis/validators/osmovaloper1udp8gef365zcqhlxuepewrxuep9thjanuhxcaw",className:"hover:underline",children:"See on Mintscan"})}),(0,a.jsx)("li",{className:"mb-4",children:(0,a.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"http://stake.astroquirks.com/",className:"hover:underline",children:"See on Keplr"})}),(0,a.jsxs)("li",{children:[(0,a.jsx)("span",{className:"opacity-60",children:"Whitepaper"}),(0,a.jsx)("span",{className:"ml-4 bg-blue-2 text-blue-5 font-semibold uppercase tracking-widest p-1 text-xs rounded",children:"Coming soon"})]})]})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{className:"mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white tracking-widest",children:"Follow us"}),(0,a.jsxs)("ul",{className:"text-gray-600 dark:text-gray-400",children:[(0,a.jsx)("li",{className:"mb-4",children:(0,a.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://twitter.com/astroquirks",className:"hover:underline ",children:"Twitter"})}),(0,a.jsx)("li",{className:"mb-4",children:(0,a.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://medium.com/@astroquirks",className:"hover:underline ",children:"Medium"})}),(0,a.jsx)("li",{className:"mb-4",children:(0,a.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/AstroquirksHQ",className:"hover:underline ",children:"GitHub"})})]})]})]})]}),(0,a.jsx)("hr",{className:"mb-6 mt-4 border-blue-2 border-opacity-60 sm:mx-auto dark:border-gray-700 opacity-10"}),(0,a.jsxs)("div",{className:"sm:flex sm:items-center sm:justify-between",children:[(0,a.jsxs)("span",{className:"text-sm text-gray-500 sm:text-center dark:text-gray-400 opacity-50",children:["\xa9 ",new Date().getFullYear()," ",(0,a.jsx)("a",{href:"https://flowbite.com/",className:"hover:underline",children:"Astroquirks™"}),". All Rights Reserved."]}),(0,a.jsxs)("div",{className:"flex mt-4 space-x-6 sm:justify-center sm:mt-0",children:[(0,a.jsxs)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://twitter.com/astroquirks",className:"text-gray-500 hover:text-gray-900 dark:hover:text-white",children:[(0,a.jsx)("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:(0,a.jsx)("path",{d:"M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"})}),(0,a.jsx)("span",{className:"sr-only",children:"Twitter page"})]}),(0,a.jsxs)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/AstroquirksHQ",className:"text-gray-500 hover:text-gray-900 dark:hover:text-white",children:[(0,a.jsx)("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",clipRule:"evenodd"})}),(0,a.jsx)("span",{className:"sr-only",children:"GitHub"})]})]})]})]}),G=()=>{let e=(0,h.useRef)(null),[s,t]=(0,h.useState)(!1),i=()=>t(!0),n=()=>t(!1);return(0,a.jsx)(r.E.div,{ref:e,children:(0,a.jsxs)(r.E.div,{drag:!0,dragConstraints:{left:0,right:0,top:0,bottom:0},dragTransition:{bounceStiffness:300,bounceDamping:15},whileDrag:{scale:1.5},className:"cursor-grab",onDragStart:i,onDragEnd:n,children:[s&&(0,a.jsx)("div",{className:"absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center",children:(0,a.jsx)(V,{children:(0,a.jsx)(S.$0H,{className:"text-[10px] text-[red] absolute top-0 left-0"})})}),(0,a.jsx)("div",{className:"animate-orbit w-[40px] h-[40px] lg:w-[60px] lg:h-[60px]",children:(0,a.jsx)(l(),{src:"/img/heart.svg",className:"animate-orbit-reverse w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] pointer-events-none",alt:"heart",width:40,height:40})})]})})},V=e=>{let{children:s}=e;return(0,a.jsx)("div",{className:"relative",children:Array(8).fill(void 0).map((e,t)=>(0,a.jsx)(r.E.div,{animate:{x:t%4*20-20,y:-(20*Math.ceil(t/4)+20),opacity:[0,.5,0],scale:[0,1,.2],rotate:"".concat(Math.round(40*Math.random()-40),"deg")},style:{originX:.5,originY:.5},transition:{repeat:1/0,duration:.5+Math.random()},children:s},t))})};var X=t(5317);let K=[{title:"Monthly airdrop",desc:"Bite into the 5% commission with monthly airdrops and taste the difference.",Illustration:()=>(0,a.jsx)(l(),{src:"/img/1-rocket.webp",alt:"rocket",width:200,height:200,className:"rounded-full border-2 border-opacity-20 border-blue-2 shadow-lg"})},{title:"Quirky staking rewards",desc:"$OSMO rewards for staking $OSMO? BOR-ING. Take a bite out of profits in a juicy blue chip token instead!",Illustration:()=>(0,a.jsx)(l(),{src:"/img/2-rewards.webp",alt:"rewards",width:200,height:200,className:"rounded-full border-2 border-opacity-20 border-blue-2 shadow-lg"})},{title:"Vote for your airdrop token",isComingSoon:!0,desc:"Blue chip token airdrop not to your taste? Vote for your preferred option with our $QUIRK token-powered DAO, it's like choosing your own toppings on a pizza.",Illustration:()=>(0,a.jsx)(l(),{src:"/img/3-gifts.webp",alt:"gifts",width:200,height:200,className:"rounded-full border-2 border-opacity-20 border-blue-2 shadow-lg"})},{title:"Strong & Resilient Architecture",desc:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"mb-4",children:"We're the mad scientists of validator node security with geographic and third-party redundancy for maximum uptime and purr-fect peace of mind."}),(0,a.jsxs)("div",{className:"text-sm flex space-x-2 items-center",children:[(0,a.jsx)(n.AlO,{className:"opacity-50"}),(0,a.jsx)("a",{href:"https://medium.com/@astroquirks/astroquirks-a-technical-overview-on-building-a-resilient-validator-setup-4313a3c00be7",target:"_blank",rel:"noopener noreferrer",className:"border-b border-blue-2 border-opacity-30 hover:border-opacity-100 border-dashed",children:"A technical overview on building a resilient validator setup"})]})]}),Illustration:()=>(0,a.jsx)(l(),{src:"/img/4-server.webp",alt:"gifts",width:200,height:200,className:"rounded-full border-2 border-opacity-20 border-blue-2 shadow-lg"})}],Y=()=>(0,a.jsxs)(r.E.div,{children:[(0,a.jsxs)("div",{className:"px-8 pt-8 mb-4 flex-col items-center md:flex-row space-y-6 md:space-y-0 flex justify-between",children:[(0,a.jsx)(X.Z,{}),(0,a.jsx)(o.Z,{href:"/app",children:"Launch app"})]}),(0,a.jsxs)("div",{className:"flex flex-col space-y-4 items-center justify-center px-4 pt-8",children:[(0,a.jsxs)("div",{className:"bg-[#111] border border-blue-2 border-opacity-50 rounded-lg shadow-lg border-dashed bg-opacity-70 text-[#fff] text-xl p-4 text-center sm:text-left",children:[(0,a.jsx)(l(),{className:"inline mr-2 -mt-[4px]",src:"/img/bell.svg",alt:"bell",width:24,height:24}),(0,a.jsx)("span",{children:"Next airdrop: "}),(0,a.jsx)("span",{className:"font-alt text-2xl whitespace-nowrap",children:(0,a.jsx)($,{})})]}),(0,a.jsxs)("div",{className:"flex justify-between flex-col items-center justify-center",children:[(0,a.jsx)("div",{className:"mb-2",children:"Wanna be eligible? "}),(0,a.jsxs)("div",{className:"mb-4",children:[(0,a.jsx)(l(),{className:"inline mr-2 -mt-[4px]",src:"/img/osmo.svg",alt:"bell",width:24,height:24}),(0,a.jsx)("strong",{children:(0,a.jsxs)("a",{href:"http://stake.osmo.astroquirks.com",target:"_blank",rel:"noreferrer",children:["Stake your $OSMO with us!"," "]})})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)(l(),{className:"inline mr-2 -mt-[4px]",src:"/img/stars.webp",alt:"bell",width:24,height:24}),(0,a.jsx)("strong",{children:(0,a.jsxs)("a",{href:"http://stake.stars.astroquirks.com",target:"_blank",rel:"noreferrer",children:["Stake your $STARS with us!"," "]})})]})]})]}),(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"\n            pt-[100px] pl-[40px]\n            lg:pt-[100px] lg:pl-[100px]\n            xl:pt-[100px] xl:pl-[160px]\n        ",children:[(0,a.jsxs)("div",{className:"\n              font-alt leading-none whitespace-nowrap text-orange-3\n              select-none\n              text-[50px]\n              md:text-[70px]\n              xl:text-[100px]\n              relative z-10\n          ",children:[(0,a.jsx)("span",{className:"text-orange-1",children:"Profit"}),(0,a.jsx)("span",{className:"text-blue-2",children:"-"}),(0,a.jsx)("span",{className:"text-orange-1",children:"sharing"}),(0,a.jsx)("br",{}),(0,a.jsx)("span",{className:"text-blue-2",children:"is "}),(0,a.jsxs)("span",{className:"text-orange-1 z-10 relative",children:["CARING",(0,a.jsx)("div",{className:"absolute -top-[15px] -right-[25px]",children:(0,a.jsx)(G,{})})]}),(0,a.jsx)("span",{className:"text-blue-2",children:"."})]}),(0,a.jsxs)("div",{className:"\n            mt-4 text-xl\n            sm:w-[340px]\n            md:w-[400px]\n            lg:w-[500px]\n          ",children:[(0,a.jsx)("p",{className:"leading-loose",children:(0,a.jsx)("strong",{className:"bg-blue-2 text-blue-1 px-1 rounded",children:"Strong & resilient validator"})}),(0,a.jsx)("p",{children:"Securing Osmosis network & sharing the rewards with our delegators."})]})]}),(0,a.jsxs)("div",{className:"\n          relative bg-blue-4 bg-opacity-20 min-h-[50px]\n          sm:mt-[50px]\n        ",children:[(0,a.jsx)("img",{alt:"wave-top",className:"absolute bottom-full w-full opacity-20 pointer-events-none",src:"/img/wave.svg"}),(0,a.jsx)("img",{alt:"wave-bot",className:"absolute top-full w-full opacity-20",src:"/img/wave-2.svg"})]}),(0,a.jsx)(l(),{className:"\n            absolute right-0\n            top-[230px]\n            md:top-[200px]\n            w-[200px]\n            sm:w-[300px]\n            md:w-[400px]\n            lg:w-[550px]\n            xl:w-[600px]\n            h-auto\n            sm:visible\n            invisible\n            pointer-events-none\n          ",src:"/img/landing.webp",alt:"landing",width:600,height:794})]}),(0,a.jsx)("div",{className:"grid grid-cols-1 max-w-[600px] lg:grid-cols-2 lg:max-w-[1200px] gap-8 mx-auto px-4 sm:px-8",children:K.map(e=>(0,a.jsx)(J,{...e},e.title))}),(0,a.jsxs)("div",{className:"mt-20 px-10 text-center",children:[(0,a.jsx)("h2",{className:"font-alt text-6xl mb-16",children:"Timeline"}),(0,a.jsx)(r.E.div,{initial:{opacity:0},whileInView:{opacity:1},children:(0,a.jsx)(W,{})})]}),(0,a.jsx)(U,{})]}),J=e=>(0,a.jsxs)(r.E.div,{initial:{opacity:0},whileInView:{opacity:1},className:"relative text-xl border border-blue-2 border-opacity-20 rounded-lg bg-blue-2 bg-opacity-5 p-8 glass shadow-md",children:[e.isComingSoon&&(0,a.jsx)("div",{className:"absolute right-0 px-4 py-2 top-4 rounded-l-lg leading-none font-alt uppercase tracking-widest bg-blue-2 bg-opacity-20 text-orange-1",children:"\uD83D\uDEA7 Coming soon"}),(0,a.jsx)("div",{className:"flex items-center justify-center mb-16 mt-10 h-[150px]",children:(0,a.jsx)(e.Illustration,{})}),(0,a.jsx)("div",{className:"text-4xl font-alt text-orange-1",children:e.title}),(0,a.jsx)("div",{children:e.desc})]});var ee=Y}},function(e){e.O(0,[826,201,636,881,232,193,774,888,179],function(){return e(e.s=64998)}),_N_E=e.O()}]);