// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyBYf8U7p5iXOKu8LlER6xJwBjCecMDvp0Y",
    authDomain: "projectcv-57a11.firebaseapp.com",
    projectId: "projectcv-57a11",
    storageBucket: "projectcv-57a11.appspot.com",
    messagingSenderId: "1094973690228",
    appId: "1:1094973690228:web:f207cccd631d2683b15c21",
    measurementId: "G-GLQVCLLWPP"
  }
};
const app = initializeApp(environment.firebaseConfig);
const analytics = getAnalytics(app);


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
