import icons from '@/assets/icons';

interface ISocialMedia {
	readonly name: string;
	readonly url: string;
	readonly icon: keyof typeof icons;
}

export const socialMedia: ISocialMedia[] = [
	{
		name: 'Instagram',
		url: 'https://www.instagram.com/spring_films/',
		icon: 'instagram',
	},
	{
		name: 'Facebook',
		url: 'https://www.facebook.com/spring.production.il',
		icon: 'facebook',
	},
	{
		name: 'Linkedin',
		url: 'https://www.linkedin.com/company/spring-productions/about/',
		icon: 'linkedin',
	},
	{ name: 'Youtube', url: 'https://www.youtube.com/channel/UC_K2CuTZHYNOhfzXlR4mVOQ', icon: 'youtube' },
	{ name: 'Vimeo', url: 'https://vimeo.com/springfilm', icon: 'vimeo' },
];
