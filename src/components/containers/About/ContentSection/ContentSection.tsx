import React, { useState } from 'react';

import ContentSectionView from './ContentSection.view';

interface IProps {
	readonly title: string;
	readonly description: string;
	readonly className?: string;
	readonly isUpperPart?: boolean;
}

const ContentSection: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const [isVisibleState, setIsVisibleState] = useState<boolean>(false);

	const onViewPort = (isVisible: boolean) => {
		isVisible && setIsVisibleState(() => true);
	};

	return (
		<ContentSectionView
			title={props.title}
			description={props.description}
			className={props.className}
			isUpperPart={props.isUpperPart}
			isVisible={isVisibleState}
			onViewPort={onViewPort}
		/>
	);
};

ContentSection.displayName = 'ContentSection';
ContentSection.defaultProps = {};

export default React.memo(ContentSection);
