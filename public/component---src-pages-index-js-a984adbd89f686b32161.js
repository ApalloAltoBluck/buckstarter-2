"use strict";(self.webpackChunk_r_ichard_gatsby_starter_bootstrap_5=self.webpackChunk_r_ichard_gatsby_starter_bootstrap_5||[]).push([[678],{2492:function(e,t,a){a.r(t),a.d(t,{default:function(){return E}});var n=a(5444),r=a(6125),c=a(7294),s=a(8826),i=a.n(s),l=a(4832),o={_origin:"https://api.emailjs.com"},m=function(e,t,a){if(!e)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!a)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};var d=function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.status=t.status,this.text=t.responseText},u=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise((function(n,r){var c=new XMLHttpRequest;c.addEventListener("load",(function(e){var t=e.target,a=new d(t);200===a.status||"OK"===a.text?n(a):r(a)})),c.addEventListener("error",(function(e){var t=e.target;r(new d(t))})),c.open("POST",o._origin+e,!0),Object.keys(a).forEach((function(e){c.setRequestHeader(e,a[e])})),c.send(t)}))},g=function(e,t,a,n){var r=n||o._userID;m(r,e,t);var c={lib_version:"3.2.0",user_id:r,service_id:e,template_id:t,template_params:a};return u("/api/v1.0/email/send",JSON.stringify(c),{"Content-type":"application/json"})};var p=function(){var e=(0,c.useState)({from_name:"",to_name:"Buckstarter",message:"",reply_to:""}),t=e[0],a=e[1],n=function(e){var n;a(Object.assign({},t,((n={})[e.target.name]=e.target.value,n)))};return c.createElement("div",{className:"contact"},c.createElement("form",{onSubmit:function(e){e.preventDefault(),g("service_cbpfuru","template_af1g3od",t,"user_CbLWqlZiNA0paGpLlwoNa").then((function(e){console.log("SUCCESS!",e.status,e.text)})).catch((function(e){console.log("FAILED...",e)}))}},c.createElement("p",null,"Your Email"),c.createElement("input",{type:"text",id:"email",name:"reply_to",placeholder:"name@example.com",value:t.reply_to,onChange:n}),c.createElement("br",null),c.createElement("p",null,"your Company"),c.createElement("input",{type:"text",id:"from",name:"from_name",placeholder:" ",value:t.from_name,onChange:n}),c.createElement("br",null),c.createElement("p",null,"Message"),c.createElement("input",{type:"text",id:"message",name:"message",placeholder:" ",value:t.message,onChange:n}),c.createElement("br",null),c.createElement("button",{type:"submit"},"Submit")))},f=a(3751);var E=function(){return c.createElement(l.Z,null,c.createElement(f.Z,{title:"Home"}),c.createElement("section",{className:"py-5 text-center container"},c.createElement(i(),{licenseKey:"YOUR_KEY_HERE",scrollingSpeed:1e3,render:function(e){e.state,e.fullpageApi;return c.createElement(i().Wrapper,null,c.createElement("div",{className:"section"},c.createElement("div",{className:"page"},c.createElement("p",null,c.createElement("b",null,"Buckstarter helps get brands moving. We give businesses stronger points-of-view and bigger presences in the marketplace, so they become more effective. We deliver deep branding experience in a more efficient operating model we call a “branding studio” rather than an “advertising agency”.")),c.createElement("button",null,"Sizzle Reel"))),c.createElement("div",{className:"section"},c.createElement("div",{className:"page"},c.createElement("h2",null,"We organize around your needs."),c.createElement("div",{className:"brandingimages"},c.createElement("figure",null,c.createElement("img",{src:"../images/innovation.png",alt:"Buckstarter innovation"}),c.createElement("figcaption",null,"Strategy, Design, Architecture, Purpose")),c.createElement("figure",null,c.createElement("img",{src:"../images/branding.png",alt:"Buckstarter branding"}),c.createElement("figcaption",null,"Content production: digital, video, print, ultra-efficent")),c.createElement("figure",null,c.createElement("img",{src:"../images/production.png",alt:"Buckstarter production"}),c.createElement("figcaption",null,"Brand narrative, advertising content"))))),c.createElement("div",{className:"section"},c.createElement("div",{className:"page"},c.createElement("h2",null,'We operate as a "hive"'),c.createElement("p",null,'As a branding studio, we relentlessly focus on the end- product: the quality of the output. We cherry-pick the best designers, strategists, creative directors, media planners or buyers, producers, or directors needed to get the job done well. We "swarm" just the right talent around the brand. And we work fast, with little to no waste.'))),c.createElement("div",{className:"section"},c.createElement("div",{className:"page"},c.createElement("div",{className:"thework"},c.createElement("h2",null,"The Work"),c.createElement("p",null,"Why should a brand exist? What purpose does it serve? Where is its heat? This is a craft of careful identification and distillation. Our work shares three common principles:")),c.createElement("h3",null,"Simplicity, Clarity, Allure."),c.createElement("div",{className:"clients"},c.createElement("div",{className:"row"},c.createElement("img",{src:"../images/bnc.jpeg",alt:"Black News Channel"}),c.createElement("img",{src:"../images/siggi.jpeg",alt:"Siggi's"}),c.createElement("img",{src:"../images/naturlich.png",alt:"Naturlich yogurt"})),c.createElement("div",{className:"row"},c.createElement("img",{src:"../images/dagostino",alt:"D'agostino Law PLLC"}),c.createElement("img",{src:"../images/upcycle.png",alt:"upcycle"}),c.createElement("img",{src:"../images/internationalCopper.png",alt:"International Copper"})),c.createElement("div",{className:"row"},c.createElement("img",{src:"../images/miamiDadeCounty.jpeg",alt:"Miami Dade County"}),c.createElement("img",{src:"../images/crowdster.jpeg",alt:"Crowdster"}),c.createElement("img",{src:"../images/waterGarden.png",alt:"Water Garden"}))),c.createElement("button",null,"Case Studies"))),c.createElement("div",{className:"section"},c.createElement("div",{className:"page"},c.createElement("div",{className:"meet-scott"},c.createElement("h2",null,"Meet Scott"),c.createElement("img",{src:"../images/scott.jpeg",alt:"Scott"}),c.createElement("p",null,"Founder of Bluckstarter LLC"),c.createElement("img",{src:"../images/linkedin.png",alt:"Linkedin"})))),c.createElement("div",{className:"section"},c.createElement("div",{className:"page"},c.createElement("h2",null,"Get in contact"),c.createElement("p",null,"Thanks for visiting. We'd love to hear from you. Better yet, we'd love to work with you. Use the form below and we will quickly get back to you. Let's get started!"),c.createElement(p,null))))}}),c.createElement("div",{className:"row py-lg-5"},c.createElement("div",{className:"col-lg-6 col-md-8 mx-auto"},c.createElement("h1",{className:"fw-light"},"Hello world ! "),c.createElement("p",{className:"lead text-muted"}," Welcome to this Boostrap 5 Gatsby Starter"),c.createElement("div",{id:"fullpage"},c.createElement("div",{class:"section"},"Some section"),c.createElement("div",{class:"section"},"Some section"),c.createElement("div",{class:"section"},"Some section"),c.createElement("div",{class:"section"},"Some section")),c.createElement(r.S,{src:"../images/gatsby-astronaut.png",width:300,quality:95,formats:["AUTO","WEBP"],alt:"A Gatsby astronaut",className:"img-fluid",__imageData:a(5657)}))),c.createElement("div",{className:"row"},c.createElement(n.Link,{to:"/about/",className:"btn btn-primary my-2"},"About"),c.createElement(n.Link,{to:"/page-2/",className:"btn btn-secondary my-2"},"Go to page 2"))))}},5657:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/6d91c86c0fde632ba4cd01062fd9ccfa/c0d5f/gatsby-astronaut.png","srcSet":"/static/6d91c86c0fde632ba4cd01062fd9ccfa/1096c/gatsby-astronaut.png 75w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/01986/gatsby-astronaut.png 150w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/c0d5f/gatsby-astronaut.png 300w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/b5463/gatsby-astronaut.png 600w","sizes":"(min-width: 300px) 300px, 100vw"},"sources":[{"srcSet":"/static/6d91c86c0fde632ba4cd01062fd9ccfa/a18cc/gatsby-astronaut.webp 75w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/7ddcc/gatsby-astronaut.webp 150w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/dd79f/gatsby-astronaut.webp 300w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/11f71/gatsby-astronaut.webp 600w","type":"image/webp","sizes":"(min-width: 300px) 300px, 100vw"}]},"width":300,"height":300}')}}]);
//# sourceMappingURL=component---src-pages-index-js-a984adbd89f686b32161.js.map