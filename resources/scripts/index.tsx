// I know it's deprecated! We need to fix it!!!
import * as Sentry from '@sentry/react';
import posthog from 'posthog-js';
import { createRoot } from 'react-dom/client';

import App from '@/components/App';

Sentry.init({
    // This is safe to be public.
    // See https://docs.sentry.io/product/sentry-basics/concepts/dsn-explainer/ for more information.
    dsn: 'https://b25e7066a7d647cea237cd72beec5c9f@app.glitchtip.com/6107',
    integrations: [],
});

posthog.init(import.meta.env.VITE_POSTHOG_API_KEY, {
    api_host: import.meta.env.VITE_POSTHOG_API_HOST,
});

console.log(import.meta.env.VITE_POSTHOG_API_KEY);
console.log(import.meta.env.VITE_POSTHOG_API_HOST);

const container = document.getElementById('app');

if (container) {
    const root = createRoot(container);
    root.render(<App />);
} else {
    console.error('Failed to find the root element');
}
