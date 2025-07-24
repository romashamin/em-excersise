import { mount } from 'svelte'
import './app.css'
import App from './App.svelte'
import posthog from 'posthog-js';

const POSTHOG_API_KEY = import.meta.env.VITE_POSTHOG_API_KEY;

posthog.init(POSTHOG_API_KEY, {
  api_host: 'https://us.i.posthog.com',
  defaults: '2025-05-24',
  person_profiles: 'identified_only',
});

const HOTJAR_ID = import.meta.env.VITE_HOTJAR_ID;
const HOTJAR_VERSION = import.meta.env.VITE_HOTJAR_VERSION;

if (HOTJAR_ID && HOTJAR_VERSION) {
  (function(h,o,t,j,a,r){
      // @ts-ignore
      h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
      // @ts-ignore
      h._hjSettings={hjid: HOTJAR_ID, hjsv: HOTJAR_VERSION};
      a=o.getElementsByTagName('head')[0];
      r=o.createElement('script');r.async=1;
      // @ts-ignore
      r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
      a.appendChild(r);
  })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
}

const app = mount(App, {
  target: document.getElementById('app'),
})

export default app
