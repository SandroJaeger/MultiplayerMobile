!function(){var e,t,n=(e=function(e,t){var n=a.document,r=s(n)&&s(n.createElement);e.exports=function(e){return r?n.createElement(e):{}}},function(n){return t||e(t={exports:{},parent:n},t.exports),t.exports}),a={},r=a="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r);var o={},i=o={version:"2.6.11"};"number"==typeof __e&&(__e=i);var l=function(e,t,n){if(function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!")}(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,a){return e.call(t,n,a)};case 3:return function(n,a,r){return e.call(t,n,a,r)}}return function(){return e.apply(t,arguments)}},s=function(e){return"object"==typeof e?null!==e:"function"==typeof e},c=function(e){if(!s(e))throw TypeError(e+" is not an object!");return e},u=function(e){try{return!!e()}catch(e){return!0}},d=!u((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})),f=!d&&!u((function(){return 7!=Object.defineProperty(n({})("div"),"a",{get:function(){return 7}}).a})),m={},p=Object.defineProperty;m.f=d?Object.defineProperty:function(e,t,n){if(c(e),t=function(e,t){if(!s(e))return e;var n,a;if("function"==typeof(n=e.toString)&&!s(a=n.call(e)))return a;if("function"==typeof(n=e.valueOf)&&!s(a=n.call(e)))return a;throw TypeError("Can't convert object to primitive value")}(t),c(n),f)try{return p(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e};var y=d?function(e,t,n){return m.f(e,t,function(e,t){return{enumerable:!1,configurable:!0,writable:!0,value:t}}(0,n))}:function(e,t,n){return e[t]=n,e},g={}.hasOwnProperty,b=function(e,t){return g.call(e,t)},h={},S=function(e,t,n){var r,i,s,c=e&S.F,u=e&S.G,d=e&S.S,f=e&S.P,m=e&S.B,p=e&S.W,g=u?o:o[t]||(o[t]={}),v=g.prototype,h=u?a:d?a[t]:(a[t]||{}).prototype;for(r in u&&(n=t),n)(i=!c&&h&&void 0!==h[r])&&b(g,r)||(s=i?h[r]:n[r],g[r]=u&&"function"!=typeof h[r]?n[r]:m&&i?l(s,a):p&&h[r]==s?function(e){var t=function(t,n,a){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,a)}return e.apply(this,arguments)};return t.prototype=e.prototype,t}(s):f&&"function"==typeof s?l(Function.call,s):s,f&&((g.virtual||(g.virtual={}))[r]=s,e&S.R&&v&&!v[r]&&y(v,r,s)))};S.F=1,S.G=2,S.S=4,S.P=8,S.B=16,S.W=32,S.U=64,S.R=128,(h=S)(h.S+h.F*!d,"Object",{defineProperty:m.f});var E,R=o.Object,I={__esModule:!0},A=(E={default:function(e,t,n){return R.defineProperty(e,t,n)},__esModule:!0})&&E.__esModule?E:{default:E};I.default=function(e,t,n){return t in e?(0,A.default)(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e};var N,w=function(e){if(null==e)throw TypeError("Can't call method on  "+e);return e},q={}.toString,L=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==function(e){return q.call(e).slice(8,-1)}(e)?e.split(""):Object(e)},M=function(e){return L(w(e))},T=Math.ceil,C=Math.floor,x=function(e){return isNaN(e=+e)?0:(e>0?C:T)(e)},B=Math.min,U=Math.max,k=Math.min,O=a["__core-js_shared__"]||(a["__core-js_shared__"]={});(N=function(e,t){return O[e]||(O[e]=void 0!==t?t:{})})("versions",[]).push({version:o.version,mode:"pure",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"});var _,H,P,D,G,K=0,F=Math.random(),j=N("keys"),z=(!1,function(e,t,n){var a,r=M(e),o=(a=r.length)>0?B(x(a),9007199254740991):0,i=function(e,t){return(e=x(e))<0?U(e+t,0):k(e,t)}(n,o);for(0;o>i;i++)if(i in r&&r[i]===t)return i||0;return-1}),V=j[_="IE_PROTO"]||(j[_]=function(e){return"Symbol(".concat(e,")_",(++K+F).toString(36))}(_)),W="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),Z=Object.keys||function(e){return function(e,t){var n,a=M(e),r=0,o=[];for(n in a)n!=V&&b(a,n)&&o.push(n);for(;t.length>r;)b(a,n=t[r++])&&(~z(o,n)||o.push(n));return o}(e,W)};H="keys",P=function(){return function(e){return Z(function(e){return Object(w(e))}(e))}},D=(o.Object||{})[H]||Object[H],(G={})[H]=P(),h(h.S+h.F*u((function(){D(1)})),"Object",G);var Y={default:o.Object.keys,__esModule:!0},J=Q(I),X=Q(Y);function Q(e){return e&&e.__esModule?e:{default:e}}$(document).ready((function(){$(".drop .option").click((function(){var e,t=$(this).attr("data-value"),n=$(".drop"),a=$(".drop .option.active").attr("data-value"),r=$(".drop .option").length;n.find(".option.active").addClass("mini-hack"),n.toggleClass("visible"),n.removeClass("withBG"),$(this).css("top"),n.toggleClass("opacity"),$(".mini-hack").removeClass("mini-hack"),n.hasClass("visible")&&setTimeout((function(){n.addClass("withBG")}),400+100*r),e=$(".drop").hasClass("visible")?22:20,$(".drop").css("width","24em"),setTimeout((function(){$(".drop").css("width",e+"em")}),400),"placeholder"===t&&"placeholder"!==a||($(".drop .option").removeClass("active"),$(this).addClass("active"))}))})),$(document).ready((function(){$(".heading").lettering()})),$(document).ready((function(){(new TimelineMax).staggerFromTo(".heading span",.5,{ease:Back.easeOut.config(1.7),opacity:0,bottom:-80},{ease:Back.easeOut.config(1.7),opacity:1,bottom:0},.05)}),1e3),firebase.initializeApp({apiKey:"AIzaSyDAs-cEPp31JPAmcwx0ikFOxo1lLWThi3g",authDomain:"racegame-301b3.firebaseapp.com",databaseURL:"https://racegame-301b3.firebaseio.com",projectId:"racegame-301b3",storageBucket:"racegame-301b3.appspot.com",messagingSenderId:"11748553538",appId:"1:11748553538:web:2a6788f91386f1158a4edb"});var ee="";document.querySelector(".fa-user-circle").addEventListener("mousedown",(function(){document.querySelector(".login-box").style.display="inline",document.getElementById("UsernameButtonUl").style.display="none",document.getElementById("Inputusername").style.display="none",document.getElementById("PasswortButtonUl").style.display="none",document.getElementById("Inputpasswort").style.display="none",document.querySelector(".MainTitle").style.display="none"})),document.querySelector(".signin-button").addEventListener("mousedown",(function(){var e=document.querySelector(".user-input").value,t=document.querySelector(".pass-input").value,n="",a="";firebaseRef=firebase.database().ref("Users/"+e),firebaseRef.child("Passwort").on("value",(function(e){v=e.val(),n=v})),firebaseRef=firebase.database().ref("Users/"+e),firebaseRef.child("Status").on("value",(function(e){vleu=e.val(),a=vleu})),re.forEach((function(r){if(r==e&&(console.log("LoginUsername gefunden"),t==n))if(console.log("LoginPassword auch gefunden"),"online"==a||"away"==a)console.log("User ist momentan online oder away, Login nicht möglich");else{ee=e,console.log(ee),firebaseRef=firebase.database().ref("Users/"+ee),firebaseRef.update({Status:"online"});var o=window.setTimeout((function(){firebaseRef=firebase.database().ref("Users/"+ee),firebaseRef.update({Status:"away"})}),1e4);firebaseRef=firebase.database().ref("Users/"+ee),firebaseRef.onDisconnect().update({Status:"offline"}),window.addEventListener("mousemove",(function(){console.log("mousmove erkannt"),firebaseRef=firebase.database().ref("Users/"+ee),firebaseRef.update({Status:"online"}),clearTimeout(o),clearTimeout(e);var e=window.setTimeout((function(){firebaseRef=firebase.database().ref("Users/"+ee),firebaseRef.update({Status:"away"})}),1e4)})),se(),firebaseRef=firebase.database().ref("matchmaking"),firebaseRef.child(ee).on("value",(function(e){updated=e.val(),console.log(updated),1!=updated&&null!=updated&&(Ee=updated,console.log("Der Gamekey ist:"+Ee),console.log(ee),document.querySelector(".matchcontainer2").style.display="none",document.querySelector(".matchcontainer").style.display="none",document.querySelector(".Abrechen").style.display="none",document.getElementById("wrapperloader3").style.display="block",Ae(),firebaseRef=firebase.database().ref(Ee),firebaseRef.child("players").on("value",(function(e){Players=e.val(),maybeenemy=Players.split("+",2),maybeenemy[0]==ee?(document.getElementById("ME").textContent=ee,document.getElementById("ENEMY").textContent=maybeenemy[1],Re=maybeenemy[1],console.log(Re+"an zweiter Stelle")):(document.getElementById("ME").textContent=ee,document.getElementById("ENEMY").textContent=maybeenemy[0],setTimeout((function(){document.querySelector(".wrapperGameselect").style.display="block"}),7e3),Ie=ee,Re=maybeenemy[0],console.log(Re+"an erster Stelle")),firebaseRef=firebase.database().ref(Ee),console.log(Re),firebaseRef.child(Re).on("value",(function(e){Le(Ce=e.val())})),firebaseRef.child(ee).on("value",(function(e){qe(Te=e.val())}))})),firebaseRef=firebase.database().ref(Ee),firebaseRef.child("GameStart").on("value",(function(e){Gamestart=e.val(),"true"==Gamestart&&(document.getElementById("wrapperloader3").style.display="none",document.querySelector(".demo").style.display="inline",setTimeout((function(){document.querySelector(".demo").style.display="none",firebaseRef=firebase.database().ref(Ee),firebaseRef.child(ee).set(0),document.querySelector(".aside").style.display="inline",document.querySelector(".containerMonitor").style.display="inline",document.querySelector(".choose-username").style.display="flex",Ue()}),5e3))})))})),document.querySelector(".Loading1").style.display="inline",document.querySelector(".login-box").style.display="none",document.querySelector(".fa-user-circle").style.display="none",setTimeout((function(){document.querySelector(".Loading1").style.display="none",document.getElementById("Usernameheader").innerHTML=ee,document.getElementById("MenueBtn").style.display="inline-flex",document.querySelector(".wrapper").style.display="inline",document.querySelector(".wrapper2").style.display="inline",document.querySelector(".wrapper3").style.display="inline",document.getElementById("WelcomePlayerName").innerHTML=ee+" !",document.querySelector(".Welcome").style.display="inline",setTimeout((function(){document.querySelector(".Welcome").style.display="none"}),6e3)}),8e3)}}))})),document.getElementById("PasswortButtonLi").addEventListener("mousedown",(function(){document.getElementById("PasswortButtonUl").style.display="none",document.getElementById("Inputpasswort").style.display="inline"})),document.getElementById("UsernameButtonLi").addEventListener("mousedown",(function(){var e=document.getElementById("Inputusername").textContent,t=document.getElementById("Inputpasswort").textContent,n=t.length,a=e.length,r="";if(re.forEach((function(t){t==e&&(r=!0)})),1==r)console.log("Username bereits vorhanden");else if(""==e)console.log("Darf nicht leer sein");else if(a>10)console.log("Username darf nicht länger als 10 Zeichen sein");else if(e.replace('"',"").length<a)console.log('kein "');else if(e.replace(/\s/g,"").length<a)console.log("kein Leerzeichen1");else if(e.replace(/ /g,"").length<a)console.log("kein Leerzeichen2");else if(""==t)console.log("Passwort darf nicht leer sein");else if(n>10)console.log("Passwort darf nicht länger als 10 Zeichen sein");else if(t.replace('"',"").length<n)console.log('kein " beim Passwort');else if(t.replace(/\s/g,"").length<n)console.log("kein Leerzeichen1 bei Passwort");else if(t.replace(/ /g,"").length<n)console.log("kein Leerzeichen2 bei Passwort");else{console.log("hat funktioniert"),ee=e,console.log(ee),firebaseRef=firebase.database().ref("Users/"+ee),firebaseRef.update({Status:"online"}),document.getElementById("UsernameButtonUl").style.display="none",document.getElementById("Inputusername").style.display="none";var o=window.setTimeout((function(){firebaseRef=firebase.database().ref("Users/"+ee),firebaseRef.update({Status:"away"})}),1e4);firebaseRef=firebase.database().ref("Users/"+ee),firebaseRef.onDisconnect().update({Status:"offline"}),window.addEventListener("mousemove",(function(){console.log("mousmove erkannt"),firebaseRef=firebase.database().ref("Users/"+ee),firebaseRef.update({Status:"online"}),clearTimeout(e),clearTimeout(o);var e=window.setTimeout((function(){firebaseRef=firebase.database().ref("Users/"+ee),firebaseRef.update({Status:"away"})}),1e4)})),se(),document.getElementById("Usernameheader").innerHTML=ee,document.getElementById("MenueBtn").style.display="inline",document.querySelector(".wrapper").style.display="inline",document.querySelector(".wrapper2").style.display="inline",document.querySelector(".wrapper3").style.display="inline",document.querySelector(".fa-user-circle").style.display="none",document.querySelector(".MainTitle").style.display="none","inline"==document.getElementById("Inputpasswort").style.display?(console.log(t),firebaseRef=firebase.database().ref("Users/"+ee),firebaseRef.update({Passwort:t}),document.getElementById("Inputpasswort").style.display="none"):(firebaseRef=firebase.database().ref("Users/"+ee),firebaseRef.update({Passwort:""}))}}));for(var te=document.querySelectorAll(".list"),ne=function(e){te[e].onmouseover=function(){for(var t=0;t<te.length;)te[t++].className="list";te[e].className="list active","Friends"==te[e].id?(console.log("Friends detected"),function(e){document.querySelector(".notCompleted").innerHTML="",document.querySelector(".Completed").innerHTML="",document.getElementById("Heading").innerHTML="Friends",e.forEach((function(e){var t=document.querySelector(".notCompleted"),n=(document.querySelector(".Completed"),document.createElement("li")),a=document.createElement("button"),r=document.createElement("button"),o=document.createElement("button");a.id="Status",firebaseRef=firebase.database().ref("Users/"+e),firebaseRef.child("Status").on("value",(function(e){valb=e.val(),console.log(valb),"online"==valb?a.style.color="green":"offline"==valb?a.style.color="grey":"away"==valb&&(a.style.color="orange")})),r.innerHTML="",o.innerHTML='<i class="fas fa-paper-plane"></i>',a.innerHTML='<i class="fas fa-circle"></i>',n.textContent=e,t.appendChild(n),n.appendChild(r),n.appendChild(o),n.appendChild(a),o.addEventListener("click",(function(){if(""!=Se){var e=this.parentNode.textContent;firebaseRef=firebase.database().ref("Users/"+e+"/Invites"),firebaseRef.update((0,J.default)({},ee,Se))}}))}))}(ie)):"Add"==te[e].id?(console.log("Add Friends detected"),console.log(ee),function(e,t){document.querySelector(".notCompleted").innerHTML="",document.querySelector(".Completed").innerHTML="",document.getElementById("Heading").innerHTML="Users",t.forEach((function(t){if(t==e);else{var n=document.querySelector(".notCompleted"),a=(document.querySelector(".Completed"),document.createElement("li")),r=document.createElement("button"),o=document.createElement("button");r.innerHTML='<i class="fas fa-user-plus"></i>',a.textContent=t,n.appendChild(a),a.appendChild(r),a.appendChild(o),r.addEventListener("click",(function(){console.log(e);var t=this.parentNode;t.remove(),r.style.display="none";var n=t.textContent;firebaseRef=firebase.database().ref("Users/"+n+"/Notifications"),firebaseRef.update((0,J.default)({},e,"1"))}))}}))}(ee,re)):"Notification"==te[e].id&&(console.log("Notifications detected"),function(e,t){document.querySelector(".notCompleted").innerHTML="<h3>Friend Requests</h3>",document.querySelector(".Completed").innerHTML="<h3>Invites</h3>",document.getElementById("Heading").innerHTML="Notifications",e.forEach((function(e){var t=document.querySelector(".notCompleted"),n=(document.querySelector(".Completed"),document.createElement("li")),a=document.createElement("button"),r=document.createElement("button");a.innerHTML='<i class="fa fa-check"></i>',r.innerHTML='<i class="fa fa-trash"></i>',n.textContent=e,t.appendChild(n),n.appendChild(a),n.appendChild(r),a.addEventListener("click",(function(){var e=this.parentNode;e.remove(),a.style.display="none";var t=e.textContent;firebaseRef=firebase.database().ref("Users/"+ee+"/Friends"),firebaseRef.update((0,J.default)({},t,"1")),firebaseRef=firebase.database().ref("Users/"+ee+"/Notifications/"+t),firebaseRef.remove(),firebaseRef=firebase.database().ref("Users/"+t+"/Friends"),firebaseRef.update((0,J.default)({},ee,"1"))})),r.addEventListener("click",(function(){var e=this.parentNode;e.remove();var t=e.textContent;firebaseRef=firebase.database().ref("Users/"+ee+"/Notifications/"+t),firebaseRef.remove()}))})),t.forEach((function(e){document.querySelector(".notCompleted");var t=document.querySelector(".Completed"),n=document.createElement("li"),a=document.createElement("button"),r=document.createElement("button");a.innerHTML='<i class="fa fa-check"></i>',r.innerHTML='<i class="fa fa-trash"></i>',n.textContent=e,t.appendChild(n),n.appendChild(a),n.appendChild(r),a.addEventListener("click",(function(){var e=this.parentNode;e.remove();var t="";a.style.display="none";var n=e.textContent;firebaseRef=firebase.database().ref("Users/"+ee+"/Invites/"),firebaseRef.child(n).on("value",(function(e){valb=e.val(),t=valb})),console.log(t),document.getElementById("check").checked=!1,document.querySelector(".EnterKey").value=t,document.querySelector(".JoinGame").style.display="inline",document.querySelector(".wrapper").style.display="none",document.querySelector(".wrapper2").style.display="none",document.querySelector(".wrapper3").style.display="none",firebaseRef=firebase.database().ref("Users/"+ee+"/Invites/"+n),firebaseRef.remove()})),r.addEventListener("click",(function(){var e=this.parentNode;e.remove();var t=e.textContent;firebaseRef=firebase.database().ref("Users/"+ee+"/Invites/"+t),firebaseRef.remove()}))}))}(oe,le))}},ae=0;ae<te.length;ae++)ne(ae);firebaseRef=firebase.database().ref("Users");var re=[];firebaseRef.on("value",(function(e){vl=e.val(),re=(0,X.default)(vl)}));var oe=[],ie=[],le=[];function se(){firebaseRef=firebase.database().ref("Users/"+ee+"/Notifications"),firebaseRef.on("value",(function(e){valu=e.val(),oe=(0,X.default)(valu),console.log(oe)})),firebaseRef=firebase.database().ref("Users/"+ee+"/Friends"),firebaseRef.on("value",(function(e){valb=e.val(),ie=(0,X.default)(valb),console.log(ie)})),firebaseRef=firebase.database().ref("Users/"+ee+"/Invites"),firebaseRef.on("value",(function(e){valbb=e.val(),le=(0,X.default)(valbb),console.log(le)}))}firebaseRef=firebase.database().ref("Users/"+ee+"/Friends"),ie=[],firebaseRef.on("value",(function(e){valb=e.val(),ie=(0,X.default)(valb),console.log(ie)})),document.querySelector(".button").addEventListener("mousedown",(function(){document.querySelector(".l-wrapper").style.display="inline",document.querySelector(".wrapper").style.display="none",document.querySelector(".wrapper2").style.display="none",document.querySelector(".wrapper3").style.display="none",he()}));var ce=["blue","pink","green","yellow"],ue=document.querySelector(".c-players"),de=document.querySelector(".c-actions__item--remove"),fe=document.querySelector(".c-actions__item--add"),me=document.querySelector(".c-actions__label"),pe=document.querySelector(".c-card"),ye=0;fe.addEventListener("mousedown",(function(){ge()})),de.addEventListener("mousedown",(function(){be()}));var ge=function(){var e,t;ve(),ue.appendChild((e=ce[!(ye>=ce.length)&&ye++],(t=document.createElement("div")).classList="c-player u-color--"+e,t.innerHTML='\n\t<svg class="c-player__icon" viewBox="0 0 837 1284" fill="none" xmlns="http://www.w3.org/2000/svg">\n\t\t\t<path fill-rule="evenodd" clip-rule="evenodd" d="M110.633 712.407C49.5767 712.407 0.0805664 761.903 0.0805664 822.96V1192.81C0.0805664 1259.14 58.3716 1283.26 84.5024 1283.26C158.864 1283.26 215.372 1185.06 259.146 1108.99C266.251 1096.65 273.021 1084.88 279.478 1074.22C301.588 1038.04 313.648 1030 353.849 1030H482.493C522.693 1030 534.754 1038.04 556.864 1074.22C563.32 1084.88 570.09 1096.65 577.196 1108.99C620.97 1185.06 677.478 1283.26 751.839 1283.26C777.97 1283.26 836.261 1259.14 836.261 1192.81V822.96C836.261 761.903 786.765 712.407 725.708 712.407H546.814V664H289.528V712.407H110.633ZM718.109 871.913C701.754 888.268 675.237 888.268 658.882 871.913C642.527 855.558 642.527 829.042 658.882 812.687C675.237 796.332 701.754 796.332 718.109 812.687C734.464 829.042 734.464 855.558 718.109 871.913ZM191 972H145V922H95V876H145V826H191V876H241V922H191V972ZM577.65 953.145C594.005 969.5 620.521 969.5 636.876 953.145C653.231 936.79 653.231 910.274 636.876 893.919C620.521 877.564 594.005 877.564 577.65 893.919C561.295 910.274 561.295 936.79 577.65 953.145Z" fill="currentColor"></path>\n\t\t\t<rect x="379.171" width="78" height="664" fill="currentColor" fill-opacity="0.3"></rect>\n\t\t</svg>\n\t',t)),ye>=ce.length&&fe.setAttribute("disabled","disabled"),me.value=ye,ye>1&&de.removeAttribute("disabled")},be=function(){ve();var e=document.querySelectorAll(".c-player"),t=e[e.length-1];t.classList.add("c-player--exiting"),de.setAttribute("disabled","disabled"),setTimeout((function(){t.parentNode.removeChild(t),de.removeAttribute("disabled"),1==ye&&de.setAttribute("disabled","disabled")}),200),1==--ye&&de.setAttribute("disabled","disabled"),me.value=ye,ye>=ce.length||fe.removeAttribute("disabled")},ve=function(){pe.classList.add("c-card--animating"),setTimeout((function(){pe.classList.remove("c-card--animating")}),300)},he=function(){for(var e=0;e<4;e++)setTimeout((function(){ge()}),500*e)},Se="";document.querySelector(".action-button").addEventListener("mousedown",(function(){var e=document.querySelector(".c-actions__label").value;console.log(e),document.querySelector(".l-wrapper").style.display="none",Se=function(){for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t="",n=0;n<8;n++)t+=e.charAt(Math.floor(Math.random()*e.length));return t}(),firebaseRef=firebase.database().ref(Se),firebaseRef.update({"FreiePlätze":--e}),firebaseRef.update({Players:ee}),firebaseRef.update({Admin:ee}),console.log(Se),Ie=ee,document.getElementById("wrapperloader3").style.display="block",Ee=Se,Ae(),setTimeout((function(){document.getElementById("wrapperloader3").style.display="none",document.querySelector(".wrapperGameselect").style.display="block",firebaseRef=firebase.database().ref(Ee+"/Players"),firebaseRef.child(ee).set(0),document.querySelector(".aside").style.display="inline",document.querySelector(".aside2").style.display="inline"}),5e3),firebaseRef.child("GameStart").on("value",(function(e){Gamestart=e.val(),"true"==Gamestart&&(document.getElementById("wrapperloader3").style.display="none",document.querySelector(".demo").style.display="inline",setTimeout((function(){document.querySelector(".demo").style.display="none",document.querySelector(".containerMonitor").style.display="inline",document.querySelector(".choose-username").style.display="flex",Ue()}),5e3))}));var t="",n="",a="";firebaseRef=firebase.database().ref(Ee+"/Players"),firebaseRef.on("value",(function(e){vlala=e.val(),Playersarr=(0,X.default)(vlala),console.log(Playersarr),aktuell=0,Playersarr.forEach((function(e){0==aktuell&&e!=ee?(document.getElementById("ENEMY").textContent=e,aktuell++,t=e):1==aktuell&&e!=ee?(document.getElementById("ENEMY2").textContent=e,aktuell++,n=e):2==aktuell&&e!=ee&&(document.getElementById("ENEMY3").textContent=e,aktuell++,a=e)})),firebaseRef=firebase.database().ref(Ee),document.getElementById("ME").textContent=ee,firebaseRef.child(ee).on("value",(function(e){qe(Te=e.val())})),firebaseRef=firebase.database().ref(Ee),firebaseRef.child(t).on("value",(function(e){Le(Ce=e.val()),console.log(Ce)})),firebaseRef=firebase.database().ref(Ee),firebaseRef.child(n).on("value",(function(e){var t,n,a,r,o;Enemyscore2=e.val(),t=Enemyscore2,n=Math.round(t/100),a=$("#Enemy2"),r=1,o=setInterval((function(){if(r<100)a.text(n*r),r++;else if(parseInt(a.text())<t){var e=parseInt(a.text())+1;a.text(e)}else clearInterval(o)}),24),console.log(Enemyscore2)})),firebaseRef=firebase.database().ref(Ee),firebaseRef.child(a).on("value",(function(e){var t,n,a,r,o;Enemyscore3=e.val(),t=Enemyscore3,n=Math.round(t/100),a=$("#Enemy3"),r=1,o=setInterval((function(){if(r<100)a.text(n*r),r++;else if(parseInt(a.text())<t){var e=parseInt(a.text())+1;a.text(e)}else clearInterval(o)}),24),console.log(Enemyscore3)})),aktuell=0}))})),document.querySelector(".button2").addEventListener("mousedown",(function(){document.querySelector(".JoinGame").style.display="inline",document.querySelector(".wrapper").style.display="none",document.querySelector(".wrapper2").style.display="none",document.querySelector(".wrapper3").style.display="none"}));var Ee="",Re="",Ie="";function Ae(){document.querySelector(".wrapper").style.display="none",document.querySelector(".wrapper2").style.display="none",document.querySelector(".wrapper3").style.display="none"}document.querySelector(".button3").addEventListener("mousedown",(function(){setTimeout((function(){document.querySelector(".matchcontainer2").style.display="block"}),2e3),document.querySelector(".matchcontainer").style.display="flex",document.querySelector(".Abrechen").style.display="flex",document.querySelector(".wrapper").style.display="none",document.querySelector(".wrapper2").style.display="none",document.querySelector(".wrapper3").style.display="none",firebaseRef=firebase.database().ref("matchmaking"),firebaseRef.child(ee).remove(),firebaseRef.child(ee).set("1")})),document.querySelector(".Abrechen").addEventListener("mousedown",(function(){document.querySelector(".matchcontainer2").style.display="none",document.querySelector(".matchcontainer").style.display="none",document.querySelector(".Abrechen").style.display="none",document.querySelector(".button3").style.display="inline",document.querySelector(".button2").style.display="inline",document.querySelector(".button").style.display="inline",firebaseRef=firebase.database().ref("matchmaking/"+ee),firebaseRef.remove()}));var Ne="";function we(e){"Easy"==e.target.id&&(Ne="Easy",console.log("Gamemode: Easy")),"Medium"==e.target.id&&(Ne="Medium",console.log("Gamemode: Medium")),"Hard"==e.target.id&&(Ne="Hard",console.log("Gamemode: Hard")),"Meme"==e.target.id&&(Ne="Meme",console.log("Gamemode: Meme"))}function qe(e){var t=Math.round(e/100),n=$("#Me"),a=1,r=setInterval((function(){if(a<100)n.text(t*a),a++;else if(parseInt(n.text())<e){var o=parseInt(n.text())+1;n.text(o)}else clearInterval(r)}),24)}function Le(e){var t=Math.round(e/100),n=$("#Enemy"),a=1,r=setInterval((function(){if(a<100)n.text(t*a),a++;else if(parseInt(n.text())<e){var o=parseInt(n.text())+1;n.text(o)}else clearInterval(r)}),24)}image_array=[],solution_array=[],document.querySelector(".video-play-button1").addEventListener("mousedown",(function(){document.querySelector(".wrapperGameselect").style.display="none","Easy"==Ne&&(solution_array=["ALBANIEN","ARGENTINIEN","AUSTRALIEN","BANGLADESCH","BELGIEN","BRASILIEN","CHINA","DÄNEMARK","DEUTSCHLAND","ENGLAND","FINNLAND","FRANKREICH","GEORGIEN","GRIECHENLAND","GROßBRITANNIEN","INDIEN","IRLAND","ISLAND","ISRAEL","ITALIEN","JAMAIKA","JAPAN","KANADA","KENIA","KROATIEN","LIBANON","MEXIKO","NEPAL","NEUSEELAND","NIEDERLANDE","NORDKOREA","NORWEGEN","ÖSTERREICH","PAKISTAN","POLEN","RUSSLAND","SAUDI-ARABIEN","SCHOTTLAND","SCHWEDEN","SCHWEIZ","SPANIEN","SÜDAFRIKA","SÜDKOREA","TÜRKEI","URUGUAY","USA","VATIKANSTADT","VIETNAM","WALES","ZYPERN"],image_array=["Albanien240.png","Argentinien240.png","Australien240.png","Bangladesch240.png","Belgien240.png","Brasilien240.png","China240.png","Dänemark240.png","Deutschland240.png","England240.png","Finnland240.png","Frankreich240.png","Georgien240.png","Griechenland240.png","Großbritannien240.png","Indien240.png","Irland240.png","Island240.png","Israel240.png","Italien240.png","Jamaika240.png","Japan240.png","Kanada240.png","Kenia240.png","Kroatien240.png","Libanon240.png","Mexiko240.png","Nepal240.png","Neuseeland240.png","Niederlande240.png","Nordkorea240.png","Norwegen240.png","Österreich240.png","Pakistan240.png","Polen240.png","Russland240.png","Saudi-Arabien240.png","Schottland240.png","Schweden240.png","Schweiz240.png","Spanien240.png","Südafrika240.png","Südkorea240.png","Türkei240.png","Uruguay240.png","USA240.png","Vatikanstadt240.png","Vietnam240.png","Wales240.png","Zypern240.png"],setTimeout((function(){firebaseRef=firebase.database().ref(Ee),firebaseRef.child("GameStart").set("true")}),1500)),"Medium"==Ne&&(solution_array=["ÄGYPTEN","ALGERIEN","BARBADOS","BELARUS","BHUTAN","BOSNIEN UND HERZEGOWINA","BULGARIEN","CHILE","DOMINIKANISCHE REPUBLIK","ELFENBEINKÜSTE","ESTLAND","HONDURAS","INDONESIEN","IRAK","IRAN","KAMBODSCHA","KAMERUN","KASACHSTAN","KATAR","KOLUMBIEN","KOSOVO","KUBA","LETTLAND","LUXEMBURG","MALAYSIA","MALTA","MAROKKO","MONACO","NIGERIA","NORDMAZEDONIEN","PANAMA","PAPUA-NEUGUINEA","PHILIPPINIEN","PORTUGAL","RUMÄNIEN","SAN MARINO","SERBIEN","SINGAPUR","SLOWAKEI","SLOWENIEN","SRI LANKA","SWASILAND","SYRIEN","THAILAND","TRINIDAD UND TABAGO","TSCHECHIEN","TUNESIEN","UKRAINE","UNGARN","VENEZUELA"],image_array=["Ägypten240.png","Algerien240.png","Barbados240.png","Belarus240.png","Bhutan240.png","Bosnien und Herzegowina240.png","Bulgarien240.png","Chile240.png","Dominikanische Republik240.png","Elfenbeinküste240.png","Estland240.png","Honduras240.png","Indonesien240.png","Irak240.png","Iran240.png","Kambodscha240.png","Kamerun240.png","Kasachstan240.png","Katar240.png","Kolumbien240.png","Kosovo240.png","Kuba240.png","Lettland240.png","Luxemburg240.png","Malaysia240.png","Malta240.png","Marokko240.png","Monaco240.png","Nigeria240.png","Nordmazedonien240.png","Panama240.png","Papua-Neuguinea240.png","Philippinien240.png","Portugal240.png","Rumänien240.png","San Marino240.png","Serbien240.png","Singapur240.png","Slowakei240.png","Slowenien240.png","Sri Lanka240.png","Swasiland240.png","Syrien240.png","Thailand240.png","Trinidad und Tabago240.png","Tschechien240.png","Tunesien240.png","Ukraine240.png","Ungarn240.png","Venezuela240.png"],setTimeout((function(){firebaseRef=firebase.database().ref(Ee),firebaseRef.child("GameStart").set("true")}),1500))})),document.querySelectorAll(".option").forEach((function(e){e.addEventListener("mousedown",we)})),document.querySelector(".game-button").addEventListener("mousedown",(function(){var e=document.querySelector("#username").value;console.log(e),console.log(Ee),firebaseRef=firebase.database().ref(Ee),firebaseRef.child("Solution").on("value",(function(e){sol=e.val(),Me=sol})),0==xe&&e==Me&&(console.log("richtig"),Te+=100,console.log(Te),firebaseRef=firebase.database().ref(Ee),firebaseRef.child(ee).set(Te),xe=!0)}));var Me="",Te=0,Ce=0,xe=!1,Be=0;function Ue(){console.log("updateFlag aufgerufen"),Ie==ee&&(random_index=Math.floor(Math.random()*image_array.length),selected_image=image_array[random_index],selected_solution=solution_array[random_index],firebaseRef=firebase.database().ref(Ee),firebaseRef.child("Flag").set(selected_image),firebaseRef.child("Solution").set(selected_solution)),firebaseRef=firebase.database().ref(Ee),firebaseRef=firebase.database().ref(Ee),firebaseRef.child("Solution").on("value",(function(e){sol=e.val(),Me=sol})),firebaseRef.child("Flag").on("value",(function(e){adresseForStorage=e.val(),img=document.querySelector(".FlagImage"),console.log("flagge geändert"),firebase.storage().ref(adresseForStorage).getDownloadURL().then((function(e){img.src=e})),setTimeout((function(){function e(e){var t=d3.interpolate({value:e.previous},e);return function(e){return r(t(e))}}document.querySelector(".containerTimer").style.visibility="visible",document.querySelector(".FlagImage").style.display="flex";var t=0,n=[{value:30,size:30,update:function(){return t+=1}}],a=d3.svg.arc().innerRadius(400/3-133).outerRadius(400/3-133).startAngle(0).endAngle(2*Math.PI),r=d3.svg.arc().innerRadius(400/3-55).outerRadius(400/3-25).startAngle(0).endAngle((function(e){return e.value/e.size*2*Math.PI})),o=d3.select(".containerTimer").append("svg").attr("class","Timer").attr("width",400).attr("height",400).selectAll(".field").data(n).enter().append("g").attr("transform","translate(200,200)").attr("class","field"),i=o.append("path").attr("class","path path--background").attr("d",r),l=o.append("path").attr("class","path path--foreground"),s=o.append("text").attr("class","label").attr("dy",".35em");!function n(){var r,c,u,d,f;o.each((function(e){e.previous=e.value,e.value=e.update(t)})),l.transition().ease("elastic").duration(500).attrTween("d",e),30-t<=10?(i.classed("pulse",!0),s.classed("pulse",!0),30-t>=0&&s.style("font-size","120px").attr("transform","translate(0,4)").text((function(e){return e.size-e.value})),s.transition().ease("elastic").duration(900).style("font-size","90px").attr("transform","translate(0,-10)")):s.text((function(e){return e.size-e.value})),t<=30?setTimeout(n,1e3-t%1e3):(u=0,c=[Me],d=!0,f=0,document.querySelector(".FlagImage").src="",setInterval((function(){d&&u>=c[0].length&&15==++f&&(d=!1,f=0),r=c[0].substr(0,u),0==f&&(d?u++:u--),$(".word").text(r)}),70),console.log("timer elapsed"),document.querySelector("#username").value="",document.querySelector(".Timer").remove(),s.transition().ease("back").duration(700).style("opacity","0").style("font-size","5").attr("transform","translate(0,-40)").each("end",(function(){o.selectAll("text").remove()})),l.transition().ease("back").duration(700).attr("d",a),i.transition().ease("back").duration(700).attr("d",a).each("end",(function(){o.selectAll("path").remove()})),setTimeout((function(){if(xe=!1,2==++Be)Be=0,document.querySelector(".game-full-flex ").style.display="flex",document.querySelector(".aside").style.display="none",document.querySelector(".aside2").style.display="none",document.querySelector(".containerMonitor").style.display="none",document.querySelector(".FlagImage").style.display="none",document.querySelector(".choose-username").style.display="none",xe=!1,Te>Ce?document.querySelector(".final-score").innerHTML=ee:Te<Ce?document.querySelector(".final-score").innerHTML=Re:(document.querySelector(".final-score").innerHTML="Draw",document.querySelector(".result").innerHTML="");else if(Ie==ee){for(Random=Math.floor(Math.random()*image_array.length);Random==random_index;)Random=Math.floor(Math.random()*image_array.length);random_index=Random,selected_image=image_array[random_index],selected_solution=solution_array[random_index],firebaseRef=firebase.database().ref(Ee),firebaseRef.child("Flag").set(selected_image),firebaseRef.child("Solution").set(selected_solution)}}),3e3))}()}),1e3)}))}document.querySelector(".main-menu").addEventListener("mousedown",(function(){document.querySelector(".wrapper").style.display="inline",document.querySelector(".wrapper2").style.display="inline",document.querySelector(".wrapper3").style.display="inline",document.querySelector(".game-full-flex ").style.display="none",document.querySelector(".aside").style.display="none"}));var ke=function(e){return document.querySelector(e)},Oe=ke(".containerMonitor"),_e=ke(".monitorScreen"),He=ke(".screenMask"),Pe=ke(".outer"),De=ke(".border"),Ge=ke(".foot"),Ke=ke(".logo"),Fe=ke(".shine"),je=ke(".monitorGroup"),ze=ke(".monitorSVG");TweenMax.set(Oe,{position:"absolute",top:"30%",left:"50%",xPercent:-50,yPercent:-50}),TweenMax.set(Fe,{x:-112});var $e=new TimelineMax({repeat:0,delay:0});$e.timeScale(1),$e.from(Pe,3,{scale:0,transformOrigin:"50% 50%",ease:Elastic.easeOut.config(1,.7)}).from(De,3,{scale:0,transformOrigin:"50% 50%",ease:Elastic.easeOut.config(.3,.9)},"-=2.8").from([_e,He],3,{scale:0,transformOrigin:"50% 50%",ease:Elastic.easeOut.config(1,1)},"-=2.3").from(Fe,2,{alpha:0,x:-500,ease:Elastic.easeOut.config(1,1)},"-=2.5").from(Ge,2,{scale:0,transformOrigin:"50% 0%",ease:Elastic.easeOut.config(1,.65)},"-=3").from(Ke,2,{scale:2,alpha:0,transformOrigin:"50% 50%",ease:Elastic.easeOut.config(1,.5)},"-=3").from(je,3,{rotation:-45,transformOrigin:"50% 50%",ease:Elastic.easeOut.config(1,.5)},"-="+$e.duration()),TweenMax.set("svg",{visibility:"visible"}),ze.addEventListener("click",(function(e){$e.play(0)})),firebaseRef=firebase.database().ref("matchmaking/"+ee),firebaseRef.onDisconnect().remove()}();
//# sourceMappingURL=main.bundle.js.map
