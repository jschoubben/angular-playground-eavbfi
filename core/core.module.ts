import { NgModule, ErrorHandler, Optional, SkipSelf } from '@angular/core';
import { AppConfig, APP_CONFIG } from '../config/config.service';
import { CoreService, CORE_CONFIG } from './core.service';

function loadCoreConfig(appConfig: AppConfig) {
  console.log('core module: Loading core config with following config: ', appConfig);
  return {
    coreSetting: appConfig.mySetting
  };
}

@NgModule({
  imports: [],
  providers: [
    CoreService
  ],
})
export class CoreModule {

}
