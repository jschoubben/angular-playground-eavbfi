import { NgModule, APP_INITIALIZER, Inject, InjectionToken, Provider, ModuleWithProviders } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import { CoreService, CoreConfig, CORE_CONFIG } from '../core/core.service';


function initCoreService(config: CoreConfig, coreService: CoreService) {
  return () => coreService.initialize(config);
}

@NgModule()
export class CoreModule {
  static forRoot(config: CoreConfig){
    return {
      ngModule: CoreModule,
      providers: [
        {
          provide: CORE_CONFIG,
          useValue: config
        },
        {
          provide: APP_INITIALIZER,
          useFactory: initCoreService,
          multi: true,
          deps: [CORE_CONFIG, CoreService]
        }
      ]
    }
  }
}
