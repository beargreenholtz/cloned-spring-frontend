import React from 'react';
import Image from 'next/image';

import classes from './Client.module.scss';

interface IProps {
	readonly clientName: string;
	readonly logo: string | undefined;
}

const ClientView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return props.logo ? (
		<Image
			src={props.logo}
			className={classes['clientName']}
			alt={props.clientName}
			width={100}
			height={100}
			quality={100}
		/>
	) : (
		<span className={classes['clientName']}>{props.clientName}</span>
	);
};

ClientView.displayName = 'ClientView';
ClientView.defaultProps = {};

export default React.memo(ClientView);
