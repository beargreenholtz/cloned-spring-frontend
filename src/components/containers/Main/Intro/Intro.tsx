import React, { useState, useEffect } from 'react';

import type { IProjectsList, IVideosList } from '../../../../interfaces/responses';
import IntroView from './Intro.view';
import { AxiosResponse } from 'axios';
import { backendApi } from '../../../../utils/http';

interface IProps {
	readonly projectsList: IProjectsList[];
}

const Intro: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const [whiteLogosIndexes] = useState<number[]>([]);
	const [currentWebVideoIndex, setCurrentWebVideoIndex] = useState<number>(0);
	const [currentMobileVideoIndex, setCurrentMobileVideoIndex] = useState<number>(0);
	const [videosListState, setVideosListState] = useState<IVideosList | null>(null);
	const [hasWindowState, setHasWindowState] = useState<boolean>(false);

	const [showVideoState, setShowVideoState] = useState<boolean>(false);

	const numberOfWebVideos = videosListState?.attributes.videos.web.length ?? 0;
	const numberOfMobileVideos = videosListState?.attributes.videos.mobile.length ?? 0;

	useEffect(() => {
		backendApi
			.get(`${process.env['NEXT_PUBLIC_BACKEND_URL']}/api/intro-video`)
			.then((response: AxiosResponse) => {
				setVideosListState(() => response.data.data);
			});
	}, [backendApi]);

	useEffect(() => {
		setTimeout(() => {
			setShowVideoState(() => true);
		}, 1500);
		if (typeof window !== 'undefined') {
			setHasWindowState(() => true);
		}
	}, []);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentWebVideoIndex((currentIndex) => (currentIndex + 1) % numberOfWebVideos);
		}, 7500);
		return () => clearInterval(intervalId);
	}, [numberOfWebVideos]);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentMobileVideoIndex((currentIndex) => (currentIndex + 1) % numberOfMobileVideos);
		}, 7500);
		return () => clearInterval(intervalId);
	}, [numberOfMobileVideos]);

	return (
		<IntroView
			currentWebVideoIndex={currentWebVideoIndex}
			currentMobileVideoIndex={currentMobileVideoIndex}
			projectsList={props.projectsList}
			whiteLogosIndexes={whiteLogosIndexes}
			videosList={videosListState}
			showVideo={showVideoState}
			hasWindow={hasWindowState}
		/>
	);
};

Intro.displayName = 'Intro';
Intro.defaultProps = {};

export default React.memo(Intro);
