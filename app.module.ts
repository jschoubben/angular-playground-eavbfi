import { NgModule, APP_INITIALIZER, InjectionToken } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CoreService, CORE_CONFIG } from './core/core.service';
import { Config, AppConfig, APP_CONFIG } from './config/config.service';

const appConfig = Config.getInstance('config.json');

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreModule.forRoot({
      mySetting: appConfig.mySetting  
    })
  ],
  providers: [
    {
      provide: APP_CONFIG,
      useValue: appConfig
    }
  ]
})
export class AppModule {
  
  constructor(){
    console.log('App module: Constructor')
  }
}
