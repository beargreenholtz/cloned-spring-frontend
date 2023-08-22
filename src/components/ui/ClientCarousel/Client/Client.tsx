import React from 'react';

import ClientView from './Client.view';

interface IProps {
	readonly clientName: string;
	readonly logo: string | undefined;
}

const Client: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return <ClientView clientName={props.clientName} logo={props.logo} />;
};

Client.displayName = 'Client';
Client.defaultProps = {};

export default React.memo(Client);
