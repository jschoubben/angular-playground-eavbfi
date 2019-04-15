import { Injectable, Inject, InjectionToken } from '@angular/core';

export interface CoreConfig {
  mySetting: string;
}
export const CORE_CONFIG = new InjectionToken<CoreConfig>('Core config');

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor(@Inject(CORE_CONFIG) private config: CoreConfig) {
    console.log('core service:  Constructing service');
    this.initialize();
  }

  initialize() {
    console.log('core service:  Exectuing "call" method');
    console.log(this.config);
  }
}