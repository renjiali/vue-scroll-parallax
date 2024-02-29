import type { App } from 'vue';
import VueScrollParallax from './index.vue';
VueScrollParallax.install = (app: App) => {
  app.component(VueScrollParallax.__name as string, VueScrollParallax);
};
console.log(VueScrollParallax.__name);

export default VueScrollParallax;
