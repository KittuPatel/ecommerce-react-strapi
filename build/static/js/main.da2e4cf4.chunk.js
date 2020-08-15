(this["webpackJsonpecommerce-react-graphql-stripe"]=this["webpackJsonpecommerce-react-graphql-stripe"]||[]).push([[0],{39:function(e,t,a){e.exports=a(82)},49:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(38),r=a(1),o=a.n(r),i=a(16),l=a.n(i),c=(a(44),a(7)),s=a(8),u=a(10),d=a(9),m=a(2),h=a(84),p=a(87),g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"jwt";localStorage&&localStorage.removeItem(e)},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"cart";localStorage&&localStorage.removeItem(e)},E=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleSignout=function(){g(),f(),e.props.history.push("/")},e}return Object(s.a)(a,[{key:"render",value:function(){return null!==function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"jwt";return localStorage&&localStorage.getItem(e)?JSON.parse(localStorage.getItem(e)):null}()?o.a.createElement(y,{handleSignout:this.handleSignout}):o.a.createElement(v,null)}}]),a}(o.a.Component),y=function(e){var t=e.handleSignout;return o.a.createElement(m.a,{display:"flex",alignItems:"center",justifyContent:"around",height:70,color:"midnight",padding:1,shape:"roundedBottom"},o.a.createElement(h.a,{activeClassName:"active",to:"/checkout"},o.a.createElement("h2",{style:{color:"white"}},"Checkout")),o.a.createElement(h.a,{activeClassName:"active",exact:!0,to:"/"},o.a.createElement(m.a,{display:"flex",alignItems:"center"},o.a.createElement(m.a,{margin:2,height:50,width:50},o.a.createElement(m.h,{src:"./icons/logo.svg",alt:"Brewhub logo",naturalHeight:1,naturalWidth:1})),o.a.createElement("h2",{style:{color:"orange"}},"Brewhub"))),o.a.createElement(m.b,{onClick:t,color:"transparent",text:"Sign Out",inline:!0,size:"md"}))},v=function(){return o.a.createElement(m.a,{display:"flex",alignItems:"center",justifyContent:"around",height:70,color:"midnight",padding:1,shape:"roundedBottom"},o.a.createElement(h.a,{activeClassName:"active",to:"/signin"},o.a.createElement("h2",{style:{color:"white"}},"Sign In")),o.a.createElement(h.a,{activeClassName:"active",exact:!0,to:"/"},o.a.createElement(m.a,{display:"flex",alignItems:"center"},o.a.createElement(m.a,{margin:2,height:50,width:50},o.a.createElement(m.h,{src:"./icons/logo.svg",alt:"Brewhub logo",naturalHeight:1,naturalWidth:1})),o.a.createElement("h2",{style:{color:"orange"}},"Brewhub"))),o.a.createElement(h.a,{activeClassName:"active",to:"/signup"},o.a.createElement("h2",{style:{color:"white"}},"Sign Up")))},b=Object(p.a)(E),S=a(4),C=a.n(S),w=a(12),O=(a(49),a(25)),k=a(13),x=a.n(k),j=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).API_URL||"https://obscure-tor-60047.herokuapp.com",I=new x.a(j),_=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={brands:[],searchTerm:"",loadingBrands:!0},e.handleChange=function(t){var a=t.value;e.setState({searchTerm:a})},e.filteredBrands=function(e){var t=e.searchTerm;return e.brands.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())||e.description.toLowerCase().includes(t.toLowerCase())}))},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(w.a)(C.a.mark((function e(){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.request("POST","/graphql",{data:{query:"query {\n            brands {\n              _id\n              name\n              description\n              image {\n                url\n              }\n            }\n          }"}});case 3:t=e.sent,this.setState({brands:t.data.brands,loadingBrands:!1}),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0),this.setState({loadingBrands:!1});case 11:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.searchTerm,a=e.loadingBrands;return o.a.createElement(m.d,null,o.a.createElement(m.a,{display:"flex",justifyContent:"center",marginTop:4},o.a.createElement(m.k,{id:"searchField",accessibilityLabel:"Brand Search Field",onChange:this.handleChange,value:t,placeholder:"Search Brands"}),o.a.createElement(m.a,{margin:4},o.a.createElement(m.f,{icon:"filter",color:t?"orange":"gray",size:20,accessibilityLabel:"filter"}))),o.a.createElement(m.a,{display:"flex",justifyContent:"center",marginBottom:2},o.a.createElement("h2",{style:{color:"darkblue"}},"Brew Brands")),o.a.createElement(m.a,{dangerouslySetInlineStyle:{__style:{backgroundColor:"#d6c8ec"}},wrap:!0,display:"flex",justifyContent:"around",shape:"rounded"},this.filteredBrands(this.state).map((function(e){return o.a.createElement(m.a,{key:e.id,width:210,margin:2,paddingY:4},o.a.createElement(m.c,{image:o.a.createElement(m.a,{width:200,height:200},o.a.createElement(m.h,{alt:"brand",naturalHeight:1,naturalWidth:1,fit:"cover",src:"".concat(j).concat(e.image.url)}))},o.a.createElement(m.a,{display:"flex",justifyContent:"center",alignItems:"center",direction:"column"},o.a.createElement("h3",null,e.name),o.a.createElement("p",null,e.description),o.a.createElement("h4",null,o.a.createElement(O.a,{to:"/".concat(e._id)},"See Brews")))))}))),o.a.createElement(m.l,{show:a,accessibilityLabel:"Loading Spinner"}))}}]),a}(r.Component),T=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function P(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var B=a(35),L=a(85),W=a(86),A=a(88),D=a(14),M=function(e){var t=e.show,a=e.message;return t&&o.a.createElement(m.a,{dangerouslySetInlineStyle:{__style:{bottom:250,left:"50%",transform:"translateX(-50%)"}},position:"fixed"},o.a.createElement(m.o,{color:"orange",text:a}))},N=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).API_URL||"https://obscure-tor-60047.herokuapp.com",U=new x.a(N),F=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={username:"",password:"",toast:!1,toastMessage:"",loading:!1},e.handleChange=function(t){var a=t.event,n=t.value;a.persist(),e.setState(Object(D.a)({},a.target.name,n))},e.handleSubmit=function(){var t=Object(w.a)(C.a.mark((function t(a){var n,r,o,i;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),n=e.state,r=n.username,o=n.password,!e.isFormEmpty(e.state)){t.next=5;break}return e.showToast("Fill in all fields"),t.abrupt("return");case 5:return t.prev=5,e.setState({loading:!0}),t.next=9,U.login(r,o);case 9:i=t.sent,e.setState({loading:!1}),e.setToken(i.jwt),e.redirectUser("/"),t.next=19;break;case 15:t.prev=15,t.t0=t.catch(5),e.setState({loading:!1}),e.showToast(t.t0.message);case 19:case"end":return t.stop()}}),t,null,[[5,15]])})));return function(e){return t.apply(this,arguments)}}(),e.setToken=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"jwt";localStorage&&localStorage.setItem(t,JSON.stringify(e))},e.redirectUser=function(t){return e.props.history.push(t)},e.isFormEmpty=function(e){var t=e.username,a=e.password;return!t||!a},e.showToast=function(t){e.setState({toast:!0,toastMessage:t}),setTimeout((function(){return e.setState({toast:!1,toastMessage:""})}),5e3)},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state,t=e.toastMessage,a=e.toast,n=e.loading;return o.a.createElement(m.d,null,o.a.createElement(m.a,{dangerouslySetInlineStyle:{__style:{backgroundColor:"#d6a3b1"}},margin:4,padding:4,shape:"rounded",display:"flex",justifyContent:"center"},o.a.createElement("form",{style:{display:"inlineBlock",textAlign:"center",maxWidth:450},onSubmit:this.handleSubmit},o.a.createElement(m.a,{marginBottom:2,display:"flex",direction:"column",alignItems:"center"},o.a.createElement("h2",{style:{color:"purple"}},"Welcome Back!")),o.a.createElement(m.n,{id:"username",type:"text",name:"username",placeholder:"Username",onChange:this.handleChange}),o.a.createElement(m.n,{id:"password",type:"password",name:"password",placeholder:"Password",onChange:this.handleChange}),o.a.createElement(m.b,{inline:!0,disabled:n,color:"blue",text:"Submit",type:"submit"}))),o.a.createElement(M,{show:a,message:t}))}}]),a}(r.Component),q=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).API_URL||"https://obscure-tor-60047.herokuapp.com",R=new x.a(q),K=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={username:"",email:"",password:"",toast:!1,toastMessage:"",loading:!1},e.handleChange=function(t){var a=t.event,n=t.value;a.persist(),e.setState(Object(D.a)({},a.target.name,n))},e.handleSubmit=function(){var t=Object(w.a)(C.a.mark((function t(a){var n,r,o,i,l;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),n=e.state,r=n.username,o=n.email,i=n.password,!e.isFormEmpty(e.state)){t.next=5;break}return e.showToast("Fill in all fields"),t.abrupt("return");case 5:return t.prev=5,e.setState({loading:!0}),t.next=9,R.register(r,o,i);case 9:l=t.sent,e.setState({loading:!1}),e.setToken(l.jwt),e.redirectUser("/"),t.next=19;break;case 15:t.prev=15,t.t0=t.catch(5),e.setState({loading:!1}),e.showToast(t.t0.message);case 19:case"end":return t.stop()}}),t,null,[[5,15]])})));return function(e){return t.apply(this,arguments)}}(),e.setToken=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"jwt";localStorage&&localStorage.setItem(t,JSON.stringify(e))},e.redirectUser=function(t){return e.props.history.push(t)},e.isFormEmpty=function(e){var t=e.username,a=e.email,n=e.password;return!t||!a||!n},e.showToast=function(t){e.setState({toast:!0,toastMessage:t}),setTimeout((function(){return e.setState({toast:!1,toastMessage:""})}),5e3)},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state,t=e.toastMessage,a=e.toast,n=e.loading;return o.a.createElement(m.d,null,o.a.createElement(m.a,{dangerouslySetInlineStyle:{__style:{backgroundColor:"#ebe2da"}},margin:4,padding:4,shape:"rounded",display:"flex",justifyContent:"center"},o.a.createElement("form",{style:{display:"inlineBlock",textAlign:"center",maxWidth:450},onSubmit:this.handleSubmit},o.a.createElement(m.a,{marginBottom:2,display:"flex",direction:"column",alignItems:"center"},o.a.createElement("h2",{style:{color:"orange"}},"Let's Get Started"),o.a.createElement("p",{style:{color:"orchid"}},"Sign up to order some brews")),o.a.createElement(m.n,{id:"username",type:"text",name:"username",placeholder:"Username",onChange:this.handleChange}),o.a.createElement(m.n,{id:"email",type:"email",name:"email",placeholder:"Email Address",onChange:this.handleChange}),o.a.createElement(m.n,{id:"password",type:"password",name:"password",placeholder:"Password",onChange:this.handleChange}),o.a.createElement(m.b,{inline:!0,disabled:n,color:"blue",text:"Submit",type:"submit"}))),o.a.createElement(M,{show:a,message:t}))}}]),a}(r.Component),H=a(17),J=function(e){return Number(e.reduce((function(e,t){return e+t.quantity*t.price}),0).toFixed(2))},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"cart";localStorage&&localStorage.removeItem(e)},Y=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).API_URL||"https://obscure-tor-60047.herokuapp.com",$=new x.a(Y),V=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={cartItems:[],address:"",postalCode:"",city:"",confirmationEmailAddress:"",toast:!1,toastMessage:"",orderProcessing:!1,modal:!1},e.getCart=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"cart";return localStorage&&localStorage.getItem(e)?JSON.parse(localStorage.getItem(e)):[]},e.handleChange=function(t){var a=t.event,n=t.value;a.persist(),e.setState(Object(D.a)({},a.target.name,n))},e.handleConfirmOrder=function(){var t=Object(w.a)(C.a.mark((function t(a){return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),!e.isFormEmpty(e.state)){t.next=4;break}return e.showToast("Fill in all fields"),t.abrupt("return");case 4:e.setState({modal:!0});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleSubmitOrder=Object(w.a)(C.a.mark((function t(){var a,n,r,o,i,l,c,s;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.state,n=a.cartItems,r=a.city,o=a.address,i=a.postalCode,l=J(n),e.setState({orderProcessing:!0}),t.prev=3,t.next=6,e.props.stripe.createToken();case 6:return s=t.sent,c=s.token.id,t.next=10,$.createEntry("orders",{amount:l,brews:n,city:r,postalCode:i,address:o,token:c});case 10:e.setState({orderProcessing:!1,modal:!1}),z(),e.showToast("Your Order has been successfully placed",!0),t.next=19;break;case 15:t.prev=15,t.t0=t.catch(3),e.setState({orderProcessing:!1,modal:!1}),e.showToast(t.t0.message);case 19:case"end":return t.stop()}}),t,null,[[3,15]])}))),e.isFormEmpty=function(e){var t=e.address,a=e.postalCode,n=e.city,r=e.confirmationEmailAddress;return!t||!a||!n||!r},e.showToast=function(t){var a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e.setState({toast:!0,toastMessage:t}),setTimeout((function(){return e.setState({toast:!1,toastMessage:""},(function(){return a&&e.props.history.push("/")}))}),3e3)},e.displayTotalPrice=function(e){var t=e.reduce((function(e,t){return e+t.quantity*t.price}),0).toFixed(2);return o.a.createElement("h4",null,"Total price: $",t)},e.closeModal=function(){return e.setState({modal:!1})},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.setState({cartItems:this.getCart()})}},{key:"render",value:function(){var e=this.state,t=e.toastMessage,a=e.toast,n=e.cartItems,r=e.modal,i=e.orderProcessing;return o.a.createElement(m.d,null,o.a.createElement(m.a,{color:"darkWash",margin:4,padding:4,shape:"rounded",display:"flex",justifyContent:"center",alignItems:"center",direction:"column"},o.a.createElement("h2",{style:{color:"darkblue"}},"Checkout"),n.length>0?o.a.createElement(o.a.Fragment,null,o.a.createElement(m.a,{display:"flex",justifyContent:"center",alignItems:"center",direction:"column",marginTop:2,marginBottom:6},o.a.createElement("i",{style:{color:"gray"}},n.length," Items for Checkout"),o.a.createElement(m.a,{padding:1},n&&n.map((function(e){return o.a.createElement(m.a,{key:e._id,padding:1},o.a.createElement("p",null,e.name," * ",e.quantity," - $",(e.quantity*e.price).toFixed(2)))}))),this.displayTotalPrice(n)),o.a.createElement("form",{style:{display:"inlineBlock",textAlign:"center",maxWidth:450},onSubmit:this.handleConfirmOrder},o.a.createElement(m.n,{id:"address",type:"text",name:"address",placeholder:"Shipping Address",onChange:this.handleChange}),o.a.createElement(m.n,{id:"postalCode",type:"text",name:"postalCode",placeholder:"Postal Code",onChange:this.handleChange}),o.a.createElement(m.n,{id:"city",type:"text",name:"city",placeholder:"City of Residence",onChange:this.handleChange}),o.a.createElement(m.n,{id:"confirmationEmailAddress",type:"email",name:"confirmationEmailAddress",placeholder:"Confirmation Email Address",onChange:this.handleChange}),o.a.createElement(H.CardElement,{id:"stripe__input",onReady:function(e){return e.focus()}}),o.a.createElement("button",{id:"stripe__button",type:"submit"},"Submit"))):o.a.createElement(m.a,{color:"darkWash",shape:"rounded",padding:4},o.a.createElement(m.e,{align:"center",color:"watermelon",size:"xs"},"Your Cart is Empty"),o.a.createElement(m.m,{align:"center",italic:!0,color:"green"},"Add some brews!"))),r&&o.a.createElement(X,{orderProcessing:i,cartItems:n,closeModal:this.closeModal,handleSubmitOrder:this.handleSubmitOrder}),o.a.createElement(M,{show:a,message:t}))}}]),a}(r.Component),X=function(e){var t=e.orderProcessing,a=e.cartItems,n=e.closeModal,r=e.handleSubmitOrder;return o.a.createElement(m.j,{accessibilityModalLabel:"Confirm your order",accessibilityCloseLabel:"close",heading:"Confirm your order",onDismiss:n,footer:o.a.createElement(m.a,{display:"flex",marginLeft:-1,marginRight:-1,justifyContent:"center"},o.a.createElement(m.a,{padding:1},o.a.createElement(m.b,{size:"lg",color:"red",text:"Submit",disabled:t,onClick:r})),o.a.createElement(m.a,{padding:1},o.a.createElement(m.b,{size:"lg",color:"red",text:"Cancel",disabled:t,onClick:n}))),role:"alertdialog",size:"sm"},!t&&o.a.createElement(m.a,{color:"lightWash",padding:2,display:"flex",justifyContent:"center",alignItems:"center",direction:"column"},a&&a.map((function(e){return o.a.createElement(m.a,{key:e._id,padding:1},o.a.createElement("p",null,e.name," * ",e.quantity," - $",(e.quantity*e.price).toFixed(2)))})),o.a.createElement(m.a,{paddingY:2},function(e){var t=e.reduce((function(e,t){return e+t.quantity*t.price}),0).toFixed(2);return o.a.createElement("h4",null,"Total price: $",t)}(a))),o.a.createElement(m.l,{show:t,accessibilityLabel:"Order Processing Spinner"}),t&&o.a.createElement(m.m,{align:"center",italic:!0},"Submitting Order"))},Z=Object(p.a)(Object(H.injectStripe)(V)),G=function(){return o.a.createElement(H.StripeProvider,{apiKey:"pk_test_51HGMTaB4S3gJ2M1JO4XPli9yII2FgLMaX7ttSNtobuZJM1a1UKrB4v0sMkKOMgkBaYtMPR1yzn1Z2ubZOEY1AX7800Ii9pweJk"},o.a.createElement(H.Elements,null,o.a.createElement(Z,null)))},Q=a(37),ee=a(26),te=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).API_URL||"https://obscure-tor-60047.herokuapp.com",ae=new x.a(te),ne=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={brews:[],brand:"",cartItems:[]},e.addToCart=function(t){var a=e.state.cartItems.findIndex((function(e){return e._id===t._id}));if(-1===a){var n=e.state.cartItems.concat(Object(ee.a)(Object(ee.a)({},t),{},{quantity:1}));e.setState({cartItems:n},(function(){return e.setCart(n)}))}else{var r=Object(Q.a)(e.state.cartItems);r[a].quantity+=1,e.setState({cartItems:r},(function(){return e.setCart(r)}))}},e.deleteItemFromCart=function(t){var a=e.state.cartItems.filter((function(e){return e._id!==t}));e.setState({cartItems:a},(function(){return e.setCart(a)}))},e.displayTotalPrice=function(e){var t=e.reduce((function(e,t){return e+t.quantity*t.price}),0).toFixed(2);return o.a.createElement("h4",null,"Total price: $",t)},e.setCart=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cart";localStorage&&localStorage.setItem(t,JSON.stringify(e))},e.getCart=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"cart";return localStorage&&localStorage.getItem(e)?JSON.parse(localStorage.getItem(e)):[]},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(w.a)(C.a.mark((function e(){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ae.request("POST","/graphql",{data:{query:'query {\n                        brand(id: "'.concat(this.props.match.params.brandId,'"){\n                        _id\n                        name\n                        brews {\n                            _id\n                            name\n                            description\n                            price\n                            image {\n                            url\n                            }\n                        }\n                        }\n                    }')}});case 3:t=e.sent,this.setState({brews:t.data.brand.brews,brand:t.data.brand.name,cartItems:this.getCart()}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.brand,n=t.brews,r=t.cartItems;return o.a.createElement(m.a,{marginTop:4,display:"flex",justifyContent:"center",alignItems:"start",dangerouslySetInlineStyle:{__style:{flexWrap:"wrap-reverse",backgroundColor:"#fff"}}},o.a.createElement(m.a,{display:"flex",direction:"column",alignItems:"center"},o.a.createElement(m.a,null,o.a.createElement("h2",{style:{color:"orange"}},a)),o.a.createElement(m.a,{wrap:!0,shape:"rounded",display:"flex",justifyContent:"center"},n&&n.map((function(t){return o.a.createElement(m.a,{key:t._id,width:210,margin:3,paddingY:4},o.a.createElement(m.c,{image:o.a.createElement(m.a,{width:210,height:210},o.a.createElement(m.h,{alt:"brand",naturalHeight:1,naturalWidth:1,fit:"cover",src:"".concat(te).concat(t.image.url)}))},o.a.createElement(m.a,{display:"flex",justifyContent:"center",alignItems:"center",direction:"column"},o.a.createElement(m.a,null,o.a.createElement("h3",null,t.name)),o.a.createElement("p",null,t.description),o.a.createElement("p",{style:{color:"orchid"}},"$",t.price),o.a.createElement(m.a,null,o.a.createElement("h4",null,o.a.createElement(m.b,{onClick:function(){return e.addToCart(t)},color:"blue",text:"Add to Cart"}))))))})))),o.a.createElement(m.a,{alignSelf:"end",marginTop:4,marginLeft:8},o.a.createElement(m.i,{shape:"rounded",wash:!0},o.a.createElement(m.a,{display:"flex",direction:"column",alignItems:"center",padding:2},o.a.createElement("h3",null,"Your Cart"),1===r.length?o.a.createElement("i",null,r.length," item selected"):o.a.createElement("i",null,r.length," items selected"),r&&r.map((function(t){return o.a.createElement(m.a,{key:t._id,display:"flex",alignItems:"center",justifyContent:"center"},o.a.createElement("p",null,t.name," * ",t.quantity," - $",(t.quantity*t.price).toFixed(2)),o.a.createElement(m.a,{marginTop:-1},o.a.createElement(m.g,{accessibilityLabel:"Delete Item",icon:"clear",size:"md",iconColor:"red",onClick:function(){return e.deleteItemFromCart(t._id)}})))})),o.a.createElement(m.a,{display:"flex",alignItems:"center",justifyContent:"center",direction:"column"},o.a.createElement(m.a,{margin:2},0===r.length&&o.a.createElement("p",{style:{color:"red"}},"Please select some items")),this.displayTotalPrice(r),o.a.createElement("h4",null,o.a.createElement(O.a,{to:"/checkout"},"Checkout")))))))}}]),a}(r.Component),re=function(e){var t=e.component,a=Object(n.a)(e,["component"]);return o.a.createElement(B.a,Object.assign({},a,{render:function(e){return null!==function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"jwt";return localStorage&&localStorage.getItem(e)?JSON.parse(localStorage.getItem(e)):null}()?o.a.createElement(t,e):o.a.createElement(L.a,{to:{pathname:"/signin",state:{from:e.location}}})}}))},oe=function(){return o.a.createElement(W.a,null,o.a.createElement(o.a.Fragment,null,o.a.createElement(b,null),o.a.createElement(A.a,null,o.a.createElement(B.a,{exact:!0,path:"/",component:_}),o.a.createElement(B.a,{path:"/signin",component:F}),o.a.createElement(B.a,{path:"/signup",component:K}),o.a.createElement(re,{path:"/checkout",component:G}),o.a.createElement(B.a,{path:"/:brandId",component:ne}))))};l.a.render(o.a.createElement(oe,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");T?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):P(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):P(e)}))}}()}},[[39,1,2]]]);
//# sourceMappingURL=main.da2e4cf4.chunk.js.map