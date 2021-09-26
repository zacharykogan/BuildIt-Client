(this["webpackJsonpbuilt-it"]=this["webpackJsonpbuilt-it"]||[]).push([[0],{106:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(31),c=a.n(s),o=(a(75),a(70)),i=a(10),l=a(11),d=a(13),j=a(12),u=a(14),h=a(114),m=a(37),p=a(65),b=a(1),g=["user","component","render"],x=function(e){var t=e.user,a=e.component,r=e.render,n=Object(p.a)(e,g);return t&&r?Object(b.jsx)(u.b,Object(m.a)(Object(m.a)({},n),{},{render:r})):Object(b.jsx)(u.b,Object(m.a)(Object(m.a)({},n),{},{render:function(e){return t?Object(b.jsx)(a,Object(m.a)({},e)):Object(b.jsx)(u.a,{to:"/"})}}))},O=a(56),f=(a(85),function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).handleClose=function(){return r.setState({show:!1})},r.state={show:!0},r.timeoutId=null,r}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.timeoutId=setTimeout(this.handleClose,5e3)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeoutId)}},{key:"render",value:function(){var e=this.props,t=e.variant,a=e.heading,r=e.message,n=e.deleteAlert,s=e.id;return this.state.show||setTimeout((function(){n(s)}),300),Object(b.jsx)(O.a,{dismissible:!0,show:this.state.show,variant:t,onClose:this.handleClose,children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(O.a.Heading,{children:a}),Object(b.jsx)("p",{className:"alert-body",children:r})]})})}}]),a}(n.a.Component)),v=a(115),y=a(113),w=a(42),C=a(9),k={align:"right",color:"white"},S=Object(b.jsxs)(r.Fragment,{children:[Object(b.jsx)(C.c,{to:"/my-projects",className:"nav-link",children:"My Projects"}),Object(b.jsx)(C.c,{to:"/create-project",className:"nav-link",children:"Create a Project"}),Object(b.jsx)(C.c,{to:"/change-password",className:"nav-link",children:"Change Password"}),Object(b.jsx)(C.c,{to:"/sign-out",className:"nav-link",children:"Sign Out"})]}),A=Object(b.jsx)(r.Fragment,{children:Object(b.jsx)(C.c,{to:"/sign-in",className:"nav-link",children:"Sign In"})}),P=Object(b.jsx)(r.Fragment,{children:Object(b.jsx)(C.c,{to:"/projects",className:"nav-link",children:"Home"})}),N=function(e){var t=e.user;return Object(b.jsxs)(w.a,{sticky:"top",bg:"dark",variant:"dark",expand:"md",children:[Object(b.jsx)(w.a.Brand,{children:Object(b.jsx)(C.b,{to:"/projects",style:{color:"#FFF",textDecoration:"none"},children:"\ud83e\ude9c BuildIT"})}),Object(b.jsx)(w.a.Toggle,{variant:"dark","aria-controls":"basic-navbar-nav"}),Object(b.jsxs)(w.a.Collapse,{variant:"dark",id:"basic-navbar-nav",children:[Object(b.jsxs)(v.a,{className:"ms-auto",children:[" ",t&&Object(b.jsxs)("span",{className:"navbar-text mr-2",children:["Welcome, ",t.email.name]}),P]}),Object(b.jsxs)(y.a,{style:k,className:"ml-auto",variant:"dark",title:"My Account ",id:"nav-dropdown",children:["\ud83d\udee0\ufe0f",Object(b.jsx)(y.a.Item,{variant:"dark",className:"ml-auto",children:t&&Object(b.jsxs)("span",{className:"navbar-text mr-2",children:["Welcome, ",t.email.name]})}),Object(b.jsx)(y.a.Item,{variant:"dark",href:"#action/3.2",children:t?S:A})]})]})]})},T=a(28),I="https://murmuring-atoll-11579.herokuapp.com",U="http://localhost:4741",L="localhost"===window.location.hostname?U:I,D=a(17),E=a.n(D),G=function(e){return E()({url:L+"/sign-in/",method:"POST",data:{credentials:{email:e.email,password:e.password}}})},B=a(8),F=a(30),q=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).handleChange=function(e){return r.setState(Object(T.a)({},e.target.name,e.target.value))},r.onSignUp=function(e){e.preventDefault();var t,a=r.props,n=a.msgAlert,s=a.history,c=a.setUser;(t=r.state,E()({method:"POST",url:L+"/sign-up/",data:{credentials:{email:t.email,firstName:t.lastName,lastName:t.lastName,password:t.password,password_confirmation:t.passwordConfirmation}}})).then((function(){return G(r.state)})).then((function(e){return c(e.data.user)})).then((function(){return n({heading:"Sign Up Success",message:"Succesfully registered! You've been signed in as well.",variant:"success"})})).then((function(){return s.push("/")})).catch((function(e){r.setState({name:"",lastName:"",email:"",password:"",passwordConfirmation:""}),n({heading:"Sign Up Failed with error: "+e.message,message:"Registration failed. Email may be taken, or passwords don't match.",variant:"danger"})}))},r.state={firstName:"",lastName:"",email:"",password:"",passwordConfirmation:""},r}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password,r=e.passwordConfirmation;return Object(b.jsx)("div",{className:"row",children:Object(b.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(b.jsx)("h3",{children:"Sign Up"}),Object(b.jsxs)(B.a,{onSubmit:this.onSignUp,children:[Object(b.jsxs)(B.a.Group,{controlId:"email",children:[Object(b.jsx)(B.a.Label,{children:"Email address"}),Object(b.jsx)(B.a.Control,{required:!0,type:"email",name:"email",value:t,placeholder:"Enter email",onChange:this.handleChange})]}),Object(b.jsxs)(B.a.Group,{controlId:"password",children:[Object(b.jsx)(B.a.Label,{children:"Password"}),Object(b.jsx)(B.a.Control,{required:!0,name:"password",value:a,type:"password",placeholder:"Password",onChange:this.handleChange})]}),Object(b.jsxs)(B.a.Group,{controlId:"passwordConfirmation",children:[Object(b.jsx)(B.a.Label,{children:"Password Confirmation"}),Object(b.jsx)(B.a.Control,{required:!0,name:"passwordConfirmation",value:r,type:"password",placeholder:"Confirm Password",onChange:this.handleChange})]}),Object(b.jsx)(F.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})}}]),a}(r.Component),M=Object(u.f)(q),H={background:"rgba(0, 0, 0, 0.5)",margin:"auto",padding:"25px",width:"md",color:"rgba(240, 230, 180, 0.8)"},R={color:"blue",border:"none",background:"rgba(240, 230, 180, 0.8)",fontSize:"1.2em",fontWeight:"bolder",width:"100%"},z=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).handleChange=function(e){return r.setState(Object(T.a)({},e.target.name,e.target.value))},r.onSignIn=function(e){e.preventDefault();var t=r.props,a=t.msgAlert,n=t.history,s=t.setUser;G(r.state).then((function(e){return s(e.data.user)})).then((function(){return a({heading:"Sign In Success",message:"Welcome!",variant:"success"})})).then((function(){return n.push("/")})).catch((function(e){r.setState({email:"",password:""}),a({heading:"Sign In Failed with error: "+e.message,message:"Failed to sign in. Check your email and password and try again.",variant:"danger"})}))},r.state={email:"",password:""},r}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password;return Object(b.jsx)("div",{className:"row",children:Object(b.jsxs)("div",{style:H,className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(b.jsx)("h2",{children:"Sign In"}),Object(b.jsxs)(B.a,{onSubmit:this.onSignIn,children:[Object(b.jsxs)(B.a.Group,{controlId:"email",children:[Object(b.jsx)(B.a.Label,{children:"Email address"}),Object(b.jsx)(B.a.Control,{required:!0,type:"email",name:"email",value:t,placeholder:"Enter email",onChange:this.handleChange})]}),Object(b.jsxs)(B.a.Group,{controlId:"password",children:[Object(b.jsx)(B.a.Label,{children:"Password"}),Object(b.jsx)(B.a.Control,{required:!0,name:"password",value:a,type:"password",placeholder:"Password",onChange:this.handleChange})]}),Object(b.jsx)("br",{}),Object(b.jsx)(F.a,{style:R,type:"submit",size:"lg",children:"Sign In"})]}),Object(b.jsx)("br",{}),Object(b.jsxs)("h5",{children:["New to BuildIt? ",Object(b.jsx)(C.b,{to:"/sign-up",children:" Sign up now"})]})]})})}}]),a}(r.Component),_=Object(u.f)(z),W=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.msgAlert,a=e.history,r=e.clearUser;(function(e){return E()({url:L+"/sign-out/",method:"DELETE",headers:{Authorization:"Bearer ".concat(e.token)}})})(e.user).finally((function(){return t({heading:"Signed Out Successfully",message:"Come back soon!",variant:"success"})})).finally((function(){return a.push("/")})).finally((function(){return r()}))}},{key:"render",value:function(){return""}}]),a}(r.Component),J=Object(u.f)(W),Y=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).handleChange=function(e){return r.setState(Object(T.a)({},e.target.name,e.target.value))},r.onChangePassword=function(e){e.preventDefault();var t=r.props,a=t.msgAlert,n=t.history,s=t.user;(function(e,t){return E()({url:L+"/change-password/",method:"PATCH",headers:{Authorization:"Bearer ".concat(t.token)},data:{passwords:{old:e.oldPassword,new:e.newPassword}}})})(r.state,s).then((function(){return a({heading:"Change Password Success",message:"Password changed successfully!",variant:"success"})})).then((function(){return n.push("/")})).catch((function(e){r.setState({oldPassword:"",newPassword:""}),a({heading:"Change Password Failed with error: "+e.message,message:"Failed to change passwords. Check your old password and try again.",variant:"danger"})}))},r.state={oldPassword:"",newPassword:""},r}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.oldPassword,a=e.newPassword;return Object(b.jsx)("div",{className:"row",children:Object(b.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(b.jsx)("h3",{children:"Change Password"}),Object(b.jsxs)(B.a,{onSubmit:this.onChangePassword,children:[Object(b.jsxs)(B.a.Group,{controlId:"oldPassword",children:[Object(b.jsx)(B.a.Label,{children:"Old password"}),Object(b.jsx)(B.a.Control,{required:!0,name:"oldPassword",value:t,type:"password",placeholder:"Old Password",onChange:this.handleChange})]}),Object(b.jsxs)(B.a.Group,{controlId:"newPassword",children:[Object(b.jsx)(B.a.Label,{children:"New Password"}),Object(b.jsx)(B.a.Control,{required:!0,name:"newPassword",value:a,type:"password",placeholder:"New Password",onChange:this.handleChange})]}),Object(b.jsx)(F.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})}}]),a}(r.Component),K=Object(u.f)(Y),Q=a(69),V=a(116),X=a(112),Z={margin:"auto",padding:"25px",width:"md",height:"200px"},$={margin:"auto",marginTop:"10px"},ee={height:"50px"},te={background:"rgba(0, 0, 0, 0.5)",borderRadius:"0px 0px 8px 8px",color:"white"},ae={border:"none",borderRadius:"10px",width:"350",background:"rgba(0, 0, 0, 0.5)"},re=Object(u.f)((function(e){var t=e.projects.map((function(e){return Object(b.jsx)(Q.a,{xs:12,md:6,lg:4,xl:4,style:$,children:Object(b.jsxs)(V.a,{style:ae,className:"m-auto",children:[Object(b.jsx)(C.b,{style:{margin:"auto"},to:"/projects/".concat(e._id),children:Object(b.jsx)(V.a.Img,{variant:"top",src:"".concat(e.image),style:Z})}),Object(b.jsxs)(V.a.Body,{style:te,children:[Object(b.jsx)(V.a.Title,{style:ee,children:e.name}),Object(b.jsx)(V.a.Text,{children:e.description})]})]})},e._id)}));return Object(b.jsxs)(X.a,{children:[Object(b.jsx)("h3",{className:"text-light mt-5"}),Object(b.jsx)(Q.a,{xs:12,style:{marginTop:"10px"},children:Object(b.jsx)(X.a,{children:t})}),Object(b.jsx)("div",{className:"col-12 mt-5"})]})})),ne={border:"none",borderRadius:"10px",width:"auto",background:"black"},se={margin:"auto",padding:"25px",width:"md"},ce={margin:"auto",marginTop:"10px"},oe={height:"50px"},ie={backgroundColor:"black",borderRadius:"0px 0px 8px 8px",color:"white"},le=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).state={project:{}},r}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;E()("".concat(L,"/projects/").concat(this.props.match.params.id)).then((function(t){return e.setState({project:t.data.project})})).catch(console.error)}},{key:"render",value:function(){var e=this.state.project,t=function(e,t){return Object(b.jsx)("li",{children:e},t)};return Object(b.jsx)(X.a,{children:Object(b.jsx)(Q.a,{xs:10,md:8,style:ce,children:Object(b.jsxs)(V.a,{style:ne,className:"m-auto",children:[Object(b.jsx)(V.a.Img,{variant:"top",src:"".concat(e.image),style:se}),Object(b.jsxs)(V.a.Body,{style:ie,children:[Object(b.jsx)(V.a.Title,{style:oe,children:e.name}),Object(b.jsxs)(V.a.Text,{children:["Tools : ",e.tools?e.tools.map(t):"Loading..."]}),Object(b.jsxs)(V.a.Text,{children:["Materials : ",e.materials?e.materials.map(t):"Loading..."]}),Object(b.jsxs)(V.a.Text,{children:["Steps :",Object(b.jsx)("ol",{children:e.steps?e.steps.map(t):"Loading..."})]})]})]})})})}}]),a}(r.Component),de=Object(u.f)(le),je=function(){return E()({method:"GET",url:L+"/projects"})},ue=function(e){var t=e.project,a=e.formHandler,r=e.changeHandler;return Object(b.jsx)("div",{className:"row",children:Object(b.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(b.jsx)("h3",{children:t?"Edit Project":"Create Project"}),Object(b.jsxs)(B.a,{onSubmit:a,children:[Object(b.jsxs)(B.a.Group,{controlId:"name",children:[Object(b.jsx)(B.a.Label,{children:"Title"}),Object(b.jsx)(B.a.Control,{required:!0,name:"name",value:t?t.name:null,type:"name",placeholder:t&&t.name?t.name:"Title",onChange:r})]}),Object(b.jsxs)(B.a.Group,{controlId:"category",children:[Object(b.jsx)(B.a.Label,{children:"Category"}),Object(b.jsx)(B.a.Control,{required:!0,name:"category",value:t?t.category:null,type:"category",placeholder:t&&t.category?t.category:"Category",onChange:r})]}),Object(b.jsxs)(B.a.Group,{controlId:"description",children:[Object(b.jsx)(B.a.Label,{children:"Description"}),Object(b.jsx)(B.a.Control,{required:!0,name:"description",value:t?t.description:null,type:"Description",placeholder:t&&t.description?t.description:"Description",onChange:r,as:"textarea",rows:3})]}),Object(b.jsxs)(B.a.Group,{controlId:"tools",children:[Object(b.jsx)(B.a.Label,{children:"Tools"}),Object(b.jsx)(B.a.Control,{required:!0,name:"tools",value:t?t.tools:null,type:"tools",placeholder:t&&t.tools?t.tools:"Tools",onChange:r,as:"textarea",rows:3})]}),Object(b.jsxs)(B.a.Group,{controlId:"materials",children:[Object(b.jsx)(B.a.Label,{children:"Materials"}),Object(b.jsx)(B.a.Control,{required:!0,name:"materials",value:t?t.materials:null,type:"materials",placeholder:t&&t.materials?t.materials:"Materials",onChange:r,as:"textarea",rows:3})]}),Object(b.jsxs)(B.a.Group,{controlId:"steps",children:[Object(b.jsx)(B.a.Label,{children:"Steps"}),Object(b.jsx)(B.a.Control,{required:!0,name:"steps",value:t?t.steps:null,type:"steps",placeholder:t&&t.steps?t.steps:"Steps",onChange:r,as:"textarea",rows:7})]}),Object(b.jsxs)(B.a.Group,{controlId:"image",children:[Object(b.jsx)(B.a.Label,{children:"Image"}),Object(b.jsx)(B.a.Control,{required:!0,name:"image",value:t?t.image:null,type:"image",placeholder:t&&!t.image?t.image:"image",onChange:r,as:"textarea",rows:1})]}),Object(b.jsx)(F.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})},he=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).handleChange=function(e){var t=r.state.project;t[e.target.name]=e.target.value,r.setState({project:t})},r.onCreateProject=function(e){e.preventDefault();var t=r.props,a=t.msgAlert,n=t.history,s=t.user;(function(e,t){return E()({method:"POST",url:L+"/projects",data:{project:{name:e.name,category:e.category,description:e.description,image:e.image,tools:e.tools,materials:e.materials,steps:[e.steps]}},headers:{Authorization:"Bearer ".concat(t.token)}})})(r.state.project,s).then((function(e){return console.log(e.data.user)})).then((function(){return a({heading:"Project Created Success",message:"Thank you for posting your project!",variant:"success"})})).catch(console.error).then(je().then((function(e){return r.setState({projects:e.data.projects})}))).then((function(){return n.push("/my-projects")})).catch((function(e){r.setState({name:"",category:"",description:"",image:"",tools:"",materials:"",steps:[]}),a({heading:"Create Project Failed with error: "+e.message,message:"Something went wrong",variant:"danger"})}))},r.state={project:{}},r}return Object(l.a)(a,[{key:"render",value:function(){return Object(b.jsx)(ue,{formHandler:this.onCreateProject,changeHandler:this.handleChange})}}]),a}(r.Component),me=Object(u.f)(he),pe=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).handleChange=function(e){var t=r.state.project;t[e.target.name]=e.target.value,r.setState({project:t})},r.handleSubmit=function(e){e.preventDefault();var t=r.state.project,a=r.props.user;(function(e,t,a){return E()({method:"PATCH",url:L+"/my-projects/".concat(e),data:{project:{name:t.name,category:t.category,description:t.description,image:t.image,tools:t.tools,materials:t.materials,steps:[t.steps]}},headers:{Authorization:"Bearer ".concat(a.token)}})})(r.props.match.params.id,t,a).then((function(){return r.setState({updated:!0})})).catch(console.error)},r.state={project:{},updated:!1},r}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;E()("".concat(L,"/my-projects/").concat(this.props.match.params.id)).then((function(t){return e.setState({project:t.data.project})})).catch(console.error)}},{key:"render",value:function(){var e=this.state,t=e.project,a=e.updated,r=this.handleChange,n=this.handleSubmit;return a?Object(b.jsx)(u.a,{to:"/my-projects/".concat(this.props.match.params.id)}):Object(b.jsx)(ue,{project:t,formHandler:n,changeHandler:r})}}]),a}(r.Component),be=Object(u.f)(pe),ge={border:"none",borderRadius:"10px",width:"auto",background:"black"},xe={margin:"auto",padding:"25px",width:"md"},Oe={margin:"auto",marginTop:"10px"},fe={height:"50px"},ve={backgroundColor:"black",borderRadius:"0px 0px 8px 8px",color:"white"},ye=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).state={projects:[]},r}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;(function(e){return E()({method:"GET",url:L+"/my-projects",headers:{Authorization:"Bearer ".concat(e.token)}})})(this.props.user).then((function(t){return e.setState({projects:t.data.projects})})).catch(console.error)}},{key:"render",value:function(){var e=this.state.projects.map((function(e){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(Q.a,{xs:12,md:6,lg:4,xl:4,style:Oe,children:Object(b.jsxs)(V.a,{style:ge,className:"m-auto",children:[Object(b.jsx)(C.b,{style:{margin:"auto"},to:"/my-projects/".concat(e._id),children:Object(b.jsx)(V.a.Img,{variant:"top",src:"".concat(e.image),style:xe})}),Object(b.jsxs)(V.a.Body,{style:ve,children:[Object(b.jsx)(V.a.Title,{style:fe,children:e.name}),Object(b.jsx)(V.a.Text,{children:e.description})]})]})},e._id)})}));return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h2",{children:"My Projects"}),Object(b.jsxs)(X.a,{children:[Object(b.jsx)("h3",{className:"text-light mt-5"}),Object(b.jsx)(Q.a,{xs:12,style:{marginTop:"10px"},children:Object(b.jsx)(X.a,{children:e})}),Object(b.jsx)("div",{className:"col-12 mt-5"})]})]})}}]),a}(r.Component),we=Object(u.f)(ye),Ce={border:"none",borderRadius:"10px",width:"auto",background:"black"},ke={margin:"auto",padding:"25px",width:"md"},Se={margin:"auto",marginTop:"10px"},Ae={height:"50px"},Pe={backgroundColor:"black",borderRadius:"0px 0px 8px 8px",color:"white"},Ne=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).destroy=function(){var e=r.props.user;(function(e,t){return E()({method:"DELETE",url:L+"/project/".concat(e),headers:{Authorization:"Bearer ".concat(t.token)}})})(r.props.match.params.id,e).then((function(){return r.setState({deleted:!0})})).catch(console.error)},r.state={project:{},deleted:!1},r}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;E()("".concat(L,"/my-projects/").concat(this.props.match.params.id)).then((function(t){return e.setState({project:t.data.project})})).catch(console.error)}},{key:"render",value:function(){var e=this.state,t=e.project;if(e.deleted)return Object(b.jsx)(u.a,{to:{pathname:"/my-projects",state:{msg:"Project successfully deleted!"}}});var a=function(e,t){return Object(b.jsx)("li",{children:e},t)};return Object(b.jsx)(X.a,{children:Object(b.jsx)(Q.a,{xs:10,md:8,style:Se,children:Object(b.jsxs)(V.a,{style:Ce,className:"m-auto",children:[Object(b.jsx)(V.a.Img,{variant:"top",src:"".concat(t.image),style:ke}),Object(b.jsxs)(V.a.Body,{style:Pe,children:[Object(b.jsx)(V.a.Title,{style:Ae,children:t.name}),Object(b.jsx)(F.a,{onClick:this.destroy,children:"Delete"}),Object(b.jsx)(C.b,{to:"/my-projects/".concat(t._id,"/edit"),children:Object(b.jsx)("button",{children:"Edit"})}),Object(b.jsxs)(V.a.Text,{children:["Tools :"," ",t.tools?t.tools.map(a):"Loading..."]}),Object(b.jsxs)(V.a.Text,{children:["Materials :"," ",t.materials?t.materials.map(a):"Loading..."]}),Object(b.jsxs)(V.a.Text,{children:["Steps :",Object(b.jsx)("ol",{children:t.steps?t.steps.map(a):"Loading..."})]})]})]})})})}}]),a}(r.Component),Te=Object(u.f)(Ne),Ie=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).setUser=function(e){return r.setState({user:e})},r.clearUser=function(){return r.setState({user:null})},r.deleteAlert=function(e){r.setState((function(t){return{msgAlerts:t.msgAlerts.filter((function(t){return t.id!==e}))}}))},r.msgAlert=function(e){var t=e.heading,a=e.message,n=e.variant,s=Object(h.a)();r.setState((function(e){return{msgAlerts:[].concat(Object(o.a)(e.msgAlerts),[{heading:t,message:a,variant:n,id:s}])}}))},r.state={user:null,msgAlerts:[],owner:r.user,projects:[]},r}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;je().then((function(t){return e.setState({projects:t.data.projects})})).catch(console.error)}},{key:"render",value:function(){var e=this,t=this.state,a=t.msgAlerts,n=t.user,s=t.projects;return Object(b.jsxs)(r.Fragment,{children:[Object(b.jsx)(N,{user:n,projects:s}),a.map((function(t){return Object(b.jsx)(f,{heading:t.heading,variant:t.variant,message:t.message,id:t.id,deleteAlert:e.deleteAlert},t.id)})),Object(b.jsxs)("main",{className:"container",children:[Object(b.jsx)(u.b,{path:"/sign-up",render:function(){return Object(b.jsx)(M,{msgAlert:e.msgAlert,setUser:e.setUser})}}),Object(b.jsx)(u.b,{path:"/sign-in",render:function(){return Object(b.jsx)(_,{msgAlert:e.msgAlert,setUser:e.setUser})}}),Object(b.jsx)(u.b,{exact:!0,path:"/projects",render:function(){return Object(b.jsx)(re,{msgAlert:e.msgAlert,projects:s})}}),Object(b.jsx)(u.b,{exact:!0,path:"/projects/:id",render:function(){return Object(b.jsx)(de,{msgAlert:e.msgAlert,user:n,projects:s})}}),Object(b.jsx)(x,{user:n,exact:!0,path:"/my-projects",render:function(){return Object(b.jsx)(we,{msgAlert:e.msgAlert,clearUser:e.clearUser,user:n})}}),Object(b.jsx)(x,{user:n,exact:!0,path:"/my-projects/:id",render:function(){return Object(b.jsx)(Te,{msgAlert:e.msgAlert,clearUser:e.clearUser,user:n})}}),Object(b.jsx)(x,{user:n,exact:!0,path:"/my-projects/:id/edit",render:function(){return Object(b.jsx)(be,{msgAlert:e.msgAlert,clearUser:e.clearUser,user:n})}}),Object(b.jsx)(x,{user:n,path:"/create-project",render:function(){return Object(b.jsx)(me,{msgAlert:e.msgAlert,clearUser:e.clearUser,user:n})}}),Object(b.jsx)(x,{user:n,path:"/sign-out",render:function(){return Object(b.jsx)(J,{msgAlert:e.msgAlert,clearUser:e.clearUser,user:n})}}),Object(b.jsx)(x,{user:n,path:"/change-password",render:function(){return Object(b.jsx)(K,{msgAlert:e.msgAlert,user:n})}})]})]})}}]),a}(r.Component),Ue=Object(b.jsx)(C.a,{basename:"/BuiltIT-Client",children:Object(b.jsx)(Ie,{})});c.a.render(Ue,document.getElementById("root"))},75:function(e,t,a){},85:function(e,t,a){}},[[106,1,2]]]);
//# sourceMappingURL=main.f3fd9e28.chunk.js.map