var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,n=(t,r,a)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[r]=a,i=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&n(e,r,t[r]);if(a)for(var r of a(t))l.call(t,r)&&n(e,r,t[r]);return e},c=(e,a)=>t(e,r(a));import{D as o,R as m,a as d}from"./vendor.82de95ea.js";var p="_container_9j7v2_1",v="_grid_9j7v2_10",u="_app_9j7v2_19",b="_app2_9j7v2_41";var E="_server_y8ryi_1",_="_status_field_y8ryi_10",f="/assets/pc-off.34dfdbe6.png";const y=({server:e,serverMinimize:t,setInverseState:r,serverClosed:a})=>{const[s,l]=o.exports.useState(0),n=o.exports.useRef();return o.exports.useEffect((()=>(n.current&&clearInterval(n.current),e.state&&e.visible?n.current=setInterval((()=>{var t;(t=e.id,new Promise((e=>{e({id:t,load:Math.floor(100*Math.random())})}))).then((e=>l(e.load)))}),5e3):l(0),()=>{clearInterval(n.current)})),[e.state,e.visible]),m.createElement("main",null,m.createElement("div",{className:"window",style:{width:320,margin:"auto",display:e.visible?"block":"none"}},m.createElement("div",{className:"title-bar"},m.createElement("div",{className:"title-bar-text"},"Server #",e.id),m.createElement("div",{className:"title-bar-controls"},m.createElement("button",{"aria-label":"Minimize",onClick:()=>t(e.id),style:{cursor:"pointer"}}),m.createElement("button",{"aria-label":"Maximize"}),m.createElement("button",{"aria-label":"Close",onClick:()=>a(e.id),style:{cursor:"pointer"}}))),m.createElement("div",{className:E},m.createElement("img",{src:e.state?"/assets/pc-on.b1b34c91.gif":f,alt:""})),m.createElement("div",{className:"status-bar"},m.createElement("p",{className:"status-bar-field"},"Status: ",e.state?"ON":"OFF"),m.createElement("p",{className:`status-bar-field ${_}`,onClick:()=>r(e)},e.state?"shut down":"turn on"),m.createElement("p",{className:"status-bar-field"},"CPU Usage: ",s,"%"))))};var N="_container_pu8aa_1",g="_start_pu8aa_16",x="_grid_pu8aa_23",w="_item_pu8aa_28";const O=({servers:e,serverMinimize:t})=>m.createElement("div",{className:N},m.createElement("img",{className:g,src:"/assets/start-btn.a2844a27.png",alt:"w-98"}),m.createElement("div",{className:x},e.map((e=>m.createElement("div",{className:w,key:e.id,onClick:()=>t(e.id)},m.createElement("img",{src:f,alt:"server"}),m.createElement("p",null,"Server #",e.id)))))),j=()=>{const[e,t]=o.exports.useState([]),r=r=>{const a=e.map((e=>e.id===r?c(i({},e),{visible:!e.visible}):e));t(a)},a=r=>{const a=e.map((e=>e.id===r.id?c(i({},e),{state:!r.state}):e));t(a)},s=e=>{t((t=>t.filter((t=>t.id!==e))))};return o.exports.createElement("main",{className:p},o.exports.createElement("div",{className:v},e.map((e=>o.exports.createElement(y,{key:e.id,server:e,setInverseState:a,serverMinimize:r,serverClosed:s})))),o.exports.createElement("div",{className:b},o.exports.createElement("img",{src:"/assets/recycleBin.aef86de9.png",alt:"Recycle"}),o.exports.createElement("p",null,"Recycle Bin")),o.exports.createElement("div",{className:u,onClick:()=>{if(6===e.length)return;const r={id:(new Date).valueOf(),load:0,state:!1,visible:!0};t([...e,r])}},o.exports.createElement("img",{src:f,alt:"server"}),o.exports.createElement("p",null,"New Server")),o.exports.createElement(O,{servers:e,serverMinimize:r}))};d.render(m.createElement(m.StrictMode,null,m.createElement(j,null)),document.getElementById("root"));