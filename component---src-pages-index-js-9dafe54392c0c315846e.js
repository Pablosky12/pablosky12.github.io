(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[678],{5072:function(e,t,n){"use strict";n.d(t,{h:function(){return o}});var o=n(9).ZP.h2.withConfig({displayName:"Header",componentId:"sc-1qo1wtx-0"})(["font-size:3em;line-height:1.3em;color:",";max-width:min(80%,1080px);em{background-color:",";color:",";font-style:normal;font-weight:bold;}@media (min-height:748px){padding:25vh 0;}"],(function(e){return e.theme.text}),(function(e){return e.theme.contrast1}),(function(e){return e.theme.background}))},2645:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return C}});var o=n(7294),i=n(9),r=n(604),a=n(2675),c=n.p+"static/personal-small-4bc99e0e7688b730cdc4ccf0194ea439.jpg",l=n.p+"static/comingsoon-20a31bdd0008e17259c27012e77dbc89.svg",m=n(5072),s=n(5444),u=function(){return(0,s.useStaticQuery)("2353484133").allDevArticles.edges.map((function(e){var t=e.node.article;return{id:t.id,image:t.social_image,name:t.title,url:t.url}}))},d=[{name:"Pablo Marcano Personal Site",image:c,url:"showcase/1"},{isComingSoon:!0},{isComingSoon:!0},{isComingSoon:!0}];function f(e){var t=e.source,n=e.title,i=(0,o.useRef)(),r=(0,o.useState)(0),a=r[0],c=r[1],m=(0,o.useState)(0),u=m[0],d=m[1];function f(){var e=window.innerWidth,n=i.current,o=.9*(null==n?void 0:n.firstChild.offsetWidth);if(o){var r=o*t.length+o,a=Math.round(r/e);d(a)}}return(0,o.useEffect)((function(){i.current.style.transform="translateX("+-100*a+"vw)"}),[a]),(0,o.useEffect)((function(){f();var e=window.addEventListener("resize",(function(){c(0),f()}));return function(){return window.removeEventListener("resize",e)}}),[]),o.createElement(h,null,!(0===a)&&o.createElement("button",{className:"left",onClick:function(){c(a-1)}},"<"),o.createElement(g,{className:"projects-"+n,ref:i},t.map((function(e,t){return e.isComingSoon?o.createElement(p,{i:t,img:l},o.createElement("img",{src:l,alt:"Coming Soon text"}),"Coming Soon"):o.createElement(b,{i:t,key:e.id},o.createElement("h4",null,e.name),o.createElement("img",{src:e.image,alt:"Screenshot of project "+e.name}),"work"==n?o.createElement(s.Link,{to:e.url}," View ",n," "):o.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},"View ",n))}))),!(a==u-1)&&o.createElement("button",{className:"right",onClick:function(){c(a+1)}},">"))}var h=i.ZP.div.withConfig({displayName:"pages__ScrollContainer",componentId:"sc-1bygtfm-0"})(["width:100vw;max-width:95vw;position:relative;button{position:absolute;background-color:",";border:1px solid ",";border-radius:200px;width:2em;height:2em;color:",";top:50%;z-index:10;&.left{left:0;}&.right{right:0;}}"],(function(e){return e.theme.textContrast}),(function(e){return e.theme.text}),(function(e){return e.theme.text})),p=i.ZP.li.withConfig({displayName:"pages__ComingSoon",componentId:"sc-1bygtfm-1"})(["min-width:20em;min-height:20em;border-radius:1000px;position:relative;left:",";display:flex;justify-content:center;align-items:center;color:",";img{width:20em;height:20em;position:absolute;}"],(function(e){return"-"+60*e.i+"px"}),(function(e){return e.theme.textContrast})),g=i.ZP.ul.withConfig({displayName:"pages__ProjectsContainer",componentId:"sc-1bygtfm-2"})(["list-style:none;display:flex;flex-direction:row;position:relative;padding-bottom:10%;transition:0.5s ease-in-out;li{&:nth-child(even){top:6vh;}&:nth-child(3n + 1){background-color:",";}&:nth-child(3n + 2){background-color:",";}&:nth-child(3n + 3){background-color:",";}}"],(function(e){return e.theme.contrast1}),(function(e){return e.theme.contrast2}),(function(e){return e.theme.contrast3})),b=i.ZP.li.withConfig({displayName:"pages__ProjectCard",componentId:"sc-1bygtfm-3"})(["min-width:20em;min-height:20em;padding:1em;color:",";position:relative;left:",";h4{font-size:1.2em;}img{width:70%;height:70%;margin:0;object-fit:cover;object-position:30% 50%;border-radius:800px;position:absolute;right:0;bottom:0;}a{color:",";text-decoration:underline;position:absolute;bottom:0;left:1em;bottom:1em;}"],(function(e){return e.theme.textContrast}),(function(e){return"-"+60*e.i+"px"}),(function(e){return e.theme.textContrast})),w=i.ZP.section.withConfig({displayName:"pages__Section",componentId:"sc-1bygtfm-4"})(["padding-bottom:3em;h3{padding-top:2em;color:",";}"],(function(e){return e.theme.textSecondary})),x=i.ZP.div.withConfig({displayName:"pages__Divider",componentId:"sc-1bygtfm-5"})(["width:100%;display:flex;justify-content:center;align-items:center;padding:1em 0;a{color:",";text-decoration:underline;}"],(function(e){return e.theme.text})),v=i.ZP.img.withConfig({displayName:"pages__Headshot",componentId:"sc-1bygtfm-6"})(["width:130px;transform:translateY(0.5em);border-radius:100px;padding:1em;"]),y=i.ZP.div.withConfig({displayName:"pages__PresentationCard",componentId:"sc-1bygtfm-7"})(["display:flex;align-items:center;font-size:0.8em;p{margin:0;}.name{color:",";}.desc{color:",";opacity:0.8;}@media (min-width:768px){max-width:max(30%,500px);}"],(function(e){return e.theme.text}),(function(e){return e.theme.textSecondary})),E=i.ZP.main.withConfig({displayName:"pages__Main",componentId:"sc-1bygtfm-8"})(["margin-top:1em;"]),C=function(){var e=u();return o.createElement(r.Z,null,o.createElement(E,null,o.createElement(m.h,null,"I'm a",o.createElement("em",null," Web developer ")," who loves to build ",o.createElement("em",null,"quality")," ","products with cool tech."),o.createElement(y,null,o.createElement(v,{src:a.Z,alt:"Pablo Marcano headshot"}),o.createElement("div",null,o.createElement("p",{className:"name"},"Pablo Marcano"),o.createElement("p",{className:"desc"},"Montevideo, Uruguay + Remote"),o.createElement("p",{className:"desc"},"Available for Contract Work")))),o.createElement(x,null,o.createElement("a",{href:"#work"},"See work ▼ ")),o.createElement(w,{href:"#work"},o.createElement("h3",null,"Showcase"),o.createElement(f,{source:d,title:"work"})),o.createElement(w,null,o.createElement("h3",null,"Latest Articles"),o.createElement(f,{source:e,title:"article"})))}},2675:function(e,t,n){"use strict";t.Z=n.p+"static/me-bw-fcf9597ac9e677222a310a931e4ffcdf.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-9dafe54392c0c315846e.js.map