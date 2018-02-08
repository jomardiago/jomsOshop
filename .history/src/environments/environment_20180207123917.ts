// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDNpaEMoDyooJ-RcSSVHTULlaRhJBneNcg",
    authDomain: "joms-oshop.firebaseapp.com",
    databaseURL: "https://joms-oshop.firebaseio.com",
    projectId: "joms-oshop",
    storageBucket: "joms-oshop.appspot.com",
    messagingSenderId: "1064277573449"
  }
};
