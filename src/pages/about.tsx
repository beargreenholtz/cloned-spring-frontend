import type { NextPage } from 'next';

import About from '@/containers/About';
import Transition from '@/layout/Transition';

const AboutPage: NextPage = () => {
	return (
		<Transition>
			<About />
		</Transition>
	);
};

AboutPage.displayName = 'AboutPage';
AboutPage.defaultProps = {};

export default AboutPage;
