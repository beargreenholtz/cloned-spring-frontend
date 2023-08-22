import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';

import { concatClasses, concatDiverseClasses } from '../../../../utils/component';

import Category from '../../../ui/Category';
import type { ICategory, IProjectsDescription, IProjectsList, IType } from '../../../../interfaces/responses';

interface IProps {
	readonly isMainPage: boolean;
	readonly isVisible: boolean;
	readonly isProjectDescriptionVisible: boolean;
	readonly categoriesList: ICategory[];
	readonly selectedCategories: ICategory[];
	readonly selectedTypes: IType[];
	readonly projectsList: IProjectsList[];
	readonly typesList: IType[];
	readonly projectsDescription: IProjectsDescription | null;
	readonly maxProjectsVisibleIndex: number;
	readonly onViewPort: (_: boolean) => void;
	readonly onProjectDescriptionViewPort: (_: boolean) => void;
	readonly onSetMoreProjectsVisible: (_: boolean) => void;
	readonly onSelectCategory: (_: ICategory) => void;
	readonly onSelectAllCategories: () => void;
	readonly onSelectType: (_: IType) => void;
	readonly onSelectAllTypes: () => void;
	readonly onNavigateToProject: (_: string) => void;
}

import classes from './Projects.module.scss';
import ProjectCard from '../../../ui/ProjectCard';
import Intrested from '../Intrested';

const ProjectsView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const headerClassesMobile = props.isVisible
		? concatDiverseClasses(
				classes['container__headerMobile'],
				classes['container__headerMobile--visible'],
				'animate__animated animate__zoomIn',
		  )
		: concatClasses(classes, 'container__headerMobile', 'container__headerMobile--hidden');

	const allCategoriesButtonClasses =
		props.selectedCategories.length === 0
			? concatClasses(classes, 'innerRow__all', 'innerRow__all--selected')
			: classes['innerRow__all'];

	const projectsDescriptionBoxClasses = concatDiverseClasses(classes['projectsDescriptionBox']);

	const projectsDescriptionBoxMobileClasses = concatDiverseClasses(
		classes['projectsDescriptionBoxMobile'],
		props.isProjectDescriptionVisible
			? classes['projectsDescriptionBoxMobile--visible']
			: classes['projectsDescriptionBoxMobile--hidden'],
		props.isProjectDescriptionVisible ? 'animate__animated animate__zoomIn' : '',
	);

	return (
		<section className={classes['container']}>
			{props.isMainPage ? (
				<>
					<h1 className={classes['container__header']}>
						{props.projectsDescription?.attributes.header}
					</h1>
					{props.projectsDescription?.attributes.header.split(' ').map((item, i) => {
						return (
							<VisibilitySensor key={i} partialVisibility onChange={props.onViewPort}>
								<h1 className={headerClassesMobile}>{item}</h1>
							</VisibilitySensor>
						);
					})}
					<div className={projectsDescriptionBoxClasses}>
						<p className={classes['projectsDescriptionBox__description']}>
							{props.projectsDescription?.attributes.description}
						</p>
					</div>
					<VisibilitySensor
						offset={{ bottom: 150 }}
						partialVisibility
						onChange={props.onProjectDescriptionViewPort}
					>
						<div className={projectsDescriptionBoxMobileClasses}>
							<p className={classes['projectsDescriptionBoxMobile__descriptionMobile']}>
								{props.projectsDescription?.attributes.descriptionMobile}
							</p>
						</div>
					</VisibilitySensor>
				</>
			) : (
				<div className={classes['innerCategories']}>
					<span className={classes['innerCategories__title']}>Projects:</span>
					<div className={classes['filtersList']}>
						<div className={classes['innerRow']}>
							<button
								className={allCategoriesButtonClasses}
								type="button"
								onClick={props.onSelectAllCategories}
							>
								All
							</button>
							{props.categoriesList.map((category) => (
								<Category
									key={category.id}
									element={category}
									selectedElements={props.selectedCategories}
									onSelectElement={props.onSelectCategory}
								/>
							))}
						</div>
					</div>
				</div>
			)}
			<div className={classes['innerProjects']}>
				<div className={classes['projectsContainer']}>
					{props.projectsList.map((project, i) => {
						const isEven = i % 2 === 0;
						const isMainPage = project.attributes.isMainPage;
						const projectId = project.id.toString();
						const projectName = project.attributes.name;
						const category = project.attributes.categories.data[0]?.attributes.name;
						const year = project.attributes.date?.split('-')[0] ?? '';
						const media = project.attributes.media.data
							? project.attributes.media.data[0]?.attributes.url
							: '';

						if (!isEven || (props.isMainPage && !isMainPage)) {
							return null;
						}

						return (
							<button
								key={project.id}
								type="button"
								className={classes[`${isEven ? 'leftProject' : 'rightProject'}`]}
								onClick={() => props.onNavigateToProject(projectId)}
							>
								<ProjectCard
									isMainPage={isMainPage}
									index={i}
									maxProjectsVisibleIndex={props.maxProjectsVisibleIndex}
									projectName={projectName}
									category={category}
									year={year}
									media={media}
								/>
							</button>
						);
					})}
				</div>
				<div className={classes['projectsContainer']}>
					{props.projectsList.map((project, i) => {
						const isEven = i % 2 === 0;
						const isMainPage = project.attributes.isMainPage;
						const projectId = project.id.toString();
						const projectName = project.attributes.name;
						const category = project.attributes.categories.data[0]?.attributes.name;
						const year = project.attributes.date?.split('-')[0] ?? '';
						const media = project.attributes.media.data
							? project.attributes.media.data[0]?.attributes.url
							: '';

						if (isEven || (props.isMainPage && !isMainPage)) {
							return null;
						}

						return (
							<button
								key={project.id}
								type="button"
								className={classes[`${isEven ? 'leftProject' : 'rightProject'}`]}
								onClick={() => props.onNavigateToProject(projectId)}
							>
								<ProjectCard
									index={i}
									isMainPage={isMainPage}
									maxProjectsVisibleIndex={props.maxProjectsVisibleIndex}
									projectName={projectName}
									category={category}
									year={year}
									media={media}
								/>
							</button>
						);
					})}
				</div>
			</div>

			{!props.isMainPage && (
				<VisibilitySensor offset={{ bottom: -1000 }} onChange={props.onSetMoreProjectsVisible}>
					<Intrested typesList={props.typesList} />
				</VisibilitySensor>
			)}
		</section>
	);
};

ProjectsView.displayName = 'ProjectsView';
ProjectsView.defaultProps = {};

export default React.memo(ProjectsView);
