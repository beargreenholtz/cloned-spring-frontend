import React, { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';
import { useRouter } from 'next/router';

import { backendApi } from '../../../utils/http';
import type { IProjectContent } from '../../../interfaces/responses';

import ProjectView from './Project.view';

interface IProps {}

const Project: React.FC<IProps> = () => {
	const router = useRouter();
	const [hasWindowState, setHasWindowState] = useState<boolean>(false);

	const [projectContentState, setProjectContentState] = useState<IProjectContent | null>(null);

	useEffect(() => {
		document.body.scrollTo(0, 0);

		backendApi
			.get(
				`${process.env['NEXT_PUBLIC_BACKEND_URL']}/api/projects/${router.query.projectId}?fields[0]=name&fields[1]=description&populate[0]=media&populate[1]=categories&fields[3]=video&fields[4]=date`,
			)
			.then((response: AxiosResponse) => {
				setProjectContentState(() => response.data.data);
			});

		if (typeof window !== 'undefined') {
			setHasWindowState(() => true);
		}
	}, []);

	return <ProjectView projectContent={projectContentState} hasWindow={hasWindowState} />;
};

Project.displayName = 'Project';
Project.defaultProps = {};

export default React.memo(Project);
