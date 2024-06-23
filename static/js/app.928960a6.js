(function(){"use strict";var e={1530:function(e,t,a){var s=a(5130),n=a(6768);const o=e=>((0,n.Qi)("data-v-2fb73e8f"),e=e(),(0,n.jt)(),e),r=o((()=>(0,n.Lk)("div",{id:"aplayer"},null,-1)));function l(e,t,a,s,o,l){const i=(0,n.g2)("NavBar"),c=(0,n.g2)("router-view");return(0,n.uX)(),(0,n.CE)(n.FK,null,[(0,n.bF)(i),(0,n.bF)(c),r],64)}var i=a.p+"static/img/audio256.2a14064e.png",c=a(1060);const u=e=>((0,n.Qi)("data-v-1e5b133a"),e=e(),(0,n.jt)(),e),d={class:"navbar navbar-expand-lg bg-body-tertiary"},p={class:"container-fluid"},m=u((()=>(0,n.Lk)("img",{src:i,alt:"Logo",width:"35",height:"35"},null,-1))),f=u((()=>(0,n.Lk)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,n.Lk)("span",{class:"navbar-toggler-icon"})],-1))),g={class:"collapse navbar-collapse",id:"navbarText"},v={class:"navbar-nav me-auto mb-2 mb-lg-0"},h={class:"nav-item"},b=u((()=>(0,n.Lk)("img",{src:c,alt:"Search",width:"35",height:"35"},null,-1))),k={class:"collapse navbar-collapse",id:"navbarText"},L={key:0,class:"navbar-nav"},y={class:"nav-item"},_={class:"nav-item"},w={key:1,class:"navbar-nav"},C={class:"nav-item"};function E(e,t,a,o,r,l){const i=(0,n.g2)("router-link"),c=(0,n.g2)("el-input");return(0,n.uX)(),(0,n.CE)("nav",d,[(0,n.Lk)("div",p,[(0,n.bF)(i,{class:"nav-link",to:{name:"home"}},{default:(0,n.k6)((()=>[m,(0,n.eW)(" 在线音乐 ")])),_:1}),f,(0,n.Lk)("div",g,[(0,n.Lk)("ul",v,[(0,n.Lk)("li",h,[(0,n.bF)(i,{class:"nav-link",to:{name:"musicspace"}},{default:(0,n.k6)((()=>[(0,n.eW)("音乐空间")])),_:1})])]),(0,n.Lk)("form",{onSubmit:t[1]||(t[1]=(0,s.D$)(((...e)=>l.search&&l.search(...e)),["prevent"]))},[b,(0,n.bF)(c,{modelValue:e.input,"onUpdate:modelValue":t[0]||(t[0]=t=>e.input=t),style:{width:"240px"},placeholder:"搜索音乐"},null,8,["modelValue"])],32)]),(0,n.Lk)("div",k,[o.store.getters.isLoggedIn?((0,n.uX)(),(0,n.CE)("ul",w,[(0,n.Lk)("li",C,[(0,n.Lk)("a",{class:"nav-link",style:{cursor:"pointer"},onClick:t[2]||(t[2]=(...e)=>l.handleLogout&&l.handleLogout(...e))},"退出")])])):((0,n.uX)(),(0,n.CE)("ul",L,[(0,n.Lk)("li",y,[(0,n.bF)(i,{class:"nav-link",to:{name:"login"}},{default:(0,n.k6)((()=>[(0,n.eW)("登录")])),_:1})]),(0,n.Lk)("li",_,[(0,n.bF)(i,{class:"nav-link",to:{name:"register"}},{default:(0,n.k6)((()=>[(0,n.eW)("注册")])),_:1})])]))])])])}a(4114);var A=a(782),U={name:"NavBar",setup(){const e=(0,A.Pj)();return{store:e}},methods:{...(0,A.i0)(["logout"]),handleLogout(){this.logout(),this.$router.push("/login/")},search(){}},data(){return{iconUrl:a(1060),query:""}}},I=a(1241);const x=(0,I.A)(U,[["render",E],["__scopeId","data-v-1e5b133a"]]);var F=x,S=a(144),j=a(2333),O=a.n(j),P=a(4373);const T=e=>P.A.get("http://localhost:8000/api/music/",{params:{userid:e}}),R=(e,t)=>(e.append("userid",t),P.A.post("http://localhost:8000/api/uploadimage/",e,{headers:{"Content-Type":"multipart/form-data"}})),X=(e,t)=>(e.append("userid",t),P.A.post("http://localhost:8000/api/uploadmusic/",e,{headers:{"Content-Type":"multipart/form-data"}})),D=(e,t)=>P.A.post("http://localhost:8000/api/user/login/",{username:e,password:t}),M=(e,t)=>P.A.post("http://localhost:8000/api/user/register/",{username:e,password:t});var W={name:"App",components:{NavBar:F},setup(){const e=(0,A.Pj)(),t=t=>{e.dispatch("updateMusic",t)},a=t=>{e.dispatch("updatePlayer",t)};let s=(0,S.KR)(null);(0,n.wB)((()=>e.getters.isLoggedIn),(()=>{o()}));const o=async()=>{if(e.getters.isLoggedIn)try{const n=await T(e.getters.user.id);t(n.data),s.value=(0,S.KR)(new(O())({container:document.getElementById("aplayer"),audio:n.data,fixed:!1,listFolded:!0,autoplay:!1,preload:"auto",loop:"all",order:"list"})),a(s)}catch(n){console.error("Error fetching data:",n)}};return(0,n.sV)((()=>{o()})),{aplayer:s}}};const q=(0,I.A)(W,[["render",l],["__scopeId","data-v-2fb73e8f"]]);var K=q,V=a(1387),J=a(4232);const N=e=>((0,n.Qi)("data-v-a0f7ccc8"),e=e(),(0,n.jt)(),e),$={class:"row justify-content-md-center"},B={class:"col-3"},H={class:"mb-3"},Q=N((()=>(0,n.Lk)("label",{for:"username",class:"form-label"},"用户名",-1))),Y={class:"mb-3"},G=N((()=>(0,n.Lk)("label",{for:"password",class:"form-label"},"密码",-1))),z={class:"error-message"},Z=N((()=>(0,n.Lk)("button",{type:"submit",class:"btn btn-primary"},"登录",-1)));function ee(e,t,a,o,r,l){const i=(0,n.g2)("Content");return(0,n.uX)(),(0,n.Wv)(i,{style:{"margin-top":"200px",width:"500px"}},{default:(0,n.k6)((()=>[(0,n.Lk)("div",$,[(0,n.Lk)("div",B,[(0,n.Lk)("form",{onSubmit:t[2]||(t[2]=(0,s.D$)(((...e)=>l.handleLogin&&l.handleLogin(...e)),["prevent"]))},[(0,n.Lk)("div",H,[Q,(0,n.bo)((0,n.Lk)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>r.username=e),type:"text",class:"form-control",id:"username",required:""},null,512),[[s.Jo,r.username]])]),(0,n.Lk)("div",Y,[G,(0,n.bo)((0,n.Lk)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>r.password=e),type:"password",class:"form-control",id:"password",required:""},null,512),[[s.Jo,r.password]])]),(0,n.Lk)("div",z,(0,J.v_)(r.error_message),1),Z],32)])])])),_:1})}const te={class:"container"},ae={class:"card"},se={class:"card-body"};function ne(e,t,a,s,o,r){return(0,n.uX)(),(0,n.CE)("div",te,[(0,n.Lk)("div",ae,[(0,n.Lk)("div",se,[(0,n.RG)(e.$slots,"default",{},void 0,!0)])])])}var oe={name:"Content"};const re=(0,I.A)(oe,[["render",ne],["__scopeId","data-v-aa710796"]]);var le=re,ie={name:"Login",components:{Content:le},data(){return{username:"",password:"",error_message:""}},methods:{...(0,A.i0)(["login"]),handleLogin(){this.login({username:this.username,password:this.password,success:e=>{-1==e.data.code?alert(e.data.msg):this.$router.push("/")},error:()=>{console.error("登录失败")}})}}};const ce=(0,I.A)(ie,[["render",ee],["__scopeId","data-v-a0f7ccc8"]]);var ue=ce;const de={class:"row"},pe={class:"col-3"},me={class:"col-9"};function fe(e,t,a,s,o,r){const l=(0,n.g2)("UserInfo"),i=(0,n.g2)("Upload"),c=(0,n.g2)("MusicList"),u=(0,n.g2)("Content");return(0,n.uX)(),(0,n.Wv)(u,null,{default:(0,n.k6)((()=>[(0,n.Lk)("div",de,[(0,n.Lk)("div",pe,[(0,n.bF)(l,{user:s.user},null,8,["user"]),(0,n.bF)(i,{id:s.user.id},null,8,["id"])]),(0,n.Lk)("div",me,[(0,n.bF)(c,{list:s.music_list},null,8,["list"])])])])),_:1})}const ge={class:"card"},ve={class:"card-body"},he={class:"row"},be={class:"col-3"},ke=["src"],Le={class:"col-9"},ye={class:"username"},_e={class:"music-nums"};function we(e,t,a,s,o,r){return(0,n.uX)(),(0,n.CE)("div",ge,[(0,n.Lk)("div",ve,[(0,n.Lk)("div",he,[(0,n.Lk)("div",be,[(0,n.Lk)("input",{type:"file",ref:"fileInput",onChange:t[0]||(t[0]=(...e)=>r.uploadFile&&r.uploadFile(...e)),style:{display:"none"}},null,544),(0,n.Lk)("img",{class:"img-fluid",src:a.user.photo,alt:"选择图片",onClick:t[1]||(t[1]=(...e)=>r.handleImageClick&&r.handleImageClick(...e))},null,8,ke)]),(0,n.Lk)("div",Le,[(0,n.Lk)("div",ye,(0,J.v_)(a.user.username),1),(0,n.Lk)("div",_e,"音乐数:"+(0,J.v_)(a.user.music_nums),1)])])])])}var Ce={name:"UserInfo",props:{user:{type:Object,required:!0}},watch:{user:{}},data(){return{files:[]}},methods:{...(0,A.i0)(["updateUserPhoto"]),handleImageClick(){this.$refs.fileInput.click()},uploadFile(e){if(this.files=Array.from(e.target.files),this.files.length>0){const e=new FormData;this.files.forEach((t=>{e.append("file",t)})),R(e,this.user.id).then((e=>{console.log("文件上传成功",e),this.updateUserPhoto(e.data)})).catch((e=>{console.error("文件上传失败",e)}))}}}};const Ee=(0,I.A)(Ce,[["render",we],["__scopeId","data-v-1e3f83ee"]]);var Ae=Ee;const Ue={class:"card list"},Ie={class:"card-body"},xe={class:"scrollable-container"},Fe=["onClick"],Se={class:"card music"},je={class:"card-body"},Oe={class:"row"},Pe={class:"col-10 music_name"},Te={class:"col-2 artist"};function Re(e,t,a,s,o,r){return(0,n.uX)(),(0,n.CE)("div",Ue,[(0,n.Lk)("div",Ie,[(0,n.Lk)("div",xe,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(a.list.musics,((e,t)=>((0,n.uX)(),(0,n.CE)("div",{key:t,onClick:e=>s.handleCardClick(t)},[(0,n.Lk)("div",Se,[(0,n.Lk)("div",je,[(0,n.Lk)("div",Oe,[(0,n.Lk)("div",Pe,(0,J.v_)(e.name),1),(0,n.Lk)("div",Te,"歌手："+(0,J.v_)(e.artist),1)])])])],8,Fe)))),128))])])])}var Xe={name:"MusicList",props:{list:{type:Object,required:!0}},watch:{list:{}},setup(){const e=(0,A.Pj)(),t=(0,S.KR)(e.getters.aplayer),a=e=>{console.log(t),t.value.pause(),t.value.list.switch(e),t.value.play()};return{ap:t,handleCardClick:a}}};const De=(0,I.A)(Xe,[["render",Re],["__scopeId","data-v-13f46fba"]]);var Me=De;const We=e=>((0,n.Qi)("data-v-645eda74"),e=e(),(0,n.jt)(),e),qe={class:"card upload-music"},Ke={class:"card-body"},Ve={class:"mb-3"},Je=We((()=>(0,n.Lk)("label",{for:"formFileMultiple",class:"form-label"},"上传音乐",-1)));function Ne(e,t,a,s,o,r){return(0,n.uX)(),(0,n.CE)("div",qe,[(0,n.Lk)("div",Ke,[(0,n.Lk)("div",Ve,[Je,(0,n.Lk)("input",{class:"form-control",type:"file",id:"formFile",onChange:t[0]||(t[0]=(...e)=>r.handleFileChange&&r.handleFileChange(...e))},null,32),(0,n.Lk)("button",{type:"button",class:"btn btn-primary btn-sm",onClick:t[1]||(t[1]=(...e)=>r.uploadFiles&&r.uploadFiles(...e))},"上传")])])])}var $e={name:"Upload",props:{id:{type:Object,required:!0}},data(){return{files:[]}},methods:{handleFileChange(e){this.files=Array.from(e.target.files)},uploadFiles(){if(this.files.length>0){const e=new FormData;this.files.forEach((t=>{e.append("file",t)})),X(e,this.id).then((e=>{console.log("文件上传成功",e),window.location.reload()})).catch((e=>{console.error("文件上传失败",e)}))}}}};const Be=(0,I.A)($e,[["render",Ne],["__scopeId","data-v-645eda74"]]);var He=Be,Qe={name:"MusicSpace",components:{Content:le,UserInfo:Ae,MusicList:Me,Upload:He},data(){return{info:{fixed:!1,listFolded:!0,autoplay:!1,preload:"none",loop:"all",order:"list"}}},setup(){const e=(0,A.Pj)(),t=(0,S.KR)(e.getters.user),a=(0,S.KR)({musics:[]});return a.value.musics=e.getters.music,(0,n.wB)((()=>e.getters.music),(()=>{a.value.musics=e.getters.music})),{user:t,music_list:a}}};const Ye=(0,I.A)(Qe,[["render",fe]]);var Ge=Ye;const ze={class:"row justify-content-md-center"},Ze={class:"col-3"},et={class:"mb-3"},tt=(0,n.Lk)("label",{for:"username",class:"form-label"},"用户名",-1),at={class:"mb-3"},st=(0,n.Lk)("label",{for:"password",class:"form-label"},"密码",-1),nt=(0,n.Lk)("button",{type:"submit",class:"btn btn-primary"},"注册",-1);function ot(e,t,a,o,r,l){const i=(0,n.g2)("Content");return(0,n.uX)(),(0,n.Wv)(i,null,{default:(0,n.k6)((()=>[(0,n.eW)(" 注册 "),(0,n.Lk)("div",ze,[(0,n.Lk)("div",Ze,[(0,n.Lk)("form",{onSubmit:t[2]||(t[2]=(0,s.D$)(((...e)=>l.submit&&l.submit(...e)),["prevent"]))},[(0,n.Lk)("div",et,[tt,(0,n.bo)((0,n.Lk)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>r.username=e),type:"text",class:"form-control",id:"username"},null,512),[[s.Jo,r.username]])]),(0,n.Lk)("div",at,[st,(0,n.bo)((0,n.Lk)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>r.password=e),type:"password",class:"form-control",id:"password"},null,512),[[s.Jo,r.password]])]),nt],32)])])])),_:1})}var rt={name:"Register",components:{Content:le},data(){return{username:"",password:""}},methods:{submit(){M(this.username,this.password).then((e=>{alert(e.data.msg)})).catch((e=>{console.error("注册失败",e)}))}}};const lt=(0,I.A)(rt,[["render",ot]]);var it=lt;function ct(e,t,a,s,o,r){const l=(0,n.g2)("Content");return(0,n.uX)(),(0,n.Wv)(l,null,{default:(0,n.k6)((()=>[(0,n.eW)(" 404 ")])),_:1})}var ut={name:"NotFound",components:{Content:le}};const dt=(0,I.A)(ut,[["render",ct]]);var pt=dt,mt=new A.Ay.Store({state:{user:"undefined"!=localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):null,music:[],ap:null},mutations:{SET_USER(e,t){e.user=t,localStorage.setItem("user",JSON.stringify(t))},CLEAR_USER(e){e.user=null,localStorage.removeItem("user")},DESTROY_AP(e){e.ap.value.destroy()},UPDATE_MUSIC(e,t){e.music=t},UPDATE_APLAYER(e,t){e.ap=t},UPDATE_USER_PHOTO(e,t){e.user.photo=t,localStorage.setItem("user",JSON.stringify(e.user))}},actions:{async login({commit:e},{username:t,password:a,success:s,error:n}){try{const n=await D(t,a),o=n.data.userinfo;e("SET_USER",o),s(n)}catch(o){n()}},logout({commit:e}){e("CLEAR_USER"),e("DESTROY_AP"),window.location.reload()},updateUserPhoto({commit:e},t){e("UPDATE_USER_PHOTO",t)},updateMusic({commit:e},t){e("UPDATE_MUSIC",t)},updatePlayer({commit:e},t){e("UPDATE_APLAYER",t)}},getters:{isLoggedIn:e=>!!e.user,user:e=>e.user,music:e=>e.music,aplayer:e=>e.ap}});const ft=e=>((0,n.Qi)("data-v-6e946f40"),e=e(),(0,n.jt)(),e),gt={class:"block text-center",style:{"margin-top":"30px","margin-bottom":"20px","margin-left":"100px","margin-right":"100px"}},vt=["src"],ht=ft((()=>(0,n.Lk)("div",{class:"image-overlay"},null,-1))),bt={class:"carousel-text"};function kt(e,t,a,s,o,r){const l=(0,n.g2)("el-carousel-item"),i=(0,n.g2)("el-carousel");return(0,n.uX)(),(0,n.CE)("div",gt,[(0,n.bF)(i,{interval:4e3,type:"card",height:"400px",width:"800px"},{default:(0,n.k6)((()=>[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(o.images,(e=>((0,n.uX)(),(0,n.Wv)(l,{key:e.id},{default:(0,n.k6)((()=>[(0,n.Lk)("img",{src:e.imageUrl,alt:"Image",width:"800",height:"400"},null,8,vt),ht,(0,n.Lk)("p",bt,(0,J.v_)(e.caption),1)])),_:2},1024)))),128))])),_:1})])}var Lt={data(){return{images:[{id:1,imageUrl:a(9123),caption:"Hello"},{id:2,imageUrl:a(3060),caption:"Hello"},{id:3,imageUrl:a(4865),caption:"Hello"},{id:4,imageUrl:a(9634),caption:"Hello"}]}}};const yt=(0,I.A)(Lt,[["render",kt],["__scopeId","data-v-6e946f40"]]);var _t=yt;const wt=[{path:"/musicspace",name:"musicspace",component:Ge,meta:{requiresAuth:!0}},{path:"/",name:"home",component:_t},{path:"/login/",name:"login",component:ue},{path:"/register/",name:"register",component:it},{path:"/404/",name:"404",component:pt},{path:"/:catchAll(.*)",redirect:"/404/"}],Ct=(0,V.aE)({history:(0,V.LA)(),routes:wt});Ct.beforeEach(((e,t,a)=>{e.matched.some((e=>e.meta.requiresAuth))?mt.getters.isLoggedIn?a():a("/login"):a()}));var Et=Ct,At=a(562);a(4188);(0,s.Ef)(K).use(mt).use(Et).use(At.A).mount("#app")},9123:function(e,t,a){e.exports=a.p+"static/img/1.c4dbc70f.jpg"},3060:function(e,t,a){e.exports=a.p+"static/img/2.00052af5.jpg"},4865:function(e,t,a){e.exports=a.p+"static/img/3.d41ad0fc.jpg"},9634:function(e,t,a){e.exports=a.p+"static/img/4.1421200b.jpg"},1060:function(e,t,a){e.exports=a.p+"static/img/search.192a6e49.png"}},t={};function a(s){var n=t[s];if(void 0!==n)return n.exports;var o=t[s]={exports:{}};return e[s].call(o.exports,o,o.exports,a),o.exports}a.m=e,function(){var e=[];a.O=function(t,s,n,o){if(!s){var r=1/0;for(u=0;u<e.length;u++){s=e[u][0],n=e[u][1],o=e[u][2];for(var l=!0,i=0;i<s.length;i++)(!1&o||r>=o)&&Object.keys(a.O).every((function(e){return a.O[e](s[i])}))?s.splice(i--,1):(l=!1,o<r&&(r=o));if(l){e.splice(u--,1);var c=n();void 0!==c&&(t=c)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[s,n,o]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var s in t)a.o(t,s)&&!a.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){var e={524:0};a.O.j=function(t){return 0===e[t]};var t=function(t,s){var n,o,r=s[0],l=s[1],i=s[2],c=0;if(r.some((function(t){return 0!==e[t]}))){for(n in l)a.o(l,n)&&(a.m[n]=l[n]);if(i)var u=i(a)}for(t&&t(s);c<r.length;c++)o=r[c],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(u)},s=self["webpackChunkplayer_web"]=self["webpackChunkplayer_web"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=a.O(void 0,[504],(function(){return a(1530)}));s=a.O(s)})();
//# sourceMappingURL=app.928960a6.js.map