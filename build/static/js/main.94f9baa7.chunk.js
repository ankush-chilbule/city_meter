(this.webpackJsonpcitymeter=this.webpackJsonpcitymeter||[]).push([[0],{129:function(e,t,a){e.exports=a(329)},134:function(e,t,a){},135:function(e,t,a){e.exports=a.p+"static/media/logo.25bf045c.svg"},136:function(e,t,a){},137:function(e,t,a){},329:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(123),o=a.n(l),c=(a(134),a(135),a(136),a(137),a(30)),i=a(13),s=function(){return r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(c.b,{to:"/",className:"text_reversed"},"City Meter")),r.a.createElement("li",null,r.a.createElement(c.b,{to:"/ward",className:"text_reversed"},"Ward Meter"))))},d=a(29),u=a.n(d),m=a(126),p=a(43),h=a(44),g=a(46),_=a(45),b=a(47);a(160),a(166);function v(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function E(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?v(Object(a),!0).forEach((function(t){Object(m.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):v(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var y=r.a.createContext(),f=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(g.a)(this,(e=Object(_.a)(t)).call.apply(e,[this].concat(r)))).state={name:"Rahul",current:"hospital",aqi:[{Wards:"Aundh-Baner",AQI:.042248,status:"unhealthy for sensitive groups"},{Wards:"Kothrud-Bawdhan",AQI:.042820278,status:"unhealthy for sensitive groups"},{Wards:"Tilak Road",AQI:.04064,status:"unhealthy for sensitive groups"},{Wards:"Warje-Karvenagar",AQI:.044217323,status:"unhealthy for sensitive groups"}],complaint:[{Wards:"Aundh-Baner",2017:3450,2018:4857,"Percent increase":17.350884,Index:1.7350884},{Wards:"Ghole Road",2017:2139,2018:3401,"Percent increase":22.533062,Index:2.2533062},{Wards:"Kothrud-Bawdhan",2017:2057,2018:2322,"Percent increase":7.315185,Index:.7315185},{Wards:"Warje-Karvenagar",2017:1372,2018:3046,"Percent increase":34.400483,Index:3.4400483}],swm:[{Wards:"Aundh-Baner",door_to_door_collection_percentage:2.992,gate_to_gate_collection_percentage:2.992,total_waste_collected_in_tons:86.4,total_waste_generated_in_tons:100.8,"Positive/Negative Index":-14.28571429,Normalized:7.320020299},{Wards:"Kothrud-Bawdhan",door_to_door_collection_percentage:435,gate_to_gate_collection_percentage:435,total_waste_collected_in_tons:74.5,total_waste_generated_in_tons:100,"Positive/Negative Index":-25.5,Normalized:4.821776721},{Wards:"Tilak Road",door_to_door_collection_percentage:143,gate_to_gate_collection_percentage:178,total_waste_collected_in_tons:71.61,total_waste_generated_in_tons:84.253,"Positive/Negative Index":-15.00599385,Normalized:7.159561234},{Wards:"Warje-Karvenagar",door_to_door_collection_percentage:16607.37,gate_to_gate_collection_percentage:2286.9205,total_waste_collected_in_tons:67.6,total_waste_generated_in_tons:94.67,"Positive/Negative Index":-28.59406359,Normalized:4.132501926}],hospital:[{Wards:"Aundh-Baner","Number of Beds in facility type":1146,"Total Population":181124,No_Required_bed:60372,Percent:.189823097,Index:-98.10176903},{Wards:"Tilak Road","Number of Beds in facility type":2709,"Total Population":433635,No_Required_bed:144537,Percent:.187426057,Index:-98.12573943},{Wards:"Kothrud-Bawdhan","Number of Beds in facility type":1518,"Total Population":209331,No_Required_bed:69776,Percent:.217553313,Index:-97.82446687},{Wards:"Warje-Karvenagar","Number of Beds in facility type":1312,"Total Population":233399,No_Required_bed:77795,Percent:.168648371,Index:-98.31351629}],nObj:null,isGraph:!1,tree:[{Wards:"Aundh-Baner","Tree Count":280564,"Total Population":181124,"Required Trees":90562,Index:209.8032287,"Normalized Values":4.312176228},{Wards:"Kothrud-Bawdhan","Tree Count":185265,"Total Population":209331,"Required Trees":104665.5,Index:77.00675008,"Normalized Values":2.4327616},{Wards:"Tilak Road","Tree Count":862184,"Total Population":242290,"Required Trees":121145,Index:611.6959016,"Normalized Values":10},{Wards:"Warje-Karvenagar","Tree Count":101481,"Total Population":233399,"Required Trees":116699.5,Index:-13.04075853,"Normalized Values":1.158355783}],graph:{tree:[{"Tree Count":[280564,185265,862184,101481]},{"Required Trees":[90562,104665,121145,116699]}],swm:[{total_waste_collected_in_tons:[86.4,74.5,71.61,67.6]},{total_waste_generated_in_tons:[100.8,100,84.2,94.6]}],complaint:[{2017:[3450,2139,2057,1372]},{2018:[4857,3401,2322,3046]}],hospital:[{"Number of Beds in facility type":[1146,2709,1518,1312]},{No_Required_bed:[60372,144537,69776,77795]}],aqi:[{},{}]}},a.clickHandler=function(e){console.log(e.currentTarget.lastChild.value),a.setState({current:e.currentTarget.lastChild.value})},a.toggleGraph=function(){a.setState({isGraph:!0})},a.toggleTable=function(){a.setState({isGraph:!1})},a}return Object(b.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){fetch("./data/Aqi-data.json").then((function(e){console.log(e.json())}))}},{key:"render",value:function(){return r.a.createElement(y.Provider,{value:E({},this.state,{clickHandler:this.clickHandler,toggleGraph:this.toggleGraph,toggleTable:this.toggleTable})},this.props.children)}}]),t}(n.Component),j=y,w=function(e){var t=e.data,a=e.label,l=e.mkey,o=Object(n.useContext)(j).clickHandler;return r.a.createElement("div",{className:"meter",onClick:o,"data-key":l},r.a.createElement("h3",null,a),r.a.createElement(u.a,{width:200,height:200,minValue:0,maxValue:10,customSegmentStops:[0,3,7,10],segmentColors:["#DF2727","gold","#1d9421"],value:t,needleColor:"#242325",needleHeightRatio:.8}),r.a.createElement("input",{type:"hidden",value:l,onClick:o}))},k=function(e){var t=e.data,a=e.label,l=e.mkey,o=Object(n.useContext)(j).clickHandler;return r.a.createElement("div",{className:"meter",onClick:o,"data-key":l},r.a.createElement("h3",null,a),r.a.createElement(u.a,{width:200,height:200,minValue:0,maxValue:10,customSegmentStops:[0,3,7,10],segmentColors:["#1d9421","gold","#DF2727"],value:t,needleColor:"#242325",needleHeightRatio:.8}),r.a.createElement("input",{type:"hidden",value:l,onClick:o}))},N=function(){return r.a.createElement("div",{className:"city_meter"},r.a.createElement("section",null,r.a.createElement(w,{data:4.14,label:"City Meter",mkey:"nObj"})),r.a.createElement("section",{className:"sub_meters"},r.a.createElement("div",{className:"positive_meter"},r.a.createElement(w,{data:5.8,label:"Solid Waste Management",mkey:"swm"}),r.a.createElement(w,{data:4.4,label:"Tree Census",mkey:"tree"}),r.a.createElement(w,{data:.19,label:"Hospital",mkey:"hospital"})),r.a.createElement("div",{className:"negative_meter"},r.a.createElement(k,{data:2,label:"Air Quality Index",mkey:"aqi"}),r.a.createElement(k,{data:2,label:"Complaints",mkey:"complaint"}))))},O=function(){return r.a.createElement("div",{className:"ward_meter"},r.a.createElement("section",{className:"jugad"},r.a.createElement("div",{className:"wardSelector"},r.a.createElement("select",null,r.a.createElement("option",null,"Aundh-Baner"),r.a.createElement("option",null,"Ghole Road"),r.a.createElement("option",null,"Kothrud"))),r.a.createElement(w,{data:4.14,label:"Ward Meter"})),r.a.createElement("section",{className:"sub_meters"},r.a.createElement("div",{className:"positive_meter"},r.a.createElement(w,{data:5.8,label:"SWM",mkey:"swm"}),r.a.createElement(w,{data:4.4,label:"Tree Census",mkey:"tree"}),r.a.createElement(w,{data:.19,label:"Hospital",mkey:"hospital"})),r.a.createElement("div",{className:"negative_meter"},r.a.createElement(w,{data:2,label:"AQI",mkey:"aqi"}),r.a.createElement(w,{data:2,label:"Complaints",mkey:"complaint"}))))},C=function(e){var t=e.myObj;return r.a.createElement("div",{className:"tables"},t?r.a.createElement("div",null,r.a.createElement("h3",null,"Average Table"),r.a.createElement("p",null),r.a.createElement("table",{border:"1|0"},r.a.createElement("tr",null,Object.keys(t[0]).map((function(e){return r.a.createElement("th",null,e)}))),t.map((function(e){return r.a.createElement("tr",null,Object.keys(e).map((function(t){return r.a.createElement("td",null,e[t])})))})))):null)},T=a(127),W=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(g.a)(this,(e=Object(_.a)(t)).call.apply(e,[this].concat(r)))).myData=a.props.myObj.map((function(e){var t=[];return t.push(Object.keys(e).map((function(t){return{label:t,data:e[t]}}))),t})),a.data={labels:["Aundh-Baner","Kothrud-Bawdhan","Warje-Karvenagar","Tilak Road\t"],datasets:[{label:"Dataset",backgroundColor:"rgba(255,99,132,0.2)",borderColor:"rgba(255,99,132,1)",borderWidth:1,hoverBackgroundColor:"rgba(255,99,132,0.4)",hoverBorderColor:"rgba(255,99,132,1)",data:[65,59,80,81]}]},a}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(T.a,{data:this.data,width:200,height:200,options:{maintainAspectRatio:!1}}))}}]),t}(n.Component),x=(a(242),function(e){var t=e.myObj,a=Object(n.useContext)(j),l=a.isGraph,o=a.toggleGraph,c=a.toggleTable,i=a.graph[a.current];return r.a.createElement("section",{className:"visualize"},r.a.createElement("div",{className:"toggle"},r.a.createElement("button",{onClick:o,className:l?"active":""},"Show Graphs"),r.a.createElement("button",{className:l?"":"active",onClick:c},"Tables")),r.a.createElement("div",{className:"wrapper"},l?r.a.createElement(W,{myObj:i}):r.a.createElement(C,{myObj:t})))});var P=function(){return r.a.createElement(f,null,r.a.createElement(c.a,null,r.a.createElement(j.Consumer,null,(function(e){return r.a.createElement("div",{className:"app"},r.a.createElement(s,null),r.a.createElement("main",null,r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:N}),r.a.createElement(i.a,{exact:!0,path:"/ward",component:O})),r.a.createElement(x,{myObj:e[e.current]})))}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[129,1,2]]]);
//# sourceMappingURL=main.94f9baa7.chunk.js.map