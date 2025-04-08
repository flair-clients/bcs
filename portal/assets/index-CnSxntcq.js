import{j as e,L as P,ae as D,T as b,B as l,d as O,I as w,s as z,Y as v,X as W}from"./mui-Cw0dwOiN.js";import{r as m}from"./reactVendor-BTcQ-GDs.js";import{u as h}from"./lang-cE5BfbQy.js";import{ao as K,ad as T,al as U,u as f,L as X}from"./react-setup-B6u61idX.js";import"./load-functions-AabybIo1.js";import"./base-DriPzto9.js";import{u as Y}from"./useSort-CwDaxthI.js";import{e as _,s as $}from"./masquerade-DErYXIl0.js";import{B as G}from"./B3FilterSearch-B3efZ90M.js";import{d as H}from"./MoreHoriz-K_L9zKkf.js";import{a as J}from"./router-DEI8QtBD.js";import"./intl-CKipw3rV.js";import"./eCache-BdHG5F0B.js";import"./redux-D7_Lh1Zo.js";import"./toolkit-C5fVsw89.js";import"./lodashEs-Bacu-Uoa.js";import"../index.CgUuH24B.js";import"./global-D7Yn0gGb.js";import"./muiIcon-BiFRwRtm.js";import"./dateFns-CeqDayOU.js";import"./dropzone-Cizh2goU.js";function Q(){const a=h();return e.jsx(l,{sx:{fontWeight:400,fontSize:"13px",background:"#ED6C02",display:"inline-block",p:"2px 7px",color:"#FFFFFF",borderRadius:"10px"},children:a("dashboard.selected")})}function V({companyName:a,email:r,isSelected:o,action:t}){return e.jsxs(P,{children:[e.jsxs(D,{sx:{color:"#313440"},children:[e.jsx(b,{sx:{fontWeight:400,fontSize:"24px",color:"rgba(0, 0, 0, 0.87)"},children:a}),o&&e.jsx(Q,{}),e.jsxs(l,{sx:{display:"flex",fontSize:"16px",mt:"15px",gap:"5px"},children:[e.jsx(b,{sx:{fontWeight:500},children:"Email:"}),e.jsx(b,{variant:"body1",children:r})]})]}),e.jsx(O,{sx:{ml:"10px",mb:"10px"},variant:"text",onClick:()=>t.onClick(),children:t.label})]})}const Z=z(W)(()=>({"& .MuiPaper-elevation":{boxShadow:"0px 1px 0px -1px rgba(0, 0, 0, 0.1), 0px 1px 6px rgba(0, 0, 0, 0.07), 0px 1px 4px rgba(0, 0, 0, 0.06)",borderRadius:"4px"}}));function S({label:a,onClick:r}){const o=m.useRef(null),[t,c]=m.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(w,{onClick:()=>c(!0),ref:o,children:e.jsx(H,{})}),e.jsx(Z,{anchorEl:o.current,open:t,onClose:()=>c(!1),anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:e.jsx(v,{sx:{color:"primary.main"},onClick:()=>{r(),c(!1)},children:a})})]})}function ee(){const a=h();return e.jsx(l,{sx:{fontWeight:400,fontSize:"13px",background:"#ED6C02",ml:"16px",p:"2px 7px",color:"#FFFFFF",borderRadius:"10px"},children:a("dashboard.selected")})}function se({companyName:a,isSelected:r}){return e.jsxs(l,{sx:{display:"flex",alignItems:"center"},children:[a,r&&e.jsx(ee,{})]})}const k="companyName",F={companyName:"companyName",companyAdminName:"companyAdminName",companyEmail:"companyEmail"},te=[10,20,30];function ae(){const a=f(({company:t})=>t.customer.id),r=f(({company:t})=>t.customer.b2bId);return{salesRepCompanyId:Number(f(({b2bFeatures:t})=>t.masqueradeCompany.id)),b2bId:r,customerId:a}}function Ne(a){const r=K(),{salesRepCompanyId:o,b2bId:t,customerId:c}=ae(),{setOpenPage:N}=a,n=h(),[B,u]=m.useState(!1),[d,p]=m.useState({q:"",orderBy:F[k]}),[I,A,q]=Y(F,k,d,p,"asc"),y=J(),L=async s=>{let i={edges:[],totalCount:0};return typeof t=="number"&&(i=(await X(t,s)).superAdminCompanies),i},g=async s=>{try{u(!0),typeof t=="number"&&await $({customerId:c,companyId:s}),N({isOpen:!0,openUrl:"/dashboard"}),p({...d})}finally{u(!1)}},x=async()=>{try{r(!0),typeof t=="number"&&await _(),p({...d})}finally{r(!1)}};m.useEffect(()=>{const s={...y};s!=null&&s.state&&x()},[y]);const R=async s=>{p({...d,q:s})},M=[{key:"companyName",title:n("dashboard.company"),render:({companyName:s,companyId:i})=>e.jsx(se,{companyName:s,isSelected:Number(i)===Number(o)}),isSortable:!0},{key:"companyEmail",title:n("dashboard.email"),isSortable:!0},{key:"actions",title:n("dashboard.action"),render:({companyId:s})=>Number(s)===Number(o)?e.jsx(S,{label:n("dashboard.endMasqueradeAction"),onClick:()=>x()}):e.jsx(S,{label:n("dashboard.masqueradeAction"),onClick:()=>g(Number(s))})}];return e.jsx(T,{isSpinning:B,children:e.jsxs(l,{sx:{display:"flex",flexDirection:"column",flex:1},children:[e.jsx(l,{sx:{mb:"24px"},children:e.jsx(G,{handleChange:R})}),e.jsx(U,{columnItems:M,rowsPerPageOptions:te,getRequestList:L,searchParams:d||{},isCustomRender:!1,requestLoading:u,tableKey:"id",sortDirection:A,orderBy:q,sortByFn:I,renderItem:({companyName:s,companyEmail:i,companyId:j})=>{const C=Number(j)===Number(o),E=C?{label:n("dashboard.endMasqueradeAction"),onClick:()=>{x()}}:{label:n("dashboard.masqueradeAction"),onClick:()=>{g(Number(j))}};return e.jsx(V,{companyName:s,email:i,isSelected:C,action:E})}})]})})}export{Ne as default,k as defaultSortKey,F as sortKeys};
//# sourceMappingURL=index-CnSxntcq.js.map
