(this["webpackJsonpstarfleet-academy"]=this["webpackJsonpstarfleet-academy"]||[]).push([[0],{24:function(e,t,a){},31:function(e,t,a){e.exports=a(49)},48:function(e,t,a){e.exports=a.p+"static/media/starfleet-academy.b04bc807.jpg"},49:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(29),c=a.n(r),i=a(11),m=(a(24),a(2)),u=a(15),s=a.n(u),o=a(6),d=a(7),E=a(9),h=a(8),p=a(16),g=a.n(p);a(27),a(40);a(27);g.a.initializeApp({apiKey:"AIzaSyDC8_SumiiGlXDmgVlVEZw3HqFSD2T-5DU",authDomain:"starfleet-academy-6a734.firebaseapp.com",databaseURL:"https://starfleet-academy-6a734.firebaseio.com",projectId:"starfleet-academy-6a734",storageBucket:"starfleet-academy-6a734.appspot.com",messagingSenderId:"475221194088",appId:"1:475221194088:web:56c2cbda40e0b7f2a512dd",measurementId:"G-XZNY6Y3NTS"});var b=g.a.auth(),f=(g.a.firestore(),g.a),v=l.a.createContext(),C=v.Provider,y=v.Consumer,w=function(e){Object(E.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={user:null,username:""},e.componentDidMount=function(){b.onAuthStateChanged((function(t){e.setState({user:t}),console.log("current user: "+t.uid),e.setState({username:t.uid})}))},e}return Object(d.a)(a,[{key:"render",value:function(){return l.a.createElement(C,{value:this.state.username},this.props.children)}}]),a}(n.Component),j=l.a.createContext(),k=f,N=function(e){Object(E.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={},e}return Object(d.a)(a,[{key:"handleClick",value:function(){k.auth().signOut().then((function(){console.log("signed out"),this.props.history.push("/login")})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return l.a.createElement("button",{id:"logout",onClick:this.handleClick},"Logout")}}]),a}(l.a.Component);var O=function(e){return l.a.createElement(j.Consumer,null,(function(e){return l.a.createElement(y,null,(function(e){return l.a.createElement("section",{id:"user"},l.a.createElement("p",null),l.a.createElement(N,null))}))}))},S=a(10),H=function(e){Object(E.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={isHidden:!0},e.toggleHidden=e.toggleHidden.bind(Object(S.a)(e)),e}return Object(d.a)(a,[{key:"toggleHidden",value:function(){this.setState({isHidden:!this.state.isHidden}),console.log(this.state.isHidden)}},{key:"render",value:function(){return this.state.isHidden?l.a.createElement("nav",{id:"menuNav"},l.a.createElement("button",{id:"menuTitle",onClick:this.toggleHidden},"Menu")):l.a.createElement("nav",{id:"menuNav"},l.a.createElement("button",{id:"menuTitle",onClick:this.toggleHidden},"Menu"),l.a.createElement("ul",{id:"menu"},l.a.createElement("li",null,l.a.createElement("a",{href:"/dashboard"},"Dashboard")),l.a.createElement("li",null,l.a.createElement("a",{href:"/comms"},"Comms")),l.a.createElement("li",null,l.a.createElement("a",{href:"/academics"},"Academics")),l.a.createElement("li",null,l.a.createElement("a",{href:"/registration"},"Registration")),l.a.createElement("li",null,l.a.createElement("a",{href:"/library"},"Library")),l.a.createElement("li",null,l.a.createElement("a",{href:"/settings",className:"greyed-out"},"Settings")),l.a.createElement("li",null,l.a.createElement("a",{href:"/",className:"greyed-out"},"Logout"))))}}]),a}(l.a.Component),x=function(e){Object(E.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={isHidden:!0},e.toggleHidden=e.toggleHidden.bind(Object(S.a)(e)),e}return Object(d.a)(a,[{key:"toggleHidden",value:function(){this.setState({isHidden:!this.state.isHidden})}},{key:"render",value:function(){return this.state.isHidden?l.a.createElement("nav",{id:"menuNav"},l.a.createElement("button",{id:"menuTitle",onClick:this.toggleHidden},"Menu")):l.a.createElement("nav",{id:"menuNav"},l.a.createElement("button",{id:"menuTitle",onClick:this.toggleHidden},"Menu"),l.a.createElement("ul",{id:"menu"},l.a.createElement("li",null,"Settings"),l.a.createElement("li",null,l.a.createElement(O,null))))}}]),a}(l.a.Component);var D=function(){return l.a.createElement("header",null,l.a.createElement("h1",null,"Starfleet Academy"),l.a.createElement(s.a,{maxDeviceWidth:800},l.a.createElement(H,null)),l.a.createElement(s.a,{minDeviceWidth:800},l.a.createElement(x,null)))};var A=function(){return l.a.createElement("h1",null,"Comms")};var F=function(){return l.a.createElement("h1",null,"Academics")};var P=function(){return l.a.createElement("h1",null,"Registration")};var I=function(){return l.a.createElement("h1",null,"Library")};var L=function(){return l.a.createElement("nav",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(i.b,{to:Y},"Dashboard")),l.a.createElement("li",null,l.a.createElement(i.b,{to:A},"Comms")),l.a.createElement("li",null,l.a.createElement(i.b,{to:F},"Academics")),l.a.createElement("li",null,l.a.createElement(i.b,{to:P},"Registration")),l.a.createElement("li",null,l.a.createElement(i.b,{to:I},"Library"))))};var T=function(){return l.a.createElement("article",null,l.a.createElement("h4",{className:"comm-sender"},"L. McCoy"),l.a.createElement("p",null,"Message content that spans across two lines. Fade text..."))};var M=function(){return l.a.createElement("article",{className:"card",id:"comms"},l.a.createElement("article",{id:"messages"},l.a.createElement(T,null),l.a.createElement(T,null),l.a.createElement(T,null),l.a.createElement(T,null),l.a.createElement(T,null)))};var W=function(){return l.a.createElement("article",{className:"card",id:"weather"},l.a.createElement("h4",null,"13:50"),l.a.createElement("h3",null,"21"),l.a.createElement("h5",null,"San Francisco, CA"))};var R=function(){return l.a.createElement("article",{className:"card",id:"schedule"})};var G=function(){return l.a.createElement("article",{id:"course"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("h4",{className:"courseNumber"},"2035.45291")),l.a.createElement("li",null,l.a.createElement("h3",{className:"courseTitle"},"Warp Theory"),l.a.createElement("p",{className:"courseLevel"},"PHYS 200")),l.a.createElement("li",null,l.a.createElement("h4",{className:"instructor"},"Cdre. Paris")),l.a.createElement("li",null,l.a.createElement("h4",{className:"commInstructor"},"Comm instructor >"))))};var J=function(){return l.a.createElement("article",{className:"card",id:"courses"},l.a.createElement("hgroup",null,l.a.createElement("h3",null,"Courses"),l.a.createElement("h5",null,"Spring 2235")),l.a.createElement(G,null),l.a.createElement(G,null),l.a.createElement(G,null),l.a.createElement(G,null),l.a.createElement(G,null),l.a.createElement(G,null))};var K=function(){return l.a.createElement("article",{className:"card",id:"tracker"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("label",{htmlFor:"meal-credits-progress"},"Meal Credits"),l.a.createElement("progress",{id:"meal-credits-progress",max:"100",value:"75"},"75%")),l.a.createElement("li",null,l.a.createElement("label",{htmlFor:"water-credits-progress"},"Water Credits"),l.a.createElement("progress",{id:"water-credits-progress",max:"100",value:"25"},"25%")),l.a.createElement("li",null,l.a.createElement("label",{htmlFor:"energy-progress"},"Energy Consumption"),l.a.createElement("progress",{id:"energy-progress",max:"200",value:"10"},"10%"))))};var U=function(){return l.a.createElement("article",{className:"card",id:"studentInfo"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("b",null,"Student:")," Kirk, James T."),l.a.createElement("li",{id:"student-ID"},l.a.createElement("b",null,"ID:")," 20384"),l.a.createElement("li",{id:"student-rank"},l.a.createElement("b",null,"Rank:")," Cadet"),l.a.createElement("li",null,l.a.createElement("b",null,"Track:")," Command - Engineering"),l.a.createElement("li",null,l.a.createElement("b",null,"Advisor:")," Capt. Christopher Pike")))};var V=function(){return l.a.createElement("section",{id:"cardContainer"},l.a.createElement("article",{className:"container",id:"commsContainer"},l.a.createElement(M,null),l.a.createElement("p",{className:"subtext"},"Go to comms >")),l.a.createElement("article",{className:"container",id:"weatherContainer"},l.a.createElement(W,null)),l.a.createElement("article",{className:"container",id:"scheduleContainer"},l.a.createElement(R,null),l.a.createElement("p",{className:"subtext"},"View detail schedule >")),l.a.createElement("article",{className:"container",id:"coursesContainer"},l.a.createElement(J,null),l.a.createElement("p",{className:"subtext"},"Go to class detail >")),l.a.createElement("article",{className:"container",id:"trackerContainer"},l.a.createElement(K,null),l.a.createElement("p",{className:"subtext"},"for 2252.0219")),l.a.createElement("article",{className:"container",id:"studentInfoContainer"},l.a.createElement(U,null),l.a.createElement("p",{className:"subtext"},"Petition for track change >")))};var Y=function(){return l.a.createElement("main",null,l.a.createElement(D,null),l.a.createElement(s.a,{minDeviceWidth:800},l.a.createElement(L,null)),l.a.createElement(V,null))},z=a(18);var B=function(){return l.a.createElement("header",{id:"accountHeader"},l.a.createElement("h1",null,"Starfleet Academy"),l.a.createElement("h3",null,"Student Portal"))},X=function(e){Object(E.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={name:"",homeworld:"",species:"",email:"",password1:"",password2:"",error:null},e.handleChange=e.handleChange.bind(Object(S.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(S.a)(e)),e}return Object(d.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(z.a)({},e.target.id,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.state,a=(t.username,t.email),n=t.password1;k.auth().createUserWithEmailAndPassword(a,n).catch((function(e){console.log(e)})).catch(console.log("account created"),k.auth().onAuthStateChanged((function(e){e?console.log(e.uid):console.log("logged out")})),this.props.history.push("/"))}},{key:"render",value:function(){var e=this.state,t=e.name,a=e.homeworld,n=e.species,r=e.email,c=e.password1,i=e.password2,m=(e.error,c!==i||""===c||""===r||""===t||""===a||""===n);return l.a.createElement("main",{id:"account"},l.a.createElement("section",{className:"accountForm signup"},l.a.createElement(B,null),l.a.createElement("form",{id:"signup",onSubmit:this.handleSubmit},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("label",{htmlFor:"name"},"Name"),l.a.createElement("input",{type:"text",id:"name",placeholder:"Jim Kirk",value:t,onChange:this.handleChange})),l.a.createElement("li",null,l.a.createElement("label",{htmlFor:"homeworld"},"Homeworld"),l.a.createElement("input",{type:"text",id:"homeworld",placeholder:"Earth",onChange:this.handleChange,value:a})),l.a.createElement("li",null,l.a.createElement("label",{htmlFor:"species"},"Species"),l.a.createElement("input",{type:"text",id:"species",placeholder:"Human",onChange:this.handleChange,value:n})),l.a.createElement("li",null,l.a.createElement("label",{htmlFor:"userEmail"},"Email"),l.a.createElement("input",{type:"email",id:"email",placeholder:"jimkirk@gmail.com",onChange:this.handleChange,value:r})),l.a.createElement("li",null,l.a.createElement("label",{htmlFor:"password1"},"Password"),l.a.createElement("input",{type:"password",id:"password1",placeholder:"Password",onChange:this.handleChange,value:c})),l.a.createElement("li",null,l.a.createElement("label",{htmlFor:"password2"},"Confirm Password"),l.a.createElement("input",{type:"password",id:"password2",placeholder:"Password Confirmation",onChange:this.handleChange,value:i})),l.a.createElement("li",null,l.a.createElement("input",{type:"submit",disabled:m,id:"signup-form-submit",value:"Continue"})),l.a.createElement("li",{id:"form-error-message"})))))}}]),a}(l.a.Component),Z=(a(48),function(e){Object(E.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={email:"",password:"",error:null},e.handleChange=e.handleChange.bind(Object(S.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(S.a)(e)),e}return Object(d.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(z.a)({},e.target.id,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.state,a=t.email,n=t.password;k.auth().signInWithEmailAndPassword(a,n).catch((function(e){console.log(e)})),console.log("signed in"),this.props.history.push("/")}},{key:"render",value:function(){var e=this.state,t=e.email,a=e.password,n=(e.error,""===a||""===t);return l.a.createElement("main",{id:"account"},l.a.createElement("section",{className:"accountForm"},l.a.createElement(B,null),l.a.createElement("form",{id:"signin-form",onSubmit:this.handleSubmit},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("input",{type:"text",id:"email",placeholder:"Email",value:t,onChange:this.handleChange})),l.a.createElement("li",null,l.a.createElement("input",{type:"password",id:"password",placeholder:"Password",value:a,onChange:this.handleChange})),l.a.createElement("li",null,l.a.createElement("input",{type:"submit",id:"signin-form-submit",value:"Login",disabled:n})))),l.a.createElement("p",{id:"signupLink"},"Or ",l.a.createElement(i.b,{to:"Signup"},"create an account"))))}}]),a}(l.a.Component));var q=function(){return l.a.createElement(i.a,null,l.a.createElement(m.c,null,l.a.createElement(m.a,{exact:!0,path:"/",component:Y}),l.a.createElement(m.a,{exact:!0,path:"/signup",component:X}),l.a.createElement(m.a,{exact:!0,path:"/login",component:Z})))};c.a.render(l.a.createElement(j.Provider,{value:k},l.a.createElement(w,null,l.a.createElement(i.a,null,l.a.createElement(q,null)))),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.420c457e.chunk.js.map