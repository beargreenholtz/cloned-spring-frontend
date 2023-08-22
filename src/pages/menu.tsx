import type { NextPage } from 'next';

import Menu from '@/containers/Menu';
import Transition from '@/layout/Transition';

const MenuPage: NextPage = () => {
	return (
		<Transition>
			<Menu />
		</Transition>
	);
};

MenuPage.displayName = 'MenuPage';
MenuPage.defaultProps = {};

export default MenuPage;
