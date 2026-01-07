import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Your Netlify site URL (update after first deploy)
  // Example: site: 'https://your-site-name.netlify.app',
  site: 'https://project-linux.netlify.app',
  
  // Build output - static HTML (default for Netlify)
  output: 'static',
});

