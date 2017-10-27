// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,

  firebase: {
    apiKey: "AIzaSyBPpVZN19f87ALI9lgLAHPbdGHU3NbxGsA",
   authDomain: "sa-mailer.firebaseapp.com",
   databaseURL: "https://sa-mailer.firebaseio.com",
   projectId: "sa-mailer",
   storageBucket: "sa-mailer.appspot.com",
   messagingSenderId: "1067540517895"
  }
  
};
