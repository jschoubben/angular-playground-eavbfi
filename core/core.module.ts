import { NgModule, APP_INITIALIZER, Inject, InjectionToken, Provider, ModuleWithProviders } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import { CoreConfig, CORE_CONFIG } from '../core/core.service';

@NgModule()
export class CoreModule {
  static forRoot(config: CoreConfig){
    return {
      providers: [
        {
          provide: CORE_CONFIG,
          useValue: config
        }
      ]
    }
  }
}
