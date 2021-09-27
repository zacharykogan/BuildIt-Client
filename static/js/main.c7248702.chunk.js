(this["webpackJsonpbuilt-it"]=this["webpackJsonpbuilt-it"]||[]).push([[0],{107:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),s=r(31),c=r.n(s),o=(r(76),r(71)),i=r(10),l=r(11),d=r(13),j=r(12),u=r(16),h=r(116),b=r(40),m=r(67),p=r(1),g=["user","component","render"],x=function(e){var t=e.user,r=e.component,a=e.render,n=Object(m.a)(e,g);return t&&a?Object(p.jsx)(u.b,Object(b.a)(Object(b.a)({},n),{},{render:a})):Object(p.jsx)(u.b,Object(b.a)(Object(b.a)({},n),{},{render:function(e){return t?Object(p.jsx)(r,Object(b.a)({},e)):Object(p.jsx)(u.a,{to:"/"})}}))},O=r(58),f=(r(86),function(e){Object(d.a)(r,e);var t=Object(j.a)(r);function r(e){var a;return Object(i.a)(this,r),(a=t.call(this,e)).handleClose=function(){return a.setState({show:!1})},a.state={show:!0},a.timeoutId=null,a}return Object(l.a)(r,[{key:"componentDidMount",value:function(){this.timeoutId=setTimeout(this.handleClose,5e3)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeoutId)}},{key:"render",value:function(){var e=this.props,t=e.variant,r=e.heading,a=e.message,n=e.deleteAlert,s=e.id;return this.state.show||setTimeout((function(){n(s)}),300),Object(p.jsx)(O.a,{show:this.state.show,variant:t,onClose:this.handleClose,children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)(O.a.Heading,{children:r}),Object(p.jsx)("p",{className:"alert-body",children:a})]})})}}]),r}(n.a.Component)),y=r(117),v=r(114),w=r(44),C=r(7),k={align:"right",color:"white"},S=Object(p.jsxs)(a.Fragment,{children:[Object(p.jsx)(C.c,{to:"/my-projects",className:"nav-link",children:"My Projects"}),Object(p.jsx)(C.c,{to:"/create-project",className:"nav-link",children:"Create a Project"}),Object(p.jsx)(C.c,{to:"/change-password",className:"nav-link",children:"Change Password"}),Object(p.jsx)(C.c,{to:"/sign-out",className:"nav-link",children:"Sign Out"})]}),A=Object(p.jsx)(a.Fragment,{children:Object(p.jsx)(C.c,{to:"/sign-in",className:"nav-link",children:"Sign In"})}),P=Object(p.jsxs)(a.Fragment,{children:[Object(p.jsx)(C.c,{to:"/",className:"nav-link",children:"Home"}),Object(p.jsx)(C.c,{to:"/projects",className:"nav-link",children:"Projects"})]}),N=function(e){var t=e.user;return Object(p.jsxs)(w.a,{sticky:"top",bg:"dark",variant:"dark",expand:"md",children:[Object(p.jsx)(w.a.Brand,{children:Object(p.jsx)(C.c,{to:"/",style:{color:"#FFF",textDecoration:"none"},children:"\ud83e\ude9c BuildIT"})}),Object(p.jsx)(w.a.Toggle,{variant:"dark","aria-controls":"basic-navbar-nav"}),Object(p.jsxs)(w.a.Collapse,{variant:"dark",id:"basic-navbar-nav",children:[Object(p.jsxs)(y.a,{className:"ms-auto",children:[" ",P]}),Object(p.jsxs)(v.a,{style:k,className:"ml-auto",variant:"dark",title:"My Account ",id:"nav-dropdown",children:["\ud83d\udee0\ufe0f",Object(p.jsx)(v.a.Item,{variant:"dark",className:"ml-auto",children:t&&Object(p.jsxs)("span",{className:"navbar-text mr-2",children:["Welcome, ",t.email.name]})}),Object(p.jsx)(v.a.Item,{variant:"dark",href:"#action/3.2",children:t?S:A})]})]})]})},T=r(29),I="https://murmuring-atoll-11579.herokuapp.com",U="http://localhost:4741",L="localhost"===window.location.hostname?U:I,F=r(17),D=r.n(F),E=function(e){return D()({url:L+"/sign-in/",method:"POST",data:{credentials:{email:e.email,password:e.password}}})},B=r(9),M=r(30),G={background:"rgba(0, 0, 0, 0.5)",margin:"auto",padding:"25px",width:"md",color:"rgba(240, 230, 180, 0.8)"},q={color:"blue",border:"none",background:"rgba(240, 230, 180, 0.8)",fontSize:"1.2em",fontWeight:"bolder",width:"100%"},z=function(e){Object(d.a)(r,e);var t=Object(j.a)(r);function r(e){var a;return Object(i.a)(this,r),(a=t.call(this,e)).handleChange=function(e){return a.setState(Object(T.a)({},e.target.name,e.target.value))},a.onSignUp=function(e){e.preventDefault();var t,r=a.props,n=r.msgAlert,s=r.history,c=r.setUser;(t=a.state,D()({method:"POST",url:L+"/sign-up/",data:{credentials:{email:t.email,firstName:t.lastName,lastName:t.lastName,password:t.password,password_confirmation:t.passwordConfirmation}}})).then((function(){return E(a.state)})).then((function(e){return c(e.data.user)})).then((function(){return n({heading:"Sign Up Success",message:"Succesfully registered! You've been signed in as well.",variant:"success"})})).then((function(){return s.push("/")})).catch((function(e){a.setState({name:"",lastName:"",email:"",password:"",passwordConfirmation:""}),n({heading:"Sign Up Failed with error: "+e.message,message:"Registration failed. Email may be taken, or passwords don't match.",variant:"danger"})}))},a.state={firstName:"",lastName:"",email:"",password:"",passwordConfirmation:""},a}return Object(l.a)(r,[{key:"render",value:function(){var e=this.state,t=e.email,r=e.password,a=e.passwordConfirmation;return Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{style:G,className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(p.jsx)("h2",{children:"Sign Up"}),Object(p.jsxs)(B.a,{onSubmit:this.onSignUp,children:[Object(p.jsxs)(B.a.Group,{controlId:"email",children:[Object(p.jsx)(B.a.Label,{children:"Email address"}),Object(p.jsx)(B.a.Control,{required:!0,type:"email",name:"email",value:t,placeholder:"Enter email",onChange:this.handleChange})]}),Object(p.jsx)("br",{}),Object(p.jsxs)(B.a.Group,{controlId:"password",children:[Object(p.jsx)(B.a.Label,{children:"Password"}),Object(p.jsx)(B.a.Control,{required:!0,name:"password",value:r,type:"password",autoComplete:"on",placeholder:"Password",onChange:this.handleChange})]}),Object(p.jsxs)(B.a.Group,{controlId:"passwordConfirmation",children:[Object(p.jsx)(B.a.Label,{children:"Password Confirmation"}),Object(p.jsx)(B.a.Control,{required:!0,name:"passwordConfirmation",value:a,type:"password",autoComplete:"on",placeholder:"Confirm Password",onChange:this.handleChange})]}),Object(p.jsx)("br",{}),Object(p.jsx)(M.a,{style:q,type:"submit",children:"Sign Up"})]}),Object(p.jsx)("br",{})]})})}}]),r}(a.Component),H=Object(u.f)(z),W={background:"rgba(0, 0, 0, 0.5)",margin:"auto",padding:"25px",width:"md",color:"rgba(240, 230, 180, 0.8)"},R={color:"blue",border:"none",background:"rgba(240, 230, 180, 0.8)",fontSize:"1.2em",fontWeight:"bolder",width:"100%"},_=function(e){Object(d.a)(r,e);var t=Object(j.a)(r);function r(e){var a;return Object(i.a)(this,r),(a=t.call(this,e)).handleChange=function(e){return a.setState(Object(T.a)({},e.target.name,e.target.value))},a.onSignIn=function(e){e.preventDefault();var t=a.props,r=t.msgAlert,n=t.history,s=t.setUser;E(a.state).then((function(e){return s(e.data.user)})).then((function(){return r({heading:"Welcome to BuildIt",message:"Let's build something, together!",variant:"success"})})).then((function(){return n.push("/projects")})).catch((function(e){a.setState({email:"",password:""}),r({heading:"Sign In Failed with error: "+e.message,message:"Failed to sign in. Check your email and password and try again.",variant:"danger"})}))},a.state={email:"",password:""},a}return Object(l.a)(r,[{key:"render",value:function(){var e=this.state,t=e.email,r=e.password;return Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{style:W,className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(p.jsx)("h2",{children:"Sign In"}),Object(p.jsxs)(B.a,{onSubmit:this.onSignIn,children:[Object(p.jsxs)(B.a.Group,{controlId:"email",children:[Object(p.jsx)(B.a.Label,{children:"Email address"}),Object(p.jsx)(B.a.Control,{required:!0,type:"email",name:"email",value:t,placeholder:"Enter email",onChange:this.handleChange})]}),Object(p.jsx)("br",{}),Object(p.jsxs)(B.a.Group,{controlId:"password",children:[Object(p.jsx)(B.a.Label,{children:"Password"}),Object(p.jsx)(B.a.Control,{required:!0,name:"password",value:r,type:"password",autoComplete:"on",placeholder:"Password",onChange:this.handleChange})]}),Object(p.jsx)("br",{}),Object(p.jsx)(M.a,{style:R,type:"submit",size:"lg",children:"Sign In"})]}),Object(p.jsx)("br",{}),Object(p.jsxs)("h5",{children:["New to BuildIt? ",Object(p.jsx)(C.b,{to:"/sign-up",children:" Sign up now"})]})]})})}}]),r}(a.Component),J=Object(u.f)(_),Y=function(e){Object(d.a)(r,e);var t=Object(j.a)(r);function r(){return Object(i.a)(this,r),t.apply(this,arguments)}return Object(l.a)(r,[{key:"componentDidMount",value:function(){var e=this.props,t=e.msgAlert,r=e.history,a=e.clearUser;(function(e){return D()({url:L+"/sign-out/",method:"DELETE",headers:{Authorization:"Bearer ".concat(e.token)}})})(e.user).finally((function(){return t({heading:"Signed Out Successfully",message:"Come back soon!",variant:"success"})})).finally((function(){return r.push("/")})).finally((function(){return a()}))}},{key:"render",value:function(){return""}}]),r}(a.Component),K=Object(u.f)(Y),Q={background:"rgba(0, 0, 0, 0.5)",margin:"auto",padding:"25px",width:"md",color:"rgba(240, 230, 180, 0.8)"},V={color:"blue",border:"none",background:"rgba(240, 230, 180, 0.8)",fontSize:"1.2em",fontWeight:"bolder",width:"100%"},X=function(e){Object(d.a)(r,e);var t=Object(j.a)(r);function r(e){var a;return Object(i.a)(this,r),(a=t.call(this,e)).handleChange=function(e){return a.setState(Object(T.a)({},e.target.name,e.target.value))},a.onChangePassword=function(e){e.preventDefault();var t=a.props,r=t.msgAlert,n=t.history,s=t.user;(function(e,t){return D()({url:L+"/change-password/",method:"PATCH",headers:{Authorization:"Bearer ".concat(t.token)},data:{passwords:{old:e.oldPassword,new:e.newPassword}}})})(a.state,s).then((function(){return r({heading:"Change Password Success",message:"Password changed successfully!",variant:"success"})})).then((function(){return n.push("/")})).catch((function(e){a.setState({oldPassword:"",newPassword:""}),r({heading:"Change Password Failed with error: "+e.message,message:"Failed to change passwords. Check your old password and try again.",variant:"danger"})}))},a.state={oldPassword:"",newPassword:""},a}return Object(l.a)(r,[{key:"render",value:function(){var e=this.state,t=e.oldPassword,r=e.newPassword;return Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{style:Q,className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(p.jsx)("h3",{children:"Change Password"}),Object(p.jsxs)(B.a,{onSubmit:this.onChangePassword,children:[Object(p.jsxs)(B.a.Group,{controlId:"oldPassword",children:[Object(p.jsx)(B.a.Label,{children:"Old password"}),Object(p.jsx)(B.a.Control,{required:!0,name:"oldPassword",value:t,type:"password",placeholder:"Old Password",onChange:this.handleChange})]}),Object(p.jsx)("br",{}),Object(p.jsxs)(B.a.Group,{controlId:"newPassword",children:[Object(p.jsx)(B.a.Label,{children:"New Password"}),Object(p.jsx)(B.a.Control,{required:!0,name:"newPassword",value:r,type:"password",placeholder:"New Password",onChange:this.handleChange})]}),Object(p.jsx)("br",{}),Object(p.jsx)(M.a,{style:V,variant:"primary",type:"submit",children:"Change Password"})]})]})})}}]),r}(a.Component),Z=Object(u.f)(X),$=r(70),ee=r(118),te=r(113),re={margin:"auto",padding:"25px",width:"md",height:"200px"},ae={margin:"auto",marginTop:"10px"},ne={height:"50px"},se={borderRadius:"0px 0px 8px 8px",color:"white"},ce={border:"none",borderRadius:"10px",width:"350",background:"rgba(0, 0, 0, 0.7)"},oe=Object(u.f)((function(e){var t=e.projects.map((function(e){return Object(p.jsx)($.a,{xs:12,md:6,lg:4,xl:4,style:ae,children:Object(p.jsxs)(ee.a,{style:ce,className:"m-auto",children:[Object(p.jsx)(C.b,{style:{margin:"auto"},to:"/projects/".concat(e._id),children:Object(p.jsx)(ee.a.Img,{variant:"top",src:"".concat(e.image),style:re})}),Object(p.jsxs)(ee.a.Body,{style:se,children:[Object(p.jsx)(ee.a.Title,{style:ne,children:e.name}),Object(p.jsx)(ee.a.Text,{children:e.description})]})]})},e._id)}));return Object(p.jsxs)(te.a,{children:[Object(p.jsx)("h3",{className:"text-light mt-5"}),Object(p.jsx)($.a,{xs:12,style:{marginTop:"10px"},children:Object(p.jsx)(te.a,{children:t})}),Object(p.jsx)("div",{className:"col-12 mt-5"})]})})),ie={border:"none",borderRadius:"10px",width:"auto",background:"rgba(0, 0, 0, 0.7)"},le={margin:"auto",padding:"25px",width:"md"},de={margin:"auto",marginTop:"10px"},je={height:"50px"},ue={borderRadius:"0px 0px 8px 8px",color:"white"},he={fontSize:"16px",fontWeight:"400"},be=function(e){Object(d.a)(r,e);var t=Object(j.a)(r);function r(e){var a;return Object(i.a)(this,r),(a=t.call(this,e)).state={project:{}},a}return Object(l.a)(r,[{key:"componentDidMount",value:function(){var e=this;D()("".concat(L,"/projects/").concat(this.props.match.params.id)).then((function(t){return e.setState({project:t.data.project})})).catch(console.error)}},{key:"render",value:function(){var e=this.state.project,t=function(e,t){return Object(p.jsx)("li",{children:e},t)};return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(te.a,{children:Object(p.jsx)($.a,{xs:10,md:8,style:de,children:Object(p.jsxs)(ee.a,{style:ie,className:"m-auto",children:[Object(p.jsx)(ee.a.Img,{variant:"top",src:"".concat(e.image),style:le}),Object(p.jsxs)(ee.a.Body,{style:ue,children:[Object(p.jsx)(ee.a.Title,{style:je,children:e.name}),Object(p.jsxs)(ee.a.Text,{children:["Tools :"," ",e.tools?e.tools.map(t):"Loading..."]}),Object(p.jsxs)(ee.a.Text,{children:["Materials :"," ",e.materials?e.materials.map(t):"Loading..."]}),Object(p.jsxs)(ee.a.Title,{style:he,children:["Steps :",Object(p.jsx)("ol",{children:e.steps?e.steps.map(t):"Loading..."})]})]})]})})})})}}]),r}(a.Component),me=Object(u.f)(be),pe=function(){return D()({method:"GET",url:L+"/projects"})},ge={background:"rgba(0, 0, 0, 0.5)",margin:"auto",padding:"25px",width:"md",color:"rgba(240, 230, 180, 0.8)"},xe={color:"blue",border:"none",background:"rgba(240, 230, 180, 0.8)",fontSize:"1.2em",fontWeight:"bolder",width:"100%"},Oe=function(e){var t=e.project,r=e.formHandler,a=e.changeHandler,n=e.listHandler;return Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{style:ge,className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(p.jsx)("h3",{children:t?"Edit Project":"Create Project"}),Object(p.jsxs)(B.a,{onSubmit:r,children:[Object(p.jsxs)(B.a.Group,{controlId:"name",children:[Object(p.jsx)(B.a.Label,{children:"Title"}),Object(p.jsx)(B.a.Control,{required:!0,name:"name",value:t?t.name:null,type:"name",placeholder:t&&t.name?t.name:"Title",onChange:a})]}),Object(p.jsxs)(B.a.Group,{controlId:"category",children:[Object(p.jsx)(B.a.Label,{children:"Category"}),Object(p.jsx)(B.a.Control,{required:!0,name:"category",value:t?t.category:null,type:"category",placeholder:t&&t.category?t.category:"Category",onChange:a})]}),Object(p.jsxs)(B.a.Group,{controlId:"description",children:[Object(p.jsx)(B.a.Label,{children:"Description"}),Object(p.jsx)(B.a.Control,{required:!0,name:"description",value:t?t.description:null,type:"Description",placeholder:t&&t.description?t.description:"Description",onChange:a,as:"textarea",rows:3})]}),Object(p.jsxs)(B.a.Group,{controlId:"tools",children:[Object(p.jsx)(B.a.Label,{children:"Tools"}),Object(p.jsx)(B.a.Control,{required:!0,name:"tools",value:t?t.tools:null,type:"tools",placeholder:t&&t.tools?t.tools:"Tools separated by commas",onChange:n})]}),Object(p.jsxs)(B.a.Group,{controlId:"materials",children:[Object(p.jsx)(B.a.Label,{children:"Materials"}),Object(p.jsx)(B.a.Control,{required:!0,name:"materials",value:t?t.materials:null,type:"materials",placeholder:t&&t.materials?t.materials:"Materials, separated by commas",onChange:n})]}),Object(p.jsxs)(B.a.Group,{controlId:"steps",children:[Object(p.jsx)(B.a.Label,{children:"Steps"}),Object(p.jsx)(B.a.Control,{required:!0,name:"steps",value:t?t.steps:null,type:"steps",placeholder:t&&t.steps?t.steps:"Steps, separated by commas",onChange:n,as:"textarea",rows:7})]}),Object(p.jsxs)(B.a.Group,{controlId:"image",children:[Object(p.jsx)(B.a.Label,{children:"Image"}),Object(p.jsx)(B.a.Control,{required:!0,name:"image",value:t?t.image:null,type:"image",placeholder:t&&!t.image?t.image:"image url",onChange:a,as:"textarea"})]}),Object(p.jsx)("br",{}),Object(p.jsx)(M.a,{style:xe,variant:"primary",type:"submit",children:"Submit"})]})]})})},fe=function(e){Object(d.a)(r,e);var t=Object(j.a)(r);function r(e){var a;return Object(i.a)(this,r),(a=t.call(this,e)).arrayMaker=function(e){return e.split(",")},a.handleArrayChange=function(e){var t=a.state.project,r=a.arrayMaker(e.target.value);t[e.target.name]=r,a.setState({project:t})},a.handleChange=function(e){var t=a.state.project;t[e.target.name]=e.target.value,a.setState({project:t})},a.onCreateProject=function(e){e.preventDefault();var t=a.props,r=t.msgAlert,n=t.history,s=t.user;(function(e,t){return D()({method:"POST",url:L+"/projects",data:{project:{name:e.name,category:e.category,description:e.description,image:e.image,tools:e.tools,materials:e.materials,steps:e.steps}},headers:{Authorization:"Bearer ".concat(t.token)}})})(a.state.project,s).then((function(){return r({heading:"Project Created Success",message:"Thank you for posting your project!",variant:"success"})})).catch(console.error).then(pe().then((function(e){return a.setState({projects:e.data.projects})}))).then((function(){return n.push("/my-projects")})).catch((function(e){a.setState({name:"",category:"",description:"",image:"",tools:"",materials:"",steps:[]}),r({heading:"Create Project Failed with error: "+e.message,message:"Something went wrong",variant:"danger"})}))},a.state={project:{}},a}return Object(l.a)(r,[{key:"render",value:function(){return Object(p.jsx)(Oe,{formHandler:this.onCreateProject,changeHandler:this.handleChange,listHandler:this.handleArrayChange})}}]),r}(a.Component),ye=Object(u.f)(fe),ve=function(e){Object(d.a)(r,e);var t=Object(j.a)(r);function r(e){var a;return Object(i.a)(this,r),(a=t.call(this,e)).handleChange=function(e){var t=a.state.project;t[e.target.name]=e.target.value,a.setState({project:t})},a.arrayMaker=function(e){return e.split(",")},a.handleArrayChange=function(e){e.preventDefault();var t=a.state.project,r=a.arrayMaker(e.target.value);t[e.target.name]=r,a.setState({project:t})},a.handleSubmit=function(e){e.preventDefault();var t=a.state.project,r=a.props,n=r.user,s=r.msgAlert;(function(e,t,r){return D()({method:"PATCH",url:L+"/my-projects/".concat(e),data:{project:{name:t.name,category:t.category,description:t.description,image:t.image,tools:t.tools,materials:t.materials,steps:t.steps}},headers:{Authorization:"Bearer ".concat(r.token)}})})(a.props.match.params.id,t,n).then((function(){return a.setState({updated:!0})})).then((function(){return s({heading:"Edit Project Success",message:"Your project has been updated",variant:"success"})})).catch((function(e){s({heading:"Edit Project Failed with error: "+e.message,message:"Failed to update",variant:"danger"})}))},a.state={project:{},updated:!1},a}return Object(l.a)(r,[{key:"componentDidMount",value:function(){var e=this;D()("".concat(L,"/my-projects/").concat(this.props.match.params.id)).then((function(t){return e.setState({project:t.data.project})})).catch(console.error)}},{key:"render",value:function(){var e=this.state,t=e.project,r=e.updated,a=this.handleChange,n=this.handleSubmit,s=this.handleArrayChange;return r?Object(p.jsx)(u.a,{to:"/my-projects/".concat(this.props.match.params.id)}):Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(Oe,{project:t,formHandler:n,changeHandler:a,listHandler:s})})}}]),r}(a.Component),we=Object(u.f)(ve),Ce={border:"none",borderRadius:"10px",width:"auto",background:"black"},ke={margin:"auto",padding:"25px",width:"md"},Se={margin:"auto",marginTop:"10px"},Ae={height:"50px"},Pe={backgroundColor:"black",borderRadius:"0px 0px 8px 8px",color:"white"},Ne=function(e){Object(d.a)(r,e);var t=Object(j.a)(r);function r(e){var a;return Object(i.a)(this,r),(a=t.call(this,e)).state={projects:[]},a}return Object(l.a)(r,[{key:"componentDidMount",value:function(){var e=this;(function(e){return D()({method:"GET",url:L+"/my-projects",headers:{Authorization:"Bearer ".concat(e.token)}})})(this.props.user).then((function(t){return e.setState({projects:t.data.projects})})).catch(console.error)}},{key:"render",value:function(){var e=this.state.projects.map((function(e){return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)($.a,{xs:12,md:6,lg:4,xl:4,style:Se,children:Object(p.jsxs)(ee.a,{style:Ce,className:"m-auto",children:[Object(p.jsx)(C.b,{style:{margin:"auto"},to:"/my-projects/".concat(e._id),children:Object(p.jsx)(ee.a.Img,{variant:"top",src:"".concat(e.image),style:ke})}),Object(p.jsxs)(ee.a.Body,{style:Pe,children:[Object(p.jsx)(ee.a.Title,{style:Ae,children:e.name}),Object(p.jsx)(ee.a.Text,{children:e.description})]})]})},e._id)})}));return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h2",{children:"My Projects"}),Object(p.jsxs)(te.a,{children:[Object(p.jsx)("h3",{className:"text-light mt-5"}),Object(p.jsx)($.a,{xs:12,style:{marginTop:"10px"},children:Object(p.jsx)(te.a,{children:e})}),Object(p.jsx)("div",{className:"col-12 mt-5"})]})]})}}]),r}(a.Component),Te=Object(u.f)(Ne),Ie={margin:"auto",padding:"25px",width:"md",height:"200px"},Ue={margin:"auto",marginTop:"10px"},Le={height:"50px"},Fe={borderRadius:"0px 0px 8px 8px",color:"white"},De={border:"none",borderRadius:"10px",width:"350",background:"rgba(0, 0, 0, 0.7)"},Ee=function(e){Object(d.a)(r,e);var t=Object(j.a)(r);function r(e){var a;return Object(i.a)(this,r),(a=t.call(this,e)).destroy=function(){var e=a.props.user;(function(e,t){return D()({method:"DELETE",url:L+"/project/".concat(e),headers:{Authorization:"Bearer ".concat(t.token)}})})(a.props.match.params.id,e).then((function(){return a.setState({deleted:!0})})).catch(console.error)},a.state={project:{},deleted:!1},a}return Object(l.a)(r,[{key:"componentDidMount",value:function(){var e=this;D()("".concat(L,"/my-projects/").concat(this.props.match.params.id)).then((function(t){return e.setState({project:t.data.project})})).catch(console.error)}},{key:"render",value:function(){var e=this.state,t=e.project;if(e.deleted)return Object(p.jsx)(u.a,{to:{pathname:"/my-projects",state:{msg:"Project successfully deleted!"}}});var r=function(e,t){return Object(p.jsx)("li",{children:e},t)};return Object(p.jsx)(te.a,{children:Object(p.jsx)($.a,{xs:10,md:8,style:Ue,children:Object(p.jsxs)(ee.a,{style:De,className:"m-auto",children:[Object(p.jsx)(ee.a.Img,{variant:"top",src:"".concat(t.image),style:Ie}),Object(p.jsxs)(ee.a.Body,{style:Fe,children:[Object(p.jsx)(ee.a.Title,{style:Le,children:t.name}),Object(p.jsx)(M.a,{onClick:this.destroy,children:"Delete"}),Object(p.jsx)(C.b,{to:"/my-projects/".concat(t._id,"/edit"),children:Object(p.jsx)("button",{children:"Edit"})}),Object(p.jsxs)(ee.a.Text,{children:["Tools :"," ",t.tools?t.tools.map(r):"Loading..."]}),Object(p.jsxs)(ee.a.Text,{children:["Materials :"," ",t.materials?t.materials.map(r):"Loading..."]}),Object(p.jsxs)(ee.a.Text,{children:["Steps :",Object(p.jsx)("ol",{children:t.steps?t.steps.map(r):"Loading..."})]})]})]})})})}}]),r}(a.Component),Be=Object(u.f)(Ee),Me=r(115),Ge={textAlign:"center",color:"rgba(240, 230, 180, 0.8)"},qe={background:"rgba(0, 0, 0, 0.5)",margin:"auto",padding:"25px",width:"md",color:"rgba(240, 230, 180, 0.8)"},ze={color:"black"},He=Object(u.f)((function(e){e.user;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("br",{}),Object(p.jsxs)("div",{style:qe,children:[Object(p.jsx)("br",{}),Object(p.jsx)("h1",{style:Ge,children:" Welcome to BuildIt. What will you build next?"})]}),Object(p.jsx)("br",{}),Object(p.jsxs)(Me.a,{style:ze,children:[Object(p.jsxs)(Me.a.Item,{children:[Object(p.jsx)(C.b,{style:{margin:"auto"},to:"/sign-in",children:Object(p.jsx)("img",{className:"d-block w-100",src:"https://www.restyledhomes.blog/wp-content/uploads/2020/03/Easy-wood-DIY-home-projects-for-beginners-min-1.jpg",alt:"First slide"})}),Object(p.jsxs)(Me.a.Caption,{children:[Object(p.jsx)("h3",{style:ze,children:"Learn to build amazing things"}),Object(p.jsx)("p",{style:ze,children:"Our step by step instructions let anyone with any experience get started."})]})]}),Object(p.jsxs)(Me.a.Item,{children:[Object(p.jsx)(C.b,{style:{margin:"auto"},to:"/sign-in",children:Object(p.jsx)("img",{className:"d-block w-100",src:"https://i.ytimg.com/vi/u3NBJnsEHxg/maxresdefault.jpg",alt:"Second slide"})}),Object(p.jsxs)(Me.a.Caption,{children:[Object(p.jsx)("h3",{style:ze,children:"Master new skills"}),Object(p.jsx)("p",{style:ze,children:"Learn to work with various tools and materials while having fun."})]})]}),Object(p.jsxs)(Me.a.Item,{children:[Object(p.jsx)("img",{className:"d-block w-100",src:"https://diyprojects.com/wp-content/uploads/2016/05/young-pretty-girl-holding-brush-applying-glaze-woodworking-projects-for-kids-ss-Feature.jpg",alt:"Third slide"}),Object(p.jsxs)(Me.a.Caption,{children:[Object(p.jsx)("h3",{style:ze,children:"Build memories"}),Object(p.jsx)("p",{style:ze,children:"Work with friends and family or fellow users from around the world, to build more than furniture."})]})]})]})]})})),We=function(e){Object(d.a)(r,e);var t=Object(j.a)(r);function r(e){var a;return Object(i.a)(this,r),(a=t.call(this,e)).setUser=function(e){return a.setState({user:e})},a.clearUser=function(){return a.setState({user:null})},a.deleteAlert=function(e){a.setState((function(t){return{msgAlerts:t.msgAlerts.filter((function(t){return t.id!==e}))}}))},a.msgAlert=function(e){var t=e.heading,r=e.message,n=e.variant,s=Object(h.a)();a.setState((function(e){return{msgAlerts:[].concat(Object(o.a)(e.msgAlerts),[{heading:t,message:r,variant:n,id:s}])}}))},a.state={user:null,msgAlerts:[],owner:a.user,projects:[]},a}return Object(l.a)(r,[{key:"componentDidMount",value:function(){var e=this;pe().then((function(t){return e.setState({projects:t.data.projects})})).catch(console.error)}},{key:"render",value:function(){var e=this,t=this.state,r=t.msgAlerts,n=t.user,s=t.projects;return Object(p.jsxs)(a.Fragment,{children:[Object(p.jsx)(N,{user:n,projects:s}),r.map((function(t){return Object(p.jsx)(f,{heading:t.heading,variant:t.variant,message:t.message,id:t.id,deleteAlert:e.deleteAlert},t.id)})),Object(p.jsxs)("main",{className:"container",children:[Object(p.jsx)(u.b,{exact:!0,path:"/",render:function(){return Object(p.jsx)(He,{msgAlert:e.msgAlert,setUser:e.setUser})}}),Object(p.jsx)(u.b,{path:"/sign-up",render:function(){return Object(p.jsx)(H,{msgAlert:e.msgAlert,setUser:e.setUser})}}),Object(p.jsx)(u.b,{path:"/sign-in",render:function(){return Object(p.jsx)(J,{msgAlert:e.msgAlert,setUser:e.setUser})}}),Object(p.jsx)(u.b,{exact:!0,path:"/projects",render:function(){return Object(p.jsx)(oe,{msgAlert:e.msgAlert,projects:s})}}),Object(p.jsx)(u.b,{exact:!0,path:"/projects/:id",render:function(){return Object(p.jsx)(me,{msgAlert:e.msgAlert,user:n,projects:s})}}),Object(p.jsx)(x,{user:n,exact:!0,path:"/my-projects",render:function(){return Object(p.jsx)(Te,{msgAlert:e.msgAlert,clearUser:e.clearUser,user:n})}}),Object(p.jsx)(x,{user:n,exact:!0,path:"/my-projects/:id",render:function(){return Object(p.jsx)(Be,{msgAlert:e.msgAlert,clearUser:e.clearUser,user:n})}}),Object(p.jsx)(x,{user:n,exact:!0,path:"/my-projects/:id/edit",render:function(){return Object(p.jsx)(we,{msgAlert:e.msgAlert,clearUser:e.clearUser,user:n})}}),Object(p.jsx)(x,{user:n,path:"/create-project",render:function(){return Object(p.jsx)(ye,{msgAlert:e.msgAlert,clearUser:e.clearUser,user:n})}}),Object(p.jsx)(x,{user:n,path:"/sign-out",render:function(){return Object(p.jsx)(K,{msgAlert:e.msgAlert,clearUser:e.clearUser,user:n})}}),Object(p.jsx)(x,{user:n,path:"/change-password",render:function(){return Object(p.jsx)(Z,{msgAlert:e.msgAlert,user:n})}})]})]})}}]),r}(a.Component),Re=Object(p.jsx)(C.a,{basename:"/BuiltIT-Client",children:Object(p.jsx)(We,{})});c.a.render(Re,document.getElementById("root"))},76:function(e,t,r){},86:function(e,t,r){}},[[107,1,2]]]);
//# sourceMappingURL=main.c7248702.chunk.js.map