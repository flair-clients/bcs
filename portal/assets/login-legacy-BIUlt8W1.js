System.register(["./react-setup-legacy-DjnQrG6U.js","./load-functions-legacy-Bi-Vku98.js","./reactVendor-legacy-CtYIj4Ma.js"],(function(n,e){"use strict";var t,a;return{setters:[n=>{t=n.B,a=n.aG},null,null],execute:function(){n("a",((n,e=!0)=>t.graphqlB2B({query:"mutation Login($loginData: UserLoginType!) {\n  login(loginData: $loginData) {\n    result{\n      storefrontLoginToken\n      token\n      permissions {\n        code\n        permissionLevel\n      }\n    }\n  }\n}",variables:n},e))),n("c",(n=>"bigcommerce"===a?t.graphqlBC({query:"mutation Login($email: String!, $pass: String!) {\n  login(email: $email, password: $pass) {\n    result,\n    customer {\n      entityId,\n      phone,\n      firstName,\n      lastName,\n      email,\n      customerGroupId,\n    }\n  }\n}",variables:n}):t.graphqlBCProxy({query:"mutation Login($email: String!, $pass: String!) {\n  login(email: $email, password: $pass) {\n    result,\n    customer {\n      entityId,\n      phone,\n      firstName,\n      lastName,\n      email,\n      customerGroupId,\n    }\n  }\n}",variables:n}))),n("b",(()=>"bigcommerce"===a?t.graphqlBC({query:"mutation Logout {\n  logout {\n    result\n  }\n}"}):t.graphqlBCProxy({query:"mutation Logout {\n  logout {\n    result\n  }\n}"})))}}}));
//# sourceMappingURL=login-legacy-BIUlt8W1.js.map
