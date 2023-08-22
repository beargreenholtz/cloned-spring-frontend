import { useRouter } from 'next/router';
import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

interface IProps {
	readonly component: any;
}

const Preload: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	// const location = useLocation();
	const router = useRouter();

	useEffect(() => {
		const loadComponent = async () => {
			await props.component.preload();
		};
		loadComponent();
	}, [router.pathname, props.component]);

	return null;
};

Preload.displayName = 'Preload';
Preload.defaultProps = {};

export default Preload;
