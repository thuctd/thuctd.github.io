"use strict";(self.webpackChunkdlxl=self.webpackChunkdlxl||[]).push([[222],{15222:(at,C,n)=>{n.r(C),n.d(C,{ThuChiModule:()=>ot});var Z=n(85913),D=n(83886),A=n(51372),b=n(34291),c=n(69808),T=n(99826),N=n(15228),h=n(93075),k=n(15439),J=n.n(k),t=n(5e3),x=n(45230),m=n(67322),I=n(77531),p=n(86856),_=n(91079),F=n(90508),M=n(74107),E=n(32368),U=n(47423),Y=n(25245),B=n(18849),Q=n(30358),S=n(8774),P=n(97012),G=n(87654),v=n(30627);function q(e,s){if(1&e&&(t.TgZ(0,"mat-option",26),t._uU(1),t.qZA()),2&e){const i=s.$implicit;t.s9C("value",i),t.xp6(1),t.hij(" ",i," ")}}function W(e,s){if(1&e&&(t.TgZ(0,"mat-option",26),t._uU(1),t.qZA()),2&e){const i=s.$implicit;t.s9C("value",i.NoiDung),t.xp6(1),t.hij("",i.NoiDung," ")}}function w(e,s){if(1&e){const i=t.EpF();t.TgZ(0,"button",27),t.NdJ("click",function(){return t.CHM(i),t.oxw().save()}),t.TgZ(1,"mat-icon"),t._uU(2,"save"),t.qZA()()}2&e&&t.Q6J("@slideIn",void 0)}function O(e,s){if(1&e){const i=t.EpF();t.TgZ(0,"button",28),t.NdJ("click",function(){return t.CHM(i),t.oxw().reload()}),t.TgZ(1,"mat-icon"),t._uU(2,"undo"),t.qZA()()}2&e&&t.Q6J("@slideIn",void 0)}function H(e,s){if(1&e){const i=t.EpF();t.TgZ(0,"mat-icon",39),t.NdJ("click",function(){t.CHM(i);const a=t.oxw().$implicit;return t.oxw(2).onDelete(a)}),t._uU(1,"delete"),t.qZA()}}const j=function(e){return{"text-primary":e}};function $(e,s){if(1&e){const i=t.EpF();t.TgZ(0,"tr")(1,"td",36),t.NdJ("click",function(){const r=t.CHM(i).$implicit;return t.oxw(2).onEdit(r)}),t._uU(2),t.ALo(3,"date"),t.qZA(),t.TgZ(4,"td",36),t.NdJ("click",function(){const r=t.CHM(i).$implicit;return t.oxw(2).onEdit(r)}),t._uU(5),t.qZA(),t.TgZ(6,"td",37),t.NdJ("click",function(){const r=t.CHM(i).$implicit;return t.oxw(2).onEdit(r)}),t._uU(7),t.ALo(8,"commas"),t.qZA(),t.TgZ(9,"td"),t.YNc(10,H,2,0,"mat-icon",38),t.qZA()()}if(2&e){const i=s.$implicit,o=t.oxw(2);t.Q6J("@slideIn",0==o.filter.length),t.xp6(2),t.Oqu(t.xi3(3,6,i.Ngay,"dd/MM/yyyy")),t.xp6(3),t.Oqu(i.DienGiai),t.xp6(1),t.Q6J("ngClass",t.VKq(11,j,i.ThuChi)),t.xp6(1),t.hij(" ",t.lcZ(8,9,1e3*i.SoTien),""),t.xp6(3),t.Q6J("ngIf",o.checkPer(4))}}function V(e,s){if(1&e){const i=t.EpF();t.TgZ(0,"div",6)(1,"div",29)(2,"app-chip",30),t.NdJ("day",function(a){return t.CHM(i),t.oxw().thuChiNgay(a)}),t.qZA(),t._UZ(3,"app-chart",31)(4,"app-chart",31),t.qZA(),t.TgZ(5,"div",29)(6,"app-search-idb",32),t.NdJ("filter",function(a){return t.CHM(i),t.oxw().search(a)}),t.qZA(),t.TgZ(7,"table",33)(8,"thead")(9,"tr")(10,"th"),t._uU(11,"Ng\xe0y"),t.qZA(),t.TgZ(12,"th"),t._uU(13,"Di\u1ec5n gi\u1ea3i"),t.qZA(),t.TgZ(14,"th"),t._uU(15,"S\u1ed1 ti\u1ec1n"),t.qZA(),t.TgZ(16,"th")(17,"i",34),t.NdJ("click",function(){return t.CHM(i),t.oxw().reload()}),t.qZA()()()(),t.TgZ(18,"tbody"),t.YNc(19,$,11,13,"tr",35),t.ALo(20,"slice"),t.qZA(),t._UZ(21,"tfoot"),t.qZA()()()}if(2&e){const i=t.oxw();t.xp6(3),t.Q6J("id","thu-chi")("label","Ph\xe2n lo\u1ea1i")("arr",i.chart)("type","bar"),t.xp6(1),t.Q6J("id","ThuChiChart")("label","C\xe2n \u0111\u1ed1i d\xf2ng ti\u1ec1n")("arr",i.ThuChiChart)("type","doughnut"),t.xp6(2),t.Q6J("db",i.db)("api",i.api)("keySearch","DienGiai"),t.xp6(13),t.Q6J("ngForOf",t.Dn7(20,12,i.filter.length>0?i.filter:i.items,0,20))}}function K(e,s){if(1&e&&t._UZ(0,"app-import-database",40),2&e){const i=t.oxw();t.Q6J("api",i.api)("form",i.importForm)}}let R=(()=>{class e{constructor(i,o){this.plus=i,this.fb=o,this.show=!1,this.main=this.fb.group({_id:[,[]],Ngay:[new Date,[h.kI.required]],DienGiai:[,[h.kI.required,h.kI.minLength(2)]],PhanLoai:["Thi\u1ebft y\u1ebfu",[h.kI.required]],SoTien:[,[h.kI.required]],ThuChi:[!1,[h.kI.required]]}),this.importForm=this.fb.group({Ngay:[],DienGiai:[],PhanLoai:[],SoTien:[],ThuChi:[]}),this.searchForm=this.fb.group({input:[,[h.kI.minLength(3),h.kI.maxLength(50)]]}),this.title="Thu-Chi",this.dbName="user",this.api="thu-chi",this.db=null,this.items=[],this.filter=[],this.keyWord=[],this.showForm=!1,this.global=!1}ngOnInit(){this.plus.setTiTle(this.title),this.plus.IDB_InitDB(this.dbName).subscribe(i=>function(e,s,i,o){return new(i||(i=Promise))(function(r,l){function d(u){try{f(o.next(u))}catch(g){l(g)}}function nt(u){try{f(o.throw(u))}catch(g){l(g)}}function f(u){u.done?r(u.value):function a(r){return r instanceof i?r:new i(function(l){l(r)})}(u.value).then(d,nt)}f((o=o.apply(e,s||[])).next())})}(this,void 0,void 0,function*(){this.db=i,this.plus.updateRealtime(this.db,this.api,this.global),this.plus.IDB_DB_CleanTrash(i,this.api),this.plus.updateAPi.subscribe(o=>{o&&this.getIDB()})})),this.getKeyWord()}getIDB(){console.log("getIDB"),this.filter=[],this.plus.IDB_DB_GetAll(this.db,this.api).subscribe(i=>{this.items=i,this.thuChiNgay(7)})}thuChiNgay(i=1){const o=this.filter.length>0?this.filter:this.items,a=Date.now()-24*i*60*60*1e3,r=[];for(let l=0;l<o.length;l++)if(o[l].Ngay>a){const d={ThuChi:o[l].ThuChi?"Thu":"Chi",SoTien:1e3*o[l].SoTien,Ngay:J()(o[l].Ngay).format("DD/MM"),PhanLoai:o[l].PhanLoai};r.push(d)}this.ThuChiChart=this.plus.generateChart(r,"ThuChi","SoTien"),this.chart=this.plus.generateChart(r,"PhanLoai","SoTien")}ngOnDestroy(){console.log("Destroy thu-chi"),this.plus.subs.unsubscribe()}save(){if(this.main.invalid)return;let i=this.main.value;i.Ngay=Date.parse(i.Ngay),i.SoTien=i.SoTien,null!==i._id?this.plus.httpPut(this.api,i).subscribe(o=>{this.showForm=!1,this.reload()}):(delete i._id,this.plus.httpPost(this.api,i).subscribe(o=>{this.showForm=!1,this.reload()})),this.main.reset({Ngay:this.plus.dateFormat(Date.now(),"YYYY-MM-DD","x"),ThuChi:!1,PhanLoai:"Thi\u1ebft y\u1ebfu"}),this.main.updateValueAndValidity()}onEdit(i){this.main.valid||(this.showForm=!0,i.Ngay=this.plus.dateFormat(i.Ngay,"YYYY-MM-DD","x"),i.SoTien=i.SoTien,this.items=[],this.plus.scrollTop(),this.main.patchValue(i),this.filter[0]=i)}onDelete(i){!confirm("B\u1ea1n mu\u1ed1n x\xf3a?")||(this.plus.load(),this.plus.httpDisable(this.api,i).then(a=>{console.log(a)}))}selectMat(i){this.main.controls.DienGiai.setValue(i.DienGiai)}search(i){this.filter=i,this.thuChiNgay(365)}getKeyWord(){this.keyWord=[],this.main.valueChanges.subscribe(i=>{this.plus.IDB_DB_GetAll(this.db,this.api).subscribe(o=>{this.keyWord=this.plus.getKeyWord(o,"DienGiai",i.DienGiai)})})}keyWordF2(){this.keyWord=[],this.searchForm.valueChanges.subscribe(i=>{this.plus.IDB_DB_GetAll(this.db,this.api).subscribe(o=>{this.keyWord=this.plus.getKeyWord(o,"DienGiai",i.DienGiai)})})}find(i){this.items=i}checkPer(i){return this.plus.checkPer(this.api,i)}reload(){return this.plus.reload(this.dbName+"/"+this.api)}reset(){this.plus.loaded(),this.filter=[],this.getIDB(),this.main.patchValue({Ngay:this.plus.dateFormat(Date.now(),"YYYY-MM-DD","x"),ThuChi:!1,PhanLoai:"Thi\u1ebft y\u1ebfu"})}checkPass(){"*"==prompt("Nh\u1eadp m\u1eadt kh\u1ea9u")&&(this.show=!0)}clearDB(){this.plus.IDB_DB_DeleteDB("user").then(i=>{console.log(i)})}}return e.\u0275fac=function(i){return new(i||e)(t.Y36(x.T),t.Y36(h.qu))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-thu-chi"]],decls:44,vars:16,consts:[[1,"container"],[1,"row","justify-content-center"],[1,"col-lg-8"],[1,"card"],["autocomplete","off",3,"formGroup"],["type","text","hidden","","formControlName","_id"],[1,"row"],[1,"col-sm-6"],["required","","matInput","","formControlName","Ngay",3,"matDatepicker"],["matSuffix","",3,"for"],["Ngay",""],["required","","type","text","autocomplete","off","matInput","","formControlName","DienGiai",3,"matAutocomplete"],["autoActiveFirstOption",""],["DienGiai","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],["formControlName","PhanLoai","required",""],["required","","type","number","autocomplete","off","matInput","","formControlName","SoTien",2,"text-align","right",3,"keyup.enter"],["matSuffix",""],["matPrefix","","formControlName","ThuChi","checked","false","color","warn",1,"mx-2"],[1,"text-center"],["mat-raised-button","","color","warn",3,"click",4,"ngIf"],["mat-raised-button","","color","primary","id","back-btn",3,"click",4,"ngIf"],["class","row",4,"ngIf"],[3,"dataJson","api"],[3,"api","form",4,"ngIf"],["mat-raised-button","",3,"click"],[3,"value"],["mat-raised-button","","color","warn",3,"click"],["mat-raised-button","","color","primary","id","back-btn",3,"click"],[1,"col-md-6"],[3,"day"],[3,"id","label","arr","type"],[3,"db","api","keySearch","filter"],[1,"table","table-hover",2,"height","200px"],[1,"fa","fa-refresh","mx-2","text-info",3,"click"],[4,"ngFor","ngForOf"],[3,"click"],[1,"text-right",3,"ngClass","click"],["color","warn",3,"click",4,"ngIf"],["color","warn",3,"click"],[3,"api","form"]],template:function(i,o){if(1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"form",4),t._UZ(5,"input",5),t.TgZ(6,"div",6)(7,"div",7)(8,"mat-form-field")(9,"mat-label"),t._uU(10,"Ng\xe0y"),t.qZA(),t._UZ(11,"input",8)(12,"mat-datepicker-toggle",9)(13,"mat-datepicker",null,10),t.qZA(),t.TgZ(15,"mat-form-field")(16,"mat-label"),t._uU(17,"Di\u1ec5n gi\u1ea3i"),t.qZA(),t._UZ(18,"input",11),t.qZA(),t.TgZ(19,"mat-autocomplete",12,13),t.YNc(21,q,2,2,"mat-option",14),t.qZA()(),t.TgZ(22,"div",7)(23,"mat-form-field")(24,"mat-label"),t._uU(25,"Ph\xe2n lo\u1ea1i"),t.qZA(),t.TgZ(26,"mat-select",15),t.YNc(27,W,2,2,"mat-option",14),t.ALo(28,"catalog"),t.qZA()(),t.TgZ(29,"mat-form-field")(30,"mat-label"),t._uU(31),t.qZA(),t.TgZ(32,"input",16),t.NdJ("keyup.enter",function(){return o.save()}),t.qZA(),t.TgZ(33,"span",17),t._uU(34,".000"),t.qZA(),t._UZ(35,"mat-slide-toggle",18),t.qZA()()(),t.TgZ(36,"div",19),t.YNc(37,w,3,1,"button",20),t.YNc(38,O,3,1,"button",21),t.qZA()()()()(),t.YNc(39,V,22,16,"div",22),t._UZ(40,"app-export-ecxel",23),t.YNc(41,K,1,2,"app-import-database",24),t.qZA(),t.TgZ(42,"button",25),t.NdJ("click",function(){return o.clearDB()}),t._uU(43,"text"),t.qZA()),2&i){const a=t.MAs(14),r=t.MAs(20);t.xp6(2),t.Q6J("@slideIn",void 0),t.xp6(2),t.Q6J("formGroup",o.main),t.xp6(7),t.Q6J("matDatepicker",a),t.xp6(1),t.Q6J("for",a),t.xp6(6),t.Q6J("matAutocomplete",r),t.xp6(3),t.Q6J("ngForOf",o.keyWord),t.xp6(6),t.Q6J("ngForOf",t.lcZ(28,14,"ThuChi")),t.xp6(4),t.hij("S\u1ed1 ti\u1ec1n ",o.main.controls.ThuChi.value?"Thu ":"Chi",""),t.xp6(6),t.Q6J("ngIf",o.checkPer(2)&&o.main.valid),t.xp6(1),t.Q6J("ngIf",o.checkPer(2)&&o.main.valid),t.xp6(1),t.Q6J("ngIf",o.items.length>0),t.xp6(1),t.Q6J("dataJson",o.items)("api",o.api),t.xp6(1),t.Q6J("ngIf",o.checkPer(4))}},directives:[h._Y,h.JL,h.sg,h.Fj,h.JJ,h.u,m.KE,m.hX,I.Nt,p.hl,h.Q7,p.nW,m.R9,p.Mq,_.ZL,_.XC,c.sg,F.ey,M.gD,h.wV,E.Rr,m.qo,c.O5,U.lW,Y.Hw,B.Y,Q.x,S.$,c.mk,P.t,G.y],pipes:[v.pW,c.OU,c.uU,v.W],styles:[""],data:{animation:[N.Ym]}}),e})(),y=(()=>{class e{constructor(i){this.plus=i}canActivate(){return this.plus.checkPer("thu-chi")}}return e.\u0275fac=function(i){return new(i||e)(t.LFG(x.T))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac}),e})();const z=[{path:"thu-chi",component:R,canActivate:[y]}];let X=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({providers:[y],imports:[[T.Bz.forChild(z)],T.Bz]}),e})();var tt=n(60929),it=n(41019),et=n(48387);let ot=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[c.ez,b.ShareModule,tt.F,A.qX,X,D.N,it.k,Z.m,et.D]]}),e})()}}]);