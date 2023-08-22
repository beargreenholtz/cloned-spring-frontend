import React, { CSSProperties } from 'react';

import type icons from '../../../assets/icons';

import SvgView from './Svg.view';

interface IProps {
	readonly name: keyof typeof icons;
	readonly className?: string;
	readonly style?: CSSProperties;
	readonly onClick?: () => void;
}

const Svg: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<SvgView style={props.style} className={props.className} name={props.name} onClick={props.onClick} />
	);
};

Svg.displayName = 'Svg';
Svg.defaultProps = {};

export default React.memo(Svg);
