// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyD7dZRX7MjVRF51fvOSR_VJDOA77MqVf18",
    authDomain: "destructo-list.firebaseapp.com",
    databaseURL: "https://destructo-list.firebaseio.com",
    projectId: "destructo-list",
    storageBucket: "destructo-list.appspot.com",
    messagingSenderId: "534453984814"
  }
};
