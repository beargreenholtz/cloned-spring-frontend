import React from 'react';

import { IProjectsList, ICategory, IType } from '../../../interfaces/responses';
import classes from './Main.module.scss';

import Intro from './Intro';
import Projects from './Projects';
import Footer from '../../layout/Footer';
import ClientCarousel from '@/ui/ClientCarousel';

interface IProps {
	readonly projectsList: IProjectsList[];
	readonly categoriesList: ICategory[];
	readonly typesList: IType[];
}

const MainView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<section className={classes['container']}>
			<Intro projectsList={props.projectsList} />
			{props.projectsList.length > 0 && (
				<Projects
					isMainPage
					projectsList={props.projectsList}
					categoriesList={props.categoriesList}
					typesList={props.typesList}
				/>
			)}
			<div className={classes['footerContainer']}>
				<Footer />
				<ClientCarousel />
			</div>
		</section>
	);
};

MainView.displayName = 'MainView';
MainView.defaultProps = {};

export default React.memo(MainView);
