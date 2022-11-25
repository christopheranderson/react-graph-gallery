(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[370],{4142:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/barplot",function(){return n(3946)}])},2173:function(e,t,n){"use strict";n.d(t,{r:function(){return l}});var r=n(5893),i=n(1664),a=n(1878),o=n(3359),s=n(8193),l=function(e){var t=e.chartId,n=a.c.filter((function(e){return e.id===t}))[0].label;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h2",{id:"responsiveness",children:"Responsive "+n+" with react"}),(0,r.jsxs)("p",{children:["The component above is not responsive. It expects 2 props called"," ",(0,r.jsx)("code",{children:"width"})," and ",(0,r.jsx)("code",{children:"height"})," and will render a ",n," of those dimensions."]}),(0,r.jsxs)("p",{children:["Making the ",n," responsive requires adding a ",(0,r.jsx)("b",{children:"wrapper"})," component that gets the dimension of the parent ",(0,r.jsx)("code",{children:"div"}),", and listening to a potential dimension change. This is possible thanks to a hook called"," ",(0,r.jsx)("code",{children:"useDimensions"})," that will do the job for us."]}),(0,r.jsx)(o.U,{startOpen:!1,title:"useDimensions: a hook to make your viz responsive",children:(0,r.jsx)(s.d,{code:d})}),(0,r.jsxs)("p",{children:["I'm in the process of writing a complete blog post on the topic."," ",(0,r.jsx)(i.default,{href:"/subscribe",children:"Subscribe to the project"})," to know when it's ready."]}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{})]})},d='\nexport const useDimensions = (targetRef: React.RefObject<HTMLDivElement>) => {\n\n  const getDimensions = () => {\n    return {\n      width: targetRef.current ? targetRef.current.offsetWidth : 0,\n      height: targetRef.current ? targetRef.current.offsetHeight : 0\n    };\n  };\n\n  const [dimensions, setDimensions] = useState(getDimensions);\n\n  const handleResize = () => {\n    setDimensions(getDimensions());\n  };\n\n  useEffect(() => {\n    window.addEventListener("resize", handleResize);\n    return () => window.removeEventListener("resize", handleResize);\n  }, []);\n\n  useLayoutEffect(() => {\n    handleResize();\n  }, []);\n\n  return dimensions;\n}\n'.trim()},3359:function(e,t,n){"use strict";n.d(t,{U:function(){return i}});var r=n(5893),i=function(e){e.startOpen;var t=e.title,n=e.children;return(0,r.jsxs)("details",{className:"bg-gray-50 py-2 px-4 rounded-md my-2",children:[(0,r.jsx)("summary",{className:"cursor-pointer",children:t}),n]})}},3946:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y}});var r=n(5893),i=n(7294),a=n(1884),o=n(8807),s=n(7197),l=n(8193),d=n(33),h=n(1664),c=[{name:"Mark",value:90},{name:"Robert",value:12},{name:"Emily",value:34},{name:"Marion",value:53},{name:"Nicolas",value:98},{name:"M\xe9lanie",value:23},{name:"Gabriel",value:18},{name:"Jean",value:104},{name:"Paul",value:2}],u=n(8875);function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,i=!1,a=void 0;try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(l){i=!0,a=l}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var g={top:30,right:30,bottom:30,left:30},x=function(e){var t=e.width,n=e.height,a=e.data,o=t-g.right-g.left,s=n-g.top-g.bottom,l=a.sort((function(e,t){return t.value-e.value})).map((function(e){return e.name})),d=(0,i.useMemo)((function(){return u.tiA().domain(l).range([0,s]).padding(.3)}),[a,n]),h=(0,i.useMemo)((function(){var e=p(u.Wem(a.map((function(e){return e.value}))),2),t=(e[0],e[1]);return u.BYU().domain([0,t||10]).range([0,o])}),[a,t]),c=a.map((function(e,t){var n=d(e.name);return void 0===n?null:(0,r.jsxs)("g",{children:[(0,r.jsx)("rect",{x:h(0),y:d(e.name),width:h(e.value),height:d.bandwidth(),opacity:.7,stroke:"#9d174d",fill:"#9d174d",fillOpacity:.3,strokeWidth:1,rx:1}),(0,r.jsx)("text",{x:h(e.value)-7,y:n+d.bandwidth()/2,textAnchor:"end",alignmentBaseline:"central",fontSize:12,opacity:h(e.value)>90?1:0,children:e.value}),(0,r.jsx)("text",{x:h(0)+7,y:n+d.bandwidth()/2,textAnchor:"start",alignmentBaseline:"central",fontSize:12,children:e.name})]},t)})),x=h.ticks(5).slice(1).map((function(e,t){return(0,r.jsxs)("g",{children:[(0,r.jsx)("line",{x1:h(e),x2:h(e),y1:0,y2:s,stroke:"#808080",opacity:.2}),(0,r.jsx)("text",{x:h(e),y:s+10,textAnchor:"middle",alignmentBaseline:"central",fontSize:9,stroke:"#808080",opacity:.8,children:e})]},t)}));return(0,r.jsx)("div",{children:(0,r.jsx)("svg",{width:t,height:n,children:(0,r.jsxs)("g",{width:o,height:s,transform:"translate(".concat([g.left,g.top].join(","),")"),children:[x,c]})})})},m=function(e){var t=e.width,n=void 0===t?700:t,i=e.height,a=void 0===i?400:i;return(0,r.jsx)(x,{data:c,width:n,height:a})},f=n(3440),j=n(2173),v=n(3560),b=n(8355),w=(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("p",{children:["A ",(0,r.jsx)("a",{href:"https://www.data-to-viz.com/graph/barplot.html",children:"barplot"})," ","displays a numeric value for several groups of a dataset using rectangles. This page is a step-by-step guide on how to build your own barplot for the web, using ",(0,r.jsx)("a",{href:"https://reactjs.org/",children:"React"})," and"," ",(0,r.jsx)("a",{href:"https://d3-graph-gallery.com/barplot.html",children:"D3.js"}),"."]}),(0,r.jsxs)("p",{children:["It starts with very basic concepts like ",(0,r.jsx)("b",{children:"data structure"}),","," ",(0,r.jsx)("b",{children:"scales"})," and svg rectangle ",(0,r.jsx)("b",{children:"rendering"}),". It then shows how to add interactivity to the chart with ",(0,r.jsx)("b",{children:"hover effects"}),". Last but not least it explains how to build variations like the ",(0,r.jsx)("b",{children:"stacked barplot"}),"."]})]});function y(){return(0,r.jsxs)(a.A,{title:"Barplot with React",seoDescription:"How to build a barplot with React and D3.js. A set of re-usable components",children:[(0,r.jsx)(o.Z,{title:"Barplot",description:w,chartType:"barplot"}),(0,r.jsx)("h2",{id:"data",children:"The Data"})," ",(0,r.jsxs)("p",{children:["The dataset required to build a barplot is usually an array where each item is an object providing the ",(0,r.jsx)("code",{children:"name"})," and the"," ",(0,r.jsx)("code",{children:"value"})," of the group."]}),(0,r.jsx)("br",{}),(0,r.jsx)("p",{children:"Here is a minimal example"}),(0,r.jsx)(l.d,{code:k}),(0,r.jsxs)("p",{children:["Note: if your data is in ",(0,r.jsx)("code",{children:".csv"})," formart, you can translate it thanks to the ",(0,r.jsx)("code",{children:"d3.csv()"})," function as suggested"," ",(0,r.jsx)("a",{href:"https://d3-graph-gallery.com/graph/barplot_horizontal.html",children:"here"}),"."]}),(0,r.jsx)("h2",{id:"skeleton",children:"Component skeleton"}),(0,r.jsxs)("p",{children:["The goal here is to create a ",(0,r.jsx)("code",{children:"Barplot"})," component that will be stored in a ",(0,r.jsx)("code",{children:"Barplot.tsx"})," file. This component requires 3 props to render: a ",(0,r.jsx)("code",{children:"width"}),", a ",(0,r.jsx)("code",{children:"height"}),", and some"," ",(0,r.jsx)("code",{children:"data"}),"."]}),(0,r.jsxs)("p",{children:["The shape of the ",(0,r.jsx)("code",{children:"data"})," is described above. The"," ",(0,r.jsx)("code",{children:"width"})," and ",(0,r.jsx)("code",{children:"height"})," will be used to rendering a"," ",(0,r.jsx)("code",{children:"svg"})," element in the DOM, in which we will insert the barplot."]}),(0,r.jsxs)("p",{children:["To put it in a nutshell, that's the skeleton of our ",(0,r.jsx)("code",{children:"Barplot"})," ","component:"]}),(0,r.jsx)(l.d,{code:B}),(0,r.jsxs)("p",{children:["It's fundamental to understand that with this code organization, d3.js will be used to prepare the svg ",(0,r.jsx)("code",{children:"circle"}),", but it's react that will render them in the ",(0,r.jsx)("code",{children:"return()"})," statement. We won't use d3 methods like ",(0,r.jsx)("code",{children:"append"})," that you can find in usual"," ",(0,r.jsx)("a",{href:"https://d3-graph-gallery.com/barplot.html",children:"d3.js examples"}),"."]}),(0,r.jsx)("h2",{id:"Scales",children:"Scales"}),(0,r.jsxs)("p",{children:["A ",(0,r.jsx)("b",{children:"scale"})," is a function that transforms a ",(0,r.jsx)("b",{children:"dimension"})," (like our ",(0,r.jsx)("code",{children:"value"})," or our group ",(0,r.jsx)("code",{children:"name"}),") in a"," ",(0,r.jsx)("b",{children:"position"})," in pixels."]}),(0,r.jsxs)("p",{children:["Building a barplot requires 2 scales of 2 kinds. The first will transform the group ",(0,r.jsx)("code",{children:"value"})," in a bar length. The second will transform the group ",(0,r.jsx)("code",{children:"name"})," in a position."]}),(0,r.jsx)("h3",{children:"\u2192 Linear scale for the bar length"}),(0,r.jsxs)("p",{children:["D3.js comes with a handful set of"," ",(0,r.jsx)("a",{href:"https://github.com/d3/d3-scale",children:"predefined scales"}),"."," ",(0,r.jsx)("code",{children:"scaleLinear"})," is what we need for the bar length. Here is a quick overview on how to build and use a linear scale:"]}),(0,r.jsx)(l.d,{code:D}),(0,r.jsxs)("p",{children:["Since we are building a ",(0,r.jsx)("b",{children:"horizontal"})," barplot here, this scale will be used the the ",(0,r.jsx)("b",{children:"X"})," axis."]}),(0,r.jsxs)("p",{children:["To dig more into d3 scales, visit this"," ",(0,r.jsx)("a",{href:"https://d3-graph-gallery.com/graph/custom_axis.html",children:"dedicated page"}),". It's a crucial concept that will be used everywhere in this website."]}),(0,r.jsx)("h3",{children:"\u2192 Band scale for the group position"}),(0,r.jsx)("p",{children:"to do"}),(0,r.jsx)("h2",{id:"basic barplot",children:"Basic barplot"}),(0,r.jsxs)("p",{children:["There is nothing really tricky when it comes to build a basic barplot with react, all is pretty close to the"," ",(0,r.jsx)("a",{href:"https://d3-graph-gallery.com/barplot",children:"d3-only examples"}),"."]}),(0,r.jsxs)("p",{children:["First of all you probably want to add some margins around the dimensions provided in the component properties as described"," ",(0,r.jsx)(h.default,{href:"/build-axis-with-react",children:"here"}),"."]}),(0,r.jsxs)("p",{children:["Then, since we're building a horizontal barchart here the Y axis is showing groups. It means we can build it using the handy"," ",(0,r.jsx)("code",{children:"d3.scaleBand()"})," function. Don't forget to pass a"," ",(0,r.jsx)("code",{children:"padding"})," to it to have some space between bars. Note that it makes sense to wrap the axis creation in a ",(0,r.jsx)("code",{children:"useMemo"})," hook. You don't want to recompute this axis if only the ",(0,r.jsx)("code",{children:"width"})," ","changes (like if the window is resized for instance)"]}),(0,r.jsx)(d.$,{vizName:"BarplotBasic",VizComponent:m,height:400,maxWidth:600,caption:"Most basic barplot built with d3.js for scales, and react for rendering"}),(0,r.jsx)(j.r,{chartId:"barplot"}),(0,r.jsx)("h2",{id:"transition",children:"Transition"}),(0,r.jsx)("p",{children:"How to animation the transition between dataset"}),(0,r.jsx)(d.$,{vizName:"BarplotDatasetTransition",VizComponent:v.P,height:400,maxWidth:600,caption:"Most basic barplot built with d3.js for scales, and react for rendering"}),(0,r.jsx)(f.Z,{chartId:"barplot"}),(0,r.jsx)("h2",{id:"basic barplot",children:"Stacking"}),(0,r.jsx)("p",{children:"description"}),(0,r.jsx)(d.$,{vizName:"BarplotStackedBasic",VizComponent:b.x,height:400,maxWidth:600,caption:"Most basic barplot built with d3.js for scales, and react for rendering"}),(0,r.jsx)(f.Z,{chartId:"barplot"}),(0,r.jsx)("h2",{id:"vertical",children:"Vertical barplot"})," ",(0,r.jsx)("p",{children:"The vertical option is less common since it makes is much harder to read the labels. But if you really need it, it is just a matter of swaping the X and Y axes of the previous example. Here is a working version."}),(0,r.jsx)("div",{className:"full-bleed border-t h-0 bg-gray-100 mb-3 mt-24"}),(0,r.jsx)(s.Z,{chartFamily:"ranking"}),(0,r.jsx)("div",{className:"mt-20"})]})}var k='\nconst data = [\n  {name:"Mark", value: 90},\n  {name:"Robert", value: 12},\n  {name:"Emily", value: 34},\n  {name:"Marion", value: 53},\n  {name:"Nicolas", value: 98},\n]\n'.trim(),B='\nimport * as d3 from "d3"; // we will need d3.js\n\ntype BarplotProps = {\n  width: number;\n  height: number;\n  data: { name: string; y: number }[];\n};\n\nexport const Barplot = ({ width, height, data }: BarplotProps) => {\n\n  // read the data\n  // do some stuff with d3\n  // compute all the <rect>\n\n  return (\n    <div>\n      <svg width={width} height={height}>\n        // render all the <rect>\n      </svg>\n    </div>\n  );\n};\n'.trim(),D="\nconst scale = d3.scaleLinear()\n  .domain([0, 10]) // data goes from 0 to 10\n  .range([0, 200]); // axis goes from 0 to 200\n\nscale(0); // 0 -> item with a value of 0 will have a bar of length 0\nscale(5); // 100 -> bar of length 100\nscale(10); // 200 -> bar of length 200\n".trim()},3560:function(e,t,n){"use strict";n.d(t,{P:function(){return x}});var r=n(5893),i=n(7294),a=[{name:"Mark",value:90},{name:"Robert",value:12},{name:"Emily",value:34},{name:"Marion",value:53},{name:"Nicolas",value:98},{name:"M\xe9lanie",value:23},{name:"Gabriel",value:18},{name:"Jean",value:104},{name:"Paul",value:2}],o=[{name:"Mark",value:9},{name:"Robert",value:19},{name:"Emily",value:31},{name:"Marion",value:23},{name:"Nicolas",value:38},{name:"M\xe9lanie",value:123},{name:"Gabriel",value:4},{name:"Jean",value:23},{name:"Paul",value:22}],s=n(8875),l=n(1472);function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,i=!1,a=void 0;try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(l){i=!0,a=l}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var h={top:30,right:30,bottom:30,left:30},c=function(e){var t=e.width,n=e.height,a=e.data,o=t-h.right-h.left,l=n-h.top-h.bottom,c=a.map((function(e){return e.name})),p=(0,i.useMemo)((function(){return s.tiA().domain(c).range([0,l]).padding(.3)}),[a,n]),g=(0,i.useMemo)((function(){var e=d(s.Wem(a.map((function(e){return e.value}))),2),t=(e[0],e[1]);return s.BYU().domain([0,t||10]).range([0,o])}),[a,t]),x=a.map((function(e,t){return(0,r.jsx)(u,{name:e.name,value:e.value,barHeight:p.bandwidth(),barWidth:g(e.value),x:g(0),y:p(e.name)},t)}));return(0,r.jsx)("div",{children:(0,r.jsx)("svg",{width:t,height:n,children:(0,r.jsx)("g",{width:o,height:l,transform:"translate(".concat([h.left,h.top].join(","),")"),children:x})})})},u=function(e){var t=e.name,n=e.value,i=e.barHeight,a=e.barWidth,o=e.x,s=e.y,d=(0,l.useSpring)({to:{value:n,barWidth:a,opacity:a>80?1:0},config:{friction:50}});return void 0===s?null:(0,r.jsxs)("g",{children:[(0,r.jsx)(l.q.rect,{x:o,y:s,width:d.barWidth,height:i,opacity:.7,stroke:"#9d174d",fill:"#9d174d",fillOpacity:.3,strokeWidth:1,rx:1}),(0,r.jsx)(l.q.text,{x:d.barWidth.to((function(e){return e-7})),y:s+i/2,textAnchor:"end",alignmentBaseline:"central",fontSize:12,opacity:d.opacity,children:d.value.to((function(e){return e.toFixed(0)}))}),(0,r.jsx)(l.q.text,{x:o+7,y:s+i/2,textAnchor:"start",alignmentBaseline:"central",fontSize:12,children:t})]})},p={border:"1px solid #9a6fb0",borderRadius:"3px",padding:"4px 8px",margin:"10px 2px",fontSize:14,color:"#9a6fb0",opacity:.7},g=function(e){var t=e.width,n=e.height,s=(0,i.useState)(a),l=s[0],d=s[1];return(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{style:{height:50},children:[(0,r.jsx)("button",{style:p,onClick:function(){return d(a)},children:"Data 1"}),(0,r.jsx)("button",{style:p,onClick:function(){return d(o)},children:"Data 2"})]}),(0,r.jsx)(c,{width:t,height:n-50,data:l})]})},x=function(e){var t=e.width,n=void 0===t?700:t,i=e.height,a=void 0===i?400:i;return(0,r.jsx)(g,{width:n,height:a})}},8355:function(e,t,n){"use strict";n.d(t,{x:function(){return d}});var r=n(5893),i=[{x:"Jan",groupA:12,groupB:19,groupC:9,groupD:2},{x:"Feb",groupA:16,groupB:21,groupC:13,groupD:8},{x:"Mar",groupA:23,groupB:21,groupC:24,groupD:9},{x:"Apr",groupA:38,groupB:34,groupC:25,groupD:23},{x:"May",groupA:42,groupB:46,groupC:34,groupD:26},{x:"Jun",groupA:34,groupB:42,groupC:32,groupD:26},{x:"Jul",groupA:2,groupB:34,groupC:21,groupD:27},{x:"Aug",groupA:21,groupB:32,groupC:16,groupD:18},{x:"Sept",groupA:18,groupB:31,groupC:18,groupD:12},{x:"Oct",groupA:12,groupB:21,groupC:14,groupD:10},{x:"Nov",groupA:12,groupB:18,groupC:14,groupD:10},{x:"Dec",groupA:2,groupB:8,groupC:4,groupD:10}],a=n(7294),o=n(8875),s={top:30,right:30,bottom:50,left:50},l=function(e){var t=e.width,n=e.height,i=e.data,l=(0,a.useRef)(null),d=t-s.right-s.left,h=n-s.top-s.bottom,c=i.map((function(e){return String(e.x)})),u=o.knu().keys(["groupA","groupB","groupC","groupD"]).order(o.Qxt)(i),p=(0,a.useMemo)((function(){return o.BYU().domain([0,200]).range([h,0])}),[i,n]),g=(0,a.useMemo)((function(){return o.tiA().domain(c).range([0,d]).padding(.05)}),[i,t]),x=o.PKp().domain(c).range(["#e0ac2b","#e85252","#6689c6","#9a6fb0","#a53253"]);(0,a.useLayoutEffect)((function(){var e=o.Ys(l.current);e.selectAll("*").remove();var t=o.LLu(g);e.append("g").attr("transform","translate(0,"+h+")").call(t);var n=o.y4O(p);e.append("g").call(n)}),[g,p,h]);var m=u.map((function(e,t){return(0,r.jsx)("g",{children:e.map((function(t,n){return(0,r.jsx)("rect",{x:g(t.data.x),y:p(t[1]),height:p(t[0])-p(t[1]),width:g.bandwidth(),fill:x(e.key),opacity:.9},n)}))},t)}));return(0,r.jsx)("div",{children:(0,r.jsxs)("svg",{width:t,height:n,children:[(0,r.jsx)("g",{width:d,height:h,transform:"translate(".concat([s.left,s.top].join(","),")"),children:m}),(0,r.jsx)("g",{width:d,height:h,ref:l,transform:"translate(".concat([s.left,s.top].join(","),")")})]})})},d=function(e){var t=e.width,n=void 0===t?700:t,a=e.height,o=void 0===a?400:a;return(0,r.jsx)(l,{data:i,width:n,height:o})}}},function(e){e.O(0,[8109,5660,1472,358,5443,9774,2888,179],(function(){return t=4142,e(e.s=t);var t}));var t=e.O();_N_E=t}]);