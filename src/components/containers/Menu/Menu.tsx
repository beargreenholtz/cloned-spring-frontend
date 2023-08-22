import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import MenuView from './Menu.view';

interface IProps {}

const Menu: React.FC<IProps> = () => {
	const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
	const router = useRouter();

	const onPressNextImageIndexBg = () =>
		setSelectedImageIndex((prev) => {
			if (prev === 3) {
				return 0;
			} else {
				return prev + 1;
			}
		});

	useEffect(() => {
		const interval = setInterval(() => {
			onPressNextImageIndexBg();
		}, 5000);
		return () => clearInterval(interval);
	}, [onPressNextImageIndexBg]);

	const onNevigateToHome = () => router.push('/');

	const onNevigateToWorks = () => {
		router.push('/works');
	};
	const onNevigateToAbout = () => router.push('/about');
	const onNevigateToContact = () => router.push('/contact');

	return (
		<MenuView
			selectedImageIndex={selectedImageIndex}
			onNevigateToHome={onNevigateToHome}
			onNevigateToWorks={onNevigateToWorks}
			onNevigateToAbout={onNevigateToAbout}
			onNevigateToContact={onNevigateToContact}
			onPressNextImageIndexBg={onPressNextImageIndexBg}
		/>
	);
};

Menu.displayName = 'Menu';
Menu.defaultProps = {};

export default React.memo(Menu);
