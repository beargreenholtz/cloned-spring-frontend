import React from 'react';

import { concatClasses } from '../../../utils/component';
import Svg from '../Svg';

import classes from './NavigateBackButton.module.scss';

interface IProps {
	readonly theme: 'light' | 'dark';
	readonly onNavigateBack: VoidFunction;
}

const NavigateBackButtonView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<button className={classes['container']} type="button" onClick={props.onNavigateBack}>
			<Svg
				className={concatClasses(
					classes,
					'container__text',
					props.theme === 'light' ? 'container__icon--light' : 'container__icon--dark',
				)}
				name="arrowLeft"
			/>
			<span
				className={concatClasses(
					classes,
					'container__text',
					props.theme === 'light' ? 'container__text--light' : 'container__text--dark',
				)}
			>
				back
			</span>
		</button>
	);
};

NavigateBackButtonView.displayName = 'NavigateBackButtonView';
NavigateBackButtonView.defaultProps = {};

export default React.memo(NavigateBackButtonView);
