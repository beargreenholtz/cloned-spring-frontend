import React from 'react';
import Category from '../../../ui/Category';
import type { IType } from '../../../../interfaces/responses';

import classes from './Intrested.module.scss';
import Svg from '../../../ui/Svg';
import { concatDiverseClasses } from '../../../../utils/component';
import Link from 'next/link';

interface IProps {
	readonly selectedType: IType[];
	readonly typesList: IType[];
	readonly onSelectType: (_: IType) => void;
}

const IntrestedView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<div className={classes['container']}>
			<h2 className={classes['container__title']}>What interest you the most?</h2>
			<div className={classes['innerTypes']}>
				{props.typesList.map((type) => (
					<Category
						key={type.id}
						element={type}
						selectedElements={props.selectedType}
						onSelectElement={props.onSelectType}
					/>
				))}
			</div>
			{props.selectedType.length !== 0 && (
				<>
					<h3
						className={concatDiverseClasses(
							classes['firstLine'],
							'animate__animated animate__fadeIn',
						)}
					>
						Great!
					</h3>

					<button className={classes['secondLine']} type="button">
						<Link
							className={concatDiverseClasses(
								classes['secondLine__text'],
								'animate__animated animate__fadeInLeft',
							)}
							href="/contact"
						>
							let’s talk
						</Link>
						<Svg name="arrowRight" className={classes['secondLine__icon']} />
					</button>
				</>
			)}
		</div>
	);
};

IntrestedView.displayName = 'IntrestedView';
IntrestedView.defaultProps = {};

export default React.memo(IntrestedView);
