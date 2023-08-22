import React from 'react';

import NavigateBackButton from '../../ui/NavigateBackButton';
import Svg from '../../ui/Svg';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'react-responsive-carousel/lib/styles/carousel.css';

import classes from './Menu.module.scss';

import MenuBackground from '../../ui/menubackground/MenuBackground';
import Link from 'next/link';

interface IProps {
	readonly onNevigateToHome: VoidFunction;
	readonly onNevigateToWorks: VoidFunction;
	readonly onNevigateToAbout: VoidFunction;
	readonly onNevigateToContact: VoidFunction;
	readonly onPressNextImageIndexBg: VoidFunction;
	readonly selectedImageIndex: number;
}

const MenuView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<section className={classes['container']}>
			<div className={classes['background']}>
				<MenuBackground />

				<button
					type="button"
					className={classes['bgbutton']}
					onClick={props.onPressNextImageIndexBg}
				/>

				<div className={classes['innerMenu']}>
					<div className={classes['navigateBackButton']}>
						<NavigateBackButton theme="dark" />
					</div>
					<div className={classes['brandLogo']}>
						<Link href="/">
							<Svg name="brandLogo" className={classes['brandLogo__icon']} />
						</Link>
					</div>

					<div className={classes['navigationContainer']}>
						<button
							type="button"
							className={classes['navigationContainer__button']}
							onClick={props.onNevigateToHome}
						>
							home
						</button>
						<button
							type="button"
							className={classes['navigationContainer__button']}
							onClick={props.onNevigateToWorks}
						>
							works
						</button>
						<button
							type="button"
							className={classes['navigationContainer__button']}
							onClick={props.onNevigateToAbout}
						>
							about
						</button>
						<button
							type="button"
							className={classes['navigationContainer__button']}
							onClick={props.onNevigateToContact}
						>
							contact
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

MenuView.displayName = 'MenuView';
MenuView.defaultProps = {};

export default React.memo(MenuView);
