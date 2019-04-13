import { NgModule, APP_INITIALIZER, InjectionToken } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CoreService, CORE_CONFIG } from './core/core.service';
import { ConfigService, AppConfig, APP_CONFIG } from './config/config.service';


function loadConfigurationData(configService: ConfigService): () => Promise<any> {
  console.log('app module: loading configuration data');
  return () => configService.load();
}

function appConfigInitializerFactory(configService: ConfigService) {
  console.log('app module: Providing APP_CONFIG config: ', configService.appConfig);
  return configService.appConfig;
}

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreModule
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
    }
  ]
})
export class AppModule {
}
