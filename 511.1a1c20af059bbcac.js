"use strict";(self.webpackChunkdlxl=self.webpackChunkdlxl||[]).push([[511],{15194:(y,m,i)=>{i.d(m,{i:()=>D});var n=i(5e3);let D=(()=>{class u{constructor(){this.fileDrop=new n.vpe,this.preventBodyDrop=!0,this.active=!1}onDrop(r){r.preventDefault(),this.active=!1;const{dataTransfer:a}=r;if(a.items){const e=[];for(let t=0;t<a.items.length;t++)"file"===a.items[t].kind&&e.push(a.items[t].getAsFile());a.items.clear(),this.fileDrop.emit(e)}else{const e=a.files;a.clearData(),this.fileDrop.emit(Array.from(e))}}onDragOver(r){r.stopPropagation(),r.preventDefault(),this.active=!0}onDragLeave(r){this.active=!1}onBodyDragOver(r){this.preventBodyDrop&&(r.preventDefault(),r.stopPropagation())}onBodyDrop(r){this.preventBodyDrop&&r.preventDefault()}}return u.\u0275fac=function(r){return new(r||u)},u.\u0275dir=n.lG2({type:u,selectors:[["","appDropZone",""]],hostVars:2,hostBindings:function(r,a){1&r&&n.NdJ("drop",function(t){return a.onDrop(t)})("dragover",function(t){return a.onDragOver(t)})("dragleave",function(t){return a.onDragLeave(t)})("dragover",function(t){return a.onBodyDragOver(t)},!1,n.pYS)("drop",function(t){return a.onBodyDrop(t)},!1,n.pYS),2&r&&n.ekj("drop-zone-active",a.active)},inputs:{preventBodyDrop:"preventBodyDrop"},outputs:{fileDrop:"appDropZone"}}),u})()},31409:(y,m,i)=>{i.d(m,{x:()=>v});var n=i(80574),D=i(5e3),u=i(45230);let v=(()=>{class r{constructor(e){this.plus=e}toJsonArray(e,t=!0){return new Promise(s=>{let o={};if(this.plus.load(),null!=e&&"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"!=e.type&&"application/vnd.ms-excel"!=e.type)return this.plus.alertError("Kh\xf4ng ph\u1ea3i file excel");const l=new FileReader;l.readAsBinaryString(e),l.onloadend=d=>{const _=n.ij(d.target.result,{type:"binary",cellDates:!0,dateNF:"DD/MM/YYYY"}),f=_.SheetNames;for(let p=0;p<f.length;p++){const h=f[p],E=n.P6.sheet_to_json(_.Sheets[h],{header:1,raw:t});o[`${h}`]=this.convertJSon(E)}this.plus.loaded(),s(o)}})}read(e,t=2){return new Promise(s=>{let o=[];if(this.plus.load(),null!=e&&"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"!=e.type&&"application/vnd.ms-excel"!=e.type)return this.plus.alertError("Kh\xf4ng ph\u1ea3i file excel");const l=new FileReader;l.readAsBinaryString(e),l.onloadend=d=>{const _=n.ij(d.target.result,{type:"binary",cellDates:!0,dateNF:"DD/MM/YYYY"}),f=_.SheetNames;for(let p=0;p<t;p++){const E=n.P6.sheet_to_json(_.Sheets[f[p]],{header:1});o.push(E)}this.plus.loaded(),s(o)}})}convertJSon(e){const t=[];for(let s=1;s<e.length;s++){const o={};e[0].forEach((l,d)=>{o[`${l}`]=e[s][d]}),t.push(o)}return t}convertJSonByX(e){const t=[];for(let s=1;s<e.length;s++)if("x"==e[s][0]){const o={};e[0].forEach((l,d)=>{o[`${l}`]=e[s][d]}),t.push(o)}return t}readXlsxToMerge(e){return console.log(e),new Promise((t,s)=>{this.plus.load();let o={};if(null!=e&&"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"!=e.type&&"application/vnd.ms-excel"!=e.type)return this.plus.alertError("Kh\xf4ng ph\u1ea3i file excel");const l=new FileReader;l.readAsBinaryString(e),l.onloadend=d=>{const _=n.ij(d.target.result,{type:"binary",cellDates:!0,dateNF:"DD/MM/YYYY"}),f=_.SheetNames;for(let p=0;p<f.length;p++){const h=f[p];if("_Merge"==h)return this.plus.alertError("Vui l\xf2ng \u0111\u1ed5i t\xean sheet _Merge th\xe0nh t\xean kh\xe1c");const E=n.P6.sheet_to_json(_.Sheets[h],{header:1,raw:!0});o[`${0==p?"_Merge":h}`]=this.convertJSonByX(E)}t(o),this.plus.loaded()}})}export(e,t=""){const s=n.P6.json_to_sheet(e,{skipHeader:!0,dateNF:"mm/dd/yyyy;@",cellDates:!0}),o=n.P6.book_new();n.P6.book_append_sheet(o,s,"ChuaImport"),n.NC(o,"4la-"+t+"-ChuaImport.xlsx")}exportTar(e,t=""){for(let c=0;c<e.length;c++)delete e[c].dateModify,delete e[c].canEdit,delete e[c].keyWord,delete e[c].__v,delete e[c]._id;let s=JSON.stringify(e),o="data:application/json;charset=utf-8,"+encodeURIComponent(s);console.log(o);let l=`4la-${t||""}`+Date.now()+".tar",d=document.createElement("a");d.setAttribute("href",o),d.setAttribute("download",l),d.click()}}return r.\u0275fac=function(e){return new(e||r)(D.LFG(u.T))},r.\u0275prov=D.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()},48387:(y,m,i)=>{i.d(m,{D:()=>a});var n=i(51372),D=i(69808),u=i(93075),v=i(5923),r=i(5e3);let a=(()=>{class e{}return e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=r.oAB({type:e}),e.\u0275inj=r.cJS({imports:[[D.ez,u.u5,n.qX,v.X]]}),e})()}}]);