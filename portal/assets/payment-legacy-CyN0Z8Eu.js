System.register(["./lodashEs-legacy-CZW16S6G.js","./react-setup-legacy-DjnQrG6U.js","./base-legacy-BAe6cWtL.js","./load-functions-legacy-Bi-Vku98.js","./reactVendor-legacy-CtYIj4Ma.js","./b3checkout-legacy-CZP4RuCj.js"],(function(n,e){"use strict";var t,a,r,o,c;return{setters:[n=>{t=n.r},n=>{a=n.B,r=n.aC},n=>{o=n.b},null,null,n=>{c=n.a}],execute:function(){const e=n=>`{\n  invoices (\n    search: "${n.q||""}"\n    first: ${n.first}\n    offset: ${n.offset} \n    ${n?.status?`status: ${r(n.status?[n.status]:[])}`:""}\n    ${n?.beginDateAt?`beginDateAt: "${n.beginDateAt}"`:""}\n    ${n?.endDateAt?`endDateAt: "${n.endDateAt}"`:""}\n    orderBy: "${n?.orderBy}"\n    ${n?.beginDueDateAt?`beginDueDateAt: "${n.beginDueDateAt}"`:""}\n    ${n?.endDueDateAt?`endDueDateAt: "${n.endDueDateAt}"`:""}\n    ${n?.companyIds?`companyIds: ${r(n.companyIds||[])}`:""}\n  ){\n    totalCount,\n    pageInfo{\n      hasNextPage,\n      hasPreviousPage,\n    },\n    edges{\n      node {\n        id,\n        createdAt,\n        updatedAt,\n        storeHash,\n        customerId,\n        externalId,\n        invoiceNumber,\n        dueDate,\n        orderNumber,\n        purchaseOrderNumber,\n        notAllowedPay,\n        details,\n        status,\n        pendingPaymentCount,\n        purchaseOrderNumber,\n        openBalance {\n          code,\n          value,\n        },\n        originalBalance {\n          code,\n          value,\n        },\n        companyInfo {\n          companyId,\n          companyName,\n          companyAddress,\n          companyCountry,\n          companyState,\n          companyCity,\n          companyZipCode,\n          phoneNumber,\n          bcId,\n        },\n        orderUserId,\n      }\n    }\n  }\n}`,i=(n,e,t)=>`{\n  invoiceStats (\n    ${""===n?"":`status: ${n},`}\n    decimalPlaces: ${e}\n    ${t.length?`companyIds: ${r(t||[])}`:""}\n  ){\n    totalBalance,\n    overDueBalance,\n  }\n}`,d=(n,e)=>`mutation {\n  invoicePdf (\n    invoiceId: ${n}\n    ${e?`isPayNow: ${e}`:""}\n  ){\n    url,\n  }\n}`,s=n=>`mutation {\n  invoiceCreateBcCart (\n    bcCartData: {\n      lineItems: ${r(n.lineItems)},\n      currency: "${n.currency}"\n      details: {\n        memo: ""\n      }\n    }\n  ) {\n    result {\n      checkoutUrl\n      cartId\n    }\n  }\n}`,u=n=>`{\n  allReceiptLines (\n    invoiceId: "${n}"\n    first: 50\n    offset: 0\n  ) {\n    edges {\n      node {\n        id\n        paymentType\n        invoiceId\n        amount\n        transactionType\n        referenceNumber\n        createdAt\n      }\n    }\n    totalCount\n  }\n}`,l=n=>`{\n  receipt (\n    id: ${n}\n  ) {\n    id,\n    createdAt,\n    updatedAt,\n    storeHash,\n    customerId,\n    externalId,\n    externalCustomerId,\n    totalCode,\n    totalAmount,\n    payerName,\n    payerCustomerId,\n    details,\n    paymentId,\n    transactionType,\n    paymentType,\n    referenceNumber,\n    receiptLineSet {\n      edges {\n        node {\n          id,\n          createdAt,\n          updatedAt,\n          storeHash,\n          customerId,\n          externalId,\n          externalCustomerId,\n          receiptId,\n          invoiceId,\n          amountCode,\n          amount,\n          paymentStatus,\n          paymentType,\n          invoiceNumber,\n          paymentId,\n          transactionType,\n          referenceNumber,\n        }\n      }\n    }\n  }\n}`,m=(n("c",(n=>a.graphqlB2B({query:e(n)}))),n("i",((n,e)=>a.graphqlB2B({query:d(n,e)}))),n("a",(n=>a.graphqlB2B({query:u(n)}))),n("h",(n=>{return a.graphqlB2B({query:(e=n,`{\n  invoice (\n    invoiceId: ${e}\n  ) {\n    id,\n    createdAt,\n    updatedAt,\n    storeHash,\n    customerId,\n    externalId,\n    invoiceNumber,\n    dueDate,\n    orderNumber,\n    purchaseOrderNumber,\n    notAllowedPay,\n    details,\n    status,\n    pendingPaymentCount,\n    purchaseOrderNumber,\n    openBalance {\n      code,\n      value,\n    },\n    originalBalance {\n      code,\n      value,\n    },\n  }\n}`)});var e})),n("b",(n=>a.graphqlB2B({query:l(n)}))),n("e",(n=>a.graphqlB2B({query:"mutation($invoiceFilterData: InvoiceFilterDataType!, $lang: String!) {\n  invoicesExport (\n    invoiceFilterData: $invoiceFilterData,\n    lang: $lang,\n  ) {\n    url\n  }\n}",variables:n}))),n("d",((n,e,t)=>a.graphqlB2B({query:i(n,e,t)}))),async n=>{const{invoiceCreateBcCart:{result:{checkoutUrl:e,cartId:t}}}=await(r=n,a.graphqlB2B({query:s(r)}));var r;return{checkoutUrl:e,cartId:t}});n("g",(async(n,e,t)=>{const{checkoutUrl:a,cartId:r}=await m(n),i=()=>{t?window.location.replace(a):window.location.href=a};if("bigcommerce"!==e)try{await c(r,a,t)}catch(d){o.error(d),i()}else i()})),n("f",((n,e)=>t(Number(n),e).toFixed(e)))}}}));
//# sourceMappingURL=payment-legacy-CyN0Z8Eu.js.map
