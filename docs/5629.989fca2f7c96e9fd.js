"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5629],{5629:(ve,v,s)=>{s.r(v),s.d(v,{PersonasPage:()=>fe});var d=s(5861),m=s(6895),r=s(4006),Z=s(7155),l=s(2879),u=s(3200);class I extends r.cw{constructor(){super({tipo_documento:new r.NI(null,[u.C1,u.X1]),numero_documento:new r.NI(null,[u.C1,(0,u.BS)(20)]),tipo_id:new r.NI(null,[u.C1,u.X1]),nombre_completo:new r.NI(null,[u.C1,(0,u.BS)(100)]),telefono:new r.NI(null,[u.C1,(0,u.BS)(15)]),entidad_id:new r.NI(null,[u.C1])})}get tipo_documento(){return this.get("tipo_documento")}get numero_documento(){return this.get("numero_documento")}get tipo_id(){return this.get("tipo_id")}get nombre_completo(){return this.get("nombre_completo")}get telefono(){return this.get("telefono")}get entidad_id(){return this.get("entidad_id")}get model(){const a=this.entidad_id.value?this.entidad_id.value.value:null,t=this.entidad_id.value?this.entidad_id.value.option:null;return{tipo_documento:this.tipo_documento.value,numero_documento:this.numero_documento.value,tipo_id:this.tipo_id.value,nombre_completo:(this.nombre_completo.value||"").toUpperCase(),telefono:this.telefono.value,entidad_id:a,entidad_nombre_completo:t}}resett(){this.reset()}}var J=s(8423);class N extends r.cw{constructor(){super({tipo:new r.NI(null,[u.C1,u.X1]),periodo_academico:new r.NI(null,[u.X1]),programa_academico:new r.NI(null),rotacion:new r.NI(null,[u.X1]),estudiantes_acargo:new r.NI(null,[u.X1]),maestro_id:new r.NI(null)})}get tipo(){return this.get("tipo")}get periodo_academico(){return this.get("periodo_academico")}get programa_academico(){return this.get("programa_academico")}get estudiantes_acargo(){return this.get("estudiantes_acargo")}get rotacion(){return this.get("rotacion")}get maestro_id(){return this.get("maestro_id")}get model(){return{tipo_id:this.tipo.value,periodo_academico:this.periodo_academico.value,programa_academico:this.programa_academico.value,rotacion:this.rotacion.value,estudiantes_acargo:this.estudiantes_acargo.value,maestro_id:this.maestro_id.value?this.maestro_id.value.id:null}}get evaluacionValida(){return!!this.tipo.value&&([1,8].indexOf(this.tipo.value)>=0||([2].indexOf(this.tipo.value)>=0?this.validate2():[3].indexOf(this.tipo.value)>=0?this.validate3():[4].indexOf(this.tipo.value)>=0?this.validate4():[5].indexOf(this.tipo.value)>=0||[6].indexOf(this.tipo.value)>=0?this.validate5():[7].indexOf(this.tipo.value)>=0&&this.validate7()))}validate2(){return!!(this.periodo_academico.value&&this.programa_academico.value&&this.rotacion.value&&this.maestro_id.value)}validate3(){return!!(this.periodo_academico.value&&this.programa_academico.value&&this.rotacion.value)}validate4(){return!!(this.periodo_academico.value&&this.programa_academico.value&&this.estudiantes_acargo.value&&this.rotacion.value)}validate5(){return!!(this.periodo_academico.value&&this.programa_academico.value&&this.maestro_id.value)}validate7(){return!(!this.periodo_academico.value||!this.programa_academico.value)}resett(){this.reset()}}var h=s(3805),x=s(4859),f=s(9549),T=s(7392),b=s(4144),y=s(7579),C=s(2722),Q=s(1884),M=s(8372),S=s(4004),e=s(4650),A=s(2798),k=s(3238);function D(o,a){1&o&&(e.TgZ(0,"span",8),e._uU(1,"*"),e.qZA())}function q(o,a){if(1&o){const t=e.EpF();e.TgZ(0,"button",9),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.onClearControl())}),e.TgZ(1,"mat-icon"),e._uU(2,"close"),e.qZA()()}}function G(o,a){if(1&o){const t=e.EpF();e.TgZ(0,"mat-option",10),e.NdJ("click",function(){const c=e.CHM(t).$implicit,p=e.oxw();return e.KtG(p.onUpdate(c))}),e._uU(1),e.qZA()}if(2&o){const t=a.$implicit,n=e.oxw();e.Q6J("value",t[n.option]),e.xp6(1),e.hij(" ",t[n.option]," ")}}function w(o,a){1&o&&(e.TgZ(0,"mat-option")(1,"span",11),e._uU(2," No se encuentran resultados "),e.qZA()())}const R=["*"];class Y{constructor(a,t){this._id=a,this._nombre_completo=t}get id(){return this._id}get nombre_completo(){return this._nombre_completo}}let L=(()=>{class o{constructor(t,n,i,c){this._control=t,this._formGroupDirective=n,this._personasCrud=i,this._cd=c,this._unsubscribe$=new y.x,this.class="",this.style="",this.option="option",this.autocomplete="off",this.appearance="standard",this.color="primary",this.hasClearButton=!0,this.suggestions=[],this.onChangeFn=p=>{},this.onTouchFn=p=>{},this.isInvalid=!1,this.isSubmitted=!1,this.required=!1,this.disabled=!1,this.value="",this.notSuggestions=!1,this.customForm=new r.NI,t&&(this._control.valueAccessor=this),n&&n.ngSubmit.pipe((0,C.R)(this._unsubscribe$)).subscribe(()=>{this.isSubmitted=!0,c.markForCheck()})}ngOnInit(){var t=this;return(0,d.Z)(function*(){t._subs2=t.customForm.valueChanges.pipe((0,Q.x)(),(0,M.b)(1e3)).subscribe(function(){var n=(0,d.Z)(function*(i){i&&!t.suggestions.filter(c=>c.nombre_completo===i).length&&(t.suggestions=[],(yield t._personasCrud.suggestions(i,2)).fold({right:p=>{p.forEach(g=>{const _=new Y(g.id,g.nombre_completo);t.suggestions.push(_),t.control.setValue(i)})}}))});return function(i){return n.apply(this,arguments)}}()),t.filteredOptions=t.control.valueChanges.pipe((0,C.R)(t._unsubscribe$),(0,S.U)(()=>t._filter()))})()}_filter(){const t="string"==typeof this.value?this.value.toLowerCase():this.control.value[this.option].toLowerCase(),n=this.suggestions.filter(i=>i[this.option].toLowerCase().includes(t));return this.notSuggestions=!n.length,n}writeValue(t){null===t&&(this.isInvalid=!1),this.value=t,this.isSubmitted=!1,this._cd.markForCheck()}registerOnChange(t){this.onChangeFn=t}registerOnTouched(t){this.onTouchFn=t}onChange(t){this.value=t.target.value,this.customForm.setValue(t.target.value),this.onChangeFn(this.suggestions.filter(n=>n[this.option].toLowerCase()===this.value.toLowerCase())[0]||null),this.control.touched&&this._onValidate()}onFocusout(){this.onTouchFn(!0),this._onValidate()}_onValidate(){}onUpdate(t){this.control.setValue(t),this.value=t[this.option],this._onValidate()}onFocus(){this.value||(this.control.setValue(""),this.value="")}onClearControl(){this.control.setValue(""),this.value=""}ngOnDestroy(){this._unsubscribe$.next(),this._unsubscribe$.complete(),this._subs2.unsubscribe()}get control(){var t;return null===(t=this._control)||void 0===t?void 0:t.control}get directive(){return this._formGroupDirective}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(r.a5,10),e.Y36(r.sg,8),e.Y36(A.m),e.Y36(e.sBO))},o.\u0275cmp=e.Xpm({type:o,selectors:[["gcm-maestros-autocomplete-field"]],inputs:{class:"class",style:"style",option:"option",autocomplete:"autocomplete",appearance:"appearance",color:"color",hasClearButton:"hasClearButton",disabled:"disabled"},standalone:!0,features:[e.jDz],ngContentSelectors:R,decls:13,vars:20,consts:[[3,"appearance","color"],["class","gcm-field__danger-x",4,"ngIf"],["matInput","",3,"autocomplete","matAutocomplete","value","disabled","keyup","change","focus","focusout"],["mat-icon-button","","matSuffix","","type","button",3,"click",4,"ngIf"],["autoActiveFirstOption",""],["auto","matAutocomplete"],[3,"value","click",4,"ngFor","ngForOf"],[4,"ngIf"],[1,"gcm-field__danger-x"],["mat-icon-button","","matSuffix","","type","button",3,"click"],[3,"value","click"],[1,"mat-gcm-autocomplete-not-records"]],template:function(t,n){if(1&t&&(e.F$t(),e.TgZ(0,"div")(1,"mat-form-field",0)(2,"mat-label"),e.Hsn(3),e._uU(4),e.YNc(5,D,2,0,"span",1),e.qZA(),e.TgZ(6,"input",2),e.NdJ("keyup",function(c){return n.onChange(c)})("change",function(c){return n.onChange(c)})("focus",function(){return n.onFocus()})("focusout",function(){return n.onFocusout()}),e.qZA(),e.YNc(7,q,3,0,"button",3),e.TgZ(8,"mat-autocomplete",4,5),e.YNc(10,G,2,2,"mat-option",6),e.ALo(11,"async"),e.YNc(12,w,3,0,"mat-option",7),e.qZA()()()),2&t){const i=e.MAs(9);e.Akn(n.style),e.Gre("mat-form-container ",n.class,""),e.xp6(1),e.ekj("mat-form-field-invalid",n.isInvalid||n.isSubmitted&&n.control.invalid),e.Q6J("appearance",n.appearance)("color",n.color),e.xp6(3),e.Oqu(" "),e.xp6(1),e.Q6J("ngIf",n.required),e.xp6(1),e.Q6J("autocomplete",n.autocomplete)("matAutocomplete",i)("value",n.value)("disabled",n.disabled),e.xp6(1),e.Q6J("ngIf",(n.control.value||n.value)&&n.hasClearButton),e.xp6(3),e.Q6J("ngForOf",e.lcZ(11,18,n.filteredOptions)),e.xp6(2),e.Q6J("ngIf",n.notSuggestions)}},dependencies:[b.c,f.KE,f.hX,f.R9,b.Nt,f.lN,x.ot,x.lW,T.Ps,T.Hw,h.Bb,h.XC,h.ZL,k.ey,m.ez,m.sg,m.O5,m.Ov],encapsulation:2}),o})();var O=s(4648),V=s(9109);function K(o,a){if(1&o){const t=e.EpF();e.TgZ(0,"ion-buttons",5)(1,"ion-button",11),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.filter.setValue(""))}),e._UZ(2,"ion-icon",12),e.qZA()()}}function $(o,a){1&o&&(e.TgZ(0,"b"),e._uU(1,"Ultima evaluaci\xf3n hace"),e.qZA())}function j(o,a){1&o&&(e.TgZ(0,"b"),e._uU(1,"Ninguna evaluaci\xf3n realizada"),e.qZA())}function B(o,a){if(1&o&&(e.TgZ(0,"div")(1,"ion-card-content",17)(2,"b"),e._uU(3,"Representante:"),e.qZA(),e._uU(4),e._UZ(5,"br")(6,"br"),e.qZA()()),2&o){const t=e.oxw().$implicit;e.xp6(4),e.hij(" ",t.representante.nombre_completo,"")}}function H(o,a){if(1&o&&(e.TgZ(0,"div")(1,"ion-card-content",17)(2,"b"),e._uU(3,"ENTIDAD:"),e.qZA(),e._uU(4),e._UZ(5,"br")(6,"br"),e.qZA()()),2&o){const t=e.oxw().$implicit;e.xp6(4),e.hij(" ",t.entidad.nombre_completo,"")}}function X(o,a){if(1&o){const t=e.EpF();e.TgZ(0,"ion-card",13)(1,"ion-card-header")(2,"ion-card-title"),e._uU(3),e._UZ(4,"br"),e.TgZ(5,"span",14),e._uU(6),e.qZA(),e._UZ(7,"br"),e.TgZ(8,"ion-card-subtitle"),e.YNc(9,$,2,0,"b",15),e._uU(10),e.ALo(11,"timeFromNow"),e.YNc(12,j,2,0,"b",15),e._UZ(13,"br"),e.TgZ(14,"b"),e._uU(15,"Telefono:"),e.qZA(),e._uU(16),e.qZA()()(),e.YNc(17,B,7,1,"div",15),e.YNc(18,H,7,1,"div",15),e.TgZ(19,"ion-icon",16),e.NdJ("click",function(){const c=e.CHM(t).$implicit,p=e.oxw();return e.KtG(p.clickOnToggleGenEvaModal(!0,c))}),e._uU(20," Evaluar "),e.qZA()()}if(2&o){const t=a.$implicit;e.xp6(3),e.AsE(" ",t.nombre_completo," (",t.nombre_tipo_entidad,")"),e.xp6(3),e.hij(" Doc. ",t.numero_documento," "),e.xp6(3),e.Q6J("ngIf",t.fecha_ultima_evaluacion),e.xp6(1),e.hij(" ",e.lcZ(11,9,t.fecha_ultima_evaluacion)," "),e.xp6(2),e.Q6J("ngIf",!t.fecha_ultima_evaluacion),e.xp6(4),e.hij(" ",t.telefono," "),e.xp6(1),e.Q6J("ngIf",t.representante),e.xp6(1),e.Q6J("ngIf",t.entidad)}}function z(o,a){1&o&&(e.TgZ(0,"ion-select-option",30),e._uU(1," EVAL. ESTUDIANTE "),e.qZA()),2&o&&e.Q6J("value",2)}function W(o,a){1&o&&(e.TgZ(0,"ion-select-option",30),e._uU(1," EVAL. DOCENTE "),e.qZA()),2&o&&e.Q6J("value",3)}function ee(o,a){1&o&&(e.TgZ(0,"ion-select-option",30),e._uU(1," AUTO-EVAL. DOCENTE "),e.qZA()),2&o&&e.Q6J("value",4)}function te(o,a){1&o&&(e.TgZ(0,"ion-select-option",30),e._uU(1," EVAL. DOC. POR COORD. PRACT. "),e.qZA()),2&o&&e.Q6J("value",5)}function oe(o,a){1&o&&(e.TgZ(0,"ion-select-option",30),e._uU(1," EVAL. DOCENTE POR ESTUDIANTE "),e.qZA()),2&o&&e.Q6J("value",6)}function ne(o,a){1&o&&(e.TgZ(0,"ion-select-option",30),e._uU(1," EVAL. JEFE DE SERVICIO "),e.qZA()),2&o&&e.Q6J("value",7)}function ie(o,a){1&o&&(e.TgZ(0,"ion-select-option",30),e._uU(1," EVAL. USUARIOS "),e.qZA()),2&o&&e.Q6J("value",8)}function ae(o,a){if(1&o&&(e.TgZ(0,"ion-select",31)(1,"ion-select-option",30),e._uU(2,"1"),e.qZA(),e.TgZ(3,"ion-select-option",30),e._uU(4,"2"),e.qZA()()),2&o){const t=e.oxw(2);e.Q6J("formControl",t.myEvalForm.periodo_academico),e.xp6(1),e.Q6J("value",1),e.xp6(2),e.Q6J("value",2)}}function se(o,a){if(1&o&&(e.TgZ(0,"ion-select",32)(1,"ion-select-option",30),e._uU(2,"INST. QUIRURGICA"),e.qZA(),e.TgZ(3,"ion-select-option",30),e._uU(4,"ENFERMERIA"),e.qZA(),e.TgZ(5,"ion-select-option",30),e._uU(6,"MEDICINA"),e.qZA(),e.TgZ(7,"ion-select-option",30),e._uU(8,"PSICOLOGIA"),e.qZA()()),2&o){const t=e.oxw(2);e.Q6J("formControl",t.myEvalForm.programa_academico),e.xp6(1),e.Q6J("value",1),e.xp6(2),e.Q6J("value",2),e.xp6(2),e.Q6J("value",3),e.xp6(2),e.Q6J("value",4)}}function le(o,a){if(1&o&&e._UZ(0,"ion-input",33),2&o){const t=e.oxw(2);e.Q6J("formControl",t.myEvalForm.estudiantes_acargo)}}function re(o,a){if(1&o&&(e.TgZ(0,"ion-select",34)(1,"ion-select-option",30),e._uU(2,"1"),e.qZA(),e.TgZ(3,"ion-select-option",30),e._uU(4,"2"),e.qZA(),e.TgZ(5,"ion-select-option",30),e._uU(6,"3"),e.qZA()()),2&o){const t=e.oxw(2);e.Q6J("formControl",t.myEvalForm.rotacion),e.xp6(1),e.Q6J("value",1),e.xp6(2),e.Q6J("value",2),e.xp6(2),e.Q6J("value",3)}}function ce(o,a){if(1&o&&(e.TgZ(0,"gcm-maestros-autocomplete-field",35),e._uU(1," Docente "),e.qZA()),2&o){const t=e.oxw(2);e.Q6J("formControl",t.myEvalForm.maestro_id)}}const E=function(){return[3]},F=function(){return[2]},P=function(){return[4]},ue=function(){return[5]},de=function(){return[6]},U=function(){return[1,2,3,4,5,6,7]},pe=function(){return[2,3,4]},me=function(){return[2,5,6]};function _e(o,a){if(1&o){const t=e.EpF();e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),e._uU(3,"Generar evaluaci\xf3n"),e.qZA(),e.TgZ(4,"ion-buttons",18),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.clickOnToggleGenEvaModal(!1))}),e.TgZ(5,"ion-button"),e._uU(6,"Cerrar"),e.qZA()()()(),e.TgZ(7,"ion-content",19)(8,"ion-select",20),e.YNc(9,z,2,1,"ion-select-option",21),e.YNc(10,W,2,1,"ion-select-option",21),e.YNc(11,ee,2,1,"ion-select-option",21),e.YNc(12,te,2,1,"ion-select-option",21),e.YNc(13,oe,2,1,"ion-select-option",21),e.YNc(14,ne,2,1,"ion-select-option",21),e.YNc(15,ie,2,1,"ion-select-option",21),e.qZA(),e.YNc(16,ae,5,3,"ion-select",22),e.YNc(17,se,9,5,"ion-select",23),e.YNc(18,le,1,1,"ion-input",24),e.YNc(19,re,7,4,"ion-select",25),e.TgZ(20,"div",26),e.YNc(21,ce,2,1,"gcm-maestros-autocomplete-field",27),e.qZA(),e.TgZ(22,"div",28)(23,"ion-button",29),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.clickOnEvaluar(i.personaSelected))}),e._uU(24," GENERAR EVALUACI\xd3N "),e.qZA()()()}if(2&o){const t=e.oxw();e.xp6(8),e.Q6J("formControl",t.myEvalForm.tipo),e.xp6(1),e.Q6J("ngIf",e.DdM(14,E).indexOf(t.personaSelected.tipo.id)>=0),e.xp6(1),e.Q6J("ngIf",e.DdM(15,F).indexOf(t.personaSelected.tipo.id)>=0),e.xp6(1),e.Q6J("ngIf",e.DdM(16,F).indexOf(t.personaSelected.tipo.id)>=0),e.xp6(1),e.Q6J("ngIf",e.DdM(17,P).indexOf(t.personaSelected.tipo.id)>=0),e.xp6(1),e.Q6J("ngIf",e.DdM(18,E).indexOf(t.personaSelected.tipo.id)>=0),e.xp6(1),e.Q6J("ngIf",e.DdM(19,ue).indexOf(t.personaSelected.tipo.id)>=0),e.xp6(1),e.Q6J("ngIf",e.DdM(20,de).indexOf(t.personaSelected.tipo.id)>=0),e.xp6(1),e.Q6J("ngIf",e.DdM(21,U).indexOf(t.myEvalForm.tipo.value)>=0),e.xp6(1),e.Q6J("ngIf",e.DdM(22,U).indexOf(t.myEvalForm.tipo.value)>=0),e.xp6(1),e.Q6J("ngIf",e.DdM(23,P).indexOf(t.myEvalForm.tipo.value)>=0),e.xp6(1),e.Q6J("ngIf",e.DdM(24,pe).indexOf(t.myEvalForm.tipo.value)>=0),e.xp6(2),e.Q6J("ngIf",e.DdM(25,me).indexOf(t.myEvalForm.tipo.value)>=0),e.xp6(2),e.Q6J("disabled",t.myEvalForm.invalid)}}function ge(o,a){if(1&o){const t=e.EpF();e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),e._uU(3,"Agregar persona"),e.qZA(),e.TgZ(4,"ion-buttons",5)(5,"ion-button",3),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.clickOnToggleModal(!1))}),e._uU(6,"Cerrar"),e.qZA()()()(),e.TgZ(7,"ion-content")(8,"ion-list")(9,"ion-item")(10,"ion-select",36)(11,"ion-select-option",30),e._uU(12,"Cedula de ciudadan\xeda"),e.qZA(),e.TgZ(13,"ion-select-option",30),e._uU(14,"Tarjeta de identidad"),e.qZA()()(),e.TgZ(15,"ion-item"),e._UZ(16,"ion-input",37),e.qZA(),e.TgZ(17,"ion-item")(18,"ion-select",38)(19,"ion-select-option",30),e._uU(20,"DOCENTE"),e.qZA(),e.TgZ(21,"ion-select-option",30),e._uU(22,"ESTUDIANTE"),e.qZA(),e.TgZ(23,"ion-select-option",30),e._uU(24,"COORDINADOR PRACTICAS"),e.qZA(),e.TgZ(25,"ion-select-option",30),e._uU(26,"JEFE DE SERVICIO"),e.qZA(),e.TgZ(27,"ion-select-option",30),e._uU(28,"USUARIO"),e.qZA()()(),e.TgZ(29,"ion-item"),e._UZ(30,"ion-input",39),e.qZA(),e.TgZ(31,"ion-item"),e._UZ(32,"ion-input",40),e.qZA(),e.TgZ(33,"div",26)(34,"gcm-select-field",41),e._uU(35," Entidad "),e.qZA()()(),e._UZ(36,"br")(37,"br"),e.TgZ(38,"div",28)(39,"ion-button",29),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.clickOnRegistrarEntidad())}),e._uU(40," REGISTRAR "),e.qZA()()()}if(2&o){const t=e.oxw();e.xp6(10),e.Q6J("formControl",t.myForm.tipo_documento),e.xp6(1),e.Q6J("value",2),e.xp6(2),e.Q6J("value",3),e.xp6(3),e.Q6J("formControl",t.myForm.numero_documento),e.xp6(2),e.Q6J("formControl",t.myForm.tipo_id),e.xp6(1),e.Q6J("value",2),e.xp6(2),e.Q6J("value",3),e.xp6(2),e.Q6J("value",4),e.xp6(2),e.Q6J("value",5),e.xp6(2),e.Q6J("value",6),e.xp6(3),e.Q6J("formControl",t.myForm.nombre_completo),e.xp6(2),e.Q6J("formControl",t.myForm.telefono),e.xp6(2),e.Q6J("formControl",t.myForm.entidad_id)("suggestions",t.entidadesSuggestions),e.xp6(5),e.Q6J("disabled",t.myForm.invalid)}}let fe=(()=>{class o{constructor(t,n,i,c){this._personasCrud=t,this._alertController=n,this._loadingCtrl=i,this._cd=c,this.dataSource=new Z.by([]),this.filter=new r.NI(""),this.myForm=new I,this.myEvalForm=new N,this.isModalOpen=!1,this.isModalGenEvaOpen=!1,this.entidadesSuggestions=[{value:1,option:"CLINICA ERASMOS"},{value:2,option:"CLINICA SANTO TOMAS"}],this.customForm=new r.NI,this._subs1=this.filter.valueChanges.subscribe(p=>{this.dataSource.filter=(p||"").trim().toLowerCase()})}ngOnInit(){var t=this;return(0,d.Z)(function*(){t._fetchEntidades()})()}refresh(){this._fetchEntidades(!0)}clickOnToggleModal(t){t?this.isModalOpen=!0:(this.isModalOpen=!1,this.myForm.resett())}clickOnToggleGenEvaModal(t,n){t?(this.personaSelected=n,this.isModalGenEvaOpen=!0):(this.isModalGenEvaOpen=!1,this.myEvalForm.resett())}clickOnEvaluar(t){var n=this;return(0,d.Z)(function*(){var c;n.myEvalForm.evaluacionValida?yield(yield n._alertController.create({header:"Segur@",message:"Desea crear esta evaluaci\xf3n?",buttons:[{text:"OK",role:"confirm",handler:(c=(0,d.Z)(function*(){var g;yield n._showLoading("Creando nueva evaluaci\xf3n..."),(yield n._personasCrud.evaluar(t,n.myEvalForm.model)).fold({right:(g=(0,d.Z)(function*(){const _=yield n._alertController.create({header:"Estado de la evaluaci\xf3n",message:"Evaluaci\xf3n creada satisfactoriamente",buttons:["OK"]});n.isModalGenEvaOpen=!1,n.myEvalForm.resett(),n._cd.markForCheck(),yield _.present()}),function(){return g.apply(this,arguments)}),left:function(){var g=(0,d.Z)(function*(_){yield(yield n._alertController.create({header:"Estado de la evaluaci\xf3n",message:_,buttons:["OK"]})).present()});return function(he){return g.apply(this,arguments)}}()}),n._removeLoading()}),function(){return c.apply(this,arguments)})},{text:"Cancelar",role:"cancel"}]})).present():yield(yield n._alertController.create({header:"Estado de la evaluaci\xf3n",message:"Uno o mas campos no son validos",buttons:["OK"]})).present()})()}clickOnRegistrarEntidad(){var t=this;return(0,d.Z)(function*(){yield t._showLoading("Registrando nueva entidad..."),(yield t._personasCrud.create(t.myForm.model)).fold({right:i=>{t._removeLoading(),t.isModalOpen=!1,t._cd.markForCheck(),t.myForm.resett()},left:i=>{t._removeLoading(),t._alertNotCreated()}})})()}_fetchEntidades(t=!1){var n=this;return(0,d.Z)(function*(){yield n._showLoading(),(yield n._personasCrud.fetch([2,3,4,5,6],t)).fold({right:c=>{n._instanceDataSource(c)}}),n._removeLoading()})()}_alertNotCreated(){var t=this;return(0,d.Z)(function*(){yield(yield t._alertController.create({header:"Estado de la entidad",message:"Error al crear entidad, puede que ya exista un usuario con este documento",buttons:["OK"]})).present()})()}_showLoading(t="Obteniendo entidades registradas..."){var n=this;return(0,d.Z)(function*(){n._loading=yield n._loadingCtrl.create({message:t}),n._loading.present(),n._cd.markForCheck()})()}_removeLoading(){this._loading.remove(),this._cd.markForCheck()}_instanceDataSource(t){this.dataSource=new Z.by(t),this._cd.markForCheck()}ngOnDestroy(){this._subs1.unsubscribe()}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(A.m),e.Y36(l.Br),e.Y36(l.HT),e.Y36(e.sBO))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-personas"]],standalone:!0,features:[e.jDz],decls:21,vars:8,consts:[[1,"tab-container","ion-padding"],[1,"tab-content"],["slot","start"],[3,"click"],["name","add-outline"],["slot","end"],["name","refresh-outline"],["labelPlacement","floating","label","Buscar",3,"formControl"],["slot","end",4,"ngIf"],["class","tab-card",4,"ngFor","ngForOf"],[3,"isOpen","backdropDismiss"],["color","dark",3,"click"],["name","close-outline"],[1,"tab-card"],[1,"card-sub-in-title"],[4,"ngIf"],["name","add-circle-outline","fill","clear",2,"font-size","24px","margin","-15px 10px 0px 10px",3,"click"],[2,"padding","0 10px"],["slot","end",3,"click"],[1,"ion-padding"],["label","tipo Eval.",3,"formControl"],[3,"value",4,"ngIf"],["label","Periodo academico",3,"formControl",4,"ngIf"],["interface","action-sheet","label","Programa academico",3,"formControl",4,"ngIf"],["label","Estudiantes a cargo",3,"formControl",4,"ngIf"],["interface","action-sheet","label","Rotaci\xf3n",3,"formControl",4,"ngIf"],[2,"margin","10px 10px"],["option","nombre_completo",3,"formControl",4,"ngIf"],[2,"text-align","center"],[3,"disabled","click"],[3,"value"],["label","Periodo academico",3,"formControl"],["interface","action-sheet","label","Programa academico",3,"formControl"],["label","Estudiantes a cargo",3,"formControl"],["interface","action-sheet","label","Rotaci\xf3n",3,"formControl"],["option","nombre_completo",3,"formControl"],["interface","action-sheet","label","Tipo de documento",3,"formControl"],["label","Numero de documento",3,"formControl"],["interface","action-sheet","label","Rol",3,"formControl"],["label","Nombre completo",3,"formControl"],["label","Telefono",3,"formControl"],["appearance","standard",3,"formControl","suggestions"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"section",1)(2,"ion-toolbar")(3,"ion-buttons",2)(4,"ion-button",3),e.NdJ("click",function(){return n.clickOnToggleModal(!0)}),e._UZ(5,"ion-icon",4),e.qZA()(),e.TgZ(6,"ion-label")(7,"b"),e._uU(8),e.qZA()(),e.TgZ(9,"ion-buttons",5)(10,"ion-button",3),e.NdJ("click",function(){return n.refresh()}),e._UZ(11,"ion-icon",6),e.qZA()()(),e.TgZ(12,"ion-item"),e._UZ(13,"ion-input",7),e.YNc(14,K,3,0,"ion-buttons",8),e.qZA()()(),e.TgZ(15,"ion-content"),e.YNc(16,X,21,11,"ion-card",9),e.qZA(),e.TgZ(17,"ion-modal",10),e.YNc(18,_e,25,26,"ng-template"),e.qZA(),e.TgZ(19,"ion-modal",10),e.YNc(20,ge,41,15,"ng-template"),e.qZA()),2&t&&(e.xp6(8),e.hij("",n.dataSource.data.length," PERSONAS REGISTRADAS"),e.xp6(5),e.Q6J("formControl",n.filter),e.xp6(1),e.Q6J("ngIf",n.filter.value),e.xp6(2),e.Q6J("ngForOf",n.dataSource.filteredData),e.xp6(1),e.Q6J("isOpen",n.isModalGenEvaOpen)("backdropDismiss",!1),e.xp6(2),e.Q6J("isOpen",n.isModalOpen)("backdropDismiss",!1))},dependencies:[m.ez,m.sg,m.O5,l.Pc,l.YG,l.Sm,l.PM,l.FN,l.Zi,l.tO,l.Dq,l.W2,l.Gu,l.gu,l.pK,l.Ie,l.Q$,l.q_,l.t9,l.n0,l.wd,l.sr,l.ki,l.QI,l.j9,r.u5,r.JJ,L,O.Yb,r.oH,O.AJ,r.UX,J.D,V.G],styles:[".card-sub-in-title[_ngcontent-%COMP%]{font-size:10px;color:#666}.ion-title[_ngcontent-%COMP%]{font-weight:bolder;font-size:14px}.ion-subtitle[_ngcontent-%COMP%]{color:gray;font-size:12px;font-weight:600}.eva1-nombre[_ngcontent-%COMP%], .eva1-documental[_ngcontent-%COMP%]{margin-top:10px}ion-checkbox[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{margin-left:10px;margin-top:3px;float:right}ion-checkbox[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:24px;margin-left:10px}"],changeDetection:0}),o})()}}]);