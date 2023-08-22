import React from 'react';
import { useRouter } from 'next/router';

import NavigateBackButtonView from './NavigateBackButton.view';

interface IProps {
	readonly theme: 'light' | 'dark';
}

const NavigateBackButton: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const router = useRouter();

	const onNavigateBack = () => {
		router.back();
	};

	return <NavigateBackButtonView theme={props.theme} onNavigateBack={onNavigateBack} />;
};

NavigateBackButton.displayName = 'NavigateBackButton';
NavigateBackButton.defaultProps = {};

export default React.memo(NavigateBackButton);
