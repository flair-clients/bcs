System.register(["./mui-legacy-nJi-LPwx.js","./reactVendor-legacy-CtYIj4Ma.js","./form-legacy-CAo5v63e.js","./lang-legacy-BZ1lZp4I.js","./B3Card-legacy-Bytz0U5Z.js","./B3CustomForm-legacy-DPyFojA8.js","./react-setup-legacy-DjnQrG6U.js","./load-functions-legacy-Bi-Vku98.js","./base-legacy-BAe6cWtL.js","./recaptcha-legacy-COoF9wbU.js","./config-legacy-BruezqrQ.js","./styled-legacy-BL-c24Os.js","./router-legacy-s4T0V6vG.js","./intl-legacy-B7uNycgM.js","./eCache-legacy-CW-H9Ud9.js","./lodashEs-legacy-CZW16S6G.js","./muiIcon-legacy-CbXEHT38.js","./redux-legacy-D5ZHjMNV.js","./toolkit-legacy-uWyLsHZ1.js","../index-legacy.BFKCpyw1.js","./global-legacy-B1EgakWG.js","./dateFns-legacy-Bs-ooDPO.js","./dropzone-legacy-C0uLCPXC.js","./validatorRules-legacy-CTb2-K1i.js"],(function(e,s){"use strict";var t,a,l,r,n,o,i,c,g,d,x,u,y,j,m,f,p,h,S,b,w,F,P;return{setters:[e=>{t=e.j,a=e.B,l=e.a6,r=e.T},e=>{n=e.r},e=>{o=e.u},e=>{i=e.u},e=>{c=e.B},e=>{g=e.B},e=>{d=e.G,x=e.C,u=e.a,y=e.ad,j=e.ae},null,e=>{m=e.b},e=>{f=e.C,p=e.g,h=e.r},e=>{S=e.g,b=e.s},e=>{w=e.L,F=e.B},e=>{P=e.u},null,null,null,null,null,null,null,null,null,null,null],execute:function(){function s({setOpenPage:e,isEnabledOnStorefront:s,storefrontSiteKey:d,logo:x}){const[p]=u(),[C,v]=n.useState(!1),B=i(),E=S(B),[O,z]=n.useState(!1),[K,V]=n.useState(""),{control:k,handleSubmit:L,getValues:T,formState:{errors:D},setValue:W,watch:A}=o({mode:"onSubmit"}),G=P(),I=A("emailAddress");return n.useEffect((()=>{!K&&s||z(!1)}),[K,s]),t.jsx(c,{setOpenPage:e,children:t.jsxs(a,{sx:{bgcolor:"#FFFFFF",borderRadius:"4px",display:"flex",flexDirection:"column",mr:"auto",ml:"auto",maxWidth:"537px"},children:[t.jsx(a,{sx:{mt:"20px"},children:x&&t.jsx(w,{children:t.jsx(l,{sx:{maxWidth:p?"175px":"250px"},onClick:()=>{window.location.href="/"},children:t.jsx("img",{src:x,alt:B("global.tips.registerLogo"),loading:"lazy"})})})}),t.jsxs(a,{sx:{margin:"20px 0 0 0",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[t.jsx(r,{variant:"h5",sx:{margin:"16px 0"},children:B("forgotPassword.resetPassword")}),t.jsx(r,{variant:"body1",sx:{margin:"0 16px 16px 16px"},children:B("forgotPassword.requestEmail")}),t.jsx(g,{formFields:E,errors:D,control:k,getValues:T,setValue:W,sx:{margin:"0 16px",maxWidth:p?"311px":"505px"}}),s&&O?t.jsx(r,{variant:"body1",sx:{color:"red",display:"flex",alignSelf:"flex-start",marginLeft:"18px",marginTop:"2px",fontSize:"13px"},children:B("login.loginText.missingCaptcha")}):"",s?t.jsx(a,{sx:{marginTop:"20px"},children:t.jsx(f,{siteKey:d,size:"normal",email:I,handleGetKey:V})}):"",t.jsx(y,{isSpinning:C,size:20,isFlex:!1,children:t.jsx(F,{children:t.jsx(j,{type:"submit",size:"medium",onClick:L((async e=>{const{emailAddress:t}=e;if(!s||K)try{if(v(!0),s&&K)try{await h(K,I),G("/login?loginFlag=receivePassword"),v(!1)}catch(a){m.error(a)}s||(await b(t),v(!1),G("/login?loginFlag=receivePassword"))}catch(a){m.error(a)}else z(!0)})),variant:"contained",sx:{width:"auto"},children:B("forgotPassword.resetPasswordBtn")})})})]})]})})}e({ForgotPassword:s,default:function({setOpenPage:e}){const{logo:a}=n.useContext(d).state,{loginPageDisplay:l}=n.useContext(x).state,[r,o]=n.useState(!1),[i,c]=n.useState("");return n.useEffect((()=>{(async()=>{try{const e=await p();e&&(o(e.isEnabledOnStorefront),c(e.siteKey))}catch(e){m.error(e)}})()}),[]),t.jsx(s,{setOpenPage:e,logo:l.displayStoreLogo?a:void 0,isEnabledOnStorefront:r,storefrontSiteKey:i})}})}}}));
//# sourceMappingURL=index-legacy-5ygFiqFM.js.map
