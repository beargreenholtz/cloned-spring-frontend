import React from 'react';

import type { ICategory, IType } from '../../../interfaces/responses';
import { concatClasses } from '../../../utils/component';
import classes from './Category.module.scss';

interface IProps {
	readonly element: ICategory | IType;
	readonly selectedElements: ICategory[] | IType[];
	readonly onSelectElement: (_: ICategory | IType) => void;
}

const CategoryView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const containerClass = props.selectedElements.includes(props.element)
		? concatClasses(classes, 'container', 'container--selected')
		: classes['container'];

	return (
		<button type="button" className={containerClass} onClick={() => props.onSelectElement(props.element)}>
			<span className={classes['container__text']}>{props.element.attributes.name}</span>
		</button>
	);
};

CategoryView.displayName = 'CategoryView';
CategoryView.defaultProps = {};

export default React.memo(CategoryView);
