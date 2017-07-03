/**
 * Created by cesar on 27/06/17.
 */

import {ModuleWithProviders, NgModule} from "@angular/core";
// import {HttpUtilService} from "./http-util.service";
// import {HttpAuthService} from "./http-auth.service";
// import {LoginAuthService} from "./login-auth-service";
// import {CommonDBService} from "./common-db.service";


@NgModule({
	declarations: [],
	imports: [],
	exports: [],
	providers: [
		// LoginAuthService,
		// HttpUtilService,
		// HttpAuthService,
		// CommonDBService,
	]
})
export class HttpServiceModule {
	static forRoot(config?: any):ModuleWithProviders {
		
		if (config == undefined) {
			alert('HttpServiceModule, falta configuração inicial...');
		}
		
		return {
			ngModule: HttpServiceModule,
			providers: [ {provide: 'configSystem', useValue: config} ]
		};
	}
}