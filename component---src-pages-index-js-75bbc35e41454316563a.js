(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"9eSz":function(e,t,a){"use strict";var n=a("TqRt");t.__esModule=!0,t.default=void 0;var r,i=n(a("PJYZ")),s=n(a("VbXa")),o=n(a("8OQS")),l=n(a("pVnL")),c=n(a("q1tI")),u=n(a("17x9")),d=function(e){var t=(0,l.default)({},e),a=t.resolutions,n=t.sizes,r=t.critical;return a&&(t.fixed=a,delete t.resolutions),n&&(t.fluid=n,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(v&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,a=e.fixed,n=p(t||a||[]);return n&&n.src},p=function(e){if(v&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},h=Object.create({}),g=function(e){var t=d(e),a=m(t);return h[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,v="undefined"!=typeof window,E=v&&window.IntersectionObserver,y=new WeakMap;function w(e){return e.map((function(e){var t=e.src,a=e.srcSet,n=e.srcSetWebp,r=e.media,i=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},n&&c.default.createElement("source",{type:"image/webp",media:r,srcSet:n,sizes:i}),a&&c.default.createElement("source",{media:r,srcSet:a,sizes:i}))}))}function S(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function O(e){return e.map((function(e){var t=e.src,a=e.media,n=e.tracedSVG;return c.default.createElement("source",{key:t,media:a,srcSet:n})}))}function j(e){return e.map((function(e){var t=e.src,a=e.media,n=e.base64;return c.default.createElement("source",{key:t,media:a,srcSet:n})}))}function x(e,t){var a=e.srcSet,n=e.srcSetWebp,r=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?n:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var N=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},L=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?x(e,!0):"")+x(e)})).join("")+"<img "+c+s+o+a+n+t+i+r+l+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},k=c.default.forwardRef((function(e,t){var a=e.src,n=e.imageVariants,r=e.generateSources,i=e.spreadProps,s=e.ariaHidden,o=c.default.createElement(M,(0,l.default)({ref:t,src:a},i,{ariaHidden:s}));return n.length>1?c.default.createElement("picture",null,r(n),o):o})),M=c.default.forwardRef((function(e,t){var a=e.sizes,n=e.srcSet,r=e.src,i=e.style,s=e.onLoad,u=e.onError,d=e.loading,f=e.draggable,m=e.ariaHidden,p=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return c.default.createElement("img",(0,l.default)({"aria-hidden":m,sizes:a,srcSet:n,src:r},p,{onLoad:s,onError:u,ref:t,loading:d,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));M.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var R=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=v&&g(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&E&&!a.isCritical&&!a.seenBefore;var n=a.isCritical||v&&(b||!a.useIOSupport);return a.state={isVisible:n,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=c.default.createRef(),a.placeholderRef=t.placeholderRef||c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,i.default)(a)),a.handleRef=a.handleRef.bind((0,i.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:v}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=N(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=d(e),(a=m(t))&&(h[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=d(this.props),t=e.title,a=e.alt,n=e.className,r=e.style,i=void 0===r?{}:r,s=e.imgStyle,o=void 0===s?{}:s,u=e.placeholderStyle,f=void 0===u?{}:u,m=e.placeholderClassName,h=e.fluid,g=e.fixed,b=e.backgroundColor,v=e.durationFadeIn,E=e.Tag,y=e.itemProp,S=e.loading,x=e.draggable,N=h||g;if(!N)return null;var R=!1===this.state.fadeIn||this.state.imgLoaded,_=!0===this.state.fadeIn&&!this.state.imgCached,I=(0,l.default)({opacity:R?1:0,transition:_?"opacity "+v+"ms":"none"},o),C="boolean"==typeof b?"lightgray":b,T={transitionDelay:v+"ms"},q=(0,l.default)({opacity:this.state.imgLoaded?0:1},_&&T,o,f),z={title:t,alt:this.state.isVisible?"":a,style:q,className:m,itemProp:y},P=this.state.isHydrated?p(N):N[0];if(h)return c.default.createElement(E,{className:(n||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden",maxWidth:P.maxWidth?P.maxWidth+"px":null,maxHeight:P.maxHeight?P.maxHeight+"px":null},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(P.srcSet)},c.default.createElement(E,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/P.aspectRatio+"%"}}),C&&c.default.createElement(E,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:C,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},_&&T)}),P.base64&&c.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:P.base64,spreadProps:z,imageVariants:N,generateSources:j}),P.tracedSVG&&c.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:P.tracedSVG,spreadProps:z,imageVariants:N,generateSources:O}),this.state.isVisible&&c.default.createElement("picture",null,w(N),c.default.createElement(M,{alt:a,title:t,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:I,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:S,draggable:x})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:L((0,l.default)({alt:a,title:t,loading:S},P,{imageVariants:N}))}}));if(g){var V=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:P.width,height:P.height},i);return"inherit"===i.display&&delete V.display,c.default.createElement(E,{className:(n||"")+" gatsby-image-wrapper",style:V,ref:this.handleRef,key:"fixed-"+JSON.stringify(P.srcSet)},C&&c.default.createElement(E,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:C,width:P.width,opacity:this.state.imgLoaded?0:1,height:P.height},_&&T)}),P.base64&&c.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:P.base64,spreadProps:z,imageVariants:N,generateSources:j}),P.tracedSVG&&c.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:P.tracedSVG,spreadProps:z,imageVariants:N,generateSources:O}),this.state.isVisible&&c.default.createElement("picture",null,w(N),c.default.createElement(M,{alt:a,title:t,width:P.width,height:P.height,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:I,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:S,draggable:x})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:L((0,l.default)({alt:a,title:t,loading:S},P,{imageVariants:N}))}}))}return null},t}(c.default.Component);R.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var _=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),I=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string,maxWidth:u.default.number,maxHeight:u.default.number});function C(e){return function(t,a,n){var r;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+n+"`, but their values are both `undefined`.");u.default.checkPropTypes(((r={})[a]=e,r),t,"prop",n)}}R.propTypes={resolutions:_,sizes:I,fixed:C(u.default.oneOfType([_,u.default.arrayOf(_)])),fluid:C(u.default.oneOfType([I,u.default.arrayOf(I)])),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var T=R;t.default=T},DVUz:function(e,t,a){e.exports=a.p+"static/CV-4ca3361a59caa76d01ee2a7ee425bfc5.pdf"},RXBc:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),i=a("qhky"),s=a("KQm4"),o=a("7vrA"),l=a("/eHF"),c=a.n(l),u=a("oqc9"),d=a("RQEK"),f=function(){var e=Object(n.useContext)(d.b).hero,t=e.title,a=e.name,i=e.subtitle,s=e.cta,l=Object(n.useState)(!1),f=l[0],m=l[1],p=Object(n.useState)(!1),h=p[0],g=p[1];return Object(n.useEffect)((function(){window.innerWidth>769?(m(!0),g(!1)):(g(!0),m(!1))}),[]),r.a.createElement("section",{id:"hero",className:"jumbotron"},r.a.createElement(o.a,null,r.a.createElement(c.a,{left:f,bottom:h,duration:1e3,delay:500,distance:"30px"},r.a.createElement("h1",{className:"hero-title"},t||"Hi, my name is"," ",r.a.createElement("span",{className:"text-color-main"},a||"Your Name"),r.a.createElement("br",null),r.a.createElement("span",{className:"hero-subheading"},i||"I'm the Unknown Developer."))),r.a.createElement(c.a,{left:f,bottom:h,duration:1e3,delay:1e3,distance:"30px"},r.a.createElement("p",{className:"hero-cta"},r.a.createElement("span",{className:"cta-btn cta-btn--hero"},r.a.createElement(u.Link,{to:"about",offset:-100,smooth:!0,duration:500},s||"Know more"))))))},m=a("3Z9Z"),p=a("JI6e"),h=function(e){var t=e.title;return r.a.createElement(c.a,{bottom:!0,duration:1e3,delay:300,distance:"0px"},r.a.createElement("h2",{className:"section-title"},t))},g=a("Wbzz"),b=a("9eSz"),v=a.n(b),E=function(e){var t=e.filename,a=e.alt;return r.a.createElement(g.StaticQuery,{query:"4242452093",render:function(e){var n=e.images.edges.find((function(e){return e.node.relativePath.includes(t)}));if(!n)return null;var i=n.node.childImageSharp.fixed;return r.a.createElement(v.a,{className:"rounded shadow-lg",alt:a,fixed:i})}})},y=a("DVUz"),w=a.n(y),S=function(){var e=Object(n.useContext)(d.b).about,t=e.img,a=e.paragraphOne,i=e.paragraphTwo,s=Object(n.useState)(!1),l=s[0],u=s[1],f=Object(n.useState)(!1),g=f[0],b=f[1];return Object(n.useEffect)((function(){window.innerWidth>769?(u(!0),b(!1)):(b(!0),u(!1))}),[]),r.a.createElement("section",{id:"about"},r.a.createElement(o.a,null,r.a.createElement(h,{title:"About Me"}),r.a.createElement(m.a,{className:"about-wrapper"},r.a.createElement(p.a,{md:6,sm:12},r.a.createElement(c.a,{bottom:!0,duration:1e3,delay:600,distance:"30px"},r.a.createElement("div",{className:"about-wrapper__image"},r.a.createElement(E,{alt:"profile picture",filename:t})))),r.a.createElement(p.a,{md:6,sm:12},r.a.createElement(c.a,{left:l,bottom:g,duration:1e3,delay:1e3,distance:"30px"},r.a.createElement("div",{className:"about-wrapper__info"},r.a.createElement("p",{className:"about-wrapper__info-text"},a||"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae."),r.a.createElement("p",{className:"about-wrapper__info-text"},i||"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae."),w.a&&r.a.createElement("span",{className:"d-flex mt-3"},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"cta-btn cta-btn--resume",href:w.a},"Resume"))))))))},O=a("c+OE"),j=a.n(O),x=function(e){var t=e.filename,a=e.alt;return r.a.createElement(g.StaticQuery,{query:"3019095435",render:function(e){var n=e.images.edges.find((function(e){return e.node.relativePath.includes(t)}));if(!n)return null;var i=n.node.childImageSharp.fluid;return r.a.createElement(v.a,{alt:a,fluid:i})}})},N=a("icde"),L=a.n(N),k=function(){var e=Object(n.useContext)(d.b).projects,t=L()(e,2),a=Object(n.useState)(!1),i=a[0],s=a[1],o=Object(n.useState)(!1),l=o[0],u=o[1];return Object(n.useEffect)((function(){window.innerWidth>769?(s(!0),u(!1)):(u(!0),s(!1))}),[]),r.a.createElement("section",{id:"projects"},t.map((function(e,t){return r.a.createElement("div",{key:t,className:"row"},e.map((function(e,t){var a=e.title,n=e.info,s=(e.info2,e.url),o=e.img,u=e.id;return r.a.createElement(p.a,{key:u,md:12,lg:6,className:"projcard"},r.a.createElement(m.a,null,r.a.createElement(c.a,{right:i,bottom:l,duration:1e3,delay:100,distance:"30px"},r.a.createElement("div",{className:"col__image"},r.a.createElement("a",{href:s||"#!","aria-label":"Project Link",rel:"noopener noreferrer"},r.a.createElement(j.a,{options:{reverse:!1,max:8,perspective:1e3,scale:1,speed:300,transition:!0,axis:null,reset:!0,easing:"cubic-bezier(.03,.98,.52,.99)"}},r.a.createElement("div",{"data-tilt":!0,className:"thumbnail rounded"},r.a.createElement(x,{alt:a,filename:o}))))))),r.a.createElement(m.a,null,r.a.createElement(c.a,{left:i,bottom:l,duration:1e3,delay:50,distance:"30px"},r.a.createElement("div",{className:"col__text"},r.a.createElement("h3",{className:"col__text-title"},a||"Project Title"),r.a.createElement("div",null,r.a.createElement("p",null,n||"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.")),r.a.createElement("a",{rel:"noopener noreferrer",className:"cta-btn cta-btn--hero",href:s||"#!"},"Learn More")))))})))})))},M=function(){var e=Object(n.useState)(!1),t=(e[0],e[1]),a=Object(n.useState)(!1),i=(a[0],a[1]);return Object(n.useEffect)((function(){window.innerWidth>769?(t(!0),i(!1)):(i(!0),t(!1))}),[]),r.a.createElement("section",{id:"Projgallery"},r.a.createElement(o.a,null,r.a.createElement("div",{className:"project-wrapper"},r.a.createElement(h,{title:"Projects"}),r.a.createElement(k,null))))},R=function(){var e=Object(n.useContext)(d.b).contact,t=e.cta,a=e.btn,i=e.email;return r.a.createElement("section",{id:"contact"},r.a.createElement(o.a,null,r.a.createElement(h,{title:"Contact"}),r.a.createElement(c.a,{bottom:!0,duration:1e3,delay:800,distance:"30px"},r.a.createElement("div",{className:"contact-wrapper"},r.a.createElement("p",{className:"contact-wrapper__text"},t||"Would you like to work with me? Awesome!"),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"cta-btn cta-btn--resume",href:i?"mailto:"+i:""},a||"Let's Talk")))))},_=function(){var e=Object(n.useContext)(d.b).footer.networks;return r.a.createElement("footer",{className:"footer navbar-static-bottom"},r.a.createElement(o.a,null,r.a.createElement("span",{className:"back-to-top"},r.a.createElement(u.Link,{to:"hero",smooth:!0,duration:1e3},r.a.createElement("i",{className:"fa fa-angle-up fa-2x","aria-hidden":"true"}))),r.a.createElement("div",{className:"social-links"},e&&e.map((function(e){var t=e.id,a=e.name,n=e.url;return r.a.createElement("a",{key:t,href:n||"https://github.com/cobidev/gatsby-simplefolio",rel:"noopener noreferrer",target:"_blank","aria-label":a},r.a.createElement("i",{className:"fa fa-"+(a||"refresh")+" fa-inverse"}))}))),r.a.createElement("hr",null),r.a.createElement("p",{className:"footer__text"},"© ",(new Date).getFullYear()," - "," ","Made with <3 by Sarthak Marwaha")))},I=function(){var e=Object(n.useState)(!1),t=e[0],a=e[1],i=Object(n.useState)(!1),s=i[0],o=i[1],l=Object(n.useState)(!1),c=l[0],d=l[1],f=function(){var e=window.scrollY;d(e>200)},m=function(){window.innerWidth>769?(a(!0),o(!1)):(o(!0),a(!1))};Object(n.useEffect)((function(){window.addEventListener("scroll",f),window.addEventListener("resize",m)}),[]);var p=["navbar"];c&&p.push("scrolled");var h=["nav"];return!t&&s&&h.push("mini"),r.a.createElement("header",{id:"hometop",className:p.join(" ")},r.a.createElement("div",{className:"logo"},r.a.createElement("span",{className:"logo"},r.a.createElement(u.Link,{to:"hero",smooth:!0,duration:500},r.a.createElement("span",{className:"alt"}," SARTHAK MARWAHA")))),r.a.createElement("nav",{className:"navigation"},r.a.createElement("span",{className:h.join(" ")},r.a.createElement(u.Link,{to:"about",offset:-100,smooth:!0,duration:500},r.a.createElement("div",{className:"item text-color-alt"}," About")),r.a.createElement(u.Link,{to:"Projgallery",offset:-100,smooth:!0,duration:500},r.a.createElement("div",{className:"item text-color-alt"},"Projects")),r.a.createElement(u.Link,{to:"contact",offset:-100,smooth:!0,duration:500},r.a.createElement("div",{className:"item text-color-alt"},"Contact")))))},C=(a("J9yo"),a("jooN"));var T=function(){var e=Object(n.useState)({}),t=e[0],a=e[1],i=Object(n.useState)({}),o=i[0],l=i[1],c=Object(n.useState)([]),u=c[0],m=c[1],p=Object(n.useState)({}),h=p[0],g=p[1],b=Object(n.useState)({}),v=b[0],E=b[1];return Object(n.useEffect)((function(){a(Object.assign({},C.e)),l(Object.assign({},C.a)),m(Object(s.a)(C.f)),g(Object.assign({},C.b)),E(Object.assign({},C.c))}),[]),r.a.createElement(d.a,{value:{hero:t,about:o,projects:u,contact:h,footer:v}},r.a.createElement(I,null),r.a.createElement(f,null),r.a.createElement(S,null),r.a.createElement(M,null),r.a.createElement(R,null),r.a.createElement(_,null))};a("q4sD"),t.default=function(){var e=C.d.title,t=C.d.lang,a=C.d.description;return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("title",null,e||"Gatsby Simplefolio"),r.a.createElement("html",{lang:t||"en"}),r.a.createElement("meta",{name:"description",content:a||"Gatsby Simplefolio"})),r.a.createElement(T,null))}},"c+OE":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),s=a("q1tI"),o=(n=s)&&n.__esModule?n:{default:n},l=a("i8i4");var c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));a.state={style:{}};return a.width=null,a.height=null,a.left=null,a.top=null,a.transitionTimeout=null,a.updateCall=null,a.element=null,a.settings=Object.assign({},{reverse:!1,max:35,perspective:1e3,easing:"cubic-bezier(.03,.98,.52,.99)",scale:"1.1",speed:"1000",transition:!0,axis:null,reset:!0},a.props.options),a.reverse=a.settings.reverse?-1:1,a.onMouseEnter=a.onMouseEnter.bind(a,a.props.onMouseEnter),a.onMouseMove=a.onMouseMove.bind(a,a.props.onMouseMove),a.onMouseLeave=a.onMouseLeave.bind(a,a.props.onMouseLeave),a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"componentDidMount",value:function(){this.element=(0,l.findDOMNode)(this)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.transitionTimeout),cancelAnimationFrame(this.updateCall)}},{key:"onMouseEnter",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},t=arguments[1];return this.updateElementPosition(),this.setState(Object.assign({},this.state,{style:r({},this.state.style,{willChange:"transform"})})),this.setTransition(),e(t)}},{key:"reset",value:function(){var e=this;window.requestAnimationFrame((function(){e.setState(Object.assign({},e.state,{style:r({},e.state.style,{transform:"perspective("+e.settings.perspective+"px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"})}))}))}},{key:"onMouseMove",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},t=arguments[1];return t.persist(),null!==this.updateCall&&window.cancelAnimationFrame(this.updateCall),this.event=t,this.updateCall=requestAnimationFrame(this.update.bind(this,t)),e(t)}},{key:"setTransition",value:function(){var e=this;clearTimeout(this.transitionTimeout),this.setState(Object.assign({},this.state,{style:r({},this.state.style,{transition:this.settings.speed+"ms "+this.settings.easing})})),this.transitionTimeout=setTimeout((function(){e.setState(Object.assign({},e.state,{style:r({},e.state.style,{transition:""})}))}),this.settings.speed)}},{key:"onMouseLeave",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},t=arguments[1];return this.setTransition(),this.settings.reset&&this.reset(),e(t)}},{key:"getValues",value:function(e){var t=(e.nativeEvent.clientX-this.left)/this.width,a=(e.nativeEvent.clientY-this.top)/this.height,n=Math.min(Math.max(t,0),1),r=Math.min(Math.max(a,0),1);return{tiltX:(this.reverse*(this.settings.max/2-n*this.settings.max)).toFixed(2),tiltY:(this.reverse*(r*this.settings.max-this.settings.max/2)).toFixed(2),percentageX:100*n,percentageY:100*r}}},{key:"updateElementPosition",value:function(){var e=this.element.getBoundingClientRect();this.width=this.element.offsetWidth,this.height=this.element.offsetHeight,this.left=e.left,this.top=e.top}},{key:"update",value:function(e){var t=this.getValues(e);this.setState(Object.assign({},this.state,{style:r({},this.state.style,{transform:"perspective("+this.settings.perspective+"px) rotateX("+("x"===this.settings.axis?0:t.tiltY)+"deg) rotateY("+("y"===this.settings.axis?0:t.tiltX)+"deg) scale3d("+this.settings.scale+", "+this.settings.scale+", "+this.settings.scale+")"})})),this.updateCall=null}},{key:"render",value:function(){var e=Object.assign({},this.props.style,this.state.style);return o.default.createElement("div",{style:e,className:this.props.className,onMouseEnter:this.onMouseEnter,onMouseMove:this.onMouseMove,onMouseLeave:this.onMouseLeave},this.props.children)}}]),t}(s.Component);t.default=c},icde:function(e,t){var a=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,i=/^0o[0-7]+$/i,s=/^(?:0|[1-9]\d*)$/,o=parseInt,l=Object.prototype.toString,c=Math.ceil,u=Math.max;function d(e,t,a){var n=-1,r=e.length;t<0&&(t=-t>r?0:r+t),(a=a>r?r:a)<0&&(a+=r),r=t>a?0:a-t>>>0,t>>>=0;for(var i=Array(r);++n<r;)i[n]=e[n+t];return i}function f(e,t,a){if(!m(a))return!1;var n=typeof t;return!!("number"==n?function(e){return null!=e&&function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991}(e.length)&&!function(e){var t=m(e)?l.call(e):"";return"[object Function]"==t||"[object GeneratorFunction]"==t}(e)}(a)&&function(e,t){return!!(t=null==t?9007199254740991:t)&&("number"==typeof e||s.test(e))&&e>-1&&e%1==0&&e<t}(t,a.length):"string"==n&&t in a)&&function(e,t){return e===t||e!=e&&t!=t}(a[t],e)}function m(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}e.exports=function(e,t,s){t=(s?f(e,t,s):void 0===t)?1:u(function(e){var t=function(e){if(!e)return 0===e?e:0;if((e=function(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(m(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=m(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var s=r.test(e);return s||i.test(e)?o(e.slice(2),s?2:8):n.test(e)?NaN:+e}(e))===1/0||e===-1/0){return 17976931348623157e292*(e<0?-1:1)}return e==e?e:0}(e),s=t%1;return t==t?s?t-s:t:0}(t),0);var p=e?e.length:0;if(!p||t<1)return[];for(var h=0,g=0,b=Array(c(p/t));h<p;)b[g++]=d(e,h,h+=t);return b}}}]);
//# sourceMappingURL=component---src-pages-index-js-75bbc35e41454316563a.js.map