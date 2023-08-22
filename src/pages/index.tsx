import React from 'react';
import type { NextPage } from 'next';

import Main from '@/containers/Main';
import Transition from '@/layout/Transition';

const MainPage: NextPage = () => {
	return (
		<Transition>
			<Main />
		</Transition>
	);
};

MainPage.displayName = 'MainPage';
MainPage.defaultProps = {};

export default MainPage;
