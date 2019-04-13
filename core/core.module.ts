import { NgModule, APP_INITIALIZER, InjectionToken } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import { CoreService, CORE_CONFIG } from '../core/core.service';
import { AppConfig, APP_CONFIG } from '../config/config.service';

function loadCoreConfig(appConfig: AppConfig) {
  console.log('app module: Providing CORE_CONFIG config: ', appConfig);
  return {
    coreSetting: appConfig.mySetting
  };
}

@NgModule({
  declarations: [],
  imports: [],
  providers: [
    {
      provide: CORE_CONFIG,
      useFactory: loadCoreConfig,
      deps: [APP_CONFIG]
    },
  ]
})
export class CoreModule {
  constructor() {
    console.log('Core module: constructing module');
  }
}
