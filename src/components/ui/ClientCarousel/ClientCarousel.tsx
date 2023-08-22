import React, { useEffect, useState } from 'react';

import ClientCarouselView from './ClientCarousel.view';

import { AxiosResponse } from 'axios';
import { backendApi } from '@/utils/http';

import { IClientContent } from '@/interfaces/responses';

interface IProps {}

const ClientCarousel: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const [animationMobile, setAnimationMobile] = useState<boolean>(false);
	const [clientsContentState, setClientsContentState] = useState<IClientContent[] | null>(null);

	const animationTimer = () => {
		setTimeout(() => {
			setAnimationMobile(() => true);
		}, 400);
	};
	animationTimer();

	useEffect(() => {
		backendApi
			.get(
				`${process.env['NEXT_PUBLIC_BACKEND_URL']}/api/clients?fields[0]=clientName&populate[1]=logo`,
			)
			.then((response: AxiosResponse) => {
				setClientsContentState(() => response.data.data);
			});
	}, [backendApi]);

	return <ClientCarouselView animationMobile={animationMobile} clientsContent={clientsContentState} />;
};

ClientCarousel.displayName = 'ClientCarousel';
ClientCarousel.defaultProps = {};

export default React.memo(ClientCarousel);
