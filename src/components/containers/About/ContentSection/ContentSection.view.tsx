import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';

import classes from './ContentSection.module.scss';
import { concatClasses, concatDiverseClasses } from '@/utils/component';

interface IProps {
	readonly title: string;
	readonly description: string;
	readonly className?: string;
	readonly isUpperPart?: boolean;
	readonly isVisible: boolean;
	readonly onViewPort: (_: boolean) => void;
}

const ContentSectionView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<VisibilitySensor partialVisibility onChange={props.onViewPort}>
			<div
				className={concatDiverseClasses(
					props.className,
					classes['container'],
					props.isVisible || props.isUpperPart
						? classes['container--visible']
						: classes['container__hidden'],
				)}
			>
				<span
					className={concatClasses(
						classes,
						'container__title',
						!props.isUpperPart ? 'container__title--middle' : null,
					)}
				>
					{props.title}
				</span>
				<p className={classes['container__description']}>{props.description}</p>
			</div>
		</VisibilitySensor>
	);
};

ContentSectionView.displayName = 'ContentSectionView';
ContentSectionView.defaultProps = {};

export default React.memo(ContentSectionView);
