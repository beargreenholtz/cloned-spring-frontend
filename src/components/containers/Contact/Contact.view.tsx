import React from 'react';
import Image from 'next/image';

import PageHeader from '../../ui/PageHeader';
import Svg from '../../ui/Svg';
import { socialMedia } from '../../../data/social-media';
import { concatDiverseClasses } from '../../../utils/component';
import type { IClientContent, IContactContent } from '../../../interfaces/responses';

import classes from './Contact.module.scss';
import ClientCarousel from '@/ui/ClientCarousel';

interface IProps {
	readonly contactContent: IContactContent | null;
	readonly clientsContent: IClientContent[] | null;
	readonly onMapsNavigate: () => void;
	readonly onSocialNavigate: (_: string) => void;
	readonly animationMobile: boolean;
}

const ContactView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const emailAdress = props.contactContent?.attributes.email;
	const city = props.contactContent?.attributes.city;
	const fullAdress = props.contactContent?.attributes.fullAdress;
	//tbd barhen pass url instead in require
	return (
		<section className={classes['container']}>
			<PageHeader navigateTo="/menu" />
			<div
				className={concatDiverseClasses(
					classes['innerContainer'],
					'animate__animated animate__fadeIn',
				)}
			>
				<div className={classes['firstPart']}>
					<div className={classes['location']}>
						<Svg name="arrowRight" className={classes['location__icon']} />
						<span className={classes['location__text']}>contact</span>
					</div>
					<div className={classes['headerContainer']}>
						<h2 className={classes['headerContainer__header']}>Keep in touch</h2>
						<Svg name="contactHeader" className={classes['headerContainer__icon']} />
					</div>
					<div className={classes['innerEmail']}>
						<span className={classes['innerEmail__text']}>Start a conversation</span>
						<button
							className={classes['innerEmail__link']}
							type="button"
							onClick={() =>
								window.open('https://u4wvavq62qc.typeform.com/to/XqoBnl1I', '_blank')
							}
						>
							Reach us
							{' >'}
						</button>

						<span className={classes['innerEmail__text']}>Or contact us directly</span>
						<button
							className={classes['innerEmail__link']}
							type="button"
							onClick={() =>
								window.open('https://api.whatsapp.com/send?phone=972504949449', '_blank')
							}
						>
							Whatsapp
						</button>
						<button
							className={classes['innerEmail__link']}
							type="button"
							onClick={() => (window.location.href = `mailto:${emailAdress}`)}
						>
							{emailAdress}
						</button>
					</div>
					<div className={classes['contentContainer']}>
						<div className={classes['innerSide']}>
							<span className={classes['innerSide__subTitle']}>Location</span>
							<span className={classes['innerSide__city']}>{city}</span>
							<span className={classes['innerSide__fullAdress']}>{fullAdress}</span>
							<button
								className={classes['viewOnMap']}
								type="button"
								onClick={props.onMapsNavigate}
							>
								<Svg name="arrowRight" className={classes['viewOnMap__icon']} />
								<span className={classes['viewOnMap__text']}>View on map</span>
							</button>
						</div>
						<div className={classes['innerSide']}>
							<span className={classes['innerSide__subTitle']}>Follow us</span>
							{socialMedia.map((element, i) => (
								<button
									key={i}
									className={classes['innerSide__title']}
									type="button"
									onClick={() => props.onSocialNavigate(element.url)}
								>
									<Svg name={element.icon} className={classes['innerSideIcon']} />
									{element.name}
								</button>
							))}
						</div>
					</div>
				</div>
				<div className={classes['secondPart']}>
					<ClientCarousel />
				</div>
			</div>
		</section>
	);
};

ContactView.displayName = 'ContactView';
ContactView.defaultProps = {};

export default React.memo(ContactView);
