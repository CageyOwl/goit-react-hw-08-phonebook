"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[732],{8732:function(t,n,a){a.r(n),a.d(n,{default:function(){return M}});var e=a(4942),c=a(1413),r=a(9439),o=a(2791),s=a(9434),i=a(6052),l="contactForm_adding-form__h8f+a",u="contactForm_adding-form__label__Agjsu",d="contactForm_adding-form__input__yvL0b",m="contactForm_adding-form__button__YWdZg",_="contactForm_adding-form__field-container__sBXmV",f=a(3329);function h(){var t=(0,o.useState)({name:"",number:""}),n=(0,r.Z)(t,2),a=n[0],h=n[1],b=(0,s.I0)(),p=function(t){var n=t.target,a=n.name,r=n.value;h((function(t){return(0,c.Z)((0,c.Z)({},t),{},(0,e.Z)({},a,r))}))};return(0,f.jsxs)("form",{className:l,onSubmit:function(t){t.preventDefault(),b((0,i.uK)(a)),h({name:"",number:""})},children:[(0,f.jsxs)("div",{className:_,children:[(0,f.jsx)("label",{className:u,htmlFor:"name",children:"Name"}),(0,f.jsx)("input",{className:d,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:a.name,onChange:p})]}),(0,f.jsxs)("div",{className:_,children:[(0,f.jsx)("label",{className:u,htmlFor:"number",children:"Phone"}),(0,f.jsx)("input",{className:d,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:a.number,onChange:p})]}),(0,f.jsx)("button",{className:m,type:"submit",children:"Add contact"})]})}var b=a(1634),p="filter_filter-container__+veDX",v="filter_filter__label__hM98R",x="filter_filter__input__WCXD2";function j(){var t=(0,s.I0)();return(0,f.jsxs)("div",{className:p,children:[(0,f.jsx)("label",{className:v,htmlFor:"filter",children:"Find contacts by name"}),(0,f.jsx)("input",{className:x,type:"text",name:"filter",onChange:function(n){t((0,b.M)(n.target.value.trim()))}})]})}var g=a(1438),N=function(t){return t.filter},C=a(1087);function F(){return"#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}var y={"contacts-list":"contactsList_contacts-list__bqw2g","contact-container":"contactsList_contact-container__jZQ6M","contact-name":"contactsList_contact-name__4iMR5","contact-phone":"contactsList_contact-phone__c6bEe","contact-actions":"contactsList_contact-actions__JZseO","contact-actions__button":"contactsList_contact-actions__button__HpHSD"};function Z(t){var n=t.id,a=t.name,e=t.number;return(0,f.jsxs)("li",{className:y["contact-container"],style:{backgroundColor:F()},children:[(0,f.jsxs)("div",{className:y["contact-data"],children:[(0,f.jsx)("div",{className:y["contact-name"],children:a}),(0,f.jsx)("a",{className:y["contact-phone"],href:"tel:".concat(e),style:{color:F()},children:e})]}),(0,f.jsxs)("div",{className:y["contact-actions"],children:[(0,f.jsx)(C.rU,{to:"/edit-contact/".concat(n),className:y["contact-actions__button"],children:"Change"}),(0,f.jsx)("button",{className:y["contact-actions__button"],name:"delete",id:n,children:"Delete"})]})]})}var w=a(4691),A="loaderWrapper_wrapper__WDz6B";function L(){return(0,f.jsx)(w.fe,{visible:!0,ariaLabel:"dna-loading",wrapperClass:A})}function k(){var t=(0,s.I0)(),n=(0,s.v9)(g.Gd),a=(0,s.v9)(g.Uv),e=(0,s.v9)(g.Af),c=(0,s.v9)(N),r=c?e.filter((function(t){return t.name.match(new RegExp(c,"gi"))})):e;return(0,o.useEffect)((function(){t((0,i.K2)())}),[t]),(0,f.jsxs)(f.Fragment,{children:[n&&!a?(0,f.jsx)(L,{}):(0,f.jsx)("ul",{className:y["contacts-list"],onClick:function(n){"delete"===n.target.name&&t((0,i.zY)(n.target.id))},children:r.map((function(t){return(0,f.jsx)(Z,{id:t.id,name:t.name,number:t.number},t.id)}))}),a&&"Error: ".concat(a)]})}function M(){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(h,{}),(0,f.jsx)(j,{}),(0,f.jsx)(k,{})]})}},1438:function(t,n,a){a.d(n,{Af:function(){return e},Gd:function(){return c},Uv:function(){return r}});var e=function(t){return t.contacts.items},c=function(t){return t.contacts.areLoading},r=function(t){return t.contacts.error}}}]);
//# sourceMappingURL=732.4d5949c0.chunk.js.map