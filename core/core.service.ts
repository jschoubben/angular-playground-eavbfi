import { Injectable, Inject, InjectionToken } from '@angular/core';


export const CORE_CONFIG = new InjectionToken<any>('Core config');

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  config: any;

  constructor(@Inject(CORE_CONFIG) coreConfig: any) {
    console.log('core service:  Constructing service');
    this.config = coreConfig;
    this.call();
  }

  private call() {
    console.log('core service:  Exectuing "call" method');
    console.log(this.config);
  }
}