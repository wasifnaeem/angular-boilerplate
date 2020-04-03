// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  server_url: 'https://agileserver4.com/Server',
  angular_url: 'http://localhost:4200',
  rpc_login: {
    username: `user`,
    passcode: `janugerman`
  },
  rpc_broker_url: `ws://34.94.1.35:15674/ws`,
  encrypto_js_key: `abcdefghijklmnopqrstuvwxyz`,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
