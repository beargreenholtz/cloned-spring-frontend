import React, { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';

import { backendApi } from '../../../utils/http';
import type { IProjectsList, ICategory, IType } from '../../../interfaces/responses';

import MainView from './Main.view';

interface IProps {}

const Main: React.FC<IProps> = () => {
	const [projectsListState, setProjectsListState] = useState<IProjectsList[]>([]);
	const [categoriesListState, setCategoriesListState] = useState<ICategory[]>([]);
	const [typesListState, setTypesListState] = useState<IType[]>([]);

	useEffect(() => {
		backendApi
			.get(`${process.env['NEXT_PUBLIC_BACKEND_URL']}/api/categories`)
			.then((response: AxiosResponse) => {
				setCategoriesListState(() => response.data.data);
			});
	}, [backendApi]);

	useEffect(() => {
		backendApi.get(`${process.env['NEXT_PUBLIC_BACKEND_URL']}/api/types`).then((response: AxiosResponse) => {
			setTypesListState(() => response.data.data);
		});
	}, [backendApi]);

	useEffect(() => {
		backendApi
			.get(
				`${process.env['NEXT_PUBLIC_BACKEND_URL']}/api/projects?fields[0]=name&fields[1]=description&populate[0]=media&populate[1]=categories&fields[3]=isMainPage&fields[4]=date`,
			)
			.then((response: AxiosResponse) => {
				const sortedProjectsList = response.data.data.sort((a: IProjectsList, b: IProjectsList) => {
					const dateA = new Date(a.attributes.date);
					const dateB = new Date(b.attributes.date);

					return dateB.getTime() - dateA.getTime();
				});

				setProjectsListState(() => sortedProjectsList);
			});
	}, [backendApi]);

	return (
		<MainView
			projectsList={projectsListState}
			categoriesList={categoriesListState}
			typesList={typesListState}
		/>
	);
};

Main.displayName = 'Main';
Main.defaultProps = {};

export default React.memo(Main);
