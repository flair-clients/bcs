import{r as l}from"./reactVendor-BTcQ-GDs.js";import{u as n,az as o,bC as f}from"./react-setup-B6u61idX.js";import"./load-functions-AabybIo1.js";const b=({level:e=0,code:a="",containOrEqual:s="equal"})=>{const{permissions:i}=n(({company:d})=>d),[t,r]=l.useState(!1);return l.useEffect(()=>{if(!(i!=null&&i.length))return;const d=f({level:e,code:a,containOrEqual:s,permissions:i});r(d)},[i,e,a,s]),[t]},g=e=>{const{selectCompanyHierarchyId:a}=n(({company:d})=>d.companyHierarchyInfo),{permissions:s}=n(({company:d})=>d),i=l.useMemo(()=>a?o.COMPANY_SUBSIDIARIES:o.USER,[a]),[t,r]=l.useState([]);return l.useEffect(()=>{if(!(s!=null&&s.length))return;const d=e.map(u=>f({level:i,code:u,containOrEqual:"contain",permissions:s}));r(d)},[s,i,e]),t},A=[{name:"city",label:"City",required:!1,default:"",fieldType:"text",xs:12,variant:"filled",size:"small",idLang:"addresses.filter.city"},{name:"state",label:"State",required:!1,default:"",fieldType:"text",xs:12,variant:"filled",size:"small",idLang:"addresses.filter.state"},{name:"country",label:"Country",required:!1,default:"",fieldType:"text",xs:12,variant:"filled",size:"small",idLang:"addresses.filter.country"}],x=[{name:"isShipping",label:"Shipping",default:"",idLang:"addresses.editAddress.shipping",child:{name:"isDefaultShipping",label:"Default Shipping Address",default:"",parent:"isShipping",idLang:"addresses.editAddress.defaultShippingAddress"}},{name:"isBilling",label:"Billing",default:"",idLang:"addresses.editAddress.billing",child:{name:"isDefaultBilling",label:"Default Billing Address",default:"",parent:"isBilling",idLang:"addresses.editAddress.defaultBillingAddress"}}],L=[{name:"label",label:"Address label",required:!1,fieldType:"text",xs:12,default:"",variant:"filled",size:"small",idLang:"addresses.editAddress.addressLabel"},{name:"firstName",label:"First name",required:!0,default:"",fieldType:"text",xs:6,variant:"filled",size:"small",idLang:"addresses.editAddress.firstName"},{name:"lastName",label:"Last name",required:!0,fieldType:"text",xs:6,default:"",variant:"filled",size:"small",idLang:"addresses.editAddress.lastName"},{name:"company",label:"Company",required:!1,fieldType:"text",xs:12,default:"",variant:"filled",size:"small",idLang:"addresses.editAddress.company"},{name:"country",label:"Country",required:!0,fieldType:"dropdown",xs:12,default:"",variant:"filled",size:"small",replaceOptions:{label:"countryName",value:"countryCode"},options:[],idLang:"addresses.editAddress.country"},{name:"addressLine1",label:"Address line 1",required:!0,fieldType:"text",xs:12,default:"",variant:"filled",size:"small",idLang:"addresses.editAddress.addressLine1"},{name:"addressLine2",label:"Address line 2",required:!1,fieldType:"text",xs:12,default:"",variant:"filled",size:"small",idLang:"addresses.editAddress.addressLine2"},{name:"city",label:"City",required:!0,fieldType:"text",xs:12,default:"",variant:"filled",size:"small",idLang:"addresses.editAddress.city"},{name:"state",label:"State",required:!0,fieldType:"text",xs:8,default:"",variant:"filled",size:"small",replaceOptions:{label:"stateName",value:"stateCode"},idLang:"addresses.editAddress.state"},{name:"zipCode",label:"ZIP code",required:!0,fieldType:"text",xs:4,default:"",variant:"filled",size:"small",idLang:"addresses.editAddress.zipCode"},{name:"phoneNumber",label:"Phone number",required:!1,fieldType:"text",xs:12,default:"",variant:"filled",size:"small",idLang:"addresses.editAddress.phoneNumber"}],C=e=>{const a=(e.formFields||[]).map(s=>({fieldName:s.name,fieldValue:s.value}));return{id:e.id,createdAt:e.createdAt,updatedAt:e.updatedAt,firstName:e.firstName,lastName:e.lastName,addressLine1:e.address1,addressLine2:e.address2||"",address1:e.address1,address2:e.address2||"",address:"",city:e.city,state:e.stateOrProvince,stateCode:"",country:e.country,countryCode:e.countryCode,zipCode:e.postalCode,postalCode:e.postalCode,phoneNumber:e.phone,phone:e.phone,isActive:1,label:"",extraFields:a,company:e.company,bcAddressId:e.bcAddressId}};export{L as a,x as b,C as c,b as d,A as f,g as u};
//# sourceMappingURL=config-CysfnXPe.js.map
