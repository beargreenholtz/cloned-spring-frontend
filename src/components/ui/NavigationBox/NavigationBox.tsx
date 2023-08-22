import React from 'react';

import NavigationBoxView from './NavigationBox.view';

interface IProps {
	readonly projectName: string;
	readonly category: string | undefined;
	readonly year: string;
	readonly onPressNextImageIndex: () => void;
	readonly onPressBackImageIndex: () => void;
}

const NavigationBox: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<NavigationBoxView
			projectName={props.projectName}
			category={props.category}
			year={props.year}
			onPressNextImageIndex={props.onPressNextImageIndex}
			onPressBackImageIndex={props.onPressBackImageIndex}
		/>
	);
};

NavigationBox.displayName = 'NavigationBox';
NavigationBox.defaultProps = {};

export default React.memo(NavigationBox);
