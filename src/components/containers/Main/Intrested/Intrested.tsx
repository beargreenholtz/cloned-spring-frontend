import React, { useState } from 'react';

import { IType } from '../../../../interfaces/responses';

import IntrestedView from './Intrested.view';

interface IProps {
	readonly typesList: IType[];
}

const Intrested: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const [selectedTypeState, setSelectedTypeState] = useState<IType[]>([]);

	const onSelectType = (type: IType) => {
		setSelectedTypeState(() => [type]);
	};
	return (
		<IntrestedView
			selectedType={selectedTypeState}
			typesList={props.typesList}
			onSelectType={onSelectType}
		/>
	);
};

Intrested.displayName = 'Intrested';
Intrested.defaultProps = {};

export default React.memo(Intrested);
