(this["webpackJsonpbuilt-it"]=this["webpackJsonpbuilt-it"]||[]).push([[0],{106:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),s=r(31),o=r.n(s),c=(r(75),r(70)),i=r(10),l=r(11),d=r(13),j=r(12),u=r(16),h=r(115),b=r(40),m=r(66),p=r(1),g=["user","component","render"],x=function(e){var t=e.user,r=e.component,a=e.render,n=Object(m.a)(e,g);return t&&a?Object(p.jsx)(u.b,Object(b.a)(Object(b.a)({},n),{},{render:a})):Object(p.jsx)(u.b,Object(b.a)(Object(b.a)({},n),{},{render:function(e){return t?Object(p.jsx)(r,Object(b.a)({},e)):Object(p.jsx)(u.a,{to:"/"})}}))},O=r(57),f=(r(85),function(e){Object(d.a)(r,e);var t=Object(j.a)(r);function r(e){var a;return Object(i.a)(this,r),(a=t.call(this,e)).handleClose=function(){return a.setState({show:!1})},a.state={show:!0},a.timeoutId=null,a}return Object(l.a)(r,[{key:"componentDidMount",value:function(){this.timeoutId=setTimeout(this.handleClose,5e3)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeoutId)}},{key:"render",value:function(){var e=this.props,t=e.variant,r=e.heading,a=e.message,n=e.deleteAlert,s=e.id;return this.state.show||setTimeout((function(){n(s)}),300),Object(p.jsx)(O.a,{show:this.state.show,variant:t,onClose:this.handleClose,children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)(O.a.Heading,{children:r}),Object(p.jsx)("p",{className:"alert-body",children:a})]})})}}]),r}(n.a.Component)),y=r(116),v=r(117),w=r(113),C=r(7),k=Object(p.jsxs)(a.Fragment,{children:[Object(p.jsx)(C.c,{to:"/my-projects",className:"nav-link",children:"My Projects"}),Object(p.jsx)(C.c,{to:"/create-project",className:"nav-link",children:"Create a Project"}),Object(p.jsx)(C.c,{to:"/change-password",className:"nav-link",children:"Change Password"}),Object(p.jsx)(C.c,{to:"/sign-out",className:"nav-link",children:"Sign Out"})]}),S=Object(p.jsx)(a.Fragment,{children:Object(p.jsx)(C.c,{to:"/sign-in",className:"nav-link",children:"Sign In"})}),A=Object(p.jsxs)(a.Fragment,{children:[Object(p.jsx)(C.c,{to:"/projects",className:"nav-link",children:"Projects"}),Object(p.jsx)(C.c,{to:"/",className:"nav-link",children:"Home"})]}),N=function(e){var t=e.user;return Object(p.jsxs)(y.a,{id:"basic-navbar-nav",bg:"dark",variant:"dark",expand:"md",children:[Object(p.jsx)(y.a.Brand,{children:Object(p.jsx)(C.b,{to:"/",style:{color:"#FFF",textDecoration:"none"},children:"BuiltIT"})}),Object(p.jsx)(y.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(p.jsxs)(y.a.Collapse,{id:"basic-navbar-nav",children:[Object(p.jsx)(v.a,{className:"mr-auto",children:t&&Object(p.jsxs)("span",{className:"navbar-text mr-2",children:["Welcome, ",t.email]})}),Object(p.jsx)(w.a,{id:"basic-nav-dropdown",bg:"primary",title:"My Account",className:"ms-auto",children:t?k:S}),Object(p.jsx)(v.a,{className:"ml-auto",children:A})]})]})},P=r(29),T="https://murmuring-atoll-11579.herokuapp.com",I="http://localhost:4741",L="localhost"===window.location.hostname?I:T,U=r(17),B=r.n(U),D=function(e){return B()({url:L+"/sign-in/",method:"POST",data:{credentials:{email:e.email,password:e.password}}})},F=r(9),E=r(30),M={background:"rgba(0, 0, 0, 0.5)",margin:"auto",padding:"25px",width:"md",color:"rgba(240, 230, 180, 0.8)"},z={color:"blue",border:"none",background:"rgba(240, 230, 180, 0.8)",fontSize:"1.2em",fontWeight:"bolder",width:"100%"},G=function(e){Object(d.a)(r,e);var t=Object(j.a)(r);function r(e){var a;return Object(i.a)(this,r),(a=t.call(this,e)).handleChange=function(e){return a.setState(Object(P.a)({},e.target.name,e.target.value))},a.onSignUp=function(e){e.preventDefault();var t,r=a.props,n=r.msgAlert,s=r.history,o=r.setUser;(t=a.state,B()({method:"POST",url:L+"/sign-up/",data:{credentials:{email:t.email,firstName:t.lastName,lastName:t.lastName,password:t.password,password_confirmation:t.passwordConfirmation}}})).then((function(){return D(a.state)})).then((function(e){return o(e.data.user)})).then((function(){return n({heading:"Sign Up Success",message:"Succesfully registered! You've been signed in as well.",variant:"success"})})).then((function(){return s.push("/")})).catch((function(e){a.setState({name:"",lastName:"",email:"",password:"",passwordConfirmation:""}),n({heading:"Sign Up Failed with error: "+e.message,message:"Registration failed. Email may be taken, or passwords don't match.",variant:"danger"})}))},a.state={firstName:"",lastName:"",email:"",password:"",passwordConfirmation:""},a}return Object(l.a)(r,[{key:"render",value:function(){var e=this.state,t=e.email,r=e.password,a=e.passwordConfirmation;return Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{style:M,className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(p.jsx)("h2",{children:"Sign Up"}),Object(p.jsxs)(F.a,{onSubmit:this.onSignUp,children:[Object(p.jsxs)(F.a.Group,{controlId:"email",children:[Object(p.jsx)(F.a.Label,{children:"Email address"}),Object(p.jsx)(F.a.Control,{required:!0,type:"email",name:"email",value:t,placeholder:"Enter email",onChange:this.handleChange})]}),Object(p.jsx)("br",{}),Object(p.jsxs)(F.a.Group,{controlId:"password",children:[Object(p.jsx)(F.a.Label,{children:"Password"}),Object(p.jsx)(F.a.Control,{required:!0,name:"password",value:r,type:"password",autoComplete:"on",placeholder:"Password",onChange:this.handleChange})]}),Object(p.jsxs)(F.a.Group,{controlId:"passwordConfirmation",children:[Object(p.jsx)(F.a.Label,{children:"Password Confirmation"}),Object(p.jsx)(F.a.Control,{required:!0,name:"passwordConfirmation",value:a,type:"password",autoComplete:"on",placeholder:"Confirm Password",onChange:this.handleChange})]}),Object(p.jsx)("br",{}),Object(p.jsx)(E.a,{style:z,type:"submit",children:"Sign Up"})]}),Object(p.jsx)("br",{})]})})}}]),r}(a.Component),W=Object(u.f)(G),q={background:"rgba(0, 0, 0, 0.5)",margin:"auto",padding:"25px",width:"md",color:"rgba(240, 230, 180, 0.8)"},H={color:"blue",border:"none",background:"rgba(240, 230, 180, 0.8)",fontSize:"1.2em",fontWeight:"bolder",width:"100%"},R=function(e){Object(d.a)(r,e);var t=Object(j.a)(r);function r(e){var a;return Object(i.a)(this,r),(a=t.call(this,e)).handleChange=function(e){return a.setState(Object(P.a)({},e.target.name,e.target.value))},a.onSignIn=function(e){e.preventDefault();var t=a.props,r=t.msgAlert,n=t.history,s=t.setUser;D(a.state).then((function(e){return s(e.data.user)})).then((function(){return r({heading:"Welcome to BuildIt",message:"Let's build something, together!",variant:"success"})})).then((function(){return n.push("/projects")})).catch((function(e){a.setState({email:"",password:""}),r({heading:"Sign In Failed with error: "+e.message,message:"Failed to sign in. Check your email and password and try again.",variant:"danger"})}))},a.state={email:"",password:""},a}return Object(l.a)(r,[{key:"render",value:function(){var e=this.state,t=e.email,r=e.password;return Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{style:q,className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(p.jsx)("h2",{children:"Sign In"}),Object(p.jsxs)(F.a,{onSubmit:this.onSignIn,children:[Object(p.jsxs)(F.a.Group,{controlId:"email",children:[Object(p.jsx)(F.a.Label,{children:"Email address"}),Object(p.jsx)(F.a.Control,{required:!0,type:"email",name:"email",value:t,placeholder:"Enter email",onChange:this.handleChange})]}),Object(p.jsx)("br",{}),Object(p.jsxs)(F.a.Group,{controlId:"password",children:[Object(p.jsx)(F.a.Label,{children:"Password"}),Object(p.jsx)(F.a.Control,{required:!0,name:"password",value:r,type:"password",autoComplete:"on",placeholder:"Password",onChange:this.handleChange})]}),Object(p.jsx)("br",{}),Object(p.jsx)(E.a,{style:H,type:"submit",size:"lg",children:"Sign In"})]}),Object(p.jsx)("br",{}),Object(p.jsxs)("h5",{children:["New to BuildIt? ",Object(p.jsx)(C.b,{to:"/sign-up",children:" Sign up now"})]})]})})}}]),r}(a.Component),_=Object(u.f)(R),J=function(e){Object(d.a)(r,e);var t=Object(j.a)(r);function r(){return Object(i.a)(this,r),t.apply(this,arguments)}return Object(l.a)(r,[{key:"componentDidMount",value:function(){var e=this.props,t=e.msgAlert,r=e.history,a=e.clearUser;(function(e){return B()({url:L+"/sign-out/",method:"DELETE",headers:{Authorization:"Bearer ".concat(e.token)}})})(e.user).finally((function(){return t({heading:"Signed Out Successfully",message:"Come back soon!",variant:"success"})})).finally((function(){return r.push("/")})).finally((function(){return a()}))}},{key:"render",value:function(){return""}}]),r}(a.Component),Y=Object(u.f)(J),K={background:"rgba(0, 0, 0, 0.5)",margin:"auto",padding:"25px",width:"md",color:"rgba(240, 230, 180, 0.8)"},Q={color:"blue",border:"none",background:"rgba(240, 230, 180, 0.8)",fontSize:"1.2em",fontWeight:"bolder",width:"100%"},V=function(e){Object(d.a)(r,e);var t=Object(j.a)(r);function r(e){var a;return Object(i.a)(this,r),(a=t.call(this,e)).handleChange=function(e){return a.setState(Object(P.a)({},e.target.name,e.target.value))},a.onChangePassword=function(e){e.preventDefault();var t=a.props,r=t.msgAlert,n=t.history,s=t.user;(function(e,t){return B()({url:L+"/change-password/",method:"PATCH",headers:{Authorization:"Bearer ".concat(t.token)},data:{passwords:{old:e.oldPassword,new:e.newPassword}}})})(a.state,s).then((function(){return r({heading:"Change Password Success",message:"Password changed successfully!",variant:"success"})})).then((function(){return n.push("/")})).catch((function(e){a.setState({oldPassword:"",newPassword:""}),r({heading:"Change Password Failed with error: "+e.message,message:"Failed to change passwords. Check your old password and try again.",variant:"danger"})}))},a.state={oldPassword:"",newPassword:""},a}return Object(l.a)(r,[{key:"render",value:function(){var e=this.state,t=e.oldPassword,r=e.newPassword;return Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{style:K,className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(p.jsx)("h3",{children:"Change Password"}),Object(p.jsxs)(F.a,{onSubmit:this.onChangePassword,children:[Object(p.jsxs)(F.a.Group,{controlId:"oldPassword",children:[Object(p.jsx)(F.a.Label,{children:"Old password"}),Object(p.jsx)(F.a.Control,{required:!0,name:"oldPassword",value:t,type:"password",placeholder:"Old Password",autoComplete:"on",onChange:this.handleChange})]}),Object(p.jsx)("br",{}),Object(p.jsxs)(F.a.Group,{controlId:"newPassword",children:[Object(p.jsx)(F.a.Label,{children:"New Password"}),Object(p.jsx)(F.a.Control,{required:!0,name:"newPassword",value:r,type:"password",placeholder:"New Password",autoComplete:"on",onChange:this.handleChange})]}),Object(p.jsx)("br",{}),Object(p.jsx)(E.a,{style:Q,variant:"primary",type:"submit",children:"Change Password"})]})]})})}}]),r}(a.Component),X=Object(u.f)(V),Z=r(69),$=r(118),ee=r(112),te={margin:"auto",padding:"25px",width:"md",height:"200px"},re={margin:"auto",marginTop:"10px"},ae={height:"50px"},ne={borderRadius:"0px 0px 8px 8px",color:"white"},se={border:"none",borderRadius:"10px",width:"350",background:"rgba(0, 0, 0, 0.7)"},oe=function(e){Object(d.a)(r,e);var t=Object(j.a)(r);function r(e){var a;return Object(i.a)(this,r),(a=t.call(this,e)).state={},a}return Object(l.a)(r,[{key:"componentDidMount",value:function(){var e=this;B()("".concat(L,"/projects")).then((function(t){return e.setState({project:t.data.project})})).catch(console.error)}},{key:"render",value:function(){var e=this.props.projects.map((function(e){return Object(p.jsx)(Z.a,{xs:12,md:6,lg:4,xl:4,style:re,children:Object(p.jsxs)($.a,{style:se,className:"m-auto",children:[Object(p.jsx)(C.b,{style:{margin:"auto"},to:"/projects/".concat(e._id),children:Object(p.jsx)($.a.Img,{variant:"top",src:"".concat(e.image),style:te})}),Object(p.jsxs)($.a.Body,{style:ne,children:[Object(p.jsx)($.a.Title,{style:ae,children:e.name}),Object(p.jsx)($.a.Text,{children:e.description})]})]})},e._id)}));return Object(p.jsxs)(ee.a,{children:[Object(p.jsx)("h3",{className:"text-light mt-5"}),Object(p.jsx)(Z.a,{xs:12,style:{marginTop:"10px"},children:Object(p.jsx)(ee.a,{children:e})}),Object(p.jsx)("div",{className:"col-12 mt-5"})]})}}]),r}(a.Component),ce=Object(u.f)(oe),ie={border:"none",borderRadius:"10px",width:"auto",background:"rgba(0, 0, 0, 0.7)"},le={margin:"auto",padding:"25px",width:"md"},de={margin:"auto",marginTop:"10px"},je={height:"50px"},ue={borderRadius:"0px 0px 8px 8px",color:"white"},he={fontSize:"16px",fontWeight:"400"},be={color:"black",border:"auto",background:"rgba(240, 230, 180, 0.3)",fontSize:"1.2em",fontWeight:"bolder",width:"100%",marginBottom:"6px"},me=function(e){Object(d.a)(r,e);var t=Object(j.a)(r);function r(e){var a;return Object(i.a)(this,r),(a=t.call(this,e)).state={project:{}},a}return Object(l.a)(r,[{key:"componentDidMount",value:function(){var e=this;B()("".concat(L,"/projects/").concat(this.props.match.params.id)).then((function(t){return e.setState({project:t.data.project})})).catch(console.error)}},{key:"render",value:function(){var e=this.state.project,t=function(e,t){return Object(p.jsx)("li",{children:e},t)};return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(ee.a,{children:Object(p.jsx)(Z.a,{xs:10,md:8,style:de,children:Object(p.jsxs)($.a,{style:ie,className:"m-auto",children:[Object(p.jsx)($.a.Img,{variant:"top",src:"".concat(e.image),style:le}),Object(p.jsxs)($.a.Body,{style:ue,children:[Object(p.jsx)($.a.Title,{style:je,children:e.name}),Object(p.jsxs)($.a.Text,{children:["Tools :"," ",e.tools?e.tools.map(t):"Loading..."]}),Object(p.jsxs)($.a.Text,{children:["Materials :"," ",e.materials?e.materials.map(t):"Loading..."]}),Object(p.jsxs)($.a.Title,{style:he,children:["Steps :",Object(p.jsx)("ol",{children:e.steps?e.steps.map(t):"Loading..."})]}),Object(p.jsx)(C.b,{className:"btn",role:"button",style:be,to:"/projects/",children:"Back"})]})]})})})})}}]),r}(a.Component),pe=Object(u.f)(me),ge=function(){return B()({method:"GET",url:L+"/projects"})},xe={background:"rgba(0, 0, 0, 0.5)",margin:"auto",padding:"25px",width:"md",color:"rgba(240, 230, 180, 0.8)"},Oe={color:"yellow",border:"auto",background:"rgba(240, 230, 180, 0.3)",fontSize:"1.2em",fontWeight:"bolder",width:"90%",marginBottom:"6px",marginLeft:"5%"},fe={color:"black",border:"auto",background:"rgba(240, 230, 180, 0.8)",fontSize:"1.2em",fontWeight:"bolder",width:"100%",marginBottom:"6px"},ye=function(e){Object(d.a)(r,e);var t=Object(j.a)(r);function r(e){var a;return Object(i.a)(this,r),(a=t.call(this,e)).state={},a}return Object(l.a)(r,[{key:"render",value:function(){var e=this.props,t=e.project,r=e.formHandler,a=e.changeHandler,n=e.listHandler;return Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{style:xe,className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(p.jsx)("h3",{children:t?"Edit Project":"Create Project"}),Object(p.jsxs)(F.a,{onSubmit:r,children:[Object(p.jsxs)(F.a.Group,{controlId:"name",children:[Object(p.jsx)(F.a.Label,{children:"Title"}),Object(p.jsx)(F.a.Control,{required:!0,name:"name",value:t?t.name:this.state.value,type:"name",placeholder:t&&t.name?t.name:"Title",onChange:a,passive:"true"})]}),Object(p.jsxs)(F.a.Group,{controlId:"category",children:[Object(p.jsx)(F.a.Label,{children:"Category"}),Object(p.jsx)(F.a.Control,{required:!0,name:"category",value:t?t.category:this.state.value,type:"category",placeholder:t&&t.category?t.category:"Category",onChange:a,passive:"true"})]}),Object(p.jsxs)(F.a.Group,{controlId:"description",children:[Object(p.jsx)(F.a.Label,{children:"Description"}),Object(p.jsx)(F.a.Control,{required:!0,name:"description",value:t?t.description:this.state.value,type:"Description",placeholder:t&&t.description?t.description:"Description",onChange:a,as:"textarea",rows:3,passive:"true"})]}),Object(p.jsxs)(F.a.Group,{controlId:"tools",children:[Object(p.jsx)(F.a.Label,{children:"Tools"}),Object(p.jsx)(F.a.Control,{required:!0,name:"tools",value:t?t.tools:this.state.value,type:"tools",placeholder:t&&t.tools?t.tools:"Tools separated by commas",onChange:n,passive:"true"})]}),Object(p.jsxs)(F.a.Group,{controlId:"materials",children:[Object(p.jsx)(F.a.Label,{children:"Materials"}),Object(p.jsx)(F.a.Control,{required:!0,name:"materials",value:t?t.materials:this.state.value,type:"materials",placeholder:t&&t.materials?t.materials:"Materials, separated by commas",onChange:n})]}),Object(p.jsxs)(F.a.Group,{controlId:"steps",children:[Object(p.jsx)(F.a.Label,{children:"Steps"}),Object(p.jsx)(F.a.Control,{required:!0,name:"steps",value:t?t.steps:this.state.value,type:"steps",placeholder:t&&t.steps?t.steps:"Steps, separated by commas",onChange:n,as:"textarea",rows:7,passive:"true"})]}),Object(p.jsxs)(F.a.Group,{controlId:"image",children:[Object(p.jsx)(F.a.Label,{children:"Image"}),Object(p.jsx)(F.a.Control,{required:!0,name:"image",value:t?t.image:this.state.value,type:"image",placeholder:t&&!t.image?t.image:"image url",onChange:a,as:"textarea",passive:"true"})]}),Object(p.jsx)("br",{}),Object(p.jsx)(E.a,{className:"text-center",style:Oe,variant:"primary",type:"submit",children:"Submit"}),Object(p.jsx)(C.b,{className:"btn",role:"button",style:fe,to:t?"/my-projects/".concat(t._id):"/my-projects/",children:"Cancel"})]})]})})}}]),r}(a.Component),ve=function(e){Object(d.a)(r,e);var t=Object(j.a)(r);function r(e){var a;return Object(i.a)(this,r),(a=t.call(this,e)).arrayMaker=function(e){return e.split(",")},a.handleArrayChange=function(e){var t=a.state.project,r=a.arrayMaker(e.target.value);t[e.target.name]=r,a.setState({project:t})},a.handleChange=function(e){var t=a.state.project;t[e.target.name]=e.target.value,a.setState({project:t})},a.onCreateProject=function(e){e.preventDefault();var t=a.props,r=t.msgAlert,n=t.history,s=t.user;(function(e,t){return B()({method:"POST",url:L+"/projects",data:{project:{name:e.name,category:e.category,description:e.description,image:e.image,tools:e.tools,materials:e.materials,steps:e.steps}},headers:{Authorization:"Bearer ".concat(t.token)}})})(a.state.project,s).then((function(){return r({heading:"Project Created Success",message:"Thank you for posting your project!",variant:"success"})})).catch(console.error).then(ge().then((function(e){return a.setState({projects:e.data.projects})}))).then((function(){return n.push("/my-projects")})).catch((function(e){a.setState({name:"",category:"",description:"",image:"",tools:"",materials:"",steps:[]}),r({heading:"Create Project Failed with error: "+e.message,message:"Something went wrong",variant:"danger"})}))},a.state={project:{}},a}return Object(l.a)(r,[{key:"render",value:function(){return Object(p.jsx)(ye,{formHandler:this.onCreateProject,changeHandler:this.handleChange,listHandler:this.handleArrayChange})}}]),r}(a.Component),we=Object(u.f)(ve),Ce=function(e){Object(d.a)(r,e);var t=Object(j.a)(r);function r(e){var a;return Object(i.a)(this,r),(a=t.call(this,e)).handleChange=function(e){var t=a.state.project;t[e.target.name]=e.target.value,a.setState({project:t})},a.arrayMaker=function(e){return e.split(",")},a.handleArrayChange=function(e){e.preventDefault();var t=a.state.project,r=a.arrayMaker(e.target.value);t[e.target.name]=r,a.setState({project:t})},a.handleSubmit=function(e){e.preventDefault();var t=a.state.project,r=a.props,n=r.user,s=r.msgAlert;(function(e,t,r){return B()({method:"PATCH",url:L+"/my-projects/".concat(e),data:{project:{name:t.name,category:t.category,description:t.description,image:t.image,tools:t.tools,materials:t.materials,steps:t.steps}},headers:{Authorization:"Bearer ".concat(r.token)}})})(a.props.match.params.id,t,n).then((function(){return a.setState({updated:!0})})).then((function(){return s({heading:"Edit Project Success",message:"Your project has been updated",variant:"success"})})).catch((function(e){s({heading:"Edit Project Failed with error: "+e.message,message:"Failed to update",variant:"danger"})}))},a.state={project:{},updated:!1},a}return Object(l.a)(r,[{key:"componentDidMount",value:function(){var e=this;B()("".concat(L,"/my-projects/").concat(this.props.match.params.id)).then((function(t){return e.setState({project:t.data.project})})).catch(console.error)}},{key:"render",value:function(){var e=this.state,t=e.project,r=e.updated,a=this.handleChange,n=this.handleSubmit,s=this.handleArrayChange;return r?Object(p.jsx)(u.a,{to:"/my-projects/".concat(this.props.match.params.id)}):Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(ye,{project:t,formHandler:n,changeHandler:a,listHandler:s})})}}]),r}(a.Component),ke=Object(u.f)(Ce),Se={border:"none",borderRadius:"10px",width:"auto",background:"black"},Ae={margin:"auto",padding:"25px",width:"md"},Ne={margin:"auto",marginTop:"10px"},Pe={height:"50px"},Te={backgroundColor:"black",borderRadius:"0px 0px 8px 8px",color:"white"},Ie=function(e){Object(d.a)(r,e);var t=Object(j.a)(r);function r(e){var a;return Object(i.a)(this,r),(a=t.call(this,e)).state={projects:[]},a}return Object(l.a)(r,[{key:"componentDidMount",value:function(){var e=this;(function(e){return B()({method:"GET",url:L+"/my-projects",headers:{Authorization:"Bearer ".concat(e.token)}})})(this.props.user).then((function(t){return e.setState({projects:t.data.projects})})).catch(console.error)}},{key:"render",value:function(){var e=this.state.projects.map((function(e){return Object(p.jsx)(Z.a,{xs:12,md:6,lg:4,xl:4,style:Ne,children:Object(p.jsxs)($.a,{style:Se,className:"m-auto",children:[Object(p.jsx)(C.b,{style:{margin:"auto"},to:"/my-projects/".concat(e._id),children:Object(p.jsx)($.a.Img,{variant:"top",src:"".concat(e.image),style:Ae})}),Object(p.jsxs)($.a.Body,{style:Te,children:[Object(p.jsx)($.a.Title,{style:Pe,children:e.name}),Object(p.jsx)($.a.Text,{children:e.description})]})]})},e._id)}));return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h2",{children:"My Projects"}),Object(p.jsxs)(ee.a,{children:[Object(p.jsx)("h3",{className:"text-light mt-5"}),Object(p.jsx)(Z.a,{xs:12,style:{marginTop:"10px"},children:Object(p.jsx)(ee.a,{children:e})}),Object(p.jsx)("div",{className:"col-12 mt-5"})]})]})}}]),r}(a.Component),Le=Object(u.f)(Ie),Ue={margin:"auto",padding:"25px",width:"auto",height:"auto"},Be={margin:"auto",marginTop:"10px"},De={height:"50px"},Fe={borderRadius:"0px 0px 8px 8px",color:"white"},Ee={border:"none",borderRadius:"10px",width:"350",background:"rgba(0, 0, 0, 0.7)"},Me={color:"yellow",border:"auto",background:"rgba(240, 230, 180, 0.3)",fontSize:"1.2em",fontWeight:"bolder",width:"90%",marginBottom:"6px",marginLeft:"5%"},ze={color:"rgb(255, 99, 71)",background:"rgba(255, 99, 71, 0.25)",fontSize:"1.2em",fontWeight:"bolder",width:"90%",border:"none",marginBottom:"8px",marginLeft:"5%"},Ge={color:"black",border:"auto",background:"rgba(240, 230, 180, 0.8)",fontSize:"1.2em",fontWeight:"bolder",width:"100%",marginBottom:"6px"},We=function(e){Object(d.a)(r,e);var t=Object(j.a)(r);function r(e){var a;return Object(i.a)(this,r),(a=t.call(this,e)).destroy=function(){var e=a.props.user;(function(e,t){return B()({method:"DELETE",url:L+"/project/".concat(e),headers:{Authorization:"Bearer ".concat(t.token)}})})(a.props.match.params.id,e).then((function(){return a.setState({deleted:!0})})).catch(console.error)},a.state={project:{},deleted:!1},a}return Object(l.a)(r,[{key:"componentDidMount",value:function(){var e=this;B()("".concat(L,"/my-projects/").concat(this.props.match.params.id)).then((function(t){return e.setState({project:t.data.project})})).catch(console.error)}},{key:"render",value:function(){var e=this;if(this.state.deleted)return Object(p.jsx)(u.a,{to:{pathname:"/my-projects",state:{msg:"Project successfully deleted!"}}});var t=this.state.project,r=function(e,t){return Object(p.jsx)("li",{children:e},t)};return Object(p.jsx)(ee.a,{children:Object(p.jsx)(Z.a,{xs:10,md:8,style:Be,children:Object(p.jsxs)($.a,{style:Ee,className:"m-auto",children:[Object(p.jsx)($.a.Img,{variant:"top",src:"".concat(t.image),style:Ue}),Object(p.jsxs)($.a.Body,{style:Fe,children:[Object(p.jsx)($.a.Title,{style:De,children:t.name}),Object(p.jsx)($.a.Text,{children:t.description}),Object(p.jsxs)($.a.Text,{children:["Tools :"," ",t.tools?t.tools.map(r):"Loading..."]}),Object(p.jsxs)($.a.Text,{children:["Materials :"," ",t.materials?t.materials.map(r):"Loading..."]}),Object(p.jsxs)($.a.Title,{children:["Steps :",Object(p.jsx)("ol",{children:t.steps?t.steps.map(r):"Loading..."})]}),Object(p.jsx)(C.b,{className:"btn",role:"button",style:Me,to:"/my-projects/".concat(t._id,"/edit"),children:"Edit"}),Object(p.jsx)(E.a,{style:ze,onClick:function(){window.confirm("Are you sure you wish to delete this item?")&&e.destroy()},children:"Delete"}),Object(p.jsx)(C.b,{className:"btn",role:"button",style:Ge,to:"/my-projects/",children:"Back"})]})]})})})}}]),r}(a.Component),qe=Object(u.f)(We),He=r(114),Re={textAlign:"center",color:"black"},_e={background:"rgba(240, 230, 180, 0.42)",margin:"auto",padding:"25px",width:"md",color:"rgba(240, 230, 180, 0.8)"},Je={color:"black"},Ye=Object(u.f)((function(e){e.user;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("br",{}),Object(p.jsxs)("div",{style:_e,children:[Object(p.jsx)("br",{}),Object(p.jsx)("h1",{style:Re,children:" Welcome to BuildIt. What will you build next?"})]}),Object(p.jsx)("br",{}),Object(p.jsxs)(He.a,{style:Je,children:[Object(p.jsxs)(He.a.Item,{children:[Object(p.jsx)(C.b,{style:{margin:"auto"},to:"/sign-in",children:Object(p.jsx)("img",{className:"d-block w-100",src:"https://www.restyledhomes.blog/wp-content/uploads/2020/03/Easy-wood-DIY-home-projects-for-beginners-min-1.jpg",alt:"First slide"})}),Object(p.jsxs)(He.a.Caption,{children:[Object(p.jsx)("h3",{style:Je,children:"Learn to build amazing things"}),Object(p.jsx)("p",{style:Je,children:"Our step by step instructions let anyone with any experience get started."})]})]}),Object(p.jsxs)(He.a.Item,{children:[Object(p.jsx)(C.b,{style:{margin:"auto"},to:"/sign-in",children:Object(p.jsx)("img",{className:"d-block w-100",src:"https://i.ytimg.com/vi/u3NBJnsEHxg/maxresdefault.jpg",alt:"Second slide"})}),Object(p.jsxs)(He.a.Caption,{children:[Object(p.jsx)("h3",{style:Je,children:"Master new skills"}),Object(p.jsx)("p",{style:Je,children:"Learn to work with various tools and materials while having fun."})]})]}),Object(p.jsxs)(He.a.Item,{children:[Object(p.jsx)("img",{className:"d-block w-100",src:"https://diyprojects.com/wp-content/uploads/2016/05/young-pretty-girl-holding-brush-applying-glaze-woodworking-projects-for-kids-ss-Feature.jpg",alt:"Third slide"}),Object(p.jsxs)(He.a.Caption,{children:[Object(p.jsx)("h3",{style:Je,children:"Build memories"}),Object(p.jsx)("p",{style:Je,children:"Work with friends and family or fellow users from around the world, to build more than furniture."})]})]})]})]})})),Ke=function(e){Object(d.a)(r,e);var t=Object(j.a)(r);function r(e){var a;return Object(i.a)(this,r),(a=t.call(this,e)).setUser=function(e){return a.setState({user:e})},a.clearUser=function(){return a.setState({user:null})},a.deleteAlert=function(e){a.setState((function(t){return{msgAlerts:t.msgAlerts.filter((function(t){return t.id!==e}))}}))},a.msgAlert=function(e){var t=e.heading,r=e.message,n=e.variant,s=Object(h.a)();a.setState((function(e){return{msgAlerts:[].concat(Object(c.a)(e.msgAlerts),[{heading:t,message:r,variant:n,id:s}])}}))},a.state={user:null,msgAlerts:[],owner:a.user,projects:[]},a}return Object(l.a)(r,[{key:"componentDidMount",value:function(){var e=this;ge().then((function(t){return e.setState({projects:t.data.projects})})).catch(console.error)}},{key:"render",value:function(){var e=this,t=this.state,r=t.msgAlerts,n=t.user,s=t.projects;return Object(p.jsxs)(a.Fragment,{children:[Object(p.jsx)(N,{user:n,projects:s}),r.map((function(t){return Object(p.jsx)(f,{heading:t.heading,variant:t.variant,message:t.message,id:t.id,deleteAlert:e.deleteAlert},t.id)})),Object(p.jsxs)("main",{className:"container",children:[Object(p.jsx)(u.b,{exact:!0,path:"/",render:function(){return Object(p.jsx)(Ye,{msgAlert:e.msgAlert,setUser:e.setUser})}}),Object(p.jsx)(u.b,{path:"/sign-up",render:function(){return Object(p.jsx)(W,{msgAlert:e.msgAlert,setUser:e.setUser})}}),Object(p.jsx)(u.b,{path:"/sign-in",render:function(){return Object(p.jsx)(_,{msgAlert:e.msgAlert,setUser:e.setUser})}}),Object(p.jsx)(u.b,{exact:!0,path:"/projects",render:function(){return Object(p.jsx)(ce,{msgAlert:e.msgAlert,projects:s})}}),Object(p.jsx)(u.b,{exact:!0,path:"/projects/:id",render:function(){return Object(p.jsx)(pe,{msgAlert:e.msgAlert,user:n,projects:s})}}),Object(p.jsx)(x,{user:n,exact:!0,path:"/my-projects",render:function(){return Object(p.jsx)(Le,{msgAlert:e.msgAlert,clearUser:e.clearUser,user:n})}}),Object(p.jsx)(x,{user:n,exact:!0,path:"/my-projects/:id",render:function(){return Object(p.jsx)(qe,{msgAlert:e.msgAlert,clearUser:e.clearUser,user:n})}}),Object(p.jsx)(x,{user:n,exact:!0,path:"/my-projects/:id/edit",render:function(){return Object(p.jsx)(ke,{msgAlert:e.msgAlert,clearUser:e.clearUser,user:n})}}),Object(p.jsx)(x,{user:n,path:"/create-project",render:function(){return Object(p.jsx)(we,{msgAlert:e.msgAlert,clearUser:e.clearUser,user:n})}}),Object(p.jsx)(x,{user:n,path:"/sign-out",render:function(){return Object(p.jsx)(Y,{msgAlert:e.msgAlert,clearUser:e.clearUser,user:n})}}),Object(p.jsx)(x,{user:n,path:"/change-password",render:function(){return Object(p.jsx)(X,{msgAlert:e.msgAlert,user:n})}})]})]})}}]),r}(a.Component),Qe=Object(p.jsx)(C.a,{basename:"/BuiltIT-Client",children:Object(p.jsx)(Ke,{})});o.a.render(Qe,document.getElementById("root"))},75:function(e,t,r){},85:function(e,t,r){}},[[106,1,2]]]);
//# sourceMappingURL=main.e95b2a4e.chunk.js.map