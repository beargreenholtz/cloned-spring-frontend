/* eslint-disable react/display-name */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import Head from 'next/head';
import type { AppProps } from 'next/app';
import React, { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

import '../styles/custom.scss';
import { useNextCssRemovalPrevention } from '../utils/fix-css';

function MyApp({ Component, pageProps, router }: AppProps) {
	useNextCssRemovalPrevention();

	//Scroll to top on route change
	useEffect(() => {
		const scrollToTop = () => {
			document.body.scrollTop = 0;
		};

		setTimeout(() => {
			scrollToTop();
		}, 700);
	}, [router.asPath]);

	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="theme-color" content="#000000" />
				<meta name="description" content="TAILOR MADE PRODUCTION" />
				<meta property="og:title" content="Spring Productions" />
				<meta property="og:type" content="website" />
				<meta property="og:image" content="/images/meta-image.png" />
				<meta property="og:image:type" content="image/png" />
				<meta property="og:image:width" content="1922" />
				<meta property="og:image:height" content="1081" />
				<meta property="og:image:alt" content="Spring Profuctions" />
				<meta property="og:url" content="https://springproduction.com/" />
				<meta property="og:keywords" content="Spring, Production, Photographer, Portfolio" />

				<title>Spring Productions</title>

				<link rel="icon" href="/favicon.ico" type="image/x-icon" />
				<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
				<link rel="apple-touch-icon" sizes="180x180" href="/logo192.png" />
				<link rel="manifest" href="/site.webmanifest" />
			</Head>
			<AnimatePresence mode="wait" initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
				<Component key={router.asPath} {...pageProps} />
			</AnimatePresence>
		</>
	);
}

export default MyApp;
