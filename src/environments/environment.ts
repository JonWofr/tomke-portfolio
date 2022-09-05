// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'tomke-portfolio',
    appId: '1:866223817624:web:06bd4a406bfc2ba59b61ed',
    storageBucket: 'tomke-portfolio.appspot.com',
    locationId: 'europe-west3',
    apiKey: 'AIzaSyCYFb-klFXuITecmWv3dq8HqeK5e_J4flE',
    authDomain: 'tomke-portfolio.firebaseapp.com',
    messagingSenderId: '866223817624',
  },
  production: false,
  backendUrl: 'http://localhost:5001/tomke-portfolio/europe-west3',
  useEmulators: true,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
