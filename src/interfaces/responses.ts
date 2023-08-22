export interface IProjectsList {
	readonly id: number;
	readonly attributes: {
		readonly name: string;
		readonly description: string;
		readonly isMainPage: boolean;
		readonly date: string;
		readonly media: {
			readonly data: {
				readonly id: number;
				readonly attributes: {
					readonly name: string;
					readonly alternativeText: string;
					readonly caption: string;
					readonly url: string;
					readonly height: string;
					readonly width: string;
				};
			}[];
		};
		readonly categories: {
			readonly data: ICategory[];
		};
		readonly types: {
			readonly data: IType[];
		};
	};
}

export interface IVideosList {
	readonly id: number;
	readonly attributes: {
		readonly videos: {
			readonly web: string[];
			readonly mobile: string[];
		};
	};
}

export interface ICategory {
	readonly id: number;
	readonly attributes: {
		readonly name: string;
		readonly description: string;
		readonly createdAt: string;
	};
}

export interface IType {
	readonly id: number;
	readonly attributes: {
		readonly name: string;
		readonly description: string;
		readonly createdAt: string;
	};
}

export interface IContentSection {
	readonly id: number;
	readonly attributes: {
		readonly title: string;
		readonly description: string;
		readonly isUpperPart: boolean;
		readonly order?: number;
	};
}

export interface IAboutContent {
	readonly id: number;
	readonly attributes: {
		readonly title: string;
		readonly description: string;
		readonly bottomDescription: string;
		readonly media: {
			readonly data: {
				readonly attributes: {
					readonly url: string;
				};
			};
		};
	};
}

export interface IContactContent {
	readonly id: number;
	readonly attributes: {
		readonly email: string;
		readonly city: string;
		readonly fullAdress: string;
	};
}

export interface IClientContent {
	readonly id: number;
	readonly attributes: {
		readonly clientName: string;
		readonly logo?: {
			readonly data: {
				readonly attributes: {
					readonly url: string;
				};
			}[];
		};
	};
}

export interface IProjectContent {
	readonly id: number;
	readonly attributes: {
		readonly name: string;
		readonly description: string;
		readonly video: string;
		readonly date: string;
		readonly categories: {
			readonly data: {
				readonly id: number;
				readonly attributes: {
					readonly name: string;
					readonly createdAt: string;
				};
			}[];
		};
		readonly types: any;
		readonly media: {
			readonly data: {
				readonly id: number;
				readonly attributes: {
					readonly name: string;
					readonly caption: string;
					readonly url: string;
				};
			}[];
		};
	};
}

export interface IProjectsDescription {
	readonly id: number;
	readonly attributes: {
		readonly header: string;
		readonly description: string;
		readonly descriptionMobile: string;
	};
}

export interface CustomIframeProps
	extends React.DetailedHTMLProps<React.IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement> {
	autoplay?: boolean;
	loop?: boolean;
}
