var e=Object.defineProperty,t=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,n=(t,l,o)=>l in t?e(t,l,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[l]=o,i=(e,t)=>{for(var l in t||(t={}))a.call(t,l)&&n(e,l,t[l]);if(o)for(var l of o(t))r.call(t,l)&&n(e,l,t[l]);return e},u=(e,t,l)=>new Promise(((o,a)=>{var r=e=>{try{i(l.next(e))}catch(t){a(t)}},n=e=>{try{i(l.throw(e))}catch(t){a(t)}},i=e=>e.done?o(e.value):Promise.resolve(e.value).then(r,n);i((l=l.apply(e,t)).next())}));import{d as s,K as c,c as d,r as f,Q as v,o as p,e as m,j as y,b as h,w as g,u as x,n as b,F as _,f as w,a as C,M as B,i as S,$ as j,N as k,k as F}from"./index-6b165856.js";import{t as z}from"./tm-text.6c910eb0.js";import{_ as A}from"./tm-divider.vue_vue_type_script_setup_true_lang.cbbfcb4c.js";import{t as O}from"./tm-sheet.3639b36a.js";import{t as N}from"./tm-app.d6cf2f93.js";import{t as P}from"./tm-icon.65b53dc0.js";import{_ as $}from"./tm-badge.vue_vue_type_script_setup_true_lang.9b09555f.js";const H={height:{type:Number,default:500},width:{type:Number,default:750},sideWidth:{type:Number,default:190},itemHeight:{type:Number,default:100},fontSize:{type:Number,default:26},active:{type:Number,default:0},menuFontColor:{type:String,default:"grey"},menuActiveFontColor:{type:String,default:"primary"},menuActiveBgColor:{type:String,default:"white"},menuBarBgColor:{type:String,default:"grey-4"},bodyBgColor:{type:String,default:"white"},unit:{type:String,default:"rpx"},list:{type:Array,default:()=>[],required:!0},refresh:{type:Boolean,default:!1},load:{type:Function,default:()=>null},firstLoad:{type:Boolean,default:!0},disabledBottom:{type:Boolean,default:!1},rangKey:{type:String,default:"text"},isScroll:{type:Boolean,default:!1}},I=s({__name:"tm-side-menu",props:i({},H),emits:["click","change","update:active","load","restore"],setup(e,{emit:o}){const a=e;c(a.sideWidth);const r=d((()=>a.list.map((e=>{var o,r,n,u,s,c;return s=i({},e),c={text:null!=(r=null!=(o=null==e?void 0:e.text)?o:e[a.rangKey])?r:"",dotCount:null!=(n=null==e?void 0:e.dotCount)?n:0,icon:null!=(u=null==e?void 0:e.icon)?u:""},t(s,l(c))})))),n=f(!0),s=f(!1),A=f(""),N=f(a.active),H=f("px"==a.unit?uni.$tm.u.torpx(a.sideWidth):a.sideWidth),I=f("px"==a.unit?uni.$tm.u.torpx(a.itemHeight):a.itemHeight);d((()=>"px"==a.unit?uni.$tm.u.torpx(a.width):a.width));const E=d((()=>"px"==a.unit?uni.$tm.u.torpx(a.height):a.height));v((()=>a.active),(()=>{a.active!=N.value&&(N.value=a.active)})),v(N,(()=>{o("update:active",N.value),o("change",N.value)}));const R=(e,t)=>u(this,null,(function*(){N.value=t,F((()=>u(this,null,(function*(){o("click",e,t),o("load","loading"),s.value=!0,A.value="menu",yield K("menu",e,t),s.value=!1,o("load","success")}))))}));function W(){return u(this,null,(function*(){s.value?n.value=!1:(o("restore"),o("load","loading"),s.value=!0,A.value="pull",yield K("pull"),n.value=!0,setTimeout((function(){s.value=!1,n.value=!1}),300))}))}function D(){return u(this,null,(function*(){s.value||a.disabledBottom||(o("load","loading"),s.value=!0,A.value="bottom",yield K("bottom"),o("load","success"),s.value=!1)}))}function K(e,t=null,l=NaN){return u(this,null,(function*(){let o=a.load,r=!0;"function"==typeof o&&(r=yield o(e,t,l),"function"==typeof r&&(yield r(e,t,l)))}))}function U(){n.value=!1}function M(){n.value=!1}return(e,t)=>{const l=S,o=j;return p(),m(_,null,[y(" 侧边栏菜单 导航 。 "),h(l,{class:"flex flex-row"},{default:g((()=>[h(O,{color:a.menuBarBgColor,height:x(E),width:H.value,unit:a.unit,margin:[0,0],padding:[0,0]},{default:g((()=>[h(o,{"show-scrollbar":!1,"scroll-y":"",style:b({height:x(E)+"rpx",width:H.value+"rpx"})},{default:g((()=>[(p(!0),m(_,null,w(x(r),((e,t)=>(p(),C(O,{key:t,margin:[0,0],padding:[0,0],color:a.menuActiveBgColor,transprent:N.value-1!==t&&N.value+1!==t,"no-level":""},{default:g((()=>[h(O,{"no-level":"",onClick:l=>R(e,t),color:N.value===t?a.menuActiveBgColor:a.menuBarBgColor,isDisabledRoundAndriod:!0,_class:"flex flex-row flex-row-center-center relative",margin:[0,0],height:I.value,padding:[0,0],width:H.value,class:k((N.value-1===t?"round-br-6":"")+" "+(N.value+1===t?"round-tr-6":"")),parenClass:(N.value-1===t?"round-br-6":"")+" "+(N.value+1===t?"round-tr-6":""),borderDirection:"bottom"},{default:g((()=>[h(l,{userInteractionEnabled:!1,class:"absolute l-6",style:b({top:(I.value-30)/2+"rpx"})},{default:g((()=>[N.value==t?(p(),C(O,{key:0,round:2,height:30,margin:[0,0],padding:[0,0],color:a.menuActiveFontColor,width:6},null,8,["color"])):y("v-if",!0)])),_:2},1032,["style"]),e.icon?y("v-if",!0):(p(),C($,{key:0,userInteractionEnabled:!1,color:"red",count:e.dotCount},{default:g((()=>[h(l,{class:"flex flex-col flex-col-center-center py-10",style:b({width:H.value-28+"rpx"})},{default:g((()=>[h(z,{_class:"text-align-center "+(N.value==t?"text-weight-b":""),color:N.value==t?a.menuActiveFontColor:a.menuFontColor,"font-size":a.fontSize,label:e.text},null,8,["_class","color","font-size","label"])])),_:2},1032,["style"])])),_:2},1032,["count"])),e.icon?(p(),C($,{key:1,userInteractionEnabled:!1,color:"red",count:e.dotCount},{default:g((()=>[h(l,{class:"flex flex-row flex-row-center-center py-10",style:b({width:H.value-28+"rpx"})},{default:g((()=>[e.icon?(p(),C(P,{key:0,color:N.value==t?a.menuActiveFontColor:a.menuFontColor,"font-size":a.fontSize,name:e.icon},null,8,["color","font-size","name"])):y("v-if",!0),h(l,{userInteractionEnabled:!1,class:"px-10"},{default:g((()=>[h(z,{_class:"text-align-center "+(N.value==t?"text-weight-b":""),color:N.value==t?a.menuActiveFontColor:a.menuFontColor,"font-size":a.fontSize,label:e.text},null,8,["_class","color","font-size","label"])])),_:2},1024)])),_:2},1032,["style"])])),_:2},1032,["count"])):y("v-if",!0)])),_:2},1032,["onClick","color","height","width","class","parenClass"])])),_:2},1032,["color","transprent"])))),128))])),_:1},8,["style"])])),_:1},8,["color","height","width","unit"]),h(O,{"no-level":"",class:"flex-1",parenClass:"flex-1","show-scrollbar":!1,margin:[0,0],padding:[0,0],color:a.bodyBgColor},{default:g((()=>[a.isScroll?y("v-if",!0):(p(),C(o,{key:0,"refresher-triggered":n.value,onScrolltolower:D,onRefresherrefresh:W,onRefresherrestore:M,onRefresherabort:U,"refresher-enabled":"","scroll-y":"",class:"flex-1",style:b({height:x(E)+"rpx"})},{default:g((()=>[B(e.$slots,"default"),"bottom"==A.value&&s.value?(p(),C(l,{key:0,class:"my-40 flex flex-row flex-row-center-center"},{default:g((()=>[h(P,{spin:"",name:"tmicon-shuaxin","font-size":22,color:"primary"}),h(z,{"font-size":22,color:"grey",_class:"pl-20",label:"加载中..."})])),_:1})):y("v-if",!0)])),_:3},8,["refresher-triggered","style"])),a.isScroll?(p(),C(l,{key:1},{default:g((()=>[B(e.$slots,"default")])),_:3})):y("v-if",!0)])),_:3},8,["color"])])),_:3})],2112)}}}),E=s({__name:"sideMenu",setup(e){const t=f(3),l=f([{text:"广东",id:1},{text:"北京",id:2},{text:"江苏",id:3,dotCount:6},{text:"南昌",id:4,icon:"tmicon-md-chatboxes"},{text:"上海",id:5},{text:"吃菠菜吃菠菜吃菠菜",id:6,dotCount:6},{text:"Hellow",id:7},{text:"Github",id:8,dotCount:1},{text:"Vue",id:9},{text:"Uniapp",id:10}]);return(e,o)=>(p(),C(N,null,{default:g((()=>[h(I,{active:t.value,"onUpdate:active":o[0]||(o[0]=e=>t.value=e),itemHeight:100,list:l.value},{default:g((()=>[h(z,{_class:"pa-32",label:"这边是你的内容区域"})])),_:1},8,["active","list"]),h(O,{margin:[0,32],_class:"flex flex-row flex-row-center-start"},{default:g((()=>[h(A,{color:"yellow",vertical:"",height:30,realColor:"",border:8}),h(z,{label:"可以根据自己的需求更新你的配色方案"})])),_:1}),h(I,{active:t.value,"onUpdate:active":o[1]||(o[1]=e=>t.value=e),menuActiveFontColor:"yellow",menuFontColor:"black",menuBarBgColor:"yellow",itemHeight:100,list:l.value},{default:g((()=>[h(z,{_class:"pa-32",label:"这边是你的内容区域"})])),_:1},8,["active","list"])])),_:1}))}});export{E as default};