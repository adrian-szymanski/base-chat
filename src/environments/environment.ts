// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyC1GZlyBosMrADj5OF2q8SBZtMJiebGIe8',
    authDomain: 'base-chat-be45a.firebaseapp.com',
    databaseURL: 'https://base-chat-be45a.firebaseio.com',
    projectId: 'base-chat-be45a',
    storageBucket: 'base-chat-be45a.appspot.com',
    messagingSenderId: '541021416306'
  }
};
