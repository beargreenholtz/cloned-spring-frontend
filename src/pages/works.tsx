import type { NextPage } from 'next';

import Works from '@/containers/Works';
import Transition from '@/layout/Transition';

const WorksPage: NextPage = () => {
	return (
		<Transition>
			<Works />
		</Transition>
	);
};

WorksPage.displayName = 'WorksPage';
WorksPage.defaultProps = {};

export default WorksPage;
