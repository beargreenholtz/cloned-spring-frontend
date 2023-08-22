import React from 'react';

import MenuBackgroundView from './MenuBackground.view';

interface IProps {}

const MenuBackground: React.FC<IProps> = () => {
	return <MenuBackgroundView />;
};

MenuBackground.displayName = 'MenuBackground';
MenuBackground.defaultProps = {};

export default React.memo(MenuBackground);
