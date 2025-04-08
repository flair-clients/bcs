import{g as N}from"./dateFns-CeqDayOU.js";import{B as g,aI as x,ah as I}from"./react-setup-B6u61idX.js";import"./load-functions-AabybIo1.js";import"./reactVendor-BTcQ-GDs.js";import{R as m}from"./base-DriPzto9.js";import{v as u}from"./validatorRules-2gQp7SVo.js";const L=(e,l=14)=>e?e.replace(/[^\x00-\xff]/gi,"aa").length*l/2:null,F=(e,l=14)=>{const s=document.body.clientWidth,n=s<=750,a=500,i=s+16-98,c=n?i:a,o=L(e,l);return o!==null?Math.ceil(o/c):1},R=e=>g.post("/api/v2/extra-fields/address/validate",m.B2BRest,{...e,storeHash:x}),B=e=>g.post("/api/v2/extra-fields/company/validate",m.B2BRest,{...e,storeHash:x,bcChannelId:I}),D=e=>g.post("/api/v2/extra-fields/user/validate",m.B2BRest,{...e,storeHash:x}),V="yyyy-MM-dd",H=["register.step.account","register.step.details","register.step.finish"],_=["text","multiline","number","dropdown"],b={encode(e){return window.btoa(encodeURIComponent(e))},decode(e){return decodeURIComponent(window.atob(e))}},p={text:["text","number","password","multiline"],checkbox:["checkbox"],dropdown:["dropdown"],radio:["radio"]},E=e=>{var s,n,a,i,c,o;let l={};if(p.text.includes(e.fieldType)&&(l={minlength:e.minlength||null,maxLength:e.maxLength||Number(e.maximumLength)||null,min:e.min||null,max:e.max||Number(e.maximumValue)||null,rows:((s=e==null?void 0:e.options)==null?void 0:s.rows)||e.numberOfRows||null},l!=null&&l.max&&(l.validate=u(["max"],{max:l==null?void 0:l.max})),e.fieldType==="password"&&(l.validate=u(["password"])),((e==null?void 0:e.fieldName)==="email"||(e==null?void 0:e.fieldName)==="phone")&&(l.validate=u([e.fieldName])),(e.fieldType==="number"||e.fieldType==="text"&&e.type==="integer")&&(l.validate=u(["number"]))),p.checkbox.includes(e.fieldType)&&(l={default:e.default||[],options:((n=e.options)==null?void 0:n.items)||null}),p.dropdown.includes(e.fieldType)){const t=[];(a=e.options)!=null&&a.helperLabel&&t.push({label:e.options.helperLabel,value:""});const d=[...t,...((i=e.options)==null?void 0:i.items)||[]];e.listOfValue&&e.listOfValue.forEach(r=>d.push({label:r,value:r})),l={default:e.default||"",options:d||null}}return p.radio.includes(e.fieldType)&&(l={default:e.default||"",options:((c=e.options)==null?void 0:c.items)||[]}),l!=null&&l.options&&(l==null||l.options.forEach(t=>{const d=t;t.value&&(d.value=t.label)})),e.fieldId==="field_country"&&(l.default=((o=e.valueConfigs)==null?void 0:o.default)||l.default),l},w=["country","state","email"],$=["field_country","field_address_1","field_city","field_state","field_zip_code"],q={1:"contactInformation",2:"additionalInformation",3:"businessDetails",4:"address",5:"password"},j=e=>w.includes(e)?e:b.decode(e),A=e=>w.includes(e)?e:b.encode(e),M=e=>e==="countryCode"?"country":e==="stateOrProvince"?"state":e,T=e=>{const l={id:e.id||e.fieldName,name:M(e.name)||A(e.fieldName),label:e.label||e.labelName,required:e.required||e.isRequired,default:e.default||e.defaultValue||"",fieldType:e.fieldType,xs:12,visible:(e==null?void 0:e.visible)||!1,custom:(e==null?void 0:e.custom)||!1,bcLabel:e.label||"",type:e.type||""},s=e;typeof e.fieldType=="number"&&(s.fieldType=_[e.fieldType],l.fieldType=e.fieldType);const n=E(e);return{...l,...n}},X=e=>e.replace(/_(\w)/g,(l,s)=>s.toUpperCase()),O=e=>{const l={};return e.forEach(s=>{var i,c;const n=q[s.groupId];(i=l[n])!=null&&i.length||(l[n]=[]);let a={};if((c=s.valueConfigs)!=null&&c.id?a=T(s.valueConfigs):a=T(s),a.required=s.isRequired,a.id=s.id,a.fieldId=s.fieldId,a.groupId=s.groupId,a.groupName=s.groupName,a.visible=s.visible,a.label=s.labelName,a.custom=a.custom||(s==null?void 0:s.custom),a.variant="filled",a.fieldType==="date"&&!a.default&&(a.default=N(new Date,V)),a.name==="country"&&(a.replaceOptions={label:"countryName",value:"countryCode"}),a.name==="state"&&(a.replaceOptions={label:"stateName",value:"stateName"}),s.fieldId==="field_confirm_password"&&(a.name="confirmPassword"),a.fieldType==="files"&&(a.filesLimit=3,a.maxFileSize=10485760,a.default=[]),a.fieldType==="checkbox"&&!a.options&&(a.label="",a.options=[{label:s.labelName,value:s.labelName}]),a.fieldType==="text"&&a.type==="integer"&&(a.fieldType="number"),a.label.length>0){let o=25;const t=document.body.clientWidth<=750;let d=F(a.label,16);a.fieldType==="multiline"&&(o=0),a.fieldType==="dropdown"&&(o=0,d>1&&(d+=t?1.4:2),a.fieldId==="field_state"&&(d-=t?0:.8));const r=d===1?"".concat(o,"px"):"".concat(o/16+(d-1),"rem");d>0&&(a.extraPadding={paddingTop:r})}l[n].push(a)}),l},G=e=>{if(e!=null&&e.length){const l=e?e.filter(n=>!!n.visible||!!n.custom&&!!n.isRequired):[];return l?O(l):{}}return{}},J=e=>[{name:"companyAttachments",label:e("register.label.companyAttachments"),default:[],fieldType:"file",required:!1,xs:12,filesLimit:3,maxFileSize:10485760}],K={2:"register.emailValidate.alreadyExitsBC",3:"global.emailValidate.multipleCustomer",4:"global.emailValidate.companyUsed",5:"global.emailValidate.alreadyExits",6:"global.emailValidate.usedSuperAdmin"},Q=async({fields:e,data:l,type:s,setError:n})=>new Promise((a,i)=>{(async()=>{var h;const o=e.filter(f=>!!f.custom),t=o.map(f=>({fieldName:b.decode(f.name),fieldValue:l[f.name]||f.default})),r=await(s==="company"?B:R)({extraFields:t});if(r.code!==200){const f=((h=r.data)==null?void 0:h.errMsg)||r.message||"",y=f.split(":");if(y.length>=2){const v=o.find(C=>b.decode(C.name)===y[0]);v&&n(v.name,{type:"manual",message:y[1]})}i(f)}a(r)})()});export{b as B,D as a,Q as b,$ as c,j as d,K as e,J as f,G as g,B as h,H as s,X as t,R as v};
//# sourceMappingURL=config-CWZnT41X.js.map
