import Realm from 'realm';

let app;

export function getRealmApp() {
  if (app === undefined) {
    const appId = "premiumbandai-jxgfe";
    const appConfig = {
      id: appId,
      timeout: 10000,
      app: {
        name: "default",
        version: "0",
      },
    };
    app = new Realm.App(appConfig);
  }

  return app;
}