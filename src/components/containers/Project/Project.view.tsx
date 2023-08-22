import React from 'react';
import Image from 'next/image';

import NavigateBackButton from '../../ui/NavigateBackButton';
import { IProjectContent } from '../../../interfaces/responses';

import classes from './Project.module.scss';
import ReactPlayer from 'react-player';

interface IProps {
	readonly projectContent: IProjectContent | null;
	readonly hasWindow: boolean;
}

const ProjectView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const videoUrl = props.projectContent?.attributes.video;
	const name = props.projectContent?.attributes.name;
	const categories = props.projectContent?.attributes.categories.data;
	const year = props.projectContent?.attributes.date?.split('-')[0] ?? '';

	const mediaGallery = props.projectContent?.attributes.media.data;

	const categoriesFirst = props.projectContent?.attributes.categories.data;

	return (
		<section className={classes['container']}>
			<div className={classes['navigateBack']}>
				<NavigateBackButton theme="light" />
			</div>
			{props.hasWindow && (
				<div className={classes['innerVideo']}>
					<ReactPlayer
						url={videoUrl}
						width="100%"
						height="100%"
						onContextMenu={(e: any) => e.preventDefault()}
					/>
				</div>
			)}
			<div className={classes['textContainer']}>
				<div className={classes['firstLine']}>
					<div className={classes['firstLine__name']}>{name}</div>
					<div className={classes['firstLineCategoryAndYear']}>
						<div className={classes['firstLineCategoryAndYear__category']}>
							{categories ? categories[0]?.attributes.name : ''}
							&#44;
						</div>
						<div className={classes['firstLineCategoryAndYear__year']}>{year}</div>
					</div>
				</div>
				<div className={classes['secondLine']}>
					{categoriesFirst
						? categoriesFirst.map((item, i) => {
								const firstCategoryName = item.attributes.name;

								return (
									<div key={i} className={classes['firstCategoryNames']}>
										{firstCategoryName}
									</div>
								);
						  })
						: null}
				</div>
			</div>
			<div className={classes['galleryContainer']}>
				{mediaGallery
					? mediaGallery.map((item, i) => {
							const url = item.attributes.url;
							return (
								<div key={i} className={classes['innerImage']}>
									<Image
										className={classes['innerImage__image']}
										src={url}
										alt="gallery"
										width={100}
										height={100}
										quality={100}
									/>
								</div>
							);
					  })
					: null}
			</div>
		</section>
	);
};

ProjectView.displayName = 'ProjectView';
ProjectView.defaultProps = {};

export default React.memo(ProjectView);
