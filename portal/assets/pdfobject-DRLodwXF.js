import{g as H,e as X}from"./reactVendor-BTcQ-GDs.js";var O={exports:{}};/**
 *  PDFObject v2.3.0
 *  https://github.com/pipwerks/PDFObject
 *  @license
 *  Copyright (c) 2008-2024 Philip Hutchison
 *  MIT-style license: http://pipwerks.mit-license.org/
 *  UMD module pattern from https://github.com/umdjs/umd/blob/master/templates/returnExports.js
 */(function(T){(function(D,a){T.exports?T.exports=a():D.PDFObject=a()})(X,function(){if(typeof window>"u"||window.navigator===void 0||window.navigator.userAgent===void 0)return!1;let D="2.3.0",a=window,f=a.navigator,v=f.userAgent,k=!1,M=function(){let e=a.chrome!==void 0,n=a.safari!==void 0||f.vendor!==void 0&&/Apple/.test(f.vendor)&&/Safari/.test(v),i=a.Mozilla!==void 0||/irefox/.test(v);return e||n||i},L=function(e){var n=null;try{n=new ActiveXObject(e)}catch(i){n=null}return!!n},R=function(){return"ActiveXObject"in a&&(L("AcroPDF.PDF")||L("PDF.PdfCtrl"))},P=function(){if(f.platform!==void 0&&f.platform==="MacIntel"&&f.maxTouchPoints!==void 0&&f.maxTouchPoints>1||/Mobi|Tablet|Android|iPad|iPhone/.test(v))return!1;let i=typeof f.pdfViewerEnabled=="boolean";return i&&!f.pdfViewerEnabled?!1:i&&f.pdfViewerEnabled||M()||R()}(),E=function(e){let n="",i,l=[],t="";if((e.comment||e.viewrect||e.highlight)&&(e.page||(e.page=1,h("The comment, viewrect, and highlight parameters require a page parameter, but none was specified. Defaulting to page 1."))),e.page&&(l.push("page="+encodeURIComponent(e.page)),delete e.page),e.fdf&&(t=e.fdf,delete e.fdf),e){for(i in e)e.hasOwnProperty(i)&&l.push(encodeURIComponent(i)+"="+encodeURIComponent(e[i]));t&&l.push("fdf="+encodeURIComponent(t)),n=l.join("&"),n&&(n="#"+n)}return n},h=function(e){return k||console.log("[PDFObject]",e),!1},U=function(e){for(;e.firstChild;)e.removeChild(e.firstChild)},x=function(e){let n=document.body;return typeof e=="string"?n=document.querySelector(e):a.jQuery!==void 0&&e instanceof jQuery&&e.length?n=e.get(0):e.nodeType!==void 0&&e.nodeType===1&&(n=e),n},I=function(e,n,i,l){if(window.Blob&&window.URL&&window.URL.createObjectURL){var t=new XMLHttpRequest;t.open("GET",e,!0),t.responseType="blob",t.onload=function(){if(t.status===200){var p=t.response,r=document.createElement("a");r.innerText="Download PDF",r.href=URL.createObjectURL(p),r.setAttribute("download",n),i.innerHTML=l.replace(/\[pdflink\]/g,r.outerHTML)}},t.send()}},F=function(e,n,i,l,t,p,r,m,g,s,b){U(n);let c=i;if(e==="pdfjs"){let d=b.indexOf("?")!==-1?"&":"?";c=b+d+"file="+encodeURIComponent(i)+l}else c+=l;let o=document.createElement("iframe");if(o.className="pdfobject",o.type="application/pdf",o.title=m,o.src=c,o.allow="fullscreen",o.frameborder="0",r&&(o.id=r),!g){let d="border: none;";n!==document.body?d+="width: "+t+"; height: "+p+";":d+="position: absolute; top: 0; right: 0; bottom: 0; left: 0; width: 100%; height: 100%;",o.style.cssText=d}let w=["className","type","title","src","style","id","allow","frameborder"];return s&&s.key&&w.indexOf(s.key)===-1&&o.setAttribute(s.key,typeof s.value<"u"?s.value:""),n.classList.add("pdfobject-container"),n.appendChild(o),n.getElementsByTagName("iframe")[0]},S=function(e,n,i){let l=n||!1,t=i||{};k=typeof t.suppressConsole=="boolean"?t.suppressConsole:!1;let p=typeof t.id=="string"?t.id:"",r=t.page||!1,m=t.pdfOpenParams||{},g=typeof t.fallbackLink=="string"||typeof t.fallbackLink=="boolean"?t.fallbackLink:!0,s=t.width||"100%",b=t.height||"100%",c=t.title||"Embedded PDF",o=typeof t.forcePDFJS=="boolean"?t.forcePDFJS:!1,w=typeof t.omitInlineStyles=="boolean"?t.omitInlineStyles:!1,d=t.PDFJS_URL||!1,u=x(l),y="",j=t.customAttribute||{},C="<p>This browser does not support inline PDFs. Please download the PDF to view it: [pdflink]</p>";if(typeof e!="string")return h("URL is not valid");if(!u)return h("Target element cannot be determined");if(r&&(m.page=r),y=E(m),o&&d)return F("pdfjs",u,e,y,s,b,p,c,w,j,d);if(P)return F("iframe",u,e,y,s,b,p,c,w,j);if(d)return F("pdfjs",u,e,y,s,b,p,c,w,j,d);if(g)if(typeof g=="string")u.innerHTML=g.replace(/\[url\]/g,e);else if(e.indexOf("data:application/pdf;base64")!==-1)I(e,"file.pdf",u,C);else{let A="<a href='"+e+"'>Download PDF</a>";u.innerHTML=C.replace(/\[pdflink\]/g,A)}return h("This browser does not support embedded PDFs")};return{embed:function(e,n,i){return S(e,n,i)},pdfobjectversion:function(){return D}(),supportsPDFs:function(){return P}()}})})(O);var B=O.exports;const q=H(B);export{q as P};
//# sourceMappingURL=pdfobject-DRLodwXF.js.map
