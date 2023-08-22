import React, { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';

import { backendApi } from '../../../utils/http';
import type { IClientContent, IContactContent } from '../../../interfaces/responses';
import ContactView from './Contact.view';

interface IProps {}

const Contact: React.FC<IProps> = () => {
	const [contactContentState, setContactContentState] = useState<IContactContent | null>(null);
	const [clientsContentState, setClientsContentState] = useState<IClientContent[] | null>(null);
	const [animationMobile, setAnimationMobile] = useState<boolean>(false);

	const animationTimer = () => {
		setTimeout(() => {
			setAnimationMobile(() => true);
		}, 400);
	};

	animationTimer();

	useEffect(() => {
		backendApi
			.get(`${process.env['NEXT_PUBLIC_BACKEND_URL']}/api/contact?populate[0]=clients`)
			.then((response: AxiosResponse) => {
				setContactContentState(() => response.data.data);
			});

		backendApi
			.get(
				`${process.env['NEXT_PUBLIC_BACKEND_URL']}/api/clients?fields[0]=clientName&populate[1]=logo`,
			)
			.then((response: AxiosResponse) => {
				setClientsContentState(() => response.data.data);
			});
	}, [backendApi]);

	const onMapsNavigate = () => {
		window.open('https://goo.gl/maps/CqKs1YLBcp2QWJ3u6', '_blank');
	};

	const onSocialNavigate = (url: string) => {
		window.open(url, '_blank');
	};

	return (
		<ContactView
			animationMobile={animationMobile}
			contactContent={contactContentState}
			clientsContent={clientsContentState}
			onMapsNavigate={onMapsNavigate}
			onSocialNavigate={onSocialNavigate}
		/>
	);
};

Contact.displayName = 'Contact';
Contact.defaultProps = {};

export default React.memo(Contact);
