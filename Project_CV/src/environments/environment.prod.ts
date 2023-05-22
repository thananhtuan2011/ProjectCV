import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const environment = {
  production: true,
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
