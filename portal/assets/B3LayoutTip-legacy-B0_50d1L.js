System.register(["./mui-legacy-nJi-LPwx.js","./reactVendor-legacy-CtYIj4Ma.js","./react-setup-legacy-DjnQrG6U.js","./B3Tip-legacy-DQwUUv2c.js","./intl-legacy-B7uNycgM.js","./eCache-legacy-CW-H9Ud9.js","./redux-legacy-D5ZHjMNV.js","./toolkit-legacy-uWyLsHZ1.js","./lodashEs-legacy-CZW16S6G.js","./base-legacy-BAe6cWtL.js","./global-legacy-B1EgakWG.js","./load-functions-legacy-Bi-Vku98.js","../index-legacy.BFKCpyw1.js","./lang-legacy-BZ1lZp4I.js","./router-legacy-s4T0V6vG.js","./muiIcon-legacy-CbXEHT38.js","./dateFns-legacy-Bs-ooDPO.js","./dropzone-legacy-C0uLCPXC.js"],(function(l,e){"use strict";var s,a,t,n,c;return{setters:[l=>{s=l.j},l=>{a=l.r,t=l.d},l=>{n=l.a2},l=>{c=l.default},null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){l("default",(function(){const{state:{tipMessage:l},dispatch:e}=a.useContext(n);a.useEffect((()=>{window.tipDispatch=e}),[]);const{msgs:o=[],autoHideDuration:u=5e3,vertical:i="top",horizontal:g="right"}=l;return s.jsx(c,{msgs:o,handleAllClose:(s,a)=>{"clickaway"!==a&&t.flushSync((()=>{if(o.length){const a=o.filter((l=>l.id!==s));e({type:"common",payload:{tipMessage:{...l,msgs:a}}})}}))},autoHideDuration:u,handleItemClose:s=>{((s=[])=>{e({type:"common",payload:{tipMessage:{...l,msgs:s}}})})(o.filter((l=>l.id!==s)))},vertical:i,horizontal:g})}))}}}));
//# sourceMappingURL=B3LayoutTip-legacy-B0_50d1L.js.map
