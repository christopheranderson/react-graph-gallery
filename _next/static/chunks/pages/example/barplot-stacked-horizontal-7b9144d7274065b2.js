(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[579],{3332:function(t,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/example/barplot-stacked-horizontal",function(){return i(5191)}])},7197:function(t,e,i){"use strict";i.d(e,{Z:function(){return p}});var a=i(5893),r=(i(7294),i(6761)),o=i(1878),n=i(1664),s=o.c.filter((function(t){return"general"===t.family})).map((function(t){return t.logo}));function l(t){var e=t.chartLogo,i=t.caption,o=t.link,l=t.isAvailable,d=t.size,u=s.includes(e),p=l?"opacity-100":"opacity-20",h=l?"cursor-pointer":"cursor-not-allowed";return(0,a.jsx)(n.default,{href:l?o:"subscribe",children:(0,a.jsxs)("div",{className:"flex flex-col items-center",children:[(0,a.jsxs)("div",{style:{width:d,height:d},className:"relative mr-2 rounded-full "+p+" "+h,children:[(0,a.jsx)("div",{className:"absolute",children:(0,a.jsx)(r.Z,{chartLogo:e})}),u?(0,a.jsx)("div",{className:"absolute opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full z-30",children:(0,a.jsx)(c,{size:d})}):(0,a.jsx)("div",{style:{backgroundColor:"var(--react-gallery)"},className:"opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full rounded-full z-30",children:(0,a.jsx)("span",{className:"text-white text-4xl",children:"+"})})]}),(0,a.jsx)("p",{className:"font-light text-sm text-gray-600 "+p,children:i})]})})}var c=function(t){var e=t.size;return(0,a.jsx)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 100 100",className:"fill-current text-purple-800",children:(0,a.jsx)("path",{d:"M50,0 L100,20 L100,80 L50,100 L0,80 L0,20 Z"})})},d=i(3414),u={distribution:"Distribution",correlation:"Correlation",ranking:"Ranking",partOfAWhole:"Part Of A Whole",evolution:"Evolution",map:"Map",flow:"Flow",general:"General Knowledge"};function p(t){var e=t.chartFamily,i=o.c.filter((function(t){return t.family===e})).map((function(t,e){var i=(0,d.y)(t.reactURL);return(0,a.jsx)("div",{className:"flex flex-col items-center justify-center",children:(0,a.jsx)(l,{link:i,chartLogo:t.logo,caption:t.label,isAvailable:t.isAvailable,size:129})},e)}));return(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:e+"  mt-4 text-md border-b mb-2 border-gray-100 tracking-wider",children:null===u||void 0===u?void 0:u[e]}),(0,a.jsx)("div",{className:"flex flex-row justify-start flex-wrap",children:i})]})}},33:function(t,e,i){"use strict";i.d(e,{$:function(){return c}});var a=i(5893),r=i(7294),o=i(217),n=i(4893),s=i(5380),l=i(7975),c=function(t){var e=t.VizComponent,i=t.vizName,c=t.height,d=void 0===c?400:c,u=t.maxWidth,p=void 0===u?800:u,h=t.caption,g=(0,r.useState)(!1),m=g[0],f=g[1],b=(0,r.useRef)(null),x=(0,o.B)(b);return(0,a.jsx)("div",{style:{marginLeft:"-50vw",left:"50%"},className:"my-4 py-4 w-screen relative",children:m?(0,a.jsxs)("div",{className:"flex flex-col items-center justify-center w-full",children:[(0,a.jsx)("div",{style:{maxWidth:2e3},className:"w-full z-50",children:(0,a.jsx)(l.X,{vizName:i})}),(0,a.jsx)("div",{className:"flex justify-center mt-2",children:(0,a.jsx)(n.z,{size:"sm",onClick:function(){return f(!m)},children:"Hide Sandbox"})})]}):(0,a.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,a.jsx)("div",{className:"bg-gray-100 bg-opacity-50 w-screen flex justify-center z-50 pointer-events-none",children:(0,a.jsx)("div",{style:{height:d,width:"100%",maxWidth:p},ref:b,className:"pointer-events-auto",children:(0,a.jsx)(e,{height:d,width:x.width})})}),(0,a.jsx)(s.Y,{children:h}),(0,a.jsx)("div",{className:"flex justify-center",children:(0,a.jsx)(n.z,{size:"sm",onClick:function(){return f(!m)},children:"Show code"})})]})})}},7975:function(t,e,i){"use strict";i.d(e,{X:function(){return r}});var a=i(5893),r=(i(7294),function(t){var e="https://codesandbox.io/embed/github/holtzy/react-graph-gallery/tree/main/viz/"+t.vizName+"?fontsize=14&hidenavigation=1&theme=dark&expanddevtools=0";return(0,a.jsx)("iframe",{src:e,style:{width:"100%",height:"500px",border:"solid",borderWidth:2,borderRadius:"4px",overflow:"hidden"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})})},2301:function(t,e,i){"use strict";i.d(e,{Z:function(){return s}});var a=i(5893),r=(i(7294),i(8241)),o=i(3990),n=i(2199);function s(t){var e=t.images,i=r.F.filter((function(t){return e.includes(t.img)})).map((function(t,e){return(0,a.jsx)(o.X,{link:t.link,title:t.title,description:(0,a.jsx)("p",{children:t.description}),img:t.img,alt:t.alt},e)}));return(0,a.jsx)(n.E,{children:i})}},1884:function(t,e,i){"use strict";i.d(e,{A:function(){return p}});var a=i(5893),r=i(3185),o=i(1261),n=i(7294),s=i(3924),l=i.n(s);function c(){var t=(0,n.useState)([]),e=t[0],i=t[1],r=(0,n.useState)(0),o=r[0],s=r[1];return(0,n.useEffect)((function(){var t=Array.from(document.querySelectorAll("h2"));i(t)}),[]),(0,n.useEffect)((function(){var t=function(){var t=e.map((function(t){return t.offsetTop-t.scrollTop+t.clientTop})),i=window.scrollY+150,a=t.reduce((function(t,e){return Math.abs(e-i)<Math.abs(t-i)?e:t}),0),r=t.findIndex((function(t){return t===a}));s(-1===r?0:r)};return window.addEventListener("scroll",t),function(){return window.removeEventListener("scroll",t)}}),[e]),(0,a.jsx)("div",{className:l().tableOfContent,children:e.map((function(t,i){return(0,a.jsx)("p",{className:o===i?"".concat(l().tocItem," ").concat(l().tocItemActive):l().tocItem,onClick:function(t){t.preventDefault(),e[i].scrollIntoView({behavior:"smooth",block:"start",alignToTop:!0})},children:t.id.charAt(0).toUpperCase()+t.id.slice(1)},t.id)}))})}var d=i(8171),u=i(6978),p=function(t){var e=t.children,i=t.title,n=t.seoDescription;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(d.A,{title:i,seoDescription:n}),(0,a.jsxs)("div",{className:"wrapper",children:[(0,a.jsx)(r.Z,{}),e]}),(0,a.jsx)(u.Z,{}),(0,a.jsx)("div",{className:"wrapper",children:(0,a.jsx)(o.Z,{})}),(0,a.jsx)(c,{})]})}},1687:function(t,e,i){"use strict";i.d(e,{J:function(){return o}});var a=i(5893),r=i(1664),o=function(t){var e=t.children,i=t.href,o=t.isFilled,n=t.size,s=void 0===n?"md":n,l=t.isFaded,c=i.startsWith("www")||i.startsWith("http"),d="font-normal rounded mr-1 cursor-pointer border-reactGallery border ";d+=o?" bg-reactGallery hover:bg-reactGallery text-white ":" bg-white hover:bg-reactGallery hover:text-white text-reactGallery ","sm"===s&&(d+="text-sm py-1 px-2 "),"md"===s&&(d+="text-md py-2 px-4 "),l&&(d+="opacity-60");var u=(0,a.jsx)("span",{className:d,children:e});return c?(0,a.jsx)("a",{href:i,target:"_blank",children:u}):(0,a.jsx)(r.default,{href:i,passHref:!0,children:(0,a.jsx)("a",{children:u})})}},8807:function(t,e,i){"use strict";i.d(e,{Z:function(){return p}});var a=i(5893),r=(i(7294),i(1878)),o=i(3414),n=i(3919),s=i(1687),l=i(3187),c=i.n(l),d=function(t){var e=t.direction,i=t.text,r=t.children;return(0,a.jsx)("span",{className:c().tooltip+" "+c()[e],id:i,children:r})},u=i(6761);function p(t){var e=t.title,i=t.description,l=t.chartType,c=t.showSectionLink,p=void 0!==c&&c,h=t.showInspirationLink,g=void 0===h||h,m=t.showD3GalleryLink,f=void 0===m||m,b=r.c.find((function(t){return t.id===l}));return b?(0,a.jsxs)("div",{className:"w-full pt-1 sm:pt-28 pb-20 ",children:[(0,a.jsxs)("div",{className:"flex justify-start items-center",children:[(0,a.jsx)("h1",{children:e}),(0,a.jsx)("div",{className:"w-20 ml-4",children:(0,a.jsx)(u.Z,{chartLogo:null===b||void 0===b?void 0:b.logo})})]}),(0,a.jsx)(n.r,{}),(0,a.jsx)("div",{className:"max-w-xxl py-2",children:i}),l&&(0,a.jsx)("span",{className:"text-gray-400 text-sm font-light",children:"Useful links"}),l&&(0,a.jsxs)("div",{className:"flex flex-row flex-wrap",children:[p&&(0,a.jsx)(d,{text:"kkkk",direction:"bottom",children:(0,a.jsx)(s.J,{href:(0,o.y)(b.reactURL),size:"sm",children:b.label+" section"})}),g&&(0,a.jsx)(d,{text:"Hundreds of stunning dataviz projects to gather inspiration",direction:"bottom",children:(0,a.jsx)(s.J,{href:"https://www.dataviz-inspiration.com/"+b.id,size:"sm",children:"inspiration"})}),f&&(0,a.jsx)(d,{text:"Pure d3 implementation, no React",direction:"bottom",children:(0,a.jsx)(s.J,{href:b.d3URL,size:"sm",children:"d3 gallery"})}),(0,a.jsx)(d,{text:"Dataviz theory about this chart",direction:"bottom",children:(0,a.jsx)(s.J,{href:b.dataToVizURL,isFilled:!0,size:"sm",children:"About this chart"})})]})]}):null}},4893:function(t,e,i){"use strict";i.d(e,{z:function(){return r}});var a=i(5893),r=function(t){var e=t.children,i=t.onClick,r=t.isFilled,o=t.size,n=void 0===o?"md":o,s="rounded m-1 cursor-pointer border-reactGallery border ";return"sm"===n&&(s+="text-sm py-1 px-2"),"md"===n&&(s+="text-md py-2 px-4"),s+=r?" bg-reactGallery hover:bg-reactGallery text-white":" bg-white hover:bg-reactGallery hover:text-white text-reactGallery",(0,a.jsx)("button",{className:s,onClick:i,children:e})}},5380:function(t,e,i){"use strict";i.d(e,{Y:function(){return r}});var a=i(5893),r=function(t){var e=t.children;return(0,a.jsx)("p",{className:"text-sm text-gray-500 max-w-xs italic text-center mt-4 font-light",children:e})}},8193:function(t,e,i){"use strict";i.d(e,{d:function(){return s}});var a=i(5893),r=i(4725),o=i.n(r),n=i(7294),s=function(t){var e=t.code,i=(0,n.useRef)(null);return(0,n.useEffect)((function(){i.current&&o().highlightElement(i.current)}),[i,e]),(0,a.jsx)("div",{className:"mb-6",children:(0,a.jsx)("pre",{className:"rounded-md line-numbers",children:(0,a.jsx)("code",{ref:i,className:"p-0 language-js",children:e})})})}},3990:function(t,e,i){"use strict";i.d(e,{X:function(){return n}});var a=i(5893),r=i(5102),o=i.n(r),n=function(t){var e=t.img,i=t.title,r=t.description,n=t.link,s=t.alt;return(0,a.jsxs)("figure",{className:o().container,children:[(0,a.jsx)("img",{src:"/chart/"+e,className:o().image,alt:s}),(0,a.jsxs)("figcaption",{children:[(0,a.jsx)("p",{className:o().title,children:(0,a.jsx)("b",{children:i})}),(0,a.jsx)("div",{className:"font-light",children:r}),(0,a.jsx)("a",{href:n})]})]})}},2199:function(t,e,i){"use strict";i.d(e,{E:function(){return r}});var a=i(5893),r=(i(7294),function(t){var e=t.children;return(0,a.jsx)("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-4",children:e})})},217:function(t,e,i){"use strict";i.d(e,{B:function(){return r}});var a=i(7294),r=function(t){var e=function(){return{width:t.current?t.current.offsetWidth:0,height:t.current?t.current.offsetHeight:0}},i=(0,a.useState)(e),r=i[0],o=i[1],n=function(){o(e())};return(0,a.useEffect)((function(){return window.addEventListener("resize",n),function(){return window.removeEventListener("resize",n)}}),[]),(0,a.useLayoutEffect)((function(){n()}),[]),r}},5191:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return j}});var a=i(5893),r=i(7294),o=i(1884),n=i(8807),s=i(7197),l=i(8193),c=i(33),d=i(1664),u=[{group:"Mark",subgroup:"travel",value:90},{group:"Mark",subgroup:"food",value:23},{group:"Mark",subgroup:"beer",value:14},{group:"Robert",subgroup:"travel",value:12},{group:"Robert",subgroup:"food",value:9},{group:"Robert",subgroup:"beer",value:2},{group:"Emily",subgroup:"travel",value:34},{group:"Emily",subgroup:"food",value:0},{group:"Emily",subgroup:"beer",value:4},{group:"Marion",subgroup:"travel",value:53},{group:"Marion",subgroup:"food",value:14},{group:"Marion",subgroup:"beer",value:102},{group:"Nicolas",subgroup:"travel",value:98},{group:"Nicolas",subgroup:"food",value:9},{group:"Nicolas",subgroup:"beer",value:8},{group:"M\xe9lanie",subgroup:"travel",value:23},{group:"M\xe9lanie",subgroup:"food",value:23},{group:"M\xe9lanie",subgroup:"beer",value:3},{group:"Gabriel",subgroup:"travel",value:18},{group:"Gabriel",subgroup:"food",value:11},{group:"Gabriel",subgroup:"beer",value:18},{group:"Jean",subgroup:"travel",value:104},{group:"Jean",subgroup:"food",value:10},{group:"Jean",subgroup:"beer",value:14},{group:"Paul",subgroup:"travel",value:2},{group:"Paul",subgroup:"food",value:12},{group:"Paul",subgroup:"beer",value:92}],p=i(2989);function h(t){return function(t){if(Array.isArray(t)){for(var e=0,i=new Array(t.length);e<t.length;e++)i[e]=t[e];return i}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var g={top:0,right:30,bottom:30,left:30},m=["#e85252","#6689c6","#9a6fb0"],f=function(t){var e=t.width,i=t.height,o=t.data,n=e-g.right-g.left,s=i-g.top-g.bottom,l=h(new Set(o.map((function(t){return t.group})))),c=h(new Set(o.map((function(t){return t.subgroup})))),d=p.knu().keys(c).value((function(t){return o.filter((function(e){return e.group===t}))[0].value}))(l),u=(d[d.length-1]||[]).map((function(t){var e=t[t.length-1]||0;return{name:t.data,value:e}})),f=u.sort((function(t,e){return e.value-t.value})),b=f[0].value,x=(0,r.useMemo)((function(){return p.tiA().domain(u.map((function(t){return t.name}))).range([0,s]).padding(.2)}),[o,i]),v=(0,r.useMemo)((function(){return p.BYU().domain([0,b]).range([0,n])}),[o,e]),j=p.PKp().domain(c).range(m),w=d.map((function(t,e){return(0,a.jsx)("g",{children:t.map((function(e,i){return(0,a.jsx)("rect",{y:x(e.data),height:x.bandwidth(),x:v(e[0]),width:v(e[1])-v(e[0]),fill:j(t.key),opacity:.6},i)}))},e)})),k=f.map((function(t,e){var i=x(t.name);return i?(0,a.jsxs)("g",{children:[(0,a.jsx)("text",{x:v(t.value)-7,y:i+x.bandwidth()/2,textAnchor:"end",alignmentBaseline:"central",fontSize:12,opacity:v(t.value)>90?1:0,children:t.value}),(0,a.jsx)("text",{x:v(0)+7,y:i+x.bandwidth()/2,textAnchor:"start",alignmentBaseline:"central",fontSize:12,children:t.name})]},e):null})),y=v.ticks(5).slice(1).map((function(t,e){return(0,a.jsxs)("g",{children:[(0,a.jsx)("line",{x1:v(t),x2:v(t),y1:0,y2:s,stroke:"#808080",opacity:.2}),(0,a.jsx)("text",{x:v(t),y:s+10,textAnchor:"middle",alignmentBaseline:"central",fontSize:9,opacity:.8,children:t})]},e)}));return(0,a.jsx)("div",{children:(0,a.jsx)("svg",{width:e,height:i,children:(0,a.jsxs)("g",{width:n,height:s,transform:"translate(".concat([g.left,g.top].join(","),")"),children:[(0,a.jsx)("g",{children:y}),(0,a.jsx)("g",{children:w}),(0,a.jsx)("g",{children:k})]})})})},b=function(t){var e=t.width,i=void 0===e?700:e,r=t.height,o=void 0===r?400:r;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{style:{height:60,display:"flex",alignItems:"center"},children:(0,a.jsxs)("span",{style:{fontSize:17,marginLeft:30},children:["How much my friends spend on"," ",(0,a.jsx)("span",{style:{color:m[0]},children:(0,a.jsx)("b",{children:"travel"})}),","," ",(0,a.jsx)("span",{style:{color:m[1]},children:(0,a.jsx)("b",{children:"food"})})," ","and"," ",(0,a.jsx)("span",{style:{color:m[2]},children:(0,a.jsx)("b",{children:"beer"})}),"."]})}),(0,a.jsx)(f,{data:u,width:i,height:o-60})]})},x=i(2301),v=(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("p",{children:["This tutorial is a variation around the general"," ",(0,a.jsx)(d.default,{href:"/barplot",children:"introduction to barplot with react"})," and d3.js. You should probably understand the concepts described there before digging into ",(0,a.jsx)("b",{children:"stacking"}),"."]}),(0,a.jsxs)("p",{children:["This example shows how to represent ",(0,a.jsx)("b",{children:"2 levels of grouping"})," in a barplot, resulting in a"," ",(0,a.jsx)("a",{href:"https://www.data-to-viz.com/graph/barplot.html",children:"stacked barplot"}),". The items of the dataset are divided in ",(0,a.jsx)("b",{children:"groups"})," (reprented as bars) and ",(0,a.jsx)("b",{children:"subgroups"})," (represented as sections in each bar)."]}),(0,a.jsx)("p",{children:"A code sandbox is provided for the final result, but explanations target what's different compared to an usual barplot."})]});function j(){return(0,a.jsxs)(o.A,{title:"Horizontal stacked barplot.",seoDescription:"A step-by-step guide to build a horizontal stacked barplot with React and d3.js. Comes with explanation, code sandboxes, and ready-to-use templates.",children:[(0,a.jsx)(n.Z,{title:(0,a.jsx)("h1",{children:"Horizontal Stacked Barplot"}),description:v,chartType:"barplot"}),(0,a.jsx)("h2",{id:"plot",children:"Plot and code"}),(0,a.jsxs)("p",{children:["This is a ",(0,a.jsx)("b",{children:"stacked barplot"})," built using React and d3.js. The dummy dataset provides information about how much my friends spent the last month. The people are the ",(0,a.jsx)("b",{children:"group"})," here. Each ",(0,a.jsx)("b",{children:"bar"})," represents a group."]}),(0,a.jsxs)("p",{children:["A ",(0,a.jsx)("b",{children:"second level"})," of grouping is available. We know if the money was spent on travel, food or beer. It is possible to represent this additional amount of info using a process called ",(0,a.jsx)("b",{children:"stacking"}),"."]}),(0,a.jsx)(c.$,{vizName:"BarplotStackedHorizontal",VizComponent:b,height:500,maxWidth:600,caption:"A horizontal stacked barplot built with d3.js for scales, and react for rendering"}),(0,a.jsx)("p",{children:"Now, let's see how to implement such a graph."}),(0,a.jsx)("h2",{id:"data",children:"The Data"}),(0,a.jsxs)("p",{children:["There are several ways to store this information in javascript. I suggest an ",(0,a.jsx)("b",{children:"array of object"})," where each object provides the"," ",(0,a.jsx)("code",{children:"value"}),"of 1 specific expense, with the ",(0,a.jsx)("code",{children:"group"})," (friend name) and the"," ",(0,a.jsx)("code",{children:"subgroup"})," (category of expense)."]}),(0,a.jsx)(l.d,{code:w}),(0,a.jsx)("h2",{id:"stacking",children:"Stacking"}),(0,a.jsxs)("p",{children:["The trickiest part of the stacked barplot implementation is the"," ",(0,a.jsx)("b",{children:"stacking"})," step."]}),(0,a.jsxs)("p",{children:["Subgroups are displayed one next to each other. We need to compute their positions on the X axis. Fortunately ",(0,a.jsx)("code",{children:"d3.js"})," is here to the rescue with a ",(0,a.jsx)("code",{children:"d3.stack()"})," function."]}),(0,a.jsx)("h3",{children:"\u2192 Build a stack generator"}),(0,a.jsxs)("p",{children:[(0,a.jsx)("code",{children:"d3.stack()"})," constructs a ",(0,a.jsx)("b",{children:"stack generator"}),". This stack generator is a function that takes a list of group names and will stack the data for each item."]}),(0,a.jsx)("p",{children:"This is how it can be applied to our dataset:"}),(0,a.jsx)(l.d,{code:k}),(0,a.jsx)("h3",{children:"\u2192 Use the generator"}),(0,a.jsx)("p",{children:"Now that this stack generator is available, we just have to run it on our list of group names to get the stacked values:"}),(0,a.jsx)(l.d,{code:y}),(0,a.jsx)("h3",{children:"\u2192 Output"}),(0,a.jsx)("p",{children:"The output has kind of an usual shape and it's important to understand how it's formatted. It's an array with the same length than the initial dataset. Once more, each item is linked to a positon on the x axis."}),(0,a.jsx)("p",{children:"Each item is an array of length 2, associated with a specific series. This is a mess to explain."}),(0,a.jsx)(l.d,{code:z}),(0,a.jsx)("h2",{id:"rendering",children:"Rendering"}),(0,a.jsxs)("p",{children:["Once you get the ",(0,a.jsx)("b",{children:"stacked data"})," above, rendering the chart is business as usual. You can loop through the object and plot a"," ",(0,a.jsx)("code",{children:"rect"})," for each item."]}),(0,a.jsx)(c.$,{vizName:"BarplotStackedHorizontal",VizComponent:b,height:500,maxWidth:600,caption:"A horizontal stacked barplot built with d3.js for scales, and react for rendering"}),(0,a.jsx)("h2",{id:"variation",children:"Variation"}),(0,a.jsx)("p",{children:"Check those other barplot and stacked barplot that can interest you:"}),(0,a.jsx)(x.Z,{images:["barplot-basic.png","barplotDatasetAnimation.gif","barplot-stacked-vertical.png"]}),(0,a.jsx)("div",{className:"full-bleed border-t h-0 bg-gray-100 mb-3 mt-24"}),(0,a.jsx)(s.Z,{chartFamily:"ranking"}),(0,a.jsx)("div",{className:"mt-20"})]})}var w='\nexport const data = [\n  {group:"Mark", subgroup: "travel",  value: 90},\n  {group:"Mark", subgroup: "food",  value: 23},\n  {group:"Mark", subgroup: "beer",  value: 14},\n  ...\n]\n'.trim(),k="\n// You need the list of subgroups\nconst subGroups = ['travel', 'beer', 'food']\n\n// Creates the stacking function\nconst stackGenerator = d3\n  .stack<string>()\n  .keys(subGroups)\n  .value((d) => data.filter((item) => item.group === d)[0].value); // This is the accessor function: how to retrieve all values for a group\n".trim(),y="\n// Use the stack generator to stack the data in each group\nconst series = stackGenerator(groups);\n".trim(),z="\n[\n  // Subgroup 1 (travel)\n  [\n    [0, 90, data: 'Mark'], // subgroup travel goes from x=0 to x=90 for Mark\n    [0, 12, data: 'Robert'],\n    [0, 34, data: 'Emily'],\n    ...\n  ],\n  // Subgroup 2 (food)\n  [\n    [90, 180, data: 'Mark'], // subgroup food goes from x=90 to x=180 for Mark\n    [12, 24, data: 'Robert'],\n    [34, 68, data: 'Emily'],\n    ...\n  ]\n]\n".trim()},8241:function(t,e,i){"use strict";i.d(e,{F:function(){return a}});var a=[{link:"/scatter-plot#scales%20and%20axes",title:"Scales and axes",description:"How to map your data in a 2d space, and how to draw the axes",img:"axis-basic-demo.png",alt:"Picture of an empty chart area with X and Y axes"},{link:"/scatter-plot#circles",title:"Basic scatter plot",description:"Add circles to get a basic scatter plot",img:"scatterplot-most-basic.png",alt:"Most basic scatterplot made with react and d3"},{link:"/scatter-plot#tooltip",title:"Add tooltip",description:"Get more details about each datapoint by adding a tooltip on hover",img:"scatterplot-tooltip.png",alt:"Scatterplot with tooltip made with react and d3"},{link:"/scatter-plot#hover%20effect",title:"Add a hover effect",description:"Highlight a specific group on hover",img:"scatterplot-hover-effect.png",alt:"Scatterplot with hover effect made with react and d3"},{link:"/scatter-plot#real%20life",title:"Real life use-case",description:"Reproduction of a data wrapper chart representing countries CO2 data",img:"scatterplot-co2.png",alt:"Real life example of a scatterplot made with react and d3"},{link:"/example/boxplot-jitter",title:"Boxplot with jitter",description:"Add individual data points using jitter on top of the boxplot",img:"boxplot-jitter.png",alt:"Picture of a boxplot with jitter built using react and d3.js"},{link:"/bubble-plot",title:"Bubble plot",description:"Learn how to build a bubble plot with react and d3.js",img:"bubble-plot-with-legend.png",alt:"Picture of a simple bubble plot with a legend made with react and d3.js"},{link:"/histogram",title:"Histogram",description:"Learn how to build a histogram with react and d3.js",img:"histogram-basic.png",alt:"Picture of a simple histogram made with react and d3.js"},{link:"/histogram#transition",title:"Histogram dataset transition",description:"How to animate the transition between datasets",img:"histogram-dataset-transition.gif",alt:"GIF of a histogram with animated data transition"},{link:"/violin-plot",title:"Violin to Boxplot transition",description:"Using shape morphism to smoothly transition from a boxplot to a violin and reverse",img:"violinBoxplotTransition.png",alt:"gif of a violin plot smoothly transitioning to a boxplot using shape morphism"},{link:"/heatmap",title:"Basic heatmap",description:"Most basic heatmap",img:"heatmapBasic.png",alt:"Picture of a simple heatmap made with react and d3.js"},{link:"/heatmap#tooltip",title:"Heatmap with tooltip",description:"Learn how to add a tooltip to a heatmap with react",img:"heatmapTooltip.png",alt:"Picture of a heatmap with a tooltip that appears on hover"},{link:"/heatmap#legend",title:"Continuous color scale",description:"How to add a color legend to your chart that uses a continuous color scale",img:"continuousColorLegend.png",alt:"Picture of a continuous color scale built with d3.js"},{link:"/heatmap#application",title:"Vaccination heatmap",description:"Reproduction of a famous vaccination heatmap using d3 and react",img:"heatmapVaccination.png",alt:"Picture of a heatmap showing the effect of vaccination, built with react and d3"},{link:"/violin-plot#bucket%20size",title:"Bucket size effect",description:"Interactive example showing the bucket size effect on a violin chart",img:"violin-bucket-size-effect.gif",alt:"GIF showing a violin plot with varying bucket size"},{link:"/correlogram",title:"Basic correlogram",description:"Learn how to build a correlogram with react and d3",img:"correlogramBasic.png",alt:"Picture of a correlogram built with react and d3"},{link:"/violin-plot#violin%20component",title:"Violin shape",description:"How to build the shape of a violin with SVG",img:"violinShape.png",alt:"Picture of a violin shape built with react and d3"},{link:"/violin-plot",title:"Boxplot to Violin plot",description:"Interactive example showing the difference between a boxplot and a violin",img:"boxplot-violin-transition.gif",alt:"GIF showing a mirror transition between a boxplot and a violin plot"},{link:"/barplot",title:"Basic barplot",description:"Most basic barplot built with React and d3",img:"barplot-basic.png",alt:"Picture of a horizontal barplot made with React and d3"},{link:"/violin-plot",title:"Basic violin plot",description:"Learn how to build a basic violin chart with d3 and react",img:"violinBasic.png",alt:"Picture of a basic violin chart built in react"},{link:"/violin-plot#bucket%20size",title:"Violin with variable bucket size",description:"A violin plot with a slider to change the bucket size in use",img:"violinBucketSize.png",alt:"Picture of a violin plot with variable bucket size"},{link:"/boxplot#box%20component",title:"Boxplot shape",description:"How to build a boxplot shape in SVG",img:"boxplotShape.png",alt:"Picture of a box component, allowing to build a boxplot later on"},{link:"/boxplot",title:"Basic boxplot",description:"How to build a basic boxplot with react",img:"boxplotBasic.png",alt:"Picture of a basic boxplot built with react and d3"},{link:"/example/histogram-small-multiple",title:"Small multiple",description:"Create one panel per group to show its distribution separately",img:"histogram-small-multiple.png",alt:"Picture of a histogram with small multiple built with react and d3.js"},{link:"/example/histogram-with-several-groups",title:"Multiple groups",description:"A histogram with <b>multiple</b> groups displayed on the same axis.",img:"histogram-with-several-groups.png",alt:"Picture of a histogram with multiple groups built with react and d3.js"},{link:"/density-plot",title:"Basic density plot",description:"Most basic density plot built with React and d3",img:"densityBasic.png",alt:"Picture of a basic density plot built with React and d3"},{link:"/density-plot#variations",title:"Density plot with multiple groups",description:"How to add several groups on the same density plot",img:"densityMultipleGroups.png",alt:"Picture of a density plot with multiple groups"},{link:"/ridgeline",title:"Basic ridgeline chart",description:"Most basic version of a ridgeline plot",img:"ridgelineBasic.png",alt:"Picture of a basic ridgeline chart built with react and d3"},{link:"/example/barplot-data-transition-animation",title:"Barplot dataset transition",description:"How to smoothly animate the transition between dataset",img:"barplotDatasetAnimation.gif",alt:"GIF of a data update on a React barplot"},{link:"/scatterplot",title:"Scatterplot Hover effect",description:"How to add a hover effect to highlight a group on a scatterplot",img:"scatterplotHoverEffect.gif",alt:"GIF of a scatterplot with hover effect"},{link:"/bubble-plot#transition",title:"Bubble plot data set transition",description:"How to smoothly animate the transition between dataset",img:"bubble-plot-dataset-transition.gif",alt:"GIF of a bubble plot smoothly transitioning data"},{link:"/example/barplot-stacked-horizontal",title:"Horizontal Stacked Barplot",description:"Represent group and subgroup values by stacking the data",img:"barplot-stacked-horizontal.png",alt:"Picture of a stacked barchart made with react and d3"},{link:"/example/barplot-stacked-vertical",title:"Vertical Stacked Barplot",description:"Represent group and subgroup values by stacking the data",img:"barplot-stacked-vertical.png",alt:"Picture of a vertical stacked barchart made with react and d3"}]},5102:function(t){t.exports={container:"graphLinkImage_container__6vbL1",title:"graphLinkImage_title__86b4Y"}},3187:function(t){t.exports={tooltip:"tooltip_tooltip__Fv96Y",right:"tooltip_right__lXq9G",left:"tooltip_left__hUc5l",bottom:"tooltip_bottom__Qzoh5",top:"tooltip_top__qDz28"}},3924:function(t){t.exports={tableOfContent:"table-of-content_tableOfContent__oi0XB",tocItem:"table-of-content_tocItem__fZBSX",tocItemActive:"table-of-content_tocItemActive__kiClt"}}},function(t){t.O(0,[2781,5660,358,9774,2888,179],(function(){return e=3332,t(t.s=e);var e}));var e=t.O();_N_E=e}]);