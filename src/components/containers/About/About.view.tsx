import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Svg from '../../ui/Svg';
import PageHeader from '../../ui/PageHeader';
import type { IAboutContent, IContentSection } from '../../../interfaces/responses';

import ContentSection from './ContentSection';
import classes from './About.module.scss';

interface IProps {
	readonly aboutContent: IAboutContent | null;
	readonly contentSections: IContentSection[] | null;
}

const AboutView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const upperContentSections = props.contentSections
		?.filter((section) => section.attributes.isUpperPart)
		.sort((a, b) => a.attributes.order - b.attributes.order);
	const lowerContentSections = props.contentSections
		?.filter((section) => !section.attributes.isUpperPart)
		.sort((a, b) => a.attributes.order - b.attributes.order);

	return (
		<section className={classes['container']}>
			<PageHeader navigateTo="/menu" />
			<div className={classes['innerAbout']}>
				<div className={classes['locationImageOrder']}>
					<div className={classes['location']}>
						<Svg name="arrowRight" className={classes['location__icon']} />
						<span className={classes['location__text']}>about</span>
					</div>
					<Image
						className={classes['locationImageOrder__img']}
						src={props.aboutContent?.attributes.media.data.attributes.url}
						alt="about"
						width={100}
						height={100}
						quality={100}
					/>
				</div>

				<div className={classes['contentContainer']}>
					<div className={classes['upperContentSections']}>
						{upperContentSections?.map((section) => (
							<ContentSection
								key={section.id}
								title={section.attributes.title}
								description={section.attributes.description}
								isUpperPart
							/>
						))}
					</div>
					<hr className={classes['mainDivider']} />
					<div className={classes['bottomContainer']}>
						<span className={classes['bottomContainer__title']}>
							{props.aboutContent?.attributes.title}
						</span>
						<p className={classes['bottomContainer__description']}>
							{props.aboutContent?.attributes.description}
						</p>

						<div className={classes['contentSections']}>
							{lowerContentSections?.map((section) => (
								<>
									<ContentSection
										key={section.id}
										title={section.attributes.title}
										description={section.attributes.description}
									/>

									<hr className={classes['contentSections__divider']} />
								</>
							))}
						</div>
					</div>
					<div className={classes['bottomDescriptionContainer']}>
						<Svg name="puzzle" className={classes['bottomDescriptionContainer__icon']} />
						<p className={classes['bottomDescriptionContainer__description']}>
							{props.aboutContent?.attributes.bottomDescription}
						</p>
					</div>
				</div>
			</div>
			<Link className={classes['footer']} href="/contact">
				<span className={classes['footer__text']}>let’s talk</span>
				<Svg name="arrowRight" className={classes['footer__icon']} />
			</Link>
		</section>
	);
};

AboutView.displayName = 'AboutView';
AboutView.defaultProps = {};

export default React.memo(AboutView);
