(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const op=[{name:"VBA / Access",category:"BACKEND",years:8,level:95},{name:"T-SQL / SQL Server",category:"DATABASE",years:8,level:90},{name:"PHP",category:"BACKEND",years:7,level:85},{name:"JavaScript",category:"FRONTEND",years:7,level:80},{name:"HTML / CSS",category:"FRONTEND",years:7,level:85},{name:"Claude Code / Copilot",category:"AI × DEV",years:1,level:75}],lp=[{period:"2017.08 — Present",company:"沖縄のプロダクト企業",role:"Software Engineer（派遣→正社員）",description:"LPガス販売店向け基幹システムの開発・保守・次期バージョン開発を担当。要件定義から運用保守まで一気通貫でフルスタック対応。PHP / AngularJS / SQL Server による Web 系業務システムの開発・機能追加も兼務。生成 AI（Claude Code / GitHub Copilot）の社内導入を主導し開発効率化を推進。Microsoft Access 資格取得を目標にした社内研修の講師も担当（2 期）。",tags:["VBA / Access","T-SQL","PHP","JavaScript","VBS","SQL Server","Claude Code","GitHub Copilot"]},{period:"2016",company:"沖縄県委託 職業訓練",role:"Web プログラマー養成科 受講",description:"HTML / CSS / Java を体系的に学習。サーティファイ主催 Web クリエイター能力認定試験（上級）・Java プログラミング能力認定試験（2 級）を取得。本訓練をきっかけにエンジニアへ転身。",tags:["HTML / CSS","Java"]},{period:"2009 — 2016",company:"フリーランス",role:"プロダンサー / インストラクター",description:"フリーランスのダンサーとしてキャリアをスタート。インストラクターとして生徒への指導・教育も経験。この経験が後の研修講師・プレゼンテーション能力の基盤となっている。",tags:["Dance","Instruction","Education"]},{period:"2009.04 — 2013.03",company:"沖縄大学",role:"人文学部 国際コミュニケーション学科",description:"国際コミュニケーションを専攻。在学中よりストリートダンス活動を並行し、卒業後はダンサーとしてのキャリアをスタート。",tags:["Communication","International Studies"]}],cp=[{name:"LP ガス保安業務員",year:"2023.12"},{name:"Java プログラミング能力認定試験 2 級（サーティファイ）",year:"2016.09"},{name:"Web クリエイター能力認定試験 上級（サーティファイ）",year:"2016.06"},{name:"普通自動車第一種運転免許",year:"2005.05"}],up=[{num:"01",title:"LPガス販売管理システム",description:"沖縄のプロダクト企業での主要プロジェクト。Access VBA + SQL Server による事業者が行う業務全般をフォローするシステムの開発と保守を担当。事務所内のみでなく、ハンディ端末やモバイル端末を駆使して出先でのシステム運用もサポート。",stack:["Access VBA","SQL Server","PHP","HTML / CSS","Anymore"],url:"",tag:"Business System"}],fp=[{label:"GitHub",url:"https://github.com/h-nema-oknw",icon:"github"},{label:"Wantedly",url:"https://www.wantedly.com/id/hiroki_nema",icon:"wantedly"},{label:"Email",url:"mailto:drunkhouse.k29h@gmail.com",icon:"mail"}];function hp(){dp(),pp(),mp(),_p()}function dp(){const r=document.querySelector(".skills-list");r&&(r.innerHTML=op.map(e=>`
    <div class="sk-row">
      <div>
        <div class="sk-name">${e.name}</div>
        <span class="sk-cat">${e.category}</span>
      </div>
      <div class="sk-track">
        <div class="sk-fill" data-w="${e.level}"></div>
      </div>
      <div class="sk-yr">${e.years} yr</div>
    </div>
  `).join(""))}function pp(){const r=document.querySelector(".career-list");if(!r)return;r.innerHTML=lp.map(t=>`
    <div class="career-item">
      <div class="career-period">${t.period}</div>
      <div class="career-body">
        <div class="career-company">${t.company}</div>
        <div class="career-role">${t.role}</div>
        <p class="career-desc">${t.description}</p>
        <div class="career-tags">
          ${t.tags.map(n=>`<span class="tag">${n}</span>`).join("")}
        </div>
      </div>
    </div>
  `).join("");const e=document.querySelector(".quals");e&&(e.querySelectorAll(".qual-item").forEach(t=>t.remove()),cp.forEach(t=>{const n=document.createElement("div");n.className="qual-item",n.innerHTML=`
      <span class="t-accent">▸</span>
      <span>${t.name} <span class="qual-year">${t.year}</span></span>
    `,e.appendChild(n)}))}function mp(){const r=document.querySelector(".works-list");r&&(r.innerHTML=up.map(e=>{const t=`
      <span class="w-num">${e.num}</span>
      <div>
        <div class="w-title">${e.title}</div>
        <div class="w-sub">${e.stack.join(" + ")}</div>
        <div class="w-stack">
          ${e.stack.map(n=>`<span class="tag">${n}</span>`).join("")}
        </div>
      </div>
      <span class="w-tag">${e.tag}</span>
    `;return e.url?`<a href="${e.url}" target="_blank" rel="noopener noreferrer" class="work-item">${t}</a>`:`<div class="work-item">${t}</div>`}).join(""))}function _p(){const r=document.querySelector(".links-grid");if(!r)return;const e={github:"◈",mail:"✉",wantedly:"◉"};r.innerHTML=fp.map(t=>`
    <a href="${t.url}" ${t.url.startsWith("mailto")?"":'target="_blank" rel="noopener noreferrer"'} class="link-card">
      <span class="link-icon" aria-hidden="true">${e[t.icon]||"◆"}</span>
      <span class="link-label">${t.label}</span>
      <span class="link-arrow">→</span>
    </a>
  `).join("")}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Sc="164",gp=0,Jc=1,vp=2,sh=1,xp=2,mi=3,$i=0,mn=1,vi=2,Gi=0,ls=1,Qc=2,eu=3,tu=4,Mp=5,gr=100,Sp=101,yp=102,Ep=103,Tp=104,bp=200,Ap=201,wp=202,Rp=203,Vl=204,Gl=205,Cp=206,Pp=207,Lp=208,Dp=209,Up=210,Ip=211,Np=212,Op=213,Fp=214,Bp=0,zp=1,kp=2,vo=3,Hp=4,Vp=5,Gp=6,Wp=7,ah=0,Xp=1,Yp=2,Wi=0,qp=1,$p=2,Kp=3,Zp=4,jp=5,Jp=6,Qp=7,oh=300,gs=301,vs=302,Wl=303,Xl=304,No=306,Yl=1e3,xr=1001,ql=1002,Gn=1003,em=1004,Ea=1005,jn=1006,$o=1007,Mr=1008,Ki=1009,tm=1010,nm=1011,lh=1012,ch=1013,xs=1014,Fi=1015,Oo=1016,uh=1017,fh=1018,_a=1020,im=35902,rm=1021,sm=1022,si=1023,am=1024,om=1025,cs=1026,aa=1027,lm=1028,hh=1029,cm=1030,dh=1031,ph=1033,Ko=33776,Zo=33777,jo=33778,Jo=33779,nu=35840,iu=35841,ru=35842,su=35843,au=36196,ou=37492,lu=37496,cu=37808,uu=37809,fu=37810,hu=37811,du=37812,pu=37813,mu=37814,_u=37815,gu=37816,vu=37817,xu=37818,Mu=37819,Su=37820,yu=37821,Qo=36492,Eu=36494,Tu=36495,um=36283,bu=36284,Au=36285,wu=36286,fm=3200,hm=3201,dm=0,pm=1,Oi="",Qn="srgb",tr="srgb-linear",yc="display-p3",Fo="display-p3-linear",xo="linear",xt="srgb",Mo="rec709",So="p3",Or=7680,Ru=519,mm=512,_m=513,gm=514,mh=515,vm=516,xm=517,Mm=518,Sm=519,Cu=35044,Pu="300 es",Mi=2e3,yo=2001;class Rs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],el=Math.PI/180,$l=180/Math.PI;function ga(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Kt[r&255]+Kt[r>>8&255]+Kt[r>>16&255]+Kt[r>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[t&63|128]+Kt[t>>8&255]+"-"+Kt[t>>16&255]+Kt[t>>24&255]+Kt[n&255]+Kt[n>>8&255]+Kt[n>>16&255]+Kt[n>>24&255]).toLowerCase()}function pn(r,e,t){return Math.max(e,Math.min(t,r))}function ym(r,e){return(r%e+e)%e}function tl(r,e,t){return(1-t)*r+t*e}function Ls(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function hn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class ct{constructor(e=0,t=0){ct.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(pn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ye{constructor(e,t,n,i,s,a,o,l,c){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],f=n[5],g=n[8],_=i[0],p=i[3],m=i[6],y=i[1],M=i[4],S=i[7],R=i[2],A=i[5],b=i[8];return s[0]=a*_+o*y+l*R,s[3]=a*p+o*M+l*A,s[6]=a*m+o*S+l*b,s[1]=c*_+u*y+d*R,s[4]=c*p+u*M+d*A,s[7]=c*m+u*S+d*b,s[2]=h*_+f*y+g*R,s[5]=h*p+f*M+g*A,s[8]=h*m+f*S+g*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,h=o*l-u*s,f=c*s-a*l,g=t*d+n*h+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(i*c-u*n)*_,e[2]=(o*n-i*a)*_,e[3]=h*_,e[4]=(u*t-i*l)*_,e[5]=(i*s-o*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(nl.makeScale(e,t)),this}rotate(e){return this.premultiply(nl.makeRotation(-e)),this}translate(e,t){return this.premultiply(nl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const nl=new Ye;function _h(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Eo(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Em(){const r=Eo("canvas");return r.style.display="block",r}const Lu={};function Tm(r){r in Lu||(Lu[r]=!0,console.warn(r))}const Du=new Ye().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Uu=new Ye().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ta={[tr]:{transfer:xo,primaries:Mo,toReference:r=>r,fromReference:r=>r},[Qn]:{transfer:xt,primaries:Mo,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Fo]:{transfer:xo,primaries:So,toReference:r=>r.applyMatrix3(Uu),fromReference:r=>r.applyMatrix3(Du)},[yc]:{transfer:xt,primaries:So,toReference:r=>r.convertSRGBToLinear().applyMatrix3(Uu),fromReference:r=>r.applyMatrix3(Du).convertLinearToSRGB()}},bm=new Set([tr,Fo]),dt={enabled:!0,_workingColorSpace:tr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!bm.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=Ta[e].toReference,i=Ta[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return Ta[r].primaries},getTransfer:function(r){return r===Oi?xo:Ta[r].transfer}};function us(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function il(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Fr;class Am{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Fr===void 0&&(Fr=Eo("canvas")),Fr.width=e.width,Fr.height=e.height;const n=Fr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Fr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Eo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=us(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(us(t[n]/255)*255):t[n]=us(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let wm=0;class gh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wm++}),this.uuid=ga(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(rl(i[a].image)):s.push(rl(i[a]))}else s=rl(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function rl(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Am.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Rm=0;class _n extends Rs{constructor(e=_n.DEFAULT_IMAGE,t=_n.DEFAULT_MAPPING,n=xr,i=xr,s=jn,a=Mr,o=si,l=Ki,c=_n.DEFAULT_ANISOTROPY,u=Oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rm++}),this.uuid=ga(),this.name="",this.source=new gh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==oh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Yl:e.x=e.x-Math.floor(e.x);break;case xr:e.x=e.x<0?0:1;break;case ql:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Yl:e.y=e.y-Math.floor(e.y);break;case xr:e.y=e.y<0?0:1;break;case ql:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=oh;_n.DEFAULT_ANISOTROPY=1;class Wt{constructor(e=0,t=0,n=0,i=1){Wt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,S=(f+1)/2,R=(m+1)/2,A=(u+h)/4,b=(d+_)/4,D=(g+p)/4;return M>S&&M>R?M<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(M),i=A/n,s=b/n):S>R?S<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(S),n=A/i,s=D/i):R<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(R),n=b/s,i=D/s),this.set(n,i,s,t),this}let y=Math.sqrt((p-g)*(p-g)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(d-_)/y,this.z=(h-u)/y,this.w=Math.acos((c+f+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Cm extends Rs{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Wt(0,0,e,t),this.scissorTest=!1,this.viewport=new Wt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new _n(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new gh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Lr extends Cm{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class vh extends _n{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Gn,this.minFilter=Gn,this.wrapR=xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pm extends _n{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Gn,this.minFilter=Gn,this.wrapR=xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class va{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],d=n[i+3];const h=s[a+0],f=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=h,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(d!==_||l!==h||c!==f||u!==g){let p=1-o;const m=l*h+c*f+u*g+d*_,y=m>=0?1:-1,M=1-m*m;if(M>Number.EPSILON){const R=Math.sqrt(M),A=Math.atan2(R,m*y);p=Math.sin(p*A)/R,o=Math.sin(o*A)/R}const S=o*y;if(l=l*p+h*S,c=c*p+f*S,u=u*p+g*S,d=d*p+_*S,p===1-o){const R=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=R,c*=R,u*=R,d*=R}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],d=s[a],h=s[a+1],f=s[a+2],g=s[a+3];return e[t]=o*g+u*d+l*f-c*h,e[t+1]=l*g+u*h+c*d-o*f,e[t+2]=c*g+u*f+o*h-l*d,e[t+3]=u*g-o*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),d=o(s/2),h=l(n/2),f=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"YZX":this._x=h*u*d+c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d-h*f*g;break;case"XZY":this._x=h*u*d-c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d+h*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=n+o+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(a-i)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(u-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(s-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-i)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=a*d+this._w*h,this._x=n*d+this._x*h,this._y=i*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,t=0,n=0){Y.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Iu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Iu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),u=2*(o*t-s*i),d=2*(s*n-a*t);return this.x=t+l*c+a*d-o*u,this.y=n+l*u+o*c-s*d,this.z=i+l*d+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return sl.copy(this).projectOnVector(e),this.sub(sl)}reflect(e){return this.sub(sl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(pn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const sl=new Y,Iu=new va;class xa{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(qn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(qn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,qn):qn.fromBufferAttribute(s,a),qn.applyMatrix4(e.matrixWorld),this.expandByPoint(qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ba.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ba.copy(n.boundingBox)),ba.applyMatrix4(e.matrixWorld),this.union(ba)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,qn),qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ds),Aa.subVectors(this.max,Ds),Br.subVectors(e.a,Ds),zr.subVectors(e.b,Ds),kr.subVectors(e.c,Ds),Ci.subVectors(zr,Br),Pi.subVectors(kr,zr),rr.subVectors(Br,kr);let t=[0,-Ci.z,Ci.y,0,-Pi.z,Pi.y,0,-rr.z,rr.y,Ci.z,0,-Ci.x,Pi.z,0,-Pi.x,rr.z,0,-rr.x,-Ci.y,Ci.x,0,-Pi.y,Pi.x,0,-rr.y,rr.x,0];return!al(t,Br,zr,kr,Aa)||(t=[1,0,0,0,1,0,0,0,1],!al(t,Br,zr,kr,Aa))?!1:(wa.crossVectors(Ci,Pi),t=[wa.x,wa.y,wa.z],al(t,Br,zr,kr,Aa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ui=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],qn=new Y,ba=new xa,Br=new Y,zr=new Y,kr=new Y,Ci=new Y,Pi=new Y,rr=new Y,Ds=new Y,Aa=new Y,wa=new Y,sr=new Y;function al(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){sr.fromArray(r,s);const o=i.x*Math.abs(sr.x)+i.y*Math.abs(sr.y)+i.z*Math.abs(sr.z),l=e.dot(sr),c=t.dot(sr),u=n.dot(sr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Lm=new xa,Us=new Y,ol=new Y;class Bo{constructor(e=new Y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Lm.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Us.subVectors(e,this.center);const t=Us.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Us,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ol.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Us.copy(e.center).add(ol)),this.expandByPoint(Us.copy(e.center).sub(ol))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const fi=new Y,ll=new Y,Ra=new Y,Li=new Y,cl=new Y,Ca=new Y,ul=new Y;class xh{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=fi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fi.copy(this.origin).addScaledVector(this.direction,t),fi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ll.copy(e).add(t).multiplyScalar(.5),Ra.copy(t).sub(e).normalize(),Li.copy(this.origin).sub(ll);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Ra),o=Li.dot(this.direction),l=-Li.dot(Ra),c=Li.lengthSq(),u=Math.abs(1-a*a);let d,h,f,g;if(u>0)if(d=a*l-o,h=a*o-l,g=s*u,d>=0)if(h>=-g)if(h<=g){const _=1/u;d*=_,h*=_,f=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=s,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-a*s+o)),h=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-s,-l),s),f=h*(h+2*l)+c):(d=Math.max(0,-(a*s+o)),h=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c);else h=a>0?-s:s,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(ll).addScaledVector(Ra,h),f}intersectSphere(e,t){fi.subVectors(e.center,this.origin);const n=fi.dot(this.direction),i=fi.dot(fi)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,fi)!==null}intersectTriangle(e,t,n,i,s){cl.subVectors(t,e),Ca.subVectors(n,e),ul.crossVectors(cl,Ca);let a=this.direction.dot(ul),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Li.subVectors(this.origin,e);const l=o*this.direction.dot(Ca.crossVectors(Li,Ca));if(l<0)return null;const c=o*this.direction.dot(cl.cross(Li));if(c<0||l+c>a)return null;const u=-o*Li.dot(ul);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class It{constructor(e,t,n,i,s,a,o,l,c,u,d,h,f,g,_,p){It.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,u,d,h,f,g,_,p)}set(e,t,n,i,s,a,o,l,c,u,d,h,f,g,_,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=d,m[14]=h,m[3]=f,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new It().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Hr.setFromMatrixColumn(e,0).length(),s=1/Hr.setFromMatrixColumn(e,1).length(),a=1/Hr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=a*u,f=a*d,g=o*u,_=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=h-_*c,t[9]=-o*l,t[2]=_-h*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,f=l*d,g=c*u,_=c*d;t[0]=h+_*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=f*o-g,t[6]=_+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,f=l*d,g=c*u,_=c*d;t[0]=h-_*o,t[4]=-a*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*u,t[9]=_-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,f=a*d,g=o*u,_=o*d;t[0]=l*u,t[4]=g*c-f,t[8]=h*c+_,t[1]=l*d,t[5]=_*c+h,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-h*d,t[8]=g*d+f,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*d+g,t[10]=h-_*d}else if(e.order==="XZY"){const h=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+_,t[5]=a*u,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*u,t[10]=_*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Dm,e,Um)}lookAt(e,t,n){const i=this.elements;return En.subVectors(e,t),En.lengthSq()===0&&(En.z=1),En.normalize(),Di.crossVectors(n,En),Di.lengthSq()===0&&(Math.abs(n.z)===1?En.x+=1e-4:En.z+=1e-4,En.normalize(),Di.crossVectors(n,En)),Di.normalize(),Pa.crossVectors(En,Di),i[0]=Di.x,i[4]=Pa.x,i[8]=En.x,i[1]=Di.y,i[5]=Pa.y,i[9]=En.y,i[2]=Di.z,i[6]=Pa.z,i[10]=En.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],f=n[13],g=n[2],_=n[6],p=n[10],m=n[14],y=n[3],M=n[7],S=n[11],R=n[15],A=i[0],b=i[4],D=i[8],x=i[12],v=i[1],P=i[5],U=i[9],L=i[13],G=i[2],W=i[6],Z=i[10],$=i[14],z=i[3],J=i[7],w=i[11],oe=i[15];return s[0]=a*A+o*v+l*G+c*z,s[4]=a*b+o*P+l*W+c*J,s[8]=a*D+o*U+l*Z+c*w,s[12]=a*x+o*L+l*$+c*oe,s[1]=u*A+d*v+h*G+f*z,s[5]=u*b+d*P+h*W+f*J,s[9]=u*D+d*U+h*Z+f*w,s[13]=u*x+d*L+h*$+f*oe,s[2]=g*A+_*v+p*G+m*z,s[6]=g*b+_*P+p*W+m*J,s[10]=g*D+_*U+p*Z+m*w,s[14]=g*x+_*L+p*$+m*oe,s[3]=y*A+M*v+S*G+R*z,s[7]=y*b+M*P+S*W+R*J,s[11]=y*D+M*U+S*Z+R*w,s[15]=y*x+M*L+S*$+R*oe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],g=e[3],_=e[7],p=e[11],m=e[15];return g*(+s*l*d-i*c*d-s*o*h+n*c*h+i*o*f-n*l*f)+_*(+t*l*f-t*c*h+s*a*h-i*a*f+i*c*u-s*l*u)+p*(+t*c*d-t*o*f-s*a*d+n*a*f+s*o*u-n*c*u)+m*(-i*o*u-t*l*d+t*o*h+i*a*d-n*a*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],g=e[12],_=e[13],p=e[14],m=e[15],y=d*p*c-_*h*c+_*l*f-o*p*f-d*l*m+o*h*m,M=g*h*c-u*p*c-g*l*f+a*p*f+u*l*m-a*h*m,S=u*_*c-g*d*c+g*o*f-a*_*f-u*o*m+a*d*m,R=g*d*l-u*_*l-g*o*h+a*_*h+u*o*p-a*d*p,A=t*y+n*M+i*S+s*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/A;return e[0]=y*b,e[1]=(_*h*s-d*p*s-_*i*f+n*p*f+d*i*m-n*h*m)*b,e[2]=(o*p*s-_*l*s+_*i*c-n*p*c-o*i*m+n*l*m)*b,e[3]=(d*l*s-o*h*s-d*i*c+n*h*c+o*i*f-n*l*f)*b,e[4]=M*b,e[5]=(u*p*s-g*h*s+g*i*f-t*p*f-u*i*m+t*h*m)*b,e[6]=(g*l*s-a*p*s-g*i*c+t*p*c+a*i*m-t*l*m)*b,e[7]=(a*h*s-u*l*s+u*i*c-t*h*c-a*i*f+t*l*f)*b,e[8]=S*b,e[9]=(g*d*s-u*_*s-g*n*f+t*_*f+u*n*m-t*d*m)*b,e[10]=(a*_*s-g*o*s+g*n*c-t*_*c-a*n*m+t*o*m)*b,e[11]=(u*o*s-a*d*s-u*n*c+t*d*c+a*n*f-t*o*f)*b,e[12]=R*b,e[13]=(u*_*i-g*d*i+g*n*h-t*_*h-u*n*p+t*d*p)*b,e[14]=(g*o*i-a*_*i-g*n*l+t*_*l+a*n*p-t*o*p)*b,e[15]=(a*d*i-u*o*i+u*n*l-t*d*l-a*n*h+t*o*h)*b,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,d=o+o,h=s*c,f=s*u,g=s*d,_=a*u,p=a*d,m=o*d,y=l*c,M=l*u,S=l*d,R=n.x,A=n.y,b=n.z;return i[0]=(1-(_+m))*R,i[1]=(f+S)*R,i[2]=(g-M)*R,i[3]=0,i[4]=(f-S)*A,i[5]=(1-(h+m))*A,i[6]=(p+y)*A,i[7]=0,i[8]=(g+M)*b,i[9]=(p-y)*b,i[10]=(1-(h+_))*b,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Hr.set(i[0],i[1],i[2]).length();const a=Hr.set(i[4],i[5],i[6]).length(),o=Hr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],$n.copy(this);const c=1/s,u=1/a,d=1/o;return $n.elements[0]*=c,$n.elements[1]*=c,$n.elements[2]*=c,$n.elements[4]*=u,$n.elements[5]*=u,$n.elements[6]*=u,$n.elements[8]*=d,$n.elements[9]*=d,$n.elements[10]*=d,t.setFromRotationMatrix($n),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=Mi){const l=this.elements,c=2*s/(t-e),u=2*s/(n-i),d=(t+e)/(t-e),h=(n+i)/(n-i);let f,g;if(o===Mi)f=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===yo)f=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=Mi){const l=this.elements,c=1/(t-e),u=1/(n-i),d=1/(a-s),h=(t+e)*c,f=(n+i)*u;let g,_;if(o===Mi)g=(a+s)*d,_=-2*d;else if(o===yo)g=s*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Hr=new Y,$n=new It,Dm=new Y(0,0,0),Um=new Y(1,1,1),Di=new Y,Pa=new Y,En=new Y,Nu=new It,Ou=new va;class Ti{constructor(e=0,t=0,n=0,i=Ti.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],d=i[2],h=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(pn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-pn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(pn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-pn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(pn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-pn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Nu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Nu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ou.setFromEuler(this),this.setFromQuaternion(Ou,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ti.DEFAULT_ORDER="XYZ";class Mh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Im=0;const Fu=new Y,Vr=new va,hi=new It,La=new Y,Is=new Y,Nm=new Y,Om=new va,Bu=new Y(1,0,0),zu=new Y(0,1,0),ku=new Y(0,0,1),Hu={type:"added"},Fm={type:"removed"},Gr={type:"childadded",child:null},fl={type:"childremoved",child:null};class gn extends Rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Im++}),this.uuid=ga(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gn.DEFAULT_UP.clone();const e=new Y,t=new Ti,n=new va,i=new Y(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new It},normalMatrix:{value:new Ye}}),this.matrix=new It,this.matrixWorld=new It,this.matrixAutoUpdate=gn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vr.setFromAxisAngle(e,t),this.quaternion.multiply(Vr),this}rotateOnWorldAxis(e,t){return Vr.setFromAxisAngle(e,t),this.quaternion.premultiply(Vr),this}rotateX(e){return this.rotateOnAxis(Bu,e)}rotateY(e){return this.rotateOnAxis(zu,e)}rotateZ(e){return this.rotateOnAxis(ku,e)}translateOnAxis(e,t){return Fu.copy(e).applyQuaternion(this.quaternion),this.position.add(Fu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Bu,e)}translateY(e){return this.translateOnAxis(zu,e)}translateZ(e){return this.translateOnAxis(ku,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?La.copy(e):La.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hi.lookAt(Is,La,this.up):hi.lookAt(La,Is,this.up),this.quaternion.setFromRotationMatrix(hi),i&&(hi.extractRotation(i.matrixWorld),Vr.setFromRotationMatrix(hi),this.quaternion.premultiply(Vr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Hu),Gr.child=e,this.dispatchEvent(Gr),Gr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Fm),fl.child=e,this.dispatchEvent(fl),fl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(hi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Hu),Gr.child=e,this.dispatchEvent(Gr),Gr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,e,Nm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,Om,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++){const o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}gn.DEFAULT_UP=new Y(0,1,0);gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Kn=new Y,di=new Y,hl=new Y,pi=new Y,Wr=new Y,Xr=new Y,Vu=new Y,dl=new Y,pl=new Y,ml=new Y;class ii{constructor(e=new Y,t=new Y,n=new Y){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Kn.subVectors(e,t),i.cross(Kn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Kn.subVectors(i,t),di.subVectors(n,t),hl.subVectors(e,t);const a=Kn.dot(Kn),o=Kn.dot(di),l=Kn.dot(hl),c=di.dot(di),u=di.dot(hl),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const h=1/d,f=(c*l-o*u)*h,g=(a*u-o*l)*h;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,pi)===null?!1:pi.x>=0&&pi.y>=0&&pi.x+pi.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,pi.x),l.addScaledVector(a,pi.y),l.addScaledVector(o,pi.z),l)}static isFrontFacing(e,t,n,i){return Kn.subVectors(n,t),di.subVectors(e,t),Kn.cross(di).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kn.subVectors(this.c,this.b),di.subVectors(this.a,this.b),Kn.cross(di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ii.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ii.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return ii.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return ii.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ii.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;Wr.subVectors(i,n),Xr.subVectors(s,n),dl.subVectors(e,n);const l=Wr.dot(dl),c=Xr.dot(dl);if(l<=0&&c<=0)return t.copy(n);pl.subVectors(e,i);const u=Wr.dot(pl),d=Xr.dot(pl);if(u>=0&&d<=u)return t.copy(i);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Wr,a);ml.subVectors(e,s);const f=Wr.dot(ml),g=Xr.dot(ml);if(g>=0&&f<=g)return t.copy(s);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Xr,o);const p=u*g-f*d;if(p<=0&&d-u>=0&&f-g>=0)return Vu.subVectors(s,i),o=(d-u)/(d-u+(f-g)),t.copy(i).addScaledVector(Vu,o);const m=1/(p+_+h);return a=_*m,o=h*m,t.copy(n).addScaledVector(Wr,a).addScaledVector(Xr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Sh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ui={h:0,s:0,l:0},Da={h:0,s:0,l:0};function _l(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class ft{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=dt.workingColorSpace){return this.r=e,this.g=t,this.b=n,dt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=dt.workingColorSpace){if(e=ym(e,1),t=pn(t,0,1),n=pn(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=_l(a,s,e+1/3),this.g=_l(a,s,e),this.b=_l(a,s,e-1/3)}return dt.toWorkingColorSpace(this,i),this}setStyle(e,t=Qn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Qn){const n=Sh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=us(e.r),this.g=us(e.g),this.b=us(e.b),this}copyLinearToSRGB(e){return this.r=il(e.r),this.g=il(e.g),this.b=il(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qn){return dt.fromWorkingColorSpace(Zt.copy(this),e),Math.round(pn(Zt.r*255,0,255))*65536+Math.round(pn(Zt.g*255,0,255))*256+Math.round(pn(Zt.b*255,0,255))}getHexString(e=Qn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.fromWorkingColorSpace(Zt.copy(this),t);const n=Zt.r,i=Zt.g,s=Zt.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=dt.workingColorSpace){return dt.fromWorkingColorSpace(Zt.copy(this),t),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=Qn){dt.fromWorkingColorSpace(Zt.copy(this),e);const t=Zt.r,n=Zt.g,i=Zt.b;return e!==Qn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ui),this.setHSL(Ui.h+e,Ui.s+t,Ui.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ui),e.getHSL(Da);const n=tl(Ui.h,Da.h,t),i=tl(Ui.s,Da.s,t),s=tl(Ui.l,Da.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Zt=new ft;ft.NAMES=Sh;let Bm=0;class Ma extends Rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bm++}),this.uuid=ga(),this.name="",this.type="Material",this.blending=ls,this.side=$i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vl,this.blendDst=Gl,this.blendEquation=gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ft(0,0,0),this.blendAlpha=0,this.depthFunc=vo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ru,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Or,this.stencilZFail=Or,this.stencilZPass=Or,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ls&&(n.blending=this.blending),this.side!==$i&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Vl&&(n.blendSrc=this.blendSrc),this.blendDst!==Gl&&(n.blendDst=this.blendDst),this.blendEquation!==gr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==vo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ru&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Or&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Or&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Or&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class yh extends Ma{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.combine=ah,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Lt=new Y,Ua=new ct;class Un{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Cu,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Tm("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ua.fromBufferAttribute(this,t),Ua.applyMatrix3(e),this.setXY(t,Ua.x,Ua.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix3(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ls(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=hn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ls(t,this.array)),t}setX(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ls(t,this.array)),t}setY(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ls(t,this.array)),t}setZ(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ls(t,this.array)),t}setW(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=hn(t,this.array),n=hn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=hn(t,this.array),n=hn(n,this.array),i=hn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=hn(t,this.array),n=hn(n,this.array),i=hn(i,this.array),s=hn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Cu&&(e.usage=this.usage),e}}class Eh extends Un{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Th extends Un{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Er extends Un{constructor(e,t,n){super(new Float32Array(e),t,n)}}let zm=0;const Bn=new It,gl=new gn,Yr=new Y,Tn=new xa,Ns=new xa,kt=new Y;class wi extends Rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zm++}),this.uuid=ga(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_h(e)?Th:Eh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ye().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Bn.makeRotationFromQuaternion(e),this.applyMatrix4(Bn),this}rotateX(e){return Bn.makeRotationX(e),this.applyMatrix4(Bn),this}rotateY(e){return Bn.makeRotationY(e),this.applyMatrix4(Bn),this}rotateZ(e){return Bn.makeRotationZ(e),this.applyMatrix4(Bn),this}translate(e,t,n){return Bn.makeTranslation(e,t,n),this.applyMatrix4(Bn),this}scale(e,t,n){return Bn.makeScale(e,t,n),this.applyMatrix4(Bn),this}lookAt(e){return gl.lookAt(e),gl.updateMatrix(),this.applyMatrix4(gl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yr).negate(),this.translate(Yr.x,Yr.y,Yr.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Er(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Tn.setFromBufferAttribute(s),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const n=this.boundingSphere.center;if(Tn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Ns.setFromBufferAttribute(o),this.morphTargetsRelative?(kt.addVectors(Tn.min,Ns.min),Tn.expandByPoint(kt),kt.addVectors(Tn.max,Ns.max),Tn.expandByPoint(kt)):(Tn.expandByPoint(Ns.min),Tn.expandByPoint(Ns.max))}Tn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)kt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(kt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)kt.fromBufferAttribute(o,c),l&&(Yr.fromBufferAttribute(e,c),kt.add(Yr)),i=Math.max(i,n.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Un(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<n.count;D++)o[D]=new Y,l[D]=new Y;const c=new Y,u=new Y,d=new Y,h=new ct,f=new ct,g=new ct,_=new Y,p=new Y;function m(D,x,v){c.fromBufferAttribute(n,D),u.fromBufferAttribute(n,x),d.fromBufferAttribute(n,v),h.fromBufferAttribute(s,D),f.fromBufferAttribute(s,x),g.fromBufferAttribute(s,v),u.sub(c),d.sub(c),f.sub(h),g.sub(h);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(P),p.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(P),o[D].add(_),o[x].add(_),o[v].add(_),l[D].add(p),l[x].add(p),l[v].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let D=0,x=y.length;D<x;++D){const v=y[D],P=v.start,U=v.count;for(let L=P,G=P+U;L<G;L+=3)m(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const M=new Y,S=new Y,R=new Y,A=new Y;function b(D){R.fromBufferAttribute(i,D),A.copy(R);const x=o[D];M.copy(x),M.sub(R.multiplyScalar(R.dot(x))).normalize(),S.crossVectors(A,x);const P=S.dot(l[D])<0?-1:1;a.setXYZW(D,M.x,M.y,M.z,P)}for(let D=0,x=y.length;D<x;++D){const v=y[D],P=v.start,U=v.count;for(let L=P,G=P+U;L<G;L+=3)b(e.getX(L+0)),b(e.getX(L+1)),b(e.getX(L+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Un(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const i=new Y,s=new Y,a=new Y,o=new Y,l=new Y,c=new Y,u=new Y,d=new Y;if(e)for(let h=0,f=e.count;h<f;h+=3){const g=e.getX(h+0),_=e.getX(h+1),p=e.getX(h+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,p),u.subVectors(a,s),d.subVectors(i,s),u.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)i.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),d.subVectors(i,s),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)kt.fromBufferAttribute(e,t),kt.normalize(),e.setXYZ(t,kt.x,kt.y,kt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u);let f=0,g=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*u;for(let m=0;m<u;m++)h[g++]=c[f++]}return new Un(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new wi,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){const h=c[u],f=e(h,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Gu=new It,ar=new xh,Ia=new Bo,Wu=new Y,qr=new Y,$r=new Y,Kr=new Y,vl=new Y,Na=new Y,Oa=new ct,Fa=new ct,Ba=new ct,Xu=new Y,Yu=new Y,qu=new Y,za=new Y,ka=new Y;class Si extends gn{constructor(e=new wi,t=new yh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){Na.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],d=s[l];u!==0&&(vl.fromBufferAttribute(d,e),a?Na.addScaledVector(vl,u):Na.addScaledVector(vl.sub(t),u))}t.add(Na)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ia.copy(n.boundingSphere),Ia.applyMatrix4(s),ar.copy(e.ray).recast(e.near),!(Ia.containsPoint(ar.origin)===!1&&(ar.intersectSphere(Ia,Wu)===null||ar.origin.distanceToSquared(Wu)>(e.far-e.near)**2))&&(Gu.copy(s).invert(),ar.copy(e.ray).applyMatrix4(Gu),!(n.boundingBox!==null&&ar.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ar)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){const p=h[g],m=a[p.materialIndex],y=Math.max(p.start,f.start),M=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let S=y,R=M;S<R;S+=3){const A=o.getX(S),b=o.getX(S+1),D=o.getX(S+2);i=Ha(this,m,e,n,c,u,d,A,b,D),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const y=o.getX(p),M=o.getX(p+1),S=o.getX(p+2);i=Ha(this,a,e,n,c,u,d,y,M,S),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){const p=h[g],m=a[p.materialIndex],y=Math.max(p.start,f.start),M=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let S=y,R=M;S<R;S+=3){const A=S,b=S+1,D=S+2;i=Ha(this,m,e,n,c,u,d,A,b,D),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const y=p,M=p+1,S=p+2;i=Ha(this,a,e,n,c,u,d,y,M,S),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function km(r,e,t,n,i,s,a,o){let l;if(e.side===mn?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===$i,o),l===null)return null;ka.copy(o),ka.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(ka);return c<t.near||c>t.far?null:{distance:c,point:ka.clone(),object:r}}function Ha(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,qr),r.getVertexPosition(l,$r),r.getVertexPosition(c,Kr);const u=km(r,e,t,n,qr,$r,Kr,za);if(u){i&&(Oa.fromBufferAttribute(i,o),Fa.fromBufferAttribute(i,l),Ba.fromBufferAttribute(i,c),u.uv=ii.getInterpolation(za,qr,$r,Kr,Oa,Fa,Ba,new ct)),s&&(Oa.fromBufferAttribute(s,o),Fa.fromBufferAttribute(s,l),Ba.fromBufferAttribute(s,c),u.uv1=ii.getInterpolation(za,qr,$r,Kr,Oa,Fa,Ba,new ct)),a&&(Xu.fromBufferAttribute(a,o),Yu.fromBufferAttribute(a,l),qu.fromBufferAttribute(a,c),u.normal=ii.getInterpolation(za,qr,$r,Kr,Xu,Yu,qu,new Y),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new Y,materialIndex:0};ii.getNormal(qr,$r,Kr,d.normal),u.face=d}return u}class Sa extends wi{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],d=[];let h=0,f=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Er(c,3)),this.setAttribute("normal",new Er(u,3)),this.setAttribute("uv",new Er(d,2));function g(_,p,m,y,M,S,R,A,b,D,x){const v=S/b,P=R/D,U=S/2,L=R/2,G=A/2,W=b+1,Z=D+1;let $=0,z=0;const J=new Y;for(let w=0;w<Z;w++){const oe=w*P-L;for(let Le=0;Le<W;Le++){const Ke=Le*v-U;J[_]=Ke*y,J[p]=oe*M,J[m]=G,c.push(J.x,J.y,J.z),J[_]=0,J[p]=0,J[m]=A>0?1:-1,u.push(J.x,J.y,J.z),d.push(Le/b),d.push(1-w/D),$+=1}}for(let w=0;w<D;w++)for(let oe=0;oe<b;oe++){const Le=h+oe+W*w,Ke=h+oe+W*(w+1),X=h+(oe+1)+W*(w+1),te=h+(oe+1)+W*w;l.push(Le,Ke,te),l.push(Ke,X,te),z+=6}o.addGroup(f,z,x),f+=z,h+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ms(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function an(r){const e={};for(let t=0;t<r.length;t++){const n=Ms(r[t]);for(const i in n)e[i]=n[i]}return e}function Hm(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function bh(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}const Vm={clone:Ms,merge:an};var Gm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zi extends Ma{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gm,this.fragmentShader=Wm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ms(e.uniforms),this.uniformsGroups=Hm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ah extends gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new It,this.projectionMatrix=new It,this.projectionMatrixInverse=new It,this.coordinateSystem=Mi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ii=new Y,$u=new ct,Ku=new ct;class kn extends Ah{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=$l*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(el*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $l*2*Math.atan(Math.tan(el*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ii.x,Ii.y).multiplyScalar(-e/Ii.z),Ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ii.x,Ii.y).multiplyScalar(-e/Ii.z)}getViewSize(e,t){return this.getViewBounds(e,$u,Ku),t.subVectors(Ku,$u)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(el*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Zr=-90,jr=1;class Xm extends gn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new kn(Zr,jr,e,t);i.layers=this.layers,this.add(i);const s=new kn(Zr,jr,e,t);s.layers=this.layers,this.add(s);const a=new kn(Zr,jr,e,t);a.layers=this.layers,this.add(a);const o=new kn(Zr,jr,e,t);o.layers=this.layers,this.add(o);const l=new kn(Zr,jr,e,t);l.layers=this.layers,this.add(l);const c=new kn(Zr,jr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Mi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===yo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class wh extends _n{constructor(e,t,n,i,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:gs,super(e,t,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ym extends Lr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new wh(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:jn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Sa(5,5,5),s=new Zi({name:"CubemapFromEquirect",uniforms:Ms(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:mn,blending:Gi});s.uniforms.tEquirect.value=t;const a=new Si(i,s),o=t.minFilter;return t.minFilter===Mr&&(t.minFilter=jn),new Xm(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}const xl=new Y,qm=new Y,$m=new Ye;class hr{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=xl.subVectors(n,t).cross(qm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(xl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||$m.getNormalMatrix(e),i=this.coplanarPoint(xl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const or=new Bo,Va=new Y;class Rh{constructor(e=new hr,t=new hr,n=new hr,i=new hr,s=new hr,a=new hr){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Mi){const n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],u=i[5],d=i[6],h=i[7],f=i[8],g=i[9],_=i[10],p=i[11],m=i[12],y=i[13],M=i[14],S=i[15];if(n[0].setComponents(l-s,h-c,p-f,S-m).normalize(),n[1].setComponents(l+s,h+c,p+f,S+m).normalize(),n[2].setComponents(l+a,h+u,p+g,S+y).normalize(),n[3].setComponents(l-a,h-u,p-g,S-y).normalize(),n[4].setComponents(l-o,h-d,p-_,S-M).normalize(),t===Mi)n[5].setComponents(l+o,h+d,p+_,S+M).normalize();else if(t===yo)n[5].setComponents(o,d,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),or.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),or.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(or)}intersectsSprite(e){return or.center.set(0,0,0),or.radius=.7071067811865476,or.applyMatrix4(e.matrixWorld),this.intersectsSphere(or)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Va.x=i.normal.x>0?e.max.x:e.min.x,Va.y=i.normal.y>0?e.max.y:e.min.y,Va.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Va)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ch(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Km(r){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,d=c.byteLength,h=r.createBuffer();r.bindBuffer(l,h),r.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const u=l.array,d=l._updateRange,h=l.updateRanges;if(r.bindBuffer(c,o),d.count===-1&&h.length===0&&r.bufferSubData(c,0,u),h.length!==0){for(let f=0,g=h.length;f<g;f++){const _=h[f];r.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}d.count!==-1&&(r.bufferSubData(c,d.offset*u.BYTES_PER_ELEMENT,u,d.offset,d.count),d.count=-1),l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}class zo extends wi{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,d=e/o,h=t/l,f=[],g=[],_=[],p=[];for(let m=0;m<u;m++){const y=m*h-a;for(let M=0;M<c;M++){const S=M*d-s;g.push(S,-y,0),_.push(0,0,1),p.push(M/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<o;y++){const M=y+c*m,S=y+c*(m+1),R=y+1+c*(m+1),A=y+1+c*m;f.push(M,S,A),f.push(S,R,A)}this.setIndex(f),this.setAttribute("position",new Er(g,3)),this.setAttribute("normal",new Er(_,3)),this.setAttribute("uv",new Er(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zo(e.width,e.height,e.widthSegments,e.heightSegments)}}var Zm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Jm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,e_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,t_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,n_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,i_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,r_=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,s_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,a_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,o_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,l_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,c_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,u_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,f_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,h_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,d_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,p_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,m_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,__=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,g_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,v_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,x_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,M_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,S_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,y_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,E_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,T_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,b_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,A_="gl_FragColor = linearToOutputTexel( gl_FragColor );",w_=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,R_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,C_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,P_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,L_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,D_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,U_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,I_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,N_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,O_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,F_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,B_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,z_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,k_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,H_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,V_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,G_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,W_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,X_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Y_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,q_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,$_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,K_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Z_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,j_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,J_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Q_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ng=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ig=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,sg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ag=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,og=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ug=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,fg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,hg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,dg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,pg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,mg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_g=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,xg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Sg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Eg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,bg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ag=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Pg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,Dg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ug=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ig=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ng=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Og=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Fg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,zg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Wg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Xg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Yg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,$g=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Kg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,e0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,n0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,i0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,r0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,s0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,a0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,l0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,c0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,u0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,h0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,p0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,_0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,g0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,v0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,M0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,y0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,E0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,T0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,b0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,A0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,w0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,R0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xe={alphahash_fragment:Zm,alphahash_pars_fragment:jm,alphamap_fragment:Jm,alphamap_pars_fragment:Qm,alphatest_fragment:e_,alphatest_pars_fragment:t_,aomap_fragment:n_,aomap_pars_fragment:i_,batching_pars_vertex:r_,batching_vertex:s_,begin_vertex:a_,beginnormal_vertex:o_,bsdfs:l_,iridescence_fragment:c_,bumpmap_pars_fragment:u_,clipping_planes_fragment:f_,clipping_planes_pars_fragment:h_,clipping_planes_pars_vertex:d_,clipping_planes_vertex:p_,color_fragment:m_,color_pars_fragment:__,color_pars_vertex:g_,color_vertex:v_,common:x_,cube_uv_reflection_fragment:M_,defaultnormal_vertex:S_,displacementmap_pars_vertex:y_,displacementmap_vertex:E_,emissivemap_fragment:T_,emissivemap_pars_fragment:b_,colorspace_fragment:A_,colorspace_pars_fragment:w_,envmap_fragment:R_,envmap_common_pars_fragment:C_,envmap_pars_fragment:P_,envmap_pars_vertex:L_,envmap_physical_pars_fragment:V_,envmap_vertex:D_,fog_vertex:U_,fog_pars_vertex:I_,fog_fragment:N_,fog_pars_fragment:O_,gradientmap_pars_fragment:F_,lightmap_pars_fragment:B_,lights_lambert_fragment:z_,lights_lambert_pars_fragment:k_,lights_pars_begin:H_,lights_toon_fragment:G_,lights_toon_pars_fragment:W_,lights_phong_fragment:X_,lights_phong_pars_fragment:Y_,lights_physical_fragment:q_,lights_physical_pars_fragment:$_,lights_fragment_begin:K_,lights_fragment_maps:Z_,lights_fragment_end:j_,logdepthbuf_fragment:J_,logdepthbuf_pars_fragment:Q_,logdepthbuf_pars_vertex:eg,logdepthbuf_vertex:tg,map_fragment:ng,map_pars_fragment:ig,map_particle_fragment:rg,map_particle_pars_fragment:sg,metalnessmap_fragment:ag,metalnessmap_pars_fragment:og,morphinstance_vertex:lg,morphcolor_vertex:cg,morphnormal_vertex:ug,morphtarget_pars_vertex:fg,morphtarget_vertex:hg,normal_fragment_begin:dg,normal_fragment_maps:pg,normal_pars_fragment:mg,normal_pars_vertex:_g,normal_vertex:gg,normalmap_pars_fragment:vg,clearcoat_normal_fragment_begin:xg,clearcoat_normal_fragment_maps:Mg,clearcoat_pars_fragment:Sg,iridescence_pars_fragment:yg,opaque_fragment:Eg,packing:Tg,premultiplied_alpha_fragment:bg,project_vertex:Ag,dithering_fragment:wg,dithering_pars_fragment:Rg,roughnessmap_fragment:Cg,roughnessmap_pars_fragment:Pg,shadowmap_pars_fragment:Lg,shadowmap_pars_vertex:Dg,shadowmap_vertex:Ug,shadowmask_pars_fragment:Ig,skinbase_vertex:Ng,skinning_pars_vertex:Og,skinning_vertex:Fg,skinnormal_vertex:Bg,specularmap_fragment:zg,specularmap_pars_fragment:kg,tonemapping_fragment:Hg,tonemapping_pars_fragment:Vg,transmission_fragment:Gg,transmission_pars_fragment:Wg,uv_pars_fragment:Xg,uv_pars_vertex:Yg,uv_vertex:qg,worldpos_vertex:$g,background_vert:Kg,background_frag:Zg,backgroundCube_vert:jg,backgroundCube_frag:Jg,cube_vert:Qg,cube_frag:e0,depth_vert:t0,depth_frag:n0,distanceRGBA_vert:i0,distanceRGBA_frag:r0,equirect_vert:s0,equirect_frag:a0,linedashed_vert:o0,linedashed_frag:l0,meshbasic_vert:c0,meshbasic_frag:u0,meshlambert_vert:f0,meshlambert_frag:h0,meshmatcap_vert:d0,meshmatcap_frag:p0,meshnormal_vert:m0,meshnormal_frag:_0,meshphong_vert:g0,meshphong_frag:v0,meshphysical_vert:x0,meshphysical_frag:M0,meshtoon_vert:S0,meshtoon_frag:y0,points_vert:E0,points_frag:T0,shadow_vert:b0,shadow_frag:A0,sprite_vert:w0,sprite_frag:R0},de={common:{diffuse:{value:new ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new ft(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},ni={basic:{uniforms:an([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:an([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new ft(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:an([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new ft(0)},specular:{value:new ft(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:an([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:an([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new ft(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:an([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:an([de.points,de.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:an([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:an([de.common,de.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:an([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:an([de.sprite,de.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:an([de.common,de.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:an([de.lights,de.fog,{color:{value:new ft(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};ni.physical={uniforms:an([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new ft(0)},specularColor:{value:new ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const Ga={r:0,b:0,g:0},lr=new Ti,C0=new It;function P0(r,e,t,n,i,s,a){const o=new ft(0);let l=s===!0?0:1,c,u,d=null,h=0,f=null;function g(y){let M=y.isScene===!0?y.background:null;return M&&M.isTexture&&(M=(y.backgroundBlurriness>0?t:e).get(M)),M}function _(y){let M=!1;const S=g(y);S===null?m(o,l):S&&S.isColor&&(m(S,1),M=!0);const R=r.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||M)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil)}function p(y,M){const S=g(M);S&&(S.isCubeTexture||S.mapping===No)?(u===void 0&&(u=new Si(new Sa(1,1,1),new Zi({name:"BackgroundCubeMaterial",uniforms:Ms(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,A,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),lr.copy(M.backgroundRotation),lr.x*=-1,lr.y*=-1,lr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(lr.y*=-1,lr.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(C0.makeRotationFromEuler(lr)),u.material.toneMapped=dt.getTransfer(S.colorSpace)!==xt,(d!==S||h!==S.version||f!==r.toneMapping)&&(u.material.needsUpdate=!0,d=S,h=S.version,f=r.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Si(new zo(2,2),new Zi({name:"BackgroundMaterial",uniforms:Ms(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:$i,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=dt.getTransfer(S.colorSpace)!==xt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||h!==S.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,d=S,h=S.version,f=r.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,M){y.getRGB(Ga,bh(r)),n.buffers.color.setClear(Ga.r,Ga.g,Ga.b,M,a)}return{getClearColor:function(){return o},setClearColor:function(y,M=1){o.set(y),l=M,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,m(o,l)},render:_,addToRenderList:p}}function L0(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=h(null);let s=i,a=!1;function o(v,P,U,L,G){let W=!1;const Z=d(L,U,P);s!==Z&&(s=Z,c(s.object)),W=f(v,L,U,G),W&&g(v,L,U,G),G!==null&&e.update(G,r.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,S(v,P,U,L),G!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return r.createVertexArray()}function c(v){return r.bindVertexArray(v)}function u(v){return r.deleteVertexArray(v)}function d(v,P,U){const L=U.wireframe===!0;let G=n[v.id];G===void 0&&(G={},n[v.id]=G);let W=G[P.id];W===void 0&&(W={},G[P.id]=W);let Z=W[L];return Z===void 0&&(Z=h(l()),W[L]=Z),Z}function h(v){const P=[],U=[],L=[];for(let G=0;G<t;G++)P[G]=0,U[G]=0,L[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:U,attributeDivisors:L,object:v,attributes:{},index:null}}function f(v,P,U,L){const G=s.attributes,W=P.attributes;let Z=0;const $=U.getAttributes();for(const z in $)if($[z].location>=0){const w=G[z];let oe=W[z];if(oe===void 0&&(z==="instanceMatrix"&&v.instanceMatrix&&(oe=v.instanceMatrix),z==="instanceColor"&&v.instanceColor&&(oe=v.instanceColor)),w===void 0||w.attribute!==oe||oe&&w.data!==oe.data)return!0;Z++}return s.attributesNum!==Z||s.index!==L}function g(v,P,U,L){const G={},W=P.attributes;let Z=0;const $=U.getAttributes();for(const z in $)if($[z].location>=0){let w=W[z];w===void 0&&(z==="instanceMatrix"&&v.instanceMatrix&&(w=v.instanceMatrix),z==="instanceColor"&&v.instanceColor&&(w=v.instanceColor));const oe={};oe.attribute=w,w&&w.data&&(oe.data=w.data),G[z]=oe,Z++}s.attributes=G,s.attributesNum=Z,s.index=L}function _(){const v=s.newAttributes;for(let P=0,U=v.length;P<U;P++)v[P]=0}function p(v){m(v,0)}function m(v,P){const U=s.newAttributes,L=s.enabledAttributes,G=s.attributeDivisors;U[v]=1,L[v]===0&&(r.enableVertexAttribArray(v),L[v]=1),G[v]!==P&&(r.vertexAttribDivisor(v,P),G[v]=P)}function y(){const v=s.newAttributes,P=s.enabledAttributes;for(let U=0,L=P.length;U<L;U++)P[U]!==v[U]&&(r.disableVertexAttribArray(U),P[U]=0)}function M(v,P,U,L,G,W,Z){Z===!0?r.vertexAttribIPointer(v,P,U,G,W):r.vertexAttribPointer(v,P,U,L,G,W)}function S(v,P,U,L){_();const G=L.attributes,W=U.getAttributes(),Z=P.defaultAttributeValues;for(const $ in W){const z=W[$];if(z.location>=0){let J=G[$];if(J===void 0&&($==="instanceMatrix"&&v.instanceMatrix&&(J=v.instanceMatrix),$==="instanceColor"&&v.instanceColor&&(J=v.instanceColor)),J!==void 0){const w=J.normalized,oe=J.itemSize,Le=e.get(J);if(Le===void 0)continue;const Ke=Le.buffer,X=Le.type,te=Le.bytesPerElement,ue=X===r.INT||X===r.UNSIGNED_INT||J.gpuType===ch;if(J.isInterleavedBufferAttribute){const ne=J.data,De=ne.stride,Ce=J.offset;if(ne.isInstancedInterleavedBuffer){for(let F=0;F<z.locationSize;F++)m(z.location+F,ne.meshPerAttribute);v.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let F=0;F<z.locationSize;F++)p(z.location+F);r.bindBuffer(r.ARRAY_BUFFER,Ke);for(let F=0;F<z.locationSize;F++)M(z.location+F,oe/z.locationSize,X,w,De*te,(Ce+oe/z.locationSize*F)*te,ue)}else{if(J.isInstancedBufferAttribute){for(let ne=0;ne<z.locationSize;ne++)m(z.location+ne,J.meshPerAttribute);v.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ne=0;ne<z.locationSize;ne++)p(z.location+ne);r.bindBuffer(r.ARRAY_BUFFER,Ke);for(let ne=0;ne<z.locationSize;ne++)M(z.location+ne,oe/z.locationSize,X,w,oe*te,oe/z.locationSize*ne*te,ue)}}else if(Z!==void 0){const w=Z[$];if(w!==void 0)switch(w.length){case 2:r.vertexAttrib2fv(z.location,w);break;case 3:r.vertexAttrib3fv(z.location,w);break;case 4:r.vertexAttrib4fv(z.location,w);break;default:r.vertexAttrib1fv(z.location,w)}}}}y()}function R(){D();for(const v in n){const P=n[v];for(const U in P){const L=P[U];for(const G in L)u(L[G].object),delete L[G];delete P[U]}delete n[v]}}function A(v){if(n[v.id]===void 0)return;const P=n[v.id];for(const U in P){const L=P[U];for(const G in L)u(L[G].object),delete L[G];delete P[U]}delete n[v.id]}function b(v){for(const P in n){const U=n[P];if(U[v.id]===void 0)continue;const L=U[v.id];for(const G in L)u(L[G].object),delete L[G];delete U[v.id]}}function D(){x(),a=!0,s!==i&&(s=i,c(s.object))}function x(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:D,resetDefaultState:x,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:p,disableUnusedAttributes:y}}function D0(r,e,t){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,d){d!==0&&(r.drawArraysInstanced(n,c,u,d),t.update(u,n,d))}function o(c,u,d){if(d===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let f=0;f<d;f++)this.render(c[f],u[f]);else{h.multiDrawArraysWEBGL(n,c,0,u,0,d);let f=0;for(let g=0;g<d;g++)f+=u[g];t.update(f,n,1)}}function l(c,u,d,h){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],u[g],h[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_];for(let _=0;_<h.length;_++)t.update(g,n,h[_])}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function U0(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(A){return!(A!==si&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const b=A===Oo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Ki&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Fi&&!b)}function l(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),_=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),m=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),y=r.getParameter(r.MAX_VARYING_VECTORS),M=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),S=f>0,R=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,maxTextures:h,maxVertexTextures:f,maxTextureSize:g,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:m,maxVaryings:y,maxFragmentUniforms:M,vertexTextures:S,maxSamples:R}}function I0(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new hr,o=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||n!==0||i;return i=h,n=d.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){const g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,m=r.get(d);if(!i||g===null||g.length===0||s&&!p)s?u(null):c();else{const y=s?0:n,M=y*4;let S=m.clippingState||null;l.value=S,S=u(g,h,M,f);for(let R=0;R!==M;++R)S[R]=t[R];m.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,f,g){const _=d!==null?d.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const m=f+_*4,y=h.matrixWorldInverse;o.getNormalMatrix(y),(p===null||p.length<m)&&(p=new Float32Array(m));for(let M=0,S=f;M!==_;++M,S+=4)a.copy(d[M]).applyMatrix4(y,o),a.normal.toArray(p,S),p[S+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function N0(r){let e=new WeakMap;function t(a,o){return o===Wl?a.mapping=gs:o===Xl&&(a.mapping=vs),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Wl||o===Xl)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Ym(l.height);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class O0 extends Ah{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const rs=4,Zu=[.125,.215,.35,.446,.526,.582],vr=20,Ml=new O0,ju=new ft;let Sl=null,yl=0,El=0,Tl=!1;const dr=(1+Math.sqrt(5))/2,Jr=1/dr,Ju=[new Y(-dr,Jr,0),new Y(dr,Jr,0),new Y(-Jr,0,dr),new Y(Jr,0,dr),new Y(0,dr,-Jr),new Y(0,dr,Jr),new Y(-1,1,-1),new Y(1,1,-1),new Y(-1,1,1),new Y(1,1,1)];class Qu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Sl=this._renderer.getRenderTarget(),yl=this._renderer.getActiveCubeFace(),El=this._renderer.getActiveMipmapLevel(),Tl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Sl,yl,El),this._renderer.xr.enabled=Tl,e.scissorTest=!1,Wa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===gs||e.mapping===vs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sl=this._renderer.getRenderTarget(),yl=this._renderer.getActiveCubeFace(),El=this._renderer.getActiveMipmapLevel(),Tl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:jn,minFilter:jn,generateMipmaps:!1,type:Oo,format:si,colorSpace:tr,depthBuffer:!1},i=ef(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ef(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=F0(s)),this._blurMaterial=B0(s,e,t)}return i}_compileMaterial(e){const t=new Si(this._lodPlanes[0],e);this._renderer.compile(t,Ml)}_sceneToCubeUV(e,t,n,i){const o=new kn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(ju),u.toneMapping=Wi,u.autoClear=!1;const f=new yh({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1}),g=new Si(new Sa,f);let _=!1;const p=e.background;p?p.isColor&&(f.color.copy(p),e.background=null,_=!0):(f.color.copy(ju),_=!0);for(let m=0;m<6;m++){const y=m%3;y===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):y===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));const M=this._cubeSize;Wa(i,y*M,m>2?M:0,M,M),u.setRenderTarget(i),_&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===gs||e.mapping===vs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=nf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tf());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new Si(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Wa(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Ml)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Ju[(i-s-1)%Ju.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Si(this._lodPlanes[i],c),h=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*vr-1),_=s/g,p=isFinite(s)?1+Math.floor(u*_):vr;p>vr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${vr}`);const m=[];let y=0;for(let b=0;b<vr;++b){const D=b/_,x=Math.exp(-D*D/2);m.push(x),b===0?y+=x:b<p&&(y+=2*x)}for(let b=0;b<m.length;b++)m[b]=m[b]/y;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=m,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:M}=this;h.dTheta.value=g,h.mipInt.value=M-n;const S=this._sizeLods[i],R=3*S*(i>M-rs?i-M+rs:0),A=4*(this._cubeSize-S);Wa(t,R,A,3*S,2*S),l.setRenderTarget(t),l.render(d,Ml)}}function F0(r){const e=[],t=[],n=[];let i=r;const s=r-rs+1+Zu.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>r-rs?l=Zu[a-r+rs-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,g=6,_=3,p=2,m=1,y=new Float32Array(_*g*f),M=new Float32Array(p*g*f),S=new Float32Array(m*g*f);for(let A=0;A<f;A++){const b=A%3*2/3-1,D=A>2?0:-1,x=[b,D,0,b+2/3,D,0,b+2/3,D+1,0,b,D,0,b+2/3,D+1,0,b,D+1,0];y.set(x,_*g*A),M.set(h,p*g*A);const v=[A,A,A,A,A,A];S.set(v,m*g*A)}const R=new wi;R.setAttribute("position",new Un(y,_)),R.setAttribute("uv",new Un(M,p)),R.setAttribute("faceIndex",new Un(S,m)),e.push(R),i>rs&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ef(r,e,t){const n=new Lr(r,e,t);return n.texture.mapping=No,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Wa(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function B0(r,e,t){const n=new Float32Array(vr),i=new Y(0,1,0);return new Zi({name:"SphericalGaussianBlur",defines:{n:vr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function tf(){return new Zi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function nf(){return new Zi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Ec(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function z0(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Wl||l===Xl,u=l===gs||l===vs;if(c||u){let d=e.get(o);const h=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new Qu(r)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const f=o.image;return c&&f&&f.height>0||u&&f&&i(f)?(t===null&&(t=new Qu(r)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function k0(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function H0(r,e,t,n){const i={},s=new WeakMap;function a(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const _=h.morphAttributes[g];for(let p=0,m=_.length;p<m;p++)e.remove(_[p])}h.removeEventListener("dispose",a),delete i[h.id];const f=s.get(h);f&&(e.remove(f),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return i[h.id]===!0||(h.addEventListener("dispose",a),i[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const g in h)e.update(h[g],r.ARRAY_BUFFER);const f=d.morphAttributes;for(const g in f){const _=f[g];for(let p=0,m=_.length;p<m;p++)e.update(_[p],r.ARRAY_BUFFER)}}function c(d){const h=[],f=d.index,g=d.attributes.position;let _=0;if(f!==null){const y=f.array;_=f.version;for(let M=0,S=y.length;M<S;M+=3){const R=y[M+0],A=y[M+1],b=y[M+2];h.push(R,A,A,b,b,R)}}else if(g!==void 0){const y=g.array;_=g.version;for(let M=0,S=y.length/3-1;M<S;M+=3){const R=M+0,A=M+1,b=M+2;h.push(R,A,A,b,b,R)}}else return;const p=new(_h(h)?Th:Eh)(h,1);p.version=_;const m=s.get(d);m&&e.remove(m),s.set(d,p)}function u(d){const h=s.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function V0(r,e,t){let n;function i(h){n=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,f){r.drawElements(n,f,s,h*a),t.update(f,n,1)}function c(h,f,g){g!==0&&(r.drawElementsInstanced(n,f,s,h*a,g),t.update(f,n,g))}function u(h,f,g){if(g===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let p=0;p<g;p++)this.render(h[p]/a,f[p]);else{_.multiDrawElementsWEBGL(n,f,0,s,h,0,g);let p=0;for(let m=0;m<g;m++)p+=f[m];t.update(p,n,1)}}function d(h,f,g,_){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<h.length;m++)c(h[m]/a,f[m],_[m]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,s,h,0,_,0,g);let m=0;for(let y=0;y<g;y++)m+=f[y];for(let y=0;y<_.length;y++)t.update(m,n,_[y])}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function G0(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function W0(r,e,t){const n=new WeakMap,i=new Wt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==d){let v=function(){D.dispose(),n.delete(o),o.removeEventListener("dispose",v)};var f=v;h!==void 0&&h.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let S=0;g===!0&&(S=1),_===!0&&(S=2),p===!0&&(S=3);let R=o.attributes.position.count*S,A=1;R>e.maxTextureSize&&(A=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const b=new Float32Array(R*A*4*d),D=new vh(b,R,A,d);D.type=Fi,D.needsUpdate=!0;const x=S*4;for(let P=0;P<d;P++){const U=m[P],L=y[P],G=M[P],W=R*A*4*P;for(let Z=0;Z<U.count;Z++){const $=Z*x;g===!0&&(i.fromBufferAttribute(U,Z),b[W+$+0]=i.x,b[W+$+1]=i.y,b[W+$+2]=i.z,b[W+$+3]=0),_===!0&&(i.fromBufferAttribute(L,Z),b[W+$+4]=i.x,b[W+$+5]=i.y,b[W+$+6]=i.z,b[W+$+7]=0),p===!0&&(i.fromBufferAttribute(G,Z),b[W+$+8]=i.x,b[W+$+9]=i.y,b[W+$+10]=i.z,b[W+$+11]=G.itemSize===4?i.w:1)}}h={count:d,texture:D,size:new ct(R,A)},n.set(o,h),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",h.size)}return{update:s}}function X0(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,d=e.get(l,u);if(i.get(d)!==c&&(e.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;i.get(h)!==c&&(h.update(),i.set(h,c))}return d}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class Ph extends _n{constructor(e,t,n,i,s,a,o,l,c,u){if(u=u!==void 0?u:cs,u!==cs&&u!==aa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===cs&&(n=xs),n===void 0&&u===aa&&(n=_a),super(null,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Gn,this.minFilter=l!==void 0?l:Gn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Lh=new _n,Dh=new Ph(1,1);Dh.compareFunction=mh;const Uh=new vh,Ih=new Pm,Nh=new wh,rf=[],sf=[],af=new Float32Array(16),of=new Float32Array(9),lf=new Float32Array(4);function Cs(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=rf[i];if(s===void 0&&(s=new Float32Array(i),rf[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Ft(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Bt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function ko(r,e){let t=sf[e];t===void 0&&(t=new Int32Array(e),sf[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Y0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function q0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;r.uniform2fv(this.addr,e),Bt(t,e)}}function $0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ft(t,e))return;r.uniform3fv(this.addr,e),Bt(t,e)}}function K0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;r.uniform4fv(this.addr,e),Bt(t,e)}}function Z0(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Bt(t,e)}else{if(Ft(t,n))return;lf.set(n),r.uniformMatrix2fv(this.addr,!1,lf),Bt(t,n)}}function j0(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Bt(t,e)}else{if(Ft(t,n))return;of.set(n),r.uniformMatrix3fv(this.addr,!1,of),Bt(t,n)}}function J0(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Bt(t,e)}else{if(Ft(t,n))return;af.set(n),r.uniformMatrix4fv(this.addr,!1,af),Bt(t,n)}}function Q0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function ev(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;r.uniform2iv(this.addr,e),Bt(t,e)}}function tv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;r.uniform3iv(this.addr,e),Bt(t,e)}}function nv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;r.uniform4iv(this.addr,e),Bt(t,e)}}function iv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function rv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;r.uniform2uiv(this.addr,e),Bt(t,e)}}function sv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;r.uniform3uiv(this.addr,e),Bt(t,e)}}function av(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;r.uniform4uiv(this.addr,e),Bt(t,e)}}function ov(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const s=this.type===r.SAMPLER_2D_SHADOW?Dh:Lh;t.setTexture2D(e||s,i)}function lv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Ih,i)}function cv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Nh,i)}function uv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Uh,i)}function fv(r){switch(r){case 5126:return Y0;case 35664:return q0;case 35665:return $0;case 35666:return K0;case 35674:return Z0;case 35675:return j0;case 35676:return J0;case 5124:case 35670:return Q0;case 35667:case 35671:return ev;case 35668:case 35672:return tv;case 35669:case 35673:return nv;case 5125:return iv;case 36294:return rv;case 36295:return sv;case 36296:return av;case 35678:case 36198:case 36298:case 36306:case 35682:return ov;case 35679:case 36299:case 36307:return lv;case 35680:case 36300:case 36308:case 36293:return cv;case 36289:case 36303:case 36311:case 36292:return uv}}function hv(r,e){r.uniform1fv(this.addr,e)}function dv(r,e){const t=Cs(e,this.size,2);r.uniform2fv(this.addr,t)}function pv(r,e){const t=Cs(e,this.size,3);r.uniform3fv(this.addr,t)}function mv(r,e){const t=Cs(e,this.size,4);r.uniform4fv(this.addr,t)}function _v(r,e){const t=Cs(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function gv(r,e){const t=Cs(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function vv(r,e){const t=Cs(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function xv(r,e){r.uniform1iv(this.addr,e)}function Mv(r,e){r.uniform2iv(this.addr,e)}function Sv(r,e){r.uniform3iv(this.addr,e)}function yv(r,e){r.uniform4iv(this.addr,e)}function Ev(r,e){r.uniform1uiv(this.addr,e)}function Tv(r,e){r.uniform2uiv(this.addr,e)}function bv(r,e){r.uniform3uiv(this.addr,e)}function Av(r,e){r.uniform4uiv(this.addr,e)}function wv(r,e,t){const n=this.cache,i=e.length,s=ko(t,i);Ft(n,s)||(r.uniform1iv(this.addr,s),Bt(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Lh,s[a])}function Rv(r,e,t){const n=this.cache,i=e.length,s=ko(t,i);Ft(n,s)||(r.uniform1iv(this.addr,s),Bt(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Ih,s[a])}function Cv(r,e,t){const n=this.cache,i=e.length,s=ko(t,i);Ft(n,s)||(r.uniform1iv(this.addr,s),Bt(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Nh,s[a])}function Pv(r,e,t){const n=this.cache,i=e.length,s=ko(t,i);Ft(n,s)||(r.uniform1iv(this.addr,s),Bt(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Uh,s[a])}function Lv(r){switch(r){case 5126:return hv;case 35664:return dv;case 35665:return pv;case 35666:return mv;case 35674:return _v;case 35675:return gv;case 35676:return vv;case 5124:case 35670:return xv;case 35667:case 35671:return Mv;case 35668:case 35672:return Sv;case 35669:case 35673:return yv;case 5125:return Ev;case 36294:return Tv;case 36295:return bv;case 36296:return Av;case 35678:case 36198:case 36298:case 36306:case 35682:return wv;case 35679:case 36299:case 36307:return Rv;case 35680:case 36300:case 36308:case 36293:return Cv;case 36289:case 36303:case 36311:case 36292:return Pv}}class Dv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=fv(t.type)}}class Uv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Lv(t.type)}}class Iv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const bl=/(\w+)(\])?(\[|\.)?/g;function cf(r,e){r.seq.push(e),r.map[e.id]=e}function Nv(r,e,t){const n=r.name,i=n.length;for(bl.lastIndex=0;;){const s=bl.exec(n),a=bl.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){cf(t,c===void 0?new Dv(o,r,e):new Uv(o,r,e));break}else{let d=t.map[o];d===void 0&&(d=new Iv(o),cf(t,d)),t=d}}}class oo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);Nv(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function uf(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const Ov=37297;let Fv=0;function Bv(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function zv(r){const e=dt.getPrimaries(dt.workingColorSpace),t=dt.getPrimaries(r);let n;switch(e===t?n="":e===So&&t===Mo?n="LinearDisplayP3ToLinearSRGB":e===Mo&&t===So&&(n="LinearSRGBToLinearDisplayP3"),r){case tr:case Fo:return[n,"LinearTransferOETF"];case Qn:case yc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function ff(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Bv(r.getShaderSource(e),a)}else return i}function kv(r,e){const t=zv(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Hv(r,e){let t;switch(e){case qp:t="Linear";break;case $p:t="Reinhard";break;case Kp:t="OptimizedCineon";break;case Zp:t="ACESFilmic";break;case Jp:t="AgX";break;case Qp:t="Neutral";break;case jp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Vv(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zs).join(`
`)}function Gv(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Wv(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function zs(r){return r!==""}function hf(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function df(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Xv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kl(r){return r.replace(Xv,qv)}const Yv=new Map;function qv(r,e){let t=Xe[e];if(t===void 0){const n=Yv.get(e);if(n!==void 0)t=Xe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Kl(t)}const $v=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pf(r){return r.replace($v,Kv)}function Kv(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function mf(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Zv(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===sh?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===xp?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===mi&&(e="SHADOWMAP_TYPE_VSM"),e}function jv(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case gs:case vs:e="ENVMAP_TYPE_CUBE";break;case No:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Jv(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case vs:e="ENVMAP_MODE_REFRACTION";break}return e}function Qv(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case ah:e="ENVMAP_BLENDING_MULTIPLY";break;case Xp:e="ENVMAP_BLENDING_MIX";break;case Yp:e="ENVMAP_BLENDING_ADD";break}return e}function ex(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function tx(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Zv(t),c=jv(t),u=Jv(t),d=Qv(t),h=ex(t),f=Vv(t),g=Gv(s),_=i.createProgram();let p,m,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(zs).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(zs).join(`
`),m.length>0&&(m+=`
`)):(p=[mf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zs).join(`
`),m=[mf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wi?"#define TONE_MAPPING":"",t.toneMapping!==Wi?Xe.tonemapping_pars_fragment:"",t.toneMapping!==Wi?Hv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,kv("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(zs).join(`
`)),a=Kl(a),a=hf(a,t),a=df(a,t),o=Kl(o),o=hf(o,t),o=df(o,t),a=pf(a),o=pf(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===Pu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Pu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const M=y+p+a,S=y+m+o,R=uf(i,i.VERTEX_SHADER,M),A=uf(i,i.FRAGMENT_SHADER,S);i.attachShader(_,R),i.attachShader(_,A),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function b(P){if(r.debug.checkShaderErrors){const U=i.getProgramInfoLog(_).trim(),L=i.getShaderInfoLog(R).trim(),G=i.getShaderInfoLog(A).trim();let W=!0,Z=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(W=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,R,A);else{const $=ff(i,R,"vertex"),z=ff(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+U+`
`+$+`
`+z)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(L===""||G==="")&&(Z=!1);Z&&(P.diagnostics={runnable:W,programLog:U,vertexShader:{log:L,prefix:p},fragmentShader:{log:G,prefix:m}})}i.deleteShader(R),i.deleteShader(A),D=new oo(i,_),x=Wv(i,_)}let D;this.getUniforms=function(){return D===void 0&&b(this),D};let x;this.getAttributes=function(){return x===void 0&&b(this),x};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(_,Ov)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Fv++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=A,this}let nx=0;class ix{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new rx(e),t.set(e,n)),n}}class rx{constructor(e){this.id=nx++,this.code=e,this.usedTimes=0}}function sx(r,e,t,n,i,s,a){const o=new Mh,l=new ix,c=new Set,u=[],d=i.logarithmicDepthBuffer,h=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return c.add(x),x===0?"uv":`uv${x}`}function p(x,v,P,U,L){const G=U.fog,W=L.geometry,Z=x.isMeshStandardMaterial?U.environment:null,$=(x.isMeshStandardMaterial?t:e).get(x.envMap||Z),z=$&&$.mapping===No?$.image.height:null,J=g[x.type];x.precision!==null&&(f=i.getMaxPrecision(x.precision),f!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));const w=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,oe=w!==void 0?w.length:0;let Le=0;W.morphAttributes.position!==void 0&&(Le=1),W.morphAttributes.normal!==void 0&&(Le=2),W.morphAttributes.color!==void 0&&(Le=3);let Ke,X,te,ue;if(J){const tt=ni[J];Ke=tt.vertexShader,X=tt.fragmentShader}else Ke=x.vertexShader,X=x.fragmentShader,l.update(x),te=l.getVertexShaderID(x),ue=l.getFragmentShaderID(x);const ne=r.getRenderTarget(),De=L.isInstancedMesh===!0,Ce=L.isBatchedMesh===!0,F=!!x.map,Ge=!!x.matcap,Se=!!$,Ee=!!x.aoMap,ge=!!x.lightMap,Ie=!!x.bumpMap,Pe=!!x.normalMap,O=!!x.displacementMap,et=!!x.emissiveMap,C=!!x.metalnessMap,E=!!x.roughnessMap,V=x.anisotropy>0,j=x.clearcoat>0,Q=x.dispersion>0,ee=x.iridescence>0,me=x.sheen>0,le=x.transmission>0,ie=V&&!!x.anisotropyMap,Ue=j&&!!x.clearcoatMap,re=j&&!!x.clearcoatNormalMap,ye=j&&!!x.clearcoatRoughnessMap,qe=ee&&!!x.iridescenceMap,_e=ee&&!!x.iridescenceThicknessMap,ve=me&&!!x.sheenColorMap,Ne=me&&!!x.sheenRoughnessMap,Ve=!!x.specularMap,ht=!!x.specularColorMap,Oe=!!x.specularIntensityMap,I=le&&!!x.transmissionMap,q=le&&!!x.thicknessMap,K=!!x.gradientMap,ae=!!x.alphaMap,ce=x.alphaTest>0,He=!!x.alphaHash,rt=!!x.extensions;let ut=Wi;x.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(ut=r.toneMapping);const _t={shaderID:J,shaderType:x.type,shaderName:x.name,vertexShader:Ke,fragmentShader:X,defines:x.defines,customVertexShaderID:te,customFragmentShaderID:ue,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:Ce,instancing:De,instancingColor:De&&L.instanceColor!==null,instancingMorph:De&&L.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ne===null?r.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:tr,alphaToCoverage:!!x.alphaToCoverage,map:F,matcap:Ge,envMap:Se,envMapMode:Se&&$.mapping,envMapCubeUVHeight:z,aoMap:Ee,lightMap:ge,bumpMap:Ie,normalMap:Pe,displacementMap:h&&O,emissiveMap:et,normalMapObjectSpace:Pe&&x.normalMapType===pm,normalMapTangentSpace:Pe&&x.normalMapType===dm,metalnessMap:C,roughnessMap:E,anisotropy:V,anisotropyMap:ie,clearcoat:j,clearcoatMap:Ue,clearcoatNormalMap:re,clearcoatRoughnessMap:ye,dispersion:Q,iridescence:ee,iridescenceMap:qe,iridescenceThicknessMap:_e,sheen:me,sheenColorMap:ve,sheenRoughnessMap:Ne,specularMap:Ve,specularColorMap:ht,specularIntensityMap:Oe,transmission:le,transmissionMap:I,thicknessMap:q,gradientMap:K,opaque:x.transparent===!1&&x.blending===ls&&x.alphaToCoverage===!1,alphaMap:ae,alphaTest:ce,alphaHash:He,combine:x.combine,mapUv:F&&_(x.map.channel),aoMapUv:Ee&&_(x.aoMap.channel),lightMapUv:ge&&_(x.lightMap.channel),bumpMapUv:Ie&&_(x.bumpMap.channel),normalMapUv:Pe&&_(x.normalMap.channel),displacementMapUv:O&&_(x.displacementMap.channel),emissiveMapUv:et&&_(x.emissiveMap.channel),metalnessMapUv:C&&_(x.metalnessMap.channel),roughnessMapUv:E&&_(x.roughnessMap.channel),anisotropyMapUv:ie&&_(x.anisotropyMap.channel),clearcoatMapUv:Ue&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:re&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:qe&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&_(x.sheenRoughnessMap.channel),specularMapUv:Ve&&_(x.specularMap.channel),specularColorMapUv:ht&&_(x.specularColorMap.channel),specularIntensityMapUv:Oe&&_(x.specularIntensityMap.channel),transmissionMapUv:I&&_(x.transmissionMap.channel),thicknessMapUv:q&&_(x.thicknessMap.channel),alphaMapUv:ae&&_(x.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Pe||V),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!W.attributes.uv&&(F||ae),fog:!!G,useFog:x.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:L.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:Le,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:ut,useLegacyLights:r._useLegacyLights,decodeVideoTexture:F&&x.map.isVideoTexture===!0&&dt.getTransfer(x.map.colorSpace)===xt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===vi,flipSided:x.side===mn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:rt&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:rt&&x.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return _t.vertexUv1s=c.has(1),_t.vertexUv2s=c.has(2),_t.vertexUv3s=c.has(3),c.clear(),_t}function m(x){const v=[];if(x.shaderID?v.push(x.shaderID):(v.push(x.customVertexShaderID),v.push(x.customFragmentShaderID)),x.defines!==void 0)for(const P in x.defines)v.push(P),v.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(y(v,x),M(v,x),v.push(r.outputColorSpace)),v.push(x.customProgramCacheKey),v.join()}function y(x,v){x.push(v.precision),x.push(v.outputColorSpace),x.push(v.envMapMode),x.push(v.envMapCubeUVHeight),x.push(v.mapUv),x.push(v.alphaMapUv),x.push(v.lightMapUv),x.push(v.aoMapUv),x.push(v.bumpMapUv),x.push(v.normalMapUv),x.push(v.displacementMapUv),x.push(v.emissiveMapUv),x.push(v.metalnessMapUv),x.push(v.roughnessMapUv),x.push(v.anisotropyMapUv),x.push(v.clearcoatMapUv),x.push(v.clearcoatNormalMapUv),x.push(v.clearcoatRoughnessMapUv),x.push(v.iridescenceMapUv),x.push(v.iridescenceThicknessMapUv),x.push(v.sheenColorMapUv),x.push(v.sheenRoughnessMapUv),x.push(v.specularMapUv),x.push(v.specularColorMapUv),x.push(v.specularIntensityMapUv),x.push(v.transmissionMapUv),x.push(v.thicknessMapUv),x.push(v.combine),x.push(v.fogExp2),x.push(v.sizeAttenuation),x.push(v.morphTargetsCount),x.push(v.morphAttributeCount),x.push(v.numDirLights),x.push(v.numPointLights),x.push(v.numSpotLights),x.push(v.numSpotLightMaps),x.push(v.numHemiLights),x.push(v.numRectAreaLights),x.push(v.numDirLightShadows),x.push(v.numPointLightShadows),x.push(v.numSpotLightShadows),x.push(v.numSpotLightShadowsWithMaps),x.push(v.numLightProbes),x.push(v.shadowMapType),x.push(v.toneMapping),x.push(v.numClippingPlanes),x.push(v.numClipIntersection),x.push(v.depthPacking)}function M(x,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),x.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.skinning&&o.enable(4),v.morphTargets&&o.enable(5),v.morphNormals&&o.enable(6),v.morphColors&&o.enable(7),v.premultipliedAlpha&&o.enable(8),v.shadowMapEnabled&&o.enable(9),v.useLegacyLights&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.alphaToCoverage&&o.enable(20),x.push(o.mask)}function S(x){const v=g[x.type];let P;if(v){const U=ni[v];P=Vm.clone(U.uniforms)}else P=x.uniforms;return P}function R(x,v){let P;for(let U=0,L=u.length;U<L;U++){const G=u[U];if(G.cacheKey===v){P=G,++P.usedTimes;break}}return P===void 0&&(P=new tx(r,v,x,s),u.push(P)),P}function A(x){if(--x.usedTimes===0){const v=u.indexOf(x);u[v]=u[u.length-1],u.pop(),x.destroy()}}function b(x){l.remove(x)}function D(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:S,acquireProgram:R,releaseProgram:A,releaseShaderCache:b,programs:u,dispose:D}}function ax(){let r=new WeakMap;function e(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function t(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function ox(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function _f(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function gf(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(d,h,f,g,_,p){let m=r[e];return m===void 0?(m={id:d.id,object:d,geometry:h,material:f,groupOrder:g,renderOrder:d.renderOrder,z:_,group:p},r[e]=m):(m.id=d.id,m.object=d,m.geometry=h,m.material=f,m.groupOrder=g,m.renderOrder=d.renderOrder,m.z=_,m.group=p),e++,m}function o(d,h,f,g,_,p){const m=a(d,h,f,g,_,p);f.transmission>0?n.push(m):f.transparent===!0?i.push(m):t.push(m)}function l(d,h,f,g,_,p){const m=a(d,h,f,g,_,p);f.transmission>0?n.unshift(m):f.transparent===!0?i.unshift(m):t.unshift(m)}function c(d,h){t.length>1&&t.sort(d||ox),n.length>1&&n.sort(h||_f),i.length>1&&i.sort(h||_f)}function u(){for(let d=e,h=r.length;d<h;d++){const f=r[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:u,sort:c}}function lx(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new gf,r.set(n,[a])):i>=s.length?(a=new gf,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function cx(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Y,color:new ft};break;case"SpotLight":t={position:new Y,direction:new Y,color:new ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new ft,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new ft,groundColor:new ft};break;case"RectAreaLight":t={color:new ft,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return r[e.id]=t,t}}}function ux(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let fx=0;function hx(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function dx(r){const e=new cx,t=ux(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new Y);const i=new Y,s=new It,a=new It;function o(c,u){let d=0,h=0,f=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let g=0,_=0,p=0,m=0,y=0,M=0,S=0,R=0,A=0,b=0,D=0;c.sort(hx);const x=u===!0?Math.PI:1;for(let P=0,U=c.length;P<U;P++){const L=c[P],G=L.color,W=L.intensity,Z=L.distance,$=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=G.r*W*x,h+=G.g*W*x,f+=G.b*W*x;else if(L.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(L.sh.coefficients[z],W);D++}else if(L.isDirectionalLight){const z=e.get(L);if(z.color.copy(L.color).multiplyScalar(L.intensity*x),L.castShadow){const J=L.shadow,w=t.get(L);w.shadowBias=J.bias,w.shadowNormalBias=J.normalBias,w.shadowRadius=J.radius,w.shadowMapSize=J.mapSize,n.directionalShadow[g]=w,n.directionalShadowMap[g]=$,n.directionalShadowMatrix[g]=L.shadow.matrix,M++}n.directional[g]=z,g++}else if(L.isSpotLight){const z=e.get(L);z.position.setFromMatrixPosition(L.matrixWorld),z.color.copy(G).multiplyScalar(W*x),z.distance=Z,z.coneCos=Math.cos(L.angle),z.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),z.decay=L.decay,n.spot[p]=z;const J=L.shadow;if(L.map&&(n.spotLightMap[A]=L.map,A++,J.updateMatrices(L),L.castShadow&&b++),n.spotLightMatrix[p]=J.matrix,L.castShadow){const w=t.get(L);w.shadowBias=J.bias,w.shadowNormalBias=J.normalBias,w.shadowRadius=J.radius,w.shadowMapSize=J.mapSize,n.spotShadow[p]=w,n.spotShadowMap[p]=$,R++}p++}else if(L.isRectAreaLight){const z=e.get(L);z.color.copy(G).multiplyScalar(W),z.halfWidth.set(L.width*.5,0,0),z.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=z,m++}else if(L.isPointLight){const z=e.get(L);if(z.color.copy(L.color).multiplyScalar(L.intensity*x),z.distance=L.distance,z.decay=L.decay,L.castShadow){const J=L.shadow,w=t.get(L);w.shadowBias=J.bias,w.shadowNormalBias=J.normalBias,w.shadowRadius=J.radius,w.shadowMapSize=J.mapSize,w.shadowCameraNear=J.camera.near,w.shadowCameraFar=J.camera.far,n.pointShadow[_]=w,n.pointShadowMap[_]=$,n.pointShadowMatrix[_]=L.shadow.matrix,S++}n.point[_]=z,_++}else if(L.isHemisphereLight){const z=e.get(L);z.skyColor.copy(L.color).multiplyScalar(W*x),z.groundColor.copy(L.groundColor).multiplyScalar(W*x),n.hemi[y]=z,y++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=de.LTC_FLOAT_1,n.rectAreaLTC2=de.LTC_FLOAT_2):(n.rectAreaLTC1=de.LTC_HALF_1,n.rectAreaLTC2=de.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=h,n.ambient[2]=f;const v=n.hash;(v.directionalLength!==g||v.pointLength!==_||v.spotLength!==p||v.rectAreaLength!==m||v.hemiLength!==y||v.numDirectionalShadows!==M||v.numPointShadows!==S||v.numSpotShadows!==R||v.numSpotMaps!==A||v.numLightProbes!==D)&&(n.directional.length=g,n.spot.length=p,n.rectArea.length=m,n.point.length=_,n.hemi.length=y,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=R,n.spotShadowMap.length=R,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=R+A-b,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=D,v.directionalLength=g,v.pointLength=_,v.spotLength=p,v.rectAreaLength=m,v.hemiLength=y,v.numDirectionalShadows=M,v.numPointShadows=S,v.numSpotShadows=R,v.numSpotMaps=A,v.numLightProbes=D,n.version=fx++)}function l(c,u){let d=0,h=0,f=0,g=0,_=0;const p=u.matrixWorldInverse;for(let m=0,y=c.length;m<y;m++){const M=c[m];if(M.isDirectionalLight){const S=n.directional[d];S.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(p),d++}else if(M.isSpotLight){const S=n.spot[f];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(p),f++}else if(M.isRectAreaLight){const S=n.rectArea[g];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(p),a.identity(),s.copy(M.matrixWorld),s.premultiply(p),a.extractRotation(s),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){const S=n.point[h];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(p),h++}else if(M.isHemisphereLight){const S=n.hemi[_];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(p),_++}}}return{setup:o,setupView:l,state:n}}function vf(r){const e=new dx(r),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function a(u){n.push(u)}function o(u){e.setup(t,u)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function px(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new vf(r),e.set(i,[o])):s>=a.length?(o=new vf(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class mx extends Ma{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class _x extends Ma{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const gx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function xx(r,e,t){let n=new Rh;const i=new ct,s=new ct,a=new Wt,o=new mx({depthPacking:hm}),l=new _x,c={},u=t.maxTextureSize,d={[$i]:mn,[mn]:$i,[vi]:vi},h=new Zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:gx,fragmentShader:vx}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const g=new wi;g.setAttribute("position",new Un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Si(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sh;let m=this.type;this.render=function(A,b,D){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const x=r.getRenderTarget(),v=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),U=r.state;U.setBlending(Gi),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const L=m!==mi&&this.type===mi,G=m===mi&&this.type!==mi;for(let W=0,Z=A.length;W<Z;W++){const $=A[W],z=$.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const J=z.getFrameExtents();if(i.multiply(J),s.copy(z.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/J.x),i.x=s.x*J.x,z.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/J.y),i.y=s.y*J.y,z.mapSize.y=s.y)),z.map===null||L===!0||G===!0){const oe=this.type!==mi?{minFilter:Gn,magFilter:Gn}:{};z.map!==null&&z.map.dispose(),z.map=new Lr(i.x,i.y,oe),z.map.texture.name=$.name+".shadowMap",z.camera.updateProjectionMatrix()}r.setRenderTarget(z.map),r.clear();const w=z.getViewportCount();for(let oe=0;oe<w;oe++){const Le=z.getViewport(oe);a.set(s.x*Le.x,s.y*Le.y,s.x*Le.z,s.y*Le.w),U.viewport(a),z.updateMatrices($,oe),n=z.getFrustum(),S(b,D,z.camera,$,this.type)}z.isPointLightShadow!==!0&&this.type===mi&&y(z,D),z.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(x,v,P)};function y(A,b){const D=e.update(_);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Lr(i.x,i.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(b,null,D,h,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(b,null,D,f,_,null)}function M(A,b,D,x){let v=null;const P=D.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)v=P;else if(v=D.isPointLight===!0?l:o,r.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const U=v.uuid,L=b.uuid;let G=c[U];G===void 0&&(G={},c[U]=G);let W=G[L];W===void 0&&(W=v.clone(),G[L]=W,b.addEventListener("dispose",R)),v=W}if(v.visible=b.visible,v.wireframe=b.wireframe,x===mi?v.side=b.shadowSide!==null?b.shadowSide:b.side:v.side=b.shadowSide!==null?b.shadowSide:d[b.side],v.alphaMap=b.alphaMap,v.alphaTest=b.alphaTest,v.map=b.map,v.clipShadows=b.clipShadows,v.clippingPlanes=b.clippingPlanes,v.clipIntersection=b.clipIntersection,v.displacementMap=b.displacementMap,v.displacementScale=b.displacementScale,v.displacementBias=b.displacementBias,v.wireframeLinewidth=b.wireframeLinewidth,v.linewidth=b.linewidth,D.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const U=r.properties.get(v);U.light=D}return v}function S(A,b,D,x,v){if(A.visible===!1)return;if(A.layers.test(b.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&v===mi)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,A.matrixWorld);const L=e.update(A),G=A.material;if(Array.isArray(G)){const W=L.groups;for(let Z=0,$=W.length;Z<$;Z++){const z=W[Z],J=G[z.materialIndex];if(J&&J.visible){const w=M(A,J,x,v);A.onBeforeShadow(r,A,b,D,L,w,z),r.renderBufferDirect(D,null,L,w,A,z),A.onAfterShadow(r,A,b,D,L,w,z)}}}else if(G.visible){const W=M(A,G,x,v);A.onBeforeShadow(r,A,b,D,L,W,null),r.renderBufferDirect(D,null,L,W,A,null),A.onAfterShadow(r,A,b,D,L,W,null)}}const U=A.children;for(let L=0,G=U.length;L<G;L++)S(U[L],b,D,x,v)}function R(A){A.target.removeEventListener("dispose",R);for(const D in c){const x=c[D],v=A.target.uuid;v in x&&(x[v].dispose(),delete x[v])}}}function Mx(r){function e(){let I=!1;const q=new Wt;let K=null;const ae=new Wt(0,0,0,0);return{setMask:function(ce){K!==ce&&!I&&(r.colorMask(ce,ce,ce,ce),K=ce)},setLocked:function(ce){I=ce},setClear:function(ce,He,rt,ut,_t){_t===!0&&(ce*=ut,He*=ut,rt*=ut),q.set(ce,He,rt,ut),ae.equals(q)===!1&&(r.clearColor(ce,He,rt,ut),ae.copy(q))},reset:function(){I=!1,K=null,ae.set(-1,0,0,0)}}}function t(){let I=!1,q=null,K=null,ae=null;return{setTest:function(ce){ce?ue(r.DEPTH_TEST):ne(r.DEPTH_TEST)},setMask:function(ce){q!==ce&&!I&&(r.depthMask(ce),q=ce)},setFunc:function(ce){if(K!==ce){switch(ce){case Bp:r.depthFunc(r.NEVER);break;case zp:r.depthFunc(r.ALWAYS);break;case kp:r.depthFunc(r.LESS);break;case vo:r.depthFunc(r.LEQUAL);break;case Hp:r.depthFunc(r.EQUAL);break;case Vp:r.depthFunc(r.GEQUAL);break;case Gp:r.depthFunc(r.GREATER);break;case Wp:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}K=ce}},setLocked:function(ce){I=ce},setClear:function(ce){ae!==ce&&(r.clearDepth(ce),ae=ce)},reset:function(){I=!1,q=null,K=null,ae=null}}}function n(){let I=!1,q=null,K=null,ae=null,ce=null,He=null,rt=null,ut=null,_t=null;return{setTest:function(tt){I||(tt?ue(r.STENCIL_TEST):ne(r.STENCIL_TEST))},setMask:function(tt){q!==tt&&!I&&(r.stencilMask(tt),q=tt)},setFunc:function(tt,Re,xe){(K!==tt||ae!==Re||ce!==xe)&&(r.stencilFunc(tt,Re,xe),K=tt,ae=Re,ce=xe)},setOp:function(tt,Re,xe){(He!==tt||rt!==Re||ut!==xe)&&(r.stencilOp(tt,Re,xe),He=tt,rt=Re,ut=xe)},setLocked:function(tt){I=tt},setClear:function(tt){_t!==tt&&(r.clearStencil(tt),_t=tt)},reset:function(){I=!1,q=null,K=null,ae=null,ce=null,He=null,rt=null,ut=null,_t=null}}}const i=new e,s=new t,a=new n,o=new WeakMap,l=new WeakMap;let c={},u={},d=new WeakMap,h=[],f=null,g=!1,_=null,p=null,m=null,y=null,M=null,S=null,R=null,A=new ft(0,0,0),b=0,D=!1,x=null,v=null,P=null,U=null,L=null;const G=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,Z=0;const $=r.getParameter(r.VERSION);$.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec($)[1]),W=Z>=1):$.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),W=Z>=2);let z=null,J={};const w=r.getParameter(r.SCISSOR_BOX),oe=r.getParameter(r.VIEWPORT),Le=new Wt().fromArray(w),Ke=new Wt().fromArray(oe);function X(I,q,K,ae){const ce=new Uint8Array(4),He=r.createTexture();r.bindTexture(I,He),r.texParameteri(I,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(I,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let rt=0;rt<K;rt++)I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY?r.texImage3D(q,0,r.RGBA,1,1,ae,0,r.RGBA,r.UNSIGNED_BYTE,ce):r.texImage2D(q+rt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ce);return He}const te={};te[r.TEXTURE_2D]=X(r.TEXTURE_2D,r.TEXTURE_2D,1),te[r.TEXTURE_CUBE_MAP]=X(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[r.TEXTURE_2D_ARRAY]=X(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),te[r.TEXTURE_3D]=X(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),a.setClear(0),ue(r.DEPTH_TEST),s.setFunc(vo),Ie(!1),Pe(Jc),ue(r.CULL_FACE),Ee(Gi);function ue(I){c[I]!==!0&&(r.enable(I),c[I]=!0)}function ne(I){c[I]!==!1&&(r.disable(I),c[I]=!1)}function De(I,q){return u[I]!==q?(r.bindFramebuffer(I,q),u[I]=q,I===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=q),I===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=q),!0):!1}function Ce(I,q){let K=h,ae=!1;if(I){K=d.get(q),K===void 0&&(K=[],d.set(q,K));const ce=I.textures;if(K.length!==ce.length||K[0]!==r.COLOR_ATTACHMENT0){for(let He=0,rt=ce.length;He<rt;He++)K[He]=r.COLOR_ATTACHMENT0+He;K.length=ce.length,ae=!0}}else K[0]!==r.BACK&&(K[0]=r.BACK,ae=!0);ae&&r.drawBuffers(K)}function F(I){return f!==I?(r.useProgram(I),f=I,!0):!1}const Ge={[gr]:r.FUNC_ADD,[Sp]:r.FUNC_SUBTRACT,[yp]:r.FUNC_REVERSE_SUBTRACT};Ge[Ep]=r.MIN,Ge[Tp]=r.MAX;const Se={[bp]:r.ZERO,[Ap]:r.ONE,[wp]:r.SRC_COLOR,[Vl]:r.SRC_ALPHA,[Up]:r.SRC_ALPHA_SATURATE,[Lp]:r.DST_COLOR,[Cp]:r.DST_ALPHA,[Rp]:r.ONE_MINUS_SRC_COLOR,[Gl]:r.ONE_MINUS_SRC_ALPHA,[Dp]:r.ONE_MINUS_DST_COLOR,[Pp]:r.ONE_MINUS_DST_ALPHA,[Ip]:r.CONSTANT_COLOR,[Np]:r.ONE_MINUS_CONSTANT_COLOR,[Op]:r.CONSTANT_ALPHA,[Fp]:r.ONE_MINUS_CONSTANT_ALPHA};function Ee(I,q,K,ae,ce,He,rt,ut,_t,tt){if(I===Gi){g===!0&&(ne(r.BLEND),g=!1);return}if(g===!1&&(ue(r.BLEND),g=!0),I!==Mp){if(I!==_||tt!==D){if((p!==gr||M!==gr)&&(r.blendEquation(r.FUNC_ADD),p=gr,M=gr),tt)switch(I){case ls:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Qc:r.blendFunc(r.ONE,r.ONE);break;case eu:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case tu:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case ls:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Qc:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case eu:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case tu:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}m=null,y=null,S=null,R=null,A.set(0,0,0),b=0,_=I,D=tt}return}ce=ce||q,He=He||K,rt=rt||ae,(q!==p||ce!==M)&&(r.blendEquationSeparate(Ge[q],Ge[ce]),p=q,M=ce),(K!==m||ae!==y||He!==S||rt!==R)&&(r.blendFuncSeparate(Se[K],Se[ae],Se[He],Se[rt]),m=K,y=ae,S=He,R=rt),(ut.equals(A)===!1||_t!==b)&&(r.blendColor(ut.r,ut.g,ut.b,_t),A.copy(ut),b=_t),_=I,D=!1}function ge(I,q){I.side===vi?ne(r.CULL_FACE):ue(r.CULL_FACE);let K=I.side===mn;q&&(K=!K),Ie(K),I.blending===ls&&I.transparent===!1?Ee(Gi):Ee(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),s.setFunc(I.depthFunc),s.setTest(I.depthTest),s.setMask(I.depthWrite),i.setMask(I.colorWrite);const ae=I.stencilWrite;a.setTest(ae),ae&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),et(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ue(r.SAMPLE_ALPHA_TO_COVERAGE):ne(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(I){x!==I&&(I?r.frontFace(r.CW):r.frontFace(r.CCW),x=I)}function Pe(I){I!==gp?(ue(r.CULL_FACE),I!==v&&(I===Jc?r.cullFace(r.BACK):I===vp?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ne(r.CULL_FACE),v=I}function O(I){I!==P&&(W&&r.lineWidth(I),P=I)}function et(I,q,K){I?(ue(r.POLYGON_OFFSET_FILL),(U!==q||L!==K)&&(r.polygonOffset(q,K),U=q,L=K)):ne(r.POLYGON_OFFSET_FILL)}function C(I){I?ue(r.SCISSOR_TEST):ne(r.SCISSOR_TEST)}function E(I){I===void 0&&(I=r.TEXTURE0+G-1),z!==I&&(r.activeTexture(I),z=I)}function V(I,q,K){K===void 0&&(z===null?K=r.TEXTURE0+G-1:K=z);let ae=J[K];ae===void 0&&(ae={type:void 0,texture:void 0},J[K]=ae),(ae.type!==I||ae.texture!==q)&&(z!==K&&(r.activeTexture(K),z=K),r.bindTexture(I,q||te[I]),ae.type=I,ae.texture=q)}function j(){const I=J[z];I!==void 0&&I.type!==void 0&&(r.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Q(){try{r.compressedTexImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ee(){try{r.compressedTexImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function me(){try{r.texSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function le(){try{r.texSubImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ie(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ue(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function re(){try{r.texStorage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ye(){try{r.texStorage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function qe(){try{r.texImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _e(){try{r.texImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ve(I){Le.equals(I)===!1&&(r.scissor(I.x,I.y,I.z,I.w),Le.copy(I))}function Ne(I){Ke.equals(I)===!1&&(r.viewport(I.x,I.y,I.z,I.w),Ke.copy(I))}function Ve(I,q){let K=l.get(q);K===void 0&&(K=new WeakMap,l.set(q,K));let ae=K.get(I);ae===void 0&&(ae=r.getUniformBlockIndex(q,I.name),K.set(I,ae))}function ht(I,q){const ae=l.get(q).get(I);o.get(q)!==ae&&(r.uniformBlockBinding(q,ae,I.__bindingPointIndex),o.set(q,ae))}function Oe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),c={},z=null,J={},u={},d=new WeakMap,h=[],f=null,g=!1,_=null,p=null,m=null,y=null,M=null,S=null,R=null,A=new ft(0,0,0),b=0,D=!1,x=null,v=null,P=null,U=null,L=null,Le.set(0,0,r.canvas.width,r.canvas.height),Ke.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),a.reset()}return{buffers:{color:i,depth:s,stencil:a},enable:ue,disable:ne,bindFramebuffer:De,drawBuffers:Ce,useProgram:F,setBlending:Ee,setMaterial:ge,setFlipSided:Ie,setCullFace:Pe,setLineWidth:O,setPolygonOffset:et,setScissorTest:C,activeTexture:E,bindTexture:V,unbindTexture:j,compressedTexImage2D:Q,compressedTexImage3D:ee,texImage2D:qe,texImage3D:_e,updateUBOMapping:Ve,uniformBlockBinding:ht,texStorage2D:re,texStorage3D:ye,texSubImage2D:me,texSubImage3D:le,compressedTexSubImage2D:ie,compressedTexSubImage3D:Ue,scissor:ve,viewport:Ne,reset:Oe}}function Sx(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ct,u=new WeakMap;let d;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,E){return f?new OffscreenCanvas(C,E):Eo("canvas")}function _(C,E,V){let j=1;const Q=et(C);if((Q.width>V||Q.height>V)&&(j=V/Math.max(Q.width,Q.height)),j<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const ee=Math.floor(j*Q.width),me=Math.floor(j*Q.height);d===void 0&&(d=g(ee,me));const le=E?g(ee,me):d;return le.width=ee,le.height=me,le.getContext("2d").drawImage(C,0,0,ee,me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+ee+"x"+me+")."),le}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),C;return C}function p(C){return C.generateMipmaps&&C.minFilter!==Gn&&C.minFilter!==jn}function m(C){r.generateMipmap(C)}function y(C,E,V,j,Q=!1){if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ee=E;if(E===r.RED&&(V===r.FLOAT&&(ee=r.R32F),V===r.HALF_FLOAT&&(ee=r.R16F),V===r.UNSIGNED_BYTE&&(ee=r.R8)),E===r.RED_INTEGER&&(V===r.UNSIGNED_BYTE&&(ee=r.R8UI),V===r.UNSIGNED_SHORT&&(ee=r.R16UI),V===r.UNSIGNED_INT&&(ee=r.R32UI),V===r.BYTE&&(ee=r.R8I),V===r.SHORT&&(ee=r.R16I),V===r.INT&&(ee=r.R32I)),E===r.RG&&(V===r.FLOAT&&(ee=r.RG32F),V===r.HALF_FLOAT&&(ee=r.RG16F),V===r.UNSIGNED_BYTE&&(ee=r.RG8)),E===r.RG_INTEGER&&(V===r.UNSIGNED_BYTE&&(ee=r.RG8UI),V===r.UNSIGNED_SHORT&&(ee=r.RG16UI),V===r.UNSIGNED_INT&&(ee=r.RG32UI),V===r.BYTE&&(ee=r.RG8I),V===r.SHORT&&(ee=r.RG16I),V===r.INT&&(ee=r.RG32I)),E===r.RGB&&V===r.UNSIGNED_INT_5_9_9_9_REV&&(ee=r.RGB9_E5),E===r.RGBA){const me=Q?xo:dt.getTransfer(j);V===r.FLOAT&&(ee=r.RGBA32F),V===r.HALF_FLOAT&&(ee=r.RGBA16F),V===r.UNSIGNED_BYTE&&(ee=me===xt?r.SRGB8_ALPHA8:r.RGBA8),V===r.UNSIGNED_SHORT_4_4_4_4&&(ee=r.RGBA4),V===r.UNSIGNED_SHORT_5_5_5_1&&(ee=r.RGB5_A1)}return(ee===r.R16F||ee===r.R32F||ee===r.RG16F||ee===r.RG32F||ee===r.RGBA16F||ee===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function M(C,E){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==Gn&&C.minFilter!==jn?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function S(C){const E=C.target;E.removeEventListener("dispose",S),A(E),E.isVideoTexture&&u.delete(E)}function R(C){const E=C.target;E.removeEventListener("dispose",R),D(E)}function A(C){const E=n.get(C);if(E.__webglInit===void 0)return;const V=C.source,j=h.get(V);if(j){const Q=j[E.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&b(C),Object.keys(j).length===0&&h.delete(V)}n.remove(C)}function b(C){const E=n.get(C);r.deleteTexture(E.__webglTexture);const V=C.source,j=h.get(V);delete j[E.__cacheKey],a.memory.textures--}function D(C){const E=n.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(E.__webglFramebuffer[j]))for(let Q=0;Q<E.__webglFramebuffer[j].length;Q++)r.deleteFramebuffer(E.__webglFramebuffer[j][Q]);else r.deleteFramebuffer(E.__webglFramebuffer[j]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[j])}else{if(Array.isArray(E.__webglFramebuffer))for(let j=0;j<E.__webglFramebuffer.length;j++)r.deleteFramebuffer(E.__webglFramebuffer[j]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let j=0;j<E.__webglColorRenderbuffer.length;j++)E.__webglColorRenderbuffer[j]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[j]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const V=C.textures;for(let j=0,Q=V.length;j<Q;j++){const ee=n.get(V[j]);ee.__webglTexture&&(r.deleteTexture(ee.__webglTexture),a.memory.textures--),n.remove(V[j])}n.remove(C)}let x=0;function v(){x=0}function P(){const C=x;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),x+=1,C}function U(C){const E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.colorSpace),E.join()}function L(C,E){const V=n.get(C);if(C.isVideoTexture&&Pe(C),C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){const j=C.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Le(V,C,E);return}}t.bindTexture(r.TEXTURE_2D,V.__webglTexture,r.TEXTURE0+E)}function G(C,E){const V=n.get(C);if(C.version>0&&V.__version!==C.version){Le(V,C,E);return}t.bindTexture(r.TEXTURE_2D_ARRAY,V.__webglTexture,r.TEXTURE0+E)}function W(C,E){const V=n.get(C);if(C.version>0&&V.__version!==C.version){Le(V,C,E);return}t.bindTexture(r.TEXTURE_3D,V.__webglTexture,r.TEXTURE0+E)}function Z(C,E){const V=n.get(C);if(C.version>0&&V.__version!==C.version){Ke(V,C,E);return}t.bindTexture(r.TEXTURE_CUBE_MAP,V.__webglTexture,r.TEXTURE0+E)}const $={[Yl]:r.REPEAT,[xr]:r.CLAMP_TO_EDGE,[ql]:r.MIRRORED_REPEAT},z={[Gn]:r.NEAREST,[em]:r.NEAREST_MIPMAP_NEAREST,[Ea]:r.NEAREST_MIPMAP_LINEAR,[jn]:r.LINEAR,[$o]:r.LINEAR_MIPMAP_NEAREST,[Mr]:r.LINEAR_MIPMAP_LINEAR},J={[mm]:r.NEVER,[Sm]:r.ALWAYS,[_m]:r.LESS,[mh]:r.LEQUAL,[gm]:r.EQUAL,[Mm]:r.GEQUAL,[vm]:r.GREATER,[xm]:r.NOTEQUAL};function w(C,E){if(E.type===Fi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===jn||E.magFilter===$o||E.magFilter===Ea||E.magFilter===Mr||E.minFilter===jn||E.minFilter===$o||E.minFilter===Ea||E.minFilter===Mr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,$[E.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,$[E.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,$[E.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,z[E.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,z[E.minFilter]),E.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,J[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Gn||E.minFilter!==Ea&&E.minFilter!==Mr||E.type===Fi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");r.texParameterf(C,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function oe(C,E){let V=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",S));const j=E.source;let Q=h.get(j);Q===void 0&&(Q={},h.set(j,Q));const ee=U(E);if(ee!==C.__cacheKey){Q[ee]===void 0&&(Q[ee]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,V=!0),Q[ee].usedTimes++;const me=Q[C.__cacheKey];me!==void 0&&(Q[C.__cacheKey].usedTimes--,me.usedTimes===0&&b(E)),C.__cacheKey=ee,C.__webglTexture=Q[ee].texture}return V}function Le(C,E,V){let j=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(j=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(j=r.TEXTURE_3D);const Q=oe(C,E),ee=E.source;t.bindTexture(j,C.__webglTexture,r.TEXTURE0+V);const me=n.get(ee);if(ee.version!==me.__version||Q===!0){t.activeTexture(r.TEXTURE0+V);const le=dt.getPrimaries(dt.workingColorSpace),ie=E.colorSpace===Oi?null:dt.getPrimaries(E.colorSpace),Ue=E.colorSpace===Oi||le===ie?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);let re=_(E.image,!1,i.maxTextureSize);re=O(E,re);const ye=s.convert(E.format,E.colorSpace),qe=s.convert(E.type);let _e=y(E.internalFormat,ye,qe,E.colorSpace,E.isVideoTexture);w(j,E);let ve;const Ne=E.mipmaps,Ve=E.isVideoTexture!==!0,ht=me.__version===void 0||Q===!0,Oe=ee.dataReady,I=M(E,re);if(E.isDepthTexture)_e=r.DEPTH_COMPONENT16,E.type===Fi?_e=r.DEPTH_COMPONENT32F:E.type===xs?_e=r.DEPTH_COMPONENT24:E.type===_a&&(_e=r.DEPTH24_STENCIL8),ht&&(Ve?t.texStorage2D(r.TEXTURE_2D,1,_e,re.width,re.height):t.texImage2D(r.TEXTURE_2D,0,_e,re.width,re.height,0,ye,qe,null));else if(E.isDataTexture)if(Ne.length>0){Ve&&ht&&t.texStorage2D(r.TEXTURE_2D,I,_e,Ne[0].width,Ne[0].height);for(let q=0,K=Ne.length;q<K;q++)ve=Ne[q],Ve?Oe&&t.texSubImage2D(r.TEXTURE_2D,q,0,0,ve.width,ve.height,ye,qe,ve.data):t.texImage2D(r.TEXTURE_2D,q,_e,ve.width,ve.height,0,ye,qe,ve.data);E.generateMipmaps=!1}else Ve?(ht&&t.texStorage2D(r.TEXTURE_2D,I,_e,re.width,re.height),Oe&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,re.width,re.height,ye,qe,re.data)):t.texImage2D(r.TEXTURE_2D,0,_e,re.width,re.height,0,ye,qe,re.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ve&&ht&&t.texStorage3D(r.TEXTURE_2D_ARRAY,I,_e,Ne[0].width,Ne[0].height,re.depth);for(let q=0,K=Ne.length;q<K;q++)ve=Ne[q],E.format!==si?ye!==null?Ve?Oe&&t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,q,0,0,0,ve.width,ve.height,re.depth,ye,ve.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,q,_e,ve.width,ve.height,re.depth,0,ve.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?Oe&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,q,0,0,0,ve.width,ve.height,re.depth,ye,qe,ve.data):t.texImage3D(r.TEXTURE_2D_ARRAY,q,_e,ve.width,ve.height,re.depth,0,ye,qe,ve.data)}else{Ve&&ht&&t.texStorage2D(r.TEXTURE_2D,I,_e,Ne[0].width,Ne[0].height);for(let q=0,K=Ne.length;q<K;q++)ve=Ne[q],E.format!==si?ye!==null?Ve?Oe&&t.compressedTexSubImage2D(r.TEXTURE_2D,q,0,0,ve.width,ve.height,ye,ve.data):t.compressedTexImage2D(r.TEXTURE_2D,q,_e,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?Oe&&t.texSubImage2D(r.TEXTURE_2D,q,0,0,ve.width,ve.height,ye,qe,ve.data):t.texImage2D(r.TEXTURE_2D,q,_e,ve.width,ve.height,0,ye,qe,ve.data)}else if(E.isDataArrayTexture)Ve?(ht&&t.texStorage3D(r.TEXTURE_2D_ARRAY,I,_e,re.width,re.height,re.depth),Oe&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,ye,qe,re.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,_e,re.width,re.height,re.depth,0,ye,qe,re.data);else if(E.isData3DTexture)Ve?(ht&&t.texStorage3D(r.TEXTURE_3D,I,_e,re.width,re.height,re.depth),Oe&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,ye,qe,re.data)):t.texImage3D(r.TEXTURE_3D,0,_e,re.width,re.height,re.depth,0,ye,qe,re.data);else if(E.isFramebufferTexture){if(ht)if(Ve)t.texStorage2D(r.TEXTURE_2D,I,_e,re.width,re.height);else{let q=re.width,K=re.height;for(let ae=0;ae<I;ae++)t.texImage2D(r.TEXTURE_2D,ae,_e,q,K,0,ye,qe,null),q>>=1,K>>=1}}else if(Ne.length>0){if(Ve&&ht){const q=et(Ne[0]);t.texStorage2D(r.TEXTURE_2D,I,_e,q.width,q.height)}for(let q=0,K=Ne.length;q<K;q++)ve=Ne[q],Ve?Oe&&t.texSubImage2D(r.TEXTURE_2D,q,0,0,ye,qe,ve):t.texImage2D(r.TEXTURE_2D,q,_e,ye,qe,ve);E.generateMipmaps=!1}else if(Ve){if(ht){const q=et(re);t.texStorage2D(r.TEXTURE_2D,I,_e,q.width,q.height)}Oe&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ye,qe,re)}else t.texImage2D(r.TEXTURE_2D,0,_e,ye,qe,re);p(E)&&m(j),me.__version=ee.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function Ke(C,E,V){if(E.image.length!==6)return;const j=oe(C,E),Q=E.source;t.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+V);const ee=n.get(Q);if(Q.version!==ee.__version||j===!0){t.activeTexture(r.TEXTURE0+V);const me=dt.getPrimaries(dt.workingColorSpace),le=E.colorSpace===Oi?null:dt.getPrimaries(E.colorSpace),ie=E.colorSpace===Oi||me===le?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);const Ue=E.isCompressedTexture||E.image[0].isCompressedTexture,re=E.image[0]&&E.image[0].isDataTexture,ye=[];for(let K=0;K<6;K++)!Ue&&!re?ye[K]=_(E.image[K],!0,i.maxCubemapSize):ye[K]=re?E.image[K].image:E.image[K],ye[K]=O(E,ye[K]);const qe=ye[0],_e=s.convert(E.format,E.colorSpace),ve=s.convert(E.type),Ne=y(E.internalFormat,_e,ve,E.colorSpace),Ve=E.isVideoTexture!==!0,ht=ee.__version===void 0||j===!0,Oe=Q.dataReady;let I=M(E,qe);w(r.TEXTURE_CUBE_MAP,E);let q;if(Ue){Ve&&ht&&t.texStorage2D(r.TEXTURE_CUBE_MAP,I,Ne,qe.width,qe.height);for(let K=0;K<6;K++){q=ye[K].mipmaps;for(let ae=0;ae<q.length;ae++){const ce=q[ae];E.format!==si?_e!==null?Ve?Oe&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ae,0,0,ce.width,ce.height,_e,ce.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ae,Ne,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?Oe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ae,0,0,ce.width,ce.height,_e,ve,ce.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ae,Ne,ce.width,ce.height,0,_e,ve,ce.data)}}}else{if(q=E.mipmaps,Ve&&ht){q.length>0&&I++;const K=et(ye[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,I,Ne,K.width,K.height)}for(let K=0;K<6;K++)if(re){Ve?Oe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ye[K].width,ye[K].height,_e,ve,ye[K].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ne,ye[K].width,ye[K].height,0,_e,ve,ye[K].data);for(let ae=0;ae<q.length;ae++){const He=q[ae].image[K].image;Ve?Oe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ae+1,0,0,He.width,He.height,_e,ve,He.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ae+1,Ne,He.width,He.height,0,_e,ve,He.data)}}else{Ve?Oe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,_e,ve,ye[K]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ne,_e,ve,ye[K]);for(let ae=0;ae<q.length;ae++){const ce=q[ae];Ve?Oe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ae+1,0,0,_e,ve,ce.image[K]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ae+1,Ne,_e,ve,ce.image[K])}}}p(E)&&m(r.TEXTURE_CUBE_MAP),ee.__version=Q.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function X(C,E,V,j,Q,ee){const me=s.convert(V.format,V.colorSpace),le=s.convert(V.type),ie=y(V.internalFormat,me,le,V.colorSpace);if(!n.get(E).__hasExternalTextures){const re=Math.max(1,E.width>>ee),ye=Math.max(1,E.height>>ee);Q===r.TEXTURE_3D||Q===r.TEXTURE_2D_ARRAY?t.texImage3D(Q,ee,ie,re,ye,E.depth,0,me,le,null):t.texImage2D(Q,ee,ie,re,ye,0,me,le,null)}t.bindFramebuffer(r.FRAMEBUFFER,C),Ie(E)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,j,Q,n.get(V).__webglTexture,0,ge(E)):(Q===r.TEXTURE_2D||Q>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,j,Q,n.get(V).__webglTexture,ee),t.bindFramebuffer(r.FRAMEBUFFER,null)}function te(C,E,V){if(r.bindRenderbuffer(r.RENDERBUFFER,C),E.depthBuffer&&!E.stencilBuffer){let j=r.DEPTH_COMPONENT24;if(V||Ie(E)){const Q=E.depthTexture;Q&&Q.isDepthTexture&&(Q.type===Fi?j=r.DEPTH_COMPONENT32F:Q.type===xs&&(j=r.DEPTH_COMPONENT24));const ee=ge(E);Ie(E)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ee,j,E.width,E.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,ee,j,E.width,E.height)}else r.renderbufferStorage(r.RENDERBUFFER,j,E.width,E.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,C)}else if(E.depthBuffer&&E.stencilBuffer){const j=ge(E);V&&Ie(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,j,r.DEPTH24_STENCIL8,E.width,E.height):Ie(E)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,j,r.DEPTH24_STENCIL8,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,C)}else{const j=E.textures;for(let Q=0;Q<j.length;Q++){const ee=j[Q],me=s.convert(ee.format,ee.colorSpace),le=s.convert(ee.type),ie=y(ee.internalFormat,me,le,ee.colorSpace),Ue=ge(E);V&&Ie(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ue,ie,E.width,E.height):Ie(E)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ue,ie,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,ie,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ue(C,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),L(E.depthTexture,0);const j=n.get(E.depthTexture).__webglTexture,Q=ge(E);if(E.depthTexture.format===cs)Ie(E)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,j,0,Q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,j,0);else if(E.depthTexture.format===aa)Ie(E)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,j,0,Q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function ne(C){const E=n.get(C),V=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!E.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");ue(E.__webglFramebuffer,C)}else if(V){E.__webglDepthbuffer=[];for(let j=0;j<6;j++)t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[j]),E.__webglDepthbuffer[j]=r.createRenderbuffer(),te(E.__webglDepthbuffer[j],C,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=r.createRenderbuffer(),te(E.__webglDepthbuffer,C,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function De(C,E,V){const j=n.get(C);E!==void 0&&X(j.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),V!==void 0&&ne(C)}function Ce(C){const E=C.texture,V=n.get(C),j=n.get(E);C.addEventListener("dispose",R);const Q=C.textures,ee=C.isWebGLCubeRenderTarget===!0,me=Q.length>1;if(me||(j.__webglTexture===void 0&&(j.__webglTexture=r.createTexture()),j.__version=E.version,a.memory.textures++),ee){V.__webglFramebuffer=[];for(let le=0;le<6;le++)if(E.mipmaps&&E.mipmaps.length>0){V.__webglFramebuffer[le]=[];for(let ie=0;ie<E.mipmaps.length;ie++)V.__webglFramebuffer[le][ie]=r.createFramebuffer()}else V.__webglFramebuffer[le]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){V.__webglFramebuffer=[];for(let le=0;le<E.mipmaps.length;le++)V.__webglFramebuffer[le]=r.createFramebuffer()}else V.__webglFramebuffer=r.createFramebuffer();if(me)for(let le=0,ie=Q.length;le<ie;le++){const Ue=n.get(Q[le]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=r.createTexture(),a.memory.textures++)}if(C.samples>0&&Ie(C)===!1){V.__webglMultisampledFramebuffer=r.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let le=0;le<Q.length;le++){const ie=Q[le];V.__webglColorRenderbuffer[le]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,V.__webglColorRenderbuffer[le]);const Ue=s.convert(ie.format,ie.colorSpace),re=s.convert(ie.type),ye=y(ie.internalFormat,Ue,re,ie.colorSpace,C.isXRRenderTarget===!0),qe=ge(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,qe,ye,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+le,r.RENDERBUFFER,V.__webglColorRenderbuffer[le])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(V.__webglDepthRenderbuffer=r.createRenderbuffer(),te(V.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ee){t.bindTexture(r.TEXTURE_CUBE_MAP,j.__webglTexture),w(r.TEXTURE_CUBE_MAP,E);for(let le=0;le<6;le++)if(E.mipmaps&&E.mipmaps.length>0)for(let ie=0;ie<E.mipmaps.length;ie++)X(V.__webglFramebuffer[le][ie],C,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+le,ie);else X(V.__webglFramebuffer[le],C,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);p(E)&&m(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(me){for(let le=0,ie=Q.length;le<ie;le++){const Ue=Q[le],re=n.get(Ue);t.bindTexture(r.TEXTURE_2D,re.__webglTexture),w(r.TEXTURE_2D,Ue),X(V.__webglFramebuffer,C,Ue,r.COLOR_ATTACHMENT0+le,r.TEXTURE_2D,0),p(Ue)&&m(r.TEXTURE_2D)}t.unbindTexture()}else{let le=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(le=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(le,j.__webglTexture),w(le,E),E.mipmaps&&E.mipmaps.length>0)for(let ie=0;ie<E.mipmaps.length;ie++)X(V.__webglFramebuffer[ie],C,E,r.COLOR_ATTACHMENT0,le,ie);else X(V.__webglFramebuffer,C,E,r.COLOR_ATTACHMENT0,le,0);p(E)&&m(le),t.unbindTexture()}C.depthBuffer&&ne(C)}function F(C){const E=C.textures;for(let V=0,j=E.length;V<j;V++){const Q=E[V];if(p(Q)){const ee=C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,me=n.get(Q).__webglTexture;t.bindTexture(ee,me),m(ee),t.unbindTexture()}}}const Ge=[],Se=[];function Ee(C){if(C.samples>0){if(Ie(C)===!1){const E=C.textures,V=C.width,j=C.height;let Q=r.COLOR_BUFFER_BIT;const ee=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,me=n.get(C),le=E.length>1;if(le)for(let ie=0;ie<E.length;ie++)t.bindFramebuffer(r.FRAMEBUFFER,me.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ie,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,me.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ie,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let ie=0;ie<E.length;ie++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Q|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Q|=r.STENCIL_BUFFER_BIT)),le){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,me.__webglColorRenderbuffer[ie]);const Ue=n.get(E[ie]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ue,0)}r.blitFramebuffer(0,0,V,j,0,0,V,j,Q,r.NEAREST),l===!0&&(Ge.length=0,Se.length=0,Ge.push(r.COLOR_ATTACHMENT0+ie),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Ge.push(ee),Se.push(ee),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Se)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ge))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),le)for(let ie=0;ie<E.length;ie++){t.bindFramebuffer(r.FRAMEBUFFER,me.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ie,r.RENDERBUFFER,me.__webglColorRenderbuffer[ie]);const Ue=n.get(E[ie]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,me.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ie,r.TEXTURE_2D,Ue,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const E=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function ge(C){return Math.min(i.maxSamples,C.samples)}function Ie(C){const E=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Pe(C){const E=a.render.frame;u.get(C)!==E&&(u.set(C,E),C.update())}function O(C,E){const V=C.colorSpace,j=C.format,Q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||V!==tr&&V!==Oi&&(dt.getTransfer(V)===xt?(j!==si||Q!==Ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),E}function et(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=P,this.resetTextureUnits=v,this.setTexture2D=L,this.setTexture2DArray=G,this.setTexture3D=W,this.setTextureCube=Z,this.rebindTextures=De,this.setupRenderTarget=Ce,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=ne,this.setupFrameBufferTexture=X,this.useMultisampledRTT=Ie}function yx(r,e){function t(n,i=Oi){let s;const a=dt.getTransfer(i);if(n===Ki)return r.UNSIGNED_BYTE;if(n===uh)return r.UNSIGNED_SHORT_4_4_4_4;if(n===fh)return r.UNSIGNED_SHORT_5_5_5_1;if(n===im)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===tm)return r.BYTE;if(n===nm)return r.SHORT;if(n===lh)return r.UNSIGNED_SHORT;if(n===ch)return r.INT;if(n===xs)return r.UNSIGNED_INT;if(n===Fi)return r.FLOAT;if(n===Oo)return r.HALF_FLOAT;if(n===rm)return r.ALPHA;if(n===sm)return r.RGB;if(n===si)return r.RGBA;if(n===am)return r.LUMINANCE;if(n===om)return r.LUMINANCE_ALPHA;if(n===cs)return r.DEPTH_COMPONENT;if(n===aa)return r.DEPTH_STENCIL;if(n===lm)return r.RED;if(n===hh)return r.RED_INTEGER;if(n===cm)return r.RG;if(n===dh)return r.RG_INTEGER;if(n===ph)return r.RGBA_INTEGER;if(n===Ko||n===Zo||n===jo||n===Jo)if(a===xt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ko)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Zo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===jo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Jo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ko)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Zo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===jo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Jo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===nu||n===iu||n===ru||n===su)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===nu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===iu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ru)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===su)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===au||n===ou||n===lu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===au||n===ou)return a===xt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===lu)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===cu||n===uu||n===fu||n===hu||n===du||n===pu||n===mu||n===_u||n===gu||n===vu||n===xu||n===Mu||n===Su||n===yu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===cu)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===uu)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===fu)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===hu)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===du)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===pu)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===mu)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===_u)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===gu)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===vu)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===xu)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Mu)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Su)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===yu)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Qo||n===Eu||n===Tu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Qo)return a===xt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Eu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Tu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===um||n===bu||n===Au||n===wu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Qo)return s.COMPRESSED_RED_RGTC1_EXT;if(n===bu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Au)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===wu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===_a?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}class Ex extends kn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Xa extends gn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Tx={type:"move"};class Al{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&h>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Tx)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Xa;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const bx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ax=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class wx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new _n,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,i=new Zi({vertexShader:bx,fragmentShader:Ax,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Si(new zo(20,20),i)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class Rx extends Rs{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,g=null;const _=new wx,p=t.getContextAttributes();let m=null,y=null;const M=[],S=[],R=new ct;let A=null;const b=new kn;b.layers.enable(1),b.viewport=new Wt;const D=new kn;D.layers.enable(2),D.viewport=new Wt;const x=[b,D],v=new Ex;v.layers.enable(1),v.layers.enable(2);let P=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let te=M[X];return te===void 0&&(te=new Al,M[X]=te),te.getTargetRaySpace()},this.getControllerGrip=function(X){let te=M[X];return te===void 0&&(te=new Al,M[X]=te),te.getGripSpace()},this.getHand=function(X){let te=M[X];return te===void 0&&(te=new Al,M[X]=te),te.getHandSpace()};function L(X){const te=S.indexOf(X.inputSource);if(te===-1)return;const ue=M[te];ue!==void 0&&(ue.update(X.inputSource,X.frame,c||a),ue.dispatchEvent({type:X.type,data:X.inputSource}))}function G(){i.removeEventListener("select",L),i.removeEventListener("selectstart",L),i.removeEventListener("selectend",L),i.removeEventListener("squeeze",L),i.removeEventListener("squeezestart",L),i.removeEventListener("squeezeend",L),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",W);for(let X=0;X<M.length;X++){const te=S[X];te!==null&&(S[X]=null,M[X].disconnect(te))}P=null,U=null,_.reset(),e.setRenderTarget(m),f=null,h=null,d=null,i=null,y=null,Ke.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",L),i.addEventListener("selectstart",L),i.addEventListener("selectend",L),i.addEventListener("squeeze",L),i.addEventListener("squeezestart",L),i.addEventListener("squeezeend",L),i.addEventListener("end",G),i.addEventListener("inputsourceschange",W),p.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(R),i.renderState.layers===void 0){const te={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,te),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Lr(f.framebufferWidth,f.framebufferHeight,{format:si,type:Ki,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let te=null,ue=null,ne=null;p.depth&&(ne=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=p.stencil?aa:cs,ue=p.stencil?_a:xs);const De={colorFormat:t.RGBA8,depthFormat:ne,scaleFactor:s};d=new XRWebGLBinding(i,t),h=d.createProjectionLayer(De),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new Lr(h.textureWidth,h.textureHeight,{format:si,type:Ki,depthTexture:new Ph(h.textureWidth,h.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Ke.setContext(i),Ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function W(X){for(let te=0;te<X.removed.length;te++){const ue=X.removed[te],ne=S.indexOf(ue);ne>=0&&(S[ne]=null,M[ne].disconnect(ue))}for(let te=0;te<X.added.length;te++){const ue=X.added[te];let ne=S.indexOf(ue);if(ne===-1){for(let Ce=0;Ce<M.length;Ce++)if(Ce>=S.length){S.push(ue),ne=Ce;break}else if(S[Ce]===null){S[Ce]=ue,ne=Ce;break}if(ne===-1)break}const De=M[ne];De&&De.connect(ue)}}const Z=new Y,$=new Y;function z(X,te,ue){Z.setFromMatrixPosition(te.matrixWorld),$.setFromMatrixPosition(ue.matrixWorld);const ne=Z.distanceTo($),De=te.projectionMatrix.elements,Ce=ue.projectionMatrix.elements,F=De[14]/(De[10]-1),Ge=De[14]/(De[10]+1),Se=(De[9]+1)/De[5],Ee=(De[9]-1)/De[5],ge=(De[8]-1)/De[0],Ie=(Ce[8]+1)/Ce[0],Pe=F*ge,O=F*Ie,et=ne/(-ge+Ie),C=et*-ge;te.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(C),X.translateZ(et),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const E=F+et,V=Ge+et,j=Pe-C,Q=O+(ne-C),ee=Se*Ge/V*E,me=Ee*Ge/V*E;X.projectionMatrix.makePerspective(j,Q,ee,me,E,V),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function J(X,te){te===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(te.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;_.texture!==null&&(X.near=_.depthNear,X.far=_.depthFar),v.near=D.near=b.near=X.near,v.far=D.far=b.far=X.far,(P!==v.near||U!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),P=v.near,U=v.far,b.near=P,b.far=U,D.near=P,D.far=U,b.updateProjectionMatrix(),D.updateProjectionMatrix(),X.updateProjectionMatrix());const te=X.parent,ue=v.cameras;J(v,te);for(let ne=0;ne<ue.length;ne++)J(ue[ne],te);ue.length===2?z(v,b,D):v.projectionMatrix.copy(b.projectionMatrix),w(X,v,te)};function w(X,te,ue){ue===null?X.matrix.copy(te.matrixWorld):(X.matrix.copy(ue.matrixWorld),X.matrix.invert(),X.matrix.multiply(te.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(te.projectionMatrix),X.projectionMatrixInverse.copy(te.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=$l*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(X){l=X,h!==null&&(h.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)},this.hasDepthSensing=function(){return _.texture!==null};let oe=null;function Le(X,te){if(u=te.getViewerPose(c||a),g=te,u!==null){const ue=u.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let ne=!1;ue.length!==v.cameras.length&&(v.cameras.length=0,ne=!0);for(let Ce=0;Ce<ue.length;Ce++){const F=ue[Ce];let Ge=null;if(f!==null)Ge=f.getViewport(F);else{const Ee=d.getViewSubImage(h,F);Ge=Ee.viewport,Ce===0&&(e.setRenderTargetTextures(y,Ee.colorTexture,h.ignoreDepthValues?void 0:Ee.depthStencilTexture),e.setRenderTarget(y))}let Se=x[Ce];Se===void 0&&(Se=new kn,Se.layers.enable(Ce),Se.viewport=new Wt,x[Ce]=Se),Se.matrix.fromArray(F.transform.matrix),Se.matrix.decompose(Se.position,Se.quaternion,Se.scale),Se.projectionMatrix.fromArray(F.projectionMatrix),Se.projectionMatrixInverse.copy(Se.projectionMatrix).invert(),Se.viewport.set(Ge.x,Ge.y,Ge.width,Ge.height),Ce===0&&(v.matrix.copy(Se.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ne===!0&&v.cameras.push(Se)}const De=i.enabledFeatures;if(De&&De.includes("depth-sensing")){const Ce=d.getDepthInformation(ue[0]);Ce&&Ce.isValid&&Ce.texture&&_.init(e,Ce,i.renderState)}}for(let ue=0;ue<M.length;ue++){const ne=S[ue],De=M[ue];ne!==null&&De!==void 0&&De.update(ne,te,c||a)}_.render(e,v),oe&&oe(X,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),g=null}const Ke=new Ch;Ke.setAnimationLoop(Le),this.setAnimationLoop=function(X){oe=X},this.dispose=function(){}}}const cr=new Ti,Cx=new It;function Px(r,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,bh(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,y,M,S){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),d(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m)):m.isMeshStandardMaterial?(s(p,m),h(p,m),m.isMeshPhysicalMaterial&&f(p,m,S)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),_(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,y,M):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===mn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===mn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const y=e.get(m),M=y.envMap,S=y.envMapRotation;if(M&&(p.envMap.value=M,cr.copy(S),cr.x*=-1,cr.y*=-1,cr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(cr.y*=-1,cr.z*=-1),p.envMapRotation.value.setFromMatrix4(Cx.makeRotationFromEuler(cr)),p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const R=r._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*R,t(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,y,M){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=M*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,y){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===mn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const y=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Lx(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,M){const S=M.program;n.uniformBlockBinding(y,S)}function c(y,M){let S=i[y.id];S===void 0&&(g(y),S=u(y),i[y.id]=S,y.addEventListener("dispose",p));const R=M.program;n.updateUBOMapping(y,R);const A=e.render.frame;s[y.id]!==A&&(h(y),s[y.id]=A)}function u(y){const M=d();y.__bindingPointIndex=M;const S=r.createBuffer(),R=y.__size,A=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,S),r.bufferData(r.UNIFORM_BUFFER,R,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,M,S),S}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const M=i[y.id],S=y.uniforms,R=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,M);for(let A=0,b=S.length;A<b;A++){const D=Array.isArray(S[A])?S[A]:[S[A]];for(let x=0,v=D.length;x<v;x++){const P=D[x];if(f(P,A,x,R)===!0){const U=P.__offset,L=Array.isArray(P.value)?P.value:[P.value];let G=0;for(let W=0;W<L.length;W++){const Z=L[W],$=_(Z);typeof Z=="number"||typeof Z=="boolean"?(P.__data[0]=Z,r.bufferSubData(r.UNIFORM_BUFFER,U+G,P.__data)):Z.isMatrix3?(P.__data[0]=Z.elements[0],P.__data[1]=Z.elements[1],P.__data[2]=Z.elements[2],P.__data[3]=0,P.__data[4]=Z.elements[3],P.__data[5]=Z.elements[4],P.__data[6]=Z.elements[5],P.__data[7]=0,P.__data[8]=Z.elements[6],P.__data[9]=Z.elements[7],P.__data[10]=Z.elements[8],P.__data[11]=0):(Z.toArray(P.__data,G),G+=$.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,U,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(y,M,S,R){const A=y.value,b=M+"_"+S;if(R[b]===void 0)return typeof A=="number"||typeof A=="boolean"?R[b]=A:R[b]=A.clone(),!0;{const D=R[b];if(typeof A=="number"||typeof A=="boolean"){if(D!==A)return R[b]=A,!0}else if(D.equals(A)===!1)return D.copy(A),!0}return!1}function g(y){const M=y.uniforms;let S=0;const R=16;for(let b=0,D=M.length;b<D;b++){const x=Array.isArray(M[b])?M[b]:[M[b]];for(let v=0,P=x.length;v<P;v++){const U=x[v],L=Array.isArray(U.value)?U.value:[U.value];for(let G=0,W=L.length;G<W;G++){const Z=L[G],$=_(Z),z=S%R;z!==0&&R-z<$.boundary&&(S+=R-z),U.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=S,S+=$.storage}}}const A=S%R;return A>0&&(S+=R-A),y.__size=S,y.__cache={},this}function _(y){const M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),M}function p(y){const M=y.target;M.removeEventListener("dispose",p);const S=a.indexOf(M.__bindingPointIndex);a.splice(S,1),r.deleteBuffer(i[M.id]),delete i[M.id],delete s[M.id]}function m(){for(const y in i)r.deleteBuffer(i[y]);a=[],i={},s={}}return{bind:l,update:c,dispose:m}}class Dx{constructor(e={}){const{canvas:t=Em(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=a;const f=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const m=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Qn,this._useLegacyLights=!1,this.toneMapping=Wi,this.toneMappingExposure=1;const M=this;let S=!1,R=0,A=0,b=null,D=-1,x=null;const v=new Wt,P=new Wt;let U=null;const L=new ft(0);let G=0,W=t.width,Z=t.height,$=1,z=null,J=null;const w=new Wt(0,0,W,Z),oe=new Wt(0,0,W,Z);let Le=!1;const Ke=new Rh;let X=!1,te=!1;const ue=new It,ne=new Y,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ce(){return b===null?$:1}let F=n;function Ge(T,N){return t.getContext(T,N)}try{const T={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Sc}`),t.addEventListener("webglcontextlost",I,!1),t.addEventListener("webglcontextrestored",q,!1),t.addEventListener("webglcontextcreationerror",K,!1),F===null){const N="webgl2";if(F=Ge(N,T),F===null)throw Ge(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Se,Ee,ge,Ie,Pe,O,et,C,E,V,j,Q,ee,me,le,ie,Ue,re,ye,qe,_e,ve,Ne,Ve;function ht(){Se=new k0(F),Se.init(),ve=new yx(F,Se),Ee=new U0(F,Se,e,ve),ge=new Mx(F),Ie=new G0(F),Pe=new ax,O=new Sx(F,Se,ge,Pe,Ee,ve,Ie),et=new N0(M),C=new z0(M),E=new Km(F),Ne=new L0(F,E),V=new H0(F,E,Ie,Ne),j=new X0(F,V,E,Ie),ye=new W0(F,Ee,O),ie=new I0(Pe),Q=new sx(M,et,C,Se,Ee,Ne,ie),ee=new Px(M,Pe),me=new lx,le=new px(Se),re=new P0(M,et,C,ge,j,h,l),Ue=new xx(M,j,Ee),Ve=new Lx(F,Ie,Ee,ge),qe=new D0(F,Se,Ie),_e=new V0(F,Se,Ie),Ie.programs=Q.programs,M.capabilities=Ee,M.extensions=Se,M.properties=Pe,M.renderLists=me,M.shadowMap=Ue,M.state=ge,M.info=Ie}ht();const Oe=new Rx(M,F);this.xr=Oe,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const T=Se.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Se.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(T){T!==void 0&&($=T,this.setSize(W,Z,!1))},this.getSize=function(T){return T.set(W,Z)},this.setSize=function(T,N,B=!0){if(Oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=T,Z=N,t.width=Math.floor(T*$),t.height=Math.floor(N*$),B===!0&&(t.style.width=T+"px",t.style.height=N+"px"),this.setViewport(0,0,T,N)},this.getDrawingBufferSize=function(T){return T.set(W*$,Z*$).floor()},this.setDrawingBufferSize=function(T,N,B){W=T,Z=N,$=B,t.width=Math.floor(T*B),t.height=Math.floor(N*B),this.setViewport(0,0,T,N)},this.getCurrentViewport=function(T){return T.copy(v)},this.getViewport=function(T){return T.copy(w)},this.setViewport=function(T,N,B,k){T.isVector4?w.set(T.x,T.y,T.z,T.w):w.set(T,N,B,k),ge.viewport(v.copy(w).multiplyScalar($).round())},this.getScissor=function(T){return T.copy(oe)},this.setScissor=function(T,N,B,k){T.isVector4?oe.set(T.x,T.y,T.z,T.w):oe.set(T,N,B,k),ge.scissor(P.copy(oe).multiplyScalar($).round())},this.getScissorTest=function(){return Le},this.setScissorTest=function(T){ge.setScissorTest(Le=T)},this.setOpaqueSort=function(T){z=T},this.setTransparentSort=function(T){J=T},this.getClearColor=function(T){return T.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor.apply(re,arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha.apply(re,arguments)},this.clear=function(T=!0,N=!0,B=!0){let k=0;if(T){let H=!1;if(b!==null){const se=b.texture.format;H=se===ph||se===dh||se===hh}if(H){const se=b.texture.type,he=se===Ki||se===xs||se===lh||se===_a||se===uh||se===fh,pe=re.getClearColor(),we=re.getClearAlpha(),Be=pe.r,Ae=pe.g,Te=pe.b;he?(f[0]=Be,f[1]=Ae,f[2]=Te,f[3]=we,F.clearBufferuiv(F.COLOR,0,f)):(g[0]=Be,g[1]=Ae,g[2]=Te,g[3]=we,F.clearBufferiv(F.COLOR,0,g))}else k|=F.COLOR_BUFFER_BIT}N&&(k|=F.DEPTH_BUFFER_BIT),B&&(k|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",I,!1),t.removeEventListener("webglcontextrestored",q,!1),t.removeEventListener("webglcontextcreationerror",K,!1),me.dispose(),le.dispose(),Pe.dispose(),et.dispose(),C.dispose(),j.dispose(),Ne.dispose(),Ve.dispose(),Q.dispose(),Oe.dispose(),Oe.removeEventListener("sessionstart",tt),Oe.removeEventListener("sessionend",Re),xe.stop()};function I(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function q(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const T=Ie.autoReset,N=Ue.enabled,B=Ue.autoUpdate,k=Ue.needsUpdate,H=Ue.type;ht(),Ie.autoReset=T,Ue.enabled=N,Ue.autoUpdate=B,Ue.needsUpdate=k,Ue.type=H}function K(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ae(T){const N=T.target;N.removeEventListener("dispose",ae),ce(N)}function ce(T){He(T),Pe.remove(T)}function He(T){const N=Pe.get(T).programs;N!==void 0&&(N.forEach(function(B){Q.releaseProgram(B)}),T.isShaderMaterial&&Q.releaseShaderCache(T))}this.renderBufferDirect=function(T,N,B,k,H,se){N===null&&(N=De);const he=H.isMesh&&H.matrixWorld.determinant()<0,pe=zt(T,N,B,k,H);ge.setMaterial(k,he);let we=B.index,Be=1;if(k.wireframe===!0){if(we=V.getWireframeAttribute(B),we===void 0)return;Be=2}const Ae=B.drawRange,Te=B.attributes.position;let ot=Ae.start*Be,Pt=(Ae.start+Ae.count)*Be;se!==null&&(ot=Math.max(ot,se.start*Be),Pt=Math.min(Pt,(se.start+se.count)*Be)),we!==null?(ot=Math.max(ot,0),Pt=Math.min(Pt,we.count)):Te!=null&&(ot=Math.max(ot,0),Pt=Math.min(Pt,Te.count));const qt=Pt-ot;if(qt<0||qt===1/0)return;Ne.setup(H,k,pe,B,we);let nn,We=qe;if(we!==null&&(nn=E.get(we),We=_e,We.setIndex(nn)),H.isMesh)k.wireframe===!0?(ge.setLineWidth(k.wireframeLinewidth*Ce()),We.setMode(F.LINES)):We.setMode(F.TRIANGLES);else if(H.isLine){let Fe=k.linewidth;Fe===void 0&&(Fe=1),ge.setLineWidth(Fe*Ce()),H.isLineSegments?We.setMode(F.LINES):H.isLineLoop?We.setMode(F.LINE_LOOP):We.setMode(F.LINE_STRIP)}else H.isPoints?We.setMode(F.POINTS):H.isSprite&&We.setMode(F.TRIANGLES);if(H.isBatchedMesh)H._multiDrawInstances!==null?We.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances):We.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else if(H.isInstancedMesh)We.renderInstances(ot,qt,H.count);else if(B.isInstancedBufferGeometry){const Fe=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Jn=Math.min(B.instanceCount,Fe);We.renderInstances(ot,qt,Jn)}else We.render(ot,qt)};function rt(T,N,B){T.transparent===!0&&T.side===vi&&T.forceSinglePass===!1?(T.side=mn,T.needsUpdate=!0,Et(T,N,B),T.side=$i,T.needsUpdate=!0,Et(T,N,B),T.side=vi):Et(T,N,B)}this.compile=function(T,N,B=null){B===null&&(B=T),p=le.get(B),p.init(N),y.push(p),B.traverseVisible(function(H){H.isLight&&H.layers.test(N.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),T!==B&&T.traverseVisible(function(H){H.isLight&&H.layers.test(N.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights(M._useLegacyLights);const k=new Set;return T.traverse(function(H){const se=H.material;if(se)if(Array.isArray(se))for(let he=0;he<se.length;he++){const pe=se[he];rt(pe,B,H),k.add(pe)}else rt(se,B,H),k.add(se)}),y.pop(),p=null,k},this.compileAsync=function(T,N,B=null){const k=this.compile(T,N,B);return new Promise(H=>{function se(){if(k.forEach(function(he){Pe.get(he).currentProgram.isReady()&&k.delete(he)}),k.size===0){H(T);return}setTimeout(se,10)}Se.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let ut=null;function _t(T){ut&&ut(T)}function tt(){xe.stop()}function Re(){xe.start()}const xe=new Ch;xe.setAnimationLoop(_t),typeof self<"u"&&xe.setContext(self),this.setAnimationLoop=function(T){ut=T,Oe.setAnimationLoop(T),T===null?xe.stop():xe.start()},Oe.addEventListener("sessionstart",tt),Oe.addEventListener("sessionend",Re),this.render=function(T,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Oe.enabled===!0&&Oe.isPresenting===!0&&(Oe.cameraAutoUpdate===!0&&Oe.updateCamera(N),N=Oe.getCamera()),T.isScene===!0&&T.onBeforeRender(M,T,N,b),p=le.get(T,y.length),p.init(N),y.push(p),ue.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Ke.setFromProjectionMatrix(ue),te=this.localClippingEnabled,X=ie.init(this.clippingPlanes,te),_=me.get(T,m.length),_.init(),m.push(_),it(T,N,0,M.sortObjects),_.finish(),M.sortObjects===!0&&_.sort(z,J);const B=Oe.enabled===!1||Oe.isPresenting===!1||Oe.hasDepthSensing()===!1;B&&re.addToRenderList(_,T),this.info.render.frame++,X===!0&&ie.beginShadows();const k=p.state.shadowsArray;Ue.render(k,T,N),X===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=_.opaque,se=_.transmissive;if(p.setupLights(M._useLegacyLights),N.isArrayCamera){const he=N.cameras;if(se.length>0)for(let pe=0,we=he.length;pe<we;pe++){const Be=he[pe];ze(H,se,T,Be)}B&&re.render(T);for(let pe=0,we=he.length;pe<we;pe++){const Be=he[pe];fe(_,T,Be,Be.viewport)}}else se.length>0&&ze(H,se,T,N),B&&re.render(T),fe(_,T,N);b!==null&&(O.updateMultisampleRenderTarget(b),O.updateRenderTargetMipmap(b)),T.isScene===!0&&T.onAfterRender(M,T,N),Ne.resetDefaultState(),D=-1,x=null,y.pop(),y.length>0?(p=y[y.length-1],X===!0&&ie.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function it(T,N,B,k){if(T.visible===!1)return;if(T.layers.test(N.layers)){if(T.isGroup)B=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(N);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Ke.intersectsSprite(T)){k&&ne.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ue);const he=j.update(T),pe=T.material;pe.visible&&_.push(T,he,pe,B,ne.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Ke.intersectsObject(T))){const he=j.update(T),pe=T.material;if(k&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ne.copy(T.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),ne.copy(he.boundingSphere.center)),ne.applyMatrix4(T.matrixWorld).applyMatrix4(ue)),Array.isArray(pe)){const we=he.groups;for(let Be=0,Ae=we.length;Be<Ae;Be++){const Te=we[Be],ot=pe[Te.materialIndex];ot&&ot.visible&&_.push(T,he,ot,B,ne.z,Te)}}else pe.visible&&_.push(T,he,pe,B,ne.z,null)}}const se=T.children;for(let he=0,pe=se.length;he<pe;he++)it(se[he],N,B,k)}function fe(T,N,B,k){const H=T.opaque,se=T.transmissive,he=T.transparent;p.setupLightsView(B),X===!0&&ie.setGlobalState(M.clippingPlanes,B),k&&ge.viewport(v.copy(k)),H.length>0&&be(H,N,B),se.length>0&&be(se,N,B),he.length>0&&be(he,N,B),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function ze(T,N,B,k){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[k.id]===void 0&&(p.state.transmissionRenderTarget[k.id]=new Lr(1,1,{generateMipmaps:!0,type:Se.has("EXT_color_buffer_half_float")||Se.has("EXT_color_buffer_float")?Oo:Ki,minFilter:Mr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const se=p.state.transmissionRenderTarget[k.id],he=k.viewport||v;se.setSize(he.z,he.w);const pe=M.getRenderTarget();M.setRenderTarget(se),M.getClearColor(L),G=M.getClearAlpha(),G<1&&M.setClearColor(16777215,.5),M.clear();const we=M.toneMapping;M.toneMapping=Wi;const Be=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),p.setupLightsView(k),X===!0&&ie.setGlobalState(M.clippingPlanes,k),be(T,B,k),O.updateMultisampleRenderTarget(se),O.updateRenderTargetMipmap(se),Se.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let Te=0,ot=N.length;Te<ot;Te++){const Pt=N[Te],qt=Pt.object,nn=Pt.geometry,We=Pt.material,Fe=Pt.group;if(We.side===vi&&qt.layers.test(k.layers)){const Jn=We.side;We.side=mn,We.needsUpdate=!0,ke(qt,B,k,nn,We,Fe),We.side=Jn,We.needsUpdate=!0,Ae=!0}}Ae===!0&&(O.updateMultisampleRenderTarget(se),O.updateRenderTargetMipmap(se))}M.setRenderTarget(pe),M.setClearColor(L,G),Be!==void 0&&(k.viewport=Be),M.toneMapping=we}function be(T,N,B){const k=N.isScene===!0?N.overrideMaterial:null;for(let H=0,se=T.length;H<se;H++){const he=T[H],pe=he.object,we=he.geometry,Be=k===null?he.material:k,Ae=he.group;pe.layers.test(B.layers)&&ke(pe,N,B,we,Be,Ae)}}function ke(T,N,B,k,H,se){T.onBeforeRender(M,N,B,k,H,se),T.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),H.onBeforeRender(M,N,B,k,T,se),H.transparent===!0&&H.side===vi&&H.forceSinglePass===!1?(H.side=mn,H.needsUpdate=!0,M.renderBufferDirect(B,N,k,H,T,se),H.side=$i,H.needsUpdate=!0,M.renderBufferDirect(B,N,k,H,T,se),H.side=vi):M.renderBufferDirect(B,N,k,H,T,se),T.onAfterRender(M,N,B,k,H,se)}function Et(T,N,B){N.isScene!==!0&&(N=De);const k=Pe.get(T),H=p.state.lights,se=p.state.shadowsArray,he=H.state.version,pe=Q.getParameters(T,H.state,se,N,B),we=Q.getProgramCacheKey(pe);let Be=k.programs;k.environment=T.isMeshStandardMaterial?N.environment:null,k.fog=N.fog,k.envMap=(T.isMeshStandardMaterial?C:et).get(T.envMap||k.environment),k.envMapRotation=k.environment!==null&&T.envMap===null?N.environmentRotation:T.envMapRotation,Be===void 0&&(T.addEventListener("dispose",ae),Be=new Map,k.programs=Be);let Ae=Be.get(we);if(Ae!==void 0){if(k.currentProgram===Ae&&k.lightsStateVersion===he)return Mt(T,pe),Ae}else pe.uniforms=Q.getUniforms(T),T.onBuild(B,pe,M),T.onBeforeCompile(pe,M),Ae=Q.acquireProgram(pe,we),Be.set(we,Ae),k.uniforms=pe.uniforms;const Te=k.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Te.clippingPlanes=ie.uniform),Mt(T,pe),k.needsLights=gt(T),k.lightsStateVersion=he,k.needsLights&&(Te.ambientLightColor.value=H.state.ambient,Te.lightProbe.value=H.state.probe,Te.directionalLights.value=H.state.directional,Te.directionalLightShadows.value=H.state.directionalShadow,Te.spotLights.value=H.state.spot,Te.spotLightShadows.value=H.state.spotShadow,Te.rectAreaLights.value=H.state.rectArea,Te.ltc_1.value=H.state.rectAreaLTC1,Te.ltc_2.value=H.state.rectAreaLTC2,Te.pointLights.value=H.state.point,Te.pointLightShadows.value=H.state.pointShadow,Te.hemisphereLights.value=H.state.hemi,Te.directionalShadowMap.value=H.state.directionalShadowMap,Te.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Te.spotShadowMap.value=H.state.spotShadowMap,Te.spotLightMatrix.value=H.state.spotLightMatrix,Te.spotLightMap.value=H.state.spotLightMap,Te.pointShadowMap.value=H.state.pointShadowMap,Te.pointShadowMatrix.value=H.state.pointShadowMatrix),k.currentProgram=Ae,k.uniformsList=null,Ae}function Ze(T){if(T.uniformsList===null){const N=T.currentProgram.getUniforms();T.uniformsList=oo.seqWithValue(N.seq,T.uniforms)}return T.uniformsList}function Mt(T,N){const B=Pe.get(T);B.outputColorSpace=N.outputColorSpace,B.batching=N.batching,B.instancing=N.instancing,B.instancingColor=N.instancingColor,B.instancingMorph=N.instancingMorph,B.skinning=N.skinning,B.morphTargets=N.morphTargets,B.morphNormals=N.morphNormals,B.morphColors=N.morphColors,B.morphTargetsCount=N.morphTargetsCount,B.numClippingPlanes=N.numClippingPlanes,B.numIntersection=N.numClipIntersection,B.vertexAlphas=N.vertexAlphas,B.vertexTangents=N.vertexTangents,B.toneMapping=N.toneMapping}function zt(T,N,B,k,H){N.isScene!==!0&&(N=De),O.resetTextureUnits();const se=N.fog,he=k.isMeshStandardMaterial?N.environment:null,pe=b===null?M.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:tr,we=(k.isMeshStandardMaterial?C:et).get(k.envMap||he),Be=k.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ae=!!B.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Te=!!B.morphAttributes.position,ot=!!B.morphAttributes.normal,Pt=!!B.morphAttributes.color;let qt=Wi;k.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(qt=M.toneMapping);const nn=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,We=nn!==void 0?nn.length:0,Fe=Pe.get(k),Jn=p.state.lights;if(X===!0&&(te===!0||T!==x)){const Fn=T===x&&k.id===D;ie.setState(k,T,Fn)}let st=!1;k.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==Jn.state.version||Fe.outputColorSpace!==pe||H.isBatchedMesh&&Fe.batching===!1||!H.isBatchedMesh&&Fe.batching===!0||H.isInstancedMesh&&Fe.instancing===!1||!H.isInstancedMesh&&Fe.instancing===!0||H.isSkinnedMesh&&Fe.skinning===!1||!H.isSkinnedMesh&&Fe.skinning===!0||H.isInstancedMesh&&Fe.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Fe.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Fe.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Fe.instancingMorph===!1&&H.morphTexture!==null||Fe.envMap!==we||k.fog===!0&&Fe.fog!==se||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==ie.numPlanes||Fe.numIntersection!==ie.numIntersection)||Fe.vertexAlphas!==Be||Fe.vertexTangents!==Ae||Fe.morphTargets!==Te||Fe.morphNormals!==ot||Fe.morphColors!==Pt||Fe.toneMapping!==qt||Fe.morphTargetsCount!==We)&&(st=!0):(st=!0,Fe.__version=k.version);let ir=Fe.currentProgram;st===!0&&(ir=Et(k,N,H));let Zc=!1,Ps=!1,Xo=!1;const $t=ir.getUniforms(),Ri=Fe.uniforms;if(ge.useProgram(ir.program)&&(Zc=!0,Ps=!0,Xo=!0),k.id!==D&&(D=k.id,Ps=!0),Zc||x!==T){$t.setValue(F,"projectionMatrix",T.projectionMatrix),$t.setValue(F,"viewMatrix",T.matrixWorldInverse);const Fn=$t.map.cameraPosition;Fn!==void 0&&Fn.setValue(F,ne.setFromMatrixPosition(T.matrixWorld)),Ee.logarithmicDepthBuffer&&$t.setValue(F,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&$t.setValue(F,"isOrthographic",T.isOrthographicCamera===!0),x!==T&&(x=T,Ps=!0,Xo=!0)}if(H.isSkinnedMesh){$t.setOptional(F,H,"bindMatrix"),$t.setOptional(F,H,"bindMatrixInverse");const Fn=H.skeleton;Fn&&(Fn.boneTexture===null&&Fn.computeBoneTexture(),$t.setValue(F,"boneTexture",Fn.boneTexture,O))}H.isBatchedMesh&&($t.setOptional(F,H,"batchingTexture"),$t.setValue(F,"batchingTexture",H._matricesTexture,O));const Yo=B.morphAttributes;if((Yo.position!==void 0||Yo.normal!==void 0||Yo.color!==void 0)&&ye.update(H,B,ir),(Ps||Fe.receiveShadow!==H.receiveShadow)&&(Fe.receiveShadow=H.receiveShadow,$t.setValue(F,"receiveShadow",H.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Ri.envMap.value=we,Ri.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&N.environment!==null&&(Ri.envMapIntensity.value=N.environmentIntensity),Ps&&($t.setValue(F,"toneMappingExposure",M.toneMappingExposure),Fe.needsLights&&St(Ri,Xo),se&&k.fog===!0&&ee.refreshFogUniforms(Ri,se),ee.refreshMaterialUniforms(Ri,k,$,Z,p.state.transmissionRenderTarget[T.id]),oo.upload(F,Ze(Fe),Ri,O)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(oo.upload(F,Ze(Fe),Ri,O),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&$t.setValue(F,"center",H.center),$t.setValue(F,"modelViewMatrix",H.modelViewMatrix),$t.setValue(F,"normalMatrix",H.normalMatrix),$t.setValue(F,"modelMatrix",H.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Fn=k.uniformsGroups;for(let qo=0,ap=Fn.length;qo<ap;qo++){const jc=Fn[qo];Ve.update(jc,ir),Ve.bind(jc,ir)}}return ir}function St(T,N){T.ambientLightColor.needsUpdate=N,T.lightProbe.needsUpdate=N,T.directionalLights.needsUpdate=N,T.directionalLightShadows.needsUpdate=N,T.pointLights.needsUpdate=N,T.pointLightShadows.needsUpdate=N,T.spotLights.needsUpdate=N,T.spotLightShadows.needsUpdate=N,T.rectAreaLights.needsUpdate=N,T.hemisphereLights.needsUpdate=N}function gt(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(T,N,B){Pe.get(T.texture).__webglTexture=N,Pe.get(T.depthTexture).__webglTexture=B;const k=Pe.get(T);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=B===void 0,k.__autoAllocateDepthBuffer||Se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,N){const B=Pe.get(T);B.__webglFramebuffer=N,B.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(T,N=0,B=0){b=T,R=N,A=B;let k=!0,H=null,se=!1,he=!1;if(T){const we=Pe.get(T);we.__useDefaultFramebuffer!==void 0?(ge.bindFramebuffer(F.FRAMEBUFFER,null),k=!1):we.__webglFramebuffer===void 0?O.setupRenderTarget(T):we.__hasExternalTextures&&O.rebindTextures(T,Pe.get(T.texture).__webglTexture,Pe.get(T.depthTexture).__webglTexture);const Be=T.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(he=!0);const Ae=Pe.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ae[N])?H=Ae[N][B]:H=Ae[N],se=!0):T.samples>0&&O.useMultisampledRTT(T)===!1?H=Pe.get(T).__webglMultisampledFramebuffer:Array.isArray(Ae)?H=Ae[B]:H=Ae,v.copy(T.viewport),P.copy(T.scissor),U=T.scissorTest}else v.copy(w).multiplyScalar($).floor(),P.copy(oe).multiplyScalar($).floor(),U=Le;if(ge.bindFramebuffer(F.FRAMEBUFFER,H)&&k&&ge.drawBuffers(T,H),ge.viewport(v),ge.scissor(P),ge.setScissorTest(U),se){const we=Pe.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+N,we.__webglTexture,B)}else if(he){const we=Pe.get(T.texture),Be=N||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,we.__webglTexture,B||0,Be)}D=-1},this.readRenderTargetPixels=function(T,N,B,k,H,se,he){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pe=Pe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&he!==void 0&&(pe=pe[he]),pe){ge.bindFramebuffer(F.FRAMEBUFFER,pe);try{const we=T.texture,Be=we.format,Ae=we.type;if(!Ee.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ee.textureTypeReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=T.width-k&&B>=0&&B<=T.height-H&&F.readPixels(N,B,k,H,ve.convert(Be),ve.convert(Ae),se)}finally{const we=b!==null?Pe.get(b).__webglFramebuffer:null;ge.bindFramebuffer(F.FRAMEBUFFER,we)}}},this.copyFramebufferToTexture=function(T,N,B=0){const k=Math.pow(2,-B),H=Math.floor(N.image.width*k),se=Math.floor(N.image.height*k);O.setTexture2D(N,0),F.copyTexSubImage2D(F.TEXTURE_2D,B,0,0,T.x,T.y,H,se),ge.unbindTexture()},this.copyTextureToTexture=function(T,N,B,k=0){const H=N.image.width,se=N.image.height,he=ve.convert(B.format),pe=ve.convert(B.type);O.setTexture2D(B,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,B.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,B.unpackAlignment),N.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,k,T.x,T.y,H,se,he,pe,N.image.data):N.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,k,T.x,T.y,N.mipmaps[0].width,N.mipmaps[0].height,he,N.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,k,T.x,T.y,he,pe,N.image),k===0&&B.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),ge.unbindTexture()},this.copyTextureToTexture3D=function(T,N,B,k,H=0){const se=T.max.x-T.min.x,he=T.max.y-T.min.y,pe=T.max.z-T.min.z,we=ve.convert(k.format),Be=ve.convert(k.type);let Ae;if(k.isData3DTexture)O.setTexture3D(k,0),Ae=F.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)O.setTexture2DArray(k,0),Ae=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,k.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,k.unpackAlignment);const Te=F.getParameter(F.UNPACK_ROW_LENGTH),ot=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Pt=F.getParameter(F.UNPACK_SKIP_PIXELS),qt=F.getParameter(F.UNPACK_SKIP_ROWS),nn=F.getParameter(F.UNPACK_SKIP_IMAGES),We=B.isCompressedTexture?B.mipmaps[H]:B.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,We.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,We.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,T.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,T.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,T.min.z),B.isDataTexture||B.isData3DTexture?F.texSubImage3D(Ae,H,N.x,N.y,N.z,se,he,pe,we,Be,We.data):k.isCompressedArrayTexture?F.compressedTexSubImage3D(Ae,H,N.x,N.y,N.z,se,he,pe,we,We.data):F.texSubImage3D(Ae,H,N.x,N.y,N.z,se,he,pe,we,Be,We),F.pixelStorei(F.UNPACK_ROW_LENGTH,Te),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ot),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Pt),F.pixelStorei(F.UNPACK_SKIP_ROWS,qt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,nn),H===0&&k.generateMipmaps&&F.generateMipmap(Ae),ge.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?O.setTextureCube(T,0):T.isData3DTexture?O.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?O.setTexture2DArray(T,0):O.setTexture2D(T,0),ge.unbindTexture()},this.resetState=function(){R=0,A=0,b=null,ge.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===yc?"display-p3":"srgb",t.unpackColorSpace=dt.workingColorSpace===Fo?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Ux extends gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ti,this.environmentIntensity=1,this.environmentRotation=new Ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Oh extends Ma{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ft(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const xf=new It,Zl=new xh,Ya=new Bo,qa=new Y;class Ix extends gn{constructor(e=new wi,t=new Oh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ya.copy(n.boundingSphere),Ya.applyMatrix4(i),Ya.radius+=s,e.ray.intersectsSphere(Ya)===!1)return;xf.copy(i).invert(),Zl.copy(e.ray).applyMatrix4(xf);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const h=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=h,_=f;g<_;g++){const p=c.getX(g);qa.fromBufferAttribute(d,p),Mf(qa,p,l,i,e,t,this)}}else{const h=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=h,_=f;g<_;g++)qa.fromBufferAttribute(d,g),Mf(qa,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Mf(r,e,t,n,i,s,a){const o=Zl.distanceSqToPoint(r);if(o<t){const l=new Y;Zl.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sc);function Nx(){const r=document.getElementById("bg-canvas");if(!r)return;const e=new Dx({canvas:r,antialias:!0,alpha:!0});e.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.setSize(window.innerWidth,window.innerHeight);const t=new Ux,n=new kn(60,window.innerWidth/window.innerHeight,.1,1e3);n.position.z=5;const i=2e3,s=new wi,a=new Float32Array(i*3),o=new Float32Array(i*3),l=new Float32Array(i),c=[201/255,163/255,90/255],u=[193/255,127/255,89/255],d=[60/255,60/255,60/255],h=[110/255,110/255,110/255],f=new Uint8Array(i);for(let P=0;P<i;P++){a[P*3]=(Math.random()-.5)*20,a[P*3+1]=(Math.random()-.5)*20,a[P*3+2]=(Math.random()-.5)*15,f[P]=Math.random()<.6?0:1;const U=f[P]===0?c:u;o[P*3]=U[0],o[P*3+1]=U[1],o[P*3+2]=U[2],l[P]=Math.random()*2.5+.5}s.setAttribute("position",new Un(a,3)),s.setAttribute("color",new Un(o,3)),s.setAttribute("size",new Un(l,1));function g(P){const U=s.attributes.color.array;for(let L=0;L<i;L++){const G=P==="light"?f[L]===0?d:h:f[L]===0?c:u;U[L*3]=G[0],U[L*3+1]=G[1],U[L*3+2]=G[2]}s.attributes.color.needsUpdate=!0}g(document.documentElement.getAttribute("data-theme")||"dark"),new MutationObserver(()=>{g(document.documentElement.getAttribute("data-theme")||"dark")}).observe(document.documentElement,{attributeFilter:["data-theme"]});const _=new Oh({size:.04,vertexColors:!0,transparent:!0,opacity:.55,sizeAttenuation:!0}),p=new Ix(s,_);t.add(p);const m={x:0,y:0},y=.95,M=.12,S=10,R=10;let A=null,b=null;document.addEventListener("mousemove",P=>{if(A!==null){const U=(P.clientX-A)/window.innerWidth*12,L=-(P.clientY-b)/window.innerHeight*10;m.x+=U*.1,m.y+=L*.1}A=P.clientX,b=P.clientY});let D=window.scrollY;window.addEventListener("scroll",()=>{const P=window.scrollY-D;m.y+=P/window.innerHeight*10*.1,D=window.scrollY}),window.addEventListener("resize",()=>{n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),e.setSize(window.innerWidth,window.innerHeight)});let x=0;function v(){requestAnimationFrame(v),x+=8e-4,m.x*=y,m.y*=y,m.x=Math.max(-M,Math.min(M,m.x)),m.y=Math.max(-M,Math.min(M,m.y));const P=s.attributes.position.array;for(let U=0;U<i;U++)P[U*3]-=m.x,P[U*3+1]-=m.y,P[U*3+1]+=Math.sin(x*2+U*.01)*3e-4,P[U*3]>S&&(P[U*3]-=S*2),P[U*3]<-S&&(P[U*3]+=S*2),P[U*3+1]>R&&(P[U*3+1]-=R*2),P[U*3+1]<-R&&(P[U*3+1]+=R*2);s.attributes.position.needsUpdate=!0,p.rotation.y=x*.12,p.rotation.x=x*.06,e.render(t,n)}v()}function _i(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Fh(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var In={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ss={duration:.5,overwrite:!1,delay:0},Tc,Yt,yt,Wn=1e8,mt=1/Wn,jl=Math.PI*2,Ox=jl/4,Fx=0,Bh=Math.sqrt,Bx=Math.cos,zx=Math.sin,Gt=function(e){return typeof e=="string"},wt=function(e){return typeof e=="function"},bi=function(e){return typeof e=="number"},bc=function(e){return typeof e>"u"},ci=function(e){return typeof e=="object"},vn=function(e){return e!==!1},Ac=function(){return typeof window<"u"},$a=function(e){return wt(e)||Gt(e)},zh=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},tn=Array.isArray,kx=/random\([^)]+\)/g,Hx=/,\s*/g,Sf=/(?:-?\.?\d|\.)+/gi,kh=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ss=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,wl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Hh=/[+-]=-?[.\d]+/,Vx=/[^,'"\[\]\s]+/gi,Gx=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,bt,ei,Jl,wc,Nn={},To={},Vh,Gh=function(e){return(To=ys(e,Nn))&&yn},Rc=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},oa=function(e,t){return!t&&console.warn(e)},Wh=function(e,t){return e&&(Nn[e]=t)&&To&&(To[e]=t)||Nn},la=function(){return 0},Wx={suppressEvents:!0,isStart:!0,kill:!1},lo={suppressEvents:!0,kill:!1},Xx={suppressEvents:!0},Cc={},Xi=[],Ql={},Xh,wn={},Rl={},yf=30,co=[],Pc="",Lc=function(e){var t=e[0],n,i;if(ci(t)||wt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=co.length;i--&&!co[i].targetTest(t););n=co[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new md(e[i],n)))||e.splice(i,1);return e},Tr=function(e){return e._gsap||Lc(Xn(e))[0]._gsap},Yh=function(e,t,n){return(n=e[t])&&wt(n)?e[t]():bc(n)&&e.getAttribute&&e.getAttribute(t)||n},xn=function(e,t){return(e=e.split(",")).forEach(t)||e},Rt=function(e){return Math.round(e*1e5)/1e5||0},Tt=function(e){return Math.round(e*1e7)/1e7||0},fs=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Yx=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},bo=function(){var e=Xi.length,t=Xi.slice(0),n,i;for(Ql={},Xi.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Dc=function(e){return!!(e._initted||e._startAt||e.add)},qh=function(e,t,n,i){Xi.length&&!Yt&&bo(),e.render(t,n,i||!!(Yt&&t<0&&Dc(e))),Xi.length&&!Yt&&bo()},$h=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Vx).length<2?t:Gt(e)?e.trim():e},Kh=function(e){return e},On=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},qx=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},ys=function(e,t){for(var n in t)e[n]=t[n];return e},Ef=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=ci(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Ao=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},qs=function(e){var t=e.parent||bt,n=e.keyframes?qx(tn(e.keyframes)):On;if(vn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},$x=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Zh=function(e,t,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},Ho=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},ji=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},br=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Kx=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},ec=function(e,t,n,i){return e._startAt&&(Yt?e._startAt.revert(lo):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Zx=function r(e){return!e||e._ts&&r(e.parent)},Tf=function(e){return e._repeat?Es(e._tTime,e=e.duration()+e._rDelay)*e:0},Es=function(e,t){var n=Math.floor(e=Tt(e/t));return e&&n===e?n-1:n},wo=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Vo=function(e){return e._end=Tt(e._start+(e._tDur/Math.abs(e._ts||e._rts||mt)||0))},Go=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Tt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Vo(e),n._dirty||br(n,e)),e},jh=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=wo(e.rawTime(),t),(!t._dur||ya(0,t.totalDuration(),n)-t._tTime>mt)&&t.render(n,!0)),br(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-mt}},ri=function(e,t,n,i){return t.parent&&ji(t),t._start=Tt((bi(n)?n:n||e!==bt?zn(e,n,t):e._time)+t._delay),t._end=Tt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Zh(e,t,"_first","_last",e._sort?"_start":0),tc(t)||(e._recent=t),i||jh(e,t),e._ts<0&&Go(e,e._tTime),e},Jh=function(e,t){return(Nn.ScrollTrigger||Rc("scrollTrigger",t))&&Nn.ScrollTrigger.create(t,e)},Qh=function(e,t,n,i,s){if(Ic(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Yt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Xh!==Cn.frame)return Xi.push(e),e._lazy=[s,i],1},jx=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},tc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Jx=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&jx(e)&&!(!e._initted&&tc(e))||(e._ts<0||e._dp._ts<0)&&!tc(e))?0:1,o=e._rDelay,l=0,c,u,d;if(o&&e._repeat&&(l=ya(0,e._tDur,t),u=Es(l,o),e._yoyo&&u&1&&(a=1-a),u!==Es(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||Yt||i||e._zTime===mt||!t&&e._zTime){if(!e._initted&&Qh(e,t,i,n,l))return;for(d=e._zTime,e._zTime=t||(n?mt:0),n||(n=t&&!d),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&ec(e,t,n,!0),e._onUpdate&&!n&&Ln(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Ln(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&ji(e,1),!n&&!Yt&&(Ln(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Qx=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Ts=function(e,t,n,i){var s=e._repeat,a=Tt(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:Tt(a*(s+1)+e._rDelay*s):a,o>0&&!i&&Go(e,e._tTime=e._tDur*o),e.parent&&Vo(e),n||br(e.parent,e),e},bf=function(e){return e instanceof un?br(e):Ts(e,e._dur)},eM={_start:0,endTime:la,totalDuration:la},zn=function r(e,t,n){var i=e.labels,s=e._recent||eM,a=e.duration()>=Wn?s.endTime(!1):e._dur,o,l,c;return Gt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(tn(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},$s=function(e,t,n){var i=bi(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=vn(l.vars.inherit)&&l.parent;a.immediateRender=vn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new Ut(t[0],a,t[s+1])},nr=function(e,t){return e||e===0?t(e):t},ya=function(e,t,n){return n<e?e:n>t?t:n},Qt=function(e,t){return!Gt(e)||!(t=Gx.exec(e))?"":t[1]},tM=function(e,t,n){return nr(n,function(i){return ya(e,t,i)})},nc=[].slice,ed=function(e,t){return e&&ci(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&ci(e[0]))&&!e.nodeType&&e!==ei},nM=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return Gt(i)&&!t||ed(i,1)?(s=n).push.apply(s,Xn(i)):n.push(i)})||n},Xn=function(e,t,n){return yt&&!t&&yt.selector?yt.selector(e):Gt(e)&&!n&&(Jl||!bs())?nc.call((t||wc).querySelectorAll(e),0):tn(e)?nM(e,n):ed(e)?nc.call(e,0):e?[e]:[]},ic=function(e){return e=Xn(e)[0]||oa("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Xn(t,n.querySelectorAll?n:n===e?oa("Invalid scope")||wc.createElement("div"):e)}},td=function(e){return e.sort(function(){return .5-Math.random()})},nd=function(e){if(wt(e))return e;var t=ci(e)?e:{each:e},n=Ar(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,d=i;return Gt(i)?u=d={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],d=i[1]),function(h,f,g){var _=(g||t).length,p=a[_],m,y,M,S,R,A,b,D,x;if(!p){if(x=t.grid==="auto"?0:(t.grid||[1,Wn])[1],!x){for(b=-Wn;b<(b=g[x++].getBoundingClientRect().left)&&x<_;);x<_&&x--}for(p=a[_]=[],m=l?Math.min(x,_)*u-.5:i%x,y=x===Wn?0:l?_*d/x-.5:i/x|0,b=0,D=Wn,A=0;A<_;A++)M=A%x-m,S=y-(A/x|0),p[A]=R=c?Math.abs(c==="y"?S:M):Bh(M*M+S*S),R>b&&(b=R),R<D&&(D=R);i==="random"&&td(p),p.max=b-D,p.min=D,p.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(x>_?_-1:c?c==="y"?_/x:x:Math.max(x,_/x))||0)*(i==="edges"?-1:1),p.b=_<0?s-_:s,p.u=Qt(t.amount||t.each)||0,n=n&&_<0?hd(n):n}return _=(p[h]-p.min)/p.max||0,Tt(p.b+(n?n(_):_)*p.v)+p.u}},rc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Tt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(bi(n)?0:Qt(n))}},id=function(e,t){var n=tn(e),i,s;return!n&&ci(e)&&(i=n=e.radius||Wn,e.values?(e=Xn(e.values),(s=!bi(e[0]))&&(i*=i)):e=rc(e.increment)),nr(t,n?wt(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=Wn,u=0,d=e.length,h,f;d--;)s?(h=e[d].x-o,f=e[d].y-l,h=h*h+f*f):h=Math.abs(e[d]-o),h<c&&(c=h,u=d);return u=!i||c<=i?e[u]:a,s||u===a||bi(a)?u:u+Qt(a)}:rc(e))},rd=function(e,t,n,i){return nr(tn(e)?!t:n===!0?!!(n=0):!i,function(){return tn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},iM=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},rM=function(e,t){return function(n){return e(parseFloat(n))+(t||Qt(n))}},sM=function(e,t,n){return ad(e,t,0,1,n)},sd=function(e,t,n){return nr(n,function(i){return e[~~t(i)]})},aM=function r(e,t,n){var i=t-e;return tn(e)?sd(e,r(0,e.length),t):nr(n,function(s){return(i+(s-e)%i)%i+e})},oM=function r(e,t,n){var i=t-e,s=i*2;return tn(e)?sd(e,r(0,e.length-1),t):nr(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},ca=function(e){return e.replace(kx,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(Hx);return rd(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},ad=function(e,t,n,i,s){var a=t-e,o=i-n;return nr(s,function(l){return n+((l-e)/a*o||0)})},lM=function r(e,t,n,i){var s=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!s){var a=Gt(e),o={},l,c,u,d,h;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(tn(e)&&!tn(t)){for(u=[],d=e.length,h=d-2,c=1;c<d;c++)u.push(r(e[c-1],e[c]));d--,s=function(g){g*=d;var _=Math.min(h,~~g);return u[_](g-_)},n=t}else i||(e=ys(tn(e)?[]:{},e));if(!u){for(l in t)Uc.call(o,e,l,"get",t[l]);s=function(g){return Fc(g,o)||(a?e.p:e)}}}return nr(n,s)},Af=function(e,t,n){var i=e.labels,s=Wn,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},Ln=function(e,t,n){var i=e.vars,s=i[t],a=yt,o=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&Xi.length&&bo(),o&&(yt=o),u=l?s.apply(c,l):s.call(c),yt=a,u},ks=function(e){return ji(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Yt),e.progress()<1&&Ln(e,"onInterrupt"),e},as,od=[],ld=function(e){if(e)if(e=!e.name&&e.default||e,Ac()||e.headless){var t=e.name,n=wt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:la,render:Fc,add:Uc,kill:TM,modifier:EM,rawVars:0},a={targetTest:0,get:0,getSetter:Oc,aliases:{},register:0};if(bs(),e!==i){if(wn[t])return;On(i,On(Ao(e,s),a)),ys(i.prototype,ys(s,Ao(e,a))),wn[i.prop=t]=i,e.targetTest&&(co.push(i),Cc[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Wh(t,i),e.register&&e.register(yn,i,Mn)}else od.push(e)},pt=255,Hs={aqua:[0,pt,pt],lime:[0,pt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,pt],navy:[0,0,128],white:[pt,pt,pt],olive:[128,128,0],yellow:[pt,pt,0],orange:[pt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[pt,0,0],pink:[pt,192,203],cyan:[0,pt,pt],transparent:[pt,pt,pt,0]},Cl=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*pt+.5|0},cd=function(e,t,n){var i=e?bi(e)?[e>>16,e>>8&pt,e&pt]:0:Hs.black,s,a,o,l,c,u,d,h,f,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Hs[e])i=Hs[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&pt,i&pt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&pt,e&pt]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(Sf),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=Cl(l+1/3,s,a),i[1]=Cl(l,s,a),i[2]=Cl(l-1/3,s,a);else if(~e.indexOf("="))return i=e.match(kh),n&&i.length<4&&(i[3]=1),i}else i=e.match(Sf)||Hs.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/pt,a=i[1]/pt,o=i[2]/pt,d=Math.max(s,a,o),h=Math.min(s,a,o),u=(d+h)/2,d===h?l=c=0:(f=d-h,c=u>.5?f/(2-d-h):f/(d+h),l=d===s?(a-o)/f+(a<o?6:0):d===a?(o-s)/f+2:(s-a)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},ud=function(e){var t=[],n=[],i=-1;return e.split(Yi).forEach(function(s){var a=s.match(ss)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},wf=function(e,t,n){var i="",s=(e+i).match(Yi),a=t?"hsla(":"rgba(",o=0,l,c,u,d;if(!s)return e;if(s=s.map(function(h){return(h=cd(h,t,1))&&a+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=ud(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Yi,"1").split(ss),d=c.length-1;o<d;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(Yi),d=c.length-1;o<d;o++)i+=c[o]+s[o];return i+c[d]},Yi=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Hs)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),cM=/hsl[a]?\(/,fd=function(e){var t=e.join(" "),n;if(Yi.lastIndex=0,Yi.test(t))return n=cM.test(t),e[1]=wf(e[1],n),e[0]=wf(e[0],n,ud(e[1])),!0},ua,Cn=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,u,d,h,f,g=function _(p){var m=r()-i,y=p===!0,M,S,R,A;if((m>e||m<0)&&(n+=m-t),i+=m,R=i-n,M=R-a,(M>0||y)&&(A=++d.frame,h=R-d.time*1e3,d.time=R=R/1e3,a+=M+(M>=s?4:s-M),S=1),y||(l=c(_)),S)for(f=0;f<o.length;f++)o[f](R,h,A,p)};return d={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return h/(1e3/(p||60))},wake:function(){Vh&&(!Jl&&Ac()&&(ei=Jl=window,wc=ei.document||{},Nn.gsap=yn,(ei.gsapVersions||(ei.gsapVersions=[])).push(yn.version),Gh(To||ei.GreenSockGlobals||!ei.gsap&&ei||{}),od.forEach(ld)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=u||function(p){return setTimeout(p,a-d.time*1e3+1|0)},ua=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),ua=0,c=la},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){s=1e3/(p||240),a=d.time*1e3+s},add:function(p,m,y){var M=m?function(S,R,A,b){p(S,R,A,b),d.remove(M)}:p;return d.remove(p),o[y?"unshift":"push"](M),bs(),M},remove:function(p,m){~(m=o.indexOf(p))&&o.splice(m,1)&&f>=m&&f--},_listeners:o},d}(),bs=function(){return!ua&&Cn.wake()},nt={},uM=/^[\d.\-M][\d.\-,\s]/,fM=/["']/g,hM=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(fM,"").trim():+c,i=l.substr(o+1).trim();return t},dM=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},pM=function(e){var t=(e+"").split("("),n=nt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[hM(t[1])]:dM(e).split(",").map($h)):nt._CE&&uM.test(e)?nt._CE("",e):n},hd=function(e){return function(t){return 1-e(1-t)}},dd=function r(e,t){for(var n=e._first,i;n;)n instanceof un?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Ar=function(e,t){return e&&(wt(e)?e:nt[e]||pM(e))||t},Nr=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return xn(e,function(o){nt[o]=Nn[o]=s,nt[a=o.toLowerCase()]=n;for(var l in s)nt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=nt[o+"."+l]=s[l]}),s},pd=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Pl=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/jl*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*zx((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:pd(o);return s=jl/s,l.config=function(c,u){return r(e,c,u)},l},Ll=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:pd(n);return i.config=function(s){return r(e,s)},i};xn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Nr(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});nt.Linear.easeNone=nt.none=nt.Linear.easeIn;Nr("Elastic",Pl("in"),Pl("out"),Pl());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};Nr("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Nr("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Nr("Circ",function(r){return-(Bh(1-r*r)-1)});Nr("Sine",function(r){return r===1?1:-Bx(r*Ox)+1});Nr("Back",Ll("in"),Ll("out"),Ll());nt.SteppedEase=nt.steps=Nn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-mt;return function(o){return((i*ya(0,a,o)|0)+s)*n}}};Ss.ease=nt["quad.out"];xn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Pc+=r+","+r+"Params,"});var md=function(e,t){this.id=Fx++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Yh,this.set=t?t.getSetter:Oc},fa=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ts(this,+t.duration,1,1),this.data=t.data,yt&&(this._ctx=yt,yt.data.push(this)),ua||Cn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Ts(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(bs(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Go(this,n),!s._dp||s.parent||jh(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&ri(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===mt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),qh(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Tf(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Tf(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Es(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-mt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?wo(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-mt?0:this._rts,this.totalTime(ya(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),Vo(this),Kx(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(bs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==mt&&(this._tTime-=mt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Tt(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&ri(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(vn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?wo(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Xx);var i=Yt;return Yt=n,Dc(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Yt=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,bf(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,bf(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(zn(this,n),vn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,vn(i)),this._dur||(this._zTime=-mt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-mt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-mt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-mt)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=wt(n)?n:Kh,l=function(){var u=i.then;i.then=null,s&&s(),wt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=u),a(o),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){ks(this)},r}();On(fa.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-mt,_prom:0,_ps:!1,_rts:1});var un=function(r){Fh(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=vn(n.sortChildren),bt&&ri(n.parent||bt,_i(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Jh(_i(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return $s(0,arguments,this),this},t.from=function(i,s,a){return $s(1,arguments,this),this},t.fromTo=function(i,s,a,o){return $s(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,qs(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Ut(i,s,zn(this,a),1),this},t.call=function(i,s,a){return ri(this,Ut.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new Ut(i,a,zn(this,l)),this},t.staggerFrom=function(i,s,a,o,l,c,u){return a.runBackwards=1,qs(a).immediateRender=vn(a.immediateRender),this.staggerTo(i,s,a,o,l,c,u)},t.staggerFromTo=function(i,s,a,o,l,c,u,d){return o.startAt=a,qs(o).immediateRender=vn(o.immediateRender),this.staggerTo(i,s,o,l,c,u,d)},t.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Tt(i),d=this._zTime<0!=i<0&&(this._initted||!c),h,f,g,_,p,m,y,M,S,R,A,b;if(this!==bt&&u>l&&i>=0&&(u=l),u!==this._tTime||a||d){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),h=u,S=this._start,M=this._ts,m=!M,d&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,a);if(h=Tt(u%p),u===l?(_=this._repeat,h=c):(R=Tt(u/p),_=~~R,_&&_===R&&(h=c,_--),h>c&&(h=c)),R=Es(this._tTime,p),!o&&this._tTime&&R!==_&&this._tTime-R*p-this._dur<=0&&(R=_),A&&_&1&&(h=c-h,b=1),_!==R&&!this._lock){var D=A&&R&1,x=D===(A&&_&1);if(_<R&&(D=!D),o=D?0:u%c?c:u,this._lock=1,this.render(o||(b?0:Tt(_*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Ln(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1,R=_),o&&o!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,x&&(this._lock=2,o=D?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;dd(this,b)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=Qx(this,Tt(o),Tt(h)),y&&(u-=h-(h=y._start))),this._tTime=u,this._time=h,this._act=!M,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&u&&c&&!s&&!R&&(Ln(this,"onStart"),this._tTime!==u))return this;if(h>=o&&i>=0)for(f=this._first;f;){if(g=f._next,(f._act||h>=f._start)&&f._ts&&y!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(h-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(h-f._start)*f._ts,s,a),h!==this._time||!this._ts&&!m){y=0,g&&(u+=this._zTime=-mt);break}}f=g}else{f=this._last;for(var v=i<0?i:h;f;){if(g=f._prev,(f._act||v<=f._end)&&f._ts&&y!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(v-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(v-f._start)*f._ts,s,a||Yt&&Dc(f)),h!==this._time||!this._ts&&!m){y=0,g&&(u+=this._zTime=v?-mt:mt);break}}f=g}}if(y&&!s&&(this.pause(),y.render(h>=o?0:-mt)._zTime=h>=o?1:-1,this._ts))return this._start=S,Vo(this),this.render(i,s,a);this._onUpdate&&!s&&Ln(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(S===this._start||Math.abs(M)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&ji(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(Ln(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(bi(s)||(s=zn(this,s,i)),!(i instanceof fa)){if(tn(i))return i.forEach(function(o){return a.add(o,s)}),this;if(Gt(i))return this.addLabel(i,s);if(wt(i))i=Ut.delayedCall(0,i);else return this}return this!==i?ri(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-Wn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Ut?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return Gt(i)?this.removeLabel(i):wt(i)?this.killTweensOf(i):(i.parent===this&&Ho(this,i),i===this._recent&&(this._recent=this._last),br(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Tt(Cn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=zn(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=Ut.delayedCall(0,s||la,a);return o.data="isPause",this._hasPause=1,ri(this,o,zn(this,i))},t.removePause=function(i){var s=this._first;for(i=zn(this,i);s;)s._start===i&&s.data==="isPause"&&ji(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)Bi!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=Xn(i),l=this._first,c=bi(s),u;l;)l instanceof Ut?Yx(l._targets,o)&&(c?(!Bi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=zn(a,i),l=s,c=l.startAt,u=l.onStart,d=l.onStartParams,h=l.immediateRender,f,g=Ut.to(a,On({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||mt,onStart:function(){if(a.pause(),!f){var p=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==p&&Ts(g,p,0,1).render(g._time,!0,!0),f=1}u&&u.apply(g,d||[])}},s));return h?g.render(0):g},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,On({startAt:{time:zn(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Af(this,zn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Af(this,zn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+mt)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=Tt(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return br(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),br(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,l=Wn,c,u,d;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(d=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,ri(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!d&&!a._dp||d&&d.smoothChildTiming)&&(a._start+=Tt(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Ts(a,a===bt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(bt._ts&&(qh(bt,wo(i,bt)),Xh=Cn.frame),Cn.frame>=yf){yf+=In.autoSleep||120;var s=bt._first;if((!s||!s._ts)&&In.autoSleep&&Cn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Cn.sleep()}}},e}(fa);On(un.prototype,{_lock:0,_hasPause:0,_forcing:0});var mM=function(e,t,n,i,s,a,o){var l=new Mn(this._pt,e,t,0,1,Sd,null,s),c=0,u=0,d,h,f,g,_,p,m,y;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=ca(i)),a&&(y=[n,i],a(y,e,t),n=y[0],i=y[1]),h=n.match(wl)||[];d=wl.exec(i);)g=d[0],_=i.substring(c,d.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),g!==h[u++]&&(p=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:p,c:g.charAt(1)==="="?fs(p,g)-p:parseFloat(g)-p,m:f&&f<4?Math.round:0},c=wl.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(Hh.test(i)||m)&&(l.e=0),this._pt=l,l},Uc=function(e,t,n,i,s,a,o,l,c,u){wt(i)&&(i=i(s||0,e,a));var d=e[t],h=n!=="get"?n:wt(d)?c?e[t.indexOf("set")||!wt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():d,f=wt(d)?c?MM:xd:Nc,g;if(Gt(i)&&(~i.indexOf("random(")&&(i=ca(i)),i.charAt(1)==="="&&(g=fs(h,i)+(Qt(h)||0),(g||g===0)&&(i=g))),!u||h!==i||sc)return!isNaN(h*i)&&i!==""?(g=new Mn(this._pt,e,t,+h||0,i-(h||0),typeof d=="boolean"?yM:Md,0,f),c&&(g.fp=c),o&&g.modifier(o,this,e),this._pt=g):(!d&&!(t in e)&&Rc(t,i),mM.call(this,e,t,h,i,f,l||In.stringFilter,c))},_M=function(e,t,n,i,s){if(wt(e)&&(e=Ks(e,s,t,n,i)),!ci(e)||e.style&&e.nodeType||tn(e)||zh(e))return Gt(e)?Ks(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=Ks(e[o],s,t,n,i);return a},_d=function(e,t,n,i,s,a){var o,l,c,u;if(wn[e]&&(o=new wn[e]).init(s,o.rawVars?t[e]:_M(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new Mn(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==as))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},Bi,sc,Ic=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,d=i.yoyoEase,h=i.keyframes,f=i.autoRevert,g=e._dur,_=e._startAt,p=e._targets,m=e.parent,y=m&&m.data==="nested"?m.vars.targets:p,M=e._overwrite==="auto"&&!Tc,S=e.timeline,R,A,b,D,x,v,P,U,L,G,W,Z,$;if(S&&(!h||!s)&&(s="none"),e._ease=Ar(s,Ss.ease),e._yEase=d?hd(Ar(d===!0?s:d,Ss.ease)):0,d&&e._yoyo&&!e._repeat&&(d=e._yEase,e._yEase=e._ease,e._ease=d),e._from=!S&&!!i.runBackwards,!S||h&&!i.stagger){if(U=p[0]?Tr(p[0]).harness:0,Z=U&&i[U.prop],R=Ao(i,Cc),_&&(_._zTime<0&&_.progress(1),t<0&&u&&o&&!f?_.render(-1,!0):_.revert(u&&g?lo:Wx),_._lazy=0),a){if(ji(e._startAt=Ut.set(p,On({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&vn(l),startAt:null,delay:0,onUpdate:c&&function(){return Ln(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Yt||!o&&!f)&&e._startAt.revert(lo),o&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(o=!1),b=On({overwrite:!1,data:"isFromStart",lazy:o&&!_&&vn(l),immediateRender:o,stagger:0,parent:m},R),Z&&(b[U.prop]=Z),ji(e._startAt=Ut.set(p,b)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Yt?e._startAt.revert(lo):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,mt,mt);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&vn(l)||l&&!g,A=0;A<p.length;A++){if(x=p[A],P=x._gsap||Lc(p)[A]._gsap,e._ptLookup[A]=G={},Ql[P.id]&&Xi.length&&bo(),W=y===p?A:y.indexOf(x),U&&(L=new U).init(x,Z||R,e,W,y)!==!1&&(e._pt=D=new Mn(e._pt,x,L.name,0,1,L.render,L,0,L.priority),L._props.forEach(function(z){G[z]=D}),L.priority&&(v=1)),!U||Z)for(b in R)wn[b]&&(L=_d(b,R,e,W,x,y))?L.priority&&(v=1):G[b]=D=Uc.call(e,x,b,"get",R[b],W,y,0,i.stringFilter);e._op&&e._op[A]&&e.kill(x,e._op[A]),M&&e._pt&&(Bi=e,bt.killTweensOf(x,G,e.globalTime(t)),$=!e.parent,Bi=0),e._pt&&l&&(Ql[P.id]=1)}v&&yd(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!$,h&&t<=0&&S.render(Wn,!0,!0)},gM=function(e,t,n,i,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,d,h,f;if(!c)for(c=e._ptCache[t]=[],h=e._ptLookup,f=e._targets.length;f--;){if(u=h[f][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return sc=1,e.vars[t]="+=0",Ic(e,o),sc=0,l?oa(t+" not eligible for reset"):1;c.push(u)}for(f=c.length;f--;)d=c[f],u=d._pt||d,u.s=(i||i===0)&&!s?i:u.s+(i||0)+a*u.c,u.c=n-u.s,d.e&&(d.e=Rt(n)+Qt(d.e)),d.b&&(d.b=u.s+Qt(d.b))},vM=function(e,t){var n=e[0]?Tr(e[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return t;s=ys({},t);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},xM=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(tn(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},Ks=function(e,t,n,i,s){return wt(e)?e.call(t,n,i,s):Gt(e)&&~e.indexOf("random(")?ca(e):e},gd=Pc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",vd={};xn(gd+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return vd[r]=1});var Ut=function(r){Fh(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:qs(i))||this;var l=o.vars,c=l.duration,u=l.delay,d=l.immediateRender,h=l.stagger,f=l.overwrite,g=l.keyframes,_=l.defaults,p=l.scrollTrigger,m=l.yoyoEase,y=i.parent||bt,M=(tn(n)||zh(n)?bi(n[0]):"length"in i)?[n]:Xn(n),S,R,A,b,D,x,v,P;if(o._targets=M.length?Lc(M):oa("GSAP target "+n+" not found. https://gsap.com",!In.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,g||h||$a(c)||$a(u)){if(i=o.vars,S=o.timeline=new un({data:"nested",defaults:_||{},targets:y&&y.data==="nested"?y.vars.targets:M}),S.kill(),S.parent=S._dp=_i(o),S._start=0,h||$a(c)||$a(u)){if(b=M.length,v=h&&nd(h),ci(h))for(D in h)~gd.indexOf(D)&&(P||(P={}),P[D]=h[D]);for(R=0;R<b;R++)A=Ao(i,vd),A.stagger=0,m&&(A.yoyoEase=m),P&&ys(A,P),x=M[R],A.duration=+Ks(c,_i(o),R,x,M),A.delay=(+Ks(u,_i(o),R,x,M)||0)-o._delay,!h&&b===1&&A.delay&&(o._delay=u=A.delay,o._start+=u,A.delay=0),S.to(x,A,v?v(R,x,M):0),S._ease=nt.none;S.duration()?c=u=0:o.timeline=0}else if(g){qs(On(S.vars.defaults,{ease:"none"})),S._ease=Ar(g.ease||i.ease||"none");var U=0,L,G,W;if(tn(g))g.forEach(function(Z){return S.to(M,Z,">")}),S.duration();else{A={};for(D in g)D==="ease"||D==="easeEach"||xM(D,g[D],A,g.easeEach);for(D in A)for(L=A[D].sort(function(Z,$){return Z.t-$.t}),U=0,R=0;R<L.length;R++)G=L[R],W={ease:G.e,duration:(G.t-(R?L[R-1].t:0))/100*c},W[D]=G.v,S.to(M,W,U),U+=W.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||o.duration(c=S.duration())}else o.timeline=0;return f===!0&&!Tc&&(Bi=_i(o),bt.killTweensOf(M),Bi=0),ri(y,_i(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(d||!c&&!g&&o._start===Tt(y._time)&&vn(d)&&Zx(_i(o))&&y.data!=="nested")&&(o._tTime=-mt,o.render(Math.max(0,-u)||0)),p&&Jh(_i(o),p),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,d=i>l-mt&&!u?l:i<mt?0:i,h,f,g,_,p,m,y,M,S;if(!c)Jx(this,i,s,a);else if(d!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=d,M=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,a);if(h=Tt(d%_),d===l?(g=this._repeat,h=c):(p=Tt(d/_),g=~~p,g&&g===p?(h=c,g--):h>c&&(h=c)),m=this._yoyo&&g&1,m&&(S=this._yEase,h=c-h),p=Es(this._tTime,_),h===o&&!a&&this._initted&&g===p)return this._tTime=d,this;g!==p&&(M&&this._yEase&&dd(M,m),this.vars.repeatRefresh&&!m&&!this._lock&&h!==_&&this._initted&&(this._lock=a=1,this.render(Tt(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(Qh(this,u?i:h,a,s,d))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==p))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._tTime=d,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(S||this._ease)(h/c),this._from&&(this.ratio=y=1-y),!o&&d&&!s&&!p&&(Ln(this,"onStart"),this._tTime!==d))return this;for(f=this._pt;f;)f.r(y,f.d),f=f._next;M&&M.render(i<0?i:M._dur*M._ease(h/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&ec(this,i,s,a),Ln(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!s&&this.parent&&Ln(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&ec(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&ji(this,1),!s&&!(u&&!o)&&(d||o||m)&&(Ln(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o,l){ua||Cn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Ic(this,c),u=this._ease(c/this._dur),gM(this,i,s,a,o,u,c,l)?this.resetTo(i,s,a,o,1):(Go(this,0),this.parent||Zh(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ks(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Yt),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Bi&&Bi.vars.overwrite!==!0)._first||ks(this),this.parent&&a!==this.timeline.totalDuration()&&Ts(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?Xn(i):o,c=this._ptLookup,u=this._pt,d,h,f,g,_,p,m;if((!s||s==="all")&&$x(o,l))return s==="all"&&(this._pt=0),ks(this);for(d=this._op=this._op||[],s!=="all"&&(Gt(s)&&(_={},xn(s,function(y){return _[y]=1}),s=_),s=vM(o,s)),m=o.length;m--;)if(~l.indexOf(o[m])){h=c[m],s==="all"?(d[m]=s,g=h,f={}):(f=d[m]=d[m]||{},g=s);for(_ in g)p=h&&h[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&Ho(this,p,"_pt"),delete h[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&u&&ks(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return $s(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return $s(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return bt.killTweensOf(i,s,a)},e}(fa);On(Ut.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});xn("staggerTo,staggerFrom,staggerFromTo",function(r){Ut[r]=function(){var e=new un,t=nc.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Nc=function(e,t,n){return e[t]=n},xd=function(e,t,n){return e[t](n)},MM=function(e,t,n,i){return e[t](i.fp,n)},SM=function(e,t,n){return e.setAttribute(t,n)},Oc=function(e,t){return wt(e[t])?xd:bc(e[t])&&e.setAttribute?SM:Nc},Md=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},yM=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Sd=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Fc=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},EM=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},TM=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Ho(this,t,"_pt"):t.dep||(n=1),t=i;return!n},bM=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},yd=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},Mn=function(){function r(t,n,i,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||Md,this.d=l||this,this.set=c||Nc,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=bM,this.m=n,this.mt=s,this.tween=i},r}();xn(Pc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Cc[r]=1});Nn.TweenMax=Nn.TweenLite=Ut;Nn.TimelineLite=Nn.TimelineMax=un;bt=new un({sortChildren:!1,defaults:Ss,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});In.stringFilter=fd;var wr=[],uo={},AM=[],Rf=0,wM=0,Dl=function(e){return(uo[e]||AM).map(function(t){return t()})},ac=function(){var e=Date.now(),t=[];e-Rf>2&&(Dl("matchMediaInit"),wr.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=ei.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),Dl("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Rf=e,Dl("matchMedia"))},Ed=function(){function r(t,n){this.selector=n&&ic(n),this.data=[],this._r=[],this.isReverted=!1,this.id=wM++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){wt(n)&&(s=i,i=n,n=wt);var a=this,o=function(){var c=yt,u=a.selector,d;return c&&c!==a&&c.data.push(a),s&&(a.selector=ic(s)),yt=a,d=i.apply(a,arguments),wt(d)&&a._r.push(d),yt=c,a.selector=u,a.isReverted=!1,d};return a.last=o,n===wt?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=yt;yt=null,n(this),yt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Ut&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,d){return d.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof un?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Ut)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=wr.length;a--;)wr[a].id===this.id&&wr.splice(a,1)},e.revert=function(n){this.kill(n||{})},r}(),RM=function(){function r(t){this.contexts=[],this.scope=t,yt&&yt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){ci(n)||(n={matches:n});var a=new Ed(0,s||this.scope),o=a.conditions={},l,c,u;yt&&!a.selector&&(a.selector=yt.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=ei.matchMedia(n[c]),l&&(wr.indexOf(a)<0&&wr.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(ac):l.addEventListener("change",ac)));return u&&i(a,function(d){return a.add(null,d)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),Ro={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return ld(i)})},timeline:function(e){return new un(e)},getTweensOf:function(e,t){return bt.getTweensOf(e,t)},getProperty:function(e,t,n,i){Gt(e)&&(e=Xn(e)[0]);var s=Tr(e||{}).get,a=n?Kh:$h;return n==="native"&&(n=""),e&&(t?a((wn[t]&&wn[t].get||s)(e,t,n,i)):function(o,l,c){return a((wn[o]&&wn[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=Xn(e),e.length>1){var i=e.map(function(u){return yn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var d=s;d--;)i[d](u)}}e=e[0]||{};var a=wn[t],o=Tr(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var d=new a;as._pt=0,d.init(e,n?u+n:u,as,0,[e]),d.render(1,d),as._pt&&Fc(1,as)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,s=yn.to(e,On((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return bt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Ar(e.ease,Ss.ease)),Ef(Ss,e||{})},config:function(e){return Ef(In,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!wn[o]&&!Nn[o]&&oa(t+" effect requires "+o+" plugin.")}),Rl[t]=function(o,l,c){return n(Xn(o),On(l||{},s),c)},a&&(un.prototype[t]=function(o,l,c){return this.add(Rl[t](o,ci(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){nt[e]=Ar(t)},parseEase:function(e,t){return arguments.length?Ar(e,t):nt},getById:function(e){return bt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new un(e),i,s;for(n.smoothChildTiming=vn(e.smoothChildTiming),bt.remove(n),n._dp=0,n._time=n._tTime=bt._time,i=bt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Ut&&i.vars.onComplete===i._targets[0]))&&ri(n,i,i._start-i._delay),i=s;return ri(bt,n,0),n},context:function(e,t){return e?new Ed(e,t):yt},matchMedia:function(e){return new RM(e)},matchMediaRefresh:function(){return wr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||ac()},addEventListener:function(e,t){var n=uo[e]||(uo[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=uo[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:aM,wrapYoyo:oM,distribute:nd,random:rd,snap:id,normalize:sM,getUnit:Qt,clamp:tM,splitColor:cd,toArray:Xn,selector:ic,mapRange:ad,pipe:iM,unitize:rM,interpolate:lM,shuffle:td},install:Gh,effects:Rl,ticker:Cn,updateRoot:un.updateRoot,plugins:wn,globalTimeline:bt,core:{PropTween:Mn,globals:Wh,Tween:Ut,Timeline:un,Animation:fa,getCache:Tr,_removeLinkedListItem:Ho,reverting:function(){return Yt},context:function(e){return e&&yt&&(yt.data.push(e),e._ctx=yt),yt},suppressOverwrites:function(e){return Tc=e}}};xn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Ro[r]=Ut[r]});Cn.add(un.updateRoot);as=Ro.to({},{duration:0});var CM=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},PM=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=CM(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},Ul=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(Gt(s)&&(l={},xn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}PM(o,s)}}}},yn=Ro.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)Yt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Ul("roundProps",rc),Ul("modifiers"),Ul("snap",id))||Ro;Ut.version=un.version=yn.version="3.14.2";Vh=1;Ac()&&bs();nt.Power0;nt.Power1;nt.Power2;nt.Power3;nt.Power4;nt.Linear;nt.Quad;nt.Cubic;nt.Quart;nt.Quint;nt.Strong;nt.Elastic;nt.Back;nt.SteppedEase;nt.Bounce;nt.Sine;nt.Expo;nt.Circ;/*!
 * CSSPlugin 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Cf,zi,hs,Bc,Sr,Pf,zc,LM=function(){return typeof window<"u"},Ai={},pr=180/Math.PI,ds=Math.PI/180,Qr=Math.atan2,Lf=1e8,kc=/([A-Z])/g,DM=/(left|right|width|margin|padding|x)/i,UM=/[\s,\(]\S/,ai={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},oc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},IM=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},NM=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},OM=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},FM=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Td=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},bd=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},BM=function(e,t,n){return e.style[t]=n},zM=function(e,t,n){return e.style.setProperty(t,n)},kM=function(e,t,n){return e._gsap[t]=n},HM=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},VM=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},GM=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},At="transform",Sn=At+"Origin",WM=function r(e,t){var n=this,i=this.target,s=i.style,a=i._gsap;if(e in Ai&&s){if(this.tfm=this.tfm||{},e!=="transform")e=ai[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=gi(i,o)}):this.tfm[e]=a.x?a[e]:gi(i,e),e===Sn&&(this.tfm.zOrigin=a.zOrigin);else return ai.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(At)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Sn,t,"")),e=At}(s||t)&&this.props.push(e,t,s[e])},Ad=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},XM=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(kc,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=zc(),(!s||!s.isStart)&&!n[At]&&(Ad(n),i.zOrigin&&n[Sn]&&(n[Sn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},wd=function(e,t){var n={target:e,props:[],revert:XM,save:WM};return e._gsap||yn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},Rd,lc=function(e,t){var n=zi.createElementNS?zi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):zi.createElement(e);return n&&n.style?n:zi.createElement(e)},Dn=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(kc,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,As(t)||t,1)||""},Df="O,Moz,ms,Ms,Webkit".split(","),As=function(e,t,n){var i=t||Sr,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Df[a]+e in s););return a<0?null:(a===3?"ms":a>=0?Df[a]:"")+e},cc=function(){LM()&&window.document&&(Cf=window,zi=Cf.document,hs=zi.documentElement,Sr=lc("div")||{style:{}},lc("div"),At=As(At),Sn=At+"Origin",Sr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Rd=!!As("perspective"),zc=yn.core.reverting,Bc=1)},Uf=function(e){var t=e.ownerSVGElement,n=lc("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),hs.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),hs.removeChild(n),s},If=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Cd=function(e){var t,n;try{t=e.getBBox()}catch{t=Uf(e),n=1}return t&&(t.width||t.height)||n||(t=Uf(e)),t&&!t.width&&!t.x&&!t.y?{x:+If(e,["x","cx","x1"])||0,y:+If(e,["y","cy","y1"])||0,width:0,height:0}:t},Pd=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Cd(e))},Ji=function(e,t){if(t){var n=e.style,i;t in Ai&&t!==Sn&&(t=At),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(kc,"-$1").toLowerCase())):n.removeAttribute(t)}},ki=function(e,t,n,i,s,a){var o=new Mn(e._pt,t,n,0,1,a?bd:Td);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},Nf={deg:1,rad:1,turn:1},YM={grid:1,flex:1},Qi=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Sr.style,l=DM.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),d=100,h=i==="px",f=i==="%",g,_,p,m;if(i===a||!s||Nf[i]||Nf[a])return s;if(a!=="px"&&!h&&(s=r(e,t,n,"px")),m=e.getCTM&&Pd(e),(f||a==="%")&&(Ai[t]||~t.indexOf("adius")))return g=m?e.getBBox()[l?"width":"height"]:e[u],Rt(f?s/g*d:s/100*g);if(o[l?"width":"height"]=d+(h?a:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===zi||!_.appendChild)&&(_=zi.body),p=_._gsap,p&&f&&p.width&&l&&p.time===Cn.time&&!p.uncache)return Rt(s/p.width*d);if(f&&(t==="height"||t==="width")){var y=e.style[t];e.style[t]=d+i,g=e[u],y?e.style[t]=y:Ji(e,t)}else(f||a==="%")&&!YM[Dn(_,"display")]&&(o.position=Dn(e,"position")),_===e&&(o.position="static"),_.appendChild(Sr),g=Sr[u],_.removeChild(Sr),o.position="absolute";return l&&f&&(p=Tr(_),p.time=Cn.time,p.width=_[u]),Rt(h?g*s/d:g&&s?d/g*s:0)},gi=function(e,t,n,i){var s;return Bc||cc(),t in ai&&t!=="transform"&&(t=ai[t],~t.indexOf(",")&&(t=t.split(",")[0])),Ai[t]&&t!=="transform"?(s=da(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Po(Dn(e,Sn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Co[t]&&Co[t](e,t,n)||Dn(e,t)||Yh(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Qi(e,t,s,n)+n:s},qM=function(e,t,n,i){if(!n||n==="none"){var s=As(t,e,1),a=s&&Dn(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=Dn(e,"borderTopColor"))}var o=new Mn(this._pt,e.style,t,0,1,Sd),l=0,c=0,u,d,h,f,g,_,p,m,y,M,S,R;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Dn(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=Dn(e,t)||i,_?e.style[t]=_:Ji(e,t)),u=[n,i],fd(u),n=u[0],i=u[1],h=n.match(ss)||[],R=i.match(ss)||[],R.length){for(;d=ss.exec(i);)p=d[0],y=i.substring(l,d.index),g?g=(g+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(g=1),p!==(_=h[c++]||"")&&(f=parseFloat(_)||0,S=_.substr((f+"").length),p.charAt(1)==="="&&(p=fs(f,p)+S),m=parseFloat(p),M=p.substr((m+"").length),l=ss.lastIndex-M.length,M||(M=M||In.units[t]||S,l===i.length&&(i+=M,o.e+=M)),S!==M&&(f=Qi(e,t,_,M)||0),o._pt={_next:o._pt,p:y||c===1?y:",",s:f,c:m-f,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?bd:Td;return Hh.test(i)&&(o.e=0),this._pt=o,o},Of={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},$M=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Of[n]||n,t[1]=Of[i]||i,t.join(" ")},KM=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],Ai[o]&&(l=1,o=o==="transformOrigin"?Sn:At),Ji(n,o);l&&(Ji(n,At),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",da(n,1),a.uncache=1,Ad(i)))}},Co={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new Mn(e._pt,t,n,0,0,KM);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},ha=[1,0,0,1,0,0],Ld={},Dd=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Ff=function(e){var t=Dn(e,At);return Dd(t)?ha:t.substr(7).match(kh).map(Rt)},Hc=function(e,t){var n=e._gsap||Tr(e),i=e.style,s=Ff(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?ha:s):(s===ha&&!e.offsetParent&&e!==hs&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,hs.appendChild(e)),s=Ff(e),l?i.display=l:Ji(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):hs.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},uc=function(e,t,n,i,s,a){var o=e._gsap,l=s||Hc(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,d=o.xOffset||0,h=o.yOffset||0,f=l[0],g=l[1],_=l[2],p=l[3],m=l[4],y=l[5],M=t.split(" "),S=parseFloat(M[0])||0,R=parseFloat(M[1])||0,A,b,D,x;n?l!==ha&&(b=f*p-g*_)&&(D=S*(p/b)+R*(-_/b)+(_*y-p*m)/b,x=S*(-g/b)+R*(f/b)-(f*y-g*m)/b,S=D,R=x):(A=Cd(e),S=A.x+(~M[0].indexOf("%")?S/100*A.width:S),R=A.y+(~(M[1]||M[0]).indexOf("%")?R/100*A.height:R)),i||i!==!1&&o.smooth?(m=S-c,y=R-u,o.xOffset=d+(m*f+y*_)-m,o.yOffset=h+(m*g+y*p)-y):o.xOffset=o.yOffset=0,o.xOrigin=S,o.yOrigin=R,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[Sn]="0px 0px",a&&(ki(a,o,"xOrigin",c,S),ki(a,o,"yOrigin",u,R),ki(a,o,"xOffset",d,o.xOffset),ki(a,o,"yOffset",h,o.yOffset)),e.setAttribute("data-svg-origin",S+" "+R)},da=function(e,t){var n=e._gsap||new md(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=Dn(e,Sn)||"0",u,d,h,f,g,_,p,m,y,M,S,R,A,b,D,x,v,P,U,L,G,W,Z,$,z,J,w,oe,Le,Ke,X,te;return u=d=h=_=p=m=y=M=S=0,f=g=1,n.svg=!!(e.getCTM&&Pd(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[At]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[At]!=="none"?l[At]:"")),i.scale=i.rotate=i.translate="none"),b=Hc(e,n.svg),n.svg&&(n.uncache?(z=e.getBBox(),c=n.xOrigin-z.x+"px "+(n.yOrigin-z.y)+"px",$=""):$=!t&&e.getAttribute("data-svg-origin"),uc(e,$||c,!!$||n.originIsAbsolute,n.smooth!==!1,b)),R=n.xOrigin||0,A=n.yOrigin||0,b!==ha&&(P=b[0],U=b[1],L=b[2],G=b[3],u=W=b[4],d=Z=b[5],b.length===6?(f=Math.sqrt(P*P+U*U),g=Math.sqrt(G*G+L*L),_=P||U?Qr(U,P)*pr:0,y=L||G?Qr(L,G)*pr+_:0,y&&(g*=Math.abs(Math.cos(y*ds))),n.svg&&(u-=R-(R*P+A*L),d-=A-(R*U+A*G))):(te=b[6],Ke=b[7],w=b[8],oe=b[9],Le=b[10],X=b[11],u=b[12],d=b[13],h=b[14],D=Qr(te,Le),p=D*pr,D&&(x=Math.cos(-D),v=Math.sin(-D),$=W*x+w*v,z=Z*x+oe*v,J=te*x+Le*v,w=W*-v+w*x,oe=Z*-v+oe*x,Le=te*-v+Le*x,X=Ke*-v+X*x,W=$,Z=z,te=J),D=Qr(-L,Le),m=D*pr,D&&(x=Math.cos(-D),v=Math.sin(-D),$=P*x-w*v,z=U*x-oe*v,J=L*x-Le*v,X=G*v+X*x,P=$,U=z,L=J),D=Qr(U,P),_=D*pr,D&&(x=Math.cos(D),v=Math.sin(D),$=P*x+U*v,z=W*x+Z*v,U=U*x-P*v,Z=Z*x-W*v,P=$,W=z),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,m=180-m),f=Rt(Math.sqrt(P*P+U*U+L*L)),g=Rt(Math.sqrt(Z*Z+te*te)),D=Qr(W,Z),y=Math.abs(D)>2e-4?D*pr:0,S=X?1/(X<0?-X:X):0),n.svg&&($=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Dd(Dn(e,At)),$&&e.setAttribute("transform",$))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(f*=-1,y+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,y+=y<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=d-((n.yPercent=d&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=h+a,n.scaleX=Rt(f),n.scaleY=Rt(g),n.rotation=Rt(_)+o,n.rotationX=Rt(p)+o,n.rotationY=Rt(m)+o,n.skewX=y+o,n.skewY=M+o,n.transformPerspective=S+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Sn]=Po(c)),n.xOffset=n.yOffset=0,n.force3D=In.force3D,n.renderTransform=n.svg?jM:Rd?Ud:ZM,n.uncache=0,n},Po=function(e){return(e=e.split(" "))[0]+" "+e[1]},Il=function(e,t,n){var i=Qt(t);return Rt(parseFloat(t)+parseFloat(Qi(e,"x",n+"px",i)))+i},ZM=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Ud(e,t)},ur="0deg",Os="0px",fr=") ",Ud=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,d=n.rotationX,h=n.skewX,f=n.skewY,g=n.scaleX,_=n.scaleY,p=n.transformPerspective,m=n.force3D,y=n.target,M=n.zOrigin,S="",R=m==="auto"&&e&&e!==1||m===!0;if(M&&(d!==ur||u!==ur)){var A=parseFloat(u)*ds,b=Math.sin(A),D=Math.cos(A),x;A=parseFloat(d)*ds,x=Math.cos(A),a=Il(y,a,b*x*-M),o=Il(y,o,-Math.sin(A)*-M),l=Il(y,l,D*x*-M+M)}p!==Os&&(S+="perspective("+p+fr),(i||s)&&(S+="translate("+i+"%, "+s+"%) "),(R||a!==Os||o!==Os||l!==Os)&&(S+=l!==Os||R?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+fr),c!==ur&&(S+="rotate("+c+fr),u!==ur&&(S+="rotateY("+u+fr),d!==ur&&(S+="rotateX("+d+fr),(h!==ur||f!==ur)&&(S+="skew("+h+", "+f+fr),(g!==1||_!==1)&&(S+="scale("+g+", "+_+fr),y.style[At]=S||"translate(0, 0)"},jM=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,d=n.scaleX,h=n.scaleY,f=n.target,g=n.xOrigin,_=n.yOrigin,p=n.xOffset,m=n.yOffset,y=n.forceCSS,M=parseFloat(a),S=parseFloat(o),R,A,b,D,x;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=ds,c*=ds,R=Math.cos(l)*d,A=Math.sin(l)*d,b=Math.sin(l-c)*-h,D=Math.cos(l-c)*h,c&&(u*=ds,x=Math.tan(c-u),x=Math.sqrt(1+x*x),b*=x,D*=x,u&&(x=Math.tan(u),x=Math.sqrt(1+x*x),R*=x,A*=x)),R=Rt(R),A=Rt(A),b=Rt(b),D=Rt(D)):(R=d,D=h,A=b=0),(M&&!~(a+"").indexOf("px")||S&&!~(o+"").indexOf("px"))&&(M=Qi(f,"x",a,"px"),S=Qi(f,"y",o,"px")),(g||_||p||m)&&(M=Rt(M+g-(g*R+_*b)+p),S=Rt(S+_-(g*A+_*D)+m)),(i||s)&&(x=f.getBBox(),M=Rt(M+i/100*x.width),S=Rt(S+s/100*x.height)),x="matrix("+R+","+A+","+b+","+D+","+M+","+S+")",f.setAttribute("transform",x),y&&(f.style[At]=x)},JM=function(e,t,n,i,s){var a=360,o=Gt(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?pr:1),c=l-i,u=i+c+"deg",d,h;return o&&(d=s.split("_")[1],d==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),d==="cw"&&c<0?c=(c+a*Lf)%a-~~(c/a)*a:d==="ccw"&&c>0&&(c=(c-a*Lf)%a-~~(c/a)*a)),e._pt=h=new Mn(e._pt,t,n,i,c,IM),h.e=u,h.u="deg",e._props.push(n),h},Bf=function(e,t){for(var n in t)e[n]=t[n];return e},QM=function(e,t,n){var i=Bf({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,d,h,f,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[At]=t,o=da(n,1),Ji(n,At),n.setAttribute("transform",c)):(c=getComputedStyle(n)[At],a[At]=t,o=da(n,1),a[At]=c);for(l in Ai)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(f=Qt(c),g=Qt(u),d=f!==g?Qi(n,l,c,g):parseFloat(c),h=parseFloat(u),e._pt=new Mn(e._pt,o,l,d,h-d,oc),e._pt.u=g||0,e._props.push(l));Bf(o,i)};xn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});Co[e>1?"border"+r:r]=function(o,l,c,u,d){var h,f;if(arguments.length<4)return h=a.map(function(g){return gi(o,g,c)}),f=h.join(" "),f.split(h[0]).length===5?h[0]:f;h=(u+"").split(" "),f={},a.forEach(function(g,_){return f[g]=h[_]=h[_]||h[(_-1)/2|0]}),o.init(l,f,d)}});var Id={name:"css",register:cc,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,l=n.vars.startAt,c,u,d,h,f,g,_,p,m,y,M,S,R,A,b,D,x;Bc||cc(),this.styles=this.styles||wd(e),D=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(wn[_]&&_d(_,t,n,i,e,s)))){if(f=typeof u,g=Co[_],f==="function"&&(u=u.call(n,i,e,s),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=ca(u)),g)g(this,e,_,u,n)&&(b=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",Yi.lastIndex=0,Yi.test(c)||(p=Qt(c),m=Qt(u),m?p!==m&&(c=Qi(e,_,c,m)+m):p&&(u+=p)),this.add(o,"setProperty",c,u,i,s,0,0,_),a.push(_),D.push(_,0,o[_]);else if(f!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],Gt(c)&&~c.indexOf("random(")&&(c=ca(c)),Qt(c+"")||c==="auto"||(c+=In.units[_]||Qt(gi(e,_))||""),(c+"").charAt(1)==="="&&(c=gi(e,_))):c=gi(e,_),h=parseFloat(c),y=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),d=parseFloat(u),_ in ai&&(_==="autoAlpha"&&(h===1&&gi(e,"visibility")==="hidden"&&d&&(h=0),D.push("visibility",0,o.visibility),ki(this,o,"visibility",h?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=ai[_],~_.indexOf(",")&&(_=_.split(",")[0]))),M=_ in Ai,M){if(this.styles.save(_),x=u,f==="string"&&u.substring(0,6)==="var(--"){if(u=Dn(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var v=e.style.perspective;e.style.perspective=u,u=Dn(e,"perspective"),v?e.style.perspective=v:Ji(e,"perspective")}d=parseFloat(u)}if(S||(R=e._gsap,R.renderTransform&&!t.parseTransform||da(e,t.parseTransform),A=t.smoothOrigin!==!1&&R.smooth,S=this._pt=new Mn(this._pt,o,At,0,1,R.renderTransform,R,0,-1),S.dep=1),_==="scale")this._pt=new Mn(this._pt,R,"scaleY",R.scaleY,(y?fs(R.scaleY,y+d):d)-R.scaleY||0,oc),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){D.push(Sn,0,o[Sn]),u=$M(u),R.svg?uc(e,u,0,A,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==R.zOrigin&&ki(this,R,"zOrigin",R.zOrigin,m),ki(this,o,_,Po(c),Po(u)));continue}else if(_==="svgOrigin"){uc(e,u,1,A,0,this);continue}else if(_ in Ld){JM(this,R,_,h,y?fs(h,y+u):u);continue}else if(_==="smoothOrigin"){ki(this,R,"smooth",R.smooth,u);continue}else if(_==="force3D"){R[_]=u;continue}else if(_==="transform"){QM(this,u,e);continue}}else _ in o||(_=As(_)||_);if(M||(d||d===0)&&(h||h===0)&&!UM.test(u)&&_ in o)p=(c+"").substr((h+"").length),d||(d=0),m=Qt(u)||(_ in In.units?In.units[_]:p),p!==m&&(h=Qi(e,_,c,m)),this._pt=new Mn(this._pt,M?R:o,_,h,(y?fs(h,y+d):d)-h,!M&&(m==="px"||_==="zIndex")&&t.autoRound!==!1?FM:oc),this._pt.u=m||0,M&&x!==u?(this._pt.b=c,this._pt.e=x,this._pt.r=OM):p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=NM);else if(_ in o)qM.call(this,e,_,c,y?y+u:u);else if(_ in e)this.add(e,_,c||e[_],y?y+u:u,i,s);else if(_!=="parseTransform"){Rc(_,u);continue}M||(_ in o?D.push(_,0,o[_]):typeof e[_]=="function"?D.push(_,2,e[_]()):D.push(_,1,c||e[_])),a.push(_)}}b&&yd(this)},render:function(e,t){if(t.tween._time||!zc())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:gi,aliases:ai,getSetter:function(e,t,n){var i=ai[t];return i&&i.indexOf(",")<0&&(t=i),t in Ai&&t!==Sn&&(e._gsap.x||gi(e,"x"))?n&&Pf===n?t==="scale"?HM:kM:(Pf=n||{})&&(t==="scale"?VM:GM):e.style&&!bc(e.style[t])?BM:~t.indexOf("-")?zM:Oc(e,t)},core:{_removeProperty:Ji,_getMatrix:Hc}};yn.utils.checkPrefix=As;yn.core.getStyleSaver=wd;(function(r,e,t,n){var i=xn(r+","+e+","+t,function(s){Ai[s]=1});xn(e,function(s){In.units[s]="deg",Ld[s]=1}),ai[i[13]]=r+","+e,xn(n,function(s){var a=s.split(":");ai[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");xn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){In.units[r]="px"});yn.registerPlugin(Id);var at=yn.registerPlugin(Id)||yn;at.core.Tween;function zf(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function eS(r,e,t){return e&&zf(r.prototype,e),t&&zf(r,t),r}/*!
 * Observer 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Xt,fo,Pn,Hi,Vi,ps,Nd,mr,Zs,Od,yi,Zn,Fd,Bd=function(){return Xt||typeof window<"u"&&(Xt=window.gsap)&&Xt.registerPlugin&&Xt},zd=1,os=[],Je=[],li=[],js=Date.now,fc=function(e,t){return t},tS=function(){var e=Zs.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,Je),i.push.apply(i,li),Je=n,li=i,fc=function(a,o){return t[a](o)}},qi=function(e,t){return~li.indexOf(e)&&li[li.indexOf(e)+1][t]},Js=function(e){return!!~Od.indexOf(e)},sn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},rn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Ka="scrollLeft",Za="scrollTop",hc=function(){return yi&&yi.isPressed||Je.cache++},Lo=function(e,t){var n=function i(s){if(s||s===0){zd&&(Pn.history.scrollRestoration="manual");var a=yi&&yi.isPressed;s=i.v=Math.round(s)||(yi&&yi.iOS?1:0),e(s),i.cacheID=Je.cache,a&&fc("ss",s)}else(t||Je.cache!==i.cacheID||fc("ref"))&&(i.cacheID=Je.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},fn={s:Ka,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Lo(function(r){return arguments.length?Pn.scrollTo(r,Ot.sc()):Pn.pageXOffset||Hi[Ka]||Vi[Ka]||ps[Ka]||0})},Ot={s:Za,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:fn,sc:Lo(function(r){return arguments.length?Pn.scrollTo(fn.sc(),r):Pn.pageYOffset||Hi[Za]||Vi[Za]||ps[Za]||0})},dn=function(e,t){return(t&&t._ctx&&t._ctx.selector||Xt.utils.toArray)(e)[0]||(typeof e=="string"&&Xt.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},nS=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},er=function(e,t){var n=t.s,i=t.sc;Js(e)&&(e=Hi.scrollingElement||Vi);var s=Je.indexOf(e),a=i===Ot.sc?1:2;!~s&&(s=Je.push(e)-1),Je[s+a]||sn(e,"scroll",hc);var o=Je[s+a],l=o||(Je[s+a]=Lo(qi(e,n),!0)||(Js(e)?i:Lo(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,o||(l.smooth=Xt.getProperty(e,"scrollBehavior")==="smooth"),l},dc=function(e,t,n){var i=e,s=e,a=js(),o=a,l=t||50,c=Math.max(500,l*3),u=function(g,_){var p=js();_||p-a>l?(s=i,i=g,o=a,a=p):n?i+=g:i=s+(g-s)/(p-o)*(a-o)},d=function(){s=i=n?0:i,o=a=0},h=function(g){var _=o,p=s,m=js();return(g||g===0)&&g!==i&&u(g),a===o||m-o>c?0:(i+(n?p:-p))/((n?m:a)-_)*1e3};return{update:u,reset:d,getVelocity:h}},Fs=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},kf=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},kd=function(){Zs=Xt.core.globals().ScrollTrigger,Zs&&Zs.core&&tS()},Hd=function(e){return Xt=e||Bd(),!fo&&Xt&&typeof document<"u"&&document.body&&(Pn=window,Hi=document,Vi=Hi.documentElement,ps=Hi.body,Od=[Pn,Hi,Vi,ps],Xt.utils.clamp,Fd=Xt.core.context||function(){},mr="onpointerenter"in ps?"pointer":"mouse",Nd=Ct.isTouch=Pn.matchMedia&&Pn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Pn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Zn=Ct.eventTypes=("ontouchstart"in Vi?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Vi?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return zd=0},500),kd(),fo=1),fo};fn.op=Ot;Je.cache=0;var Ct=function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){fo||Hd(Xt)||console.warn("Please gsap.registerPlugin(Observer)"),Zs||kd();var i=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,d=n.onStop,h=n.onStopDelay,f=n.ignore,g=n.wheelSpeed,_=n.event,p=n.onDragStart,m=n.onDragEnd,y=n.onDrag,M=n.onPress,S=n.onRelease,R=n.onRight,A=n.onLeft,b=n.onUp,D=n.onDown,x=n.onChangeX,v=n.onChangeY,P=n.onChange,U=n.onToggleX,L=n.onToggleY,G=n.onHover,W=n.onHoverEnd,Z=n.onMove,$=n.ignoreCheck,z=n.isNormalizer,J=n.onGestureStart,w=n.onGestureEnd,oe=n.onWheel,Le=n.onEnable,Ke=n.onDisable,X=n.onClick,te=n.scrollSpeed,ue=n.capture,ne=n.allowClicks,De=n.lockAxis,Ce=n.onLockAxis;this.target=o=dn(o)||Vi,this.vars=n,f&&(f=Xt.utils.toArray(f)),i=i||1e-9,s=s||0,g=g||1,te=te||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Pn.getComputedStyle(ps).lineHeight)||22);var F,Ge,Se,Ee,ge,Ie,Pe,O=this,et=0,C=0,E=n.passive||!u&&n.passive!==!1,V=er(o,fn),j=er(o,Ot),Q=V(),ee=j(),me=~a.indexOf("touch")&&!~a.indexOf("pointer")&&Zn[0]==="pointerdown",le=Js(o),ie=o.ownerDocument||Hi,Ue=[0,0,0],re=[0,0,0],ye=0,qe=function(){return ye=js()},_e=function(xe,it){return(O.event=xe)&&f&&nS(xe.target,f)||it&&me&&xe.pointerType!=="touch"||$&&$(xe,it)},ve=function(){O._vx.reset(),O._vy.reset(),Ge.pause(),d&&d(O)},Ne=function(){var xe=O.deltaX=kf(Ue),it=O.deltaY=kf(re),fe=Math.abs(xe)>=i,ze=Math.abs(it)>=i;P&&(fe||ze)&&P(O,xe,it,Ue,re),fe&&(R&&O.deltaX>0&&R(O),A&&O.deltaX<0&&A(O),x&&x(O),U&&O.deltaX<0!=et<0&&U(O),et=O.deltaX,Ue[0]=Ue[1]=Ue[2]=0),ze&&(D&&O.deltaY>0&&D(O),b&&O.deltaY<0&&b(O),v&&v(O),L&&O.deltaY<0!=C<0&&L(O),C=O.deltaY,re[0]=re[1]=re[2]=0),(Ee||Se)&&(Z&&Z(O),Se&&(p&&Se===1&&p(O),y&&y(O),Se=0),Ee=!1),Ie&&!(Ie=!1)&&Ce&&Ce(O),ge&&(oe(O),ge=!1),F=0},Ve=function(xe,it,fe){Ue[fe]+=xe,re[fe]+=it,O._vx.update(xe),O._vy.update(it),c?F||(F=requestAnimationFrame(Ne)):Ne()},ht=function(xe,it){De&&!Pe&&(O.axis=Pe=Math.abs(xe)>Math.abs(it)?"x":"y",Ie=!0),Pe!=="y"&&(Ue[2]+=xe,O._vx.update(xe,!0)),Pe!=="x"&&(re[2]+=it,O._vy.update(it,!0)),c?F||(F=requestAnimationFrame(Ne)):Ne()},Oe=function(xe){if(!_e(xe,1)){xe=Fs(xe,u);var it=xe.clientX,fe=xe.clientY,ze=it-O.x,be=fe-O.y,ke=O.isDragging;O.x=it,O.y=fe,(ke||(ze||be)&&(Math.abs(O.startX-it)>=s||Math.abs(O.startY-fe)>=s))&&(Se||(Se=ke?2:1),ke||(O.isDragging=!0),ht(ze,be))}},I=O.onPress=function(Re){_e(Re,1)||Re&&Re.button||(O.axis=Pe=null,Ge.pause(),O.isPressed=!0,Re=Fs(Re),et=C=0,O.startX=O.x=Re.clientX,O.startY=O.y=Re.clientY,O._vx.reset(),O._vy.reset(),sn(z?o:ie,Zn[1],Oe,E,!0),O.deltaX=O.deltaY=0,M&&M(O))},q=O.onRelease=function(Re){if(!_e(Re,1)){rn(z?o:ie,Zn[1],Oe,!0);var xe=!isNaN(O.y-O.startY),it=O.isDragging,fe=it&&(Math.abs(O.x-O.startX)>3||Math.abs(O.y-O.startY)>3),ze=Fs(Re);!fe&&xe&&(O._vx.reset(),O._vy.reset(),u&&ne&&Xt.delayedCall(.08,function(){if(js()-ye>300&&!Re.defaultPrevented){if(Re.target.click)Re.target.click();else if(ie.createEvent){var be=ie.createEvent("MouseEvents");be.initMouseEvent("click",!0,!0,Pn,1,ze.screenX,ze.screenY,ze.clientX,ze.clientY,!1,!1,!1,!1,0,null),Re.target.dispatchEvent(be)}}})),O.isDragging=O.isGesturing=O.isPressed=!1,d&&it&&!z&&Ge.restart(!0),Se&&Ne(),m&&it&&m(O),S&&S(O,fe)}},K=function(xe){return xe.touches&&xe.touches.length>1&&(O.isGesturing=!0)&&J(xe,O.isDragging)},ae=function(){return(O.isGesturing=!1)||w(O)},ce=function(xe){if(!_e(xe)){var it=V(),fe=j();Ve((it-Q)*te,(fe-ee)*te,1),Q=it,ee=fe,d&&Ge.restart(!0)}},He=function(xe){if(!_e(xe)){xe=Fs(xe,u),oe&&(ge=!0);var it=(xe.deltaMode===1?l:xe.deltaMode===2?Pn.innerHeight:1)*g;Ve(xe.deltaX*it,xe.deltaY*it,0),d&&!z&&Ge.restart(!0)}},rt=function(xe){if(!_e(xe)){var it=xe.clientX,fe=xe.clientY,ze=it-O.x,be=fe-O.y;O.x=it,O.y=fe,Ee=!0,d&&Ge.restart(!0),(ze||be)&&ht(ze,be)}},ut=function(xe){O.event=xe,G(O)},_t=function(xe){O.event=xe,W(O)},tt=function(xe){return _e(xe)||Fs(xe,u)&&X(O)};Ge=O._dc=Xt.delayedCall(h||.25,ve).pause(),O.deltaX=O.deltaY=0,O._vx=dc(0,50,!0),O._vy=dc(0,50,!0),O.scrollX=V,O.scrollY=j,O.isDragging=O.isGesturing=O.isPressed=!1,Fd(this),O.enable=function(Re){return O.isEnabled||(sn(le?ie:o,"scroll",hc),a.indexOf("scroll")>=0&&sn(le?ie:o,"scroll",ce,E,ue),a.indexOf("wheel")>=0&&sn(o,"wheel",He,E,ue),(a.indexOf("touch")>=0&&Nd||a.indexOf("pointer")>=0)&&(sn(o,Zn[0],I,E,ue),sn(ie,Zn[2],q),sn(ie,Zn[3],q),ne&&sn(o,"click",qe,!0,!0),X&&sn(o,"click",tt),J&&sn(ie,"gesturestart",K),w&&sn(ie,"gestureend",ae),G&&sn(o,mr+"enter",ut),W&&sn(o,mr+"leave",_t),Z&&sn(o,mr+"move",rt)),O.isEnabled=!0,O.isDragging=O.isGesturing=O.isPressed=Ee=Se=!1,O._vx.reset(),O._vy.reset(),Q=V(),ee=j(),Re&&Re.type&&I(Re),Le&&Le(O)),O},O.disable=function(){O.isEnabled&&(os.filter(function(Re){return Re!==O&&Js(Re.target)}).length||rn(le?ie:o,"scroll",hc),O.isPressed&&(O._vx.reset(),O._vy.reset(),rn(z?o:ie,Zn[1],Oe,!0)),rn(le?ie:o,"scroll",ce,ue),rn(o,"wheel",He,ue),rn(o,Zn[0],I,ue),rn(ie,Zn[2],q),rn(ie,Zn[3],q),rn(o,"click",qe,!0),rn(o,"click",tt),rn(ie,"gesturestart",K),rn(ie,"gestureend",ae),rn(o,mr+"enter",ut),rn(o,mr+"leave",_t),rn(o,mr+"move",rt),O.isEnabled=O.isPressed=O.isDragging=!1,Ke&&Ke(O))},O.kill=O.revert=function(){O.disable();var Re=os.indexOf(O);Re>=0&&os.splice(Re,1),yi===O&&(yi=0)},os.push(O),z&&Js(o)&&(yi=O),O.enable(_)},eS(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();Ct.version="3.14.2";Ct.create=function(r){return new Ct(r)};Ct.register=Hd;Ct.getAll=function(){return os.slice()};Ct.getById=function(r){return os.filter(function(e){return e.vars.id===r})[0]};Bd()&&Xt.registerPlugin(Ct);/*!
 * ScrollTrigger 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Me,ns,je,vt,Rn,lt,Vc,Do,pa,Qs,Vs,ja,jt,Wo,pc,ln,Hf,Vf,is,Vd,Nl,Gd,on,mc,Wd,Xd,Ni,_c,Gc,ms,Wc,ea,gc,Ol,Ja=1,Jt=Date.now,Fl=Jt(),Yn=0,Gs=0,Gf=function(e,t,n){var i=An(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},Wf=function(e,t){return t&&(!An(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},iS=function r(){return Gs&&requestAnimationFrame(r)},Xf=function(){return Wo=1},Yf=function(){return Wo=0},ti=function(e){return e},Ws=function(e){return Math.round(e*1e5)/1e5||0},Yd=function(){return typeof window<"u"},qd=function(){return Me||Yd()&&(Me=window.gsap)&&Me.registerPlugin&&Me},Dr=function(e){return!!~Vc.indexOf(e)},$d=function(e){return(e==="Height"?Wc:je["inner"+e])||Rn["client"+e]||lt["client"+e]},Kd=function(e){return qi(e,"getBoundingClientRect")||(Dr(e)?function(){return go.width=je.innerWidth,go.height=Wc,go}:function(){return xi(e)})},rS=function(e,t,n){var i=n.d,s=n.d2,a=n.a;return(a=qi(e,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(t?$d(s):e["client"+s])||0}},sS=function(e,t){return!t||~li.indexOf(e)?Kd(e):function(){return go}},oi=function(e,t){var n=t.s,i=t.d2,s=t.d,a=t.a;return Math.max(0,(n="scroll"+i)&&(a=qi(e,n))?a()-Kd(e)()[s]:Dr(e)?(Rn[n]||lt[n])-$d(i):e[n]-e["offset"+i])},Qa=function(e,t){for(var n=0;n<is.length;n+=3)(!t||~t.indexOf(is[n+1]))&&e(is[n],is[n+1],is[n+2])},An=function(e){return typeof e=="string"},en=function(e){return typeof e=="function"},Xs=function(e){return typeof e=="number"},_r=function(e){return typeof e=="object"},Bs=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Bl=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},es=Math.abs,Zd="left",jd="top",Xc="right",Yc="bottom",Rr="width",Cr="height",ta="Right",na="Left",ia="Top",ra="Bottom",Dt="padding",Hn="margin",ws="Width",qc="Height",Nt="px",Vn=function(e){return je.getComputedStyle(e)},aS=function(e){var t=Vn(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},qf=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},xi=function(e,t){var n=t&&Vn(e)[pc]!=="matrix(1, 0, 0, 1, 0, 0)"&&Me.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},Uo=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},Jd=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},oS=function(e){return function(t){return Me.utils.snap(Jd(e),t)}},$c=function(e){var t=Me.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,a){a===void 0&&(a=.001);var o;if(!s)return t(i);if(s>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,s,a){a===void 0&&(a=.001);var o=t(i);return!s||Math.abs(o-i)<a||o-i<0==s<0?o:t(s<0?i-e:i+e)}},lS=function(e){return function(t,n){return $c(Jd(e))(t,n.direction)}},eo=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},Vt=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},Ht=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},to=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},$f={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},no={toggleActions:"play",anticipatePin:0},Io={top:0,left:0,center:.5,bottom:1,right:1},ho=function(e,t){if(An(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Io?Io[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},io=function(e,t,n,i,s,a,o,l){var c=s.startColor,u=s.endColor,d=s.fontSize,h=s.indent,f=s.fontWeight,g=vt.createElement("div"),_=Dr(n)||qi(n,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,m=_?lt:n,y=e.indexOf("start")!==-1,M=y?c:u,S="border-color:"+M+";font-size:"+d+";color:"+M+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return S+="position:"+((p||l)&&_?"fixed;":"absolute;"),(p||l||!_)&&(S+=(i===Ot?Xc:Yc)+":"+(a+parseFloat(h))+"px;"),o&&(S+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),g._isStart=y,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=S,g.innerText=t||t===0?e+"-"+t:e,m.children[0]?m.insertBefore(g,m.children[0]):m.appendChild(g),g._offset=g["offset"+i.op.d2],po(g,0,i,y),g},po=function(e,t,n,i){var s={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+a+ws]=1,s["border"+o+ws]=0,s[n.p]=t+"px",Me.set(e,s)},$e=[],vc={},ma,Kf=function(){return Jt()-Yn>34&&(ma||(ma=requestAnimationFrame(Ei)))},ts=function(){(!on||!on.isPressed||on.startX>lt.clientWidth)&&(Je.cache++,on?ma||(ma=requestAnimationFrame(Ei)):Ei(),Yn||Ir("scrollStart"),Yn=Jt())},zl=function(){Xd=je.innerWidth,Wd=je.innerHeight},Ys=function(e){Je.cache++,(e===!0||!jt&&!Gd&&!vt.fullscreenElement&&!vt.webkitFullscreenElement&&(!mc||Xd!==je.innerWidth||Math.abs(je.innerHeight-Wd)>je.innerHeight*.25))&&Do.restart(!0)},Ur={},cS=[],Qd=function r(){return Ht(Qe,"scrollEnd",r)||yr(!0)},Ir=function(e){return Ur[e]&&Ur[e].map(function(t){return t()})||cS},bn=[],ep=function(e){for(var t=0;t<bn.length;t+=5)(!e||bn[t+4]&&bn[t+4].query===e)&&(bn[t].style.cssText=bn[t+1],bn[t].getBBox&&bn[t].setAttribute("transform",bn[t+2]||""),bn[t+3].uncache=1)},tp=function(){return Je.forEach(function(e){return en(e)&&++e.cacheID&&(e.rec=e())})},Kc=function(e,t){var n;for(ln=0;ln<$e.length;ln++)n=$e[ln],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));ea=!0,t&&ep(t),t||Ir("revert")},np=function(e,t){Je.cache++,(t||!cn)&&Je.forEach(function(n){return en(n)&&n.cacheID++&&(n.rec=0)}),An(e)&&(je.history.scrollRestoration=Gc=e)},cn,Pr=0,Zf,uS=function(){if(Zf!==Pr){var e=Zf=Pr;requestAnimationFrame(function(){return e===Pr&&yr(!0)})}},ip=function(){lt.appendChild(ms),Wc=!on&&ms.offsetHeight||je.innerHeight,lt.removeChild(ms)},jf=function(e){return pa(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},yr=function(e,t){if(Rn=vt.documentElement,lt=vt.body,Vc=[je,vt,Rn,lt],Yn&&!e&&!ea){Vt(Qe,"scrollEnd",Qd);return}ip(),cn=Qe.isRefreshing=!0,ea||tp();var n=Ir("refreshInit");Vd&&Qe.sort(),t||Kc(),Je.forEach(function(i){en(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),$e.slice(0).forEach(function(i){return i.refresh()}),ea=!1,$e.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-a),i.refresh()}}),gc=1,jf(!0),$e.forEach(function(i){var s=oi(i.scroller,i._dir),a=i.vars.end==="max"||i._endClamp&&i.end>s,o=i._startClamp&&i.start>=s;(a||o)&&i.setPositions(o?s-1:i.start,a?Math.max(o?s:i.start+1,s):i.end,!0)}),jf(!1),gc=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),Je.forEach(function(i){en(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),np(Gc,1),Do.pause(),Pr++,cn=2,Ei(2),$e.forEach(function(i){return en(i.vars.onRefresh)&&i.vars.onRefresh(i)}),cn=Qe.isRefreshing=!1,Ir("refresh")},xc=0,mo=1,sa,Ei=function(e){if(e===2||!cn&&!ea){Qe.isUpdating=!0,sa&&sa.update(0);var t=$e.length,n=Jt(),i=n-Fl>=50,s=t&&$e[0].scroll();if(mo=xc>s?-1:1,cn||(xc=s),i&&(Yn&&!Wo&&n-Yn>200&&(Yn=0,Ir("scrollEnd")),Vs=Fl,Fl=n),mo<0){for(ln=t;ln-- >0;)$e[ln]&&$e[ln].update(0,i);mo=1}else for(ln=0;ln<t;ln++)$e[ln]&&$e[ln].update(0,i);Qe.isUpdating=!1}ma=0},Mc=[Zd,jd,Yc,Xc,Hn+ra,Hn+ta,Hn+ia,Hn+na,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],_o=Mc.concat([Rr,Cr,"boxSizing","max"+ws,"max"+qc,"position",Hn,Dt,Dt+ia,Dt+ta,Dt+ra,Dt+na]),fS=function(e,t,n){_s(n);var i=e._gsap;if(i.spacerIsNative)_s(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},kl=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=Mc.length,a=t.style,o=e.style,l;s--;)l=Mc[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[Yc]=o[Xc]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[Rr]=Uo(e,fn)+Nt,a[Cr]=Uo(e,Ot)+Nt,a[Dt]=o[Hn]=o[jd]=o[Zd]="0",_s(i),o[Rr]=o["max"+ws]=n[Rr],o[Cr]=o["max"+qc]=n[Cr],o[Dt]=n[Dt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},hS=/([A-Z])/g,_s=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,a;for((e.t._gsap||Me.core.getCache(e.t)).uncache=1;i<n;i+=2)a=e[i+1],s=e[i],a?t[s]=a:t[s]&&t.removeProperty(s.replace(hS,"-$1").toLowerCase())}},ro=function(e){for(var t=_o.length,n=e.style,i=[],s=0;s<t;s++)i.push(_o[s],n[_o[s]]);return i.t=e,i},dS=function(e,t,n){for(var i=[],s=e.length,a=n?8:0,o;a<s;a+=2)o=e[a],i.push(o,o in t?t[o]:e[a+1]);return i.t=e.t,i},go={left:0,top:0},Jf=function(e,t,n,i,s,a,o,l,c,u,d,h,f,g){en(e)&&(e=e(l)),An(e)&&e.substr(0,3)==="max"&&(e=h+(e.charAt(4)==="="?ho("0"+e.substr(3),n):0));var _=f?f.time():0,p,m,y;if(f&&f.seek(0),isNaN(e)||(e=+e),Xs(e))f&&(e=Me.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,h,e)),o&&po(o,n,i,!0);else{en(t)&&(t=t(l));var M=(e||"0").split(" "),S,R,A,b;y=dn(t,l)||lt,S=xi(y)||{},(!S||!S.left&&!S.top)&&Vn(y).display==="none"&&(b=y.style.display,y.style.display="block",S=xi(y),b?y.style.display=b:y.style.removeProperty("display")),R=ho(M[0],S[i.d]),A=ho(M[1]||"0",n),e=S[i.p]-c[i.p]-u+R+s-A,o&&po(o,A,i,n-A<20||o._isStart&&A>20),n-=n-A}if(g&&(l[g]=e||-.001,e<0&&(e=0)),a){var D=e+n,x=a._isStart;p="scroll"+i.d2,po(a,D,i,x&&D>20||!x&&(d?Math.max(lt[p],Rn[p]):a.parentNode[p])<=D+1),d&&(c=xi(o),d&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+Nt))}return f&&y&&(p=xi(y),f.seek(h),m=xi(y),f._caScrollDist=p[i.p]-m[i.p],e=e/f._caScrollDist*h),f&&f.seek(_),f?e:Math.round(e)},pS=/(webkit|moz|length|cssText|inset)/i,Qf=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,a,o;if(t===lt){e._stOrig=s.cssText,o=Vn(e);for(a in o)!+a&&!pS.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=i}else s.cssText=e._stOrig;Me.core.getCache(e).uncache=1,t.appendChild(e)}},rp=function(e,t,n){var i=t,s=i;return function(a){var o=Math.round(e());return o!==i&&o!==s&&Math.abs(o-i)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=i,i=Math.round(a),i}},so=function(e,t,n){var i={};i[t.p]="+="+n,Me.set(e,i)},eh=function(e,t){var n=er(e,t),i="_scroll"+t.p2,s=function a(o,l,c,u,d){var h=a.tween,f=l.onComplete,g={};c=c||n();var _=rp(n,c,function(){h.kill(),a.tween=0});return d=u&&d||0,u=u||o-c,h&&h.kill(),l[i]=o,l.inherit=!1,l.modifiers=g,g[i]=function(){return _(c+u*h.ratio+d*h.ratio*h.ratio)},l.onUpdate=function(){Je.cache++,a.tween&&Ei()},l.onComplete=function(){a.tween=0,f&&f.call(h)},h=a.tween=Me.to(e,l),h};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},Vt(e,"wheel",n.wheelHandler),Qe.isTouch&&Vt(e,"touchmove",n.wheelHandler),s},Qe=function(){function r(t,n){ns||r.register(Me)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),_c(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Gs){this.update=this.refresh=this.kill=ti;return}n=qf(An(n)||Xs(n)||n.nodeType?{trigger:n}:n,no);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,d=s.scrub,h=s.trigger,f=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,p=s.anticipatePin,m=s.onScrubComplete,y=s.onSnapComplete,M=s.once,S=s.snap,R=s.pinReparent,A=s.pinSpacer,b=s.containerAnimation,D=s.fastScrollEnd,x=s.preventOverlaps,v=n.horizontal||n.containerAnimation&&n.horizontal!==!1?fn:Ot,P=!d&&d!==0,U=dn(n.scroller||je),L=Me.core.getCache(U),G=Dr(U),W=("pinType"in n?n.pinType:qi(U,"pinType")||G&&"fixed")==="fixed",Z=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],$=P&&n.toggleActions.split(" "),z="markers"in n?n.markers:no.markers,J=G?0:parseFloat(Vn(U)["border"+v.p2+ws])||0,w=this,oe=n.onRefreshInit&&function(){return n.onRefreshInit(w)},Le=rS(U,G,v),Ke=sS(U,G),X=0,te=0,ue=0,ne=er(U,v),De,Ce,F,Ge,Se,Ee,ge,Ie,Pe,O,et,C,E,V,j,Q,ee,me,le,ie,Ue,re,ye,qe,_e,ve,Ne,Ve,ht,Oe,I,q,K,ae,ce,He,rt,ut,_t;if(w._startClamp=w._endClamp=!1,w._dir=v,p*=45,w.scroller=U,w.scroll=b?b.time.bind(b):ne,Ge=ne(),w.vars=n,i=i||n.animation,"refreshPriority"in n&&(Vd=1,n.refreshPriority===-9999&&(sa=w)),L.tweenScroll=L.tweenScroll||{top:eh(U,Ot),left:eh(U,fn)},w.tweenTo=De=L.tweenScroll[v.p],w.scrubDuration=function(fe){K=Xs(fe)&&fe,K?q?q.duration(fe):q=Me.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:K,paused:!0,onComplete:function(){return m&&m(w)}}):(q&&q.progress(1).kill(),q=0)},i&&(i.vars.lazy=!1,i._initted&&!w.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),w.animation=i.pause(),i.scrollTrigger=w,w.scrubDuration(d),Oe=0,l||(l=i.vars.id)),S&&((!_r(S)||S.push)&&(S={snapTo:S}),"scrollBehavior"in lt.style&&Me.set(G?[lt,Rn]:U,{scrollBehavior:"auto"}),Je.forEach(function(fe){return en(fe)&&fe.target===(G?vt.scrollingElement||Rn:U)&&(fe.smooth=!1)}),F=en(S.snapTo)?S.snapTo:S.snapTo==="labels"?oS(i):S.snapTo==="labelsDirectional"?lS(i):S.directional!==!1?function(fe,ze){return $c(S.snapTo)(fe,Jt()-te<500?0:ze.direction)}:Me.utils.snap(S.snapTo),ae=S.duration||{min:.1,max:2},ae=_r(ae)?Qs(ae.min,ae.max):Qs(ae,ae),ce=Me.delayedCall(S.delay||K/2||.1,function(){var fe=ne(),ze=Jt()-te<500,be=De.tween;if((ze||Math.abs(w.getVelocity())<10)&&!be&&!Wo&&X!==fe){var ke=(fe-Ee)/V,Et=i&&!P?i.totalProgress():ke,Ze=ze?0:(Et-I)/(Jt()-Vs)*1e3||0,Mt=Me.utils.clamp(-ke,1-ke,es(Ze/2)*Ze/.185),zt=ke+(S.inertia===!1?0:Mt),St,gt,T=S,N=T.onStart,B=T.onInterrupt,k=T.onComplete;if(St=F(zt,w),Xs(St)||(St=zt),gt=Math.max(0,Math.round(Ee+St*V)),fe<=ge&&fe>=Ee&&gt!==fe){if(be&&!be._initted&&be.data<=es(gt-fe))return;S.inertia===!1&&(Mt=St-ke),De(gt,{duration:ae(es(Math.max(es(zt-Et),es(St-Et))*.185/Ze/.05||0)),ease:S.ease||"power3",data:es(gt-fe),onInterrupt:function(){return ce.restart(!0)&&B&&B(w)},onComplete:function(){w.update(),X=ne(),i&&!P&&(q?q.resetTo("totalProgress",St,i._tTime/i._tDur):i.progress(St)),Oe=I=i&&!P?i.totalProgress():w.progress,y&&y(w),k&&k(w)}},fe,Mt*V,gt-fe-Mt*V),N&&N(w,De.tween)}}else w.isActive&&X!==fe&&ce.restart(!0)}).pause()),l&&(vc[l]=w),h=w.trigger=dn(h||f!==!0&&f),_t=h&&h._gsap&&h._gsap.stRevert,_t&&(_t=_t(w)),f=f===!0?h:dn(f),An(o)&&(o={targets:h,className:o}),f&&(g===!1||g===Hn||(g=!g&&f.parentNode&&f.parentNode.style&&Vn(f.parentNode).display==="flex"?!1:Dt),w.pin=f,Ce=Me.core.getCache(f),Ce.spacer?j=Ce.pinState:(A&&(A=dn(A),A&&!A.nodeType&&(A=A.current||A.nativeElement),Ce.spacerIsNative=!!A,A&&(Ce.spacerState=ro(A))),Ce.spacer=me=A||vt.createElement("div"),me.classList.add("pin-spacer"),l&&me.classList.add("pin-spacer-"+l),Ce.pinState=j=ro(f)),n.force3D!==!1&&Me.set(f,{force3D:!0}),w.spacer=me=Ce.spacer,ht=Vn(f),qe=ht[g+v.os2],ie=Me.getProperty(f),Ue=Me.quickSetter(f,v.a,Nt),kl(f,me,ht),ee=ro(f)),z){C=_r(z)?qf(z,$f):$f,O=io("scroller-start",l,U,v,C,0),et=io("scroller-end",l,U,v,C,0,O),le=O["offset"+v.op.d2];var tt=dn(qi(U,"content")||U);Ie=this.markerStart=io("start",l,tt,v,C,le,0,b),Pe=this.markerEnd=io("end",l,tt,v,C,le,0,b),b&&(ut=Me.quickSetter([Ie,Pe],v.a,Nt)),!W&&!(li.length&&qi(U,"fixedMarkers")===!0)&&(aS(G?lt:U),Me.set([O,et],{force3D:!0}),ve=Me.quickSetter(O,v.a,Nt),Ve=Me.quickSetter(et,v.a,Nt))}if(b){var Re=b.vars.onUpdate,xe=b.vars.onUpdateParams;b.eventCallback("onUpdate",function(){w.update(0,0,1),Re&&Re.apply(b,xe||[])})}if(w.previous=function(){return $e[$e.indexOf(w)-1]},w.next=function(){return $e[$e.indexOf(w)+1]},w.revert=function(fe,ze){if(!ze)return w.kill(!0);var be=fe!==!1||!w.enabled,ke=jt;be!==w.isReverted&&(be&&(He=Math.max(ne(),w.scroll.rec||0),ue=w.progress,rt=i&&i.progress()),Ie&&[Ie,Pe,O,et].forEach(function(Et){return Et.style.display=be?"none":"block"}),be&&(jt=w,w.update(be)),f&&(!R||!w.isActive)&&(be?fS(f,me,j):kl(f,me,Vn(f),_e)),be||w.update(be),jt=ke,w.isReverted=be)},w.refresh=function(fe,ze,be,ke){if(!((jt||!w.enabled)&&!ze)){if(f&&fe&&Yn){Vt(r,"scrollEnd",Qd);return}!cn&&oe&&oe(w),jt=w,De.tween&&!be&&(De.tween.kill(),De.tween=0),q&&q.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(st){return st.vars.immediateRender&&st.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),w.isReverted||w.revert(!0,!0),w._subPinOffset=!1;var Et=Le(),Ze=Ke(),Mt=b?b.duration():oi(U,v),zt=V<=.01||!V,St=0,gt=ke||0,T=_r(be)?be.end:n.end,N=n.endTrigger||h,B=_r(be)?be.start:n.start||(n.start===0||!h?0:f?"0 0":"0 100%"),k=w.pinnedContainer=n.pinnedContainer&&dn(n.pinnedContainer,w),H=h&&Math.max(0,$e.indexOf(w))||0,se=H,he,pe,we,Be,Ae,Te,ot,Pt,qt,nn,We,Fe,Jn;for(z&&_r(be)&&(Fe=Me.getProperty(O,v.p),Jn=Me.getProperty(et,v.p));se-- >0;)Te=$e[se],Te.end||Te.refresh(0,1)||(jt=w),ot=Te.pin,ot&&(ot===h||ot===f||ot===k)&&!Te.isReverted&&(nn||(nn=[]),nn.unshift(Te),Te.revert(!0,!0)),Te!==$e[se]&&(H--,se--);for(en(B)&&(B=B(w)),B=Gf(B,"start",w),Ee=Jf(B,h,Et,v,ne(),Ie,O,w,Ze,J,W,Mt,b,w._startClamp&&"_startClamp")||(f?-.001:0),en(T)&&(T=T(w)),An(T)&&!T.indexOf("+=")&&(~T.indexOf(" ")?T=(An(B)?B.split(" ")[0]:"")+T:(St=ho(T.substr(2),Et),T=An(B)?B:(b?Me.utils.mapRange(0,b.duration(),b.scrollTrigger.start,b.scrollTrigger.end,Ee):Ee)+St,N=h)),T=Gf(T,"end",w),ge=Math.max(Ee,Jf(T||(N?"100% 0":Mt),N,Et,v,ne()+St,Pe,et,w,Ze,J,W,Mt,b,w._endClamp&&"_endClamp"))||-.001,St=0,se=H;se--;)Te=$e[se]||{},ot=Te.pin,ot&&Te.start-Te._pinPush<=Ee&&!b&&Te.end>0&&(he=Te.end-(w._startClamp?Math.max(0,Te.start):Te.start),(ot===h&&Te.start-Te._pinPush<Ee||ot===k)&&isNaN(B)&&(St+=he*(1-Te.progress)),ot===f&&(gt+=he));if(Ee+=St,ge+=St,w._startClamp&&(w._startClamp+=St),w._endClamp&&!cn&&(w._endClamp=ge||-.001,ge=Math.min(ge,oi(U,v))),V=ge-Ee||(Ee-=.01)&&.001,zt&&(ue=Me.utils.clamp(0,1,Me.utils.normalize(Ee,ge,He))),w._pinPush=gt,Ie&&St&&(he={},he[v.a]="+="+St,k&&(he[v.p]="-="+ne()),Me.set([Ie,Pe],he)),f&&!(gc&&w.end>=oi(U,v)))he=Vn(f),Be=v===Ot,we=ne(),re=parseFloat(ie(v.a))+gt,!Mt&&ge>1&&(We=(G?vt.scrollingElement||Rn:U).style,We={style:We,value:We["overflow"+v.a.toUpperCase()]},G&&Vn(lt)["overflow"+v.a.toUpperCase()]!=="scroll"&&(We.style["overflow"+v.a.toUpperCase()]="scroll")),kl(f,me,he),ee=ro(f),pe=xi(f,!0),Pt=W&&er(U,Be?fn:Ot)(),g?(_e=[g+v.os2,V+gt+Nt],_e.t=me,se=g===Dt?Uo(f,v)+V+gt:0,se&&(_e.push(v.d,se+Nt),me.style.flexBasis!=="auto"&&(me.style.flexBasis=se+Nt)),_s(_e),k&&$e.forEach(function(st){st.pin===k&&st.vars.pinSpacing!==!1&&(st._subPinOffset=!0)}),W&&ne(He)):(se=Uo(f,v),se&&me.style.flexBasis!=="auto"&&(me.style.flexBasis=se+Nt)),W&&(Ae={top:pe.top+(Be?we-Ee:Pt)+Nt,left:pe.left+(Be?Pt:we-Ee)+Nt,boxSizing:"border-box",position:"fixed"},Ae[Rr]=Ae["max"+ws]=Math.ceil(pe.width)+Nt,Ae[Cr]=Ae["max"+qc]=Math.ceil(pe.height)+Nt,Ae[Hn]=Ae[Hn+ia]=Ae[Hn+ta]=Ae[Hn+ra]=Ae[Hn+na]="0",Ae[Dt]=he[Dt],Ae[Dt+ia]=he[Dt+ia],Ae[Dt+ta]=he[Dt+ta],Ae[Dt+ra]=he[Dt+ra],Ae[Dt+na]=he[Dt+na],Q=dS(j,Ae,R),cn&&ne(0)),i?(qt=i._initted,Nl(1),i.render(i.duration(),!0,!0),ye=ie(v.a)-re+V+gt,Ne=Math.abs(V-ye)>1,W&&Ne&&Q.splice(Q.length-2,2),i.render(0,!0,!0),qt||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Nl(0)):ye=V,We&&(We.value?We.style["overflow"+v.a.toUpperCase()]=We.value:We.style.removeProperty("overflow-"+v.a));else if(h&&ne()&&!b)for(pe=h.parentNode;pe&&pe!==lt;)pe._pinOffset&&(Ee-=pe._pinOffset,ge-=pe._pinOffset),pe=pe.parentNode;nn&&nn.forEach(function(st){return st.revert(!1,!0)}),w.start=Ee,w.end=ge,Ge=Se=cn?He:ne(),!b&&!cn&&(Ge<He&&ne(He),w.scroll.rec=0),w.revert(!1,!0),te=Jt(),ce&&(X=-1,ce.restart(!0)),jt=0,i&&P&&(i._initted||rt)&&i.progress()!==rt&&i.progress(rt||0,!0).render(i.time(),!0,!0),(zt||ue!==w.progress||b||_||i&&!i._initted)&&(i&&!P&&(i._initted||ue||i.vars.immediateRender!==!1)&&i.totalProgress(b&&Ee<-.001&&!ue?Me.utils.normalize(Ee,ge,0):ue,!0),w.progress=zt||(Ge-Ee)/V===ue?0:ue),f&&g&&(me._pinOffset=Math.round(w.progress*ye)),q&&q.invalidate(),isNaN(Fe)||(Fe-=Me.getProperty(O,v.p),Jn-=Me.getProperty(et,v.p),so(O,v,Fe),so(Ie,v,Fe-(ke||0)),so(et,v,Jn),so(Pe,v,Jn-(ke||0))),zt&&!cn&&w.update(),u&&!cn&&!E&&(E=!0,u(w),E=!1)}},w.getVelocity=function(){return(ne()-Se)/(Jt()-Vs)*1e3||0},w.endAnimation=function(){Bs(w.callbackAnimation),i&&(q?q.progress(1):i.paused()?P||Bs(i,w.direction<0,1):Bs(i,i.reversed()))},w.labelToScroll=function(fe){return i&&i.labels&&(Ee||w.refresh()||Ee)+i.labels[fe]/i.duration()*V||0},w.getTrailing=function(fe){var ze=$e.indexOf(w),be=w.direction>0?$e.slice(0,ze).reverse():$e.slice(ze+1);return(An(fe)?be.filter(function(ke){return ke.vars.preventOverlaps===fe}):be).filter(function(ke){return w.direction>0?ke.end<=Ee:ke.start>=ge})},w.update=function(fe,ze,be){if(!(b&&!be&&!fe)){var ke=cn===!0?He:w.scroll(),Et=fe?0:(ke-Ee)/V,Ze=Et<0?0:Et>1?1:Et||0,Mt=w.progress,zt,St,gt,T,N,B,k,H;if(ze&&(Se=Ge,Ge=b?ne():ke,S&&(I=Oe,Oe=i&&!P?i.totalProgress():Ze)),p&&f&&!jt&&!Ja&&Yn&&(!Ze&&Ee<ke+(ke-Se)/(Jt()-Vs)*p?Ze=1e-4:Ze===1&&ge>ke+(ke-Se)/(Jt()-Vs)*p&&(Ze=.9999)),Ze!==Mt&&w.enabled){if(zt=w.isActive=!!Ze&&Ze<1,St=!!Mt&&Mt<1,B=zt!==St,N=B||!!Ze!=!!Mt,w.direction=Ze>Mt?1:-1,w.progress=Ze,N&&!jt&&(gt=Ze&&!Mt?0:Ze===1?1:Mt===1?2:3,P&&(T=!B&&$[gt+1]!=="none"&&$[gt+1]||$[gt],H=i&&(T==="complete"||T==="reset"||T in i))),x&&(B||H)&&(H||d||!i)&&(en(x)?x(w):w.getTrailing(x).forEach(function(we){return we.endAnimation()})),P||(q&&!jt&&!Ja?(q._dp._time-q._start!==q._time&&q.render(q._dp._time-q._start),q.resetTo?q.resetTo("totalProgress",Ze,i._tTime/i._tDur):(q.vars.totalProgress=Ze,q.invalidate().restart())):i&&i.totalProgress(Ze,!!(jt&&(te||fe)))),f){if(fe&&g&&(me.style[g+v.os2]=qe),!W)Ue(Ws(re+ye*Ze));else if(N){if(k=!fe&&Ze>Mt&&ge+1>ke&&ke+1>=oi(U,v),R)if(!fe&&(zt||k)){var se=xi(f,!0),he=ke-Ee;Qf(f,lt,se.top+(v===Ot?he:0)+Nt,se.left+(v===Ot?0:he)+Nt)}else Qf(f,me);_s(zt||k?Q:ee),Ne&&Ze<1&&zt||Ue(re+(Ze===1&&!k?ye:0))}}S&&!De.tween&&!jt&&!Ja&&ce.restart(!0),o&&(B||M&&Ze&&(Ze<1||!Ol))&&pa(o.targets).forEach(function(we){return we.classList[zt||M?"add":"remove"](o.className)}),a&&!P&&!fe&&a(w),N&&!jt?(P&&(H&&(T==="complete"?i.pause().totalProgress(1):T==="reset"?i.restart(!0).pause():T==="restart"?i.restart(!0):i[T]()),a&&a(w)),(B||!Ol)&&(c&&B&&Bl(w,c),Z[gt]&&Bl(w,Z[gt]),M&&(Ze===1?w.kill(!1,1):Z[gt]=0),B||(gt=Ze===1?1:3,Z[gt]&&Bl(w,Z[gt]))),D&&!zt&&Math.abs(w.getVelocity())>(Xs(D)?D:2500)&&(Bs(w.callbackAnimation),q?q.progress(1):Bs(i,T==="reverse"?1:!Ze,1))):P&&a&&!jt&&a(w)}if(Ve){var pe=b?ke/b.duration()*(b._caScrollDist||0):ke;ve(pe+(O._isFlipped?1:0)),Ve(pe)}ut&&ut(-ke/b.duration()*(b._caScrollDist||0))}},w.enable=function(fe,ze){w.enabled||(w.enabled=!0,Vt(U,"resize",Ys),G||Vt(U,"scroll",ts),oe&&Vt(r,"refreshInit",oe),fe!==!1&&(w.progress=ue=0,Ge=Se=X=ne()),ze!==!1&&w.refresh())},w.getTween=function(fe){return fe&&De?De.tween:q},w.setPositions=function(fe,ze,be,ke){if(b){var Et=b.scrollTrigger,Ze=b.duration(),Mt=Et.end-Et.start;fe=Et.start+Mt*fe/Ze,ze=Et.start+Mt*ze/Ze}w.refresh(!1,!1,{start:Wf(fe,be&&!!w._startClamp),end:Wf(ze,be&&!!w._endClamp)},ke),w.update()},w.adjustPinSpacing=function(fe){if(_e&&fe){var ze=_e.indexOf(v.d)+1;_e[ze]=parseFloat(_e[ze])+fe+Nt,_e[1]=parseFloat(_e[1])+fe+Nt,_s(_e)}},w.disable=function(fe,ze){if(fe!==!1&&w.revert(!0,!0),w.enabled&&(w.enabled=w.isActive=!1,ze||q&&q.pause(),He=0,Ce&&(Ce.uncache=1),oe&&Ht(r,"refreshInit",oe),ce&&(ce.pause(),De.tween&&De.tween.kill()&&(De.tween=0)),!G)){for(var be=$e.length;be--;)if($e[be].scroller===U&&$e[be]!==w)return;Ht(U,"resize",Ys),G||Ht(U,"scroll",ts)}},w.kill=function(fe,ze){w.disable(fe,ze),q&&!ze&&q.kill(),l&&delete vc[l];var be=$e.indexOf(w);be>=0&&$e.splice(be,1),be===ln&&mo>0&&ln--,be=0,$e.forEach(function(ke){return ke.scroller===w.scroller&&(be=1)}),be||cn||(w.scroll.rec=0),i&&(i.scrollTrigger=null,fe&&i.revert({kill:!1}),ze||i.kill()),Ie&&[Ie,Pe,O,et].forEach(function(ke){return ke.parentNode&&ke.parentNode.removeChild(ke)}),sa===w&&(sa=0),f&&(Ce&&(Ce.uncache=1),be=0,$e.forEach(function(ke){return ke.pin===f&&be++}),be||(Ce.spacer=0)),n.onKill&&n.onKill(w)},$e.push(w),w.enable(!1,!1),_t&&_t(w),i&&i.add&&!V){var it=w.update;w.update=function(){w.update=it,Je.cache++,Ee||ge||w.refresh()},Me.delayedCall(.01,w.update),V=.01,Ee=ge=0}else w.refresh();f&&uS()},r.register=function(n){return ns||(Me=n||qd(),Yd()&&window.document&&r.enable(),ns=Gs),ns},r.defaults=function(n){if(n)for(var i in n)no[i]=n[i];return no},r.disable=function(n,i){Gs=0,$e.forEach(function(a){return a[i?"kill":"disable"](n)}),Ht(je,"wheel",ts),Ht(vt,"scroll",ts),clearInterval(ja),Ht(vt,"touchcancel",ti),Ht(lt,"touchstart",ti),eo(Ht,vt,"pointerdown,touchstart,mousedown",Xf),eo(Ht,vt,"pointerup,touchend,mouseup",Yf),Do.kill(),Qa(Ht);for(var s=0;s<Je.length;s+=3)to(Ht,Je[s],Je[s+1]),to(Ht,Je[s],Je[s+2])},r.enable=function(){if(je=window,vt=document,Rn=vt.documentElement,lt=vt.body,Me&&(pa=Me.utils.toArray,Qs=Me.utils.clamp,_c=Me.core.context||ti,Nl=Me.core.suppressOverwrites||ti,Gc=je.history.scrollRestoration||"auto",xc=je.pageYOffset||0,Me.core.globals("ScrollTrigger",r),lt)){Gs=1,ms=document.createElement("div"),ms.style.height="100vh",ms.style.position="absolute",ip(),iS(),Ct.register(Me),r.isTouch=Ct.isTouch,Ni=Ct.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),mc=Ct.isTouch===1,Vt(je,"wheel",ts),Vc=[je,vt,Rn,lt],Me.matchMedia?(r.matchMedia=function(c){var u=Me.matchMedia(),d;for(d in c)u.add(d,c[d]);return u},Me.addEventListener("matchMediaInit",function(){tp(),Kc()}),Me.addEventListener("matchMediaRevert",function(){return ep()}),Me.addEventListener("matchMedia",function(){yr(0,1),Ir("matchMedia")}),Me.matchMedia().add("(orientation: portrait)",function(){return zl(),zl})):console.warn("Requires GSAP 3.11.0 or later"),zl(),Vt(vt,"scroll",ts);var n=lt.hasAttribute("style"),i=lt.style,s=i.borderTopStyle,a=Me.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=xi(lt),Ot.m=Math.round(o.top+Ot.sc())||0,fn.m=Math.round(o.left+fn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(lt.setAttribute("style",""),lt.removeAttribute("style")),ja=setInterval(Kf,250),Me.delayedCall(.5,function(){return Ja=0}),Vt(vt,"touchcancel",ti),Vt(lt,"touchstart",ti),eo(Vt,vt,"pointerdown,touchstart,mousedown",Xf),eo(Vt,vt,"pointerup,touchend,mouseup",Yf),pc=Me.utils.checkPrefix("transform"),_o.push(pc),ns=Jt(),Do=Me.delayedCall(.2,yr).pause(),is=[vt,"visibilitychange",function(){var c=je.innerWidth,u=je.innerHeight;vt.hidden?(Hf=c,Vf=u):(Hf!==c||Vf!==u)&&Ys()},vt,"DOMContentLoaded",yr,je,"load",yr,je,"resize",Ys],Qa(Vt),$e.forEach(function(c){return c.enable(0,1)}),l=0;l<Je.length;l+=3)to(Ht,Je[l],Je[l+1]),to(Ht,Je[l],Je[l+2])}},r.config=function(n){"limitCallbacks"in n&&(Ol=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(ja)||(ja=i)&&setInterval(Kf,i),"ignoreMobileResize"in n&&(mc=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Qa(Ht)||Qa(Vt,n.autoRefreshEvents||"none"),Gd=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=dn(n),a=Je.indexOf(s),o=Dr(s);~a&&Je.splice(a,o?6:2),i&&(o?li.unshift(je,i,lt,i,Rn,i):li.unshift(s,i))},r.clearMatchMedia=function(n){$e.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var a=(An(n)?dn(n):n).getBoundingClientRect(),o=a[s?Rr:Cr]*i||0;return s?a.right-o>0&&a.left+o<je.innerWidth:a.bottom-o>0&&a.top+o<je.innerHeight},r.positionInViewport=function(n,i,s){An(n)&&(n=dn(n));var a=n.getBoundingClientRect(),o=a[s?Rr:Cr],l=i==null?o/2:i in Io?Io[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return s?(a.left+l)/je.innerWidth:(a.top+l)/je.innerHeight},r.killAll=function(n){if($e.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Ur.killAll||[];Ur={},i.forEach(function(s){return s()})}},r}();Qe.version="3.14.2";Qe.saveStyles=function(r){return r?pa(r).forEach(function(e){if(e&&e.style){var t=bn.indexOf(e);t>=0&&bn.splice(t,5),bn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Me.core.getCache(e),_c())}}):bn};Qe.revert=function(r,e){return Kc(!r,e)};Qe.create=function(r,e){return new Qe(r,e)};Qe.refresh=function(r){return r?Ys(!0):(ns||Qe.register())&&yr(!0)};Qe.update=function(r){return++Je.cache&&Ei(r===!0?2:0)};Qe.clearScrollMemory=np;Qe.maxScroll=function(r,e){return oi(r,e?fn:Ot)};Qe.getScrollFunc=function(r,e){return er(dn(r),e?fn:Ot)};Qe.getById=function(r){return vc[r]};Qe.getAll=function(){return $e.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Qe.isScrolling=function(){return!!Yn};Qe.snapDirectional=$c;Qe.addEventListener=function(r,e){var t=Ur[r]||(Ur[r]=[]);~t.indexOf(e)||t.push(e)};Qe.removeEventListener=function(r,e){var t=Ur[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};Qe.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,a=function(c,u){var d=[],h=[],f=Me.delayedCall(i,function(){u(d,h),d=[],h=[]}).pause();return function(g){d.length||f.restart(!0),d.push(g.trigger),h.push(g),s<=d.length&&f.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&en(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return en(s)&&(s=s(),Vt(Qe,"refresh",function(){return s=e.batchMax()})),pa(r).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,t.push(Qe.create(c))}),t};var th=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Hl=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Ct.isTouch?" pinch-zoom":""):"none",e===Rn&&r(lt,t)},ao={auto:1,scroll:1},mS=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,a=s._gsap||Me.core.getCache(s),o=Jt(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==lt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(ao[(l=Vn(s)).overflowY]||ao[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!Dr(s)&&(ao[(l=Vn(s)).overflowY]||ao[l.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},sp=function(e,t,n,i){return Ct.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&mS,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&Vt(vt,Ct.eventTypes[0],ih,!1,!0)},onDisable:function(){return Ht(vt,Ct.eventTypes[0],ih,!0)}})},_S=/(input|label|select|textarea)/i,nh,ih=function(e){var t=_S.test(e.target.tagName);(t||nh)&&(e._gsapAllow=!0,nh=t)},gS=function(e){_r(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,a=t.onRelease,o,l,c=dn(e.target)||Rn,u=Me.core.globals().ScrollSmoother,d=u&&u.get(),h=Ni&&(e.content&&dn(e.content)||d&&e.content!==!1&&!d.smooth()&&d.content()),f=er(c,Ot),g=er(c,fn),_=1,p=(Ct.isTouch&&je.visualViewport?je.visualViewport.scale*je.visualViewport.width:je.outerWidth)/je.innerWidth,m=0,y=en(i)?function(){return i(o)}:function(){return i||2.8},M,S,R=sp(c,e.type,!0,s),A=function(){return S=!1},b=ti,D=ti,x=function(){l=oi(c,Ot),D=Qs(Ni?1:0,l),n&&(b=Qs(0,oi(c,fn))),M=Pr},v=function(){h._gsap.y=Ws(parseFloat(h._gsap.y)+f.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},P=function(){if(S){requestAnimationFrame(A);var z=Ws(o.deltaY/2),J=D(f.v-z);if(h&&J!==f.v+f.offset){f.offset=J-f.v;var w=Ws((parseFloat(h&&h._gsap.y)||0)-f.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+w+", 0, 1)",h._gsap.y=w+"px",f.cacheID=Je.cache,Ei()}return!0}f.offset&&v(),S=!0},U,L,G,W,Z=function(){x(),U.isActive()&&U.vars.scrollY>l&&(f()>l?U.progress(1)&&f(l):U.resetTo("scrollY",l))};return h&&Me.set(h,{y:"+=0"}),e.ignoreCheck=function($){return Ni&&$.type==="touchmove"&&P()||_>1.05&&$.type!=="touchstart"||o.isGesturing||$.touches&&$.touches.length>1},e.onPress=function(){S=!1;var $=_;_=Ws((je.visualViewport&&je.visualViewport.scale||1)/p),U.pause(),$!==_&&Hl(c,_>1.01?!0:n?!1:"x"),L=g(),G=f(),x(),M=Pr},e.onRelease=e.onGestureStart=function($,z){if(f.offset&&v(),!z)W.restart(!0);else{Je.cache++;var J=y(),w,oe;n&&(w=g(),oe=w+J*.05*-$.velocityX/.227,J*=th(g,w,oe,oi(c,fn)),U.vars.scrollX=b(oe)),w=f(),oe=w+J*.05*-$.velocityY/.227,J*=th(f,w,oe,oi(c,Ot)),U.vars.scrollY=D(oe),U.invalidate().duration(J).play(.01),(Ni&&U.vars.scrollY>=l||w>=l-1)&&Me.to({},{onUpdate:Z,duration:J})}a&&a($)},e.onWheel=function(){U._ts&&U.pause(),Jt()-m>1e3&&(M=0,m=Jt())},e.onChange=function($,z,J,w,oe){if(Pr!==M&&x(),z&&n&&g(b(w[2]===z?L+($.startX-$.x):g()+z-w[1])),J){f.offset&&v();var Le=oe[2]===J,Ke=Le?G+$.startY-$.y:f()+J-oe[1],X=D(Ke);Le&&Ke!==X&&(G+=X-Ke),f(X)}(J||z)&&Ei()},e.onEnable=function(){Hl(c,n?!1:"x"),Qe.addEventListener("refresh",Z),Vt(je,"resize",Z),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=g.smooth=!1),R.enable()},e.onDisable=function(){Hl(c,!0),Ht(je,"resize",Z),Qe.removeEventListener("refresh",Z),R.kill()},e.lockAxis=e.lockAxis!==!1,o=new Ct(e),o.iOS=Ni,Ni&&!f()&&f(1),Ni&&Me.ticker.add(ti),W=o._dc,U=Me.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:rp(f,f(),function(){return U.pause()})},onUpdate:Ei,onComplete:W.vars.onComplete}),o};Qe.sort=function(r){if(en(r))return $e.sort(r);var e=je.pageYOffset||0;return Qe.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+je.innerHeight}),$e.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Qe.observe=function(r){return new Ct(r)};Qe.normalizeScroll=function(r){if(typeof r>"u")return on;if(r===!0&&on)return on.enable();if(r===!1){on&&on.kill(),on=r;return}var e=r instanceof Ct?r:gS(r);return on&&on.target===e.target&&on.kill(),Dr(e.target)&&(on=e),e};Qe.core={_getVelocityProp:dc,_inputObserver:sp,_scrollers:Je,_proxies:li,bridge:{ss:function(){Yn||Ir("scrollStart"),Yn=Jt()},ref:function(){return jt}}};qd()&&Me.registerPlugin(Qe);at.registerPlugin(Qe);function vS(){at.set(".s-label",{x:-20,opacity:0}),at.set(".card-3d",{y:30,opacity:0}),at.set(".about-p",{y:20,opacity:0}),at.set(".terminal",{y:20,opacity:0}),at.set(".career-item",{y:20,opacity:0}),at.set(".quals",{y:20,opacity:0}),at.set(".sk-row",{x:-20,opacity:0}),at.set(".work-item",{x:-20,opacity:0}),at.set(".link-card",{y:20,opacity:0}),at.timeline({defaults:{ease:"power4.out"}}).to(".hero-label",{opacity:1,y:0,duration:.8,delay:.5}).to(".hero-title .line span",{y:"0%",duration:1,stagger:.12},"-=0.4").to(".hero-code",{opacity:1,y:0,duration:.8},"-=0.4").to(".hero-desc",{opacity:1,y:0,duration:.8},"-=0.5").to(".hero-cta",{opacity:1,y:0,duration:.8},"-=0.5").to(".hero-scroll",{opacity:1,duration:.8},"-=0.3"),at.utils.toArray(".s-label").forEach(t=>{at.to(t,{opacity:1,x:0,duration:.8,scrollTrigger:{trigger:t,start:"top 88%"}})}),at.utils.toArray(".about-p").forEach((t,n)=>{at.to(t,{opacity:1,y:0,duration:.8,delay:n*.12,scrollTrigger:{trigger:t,start:"top 88%"}})}),at.utils.toArray(".card-3d").forEach((t,n)=>{at.to(t,{opacity:1,y:0,duration:.7,delay:n*.1,scrollTrigger:{trigger:t,start:"top 90%"}}),t.addEventListener("mousemove",i=>{const s=t.getBoundingClientRect(),a=(i.clientX-s.left)/s.width-.5,o=(i.clientY-s.top)/s.height-.5;t.style.transform=`perspective(600px) rotateY(${a*14}deg) rotateX(${-o*14}deg) translateZ(8px)`}),t.addEventListener("mouseleave",()=>{t.style.transform="perspective(600px) rotateY(0) rotateX(0) translateZ(0)"})}),at.utils.toArray(".terminal").forEach(t=>{at.to(t,{opacity:1,y:0,duration:.8,scrollTrigger:{trigger:t,start:"top 88%"}})}),at.utils.toArray(".career-item").forEach((t,n)=>{at.to(t,{opacity:1,y:0,duration:.8,delay:n*.1,scrollTrigger:{trigger:t,start:"top 88%"}})}),at.utils.toArray(".quals").forEach(t=>{at.to(t,{opacity:1,y:0,duration:.8,scrollTrigger:{trigger:t,start:"top 88%"}})}),at.utils.toArray(".sk-row").forEach((t,n)=>{Qe.create({trigger:t,start:"top 88%",onEnter:()=>{at.to(t,{opacity:1,x:0,duration:.6,delay:n*.07});const i=t.querySelector(".sk-fill");i&&at.to(i,{width:i.dataset.w+"%",duration:1.5,delay:.3+n*.05,ease:"power2.out"})}})}),at.utils.toArray(".work-item").forEach((t,n)=>{at.to(t,{opacity:1,x:0,duration:.6,delay:n*.1,scrollTrigger:{trigger:t,start:"top 90%"}})}),at.utils.toArray(".link-card").forEach((t,n)=>{at.to(t,{opacity:1,y:0,duration:.7,delay:n*.1,scrollTrigger:{trigger:t,start:"top 90%"}})});const e=document.querySelector(".marquee-track");e&&at.to(e,{x:"-50%",duration:22,ease:"none",repeat:-1})}function xS(){const r=document.getElementById("dark-mode-toggle");if(!r)return;const e=document.documentElement,t=localStorage.getItem("theme")||"dark";e.setAttribute("data-theme",t),rh(r,t),r.addEventListener("click",()=>{const i=e.getAttribute("data-theme")==="dark"?"light":"dark";e.setAttribute("data-theme",i),localStorage.setItem("theme",i),rh(r,i)})}function rh(r,e){r.textContent=e==="dark"?"[ LIGHT ]":"[ DARK ]"}document.addEventListener("DOMContentLoaded",()=>{hp(),xS(),Nx(),vS()});window.addEventListener("load",()=>{const r=document.getElementById("loader");r&&setTimeout(()=>{r.classList.add("fade-out"),setTimeout(()=>r.remove(),650)},1050)});
