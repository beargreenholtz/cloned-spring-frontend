import React from 'react';

import ClientCarousel from '@/ui/ClientCarousel';
import Svg from '@/ui/Svg';

import classes from './Footer.module.scss';

interface IProps {}

const FooterView: React.FC<IProps> = () => {
	return (
		<div className={classes['container']}>
			<span className={classes['container__subHeaderWeb']}>Ready to level up your productions?</span>
			<span className={classes['container__subHeaderMobile']}>
				Ready to level up
				<br />
				your productions?
			</span>
			<h3 className={classes['container__headerWeb']}>Let’s get started.</h3>
			<h3 className={classes['container__headerMobile']}>
				Let’s
				<br />
				get
				<br />
				started.
			</h3>
			<div className={classes['contactInfoBox']}>
				<button
					className={classes['contactInfoBox__spacialItem']}
					type="button"
					onClick={() => window.open('https://u4wvavq62qc.typeform.com/to/XqoBnl1I', '_blank')}
				>
					Reach us
				</button>
				<span className={classes['contactInfoBox__backSlash']}>/</span>
				<button
					className={classes['contactInfoBox__spacialItem']}
					type="button"
					onClick={() => window.open('https://api.whatsapp.com/send?phone=972504949449', '_blank')}
				>
					Whatsapp
				</button>
			</div>
			<button
				className={classes['brandLogo']}
				type="button"
				onClick={() => window.open('https://www.hayota.studio/')}
			>
				<Svg name="hayotaLogo" className={classes['brandLogo__icon']} />
			</button>
		</div>
	);
};

FooterView.displayName = 'FooterView';
FooterView.defaultProps = {};

export default React.memo(FooterView);
