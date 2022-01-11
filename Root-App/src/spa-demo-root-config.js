import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@spa-demo/demo",
  app: () => System.import("@spa-demo/demo"),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
