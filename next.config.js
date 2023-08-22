const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

/** @type {import('next').NextConfig} */
const configuration = (phase) => {
	const shouldAdjustToProduction = phase !== PHASE_DEVELOPMENT_SERVER && process.env.AUTOMATION !== 'true';

	return {
		reactStrictMode: true,
		eslint: {
			dirs: ['./src'],
			ignoreDuringBuilds: true,
		},
		images: {
			loader: 'imgix',
			path: '/',
			domains: ['https://frontend-hudws.ondigitalocean.app/'],
			deviceSizes: [320, 420, 768, 1024, 1200],
			unoptimized: true,
		},
		compiler: {
			removeConsole: shouldAdjustToProduction,
			reactRemoveProperties: shouldAdjustToProduction,
		},
		trailingSlash: true,
		async headers() {
			return [
				{
					source: '/(.*)',
					headers: [
						{
							key: 'Cache-Control',
							value: 'public, max-age=3600, must-revalidate',
						},
					],
				},
			];
		},

		// Custom configuration for mobile optimization
		async webpack(config, { dev, isServer }) {
			if (!dev && !isServer) {
				config.optimization.splitChunks.cacheGroups = {
					framework: {
						name: 'framework',
						chunks: 'all',
						test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
						priority: 40,
						enforce: true,
					},
					lib: {
						test(module) {
							return module.size() > 160000 && /node_modules[/\\]/.test(module.identifier());
						},
						name(module) {
							return (
								module
									.identifier()
									.split('/')
									.reduceRight((item) => item) || ''
							);
						},
						priority: 30,
						minChunks: 1,
						reuseExistingChunk: true,
						enforce: true,
					},
					commons: {
						name: 'commons',
						chunks: 'all',
						minChunks: 2,
						priority: 20,
					},
				};
			}

			return config;
		},
	};
};

module.exports = configuration;
