const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["https://cdn.jsdelivr.net/gh/flair-clients/bcs@latest/portal/assets/react-setup-B6u61idX.js","https://cdn.jsdelivr.net/gh/flair-clients/bcs@latest/portal/assets/mui-Cw0dwOiN.js","https://cdn.jsdelivr.net/gh/flair-clients/bcs@latest/portal/assets/intl-CKipw3rV.js","https://cdn.jsdelivr.net/gh/flair-clients/bcs@latest/portal/assets/reactVendor-BTcQ-GDs.js","https://cdn.jsdelivr.net/gh/flair-clients/bcs@latest/portal/assets/eCache-BdHG5F0B.js","https://cdn.jsdelivr.net/gh/flair-clients/bcs@latest/portal/assets/redux-D7_Lh1Zo.js","https://cdn.jsdelivr.net/gh/flair-clients/bcs@latest/portal/assets/toolkit-C5fVsw89.js","https://cdn.jsdelivr.net/gh/flair-clients/bcs@latest/portal/assets/lodashEs-Bacu-Uoa.js","https://cdn.jsdelivr.net/gh/flair-clients/bcs@latest/portal/assets/base-DriPzto9.js","https://cdn.jsdelivr.net/gh/flair-clients/bcs@latest/portal/assets/global-D7Yn0gGb.js","https://cdn.jsdelivr.net/gh/flair-clients/bcs@latest/portal/assets/load-functions-AabybIo1.js","https://cdn.jsdelivr.net/gh/flair-clients/bcs@latest/portal/index.CgUuH24B.js","https://cdn.jsdelivr.net/gh/flair-clients/bcs@latest/portal/assets/lang-cE5BfbQy.js","https://cdn.jsdelivr.net/gh/flair-clients/bcs@latest/portal/assets/router-DEI8QtBD.js","https://cdn.jsdelivr.net/gh/flair-clients/bcs@latest/portal/assets/muiIcon-BiFRwRtm.js","https://cdn.jsdelivr.net/gh/flair-clients/bcs@latest/portal/assets/dateFns-CeqDayOU.js","https://cdn.jsdelivr.net/gh/flair-clients/bcs@latest/portal/assets/dropzone-Cizh2goU.js","https://cdn.jsdelivr.net/gh/flair-clients/bcs@latest/portal/assets/react-setup-A3oFR5V9.css","https://cdn.jsdelivr.net/gh/flair-clients/bcs@latest/portal/assets/B3CustomForm-BiO7GKz5.js","https://cdn.jsdelivr.net/gh/flair-clients/bcs@latest/portal/assets/form-hNmOEDBo.js"])))=>i.map(i=>d[i]);
import{_ as a}from"../index.CgUuH24B.js";import{j as e,B as r}from"./mui-Cw0dwOiN.js";import{r as i}from"./reactVendor-BTcQ-GDs.js";import{u as b}from"./form-hNmOEDBo.js";import{u as j}from"./lang-cE5BfbQy.js";import{u as y,t as C}from"./react-setup-B6u61idX.js";import{c as E}from"./b3ShoppingList-XIHN9JS7.js";import"./global-D7Yn0gGb.js";import"./intl-CKipw3rV.js";import"./eCache-BdHG5F0B.js";import"./redux-D7_Lh1Zo.js";import"./toolkit-C5fVsw89.js";import"./lodashEs-Bacu-Uoa.js";import"./base-DriPzto9.js";import"./load-functions-AabybIo1.js";import"./router-DEI8QtBD.js";import"./muiIcon-BiFRwRtm.js";import"./dateFns-CeqDayOU.js";import"./dropzone-Cizh2goU.js";const v=i.lazy(()=>a(()=>import("./react-setup-B6u61idX.js").then(t=>t.cn),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]),import.meta.url)),R=i.lazy(()=>a(()=>import("./B3CustomForm-BiO7GKz5.js").then(t=>t.a),__vite__mapDeps([18,1,2,3,4,0,5,6,7,8,9,10,11,12,13,14,15,16,17,19]),import.meta.url)),w=t=>[{name:"name",label:t("global.createShoppingList.name"),required:!0,default:"",fieldType:"text",xs:12,variant:"filled",size:"small",maxLength:200},{name:"description",label:t("global.createShoppingList.description"),required:!1,default:"",fieldType:"multiline",xs:12,variant:"filled",size:"small",rows:4,maxLength:200}];function Q({open:t,onChange:l,onClose:n}){const m=i.useRef(null),o=j(),[p,s]=i.useState(!1),c=y(C),{control:u,handleSubmit:d,getValues:f,formState:{errors:h},setValue:g}=b({mode:"onSubmit"}),x=()=>{n()},L=()=>{d(async _=>{const{name:S,description:B}=_;s(!0),await E({data:{name:S,description:B},isB2BUser:c}),s(!1),l()})()};return e.jsxs(r,{sx:{ml:3,cursor:"pointer",width:"50%"},children:[e.jsx(r,{ref:m}),e.jsx(v,{isOpen:t,fullWidth:!0,title:o("global.createShoppingList.createNew"),loading:p,handleLeftClick:x,handRightClick:L,children:e.jsx(r,{sx:{minHeight:"auto",display:"flex",alignItems:"flex-start"},children:e.jsx(R,{formFields:w(o),errors:h,control:u,getValues:f,setValue:g})})})]})}export{Q as default};
//# sourceMappingURL=CreateShoppingList-BJAmfJzh.js.map
