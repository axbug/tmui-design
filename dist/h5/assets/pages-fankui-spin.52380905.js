var e=Object.defineProperty,t=Object.defineProperties,l=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,s=(t,l,a)=>l in t?e(t,l,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[l]=a;import{d as n,c as i,r as u,az as f,m as p,o as c,a as m,w as d,b as _,M as b,u as g,U as v,N as y,n as h,j as w,g as k,i as j}from"./index-6b165856.js";import{c as S,u as x,f as z,g as O,d as D,t as T}from"./tm-app.d6cf2f93.js";import{t as C}from"./tm-sheet.3639b36a.js";import{t as P}from"./tm-text.6c910eb0.js";import{t as I}from"./tm-icon.65b53dc0.js";import{_ as B}from"./tm-divider.vue_vue_type_script_setup_true_lang.cbbfcb4c.js";import{_ as E}from"./tm-image.vue_vue_type_script_setup_true_lang.b0e5c126.js";import"./tm-translate.1f1c80c0.js";const N=n({__name:"tm-spin",props:(U=((e,t)=>{for(var l in t||(t={}))o.call(t,l)&&s(e,l,t[l]);if(a)for(var l of a(t))r.call(t,l)&&s(e,l,t[l]);return e})({},S),J={followTheme:{type:[Boolean,String],default:!0},color:{type:String,default:"primary"},icon:{type:String,default:"tmicon-shuaxin"},size:{type:Number,default:46},bgColor:{type:String,default:"rgba(255,255,255,0.9)"},tip:{type:[String],defalut:""},load:{type:[Boolean,String],default:!1}},t(U,l(J))),emits:["click"],setup(e,{emit:t}){var l;const a=e,o=x();null==(l=k())||l.proxy;const r=i((()=>o.tmStore)),s=i((()=>z(a))),n=i((()=>O(a))),S=i((()=>D(a,r.value))),T=u(!0);T.value=!1;const C=u([0,0]),B=i((()=>S.value?"rgba(0,0,0,0.9)":a.bgColor)),E=i((()=>a.load)),N=i((()=>a.color));function U(e){t("click",e)}return f((()=>{})),p((()=>{})),(e,t)=>{const l=j;return c(),m(l,{ref:"tmspin",class:y([[g(n)],"flex relative flex-col"]),style:h([g(s)])},{default:d((()=>[_(l,{class:"relative zIndex-1"},{default:d((()=>[b(e.$slots,"default")])),_:3}),g(E)?(c(),m(l,{key:0,onClick:v(U,["stop"]),class:y(["absolute zIndex-10 flex-center blur",[T.value?"":" fulled-height   "]]),style:h([T.value?"":{width:"100%"},{backgroundColor:g(B)},T.value?{width:(C.value[0]||a.fontSize)+"px",height:(C.value[1]||a.fontSize)+"px"}:""])},{default:d((()=>[_(l,{userInteractionEnabled:!1,class:"pa-10 flex-col flex-col-center-center"},{default:d((()=>[_(I,{spin:"",fontSize:a.size,dark:g(S),color:g(N),followDark:e.followDark,followTheme:a.followTheme,name:a.icon},null,8,["fontSize","dark","color","followDark","followTheme","name"]),_(P,{followTheme:a.followTheme,dark:g(S),followDark:e.followDark,color:g(N),_class:"mt-16",label:a.tip},null,8,["followTheme","dark","followDark","color","label"])])),_:1})])),_:1},8,["onClick","class","style"])):w("v-if",!0)])),_:3},8,["class","style"])}}});var U,J;const M=n({__name:"spin",setup(e){const t=u(!0);return(e,l)=>(c(),m(T,null,{default:d((()=>[_(C,null,{default:d((()=>[_(P,{fontSize:24,_class:"font-weight-b",label:"基础属性,更多玩法请前往文档。"}),_(B),_(N,{load:t.value,tip:"点我取消加载",onClick:l[0]||(l[0]=e=>t.value=!1)},{default:d((()=>[_(C,{margin:[0,0],padding:[0,0]},{default:d((()=>[_(E,{src:"https://picsum.photos/620/150",width:636,height:150}),_(P,{label:"加载中 Spin可以应用于任何元素中，当然使用场景主要是局部内容加载反馈等等。加载中 Spin可以应用于任何元素中，当然使用场景主要是局部内容加载反馈等等。"})])),_:1})])),_:1},8,["load"])])),_:1})])),_:1}))}});export{M as default};