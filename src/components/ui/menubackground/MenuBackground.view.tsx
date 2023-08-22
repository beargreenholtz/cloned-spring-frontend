import React from 'react';

import classes from './MenuBackground.module.scss';

interface IProps {
	className?: string;
}

const MenuBackgroundView: React.FC<IProps> = () => {
	return (
		<div className={classes['containerNoise']}>
			<div className={classes['bg']}>
				<span className={classes['firstCircle']} />
				<span className={classes['secondCircle']} />
			</div>
		</div>
	);
};

MenuBackgroundView.displayName = 'MenuBackgroundView';
MenuBackgroundView.defaultProps = {};

export default React.memo(MenuBackgroundView);
