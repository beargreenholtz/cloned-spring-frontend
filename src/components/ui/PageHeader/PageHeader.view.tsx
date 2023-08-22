import React from 'react';

import NavigateBackButton from '../NavigateBackButton';
import Svg from '../Svg';

import classes from './PageHeader.module.scss';
import Link from 'next/link';

interface IProps {
	readonly navigateTo: string;
	readonly theme?: 'light' | 'dark';
}

const PageHeaderView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<div className={classes['container']}>
			<div className={classes['container__backButton']}>
				<NavigateBackButton theme={props.theme ?? 'dark'} />
			</div>
			<Link className={classes['brandLogo']} href="/">
				<Svg
					name="brandLogo"
					className={classes['brandLogo__icon']}
					style={{ fill: props.theme === 'light' ? '#FFFFFF' : '#000000' }}
				/>
			</Link>
			<Link href="/">
				<Svg
					className={classes['rightSide__brandLogo']}
					name="brandSmallLogo"
					style={{ fill: props.theme === 'light' ? '#FFFFFF' : '#000000' }}
				/>
			</Link>
		</div>
	);
};

PageHeaderView.displayName = 'PageHeaderView';
PageHeaderView.defaultProps = {};

export default React.memo(PageHeaderView);
