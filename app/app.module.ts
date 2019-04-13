import { NgModule, APP_INITIALIZER, InjectionToken } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import { AppComponent } from '../app.component';
import { CoreService, CORE_CONFIG } from '../core/core.service';
import { ConfigService, AppConfig, APP_CONFIG } from '../config/config.service';


function loadConfigurationData(configService: ConfigService): () => Promise<any> {
  return () => configService.load();
}

function appConfigInitializerFactory(configService: ConfigService) {
  console.log('app module: Providing APP_CONFIG config: ', configService.appConfig);
  return configService.appConfig;
}

function loadCoreConfig(appConfig: AppConfig) {
  console.log('app module: Providing CORE_CONFIG config: ', appConfig);
  return {
    coreSetting: appConfig.mySetting
  };
}

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    BrowserModule
  ],
  providers: [
    ConfigService,
    { 
      provide: APP_INITIALIZER, 
      useFactory: loadConfigurationData, 
      deps: [ConfigService], 
      multi: true 
    },
    { 
      provide: APP_CONFIG, 
      useFactory: appConfigInitializerFactory, 
      deps: [ConfigService], 
    },
    {
      provide: CORE_CONFIG,
      useFactory: loadCoreConfig,
      deps: [APP_CONFIG]
    },
  ]
})
export class AppModule {}
