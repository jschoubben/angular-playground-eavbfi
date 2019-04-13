import { NgModule, APP_INITIALIZER, InjectionToken } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import { AppComponent } from '../app.component';
import { CoreModule } from '../core/core.module';
import { CoreService, CORE_CONFIG } from '../core/core.service';
import { ConfigService, AppConfig, APP_CONFIG } from '../config/config.service';


function loadConfigurationData(configService: ConfigService): () => Promise<any> {
  return () => configService.load();
}

function appConfigInitializerFactory(configService: ConfigService) {
  console.log('APP_CONFIG: Providing following config: ', configService.appConfig);
  return configService.appConfig;
}

function loadCoreConfig(appConfig: AppConfig) {
  console.log('core module: Loading core config with following config: ', appConfig);
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
