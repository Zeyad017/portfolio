(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7627],{7942:function(e,s,i){"use strict";var n=i(63038);s.default=void 0;var a,l=(a=i(67294))&&a.__esModule?a:{default:a},r=i(64957),c=i(69898),t=i(90639);var d={};function o(e,s,i,n){if(e&&r.isLocalURL(s)){e.prefetch(s,i,n).catch((function(e){0}));var a=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;d[s+"%"+i+(a?"%"+a:"")]=!0}}var h=function(e){var s,i=!1!==e.prefetch,a=c.useRouter(),h=l.default.useMemo((function(){var s=r.resolveHref(a,e.href,!0),i=n(s,2),l=i[0],c=i[1];return{href:l,as:e.as?r.resolveHref(a,e.as):c||l}}),[a,e.href,e.as]),m=h.href,x=h.as,f=e.children,j=e.replace,u=e.shallow,g=e.scroll,v=e.locale;"string"===typeof f&&(f=l.default.createElement("a",null,f));var p=(s=l.default.Children.only(f))&&"object"===typeof s&&s.ref,w=t.useIntersection({rootMargin:"200px"}),N=n(w,2),b=N[0],y=N[1],k=l.default.useCallback((function(e){b(e),p&&("function"===typeof p?p(e):"object"===typeof p&&(p.current=e))}),[p,b]);l.default.useEffect((function(){var e=y&&i&&r.isLocalURL(m),s="undefined"!==typeof v?v:a&&a.locale,n=d[m+"%"+x+(s?"%"+s:"")];e&&!n&&o(a,m,x,{locale:s})}),[x,m,y,v,i,a]);var P={ref:k,onClick:function(e){s.props&&"function"===typeof s.props.onClick&&s.props.onClick(e),e.defaultPrevented||function(e,s,i,n,a,l,c,t){("A"!==e.currentTarget.nodeName||!function(e){var s=e.currentTarget.target;return s&&"_self"!==s||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&r.isLocalURL(i))&&(e.preventDefault(),null==c&&n.indexOf("#")>=0&&(c=!1),s[a?"replace":"push"](i,n,{shallow:l,locale:t,scroll:c}))}(e,a,m,x,j,u,g,v)},onMouseEnter:function(e){r.isLocalURL(m)&&(s.props&&"function"===typeof s.props.onMouseEnter&&s.props.onMouseEnter(e),o(a,m,x,{priority:!0}))}};if(e.passHref||"a"===s.type&&!("href"in s.props)){var I="undefined"!==typeof v?v:a&&a.locale,C=a&&a.isLocaleDomain&&r.getDomainLocale(x,I,a&&a.locales,a&&a.domainLocales);P.href=C||r.addBasePath(r.addLocale(x,I,a&&a.defaultLocale))}return l.default.cloneElement(s,P)};s.default=h},90639:function(e,s,i){"use strict";var n=i(63038);Object.defineProperty(s,"__esModule",{value:!0}),s.useIntersection=function(e){var s=e.rootMargin,i=e.disabled||!r,t=a.useRef(),d=a.useState(!1),o=n(d,2),h=o[0],m=o[1],x=a.useCallback((function(e){t.current&&(t.current(),t.current=void 0),i||h||e&&e.tagName&&(t.current=function(e,s,i){var n=function(e){var s=e.rootMargin||"",i=c.get(s);if(i)return i;var n=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var s=n.get(e.target),i=e.isIntersecting||e.intersectionRatio>0;s&&i&&s(i)}))}),e);return c.set(s,i={id:s,observer:a,elements:n}),i}(i),a=n.id,l=n.observer,r=n.elements;return r.set(e,s),l.observe(e),function(){r.delete(e),l.unobserve(e),0===r.size&&(l.disconnect(),c.delete(a))}}(e,(function(e){return e&&m(e)}),{rootMargin:s}))}),[i,s,h]);return a.useEffect((function(){if(!r&&!h){var e=l.requestIdleCallback((function(){return m(!0)}));return function(){return l.cancelIdleCallback(e)}}}),[h]),[x,h]};var a=i(67294),l=i(26286),r="undefined"!==typeof IntersectionObserver;var c=new Map},5032:function(e,s){"use strict";s.Z=function(){var e,s=document.querySelectorAll(".gallery");s.length>=1&&s.forEach((function(s){e=new Isotope(s,{itemSelector:".items"})}));var i=document.querySelectorAll(".gallery-mons");i.length>=1&&i.forEach((function(s){e=new Isotope(s,{itemSelector:".items",masonry:{columnWidth:".width2"}})}));var n=document.querySelector(".filtering");if(n){var a=function(e){e.addEventListener("click",(function(s){matchesSelector(s.target,"span")&&(e.querySelector(".active").classList.remove("active"),s.target.classList.add("active"))}))};n.addEventListener("click",(function(s){if(matchesSelector(s.target,"span")){var i=s.target.getAttribute("data-filter");i=i,e.arrange({filter:i})}}));for(var l=document.querySelectorAll(".filtering"),r=0,c=l.length;r<c;r++){a(l[r])}}}},72786:function(e,s,i){"use strict";i(67294);var n=i(51514),a=i(41664),l=i(85893);s.Z=function(e){var s=e.img;return(0,l.jsx)("section",{className:"call-action section-padding sub-bg bg-img",style:{backgroundImage:"url(".concat(s||"/img/patrn.svg",")")},children:(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)("div",{className:"row",children:[(0,l.jsx)("div",{className:"col-md-8 col-lg-9",children:(0,l.jsx)("div",{className:"content sm-mb30",children:(0,l.jsxs)(n.Z,{children:[(0,l.jsx)("h6",{className:"wow words chars splitting","data-splitting":!0,children:"Let\u2019s Talk"}),(0,l.jsxs)("h2",{className:"wow words chars splitting","data-splitting":!0,children:["about your ",(0,l.jsx)("br",{})," ",(0,l.jsx)("b",{className:"back-color",children:"next project"}),"."]})]})})}),(0,l.jsx)("div",{className:"col-md-4 col-lg-3 valign",children:(0,l.jsx)(a.default,{href:"/contact/contact-dark",children:(0,l.jsx)("a",{className:"butn bord curve wow fadeInUp","data-wow-delay":".5s",children:(0,l.jsx)("span",{children:"Get In Touch"})})})})]})})})}},1375:function(e,s,i){"use strict";i(67294);var n=i(41664),a=i(85893);s.Z=function(e){var s=e.sliderRef;return(0,a.jsxs)("header",{ref:s,className:"slider-st valign position-re",children:[(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"col-lg-6 valign",children:(0,a.jsxs)("div",{className:"cont md-mb50",children:[(0,a.jsx)("div",{className:"sub-title mb-5",children:(0,a.jsx)("h6",{children:"Digital Consulting Agency"})}),(0,a.jsx)("h1",{className:"mb-10 fw-600",children:"Unique Business Consulting."}),(0,a.jsx)("p",{children:"We help our clients succeed by creating brand identities, digital experiences, and print materials."}),(0,a.jsx)(n.default,{href:"/about/about-dark",children:(0,a.jsx)("a",{className:"butn bord curve mt-30",children:(0,a.jsx)("span",{children:"About Us"})})})]})}),(0,a.jsx)("div",{className:"col-lg-6",children:(0,a.jsx)("div",{className:"img",children:(0,a.jsx)("img",{src:"/img/slid/001.jpg",alt:""})})})]})}),(0,a.jsx)("div",{className:"line bottom left"})]})}},21480:function(e,s,i){"use strict";var n=i(67294),a=i(41664),l=i(5032),r=i(85893);s.Z=function(e){var s=e.grid,i=e.filterPosition;return n.useEffect((function(){setTimeout((function(){(0,l.Z)()}),1e3)}),[]),(0,r.jsxs)("section",{className:"portfolio section-padding pb-70",children:[(0,r.jsx)("div",{className:"container",children:(0,r.jsx)("div",{className:"row justify-content-center",children:(0,r.jsx)("div",{className:"col-lg-8 col-md-10",children:(0,r.jsxs)("div",{className:"sec-head text-center",children:[(0,r.jsx)("h6",{className:"wow fadeIn","data-wow-delay":".5s",children:"Portfolio"}),(0,r.jsxs)("h3",{className:"wow color-font",children:["Our Recent Web Design & ",(0,r.jsx)("br",{})," Some Past Projects."]})]})})})}),(0,r.jsx)("div",{className:"".concat(3===s?"container-fluid":"container"),children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"filtering ".concat("center"===i?"text-center":"left"===i?"text-left":"text-right"," col-12"),children:(0,r.jsxs)("div",{className:"filter",children:[(0,r.jsx)("span",{"data-filter":"*",className:"active",children:"All"}),(0,r.jsx)("span",{"data-filter":".brand",children:"Branding"}),(0,r.jsx)("span",{"data-filter":".web",children:"Mobile App"}),(0,r.jsx)("span",{"data-filter":".graphic",children:"Creative"})]})}),(0,r.jsxs)("div",{className:"gallery full-width",children:[(0,r.jsxs)("div",{className:"".concat(3===s?"col-lg-4 col-md-6":2===s?"col-md-6 lg-mr":"col-12"," items graphic wow fadeInUp"),"data-wow-delay":".4s",children:[(0,r.jsx)("div",{className:"item-img",children:(0,r.jsx)(a.default,{href:"/project-details2/project-details2-dark",children:(0,r.jsxs)("a",{className:"imago wow",children:[(0,r.jsx)("img",{src:"/img/portfolio/portfolio/1/1.jpg",alt:"image"}),(0,r.jsx)("div",{className:"item-img-overlay"})]})})}),(0,r.jsxs)("div",{className:"cont",children:[(0,r.jsx)("h6",{children:"Creativity Demand"}),(0,r.jsxs)("span",{children:[(0,r.jsx)(a.default,{href:"/works/works-dark",children:"Design"}),", ",(0,r.jsx)(a.default,{href:"/works/works-dark",children:"WordPress"})]})]})]}),(0,r.jsxs)("div",{className:"".concat(3===s?"col-lg-4 col-md-6":2===s?"col-md-6":"col-12"," items web wow fadeInUp"),"data-wow-delay":".4s",children:[(0,r.jsx)("div",{className:"item-img",children:(0,r.jsx)(a.default,{href:"/project-details2/project-details2-dark",children:(0,r.jsxs)("a",{className:"imago wow",children:[(0,r.jsx)("img",{src:"/img/portfolio/portfolio/1/2.jpg",alt:"image"}),(0,r.jsx)("div",{className:"item-img-overlay"})]})})}),(0,r.jsxs)("div",{className:"cont",children:[(0,r.jsx)("h6",{children:"Through The Breaking"}),(0,r.jsxs)("span",{children:[(0,r.jsx)("a",{href:"#0",children:"Design"}),", ",(0,r.jsx)("a",{href:"#0",children:"WordPress"})]})]})]}),(0,r.jsxs)("div",{className:"".concat(3===s?"col-lg-4 col-md-6":2===s?"col-md-6":"col-12"," items brand wow fadeInUp"),"data-wow-delay":".4s",children:[(0,r.jsx)("div",{className:"item-img",children:(0,r.jsx)(a.default,{href:"/project-details2/project-details2-dark",children:(0,r.jsxs)("a",{className:"imago wow",children:[(0,r.jsx)("img",{src:"/img/portfolio/portfolio/1/3.jpg",alt:"image"}),(0,r.jsx)("div",{className:"item-img-overlay"})]})})}),(0,r.jsxs)("div",{className:"cont",children:[(0,r.jsx)("h6",{children:"Create With Creatives"}),(0,r.jsxs)("span",{children:[(0,r.jsx)("a",{href:"#0",children:"Design"}),", ",(0,r.jsx)("a",{href:"#0",children:"WordPress"})]})]})]}),(0,r.jsxs)("div",{className:"".concat(3===s?"col-lg-4 col-md-6":2===s?"col-md-6":"col-12"," items graphic wow fadeInUp"),"data-wow-delay":".4s",children:[(0,r.jsx)("div",{className:"item-img",children:(0,r.jsx)(a.default,{href:"/project-details2/project-details2-dark",children:(0,r.jsxs)("a",{className:"imago wow",children:[(0,r.jsx)("img",{src:"/img/portfolio/portfolio/1/4.jpg",alt:"image"}),(0,r.jsx)("div",{className:"item-img-overlay"})]})})}),(0,r.jsxs)("div",{className:"cont",children:[(0,r.jsx)("h6",{children:"Energies of Love"}),(0,r.jsxs)("span",{children:[(0,r.jsx)("a",{href:"#0",children:"Design"}),", ",(0,r.jsx)("a",{href:"#0",children:"WordPress"})]})]})]}),(0,r.jsxs)("div",{className:"".concat(3===s?"col-lg-4 col-md-6":2===s?"col-md-6":"col-12"," items web wow fadeInUp"),"data-wow-delay":".4s",children:[(0,r.jsx)("div",{className:"item-img",children:(0,r.jsx)(a.default,{href:"/project-details2/project-details2-dark",children:(0,r.jsxs)("a",{className:"imago wow",children:[(0,r.jsx)("img",{src:"/img/portfolio/portfolio/1/5.jpg",alt:"image"}),(0,r.jsx)("div",{className:"item-img-overlay"})]})})}),(0,r.jsxs)("div",{className:"cont",children:[(0,r.jsx)("h6",{children:"See It Yourself"}),(0,r.jsxs)("span",{children:[(0,r.jsx)("a",{href:"#0",children:"Design"}),", ",(0,r.jsx)("a",{href:"#0",children:"WordPress"})]})]})]}),(0,r.jsxs)("div",{className:"".concat(3===s?"col-lg-4 col-md-6":2===s?"col-md-6":"col-12"," items brand wow fadeInUp"),"data-wow-delay":".4s",children:[(0,r.jsx)("div",{className:"item-img",children:(0,r.jsx)(a.default,{href:"/project-details2/project-details2-dark",children:(0,r.jsxs)("a",{className:"imago wow",children:[(0,r.jsx)("img",{src:"/img/portfolio/portfolio/1/6.jpg",alt:"image"}),(0,r.jsx)("div",{className:"item-img-overlay"})]})})}),(0,r.jsxs)("div",{className:"cont",children:[(0,r.jsx)("h6",{children:"Blast From The Past"}),(0,r.jsxs)("span",{children:[(0,r.jsx)("a",{href:"#0",children:"Design"}),", ",(0,r.jsx)("a",{href:"#0",children:"WordPress"})]})]})]})]})]})})]})}},37509:function(e,s,i){"use strict";i(67294);var n=i(13473),a=i(85893);s.Z=function(e){var s=e.style,i=e.lines;return(0,a.jsxs)("section",{className:"services bords section-padding ".concat("4item"===s?"lficon":i?"":"pt-0"),children:[(0,a.jsxs)("div",{className:"container",children:[(0,a.jsx)("div",{className:"row justify-content-center",children:(0,a.jsx)("div",{className:"col-lg-8 col-md-10",children:(0,a.jsxs)("div",{className:"sec-head  text-center",children:[(0,a.jsx)("h6",{className:"wow fadeIn","data-wow-delay":".5s",children:"Best Features"}),(0,a.jsx)("h3",{className:"wow color-font",children:"We are a new digital product development agency"})]})})}),(0,a.jsx)("div",{className:"row",children:"4item"===s?n.map((function(e){return(0,a.jsx)("div",{className:"col-lg-6 wow fadeInLeft","data-wow-delay":"".concat(1==e.id?".5":2===e.id?".7":3===e.id?".9":"1.1","s"),children:(0,a.jsxs)("div",{className:"item-box",children:[(0,a.jsx)("div",{children:(0,a.jsx)("span",{className:"icon ".concat(e.icon)})}),(0,a.jsxs)("div",{className:"cont",children:[(0,a.jsx)("h6",{children:e.title}),(0,a.jsx)("p",{children:e.content})]})]})},e.id)})):n.slice(0,3).map((function(e){return(0,a.jsx)("div",{className:"col-lg-4 wow fadeInLeft","data-wow-delay":".5s",children:(0,a.jsxs)("div",{className:"item-box md-mb50",children:[(0,a.jsx)("span",{className:"icon ".concat(e.icon)}),(0,a.jsx)("h6",{children:e.title}),(0,a.jsx)("p",{children:e.content})]})},e.id)}))})]}),i?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"line top left"}),(0,a.jsx)("div",{className:"line bottom right"})]}):null]})}},51514:function(e,s,i){"use strict";var n=i(15671),a=i(43144),l=i(97326),r=i(32531),c=i(20245),t=i(61120),d=i(4942),o=i(67294),h=i(85893);function m(e){var s=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var i,n=(0,t.Z)(e);if(s){var a=(0,t.Z)(this).constructor;i=Reflect.construct(n,arguments,a)}else i=n.apply(this,arguments);return(0,c.Z)(this,i)}}var x=function(e){(0,r.Z)(i,e);var s=m(i);function i(){var e;(0,n.Z)(this,i);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return e=s.call.apply(s,[this].concat(r)),(0,d.Z)((0,l.Z)(e),"target",o.createRef()),(0,d.Z)((0,l.Z)(e),"split",(function(){e.target.current&&Splitting({target:e.target.current})})),(0,d.Z)((0,l.Z)(e),"componentDidMount",e.split),(0,d.Z)((0,l.Z)(e),"componentDidUpdate",e.split),e}return(0,a.Z)(i,[{key:"render",value:function(){return(0,h.jsx)("div",{ref:this.target,children:this.props.children})}}]),i}(o.Component);s.Z=x},94899:function(e,s,i){"use strict";i(67294);var n=i(85893);s.Z=function(){return(0,n.jsxs)("section",{className:"team section-padding",children:[(0,n.jsx)("div",{className:"container",children:(0,n.jsx)("div",{className:"row justify-content-center",children:(0,n.jsx)("div",{className:"col-lg-8 col-md-10",children:(0,n.jsxs)("div",{className:"sec-head text-center",children:[(0,n.jsx)("h6",{className:"wow fadeIn","data-wow-delay":".5s",children:"Our Team"}),(0,n.jsx)("h3",{className:"wow color-font",children:"An original team of creators designers & dreamers."})]})})})}),(0,n.jsx)("div",{className:"container-fluid",children:(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{className:"col-lg-3 col-md-6",children:(0,n.jsx)("div",{className:"item cir md-mb50",children:(0,n.jsxs)("div",{className:"img",children:[(0,n.jsx)("img",{src:"/img/team/1.jpg",alt:""}),(0,n.jsx)("div",{id:"circle1",children:(0,n.jsxs)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"300px",height:"300px",viewBox:"0 0 300 300",enableBackground:"new 0 0 300 300",xmlSpace:"preserve",children:[(0,n.jsx)("defs",{children:(0,n.jsx)("path",{id:"circlePath1",d:" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "})}),(0,n.jsx)("circle",{cx:"150",cy:"100",r:"75",fill:"none"}),(0,n.jsxs)("g",{children:[(0,n.jsx)("use",{xlinkHref:"#circlePath1",fill:"none"}),(0,n.jsx)("text",{fill:"#fff",children:(0,n.jsx)("textPath",{xlinkHref:"#circlePath1",children:"CEO Manager CEO Manager CEO Manager"})})]})]})}),(0,n.jsxs)("div",{className:"info",children:[(0,n.jsx)("h6",{children:"Ryan Hicks"}),(0,n.jsx)("span",{children:"Client Manager"})]})]})})}),(0,n.jsx)("div",{className:"col-lg-3 col-md-6",children:(0,n.jsx)("div",{className:"item cir md-mb50",children:(0,n.jsxs)("div",{className:"img",children:[(0,n.jsx)("img",{src:"/img/team/2.jpg",alt:""}),(0,n.jsx)("div",{id:"circle2",children:(0,n.jsxs)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"300px",height:"300px",viewBox:"0 0 300 300",enableBackground:"new 0 0 300 300",xmlSpace:"preserve",children:[(0,n.jsx)("defs",{children:(0,n.jsx)("path",{id:"circlePath2",d:" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "})}),(0,n.jsx)("circle",{cx:"150",cy:"100",r:"75",fill:"none"}),(0,n.jsxs)("g",{children:[(0,n.jsx)("use",{xlinkHref:"#circlePath2",fill:"none"}),(0,n.jsx)("text",{fill:"#fff",children:(0,n.jsx)("textPath",{xlinkHref:"#circlePath2",children:"Interior Designer Interior Designer Interior Designer"})})]})]})}),(0,n.jsxs)("div",{className:"info",children:[(0,n.jsx)("h6",{children:"Ryan Hicks"}),(0,n.jsx)("span",{children:"Client Manager"})]})]})})}),(0,n.jsx)("div",{className:"col-lg-3 col-md-6",children:(0,n.jsx)("div",{className:"item cir sm-mb50",children:(0,n.jsxs)("div",{className:"img",children:[(0,n.jsx)("img",{src:"/img/team/3.jpg",alt:""}),(0,n.jsx)("div",{id:"circle3",children:(0,n.jsxs)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"300px",height:"300px",viewBox:"0 0 300 300",enableBackground:"new 0 0 300 300",xmlSpace:"preserve",children:[(0,n.jsx)("defs",{children:(0,n.jsx)("path",{id:"circlePath3",d:" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "})}),(0,n.jsx)("circle",{cx:"150",cy:"100",r:"75",fill:"none"}),(0,n.jsxs)("g",{children:[(0,n.jsx)("use",{xlinkHref:"#circlePath3",fill:"none"}),(0,n.jsx)("text",{fill:"#fff",children:(0,n.jsx)("textPath",{xlinkHref:"#circlePath3",children:"Landscape Designer Landscape Designer Landscape Designer"})})]})]})}),(0,n.jsxs)("div",{className:"info",children:[(0,n.jsx)("h6",{children:"Ryan Hicks"}),(0,n.jsx)("span",{children:"Client Manager"})]})]})})}),(0,n.jsx)("div",{className:"col-lg-3 col-md-6",children:(0,n.jsx)("div",{className:"item cir",children:(0,n.jsxs)("div",{className:"img",children:[(0,n.jsx)("img",{src:"/img/team/4.jpg",alt:""}),(0,n.jsx)("div",{id:"circle4",children:(0,n.jsxs)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"300px",height:"300px",viewBox:"0 0 300 300",enableBackground:"new 0 0 300 300",xmlSpace:"preserve",children:[(0,n.jsx)("defs",{children:(0,n.jsx)("path",{id:"circlePath4",d:" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "})}),(0,n.jsx)("circle",{cx:"150",cy:"100",r:"75",fill:"none"}),(0,n.jsxs)("g",{children:[(0,n.jsx)("use",{xlinkHref:"#circlePath4",fill:"none"}),(0,n.jsx)("text",{fill:"#fff",children:(0,n.jsx)("textPath",{xlinkHref:"#circlePath4",children:"Client Manager Client Manager Client Manager"})})]})]})}),(0,n.jsxs)("div",{className:"info",children:[(0,n.jsx)("h6",{children:"Ryan Hicks"}),(0,n.jsx)("span",{children:"Client Manager"})]})]})})})]})})]})}},74974:function(e,s,i){"use strict";var n=i(77625),a=i(67294),l=i(61239),r=(i(45607),i(85893));s.Z=function(){var e=a.useState(!1),s=(0,n.Z)(e,2),i=s[0],c=s[1];return a.useEffect((function(){console.clear()}),[]),(0,r.jsxs)("section",{className:"video bg-img parallaxie",style:{backgroundImage:"url(/img/bg-vid.jpg)"},children:[(0,r.jsx)(l.Z,{channel:"vimeo",autoplay:!0,isOpen:i,videoId:"127203262",onClose:function(){return c(!1)}}),(0,r.jsx)("a",{className:"vid valign",onClick:function(e){e.preventDefault(),c(!0)},children:(0,r.jsx)("div",{className:"vid-butn",children:(0,r.jsx)("span",{className:"icon",children:(0,r.jsx)("i",{className:"pe-7s-play"})})})}),(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"stauts",children:[(0,r.jsxs)("div",{className:"item",children:[(0,r.jsxs)("h4",{children:["3",(0,r.jsx)("span",{children:"K"})," +"]}),(0,r.jsx)("h6",{children:"Happy Clients"})]}),(0,r.jsxs)("div",{className:"item",children:[(0,r.jsxs)("h4",{children:["14",(0,r.jsx)("span",{children:"K"})," +"]}),(0,r.jsx)("h6",{children:"Success Projects"})]})]})})]})}},98858:function(e,s,i){"use strict";i(67294);var n=i(41664),a=i(85893);s.Z=function(){return(0,a.jsx)("section",{className:"blog-list section-padding sub-bg",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"col-lg-4",children:(0,a.jsxs)("div",{className:"head md-mb50",children:[(0,a.jsx)("h6",{className:"back-color",children:"Get The Latest News"}),(0,a.jsx)("h3",{children:"What Our Trending News."}),(0,a.jsx)("p",{children:"We provide company and finance service for startups and company business."}),(0,a.jsx)(n.default,{href:"/blog/blog-dark",children:(0,a.jsx)("a",{children:(0,a.jsx)("span",{children:"More Blog Posts"})})})]})}),(0,a.jsxs)("div",{className:"col-lg-7 offset-lg-1",children:[(0,a.jsxs)("div",{className:"item wow fadeInUp","data-wow-delay":".3s",children:[(0,a.jsx)("div",{className:"img valign",children:(0,a.jsx)("img",{src:"/img/blog/1.jpg",alt:""})}),(0,a.jsx)("div",{className:"cont valign",children:(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"info",children:[(0,a.jsx)(n.default,{href:"/blog/blog-dark",children:(0,a.jsx)("a",{className:"date",children:(0,a.jsxs)("span",{children:[(0,a.jsx)("i",{children:"06"})," August"]})})}),(0,a.jsx)("span",{children:"/"}),(0,a.jsx)(n.default,{href:"/blog/blog-dark",children:(0,a.jsx)("a",{className:"tag",children:(0,a.jsx)("span",{children:"WordPress"})})})]}),(0,a.jsx)("h5",{children:(0,a.jsx)(n.default,{href:"/blog-details/blog-details-dark",children:(0,a.jsx)("a",{children:"How to use solid color combine with simple furnitures."})})})]})})]}),(0,a.jsxs)("div",{className:"item wow fadeInUp","data-wow-delay":".5s",children:[(0,a.jsx)("div",{className:"img valign",children:(0,a.jsx)("img",{src:"/img/blog/2.jpg",alt:""})}),(0,a.jsx)("div",{className:"cont valign",children:(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"info",children:[(0,a.jsx)(n.default,{href:"/blog/blog-dark",children:(0,a.jsx)("a",{className:"date",children:(0,a.jsxs)("span",{children:[(0,a.jsx)("i",{children:"06"})," August"]})})}),(0,a.jsx)("span",{children:"/"}),(0,a.jsx)(n.default,{href:"/blog/blog-dark",children:(0,a.jsx)("a",{className:"tag",children:(0,a.jsx)("span",{children:"WordPress"})})})]}),(0,a.jsx)("h5",{children:(0,a.jsx)(n.default,{href:"/blog-details/blog-details-dark",children:(0,a.jsx)("a",{children:"How to use solid color combine with simple furnitures."})})})]})})]}),(0,a.jsxs)("div",{className:"item wow fadeInUp","data-wow-delay":".3s",children:[(0,a.jsx)("div",{className:"img valign",children:(0,a.jsx)("img",{src:"/img/blog/3.jpg",alt:""})}),(0,a.jsx)("div",{className:"cont valign",children:(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"info",children:[(0,a.jsx)(n.default,{href:"/blog/blog-dark",children:(0,a.jsx)("a",{className:"date",children:(0,a.jsxs)("span",{children:[(0,a.jsx)("i",{children:"06"})," August"]})})}),(0,a.jsx)("span",{children:"/"}),(0,a.jsx)(n.default,{href:"/blog/blog-dark",children:(0,a.jsx)("a",{className:"tag",children:(0,a.jsx)("span",{children:"WordPress"})})})]}),(0,a.jsx)("h5",{children:(0,a.jsx)(n.default,{href:"/blog-details/blog-details-dark",children:(0,a.jsx)("a",{children:"How to use solid color combine with simple furnitures."})})})]})})]})]})]})})})}},41664:function(e,s,i){e.exports=i(7942)},77625:function(e,s,i){"use strict";function n(e,s){(null==s||s>e.length)&&(s=e.length);for(var i=0,n=new Array(s);i<s;i++)n[i]=e[i];return n}function a(e,s){return function(e){if(Array.isArray(e))return e}(e)||function(e,s){var i=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var n,a,l=[],r=!0,c=!1;try{for(i=i.call(e);!(r=(n=i.next()).done)&&(l.push(n.value),!s||l.length!==s);r=!0);}catch(t){c=!0,a=t}finally{try{r||null==i.return||i.return()}finally{if(c)throw a}}return l}}(e,s)||function(e,s){if(e){if("string"===typeof e)return n(e,s);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?n(e,s):void 0}}(e,s)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}i.d(s,{Z:function(){return a}})},13473:function(e){"use strict";e.exports=JSON.parse('[{"id":1,"icon":"pe-7s-paint-bucket","title":"3D Design","content":"Product based concepts, models, animation and directing stunning renders."},{"id":2,"icon":"pe-7s-phone","title":"Graphic Design","content":"Posters, art covers and billboard designs."},{"id":3,"icon":"pe-7s-display1","title":"Video Editting","content":"Sequencing, directing, editting and color correction."},{"id":4,"icon":"pe-7s-diskette","title":"Music Visuals","content":"Stage set visuals for performers."}]')}}]);