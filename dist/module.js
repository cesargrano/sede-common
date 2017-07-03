/**
 * Created by cesar on 27/06/17.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from "@angular/core";
// import {HttpUtilService} from "./http-util.service";
// import {HttpAuthService} from "./http-auth.service";
// import {LoginAuthService} from "./login-auth-service";
// import {CommonDBService} from "./common-db.service";
var HttpServiceModule = (function () {
    function HttpServiceModule() {
    }
    HttpServiceModule_1 = HttpServiceModule;
    HttpServiceModule.forRoot = function (config) {
        if (config == undefined) {
            alert('HttpServiceModule, falta configuração inicial...');
        }
        return {
            ngModule: HttpServiceModule_1,
            providers: [{ provide: 'configSystem', useValue: config }]
        };
    };
    HttpServiceModule = HttpServiceModule_1 = __decorate([
        NgModule({
            declarations: [],
            imports: [],
            exports: [],
            providers: []
        })
    ], HttpServiceModule);
    return HttpServiceModule;
    var HttpServiceModule_1;
}());
export { HttpServiceModule };
//# sourceMappingURL=module.js.map