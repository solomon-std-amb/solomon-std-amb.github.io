import{d as S,c as v,w as g,_ as b,o as s,a as w,f as a,i as r,u as n,F as D,r as N,n as h,b as f,t as u,j as T,C as k,p as C,e as E,g as V,P as x,h as B}from"./App.vue_vue_type_script_setup_true_lang.984fae39.js";const _=[{date1:new Date(2023,6,29),title:"Completed event"},{date1:new Date(Date.now()+864e5*3),date2:new Date(Date.now()+864e5*12),title:"Upcoming event"},{date1:new Date(2024,6,1),date2:new Date(2024,7,1),title:"Upcoming event (Far)"}],m=l=>(C("data-v-0be637f8"),l=l(),E(),l),I=f(" Roadmap of Events "),L={class:"c-svg-container"},$=["height"],F=["y2"],j=["y2"],P=["y"],R={key:0,class:"c-event-text__exclaim"},U=["cy"],z=m(()=>a("br",null,null,-1)),A=m(()=>a("br",null,null,-1)),H=m(()=>a("a",{href:"/"},[a("button",null," << Homepage ")],-1)),M=S({__name:"Events",setup(l){const c=[],d=Date.now();let o=0;for(let e=0;e<_.length;e++){const i=_[e],t=e===0?0:Math.log2(i.date1.getTime()-_[e-1].date1.getTime())*10-205;d<=i.date1.getTime()&&!o&&(o=c[e-1].totalSpacing+t*(1-(i.date1.getTime()-d)/(i.date1.getTime()-_[e-1].date1.getTime()))),c.push({...i,lastSpacing:t,totalSpacing:e===0?25:c[e-1].totalSpacing+t})}const p=c[c.length-1].totalSpacing;return o||(o=p),(e,i)=>(s(),v(b,null,{default:g(()=>[w(k,null,{header:g(()=>[I]),default:g(()=>[a("div",L,[(s(),r("svg",{class:"c-svg-el",height:n(p)+50},[a("line",{x1:"20",x2:"20",y1:"25",y2:n(p),class:"c-central-line"},null,8,F),a("line",{x1:"20",x2:"20",y1:"25",y2:n(o),class:"c-central-line--time-spacing"},null,8,j),(s(),r(D,null,N(c,(t,y)=>a("g",{key:y},[(s(),r("foreignObject",{x:"0",y:t.totalSpacing-50,width:"100%",height:"100"},[a("div",{class:"c-event-text",style:h({color:`var(--colour-${n(o)>=t.totalSpacing?"complete":"text"})`})},[f(u(t.date1.toLocaleDateString(void 0,{year:"numeric",month:"2-digit",day:"2-digit"})+(t.date2?` - ${t.date2.toLocaleDateString(void 0,{year:"numeric",month:"2-digit",day:"2-digit"})}`:""))+": "+u(t.title)+" ",1),(t.date2||t.date1).getTime()-n(d)>0&&t.date1.getTime()-n(d)<84600*1e3*30?(s(),r("b",R," ! ")):T("",!0)],4)],8,P)),a("circle",{cx:"20",cy:t.totalSpacing,r:"8",class:"c-event-point",style:h({stroke:`var(--colour-${n(o)>=t.totalSpacing?"complete":"incomplete"})`})},null,12,U)])),64))],8,$))]),z,A,H]),_:1})]),_:1}))}});const O=V(M,[["__scopeId","data-v-0be637f8"]]);x.content.notification={title:"Demo notification",content:`
	Notif text Notif text Notif text Notif text Notif text Notif text <br><br><br><br>`};x.content.cards=[];B(O).mount("#app");
