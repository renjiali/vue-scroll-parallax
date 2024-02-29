import type { App } from 'vue';
import VueScrollParallax from './vue-scroll-parallax';
const components = [VueScrollParallax];
const install = (app: App): void => {
  components.forEach((component) => app.component(component.__name as string, component));
};
export { VueScrollParallax };

const viteVueScrollParallax = {
  install
};

export default viteVueScrollParallax;
