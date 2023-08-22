import type { NextPage } from 'next';

import Project from '@/containers/Project';
import Transition from '@/layout/Transition';

const ProjectPage: NextPage = () => {
	return (
		<Transition>
			<Project />
		</Transition>
	);
};

ProjectPage.displayName = 'ProjectPage';
ProjectPage.defaultProps = {};

export default ProjectPage;
