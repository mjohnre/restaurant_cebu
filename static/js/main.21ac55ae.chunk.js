(this.webpackJsonprestaurant_cebu=this.webpackJsonprestaurant_cebu||[]).push([[0],{208:function(e,t,a){e.exports=a(431)},213:function(e,t,a){},214:function(e,t,a){},236:function(e,t,a){},431:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(16),i=a.n(l),o=(a(213),a(214),a(14)),c=a(166),u=a.n(c),s={center:{lat:10.3156992,lng:123.8854366},zoom:14,mapTypeId:"roadmap"},m=(a(236),a(19)),d=a(10),p=a(9),g=a(167),f=a(101),h=a(182),E=a(28),b=a(435),v=a(73),y=function(e){var t=e.size;return t&&r.a.createElement("div",{style:{marginTop:t}})},A=function(e){var t=e.thick,a=e.color;return t&&r.a.createElement("div",{style:{color:a||"black",backgroundColor:a||"black",height:t}})},w=function(e){var t=e.restaurantData,a=e.filterBySpecialty,n=e.cbFilterBySpecialty,l=e.cbClearDirection,i=e.cbShowAnalyticsVisit,c=e.cbShowAnalyticsRevenue,u=e.cbShowDrawingTool,s=e.countInsideOverlay,w=r.a.useState(!1),C=Object(o.a)(w,2),S=C[0],k=C[1],R=r.a.useState([]),I=Object(o.a)(R,2),M=I[0],L=I[1],O=r.a.useState(a||"Select specialty"),D=Object(o.a)(O,2),B=D[0],j=D[1],z=r.a.useState("Show Drawing Tool"),x=Object(o.a)(z,2),T=x[0],V=x[1],G=r.a.useState("Show Visit"),Y=Object(o.a)(G,2),H=Y[0],U=Y[1],P=r.a.useState("Show Revenue"),W=Object(o.a)(P,2),F=W[0],N=W[1];return r.a.useEffect((function(){var e=[];t.list.map((function(t){return t.specialty.filter((function(t){return e.includes(t)||e.push(t),t})),t})),L(e)}),[]),r.a.createElement("div",{className:"panel"},r.a.createElement(m.a,{variant:"light",size:"lg",onClick:function(){return k(!S)},"aria-controls":"collapse-panel","aria-expanded":S},r.a.createElement(d.a,null,r.a.createElement(p.a,null,"Menu"),r.a.createElement(p.a,null,r.a.createElement(g.a,{icon:S?f.a:f.b})))),r.a.createElement(h.a,{in:S},r.a.createElement(E.a,{id:"collapse-panel"},r.a.createElement(E.a.Header,null,"Restaurants in Cebu"),r.a.createElement(E.a.Body,null,r.a.createElement(d.a,null,r.a.createElement(p.a,{sm:"auto"},"Filter by Specialty:"),r.a.createElement(p.a,null,r.a.createElement(b.a,{id:"dropdown-specialty",title:B,variant:"light",disabled:T.includes("Hide")||H.includes("Hide")||F.includes("Hide")},r.a.createElement(v.a.Item,{onClick:function(){j("All"),n("All")}},"All"),M.map((function(e,t){return r.a.createElement(v.a.Item,{key:t,onClick:function(){j(e),n(e)}},e)}))))),r.a.createElement(d.a,null,r.a.createElement(p.a,null,r.a.createElement(y,{size:16}))),r.a.createElement(d.a,null,r.a.createElement(p.a,null,r.a.createElement(m.a,{variant:"danger",onClick:function(){return l()}},"Clear Directions"))),r.a.createElement(d.a,null,r.a.createElement(p.a,null,r.a.createElement(y,{size:8}),r.a.createElement(A,{thick:2,color:"DimGray"}),r.a.createElement(y,{size:8}))),r.a.createElement(d.a,null,r.a.createElement(p.a,null,r.a.createElement("h5",null,"Draw then count"))),r.a.createElement(d.a,null,r.a.createElement(p.a,null,r.a.createElement(m.a,{variant:"warning",disabled:H.includes("Hide")||F.includes("Hide"),onClick:function(){V(T.includes("Show")?"Hide Drawing Tool":"Show Drawing Tool"),u()}},T))),r.a.createElement(d.a,null,r.a.createElement(p.a,null,"Count: ",s)),r.a.createElement(d.a,null,r.a.createElement(p.a,null,r.a.createElement(y,{size:8}),r.a.createElement(A,{thick:2,color:"DimGray"}),r.a.createElement(y,{size:8}))),r.a.createElement(d.a,null,r.a.createElement(p.a,null,r.a.createElement("h5",null,"Analytics"))),r.a.createElement(d.a,null,r.a.createElement(p.a,null,r.a.createElement(m.a,{variant:"success",disabled:T.includes("Hide")||F.includes("Hide"),onClick:function(){U(H.includes("Show")?"Hide Visit":"Show Visit"),i()}},H))),r.a.createElement(d.a,null,r.a.createElement(p.a,null,r.a.createElement(y,{size:16}))),r.a.createElement(d.a,null,r.a.createElement(p.a,null,r.a.createElement(m.a,{variant:"success",disabled:T.includes("Hide")||H.includes("Hide"),onClick:function(){N(F.includes("Show")?"Hide Revenue":"Show Revenue"),c()}},F)))))))},C={position:"absolute",width:50,height:60,left:-25,top:-60},S={position:"absolute",left:0,top:0,width:50,height:50,border:"3px solid #f44336",borderRadius:50,backgroundColor:"white",textAlign:"center",color:"#3f51b5",fontSize:12,fontWeight:"bold",padding:0,cursor:"pointer",boxShadow:"0 0 0 1px white",alignContent:"center"},k={position:"absolute",left:23.5,top:50,width:3,height:10,backgroundColor:"#f44336"},R={display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},I=function(e){var t=e.text;return r.a.createElement("div",{style:C},r.a.createElement("div",{style:S},r.a.createElement("span",{style:R},t)),r.a.createElement("div",{style:k}))},M={list:[{name:"AA BBQ",background:"OrangeRed",specialty:["Seafood","Pork","Grill"],photoUrl:"https://4.bp.blogspot.com/-c3LtmOE03YY/VatIRzmWDnI/AAAAAAAAEGs/jTIU0KpmP8I/s1600/AA%2BBBQ%2BLogo.jpg",address:"Salinas Drive, Lahug, Cebu City",position:{lat:10.330041,lng:123.90115},visit:1,revenueRating:1},{name:"AA BBQ",background:"OrangeRed",specialty:["Seafood","Pork","Grill"],photoUrl:"https://4.bp.blogspot.com/-c3LtmOE03YY/VatIRzmWDnI/AAAAAAAAEGs/jTIU0KpmP8I/s1600/AA%2BBBQ%2BLogo.jpg",address:"Andres Abellana Street, Guadalupe, Cebu City",position:{lat:10.317538,lng:123.887691},visit:1,revenue:1,revenueRating:1},{name:"AA BBQ",background:"OrangeRed",specialty:["Seafood","Pork","Grill"],photoUrl:"https://4.bp.blogspot.com/-c3LtmOE03YY/VatIRzmWDnI/AAAAAAAAEGs/jTIU0KpmP8I/s1600/AA%2BBBQ%2BLogo.jpg",address:"108 V. Ranudo Street, Ramos, Cebu City",position:{lat:10.307403,lng:123.897217},visit:1,revenueRating:1},{name:"CnT Lechon",background:"maroon",specialty:["Pork","Lechon"],photoUrl:"https://2.bp.blogspot.com/-M_5EVRpYCes/UdR0LYiGCLI/AAAAAAAAIsA/nV-f1VyWBOY/s1600/DSC05976.JPG",address:"V. Rama Avenue, Guadalupe, Cebu City",position:{lat:10.326138,lng:123.882599},visit:1,revenueRating:1},{name:"CnT Lechon",background:"maroon",specialty:["Pork","Lechon"],photoUrl:"https://2.bp.blogspot.com/-M_5EVRpYCes/UdR0LYiGCLI/AAAAAAAAIsA/nV-f1VyWBOY/s1600/DSC05976.JPG",address:"J. L. Briones Street, North Reclamation Area, Cebu City",position:{lat:10.309739,lng:123.917649},visit:1,revenueRating:1},{name:"CnT Lechon",background:"maroon",specialty:["Pork","Lechon"],photoUrl:"https://2.bp.blogspot.com/-M_5EVRpYCes/UdR0LYiGCLI/AAAAAAAAIsA/nV-f1VyWBOY/s1600/DSC05976.JPG",address:"Food Choices, Fourth Floor, Ayala Center Cebu, Cebu City",position:{lat:10.318229,lng:123.905138},visit:1,revenueRating:1}]},L=a(33),O={display:"flex",justifyContent:"left",alignItems:"top",width:"100%",height:"100%"},D=function(e){var t=e.restaurant,a=e.cbToggleInfo,n=e.cbDirection,l=r.a.useRef();return r.a.useEffect((function(){l.current=[{name:"Sun",visit:Math.floor(100*Math.random()+1)},{name:"Mon",visit:Math.floor(100*Math.random()+1)},{name:"Tue",visit:Math.floor(100*Math.random()+1)},{name:"Wed",visit:Math.floor(100*Math.random()+1)},{name:"Thu",visit:Math.floor(100*Math.random()+1)},{name:"Fri",visit:Math.floor(100*Math.random()+1)},{name:"Sat",visit:Math.floor(100*Math.random()+1)}]}),[]),r.a.createElement(E.a,{style:{position:"relative",bottom:128,left:"-45px",width:480,backgroundColor:"white",boxShadow:"0 2px 7px 1px rgba(0, 0, 0, 0.3)",fontSize:14,zIndex:100}},r.a.createElement(E.a.Header,null,r.a.createElement(d.a,null,r.a.createElement(p.a,{sm:"auto"},r.a.createElement("img",{src:t.photoUrl,alt:t.name,height:64})),r.a.createElement(p.a,{sm:"auto",className:"justify-content-start"},r.a.createElement("h3",null,t.name)),r.a.createElement(p.a,null,r.a.createElement(m.a,{variant:"secondary",className:"float-right",onClick:function(){return a&&a(t.id)}},"Close"))),r.a.createElement(d.a,null,r.a.createElement(p.a,null,r.a.createElement("span",null,t.address)))),r.a.createElement(E.a.Body,null,r.a.createElement(d.a,null,r.a.createElement(p.a,{sm:"auto"},r.a.createElement("span",{style:O},r.a.createElement("strong",null,"Specialty:"))),r.a.createElement(p.a,null,r.a.createElement("span",{style:O},t.specialty.join(", ")))),r.a.createElement(d.a,null,r.a.createElement(p.a,null,r.a.createElement(y,{size:16}))),r.a.createElement(d.a,null,r.a.createElement(p.a,null,"Customer Visits")),r.a.createElement(d.a,null,r.a.createElement(p.a,null,r.a.createElement(L.b,{width:320,height:120,data:l.current},r.a.createElement(L.c,{strokeDasharray:"3 3"}),r.a.createElement(L.f,{dataKey:"name"}),r.a.createElement(L.g,null),r.a.createElement(L.e,null),r.a.createElement(L.d,null),r.a.createElement(L.a,{dataKey:"visit",fill:"#82ca9d"}))))),r.a.createElement(E.a.Footer,null,r.a.createElement(d.a,null,r.a.createElement(p.a,null,r.a.createElement(m.a,{variant:"info",onClick:function(){return n(t.id)}},"Direction")))))},B=function(e){var t=e.text,a=e.color,n=e.background;return r.a.createElement("div",{style:{color:a,background:n,padding:"8px",display:"inline-flex",textAlign:"center",alignItems:"center",justifyContent:"center",borderRadius:"100%",transform:"translate(-50%, -50%)"}},t)},j=function(e){var t=e.restaurant,a=e.cbToggleInfo,l=e.cbDirection;return r.a.createElement(n.Fragment,null,r.a.createElement(B,{text:t.name,color:"white",background:t.background}),t.showInfo&&r.a.createElement(D,{restaurant:t,cbToggleInfo:a,cbDirection:l}))},z=["rgba(0, 255, 255, 0)","rgba(0, 255, 255, 1)","rgba(0, 191, 255, 1)","rgba(0, 127, 255, 1)","rgba(0, 63, 255, 1)","rgba(0, 0, 255, 1)","rgba(0, 0, 223, 1)","rgba(0, 0, 191, 1)","rgba(0, 0, 159, 1)","rgba(0, 0, 127, 1)","rgba(63, 0, 91, 1)","rgba(127, 0, 63, 1)","rgba(191, 0, 31, 1)","rgba(255, 0, 0, 1)"],x=function(e){var t=e.background,a=e.opacity,n=e.size;return r.a.createElement("div",{style:{background:t,opacity:a,width:n,height:n,display:"inline-flex",textAlign:"center",alignItems:"center",justifyContent:"center",borderRadius:"100%",transform:"translate(-50%, -50%)"}})},T=function(e){var t=r.a.useState(0),a=Object(o.a)(t,2),n=a[0],l=a[1],i=r.a.useState(0),c=Object(o.a)(i,2),m=c[0],d=c[1],p=r.a.useState([]),g=Object(o.a)(p,2),f=g[0],h=g[1],E=r.a.useRef("All"),b=r.a.useState(null),v=Object(o.a)(b,2),y=v[0],A=v[1],C=r.a.useState(null),S=Object(o.a)(C,2),k=S[0],R=S[1],L=r.a.useRef(null),O=r.a.useRef(null),D=r.a.useState([]),B=Object(o.a)(D,2),T=B[0],V=B[1],G=r.a.useRef(null),Y=r.a.useState(!1),H=Object(o.a)(Y,2),U=H[0],P=H[1],W=r.a.useState(0),F=Object(o.a)(W,2),N=F[0],K=F[1],Q=r.a.useState([]),J=Object(o.a)(Q,2),_=J[0],q=J[1],X=function(){l(window.innerWidth),d(window.innerHeight)},Z=function(e){var t=[];M.list.map((function(a,n){return a.id=n,a.showInfo=!1,a.visit=Math.floor(100*Math.random()+1),a.revenueRating=Math.floor(3*Math.random()+1),("All"===e||a.specialty.includes(e))&&t.push(a),a})),h(t)};r.a.useEffect((function(){return X(),window.addEventListener("resize",X),Z(E.current),function(){return window.removeEventListener("resize",X)}}),[]);var $=function(e){U||h(f.map((function(t){return t.id===e&&(t.showInfo=!t.showInfo),t})))},ee=function(e){var t=null;if(f.map((function(a){return a.id===e&&(t=a.position),a}),[]),t){L.current&&L.current.setMap(null);var a=new k.DirectionsService;L.current=new k.DirectionsRenderer,L.current.setMap(y),a.route({origin:{query:s.center.lat+", "+s.center.lng},destination:{query:t.lat+", "+t.lng},travelMode:"DRIVING"},(function(t,a){"OK"===a?(L.current.setDirections(t),$(e)):window.alert("Directions request failed due to "+a)}))}};return r.a.createElement("div",{style:{width:n,height:m}},r.a.createElement(u.a,{bootstrapURLKeys:{key:"AIzaSyAdXw8gydBM63DtYsbY7nTQNFu9byXZOkQ",libraries:["visualization","drawing","geometry"]},defaultCenter:s.center,defaultZoom:s.zoom,yesIWantToUseGoogleMapApiInternals:!0,onGoogleApiLoaded:function(e){return function(e,t){console.log("map:'".concat(e,"', maps:'").concat(t,"'")),A(e),R(t)}(e.map,e.maps)},onChildClick:function(e){return $(Number(e))}},r.a.createElement(I,{lat:s.center.lat,lng:s.center.lng,text:"Start"}),f.map((function(e,t){return r.a.createElement(j,{key:e.id,lat:e.position.lat,lng:e.position.lng,restaurant:e,cbToggleInfo:$,cbDirection:ee})})),T.map((function(e,t){return r.a.createElement(x,{key:t,lat:e.position.lat,lng:e.position.lng,size:3===e.revenueRating?64:2===e.revenueRating?32:16,background:3===e.revenueRating?"Lime":2===e.revenueRating?"YellowGreen":"Yellow",opacity:.5})}))),r.a.createElement(w,{restaurantData:M,filterBySpecialty:E.current,cbFilterBySpecialty:function(e){E.current=e.trim(),Z(E.current)},cbClearDirection:function(){L.current&&L.current.setMap(null)},cbShowAnalyticsVisit:function(){var e=[];if(f.map((function(t){for(var a=0;a<t.visit;a++)e.push(new k.LatLng(t.position.lat+2e-4*Math.random(),t.position.lng+1e-5*Math.random()));return t})),O.current&&O.current.getMap())return O.current.setMap(null),void Z(E.current);O.current=new k.visualization.HeatmapLayer({data:e,map:y}),O.current.set("gradient",O.current.get("gradient")?null:z),O.current.set("radius",O.current.get("radius")?null:16),O.current.set("opacity",O.current.get("opacity")?null:.5),h([])},cbShowAnalyticsRevenue:function(){if(T&&T.length>0)return V([]),void Z(E.current);f.map((function(e){return T.push(e),e})),h([])},cbShowDrawingTool:function(){G.current||(G.current=new k.drawing.DrawingManager({drawingMode:k.drawing.OverlayType.MARKER,drawingControl:!0,drawingControlOptions:{position:k.ControlPosition.TOP_CENTER,drawingModes:["circle","rectangle"]},circleOptions:{fillColor:"#ffff00",fillOpacity:.5,strokeWeight:2,clickable:!0,editable:!1,zIndex:1},rectangleOptions:{fillColor:"#ffff00",fillOpacity:.5,strokeWeight:2,clickable:!0,editable:!1,zIndex:1}}),G.current.setMap(y)),k.event.addListener(G.current,"circlecomplete",(function(e){_.map((function(e){return e.setMap(null),e})),q([]),_.push(e),q(_);var t=0;f.map((function(a){var n=new k.LatLng(a.position);return e.getBounds().contains(n)&&k.geometry.spherical.computeDistanceBetween(e.getCenter(),n)<=e.getRadius()&&t++,a})),K(t),k.event.addListener(e,"click",(function(t){e.setMap(null)}))})),k.event.addListener(G.current,"rectanglecomplete",(function(e){_.map((function(e){return e.setMap(null),e})),q([]),_.push(e),q(_);var t=0;f.map((function(a){return e.getBounds().contains(new k.LatLng(a.position))&&t++,a})),K(t),k.event.addListener(e,"click",(function(t){e.setMap(null)}))})),_.map((function(e){return e.setMap(null),e})),q([]),K(0),G.current&&(G.current.setDrawingMode(null),G.current.setOptions({drawingControl:!U})),P(!U)},countInsideOverlay:N}))};var V=function(){return r.a.createElement("div",{className:"app"},r.a.createElement(T,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[208,1,2]]]);
//# sourceMappingURL=main.21ac55ae.chunk.js.map