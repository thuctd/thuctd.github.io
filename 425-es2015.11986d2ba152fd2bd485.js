(self.webpackChunk_4la=self.webpackChunk_4la||[]).push([[425],{94425:function(t,e,a){"use strict";a.r(e),a.d(e,{QuizModule:function(){return g}});var i=a(43552),n=a(52923),o=a(99594),r=a(16073),s=a(61511),p=a(82393),l=a(35366),u=a(68591),d=a(15980),c=a(5047);let h=(()=>{class t{constructor(t,e,a){this.fb=t,this.plus=e,this.route=a,this.main=this.fb.group({CauHoi:[,[r.kI.required]],DapAn1:[,[r.kI.required]],DapAn2:[,[r.kI.required]],DapAn3:[,[r.kI.required]],DapAn4:[,[r.kI.required]],DapAn5:[,[]],DapAnDung:[,[r.kI.required]],PhanLoai:[,[r.kI.required]],Nhom:[,[r.kI.required]]}),this.dbName="quiz",this.db=null,this.api="tba",this.collection="quiz",this.readonly=!0,this.importData=[],this.errorData=[]}ngOnInit(){this.init_IDB()}init_IDB(){this.plus.IDB_InitDB(this.dbName).subscribe(t=>{this.db=t,this.getById()})}getById(){this.plus.load();const t=this.route.snapshot.paramMap.get("id");t?this.plus.httpGet(this.api+"/id/"+t).subscribe(t=>{let e=this.plus.Crypt_DecryptRest(t);console.log(e),this.plus.loaded()},t=>this.plus.alertError()):this.plus.loaded()}save(){const t=this.route.snapshot.paramMap.get("id");let e=this.main.value;e.NgayLapDat=this.plus.dateFormat(e.NgayLapDat,"x","YYYY-MM-DD"),e.dateModify=Date.now(),+t>0?this.plus.httpPut(this.api,e).subscribe(t=>{this.plus.alertToasrt(t),this.plus.IDB_DB_Add(this.db,this.api,e)}):this.plus.httpPost(this.api,e).subscribe(t=>{this.plus.alertToasrt(t),this.plus.IDB_DB_Add(this.db,this.api,e),console.log(t)})}checkPer(t){return this.plus.checkPer(this.api,t)}editable(){this.readonly=!this.readonly}import(){const t=this.importData.map(t=>{let e=t;return e.keyWord=this.plus.removeAccents(JSON.stringify(t)),e});console.log(t);let e=JSON.stringify(t),a={data:this.plus.Crypt_Encrypt(e)};this.plus.httpPost(this.api+"/import",a).subscribe(t=>{console.log(t)})}onPaste(t){const e=t[1];console.log(e);let a={_id:+e[0],MaTram:e[0],TenTram:e[1],Tuyen:e[2],SoPha:e[3],CongSuat:+e[4],DienAp:e[5],SoMba:+e[6],SoHuu:e[7],ViTri:e[8]||"",HieuMccb:e[9]||"",IdmMccb:+e[10],NacMccb:+e[11]||1,CapSuatXuong:e[12]||"",CapSuatLen:e[13]||"",MaPk:e[14],PhaDauNoi:e[15]||"",NgayLapDat:this.plus.dateFormat(e[16],"DD/MM/YYYY","YYYY-MM-DD"),ToQuanLy:e[17]||"",GhiChu:e[18]||"",NhatKyThiCong:e[19]||"",TonTai:e[20]||""};console.log(a),this.main.patchValue(a)}onSelectFile(t){const e=t.slice(2);console.log(e),e.forEach((t,e)=>{let a={_id:+t[0],MaTram:t[0],TenTram:t[1],Tuyen:t[2],SoPha:t[3],CongSuat:+t[4],DienAp:t[5],SoMba:+t[6],SoHuu:t[7],ViTri:t[8]||"",HieuMccb:t[9]||"",IdmMccb:+t[10],NacMccb:+t[11]||1,CapSuatXuong:t[12]||"",CapSuatLen:t[13]||"",MaPk:t[14],PhaDauNoi:t[15]||"",NgayLapDat:this.plus.datexlsToUnix(t[16]),ToQuanLy:t[17]||"",GhiChu:t[18]||"",NhatKyThiCong:t[19]||"",TonTai:t[20]||""};this.main.patchValue(a),this.main.valid?this.importData.push(a):this.errorData.push(a)})}goBack(){this.plus.goBack()}deleteDB(){this.plus.httpDelete(this.api,"/find/all").subscribe(t=>{console.log(t)})}export(){this.plus.exportHTML("xx")}}return t.\u0275fac=function(e){return new(e||t)(l.Y36(r.qu),l.Y36(p.T),l.Y36(u.gz))},t.\u0275cmp=l.Xpm({type:t,selectors:[["app-quiz-edit"]],decls:58,vars:10,consts:[[1,"container"],[1,"text-center","text-primary","my-4"],[1,"formx",3,"formGroup"],[1,"input-group","mb-3"],[1,"input-group-prepend"],[1,"input-group-text"],["formControlName","CauHoi","rows","2",1,"form-control",3,"readOnly"],["formControlName","DapAn1","rows","2",1,"form-control",3,"readOnly"],["formControlName","DapAn2","rows","2",1,"form-control",3,"readOnly"],["formControlName","DapAn3","rows","2",1,"form-control",3,"readOnly"],["formControlName","DapAn4","rows","2",1,"form-control",3,"readOnly"],["formControlName","DapAn5","rows","2",1,"form-control",3,"readOnly"],[1,"row"],[1,"col-4"],["type","text","list","dapan","formControlName","DapAnDung",1,"form-control",3,"readOnly"],["type","text","formControlName","PhanLoai",1,"form-control",3,"readOnly"],["type","text","list","quiz","formControlName","Nhom",1,"form-control",3,"readOnly"],["mat-raised-button","","color","primary",3,"click"],[3,"xls"]],template:function(t,e){1&t&&(l.TgZ(0,"div",0),l.TgZ(1,"h4",1),l._uU(2,"QU\u1ea2N L\xdd C\xc2U H\u1eceI TR\u1eaeC NGHI\u1ec6M"),l.qZA(),l.TgZ(3,"div",2),l.TgZ(4,"div",3),l.TgZ(5,"div",4),l.TgZ(6,"span",5),l._uU(7,"C\xe2u h\u1ecfi"),l.qZA(),l.qZA(),l._UZ(8,"textarea",6),l.qZA(),l.TgZ(9,"div",3),l.TgZ(10,"div",4),l.TgZ(11,"span",5),l._uU(12,"\u0110\xe1p \xe1n A"),l.qZA(),l.qZA(),l._UZ(13,"textarea",7),l.qZA(),l.TgZ(14,"div",3),l.TgZ(15,"div",4),l.TgZ(16,"span",5),l._uU(17,"\u0110\xe1p \xe1n B"),l.qZA(),l.qZA(),l._UZ(18,"textarea",8),l.qZA(),l.TgZ(19,"div",3),l.TgZ(20,"div",4),l.TgZ(21,"span",5),l._uU(22,"\u0110\xe1p \xe1n C"),l.qZA(),l.qZA(),l._UZ(23,"textarea",9),l.qZA(),l.TgZ(24,"div",3),l.TgZ(25,"div",4),l.TgZ(26,"span",5),l._uU(27,"\u0110\xe1p \xe1n D"),l.qZA(),l.qZA(),l._UZ(28,"textarea",10),l.qZA(),l.TgZ(29,"div",3),l.TgZ(30,"div",4),l.TgZ(31,"span",5),l._uU(32,"\u0110\xe1p \xe1n E"),l.qZA(),l.qZA(),l._UZ(33,"textarea",11),l.qZA(),l.TgZ(34,"div",12),l.TgZ(35,"div",13),l.TgZ(36,"div",3),l.TgZ(37,"div",4),l.TgZ(38,"span",5),l._uU(39,"\u0110\xe1p \xe1n \u0111\xfang"),l.qZA(),l.qZA(),l._UZ(40,"input",14),l.qZA(),l.qZA(),l.TgZ(41,"div",13),l.TgZ(42,"div",3),l.TgZ(43,"div",4),l.TgZ(44,"span",5),l._uU(45,"Ph\xe2n Lo\u1ea1i"),l.qZA(),l.qZA(),l._UZ(46,"input",15),l.qZA(),l.qZA(),l.TgZ(47,"div",13),l.TgZ(48,"div",3),l.TgZ(49,"div",4),l.TgZ(50,"span",5),l._uU(51,"Nh\xf3m"),l.qZA(),l.qZA(),l._uU(52," \xa0"),l._UZ(53,"input",16),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(54,"div",12),l.TgZ(55,"button",17),l.NdJ("click",function(){return e.editable()}),l._uU(56,"S\u1eeda"),l.qZA(),l.qZA(),l.TgZ(57,"app-import-excel",18),l.NdJ("xls",function(t){return e.onSelectFile(t)}),l.qZA(),l.qZA()),2&t&&(l.xp6(3),l.Q6J("formGroup",e.main),l.xp6(5),l.Q6J("readOnly",e.readonly),l.xp6(5),l.Q6J("readOnly",e.readonly),l.xp6(5),l.Q6J("readOnly",e.readonly),l.xp6(5),l.Q6J("readOnly",e.readonly),l.xp6(5),l.Q6J("readOnly",e.readonly),l.xp6(5),l.Q6J("readOnly",e.readonly),l.xp6(7),l.Q6J("readOnly",e.readonly),l.xp6(6),l.Q6J("readOnly",e.readonly),l.xp6(7),l.Q6J("readOnly",e.readonly))},directives:[r.JL,r.sg,r.Fj,r.JJ,r.u,d.lW,c.a],styles:[""]}),t})();const Z=[{path:"",component:(()=>{class t{constructor(t){this.plus=t,this.dbName="quiz"}ngOnInit(){this.plus.IDB_InitDB(this.dbName)}}return t.\u0275fac=function(e){return new(e||t)(l.Y36(p.T))},t.\u0275cmp=l.Xpm({type:t,selectors:[["app-quiz"]],decls:2,vars:0,template:function(t,e){1&t&&(l.TgZ(0,"p"),l._uU(1,"quiz works!"),l.qZA())},styles:[""]}),t})()},{path:"edit",component:h},{path:"e-learning",component:h}];let m=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=l.oAB({type:t}),t.\u0275inj=l.cJS({imports:[[u.Bz.forChild(Z)],u.Bz]}),t})(),g=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=l.oAB({type:t}),t.\u0275inj=l.cJS({imports:[[s.ez,r.UX,m,o.q,n.k,i.D]]}),t})()},43552:function(t,e,a){"use strict";a.d(e,{D:function(){return s}});var i=a(99594),n=a(61511),o=a(16073),r=a(35366);let s=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[[n.ez,o.u5,i.q]]}),t})()}}]);