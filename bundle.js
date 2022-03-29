(()=>{"use strict";var n={71:(n,t,e)=>{e.d(t,{Z:()=>c});var o=e(537),r=e.n(o),i=e(645),a=e.n(i)()(r());a.push([n.id,"#app {\n  margin: 32px auto;\n  padding: 44px 89px;\n  width: fit-content;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  background-color: var(--main-bg-color);\n}\n\n#tab-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 52px 0;\n\n  width: 440px;\n  height: 500px;\n  box-shadow: 0 1em 1em -1em var(--box-shadow-color) inset;\n}\n\n.input-form {\n  display: flex;\n  flex-direction: column;\n  align-items: space-around;\n}\n\n.input-form-container {\n  display: flex;\n}\n\n.hide {\n  display: none;\n}\n","",{version:3,sources:["webpack://./src/css/app.css"],names:[],mappings:"AAAA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,kBAAkB;;EAElB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;;EAEnB,sCAAsC;AACxC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,eAAe;;EAEf,YAAY;EACZ,aAAa;EACb,wDAAwD;AAC1D;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,yBAAyB;AAC3B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf",sourcesContent:["#app {\n  margin: 32px auto;\n  padding: 44px 89px;\n  width: fit-content;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  background-color: var(--main-bg-color);\n}\n\n#tab-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 52px 0;\n\n  width: 440px;\n  height: 500px;\n  box-shadow: 0 1em 1em -1em var(--box-shadow-color) inset;\n}\n\n.input-form {\n  display: flex;\n  flex-direction: column;\n  align-items: space-around;\n}\n\n.input-form-container {\n  display: flex;\n}\n\n.hide {\n  display: none;\n}\n"],sourceRoot:""}]);const c=a},940:(n,t,e)=>{e.d(t,{Z:()=>c});var o=e(537),r=e.n(o),i=e(645),a=e.n(i)()(r());a.push([n.id,".default-button {\n  background-color: var(--default-button-bg-color);\n  color: var(--main-color);\n  font-weight: 500;\n}\n\n.default-button:hover {\n  background-color: var(--default-button-hover-bg-color);\n}\n\n.input-form-button {\n  margin-left: 8px;\n  flex-shrink: 0;\n  padding: 8px 16px;\n\n  background-color: var(--form-button-bg-color);\n  color: white;\n  font-weight: 700;\n}\n\n.input-form-button:hover {\n  background-color: var(--form-button-hover-bg-color);\n}\n\n.nav-tab-button {\n  padding: 8px 20px;\n\n  line-height: 35px;\n  background-color: var(--default-button-bg-color);\n  color: var(--main-color);\n  font-style: normal;\n  font-weight: 500;\n  font-size: 1rem;\n  letter-spacing: 0.5px;\n}\n\n.nav-tab-button.selected {\n  background-color: var(--selected-nav-tab-button-bg-color);\n}\n.nav-tab-button:hover {\n  background-color: var(--default-button-hover-bg-color);\n}\n\n.nav-tab-button.selected:hover {\n  background-color: var(--selected-nav-tab-button-bg-color);\n}\n","",{version:3,sources:["webpack://./src/css/buttonStyle.css"],names:[],mappings:"AAAA;EACE,gDAAgD;EAChD,wBAAwB;EACxB,gBAAgB;AAClB;;AAEA;EACE,sDAAsD;AACxD;;AAEA;EACE,gBAAgB;EAChB,cAAc;EACd,iBAAiB;;EAEjB,6CAA6C;EAC7C,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,mDAAmD;AACrD;;AAEA;EACE,iBAAiB;;EAEjB,iBAAiB;EACjB,gDAAgD;EAChD,wBAAwB;EACxB,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,qBAAqB;AACvB;;AAEA;EACE,yDAAyD;AAC3D;AACA;EACE,sDAAsD;AACxD;;AAEA;EACE,yDAAyD;AAC3D",sourcesContent:[".default-button {\n  background-color: var(--default-button-bg-color);\n  color: var(--main-color);\n  font-weight: 500;\n}\n\n.default-button:hover {\n  background-color: var(--default-button-hover-bg-color);\n}\n\n.input-form-button {\n  margin-left: 8px;\n  flex-shrink: 0;\n  padding: 8px 16px;\n\n  background-color: var(--form-button-bg-color);\n  color: white;\n  font-weight: 700;\n}\n\n.input-form-button:hover {\n  background-color: var(--form-button-hover-bg-color);\n}\n\n.nav-tab-button {\n  padding: 8px 20px;\n\n  line-height: 35px;\n  background-color: var(--default-button-bg-color);\n  color: var(--main-color);\n  font-style: normal;\n  font-weight: 500;\n  font-size: 1rem;\n  letter-spacing: 0.5px;\n}\n\n.nav-tab-button.selected {\n  background-color: var(--selected-nav-tab-button-bg-color);\n}\n.nav-tab-button:hover {\n  background-color: var(--default-button-hover-bg-color);\n}\n\n.nav-tab-button.selected:hover {\n  background-color: var(--selected-nav-tab-button-bg-color);\n}\n"],sourceRoot:""}]);const c=a},262:(n,t,e)=>{e.d(t,{Z:()=>c});var o=e(537),r=e.n(o),i=e(645),a=e.n(i)()(r());a.push([n.id,"#cash-charge-form {\n  width: 80%;\n}\n\n.cash-charge-input {\n  width: 100%;\n}\n\n.vendingmachine-total-amount {\n  width: 80%;\n  margin-top: 16px;\n  font-weight: 400;\n  font-size: 1rem;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n}\n\n.vendingmachine-coin-table {\n  margin-top: 48px;\n  min-width: 300px;\n}\n","",{version:3,sources:["webpack://./src/css/coinRechargeTab.css"],names:[],mappings:"AAAA;EACE,UAAU;AACZ;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,UAAU;EACV,gBAAgB;EAChB,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,qBAAqB;AACvB;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;AAClB",sourcesContent:["#cash-charge-form {\n  width: 80%;\n}\n\n.cash-charge-input {\n  width: 100%;\n}\n\n.vendingmachine-total-amount {\n  width: 80%;\n  margin-top: 16px;\n  font-weight: 400;\n  font-size: 1rem;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n}\n\n.vendingmachine-coin-table {\n  margin-top: 48px;\n  min-width: 300px;\n}\n"],sourceRoot:""}]);const c=a},340:(n,t,e)=>{e.d(t,{Z:()=>d});var o=e(537),r=e.n(o),i=e(645),a=e.n(i),c=e(285),s=e(940),u=e(71),l=e(986),A=e(262),p=a()(r());p.i(c.Z),p.i(s.Z),p.i(u.Z),p.i(l.Z),p.i(A.Z),p.push([n.id,":root {\n  --main-body-color: #e5e5e5;\n  --main-bg-color: #ffffff;\n  --main-color: #000000;\n\n  --input-color: #8b8b8b;\n  --input-border-color: #b4b4b4;\n  --box-shadow-color: #00bbd46b;\n\n  --default-button-bg-color: #f5f5f5;\n  --default-button-hover-bg-color: #eeeeee;\n\n  --form-button-bg-color: #00bcd4;\n  --form-button-hover-bg-color: #00b3ca;\n\n  --selected-nav-tab-button-bg-color: #00bcd429;\n\n  --table-border-color: #dcdcdc;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nhtml,\nbody {\n  height: 100%;\n  -webkit-font-smoothing: antialiased;\n  background-color: var(--main-body-color);\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\nh1,\nh2 {\n  white-space: nowrap;\n}\n\nh1 {\n  margin-bottom: 32px;\n}\n\nbutton {\n  padding: 8px;\n\n  font-size: 0.875rem;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\na {\n  padding: 8px;\n\n  text-decoration: none;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\ninput {\n  padding: 8px;\n  border: 1px solid var(--input-border-color);\n  border-radius: 4px;\n}\n\ninput::placeholder {\n  color: var(--input-color);\n}\n\ninput[type='number']::-webkit-inner-spin-button {\n  opacity: 0.5;\n}\n\ninput[type='number']:disabled::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n}\n\nform > label {\n  margin: 0 0 8px;\n  font-weight: 400;\n  font-size: 1rem;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n}\n","",{version:3,sources:["webpack://./src/css/index.css"],names:[],mappings:"AAAA;EACE,0BAA0B;EAC1B,wBAAwB;EACxB,qBAAqB;;EAErB,sBAAsB;EACtB,6BAA6B;EAC7B,6BAA6B;;EAE7B,kCAAkC;EAClC,wCAAwC;;EAExC,+BAA+B;EAC/B,qCAAqC;;EAErC,6CAA6C;;EAE7C,6BAA6B;AAC/B;;AAQA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;;EAEE,gBAAgB;AAClB;;AAEA;;EAEE,YAAY;EACZ,mCAAmC;EACnC,wCAAwC;AAC1C;;AAEA;;;;EAIE,aAAa;AACf;;AAEA;;EAEE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,YAAY;;EAEZ,mBAAmB;EACnB,YAAY;EACZ,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,YAAY;;EAEZ,qBAAqB;EACrB,YAAY;EACZ,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,2CAA2C;EAC3C,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,qBAAqB;AACvB",sourcesContent:[":root {\n  --main-body-color: #e5e5e5;\n  --main-bg-color: #ffffff;\n  --main-color: #000000;\n\n  --input-color: #8b8b8b;\n  --input-border-color: #b4b4b4;\n  --box-shadow-color: #00bbd46b;\n\n  --default-button-bg-color: #f5f5f5;\n  --default-button-hover-bg-color: #eeeeee;\n\n  --form-button-bg-color: #00bcd4;\n  --form-button-hover-bg-color: #00b3ca;\n\n  --selected-nav-tab-button-bg-color: #00bcd429;\n\n  --table-border-color: #dcdcdc;\n}\n\n@import './table.css';\n@import './buttonStyle.css';\n@import './app.css';\n@import './itemManageTab.css';\n@import './coinRechargeTab.css';\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nhtml,\nbody {\n  height: 100%;\n  -webkit-font-smoothing: antialiased;\n  background-color: var(--main-body-color);\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\nh1,\nh2 {\n  white-space: nowrap;\n}\n\nh1 {\n  margin-bottom: 32px;\n}\n\nbutton {\n  padding: 8px;\n\n  font-size: 0.875rem;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\na {\n  padding: 8px;\n\n  text-decoration: none;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\ninput {\n  padding: 8px;\n  border: 1px solid var(--input-border-color);\n  border-radius: 4px;\n}\n\ninput::placeholder {\n  color: var(--input-color);\n}\n\ninput[type='number']::-webkit-inner-spin-button {\n  opacity: 0.5;\n}\n\ninput[type='number']:disabled::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n}\n\nform > label {\n  margin: 0 0 8px;\n  font-weight: 400;\n  font-size: 1rem;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n}\n"],sourceRoot:""}]);const d=p},986:(n,t,e)=>{e.d(t,{Z:()=>c});var o=e(537),r=e.n(o),i=e(645),a=e.n(i)()(r());a.push([n.id,".item-info-input {\n  width: 30%;\n  margin-right: 4px;\n}\n\n.table-container {\n  margin-top: 48px;\n  overflow-y: auto;\n}\n\n.item-info-input-cell {\n  width: 100%;\n  text-align: center;\n  background-color: var(--main-bg-color);\n  color: var(--main-color);\n}\n\n.item-info-input-cell:disabled {\n  border: none;\n  padding: 9px;\n}\n\n.edit-item-button,\n.confirm-item-button {\n  margin-right: 8px;\n}\n","",{version:3,sources:["webpack://./src/css/itemManageTab.css"],names:[],mappings:"AAAA;EACE,UAAU;EACV,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,sCAAsC;EACtC,wBAAwB;AAC1B;;AAEA;EACE,YAAY;EACZ,YAAY;AACd;;AAEA;;EAEE,iBAAiB;AACnB",sourcesContent:[".item-info-input {\n  width: 30%;\n  margin-right: 4px;\n}\n\n.table-container {\n  margin-top: 48px;\n  overflow-y: auto;\n}\n\n.item-info-input-cell {\n  width: 100%;\n  text-align: center;\n  background-color: var(--main-bg-color);\n  color: var(--main-color);\n}\n\n.item-info-input-cell:disabled {\n  border: none;\n  padding: 9px;\n}\n\n.edit-item-button,\n.confirm-item-button {\n  margin-right: 8px;\n}\n"],sourceRoot:""}]);const c=a},285:(n,t,e)=>{e.d(t,{Z:()=>c});var o=e(537),r=e.n(o),i=e(645),a=e.n(i)()(r());a.push([n.id,"table {\n  border-width: 1px;\n  border-bottom: 1px solid var(--table-border-color);\n  border-collapse: collapse;\n  min-width: 417px;\n}\n\ncaption {\n  padding: 0 0 20px;\n}\n\ntr,\ntd {\n  width: 25%;\n  padding: 8px;\n  border-top: 1px solid var(--table-border-color);\n  text-align: center;\n}\n\ntd > div {\n  display: flex;\n}\n\nth {\n  padding: 8px;\n  width: 25%;\n}\n","",{version:3,sources:["webpack://./src/css/table.css"],names:[],mappings:"AAAA;EACE,iBAAiB;EACjB,kDAAkD;EAClD,yBAAyB;EACzB,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;;EAEE,UAAU;EACV,YAAY;EACZ,+CAA+C;EAC/C,kBAAkB;AACpB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,UAAU;AACZ",sourcesContent:["table {\n  border-width: 1px;\n  border-bottom: 1px solid var(--table-border-color);\n  border-collapse: collapse;\n  min-width: 417px;\n}\n\ncaption {\n  padding: 0 0 20px;\n}\n\ntr,\ntd {\n  width: 25%;\n  padding: 8px;\n  border-top: 1px solid var(--table-border-color);\n  text-align: center;\n}\n\ntd > div {\n  display: flex;\n}\n\nth {\n  padding: 8px;\n  width: 25%;\n}\n"],sourceRoot:""}]);const c=a},645:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",o=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),o&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),o&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var u=0;u<n.length;u++){var l=[].concat(n[u]);o&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},537:n=>{n.exports=function(n){var t=n[1],e=n[3];if(!e)return t;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),i="/*# ".concat(r," */"),a=e.sources.map((function(n){return"/*# sourceURL=".concat(e.sourceRoot||"").concat(n," */")}));return[t].concat(a).concat([i]).join("\n")}return[t].join("\n")}},379:n=>{var t=[];function e(n){for(var e=-1,o=0;o<t.length;o++)if(t[o].identifier===n){e=o;break}return e}function o(n,o){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],u=o.base?s[0]+o.base:s[0],l=i[u]||0,A="".concat(u," ").concat(l);i[u]=l+1;var p=e(A),d={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(d);else{var f=r(d,o);o.byIndex=c,t.splice(c,0,{identifier:A,updater:f,references:1})}a.push(A)}return a}function r(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=e(i[a]);t[c].references--}for(var s=o(n,r),u=0;u<i.length;u++){var l=e(i[u]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=s}}},569:n=>{var t={};n.exports=function(n,e){var o=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}},216:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},565:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},795:n=>{n.exports=function(n){var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var o="";e.supports&&(o+="@supports (".concat(e.supports,") {")),e.media&&(o+="@media ".concat(e.media," {"));var r=void 0!==e.layer;r&&(o+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),o+=e.css,r&&(o+="}"),e.media&&(o+="}"),e.supports&&(o+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},589:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}}},t={};function e(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return n[o](i,i.exports,e),i.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var o in t)e.o(t,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:t[o]})},e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{var n=e(379),t=e.n(n),o=e(795),r=e.n(o),i=e(569),a=e.n(i),c=e(565),s=e.n(c),u=e(216),l=e.n(u),A=e(589),p=e.n(A),d=e(340),f={};f.styleTagTransform=p(),f.setAttributes=s(),f.insert=a().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l(),t()(d.Z,f),d.Z&&d.Z.locals&&d.Z.locals;var b=100,m=function(n){var t=n.itemName,e=n.itemPrice,o=n.itemQuantity;return'\n    <tr data-item-name="'.concat(t,'">\n      <td><input class="item-info-input-cell" value="').concat(t,'" type="text" minlength="1" maxlength="10" disabled/></td>\n      <td><input class="item-info-input-cell" value="').concat(e,'" type="number" min="100" max="10000" step="10" disabled/></td>\n      <td><input class="item-info-input-cell" value="').concat(o,'" type="number" min="1" max="20" disabled/></td>\n      <td class="item-button-cell">\n        <div>\n          <button type="button" class="default-button edit-item-button">수정</button>\n          <button type="button" class="default-button delete-item-button">삭제</button>\n        </div>\n      </td>\n      <td class="item-button-cell hide">\n        <div>\n          <button type="button" class="default-button confirm-item-button">확인</button>\n          <button type="button" class="default-button cancel-item-button">취소</button>\n        </div>\n      </td>\n    </tr>\n')},h=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;return t.querySelector(n)},g=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;return t.querySelectorAll(n)};function v(n,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}const C=function(){function n(t){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this.vendingMachine=t,this.navTabButtonList=g(".nav-tab-button"),this.tabContent=h("#tab-content")}var t,e;return t=n,(e=[{key:"changeTabContent",value:function(n,t){this.tabContent.replaceChildren(),this.tabContent.insertAdjacentHTML("afterbegin",n),this.navTabButtonList.forEach((function(n){return n.classList.toggle("selected",t===n)}))}}])&&v(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),n}();function E(n){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},E(n)}function y(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,o=new Array(t);e<t;e++)o[e]=n[e];return o}function B(n,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function x(n,t){return x=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n},x(n,t)}function w(n,t){if(t&&("object"===E(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return k(n)}function k(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function T(n){return T=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},T(n)}function I(n,t){S(n,t),t.add(n)}function M(n,t,e){S(n,t),t.set(n,e)}function S(n,t){if(t.has(n))throw new TypeError("Cannot initialize the same private elements twice on an object")}function j(n,t,e){if(!t.has(n))throw new TypeError("attempted to get private field on non-instance");return e}function L(n,t){var e=function(n,t,e){if(!t.has(n))throw new TypeError("attempted to get private field on non-instance");return t.get(n)}(n,t);return function(n,t){return t.get?t.get.call(n):t.value}(n,e)}var N=new WeakMap,R=new WeakMap,O=new WeakMap,D=new WeakMap,P=new WeakSet,_=new WeakSet,Z=new WeakSet,Y=new WeakSet,U=new WeakSet,W=new WeakSet,q=new WeakSet,z=new WeakSet,F=new WeakSet,Q=new WeakSet,V=new WeakSet;function H(n){var t=g(".item-info-input-cell",n),e=g(".item-button-cell",n);j(this,U,G).call(this,t,e,!1),t[0].focus()}function J(n){var t=n.dataset.itemName;this.vendingMachine.deleteItem(t),n.remove()}function X(n){var t=g(".item-info-input-cell",n),e=j(this,W,K).call(this,Array.from(t)),o=g(".item-button-cell",n),r=n.rowIndex-1;try{this.vendingMachine.validateItemInput(e,r,!1)}catch(n){return void alert(n.message)}this.vendingMachine.editItem(e,r),n.dataset.itemName=e.itemName.trim(),j(this,U,G).call(this,t,o)}function $(n){var t=g(".item-info-input-cell",n),e=g(".item-button-cell",n),o=Object.values(this.vendingMachine.itemList[n.rowIndex-1]);t.forEach((function(n,t){n.value=o[t]})),j(this,U,G).call(this,t,e)}function G(n,t){var e=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];n.forEach((function(n){n.disabled=e})),t.forEach((function(n){return n.classList.toggle("hide")}))}function K(n){var t,e,o=(t=n.map((function(n){return n.value})),e=3,function(n){if(Array.isArray(n))return n}(t)||function(n,t){var e=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=e){var o,r,i=[],a=!0,c=!1;try{for(e=e.call(n);!(a=(o=e.next()).done)&&(i.push(o.value),!t||i.length!==t);a=!0);}catch(n){c=!0,r=n}finally{try{a||null==e.return||e.return()}finally{if(c)throw r}}return i}}(t,e)||function(n,t){if(n){if("string"==typeof n)return y(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?y(n,t):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),r=o[0],i=o[1],a=o[2];return{itemName:r.trim(),itemPrice:Number(i),itemQuantity:Number(a)}}function nn(n){this.itemStatusTable.insertAdjacentHTML("beforeend",m(n))}function tn(n){return n.classList.contains("edit-item-button")}function en(n){return n.classList.contains("delete-item-button")}function on(n){return n.classList.contains("confirm-item-button")}function rn(n){return n.classList.contains("cancel-item-button")}const an=function(n){!function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),t&&x(n,t)}(a,n);var t,e,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}(),function(){var n,t=T(o);if(r){var e=T(this).constructor;n=Reflect.construct(t,arguments,e)}else n=t.apply(this,arguments);return w(this,n)});function a(n){var t;return function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),I(k(t=i.call(this,n)),V),I(k(t),Q),I(k(t),F),I(k(t),z),I(k(t),q),I(k(t),W),I(k(t),U),I(k(t),Y),I(k(t),Z),I(k(t),_),I(k(t),P),M(k(t),N,{writable:!0,value:function(){t.itemManageTabButton.classList.contains("selected")||t.renderInitialItemManageTabState()}}),M(k(t),R,{writable:!0,value:function(n){n.preventDefault();var e=j(k(t),W,K).call(k(t),Array.from(t.itemInfoInputs));try{t.vendingMachine.validateItemInput(e)}catch(n){return void alert(n.message)}var o=t.vendingMachine.addItem(e);j(k(t),q,nn).call(k(t),o),t.itemInfoInputs.forEach((function(n){return n.value=""})),t.itemInfoInputs[0].focus()}}),M(k(t),O,{writable:!0,value:function(n){var e,o=n.target,r=o.closest("tr");r&&(j(k(t),z,tn).call(k(t),o)?j(k(t),P,H).call(k(t),r):j(k(t),F,en).call(k(t),o)&&confirm((e=r.dataset.itemName,"정말 '".concat(e,"' 상품을 삭제하시겠습니까?")))?j(k(t),_,J).call(k(t),r):(j(k(t),Q,on).call(k(t),o)&&j(k(t),Z,X).call(k(t),r),j(k(t),V,rn).call(k(t),o)&&j(k(t),Y,$).call(k(t),r)))}}),M(k(t),D,{writable:!0,value:function(n){var e=n.key,o=n.target.closest("tr");"Enter"===e&&o&&j(k(t),Z,X).call(k(t),o)}}),t.itemManageTabButton=h("#item-manage-tab-button"),t.itemInfoForm=null,t.itemInfoInputs=null,t.itemStatusTable=null,t.itemManageTabButton.addEventListener("click",L(k(t),N)),t}return t=a,(e=[{key:"renderInitialItemManageTabState",value:function(){var n;this.changeTabContent((n=this.vendingMachine.itemList,'\n    <form id="item-info-form" class="input-form">\n      <label>추가할 상품 정보를 입력해주세요(상품명, 가격, 수량).</label>\n      <div class="input-form-container">\n        <input class="item-info-input" type="text" placeholder="상품명" minlength="1" maxlength="10" autofocus/>\n        <input class="item-info-input" type="number" placeholder="가격" min="100" max="10000" step="10"/>\n        <input class="item-info-input" type="number" placeholder="수량" min="1" max="20"/>\n        <button class="input-form-button">추가</button>\n      </div>\n    </form>\n    <div class="table-container">\n      <table class="item-status-table">\n        <caption><h2>상품 현황</h2></caption>\n        <tr>\n          <th><span>상품명</span></th>\n          <th><span>가격</span></th>\n          <th><span>수량</span></th>\n          <th><span></span></th>\n        </tr>\n        '.concat(n.map((function(n){return m(n)})).join(""),"\n      </table>\n    </div>\n")),this.itemManageTabButton),this.itemInfoForm=h("#item-info-form",this.tabContent),this.itemInfoInputs=g(".item-info-input",this.itemInfoForm),this.itemStatusTable=h(".item-status-table",this.tabContent),this.itemInfoForm.addEventListener("submit",L(this,R)),this.itemStatusTable.addEventListener("click",L(this,O)),this.itemStatusTable.addEventListener("keydown",L(this,D)),this.itemInfoInputs[0].focus()}}])&&B(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),a}(C);function cn(n){return cn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},cn(n)}function sn(n,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function un(n,t){return un=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n},un(n,t)}function ln(n,t){if(t&&("object"===cn(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return An(n)}function An(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function pn(n){return pn=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},pn(n)}function dn(n,t,e){fn(n,t),t.set(n,e)}function fn(n,t){if(t.has(n))throw new TypeError("Cannot initialize the same private elements twice on an object")}function bn(n,t){var e=function(n,t,e){if(!t.has(n))throw new TypeError("attempted to get private field on non-instance");return t.get(n)}(n,t);return function(n,t){return t.get?t.get.call(n):t.value}(n,e)}var mn=new WeakMap,hn=new WeakMap,gn=new WeakSet;function vn(n,t){this.chargedAmountText.textContent=n,this.coinCountList.forEach((function(n){n.textContent="".concat(t[n.dataset.coinValue],"개")}))}const Cn=function(n){!function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),t&&un(n,t)}(a,n);var t,e,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}(),function(){var n,t=pn(o);if(r){var e=pn(this).constructor;n=Reflect.construct(t,arguments,e)}else n=t.apply(this,arguments);return ln(this,n)});function a(n){var t,e,o;return function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),fn(e=An(t=i.call(this,n)),o=gn),o.add(e),dn(An(t),mn,{writable:!0,value:function(){t.coinRechargeTabButton.classList.contains("selected")||t.renderInitialCoinRechargeTabState()}}),dn(An(t),hn,{writable:!0,value:function(n){n.preventDefault();var e=t.cashChargeInput.valueAsNumber;try{t.vendingMachine.validateCashInput(e)}catch(n){return void alert(n.message)}(function(n,t,e){if(!t.has(n))throw new TypeError("attempted to get private field on non-instance");return e})(An(t),gn,vn).call(An(t),t.vendingMachine.chargeCoin(e),t.vendingMachine.coinCollection)}}),t.coinRechargeTabButton=h("#coin-recharge-tab-button"),t.cashChargeForm=null,t.cashChargeInput=null,t.chargedAmountText=null,t.coinCountList=null,t.coinRechargeTabButton.addEventListener("click",bn(An(t),mn)),t}return t=a,(e=[{key:"renderInitialCoinRechargeTabState",value:function(){var n,t,e=this.vendingMachine.calculateTotalCoinAmount();this.changeTabContent((n=e,t=this.vendingMachine.coinCollection,'\n    <form id="cash-charge-form" class="input-form">\n        <label>자판기가 보유할 금액을 입력해주세요</label>\n        <div class="input-form-container">\n          <input class="cash-charge-input" type="number" placeholder="금액" min="10" max="100000" step="10" autofocus/>\n          <button class="input-form-button">충전</button>\n        </div>\n    </form>\n    <p class="vendingmachine-total-amount">현재 보유 금액: <span id="charged-amount">'.concat(n,'</span>원</p>\n    <table class="vendingmachine-coin-table">\n      <caption><h2>자판기가 보유한 동전</h2></caption>\n      <tr>\n        <th>동전</th>\n        <th>개수</th>\n      </tr>\n      <tr>\n        <td>500원</td>\n        <td class="coin-count" data-coin-value="500">').concat(t[500],'개</td>\n      </tr>\n      <tr>\n        <td>100원</td>\n        <td class="coin-count" data-coin-value="100">').concat(t[100],'개</td>\n      </tr>\n      <tr>\n        <td>50원</td>\n        <td class="coin-count" data-coin-value="50">').concat(t[50],'개</td>\n      </tr>\n      <tr>\n        <td>10원</td>\n        <td class="coin-count" data-coin-value="10">').concat(t[10],"개</td>\n      </tr>\n    </table>\n")),this.coinRechargeTabButton),this.cashChargeForm=h("#cash-charge-form",this.tabContent),this.cashChargeInput=h(".cash-charge-input",this.cashChargeForm),this.chargedAmountText=h("#charged-amount",this.tabContent),this.coinCountList=g(".coin-count",this.tabContent),this.cashChargeForm.addEventListener("submit",bn(this,hn)),this.cashChargeInput.focus()}}])&&sn(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),a}(C);var En="빈칸 없이 모두 입력해주세요.",yn="가격과 수량은 숫자로 입력해주세요.",Bn="상품명은 최대 10글자까지 가능합니다.",xn="이미 등록된 상품입니다. 같은 이름의 상품은 중복 등록할 수 없습니다.",wn="상품 가격은 100원 이상, 10,000원 이하여야 합니다.",kn="상품 가격은 10원으로 나누어 떨어져야 합니다.",Tn="상품 수량은 최소 1개부터 최대 20개까지 넣을 수 있습니다.",In="숫자를 입력해주세요.",Mn="충전할 금액은 10원 이상이여야 합니다.",Sn="보유할 수 있는 최소 금액은 0원, 최대 금액은 100,000원입니다.",jn="잔돈은 10원으로 나누어 떨어져야 합니다.",Ln=function(n,t,e){if(e||2===arguments.length)for(var o,r=0,i=t.length;r<i;r++)!o&&r in t||(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return n.concat(o||Array.prototype.slice.call(t))};const Nn=function(){function n(){this._itemList=[]}return Object.defineProperty(n.prototype,"itemList",{get:function(){return this._itemList},enumerable:!1,configurable:!0}),n.prototype.addItem=function(n){return this._itemList=Ln(Ln([],this._itemList,!0),[n],!1),n},n.prototype.deleteItem=function(n){this._itemList=this._itemList.filter((function(t){return t.itemName!==n}))},n.prototype.editItem=function(n,t){this._itemList[t]=n},n.prototype.validateItemInput=function(n,t,e){void 0===t&&(t=0),void 0===e&&(e=!0),[{testCase:this.isBlank,errorMessage:En},{testCase:this.isNotNumberType,errorMessage:yn},{testCase:this.isExceedMaxNameLength,errorMessage:Bn},{testCase:this.isAlreadyExist.bind(this),errorMessage:xn},{testCase:this.isExceedPriceRange,errorMessage:wn},{testCase:this.isNotDividedByPriceUnit,errorMessage:kn},{testCase:this.isExceedQuantityRange,errorMessage:Tn}].every((function(o){var r=o.testCase,i=o.errorMessage;if(r({itemInfo:n,itemIndex:t,isAddMode:e}))throw new Error(i);return!0}))},n.prototype.isBlank=function(n){return 0===n.itemInfo.itemName.length},n.prototype.isNotNumberType=function(n){var t=n.itemInfo,e=t.itemPrice,o=t.itemQuantity;return isNaN(e)||isNaN(o)},n.prototype.isExceedMaxNameLength=function(n){return n.itemInfo.itemName.length>10},n.prototype.isAlreadyExist=function(n){var t=n.itemInfo.itemName,e=n.itemIndex,o=n.isAddMode,r=this._itemList.some((function(n){return n.itemName===t}));return(o||this._itemList[e].itemName!==t)&&r},n.prototype.isExceedPriceRange=function(n){var t=n.itemInfo.itemPrice;return t<100||t>1e4},n.prototype.isNotDividedByPriceUnit=function(n){return n.itemInfo.itemPrice%10!=0},n.prototype.isExceedQuantityRange=function(n){var t=n.itemInfo.itemQuantity;return t<1||t>20},n}(),Rn=function(){function n(){var n;this._coinCollection=((n={})[500]=0,n[100]=0,n[50]=0,n[10]=0,n)}return Object.defineProperty(n.prototype,"coinCollection",{get:function(){return this._coinCollection},enumerable:!1,configurable:!0}),n.prototype.chargeCoin=function(n){for(var t=[500,b,50,10],e=n;0!==e;){if(50>e){this._coinCollection[10]+=e/10;break}b>e&&e>=50&&(t=[50,10]),500>e&&e>=b&&(t=[b,50,10]);var o=t[Math.floor(Math.random()*t.length)];this._coinCollection[o]++,e-=o}return this.calculateTotalCoinAmount()},n.prototype.calculateTotalCoinAmount=function(){return Object.entries(this._coinCollection).reduce((function(n,t){var e=t[0],o=t[1];return n+Number(e)*o}),0)},n.prototype.validateCashInput=function(n){[{testCase:this.isNotNumberTypeCash,errorMessage:In},{testCase:this.isLowerThanMinRange,errorMessage:Mn},{testCase:this.isExceedTotalAmountRange.bind(this),errorMessage:Sn},{testCase:this.isNotDividedByUnitCash,errorMessage:jn}].every((function(t){var e=t.testCase,o=t.errorMessage;if(e(n))throw new Error(o);return!0}))},n.prototype.isNotNumberTypeCash=function(n){return isNaN(n)},n.prototype.isLowerThanMinRange=function(n){return n<10},n.prototype.isExceedTotalAmountRange=function(n){return n>1e5-this.calculateTotalCoinAmount()},n.prototype.isNotDividedByUnitCash=function(n){return n%10!=0},n}();var On,Dn,Pn,_n;const Zn=(On=new Nn,Dn=new Rn,Pn=new an(On),_n=new Cn(Dn),function(){switch(location.hash){case"":case"#item-manage":Pn.renderInitialItemManageTabState();break;case"#coin-recharge":_n.renderInitialCoinRechargeTabState()}});addEventListener("DOMContentLoaded",(function(){Zn()})),addEventListener("popstate",(function(){Zn()}))})()})();
//# sourceMappingURL=bundle.js.map