import React from 'react';
import Svg from '../Svg';

import { concatClasses } from '../../../utils/component';
import classes from './NavigationBox.module.scss';

interface IProps {
	readonly projectName: string;
	readonly category: string | undefined;
	readonly year: string;
	readonly onPressNextImageIndex: () => void;
	readonly onPressBackImageIndex: () => void;
}

const NavigationBoxView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<div className={classes['container']}>
			<div className={classes['infoContainer']}>
				<span className={classes['infoContainer__productionName']}>{props.projectName}</span>
				<div className={classes['secondLine']}>
					<span className={classes['secondLine__category']}>{props.category}</span>
					<span className={classes['secondLine__year']}>{props.year}</span>
				</div>
			</div>
			<div className={classes['buttonsContainer']}>
				<button type="button" className={classes['button']} onClick={props.onPressNextImageIndex}>
					<span className={classes['button__text']}>next</span>
					<Svg
						name="arrowRight"
						className={concatClasses(classes, 'button__icon', 'button__icon--right')}
					/>
				</button>
				<button type="button" className={classes['button']} onClick={props.onPressBackImageIndex}>
					<Svg
						name="arrowLeft"
						className={concatClasses(classes, 'button__icon', 'button__icon--left')}
					/>
					<span className={classes['button__text']}>back</span>
				</button>
			</div>
		</div>
	);
};

NavigationBoxView.displayName = 'NavigationBoxView';
NavigationBoxView.defaultProps = {};

export default React.memo(NavigationBoxView);
