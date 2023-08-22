import React, { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';

import { backendApi } from '../../../utils/http';
import type { IAboutContent, IContentSection } from '../../../interfaces/responses';

import AboutView from './About.view';

interface IProps {}

const About: React.FC<IProps> = () => {
	const [aboutContentState, setAboutContentState] = useState<IAboutContent | null>(null);
	const [contentSectionsState, setContentSectionState] = useState<IContentSection[] | null>(null);

	useEffect(() => {
		backendApi
			.get(`${process.env['NEXT_PUBLIC_BACKEND_URL']}/api/about?populate[0]=media`)
			.then((response: AxiosResponse) => {
				setAboutContentState(() => response.data.data);
			});

		backendApi
			.get(`${process.env['NEXT_PUBLIC_BACKEND_URL']}/api/about-content-sections`)
			.then((response: AxiosResponse) => {
				setContentSectionState(() => response.data.data);
			});
	}, [backendApi]);
	return <AboutView aboutContent={aboutContentState} contentSections={contentSectionsState} />;
};

About.displayName = 'About';
About.defaultProps = {};

export default React.memo(About);
