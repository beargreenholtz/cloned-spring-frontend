import React, { useState } from 'react';

import ProjectCardView from './ProjectCard.view';

interface IProps {
	readonly index: number;
	readonly isMainPage: boolean;
	readonly projectName: string;
	readonly year: string;
	readonly media: string | undefined;
	readonly category: string | undefined;
	readonly maxProjectsVisibleIndex: number;
}

const ProjectCard: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const [isVisibleState, setIsVisibleState] = useState<boolean>(false);

	const onViewPort = (isVisible: boolean) => {
		isVisible && setIsVisibleState(() => true);
	};
	return (
		<ProjectCardView
			index={props.index}
			isMainPage={props.isMainPage}
			maxProjectsVisibleIndex={props.maxProjectsVisibleIndex}
			projectName={props.projectName}
			year={props.year}
			media={props.media}
			category={props.category}
			isVisible={isVisibleState}
			onViewPort={onViewPort}
		/>
	);
};

ProjectCard.displayName = 'ProjectCard';
ProjectCard.defaultProps = {};

export default React.memo(ProjectCard);
