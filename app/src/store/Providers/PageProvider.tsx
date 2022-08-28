import { useEffect } from "react";
import { pageStore, FullReducer } from "../page.store";

interface PropTypes {
	children: React.ReactNode;
	value?: FullReducer | Record<string, any>;
}

export function PageProvider ({ children, value = {} }: PropTypes) {

	useEffect(() => {
		pageStore.setState(prev => ({ ...prev, ...value }));
	}, [value]);

	return <>
		{children}
	</>;
}
