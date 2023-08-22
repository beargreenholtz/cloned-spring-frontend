import React from 'react';

import PageView from './PageHeader.view';

interface IProps {
	readonly navigateTo: string;
	readonly theme?: 'light' | 'dark';
}

const PageHeader: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return <PageView navigateTo={props.navigateTo} theme={props.theme} />;
};

PageHeader.displayName = 'PageHeader';
PageHeader.defaultProps = {};

export default React.memo(PageHeader);
