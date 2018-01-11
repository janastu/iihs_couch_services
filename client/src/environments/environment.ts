// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
production: false,
 username: 'db_username', //couchdb username
  password: 'db_pwd', //couchdb password
  host: 'login.test.openrun.net', //couchdb host
  superLoginServerUrl: 'http://client.test.openrun.net:3001' //Super login server url(UI url)
};
