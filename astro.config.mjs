import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import PoweredWebAppBuilder from "webapp-astro-pwa/pwa";

const DEV_PORT = 2121;

// https://astro.build/config
export default defineConfig({
	site: process.env.CI
		? 'https://themesberg.github.io'
		: `http://localhost:${DEV_PORT}`,
	base: process.env.CI ? '/flowbite-astro-admin-dashboard' : undefined,

	// output: 'server',

	/* Like Vercel, Netlify,… Mimicking for dev. server */
	// trailingSlash: 'always',

	server: {
		/* Dev. server only */
		port: DEV_PORT,
	},

	integrations: [
		//
		sitemap(),
		tailwind(),
		PoweredWebAppBuilder({
			"forceUpdate": true,
			"isInstallBtnVisible": true,
			notification: false, // Enables web push notifications (default: false)
      			// saveSubscriptionPath: "path_to_server_for_save_subscription", // API endpoint to save push subscriptions
      			// applicationServerKey: "key_client_side", // VAPID public key for push notifications
			isManifest: true,
				createManifest: true,
				manifestPath: "manifest.json",
				manifest: {
					name: "My PWA Example",
					short_name: "PWAExample",
					description: "A simple Progressive Web App example.",
					start_url: "/",
					display: "standalone",
					theme_color: "#8936FF",
					icons: [
					{
						sizes: "512x512",
						src: "node_modules/webapp-astro-pwa/src/manifest_imgs/icon512x512.png",
						type: "image/png",
					},
					{
						sizes: "192x192",
						src: "node_modules/webapp-astro-pwa/src/manifest_imgs/icon192x192.png",
						type: "image/png",
					},
					],
				},
				icons: [
					{
					rel: "icon",
					type: "png",
					sizes: "512x512",
					href: "/webapp-astro-pwa/src/manifest_imgs/icon512x512.png",
					},
					{
					rel: "apple-touch-icon",
					type: "png",
					sizes: "192x192",
					href: "/webapp-astro-pwa/src/manifest_imgs/icon512x512.png",
					},
				],
					meta: [
					{
					name: "mobile-web-app-capable",
					content: "yes",
					},
					{
					name: "apple-mobile-web-app-capable",
					content: "yes",
					},
					{
					name: "application-name",
					content: "PWAExample",
					},
					{
					name: "apple-mobile-web-app-title",
					content: "PWAExample",
					},
					{
					name: "theme-color",
					content: "#8936FF",
					},
					{
					name: "msapplication-navbutton-color",
					content: "#8936FF",
					},
					{
					name: "apple-mobile-web-app-status-bar-style",
					content: "black-translucent",
					},
					{
					name: "viewport",
					content: "width=device-width, initial-scale=1, shrink-to-fit=no",
					},
					{
					name: "msapplication-starturla",
					content: "/",
					},
				],	
					}),
				],
			});
// https://astro.build/config