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

const app = mount(App, {
  target: document.getElementById('app'),
})

export default app
