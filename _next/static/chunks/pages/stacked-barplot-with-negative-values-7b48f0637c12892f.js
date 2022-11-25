(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9216],{8703:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/stacked-barplot-with-negative-values",function(){return r(8086)}])},3485:function(e,t,r){"use strict";r.d(t,{U:function(){return o}});var i=r(5893),n=r(7294),o=function(e){var t=e.startOpen,r=e.title,o=e.children,s=e.toc,a=(0,n.useState)(t),l=a[0],c=a[1],d=l?"max-h-full":"max-h-0",h=l?"overflow-visible":"overflow-hidden";return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("h2",{className:"cursor-pointer",onClick:function(){return c(!l)},id:s,children:[l?(0,i.jsx)("span",{className:"text-purple-700 w-4 mr-2 hover:text-purple-900 inline-block",children:"-"}):(0,i.jsx)("span",{className:"text-purple-700 w-4 mr-2 hover:text-purple-900 inline-block",children:"+"}),r]}),(0,i.jsx)("div",{className:"transition-max-height ease-in duration-300  "+d+" "+h,children:o})]})}},7197:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var i=r(5893),n=(r(7294),r(6761)),o=r(1878),s=r(1664),a=o.c.filter((function(e){return"general"===e.family})).map((function(e){return e.logo}));function l(e){var t=e.chartLogo,r=e.caption,o=e.link,l=e.isAvailable,d=e.size,h=a.includes(t),u=l?"opacity-100":"opacity-20",p=l?"cursor-pointer":"cursor-not-allowed";return(0,i.jsx)(s.default,{href:l?o:"subscribe",children:(0,i.jsxs)("div",{className:"flex flex-col items-center",children:[(0,i.jsxs)("div",{style:{width:d,height:d},className:"relative mr-2 rounded-full "+u+" "+p,children:[(0,i.jsx)("div",{className:"absolute",children:(0,i.jsx)(n.Z,{chartLogo:t})}),h?(0,i.jsx)("div",{className:"absolute opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full z-30",children:(0,i.jsx)(c,{size:d})}):(0,i.jsx)("div",{style:{backgroundColor:"var(--react-gallery)"},className:"opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full rounded-full z-30",children:(0,i.jsx)("span",{className:"text-white text-4xl",children:"+"})})]}),(0,i.jsx)("p",{className:"font-light text-sm text-gray-600 "+u,children:r})]})})}var c=function(e){var t=e.size;return(0,i.jsx)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 100 100",className:"fill-current text-purple-800",children:(0,i.jsx)("path",{d:"M50,0 L100,20 L100,80 L50,100 L0,80 L0,20 Z"})})},d=r(3414),h={distribution:"Distribution",correlation:"Correlation",ranking:"Ranking",partOfAWhole:"Part Of A Whole",evolution:"Evolution",map:"Map",flow:"Flow",general:"General Knowledge"};function u(e){var t=e.chartFamily,r=o.c.filter((function(e){return e.family===t})).map((function(e,t){var r=(0,d.y)(e.reactURL);return(0,i.jsx)("div",{className:"flex flex-col items-center justify-center",children:(0,i.jsx)(l,{link:r,chartLogo:e.logo,caption:e.label,isAvailable:e.isAvailable,size:129})},t)}));return(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{className:t+"  mt-4 text-md border-b mb-2 border-gray-100 tracking-wider",children:null===h||void 0===h?void 0:h[t]}),(0,i.jsx)("div",{className:"flex flex-row justify-start flex-wrap",children:r})]})}},33:function(e,t,r){"use strict";r.d(t,{$:function(){return c}});var i=r(5893),n=r(7294),o=r(217),s=r(4893),a=r(5380),l=r(7975),c=function(e){var t=e.VizComponent,r=e.vizName,c=e.height,d=void 0===c?400:c,h=e.maxWidth,u=void 0===h?800:h,p=e.caption,g=(0,n.useState)(!1),x=g[0],m=g[1],f=(0,n.useRef)(null),v=(0,o.B)(f);return(0,i.jsx)("div",{style:{marginLeft:"-50vw",left:"50%"},className:"my-4 py-4 w-screen relative",children:x?(0,i.jsxs)("div",{className:"flex flex-col items-center justify-center w-full",children:[(0,i.jsx)("div",{style:{maxWidth:2e3},className:"w-full z-50",children:(0,i.jsx)(l.X,{vizName:r})}),(0,i.jsx)("div",{className:"flex justify-center mt-2",children:(0,i.jsx)(s.z,{size:"sm",onClick:function(){return m(!x)},children:"Hide Sandbox"})})]}):(0,i.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,i.jsx)("div",{className:"bg-gray-50 w-screen flex justify-center z-50",children:(0,i.jsx)("div",{style:{height:d,width:"100%",maxWidth:u},ref:f,children:(0,i.jsx)(t,{height:d,width:v.width})})}),(0,i.jsx)(a.Y,{children:p}),(0,i.jsx)("div",{className:"flex justify-center",children:(0,i.jsx)(s.z,{size:"sm",onClick:function(){return m(!x)},children:"Show code"})})]})})}},7975:function(e,t,r){"use strict";r.d(t,{X:function(){return n}});var i=r(5893),n=(r(7294),function(e){var t="https://codesandbox.io/embed/github/holtzy/react-graph-gallery/tree/main/viz/"+e.vizName+"?fontsize=14&hidenavigation=1&theme=dark&expanddevtools=0";return(0,i.jsx)("iframe",{src:t,style:{width:"100%",height:"500px",border:"solid",borderWidth:2,borderRadius:"4px",overflow:"hidden"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})})},1884:function(e,t,r){"use strict";r.d(t,{A:function(){return u}});var i=r(5893),n=r(3185),o=r(1261),s=r(7294),a=r(3924),l=r.n(a);function c(){var e=(0,s.useState)([]),t=e[0],r=e[1],n=(0,s.useState)(0),o=n[0],a=n[1];return(0,s.useEffect)((function(){var e=Array.from(document.querySelectorAll("h2"));r(e)}),[]),(0,s.useEffect)((function(){var e=function(){var e=t.map((function(e){return e.offsetTop-e.scrollTop+e.clientTop})),r=window.scrollY+150,i=e.reduce((function(e,t){return Math.abs(t-r)<Math.abs(e-r)?t:e}),0),n=e.findIndex((function(e){return e===i}));a(-1===n?0:n)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[t]),(0,i.jsx)("div",{className:l().tableOfContent,children:t.map((function(e,r){return(0,i.jsx)("p",{className:o===r?"".concat(l().tocItem," ").concat(l().tocItemActive):l().tocItem,onClick:function(e){e.preventDefault(),t[r].scrollIntoView({behavior:"smooth",block:"start",alignToTop:!0})},children:e.id.charAt(0).toUpperCase()+e.id.slice(1)},e.id)}))})}var d=r(8171),h=r(6978),u=function(e){var t=e.children,r=e.title,s=e.seoDescription;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d.A,{title:r,seoDescription:s}),(0,i.jsxs)("div",{className:"wrapper",children:[(0,i.jsx)(n.Z,{}),t]}),(0,i.jsx)(h.Z,{}),(0,i.jsx)("div",{className:"wrapper",children:(0,i.jsx)(o.Z,{})}),(0,i.jsx)(c,{})]})}},1687:function(e,t,r){"use strict";r.d(t,{J:function(){return o}});var i=r(5893),n=r(1664),o=function(e){var t=e.children,r=e.href,o=e.isFilled,s=e.size,a=void 0===s?"md":s,l=e.isFaded,c=r.startsWith("www")||r.startsWith("http"),d="font-normal rounded mr-1 cursor-pointer border-reactGallery border ";d+=o?" bg-reactGallery hover:bg-reactGallery text-white ":" bg-white hover:bg-reactGallery hover:text-white text-reactGallery ","sm"===a&&(d+="text-sm py-1 px-2 "),"md"===a&&(d+="text-md py-2 px-4 "),l&&(d+="opacity-60");var h=(0,i.jsx)("span",{className:d,children:t});return c?(0,i.jsx)("a",{href:r,children:h}):(0,i.jsx)(n.default,{href:r,passHref:!0,children:(0,i.jsx)("a",{children:h})})}},8807:function(e,t,r){"use strict";r.d(t,{Z:function(){return h}});var i=r(5893),n=(r(7294),r(1878)),o=r(3414),s=r(3919),a=r(1687),l=r(3187),c=r.n(l),d=function(e){var t=e.direction,r=e.text,n=e.children;return(0,i.jsx)("span",{className:c().tooltip+" "+c()[t],id:r,children:n})};function h(e){var t=e.title,r=e.description,l=e.chartType,c=e.showSectionLink,h=void 0!==c&&c,u=e.showInspirationLink,p=void 0===u||u,g=e.showD3GalleryLink,x=void 0===g||g,m=n.c.filter((function(e){return e.id===l}))[0];return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:"w-full pt-1 sm:pt-28 pb-20 ",children:[(0,i.jsx)("h1",{children:t}),(0,i.jsx)(s.r,{}),(0,i.jsx)("div",{className:"max-w-xxl py-2",children:(0,i.jsx)("p",{children:r})}),l&&(0,i.jsx)("span",{className:"text-gray-400 text-sm font-light",children:"Useful links"}),l&&(0,i.jsxs)("div",{className:"flex flex-row flex-wrap",children:[h&&(0,i.jsx)(d,{text:"kkkk",direction:"bottom",children:(0,i.jsx)(a.J,{href:(0,o.y)(m.reactURL),size:"sm",children:m.label+" section"})}),p&&(0,i.jsx)(d,{text:"Hundreds of stunning dataviz projects to gather inspiration",direction:"bottom",children:(0,i.jsx)(a.J,{href:"https://www.dataviz-inspiration.com/"+m.id,size:"sm",children:"inspiration"})}),x&&(0,i.jsx)(d,{text:"Pure d3 implementation, no React",direction:"bottom",children:(0,i.jsx)(a.J,{href:m.d3URL,size:"sm",children:"d3 gallery"})}),(0,i.jsx)(d,{text:"Dataviz theory about this chart",direction:"bottom",children:(0,i.jsx)(a.J,{href:m.dataToVizURL,isFilled:!0,size:"sm",children:"About this chart"})})]})]})})}},4893:function(e,t,r){"use strict";r.d(t,{z:function(){return n}});var i=r(5893),n=function(e){var t=e.children,r=e.onClick,n=e.isFilled,o=e.size,s=void 0===o?"md":o,a="rounded m-1 cursor-pointer border-reactGallery border ";return"sm"===s&&(a+="text-sm py-1 px-2"),"md"===s&&(a+="text-md py-2 px-4"),a+=n?" bg-reactGallery hover:bg-reactGallery text-white":" bg-white hover:bg-reactGallery hover:text-white text-reactGallery",(0,i.jsx)("button",{className:a,onClick:r,children:t})}},5380:function(e,t,r){"use strict";r.d(t,{Y:function(){return n}});var i=r(5893),n=function(e){var t=e.children;return(0,i.jsx)("p",{className:"text-sm text-gray-500 max-w-xs italic text-center mt-4 font-light",children:t})}},217:function(e,t,r){"use strict";r.d(t,{B:function(){return n}});var i=r(7294),n=function(e){var t=function(){return{width:e.current?e.current.offsetWidth:0,height:e.current?e.current.offsetHeight:0}},r=(0,i.useState)(t),n=r[0],o=r[1],s=function(){o(t())};return(0,i.useEffect)((function(){return window.addEventListener("resize",s),function(){return window.removeEventListener("resize",s)}}),[]),(0,i.useLayoutEffect)((function(){s()}),[]),n}},8086:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return N}});var i=r(5893),n=r(7294),o=r(1884),s=r(8807),a=r(6978),l=r(7197),c=r(3485),d=r(5380),h=r(33),u=r(1664),p=r(8355),g=[{x:"Jan",groupA:12,groupB:19,groupC:-9,groupD:2},{x:"Feb",groupA:16,groupB:21,groupC:-13,groupD:8},{x:"Mar",groupA:23,groupB:21,groupC:-24,groupD:9},{x:"Apr",groupA:38,groupB:34,groupC:25,groupD:23},{x:"May",groupA:42,groupB:46,groupC:34,groupD:26},{x:"Jun",groupA:34,groupB:42,groupC:32,groupD:26},{x:"Jul",groupA:2,groupB:34,groupC:21,groupD:27},{x:"Aug",groupA:21,groupB:32,groupC:-16,groupD:18},{x:"Sept",groupA:18,groupB:31,groupC:-18,groupD:12},{x:"Oct",groupA:12,groupB:21,groupC:-14,groupD:10},{x:"Nov",groupA:12,groupB:18,groupC:-14,groupD:10},{x:"Dec",groupA:2,groupB:8,groupC:4,groupD:10}],x=r(8875),m={top:30,right:30,bottom:50,left:50},f=function(e){var t=e.width,r=e.height,o=e.data,s=(0,n.useRef)(null),a=t-m.right-m.left,l=r-m.top-m.bottom,c=o.map((function(e){return String(e.x)})),d=x.knu().keys(["groupA","groupB","groupC","groupD"]).order(x.Qxt).offset(x.W$j)(o),h=(0,n.useMemo)((function(){return x.BYU().domain([-50,200]).range([l,0])}),[o,r]),u=(0,n.useMemo)((function(){return x.tiA().domain(c).range([0,a]).padding(.05)}),[o,t]),p=x.PKp().domain(c).range(["#e0ac2b","#e85252","#6689c6","#9a6fb0","#a53253"]);(0,n.useLayoutEffect)((function(){var e=x.Ys(s.current);e.selectAll("*").remove();var t=x.LLu(u);e.append("g").attr("transform","translate(0,"+l+")").call(t);var r=x.y4O(h);e.append("g").call(r)}),[u,h,l]);var g=d.map((function(e,t){return(0,i.jsx)("g",{children:e.map((function(t,r){return(0,i.jsx)("rect",{x:u(t.data.x),y:h(t[1]),height:h(t[0])-h(t[1]),width:u.bandwidth(),fill:p(e.key),opacity:1},r)}))},t)}));return(0,i.jsx)("div",{children:(0,i.jsxs)("svg",{width:t,height:r,children:[(0,i.jsx)("g",{width:a,height:l,transform:"translate(".concat([m.left,m.top].join(","),")"),children:g}),(0,i.jsx)("g",{width:a,height:l,ref:s,transform:"translate(".concat([m.left,m.top].join(","),")")})]})})},v=function(e){var t=e.width,r=void 0===t?700:t,n=e.height,o=void 0===n?400:n;return(0,i.jsx)(f,{data:g,width:r,height:o})},j=[{x:"Jan",groupA:12,groupB:19,groupC:-9,groupD:2},{x:"Feb",groupA:16,groupB:21,groupC:-13,groupD:8},{x:"Mar",groupA:23,groupB:21,groupC:-24,groupD:9},{x:"Apr",groupA:38,groupB:34,groupC:25,groupD:23},{x:"May",groupA:42,groupB:46,groupC:34,groupD:26},{x:"Jun",groupA:34,groupB:42,groupC:32,groupD:26},{x:"Jul",groupA:2,groupB:34,groupC:21,groupD:27},{x:"Aug",groupA:21,groupB:32,groupC:-16,groupD:18},{x:"Sept",groupA:18,groupB:31,groupC:-18,groupD:12},{x:"Oct",groupA:12,groupB:21,groupC:-14,groupD:10},{x:"Nov",groupA:12,groupB:18,groupC:-14,groupD:10},{x:"Dec",groupA:2,groupB:8,groupC:4,groupD:10}],w={top:30,right:30,bottom:50,left:50},b=function(e){var t=e.width,r=e.height,o=e.data,s=(0,n.useRef)(null),a=t-w.right-w.left,l=r-w.top-w.bottom,c=o.map((function(e){return String(e.x)})),d=x.knu().keys(["groupA","groupB","groupC","groupD"]).order(x.Qxt)(o),h=(0,n.useMemo)((function(){return x.BYU().domain([-50,200]).range([l,0])}),[o,r]),u=(0,n.useMemo)((function(){return x.tiA().domain(c).range([0,a]).padding(.2)}),[o,t]),p=x.PKp().domain(c).range(["#e0ac2b","#e85252","#6689c6","#9a6fb0","#a53253"]);(0,n.useLayoutEffect)((function(){var e=x.Ys(s.current);e.selectAll("*").remove();var t=x.LLu(u);e.append("g").attr("transform","translate(0,"+l+")").call(t);var r=x.y4O(h);e.append("g").call(r)}),[u,h,l]);var g=d.map((function(e,t){return(0,i.jsx)("g",{children:e.map((function(t,r){var n=t[0]>t[1];return(0,i.jsx)("rect",{x:u(t.data.x),y:h(n?t[0]:t[1]),height:n?h(t[1])-h(t[0]):h(t[0])-h(t[1]),width:u.bandwidth(),fill:p(e.key),opacity:1},r)}))},t)}));return(0,i.jsx)("div",{children:(0,i.jsxs)("svg",{width:t,height:r,children:[(0,i.jsx)("g",{width:a,height:l,transform:"translate(".concat([w.left,w.top].join(","),")"),children:g}),(0,i.jsx)("g",{width:a,height:l,ref:s,transform:"translate(".concat([w.left,w.top].join(","),")")})]})})},y=function(e){var t=e.width,r=void 0===t?700:t,n=e.height,o=void 0===n?400:n;return(0,i.jsx)(b,{data:j,width:r,height:o})},k=(0,i.jsxs)("p",{children:["Drawing a"," ",(0,i.jsx)("a",{href:"https://www.data-to-viz.com/graph/barplot.html",children:"stacked barplot"})," ","sounds like pretty basic task for somebody into dataviz. But it gets surprisingly tricky once the dataset includes ",(0,i.jsx)("b",{children:"negative values"}),". This post explains how to deal with it, suggesting several options coming together with some reproducible code examples."]});'\n<canvas style="width:200px; height:200px;" width="100px" height="100px">\n'.trim(),'\n<canvas style="width:300px; height:300px;" width="100px" height="100px">\n'.trim(),'\n<canvas style="width:100px; height:100px;" width="200px" height="200px">\n'.trim(),"\nreturn(\n  <div ref={chartRef}>\n    <MyChartComponent\n      height={chartSize.height}\n      width={chartSize.width}\n  </div>\n)\n".trim();function N(){return(0,i.jsxs)(o.A,{title:"Dealing with negative values on a stacked barplot",seoDescription:"How to deal with negative values on stacked barplot. A post describing the pros and cons of the 2 main options, together with some examples with d3.js code.",children:[(0,i.jsx)(s.Z,{title:"Dealing with negative values on a stacked barplot",description:k}),(0,i.jsxs)(c.U,{title:"\ud83c\udf54 Easy life: stacked barplot with positive values",startOpen:!0,children:[(0,i.jsxs)("div",{className:"grid grid-cols-1 sm:grid-cols-6 gap-8",children:[(0,i.jsxs)("div",{className:"col-span-4",children:[(0,i.jsxs)("p",{children:["Let's consider a company that has 3 employees: ",(0,i.jsx)("code",{children:"a"}),","," ",(0,i.jsx)("code",{children:"b"})," and ",(0,i.jsx)("code",{children:"c"}),". Each month those employees sell umbrellas and make money."]}),(0,i.jsx)("p",{children:"In January, they made 1, 1 and 2 dollars respectively. It's pretty easy to represent those sales as a stacked barplot!"}),(0,i.jsx)("p",{children:"There is even a bonus! The total height of those bars is 4. So is the value of the stack on the Y axis. We now know what's the total revenue of the company \ud83c\udf89!"})]}),(0,i.jsxs)("div",{className:"col-span-2 flex flex-col items-center justify-center",children:[(0,i.jsx)("img",{src:"/img/stacked-barplot-explanation-1.png"}),(0,i.jsx)(d.Y,{children:"Stacking positive values is straightforward"})]})]}),(0,i.jsx)("br",{}),(0,i.jsxs)("p",{children:["Now let's follow the same process for the 12 months of the year. That makes a stacked area barplot built with ",(0,i.jsx)("code",{children:"react"})," and"," ",(0,i.jsx)("code",{children:"d3.js"}),". If you need explanations for the code, please refer to the"," ",(0,i.jsx)("a",{href:"https://d3-graph-gallery.com/graph/barplot_stacked_basicWide.html",children:"d3.js gallery"})," ","or to the ",(0,i.jsx)(u.default,{href:"barplot",children:"barplot section"})," of the react gallery."]}),(0,i.jsx)("br",{}),(0,i.jsx)(h.$,{vizName:"BarplotStackedBasic",VizComponent:p.x,height:400,maxWidth:600,caption:"A stacked area chart with positive values only. Built with react and d3.js"}),(0,i.jsx)("br",{}),(0,i.jsx)("p",{children:"That's the end of the easy part. Now, let's say that sometimes employees spend more money than what they make. We now have some negative values in the dataset \ud83d\ude33. How can we deal with it?"})]}),(0,i.jsxs)(c.U,{title:"1\ufe0f\u20e3 Stacked barplot with negative values: the diverging strategy",startOpen:!0,children:[(0,i.jsxs)("div",{className:"grid grid-cols-1 sm:grid-cols-6 gap-8",children:[(0,i.jsxs)("div",{className:"col-span-4",children:[(0,i.jsxs)("p",{children:["We are in January but this time, employee ",(0,i.jsx)("code",{children:"A"})," lost 1$! \ud83d\ude25"]}),(0,i.jsx)("p",{children:"To represent this on the stack, we can add all the positive values on top of the chart, and all the negative ones below the 0 axis."}),(0,i.jsx)("p",{children:"It is still very easy to see how much each employee made in a glimpse!"}),(0,i.jsxs)("p",{children:["However, it is now ",(0,i.jsx)("b",{children:"impossible"})," to know what's the company revenue! Indeed, the total height of the bars is ",(0,i.jsx)("code",{children:"4"}),", the value on the y axis is ",(0,i.jsx)("code",{children:"3"}),", but the real revenue is 1 + 2 - 1 = ",(0,i.jsx)("code",{children:"2"}),"!"]})]}),(0,i.jsxs)("div",{className:"col-span-2 flex flex-col items-center justify-center",children:[(0,i.jsx)("img",{src:"/img/stacked-barplot-explanation-2.png"}),(0,i.jsx)(d.Y,{children:"Stacking with negative values with all negative values below the 0 axis"})]})]}),(0,i.jsx)("br",{}),(0,i.jsxs)("p",{children:["Using almost the same code we can build the stacked barplot including those negative values. Note that when stacking the data with the"," ",(0,i.jsx)("code",{children:"stack()"})," function of d3, the specific"," ",(0,i.jsx)("code",{children:"stackOffsetDiverging"})," offset parameter must be passed, handling all the work for us (",(0,i.jsx)("a",{href:"https://github.com/d3/d3-shape#stack-offsets",children:"doc"}),")."]}),(0,i.jsx)("br",{}),(0,i.jsx)(h.$,{vizName:"BarplotStackedNegativeDivergingBasic",VizComponent:v,height:400,maxWidth:700,caption:"With the diverging strategy, all negative values are located under the 0 baseline."}),(0,i.jsx)("br",{}),(0,i.jsx)("p",{children:"Let's recap the pros and cons of this diverging option:"}),(0,i.jsxs)("div",{className:"",children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{className:"px-2 bg-green-400 rounded-md text-white w-16 text-md",children:"Pros"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"Easy to read the value of each item"}),(0,i.jsx)("li",{children:"Obvious what's negative and what's positive"})]})]}),(0,i.jsx)("br",{}),(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{className:"px-2 bg-red-400 rounded-md text-white w-16 text-md",children:"Cons"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"Impossible to know the total value of each stack"}),(0,i.jsx)("li",{children:"A series can jump from the bottom to the top of the chart and is thus hard to follow"})]})]})]})]}),(0,i.jsxs)(c.U,{title:"2\ufe0f\u20e3 Stacked barplot with negative values: the overlapping strategy",startOpen:!0,children:[(0,i.jsxs)("div",{className:"col-span-4",children:[(0,i.jsx)("p",{children:"Another strategy can be applied to stack the items including negative values."}),(0,i.jsx)("p",{children:"Items can be added one by one, with rectangles going up when values are positive and going down when values are negative."})]}),(0,i.jsxs)("div",{className:"col-span-2 flex flex-col items-center justify-center",children:[(0,i.jsx)("img",{src:"/img/stacked-barplot-explanation-4.png"}),(0,i.jsx)(d.Y,{children:"Stacking items by overlapping the items on top of each other."})]}),(0,i.jsx)("br",{}),(0,i.jsx)("p",{children:"It's important to understand that here, the item order is important. We will get very different results depending on the order since not all groups are visible."}),(0,i.jsx)("br",{}),(0,i.jsx)(h.$,{vizName:"BarplotStackedNegativeOverlappingDemo",VizComponent:y,height:400,maxWidth:700,caption:"With the overlapping strategy items are drawn successively, going up and down and overlapping if necessary"}),(0,i.jsx)("br",{}),(0,i.jsx)("p",{children:"Let's recap the pros and cons of this diverging option:"}),(0,i.jsxs)("div",{className:"",children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{className:"px-2 bg-green-400 rounded-md text-white w-16 text-md",children:"Pros"}),(0,i.jsx)("ul",{children:(0,i.jsx)("li",{children:"Depending on the group order, the Y value can reflect the sum of the items. But it's not guarantee."})})]}),(0,i.jsx)("br",{}),(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{className:"px-2 bg-red-400 rounded-md text-white w-16 text-md",children:"Cons"}),(0,i.jsx)("ul",{children:(0,i.jsx)("li",{children:"Groups overlap each other. Information is hidden. Chart is unreadable"})})]})]})]}),(0,i.jsxs)(c.U,{title:"Conclusion",startOpen:!0,children:[(0,i.jsxs)("p",{children:["In my opinion the first option (",(0,i.jsx)("b",{children:"diverging"}),") makes much more sense than the second one (",(0,i.jsx)("b",{children:"overlapping"}),"). The cons are very limited:"]}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"It is true that the net total value is not available. But if that's what interests you, you don't have to split the dataset by subgroups, just create a line chart with a single line!"}),(0,i.jsx)("li",{children:"Having a group flipping from top to bottom is indeed annoying. However, the hover effect that is included allows to quickly see what happens for a specific group."})]}),(0,i.jsx)("br",{}),(0,i.jsx)("p",{children:"It's also important to note that most dataviz tools choosed this approach. Here is an example using the same dataset using the ggplot2 library."}),(0,i.jsx)("br",{}),(0,i.jsxs)("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-8 ",children:[(0,i.jsx)("img",{src:"/img/stacked-barchart-ggplot2.png"}),(0,i.jsx)("img",{src:"/img/stacked-barchart-datawrapper.png"})]}),(0,i.jsx)("div",{className:"w-100 flex flex-row justify-center",children:(0,i.jsx)(d.Y,{children:"Same dataset that includes negative values plotted with ggplot2 (left) and data wrapper (right)"})}),(0,i.jsx)("br",{}),(0,i.jsx)("p",{children:"Last but not least, I really like this example by chartio that fix the non available total issue by adding a line on top of the stacked barchart to show the total:"}),(0,i.jsx)("br",{}),(0,i.jsx)("img",{src:"/img/stacked-barchart-chartio.png"}),(0,i.jsx)("div",{className:"w-100 flex flex-row justify-center",children:(0,i.jsx)(d.Y,{children:"Chartio displays the total of each timestamp using a line chart on top of the stacked items."})})]}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)("hr",{className:"full-bleed bord er bg-gray-200 mb-3 mt-10"}),(0,i.jsx)(l.Z,{chartFamily:"ranking"}),(0,i.jsx)("div",{className:"mt-20"}),(0,i.jsx)(a.Z,{})]})}},8355:function(e,t,r){"use strict";r.d(t,{x:function(){return c}});var i=r(5893),n=[{x:"Jan",groupA:12,groupB:19,groupC:9,groupD:2},{x:"Feb",groupA:16,groupB:21,groupC:13,groupD:8},{x:"Mar",groupA:23,groupB:21,groupC:24,groupD:9},{x:"Apr",groupA:38,groupB:34,groupC:25,groupD:23},{x:"May",groupA:42,groupB:46,groupC:34,groupD:26},{x:"Jun",groupA:34,groupB:42,groupC:32,groupD:26},{x:"Jul",groupA:2,groupB:34,groupC:21,groupD:27},{x:"Aug",groupA:21,groupB:32,groupC:16,groupD:18},{x:"Sept",groupA:18,groupB:31,groupC:18,groupD:12},{x:"Oct",groupA:12,groupB:21,groupC:14,groupD:10},{x:"Nov",groupA:12,groupB:18,groupC:14,groupD:10},{x:"Dec",groupA:2,groupB:8,groupC:4,groupD:10}],o=r(7294),s=r(8875),a={top:30,right:30,bottom:50,left:50},l=function(e){var t=e.width,r=e.height,n=e.data,l=(0,o.useRef)(null),c=t-a.right-a.left,d=r-a.top-a.bottom,h=n.map((function(e){return String(e.x)})),u=s.knu().keys(["groupA","groupB","groupC","groupD"]).order(s.Qxt)(n),p=(0,o.useMemo)((function(){return s.BYU().domain([0,200]).range([d,0])}),[n,r]),g=(0,o.useMemo)((function(){return s.tiA().domain(h).range([0,c]).padding(.05)}),[n,t]),x=s.PKp().domain(h).range(["#e0ac2b","#e85252","#6689c6","#9a6fb0","#a53253"]);(0,o.useLayoutEffect)((function(){var e=s.Ys(l.current);e.selectAll("*").remove();var t=s.LLu(g);e.append("g").attr("transform","translate(0,"+d+")").call(t);var r=s.y4O(p);e.append("g").call(r)}),[g,p,d]);var m=u.map((function(e,t){return(0,i.jsx)("g",{children:e.map((function(t,r){return(0,i.jsx)("rect",{x:g(t.data.x),y:p(t[1]),height:p(t[0])-p(t[1]),width:g.bandwidth(),fill:x(e.key),opacity:.9},r)}))},t)}));return(0,i.jsx)("div",{children:(0,i.jsxs)("svg",{width:t,height:r,children:[(0,i.jsx)("g",{width:c,height:d,transform:"translate(".concat([a.left,a.top].join(","),")"),children:m}),(0,i.jsx)("g",{width:c,height:d,ref:l,transform:"translate(".concat([a.left,a.top].join(","),")")})]})})},c=function(e){var t=e.width,r=void 0===t?700:t,o=e.height,s=void 0===o?400:o;return(0,i.jsx)(l,{data:n,width:r,height:s})}},3187:function(e){e.exports={tooltip:"tooltip_tooltip__Fv96Y",right:"tooltip_right__lXq9G",left:"tooltip_left__hUc5l",bottom:"tooltip_bottom__Qzoh5",top:"tooltip_top__qDz28"}},3924:function(e){e.exports={tableOfContent:"table-of-content_tableOfContent__oi0XB",tocItem:"table-of-content_tocItem__fZBSX",tocItemActive:"table-of-content_tocItemActive__kiClt"}}},function(e){e.O(0,[8109,358,9774,2888,179],(function(){return t=8703,e(e.s=t);var t}));var t=e.O();_N_E=t}]);