import React from 'react';

import type { ICategory, IType } from '../../../interfaces/responses';
import CategoryView from './Category.view';

interface IProps {
	readonly element: ICategory | IType;
	readonly selectedElements: ICategory[] | IType[];
	readonly onSelectElement: (_: ICategory | IType) => void;
}

const Category: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<CategoryView
			element={props.element}
			selectedElements={props.selectedElements}
			onSelectElement={props.onSelectElement}
		/>
	);
};

Category.displayName = 'Category';
Category.defaultProps = {};

export default React.memo(Category);
