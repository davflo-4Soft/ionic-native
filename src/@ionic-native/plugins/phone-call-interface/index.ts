import {Injectable} from '@angular/core';
import {Cordova, Plugin, IonicNativePlugin} from '@ionic-native/core';

@Plugin({
  pluginName: 'PhoneCallInterface',
  plugin: 'phone-call-interface',
  pluginRef: 'PhoneCallInterface',
  platforms: ['Android', 'iOS']
})
@Injectable()
export class PhoneCallInterface extends IonicNativePlugin {

  @Cordova({
    sync: true
  })
  onCall(successCallback: (state: string) => void, errorCallback: () => void): void {
  }

  @Cordova({
    sync: true
  })
  rejectCall(): void {
  }

  @Cordova({
    sync: true
  })
  errorCallback(): void {
  }

}
