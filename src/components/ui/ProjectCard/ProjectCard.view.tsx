import React from 'react';
import Image from 'next/image';
import VisibilitySensor from 'react-visibility-sensor';

import { concatClasses } from '../../../utils/component';

import classes from './ProjectCard.module.scss';

interface IProps {
	readonly index: number;
	readonly isMainPage: boolean;
	readonly projectName: string;
	readonly year: string;
	readonly media: string | undefined;
	readonly category: string | undefined;
	readonly maxProjectsVisibleIndex: number;
	readonly isVisible: boolean;
	readonly onViewPort: (_: boolean) => void;
}

const ProjectCardView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const containerClasses = concatClasses(
		classes,
		'container',
		!props.isMainPage && props.index > props.maxProjectsVisibleIndex
			? 'container--hidden'
			: 'container--visible',
		props.isVisible ? 'container--fadeIn' : null,
	);

	return (
		<VisibilitySensor partialVisibility onChange={props.onViewPort}>
			<div className={containerClasses}>
				<Image
					className={classes['container__img']}
					src={props.media}
					alt="project"
					width={100}
					height={100}
					quality={100}
					loading={props.isMainPage ? 'eager' : 'lazy'}
					priority={props.isMainPage}
				/>
				<div className={classes['projectInfo']}>
					<span className={classes['projectInfo__name']}>{props.projectName}</span>
					<div className={classes['rightSide']}>
						<span className={classes['rightSide__item']}>{props.category}</span>
						<span className={classes['rightSide__item']}>{props.year}</span>
					</div>
				</div>
			</div>
		</VisibilitySensor>
	);
};

ProjectCardView.displayName = 'ProjectCardView';
ProjectCardView.defaultProps = {};

export default React.memo(ProjectCardView);
