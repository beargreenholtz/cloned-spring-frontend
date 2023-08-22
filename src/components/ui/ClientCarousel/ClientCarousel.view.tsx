import React from 'react';

import classes from './ClientCarousel.module.scss';
import Client from './Client';
import icons from '@/assets/icons';
import { IClientContent } from '@/interfaces/responses';

interface IProps {
	readonly animationMobile: boolean;
	readonly clientsContent: IClientContent[] | null;
}

const ClientCarouselView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<div className={classes['container']}>
			<span className={classes['container__title']}>Some of out clients</span>

			<div className={props.animationMobile ? classes['logos'] : classes['logosLoad']}>
				<div className={classes['logosSlide']}>
					{props.clientsContent?.map((client, i) => (
						<Client
							key={i}
							clientName={client.attributes.clientName}
							logo={
								client.attributes.logo?.data
									? client.attributes.logo?.data[0]?.attributes.url
									: undefined
							}
						/>
					))}
				</div>
				<div className={classes['logosSlide']}>
					{props.clientsContent?.map((client, i) => (
						<Client
							key={i}
							clientName={client.attributes.clientName}
							logo={
								client.attributes.logo?.data
									? client.attributes.logo?.data[0]?.attributes.url
									: undefined
							}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

ClientCarouselView.displayName = 'ClientCarouselView';
ClientCarouselView.defaultProps = {};

export default React.memo(ClientCarouselView);
