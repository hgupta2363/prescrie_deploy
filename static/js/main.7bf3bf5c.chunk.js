(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{124:function(e,t,a){},172:function(e,t,a){e.exports=a(459)},192:function(e,t,a){},197:function(e,t,a){},198:function(e,t,a){},199:function(e,t,a){},457:function(e,t,a){},458:function(e,t,a){},459:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(8),r=a.n(o),s=a(14),c=a(15),i=a(16),m=a(17),u=a(19),h=a.n(u),d=a(31),p=(a(42),a(102)),g=a(64),E=(a(192),function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={doctors:[],doctor:""},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;h.a.get("https://hgupta2363-prescribe-test.glitch.me/getData").then((function(t){e.setState({doctors:t.data})})),console.log(this.state.doctors)}},{key:"render",value:function(){return l.a.createElement("div",{className:"container"},this.state.doctors.map((function(e,t){return l.a.createElement(d.b,{to:"/PatientDets/"+e.doctorId+"/"+e.doctor+"/"+e.slot+"/"+e.fee,className:"link"},l.a.createElement(g.a,{style:{width:"18rem"}},l.a.createElement(g.a.Body,null,l.a.createElement(g.a.Title,null,e.doctor),l.a.createElement(g.a.Text,{className:"card-text"},"Timings: ",e.slot,l.a.createElement("br",null),"Fee: ",e.fee),l.a.createElement(p.a,{type:"submit"},"Book Appointment"))))})))}}]),a}(n.Component)),b=a(41),v=a(9),f=(a(124),a(73)),y=a.n(f),C=a(74),N=a.n(C),w=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).onChangeUsername=n.onChangeUsername.bind(Object(v.a)(n)),n.onChangeBloodGroup=n.onChangeBloodGroup.bind(Object(v.a)(n)),n.onChangeAge=n.onChangeAge.bind(Object(v.a)(n)),n.onChangeDateOfBirth=n.onChangeDateOfBirth.bind(Object(v.a)(n)),n.onChangeEmail=n.onChangeEmail.bind(Object(v.a)(n)),n.onChangePassword=n.onChangePassword.bind(Object(v.a)(n)),n.onSubmit=n.onSubmit.bind(Object(v.a)(n)),n.state={username:"",bloodGroup:"",age:"",dateOfBirth:"",email:"",password:"",Alert:!1,error:""},n}return Object(c.a)(a,[{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onChangeBloodGroup",value:function(e){this.setState({bloodGroup:e.target.value})}},{key:"onChangeAge",value:function(e){this.setState({age:e.target.value})}},{key:"onChangeEmail",value:function(e){this.setState({email:e.target.value})}},{key:"onChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"onChangeDateOfBirth",value:function(e){this.setState({dateOfBirth:e.target.value})}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault();var a={username:this.state.username,bloodGroup:this.state.bloodGroup,age:this.state.age,city:this.state.city,email:this.state.email,password:this.state.password,dateOfBirth:this.state.dateOfBirth};h.a.post("http://localhost:5000/newUser",a).then((function(e){e.data.error?t.setState({Alert:!0,error:e.data.error}):e.data.status&&(t.setState({error:""}),window.location="/Login")})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement(y.a,{show:this.state.Alert,icon:"warning",title:"Error",text:this.state.error,onConfirm:function(){e.state.Alert=!1}})),l.a.createElement("div",{className:" login-class row"},l.a.createElement(N.a,null),l.a.createElement("div",{className:"col-lg-5"},l.a.createElement("form",{onSubmit:this.onSubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Name"),l.a.createElement("input",{type:"text",className:"form-control",id:"exampleInputUsername",value:this.state.username,onChange:this.onChangeUsername,placeholder:"Name"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"E-Mail"),l.a.createElement("input",{type:"text",className:"form-control",id:"exampleInputUsername",value:this.state.email,onChange:this.onChangeEmail,placeholder:"Email"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Password"),l.a.createElement("input",{type:"text",className:"form-control",id:"exampleInputUsername",value:this.state.password,onChange:this.onChangePassword,placeholder:"Password"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Date-Of-Birth"),l.a.createElement("input",{type:"text",className:"form-control",id:"exampleInputPassword1",value:this.state.dateOfBirth,onChange:this.onChangeDateOfBirth,placeholder:"Date-Of-Birth"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Age"),l.a.createElement("input",{type:"text",className:"form-control",value:this.state.age,onChange:this.onChangeAge,placeholder:"Age"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"BloodGroup"),l.a.createElement("input",{type:"text",className:"form-control",id:"exampleInputPassword1",value:this.state.bloodGroup,onChange:this.onChangeBloodGroup,placeholder:"BloodGroup"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"submit",className:"btn btn-primary"}))))))}}]),a}(n.Component),O=(a(197),l.a.createContext()),S=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={Username:"",BloodGroup:"",Age:"",sessionID:"",LoggedStatus:!1},e.location=window.location,e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=window.location.pathname.split("/")[2];h.a.get("http://localhost:5000/"+t).then((function(a){e.setState({Username:a.data.username,BloodGroup:a.data.bloodGroup,Age:a.data.age,sessionID:t,LoggedStatus:!0})})),localStorage.setItem("Logged","true"),window.onload=function(){window.location.hash||(window.location=window.location+"#loaded",window.location.reload())}}},{key:"render",value:function(){return l.a.createElement(O.Provider,{value:{state:this.state}},this.props.children)}}]),a}(n.Component),j=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement(S,null,l.a.createElement("div",null,l.a.createElement(O.Consumer,null,(function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-4 profile-block"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"profilePhoto col-lg-4"}))),l.a.createElement("div",{className:"col-lg-4"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-12"},e.state.Age),l.a.createElement("div",{className:"col-lg-12"},e.state.BloodGroup),l.a.createElement("div",{className:"col-lg-12"},e.state.Username)))))}))))}}]),a}(n.Component),k=(a(198),function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={LoggedStatus:""},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){localStorage.getItem("Logged")?this.setState({LoggedStatus:!0}):this.setState({LoggedStatus:!1})}},{key:"onSubmit",value:function(e){e.preventDefault(),h.a.post("http://localhost:5000/Logout").then((function(e){localStorage.removeItem("Logged"),window.location="/Login"}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("header",null,l.a.createElement("div",null),l.a.createElement("nav",{className:""},l.a.createElement("ul",{className:"nav__links"},l.a.createElement("li",{className:""},l.a.createElement(d.b,{to:"/",className:"a"},"Home")),l.a.createElement("li",{className:""},l.a.createElement(d.b,{to:"/prescrie_deploy/DocList",className:"a"},"Doctors List")))),l.a.createElement("div",null)))}}]),a}(n.Component)),x=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).onChangeEmail=n.onChangeEmail.bind(Object(v.a)(n)),n.onChangePassword=n.onChangePassword.bind(Object(v.a)(n)),n.onSubmit=n.onSubmit.bind(Object(v.a)(n)),n.state={email:"",password:"",Alert:!1,error:""},n}return Object(c.a)(a,[{key:"onChangeEmail",value:function(e){this.setState({email:e.target.value})}},{key:"onChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault();var a={email:this.state.email,password:this.state.password};h.a.post("http://localhost:5000/Login",a).then((function(e){e.data.session?window.location="/Profile/"+"".concat(e.data.LoggedUser)+"/":t.setState({Alert:!0,error:e.data.error})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(y.a,{show:this.state.Alert,icon:"warning",title:"Error",text:this.state.error,onConfirm:function(){e.state.Alert=!1}}),l.a.createElement("div",{className:"login-class row"},l.a.createElement(N.a,null),l.a.createElement("div",{className:"col-lg-5 login-col"},l.a.createElement("form",{onSubmit:this.onSubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"E-Mail"),l.a.createElement("input",{type:"text",className:"form-control",id:"exampleInputUsername",value:this.state.email,onChange:this.onChangeEmail,placeholder:"Email"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Password"),l.a.createElement("input",{type:"text",className:"form-control",id:"exampleInputUsername",value:this.state.password,onChange:this.onChangePassword,placeholder:"Password"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"submit",className:"btn btn-primary"}))))))}}]),a}(n.Component),A=a(490),P=a(486),D=a(491),_=(a(199),a(200),function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).onChangeLName=n.onChangeLName.bind(Object(v.a)(n)),n.onChangeFName=n.onChangeFName.bind(Object(v.a)(n)),n.onChangeAge=n.onChangeAge.bind(Object(v.a)(n)),n.onChangePhone=n.onChangePhone.bind(Object(v.a)(n)),n.onChangeSex=n.onChangeSex.bind(Object(v.a)(n)),n.onChangeEmail=n.onChangeEmail.bind(Object(v.a)(n)),n.onChangeAddress=n.onChangeAddress.bind(Object(v.a)(n)),n.onSubmit=n.onSubmit.bind(Object(v.a)(n)),n.state={fName:"",lName:"",name:"",age:"",phone:"",sex:"",address:"",email:"",docId:"",Alert:!1,error:"",gender:["Male","Female"]},n}return Object(c.a)(a,[{key:"onChangeFName",value:function(e){this.setState({fName:e.target.value})}},{key:"onChangeLName",value:function(e){this.setState({lName:e.target.value})}},{key:"onChangeSex",value:function(e){this.setState({sex:e.target.value})}},{key:"onChangeAge",value:function(e){this.setState({age:e.target.value})}},{key:"onChangePhone",value:function(e){this.setState({phone:e.target.value})}},{key:"onChangeEmail",value:function(e){this.setState({email:e.target.value})}},{key:"onChangeAddress",value:function(e){this.setState({address:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault();var t=window.location.pathname.split("/"),a=t[2].replace(/%20/g,""),n=t[3].replace(/%20/g,""),l=t[4].replace(/%20/g,""),o=this.state.email,r=this.state.phone,s=this.state.fName+this.state.lName;console.log(a);var c={name:"".concat(this.state.fName," ")+"".concat(this.state.lName),age:this.state.age,sex:this.state.sex,email:this.state.email,phone:this.state.phone,address:this.state.address,docId:a,docName:n,Slot:l};console.log(c),h.a.post("https://hgupta2363-prescribe-test.glitch.me/patientDetail",c).then((function(e){console.log(e.data),e.data.status&&(window.location="https://hgupta2363-prescribe-test.glitch.me/payment/"+s+","+r+","+o+","+n+","+t[5]),console.log(e.data.status)}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-6"},l.a.createElement(l.a.Fragment,null,l.a.createElement(P.a,{variant:"h6",gutterBottom:!0,className:"heading-Patient"},"Patient Details"),l.a.createElement("form",{onSubmit:this.onSubmit,className:"container"},l.a.createElement(A.a,{container:!0,spacing:3},l.a.createElement(A.a,{item:!0,xs:12,sm:6},l.a.createElement(D.a,{required:!0,id:"firstName",name:"firstName",label:"First name",fullWidth:!0,autoComplete:"fname",value:this.state.fName,onChange:this.onChangeFName})),l.a.createElement(A.a,{item:!0,xs:12,sm:6},l.a.createElement(D.a,{required:!0,id:"lastName",name:"lastName",label:"Last name",fullWidth:!0,autoComplete:"lname",value:this.state.lName,onChange:this.onChangeLName})),l.a.createElement(A.a,{item:!0,xs:12},l.a.createElement(D.a,{required:!0,id:"address1",name:"address1",label:"Address",fullWidth:!0,autoComplete:"billing address-line1",value:this.state.address,onChange:this.onChangeAddress})),l.a.createElement(A.a,{item:!0,xs:12,sm:6},l.a.createElement(D.a,{id:"state",name:"state",label:"Phone Number",required:"true",value:this.state.phone,onChange:this.onChangePhone,fullWidth:!0})),l.a.createElement(A.a,{item:!0,xs:12,sm:6},l.a.createElement(D.a,{required:!0,id:"",name:"",label:"Age",fullWidth:!0,autoComplete:"",value:this.state.age,onChange:this.onChangeAge})),l.a.createElement(A.a,{item:!0,xs:12,sm:6},l.a.createElement(D.a,{required:!0,type:"email",label:"Email",fullWidth:!0,autoComplete:"",value:this.state.email,onChange:this.onChangeEmail})),l.a.createElement(A.a,{item:!0,xs:12,sm:6},l.a.createElement("select",{value:this.state.sex,onChange:this.onChangeSex},l.a.createElement("option",null,this.state.gender[0]),l.a.createElement("option",null,this.state.gender[1]))),l.a.createElement(A.a,{item:!0,xs:12,sm:6},l.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit")))))))}}]),a}(n.Component)),B=(a(457),function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={Name:"",HospName:"",DocName:"",Slot:"",Pname:""},e}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"zoom-grid container"},l.a.createElement(l.a.Fragment,null,l.a.createElement(P.a,{variant:"h6",gutterBottom:!0},"ZoomCall Link"),l.a.createElement(A.a,{container:!0,spacing:3},l.a.createElement(A.a,{item:!0,xs:12,md:6},l.a.createElement(D.a,{required:!0,id:"cvv",label:"CVV",helperText:"Last three digits on signature strip",fullWidth:!0,value:"7lstjK9NTyett_oeXtFiEQ&redirect_uri=https://yourapp.com"})),l.a.createElement(A.a,{item:!0,xs:12,class:"zoom-para"},"Dear ",l.a.createElement("b",null,"shubham choudhary")," your appointment has been confirmed at ",l.a.createElement("b",null,"NIZAR")," hospital with Doc ",l.a.createElement("b",null,"J.SIVA")," at ",l.a.createElement("b",null,"9:00 to 12:00"),' hours. " Please install Zoom app using the below link for video consulting with your Doctor.',l.a.createElement("link",null),"Your Token Number is: ",l.a.createElement("b",null," 8 "),l.a.createElement("br",null),'Requesting you to follow the live status through whats-app by typing "STATUS" Kindly note that the doctor\'s availability and token order may vary to handle emergency cases. We will alert you once the Doctor is ready'))))}}]),a}(n.Component)),L=(a(458),function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={payment_data:""},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;h.a.get("https://hgupta2363-prescribe-test.glitch.me/payment_status").then((function(t){e.setState({payment_data:t.data})}))}},{key:"render",value:function(){return console.log(this.state.payment_data),l.a.createElement("div",{class:"receipt"},l.a.createElement("table",{class:"table-receipt"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{class:"td-bottom",colspan:"2"},"Thank you!.")),l.a.createElement("tr",null,l.a.createElement("th",{class:"td-bottom",colspan:"2"},l.a.createElement("b",null,"payment is successful"))),l.a.createElement("tr",null,l.a.createElement("th",{class:"th-header",colspan:"2"},"PAYMENT RECEIPT"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",{class:"td-title"},"orderid"),l.a.createElement("td",{class:"td-content"},this.state.payment_data.order_id)),l.a.createElement("tr",null,l.a.createElement("td",{class:"td-title"},"PaymentId"),l.a.createElement("td",{class:"td-content"},this.state.payment_data.id)),l.a.createElement("tr",null,l.a.createElement("td",{class:"td-title"},"TXNAMOUNT"),l.a.createElement("td",{class:"td-content"},Number(this.state.payment_data.amount)/100)),l.a.createElement("tr",null,l.a.createElement("td",{class:"td-title"},"CURRENCY"),l.a.createElement("td",{class:"td-content"},this.state.payment_data.currency)),l.a.createElement("tr",null,l.a.createElement("td",{class:"td-title"},"TXN_STATUS"),l.a.createElement("td",{class:"td-content"},"success")))),l.a.createElement("button",{class:"button"},"arrange zoom meeting"))}}]),a}(n.Component));var I=function(){return l.a.createElement(d.a,null,l.a.createElement(k,null),l.a.createElement(b.a,{path:"/prescrie_deploy/Home",component:w}),l.a.createElement(b.a,{path:"/prescrie_deploy/Login",component:x}),l.a.createElement(b.a,{path:"/prescrie_deploy/SignUp",component:w}),l.a.createElement(b.a,{path:"/prescrie_deploy/Profile/:id",component:j}),l.a.createElement(b.a,{path:"/prescrie_deploy/DocList",component:E}),l.a.createElement(b.a,{path:"/prescrie_deploy/PatientDets/:id/:name/:slot/:fee",component:_}),l.a.createElement(b.a,{path:"/prescrie_deploy/payment_status",component:L}),l.a.createElement(b.a,{path:"/prescrie_deploy/zoom_call_token/:name",component:B}))};r.a.render(l.a.createElement(I,null),document.getElementById("root"))},74:function(e,t){}},[[172,1,2]]]);
//# sourceMappingURL=main.7bf3bf5c.chunk.js.map