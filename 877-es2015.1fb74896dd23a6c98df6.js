"use strict";(self.webpackChunk_4la=self.webpackChunk_4la||[]).push([[877],{9877:function(t,i,e){e.r(i),e.d(i,{ThuChiModule:function(){return H}});var n=e(85913),o=e(83886),a=e(13397),r=e(88817),s=e(12057),h=e(33982),c=e(15228),u=e(24751),l=e(16738),p=e.n(l),d=e(74788),m=e(57922),g=e(46833),f=e(46113),Z=e(12895),T=e(50296),y=e(61260),A=e(73624),b=e(97012),q=e(2895),x=e(17935),k=e(49356),D=e(18849),C=e(46926),N=e(8774),v=e(55352),_=e(73888);function w(t,i){if(1&t&&(d.TgZ(0,"mat-option",26),d._uU(1),d.qZA()),2&t){const t=i.$implicit;d.s9C("value",t),d.xp6(1),d.hij(" ",t," ")}}function J(t,i){if(1&t&&(d.TgZ(0,"mat-option",26),d._uU(1),d.qZA()),2&t){const t=i.$implicit;d.s9C("value",t.NoiDung),d.xp6(1),d.hij("",t.NoiDung," ")}}function I(t,i){if(1&t){const t=d.EpF();d.TgZ(0,"button",27),d.NdJ("click",function(){return d.CHM(t),d.oxw().save()}),d.TgZ(1,"mat-icon"),d._uU(2,"save"),d.qZA(),d.qZA()}2&t&&d.Q6J("@slideIn",void 0)}function U(t,i){if(1&t){const t=d.EpF();d.TgZ(0,"button",28),d.NdJ("click",function(){return d.CHM(t),d.oxw().reload()}),d.TgZ(1,"mat-icon"),d._uU(2,"undo"),d.qZA(),d.qZA()}2&t&&d.Q6J("@slideIn",void 0)}function F(t,i){if(1&t){const t=d.EpF();d.TgZ(0,"mat-icon",39),d.NdJ("click",function(){d.CHM(t);const i=d.oxw().$implicit;return d.oxw(2).onDelete(i)}),d._uU(1,"delete"),d.qZA()}}const Y=function(t){return{"text-primary":t}};function B(t,i){if(1&t){const t=d.EpF();d.TgZ(0,"tr"),d.TgZ(1,"td",36),d.NdJ("click",function(){const i=d.CHM(t).$implicit;return d.oxw(2).onEdit(i)}),d._uU(2),d.ALo(3,"date"),d.qZA(),d.TgZ(4,"td",36),d.NdJ("click",function(){const i=d.CHM(t).$implicit;return d.oxw(2).onEdit(i)}),d._uU(5),d.qZA(),d.TgZ(6,"td",37),d.NdJ("click",function(){const i=d.CHM(t).$implicit;return d.oxw(2).onEdit(i)}),d._uU(7),d.ALo(8,"commas"),d.qZA(),d.TgZ(9,"td"),d.YNc(10,F,2,0,"mat-icon",38),d.qZA(),d.qZA()}if(2&t){const t=i.$implicit,e=d.oxw(2);d.Q6J("@slideIn",0==e.filter.length),d.xp6(2),d.Oqu(d.xi3(3,6,t.Ngay,"dd/MM/yyyy")),d.xp6(3),d.Oqu(t.DienGiai),d.xp6(1),d.Q6J("ngClass",d.VKq(11,Y,t.ThuChi)),d.xp6(1),d.hij(" ",d.lcZ(8,9,1e3*t.SoTien),""),d.xp6(3),d.Q6J("ngIf",e.checkPer(4))}}function M(t,i){if(1&t){const t=d.EpF();d.TgZ(0,"div",6),d.TgZ(1,"div",29),d.TgZ(2,"app-chip",30),d.NdJ("day",function(i){return d.CHM(t),d.oxw().thuChiNgay(i)}),d.qZA(),d._UZ(3,"app-chart",31),d._UZ(4,"app-chart",31),d.qZA(),d.TgZ(5,"div",29),d.TgZ(6,"app-search-idb",32),d.NdJ("filter",function(i){return d.CHM(t),d.oxw().search(i)}),d.qZA(),d.TgZ(7,"table",33),d.TgZ(8,"thead"),d.TgZ(9,"tr"),d.TgZ(10,"th"),d._uU(11,"Ng\xe0y"),d.qZA(),d.TgZ(12,"th"),d._uU(13,"Di\u1ec5n gi\u1ea3i"),d.qZA(),d.TgZ(14,"th"),d._uU(15,"S\u1ed1 ti\u1ec1n"),d.qZA(),d.TgZ(16,"th"),d.TgZ(17,"i",34),d.NdJ("click",function(){return d.CHM(t),d.oxw().reload()}),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.TgZ(18,"tbody"),d.YNc(19,B,11,13,"tr",35),d.ALo(20,"slice"),d.qZA(),d._UZ(21,"tfoot"),d.qZA(),d.qZA(),d.qZA()}if(2&t){const t=d.oxw();d.xp6(3),d.Q6J("id","thu-chi")("arr",t.chart)("type","bar"),d.xp6(1),d.Q6J("id","ThuChiChart")("arr",t.ThuChiChart)("type","doughnut"),d.xp6(2),d.Q6J("db",t.db)("api",t.api)("keySearch","DienGiai"),d.xp6(13),d.Q6J("ngForOf",d.Dn7(20,10,t.filter.length>0?t.filter:t.items,0,20))}}function Q(t,i){if(1&t&&d._UZ(0,"app-import-database",40),2&t){const t=d.oxw();d.Q6J("api",t.api)("form",t.importForm)}}let P=(()=>{class t{constructor(t,i){this.plus=t,this.fb=i,this.show=!1,this.chart=[],this.ThuChiChart=[],this.main=this.fb.group({_id:[,[]],Ngay:[new Date,[u.kI.required]],DienGiai:[,[u.kI.required,u.kI.minLength(2)]],PhanLoai:["Thi\u1ebft y\u1ebfu",[u.kI.required]],SoTien:[,[u.kI.required]],ThuChi:[!1,[u.kI.required]]}),this.importForm=this.fb.group({Ngay:[],DienGiai:[],PhanLoai:[],SoTien:[],ThuChi:[]}),this.searchForm=this.fb.group({input:[,[u.kI.minLength(3),u.kI.maxLength(50)]]}),this.title="Thu-Chi",this.dbName="user",this.api="thu-chi",this.db=null,this.items=[],this.filter=[],this.keyWord=[],this.showForm=!1}ngOnInit(){this.plus.setTiTle(this.title),this.plus.IDB_InitDB(this.dbName).subscribe(t=>function(t,i,e,n){return new(e||(e=Promise))(function(o,a){function r(t){try{h(n.next(t))}catch(i){a(i)}}function s(t){try{h(n.throw(t))}catch(i){a(i)}}function h(t){t.done?o(t.value):function(t){return t instanceof e?t:new e(function(i){i(t)})}(t.value).then(r,s)}h((n=n.apply(t,i||[])).next())})}(this,void 0,void 0,function*(){this.db=t,this.getIDB(),this.plus.updateUserLocal(t,this.api),this.plus.updateAPi.subscribe(t=>{t&&this.getIDB()})})),this.getKeyWord()}getIDB(){console.log("getIDB"),this.filter=[],this.plus.IDB_DB_GetAll(this.db,this.api).subscribe(t=>{this.items=t,this.thuChiNgay(7)})}thuChiNgay(t=1){const i=this.filter.length>0?this.filter:this.items,e=Date.now()-24*t*60*60*1e3,n=[];for(let o=0;o<i.length;o++)if(i[o].Ngay>e){const t={ThuChi:i[o].ThuChi?"Thu":"Chi",SoTien:1e3*i[o].SoTien,Ngay:p()(i[o].Ngay).format("DD/MM"),PhanLoai:i[o].PhanLoai};n.push(t)}this.ThuChiChart=this.plus.generateChart(n,"ThuChi","SoTien"),this.chart=this.plus.generateChart(n,"PhanLoai","SoTien")}ngOnDestroy(){console.log("Destroy thu-chi"),this.plus.subs.unsubscribe()}save(){if(this.main.invalid)return;let t=this.main.value;t.Ngay=Date.parse(t.Ngay),t.SoTien=t.SoTien,null!==t._id?this.plus.httpPut(this.api,t).subscribe(t=>{this.showForm=!1,this.getIDB()}):(delete t._id,this.plus.httpPost(this.api,t).subscribe(t=>{this.showForm=!1,this.getIDB()})),this.main.reset({Ngay:this.plus.dateFormat(Date.now(),"YYYY-MM-DD","x"),ThuChi:!1,PhanLoai:"Thi\u1ebft y\u1ebfu"}),this.main.updateValueAndValidity()}onEdit(t){this.main.valid||(this.showForm=!0,t.Ngay=this.plus.dateFormat(t.Ngay,"YYYY-MM-DD","x"),t.SoTien=t.SoTien,this.items=[],this.plus.scrollTop(),this.main.patchValue(t),this.filter[0]=t)}onDelete(t){!confirm("B\u1ea1n mu\u1ed1n x\xf3a?")||(this.plus.load(),this.plus.httpDisable(this.api,t).then(t=>{console.log(t)}))}selectMat(t){this.main.controls.DienGiai.setValue(t.DienGiai)}search(t){this.filter=t,this.thuChiNgay(365)}getKeyWord(){this.keyWord=[],this.main.valueChanges.subscribe(t=>{this.plus.IDB_DB_GetAll(this.db,this.api).subscribe(i=>{this.keyWord=this.plus.getKeyWord(i,"DienGiai",t.DienGiai)})})}keyWordF2(){this.keyWord=[],this.searchForm.valueChanges.subscribe(t=>{this.plus.IDB_DB_GetAll(this.db,this.api).subscribe(i=>{this.keyWord=this.plus.getKeyWord(i,"DienGiai",t.DienGiai)})})}find(t){this.items=t}checkPer(t){return this.plus.checkPer(this.api,t)}reload(){return this.plus.reload(this.dbName+"/"+this.api)}reset(){this.plus.loaded(),this.filter=[],this.getIDB(),this.main.patchValue({Ngay:this.plus.dateFormat(Date.now(),"YYYY-MM-DD","x"),ThuChi:!1,PhanLoai:"Thi\u1ebft y\u1ebfu"})}checkPass(){"*"==prompt("Nh\u1eadp m\u1eadt kh\u1ea9u")&&(this.show=!0)}clearDB(){this.plus.IDB_DB_DeleteDB("user").then(t=>{console.log(t)})}}return t.\u0275fac=function(i){return new(i||t)(d.Y36(m.T),d.Y36(u.qu))},t.\u0275cmp=d.Xpm({type:t,selectors:[["app-thu-chi"]],decls:44,vars:16,consts:[[1,"container"],[1,"row","justify-content-center"],[1,"col-lg-8"],[1,"card"],["autocomplete","off",3,"formGroup"],["type","text","hidden","","formControlName","_id"],[1,"row"],[1,"col-sm-6"],["required","","matInput","","formControlName","Ngay",3,"matDatepicker"],["matSuffix","",3,"for"],["Ngay",""],["required","","type","text","autocomplete","off","matInput","","formControlName","DienGiai",3,"matAutocomplete"],["autoActiveFirstOption",""],["DienGiai","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],["formControlName","PhanLoai","required",""],["required","","type","number","autocomplete","off","matInput","","formControlName","SoTien",2,"text-align","right",3,"keyup.enter"],["matSuffix",""],["matPrefix","","formControlName","ThuChi","checked","false","color","warn",1,"mx-2"],[1,"text-center"],["mat-raised-button","","color","warn",3,"click",4,"ngIf"],["mat-raised-button","","color","primary","id","back-btn",3,"click",4,"ngIf"],["class","row",4,"ngIf"],[3,"dataJson","api"],[3,"api","form",4,"ngIf"],["mat-raised-button","",3,"click"],[3,"value"],["mat-raised-button","","color","warn",3,"click"],["mat-raised-button","","color","primary","id","back-btn",3,"click"],[1,"col-md-6"],[3,"day"],[3,"id","arr","type"],[3,"db","api","keySearch","filter"],[1,"table","table-hover",2,"height","200px"],[1,"fa","fa-refresh","mx-2","text-info",3,"click"],[4,"ngFor","ngForOf"],[3,"click"],[1,"text-right",3,"ngClass","click"],["color","warn",3,"click",4,"ngIf"],["color","warn",3,"click"],[3,"api","form"]],template:function(t,i){if(1&t&&(d.TgZ(0,"div",0),d.TgZ(1,"div",1),d.TgZ(2,"div",2),d.TgZ(3,"div",3),d.TgZ(4,"form",4),d._UZ(5,"input",5),d.TgZ(6,"div",6),d.TgZ(7,"div",7),d.TgZ(8,"mat-form-field"),d.TgZ(9,"mat-label"),d._uU(10,"Ng\xe0y"),d.qZA(),d._UZ(11,"input",8),d._UZ(12,"mat-datepicker-toggle",9),d._UZ(13,"mat-datepicker",null,10),d.qZA(),d.TgZ(15,"mat-form-field"),d.TgZ(16,"mat-label"),d._uU(17,"Di\u1ec5n gi\u1ea3i"),d.qZA(),d._UZ(18,"input",11),d.qZA(),d.TgZ(19,"mat-autocomplete",12,13),d.YNc(21,w,2,2,"mat-option",14),d.qZA(),d.qZA(),d.TgZ(22,"div",7),d.TgZ(23,"mat-form-field"),d.TgZ(24,"mat-label"),d._uU(25,"Ph\xe2n lo\u1ea1i"),d.qZA(),d.TgZ(26,"mat-select",15),d.YNc(27,J,2,2,"mat-option",14),d.ALo(28,"catalog"),d.qZA(),d.qZA(),d.TgZ(29,"mat-form-field"),d.TgZ(30,"mat-label"),d._uU(31),d.qZA(),d.TgZ(32,"input",16),d.NdJ("keyup.enter",function(){return i.save()}),d.qZA(),d.TgZ(33,"span",17),d._uU(34,".000"),d.qZA(),d._UZ(35,"mat-slide-toggle",18),d.qZA(),d.qZA(),d.qZA(),d.TgZ(36,"div",19),d.YNc(37,I,3,1,"button",20),d.YNc(38,U,3,1,"button",21),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.YNc(39,M,22,14,"div",22),d._UZ(40,"app-export-ecxel",23),d.YNc(41,Q,1,2,"app-import-database",24),d.qZA(),d.TgZ(42,"button",25),d.NdJ("click",function(){return i.clearDB()}),d._uU(43,"text"),d.qZA()),2&t){const t=d.MAs(14),e=d.MAs(20);d.xp6(2),d.Q6J("@slideIn",void 0),d.xp6(2),d.Q6J("formGroup",i.main),d.xp6(7),d.Q6J("matDatepicker",t),d.xp6(1),d.Q6J("for",t),d.xp6(6),d.Q6J("matAutocomplete",e),d.xp6(3),d.Q6J("ngForOf",i.keyWord),d.xp6(6),d.Q6J("ngForOf",d.lcZ(28,14,"ThuChi")),d.xp6(4),d.hij("S\u1ed1 ti\u1ec1n ",i.main.controls.ThuChi.value?"Thu ":"Chi",""),d.xp6(6),d.Q6J("ngIf",i.checkPer(2)&&i.main.valid),d.xp6(1),d.Q6J("ngIf",i.checkPer(2)&&i.main.valid),d.xp6(1),d.Q6J("ngIf",i.items.length>0),d.xp6(1),d.Q6J("dataJson",i.items)("api",i.api),d.xp6(1),d.Q6J("ngIf",i.checkPer(4))}},directives:[u._Y,u.JL,u.sg,u.Fj,u.JJ,u.u,g.KE,g.hX,f.Nt,Z.hl,u.Q7,Z.nW,g.R9,Z.Mq,T.ZL,T.XC,s.sg,y.gD,u.wV,A.Rr,g.qo,s.O5,b.t,q.lW,x.ey,k.Hw,D.Y,C.x,N.$,s.mk,v.y],pipes:[_.pW,s.OU,s.uU,_.W],styles:[""],data:{animation:[c.Ym]}}),t})(),S=(()=>{class t{constructor(t){this.plus=t}canActivate(){return this.plus.checkPer("thu-chi")}}return t.\u0275fac=function(i){return new(i||t)(d.LFG(m.T))},t.\u0275prov=d.Yz7({token:t,factory:t.\u0275fac}),t})();const L=[{path:"thu-chi",component:P,canActivate:[S]}];let G=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=d.oAB({type:t}),t.\u0275inj=d.cJS({providers:[S],imports:[[h.Bz.forChild(L)],h.Bz]}),t})();var W=e(60929),O=e(41019),E=e(48387);let H=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=d.oAB({type:t}),t.\u0275inj=d.cJS({imports:[[s.ez,r.ShareModule,W.F,a.qX,G,o.N,O.k,n.m,E.D]]}),t})()}}]);