import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@spa-demo/demo",
  app: () => System.import("@spa-demo/demo"),
  activeWhen: ["/"],
});

registerApplication({
  name: "@spa-demo/vue-demo",
  app: () => System.import("@spa-demo/vue-demo"),
  activeWhen: ["/vue"],
});


start({
  urlRerouteOnly: true,
});
