import { Injectable, Inject, InjectionToken } from '@angular/core';

export interface CoreConfig {
  mySetting: string;
}
export const CORE_CONFIG = new InjectionToken<CoreConfig>('Core config');

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  config: CoreConfig

  constructor() {
    console.log('core service:  Constructing service');
  }

  initialize(config: CoreConfig) {
    console.log('core service:  Exectuing "call" method');
    this.config = config;
    console.log(this.config);
  }
}